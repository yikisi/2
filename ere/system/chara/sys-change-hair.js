const era = require('#/era-electron');

/** @param {number} chara_id */
function sys_change_hair(chara_id) {
  switch (era.get(`cstr:${chara_id}:后发`)) {
    default:
    case '短发':
      era.set(`cflag:${chara_id}:头发长度`, 0);
      break;
    case '双马尾':
    case '发髻':
    case '侧马尾':
    case '蓬松双马尾':
    case '外翼式':
    case '双重丸子头':
      era.set(`cflag:${chara_id}:头发长度`, 1);
      break;
    case '长直发':
    case '高马尾':
    case '单辫':
    case '双辫':
    case '高马尾+长直发':
      era.set(`cflag:${chara_id}:头发长度`, 2);
  }
}

module.exports = sys_change_hair;
