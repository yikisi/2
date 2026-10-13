/**
 * @file トウカイテイオー - 調教
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} call_t プレイヤーがトウカイテイオーを呼ぶ名
   */
  async talk_with_hurt(teio, you, call_t) {
    await teio.say_and_wait('……');
    await you.say_and_wait('……');
    await you.print_and_wait(
      '욕망이 타오르더라도 말은 필요 없다. 서로를 껴안고, 귀에 닿으며, 입술과 숨결만으로 서로를 이해한다.',
    );
    await you.print_and_wait([
      teio.sex,
      '의 피부에 닿을 때마다 ',
      call_t,
      '의 몸이 살짝 긴장하며, 자신을 억누르고, 밀착된 시간을 더 길게 이어가려 한다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} success 誘惑が成功したか
   */
  async lure(teio, you, success) {
    await you.print_and_wait([
      '눈앞의 사랑스러운 모습을 보고 있자니, 저절로 ',
      teio.sex,
      '을(를) 품에 안고 머리카락을 만지작거리며 머리를 쓰다듬고 있었다.',
    ]);
    await teio.say_and_wait('뭐야…… 또 어린애 취급이야……');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('그렇게 말하면서도…… 꼬리는 살랑거리고 있다.');
      await you.print_and_wait('계속해 줬으면 하는 표정이다.');
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async switch(teio, you, callname) {
    await teio.say_and_wait([callname, '! 또 짓궂게 굴었네——']);
    await you.print_and_wait([
      '볼을 부풀린 작은 우마무스메를 보며 웃고, 양손으로 ',
      teio.sex,
      '의 부드러운 어깨를 붙잡아 빙글 돌려 들어 올린다……',
    ]);
    await teio.say_and_wait('에?');
    await you.print_and_wait('천지가 역전되는 듯한 기분……');
    await teio.say_and_wait('이제부터는, 네 차례야.');
    await you.print_and_wait('아직 멍하니 있는 담당에게 짓궂게 고한다.');
    await you.say_and_wait([
      '테이오 선생님, ',
      you.actual_name,
      ' 군은 가르침을 받을 준비가 되어 있습니다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio 토카이 테이오
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 토카이 테이오가 플레이어를 부르는 이름
   */
  async pet_anal(teio, you, callname) {
    if (Math.random() >= 0.5) {
      await you.print_and_wait([
        '매일의 손질과 사전의 꼼꼼한 세척 후, 사랑스럽고 깨끗한 작은 문이 눈앞에 나타난다.',
      ]);
      await you.print_and_wait([
        '장난기가 샘솟아 손가락을 뻗어 이 비밀스러운 곳을 문지르고, 때때로 자물쇠를 억지로 열려고 한다.',
      ]);
      await teio.say_and_wait(['앗…… 응, ', callname, '!']);
      await you.print_and_wait('……거부라기보다는 기쁨과 재촉이 섞여 있다.');
      await you.print_and_wait([
        '설마, 이 멋진 작은 ',
        teio.sex_code === 1 ? '왕자님' : '공주님',
        '은 ……거기가 민감한 건가?',
      ]);
    } else {
      await teio.say_and_wait(['우우……']);
      await you.print_and_wait([
        teio.sex,
        '에게 있어서 이건 조금 비겁한 취급이다.',
      ]);
      await you.print_and_wait('하지만 지금은 그런 걸 신경 쓸 수 없다……');
      await you.print_and_wait('오히려 이렇게 해야 괴롭히는 보람이 있다.');
      await you.print_and_wait('보호대를 착용하고 살며시 문을 두드린다……');
    }
  },
  /**
   * @param {CharaTalk} teio 토카이 테이오
   * @param {CharaTalk} you 플레이어
   */
  async prepare_anal(teio, you) {
    await teio.say_and_wait(['……']);
    await you.print_and_wait([
      '얼굴을 새빨갛게 한',
      teio.teen_sex_title,
      '은 평소와 달리 한마디도 하지 않는다.',
    ]);
    await you.print_and_wait([
      '꼬리를 들어 올리고 그 비밀스러운 곳을 찬찬히 바라본다.',
    ]);
    await you.print_and_wait([
      '사랑스러운 엉덩이가 떨리고, 창백하고 깨끗한 구멍이 열려 있다……',
    ]);
  },
  /**
   * @param {CharaTalk} teio 토카이 테이오
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 토카이 테이오가 플레이어를 부르는 이름
   */
  async ask_foot_job_with_hurt(teio, you, callname) {
    await teio.say_and_wait([
      '미안해……',
      callname,
      ', 이쪽으로는 힘을 보탤 수가 없어.',
    ]);
    await you.print_and_wait([
      '자책과 짜증이 섞인 한숨이 귀에 닿고, 뭔가 잘못한 것 같은 기분이 든다.',
    ]);
    await you.say_and_wait(['그럼 만회하자.']);
    await you.print_and_wait([
      teio.sex,
      '가 반응하기도 전에 뒤꿈치를 살며시 받치고 매끄러운 피부를 손가락으로 쓰다듬으며 얼굴을 가까이 한다.',
    ]);
    await teio.say_and_wait(['——!']);
    await you.print_and_wait([
      '손질과 세척을 마친',
      teio.uma_sex_title,
      '의 작은 발이 곧바로 열기를 띤다.',
    ]);
    await you.print_and_wait([
      '내심 미소 지으며 한쪽 손을 아래로 뻗어 담당의 눈을 똑바로 바라보며 ',
      teio.sex,
      ' 앞에서 그곳을 농락하기 시작한다.',
    ]);
  },
  /**
   * @param {CharaTalk} teio 토카이 테이오
   * @param {CharaTalk} you 플레이어
   * @param {boolean} is_first 연속 행동의 첫 번째인지 여부
   */
  async ask_tail_job(teio, you, is_first) {
    if (is_first) {
      await teio.say_and_wait(['윽…… 이런 건……']);
      await you.print_and_wait([
        '조금은 빗나간 부탁일지도 모른다. 하지만 ',
        teio.sex,
        '은(는) 얼굴을 붉혔을 뿐 결국 응해 주었다……',
      ]);
      await you.print_and_wait(['게다가 아주 흥미진진해 보인다.']);
      await you.print_and_wait([
        '매끄럽고 촉촉한 꼬리가 곧바로 선 육봉에 순식간에 얽히며, 갑작스러운 자극에 하마터면 가버릴 뻔한다.',
      ]);
      await teio.say_and_wait(['에헤헤……']);
      await you.print_and_wait([
        teio.sex,
        '의 눈이 반짝이며 온 힘을 다해 꼬리를 휘둘러 가장 민감한 곳을 농락한다.',
      ]);
    } else {
      await you.print_and_wait([
        '움직임이 거칠어지고 있다…… 아니, 능숙해졌다고 해야 할까.',
      ]);
      await teio.say_and_wait(['와아…… 젖어버렸어……']);
      await you.print_and_wait([
        '음란한 액체로 끈적해진 꼬리는 모질기를 빛나게 하는 그 손질제로부터 무언가를 배워가는 법이다.',
      ]);
      await you.print_and_wait(['거기에…… 그것뿐만이 아니다……']);
      await you.print_and_wait([
        '꼬리가 한 번 튀어 오르며 돌돌 말린다. 위로 흘러내린 머리카락 뭉치까지 휘감아, 이중 나선으로 그곳을 짜낸다.',
      ]);
      await you.print_and_wait([
        '작은',
        teio.uma_sex_title,
        '은(는) 아직 눈치채지 못하고 있다—— 꼬리샘에서 발정의 사향까지 분비되며, 그 자리에 있는 생명체의 욕망을 더욱 부채질하고 있다는 것을.',
      ]);
      await you.print_and_wait(['호흡이 어느샌가 거칠어진다……']);
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async preg_report(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손에 든 보고서를 내려다보며 거기에 적힌 사실을 받아들였다. 그러고는 창가에 앉은 담당을 향해 고개를 들었다.',
      ]);
      await era.printAndWait([
        '석양이 방 안으로 비스듬히 들어와 ',
        teio.sex,
        '가 아랫배를 쓰다듬는 손과 힘없이 흔들리는 종아리를 비추었다.',
      ]);
      await teio.say_and_wait(['트레이너…… 트레이너.']);
      await era.printAndWait([
        teio.sex,
        '는 미소를 지으며 자기 배를 가리키고 ',
        you.get_colored_name(),
        '에게 손짓했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마음을 다잡고 그림자를 밟으며 다가갔다.',
      ]);
      await era.printAndWait('두 사람은 가족이다.');
    } else {
      await teio.say_and_wait(['트레이너, 트레이너──']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무슨 일인지 알기도 전에 다급히 달려오는 담당을 무의식중에 두 팔로 받아 냈다. 잠시 뒤에야 ',
        teio.sex,
        '가 두 손에 쥔 서류의 의미를 이해했다.',
      ]);
      await era.printAndWait(['그런 거였구나……']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 시선을 내려 ',
        teio.sex,
        '의 아랫배를 보았다.',
      ]);
      await you.say_and_wait(['저 안에 ', teio.sex, '와 나의……'], true);
      await era.printAndWait([
        you.get_colored_name(),
        '의 품에 안긴 존재가 한 번 몸을 떨자 ',
        you.get_colored_name(),
        '은(는) 정신을 차리고 담당의 두 눈을 마주했다. ',
        teio.sex,
        '도 ',
        you.get_colored_name(),
        '을(를) 마주 보았다. 그 표정이 점점 차분하고 어른스러워졌다.',
      ]);
      await era.printAndWait([
        '좋아, 하고 ',
        you.get_colored_name(),
        '은(는) 생각했다. 앞으로 세울 계획은 트레이닝만으로 끝나지 않을 것이다.',
      ]);
    }
  },
};
