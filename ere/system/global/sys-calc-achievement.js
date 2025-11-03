const era = require('#/era-electron');

const { join_list, sort_list } = require('#/utils/list-utils');

const { adaptability_colors } = require('#/data/color-const');

const dict = {};

const types = {
  edu: 0,
  race: 0,
  love: 0,
  sex: 0,
  birth: 0,
  end: 0,
  all: 0,
  hidden: 0,
};
Object.keys(types).forEach((e, i) => (types[e] = i));

/** @type {string[]} */
const type_names = [];
type_names[types.edu] = '育成';
type_names[types.race] = '赛事';
type_names[types.love] = '爱慕';
type_names[types.sex] = '调教';
type_names[types.birth] = '生育';
type_names[types.end] = '结局';
type_names[types.all] = '综合';
type_names[types.hidden] = '事迹';

const rarity = {
  3: '普通',
  4: '优秀',
  5: '精良',
  6: '史诗',
  7: '传说',
  8: 'UMA',
};

const platinum_type = {
  all: 0,
};
Object.keys(platinum_type).forEach((e, i) => (platinum_type[e] = i));
platinum_type.keys = Object.keys(platinum_type);

// TODO 二期成就待用
const platinum_tags = [];
platinum_tags[platinum_type.all] = '';

class GlobalAchievement {
  get #bean() {
    return era.get('global:全局成就') || era.set('global:全局成就', {});
  }

  get #fields() {
    return Object.keys(this).filter((m) => !(this[m] instanceof Function));
  }

  edu_one = ['教书育人', 4, '完成一次育成。', types.edu, platinum_type.all];
  edu_fiv = ['训练员楷模', 5, '完成五次育成。', types.edu, platinum_type.all];
  edu_ten = ['桃李满园', 6, '完成十次育成。', types.edu, platinum_type.all];
  edu_1_ex = [
    '二人三足',
    5,
    '在担当达成 [热恋] 以上关系的情况下完成一次育成。',
    types.edu,
    platinum_type.all,
  ];
  edu_sex = [
    '我的任务',
    6,
    '完成一次育成，且担当达成以下条件之一：\n' +
      '● 达成 [佳偶] 以上关系；\n' +
      '● 获得三级同心刻印，且没有任何负面刻印；\n' +
      '● 获得三级淫纹。\n',
    types.edu,
    platinum_type.all,
  ];
  edu_tch = [
    '为人师表',
    6,
    '完成一次育成，且担当满足以下条件：\n' +
      '● 和训练员没有血缘关系；\n' +
      '● 爱慕关系保持在 [朦胧] 及以下；\n' +
      '● 没有发生过任何性关系，包括睡奸。',
    types.edu,
    platinum_type.all,
  ];
  chan_sec = [
    '恍如一梦',
    5,
    '完成一个角色的第二次育成。',
    types.edu,
    platinum_type.all,
  ];
  chan_thd = [
    '倒带',
    6,
    '进行五次以上的重复育成。',
    types.edu,
    platinum_type.all,
  ];
  chan_mor = [
    '命运石之门',
    7,
    '对一个角色完成八次育成，以获得最高的技能点数费用减免。',
    types.edu,
    platinum_type.all,
  ];

  wins_one = [
    '战帅训练员',
    7,
    '培养任意担当获得称号 [百战百胜]。',
    types.race,
    platinum_type.all,
  ];
  wins_fiv = [
    '马色军团',
    7,
    '培养六名担当获得称号 [百战百胜]。',
    types.race,
    platinum_type.all,
  ];
  wins_ten = [
    '永不停止的远征',
    7,
    '培养十三名担当获得称号 [百战百胜]。',
    types.race,
    platinum_type.all,
  ];

  blnc_cel = [
    '端水大师',
    6,
    '一周内主动陪同 6 名以上的角色参与了节庆活动。',
    types.love,
    platinum_type.all,
  ];
  blnc_rac = [
    '平衡大师',
    6,
    '同时有 6 名以上担当参与同一场比赛并触发全部赛前赛后事件。',
    types.love,
    platinum_type.all,
  ];
  yandere = [
    '刺玫瑰养育者',
    7,
    '使一名角色通过技能 [爱意克制] 获得特性 [病娇]。',
    types.love,
    platinum_type.all,
  ];

  inmn_one = [
    '马主',
    5,
    '为一个角色打上三级淫纹。',
    types.sex,
    platinum_type.all,
  ];
  inmn_thd = [
    '马儿控制',
    6,
    '为三个角色打上三级淫纹。',
    types.sex,
    platinum_type.all,
  ];
  inmn_six = [
    '马王',
    7,
    '为六个角色打上三级淫纹。',
    types.sex,
    platinum_type.all,
  ];
  slav_mil = [
    '挤奶大师',
    6,
    '通过榨乳用母马一次性获得六份以上的乳汁（[马奶] 或 [人奶]）。',
    types.sex,
    platinum_type.all,
  ];
  slav_prg = [
    '育种大师',
    6,
    '通过繁殖用母马累计减少怀孕时间 40 周。',
    types.sex,
    platinum_type.all,
  ];
  slav_mon = [
    '分工大师',
    6,
    '通过献金用母马累计获取金钱 100,000 马币。',
    types.sex,
    platinum_type.all,
  ];
  slav_inh = [
    '基因大师',
    6,
    '通过继承用母马累计获取各类因子 10,000 个。',
    types.sex,
    platinum_type.all,
  ];
  slav_frn = [
    '守夜大师',
    6,
    '通过抱枕用母马累计阻止 100 次睡奸。',
    types.sex,
    platinum_type.all,
  ];
  slav_ass = [
    '召唤大师',
    6,
    '由陪床用母马协助调教 100 次以上。',
    types.sex,
    platinum_type.all,
  ];
  slav_mas = [
    '调教大师',
    7,
    '获得以下成就：\n' +
      '● [马王]\n' +
      '● [挤奶大师]\n' +
      '● [育种大师]\n' +
      '● [分工大师]\n' +
      '● [基因大师]\n' +
      '● [守夜大师]\n' +
      '● [召唤大师]\n',
    types.sex,
    platinum_type.all,
  ];
  play_mil1 = [
    '哞',
    5,
    '获得 [鲜榨人奶] 或 [鲜榨马奶]。',
    types.sex,
    platinum_type.all,
  ];
  play_mil2 = [
    '哞哞',
    6,
    '卖出 [鲜榨人奶] 或 [鲜榨马奶]。',
    types.sex,
    platinum_type.all,
  ];
  play_mil3 = [
    '哞哞哞',
    7,
    '在一次调教中获取 4 杯以上的 [鲜榨人奶] 或 [鲜榨马奶]。',
    types.sex,
    platinum_type.all,
  ];

  st_joseph = ['圣约瑟', 5, '得到意外的孩子。', types.birth, platinum_type.all];
  st_maria = ['圣玛丽亚', 5, '意外得到孩子。', types.birth, platinum_type.all];
  st_truth = [
    '圣真相',
    6,
    '发现角色的秘密行径。',
    types.birth,
    platinum_type.all,
  ];
  father = ['大种马', 5, '获得称号 [大种马]。', types.birth, platinum_type.all];
  mother = [
    '英雄母亲',
    6,
    '获得称号 [英雄母亲]。',
    types.birth,
    platinum_type.all,
  ];
  famother = [
    '进可欺身，退可提臀',
    7,
    '同时获得称号 [大种马] 和 [英雄母亲]。',
    types.birth,
    platinum_type.all,
  ];
  ck_m = [
    '小奸小恶 · 阳',
    4,
    '作为父方，使自己的孩子生下自己的孩子。',
    types.birth,
    platinum_type.all,
  ];
  ck_f = [
    '小奸小恶 · 阴',
    4,
    '作为母方，生下自己孩子的孩子。',
    types.birth,
    platinum_type.all,
  ];
  ck_d = [
    '错奸乱恶',
    5,
    '生下自己作为父亲的孩子的孩子，或者使自己作为母亲的孩子生下自己的孩子。',
    types.birth,
    platinum_type.all,
  ];
  ck = [
    '十字军之王',
    6,
    '完成下列成就其中之二：\n' +
      '● [小奸小恶 · 阳]；\n' +
      '● [小奸小恶 · 阴]；\n' +
      '● [错奸乱恶]。',
    types.birth,
    platinum_type.all,
  ];

  end_los = [
    'Loser',
    3,
    '因迟迟不出成绩被特雷森开除而结束游戏。',
    types.end,
    platinum_type.all,
  ];
  end_hnt = [
    '「体面」的绅士',
    3,
    '因丑闻被特雷森开除而结束游戏。',
    types.end,
    platinum_type.all,
  ];
  end_fan = [
    '遗憾的旅程',
    4,
    '育成结束时因为过差的育成成绩或紧张的担当关系而结束游戏。',
    types.end,
    platinum_type.all,
  ];
  end_mon = [
    '铜臭终幕',
    4,
    '因欠下债务无力偿还而结束游戏。',
    types.end,
    platinum_type.all,
  ];
  end_lov = [
    'Merry Bad End',
    4,
    '被「重力」捕获而结束游戏。',
    types.end,
    platinum_type.all,
  ];
  ending = [
    '悲惨世界',
    7,
    '达成以下条件：\n' +
      '● 完成成就 [Loser] 或 [「体面」的绅士]；\n' +
      '● 完成成就 [遗憾的旅程]；\n' +
      '● 完成成就 [铜臭终幕]；\n' +
      '● 完成成就 [Merry Bad End]。\n',
    types.end,
    platinum_type.all,
  ];

  time_ten = [
    '十年树人',
    6,
    '在 EraUma 中度过 9 (10) 年……\n并成为魂灵之月窠（并不）。',
    types.all,
    platinum_type.all,
  ];
  time_twe = [
    '二十年的足迹',
    6,
    '在 EraUma 中度过 16 (20) 年……\n并成为世界之喰煞（并不）。',
    types.all,
    platinum_type.all,
  ];
  time_thr = [
    '三十年的老友',
    6,
    '在 EraUma 中度过 28 (30) 年……\n并成为生命之织缕（并不）。',
    types.all,
    platinum_type.all,
  ];
  time_for = [
    '四十年的传奇',
    7,
    '在 EraUma 中度过 36 (40) 年……\n并成为渴求之器具（并不）。',
    types.all,
    platinum_type.all,
  ];
  time_fif = [
    '人生五十年，如梦亦如幻',
    7,
    '在 EraUma 中度过 50 年……\n并成为轮回之终末（并不）。',
    types.all,
    platinum_type.all,
  ];
  all = ['学园主宰', 8, '完成所有成就。', types.all];

  constructor() {
    this.#fields.forEach((m) => {
      dict[m] = this[m];
      Object.defineProperty(this, m, {
        get() {
          return this.#bean[m] || 0;
        },
        set(v) {
          if (!this.#bean[m] && v > 0) {
            era.notify(
              [
                {
                  color: adaptability_colors[dict[m][1]],
                  content: `[${rarity[dict[m][1]]}] ${dict[m][0]}`,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                },
                { isBr: true },
                ...join_list(dict[m][2].split('\n'), { isBr: true }),
              ],
              '获得新成就！',
              'success',
              50000,
            );
            const p_type = dict[m][4];
            const type_key = platinum_type.keys[p_type];
            if (!this[type_key]) {
              const index = this.#fields.findIndex(
                (m) => !this[m] && dict[m][4] === p_type,
              );
              if (index === -1) {
                this.all = 1;
              }
            }
          }
          this.#bean[m] = new Date().getTime();
        },
      });
    });
  }

  async show() {
    const curr = era.getLineCount();
    let flag = true;
    let page = 0;

    era.setAlign('right');
    while (flag) {
      await era.clear(era.getLineCount() - curr);
      era.printInColRows(
        [
          {
            config: { content: `【${type_names[page]}】类成就获取情况` },
            type: 'divider',
          },
        ],
        {
          columns: [
            ...type_names.map((t, i) => ({
              accelerator: i + 1,
              config: { disabled: i === page },
              content: t,
              type: 'button',
            })),
            { accelerator: 99, content: '返回', type: 'button' },
          ],
          config: { width: 3 },
        },
        {
          columns: sort_list(
            this.#fields.filter((m) => dict[m][3] === page),
            (m) => (this[m] > 0 ? this[m] : 100 - this.#fields.indexOf(m)),
          ).map((m) => ({
            config: { align: 'center', offset: 1, width: 7 },
            content: [
              {
                fontSize: '1.25rem',
                color: adaptability_colors[dict[m][1]],
                opacity: this[m] > 0 ? 1 : 0.5,
                content: dict[m][0],
              },
              { isBr: 1 },
              {
                color: adaptability_colors[dict[m][1]],
                content: `[${rarity[dict[m][1]]}]`,
              },
              { isBr: 1 },
              ...(this[m] > 0
                ? join_list(dict[m][2].split('\n'), { isBr: true })
                : [{ content: '？？？', title: dict[m][2] }]),
              { isBr: 2 },
            ],
            type: 'text',
          })),
          config: {
            horizontalAlign: 'space-evenly',
            width: 21,
          },
        },
      );
      const ret = await era.input({ hideInput: true });
      if (ret === 99) {
        flag = false;
      } else {
        page = ret - 1;
      }
    }
    era.setAlign('left');
  }
}

const global_achievement = new GlobalAchievement();

module.exports = global_achievement;
