const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');

/** @param {number} mec_type */
module.exports = (mec_type) => {
  if (mec_type === check_stages.mec_status) {
    const ret_list = [];
    if (era.get('flag:惩戒力度') === 1) {
      ret_list.push({
        color: buff_colors[1],
        content: '比赛用母马',
      });
    }
    if (era.get('status:0:马语者')) {
      ret_list.push({
        color: buff_colors[2],
        key: '马语者',
        content: `马语者(${era.get('status:0:马语者')})`,
      });
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
