const chara_info_type = {
  info: 0,
  out: 0,
  school: 0,
  train: 0,
};
Object.keys(chara_info_type).forEach((k, i) => (chara_info_type[k] = i));

module.exports = chara_info_type;
