/**
 * @file ゴールドシップ - 地下室
 * @author 雞雞
 */
const era = require('#/era-electron');

const chara_colors = require('#/data/chara-colors').chara_colors[7];

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_agree(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 돌아가고 싶다는 말을 꺼내자, 의자 등받이에 기대어 ',
      you.get_colored_name(),
      '와(과) 함께 게임을 하던 ',
      gs.get_colored_name(),
      '은(는) 미간을 찌푸렸다.',
    ]);
    era.println();
    await gs.say_and_wait('어——?');
    await gs.say_and_wait(
      '여긴 물도 맑고 모래도 부드럽고 바람도 시원하고 물도 차가운데, 굳이 밖에 나갈 필요가 있냐?',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '은(는) 잠시 생각하더니 내키지 않는 듯 중얼거렸다.',
    ]);
    era.println();
    await gs.say_and_wait('거참, 손이 많이 가는 녀석이네……');
    await gs.say_and_wait('그럼 시장에서 장 보고 돌아오기로 할까.');
    await gs.say_and_wait([
      {
        color: chara_colors[1],
        content: '아, 맞다…… 살아 있는 장어랑 팥밥이 좋겠어!',
      },
    ]);
    era.println();
    await era.printAndWait([
      '그 후 ',
      gs.get_colored_name(),
      '은(는) 겨우 지상으로 나온 ',
      you.get_colored_name(),
      '에게 맛있는 저녁까지 한 끼 더 얻어먹고 나서야 정식으로 풀어 주었다.',
    ]);
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_reject(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 돌아가고 싶다는 말을 꺼내자, 의자 등받이에 기대어 ',
      you.get_colored_name(),
      '와(과) 함께 게임을 하던 ',
      gs.get_colored_name(),
      '은(는) 미간을 찌푸렸다.',
    ]);
    era.println();
    await gs.say_and_wait('어——?');
    await gs.say_and_wait(
      '여긴 물도 맑고 모래도 부드럽고 바람도 시원하고 물도 차가운데, 굳이 밖에 나갈 필요가 있냐?',
    );
    era.println();
    await era.printAndWait([
      '아마 이 이야기를 피하고 싶은 모양이다. ',
      gs.get_colored_name(),
      '은(는) 순식간에 화면 속 치열한 전투로 관심을 돌렸다.',
    ]);
    era.println();
    await gs.say_and_wait('쓸데없는 소리 말고 벌레 둥지의 폭군이나 쓰러뜨려!');
    await gs.say_and_wait('아아아아 광역기 맞았다——!');
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '이(가) 싫증이 날 때까지 여기서 나갈 수는 없을 것 같다.',
    ]);
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {string} cur_time 現在時刻
   * @param {number} security_level ゴールドシップの警戒レベル
   */
  async ask_time(gs, you, cur_time, security_level) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      gs.get_colored_name(),
      '에게 지금 몇 시인지 물었다……',
    ]);
    era.println();
    await gs.say_and_wait([
      { color: chara_colors[1], content: '지금 몇 시냐고?' },
    ]);
    if (security_level > 3) {
      await gs.say_and_wait('카지노에 시계가 없는 이유 알아?');
      await gs.say_and_wait('몰라? 그럼 지금 알게 됐네.');
    } else {
      await gs.say_and_wait([{ color: chara_colors[1], content: '뚜뚜～～' }]);
      await gs.say_and_wait([
        {
          color: chara_colors[1],
          content: `지금 시각은～～${cur_time}～～`,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  find_escape(gs, you) {
    era.print([
      you.get_colored_name(),
      '은(는) 불안한 걸음으로 어두운 통로를 걸어갔다……',
    ]);
    era.println();
    gs.say([{ color: chara_colors[1], content: '후…… 하…… 후…… 하……' }]);
    era.println();
    era.print([
      '출구 앞에서 ',
      you.get_colored_name(),
      '은(는) 거친 숨소리를 들었다.',
    ]);
    era.print('소리가 어찌나 큰지 일부러 연기하는 게 아닌가 싶을 정도였다.');
    era.print([
      '그러더니 눈을 찌르는 붉은빛이 켜졌다. 검은 가면에 붉은 광선검까지, 다스 베이더 같은 모습의 ',
      gs.get_colored_name(),
      '이(가) 진작부터 기다리고 있었던 것이다!',
    ]);
  },
};
