/**
 * @file 調教の地の文 - 強姦
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /** コミュニケーション系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼び方
   */
  async kiss(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        '아름다운 눈이 공포에 크게 뜨이고, ',
        d_call_a,
        '의 두 팔에 갇힌 몸이 떨고 있다.',
      ]);
      await defender.say_and_wait('으으……');
      await defender.print_and_wait(
        '짙은 숨결을 머금은 혀가 입 안에 들어와, 막으려던 하얀 이를 헤치고 잇몸 뿌리를 침범하듯 핥아 올린다.',
      );
      await defender.print_and_wait([
        '상대에게 눌린 지금은 입술 사이로 새는 음란한 소리와 침조차 스스로 멈출 수 없다.',
      ]);
    } else {
      await defender.say_and_wait(['크으……']);
      await defender.print_and_wait([
        '한심한 소리를 흘린 입은 곧 다시 ',
        d_call_a,
        '의 입술에 막힌다.',
      ]);
      await defender.print_and_wait([
        '그저 눈을 감고 몸 위에 올라온 팔을 움켜쥐는 것밖에 할 수 없다.',
      ]);
      await defender.print_and_wait([
        '입 안을 빼앗기는 대로 내버려 둔 채, 입술과 혀가 비비는 낮은 소리를 더욱 겹쳐 간다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('하아……');
      await defender.print_and_wait([
        '악문 이가 가차 없이 벌어지고, 혼란스러운 머리로는 곧바로 저항하지 못해 상대가 마음대로 하게 두고 만다.',
      ]);
      await defender.print_and_wait([
        '입 안 구석구석을 핥기고 힘 풀린 혀를 얼마나 오래 빨리고 있었을까……',
      ]);
      await defender.print_and_wait([
        '정신을 차리고 저항하려던 순간, 입 안에 남은 저림이 무의식적으로 침을 삼키는 자신을 달콤한 목소리로 배신할 것만 같다.',
      ]);
    } else {
      await defender.say_and_wait('젠장……그만……두라고……츄릅……');
      await attacker.print_and_wait([
        '혀가 ',
        a_call_d,
        '의 입 안을 계속 탐한다. 억지로 저항할수록 얽힌 혀에서 끈적한 물소리만 더해질 뿐이다.',
      ]);
      await attacker.print_and_wait([
        '짙은 냄새의 타액이 억지로 흘러들고, 숨을 쉬려고 삼키는 목은 그것을 모두 받아들이고 만다.',
      ]);
      await attacker.print_and_wait([
        '길고 깊은 입맞춤이 이어지고, ',
        a_call_d,
        '의 눈물과 입가에서 넘치는 투명한 침이 바닥에 떨어진다.',
      ]);
    }
  },
  /** 愛撫系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '허락도 없이 ',
        a_call_d,
        '의 귀에 손을 뻗는다. 잔털과 열기를 띤 귓바퀴가 눈앞에서 붉어지는 얼굴과 호응한다.',
      ]);
      await attacker.print_and_wait([
        '살짝 집자 고개가 순간 반대쪽으로 튕겨 나가고, 입에서는 거부하는 흐느낌이 샌다.',
      ]);
      await attacker.print_and_wait([
        '하지만 아무리 몸부림치고 눈썹을 찌푸려도, 귀끝에서 이어지는 강한 자극은 몇 초 만에 ',
        a_call_d,
        '의 힘을 빼앗아 간다.',
      ]);
    } else {
      await defender.print_and_wait([
        '떨며 고개를 숙인 채 귀를 성기처럼 희롱당하고 있다.',
      ]);
      await defender.say_and_wait(['이제……그만해……'], true);
      await defender.say_and_wait(['읏!']);
      await defender.print_and_wait([
        '민감한 뿌리와 안쪽을 손끝으로 찔리자 귀가 놀라 저절로 쫑긋 선다.',
      ]);
      await defender.print_and_wait([
        '일어선 말귀가 상대의 뺨을 「짝」 하고 때렸지만 돌아온 것은 웃음뿐이었다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      '앞선 애무에 충분히 달아오른 말귀는 더는 만지지 말라는 듯 머리카락에 붙어 달아나려 한다.',
    );
    await attacker.print_and_wait([
      '그래도 손쉽게 붙잡혀 가차 없이 당겨지고, 눈앞의 ',
      defender.uma_sex_title,
      '는 말을 더듬으며 용서를 빈다.',
    ]);
    await attacker.print_and_wait([
      '거친 손길에 본능적으로 경련하는 귀끝이 충혈되어 사랑스러운 분홍빛으로 물든다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '푸딩처럼 탄력 있는 가슴 살을 손바닥으로 받쳐 가볍게 누르며, 눈앞의 ',
        defender.race > 0 ? '암말' : '암컷',
        '이 침범당할 때마다 빨라지는 심장 박동을 느낀다.',
      ]);
      await defender.say_and_wait(['절대로! 절대로 용서하지 않을 거야……']);
      await defender.say_and_wait(['읏!!!']);
      await attacker.print_and_wait([
        '가슴의 모양이 바뀔 때까지 제멋대로 주무르자 내뱉으려던 협박이 가슴의 뜨거운 감촉에 짓눌린다.',
      ]);
      await attacker.print_and_wait(['다음에는 어떤 모양으로 만들어 줄까.']);
    } else {
      await attacker.print_and_wait([
        '따뜻한 가슴 살이 손바닥 아래에서 눌리고, 손가락 사이에 낀 유두까지 뚜렷하게 발기해 있다.',
      ]);
      await attacker.print_and_wait(['감촉을 음미하듯 몇 번이고 어루만진다.']);
      await defender.say_and_wait(['빌어먹을!!!']);
      await attacker.print_and_wait([
        '가슴을 제멋대로 희롱당하는 ',
        a_call_d,
        '은(는) 자신의 위에서 마음대로 하는 상대를 저주한다……그것밖에 할 수 없다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '이미 스스로 단단해진 딸기 같은 유두를 정성껏 문지르며 라디오의 조절 손잡이를 돌리듯 집는다.',
      ]);
      await attacker.print_and_wait([
        '충혈되어 빨개진 유두가 존재를 알리듯 열기를 뿜는다.',
      ]);
      await attacker.print_and_wait([
        '눈앞의 ',
        a_call_d,
        '은(는) 자극에 이를 악문다. 다 닫지 못한 입술에는 참아 내는 기색이 어린다.',
      ]);
      await attacker.print_and_wait(['……조금 더 힘을 줘 볼까.']);
    } else {
      await attacker.print_and_wait([
        '꼿꼿이 선 유두에 거리낌 없이 손을 뻗어, 손끝으로 끝부분을 재빠르게 만지작거리며 단단한 돌기를 몇 번이고 누른다.',
      ]);
      await attacker.print_and_wait([
        '쌀알처럼 단단해진 유두를 당기자 분홍빛 몸이 미세하게 떨린다……그래도 입술은 고집스럽게 닫혀 있다.',
      ]);
      await attacker.print_and_wait(['간단하다. 손톱으로 살짝 집기만 하면——']);
      await defender.say_and_wait(['응——❤️!']);
      await attacker.print_and_wait([
        a_call_d,
        '의 짧고 높은 신음이 돌아오고, 입가로 나온 혀끝에 투명한 침이 빛난다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '두 손가락으로 벌려 포피를 벗긴 음핵이 부끄러운 듯 미세하게 떨고 있다.',
      ]);
      await defender.say_and_wait(['잠깐……뭘……']);
      await attacker.print_and_wait([
        '손톱을 음핵의 살에 살짝 걸어 들어 올리자 ',
        a_call_d,
        '은(는) 본능적으로 허리를 젖히고 몸은 흐트러지게 떨리기 시작한다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '음핵을 덮은 포피를 거칠게 벗겨 검지로 음핵을 눌러 고정하고, 중지와 약지로 음순을 누른다.',
      ]);
      await attacker.print_and_wait([
        '문지르고 떨며 자극을 더한다. 충혈되어 발기한 음핵은 주물러지고 당겨질 때마다 더욱 민감해진다.',
      ]);
      await attacker.print_and_wait([
        '끊임없는 쾌감이 척수를 타고 ',
        a_call_d,
        '의 머리로 흘러든다. 아무리 굳은 의지도 이렇게 희롱당하면 틈이 생기겠지.',
      ]);
      await defender.say_and_wait(['으히……❤️ 음핵이 망가져……아아아아❤️']);
      await attacker.print_and_wait(['그렇네……조금 빨갛게 부었어.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛並みの形容（色付き）
   */
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '옅고 가련한 ';
        break;
      case 1:
        vagina_desc = '붉은 기가 감돌고 보랏빛을 띤 ';
        break;
      case 2:
        vagina_desc = '짙게 물든 성숙한 ';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '검지와 중지를 나란히 모아 보이고, ',
        a_call_d,
        '이(가) 알아차리기도 전에 두 손가락을 모은 채 ',
        vagina_desc,
        '음부에 집어넣는다.',
      ]);
      await defender.say_and_wait(['히익……그……그만둬……최악이야!']);
      await attacker.print_and_wait([
        '목이 뒤로 젖혀지고, ',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        '은(는) 화살에 맞은 백조처럼 고통과 기쁨이 섞인 달콤한 비명을 지른다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '부드럽고 축축한 질 안을 손끝이 거칠게 드나든다. 깊숙한 곳을 두드리고 주무르고 문지르는 동작을 바꿔 가며, 비어 있는 다른 손으로는 아랫배 위에서 눌러 준다.',
      ]);
      await defender.say_and_wait(['으으……']);
      await attacker.print_and_wait([
        a_call_d,
        '은(는) 양손으로 필사적으로 입술을 막고, 아름다운 눈은 촉촉하게 젖어 흔들린다.',
      ]);
      await attacker.say_and_wait(['효과는 충분하네, ', a_call_d, '。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(['입구만 만져서 뭐가 재미있겠어.']);
      await attacker.print_and_wait([
        '손가락을 더 밀어 넣어 ',
        a_call_d,
        '이(가) 평소 자위할 때는 좀처럼 건드리지 않는 곳을 찾는다. 손끝이 질벽의 작은 융기를 어루만진다.',
      ]);
      await defender.say_and_wait(['하아……부탁이야……']);
      await defender.say_and_wait(['——히얏～!']);
      await attacker.print_and_wait([
        '살짝 눌렀을 뿐인데 ',
        a_call_d,
        '의 애원이 쾌락의 신음으로 바뀐다.',
      ]);
      await attacker.print_and_wait([
        '성인 영상에나 나올 법한 흐트러진 아헤가오가 떠오른다.',
      ]);
    } else {
      await defender.say_and_wait(['하아～……이거……뭐야……']);
      await attacker.print_and_wait([
        '불안하게 허리를 비틀수록 부드러워진 질의 살이 몸 안의 손가락을 더욱 휘감는다.',
      ]);
      await attacker.print_and_wait([
        '약점을 들킨 뒤, 처음에는 이물질을 밀어내려던 음부가 솟은 부분으로 손가락 안쪽의 거친 지문을 스스로 문지르기 시작한다.',
      ]);
      await attacker.print_and_wait([
        '땀이 매끄러운 뺨을 타고 살짝 벌어진 입가에 떨어져, 조금 내민 혀끝의 침과 함께 흐른다.',
      ]);
      await defender.say_and_wait(['으으……']);
      await attacker.print_and_wait([
        '눈은 반쯤 뜬 채 흰자위가 드러나고, 금방이라도 정신을 잃을 것 같다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {string} d_skin_color 受動側の肌色
   */
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '상아색';
        break;
      case 0:
        skin_desc = '하얀';
        break;
      case 1:
        skin_desc = '혈색 좋은';
        break;
      case 2:
        skin_desc = '옅은 갈색';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '촉진도, 연인의 자격도 아닌 채 상대의 뜻을 거슬러 눈앞의 ',
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        '의 허벅지를 희롱한다.',
      ]);
      await attacker.print_and_wait([
        '그 ',
        { color: d_skin_color, content: skin_desc },
        ' 피부와 적당히 붙은 살의 감촉.',
      ]);
      await attacker.print_and_wait([
        '아름다운 다리선을 따라 ',
        a_call_d,
        '이(가) 단련한 성과를 음미한다. 손을 떼면 곧바로 돌아오는 탄력은 손끝에 더없는 쾌락이다.',
      ]);
      await attacker.print_and_wait(['훈련 성과는 충분하네……']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        '의 살집과 곡선을 겸비한 허벅지는 손바닥이 오가는 동안 저속한 분홍빛과 번들거리는 땀의 윤기를 띤다.',
      ]);
      await attacker.print_and_wait([
        '허벅지를 오므려 달아나려 하면 더욱 민감한 안쪽 끝까지 손바닥에 내어 주게 된다.',
      ]);
      await attacker.print_and_wait([
        '다리 살에 감싸인 손바닥 전체가 탄탄한 마찰을 즐긴다.',
      ]);
      await attacker.print_and_wait([
        '홍조 속에도 혐오를 남긴 ',
        a_call_d,
        '의 얼굴을 보고 있으면 허락 없이 성기를 만지는 듯한 기분이 든다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛並みの形容（色付き）
   */
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
    if (is_first) {
      await attacker.print_and_wait([
        '비어 있는 손을 등에서 아래로 내려 꼬리 뿌리에 닿는 순간, 몸을 굳히고 있던 ',
        a_call_d,
        '은(는) 전류가 흐른 듯 떤다.',
      ]);
      await defender.say_and_wait(['너! 최악이야! 그만둬!']);
      await attacker.print_and_wait([
        '홱 고개를 들어 자신을 노려보는 우마무스메의 눈에 애처로운 눈물이 빛난다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '도발하듯 꼬리 뿌리를 계속 어루만지며, 자극을 참으면서도 가련하게 얼굴을 일그러뜨리는 ',
        a_call_d,
        '을(를) 바라본다.',
      ]);
      await defender.say_and_wait(['하, 하아～하아～……인간……말종……']);
      await attacker.print_and_wait([
        '살짝 이를 악물고 몸까지 미세하게 떠는 모습이 오히려 가학심을 부추긴다.',
      ]);
      await attacker.print_and_wait([
        '더 짓궂게 ',
        d_hair,
        '꼬리를 감아 살짝 당긴다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('히야～❤️');
    await defender.print_and_wait([
      '꼬리 끝에서 뿌리로, 그리고 온몸을 덮는 기묘한 감각.',
    ]);
    await defender.print_and_wait([
      '오래 쓰지 않았던 선이 갑자기 이어진 듯, 아픈 꼬리 뿌리에서 머리로, 머리에서 쑤시는 음부로 돌아온다.',
    ]);
    await defender.print_and_wait([
      '몸을 뒤로 젖히는 동시에 꼬리가 무의식적으로 용서를 비는 듯 흔들린다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '눈을 가늘게 뜨고 ',
        a_call_d,
        '의 저절로 단단해져 빨갛게 부은 음핵을 가까이서 바라본다.',
      ]);
      await attacker.print_and_wait([
        '그사이 일부러 숨을 불어 넣으면 자극받은 음핵은 더욱 곧게 선다.',
      ]);
      await defender.say_and_wait(['보지 마, 보지 마……']);
      await attacker.print_and_wait([
        '혀를 음핵에 대고 세게 핥자 조금 전까지 매섭던 목소리에 얼마간 용서를 비는 기색이 어린다.',
      ]);
      await attacker.print_and_wait([
        '경련하며 애액을 뱉는 음부가 자신의 입술까지 적셔 간다.',
      ]);
    } else {
      await defender.print_and_wait([
        '민감한 음핵을 혀끝으로 희롱당하자 악문 이 사이로, 눈앞의 최악인 상대의 움직임에 맞춰 달콤한 소리가 샌다.',
      ]);
      await defender.print_and_wait(['그래도 그렇게 쉽게 굴복하지는 않아!']);
      await defender.say_and_wait(['히얏!!!']);
      await defender.print_and_wait([
        '갑작스러운 통증과 전격 같은 쾌감에 몸이 단번에 굳고 입꼬리까지 저절로 경련한다.',
      ]);
      await defender.say_and_wait(['안 돼! 거길 이로 물지 마!']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '옅고 가련한 ';
        break;
      case 1:
        vagina_desc = '붉은 기가 감돌고 보랏빛을 띤 ';
        break;
      case 2:
        vagina_desc = '짙게 물든 성숙한 ';
    }
    if (is_first) {
      await defender.say_and_wait(['그……그만……떨어져……']);
      await attacker.print_and_wait([
        '위협도 되지 않는 떨리는 협박 따위는 아랑곳하지 않고 ',
        a_call_d,
        '의 ',
        vagina_desc,
        '음부에 스스로 입을 맞춘다.',
      ]);
      await attacker.print_and_wait([
        '가볍게 빨자 따뜻하고 부드러운 혀가 질 안으로 들어간다.',
      ]);
      await attacker.print_and_wait([
        '부드러운 주름을 왕복하며 문지르면 이따금 수축하는 질이 자신의 혀를 밀어내려 한다.',
      ]);
    } else {
      await defender.say_and_wait(['그만해……으흐흐……']);
      await defender.print_and_wait([
        '얕은 곳의 주름이 들어온 이물질에 남김없이 눌리고 있다.',
      ]);
      await defender.print_and_wait([
        '낮게 욕하는 사이에 ',
        defender.race > 0 ? '달리기 위한 ' : '',
        '두 다리가 떨리며 힘없이 다리 사이에 파묻힌 머리를 끼우고 만다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        '입가까지 뻗어 온 비릿한 귀두를 물고, 망설이며 천천히 혀를 기둥에 가져간다.',
      ]);
      await attacker.say_and_wait(['좀 더 제대로 해.']);
      await defender.say_and_wait(['기고만장하지 마……'], true);
      await defender.say_and_wait(['으으……']);
      await defender.print_and_wait([
        '그래도 지금은 굴복해 입 안을 좁히고 위아래로 미끄러뜨리며, 축축한 침을 육봉에 골고루 바른다.',
      ]);
      await defender.print_and_wait([
        '내키지 않는 채로 혀를 펴 표면의 혈관을 핥고, 자신의 침으로 육봉에 윤기를 낸다.',
      ]);
      await defender.say_and_wait(['응……또 조금 커졌어……'], true);
    } else {
      await defender.print_and_wait([
        '눈을 감는다. 보이지 않으면 신경 쓰이지 않을 거라고 믿고 싶어서.',
      ]);
      await defender.print_and_wait([
        '하지만 믿음직한 후각은 지금 자신이 무엇을 하는지 충실하게 전한다.',
      ]);
      await defender.print_and_wait([
        '부드러운 입술이 천천히 음경을 감싸고, 노래를 위해 단련한 혀끝이 귀두를 맴돈다. 원래라면 트로피를 안을 손이 음경을 받치고 있다.',
      ]);
      await defender.print_and_wait(['입맞춤……숨……냄새……']);
      await defender.say_and_wait(['냄새나……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '한껏 부푼 육봉으로 느닷없이 ',
        a_call_d,
        '의 입술을 밀어 벌린다.',
      ]);
      await attacker.print_and_wait([
        '부드러운 입술이 고리처럼 육봉을 조이며 앞뒤로 움직이고, 뺨 안쪽까지 찔려 올라간다.',
      ]);
      await attacker.print_and_wait([
        '무의식적으로 오므라드는 입술과 뺨의 점막이 육봉을 위한 극도로 좁은 입구멍을 만든다.',
      ]);
      await attacker.print_and_wait([
        '하지만 무엇보다 마음에 드는 것은 자신을 바라보는 경멸 어린 촉촉한 눈이다.',
      ]);
    } else {
      await defender.say_and_wait(['하아……❤️']);
      await attacker.print_and_wait([
        '조금 전까지 자신만 노려보던 눈은 이제 초점을 잃고, 육봉이 입에서 빠지는 숨 쉴 틈에만 흔들린다.',
      ]);
      await attacker.print_and_wait([
        '눈앞의 ',
        defender.get_colored_name(),
        '이라는 이름의 ',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        '은(는) 무의식적으로 내민 혀로 육봉을 가볍게 받친다.',
      ]);
      await attacker.print_and_wait([
        '입 안의 침이 쿠퍼액과 섞여 떨어지는 동안, 짙은 육봉 냄새가 섞인 공기를 크게 들이마신다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['하아아아～～～응～～크읏～～']);
      await attacker.print_and_wait([
        '정교한 ',
        defender.race > 0 ? '말귀 달린 ' : '',
        '성인형처럼 다리 아래에서 제멋대로 다뤄지고 있다.',
      ]);
      await attacker.print_and_wait([
        '입 안의 공간을 전부 빼앗겨 거의 진공 상태의 입구멍이 된다.',
      ]);
      await defender.say_and_wait(['우웩～']);
      await attacker.print_and_wait([
        '조금 전까지 불평만 하던 작은 입은 이제 빨아들이는 것밖에 할 수 없다.',
      ]);
      await defender.say_and_wait(['으～뜨거워～숨이……'], true);
      await defender.print_and_wait([
        '귓가에는 빠르고 거친 물소리밖에 들리지 않는다.',
      ]);
      await defender.print_and_wait([
        '지키려던 혐오 가득한 경멸의 시선조차 그저 위로 뒤집히는 아름다운 눈으로 바뀐다.',
      ]);
      await defender.print_and_wait([
        '육봉이 거칠게 들어올 때마다 목구멍이 짓눌린다. 넓어진 식도가 기도를 눌러 숨을 쉴 수 없는데도 목의 살은 이 최악인 상대의 육봉을 조인다.',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '일부러 입 안에서 멈춰 남은 정액의 얼룩을 자신의 혀와 벚꽃빛 입술에 바르고서야 아쉬운 듯 빼낸다.',
        ]);
        await defender.print_and_wait([
          '거칠고 더러워진 귀두와 얇은 입술 사이로 탁한 흰 실이 이어진다.',
        ]);
      }
      await defender.print_and_wait([
        '남은 목의 액체와 침도 깊숙이 밀려들어 간다.',
      ]);
      await defender.print_and_wait([
        '눈앞의 강간범의 주머니에 고인 짙은 정액을 자신이 삼킬 수 있도록 준비시키는 것일 뿐이다.',
      ]);
    } else {
      await defender.say_and_wait(['——크읏!?']);
      await defender.print_and_wait([
        '목구멍 깊숙이 묻힌 육봉이 고개를 숙이지 못하게 한다.',
      ]);
      await defender.print_and_wait([
        '몸을 젖히는 수밖에 없고, 입 안에서 쿠퍼액과 섞인 침까지 끊임없이 삼켜야 한다.',
      ]);
      await defender.print_and_wait([
        '이물질에 침범당하는 구역질과 비릿한 것으로 목이 막히는 질식감.',
      ]);
      await defender.print_and_wait([
        '그보다 더한 것은 눈앞의 인간 말종을 뿌리까지 목 안으로 만족시키기 위해 엉덩이를 높이 들어야 하는 굴욕이다.',
      ]);
      await defender.say_and_wait(['빨리 빼……!!!'], true);
      await defender.print_and_wait([
        '들이마시는 공기가 이 최악인 상대의 거친 움직임을 따라잡지 못하게 된다.',
      ]);
      await defender.print_and_wait([
        '살짝 보랏빛을 띤 뺨. 저항하려던 두 손도 힘을 잃고 풀어진다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          '못 들은 척하며 귀두를 물고 빠는 동작만 계속한다.',
        ]);
        await defender.print_and_wait([
          '여기까지 시켜 놓고 더 깊이 물라니, 너무나도 심하다.',
        ]);
        await defender.say_and_wait(['응?']);
        await defender.print_and_wait([
          '꼬리를 쓰다듬는 감촉. 또 만지고 싶은 걸까. 다른 손은 자신의 귀를 긁고 있다.',
        ]);
        await defender.say_and_wait(['읏?!']);
        await defender.print_and_wait([
          '예상치 못하게 꼬리가 당겨지자 온몸의 힘이 풀리고, 정수리에 놓인 손이 가차 없이 누른다.',
        ]);
        await defender.print_and_wait([
          '입술과 혀 사이에 머물던 귀두가 목구멍 깊숙이 단번에 밀려든다.',
        ]);
        await defender.say_and_wait(['크읏!!']);
        await defender.print_and_wait([
          '비릿한 냄새로 가득 찬 미뢰와 비강과 머리가 민감한 몸을 경련시킨다.',
        ]);
      } else {
        await defender.say_and_wait(['하아아아～～～응～～크읏～～']);
        await attacker.print_and_wait(
          '정교한 성인형처럼 다리 아래에서 제멋대로 다뤄지고 있다.',
        );
        await attacker.print_and_wait([
          '입 안의 공간을 전부 빼앗겨 거의 진공 상태의 입구멍이 된다.',
        ]);
        await defender.say_and_wait(['우웩～']);
        await attacker.print_and_wait([
          '조금 전까지 불평만 하던 작은 입은 이제 빨아들이는 것밖에 할 수 없다.',
        ]);
      }
      await defender.say_and_wait(['으～뜨거워～숨이……'], true);
      await defender.print_and_wait([
        '귓가에는 빠르고 거친 물소리밖에 들리지 않는다.',
      ]);
      await defender.print_and_wait([
        '지키려던 혐오 가득한 경멸의 시선조차 그저 위로 뒤집히는 아름다운 눈으로 바뀐다.',
      ]);
      await defender.print_and_wait([
        '육봉이 거칠게 들어올 때마다 목구멍이 짓눌린다. 넓어진 식도가 기도를 눌러 숨을 쉴 수 없는데도 목의 살은 이 최악인 상대의 육봉을 조인다.',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '일부러 입 안에서 멈춰 남은 정액의 얼룩을 자신의 혀와 벚꽃빛 입술에 바르고서야 아쉬운 듯 빼낸다.',
        ]);
        await defender.print_and_wait([
          '거칠고 더러워진 귀두와 얇은 입술 사이로 탁한 흰 실이 이어진다.',
        ]);
      }
      await defender.print_and_wait([
        '남은 목의 액체와 침도 깊숙이 밀려들어 간다.',
      ]);
      await defender.print_and_wait([
        '눈앞의 강간범의 주머니에 고인 짙은 정액을 자신이 삼킬 수 있도록 준비시키는 것일 뿐이다.',
      ]);
    } else {
      await defender.say_and_wait(['——크읏!?']);
      await defender.print_and_wait([
        '목구멍 깊숙이 묻힌 육봉이 고개를 숙이지 못하게 한다.',
      ]);
      await defender.print_and_wait([
        '몸을 젖히는 수밖에 없고, 입 안에서 쿠퍼액과 섞인 침까지 끊임없이 삼켜야 한다.',
      ]);
      await defender.print_and_wait([
        '이물질에 침범당하는 구역질과 비릿한 것으로 목이 막히는 질식감.',
      ]);
      await defender.print_and_wait([
        '그보다 더한 것은 눈앞의 인간 말종을 뿌리까지 목 안으로 만족시키기 위해 엉덩이를 높이 들어야 하는 굴욕이다.',
      ]);
      await defender.say_and_wait(['빨리 빼……!!!'], true);
      await defender.print_and_wait([
        '들이마시는 공기가 이 최악인 상대의 거친 움직임을 따라잡지 못하게 된다.',
      ]);
      await defender.print_and_wait([
        '살짝 보랏빛을 띤 뺨. 저항하려던 두 손도 힘을 잃고 풀어진다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        '권력이든 무력이든, 어쨌든 ',
        defender.get_colored_actual_name(),
        '이라는 이름의 ',
        defender.race > 0 ? '말귀 달린 ' : '',
        defender.phy_sex_title,
        '에게 지금은 따를 수밖에 없다는 것을 깨닫게 한다.',
      ]);
      await attacker.print_and_wait([
        '쿠퍼액을 흘리는 귀두를 내키지 않게 내민 작은 손 안에 집어넣는다.',
      ]);
      await attacker.print_and_wait([
        '육봉의 옆을 감싼 손가락의 힘은 무척 약해, 오히려 깃털이 스치는 듯한 감촉이 된다.',
      ]);
      await attacker.print_and_wait([
        '아름다운 것을 더럽히는, 중독성 있는 흥분도 있다.',
      ]);
    } else {
      await attacker.say_and_wait(['힘줘. 쥐고만 있어서는 안 되지.']);
      await defender.print_and_wait([
        '눈앞의 인간 말종은 더욱 심한 요구를 재촉하고, 자신은 두 손을 육봉에 밀착할 수밖에 없다.',
      ]);
      await defender.print_and_wait([
        '쿠퍼액으로 끈적한 손가락도, 그 아래에서 맥동하는 흥분한 혈관도 전부 느껴 버린다.',
      ]);
      await defender.say_and_wait(['기분 나빠……']);
      await defender.print_and_wait([
        '보복하듯 훑는 속도를 높이며 일부러 손끝으로 요도 입구를 찌른다.',
      ]);
      await defender.say_and_wait(['후……조금은 괴로운 표정을 했네……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '무릎 꿇고 멍하니 있는 ',
        a_call_d,
        '의 양 가슴을 받치고 육봉을 가슴 살 사이로 곧게 집어넣는다.',
      ]);
      await defender.say_and_wait(['육봉이, 응, 가슴 안에……❤️']);
      await attacker.print_and_wait([
        '무의식적으로 마음을 사로잡는 음담을 내뱉은 뒤, 가슴의 열기에 데인 것인지 멍하던 ',
        a_call_d,
        '은(는) 그제야 정신을 차리고 양손으로 육봉을 밀어내려 한다.',
      ]);
      await attacker.print_and_wait([
        '그래서 그 손을 붙잡아 자신의 가슴 살을 받치게 한다.',
      ]);
      await attacker.print_and_wait([
        '그러면서 가슴을 주무르는 동작으로 한껏 흥분한 육봉에 어떻게 봉사하는지 가르친다.',
      ]);
      await defender.say_and_wait(['응……❤️ 맥동하고 있어……❤️']);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? '골 사이에 놓인 육봉의 열기도, 숨에 섞인 비릿함도, 흐트러진 뜨거운 숨결을 맞는 말귀도 어느 것 하나 무시할 수 없다.'
          : '골 사이에 놓인 육봉의 열기도, 숨에 섞인 비릿함도 어느 것 하나 무시할 수 없다.',
      ]);
      await defender.print_and_wait([
        '홧김에 부드러운 살을 세게 잡고, 서투른 채로 가슴으로 육봉을 문지르는 힘을 늘려 의식을 돌리려 한다.',
      ]);
      await defender.print_and_wait([
        '가슴 살을 육봉에 밀착한 채 기계처럼 밀었다 뗀다. 어느새 가슴을 누르는 움직임이 꽤 거칠어져 있었다.',
      ]);
      await defender.say_and_wait(['……흥.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '일부러 허리를 내밀어 가슴 살 사이로 나온 귀두를 입술에 댄다. 이제 입을 벌릴 차례라는 것을 ',
        a_call_d,
        '에게 알린다.',
      ]);
      await defender.say_and_wait(['으응……']);
      await attacker.print_and_wait([
        a_call_d,
        '은(는) 눈썹을 찌푸리고 입술을 다문 채 이를 살짝 드러내며 끝내 입을 열지 않는다.',
      ]);
      await attacker.print_and_wait([
        '그래서 귀두를 뺨과 입술에 몇 번이고 들이민다. 눈물 어린 눈이 점점 크게 뜨이다가 이윽고 초점을 잃을 때까지.',
      ]);
      await attacker.print_and_wait([
        '마침내 ',
        a_call_d,
        '이(가) 입을 벌려 옅고 유혹적인 입술을 드러낸다.',
      ]);
      await defender.say_and_wait(['——아——앙.']);
    } else {
      await defender.say_and_wait(['질척～질척～질척～']);
      await defender.print_and_wait([
        '귀두에서 귀두 테두리까지 완전히 물고, 이따금 혀끝으로 기둥까지 핥도록 강요받는다.',
      ]);
      await defender.print_and_wait([
        '양팔로 가슴 살을 받치면서 빈손으로도 육봉을 쥐라는 명령을 받는다.',
      ]);
      await defender.print_and_wait([
        '굴욕적이다. 고개를 완전히 숙인, 복종과 패배 그 자체인 자세.',
      ]);
      await defender.say_and_wait(['으——']);
      await defender.print_and_wait([
        '불만스러운 흐느낌을 흘려도 눈앞의 강간범은 자신이 다음번에 삼킬 때 머리를 쓰다듬을 뿐이다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async bite_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait(['안 돼～안 돼～～떨어져!']);
      await attacker.print_and_wait([
        '침에 젖은 ',
        a_call_d,
        '의 붉은 딸기를 이로 물고 세게 깨문다. 쌓여 있던 강한 가려움과 욕망이 단번에 터진다.',
      ]);
      await defender.say_and_wait(['으앗!!!❤️']);
      await attacker.print_and_wait([
        a_call_d,
        '은(는) 참지 못하고 달콤한 소리를 흘린다.',
      ]);
      await attacker.print_and_wait([
        '곧 정신이 든 듯 목을 뒤로 빼고 얼굴을 새빨갛게 물들이며 혀를 거둔다. 침의 은실이 가슴 살 위로 떨어진다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '이끝으로 물어 붉게 부은 자국을 남기고 이따금 세게 깨물어, 자신을 밀어내려는 ',
        a_call_d,
        '을(를) 힘없이 무너지게 한다.',
      ]);
      await defender.say_and_wait(['응……최악이야❤️! 인간……말종! 강간범❤️!']);
      await attacker.print_and_wait([
        '그 욕설조차 끈적하게 달콤한 울림이 되어 간다.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_body_hair 受動側の毛色
   */
  async missionary(attacker, defender, d_body_hair) {
    await defender.say_and_wait('인간 말종! 떨어져, 꺼져!');
    await defender.print_and_wait([
      '다리를 들어 차려 하지만 발목을 손쉽게 붙잡혀 위로 들린다.',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait([
        d_body_hair,
        '꼬리에 가려져 있던 암컷의 음부를 드러내야 한다.',
      ]);
    } else {
      await defender.print_and_wait('저속한 암컷의 음부를 드러내야 한다.');
    }
    await defender.print_and_wait([
      '모은 손목까지 눈앞의 상대에게 눌리고 나서야 더는 저항할 수 없다는 것을 깨닫는다.',
    ]);
    await defender.say_and_wait('호오오오오!!❤️');
    await defender.print_and_wait(
      '본래 이어졌어야 할 욕설도 저항도 꾸짖음도, 뜨거운 육봉이 꽂히는 순간 몹시 아양 떠는 신음으로 바뀐다.',
    );
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の髪色
   */
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      a_call_d,
      '의 두 팔을 당겨 조금 힘을 주었을 뿐인데 ',
      defender.sex,
      '는 암캐처럼 엉덩이를 들고 바닥에 무릎을 꿇는다.',
    ]);
    await attacker.print_and_wait([
      '저항하려는 ',
      defender.race > 0 ? '암말' : '암컷',
      '은 견디지 못하고 엉덩이를 비틀며 달아나려 하지만, 그것이 오히려 유혹처럼 보인다.',
    ]);
    await attacker.print_and_wait([
      '허리를 앞으로 내밀자 육봉은 가로막는 것 없이 ',
      a_call_d,
      '의 음부에 들어간다.',
    ]);
    await defender.say_and_wait(['히아아❤️!']);
    await attacker.print_and_wait([
      '전류가 흐른 듯 허리가 젖혀지고 ',
      d_hair,
      '의 머리카락이 흔들린다.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['꼬리까지 곧게 굳는다……']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('도망칠 생각이야?');
    await attacker.print_and_wait([
      '비틀거리며 일어나 달아나려는 ',
      a_call_d,
      '의 정강이를 잡아당기자 곧바로 품 안에 떨어진다.',
    ]);
    await attacker.print_and_wait([
      '육봉이 평평한 배에 묵직하게 닿자 공포에 아랫배까지 움푹 들어가는 것이 느껴진다.',
    ]);
    await attacker.print_and_wait([
      '말을 듣지 않는 못된 이에게는 벌이 필요하다.',
    ]);
    await defender.say_and_wait(['으아……빼……!']);
    await attacker.print_and_wait([
      defender.race > 0
        ? '허리가 힘차게 젖혀지고 레이스로 단련한 두 다리가 자신의 허리를 세게 감싼다.'
        : '허리가 힘차게 젖혀지고 두 다리가 자신의 허리를 세게 감싼다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hug_sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('기분 좋아?');
    await attacker.print_and_wait([
      '뒤에서 밀착해 ',
      a_call_d,
      '',
      defender.race > 0 ? '의 쫑긋 선 말귀' : '의 귀',
      '에 대고 묻는다.',
    ]);
    await defender.say_and_wait('인간 말종! 변태!');
    await defender.say_and_wait('으아아❤️……');
    await attacker.print_and_wait([
      '끊기는 반론이 달콤한 신음에 가로막히고 ',
      a_call_d,
      '의 숙인 고개가 더욱 낮아진다.',
    ]);
    await attacker.print_and_wait([
      '드나들 때마다 음부가 세게 조이는 ',
      defender.race > 0 ? '암말' : '암컷',
      '은 지금 어떤 얼굴을 하고 있는지 자신에게 보이고 싶지 않은 모양이다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        '역시 ',
        defender.uma_sex_title,
        '는 유연성도 균형 감각도 뛰어나다.',
      ]);
    }
    await attacker.print_and_wait([
      '발끝만 바닥에 둔 채 허벅지 안쪽을 펴고 오른쪽 다리를 천천히 수평까지 올린다.',
    ]);

    await attacker.print_and_wait([
      '필사적으로 다리를 옆으로 올린 ',
      a_call_d,
      '은(는) 가는 허리와 유혹적인 옆 엉덩이를 자신의 눈앞에 드러낸다.',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1
        ? '음모에 가려진 '
        : '매끄럽고 사랑스러운 ',
      '음부가 팽팽하게 긴장한 움직임에 맞춰 벌어졌다 닫힌다.',
    ]);
    await defender.say_and_wait('만족했지……인간 말종!');
    await attacker.print_and_wait([
      '아직 한계가 아니다. 직접 손을 뻗어 자세를 바로잡고, 수평으로 든 오른쪽 다리를 더욱 올려 왼쪽 다리와 일직선이 될 때까지 수직으로 이끈다.',
    ]);
    await defender.say_and_wait('마, 만지지 마……');
    await attacker.print_and_wait([
      '육봉이 곧게 들어가자 좁고 부드러운 질이 억지로 벌어지고, 뜨거운 귀두는 겹겹이 꿈틀거리는 살을 무시한 채 꽃의 중심에 닿는다.',
    ]);
    await defender.say_and_wait('……어흑❤️!!');
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_body_hair 受動側の毛色
   */
  async hug_standing(attacker, defender, d_body_hair) {
    await defender.print_and_wait([
      '양손을 벽에 짚고 엉덩이를 높이 든 채 감정을 죽이며 물으려 한다.',
    ]);
    await defender.say_and_wait(['이러면 됐지?']);
    await defender.print_and_wait([
      '뒤에서 올 건 알고 있어……그래도 바닥에 깔리는 것보다는 나아……',
    ]);
    await defender.print_and_wait([
      '그렇게 자신에게 되뇌는 사이, 허리에 갑자기 어루만지는 감촉이 닿았다가 주무르는 손길로 바뀌고 엉덩이를 더욱 높이 들게 된다.',
    ]);
    await defender.say_and_wait(['크읏❤️!']);
    if (defender.race > 0) {
      await defender.print_and_wait([
        '이 자세는 육봉이 자신의 음부를 뿌리까지 꿰뚫을 수 있는 자세라, 우마무스메에게는 너무나 반칙이다! ',
        d_body_hair,
        '말꼬리까지 채찍처럼 붙잡혀 자신의 엉덩이에 내리쳐진다.',
      ]);
    } else {
      await defender.print_and_wait(
        '이 자세는 육봉이 자신의 음부를 뿌리까지 꿰뚫을 수 있는 자세라, 너무나 반칙이다!',
      );
    }
    await defender.print_and_wait([
      '상반신은 충격에 곧 무너지고 당겨진 두 손만으로 겨우 지탱하고 있다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async suspended_congress(attacker, defender) {
    await defender.say_and_wait('싫어……으아!?');
    await defender.print_and_wait([
      '도망치려 해도 뒤의 상대에게 무릎 뒤를 받쳐 안아 올려진다.',
    ]);
    await defender.print_and_wait([
      '유연한 몸이 거의 접히고 무릎은 어깨까지 눌린다. 어깨 위에 놓인 두 다리가 육봉의 드나듦에 맞춰 크게 오르내린다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛色または髪色
   */
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      '이 자세라면 ',
      a_call_d,
      '은(는) 자신에게 매달린 모양이 된다.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait([
        '장점은 중력을 탄 육봉이 곧장 ',
        d_hair,
        '우마무스메의 깊숙한 곳까지 닿아 서로의 성기를 밀착할 수 있다는 것이다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '장점은 중력을 탄 육봉이 곧장 ',
        d_hair,
        '여성의 깊숙한 곳까지 닿아 서로의 성기를 밀착할 수 있다는 것이다.',
      ]);
    }
    await defender.say_and_wait('떨어져!……분명 떨어질 거야!');
    await attacker.print_and_wait([
      '몸이 뜬 느낌과 하반신의 강한 쾌감에 판단력을 잃어 가는 ',
      a_call_d,
      '은(는) 무의식적으로 팔을 뒤로 돌려 자신의 목에 감는다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '허리에 올라탄 ',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      '은(는) 몸을 지탱한 채 엉덩이를 조금 움직일 뿐, 손으로 입술까지 가리고 아무렇지 않은 표정을 지으려 한다.',
    ]);
    await attacker.print_and_wait([
      '음부에 삼키게 했을 때는 소리를 질렀으면서.',
    ]);
    await attacker.print_and_wait(['그렇다면 이쪽에서 움직여 보자.']);
    await attacker.print_and_wait([
      '양쪽 엉덩이를 살짝 받치고 ',
      a_call_d,
      '의 놀란 소리 속에서 허리를 위로 힘껏 쳐올린다.',
    ]);
    await defender.say_and_wait(['으앗❤️!!!']);
    await attacker.print_and_wait([
      a_call_d,
      '의 비명 속에서 같은 동작을 반복한다. 허리를 내밀고, 올렸다 내리고, 비벼 댄다. 향기로운 땀이 비처럼 가슴에 떨어지고 규칙적인 몸의 충돌음이 공기 중에 남는다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot(attacker, defender) {
    await defender.say_and_wait(['잠깐❤️! 안 돼……❤️거기는……❤️!']);
    await attacker.print_and_wait(['여기가 약점이구나?']);
    await attacker.print_and_wait([
      '육봉의 부푼 혈관으로 문지를까, 귀두로 두드릴까. 자극을 계속하자 신경이 밀집한 질의 살이 기뻐하며 떨고 수축한다.',
    ]);
    await defender.say_and_wait('으오오오호오오오————❤️❤️❤️');
    await attacker.print_and_wait([
      '예상을 확인시켜 주듯 ',
      defender.get_colored_name(),
      '이라는 이름의 여성은 스스로 고개를 들어 높은 교성을 지른다. 엉덩이도 드나드는 움직임에 맞춰 젖혀 육봉이 약점에 더 많이 닿도록 한다.',
    ]);
    await attacker.print_and_wait([
      '아름다운 눈은 반쯤 뜬 채, 남아 있던 이성과 자존심이 애액과 함께 몸 밖으로 흘러나온다.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼び方
   * @param {string} d_skin_color 受動側の肌色
   */
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '상아색';
        break;
      case 0:
        skin_desc = '하얀';
        break;
      case 1:
        skin_desc = '혈색 좋은';
        break;
      case 2:
        skin_desc = '옅은 갈색';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('빨리……하아❤️……그만해……');
      await defender.print_and_wait([
        '부푼 육봉이 아무런 예의도 없이 자신의 몸 안을 드나든다. 주름에 밀착해 맥동하는 충혈된 혈관까지 뚜렷하게 느껴진다.',
      ]);
      await defender.say_and_wait('으하아……응❤️');
      await defender.say_and_wait('안 돼……이대로는……', true);
      await defender.print_and_wait([
        '정교한 살 장난감을 거칠게 가지고 놀듯, 뜨거운 귀두와 단단한 육봉이 질의 주름을 남김없이 문지른다.',
      ]);

      await defender.print_and_wait(
        '예상했던 격렬한 통증 대신 뇌수까지 저리게 하는 쾌감이 파도처럼 겹친다.',
      );

      await defender.say_and_wait('더 이상은❤️……이대로는……', true);
      await defender.say_and_wait('이대로는 가 버……❤️', true);
      await defender.print_and_wait([
        '저항하고 싶다. 하지만 통제를 잃은 얼굴도 달콤한 숨결도 곧게 뻗은 가느다란 발가락도 몸에 여유가 없음을 보여 준다.',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('어흐윽!!');
          await attacker.print_and_wait([
            '굵은 육봉이 가차 없이 ',
            a_call_d,
            '의 음부를 드나들며 신음을 내게 하는 동시에, 아름다운 눈을 몇 번이고 뒤집히게 한다.',
          ]);
          await attacker.print_and_wait([
            '뜨겁고 굵은 육봉이 음부 안을 휘젓고 귀두가 질벽에 닿는다. 젖혀진 귀두 테두리가 달아오른 살을 문질러 올려 꽃의 중심에 곧장 닿는다……',
          ]);
          await attacker.print_and_wait([
            '힘껏 밀어붙이는 귀두는 애액에 젖어 부드러운 자궁 입구에 묵직하게 입을 맞추고, 평평한 아랫배에조차 귀두의 윤곽이 희미하게 드러난다.',
          ]);
          await defender.say_and_wait(['어! 자……잠깐……조금만……부탁이야……']);
          await attacker.print_and_wait([
            '쾌감으로 가득 찬 머리에서는 부서진 말만 나오고, 함께 넘쳐흐르는 것은 입가에서 떨어지는 투명한 물방울이다.',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            '인형처럼 다뤄지며 순종적인 성적 기계처럼 만져지면 신음을 낸다.',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            ' 몸이 떨리고 뒤틀린다.',
          ]);
          await defender.say_and_wait(['으, 으아……']);
          await defender.print_and_wait([
            '지금 몸에 가장 필요한 것은 ',
            d_call_a,
            '에게서 달아날 힘인데, 쾌감에 이끌려 남은 힘을 발가락을 오므리는 데 쓰고 만다.',
          ]);
          await defender.print_and_wait([
            '거칠게 범해지는 감각과 애무당하고 희롱당하는 쾌감이 두 다리도 두 발도 온몸도, 쾌락을 찾는 한 덩어리 암컷의 살로 떨어뜨린다.',
          ]);
          await defender.say_and_wait(['하아!']);
          await defender.print_and_wait([
            '뻔뻔한 신음이 자신의 입에서 들린다.',
          ]);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait('으아아……그만……멈춰……부탁이야……으……');
          await defender.print_and_wait([
            '입으로는 그만하라고 달콤하게 외쳐도, 팽팽하던 질의 살은 이미 부드럽게 침입자를 감싸 육봉을 더 깊이 맞이한다.',
          ]);
          await defender.print_and_wait([
            '뜨거운 자궁 입구가 육봉에 몇 번이고 두드려지고 귀두 테두리가 자궁 입구의 고리에 깊게 입을 맞춘다. 닫히려던 자궁 입구까지 위로 움푹 밀린다.',
          ]);
          await defender.print_and_wait(
            '쾌감에 곧게 선 말귀에 들리는 것은 육봉이 질 안의 체액을 밀어내는 「질척질척」 하는 단조로운 소리뿐이다.',
          );
          await defender.print_and_wait([
            a_call_d,
            '은(는) 깨닫는다. 레이스를 위해 단련한 유연한 몸이 지금은 교접할 때 최고의 받침대가 되어 있다는 것을.',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },
};
