const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, sex_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  slavery_descriptions,
  slavery_titles,
} = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { foreign_locations } = require('#/data/locations');
const LoveLimitStatus = require('#/data/love-limit-status');
const { pressure_border, train_buff_info } = require('#/data/train-const');

/**
 * @param {number} cid
 * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
 */
function sys_get_status(cid) {
  const status_list = [],
    show_train_buff =
      era.get(`cflag:${cid}:种族`) > 0 &&
      (cid === 0 || era.get(`cflag:${cid}:育成回合计时`) < 3 * 48);
  if (era.get(`mark:${cid}:淫纹`) === 3) {
    const sex_equip = CharaInmon.get(cid).slave,
      obj = {
        color: buff_colors[2],
        content: slavery_titles[sex_equip],
        fontWeight: 'bold',
      };
    if (cid === 0) {
      obj.title =
        sex_equip > 0
          ? '现役孕袋，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱、生下孩子时获得声望，子代参赛声望奖励+100%。'
          : '现役性奴，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱时获得声望。';
    } else {
      obj.title = sex_equip > 0 ? slavery_descriptions[sex_equip] : undefined;
    }
    status_list.push(obj);
  }
  if (era.get(`status:${cid}:淫纹贴纸`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '淫纹贴纸',
      title: status_desc['淫纹贴纸'],
    });
  }
  status_list.push(...get_custom_mec(cid).get_status(show_train_buff));
  if (era.get(`status:${cid}:生日`) > 0) {
    status_list.push({
      color: buff_colors[1],
      content: '生日！',
      title: status_desc['生日'],
    });
  }
  era.get(`status:${cid}:领域`) > 0 &&
    status_list.push({
      color: buff_colors[1],
      content: '领域！',
      title: status_desc['领域'],
    });
  era.get(`status:${cid}:健康茶`) > 0 &&
    status_list.push({
      color: buff_colors[1],
      content: '健康茶',
    });
  if (sys_check_remote(cid)) {
    status_list.push({
      color: buff_colors[0],
      content: '远程',
    });
  }
  const pressure = era.get(`base:${cid}:压力`);
  if (pressure === pressure_border.limit) {
    status_list.push({
      color: buff_colors[3],
      content: '崩溃！',
      title: status_desc['崩溃'],
    });
  } else if (pressure >= pressure_border.depression) {
    status_list.push({
      color: buff_colors[3],
      content: '抑郁！',
      title: status_desc['抑郁'],
    });
  } else if (pressure >= pressure_border.apprehension) {
    status_list.push({ color: buff_colors[3], content: '忧虑' });
  } else if (pressure >= pressure_border.unhappy) {
    status_list.push({ color: buff_colors[3], content: '不快' });
  }
  if (
    pressure >= pressure_border.unhappy &&
    era.get('cflag:344:招募状态') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(344),
      content: '凉花相助',
      title: '消耗精力减压效果提高。',
    });
  }
  // STATUSNAME:2 = 摸鱼
  let slack_off = 0;
  if (show_train_buff) {
    let check;
    slack_off = era.get(`status:${cid}:2`);
    if (era.get('cflag:340:招募状态') === recruit_flags.yes) {
      check = (new DarleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(340),
        content: '女神之望',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `速度与力量训练效果+${check}%。`,
      });
    }
    if (era.get('cflag:341:招募状态') === recruit_flags.yes) {
      check = (new GodolphinLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(341),
        content: '女神之爱',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `智力训练效果+${check * 2}%，技能点数训练效果+${check}%。`,
      });
    }
    if (era.get('cflag:342:招募状态') === recruit_flags.yes) {
      check = (new ByerleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(342),
        content: '女神之信',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `耐力与根性训练效果+${check}%。`,
      });
    }
    if (
      era.get('cflag:343:招募状态') === recruit_flags.yes &&
      foreign_locations[era.get(`cflag:${cid}:位置`)] > 0
    ) {
      check = new MayLifeMarks().buff;
      status_list.push({
        color: get_chara_color(343),
        content: '佐岳相助',
        fontWeight: check > 0 ? 'bold' : undefined,
        title: `海外远征的负面影响${check > 0 ? '减轻' : '减半'}。`,
      });
    }
    if (era.get('cflag:345:招募状态') === recruit_flags.yes) {
      check = (new LightLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(345),
        content: '灯之相助',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `训练经验获取量+${check}%。`,
      });
    }
    // CFLAGNAME:40 = 干劲
    if (!slack_off && era.get(`cflag:${cid}:40`) === 2) {
      if (era.get('cflag:346:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(346).buff;
        console.log(346, check);
        status_list.push({
          color: get_chara_color(346),
          content: '传奇激励',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '训练成功率和效果' + (check > 0 ? '上升' : '稍微上升'),
        });
      }
      if (era.get('cflag:347:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(347).buff;
        console.log(347, check);
        status_list.push({
          color: get_chara_color(347),
          content: '先驱激励',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '训练成功率和效果' + (check > 0 ? '上升' : '稍微上升'),
        });
      }
      if (era.get('cflag:348:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(348).buff;
        console.log(348, check);
        status_list.push({
          color: get_chara_color(348),
          content: '偶像激励',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '训练成功率和效果' + (check > 0 ? '上升' : '稍微上升'),
        });
      }
    }
    const train_buff = era.get(`status:${cid}:练习X手`);
    if (train_buff) {
      status_list.push({
        color: buff_colors[Number(train_buff > 0)],
        content: train_buff_info[train_buff + 1],
      });
    }
  }
  // STATUSNAME:10 = 沉睡
  // STATUSNAME:39 = 马跳S
  if (era.get(`status:${cid}:10`) > 0 || era.get(`status:${cid}:39`) > 0) {
    status_list.push({ color: buff_colors[0], content: '沉睡' });
  } else {
    if (era.get(`status:${cid}:熬夜`) > 0) {
      status_list.push({ color: buff_colors[0], content: '熬夜' });
    }
    if (slack_off > 0) {
      status_list.push({ color: buff_colors[0], content: '摸鱼' });
    }
  }
  const hurt = era.get(`status:${cid}:伤病`);
  if (hurt) {
    status_list.push({
      color: buff_colors[3],
      content: `伤病(${hurt})`,
      title: status_desc['伤病'],
      opacity: hurt > 1 ? 1 : 0.5,
    });
  }
  const tired = era.get(`status:${cid}:疲惫`);
  if (tired > 0) {
    status_list.push({
      color: buff_colors[0],
      content: `疲惫(${tired})`,
      title: status_desc['疲惫'],
      opacity: tired > 1 ? 1 : 0.5,
    });
  }
  new Array(3).fill(0).forEach((_, i) => {
    const status_id = 7 + i,
      status_name = era.get(`statusname:${status_id}`),
      num = era.get(`status:${cid}:${status_id}`);
    if (num > 0) {
      status_list.push({
        color: buff_colors[0],
        content: `${status_name}(${num})`,
        title: status_desc[status_name],
      });
    }
  });
  if (era.get(`status:${cid}:发胖`) > 0) {
    status_list.push({ color: buff_colors[0], content: '发胖' });
    if (era.get('cflag:207:招募状态') === recruit_flags.yes) {
      status_list.push({
        color: get_chara_color(207),
        content: '艾尔菲相助',
        title: '运动减肥效果提高。',
      });
    }
  }
  const headache = era.get(`status:${cid}:偏头痛`);
  if (headache > 0) {
    status_list.push({ color: buff_colors[0], content: '偏头痛' });
  }
  if (
    hurt + tired + headache > 0 &&
    era.get('cflag:305:招募状态') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(305),
      content: '针灸疗养',
    });
  }
  if (era.get(`status:${cid}:发情`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '特别假期',
    });
  } else if (era.get(`status:${cid}:经期`) > 0) {
    status_list.push({ color: buff_colors[0], content: '经期' });
  }
  if (era.get(`mark:${cid}:淫纹`) > 0 && era.get(`status:${cid}:排卵期`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '危险期',
    });
  }
  const pregnant_status = era.get(`cflag:${cid}:妊娠阶段`);
  if (pregnant_status === 1 << pregnant_stage_enum.resume) {
    status_list.push({
      color: buff_colors[2],
      content: `产后恢复(${era.get(`cflag:${cid}:妊娠回合计时`)})`,
      title: status_desc['产后恢复'],
    });
  } else if (pregnant_status >> pregnant_stage_enum.late > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '临产',
    });
  } else if (era.get(`cflag:${cid}:妊娠回合计时`) >= 4) {
    status_list.push({
      color: buff_colors[2],
      content: '有孕',
    });
  }
  if (
    era.get(`cflag:${cid}:性别`) !== 1 &&
    era.get(`cflag:${cid}:成长阶段`) >= 2 &&
    era.get(`talent:${cid}:泌乳`) > 0 &&
    (cid === 0 ||
      era.getCharactersInTrain().length > 0 ||
      era.get('status:0:马语者') > 0 ||
      era.get('status:0:透视镜片') > 0 ||
      era.get(`exp:${cid}:性爱次数`) > era.get(`exp:${cid}:睡奸次数`))
  ) {
    status_list.push({ color: buff_colors[2], content: '泌乳' });
  }
  const lust = era.get(`base:${cid}:性欲`);
  if (lust >= lust_border.want_sex) {
    status_list.push({
      color: buff_colors[2],
      content: '焦躁！',
      title: status_desc['焦躁'],
    });
  } else if (lust >= lust_border.absent_mind) {
    status_list.push({ color: buff_colors[2], content: '情动' });
  } else if (lust >= lust_border.itch) {
    status_list.push({ color: buff_colors[2], content: '不安' });
  }
  if (era.get(`status:${cid}:讨厌药`)) {
    status_list.push({ color: sex_colors[0], content: '讨厌药' });
  }
  if (!LoveLimitStatus.get(cid).is_empty()) {
    status_list.push({ color: sex_colors[0], content: '抑制药' });
  }
  if (
    era.get(`status:${cid}:爱意克制`) > 0 &&
    ((cid !== 32 && era.get('status:0:好感度镜片')) ||
      era.get('status:0:马语者'))
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '克制！',
      title: status_desc['爱意克制'],
    });
  }
  sys_get_item_status(cid, status_list);
  return status_list.map((e) => {
    if (e.title === undefined) {
      e.title = status_desc[e.content];
    }
    e.content = `[${e.content}]`;
    if (e.title !== undefined) {
      e.title = `${e.content}：${e.title}`;
    }
    e.display = 'inline-block';
    return e;
  });
}

module.exports = sys_get_status;
