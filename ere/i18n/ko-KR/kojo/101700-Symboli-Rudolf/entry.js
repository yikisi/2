const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/daily-17.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/edu-17.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/love-17.js'),
  );

  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    '의 정신 상태가 한층 악화되었다……',
  ];

  pa_button = '해와 달의 교대';
  pa_notify_keep = (chara) => [
    '다음 주, ',
    chara.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '의 모습을 유지하려 한다……',
  ];
  pa_notify_transform = (chara, aim) => [
    '다음 주, ',
    chara.get_colored_name(),
    '은(는) ',
    aim.get_colored_name(),
    '의 모습으로 변하려 한다……',
  ];
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    '은(는) ',
    race,
    '에서 패배한 것을 몹시 불쾌하게 여기고 있다……',
  ];
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    '은(는) ',
    race,
    '에 출주하지 않은 것을 몹시 불쾌하게 여기고 있다……',
  ];

  self_destruct = '자멸';
  self_destruct_desc =
    '숙명에 대한 저항이 스스로를 무너뜨린다. 트레이닝 성공률-5%, 효과-8%, 출주 시 능력-5%.';

  crush = '미련';
  crush_desc =
    '억누를 수 없는 마음을 더는 숨길 수 없다. 초기 연모+40, 연모 획득량+20%.';

  emperor = '황제';
  emperor_desc =
    '이곳에 군림하라. 무릎 꿇어라. 트레이닝 성공률+5%, 효과+4%, 출주 시 능력+2%. 이 모습으로 7턴 활동할 때마다 [정신 손상] 1중첩을 얻는다.';

  intention = '심술';
  intention_desc =
    '헤아릴 필요 없다. 그저 복종하라. 호감 획득량-20%, 연모 상한40.';

  moral_damage = (c) => `정신 손상${c === 1 ? '' : `(${c})`}`;
  moral_damage_desc = (c, debuff, buff) =>
    `루나의 트레이닝 효과-${debuff}%, 황제의 트레이닝 효과+${buff}%${c < 6 ? '. [정신 손상] 6중첩에서 [신경 쇠약]을 얻는다' : ''}.`;

  r_fallen = '신경 쇠약';
  fallen = '신경 쇠약!';
  fallen_desc = '이제 돌이킬 수 없다…… 루나의 출주 시 능력-8%.';

  report_kiku_sho = (luna) => [
    {
      color: luna.color,
      content: '교토의 흐린 하늘 아래, 커다란 붉은 꽃이 활짝 피어난다!',
    },
  ];
};
