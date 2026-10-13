/**
 * @file トレヴ - 募集
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} taste 秋川やよい／北方の味
   * @param {CharaTalk} may サタケメイ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
   */
  async rec(treve, taste, may, you, callname) {
    const ret = [];
    await era.printAndWait(
      `어느 휴일, ${you.name}은(는) ${taste.name}와 파리 트레센 학원의 공식 연락 메일을 동시에 받았다.`,
    );
    await era.printAndWait('내용은 서로 달랐지만, 전하려는 말은 하나였다.');
    if (era.get('flag:当前声望') >= 1000) {
      await era.printAndWait(
        `짧은 기간에 국제 G1에서 연이어 우승한 ${you.name}은(는) 이미 각국 레이스계에서 무시할 수 없는 존재가 되어 있었다.`,
      );
    }
    await era.printAndWait([
      '얼마 전, 파리 트레센 학원의 학원장이 ',
      taste.get_colored_name(),
      '와 회담을 가졌다. 그 결과——',
    ]);
    await era.printAndWait(
      `곧 프랑스의 뛰어난 신예가 중앙에 교류하러 온다. ${you.name}은(는) 책임자로서 양측의 연락 창구를 맡게 되었다.`,
    );
    await era.printAndWait([
      '이사장의 소꿉친구인——',
      may.get_colored_name(),
      '가 처음부터 끝까지 ',
      you.get_colored_name(),
      '을(를) 보좌한다.',
    ]);

    await era.printAndWait('파리로 향할까?');
    era.printButton('예', 1);
    era.printButton('아니요', 2);
    ret.push((ret['foreign'] = await era.input()));
    if (ret['foreign'] === 1) {
      await era.printAndWait(
        `${you.name}은(는) 여행 가방을 끌고 배낭을 멘 채 열차에서 내려, 붐비는 인파를 따라 역을 나섰다.`,
      );
      await era.printAndWait(
        '주위를 둘러보았다. 마중 나온 사람도 차도 많았지만, 파리 트레센 직원은 어디에 있는지 알 수 없었다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 조금 후회했다. ${may.name}가 데려다주겠다고 했을 때 ${you.name}은(는) 단호하게 거절했던 것이다.`,
      );
      await era.printAndWait(
        '이 나이가 되도록 먼 길을 나서 본 적도 있으니, 이 정도는 혼자 해낼 수 있다고 생각했다.',
      );
      await era.printAndWait(
        '그런데 열차를 타기 전에 버스도 한 번 타야 했고, 점심도 거른 채 물만 마셨다.',
      );
      await era.printAndWait('지금은 배가 고프지는 않았지만 몹시 지쳐 있었다.');
      await era.printAndWait(
        `${you.name}은(는) 햇볕 아래로 나가 커다란 파라솔들을 하나씩 살폈다.`,
      );
      era.println();
      await era.printAndWait(
        `마침내 ${you.name}은(는) 파리 트레센 학원의 송영 차량 탑승 장소를 찾았다. 파라솔 몇 개가 나란히 서 있었다.`,
      );
      await era.printAndWait('약 두 시간 반 뒤, 차가 멈췄다.');
      await era.printAndWait('도착했다. 면담 장소는 학원장실이었다.');
      await era.printAndWait(
        `인수인계를 마친 ${you.name}은(는) 임시 거처로 향했다.`,
      );
      await era.printAndWait(
        '파리 트레센은 부지가 넓을 뿐 아니라, 몇 동 없어 보이는 기숙사도 실제로는 중앙 기숙사보다 훨씬 넓었다.',
      );
      await era.printAndWait('규모도 작지 않은데, 갖출 것은 모두 갖췄다.');
      await era.printAndWait(
        '침대는 더블 사이즈였고 옆에는 책상과 옷장, 발코니까지 있었다.',
      );
      await era.printAndWait(
        `${you.name}의 프랑스 트레센 생활이 본격적으로 시작되었다.`,
      );
      era.drawLine();
      if (era.get('flag:当前声望') >= 1000) {
        await era.printAndWait(
          `${you.name}의 트레이너 경력도 이제 짧다고는 할 수 없었다. 오랜 세월이 흐르고 나니, 그 보잘것없는 공적도 누구나 이룰 수 있었던 일이 아닐까 싶어졌다.`,
        );
      }
      await era.printAndWait(
        '몸을 떨며 의자에서 일어나 방구석에 걸어 둔 코트를 집었다. 창밖의 하늘은 흐렸고, 잿빛 빛이 쓸쓸한 트레이너실에 내려앉았다.',
      );
      await era.printAndWait(
        '가을이 가까웠다. 외투 없이는 떨리기 시작한 이 몸이 버티지 못할 것 같았다.',
      );
      await era.printAndWait(
        `옷걸이에 걸린 중절모를 쓰고 오른손에 봉투를 든 채 나섰다. 문을 닫는 순간, ${you.name}은(는) 조금 오래 방 안을 바라보았다. 그 어느 것도 대단한 의미는 없었다.`,
      );
      await era.printAndWait(
        '밖으로 나와 가까운 곳을 둘러보니 레이스장에서 함성이 들려왔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 무슨 일이 있나 생각했지만 도무지 짐작이 가지 않았다.`,
      );
      await era.printAndWait('하는 수 없이 기억을 조금 되짚었다.');
      era.printButton('「메이크 데뷔인가?」', 1);
      await era.input();
      await era.printAndWait(
        `수많은 ${treve.uma_sex_title}가 실전에 가까운 레이스로 실력을 보여 주고 스카우트 기회를 얻는 곳. 젊은 트레이너들이 모이는 바로 그 장소였다.`,
      );
      await era.printAndWait(
        '운동장과는 정반대 방향으로 걸으며, 스카우트에 열중하던 옛날을 떠올렸다.',
      );
      await era.printAndWait(
        '인정하기 싫어도 알 수 있었다. 자신은 이곳에 어울리지 않는다.',
      );
      await era.printAndWait(
        `돌길을 걸으며 체육복 차림의 ${treve.uma_sex_title}들과 스쳐 지나갔다.`,
      );
      await era.printAndWait(
        `그때 다시 무언가가 ${you.name}의 귀를 자극했다. 주머니 속 휴대전화의 벨소리였다.`,
      );
      await era.printAndWait(
        `발신자도 확인하지 않고 전화를 받는 것은 ${you.name}의 정보에 민감한 직업병 탓이었다.`,
      );
      await era.printAndWait('전화를 받았다.');
      era.printButton('「여보세요.」', 1);
      await era.input();
      await taste.say_and_wait('사과! 부탁할 일이 좀 있네.');
      await era.printAndWait([
        taste.get_colored_name(),
        '. 겉보기에는 평범한 학원 이사장이지만, 조직력과 재능, 안목을 생각하면 틀림없이 독보적인 존재였다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 깊게 숨을 내쉬었다. 아까의 평온과 달리, 분명한 힘이 담긴 불쾌한 한숨이었다.`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await taste.say_and_wait(
        `보고! 사실 그쪽의 ${treve.uma_sex_title} 중에 메이크 데뷔에서 훌륭한 실력을 보였는데도 아무도 말을 걸지 않은 이가 있네. 실력도 뛰어나고 레이스에서도 일착이었다는데, 어째서 스카우트되지 않았는지 이상하지 않나?`,
      );
      era.printButton('「이사장이 미리 점찍어 뒀으니까 그렇겠지.」', 1);
      await era.input();
      await taste.say_and_wait(
        `농담! 그건…… 아무튼 자네는 실력이 있으니, 그쪽에서 ${treve.sex}를 맡아 주면 어떨까 싶어서 말일세.`,
      );
      await era.printAndWait(
        '이 어려 보이려 애쓰는 사람의 귓구멍은 바람이나 통하라고 뚫려 있는 걸까.',
      );
      await era.printAndWait(
        `왜 프랑스의 ${treve.uma_sex_title}를 이 땅에 막 도착한 트레이너에게 맡기려는 건지.`,
      );
      await era.printAndWait(
        `${you.name}의 얼굴은 남이 보기에도 확연히 일그러져 무서워 보였고, ${treve.uma_sex_title}들은 하나둘 길을 비켰다.`,
      );
      await era.printAndWait(
        `걸으면서 통화를 이어 가다가 길가의 벤치에 앉았을 때, 건너편에 마찬가지로 앉아 있던 ${treve.uma_sex_title}와 눈이 마주쳤다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 손에 든 전화기를 살짝 흔들자, 밤색 머리의 ${treve.sex}는 고개를 끄덕였다.`,
      );
      await era.printAndWait(
        `일단 이대로 통화를 계속해도 ${you.name}에게 폐가 되지는 않을 것 같았다.`,
      );
      era.printButton('「실력에 달렸지.」', 1);
      await era.input();
      await taste.say_and_wait(
        `찬사! 특히 머리가 좋고, 레이스 운영이 아주 뛰어나다네. ${treve.sex}의 침착한 달리기는 신인답지 않아서, 교관도 금세 가르칠 것이 없어졌다고 하더군.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 듣기만 해도 뛰어난 ${treve.uma_sex_title}라는 생각이 들었다. 그런데도 스카우트되지 않았다면, 결국……`,
      );
      era.printButton('「성격에 문제가 있군.」', 1);
      await era.input();
      await taste.say_and_wait('부정! 자신감도 충분하다네.');
      era.printButton('「다리 상태가 불안한가.」', 1);
      await era.input();
      await taste.say_and_wait('건강! 아무 문제도 없네.');
      era.printButton('「그럼 왜 스카우트되지 않았는데?」', 1);
      await era.input();
      await taste.say_and_wait('유감! 나도 알고 싶다네!');
      await era.printAndWait(
        '전화 너머로 한숨이 들렸다. 정말로 자신이 있는 모양이었다.',
      );
      await era.printAndWait(
        `그렇게까지 말하니 ${you.name}은(는) 대체 어떤 ${treve.uma_sex_title}인지 궁금해졌다.`,
      );
      await era.printAndWait(
        '기본적으로 거절할 생각이지만, 적어도 한 번은 만나 보자.',
      );
      await era.printAndWait(
        '직접 맡지 않더라도 이 학원에 있는 적당한 지인에게 소개해 줄 수는 있을 것이다.',
      );

      era.printButton('「어떻게 생겼어?」', 1);
      await era.input();
      await taste.say_and_wait(
        `회상! 그래, 밤색 머리의 ${treve.uma_sex_title}일세. 다만 머리색이 밝아서 로즈 골드 같은 느낌이지.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 들어, 아까 통화해도 좋다는 양해를 구했던 ',
        treve.uma_sex_title,
        '와 눈을 마주쳤다.',
      ]);
      await era.printAndWait('밤색. 밝은 머리색.');
      era.printButton('「……또?」', 1);
      await era.input();
      await taste.say_and_wait(
        '특징! 뒷머리에 작게 묶은 머리 두 가닥이 있다네.',
      );
      await era.printAndWait(
        `${treve.sex}의 두 갈래로 묶은 머리가 바람에 흔들렸다.`,
      );
      era.printButton('「……더 있어?」', 1);
      await era.input();
      await taste.say_and_wait(
        '보충! 귀 장식은 왼쪽에 하얀 모자와 빨간 리본이 있다네. 눈에 띄는 특징이라 금방 알아볼 수 있을 걸세.',
      );
      await era.printAndWait(
        '하얀 모자와 빨간 리본도 흔들렸고, 짙은 파란색 선이 뚜렷이 보였다.',
      );
      await era.printAndWait(
        `계속 빤히 쳐다보는데도 그 밤색 머리의 ${treve.uma_sex_title}는 태연하게 ${you.name}을(를) 바라보고 있었다.`,
      );
      await era.printAndWait(
        `아쿠아마린빛 눈동자는 미동도 없이 ${you.name}을(를) 향했다.`,
      );
      await taste.say_and_wait(
        `질문! 그쪽 학원이 넓지 않나. 지금 메이크 데뷔에 나서는 ${treve.uma_sex_title}도 많으니 찾기가 어려울지도 모르겠군.`,
      );
      era.printButton('「……아니, 금방 찾을 것 같은데.」', 1);
      await era.input();
      await taste.say_and_wait('완벽! 찾을 수 있다니 다행일세. 그럼 이만.');
      await era.printAndWait(
        `${you.name}은(는) 무미건조한 통화 종료음과 함께 전화를 끊었다.`,
      );
      await era.printAndWait(
        `천천히 휴대전화를 집어넣고 두 손을 모아, 돌계단 보도를 사이에 두고 마주 앉은 ${treve.sex}를 다시 바라보았다.`,
      );
      era.printButton('「실례지만——여기서 뭘 하고 있지?」', 1);
      await era.input();
      await era.printAndWait(
        `그 ${treve.uma_sex_title}는 입에 손을 대고 답을 생각했다.`,
      );
      await treve.say_as_unknown_and_wait(
        '네, 메이크 데뷔에서는 이겼는데 어떤 트레이너도 제 담당이 되어 주지 않아서요. 지금은 어떤 높으신 분이 찾아 주신다는 사람을 기다리고 있어요……',
      );
      era.printButton('「그게 나야.」', 1);
      await era.input();
      await treve.say_as_unknown_and_wait('네?');
      era.printButton('「그 바보 이사장이 부른 트레이너가 바로 나라고.」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.sex}는 잠깐 작은 입을 벌리고 눈을 동그랗게 떴다.`,
      );
      await era.printAndWait(
        `현지 트레이너들에게 둘러싸여 있을 줄 알았는데 이런 외국인이 왔으니, ${treve.sex}는 실망했을지도 모른다.`,
      );
      await era.printAndWait(
        `하지만 기우였다. ${treve.sex}는 자리에서 일어나 ${you.name}에게 걸어와 오른손을 내밀었다.`,
      );
      await era.printAndWait(
        `미소 짓는 얼굴에는 티끌만 한 사심도 없었다. ${you.name}은(는) 그 순수함이 자신을 태우는 듯한 느낌을 알게 되었다.`,
      );
      await treve.say_and_wait(`저는 ${treve.name}예요. 처음 뵙겠습니다!`);
      era.printButton(`「……${you.actual_name}. 중앙 트레센의 트레이너야.」`, 1);
      await era.input();
      await era.printAndWait(
        `두 손을 내저은 뒤, 다시 ${treve.sex}와 악수했다.`,
      );
      era.printButton(
        '「대강 들었어…… 스카우트되지 않았다는 게 사실이야?」',
        1,
      );
      await era.input();
      await treve.say_and_wait(
        '사실이에요. 인사를 건넨 트레이너는 있었지만, 아무도 제 담당 트레이너가 되어 주지는 않았어요.',
      );
      await era.printAndWait(
        `${you.name}은(는) 말이 통할지 걱정했지만 첫 대화에서 특별한 어려움은 없었다.`,
      );
      era.printButton('「무슨 일이 있었는데?」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.name}는 ${you.name}의 눈을 똑바로 바라보며 거리낌 없이 대답했다.`,
      );
      await treve.say_and_wait('개선문상에서 이기고 싶어요.');
      await era.printAndWait(
        `그 한마디로 어떤 트레이너도 맡으려 하지 않은 이유를 알 수 있었다. ${you.name}은(는) 얼굴을 감싸 쥐고 싶어졌다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 너무 순진했다. 아마 가장 큰 원인은 바로 이런 자기 홍보 방식이었을 것이다.`,
      );
      await era.printAndWait(
        `당황하는 ${you.name}을(를) 보며 ${treve.name}는 고개를 갸웃했다.`,
      );
      await treve.say_and_wait(
        '그러고 보니 다들 이런 반응이었어요…… 하지만 개선문상을 목표로 삼는 게 그렇게 이상한가요?',
      );
      era.printButton('「이상하진 않아.」', 1);
      await era.input();
      await era.printAndWait(
        `방법이 잘못됐을 뿐이다. ${you.name}은(는) 먼저 ${treve.sex}와 같은 벤치에 앉은 뒤, ${you.name}을(를) 바라보는 ${treve.name}에게 몸을 돌렸다.`,
      );
      era.printButton(`설명을 이어 간다`, 1);
      await era.input();
      await you.say_and_wait(
        `잘 들어. 개선문상은 이 나라, 아니 전 세계 ${treve.uma_sex_title}의 목표야. 잔디 중거리를 주무대로 삼는 ${treve.uma_sex_title}라면 마지막에 도달하는 곳은 반드시 개선문상이지.`,
      );
      await era.printAndWait(
        `물론 고개를 끄덕이는 ${treve.sex}의 자질이 어느 정도인지는 아직 알 수 없었다. 하지만 그런 목표를 세울 정도라면 잔디 중거리에 상당한 자신이 있는 것이리라.`,
      );
      await era.printAndWait(
        `하지만 ${treve.uma_sex_title}의 실력만으로는 부족하다.`,
      );
      era.printButton(`「하지만——개선문상에 도전하는 건 도박에 가까워.」`, 1);
      await era.input();
      await you.say_and_wait(
        `각국의 ${treve.uma_sex_title}에 관한 자료를 모으고 거기에 맞춘 트레이닝을 짜지 않으면, 그 레이스에서 이기는 건 거의 불가능하다. 갓 메이크 데뷔를 이긴 ${treve.uma_sex_title}에게 그 막대한 노력을 쏟을 사람은 없다.`,
      );
      await era.printAndWait(
        `트레이너는 보통 여러 ${treve.uma_sex_title}를 담당한다. 개선문상 도전이 팀의 효율을 크게 떨어뜨린다는 것은 잘 알려져 있다. 평균 성적을 위해 국제 레이스에는 나가지 않겠다고 공언하는 트레이너도 있다.`,
      );
      await era.printAndWait(
        `처음부터 개선문상을 목표로 삼는 ${treve.name}는 그들의 지뢰를 밟은 셈이었다.`,
      );
      await treve.say_and_wait('……');
      await era.printAndWait(
        '요컨대 처음부터 너무 큰 목표를 내세워서는 안 된다는 것이다.',
      );
      await era.printAndWait(
        '가령 평범한 G1에서 이기고 싶다고만 말한다면, 트레이너에게 스카우트되는 것도 어렵지 않으리라.',
      );
      await era.printAndWait(
        '프랑스 국내나 영국, 독일의 레이스에서 실력을 쌓고 충분히 숙련된 뒤 개선문상에 도전하겠다고 하면, 고개를 젓는 사람도 줄어들 것이다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 너무 솔직한 것도 문제라고 생각하며 말을 이었다.`,
      );
      era.printButton(
        '「다른 트레이너를 소개해 줄 수는 있어……」（영입 포기）',
        1,
      );
      era.printButton('「그렇게 개선문상에서 이기고 싶어?」', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        await era.printAndWait(
          `${treve.name}의 아까 풀이 죽었던 모습이 거짓말 같았다.`,
        );
        await era.printAndWait(
          `${you.name}의 그 한마디에 반응한 눈이 반짝였다.`,
        );
        await treve.say_and_wait('물론이죠!');
        await era.printAndWait(
          '그렇다면 어설프게 목표를 감추기보다는, 처음부터 개선문상을 노린다고 자신의 동기를 밝히는 것이 가장 나을 것이다.',
        );
        await era.printAndWait(`그것을 부정한 사람이 바로 ${you.name}였다.`);
        era.printButton(
          '「……뭐, 개선문상을 목표로 해도 여유가 있는 트레이너를 만나면 좋겠지만.」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${you.name}이(가) 일어서려는 순간, ${treve.name}가 다급하게 코트 자락을 붙잡았다.`,
        );
        era.printButton('「왜 그래?」', 1);
        await era.input();
        await treve.say_and_wait(
          '트레이너님이 저를 스카우트해 주시면 안 될까요……',
        );
        await era.printAndWait('어쩐지 물에 젖은 작은 동물이 떠올랐다.');
        await era.printAndWait('솔직하고 실력도 있으며 뜻도 높다.');
        await era.printAndWait(
          `${treve.name}는 필사적으로 생각하고 있었다. 이렇게까지 거절당하고도 여전히.`,
        );
        await era.printAndWait(
          `${treve.sex}는 ${you.name}을(를) 구조선이라 생각하는지도 모른다. 하지만 이 진흙 배는 곧 가라앉을 참이다.`,
        );
        await era.printAndWait(
          `다른 곳에도 ${treve.sex}에게 기대를 거는 트레이너는 있을 것이다.`,
        );
        await era.printAndWait('그때 베누스 파크가 손가락을 튕겼다.');
        await treve.say_and_wait(
          '프랑스에 오셨다는 건, 지금은 한가하시다는 뜻이죠?',
        );
        era.printButton('「그렇지.」', 1);
        await era.input();
        await era.printAndWait('이 무례한 말투는 일단 넘어가기로 했다.');
        await treve.say_and_wait(
          '그래도 파리 트레센에서 지도 지원금은 나오잖아요?',
        );
        era.printButton('「……그래.」', 1);
        await era.input();
        await treve.say_and_wait('그럼 그걸 전부 저한테 써 주세요!');
        await era.printAndWait(
          `두 팔을 벌려 내미는 ${treve.teen_sex_title}도 지금은 무시했다.`,
        );
        era.printButton('「거절할게.」', 1);
        await era.input();
        await treve.say_and_wait('왜요!');
        await era.printAndWait(
          `한 걸음씩 멀어지려 했지만 ${treve.sex}에게 코트를 붙잡혀 움직일 수가 없었다.`,
        );
        await era.printAndWait(
          `이대로 찢어졌다가는 오랜 친구에게도 면목이 없다. 하는 수 없이 돌아보자 ${treve.name}가 다시 정면으로 ${you.name}의 눈을 들여다보았다.`,
        );
        await era.printAndWait('상대하기 어려워질 것 같은 맑은 눈이었다.');
        await treve.say_and_wait(
          `그럼 이유를 드릴게요. 개선문상을 연패할 수 있는 ${treve.uma_sex_title}를 맡으면, 사회인으로서의 평가도 올라가겠죠?`,
        );
        era.printButton('「그 자신감은 어디서 나오는 거야?」', 1);
        await era.input();
        await era.printAndWait(
          `그렇다 해도 실력만큼은 ${taste.name}와 레이스 결과가 보증하고 있었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 작게 한숨을 내쉬며 하늘을 올려다보았다.`,
        );
        await era.printAndWait(
          '잿빛 천장 대신 드넓은 하늘 곳곳에 먹구름이 흩어져 있었고, 그 틈새로 푸른 기색만 조금씩 비쳤다.',
        );
        await era.printAndWait(
          `${treve.name}는 여전히 ${you.name}을(를) 올려다보고 있었다. ${you.name}은(는)……`,
        );
        era.printButton('「역시 다른 사람을 찾아봐.」（영입 포기）', 1);
        era.printButton(`${you.name}을(를) 주로로 이끄는 그 손을 잡는다.`, 2);
        ret.push((ret['select'] = await era.input()));
        if (ret['select'] === 2) {
          await era.printAndWait(
            `눈앞의 ${treve.teen_sex_title}의 눈이 한층 더 밝게 빛났다.`,
          );
          await treve.say_and_wait('잘 부탁드려요, 트레이너님!');
          await era.printAndWait(
            `${you.name}의 심정은 아랑곳하지 않고, ${treve.name}는 ${you.name}을(를) 주로로 이끌었다.`,
          );
          await treve.say_and_wait(
            '트레이너님은 아직 제 달리기를 못 보셨잖아요. 지금 당장 보셔야 뭐라도 시작할 수 있죠?',
          );
          await treve.say_and_wait('자, 불은 뜨거울 때 두드리랬잖아요.');
          era.printButton('「뜨거울 때 두드리는 건 불이 아니라 쇠야.」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name}의 자신감이 확실한 실력에 뒷받침된 것임을 ${you.name}이(가) 알게 된 것은 트레이닝을 시작한 뒤였다.`,
          );
          await era.printAndWait(
            `${treve.sex}를 담당하면서 ${you.name}은(는) 예전 기록과 요령을 참고했다.`,
          );
          await era.printAndWait(
            `그리고 기존의 방식으로 ${treve.sex}를 어떻게 지도할지 생각할수록, ${treve.sex}의 뛰어난 실력을 실감했다.`,
          );
          await era.printAndWait(
            '가속과 최고 속도를 냉정하게 파악할 수 있는 주력, 마지막 직선에서도 지친 기색이 없는 지구력, 스스로 상황에 맞는 전략을 세우는 두뇌.',
          );
          await era.printAndWait(
            `${treve.uma_sex_title}에게 필요한 모든 것이 극히 높은 수준이었다.`,
          );
          await era.printAndWait(
            `균형이 잘 잡혀 있어 ${you.name}은(는) 어떤 각질로도 좋은 승부를 펼칠 수 있으리라 생각했다.`,
          );
          await era.printAndWait('이 주력이라면 선행이나 선입이겠지.');
          await treve.say_and_wait(
            '선행이 더 좋아요. 집단 앞쪽에 있으면 바깥으로 빠져나가기 쉬우니까요.',
          );
          await era.printAndWait(
            `${treve.name}는 운동장을 달리는 동료들을 곁눈질하며 수건으로 땀을 닦았다.`,
          );
          await era.printAndWait(
            `몸은 충분히 강했고, 게다가 ${treve.sex}에게는 그 힘을 더욱 살려 줄 무기가 있었다.`,
          );
          await era.printAndWait(
            '다음 모의 레이스는 선행으로 가자. 다만 이번 상대들은 선배들이야……',
          );
          await treve.say_and_wait(['이길 거예요, ', callname, '。']);
          await era.printAndWait(
            '자신의 실력을 냉정하게 이해하기에 나오는 자신감이었다.',
          );
          await era.printAndWait([
            '지나친 자만도 겸손도 없이 자신의 정신 상태를 객관적으로 볼 줄 아는 것 역시 ',
            treve.get_colored_name(),
            '라는 ',
            treve.uma_sex_title,
            '의 완성도를 높여 주고 있었다.',
          ]);
          await era.printAndWait(
            `어설픈 트레이너라면 여기에 손을 댔다가 ${treve.sex}의 재능을 망가뜨릴 것이다.`,
          );
          await era.printAndWait([
            '밤색 머리의 ',
            treve.uma_sex_title,
            '는 연습을 마치려는 ',
            you.get_colored_name(),
            '에게 다가가 한 바퀴 더 달리고 싶다고 ',
            you.get_colored_name(),
            '에게 말했다.',
          ]);
          era.printButton('「좋아. 그런데 그렇게까지 하려는 이유가 뭐지?」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name}의 얼굴이 석양에 물들었고, 평소처럼 작게 웃었다.`,
          );
          await era.printAndWait(
            `${treve.sex}에게 남아 있는 앳된 모습은 타고난 재능의 상징 같았다. ${treve.name}에게는 젊음에 걸맞은 강함이 있었다.`,
          );
          await treve.say_and_wait(
            '가족도 친구도, 그 밖에 많은 분들이 저를 응원해 주고 있어요. 그러니 모두의 기대에 보답하고 싶어요!',
          );
          await era.printAndWait(
            `그렇게 말하며 달려가는 ${treve.sex}의 뒷모습이 멀어졌다.`,
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 그 작은 모습을 ',
            treve.get_colored_name(),
            '가 커브를 돌아 사라질 때까지 눈으로 쫓았다.',
          ]);
        }
      }
    }
    return ret;
  },
  rec_final: (() => {
    /**
     * @param {CharaTalk} treve
     * @param {CharaTalk} you
     */
    const f = async (treve, you) => {
      await era.printAndWait('학원의 나무들이 계절의 색을 띠고 있었다.');
      await era.printAndWait(
        '옅은 노란색의 복도, 투명한 대형 유리창, 각진 건물의 외벽.',
      );
      await era.printAndWait('현대적인 학원 건물이 짙푸른 하늘과 어우러졌다.');
      await era.printAndWait(
        '은행나무와 소나무, 중정에 있는 고목의 구멍까지 함께 햇살을 받고 있었다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '는 중앙의 교복으로 갈아입고 교사와 트레이너실을 잇는 정원을 걸었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        treve.get_colored_name(),
        '의 전속 트레이너가 되었다.',
      ]);
    };
    f.title = '전인미답';
    return f;
  })(),
};
