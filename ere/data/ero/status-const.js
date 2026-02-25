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

module.exports = {
  hair_desc: [
    '稀疏的绒毛',
    '整齐的短毛',
    '浓密的丛林',
    '杂乱的曲毛',
    '刚硬的毛发',
  ],
  pregnant_stage_enum,
  pregnant_stage_names,
  // SM时的称呼
  sex_slave_title: { 0: '母马', 1: '公马', 10: '扶她母马' },
  sex_title: { 0: '马娘', 1: '马郎', 10: '马娘？' },
  unexpected_pregnant_enum: {
    father_sleep: -1,
    mother_sleep: 1,
    no: 0,
  },
  vp_status_enum,
};
