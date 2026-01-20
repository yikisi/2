const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, sex_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_enum } = require('#/data/ero/mark-const');
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
  // 淫纹词条
  if (era.get(`mark:${cid}:${mark_enum.ero}`) === 3) {
    const sex_equip = CharaInmon.get(cid).slave;
    const obj = {
      color: buff_colors[2],
      content: di18n.tb_mark.s_titles[sex_equip],
      fontWeight: 'bold',
    };
    if (!cid) {
      obj.title = sex_equip > 0 ? i18n().tb_mark.pn_3 : i18n().tb_mark.pn_2;
    } else {
      obj.title = di18n.tb_mark.s_descriptions[sex_equip];
    }
    status_list.push(obj);
  }
  // 个人状态
  status_list.push(...get_custom_mec(cid).get_status(show_train_buff));
  // 重要的短期状态：远程、沉睡、熬夜、摸鱼
  if (sys_check_remote(cid)) {
    status_list.push({
      color: buff_colors[0],
      ...di18n.tb_status.get_titled_status('remote'),
    });
  }
  // STATUSNAME:2 = 摸鱼
  let slack_off = show_train_buff ? era.get(`status:${cid}:2`) : 0;
  // STATUSNAME:10 = 沉睡
  // STATUSNAME:39 = 马跳S
  if (!era.get(`status:${cid}:10`) && !era.get(`status:${cid}:39`)) {
    // STATUSNAME:1 = 熬夜
    if (era.get(`status:${cid}:1`) > 0) {
      status_list.push({
        ...di18n.tb_status.get_titled_status(1),
        color: buff_colors[0],
      });
    }
    if (slack_off > 0) {
      status_list.push({
        ...di18n.tb_status.get_titled_status(2),
        color: buff_colors[0],
      });
    }
  } else {
    status_list.push({
      ...di18n.tb_status.get_titled_status(10),
      color: buff_colors[0],
    });
  }
  // 育成持续状态
  if (show_train_buff) {
    // STATUSNAME:0 = 练习X手
    const train_buff = era.get(`status:${cid}:0`);
    if (train_buff !== 0) {
      status_list.push({
        color: buff_colors[+(train_buff > 0)],
        content: di18n.tb_status.train_buff[train_buff + 1],
      });
    }
  }
  // STATUSNAME:3 = 发胖
  if (era.get(`status:${cid}:3`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(3),
      color: buff_colors[0],
    });
    if (era.get('cflag:207:66') === recruit_flags.yes) {
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff207'),
        color: get_chara_color(207),
      });
    }
  }
  // STATUSNAME:4 = 偏头痛
  const headache = era.get(`status:${cid}:4`);
  if (headache > 0) {
    status_list.push({ color: buff_colors[0], content: '偏头痛' });
  }
  // STATUSNAME:16 = 健康茶
  if (era.get(`status:${cid}:16`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(16),
      color: buff_colors[1],
    });
  }
  // STATUSNAME:5 = 伤病
  const hurt = era.get(`status:${cid}:5`);
  if (hurt > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(5, hurt),
      color: buff_colors[3],
      opacity: hurt > 1 ? 1 : 0.5,
    });
  }
  // STATUSNAME:6 = 疲惫
  const tired = era.get(`status:${cid}:6`);
  if (tired > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(6, tired),
      color: buff_colors[0],
      opacity: tired > 1 ? 1 : 0.5,
    });
  }
  if (
    hurt + tired + headache > 0 &&
    era.get('cflag:305:66') === recruit_flags.yes
  ) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('buff305'),
      color: get_chara_color(305),
    });
  }
  for (let sid = 7; sid <= 9; ++sid) {
    const val = era.get(`status:${cid}:${sid}`);
    if (val > 0) {
      status_list.push({
        ...di18n.tb_status.get_titled_status(sid, val),
        color: buff_colors[0],
      });
    }
  }
  // 其他持续状态
  // STATUSNAME:17 = 生日
  if (era.get(`status:${cid}:17`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(17),
      color: buff_colors[1],
    });
  }
  // BASENAME:11 = 压力
  const pressure = Math.floor(era.get(`base:${cid}:11`) / 2500);
  if (pressure > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(`pr_${pressure}`),
      color: buff_colors[3],
    });
    // CFLAGNAME:66 = 招募状态
    if (era.get('cflag:344:66') === recruit_flags.yes) {
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff344'),
        color: get_chara_color(344),
      });
    }
  }
  // BASENAME:10 = 性欲
  const lust = era.get(`base:${cid}:10`);
  if (lust >= lust_border.want_sex) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('eo_4'),
      color: buff_colors[2],
    });
  } else if (lust >= lust_border.absent_mind) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('eo_3'),
      color: buff_colors[2],
    });
  } else if (lust >= lust_border.itch) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('eo_2'),
      color: buff_colors[2],
    });
  }
  // 育成长期状态
  if (show_train_buff) {
    // STATUSNAME:15 = 领域
    if (era.get(`status:${cid}:15`) > 0) {
      status_list.push({
        ...di18n.tb_status.get_titled_status(15),
        color: buff_colors[1],
      });
    }
    let check;
    if (era.get('cflag:340:66') === recruit_flags.yes) {
      check = (new DarleyLifeMarks().buff + 1) * 50;
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff340', check),
        color: get_chara_color(340),
        fontWeight: check > 50 ? 'bold' : void 0,
      });
    }
    if (era.get('cflag:341:66') === recruit_flags.yes) {
      check = (new GodolphinLifeMarks().buff + 1) * 25;
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff341', check * 2, check),
        color: get_chara_color(341),
        fontWeight: check > 25 ? 'bold' : void 0,
      });
    }
    if (era.get('cflag:342:66') === recruit_flags.yes) {
      check = (new ByerleyLifeMarks().buff + 1) * 50;
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff342', check),
        color: get_chara_color(342),
        fontWeight: check > 50 ? 'bold' : void 0,
      });
    }
    if (
      era.get('cflag:343:66') === recruit_flags.yes &&
      // CFLAGNAME:45 = 位置
      foreign_locations[era.get(`cflag:${cid}:45`)] > 0
    ) {
      check = new MayLifeMarks().buff;
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff343', check),
        color: get_chara_color(343),
        fontWeight: check > 0 ? 'bold' : void 0,
      });
    }
    if (era.get('cflag:345:66') === recruit_flags.yes) {
      check = (new LightLifeMarks().buff + 1) * 25;
      status_list.push({
        ...di18n.tb_status.get_titled_status('buff345', check),
        color: get_chara_color(345),
        fontWeight: check > 25 ? 'bold' : void 0,
      });
    }
    // CFLAGNAME:40 = 干劲
    if (!slack_off && era.get(`cflag:${cid}:40`) === 2) {
      for (let c = 346; c <= 348; ++c) {
        if (era.get(`cflag:${c}:66`) === recruit_flags.yes) {
          check = LifeEventMarks.get_marks(c).buff;
          status_list.push({
            ...di18n.tb_status.get_titled_status(`buff${c}`, check),
            color: get_chara_color(c),
            fontWeight: check > 0 ? 'bold' : void 0,
          });
        }
      }
    }
  }
  // 其他长期状态
  if (
    // STATUSNAME:20 = 爱意克制
    era.get(`status:${cid}:20`) > 0 &&
    // STATUSNAME:24 = 好感度镜片
    ((cid !== 32 && era.get('status:0:24')) || era.get('status:0:23'))
  ) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(20),
      color: buff_colors[2],
    });
  }
  // STATUSNAME:21 = 讨厌药
  if (era.get(`status:${cid}:21`)) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(21),
      color: sex_colors[0],
    });
  }
  if (!LoveLimitStatus.get(cid).is_empty()) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(22),
      color: sex_colors[0],
    });
  }
  // 性相关的
  // STATUSNAME:32 = 发情
  if (era.get(`status:${cid}:32`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(32),
      color: buff_colors[2],
    });
  }
  // STATUSNAME:33 = 淫纹贴纸
  if (era.get(`status:${cid}:33`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(33),
      color: buff_colors[2],
    });
  }
  // 短期药物状态放前面
  sys_get_item_status(cid, status_list);
  // CFLAGNAME:81 = 妊娠阶段
  const pregnant_status = era.get(`cflag:${cid}:81`);
  if (pregnant_status === 1 << pregnant_stage_enum.resume) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(
        'pg_resume',
        // CFLAGNAME:82 = 妊娠回合计时
        era.get(`cflag:${cid}:82`),
      ),
      color: buff_colors[2],
    });
  } else if (pregnant_status >> pregnant_stage_enum.late > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('pg_prebirth'),
      color: buff_colors[2],
    });
  } else if (era.get(`cflag:${cid}:82`) >= 4) {
    status_list.push({
      ...di18n.tb_status.get_titled_status('pg_normal'),
      color: buff_colors[2],
    });
  }
  // STATUSNAME:30 = 经期
  if (era.get(`status:${cid}:30`) > 0) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(30),
      color: buff_colors[0],
    });
  }
  if (
    era.get(`mark:${cid}:${mark_enum.ero}`) > 0 &&
    // STATUSNAME:31 = 排卵期
    era.get(`status:${cid}:31`) > 0
  ) {
    status_list.push({
      ...di18n.tb_status.get_titled_status(31),
      color: buff_colors[2],
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
    status_list.push({
      ...di18n.tb_status.get_titled_status('milk'),
      color: buff_colors[2],
    });
  }
  return status_list.map((s) => {
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
