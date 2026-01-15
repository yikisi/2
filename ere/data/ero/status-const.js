const vp_status_enum = {
  // 俺寻思（训练员视角）
  i_think: -2,
  // 无自觉
  dont_know: -1,
  // 非处女
  no: 0,
  // 处女
  virgin: 1,
  // 再生处女
  reborn: 2,
};
Object.keys(vp_status_enum).forEach((k, i) => (vp_status_enum[k] = i - 2));

const pregnant_stage_enum = {
  resume: 0,
  no: 0,
  embryo: 0,
  fetal: 0,
  late: 0,
  pre_birth: 0,
};
Object.keys(pregnant_stage_enum).forEach((e, i) => {
  pregnant_stage_enum[e] = i;
});

const pregnant_stage_names = {};
pregnant_stage_names[1 << pregnant_stage_enum.resume] =
  '孩子已经顺利出生，现在是时候专注身体了';
pregnant_stage_names[1 << pregnant_stage_enum.no] =
  '宝宝的房间等待着爸爸的临幸❤️';
pregnant_stage_names[1 << pregnant_stage_enum.embryo] = '小小的新生命已在孕育';
pregnant_stage_names[1 << pregnant_stage_enum.fetal] =
  '胎盘已经完全形成，母亲和孩子要摄入优质蛋白哦';
pregnant_stage_names[1 << pregnant_stage_enum.late] =
  '胎儿正在迎来最后的成熟，小腹已经高高隆起';
pregnant_stage_names[1 << pregnant_stage_enum.pre_birth] =
  '迎接生命奇迹的时刻即将到来，该做好准备了';

/*** @type {Record<string,Record>} */
const trained_talent_names = {};
[
  { '-4': '口腔钝感', 0: '口腔正常', 1: '口腔敏感', 2: '淫口' },
  {
    '-4': '胸部钝感',
    0: '胸部正常',
    1: '胸部敏感',
    2: '淫乳',
  },
  {
    '-4': '身体钝感',
    0: '身体正常',
    1: '身体敏感',
    2: '淫身',
  },
  {
    '-4': '外阴钝感',
    0: '外阴正常',
    1: '外阴敏感',
    2: '淫核',
  },
  {
    '-4': '阴道钝感',
    0: '阴道正常',
    1: '阴道敏感',
    2: '淫壶',
  },
  {
    '-4': '臀部钝感',
    0: '臀部正常',
    1: '臀部敏感',
    2: '淫臀',
  },
  {
    '-4': '阴茎钝感',
    0: '阴茎正常',
    1: '阴茎敏感',
    2: '早泄',
  },
].forEach((e) => (trained_talent_names[e[2]] = e));

const u_g_stage = ['幼年期', '成长期', '本格期'];
const h_g_stage = ['幼年', '少年', '青年'];

module.exports = {
  breast_size: {
    AA: '可爱',
    A: '娇小',
    B: '小巧',
    C: '可人',
    D: '臌胀',
    E: '丰满',
    F: '丰硕',
    G: '硕大',
  },
  chara_desc: ['弱气', '胆小', '认真', '普通', '要强', '顽固', '热血'],
  chara_full_desc: [
    '训练和调教的效果稍微上升',
    '比赛中出迟的可能性稍微下降，被阻拦时突围的概率稍微上升，但参赛人数较多时能力会稍微下降',
    '比赛中技能的冷却时间稍微下降，训练效果稍微上升',
    '比赛中焦躁的可能性稍微下降，使用技能的概率稍微上升',
    '比赛中能力会稍微上升，但是会稍微提高输掉比赛后的压力',
    '面对强敌时比赛能力会稍微上升，且干劲的影响稍微变大',
    '面对强敌时比赛能力会上升，但是没有强敌的比赛能力会稍微下降',
  ],
  child_title: { 0: '女儿', 1: '儿子', 10: '女儿？' },
  /**
   * @param {number} growth
   * @param {number} race
   * @returns {string}
   */
  get_growth(growth, race) {
    const arr = race > 0 ? u_g_stage : h_g_stage;
    if (growth > 2) {
      return arr[2];
    }
    return arr[growth];
  },
  growth_stage: ['幼年期', '成长期', '本格期'],
  hair_desc: [
    '稀疏的绒毛',
    '整齐的短毛',
    '浓密的丛林',
    '杂乱的曲毛',
    '刚硬的毛发',
  ],
  human_sex_title: {
    0: '女性',
    1: '男性',
    10: '女性？',
  },
  player_sex_title: {
    0: '女士',
    1: '先生',
    10: '女士……？',
  },
  pregnant_stage_enum,
  pregnant_stage_names,
  // SM时的称呼
  sex_slave_title: { 0: '母马', 1: '公马', 10: '扶她母马' },
  sex_title: { 0: '马娘', 1: '马郎', 10: '马娘？' },
  trained_talent_names,
  unexpected_pregnant_enum: {
    father_sleep: -1,
    mother_sleep: 1,
    no: 0,
  },
  vp_status_enum,
};
