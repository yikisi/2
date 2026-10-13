/**
 * @file マンハッタンカフェ - 募集
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_start(coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 검은 머리의 ',
      coffee.uma_sex_title,
      '를 발견했다.',
    ]);
    await era.printAndWait([
      '하지만 다가가려는 순간, ',
      coffee.sex,
      '의 모습은 이미 사라지고 없었다. 처음부터 그 자리에 없었던 것처럼.',
    ]);
    await you.say_and_wait('잘못 본 건가? 돌아가서 쉬자.', true);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async goto_playground(coffee, you) {
    await era.printAndWait(
      '복은 겹쳐 오지 않고 화는 겹쳐 온다더니. 불운이란 대개 그런 법이다.',
    );
    await era.printAndWait([
      '아침 일찍 일어나 담당할 ',
      coffee.uma_sex_title,
      '를 찾으러 트레이닝장에 갔던 ',
      you.get_colored_name(),
      '은(는) 예상대로 아무런 성과도 얻지 못했다. 지친 몸을 끌고 숙소에 돌아와 쓰러지듯 잠들었다. 그런데 깨어나 온몸을 뒤져 봐도 휴대폰이 보이지 않았다.',
    ]);
    await era.printAndWait('다시 가서 찾아오는 수밖에. 달리 뭘 어쩌겠는가.');
    await era.printAndWait([
      '트레이닝장에 도착했을 때는 하늘이 완전히 어두워져 있었다. 찾는 데 시간이 꽤 걸리리라 생각했는데, 조금 떨어진 잔디밭 위로 작은 빛들이 반짝였다.',
    ]);
    await era.printAndWait([
      '무언가에 이끌리는 기분이었다——',
      you.get_colored_name(),
      '은(는) 영문 모를 감각을 따라 앞으로 걸어갔고, 그것이 잃어버린 휴대폰이라는 걸 알았다.',
    ]);
    era.printButton('「운이…… 나쁘지만은 않은 건가?」', 1);
    await era.input();
    await era.printAndWait('휙————');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 안도할 틈도 없이 무언가가 바람을 일으키며 어깨 옆을 스쳐 갔다. 주위를 둘러봐도 차가운 달빛 아래에는 아무것도 없었다.',
    ]);
    era.printButton('「이건……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 팔다리에서 몸통으로 기어오르는 한기를 느꼈다. 한기가 스쳐 간 곳마다 뻣뻣하게 굳어 갔다. 움직이려 해도 손발이 냉기에 짓눌려 녹슨 기계처럼 꼼짝하지 않았다. 괜한 상상은 하지 말자고 되뇌어도 여기저기서 들은 트레센의 괴담이 떠올라, ',
      you.get_colored_name(),
      '은(는) 두려움을 견딜 수 없었다.',
    ]);
    await coffee.say_as_unknown_and_wait('저기……');
    await era.printAndWait([
      '등 뒤에서 들려온 목소리가 순식간에 그 상황을 깨뜨렸다. 다시 움직일 수 있게 된 ',
      you.get_colored_name(),
      '은(는) 허겁지겁 신선한 공기를 깊이 들이마셨다. 당장 달아나고 싶은 공포를 억누르고 돌아보니, 방금 달리기를 마친 듯 숨을 헐떡이는 ',
      coffee.uma_sex_title,
      '가 뒤에서 ',
      you.get_colored_name(),
      '을(를) 바라보고 있었다.',
    ]);
    await coffee.say_as_unknown_and_wait(
      '계속 거기 서 계셔서…… 무슨 일이 생긴 건가 해서요……',
    );
    await era.printAndWait([
      '계속 서 있었다고? ',
      you.get_colored_name(),
      '은(는) 달빛에 손목시계를 비춰 보았다. 분침이 시계판의 사분의 일 이상을 돌아 있었다. 벌써 이십 분 가까이 지났단 말인가.',
    ]);
    await coffee.say_and_wait([
      '먼저 발견한 건…… 친구예요. 친구와 함께 달리고 있었는데, ',
      coffee.sex,
      '가 갑자기 방향을 바꾸고 나서야…… 당신이 보였어요……',
    ]);
    await era.printAndWait([
      '어쨌든 상대방과 ',
      coffee.sex,
      '의 친구가 ',
      you.get_colored_name(),
      '을(를) 구해 준 셈이었다. 감사를 전하고 자신의 신분과 찾아온 이유를 밝힌 뒤, 친구에게도 인사하려고 어디 있는지 물었다.',
    ]);
    await coffee.say_as_unknown_and_wait('친구라면…… 당신 곁에 있는데요……?');
    await era.printAndWait([
      '허리까지 내려오는 검은 머리의 가느다란 ',
      coffee.uma_sex_title,
      '는 ',
      you.get_colored_name(),
      '의 옆 빈자리를 힐끗 보더니 고개를 갸웃했다. 그때 ',
      you.get_colored_name(),
      '은(는) 깨달았다. 처음부터 ',
      coffee.sex,
      '의 시선은 자신에게 고정되어 있었다. 무언가를 가늠하는 듯한 그 태도가 조금 기묘하게 느껴졌다.',
    ]);
    await era.printAndWait([
      '검은 머리의 ',
      coffee.uma_sex_title,
      '의 머리 위로 삐죽 솟은 흰 머리카락이 ',
      coffee.sex,
      '의 호흡을 따라 희미하게 흔들렸다. ',
      you.get_colored_name(),
      '의 마음도 덩달아 오르내렸다.',
    ]);
    await era.printAndWait([
      '이런 곳에서 농담할 여유가 있다니, 참 별난 ',
      coffee.uma_sex_title,
      '다.',
    ]);
    await era.printAndWait([
      '……정말 농담일까? 괴이한 일을 몸소 겪은 ',
      you.get_colored_name(),
      '은(는) 그 빈자리에서 몇 걸음 물러섰다.',
    ]);
    era.printButton('「……농담하시는 거죠?」', 1);
    await era.input();
    await coffee.say_as_unknown_and_wait([
      '……농담이 아니에요…… 그리고 트레이너',
      you.adult_sex_title,
      '……',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      '는 천천히 ',
      you.get_colored_name(),
      '에게 다가왔다. 그제야 ',
      coffee.sex,
      '의 얼굴이 뚜렷하게 보였다. ',
      coffee.uma_sex_title,
      ' 중에서도 미인이라 할 만한 단정한 이목구비. 핏기 없는 하얀 피부. 이마에서 흘러내려 얼굴을 가르는 검은 머리카락. 그리고 무엇보다 인상적인 것은 ',
      coffee.sex,
      '의 짙은 황금빛 두 눈이었다.',
    ]);
    await coffee.say_as_unknown_and_wait(
      '지금 바로…… 저와 함께 여기서 나가 주세요. 방금, 무언가가 당신을 노렸어요……',
    );
    await era.printAndWait([
      coffee.teen_sex_title,
      '의 낮은 목소리가 갑자기 불어온 밤바람과 함께 ',
      you.get_colored_name(),
      '의 귀에 닿았다. 곁의 어둠 속에서 희미한 웃음소리가 들려왔다. 그 뒤 ',
      you.get_colored_name(),
      '은(는) 이 ',
      coffee.uma_sex_title,
      '와 무사히 트레이닝장을 빠져나왔지만, 그날 밤의 일은 ',
      you.get_colored_name(),
      '의 기억에 깊이 새겨졌다.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_again(coffee, you) {
    await era.printAndWait([
      '그날 밤 이후 며칠이 지나도 트레이닝장에서 만난 검은 머리의 ',
      coffee.uma_sex_title,
      '의 모습과 말이 ',
      you.get_colored_name(),
      '의 머릿속을 떠나지 않았다. 선발 레이스가 시작되고 나서야 명단에서 처음으로 ',
      coffee.sex,
      '의 이름을 보았다——',
      coffee.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '서둘러 도착했을 때는 ',
      coffee.get_colored_name(),
      '의 선발 레이스가 이미 끝나 있었다. 직접 보지는 못했지만, 게시판 상위에 올라 있는 이름만으로도 ',
      coffee.sex,
      '의 실력은 충분히 알 수 있었다.',
    ]);
    await era.printAndWait([
      '북적이는 인파를 헤치고 레이스 후 휴게 구역으로 가자, ',
      you.get_colored_name(),
      '은(는) ',
      coffee.sex,
      '의 모습을 발견했다.',
    ]);
    era.print([you.get_colored_name(), '은(는) 어떻게 할까?']);
    era.printButton('다가간다(스카우트를 시도한다)', 1);
    era.printButton('그만둔다(스카우트를 포기한다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '그날 밤의 경험은 무서웠다. 하지만 호기심이 더 컸기에 ',
        you.get_colored_name(),
        '은(는) 앞으로 나섰다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 모습은 동기인 ',
        coffee.uma_sex_title,
        '들과 스카우트를 하러 온 트레이너들 사이에 가려져 있었다. 선발 레이스에서는 상위권이었는데도 아무도 ',
        coffee.sex,
        '를 스카우트하러 오지 않은 듯했다.',
      ]);
      era.printButton(
        `「안녕하세요, ${coffee.name} 씨. 선발 레이스에서 좋은 성적을 거뒀네요. 축하해요.」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait([
        '……감사합니다. 그날 밤의…… 트레이너',
        you.adult_sex_title,
        '……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '도 ',
        you.get_colored_name(),
        '을(를) 알아보고 있었다. 말을 걸어온 것이 조금 의외였는지 멍하니 고개를 끄덕였다.',
      ]);
      era.printButton(
        '「괜한 참견일지도 모르지만, 아무도 스카우트하러 오지 않은 거야?」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('……아직은…… 없어요.');
      await era.printAndWait('두 사람 사이에 침묵이 흘렀다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 조금 전 찾아본 ',
        coffee.get_colored_name(),
        '의 자료를 떠올렸다.',
      ]);
      await era.printAndWait([
        '다른 ',
        coffee.uma_sex_title,
        '들이나 예전에 ',
        coffee.sex,
        '에게 관심을 보였던 트레이너들의 말에 따르면, ',
        coffee.get_colored_name(),
        '는 늘 기묘한 말을 한다고 했다. 아무도 모르는 사람이나 사건에 관한 이야기가 많고, 무언가의 뒤를 쫓는 모습도 자주 목격된다고 한다. 경험 많은 트레이너가 접촉을 시도한 적도 있었지만, 떠날 때 잔뜩 찌푸린 미간만 봐도 잘되지 않았다는 건 분명했다. 그렇게 ',
        coffee.get_colored_name(),
        '는 문제아라는 낙인이 찍혀 트레이너들이 선뜻 손대려 하지 않는 존재가 되어 있었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 생각은 달랐다. 그날 밤의 경험과 ',
        coffee.sex,
        '가 말한 『친구』에는 분명 다른 사정이 있을 것이다.',
      ]);
      await era.printAndWait('우선 화제를 바꾸자.');
      era.printButton('「그날 밤에는 정말 고마웠어. 네가 없었다면 아마……」', 1);
      await era.input();
      await era.printAndWait([
        '그날 밤에는 어둠에 가려 몰랐지만, ',
        coffee.get_colored_name(),
        '는 남에게 감사 인사를 받는 데 익숙하지 않은 모양이다. ',
        you.get_colored_name(),
        '의 솔직한 감사에 ',
        coffee.get_colored_name(),
        '는 순간 굳었고, 뒤에서 좌우로 흔들리던 꼬리의 리듬도 흐트러졌다. 한참 뒤에야 ',
        you.get_colored_name(),
        '에게 대답했다.',
      ]);
      await coffee.say_and_wait(
        '지나가던 길에…… 도와드렸을 뿐이에요. 그것보다…… 저에게는 가까이 오지 않는 편이……',
      );
      await era.printAndWait([coffee.sex, '에게 가까이 오지 말라니, 왜?']);
      await era.printAndWait([
        '이번에는 ',
        you.get_colored_name(),
        '이(가) 굳어 버렸다. 대화를 이어 가려고 준비했던 말이 거절처럼 들리는 그 대답에 목구멍에서 막혔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 의문을 입에 담기도 전에 ',
        coffee.get_colored_name(),
        '는 「죄송해요」라는 말을 남기고 인파에서 빠져나갔다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '가 홀로 떠나가는 뒷모습을 보며 ',
        you.get_colored_name(),
        '의 의문은 한숨으로 바뀌었다.',
      ]);
      era.printButton(`(뭐지, 이 ${coffee.uma_sex_title}는……)`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 트레센에서 말하는 ‘문제아’라는 말의 무게를 조금 이해할 수 있었다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 떠난 뒤, ',
        you.get_colored_name(),
        '은(는) 선발 레이스에 집중할 수 없었다. 가능성 있어 보이는 ',
        coffee.uma_sex_title,
        ' 몇 명과 대화해 봐도 성과가 없어 먼저 트레센을 나왔다.',
      ]);
    } else {
      await era.printAndWait([
        '그날 밤의 경험은 ',
        you.get_colored_name(),
        '에게 평생의 악몽이었다. 두려움에 발걸음이 멎은 ',
        you.get_colored_name(),
        '은(는) 몸을 돌려 떠났다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_final(coffee, you, callname) {
    await era.printAndWait([
      '석양 아래, ',
      you.get_colored_name(),
      '은(는) 홀로 우울한 귀갓길을 걷고 있었다. 머릿속이 오늘의 답답한 일로 가득 차 있었기에, 어느 모퉁이를 돈 뒤 주변 세상이 달라졌다는 사실을 뒤늦게 알아차렸다.',
    ]);
    era.printButton('「이상한데……」', 1);
    await era.input();
    await era.printAndWait(
      '평소의 석양보다 어두운 빛이 등 뒤에서 대지를 비췄다. 익숙한 풍경이 이 황혼 속에서는 오래된 영화처럼 일그러져 보였다. 발밑의 그림자는——',
    );
    await era.printAndWait('아니, 그림자가 없다!');
    await era.printAndWait([
      '이마에 식은땀이 맺혔다. ',
      you.get_colored_name(),
      '은(는) 비틀거리며 길가의 담장으로 가 등을 기대고, 풀릴 듯한 다리를 지탱했다.',
    ]);
    await era.printAndWait(
      '길 양옆을 봐도 크게 달라진 것은 없었다. 멀리 사람의 모습과 트레센도 보였다. 전력을 다해 트레센까지 달리면——',
    );
    await era.printAndWait([
      '생각하자마자 ',
      you.get_colored_name(),
      '은(는) 트레센을 향해 달려 나갔다.',
    ]);
    await era.printAndWait([
      '하지만 결과는 ',
      you.get_colored_name(),
      '의 예상과 달랐다. 괴담 지식에 감사해야 할까. 같은 간판을 세 번째 보았을 때 ',
      you.get_colored_name(),
      '은(는) 귀신에게 홀려 같은 곳을 맴돌고 있다는 현실을 받아들이고, 아까 있던 담장 옆으로 돌아왔다.',
    ]);
    await era.printAndWait(
      '석양은 계속 기울었고 주위는 점점 더 기이해졌다. 오래전에 문을 닫은 가게 안에서 가느다란 속삭임이 새어 나왔고, 길가의 쓰레기통에서는 검은 머리카락이 넘쳐흘렀다. 멀리 보이는 트레센마저 짙어지는 황혼 속에서 일그러져 보였다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 이미 한계에 가까웠다.',
    ]);
    await coffee.say_and_wait('트레이…… 들리…… 세요?');
    await era.printAndWait([coffee.get_colored_name(), '의 목소리였다.']);
    await era.printAndWait([
      coffee.sex,
      '와는 두 번밖에 만나지 않았다. 하지만 뚝뚝 끊겨 들리는데도 ',
      you.get_colored_name(),
      '은(는) ',
      coffee.sex,
      ' 특유의 낮고 조금 쉰 목소리를 똑똑히 기억하고 있었다. ',
      coffee.sex,
      '는 어디에 있는 거지.',
    ]);
    await era.printAndWait([
      '지푸라기라도 잡는 심정으로 ',
      you.get_colored_name(),
      '은(는) 고개를 들고 주위를 둘러보았다.',
    ]);
    await coffee.say_and_wait([
      '트레이너',
      you.adult_sex_title,
      ', 당신은 이미…… 다른 세계에…… 저는 친구를 통해…… 이야기하고……',
    ]);
    era.printButton('「다른 세계…… 죽었다는 건가?」', 1);
    await era.input();
    await coffee.say_and_wait([
      '아니에요…… 해가 지기 전이라면…… 아직…… 트레이너',
      you.adult_sex_title,
      ', 저는 직접 도와드릴 수 없어요…… 침착하게…… 환각에 현혹되지 마세요. 그들도 직접은…… 방법을 찾으면, 분명……',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 목소리는 점차 사라졌다. 하지만 ',
      you.get_colored_name(),
      '은(는) 다시 한번 마음을 다잡았다.',
    ]);
    await era.printAndWait([
      '기운을 쥐어짜 내어 주위의 괴이한 현상을 최대한 무시하고, ',
      you.get_colored_name(),
      '은(는) 모든 일의 시작——그림자에 대해 생각했다.',
    ]);
    await era.printAndWait([
      '그래, 그림자. 지금 ',
      you.get_colored_name(),
      '에게 일어난 유일한 이상 현상이다. 손을 들어 살펴보니 손가락 사이의 그늘은 남아 있다. 옷 주름도 빛과 대비되어 선명히 보인다. 사라진 건 발밑으로 길게 드리워지는 온몸의 그림자뿐이다.',
    ]);
    await era.printAndWait('아니면 정신이나 영혼이라는 의미의 ‘그림자’일까?');
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 말한 ‘다른 세계’와 연결해 보면, 지금 있는 곳은 괴이가 만들어 낸 격리된 세계이며 그림자가 사라진 것은 그 속박의 징표일지도 모른다.',
    ]);
    await era.printAndWait(
      '앞뒤는 맞는다. 다음은 빠져나갈 방법이다. 남은 시간은……',
    );
    await era.printAndWait(
      '멀리서 석양이 지평선에 닿으려 하고 있었다. 몇 분밖에 남지 않았다.',
    );
    await era.printAndWait([
      '온몸으로 심장이 거세게 뛰는 것이 느껴지고, 아드레날린이 피와 함께 돌았다. ',
      you.get_colored_name(),
      '은(는) 깊이 숨을 들이마시고 눈을 감았다.',
    ]);
    await era.printAndWait(
      '빛이 있어야 그림자가 생긴다면, 정신의 그림자가 사라진 지금은 마음의 창을 닫아야 하지 않을까.',
    );
    await era.printAndWait([
      '기억 속의 길을 더듬어 ',
      you.get_colored_name(),
      '은(는) 눈을 감은 채 트레센을 향해 서둘렀다.',
    ]);
    await era.printAndWait([
      '남자의 고함, 여자의 비명, 아이의 울음, 노인의 한숨. 온갖 소리가 삼노끈처럼 얽혀 ',
      you.get_colored_name(),
      '의 귀로 파고들며 이 공간의 악의를 전해 왔다.',
    ]);
    await era.printAndWait([
      '눈을 떠서 안심하고 싶은 충동을 억누른 채 ',
      you.get_colored_name(),
      '은(는) 속도를 높였다.',
    ]);
    await era.printAndWait([
      '결과는 뜻밖에도 순조로웠다. 이 괴이는 ',
      you.get_colored_name(),
      '에게 직접 손을 댈 수 없는 모양이다.',
    ]);
    await era.printAndWait([
      '귓가에서 무언가 깨지는 소리가 난 뒤, 모든 것이 고요해졌다. ',
      you.get_colored_name(),
      '은(는) 눈을 떴다. 하늘은 이미 어두웠고, 지나가던 사람들이 길가에 줄곧 멍하니 서 있던 괴짜를 이상하다는 듯 바라보고 있었다.',
    ]);
    await era.printAndWait('발밑을 보니 그림자가 제대로 있었다.');
    await era.printAndWait('끝난 모양이다.');
    await coffee.say_and_wait([
      '돌아오셨군요, 트레이너',
      you.adult_sex_title,
      '……',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 목소리가 등 뒤에서 들려왔다.',
    ]);
    await era.printAndWait([
      '돌아보니 ',
      coffee.sex,
      '는 깨진 부적을 손에 든 채 ',
      you.get_colored_name(),
      '에게서 이 미터도 떨어지지 않은 곳에서 상태를 살피고 있었다.',
    ]);
    era.printButton('「또 신세를 졌네……」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), '는 고개를 저었다.']);
    await coffee.say_and_wait([
      '그렇게 말씀하지 마세요. 돌아올 방법을 찾은 건…… 트레이너님의 의지예요. 오히려 이번에 위험에 처하신 건, 저에게도 책임이……',
    ]);
    await coffee.say_and_wait([
      '트레이너',
      you.adult_sex_title,
      '은 그들에게…… 제가 생각했던 것보다 훨씬 매력적인 존재였어요. 그날 밤에는 제가 불러들인 줄 알았는데…… 더 일찍 깨달았다면, 오늘 일은 일어나지 않았을지도……',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '가 전에 하려던 말을 이해했다. 문제가 자신에게 있다고 생각해 다른 사람을 끌어들이고 싶지 않아서, 가까이 오지 말라고 했던 거구나. 착한 사람이네……',
    ]);
    era.printButton(
      '「그럼 앞으로도 비슷한 일이 일어날…… 수 있다는 거지?」',
      1,
    );
    await era.input();
    await coffee.say_and_wait('그럴지도 몰라요……');
    await coffee.say_and_wait(
      '하, 하지만……! 앞으로도 제가 도와드릴게요. 그러니 부디……',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 당황할까 걱정했는지 ',
      coffee.get_colored_name(),
      '는 서둘러 말을 덧붙였다.',
    ]);
    await era.printAndWait([
      '갑자기 다급해진 ',
      coffee.uma_sex_title,
      '를 보며 ',
      you.get_colored_name(),
      '은(는) 이상하게도 앞날이 두렵지 않았다. 이번에 무사히 빠져나온 덕분에 배짱이 생긴 걸까. 아니면 ',
      coffee.get_colored_name(),
      '와 ',
      coffee.sex,
      '가 말하는 ‘친구’에 대한, 영문 모를 믿음 때문일까.',
    ]);
    await era.printAndWait([
      '어쨌든 ',
      you.get_colored_name(),
      '은(는) 한 가지 가능성을 떠올리고, 눈앞의 ',
      coffee.teen_sex_title,
      '에게 이야기했다.',
    ]);
    era.printButton('「도움을 받았으니 나도 그에 걸맞게 보답해야겠지……」', 1);
    era.printButton(
      '「내가 네 트레이너가 되는 건 어때? 이래 봬도 트레이닝에 대해서는 꽤 자신이 있거든.」',
      2,
    );
    await era.input();
    await era.printAndWait([
      '뜻밖의 스카우트 제안에 ',
      coffee.get_colored_name(),
      '는 놀라 눈을 크게 떴다. 그러다 무언가 알아차린 듯 아무도 없는 구석을 바라보았다. 잠깐의 침묵 끝에 ',
      coffee.teen_sex_title,
      '은(는) 대답했다.',
    ]);
    await coffee.say_and_wait([
      '그렇다면, 트레이너',
      you.adult_sex_title,
      '……그 아이를 따라잡을 수 있게…… 도와주시겠어요? 제…… 친구를요.',
    ]);
    await era.printAndWait([
      '친구. ',
      you.get_colored_name(),
      '은(는) 다시 ',
      coffee.get_colored_name(),
      '의 입에서 그 말을 들었다.',
    ]);
    await era.printAndWait([
      '괴이를 몸소 겪은 ',
      you.get_colored_name(),
      '이(가) 그것을 ',
      coffee.sex,
      '의 공상이라 여길 리는 없었다. 게다가 ',
      coffee.sex,
      '의 말에 따르면 그 친구는 위험에 처한 ',
      you.get_colored_name(),
      '을(를) 두 번이나 구해 준 존재였다.',
    ]);
    await era.printAndWait('그렇다면 대답은 분명하다.');
    era.printButton(
      `「해 보자……! 친구든, 다른 강한 ${coffee.uma_sex_title}든, 뛰어넘을 수 있도록 이끌어 줄게!」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait(['……네! 그럼…… 잘 부탁드려요, ', callname, '！']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '에게 손을 내밀었다. ',
      coffee.sex,
      '가 ',
      you.get_colored_name(),
      '의 앞에서 처음으로 웃었다. 짙은 황금빛 눈동자에도 빛이 깃들었다.',
    ]);
    await era.printAndWait('툭——');
    await era.printAndWait([
      you.get_colored_name(),
      '도 손을 내밀어 ',
      coffee.get_colored_name(),
      '와 악수하는 순간, 무언가가 어깨를 가볍게 두드렸다. ',
      you.get_colored_name(),
      '은(는) 저도 모르게 휘청였다.',
    ]);
    await era.printAndWait('——잘 부탁해.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 아무런 목소리도 듣지 못했다. 하지만 그런 마음만큼은 전해졌다.',
    ]);
    await era.printAndWait([
      '이게 친구인가. ',
      you.get_colored_name(),
      '은(는) 주위를 둘러보았지만 상대의 모습은 보이지 않았다.',
    ]);
    await era.printAndWait([
      '앞으로 ',
      coffee.sex,
      '와 기묘한 시간을 보내게 될 모양이다.',
    ]);
  },
};
