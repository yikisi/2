/**
 * @file エイシンフラッシュ - 募集
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_start(flash, you) {
    await era.printAndWait(
      `훈련장에 있을 때, ${you.name}의 시야 끝에 낯익은 뒷모습이 문득 스쳐 지나갔다.`,
    );
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name}은(는) 급히 고개를 돌렸지만, 뒤에는 아무도 없었다.`,
    );
    era.printButton('「……착각인가?」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name}은(는) 미련을 버리지 못하고 주위를 살폈지만, 익숙한 그림자는 녹아 버린 듯 다시는 나타나지 않았다.`,
    );
    era.printButton('「착각이겠지.」', 1);
    await era.input();
    await era.printAndWait(
      `어쩔 수 없이 ${you.name}은(는) 고개를 저으며, 일단 이 일을 머릿속에서 지우기로 했다.`,
    );
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_rest(flash, you) {
    await era.printAndWait(
      `며칠 뒤 방을 정리하던 중 ${you.name}은(는) 책상 서랍 구석에 은빛과 검은빛의 훈장이 놓여 있는 것을 발견했다.`,
    );
    era.printButton('「이건?」', 1);
    await era.input();
    await era.printAndWait(
      `호기심에 ${you.name}은(는) 훈장을 집어 들어 자세히 살폈다.`,
    );
    await flash.say_as_unknown_and_wait(
      '도와주셔서 감사해요. 감사의 표시로 이것을 받아 주세요.',
    );
    era.printButton('「아, 생각났다!」', 1);
    await era.input();
    await era.printAndWait(
      `갑자기 기억이 돌아왔다. 예전에 볼일이 있어 나갔다가 학원 근처 지하철역에서 기다리던 중 길을 잃은 ${flash.uma_sex_title}를 도와주고 답례로 받은 물건이었다.`,
    );
    await era.printAndWait(
      `하지만 그 ${flash.uma_sex_title}의 얼굴은 이미 희미해졌다. ${you.name}이(가) 간신히 떠올릴 수 있는 것은 윤기 나는 검은 단발과 외국인 특유의 맑고 푸른 눈동자 같은 두드러진 특징뿐이었다.`,
    );
    await era.printAndWait('따르르릉——');
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `조금 더 자세히 떠올리려던 순간 요란한 벨소리가 생각을 끊었다.`,
    );
    era.printButton('「받는다」', 1);
    era.printButton('「끊는다」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `생각을 방해받아 불쾌했지만 ${you.name}은(는) 그래도 휴대전화를 들어 정중하게 응답했다.`,
      );
      await you.say_as_passer_by_and_wait(
        '담당 직원',
        `트레이너 ${you.adult_sex_title}, 선발 레이스가 시작됩니다. 아직 도착하지 않으셨는데요.`,
      );
      await era.printAndWait('수화기 너머로 다급한 목소리가 들렸다.');
      era.printButton('「선발 레이스?」', 1);
      await era.input();
      await era.printAndWait(
        `그 말에 ${you.name}은(는) 잠시 멈칫하다 오늘 운동장에 중요한 행사가 있다는 사실을 떠올렸다.`,
      );
      era.printButton('「지금 갈게요!」', 1);
      await era.input();
      await era.printAndWait(
        `그 사실을 깨달은 ${you.name}은(는) 곧바로 문을 열고 뛰쳐나갔다.`,
      );
    } else {
      await era.printAndWait(
        `생각을 방해받아 짜증이 난 채 ${you.name}은(는) 휴대전화를 들어 전화를 끊었다.`,
      );
      await era.printAndWait('뚝.');
      await era.printAndWait('벨소리가 뚝 멎었다.');
      await era.printAndWait(
        `${you.name}이(가) 휴대전화를 내려놓으려는 순간 화면의 날짜에 시선이 멈췄다.`,
      );
      era.printButton('「그러고 보니……」', 1);
      await era.input();
      await era.printAndWait(
        `다음 순간 ${you.name}은(는) 오늘 운동장에서 중요한 행사가 열린다는 것을 깨달았다.`,
      );
      era.printButton('「선발 레이스가 시작되잖아!」', 1);
      await era.input();
      await era.printAndWait(
        `그 사실을 깨달은 ${you.name}은(는) 곧바로 문을 열고 뛰쳐나갔다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_final(flash, you) {
    let ret;
    await era.printAndWait(
      `${you.name}은(는) 서둘러 운동장으로 달려갔다. 이미 그곳은 다른 트레이너와 ${flash.uma_sex_title}들로 가득 차 있었다.`,
    );
    era.printButton('「후우…… 늦지 않았나?」', 1);
    await era.input();
    await era.printAndWait(
      `지각해서 선수를 놓쳤지만 선발 레이스는 아직 시작하지 않았다. 관심 가는 ${flash.uma_sex_title}를 찾을 여지는 남아 있다.`,
    );
    await era.printAndWait(
      `그래서 ${you.name}은(는) 인파 속을 두리번거리며 무언가 찾을 수 있을지 살폈다.`,
    );
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `문득 시야 가장자리에 다시 낯익은 그림자가 비쳤다. ${you.name}은(는) 급히 고개를 돌렸지만, 그 사람은 이미 자취를 감춘 뒤였다.`,
    );
    era.printButton('「이상하네, 한번 찾아보자.」', 1);
    era.printButton('「착각일 거야, 신경 쓰지 말자.」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(`저 사람은 누구지? 아는 사람인가?`);
      await era.printAndWait(
        `호기심에 이끌려 ${you.name}은(는) 그림자가 사라진 쪽으로 걸어갔다.`,
      );
      await era.printAndWait(`인파를 헤치며 계속 나아갔다.`);
      await era.printAndWait(
        `이윽고 ${you.name}은(는) 운동장 구석에 이르러 있었다.`,
      );
    } else {
      await you.say_and_wait(
        '착각이겠지. 이렇게 우연히 아는 사람을 만날 리가 없어.',
        true,
      );
      await era.printAndWait(
        `그렇게 생각하며 ${you.name}은(는) 고개를 저어 의구심을 떨쳐냈다.`,
      );
      await era.printAndWait(
        `계속 찾아봤지만 마음에 드는 상대는 보이지 않았다.`,
      );
      await era.printAndWait(
        `걷다 보니 점점 멀어져 어느새 운동장 구석에 이르렀다.`,
      );
    }
    era.printButton('「여기는?」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name}은(는) 호기심 어린 눈으로 주변을 살폈다. 다른 곳의 떠들썩함과는 대조적으로 이곳은 유독 적막함이 감돌았다.`,
    );
    await flash.say_and_wait(
      `${you.adult_sex_title}, 안녕하세요. 무슨 일이신가요?`,
    );
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `갑자기 ${you.name}의 뒤에서 의아해하는 목소리가 들려왔다.`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 돌아보자 학원 체육복을 입은 ',
      flash.uma_sex_title,
      '가 당황한 얼굴로 ',
      you.get_colored_name(),
      '을(를) 바라보고 있었다.',
    ]);
    await era.printAndWait(
      `자세히 보니 어깨에 닿을 듯한 검은 단발에, 오른쪽 귀에는 흰색 고리 모양 장식과 작은 리본이 달려 있었다.`,
    );
    await era.printAndWait(
      `시선을 내리자 바람 없는 호수처럼 잔잔한 푸른 눈동자가 빨려들 듯한 매력을 발산했다. 그 눈에 빠져 희고 고운 피부를 지나칠 뻔했다.`,
    );
    if (flash.sex_code !== 1) {
      await era.printAndWait(
        '헐렁한 체육복으로도 가려지지 않는 풍만한 가슴이 숨결에 따라 오르내리고, 두 손으로 감쌀 만큼 가는 허리와 어우러져 상상력을 자극하는 곡선을 이루었다.',
      );
    }
    await era.printAndWait(
      `${flash.uma_sex_title}에게 중요한 두 다리도 상반신의 인상을 그대로 이어받아, 격한 운동에도 부드럽고 늘씬한 맵시를 잃지 않았다.`,
    );
    await era.printAndWait('의심할 여지 없는 미인이다.');
    await era.printAndWait(`${you.name}은(는) 속으로 그렇게 중얼거렸다.`);
    await flash.say_and_wait('……왜 계속 저를 바라보고 계신가요?');
    await era.printAndWait(
      `눈앞의 ${flash.teen_sex_title}도 ${you.name}이(가) 말없이 ${flash.sex}를 계속 바라보는 것을 당연히 의아하게 여겼다.`,
    );
    era.printButton('「우리 전에 어디선가 만난 적 있지 않나요?」', 1);
    await era.input();
    await flash.say_and_wait('에?');
    await era.printAndWait(
      `${you.name}의 말에 ${flash.sex}는 잠시 멍해지더니, 이내 살피는 눈빛으로 ${you.name}을(를) 몇 초간 관찰했다.`,
    );
    await flash.say_and_wait('과연.');
    await era.printAndWait(
      `이윽고 ${you.name}은(는) ${flash.sex}의 얼굴에 기쁨 섞인 미소가 번지는 것을 보았다.`,
    );
    await flash.say_and_wait('당신이었군요. 정말 오랜만이에요.');
    await era.printAndWait(
      `${flash.sex}는 ${you.name}을(를) 알아봤다. ${you.name}이(가) 방금 ${flash.sex}를 관찰하며 정체를 알아냈던 것과 마찬가지로.`,
    );
    era.printButton('「오랜만이야.」', 1);
    era.printButton('「그때 선물은 고마웠어.」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}가 이 학원 학생이라는 사실에 놀라움을 표했다.`,
      );
      await flash.say_and_wait(
        '네, 저도 당신이 여기서 트레이너를 하고 계실 줄은 몰랐어요. 그동안 마주치지 못한 건 순전히 운 때문이었나 보네요.',
      );
      await era.printAndWait(
        `${flash.teen_sex_title}는 웃으며 고개를 저었다.`,
      );
      await flash.say_and_wait('아.');
      await era.printAndWait(
        `그러다 뭔가가 떠오른 듯, ${flash.sex}의 얼굴에 갑자기 미안한 기색이 서렸다.`,
      );
      await flash.say_and_wait(
        '죄송해요. 예전에 도움을 받았을 때, 경황이 없어서 제 이름을 말씀드리는 걸 깜빡했네요.',
      );
    } else {
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}가 당시에 주었던 선물에 대해 감사를 전했다.`,
      );
      await flash.say_and_wait(
        '별말씀을요. 당신이 저를 도와주셨으니, 그건 당연한 보답이었는걸요.',
      );
      await era.printAndWait(`${flash.sex}는 기쁜 듯 살짝 미소 지었다.`);
      await flash.say_and_wait(
        '그래도 선물을 마음에 들어 하셨다니 정말 다행이에요.',
      );
      await flash.say_and_wait('아.');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `말을 하던 중 뭔가가 생각난 듯, ${flash.sex}의 표정이 미안함으로 바뀌는 것을 보았다.`,
      );
      await flash.say_and_wait(
        '그러고 보니, 예전에 도움을 받았을 때 제 이름을 알려드리는 걸 깜빡하고 말았네요.',
      );
    }
    era.printButton('「에.」', 1);
    await era.input();
    await flash.say_and_wait(
      '정말 무례한 짓이었어요. 그러니 지금 정식으로 다시 자기소개를 할게요.',
    );
    await era.printAndWait(
      `${flash.sex}는 손을 가슴에 얹고 단정한 자세를 취했다.`,
    );
    await flash.say_and_wait(
      `제 이름은 에이신 플래시. 보시는 바와 같이 ${flash.uma_sex_title}입니다.`,
    );
    era.printButton('「그럼 지금 여기 있는 건……」', 1);
    await era.input();
    await flash.say_and_wait('네.');
    await era.printAndWait(
      `${flash.sex}는 고개를 끄덕이며 ${you.name}의 추측을 긍정했다.`,
    );
    await flash.say_and_wait(
      '곧 있을 선발 레이스를 준비하기 위해서 이곳에 와 있습니다.',
    );
    era.drawLine();
    await era.printAndWait(
      `선발 레이스가 끝났다. 하지만 ${you.name}을(를) 놀라게 한 것은, 레이스 전 최상의 컨디션을 보이던 에이신 플래시가 매우 저조한 성적으로 결승선을 통과했다는 사실이었다.`,
    );
    await flash.say_and_wait('…………');
    await era.printAndWait(`낙담한 표정의 ${flash.sex}를 보며, `);
    era.printButton('「바로 말을 건다.」 (영입을 계속한다)', 1);
    era.printButton(
      `「중요한 건 담당 ${flash.uma_sex_title}를 찾는 거야. 위로는 나중에 하자.」 (영입을 그만둔다)`,
      2,
    );
    ret = (await era.input()) === 1;
    if (ret) {
      await era.printAndWait(
        `지금 이런 행동을 하면 성적이 좋은 ${flash.uma_sex_title}들을 다른 트레이너들에게 뺏길 수도 있다는 걸 알지만, ${you.name}은(는) 슬퍼하는 에이신 플래시를 모른 척할 수 없었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}에게 빠르게 다가갔다.`,
      );
      await flash.say_and_wait(
        '……꼴사나운 모습을 보여드리고 말았네요, 이런 성적이라니.',
      );
      await era.printAndWait(
        `${you.name}을(를) 발견한 에이신 플래시는 깊게 숨을 들이마시더니, 조금 억지스러운 미소를 지어 보였다.`,
      );
      era.printButton('「네 실력은 충분히 훌륭했어.」', 1);
      era.printButton('「승패는 병가지상사라네. 대협, 다시 도전하게.」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name}은(는) ${flash.sex}에게 이번 레이스에 대한 자신의 견해를 설명했다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 보기에 에이신 플래시의 퍼포먼스는 완벽에 가까웠고, 단 하나의 빈틈도 찾을 수 없었다.`,
        );
        await flash.say_and_wait(
          '그 말은, 단순히 제가 실력이 부족했다는 뜻인가요.',
        );
        await flash.say_and_wait('………');
        await era.printAndWait(
          `${you.name}의 말을 들은 에이신 플래시는 잠시 침묵에 빠졌다.`,
        );
      } else {
        await flash.say_and_wait('대협이라…… 후훗.');
        await era.printAndWait(
          `에이신 플래시는 ${you.name}의 말을 듣고 가볍게 웃음을 터뜨렸다.`,
        );
        await flash.say_and_wait(
          '농담도 잘하시네요. 저는 대협 같은 사람이 아닌걸요.',
        );
        await era.printAndWait(
          `${flash.sex}는 고개를 저었고, 표정은 아까보다 한결 부드러워졌다.`,
        );
        await flash.say_and_wait('하지만……');
        await era.printAndWait(
          `이어서 ${you.name}은(는) ${flash.sex}가 무언가 생각에 잠긴 듯 웅얼거리는 소리를 들었다.`,
        );
        await flash.say_and_wait('승패는 병가지상사라……');
        await flash.say_and_wait('………');
        await era.printAndWait(`그 말을 끝으로 ${flash.sex}는 침묵에 잠겼다.`);
      }
      era.printButton('「저기……」', 1);
      await era.input();
      await era.printAndWait(
        `그 모습을 보고 ${you.name}이(가) 무언가 말하려던 찰나, ${flash.sex}가 갑자기 고개를 들어 ${you.name}의 가슴에 달린 트레이너 배지를 뚫어지게 쳐다봤다.`,
      );
      await flash.say_and_wait(
        `${you.adult_sex_title}, 실례가 될지도 모르는 질문을 하나 드려도 될까요?`,
      );
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 갑작스러운 질문에 ${you.name}은(는) 의아했지만, 고개를 끄덕여 허락했다.`,
      );
      await flash.say_and_wait(
        '트레이너라는 직업에 종사하신 지 얼마나 되셨나요?',
      );
      await era.printAndWait(
        `${you.name}이(가) 동의하자, ${flash.sex}는 잠시 망설이다가 물었다.`,
      );
      era.printButton('「이제 막 시작했어.」', 1);
      if (era.get('flag:当前声望') > 500) {
        era.printButton('「어느 정도 됐지.」', 2);
      }
      if (era.get('flag:当前声望') > 1000) {
        era.printButton('「꽤 오래됐어.」', 3);
      }
      switch (await era.input()) {
        case 1:
          await era.printAndWait(
            `${you.name}은(는) 정식 트레이너가 된 지 얼마 안 된 실무 경험이 부족한 신입이라고 말했다. 다만 이론 성적만큼은 베테랑에게 크게 뒤지지 않는다고 덧붙였다.`,
          );
          await flash.say_and_wait(
            '그렇군요. 그러니까 스스로 실력을 증명할 기회가 부족하다고 생각하시는 거군요?',
          );
          await era.printAndWait(
            `${you.name}의 답변을 듣고 에이신 플래시는 깊이 생각하며 고개를 끄덕였다.`,
          );
          await flash.say_and_wait('하지만…… 실력을 증명한다, 인가요.');
          await era.printAndWait(
            `다음 순간, 무언가 떠오른 듯 ${flash.sex}는 갑자기 깊은 한숨을 내쉬었다.`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `그 모습을 보고 ${you.name}이(가) 혹시 몸이라도 좋지 않은 건지 물어보려던 찰나, `,
          );
          await flash.say_and_wait(
            `……당신이 보시기에, 만약 제가 지금 담당 ${flash.uma_sex_title}가 되고 싶다고 하면 수락해 줄 트레이너가 몇 명이나 될까요?`,
          );
          era.printButton('「에?」', 1);
          await era.input();
          await era.printAndWait(
            `예상치 못한 질문이 ${you.name}의 귓가에 들려왔다.`,
          );
          era.printButton('「………」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) 왜 그런 질문을 하는지 알 수 없었다. 하지만 에이신 플래시의 눈빛이 농담 같지 않아 ${you.name}은(는) 몇 초 동안 침묵했다.`,
          );
          era.printButton('「솔직히 말하면, 거의 없을 거야.」', 1);
          era.printButton('「걱정 마, 누군가는 꼭 나타날 거야.」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `방금 전 레이스 장면을 떠올리며 잠시 망설이던 ${you.name}은(는) 결국 솔직하게 대답하기로 했다.`,
            );
            await flash.say_and_wait('거의 없다, 인가요……');
            await flash.say_and_wait(
              '그렇겠죠. 제 성적은 정말이지 처참하다고 할 수밖에 없으니까요.',
            );
            await era.printAndWait(
              '그렇게 말하며 에이신 플래시는 고개를 돌려, 방금 끝난 레이스의 순위가 기록된 운동장 게시판을 바라보았다.',
            );
            await era.printAndWait(
              `당연하게도 그곳에 ${flash.sex}의 이름은 없었다.`,
            );
          } else {
            await era.printAndWait(
              `방금 전 레이스 장면을 떠올리며 잠시 망설이던 ${you.name}은(는) 조금 완곡한 표현을 선택했다.`,
            );
            await flash.say_and_wait(
              '누군가는 있을 거라니…… 즉, 실제 상황은 아주 낙관적이지 않다는 뜻이군요.',
            );
            await era.printAndWait(
              `하지만 에이신 플래시는 ${you.name}의 말속에 담긴 속뜻을 쉽게 알아차렸다.`,
            );
            await flash.say_and_wait(
              '그렇겠죠. 제 성적은 정말이지 처참하다고 할 수밖에 없으니까요.',
            );
            await era.printAndWait(
              `${flash.sex}는 고개를 돌려 운동장 게시판의 순위표를 바라보았다.`,
            );
            await era.printAndWait(
              `당연하게도 그곳에 ${flash.sex}의 이름은 없었다.`,
            );
          }
          era.printButton(
            '「……뭐, 나 같은 신입 트레이너를 찾아간다면 수락해 줄지도 모르지?」',
            1,
          );
          await era.input();
          await era.printAndWait(
            `에이신 플래시의 안색이 어두워지자 ${you.name}은(는) 위로의 말을 건넸다.`,
          );
          await flash.say_and_wait('………');
          era.printButton(
            '「아니면 다시 준비해서 다음 선발 레이스 때 더 좋은 성적을 거두는 방법도 있어.」',
            1,
          );
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}를 위해 나름의 대책을 제시했다.`,
          );
          await flash.say_and_wait(
            '이번 실패의 원인은 실력 부족입니다. 그렇다면 다음 선발 레이스까지 제가 얼마나 성장할 수 있을까요?',
          );
          await era.printAndWait(
            '에이신 플래시는 나직한 목소리로 말했다. 그것이 질문인지, 아니면 단순한 독백인지 알 수 없었다.',
          );
          era.printButton('「……그건 네 자신에게 달렸지.」', 1);
          era.printButton('「계속 노력한다면 반드시 좋아질 거야!」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              '자신의 능력을 향상시키기 위한 조건은 간단하면서도 복잡하다. 하지만 어떤 경우라도 부정적인 태도로 제자리에 머물러 망설인다면, 결코 앞으로 나아갈 수 없다.',
            );
            await era.printAndWait(
              `${you.name}은(는) 그러한 도리를 ${flash.sex}에게 일러주려 노력했다.`,
            );
            await flash.say_and_wait('제 생각에 달렸다…… 는 말씀이시군요.');
            await era.printAndWait(
              `${you.name}의 말을 듣고 무언가 결심이라도 한 듯, ${flash.sex}는 깊이 숨을 들이마셨다.`,
            );
          } else {
            await era.printAndWait(
              `실력을 키우는 조건은 복잡할 수 있으나, 긍정적인 태도만이 앞으로 나아갈 가능성을 만들어준다. 이에 ${you.name}은(는) ${flash.sex}를 격려했다.`,
            );
            await flash.say_and_wait(
              '계속 노력하기만 하면 반드시 성장할 수 있다…… 인가요?',
            );
            await era.printAndWait(
              `${you.name}의 격려를 들은 ${flash.sex}는 깊이 숨을 들이마셨다.`,
            );
          }
          await flash.say_and_wait(
            `${you.actual_name_with_title}, 당신께 한 가지 간곡히 부탁드리고 싶은 것이 있습니다.`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `그 순간 ${you.name}은(는) 레이스 패배로 인해 풀 죽어 있던 에이신 플래시의 눈빛이 순식간에 다시 강인하게 변하는 것을 목격했다.`,
          );
          await era.printAndWait(
            `${you.name}이(가) 그런 변화에 놀라기도 전에, `,
          );
          await flash.say_and_wait(
            '부디 저의 담당 트레이너가 되어주셨으면 합니다.',
          );
          era.printButton('「에?!」', 1);
          await era.input();
          await era.printAndWait(
            `다음 순간 ${you.name}을(를) 더 큰 충격에 빠뜨리는 말이 ${flash.sex}의 입에서 흘러나왔다.`,
          );
          await era.printAndWait(
            `이 갑작스러운 상황에서 ${you.name}의 선택은:`,
          );
          era.printButton('「왜 나를 선택한 거야?」', 1);
          era.printButton(
            '「이유는 모르겠지만, 그렇다면 앞으로 서로의 담당이 되는 거네.」',
            2,
          );
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `에이신 플래시의 갑작스러운 제안에 ${you.name}은(는) 당황했다. 하지만 그보다 왜 자신에게 말을 걸었는지가 궁금했다.`,
            );
            await flash.say_and_wait(
              '이유 말씀이시군요. 그렇네요. 이유는 필요하겠지요.',
            );
            await era.printAndWait(
              `${you.name}의 질문을 듣고 에이신 플래시는 몇 초 동안 생각했다.`,
            );
          } else {
            await era.printAndWait(
              `에이신 플래시의 제안은 갑작스러웠다. 하지만 오늘 선발 레이스를 보러 온 목적은 새로운 담당 ${flash.uma_sex_title}를 찾는 것이었다. 그래서 ${you.name}은(는) 주저 없이 받아들였다.`,
            );
            await flash.say_and_wait(
              '……정말 흔쾌히 받아들이시는군요. 제가 왜 갑자기 부탁드렸는지 궁금하지 않으신가요?',
            );
            era.printButton('「궁금하긴 하지만, 일단 먼저 받아들인 거야.」', 1);
            await era.input();
            await flash.say_and_wait('후훗.');
            await era.printAndWait(
              `${you.name}의 대답을 듣고 에이신 플래시는 작게 웃었다.`,
            );
            await flash.say_and_wait(
              '제게는 고마운 이유예요. 하지만 그런 사고방식은 조금 위험하다고 생각해요.',
            );
            await era.printAndWait(
              `${flash.sex}는 그렇게 말하며 고개를 저었다.`,
            );
            await flash.say_and_wait(
              '부디 제 이유를 들으신 뒤에 판단해 주세요.',
            );
          }
          await era.printAndWait(
            `이어서 ${flash.sex}는 처음 만났을 때 하마터면 ${you.name}을(를) 빨아들일 뻔했던 그 푸른 눈동자를 가리켰다.`,
          );
          await flash.say_and_wait('눈치채셨겠지만 저는 일본인이 아니에요.');
          era.printButton('「짐작은 했어.」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}의 말에 맞춰 고개를 끄덕였다.`,
          );
          await flash.say_and_wait(
            '사실 일본에서 구천 킬로미터 떨어진 독일 출신이에요.',
          );
          await flash.say_and_wait('그러니까 유학생이지요.');
          await era.printAndWait('에이신 플래시는 손가락 하나를 세웠다.');
          await flash.say_and_wait(
            `일본에 온 목적은 레이스장에서 적수가 없는 ${flash.uma_sex_title}가 되기 위해서, 그리고……`,
          );
          era.printButton('「그리고?」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            '에이신 플래시는 잠시 침묵하다 작게 한숨을 내쉬었다.',
          );
          await flash.say_and_wait(
            '조금 전 당신 앞에서 참패한 제가 이런 말을 하면 우습게 들릴지도 모르겠네요.',
          );
          await flash.say_and_wait('하지만요.');
          await era.printAndWait(
            `그때 ${you.name}은(는) ${flash.sex}의 표정이 진지해지는 것을 보았다.`,
          );
          await flash.say_and_wait(
            '영예를 쌓아서 부모님께서…… 저를 자랑스러워하시게 하고 싶어요.',
          );
          await era.printAndWait(
            `에이신 플래시는 진지하게 ${you.name}을(를) 바라보았다. 그 신념을 이 자리에서 각인시키려는 듯했다.`,
          );
          era.printButton('「그게 네 생각이구나?」', 1);
          await era.input();
          await era.printAndWait(`${you.name}은(는) 고개를 끄덕였다.`);
          await flash.say_and_wait(
            '다음 선발 레이스에 나가든 나가지 않든, 전문가의 지도 없이는 아무리 노력해도 제자리걸음일 뿐이에요.',
          );
          await era.printAndWait(
            `${you.name}이(가) 자신의 생각을 이해한 것을 보고 에이신 플래시는 말을 이었다.`,
          );
          await flash.say_and_wait(
            '그래서 지도를 부탁드리고 싶어요. 제게는 아직 성장할 여지가 있다고 믿으니까요.',
          );
          await era.printAndWait(
            `말을 마친 ${flash.sex}는 ${you.name}에게 고개를 숙여 정중히 부탁했다.`,
          );
          await flash.say_and_wait('뭐, 물론이죠.');
          await era.printAndWait(
            `다시 몸을 바로 세우는 순간 ${flash.sex}는 또 멋쩍게 웃었다.`,
          );
          await flash.say_and_wait('왜 당신께 부탁드렸는지 알고 싶으시다면요.');
          await flash.say_and_wait(
            '솔직히 말씀드리면, 서로 안면이 있는 편이 더 쉽게 받아들여 주시지 않을까 하는 개인적인 계산도 있었어요.',
          );
          era.printButton('「그렇구나.」', 1);
          await era.input();
          await era.printAndWait(
            `그 말을 듣고 ${you.name}은(는) 작게 고개를 끄덕였다. 이런 상황에서 `,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name}은(는) 트레이너가 된 지 제법 되었으며, 실적으로는 이름난 선배들에게 미치지 못하지만 그 차이는 경력뿐이라고 말했다.`,
          );
          await flash.say_and_wait('그렇군요. 그 자신감에 경의를 표해요.');
          await era.printAndWait(
            `${you.name}의 말을 듣고 에이신 플래시는 웃으며 칭찬했다.`,
          );
          await flash.say_and_wait('하지만…… 경력 말이군요.');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `다음 순간 ${flash.sex}는 가볍게 한숨을 쉬었다.`,
          );
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}의 어깨가 그 순간 조금 처지는 듯한 느낌을 받았다.`,
          );
          era.printButton('「무슨 일 있어?」', 1);
          await era.input();
          await era.printAndWait(
            `그 모습에 ${you.name}은(는) 걱정스럽게 물었다.`,
          );
          await flash.say_and_wait(
            '……걱정해 주셔서 감사합니다. 아무 일도 아니에요.',
          );
          await era.printAndWait(
            `에이신 플래시는 고개를 저었고, 이내 결연한 눈빛으로 ${you.name}을(를) 바라봤다.`,
          );
          await flash.say_and_wait(
            '하지만 당신께 꼭 부탁드리고 싶은 일이 있습니다.',
          );
          era.printButton('「에?」', 1);
          await era.input();
          await flash.say_and_wait(
            '부디 저의 담당 트레이너가 되어주셨으면 합니다.',
          );
          await era.printAndWait(
            `말을 마친 ${flash.sex}는 ${you.name}에게 고개를 숙여 정중히 부탁했다.`,
          );
          await era.printAndWait(
            `이 갑작스러운 상황에서 ${you.name}의 선택은:`,
          );

          era.printButton('「왜 나를 선택한 거야?」', 1);
          era.printButton('「알겠어. 앞으로 서로의 담당이 되는 거네.」', 2);
          ret = (await era.input()) === 1;
          if (ret) {
            await era.printAndWait(
              `에이신 플래시의 갑작스러운 제안에 ${you.name}은(는) 당황했다. 하지만 그보다 왜 자신에게 말을 걸었는지가 궁금했다.`,
            );
            await flash.say_and_wait(
              '이유 말씀이시군요. 그렇네요. 이유는 필요하겠지요.',
            );
            await era.printAndWait(
              `${you.name}의 질문을 듣고 에이신 플래시는 몇 초 동안 생각했다.`,
            );
          } else {
            await era.printAndWait(
              `오늘 선발 레이스를 보러 온 목적은 새로운 담당 ${flash.uma_sex_title}를 찾는 것이었다. 그래서 ${you.name}은(는) 주저 없이 받아들였다.`,
            );
            await flash.say_and_wait(
              '……정말 흔쾌히 받아들이시는군요. 제가 왜 갑자기 부탁드렸는지 궁금하지 않으신가요?',
            );
            era.printButton('「궁금하긴 하지만, 일단 먼저 받아들인 거야.」', 1);
            await era.input();
            await flash.say_and_wait('후훗.');
            await era.printAndWait(
              `${you.name}의 대답을 듣고 에이신 플래시는 작게 웃었다.`,
            );
            await flash.say_and_wait(
              '제게는 고마운 이유예요. 하지만 그런 사고방식은 조금 위험하다고 생각해요.',
            );
            await era.printAndWait(
              `${flash.sex}는 그렇게 말하며 고개를 저었다.`,
            );
            await flash.say_and_wait(
              '부디 제 이유를 들으신 뒤에 판단해 주세요.',
            );
          }
          await era.printAndWait(
            `이어서 ${flash.sex}는 처음 만났을 때 하마터면 ${you.name}을(를) 빨아들일 뻔했던 그 푸른 눈동자를 가리켰다.`,
          );
          await flash.say_and_wait('눈치채셨겠지만 저는 일본인이 아니에요.');
          era.printButton('「짐작은 했어.」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}의 말에 맞춰 고개를 끄덕였다.`,
          );
          await flash.say_and_wait(
            '사실 일본에서 구천 킬로미터 떨어진 독일 출신이에요.',
          );
          await flash.say_and_wait('그러니까 유학생이지요.');
          await era.printAndWait('에이신 플래시는 손가락 하나를 세웠다.');
          await flash.say_and_wait(
            `일본에 온 목적은 레이스장에서 적수가 없는 ${flash.uma_sex_title}가 되기 위해서, 그리고……`,
          );
          era.printButton('「그리고?」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            '에이신 플래시는 잠시 침묵하다 작게 한숨을 내쉬었다.',
          );
          await flash.say_and_wait(
            '조금 전 당신 앞에서 참패한 제가 이런 말을 하면 우습게 들릴지도 모르겠네요.',
          );
          await flash.say_and_wait('하지만요.');
          await era.printAndWait(
            `그때 ${you.name}은(는) ${flash.sex}의 표정이 진지해지는 것을 보았다.`,
          );
          await flash.say_and_wait(
            '영예를 쌓아서 부모님께서…… 저를 자랑스러워하시게 하고 싶어요.',
          );
          await era.printAndWait(
            `에이신 플래시는 진지하게 ${you.name}을(를) 바라보았다. 그 신념을 이 자리에서 각인시키려는 듯했다.`,
          );
          era.printButton('「그게 네 생각이구나?」', 1);
          await era.input();
          await era.printAndWait(`${you.name}은(는) 고개를 끄덕였다.`);
          await flash.say_and_wait(
            '이번 레이스에서는 졌지만, 제게는 아직 성장할 여지가 있다고 믿어요.',
          );
          await era.printAndWait(
            `${you.name}이(가) 자신의 생각을 이해한 것을 보고 에이신 플래시는 말을 이었다.`,
          );
          await flash.say_and_wait(
            '그래서 트레이너로서 경험을 쌓아 오신 당신께 지도를 부탁드리고 싶어요.',
          );
          if (ret) {
            era.printButton('「………」', 1);
            await era.input();
            await era.printAndWait(
              `그때 ${flash.sex}의 태도가 진심이라는 것은 ${you.name}도 알 수 있었다. 하지만 동시에 다른 의문이 가슴속에 떠올랐다.`,
            );
            era.printButton(
              '「그렇다면 왜 더 뛰어난 트레이너를 선택하지 않는 거야?」',
              1,
            );
            await era.input();
            await flash.say_and_wait('네?');
            await era.printAndWait(
              `${you.name}의 질문에 에이신 플래시는 분명 허를 찔린 모습이었다.`,
            );
            await flash.say_and_wait('………');
            await era.printAndWait(
              `난처한 기색이 ${flash.sex}의 얼굴에 역력히 드러났다.`,
            );
            await flash.say_and_wait('……하아.');
            await era.printAndWait(
              `몇 초 후, ${you.name}은(는) ${flash.sex}가 어쩔 수 없다는 듯 가볍게 한숨을 내쉬는 것을 보았다.`,
            );
            await flash.say_and_wait(
              '정말…… 대답하기 곤란한 질문을 하시는군요.',
            );
            await era.printAndWait('에이신 플래시는 쓴웃음을 지으며 말했다.');
            era.printButton('「미안.」', 1);
            await era.input();
            await flash.say_and_wait(
              '아니요, 사과하실 필요 없습니다. 엄밀히 말하면 전부 제 생각 때문에 일어난 일이니까요.',
            );
            await era.printAndWait(
              `${flash.sex}는 고개를 저었으나, 목소리는 조금 가라앉아 있었다.`,
            );
            await flash.say_and_wait(
              '분명 말씀하신 대로, 능력이 뛰어난 트레이너일수록 저에게 더 큰 도움이 될 겁니다.',
            );
            await flash.say_and_wait(
              '현실적인 관점에서 본다면, 이미 수년간 경력을 쌓은 노련한 트레이너를 찾아가는 게 맞겠죠.',
            );
            era.printButton('「하지만?」', 1);
            await era.input();
            await flash.say_and_wait(
              '하지만…… 아시다시피 선택이라는 건 언제나 쌍방향인 법이잖아요, 그렇죠?',
            );
            await era.printAndWait(
              '말을 하며 에이신 플래시는 고개를 돌려 운동장 한쪽에 있는 선발 레이스 순위표를 바라보았다.',
            );
            await era.printAndWait(
              `당연히 그곳에 ${flash.sex}의 이름은 없었다.`,
            );
            era.printButton(
              '「네가 원하더라도, 그들이 네 신청을 받아주지 않을 거라는 거구나.」',
              1,
            );
            era.printButton('「그럼 나는 너에게 차선책인 거야?」', 2);
            if ((await era.input()) === 1) {
              await era.printAndWait(
                `${you.name}도 ${flash.sex}의 생각을 이해하게 되었다.`,
              );
              await flash.say_and_wait('네.');
              await era.printAndWait('에이신 플래시는 고개를 끄덕였다.');
              await flash.say_and_wait(
                '경력이 오래된 트레이너일수록 안목은 더 높아지기 마련입니다.',
              );
              await flash.say_and_wait(
                '제가 선발 레이스에서 보여준 성적은 그들이 저를 선택하게 만들기에 충분하지 않다고 생각해요.',
              );
              era.printButton(
                '「그럼 너는 나를 어떻게 생각하고 있는 거야?」',
                1,
              );
              await era.input();
              await flash.say_and_wait('네?');
              await era.printAndWait(
                `${you.name}의 말에 에이신 플래시는 눈을 깜빡였다. ${flash.sex}에게는 그 『어떻게 보는가』라는 질문의 뜻이 분명했다.`,
              );
              await flash.say_and_wait('……아마 짐작하신 대로일지도 모릅니다.');
              await era.printAndWait(
                `몇 초간 고민한 끝에 ${flash.sex}는 솔직하게 털어놓았다.`,
              );
              await flash.say_and_wait(
                '당신께 제안을 드린 건, 저를 알고 있는 분이라면 제 요청을 더 쉽게 수락해 줄 거라는 이기적인 계산이 있었던 게 사실이에요.',
              );
              era.printButton('「자연스러운 생각이야.」', 1);
              await era.input();
              await flash.say_and_wait(
                '하지만 그것이 결코 요행을 바라는 마음이라는 뜻은 아닙니다. 그런 생각은 당신에게도, 저에게도 공정하지 못하니까요.',
              );
              await era.printAndWait(
                '에이신 플래시는 말을 마친 뒤 깊은 숨을 들이마셨다.',
              );
              await era.printAndWait(
                `${flash.sex}는 매우 진지한 눈빛으로 ${you.name}을(를) 바라보며, 자신의 말과 행동에 어떠한 거짓도 없음을 전달하려 했다.`,
              );
              await flash.say_and_wait(
                '제가 당신이 베테랑 트레이너로 나아가는 과정에서 꼭 필요한 「경력」의 일부가 되어드리고 싶습니다.',
              );
            } else {
              await flash.say_and_wait('………');
              await era.printAndWait(
                `조금 가시 돋친 ${you.name}의 말에 에이신 플래시는 몇 초간 침묵했다.`,
              );
              await flash.say_and_wait(
                '만약 제가 정말로 그런 무례한 생각을 인정한다면, 저 스스로를 결코 용서할 수 없을 거예요.',
              );
              await era.printAndWait(
                `마치 어떤 선을 넘은 듯, 다시 입을 연 ${flash.sex}의 표정은 매우 엄숙해져 있었다.`,
              );
              await flash.say_and_wait(
                '짐작하신 대로, 당신께 제안을 드린 데에는, 저를 알고 계시니 더 쉽게 수락해 주실 거라는 이기적인 계산도 있었던 게 사실입니다.',
              );
              await flash.say_and_wait('하지만요.');
              await era.printAndWait(
                `그때 ${you.name}은(는) ${flash.sex}의 눈동자에 날카로운 빛이 스치는 것을 보았다.`,
              );
              await flash.say_and_wait(
                '차선책이라는 그런 모욕적인 생각을 가졌다면, 저는 제 자신을 용서하지 못했을 겁니다.',
              );
              era.printButton('「……」', 1);
              await era.input();
              await era.printAndWait(
                `이토록 단호한 에이신 플래시의 태도에 ${you.name}도 인정할 수밖에 없었다.`,
              );
              era.printButton('「내가 실례했어.」', 1);
              await era.input();
              await flash.say_and_wait(
                '……결론적으로, 제 마음속에 요행이란 존재하지 않습니다. 그것은 당신에게도 저에게도 결코 공평하지 못한 생각이니까요.',
              );
              await era.printAndWait(
                `${you.name}의 사과를 듣고서야 에이신 플래시의 표정도 한결 부드러워졌다.`,
              );
              await era.printAndWait(
                `다음 순간 ${flash.sex}는 ${you.name}에게 손을 내밀었다.`,
              );
              await flash.say_and_wait(
                '그러니 부디 제가 당신이 일류 트레이너로 성장하는 데 필요한 경력의 한 페이지가 되게 해주세요.',
              );
              await era.printAndWait(
                `그렇게 말하며 ${flash.sex}는 매우 진지한 눈빛으로 ${you.name}을(를) 바라봤다. 자신의 진심에 조금도 거짓이 섞여 있지 않음을 전달하려는 듯했다.`,
              );
            }
            await flash.say_and_wait(
              `저는 당신의 담당 ${flash.uma_sex_title}가 되고 싶습니다.`,
            );
            era.printButton('「이건 조건의 교환인 거야?」', 1);
            await era.input();
            await era.printAndWait(
              `${you.name}은(는) ${flash.sex}에게 물었다.`,
            );
            await flash.say_and_wait(
              '아니요, 순수하게 저의 개인적인 간청입니다.',
            );
            era.printButton('「그렇구나.」', 1);
            await era.input();
            await era.printAndWait(
              `이제 ${you.name}은(는) 에이신 플래시의 말에 담긴 각오를 이해했다. 그렇다면 이 상황에서 ${you.name}의 선택은:`,
            );
          } else {
            await era.printAndWait(
              `그때 ${flash.sex}의 태도가 진심이라는 것을 ${you.name}은(는) 느낄 수 있었다. 그래서, `,
            );
          }
          break;
        case 3:
          await era.printAndWait(
            `${you.name}은(는) 수년간 트레이너로 일하며 경험을 쌓았고, 예전에 좋은 성적을 내는 ${flash.uma_sex_title}를 여러 명 육성한 적도 있다고 말했다.`,
          );
          await flash.say_and_wait(
            '그 말은 즉, 당신은 수년간 종사해 온 베테랑 트레이너라는 말씀이신가요?',
          );
          await era.printAndWait(
            `${you.name}의 대답을 듣고, 에이신 플래시는 가볍게 숨을 내뱉었다.`,
          );
          await flash.say_and_wait('그렇다면, 별 문제 없겠군요.');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}의 혼잣말을 듣고, 무엇이 문제 없다는 것인지 막 물어보려던 참이었다.`,
          );
          await flash.say_and_wait('저기, 저의 트레이너가 되어주시겠어요?');
          era.printButton('「에?」', 1);
          await era.input();
          await era.printAndWait(
            `다음 순간 ${you.name}은(는) ${flash.sex}가 건넨 말에 깜짝 놀라고 말았다.`,
          );
          await flash.say_and_wait(
            '이 요청으로 당신이 곤란해지실 수도 있겠죠. 저도 너무 갑작스럽다는 건 알고 있습니다.',
          );
          await era.printAndWait(
            `${you.name}의 표정을 본 ${flash.sex}의 말투에는 미안함이 섞여 있었다.`,
          );
          era.printButton('「왜 나를 선택한 거야?」', 1);
          era.printButton('「알겠어. 앞으로 서로의 담당이 되는 거네.」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `에이신 플래시의 갑작스러운 제안에 ${you.name}은(는) 당황했다. 하지만 그보다 왜 자신에게 말을 걸었는지가 궁금했다.`,
            );
            await flash.say_and_wait(
              '이유 말씀이시군요. 그렇네요. 이유는 필요하겠지요.',
            );
            await era.printAndWait(
              `${you.name}의 질문을 듣고 에이신 플래시는 몇 초 동안 생각했다.`,
            );
          } else {
            await era.printAndWait([
              '오늘 선발 레이스를 보러 온 목적은 새로운 담당 ',
              flash.uma_sex_title,
              '를 찾는 것이었다. 그래서 ',
              you.get_colored_name(),
              '은(는) 주저 없이 받아들였다.',
            ]);
            await flash.say_and_wait(
              '……정말 흔쾌히 받아들이시는군요. 제가 왜 갑자기 부탁드렸는지 궁금하지 않으신가요?',
            );
            era.printButton('「궁금하긴 하지만, 일단 먼저 받아들인 거야.」', 1);
            await era.input();
            await flash.say_and_wait('후훗.');
            await era.printAndWait(
              `${you.name}의 대답을 듣고 에이신 플래시는 작게 웃었다.`,
            );
            await flash.say_and_wait(
              '제게는 고마운 이유예요. 하지만 그런 사고방식은 조금 위험하다고 생각해요.',
            );
            await era.printAndWait(
              `${flash.sex}는 그렇게 말하며 고개를 저었다.`,
            );
            await flash.say_and_wait(
              '부디 제 이유를 들으신 뒤에 판단해 주세요.',
            );
          }
          await era.printAndWait(
            `이어서 ${flash.sex}는 처음 만났을 때 하마터면 ${you.name}을(를) 빨아들일 뻔했던 그 푸른 눈동자를 가리켰다.`,
          );
          await flash.say_and_wait('눈치채셨겠지만 저는 일본인이 아니에요.');
          era.printButton('「짐작은 했어.」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name}은(는) ${flash.sex}의 말에 맞춰 고개를 끄덕였다.`,
          );
          await flash.say_and_wait(
            '사실 일본에서 구천 킬로미터 떨어진 독일 출신이에요.',
          );
          await flash.say_and_wait('그러니까 유학생이지요.');
          await era.printAndWait('에이신 플래시는 손가락 하나를 세웠다.');
          await flash.say_and_wait(
            `일본에 온 목적은 레이스장에서 적수가 없는 ${flash.uma_sex_title}가 되기 위해서, 그리고……`,
          );
          era.printButton('「그리고?」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            '에이신 플래시는 잠시 침묵하다 작게 한숨을 내쉬었다.',
          );
          await flash.say_and_wait(
            '조금 전 당신 앞에서 참패한 제가 이런 말을 하면 우습게 들릴지도 모르겠네요.',
          );
          await flash.say_and_wait('하지만요.');
          await era.printAndWait(
            `그때 ${you.name}은(는) ${flash.sex}의 표정이 진지해지는 것을 보았다.`,
          );
          await flash.say_and_wait(
            '영예를 쌓아서 부모님께서…… 저를 자랑스러워하시게 하고 싶어요.',
          );
          await era.printAndWait(
            `에이신 플래시는 진지하게 ${you.name}을(를) 바라보았다. 그 신념을 이 자리에서 각인시키려는 듯했다.`,
          );
          era.printButton('「그게 네 생각이구나?」', 1);
          await era.input();
          await era.printAndWait(`${you.name}은(는) 고개를 끄덕였다.`);
          await flash.say_and_wait(
            '이번 레이스에서는 졌지만, 제게는 아직 성장할 여지가 있다고 믿어요.',
          );
          await era.printAndWait(
            `${you.name}이(가) 자신의 생각을 이해한 것을 보고 에이신 플래시는 말을 이었다.`,
          );
          await flash.say_and_wait(
            '그러니 오랫동안 트레이너로 일해 오신 당신께 지도를 부탁드리고 싶어요.',
          );
          await era.printAndWait(
            `말을 마친 ${flash.sex}는 ${you.name}에게 고개를 숙여 정중히 부탁했다.`,
          );
          await era.printAndWait(`이 상황에서 ${you.name}의 행동은——`);
      }
      era.printButton('「알겠어. 함께 힘내자.」 (영입 성공)', 1);
      era.printButton(
        '「미안해. 내 능력은 네 생각만큼 뛰어나지 않아. 다른 사람을 찾아봐.」 (영입을 그만둔다)',
        2,
      );
      ret = (await era.input()) === 1;
    }
    return ret;
  },
};
