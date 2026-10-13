/**
 * @file ゴールドシップ - 募集
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gold_ship
   * @param {CharaTalk} you
   * @param {string} title
   * @param {string} color2
   */
  async rec(gold_ship, you, title, color2) {
    await era.printAndWait([
      '하늘이 맑게 갠 아침, ',
      you.get_colored_name(),
      '은(는) 늠름한 트레이너 차림으로 트레센의 훈련장을 찾았다.',
    ]);
    await era.printAndWait([
      title,
      ' 트레이너인 ',
      you.get_colored_name(),
      '의 임무는 장래가 유망한 젊은 ',
      gold_ship.uma_sex_title,
      '들을 더 높은 곳으로 이끄는 것이다.',
    ]);
    await era.printAndWait([
      '문득 ',
      you.get_colored_name(),
      '은(는) 운동복을 입은 키 큰 은발의 ',
      gold_ship.uma_sex_title,
      '에게 눈길이 갔다. ',
      gold_ship.sex,
      '의 얼굴에는 서리라도 내려앉은 듯 무표정한, 이른바 포커페이스가 붙어 있었다. 머리에는…… 헤드폰과 모자를 합쳐 놓은 듯한 장식이 있었지만, ',
      you.get_colored_name(),
      '은(는) 경험상 그것이 ',
      gold_ship.uma_sex_title,
      '의 전통적인 차림이라는 것을 알고 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 가늘게 뜨고 관찰했다. ',
      gold_ship.sex,
      '는 곧 있을 선발 레이스를 앞두고 몸을 푸는 듯했다. ',
      gold_ship.sex,
      '의 몸은 유연해서, 허리를 뒤로 젖히거나 무릎을 굽혔다 펴는 스트레칭을 가볍게 해냈다.',
    ]);
    if (gold_ship.sex_code !== 1) {
      await era.printAndWait([
        '가슴께의 녹아내리는 아이스크림처럼 부드러운 부풀음도 은발 미인의 움직임에 맞춰 출렁였다. 운동복 아래 감춰진 탄탄하고 건강한 엉덩이와 그 그늘에 잠긴 신비로운 정원이 ',
        you.get_colored_name(),
        '의 시선을 붙들어 놓았다. 이제 소녀라고 하기에는 성숙해진 몸이 끊임없이 ',
        you.get_colored_name(),
        '의 눈길을 유혹한다…… 정신 차리자. ',
        you.get_colored_name(),
        '은(는) 전문 트레이너다.',
      ]);
    }
    await era.printAndWait([
      '하지만 ',
      gold_ship.sex,
      '의 허벅지는 어쩜 저렇게 둥글까! 둥그런 살집 아래 희미하게 드러난 근육의 윤곽이 ',
      you.get_colored_name(),
      '에게 지금 당장 손을 대고 느껴 보라고 속삭였다. 부드러움 아래 숨은 탄탄한 감촉을.',
    ]);
    await era.printAndWait([
      '그때 은발의 ',
      gold_ship.uma_sex_title,
      '는 ',
      you.get_colored_name(),
      '의 시선을 알아챘는지 이쪽을 바라보았다. ',
      you.get_colored_name(),
      '은(는) 얼른 불순한 생각을 머릿속에서 떨쳐 버리고 태블릿으로 시선을 내렸다.',
    ]);

    era.printButton('(……이 사람은……)', 1);
    await era.input();
    await era.printAndWait([
      '이 은빛 털은 분류상 회색 털에 해당한다. ',
      you.get_colored_name(),
      '은(는) 공용 태블릿의 데이터베이스를 뒤져 털빛만으로 금세 이 학생의 이름을 찾아냈다.',
    ]);

    era.printButton('(골드…… 쉽…… 뭐야, 은색이잖아.)', 1);
    await era.input();
    await era.printAndWait([
      '은색인 ',
      gold_ship.get_colored_name(),
      '. 그 우스갯소리에 ',
      you.get_colored_name(),
      '은(는) 저도 모르게 웃음소리를 냈다.',
    ]);
    await era.printAndWait([
      '그 순간 등골을 타고 한기가 올라왔다. ',
      you.get_colored_name(),
      '은(는) 숙인 고개를 조금도 움직일 수 없었다. 움직인 것은 눈뿐이었다. 호기심이라는 이름의 그 빌어먹을 눈이 위를 힐끗 보고 말았다.',
    ]);
    await gold_ship.say_and_wait('……');

    await era.printAndWait([
      you.get_colored_name(),
      '의 시선이 태블릿 너머의 크고 정교한 아름다운 얼굴과 마주쳤다. 얼굴의 주인은 고개를 기울인 채 눈을 크게 뜨고 ',
      you.get_colored_name(),
      '와(과) 눈을 맞추고 있었지만, 어쩐지 ',
      you.get_colored_name(),
      '을(를) 보고 있지 않은 것 같았다.',
    ]);
    await era.printAndWait([
      gold_ship.sex,
      '의 눈에는 초점이 없었다. ',
      you.get_colored_name(),
      '은(는) 눈앞의 미인이 ',
      you.get_colored_name(),
      '을(를) 보는 건지, ',
      you.get_colored_name(),
      '의 뒤를 보는 건지, ',
      you.get_colored_name(),
      '의 내면을 보는 건지, ',
      you.get_colored_name(),
      '의 머릿속을 보는 건지, ',
      you.get_colored_name(),
      '의 영혼을 보는 건지 알 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈 한 번 깜빡이지 못하고 ',
      gold_ship.sex,
      '의 바늘 같은 시선이 안구에 꽂힌 채 견뎠다. 눈이 마르기 시작해서야 생리적인 반응으로 눈꺼풀이 내려왔다.',
    ]);
    await era.printAndWait([
      '아주 잠깐이었다. ',
      you.get_colored_name(),
      '이(가) 조금 촉촉해진 눈을 다시 떴을 때, 그 ',
      gold_ship.uma_sex_title,
      '는 이미 원래 자리로 돌아가 있었다. ',
      gold_ship.sex,
      '는 더 이상 ',
      you.get_colored_name(),
      '을(를) 보고 있지 않았다. 그래도 머릿속을 ',
      gold_ship.sex,
      '가 휘저어 놓은 듯한 기묘한 감각만은 오래도록 남았다.',
    ]);

    era.printButton('(대체 뭐였지……)', 1);
    await era.input();
    await era.printAndWait([
      '선발 레이스가 끝났다. ',
      gold_ship.get_colored_name(),
      '은(는) 기록을 경신하며 우승했다. ',
      you.get_colored_name(),
      '의 주위에서는 다른 트레이너들이 술렁였다. 이 인재를 차지하려고 벌써 자리에서 일어나고 있는 것이 분명했다.',
    ]);
    era.printButton(
      `다가가서 ${gold_ship.name}을(를) 스카우트하려는 사람들 사이에 끼어 본다.`,
      1,
    );
    era.printButton('「불길한 예감이 드는데……」', 2);
    await era.input();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '은(는) 사람들 사이에서 단번에 ',
      you.get_colored_name(),
      '을(를) 찾아냈다. 아니, 처음부터 ',
      gold_ship.sex,
      '의 눈에는 열띤 얼굴로 다가오는 다른 트레이너 따위는 들어오지도 않았던 걸까. ',
      gold_ship.sex,
      '는 몰려든 사람들을 힘으로 헤치고, 먹잇감을 발견한 표범처럼 사나운 미소를 띤 채 ',
      you.get_colored_name(),
      '을(를) 향해 처음에는 가볍게 뛰다가…… 점점 더 빠르게, 더 빠르게 달려왔다!',
    ]);
    await gold_ship.say_and_wait([
      { content: '야생 트레이너 발견이다아아아아아——!', color: color2 },
    ]);
    await era.printAndWait([
      '그것이 ',
      you.get_colored_name(),
      '이(가) 정신을 잃기 직전에 들은 마지막 한마디였다.',
    ]);

    era.println();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '에게 스카우트당하고 말았다!',
    ]);
  },
};
