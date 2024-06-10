const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { buff_colors, sex_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status-desc.json');
const { lust_border } = require('#/data/ero/orgasm-const');
const { slavery_titles } = require('#/data/ero/sex-mark-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const recruit_flags = require('#/data/event/recruit-flags');
const LoveLimitStatus = require('#/data/love-limit-status');
const { pressure_border, train_buff_info } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
 */

function sys_get_status(chara_id) {
  const status_list = [];
  const sex_equip = era.get(`equip:${chara_id}:淫纹奴役`);
  if (era.get(`mark:${chara_id}:淫纹`) === 3) {
    const obj = {
      color: buff_colors[2],
      content: slavery_titles[sex_equip],
      fontWeight: 'bold',
    };
    if (!chara_id) {
      obj.title = sex_equip
        ? '[繁殖用母马] 现役孕袋，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱、生下孩子时获得声望，子代参赛声望奖励+100%'
        : '[泄欲用母马] 现役性奴，只能参加资深年比赛；没有工资，参赛时赏金分成+400%，和马娘性爱时获得声望';
    }
    status_list.push(obj);
  }
  status_list.push(...get_custom_mec(chara_id).get_status());
  era.get(`status:${chara_id}:生日`) &&
    status_list.push({
      color: buff_colors[1],
      content: '生日！',
      key: '生日',
    });
  era.get(`status:${chara_id}:领域`) &&
    status_list.push({
      color: buff_colors[1],
      content: '领域！',
      key: '领域',
    });
  era.get(`status:${chara_id}:健康茶`) &&
    status_list.push({
      color: buff_colors[1],
      content: '健康茶',
    });
  if (sys_check_remote(chara_id)) {
    status_list.push({
      color: buff_colors[0],
      content: '远程',
    });
  }
  const pressure = era.get(`base:${chara_id}:压力`);
  if (pressure === pressure_border.limit) {
    status_list.push({
      color: buff_colors[3],
      content: '崩溃！',
      key: '崩溃',
    });
  } else if (pressure >= pressure_border.depression) {
    status_list.push({
      color: buff_colors[3],
      content: '抑郁！',
      key: '抑郁',
    });
  } else if (pressure >= pressure_border.apprehension) {
    status_list.push({ color: buff_colors[3], content: '忧虑' });
  } else if (pressure >= pressure_border.unhappy) {
    status_list.push({ color: buff_colors[3], content: '不快' });
  }
  const train_buff = era.get(`status:${chara_id}:练习X手`);
  if (train_buff) {
    status_list.push({
      color: buff_colors[Number(train_buff > 0)],
      content: train_buff_info[train_buff + 1],
    });
  }
  if (
    era.get(`status:${chara_id}:马跳S`) ||
    era.get(`status:${chara_id}:沉睡`)
  ) {
    status_list.push({ color: buff_colors[0], content: '沉睡' });
  } else {
    if (era.get(`status:${chara_id}:熬夜`)) {
      status_list.push({ color: buff_colors[0], content: '熬夜' });
    }
    if (era.get(`status:${chara_id}:摸鱼`)) {
      status_list.push({ color: buff_colors[0], content: '摸鱼' });
    }
  }
  const hurt = era.get(`status:${chara_id}:伤病`);
  if (hurt) {
    status_list.push({
      color: buff_colors[3],
      content: `伤病(${hurt})`,
      key: '伤病',
      opacity: hurt > 1 ? 1 : 0.5,
    });
  }
  const tired = era.get(`status:${chara_id}:疲惫`);
  if (tired) {
    status_list.push({
      color: buff_colors[0],
      content: `疲惫(${tired})`,
      key: '疲惫',
      opacity: tired > 1 ? 1 : 0.5,
    });
  }
  new Array(3).fill(0).forEach((_, i) => {
    const status_id = 7 + i,
      status_name = era.get(`statusname:${status_id}`),
      num = era.get(`status:${chara_id}:${status_id}`);
    if (num) {
      status_list.push({
        color: buff_colors[0],
        content: `${status_name}(${num})`,
        key: status_name,
      });
    }
  });
  if (era.get(`status:${chara_id}:发胖`)) {
    status_list.push({ color: buff_colors[0], content: '发胖' });
  }
  if (era.get(`status:${chara_id}:头风`)) {
    status_list.push({ color: buff_colors[0], content: '头风' });
  }
  if (era.get(`status:${chara_id}:发情`)) {
    status_list.push({
      color: buff_colors[2],
      content: '特别假期',
    });
  } else if (era.get(`status:${chara_id}:经期`)) {
    status_list.push({ color: buff_colors[0], content: '经期' });
  }
  if (
    era.get(`mark:${chara_id}:淫纹`) &&
    era.get(`status:${chara_id}:排卵期`)
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '危险期',
    });
  }
  const pregnant_status = era.get(`cflag:${chara_id}:妊娠阶段`);
  if (pregnant_status === 1 << pregnant_stage_enum.resume) {
    status_list.push({
      color: buff_colors[2],
      content: '产后恢复',
    });
  } else if (pregnant_status >> pregnant_stage_enum.late > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '临产',
    });
  } else if (era.get(`cflag:${chara_id}:妊娠回合计时`) >= 4) {
    status_list.push({
      color: buff_colors[2],
      content: '有孕',
    });
  }
  if (
    era.get(`cflag:${chara_id}:性别`) - 1 &&
    era.get(`cflag:${chara_id}:成长阶段`) >= 2 &&
    era.get(`talent:${chara_id}:泌乳`) &&
    (!chara_id ||
      era.getCharactersInTrain().length > 0 ||
      era.get('status:0:马语者') ||
      era.get('status:0:透视镜片') ||
      era.get(`exp:${chara_id}:性爱次数`) > era.get(`exp:${chara_id}:睡奸次数`))
  ) {
    status_list.push({ color: buff_colors[2], content: '泌乳' });
  }
  const lust = era.get(`base:${chara_id}:性欲`);
  if (lust >= lust_border.want_sex) {
    status_list.push({
      color: buff_colors[2],
      content: '焦躁！',
      key: '焦躁',
    });
  } else if (lust >= lust_border.absent_mind) {
    status_list.push({ color: buff_colors[2], content: '情动' });
  } else if (lust >= lust_border.itch) {
    status_list.push({ color: buff_colors[2], content: '不安' });
  }
  if (era.get(`status:${chara_id}:讨厌药`)) {
    status_list.push({ color: sex_colors[0], content: '讨厌药' });
  }
  if (!new LoveLimitStatus(chara_id).is_empty()) {
    status_list.push({ color: sex_colors[0], content: '抑制药' });
  }
  if (
    era.get(`status:${chara_id}:爱意克制`) &&
    era.get('status:0:好感度镜片')
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '克制！',
      key: '爱意克制',
    });
  }
  if (era.get(`cflag:${chara_id}:种族`)) {
    let check;
    if (era.get('cflag:340:招募状态') === recruit_flags.yes) {
      check = new DarleyLifeMarks().buff;
      status_list.push({
        color: buff_colors[1],
        content: '女神之望',
        fontWeight: check ? 'bold' : '',
        title: `[女神之望]：速度与力量训练效果+${50 * (1 + check)}%`,
      });
    }
    if (era.get('cflag:341:招募状态') === recruit_flags.yes) {
      check = new GodolphinLifeMarks().buff;
      status_list.push({
        color: buff_colors[1],
        content: '女神之爱',
        fontWeight: check ? 'bold' : '',
        title: `[女神之爱]：智力与技能点数训练效果+${50 * (1 + check)}%`,
      });
    }
    if (era.get('cflag:342:招募状态') === recruit_flags.yes) {
      check = new ByerleyLifeMarks().buff;
      status_list.push({
        color: buff_colors[1],
        content: '女神之信',
        fontWeight: check ? 'bold' : '',
        title: `[女神之信]：耐力与根性训练效果+${50 * (1 + check)}%`,
      });
    }
  }
  sys_get_item_status(chara_id, status_list);
  return status_list.map((e) => {
    e.display = 'inline-block';
    if (!e.title) {
      let temp;
      if ((temp = status_desc[e.key || e.content])) {
        e.title = `[${e.content}]：${temp}`;
      }
      delete e.key;
    }
    e.content = `[${e.content}]`;
    return e;
  });
}

module.exports = sys_get_status;
