/**
 * @file ゴールドシップ - 恋慕
 * @author 雞雞
 */
const era = require('#/era-electron');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `악연의 시작은 ${gold_shp.name}의 그 선발 레이스에 있었다. 바로 그 레이스 이후, ${gold_shp.sex}와 ${callname}은 계약을 맺고 대회에 정식 출주할 수 있는 우마무스메가 되었다.`,
      );
      era.println();
      await gold_shp.say_and_wait(
        '도대체 내가 왜 그 녀석을 마음에 들어 했는지 지금 와서 보니 도저히 이해할 수 없구만.',
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은 석양 아래 놀이공원 미끄럼틀 위에 서서 깊은 생각에 잠겨 있었다. ${gold_shp.sex}는 턱을 난간에 기대고 은빛 머리카락이 폭포처럼 흘러내리도록 내버려 두었다. 곁에서 뛰어노는 아이들이 시야 안팎을 오가게 내버려 두면서도, 마음은 여전히 그 자리에 없는 누군가에게만 쏠려 있었다.`,
      );
      era.println();
      await gold_shp.print_and_wait([
        `처음부터 ${gold_shp.sex}는 자신의 행동을 도무지 이해할 수 없었다. 일반적인 우마무스메와 트레이너 사이에서는 트레이너 측이 먼저 우마무스메를 모집한다. 하지만 ${callname}과 계약한 일은 모집당했다고 하기보다는, `,
        {
          color: gold_color,
          content: `오히려 ${gold_shp.name}이 억지로 강매한 것이라고 할 수 있었다.`,
        },
      ]);
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은 레이스에 출주하려면 트레이너와 계약을 맺어야 한다. 그렇다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${you.actual_name}은(는) 트레이너다. 그렇다.`,
      );
      era.println();
      if (era.get('flag:当前声望') < 1000) {
        await gold_shp.print_and_wait(
          `${you.actual_name}은(는) ${gold_shp.name}이 자신만의 에덴을 찾도록 도울 수 있을지도 모른다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${you.actual_name}은(는) 실력이 뛰어나니 ${gold_shp.name}이 자신만의 에덴을 찾도록 도울 수 있을지도 모른다.`,
        );
      }
      era.println();
      if (era.get('exp:7:性爱次数') > 0) {
        await gold_shp.print_and_wait(
          `이제 와서 이미 늦은 분석 같지만 ${you.actual_name}은(는) 침대에서 자신의 뜨거워진 몸을 달래줄 수 있는 사람이 맞다.`,
        );
        era.println();
      }
      await gold_shp.print_and_wait(
        '하지만——젠장, 그렇다고 해서 내 이 황금의 여정에 꼭 그 녀석이 있어야만 하는 건 아니잖아!',
      );
      era.println();
      await gold_shp.print_and_wait(
        '중앙 트레센은 정말 훌륭해. 우마무스메든 트레이너든 훌륭한 선택지가 너무 많아! 무사카 겐지로 트레이너(아마 너무 나이 들었을지도), 나세 후미노 트레이너(아마 너무 엄격할지도), 그리고 키류인 아오이 트레이너(아마 너무 어릴지도), 모두 한때 내 마음속 에덴으로 가는 길의 동반자 후보였어.',
      );
      era.println();
      await gold_shp.print_and_wait([
        '하지만——나는 하필 그 녀석을 보고 ',
        {
          color: gold_color,
          content: '0.0000001초 만에, 두 다리에 명령을 내렸다.',
        },
      ]);

      era.printButton('「이것이 황금별의 계시인가……」(관계 진전)', 1);
      era.printButton('「도대체 내가 뭘 하고 있는 거지……」(관계 진전 중지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `그 변명은 ${gold_shp.name} 자신조차 속이지 못했다. ${gold_shp.sex}는 눈을 감았다. 하지만 마음에 새겨진 모습은 사라지지 않았다. ${gold_shp.sex}는 그 녀석을 보지 않으려고 힘껏 고개를 저었지만, 머리는 자꾸 그 녀석을 떠올리게 했다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${gold_shp.sex}는 눈을 감았다. 하지만 마음에 새겨진 모습은 사라지지 않았다. ${gold_shp.sex}는 그 녀석을 보지 않으려고 힘껏 고개를 저었지만, 머리는 자꾸 그 녀석을 떠올리게 했다.`,
        );
      }
      era.println();
      await gold_shp.print_and_wait(
        `지금 이 순간, ${gold_shp.name}의 한쪽은 스스로를 설득하고 있다. 어쩌면 이 세상에 정말 첫눈에 반하는 사랑이 존재할지도 모르고, 고루시짱과 트레짱은 사랑의 화살에 정통으로 맞은 천생연분일지도 모른다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `나머지 반의 ${gold_shp.name}은 반론을 펼치고 있다. 어쩌면 이 모든 건 고루시짱과 트레짱의 관계가 좋다는 증거일 뿐, 아무것도 증명할 수 없을지도 모른다.`,
      );
      era.println();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `드디어, 감성적인 ${gold_shp.name}이 이성을 이겼다. ${gold_shp.name}의 눈빛이 망설임에서 단호함으로 바뀌었고, 그녀는 몸을 일으켜 트레센을 바라보았다.`,
        );
        era.println();
        await gold_shp.say_and_wait('아니, 이건 첫눈에 반한 거야.');
      } else {
        await gold_shp.print_and_wait(
          `드디어, 이성적인 ${gold_shp.name}이 우위를 점했다. 하지만 그 억누를 수 없는 생각은 여전히 먹구름이 드리운 그림자처럼 머리 위를 맴돌고 있다. ${gold_shp.name}조차 쉽게 떨쳐낼 수 없는 이 괴로움은, 도대체 언제까지 계속될 것인가?`,
        );
      }
      return [ret];
    };
    f.title = [{ color: gold_color, content: '감성과 이성' }];
    return f;
  })(),
  '74-1': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `어느 날 밤, ${gold_shp.name}은(는) 코와 윗입술 사이에 연필을 끼우고 푹신한 기숙사 침대에 반쯤 누워 있었다. ${gold_shp.sex}는 두 다리와 튼튼한 허리로 몸통을 들어 올린 채 머리만 매트리스에 붙이고 있었다. 연필의 나무와 도료가 섞인 냄새도 ${gold_shp.sex}의 사고 속도를 방해하지 못했다. 지금 이 세상 만물이 ${gold_shp.name}의 머릿속에서 빠르게 분석되고 해체되었다가 다시 조립되고 있었다.`,
      );
      era.println();
      await era.printAndWait('상온 초전도체는 가능성이 있을까? 없다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('공룡은 거대한 닭일까? 그렇다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('펩시냐 코카콜라냐? 따뜻한 맹물.', {
        color: gold_color,
      });
      era.println();
      await gold_shp.print_and_wait('……');
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) ${callname}을(를) 좋아할까? 좋아한다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) 두 다리에 힘을 주고 공중으로 튀어 올라, 머리와 양손 세 점으로 침대 위에 물구나무를 섰다! 이제 피가 ${gold_shp.sex}의 뇌에 작전에 필요한 에너지를 끊임없이 보내고 있었다. 마음을 정했으니 다음에 할 일은 하나뿐……!`,
      );
      era.println();

      era.printButton('「작전을 세우고 공세를 시작하자!」(관계 진전)', 1);
      era.printButton(
        '「신중하게, 장기전으로 가자!」(아직 진전시키지 않음)',
        2,
      );
      return [await era.input()];
    };
    f.title = [{ color: gold_color, content: '전술적 결단' }];
    return f;
  })(),
  '74-2-start': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.say_and_wait(
        '골드 쉽은 야심만만하게 천하를 집어삼키려 한다. 지구의 인간과 우마무스메가 아무리 경계한들, 황금 화산이 폭발하는 날에는 최소한 120억 우마코인의 피해를 각오해야 할 것이다.',
      );
      era.println();
      await gold_shp.say_and_wait(
        '그러나 영웅 골드 쉽조차 색정 앞에서는 약한 법……',
      );
      era.println();
      await gold_shp.say_and_wait(
        '지금 골드 쉽은 트레이너의 책상 끝에 앉아 있다. 입으로 뭔가 중얼거리는 모습이 마치 이 장면을 삼인칭으로 중계하는 것 같다.',
      );
      era.println();

      era.printButton('「……스스로 해설하는 거야? 방금 그 문장까지?」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `${callname}, 시끄러워. 좀 어울려 주라고! 역할을 맡아 줘야지! 골드 쉽은 약간 화를 내며 외친 뒤 주먹을 들어 트레이너를 가볍게 때린다. 피해량 주사위를 굴려라.`,
      );
      era.println();

      era.printButton(
        '「아니, 갑자기 TRPG 모드로 들어가지 마! 이쪽은 진지하게 일하는 중이야.」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait([
        '우우우, 일이랑 귀여운 담당 ',
        gold_shp.uma_sex_title,
        '하고 노는 것 중에 뭐가 더 중요하냐구!',
      ]);
      era.println();
      await era.printAndWait(
        `${gold_shp.name}이(가) ${you.name}의 의자를 계속 흔들어 대는 통에 ${you.name}은(는) 일에 집중할 수가 없었다. 어쩔 수 없이 자리에서 일어나 ${gold_shp.name}이(가) 또 무슨 일을 벌이려는지 보러 갔다.`,
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.name}은(는) 짓궂게 웃더니 ${you.name}을(를) 소파에 밀어 넘어뜨렸다.`,
      );
    };
    f.title = [
      { color: gold_color, content: '영웅 골드 쉽도 색정에는 약하다' },
    ];
    return f;
  })(),
  /**
   * @param {CharaTalk} gold_shp ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ゴールドシップのプレイヤーへの呼び方
   */
  async '74-2-end'(gold_shp, you, callname) {
    const ret = [];
    era.drawLine();
    await era.printAndWait(
      `격렬한 말타기 놀이는 의심할 여지 없이 짜릿한 경험이었다. 조금 전까지 쾌적했던 트레이너실에는 이제 정액과 애액 냄새가 가득했다. ${you.name}은(는) 숨을 헐떡이며 ${gold_shp.name}의 품속으로 파고들었다. ${gold_shp.sex}에게서 끊임없이 풍겨 나오는 호르몬을 들이마시면서도 머릿속으로는 방금 무슨 일이 있었는지 계속 생각했다.`,
    );
    era.println();
    await gold_shp.say_and_wait(
      `어떠냐, ${callname}…… 초절정 미소녀 골쉽의 흠뻑 젖은 보지, 기분 좋았지?`,
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name}은(는) 뺨을 붉히며 의기양양하게 ${you.name}에게 웃어 보였다.`,
    );
    era.println();

    era.printButton('「언제부터 그렇게 상스러워진 거야……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      '네 녀석 때문이잖아…… 흐흐흐. 내 앞에서 쇄골을 드러내고 엉덩이를 흔들어 대고, 꼭 유혹하는 것처럼 말이야. 더는 못 참겠더라구!',
    );
    era.println();

    era.printButton('「변태…… 강간범……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      '뭐라고 하든 우린 이제 빼도 박도 못하는 사이다!',
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name}은(는) 팔로 ${you.name}의 목을 감고 억지로 가슴에 끌어안았다. 향긋한 체취가 의식을 녹였다.`,
    );
    era.println();
    await era.printAndWait(`긴 침묵 끝에 ${gold_shp.sex}가 입을 열었다.`);
    era.println();
    await gold_shp.say_and_wait('그러니까…… 책임질게. 그……');
    await gold_shp.say_and_wait(`${callname}, 나랑…… 사귀자!`);
    era.println();

    era.printButton('「응, 좋아.」(관계 진전)', 1);
    era.printButton('「그건 좀……」(아직 진전시키지 않음)', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait(
        `${you.name}이(가) 예상하지 못한 것은 ${gold_shp.name}이(가) ${you.name}보다 더 놀란 얼굴을 하고 있었다는 점이다.`,
      );
      era.println();
      await gold_shp.say_and_wait('진짜냐? 당연히 거절할 줄 알았는데!');
      await gold_shp.say_and_wait(
        '……그래서 먼저 쌀을 익혀 밥으로 만들어 버리는 작전을 택한 거야.',
      );
      era.println();

      era.printButton('골쉽, 당황했네. 하하. 그렇게 못 믿었어?', 1);
      await era.input();

      await gold_shp.say_and_wait(
        '이런 일에 안 당황하는 녀석이 어딨냐! 그리고 웃지 마!',
      );
      await gold_shp.say_and_wait('그야…… 성공할 줄은 몰랐으니까……');
      await gold_shp.say_and_wait(
        '나, 평소에도 골치 아프고 불성실하고 골치 아프고…… 손도 가만 못 두고, 늘 너를 끌어들이잖아……',
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.sex}는 말하다가 입을 다물었다. ${you.name}은(는) ${gold_shp.sex}의 가빠진 숨소리로 울음을 참으려 한다는 걸 알 수 있었다.`,
      );
      era.println();
      await you.say_and_wait(
        '나는 트레이너야. 담당 우마무스메를 이끌고 소중히 여기는 게 내 사명이지. 넌 내 담당이고, 그건 영원히 변하지 않아.',
      );
      await you.say_and_wait(
        '현실에도, 세상에도 문제는 산더미처럼 있겠지. 하지만 내 머릿속은 이미 네가 엉망으로 만들어 놨어.',
      );
      await you.say_and_wait('지금은 너랑 함께 계속 미쳐 있고 싶어.');
      await you.say_and_wait('그러니 각오해——');
      era.printButton('「사랑해♡」', 1);
      era.printButton('「강○범♡」', 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name}와(과) ${gold_shp.name}은(는) 꼭 끌어안았다. 이 침대는 이제 ${gold_shp.sex}의 작은 흐느낌과 막 연인이 된 두 사람을 감싸고 있었다.`,
      );
    } else {
      await era.printAndWait(
        `${gold_shp.name}은(는) ${you.name}이(가) 상상했던 것처럼 떼를 쓰며 뒹굴지는 않았다. 쓸쓸히 몸을 일으키자 가슴의 두 언덕이 아래로 처졌다. ${gold_shp.sex}는 입을 열어 무슨 말을 하려 했지만, 결국 입술 사이로 나온 것은——`,
      );
      era.println();
      await gold_shp.say_and_wait('응, 알았어. 미안.');
      era.println();
      await era.printAndWait(
        `${gold_shp.sex}는 말없이 침대에서 내려와 바닥에 떨어진 옷을 주워 입었다.`,
      );
      era.println();

      era.printButton('「저기, 골쉽?」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}에게 돌아오는 대답은 없었다. 그 사람은 가볍게 고개를 숙이고 문을 닫고 나갔다.`,
      );
    }
    return ret;
  },
  golden_ship_attack: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `트레이닝실 스피커에서 흘러나오는 유쾌한 예능 프로그램 효과음과 함께, ${gold_shp.name}이 갑자기 ${you.name}을(를) 소파로 초대했다.`,
      );
      await era.printAndWait(
        `${gold_shp.sex}는 민첩하게 펜을 들어 화이트보드에 적었다:`,
      );
      era.println();

      await era.printAndWait(`기습! ${gold_shp.name}의 `, { align: 'center' });
      await era.printAndWait('초잔혹 양자택일 시험! ', { align: 'center' });
      await era.printAndWait('~살아남을 수 있을까?~', { align: 'center' });
      era.println();

      await era.printAndWait(
        `갑작스럽긴 하지만, ${gold_shp.name}이 ${you.name}에게 심리 테스트를 해보려 하는 것 같다.`,
      );
      await era.printAndWait(
        `갑작스러운 일이라 ${you.name}은(는) 거절할 권리도 없는 것 같다! 용기를 내서 갑작스럽게 받아들일 수밖에 없다.`,
      );

      era.printButton('「이게 뭔데?!」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `자, 이제 문제를 적을게요~ ${callname} 님은 화이트보드를 봐 주세요~`,
      );
      await gold_shp.say_and_wait(
        '첫 번째 문제는 정말 고전적인 문제예요! 누구나 한 번쯤은 들어본 문제죠!',
      );
      await gold_shp.say_and_wait(
        '【초콜릿 맛 ◯◯】과 【◯◯ 맛 초콜릿】 중 무엇을 선택하시겠어요?',
      );

      era.printButton('「초콜릿 맛 ◯◯……」', 1);
      era.printButton('「◯◯ 맛 초콜릿……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '문제 출제자인 나조차도 【다른 걸 먹을 거야】! 다음 문제!',
      );
      await gold_shp.say_and_wait('두 번째 문제! 보시죠!');
      await gold_shp.say_and_wait(
        '【우마뾰이 영상을 가족에게 실수로 보내는 것】과 【우마뾰이 영상을 담당 우마무스메에게 실수로 보내는 것】 중 무엇을 선택하시겠습니까?',
      );

      era.printButton('「우마뾰이 영상을 가족에게 실수로 보내는 것……」', 1);
      era.printButton(
        '「우마뾰이 영상을 담당 우마무스메에게 실수로 보내는 것……」',
        2,
      );
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '남에게 들키고 싶지 않다면 【안 하면 된다】! 다음 문제!',
      );
      await gold_shp.say_and_wait('세 번째 문제는 좀 까다로워질 거예요!');
      await gold_shp.say_and_wait(
        '여자친구와 술을 마실 때, 그녀가 제3자를 불러 함께 마시고 싶어 한다!',
      );
      await gold_shp.say_and_wait(
        '당신은 【전 여자친구】를 부를 것인가, 아니면 【그녀의 전 남자친구】를 부를 것인가?',
      );

      era.printButton('「전 여자친구……」', 1);
      era.printButton('「그녀의 전 남자친구……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('왠지 【좀 찝찝한】기분이 드네! 다음 문제!');
      await gold_shp.say_and_wait(
        '네 번째 문제! 많은 사람들이 할 법한 일 같네요!',
      );
      await gold_shp.say_and_wait('당신은 우마무스메 팀의 트레이너입니다!');
      await gold_shp.say_and_wait(
        '【언제든 팀원 우마무스메랑 우마뾰이 하고싶다】와 【언제든 팀원 우마무스메들이 당신과 우마뾰이 하고싶어 한다】 중 무엇을 선택하시겠습니까?',
      );

      era.printButton('「언제든 팀원 우마무스메랑 우마뾰이 하기……」', 1);
      era.printButton(
        '「언제든 팀원 우마무스메들이 나랑 우마뾰이 하고싶어 하기……」',
        2,
      );
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '당신은 정말 개변태네요~ 하지만 가끔은【인내심을 좀 더 가지는】게 좋을지도 몰라요?',
      );
      await gold_shp.say_and_wait(
        '다섯 번째 문제! 생사가 달린 사건이 발생했습니다!',
      );
      await gold_shp.say_and_wait(
        '오, 안 돼! 당신, 당신의 여자친구, 당신의 친구 세 명이 납치당했습니다! 납치범은 아주 기괴하게도 그 중 한 명을 죽여야만 당신과 남은 한 명의 목숨을 구할 수 있다고 요구하고 있습니다!',
      );
      await gold_shp.say_and_wait(
        '【생사를 함께한 절친한 친구】를 죽일 것인가, 아니면 【당신을 위해 기꺼이 희생하려는 여자친구】를 죽일 것인가?',
      );

      era.printButton('「생사를 함께한 절친한 친구를 죽인다……」', 1);
      era.printButton('「나를 위해 기꺼이 희생하려는 여자친구를 죽인다……」', 2);
      await era.input();

      await era.printAndWait(
        '……북소리도, 기묘하고 장난기 넘치는 음악도, 어디서 나온 건지 모를 웃음소리도 없었다.',
      );
      await era.printAndWait('모든 것이 갑자기 멈춰버렸다.');
      await era.printAndWait(
        `${gold_shp.name}의 표정이 무척 평온해졌고, ${gold_shp.sex}의 눈빛은 빛을 잃은 채, 곧장 ${you.name}의 얼굴을 응시했다.`,
      );
      era.println();

      await gold_shp.say_and_wait(
        '이 문제는 매우 중요합니다. 반드시 신중하게 고려한 후 답해 주십시오.',
      );
      era.println();

      era.printButton('「생사를 함께한 절친한 친구를 죽인다……」', 1);
      era.printButton('「나를 위해 기꺼이 희생하려는 여자친구를 죽인다……」', 2);
      await era.input();

      await gold_shp.say_and_wait(
        '이 문제는 매우 중요합니다. 반드시 신중하게 고려한 후 답해 주십시오.',
      );
      era.println();

      await era.printAndWait(`${gold_shp.sex}는 이렇게 말했다`);
      const buffer = [
        {
          accelerator: 1,
          config: { disableWarning: true },
          content: '「생사를 함께한 절친을 죽인다……」',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { disableWarning: true },
          content: '「널 위해서라면 죽어도 좋다는 여자 친구를 죽인다……」',
          type: 'button',
        },
      ];
      era.printInColRows(buffer);
      setTimeout(() => {
        if (ret.length < 5) {
          buffer.push({
            accelerator: 3,
            config: { disableWarning: true },
            content: '「아무것도 고르지 않겠다……!」',
            type: 'button',
          });
          era.replaceInColRows(buffer);
        }
      }, 10000);
      ret.push(await era.input());
      era.println();

      await era.printAndWait(
        `${gold_shp.name}이 다시 평소 모습으로 돌아와, 히죽거리며 음악을 틀기 시작했다.`,
      );
      era.println();
      await gold_shp.say_and_wait(`후후~ ${callname} 수고했어~`);
      if (ret.at(-1) === 3) {
        await gold_shp.say_and_wait(
          `음～ ${callname}은(는) 착한 녀석이네. 담당 우마무스메랑 말타기 놀이를 하고 싶어 하는 건 좀 그렇지만.`,
        );
        await gold_shp.say_and_wait(
          '……내가 낸 문제라고? 그럼 왜 세 번째 걸 안 골랐냐.',
        );
        await gold_shp.say_and_wait(
          '아, 초콜릿 먹을래? 걱정 마, 아무것도 안 넣었고 맛도 평범하다구.',
        );
        era.println();
        await era.printAndWait([
          '트레이너실에서 함께 웃는 이 풍경은 앞으로도 사라지지 않을 것이다.',
        ]);
      } else {
        era.println();
        await era.printAndWait(
          `${gold_shp.sex}는 바람처럼 왔다가 바람처럼 떠났다. ${you.name}은(는) 결국 심리 테스트 결과를 듣지 못했다.`,
        );
      }
      era.println();
      if (ret[3] === 1) {
        era.print([
          gold_shp.get_colored_name(),
          '은 ',
          { color: buff_colors[2], content: ' [매도좋아함] ' },
          '과 ',
          { color: buff_colors[2], content: ' [고통좋아함] ' },
          '을 얻었다!',
        ]);
      } else {
        era.print([
          gold_shp.get_colored_name(),
          '은 ',
          { color: buff_colors[2], content: ' [도S] ' },
          '를 얻었다!',
        ]);
      }
      if (ret[1] === 2) {
        era.print([
          gold_shp.get_colored_name(),
          '은 지금 좀',
          { color: buff_colors[2], content: ' [흥분] ' },
          '했다!',
        ]);
      }
      return ret;
    };
    f.title = [
      {
        color: gold_color,
        content:
          '돌격! 골드 쉽의 초잔혹 양자택일 퀴즈! ～살아남을 수 있을까?～',
      },
    ];
    return f;
  })(),
};
