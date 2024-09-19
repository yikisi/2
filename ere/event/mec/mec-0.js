const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  get_status() {
    const ret_list = [];
    if (era.get('flag:当前位置') === location_enum.basement) {
      if (era.get('base:0:精力') < 100) {
        ret_list.push({
          color: buff_colors[3],
          content: '昏昏欲睡',
          title: '[昏昏欲睡]：精神疲惫，心神涣散，随时可能昏睡过去！',
        });
      }
      if (era.get('base:0:体力') < 100) {
        ret_list.push({
          color: buff_colors[0],
          content: '疲惫不堪',
          title: '[疲惫不堪]：筋疲力尽，难以为继，精力消耗大幅提高！',
        });
      }
    }
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
    if (era.get('cflag:301:招募状态') === recruit_flags.yes) {
      ret_list.push({
        color: buff_colors[1],
        content: '骏川的协助',
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

  get_action_debuff() {
    return -0.1 * (era.get('cflag:301:招募状态') === recruit_flags.yes);
  }

  init_love() {}

  set_callname() {}

  set_my_name() {}

  set_my_sex() {}
};
