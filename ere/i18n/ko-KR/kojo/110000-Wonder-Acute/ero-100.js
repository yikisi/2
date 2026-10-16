/**
 * @file ワンダーアキュート - 調教
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { vp_status_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async kiss(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '코끝이 맞닿는다. 뜨거운 숨결이 매끄러운 목덜미를 어루만진다.',
      );
      await you.print_and_wait('숨이 막힐 만큼 뜨거운 애정.');
      await acute.say_and_wait('응……하, 하……❤️');
      await you.print_and_wait(
        '두 손이 뒤통수를 감싸고, 붉어진 뺨은 욕망으로 물들어 있다.',
      );
      await you.print_and_wait('……아직 부족한 모양이다.');
    } else {
      await you.print_and_wait(
        '다시 입을 맞추고, 다시 끌어안는다. 상대의 입술에 자신의 흔적을 남기고 싶다.',
      );
      await acute.say_and_wait(['……저기, 알고 있니, ', callname, '.']);
      await you.print_and_wait([
        '잠깐 떨어진 뒤, ',
        y_call_a,
        '이(가) 느긋하게 말한다.',
      ]);
      await acute.say_and_wait('이 정도로는……나는 만족할 수 없단다❤️');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async french_kiss(acute, you, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('자신의 혀로 상대의 입 안을 더듬는다.');
      await you.print_and_wait('더 깊이, 더 안쪽으로.');
      await you.print_and_wait([
        '하지만 곧 ',
        y_call_a,
        '의 혀에 들키고 만다.',
      ]);
      await you.print_and_wait(
        '상대의 입 안으로 세차게 밀려 들어간 혀는 원더 어큐트의 작은 혀에 아래턱 쪽으로 눌린 채 계속해서 얽혀든다.',
      );
      await acute.say_and_wait('……❤️～');
      await you.print_and_wait([
        '눈을 뜨자 보이는 것은 ',
        y_call_a,
        '의 눈에 어린 웃음.',
      ]);
    } else {
      await you.print_and_wait([
        '치아로 세운 방어는 곧 희롱하는 혀에 무너지고, ',
        y_call_a,
        '이(가) 자신의 입 안으로 깊숙이 들어온다.',
      ]);
      await you.print_and_wait(
        '침범당하듯, 치아 뒤에 숨은 혀가 위아래로 농락당하며 얽혀든다.',
      );
      await you.print_and_wait(
        '입 안의 타액마저 전리품처럼 빼앗기고, 상대의 타액만 남도록 강제로 교환된다.',
      );
      await you.print_and_wait([
        '눈을 뜨자 ',
        y_call_a,
        '의 요염한 눈빛은 그대로이고, 뒤통수를 감싼 두 손에도 더욱 힘이 들어간다.',
      ]);
      await you.print_and_wait([
        '……혀로 ',
        y_call_a,
        '을(를) 이길 자신은 조금도 없다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async relax(acute, you, y_call_a, callname) {
    await acute.say_and_wait(['후……', callname, ', 물 좀 마시겠니?']);
    await you.print_and_wait([
      '잠깐의 휴식.',
      y_call_a,
      '이(가) 다정하게 물을 마실지 묻는다.',
    ]);
    await you.print_and_wait([
      '이마에서 작은 땀방울이 떨어지고, ',
      acute.sex,
      '의 희고 벌거벗은 몸이 보인다.',
    ]);
    await you.print_and_wait('——왼쪽 가슴에서 심장이 쿵쿵 뛴다.');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async lure(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      if (Math.random() < 0.5) {
        await you.print_and_wait([
          '손끝으로 ',
          y_call_a,
          '의 유두를 둥글게 쓰다듬는다. 참지 못하고 흘리는 목소리를 ',
          y_call_a,
          '에게서 듣고 싶다.',
        ]);
        await you.print_and_wait([
          '하지만 ',
          y_call_a,
          '은(는) 자신의 손을 잡아 아랫배의 자궁 부근으로 이끈다.',
        ]);
        await acute.say_and_wait(['저기……', callname, '. 여기는……안 되겠니?']);
        await you.print_and_wait([
          y_call_a,
          '이(가) 머리를 기대며 올려다본다. 붉어진 뺨 아래로 낮게 유혹하는 목소리가——',
        ]);
      } else {
        await you.print_and_wait([
          y_call_a,
          '을(를) 유혹하려고 뻗은 손가락은 곧 ',
          acute.sex,
          '의 입술과 혀에 삼켜진다.',
        ]);
        await you.print_and_wait(
          '검지, 엄지, 중지, 약지, 새끼손가락, 손바닥, 손등——하나씩 핥고, 하나씩 빨아 타액의 흔적을 남긴다.',
        );
        await you.print_and_wait([
          '그래도 ',
          y_call_a,
          '은(는) 부족한 모양이다. 팔에 바짝 붙어 혀로 손목을 희롱하는 ',
          acute.sex,
          '는 발정한 짐승처럼 눈을 크게 뜨고 있다.',
        ]);
        await acute.say_and_wait([
          '하, 하……겨드랑이의, ',
          callname,
          '의 냄새……',
          callname,
          ', 이대로 계속해도 되겠니?',
        ]);
      }
    } else {
      await you.print_and_wait('별로 효과가 없는 듯하다……');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async talk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '설마 ',
        callname,
        '하고 여기까지 오게 될 줄은……',
      ]);
      await you.print_and_wait([
        '열 손가락을 앞에서 맞잡은 채, 알몸을 가릴 생각도 없는 ',
        y_call_a,
        '이(가) 고개를 갸웃한다.',
      ]);
      await acute.say_and_wait('하지만 할 거라면……제대로 즐겨야겠지.');
      if (acute.sex_code !== 1) {
        await you.print_and_wait([
          acute.sex,
          '는 부드럽게 웃으며 손을 뒤로 돌린다. 옅은 빛깔의 유두가 훤히 드러난다.',
        ]);
      }
    } else {
      await you.say_and_wait('부드럽게 해 줄까?');
      await you.print_and_wait([
        '……',
        y_call_a,
        '은(는) 고개를 숙인 채 반응하지 않는다.',
      ]);
      await you.say_and_wait('아니면 좀 더 세게?');
      await you.print_and_wait([
        '……',
        y_call_a,
        '의 꼬리가 흔들리기 시작한다.',
      ]);
      await you.print_and_wait(
        '알몸이어도 부끄러워하지 않으면서, 이런 화제에는 직접 대답하지 않는다.',
      );
      await you.print_and_wait(
        "그 모습이 신기해 풍성한 엉덩이를 때린다. '찰싹' 하는 소리가 대답을 대신한다——",
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async switch(acute, you, callname, y_call_a) {
    await acute.say_and_wait('어머? 나한테 주도권을 주겠다고? ……으음——');
    await you.say_and_wait('안 돼?');
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['안 되는 건 아니란다……다만, ', callname, '……']);
      await acute.say_and_wait('이제 무슨 일이 생겨도……견뎌 주렴~?');
      await you.print_and_wait([
        '그렇게 말하며 ',
        acute.sex,
        '의 두 손이 가슴으로 향해 그 앞에 포개진다.',
      ]);
      await you.print_and_wait([
        '……',
        y_call_a,
        '의 두 눈에 붉은 빛이 깃든다.',
      ]);
    } else {
      await acute.say_and_wait('안 되는 건 아니란다……');
      await you.print_and_wait([
        '한순간, ',
        y_call_a,
        '의 눈에 아쉬운 기색이 스쳐 간다——',
      ]);
      await acute.say_and_wait(['그럼 ', callname, '……아프면 말하렴~?']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} success 反抗に成功したか
   */
  async resist(acute, you, callname, y_call_a, success) {
    await acute.say_and_wait([
      '저기, ',
      callname,
      '……거역하지 않는 게 좋을 거란다?',
    ]);
    await you.print_and_wait([
      '눈에 요사스러운 빛을 띤 ',
      y_call_a,
      '이(가) 자신을 바닥에 밀어 눕힌다.',
    ]);
    await acute.say_and_wait('그렇지 않으면……다친단다.');
    await you.print_and_wait([
      '두 손을 세게 붙잡힌 채, ',
      acute.sex,
      '의 입술과 혀가 목덜미로 다가온다……',
    ]);
    era.println();
    if (success) {
      await you.print_and_wait('다친다고? 그런 건 아무래도 좋다.');
      await you.print_and_wait([
        '두 손목이 빠질 각오로 몸을 일으키고, 고개를 들어 ',
        y_call_a,
        '에게 입을 맞춘다.',
      ]);
      await acute.say_and_wait('읏!……❤️');
      await acute.say_and_wait('❤️～');
      await acute.say_and_wait(['……', callname, '……치사하구나.']);
    } else {
      await you.print_and_wait('힘껏 발버둥 쳐도 모두 헛수고다.');
      await you.print_and_wait(
        '거대한 짐승에게 노려진 먹잇감처럼, 발버둥 칠수록 상대는 더욱 달아오른다.',
      );
      await acute.say_and_wait(['하아❤️~ 부드럽게 해 줄게, ', callname, '.']);
      await you.print_and_wait([
        '뜨거운 숨결과 함께 ',
        y_call_a,
        '이(가) 자신의 목덜미에 흔적을 남긴다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async gargle(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '세면대 앞. 쏴아아, 물이 컵을 가득 채울 무렵, ',
      y_call_a,
      '이(가) 거울에 비친다.',
    ]);
    await acute.say_and_wait('깨끗이 잘 닦으렴~ 충치가 생기면 곤란하잖니……');
    await you.print_and_wait([
      '그렇게 말하며 ',
      acute.sex,
      '는 익숙한 손놀림으로 세면대에서 칫솔을 「꺼낸다」.',
    ]);
    await acute.say_and_wait([
      '있지, 내가 ',
      callname,
      '의 이를 닦아 줄까? 깨끗하게 닦아 줄 수 있단다~',
    ]);
    await you.print_and_wait('……그렇게까지 전부 해 줄 필요는 없잖아?');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async wipe_body(acute, you, callname, y_call_a) {
    await acute.say_and_wait('영차, 영차……');
    await you.print_and_wait([
      '말차색 수건으로 ',
      y_call_a,
      '이(가) 꼼꼼하게 몸을 닦고 있다.',
    ]);
    await acute.say_and_wait([
      '후후……이제 깨끗하구나~ 있지, ',
      callname,
      ', 또 어디를 쓸어 주면 되겠니?',
    ]);
    await you.print_and_wait('……알몸이어도 청소를 좋아하는 천성은 여전하다.');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_ear(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_a,
        '의 귀를 쓰다듬는다……뭐라고 해야 할까, 자꾸 만지고 싶어지는 감촉이다.',
      ]);
      await you.print_and_wait(
        '복슬복슬한 바깥쪽 귀에서 부드러운 안쪽으로 손가락을 넣고, 검지로 중이의 작은 뼈들이 늘어선 모양을 확인한다.',
      );
      await you.print_and_wait('……손바닥 반만 한 이 귀로 성기를 감싸면——');
      await you.print_and_wait([
        '머릿속에 상스러운 광경이 스친 순간, 손안의 ',
        y_call_a,
        "의 귀가 경계하듯 '쫑긋' 선다.",
      ]);
      await acute.say_and_wait([callname, '……지금, 좋지 않은 생각을 했구나?']);
      await you.print_and_wait('……아하하, 들켰나.');
    } else {
      await acute.say_and_wait(['응❤️~', callname, '의 손길이 조금 짓궂구나.']);
      await you.print_and_wait('짓궂다고? 흐음……');
      await you.say_and_wait('그럼 귀를 조금 핥아도 될까?');
      await acute.say_and_wait('안 된단다~');
      await you.print_and_wait(
        '다정한 목소리에는 물러서지 않겠다는 단호함이 숨어 있다.',
      );
      await you.print_and_wait('……게다가 귀로 손을 얻어맞아 조금 아프다.');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async pull_ear(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        acute.uma_sex_title,
        '에게 귀는 겉으로 드러난 약점이다. 왜 ',
        acute.uma_sex_title,
        '는 태어날 때부터 이런 약점을 지니고 있는 걸까.',
      ]);
      await you.print_and_wait(
        '트레이너가 귀를 잡아당기며 채찍을 휘두르라고 있는 게 분명하다.',
      );
      await you.print_and_wait([
        '눈앞에서 귀를 잡아당겨 눈물을 흘리는 ',
        y_call_a,
        '은(는) 그래도 미소 지으며 자신을 바라본다.',
      ]);
      await acute.say_and_wait([
        '저기, ',
        callname,
        '. 다음에는 뭘 할 거니? ……꼬리를 잡아당길래? 뺨을 때릴래? 아니면 발밑에 엎드리게 할래?',
      ]);
      await acute.say_and_wait(
        '뭐든 견딜 수 있단다~ 네가 기뻐한다면 그걸로 충분해❤️~',
      );
      await you.print_and_wait('……가슴속에 알 수 없는 가학심이 솟는다.');
    } else {
      await you.print_and_wait([y_call_a, '의 귀를 세게 잡아당긴다.']);
      await you.print_and_wait([
        acute.uma_sex_title,
        '에게는 겉으로 드러난 약점인 귀를 이렇게 세게 잡아당기니, 아픔을 잘 참는 ',
        y_call_a,
        '도 역시 견디기 힘든 모양이다.',
      ]);
      await acute.say_and_wait([
        '살살, 조금만 더 살살……',
        callname,
        '……이렇게 하면 아프단다……',
      ]);
      await you.print_and_wait([
        '평소와 같아 보여도, ',
        y_call_a,
        '의 눈가에는 귀를 잡아당기는 아픔에 저도 모르게 눈물이 맺혀 있다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   * @param {boolean} is_huge_tit ワンダーアキュートが巨乳か
   */
  async pet_breast(acute, you, callname, y_call_a, is_first, is_huge_tit) {
    if (is_first) {
      if (is_huge_tit) {
        await you.print_and_wait(
          '한 손으로 다 감싸지 못해 손가락 사이로 살결이 넘쳐나는 크기.',
        );
      } else {
        await you.print_and_wait(
          '작지도 크지도 않고 손바닥에 꼭 들어맞는 크기.',
        );
      }
      await you.print_and_wait(
        '부드러운 감촉. 좌우로 누르면 손바닥 안에서 수면처럼 일렁인다.\n',
      );
      await acute.say_and_wait(['저기……', callname, ', 한번 주물러 볼래?❤️~']);
      await you.print_and_wait(
        '비취 같은 눈동자 아래 숨은 것은 손안의 것에 대한 자신감일까, 끝을 알 수 없는 욕망일까.',
      );
      await you.print_and_wait(
        '……누가 알겠는가. 다만 손바닥 안에서 충혈된 유두가 뜨겁다.',
      );
    } else {
      await you.print_and_wait('주물주물……');
      await you.print_and_wait(
        '경단 같은 감촉이지만, 크기는 경단을 훌쩍 뛰어넘는다.',
      );
      await you.print_and_wait('반죽보다 뜨겁고, 더 탄력 있다.');
      await you.print_and_wait('과자도 아닌데 식욕이 돈다.');
      await acute.say_and_wait('저기, 그 가슴은 먹는 게 아니란다?❤️~');
      await you.print_and_wait('……또 속마음을 들켰다.');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_nipple(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('문질문질……');
      await you.print_and_wait('충혈된 유두는 의외로 뜨겁다.');
      await you.print_and_wait('손끝에 신기한 감촉이 전해진다.');
      await acute.say_and_wait('응❤️');
      await you.print_and_wait([
        y_call_a,
        '은(는) 이를 악물고 가슴의 간지러움을 참는다.',
      ]);
      await you.print_and_wait(
        '이대로 개발하면 언젠가 유두가 꽃피는 날을 볼 수 있으리라.',
      );
      await you.print_and_wait('……그전에, 아직 더 문지르고 싶다.');
    } else {
      await you.print_and_wait('유두를 잡고 위로 당긴다.');
      await you.print_and_wait(
        '수도꼭지를 움켜쥔 듯 가슴 전체가 끌려 올라간다.',
      );
      await you.print_and_wait(
        '유두를 잡은 채 사방으로 흔들면 손끝 아래에서 가슴이 춤춘다.',
      );
      await acute.say_and_wait([
        '응❤️~',
        callname,
        ', 안 돼……가슴을 건드리지 말아 주렴❤️……간지럽단다❤️~',
      ]);
      await you.print_and_wait([
        '유두를 희롱당하는 대로 내버려 둔 채 입술을 깨물고 손으로 얼굴 윗부분을 가린 ',
        y_call_a,
        '이(가) 몇 번이고 목소리를 흘린다.',
      ]);
      await you.print_and_wait([
        '……더 나아가, ',
        y_call_a,
        '이(가) 육욕에 빠진 얼굴을 보고 싶다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_clitoris(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['붉게, 곧게 서 있다.']);
      await you.print_and_wait(['조금 건드리면 좌우로 길게 흔들린다.']);
      await acute.say_and_wait([
        '응……그렇게 계속 바라보지는 말아 주겠니? 조금 부끄럽구나……',
      ]);
      await you.print_and_wait([
        '그 말을 듣고도 손끝은 여전히 음핵을 위아래로 훑는다.',
      ]);
      await you.print_and_wait([
        '……묘한 감촉이다. 조금 더 진지하게 살펴보고 싶다——',
      ]);
    } else {
      await you.print_and_wait([
        '힘껏 눌러 보지만, 금세 더 붉게 부풀어 오르며 손끝을 튕겨 낸다.',
      ]);
      await you.print_and_wait([
        '옅은 빛깔이 곱다. 사진으로 남기고 싶을 정도로……',
      ]);
      await acute.say_and_wait([callname, ', 안 된단다~']);
      await you.print_and_wait([
        '속마음을 읽은 ',
        y_call_a,
        '이(가) 거절한다.',
      ]);
      await you.print_and_wait(['……그렇다면 어쩔 수 없이 꼬집을 수밖에.']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async finger_fuck(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['손가락이 쉽게 삼켜진다.']);
      await you.print_and_wait([
        '위아래로 휘저으면 구멍 안이 꿈틀거리는 것이 뚜렷이 느껴진다.',
      ]);
      await acute.say_and_wait(['응❤️~, 응❤️~.']);
      await you.print_and_wait([
        y_call_a,
        '이(가) 작은 소리를 흘리며 저도 모르게 두 다리를 오므린다.',
      ]);
      await you.print_and_wait(['……조금 더 크게 소리를 내도 좋을 텐데.']);
    } else {
      await you.print_and_wait([
        '중지를 구멍 안으로 넣고 엄지로 음핵을 희롱한다.',
      ]);
      await you.print_and_wait(['확실히 ', y_call_a, '의 목소리가 커졌다.']);
      await acute.say_and_wait(['아❤️~, 응❤️~ 거기❤️~ 굉장해……']);
      await you.print_and_wait([
        '손끝에 따뜻한 흐름이 느껴진다……아직 더 나아갈 수 있을 것 같다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async prepare_virgin(acute, you, callname) {
    await acute.say_and_wait(['응……', callname, '의 명령이라면……']);
    await you.print_and_wait([
      '양손으로 자신의 아래쪽에 있는 가느다란 틈을 벌린다.',
    ]);
    await you.print_and_wait([
      '입구가 벌어지자 뜨거운 숨결과 함께 축축한 점액이 넘쳐 나온다.',
    ]);
    await acute.say_and_wait(['그렇게 빤히 바라보면……조금 부끄럽단다~']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async stimulate_g_spot_by_finger(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait(['응❤️~~~~~~~']);
      await you.print_and_wait([
        y_call_a,
        '의 가장 민감한 곳을 찾았다. 가볍게 건드리기만 해도 구멍 안이 꿈틀거린다.',
      ]);
      await you.print_and_wait([
        '혀를 내밀고 크게 숨을 내쉬며, G스폿을 건드릴 때마다 허리를 활처럼 높이 젖힌다.',
      ]);
      await you.print_and_wait(['……벌써 꽤 흐트러진 얼굴이다.']);
    } else {
      await you.print_and_wait([
        '닿기만 해도 손끝으로 뜨거운 기운이 전해진다.',
      ]);
      await you.print_and_wait([
        '손가락을 빼자 검지와 중지 사이의 점액이 실처럼 늘어진다.',
      ]);
      await you.say_and_wait([
        '저기……',
        y_call_a,
        ', 여자 몸속에는 왜 이런 곳이 있는 거야?',
      ]);
      await acute.say_and_wait([
        '하, 하아~❤️……',
        callname,
        ', 너무 잘하는구나.',
      ]);
      await you.print_and_wait([
        '숨과 목소리를 흘리는 ',
        y_call_a,
        '은(는) 질문에 대답하는 대신 다른 답을 돌려준다——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '불쾌한 냄새는 없다. 꼼꼼히 씻어 두어 오히려 깨끗하다.',
      ]);
      await you.print_and_wait([
        '그래도 살짝 쓰다듬기만 해도 꼬리가 경계하듯 선다.',
      ]);
      await acute.say_and_wait([
        '저기……',
        callname,
        ', 아닐 거라고는 생각하지만, 혹시 그쪽에 관심이——히익❤️~!',
      ]);
      await you.print_and_wait([
        '말을 마치기도 전에 검지가 들어가자 ',
        y_call_a,
        '이(가) 자극에 높은 소리를 낸다.',
      ]);
    } else {
      await acute.say_and_wait(['그쪽은……씻어 뒀단다.']);
      await you.print_and_wait([
        '무언가 눈치챘는지 고개를 숙이고 시선을 피하는 ',
        y_call_a,
        '이(가) 먼저 대답한다.',
      ]);
      await you.print_and_wait([
        '그렇다면 잘됐다. 손가락이 막힘없이 ',
        acute.sex,
        '의 뒤쪽으로 뻗는다.',
      ]);
      await you.print_and_wait([
        '손가락 하나, 둘. 한 마디, 두 마디……조금씩 나아갈 때마다 ',
        y_call_a,
        '의 높은 목소리가 들린다.',
      ]);
      await acute.say_and_wait(['하아……', callname, ', 역시 변태구나.']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async prepare_anal(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      "양손으로 뒤를 벌리자 옅은 빛깔의 구멍에서 이따금 '푸, 푸' 하는 소리가 새어 나온다.",
    ]);
    await you.print_and_wait([
      '뜨거운 숨결을 내뿜는 그 구멍에 입김을 불어 넣는다면……',
    ]);
    await acute.say_and_wait([
      '그런 짓을 하면 내일은 바삭바삭한 말랭이를 안 줄 거란다……',
    ]);
    await you.print_and_wait([
      '그 ',
      y_call_a,
      '도 스스로 뒤를 벌리고 있는 상황에서 거기까지는 허락하지 않을 모양이다……',
    ]);
    await you.print_and_wait([
      '……그래서 더더욱 그 구멍에 입김을 불어 넣고 싶어진다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_leg(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '가늘고 매끄러운 허벅지에서는 단련으로 굵어진 흔적을 전혀 찾을 수 없다.',
      ]);
      await you.print_and_wait([
        y_call_a,
        "의 다리를 위아래로 쓰다듬다 보면 어째서인지 '위잉~ 위잉~' 하는 소리를 내고 싶어진다.",
      ]);
      await you.print_and_wait([
        '한 걸음 더 나아가려는 순간, 희고 아름다운 다리가 구렁이처럼 허리를 휘감는다.',
      ]);
      await acute.say_and_wait([
        '저기, 아까부터 계속 ',
        callname,
        '이(가) 쓰다듬고 있네……나도 만져 봐도 되겠니?',
      ]);
      await you.print_and_wait([
        '……아차. 허리가 휘감긴 뒤에는 ',
        y_call_a,
        '을(를) 이기는 자신을 상상할 수 없다.',
      ]);
    } else {
      await you.print_and_wait([
        '매끄러운 발가락과 발바닥에서는 오랜 세월 달려 온 흔적이 보이지 않는다. 신기하다.',
      ]);
      await you.print_and_wait([
        '특별한 취향이 있는 건 아니다. 그저 이 발을 입에 넣고 싶을 뿐이다.',
      ]);
      await acute.say_and_wait(['곰팡이가 필 텐데?']);
      await you.say_and_wait([
        '……',
        y_call_a,
        ', 이렇게 깨끗하고 냄새도 없는 발에 그럴 리가 없잖아.',
      ]);
      await acute.say_and_wait(['어머……그런 거니?']);
      await you.print_and_wait([
        '그렇게 말하자 반대편에서 ',
        y_call_a,
        '은(는) 망설임 없이 ',
        you.get_colored_name(),
        '의 발을 끌어안고 입에 넣으려 한다.',
      ]);
      await you.say_and_wait(['……아니, 아니, 그건 하지 말자.']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_tail(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '손가락 네 개를 꼬리 뿌리 사이로 넣어 아래로 빗어 내린다.',
      ]);
      await you.print_and_wait([
        '더없이 좋은 감촉이다. 부드럽고 끝이 갈라진 털도 없다……꾸준히 손질해 왔다는 걸 알 수 있다.',
      ]);
      await you.print_and_wait([
        '……어떤 ',
        acute.uma_sex_title,
        '에게는 꼬리가 건드려서는 안 되는 부위라서, 만졌다가는 덤벼든다고 들었다……정말일까.',
      ]);
      await acute.say_and_wait(['정말이란다~']);
      await you.print_and_wait([
        '미소를 지으며 의문에 답하지만, 꼬리는 말과 다른 대답을 하듯 기쁘게 좌우로 흔들린다.',
      ]);
    } else {
      await you.print_and_wait([
        '꼬리 끝에 코를 가까이 대고 살짝 냄새를 맡는다.',
      ]);
      await you.print_and_wait([
        y_call_a,
        '의 꼬리에서는 봄비가 내린 뒤의 흙처럼 맑은 냄새가 난다.',
      ]);
      await you.print_and_wait([
        '얼굴을 통째로 꼬리에 묻고 ',
        y_call_a,
        '의 향기를 마음껏 느끼고 싶다.',
      ]);
      await acute.say_and_wait([
        '있지……',
        callname,
        '의 취향은 참 독특하구나~',
      ]);
      await you.print_and_wait([
        '그렇게 말하며 ',
        y_call_a,
        '의 꼬리가 위아래로 흔들려 뺨을 어루만지고 코끝을 스친다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async pull_tail(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await acute.print_and_wait([
        acute.uma_sex_title,
        '의 꼬리는 트레이너 전용 스위치가 아니다.',
      ]);
      await acute.print_and_wait([
        '그런데 이제는 어디서든 꼬리를 당기면 저절로 엉덩이가 들린다.',
      ]);
      if (acute.sex_code !== 1) {
        await acute.say_and_wait(
          ['응, 나도 참 쉬운 여자가 되어 버렸구나——'],
          true,
        );
        await acute.print_and_wait([
          '꼬리의 아픔과 함께 높이 들린 엉덩이가 좌우로 흔들리고, 기다리지 못하는 아래쪽에서는 벌써 침이 흐른다.',
        ]);
        await acute.print_and_wait([
          '더 나아가고 싶다. 꼬리를 당겨지고, 엉덩이를 맞고, 은밀한 곳을 희롱당하며, 위에서 아래까지 철저히 농락당해 ',
          callname,
          '의 냄새로 물들고 머릿속이 텅 빌 때까지.',
        ]);
        await acute.print_and_wait([
          '……이런 생각을 하는 ',
          acute.uma_sex_title,
          '는 자신뿐만이 아닐 것이다.',
        ]);
      }
    } else {
      await you.print_and_wait([y_call_a, '의 꼬리를 힘주어 당긴다.']);
      await you.print_and_wait(['조금만 힘을 주어도 엉덩이가 높이 들린다.']);
      await you.print_and_wait([
        acute.uma_sex_title,
        '에게는 건드리면 덤벼들 만큼 금기인 곳인데도, ',
      ]);
      await you.print_and_wait([
        '회색빛이 도는 밤색 꼬리를 세게 잡아당겨도 ',
        y_call_a,
        '은(는) 저항하지 않는다.',
      ]);
      await acute.say_and_wait([
        '응……내일은 바삭바삭한 말랭이를 안 줄 거란다?',
      ]);
      await you.print_and_wait([
        '입술을 삐죽이며 작게 항의하면서도, 높이 든 엉덩이는 벌써 저절로 흔들리고 있다.',
      ]);
      await you.print_and_wait(['……기대하고 있는 거지, ', y_call_a, '？']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async cunnilingus(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '의외로 은은하게 ',
      acute.child_sex_title,
      ' 특유의 냄새를 풍기고 있다.',
    ]);
    await you.print_and_wait([
      '작은 혀로 위쪽을 한 번 핥아…… 그게 어떤 맛인지, 잘 설명할 수 없다.',
    ]);
    await acute.say_and_wait([callname, '의 혀…… 간지러워']);
    await you.print_and_wait([
      '반대편에서 ',
      y_call_a,
      '이(가) 손을 뻗어, 머리를 파묻고 있는 사람의 머리를 부드럽게 쓰다듬는다.',
    ]);
    await you.print_and_wait([
      '……조교하는 쪽인데도, 오히려 길들여지는 듯한 안도감을 느낀다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_virgin(acute, you, y_call_a) {
    await you.print_and_wait([
      '반사적으로 오므린 두 다리를 억지로 벌리고, 이 입을 ',
      acute.child_sex_title,
      ' 특유의 기관 쪽으로 가져간다.',
    ]);
    await you.print_and_wait([
      '크게 핥고, 크게 숨을 불어넣는다. 축축한 입구에 금세 끈적한 액체가 섞인다.',
    ]);
    await acute.say_and_wait(['아…… 거기❤️, 약점…… 건드렸어요❤️~']);
    await you.print_and_wait([
      '머리가 저절로 들리고, 정수리를 쓰다듬고 있던 두 손도 처음만큼 가볍지 않게, 뒤통수를 감싸며 살며시 눌러온다.',
    ]);
    await you.print_and_wait([
      '그 ',
      y_call_a,
      '은(는), 더 높은 쾌감을 갈망하는 것이다.',
    ]);
    await you.print_and_wait([
      '……그렇게 생각하며, 따뜻한 흐름이 밀려오기 전에, 다시 한 번 핥는다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_blow_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        '바닥에 무릎을 꿇고, 토끼처럼 두 다리를 크게 벌린다.',
      ]);
      await you.print_and_wait([
        "고개를 들면 눈앞에 역광을 받은 '뿌리'가 보인다.",
      ]);
      await acute.say_and_wait(['어머어머……기운도 좋구나.']);
      await you.print_and_wait([
        '명령받은 대로 ',
        y_call_a,
        "은(는) 붉어진 얼굴을 육봉에 가까이 댄다. 뿌리를 핥으며 코를 위아래로 움직여, '활기찬' 냄새를 탐욕스럽게 들이마신다.",
      ]);
      await acute.say_and_wait(['하아❤️……신선한 냄새구나❤️~']);
      await you.print_and_wait([
        '주머니에 애정 어린 입맞춤을 남기자 곧 물방울 떨어지는 소리가 들린다……',
      ]);
    } else {
      await acute.say_and_wait([
        "'육봉 청소'라니……",
        callname,
        '의 취향은 참 독특하구나.',
      ]);
      await you.print_and_wait([
        '육봉 앞에 엎드려 코끝으로 끝부분을 건드린다. 냄새를 맡으며 대답한다.',
      ]);
      await you.print_and_wait([
        '곧 옅은 빛깔의 입술 사이로 혀를 내밀어 홈을 더듬는다. 정말 청소하듯 좌우로 훑으며 한 바퀴 돈다.',
      ]);
      await you.print_and_wait([
        '때가 혀끝에 모이지만 ',
        y_call_a,
        '은(는) 싫어하지 않고, 눈을 풀며 입에 머금었다가 삼킨다.',
      ]);
      await acute.say_and_wait([
        "자, '창끝' 손질은 끝났단다. 이제 ",
        callname,
        "이(가) 누구를 '개척'하든 괜찮겠구나~",
      ]);
      await you.print_and_wait([
        y_call_a,
        '은(는) 미소 지으며 말한다. 하지만 ',
        acute.sex,
        '의 코는 여전히 육봉에 닿아 있고, 떨어질 기색이 없다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async ask_deep_blow_job(acute, you, callname) {
    await acute.print_and_wait([
      '목구멍 깊이까지 해 달라는 요구를 듣자, 항의하듯 육봉을 살짝 문다.',
    ]);
    await acute.print_and_wait([
      '진심으로 항의하는 것은 아닌지, 곧 스스로 뿌리까지 삼킨다.',
    ]);
    await acute.print_and_wait([
      '목까지 들어온 육봉을 위아래로 삼키며, 잠수 훈련을 하듯 박자를 맞춰 숨을 쉰다.',
    ]);
    await acute.print_and_wait([
      "코로는 육봉에서 풍기는 '양기'를 들이마시고, 입가에는 삼키는 동안 빠진 음모가 남아 있다……",
    ]);
    await acute.say_and_wait(
      ['아……이건 트레이닝에 쓸 수 있을지도 모르겠구나.'],
      true,
    );
    await acute.print_and_wait([
      '트레이닝장에서 스스로 ',
      callname,
      '의 육봉을 삼키는 광경이 머릿속을 스치지만, 곧 산소 부족으로 몽롱해지며 사라진다.',
    ]);
    await acute.print_and_wait(['……이제 더는 기다릴 수 없다.']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_blow_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '「팡, 팡」 하는, 그리 크지 않은 소리.',
      y_call_a,
      '의 뺨에, 육봉의 흔적이 남는다.',
    ]);
    await you.print_and_wait([
      '곧은 육봉이 ',
      y_call_a,
      '의 코에 부딪혀, 눈이 돌아갈 정도의 「양기」를 내뿜는다.',
    ]);
    await acute.say_and_wait([
      '응…… 너무해요 ',
      callname,
      '. 육봉으로',
      acute.child_sex_title,
      '의 얼굴을 때리다니…… 그런 것, 싫어하게 돼요?',
    ]);
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        '말로는 그렇게 말해도 ',
        y_call_a,
        '의, 육봉을 보는 눈은, 벌써 자신을 팔고 있다.',
      ]);
      await you.print_and_wait([
        acute.sex,
        '는 스스로 위치를 고쳐, 끝을 삼키고, 상하로 핥는다——',
      ]);
      await acute.say_and_wait([
        '다른 ❤️……',
        acute.child_sex_title,
        '에게는❤️, 하지 말아 주세요?',
      ]);
      await you.print_and_wait([
        '꼬리가 흥분해서 좌우로 흔들리고, 삼키는 움직임도 열성적이 된다. 뺨의 육봉 자국 아래에, 깊은 갈망이 숨겨져 있다.',
      ]);
    } else {
      await you.print_and_wait(['……지금의 네가, 그걸 신경이나 쓰는 거야?']);
      await you.print_and_wait([
        y_call_a,
        '의 머리카락을 움켜쥐고, 육봉을 옅은 입술로 밀어 넣는다. 이빨에 가로막히지 않고, 편하게 입안으로 들어간다.',
      ]);
      await you.print_and_wait([
        y_call_a,
        '가 무언가 중얼거리지만, 들리지 않는다. 따뜻한 입안에서, 잠들어 있던 혀가 억지로 깨어나, 들어온 것을 받아들인다——그게 느껴진다면, 그것으로 충분하다.',
      ]);
      await acute.say_and_wait(['응❤️……구푸푸❤️~']);
      await acute.say_and_wait([callname, '에게, 사용당했습니다❤️~'], true);
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async force_deep_blow_job(acute) {
    await acute.print_and_wait([
      '쾌감 앞에서 자신의 항의 따위는 더 이상 중요하지 않다.',
    ]);
    await acute.print_and_wait([
      '머리카락을 붙잡히고, 육봉이 거침없이 목구멍으로 밀려 들어온다.',
    ]);
    await acute.print_and_wait([
      '위아래로 오가는 움직임, 혀의 희롱, 이따금 뿌리에서 새어 나오는 으응 소리……누구라도 달아오르리라.',
    ]);
    await acute.print_and_wait([
      '질식하지 않도록 작은 입을 힘껏 벌리고, 왕복하는 움직임 사이에서 숨 쉴 틈을 찾는다.',
    ]);
    await acute.say_and_wait(
      ['쓰이고 있어, 쓰이고 있어, 쓰이고 있어, 쓰이고 있어, 쓰이고 있어❤️~'],
      true,
    );
    await acute.print_and_wait(['싫은가? 싫지는 않다……이상하다.']);
    await acute.print_and_wait(['오히려……쓰이는 쾌감이 있다.']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '손끝이 기둥을 훑고, 끝에 닿을 때마다 붉은 육봉이 튀어 오른다.',
    ]);
    await acute.say_and_wait(['응……보고 있으면 왠지 귀엽구나~']);
    await you.print_and_wait([
      '그렇게 말하며 육봉에 살며시 입김을 불고, 오른손을 뻗어 몸통을 부드럽게 훑는다……',
    ]);
    await acute.say_and_wait(['저기, ', callname, ', 이 정도면 충분하겠니?']);
    await you.print_and_wait([
      '육봉에 말을 걸듯 ',
      y_call_a,
      '은(는) 눈을 가늘게 뜨고, ',
    ]);
    await you.print_and_wait([
      "실처럼 가늘고 요염한 눈으로 손안의 '뿌리'를 바라본다……",
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async ask_hand_and_blow_job(acute, you, callname) {
    await acute.print_and_wait(['끝을 삼키자 기둥이 부풀었다가 가라앉는다.']);
    await acute.print_and_wait([
      '부풀어 오른 핏줄을 따라 두 손을 번갈아 아래로 훑자 냄새는 점점 짙어진다.',
    ]);
    await acute.say_and_wait([
      '구❤️~',
      callname,
      '의 작은 트레이너 씨는 이제 기다릴 수 없는 모양이구나——',
    ]);
    await acute.print_and_wait(['그렇게 말하고는 끝에 입을 맞춘다.']);
    await acute.say_and_wait([
      '쪽❤️~~~힘내렴. 나오면~ 내가 최대한 마실 테니❤️~',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      '의 손을 잡아 자신의 육봉 앞에 놓고 위아래로 움직인다.',
    ]);
    await you.print_and_wait([
      y_call_a,
      '은(는) 거역하지 않고 순순히 두 손을 위아래로 훑는다. 하지만 늘 포근하게 감싸 주던 ',
      y_call_a,
      '이(가) 의미심장하게 웃는다.',
    ]);
    await acute.say_and_wait([callname, '……쉽게 만족하는구나❤️~']);
    await you.print_and_wait([
      '온화하게 미소 지으며 자신을 바라보지만, 그 미소에는 도발하는 기색이 섞여 있다.',
    ]);
    await you.print_and_wait([
      '……더 심한 짓을 ',
      y_call_a,
      '에게 하고 싶어진다.',
    ]);
    await you.print_and_wait([
      '그 생각은 손가락의 어루만짐을 받는 아래쪽과 함께 점점 부풀어 오른다——',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_hand_and_blow_job(acute, you, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      '의 손이 아직 기둥을 훑고 있는데도, 반대쪽 손으로 ',
      y_call_a,
      '의 머리카락을 누르고 끝을 입 안으로 밀어 넣는다.',
    ]);
    await you.print_and_wait([
      '……전부 ',
      y_call_a,
      '이(가) 잘못한 거다.',
      y_call_a,
      '이(가) 요염한 탓이다.',
      y_call_a,
      '이(가) 다정한 탓이다.',
      y_call_a,
      '이(가) 유혹한 탓이다——',
    ]);
    await you.print_and_wait([
      '귀가 움찔거리고, 그대로 힘을 주어 ',
      y_call_a,
      '의 머리를 누른다.',
    ]);
    await you.print_and_wait([
      '저항은 없다. 오히려 입 안의 끝은 혀의 환영을 받고, 기둥을 훑는 두 손은 계속 제 역할을 다한다.',
    ]);
    await acute.say_and_wait(['응❤️~~~도구처럼 쓰이고 있구나❤️~'], true);
    await acute.say_and_wait(['이 쾌감은 잊을 수 없겠구나❤️~~~'], true);
    await you.print_and_wait([
      y_call_a,
      '의 비취빛 눈동자에 분홍빛 황홀감이 반짝인다……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {string} is_huge_tit ワンダーアキュートが巨乳か
   */
  async ask_tit_job(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        '풍성한 가슴이 적동빛 육봉을 감싸고, 매끄러운 끝에 ',
        y_call_a,
        '의 다정한 얼굴이 비친다.',
      ]);
      await acute.say_and_wait([
        '설마 내 가슴으로 ',
        callname,
        '의 육봉을 감쌀 날이 올 줄이야~',
      ]);
      await you.print_and_wait([
        y_call_a,
        '은(는) 부드럽게 웃으며 손가락 하나로 끝을 살살 원을 그리듯 쓰다듬는다.',
      ]);
      await you.say_and_wait(['……슬슬 시작하자.']);
      await acute.say_and_wait(['그래~']);
      await you.print_and_wait([
        '작게 고개를 끄덕인 ',
        y_call_a,
        '은(는) 양손을 가슴 옆에 대고 살을 끌어모은다.',
      ]);
      await acute.say_and_wait([
        '내 가슴은 ',
        callname,
        '덕분에 커졌단다~ 그러니 마음껏 즐기렴❤️~',
      ]);
    } else {
      await acute.print_and_wait([
        '작은 가슴으로 적동빛 육봉을 감싸기는 물리적으로 어렵다.',
      ]);
      await acute.print_and_wait([
        '억지로 하면 줄로 문지르듯 아프게 할 것 같다.',
      ]);
      await acute.print_and_wait([
        '……그래도 파이즈리를 전혀 못 하는 것은 아니다.',
      ]);
      await acute.print_and_wait([
        '가슴을 모아 옅은 빛깔의 유두를 기둥에 대고, 부드러운 가슴 사이로 육봉을 위아래로 움직인다.',
      ]);
      await acute.say_and_wait(['영차, 영차~']);
      await acute.print_and_wait(['유두에 문질러지며 육봉이 조금씩 커진다……']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async ask_tit_and_blow_job(acute, you) {
    await you.print_and_wait(['가슴을 밀착시키며, 혀를 내민다.']);
    await you.print_and_wait([
      '미끼에 낚인 물고기처럼, 혀가 끝의 상하에 맞춰 흔들린다.',
    ]);
    await you.print_and_wait([
      '입가에 닿을 때마다, 혀는 반드시 홈으로 들어간다.',
    ]);
    await acute.say_and_wait(['응❤️……구푸푸❤️~푸하❤️~하❤️~']);
    await you.print_and_wait([
      '얼굴은 음란해 보이지 않는데 ',
      acute.child_sex_title,
      '가 내지 말아야 할 상스러운 소리를, 몇 번이고 흘린다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {string} is_huge_tit ワンダーアキュートが巨乳か
   */
  async fuck_tit(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        y_call_a,
        "을(를) 거칠게 밀어 눕히고, '조교' 끝에 풍성해진 가슴 사이로 육봉을 밀어 넣는다.",
      ]);
      await you.print_and_wait([
        '양손으로 옅은 빛깔의 유두를 잡고, 아래쪽을 가슴 사이로 계속 왕복시키며 부드러움을 만끽한다.',
      ]);
      await you.say_and_wait(
        [
          '……',
          y_call_a,
          '의 가슴은 내 덕분에 커졌다. 내 것이다. 마음껏 써도 된다——',
        ],
        true,
      );
      await acute.say_and_wait(['그래, 내 가슴은 ', callname, '의 것이란다……']);
      await you.print_and_wait([
        '얼굴을 붉힌 채 강제로 파이즈리를 당한다는 사실도 모르는 듯한 ',
        y_call_a,
        '은(는) 여전히 미소 짓고 있다.',
      ]);
      await acute.say_and_wait([
        '응❤️……그러니 그렇게 서두르지 말렴.',
        callname,
        '이(가) 원한다면 가슴으로 도와줄 테니~',
      ]);
      await you.print_and_wait([
        '유두를 여전히 붙잡힌 채 아픔에 눈물이 맺히면서도, ',
        y_call_a,
        '은(는) 오른손을 뻗어 자신을 침범하는 이의 이마를 쓰다듬으려 한다.',
      ]);
      await you.print_and_wait([
        '……더 나아가 ',
        y_call_a,
        '을(를) 범하고 싶다.',
      ]);
    } else {
      await you.print_and_wait([
        y_call_a,
        '의 가슴 사이로 거칠게 밀어 넣고 싶다.',
      ]);
      await you.print_and_wait([
        '울고 싶어도 눈물이 나오지 않고, 싫어도 어쩔 수 없어 미소 지으면서도 겁에 질린 ',
        y_call_a,
        '의 얼굴을 보며 가슴 사이로 거칠게 밀어 넣는다.',
      ]);
      await you.print_and_wait([
        '하지만 정말로 ',
        y_call_a,
        '을(를) 밀어 눕히고 육봉을 가슴 앞에 대자, 도무지 그렇게 할 수 없다.',
      ]);
      await you.print_and_wait([
        '하나는 가슴이 너무 작아 끼울 수 없기 때문이고, 다른 하나는 ',
        y_call_a,
        '이(가) 여전히 두려움 없이 미소 짓고 있기 때문이다.',
      ]);
      await acute.say_and_wait([
        '끼울 수는 없지만, ',
        callname,
        '이(가) 파이즈리를 원한다면 이쪽으로 오렴❤️~',
      ]);
      await you.print_and_wait([
        '그렇게 말하며 길을 안내하듯, ',
        y_call_a,
        '은(는) 자신의 유두 앞에 육봉이 꼭 지나갈 만한 하트를 만든다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async fuck_tit_and_mouth(acute, you, y_call_a) {
    await you.print_and_wait([
      '유두를 잡고 가슴 사이로 밀어 넣는다. 그것만으로는 부족하다.',
    ]);
    await you.print_and_wait([
      y_call_a,
      '에게도 음란한 표정을 짓게 하고 싶다.',
      y_call_a,
      '의 미소를 무너뜨리고 싶다.',
    ]);
    await you.print_and_wait([
      '굵은 육봉이 거칠게 ',
      y_call_a,
      '의 미소를 향한다.',
    ]);
    await you.print_and_wait([
      '문을 뚫고 입 안으로 들어간다. 예상했던 저항은 없고, 혀와 타액의 봉사만이 맞이한다.',
    ]);
    await you.print_and_wait([
      '흐름에 몸을 맡긴 듯하면서도 처음부터 알고 있었다는 듯, ',
      y_call_a,
      '의 눈에 웃음이 번진다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_anal(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '응……',
        callname,
        '에게, 이런 취미가 있다니……',
      ]);
      await you.print_and_wait([
        '역시 이 플레이는 ',
        y_call_a,
        '조차 받아들일 수 없는 건가……',
      ]);
      await you.print_and_wait([
        '……말로는 내키지 않아도 ',
        y_call_a,
        '은(는) 스스로 뒤에 무릎을 꿇는다.',
      ]);
      await acute.say_and_wait([
        '응…… 이런 일은, 다른',
        acute.child_sex_title,
        '에게는 안 돼요?',
      ]);
      await you.print_and_wait([
        '불평을 하면서 ',
        y_call_a,
        '은(는) 혀를 내밀고, 뒤쪽을 상하로 희롱한다——',
      ]);
    } else {
      await you.say_and_wait(['구푸푸……응❤️~츄~구푸푸……']);
      await acute.print_and_wait([
        '나의 엉덩이를 잡고 ',
        callname,
        '이(가) 뒤쪽을 한마음으로 핥는다. 때때로 하는 키스와 함께, 쾌감이 전류처럼 머리를 달린다.',
      ]);
      await acute.print_and_wait(['……기다려요, 조금 자극이 너무 강해요.']);
      await you.say_and_wait([
        '구푸……저기 ',
        y_call_a,
        ', 여기까지 시켰으니. 쉽게 놓아주지 않을 거란다? 츄❤️~~~',
      ]);
      await acute.print_and_wait([
        '눈앞의 트레이너가 쾌감에 목소리를 잃어가는 것을 보면 ',
        callname,
        '도 흥분으로 조금 「젖어」 온다.',
      ]);
      await acute.print_and_wait([
        '툭, 툭. 누구로부터 떨어진 것인지 모르는 물소리.',
      ]);
      await acute.print_and_wait([
        '……',
        callname,
        '의 「성장 여지」를, 조금 과소평가했던 모양이다.',
      ]);

      await you.say_and_wait(['응…… 우우, 푸르루, 구·~']);
      await acute.print_and_wait([
        '나의 뒤에 엎드려 ',
        callname,
        '이(가) 탐욕스럽게 입술과 혀를 움직인다——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_nipple(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        '유두를 빨고 싶다고 했을 뿐인데, ',
        y_call_a,
        '은(는) 스스로 가슴을 내민다.',
      ]);
      await acute.say_and_wait([
        '부드럽게 해 주렴, ',
        callname,
        '. 나한테도, 다른 ',
        acute.uma_sex_title,
        '한테도~',
      ]);
      await you.print_and_wait([
        '뜻이 담긴 말은 신경 쓰지 않고 얼굴을 가까이 대어 살며시 한 번 빤다.',
      ]);
    } else {
      await you.print_and_wait([
        '붉은 유두는 충혈되어 솟아 있고, 벌써 입술과 혀의 포로가 되고 싶어 한다.',
      ]);
      await acute.say_and_wait(['어머어머……그렇게 기대하고 있지는 않단다.']);
      await you.print_and_wait([
        '그래도 얼굴을 가까이 대고 살며시 한 번 빤다.',
      ]);
      await acute.say_and_wait(['아❤️~']);
      await you.print_and_wait(['전기가 흐르는 듯한 목소리가 뒤따른다.']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async bite_nipple(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '유두를 살짝 깨물자 ',
      y_call_a,
      '이(가) 민감하게 반응하며 소리를 흘린다.',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '응❤️……',
        callname,
        ', 그렇게 세게 하면……응~ 유두가 떨어지겠구나?',
      ]);
      await you.print_and_wait([
        '민감함과 아픔을 참으면서도, ',
        y_call_a,
        '은(는) 여전히 가슴에 얼굴을 묻은 자신을 다정하게 쓰다듬는다.',
      ]);
    } else {
      await you.print_and_wait([
        '조금 심하게 깨물었는지 목소리에 아픔이 섞인다.',
      ]);
      await acute.say_and_wait([
        '후❤️……',
        callname,
        ', 그렇게 깨물어도 젖은 나오지 않는단다?',
      ]);
      await you.print_and_wait([
        '뒤통수를 가볍게 두드리면서도 ',
        y_call_a,
        '은(는) 여전히 다정하게 자신을 가슴으로 맞아들인다.',
      ]);
      await you.print_and_wait([
        '정말 아픈 건지, 거절하면서도 부끄러워하는 건지 알 수 없다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_milk_and_hand_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '가슴을 빨면서 그쪽도 쓰다듬어 달라는 거니……좋단다~',
      ]);
      await you.print_and_wait([
        y_call_a,
        '의 무릎을 베고 눈앞의 가슴을 안심하고 빤다. 반대편에서는 굵은 육봉을 ',
        y_call_a,
        '이(가) 부드럽게 쓰다듬는다.',
      ]);
      await acute.say_and_wait(['어머……아주 기분 좋아 보이는구나~']);
      await you.print_and_wait([
        '다정한 목소리 아래, 가슴 옆 틈으로 보이는 것은 얼굴이 붉어진 ',
        y_call_a,
        '과(와), 충혈되어 솟은 육봉으로 이따금 향하는 시선.',
      ]);
    } else {
      await you.print_and_wait([
        y_call_a,
        '의 무릎을 베고 누워 ',
        y_call_a,
        '의 양쪽 가슴을 탐욕스럽게 빨며 자신의 흔적을 남긴다.',
      ]);
      await you.print_and_wait([
        '가슴의 민감함을 참으며 애써 미소 짓는 ',
        y_call_a,
        '이(가) 반대쪽 손을 아래로 뻗는다.',
      ]);
      await you.print_and_wait([
        '잡고, 쥐고, 덮고, 둥글게 감싸고, 훑는다——여러 손동작이 이어지자 몸통은 금세 충혈되어 솟아오른다.',
      ]);
      await acute.say_and_wait([
        '응~ 나올 것 같니? 괜찮단다~ 참지 않아도 괜찮아~',
      ]);
      await you.print_and_wait([
        '마음도 몸도 가벼워지지만, 너무 편안한 나머지 조금 반항하고 싶어진다. 입에 문 유두를 핥으며 눈앞의 유두에 살짝 힘을 준다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} callname プレイヤーのワンダーアキュートへの呼び方
   */
  async milk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        y_call_a,
        '의 무릎을 베고, 아기처럼, 충혈된 옅은 끝에서 흘러나오는 젖을 뺀다.',
      ]);
      await you.print_and_wait([
        '약간은 쓰지만, 젖의 향기는 있다. 오래 마시면, 목구멍에 단맛조차 남는다.',
      ]);
      await acute.say_and_wait([
        '응……',
        callname,
        '이(가) 그렇게 좋아한다면, 매일 아침의 조교 전에 몇 개라도 길어내서 보관해 둘까나……',
      ]);
      await you.print_and_wait([
        '양손으로 가슴을 모아 수유하면서, 고개를 기울이며 고민하는 ',
        y_call_a,
        '.',
      ]);
    } else {
      await you.print_and_wait([
        '담당인',
        acute.uma_sex_title,
        '에게 수유를 받는 것은, 부끄러운가. 물론 부끄럽다.',
      ]);
      await acute.say_and_wait([
        '최근, 가슴에서 넘치는 젖이 많아서…… 괜찮다면 ',
        callname,
        ', 처리를 도와주지 않겠니?',
      ]);
      await you.print_and_wait([
        '하지만 ',
        y_call_a,
        '의 부탁이라면, 트레이너의 임무이기도 하다. 그러니 안심하고 ',
        y_call_a,
        '의 무릎에 누운 채로, 옅은 끝에서 흘러나오는 젖을 계속 뺀다.',
      ]);
      await you.print_and_wait([
        '반대편에서 ',
        y_call_a,
        '은(는) 무릎 앞의 자신의 머리를 받치고, 아끼는 듯한 미소를 짓는다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async ask_non_penetrative(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '곧게 선 육봉이 뒤에서 들어와 ',
        y_call_a,
        '의 양다리 사이에 끼인다.',
      ]);
      await you.print_and_wait([
        '육봉에 밀착한 입술이 애액을 내뱉으며, 상하로 움직이며 봉사한다.',
      ]);
      await acute.say_and_wait(['에헤헤……', callname, '님은 매우 활기차네~']);
      await you.print_and_wait([
        '손바닥으로 끝을 쓰다듬으면서, 허리와 엉덩이를 비틀어 육봉을 상하로 모신다……',
      ]);
      await you.print_and_wait(['……', y_call_a, '은(는) 여전히 상냥하다.']);
    } else {
      await you.print_and_wait([
        '육봉이 입술에 밀착한 채 왕복하고, 눈앞의',
        acute.teen_sex_title,
        '의 몸에서 때때로 질척질척 소리가 난다.',
      ]);
      await acute.say_and_wait(['응❤️……아❤️~']);
      await you.print_and_wait([
        '너무 희롱당한 것인지 ',
        y_call_a,
        '가 목소리를 흘릴 때마다, 육봉의 옆으로 열파가 전해진다.',
      ]);
      await acute.say_and_wait(['응❤️~자궁 근처…… 조금, 가렵네~']);
      await you.print_and_wait([
        '자신의 하복부를 쓰다듬으며, 기다릴 수 없다는 듯이 ',
        y_call_a,
        '은(는) 더욱 적극적으로, 육봉에 허리와 엉덩이를 밀착시킨다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async sixty_nine(acute, you, y_call_a) {
    await you.print_and_wait([
      '풍성한 남국의 과실을 크게 핥고, 아래의 ',
      y_call_a,
      '도 지지 않는다.',
    ]);
    await you.print_and_wait(['두 몸이 겹쳐져, 각각 혀를 내밀고 경쟁한다.']);
    await acute.say_and_wait(['구푸푸❤️~ 지지 않아요…… 구푸❤️~']);
    await you.print_and_wait([
      '벌써 범람하고 있는데 ',
      y_call_a,
      '은(는) 반대편에서 더욱 열심히 봉사한다.',
    ]);
    await you.print_and_wait([
      '지고 싶지 않은 건가. 단지 정욕에 진 것인가. 어느 쪽이든 상관없다——',
    ]);
    await you.print_and_wait([
      '……얼굴이 하얀 때로 뒤덮일 때까지 ',
      y_call_a,
      '은(는) 놓아주지 않는다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어キュート
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {PrintedSpan} call_minoru 원더어큐트의 스루카와에게 부르는 방식
   */
  async ask_hair_fuck(acute, you, y_call_a, call_minoru) {
    await you.print_and_wait([
      '고개를 기울이자, 은색의 긴 머리카락이 육봉 위로 떨어진다. 한 가닥을 움켜쥐고, 육봉에 세 바퀴 감아, 묶는 것처럼 한다.',
    ]);
    await acute.say_and_wait([
      '응…… 내보내면, 나의 머리카락은 씻어도 지워지지 않는 육봉의 냄새가 배게 되네요……',
    ]);
    await you.print_and_wait([
      y_call_a,
      '은(는) 그렇게 말하면서, 머리카락을 휘감아 육봉을 다루는 손을 멈추지 않는다.',
    ]);
    await acute.say_and_wait([
      call_minoru,
      '……다른',
      acute.uma_sex_title,
      '에게, 머리 냄새를 들키게 된다면…… 어떻게 될까요?',
    ]);
    await you.print_and_wait([
      '……생각하지 않는다. 생각할 수 없다.',
      y_call_a,
      '의 손끝에 얽힌 머리카락이, 육봉 위에서 늘어간다……',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async force_hair_fuck(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      '의 머리카락을 움켜쥐고, 흐트러진 채로 육봉 위에 덮어 한꺼번에 쥔다. 은백색 머리카락을 따라 강하게 다룬다.',
    ]);
    await you.print_and_wait([
      '다른 한 손으로 ',
      y_call_a,
      '의 머리를 육봉에 밀착시키고 ',
      acute.sex,
      '에게, 자신의 머리카락이 「사용되는」 장면을 보여준다.',
    ]);
    await you.print_and_wait([
      '……',
      y_call_a,
      '의 몸 곳곳에 자국을 남기고 싶다…… 머리카락도 예외는 아니다.',
    ]);
    await acute.say_and_wait([
      '머리카락까지 독점하는 건가요……',
      callname,
      '님은 욕심쟁이구나~',
    ]);
    await you.print_and_wait([
      '미소 지으며 말하고, 누구의 도움도 없이 ',
      y_call_a,
      '은(는) 스스로 육봉에 정수리를 내린다.',
    ]);
    await you.print_and_wait([
      '시집가기를 기다리는',
      acute.teen_sex_title,
      '처럼, 뿜어져 나오는 육봉을 기다리며 ',
      acute.sex,
      '의 머리카락에 순백의 무구함을 덮어준다.',
    ]);
    await you.print_and_wait([
      '……원래 회백색인 머리카락에, 평생 남을 자국을 새긴다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async ask_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      '은(는) 함께 팔을 높이 올리고, 매끄러운 겨드랑이를 보여준다.',
    ]);
    await you.print_and_wait([
      '육봉은 곧 그쪽으로 뻗어, 겨드랑이의 오목한 곳을 따라 왕복한다.',
    ]);
    await you.print_and_wait([
      '싫어하지 않고, 오히려 흥미롭다는 듯이, 겨드랑이 옆에서 비벼지는 육봉을 보고 있다.',
    ]);
    await acute.say_and_wait([
      '이것이 ',
      callname,
      '님의 좋아하는 놀이인가요…… 조금, 귀엽구나~',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async force_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      '의 오른팔을 강제로 올리고, 부어오른 육봉이 겨드랑이 아래에서 일부러 움직인다.',
    ]);
    await you.print_and_wait([
      '냄새를 남기려는 듯, 육봉이 겨드랑이에서 멋대로 비틀리며 비벼진다.',
    ]);
    await you.print_and_wait([
      '하지만 ',
      y_call_a,
      '은(는) 평소처럼 싫어하지 않고, 오히려 코를 가까이 대고, 한 번 킁킁—',
    ]);
    await acute.say_and_wait([
      '아아, 이 양기, 절대로 지워지지 않는 냄새로구나❤️~',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   */
  async ask_foot_job(acute, you, callname) {
    await you.print_and_wait([
      '매끄러운 발바닥에, 경주를 달린 흔적은 전혀 보이지 않는다.',
    ]);
    await you.print_and_wait([
      '지금은, 발바닥이 서로 맞닿아 있다. 영리한 발가락이, 붉은 몸을 상하로 희롱한다.',
    ]);
    await acute.say_and_wait(['영차, 영차…… 상하로 흔들면, 더 기분 좋은가요?']);
    await you.print_and_wait([
      '발끝이 육봉을 움켜쥐고, 장난감처럼 상하로 흔든다. 발가락뿐인데도, 육봉을 희롱하는 재능이 있는 듯하다.',
    ]);
    await acute.say_and_wait([
      '다음 발코키는, 타이츠를 신고? 응…… 정말로 ',
      callname,
      '님에게는 이길 수 없네~',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   */
  async force_foot_job(acute, you, callname) {
    await you.print_and_wait([
      '타이츠를 신은 양발을 움켜쥐고, 억지로 모아 비벼지게 한다.',
    ]);
    await you.print_and_wait([
      '교합하기 위한 기관이 아니다. 다음 경주에서 질주할 다리다. 검은 타이츠 한 겹을 사이에 두고 있다. 그런데도 억누를 수 없는 흥분이, 양발 사이의 육봉을 더욱 부풀게 한다.',
    ]);
    await acute.say_and_wait([
      '어라어라…… 무슨 생각을 하는지, 알겠네 ',
      callname,
      '.',
    ]);
    await you.print_and_wait([
      '반대편의 얼굴은, 「당신을 위해 검은 타이츠를 신었어」라고라도 중얼거릴 것 같은 미소다.',
    ]);
    await acute.say_and_wait([
      '다음 경주…… 이 타이츠를 그대로 달리고 싶다네. 괜찮을까❤️~',
    ]);
    await you.print_and_wait([
      '……그런 말을 한 뒤에, 타이츠가 어떻게 될지, 아무도 모른다?',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async ask_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '스스로 육봉에 얽히는 은회색 꼬리. 한 번의 왕복으로, 금방 끈적이는 액체가 꼬리 전체에 묻는다.',
    ]);
    await acute.say_and_wait([
      '저기 ',
      callname,
      '……이제 슬슬, 그렇죠? 꼬리 말고도……',
    ]);
    await you.print_and_wait([
      '……아니, 아직 부족해. 더…… 꼬리에 더 자국을 남기고 싶어.',
    ]);
    await you.print_and_wait([
      y_call_a,
      '의 꼬리 안에 넣고, 다시 휘저은다.',
      y_call_a,
      '의 꼬리를, 더욱 액체에 담근다.',
    ]);
    await you.print_and_wait([
      '……누가 봐도 꼬리만으로 알 수 있도록 ',
      y_call_a,
      '은(는) 내 것이다, 라고.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async force_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '손으로 ',
      y_call_a,
      '의 꼬리를 육봉에 감고, 상하로 움직이며 ',
      acute.sex,
      '의 꼬리에 또 하얀 액체를 남긴다.',
    ]);
    await you.print_and_wait([
      '둘러보면, 은회색 꼬리 한 가닥이, 하얀 액체에 잠겨 있는 듯하다.',
    ]);
    await you.print_and_wait([
      '……하지만 아직 부족해. 기대에는, 훨씬 못 미친다.',
    ]);
    await acute.say_and_wait([
      '는…… 정말로 ',
      callname,
      '에게는 이길 수 없네요',
    ]);
    await you.print_and_wait([
      '반대편에서 ',
      y_call_a,
      '은(는) 숨을 내뱉고, 몸은 솔직하게 액체를 떨어뜨린다.',
    ]);
    await acute.say_and_wait([
      '다음 경주가 끝날 때까지, 꼬리는 씻지 않겠어요…… 그러니까——',
    ]);
    await acute.say_and_wait(['꼬리 말고도, 봐 주세요❤️~?']);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async missionary(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait('저기, 들어와 주세요❤️~');
      await you.print_and_wait([
        '눈앞의',
        acute.teen_sex_title,
        '가 양팔을 벌려, 눈앞의 사람을 품으로 끌어당긴다.',
      ]);
      await you.print_and_wait(
        '아래의 육봉이, 「아」 하는 한 마디와 함께, 편하게 구멍으로 들어간다.',
      );
      await you.print_and_wait(
        '눈앞의 넓은 팔을 느끼며, 하복부의 부풀어 오른 곳을 쓰다듬는다.',
      );
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait('그리고, 처녀를 가르는 고통의 파도——');
        await acute.say_and_wait('이걸로, 드디어……');
        await acute.say_and_wait([
          '전신에, 당신의 자국을 새겼네요 ',
          callname,
          '~',
        ]);
      } else {
        await acute.say_and_wait([
          '아…… 이제부터, 나는 ',
          callname,
          '에게, 철저하게 범해지는 거군요❤️~',
        ]);
      }
    } else {
      await you.print_and_wait(
        '넣는다, 넣는다, 넣는다…… 아래를 멈추지 않고 흔든다.',
      );
      await you.print_and_wait(['더 정액을, ', y_call_a, '의 몸에 더 정액을, ']);
      await acute.say_and_wait('구❤️…… 거기❤️ 대단해❤️~');
      await you.print_and_wait([
        y_call_a,
        '은(는) 혀를 내밀고 헐떡이고 있는데, 나태한 요소는 전혀 느껴지지 않는다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async missionary_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '이렇게 굵은 육봉이, 정말로 뒤로 들어가는 건가.',
      ]);
      await you.print_and_wait([
        '몸의 이치에 맞을지 고민하고 있자 ',
        y_call_a,
        '은(는) 스스로 양손으로 뒤를 연다.',
      ]);
      await acute.say_and_wait(['저기…… 들어와 주세요~?']);
      await you.print_and_wait([
        '붉은 얼굴로 화사하게 웃으며, 「이물질」의 침입을 스스로 맞이한다.',
      ]);
    } else if (era.get('exp:100:性交次数') > 0) {
      await acute.say_and_wait(['범해졌어요❤️ 구멍뿐만 아니라, 엉덩이까지❤️~']);
      await you.print_and_wait([
        '한 손을 얼굴 옆으로 V자로 만들고, 눈을 위로 향하며 혀를 내미는 ',
        y_call_a,
        '는, 도깨비 같은 얼굴이라도 지을 듯한 표정이다.',
      ]);
      await acute.say_and_wait([
        '응? 무엇을 하고 있냐고요? 응…… 이 자세가 ',
        callname,
        '을(를) 흥분시킨다고 들어서~',
      ]);
      await you.print_and_wait([
        '말하면서 ',
        y_call_a,
        '은(는) 풍만한 엉덩이를 비튼다……',
      ]);
      await acute.say_and_wait([
        '어라, 안에서 커졌네요❤️~ 정말 효과가 있는 것 같아요~',
      ]);
    } else {
      await acute.say_and_wait(['아❤️, 응❤️…… 푸푸, 응❤️……']);
      await you.print_and_wait([
        '뒤를 열릴 때마다, 목소리가 멋대로 ',
        y_call_a,
        '의 입에서 흘러나온다.',
      ]);
      await you.print_and_wait([
        '뒤쪽 놀이를 좋아하는 건가. 단지 자극을 견디고 있는 건가. 어느 쪽이든 상관없다. 중요한 것은, 뒤쪽 안의 육봉이 점점 부풀어 오르고 있다는 것이다——',
      ]);
      await acute.say_and_wait([
        '응❤️…… 나갈까요? 는❤️…… 뒤로요? 구멍으로요? 아니면……',
      ]);
      await you.print_and_wait([
        '농담처럼 ',
        y_call_a,
        '가 한 손을 입 옆으로 「V」자로 만든다.',
      ]);
      await acute.say_and_wait(['아니면, 나의 입으로, 내보낼까요?❤️~']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async doggy_style(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '은회색 머리카락이 뒤로 늘어지고, 하얀 등과 풍만한 엉덩이가 고스란히 보인다.',
      ]);
      await acute.say_and_wait([
        '이 체위라면 ',
        callname,
        '님은 전혀 보이지 않아요…… 싫어요~',
      ]);
      await you.print_and_wait([
        '얼굴을 아래로 파묻은 ',
        y_call_a,
        '가, 작은 항의를 한다.',
      ]);
      await you.print_and_wait([
        '항의는 통하지 않는다. 부어오른 육봉은, 벌써 엉덩이 아래의 구멍으로 다가가고 있다——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 양손으로 강하게 움켜쥐고, 아래의 통증을 달랜다.',
        ]);
        await acute.say_and_wait([
          '십수 년 소중히 여겨온 처녀가, 보이지 않은 채로 잃어진다니.',
        ]);
        await acute.say_and_wait([
          '저기……',
          callname,
          '님은 책임져 주세요, 아?',
        ]);
      }
    } else {
      await you.print_and_wait(['강아지처럼, 짐승 같은 교합.']);
      await you.print_and_wait([
        y_call_a,
        '의 엉덩이를 주무르고, 육봉을 구멍으로 계속 밀어 넣는다.',
      ]);
      await you.print_and_wait([
        '「팡!」 엉덩이를 강하게 때리면, 구멍의 조임이 단번에 강해진다.',
      ]);
      await acute.say_and_wait([
        '구푸푸❤️…… 부족한가요? 알겠습니다❤️…… 강하게, 조일게요❤️~ 푸푸❤️……',
      ]);
      await you.print_and_wait([
        '말의 주고받음은 없다. 하지만, 이렇게 통한다.',
      ]);
      await you.print_and_wait([
        '……',
        y_call_a,
        '은(는) 역시 「이런 것」을 좋아하는 건가.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async doggy_style_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「팡, 팡」 하는 건조한 소리와 함께 ',
        y_call_a,
        '의 하얀 엉덩이에 붉은 자국이 두 개 남는다.',
      ]);
      await you.print_and_wait([
        '엉덩이를 때리는 의미를 이해한 듯 ',
        y_call_a,
        '은(는) 양손이 곧 뒤로 가서, 구멍을 연다.',
      ]);
      await acute.say_and_wait(['아❤️…… 푸❤️, 하❤️～～~']);
      await you.print_and_wait([
        '육봉이 조금씩 깊이 들어가고, 등을 돌린 ',
        y_call_a,
        '가 조금씩 달콤한 목소리를 흘린다.',
      ]);
      await you.print_and_wait([
        '……정면에서는 조신함을 가장하고 있었는데, 등을 돌리면 본성이 나오는 건가.',
      ]);
    } else if (era.get('tcvar:100:接近高潮')) {
      await you.print_and_wait(['팡! 팡! 팡! 팡! ……']);
      await you.print_and_wait([
        '리듬에 맞춰 ',
        y_call_a,
        '의 엉덩이를 때리고, 뒤쪽의 조임 속에서 환희의 절정을 맞이한다.',
      ]);
      await you.print_and_wait([
        '원래 하얀 엉덩이는 이제 붉게 부어올랐고, 살짝 때리는 것만으로 구멍이 넘친다.',
      ]);
      await acute.say_and_wait([
        '는❤️…… 안 돼요❤️ 안 돼요❤️…… 이제, 안 돼요❤️',
      ]);
      await you.print_and_wait([
        '쾌감의 파도 속에서 나태해진 ',
        y_call_a,
        '은(는) 평소의 여유를 잃고, 허락을 구하듯, 넘칠 때마다 비슷한 말을 반복한다.',
      ]);
      await you.print_and_wait([
        '아래에서 끈적거리는 손가락을 ',
        y_call_a,
        '의 얼굴로 뻗어 ',
        acute.sex,
        '의 입으로 넣는다.',
        y_call_a,
        '가 탐욕스럽게 빨고, 삼킨다.',
      ]);
      await acute.say_and_wait([callname, '의…… 손가락❤️~']);
      await acute.say_and_wait(['나는 이제……', callname, '의 것입니다❤️']);
    } else {
      await you.print_and_wait([
        '왕복할 때마다, ',
        y_call_a,
        '의 떨림이 느껴진다.',
      ]);
      await you.print_and_wait([
        '달콤한 목소리를 참고 있는 듯, 나태한 헐떡임은 들리지 않고, 「우우~」만이 희미하게 들린다.',
      ]);
      await you.print_and_wait(['「팡!~」']);
      await acute.say_and_wait(['아❤️']);
      await you.print_and_wait([
        '그럴 때마다 ',
        y_call_a,
        '의 엉덩이를 한 번 때리면, 뒤쪽이 단번에 조여지고, 비어있는 구멍까지 눈에 띄게 젖는다.',
      ]);
      await you.say_and_wait(['저기, ', y_call_a, '……아직 시작이야?']);
      await acute.say_and_wait(['……❤️']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '마주 보고 ',
        y_call_a,
        '가 자신의 허벅지에 앉는다.',
      ]);
      await you.print_and_wait([
        '양손은 목을 감싸고, 얼굴과 얼굴이 매우 가깝다.',
      ]);
      await acute.say_and_wait(['에헤헤…… 이렇게 하면, 매우 부끄러워요']);
      await you.print_and_wait([
        '얼굴이 점점 붉게 물들고, 무릎으로 몸을 세운 ',
        y_call_a,
        '가, 구멍을 찌르는 육봉 위로, 천천히 앉는다……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 작게 눈썹을 찌푸리며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await you.say_and_wait(['……아픈가?']);
        await acute.say_and_wait(['네, 조금만……']);
        await acute.say_and_wait([
          '하지만……',
          callname,
          '을(를) 봐줄 수 있다면, 어떤 고통도 분명 넘을 수 있어요❤️~',
        ]);
        await you.print_and_wait([
          '자신의 얼굴을 받치고, 눈앞의 ',
          y_call_a,
          '가 상냥한 미소를 짓는다.',
        ]);
      }
    } else {
      await you.print_and_wait([
        '자신의 목을 감싸고 ',
        y_call_a,
        '가 앞에서 허리를 비튼다.',
      ]);
      await acute.say_and_wait([
        '응❤️……더 빨리 할까요? 이대로요? ……응❤️~어느 쪽이 ',
        callname,
        '님은 기분 좋은가요?',
      ]);
      await you.print_and_wait([
        '범해지는 쪽인데도, 자신보다 적극적이다. 구멍에 감싸인 육봉은, 빈틈없는 「보살핌」을 받는다.',
      ]);
      await you.print_and_wait([
        '……일부러 ',
        y_call_a,
        '의 엉덩이를 들어 올리지 않아도 ',
        acute.sex,
        '는 스스로 상하로 움직일 것이다.',
      ]);
      await acute.say_and_wait(['❤️~']);
      await you.print_and_wait([
        '얼굴 전체가 붉은 ',
        y_call_a,
        '가 자신을 보고, 얼굴 전체가 행복해 보인다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async hug_sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '자신의 허벅지에 앉아 ',
        y_call_a,
        '가 품에 기대어 있다.',
      ]);
      await you.print_and_wait([
        '은회색 머리카락에, 고풍스러우면서도 음란한 냄새.',
      ]);
      await acute.say_and_wait([
        '저기 ',
        callname,
        '님, 마주 보고 있으면 안 되나요?',
      ]);
      await you.print_and_wait([
        '곧게 선 육봉이 구멍 입구를 찌르고 ',
        y_call_a,
        '의 항의를 거부한다.',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await you.say_and_wait(['……아픈가?']);
        await acute.say_and_wait(['……아파요?']);
        await you.print_and_wait([y_call_a, '가 젖은 눈꼬리를 만진다.']);
        await acute.say_and_wait([
          '그러니까…… 이 다음에는, 마주 보고 하는 것이?',
        ]);
      }
    } else {
      await acute.say_and_wait(['아❤️……푸❤️, 하❤️～～~']);
      await you.print_and_wait([
        '작은 목소리.',
        y_call_a,
        '은(는) 무릎을 누르며, 상하로 보내고, 몸을 살짝 비튼다.',
      ]);
      await you.print_and_wait([
        '마주 보고 있지 못함에 대한 항의인가. 꼬리가 기운 없이 옆으로 처져 있다.',
      ]);
      await you.print_and_wait([
        '그것은 곤란하다…… 손을 뻗어, 감독처럼 ',
        y_call_a,
        '의 꼬리를 당긴다. 순식간에, 구멍 안으로 열파가 온다.',
      ]);
      await acute.say_and_wait(['응❤️!?', callname, '님은, 꼬리는 안 돼요——']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '벽에 밀착하고, 하복부가 거의 틈 없이 겹쳐진다.',
      ]);
      await you.print_and_wait([
        '구석으로 몰린 ',
        y_call_a,
        '. 육봉이',
        acute.sex,
        '의 부드러운 구멍에 닿아, 좌우로 비벼진다.',
      ]);
      await acute.say_and_wait(['아하하…… 이제 도망갈 곳이 없네요']);
      await you.print_and_wait([
        '그렇게 말하면서, 미련 같은 건 없는 ',
        y_call_a,
        '가, 미소 지으며 오른발을 든다——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await acute.say_and_wait([
          '처녀를 ',
          callname,
          '에게 빼앗겼네요~ 어쩔 수 없네요~',
        ]);
        await you.print_and_wait([
          '고통 따위 느끼지 않는 것처럼 ',
          y_call_a,
          '은(는) 미소 지으며 말한다.',
        ]);
        await you.say_and_wait(['……아프지 않은 건가?']);
        await acute.say_and_wait(['응…… 괜찮아요~']);
        await you.print_and_wait([
          y_call_a,
          '은(는) 상냥하게 말하고, 말이 끝나자마자 허리를 움직이기 시작한다.',
        ]);
        await acute.say_and_wait(['그것보다 ', callname, '……움직이지 않나요?']);
      }
    } else {
      await you.print_and_wait([
        '하복부가 딱 맞게 겹쳐져, 자궁구가 몇 번이나 충격을 받는다.',
      ]);
      await you.print_and_wait([
        '그 상냥한 ',
        y_call_a,
        '도, 물러날 수 없는 상황에서는 나태한 얼굴을 보인다.',
      ]);
      await acute.say_and_wait(['하❤️~응❤️~ 이런 얼굴 보지 말아 주세요']);
      await you.print_and_wait([
        '얼굴을 보여주고 싶지 않다고 말하면서, 덮고 있는 것은 자신의 눈이다.',
      ]);
      await you.print_and_wait(['이 위치라면, 육봉은 깊숙이 자궁구에 닿는다.']);
      await you.print_and_wait([
        '……도망치지 않으면 ',
        y_call_a,
        '의 자궁은 육봉에 떨어질 거야?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async hug_standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['벽에 기대고, 육봉이 구멍 위를 드나든다.']);
      await you.print_and_wait([
        '구석으로 몰려 있는데도, 입구는 여전히 육봉의 상하로 비벼지고 있다.',
      ]);
      await acute.say_and_wait([
        '뒤쪽, 인가요…… 이 자세, 또 괴롭힘당하겠네요~',
      ]);
      await you.print_and_wait([
        '……괴롭힘당한다고 말하면서, 꼬리는 벌써 기쁜 듯 흔들리고 있다.',
      ]);
      await you.print_and_wait([
        '발정한',
        acute.uma_sex_title,
        '에게 양보는 필요 없다.',
        y_call_a,
        '의 엉덩이를 누르고, 마음껏 달려라——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await acute.say_and_wait([
          '처음 피가……',
          callname,
          '에게, 자국을 남겨졌습니다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '의 얼굴은 보이지 않고 ',
          acute.sex,
          '의 귀가 좌우로 흔들릴 뿐이다.',
        ]);
        await acute.say_and_wait(['이번에는 괴롭힘당했으니 어쩔 수 없어요……']);
        await acute.say_and_wait([
          '다음에는 반드시 마주 보고, 응석 부려 주세요?',
        ]);
      }
    } else {
      await acute.print_and_wait(['엉덩이 곳곳이 붉은 자국이다.']);
      await acute.print_and_wait([
        '엉덩이를 맞는 것뿐만 아니라, 꼬리까지 ',
        callname,
        '에게 지지대로 손에 끌려가고 있다.',
      ]);
      await acute.print_and_wait([
        '구멍 안에서 육봉이 자궁을 밀 때마다, 자신이 「범해지고」 있다는 사실이 확실히 느껴진다.',
      ]);
      await acute.say_and_wait(['하…… 범해졌다, 범해졌다, 범해졌다❤️~']);
      await acute.print_and_wait([
        '안 되는 일인데도 ',
        callname,
        '에게 범해지고, 엉덩이를 맞고, 꼬리를 끌려가고 있다고 생각하면, 가슴이 멋대로 술렁인다.',
      ]);
      await acute.say_and_wait(
        ['하, 하…… 이런 얼굴, 절대로 ', callname, '에게는 보여줄 수 없어요❤️~'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '경주를 달리는',
        acute.uma_sex_title,
        '인데도, 들어 올리자 무겁지 않다.',
      ]);
      await you.print_and_wait([
        '손가락이 풍만한 엉덩이에 쉽게 가라앉는다. 엉덩이 하나로 꽤 탐욕스럽다.',
      ]);
      await acute.say_and_wait([
        '어라어라…… 또, 전혀 도망칠 수 없는 자세네요~',
      ]);
      await you.print_and_wait([
        '도망친다고 말하면서, 양다리는 벌써 허리에 감겨 있다.',
      ]);
      await you.print_and_wait([
        '육봉을 정면으로 마주한 구멍도 스스로 삼키기 시작한다——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await you.say_and_wait(['……아픈가?']);
        await acute.say_and_wait(['아프지 않아요']);
        await you.print_and_wait([y_call_a, '가 미소 지으며 대답한다.']);
        await acute.say_and_wait(['어차피 도망칠 수 없으니까요, 네❤️~?']);
      }
    } else {
      await acute.print_and_wait([
        callname,
        '에게 엉덩이를 안겨 품에 있다. 상대의 허리에 감기는 것 외에는 자신은 아무것도 할 수 없다.',
      ]);
      await acute.print_and_wait([
        '조금 육봉에서 몸을 빼서 편하게 하려고 해도, 금방 따라와 다시 자궁의 문을 두드린다.',
      ]);
      await acute.say_and_wait(['이 자세…… 정말로 좋지 않아요'], true);
      await acute.print_and_wait([
        '자위 도구가 된 것처럼, 안긴 채로 구멍이 왕복된다.',
      ]);
      await acute.print_and_wait([
        '자궁이 한층 더 가렵고, 찔릴 때마다 나오는 혀 위의 목소리도 커진다.',
      ]);
      await acute.print_and_wait([
        '이대로라면 곧 「나태한 ',
        acute.child_sex_title,
        '」가 된다.',
      ]);
      await acute.say_and_wait([
        '아❤️~',
        callname,
        '님은 얼굴을 보지 말아 주세요',
      ]);
      await acute.say_and_wait(['이제…… 참을 수 없어요❤️~']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async fucked_suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_a,
        '에게 엉덩이를 안겨, 마주 보고 들어 올려진다.',
      ]);
      await you.print_and_wait([
        '교합하고 있는데도, 할머니가 손자를 안아주는 듯한 그림으로 보인다.',
      ]);
      await acute.say_and_wait([
        '착한 아이네요 ',
        callname,
        '❤️~ 천천히 넣어 주세요',
      ]);
      await you.print_and_wait([
        y_call_a,
        '의 도움으로, 자신의 육봉이 구멍에 정면으로 향하고 ',
        y_call_a,
        '의 움직임과 함께 천천히 구멍으로 들어간다……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await acute.say_and_wait([
          '처녀를 ',
          callname,
          '에게 빼앗겼네요~ 잘했습니다.',
        ]);
        await you.print_and_wait([
          '무언가 큰 업적을 세운 것처럼 ',
          y_call_a,
          '은(는) 미소 지으며 말한다.',
        ]);
        await you.print_and_wait(['……아프지 않은 건가, 하고 묻고 싶지만——']);
        await acute.say_and_wait([
          '이제부터 움직입니다. 힘들면 말씀해 주세요? 기차가 터널에 들어갑니다~',
        ]);
        await you.print_and_wait([
          y_call_a,
          '은(는) 완전히 즐거워하는 얼굴이다.',
        ]);
      }
    } else {
      await you.print_and_wait([
        y_call_a,
        '의 유두를 움켜쥐고, 기생충처럼 ',
        y_call_a,
        '의 허리에 감긴다.',
      ]);
      await you.print_and_wait([
        '육봉은 구멍 안을 드나들고 있지만, 허리를 움직이고 있는 것은 자신이 아니다. 엉덩이를 안은 ',
        y_call_a,
        '가 상하로 흔들고 있다.',
      ]);
      await acute.say_and_wait([
        '응❤️아❤️……더 빨리 해도 될까요? 석탄을 넣지 않으면 기차는 빨리 달릴 수 없어요…… 구❤️～～~',
      ]);
      await you.print_and_wait([
        '손의 움직임이 빨라진다. 그 상냥한 얼굴은, 아끼는 것이라기보다 거의 음란하다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   * @param {string} penis_color 플레이어의 음경 색상
   */
  async hug_suspended_congress(
    acute,
    you,
    callname,
    y_call_a,
    is_first,
    penis_color,
  ) {
    if (is_first) {
      await you.print_and_wait([
        '엉덩이를 안고, 등을 돌린 ',
        y_call_a,
        '를 높이 들어 올린다.',
      ]);
      await you.print_and_wait([
        '몸 전체가 손안에 있고, 붉은 육봉이 비부를 계속 문지른다.',
      ]);
      await acute.say_and_wait([
        '전혀 도망칠 수 없어요…… 적어도 마주 보는 쪽이라면……',
      ]);
      await you.print_and_wait([
        '품 안의 ',
        y_call_a,
        '가 흥분인지 두려움인지 떨고 있다.',
      ]);
      await you.print_and_wait([
        penis_color,
        '의 육봉이 그 순간 구멍 깊은 곳으로 들어간다——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await acute.say_and_wait(['아파요, 아파요, ', callname, '……?']);
        await acute.say_and_wait(['그러니까…… 마주 보고 하는 것이……']);
        await acute.say_and_wait(['괜찮을까요?']);
      }
    } else {
      await acute.print_and_wait([
        '자궁이 떨리면서 경고하고 있다. 중력이 구멍을 ',
        callname,
        '의 육봉에 강하게 밀어붙인다.',
      ]);
      await acute.print_and_wait([
        '자위 도구가 된 것처럼, 안긴 채로 움직일 수 없다.',
      ]);
      await acute.print_and_wait([
        '만약 ',
        y_call_a,
        '가 지탱하는 양손을 놓으면, 발이 땅에 닿지 않는 ',
        callname,
        '은(는) 육봉에 자궁이 찔린 채 들려 올려질 것이다.',
      ]);
      await acute.print_and_wait(['그렇게 되면 틀림없이 「부서진다」.']);
      await acute.say_and_wait([
        '하❤️……떨어져❤️, 부서져❤️ ',
        callname,
        '에게 사용당해요❤️~',
      ]);
      await acute.print_and_wait([
        '트레이너의 목을 감싸고, 왕복에 목소리를 잃는 것은 그 상냥한 ',
        y_call_a,
        '가 아니라, 범해지며 기뻐하는 한 명의',
        acute.teen_sex_title,
        '다.',
      ]);
      await acute.say_and_wait(['부서져요❤️～～～～']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async ask_cowgirl(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「스스로 움직여줘」라고 말한 뒤 ',
        y_call_a,
        '은(는) 스스로 몸 위로 온다.',
      ]);
      await you.print_and_wait([
        '양다리는 허리 옆을 끼고, 양손은 열 손가락을 맞잡아 젖은 구멍이 하늘을 찌르는 붉은 육봉에 닿아 있다.',
      ]);
      await you.print_and_wait([
        '남은 것은 ',
        y_call_a,
        '가 천천히 허리를 내려앉으면 된다.',
      ]);
      await acute.say_and_wait([
        '나도',
        acute.uma_sex_title,
        '이니까 ',
        callname,
        '. 내가 만족할 때까지 멈추지 않을 거예요',
      ]);
      await acute.say_and_wait(['그러니까…… 준비는 되었나요?']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          y_call_a,
          '의 허리가 떨어지는 것과 동시에, 붉은 피가 구멍에서 흘러나와, 아래로 떨어진다.',
        ]);
        await you.print_and_wait([
          y_call_a,
          '가 낮게 울며, 입에서 멋대로 「우우」라고 흘린다.',
        ]);
        await you.say_and_wait(['……아픈가?']);
        await acute.say_and_wait([
          '응…… 지금도 나를 걱정해주는 ',
          callname,
          '은(는) 좋아하네',
        ]);
        await acute.say_and_wait([
          '하지만…… 나보다 먼저 자신을 걱정하는 편이 좋겠구나',
        ]);
        await acute.say_and_wait([
          '나에게 처음의 피를 흘리게 한 책임, 질 생각은 있는 겐가 ',
          callname,
          '?',
        ]);
      }
    } else {
      await you.print_and_wait([
        '지금까지 교합에서는 약했던 ',
        y_call_a,
        '가 인격이 변한 것처럼 몸을 계속 움직인다.',
      ]);
      await you.print_and_wait([
        '흔들리고, 비틀리고, 드나든다. 구멍이 몇 번이고 육봉을 삼키고, 육봉이 몇 번이고 구멍의 압력으로 형태를 바꾼다.',
      ]);
      await you.print_and_wait([
        '열 손가락을 맞잡은 양손은 ',
        y_call_a,
        '에게 강하게 붙잡히고, 아래로 이어지는 허리는 양발에 깊게 끼인다. 도망갈 여지가 없다.',
      ]);
      await acute.say_and_wait(['저기…… 알고 있나요, ', callname, '.']);
      await you.print_and_wait([
        y_call_a,
        '의 얼굴을 올려다본다. 붉은 뺨에 위태로운 기색이 섞인다.',
      ]);
      await acute.say_and_wait(['나는…… 계속 이 순간을 기다려왔어요?']);
      await you.print_and_wait([
        '마음의 자물쇠가 풀리는 소리와 함께, 허리 위의 ',
        y_call_a,
        '가 몸을 춤추기 시작한다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   */
  async stimulate_g_spot(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        '육봉이 몇 번이고 드나들고, 자궁구가 파도처럼 찔리며, 젖은 구멍이 몇 번이고 조수의 절정을 맞이한다.',
      ]);
      await acute.print_and_wait([
        'G스팟을 계속 치여서 자신도 혀를 내밀고 달콤한 목소리를 겹친다.',
      ]);
      await acute.say_and_wait(['구오오호오❤️～～～～']);
      await acute.print_and_wait([
        acute.child_sex_title,
        '가 내지 말아야 할 상스러운 체면 없는 목소리인데도, G스팟을 농락당해 발정한 암컷에게는 아주 잘 어울린다.',
      ]);
      await acute.say_and_wait(['구오호❤️~ 간다, 간다, 가요❤️～～～～']);
    } else {
      await acute.say_and_wait([
        '푸구❤️~',
        acute.child_sex_title,
        '가 됩니다, 암컷이 됩니다❤️~',
      ]);
      await acute.say_and_wait([
        callname,
        '의, 냄새가 강한 조교 후 매번 일어나는 육봉으로, 암컷이 됩니다❤️～～~',
      ]);
      await you.say_and_wait(['……무슨 소릴 하는 거야, 암수!']);
      await acute.say_and_wait([
        '구호❤️~ 안쪽의 육봉이 또 커져서…… 들켰어요❤️ 매번 조교 후에 ',
        callname,
        '의 텐트가 신경 쓰이고 있었다는 것, 들켰어요❤️',
      ]);
      await acute.say_and_wait([
        callname,
        '의 육봉에 철저하게 길들여집니다❤️～～~',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async stimulate_large_intestine(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['응❤️～～～～ 엉덩이, 기분 좋아……']);
      await you.print_and_wait([
        '육봉을 보낼 때마다, 뜨거운 통증과 쾌감이 온다.',
      ]);
      await you.print_and_wait(['……뒤쪽은 기분 좋아져서는 안 되는 기관이다.']);
      await acute.say_and_wait([
        '엉덩이……',
        callname,
        ' 전용의 뒤쪽으로 조교당하고 맙니다……',
      ]);
    } else {
      await you.print_and_wait([
        '뒤쪽을 찌를 때마다 ',
        y_call_a,
        '의 허리가 잘 맞춰져 올라간다.',
      ]);
      await you.print_and_wait([
        'S상결장을 농락한 뒤 빼내려 할 때마다, 강한 구멍 압력이 아쉬운 듯 육봉을 붙잡으려 한다.',
      ]);
      await you.say_and_wait([
        '……혹시 ',
        y_call_a,
        '은(는) 이 놀이를 좋아하는 건가?',
      ]);
      await acute.say_and_wait(['구후❤️~ 무슨 뜻인지 모르겠어요❤️~']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   */
  async stimulate_womb(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        '뜨거운 자궁이 하복부 한 장을 사이에 두고 손바닥에 쓰다듬어진다.',
      ]);
      await acute.print_and_wait([
        '반대편에서는 뒤쪽 안에서 자궁을 계속 미는 육봉.',
      ]);
      await acute.print_and_wait(['앞뒤에서 끼여 도망갈 곳이 없다……']);
      await acute.print_and_wait([
        '물건처럼 완전히 ',
        callname,
        '의 손안에 놓여 있는데도, 느껴지는 것은 암컷으로서의 행복이다.',
      ]);
      await acute.say_and_wait(['하❤️ 이제 전혀 도망칠 수 없어요~']);
    } else {
      await acute.print_and_wait([
        '한쪽은 탐욕스럽게 육봉을 삼키는 뒤쪽, 한쪽은 젖어서 끈적이는 구멍.',
      ]);
      await acute.print_and_wait([
        '자궁을 계속 자극하는 동안, 점액이 구멍에서 떨어져 은하처럼 땅으로 흐른다.',
      ]);
      await acute.print_and_wait([
        '구멍뿐만 아니라, 또 다른 작은 입에서 나오는 타액도 헐떡이는 입술에서 흘러내린다.',
      ]);
      await acute.say_and_wait(['호푸❤️……는 하복부가 뜨겁고 가려워요.❤️']);
      await acute.say_and_wait([
        '저기 ',
        callname,
        ' 뒤쪽만 보지 말고…… 호푸❤️…… 구멍에도 넣어 주세요?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async insult(acute, you, callname, y_call_a) {
    const message = [
      async () => {
        await you.say_and_wait('욕먹는 걸 좋아하는 변태!');
        await acute.say_and_wait('좋아하지 않아요? 조금 흥분될 뿐이에요~');
        await you.print_and_wait([
          y_call_a,
          '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
        ]);
        await you.print_and_wait('……그게 좋다는 뜻이잖아!');
      },
      async () => {
        await you.say_and_wait('전투력은 높은데 유혹하는 쪽의 도M!');
        await acute.say_and_wait('전투력이 높다고요? 그런 것, 없어요~');
        await you.print_and_wait([
          y_call_a,
          '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
        ]);
        await you.print_and_wait([
          '……언젠가 ',
          y_call_a,
          '가 복싱 왕좌전에 나가는 걸 볼 것 같은 기분이 들어.',
        ]);
      },
    ];
    if (you.sex_code > 0) {
      message.push(async () => {
        await you.say_and_wait('넣었으면 놓지 않는 음란한 엉덩이!');
        await acute.say_and_wait([
          '에헤~ 이쪽은, 음란한 엉덩이인 ',
          y_call_a,
          '예요~',
        ]);
        await you.print_and_wait([
          y_call_a,
          '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
        ]);
        await you.print_and_wait('……칭호로 만들지 마!');
      });
    }
    if (acute.sex_code !== 1) {
      message.push(
        async () => {
          await you.say_and_wait('음란한 암소 같으니!');
          await acute.say_and_wait('암소가 아니에요. 그냥 우마무스메예요❤️~');
          await you.print_and_wait([
            y_call_a,
            '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
          ]);
          await you.print_and_wait('……「음란」은 부정하지 않나.');
        },
        async () => {
          await you.say_and_wait('멋대로 발정하는 암수!');
          await acute.say_and_wait('응…… 누구에게나 발정하는 건 아니에요~');
          await you.print_and_wait([
            y_call_a,
            '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
          ]);
          await you.print_and_wait('……암수 쪽을 반론해.');
        },
        async () => {
          await you.say_and_wait(
            '차분해 보이지만 평소 조교에서도 야한 생각이나 하는 허당 할머니!',
          );
          await acute.say_and_wait(
            '음…… 조교할 때는 제대로 집중하고 있어요~ 마른 나무 구멍에 있을 때만 가끔 야한 생각을 할 정도예요~',
          );
          await you.print_and_wait([
            y_call_a,
            '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
          ]);
          await you.print_and_wait([
            '……',
            y_call_a,
            '의 알려지지 않은 면이 들켰어!',
          ]);
        },
        async () => {
          await you.say_and_wait('쓰기 편한 배달 만코!');
          await acute.say_and_wait(
            '구루무…… 배달 만코? 배달만 계속하면 몸에 안 좋아요~',
          );
          await you.print_and_wait([
            y_call_a,
            '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
          ]);
          await you.print_and_wait(
            '……적어도 이번에는 정말로 「배달 만코」의 의미를 모르고 있다.',
          );
        },
        async () => {
          await you.say_and_wait('엉덩이를 때리면 조여지는 허당 구멍!');
          await acute.say_and_wait('뭐…… 너무 기분 좋으니까 어쩔 수 없어요~');
          await you.print_and_wait([
            y_call_a,
            '은(는) 온화하게 웃으며, 모욕당한 기색이 없다.',
          ]);
          await you.print_and_wait('……어쩔 수 없는 일인가?');
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async hit_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '손바닥이 엉덩이에 닿고, 풍만한 엉덩이가 손안에서 물결친다.',
      ]);
      await you.print_and_wait([
        '원래 하얀 엉덩이는 이제 새빨갛고, 닿는 것만으로 옆의 구멍이 무의식적으로 경련한다.',
      ]);
      await you.print_and_wait([
        '팡! 또 때리는 소리. 매끄러운 입술이 경련하고, 맑은 즙과 나태한 목소리가 동시에 흘러나온다——',
      ]);
      await acute.say_and_wait([
        '호후후~❤️ 안 돼요❤️ 엉덩이를 맞기만 해도 절정에 달하는 변태가 돼요❤️ 약점 들켰어요❤️ 철저하게 암컷이 될게요~❤️',
      ]);
    } else {
      await you.print_and_wait([
        '벌써 빨갛게 부어올랐는데도, 엉덩이는 여전히 높이 올라가 있다.',
      ]);
      await you.print_and_wait([
        '아직 부족한 듯, 풍만한 엉덩이가 이쪽으로 일부러 좌우로 흔들린다.',
      ]);
      await acute.say_and_wait(['저기❤️', callname, '님은 아직 부족하죠?']);
      await acute.say_and_wait([
        '저 알아요. 평소에 꽤 무거운 짐을 지고 있네요…… 그러니까 여기서 마음껏 토해내 주세요~❤️',
      ]);
      await acute.say_and_wait(['나의 몸은 당신의 것이니까요❤️~']);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   */
  async hit_anal_hard(acute, you, callname) {
    await acute.print_and_wait(['아플 정도로 흥분한다.']);
    await acute.print_and_wait([
      '엉덩이 감각은 이제 없는데도, 맞을 때마다 아래로 충격이 달린다.',
    ]);
    await acute.print_and_wait([
      '기계처럼 풍만한 엉덩이를 때릴 때마다, 매끄러운 구멍에서 음란한 즙이 떨어진다.',
    ]);
    await acute.print_and_wait([
      '땅에 엎드린 온화한 얼굴도 지금은 쾌감에 파괴되어 눈을 위로 향하고 혀를 내밀며 때리는 리듬에 맞춰 목소리를 낸다.',
    ]);
    await acute.print_and_wait(['그 목소리 속에 이미 부서진 단어가 섞인다——']);
    await acute.say_and_wait(['호~후후~', callname, '……행복해요❤️~']);
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async hit_face_by_penis(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '뺨에 닿아 있는 것은 「양의 기」를 내뿜는 육봉이다.',
      ]);
      await you.print_and_wait([
        y_call_a,
        '은(는) 움직이지 않고 육봉을 바라본 채, 때와 때의 때와 먼지를 자신의 뺨에 묻힌다.',
      ]);
      await acute.say_and_wait(['활기찬 냄새…… 이것은 무엇을——']);
      await you.print_and_wait([
        y_call_a,
        '가 말을 마치기도 전에, 뺨으로 닦아낸 육봉이 그대로 ',
        y_call_a,
        '의 뺨을 때린다.',
      ]);
      await you.print_and_wait([
        '얼굴의 통증에',
        acute.sex,
        '는 조금 놀란 듯하다. 하지만 곧',
        y_call_a,
        '은(는) 놀라움에서 벗어나 무언가를 깨달은 듯 온화하게 미소 짓는다.',
      ]);
      await acute.say_and_wait(['과연…… 매우 『활기찬』 육봉이네요❤️']);
    } else if (acute.sex_code !== 1) {
      await you.say_and_wait([
        '이 다음 육봉으로 펑펑 ',
        y_call_a,
        '가 울 때까지 계속한다.',
      ]);
      await acute.print_and_wait(['자신을 향한 육봉이 그렇게 선언한다.']);
      await acute.say_and_wait(['울 때까지……요?']);
      await acute.print_and_wait(['그것만으로 하복부에 열기가 달린다.']);
      await acute.print_and_wait([
        '하물며 뺨을 육봉에 닦이고 희롱당하며 맞고, 후각이 양의 기에 점령된 지금은.',
      ]);
      await acute.say_and_wait(['울 때까지 계속 육봉으로 맞는다……'], true);
      await acute.say_and_wait(['안 돼요…… 전혀 울 것 같지 않아요❤️'], true);
    }
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {CharaTalk} supporter 조수
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} call_s 원더어큐트의 조수에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {PrintedSpan} y_call_s 플레이어의 조수에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async ask_double_blow_job(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await you.print_and_wait([
            '입으로 모시라고 들고 ',
            y_call_a,
            '은(는) 곧 웃으면서 얼굴을 육봉에 가까이 가져간다.',
          ]);
          await acute.say_and_wait([
            '응…… 정말로 ',
            callname,
            '님에게는 이길 수 없네요~ 그럼 ',
            call_s,
            ', 함께 『키스』해요~',
          ]);
          await you.print_and_wait([
            '그렇게 말하고 ',
            y_call_a,
            '의 순서로 ',
            y_call_a,
            '와 ',
            y_call_s,
            '의 옅은 입술이 양쪽에서 육봉에 입을 맞추고, 키스하면서 혀를 내밀어 주변을 미끄러진다——',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '입으로 모시라고 들고 ',
            y_call_s,
            '가 반응하기 전에 ',
            y_call_a,
            '가 재빨리 끝을 자신의 입에 삼킨다.',
          ]);
          await acute.say_and_wait([
            '에헤헤…… 미안해요 ',
            call_s,
            '. 나는 양보하지 않을 거예요?',
          ]);
          await you.print_and_wait([
            '말하면서 ',
            y_call_a,
            '의 혀는 벌써 홈으로 뻗고, 아래쪽은 놀라서 파르르 풀린다.',
          ]);
          await you.print_and_wait([
            '늦었다고 생각하며 입으로는 조금 투덜대면서도 ',
            y_call_s,
            '은(는) 한쪽에서 혀를 내밀고 육봉을 모신다……',
          ]);
        },
        async () => {
          await acute.say_and_wait([
            callname,
            '님의 급소는 홈이에요? ……네, 맞아요 ',
            call_s,
            '님은 잘하고 있어요~',
          ]);
          await you.print_and_wait([
            '혀를 내밀어 육봉을 상하로 핥는 ',
            y_call_a,
            '가, 반대편에서 끝을 삼키는 ',
            y_call_s,
            '를 가르친다.',
          ]);
          await acute.say_and_wait([
            '힘내세요 ',
            call_s,
            '.',
            callname,
            '님은 더 깊이 삼켜지는 걸 좋아해요……',
          ]);
          await you.print_and_wait([
            '기분을 진정시키려는 듯 ',
            y_call_a,
            '은(는) ',
            y_call_s,
            '의 머리를 쓰다듬는다. 쓰다듬으면서 살며시 힘을 주어 가능한 ',
            y_call_s,
            '를 깊숙이 삼키게 한다……',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait('음음음…… 쿡…… 하……');
          await you.print_and_wait([
            '육봉의 양쪽에서 ',
            y_call_a,
            '와 ',
            y_call_s,
            '가 육봉을 계속 핥는다.',
          ]);
          await you.print_and_wait([
            '모시는 자신뿐만 아니라, 때때로 닿는 혀 끝이 모시는 두 사람을 더욱 고조시킨다.',
          ]);
          await acute.say_and_wait([
            '저기 ',
            call_s,
            '님, 함께 『휴식』할까요?',
          ]);
          await you.print_and_wait([
            y_call_a,
            '가 눈을 깜빡이며 의미심장한 미소를 짓고 ',
            y_call_s,
            '은(는) 얼굴을 붉힌다.',
          ]);
          await you.print_and_wait(
            '곧 두 사람의 혀 끝이 홈을 넘어서 끝부분 절반을 함께 머금는다. 육봉을 모시면서 서로의 혀 끝으로 타액을 나눈다……',
          );
        },
        async () => {
          await acute.say_and_wait('구무무…… 푸, 파…… 구하……');
          await you.print_and_wait([
            y_call_a,
            '은(는) 맹수가 먹듯이 입안의 거물을 탐욕스럽게 삼키고, 몇 번이고 자신의 타액으로 육봉에 자국을 남긴다.',
          ]);
          await you.print_and_wait([
            '삼킬 때마다 ',
            y_call_s,
            '의 영역이 조금씩 침범당한다. 주머니 위치까지 밀려나지 않도록 투지를 불태운 ',
            y_call_s,
            '도 육봉을 빼앗기 위해 핥는 속도를 높인다.',
          ]);
          await you.print_and_wait('일시적으로 불꽃이 튄다……');
        },
        async () => {
          await supporter.say_and_wait('음…… 음!!!');
          await you.print_and_wait([
            y_call_a,
            '의 도움으로 ',
            y_call_s,
            '은(는) 벌써 자신의 육봉을 뿌리까지 삼키고 있다.',
          ]);
          await you.print_and_wait([
            y_call_a,
            '가 상냥하게 ',
            y_call_s,
            '의 머리를 쓰다듬고 ',
            supporter.sex,
            '가 뿌리까지 삼킨 채 목으로 천천히 모시는 것을 돕는다.',
          ]);
          await you.print_and_wait([
            '반대편에서 ',
            y_call_a,
            '은(는) 몸을 엎드리고 육봉의 뿌리로 온다.',
          ]);
          await acute.say_and_wait(['그럼…… 힘내 주세요 ', callname, '~']);
          await you.print_and_wait([
            '그렇게 말하고 ',
            y_call_a,
            '은(는) 얼굴을 가까이 대고 작은 입을 벌려 뿌리 부분에 살며시 이를 세운다——',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} callname 원더어큐트의 플레이어에게 부르는 방식
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   * @param {boolean} is_first 연속 동작의 처음인지 여부
   */
  async double_suck_nipple(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await acute.say_and_wait([
            '에헤헤……',
            callname,
            '님과 ',
            call_s,
            '님은 아이 같네요~',
          ]);
          await you.print_and_wait([
            '물든 뺨에 그래도 온화한 미소가 남아 있다.',
          ]);
          await you.print_and_wait([
            callname,
            '님과 ',
            call_s,
            '님의 머리를 쓰다듬고 ',
            y_call_a,
            '은(는) 아끼는 얼굴로 눈앞의 아이를 보고 있다.',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '……옅은 유두를 너무 빨았는지 ',
            y_call_a,
            '은(는) 입술을 내밀고 자신의 머리를 세 번 가볍게 두드린다.',
          ]);
          await acute.say_and_wait([
            '혼자서 다 마시지 말고……',
            call_s,
            '에게도 남겨 주세요',
          ]);
          await you.print_and_wait('붉은 뺨에 복숭아색 애정이 가득 차 있다.');
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait([
            '음~ 그렇게 서두르지 않아도 돼요. 나의 가슴은 계속 여기에 있으니까요~',
          ]);
          await you.print_and_wait([
            '눈앞에서 유두를 빠는 두 사람을 쓰다듬고 ',
            y_call_a,
            '의 눈에 아끼는 마음이 한 줄기 스친다.',
          ]);
          await acute.say_and_wait([
            '하지만 가슴만 빨지 말아 주세요? 다른 것도 할 일이 있어요~',
          ]);
          await you.print_and_wait(
            '그렇게 말하며 손가락으로 희롱하자, 누구의 것인지 모를 옅은 아래쪽이 투명한 물을 반짝이기 시작한다——',
          );
        },
        async () => {
          await acute.say_and_wait([
            callname,
            '님은 아주 맛있게 마시고 있네요. 다행이에요 ',
            call_s,
            '~',
          ]);
          await you.print_and_wait([
            '가슴 쪽의 자신의 머리를 쓰다듬고 ',
            y_call_a,
            '가 ',
            y_call_s,
            '에게 화사하게 웃는다.',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async sleep_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '편안히 누워 있는 ',
      y_call_a,
      '이(가) 가느다란 숨을 쉬고 있다.',
    ]);
    await you.print_and_wait(
      '옅은 빛의 입술이 무언가를 기다리는 듯 열렸다 닫혔다 한다.',
    );
    await you.print_and_wait('다가가 그 옅은 빛의 입술에 살며시 입을 맞춘다——');
    await you.print_and_wait(
      '고개를 들자, 여전히 열렸다 닫혔다 하는 옅은 빛의 입술에 자신이 남긴 흔적이 보인다.',
    );
  },
  /**
   * @param {CharaTalk} acute 원더어큐트
   * @param {CharaTalk} you 플레이어
   * @param {PrintedSpan} y_call_a 플레이어의 원더어큐트에게 부르는 방식
   */
  async sleep_french_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '옅은 입술을 더럽히는 것만으로는 부족하다.',
      y_call_a,
      '의 혀에도 닿고 싶다.',
    ]);
    await you.print_and_wait(
      '입안으로 들어온 정찰병은 이빨에 가로막히지 않고, 매끄럽게 문을 두드리며 혀가 있는 곳까지 온다.',
    );
    await you.print_and_wait([
      y_call_a,
      '가 아직 잠들어 있는 동안에 왕복하며 얽히고, 깊은 곳에 자신의 흔적을 남긴다.',
    ]);
    await you.print_and_wait('떨어지면 타액의 실이 서로의 혀 끝을 잇는다.');
    await you.print_and_wait(['——봐라 ', y_call_a, '님은 혀로는 내 승리다.']);
    await you.print_and_wait([
      '……그렇게 큰 소리로 외치고 싶지만, 이것은 ',
      y_call_a,
      '에게 말할 수 없는 일이다.',
    ]);
  },
};
