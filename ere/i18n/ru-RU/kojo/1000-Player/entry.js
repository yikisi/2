const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/ru-RU/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/ru-RU/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/ru-RU/kojo/1000-Player/ero-0'));

  akuochi = 'Падение во тьму';
  akuochi_desc = 'Достаточно просто наслаждаться.';

  b_l_time = 'Клонит в сон';
  b_l_time_desc = 'Дух измотан, мысли путаются — вот-вот рухнешь в сон!';

  b_l_stamina = 'Вымотан(а) вусмерть';
  b_l_stamina_desc =
    'Сил нет, держаться не на чем — расход энергии сильно вырос!';

  pn_1 = 'Скаковая кобыла';
  pn_1_desc =
    'Действующая умамусумэ, но только senior-год; без зарплаты, доля приза +400%.';
  pn_2_desc =
    'Действующая секс-рабыня, только senior-год; без зарплаты, доля приза +400%, за секс-служение — слава.';
  pn_3_desc =
    'Действующая беременная шлюха, только senior-год; без зарплаты, доля приза +400%; секс с умамусумэ и роды дают славу, награда славы детей +100%.';

  rape = 'Зло творится легко';
  rape_desc = '「Dirty Deeds Done Dirt Cheap…」Изнасилуй. Растопчи. Покори!';
};
