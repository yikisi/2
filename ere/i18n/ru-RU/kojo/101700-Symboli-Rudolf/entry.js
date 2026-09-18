const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101700-Symboli-Rudolf/daily-17.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101700-Symboli-Rudolf/edu-17.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/101700-Symboli-Rudolf/love-17.js'),
  );

  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    ' — душевное состояние стало ещё хуже…',
  ];

  pa_button = 'Смена дня и ночи';
  pa_notify_keep = (chara) => [
    'На следующей неделе ',
    chara.get_colored_name(),
    ' попытается сохранить облик ',
    chara.get_colored_name(),
    '…',
  ];
  pa_notify_transform = (chara, aim) => [
    'На следующей неделе ',
    chara.get_colored_name(),
    ' попытается принять облик ',
    aim.get_colored_name(),
    '…',
  ];
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    ' крайне недовольна провалом на ',
    race,
    '…',
  ];
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    ' крайне недовольна отсутствием на ',
    race,
    '…',
  ];

  self_destruct = 'Саморазрушение';
  self_destruct_desc =
    'Сопротивление судьбе толкает её к самоуничтожению; успех тренировок −5%, эффект тренировок −8%, характеристики на скачках −5%.';

  crush = 'Одержимость';
  crush_desc =
    'Нахлынувшее к тебе чувство уже не спрятать и не сдержать; стартовая влюблённость +40, прирост влюблённости +20%.';

  emperor = 'Император';
  emperor_desc =
    'Я царствую здесь — на колени; успех тренировок +5%, эффект тренировок +4%, характеристики на скачках +2%, каждые семь ходов в этом облике — слой [Душевный урон].';

  intention = 'Диктат';
  intention_desc =
    'Не гадай — подчинись; прирост расположения −20%, потолок влюблённости 40.';

  moral_damage = (c) => `Душевный урон${c === 1 ? '' : `(${c})`}`;
  moral_damage_desc = (c, debuff, buff) =>
    `Луна: эффект тренировок −${debuff}%, Император: эффект тренировок +${buff}%${c < 6 ? '; 6 слоёв [Душевный урон] дают [Нервное истощение]' : ''}.`;

  r_fallen = 'Нервное истощение';
  fallen = 'Нервное истощение!';
  fallen_desc = 'Уже не вернуть… у Луны характеристики на скачках −8%.';

  report_kiku_sho = (luna) => [
    {
      color: luna.color,
      content: 'Крупные красные цветы распускаются под хмурым небом Киото!',
    },
  ];
};
