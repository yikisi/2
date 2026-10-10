/**
 * @file アグネスタキオン - 募集
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_start(tachyon, you) {
    era.print(
      `${you.name}은(는) 오늘 선발 레이스에서 잊지 못할 광경을 보았다. 비할 데 없는 달리기를 선보이는 ${tachyon.uma_sex_title}이(가) 있었다`,
    );
    era.print(
      `${tachyon.sex}이(가) 출발하는 순간, ${tachyon.sex}이(가) 스퍼트하는 순간, ${tachyon.sex}이(가) 결승선을 통과하는 순간`,
    );
    era.print('마치 빛처럼 빠르고, 빛처럼 눈부시며, 빛처럼…… 허무했다.');
    await era.printAndWait(
      `안타깝게도 인파에 ${you.name}의 발이 묶이는 바람에, ${you.name}은(는) ${tachyon.sex}에게 말을 걸 기회를 얻지 못했다`,
    );
    era.println();

    era.print(
      `${you.name}은(는) 초조해졌다. 다시 한번 그 ${tachyon.uma_sex_title}을(를), 그 빛을 보고 싶어 견딜 수가 없었다`,
    );
    await era.printAndWait(
      `마지막에 어째서 그런 생각이 떠올랐는지는 ${you.name}도 알 수 없었다. 공허하다는 말이 갑자기 ${you.name}의 머릿속을 파고든 것처럼……`,
    );
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_final(tachyon, you) {
    era.print(
      `${you.name}은(는) 며칠 전 이곳에서 보았던 그 달리기를 아직 잊지 못했다`,
    );
    era.print(
      `${you.name}은(는) 아직 데뷔하지 않은 ${tachyon.uma_sex_title}이(가) 갈 만한 곳은 거의 다 찾아다녔다. 트레이닝 코스, 모의 레이스장, 체육관, 식당까지`,
    );
    await era.printAndWait(
      `지난 며칠 동안 ${you.name}은(는) 그 ${tachyon.uma_sex_title}의 모습을 단 한 번도 보지 못했다. 마치 감쪽같이 사라진 것만 같았다`,
    );
    era.println();

    era.print(
      `${you.name}은(는) 레이스장 울타리에 기대어 저도 모르게 한숨을 내쉬었다`,
    );
    await era.printAndWait(`그때 ${you.name}의 귀에 대화가 띄엄띄엄 들려왔다`);
    era.println();

    await era.printAndWait([
      `??? 「……응, 이대로 트레이너가 정해지지 않으면 아마…… 아깝지, 그렇게 뛰어난 소질이 있는데……`,
      tachyon.get_colored_name(),
      `」`,
    ]);
    era.println();

    await era.printAndWait([
      `${you.name}은(는) 상대가 누구인지 신경 쓸 겨를도 없었다. `,
      tachyon.get_colored_name(),
      `。${you.name}은(는) 그 이름을 마음속으로 되뇌었다. 어째서인지 그 이름을 듣는 순간 가슴이 세차게 뛰었다. 직감이 속삭였다. 이것이 바로 ${you.name}이(가) 찾던 ${tachyon.uma_sex_title}、${tachyon.sex}의 이름이라고`,
    ]);
    era.println();

    era.print(`타키온(Tachyon). 현재 알려진 가장 빠른 입자`);
    era.print(`빛처럼 달리는 ${tachyon.sex}에게 이보다 어울리는 이름이 있을까`);
    era.print(
      `${you.name}은(는) 흥분을 감출 수 없었다. 하지만 그제야 아까 그 학생의 말이 떠올랐다`,
    );
    era.print(`(트레이너가 없다…… 아마……)`);
    await era.printAndWait(`${you.name}은(는) 다급히 달리기 시작했다`);
    era.println();

    era.print(`${tachyon.sex}을(를) 찾는 일은 의외로 쉬웠다`);
    era.print([
      `이름을 꺼내자, `,
      tachyon.get_colored_name(),
      `에 대해 많은 학생이 알고 있는 듯했다`,
    ]);
    era.print(`??? 「수업에는 전혀 안 나와」`);
    era.print(`??? 「빈 교실을 멋대로 자기 실험실로 쓰고 있어」`);
    era.print(
      `??? 「눈에 띄는 ${tachyon.uma_sex_title}에게 이상한 약을 떠넘겨」`,
    );
    era.print(`??? 「타키온 선배 약은 달고 맛있어」`);
    await era.printAndWait(
      `온통 이상한 소문뿐이었지만 어느 것도 ${you.name}의 마음에는 와닿지 않았다. ${you.name}은(는) 그저 ${tachyon.sex}을(를) 찾고 싶을 뿐이었다`,
    );
    era.println();

    await era.printAndWait(
      `${you.name}은(는) 소문 속 실험실 문 앞에 서서 노크했다`,
    );
    era.println();

    tachyon.say(`들어오게나～～`);
    await era.printAndWait(`안에서 나른한 목소리가 들려왔다`);
    era.println();

    era.print(`그런데도 ${you.name}은(는) 갑자기 주눅이 들었다`);
    era.print(
      `소문 때문이 아니었다. 팬이 동경하는 아이돌을 만나기 직전에 느끼는, 그런 감정이었다`,
    );
    era.print(
      `문 너머에는 지난 사흘 동안 밥도 제대로 먹지 못할 만큼 홀린 듯 찾아다녔던 ${tachyon.sex}이(가) 있었다`,
    );
    await era.printAndWait(
      `너무 오래 기다리게 한 걸까. ${you.name}이(가) 마음을 굳히기도 전에 문이 먼저 열렸다`,
    );
    era.println();

    era.print(
      `나타난 것은 흰 가운을 걸친 ${tachyon.uma_sex_title}이었다. 밤색 머리카락, 깔끔한 단발머리${tachyon.sex_code - 1 ? '. 가슴의 굴곡은 흰 가운으로도 다 가려지지 않았다' : ''}`,
    );
    era.print(
      `그리고 ${tachyon.sex}의 다리…… 의외로 가늘었다. 바지 위로도 알 수 있었다. 대부분의 ${tachyon.uma_sex_title}은(는) 가냘파 보여도 상상을 초월하는 괴력을 지녔지만, ${tachyon.sex}의 다리는 다른 ${tachyon.uma_sex_title}보다 확연히 가늘었다`,
    );
    era.print(`그날 ${you.name}이(가) 공허함을 느낀 이유는 이것이었다`);
    era.print(
      `하지만 다리보다 더 가슴에 와닿은 것은 ${tachyon.sex}의 두 눈이었다`,
    );
    era.print('블라인드처럼 공허한 붉은 두 눈');
    await era.printAndWait(
      '이쪽을 바라보고 있으면서도 그 안에는 아무것도 없는 것 같았다',
    );
    era.println();

    await era.printAndWait(
      `${you.name}은(는) 긴장했다. 준비해 둔 스카우트 제안은 흔적도 없이 사라졌고, ${you.name}은(는) 더듬거리며 그저 담당이 되어 주었으면 한다는 마음만 전했다`,
    );
    era.println();

    await era.printAndWait(
      `${tachyon.sex}은(는) ${you.name}의 눈을 한참 바라보다가 웃었다`,
    );
    era.println();

    await era.printAndWait(
      `그 뒤 ${you.name}은(는) ${tachyon.sex}의 지시에 따라 여러 불평등 조약에 서명했다. 약물 실험에 반드시 협조할 것, 트레이닝도 레이스도 ${tachyon.sex}의 기분에 따를 것 등등`,
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '와(과) ',
      tachyon.get_colored_name(),
      '의 삼 년이 시작되었다……',
    ]);
  },
};
