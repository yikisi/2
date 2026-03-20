const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

/**
 * @param {number} cid
 * @returns {number[]}
 */
function get_param_list(cid) {
  const p_size = get_penis_size(cid);
  const v_size = era.get(`cflag:${cid}:阴道尺寸`);
  // PARAMNAME:0 - 2 = 口腔快感 - 身体快感
  const ret = [0, 1, 2];
  // PARAMNAME:3 = 阴茎快感
  if (p_size > 0) {
    ret.push(3);
  }
  if (v_size > 0) {
    if (!p_size) {
      // PARAMNAME:4 = 外阴快感
      ret.push(4);
    }
    // PARAMNAME:5 = 阴道快感
    ret.push(5);
  }
  // PARAMNAME:6 - 8 = 肛门快感 - 受虐快感
  ret.push(6, 7, 8);
  return ret;
}

module.exports = get_param_list;
