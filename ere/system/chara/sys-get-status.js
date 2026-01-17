const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, sex_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_enum } = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');
const recruit_flags = require('#/data/event/recruit-flags');
const { foreign_locations } = require('#/data/locations');
const LoveLimitStatus = require('#/data/love-limit-status');
const { pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
 */
function sys_get_status(cid) {
  const status_list = [],
    show_train_buff =
      // CFLAGNAME:1 = 种族
      era.get(`cflag:${cid}:1`) > 0 &&
      // CFLAGNAME:48 = 育成回合计时
      (cid === 0 || era.get(`cflag:${cid}:48`) < 3 * 48);
  if (era.get(`mark:${cid}:${mark_enum.ero}`) === 3) {
    const sex_equip = CharaInmon.get(cid).slave;
    const obj = {
      color: buff_colors[2],
      content: di18n.tb_mark.s_titles[sex_equip],
      fontWeight: 'bold',
    };
    if (cid === 0) {
      obj.title =
        sex_equip > 0
          ? '现役孕袋，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱、生下孩子时获得声望，子代参赛声望奖励+100%。'
          : '现役性奴，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱时获得声望。';
    } else {
      obj.title =
        sex_equip > 0 ? di18n.tb_mark.s_descriptions[sex_equip] : void 0;
    }
    status_list.push(obj);
  }
  status_list.push(...get_custom_mec(cid).get_status(show_train_buff));
  // STATUSNAME:33 = 淫纹贴纸
  if (era.get(`status:${cid}:33`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '淫纹贴纸',
      title: status_desc['淫纹贴纸'],
    });
  }
  // STATUSNAME:17 = 生日
  if (era.get(`status:${cid}:17`) > 0) {
    status_list.push({
      color: buff_colors[1],
      content: '生日！',
      title: status_desc['生日'],
    });
  }
  // STATUSNAME:15 = 领域
  era.get(`status:${cid}:15`) > 0 &&
    status_list.push({
      color: buff_colors[1],
      content: '领域！',
      title: status_desc['领域'],
    });
  // STATUSNAME:16 = 健康茶
  era.get(`status:${cid}:16`) > 0 &&
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
  // BASENAME:11 = 压力
  const pressure = era.get(`base:${cid}:11`);
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
    // CFLAGNAME:66 = 招募状态
    era.get('cflag:344:66') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(344),
      content: '凉花相助',
      title: '消耗精力减压效果提高。',
    });
  }
  if (show_train_buff) {
    let check;
    if (era.get('cflag:340:66') === recruit_flags.yes) {
      check = (new DarleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(340),
        content: '女神之望',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `速度与力量训练效果+${check}%。`,
      });
    }
    if (era.get('cflag:341:66') === recruit_flags.yes) {
      check = (new GodolphinLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(341),
        content: '女神之爱',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `智力训练效果+${check * 2}%，技能点数训练效果+${check}%。`,
      });
    }
    if (era.get('cflag:342:66') === recruit_flags.yes) {
      check = (new ByerleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(342),
        content: '女神之信',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `耐力与根性训练效果+${check}%。`,
      });
    }
    if (
      era.get('cflag:343:66') === recruit_flags.yes &&
      // CFLAGNAME:45 = 位置
      foreign_locations[era.get(`cflag:${cid}:45`)] > 0
    ) {
      check = new MayLifeMarks().buff;
      status_list.push({
        color: get_chara_color(343),
        content: '佐岳相助',
        fontWeight: check > 0 ? 'bold' : undefined,
        title: `海外远征的负面影响${check > 0 ? '减轻' : '减半'}。`,
      });
    }
    if (era.get('cflag:345:66') === recruit_flags.yes) {
      check = (new LightLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(345),
        content: '灯之相助',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `训练经验获取量+${check}%。`,
      });
    }
    // STATUSNAME:0 = 练习X手
    const train_buff = era.get(`status:${cid}:0`);
    if (train_buff) {
      status_list.push({
        color: buff_colors[Number(train_buff > 0)],
        content: di18n.tb_status.train_buff[train_buff + 1],
      });
    }
  }
  // STATUSNAME:10 = 沉睡
  // STATUSNAME:39 = 马跳S
  if (era.get(`status:${cid}:10`) > 0 || era.get(`status:${cid}:39`) > 0) {
    status_list.push({ color: buff_colors[0], content: '沉睡' });
  } else {
    // STATUSNAME:1 = 熬夜
    if (era.get(`status:${cid}:1`) > 0) {
      status_list.push({ color: buff_colors[0], content: '熬夜' });
    }
    // STATUSNAME:2 = 摸鱼
    if (era.get(`status:${cid}:2`) > 0) {
      status_list.push({ color: buff_colors[0], content: '摸鱼' });
    }
  }
  // STATUSNAME:5 = 伤病
  const hurt = era.get(`status:${cid}:5`);
  if (hurt) {
    status_list.push({
      color: buff_colors[3],
      content: `伤病(${hurt})`,
      title: status_desc['伤病'],
      opacity: hurt > 1 ? 1 : 0.5,
    });
  }
  // STATUSNAME:6 = 疲惫
  const tired = era.get(`status:${cid}:6`);
  if (tired > 0) {
    status_list.push({
      color: buff_colors[0],
      content: `疲惫(${tired})`,
      title: status_desc['疲惫'],
      opacity: tired > 1 ? 1 : 0.5,
    });
  }
  for (let sid = 7; sid <= 9; ++sid) {
    const val = era.get(`status:${cid}:${sid}`);
    if (val > 0) {
      status_list.push({
        color: buff_colors[0],
        ...di18n.tb_status.get_titled_status(sid, val),
      });
    }
  }
  // STATUSNAME:3 = 发胖
  if (era.get(`status:${cid}:3`) > 0) {
    status_list.push({ color: buff_colors[0], content: '发胖' });
    if (era.get('cflag:207:66') === recruit_flags.yes) {
      status_list.push({
        color: get_chara_color(207),
        content: '艾尔菲相助',
        title: '运动减肥效果提高。',
      });
    }
  }
  // STATUSNAME:4 = 偏头痛
  const headache = era.get(`status:${cid}:4`);
  if (headache > 0) {
    status_list.push({ color: buff_colors[0], content: '偏头痛' });
  }
  if (
    hurt + tired + headache > 0 &&
    era.get('cflag:305:66') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(305),
      content: '针灸疗养',
    });
  }
  // STATUSNAME:32 = 发情
  if (era.get(`status:${cid}:32`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '特别假期',
    });
    // STATUSNAME:30 = 经期
  } else if (era.get(`status:${cid}:`) > 0) {
    status_list.push({ color: buff_colors[0], content: '经期' });
  }
  if (
    era.get(`mark:${cid}:${mark_enum.ero}`) > 0 &&
    // STATUSNAME:31 = 排卵期
    era.get(`status:${cid}:31`) > 0
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '危险期',
    });
  }
  // CFLAGNAME:81 = 妊娠阶段
  const pregnant_status = era.get(`cflag:${cid}:81`);
  if (pregnant_status === 1 << pregnant_stage_enum.resume) {
    status_list.push({
      color: buff_colors[2],
      // CFLAGNAME:82 = 妊娠回合计时
      content: i18n().tb_status.pg_resume(era.get(`cflag:${cid}:82`)),
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
    // CFLAGNAME:0 = 性别
    era.get(`cflag:${cid}:0`) !== 1 &&
    // CFLAGNAME:2 = 成长阶段
    era.get(`cflag:${cid}:2`) >= 2 &&
    // TALENTNAME:32 = 泌乳
    era.get(`talent:${cid}:32`) > 0 &&
    (cid === 0 ||
      era.getCharactersInTrain().length > 0 ||
      // STATUSNAME:23 = 马语者
      era.get('status:0:23') > 0 ||
      // STATUSNAME:26 = 透视镜片
      era.get('status:0:26') > 0 ||
      // EXPNAME:25 - 26 = 性爱次数 - 睡奸次数
      era.get(`exp:${cid}:25`) > era.get(`exp:${cid}:26`))
  ) {
    status_list.push({ color: buff_colors[2], content: '泌乳' });
  }
  // BASENAME:10 = 性欲
  const lust = era.get(`base:${cid}:10`);
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
  // STATUSNAME:21 = 讨厌药
  if (era.get(`status:${cid}:21`)) {
    status_list.push({ color: sex_colors[0], content: '讨厌药' });
  }
  if (!LoveLimitStatus.get(cid).is_empty()) {
    status_list.push({ color: sex_colors[0], content: '抑制药' });
  }
  if (
    // STATUSNAME:20 = 爱意克制
    era.get(`status:${cid}:20`) > 0 &&
    // STATUSNAME:24 = 好感度镜片
    ((cid !== 32 && era.get('status:0:24')) || era.get('status:0:23'))
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '克制！',
      title: status_desc['爱意克制'],
    });
  }
  sys_get_item_status(cid, status_list);
  return status_list.map((s) => {
    if (s.title === void 0) {
      s.title = status_desc[s.content];
    }
    if (s.title !== void 0) {
      s.title = i18n()
        .status_desc.template.replace('%NAME%', s.content)
        .replace('%DESC%', s.title);
    }
    s.content = i18n().tb_status.template.replace('%NAME%', s.content);
    s.display = 'inline-block';
    return s;
  });
}

module.exports = sys_get_status;
