/**
 * @file ワンダーアキュート - 募集
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} you
   * @param {{ct:CharaTalk,cl:PrintedSpan}} nn
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tannhauser
   * @param {{ct:CharaTalk,cl:PrintedSpan}} mcqueen
   * @param {{ct:CharaTalk,cl:PrintedSpan}} gs
   * @param {{ct:CharaTalk,cl:PrintedSpan}} ardan
   * @param {{ct:CharaTalk,cl:PrintedSpan}} halo
   * @param {{ct:CharaTalk,cl:PrintedSpan}} oguri
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tama
   * @param {{ct:CharaTalk,cl:PrintedSpan}} grass
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tachyon
   * @param {{ct:CharaTalk,cl:PrintedSpan}} coffee
   */
  async rec_start(
    acute,
    you,
    {
      nn,
      tannhauser,
      mcqueen,
      gs,
      ardan,
      halo,
      oguri,
      tama,
      grass,
      tachyon,
      coffee,
    },
  ) {
    await you.say_and_wait(
      '……우리 집 문 앞에는 나무가 두 그루 있다. 하나는 대추나무고, 다른 하나도 대추나무다.',
      true,
    );
    await you.say_and_wait(
      '미안하다. 이 명언을 인용한 건 문인의 말을 빌려 잘난 척하고 싶어서가 아니다.',
      true,
    );
    await you.say_and_wait(
      '그저 무슨 말이라도 하고 싶었을 뿐이다…… 아니, 정말 할 말이 없었을 뿐인지도 모른다.',
      true,
    );
    await you.say_and_wait(
      '업무에 지쳐 트레이너로서의 자신감까지 짓눌린 걸까?',
      true,
    );
    await you.say_and_wait(
      '연달아 치른 레이스가 감당하기 벅찬 압박으로 다가온 걸까?',
      true,
    );
    await you.say_and_wait(
      [
        '아니면 진심을 쏟은 ',
        acute.uma_sex_title,
        '에게 트레이너로서 어느 정도 거리를 두어야 할지 정하지 못해, 끝내 서로 상처를 준 걸까?',
      ],
      true,
    );
    await you.say_and_wait('전부일 수도 있고…… 전부 아닐 수도 있다.', true);
    era.drawLine();
    if (nn) {
      await nn.ct.used_to_say_and_wait(
        '그래그래, 평범한 사람이니까 지치는 것도 당연하지.',
      );
    }
    if (tannhauser) {
      await tannhauser.ct.used_to_say_and_wait([
        '괜찮아, ',
        tannhauser.cl,
        '~ 기운 내~',
      ]);
    }
    if (mcqueen) {
      await mcqueen.ct.used_to_say_and_wait([
        '뭐…… 어쨌든, 함께 홍차라도 마시는 게 어떨까요, ',
        mcqueen.cl,
        '？',
      ]);
    }
    if (gs) {
      await gs.ct.used_to_say_and_wait([
        '오, ',
        gs.cl,
        '~ 라멘 한 그릇, 어떠냐?',
      ]);
    }
    if (ardan) {
      await ardan.ct.used_to_say_and_wait([
        '괜찮아요, ',
        ardan.cl,
        '! 메지로 가문의 재력이라면——',
      ]);
    }
    if (halo) {
      await halo.ct.used_to_say_and_wait([
        '오~호호호호! 범인의 시선 따윈 신경 쓰지 마세요. 언제 어느 때라도 당신의 재능과 모습은 이 ',
        halo.ct.name,
        '가 인정해 드리겠어요!',
      ]);
    }
    if (oguri) {
      await oguri.ct.used_to_say_and_wait(['……', oguri.cl, ', 배고프다.']);
    }
    if (tama) {
      await tama.ct.used_to_say_and_wait([
        '자, ',
        tama.cl,
        '. 오코노미야키다. 니하고 ',
        tama.cl,
        ' 몫으로 만들었데이. 묵으면 기운 날 끼다.',
      ]);
    }
    if (grass) {
      await grass.ct.used_to_say_and_wait([
        '후훗~ 귀엽기도 해라, ',
        grass.cl,
        '～',
      ]);
    }
    if (tachyon) {
      await tachyon.ct.used_to_say_and_wait([
        '이런, ',
        tachyon.cl,
        '! 그렇게 신경 쓰인다면 모든 걸 잊게 해 주는 약을 써 보겠나? 공짜라네~',
      ]);
    }
    if (coffee) {
      await coffee.ct.used_to_say_and_wait([
        '……이대로 계속 있다가는, ',
        coffee.cl,
        '……, 죽어버리실 지도 몰라요?',
      ]);
    }
    era.drawLine();
    await era.printAndWait('옥상에 가서 담배나 한 대 피울까……');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} taste 秋川やよい/ノースフライト
   * @param {CharaTalk} minoru 駿川たづな/ハープスター
   * @param {CharaTalk} you プレイヤー
   */
  async rec_rooftop(acute, taste, minoru, you) {
    await era.printAndWait(
      '해 질 녘 옥상에서, 모든 걸 잠시 잊게 해 주는 담배에 저도 모르게 손이 간다.',
    );
    await era.printAndWait('주머니를 뒤적인다.');
    await era.printAndWait('——아무것도 없다.');
    era.drawLine();
    await era.printAndWait(
      '황혼의 석양 아래, 비행기 한 대가 주황색 직선을 남기며 하늘 끝을 날아간다.',
    );
    await era.printAndWait(
      '난간에 기대 하늘을 바라본다. 이토록 자유로운 적도, 이토록 숨 막히는 적도 없었다.',
    );
    await era.printAndWait([
      '한때 백이십일억이라는 터무니없는 빚을 짊어졌을 때, ',
      taste.get_colored_name(),
      '이(가) ',
      you.get_colored_name(),
      '을(를) 받아들여 트레이너로서 빚더미의 지옥을 헤쳐 나가고 그 구멍을 메우게 해 주었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 생각한다. 지금도 ',
      taste.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 믿고 있을지도 모른다고.',
    ]);
    await era.printAndWait([
      taste.get_colored_name(),
      '뿐 아니라 ',
      minoru.get_colored_name(),
      ', 그리고 다른 담당 ',
      acute.uma_sex_title,
      '들도…… ',
      you.get_colored_name(),
      '은(는) 생각한다.',
      acute.couple_title,
      '은(는) 아직 ',
      you.get_colored_name(),
      '에게 기대를 걸고 있다고.',
    ]);
    await era.printAndWait('하지만 그 기대가 짐이기도 한 건 아닐까.');
    await era.printAndWait([
      '따지고 보면 ',
      you.get_colored_name(),
      '도 그저 【범인】일 뿐이다.',
    ]);
    await era.printAndWait(
      '무엇 하나 완벽하게 해내지 못한다. 이토록 큰 기대를 감당할 그릇도 못 된다. 세상 속에서 필사적으로 발버둥 치며, 가능하다면 뒤로 도망치고 싶다는 생각마저 하는 지극히 평범한 【범인】이 아니었던가.',
    );
    await you.say_and_wait('……………………');
    await you.say_and_wait('…………');
    await you.say_and_wait('……');
    await you.say_and_wait('도망치고…… 싶다.', true);
    era.printButton('「하아…… (한숨)」', 1);
    await era.input();
    await acute.say_as_unknown_and_wait(
      '어머나…… 그렇게 한숨만 쉬면 복이 달아난단다?',
    );
    await era.printAndWait([
      '그때, ',
      you.get_colored_name(),
      ' 앞에 나타난 것은 석양과 같은 빛으로 반짝이는 ',
      acute.uma_sex_title,
      '이었다.',
    ]);
    await era.printAndWait([
      '트레센 학원 옥상, 지는 해의 잔광 속. ',
      you.get_colored_name(),
      '은(는) 목소리가 들린 쪽으로 조용히 돌아본다. 줄곧 온화하게 미소 짓는 ',
      acute.uma_sex_title,
      '가 ',
      you.get_colored_name(),
      '의 눈앞에 모습을 드러냈다.',
    ]);
    await era.printAndWait(
      `${acute.sex}에게는 만화에서나 나올 법한 특별한 광채가 없다. 그런데도 ${acute.sex}의 모습은 잊기 어렵다.`,
    );
    await era.printAndWait(
      `왜냐하면 ${acute.sex}는——이 저무는 해와 너무도 잘 어우러졌으니까.`,
    );
    await acute.say_as_unknown_and_wait(
      '어머나…… 그렇게 난처한 표정은 그만하렴.',
    );
    await acute.say_as_unknown_and_wait(
      '내 이름은 원더 어큐트란다…… 음——초면이지?',
    );
    await acute.say_and_wait(
      '갑자기 말을 걸어서 미안하구나. 많이 놀랐니? 울 것 같은 얼굴을 하고 있길래, 걱정이 되어서 말이야.',
    );
    await acute.say_and_wait(
      '학원의 못된 아이들이 괴롭히기라도 했니? 아니면 직장에서 괴롭힘을 당한 게니? 그도 아니면, 그냥 배가 고픈 걸까?',
    );
    await acute.say_and_wait(
      '배가 고프다면…… 자, 단무지란다~ 사양 말고 손으로 집어 먹으렴~',
    );
    await era.printAndWait(
      `줄곧 온화하게 미소 지으며 석양에 어우러진 ${acute.sex}는 등 뒤에서 단무지를 담은 유리 접시를 꺼냈다.`,
    );
    await era.printAndWait(
      '붙임성도, 환심을 사려는 행동도, 물론 평소의 팬 서비스도 아니다——',
    );
    await era.printAndWait([
      '너무 가깝지도, 너무 멀지도 않은 딱 알맞은 거리.',
      acute.sex,
      '는 유리 접시를 든 손을 뻗어, 단무지를 ',
      you.get_colored_name(),
      '의 앞으로 내밀었다.',
    ]);
    await era.printAndWait(
      `정신을 차리고 보니 ${you.name}도 오른손을 내밀고 있었다.`,
    );
    await era.printAndWait('아삭, 아삭, 아삭, 아삭——');
    await era.printAndWait('조금 쌉쌀하면서도, 뜻밖에 씹는 맛이 좋은 맛.');
    await era.printAndWait('배가 고프지도 않았는데…… 어째서인지——');
    await era.printAndWait('멈출 수 없을 것만 같았다.');
    await era.printAndWait(
      '처음에는 손끝으로 맨 위의 가장 마른 조각 끝을 집어 입가로 가져가, 이로 깨물었다.',
    );
    await era.printAndWait(
      '다음에는 손끝으로 한 조각의 가운데를 집어 그대로 입에 넣고 씹었다.',
    );
    await era.printAndWait('마지막에는 여러 조각을 한꺼번에 집어 입에 넣었다.');
    await era.printAndWait('먹을수록 갈증이 심해진다.');
    await era.printAndWait('갈증이 심해질수록, 어째선지 속은 시원해진다.');
    await era.printAndWait([
      '유리 접시의 단무지는 눈 깜짝할 사이에 ',
      you.get_colored_name(),
      '의 배 속으로 들어갔다.',
    ]);
    await acute.say_and_wait('어머나…… 참 호쾌하게도 먹는구나~');
    await era.printAndWait(
      '줄곧 온화하고 차분하던 얼굴에 웃음이 하나 더 피어났다.',
    );
    await acute.say_and_wait('어떠니, 맛있었니?');
    era.printButton('「……아, 응.」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 말없이 고개를 끄덕이며, 한 통을 다 먹어 치운 데 대한 사과를 가슴속으로 삼켰다.',
    ]);
    await acute.say_and_wait('맛있다니 다행이구나~ 그럼, 앉으렴.');
    await era.printAndWait([
      acute.get_colored_name(),
      '라는 이름의 ',
      acute.teen_sex_title,
      '은(는) 옥상 벽에 기대어 석양을 받으며 앉았다.',
    ]);
    await era.printAndWait(
      `${acute.sex}는 앉으면서 옆의 빈자리를 가볍게 두드렸다.`,
    );
    await acute.say_and_wait('힘들 때 혼자 있는 건 좋지 않단다~');
    await acute.say_and_wait(
      '시간은 아직 많으니까. 무슨 일이든 느긋하게 얘기해 보렴~',
    );
    era.drawLine();
    await era.printAndWait('그날, 해가 지기 전.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 석양과 같은 빛으로 반짝이는 ',
      acute.teen_sex_title,
      '——훗날 ',
      you.get_colored_name(),
      '의 담당이 되는 ',
      acute.teen_sex_title,
      '、',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('많고도 많은 이야기를 나누었다——');
    era.println();
    await era.printAndWait([acute.get_colored_name(), '의 트레이너가 되었다!']);
  },
};
