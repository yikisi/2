const era = require('#/era-electron');

/** @param {number} cid */
function sys_change_hair(cid) {
  switch (era.get(`cstr:${cid}:后发`)) {
    default:
    case 'shor_hair':
      era.set(`cflag:${cid}:头发长度`, 0);
      break;
    case 'twin_tails':
    case 'hair_bun':
    case 'side_ponytail':
    case 'puf_twintails':
    case 'wing_style':
    case 'doub_odango':
      era.set(`cflag:${cid}:头发长度`, 1);
      break;
    case 'long_straight':
    case 'high_ponytail':
    case 'single_braid':
    case 'twin_braids':
      era.set(`cflag:${cid}:头发长度`, 2);
  }
}

module.exports = sys_change_hair;
