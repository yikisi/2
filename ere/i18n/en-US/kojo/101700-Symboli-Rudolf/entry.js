const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101700-Symboli-Rudolf/daily-17.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101700-Symboli-Rudolf/edu-17.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/en-US/kojo/101700-Symboli-Rudolf/love-17.js'),
  );

  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    "'s psychological condition has deteriorated further…",
  ];

  pa_button = 'Syzygy';
  pa_notify_keep = (chara) => [
    'Next week, ',
    chara.get_colored_name(),
    ' will try to stay in ',
    chara.get_colored_name(),
    "'s current form…",
  ];
  pa_notify_transform = (chara, aim) => [
    'Next week, ',
    chara.get_colored_name(),
    ' will try to change into ',
    aim.get_colored_name(),
    ' form…',
  ];
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    ' is furious over the loss suffered at ',
    race,
    ' ……',
  ];
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    ' takes grave offense at missing ',
    race,
    ' entirely…',
  ];

  self_destruct = 'Self-Destruction';
  self_destruct_desc =
    'The defiance against destiny has turned inward, consuming Symboli Rudolf. Training Success Rate −5%, Training Effect −8%, Race Stats −5%.';

  crush = 'Enamored';
  crush_desc =
    'the surging feelings for you have grown impossible to conceal or contain. Initial Infatuation +40, Infatuation Gain +20%.';

  emperor = 'Emperor';
  emperor_desc = `The Emperor reigns here. Kneel. Training Success Rate +5%, Training Effect +4%, Race Stats +2%. Gains 1 layer of [Mental Damage] every 7 turns spent active in this form.`;

  intention = 'Sovereign Intent';
  intention_desc =
    'Do not question her; simply yield. Fondness Gain −20%, Infatuation Cap set to 40.';

  moral_damage = (c) => `Mental Damage${c === 1 ? '' : `(${c})`}`;
  moral_damage_desc = (c, debuff, buff) =>
    `Training effects of Luna-${debuff}%, Training effects of the Emperor+${buff}%${c < 6 ? '; 6 layers of [Mental Damage] gives [Nervous Breakdown]' : ''}.`;

  r_fallen = 'Nervous Breakdown';
  fallen = 'Nervous breakdown!';
  fallen_desc = "There is no turning back from this... Luna's Race Stats −8%.";

  report_kiku_sho = (luna) => [
    {
      color: luna.color,
      content:
        "Beneath Kyoto's gray clouds, brilliant red blooms unfurl in full glory!",
    },
  ];
};
