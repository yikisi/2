const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const race_indicator = require('#/page/components/race-indicator');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  attr_bg_colors,
  celebration_color,
  money_color,
} = require('#/data/color-const');
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

const { __, i18n } = require('#/i18n/selector');

function get_progress_bar() {
  return ['hp', 'tp'].reduce((p, c, i) => {
    const val = era.get(`base:0:${i}`);
    const limit = era.get(`maxbase:0:${i}`);
    p.push(
      { config: { offset: i, width: 2 }, content: __(c), type: 'text' },
      {
        config: { color: attr_bg_colors[c], height: 22, width: 9 },
        inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
        percentage: (val * 100) / limit,
        type: 'progress',
      },
    );
    return p;
  }, []);
}

/** @param {boolean} [enable_race_info] */
function page_header(enable_race_info) {
  let cur_year = era.get('flag:当前年');

  if (!cur_year) {
    era.drawLine();
    era.print('当前未加载存档', { align: 'center' });
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
      .map((e) => {
        const ret = sys_reg_race(e).curr;
        return {
          id: e,
          race: ret.race,
          week: ret.week,
        };
      })
      .filter((e) => e.week === cur_rounds);
    const trainer_title = get_trainer_title();
    const trainer_title_color = get_trainer_color(trainer_title.level);
    const trainer_buff = get_trainer_train_buff(0, trainer_title.level);
    const money_buff = era.get('global:金钱加成');
    const rec_trainers = [304, 306]
      .filter((e) => era.get(`cflag:${e}:招募状态`) === recruit_flags.yes)
      .map((e) => `[${i18n().kojo[e].buff}]`);
    let billings = '账单：';
    let money_change = 0;
    sys_get_billings().forEach((e, i) => {
      if (e.repay !== 0 && e.timer !== 0) {
        let delta = e.repay;
        if (delta > 0) {
          delta = Math.floor((e.repay * (100 + money_buff)) / 100);
        }
        money_change += delta;
        billings += `\n${delta > 0 ? '+' : ''}${delta}`;
        switch (e.creditor) {
          case creditors.invest:
            billings += ` (${get_display_name(era.get('callname:349:-2'))} 投资收益)`;
            break;
          case creditors.annul_bonus:
            billings += ' (月工资+年终奖)';
            break;
          case creditors.salary:
            billings += ' (月工资)';
            break;
          default:
            if (e.timer > 0) {
              billings += ` (${get_display_name(era.get(`callname:${e.creditor}:-2`))}${i === 0 ? ' · 主要' : ''} 余${e.timer}周)`;
            } else {
              billings += ` (${get_display_name(era.get(`callname:${e.creditor}:-2`))} 献金)`;
            }
        }
      }
    });
    const status_list = sys_get_status(0);
    const title_info = [
      {
        color: trainer_title_color,
        fontWeight: 'bold',
        ...get_abbr_number(cur_fame),
      },
      ' 声望 ',
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
    title_info.push(...race_indicator(0));
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 16 },
            content: [
              ...date_indicator(),
              {
                content: celebration ? ` [${celebration}]` : '',
                color: celebration_color,
              },
            ],
            type: 'text',
          },
          {
            config: { width: 8 },
            content: [
              '位于 ',
              {
                content:
                  i18n().location[location_enum.keys[era.get('flag:当前位置')]],
                fontWeight: 'bold',
              },
            ],
            type: 'text',
          },
          {
            config: { width: 16 },
            content: title_info,
            type: 'text',
          },
          {
            config: { width: 8 },
            content: [
              {
                ...get_abbr_number(cur_coin),
                color: money_color,
                fontWeight: 'bold',
              },
              money_change !== 0 ? ' ' : '',
              {
                color: money_change > 0 ? 'palegreen' : 'orangered',
                content:
                  money_change !== 0
                    ? `(${money_change > 0 ? '+' : ''}${money_change.toLocaleString()})`
                    : '',
                fontWeight: 'bold',
                opacity: 0.5,
                title: billings,
              },
              ' 马币',
            ],
            type: 'text',
          },
          ...get_progress_bar(),
          {
            config: { width: 2 },
            content: '状态',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: status_list.length > 0 ? status_list : '正常',
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
                  content: '本周赛事',
                  type: 'text',
                },
                ...race_characters.slice(0, 2).map((e) => {
                  return {
                    config: { align: 'center' },
                    content: [
                      get_chara_talk(e.id).get_colored_name(),
                      ' ',
                      race_infos[e.race].get_colored_name(),
                    ],
                    type: 'text',
                  };
                }),
                enable_race_info
                  ? {
                      accelerator: 991,
                      config: {
                        align: 'center',
                        disableWarning: true,
                        showAcc: false,
                      },
                      content: '查看全部',
                      type: 'button',
                    }
                  : {
                      config: { align: 'center' },
                      content: race_characters.length > 2 ? '……' : '',
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
module.exports.get_progress_bar = get_progress_bar;
