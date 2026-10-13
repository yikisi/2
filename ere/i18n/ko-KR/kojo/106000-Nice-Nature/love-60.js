/**
 * @file ナイスネイチャ - 恋慕
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  async 49(nature, you, callname, self_call) {
    const ret = [];
    await nature.print_and_wait([
      '어느 날 밤, ',
      nature.get_colored_name(),
      '는 자신이 ',
      you.get_colored_actual_name(),
      '에게 품은 마음이 담당이라는 관계를 조금 벗어나고 있음을 깨닫기 시작했다.',
    ]);
    await nature.print_and_wait([
      you.sex,
      '함께 보낸 시간을 떠올릴 때마다 옅은 온기가 어느새 가슴 깊은 곳에서 피어올랐다.',
    ]);
    await nature.say_and_wait([callname, '……']);
    await nature.print_and_wait(
      '혼잣말로 이름을 부르기만 해도 그 얼굴이 눈앞에 선명하게 떠올랐다.',
    );
    await nature.print_and_wait(
      '그저 한창때의 풋풋한 설렘일까, 아니면 매일 곁에 있다 보니 생긴 착각일까.',
    );
    era.println();

    era.printButton(
      `「나, 아무래도 ${callname}을(를) 좋아하는 것 같아……」（관계 진전）`,
      1,
    );
    era.printButton(
      `「아냐, 아냐, ${self_call}가 그런 마음을 품을 리가 없잖아?」(아직 관계를 진전시키지 않는다)`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '불빛 아래에서 ',
        nature.teen_sex_title,
        '은(는) 소중히 간직한 종이 트로피를 만지작거리다가 무심코 중얼거렸다.',
      ]);
      await nature.say_and_wait([
        '잠깐! 나 방금 무슨 말을 한 거야! 꼭 사랑에 빠진 ',
        nature.teen_sex_title,
        ' 같잖아! 난 그런 역할 아니거든!',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '는 필사적으로 자신의 말을 부정했다. 하지만 마음속에 심어진 씨앗은 이미 조용히 싹을 틔우고 있었다……',
      ]);
      era.drawLine({ content: '그로부터 얼마 뒤……', position: 'left' });
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 자기 방 침대에 홀로 앉아 있었다. 원래도 가볍게 입고 있던 ',
        nature.sex,
        '는 회색 반바지에 손을 대더니 속옷과 함께 내렸다.',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '의 손에는 티셔츠가 들려 있었다. 마음에 둔 상대의 티셔츠였다.',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '는 티셔츠를 코에 댄 채, 벌써 젖어 들기 시작한 음부로 손을 뻗었다. 입구를 문지르고, 때로는 돌기를 손가락으로 집으며 조금씩 더 깊이 빠져들었다.',
      ]);
      nature.say(['트레이너, ', you.adult_sex_title, ', 더……원해……']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '의 손은 이미 새빨갛게 충혈되어 애액을 흘리는 음부를 어지럽게 자극하며, 조금씩 더 나아갔다.',
      ]);
      await nature.print_and_wait([
        '충분히 풀렸다고 생각했는지, ',
        nature.sex,
        '는 더 큰 쾌감을 느낄 수 있는 곳으로 손가락을 밀어 넣었다. 빨려 들어간 손가락이 내벽을 스치며 질척이는 소리를 냈다.',
      ]);
      await nature.say_and_wait('으으～～～～!!');
      await nature.print_and_wait([
        '분명히 절정에 이른 ',
        nature.get_colored_name(),
        '는 소리도 되지 못한 신음을 흘리며 거칠게 숨을 몰아쉬었다. 호흡을 가다듬으려고 ',
        nature.sex,
        '는 잠시 손을 멈췄다가 다시 손가락을 움직이기 시작했다.',
      ]);
      nature.say([
        callname,
        '、',
        callname,
        '……이렇게 야한 짓을 하는 건, ',
        callname,
        '를 생각하다 이렇게 돼 버려서……',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '의 안을 휘젓는 손가락이 점점 빨라졌다. 질척질척 야한 소리가 날 때마다 ',
        nature.sex,
        '의 의식도 흐트러져 갔다.',
      ]);
      nature.say([
        '나……나, ',
        callname,
        '가 좋아, 정말 좋아! 그러니까 더 세게……!',
      ]);
      nature.say(['가, 가 버려, ', callname, ', 가 버려～～～～!!']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 몸을 뒤로 젖히고 허리를 쉴 새 없이 떨며 물줄기를 뿜어냈다. 시트를 더럽히지 않으려고 깔아 둔 수건을 넘어 시트까지 흠뻑 적셨다. 긴 절정에 ',
        nature.sex,
        '의 온몸이 떨렸고, 충만한 여운 속에서 ',
        nature.sex,
        '는 깊은 잠에 빠져들었다.',
      ]);
    } else {
      await nature.print_and_wait([
        '밤이라 괜히 감상에 젖은 거겠지. 그렇게 생각한 ',
        nature.get_colored_name(),
        '는 이불을 뒤집어쓰고 잡념을 떨쳐 내듯 일찍 잠들기로 했다.',
      ]);
    }
    return ret;
  },
  async '74-1'(nature, you, callname) {
    const ret = [];
    await nature.print_and_wait([
      '어느 날 밤, ',
      nature.get_colored_name(),
      '는 자신이 ',
      you.get_colored_actual_name(),
      '에게 품은 마음이 사랑임을 깨닫기 시작했다.',
    ]);
    await nature.print_and_wait(
      '창틀에 엎드려 길 건너 아직 불이 켜진 트레이너실을 바라보자 따스함이 가슴을 감쌌다.',
    );
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '이(가) 세심하게 돌봐 주던 모습을 떠올리며 ',
      nature.get_colored_name(),
      '는 마음속 감정의 이름을 알 것 같았다.',
    ]);
    era.println();

    era.printButton(`「나…… ${callname}이(가) 좋아!」(관계를 진전시킨다)`, 1);
    era.printButton(
      `「아니, 아니, 우린 ${nature.uma_sex_title}랑 담당 트레이너 사이잖아! 밤만 되면 감상적이 된다니까, 정말. 얼른 자자!」(아직 관계를 진전시키지 않는다)`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '목소리는 작았지만 ',
        nature.teen_sex_title,
        '의 결심은 확고했다.',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 자신의 마음을 받아들였고 무엇을 원하는지도 알았다. 이제 남은 건 마지막 한 가지……',
      ]);
    }
    return ret;
  },
  async '74-2'(nature, you, callname, call_55) {
    const ret = [];
    await nature.say_and_wait('하아~~~~');
    await nature.print_and_wait([
      '트레이너실에서 ',
      nature.get_colored_name(),
      '는 오늘만 벌써 몇 번째인지 모를 한숨을 쉬었다.',
    ]);
    await nature.print_and_wait([
      '원인은 ',
      nature.sex,
      '의 손에 들린 편지 한 통이었다.',
    ]);
    await nature.print_and_wait(
      '분홍색 봉투에 하트 스티커. 누가 봐도 연애편지라는 걸 알 수 있었다.',
    );
    await nature.print_and_wait([
      '오늘 아침, 이름도 모르는 ',
      nature.uma_sex_title,
      '에게 받은 거라고 ',
      nature.sex,
      '는 말했다. ',
      callname,
      '에게 전해 달라는 부탁과 함께.',
    ]);
    await nature.print_and_wait([
      '부탁받은 이상 ',
      you.sex,
      '에게 전해 줄 수밖에 없다. 사랑에 빠진 ',
      nature.uma_sex_title,
      nature.child_sex_title,
      '의 마음은 ',
      nature.get_colored_name(),
      ' 자신이 누구보다 잘 알고 있으니까.',
    ]);
    await nature.say_and_wait('하지만…… 그래도.', true);
    await nature.say_and_wait('트레이너랑 그 애가 혹시라도 잘되면──', true);
    await nature.say_and_wait(
      [
        '차라리 버려 버릴까… 아니, 아니, 그건 안 되지. 하지만 ',
        callname,
        '을(를) 빼앗기기는 싫은데…',
      ],
      true,
    );
    await nature.print_and_wait([
      '붉은 머리의 ',
      nature.teen_sex_title,
      '은(는) 같은 생각을 되풀이했다. 필사적으로 정답을 찾았지만 답은 나오지 않았다.',
    ]);
    nature.say(['하아~~~ ', callname, '……']);
    era.printButton('「네이처, 무슨 일이야?」', 1);
    await era.input();
    nature.say(['아, ', callname, ', 내 말 좀 들어 봐. 실은 말이야……']);
    await nature.print_and_wait([
      nature.get_colored_name(),
      '는 말을 꺼내다 무언가를 깨닫고 비명을 지르며 펄쩍 뛰었다.',
    ]);
    await nature.say_and_wait('으아아아아아아아!?');
    nature.say([
      callname[0],
      callname[0],
      callname[0],
      callname,
      '! 언제부터 있었어!?',
    ]);
    era.printButton('「방금 왔어. 응? 그 편지는……?」', 1);
    await era.input();
    await nature.say_and_wait(
      '이제 와서 숨겨 봤자 늦었다. 이런 디자인이면 바로 연애편지인 걸 들킬 텐데……',
      true,
    );
    era.printButton('「편지지가 귀엽네. 팬레터야?」', 1);
    await era.input();
    await nature.say_and_wait('설마, 눈치 못 챈 건가.', true);
    await nature.say_and_wait('아니, 팬레터가 아니라……');
    era.printButton('「아니야? 그럼 무슨 편지인데?」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '이(가) 두 번째 직구를 던지자 ',
      nature.get_colored_name(),
      '는 아까 반사적으로 부정한 자신을 후회했다. 이제 도망갈 곳이 없다.',
    ]);
    await nature.say_and_wait('응, 이건……');
    await nature.say_and_wait(
      [you.sex, '에게 이런 식으로 건네게 되다니.'],
      true,
    );
    await nature.print_and_wait([
      '자업자득이라고 ',
      nature.teen_sex_title,
      '은(는) 생각하면서도 각오를 다지고 편지를 ',
      callname,
      '에게 건넸다.',
    ]);
    await nature.say_and_wait('그게…… 연애편지……');
    era.printButton('「어? 연애편지? 역시 네이처는 인기가 많네.」', 1);
    await era.input();
    await nature.say_and_wait([
      '잠깐! 남자애가 이런 편지지로 연애편지를 쓰겠어? ',
      callname,
      ' 앞으로 온 거라고, 너한테!',
    ]);
    await nature.print_and_wait([
      nature.get_colored_name(),
      '는 너무 혼란스러워 편지를 탁자 위에 거칠게 놓아 버렸다.',
    ]);
    era.printButton('「나한테 온…… 연애편지?」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '은(는) 편지지를 찬찬히 바라봤다. 그 얼굴에 떠오른 미소에 ',
      nature.get_colored_name(),
      '의 가슴이 조여들었다.',
    ]);
    era.printButton('「고마워. 정말 기뻐.」', 1);
    await era.input();
    await nature.say_and_wait('역시, 이런 걸 받으면 기쁜 거야?');
    era.printButton(
      `「귀여운 ${nature.uma_sex_title}${nature.child_sex_title}, 가능하면 좋아하는 ${nature.uma_sex_title}${nature.child_sex_title}에게 받으면 정말 기쁘지.」`,
      1,
    );
    await era.input();
    await nature.say_and_wait(
      [
        '좋아하는 ',
        nature.uma_sex_title,
        nature.child_sex_title,
        '…… 그렇구나.',
      ],
      true,
    );
    await nature.say_and_wait(
      [
        callname,
        '이(가) 좋아하는 ',
        nature.uma_sex_title,
        nature.child_sex_title,
        '가 ',
        nature.sex,
        '에게 연애편지를 건넸다. 서로의 마음을 알게 된 두 사람은 그렇게 마음이 통하고……',
      ],
      true,
    );
    await nature.say_and_wait('처음부터 나한테는 승산이 없었던 거네……', true);
    await nature.print_and_wait([
      nature.get_colored_name(),
      '는 가슴이 아파 견딜 수 없었지만 그래도 대화를 이어 갔다……',
    ]);
    await nature.say_and_wait([
      '그렇구나, ',
      callname,
      ', 좋아하는 ',
      nature.uma_sex_title,
      nature.child_sex_title,
      '、',
      nature.sex,
      '도 귀엽고 하니까 잘 어울리지 않을까?',
    ]);
    era.println();

    era.printButton(
      '「어……? 이 연애편지, 네이처가 준 거 아니었어?」(관계를 진전시킨다)',
      1,
    );
    era.printButton(
      '「그런 사람이 있으면 좋겠지만. 아쉽게도 지금은 없어.」(아직 관계를 진전시키지 않는다)',
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.say_and_wait('뭐?');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 말에 ',
        nature.get_colored_name(),
        '는 순간 머릿속이 새하얘졌다.',
      ]);
      await nature.say_and_wait(
        [callname, ', 내가 쓴 연애편지라고 생각하는 거야?'],
        true,
      );
      await nature.say_and_wait(
        [callname, ', 연애편지를 받아서 기쁜 거야?'],
        true,
      );
      await nature.say_and_wait(
        [
          callname,
          '은(는) 좋아하는 ',
          nature.uma_sex_title,
          nature.child_sex_title,
          '에게 받은 연애편지라고 생각해서 기쁘다는 거야?',
        ],
        true,
      );
      await nature.say_and_wait(
        [
          '──그러니까 ',
          callname,
          '이(가) 좋아하는 ',
          nature.uma_sex_title,
          nature.child_sex_title,
          '는……',
        ],
        true,
      );
      await nature.print_and_wait([
        '마침내 앞뒤 사정을 이어 맞춘 ',
        nature.get_colored_name(),
        '의 얼굴이 순식간에 새빨개졌다.',
      ]);
      await nature.say_and_wait([
        '아~! 그러고 보니 ',
        call_55,
        '에게 볼일이 있었지~! 미안! ',
        callname,
        '! 나 잠깐 다녀올게! 오늘 저녁은 내가 만들 테니까 그때 봐!',
      ]);
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 말을 끊고 ',
        nature.get_colored_name(),
        '는 트레이너실에서 뛰쳐나갔다.',
      ]);
      await nature.print_and_wait(
        '달리고 또 달리다가 상점가에서 멈춰 서더니 힘없이 주저앉았다.',
      );
      await nature.say_and_wait(
        '나 바보야? 왜 도망친 건데? 그냥 받아들이면 됐잖아? 아~! 아까 저녁 만들어 준다고 말해 버렸고!',
      );
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 머리를 마구 헝클었다. 이 상황에서 저녁에 ',
        you.get_colored_actual_name(),
        '을(를) 만나러 돌아가면 대답할 준비가 됐다는 뜻이 되잖아……',
      ]);
      await nature.say_and_wait([
        '이제 뒤돌아보지 말자. 앞으로 나아가자. ',
        callname,
        '이(가) 내게 준 모든 것에 보답하기 위해.',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 마음을 굳혔다… 자리에서 일어나 문구점으로 향했다.',
      ]);
      await nature.print_and_wait(
        '자신의 마음을 담을 편지지를 사기 위해서였다.',
      );
      await nature.say_and_wait(
        '그리고…… 혹시 모르니까 속옷도 갈아입어 두자…… 그, 그냥 만일을 위해서라니까……',
      );
    } else {
      await nature.say_and_wait('어? 그래?');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        '의 대답은 ',
        nature.get_colored_name(),
        '의 예상 밖이었고, 가슴을 옥죄던 통증이 단숨에 풀렸다.',
      ]);
      await nature.say_and_wait('그렇구나…… 에헤헤, 그럼…… 아직 기회는 있네.');
      era.printButton('「응? 무슨 기회?」', 1);
      await era.input();
      await nature.say_and_wait('비밀!');
      await nature.print_and_wait([
        nature.get_colored_name(),
        '는 장난스러운 미소를 짓더니 가볍게 뛰듯 트레이너실을 나섰다.',
      ]);
      await nature.say_and_wait(
        '하지만 이러다가는 느긋하게 있을 수 없겠네. 나도 움직여야지……',
      );
    }
    return ret;
  },
  async 89(nature, you) {
    await nature.print_and_wait([
      '그날 밤, ',
      nature.get_colored_name(),
      '는 벽장에서 조금 낡은 쿠키 통을 꺼내 소중히 탁자 위에 올려놓았다.',
    ]);
    await nature.print_and_wait([
      '통 안에는 종이접기로 만든 트로피가 가지런히 쌓여 있었다. 하나하나가 ',
      you.get_colored_actual_name(),
      '와(과) 함께 걸어온 발자취이자 둘도 없는 추억이었다. 달려온 레이스뿐 아니라 둘이 함께 보낸 행복한 시간까지 그 안에 담겨 있었다.',
    ]);
    await nature.print_and_wait([
      '이 수집품이 앞으로 더 늘어날 거라고 생각하자 ',
      nature.sex,
      '의 얼굴에 자연스레 미소가 떠올랐다.',
    ]);
  },
};
