const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

/**
 * @param {number} chara_id
 * @param {*[]} status_list
 */
function sys_get_item_status(chara_id, status_list) {
  if (era.get(`status:${chara_id}:马跳Z`)) {
    status_list.push({ color: buff_colors[2], content: '马跳Z' });
  } else if (era.get(`status:${chara_id}:弗隆K`)) {
    status_list.push({ color: buff_colors[2], content: '弗隆K' });
  } else if (era.get(`status:${chara_id}:弗隆P`)) {
    status_list.push({ color: buff_colors[2], content: '弗隆P' });
  } else if (era.get(`status:${chara_id}:超马跳Z`)) {
    status_list.push({ color: buff_colors[2], content: '超马跳Z' });
  }
}

module.exports = sys_get_item_status;
