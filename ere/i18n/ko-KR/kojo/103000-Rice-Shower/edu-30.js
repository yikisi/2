/**
 * @file ライスシャワー - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  async train(rice) {
    const buffer = [
      () => rice.say_and_wait('힘낼게…… 으쌰!'),
      () => rice.say_and_wait('응, 가자!'),
      () => rice.say_and_wait('기대돼……'),
    ];
    await get_random_entry(buffer)();
  },
  async train_fail(rice) {
    const buffer = [
      () => rice.say_and_wait('우으……'),
      () => rice.say_and_wait('응……?'),
    ];
    await get_random_entry(buffer)();
  },
  ts_content(rice, attr) {
    era.print([rice.get_colored_name(), '의 ', attr, ' 훈련이 잘됐다……']);
  },
  ts_add: (() => {
    const title = '추가 자율 훈련';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        rice.get_colored_name(),
        '와(과) 훈련을 마친 뒤——',
      ]);
      await rice.say_and_wait(['어? ', callname, '은(는) 아직 안 돌아가?']);
      era.printButton('「내일 훈련을 준비해야지.」', 1);
      era.printButton(`「라이스을(를) 넋 놓고 보고 있었어.」`, 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          callname,
          '……',
          self_name,
          '를 위해서 아직도 일하고 있는 거야……?',
        ]);
      } else {
        await rice.say_and_wait(['우아아, ', callname, '！']);
      }
      await you.say_and_wait('라이스은(는) 먼저 쉬고 있어');
      await rice.say_and_wait('……응, 알았어');
      await rice.say_and_wait(['잘 자, ', callname, '']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 내일 준비를 마치고 돌아가려던 때였다.',
      ]);
      await era.printAndWait([
        '훈련장에는 아직도 달리고 있는 ',
        rice.get_colored_name(),
        '의 모습이 보였다.',
      ]);
      await rice.say_and_wait('하아…… 하아…… 아, 아직……');
      await rice.say_and_wait([self_name, ', 아직 할 수 있어. 힘내야 해……']);
      await you.say_and_wait('자율 훈련?');
      await rice.say_and_wait(['아…… ', callname, '']);
      await rice.say_and_wait('들켜 버렸네……');
      await rice.say_and_wait([
        callname,
        '이(가) ',
        self_name,
        '를 위해 열심히 해 주잖아. 그러니까 ',
        self_name,
        '도 열심히 해야지!',
      ]);
      era.printButton('「그럼 조금 더 함께할까?」', 1);
      era.printButton('「그 마음만으로도 기뻐.」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['응, 고마워, ', callname, '！']);
      } else {
        await rice.say_and_wait('그 마음만으로도 기뻐');
        await rice.say_and_wait([
          '으…… 그래도 ',
          self_name,
          '도 ',
          callname,
          '에게 도움이 되고 싶어',
        ]);
      }
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) 곁에서 ',
        rice.get_colored_name(),
        '의 추가 훈련을 지켜봤다.',
      ]);
      era.drawLine({ content: '트레이닝 종료 후' });
      era.printButton('「혼자 돌아가려니 쓸쓸한걸~」', 1);
      await era.input();
      await rice.say_and_wait('어?');
      await rice.say_and_wait([
        '그건…… ',
        self_name,
        '와(과) 함께 가고 싶다는 뜻이야?',
      ]);
      await rice.say_and_wait([
        self_name,
        ', 옷 갈아입고 올게! 조금만 기다려 줘',
      ]);
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '은(는) 옷을 갈아입은 ',
        rice.get_colored_name(),
        '와(과) 함께 돌아갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '레이스를 앞두고';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      const buffer = [
        () =>
          rice.say_and_wait([
            '이제 온 힘을 다해 달리면 되는 거지? ',
            callname,
            '！',
          ]),
        () =>
          rice.say_and_wait([
            self_name,
            '는 끝까지 포기하지 않고 달릴 거야! 힘낼게——오!',
          ]),
        () =>
          rice.say_and_wait([
            '아직 시작도 안 했는데, 좋은 레이스가 될 것 같은 기분이 들어. ',
            self_name,
            ', 오늘은 정말 기대돼!',
          ]),
        () => rice.say_and_wait('후우, 좋아……! 아직 시작 안 했어?'),
        () =>
          rice.say_and_wait(
            '떠, 떨리기 시작했어…… 저기, 오라버니. 라이스, 잠깐 손을 잡아도 될까?',
          ),
        () =>
          rice.say_and_wait(
            '모두를 행복하게 해 주고 싶으니까…… 라이스, 온 힘을 다해 달릴게!',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_moti_add: (() => {
    const title = '무사의 떨림';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('으으…… 으으……');
      era.printButton('상태가 안 좋아?', 1);
      await era.input();
      await you.say_and_wait('상태가 안 좋아?');
      await rice.say_and_wait('어? 아, 아니야. 그냥 조금 긴장돼서……');
      await rice.say_and_wait('하지만 이제 괜찮아');
      await rice.say_and_wait([
        '이렇게 ',
        callname,
        '와(과) 이야기하면 마음이 놓여',
      ]);
      await rice.say_and_wait([
        self_name,
        ', 열심히 할게. 잘 지켜봐 줘, ',
        callname,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        '해, 해냈어, ',
        callname,
        '。',
        self_name,
        ', 이겼어……',
      ]);
      await you.say_and_wait('좀 더 가슴을 펴도 돼');
      await rice.say_and_wait('가슴을 펴라고……? 저기……');
      await rice.say_and_wait(
        '게다가 우승이잖아! 정말 감사한 마음으로 받아들여야 해!',
      );
      await rice.say_and_wait([
        '흐, 흐음! 이렇게 하면 돼? ',
        self_name,
        ', 가슴 잘 펴고 있어?',
      ]);
      era.printButton('「네가 자랑스러워.」', 1);
      era.printButton('「다음에도 이기자.」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          self_name,
          '가 자랑스럽다고……? 왠지 부끄러워……',
        ]);
        await rice.say_and_wait([
          '하지만 ',
          callname,
          '이(가) 그렇게 생각해 줘서 ',
          self_name,
          '도 기뻐……',
        ]);
        await rice.say_and_wait('기쁜데 부끄러워……');
        await rice.say_and_wait([
          '우으, ',
          self_name,
          ', 뭐가 뭔지 잘 모르겠어~',
        ]);
      } else {
        await rice.say_and_wait(
          '으, 응! 다음 레이스에서도 이겨서 모두를 기쁘게 해 주고 싶어',
        );
        await rice.say_and_wait([
          '그러니까 ',
          callname,
          '. 앞으로도 ',
          self_name,
          '의 훈련, 잘 부탁해!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입착';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        '후우…… 다행이야. ',
        self_name,
        ', 제대로 힘낼 수 있었어……',
      ]);
      await rice.say_and_wait('다음에는 우승하고 싶어…… 노, 농담이야. 후후');
      era.printButton('「열심히 잘했어.」', 1);
      era.printButton('「다음에는 우승하자!」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['으, 응! 고마워, ', callname, '！']);
        await rice.say_and_wait([
          '하지만 ',
          self_name,
          '、',
          callname,
          '와(과) 함께여서 이렇게 힘낼 수 있었던 것 같아',
        ]);
        await rice.say_and_wait([
          self_name,
          ' 혼자라면 부족하지만, 함께라면 더 힘낼 수 있어……',
        ]);
      } else {
        await rice.say_and_wait('저, 저기…… 으, 응…… 다음에는 힘낼게!');
        await rice.say_and_wait('여, 역시 우승을 노려야겠지……');
        await rice.say_and_wait('더 열심히 해야 해!');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '레이스 패배';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait(['우으…… ', self_name, ', 졌어……']);
      await rice.say_and_wait([
        '미안해. ',
        self_name,
        '、',
        callname,
        '을(를) 실망시켜 버렸네……',
      ]);
      era.printButton('「다음 기회가 있잖아.」', 1);
      era.printButton('「왜 졌는지 생각해 보자.」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['저기…… 응. ', callname, '의 말이 맞아']);
        await rice.say_and_wait([
          self_name,
          ', 다음에는 꼭 이길게. ',
          callname,
          ', 잘 지켜봐 줘',
        ]);
      } else {
        await rice.say_and_wait(
          '이유…… 맞아. 무작정 열심히 하기만 해서는 또 지고 말 거야',
        );
        await rice.say_and_wait('패배한 이유를 찾아서 다음 레이스에 살려야 해');
        await rice.say_and_wait(
          '아무리 부족하더라도, 풀이 죽어 있기만 하면 계속 못난 채로 있을 뿐이야',
        );
        await rice.say_and_wait([
          self_name,
          ', 이번에 진 이유를 찾을게. 그리고 다음에는 이기고 싶어!',
        ]);
        await era.printAndWait([
          '그 뒤 둘은 함께 이번 패배의 원인을 되짚어 보았다.',
        ]);
        await era.printAndWait([
          rice.get_colored_name(),
          '의 마음은 신기할 만큼 긍정적으로 변해 있었다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_love: (() => {
    const title = '열렬한 사랑';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '센터로 라이브를 마친 ',
        rice.get_colored_name(),
        '와(과) ',
        you.get_colored_name(),
        ' 모두 기분이 한껏 들떠 있었다.',
      ]);
      await era.printAndWait([
        '그런데 지금의 ',
        rice.get_colored_name(),
        '은(는) 윤기 어린 눈빛으로 작은 발걸음을 재촉하며 ',
        you.get_colored_name(),
        '에게 달려오고 있었다.',
      ]);
      await you.say_and_wait('응……');
      await era.printAndWait([
        '승부복을 입은 ',
        rice.get_colored_name(),
        '은(는) 들뜬 양팔로 ',
        you.get_colored_name(),
        '의 허리를 끌어안았다.',
      ]);
      await era.printAndWait([
        rice.sex,
        '는 의아한 얼굴로 ',
        you.get_colored_name(),
        '을(를) 올려다보았다. 눈동자에서는 촉촉한 빛이 흘러넘쳤다.',
      ]);
      await rice.say_and_wait([callname, '、', self_name, ', 뭔가 잘못했어?']);
      await rice.say_and_wait([
        '어째서…… ',
        self_name,
        '를 안아 주지 않는 거야?',
      ]);
      await era.printAndWait([
        '촉촉한 눈망울을 당해 낼 수 없어, ',
        you.get_colored_name(),
        '은(는) 소녀의 작은 몸을 꼭 끌어안았다.',
      ]);
      await era.printAndWait([
        '시간이 흘러 이제 옷을 갈아입고 헤어져야겠다고 생각한 ',
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '의 어깨를 잡았다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '은(는) 아쉬운 듯 ',
        you.get_colored_name(),
        '의 손가락을 쓰다듬고는 「이따 봐」라는 말만 남긴 채 탈의실로 향했다.',
      ]);
      await era.printAndWait([
        '무슨 일을 하든 조심스럽고 겁을 내던 ',
        rice.get_colored_name(),
        '이(가) 이제는 작은 악마처럼 ',
        you.get_colored_name(),
        '에게 어리광을 부리고 있었다.',
      ]);
      await era.printAndWait([
        '라이브 뒤의 훈련이 끝나자 체육복을 입은 ',
        rice.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '에게 다가왔다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '은(는) 번호표가 달린 부분을 ',
        you.get_colored_name(),
        '에게 꾹 밀착시키며 ',
        you.get_colored_name(),
        '의 냄새를 즐겼다.',
      ]);
      await era.printAndWait([
        '딸을 둔 아버지는 이런 기분일까——그런 생각을 하며 ',
        rice.sex,
        '를 다시 한번 꼭 안아 주었다.',
      ]);
      await you.say_and_wait(['간지러워, 라이스']);
      await rice.say_and_wait('어?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '에게 옷을 갈아입으라고 일렀다.',
      ]);
      await era.printAndWait([
        '휘청거리는 뒷모습을 배웅하며 ',
        you.get_colored_name(),
        '은(는) 두 사람의 관계가 확실히 달라졌음을 깨달았다.',
      ]);
      await era.printAndWait([
        '요즘 ',
        rice.get_colored_name(),
        '의 어리광은 점점 과감해지고 있었다.',
      ]);
      await era.printAndWait([
        '끌어안거나, 입을 맞추거나, ',
        you.get_colored_name(),
        '의 손을 잡아 가슴에 대게 하는 일까지——이제는 그런 행동조차 어색하지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = '육성 시작';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, self_name) => {
      await era.printAndWait('훈련장');
      await rice.say_and_wait('훈련까지 아직 시간이 조금 남았네……');
      await rice.say_and_wait('……조금 뛰고 올까');
      await rice.say_and_wait([
        '에헤헤…… ',
        self_name,
        ' 선수, 환호 속에서 코스로——',
      ]);
      await you.say_as_passer_by_and_wait(`${rice.uma_sex_title}A`, '와아!!!');
      await rice.say_and_wait('어!?');
      bourbon.name = '실력파인 ' + bourbon.uma_sex_title;
      await bourbon.say_and_wait('하아…… 하아……!');
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        '또 기록 경신이야!',
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}A`,
        '이제 내년 클래식의 주인공은 정해졌네!',
      );
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}B`,
        '응…… 정말 멋진 달리기였어. 저기, 꼭……',
      );
      await bourbon.say_and_wait(
        '……아직 예정된 일정이 남아 있습니다. 실례하겠습니다',
      );
      await era.printAndWait([
        bourbon.get_colored_name(),
        '은(는) 달려가 버렸다.',
      ]);
      await you.say_as_passer_by_and_wait(
        `${rice.uma_sex_title}들`,
        '아—— 기다려——!',
      );
      await rice.say_and_wait('……대단해. 코스 옆에도 구경하는 사람이 가득해……');
      await rice.say_and_wait([
        '……지금 ',
        self_name,
        '가 저기 가면 방해만…… 되겠지',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '의 트윙클 시리즈 도전이 시작되었다!',
      ]);
      bourbon.name = undefined;
    };
    f.title = title;
    return f;
  })(),
  we_15: (() => {
    const title = '호수에 피는 꽃';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} b_call_r バクシンオーのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, bakushin, you, b_call_r, tenn_spr) => {
      await rice.say_and_wait(
        '와……! 관객이…… 엄청 많아……! 게다가 다들 눈이 반짝거려',
      );
      await era.printAndWait([
        '이날 ',
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '은(는) ',
        tenn_spr,
        ' 경기장을 견학하러 와 있었다. 그 이유는——',
      ]);
      era.drawLine({ content: '1주일 전' });
      await era.printAndWait(
        '턱을 괴고, 위태로울 만큼 뜨거운 눈빛으로 그 광경을 바라보고 있던 것은——',
      );
      await bakushin.say_as_unknown_and_wait('하아…… 하아……');
      await bakushin.say_as_unknown_and_wait([b_call_r, '……기다려 주세요……']);
      await rice.say_and_wait('어? 무, 무슨 일이에요?');
      await bakushin.say_and_wait(
        '다름이 아니라, 반장의 사명을 다하기 위해 아까부터 멋대로 뒤따라 달리고 있었습니다!',
      );
      await bakushin.say_and_wait([
        b_call_r,
        '의 스태미나는 훌륭하군요! 그래서 제안이 있습니다!',
      ]);

      await bakushin.say_and_wait([
        '함께 ',
        tenn_spr,
        '을(를) 견학하러 가지 않겠습니까?',
      ]);
      await bakushin.say_and_wait([
        '장거리를 제패할 스피드를 지닌 ',
        rice.uma_sex_title,
        '들이 그곳에 있답니다!',
      ]);
      await rice.say_and_wait('함께……? 텐노……상?');
      await bakushin.say_and_wait('네, 함께 갑시다!');
      await bakushin.say_and_wait(
        '친구의 숨은 힘을 끌어내는 것도 반장의 임무니까요!',
      );
      await era.printAndWait([
        '정말로 ',
        bakushin.get_colored_name(),
        '의 말대로였다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '의 장거리 적성은…… 확실히 강철처럼 단단하다.',
      ]);
      await era.printAndWait([
        tenn_spr,
        '도 언젠가 ',
        rice.sex,
        '가 목표로 삼을 무대 중 하나가 될 것이다.',
      ]);
      era.printButton('「교토로 견학을 가자.」', 1);
      await era.input();
      await bakushin.say_and_wait('아싸! 혼자 가기는 쓸쓸하니까요!');
      await bakushin.say_and_wait('참고로 거기서 파는 과자는 300엔입니다!');
      await rice.say_and_wait('……왠지 소풍 같네');
      await rice.say_and_wait('에헤헤, 기대돼!');
      await era.printAndWait('——그렇게 지금에 이르렀다.');
      await bakushin.say_and_wait('아아~! 얼마나 거센 추입인가요!');
      await bakushin.say_and_wait('저는 더 앞에 가서 보겠습니다!!');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '달라지기 위한 한 걸음';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} sprg_sta 皐月賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      sprg_sta,
    ) => {
      await rice.say_and_wait([
        self_name,
        '……끝까지 달렸어! 메이크 데뷔에서 이겼어!',
      ]);
      era.printButton(`「${rice.name}, 정말 잘했어.」(호감+5)`, 1);
      era.printButton(`${rice.name}의 머리를 쓰다듬는다(연모+1)`, 2);
      const ret = await era.input();
      await rice.say_and_wait(['와…… 고마워! ', callname, '……']);
      await rice.say_and_wait([
        '에……헤헤. 앞으로도 자, 잘 부탁해, ',
        self_name,
        '！',
      ]);
      await rice.say_and_wait([
        '——이렇게 ',
        you.get_colored_name(),
        '와(과) ',
        self_name,
        '은(는) 첫걸음을 내디뎠다!',
      ]);
      era.drawLine({ content: '며칠 후' });
      await era.printAndWait([
        '이날 ',
        you.get_colored_name(),
        '은(는) 다시 ',
        rice.get_colored_name(),
        '와(과) 함께 경기장에 왔다.',
      ]);
      await rice.say_and_wait('와…… 사람이 많아. 꼭 G1 같네');
      await rice.say_and_wait('……어라? 하지만 오늘은 G2도 G3도 아닐 텐데……?');
      await you.say_as_passer_by_and_wait(
        '중계',
        '등장합니다, 미호노 부르봉! 메이크 데뷔 무대에 섭니다!!',
      );
      await rice.say_and_wait(['……', call_26, '']);
      await you.say_as_passer_by_and_wait(
        '중계',
        '거리를 좁히며 단숨에 선두로!',
      );
      await you.say_as_passer_by_and_wait(
        '중계',
        '스피드는 떨어지지 않습니다. 그대로 질주합니다!',
      );
      await you.say_as_passer_by_and_wait('중계', [
        bourbon.get_colored_name(),
        ', 이 기세 그대로 선두에서—— 골인!!',
      ]);
      await you.say_as_passer_by_and_wait(
        '관객 A',
        '아~ 내년 클래식이 기대되네',
      );
      await you.say_as_passer_by_and_wait(
        '관객 A',
        '난 꼭 부르봉을 응원할 거야!',
      );
      await you.say_as_passer_by_and_wait('관객 B', [
        '맞아, 맞아! 미래의 3관 ',
        rice.uma_sex_title,
        '잖아!',
      ]);
      await you.say_as_passer_by_and_wait(
        '관객 A',
        '부르봉 레이스는 꼭 보러 갈 거야!',
      );
      await rice.say_and_wait([
        '……',
        call_26,
        '의 달리기를 보면서 다들 웃고 있네',
      ]);
      await rice.say_and_wait([self_name, '도 저렇게 될 수 있을까?']);
      era.printButton('「될 수 있어!」', 1);
      await era.input();
      await rice.say_and_wait(['어? ', callname, '！？']);
      await you.say_and_wait([rice.name, '라면 분명 할 수 있어!']);
      await rice.say_and_wait('！');
      await rice.say_and_wait([
        '……에헤헤. ',
        callname,
        '의 목소리는 마법 같아',
      ]);
      await rice.say_and_wait(
        '절대 못 할 것 같은 일도, 그렇게 생각하면 할 수 있을 것 같아져',
      );
      await you.say_and_wait('라이스도 클래식에 나가 보지 않을래?');
      await rice.say_and_wait('……클래식');
      await era.printAndWait([
        '——클래식에 출전한다는 것은 같은 해에 데뷔한 ',
        rice.uma_sex_title,
        '들과 겨룬다는 뜻이다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '와(과) ',
        bourbon.get_colored_name(),
        '이(가) 같은 무대에서——',
      ]);
      await rice.say_and_wait('！');
      era.printButton(`「${rice.name}라면 할 수 있어.」`, 1);
      await era.input();
      await rice.say_and_wait('……！');
      await rice.say_and_wait([
        callname,
        '은(는) 언제나 ',
        self_name,
        '를 믿어 주는구나……',
      ]);
      await rice.say_and_wait('알았어. 그렇게 할게');
      await rice.say_and_wait(
        '조금 무서워. 하지만 더는 달라지지 못하는 못난 아이로 있고 싶지 않아',
      );
      await rice.say_and_wait([
        self_name,
        '……힘낼게. 따라잡을 거야…… ',
        call_26,
        '을(를)!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '은(는) 클래식에 도전하기로 약속했다.',
      ]);
      await era.printAndWait(['우선은 ', sprg_sta, '。']);
      await era.printAndWait(
        '3관 노선의 전초전으로 삼아, 그 목표를 향해 힘을 쏟기로 했다.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} bakushin サクラバクシンオー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      bakushin,
      urara,
      you,
      callname,
      self_name,
      call_52,
    ) => {
      await era.printAndWait([
        '올해는 클래식 도전이 시작된다. ',
        you.get_colored_name(),
        '이(가) 정보를 모으려고 TV를 보고 있을 때——',
      ]);
      await you.say_as_passer_by_and_wait(
        '텔레비전',
        '이야~ 이번 클래식에는 쟁쟁한 선수들이 모였네요',
      );
      await you.say_as_passer_by_and_wait('텔레비전', [
        '단거리의 적수 없는 강자 ',
        bakushin.get_colored_name(),
        '、',
        rice.get_colored_name(),
        '도 출전 명단에 이름을 올렸습니다만, 역시——',
      ]);
      await you.say_as_passer_by_and_wait('텔레비전', [
        bourbon.get_colored_name(),
        '을(를) 빼놓을 수는 없죠. 뭐니 뭐니 해도 미래의 3관 ',
        rice.uma_sex_title,
        ' 후보니까요!',
      ]);
      await rice.say_and_wait(['새해 복 많이 받아, ', callname, '']);
      era.printButton(`「라이스！？」`, 1);
      await era.input();
      await rice.say_and_wait(['응. ', self_name, '야']);
      await rice.say_and_wait([
        '헤헤, 새해 인사하러 왔어. ',
        you.get_colored_name(),
        '에게 방해되진 않았어?',
      ]);
      era.printButton('「전혀 방해되지 않았어.」', 1);
      await era.input();
      await rice.say_and_wait('아…… 다행이다');
      await rice.say_and_wait([
        '에헤헤, 있잖아. 오늘 아침에 ',
        call_52,
        '이(가) 그랬어',
      ]);
      era.drawLine({ content: '아침' });
      await urara.say_and_wait('새해니까 슈크림 먹자~!');
      await urara.say_and_wait('……슈크림, 맛있을까?');
      era.drawLine({ content: '지금' });
      era.printButton('「맛없는 거야?」', 1);
      await era.input();
      await rice.say_and_wait([
        '후훗, 그렇지? ',
        self_name,
        '도 똑같이 말했어',
      ]);
      await rice.say_and_wait('그래서, 저기……');
      await rice.say_and_wait([
        self_name,
        '、',
        callname,
        '와(과) 새해 포부를 이야기하고 싶어. 올해 목표를……',
      ]);
      await rice.say_and_wait('안 될까?');
      era.printButton('「좋아.」', 1);
      await era.input();
      await rice.say_and_wait('헤헤, 신난다! 어떤 목표를 세울까?');
      await rice.say_and_wait([callname, '은(는) 어떤 목표를 세우고 싶어?']);
      era.printButton(`「라이스의 클래식 우승이야.」`, 1);
      await era.input();
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait(['……', self_name, '도 올해 목표를 세워도 돼?']);
      era.printButton('「물론이지.」', 1);
      await era.input();
      await rice.say_and_wait([
        self_name,
        ', 자신과 ',
        callname,
        '의 목표를 위해 열심히 할게!',
      ]);
      era.printButton('그 기세야!(근성+10)', 1);
      era.printButton('몸도 잘 챙기자(스태미나+10)', 2);
      era.printButton('열심히 공부하자(스킬 Pt+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait('응! 금방 이룰 수 있을지는 모르겠어');
          await rice.say_and_wait([
            '그래도 ',
            self_name,
            ', 절대 포기하지 않을게',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            '은(는) 그렇게 새로운 결의를 다졌다.',
          ]);
          break;
        case 2:
          await rice.say_and_wait('아와…… 레이스 전에 감기에 걸리면 큰일이야');
          await rice.say_and_wait([
            '게다가 ',
            self_name,
            '이(가) 쉬게 되면 ',
            callname,
            '의 훈련 계획은——',
          ]);
          await rice.say_and_wait('아우우우, 언제나 건강해야 해!');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 혼자 고민에 빠진 ',
            rice.get_colored_name(),
            '을(를) 황급히 달래며 앞으로의 계획을 세우기 시작했다.',
          ]);
          break;
        case 3:
          await rice.say_and_wait('응!');
          await rice.say_and_wait(['왠지 ', callname, ', 선생님 같아']);
          await rice.say_and_wait('후후…… 오늘 수업도 잘 부탁해…… 선생님');
          await era.printAndWait([
            '그 뒤 ',
            you.get_colored_name(),
            '은(는) ',
            rice.get_colored_name(),
            '와(과) 함께 레이스 영상을 보며 연구했다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = '미래를 향해, 멈추지 마';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('하아…… 하아……!');
      era.printButton('「수고했어.」', 1);
      await era.input();
      await rice.say_and_wait(['고마워, ', callname]);
      await rice.say_and_wait('하지만 고쳐야 할 점도 많이 보였어');
      await rice.say_and_wait([self_name, ', 더 열심히 해야 해!']);
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_lose: (() => {
    const title = '미래를 향해, 멈추지 마';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, bourbon, you, callname, self_name) => {
      await rice.say_and_wait('하아…… 하아……!');
      era.printButton('「수고했어.」', 1);
      await era.input();
      await rice.say_and_wait(['고마워, ', callname]);
      await rice.say_and_wait('하지만 고쳐야 할 점도 많이 보였어');
      await rice.say_and_wait([self_name, ', 더 열심히 해야 해!']);
      era.drawLine({ content: '지하 통로의 다른 곳' });
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '부르봉 선수! 부르봉 선수!!',
      );
      await bourbon.say_and_wait('……무슨 용무십니까?');
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '역시 【밤색의 초특급】이군요! 이번 레이스에서도 그 칭호에 걸맞은 모습을 보여 주셨습니다!',
      );
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '다들 기대하고 있습니다! 부르봉 선수가 3관을 달성하는 그 빛나는 순간을요!',
      );
      await bourbon.say_and_wait('응원에 감사드립니다. 그럼 실례하겠습니다');
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '아, 잠깐만요! 한 말씀만 더 해 주세요!」',
      );
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '질문 하나만 더 하겠습니다!」',
      );
      await you.say_as_passer_by_and_wait(
        '기자 A',
        '그러니까…… 이번 레이스에서 부르봉 선수의 라이벌은 누구라고 생각하십니까?',
      );
      await bourbon.say_and_wait('라이벌?');
      await bourbon.say_and_wait('제 판단에 그런 존재는 필요하지 않습니다');
      await bourbon.say_and_wait(
        '우승을 노린다면 상대는 반드시 그곳에 있습니다. 라이벌로 인정할 필요는 없습니다',
      );
      await rice.say_and_wait('……대단해');
      await rice.say_and_wait(
        '자신감도 있고 실력도 있어. 자기 길을 걸어가고 있구나……',
      );
      era.printButton(`「라이스도 힘내자.」`, 1);
      await era.input();
      await era.printAndWait('응!');
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '따라잡았어';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (rice, bourbon, you, callname, self_name, kiku_sho) => {
      await rice.say_and_wait('하아…… 하아……!!');
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await rice.say_and_wait('괜찮아, 괜찮아');
      await rice.say_and_wait(['그보다 ', callname, ', 보고 있었어?']);
      await rice.say_and_wait([self_name, ', 따라잡았어!']);
      await rice.say_and_wait(['에헤헤, 해, 해냈——……']);
      await era.printAndWait([rice.get_colored_name(), '은(는) 쓰러졌다.']);
      await rice.say_and_wait('후…… 후……');
      await era.printAndWait(
        '온 힘을 쏟아부은 뒤 팽팽하던 긴장이 갑자기 풀린 모양이었다.',
      );
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        '은(는) ',
        rice.sex,
        '를 어깨에 기대게 하고, ',
        rice.get_colored_name(),
        '을(를) 쉬게 하려고 발걸음을 옮기려던 그때——',
      ]);
      await bourbon.say_and_wait([
        '——',
        rice.sex,
        '의 발언은 이해할 수 없습니다',
      ]);
      await bourbon.say_and_wait('이번 레이스 내용으로 볼 때 ');
      await bourbon.say_and_wait([
        rice.sex,
        '는 『부르봉에게 이겼다』고 말해야 합니다',
      ]);
      era.printButton('이 아이한테는 그쪽이 더 중요하거든', 1);
      await era.input();
      await bourbon.say_and_wait('……이해 불가');
      era.drawLine();
      await rice.say_and_wait([
        '죄, 죄송해요! ',
        self_name,
        ', 또 ',
        callname,
        '에게 폐를……!',
      ]);
      era.printButton('「지쳤으니 어쩔 수 없지.」', 1);
      await era.input();
      await rice.say_and_wait('하지만……');
      era.printButton('「다음 레이스를 생각하자.」', 1);
      await era.input();
      await rice.say_and_wait('어? ……다음?');
      era.printButton('「클래식은 아직 끝나지 않았어.」', 1);
      await era.input();
      await rice.say_and_wait(['……그렇지, ', callname]);
      await rice.say_and_wait(
        '운 좋게 이번에 이겼을 뿐인데, 여기에 만족하면 안 돼',
      );
      await era.printAndWait([
        '3관 노선의 마지막 경기, 잔디 3000m의 장거리 ',
        kiku_sho,
        '。',
      ]);
      await era.printAndWait([
        '장거리 주자인 ',
        rice.get_colored_name(),
        '에게 지금까지 중 가장 중요한 결전의 무대다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = '멀리 있는 뒷모습';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, ', 역시 부족해……']);
      await rice.say_and_wait('더, 여, 열심히 해야……');
      await era.printAndWait('(털썩……)');
      await era.printAndWait([
        rice.get_colored_name(),
        '은(는) 온 힘을 쏟아부은 뒤 팽팽했던 긴장이 한꺼번에 풀린 모양이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '을(를) 부축하고 쉬게 하려고 걸음을 옮겼다.',
      ]);
      await era.printAndWait('(털썩……)');
      await rice.say_and_wait([self_name, ', 정말 못났어……']);
      await rice.say_and_wait('다음에는 지금보다 꼭 더 열심히 할게');
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙(클래식급) 시작';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      bourbon,
      urara,
      you,
      callname,
      self_name,
      call_52,
      u_call_r,
    ) => {
      bourbon.name = '어느 사이보그' + bourbon.uma_sex_title;
      await era.printAndWait('더욱 실력을 키우기 위한 강화 훈련이 시작되었다.');
      await rice.say_and_wait('……와, 어떡하지');
      await rice.say_and_wait([self_name, '도 합숙에 와 버렸어']);
      await rice.say_and_wait([
        '다른 ',
        rice.uma_sex_title,
        '도 잔뜩 있어. ',
        self_name,
        '가 불행을 불러오면——',
      ]);
      era.printButton('「지금 생각해야 할 건 그게 아니잖아?」', 1);
      await era.input();
      await rice.say_and_wait('……히익! 네, 네……!');
      await rice.say_and_wait('후후, 좋아…… 합숙도 열심히 할게');
      await rice.say_and_wait([self_name, ', 힘낼게……!']);
      await rice.say_and_wait('A!A!O!');
      await era.printAndWait([
        '이렇게 ',
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '의 여름 합숙이 시작되었다!!',
      ]);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '이(가) 훈련을 끝내고 밥을 먹으러 가려던 때——',
      ]);
      await bourbon.say_and_wait('하아…… 하아……!');
      await bourbon.say_and_wait('기록 경신. 목표 시간까지 앞으로 5초');
      await bourbon.say_and_wait('——훈련을 계속합니다');
      await rice.say_and_wait([
        '……부탁이야, ',
        callname,
        '. 한 번만 더 달리게 해 줘',
      ]);
      era.printButton('「……한 번만이야.」', 1);
      await era.input();
      await rice.say_and_wait('응!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 다시 달려 나가는 ',
        rice.get_colored_name(),
        '을(를) 지켜보았다.',
      ]);
      await urara.say_and_wait(['앗! ', u_call_r, ', 달려가 버렸다!']);
      await urara.say_and_wait('에~! 이제야 이야기할 수 있나 했는데!');
      await era.printAndWait([
        rice.get_colored_name(),
        '이(가) 한 바퀴를 돌고 돌아왔다.',
      ]);
      await rice.say_and_wait(['……어? ', call_52, '……？']);
      await urara.say_and_wait(['안녕! ', u_call_r, '! 그럼 같이 출발하자']);
      await you.say_and_wait('출발!');
      await rice.say_and_wait('어!? 둘 다……!?');
      era.drawLine();
      await rice.say_and_wait(
        '와! 구운 당근 야키소바, 스태미나 덮밥, 초대형 사과 사탕……!',
      );
      await urara.say_and_wait([
        u_call_r,
        '은(는) 뭐부터 먹을래? 우라라는 당근 아이스크림부터!',
      ]);
      await rice.say_and_wait([
        '저기, ',
        self_name,
        '는…… 우으, 어떡하지…… ',
        callname,
        '……',
      ]);
      era.printButton('기운이 불끈 솟는 파워 덮밥!(파워+10)', 1);
      era.printButton('근성으로 다 먹어라! 초대형 사과 사탕!(근성+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('꼬르륵……');
        await rice.say_and_wait('……꺅!? 아우우우……');
        await rice.say_and_wait([
          callname,
          ', 어떻게 ',
          self_name,
          '가 배고프다는 걸 알았어?',
        ]);
        await you.say_and_wait('오늘 정말 열심히 했으니까');
        await rice.say_and_wait([
          '헤헤, ',
          callname,
          ', 제대로 ',
          self_name,
          '를 지켜봐 줬구나',
        ]);
        await era.printAndWait([
          '셋은 즐겁게 식사를 했다. 소중한 시간은 눈 깜짝할 사이에 지나갔다.',
        ]);
      } else {
        await rice.say_and_wait('와…… 사과 사탕! 정말 먹어도 돼?');
        await rice.say_and_wait([
          self_name,
          '에게 사과 사탕은 최고의 보상이야',
        ]);
        await rice.say_and_wait(
          '달리기가 끝난 뒤나 시험이 끝난 뒤에, 엄마가 『오늘도 잘했어』라고 하면서 주셨거든',
        );
        era.printButton(`「그럼 오늘의 라이스도 먹어도 돼.」`, 1);
        era.printButton(`「라이스은(는) 언제나 잘해 왔잖아.」`, 2);
        await era.input();
        await urara.say_and_wait([
          '응, 응, ',
          u_call_r,
          '라면 100개를 먹어도 괜찮아!',
        ]);
        await rice.say_and_wait('그런 거야?');
        await urara.say_and_wait([
          '그렇지, 그렇지! 왜냐하면 ',
          u_call_r,
          ', 엄청—— 열심히 했으니까!',
        ]);
        await rice.say_and_wait(['……헤헤, 고마워. ', callname, '、', call_52]);
        await era.printAndWait(['셋은 즐겁게 먹으며 짧은 휴식 시간을 보냈다.']);
      }
      bourbon.name = undefined;
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙(클래식급) 종료';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (rice, urara, you, u_call_r) => {
      await era.printAndWait([
        '합숙 마지막 날, ',
        rice.get_colored_name(),
        '가 원한 덕분에 마지막까지 훈련이 이어졌다.',
      ]);
      await rice.say_and_wait('하아…… 하아…… 미안해, 늦어버렸어.');
      await urara.say_and_wait([
        '빨리빨리, ',
        u_call_r,
        '! 버스랑 친구들이 다 기다리고 있어!',
      ]);
      await rice.say_and_wait('으…… 응! 금방 갈게!');
      await rice.say_and_wait('다행이야, 너무 늦지 않았어.');
      await you.say_and_wait('모두가 기다려준 덕분이네.');
      await rice.say_and_wait('응! 모두에게 고맙다고 인사해야겠어—');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '조용한 선언';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await rice.say_and_wait([
        callname,
        '。',
        self_name,
        '、',
        self_name,
        '……！',
      ]);
      await you.say_and_wait(['라이스, 해냈구나']);
      await rice.say_and_wait('으…… 응……!');
      await rice.say_and_wait([
        self_name,
        ', 해냈어……! ',
        self_name,
        '도 할 수 있었어……!',
      ]);
      await bourbon.say_and_wait(['……', b_call_r]);
      await rice.say_and_wait(['와아앗! ', call_26, '！？']);
      await rice.say_and_wait('아, 으응. 이, 이번 레이스는……');
      await bourbon.say_and_wait('——네, 『따라잡았다』는 거군요');
      await rice.say_and_wait('……읏');
      await bourbon.say_and_wait('사실 이해할 수 없습니다');
      await bourbon.say_and_wait(['매번 『따라잡겠다』고 말하는 ', b_call_r]);
      await bourbon.say_and_wait('레이스에 있는 것은 승리, 아니면 패배입니다');
      await bourbon.say_and_wait(
        '『따라잡는다』는 개념은 존재하지 않습니다. 하지만——',
      );
      await bourbon.say_and_wait([
        '지금은 분합니다. 이번 ',
        kiku_sho,
        '에서 우승하지 못한 것, 이기지 못한 것이요',
      ]);
      await bourbon.say_and_wait('……따라잡히고 말았군요');
      await bourbon.say_and_wait([b_call_r, ', 들으셨습니까?']);
      await rice.say_and_wait('……응');
      await era.printAndWait('(환호——!!!)');
      await you.say_as_passer_by_and_wait(
        '관객 A',
        '정말 멋진 레이스였어! 라이스！',
      );
      await you.say_as_passer_by_and_wait(
        '관객 B',
        '네가 올해의 주인공이야! 내년에도 기대할게!!',
      );
      await rice.say_and_wait('……거짓말……');
      await rice.say_and_wait([self_name, '에게 박수를……?']);
      await rice.say_and_wait(['하지만 ', self_name, '는 그저……']);
      await bourbon.say_and_wait('아닙니다. 관객들은 인정하고 있습니다');
      await bourbon.say_and_wait([
        b_call_r,
        '은(는) 올해 클래식의 명실상부한 승자입니다',
      ]);
      await bourbon.say_and_wait('저 역시 그 견해에 동의합니다');
      await bourbon.say_and_wait([
        '다음에는 절대로 ',
        you.get_colored_name(),
        '에게 지지 않겠습니다',
      ]);
      await bourbon.say_and_wait('——『라이벌』로서');
      await rice.say_and_wait('……라이, 벌');
      await bourbon.say_and_wait([
        b_call_r,
        '. ',
        you.get_colored_name(),
        '은(는) 제 도전을 받아 주시겠습니까?',
      ]);
      await rice.say_and_wait(['……！', self_name, '……！']);
      await rice.say_and_wait([
        self_name,
        '도 지고 싶지 않아! 다음에도…… 모두에게 이길 거야!',
      ]);
      await era.printAndWait([
        '——',
        rice.get_colored_name(),
        '의 목소리가 전해졌다.',
      ]);
      await era.printAndWait('바로 옆에도, 경기장 끝까지도 닿았다.');
      await era.printAndWait('크고 또렷한 선언이었다.');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = '불타는 마음';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('앞으로 조금만 더 가면 됐는데');
      await rice.say_and_wait(
        '조금만 더 하면 따라잡을 수 있는데, 아직 부족해!',
      );
      await rice.say_and_wait([
        self_name,
        ', 지고 싶지 않아! 다음에는 꼭 이길 거야',
      ]);
    };
    f.title = title;
    return f;
  })(),
  sa_47_46: (() => {
    const title = '라이벌의 불행';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      you,
      callname,
      self_name,
      call_26,
      b_call_r,
      kiku_sho,
    ) => {
      await era.printAndWait([
        kiku_sho,
        ' 이후, ',
        rice.get_colored_name(),
        '의 주변에 작은 변화가 생겼다.',
      ]);
      await era.printAndWait([rice.uma_sex_title, 'A「아, 라이스쨩!」']);
      await rice.say_and_wait(['어…… 어!? ', self_name, ' 얘기……?']);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「그렇게 긴장하지 않아도 돼! 후후, 저번 ',
        kiku_sho,
        ', 굉장했어!」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'A「응, 응! 정말 감동했어!」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「맞아, 맞아! 그때 라이스 씨, 으…… 엄청 진지해서 멋있었어!」',
      ]);
      await rice.say_and_wait(['에에에? ', self_name, '가 멋지다니……']);
      await era.printAndWait(
        '그러니까 앞으로도 힘내! 우리도 라이스쨩을 응원할게',
      );
      await rice.say_and_wait('어!? 으…… 응!!');
      await you.say_and_wait('응원받는다니 정말 기쁘네');
      await rice.say_and_wait(['아, ', callname, '？']);
      await rice.say_and_wait([
        '그, 그렇지 않아…… ',
        call_26,
        '이(가) 너무 대단해서 인사하러 온 것뿐이야',
      ]);
      await rice.say_and_wait([
        kiku_sho,
        '의 박수도 ',
        call_26,
        '이(가) 있었기 때문에——',
      ]);
      await you.say_and_wait(['네가 ', rice.sex, '의 라이벌이기 때문이겠지']);
      await rice.say_and_wait([
        '우으…… 아, ',
        callname,
        '까지 너무 띄워 주네……',
      ]);
      await rice.say_and_wait('그래도 멋있다니…… 에헤헤……');
      era.drawLine();
      await era.printAndWait('——하지만 다음 날, 분위기는 완전히 달라졌다.');
      era.printButton(`「라이스？」`, 1);
      await era.input();
      await rice.say_and_wait('……가까이 오지 마!');
      await era.printAndWait([
        rice.uma_sex_title,
        'A「……라이스 씨, 역시…… 신경 쓰고 있네.」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「그야 당연하지. 나라도 싫을 거야.」',
      ]);
      await era.printAndWait([
        rice.uma_sex_title,
        'B「그 완벽한 부르봉 씨가 자기랑 달린 뒤에…… 뭐랄까……」',
      ]);
      await era.printAndWait('학원 건물 옆 그늘.');
      await rice.say_and_wait(['……읏…… 왜 ', self_name, ', 항상 이럴까?']);
      await rice.say_and_wait('언제나 주위에 불행을 가져오고, 폐만 끼쳐!');
      await you.say_and_wait('……라이스');
      await rice.say_and_wait([callname, '……！']);
      await rice.say_and_wait([
        '……안 돼! ',
        self_name,
        '에게 가까이 오면 불행해져',
      ]);
      await rice.say_and_wait([
        call_26,
        '은(는) 아무리 힘든 훈련을 해도…… 다친 적 없었잖아?',
      ]);
      await rice.say_and_wait([
        '그런데 전부 ',
        self_name,
        ' 탓이야…… ',
        self_name,
        '가 ',
        rice.sex,
        '의 라이벌이 됐으니까……',
      ]);
      await rice.say_and_wait('3년 중 가장 중요한 시기를 이렇게……');
      await you.say_and_wait('직접 들은 거야?');
      await rice.say_and_wait(['……듣지 않아도 ', self_name, '는 알고 있어']);
      await rice.say_and_wait(['왜냐하면…… ', self_name, '는……']);
      await you.say_and_wait('듣지는 않았구나');
      await rice.say_and_wait(['어!? ', callname, '？']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '을(를) 데리고 의무실에 있는 ',
        bourbon.get_colored_name(),
        '을(를) 찾아갔다.',
      ]);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait('……');
      era.printButton('「갑자기 찾아와서 미안해.」', 1);
      await era.input();
      await bourbon.say_and_wait(
        '괜찮습니다. 오늘은 다른 분들의 병문안에 익숙해졌습니다',
      );
      await bourbon.say_and_wait('그래서 이곳에 오신 목적은 무엇입니까?');
      await rice.say_and_wait('! ……죄, 죄송해요. 죄송해요…… 죄송해요……!');
      await rice.say_and_wait([
        '전부 ',
        self_name,
        ' 탓이에요…… 다치게 해서, 중요한 시기를 허비하게 했어요',
      ]);
      await bourbon.say_and_wait('실례하겠습니다');
      await bourbon.say_and_wait([
        '왜 사과하시는 겁니까? 제 부상과 ',
        b_call_r,
        ' 사이의 인과관계는 추론할 수 없습니다',
      ]);
      await rice.say_and_wait([
        '하지만…… ',
        self_name,
        '가 라이벌이 되기 전에는 다친 적 없었잖아요!',
      ]);
      await bourbon.say_and_wait(
        '이해 불가. 부상 발생률은 일정합니다. 그 이론에는 물리적 근거가 없다고 판단합니다',
      );
      await bourbon.say_and_wait(
        '오히려 당신이 불행을 부른다고 주장한다면, 검증해야 할 사람은 저입니다',
      );
      await rice.say_and_wait(['', call_26, '이(가)……?']);
      await bourbon.say_and_wait('네. 저는 당신을 라이벌로 인정했습니다');
      await bourbon.say_and_wait([
        '그것은 ',
        kiku_sho,
        '에서 성장 가능성을 느끼고 기대했기 때문입니다',
      ]);
      await bourbon.say_and_wait(
        '당신이라는 라이벌이 있으면 더욱 크게 성장할 수 있습니다',
      );
      await bourbon.say_and_wait(
        '그리고 함께 달리면 역사상 최고의 레이스——『기적』에 이를 가능성이 있습니다',
      );
      await bourbon.say_and_wait(['제 불행은 ', b_call_r, '와(과) 무관합니다']);
      await rice.say_and_wait('……');
      await bourbon.say_and_wait([
        b_call_r,
        '은(는) 저를 불행하게 하는 존재입니까? 아니면 기적을 부르는 존재입니까?',
      ]);
      await rice.say_and_wait('……저기……');
      await era.printAndWait([
        '——오랫동안 ',
        rice.get_colored_name(),
        '은(는) 아무 말 없이 ',
        bourbon.get_colored_name(),
        '의 시선을 받아들이고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 첫 참배';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (rice, you, callname, self_name, tenn_spr) => {
      await era.printAndWait([
        '새해 첫날, ',
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '의 초대를 받아 함께 새해 참배를 하러 갔다.',
      ]);
      await rice.say_and_wait([
        callname,
        ', ',
        self_name,
        '는 정해둔 소원이 하나 있어.',
      ]);
      await rice.say_and_wait([
        '그래서 ',
        callname,
        '가 들어줬으면 좋겠는데, 그래도 될까?',
      ]);
      await you.say_and_wait('신님께 비는 게 아니라 나한테 말해주는 거야?');
      await rice.say_and_wait([
        '응! 이 소원은 ',
        callname,
        '에게 말하지 않으면 안 되는 거니까.',
      ]);
      await rice.say_and_wait([
        self_name,
        ', 다음 ',
        tenn_spr,
        '에 나가고 싶어.',
      ]);
      await you.say_and_wait('어째서?');
      await rice.say_and_wait('……그건, 더 강해지고 싶으니까.');
      await rice.say_and_wait('계속 앞으로 나아가지 않으면 안 돼.');
      await rice.say_and_wait('더 이상은…… 무서워하지 않기로 했으니까.');
      await you.say_and_wait('대단한 각오를 했구나.');
      await rice.say_and_wait([
        self_name,
        '는 깨달았어. 생각만 해서는 안 된다는 걸.',
      ]);
      await rice.say_and_wait(
        '눈앞에 있는 분이 슬퍼하지 않도록…… 먼저 행동해야만 한다는 걸…… 알았어.',
      );
      await era.printAndWait([
        rice.get_colored_name(),
        '는 새해를 맞이해 새로운 목표를 세웠다.',
      ]);
      await era.printAndWait([
        rice.sex,
        '의 이 의욕에 보답하기 위해, ',
        you.get_colored_name(),
        '과(와) ',
        rice.get_colored_name(),
        '는 신춘 휘호를 종이에 적었다.',
      ]);
      await rice.say_and_wait(['신님, ', self_name, '는 열심히 할게요.']);
      await rice.say_and_wait([
        callname,
        '랑 함께 참배하러 올 수 있어서 정말 다행이야!',
      ]);
      await rice.say_and_wait(['후후, 다음은 ', callname, ' 차례네.']);
      await rice.say_and_wait([
        self_name,
        '도 같이 기도할게. 신님이 소원을 꼭 들어주시기를……',
      ]);
      era.print([you.get_colored_name(), '의 소원은……']);
      era.printButton(
        `「라이스이(가) 언제나 건강하기를.」(스태미나+20, 호감+5)`,
        1,
      );
      era.printButton(
        `「언제까지나 라이스의 달리기를 뒷받침할 수 있기를.」(모든 능력+5, 연모+2)`,
        2,
      );
      era.printButton('「힘이 필요해……!」（스킬 포인트+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await rice.say_and_wait('！');
          await rice.say_and_wait([
            '헤헤, 알겠어. ',
            self_name,
            ', ',
            callname,
            '에게 걱정 끼치지 않도록 조심할게.',
          ]);
          await era.printAndWait([
            '새해 참배 노점에서 영양 보충을 마친 뒤, ',
            you.get_colored_name(),
            '과(와) ',
            rice.get_colored_name(),
            '는 바로 트레이닝을 시작했다.',
          ]);
          break;
        case 2:
          await rice.say_and_wait([
            '후훗, 그렇게 상냥하게 말해 주면 ',
            self_name,
            ', 부끄러워져서 어쩔 줄 모르겠어.',
          ]);
          await rice.say_and_wait([
            '정말이지, 울고 있을 시간 같은 건 없네. ',
            self_name,
            '도 열심히 힘내야겠어……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            rice.get_colored_name(),
            '는 조용히 서로를 응시한 뒤, 훈련에 돌입했다.',
          ]);
          break;
        case 3:
          await rice.say_and_wait('힘이라니…… 그게, 저기……');
          await rice.say_and_wait([self_name, '도 도와줄 수 있을까?']);
          await rice.say_and_wait(
            '그게, 근력 트레이닝이라든가, 같이 달리기라든가……',
          );
          await you.say_and_wait('그런 뜻이 아니었어.');
          await rice.say_and_wait('호에?');
          await rice.say_and_wait([
            '하지만 정말로 ',
            self_name,
            '가 도와줄 수 있는 일이 있다면 꼭 말해줘.',
          ]);
          await rice.say_and_wait([
            self_name,
            '는 ',
            callname,
            '를 위해서라면 어떤 일이라도…… 도와줄 거니까.',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            '은(는) ',
            rice.get_colored_name(),
            '의 사려 깊은 마음씨를 느끼며 학원으로 돌아왔다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '밸런타인데이';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '오늘도 ',
        you.get_colored_name(),
        '은(는) 평소처럼 트레이닝실에서 업무를 보고 있었다……',
      ]);
      await rice.say_and_wait('……저, 저기, 이거……');
      await rice.say_and_wait([callname, ', 초콜릿 좋아해? 받으면 기쁠까?']);
      await era.printAndWait('「초콜릿」이라는 말을 듣고 나서야 떠올랐다.');
      await era.printAndWait('……그러고 보니 오늘은 발렌타인데이였다.');
      await you.say_and_wait('기쁘게 받을 거야.');
      await rice.say_and_wait('정말! 그렇다면……');
      await era.printAndWait([
        '그 말을 남기고 ',
        rice.get_colored_name(),
        '는 달려나갔다.',
      ]);
      era.drawLine({ content: '잠시 후' });
      await era.printAndWait('쿵!!', { fontSize: '1.875rem' });
      await era.printAndWait([
        '……책상 위에 산더미처럼 ',
        rice.get_colored_name(),
        '가 가져온 초콜릿이 쌓였다.',
      ]);
      await rice.say_and_wait(
        '……많이 준비했어. 단것부터 쌉쌀한 것, 견과류가 든 것과 딸기가 든 것까지.',
      );
      await rice.say_and_wait(['——그러니까 하나 골라봐, ', callname, '！']);
      await you.say_and_wait('고르라고?');
      await rice.say_and_wait('응. 싫어하는 맛을 먹게 하고 싶지 않아서.');
      await rice.say_and_wait('그래서 여러 종류를 만들었어. 분명……');
      await rice.say_and_wait([
        '이 중에 ',
        callname,
        '가 좋아하는 맛이 하나쯤은 있을 거라고 생각해서.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 입맛에 맞추기 위해 여러 종류의 초콜릿을 직접 만든 모양이다.',
      ]);
      await rice.say_and_wait('엣…… 왜 그래?');
      await rice.say_and_wait('설마 이 중에 좋아하는 게 없어?');
      await you.say_and_wait('전부 다 받아도 될까?');
      await rice.say_and_wait('엣!? 배탈 날 텐데!?');
      await you.say_and_wait('괜찮아.');
      await rice.say_and_wait('정말…… 괜찮겠어……?');
      await era.printAndWait([
        rice.get_colored_name(),
        '는 걱정스러운 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await you.say_and_wait([self_name, '의 마음을 전부 다 받고 싶으니까.']);
      await rice.say_and_wait('……으읏!');
      await rice.say_and_wait('왠지 기뻐……');
      await rice.say_and_wait(
        '하지만 그러면 초콜릿을 더 많이 만드는 게 좋았을까.',
      );
      await rice.say_and_wait([
        callname,
        '를 향한 마음은 고작 이 정도로는 부족하거든.',
      ]);
      await era.printAndWait([
        '그 후 ',
        you.get_colored_name(),
        '과(와) ',
        rice.get_colored_name(),
        '는 달콤한 발렌타인 데이를 보냈다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nikk_sho_end: (() => {
    const title = '꽃잎이 흩날리다';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     */
    const f = async (rice, zob_zoy, you, callname, self_name, z_call_r) => {
      await rice.say_and_wait(['에헤헤…… 어땠어, ', callname]);
      await rice.say_and_wait([self_name, '의 달리기, 제대로 성장하고 있어?']);
      await you.say_and_wait('응, 정말 좋은 달리기였어!');
      await rice.say_and_wait('응! 그럼 다음에도……');
      await zob_zoy.say_and_wait('……수, 수고하셨습니다!');
      await rice.say_and_wait('！');
      await zob_zoy.say_and_wait([
        '오, 오늘은…… 저 혼자 이곳에 ',
        z_call_r,
        '을(를) 응원하러 왔어요',
      ]);
      await rice.say_and_wait('아! 고마워! 저기, 오늘은……');
      await zob_zoy.say_and_wait('훌륭한 달리기였어요!');
      await zob_zoy.say_and_wait(
        '하나의 목표를 향해 곧게 나아가는…… 그 모습은 백성을 이끄는 주인공 같았어요!',
      );
      await zob_zoy.say_and_wait('언젠가 후대의 책에 기록될 거예요……!');
      await rice.say_and_wait('우아아…… 너무 칭찬해 주는 거 아니야……?');
      await zob_zoy.say_and_wait('아, 죄송해요…… 저도 모르게……');
      await rice.say_and_wait('아니야, 미안해. 그래도 고마워');
      await rice.say_and_wait([
        '조금 부끄럽기는 하지만…… ',
        self_name,
        ', 기뻐',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      z_call_r,
      u_call_r,
    ) => {
      await era.printAndWait('트레이닝 코스에서');
      await era.printAndWait(
        '이날은 학원을 일반인에게도 개방하여 다양한 행사를 개최한다.',
      );
      await rice.say_and_wait('으으…… 설마 마라톤에 참가하게 될 줄이야!');
      await urara.say_and_wait([
        '괜찮아! ',
        u_call_r,
        '이라면 분명 씩씩하게 완주할 수 있을 거야.',
      ]);
      await zob_zoy.say_and_wait([
        '네. ',
        z_call_r,
        '라면 절대 절대 완주할 수 있으니까요!',
      ]);
      await rice.say_and_wait('아, 아니야. 저기, 그런 문제가 아니라……!');
      era.drawLine();
      await era.printAndWait([
        '결국 ',
        mcqueen.get_colored_name(),
        '이 멋지게 1위로 골인했다.',
      ]);
      await era.printAndWait([
        '기대를 모았던 ',
        rice.get_colored_name(),
        '는…… 끈질기게 뒤를 쫓았으나 2위에 머물렀다.',
      ]);
      await zob_zoy.say_and_wait([z_call_r, ', 수고했어요!']);
      await urara.say_and_wait([
        '응응, ',
        u_call_r,
        '은 정말 대단해! 2등 했으니까 같이 축하하러 가자!',
      ]);
      await rice.say_and_wait('고, 고마워…… 하지만……');
      await rice.say_and_wait(['지금 ', self_name, '는 도저히……']);
      await bourbon.say_and_wait('……');
      await rice.say_and_wait('……미안해, 축하는 사양할게.');
      await rice.say_and_wait('다음번엔 꼭 너희들의 기대에 보답할게……!');
      await urara.say_and_wait(['엣, 잠깐만, ', u_call_r, '！']);
      await bourbon.say_and_wait('……');
      era.drawLine({ content: '밤' });
      await era.printAndWait([
        rice.get_colored_name(),
        '는 홀로 트레이닝 코스에서 자율 트레이닝을 하고 있었다.',
      ]);
      await rice.say_and_wait('……더 노력해야 해.');
    };
    f.title = title;
    return f;
  })(),
  we_95_14: (() => {
    const title = '혼자서는 피어날 수 없으니까';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} call_47 ライスのロブロイへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} callname_47 ロブロイのプレイヤーへの呼び方
     * @param {PrintedSpan} z_call_r ロブロイのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      rice,
      bourbon,
      zob_zoy,
      you,
      callname,
      self_name,
      call_26,
      call_47,
      b_call_r,
      callname_47,
      z_call_r,
      tenn_spr,
    ) => {
      await era.printAndWait('트레이너실 안');
      await era.printAndWait('……똑똑');
      await era.printAndWait('작은 노크 소리가 들린다.');
      await zob_zoy.say_as_unknown_and_wait([
        '실례하겠습니다…… 저기, ',
        zob_zoy.get_colored_name(),
        '입니다',
      ]);
      await zob_zoy.say_and_wait([z_call_r, '을(를) 보지 못하셨나요?']);
      await zob_zoy.say_and_wait([
        '사실 ',
        rice.sex,
        '가 아직 기숙사에 돌아오지 않아서요. 점호 시간인데……',
      ]);
      await you.say_and_wait('——설마', true);
      era.drawLine({ content: '트레이닝장' });
      await rice.say_and_wait('하아…… 하아…… 하아……!');
      await you.say_and_wait('라이스！');
      await rice.say_and_wait(['어. ', callname, ', 그리고…… ', call_47, '？']);
      await rice.say_and_wait('……');
      await you.say_and_wait('너무 무리하고 있어');
      await rice.say_and_wait('미안해, 하지만……');
      await rice.say_and_wait('……');
      await rice.say_and_wait('응, 미안해. 제대로 쉴게');
      await zob_zoy.say_and_wait('……');
      await zob_zoy.say_and_wait(['저기, ', z_call_r, '！']);
      await zob_zoy.say_and_wait([
        z_call_r,
        '에게 ',
        callname,
        '은(는) 어떤 존재인가요?',
      ]);
      await zob_zoy.say_and_wait(
        '그…… 언제나 다정하고, 그림책에서 나온 운명의 상대 같은 분이라면서요',
      );
      await rice.say_and_wait(['으아아아!? ', call_47, '? 조…… 조용……']);
      await zob_zoy.say_and_wait(
        '아직 조용히 있을 수는 없어요. 게다가 저도 응원하고 있는걸요',
      );
      await rice.say_and_wait([call_47, '……']);
      await zob_zoy.say_and_wait(
        '어려운 일이 있다면…… 다 같이 이야기해야 한다고 생각해요',
      );
      await rice.say_and_wait('……');
      await you.say_and_wait('어떻게 생각해, 라이스？');
      await rice.say_and_wait('……하지만 무서워……');
      await rice.say_and_wait('의지할 사람이 있다는 건 알고 있어……');
      await rice.say_and_wait([
        '모처럼 ',
        self_name,
        '에게 기대해 주는데, ',
        self_name,
        '는 못 해낼지도 몰라',
      ]);
      await rice.say_and_wait([
        self_name,
        '는 이제 ',
        callname,
        '을(를) 실망시키고 싶지 않은데……',
      ]);
      await era.printAndWait([
        '말을 마치자 ',
        rice.teen_sex_title,
        '은(는) 작은 소리로 울기 시작했다.',
      ]);
      await you.say_and_wait('그런 생각 하지 마');
      await zob_zoy.say_and_wait([
        '맞아요! 저도! ',
        z_call_r,
        '에게 실망 같은 건 하지 않아요!',
      ]);
      await zob_zoy.say_and_wait([
        z_call_r,
        '을(를) 응원하는 모두도 분명 같은 마음일 거예요',
      ]);
      await you.say_and_wait('그러니까 혼자 무리하지 마');
      await rice.say_and_wait([callname, '……흑…… 으……']);
      await rice.say_and_wait('으아앙~~!');
      await era.printAndWait([
        rice.get_colored_name(),
        '의 눈에서 굵은 눈물이 둑이 터진 듯 흘러내렸다.',
      ]);
      era.drawLine({ content: '다음 날' });
      await zob_zoy.say_and_wait(['아, ', z_call_r, '! 힘내세요']);
      await rice.say_and_wait('……으, 으으…… 정말 괜찮을까요?');
      await zob_zoy.say_and_wait('괘, 괜찮아요!');
      await zob_zoy.say_and_wait([
        '봐요, ',
        callname_47,
        '도 ',
        z_call_r,
        '을(를) 응원하러 와 주셨잖아요',
      ]);
      await rice.say_and_wait('응');
      await bourbon.say_and_wait('그럼 이동을 시작해도 되겠습니까?');
      await rice.say_and_wait(['아! 미안해요! ', call_26, '……그, 저기……!']);
      await rice.say_and_wait(['부탁이에요, ', self_name, '를 도와주세요!']);
      await bourbon.say_and_wait('……? 의사소통에 오류가 발생했습니까?');
      await rice.say_and_wait([
        '아니에요! 왜냐하면 ',
        call_26,
        '(이)라면 분명 힘이 되어 줄 테니까요!',
      ]);
      await rice.say_and_wait('들으면 실망할지도 모르지만……');
      await rice.say_and_wait([
        self_name,
        '는 지금 ',
        call_26,
        '의 도움이 없으면 안 돼요!',
      ]);
      await rice.say_and_wait([
        '지금의 ',
        self_name,
        '는 아직 약하니까요. 이대로는……',
      ]);
      await rice.say_and_wait('이길 수 없어요!');
      await rice.say_and_wait([
        '그러니까 ',
        call_26,
        '가 ',
        self_name,
        '에게 달리는 법을 가르쳐 주셨으면 해요!',
      ]);
      await rice.say_and_wait([
        self_name,
        '에게 없는 것을 전부 가르쳐 주세요!',
      ]);
      await bourbon.say_and_wait('……');
      await you.say_and_wait(['라이스이(가) 기적을 일으킬 거라고 믿어 줘']);
      await bourbon.say_and_wait('알겠습니다');
      await bourbon.say_and_wait(
        '그것이 역사상 최고의 레이스를 만들기 위해 필요한 과정이라면',
      );
      await bourbon.say_and_wait('신청을 수락합니다. 일정을 변경하겠습니다');
      await bourbon.say_and_wait([
        '오후부터 첫 단계로 ',
        self_name,
        '의 언덕 달리기 10회에 참가하겠습니다',
      ]);
      await bourbon.say_and_wait('목적은 근력과 스피드 향상입니다');
      await bourbon.say_and_wait(
        '부하가 필요하다면 특제 중량 주머니를 빌려드릴 수 있습니다',
      );
      await bourbon.say_and_wait(
        '참고로 제 트레이닝을 『귀신』이라 부르는 사람들도 있습니다——',
      );
      await bourbon.say_and_wait(['준비되셨습니까, ', b_call_r]);
      await rice.say_and_wait('……네!');
      await era.printAndWait([
        '그 후 ',
        rice.couple_title,
        '은 달리기 시작했다. 다가오는 ',
        tenn_spr,
        '을(를) 향해——!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '빛을 받으며';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_52 ライスのウララへの呼び方
     * @param {PrintedSpan} m_call_r マックイーンのライスへの呼び方
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} b_call_z ブルボンのロブロイへの呼び方
     * @param {PrintedSpan} z_call_b ロブロイのブルボンへの呼び方
     * @param {PrintedSpan} u_call_r ウララのライスへの呼び方
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      zob_zoy,
      urara,
      you,
      callname,
      self_name,
      call_13,
      call_52,
      m_call_r,
      b_call_r,
      b_call_z,
      z_call_b,
      u_call_r,
      tenn_spr,
      takz_kin,
    ) => {
      await rice.say_and_wait('하…… 아, 하아……!!');
      await you.say_and_wait('정말 잘했어!');
      await rice.say_and_wait(['응! 해냈어! ', self_name, '——']);
      await urara.say_and_wait([u_call_r, '! 대——단해!!']);
      await rice.say_and_wait([call_52, '！？']);
      await urara.say_and_wait('에헤헤~ 왔어~');
      await zob_zoy.say_and_wait('아니에요! 돌아와 주세요! 이쪽이에요!');
      await zob_zoy.say_and_wait('우승자의 관계자로서 온 건데요……');
      await bourbon.say_and_wait([
        '저라도 문제없을 겁니다. 저희는 ',
        b_call_r,
        '의 관계자입니다',
      ]);
      await bourbon.say_and_wait([
        '훌륭한 달리기였습니다, ',
        b_call_r,
        '. 우선 축하드립니다',
      ]);
      await bourbon.say_and_wait([
        '레이스 중의 당신은 ',
        b_call_z,
        '이(가) 붙인 별명, 『집념의 귀신』에 걸맞았습니다',
      ]);
      await rice.say_and_wait('……집념의 귀신?');
      await zob_zoy.say_and_wait(['와, 와! ', z_call_b, '！！']);
      await zob_zoy.say_and_wait('그 별명은 비밀로 하자고 했잖아요!');
      await rice.say_and_wait('……후후');
      await rice.say_and_wait([
        '에헤헤…… ',
        self_name,
        ', 모두에게 제대로 보답했어. 레이스로',
      ]);
      await you.say_and_wait('모두를 웃게 해 줬네');
      await rice.say_and_wait('응!');
      await urara.say_and_wait([
        '아하하, ',
        u_call_r,
        '도 방긋방긋 웃고 있어!',
      ]);
      await urara.say_and_wait('다음 레이스에서도 웃는 거야!');
      await urara.say_and_wait([
        '우라라랑 친구들도 열심히 손을 흔들면서 ',
        u_call_r,
        '을(를) 응원할 테니까!',
      ]);
      await rice.say_and_wait(['……그러네, ', call_52]);
      await rice.say_and_wait('라이스도 모두에게…… 손을 흔들게');
      await rice.say_and_wait('크게…… 모두에게 보이도록!');
      era.drawLine({ content: '무대 뒤' });
      await rice.say_and_wait('……그렇게 말은 했지만 역시 긴장돼……');
      await rice.say_and_wait([tenn_spr, '의 위닝 라이브에서 센터라니……']);
      await you.say_and_wait('가슴을 펴');
      await mcqueen.say_and_wait([
        '맞아요. ',
        m_call_r,
        '은(는) 저를 이겼으니 좀 더 자신감을 가지세요',
      ]);
      await rice.say_and_wait(['아, ', call_13, '！！']);
      await mcqueen.say_and_wait('확실히 이 무대는 특별해요');
      await mcqueen.say_and_wait(
        '그렇기에 무대에 서는 저희에게는 프로로서의 자각이 필요해요',
      );
      await mcqueen.say_and_wait(
        '기대를 품고 찾아와 주신 분들께 감사를 전해야 하지 않겠어요?',
      );
      await rice.say_and_wait('그래요');
      await mcqueen.say_and_wait('그러니 무대를 두려워하지 마세요');
      await mcqueen.say_and_wait('기대와 마음에 보답하며 무대에서 빛나세요');
      await mcqueen.say_and_wait('그것이 코스를 달리는 저희의 의무랍니다');
      await era.printAndWait([
        '그 후 ',
        mcqueen.get_colored_name(),
        '은(는) 우아하고 고귀하게 무대로 향했다.',
      ]);
      await you.say_and_wait('많은 걸 배웠네');
      await rice.say_and_wait('응, 역시 멋진 사람이야');
      await rice.say_and_wait([self_name, '도 기대와 마음에 보답해야지']);
      await rice.say_and_wait('모두를 향한 감사의 마음을 담아서');
      await rice.say_and_wait(['……좋아! ', self_name, ', 다녀올게!!']);
      await era.printAndWait([
        rice.get_colored_name(),
        '은(는) 빛나는 무대를 향해 ',
        rice.sex,
        '의 한 걸음을 내디뎠다.',
      ]);
      era.drawLine({ content: '그날 밤' });
      await rice.say_and_wait(
        '저기…… 돌아오자마자 이런 말을 하면 이상할지도 모르지만……',
      );
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        '는 다음에 하고 싶은 게 있어',
      ]);
      await rice.say_and_wait([
        self_name,
        '는 기대해 주는 사람들에게 더 많이 보답하고 싶어',
      ]);
      await rice.say_and_wait([
        '그러니까 다음에는 ',
        takz_kin,
        '에 나가고 싶어',
      ]);
      await rice.say_and_wait([
        '모두가 ',
        self_name,
        '라도 괜찮다고 해 준다면……!',
      ]);
      await era.printAndWait([
        '——',
        takz_kin,
        '. 팬들의 사랑을 받은 ',
        rice.uma_sex_title,
        '만이 설 수 있는 무대다.',
      ]);
      await era.printAndWait([
        '……처음에는 학원 밖에서 혼자 울고 있던 ',
        rice.sex,
        '。',
      ]);
      await era.printAndWait('이제는 그 자격을 갖추고 있다.');
      await you.say_and_wait(['다음은 ', takz_kin, '이구나!']);
      await rice.say_and_wait(['응! ', self_name, ', 앞으로도 힘낼게']);
      await rice.say_and_wait('그리고 모두에게 전할 거야——');
      await rice.say_and_wait('감사합니다');
    };
    f.title = title;
    return f;
  })(),
  os_95_21: (() => {
    const title = '만에 하나의 실책';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} m_call_r たづなのライスへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      you,
      callname,
      self_name,
      m_call_r,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, ' 출주를 목표로 정한 뒤……']);
      await era.printAndWait(
        '행인B「내 팬 투표, 너에게 던졌어! 반드시 1등 해야 해!」',
      );
      await rice.say_and_wait('와아!? 으…… 응원해 주셔서 감사합니다!');
      await era.printAndWait([
        '상점가 주인「아, 설마 자네는…… ',
        rice.get_colored_name(),
        '인가?」',
      ]);
      await rice.say_and_wait('네! 저기, 네 맞아요……');
      await era.printAndWait(
        '상점가 주인「뭐야! 꼭 우리 집 고로케를 먹고 가게!」',
      );
      await era.printAndWait('상점가 주인「우리 집 아이가 자네 팬이라네.」');
      await rice.say_and_wait('에!? 그래도 괜찮나요?');
      era.drawLine();
      await rice.say_and_wait(
        '에헤헤…… 기쁜 일이 이렇게나 많이 생기다니, 정말 괜찮은 걸까?',
      );
      await you.say_and_wait('그 응원만큼 더 노력해야겠네.');
      await rice.say_and_wait('맞는 말이야……');
      await minoru.say_and_wait('아, 두 분 다 여기 계셨군요!');
      await you.say_and_wait('무슨 일입니까?');
      await minoru.say_and_wait('사실은 말이죠!');
      await minoru.say_and_wait('방금 한신 경기장에서 소식이 들려왔는데……!!');
      await minoru.say_and_wait([
        '【팬 인기 투표】에서, ',
        m_call_r,
        '가 압도적인 차이로 1위예요!',
      ]);
      await minoru.say_and_wait('개막식에 참석해 주셨으면 합니다!');
      await rice.say_and_wait('에에에에에?');
      await minoru.say_and_wait('그래서 내일 리허설을 진행할 예정이에요.');
      await rice.say_and_wait([
        '……와아. ',
        self_name,
        '가…… 인기 1위? 개막, 식요?',
      ]);
      await minoru.say_and_wait(
        '아하하…… 죄송해요. 저도 조금 너무 흥분했나 봐요.',
      );
      await minoru.say_and_wait(
        '상세 내용은 서류로 정리해 두었으니, 나중에 확인하시고 의논해 보세요.',
      );
      await minoru.say_and_wait('그럼, 이만 실례하겠습니다.');
      await era.printAndWait([minoru.get_colored_name(), '가 떠난 뒤……']);
      await rice.say_and_wait(['……대단해, ', self_name, '는, 모두의……']);
      await you.say_and_wait('리허설하러 가자.');
      await rice.say_and_wait('응!');
      await era.printAndWait([
        '다음 날, 당신은 ',
        rice.get_colored_name(),
        '와 함께 한신 경기장으로 향했다.',
      ]);
      await era.printAndWait([
        '스태프A「',
        rice.get_colored_name(),
        ' 씨! 다음은 꽃다발을 증정할 때 서 있을 위치입니다——」',
      ]);
      await rice.say_and_wait('네, 네!');
      await era.printAndWait(
        '스태프B「아, 그게 끝나면 저희도 부탁드리고 싶은 게 하나 있어서——」',
      );
      await rice.say_and_wait('우와…… 알겠습니다~! 귀 기울여 들을게요!');
      await era.printAndWait('이런저런 리허설이 일단락된 후……');
      await rice.say_and_wait('후아……');
      await you.say_and_wait('잠시 쉬자.');
      await rice.say_and_wait('에헤헤, 괜찮아. 왜냐하면……');
      await era.printAndWait([
        '스태프C「죄송합니다, ',
        rice.get_colored_name(),
        ' 씨! 마이크 조정을 한 번 더 부탁드리고 싶어서요……」',
      ]);
      await rice.say_and_wait('네! 지, 지금 갈게요!');
      await rice.say_and_wait(
        '……끝까지 해내고 싶어. 모두가 미소 지을 수 있게 만들고 싶어.',
      );
      era.drawLine({ content: '등장 무대' });
      await rice.say_and_wait([
        '그럼, 여러분…… 부디 ',
        self_name,
        '를 많이 응원해 주세요!!',
      ]);
      await era.printAndWait('스태프A「당연하죠, 문제없습니다!!」');
      await era.printAndWait('그럼 오늘 리허설은 여기까지 하겠습니다!');
      await rice.say_and_wait('후…… 드디어, 끝났……네.');
      await you.say_and_wait('괜찮아?');
      await rice.say_and_wait('응, 괜찮아.');
      await rice.say_and_wait('처음이라 아직 서툰 게 많지만.');
      await rice.say_and_wait('진짜 개막일이 되어서, 모두가 이곳에 모였을 때.');
      await rice.say_and_wait('그때는 잘 해낼 수 있을 것 같아.');
      await rice.say_and_wait('전혀 힘들지 않아.');
      await rice.say_and_wait('더, 더…… 더 열심히 하고 싶어.');
      await era.printAndWait([
        '스태프B「아, ',
        rice.get_colored_name(),
        ' 씨! 물건을 떨어뜨리신 것 같아요——」',
      ]);
      await rice.say_and_wait('에!? 죄송해요! 지금 가지러 갈게요!');
      await rice.say_and_wait('꺄악!?');
      await era.printAndWait('콰르릉…… 우드득…… 쾅——!');
      await era.printAndWait([
        '스태프C「어떻게 된 거야!? 문이 쓰러진다——',
        rice.get_colored_name(),
        '씨, 위ㅎ——」',
      ]);
      await era.printAndWait([
        '절체절명의 순간, ',
        you.get_colored_name(),
        '은(는) 가까스로 ',
        rice.get_colored_name(),
        '를 끌어안았다.',
      ]);
      await you.say_and_wait('괜찮아?');
      await era.printAndWait('쾅!', { fontSize: '2.5rem' });
      await rice.say_and_wait([
        callname.substring(0, 1),
        '、',
        callname,
        '！？',
      ]);
      era.drawLine();
      await rice.say_and_wait(['우…… 으…… ', callname, '……']);
      await you.say_and_wait('여기 있어.');
      await rice.say_and_wait([
        '아, ',
        callname,
        '！',
        callname,
        '!! 괜찮아!? 어디 아픈 데는 없어?',
      ]);
      await era.printAndWait([
        '……보아하니 ',
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '를 보호하려다 머리를 부딪힌 모양이었다.',
      ]);
      await you.say_and_wait('이제 괜찮은 것 같아.');
      await rice.say_and_wait('정, 정말? 하…… 하지만 역시 병원에——');
      await era.printAndWait('스태프A「아, 다행이다, 정신이 드셨군요!」');
      await era.printAndWait('스태프A「곧 구급차도 올 겁니다.」');
      await you.say_and_wait('고맙습니다.');
      await era.printAndWait(
        '스태프A「아니요! 저희야말로 정말 죄송합니다. 갑자기 상황이 나빠져서……」',
      );
      await era.printAndWait(
        '스태프A「정말로 죄송합니다, 저희가 병원까지 모시겠습니다.」',
      );
      era.drawLine({ content: '병원 검사 후' });
      await era.printAndWait(
        '스태프A「……그렇습니까. 검사 결과 이상은 발견되지 않았다고요——」',
      );
      await you.say_and_wait('걱정 끼쳐드려 죄송합니다.');
      await era.printAndWait('스태프A「아닙니다! 이건 저희의 실수라……」');
      await era.printAndWait(
        '스태프A「게다가…… 저희가 사과드려야 할 일이 또 있습니다.」',
      );
      await rice.say_and_wait('하지…… 하지만 여러분은 이미 충분히……');
      await era.printAndWait([
        '스태프A「——이번 개막식, 그리고 ',
        takz_kin,
        ' 말입니다.」',
      ]);
      await era.printAndWait(
        '스태프A「한신 경기장에서의 개최가 연기될 것이라는 소식이 들어왔습니다.」',
      );
      await rice.say_and_wait('……！');
      await you.say_and_wait('그게 무슨 소립니까?');
      await era.printAndWait(
        '스태프A「사실…… 이번 경기장 내 사고의 원인을 아직 알 수 없습니다.」',
      );
      await era.printAndWait(
        '스태프A「거기에 부상자까지 발생했죠. 이렇게 되면 경기장 전체를 정밀 점검할 필요가 있습니다.」',
      );
      await era.printAndWait(
        '스태프A「점검과 수리를 포함하면, 최소 3주 이상의 시간이 소요될 것으로 보입니다.」',
      );
      await rice.say_and_wait([
        '그렇게 되면, ',
        takz_kin,
        ' 일정에 맞출 수 없겠네요……',
      ]);
      await era.printAndWait(
        '스태프A「네. 이런 일이 생기지 않도록 저희도 매일 노력해 왔습니다만……」',
      );
      await era.printAndWait(
        '스태프A「지금까지 단 한 번도 없었던 사례입니다……」',
      );
      await era.printAndWait([
        '스태프A「두 분과 ',
        takz_kin,
        '을 기다려 주신 분들께 정말 면목이 없습니다!」',
      ]);
      await rice.say_and_wait([
        '지금까지 한 번도 없었는데, ',
        self_name,
        '가 오자마자 갑자기……',
      ]);
      await rice.say_and_wait('……');
      await era.printAndWait(
        [rice.get_colored_name(), '「설마, ', self_name, ' 때문인 걸까?」'],
        {
          color: rice.color,
          fontSize: '0.75rem',
        },
      );
      await era.printAndWait(
        '그 작은 목소리가 어째서인지 유독 크게 울려 퍼졌다——',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_24: (() => {
    const title = '꺾이지 않는 장미';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} t_call_m 秋川のたづなへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (
      rice,
      minoru,
      taste,
      you,
      callname,
      self_name,
      t_call_m,
      takz_kin,
    ) => {
      await era.printAndWait([takz_kin, '의 개최는 거의 절망적——']);
      await era.printAndWait('그런 분위기가 곳곳에 감돌고 있었다.');
      await rice.say_and_wait('……');
      await rice.say_and_wait(['괜찮아, ', callname]);
      await rice.say_and_wait([self_name, ', 괜찮아']);
      await era.printAndWait([
        '……그렇게 말하면서도 ',
        rice.sex,
        '의 미소에는 힘이 없다.',
      ]);
      await era.printAndWait('역시 그 일 때문에——');
      await rice.say_and_wait(['미, 미안, ', callname, '！']);
      await era.printAndWait([
        rice.get_colored_name(),
        '은(는) 메시지 한 통을 확인하더니 트레이너실을 뛰쳐나갔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뒤따라잡으려고 계단을 뛰어올랐다.',
      ]);
      await era.printAndWait([
        '이윽고 ',
        rice.get_colored_name(),
        '의 목소리가 들리는 곳에 도착했다.',
      ]);
      await taste.say_and_wait('침착! 하나씩, 천천히 말하게……');
      await rice.say_and_wait([
        self_name,
        ', 한신 직원분들께도! 교토 직원분들께도 부탁했어요!',
      ]);
      await rice.say_and_wait(['그러니까——', takz_kin, '을(를) 열어 주세요!']);
      await you.say_and_wait('라이스！？');
      await taste.say_and_wait([
        '경악!? ',
        you.actual_name,
        ' 트레이너도 왔나!!',
      ]);
      await rice.say_and_wait(['어!? ', callname, '？']);
      await you.say_and_wait('도대체 무슨 일이야?');
      await rice.say_and_wait(['……', self_name, ', 이사장님께 부탁하러 왔어']);
      await rice.say_and_wait([
        '……',
        takz_kin,
        '을(를) 교토 경기장에서 열어 주셨으면 해서……',
      ]);
      await taste.say_and_wait('재삼! 오늘뿐만 아니라 어젯밤에도 찾아왔다네');
      await taste.say_and_wait('각처! 저마다 해야 할 일이 있네');
      await taste.say_and_wait('침착! 우선 협력 체계를 갖춰야——');
      await rice.say_and_wait([
        '알고 있어요! 그래서 ',
        self_name,
        ', 한신 분들과도 교토 분들과도 연락했어요!',
      ]);
      await rice.say_and_wait(
        '폐가 될지도 몰라요. 힘드실지도 몰라요. 그래도 부디 도와주세요!',
      );
      await rice.say_and_wait(
        '응원해 주는 모두를 위해 할 수 있는 일은 전부 할게요',
      );
      await minoru.say_and_wait('아, 기다리셨죠! 드디어 허가가 났어요!');
      await taste.say_and_wait([t_call_m, '!!! 기대~']);
      await minoru.say_and_wait([
        '네! 이번 ',
        takz_kin,
        '은(는) 교토 경기장에서 개최하기로 결정됐어요!',
      ]);
      await rice.say_and_wait('……그럼!');
      await minoru.say_and_wait(
        '네. 한신과 교토, 양쪽 경기장의 직원들이 긴밀히 연락을 주고받은 덕분에',
      );
      await minoru.say_and_wait('개최할 수 있게 됐어요!');
      await minoru.say_and_wait(
        '양쪽 직원분들 모두 최선을 다하겠다고 해 주셨어요',
      );
      await minoru.say_and_wait(['……', self_name, '을(를) 위해서라도요']);
      await rice.say_and_wait('……！！');
      era.drawLine({ content: '트레이너실로 돌아와서' });
      await rice.say_and_wait('으…… 다행이야……');
      await rice.say_and_wait('열 수 있는 거군요……');
      await you.say_and_wait('모두를 위해 열심히 노력했구나');
      await rice.say_and_wait('응…… 응……!');
      await rice.say_and_wait('이번 일에 힘을 빌려주신 분들을 위해서');
      await rice.say_and_wait([self_name, '를 응원해 주는 모두를 위해서……!']);
      await rice.say_and_wait([self_name, ', 모두를…… 웃게 해 주고 싶어……!']);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '만개하는 푸른빛';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} call_13 ライスのマックイーンへの呼び方
     * @param {PrintedSpan} call_26 ライスのブルボンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      you,
      callname,
      self_name,
      call_13,
      call_26,
      takz_kin,
      arim_kin,
    ) => {
      await rice.say_and_wait('하…… 아, 하아……!!');
      await you.say_and_wait('축하해!');
      await rice.say_and_wait(['……에헤헤. 고마워, ', callname]);
      await rice.say_and_wait([
        '저기, ',
        self_name,
        ', 달리는 동안에도 들렸어',
      ]);
      await rice.say_and_wait('모두의 목소리가');
      await rice.say_and_wait([
        '……헤헤, 이러면 안 되는데. ',
        self_name,
        ', 모두를 웃게 해 주겠다고 했는데',
      ]);
      await rice.say_and_wait([self_name, '만 기뻐하다니']);
      await rice.say_and_wait('정말 행복해……');
      await rice.say_and_wait([takz_kin, '에서 달릴 수 있어서 다행이야']);
      await you.say_and_wait('모두 같은 마음일 거야');
      await rice.say_and_wait('모두가?');
      await era.printAndWait([
        '관객 A「',
        rice.get_colored_name(),
        '——!! 고마워——!!」',
      ]);
      await era.printAndWait(['관객 A「올해의 ', takz_kin, ', 최고였어——!!」']);
      await rice.say_and_wait('대단해…… 웃는 얼굴이 가득해');
      await you.say_and_wait('네가 모두의 웃음을 지켜 준 거야');
      await rice.say_and_wait([self_name, ', 가?']);
      await rice.say_and_wait(['그런 거야? ', self_name, '도…… 해냈어']);
      await rice.say_and_wait('모두를 행복하게 해 줬어!!');
      await you.say_and_wait('고마워, 라이스');
      await rice.say_and_wait('으아아앙——');
      await era.printAndWait([
        '어깨를 떨며 우는 ',
        rice.sex,
        '에게 관객들이 따뜻한 박수를 보낸다.',
      ]);
      era.drawLine({ content: '위닝 라이브 무대' });
      await rice.say_and_wait('스읍…… 하……');
      await you.say_and_wait('이제 안 우네');
      await rice.say_and_wait('헤헤, 계속 울고만 있으면 안 되니까');
      await rice.say_and_wait('이 무대에서 제대로 웃음을 전해야지');
      await rice.say_and_wait([
        '그럼 ',
        self_name,
        ', 다녀올게. 모두가 있는 곳으로',
      ]);
      await rice.say_and_wait('다녀올게');
      await rice.say_and_wait('응!');
      await era.printAndWait([
        '이날 ',
        rice.get_colored_name(),
        '은(는) 관객들에게 최고의 라이브를 선사했다.',
      ]);
      await era.printAndWait([
        '다음 날, 신문 첫 면에는 ',
        rice.sex,
        '의 얼굴 사진이 실렸다.',
      ]);
      await era.printAndWait([
        '——언덕의 잔디 위에 피어난 주인공, 아름다운 장미: ',
        rice.get_colored_name(),
        '。',
      ]);
      era.drawLine({ content: '그 후' });
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        '가 나가고 싶은 건 ',
        arim_kin,
        '！！',
      ]);
      await you.say_and_wait('벌써 다음 목표를 정한 거야?');
      await rice.say_and_wait([
        '응! 왜냐하면 있잖아! 그다음에 열리는 레이스, ',
        arim_kin,
      ]);
      await rice.say_and_wait([call_26, '도 ', call_13, '도 출전하니까!!']);
      await rice.say_and_wait(['그러니까 ', self_name, '도 나갈 거야!']);
      await rice.say_and_wait('『최고의 레이스』를 하고 싶어!!');
      await you.say_and_wait('알겠어');
      await rice.say_and_wait(['와! 고마워, ', callname, '！']);
      await era.printAndWait([arim_kin, '도 ', takz_kin, '과(와) 같다.']);
      await era.printAndWait([
        '팬들의 지지를 얻은 ',
        rice.uma_sex_title,
        '만이 나갈 수 있는 레이스다.',
      ]);
      await era.printAndWait([
        '그 조건을 조금도 신경 쓰지 않고 ',
        rice.sex,
        '는 「나가고 싶다」고 말했다.',
      ]);
      await era.printAndWait('그 말은——');
      era.printButton('「많이 성장했구나」', 1);
      await era.input();
      await rice.say_and_wait(['응? ', self_name, '는 키 안 컸는데?']);
      await you.say_and_wait('그런 뜻이 아니야');
      await rice.say_and_wait('그럼 무슨 뜻이야?');
      await rice.say_and_wait(['아! 가르쳐 줘~ ', callname, '——！！']);
      await era.printAndWait([
        '그날 하루 내내 ',
        rice.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 달라붙어 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_lose_s: (() => {
    const title = '작은 푸른 장미';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([
        '저기, ',
        self_name,
        '가 달리는 동안에 말이야.',
      ]);
      await rice.say_and_wait('다 들렸거든, 모두의 목소리가.');
      await rice.say_and_wait([
        '모두가 『힘내라——』 『',
        rice.get_colored_name(),
        '씨——』라고 외치며 계속 ',
        self_name,
        '를 응원해 줬어.',
      ]);
      await rice.say_and_wait('헤헤, 이러면 안 되는데 말이야.');
      await rice.say_and_wait([self_name, '가 모두를 웃게 해 줘야 하는데']);
      await rice.say_and_wait([
        '결과적으로는 모두가 ',
        self_name,
        '를 행복하게 해줬어.',
      ]);
      await rice.say_and_wait('정말, 너무 행복해.');
      await era.printAndWait([
        rice.get_colored_name(),
        '가 어깨를 들썩이며 울음을 터뜨렸고, 관객들은 그런 ',
        rice.sex,
        '에게 따뜻한 박수를 보내주었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙(시니어급) 시작';
    /** @param {CharaTalk} rice ライスシャワー */
    const f = async (rice) => {
      await era.printAndWait('오늘부터 다시 여름 합숙이 시작됐다.');
      await rice.say_and_wait('에헤헤…… 북적북적하네');
      await rice.say_and_wait('이 느낌…… 오랜만이야');
      await rice.say_and_wait('그때부터 벌써 일 년이 지났구나……');
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙(시니어급) 종료';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait('올해도 힘든 여름 합숙이었다.');
      await era.printAndWait([
        '마지막 날, ',
        you.get_colored_name(),
        '은(는) 벤치에 앉아 돌아갈 준비를 하는 ',
        rice.get_colored_name(),
        '을(를) 기다리고 있었다……',
      ]);
      await rice.say_and_wait(['아아아아아~ ', callname, '！']);
      await rice.say_and_wait([
        you.get_colored_name(),
        ', 기다리게 해서 미안해……!',
      ]);
      await rice.say_and_wait('후우…… 도와드리다 보니 벌써 이런 시간이 됐네');
      await you.say_and_wait('도와드려?');
      await rice.say_and_wait('응, 여기 합숙소에서도 많이 신세 졌잖아?');
      await rice.say_and_wait([
        self_name,
        ', 꽃에 물도 주고…… 벤치에 페인트칠도 다시 하고——',
      ]);
      await you.say_and_wait('벤치에 페인트칠?');
      await rice.say_and_wait([
        '응! 그러니까 ',
        callname,
        '가 지금 앉아 있는 벤치——',
      ]);
      await you.say_and_wait('……');
      await rice.say_and_wait([callname, '？']);
      await era.printAndWait('우당탕!!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 일어났지만 이미 끈적끈적한 페인트가 묻어 있었다.',
      ]);
      await rice.say_and_wait([
        '미, 미안해! ',
        self_name,
        '가 주의 문구를 써 놓지 않아서',
      ]);
      await rice.say_and_wait(['으아아아…… 어떡해, ', callname, '. 으아앙~~']);
      await you.say_and_wait('다시 칠하자');
      await rice.say_and_wait('으…… 정말 미안해');
      await rice.say_and_wait('관리인분께도 사과드려야지');
      await rice.say_and_wait('그리고 페인트도 빌려 와야겠다');
      await era.printAndWait([
        rice.get_colored_name(),
        '와(과) 함께 관리인의 일을 도왔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_41: (() => {
    const title = '팬레터';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait([self_name, '에게 팬레터가……']);
      await you.say_and_wait('잘됐네');
      await rice.say_and_wait('응……!');
      await rice.say_and_wait('하지만……');
      await era.printAndWait([
        '기뻐 보이던 ',
        rice.get_colored_name(),
        '의 얼굴에',
      ]);
      await era.printAndWait('어째서인지 조금 불안한 기색이 돈다.');
      await you.say_and_wait('왜 그래?');
      await rice.say_and_wait(['……가끔 ', self_name, ', 이런 생각이 들어']);
      await rice.say_and_wait([self_name, '를 응원해 줬다는 이유로']);
      await rice.say_and_wait('이 사람들이 불행해지지는 않을까—— 하고');
      await rice.say_and_wait([self_name, ', 그런 건 싫어……']);
      await rice.say_and_wait('생각하고 싶지 않은데도 나도 모르게……');
      await rice.say_and_wait([
        callname,
        '、',
        self_name,
        '는 어떻게 해야 할까?',
      ]);
      await you.say_and_wait('팬레터 내용을 읽어 보자');
      await rice.say_and_wait('내용…… 응');
      era.println();
      await you.say_as_unknown_and_wait([
        '코스에서 열심히 달리는 ',
        rice.get_colored_name(),
        '을(를) 보고 많은 용기를 얻었어요……',
      ]);
      await you.say_as_unknown_and_wait([
        '……',
        rice.get_colored_name(),
        '의 웃는 얼굴을 보면……',
      ]);
      await you.say_as_unknown_and_wait('……언제나 마음이 따뜻해져요');
      era.println();
      await rice.say_and_wait([self_name, '가 열심히 하는 모습……']);
      await rice.say_and_wait([self_name, '의 웃는 얼굴……']);
      await rice.say_and_wait('……그렇구나');
      await rice.say_and_wait('그걸로 기뻐해 주는 사람이 있는 거구나');
      await rice.say_and_wait([callname, '.']);
      await rice.say_and_wait([self_name, ', 계속, 계속 노력할게……!']);
      await rice.say_and_wait([
        self_name,
        '를 응원해 주는 사람들이 기뻐할 수 있도록!',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '의 눈에 의욕의 불꽃이 켜진 듯했다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '기자 회견';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} bourbon ミホノブルボン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     * @param {PrintedSpan} b_call_r ブルボンのライスへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      rice,
      mcqueen,
      bourbon,
      you,
      callname,
      self_name,
      b_call_r,
      arim_kin,
    ) => {
      await era.printAndWait([arim_kin, '이 다가온 어느 날.']);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        rice.get_colored_name(),
        '는 공동 인터뷰에 참석했다.',
      ]);
      await rice.say_and_wait('에, 에엣……!?');
      await rice.say_and_wait([self_name, '가 가운데야?']);
      await you.say_as_passer_by_and_wait('직원 A', [
        '그렇죠! 인기 투표 선두인 ',
        rice.uma_sex_title,
        '니까요',
      ]);
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '가운데는 주인공의 자리예요!',
      );
      await rice.say_and_wait('하지만…… 오늘 라이스는—');
      await bourbon.say_and_wait([b_call_r, ', 신속하고 당당하게 응답하세요.']);
      await bourbon.say_and_wait('촬영 뒤에 인터뷰도 예정되어 있습니다.');
      await mcqueen.say_and_wait('후후, 맞아요.');
      await mcqueen.say_and_wait('주인공이 없으면 시작할 수 없으니까요.');
      await bourbon.say_and_wait(
        '네. 그리고 당신은 【사상 최고의 레이스를 보게 될 것】이라고 선언하겠죠, 맞습니까?',
      );
      await mcqueen.say_and_wait('어머! 그 정도까지인가요?');
      await mcqueen.say_and_wait('후후…… 그거 참 기대되는군요.');
      await rice.say_and_wait('으으~~ 다들 눈빛이 무서워……');
      await you.say_and_wait('주인공이 된다는 건 쉬운 일이 아니네.');
      await rice.say_and_wait(['으으…… ', callname, '까지 그러기야……']);
      await era.printAndWait([
        '회견이 끝나고…… 열심히 노력한 ',
        rice.get_colored_name(),
        '를 격려하기 위해 거리로 나섰다.',
      ]);
      await rice.say_and_wait('으으…… 긴장돼서 죽는 줄 알았어.');
      await you.say_and_wait('정말 고생 많았어.');
      await rice.say_and_wait(
        '응…… 설마 그 두 사람 사이에 끼게 될 줄은 몰랐거든.',
      );
      await rice.say_and_wait(['저기, ', callname]);
      await rice.say_and_wait('어떤 선물을 받고 싶어?');
      await rice.say_and_wait([
        self_name,
        '는 ',
        callname,
        '에게 보답하고 싶어.',
      ]);
      await rice.say_and_wait('그러니까, 어떤 선물을 주는 게 좋을까?');
      await rice.say_and_wait([
        '……비록 ',
        self_name,
        '가 할 수 있는 건 적지만.',
      ]);
      await you.say_and_wait('네가 노력하는 모습을 보고 싶어.');
      await rice.say_and_wait('그거면…… 되는 거야?');
      await you.say_and_wait('물론이지!');
      await rice.say_and_wait(['……', callname]);
      await rice.say_and_wait('안 돼.');
      await rice.say_and_wait(['겨우 그런 거라면 ', self_name, '는 싫어!']);
      await rice.say_and_wait('노력하는 건 당연한 거니까.');
      await rice.say_and_wait([
        '——그러니까, 반드시 ',
        arim_kin,
        '에서 1등을 해서 ',
        callname,
        '에게 선물로 줄 거야!',
      ]);
      await rice.say_and_wait([
        '그건 분명 오직 ',
        self_name,
        '만이 줄 수 있는 선물일 테니까.',
      ]);
      await era.printAndWait('결국 휴식은커녕,');
      await era.printAndWait(
        '이 크리스마스 이브는 오히려 정신을 더욱 고양시켰다.',
      );
      await rice.say_and_wait([callname, ', 오늘도 고마워!']);
      await rice.say_and_wait([
        arim_kin,
        '이 시작되면, ',
        callname,
        '와 여러분 모두를.',
      ]);
      await rice.say_and_wait([
        self_name,
        '의 달리기로 반드시 행복하게 해줄게!',
      ]);
      await era.printAndWait([
        '그렇게 ',
        rice.get_colored_name(),
        '는 가벼운 발걸음으로 앞서 나갔다.',
      ]);
      await era.printAndWait([
        '처음 만났을 때보다 훨씬 늠름해진 뒷모습을, 이제는 ',
        you.get_colored_name(),
        '이(가) 뒤쫓을 차례였다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '누구의 가슴에나 한 송이……';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('대단해, 이 함성');
      await rice.say_and_wait('모두 이쪽을 보고 있어');
      await rice.say_and_wait('모두의 기쁜 얼굴이 보여……!');
      await you.say_and_wait('정말 잘했어');
      await rice.say_and_wait(['으…… 응. ', self_name, ', 열심히 했어……']);
      await rice.say_and_wait([
        '모두가 있어 줘서 ',
        self_name,
        ', 힘낼 수 있었어',
      ]);
      await rice.say_and_wait('정말, 정말로…… 고마워요…… 모두……!');
      await rice.print_and_wait(['이날 ', rice.sex, '는 「주인공」으로서']);
      await rice.print_and_wait('모두에게 전했다.');
      await rice.print_and_wait('웃음꽃이 피어나는 최고의 레이스를.');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '옛날 옛적 어느 곳에……';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '「처음의 삼 년」은 ',
        rice.uma_sex_title,
        '에게 매우 소중한 시기였고, ',
        rice.get_colored_name(),
        '은(는) 그동안 눈부신 성적을 남겼다.',
      ]);
      await era.printAndWait([rice.sex, '는 그로써 세상의 인정을 받았다.']);
      await rice.say_and_wait('표창식……?');
      await you.say_and_wait('모두를 만나러 가자');
      await rice.say_and_wait([
        '……응. ',
        self_name,
        '도 직접 모두에게 고맙다고 말하고 싶어',
      ]);
      await era.printAndWait([
        '——다음 날, ',
        you.get_colored_name(),
        '와(과) ',
        rice.get_colored_name(),
        '은(는) 한신 경기장으로 향했다.',
      ]);
      await rice.say_and_wait('사람이 많아…… 오늘은 레이스도 없는데');
      await you.say_as_passer_by_and_wait('관객 A', [
        '와! ',
        rice.get_colored_name(),
        ' 왔다! 꺄아, 귀여워~!',
      ]);
      await you.say_as_passer_by_and_wait('관객 B', [
        '수고했어~ ',
        rice.get_colored_name(),
        '! 오늘도 잘 부탁해~!',
      ]);
      await rice.say_and_wait('어…… 어?');
      await you.say_as_passer_by_and_wait('직원 A', '두 분 모두 오랜만입니다');
      await rice.say_and_wait('오랜만이에요. 저기…… 이건?');
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '아, 사실 처음에는 직원들끼리만',
      );
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '작은 축하회를 열 생각이었는데……',
      );
      await you.say_as_passer_by_and_wait('관객 C', [
        rice.get_colored_name(),
        '~! 이쪽 좀 봐 줘~!',
      ]);
      await you.say_as_passer_by_and_wait('직원 A', [
        '보시다시피 ',
        rice.get_colored_name(),
        '을(를) 만나고 싶다는 손님들이 많이 오셔서요',
      ]);
      era.printButton(`모두 라이스을(를) 정말 좋아하니까`, 1);
      await era.input();
      await rice.say_and_wait('으에에? 저, 정말 좋아한다고……');
      await you.say_as_passer_by_and_wait('직원 A', '아하하, 맞아요');
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '그래서 계획을 바꾸고 각 분야 관계자분들께 협조를 부탁드려서……',
      );
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '표창식은 이렇게 일반 관객들도 참가할 수 있는 행사가 됐어요',
      );
      await rice.say_and_wait([
        '그럼 이 사람들, 모두 ',
        self_name,
        '를 위해서……',
      ]);
      await you.say_as_passer_by_and_wait('직원 A', '네, 맞아요');
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '그날 하지 못했던 일을 부탁드려도 될까요?',
      );
      era.drawLine();
      await rice.say_and_wait('저기, 여러분, 안녕하세요');
      await rice.say_and_wait([
        '오늘 이렇게 많은 분이 ',
        self_name,
        '를 위해 와 주셔서 정말 감사해요',
      ]);
      await rice.say_and_wait([
        self_name,
        ', 이렇게 행복한 풍경은 본 적이 없어요',
      ]);
      await rice.say_and_wait('지금 정말 행복해요');
      await rice.say_and_wait([self_name, ', 이제 울지 않을 거예요']);
      await rice.say_and_wait([
        '왜냐하면 ',
        self_name,
        ', 오늘은 모두의 눈을 보고 이야기하고 싶으니까요',
      ]);
      await rice.say_and_wait([
        '혼자였다면 ',
        self_name,
        '는 지금도 조금도 나아가지 못했을 거예요',
      ]);
      await rice.say_and_wait('자기만의 어두운 세계에서 웅크리고만 있었겠죠');
      await rice.say_and_wait([
        '하지만 ',
        self_name,
        '는 이제 혼자가 아니에요',
      ]);
      await rice.say_and_wait([
        self_name,
        '가 여기에 설 수 있는 건 ',
        you.sex,
        ' 덕분이에요',
      ]);
      await rice.say_and_wait([
        self_name,
        '에게 빛을 주시고, ',
        self_name,
        '가 있을 곳을 만들어 주시고……',
      ]);
      await rice.say_and_wait('여러분, 정말 감사해요!');
      await rice.say_and_wait([
        '그러니까 앞으로도 ',
        self_name,
        '를 응원해 주세요……!!',
      ]);
      await you.say_as_passer_by_and_wait('관객들', '와아아아아아아——');
      era.drawLine({ content: '돌아가는 버스' });
      await rice.say_and_wait(['고마워, ', callname, '. 전부 당신 덕분이야']);
      await you.say_and_wait('정말 잘했어, 라이스');
      await rice.print_and_wait([
        '이렇게 늘 자신을 못난 아이라고 여기던 ',
        rice.child_sex_title,
        '는 누군가의 푸른 장미가 되었다.',
      ]);
      await rice.print_and_wait(
        '그림책과는 다르다. 때로는 불행한 일도 생긴다……',
      );
      await rice.print_and_wait([
        '하지만 ',
        rice.sex,
        '는 모두를 행복하게 해 주고 싶다는 희망을 품고 아름답게 피어난다.',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        '은(는) 세상에서 가장 좋아하는 사람 곁에서 그렇게 기도하고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_stay: (() => {
    const title = '수면 부족';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     */
    const f = async (rice, you, callname) => {
      await rice.say_and_wait('하~ 암……');
      era.printButton('잠을 설쳤어?', 1);
      await era.input();
      await rice.say_and_wait('엣!?');
      await rice.say_and_wait(['아, 다행이다, ', callname, '～']);
      await rice.say_and_wait('사실 어제 자기 전에 무서운 책을 읽었거든.');
      await rice.say_and_wait(
        '그랬더니 책상 위 인형이 쳐다보는 것 같아서 신경 쓰이고.',
      );
      await rice.say_and_wait(
        '시계 초침 소리도 평소보다 엄청 크게 들리는 것 같고……',
      );
      await rice.say_and_wait(
        '결국 사소한 게 전부 신경 쓰여서 잠을 하나도 못 잤어……',
      );
      await rice.say_and_wait('하아~');
      await era.printAndWait([
        '아무래도 ',
        rice.get_colored_name(),
        '은(는) 잠이 부족한 모양이다.',
      ]);
      await era.printAndWait('푹 잘 수 있으면 좋으련만.');
    };
    f.title = title;
    return f;
  })(),
  sa_teach: (() => {
    const title = '명지도';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} zob_zoy ゼンノロブロイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, zob_zoy, you, callname, self_name) => {
      await rice.say_and_wait('흐음…… 흠, 흠……♪');
      await zob_zoy.say_and_wait([self_name, ', 기분이 좋아 보이시네요']);
      await zob_zoy.say_and_wait('무슨 좋은 일이라도 있었나요?');
      await rice.say_and_wait([
        '응…… 있잖아, ',
        self_name,
        ', 수업 시간에 코스를 달렸는데',
      ]);
      await rice.say_and_wait('전보다 기록이 잘 나왔어!');
      await rice.say_and_wait('어제 새로운 주법을 배웠으니까 이것도——');
      await zob_zoy.say_and_wait(['……', callname, ' 덕분인가요?']);
      await rice.say_and_wait('어…… 어어, 어떻게 알았어!?');
      await zob_zoy.say_and_wait('후후, 죄송해요');
      await zob_zoy.say_and_wait('밤중에 책을 읽고 있으면 가끔……');
      await zob_zoy.say_and_wait([
        '행복한 목소리로 『고마워, ',
        callname,
        '……』라고 잠꼬대하는 게 들리거든요',
      ]);
      await rice.say_and_wait('으, 와, 와아아, 부끄러워!');
      await zob_zoy.say_and_wait('죄송해요. 놀리려던 건 아니에요');
      await zob_zoy.say_and_wait(
        '이렇게까지 고마워한다면 분명 훌륭한 트레이너시겠구나 하고 생각했을 뿐이에요',
      );
      await rice.say_and_wait(['으, 응! ', callname, '는 최고의 트레이너야!']);
      await era.printAndWait([
        '그 후 ',
        rice.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 좋은 점을 한참 동안 이야기했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_dance: (() => {
    const title = '댄스 레슨';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await rice.say_and_wait('하나 둘, 하나 둘, 여기서는 발을——');
      await rice.say_and_wait('꺄악!');
      await rice.say_and_wait('아우우, 또 실패했어…… 좀 더 연습해야 해……');
      await you.say_and_wait('정말 열심히 하는구나.');
      await rice.say_and_wait(['우앗!? ', callname, '!? 보, 보고 있었어……?']);
      await rice.say_and_wait([
        '미안해, 그게…… ',
        self_name,
        '는 아무도 없을 때 연습하려고 했거든.',
      ]);
      await you.say_and_wait('왜 혼자서 연습하고 있어?');
      await rice.say_and_wait(
        '그게, 예전에 다 같이 수업을 들을 때 무용실이…… 정전됐었거든.',
      );
      await rice.say_and_wait([
        '그것 때문에 모두의 수업이 끊겨버렸어. 아마, ',
        self_name,
        ' 때문일 거야……',
      ]);
      await rice.say_and_wait([
        self_name,
        '는 더 이상 모두에게 폐를 끼치고 싶지 않아서, 그래서 혼자 연습하고 있었어.',
      ]);
      await rice.say_and_wait([
        callname,
        '도 그래. 여기 있으면 또 나 때문에 무슨 일을 당할지 몰라……',
      ]);
      era.printButton(
        '「내가 같이 있으면 곤란하니?」（스태미나+10, 근성+10）',
        1,
      );
      era.printButton(
        '「마음껏 폐 끼쳐도 괜찮아!」（지능+10, 스킬 포인트+10）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await rice.say_and_wait([
          '그, 그럴 리가! ',
          callname,
          ' 때문에 곤란해지진 않아!',
        ]);
        await you.say_and_wait('그럼 도와줄게');
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait('고마워');
        await rice.say_and_wait([
          self_name,
          '가 잘 못하는 부분은 ',
          callname,
          '가 말해 줘',
        ]);
        await you.say_and_wait('같이 힘내자');
        await rice.say_and_wait('응!');
        await era.printAndWait([
          '그 후 ',
          you.get_colored_name(),
          '와(과) ',
          rice.get_colored_name(),
          '은(는) ',
          rice.sex,
          '가 어려워하는 스텝을 철저히 연습했다.',
        ]);
      } else {
        await rice.say_and_wait([
          '으에!? 그런, ',
          callname,
          '에게 폐 끼치고 싶지 않아!',
        ]);
        await you.say_and_wait([
          self_name,
          '이(가) 혼자 고민하는 게 나한테는 더 힘들어',
        ]);
        await rice.say_and_wait([callname, '……']);
        await rice.say_and_wait('연습하면서 생긴 고민, 같이 이야기해도 될까?');
        await you.say_and_wait('물론이지!');
        await rice.say_and_wait('고마워! 실은 굉장히 어려운 스텝이……');
        await era.printAndWait([
          '그 후 늦은 시간까지 ',
          you.get_colored_name(),
          '은(는) ',
          rice.get_colored_name(),
          '와(과) 댄스에 관한 고민을 나누었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  or_letter: (() => {
    const title = '팬레터';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_name ライスの自称
     */
    const f = async (rice, you, callname, self_name) => {
      await era.printAndWait([
        '어느 날, ',
        rice.get_colored_name(),
        '가 팬레터를 받았다.',
      ]);
      await rice.say_and_wait([self_name, '에게 온, 팬레터……']);
      await you.say_and_wait('잘됐네.');
      await rice.say_and_wait('응, 응!');
      await rice.say_and_wait('하지만……');
      await era.printAndWait([
        self_name,
        '의 기뻐 보이던 표정이 조금씩 불안하게 변했다.',
      ]);
      await you.say_and_wait('왜 그래?');
      await rice.say_and_wait([self_name, '는 가끔 이런 생각이 들어.']);
      await rice.say_and_wait([
        self_name,
        '를 응원해 주는 분이, 나 때문에 불행해지지는 않을까 하고.',
      ]);
      await rice.say_and_wait([
        self_name,
        '는 그러고 싶지 않은데, 그렇게 생각하고 싶지 않은데, 자꾸만……',
      ]);
      await rice.say_and_wait([
        callname,
        ', ',
        self_name,
        '는 어떻게 하는 게 좋을까?',
      ]);
      await you.say_and_wait('팬레터의 내용을 읽어 보자.');
      await rice.say_and_wait('내용을? 응……');
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        '가 레이스에서 노력하는 모습이 저에게 큰 용기를 주었어요.',
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        '의 웃는 얼굴을 볼 때마다 마음이 따뜻해지는 기분입니다.',
      ]);
      await you.say_as_unknown_and_wait([
        rice.get_colored_name(),
        '의 노력하는 모습…… ',
        rice.get_colored_name(),
        '의 미소……',
      ]);
      await rice.say_and_wait(
        '그렇구나. 누군가는 라이스 덕분에 기뻐해 주는구나.',
      );
      await rice.say_and_wait([
        callname,
        ', 라이스 더욱더, 훨씬 더 많이 노력할게!',
      ]);
      await rice.say_and_wait([
        self_name,
        '를 응원해 주는 분들이 모두 기뻐할 수 있도록 노력할게!',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '의 눈동자에 의욕 가득한 불꽃이 타오르는 듯했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
