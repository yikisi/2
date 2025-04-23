const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
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
          title: '精神疲惫，心神涣散，随时可能昏睡过去！',
        });
      }
      if (era.get('base:0:体力') < 100) {
        ret_list.push({
          color: buff_colors[0],
          content: '疲惫不堪',
          title: '筋疲力尽，难以为继，精力消耗大幅提高！',
        });
      }
    }
    if (era.get('flag:惩戒力度') === 1) {
      ret_list.push({
        color: buff_colors[1],
        content: '比赛用母马',
        title:
          '现役马娘，但是只能参加资深年比赛；没有工资，参赛时赏金分成+400%。',
      });
    }
    if (!era.get('flag:强奸抵抗')) {
      ret_list.push({
        color: buff_colors[2],
        content: '恶行易施',
        title:
          '「Dirty Deeds Done Dirt Cheap……」去强奸吧，去蹂躏吧，去征服吧！',
      });
    }
    if (era.get('status:0:马语者')) {
      ret_list.push({
        color: buff_colors[2],
        content: `马语者(${era.get('status:0:马语者')})`,
        title:
          '奇怪的App，打开后显示了人名、数字、性……性经验以及……裸体（鼻血）。',
      });
    }
    if (era.get('status:0:好感度镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '好感度眼镜',
        title: '人们头顶上出现了两个奇怪的数字……显示真实的好感和爱慕。',
      });
    } else if (era.get('status:0:马跳次数镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '马跳次数眼镜',
        title: '人们头顶上出现了奇怪的文字……显示所有性爱能力和经历。',
      });
    } else if (era.get('status:0:透视镜片')) {
      ret_list.push({
        color: buff_colors[2],
        content: '透视眼镜',
        title:
          '不管是品鉴最自然的肉体美感，还是研究体重控制的计划，都是不可或缺的道具……显示真实的身材。',
      });
    }
    if (era.get('cflag:301:招募状态') === recruit_flags.yes) {
      const { buff } = new TokinoLifeMarks();
      ret_list.push({
        color: get_chara_color(301),
        content: '时刻相助',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `体力与精力消耗-${10 * (buff + 1)}%。`,
      });
    }
    if (era.get('cflag:303:招募状态') === recruit_flags.yes) {
      let { buff } = new EtsukoLifeMarks();
      buff += 1;
      ret_list.push({
        color: get_chara_color(303),
        content: '悦子相助',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `声望获取+${10 * buff}%，声望下降-${10 * buff}%。`,
      });
    }
    return ret_list;
  }

  get_action_debuff() {
    return (
      -0.1 *
      (new TokinoLifeMarks().buff + 1) *
      (era.get('cflag:301:招募状态') === recruit_flags.yes)
    );
  }

  init_love() {}

  set_callname() {}

  set_my_name() {}

  set_my_sex() {}
};
