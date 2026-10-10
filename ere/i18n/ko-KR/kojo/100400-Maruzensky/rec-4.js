/**
 * @file マルゼンスキー - 募集
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_start(maru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      maru.get_colored_name(),
      '에게 말을 걸어 보았다.',
    ]);
    era.println();
    you.say([
      maru.get_colored_name(),
      '(이)라면 반드시 무패의 삼관 ',
      maru.uma_sex_title,
      '가 될 수 있어. 내 팀에 들어와 줘.',
    ]);
    await maru.say_and_wait([
      '어머, 삼관 ',
      maru.uma_sex_title,
      '가 된다면 멋지겠지만…… 트레이너 군, 나를 조금 과대평가하는 것 아닐까? 미안하지만 계약은 거절할게. ……그래도 그렇게 자신 있는 트레이너 군이라면 분명 좋은 담당을 만날 수 있을 거야.',
    ]);
    await you.say_and_wait(
      ['……', maru.get_colored_name(), '에게 거절당했다.'],
      true,
    );
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_leave_playground(maru, you) {
    await era.printAndWait(
      `${you.name}이(가) 훈련장을 떠나려 할 때, ${maru.name} 쪽에서 말을 걸어왔다.`,
    );
    era.println();
    maru.say('저기, 거기 트레이너 군. 잠깐 괜찮을까? 담당을 찾으러 왔니?');
    era.print(
      `${you.name}은(는) 담당으로 삼을 만한 우마무스메를 찾으러 트레센의 레이스장에서 선발 레이스를 보고 있었다. ${maru.name}라는 우마무스메는 그 선발전에서 홀로 압도적인 실력을 뽐내며 다른 이들을 멀리 따돌렸다. 달리는 모습은 가속 페달을 끝까지 밟은 붉은 스포츠카 같았다. 무엇보다 눈길을 끈 것은 달릴 때의 만족스러운 표정이었다.`,
    );
    maru.say(
      '흐음…… 트레이너 군도 삼관을 달성할 우마무스메를 찾고 있니? 아니면 해외 무대에서 개선문상까지 노릴 아이일까?',
    );
    era.print(
      `${you.name}은(는) 고개를 저었다. 바람과 자유를 즐기며 만족스러운 표정을 짓던 붉은 그림자가 어째서인지 머릿속을 떠나지 않았다.`,
    );
    maru.say('어머, 별난 트레이너네……');
    era.print(
      `${maru.name}은(는) 곤란한 표정을 지었지만 곧 평소의 모습으로 돌아왔다.`,
    );
    maru.say('그럼 트레이너 군은 어떤 우마무스메를 찾고 있는지 물어봐도 될까?');
    era.print(
      `${you.name}은(는) ${maru.name}이(가) 달릴 때 보여 준 만족스러운 모습에 넋을 잃고 말았다고 솔직히 이야기했다.`,
    );
    await maru.say_and_wait(
      '……그랬구나. 정말 별난 트레이너네. 그럼 앞으로도 내가 달리는 모습을 지켜봐 줘.',
    );
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_rooftop(maru, you, callname) {
    await era.printAndWait(
      `${you.name}이(가) 옥상에 올라가자 다시 ${maru.name}와(과) 마주쳤다.`,
    );
    await maru.say_and_wait([
      '……응응, 후배들은 참 귀엽네♪ 또 궁금한 게 있으면 언제든 ',
      maru.elder_sibling_sex_title,
      '에게 물어봐♪',
    ]);
    era.print(
      `${maru.name}은(는) 휴대폰을 내려놓고 운동장에서 연습하는 후배 우마무스메들을 바라보고 있었다. 콧노래에 맞춰 꼬리가 리듬을 타며 흔들렸다.`,
    );
    await maru.say_and_wait('역시 맑은 날 먹는 도시락이 최고지♪');
    era.print(
      `${maru.name}은(는) 도시락을 열다가 무심코 앞을 둘러보고 ${you.name}을(를) 발견했다.`,
    );
    await maru.say_and_wait([
      '무슨 일이…… 어머♪ 얼마 전에 훈련장에서 만난 ',
      callname,
      '이잖아. 옥상에서 도시락 먹으려고? 센스 있네♪',
    ]);
    era.print(
      `두 사람은 나란히 앉아 운동장에서 열심히 달리는 우마무스메들을 보며 도시락을 먹었다. 봄바람이 ${maru.name}의 치맛자락을 들추고, 귀가 음악의 리듬에 맞춰 잘게 움직였다.`,
    );
    era.print(
      `한동안 말이 없었다. 도시락을 다 먹자 마루젠스키는 젓가락을 내려놓고 일어서서 ${you.name}을(를) 바라보았다.`,
    );
    await maru.say_and_wait(
      '그래서, 이 트레이너 군도 담당을 찾고 있니? 목표는 뭐야?',
    );
    await maru.say_and_wait(
      '무패 삼관, 황제를 뛰어넘는 것, 아니면 담당과 함께 세계 무대에 도전하는 걸까?',
    );
    await maru.say_and_wait('뭐든 누나한테 상담해도 좋아♪');
    era.print(`${maru.name}은(는) 미소를 지으며 ${you.name}을(를) 살폈다.`);
    era.print(
      `${you.name}의 머릿속에 그 붉은 그림자와 달릴 때의 만족스러운 미소가 떠올랐다.`,
    );
    era.printButton(
      '담당이 달릴 때 달리기의 즐거움을 마음껏 만끽하는 모습을 보고 싶어.',
      1,
    );
    await era.input();
    await maru.say_and_wait('！');
    era.print(
      `${maru.name}의 귀가 눈에 띄게 떨렸다. 꼬리가 ${maru.name}이(가) ${you.name}을(를) 살피는 박자에 맞춰 흔들렸다.`,
    );
    await maru.say_and_wait('……그러네. 너, 내 트레이너가 되어 주지 않을래?');

    era.print(
      `${you.name}은(는) 그 진지한 얼굴을 보고 조금 의외라고 생각했지만, 결국 손을 내밀었다.`,
    );
    await maru.say_and_wait(['그럼, 앞으로 잘 부탁해, ', callname, '♪']);
  },
};
