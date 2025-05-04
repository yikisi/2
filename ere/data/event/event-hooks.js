// 随机事件用的钩子
const event_hooks = {
  // 返回学园
  back_school: 0,
  // 地下室结局
  basement_end: 0,
  // 借钱
  borrow_money: 0,
  // 节日
  celebration: 0,
  // 粉丝袭击结局
  crazy_fan_end: 0,
  // 声望不足结局时角色的对话
  end_talk: 0,
  // 远征 - 调养
  foreign_rest: 0,
  // 远征 - 学外语
  foreign_study: 0,
  // 远征 - 适应训练
  foreign_train: 0,
  // 远征 - 观光
  foreign_travel: 0,
  // 早安问候
  good_morning: 0,
  // 晚安问候
  good_night: 0,
  // 成长
  growth: 0,
  // 读档时角色的对话
  load_talk: 0,
  // 做饭
  office_cook: 0,
  // 打游戏
  office_game: 0,
  // 送礼物
  office_gift: 0,
  // 赛前准备
  office_prepare: 0,
  // 休息
  office_rest: 0,
  // 指导学习
  office_study: 0,
  // 前往神社
  out_church: 0,
  // 前往目白城
  out_mejiro: 0,
  // 前往河滩
  out_river: 0,
  // 前往商店街
  out_shopping: 0,
  // 外出开始
  out_start: 0,
  // 前往车站
  out_station: 0,
  // 比赛结束
  race_end: 0,
  // 比赛开始
  race_start: 0,
  // 招募
  recruit: 0,
  // 招募结束
  recruit_end: 0,
  // 招募开始
  recruit_start: 0,
  // 注册比赛
  register_race: 0,
  // 前往中庭
  school_atrium: 0,
  // 前往理事长办公室
  school_chairman: 0,
  // 前往保健室
  school_clinic: 0,
  // 前往三女神像
  school_god: 0,
  // 前往天台
  school_rooftop: 0,
  // 前往训练员办公室
  school_trainer_office: 0,
  // 前往访客接待室
  school_visitors: 0,
  // 选择互动角色
  select: 0,
  // 金钱奴隶结局
  slave_end: 0,
  // 闲聊
  talk: 0,
  // 训练
  train: 0,
  // 训练失败
  train_fail: 0,
  // 训练成功
  train_success: 0,
  // 回合结束
  week_end: 0,
  // 回合开始
  week_start: 0,
  // 生日
  birthday: 0,
};
Object.keys(event_hooks).forEach((k, i) => (event_hooks[k] = i));

event_hooks.keys = Object.keys(event_hooks);

event_hooks.no_yandere_punish = {};
event_hooks.no_yandere_punish[event_hooks.basement_end] = 1;
event_hooks.no_yandere_punish[event_hooks.crazy_fan_end] = 1;
event_hooks.no_yandere_punish[event_hooks.borrow_money] = 1;
event_hooks.no_yandere_punish[event_hooks.good_morning] = 1;
event_hooks.no_yandere_punish[event_hooks.growth] = 1;
event_hooks.no_yandere_punish[event_hooks.load_talk] = 1;
event_hooks.no_yandere_punish[event_hooks.register_race] = 1;
event_hooks.no_yandere_punish[event_hooks.select] = 1;
event_hooks.no_yandere_punish[event_hooks.slave_end] = 1;
event_hooks.no_yandere_punish[event_hooks.train] = 1;
event_hooks.no_yandere_punish[event_hooks.train_fail] = 1;
event_hooks.no_yandere_punish[event_hooks.train_success] = 1;

module.exports = event_hooks;
