/**
 * @file トウカイテイオー - 募集
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {string} title
   */
  async rec(teio, you, title) {
    const ret = [];
    await era.printAndWait(
      '새파란 하늘은 마치 부드러운 비단 띠 같고, 그 사이사이에 곱슬거리는 구름 문양이 수놓아져 있다. 오렌지빛 태양은 그 한가운데서 빛나며 온 세상에 따스함과 광명을 뿌려준다.',
    );
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 햇살을 받으며 잔디 사이를 걷다가 맑은 공기를 깊이 들이마셨다. 후우——상쾌하다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '의 기분도 오늘 하늘만큼이나 화창했다.',
    ]);
    era.println();
    await era.printAndWait([
      title,
      ' 트레이너인 ',
      you.get_colored_name(),
      '은(는) 오늘도 트레센 학원으로 향하며 ',
      teio.uma_sex_title,
      '의 꿈을 돕는 길을 걷고 있었다.',
    ]);
    await era.printAndWait([
      '일이 편하다고는 도저히 말할 수 없다. 그래도 숙식 제공에 특별 화폐인 【우마코인】으로 지급되는 넉넉한 보수, 그리고 ',
      teio.uma_sex_title,
      '들의 성장을 지켜보고 ',
      teio.couple_title,
      '이 꿈을 이루었을 때 짓는 진심 어린 미소를 보는 마음의 풍요로움은 부정적인 감정을 충분히 상쇄해 주었다.',
    ]);
    await you.say_and_wait(
      '오늘 오후에도 데뷔전이 하나 있었지. 음, 가서 살펴보고 담당할 인재를 한번 물색해 볼까……',
      true,
    );
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 생각에 잠겨 있던 그때, 갑자기 온 세상이 정적에 휩싸인 듯 고요해졌다.',
    ]);
    await era.printAndWait([
      '나뭇잎은 부드럽고 느릿하게 흔들리고, 주변 공기는 끈적하게 응고된 듯한 기묘한 감각. 무슨 일이 일어난 걸까? ',
      you.get_colored_name(),
      '이(가) 의아한 표정으로 앞에 있던 한 행인을 바라보자, ',
      teio.sex,
      '의 입이 서서히 벌어지고 있었다……',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait('이얏!');
    era.println();
    await era.printAndWait([
      '그 목소리와 함께 거센 바람이 ',
      you.get_colored_name(),
      '의 등 뒤로 몰아쳤다.',
    ]);
    await era.printAndWait([
      '하지만 트레이너의 육감일까. 의식이 따라잡기도 전에 몸이 먼저 움직였다. 허리를 낮추고 무릎을 굽혀 무게중심을 내렸다. 그런데 예상했던 위험은 닥쳐오지 않았다. 아래에서 올려다보던 ',
      you.get_colored_name(),
      '의 눈에 작고 흐릿한 그림자가 아까까지 자신의 머리가 있던 자리를 가볍게 뛰어넘어 위쪽 나뭇가지 사이로 날아드는 모습이 들어왔다.',
    ]);
    era.println();
    await era.printAndWait([
      '뒤이어 나뭇잎이 바스락거리는 소리와 함께 푸른 잎 사이로 하얗고 가느다란 작은 손이 나타났다. 손에는 알록달록한 풍선이 들려 있었다. ',
      you.get_colored_name(),
      '이(가) 일어서자 종종거리는 발소리가 가까워졌고, 어린 여자아이가 나무 아래로 다가왔다.',
    ]);
    await era.printAndWait([
      '여자아이「우와, 고마워, ',
      teio.elder_sibling_sex_title,
      '! 방금 점프 정말 멋졌어!」',
    ]);
    await teio.say_as_unknown_and_wait(
      '흐흥, 난 【무적의 테이오 님】이라고! 자, 네 거야. 꼭 잡고 다시는 놓치지 마!',
    );
    await era.printAndWait([
      '기운찬 ',
      teio.teen_sex_title,
      '의 목소리가 위에서 들려왔다. ',
      you.get_colored_name(),
      '이(가) 고개를 들자 자그마하고 귀여운 ',
      teio.uma_sex_title,
      '가 제법 굵은 가지 위에 앉아 아래로 풍선을 내밀고 있었다. 하지만 ',
      teio.sex,
      '와 여자아이의 손은 아직 조금 떨어져 있어 닿지 않았다……',
    ]);
    era.printButton('도와준다', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 미처 생각할 새도 없이 손을 뻗어 ',
      teio.uma_sex_title,
      '의 손에서 풍선을 받아 옆의 여자아이에게 건넸다. 여자아이는 고맙다고 말했다.',
    ]);
    await era.printAndWait(
      '소녀 「테이오 님! 한 번만 더 뛰어주시면 안 돼요?」',
    );
    await era.printAndWait([
      '누가 봐도 저 ',
      teio.uma_sex_title,
      '가 나무에서 훌쩍 뛰어내리는 모습을 보고 싶은 것이다. ',
      you.get_colored_name(),
      '은(는) 웃으며 자리를 비켜 주려 했다. 오늘은 「히어로 착지」를 볼 수 있을지도 모른다.',
    ]);
    await era.printAndWait([
      '그런데 이상하게도 나무 위의 ',
      teio.uma_sex_title,
      '는 어린 팬의 바람에 응하지 않았다.',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      '으음, 그게, 테이오 댄스는 준비가 필요하니까 잠깐…… 아, 엄마가 부르시네. 가 봐. 걱정 끼치면 안 되지!',
    );
    era.println();
    await era.printAndWait([
      '여자아이가 조금 어리둥절한 표정을 지었다. 그때 ',
      you.get_colored_name(),
      '은(는) 겹겹의 나뭇잎 사이로 살짝 드러난 피부를 보고 사정을 알아차렸다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 몸을 조금 뒤로 옮겼다.',
    ]);
    era.println();
    era.printButton(
      `「얘야, ${teio.elder_sibling_sex_title} 말 듣자. 엄마랑 떨어져 있으면 걱정하시잖니. 저기 봐, 손을 흔들고 계시네」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '여자아이는 조금 망설이면서도 엄마 쪽으로 걸어갔다. 순식간에 이곳에는 ',
      you.get_colored_name(),
      '과(와) 나무 위의 ',
      teio.teen_sex_title,
      '만 남았다.',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      `저기…… 트레센의 트레이너${you.adult_sex_title} 맞죠? 부탁인데, 좀 도와주실래요?`,
    );
    await era.printAndWait(['가슴의 배지를 ', teio.sex, '가 알아본 모양이다.']);
    era.println();
    era.printButton('「물론이지」', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 대답하며 고개를 끄덕였다. ',
      teio.sex,
      '는 기쁘게 웃으며 가슴을 폈다……',
    ]);
    era.println();
    era.printButton(
      '곧장 나무 아래로 달려가 두 팔을 뻗어 받아 준다(애정도+1)',
      1,
    );
    era.printButton(
      `아까 몸 안쪽으로 숨겨 두었던, ${teio.uma_sex_title}가 벗어 떨어뜨린 샌들을 집어 나무 아래에 놓는다(호감도+5)`,
      2,
    );
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 재빨리 ',
        teio.sex,
        '의 발아래로 달려가 두 팔을 내밀었다. ',
        teio.sex,
        '는 놀란 듯 얼굴을 붉히면서도 미끄러져 내려와 양손으로 ',
        you.get_colored_name(),
        '의 어깨를 짚고 작은 두 발을 정확히 손바닥 위에 올려놓았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손바닥으로 ',
        teio.uma_sex_title,
        ' ',
        teio.teen_sex_title,
        '의 탄력 있고 매끄러운 발바닥을 느꼈다. 이것이 ',
        teio.uma_sex_title,
        '의 타고난 재능인가. 혹독한 훈련과 운동으로 발은 튼튼해졌는데도 피부는 여전히 부드러웠다. 피부가 살짝 움츠러들자, ',
        you.get_colored_name(),
        '은(는) 발바닥의 오목한 부분이 조금 들리고 살색 발가락이 가만있지 못하고 꼼지락거리는 것을 느꼈다. 정신을 차리고 귀여운 두 발에서 시선을 뗀 뒤, 천천히 안정적으로 몸을 돌려 ',
        teio.sex,
        '를 옆 벤치에 내려놓았다. 그러고는 등을 돌려, ',
        teio.teen_sex_title,
        '가 조금 부끄러운 듯 신발을 신는 모습을 못 본 척했다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 여자아이가 눈치채지 못하도록 몸 안쪽에 숨겨 두었던 샌들을 들어 나무 옆에 놓았다. 눈으로 ',
        teio.uma_sex_title,
        '의 착지를 지켜보며 언제든 두 팔을 뻗을 준비를 했지만, ',
        teio.sex,
        '는 그럴 틈을 주지 않았다.',
      ]);
      await era.printAndWait([
        teio.uma_sex_title,
        ' ',
        teio.teen_sex_title,
        '는 가볍게 뛰어내려 신발 위에 올라섰다. 동작은 안정적이고 정확했다. ',
        teio.sex,
        '는 고개를 들어 ',
        you.get_colored_name(),
        '에게 미소 지었다. 태양보다 눈부신 얼굴이었다.',
      ]);
      await era.printAndWait(['어린아이 같은 사복 차림과 묘하게 잘 어울렸다.']);
    }
    await era.printAndWait([
      '신발을 다 신자 ',
      teio.sex,
      '의 목소리가 다시 들려왔다.',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      '고마워! 번거롭게 해서 미안해! 편하게 뛰려고 신발부터 벗었더니 이렇게 됐네…… 무적의 테이오 님도 가끔은 실수하는 법이지!',
    );
    era.println();
    era.printButton('「테이오……?」', 1);
    await era.input();

    await teio.say_as_unknown_and_wait([
      '맞아! 내 이름은 토카이 테이오! 앞으로 전설이 될 ',
      teio.uma_sex_title,
      '야! 마침 오늘 오후에 레이스가 있으니까, 트레이너 씨도 시간 있으면 꼭 보러 와! 난 아직 바쁘니까 먼저 갈게. 오후에 학원에서 보자!',
    ]);
    era.println();
    await era.printAndWait([
      '말을 마치자마자 ',
      teio.sex,
      '는 가벼운 발걸음으로 달려 나갔다. ',
      you.get_colored_name(),
      '은(는) 멀어지는 ',
      teio.sex,
      '의 뒷모습을 바라보며 웃는 얼굴로 손을 흔들어 주었다.',
    ]);
    era.drawLine({
      content: '오후, 트레센 학원 선발 레이스 2000미터',
      position: 'left',
    });
    await era.printAndWait([
      '학원 운동장에는 이미 많은 사람이 모여 있었다. 이번에는 예상을 뛰어넘는 인파인걸. ',
      you.get_colored_name(),
      '은(는) 상대적으로 한적한 곳에 앉아 생각했다. 저들은 몇몇 유망한 신인을 가로채기 위해 모인 걸까?',
    ]);
    era.println();
    await era.printAndWait([
      '머릿속에 ',
      teio.get_colored_name(),
      '라는 이름의 ',
      teio.uma_sex_title,
      ' ',
      teio.teen_sex_title,
      '의 모습이 떠올랐다. 가벼운 걸음 안에 강한 폭발력이 숨어 있었고, 팽팽한 다리 근육이 수축과 이완을 반복했다. 독특한 다리 움직임이 힘을 두 발바닥으로 전하고, 땅을 디뎌 튀어 오르는 기세로 앞으로 날아가 누구도 따라잡을 수 없는 속도를 만들어 낸다……',
    ]);
    era.println();
    await era.printAndWait([
      '머릿속의 환상과 눈앞의 현실이 겹쳤다. ',
      you.get_colored_name(),
      '은(는) 파란색과 흰색의 빛줄기가 경기장을 뛰어다니며 마음껏 자신의 빛깔을 뽐내고, 다른 상대들을 뒤로 떨구는 모습을 보았다. 승리는 ',
      teio.sex,
      '의 손안에 있었다——이 광경을 본 사람이라면 누구나 그렇게 확신할 것이다.',
    ]);
    era.println();
    await era.printAndWait([
      teio.sex,
      '는 당연하다는 듯 자신의 존재를 선언하며 승리를 거머쥐었다. ',
      you.get_colored_name(),
      '은(는) 화면에 크게 표시된 「1착」을 보고 절로 미소 지으며 자리에서 일어나 아래로 향했다.',
    ]);
    era.println();
    await teio.say_and_wait('음……');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 인파를 헤치며 앞으로 나아갔다. 천재 ',
      teio.uma_sex_title,
      ' ',
      teio.teen_sex_title,
      '의 첫 레이스는 누구나 가슴을 뜨겁게 만들었다. 이런 상황은 예상한 바였다. 파트너를 구하는 트레이너들이 이쪽을 둘러싸고 있었다. 푸른 하늘과 흰 구름 빛깔을 두른 테이오는 오히려 작은 태양 같아서, 목을 길게 빼고 기다리는 수많은 해바라기를 끌어모으고 있었다. 꼬리를 살랑거리는 ',
      teio.sex,
      '는 신이 난 것 같았지만, ',
      you.get_colored_name(),
      '은(는) ',
      teio.sex,
      '의 눈 깊은 곳에 깃든 약간의 당혹감도 알아차렸다. 그러자 호응하듯——',
      teio.sex,
      '는 이쪽으로 고개를 돌려 ',
      you.get_colored_name(),
      '의 시선을 붙잡았다.',
    ]);
    era.println();
    await era.printAndWait('어떻게 할까?');
    era.println();
    era.printButton(
      '테이오의 이름을 크게 부르며, 담당 트레이너가 되겠다고 선언한다',
      1,
    );
    era.printButton('역시 그만두자……', 2);
    ret.push(await era.input());
    if (ret[1] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자신이 ',
        teio.get_colored_name(),
        '의 이름을 외치는 소리를 들었다. ',
        teio.sex,
        '의 눈빛이 반짝이더니 반갑고 놀란 기색으로 ',
        you.get_colored_name(),
        '에게 응했다. 사람들의 벽이 눈치껏 갈라졌다. 망설임 없이 ',
        you.get_colored_name(),
        '은(는) 주로 쓰는 손을 내밀어 계약의 증표를 꺼냈다. 다른 손은 무의식중에 바람과 땀으로 구겨진 ',
        teio.teen_sex_title,
        '의 어깨 옷감을 매만지고 있었다. 운동 뒤의 홍조가 아직 뺨에 남아 있었다. ',
        teio.sex,
        '는 기쁘게 웃으며 자신의 이름을 적고, ',
        you.get_colored_name(),
        '을(를) ',
        teio.sex,
        '의 트레이너로 인정했다.',
      ]);
      era.println();
      await era.printAndWait('두 사람의 이야기는 여기서 시작되었다.');
    } else {
      await era.printAndWait(
        '이 아이는…… 나와 맞지 않을지도 모른다. 감당하기에는 너무 큰 도전일지도 모른다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 작지만 분명하게 고개를 저으며 조용히 인파에서 빠져나왔다.',
      ]);
    }
    return ret;
  },
};
