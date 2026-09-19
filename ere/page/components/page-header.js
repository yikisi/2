const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const get_progress_bar = require('#/page/components/get-progress-bar');
const race_indicator = require('#/page/components/race-indicator');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { celebration_color, money_color } = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_celebration,
  get_trainer_level,
  get_trainer_title,
  get_trainer_train_buff,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { creditors, get_trainer_color } = require('#/data/other-const');
const { race_infos } = require('#/data/race/race-const');

const { __, i18n, lan } = require('#/i18n/selector');

/** @param {boolean} [enable_race_info] */
function page_header(enable_race_info) {
  const _lan = lan();
  let cur_year = era.get('flag:当前年');
  if (!cur_year) {
    era.drawLine();
    era.print(i18n().ui_hd_no_save, { align: 'center' });
  } else {
    const celebration = get_celebration();
    const cur_coin = era.get('flag:当前马币');
    const cur_fame = era.get('flag:当前声望');
    const cur_rounds = era.get('flag:当前回合数');
    const race_characters = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    )
      .map((cid) => ({
        ...sys_reg_race(cid).curr,
        id: cid,
      }))
      .filter((reg) => reg.week === cur_rounds);
    const trainer_title = get_trainer_title();
    const trainer_title_color = get_trainer_color(trainer_title.level);
    const trainer_buff = get_trainer_train_buff(0, trainer_title.level);
    const money_buff = era.get('global:金钱加成');
    const rec_trainers = [304, 306]
      .filter((cid) => era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes)
      .map((cid) =>
        i18n().tb_talent.template.replace('%NAME%', i18n().kojo[cid].buff),
      );
    let billings = i18n().ui_billing_title_start;
    let money_change = 0;
    sys_get_billings().forEach((b, i) => {
      if (b.repay !== 0 && b.timer !== 0) {
        let delta = b.repay;
        if (delta > 0) {
          delta = Math.floor((b.repay * (100 + money_buff)) / 100);
        }
        money_change += delta;
        const _income = (delta > 0 ? '+' : '') + delta.toLocaleString(_lan);
        billings += '\n';
        switch (b.creditor) {
          case creditors.invest:
            billings += i18n()
              .ui_billing_invest_template.replace('%INCOME%', _income)
              .replace('%CHARA%', get_display_name(era.get('callname:349:-2')));
            break;
          case creditors.annul_bonus:
            billings += i18n().ui_billing_bonus_template.replace(
              '%INCOME%',
              _income,
            );
            break;
          case creditors.salary:
            billings += i18n().ui_billing_salary_template.replace(
              '%INCOME%',
              _income,
            );
            break;
          default:
            if (b.timer > 0) {
              billings += i18n()
                .ui_billing_borrow_template.replace('%INCOME%', _income)
                .replace(
                  '%CHARA%',
                  get_display_name(era.get(`callname:${b.creditor}:-2`)),
                )
                .replace(
                  '%MAIN%',
                  i === 0 ? ' ' + i18n().ui_billing_borrow_main : '',
                )
                .replace('%TIMER%', b.timer.toString());
            } else {
              billings += i18n()
                .ui_billing_slave_template.replace('%INCOME%', _income)
                .replace(
                  '%CHARA%',
                  get_display_name(era.get(`callname:${b.creditor}:-2`)),
                );
            }
        }
      }
    });
    const income_info =
      money_change !== 0
        ? [
            ' ',
            {
              color: money_change > 0 ? 'palegreen' : 'orangered',
              content: i18n().ui_hd_income_template.replace(
                '%INCOME%',
                `${money_change > 0 ? '+' : ''}${money_change.toLocaleString(_lan)}`,
              ),
              fontWeight: 'bold',
              opacity: 0.5,
              title: billings,
            },
          ]
        : [];
    const status_list = sys_get_status(0, 36);
    const title_info = [
      ...i18n().get_ui_hd_honour({
        ...get_abbr_number(cur_fame),
        color: trainer_title_color,
        fontWeight: 'bold',
      }),
      ' ',
    ];
    const t_title = CharaTitles.get(0).get_curr_title();
    if (t_title) {
      const tname = __(`title.${t_title.n}`, t_title.n);
      const tdesc = CharaTitles.get_desc(t_title.n);
      title_info.push({
        color: t_title.c,
        content: i18n().title.template_in_game.replace('%NAME%', tname),
        fontWeight: 'bold',
        title: tdesc
          ? i18n()
              .title_desc.tip_template.replace('%NAME%', tname)
              .replace('%DESC%', tdesc) + '\n'
          : '',
      });
    } else {
      title_info.push({
        color: trainer_title_color,
        content: i18n().title.template_in_game.replace(
          '%NAME%',
          trainer_title.full(),
        ),
        fontWeight: 'bold',
        title: '',
      });
    }
    title_info.at(-1).title += i18n()
      .title_desc.tip_template.replace('%NAME%', trainer_title.full())
      .replace(
        '%DESC%',
        i18n().title_desc.get_trainer_title_desc(
          trainer_buff,
          get_trainer_level(),
          rec_trainers,
        ),
      );
    const race_info = race_indicator(0);
    if (race_info.length > 0) {
      title_info.push(' ', ...race_info);
    }
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 16 },
            content: [
              ...date_indicator(),
              {
                content: celebration
                  ? ' ' +
                    i18n().celebration_template.replace(
                      '%CELEBRATION%',
                      celebration,
                    )
                  : '',
                color: celebration_color,
              },
            ],
            type: 'text',
          },
          {
            config: { width: 8 },
            content: i18n().get_ui_hd_location({
              content:
                i18n().location[location_enum.keys[era.get('flag:当前位置')]],
              fontWeight: 'bold',
            }),
            type: 'text',
          },
          {
            config: { width: 16 },
            content: title_info,
            type: 'text',
          },
          {
            config: { width: 8 },
            content: i18n().get_ui_hd_money(
              {
                ...get_abbr_number(cur_coin),
                color: money_color,
                fontWeight: 'bold',
              },
              income_info,
            ),
            type: 'text',
          },
          ...get_progress_bar(0, {
            prog_width: 9,
            tp_offset: true,
            use_empty_line: false,
          }),
          {
            config: { width: 2 },
            content: i18n().tb_status.n_status,
            type: 'text',
          },
          {
            config: { width: 22 },
            content:
              status_list.length > 0 ? status_list : i18n().tb_status.normal,
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      {
        columns:
          race_characters.length > 0
            ? [
                {
                  config: { align: 'center', fontWeight: 'bold' },
                  content: i18n().ui_hd_current_race,
                  type: 'text',
                },
                ...race_characters.slice(0, 2).map((e) => ({
                  config: { align: 'center' },
                  content: [
                    get_chara_talk(e.id).get_colored_name(),
                    ' ',
                    race_infos[e.race].get_colored_name(),
                  ],
                  type: 'text',
                })),
                enable_race_info
                  ? {
                      accelerator: 991,
                      config: {
                        align: 'center',
                        disableWarning: true,
                        showAcc: false,
                      },
                      content: i18n().ui_hd_races,
                      type: 'button',
                    }
                  : {
                      config: { align: 'center' },
                      content:
                        race_characters.length > 2 ? i18n().ui_ellipses : '',
                      type: 'text',
                    },
              ]
            : [],
        config: { align: 'center', width: 8 },
      },
    );
  }
}

module.exports = page_header;
