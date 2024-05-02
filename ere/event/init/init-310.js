const era = require('#/era-electron');

const { get_random_value } = require('#/utils/value-utils');

const { adaptability_names, attr_names } = require('#/data/train-const');

/**
 * 光辉致意的初始化，角色编号310
 */
module.exports = () => {
  let buff = 30;
  Object.values(attr_names).forEach((v, i) => {
    era.set(`cflag:310:初始${v}`, get_random_value(25, 75));
    let tmp_buff = get_random_value(-5, 20);
    if (tmp_buff < buff - 20 * (5 - i - 1)) {
      tmp_buff = buff - 20 * (5 - i - 1);
    }
    if (tmp_buff > buff + 5 * (5 - i - 1)) {
      tmp_buff = buff + 5 * (5 - i - 1);
    }
    buff -= tmp_buff;
    era.set(`cflag:310:${v}加成`, tmp_buff);
  });

  adaptability_names.forEach((e) =>
    era.set(`cflag:310:${e}适性`, get_random_value(0, 5)),
  );
};
