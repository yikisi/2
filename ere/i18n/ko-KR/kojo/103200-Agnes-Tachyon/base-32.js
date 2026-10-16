/**
 * @file アグネスタキオン - 地下室
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  welcome(tachyon, callname) {
    tachyon.say(['이런, ', callname, ', 깨어났나.']);
    tachyon.say(['마음에 드나? 내 새 실험실이.']);
    tachyon.say(['……시치미 떼지 말게나. ……후후, 그럼 본론으로 들어가지.']);
    tachyon.say(['——', callname, ', 줄곧 궁금했다네.']);
    tachyon.say([
      '나는 자네 눈에 가장 가능성이 넘치는 ',
      tachyon.uma_sex_title,
      ', 그렇지 않나?',
    ]);
    tachyon.say([
      '내 달리기는 자네를 눈부시게 하고, 미치게 만들었지. 그렇지 않나?',
    ]);
    tachyon.say(['──그런데 지금, 자네 눈이 바라보는 것은 대체 누구지?']);
    tachyon.say(['나는 모르겠어…… ', callname, ', ']);
    tachyon.say(['나는 이제 자네가 없는 가능성을 선택할 수 없다네.']);
    tachyon.say(['그런데 자네 눈에는 내 모습이 비치지 않아.']);
    tachyon.say([
      '이것이 사랑인가? 사랑은 이토록 불공평한 것인가? 나는 이미 자네 없이는 살 수 없는데, 자네 눈에는 아직도 내가 없군.',
    ]);
    tachyon.say([
      '……미안하네, ',
      callname,
      '. 하지만 이번 실험은 자네 의사를 무시하고 진행해야겠어. 내가 납득할 때까지, 부디 이곳에 있어 주게.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ask_release_agree(tachyon, you, callname) {
    await tachyon.say_and_wait(['좋아.']);
    era.println();
    await era.printAndWait([
      '거절당할 각오를 하고 있었다. 그런데 ',
      tachyon.get_colored_name(),
      '은 맥이 빠질 만큼 선뜻 고개를 끄덕였다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['실험은…… 일단 결과도 나왔고, ']);
    await tachyon.say_and_wait(['자네를 평생 이곳에 묶어 둘 생각도 없다네.']);
    await tachyon.say_and_wait(['──그래, 굳이 말하자면 질문이 하나 남았군.']);
    era.println();

    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '이 ',
      you.get_colored_name(),
      '의 앞까지 다가와, ',
      you.get_colored_name(),
      '의 눈을 바라보았다.',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      ', 자네는 예전에 내 눈동자에는 사람을 미치게 하는 마력이 있다고 했지.',
    ]);
    await tachyon.say_and_wait(['그럼…… 지금도 자네에게는 그 마력이 보이나?']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 눈동자가 지닌 매력…… 그것은 ',
      tachyon.sex,
      '의 꿈을 향한 갈망에서 비롯된 것이었다. 한계에 도전하며 자신을 바치겠다는 각오에서 비롯된 것이었다.',
    ]);
    await era.printAndWait([
      '그렇다면 지금의 ',
      tachyon.get_colored_name(),
      '은?',
    ]);
    await era.printAndWait([
      '오직 자신에게만 취하고 자신만을 갈구하는 모습은 분명 가슴을 울린다.',
    ]);
    await era.printAndWait([
      '하지만 지금 ',
      tachyon.get_colored_name(),
      '의 눈에는 예전처럼 모든 것을 바치고 싶게 만드는 마력이 남아 있을까.',
    ]);
    await era.printAndWait([you.get_colored_name(), '은(는) 고개를 저었다.']);
    era.println();

    await tachyon.say_and_wait(['…………아아, 그런가.']);
    await tachyon.say_and_wait(['그럼 마지막 질문에도 답이 나왔군.']);
    await tachyon.say_and_wait(['나가도 좋아.']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 짐을 챙겨 나가려 할 때, ',
      tachyon.get_colored_name(),
      '은 등을 돌린 채 침대 가장자리에 앉아 있었다.',
    ]);

    era.printButton('「타키온?」', 1);
    era.printButton('「너는 안 나가?」', 2);
    await era.input();

    await tachyon.say_and_wait([
      '……후후, 이런 꼴이 되었는데도 나를 걱정하는 건가?',
    ]);
    await tachyon.say_and_wait(['괜찮아. 나도 나중에 나가겠네. 다만……']);
    await tachyon.say_and_wait([
      '지금의──추한 눈동자를 자네에게 보이고 싶지 않을 뿐이야.',
    ]);

    await era.printAndWait([you.get_colored_name(), '은(는) 지하실을 나왔다.']);
    await era.printAndWait([
      '처음부터 끝까지 ',
      tachyon.get_colored_name(),
      '은 돌아보지 않았다.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ask_release_reject(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ', 말했을 텐데. 이번 실험은 꽤 오래 걸린다고…… 말하지 않았던가? 그럼 지금 말하지.',
    ]);
    await tachyon.say_and_wait([
      '도무지 모르겠어…… 자네는 왜 다른 ',
      tachyon.uma_sex_title,
      '에게 그토록 집착하는 거지? 그리고──나는 왜 그 사실에 그토록 집착하는 걸까.',
    ]);
    await tachyon.say_and_wait([
      '그러니 납득할 때까지는…… 미안하지만 자네를 내보낼 수 없다네.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async battle_prison(tachyon, callname) {
    await tachyon.say_and_wait([
      '자유를 위해서라면 자신의 담당에게 손을 대겠다는 건가?',
    ]);
    await tachyon.say_and_wait([
      '아니면…… 밖에 나보다 소중한 사람이 있기 때문인가?',
    ]);
    await tachyon.say_and_wait([
      '……기묘한 느낌이군. 원래 나는 이렇게 의심이 많지는 않았을 텐데.',
    ]);
    await tachyon.say_and_wait([
      '알려 주겠나? ',
      callname,
      '──지금의 나는 자네 눈에 어떻게 비치지?',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  find_escape(tachyon, you) {
    tachyon.say(['나가고 싶은 건가?']);
    era.println();

    era.print([
      tachyon.get_colored_name(),
      '은 문고리를 잡고 있던 ',
      you.get_colored_name(),
      '의 손을 다정하게 감쌌다.',
    ]);
    era.println();

    tachyon.say(['……막지는 않겠어. 도와주지도 않을 테지만.']);
    tachyon.say([
      '내가 답을 좇듯이, 모르모트 군, 자네도 스스로의 힘으로 내 구속을 풀어 보게나.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(tachyon, you) {
    await tachyon.say_and_wait(['음……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 움직임은 빨랐다.',
      tachyon.get_colored_name(),
      '의 약으로 기른 체력도 충분했다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 반응할 틈도 없이 정신을 잃었다.',
    ]);
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async strike_fail(tachyon) {
    await tachyon.say_and_wait([
      '풀 수 없다면 출제자부터 처리한다…… 그것도 하나의 해법이지.',
    ]);
    await tachyon.say_and_wait(['하지만 체급 차이를 고려하지 않았군……']);
    await tachyon.say_and_wait([
      '평소 먹던 약 때문에 지나치게 자신만만해졌나…… 아니면 ',
      tachyon.uma_sex_title,
      '의 무해해 보이는 행동에 이길 수 있다는 착각을 한 건가?',
    ]);
    await tachyon.say_and_wait([
      '……뭐, 좋아. 모르겠다면 이번 기회에 확실히 알아 두게나.',
    ]);
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      '의 소질, ',
      tachyon.uma_sex_title,
      '의 신체 능력, ',
      tachyon.uma_sex_title,
      '의 성욕…… 그 모든 것을 몸에 새겨 주지.',
    ]);
  },
};
