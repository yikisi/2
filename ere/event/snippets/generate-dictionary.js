const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const { get_trainer_title } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {Record<string,boolean>} options
 * @returns {Record<string,string|number|boolean>}
 */
function generate_dictionary(
  cid,
  options = {
    call: false,
    child: false,
    sir: false,
    teen: false,
    title: false,
    uma: false,
    your_name: false,
    your_sex: false,
  },
) {
  const ret = { id: cid, _g: true };
  ret.CHARA = get_display_name(era.get(`callname:${cid}:-2`));
  ret.COLOR = get_chara_color(cid);
  ret.YOU = era.get('callname:0:-2');
  // CFLAGNAME:0 = 性别
  const sex = era.get(`cflag:${cid}:0`) === 1;
  ret.SEX = sex ? i18n().name.he : i18n().name.she;
  if (options.call) {
    ret.CALLNAME = sys_get_callname(cid, 0);
  }
  if (options.child) {
    ret.CHILD = sex ? i18n().name.boy : i18n().name.girl;
  }
  if (options.teen) {
    ret.TEEN = sex ? i18n().name.teenager : i18n().name.frail;
  }
  if (options.title) {
    ret.TITLE = get_trainer_title().prefix();
  }
  if (options.uma) {
    ret.UMA = sex ? i18n().name.uma_boy : i18n().name.uma_girl;
  }
  if (options.your_name) {
    ret.YOURNAME = era.get('callname:0:-1');
  }
  if (options.your_sex) {
    ret.YOURSEX = era.get('cflag:0:0') === 1 ? '他' : '她';
  }
  if (options.sir) {
    ret.SIR = era.get('cflag:0:0') === 1 ? i18n().name.mr : i18n().name.miss;
  }
  return ret;
}

module.exports = generate_dictionary;
