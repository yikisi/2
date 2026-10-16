/**
 * @file マンハッタンカフェ - 恋慕
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async 49(coffee, you) {
    await coffee.print_and_wait([
      '어느 날 밤, ',
      coffee.get_colored_name(),
      '는 평소와 다른 꿈을 꾸었다.',
    ]);
    await coffee.print_and_wait([
      '꿈속의 자신은…… ',
      you.get_colored_actual_name(),
      '과(와) 차마 입에 담을 수 없는 일을 하고 있었다……',
    ]);
    await coffee.print_and_wait([
      '멋대로 떠올리지 말라며 ',
      coffee.get_colored_name(),
      '는 얼굴을 붉혔다. 두 손은 조금 욱신거리는 아랫배를 쓰다듬다가 잠옷 안으로 파고들었다.',
    ]);
    if (you.sex_code === 1) {
      await coffee.say_and_wait('트레이너…… 씨……');
    } else {
      await coffee.say_and_wait('트레이너…… 씨……');
    }
    if (coffee.sex_code === 0) {
      await coffee.print_and_wait(
        '입으로는 꿈속의 사람을 중얼거리며, 중지와 검지는 쉴 새 없이 음핵 위에 원을 그렸다. 환상 속의 커다란 손에 부드럽게 문질러져 이미 흥분한 젖꼭지는 붉게 부어올랐다.',
      );
      await coffee.print_and_wait([
        '거친 숨소리와 함께, ',
        coffee.get_colored_name(),
        '는 절정에 도달했다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async '74-1'(coffee, you, callname) {
    await coffee.print_and_wait([
      '어느 날 오후, ',
      coffee.get_colored_name(),
      '는 트레이닝으로 지쳐 쓰러진 뒤 기숙사로 옮겨져 쉬고 있었다.',
    ]);
    await coffee.print_and_wait([
      '아무도 없는 기숙사에서 ',
      coffee.get_colored_name(),
      '는 문득 외로움을 느꼈다.',
    ]);
    await coffee.say_and_wait(['지금 ', callname, '이(가) 곁에 있어 준다면……']);
    await coffee.print_and_wait([
      '쓰러진 뒤라 마음이 약해진 걸까, 혼자 있기 때문일까. 평소보다 솔직한 마음이 ',
      coffee.get_colored_name(),
      '의 입에서 새어 나와 텅 빈 기숙사에 흩어졌다.',
    ]);
    await coffee.print_and_wait(
      '언제부터 혼자 있는 것이 이렇게 무서워진 걸까……',
    );
    await coffee.print_and_wait([
      '말로 표현하기 어려운 감각이었다. 하지만 ',
      coffee.get_colored_name(),
      '는 자신과 ',
      you.get_colored_actual_name(),
      '의 관계가 조금 특별하다는 것을 어렴풋이 깨닫고 있었다.',
    ]);
    era.println();
    era.printButton(`「보고 싶어요, ${callname}……」（관계 진전）`, 1);
    era.printButton('「기분 탓이야……」（진전 보류）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await coffee.print_and_wait([
        '눈을 감았다. 잠들면 지금의 혼란과 외로움도 사라질 것 같았다. 하지만 ',
        you.get_colored_actual_name(),
        '의 얼굴이 유령처럼 눈앞의 어둠 속으로 떠올랐다.',
      ]);
      await coffee.print_and_wait([
        '잠들 수가 없다. 진정되지 않는다. 생각해 보면 ',
        you.get_colored_actual_name(),
        '과(와) 만난 뒤로, 마음속은 늘 그 사람으로 가득했다.',
      ]);
      await coffee.say_and_wait([
        '저는 ',
        callname,
        '을(를) 좋아하게 된 걸까요……',
      ]);
      await coffee.print_and_wait([
        '그 말이 입 밖으로 나오자 모든 것이 들어맞는 듯했다. 가슴 깊은 곳에서 솟은 온기가 ',
        coffee.get_colored_name(),
        '의 온몸을 가득 채웠다.',
      ]);
      await coffee.print_and_wait([
        you.sex,
        '와 만난 뒤 나눈 말 한마디 한마디, 곁에서 보낸 순간 하나하나가 이제 새로운 의미를 갖게 되었다.',
      ]);
      if (era.get('cflag:25:育成回合计时') < 96) {
        await coffee.print_and_wait(
          '아직은 혼자 중얼거릴 뿐이지만, 이 분명한 연심은 언젠가 꽃피리라.',
        );
        await coffee.print_and_wait('언젠가……');
        await era.printAndWait([
          '（',
          coffee.get_colored_name(),
          '가 이 마음을 진지하게 생각하는 것은 시니어급에 들어선 뒤가 될 듯하다……）',
        ]);
      } else {
        await coffee.print_and_wait('꽃이 피었어요……');
      }
    } else {
      await coffee.print_and_wait(
        '마음이 약해졌을 때 떠오르는 두서없는 망상일 뿐이야……',
      );
      await coffee.print_and_wait([
        '억지로 생각을 멈추고, ',
        coffee.get_colored_name(),
        '는 천천히 꿈속으로 가라앉았다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async '74-2'(coffee, you, callname) {
    await coffee.say_and_wait([callname, ', 오늘 밤 시간 있으세요……?']);
    await era.printAndWait([
      '어느 날, ',
      coffee.get_colored_name(),
      '가 드물게 먼저 ',
      you.get_colored_name(),
      '에게 함께 외출하자고 했다.',
    ]);
    era.println();
    era.printButton('「응, 시간 있어. 뭐 하고 싶어?」（관계 진전）', 1);
    era.printButton('「미안, 오늘 밤은 좀……」（진전 보류）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '승낙을 받고도 ',
        coffee.get_colored_name(),
        '는 잠시 망설였다.',
      ]);
      await coffee.say_and_wait([
        '가 보고 싶은 곳이 있어요…… ',
        callname,
        '과(와) 함께 보고 싶어서요……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '길 잃은 아이처럼, 어쩐지 기분이 좋아 보이는 ',
        coffee.get_colored_name(),
        '에게 손을 이끌려 여러 골목과 거리를 지나자 눈에 잘 띄지 않는 작은 가게가 나타났다.',
      ]);
      await era.printAndWait(
        '누렇게 바랜 유리 너머로 오래된 식기와 갖가지 도구가 진열된 모습이 보였다.',
      );
      era.printButton('「커피 내리는 도구도 있네…… 골동품 가게인가.」', 1);
      await era.input();
      await coffee.say_and_wait('네…… 우연히 발견했어요. 재미있는 곳이라서……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '를 따라 가게 안으로 들어갔다. 지키는 사람 없이 운영되는 작은 무인 점포인 듯했다. 안은 제법 정돈되어 있었고, 정기적으로 청소하는 흔적이 보였다.',
      ]);
      await coffee.say_and_wait(
        '여기는 사람들이 별로 오지 않아요…… 저는 가끔 구경하러 와요.',
      );
      await era.printAndWait([
        '확실히 ',
        coffee.get_colored_name(),
        '가 좋아할 만한 곳이다. 독특한 디자인의 커피잔, 로코코풍 주전자. 아무도 없는 오후, 검은 머리의 ',
        coffee.teen_sex_title,
        '가 홀로 진열대 사이를 걸으며 때로는 물건을 살며시 들어 살펴보고, 때로는 허리를 숙인 채 멈춰 서 있는 모습. 햇살이 유리를 통해 가게 안 가득 쏟아져 모든 것을 꿈결 같은 금빛으로 물들이는——그런 광경이 눈에 선했다.',
      ]);
      await coffee.say_and_wait([
        '……하지만 ',
        callname,
        '과(와) 단둘이 오는 건 처음이에요……',
      ]);
      await era.printAndWait([
        '어느새 ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 바로 앞까지 다가와 있었다. 붉게 물든 단정한 얼굴이 시야의 대부분을 채웠다.',
      ]);
      await coffee.say_and_wait(['……', callname, ', 저는——']);
      await you.say_as_passer_by_and_wait('팬 A', [
        '앗, 정말 ',
        coffee.get_colored_name(),
        '다! 들어가자!',
      ]);
      await you.say_as_passer_by_and_wait(
        '팬 B',
        '우와, 가까워! 데이트 중인가?',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 말은 갑작스러운 목소리에 끊겼다. 돌아보니 ',
        coffee.get_colored_name(),
        '를 알아본 팬 두 명이 가게에 들어와 있었다. 그 목소리에 거리의 사람들이 관심을 보였고, 이대로라면 더 많은 사람이 들어올 것 같았다……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '도 굳어 버린 채 가게 입구를 향해 우두커니 서 있었다.',
      ]);
      await you.say_as_passer_by_and_wait('팬 A', '얼굴 빨개졌어!');
      await you.say_as_passer_by_and_wait('팬 B', [
        '사랑에 빠진 ',
        coffee.teen_sex_title,
        '의 얼굴이잖아!',
      ]);
      era.printButton('「두 분! 지금은 개인적인 시간이니 부디——」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 말을 마치기도 전에, ',
        coffee.get_colored_name(),
        '가 갑자기 ',
        you.get_colored_name(),
        '의 손을 힘껏 잡아당겼다.',
      ]);
      era.printButton('「어!? 왜, 왜 그래, 카페?」', 1);
      await era.input();
      await coffee.say_and_wait('……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 물음에 대답하지 않았다. 가게 안팎에서 말을 걸려는 팬들도 무시한 채 억지로 ',
        you.get_colored_name(),
        '을(를) 데리고 밖으로 나갔다.',
      ]);
      await era.printAndWait([
        '그리고 또다시 길 잃은 아이처럼 ',
        coffee.get_colored_name(),
        '에게 손을 잡힌 채 달려야 했다.',
      ]);
      era.drawLine();
      await era.printAndWait('도착한 곳은 상점가 구석의 골목이었다.');
      await era.printAndWait(
        '상점가의 가게들은 대부분 낮에만 문을 연다. 멀리 있는 선술집을 제외하면, 이곳에는 사람이 거의 없었다.',
      );
      era.printButton('「왜 그래, 카페……」', 1);
      await era.input();
      await era.printAndWait([
        '손에 이끌려 뛰어온 숨을 고를 무렵, 곁의 ',
        coffee.get_colored_name(),
        '는 한동안 고개를 숙인 채였다.',
      ]);
      await coffee.say_and_wait('……전부 당신 때문이에요……');
      await era.printAndWait('잠시 뒤, 조금 떨리는 목소리가 들려왔다.');
      await coffee.say_and_wait(
        '저는 눈에 띄지 않아요…… 아무도 제 존재 같은 건 신경 쓰지 않죠……',
      );
      await coffee.say_and_wait('그런데 당신을 만나 버렸어요.');
      await coffee.say_and_wait('어느새 마음이 당신에게 끌리고 있었어요.');
      await coffee.say_and_wait(
        '저라는 존재가 당신의 존재로 가득 차서, 부풀어 버렸어요.',
      );
      era.println();
      await coffee.say_and_wait('원래는 혼자서도 잘 지낼 수 있었어요.');
      await coffee.say_and_wait('친구가 있었으니까요.');
      era.println();
      await coffee.say_and_wait('그러다 당신이 곁에 왔어요.');
      await coffee.say_and_wait(
        '견딜 수 있었던 외로움이 점점 마음을 파고드는 독이 되었어요.',
      );
      era.println();
      await coffee.say_and_wait(
        '겨우 용기를 내서 당신과 단둘이 있을 수 있는 곳을 찾았는데…… 그것마저 빼앗기고……',
      );
      await coffee.say_and_wait('저는…… 어떻게 해야 하나요……');
      await era.printAndWait(
        '연심을 깨달은 날부터 가슴 깊이 묻어 둔 마음이 이제 흘러넘쳤다.',
      );
      await era.printAndWait([
        you.get_colored_actual_name(),
        '을(를) 향한 그리움만이 아니었다. 주위에 침범당하는 것에 대한, 한 번도 느껴 본 적 없는 짜증과 혼란이었다.',
      ]);
      await era.printAndWait('불안한 눈물이 눈가에서 한 방울씩 떨어졌다.');
      await era.printAndWait([
        '그런 ',
        coffee.get_colored_name(),
        '를 보며 ',
        you.get_colored_name(),
        '은(는) 앞으로 다가갔다.',
      ]);
      era.printButton('「카페.」', 1);
      await era.input();
      await coffee.say_and_wait('……네?');
      await era.printAndWait([
        '눈가가 붉어진 채, ',
        coffee.get_colored_name(),
        '는 고개를 들어 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.printButton(
        '「지금 여기에는 나와 카페, 둘뿐이야…… 이제 도망가지 않을 거지?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '그 말을 듣고 ',
        coffee.get_colored_name(),
        '는 무심코 주위를 둘러보았다가, 곧 자신이 엉뚱한 행동을 했음을 깨달았다. 시선을 돌려 ',
        you.get_colored_name(),
        '에게 고개를 끄덕였다.',
      ]);
      era.printButton(
        '「카페는 계속 그렇게 생각하고 있었구나…… 알아차리지 못한 내 잘못이야.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('아…… 아앗……!?');
      await era.printAndWait([
        '이제야 자신이 감정에 휩쓸려 무슨 말을 했는지 깨달은 모양이었다. 가슴속 비밀을 스스로 털어놓은 뒤, ',
        coffee.get_colored_name(),
        '는 「사랑에 빠진 ',
        coffee.teen_sex_title,
        '의 얼굴」로 ',
        you.get_colored_name(),
        '을(를) 올려다볼 수밖에 없었다.',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, 몇 가지 물어봐도 될까?」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait('……네.');
      era.printButton('「나와 함께 있으면 즐거워?」', 1);
      await era.input();
      await coffee.say_and_wait('……네.');
      era.printButton('「그럼, 나와 함께 있으면 행복해?」', 1);
      await era.input();
      await coffee.say_and_wait('……행복해요.');
      await era.printAndWait([
        '마지막으로 마음을 굳힌 듯 ',
        you.get_colored_name(),
        '은(는) 숨을 깊이 들이마셨다.',
      ]);
      era.println();
      era.printButton(
        '「……조금 자만하는 걸지도 몰라. 처음부터 네 도움에 기대기만 했고」',
        1,
      );
      era.printButton('「그 뒤에도 여러 일이 있었지만, 그래도……」', 2);
      era.printButton('「이런 나와 사귀어 줄래?」', 3);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 표정은 아직 꿈에서 깨어나지 못한 듯했다. 하지만 살짝 드러난 기색만으로도 답은 알 수 있었다——',
      ]);
      await era.printAndWait('갑자기.');
      era.printButton('「우왓!?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 무릎에 무언가 부딪혀 무릎을 꿇고 말았다.',
      ]);
      await coffee.say_and_wait('꺅!?');
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 등에도 무언가 부딪혀 몸이 앞으로 기울었다.',
      ]);
      await era.printAndWait('그렇게 두 사람의 그림자가 겹쳤다.');
      await era.printAndWait([
        you.get_colored_name(),
        '＆',
        coffee.get_colored_name(),
        ' 「……읍……!?」',
      ]);
      await era.printAndWait('서로의 입술이 겹쳤다.');
      await era.printAndWait([
        '십여 초 뒤, ',
        coffee.get_colored_name(),
        '의 얼굴이 놀라서 굳어 있던 ',
        you.get_colored_name(),
        '에게서 떨어졌다.',
      ]);
      await coffee.say_and_wait([
        '……친구의 장난이라니, 정말…… 하지만 이게 제 대답이에요, ',
        callname,
        '……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 입술에서 늘어진 실을 뜨거운 손끝으로 닦아 냈다.',
      ]);
      await coffee.say_and_wait(
        '조금 자만한다니…… 그런 말도 할 줄 아시는군요……',
      );
      await era.printAndWait([
        '작게 중얼거리며 ',
        coffee.get_colored_name(),
        '는 당신의 가슴에 몸을 기댔다.',
      ]);
      await coffee.say_and_wait('맞아요, 당신이에요.');
      await coffee.say_and_wait('혼자서도 충분했던 저를.');
      await coffee.say_and_wait('이렇게 미치게 만든 건.');
      era.println();
      await coffee.say_and_wait(
        '이제…… 도망가겠다고 해도…… 저는 허락하지 않아요……',
      );
      await era.printAndWait([
        '그렇게 말하며 ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 옷을 꽉 움켜쥐었다.',
      ]);
      era.printButton('「……도망가지 않을게.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.sex,
        '와 만난 뒤로는, 이미 돌아갈 길 따위 없었다.',
      ]);
      await coffee.say_and_wait('그럼…… 앞으로 잘 부탁드려요.');
      await era.printAndWait('아무도 없는 골목.');
      await era.printAndWait('지금은 누구도 들어올 수 없는 두 사람만의 공간.');
      await coffee.say_and_wait(
        '……누구에게도 빼앗기지 않도록…… 표시를 남길까요……?',
      );
      era.printButton('「어떤 표시?」', 1);
      await era.input();
      await coffee.say_and_wait('……이렇게요……');
      await era.printAndWait(
        '이번에는 누군가의 장난이 아니라 두 사람 자신의 의지였다.',
      );
      await era.printAndWait(
        '두 손으로 목 뒤를 감싸고 천천히 얼굴을 가까이했다.',
      );
      await coffee.say_and_wait('……이제 아무에게도 빼앗기지 않을 거예요……');
      await era.printAndWait('깨물듯 달콤하게 입을 맞췄다.');
      await era.printAndWait('또다시 십여 초 동안 그 기분 좋은 시간에 잠겼다.');
    } else {
      await era.printAndWait([
        '조금 풀이 죽은 ',
        coffee.get_colored_name(),
        '를 보고 ',
        you.get_colored_name(),
        '은(는) 「다음에는 꼭」이라며 ',
        coffee.sex,
        '에게 약속할 수밖에 없었다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async 89(coffee, you, callname) {
    await era.printAndWait([
      '어느 날, ',
      you.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '는 평소처럼 트레이너실에서 일과를 보내고 있었다.',
    ]);
    await era.printAndWait([
      '갑자기 코끝을 스치는 커피 향기와 함께, ',
      coffee.get_colored_name(),
      '가 어느샌가 다가와 무릎 위에 올라앉았다.',
    ]);
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 무언가 마음을 다잡는 듯 말없이 ',
      you.get_colored_name(),
      '의 가슴에 얼굴을 묻고 비볐다. 하얀 바보털이 목을 간질였다.',
    ]);
    await era.printAndWait([
      '잠시 뒤, 무언가에 콕 찔린 듯 ',
      coffee.get_colored_name(),
      '가 ',
      you.get_colored_name(),
      '의 품에서 펄쩍 뛸 듯하더니, 고개를 들어 똑바로 ',
      you.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await coffee.say_and_wait([
      callname,
      ', 아니, ',
      you.get_colored_actual_name(),
      '…… 저와 결혼해 주실래요?',
    ]);
    era.printButton('「안 돼.」（관계 진전）', 1);
    era.printButton('「우리에게는…… 아직 좀 이른 것 같아.」（진전 보류）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '의 단호한 거절에 품 안의 ',
        coffee.get_colored_name(),
        '는 순간 굳어 버렸다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 반응에도 아랑곳하지 않고, ',
        you.get_colored_name(),
        '은(는) 재빨리 옆의 서랍을 열어 진작 준비해 둔 물건을 꺼냈다.',
      ]);
      era.printButton('「청혼은 내가 먼저 해야지.」', 1);
      await era.input();
      await era.printAndWait([
        '손안의 작은 상자를 열어 ',
        coffee.get_colored_name(),
        '에게 보여주었다.',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, 나와 결혼해 줄래?」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '반지가 조명 아래에서 반짝였고, ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 대답을 기다렸다.',
      ]);
      await coffee.say_and_wait('……정말 심술궂은 사람이네요.');
      await era.printAndWait([
        '「쿵」 소리와 함께 ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 의자째 바닥에 밀어 넘어뜨렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 반응하기도 전에, ',
        coffee.get_colored_name(),
        '는 몸을 붙이고 조금 세게 ',
        you.get_colored_name(),
        '의 입술을 깨물었다.',
      ]);
      await era.printAndWait(
        '배어 나온 피가 두 사람의 타액과 섞여 입안에서 달콤 쌉싸름한 쇠맛이 감돌았다.',
      );
      await coffee.say_and_wait(
        '……무슨 『청혼은 내가 먼저 해야지』 인가요…… 자신이 아주 멋있다고 생각하나 보죠?',
      );
      await era.printAndWait([
        '피의 달큰함이 섞인 입맞춤을 마친 뒤에도, ',
        coffee.get_colored_name(),
        '는 쉬지 않고 ',
        you.get_colored_name(),
        '의 소매를 걷어 팔에 자신의 잇자국을 남겼다.',
      ]);
      await era.printAndWait([
        '그 후에도 목과 쇄골 주위를 ',
        coffee.get_colored_name(),
        '가 끊임없이 빨아들이며 수많은 붉은 반점을 남겼다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게 눌려 누운 ',
        you.get_colored_name(),
        '은(는) 말없이 눈을 감고 ',
        coffee.get_colored_name(),
        '의 감정이 쏟아지는 것을 받아들였다.',
      ]);
      await coffee.say_and_wait(
        '당신은 제 것이에요…… 당신의 입장…… 앞으로의 시간 동안 제가 잘 교육해 드릴게요……',
      );
      era.printButton('「……기대하고 있을게.」', 1);
      await era.input();
      await era.printAndWait(
        '한쪽 구석에서 제 역할을 다하지 못한 반지가 두 사람의 모습을 비추며 이 특별한 서약을 기록하고 있었다.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 청혼을 거절하자마자 조심스럽게 ',
        coffee.sex,
        '의 표정을 살폈다. 거절 때문에 ',
        coffee.sex,
        '의 얼굴에 그늘이 질까 두려워하는 듯했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 예상과 달리, ',
        coffee.get_colored_name(),
        '의 얼굴에는 실망이나 낙담이 떠오르지 않았다.',
      ]);
      await coffee.say_and_wait([
        '저는 ',
        you.get_colored_actual_name(),
        '을(를) 믿어요…… 준비가 되는 날까지 기다릴게요.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async 99(coffee, callname) {
    await coffee.say_and_wait('저 사람은……');
    await coffee.print_and_wait([
      '어느 날 훈련이 끝난 후, ',
      coffee.get_colored_name(),
      '는 깜빡한 물건을 찾으러 트레이닝실로 돌아왔다.',
    ]);
    await coffee.print_and_wait([
      '문을 두드리려던 찰나, 안에서 낯선 성별의 목소리가 들려왔다. ',
      coffee.phy_sex_title,
      '의 목소리였다.',
    ]);
    await coffee.print_and_wait([
      '문에 살며시 귀를 대자, ',
      coffee.uma_sex_title,
      '의 뛰어난 청각에 이 평범한 문은 없는 것이나 다름없었다.',
    ]);
    await coffee.say_and_wait([
      '낯선 ',
      coffee.phy_sex_title,
      '. 모르는 사람이 ',
      callname,
      '의 옆에 앉아서 편하게 수다를 떨고 있어……',
    ]);
    await coffee.print_and_wait('——내 소중한 것이 빼앗길지도 몰라.');
    await coffee.print_and_wait(
      '당장 들어가서 따지고 싶은 충동을 억누르며 심호흡을 했다. 그리고 누가 지나가다 이런 이상한 모습을 보면 어쩌나 하는 걱정은 접어둔 채 계속해서 엿들었다.',
    );
    era.drawLine();
    await coffee.say_and_wait([
      '결국 ',
      callname,
      '의 후배였구나…… 게다가 내 팬이라니……',
    ]);
    await coffee.print_and_wait([
      '스토커처럼 문밖에서 15분 동안 엿들은 뒤에야 ',
      coffee.get_colored_name(),
      '는 겨우 안도의 한숨을 내쉬었다. 동시에 자신의 과잉 반응에 대해 약간의 민망함을 느꼈다.',
    ]);
    await coffee.print_and_wait('떠나려던 순간, 갑자기 머리를 콩 하고 맞았다.');
    await coffee.say_and_wait(
      '……감정이 너무 무겁다니 무슨 소리야, 매번 갑자기 때리지 마……',
    );
    await coffee.print_and_wait([
      '——하지만 ',
      callname,
      '이(가) 언젠가 나를 떠나갈지도 모른다고 생각하면……',
    ]);
    await coffee.print_and_wait(
      '심장이 꽉 조여오는 것 같고 가슴 한구석이 아릿해.',
    );
    await coffee.print_and_wait('그저 생각만 해도 이렇게 되다니……');
    await coffee.say_and_wait([
      '아무래도 나, 정말로 무거운 사람인 걸까……',
      coffee.sex_code === 1
        ? ' 정말 집착이 심한 남자'
        : ' 정말 집착이 심한 여자',
      '인 걸까요, 저는……',
    ]);
  },
};
