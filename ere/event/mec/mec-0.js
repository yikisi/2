const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  get_status() {
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
    if (era.get('cflag:303:招募状态') === recruit_flags.yes) {
      ret_list.push({
        color: buff_colors[1],
        content: '彻底取材',
      });
    }
    return ret_list;
  }
};
