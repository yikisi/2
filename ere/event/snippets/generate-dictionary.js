const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_color } = require('#/data/chara-colors');
const { get_trainer_title } = require('#/data/info-generator');

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
    teen: false,
    title: false,
    uma: false,
  },
) {
  const ret = { id: cid };
  ret.CHARA = era.get(`callname:${cid}:-2`);
  ret.COLOR = get_chara_color(cid);
  ret.YOU = era.get('callname:0:-2');
  // CFLAGNAME:0 = 性别
  const sex = era.get(`cflag:${cid}:0`) === 1;
  ret.SEX = sex ? '他' : '她';
  if (options.call) {
    ret.CALLNAME = sys_get_callname(cid, 0);
  }
  if (options.child) {
    ret.CHILD = sex ? '男孩' : '女孩';
  }
  if (options.teen) {
    ret.TEEN = sex ? '少年' : '少女';
  }
  if (options.title) {
    ret.TITLE = get_trainer_title().substring(0, 2);
  }
  if (options.uma) {
    ret.UMA = sex ? '马郎' : '马娘';
  }
  return ret;
}

module.exports = generate_dictionary;
