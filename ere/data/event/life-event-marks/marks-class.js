const PersonalEventMarks = require('#/data/event/personal-event-marks');

class LifeEventMarks extends PersonalEventMarks {
  // 孩子父亲
  sperm;
  // 怀孕播报
  report;
  // 意外之子
  unexpected_child;
  // 意外怀孕
  unexpected_pregnant;
  // 拖回家强奸
  marital_rape;
  // 临时胸围
  breast_buff;
  // 临时腰围
  waist_buff;
  // 地下室计时（7天168小时10080分钟）
  b_timer;
  // 地下室冷却
  b_cd;
  // 病娇二段转化
  yandere;
  // 地下室初始牢固程度
  b_enhance;
  // 地下室牢固程度
  b_now;
  // 地下室警戒度
  b_s_level;
  // 地下室 - 状态机状态
  b_status;
  // 地下室体力消耗buff
  b_stamina_buff;
  // 地下室食物buff
  b_food_buff;
  // 地下室精力消耗buff
  b_time_buff;
  // 地下室外出cd
  b_out_cd;
  // 地下室随机种子
  b_r_seed;

  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id, '扩展变量');
    if (this.constructor.toString().startsWith('class LifeEventMarks'))
      PersonalEventMarks.register_marks(this);
  }
}

module.exports = LifeEventMarks;
