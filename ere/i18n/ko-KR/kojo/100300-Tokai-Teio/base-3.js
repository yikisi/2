/**
 * @file トウカイテイオー - 地下室
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} another
   * @param {CharaTalk} you
   */
  first_time(another, you) {
    era.print([
      '기숙사 밖에서 ',
      you.get_colored_name(),
      '은(는) 마침 ',
      another.get_colored_name(),
      '와(과) 마주쳐 ',
      another.sex,
      '와 즐겁게 한동안 이야기를 나누었다.',
    ]);
    era.print([
      '헤헤, 알겠어. ',
      you.get_colored_name(),
      '은(는) 눈치채지 못했다. 멀지 않은 곳에서 한 쌍의 눈이 줄곧 이쪽을 바라보고 있었다. ',
      you.get_colored_name(),
      '와(과) ',
      another.sex,
      '의 대화가 길어지고 화제가 사생활로 옮겨 가며 웃음소리가 커질수록, 그 눈동자는 떨리면서 점점 어두워졌다……',
    ]);
    era.println();

    era.print([
      '그 눈의 주인은 주변의 물건을 꽉 움켜쥐어 손가락 마디가 하얗게 질렸다.',
    ]);
    era.println();

    era.print([you.get_colored_name(), '은(는) 돌아보았다가 번쩍 눈을 떴다.']);
    era.print(['현실인가? 꿈인가?']);
    era.print([
      you.get_colored_name(),
      '은(는) 조금 유치하게 꾸며진 더블 침대에 누워 있다는 것을 깨달았다……',
    ]);
    era.print(['눈앞에는 낯선 천장이……']);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async flatter(teio, you, callname) {
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait([
        '미안해, ',
        callname,
        '. 하지만, 아무래도 떠나게 하고 싶지 않아……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 평소처럼 담당을 달래려 했지만, 전혀 통하지 않는 듯했다.',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……이제는 테이오 님 차례야.']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ask_release_agree(teio, you, callname) {
    era.printButton('「이제 충분히 놀았잖아, 테이오. 내보내 줘」', 1);
    era.printButton('「테이오 님…… 알았어. 내보내 주세요」', 2);
    await era.input();

    await teio.say_and_wait('……하아.');
    await era.printAndWait([
      '맞은편 의자에 걸터앉은 자그마한 ',
      teio.uma_sex_title,
      '가 몸을 앞으로 기울여 온몸을 이쪽으로 바짝 당기고, 청흑색 두 눈을 깜빡이지도 않은 채 ',
      you.get_colored_name(),
      '에게 고정했다. 먹빛 문처럼, 들어오려는 빛을 모조리 집어삼키는 눈이었다.',
    ]);
    await teio.say_and_wait('그런 말을 하다니…… 내 트레이너가.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 머리끝이 쭈뼛해졌지만 지금은 약한 모습을 보이고 싶지 않아 ',
      teio.sex,
      '를 마주 노려보았다. 일그러진 홍채 너머에서 자신이 아끼던 그 아이를 찾을 수 있으리라는 희망을 조금이나마 품은 채.',
    ]);
    await era.printAndWait([
      '반세기쯤 이어진 것 같은 대치 끝에 ',
      teio.get_colored_name(),
      '은(는) 고개를 떨궜다.',
    ]);
    await teio.say_and_wait(['미안해…… ', callname, ', 내가 잘못했어.']);
    await teio.say_and_wait('문…… 지금은 열려 있어. 마음대로 해.');
    await era.printAndWait([
      '말을 마친 뒤 ',
      teio.sex,
      '는 자신의 다리를 끌어안고 몸을 돌려, 옆으로 ',
      you.get_colored_name(),
      '에게 길을 비켜 주었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 출구로 걸어가면서 곁눈질로, 한때 ',
      you.get_colored_name(),
      '이(가) 알던 ',
      teio.child_sex_title,
      '가 몸을 떨고 있는 모습을 보았다——',
    ]);
    era.printButton('내버려 둔다', 1);
    era.printButton(`${teio.sex}를 데려간다`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한순간도 낭비하지 않고 자유로운 세상으로 발을 내디뎠다——',
        teio.sex,
        '는? 조금 혼이 나 봐야 한다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 망설임 없이 웅크린 그림자에게 다가가 손을 뻗었다. ',
        teio.sex,
        '의 머리를 부드럽게 쓰다듬고 머리카락 뿌리에서 등을 지나 꼬리 끝까지 손길을 옮겼다. 자그마한 ',
        teio.uma_sex_title,
        '의 몸은 처음에는 더욱 떨리다가 이윽고 진정되었다.',
      ]);
      await era.printAndWait([
        '한층 더 가까이 다가가 두 손으로 ',
        teio.sex,
        '의 관자놀이를 감싸고 손가락을 굽혀 돌아보라는 뜻을 전했다. 천천히 익숙한 얼굴이 나타났다. ',
        you.get_colored_name(),
        '은(는) 눈물로 씻긴 하늘색 눈동자를 보고 절로 웃었다.',
      ]);
      await you.say_and_wait('돌아가자, 함께.');
      await teio.say_and_wait('으으……');
      await era.printAndWait([
        teio.sex,
        '는 얼굴을 닦고 한 손으로 조심스럽지만 단단하게 ',
        you.get_colored_name(),
        '의 소매를 붙잡았다. 바닥으로 미끄러져 내려와 비틀거리며 앞장서서 ',
        you.get_colored_name(),
        '을(를) 밖으로 이끌었다.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async ask_release_reject(teio, you) {
    era.printButton('「이제 충분히 놀았잖아, 테이오. 내보내 줘」', 1);
    era.printButton('「테이오 님…… 알았어. 내보내 주세요」', 2);
    await era.input();

    await teio.say_and_wait('……하아.');
    await era.printAndWait([
      '맞은편 의자에 걸터앉은 자그마한 ',
      teio.uma_sex_title,
      '가 몸을 앞으로 기울여 온몸을 이쪽으로 바짝 당기고, 청흑색 두 눈을 깜빡이지도 않은 채 ',
      you.get_colored_name(),
      '에게 고정했다. 먹빛 문처럼, 들어오려는 빛을 모조리 집어삼키는 눈이었다.',
    ]);
    await teio.say_and_wait('그런 말을 하다니…… 내 트레이너가.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 머리끝이 쭈뼛해졌지만 지금은 약한 모습을 보이고 싶지 않아 ',
      teio.sex,
      '를 마주 노려보았다. 일그러진 홍채 너머에서 자신이 아끼던 그 아이를 찾을 수 있으리라는 희망을 조금이나마 품은 채.',
    ]);
    await teio.say_and_wait('트레이너……');
    await era.printAndWait([
      teio.sex,
      '는 고개를 갸웃하며 미소 지었다——',
      you.get_colored_name(),
      '은(는) 이 모습을 몇 번이고 보아 왔는데도, 눈앞의 이 ',
      teio.sex_code === 1 ? '수컷 짐승' : '암컷 짐승',
      '을(를) 처음 보는 것 같았다.',
    ]);
    await teio.say_and_wait(
      '가르쳐 줬잖아…… 현실에 너무 큰 환상을 품으면 안 된다고.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 자신이 뭘 기대했던 건지조차 알 수 없었지만, 지금의 상황만큼은 분명했다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   * @param {number} security_level
   * @param {string} cur_time
   */
  async ask_time(teio, you, callname, security_level, cur_time) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      teio.get_colored_name(),
      '에게 지금 시간을 물었다……',
    ]);
    const buffer = [];
    if (security_level > 3 - era.get('status:3:腿伤')) {
      buffer.push(() =>
        teio.say_and_wait(
          '모르는 편이 나은 일도 있어…… 에헤헤, 나를 어린애 취급하던 때에 자주 그렇게 말했잖아.',
        ),
      );
    } else {
      buffer.push(
        () => teio.say_and_wait('함께하는 시간은…… 평생이야❤️'),
        () =>
          teio.say_and_wait([
            cur_time,
            '~ 후우…… 후후, 조급해하지 마. ',
            callname,
            '은(는) 참을 줄 아는 어른이잖아.',
          ]),
      );
      if (era.get('status:3:腿伤') > 0) {
        buffer.push(() =>
          teio.say_and_wait([
            cur_time,
            '……아직 얼마 지나지도 않았는데 벌써 나를 견딜 수 없는 거야, ',
            callname,
            '？',
          ]),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_success(teio, you) {
    await era.printAndWait('어떻게 해야…… 안 되겠어……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금의 상황을 이리저리 생각하며 머릿속으로 온갖 상황과 계획을 그려 보았지만, 모두 불가능하거나 이미 소용없다는 것이 드러난 방법들이었다. ',
      you.get_colored_name(),
      '은(는) 눈을 뜨고 가장 단순하고 직접적인 방법을 택했다——',
      you.get_colored_name(),
      '을(를) 여기에 가둔 ',
      { color: teio.color, content: '테이오' },
      '를 정면에서 쓰러뜨리는 것이다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너로서 담당에게 가르쳐 온 근육 사용법을 떠올렸다. 깊이 숨을 들이쉬고 이번에는 직접 실천할 각오를 다졌다.',
    ]);
    era.println();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_escape(teio, you) {
    await teio.say_and_wait(['이게 뭐야, 농담이지……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 주로 쓰는 손이 ',
      teio.sex,
      '의 뒷목을 파고들었다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '는 한 손을 들어 ',
      you.get_colored_name(),
      '의 어깨에 올리고 입술을 벌려 무언가 말하려 했지만, 몸에서 힘이 풀리며 쓰러졌다.',
    ]);
    await era.printAndWait([
      '승자가 된 ',
      you.get_colored_name(),
      '은(는) 조심스럽게 ',
      teio.sex,
      '의 몸을 받쳐 벽에 기대 앉힌 뒤 몸을 돌려 잠긴 문을 마주했다.',
    ]);
    await era.printAndWait([
      '이제 때가 됐다…… 오랜 감금과 고민, 싸움에 결말을 지어야 한다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 속옷에서 점토로 몰래 본떠 둔 ',
      teio.get_colored_name(),
      '의 지문을 꺼내고, 기억하고 있던 잠금장치의 위치로 손을 뻗었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 계산이 맞았다면…… 이제 나갈 수 있다.',
    ]);
    era.println();
    await era.printAndWait([
      '갑자기 신호음이 울려 ',
      you.get_colored_name(),
      '은(는) 저도 모르게 놀랐다——다행히도 잠금 해제를 알리는 자동 안내음이었다. ',
      you.get_colored_name(),
      '은(는) 길게 숨을 내쉬고 밝은 바깥으로 걸어 나갔다……',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_prison(teio, you) {
    await teio.say_and_wait(['이게 뭐야, 농담이지……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 주로 쓰는 손이 ',
      teio.sex,
      '의 뒷목을 파고들었다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '는 한 손을 들어 ',
      you.get_colored_name(),
      '의 어깨에 올리고 입술을 벌려 무언가 말하려 했지만, 몸에서 힘이 풀리며 쓰러졌다.',
    ]);
    await era.printAndWait([
      '승자가 된 ',
      you.get_colored_name(),
      '은(는) 조심스럽게 ',
      teio.sex,
      '의 몸을 받쳐 벽에 기대 앉힌 뒤 몸을 돌려 잠긴 문을 마주했다.',
    ]);
    await era.printAndWait([
      '이제 때가 됐다…… 오랜 감금과 고민, 싸움에 결말을 지어야 한다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 속옷에서 점토로 몰래 본떠 둔 ',
      teio.get_colored_name(),
      '의 지문을 꺼내고, 기억하고 있던 잠금장치의 위치로 손을 뻗었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 계산이 맞았다면…… 이제 나갈 수 있다.',
    ]);
    era.println();
    await era.printAndWait([
      '신호음과 함께 딸깍 소리가 나더니 문이 다시 잠겼다. ',
      you.get_colored_name(),
      '은(는) 잘못되었다는 것을 깨닫고 몇 걸음 물러났다. 숨을 내쉬고 무릎을 굽혀 힘을 모은 뒤, 평생의 힘을 다해 온몸의 무게를 문에 부딪쳤다.',
    ]);
    era.println();

    await era.printAndWait([
      '커다란 소리가 지하 공간에 울렸다. ',
      you.get_colored_name(),
      '은(는) 튕겨 나가 눈앞이 핑 돌았고, 조금 전 ',
      teio.uma_sex_title,
      '와 맞붙으며 입은 상처까지 한꺼번에 욱신거렸다. ',
      you.get_colored_name(),
      '은(는) 거친 숨을 몰아쉬며 주저앉았다. 시선은 마침 잠든 담당의 얼굴을 향했다.',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      '의 얼굴은 ',
      you.get_colored_name(),
      '이(가) 잘 아는 ',
      teio.uma_sex_title,
      '의 모습 그대로인 것 같았다.',
    ]);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 쓴웃음을 지으며 손을 뻗어 ',
      teio.sex,
      '의 속눈썹에 맺힌 물방울을 닦아 주었다. 더는 저항하지 않고 지금의 운명을 받아들였다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async battle_fail(teio, you, callname) {
    await era.printAndWait('어떻게 해야…… 안 되겠어……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금의 상황을 이리저리 생각하며 머릿속으로 온갖 상황과 계획을 그려 보았지만, 모두 불가능하거나 이미 소용없다는 것이 드러난 방법들이었다. ',
      you.get_colored_name(),
      '은(는) 눈을 뜨고 가장 단순하고 직접적인 방법을 택했다——',
      you.get_colored_name(),
      '을(를) 여기에 가둔 ',
      { color: teio.color, content: '테이오' },
      '를 정면에서 쓰러뜨리는 것이다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너로서 담당에게 가르쳐 온 근육 사용법을 떠올렸다. 깊이 숨을 들이쉬고 이번에는 직접 실천할 각오를 다졌다.',
    ]);
    era.println();
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait([
        callname,
        '? 미, 미안해! 하지만 이제 떠나지 말아 줘……',
      ]);
    } else {
      await teio.say_and_wait([
        callname,
        '?! 괜찮아…… 그런 방법까지 생각하다니……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.teen_sex_title,
        '에게 손쉽게 제압당했다. ',
        teio.sex,
        '는 화가 났다기보다 놀란 기색이 더 컸다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_success(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 잠든 척하며 현재 상황을 곰곰이 생각했다.',
    ]);
    await era.printAndWait([
      '아무래도 구조를 기대하기는 어렵다. 스스로 어떻게든 해야 한다. 게다가 ',
      you.get_colored_name(),
      '의 담당이 지금 보이는 정신 상태로는…… ',
      you.get_colored_name(),
      '에게는 ',
      teio.sex,
      '를 설득해 내보내 달라고 할 자신이 없다. 정면으로 맞서는 것도 좋은 선택은 아니다.',
    ]);
    await era.printAndWait(['그렇다면 방법은 하나다.']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너의 두뇌로 작전을 짜고, 스스로 말이 되어 때를 기다렸다.',
    ]);
    await era.printAndWait([
      '가벼운 발소리가 다가오고, 인기척이 스치더니 옷을 벗는 희미한 소리가 들렸다……',
    ]);
    await era.printAndWait([
      '지금이다! ',
      you.get_colored_name(),
      '은(는) 정적을 깨고 침대에서 뛰어올라 양팔을 벌려 ',
      teio.sex,
      '의 머리카락과 꼬리를 움켜잡았다──',
    ]);
    era.println();
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait(['앗──']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '의 반응은 빨랐지만 몸이 한순간 늦었다. ',
        you.get_colored_name(),
        '은(는) 기세를 주체하지 못하고 ',
        teio.sex,
        '의 종아리로 달려들어 매달렸고, 두 사람은 함께 부드러운 침구 위로 넘어졌다……',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……떠나지 마……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.sex,
        '를 바라보며 무언가 말하려 했지만 입이 떨어지지 않았다.',
      ]);
      await era.printAndWait([
        '트레이너와 ',
        you.sex,
        '의 담당인 ',
        teio.uma_sex_title,
        '는 한참 서로를 바라보다가 말없이 동시에 고개를 돌렸다.',
      ]);
      era.println();

      await teio.say_and_wait(['……내보내 줄게.']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '는 ',
        you.get_colored_name(),
        '의 손을 잡고 밖으로 향했다. 아주 작지만 분명한 말이 ',
        you.get_colored_name(),
        '의 귀에 닿았다.',
      ]);
      era.println();

      await teio.say_and_wait(['미안해.']);
    } else {
      await teio.say_and_wait(['앗!']);
      era.println();

      await era.printAndWait([
        '오랜만에 듣는 ',
        teio.teen_sex_title,
        '의 평소 목소리로 비명이 터졌다. ',
        teio.sex,
        '는 ',
        you.get_colored_name(),
        '에게 제압당했고, 두 사람의 입장은 다시 뒤바뀌었다.',
      ]);
      era.println();

      await teio.say_and_wait(['……', callname, '。']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 익숙한 마사지와 애정 어린 유혹이 어우러진 손놀림으로',
        teio.sex,
        '에게 응답한다.',
        teio.sex,
        '은(는) 서서히 힘을 잃고, 목소리는 숨소리로 변해간다……',
      ]);
      era.println();

      await teio.say_and_wait(['열쇠는…… 없어…… 나, 안 가지고……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.sex,
        '의 뜻을 알아차리고 ',
        teio.sex,
        '를 붙잡은 채 문 앞으로 가서 힘껏 밀었다.',
      ]);
      era.println();

      await era.printAndWait(['문은 싱겁게 열렸다……']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_fail(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 잠든 척하며 지금의 상황을 집중해서 생각했다.',
    ]);
    await era.printAndWait([
      '구조를 기대하기는 어려운 것이 분명했다. 자신을 믿는 수밖에 없다. 게다가 ',
      you.get_colored_name(),
      '의 담당이 지금 보이는 정신 상태를 생각하면…… ',
      you.get_colored_name(),
      '에게는 ',
      teio.sex,
      '를 설득해 내보내 달라고 할 자신이 없었다. 정면으로 맞붙는 것도 좋은 선택은 아니었다.',
    ]);
    await era.printAndWait(['그렇다면 방법은 하나다.']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너의 머리로 전술을 짜고, 스스로 말이 되어 때를 기다렸다.',
    ]);
    await era.printAndWait([
      '가벼운 발소리가 다가와 인기척이 스쳐 가고, 옷을 벗는 작은 소리가 났다……',
    ]);
    await era.printAndWait([
      '지금이다! ',
      you.get_colored_name(),
      '은(는) 가만히 있다가 돌연 침대에서 뛰어올라 두 손을 벌려 ',
      teio.sex,
      '의 머리카락과 꼬리를 붙잡으려 했다——',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 우스꽝스러운 자세로 침대에 쓰러졌다.',
    ]);
    era.println();

    await teio.say_and_wait([callname, '……뭐 하는 거야.']);
    era.println();

    await era.printAndWait([
      '결국 담당을 하마터면 웃게 만들고, ',
      teio.sex,
      '의 경계심만 높인 모양이었다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  find_escape(teio, you) {
    era.print([
      '왠지 모르게, ',
      teio.get_colored_name(),
      '은(는) 자리를 비운 지 제법 지났다.',
    ]);
    era.print([
      '수업인가? 트레이닝인가? 행사인가? 아니면——여기까지 생각하자 ',
      you.get_colored_name(),
      '의 머리가 더욱 아파졌다——학원 관리부에 자신의 실종을 설명할 거짓말을 꾸미고 있는 걸까?',
    ]);
    era.print([
      '더 미룰 수는 없다고 ',
      you.get_colored_name(),
      '은(는) 생각했다. 구조를 기다리느니 직접 기회를 잡아 도망쳐야 했다.',
    ]);
    era.println();
    era.print([
      you.get_colored_name(),
      '은(는) 문을 가볍게 밀었다——이번에는 잠겨 있지 않았다! ',
      you.get_colored_name(),
      '은(는) 기뻐하며 문턱을 넘는 동시에 가슴을 쓸어내려 뛰는 심장을 진정시키려 했다. 어둠을 놀라게 하지 않도록……',
    ]);
    teio.say('아아……');
    era.print(['그 순간, 조금 전까지 내달리던 피가 얼어붙었다.']);
    era.print([
      '따뜻하고 맑은 향기가 나는 몸이 다가왔다. 가늘지만 힘 있는 두 팔이 ',
      you.get_colored_name(),
      '의 허리를 감싸 안아 ',
      you.get_colored_name(),
      '은(는) 움직일 수 없게 되었다.',
    ]);
    teio.say(
      '전에는 내가 자율 트레이닝을 빼먹지 않는지 확인할 때 이런 수법을 썼으면서…… 어른의 술수란, 후후.',
    );
    era.print([
      '처지가 뒤바뀐 지금, ',
      you.get_colored_name(),
      '은(는) ',
      teio.sex,
      '에게 안겨 방 안으로 돌아가 「벌」을 기다릴 수밖에 없었다……',
    ]);
  },
};
