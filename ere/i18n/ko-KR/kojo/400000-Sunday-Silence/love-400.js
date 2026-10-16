/**
 * @file サンデーサイレンス - 恋慕
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '애욕';
    /**
     * @param {CharaTalk} silence サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (silence, you, callname) => {
      await silence.print_and_wait([
        silence.get_colored_name(),
        '는 자신의 침대에 누워, 가슴에 손을 얹은 채 점점 거칠어지는 숨을 내쉬고 있다.',
      ]);
      await silence.say_and_wait([
        '어째서지? ',
        callname,
        ', 왜 난 이 타이밍에 네 생각이 나는 걸까?',
      ]);
      await silence.print_and_wait([
        '분명 지금쯤 푹 자둬야 내일 훈련할 체력을 비축할 텐데, ',
        silence.get_colored_name(),
        '의 얼굴에는 ',
        silence.sex,
        ' 자신조차 이해할 수 없는 표정이 떠올랐다.',
      ]);
      await silence.say_and_wait(
        '나도 누군가를…… 이렇게 그리워할 수 있는 건가?',
      );
      await silence.print_and_wait(
        '심장이 격렬하게 뛴다. 창밖의 밝은 달을 보며 씁쓸한 미소를 지었다.',
      );
      await silence.say_and_wait(
        '벌써부터 밤이 오는 게 초조해지기 시작했어. 하지만 왜일까…… 너랑 같이 있는 게 너무 좋아서…… 떨어지고 싶지 않아서 그런 걸까?',
      );
      await silence.print_and_wait([
        silence.sex,
        '의 손은 어느새 더욱 은밀한 곳으로 향했다. ',
        silence.get_colored_name(),
        '은(는) 일찍이 ',
        you.get_colored_actual_name(),
        '의 품에 안겨 본 적이 있다. 이 순간, ',
        silence.sex,
        '조차 알아차리지 못한 씨앗이 서서히 뿌리를 내리기 시작했다.',
      ]);
      await silence.say_and_wait([
        '후우…… 하아…… 내일 훈련도 있는데…… ',
        silence.name,
        ', 넌 정말 구제불능인 바보야.',
      ]);
      if (silence.sex_code !== 1) {
        await silence.print_and_wait([
          '상의 단추를 풀고 꽃봉오리처럼 붉은 유두를 집었다. 다른 손으로는 촉촉해지기 시작한 입구를 가볍게 문질렀다. ',
          silence.get_colored_name(),
          '은(는) 쾌감에 몸을 맡겼다.',
        ]);
      }
      await silence.print_and_wait([
        silence.get_colored_name(),
        '의 낮게 억눌린 신음소리가 점차 잦아든 후.',
      ]);
      await silence.say_and_wait([
        '시트까지 조금 젖어 버렸네. 그래도…… 조금은 편해졌어. 3관 ',
        silence.uma_sex_title,
        '가 되기 전에는 이런 마음을 품으면 안 되는데. 그런데도…… ',
        you.sex,
        '를 잊을 수가 없어.',
      ]);
      await silence.say_and_wait(
        '안 돼…… 지금 시기에, 벌써 이런 때가 왔는데, 우리의 소원을 위해서라도 절대 한눈팔아선 안 돼……',
      );
      await silence.print_and_wait([
        '그렇게 중얼거리며, ',
        silence.get_colored_name(),
        '는 스스로의 볼을 꼬집고는 이부자리를 대충 정리한 뒤 눈을 감았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-title': (silence) => [silence.name, '의 사랑'],
  /**
   * @param {CharaTalk} silence サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async '74-3crown-a'(silence, you, callname) {
    await silence.say_and_wait([callname, '……할 말이 있어.']);
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 아무 말 없이 ',
      you.get_colored_name(),
      '의 손을 잡고, 처음 만났던 그 작은 숲으로 들어갔다.',
    ]);
    await era.printAndWait([
      silence.sex,
      '가 3관을 달성한 경주 ',
      silence.uma_sex_title,
      '가 된 뒤로, ',
      you.get_colored_name(),
      '은(는) ',
      silence.sex,
      '의 마음가짐이 조금 달라졌다는 것을 어렴풋이 느끼고 있었다.',
    ]);
    await silence.say_and_wait('나…… 너한테 전하고 싶은 말이 있어.');
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 선뜻 말을 꺼내지 못했다.',
    ]);
    await era.printAndWait([
      '윤기 어린 입술이 열렸다 닫히기를 반복하자, ',
      you.get_colored_name(),
      '은(는) 최악의 상황을 상상하기 시작했다.',
    ]);
    era.printButton('「너…… 은퇴하려는 건 아니지?」', 1);
    await era.input();
    await silence.say_and_wait(
      '그럴 리가 없잖아!! 우리의 레이스는 이제 막 시작됐는걸?',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 난처한 듯 받아쳤다. 하지만 ',
      silence.sex,
      '의 긴장은 조금 풀린 모양이었다. 깊게 숨을 들이쉬고는 다시 입을 열었다.',
    ]);
    await silence.say_and_wait([callname, ', 나랑 사귀어 줘!!']);
    era.printButton('「뭐…… 뭐라고?」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 자신의 귀를 의심했다. 훈련과 레이스 외에는 거의 관심을 두지 않던 ',
      silence.get_colored_name(),
      '이(가) 사귀자고 한 것이다.',
    ]);
    era.printButton('받아들인다(관계를 진전시킨다)', 1);
    era.printButton('일단 거절한다(아직 진전시키지 않는다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('알았어. 그럼…… 잘 부탁해…… 내 연인.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그렇게 말하면서도 그 호칭이 아직 낯설게 느껴졌다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        silence.sex,
        ' 쪽이 ',
        you.get_colored_name(),
        '보다도 더 수줍어했다. 늘 잔잔하던 얼굴은 이제 붉게 물들어 있었고, ',
      ]);
      await era.printAndWait([
        '흔들리는 시선과 가만있지 못하는 꼬리는 ',
        silence.sex,
        '가 겉보기만큼 침착하지 못하다는 걸 보여 주었다.',
      ]);
      await silence.say_and_wait([
        '자…… 잘 부탁해. 연인으로서 할 일은 제대로 할게. ',
        callname,
        '……이젠 네 곁을 떠날 수 없을 것 같아.',
      ]);
      await era.printAndWait([
        silence.sex,
        '는 ',
        you.get_colored_name(),
        '을(를) 끌어안고, 두 손으로 얼굴을 감싸 입을 맞췄다. ',
        silence.sex,
        '의 입맞춤은 서툴렀다. 대뜸 ',
        you.get_colored_name(),
        '의 입술을 깨물어 상처를 내고 말았다.',
      ]);
      await era.printAndWait([
        '그런데도 둘은 아무 말 없이 작은 숲에서 서로를 끌어안았다. 누군가 다가오는 기척이 들리자, 닭을 훔치다 들킨 족제비처럼 허둥지둥 달아났다.',
      ]);
    } else {
      await you.say_and_wait(
        '그게…… 미안해. 우리 둘 다 조금 더 생각해 보는 게 좋겠어.',
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '은(는) 그 말을 듣자 금방이라도 울 것 같은 표정이 되었다. ',
        silence.sex,
        '는 애써 눈을 가늘게 뜨고 고개를 숙여 ',
        you.get_colored_name(),
        '에게 얼굴을 보이지 않은 채, 말없이 고개를 끄덕였다.',
      ]);
      await silence.say_and_wait([
        '알았어…… ',
        callname,
        '의 말이 맞아. 내가 경솔했어. 미안해…… 그래도…… 괜찮다면 나중에 제대로 대답해 줘.',
      ]);
      await era.printAndWait([
        '말을 마치자 ',
        silence.sex,
        '는 도망치듯 숲을 빠져나가, ',
        you.get_colored_name(),
        '이(가) 찾을 수 없는 곳으로 달려갔다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} silence サンデーサイレンス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
   */
  async 74(silence, you, callname) {
    await silence.say_and_wait([
      '결국…… 결국 난 비참한 패배자일 뿐이야…… ',
      silence.couple_title,
      '의 소원조차 이뤄 주지 못했어. 미안해, 미안해, 미안해, 미안해……',
    ]);
    await silence.say_and_wait('………');
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 벽 한쪽에 웅크린 채 눈물을 흘리고 있었다. 드넓은 트레센 학원에서도 눈에 잘 띄지 않는 구석이었다. ',
      silence.get_colored_name(),
      '은(는) 시간이 나면 이곳에 와서 멍하니 하늘을 바라보곤 했다.',
    ]);
    era.printButton('「여기 있었구나…… 할 말이 있어.」', 1);
    await era.input();
    await silence.say_and_wait([
      '알고 있어…… ',
      callname,
      '……아니, ',
      you.actual_name,
      ' 씨. 아까도 말했지만, 이번 일은 내 잘못이야.',
    ]);
    await silence.say_and_wait(
      '우리의 목표를 이루지 못한 건 나야. 넌 트레이너로서 할 수 있는 일을 다 해 줬어.',
    );
    await silence.say_and_wait(
      '원한다면 언제든 계약을 해지해도 돼. 미안해. 나 때문에 네 시간을 그렇게 낭비하게 했어.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손을 뻗어 ',
      silence.sex,
      '의 이마에 댔다. 평소라면 곧바로 뿌리쳐졌을 손이, 지금은 고스란히 ',
      silence.get_colored_name(),
      '의 뺨에 머물렀다.',
    ]);
    await era.printAndWait([
      '그것은 ',
      silence.sex,
      '가 한 번도 보인 적 없는 표정이었다. 피로와 실망, 당혹감. 줄곧 ',
      silence.sex,
      '를 지탱하던 기둥이 갑자기 무너져 내린 것만 같았다.',
    ]);
    await you.say_and_wait(
      '사일런스. 사람은 남을 위해서만 사는 게 아니야. 네가 해 준 이야기, 비 오던 그날 밤의 일도 전부 똑똑히 기억하고 있어.',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 고개를 들고 ',
      you.get_colored_name(),
      '의 다음 말을 기다렸다.',
    ]);
    await you.say_and_wait([
      '넌 실패했을지도 몰라. ',
      silence.couple_title,
      '의 마지막 소원을 이루지 못했을지도 모르지…… 하지만 가장 친한 친구라면, ',
      silence.couple_title,
      '도 네가 이렇게 지내기를 바라진 않을 거야…… 그렇지?',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      '이(가) 자신의 뺨에 손을 대자, ',
      silence.sex,
      '는 조용히 일어나 ',
      you.get_colored_name(),
      '의 품으로 무너지듯 안겼다.',
    ]);
    await silence.say_and_wait([
      '모르겠어…… ',
      silence.couple_title,
      '이 경주 ',
      silence.uma_sex_title,
      ' 이야기를 할 때 반짝이던 눈빛.',
    ]);
    await silence.say_and_wait(
      '3관을 이야기할 때의 그 들뜬 모습…… 그런데 난 지고 말았어.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 더는 말하지 않고 조용히 ',
      silence.get_colored_name(),
      '을(를) 끌어안은 채, ',
      silence.sex,
      '가 품 안에서 소리 없이 울도록 두었다.',
    ]);
    await silence.say_and_wait([
      '미안해…… ',
      callname,
      ', 꼴사나운 모습을 보였네.',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      '은(는) 고개를 들지 않았고, 목소리도 가늘었다. 하지만 ',
      you.get_colored_name(),
      '은(는) 알 수 있었다. ',
      silence.sex,
      '의 마음이 조금씩 가라앉고 있었다.',
    ]);
    era.printButton(
      '「그렇지 않아. 좌절과 실패를 똑바로 마주할 수 있다는 건 대단한 일이야. 그래서 묻고 싶어. 아리마 기념, 나갈 거야?」',
      1,
    );
    await era.input();
    await silence.say_and_wait(
      '물론이야. 네게 3관을 바치지는 못했지만, 앞으로도 이 길을 함께 걸어 줬으면 해.',
    );
    await silence.say_and_wait([
      '트레이너로서만이 아니라…… 곁에 있어 줘서 고마워…… ',
      callname,
      '. 이건 작은 ',
      silence.uma_sex_title,
      '의 보잘것없지만 진심 어린 마음이야. 좋아해.',
    ]);
    await silence.say_and_wait(
      '네 연인이 되고 싶어. 너와 결혼하고 싶어. 평생 나란히 걸어가고 싶어. 너는…… 어떻게 생각해?',
    );
    era.printButton('받아들인다(관계를 진전시킨다)', 1);
    era.printButton('일단 거절한다(아직 진전시키지 않는다)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('알았어. 그럼…… 잘 부탁해…… 내 연인.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그렇게 말하면서도 그 호칭이 아직 낯설게 느껴졌다. 하지만 ',
        silence.sex,
        ' 쪽이 ',
        you.get_colored_name(),
        '보다도 더 수줍어했다.',
      ]);
      await era.printAndWait([
        '늘 잔잔하던 얼굴은 붉게 물들어 있었고, 흔들리는 시선과 가만있지 못하는 꼬리는 ',
        silence.sex,
        '가 겉보기만큼 침착하지 못하다는 걸 보여 주었다.',
      ]);
      await silence.say_and_wait([
        '자…… 잘 부탁해. 연인으로서 할 일은 제대로 할게. ',
        callname,
        '……이젠 네 곁을 떠날 수 없을 것 같아.',
      ]);
      await era.printAndWait([
        silence.sex,
        '는 ',
        you.get_colored_name(),
        '을(를) 끌어안고, 두 손으로 얼굴을 감싸 입을 맞췄다. ',
        silence.sex,
        '의 입맞춤은 서툴렀다. 대뜸 ',
        you.get_colored_name(),
        '의 입술을 깨물어 상처를 내고 말았다.',
      ]);
      await era.printAndWait([
        '그런데도 둘은 아무 말 없이 오랫동안 입을 맞추다가, 이윽고 입술을 뗐다. ',
        silence.get_colored_name(),
        '은(는) 입안에 감도는 피 맛을 핥으며 기쁜 미소를 지었다.',
      ]);
      await silence.say_and_wait([
        callname,
        ', 이제부터는 ',
        you.get_colored_name(),
        '의 손을 다시는 놓지 않을게…… 절대로.',
      ]);
    } else {
      era.printButton(
        '그게…… 미안해. 우리 둘 다 조금 더 생각해 보는 게 좋겠어.',
        1,
      );
      await era.input();
      await era.printAndWait([
        silence.get_colored_name(),
        '은(는) 그 말을 듣자 금방이라도 울 것 같은 표정이 되었다. ',
        silence.sex,
        '는 애써 눈을 가늘게 뜨고 고개를 숙여 ',
        you.get_colored_name(),
        '에게 얼굴을 보이지 않은 채, 말없이 고개를 끄덕였다.',
      ]);
      await silence.say_and_wait([
        '알았어…… ',
        callname,
        '의 말이 맞아. 내가 경솔했어. 미안해…… 그래도…… 괜찮다면 나중에 제대로 대답해 줘.',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        '은(는) 뒤돌아보지 않고 자리를 떠났다. ',
        you.get_colored_name(),
        '에게 표정을 보이고 싶지 않았던 건지, ',
        silence.get_colored_name(),
        '은(는) 무척 빠르게 달려갔다.',
      ]);
    }
    return ret;
  },
};
