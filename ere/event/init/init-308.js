const era = require('#/era-electron');

const { get_random_value } = require('#/utils/value-utils');

const { adaptability_names } = require('#/data/train-const');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    era.set(
      'callname:308:-2',
      `光辉${era.get('cflag:308:性别') === 1 ? '先生' : '小姐'}`,
    );

    adaptability_names.forEach((e) =>
      era.set(`cflag:308:${e}适性`, get_random_value(0, 5)),
    );
  }
};
