const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class UraraEduMarks extends EduEventMarks {
  // 粉丝数
  fans;
  // 经典年7月3周前粉丝数
  fans1;
  // 经典年11月3周前粉丝数
  fans2;
  // 资深年1月1周前粉丝数
  fans3;
  // 粉丝数获取量
  fan_buff;
  // 草地适应性
  gad;
  // 中长距离适应性
  dad;
  // 粉丝buff翻倍
  sbuff;
  // 参加夏合宿标识
  summer1;
  // 三周循环
  loop;
  // 神社 - 塞翁失马
  church;
  // 商店街 - 游戏厅 - 角落中的奇怪机器
  spe_mach;
  // 商店街 - 抽奖 - 温泉券
  ticket;
  // 商店街 - 抽奖 - 特殊奖品
  spe_item;
  // 商店街 - 看电影 - 角落中的游戏？
  cor_game;
  // 车站 - 吃饭 - 隐藏菜单真美味呢！
  hid_menu;
  // 车站 - 逛商场 - 要试穿舞台装了哦！
  try_dress;
  // 中庭 - 枯树洞 - 是时光胶囊哦？
  time_cap;
  // 天台 - 朦胧的天台时间
  rof_time;
  // 训练室 - 休息 - 来睡觉吧！
  lets_slp;
  /** 随机事件 */
  // 名指导
  teach;
  // 舞蹈练习
  dance;
  // 粉丝来信
  fans_letr;
  // 人见人爱
  all_like;
  // 鲷鱼烧与挑食对策
  food;
  // 阶梯训练与学生传言
  stair;
  // 「那个人」的偶遇
  mother;
  // 掰手腕对决
  vs;
  // 重要的失物
  lost_found;
  // 关于决胜服
  race_clothe;
  // 与好友一起接受采访
  interview;
  // 「传奇」的挑战
  challenge;
  // 绕个远路吧？
  farthest;
  // 天台上的「游乐园」
  park;
  // 忘记吃了？
  forget;

  constructor() {
    super(52);
    EduEventMarks.register_marks(this);
  }
}

module.exports = UraraEduMarks;
