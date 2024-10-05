/**
 * @file 乙名史悦子 - 育成
 *
 * @author 雞雞
 * @author 无名黑奴
 */
const {
  get,
  printAndWait,
  printInColRows,
  printMultiColumns,
  println,
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

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_entry, sort_list } = require('#/utils/list-utils');

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

const random_trainers = [
  undefined,
  '雞雞',
  '无名路人',
  '无名黑奴',
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
];

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
      content: [
        '年度总胜场：',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history.filter((r) => r.rank === 1).length.toLocaleString(),
        },
        { isBr: true },
        '年度总赏金：',
        {
          color: money_color,
          fontWeight: 'bold',
          content: Math.floor(
            history.reduce(
              (p, c) =>
                p +
                (c.rank <= 5
                  ? race_infos[c.race].prize * prize_ratios[c.rank - 1]
                  : 0),
              0,
            ),
          ).toLocaleString(),
        },
        ' 马币',
        { isBr: true },
        '年度G1胜场：',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
            )
            .length.toLocaleString(),
        },
        { isBr: true },
        '年度重赏胜场：',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class <= class_enum.G3 && r.rank === 1,
            )
            .length.toLocaleString(),
        },
      ],
      type: 'text',
    },
    {
      config: { fontSize: '1.25rem', isParagraph: true },
      content: '主胜鞍',
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

module.exports = async (hook, extra_flag, event_object) => {
  if (event_object?.arg !== 'reward') {
    throw new Error();
  }
  if (!get('flag:初见URA颁奖')) {
    set('flag:初见URA颁奖', 1);
  }
  const loc = get('flag:当前位置');
  set('flag:当前位置', location_enum.race);
  const etsuko = get_chara_talk(303),
    me = get_chara_talk(0),
    etsuko_check =
      get('cflag:303:育成回合计时') < 3 * 48 || !check_pregnant_unprotect(303),
    report = etsuko_check
      ? (args) => say_by_passer_by('主持人', args)
      : (args) => etsuko.say_and_wait(args),
    year = get('flag:当前年') - 1;
  let fame_reward = 0;
  await print_event_name('URA颁奖典礼', etsuko);
  await report([
    '各位赛',
    etsuko.get_uma_sex_title(),
    '粉丝们，晚上好！各位热切期盼的年度盛事，URA颁奖典礼就要开始了！',
  ]);
  await report([
    '与往常一样，大会方设立了多个奖项，向拼尽全力以最高的竞技水平带来精彩表演的各位赛',
    etsuko.get_uma_sex_title(),
    '，以及在背后默默支持',
    etsuko.get_uma_sex_title(),
    '们的各位训练员们献上敬意！',
  ]);
  if (etsuko_check) {
    await report([
      '今年也由我 ',
      etsuko.get_colored_actual_name(),
      ' 来主持典礼，请大家多多指教了！',
    ]);
  }
  println();
  await report([
    '在正式开始颁奖前，让我们来重温一下',
    year,
    '年的G1比赛都有哪些赛',
    etsuko.get_uma_sex_title(),
    '脱颖而出！',
  ]);
  const team_list = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).map((e) => ({
    id: e,
    history: new RaceHistory(e).get_values().filter((r) => r.year === year),
  }));
  const g1_list = team_list
    .map((e) => ({
      id: e.id,
      g1_count: e.history.filter(
        (r) => race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
      ).length,
      history: e.history,
    }))
    .filter((e) => e.g1_count > 0);
  println();
  if (g1_list.length > 0) {
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
    await waitAnyKey();
  } else {
    await printAndWait(
      ['（一些选手的名字，可惜没有 ', me.get_colored_name(), ' 的队伍成员）'],
      { align: 'center' },
    );
  }
  println();
  await report('在此再次感谢各位选手为竞赛作出的努力！');
  println();
  await report('那么事不宜迟，立即就来开始公布备受瞩目的各个奖项吧！');
  println();
  await report('首先是……本年度《最佳训练员大奖》！');
  println();
  const wins = team_list.reduce(
      (p, c) => p + c.history.filter((e) => e.rank === 1).length,
      0,
    ),
    all = team_list.reduce((p, c) => p + c.history.length, 0),
    prize = team_list.reduce(
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
    ),
    is_best_trainer = wins >= 30 && wins * 100 >= all * 30 && prize >= 35000;
  if (is_best_trainer) {
    const mvp_wins = sort_list(
      sort_list(team_list, get_mvp_sort_by)[0].history.filter(
        (e) => e.rank === 1 && e.race !== race_enum.begin_race,
      ),
      (e) =>
        ((5 - race_infos[e.race].race_class) << 6) + race_infos[e.race].date,
    );
    setAlign('center');
    printMultiColumns([
      {
        config: { fontSize: '1.5rem', isParagraph: true },
        content: [me.actual_name, '训练员'],
        type: 'text',
      },
      {
        config: { fontSize: '1.25rem', isParagraph: true },
        content: [
          '年度团队总胜场：',
          {
            color: buff_colors[1],
            fontWeight: 'bold',
            content: wins.toLocaleString(),
          },
          { isBr: true },
          '年度团队总赏金：',
          {
            color: money_color,
            fontWeight: 'bold',
            content: Math.floor(prize).toLocaleString(),
          },
          ' 马币',
          { isBr: true },
          '年度团队G1胜场：',
          {
            color: buff_colors[1],
            content: g1_list
              .reduce((p, c) => p + c.g1_count, 0)
              .toLocaleString(),
            fontWeight: 'bold',
          },
          { isBr: true },
          '年度团队重赏胜场：',
          {
            color: buff_colors[1],
            content: team_list
              .reduce(
                (p, c) =>
                  p +
                  c.history.filter(
                    (e) =>
                      race_infos[e.race].race_class <= class_enum.G3 &&
                      e.rank === 1,
                  ).length,
                0,
              )
              .toLocaleString(),
            fontWeight: 'bold',
          },
        ],
        type: 'text',
      },
      {
        config: { fontSize: '1.25rem', isParagraph: true },
        content: '主胜鞍',
        type: 'text',
      },
      ...mvp_wins.slice(0, 5).map((e) => ({
        content: [race_infos[e.race].get_colored_name_with_class()],
        type: 'text',
      })),
      ...(mvp_wins.length > 5 ? [{ content: '……', type: 'text' }] : ['']),
    ]);
    await waitAnyKey();
    setAlign('left');
    await report([me.actual_name, '训练员的努力有目共睹呢！']);
    fame_reward += 500;
  } else {
    const trainer = get_random_entry(random_trainers);
    if (trainer) {
      await report([trainer, '训练员的努力有目共睹呢！']);
    } else {
      await report('由于本年度没有达标的候选人……');
      await report('非常遗憾，希望来年能看到得奖的幸运儿！');
    }
  }
  println();
  await report('然后是……本年度《最佳新秀大奖》！');
  println();
  const junior = sort_list(
    g1_list.filter(
      (e) =>
        get(`cflag:${e.id}:育成回合计时`) === 47 + 4 &&
        e.history.filter((r) => r.rank === 1).length >= 3,
    ),
    get_mvp_sort_by,
  )[0];
  if (junior) {
    print_character_statistics(junior);
    await waitAnyKey();
    fame_reward += 50;
  } else {
    await printAndWait(
      [
        '（一位刚刚结束新秀年的选手的名字和照片，可惜并不是 ',
        me.get_colored_name(),
        ' 的队伍成员）',
      ],
      { align: 'center' },
    );
  }
  println();
  await report('希望这位选手能继续在赛场上发光发热呢！');
  println();
  await report('接下来是……本年度《最佳经典级大奖》！');
  println();
  const classic = sort_list(
    g1_list.filter(
      (e) =>
        get(`cflag:${e.id}:育成回合计时`) === 95 + 4 &&
        e.history.filter((r) => r.rank === 1).length >= 4,
    ),
    get_mvp_sort_by,
  )[0];
  if (classic) {
    print_character_statistics(classic);
    await waitAnyKey();
    fame_reward += 100;
  } else {
    await printAndWait(
      [
        '（一位刚刚结束经典年的选手的名字和照片，可惜并不是 ',
        me.get_colored_name(),
        ' 的队伍成员）',
      ],
      { align: 'center' },
    );
  }
  println();
  await report('已经逐渐成长成中流砥柱的模样了！');
  println();
  await report('然后是……本年度《最佳资深级大奖》！');
  println();
  const senior = sort_list(
    g1_list.filter(
      (e) =>
        get(`cflag:${e.id}:育成回合计时`) === 143 + 4 &&
        e.history.filter((r) => r.rank === 1).length >= 5,
    ),
    get_mvp_sort_by,
  )[0];
  if (senior) {
    print_character_statistics(senior);
    await waitAnyKey();
    fame_reward += 150;
  } else {
    await printAndWait(
      [
        '（一位刚刚结束资深年的选手的名字和照片，可惜并不是 ',
        me.get_colored_name(),
        ' 的队伍成员）',
      ],
      { align: 'center' },
    );
  }
  println();
  await report('毫无疑问，已经是百战老兵了！');
  println();
  await report([
    '最后！便是决定本年度最快、最高、最强的历史一刻！能在诸多名马之列中留下自己独一无二的印记的赛',
    etsuko.get_uma_sex_title(),
    '……到底是谁？！',
  ]);
  await report([
    '《年度代表',
    etsuko.get_uma_sex_title(),
    '》，这个最终的荣耀归属于——',
  ]);
  println();
  const uoty = sort_list(
    g1_list.filter(
      (e) =>
        get(`cflag:${e.id}:育成回合计时`) > 96 &&
        e.history.filter((r) => r.rank === 1).length >= 7,
    ),
    get_mvp_sort_by,
  )[0];
  if (uoty) {
    print_character_statistics(uoty);
    await waitAnyKey();
    fame_reward += 300;
  } else {
    await printAndWait(
      [
        '（一位选手的名字和照片，可惜并不是 ',
        me.get_colored_name(),
        ' 的队伍成员）',
      ],
      { align: 'center' },
    );
  }
  println();
  await report('此刻，最强者已经决出！');
  println();
  await report('感谢各位今天大驾光临，让我们明年再会吧！');
  println();
  const titles_dict = {};
  if (is_best_trainer) {
    (titles_dict[0] || (titles_dict[0] = [])).push({
      c: adaptability_colors.at(-1),
      n: `${year}年度最佳训练员`,
    });
  }
  if (junior) {
    get_attr_and_print_in_event(
      junior.id,
      new Array(5).fill(20),
      40,
      undefined,
      true,
    );
    (titles_dict[junior.id] || (titles_dict[junior.id] = [])).push({
      c: adaptability_colors.at(-5),
      n: `最佳新秀${etsuko.get_uma_sex_title()}`,
    });
  }
  if (classic) {
    get_attr_and_print_in_event(
      classic.id,
      new Array(5).fill(40),
      80,
      undefined,
      true,
    );
    (titles_dict[classic.id] || (titles_dict[classic.id] = [])).push({
      c: adaptability_colors.at(-3),
      n: `最佳经典${etsuko.get_uma_sex_title()}`,
    });
  }
  if (senior) {
    (titles_dict[senior.id] || (titles_dict[senior.id] = [])).push({
      c: adaptability_colors.at(-2),
      n: `最佳资深${etsuko.get_uma_sex_title()}`,
    });
  }
  if (uoty) {
    (titles_dict[uoty.id] || (titles_dict[uoty.id] = [])).push({
      c: adaptability_colors.at(-1),
      n: `${year}年度代表${etsuko.get_uma_sex_title()}`,
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
};
