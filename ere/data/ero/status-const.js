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
Object.keys(pregnant_stage_enum).forEach(
  (e, i) => (pregnant_stage_enum[e] = i),
);

module.exports = {
  pregnant_stage_enum,
  unexpected_pregnant_enum: {
    father_sleep: -1,
    mother_sleep: 1,
    no: 0,
  },
  vp_status_enum,
};
