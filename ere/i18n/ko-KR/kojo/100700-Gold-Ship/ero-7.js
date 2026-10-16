/**
 * @file ゴールドシップ - 調教
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} taste 秋川やよい / ホクホク味
   * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async report_preg(gs, you, taste, minoru, callname) {
    await gs.say_and_wait('……');
    era.println();
    await gs.print_and_wait([
      gs.get_colored_name(),
      '은 변기에 다리를 벌리고 앉아 막대 모양 물건을 손에 든 채 생각에 잠겨 있었다.',
    ]);
    era.println();
    await gs.print_and_wait(
      '그것은 임신 테스트기였다. 소변 속 호르몬 수치로 여성의 임신 여부를 알아내는 신기한 도구다.',
    );
    era.println();
    const love = era.get('love:7');
    if (love === 100) {
      if (era.get('relation:7:0') > 0) {
        await gs.say_and_wait([
          callname,
          '은(는) 인정해 줄까…… 뭐, 올곧은 녀석이니까……',
        ]);
      } else {
        await gs.say_and_wait([
          callname,
          '은(는) 인정해 줄까…… 개자식이긴 하지만……',
        ]);
      }
    } else if (love >= 75) {
      await gs.say_and_wait('생겼다구, 우리 사랑의 결실❤️');
    } else if (love >= 50) {
      await gs.say_and_wait('이거면 그 녀석을 붙잡아 둘 수 있겠지……');
    }
    era.drawLine();
    await gs.say_and_wait([
      '오늘 날씨 좋네—— 아, 맞다! ',
      callname,
      ', 나 생겼어.',
    ]);
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '은 ',
      you.get_colored_name(),
      '의 옆에 서서 자기 배를 가리켰다.',
    ]);
    era.printButton(
      '「어젯밤에 막 했는데 다음 날 일어나자마자 생겼다고? 그렇게 빨리 알 수 있어?」',
      1,
    );
    await era.input();
    await gs.say_and_wait(
      '오～ 『막 했는데』라～! 아니, 농담 아냐. 자, 방금 확인한 따끈따끈한 테스트기.',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '의 얼굴은 의외로 진지했다. ',
      you.get_colored_name(),
      '은(는) 반신반의하며 테스트기를 받았다. 결과는 양성. 아무리 봐도 ',
      you.get_colored_name(),
      '이(가) 아버지다.',
    ]);
    era.println();
    await era.printAndWait([
      '담당 우마무스메를 임신시킨 일은 트레센의 윗선에 보고할 수밖에 없었다. ',
      taste.get_colored_name(),
      '과(와) ',
      minoru.get_colored_name(),
      '은(는) 드물게도 사람 하나 죽일 듯한 눈빛을 보냈다. 그래도 두 사람은 책임감을 가지고 앞으로 시작될 육아와 명성을 훼손할 추문을 최대한 수습해 줄 것이다.',
    ]);
    era.println();
    await era.printAndWait('물론 해낼 수 있느냐는 별개의 문제다.');
  },
  /**
   * @param {CharaTalk} gs
   * @param {PrintedSpan} callname
   */
  async have_baby(gs, callname) {
    await gs.say_and_wait([callname, '……']);
    await gs.say_and_wait('평소엔 제대로 말한 적이 별로 없지만……');
    await gs.say_and_wait('지금 나, 행복하다구.');
  },
};
