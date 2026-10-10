/**
 * @file シンボリルドルフ - 恋慕
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait('태어날 때부터 삶의 궤적은 정해져 있었다.');
      await luna.print_and_wait([
        '루나. 심볼리 가문의 ',
        luna.uma_sex_title,
        '.',
      ]);
      await luna.print_and_wait([
        '수많은 동년배와 마찬가지로, ',
        luna.sex,
        '는 심볼리 가문의 숙원을 이루어야 했다.',
      ]);
      await luna.print_and_wait([
        luna.couple_title,
        '은 영원히 강하고, 영원히 사람들의 마음을 뒤흔들어야 했다. 즉, 승리를 추구해야 한다는 뜻이다.',
      ]);
      await luna.print_and_wait(
        '승리를 위해서라면 그 밖의 모든 것은 선택에 불과하며, 불필요하고, 버릴 수 있는 것이었다.',
      );
      await luna.print_and_wait([
        '다시 말하면, ',
        luna.couple_title,
        '은 마음대로 행동해도 된다는 뜻이었다.',
      ]);
      await luna.print_and_wait('어느 숙모는 정욕에 빠졌고.');
      await luna.print_and_wait('어느 백모는 술에 빠졌으며.');
      await luna.print_and_wait('어느 언니는 폭력에 빠졌다.');
      await luna.print_and_wait(
        '승리만 거둘 수 있다면 그 모든 것이 용납되었다.',
      );
      await luna.print_and_wait(
        '그러니 루나가 무서울 만큼 큰 잠재력을 드러내자 가문의 거물들은 온화한 표정을 지었다.',
      );
      await luna.print_and_wait(
        '어느 날 루나는 제 발로 그들을 찾아갔다. 모두 익숙한 얼굴들이었다.',
      );
      await luna.print_and_wait('거물들은 온화하게 물었다. 무엇을 원하느냐고.');
      await luna.print_and_wait([
        '루나는 대답했다. ',
        luna.sex,
        '는 사랑을 원한다고.',
      ]);
      await luna.print_and_wait([
        '곧이어 루나는 수많은 새 장난감을 얻었고, 메지로 가문의 문은 ',
        luna.sex,
        '에게 열렸으며, 수많은 아름답고 멋진 이들이 ',
        luna.sex,
        '에게 아부하며 정성을 쏟았다……',
      ]);
      await luna.print_and_wait(
        '세상의 온갖 좋은 것들에 둘러싸여 있었음에도, 루나는 자신이 사랑받고 있다고 느끼지 못했다.',
      );
      await luna.print_and_wait([
        luna.sex,
        '가 원한 것은 이해관계로 묶이지 않고, 권력에 가려지지 않은, 그저 순수하고 마음에서 우러나오는 무조건적인 사랑이었다.',
      ]);
      await luna.print_and_wait(
        '밤에 홀로 침대에 앉아 있을 때면, 루나는 아주 미세한 온기라도 찾으려는 듯 몸을 웅크리곤 했다.',
      );
      await luna.print_and_wait([
        '하지만 루나 위로 쏟아지는 달빛은 ',
        luna.sex,
        '에게 뼛속까지 시린 냉기만을 느끼게 할 뿐이었다.',
      ]);
      await luna.say_and_wait('……누구든 좋으니……');
      await luna.print_and_wait([
        '루나는 너무나 두려웠다. 모든 것을 걸고 세상에 바랐는데도, ',
        luna.sex,
        '는 여전히 아무것도 얻지 못했다.',
      ]);
      era.println();

      era.printButton(
        '「심볼리 가문의 저택은 왜 이렇게 미로 같은 거야……?」',
        1,
      );
      await era.input();
      await luna.print_and_wait(
        '방문 밖에서 누군가의 목소리가 들려온 것 같았다.',
      );

      era.printButton('문을 연다', 1);
      await era.input();
      await you.say_and_wait('여기가 내 방인가……?');
      await you.say_and_wait(
        '죄송합니다!? 제가 길을 잘못—— 어? 너 왜 울고 있어?!',
      );
      await you.say_and_wait(
        '무서워하지 마!!! 난 나쁜 사람이 아니야!!! 진짜로!!!',
      );
      await you.say_and_wait(
        '이런, 애가 왜 갈수록 더 심하게 울지, 콧물이……! 콧물이 내 옷에 묻었잖아!',
      );
      await you.say_and_wait('하아……');
      era.println();

      await luna.print_and_wait('그것은 그저 우연에 불과한 만남이었다.');
      await luna.print_and_wait(
        '발산할 곳이 필요하고, 의지하고 싶고, 온기가 간절했던 아이가 길을 잃은 사람과 마주친 것뿐.',
      );
      await luna.print_and_wait(
        '밤새도록 후자는 울음을 터뜨린 아이를 서투르게 달래주었다.',
      );
      await luna.print_and_wait(
        '그때부터 두 사람 사이에는 조금씩 공통된 화제가 생겨났다.',
      );
      await luna.print_and_wait(
        '그때부터 두 사람은 점차 떨어질 수 없는 사이가 되었다.',
      );
      await luna.print_and_wait(
        '상심한 아이와 평범한 한 사람이 영혼의 공명을 일으킨 것이다.',
      );
      await luna.say_and_wait(
        '분명 그때부터였을 거야, 내가 당신을 결코 잊을 수 없게 된 건……',
      );
    };
    f.title = '음';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '일 년에 한 번 있는 개학식. 보통 학교라면 덕망 높은 교장이 개회를 알리는 연설을 한다.',
      );
      await luna.print_and_wait(
        '하지만 트레센 학원에서 그 역할을 맡을 사람은 오직 하나뿐이다.',
      );
      await luna.print_and_wait([
        '심볼리 루돌프——학생회장은 ',
        luna.sex,
        '에게 고개를 숙이는 사람들 사이를 지나 연단에 섰다.',
      ]);
      await luna.print_and_wait(
        '학생들은 기대에 가득 찼고, 교직원들은 의욕이 넘쳤다.',
      );
      await luna.print_and_wait([
        '새 학기다. 일본의 ',
        luna.uma_sex_title,
        '가 거듭 패배하고 있더라도, 오늘부터 사람들은 침울함을 떨쳐 낼 것이다.',
      ]);
      await luna.print_and_wait(
        '학생회장이 있으니까. 심볼리 루돌프——심볼리 가문의 사자——그 황제. 모두가 그 사실에 환희했다.',
      );
      await luna.print_and_wait([
        '뜨거운 시선을 받으며 루나는 위장이 꽉 움켜쥐어진 듯했고, ',
        luna.sex,
        '는 당장이라도 토할 것 같았다.',
      ]);
      await luna.print_and_wait(
        '말없는 공허함과 두려움이 다시 몸을 뒤덮으려 했다……',
      );
      await luna.print_and_wait(
        '루나는 불안하게 주위를 둘러보다가, 한 사람이 발끝으로 서서 필사적으로 위를 올려다보고 있는 모습을 발견했다.',
      );
      await you.say_and_wait('힘내! 루나!');
      await luna.print_and_wait([
        '멀리 떨어져 있었지만 루나는 ',
        you.get_colored_actual_name(),
        '의 입 모양으로 ',
        you.sex,
        '가 전하려는 뜻을 읽어 냈다.',
      ]);
      await luna.say_and_wait('——후우.');
      await luna.say_and_wait('제군들——');
      era.drawLine();
      await luna.print_and_wait(
        '하지만 어쩌면 우연이 겹쳐 운명이 되는 것일지도 모른다.',
      );
      await luna.print_and_wait(
        '수많은 이들의 기억에 남은 이 입학식에서, 사람들은 심볼리 루돌프가 위엄 있으면서도 유머러스한 방식으로 모두를 고무시켰던 것을 기억한다.',
      );
      await luna.print_and_wait([
        '사람들은 ',
        luna.sex,
        '의 진심 어린 미소를 기억한다.',
      ]);
      await luna.print_and_wait(
        '하지만 사람들은 알지 못했다. 그 미소가 사실은 진심 어린……「웃음 참기」에서 비롯되었다는 것을.',
      );
      await luna.say_and_wait(
        '발꿈치를 들고 그렇게 긴장한 표정을 짓다니…… 후훗.',
      );
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        '조차 알지 못했다. 이 광경이 높은 곳에 선 ',
        luna.uma_sex_title,
        '의 기억에 얼마나 오래 남을지를.',
      ]);
    };
    f.title = '음';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait([
        luna.uma_sex_title,
        '와 트레이너가 함께하는 시간은 사실 수업을 맡은 교사보다 조금 더 많은 정도다.',
      ]);
      await luna.print_and_wait(
        '훈련하고, 훈련을 계획하고. 레이스 일정을 짜고, 다시 레이스를 준비한다. 그 밖에는 특별히 만날 기회가 없다.',
      );
      await luna.print_and_wait(
        '바쁜 루나에게는 더더욱 그랬다. 그래서 루나는 어느 때보다 초조했다.',
      );
      await luna.print_and_wait(
        '서류 업무를 끝냈을 때는 하늘이 이미 까맣게 저물어 있었다.',
      );
      await luna.print_and_wait('지친 몸을 이끌고 루나는 학원을 순찰했다.');
      await luna.print_and_wait('한 바퀴, 또 한 바퀴.');
      await luna.print_and_wait([
        '마침내 ',
        luna.sex,
        '는 팀의 대기실에 도착했고, 그 안에는 불이 켜져 있었다.',
      ]);
      await luna.print_and_wait([
        luna.sex,
        '도 하루 종일 얼굴을 비추지 못했다. 아직 ',
        luna.sex_code === 1 ? '남자 후배' : '여자 후배',
        '가 남아 있는 걸까.',
      ]);
      await luna.print_and_wait(
        '루나는 문을 밀었다. 이곳은 자신의 비밀 기지와 달리 잠겨 있지 않았다.',
      );
      await luna.print_and_wait(
        '루나는 놀랐다. 자신의 트레이너가 소파에 누워 있고, 책과 온갖 자료가 여기저기 흩어져 있었다.',
      );
      await luna.say_and_wait('당신뿐이었나……');
      await luna.print_and_wait('그대도 나처럼 지금까지 일하고 있었던 건가.');
      await luna.print_and_wait(
        '루나의 입꼬리가 살짝 올라갔다. 자신은 학원을 위해서. 트레이너가 이렇게 힘쓰는 건…… 아마도 자신만을 위해서일 것이다.',
      );
      await luna.print_and_wait([
        '어째서인지 루나의 심장이 빠르게 뛰었다. ',
        luna.sex,
        '의 얼굴이 살짝 달아올랐다.',
      ]);
      await luna.print_and_wait([
        '마치 ',
        you.get_colored_actual_name(),
        '을(를) 위해 요란하게 뛰는 것 같았다.',
      ]);
      await luna.print_and_wait([
        '루나는 조금 몽롱해졌다. ',
        luna.sex,
        '는 가슴께의 옷을 꽉 움켜쥐었고, ',
        luna.sex,
        '는 트레이너를 향한 감정이 어딘가 달라졌음을 깨달았다.',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        '은(는) 이미 깊이 잠들어 있었다. 이곳에는 ',
        you.couple_title,
        '뿐이었다. ',
        you.couple_title,
        '뿐……',
      ]);
      await luna.print_and_wait(
        '루나는 숨을 죽이고 살짝 뒤로 몸을 기댔다. 반쯤 열린 문이 찰칵 닫혔다.',
      );
      await luna.print_and_wait([
        '그리고 ',
        luna.sex,
        '는 뒷짐 진 손으로 방문을 잠갔다.',
      ]);
      await luna.print_and_wait('——이래서는 안 된다는 걸 알고 있다.');
      await luna.print_and_wait([
        '루나는 무거운 발걸음으로 ',
        you.get_colored_actual_name(),
        '의 앞에 다가섰다.',
      ]);
      await luna.print_and_wait([
        '——',
        luna.sex,
        '는 학생회장으로서의 의무와 심볼리 가문의 영광을 짊어지고 있다.',
      ]);
      await luna.print_and_wait([
        '루나는 신발을 벗고 ',
        you.get_colored_actual_name(),
        '의 곁에 앉았다.',
      ]);
      await luna.print_and_wait('——들키면 모든 것이 무너진다.');
      await luna.print_and_wait([
        '루나는 몸을 숙여 ',
        you.get_colored_actual_name(),
        '의 품으로 파고들었다.',
      ]);
      await luna.print_and_wait([
        '하지만 ',
        luna.teen_sex_title,
        '는 그런 가능성을 외면했다. 미래가 어떻든, ',
        luna.sex,
        '는 지금 이 순간을 원했다.',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        '의 품 안에서 몸을 웅크린 채 루나는 탐욕스럽게 온기를 음미했다.',
      ]);
      await luna.say_and_wait(
        '그 오랜 시간이 흘러도, 당신의 향기는 조금도 변하지 않았네.',
      );
      await luna.print_and_wait(
        '마음이 평온해지고 해방되는 기분이었다. 마치 망망대해의 작은 나룻배가 안식처를 찾은 듯했다.',
      );
      await luna.say_and_wait(
        '무슨 일이 있어도 당신을 내 곁에서 보내지 않을 거야.',
      );
      await luna.print_and_wait([
        '루나는 몸을 돌려 ',
        you.get_colored_actual_name(),
        '을(를) 꽉 끌어안았다. ',
        luna.sex,
        '는 고개를 들어 품 안의 사람의 입술에 코끝을 가까이 댔다.',
      ]);
      await luna.say_and_wait('그러니, 당신도 나를 떠나지 말아줘…… 알겠지?');
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        '의 품 안에서 루나는 깊이 잠들었다.',
      ]);
      await luna.print_and_wait([
        '정말 오랜만에, ',
        luna.sex,
        '는 악몽도 꾸지 않고 아침까지 평온하게 잠들 수 있었다.',
      ]);
    };
    f.title = '원';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ルナ/シンボリルドルフがプレイヤーを呼ぶ名
     */
    const f = async (luna, you, callname) => {
      await luna.print_and_wait('루나는 침대에서 뒤척이고 있었다.');
      await luna.print_and_wait(
        '오랜만에 집에 돌아왔지만 달라진 것은 없어 보였다. 다만 가문의 거물들까지 자신에게 고분고분해지기 시작했다.',
      );
      await luna.print_and_wait([
        '이유가 무엇일까. 자신이 갈수록 강해져서일까. 심볼리 가문의 ',
        luna.uma_sex_title,
        '라면 그것을 자랑스러워해야 할 것이다.',
      ]);
      await luna.print_and_wait(
        '하지만 루나는 조금도 기쁘지 않았다. 오히려 가슴속 어딘가가 불타는 듯했다.',
      );
      await luna.print_and_wait([
        '그저 관례에 따라 집에 돌아온 것뿐인데, ',
        callname,
        '이(가) 곁에 있을 수 없다는 사실이 견딜 수 없었다.',
      ]);
      await luna.print_and_wait(
        '익숙한 길을 걸으면서도 루나는 몇 번이나 벽에 부딪힐 뻔했다.',
      );
      await luna.print_and_wait([
        luna.sex,
        '는 문득 자신이 누군가 곁에서 지켜주는 것에 익숙해졌음을, 자신의 어리광 섞인 기대어옴을 받아주는 존재에 익숙해졌음을 깨달았다.',
      ]);
      await luna.print_and_wait('곁에 없어……');
      await luna.print_and_wait('곁에 없어…………');
      await luna.print_and_wait('곁에 없어………………!');
      await luna.print_and_wait([
        '루나는 깨달았다. 그저 ',
        you.get_colored_actual_name(),
        '이(가) 곁에 없다는 이유만으로 ',
        luna.sex,
        '는 상실감에 잠긴다는 것을.',
      ]);
      await luna.print_and_wait(
        '밤이 깊어오고, 수년 전처럼 달빛이 다시 침실을 비추었다.',
      );
      await luna.print_and_wait(
        '차가운 기운이 다시 몸을 타고 올라왔고, 루나는 어쩔 수 없이 이불을 머리 끝까지 뒤집어쓴 채 사랑하는 이와 함께했던 순간들을 하나하나 떠올렸다.',
      );
      await luna.print_and_wait([
        '만약 ',
        you.get_colored_actual_name(),
        '이(가) 지금 이곳에 있어 같은 침대에 누워 있다면. 그렇다면……',
      ]);
      await luna.print_and_wait(
        '——서로의 입술은 떨어질 줄 모르고 서로를 탐닉했을 것이며.',
      );
      await luna.print_and_wait(
        '——뜨거운 숨결이 끊임없이 얼굴을 간질였을 것이다.',
      );
      await luna.print_and_wait(
        '——자신의 어깨와 쇄골에는 사랑의 흔적이 남았을 것이고.',
      );
      if (luna.sex_code - 1) {
        await luna.print_and_wait(
          '——자신의 가슴은 몇 번이고 애무받았을 것이다.',
        );
      }
      await luna.print_and_wait(
        '——자신의 긴 다리는 부드럽게 매만져졌을 것이며.',
      );
      await luna.print_and_wait('——서로를 끊임없이 갈구했을 것이다!');
      await luna.print_and_wait([
        '루나의 몸이 가늘게 떨리고 귀가 축 처졌다. ',
        luna.sex,
        '의 가느다란 손가락이 몸 아래를 스치자, ',
        luna.sex,
        '는 감전된 듯 경련했다.',
      ]);
      await luna.print_and_wait([
        '만약 ',
        you.get_colored_actual_name(),
        '이(가) 정말 이곳에 있다면, ',
        luna.sex,
        '는 그 어떤 요구라도 기꺼이 받아들였을 것이다.',
      ]);
      await luna.say_and_wait([
        you.get_colored_actual_name(),
        ', 어서 내 곁으로 돌아와줘……',
      ]);
      await luna.print_and_wait(
        '연인의 이름을 나지막이 읊조리며 루나는 깊은 잠에 빠져들었다.',
      );
    };
    f.title = '결';
    return f;
  })(),
};
