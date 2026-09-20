const {
  get,
  printInColRows,
  printMultiColumns,
  set,
  setAlign,
  setHorizontalAlign,
  waitAnyKey,
} = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEdu = require('#/event/edu/edu-common');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const {
  adaptability_colors,
  buff_colors,
  money_color,
} = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum, prize_ratios } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n, lan } = require('#/i18n/selector');

/**
 * @param {{id:number,history:RaceResult[]}} chara_info
 * @returns {number}
 */
function get_mvp_sort_by(chara_info) {
  const metric = [0, 0, 0, 0];
  chara_info.history.forEach((e) => {
    if (e.rank === 1) {
      metric[Math.min(race_infos[e.race].race_class, 3)]++;
    }
  });
  return (metric[0] << 18) + (metric[1] << 12) + (metric[2] << 6) + metric[3];
}

/**
 * @param {number} id
 * @param {RaceResult[]} history
 */
function print_character_statistics({ id, history }) {
  setAlign('center');
  const main_wins = sort_list(
    history.filter((e) => e.rank === 1 && e.race !== race_enum.begin_race),
    (e) => ((5 - race_infos[e.race].race_class) << 6) + race_infos[e.race].date,
  );
  printMultiColumns([
    {
      config: { width: 4, offset: 10 },
      names: get_image(id)
        .map((e) => `${e}_半身`)
        .join('\t'),
      type: 'image.whole',
    },
    {
      content: [get_chara_talk(id).get_colored_name()],
      type: 'text',
    },
    {
      config: { fontSize: '1.25rem', isParagraph: true },
      content: i18n().timon.others.get_ur_uma_reward(
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter((r) => r.rank === 1)
            .length.toLocaleString(lan()),
        },
        {
          ...get_abbr_number(
            Math.floor(
              history.reduce(
                (p, c) =>
                  p +
                  (c.rank <= 5
                    ? race_infos[c.race].prize * prize_ratios[c.rank - 1]
                    : 0),
                0,
              ),
            ),
          ),
          color: money_color,
          fontWeight: 'bold',
        },
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
            )
            .length.toLocaleString(lan()),
        },
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class <= class_enum.G3 && r.rank === 1,
            )
            .length.toLocaleString(lan()),
        },
      ),

      type: 'text',
    },
    {
      config: { fontSize: '1.25rem', isParagraph: true },
      content: i18n().ui_signature_result,
      type: 'text',
    },
    ...main_wins.slice(0, 5).map((e) => ({
      content: [race_infos[e.race].get_colored_name_with_class()],
      type: 'text',
    })),
    ...(main_wins.length > 5 ? [{ content: '……', type: 'text' }] : []),
  ]);
  setAlign('left');
}

module.exports = class extends CustomizedEdu {
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} etsuko
   * @param {CharaTalk} me
   */
  async reward(etsuko, me) {
    if (!get('flag:初见URA颁奖')) {
      set('flag:初见URA颁奖', 1);
    }
    const loc = get('flag:当前位置');
    set('flag:当前位置', location_enum.race);
    const etsuko_check =
      get('cflag:303:育成回合计时') < 3 * 48 || !check_pregnant_unprotect(303);
    const report = etsuko_check
      ? (args) =>
          say_by_passer_by_and_wait(
            i18n().timon.others.ur_alternative_reporter,
            args,
          )
      : etsuko.say_and_wait.bind(etsuko);
    const year = get('flag:当前年') - 1;
    // FLAGNAME:116 = 角色性别
    const uma =
      get('flag:116') === 1 ? i18n().name.uma_boy : i18n().name.uma_girl;
    let fame_reward = 0;
    const team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).map((e) => ({
      id: e,
      history: RaceHistory.get(e)
        .get_values()
        .filter((r) => r.year === year),
    }));
    const g1_list = team_list
      .map((e) => ({
        id: e.id,
        g1_count: e.history.filter(
          (r) =>
            race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
        ).length,
        history: e.history,
      }))
      .filter((e) => e.g1_count > 0);
    const wins = team_list.reduce(
      (p, c) => p + c.history.filter((e) => e.rank === 1).length,
      0,
    );
    const all = team_list.reduce((p, c) => p + c.history.length, 0);
    const prize = team_list.reduce(
      (p, c) =>
        p +
        c.history.reduce(
          (hp, hc) =>
            hp +
            (hc.rank <= 5
              ? race_infos[hc.race].prize * prize_ratios[hc.rank - 1]
              : 0),
          0,
        ),
      0,
    );
    const is_best_trainer =
      wins >= 30 && wins * 100 >= all * 30 && prize >= 35000;
    const junior = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:育成回合计时`) === 47 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 3,
      ),
      get_mvp_sort_by,
    )[0];
    const classic = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:育成回合计时`) === 95 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 4,
      ),
      get_mvp_sort_by,
    )[0];
    const senior = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:育成回合计时`) === 143 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 5,
      ),
      get_mvp_sort_by,
    )[0];
    const uoty = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:育成回合计时`) > 96 &&
          e.history.filter((r) => r.rank === 1).length >= 7,
      ),
      get_mvp_sort_by,
    )[0];
    await print_title_with_kojo(
      i18n().timon.others,
      'ura_reward',
      etsuko,
      me,
      report,
      year.toString(),
      get('flag:116') === 1 ? i18n().name.uma_boy : i18n().name.uma_girl,
      etsuko_check,
      {
        g1:
          g1_list.length > 0 &&
          (() => {
            setHorizontalAlign('space-evenly');
            printInColRows(
              ...g1_list.map((e) => ({
                columns: [
                  {
                    names: get_image(e.id)
                      .map((e) => `${e}_半身`)
                      .join('\t'),
                    type: 'image.whole',
                  },
                  {
                    config: { align: 'center' },
                    content: [get_chara_talk(e.id).get_colored_actual_name()],
                    type: 'text',
                  },
                ],
                config: { width: 4 },
              })),
            );
            setHorizontalAlign('start');
          }),
        best_trainer:
          is_best_trainer &&
          (() => {
            const mvp_wins = sort_list(
              sort_list(team_list, get_mvp_sort_by)[0].history.filter(
                (e) => e.rank === 1 && e.race !== race_enum.begin_race,
              ),
              (e) =>
                ((5 - race_infos[e.race].race_class) << 6) +
                race_infos[e.race].date,
            );
            setAlign('center');
            printMultiColumns([
              {
                config: { fontSize: '1.5rem', isParagraph: true },
                content: i18n().name.trainer_template.replace(
                  '%NAME%',
                  me.actual_name,
                ),
                type: 'text',
              },
              {
                config: { fontSize: '1.25rem', isParagraph: true },
                content: i18n().timon.others.get_ur_trainer_reward(
                  {
                    color: buff_colors[1],
                    fontWeight: 'bold',
                    content: wins.toLocaleString(lan()),
                  },
                  {
                    ...get_abbr_number(Math.floor(prize)),
                    color: money_color,
                    fontWeight: 'bold',
                  },
                  {
                    color: buff_colors[1],
                    content: Object(
                      g1_list.reduce((p, c) => p + c.g1_count, 0),
                    ).toLocaleString(lan()),
                    fontWeight: 'bold',
                  },
                  {
                    color: buff_colors[1],
                    content: Object(
                      team_list.reduce(
                        (p, c) =>
                          p +
                          c.history.filter(
                            (e) =>
                              race_infos[e.race].race_class <= class_enum.G3 &&
                              e.rank === 1,
                          ).length,
                        0,
                      ),
                    ).toLocaleString(lan()),
                    fontWeight: 'bold',
                  },
                ),
                type: 'text',
              },
              {
                config: { fontSize: '1.25rem', isParagraph: true },
                content: i18n().ui_signature_result,
                type: 'text',
              },
              ...mvp_wins.slice(0, 5).map((e) => ({
                content: [race_infos[e.race].get_colored_name_with_class()],
                type: 'text',
              })),
              ...(mvp_wins.length > 5
                ? [{ content: i18n().ui_ellipses, type: 'text' }]
                : ['']),
            ]);
            setAlign('left');
          }),
        junior: junior && (() => print_character_statistics(junior)),
        classic: classic && (() => print_character_statistics(classic)),
        senior: senior && (() => print_character_statistics(senior)),
        uoty: uoty && (() => print_character_statistics(uoty)),
        default_best_trainer: get_random_entry([
          void 0,
          '雞雞',
          '无名路人',
          '黑奴队长',
          '天马闪光蹄',
          '黑奴一号',
          '露娜俘虏',
          '片手虾',
          '黑奴二号',
          'Necroz',
          '梦露',
          '幽白書',
          '袁本初',
          '99',
          '红红火火恍惚',
          '小黑',
          '红桃Q',
          '黑衣剑士',
          'O口口口口口',
          'フィンランド',
          'kxmodel',
          '植物牙线',
          'bug',
          'Advocator',
          '清音林檎',
          '科比 · 布莱恩特',
        ]),
      },
    );
    if (is_best_trainer) {
      fame_reward += 500;
    }
    if (junior) {
      fame_reward += 50;
    }
    if (classic) {
      fame_reward += 100;
    }
    if (senior) {
      fame_reward += 150;
    }
    if (uoty) {
      fame_reward += 300;
    }
    const titles_dict = {};
    if (is_best_trainer) {
      (titles_dict[0] || (titles_dict[0] = [])).push({
        c: adaptability_colors.at(-1),
        n: i18n().title.reward_t_title_template.replace(
          '%YEAR%',
          year.toString(),
        ),
      });
    }
    if (junior) {
      get_attr_and_print_in_event(junior.id, new Array(5).fill(20), 40);
      (titles_dict[junior.id] || (titles_dict[junior.id] = [])).push({
        c: adaptability_colors.at(-5),
        n: i18n()
          .title.best_title_template.replace('%CLASS%', i18n().a_edu_0)
          .replace('%UMA%', uma),
      });
    }
    if (classic) {
      get_attr_and_print_in_event(classic.id, new Array(5).fill(40), 80);
      (titles_dict[classic.id] || (titles_dict[classic.id] = [])).push({
        c: adaptability_colors.at(-3),
        n: i18n()
          .title.best_title_template.replace('%CLASS%', i18n().a_edu_1)
          .replace('%UMA%', uma),
      });
    }
    if (senior) {
      (titles_dict[senior.id] || (titles_dict[senior.id] = [])).push({
        c: adaptability_colors.at(-2),
        n: i18n()
          .title.best_title_template.replace('%CLASS%', i18n().a_edu_2)
          .replace('%UMA%', uma),
      });
    }
    if (uoty) {
      (titles_dict[uoty.id] || (titles_dict[uoty.id] = [])).push({
        c: adaptability_colors.at(-1),
        n: i18n()
          .title.reward_u_title_template.replace('%YEAR%', year.toString())
          .replace('%UMA%', uma),
      });
    }
    Object.entries(titles_dict).forEach((e) =>
      sys_add_titles(Number(e[0]), ...e[1]),
    );
    sys_change_fame(fame_reward);
    sys_like_chara(302, 0, fame_reward / 5);
    sys_like_chara(303, 0, fame_reward / 5);
    await waitAnyKey();
    set('flag:当前位置', loc);
  }
};
