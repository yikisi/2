const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');

const punish_desc = ['比赛用母马', '泄欲用母马'];

/** @param {number} mec_type */
module.exports = (mec_type) => {
  if (mec_type === check_stages.mec_status) {
    const punish_level = era.get('flag:惩戒力度'),
      ret_list = [];
    if (punish_desc[punish_level - 1] !== undefined) {
      ret_list.push({
        color: buff_colors[!!(punish_level - 1) + 1],
        content: punish_desc[punish_level - 1],
      });
    }
    if (era.get('status:0:马语者')) {
      ret_list.push({ color: buff_colors[2], content: '马语者' });
    }
    if (era.get('status:0:好感度镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '好感度眼镜',
      });
    } else if (era.get('status:0:马跳次数镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '马跳次数眼镜',
      });
    } else if (era.get('status:0:透视镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '透视眼镜',
      });
    }
    return ret_list;
  } else {
    throw new Error('unsupported stage!');
  }
};
