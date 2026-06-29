const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

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
    phy: false,
    sir: false,
    teen: false,
    title: false,
    uma: false,
    your_name: false,
    your_phy: false,
    your_sex: false,
  },
) {
  const ret = { id: cid, _g: true };
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  ret.CHARA = chara.name;
  ret.COLOR = chara.color;
  ret.YOU = me.name;
  ret.SEX = chara.sex;
  ret.THEY = chara.couple_title;
  if (options.call) {
    ret.CALLNAME = sys_get_callname(cid, 0);
  }
  if (options.child) {
    ret.CHILD = chara.child_sex_title;
  }
  if (options.teen) {
    ret.TEEN = chara.teen_sex_title;
  }
  if (options.phy) {
    ret.PHY = chara.phy_sex_title;
  }
  if (options.uma) {
    ret.UMA = chara.uma_sex_title;
  }
  if (options.title) {
    ret.TITLE = get_trainer_title().prefix();
  }
  if (options.your_name) {
    ret.YOURNAME = me.actual_name;
  }
  if (options.your_phy) {
    ret.YOURPHY = me.phy_sex_title;
  }
  if (options.your_sex) {
    ret.YOURSEX = me.sex;
  }
  if (options.sir) {
    ret.SIR = me.adult_sex_title;
  }
  return ret;
}

module.exports = generate_dictionary;
module.exports.generate_common_dict = () => {
  return {
    YOU: get_display_name(era.get('callname:0:-2')),
    _g: true,
    ...(era.get('flag:角色性别') === 1
      ? {
          SEX: i18n().name.he,
          THEY: i18n().name.he_mul,
          UMA: i18n().name.uma_boy,
        }
      : {
          SEX: i18n().name.she,
          THEY: i18n().name.she_mul,
          UMA: i18n().name.uma_girl,
        }),
  };
};
