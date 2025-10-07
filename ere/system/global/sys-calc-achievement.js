const era = require('#/era-electron');

const { join_list } = require('#/utils/list-utils');

const { adaptability_colors } = require('#/data/color-const');

const dict = {};

class GlobalAchievement {
  get #bean() {
    return era.get('global:全局成就') || era.set('global:全局成就', {});
  }

  get #fields() {
    return Object.keys(this).filter((m) => !(this[m] instanceof Function));
  }

  ck_m = ['小奸小恶 · 阳', 4, '作为父方，使自己的孩子生下自己的孩子。'];
  ck_f = ['小奸小恶 · 阴', 4, '作为母方，生下自己孩子的孩子。'];
  ck_d = [
    '错奸乱恶',
    5,
    '生下自己作为父亲的孩子的孩子，或者使自己作为母亲的孩子生下自己的孩子。',
  ];
  ck = [
    '十字军之王',
    6,
    '完成下列成就其中之二：\n' +
      '● [小奸小恶 · 阳]；\n' +
      '● [小奸小恶 · 阴]；\n' +
      '● [错奸乱恶]。',
  ];
  end_los = ['Loser', 3, '因迟迟不出成绩被特雷森开除而结束游戏。'];
  end_hnt = ['「体面」的绅士', 3, '因丑闻被特雷森开除而结束游戏。'];
  end_fan = [
    '遗憾的旅程',
    4,
    '育成结束时因为过差的育成成绩或紧张的担当关系而结束游戏。',
  ];
  end_mon = ['铜臭终幕', 4, '因欠下债务无力偿还而结束游戏。'];
  end_lov = ['Merry Bad End', 4, '被「重力」捕获而结束游戏。'];
  ending = [
    '悲惨世界',
    7,
    '达成以下条件：\n' +
      '● 完成成就 [Loser] 或 [「体面」的绅士]；\n' +
      '● 完成成就 [遗憾的旅程]；\n' +
      '● 完成成就 [铜臭终幕]；\n' +
      '● 完成成就 [Merry Bad End]。\n',
  ];
  edu_one = ['教书育人', 4, '完成一次育成。'];
  edu_fiv = ['训练员楷模', 5, '完成五次育成。'];
  edu_ten = ['桃李满园', 6, '完成十次育成。'];
  edu_1_ex = [
    '二人三足',
    5,
    '在担当达成 [热恋] 以上关系的情况下完成一次育成。',
  ];
  edu_sex = [
    '我的任务',
    6,
    '完成一次育成，且担当达成以下条件之一：\n' +
      '● 达成 [依存] 以上关系；\n' +
      '● 获得三级同心刻印，且没有任何负面刻印；\n' +
      '● 获得三级淫纹。\n',
  ];
  edu_tch = [
    '为人师表',
    6,
    '完成一次育成，且担当满足以下条件：\n' +
      '● 和训练员没有血缘关系；\n' +
      '● 爱慕关系保持在 [朦胧] 及以下；\n' +
      '● 没有发生过任何性关系，包括睡奸。',
  ];
  chan_sec = ['恍如一梦', 5, '完成一个角色的第二次育成。'];
  chan_thd = ['倒带', 6, '进行五次以上的重复育成。'];
  chan_mor = [
    '命运石之门',
    7,
    '对一个角色完成八次育成，以获得最高的技能点数费用减免。',
  ];
  father = ['大种马', 5, '获得称号 [大种马]。'];
  mother = ['英雄母亲', 6, '获得称号 [英雄母亲]。'];
  famother = ['能攻能受', 7, '同时获得称号 [大种马] 和 [英雄母亲]。'];
  yandere = [
    '刺玫瑰养育者',
    7,
    '使一名角色通过技能 [爱意克制] 获得特性 [病娇]。',
  ];
  inmn_one = ['马主', 5, '为一个角色打上三级淫纹。'];
  inmn_thd = ['马儿控制', 6, '为三个角色打上三级淫纹。'];
  inmn_six = ['马王', 7, '为六个角色打上三级淫纹。'];
  slav_mil = [
    '挤奶大师',
    6,
    '通过榨乳用母马一次性获得六份以上的乳汁（[马奶] 或 [人奶]）。',
  ];
  slav_prg = ['育种大师', 6, '通过繁殖用母马累计减少怀孕时间 40 周。'];
  slav_mas = [
    '调教大师',
    7,
    '获得以下成就：\n' + '● [马王]\n' + '● [挤奶大师]\n' + '● [育种大师]\n',
  ];
  wins_one = ['战帅训练员', 7, '培养任意担当获得称号 [百战百胜]。'];
  wins_fiv = ['马色军团', 7, '培养六名担当获得称号 [百战百胜]。'];
  wins_ten = ['永不停止的远征', 7, '培养十三名担当获得称号 [百战百胜]。'];
  time_ten = [
    '十年树人',
    6,
    '在 EraUma 中度过 9 (10) 年……\n并成为魂灵之月窠（并不）。',
  ];
  time_twe = [
    '二十年的足迹',
    6,
    '在 EraUma 中度过 16 (20) 年……\n并成为世界之喰煞（并不）。',
  ];
  time_thr = [
    '三十年的老友',
    6,
    '在 EraUma 中度过 28 (30) 年……\n并成为生命之织缕（并不）。',
  ];
  time_for = [
    '四十年的传奇',
    7,
    '在 EraUma 中度过 36 (40) 年……\n并成为渴求之器具（并不）。',
  ];
  time_fif = [
    '人生五十年，如梦亦如幻',
    7,
    '在 EraUma 中度过 50 年……\n并成为轮回之终末（并不）。',
  ];
  all = ['学园主宰', 8, '完成所有成就。'];

  check_all() {
    if (!this.all) {
      const index = this.#fields.findIndex((m) => !this[m] && m !== 'all');
      if (index === -1 || index > this.#fields.indexOf('all')) {
        this.all = 1;
      }
    }
  }

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
                  content: `[${dict[m][0]}]`,
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
            this.check_all();
          }
          this.#bean[m] = v;
        },
      });
    });
  }
}

const global_achievement = new GlobalAchievement();

module.exports = global_achievement;
