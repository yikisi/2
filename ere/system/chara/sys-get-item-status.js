const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

const di18n = require('#/i18n/extended-def');

/**
 * @param {number} cid
 * @param {*[]} status_list
 */
function sys_get_item_status(cid, status_list) {
  // STATUSNAME:35 - 39 = 马跳Z - 超马跳Z
  for (let sid = 35; sid <= 39; ++sid) {
    if (era.get(`status:${cid}:${sid}`) > 0) {
      status_list.push({
        color: buff_colors[2],
        ...di18n.tb_status.get_titled_status(sid),
      });
      return;
    }
  }
}

module.exports = sys_get_item_status;
