const action_type_enum = {
  action_end: 0,
  back_basement: 0,
  digestive_end: 0,
  fix_end: 0,
  get_up: 0,
  rescue: 0,
  stop_sex: 0,
};
Object.keys(action_type_enum).forEach((k, i) => (action_type_enum[k] = i));

const basement_status_enum = {
  action: 0,
  escape: 0,
  fix: 0,
  idle: 0,
  just_back: 0,
  just_stop_sex: 0,
  outside: 0,
  sex: 0,
};
Object.keys(basement_status_enum).forEach(
  (k, i) => (basement_status_enum[k] = i),
);

const escape_enum = { sneak: 1, beat: 2, strike: 3 };

module.exports = { action_type_enum, basement_status_enum, escape_enum };
