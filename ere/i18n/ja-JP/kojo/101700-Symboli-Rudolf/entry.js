const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/daily-17.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/edu-17.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/love-17.js'),
  );

  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    ' の精神状態が、さらに悪化した……',
  ];

  pa_button = '日月交替';
  pa_notify_keep = (chara) => [
    '来週、',
    chara.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' の姿を保とうとする……',
  ];
  pa_notify_transform = (chara, aim) => [
    '来週、',
    chara.get_colored_name(),
    ' は ',
    aim.get_colored_name(),
    ' の姿へ変わろうとする……',
  ];
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    ' は ',
    race,
    ' の敗北を、極めて不快に思っている……',
  ];
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    ' は ',
    race,
    ' への不出走を、極めて不快に思っている……',
  ];

  self_destruct = '自壊';
  self_destruct_desc =
    '宿命への抗いが、自らを壊す。トレーニング成功率-5%、効果-8%、出走時の能力-5%。';

  crush = '心酔';
  crush_desc = '抑えきれない想いが、もう隠せない。初期恋慕+40、恋慕取得+20%。';

  emperor = '皇帝';
  emperor_desc =
    'ここに君臨せよ。跪け。トレーニング成功率+5%、効果+4%、出走時の能力+2%。この姿で7ターン活動するごとに [精神損傷] を1層得る。';

  intention = '心術';
  intention_desc = '測る必要はない。ただ服せ。好感取得-20%、恋慕上限40。';

  moral_damage = (c) => `精神損傷${c === 1 ? '' : `(${c})`}`;
  moral_damage_desc = (c, debuff, buff) =>
    `ルナのトレーニング効果-${debuff}%、皇帝のトレーニング効果+${buff}%${c < 6 ? '。6層の [精神損傷] で [神経衰弱] を得る' : ''}。`;

  r_fallen = '神経衰弱';
  fallen = '神経衰弱！';
  fallen_desc = 'もう、取り返しはつかない……ルナの出走時能力-8%。';

  report_kiku_sho = (luna) => [
    { color: luna.color, content: '京都の曇天の下、大きな赤い花が咲き誇る！' },
  ];
};
