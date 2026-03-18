const part_enum = {
  mouth: 0,
  breast: 0,
  hand: 0,
  foot: 0,
  body: 0,
  clitoris: 0,
  virgin: 0,
  anal: 0,
  penis: 0,
  abuse: 0,
  hit: 0,
  item: 0,
  sadism: 0,
  masochism: 0,
};
Object.keys(part_enum).forEach((k, i) => (part_enum[k] = i));
part_enum.keys = Object.keys(part_enum);

/** @type {number[]} */
const part2jid = [];
part2jid[part_enum.mouth] = 0;
part2jid[part_enum.breast] = 1;
part2jid[part_enum.hand] = 2;
part2jid[part_enum.foot] = 2;
part2jid[part_enum.body] = 2;
part2jid[part_enum.clitoris] = 4;
part2jid[part_enum.virgin] = 5;
part2jid[part_enum.anal] = 6;
part2jid[part_enum.penis] = 3;
part2jid[part_enum.abuse] = 7;
part2jid[part_enum.hit] = 7;
part2jid[part_enum.item] = 7;
part2jid[part_enum.sadism] = 7;
part2jid[part_enum.masochism] = 8;

/** @type {string[]} */
const part_touch = [];
part_touch[part_enum.mouth] = '口腔';
part_touch[part_enum.breast] = '胸部';
part_touch[part_enum.hand] = '手部';
part_touch[part_enum.foot] = '脚部';
part_touch[part_enum.body] = '身体';
part_touch[part_enum.clitoris] = '外阴';
part_touch[part_enum.virgin] = '阴道';
part_touch[part_enum.anal] = '肛门';
part_touch[part_enum.penis] = '阴茎';
part_touch[part_enum.abuse] = '施虐';
part_touch[part_enum.hit] = '施虐';
part_touch[part_enum.item] = '施虐';
part_touch[part_enum.sadism] = '施虐';
part_touch[part_enum.masochism] = '受虐';

/** @type {string[]} */
const part_skills = [];
part_skills[part_enum.mouth] = '口交';
part_skills[part_enum.breast] = '乳交';
part_skills[part_enum.hand] = '手交';
part_skills[part_enum.foot] = '足交';
part_skills[part_enum.body] = '身体';
part_skills[part_enum.clitoris] = '性交';
part_skills[part_enum.virgin] = '性交';
part_skills[part_enum.anal] = '肛交';
part_skills[part_enum.penis] = '插入';
part_skills[part_enum.abuse] = '施虐';
part_skills[part_enum.hit] = '施虐';
part_skills[part_enum.item] = '施虐';
part_skills[part_enum.sadism] = '施虐';

/** @type {string[]} */
const part_talents = [];
part_talents[part_enum.mouth] = '淫口';
part_talents[part_enum.breast] = '淫乳';
part_talents[part_enum.body] = '淫身';
part_talents[part_enum.penis] = '早泄';
part_talents[part_enum.clitoris] = '淫核';
part_talents[part_enum.virgin] = '淫壶';
part_talents[part_enum.anal] = '淫臀';

/** @type {Record<string,string>} */
const part_gifts = {};
part_gifts[part_enum.mouth] = '荡唇';
part_gifts[part_enum.breast] = '妖乳';
part_gifts[part_enum.hand] = '神之手';
part_gifts[part_enum.foot] = '神之足';
part_gifts[part_enum.penis] = '凶器';
part_gifts[part_enum.virgin] = '名穴';
part_gifts[part_enum.anal] = '魔尻';

const base_enum = {
  no: 0,
  same: 0,
  b_same: 0,
  f_same: 0,
  s_con: 0,
  b_con: 0,
  diff: 0,
  s_tri: 0,
  b_tri: 0,
  d_tri: 0,
  foot: 0,
  b_foot: 0,
};
Object.keys(base_enum).forEach((k, i) => (base_enum[k] = i));

function get_skill_group_list(sex) {
  // ABLNAME:40/10/11/30/20 = 甜言蜜语/接吻技巧/口交技巧/口腔耐性/口腔掌握
  const ret = [[40, 10, 11, 30, 20]];
  if (sex !== 1) {
    // ABLNAME:12/31/32 = 乳交技巧/胸部耐性/胸部掌握
    ret.push([12, 31, 21]);
  } else {
    ret.push([31, 21]);
  }
  // ABLNAME:13/14/15/32/22 = 手交技巧/足交技巧/身体技巧/身体耐性/身体掌握
  ret.push([13, 14, 15, 32, 22]);
  if (sex > 0) {
    // ABLNAME:18/36/26 = 插入技巧/阴茎耐性/阴茎掌握
    ret.push([18, 36, 26]);
  } else {
    ret.push([26]);
  }
  switch (sex) {
    case 0:
      // ABLNAME:16/33/34/23/24 = 性交技巧/外阴耐性/阴道耐性/外阴掌握/阴道掌握
      ret.push([16, 33, 34, 23, 24]);
      break;
    case 1:
      ret.push([23, 24]);
      break;
    default:
      ret.push([16, 34, 23, 24]);
  }
  // ABLNAME:17/33/25 = 肛交技巧/肛门耐性/肛门掌握
  ret.push([17, 35, 25]);
  // ABLNAME:19/37/27 = 施虐技巧/受虐耐性/受虐掌握
  ret.push([19, 37, 27]);
  return ret;
}

module.exports = {
  base_enum,
  get_skill_group_list,
  get_skill_list: (sex) =>
    get_skill_group_list(sex).reduce((p, c) => [...p, ...c]),
  /**
   * @param {number} part
   * @returns {string}
   */
  get_slang_part_name_key(part) {
    if (part === part_enum.breast) {
      return 's_nipple';
    }
    if (part < part_enum.keys.length) {
      return `s_${part_enum.keys[part]}`;
    }
    return 's_other';
  },
  motion_enum: {
    // 躺
    lie: 0,
    // 坐
    sit: 1,
    // 站
    stand: 2,
    // 反向躺
    rev: 3,
  },
  part2jid,
  /** 身体部位的枚举类型 */
  part_enum,
  part_gifts,
  part_skills,
  part_talents,
  /** 身体部位对应的部位名称 */
  part_touch,
  /** 快感条名称数组 */
  pleasure_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.sadism,
    part_enum.masochism,
  ],
  /** 接触部位名称数组 */
  touch_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.hand,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.foot,
    part_enum.sadism,
    part_enum.masochism,
  ],
  towards_enum: {
    // 顺时针
    right: 0,
    // 逆时针
    left: 1,
  },
  up_enum: { down: 0, up: 1 },
};
