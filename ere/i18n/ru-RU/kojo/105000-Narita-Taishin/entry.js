module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105000-Narita-Taishin/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/105000-Narita-Taishin/rec-50.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/105000-Narita-Taishin/daily-50.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/105000-Narita-Taishin/edu-50.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/105000-Narita-Taishin/love-50.kojo');

  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' 罹患了 ',
    s_debuff,
    '！】',
  ];

  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' 的 ',
    s_debuff,
    ' 痊愈了】',
  ];

  notify_love_event_50 = '（现在还不合适，最好先不要有越界行为吧……）';

  swim_up = '逆流而上';
  swim_up_desc = '真是被看扁了啊！参赛时以不服输的劲头提高所有基础属性发挥。';

  debuff = '肺出血';
  debuff_desc = '体力精力上限-300，干劲上限下降二阶段。伤病痊愈后自然治愈。';

  frog = '恍惚';
  frog_desc = '训练效果-100%，无法参加比赛。';

  new_goal = '再起';
  new_goal_desc = '训练效果+10%。';

  together = '与你相伴';
  together_desc = '训练效果+5%。';

  resist = '冷漠拒斥';
  resist_desc = '不喜欢贸然的亲密接触，最好不要有越界行为，但只需要一个时机……';
};
