module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105000-Narita-Taishin/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/rec-50.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/daily-50.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/edu-50.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/love-50.kojo');

  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' が ',
    s_debuff,
    ' を発症した！】',
  ];

  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' の ',
    s_debuff,
    ' が治った】',
  ];

  notify_love_event_50 =
    '（今はまだ早い。越境するようなことは、しない方がいい……）';

  swim_up = '逆流して';
  swim_up_desc =
    '見くびられたものだ！出走時、負けん気で全基礎能力の発揮が上がる。';

  debuff = '肺出血';
  debuff_desc =
    '体力・気力上限-300、やる気上限が2段階下がる。傷病が治ると自然に消える。';

  frog = '恍惚';
  frog_desc = 'トレーニング効果-100%。レースに出走できない。';

  new_goal = '再起';
  new_goal_desc = 'トレーニング効果+10%。';

  together = 'あなたと一緒';
  together_desc = 'トレーニング効果+5%。';

  resist = '冷たい拒絶';
  resist_desc =
    'いきなりの親密な接触は好まない。越境しない方がいい。だが、きっかけさえあれば……';
};
