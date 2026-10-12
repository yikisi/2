/**
 * @file ハルウララ - 日常
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
   * @param {PrintedSpan} call_11 ハルウララのグラスワンダーへの呼び方
   * @param {PrintedSpan} call_14 ハルウララのエルコンドルパサーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   * @param {PrintedSpan} call_19 ハルウララのアグネスデジタルへの呼び方
   * @param {PrintedSpan} call_20 ハルウララのセイウンスカイへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_33 ハルウララのアドマイヤベガへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのゼンノロブロイへの呼び方
   * @param {PrintedSpan} call_58 ハルウララのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   */
  good_morning(
    urara,
    you,
    callname,
    self_call,
    call_1,
    call_11,
    call_14,
    call_15,
    call_19,
    call_20,
    call_30,
    call_33,
    call_47,
    call_58,
    call_61,
    call_77,
    high_relation,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (high_relation) {
      buffer.push(
        () => {
          urara.say(`${callname}! 오늘은 뭐 할 거야?`);
          era.print([
            urara.get_colored_name(),
            '이(가) 기운차게 ',
            you.get_colored_name(),
            '에게 오늘 일정을 묻는다.',
          ]);
        },
        () => {
          urara.say(
            `밭에 계신 할아버지가 또 당근을 보내 주셨어. 이따가 같이 모두한테 나눠 주자! 이건 ${callname} 몫이야!`,
          );
          era.print([
            '잔뜩 끌어안고 있던 ',
            urara.get_colored_name(),
            '이(가) 기쁜 듯 종이봉투에 가득 든 당근을 ',
            you.get_colored_name(),
            '의 품에 안겨 준다.',
          ]);
        },
        () => {
          urara.say(`${callname}하고 한 약속, 꼭 지킬게! 같이 1착 많이 하자!`);
          era.print([
            '늘 그렇듯 ',
            urara.get_colored_name(),
            '이(가) ',
            you.get_colored_name(),
            '에게 신나서 이야기한다.',
          ]);
        },
        () => {
          urara.say(
            `${callname}、${callname}! 잡지 봤어? 다들 우라라를 '용기를 주는 ${urara.uma_sex_title}'라고 했어! 에헤헤~`,
          );
          era.print([
            urara.get_colored_name(),
            '이(가) 그 뜻을 알고 있는지는 모르겠지만, ',
            urara.sex,
            '의 미소에는 조금 쑥스러운 기색이 묻어난다.',
          ]);
        },
        () => {
          urara.say([
            '어제 ',
            call_1,
            '하고 ',
            call_20,
            ' ',
            urara.couple_title,
            '하고 라멘 먹으러 갔어. 양도 신경 썼다구? ……그래도 역시 너무 많이 먹어 버렸어!',
          ]);
          era.print([
            urara.get_colored_name(),
            '이(가) 웃으며 ',
            you.get_colored_name(),
            ' 앞으로 다가온다. 적어도 조금 볼록해진 배를 보니 ',
            urara.sex,
            '은(는) 정말 즐거웠던 모양이다.',
          ]);
        },
        () => {
          urara.say([
            '앗, ',
            call_14,
            ', 또 ',
            call_11,
            '한테 쫓기고 있어! 식칼까지 들었네! 다들 오늘도 기운이 넘치네!',
          ]);
          era.print([
            '듣기만 해도 위험한 이야기지만, ',
            urara.get_colored_name(),
            '이(가) 긴장하지 않는 걸 보면 괜찮은 거겠지?',
          ]);
        },
        () => {
          urara.say([
            '오늘도 ',
            call_15,
            '이(가) 옥상에서 뭔가 연습하고 있었어. 재미있어 보였어! 뭐, ',
            urara.sex,
            '는 늘 그렇지만!',
          ]);
          era.print([
            urara.get_colored_name(),
            '은(는) 이야기하면서 ',
            you.get_colored_name(),
            '에게 티엠 오페라 오 흉내를 내 보인다. 별로 닮지는 않았지만 의외로 귀엽다.',
          ]);
        },
        () => {
          urara.say([
            '어제 ',
            call_58,
            '이(가) 기숙사에 돌아갔더니 침대 위에 너구리가 있었어! 너구리, 정말 귀엽더라!',
          ]);
          era.print([
            '너구리? 기숙사에 너구리가? ',
            urara.get_colored_name(),
            '이(가) 거짓말을 하지 않는다는 걸 알기에 ',
            you.get_colored_name(),
            '은(는) 더욱 고개를 갸웃거린다.',
          ]);
        },
        () => {
          urara.say([
            call_77,
            '하고 ',
            call_33,
            ', 폭신폭신한 것들 이야기를 하고 있었나 봐! 그런데 도중에 ',
            call_33,
            '이(가) 이불 건조기를 추천하기 시작했어! 왜 그랬을까?',
          ]);
          era.print([
            '끝까지 듣고 나니 ',
            urara.get_colored_name(),
            '마저 드물게 어리둥절한 표정이다. 그러게, 왜 그랬을까.',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(
              `요즘 맛있는 게 있으면 제일 먼저 나눠 주는 건 언제나 ${callname}이야! 응! ${callname}하고 우라라는 친하니까, 그렇지!`,
            );
            era.print([
              urara.get_colored_name(),
              '은(는) 손에 든 과자를 ',
              you.get_colored_name(),
              '하고 나누며 기쁘게 웃는다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}이(가) 있어 주면 더 빨리 달릴 수 있을 것 같아! 달리는 것도 전보다 더 재미있어!`,
            );
            era.print([
              '어느새 폴짝폴짝 뛰던 ',
              urara.get_colored_name(),
              '이(가) ',
              you.get_colored_name(),
              '에게 한층 가까이 다가와 있다.',
            ]);
          },
          () => {
            urara.say([
              call_61,
              ', 오늘도 ',
              callname,
              ' 말 잘 들으라고 했어. 엄마 같다니까! 하지만 ',
              self_call,
              ', 이제 어린애 아닌데! ',
              call_61,
              '도 맨날 덜렁거리면서…… 아, ',
              call_61,
              '한테는 말하면 안 돼, ',
              callname,
              '！',
            ]);
            era.print([
              urara.get_colored_name(),
              '은(는) 오늘도 ',
              urara.sex,
              '의 룸메이트와 사이가 좋아 보인다. 그래도 반격하겠다고 친구 험담을 해서는 안 된다.',
            ]);
          },
          () => {
            urara.say(
              `다들 우라라가 달리는 걸 보면 희망이 생긴대! ${self_call}, 제대로 ${callname}을(를) 웃게 해 주고 있어?`,
            );
            era.print([
              '평소보다 조금 어른스러운 미소를 보이는 걸 보니 ',
              urara.get_colored_name(),
              '도 착실히 성장하고 있는 모양이다.',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `엄마가 그랬어. 서로 믿는 사람한테만 몸단장을 맡길 수 있대! ${self_call} 머리가 헝클어졌어? 그럼 ${callname}, 빗어 줄래?`,
            );
            era.print([
              you.get_colored_name(),
              '의 대답을 기다리지도 않고 ',
              urara.get_colored_name(),
              '은(는) 벌써 웃으며 리본을 풀고, ',
              you.get_colored_name(),
              ' 앞에서 분홍색 포니테일을 풀어 내린다.',
            ]);
          },
          () => {
            urara.say([
              call_30,
              '한테 빌린 그림책에 사랑은 정말 멋지고, 과일처럼 새콤달콤하다고 쓰여 있었어! ',
              self_call,
              '도 많이 생각하고 있어! 그래도…… 아직은 ',
              callname,
              '한테 더 알려 줄 수 없어!',
            ]);
            era.print([
              '어느새 언제까지나 자라지 않을 것 같던 작은 ',
              urara.uma_sex_title,
              '에게 사랑에 빠진 소녀의 기색이 어리기 시작했다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}, 더 가까이 가도 돼? 앗! 에헤헤, 또 ${callname} 무릎에 앉아버렸네! ${callname} 몸, 따뜻해!`,
            );
            era.print([
              urara.get_colored_name(),
              '가 기쁜 듯이 말한다. 순간, 촉촉한 표정이 얼굴을 스친 것 같은 기분이 들었다.',
            ]);
          },
          () => {
            urara.say(
              `다들 어른이 되라고 하지만, ${self_call}도 어린애 취급은 싫어! 응? 어른이 되려는 이유…… 아, 저기 당근이다!`,
            );
            era.print([
              '뭔가를 감추려는 듯, ',
              you.get_colored_name(),
              '의 질문을 받은 ',
              urara.get_colored_name(),
              '은(는) 갑자기 얼굴을 붉히더니 황급히 둘러대고 달아난다.',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname}한테서 좋은 냄새가 나! 하아……앗! 미안해! ${callname} 을 곤란하게 하면 안 되는데 말이야. 그래도, 음……`,
            );
            era.print([
              '떼어내려 해도, ',
              urara.get_colored_name(),
              '는 참지 못하고 얼굴을 붉힌 채 멋대로 ',
              you.get_colored_name(),
              '의 냄새를 맡고 있다.',
            ]);
          },
          () => {
            urara.say([
              `『허접~ 허접~』, 이거, `,
              call_19,
              ` 메모장에서 배워왔어. ${callname}이(가) 기뻐할 거라고 해서! 어? 이제 하지 말라고? 그럼 ${self_call}, 안 할게! 그래도 ${callname}…… 계속 ${self_call}를 지켜봐 줘야 해?`,
            ]);
            era.print([
              you.get_colored_name(),
              '의 당황하는 모습을 바라보는 ',
              urara.get_colored_name(),
              '의 맑은 미소에, 어느새 남몰래 즐거운 듯한 웃음이 섞여 든다.',
            ]);
          },
          () => {
            urara.say([
              `어젯밤에,`,
              call_61,
              `가 침대에서 이상한 소리를 내고 있었어! 그런데 그 소리를 듣고 있으니까, ${self_call} 머릿속이 온통 ${callname}로 가득 차서…… 왜 그랬던 걸까? ${self_call}도 잘 모르겠어. 그럼 그 뒤엔……? 그 뒤엔……${self_call}, 잠들어버렸어!`,
            ]);
            era.print([
              '최근의 이야기를 끝까지 하지 못한 채,',
              urara.get_colored_name(),
              '는 얼굴을 새빨갛게 붉히며 시선을 돌린다.',
            ]);
          },
          () => {
            urara.say(
              `아하~ ${callname}의 '다리 사이'는 ${self_call}의 '지정석'이잖아, 약속했지? 오해 살 만한 말 하지 말라고? 오해 아니야! 아니면…… ${callname}, 또 이상한 생각 하는 거야?`,
            );
            era.print([
              '순진한 말투로, ',
              you.get_colored_name(),
              '에게 유혹의 속삭임을 내뱉고,',
              urara.get_colored_name(),
              '의 귀여운 얼굴마저 『색기』가 서려 보인다……',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `이 새로 나온 맛의 벌꿀 특제 드링크, 엄청 맛있다? ${callname}도 마셔 봐! 간접 키스……? ${self_call}은(는) 괜찮은데? 혹시…… ${callname}, 부끄러워?`,
            );
            era.print([
              '작은 ',
              urara.uma_sex_title,
              '이(가) ',
              you.get_colored_name(),
              '에게 웃으며 눈을 가늘게 뜬다. 손에 든 지나치게 달콤한 음료에도 다른 의미가 더해진 모양이다.',
            ]);
          },
          () => {
            urara.say(
             `요즘 또 새로운 요리를 배웠어! 앞으로 ${callname}의 배를 든든하게 채워줄 수 있도록, ${self_call}가 힘낼게! 그런 말 하지 말라고? 혹시 ${callname}도 ${self_call}의 몸을 가득 채워주고 싶은 거야? 어른을 놀리지 말라고? 알았어……`,
            );
            era.print([
              you.get_colored_name(),
              '의 주의를 듣고,',
              urara.get_colored_name(),
              '은 그제야 말을 채 끝내기도 전부터 새빨개져 있던 얼굴을 돌린다.',
            ]);
          },
          () => {
            urara.say(
              `상점가 사람들이 또 ${self_call}가 예뻐졌대! ${self_call}가 빨라져서 그런가? 응? 그것뿐만이 아니라고? 사실 알고 있어! ${callname}이 ${self_call}의 몸을 바라보는 눈빛이 예전보다 훨씬 더 이상해져 있다는 거…… 농담이야!`,
            );
            era.print([
              '살며시 옷자락을 걷어 올려 부드러운 몸을 드러내자,',
              urara.get_colored_name(),
              '의 순수한 미소에 ',
              you.get_colored_name(),
              '은 당황해서 어질어질해질 지경이다.',
            ]);
          },
          () => {
            urara.say(
              `요즘 ${self_call}, 정말 많이 생각해 봤어. 응! 다들한테 내가 이기는 모습을 더 많이 보여주고 싶어! 무리하지 말라고? 알고 있어! 그리고 '1착' 중에는 ${callname}한테만 보여주는 것도 있거든…… 헤헤~`,
            );
            era.print([
              urara.get_colored_name(),
              '의 미소는 여전히 천진난만하다. 하지만, ',
              callname,
              '에게만 보여주는 1착이라니……?',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `오늘도 꼭 지켜봐 줘. 우라라가 ${callname}에게 계속해서 용기를 전해줄 테니까! ……그러니 이따가, 우리 둘만 있을 때는 ${callname}도 힘내야 해?`,
            );
            era.print([
              '까치발을 한 채,',
              urara.get_colored_name(),
              '가 다정하게 ',
              you.get_colored_name(),
              '의 뺨을 어루만진다. 동시에,',
              you.get_colored_name(),
              '을 불안하게 만드는 말도 남겼다.',
            ]);
          },
          () => {
            urara.say(
              `앞으로 ${callname}은(는) 아이를 몇 명이나 낳고 싶어? 몇 명이든 ${self_call}가 다 받아들일게!`,
            );
            era.print([
              '앞뒤가 맞지 않는 이야기를 나누면서,',
              urara.get_colored_name(),
              '의 뜨거운 시선에, ',
              you.get_colored_name(),
              '은(는) 안절부절못한다.',
            ]);
          },
          () => {
            urara.say(
              `독차지하는 게 사랑의 전부는 아니라고 하면서, 다들 서로를 빤히 보고 있네…… ${callname}은(는) 어떻게 생각해? ${self_call}도 독차지는 안 좋다고 생각해. 그래도 ${self_call}, 불안해질 때도 있다구?`,
            );
            era.print([
              you.get_colored_name(),
              '의 소매를 꼭 붙잡은 작은 ',
              urara.uma_sex_title,
              '의 미소는 조금 쓸쓸해 보인다. 더 가까이 있어 주길 바라는 모양이다.',
            ]);
          },
          () => {
            urara.say(
              `있잖아, ${callname}! 오늘도 기분 좋고 즐거운 일, 같이 하지 않을래? 목소리가 너무 컸다고? 우라라가 말한 건 같이 트레이닝하자는 거였는데? 설마 ${callname}, ${self_call}한테……?`,
            );
            era.print([
              you.get_colored_name(),
              '의 반응을 지켜보자,',
              urara.get_colored_name(),
              '의 아직 앳된 미소 위로 수줍은 홍조가 살짝 감돈다.',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `달리러 가고도 싶고, 놀러 가고도 싶어. 그래도 제일 좋은 건 ${callname}이(가) 같이 있어 주는 거야! ${callname}, 마음대로 없어지면 안 돼. 누가 와도 안 돼! 누가 와도, 안 돼……`,
            );
            era.print([
              '기분이 좋아진 ',
              urara.get_colored_name(),
              '이(가) 드물게 먼저 ',
              you.get_colored_name(),
              '에게 응석을 부린다. 그런데 분위기가 조금 위험해진 것 같은데……?',
            ]);
          },
          () => {
            urara.say(
              `${callname}하고 헤어져도 다시 만날 수 있다면, 앞이 지옥이어도 쫓아갈 거야…… 아하~ 이거, ${self_call}이(가) TV에서 배운 거야! ${self_call} 연기 어땠어? 깜짝 놀랐어, ${callname}？`,
            );
            era.print([
              '연기라고 말하면서도 ',
              urara.get_colored_name(),
              '의 눈빛은 한없이 진지하기만 하다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}, ${self_call} 생각했어? 낮에 더 많이 생각해? 아니면 밤에 더 많이 생각해? 흐흥~ ${callname}이 화내도 안 멈출 거야. 지금의 우라라는 나쁜 ${self_call}거든!`,
            );
            era.print([
              '뒤에서 ',
              you.get_colored_name(),
              '의 허리를 끌어안고,',
              urara.get_colored_name(),
              '가 달콤한 목소리로 ',
              you.get_colored_name(),
              '의 신경을 간지럽힌다……',
            ]);
          },
          () => {
            urara.say(
              `${self_call}은(는) 천사……? 아직 잘 모르겠지만, ${self_call}도 계속 ${callname}의 천사로 있고 싶어! 그러니까 ${callname}이(가) 또 지치면 언제든 ${self_call}한테 기대도 돼!`,
            );
            era.print([
              you.get_colored_name(),
              '이(가) 무심코 내뱉은 감상을 듣고, 작은 담당은 아내 같기도 엄마 같기도 한 몸짓으로 ',
              you.get_colored_name(),
              '의 손을 잡는다.',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () => {
          urara.say(`……${callname}! 오늘 트레이닝도…… 힘내자!`);
          era.print([
            '평범한 아침 인사일 뿐인데도 ',
            urara.get_colored_name(),
            '은(는) 웃을 때마다 용기를 쥐어짜는 것 같다.',
          ]);
        },
        () => {
          urara.say(
            `오늘도 괜찮아! ${self_call}、${callname}하고 한 약속, 꼭 지킬게!`,
          );
          era.print([
            '마음을 다잡은 ',
            urara.get_colored_name(),
            '이(가) 진지하게 고개를 들고 ',
            you.get_colored_name(),
            '의 눈을 바라본다.',
          ]);
        },
        () => {
          urara.say(`${callname}, 저기, 당근! 이거, ${callname} 몫이야!`);
          era.print([
            '조금 겁먹은 기색이면서도 ',
            urara.get_colored_name(),
            '은(는) 웃으며 손에 든 당근을 ',
            you.get_colored_name(),
            '에게 쥐여 준다.',
          ]);
        },
        () => {
          urara.say(
            `용기…… 맞지! ${self_call}, 더 용기 내야 해! 그래도 정말 어렵네……`,
          );
          era.print([
            '오늘 나온 잡지를 바라보는 ',
            urara.get_colored_name(),
            '의 미소가 어쩐지 조금 쓸쓸하다.',
          ]);
        },
        () => {
          urara.say(
            `요즘 다들하고 놀러 갔다가 또 너무 많이 먹어 버렸어…… 미안해.${self_call}, 다음엔 조심할게!`,
          );
          era.print([
            '억지로 웃음을 지어 보인다. ',
            you.get_colored_name(),
            ' 앞의 ',
            urara.get_colored_name(),
            '은(는) 조금 자신이 없어 보인다.',
          ]);
        },
        () => {
          urara.say(
            `보충 수업 때 또 다들 도와줬어. 그러게! ${self_call}도 다른 사람들처럼 똑똑하면 좋을 텐데……`,
          );
          era.print([
            you.get_colored_name(),
            '의 옆에 선 ',
            urara.get_colored_name(),
            '은(는) 무언가가 떠올랐는지 기운이 없다.',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(`${callname}, 이거 맛있어! 이제 조금밖에 안 남았지만……`);
            era.print([
              '마지막 남은 간식을 전부 ',
              you.get_colored_name(),
              '에게 나눠 주는 ',
              urara.get_colored_name(),
              '은(는) 트레이너를 잊을 뻔한 게 조금 부끄러운 모양이다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}하고 함께하니까 ${self_call}, 정말 빨라졌어! 그런데 왜 그렇게 기쁘지는 않을까……`,
            );
            era.print([
              '자기가 성장한 게 기쁠 텐데도 ',
              urara.get_colored_name(),
              '의 미소는 어딘가 무리하고 있다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}, 안 보고 있어도 돼. ${self_call} 혼자서도 할 수 있어── 같은 말은 안 해! ${self_call}、${callname}에게 용기를 주기로 약속했으니까. 그러니까 ${callname}도 도망치면 안 돼!`,
            );
            era.print([
              '벚꽃빛 눈동자로 어른의 눈을 똑바로 바라보며 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '에게 거절할 수 없는 부탁을 한다.',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `머리가 헝클어졌어? 큰일이다…… 응? 도와줄 거야? 그럼…… ${callname}, 살살 해 줘?`,
            );
            era.print([
              you.get_colored_name(),
              '의 제안에 ',
              urara.get_colored_name(),
              '은(는) 리본과 머리띠를 조심스럽게 풀고, 긴장하면서도 등을 돌린다.',
            ]);
          },
          () => {
            urara.say(
              `${self_call}, 계속 어린애로 있고 싶지는 않은데, 어른인 ${callname}이(가) 또 이런 얼굴을 하네. 어른이 되는 것도 달리기나 레이스처럼 어렵구나……`,
            );
            era.print([
              urara.get_colored_name(),
              '은(는) 무언가 중얼거리는 듯했지만, ',
              you.get_colored_name(),
              '이(가) ',
              urara.sex,
              '을(를) 보자 다시 눈을 피했다.',
            ]);
          },
          () => {
            urara.say([
              call_47,
              '의 책에 사랑은 고민과 함께 찾아온다고 쓰여 있었어. 계속 괴로워진대…… 요즘 ',
              self_call,
              '도 고민하고 있어. 정말로 신경 쓰이는 건지 잘 모르겠어……',
            ]);
            era.print([
              '언제까지나 자라지 않을 것 같던 작은 ',
              urara.get_colored_name(),
              '이(가) 지금은 사랑을 고민하는 소녀처럼 혼잣말을 한다.',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname}, 오늘 냄새…… 응? ${self_call}, 일부러 그런 건 아니야?`,
            );
            era.print([
              '멍하니 ',
              you.get_colored_name(),
              '의 옷에 몸을 비비며, 작은 담당은 약간 내키지 않는 듯이 ',
              you.get_colored_name(),
              '에게 사과한다.',
            ]);
          },
          () => {
            urara.say(
              `요즘 ${callname}을(를) 보면 몸이 달아오르고, 밤에 ${callname} 생각을 하면 아래쪽이…… 미안, ${self_call}, 더는 말 안 할게. 하지만…… 역시, 아무것도 아니라고?`,
            );
            era.print([
              '잠시 머뭇거리다, 이내 얼굴이 새빨개진 ',
              urara.get_colored_name(),
              '는 끝까지 말을 잇지 못했다.',
            ]);
          },
          () => {
            urara.say(
              `『겁쟁이 찌질이, 학생을 속이는 가짜 다정함 따위 싫어, 최악이야……』 그만해? 하지만 ${callname}도 흥분했잖아? 『${self_call}조차 속이지 못하는 변태 트레이너』……`,
            );
            era.print([
              you.get_colored_name(),
              '의 귓가에서 마음껏 "장난"을 치며,',
              urara.get_colored_name(),
              '의 흥분한 얼굴에는 경멸과 감출 수 없는 정욕이 뒤섞인다.',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `${self_call}, 계속 요리 연습하고 있어! 그런데 ${callname}은(는) 평소에…… 좋아하는 사람이 만들어 준 도시락이라면 곤란하지 않겠지. 그렇지.${self_call}은(는) 더 먼 앞날을 생각하고 있으니까, 배고프면 ${self_call}한테 기대 봐도 돼!`,
            );
            era.print([
              you.get_colored_name(),
              '에게 자신의 이야기를 하는 ',
              urara.get_colored_name(),
              '의 미소는 조금 체념한 듯하면서도, 한결 홀가분해진 것 같기도 하다.',
            ]);
          },
          () => {
            urara.say(
              `다들 또 ${self_call}가 예뻐졌다고들 해. ${self_call}, 정말 예뻐진 거야? 하지만 알고 있어, ${callname}이 ${self_call}를 엉망으로 만들었다는 걸…… 농담이 아니라고?`,
            );
            era.print([
              '둘만 있을 때, 숨김없이 ',
              you.get_colored_name(),
              '에게 몸을 밀착하며,',
              urara.get_colored_name(),
              '의 순수했던 미소가 조금씩 탁해져 간다.',
            ]);
          },
          () => {
            urara.say(
              `기분 좋은 일, ${self_call}도 ${callname}와(과) 하고 싶어. 하지만 매일 하는 트레이닝도 중요해? 게다가 다음번에 하나 따내면 ${callname}도 더 기뻐하겠지. 그때……`,
            );
            era.print([
              '입으로는 내키지 않는 것 같은데, 작은 ',
              urara.uma_sex_title,
              '의 뺨은 붉어져 있다. 그럴 때는 뭐라고 말할 생각일까?',
            ]);

          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `${self_call}, 여기 앉아도 돼? 고마워! 그럼…… 지금 ${callname}은(는) 무슨 생각 해?`,
            );
            era.print([
              '스스럼없이 ',
              you.get_colored_name(),
              '의 허벅지에 앉은 ',
              urara.get_colored_name(),
              '은(는) 뜻밖일 정도로 응석을 부리며, 마음 놓고 ',
              you.get_colored_name(),
              '의 몸에 꼭 붙는다.',
            ]);
          },
          () => {
            urara.say(
              `다들 ${self_call}이(가) 달리는 걸 보면 웃음이 난대. 지금 ${callname}은(는) 처음 만났을 때의 희망을 제대로 찾았어?`,
            );
            era.print([
              '이전보다 부쩍 어른스러워진 미소를 지으며 ',
              urara.get_colored_name(),
              '은(는) 기대하는 표정으로 ',
              you.get_colored_name(),
              '의 곁에 몸을 기댄다.',
            ]);
          },
          () => {
            urara.say(
              `미래의 가족이나 아이들…… ${self_call}, 그런 걸 기대하면 안 되는 걸까? 그야 ${callname}도…… `,
            );
            era.print([
              '앞뒤가 맞지 않는 이야기를 하는 작은 ',
              urara.uma_sex_title,
              '의 얼굴에 조금 근심이 어린 것 같다.',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `담당으로 만나지 않았어도 괜찮아. 이렇게 함께 있는 ${callname}을(를) 믿고 싶어. 우리 사이는 아직…… TV 대사지만, ${self_call}, 연기하는 거 아니야. ${callname}은(는) 어떻게 생각해?`,
            );
            era.print([
              '연기도 거짓말도 아닌 ',
              urara.get_colored_name(),
              '의 미소에는 한 사람을 향한 사랑만 담겨 있다.',
            ]);
          },
          () => {
            urara.say(
              `처음엔 모두를 웃게 해 주고 싶어서 달렸는데, 지금은 한 사람을 위해 달리는 것도 나쁘지 않다고 생각해…… 그래도 ${callname}이(가) 또 지치면 ${self_call}、${callname} 한 사람만의 천사가 되어도 괜찮아!`,
            );
            era.print([
              '아내처럼 ',
              you.get_colored_name(),
              '의 팔을 붙잡은 작은 담당은 또 무심코 한 사람만을 위한 속마음을 털어놓는다.',
            ]);
          },
          () => {
            urara.say(
              `${self_call}、${callname}을(를) 독차지하고 싶어! ${callname}의 마음이 ${self_call}만의 것이 아니라는 걸 알아도 똑같아. 오늘도 똑같아. 그러니까 ${callname}이(가) 거절해도 ${self_call}은(는) 포기하지 않을 거야!`,
            );
            era.print([
              '눈부신 미소로 보는 이를 혼란스럽게 하는 독점욕을 드러내지만, ',
              urara.get_colored_name(),
              '의 벚꽃빛 눈동자에는 웃음기가 조금도 없다.',
            ]);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {boolean} awake ウララが起きているか
   */
  select(urara, you, callname, self_call, high_relation, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      if (era.get('base:52:体力') < 0.4 * era.get('maxbase:52:体力')) {
        buffer.push(() => {
          urara.say(`으아아……${callname}、${self_call}……이제 못 움직이겠어……`);
          era.print([
            '바닥에 드러누운 ',
            urara.get_colored_name(),
            '은(는) 거의 움직이지 못한다.',
          ]);
        });
        if (love > 0) {
          buffer.push(() => {
            urara.say('체력, 체력이 날아가 버렸어…… 안 돼……');
            era.print([
              '엎드린 ',
              urara.get_colored_name(),
              '이(가) 기운 없이 크게 숨을 내쉰다.',
            ]);
          });
        }
        if (love >= 25) {
          buffer.push(() => {
            urara.say('지지 않아…… 지지 않아……');
            era.print([
              urara.get_colored_name(),
              '은(는) 몇 번이나 몸을 일으키려 하지만 번번이 실패한다.',
            ]);
          });
        }
        if (love >= 50) {
          buffer.push(() => {
            urara.say(`트, 트레이너…… 한 번만 더 당겨 줘……`);
            era.print([
              '바닥에 주저앉은 ',
              urara.get_colored_name(),
              '은(는) 얼굴을 조금 붉히며 ',
              you.get_colored_name(),
              '에게 손을 뻗어 도움을 청한다.',
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(`조금만 쉬게 해 줘…… 조금만 쉬면 돼! 하아……`);
            era.print([
              '바닥에 주저앉을 만큼 지쳤는데도 ',
              urara.get_colored_name(),
              '은(는) 여전히 일어서려고 한다.',
            ]);
          });
        }
        if (love >= 90) {
          buffer.push(() => {
            urara.say(`나, 나, 아직 할 수 있어……`);
            era.print([
              '귀를 쫑긋 세우고 ',
              you.get_colored_name(),
              '의 몸에 의지한 채 ',
              urara.get_colored_name(),
              '은(는) 쓰러지지 않으려고 필사적으로 버틴다.',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `후우…… 후우…… 괜찮아!${callname}이(가) 있어 주면 아직 힘낼 수 있어……`,
            );
            era.print([
              '서 있는 것조차 버거우면서도 ',
              urara.get_colored_name(),
              '은(는) 어떻게든 몸을 지탱한다.',
            ]);
          });
        }
      } else if (high_relation) {
        buffer.push(
          () => {
            urara.say(
              '내가 먼저 나왔는데 왜 다들 우라라보다 먼저 도착했어? 신기하네!',
            );
            era.print([
              '지각했는데도 ',
              urara.get_colored_name(),
              '은(는) 여전히 즐거워 보인다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}! 오늘은 딱 맞춰서 왔어! 전보다 빨리 달렸나 봐!`,
            );
            era.print([
              '간신히 시간에 맞췄을 뿐인데도 ',
              urara.get_colored_name(),
              '은(는) 무척 만족스러워한다.',
            ]);
          },
          () => {
            urara.say(
              `여기야, ${callname}! 빨리 와! 오늘도 ${callname}한테 하고 싶은 이야기가 잔뜩 있단 말이야!`,
            );
            era.print([
              '',
              you.name,
              '하고 함께 달려온 ',
              urara.get_colored_name(),
              '은(는) 웃으며 ',
              you.name,
              '에게 손을 흔든다.',
            ]);
          },
        );
    if (love >= 50) {
      buffer.push(() => {
        urara.say(
          `${callname}……윽……엑? ${callname}! 오, 오늘도 같이 힘내자!`,
        );
        era.print([
          urara.get_colored_name(),
          '은(는) 소곤소곤 무언가를 하고 있었는지 ',
          you.get_colored_name(),
          `이(가) ${urara.sex}의 뒤에 와서야 겨우 얼굴을 붉히며 알아차렸다.`,
        ]);
      });
    }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `${callname}을(를) 만나서 다행이야! 이대로 쭉 계속되면 좋겠다…… 아!${callname}! 오늘은 뭐 해?`,
            );
            era.print([
              '평소보다 일찍 온 ',
              urara.get_colored_name(),
              '은(는) 기쁜 듯 ',
              you.get_colored_name(),
              '의 곁으로 다가온다.',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `${callname}을(를) 빨리 보고 싶어서 오늘도 일찍 일어났어!${self_call}을(를) 보면 ${callname}은(는) 행복해?`,
            );
            era.print([
              '오랫동안 기다리고 있던 ',
              urara.get_colored_name(),
              '은(는) 꼬리를 흔들며 행복한 미소를 짓는다.',
            ]);
          });
        }
      } else {
        buffer.push(
          () => {
            urara.say(
              `미안해, ${callname}. 오늘도 ${self_call}, 늦어 버렸어……`,
            );
            era.print([
              '지각했다고 화낼 생각은 없었는데도 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              ' 앞에서 귀를 움츠린다.',
            ]);
          },
          () => {
            urara.say(`시간 맞췄어! 아, ${callname}, 좋은 아침……`);
            era.print([
              '숨을 헐떡이며 달려온 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '을(를) 보더니 어째서인지 조금 물러선다.',
            ]);
          },
        );
        if (love >= 50) {
          buffer.push(() => {
            urara.say(
              `${callname}! ${self_call} 잠깐…… 안 돼, ${callname}에게 폐 끼치면 안 돼! 엑…… 그러니까 정말 아무것도 아니야?`,
            );
            era.print([
              '',
              you.get_colored_name(),
              '에게 등을 돌리고 있을 때 ',
              urara.get_colored_name(),
              `은(는) 무언가 하고 있었던 모양이지만, ${urara.sex}은(는) 계속 인정하지 않고 있다.`,
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `${self_call}, 왜 그럴까…… 아, ${callname}이(가) 곧 올 거야. 서둘러 준비해야지……!`,
            );
            era.print([
              '일찍 와 있던 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '을(를) 보자 서둘러 일어나, 기운을 내서 ',
              you.get_colored_name(),
              '에게 웃어 보인다.',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `${callname}! 오늘은, 그……${self_call}한테 조금 더 다정하게 대해 줄래? 조금만 그래도 돼!`,
            );
            era.print([
              '아직 조금 주눅이 들어 있지만 ',
              you.get_colored_name(),
              '의 뒤를 따라가는 ',
              urara.get_colored_name(),
              '은(는) 웃으며 ',
              you.get_colored_name(),
              '의 옷자락을 붙잡고 있다.',
            ]);
          });
        }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P') ||
      era.get('base:52:性欲') >= lust_border.absent_mind
    ) {
      buffer.push(() => {
        urara.say('……으응, 아……');
        era.print([
          '몸은 진정되지 않는데 일어나지 못하고 ',
          urara.get_colored_name(),
          '은(는) 잠든 채 얼굴을 붉히며 달콤한 목소리를 흘리고 있다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          urara.say('에헤헤…… 당근……');
          era.print([
            '작게 잠꼬대를 하며 ',
            urara.get_colored_name(),
            '은(는) 살며시 몸을 뒤척인다.',
          ]);
        },
        () => {
          urara.say('……');
          era.print([
            '작은 숨소리만 내며 오늘 푹 잠든 ',
            urara.get_colored_name(),
            '은(는) 뜻밖일 정도로 조용하다.',
          ]);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   */
  async office_study(urara, you, callname, call_61) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '으으…… 이 산수 문제, 아직도 모르겠어!',
          callname,
          ', 한 번만 더 가르쳐 줄래?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 난처한 얼굴로 머리를 감싸 쥐고 책상에 엎드린다. 공부할 기력은 거의 남아 있지 않다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '사실은 나도 잘하는 과목이 있어!',
          call_61,
          '도 다른 과목도 이러면 좋겠다고 했어!',
        ]);
        await era.printAndWait([
          '의기양양한 ',
          urara.get_colored_name(),
          '이지만, 그건 칭찬이 아닌 것 같다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '영어…… 단어는 외웠는데 문법이 어려워……',
          callname,
          ', 조금만 더 도와줘──',
        ]);
        await era.printAndWait([
          '영어 숙제에 항복한 ',
          urara.get_colored_name(),
          '을(를) 보고 ',
          you.get_colored_name(),
          '도 어쩔 수 없이 ',
          urara.sex,
          '하고 교과서를 다시 복습한다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '가까워……',
          callname,
          '이(가) 바로 곁에……아! 미안해요! 집중해야지…… 우우……',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 두 다리 사이에 파고든 ',
          urara.get_colored_name(),
          '은(는) 여전히 안절부절못하고 있어서, 오늘 보충 수업도 이상한 방향으로 흘러가기 시작했다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '공부가 중요하다는 건 알지만, 그래도 달리는 게 더 재미있어! 그래도 ',
          callname,
          '이(가) 있어 주면 어려운 문제도 머리에 쏙 들어와!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 곁에 기대어 앉은 ',
          urara.get_colored_name(),
          '은(는) 평소보다 공부할 의욕이 나는 모양이다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '! 다음번에 좋은 점수를 받으면! ……특별한 보상, 기대해도 돼?',
        ]);
        await era.printAndWait([
          '받아들여도 상관 없을 것 같았지만 ',
          urara.get_colored_name(),
          '의 붉어진 얼굴과 공허한 눈을 보고 ',
          you.get_colored_name(),
          '은(는) 이 폭탄을 받아들여야 할지 망설이기 시작했다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_prepare(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '응응! 그때가 되면 여느 때처럼 『우라라~』 하게 튀어나가면 되는 거지!',
        );
        await era.printAndWait(
          '화이트보드 위의 주의사항을 보며 고개를 갸웃거리는 꼬마 담당의 이해력은 여전히 참으로 「한결같다」.',
        );
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 나도 같이 편자 박는 거 도울래! 응! 손가락은 안 때릴 거야!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 걱정 어린 시선 속에서, ',
          urara.get_colored_name(),
          '는 아슬아슬하게 자신의 편자를 박는 작업을 완수했다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '에? 이번엔 이렇게 달리는구나…… 이렇게만 달리면 1착을 할 수 있다는 거지! 알았어!',
        );
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '만 보면, ',
          urara.sex,
          '의 전술 수행에는 늘 빈틈이 있지만, ',
          you.get_colored_name(),
          '은(는) 이번의 ',
          urara.sex,
          '이라면 괜찮을지도 모른다고 생각한다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '그렇구나…… 그럼 다음에 또 이기면, ',
          callname,
          ', 우라라와 함께…… 아, 아무것도 아니야!',
        ]);
        await era.printAndWait([
          '자신의 입에서 공격적인 욕망이 흘러나올 뻔했다는 사실을 방금 깨달은 듯, ',
          urara.get_colored_name(),
          '는 당황하며 시선을 회피했다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '이제 더 이상 『져도 상관없는 우라라』가 아니야! 레이스는 힘들겠지만, ',
          callname,
          '를 위해서라도 우라라는 이제 지고 싶지 않아!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 진지하게 준비를 하며, 평소에는 보기 드문 투지를 드러냈다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '알고 있어! 어떤 레이스든 ',
          callname,
          '이(가) 우라라만 바라보게 할게!',
        ]);
        await urara.say_and_wait([
          '그러니까 우라라한테 더 푹 빠져 줄래?',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '자그마한 분홍빛 우마무스메에게 어울리지 않는 위압감을 풍기며 ',
          you.get_colored_name(),
          '에게 꼭 붙은 ',
          urara.get_colored_name(),
          '의 벚꽃빛 눈동자가 새빨갛게 물들어 가는 것 같다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} awake ウララが起きているか
   */
  async talk(urara, you, callname, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      switch (era.get('cflag:52:干劲')) {
        case 2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '! 오늘 우라라, 엄청 대단해! 딱 느껴져!',
              ]),
            () =>
              urara.say_and_wait(
                '지금 우라라는 슈퍼 우라라야! 컨디션이 엄청 좋거든!',
              ),
            () =>
              urara.say_and_wait(
                '매일 이렇게 즐거우면 레이스에서 꼭 1착 할 수 있어!',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '에헤헤~',
                callname,
                '이(가) 있어 주면 뭐든 할 수 있을 것 같아!',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '잘 봐, ',
                callname,
                '! 지금이라면 하루 종일 달려도 지지 않아!',
              ]),
            );
          }
          break;
        case 1:
          buffer.push(
            () =>
              urara.say_and_wait([
                "'우라라~' 하고 갈게!",
                callname,
                '도 같이 힘내자!',
              ]),
            () =>
              urara.say_and_wait(
                '좋아! 오늘 일정도 제대로 해낼게! 준비 운동 시작이야!',
              ),
            () => urara.say_and_wait('몸이 새처럼 가벼워! 지금 뭐라도 하자!'),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '',
                callname,
                '하고 함께라면 우라라는 최상의 컨디션이야!',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '오늘 일찍 끝나면 ',
                callname,
                '하고 놀아도 돼?',
              ]),
            );
          }
          break;
        case 0:
          buffer.push(
            () =>
              urara.say_and_wait(
                '열심히 하면 꼭 할 수 있어! 다음엔 1착 하기 위해서!',
              ),
            () =>
              urara.say_and_wait([
                '재미있는 연습 하고 싶어.',
                callname,
                ', 그런 거 없어──?',
              ]),
            () => urara.say_and_wait([callname, '! 오늘 일정, 지금 알려 줘!']),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait('끝나면 맛있는 거 먹으러 가자!'),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('오늘도 지켜봐 줄 거야? 응! 알고 있어!'),
            );
          }
          break;
        case -1:
          buffer.push(
            () =>
              urara.say_and_wait(
                '아우…… 그래도 트레이닝은 중요하니까 괜찮아. 힘낼게!',
              ),
            () =>
              urara.say_and_wait(
                '응…… 조금 기운이 없지만, 즐거운 일을 떠올려 보는 거야……!',
              ),
            () =>
              urara.say_and_wait(
                '응? 우라라 기운 넘쳐! 귀랑 꼬리만 축 처진 거야……!',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '',
                callname,
                '이(가) 지켜봐 주면 괜찮겠지……!',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('기운은 없지만, 떼쓰면 안 돼……!'),
            );
          }
          break;
        case -2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '……오늘…… 오늘은 쉬는 대신 트레이닝해도 돼?',
              ]),
            () => urara.say_and_wait('즐거울 텐데도 즐거워지지 않아……'),
            () => urara.say_and_wait('몸이 무거워. 힘이 안 나……'),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                ', 간식 가져왔어? 달콤한 게 좀 필요해……',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                ', 의욕이 또 어디로 가 버렸나 봐. 찾아 줄래……',
              ]),
            );
          }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P')
    ) {
buffer.push(
  () =>
    era.printAndWait([
      '약의 영향으로, 잠들어 있는 ',
      urara.get_colored_name(),
      '의 숨결이 점점 달콤하고 색기 있게 변해간다.',
    ]),
  () =>
    era.printAndWait([
      '비열한 약에 굴복하여 의식을 잃은 ',
      urara.teen_sex_title,
      '은(는) 지금은 쓰임받기를 기다리는 육인형이다.',
    ]),
  () =>
    era.printAndWait([
      '손발은 꿈속에서 저항하듯 몸을 뒤틀고 있지만, 작은 ',
      urara.uma_sex_title,
      '의 가랑이는 벌써 솔직하게 축축하게 젖어 있다.',
    ]),
);

    } else {
      buffer.push(
        () =>
          era.printAndWait([
            '작게 숨을 내쉬며 작은 ',
            urara.uma_sex_title,
            '은(는) 잠든 채 몸을 뒤척인다.',
          ]),
        () =>
          era.printAndWait([
            '',
            you.get_colored_name(),
            '의 곁에 편안히 기댄 ',
            urara.get_colored_name(),
            '은(는) 안심하고 잠들어 있다.',
          ]),
        () =>
          era.printAndWait([
            '잠든 ',
            urara.get_colored_name(),
            '은(는) 기쁜 표정이다. 좋은 꿈을 꾸는 걸까?',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   */
  async office_gift(urara, you, callname, call_47) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '응?',
          callname,
          '이(가) 선물 주는 거야? 고마워!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 꼬리를 흔들며 기쁜 듯 ',
          you.get_colored_name(),
          '의 선물을 받는다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '이(가) 선물을 주니까, 마침 우라라도 맛있는 걸 ',
          callname,
          '하고 나눠 먹고 싶어! 에헤헤~',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 웃으며 당근을 ',
          you.get_colored_name(),
          '이(가) 손에 든 선물과 맞바꾼다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '좋아!',
          callname,
          '의 선물에 보답하려고 오늘 우라라는 더 힘낼 거야!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 선물을 받자 ',
          urara.get_colored_name(),
          '은(는) 한층 더 기운이 났다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '',
          callname,
          ', 선물 고마워! 우라라도 답례 준비해야지! 응? 괜찮아?',
        ]);
        await era.printAndWait([
          '사실 ',
          urara.get_colored_name(),
          '은(는) 답례를 거의 기억하지 못하지만, ',
          urara.sex,
          '의 웃는 얼굴을 볼 수 있다면 답례 따위는 아무래도 좋다.',
        ]);
      },
    );
    if (love > 0) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            call_47,
            '이(가) 선물마다 담긴 뜻이 다르다고 했어…… 그럼 ',
            callname,
            '의 선물은…… 역시 우라라가 더 빨리 달렸으면 해서 주는 거겠지!',
          ]);
          await era.printAndWait([
            '변함없이 ',
            urara.get_colored_name(),
            '다운 대답이지만, 마지막에 ',
            urara.sex,
            '은(는) 뭔가 다른 생각을 떠올린 것 같다.',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '비싼 건 아니라고? 비싸든 싸든 우라라는 소중히 할 거야! 이건 ',
            callname,
            '이(가) 준 선물이니까!',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '은(는) 부드럽게 웃으며 선물을 받는다. ',
            urara.sex,
            '이(가) 전보다 조금 어른스러워진 듯하다.',
          ]);
        },
      );
    }
    if (love >= 50) {
      buffer.push(
async () => {
  await urara.say_and_wait([
    '잘 모르겠지만 ',
    callname,
    '의 선물을 받으면 몸이 포근포근해져! 왜 그럴까……',
  ]);
  await era.printAndWait([
    '선물의 이야기를 하고 있는데, 얼굴을 붉힌 ',
    urara.get_colored_name(),
    '은(는) 열기 어린 눈으로 ',
    you.get_colored_name(),
    '의 눈을 계속 바라보고 있다.',
  ]);
},

        async () => {
          await urara.say_and_wait([
            '고마워, ',
            callname,
            '! 그런데 이거…… 이 선물에도 ',
            callname,
            '의 냄새가 배는 걸까……?',
          ]);
          await era.printAndWait([
            '손에 든 선물을 바라보는 ',
            urara.get_colored_name(),
            '에게서 어딘가 묘한 분위기가 감돌기 시작한다.',
          ]);
        },
      );
    }
    if (love >= 75) {
      buffer.push(
        async () => {
          await urara.say_and_wait(
            '오늘은 특별한 날이야? 매일 특별한 날이면 좋겠다!',
          );
          await urara.say_and_wait([
            '특별하지 않아도 괜찮아! 우라라한테는 ',
            callname,
            '하고 함께하는 매일이 특별하니까!',
          ]);
          await era.printAndWait([
            '선물을 끌어안고 ',
            you.get_colored_name(),
            '에게 꼭 붙어서, 꼬리를 살며시 ',
            you.get_colored_name(),
            '의 다리에 감으며 작은 담당이 기쁘게 말한다.',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '선물……',
            callname,
            "이(가) 답례는 필요 없다면, 그럼…… 먼저 우라라의 '이거' 받아!",
          ]);
          await era.printAndWait([
            '귀를 쫑긋 세운 ',
            urara.get_colored_name(),
            '은(는) 발돋움을 하더니, ',
            you.get_colored_name(),
            "이(가) 눈치채기도 전에 '쪽' 하고 ",
            you.get_colored_name(),
            '의 뺨에 입을 맞추고는 수줍게 물러났다.',
          ]);
        },
      );
    }
    if (love >= 100) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            '',
            callname,
            ', 고마워!',
            callname,
            '은 는 다음에 1착하기를 원해? 아니면 지금의 우라라를 꼭 껴안고 싶은 거야?',
          ]);
          await urara.say_and_wait([
            '우라라 입장에서는, ',
            callname,
            ', 둘 다 추천한다구?',
          ]);
          await era.printAndWait([
            '천진난만한 말투로 신경을 자극하는 말을 내뱉으며 ',
            urara.get_colored_name(),
            '의 욕심내는 벚꽃 빛 눈동자에 ',
            you.get_colored_name(),
            '의 모습이 흔들리고 있다……',
          ]);
        },
async () => {
  await urara.say_and_wait([
    '……',
    callname,
    ', 지금뿐만 아니라 우라라의 앞으로의 보답도, 꼭 기대해 줘?',
  ]);
  await era.printAndWait([
    '선물을 받은 ',
    urara.get_colored_name(),
    '은(는) 조용히 손을 아랫배 위에 포개고, 얼굴을 붉히며 ',
    you.get_colored_name(),
    '에게 모호한 질문을 던진다.',
  ]);
  await era.printAndWait([
    '작은 ',
    urara.uma_sex_title,
    '이(가) 답을 바라고 있는 게 아니라는 걸 알고 있기에 ',
    you.get_colored_name(),
    '은(는) 어쩔 수 없이 일어날 수 있는 미래를 받아들일 각오를 다진다.',
  ]);
},

      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_cook(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '식재료는 다 넣었어, 우라라는 밥이 잘 됐는지 확인하러 갈게!',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '는 말을 마치자마자 전기밥솥이 있는 곳으로 달려갔다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 나도 채소 써는 걸 도울게! 에헤? 안 된다구?',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '의 불안한 칼질을 떠올리며 ',
          you.get_colored_name(),
          '은(는) 망설임 없이 작은 ',
          urara.uma_sex_title,
          '의 도움을 거절했다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '먹고 싶은 거? 걱정하지 마! 비록 맛없는 게 좀 섞여 있어도, 우라라는 편식하지 않으니까!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 질문에 대한 ',
          urara.get_colored_name(),
          '의 대답은 여느 때처럼 안심이 된다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait('에헤헤~ 실수로 쏟아버렸어…… 아음~');
        await era.printAndWait([
          '전혀 개의치 않고 작은 혀를 내밀어, ',
          urara.get_colored_name(),
          '는 마치 새끼 고양이처럼 소스가 묻은 손가락을 핥았다. 혀와 손가락 사이로 가느다란 은사가 끊임없이 이어진다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '나중에 어른이 되어서 우라라와 ',
          callname,
          '가 나란히 서게 되면, 그때 우린 분명 부부 같겠지!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '과(와) 함께 손안의 고기 패티를 다져가며, ',
          urara.get_colored_name(),
          '는 어쩌면 그리 멀지 않았을지도 모를 미래를 상상하고 있다.',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '이렇게 하면 ',
          callname,
          '에게 우라라의 냄새가 배어든다고 들었어. 하지만 ',
          callname,
          '가 나중에 알게 되면 우라라를 용서해줄까……?',
        ]);
        await era.printAndWait([
          '억누를 수 없는 뜨거운 마음을 품은 채, 작은 ',
          urara.uma_sex_title,
          '은(는) 떨며 혀를 내밀고, 자신의 침을 살며시',
          you.get_colored_name(),
          '의 음료에 섞었다……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_rest(urara, you, callname) {
    const love = era.get('love:52');
    const buffer = [
      async () => {
        await urara.say_and_wait([
          callname,
          '! 선반 위에 있는 과자 꺼내 줄래? 응! 고마워, ',
          callname,
          '! 꾹 참을게!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          "의 '적당히 먹으라'는 주의를 받아들인 뒤 ",
          urara.get_colored_name(),
          '은(는) 기쁜 듯 ',
          you.get_colored_name(),
          '의 손에서 과자 상자를 받는다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '후에~ 힘들다…… 아! 고마워, ',
          callname,
          '! 에헤헤~ 시원해!',
        ]);
        await era.printAndWait([
          '수건을 머리에 얹고 막 단련을 끝낸 ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게서 스포츠 드링크를 받는다.',
        ]);
      },
      async () => {
        await urara.say_and_wait("오늘의 기분도~ '우라라'~");
        await era.printAndWait([
          '직접 만든 노래를 흥얼거리며 ',
          urara.get_colored_name(),
          '은(는) 즐거운 듯 방 안의 화이트보드에 유성펜으로 무언가를 그리고 있다.',
        ]);
      },
    ];
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '흐아앗~ 미안해…… 으으…… 우라라, 목소리 낮출 테니까……',
        );
        await era.printAndWait([
          '그저 다리를 마사지해 주고 있을 뿐인데,',
          urara.get_colored_name(),
          '는 몇 번이고 얼굴이 붉어질 만한 신음 소리를 내뱉고 만다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '다들 레이스하는 영상을 보려고? 응! 그럼 우라라도 ',
          callname,
          '하고 같이 볼래!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 무릎 위에 앉은 ',
          urara.get_colored_name(),
          '은(는) 얌전히 ',
          you.get_colored_name(),
          '을(를) 대신해 트레이너실의 TV를 켰다.',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '에헤헤……',
          callname,
          ', 언제까지나, 쭉 서로를 기억하자……',
        ]);
        await era.printAndWait([
          '숨이 답답해서 눈을 뜨자 ',
          you.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '의 몸 위에 엎드려 작은 목소리로 무언가를 속삭이고 있는 걸 발견한다……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_game(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '으으…… 왜 앞지르지 못하는 걸까…… 다시 한번 더! 이번엔 꼭 해낼 거야!',
        );
        await era.printAndWait([
          '레이싱 게임에서 몇 번이나 연속해서 패배한 후에도, ',
          urara.get_colored_name(),
          '는 포기하지 않고 다시 컨트롤러를 꽉 쥐었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '흥흥!',
          callname,
          ', 이번엔 이길 방법을 찾았어! 우라라의 필살기, 잘 봐──',
        ]);
        await era.printAndWait([
          '격투 게임에서 ',
          you.get_colored_name(),
          '에게 처참하게 패배하기 직전까지, ',
          urara.get_colored_name(),
          '는 이렇게 자신만만하게 웃으며 말했었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '오, 오늘도 계속 이걸로 놀자! 헤? 우, 우라라는 무섭지 않다구!',
        );
        await era.printAndWait([
          '목소리는 파르르 떨리고 있지만, ',
          urara.get_colored_name(),
          '는 용기를 내어 예전에 끝까지 깨지 못했던 공포 게임을 꺼내 들었다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '우, 우라라는 모르는 일이야? 이 게임…… 디지땅이 빌려준 거라구?',
        ]);
        await era.printAndWait([
          '자동으로 재생되는 부끄러운 화면에 시선을 빼앗기지 않으려 애쓰며, ',
          urara.get_colored_name(),
          '는 얼굴을 붉힌 채 침묵을 지키는 ',
          you.get_colored_name(),
          '에게 더듬거리며 변명하고 있다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(() =>
        urara
          .say_and_wait([
            '게임할 때는 집중해야지…… 얏! 하하~ ',
            callname,
            ', ',
            callname,
            '~ 간지러워! 우라라가 잘못했어~',
          ])
          .then(() =>
            era.printAndWait([
              '간지럽히기 같은 장외 전술로 끊임없이 방해하는 ',
              urara.get_colored_name(),
              '에 맞서, ',
              you.get_colored_name(),
              '은(는) 결국 컨트롤러를 내려놓고 담당과 함께 웃으며 뒹굴기 시작했다.',
            ]),
          ),
      );
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '는 뭐 하고 싶어? 우라라는 뭐든지 좋아! ',
          callname,
          '와 함께 노는 거라면……',
        ]);
        await era.printAndWait([
          '천진난만한 미소를 지은 ',
          urara.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 품에 파고들어, 귓가에 나직이 숨결을 내뱉는다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          ', 오늘 나무 구멍에 또 뭔가 달라진 게 있나 봐!',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '의 말을 듣고 ',
          you.get_colored_name(),
          '도 나무 구멍 안을 들여다본다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '다들 나무 구멍한테 안 좋은 기분을 가져가 달라고 하지만, 좋은 일도 나눠 주면 좋은 일이 생길지도 몰라!',
        );
        await era.printAndWait([
          '어린아이의 상상 같지만, 그게 바로 ',
          urara.get_colored_name(),
          '다운 축복이겠지.',
        ]);
      },
    );
    if (love >= 25) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '! 같이 나무 구멍한테 즐거운 일을 이야기해 주자! 나무 구멍도 기뻐할 거야!',
        ]);
        await era.printAndWait([
          '먼저 중정으로 달려가 나무 구멍 옆에서 ',
          you.get_colored_name(),
          '을(를) 기다리던 ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게 웃으며 손을 흔든다.',
        ]);
      });
    }
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '소문에 따르면, 너무 많이 쌓인 욕망도 나무 구멍이 가져가 준다던데... 하지만 그렇게 되면 나무 구멍도 불쌍하잖아...',
        );
        await era.printAndWait([
          '입으로는 그렇게 말하면서도, ',
          urara.get_colored_name(),
          '의 시선은 가여운 말라버린 나무 구멍에서 떨어지지 않는다. ',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '나무 구멍아!',
          callname,
          '한테 더 사랑받을 방법을 알려 줄래? 에헤헤~ 역시 나무 구멍도 모르는구나!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 망설임 없이 나무 구멍에 그런 질문을 던졌다. 이 작은 ',
          urara.uma_sex_title,
          '은(는) 이미 자신만의 답을 갖고 있을지도 모른다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '제물을 바치면 원하는 사람이 영원히 자기만 바라보게 된대……',
        );
        await urara.say_and_wait(
          '생각해 본 적은 있지만…… 안 돼! 그런 짓을 하면 나무 구멍도 즐겁지 않을 거야!',
        );
        await era.printAndWait([
          '조금 무섭기는 하지만, ',
          urara.get_colored_name(),
          '이(가) 여기서 거짓말을 할 리 없다고 생각하면, 그러지 않기로 한 ',
          urara.sex,
          '을(를) 보고 역시 안심할 수 있다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_20 ハルウララのセイウンスカイへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
   */
  async s_a_dating(urara, you, callname, call_20, call_30, call_56) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '사실 ',
          call_20,
          ', 여기 나무 아래에서 자주 낮잠 자! 으음── 오늘은 없는 것 같네!',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '의 말대로 나무 아래에서 햇볕을 쬐는 고양이들 사이에, 낯익은 회색 머리 ',
          urara.uma_sex_title,
          '의 모습은 없다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_56,
          '은(는) 저기서 무료로 점을 봐 주는 노점을 자주 열어. 그래도 너무 자주 하면 선생님들한테 쫓겨나!',
        ]);
        await era.printAndWait([
          '지금 작은 ',
          urara.uma_sex_title,
          '이(가) 가리킨 중정 한쪽은 텅 비어 있다. 후쿠키타루, ',
          urara.sex,
          '은(는) 또 쫓겨난 모양이다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '은(는) 그림책 좋아해?',
          call_30,
          '한테 새 그림책을 받았어!',
        ]);
        await era.printAndWait([
          '중정의 벤치에 앉아 ',
          urara.get_colored_name(),
          '은(는) 미리 가져온 그림책을 웃으며 두 사람 사이에 펼친다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '햇볕을 쬔 뒤의 ',
          callname,
          ' 냄새, 정말 좋은 냄새야…… 진짜라니까!',
        ]);
        await urara.say_and_wait([
          '하지만 우라라 몸에서도 좋은 냄새가 나! ',
          callname,
          ' 도 한번 맡아봐……!',
        ]);
        await era.printAndWait([
          '얼굴을 붉힌 채 미소 지으며,',
          urara.get_colored_name(),
          '는 ',
          urara.uma_sex_title,
          '의 힘으로 ',
          you.get_colored_name(),
          '을(를) ',
          urara.teen_sex_title,
          '의 체향으로 가득한 가슴으로 끌어당긴다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '에헤헤~',
          callname,
          '하고 중정을 산책하면 데이트하는 것 같아!',
        ]);
        await urara.say_and_wait([
          '응? 이게 데이트야? 그럼…… 우라라는 매일 ',
          callname,
          '하고 데이트하는 거야?',
        ]);
        await era.printAndWait([
          '데이트는 그렇게 세는 게 아닐 텐데. 그래도 ',
          urara.get_colored_name(),
          '하고 함께하는 시간은 언제나 즐겁다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '잔디밭에 같이 누우면 마음이 편해져! 햇볕을 쬐니까 졸려!',
        );
        await urara.say_and_wait([
          callname,
          '! 안아 줄래? 우라라 여기── 아직 비어 있어!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 곁에 누운 ',
          urara.get_colored_name(),
          '은(는) 부드러운 두 팔을 다정하게 벌리고, 미소 지으며 ',
          you.get_colored_name(),
          '을(를) 부른다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   * @param {PrintedSpan} call_32 ハルウララのアグネスタキオンへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   */
  async school_rooftop(
    urara,
    you,
    callname,
    call_15,
    call_32,
    call_47,
    call_61,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          ', 봐 봐! 오늘 도시락에는 맛있는 채소가 들어 있어! 응!',
          call_61,
          '이(가) 만들어 줬어!',
        ]);
        await era.printAndWait([
          '겉은 조금 탔지만 의외로 괜찮은 도시락을 보며 ',
          you.get_colored_name(),
          '은(는) 담당의 엄마 같은 룸메이트에게 마음속으로 감사를 전한다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_15,
          '은(는) 여기서 자주 노래 연습을 해. 하지만 ',
          urara.sex,
          '은(는) 남한테 방해되는 걸 싫어해서 점심시간에는 안 와!',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '의 말대로 다들 착한 아이들이다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '도시락도 맛있고 공기도 맑아! 그런데…… 왜 옥상에서 도시락을 먹는 거였지?',
        );
        await era.printAndWait(
          '그러고 보니 왜 옥상에서 도시락을 먹는 거였더라?',
        );
        await era.printAndWait([
          '동시에 같은 의문을 품은 ',
          you.get_colored_name(),
          '하고 ',
          urara.get_colored_name(),
          '은(는) 묘한 생각에 잠긴다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '들었는데,',
          call_32,
          ' ',
          urara.sex,
          '가 특별한 조미료를 팔고 있다던데…… 그거, 어떤 맛일까?',
        ]);
        await era.printAndWait([
          '특별한 화제를 작은 목소리로 이야기하는 ',
          urara.get_colored_name(),
          '는, 왠지 무언가를 꿈꾸는 듯한 황홀한 표정을 짓는다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '에헤헤~ 오늘 도시락은 우라라가 만들었어! 같이 먹자, ',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '행복하게 웃으며 ',
          urara.get_colored_name(),
          '은(는) 두 사람 몫의 도시락을 펼치고, 풋내 나지만 사랑이 듬뿍 담긴 반찬을 ',
          you.get_colored_name(),
          ' 앞에 늘어놓는다.',
        ]);
        await era.printAndWait(
          '반창고를 감은 담당의 손가락이 건네준 음식을 삼키자, 담당의 미소를 닮은 행복감이 가슴에도 퍼진다.',
        );
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          call_47,
          '이(가) 그랬어. 세상에는 사랑의 묘약이라는 약이 있어서, 두 사람이 영원히 서로 사랑하게 해 준대!',
        ]);
        await urara.say_and_wait([
          '그런 약을…… 도시락에 넣으면 맛이 달라질까?',
          callname,
          ', 먹어 줄 거야?',
        ]);
        await era.printAndWait([
          '위험한 생각을 하면서도 작은 ',
          urara.uma_sex_title,
          '은(는) 여전히 상대의 뜻을 신경 쓴다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} jpy 漁獲の売却収入
   */
  async o_r_fishing(urara, you, callname, high_relation, jpy) {
    await era.printAndWait([
      '오늘의 야외 활동을 위해, ',
      you.get_colored_name(),
      '와(과) ',
      urara.get_colored_name(),
      '은(는) 낚시 도구를 챙겨 평소 산책하던 강가로 왔다.',
    ]);
    await era.printAndWait([
      '',
      urara.get_colored_name(),
      '와(과) 오늘 놀러 나가기로 약속했지만, 설마 ',
      you.get_colored_name(),
      '이(가) ',
      urara.get_colored_name(),
      '와(과) 낚시를 하러 오게 될 줄은 몰랐다.',
    ]);
    await era.printAndWait([
      '옆에서 라이브 곡을 즐겁게 흥얼거리는 ',
      urara.get_colored_name(),
      '을(를) 보며, ',
      you.get_colored_name(),
      '은(는) 마음속으로 오늘의 ',
      urara.get_colored_name(),
      '이(가) 『작심삼일』로 끝나지 않기를 빌었다.',
    ]);
    await era.printAndWait([
      '그나저나 낚시가 ',
      urara.get_colored_name(),
      '의 인내심을 기르는 훈련이 될까?',
    ]);
    era.println();
    if (high_relation) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 습관처럼 생각했지만, 늘 그렇듯 답을 내기도 전에 ',
        urara.get_colored_name(),
        '의 목소리가 생각을 끊었다.',
      ]);
      await urara.say_and_wait([
        '앗!',
        callname,
        ', 봐! 물속의 작은 물고기, 손을 뻗으면 잡을 수 있을 것 같아!',
      ]);
      await era.printAndWait([
        '도구도 내려놓지 않은 채 강가에 쪼그려 앉은 ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 신이 나서 손가락을 꼼지락거렸다.',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 옆에서 최대한 얌전히 있었지만, 물가에 가까워지자 ',
        urara.sex,
        '의 발걸음도 눈에 띄게 가벼워졌다.',
      ]);
      await urara.say_and_wait([callname, '! 여기, 여기서 보여!']);
      await era.printAndWait([
        '흥분을 감추지 못한 작은 ',
        urara.uma_sex_title,
        '은(는) 물가에 도착하자마자 웃으며 수면 아래 물고기 그림자에 손가락을 가까이 댔다.',
      ]);
    }
    era.println();

    era.printButton('「물고기 잡겠다고 강에 뛰어들면 안 돼?」', 1);
    await era.input();

    await urara.say_and_wait('응! 오늘 우라라는 낚싯대로 제대로 낚을 거야!');
    await era.printAndWait([
      '적어도 『뛰어들지 않겠다』고 정확히 약속해 줬으면 좋겠다. 『참을게』라는 담당의 대답에 ',
      you.get_colored_name(),
      '은(는) 쓴웃음을 지으며 고개를 저을 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '준비를 마치자, ',
      you.get_colored_name(),
      '와(과) ',
      urara.get_colored_name(),
      '은(는) 함께 낚싯대를 휘둘렀다. 낚싯바늘이 포물선을 그리고, 찌는 수면 위의 작은 점이 되었다.',
    ]);
    await era.printAndWait([
      '그나저나 낚시가 ',
      urara.get_colored_name(),
      '의 인내심을 기르는 훈련이 될까? 낚싯대를 쥔 채, ',
      you.get_colored_name(),
      '은(는) 다시 습관처럼 생각하기 시작했다.',
    ]);
    era.println();
    if (jpy > 0) {
      await urara.say_and_wait([callname, '! 우라라, 또 잡았어!']);
      await era.printAndWait([
        '시간이 흐르며 양동이가 차츰 차올랐고, ',
        urara.get_colored_name(),
        '은(는) 마지막 『전리품』을 물에서 끌어 올리고 있었다.',
      ]);
      await era.printAndWait([
        '만약 ',
        urara.get_colored_name(),
        '이(가) 여기서 정말 말을 잘 듣고, 직접 강에 들어가 물고기를 맨손으로 잡지만 않았으면 더 좋았겠지만.',
      ]);
      await era.printAndWait([
        '옷이 대부분 젖은 ',
        urara.get_colored_name(),
        '와(과), ',
        urara.sex,
        '의 품에 안긴 커다란 물고기를 보고 쓴웃음을 지은 ',
        you.get_colored_name(),
        '은(는) 여느 때처럼 꾸짖을 말이 나오지 않았다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 확실히 대단하다. 하지만 마음대로 물에 들어가면 ',
        urara.uma_sex_title,
        '도 쉽게 감기에 걸린다.',
      ]);
      await era.printAndWait([
        '낚싯대를 접고, ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '의 물방울 맺힌 머리카락을 닦아 주었다. ',
        urara.get_colored_name(),
        '도 대답하려다가 귀엽게 작은 재채기를 했다.',
      ]);
      await era.printAndWait([
        '결국 이렇게 되는구나. 조금 미안해하는 ',
        urara.get_colored_name(),
        '에게 겉옷을 걸쳐 주며 웃고, ',
        you.get_colored_name(),
        '은(는) 담당과 함께 가득 찬 양동이 두 개를 들고 돌아갔다.',
      ]);
      await era.printAndWait([
        '이번에는 하마터면 감기에 걸릴 뻔한 작은 ',
        urara.uma_sex_title,
        '에게 생선국을 끓여 줘야겠다.',
      ]);
    } else {
      await urara.say_and_wait('에헤헤……대체……잡힌 걸까……');
      await era.printAndWait([
        '낚시 도구 상자와 빈 양동이 두 개를 정리한 뒤, ',
        you.get_colored_name(),
        '은(는) 띄엄띄엄 잠꼬대하는 담당을 등에 업었다.',
      ]);
      await era.printAndWait([
        '원래 참을성이 없는 ',
        urara.get_colored_name(),
        '이(가) 뭐라도 잡아 보려고 잠들 때까지 기다렸지만, 오늘의 성과는 누가 봐도 분명히 꽝이었다.',
      ]);
      await era.printAndWait([
        '모처럼 ',
        urara.get_colored_name(),
        '이(가) 진지하게 임했는데 허탕이라니 아쉽지만, 낚시란 원래 그런 것이라고 생각하면 남는 것은 약간의 무력감뿐이었다.',
      ]);
      await era.printAndWait([
        '건강검진표에는 몸무게가 조금 늘었다고 적혀 있었는데도, ',
        urara.get_colored_name(),
        '은(는) 의외로 가벼웠다.',
      ]);
      await era.printAndWait([
        '',
        urara.teen_sex_title,
        '에게는 조금 실례일지도 모를 생각을 하며, ',
        you.get_colored_name(),
        '은(는) 푹 잠든 작은 ',
        urara.get_colored_name(),
        '을(를) 업고 왔던 길을 걸었다.',
      ]);
      await era.printAndWait([
        '다만 알 수 없는 것은, ',
        urara.get_colored_name(),
        '이(가) 꿈속에서는 대체 몇 마리나 낚고 있을까 하는 것이었다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   */
  async o_r_walking(urara, you, callname, call_30) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '오늘도 여기 공기는 상쾌해! 몸이 가벼워졌어!',
          callname,
          '! 지금 달려도 돼?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 담당의 부탁을 들어주었지만, ',
          urara.get_colored_name(),
          '이(가) 넘어질 수도 있겠다는 생각에 ',
          you.get_colored_name(),
          '도 ',
          urara.get_colored_name(),
          '와(과) 함께 가볍게 뛰었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '이 근처에는 예쁜 벌레가 많아! 잡아서 ',
          callname,
          '에게 줄게……어? 안 돼?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 나눠 주려는 담당의 마음은 고마웠지만, 산책하다가 벌레를 잡다니 너무나 ',
          urara.get_colored_name(),
          '다웠다……',
        ]);
        await era.printAndWait([
          '그렇게 생각하며, ',
          you.get_colored_name(),
          '은(는) 곧바로 제지당한 담당에게 벌레 기피제를 뿌려 주었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '다들 가끔 여기 와! 역시 누군가랑 같이 오는 게 더 재밌어!',
        );
        await urara.say_and_wait(
          '신난다고 다 같이 강에 뛰어들지 말라고……? 아, 알겠어……',
        );
        await era.printAndWait([
          '여전히 덜렁거리기는 하지만, ',
          urara.get_colored_name(),
          '에게 친구들이 함께 있어 준다면 괜찮겠지.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '여기는 사람이 별로 안 오네!',
          callname,
          '와(과) 놀아도 방해받지 않겠어! 좋은 곳이다!',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 그런 건 좋지 않지만, 여기는 우라라랑 ',
          callname,
          '뿐이잖아……',
        ]);
        await era.printAndWait([
          '나무 그늘 아래에서, ',
          urara.get_colored_name(),
          '의 살짝 붉어진 뺨이 어딘가 무섭게 보이기 시작했다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '! 좀 더 가까이 와……에헤헤~ 강가에서 데이트하는 것 같아!',
          callname,
          '은(는) 어떻게 생각해?',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 대답을 기다리는 듯, ',
          urara.get_colored_name(),
          '의 해맑은 미소에 수줍은 붉은빛이 번졌다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          call_30,
          '의 책에는 강가에서 몰래 만나는 이야기가 많아! 손을 잡은 다음에 일어나는 일은……',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 잘 모르는 일들이네! 그래도 그런 걸 안 해도 우라라랑 ',
          callname,
          '은(는) 함께야!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 손을 꼭 잡고, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게 어른처럼 다정하게 웃어 보였다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 ハルウララのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_24 ハルウララのマヤノトップガンへの呼び方
   */
  async o_s_arcade(urara, teio, maya, you, callname, call_3, call_24) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait('눈이 빙빙 돌아……왜 못 지나가는 거야, 우에……');
        await era.printAndWait([
          'GAME OVER가 뜬 게임기에 엎드린 ',
          urara.get_colored_name(),
          '의 벚꽃빛 눈동자는 지금 빙글빙글 돌고 있었다.',
        ]);
        await era.printAndWait([
          '몇 번이나 용감하게 도전했지만, 지기 싫어하는 ',
          urara.get_colored_name(),
          '은(는) 결국 고난도 슈팅 게임의 어지러운 탄막에 격추되었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '격투 게임에는 늘 사람이 많아! 그래도 알 것 같아! 다들 필살기가 엄청 멋지잖아!',
        );
        await era.printAndWait([
          '격투 게임 캐릭터의 동작을 귀엽게 따라 하며, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '을(를) 게임기 앞에 앉혔다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          urara.get_colored_name(),
          '은(는) 여전히 격투 게임을 못하는 모양이다. 이번에는 어떻게 봐줄지 생각해야겠다……',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 여기 게임 디스크도 팔아! 아! 이거, ',
          call_3,
          '와(과) ',
          call_24,
          '이(가) 요즘 좋아하는 게임이야!',
        ]);
        await era.printAndWait([
          '최근 유행하는 게임을 집어 든 ',
          urara.get_colored_name(),
          '의 미소가 무시무시한 표지와 선명한 대조를 이루었다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '도 ',
          teio.get_colored_name(),
          '와(과) ',
          maya.get_colored_name(),
          '이(가) 공포물을 좋아할 거라고는 생각되지 않았다. 아마 ',
          urara.couple_title,
          '이(가) 또 소문을 곧이곧대로 믿고 덜컥 구한 것이겠지.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '저 차림, 눈을 뗄 수가 없네…… 다들 저런 걸 좋아하는 거야?',
        );
        await urara.say_and_wait([
          callname,
          '은(는), ',
          urara.get_colored_name(),
          '가 어른스러운 차림으로 어른스러운 춤을 추는 걸 보고 싶어? 만약 ',
          callname,
          '이 원한다면……',
        ]);
        await era.printAndWait([
          '댄스 게임 대기 화면에서 반복되는 아슬아슬한 댄스 영상에 시선을 빼앗긴 채,',
          urara.get_colored_name(),
          '가 ',
          you.get_colored_name(),
          '의 옷자락을 붙잡는 힘 또한 강해진다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '어떤 게임이든 역시 ',
          callname,
          '와(과) 같이 하는 게 더 재밌어!',
        ]);
        await era.printAndWait([
          '지나가는 학생들과 게임기의 불빛을 바라보며, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '와(과) 손깍지를 끼고 행복한 듯 ',
          you.get_colored_name(),
          '의 곁에 기대었다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '오늘은 그냥 평범하게 인형을 뽑자! 그냥 평범하게 뽑기만 하면 되니까!',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '은 얼굴을 붉히며 선언하고, ',
          you.get_colored_name(),
          '이(가) 진지하게 인형뽑기를 하는 도중, 갑자기 품으로 파고들어 작은 입으로 ',
          you.get_colored_name(),
          '의 목덜미를 살며시 공략한다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} has_ticket 温泉旅行券を引いたか
   */
  async o_s_drawing(urara, you, callname, has_ticket) {
    await era.printAndWait([
      '트레이너실 냉장고에 부족한 식재료를 채우려고, ',
      you.get_colored_name(),
      '와(과) ',
      urara.get_colored_name(),
      '은(는) 상점가에 장을 보러 왔다.',
    ]);
    await era.printAndWait([
      '먹을 것만 살 생각이었는데, 돌아가려는 순간 어쩐지 모여 있는 사람들에게 눈길이 끌렸다.',
    ]);
    await era.printAndWait(
      '그 분위기에 이끌린 것인지, 점점 닮아 가는 담당과 트레이너도 호흡을 맞춰 인파 속으로 들어갔다.',
    );
    await era.printAndWait(
      '손잡이를 따라 돌아가던 다각형 상자가 딱딱 소리를 내며 멈추자, 휴지만 하나 늘어난 안타까운 사람이 또 한 명 생겼다……',
    );
    await you.say_and_wait(
      '그런데 상점가 추첨에는 분명 추첨권이 필요하지 않았나? 그럼 우리는……?',
    );
    await era.printAndWait([
      '뒤돌아본 순간, ',
      you.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '이(가) 주머니를 뒤적이더니 마술처럼 추첨권 한 장을 꺼내는 것을 보았다.',
    ]);
    await era.printAndWait([
      '……그래, 상점가의 작은 아이돌 ',
      urara.get_colored_name(),
      '이라면 아주 자연스러운 일이겠지.',
    ]);
    await era.printAndWait([
      '눈을 반짝이며 안달하는 ',
      urara.get_colored_name(),
      '을(를) 보고, ',
      you.get_colored_name(),
      '도 슬쩍 ',
      urara.sex,
      '에게 엄지를 치켜세워 보였다.',
    ]);
    await urara.say_and_wait([callname, '! 같이 돌리자! 하나, 둘——!']);
    await era.printAndWait([
      '신이 난 ',
      urara.get_colored_name(),
      '의 부름에, ',
      you.get_colored_name(),
      '은(는) 앞으로 나가 담당과 함께 손잡이를 내렸다.',
    ]);
    await era.printAndWait([
      '작은 ',
      urara.uma_sex_title,
      '의 기대에 찬 시선 속에서 상자는 돌아가며 조금 다른 딱딱 소리를 계속 냈다. 그리고——',
    ]);
    if (has_ticket) {
      await you.say_as_passer_by_and_wait(
        '직원 A',
        '축하해, 우라라! 특등 『온천 여행권』이야!!',
      );
      await era.printAndWait([
        '추첨을 진행하는 직원의 축하 속에서 온천 여관 여행권이 ',
        urara.get_colored_name(),
        '의 손에 들어왔다.',
      ]);
      await era.printAndWait([
        '여행권에 적힌 온천 여관은 낯이 익었다. 중앙 트레센과 오랫동안 제휴한 곳인 듯했다.',
      ]);
      await urara.say_and_wait('온천? 우라라, 온천 갈 수 있어? 신난다!');
      await urara.say_and_wait([
        callname,
        '! 언제 가? 내일? 모레? 그다음 날? 아니면……',
      ]);

      era.printButton('「일단 레이스가 끝난 뒤 받을 상으로 남겨 둘까?」', 1);
      await era.input();

      await era.printAndWait([
        '아직은 이르기도 하고, ',
        urara.get_colored_name(),
        '이(가) 앞으로도 의욕을 잃지 않고 힘내도록, ',
        you.get_colored_name(),
        '은(는) 그렇게 제안했다.',
      ]);
      await urara.say_and_wait([
        '응! 그렇게 하자! 여행권은 ',
        callname,
        '이(가) 가지고 있어!',
      ]);
      await urara.say_and_wait([
        '우라라도 상 받을 수 있게 힘낼게! 그때 같이 즐겁게 온천 가자!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 고개를 끄덕이고 웃으며 온천 여행권을 ',
        you.get_colored_name(),
        '의 손에 건넸다.',
      ]);
      await urara.say_and_wait('흥흥~ 기대된다, 상 받는 날!');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 앞날을 기대하며 웃는 ',
        urara.get_colored_name(),
        '의 얼굴을 보고, 손에 든 여행권이 더 묵직해진 기분이 들었다.',
      ]);
      await era.printAndWait([
        '그날이 빨리 오도록, ',
        urara.get_colored_name(),
        '와(과) 함께 힘내야겠다.',
      ]);
    } else {
      const buffer = [
        async () => {
          await you.say_as_passer_by_and_wait(
            '직원 A',
            '축하해! 1등 상품은 『최고급 당근 함박스테이크』야!',
          );
          await era.printAndWait(
            '김이 모락모락 나는 당근 함박스테이크 한 접시가 두 사람 앞에 놓였다.',
          );
          await urara.say_and_wait([
            '오!',
            callname,
            ', 이거 보기만 해도 맛있겠어! 지금 먹어도 돼?',
          ]);
          await era.printAndWait(
            '음? 확실히 고급스러워 보이고 겉모습부터 빛이 나기는 하는데……',
          );

          era.printButton('「여기는 어수선하니까 학원에 가져가서 먹자!」', 1);
          await era.input();

          await urara.say_and_wait([
            '그것도 좋겠다! 그럼 같이 돌아가자, ',
            callname,
            '！',
          ]);
          await era.printAndWait([
            '학원으로 돌아온 뒤, ',
            urara.get_colored_name(),
            '와(과) ',
            you.get_colored_name(),
            '은(는) 보기부터 굉장한 함박스테이크를 나눠 먹었다.',
          ]);
          await era.printAndWait(
            '몇 번을 봐도 신기하다. 이미 만들어 놓은 음식인데 어떻게 이런 맛이 날까.',
          );
          await era.printAndWait(
            '트레이너실에서도 같은 맛을 낼 수 있으면 좋을 텐데……방법이 없을까?',
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            '직원 A',
            '축하해! 2등 상품은 『당근 한 바구니』야!',
          );
          await era.printAndWait([
            '2등이지만, ',
            urara.get_colored_name(),
            '에게는 이게 가장 기쁠 것이다.',
          ]);
          await era.printAndWait([
            '',
            you.get_colored_name(),
            '의 생각대로, ',
            urara.get_colored_name(),
            '은(는) 고맙다고 말하며 당근을 받고 기쁜 듯 ',
            you.get_colored_name(),
            '쪽으로 돌아섰다.',
          ]);
          await urara.say_and_wait([
            callname,
            '! 돌아가면 다들한테 당근 나눠 주자!',
          ]);
          await urara.say_and_wait(
            '나눠 줄 사람이 많아! 하지만 먼저 이걸 같이 들고 돌아가야겠다!',
          );

          era.printButton('「응, 이건 내가 들게!」', 1);
          await era.input();

          await era.printAndWait([
            '',
            urara.get_colored_name(),
            '에게서 커다란 바구니를 받아 들고, ',
            you.get_colored_name(),
            '와(과) ',
            urara.get_colored_name(),
            '은(는) 돌아가는 길에 올랐다.',
          ]);
          await era.printAndWait([
            '돌아가는 길에는 상점가 아저씨와 아주머니들에게서 열렬한 축하와 챙김까지 받았다.',
          ]);
          await era.printAndWait([
            '그런데 이 정도 양이면 아무리 나눠 줘도 남겠는데?',
            urara.get_colored_name(),
            '은(는) 정말 인기도 많고 착한 애다……',
          ]);
          await era.printAndWait([
            '어느새 더 늘어난 당근을 안고, ',
            you.get_colored_name(),
            '은(는) 『행복한 고민』에 빠졌다.',
          ]);
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            '직원 A',
            '3등! 상품은 『당근 한 개』야!」',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            '은(는) 직원에게 고맙다고 말하며 기쁜 듯 당근을 받았다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 당근 한 개로도 ',
            urara.get_colored_name(),
            '이(가) 기뻐하리라는 것을 안다. 그래도 뭔가 하지 않으면 마음이 편치 않았다.',
          ]);
          await era.printAndWait([
            '',
            you.get_colored_name(),
            '이(가) 무슨 말을 해야 할지 고민하는 사이, ',
            urara.get_colored_name(),
            '이(가) 먼저 움직였다.',
          ]);
          await era.printAndWait([
            '『똑』 하는 경쾌한 소리와 함께, ',
            urara.get_colored_name(),
            '은(는) 당근을 가운데서 둘로 쪼갠 뒤 굵은 쪽을 기쁘게 ',
            you.get_colored_name(),
            '에게 내밀었다.',
          ]);
          await urara.say_and_wait([
            '괜찮아, 하나라도 당근은 당근인걸!',
            callname,
            '! 여기 큰 쪽은 너 줄게!',
          ]);

          era.printButton('「……고마워.」', 1);
          await era.input();

          await era.printAndWait([
            '또다시 ',
            urara.get_colored_name(),
            '에게 감동한 ',
            you.get_colored_name(),
            '은(는) 준비했던 말이 많았지만, 지금 할 수 있는 말은 짧은 감사뿐이었다.',
          ]);
          await urara.say_and_wait(['에헤헤~ 천만에, ', callname, '！']);
          await era.printAndWait([
            '하지만 ',
            urara.get_colored_name(),
            '은(는) 개의치 않았다. 늘 짓는 미소 그대로, 작은 ',
            urara.uma_sex_title,
            '은(는) 반으로 나눈 당근을 ',
            you.get_colored_name(),
            '의 손에 꼭 쥐여 주었다.',
          ]);
          await era.printAndWait([
            '주변에서 똑같이 다정하고 흐뭇한 시선을 보내는 가운데, ',
            you.get_colored_name(),
            '와(과) ',
            urara.get_colored_name(),
            '은(는) 특별한 의미를 담게 된 당근을 나눠 먹었다.',
          ]);
          await era.printAndWait([
            '앞으로 겉모습이 어떻게 달라지더라도, ',
            urara.get_colored_name(),
            '은(는) 언제까지나 다정하고 착한 아이로 남을 것이다.',
          ]);
          await era.printAndWait([
            '돌아가는 길에 하늘을 올려다보며, ',
            you.get_colored_name(),
            '은(는) 그렇게 믿었다.',
          ]);
        },
        async () => {
          await urara.say_and_wait('어라, 휴지네……!');
          await era.printAndWait([
            '휴지를 받은 뒤, 조금 풀이 죽을 듯하던 ',
            urara.get_colored_name(),
            '은(는) 오히려 ',
            you.get_colored_name(),
            '을(를) 위로하기 시작했다.',
          ]);
          await urara.say_and_wait([
            callname,
            '! 풀이 죽지 마! 추첨은 재밌고, 휴지도 좋잖아!',
          ]);
          await era.printAndWait([
            '',
            urara.get_colored_name(),
            '은(는) 열심히 ',
            urara.sex,
            '의 트레이너를 위로했지만, 그 모습은 스스로를 위로하는 것 같기도 했다.',
          ]);

          era.printButton(
            `「응, 괜찮아. ${callname}은(는) 풀이 죽지 않을게.」`,
            1,
          );
          await era.input();

          await era.printAndWait([
            '',
            you.get_colored_name(),
            '의 대답을 듣고, ',
            urara.get_colored_name(),
            '은(는) 기쁘게 웃었지만, 잠시 지나자 점점 억지 미소가 되었다.',
          ]);
          await urara.say_and_wait('그래도 역시 당근 먹고 싶어……');
          await era.printAndWait([
            '실망한 마음을 숨기려 해도, ',
            urara.get_colored_name(),
            '의 귀가 축 처졌다.',
          ]);
          await era.printAndWait([
            '결국 조금 기운이 빠지고 말았다. 돌아가는 길, ',
            you.get_colored_name(),
            '은(는) 달래면서 ',
            urara.get_colored_name(),
            '의 머리를 쓰다듬어 주었다.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} opera テイエムオペラオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   */
  async o_s_ktv(urara, opera, you, callname, call_15) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '노래 연습하고 싶을 때 다들하고 여기 자주 와!',
          callname,
          '이(가) 듣고 싶은 노래라면 뭐든 부를 수 있어!',
        ]);
        await era.printAndWait([
          '먼저 마이크를 집어 들고, ',
          urara.get_colored_name(),
          '은(는) 연습한 성과를 ',
          you.get_colored_name(),
          '에게 보여 주고 싶은 듯 웃으며 ',
          you.get_colored_name(),
          '에게 물었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '조명을 켜니까 라이브가 시작되는 것 같아!',
          callname,
          '도 같이 부르자!',
        ]);
        await era.printAndWait([
          '장난삼아 천장의 미러볼을 켜고, ',
          urara.get_colored_name(),
          '은(는) 기쁜 듯 ',
          you.get_colored_name(),
          '의 손을 잡아끌어 함께 마이크를 들었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '오늘은 뭘 부를까? 에헤헤~ 사실 ',
          call_15,
          '한테 새로운 노래를 배웠어!',
        ]);
        await era.printAndWait([
          '',
          opera.get_colored_name(),
          '에게 배웠다는 신곡이 조금 불안하게 들리기는 해도, ',
          you.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '이(가) 노래를 시작할 순간을 기대했다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '……에, 엣?',
          callname,
          ', 옆방에서 대체……?',
        ]);
        await era.printAndWait([
          '옆 개인실에서 끊임없이 들려오는 물소리와 신음 소리에,',
          you.get_colored_name(),
          '와(과) ',
          urara.get_colored_name(),
          '는 잠시 무엇을 해야 할지 몰라 멍해진다……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '어때, ',
          callname,
          '? 우라라한테 마, 마음을 빼앗겼어?',
        ]);
        await era.printAndWait([
          '앳된 목소리로 서툴게 사랑 노래풍의 아이돌 곡을 부르고 나서, ',
          urara.get_colored_name(),
          '은(는) 수줍게 ',
          you.get_colored_name(),
          '에게 하트 포즈를 지어 보였다.',
        ]);
        await era.printAndWait([
          '',
          urara.sex,
          '이(가) 조금 무리하는 것 같기는 하지만, 역시 귀엽다……',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          ', 바닐라 파르페야! 입 벌려! 아~!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 반사적으로 ',
          urara.get_colored_name(),
          '이(가) 떠 준 아이스크림을 받아먹으면서, 왜 노래방에서 이런 걸 하는 걸까 하고 생각했다.',
        ]);
        await era.printAndWait([
          '하지만 등을 돌린 ',
          you.get_colored_name(),
          '은(는), 행위자가 몰래 얼굴을 붉히며 혀를 내밀고는, ',
          you.get_colored_name(),
          '이(가) 입을 댔던 숟가락을 정성스럽게 핥으며, 눈빛이 풀려버린 모습을 놓치고 만다……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async o_s_movie(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '팝콘도 맛있고 음료수도 맛있어! 그래도 역시 영화가 중요하지!',
        );
        await urara.say_and_wait('이번에는 영화에 집중할래!');
        await era.printAndWait([
          '그렇게 말해도, ',
          urara.get_colored_name(),
          '이(가) 아직 먹고 싶어 한다는 걸 눈치챈 ',
          you.get_colored_name(),
          '은(는) 결국 팝콘과 음료수를 샀다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '괜찮아, ',
          callname,
          '! 재밌으면 우라라, 안 졸려……아마도!',
        ]);
        await era.printAndWait([
          '의외로 진지한 주제의 영화를 고른 뒤, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게 자신만만하게 선언했다.',
        ]);
        await era.printAndWait([
          '정말 괜찮을까?',
          urara.get_colored_name(),
          '의 미소를 보고도, ',
          you.get_colored_name(),
          '은(는) 여전히 조금 걱정되었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '『환상의 말』이 또 재개봉했대! 볼 때마다 주인공 얼굴이 그리운 느낌이 들어! 그런데 왜 그럴까?',
        ]);
        await era.printAndWait([
          '상영관 앞을 지나며 벽에 붙은 안내를 보고, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '에게 그렇게 말했다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 늘 감이 좋았다.',
          urara.sex,
          '은(는) 이 명작 속에서 정말로 중요한 무언가를 발견했는지도 모른다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '이 영화는 무서운 장면도 있다던데, 우라라는 용감해!',
        );
        await urara.say_and_wait([
          '그러니까 ',
          callname,
          '이(가) 놀라면 우라라가 ',
          callname,
          '을(를) 달래 줄까?',
        ]);
        await era.printAndWait([
          '어둠 속에서 살며시 팔걸이에 손을 얹고, ',
          urara.get_colored_name(),
          '은(는) 맞닿은 손을 통해 빨라지는 두근거림과 따뜻해지는 체온을 ',
          you.get_colored_name(),
          '에게 전했다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '에헤헤~ 아직 잘 모르겠는 부분도 있지만, 남자랑 여자가 사이좋네!',
        );
        await urara.say_and_wait([
          '하지만 ',
          callname,
          '와(과) 우라라도 이렇게 사이좋잖아? 그건 우라라도 알아!',
        ]);
        await era.printAndWait([
          '영화관 팔걸이 위에서, ',
          urara.get_colored_name(),
          '은(는) 조금 어른스러운 미소를 띠며 ',
          you.get_colored_name(),
          '의 손을 꼭 잡았다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '언젠가 우라라 이야기도 영화가 된다면……주인공은 꼭 ',
          callname,
          '을(를) 모델로 했으면 좋겠어!',
        ]);
        await urara.say_and_wait(
          '왜냐하면 『우라라』는 언제까지나 『트레이너』만의 담당이었으면 좋겠거든!',
        );
        await era.printAndWait([
          '마음 놓고 ',
          you.get_colored_name(),
          '의 어깨에 기댄 채, ',
          urara.teen_sex_title,
          '의 벚꽃빛 눈동자가 화면의 변화에 따라 부드럽게 반짝였다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} dice 祈願のダイス結果。0-1の小数で、小さいほど良い
   */
  async o_c_pray(urara, you, callname, high_relation, dice) {
    await era.printAndWait([
      '의욕 넘치는 ',
      urara.get_colored_name(),
      '을(를) 위해, 또 다음 레이스를 앞두고 좋은 기운도 받고자 ',
      you.get_colored_name(),
      '은(는) ',
      urara.uma_sex_title,
      '을(를) 데리고 신사에 가기로 했다.',
    ]);
    await era.printAndWait(
      '급한 일도 없으니, 기왕 여기까지 왔겠다 들러 보자는 생각이었다.',
    );
    await era.printAndWait([
      '그런데 계단에 발을 올렸을 때, ',
      you.get_colored_name(),
      '은(는) 이곳의 분위기가 평소에 왔을 때와 조금 다르다는 것을 느꼈다.',
    ]);
    await era.printAndWait([
      '이 작은 신사는 평소에는 북적였다. 근처 주민이나 이곳에서 노는 아이들 외에도, 긴 계단에서 트레이닝하는 ',
      urara.uma_sex_title,
      '와 평등하게 기쁨을 나누겠습니까?」',
    ]);
    await era.printAndWait(
      '하지만 오늘 계단은 유난히 조용했다. 양옆 숲이 흔들리는 소리와 새소리 말고는 두 사람의 발소리뿐이었다.',
    );
    era.println();
    if (high_relation) {
      await era.printAndWait([
        '둘만 오르는 길은 확실히 활기가 부족했지만, ',
        you.get_colored_name(),
        '의 손을 꼭 잡은 ',
        urara.get_colored_name(),
        '은(는) 계속 웃는 얼굴로 ',
        you.get_colored_name(),
        '의 곁을 지켰다.',
      ]);
      await urara.say_and_wait('오늘 여기는 공기가 왠지 맑아!');
      await era.printAndWait([
        '어떤 뜻인지는 알 수 없었지만, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 말에 고개를 끄덕였고, ',
        urara.uma_sex_title,
        '와(과) 함께 있는 사이 기분도 밝아졌다.',
      ]);
    } else {
      await era.printAndWait([
        '조금 망설인 뒤, ',
        urara.get_colored_name(),
        '은(는) 한 걸음 앞으로 나가 ',
        you.get_colored_name(),
        '의 손을 잡더니 갑자기 ',
        you.get_colored_name(),
        '의 앞을 막아섰다.',
      ]);
      await urara.say_and_wait([callname, '! 지구력 트레이닝이야, 잘 따라와!']);
      await era.printAndWait([
        '미처 알아차리기도 전에, ',
        you.get_colored_name(),
        '은(는) 장난스럽게 웃으며 달리기 시작한 담당에게 이끌려 다음 계단을 올랐다——',
      ]);
    }
    era.println();

    await era.printAndWait([
      '앞서 달리던 ',
      urara.get_colored_name(),
      '에게 손을 끌려 마지막 계단을 밟자, 계단 끝 도리이 너머로 익숙한 작은 신사가 나타났다.',
    ]);
    await era.printAndWait(
      '분위기가 어떻게 바뀌든, 오늘도 신사는 이곳에서 조용히 참배객을 기다리고 있었다.',
    );
    await era.printAndWait([
      '와 ',
      urara.get_colored_name(),
      '와(과) 나란히 새전함 앞에 서서, ',
      you.get_colored_name(),
      '은(는) 동전 두 개를 꺼내 하나를 ',
      urara.get_colored_name(),
      '의 손에 쥐여 주었다.',
    ]);
    await era.printAndWait([
      '동전을 보고 눈을 깜빡인 뒤, ',
      urara.get_colored_name(),
      '은(는) 귀를 쫑긋 세우고 알아들었다는 듯 그것을 꼭 쥐었다……',
    ]);
    await era.printAndWait([
      '격식을 제대로 갖추지는 못한 참배를 간단히 마치고, ',
      you.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '의 접힌 운세 제비를 풀어, ',
      urara.get_colored_name(),
      '와(과) 함께 종이를 펼치려 했다——',
    ]);
    if (dice < 0.5) {
      await urara.say_and_wait('아! 이번에는 운이 좋네!');
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 기쁜 듯 ',
        you.get_colored_name(),
        '에게 펼친 종이를 보여 주었다. 적힌 결과도 확실히 나쁘지 않았다.',
      ]);

      era.printButton('「축하해. 내 것도 나쁘지 않아.」', 1);
      await era.input();

      await urara.say_and_wait([
        '운세 제비에서 좋은 게 나오면 언제나 기뻐!',
        callname,
        '도 기운 났지!',
      ]);
      await era.printAndWait([
        '하지만 기쁜 이유는 좋은 제비보다 ',
        urara.get_colored_name(),
        '쪽이 더 컸다. 작은 담당의 미소를 보고, ',
        you.get_colored_name(),
        '도 모르는 사이에 입꼬리가 살짝 올라갔다.',
      ]);
      await era.printAndWait([
        '신사 뜰에서 즐거운 작은 새처럼 빙글빙글 도는 ',
        urara.get_colored_name(),
        '을(를) 보니, 익숙한 따뜻함이 다시 ',
        you.get_colored_name(),
        '의 몸을 채웠다.',
      ]);
      await era.printAndWait([
        '기분이 한결 가벼워졌다. 이러면 당분간은 힘낼 수 있을 것 같다. 두 사람의 만남을 떠올리며, ',
        you.get_colored_name(),
        '은(는) 깊게 숨을 들이켰다.',
      ]);
      await urara.say_and_wait([callname, ', 가자——']);
      await era.printAndWait([
        '붉은 도리이 앞에 멈춰 선 분홍빛 작은 새가 손을 흔들며 ',
        you.get_colored_name(),
        '을(를) 부르고 있었다.',
      ]);
      await era.printAndWait([
        '떠나기 전에 숲의 가지와 잎 너머 하늘을 올려다보며, ',
        you.get_colored_name(),
        '은(는) 어딘가에서 지켜보는 누군가에게 감사를 전했다.',
      ]);
      await era.printAndWait('오늘은 좋은 날이다.');
    } else {
      await urara.say_and_wait([
        '……팔코의…… 가장 빛나는 무대?',
        callname,
        ', 이번 결과는 조금 안 좋은 것 같아. ',
        callname,
        '것도 그래?',
      ]);
      await era.printAndWait([
        '그리 좋지 않은 종이를 보여 주며, ',
        urara.get_colored_name(),
        '은(는) 조금 풀이 죽을 듯하다가도 곧 아무렇지 않다는 듯 웃으며 ',
        you.get_colored_name(),
        '쪽으로 돌아섰다.',
      ]);

      era.printButton('「응, 그래도 괜찮을 거야.」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 운이 나쁠 때도 많지. 예전의 우라라도 계속 졌잖아! 걱정 말고 같이 돌아가자!',
      );
      await era.printAndWait([
        '',
        you.get_colored_name(),
        '의 대답을 듣고, ',
        urara.get_colored_name(),
        '은(는) 안심한 듯 웃으며 앞으로 나가 ',
        you.get_colored_name(),
        '의 손을 꽉 잡았다.',
      ]);
      await era.printAndWait(
        '돌아가려고 발을 내딛은 두 사람은 우스꽝스럽게 나란히 앞으로 고꾸라졌다. 어느새 두 사람의 신발 끈이 소리 없이 풀려 있었다.',
      );
      await era.printAndWait(
        '서로 바닥에 앉아 멍한 표정을 마주 보자, 동시에 신발 끈에 걸려 넘어진 두 사람은 영문도 모른 채 웃기 시작했다.',
      );
      await era.printAndWait([
        '나쁜 제비를 뽑았다고 결과까지 나쁘라는 법은 없다! 서로의 먼지를 털어 주며, ',
        urara.get_colored_name(),
        '은(는) 낙관적으로 생각했다.',
      ]);
      await era.printAndWait([
        '그런데 정말 효험이 있었던 걸까. 아까의 심상치 않은 분위기를 떠올리며, ',
        urara.get_colored_name(),
        '을(를) 데리고 돌아가는 ',
        you.get_colored_name(),
        '은(는) 생각에 잠겼다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_33 ハルウララのファインモーションへの呼び方
   */
  async o_s_restaurant(urara, you, callname, call_30, call_33) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_30,
          '와(과) ',
          call_33,
          '이(가) 같이 추천한 빵집은 역시 대단해! 다음에도 같이 오자!',
        ]);
        await era.printAndWait([
          '손에 든 도넛을 베어 물며, ',
          urara.get_colored_name(),
          '은(는) 기쁜 듯 입가의 설탕을 닦았다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          `저기는 전에 다들하고 먹었던 라멘집이야! 숨겨진 메뉴도 있대!${callname}도 먹어 봐!`,
        );
        await era.printAndWait([
          '골목 안쪽의 의외로 깔끔한 가게 앞을 보고, ',
          you.get_colored_name(),
          '은(는) 그래도 ',
          urara.get_colored_name(),
          '와(과) 가게 안으로 들어갔다.',
        ]);
        await era.printAndWait(
          '담당의 식단 조절은……외출했을 때까지 그렇게 찬물을 끼얹을 필요는 없겠지.',
        );
      },
      async () => {
        await urara.say_and_wait(
          '어? 오늘은 패스트푸드야? 그럼 이 신메뉴 세트 먹어 볼래!',
        );
        await urara.say_and_wait([
          '양이 많아? 그럼 ',
          callname,
          '도 같이 먹자! 『우라라~』 하고 가자!',
        ]);
        await era.printAndWait([
          '푸짐한 세트를 나눠 먹고 나서, ',
          you.get_colored_name(),
          '은(는) 이제 몸무게를 신경 써야 할 사람이 ',
          urara.get_colored_name(),
          '뿐만은 아니라고 생각했다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '아~앙, 츄릅... 먹을 때 이상한 소리 내지 마? 알았어……?',
        );
        await era.printAndWait([
          '이상한 방식으로 음식을 맛보는 모습을 들켰는데도, 새하얀 얼굴의 작은',
          urara.uma_sex_title,
          '는 정작 자신이 무슨 짓을 하고 있는지도 모르는 모양이다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `에헤헤~${callname}이(가) 먹여 줬네! 하지만 우라라도 이제 어린애가 아니야! 그러니까 다음에는 우라라 차례지?${callname}, 아~`,
        );
        await era.printAndWait([
          '행복한 미소를 지은 채, ',
          urara.get_colored_name(),
          '은(는) 숟가락을 가져가 그대로 따라 하며 볶음밥 한 술을 ',
          you.get_colored_name(),
          '의 입가로 가져갔다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '있잖아! 잡지에서 입으로 음식을 직접 먹여주는 엄청난 놀이를 봤어!',
        );
        await urara.say_and_wait(
          `하지만 밖에서는 참아야겠지…… 그럼 둘만 있을 때, ${callname}, 그 놀이 해줄래?`,
        );
        await era.printAndWait([
          '거절해봤자 소용없겠지. 작은 ',
          urara.uma_sex_title,
          '의 기대감으로 열기를 띤 눈빛을 뒤로한 채, ',
          you.get_colored_name(),
          '은(는) 말없이 밥을 입안으로 밀어 넣는다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
   * @param {PrintedSpan} call_58 ハルウララのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
   */
  async o_s_dating(urara, you, callname, call_47, call_56, call_58, call_77) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_77,
          '이(가) 추천했던 잡화점에 오늘 재미있는 물건이 들어왔대! 같이 보러 가자!',
        ]);
        await era.printAndWait([
          '종종걸음으로 앞서 간 ',
          urara.get_colored_name(),
          '은(는) 벌써 그 예쁜 잡화점 옆에 서 있다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '저쪽 기념품 가게는 ',
          call_58,
          '하고 ',
          call_56,
          '이(가) 가끔 가는 곳이야! 지금 같이 구경할래?',
        ]);
        await era.printAndWait([
          '몇 번을 가도 저 가게는 평범한 기념품 가게로 보이지 않는다. 그래도 ',
          urara.get_colored_name(),
          '이(가) 즐겁다면 그걸로 됐겠지.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '아! 저기 ',
          call_47,
          '이(가) 추천한 헌책방이야! 안에 희귀한 책이 많이 들어왔대!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '을(를) 서점 입구까지 끌고 간 ',
          urara.get_colored_name(),
          '은(는) 호기심 가득한 눈으로 진열창 너머를 들여다본다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `하아…… 아, 제대로 걸어야지! 하지만 ${callname}의 냄새…… 하아……`,
        );
        await era.printAndWait([
          '계속해서 ',
          you.get_colored_name(),
          '의 옷을 붙잡은 채,',
          urara.get_colored_name(),
          '는, 옷의 ',
          callname,
          ' 냄새에 완전히 푹 빠져 있다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `입학 첫날, 엄마가 트레센까지 데려다준 날이 또 생각났어…… 그래도 지금은 ${callname}도 곁에 있어!`,
        );
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 팔을 잡은 ',
          urara.get_colored_name(),
          '은(는) 웃으며 ',
          you.get_colored_name(),
          '하고 북적이는 인파를 헤쳐 나간다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          ', 지금은 손 놓으면 안 돼! 사람들 사이에서 길을 잃으면 우라라도 무서우니까!',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 팔을 꼭 끌어안은 채 얼굴은 보이지 않지만, ',
          urara.get_colored_name(),
          '은(는) 분명 웃고 있을 것이다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async o_s_shopping(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '저쪽에 출전하는 애들 간판이 있어! 오늘 나가는 애들은——?',
        );
        await era.printAndWait([
          '쇼핑몰 홀에서, ',
          urara.get_colored_name(),
          '와(과) ',
          you.get_colored_name(),
          '은(는) 위쪽의 ',
          urara.uma_sex_title,
          '홍보 간판을 올려다보았다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '! 이번 신발이랑 편자는 전과 같은 걸로 하면 되지! 어? 그쪽 신발?',
        ]);
        await era.printAndWait([
          '서로 다른 러닝화 두 켤레를 들고 난감해하는 ',
          urara.get_colored_name(),
          '의 레이스와 트레이닝에 대한 이해는 아직 조금 불확실했다.',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '승부복 전시장을 또 지나가네! 게다가 이번에도 예쁜 새 옷이 있어!',
        );
        await era.printAndWait([
          '새 승부복의 전시는 새로운 ',
          urara.uma_sex_title,
          '이(가) 중상 레이스에 나온다는 뜻이니, 앞으로 부담이 조금 더 커질지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          urara.get_colored_name(),
          '의 미소에는 다들 미래를 향해 한 걸음 더 나아간다는 기쁨만 담겨 있었다.',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          ', 요즘 옷 안쪽이……쓸려서 아파. 우라라랑 같이 새것 보러 가 줄래……?',
        ]);
        await urara.say_and_wait([
          '다른 애들이랑? 하지만 ',
          urara.couple_title,
          ', 요즘 다들 시간이 없는걸?',
          callname,
          ', 조금만 더 도와줘……',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '의 눈빛은 딱했지만, 붙잡히지 않으려고 ',
          you.get_colored_name(),
          '은(는) 필사적으로 ',
          urara.get_colored_name(),
          '의 부탁을 거절했다.',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '아! 이 옷……괜찮아, ',
          callname,
          '! 용돈 모아서 직접 살게!',
        ]);
        await era.printAndWait([
          '아쉬운 기색이기는 했지만, ',
          you.get_colored_name(),
          '이(가) 사 주겠다고 제안하자 ',
          urara.get_colored_name(),
          '은(는) 단호하게 원피스를 옷걸이에 돌려놓았다.',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '우라라~ 에헤헤, 놀랐어?',
          callname,
          '? 그러니까 우라라한테서 너무 멀어지지 마. 손 꼭 잡자!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 담당을 휴게 공간에 두고 잠시 자리를 비우려 했지만, ',
          urara.sex,
          '은(는) ',
          you.get_colored_name(),
          '이(가) 뒤돌아보는 순간 뒤에서 뛰어들었다.',
        ]);
        await era.printAndWait([
          '조금 더 ',
          urara.sex,
          '을(를) 앉혀 두고 싶었지만, ',
          urara.get_colored_name(),
          '은(는) 양보할 기색도 없었고 웃고 있지도 않았다……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {boolean} u_awake ウララが起きているか
   * @param {boolean} y_awake プレイヤーが起きているか
   */
  good_night_normal(
    urara,
    you,
    callname,
    self_call,
    high_relation,
    u_awake,
    y_awake,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (u_awake && y_awake) {
      if (high_relation) {
        buffer.push(
          () => {
            urara.say(['오늘은 여기까지야? 그럼 다음에 봐, ', callname, '！']);
            era.print([
              '',
              you.get_colored_name(),
              '에게 작별 인사를 하고 ',
              urara.get_colored_name(),
              '은(는) 기쁜 듯 달려간다.',
            ]);
          },
          () => {
            urara.say(['벌써 돌아가는 거야? 알았어! 또 봐, ', callname, '！']);
            era.print([
              '떠나기 전에 ',
              urara.get_colored_name(),
              '은(는) 웃으며 ',
              you.get_colored_name(),
              '에게 꼬박꼬박 작별 인사를 한다.',
            ]);
          },
          () => {
            urara.say([
              '벌써 시간이 이렇게 됐네!',
              callname,
              ', 돌아가는 길 조심해!',
            ]);
            era.print([
              '',
              you.get_colored_name(),
              '에게 다정하게 인사하고, 작은 ',
              urara.uma_sex_title,
              '은(는) 폴짝폴짝 뛰듯 기숙사로 달려간다.',
            ]);
          },
          () => {
            urara.say([
              callname,
              '도 피곤해? 수고했어! 돌아가면 푹 쉬어야 해!',
            ]);
            era.print([
              '하루를 마무리하며 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '에게 손을 흔들고 떠난다.',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                '별로 실감은 안 나지만, 둘이 있으면 시간이 금방 가네! 혹시 ',
                callname,
                ', 시간을 빨리 가게 할 수 있어? 응? 못 한다고?',
              ]);
              era.print([
                '엉뚱한 이야기를 하며 ',
                urara.get_colored_name(),
                '은(는) ',
                you.get_colored_name(),
                '하고 작별 인사를 나누고 헤어진다.',
              ]);
            },
            () => {
              urara.say(['응? 데려다줄 거야? 고마워, ', callname, '！']);
              era.print([
                '',
                you.get_colored_name(),
                '의 제안을 듣고 ',
                urara.get_colored_name(),
                '은(는) 웃으며 ',
                you.get_colored_name(),
                '하고 남은 길을 함께 걷는다.',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                '조금만 더 있고 싶지만, 그러면 다들 걱정하겠지! 그럼 또 봐, ',
                callname,
                '！',
              ]);
              era.print([
                urara.get_colored_name(),
                '은(는) 아직 아쉬운 듯하지만, 그래도 순순히 ',
                you.get_colored_name(),
                '에게 작별 인사를 한다.',
              ]);
            },
            () => {
              urara.say([
                '여기서 ',
                callname,
                '하고 헤어지려니까 조금 쓸쓸해! 다음에는 좀 더 ',
                self_call,
                '하고 있어 줄래?',
              ]);
              era.print([
                '아쉬운 듯 ',
                you.get_colored_name(),
                '의 옷자락을 잡아당기면서도 ',
                urara.get_colored_name(),
                '은(는) 작은 목소리로 인사를 마치고 떠난다.',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say([
                '하아…… 미안해 ',
                callname,
                '、응~ 조금만 더 기다려줘……',
              ]);
              era.print([
                '얼굴에 묘한 홍조를 띤 채, ',
                urara.get_colored_name(),
                '는 떠나기 전 발정 난 소동물처럼 ',
                you.get_colored_name(),
                '의 몸에 파고든다.',
              ]);
            },
            () => {
              urara.say([
                callname,
                '！가기 전에, 한 번만 더 꽉 ',
                self_call,
                '를 안아줄래? 응…… 더 세게 안아줘도 돼? ',
              ]);
              era.print([
                '작별 인사를 앞두고 작은 소원을 말한 뒤,',
                you.get_colored_name(),
                '의 포옹에 얼굴이 새빨개진 ',
                urara.get_colored_name(),
                '는 나른하고 황홀한 표정을 짓는다.',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                '응? 시간이 벌써…… 에헤헤~ 오늘 정말 즐거웠어! 다음에도 같이 있자!',
              ]);
              era.print([
                '',
                you.get_colored_name(),
                '을(를) 연인처럼 끌어안은 뒤 ',
                urara.get_colored_name(),
                '은(는) 귀를 파르르 떨고는 만족스러운 듯 달려간다.',
              ]);
            },
            () => {
              urara.say([
                '어…… 조금만 더 있으면 안 돼? 그래도 ',
                callname,
                '한테 폐를 끼치면 안 되겠지. 또 봐!',
              ]);
              era.print([
                '아쉬운 듯 작별 전의 다정한 시간을 끝내고 ',
                urara.get_colored_name(),
                '은(는) 몇 번이나 뒤돌아보며 떠난다.',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say(['이제 가는 거야? 그럼…… 쪽! 에헤헤~ 작별 키스야!']);
              era.print([
                '꼬리를 흔들며 ',
                urara.get_colored_name(),
                '은(는) 떠나기 전에 ',
                you.get_colored_name(),
                '의 뺨에 가볍게 입을 맞추고는 작은 새처럼 웃으며 달려간다.',
              ]);
            },
            () => {
              urara.say([
                '에헤헤~',
                callname,
                ', 이제 가는 거야? 돌아가는 길 조심해! 돌아가면 푹 쉬고, 한밤중에 나가서 바람피우면 안 돼!',
              ]);
              era.print([
                '떠나기 직전 ',
                urara.get_colored_name(),
                '의 의미심장한 미소를 보니 ',
                you.get_colored_name(),
                '은(는) 등골이 조금 서늘해지는 기분이다.',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                '만약 ',
                callname,
                '이(가) 지금 손을 놓으면 ',
                self_call,
                ", '슝' 하고 어디론가 가 버릴지도 몰라…… 농담이야! 이제 어린애가 아닌걸! 그래도 다음에 같이 있을 때도 ",
                self_call,
                '의 손을 꼭 잡고 있어 줘!',
              ]);
              era.print([
                '담당이 떠나면서 한 농담을 곱씹는 사이, 어쩐지 ',
                you.get_colored_name(),
                '의 마음이 술렁이기 시작한다……',
              ]);
            },
            () => {
              urara.say([
                '쪽~ 하아……응! 오늘은 여기까지야.',
                callname,
                '가 더 원한다면 다음에 또 함께 놀자! 괜찮아, ',
                callname,
                '가 오지 않아도,',
                self_call,
                '는 계속 ',
                callname,
                '을(를) 기다리고 있을 테니까……',
              ]);
              era.print([
                '연인의 목에 작별의 징표인 붉은 자국을 남기며, 작은',
                urara.uma_sex_title,
                '의 맑은 목소리가 탁해지며 요염하게 ',
                you.get_colored_name(),
                '의 귓가에 감겨든다.',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () => {
            urara.say(['이제 돌아가? 그럼…… 또 봐, ', callname, '！']);
            era.print([
              '무슨 말을 할지 잠시 생각하다가 ',
              urara.get_colored_name(),
              '은(는) 결국 ',
              you.get_colored_name(),
              '에게 웃어 보이기로 한다.',
            ]);
          },
          () => {
            urara.say(['벌써 시간이 이렇게 됐네. 돌아가자, ', callname, '！']);
            era.print([
              '웃으며 ',
              you.get_colored_name(),
              '에게 인사를 건넨 뒤, 작은 ',
              urara.uma_sex_title,
              '은(는) 담담하게 기숙사로 향한다.',
            ]);
          },
          () => {
            urara.say([
              '',
              self_call,
              '을(를) 데려다주겠다고? 그래도 괜찮아. 고마워, ',
              callname,
              '！',
            ]);
            era.print([
              '손을 내저어 ',
              you.get_colored_name(),
              '의 제안을 거절한 뒤 ',
              urara.get_colored_name(),
              '은(는) 혼자 떠난다.',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                '오늘도 금방 지나갔네. ',
                callname,
                '도 조금 다정해졌고…… 아무것도 아니야! 또 봐, ',
                callname,
                '！',
              ]);
              era.print([
                '알쏭달쏭한 말을 하며 ',
                urara.get_colored_name(),
                '은(는) ',
                you.get_colored_name(),
                '하고 헤어져 천천히 떠난다.',
              ]);
            },
            () => {
              urara.say([
                '잘 모르겠지만, 이제 가고 싶지 않은 것 같아. 그래도 그러면 안 되겠지……',
              ]);
              era.print([
                '귀를 흔들며 혼잣말을 한 뒤 ',
                urara.get_colored_name(),
                '은(는) 꼬박꼬박 ',
                you.get_colored_name(),
                '에게 작별 인사를 하고 떠난다.',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                '다들 걱정한다고? 그래도 다들 ',
                callname,
                '하고 ',
                self_call,
                '이(가) 같이 있어도 괜찮댔으니까, 걱정하지 않겠지!',
              ]);
              era.print([
                '아직 아쉬운 기색이지만 작은 ',
                urara.uma_sex_title,
                '은(는) 순순히 떠난다. 다만 ',
                you.get_colored_name(),
                '은(는) 담당에게 살짝 불평을 들은 기분이다.',
              ]);
            },
            () => {
              urara.say([
                '괜찮아. ',
                self_call,
                '은(는) 뛰어다니지 않을게! 그래도 ',
                callname,
                '이(가) 그렇게 말한다면…… 같이 걷자!',
              ]);
              era.print([
                '머뭇거리던 작은 ',
                urara.uma_sex_title,
                '은(는) 그래도 ',
                you.get_colored_name(),
                '의 바람을 받아들인다. 나란히 걷는 사이 분위기가 조금 묘해진다.',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say([
                '미안해…… 그래도, 조금만 더 ',
                self_call,
                '곁에 있을 시간, 좀 줘……',
              ]);
              era.print([
                '헤어지기 전 몇 번이고 ',
                you.get_colored_name(),
                '의 몸에 파고들며, ',
                urara.get_colored_name(),
                '은 욕정으로 떨리는 몸을 필사적으로 억누른다.',
              ]);
            },
            () => {
              urara.say([
                '그런 사람인데도,',
                callname,
                '의 냄새…… 아! 미안해……',
              ]);
              era.print([
                '황홀경에서 겨우 정신을 차리고,',
                urara.get_colored_name(),
                '는 당황하며 부끄러운 듯이 ',
                you.get_colored_name(),
                '의 옷자락을 놓는다.',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                callname,
                '! 가기 전에 한 번만 더 안아 줘…… 괜찮아? 그럼…… 최대한 다정하게!',
              ]);
              era.print(
                '다가갔다가 떨어지기를 반복하다가 다시 꼭 끌어안는다. 헤어질 시간은 또 한동안 미뤄진다.',
              );
            },
            () => {
              urara.say([
                '벌써 시간이 이렇게 됐고, 오늘도 즐거웠어. 그래도 ',
                callname,
                '……',
              ]);
              era.print([
                '망설이다가 ',
                you.get_colored_name(),
                '을(를) 연인처럼 끌어안은 뒤 ',
                urara.get_colored_name(),
                '은(는) 여전히 아쉬운 듯 떠난다.',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say([
                '……쪽~ 이건 특별한 작별 인사야! 그러니까 ',
                callname,
                ', 다음에 만날 때는 더 나아져 있어야 해!',
              ]);
              era.print([
                '벚꽃빛 입술로 연인의 뺨에 가볍게 입을 맞춘 작은 ',
                urara.uma_sex_title,
                '은(는) 수줍게 귀를 떨며 작은 목소리로 연인을 격려한다.',
              ]);
            },
            () => {
              urara.say([
                callname,
                '밤에 어른들만의 시간을 보낼 때도 조심해야 해! 안 갈 거야? 정말로 안 가도 괜찮은데……',
              ]);
              era.print([
                '헤어지기 전의 잡담 속에서, ',
                urara.get_colored_name(),
                '의 의심하면서도 받아들이는 듯한 그 눈빛이,',
                you.get_colored_name(),
                '을(를) 조금 안절부절못하게 만든다.',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                '벌써 헤어지는 거야? 그래도 지금 손을 놓으면 ',
                callname,
                ', 다른 사람이랑 사이좋게 지내러 갈지도 모르잖아? 농담이야!',
              ]);
              era.print([
                you.get_colored_name(),
                '은(는) ',
                urara.get_colored_name(),
                '의 배웅을 받으며 떠나지만, 뒤에서 느껴지는 담당의 시선 때문에 ',
                you.get_colored_name(),
                '의 등골이 오싹해진다……',
              ]);
            },
            () => {
              urara.say([
                '쪽~ 츄~ 하아…… 헤헤~ 좋아? 오늘은 여기까지. 다음에 시간 날 때, ',
                self_call,
                '가 ',
                callname,
                '한테 말할 테니까!',
              ]);
              era.print([
                '헤어지기 전의 연인에게 자신의 흔적을 강하게 새기며, 작은',
                urara.uma_sex_title,
                '은 맑은 목소리로 탁한 욕망을 속삭인다.',
              ]);
            },
          );
        }
      }
    } else if (y_awake) {
      if (
        era.get('status:52:马跳S') ||
        era.get('status:52:马跳Z') ||
        era.get('status:52:超马跳Z') ||
        era.get('status:52:弗隆K') ||
        era.get('status:52:弗隆P') ||
        era.get('base:52:性欲') >= lust_border.absent_mind
      ) {
        buffer.push(
          () => {
            urara.say('으……읏……');
            era.print([
              '',
              you.get_colored_name(),
              '가 ',
              urara.sex,
              '를 돌려보내는 도중에도, 잠들어 있는 ',
              urara.get_colored_name(),
              '는 계속해서 불안한 듯한 신음 소리를 내고 있다.',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '작은 몸을 열기로 달군 채, ',
              you.get_colored_name(),
              '의 품에 파고든 ',
              urara.get_colored_name(),
              '는 돌아가는 길에도 여전히 핑크빛 꿈에 젖어 있다.',
            ]);
          },
        );
      } else {
        buffer.push(
          () => {
            urara.say('후에……');
            era.print([
              '숨소리가 점차 차분해지고 ',
              urara.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '의 곁에서 안심하고 잠들어 있다.',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '너무 피곤했는지 ',
              you.get_colored_name(),
              '의 품에 안긴 ',
              urara.get_colored_name(),
              '은(는) 조용히 잠들어 있다.',
            ]);
          },
          () => {
            urara.say('에헤헤……');
            era.print([
              '돌아가는 길 내내 잠꼬대를 하는, ',
              you.get_colored_name(),
              '의 등에 업힌 ',
              urara.get_colored_name(),
              '은(는) 대체 무슨 꿈을 꾸고 있을까?',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () =>
          era.print([
            '',
            you.get_colored_name(),
            '이(가) 잠든 걸 보고 ',
            urara.get_colored_name(),
            '은(는) 어떤 방법을 썼는지 몰래 ',
            you.get_colored_name(),
            '을(를) 거처로 데려다준 모양이다.',
          ]),
        () =>
          era.print([
            '눈을 떠 보니 ',
            you.get_colored_name(),
            '은(는) 이미 거처로 돌아와 있었다. 귓가에는 아직 ',
            urara.get_colored_name(),
            '의 작별 인사가 남아 있는 것 같다.',
          ]),
        () => {
          era.print(
            '눈을 뜨자 익숙한 천장이 보인다. 역시 침실로 돌아와 있었다.',
          );
          era.print(
            `담당에게 신세를 진 건 분명한데, 작은 ${urara.sex}은(는) 대체 어떻게 혼자 사람을 데려다준 걸까……`,
          );
        },
      );
      if (love >= 50) {
        buffer.push(() => {
          era.print([
            '',
            you.get_colored_name(),
            '을(를) 거처로 데려다준 뒤 ',
            urara.get_colored_name(),
            '은(는) 친절하게 ',
            you.get_colored_name(),
            '의 방도 조금 정리해 준 모양이다.',
          ]);
          era.print([
            '다만 영문을 알 수 없는 건, ',
            you.get_colored_name(),
            '은(는) 누군가 빨래 바구니의 옷을 뒤진 것 같다는 생각을 떨칠 수 없다는 것이다……',
          ]);
        });
      }
      if (love >= 75) {
        buffer.push(() => {
          era.print([
            '몽롱한 와중에 아쉬움이 담긴 입맞춤이 ',
            you.get_colored_name(),
            '의 뺨에 내려앉는다.',
          ]);
          era.print([
            '눈을 뜨자 ',
            urara.get_colored_name(),
            '은(는) 이미 곁에 없지만, 뺨에 남은 입맞춤의 감촉은 아직 생생하다.',
          ]);
        });
      }
      if (love >= 100) {
        buffer.push(() => {
          era.print([
            '다시 눈을 뜨자 ',
            you.get_colored_name(),
            '은(는) 이미 거처로 돌아와 있었다.',
          ]);
          era.print([
            '곁에는 아직 ',
            urara.get_colored_name(),
            '의 체온이 남아 있다. 여기서 ',
            urara.sex,
            '도 ',
            you.get_colored_name(),
            '하고 한동안 함께 있었던 모양이다.',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} check 求愛判定値。大成功なら既定で同意
   */
  async good_night_sex(urara, you, callname, self_call, high_relation, check) {
    const love = era.get('love:52');
    if (high_relation) {
      if (love === 100) {
        urara.say([
          '츄릅… 하아… ',
          callname,
          '…이번에도 기분 좋은 거, 할까? 만족할 때까지 해도 돼.',
        ]);
        era.print([
          '억누를 수 없는 포옹과 젖은 키스 뒤, 작은',
          urara.sex,
          '는 천진난만한 말투로 ',
          you.get_colored_name(),
          '의 귓가에 마성적인 유혹을 속삭인다.',
        ]);
      } else if (love >= 90) {
        urara.say([
          '쪽~ 그러니까 오늘 밤은 ',
          self_call,
          '랑… 괜찮지? 그러니까…… ',
          callname,
          ', ',
          self_call,
          '랑 같이 있을래?',
        ]);
        era.print([
          '조금 어른스러운 수줍음을 머금고 연인의 얼굴에 입을 맞추자,',
          urara.get_colored_name(),
          '의 미소 아래로 발그레하게 상기된 뺨이 보인다.',
        ]);
      } else if (love >= 75) {
        urara.say([
          '돌아갈 때,',
          self_call,
          ', ',
          callname,
          '방, 구경 가도 돼? 보, 보기만 할 거니까!',
        ]);
        era.print([
          '',
          urara.teen_sex_title,
          '무언가를 갈구하는 눈빛으로 모호한 변명을 늘어놓으며 뺨을 붉힌 ',
          urara.get_colored_name(),
          '의 마음은, 굳이 말하지 않아도 전해진다.',
        ]);
      } else {
        urara.say([
          callname,
          '！오늘은, 좀, 더 ',
          self_call,
          ' 곁에 있어 줄래? 밤에, 조금만 더 있어 줘!',
        ]);
        era.print([
          '꾸물물거리는 소리를 내며, ',
          you.get_colored_name(),
          '의 몸에 파고든 ',
          urara.get_colored_name(),
          '는 거친 숨을 내쉬며 ',
          you.get_colored_name(),
          '을(를) 붙잡는다.',
        ]);
      }
    } else if (love === 100) {
      urara.say([
        '요즘 피곤해? 그럼, 쪽……헤헤, 오늘 ',
        callname,
        '는 ',
        self_call,
        '한테 더 대단한 짓을 해도 괜찮아?',
      ]);
      era.print([
        '부드러운 감촉이 ',
        you.get_colored_name(),
        '의 입가를 스치고, 까치발을 한 ',
        urara.get_colored_name(),
        '는 가벼운 키스로',
        urara.sex,
        '의 ',
        callname,
        '에게 애틋한 마음을 전한다.',
      ]);
    } else if (love >= 90) {
      urara.say([
        '',
        self_call,
        '은 외롭지 않지만, ',
        callname,
        '이 원한다면……',
        self_call,
        '도 괜찮아?',
      ]);
      era.print([
        '형식적인 제안을 건네고, 헤어질 무렵 ',
        urara.get_colored_name(),
        '는 갑자기 풀린 눈으로 ',
        you.get_colored_name(),
        '의 허리를 끌어안는다.',
      ]);
    } else if (love >= 75) {
      urara.say([
        '',
        self_call,
        '를 데리고 가지 않을래? 내일 일에 지장이 없다면, 괜찮겠지……?',
      ]);
      era.print([
        '',
        you.get_colored_name(),
        '이 첫 번째 질문에 대답하기도 전에, 바짝 다가온 작은 ',
        urara.uma_sex_title,
        '는 채워지지 않은 듯한 표정으로 ',
        you.get_colored_name(),
        '에게 두 번째 질문을 던진다.',
      ]);
    } else {
      urara.say([callname, '、', self_call, ' 의 몸이 좀 이상해…… 안 가면 안될까?']);
      era.print([
        '내키지 않으면서도, 작은 ',
        urara.uma_sex_title,
        '는 얼굴을 새빨갛게 물들인 채 ',
        you.get_colored_name(),
        '의 옷자락을 붙잡는다. ',
      ]);
    }
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2, { disabled: check === 2 });
    return await era.input();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   */
  async after_punish(urara, you, callname, high_relation) {
    await era.printAndWait([
      '수치심조차 잊은 듯, 낯설게 느껴질 만큼 예민해진 몸을 어루만지며, 오늘의 ',
      you.get_colored_name(),
      '은(는) 트레이너실 구석에서 작고 달콤한 신음 소리를 흘리고 있다.',
    ]);
    await era.printAndWait([
      '거울 속의 몸과 얼굴은 믿기지 않을 만큼 아름답게 정돈되어 있지만,',
      you.get_colored_name(),
      '은(는) 깨지 않는 악몽에 잠긴 채 빠져나오지 못하고 있다. ',
    ]);
    await era.printAndWait([
      '살짝 스치기만 해도 몸이 참을 수 없을 만큼 간지러워…… 이것도 개조 때문일까? 아니면, 이게 우마무스메의 몸인 걸까……?',
    ]);
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '이 옷을 더 벗으려던 순간, 잠기지 않은 뒤쪽 문에서 가볍고 정중한 노크 소리가 들려온다.',
    ]);
    await era.printAndWait([
      '문이 열리기 1초 전, 거의 정신이 든 ',
      you.get_colored_name(),
      '은 공포로 요동치는 가슴을 부여잡고 황급히 몸을 가린다.',
    ]);
    await era.printAndWait([
      "눈앞의 옷매무새가 흐트러진 '우마무스메 언니'를 보고, 들어온 ",
      urara.get_colored_name(),
      '은(는) 천진하게 고개를 갸웃거린다.',
    ]);
    await urara.say_and_wait([
      '응?',
      callname,
      '이었구나. 우라라도 언젠가는 이렇게 될 거라고 생각했지만, 너무 빠르지 않아?',
    ]);
    await era.printAndWait([
      '놀란 뒤 곧 평소의 웃는 얼굴로 돌아온다. 금세 ',
      callname,
      '임을 알아본 작은 ',
      urara.uma_sex_title,
      '은(는) 변함없이 스스럼없이 ',
      you.get_colored_name(),
      '의 곁에 앉는다.',
    ]);
    await urara.say_and_wait([
      '에헤헤~',
      callname,
      '은(는) 역시 ',
      callname,
      '이구나! 처음부터 다시 알아 가야 하는 줄 알았어. 그러면 너무 아쉽잖아!',
    ]);

    era.printButton('「……우라라, 알고 있었어?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 우라라도 전에 다들한테 들은 적 있어. 그래도 ',
      callname,
      ' 같은 경우는 처음이야!',
    ]);
    await urara.say_and_wait([
      '그런데 ',
      callname,
      ', 엄청 달라졌네. 냄새만은 하나도 안 바뀌어서 바로 알아봤어!',
    ]);
    await era.printAndWait([
      '살며시 두 손을 뻗어 ',
      urara.get_colored_name(),
      '은(는) 위로하듯 ',
      you.get_colored_name(),
      '의 뺨을 쓰다듬고, 조금 망설이다가 손을 위로 올린다.',
    ]);
    await era.printAndWait([
      '담당의 장난스러운 손이 ',
      you.get_colored_name(),
      '의 한층 부드러워진 머리카락을 쓰다듬다가, 마지막에는 정수리 위의 아직 뜻대로 움직이지 않는 복슬복슬한 우마무스메 귀를 붙잡는다.',
    ]);
    if (high_relation) {
      await urara.say_and_wait([
        callname,
        ', 지금 불편하지? 그래도 괜찮아. 우라라가 ',
        callname,
        '한테 어떻게 생활하면 되는지 가르쳐 줄게!',
      ]);
      await urara.say_and_wait([
        '우라라, 다들한테 들었는데 ',
        callname,
        '이(가) 더 변하면 더 무서운 일이 일어난대……',
      ]);
      await era.printAndWait([
        '무서운 일이 떠오른 듯 ',
        urara.get_colored_name(),
        '은(는) 몸을 떨며 잠시 말을 멈춘다. 그러고는 위로하듯 웃으며 곁에 있는 ',
        you.get_colored_name(),
        '을(를) 끌어안는다.',
      ]);
      await urara.say_and_wait([
        '괜찮아! 정말 그렇게 되더라도 우라라가 ',
        callname,
        '을(를) 돌봐 줄게! 그래도 ',
        callname,
        '이(가) 그렇게 되지 않는 게 제일 좋아!',
      ]);
    } else {
      await urara.say_and_wait([
        '이렇게 된 ',
        callname,
        '이(가) 앞으로 우라라한테 더 다정하게 대해 주면 좋겠어. 그래도 정말 그렇게 될까?',
      ]);
      await urara.say_and_wait([
        '그리고 우라라가 들었는데, 예전처럼 계속 그러면 ',
        callname,
        ', 이상한 모습이 되어 버린대……',
      ]);
      await era.printAndWait([
        '갑자기 슬픈 일이 떠오른 듯 ',
        you.get_colored_name(),
        '의 몸을 꼭 끌어안은 작은 ',
        urara.uma_sex_title,
        '이(가) ',
        you.get_colored_name(),
        '을(를) 바라보는 눈빛도 조금 복잡해진다.',
      ]);
      await urara.say_and_wait([
        '정말 그렇게 된다면……',
        callname,
        '이(가) 싫어도 우라라가 돌봐 줄 수밖에 없다구?',
      ]);
    }

    await era.printAndWait([
      '작은 ',
      urara.get_colored_name(),
      '이(가) 아는 것은 ',
      you.get_colored_name(),
      '의 상상보다…… 아니, 어쩌면 ',
      you.get_colored_name(),
      '이(가) 아는 것보다 많을지도 모른다.',
    ]);
    await era.printAndWait([
      '다만…… 지금까지 어떻게 지내 왔든, 눈앞의 맑은 벚꽃빛 눈동자는 줄곧 ',
      urara.sex,
      '의 ',
      callname,
      '을(를) 걱정하고 있다.',
    ]);
    await era.printAndWait([
      '이제 돌아갈 수 없더라도, 지금이라면 늦지 않았을까?',
      urara.get_colored_name(),
      '을(를) 위해서라도 지금 변하려고 한다면 아직 늦지 않았을까?',
    ]);
    await era.printAndWait([
      '……적어도, 뒤늦은 그 한마디만큼은 ',
      urara.sex,
      '에게 전하자. 품에 안긴 작은 ',
      urara.uma_sex_title,
      '을(를) 끌어안으며 ',
      you.get_colored_name(),
      '은(는) 의무실에서 처음 나눴던 포옹을 떠올린다……',
    ]);

    era.printButton('「고마워……」', 1);
    await era.input();

    await urara.say_and_wait([
      '응?',
      callname,
      ', 왜 고맙다고 해? 우라라, 아직 아무것도 안 했는데?',
    ]);
    await urara.say_and_wait([
      '그래도……',
      callname,
      '이(가) 그렇게 되지 않으려면 우라라랑 ',
      callname,
      ', 말만 해서는 안 돼!',
    ]);
    await era.printAndWait([
      '길 잃은 여자아이를 달래듯 다정하게 ',
      you.get_colored_name(),
      '의 등을 토닥이며 ',
      urara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 품 안에서 여전히 부드럽게 웃고 있다.',
    ]);
    await era.printAndWait([
      '지금 이 순간에는, 어려 보이는 ',
      urara.sex,
      "이야말로 정말 의지할 수 있는 '어른'일지도 모른다……",
    ]);
    await urara.say_and_wait([
      '그래서 우라라, 정했어. 오늘부터 같이 달리자! 진심으로 하면 앞으로는 꼭 좋아지겠지?',
    ]);

    era.printButton('「응? 그래도 이 몸은 아직……」', 1);
    await era.input();

    await urara.say_and_wait([
      '걱정하지 마! 약속할게!',
      callname,
      ', 앞으로는 우라라보다 빨리 달릴 수 있게 될 거야!',
    ]);
    await urara.say_and_wait([
      '그러니까…… 진 사람이 꼬리 만지게 해 주기! 에헤헤~ 어차피 ',
      callname,
      ' 꼬리, 자다 일어난 것처럼 부스스하잖아?',
    ]);
    await era.printAndWait([
      '',
      you.get_colored_name(),
      '이(가) 알아차리기도 전에 ',
      urara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 손을 잡고 트레이너실을 뛰쳐나와 트레이닝장으로 달려간다.',
    ]);
    await era.printAndWait([
      '',
      you.get_colored_name(),
      '은(는) 아직 아무것도 하지 않았는데, 작은 담당과의 거리는 어느새 다시 가까워져 있었다.',
    ]);
    await era.printAndWait([
      '우마무스메가 되어 버린 게…… 꼭 나쁜 일만은 아닌 걸까?',
    ]);
  },
  lets_slp: (() => {
    const title = '같이 자자!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '트레이너실에 들어서자마자, ',
        you.get_colored_name(),
        '은 너무 편하게 자고 있는 ',
        urara.get_colored_name(),
        '을 발견한다.',
      ]);
      await era.printAndWait(
        '트레이너실이 너무 아늑한 걸까, 아니면 작은 담당이 이곳을 「집」처럼 여기는 걸까.',
      );
      await era.printAndWait([
        '온몸에는 몸에 딱 맞는 핑크색 스포츠 속옷만 걸치고 있다.',
      ]);
      await era.printAndWait([
        '벚꽃색 머리카락과 꼬리는 몸 아래로 자연스럽게 풀려 있고, 작고 귀여운 귀도 힘을 뺀 채 살랑거린다.',
      ]);
      await era.printAndWait([
        '인형처럼 귀여운 얼굴은 안도한 표정이며, 잠든 채 자연스럽게 몸을 펴는 작은',
        urara.uma_sex_title,
        '의 피부가 조명 아래서 건강한 윤기를 띠고 있다.',
      ]);
      await era.printAndWait([
        '타이트한 속옷이',
        urara.teen_sex_title,
        '의 부드러운 몸을 살짝 파고들고, 풋풋한 육감과 자라나는 곡선이 마치 꽃봉오리 같은 몸 위에서 미묘한 균형을 이루고 있다.',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '어떤 사정으로 인해 과하게 풍만한 가슴은 상체에 남은 천을 한껏 밀어내며, 자그마한',
          urara.uma_sex_title,
          '의 몸 위에서 자유롭게 그 존재감을 드러내고 있다.',
        ]);
      }
      await era.printAndWait([
        '트레이너실의 소파 베드에 누워,',
        urara.get_colored_name(),
        '는 무방비하고 사랑스러운 몸을 드러내고 있다.',
      ]);
      await era.printAndWait([
        '이토록 경계심 없는 귀여운 생명체를 앞에 두고, 자그마한',
        urara.uma_sex_title,
        '와 처음 만나 같은 침대에서 잠들었을 때와 비슷한 생각이 ',
        you.get_colored_name(),
        '의 머릿속에 떠오른다.',
      ]);
      await era.printAndWait([
        '이렇게 부드럽고 작은 생명체,',
        urara.sex,
        '의 잠을 방해하지 않는다면 한번 쓰다듬어 보고 싶어진다. 담당마의 이런 모습을 보고 있으니, 보는 사람까지 졸음이 쏟아진다.',
      ]);
      await era.printAndWait([
        '남은 일이 없다면, ',
        urara.get_colored_name(),
        '과 잠깐 누워 있는 것도 나쁘지 않을지 모른다.',
      ]);
      await era.printAndWait([
        '이미 어른인 ',
        you.get_colored_name(),
        '은 설령 ',
        urara.get_colored_name(),
        ' ',
        urara.sex,
        '이 허락하더라도 그런 응석을 부려서는 안 되겠지만……',
      ]);
      await era.printAndWait(
        '하지만 이렇게 무방비하게 자다가는 배가 차가워질지도 모른다.',
      );
      await era.printAndWait([
        '그런 생각에, ',
        you.get_colored_name(),
        '은 옆에 있던 담요를 집어 들고, ',
        urara.get_colored_name(),
        '을 깨우지 않도록 조심스레 다가간다.',
      ]);
      await urara.say_and_wait(['응?', callname, '……？']);
      await era.printAndWait([
        '예민한 작은 귀를 움직여 소리를 알아챈 무방비한 ',
        urara.teen_sex_title,
        '은 눈을 살짝 뜨고, 흐릿한 시선으로 담요를 덮어 주려는 ',
        you.get_colored_name(),
        '을 알아본다.',
      ]);
      await era.printAndWait([
        '잠결에 작은 손으로 더듬더니, ',
        you.get_colored_name(),
        '의 손목을 붙잡는다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '이 힘을 풀지 않고 잡아당기자, ',
        you.get_colored_name(),
        '은 담요와 함께 담당의 침대 위로 끌려 넘어간다.',
      ]);
      await era.printAndWait([
        '눕는 순간 허리를 꼭 끌어안긴다. 지금 ',
        urara.get_colored_name(),
        '은 자신의 ',
        callname,
        '을 편히 잠들기 위한 안는 베개로 삼고 있다.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(['에헤헤~', callname, '의 느낌……']);
        await era.printAndWait([
          '완전히 꿈속에서 하는 반응으로, ',
          urara.get_colored_name(),
          '은 만족스럽게 ',
          you.get_colored_name(),
          '의 몸에 파고든다.',
        ]);
        await era.printAndWait([
          '가느다란 숨소리가 차분해지고, ',
          you.get_colored_name(),
          '을 꼭 안은 ',
          urara.teen_sex_title,
          '은 안심하고 깊이 잠든다.',
        ]);
      } else {
        await urara.say_and_wait('음…… 별로 푹신하지 않아……');
        await era.printAndWait([
          '안는 베개가 푹신하지 않아서인지, ',
          urara.get_colored_name(),
          '은 잠결에 조금 불만스럽게 입술을 삐죽 내민다.',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          '의 불친절함을 작은 목소리로 투덜대면서도, ',
          urara.get_colored_name(),
          '은 손을 놓을 기색이 없다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '목덜미에 파묻힌 머리카락이 달콤한 향기를 풍기고, 자그마한',
        urara.uma_sex_title,
        '의 마음을 진정시키는 듯한 향기가 살결의 맞닿음을 타고 장난스럽게 ',
        you.get_colored_name(),
        '의 코끝으로 스며든다.',
      ]);
      await era.printAndWait(
        '긴장이 풀리면서 시야가 흐려지고, 두 손은 아직 다 덮지 못한 담요조차 제대로 붙들지 못한다.',
      );
      await era.printAndWait([
        '남은 일은커녕, 눕자마자 쏟아지는 잠을 막을 수가 없다. 하지만 ',
        urara.get_colored_name(),
        '과 함께 자는 것도 나쁘지 않다. 한숨 자고 나서 해도 늦지 않겠지.',
      ]);
      await era.printAndWait(
        '다시 눈을 뜨면 일이 산더미처럼 쌓여 있겠지만, 날을 가는 시간이 장작 패는 일을 늦추지는 않는 법이니까……',
      );
      await era.printAndWait([
        '그렇게 자신을 설득하며, ',
        you.get_colored_name(),
        '은 잠들기 전에 둘에게 담요를 덮고, ',
        urara.get_colored_name(),
        '과 함께 모처럼의 휴식에 빠져든다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '뻔뻔해서, 질투가 날 지경이네요…… 아니요, 끼고 싶다는 뜻은 정말 아니에요……',
      );
    };
    f.title = title;
    return f;
  })(),
  time_cap: (() => {
    const title = '타임캡슐이야!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(
        '오늘 중정에는 아무도 없다. 그 마른 나무 구멍도 잔디밭 한가운데에서 조용히 주위를 지켜보고 있다.',
      );
      await era.printAndWait([
        '익숙한 그루터기 가장자리에 앉아, 곁에 있는 이제는 특별한 의미를 지닌 ',
        you.get_colored_name(),
        '을(를) 바라보며 오늘의 ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 평소와 다른 이야기를 꺼낸다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 얼마 전에 다들하고 타임캡슐을 만들었어!',
      ]);

      era.printButton('「재미있었겠네!」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 다들 서두르느라 쓴 글도 엉망이었지만, 정말 재미있었어!',
      );
      await urara.say_and_wait(
        '그래서 말이야, 다 쓰고 묻으려고 할 때 어디에 묻을지 이것저것 이야기했는데, 역시 늘 가던 곳으로 정했어!',
      );
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        '의 시선을 따라 ',
        you.get_colored_name(),
        '도 말없는 나무 구멍을 바라본다. 나무 밑 잔디밭 한쪽에 분명 땅을 파헤친 흔적이 있다.',
      ]);
      await era.printAndWait([
        '다른 사람에게는 뜻밖일지 몰라도 트레센의 ',
        urara.uma_sex_title,
        '들에게는 납득할 만한 선택이다.',
      ]);

      era.printButton('「그런데 왜 일부러 알려 준 거야?」', 1);
      await era.input();

      await urara.say_and_wait([
        '어…… 음, 아마 ',
        callname,
        '은(는) 나무 구멍처럼 비밀을 잘 지켜 주니까!',
      ]);
      await era.printAndWait([
        '잠깐 표정이 굳었던 작은 ',
        urara.uma_sex_title,
        '은(는) 아무도 없는 중정으로 다시 시선을 돌린다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 변함없이 밝게 웃고 있지만, ',
        urara.sex,
        '은(는) 드물게 무언가를 마음에 품고 조금 고민하고 있다. 지금 ',
        urara.sex,
        '은(는) 평소와 다른 생각을 하는 모양이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그 밝은 모습 속에 섞인 한 줄기 근심과 문득 발견한 동경, 망설임을 알아차리지만, ',
        urara.sex,
        '의 속마음은 아직 분명하지 않다.',
      ]);
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' 자신도 아직 모르는 걸지도 모른다. 트레이너인 ',
        you.get_colored_name(),
        '이(가) 이야기를 들어 주는 사람의 입장에서 우연히 지금 알아차렸을 뿐이다.',
      ]);
      await urara.say_and_wait(
        '앞으로의 꿈은 다들 다르지만, 단체 사진 속에서는 똑같이 웃고 있어! 그러니까 이대로 헤어져도 다들 기쁠 거야──',
      );
      await urara.say_and_wait(
        '그래도 다들 즐겁게 지내는데, 꿈이 다르니까 언젠가는 헤어질 날이 오겠지……',
      );
      await era.printAndWait([
        "'즐거운' 말투로 ",
        you.get_colored_name(),
        '에게 타임캡슐을 묻은 이야기를 한다. ',
        urara.get_colored_name(),
        '의 꼬리와 오른발은 ',
        urara.sex,
        '의 생각을 따라 저절로 빙글빙글 움직인다.',
      ]);
      await era.printAndWait([
        '그러고 나서 조금은 받아들인 듯한 ',
        urara.get_colored_name(),
        "은(는) '이해한 뒤'의 미소로 ",
        you.get_colored_name(),
        '을(를) 바라본다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 헤어지는 날이 오면 ',
        callname,
        '은(는) 우라라랑 헤어지기 아쉬울까? ……우라라는 꼭 ',
        callname,
        '하고 헤어지기 아쉬울 거야. 그때는 울어 버릴 거야!',
      ]);
      await era.printAndWait([
        '그런데도 웃는 얼굴인 ',
        urara.get_colored_name(),
        '은(는) 어른이라면 말하고 싶어도 말하지 못할 것을 밝게 인정한다.',
      ]);
      await era.printAndWait([
        '어느새 훌쩍 성장한 ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 미소 짓는다. 잠시 말을 멈출 때도 목소리는 흔들리지 않는다.',
      ]);
      await urara.say_and_wait([
        '그래도 그러면 ',
        callname,
        '도 슬프겠지? 그러니까 그때가 와도 우라라는 울지 않게 꾹 참을게!',
      ]);
      await era.printAndWait([
        '어느새 ',
        you.get_colored_name(),
        '의 곁에 꼭 붙은 분홍빛 그림자가 희미하게 떨리고 있다. 그건 ',
        you.get_colored_name(),
        '의 착각이 아니다. 그런데도 ',
        urara.get_colored_name(),
        '은(는) 계속 웃으며 ',
        you.get_colored_name(),
        '의 손가락에 자기 손가락을 얽는다.',
      ]);
      await urara.say_and_wait([
        '그러니까 그때는 ',
        callname,
        '도 울면 안 돼! 약속이야!',
        callname,
        '하고 우라라는 꼭 다시 만날 수 있으니까!',
      ]);
      await era.printAndWait([
        '벚꽃빛 눈동자가 옅은 눈물 속에서 빛난다. 지금 힘껏 귀를 세우려 애쓰는 ',
        urara.sex,
        '은(는) 누구에게도 뒤지지 않을 만큼 깊고 진실한 마음을 품고 있다.',
      ]);
      await urara.say_and_wait([
        '우리 사이가 어떻게 되든, 앞으로 어디로 가든, 우라라는 ',
        callname,
        '을(를) 기억할 거야! 그러니까, 그러니까……',
      ]);

      era.printButton(
        '「그러니까 약속한 거야. 앞으로 헤어지더라도 다시 만날 수 있다고.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '담당이 정말 눈물을 흘리기 전에 ',
        you.get_colored_name(),
        '이(가) 먼저 맹세하고 ',
        urara.sex,
        '에게 어른의 포옹을 건넨다.',
      ]);
      await era.printAndWait(
        '충동적으로 행동하지 말 것, 함부로 맹세하지 말 것, 누구와의 약속이든 가볍게 여기지 말 것, 약속하기 전에 지킬 수 있는지 생각할 것──',
      );
      await era.printAndWait([
        '그런 것들을 ',
        you.get_colored_name(),
        '은(는) 모두 알고 있다. 하지만 지금, 자신도 모르는 사이 성장한 ',
        urara.get_colored_name(),
        '에게 마음이 이끌린 ',
        you.get_colored_name(),
        '은(는) 마음이 시키는 대로 단 하나의 답을 내놓는다.',
      ]);
      await era.printAndWait([
        '계약을 맺었을 때와 닮았으면서도 다른 두근거림을 느끼며 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 부드러운 머리카락을 쓰다듬고 ',
        urara.sex,
        '의 눈가에 맺힌 눈물을 닦아 준다.',
      ]);

      era.printButton('「같이 돌아가자!」', 1);
      await era.input();

      await urara.say_and_wait('응!');
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '그렇군요. 그럼 미래의 우라라가 그때 소원을 이룰 수 있기를……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '미래의 당신도, 변하더라도 이 ',
        urara.teen_sex_title,
        '하고 한 약속을 지킬 수 있기를……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  rof_time: (() => {
    const title = '꾸벅꾸벅 옥상에서 보내는 시간';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '성장했다고는 해도 지금의 ',
        urara.get_colored_name(),
        '은(는) 아직 어린아이 같은 생활 습관을 완전히 고치지는 못했다.',
      ]);
      await era.printAndWait([
        '아까 너무 지쳤던 걸까? 점심시간이 조금 늦어졌을 뿐인데 ',
        urara.get_colored_name(),
        '은(는) 벌써 졸음에 빠져들려 한다.',
      ]);
      await era.printAndWait([
        '밥을 먹기도 전에 꾸벅꾸벅 조는 담당의 작은 얼굴을 보며 ',
        you.get_colored_name(),
        '은(는) 두 사람 몫의 도시락을 꺼내고 옥상 벤치에 자리를 만든다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '은(는) 마음으로는 빨리 어른이 되고 싶어 하지만, 정말로 성장하려면 아직 시간이 필요하다.',
      ]);
      await era.printAndWait([
        '그래도 밥은 제때 먹어야 하는 법이다.',
        urara.get_colored_name(),
        '의 졸린 얼굴을 보고 ',
        you.get_colored_name(),
        '은(는) 잠시 생각한다.',
      ]);
      await era.printAndWait('방법이 없는 건 아니다. 다만……');

      era.printButton(
        '「우라라, 정말 졸리면 편하게 있어. 내가 먹여 줄게.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '',
        you.get_colored_name(),
        '의 제안을 듣고 비몽사몽인 ',
        urara.get_colored_name(),
        '은(는) 잠깐 굳었다가, 눈을 비비며 ',
        you.get_colored_name(),
        '에게 졸린 미소를 애써 지어 보인다.',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '벤치에 얌전히 앉은 ',
          urara.get_colored_name(),
          '은(는) 먹이를 기다리는 아기 새처럼 수줍게 눈을 감고 작은 입을 벌린다.',
        ]);
        await era.printAndWait([
          '젓가락을 꺼내 계란말이 한 조각을 살짝 집은 뒤, 어미 새 역할을 맡은 ',
          you.get_colored_name(),
          '은(는) 조심스럽게 아기 새의 입으로 가져간다.',
        ]);
        await era.printAndWait([
          '반을 살짝 베어 문 ',
          urara.get_colored_name(),
          '은(는) 눈을 감은 채 ',
          callname,
          '이(가) 먹여 준 음식을 맛본다.',
        ]);
        await era.printAndWait([
          '안심하고 삼킨 뒤, 작은 ',
          urara.uma_sex_title,
          '은(는) 만족스러운 듯 젓가락에 남은 반쪽도 먹는다.',
        ]);
      } else {
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '은(는) 조금 내키지 않는 듯하지만, 피로를 이기지 못한 ',
          urara.sex,
          '은(는) 그래도 ',
          you.get_colored_name(),
          ' 쪽으로 조금 다가온다.',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          '이(가) 먹어 줄지는 아직 모르지만, ',
          you.get_colored_name(),
          '은(는) 일단 젓가락으로 닭튀김을 집어 담당 쪽으로 다가간다.',
        ]);
        await era.printAndWait([
          '조금 망설이던 ',
          urara.get_colored_name(),
          '은(는) 튀김 냄새를 맡자 순순히 작은 입을 벌려 고기를 베어 문다.',
        ]);
        await era.printAndWait([
          '작게 씹고 삼키는 소리를 내며 작은 ',
          urara.uma_sex_title,
          '은(는) ',
          you.get_colored_name(),
          '이(가) 먹여 주는 동안 점점 안심한다.',
        ]);
      }
      era.println();
      await era.printAndWait('이번에는 맛이 나쁘지 않아서 다행이다.');
      await era.printAndWait([
        '담당이 천천히 씹는 걸 기다렸다가 ',
        you.get_colored_name(),
        '은(는) 젓가락으로 다른 반찬을 집는다.',
      ]);
      await era.printAndWait([
        '정성껏 ',
        urara.get_colored_name(),
        '에게 먹여 주고 휴지로 ',
        urara.sex,
        '의 입가를 닦아 주는 사이, 묘한 감정이 ',
        you.get_colored_name(),
        '을(를) 감싼다.',
      ]);
      await era.printAndWait([
        '원래도 또래보다 어려 보이는데, 지금은 기운도 없이 축 늘어져 있어서 작은 ',
        urara.uma_sex_title,
        '은(는) 더욱 진짜 어린아이 같다.',
      ]);
      await era.printAndWait([
        '그래도 귀엽다.',
        urara.get_colored_name(),
        '이(가) 사람에게서 떨어지지 못하는 작은 반려동물 같은 모습으로 남아 있어도 나쁘지 않을까?',
      ]);
      await era.printAndWait([
        '두서없는 생각을 하는 동안, 손에 든 도시락은 ',
        you.get_colored_name(),
        '이(가) 작은 생명체에게 음식을 먹여 주면서 점점 비어 간다.',
      ]);
      await era.printAndWait(
        '다만 이렇게 졸면서 식사를 하고 나니…… 역시 어린아이라고 해야 할까.',
      );
      await era.printAndWait([
        '만족스럽게 배를 채운 뒤, 원래도 비몽사몽이던 ',
        urara.get_colored_name(),
        '은(는) 식곤증까지 더해져 더욱 버티기 힘들어한다.',
      ]);
      await era.printAndWait(
        '이렇게 되리라는 것도 아마 담당 트레이너는 예상했을 것이다.',
      );

      era.printButton(
        '「지금은 조금 눈을 붙여. 무슨 일이 생기면 먼저 우라라를 부를게.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '금방이라도 쓰러질 듯한 담당을 보고 ',
        you.get_colored_name(),
        '은(는) 조금 체념한 듯 자기 허벅지를 두드린다.',
      ]);
      await era.printAndWait([
        '이제 생각이고 태도고 아무래도 상관없다.',
        you.get_colored_name(),
        '의 쉬라는 제안을 듣자 작은 ',
        urara.uma_sex_title,
        '은(는) 곧 버티고 있던 몸에서 힘을 뺀다.',
      ]);
      await era.printAndWait([
        '기다렸다는 듯 기지개를 켜고 ',
        you.get_colored_name(),
        ' 쪽으로 몸을 눕힌다. ',
        you.get_colored_name(),
        '의 허벅지를 베고 옥상 벤치에서 몸을 웅크린 ',
        urara.get_colored_name(),
        '은(는) 금세 깊이 잠든다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 역시 어린아이인 모양이다. 하지만 ',
        urara.sex,
        '이(가) 이토록 착한 아이이기에 오늘 작은 ',
        urara.uma_sex_title,
        '이(가) 주는 위안은 으뜸이다.',
      ]);
      await era.printAndWait([
        '',
        you.get_colored_name(),
        '의 무릎 위에서 편안히 숨 쉬는 분홍빛 작은 생명체를 쓰다듬으며 ',
        you.get_colored_name(),
        '도 흐뭇한 기분으로 자신의 도시락을 집어 든다.',
      ]);
      await era.printAndWait('오늘은 하늘이 정말 좋다.');
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        '은(는) 사양할지도 모르지만, 오늘 두 사람의 도시락은 ',
        urara.sex,
        '의 ',
        callname,
        '이(가) 정리하기로 하자.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '하아, 좋네요…… 아니요, 부러운 건 아니에요……',
      );
    };
    f.title = title;
    return f;
  })(),
  spe_mach: (() => {
    const title = '구석의 이상한 기계';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_19 ハルウララのアグネスデジタルへの呼び方
     * @param {PrintedSpan} call_30 ハルウララの呼び方
     */
    const f = async (urara, inner_urara, you, callname, call_19, call_30) => {
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await urara.print_and_wait([
        '어느 날 외출 중, ',
        callname,
        '이 배가 조금 아파 자리를 비우자, 혼자 남은 ',
        urara.get_colored_name(),
        '은 호기심에 이끌려 주변을 둘러보기 시작한다.',
      ]);
      await urara.print_and_wait([
        '서로 다른 경품이 든 인형 뽑기 기계 사이를 돌아다니던 ',
        urara.get_colored_name(),
        '은 곧 지금까지 눈치채지 못했던 기계 한 대에 마음이 끌린다.',
      ]);
      await urara.print_and_wait(
        '그 수수께끼의 기계는 사냥하는 거미처럼 어두운 구석에 자리 잡고 있으며, 소박한 외관과 어둑한 분홍빛 조명은 그 안의 수수께끼 같은 상품을 감추고 있다.',
      );
      await urara.print_and_wait(
        '기계 한구석에 적힌 "메지로 시티 제작"이라는 문구는 이것이 이곳에 있어서는 안 될 물건임을 증명하지만, 이 은밀한 구석을 발견한 시점에서는 이미 늦었다.',
      );
      await urara.print_and_wait([
        '작은',
        urara.uma_sex_title,
        '은 순식간에 이 환각 같은 기계에 마음을 빼앗기고, 놀라움에 터져 나오려는 비명을 입으로 틀어막으면서도 그 안의 "서프라이즈"에서 시선을 떼지 못한다.',
      ]);
      await urara.print_and_wait([
        '어둑한 분홍빛 아래, 기괴한 물건들이 충격적인 모습으로 쌓여 있고, 얇은 유리창 너머로',
        urara.sex,
        '를 향해 유혹하듯 손길을 뻗고 있다.',
      ]);
      await urara.print_and_wait([
        '빨리 벗어나야 한다는 걸 알면서도, 평소 가장 솔직하던 두 다리는 주인의 의지를 거스른 채 분홍빛 함정으로 조금씩 다가간다.',
      ]);
      await urara.print_and_wait([
        '구멍으로 뛰어들기 전 잠시 망설이는 앨리스처럼,',
        urara.teen_sex_title,
        '은 미지의 설렘 속에서 귀를 접고, 떨리는 손을 투입구로 뻗는다.',
      ]);
      await urara.print_and_wait(
        '다른 느릿한 크레인들과 달리, 이 기묘한 기계는 움직이기 시작한 순간부터 레버의 명령을 즉각적으로 수행한다.',
      );
      await urara.print_and_wait(
        '힘차게 움켜쥐고 안정적으로 옮긴 뒤, 지나치게 큰 집게는 살짝 찌그러진 선물 상자를 가볍게 뱉어낸다.',
      );
      await urara.print_and_wait([
        '가슴을 졸이며 대충 집어 올린 물건을 꺼내어,',
        urara.get_colored_name(),
        ' 은 작은 행운을 품은 채, 책가방에 숨길 수 있을 만한 크기의 상자를 연다.',
      ]);
      await urara.print_and_wait([
        '이건',
        urara.sex,
        '가 ',
        call_30,
        ' 와 ',
        call_19,
        ' 몰래 숨겨두었던 이상한 만화에서 봤던 그 "장난감"이지만, 형태는 다르다.',
      ]);
      await urara.print_and_wait([
        '뾰족한 머리와 타원형 몸통을 가진 금속 플러그가',
        urara.child_sex_title,
        '의 손에서 차가운 기운을 내뿜고 있고, 짧은 금속 막대로 이어진 부드러운 받침대 아래에는 강력한 검은색 흡착판이 달려 있다.',
      ]);
      await urara.print_and_wait([
        '손에 쥐어보니, 작은',
        urara.uma_sex_title,
        '는 그것이 길쭉한 배(pear) 정도의 크기라는 것을 깨닫는다. 이건 절대 "초보자"용이 아니다.',
      ]);
      await urara.print_and_wait([
        '마음을 잃어버린 것처럼,',
        urara.teen_sex_title,
        '의 벚꽃색 눈동자는 조명 아래에서 요염하고 짙은 분홍빛으로 물들고,',
        urara.sex,
        '은 멍하니 구석에서 스커트와 상의를 걷어 올린다……',
      ]);
      await urara.say_and_wait('괘, 괜찮아…… 잠깐, 잠깐 시험해 보는 것뿐이야……');
      await urara.print_and_wait([
        '작은 목소리로 스스로를 다독이며,',
        urara.get_colored_name(),
        ' 은 포장지의 설명대로 흡착판을 바닥에 고정한다.',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        '은 한 손으로 스커트를 풀고 스패츠와 속옷을 벗어 옆으로 던진 뒤, 다른 손으로 꼬리를 가볍게 치운다.',
      ]);
      await urara.print_and_wait([
        '만화 속 피학적인 여주인공을 흉내 내며, 하반신을 드러낸 작은',
        urara.uma_sex_title,
        '은 네 발로 엎드려 천천히 몸을 숙인다.',
      ]);
      await urara.print_and_wait([
        '차가운 공기에 노출된 뒤쪽 구멍은 질혈과 마찬가지로 긴장하여 수축하고, 몸을 떨며 애널 플러그의 금속 끝부분에 위치를 맞춘다.',
      ]);
      era.println();
      if (era.get('exp:52:肛交次数') >= 10) {
        await urara.print_and_wait([
          '끝부분의 차가운 감촉이 파고들자,',
          urara.teen_sex_title,
          '는 몸을 지탱하며, 이 다소 과하게 긴 플러그를 인내심 있게 삼키려 한다.',
        ]);
        await urara.print_and_wait([
          '하지만',
          urara.sex,
          '는 자신의 경험과 성적 내성을 과신한 나머지, 이 작은',
          urara.sex_slave_title,
          '의 몸이 얼마나 음란한지 오판하고 말았다.',
        ]);
        await urara.print_and_wait(
          '양다리에서 힘이 빠지자, 애널은 아래로 향하는 중력 속에서 아무런 준비도 없이 거대한 금속 덩어리를 통째로 삼켜버린다……',
        );
      } else {
        await urara.print_and_wait([
          '끝부분의 차가운 감촉이,',
          urara.teen_sex_title,
          '의 느슨해지던 애널을 조여들게 하고,',
          urara.sex,
          '에게 한 줄기 이성적인 자제심을 되찾아준다.',
        ]);
        await urara.print_and_wait(
          '하지만 단련된 두 다리는 너무나 예민해서, 몸이 보내는 최음 신호에 반응하는 순간 힘이 풀려버린다.',
        );
        await urara.print_and_wait([
          urara.teen_sex_title,
          '은 미끄러지듯 무릎을 꿇고 바닥으로 쓰러지며, 거대한 애널 플러그가 순식간에 뒤쪽으로 완전히 삼켜진다……',
        ]);
      }
      era.println();
      await urara.print_and_wait([
        '비명을 지를 겨를도 없이, 작은',
        urara.uma_sex_title,
        '은 갑작스러운 자극에 하반신을 뻣뻣하게 굳힌 채 앞으로 쓰러진다.',
      ]);
      await urara.print_and_wait([
        '바닥에 붙어 있던 흡착판이 "뽁" 하는 소리와 함께 떨어지고,',
        urara.get_colored_name(),
        '의 작은 몸은 차가운 바닥 위로 무겁게 엎드려진다.',
      ]);
      await urara.print_and_wait([
        '태생적으로 음란한 몸은 비정상적인 성기의 삽입에 연달아 절정으로 치닫고, 뇌가 순간적으로 아득해진 작은',
        urara.uma_sex_title,
        '의 목구멍은 소리 없는 신음을 토해낸다.',
      ]);
      await urara.print_and_wait(
        '마치 임신할 준비를 하는 듯한 자세로 무력하게 바닥에 엎드린 채, 거친 숨을 내쉬는 음란한 분홍빛 신음은 작은 애원처럼도, 녹아내리는 듯한 비명처럼도 들린다.',
      );
      await urara.print_and_wait(
        '몸을 지탱할 힘조차 사라진 팔은, 몸의 흔들림에 맞춰 무력하게 바닥을 훑는다.',
      );
      await urara.print_and_wait(
        '앳된 얼굴은 마치 능욕당하는 것처럼 바닥에 눌려 비벼진다.',
      );
      await urara.print_and_wait(
        '엉덩이와 꼬리 또한 발정기에 육봉을 향해 고개를 숙이는 암컷처럼, 쾌감 속에서 무의식적으로 높이 치켜올려진다.',
      );
      await urara.print_and_wait(
        '태생적으로 음란한 뒤쪽 구멍은 마치 달콤한 사탕을 빨아들이듯, 거대한 구체를 탐욕스럽게 안쪽으로 계속 조여댄다.',
      );
      await urara.print_and_wait([
        '작은',
        urara.sex_code - 1 ? '암말' : '수말',
        '의 지나치게 발달한 엉덩이는 터무니없이 크지는 않지만, 두툼하고 부드러운 엉덩이 살이 받침대를 조여 변형시키고는 자국 하나 남기지 않은 채 감싸 안는다.',
      ]);
      await urara.print_and_wait(
        '공포와 쾌감이 뒤섞인 눈물, 침, 그리고 땀이 다리 사이에서 억누를 수 없이 흘러나오는 애액과 함께 아래쪽의 매끄러운 바닥 타일을 적신다.',
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait(
          '두 개의 하얀 둔덕이 몸과 함께 거칠게 떨리고, 발정 난 젖꼭지는 고장 난 수도꼭지처럼 하얀 즙을 멋대로 뿜어낸다.',
        );
        await urara.print_and_wait(
          '강렬한 절정이 이어지면서 하얀 유방은 주인이 당황할 정도로 모유를 쏟아내는데, 마치 누군가 우유 팩을 반쯤 엎질러 바닥에 장난스럽게 쏟아놓은 듯한 모습이다.',
        );
        await urara.print_and_wait(
          '미리 옷을 걷어 올리고 가슴 띠를 풀어두지 않았다면, 쉴 새 없이 뿜어져 나오는 음란한 가슴이 안쪽에서부터 옷감을 남에게 보일 수 없을 정도로 흠뻑 적셔 놓았을 것이다.',
        );
        era.println();
      }
      await urara.print_and_wait(
        '각종 액체가 쉴 새 없이 벽면 타일과 바닥으로 튀어 올라, 아무도 없는 게임센터 구석을 온통 얼룩지게 만든다.',
      );
      await urara.print_and_wait([
        '물소리가 몇 번 잦아든 뒤, 약간의 기운과 이성을 되찾은 작은',
        urara.uma_sex_title,
        '은 마침내 무언가를 떠올린 듯, 음란하게 달아오른 몸을 질질 끌며 볼품없는 꼴로 기어가기 시작한다……',
      ]);
      await urara.print_and_wait([
        '나란히 놓인 게임기들을 지지대 삼아 걸으며,',
        urara.get_colored_name(),
        ' 은 아랫배에 딱딱한 것이 닿아 있는 감각에 간신히 적응해 간다.',
      ]);
      await urara.print_and_wait([
        '음란한 차림새를 반쯤 가린 채, 작은',
        urara.uma_sex_title,
        '은 그래도 ',
        callname,
        ' 보다 먼저, 반쯤 기어가다시피 하며 약속 장소로 돌아간다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '뒤늦게 도착한 ',
        you.get_colored_name(),
        ' 은 얼굴을 붉힌 채 거친 숨을 몰아쉬는 ',
        urara.get_colored_name(),
        ' 을 보고는, 놀란 기색으로 눈썹을 치켜올린다.',
      ]);

      era.printButton('「왜 그래? 몸이 안 좋아? 힘들면 조금 더 쉬자……」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '도 어느 정도 짐작은 하고 있지만,',
        urara.get_colored_name(),
        '을(를) 위해서라면 지금은 모르는 척하는 수밖에 없다.',
      ]);
      await era.printAndWait([
        '아무것도 모르는 척하는 ',
        you.get_colored_name(),
        '의 배려 앞에서, 더 이상 생각할 힘조차 없는 ',
        urara.get_colored_name(),
        '은 본능적으로 떨리는 두 다리를 붙잡을 뿐이다.',
      ]);
      await era.printAndWait([
        '하지만 억지로 미소를 지은',
        urara.sex,
        '은 이번에는 의외로 단호하게 "괜찮아!"라고 말하며, 스스로 걸어서 돌아가겠다고 고집을 부린다.',
      ]);
      await era.printAndWait([
        '실랑이 끝에, 예민해진 몸에 자신이 없는 작은',
        urara.uma_sex_title,
        '은 그래도 어떻게든 ',
        you.get_colored_name(),
        '의 부축을 받아들인다.',
      ]);
      await era.printAndWait([
        '모른 척을 하고 있던 ',
        you.get_colored_name(),
        '도 긴장해서 담당에게 밀착해 부축하면서 ',
        urara.sex,
        '이(가) 남긴 이상한 흔적은 최대한 외면하려 노력한다.',
      ]);
      await era.printAndWait([
        '예를 들어 ',
        urara.get_colored_name(),
        '가 일어선 회전의자에는 둥근 흡착판 모양의 자국이 남은 물 얼룩이 있다.',
      ]);
      await era.printAndWait([
        '예를 들어 돌아가는 길, 작은 ',
        urara.uma_sex_title,
        '는 부자연스러운 경련 때문에 몇 번이고 발걸음을 늦춘다.',
      ]);
      await era.printAndWait(
        '예를 들어 지퍼를 잠그지 않은 책가방 속, 자국이 남은 분홍색 상자가 흔들림에 따라 보였다 안 보였다 한다……',
      );

      await era.printAndWait([
        '',
        you.get_colored_name(),
        '이 비틀거리는 ',
        urara.get_colored_name(),
        '을 기숙사까지 데려다주는 동안, 여전히 몸을 떨고 있는 ',
        urara.sex,
        '는 ',
        you.get_colored_name(),
        '에게 제대로 된 말 한마디 건네지 못한다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 또한 상황이 너무나 특수했던 탓에, 발정 난 담당 옆에서도 생리적인 반응은 일어나지 않았다. 밖에서 쓸데없는 짓을 저지르지 않아서 다행이라며 ',
        you.get_colored_name(),
        '은 안도하기도 한다.',
      ]);
      await era.printAndWait([
        '하지만 아래를 내려다보니, 담당의 발치에서 은빛 실을 계속 늘어뜨리고 있는 ',
        you.get_colored_name(),
        '은 결국 참지 못하게 되는데……',
      ]);
      await era.printAndWait([
        '도망치는 ',
        you.get_colored_name(),
        '의 뒷모습을 보며, 여전히 음란한 액체를 흘리는 ',
        urara.get_colored_name(),
        '의 얼굴에, 순간…… 아쉬움이 스쳐 간걸까?',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '음란한 ',
        urara.uma_sex_title,
        '는, 언젠가 다시 구석에 있는 그 마성의 기계로 손을 뻗을지도 모르겠어요……',
      ]);
      await inner_urara.say_as_unknown_and_wait('윽…… 아, 이제 안 돼요……');
    };
    f.title = title;
    return f;
  })(),
  spe_item: (() => {
    const title = '특별 경품';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} call_14 ハルウララのエルコンドルパサーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      halo,
      you,
      callname,
      call_1,
      call_14,
      call_61,
    ) => {
      await era.printAndWait([
        '트레이너실 냉장고에 부족한 식재료를 채워 넣으려고, ',
        you.get_colored_name(),
        '과 ',
        urara.get_colored_name(),
        '은 상점가에 장을 보러 왔다.',
      ]);
      await era.printAndWait([
        '먹거리를 사러 왔을 뿐인데, 돌아가려던 참에 어쩐지 인파에 시선이 끌린다.',
      ]);
      await era.printAndWait(
        '그 분위기에 물든 걸까. 점점 서로 닮아 가는 담당과 트레이너도 호흡을 맞춰 사람들 사이로 파고든다.',
      );
      await era.printAndWait(
        '손잡이에 맞춰 돌아가던 다각형 상자가 달그락 소리를 내며 멈추고, 아쉽게도 휴지만 하나 더 받은 사람이 또 늘어난다……',
      );
      await you.say_and_wait(
        '그런데 상점가 추첨은 분명 추첨권이 있어야 할 텐데. 그럼 우리는……?',
      );
      await era.printAndWait([
        '뒤돌아본 순간, ',
        you.get_colored_name(),
        '은 ',
        urara.get_colored_name(),
        '이 주머니를 뒤적이더니 마술처럼 추첨권 한 장을 꺼내는 것을 본다.',
      ]);
      await era.printAndWait([
        '……그래, 상점가의 작은 아이돌인 ',
        urara.get_colored_name(),
        '이라면 지극히 자연스러운 일이다.',
      ]);
      await era.printAndWait([
        '눈을 반짝이며 안달하는 ',
        urara.get_colored_name(),
        '을 보고, ',
        you.get_colored_name(),
        '도 슬쩍 ',
        urara.sex,
        '에게 엄지를 치켜세운다.',
      ]);
      await urara.say_and_wait([callname, '! 같이 돌리자! 하나, 둘——!']);
      await era.printAndWait([
        '신이 난 ',
        urara.get_colored_name(),
        '의 권유에, ',
        you.get_colored_name(),
        '은 앞으로 나가 담당과 함께 손잡이를 돌린다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 기대에 찬 시선 속에서, 상자는 돌아가며 조금 전과 다른 달그락 소리를 계속 낸다. 그리고——',
      ]);

      await you.say_as_passer_by_and_wait(
        '직원 A',
        '오! 특별상이야. 잠깐만 기다려!',
      );
      await era.printAndWait(
        '추첨을 진행하던 스태프가 뒤를 돌아 책상 아래를 뒤지더니, 상자에 담긴 둥근 헤드 모양의 전동 마사지기를 꺼낸다.',
      );
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        '(은)는 상자를 받아 잠시 들여다보다가, 문득 무언가 떠오른 듯 고개를 든다.',
      ]);
      await urara.say_and_wait([
        '아, 이거 알아!',
        call_61,
        '(이)도 가지고 있어! 다 같이 돌려가며 쓰거든——',
      ]);
      await era.printAndWait(
        '마사지기를 돌려가며 쓰다니, 사이가 정말 좋구나. 그런데 왜 직접 사지는 않는 거야?',
      );
      await era.printAndWait([
        '설령 ',
        you.get_colored_name(),
        '의 의문이 입 밖으로 나오지 않더라도,',
        urara.get_colored_name(),
        '(은)는 곧바로 이어지는 말로 대답을 내놓는다.',
      ]);
      await urara.say_and_wait([
        '응! 다들 밤에 이걸로 다리 사이를 꾹꾹 누르거든! 그때 다들, 그, 그런……',
      ]);

      era.printButton('「……？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '가 꾸물거리며 말을 마친 뒤,',
        you.get_colored_name(),
        '도 스태프도, 주변 사람들까지 모두 동작을 멈춘다.',
      ]);
      await era.printAndWait([
        '자신이 뭔가 잘못했는지 의아해하며,',
        urara.get_colored_name(),
        '도 잠시 멍하니 있다가, 갑자기 무서울 정도로 조용해진 인파 속을 두리번거린다.',
      ]);
      await urara.say_and_wait([
        '어? 아닌가? 하지만 ',
        call_61,
        ' 씨도 정말 그렇게 쓰시고,',
        call_1,
        ' 씨와 ',
        call_14,
        ' 씨도……',
      ]);
      await urara.say_and_wait([
        '그, 그래도 다 쓰고 나면 다들 기분 좋아 보이는 표정을 짓던걸요! 땀도 엄청 흘리고! 그, 그러니까……',
      ]);
      await era.printAndWait([
        '주변에서 수군거리는 소리가 커지는 가운데,',
        urara.get_colored_name(),
        '은 여전히 ​​천진난만하면서도 수줍어하는 표정으로 무언가 계속 말하고 있다.',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await era.printAndWait('안 돼, 이대로라면 사회적 사망 사태가 벌어질 거야!');
      await era.printAndWait([
        '상황이 심상치 않음을 감지한 ',
        you.get_colored_name(),
        '은(는) 즉시 눈치챈 스태프와 눈을 마주친다.',
      ]);
      await era.printAndWait([
        '스태프가 주의를 돌리려 소리치는 사이,',
        you.get_colored_name(),
        '은(는) 여전히 할 말이 남은 듯한 담당자의 손을 잡고 현장에서 도망친다.',
      ]);
      await era.printAndWait([
        '곧장 달려 트레센으로 돌아와,',
        urara.get_colored_name(),
        '을 기숙사 현관에 내려놓은 뒤,',
        you.get_colored_name(),
        '은 비로소 한숨을 내쉰다.',
      ]);
      await era.printAndWait([
        '하지만 돌아가기 전,',
        urara.get_colored_name(),
        '은 우물쭈물하면서도 유난히 강하게,',
        you.get_colored_name(),
        '에게 그 마사지기를 달라고 조른다.',
      ]);
      await era.printAndWait([
        '작은',
        urara.uma_sex_title,
        '에게 옷을 붙잡혀 도망칠 수도, 거절할 수도 없게 된 ',
        you.get_colored_name(),
        '은 어쩔 수 없이 마사지기를 ',
        urara.get_colored_name(),
        '에게 건네준다.',
      ]);
      await era.printAndWait([
        '담당자가 손을 놓은 순간 ',
        you.get_colored_name(),
        ' 은 후회하지만, 지금 기숙사로 뛰어들어간 ',
        urara.sex,
        ' 를 쫓아가는 건 이미 무리다.',
      ]);
      await era.printAndWait(
        '호기심 왕성한 나이라 뭐든 시도해보고 싶은 건 어쩔 수 없지만, 이건 좀 심하잖아……',
      );
      await era.printAndWait([
        '나중에 기회를 봐서 ',
        halo.get_colored_name(),
        ' 에게 한마디 해둬야겠어.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……하지만 걱정할 필요는 없을 거예요. 젊은 날의 실수 정도로 해둘까요?',
      );
    };
    f.title = title;
    return f;
  })(),
  cor_game: (() => {
    const title = '구석의 게임?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, gs, you, callname) => {
      await era.printAndWait('역시 이 영화는 인류에게 아직 너무 이르다.');
      await era.printAndWait([
        '품에서 평온하게 잠든 ',
        urara.get_colored_name(),
        '을 안은 채, ',
        you.get_colored_name(),
        '은 위기 상황에서도 똑같은 대사만 되풀이하는 배우들을 보며 한숨을 쉰다.',
      ]);
      await era.printAndWait([
        '짜릿한 공포 영화일 터였지만, 상영이 시작되자마자 ',
        you.get_colored_name(),
        '의 품으로 파고든 ',
        urara.get_colored_name(),
        '은 종잡을 수 없는 전개에 금세 잠들어 버렸다.',
      ]);
      await era.printAndWait([
        '지금 화면에 나오는 가면 쓴 ',
        urara.uma_sex_title,
        ' 흉내를 낸 이상한 생물은, 아무리 봐도 ',
        gs.get_colored_name(),
        '을 닮았다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은 또 괴성에 잠을 방해받았는지 귀를 접고, ',
        you.get_colored_name(),
        '의 몸에 바싹 붙어 더 편히 잘 수 있는 자세로 바꾼다.',
      ]);
      await era.printAndWait([
        '꼬리를 천천히 ',
        you.get_colored_name(),
        '의 허벅지에 감으며,',
        urara.teen_sex_title,
        '의 건강하고 육감적인 몸은 여전히 ​​',
        you.get_colored_name(),
        '의 민감한 곳을 오가며 비벼댄다.',
      ]);
      await era.printAndWait([
        '키스 마크 같은 자국이',
        urara.teen_sex_title,
        '의 끈적한 흡입 소리와 함께 계속 늘어나지만, 그 매혹적인 벚꽃색 덩어리는 멈출 기미가 보이지 않는다.',
      ]);
      await era.printAndWait([
        '처음 만났을 때 함께 잠자리를 가졌던 것이, 아직 정신이 온전치 못했던 ',
        you.get_colored_name(),
        '의 잘못이었고,',
        urara.get_colored_name(),
        '은 그저 순진하고 작은',
        urara.uma_sex_title,
        '였을 뿐이라 해도……',
      ]);
      await era.printAndWait(
        '이번에는 순진한 서큐버스 같은 담당이, 꿈속에서 호감을 품은 트레이너를 무의식적으로 유혹하고 있는 것이다.',
      );
      await era.printAndWait([
        '적어도 지금의 ',
        you.get_colored_name(),
        '은, 천천히 들어 올린 자신의 손을 보며 그런 변명을 찾고 있다.',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        '자, 잠깐만요. 지금이라면 아직 그만둘 수 있어요——',
      );
      era.printButton('「이 음탕한 망아지에게 복수를……」', 1);
      era.printButton('「그만두자, 참아야 해!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '잠든 채 몸을 뒤척이는 ',
          urara.get_colored_name(),
          '의 틈을 타,',
          you.get_colored_name(),
          '은 어두운 영화관 안에서 그녀의 옷 속으로 손을 집어넣는다.',
        ]);
        await era.printAndWait(
          '애초에 관객도 거의 없는 영화인 데다, 아무도 없는 맨 뒷좌석은 더할 나위 없이 좋은 은신처다.',
        );
        await era.printAndWait([
          '한 손으로는 시험 삼아 옷 위에서',
          urara.teen_sex_title,
          '의 아직 앳된 가슴을 만지작거리고, 다른 한 손은',
          urara.teen_sex_title,
          '의 치마 속으로 들어가',
          urara.uma_sex_title,
          '의 민감한 허벅지 안쪽을 쓰다듬는다.',
        ]);
        await era.printAndWait([
          '조금 가빠진 숨소리에 ',
          you.get_colored_name(),
          '의 손가락이 순간 멈칫하지만, 무언가 눈치챘을 법도 한데도 작은',
          urara.uma_sex_title,
          '는 여전히 ​​깨어나지 않는다.',
        ]);
        await era.printAndWait([
          '손끝은 더욱 깊숙이 파고들어,',
          you.get_colored_name(),
          '는 ',
          urara.get_colored_name(),
          '의 스패츠를 걷어 올리고, 마지막 한 겹의 천 너머로',
          urara.teen_sex_title,
          '의 은밀한 곳을 어루만진다.',
        ]);
        await era.printAndWait([
          '스크린의 소음이',
          urara.teen_sex_title,
          '의 꿈속 교성을 덮어버리는 가운데,',
          you.get_colored_name(),
          '는 그 천연의 은신처 안에서, 적당히',
          urara.sex,
          '의 부드럽고 민감한 세 곳을 계속해서 애무한다.',
        ]);
        await era.printAndWait([
          '동시에, 욕심 많은 담당이 ',
          you.get_colored_name(),
          '에게 남긴 흔적을 떠올리며 복수심이 솟구친 ',
          you.get_colored_name(),
          '는 작은',
          urara.uma_sex_title,
          '의 목덜미, 그 부드러운 살결을 노려 강하게 키스한다.',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          '의 몸이 갑자기 떨리자,',
          you.get_colored_name(),
          ' 의 스패츠 안에 넣은 손에 약간 축축한 감촉이 느껴진다. 설마',
          urara.sex,
          '은……?',
        ]);
        await era.printAndWait([
          '깜짝 놀란 ',
          you.get_colored_name(),
          ' 은 황급히 손을 빼고,',
          urara.get_colored_name(),
          ' 도 몸의 반응에 이끌려 마침내 몽롱하게 눈을 뜬다.',
        ]);
        await urara.say_and_wait([callname, '～영화……으응——?!']);
        await era.printAndWait([
          '잠에서 덜 깬 멍한 상태에서,',
          urara.get_colored_name(),
          ' 의 어린 몸은 ',
          you.get_colored_name(),
          ' 이 쌓아 올린 자극에 떨며 마침내 무너져 내린다——',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 의 가랑이 사이로 전해지는 축축한 물소리 속에서,',
          you.get_colored_name(),
          ' 은 비로소 떠올린다. 영화가 너무 지루해서,',
          urara.sex,
          '은 잠들기 전에 큰 음료수를 단숨에 마셔버렸다는 것을……',
        ]);
        await era.printAndWait([
          '사과하면서, ',
          you.get_colored_name(),
          ' 은 "깜빡하고" 실수를 저질러 엉엉 우는 ',
          urara.get_colored_name(),
          ' 을 달래며, ',
          urara.sex,
          '을 화장실로 데려간다.',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '을 서둘러 데리고 돌아가는 길, ',
          you.get_colored_name(),
          ' 은 ',
          urara.get_colored_name(),
          ' 의 은밀한 곳에 닿았던 손이 여전히 축축하고 끈적거리는 듯한 느낌을 지울 수 없다……',
        ]);
      } else {
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '이(가) ',
          urara.get_colored_name(),
          '를 깨우려 했을 때, 작은 ',
          urara.uma_sex_title,
          '은 다시 몸을 돌려, 마침 ',
          you.get_colored_name(),
          ' 의 앞에 멈춘 손가락을 깨문다.',
        ]);
        await era.printAndWait([
          '따뜻하고 부드러운 혀가 ',
          you.get_colored_name(),
          '의 손가락을 감아올리며,',
          you.get_colored_name(),
          '의 손가락을 조금씩 입안으로 끌어당긴다.',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          '은 작은 입을 있는 힘껏 벌리고, 손가락은 혀끝의 애무에 이끌려 ',
          you.get_colored_name(),
          '의 통제에서 벗어나 스스로 따뜻하고 부드러운 안쪽으로 파고든다.',
        ]);
        await era.printAndWait([
          '황홀한 빠는 소리를 계속 내는 작은 입을 바라보며,',
          you.get_colored_name(),
          '은 숨이 턱 막히면서도 시선을 떼지 못한다.',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          '은 순진하면서도, 아주 음란한 아이야」.',
        ]);
        await era.printAndWait([
          urara.sex,
          '를 처음 만났을 때부터 ',
          you.get_colored_name(),
          '은 그런 불순한 예감을 품고 있었지만,',
          urara.get_colored_name(),
          '이 정말로 본성을 드러냈을 때,',
          you.get_colored_name(),
          '은 당황하고 말았다.',
        ]);
        await era.printAndWait([
          '음미하던 걸 멈추고, 액체가 떨어지며 손가락이 풀려남과 동시에, 작은',
          urara.uma_sex_title,
          '는 ',
          you.get_colored_name(),
          '의 손가락 마디에 작은 이빨 자국을 살며시 남긴다.',
        ]);
        await era.printAndWait([
          '여운을 음미하듯 혀를 차고는,',
          urara.get_colored_name(),
          '은 여전히 ​​꿈속의 미소를 띤 채 자세를 바꿔, 다시 ',
          you.get_colored_name(),
          '의 옷깃을 깨물기 시작한다.',
        ]);
        await era.printAndWait([
          '충격을 받은 ',
          you.get_colored_name(),
          '은(는) 멍하니 자리에 앉아,',
          urara.get_colored_name(),
          '가',
          urara.sex,
          '의 냄새를 꿈속에서 계속 묻히도록 내버려 둔다.',
        ]);
        await era.printAndWait([
          '영화가 끝나갈 무렵,',
          you.get_colored_name(),
          ' 은 품 안에서 들려온 작은 부름에 비로소 정신을 차린다.',
        ]);
        await urara.say_and_wait([callname, '……화장실 가고 싶어……']);
        await era.printAndWait([
          '정신을 차리고 보니,',
          you.get_colored_name(),
          ' 도 ',
          urara.get_colored_name(),
          ' 이 잠들기 전에 큰 음료를 마셨던 사실을 떠올린다.',
        ]);
        await era.printAndWait([
          '도망치듯, 아직 눈을 비비고 있는 ',
          urara.get_colored_name(),
          ' 을 데리고 황급히 화장실로 향한다……',
        ]);
      }
      await era.printAndWait([
        '당연히,',
        urara.get_colored_name(),
        '이 남긴 물린 자국을 미처 가리지 못해 들키고 만 ',
        you.get_colored_name(),
        '은 하야카와 씨에게 엄한 소리를 듣게 되었다.',
      ]);
      await era.printAndWait(
        '물론, 영화를 보던 중 있었던 일에 비하면 그리 대수로운 일도 아니지만.',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '역시 몇몇 작품은 인간에게 너무 이른 것 같다.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  church: (() => {
    const title = '새옹지마?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上かつ三周目ループ中でない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_56,
      high_relation,
    ) => {
      await era.printAndWait([
        '가고 싶어 하는 ',
        urara.get_colored_name(),
        '을(를) 위해서도, 다음 레이스 전에 행운을 빌기 위해서도 ',
        you.get_colored_name(),
        '은(는) ',
        urara.uma_sex_title,
        '을(를) 데리고 신사에 가기로 했다.',
      ]);
      await era.printAndWait('급한 일도 없고, 기왕 여기까지 왔으니 말이다.');
      await era.printAndWait([
        '다만 계단을 오르기 시작하자 ',
        you.get_colored_name(),
        '은(는) 이곳의 분위기가 평소 참배할 때와 조금 다르다고 느낀다.',
      ]);
      await era.printAndWait([
        '평소 이 작은 신사는 북적인다. 근처 주민이나 여기서 노는 아이들 외에도 긴 계단을 이용해 훈련하는 ',
        urara.uma_sex_title,
        '들이 있다.',
      ]);
      await era.printAndWait(
        '그런데 오늘 계단은 유난히 조용하다. 양옆 숲이 흔들리는 소리와 새소리를 빼면 두 사람의 발소리만 들린다.',
      );
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '둘만 오르자니 확실히 활기는 덜하지만, ',
          you.get_colored_name(),
          '의 손을 꼭 잡은 ',
          urara.get_colored_name(),
          '은(는) 줄곧 웃는 얼굴로 ',
          you.get_colored_name(),
          '의 곁에 있다.',
        ]);
        await urara.say_and_wait('오늘 여기 공기, 왠지 엄청 맑아!');
        await era.printAndWait([
          '어떤 뜻으로 한 말인지는 모르겠지만 ',
          you.get_colored_name(),
          '은(는) 고개를 끄덕이며 ',
          urara.get_colored_name(),
          '의 말에 동의한다. ',
          urara.uma_sex_title,
          '하고 나란히 걷는 동안 기분도 밝아진다.',
        ]);
      } else {
        await era.printAndWait([
          '조금 망설인 뒤 ',
          urara.get_colored_name(),
          '은(는) 앞으로 나와 ',
          you.get_colored_name(),
          '의 손을 잡고, 불쑥 ',
          you.get_colored_name(),
          '의 앞에 선다.',
        ]);
        await urara.say_and_wait([callname, '! 스태미나 훈련이야. 잘 따라와!']);
        await era.printAndWait([
          '미처 반응하기도 전에 ',
          you.get_colored_name(),
          '은(는) 갑자기 장난스럽게 웃으며 달리기 시작한 담당에게 이끌려 다음 계단으로 올라간다──',
        ]);
      }
      era.println();

      await era.printAndWait([
        '앞서 달리는 ',
        urara.get_colored_name(),
        '에게 손을 이끌려 마지막 계단을 오르자, 계단 위 도리이 너머로 익숙한 작은 신사가 모습을 드러낸다.',
      ]);
      await era.printAndWait(
        '분위기가 어떻게 바뀌든, 오늘도 이곳은 조용히 참배객을 기다리고 있다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '하고 나란히 새전함 앞에 서서 ',
        you.get_colored_name(),
        '은(는) 동전 두 개를 꺼내 하나를 ',
        urara.get_colored_name(),
        '의 손에 건넨다.',
      ]);
      await era.printAndWait([
        '동전을 보고 눈을 깜빡인 뒤 ',
        urara.get_colored_name(),
        '은(는) 귀를 쫑긋 세우고, 알아들었다는 듯 동전을 꼭 쥔다……',
      ]);
      await era.printAndWait([
        '그다지 격식을 차리지는 않은 의식을 간단히 마친 뒤 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 접힌 오미쿠지를 집어 들고 ',
        urara.get_colored_name(),
        '하고 함께 종이를 펼치려 한다──',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '옛날 새옹이라는 사람이 있었는데, 어떤 ',
        urara.uma_sex_title,
        '을(를) 만났답니다──',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '크흠, 아니에요. 잘못 말했어요──',
      );
      era.drawLine();

      await era.printAndWait([
        '그런데 이번에는 담당에게 건네기 전에 ',
        you.get_colored_name(),
        '은(는) 무심코 먼저 종이를 펼쳐 버렸다.',
      ]);

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait([
        '그리하여 기대에 찬 얼굴의 ',
        urara.get_colored_name(),
        "을(를) 바라보며, 똑같은 '대흉'을 두 장 든 ",
        you.get_colored_name(),
        '은(는) 복잡한 침묵에 빠진다.',
      ]);

      inner_urara.say_as_unknown([
        '여기서 트레이너 ',
        you.adult_sex_title,
        ', 즉 당신의 선택은……',
      ]);
      era.printButton('「대, 대흉이야……」(스태미나+10)', 1);
      era.printButton('「소, 소길……?」(스피드+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 떨면서도 ',
          urara.get_colored_name(),
          '에게 사실대로 말한다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 대답을 듣고 조금 쓸쓸한 표정을 짓지만, 몇 초 만에 다시 겁 없는 미소를 되찾는다.',
        ]);
        await urara.say_and_wait([
          '괜찮아. 대흉이면 돌아갈 때 발밑만 조심하면 돼!',
          call_56,
          '도 그렇게 말했어! 그리고 우라라, 신호등 있는 길은 잘 건너!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 조금 든든하면서도 귀여운 대답을 듣고 ',
          you.get_colored_name(),
          '도 안심하며 고개를 끄덕인다. 마음의 짐이 조금 덜어진다.',
        ]);
        await era.printAndWait([
          '그런데 마음의 짐을 내려놓은 지 두 초도 지나지 않아, 새로운 긴장감에 ',
          you.get_colored_name(),
          '의 심장이 목구멍까지 치솟는다.',
        ]);
        await era.printAndWait([
          '먼저 돌아가는 길로 발걸음을 옮긴 ',
          urara.get_colored_name(),
          '은(는) 여전히 뒤돌아보며 ',
          you.get_colored_name(),
          "에게 무언가를 이야기하고 있다. 그러느라 '발밑 조심'을 잊어버렸다.",
        ]);
        await era.printAndWait([
          '지금 ',
          urara.uma_sex_title,
          '은(는) 계단 맨 위까지 와 있다. 계단의 어느 돌은 거울처럼 빛을 반사하고 있다.',
        ]);
        await era.printAndWait([
          '그러다가 작은 ',
          urara.uma_sex_title,
          '은(는) 조금 멍한 얼굴인 채 발을 헛디뎌……',
        ]);

        era.printButton('「발밑 조심해!」', 1);
        await era.input();

        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 제때 ',
          urara.get_colored_name(),
          '을(를) 붙잡았지만, 발밑이 허공에 뜨자 ',
          you.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '의 아래에 깔린 채 공원 미끄럼틀을 타듯 그 엄청나게 긴 계단을 미끄러져 내려간다.',
        ]);
        await era.printAndWait(
          '넘어지기 전에 마음의 준비는 했지만, 이 미끄럼틀의 굴곡은 너무나 울퉁불퉁했다.',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 조금 양심에 찔려 종이 두 장을 등 뒤로 숨긴다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 의심도 없이 ',
          you.get_colored_name(),
          '의 대답을 믿는다. 좋은 점괘를 뽑아서 기쁜 모양이다.',
        ]);
        await era.printAndWait([
          '방금까지는 망설였지만, 지금은 ',
          urara.get_colored_name(),
          '의 미소가 더 중요하다.',
        ]);
        await era.printAndWait([
          '그렇게 생각하며 ',
          you.get_colored_name(),
          '은(는) 살며시 숨을 내쉰다. 오미쿠지 두 장을 몰래 챙긴 뒤 ',
          you.get_colored_name(),
          '은(는) 다음에는 ',
          urara.get_colored_name(),
          '하고 어디를 둘러볼지 생각한다.',
        ]);
        await era.printAndWait([
          '얕잡아 본 원한이라도 갚으려는 듯, 경내를 벗어나자마자 ',
          you.get_colored_name(),
          "이(가) 압수한 '대흉' 두 장은 기다렸다는 듯 효력을 발휘해 ",
          you.get_colored_name(),
          '의 머리를 강타한다.',
        ]);
        await urara.say_and_wait([callname, '! 발밑 조심해!']);
        await era.printAndWait([
          you.get_colored_name(),
          '의 뒤에 있던 ',
          urara.get_colored_name(),
          '은(는) 온 힘을 다해 달려 나갔지만, 몸이 너무 작은 ',
          urara.uma_sex_title,
          '은(는) 결국 ',
          you.get_colored_name(),
          '의 기울어진 몸을 제때 붙잡지 못한다.',
        ]);
        await era.printAndWait([
          '점괘가 빨리 실현되기를 바라기라도 하듯, 생각에 정신이 팔린 ',
          you.get_colored_name(),
          '은(는) 어느새 계단 맨 위에서 가장 미끄러운 돌을 밟고 있다.',
        ]);
        await era.printAndWait([
          '그리하여 발밑이 허공에 뜨자 ',
          you.get_colored_name(),
          '은(는) 훈련에 실패한 ',
          urara.uma_sex_title,
          '처럼 ',
          urara.get_colored_name(),
          '의 다급한 외침 속에서 우당탕 소리를 내며 신사의 엄청나게 긴 계단을 미끄러져 내려간다……',
        ]);
      }

      era.println();
      await era.printAndWait([
        '잠시 뒤 ',
        you.get_colored_name(),
        '은(는) 계단 아래에 반듯하게 누운 채, 떨어지면서 뒤죽박죽이 된 머릿속에서 흩어진 생각들을 필사적으로 주워 모은다.',
      ]);
      await era.printAndWait([
        '이렇게 미끄러진 게 ',
        urara.get_colored_name(),
        '이(가) 아니라서 다행이다. 위로 펼쳐진 푸른 하늘과 걱정스러운 ',
        urara.get_colored_name(),
        '의 작은 얼굴을 올려다보며 ',
        you.get_colored_name(),
        '은(는) 그 생각만큼은 분명하게 한다.',
      ]);
      await era.printAndWait([
        '다행히 몸을 한 차례 확인한 뒤 ',
        urara.get_colored_name(),
        '도 ',
        you.get_colored_name(),
        '도 ',
        you.get_colored_name(),
        '의 몸에 큰 문제가 없는 걸 확인하고 안도의 숨을 내쉰다.',
      ]);
      await era.printAndWait([
        '다만 하늘에서, ',
        you.get_colored_name(),
        "의 눈앞을 바람에 실려 날아가는 '대흉' 두 장은, 보이지 않는 어딘가에서 누군가 말없이 ",
        you.get_colored_name(),
        '을(를) 비웃는 것 같다.',
      ]);
      await era.printAndWait('아야야, 등이 정말 아프다……');
      await era.printAndWait([
        '다만 돌아온 뒤에는 ',
        urara.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '을(를) 위해 한층 더 ',
        ret === 1 ? '곁에 있어 ' : '훈련해 ',
        '준 모양이다. 사실 ',
        you.get_colored_name(),
        '은(는) 다친 곳도 없는데……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '응? 뭘 보시는 거예요? 저는 아닌데요? 정말 아니에요!',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  hid_menu: (() => {
    const title = '숨겨진 메뉴, 진짜 맛있어!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
       '하루 동안의 외출과 식사를 마치고 계산하려던 ',
        you.get_colored_name(),
        ' 은(는) 점원이 제시하는 특수한 조건을 멍하니 듣고 있다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '점원 A',
        '네! 그럼 본점의 숨겨진 커플 메뉴를 맛본 뒤, 두 분이 해주셔야 할 일은?',
      );
      era.printButton('「키, 키스……?」', 1);
      await era.input();
      await era.printAndWait([
        '수상한 미소를 짓는 점원이 내건 수상한 조건을 되뇌며, 고개를 들어 순진해 보이는 상대방을 슬쩍 바라본 뒤,',
        you.get_colored_name(),
        '은(는) 생각에 잠긴다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 정말 친구의 소개만으로, 다른 목적 없이 이 가게에 온 걸까?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 정말 "우연히" 이 가게에서 "숨겨진 메뉴"에 대해 듣게 된 걸까?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '정말로 가게 밖의 그 기묘한 인테리어를 눈치채지 못하고 사람들을 안으로 끌고 온 걸까?',
      ]);
      await you.say_and_wait(
        '그런데 왜 우라라를 의심하는 거지? 설마 전부 내 탓인가?',
        true,
      );
      await era.printAndWait([
        '보이지 않던 ',
        urara.get_colored_name(),
        '의 천진난만한 얼굴에, 장난이 성공했을 때의 짓궂은 미소가 살짝 섞인다.',
        you.get_colored_name(),
        '은 상황 파악이 되지 않아 계속해서 자신을 의심한다.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([callname, ', 멍하니 있는 거야? 키스하자!']);
        await urara.say_and_wait(
          `자자! 에헤헤~ 밖에서 ${callname}이랑 츄~ 할 거야!`,
        );
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '이 동요하는 모습을 보고도,',
          urara.get_colored_name(),
          '는 즐거운 듯이 주변 사람들과 함께 부추긴다.',
        ]);
        await era.printAndWait([
          '진지한 표정으로 다가오는 담당에게,',
          you.get_colored_name(),
          ' 은 마치 유령이라도 본 것처럼 필사적으로 고개를 저었다.',
        ]);
        await you.say_and_wait(
          '다른 선택지가 있을 거야, 우라라. 이런 짓을 하면 다들 충격받을 테고, 축복받지도 못할 거야……',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '은 키스하기 싫어? 무슨 말인지는 알지만……',
        ]);
        await urara.say_and_wait(
          `그래도 ${callname}! 어른이라도 모든 걸 다 마음대로 선택할 수 있는 건 아니잖아?`,
        );
        await era.printAndWait([
          '점점 당황해하는 ',
          you.get_colored_name(),
          ' 을 보며,',
          urara.get_colored_name(),
          ' 은 약간 어이없어하면서도 왠지 기쁜 듯한 표정을 지었다.',
        ]);
        await era.printAndWait([
          '겉보기엔 차갑지만 태도는 완고한 담당을 마주하자,',
          you.get_colored_name(),
          ' 은 평소의 대처법을 까맣게 잊어버린다.',
        ]);
        await you.say_and_wait(
          '안 돼, 우라라. 사람들 앞에서 이런 짓을 하면 잡혀갈 수도 있고, 상점가 사람들에게도 혼날 테고, 우라라 친구들도……',
        );
      }
      era.println();
      await urara.say_and_wait(
        `${callname}! 한눈팔지 마. 그러면 키스 못 한다구!`,
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 의 말이 끝나기가 무섭게, 거부하려던 ',
        you.get_colored_name(),
        ' 은 자신에게 올라탄 담당에게',
        urara.uma_sex_title,
        '의 힘으로 얼굴을 끼어 눌리게 된다.',
      ]);
     await era.printAndWait('이러다간 사회적으로 정말 끝장이다……');
      await era.printAndWait([
        '폭주한 담당에게 붙잡혀 꼼짝달싹 못 하는 ',
        you.get_colored_name(),
        ' 은, 모두의 시선 속에서 목적이 분명한 ',
        urara.get_colored_name(),
        ' 의 귀엽고 작은 얼굴을 절망적인 심정으로 바라본다……',
      ]);
      await era.printAndWait([
        '그 후, 도망칠 수 없는 ',
        you.get_colored_name(),
        ' 은 ',
        urara.get_colored_name(),
        ' 의 "숨이 멎을 듯한 애욕"을 듬뿍 맛보게 된다.',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') >= 10) {
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          ' 는 천진난만함에 7할 정도의 색기를 섞어, 긴장한 기색도 없이 ',
          you.get_colored_name(),
          ' 에게 다가가 장난스럽게 ',
          you.get_colored_name(),
          ' 의 입술을 깨문다.',
        ]);
        await era.printAndWait([
          '그 후 오랫동안 작은 ',
          urara.uma_sex_title,
          ' 에게 계속해서 요구받으며, ',
          you.get_colored_name(),
          ' 은 정신이 아득해질 지경이 된다.',
        ]);
        
        await era.printAndWait([
          '처음에는 ',
          you.get_colored_name(),
          '에게도 주변의 웅성거림이 들렸지만, 이내 ',
          urara.get_colored_name(),
          '이 쏟아붓는 애정 속에서 희미해져 간다.',
        ]);
        await era.printAndWait([
          '주변의 소리가 대개 잦아들 무렵,',
          urara.get_colored_name(),
          '은 아쉬운 듯, 쓰러질 것 같은 ',
          you.get_colored_name(),
          '을 마침내 놓아준다.',
        ]);
        await era.printAndWait([
          '하지만 그 후,',
          urara.get_colored_name(),
          '은 천진난만하고 아무것도 모르는 표정 그대로, 혀끝으로 ',
          you.get_colored_name(),
          '의 입술을 살며시 닦아낸다.',
        ]);
      } else {
        await era.printAndWait([
          '부끄러움 때문인지, 경험 부족으로 인한 긴장 때문인지, 조급해진 작은',
          urara.uma_sex_title,
          '는 ',
          you.get_colored_name(),
          '의 정면으로 곧장 부딪쳐 온다.',
        ]);
await urara.say_and_wait('으앗, 아파! 입술이랑 이가 부딪혔어……');
        await era.printAndWait([
          '하지만 첫 번째 실수에도 ',
          urara.get_colored_name(),
          '는 멈추지 않고, 조급한 마음에 ',
          you.get_colored_name(),
          '의 옷깃을 움켜쥐며,',
          urara.get_colored_name(),
          '는 거칠게 ',
          you.get_colored_name(),
          '의 숨결을 계속해서 탐한다.',
        ]);
        await era.printAndWait([
          '주변의 수군거림을 최대한 무시한 채, 작은 체구의',
          urara.uma_sex_title,
          '에게 목덜미를 잡아당겨지는 ',
          you.get_colored_name(),
          '은 당장이라도 쓰러질 것만 같은데……',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '이 기력이 다해 쓰러지려 할 때,',
          urara.get_colored_name(),
          '는 마침내 조금 아쉬운 듯이 자신의 ',
          callname,
          '을 떼어낸다.',
        ]);
      }
      era.println();
      await you.say_and_wait(
        '실례되는 생각일지 모르지만, 우라라... 혹시 욕구불만인 건가?',
        true,
      );
      await era.printAndWait([
        '의자에 털썩 주저앉으며,',
        you.get_colored_name(),
        ' 은 얼굴을 감싸 쥐는 점원과 고개를 들지 못하는 다른 손님들을 곁눈질하고는 힘없이 한숨을 내쉰다.',
      ]);
      await era.printAndWait([
        '작은 담당마는 여전히 요염한 눈빛으로 ',
        you.get_colored_name(),
        ' 을 바라보며, 계속할지 말지를 ',
        you.get_colored_name(),
        ' 에게 묻는 듯하다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 은 천진난만했던 ',
        urara.get_colored_name(),
        ' 이 눈을 뜨게 된 데에 자신의 책임이 있다는 걸 인정한다. 하지만 단숨에 이런 색욕에 빠진 핑크빛의 작은 ',
        urara.sex_code - 1 ? '암말' : '수말',
        '이 되어버린 건 좀 지나치지 않은가?',
      ]);
      await era.printAndWait([
        '깊이 반성하는 와중에도,',
        you.get_colored_name(),
        ' 은 다시금 얼굴을 붉히며 다가오는 ',
        urara.get_colored_name(),
        ' 을 바라본다.',
      ]);
      await urara.say_and_wait(
        `커플이라는 증거라면, ${callname} 도 이걸로는 부족하다고 생각하지? 괜찮아, 우라라도 그렇게 생각해!`,
      );
      await urara.say_and_wait(['그러니까 ', callname, ', ……한번 더 할까?']);
      await you.say_and_wait(
       `그만해 줘, 우라라. ${callname}는 정말이지 이제 한계야! 적어도, 적어도 사회적으로 매장당한 뒤에 목숨을 부지할 탈출구 정도는 남겨 줘!`,
        true,
      );
      await era.printAndWait([
        '살며시 입술을 핥는 벚꽃색 입술을 바라본 채,',
        you.get_colored_name(),
        '는 참지 못하고 눈을 감는다……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '응, 뭐, 그래…… 즐기는 법을 배우는 것도 나쁘진 않겠죠?',
      );
    };
    f.title = title;
    return f;
  })(),
  try_dress: (() => {
    const title = '무대 의상, 입어 볼게!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '다음 레이스까지 든든히 준비하기 위해 ',
        you.get_colored_name(),
        '하고 ',
        urara.get_colored_name(),
        '은(는) 쇼핑몰에 가서 앞으로의 트레이닝에 쓸 운동용품을 갖추기로 했다.',
      ]);
      await era.printAndWait([
        '그런데 승부복을 맞춤 제작하는 가게 앞을 지나다가 ',
        urara.get_colored_name(),
        "은(는) '무대 의상 시착'을 권유받는다.",
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        ' 점원과 짧게 이야기를 나누고 사정을 알게 되었다.',
      ]);
      await era.printAndWait(
        '최근 다른 트레센에서 의뢰를 받아 새 무대 의상을 제작해야 한다고 한다.',
      );
      await era.printAndWait(
        '사용하지 않은 예전 견본을 바탕으로 개선할 생각이었지만, 어느 것을 고를지 정하지 못했다고 한다.',
      );
      await era.printAndWait(
        '고르기 어렵다면 트레센 학생에게 입어 달라고 하면 되겠지── 그런 이야기였다.',
      );
      await urara.say_and_wait([
        '그래서 마침 이때 우라라랑 ',
        callname,
        '이(가) 지나가게 된 거야? 정말 우연이네!',
      ]);
      await urara.say_and_wait([
        '새 옷 입어 보는 거, 우라라도 관심 있어! 그래도 오늘은 다른 볼일이 있으니까──',
      ]);
      await era.printAndWait([
        '잠깐 망설인 뒤 ',
        urara.get_colored_name(),
        '은(는) 곧바로 ',
        you.get_colored_name(),
        '의 의견을 묻기로 한다.',
      ]);

      era.printButton('「괜찮아. 입어 보고 싶으면 해 봐.」', 1);
      await era.input();

      await urara.say_and_wait('야호──!');
      await era.printAndWait([
        '허락을 받고 잠시 기다린 뒤, 작은 ',
        urara.uma_sex_title,
        '은(는) 신이 나서 점원의 안내에 따라 시착할 옷이 걸린 탈의실로 폴짝폴짝 들어간다.',
      ]);
      await era.printAndWait([
        '그런데 ',
        urara.get_colored_name(),
        '은(는) 괜찮을까? ',
        urara.sex,
        '은(는) 혼자서 제대로 옷을 입을 수 있을까?',
      ]);
      await era.printAndWait([
        '처음에는 그런 걱정도 들었지만 ',
        urara.get_colored_name(),
        '이(가) 옷을 말끔하게 입고 웃으며 나타나자 ',
        you.get_colored_name(),
        '도 걱정을 거둔다.',
      ]);
      await era.printAndWait([
        '라이브 스텝을 밟으며 점원이 촬영 각도를 잡도록 도와주는 담당을 보고 있자니 ',
        you.get_colored_name(),
        '은(는) 그래도 조금 감회에 젖는다.',
      ]);
      await era.printAndWait([
        '평소 모습은 아직 어리지만 ',
        urara.sex,
        '은(는) 계속 성장해 왔다. 설령 트레이너를 찾지 못했더라도 ',
        urara.sex,
        '은(는) 잘 자랐을 것이다.',
      ]);
      await era.printAndWait([
        '그렇게 생각할 때마다 ',
        you.get_colored_name(),
        '은(는) 처음 만났을 때 ',
        urara.get_colored_name(),
        '하고 스쳐 지나가지 않고 만날 수 있었던 것이 행운이라고 느낀다.',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        urara.get_colored_name(),
        '을(를) 만나지 않았어도 ',
        you.get_colored_name(),
        '은(는) 어려움에서 벗어날 수 있었고, ',
        you.get_colored_name(),
        '이(가) 없어도 ',
        urara.get_colored_name(),
        '은(는) 1착을 할 수 있었을지도 모른다……',
      ]);
      await era.printAndWait([
        '하지만 지금은 그래서는 안 된다는 걸 알면서도 트레이너인 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '을(를) 독차지하고 싶어진다.',
      ]);
      await era.printAndWait([
        '트레이너로서는 정말 못난 생각이다. 어른으로서 실격인 생각을 고개를 저어 떨쳐 내다가 ',
        you.get_colored_name(),
        '하고 ',
        urara.get_colored_name(),
        '은(는) 우연히 눈이 마주친다.',
      ]);
      await era.printAndWait([
        '개인 라이브를 하듯 춤추는 작은 아이돌은 벚꽃빛 환한 미소로 ',
        you.get_colored_name(),
        "에게 소리 없는 '우마뾰이 전설'의 손 키스를 보낸다.",
      ]);
      await era.printAndWait([
        '노랫소리도 음악도 없고, 다른 곳에서도 몇 번이나 봤을 텐데도 작은 ',
        urara.uma_sex_title,
        '의 붉어진 뺨과 수줍은 손 키스는 여전히 ',
        you.get_colored_name(),
        '의 가슴을 두드린다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 뛰는 심장을 진정시키기도 전에 ',
        urara.get_colored_name(),
        "은(는) 점원들의 'OK' 신호에 다시 무대 뒤 탈의실로 폴짝폴짝 돌아간다.",
      ]);
      await you.say_and_wait('……방금 저게 우라라였나?', true);
      await era.printAndWait([
        '술렁이는 가슴을 누르고 진정한 ',
        you.get_colored_name(),
        '은(는) 그제야 깨닫는다. 사랑이 담긴 손 키스를 보낸 저 ',
        urara.teen_sex_title,
        '은(는) 겉보기에는 아직 어린, 바로 그 작은 담당이었다……',
      ]);
      era.drawLine();

      await urara.print_and_wait([
        '탈의실에서, 방금 ',
        callname,
        '을(를) 기습한 ',
        urara.get_colored_name(),
        '은(는) 전신 거울의 가장자리를 붙잡고 멈출 줄 모르는 심장 박동을 필사적으로 가라앉힌다.',
      ]);
      await urara.say_and_wait(
        '저기, 그만 뛰어! 지금은 트레이닝도 레이스도 아니잖아? 으으…… 머리가 어질어질해……',
        true,
      );
      await urara.say_and_wait(
        [
          '그냥 갑자기 ',
          callname,
          '을(를) 깜짝 놀라게 하려던 것뿐인데, 막상 해 보니까 엄청 부끄러워……',
        ],
        true,
      );
      await urara.print_and_wait([
        '조금 진정한 뒤 ',
        urara.get_colored_name(),
        '은(는) 알 수 없는 기분을 안고 천천히 몸을 일으킨다.',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        '의 시선이 위로, 눈꼬리 끝에서 정면으로 옮겨 가자 ',
        urara.get_colored_name(),
        "은(는) 거울 속에서 '또 다른 ",
        urara.uma_sex_title,
        "'을(를) 발견한다.",
      ]);
      await urara.print_and_wait([
        '거울 속의 ',
        urara.uma_sex_title,
        '은(는) 누구지? ',
        urara.get_colored_name(),
        '하고 꼭 닮았고 ',
        urara.get_colored_name(),
        '하고 같은 옷을 입었는데, 한눈에 호감을 살 것 같은 얼굴을 하고 있다.',
      ]);
      await urara.print_and_wait([
        '책 속의 ',
        urara.sex_code - 1 ? '공주님' : '왕자님',
        "처럼 새빨간 뺨, 수줍은 눈동자…… 이게 '첫사랑에 빠진 ",
        urara.teen_sex_title,
        "'의 얼굴이야?",
      ]);
      await urara.print_and_wait([
        '잘 모르겠지만 다들 말한 대로 어린 ',
        urara.get_colored_name(),
        '하고는 전혀 다르다. 이런 ',
        urara.child_sex_title,
        '을(를) 싫어할 사람은 없을 거야……',
      ]);
      await urara.say_and_wait(
        [
          '그럼……',
          callname,
          '도 이런 ',
          urara.child_sex_title,
          '을(를) 좋아할까?',
        ],
        true,
      );
      await urara.print_and_wait([
        "손을 뻗어 거울 속의 '",
        urara.get_colored_name(),
        "'을(를) 살며시 쓰다듬으며, 다시 빨라지는 심장 박동을 느끼는 ",
        urara.teen_sex_title,
        '은(는) 근거도 없이 그렇게 생각한다.',
      ]);
      await urara.say_and_wait(
        ['그런데 왜 지금 또 ', callname, '이(가) 떠오르는 걸까?'],
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          [
            '어떻게 해야 할지는 아직 모르겠어. 그래도 우라라는 역시 ',
            callname,
            '이(가) 기뻐하는 얼굴을 보는 게 좋아……',
          ],
          true,
        );
        await urara.print_and_wait([
          '작은',
          urara.uma_sex_title,
          '은 탈의실 구석에서, 아직 걸려 있지 않은 옷 한 벌을 바라본다.',
        ]);
        await urara.say_and_wait(
          [
            '우라라도 왜 그 옷을 먼저 꺼내지 않았는지 알아. 하지만 그 옷이라면,',
            callname,
            '은……',
          ],
          true,
        );
        await urara.print_and_wait([
          '귀를 한껏 쫑긋 세우고, 점점 이성이 희미해지는 첫사랑의',
          urara.teen_sex_title,
          '은 과감한 시도를 해보기로 한다.',
        ]);
      } else {
        await urara.say_and_wait(
          ['왜 우라라는 기쁜 걸까? ', callname, '이 기뻐 보이니까?'],
          true,
        );
        await urara.say_and_wait(
          [
            '하지만 ',
            callname,
            '이 우라라를 더 좋아하게 된다면, 우라라를 위해 더 좋은 사람이 되어줄까?',
          ],
          true,
        );
        await urara.say_and_wait(
          ['그럼 ', callname, '을 우라라에게 푹 빠지게 만들면, 혹시……?'],
          true,
        );
        await urara.print_and_wait([
          '상자를 열어 그 옷을 꺼내고, 첫사랑인',
          urara.teen_sex_title,
          '은 잠시 망설이다가, 서투른 이유를 들어 스스로를 설득한다.',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait('이 옷으로도 갈아입었어!');
      await era.printAndWait([
        '반은 수줍어하고 반은 활기찬 ',
        urara.get_colored_name(),
        '의 선언과 함께, 탈의실의 지나치게 긴 커튼이 열린다.',
      ]);
      await era.printAndWait(
        '그러자 막 떠들썩해졌던 공기가 순식간에 얼어붙는다.',
      );
      await era.printAndWait([
        '얼굴이 붉어진 ',
        urara.get_colored_name(),
        '을 제외하고, 그 자리에 있던 모두가 마치 충격적인 무언가라도 본 듯 동작을 멈춘다.',
      ]);

      era.printButton('「……?!」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '은 지금의 ',
        urara.get_colored_name(),
        '을 어떻게 표현해야 할지 모르겠다. 형용하기는커녕, 지금의 ',
        you.get_colored_name(),
        '은 담당을 계속 똑바로 쳐다볼 기력조차 잃어가고 있다.',
      ]);
      await era.printAndWait([
        '하지만 그것은 분명, 트레이너로서 본 적 없는 ',
        urara.get_colored_name(),
        '다——',
      ]);
      await era.printAndWait([
        '꽉 조여진 상의의 볼륨감 아래로 하나가 된 것은, 감싸인 가느다란 허리와',
        urara.teen_sex_title,
        '의 육감적인 곡선을 파고드는 높은 가랑이 라인이다.',
      ]);
      await era.printAndWait([
        '허리 뒤쪽과 꼬리 밑동에서 이어지는 레이스 자락이 요염하게 흔들리고, 의도적으로 드러낸 배꼽과 아랫배는 이제 정취를 자아내는 것 외에는 별다른 의미가 없어 보인다.',
      ]);
      await era.printAndWait([
        '옆으로 묶은 벚꽃색 포니테일 곁에는 하트 모양의 금속 귀걸이와 칠흑 같은 이어 커버가 보인다. 가죽 장갑과 부츠가 애욕의 빛을 반사하고 있다.',
      ]);
      await era.printAndWait([
        '새까만 의상에 감싸인, 본래라면 "앳된" 모습이어야 할 ',
        urara.get_colored_name(),
        '이 지금은 윤기 흐르고 고혹적이다.',
      ]);
      await era.printAndWait(
        '도대체 어느 아이돌이지? 이 서큐버스 같은 차림은 대체 어떤 무대 의상인 거야?',
      );
      await era.printAndWait([
        '벚꽃색 눈동자의 빛이 감도는 ',
        urara.get_colored_name(),
        '에게, 이토록 과격한 무대 의상이 왜 이리 잘 어울리는 걸까?',
      ]);
      await era.printAndWait([
        '눈을 가늘게 뜬 ',
        urara.get_colored_name(),
        ' 가, 마치 사냥감을 정한 듯이',
        urara.sex,
        '인 ',
        callname,
        ' 에게 보내는, 흥분 어린 미소는 대체 뭐지?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 의 시선에 등줄기가 오싹해진 ',
        you.get_colored_name(),
        ' 은 침을 삼키고, 어느새 ',
        you.get_colored_name(),
        ' 또한 이성이 증발해 버리는 덫으로 빠져드는데……',
      ]);
      await era.printAndWait([
        '하지만 어른이 입을 열기도 전에, 작은',
        urara.uma_sex_title,
        ' 쪽이 새빨개지는 얼굴을 감싸 쥔다.',
      ]);
      await urara.say_and_wait(
        '미, 미안해, 우라라가 좀 과했나 봐, 아마도……',
      );
      await era.printAndWait([
        '작은 서큐버스는 그 상태로 잠시 머뭇거리더니, 이내 바로 옆 탈의실 커튼 뒤로 도망쳐 버린다. 부끄러움에 눈가가 촉촉해진 ',
        urara.get_colored_name(),
        '로 돌아간다.',
      ]);
      era.println();

      await you.say_and_wait(
        '메지로 성과 제휴해서 특수 용도의 옷을 부업으로 만들고 있는 건가?',
      );
      await era.printAndWait([
        '상황이 정리된 후, 충격을 받은 ',
        you.get_colored_name(),
        ' 은 계속 사과하는 점원의 말을 믿을 수 없다는 듯 되뇌며, 무슨 말을 해야 할지 몰라 한다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '점원 A',
        '정말 죄송합니다. 그 옷은 폐기할 예정이었는데, 피팅룸에 깜빡하고 두고 나와서……',
      );
      await you.say_and_wait('이유는 뭐, 이해가 안 가는 것도 아니지만……');
      await you.say_and_wait(
        '잠깐, 다른 옷은 그렇다 치고, 왜 이 옷까지 우라라한테 딱 맞는 거지? 특수 주문했던 원래 주인은……?',
        true,
      );
      await you.say_and_wait('……역시, 생각하지 말자.', true);
      await era.printAndWait([
        '운동 용품이 든 가방을 잔뜩 들고 돌아가는 길에,',
        you.get_colored_name(),
        ' 은 이 수상한 의문에 대해 생각하기를 그만둔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        ' 님이 깊은 생각에 잠겨 있는 사이, 곁을 걷던 ',
        urara.get_colored_name(),
        ' 님이 물어온다.',
      ]);
      await urara.say_and_wait([
        '우라라가 앞으로도 계속 ',
        callname,
        ' 에게 이걸 입고 보여주면,',
        callname,
        '은(는), 두근거려?',
      ]);
      inner_urara.say_as_unknown([
        urara.get_colored_name(),
        ' 님의 물음에, 트레이너 ',
        you.adult_sex_title,
        ' (당신)은 대답한다.',
      ]);
      era.printButton('「무슨 소리야, 그건 너무 과하잖아……」(호감+10)', 1);
      era.printButton('「아무래도......그렇지」（애정+5）', 2);
      const ret = await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 대답을 듣고,',
        urara.get_colored_name(),
        '은 평소의 알기 힘든 미소와는 다른 웃음만을 지어 보인다.',
      ]);
      await era.printAndWait([urara.sex, '은 도대체 무슨 생각을 하고 있는 걸까……']);
      era.drawLine();
      await urara.say_and_wait([
        '별로 내키지 않는 것 같았지만,',
        callname,
        '은 두근거린다는 걸 부정하진 않았잖아! 이번엔 금방 흐지부지돼 버렸지만.',
      ]);
      await urara.say_and_wait([
        '헤헤~ 이것도, 앞으로도 계속 ',
        callname,
        '을 두근거리게 하기 위해서야! 물론, 보고 있는 건 우라라지만……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '정말 그래도 괜찮은 건가요? 그런 충동을 믿다니…… 인간이란 건, 전혀 믿을 수 없는 존재잖아요?',
      );
      await urara.say_and_wait([
        '괜찮아! 왜냐면 우라라는,',
        callname,
        '을 믿으니까!',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '앞으로 나아가기로 결심한 밤';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {number} arim_kin_rank 有馬記念の着順。0は未出走
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      arim_kin_rank,
    ) => {
      inner_urara.name = '「하루 우라라」';
      await era.printAndWait(
        '크리스마스는 어제 이브가 지나고서야 찾아왔지만, 밖은 며칠 전부터 달콤한 축제 분위기에 싸여 있다.',
      );
      await era.printAndWait([
        '다만 ',
        you.get_colored_name(),
        '하고 ',
        urara.get_colored_name(),
        '에게는 똑같이 일 년에 한 번 돌아오는 날이어도 어제의 아리마 기념이 오늘 크리스마스보다 훨씬 중요했다.',
      ]);
      await era.printAndWait([
        '축제를 기대하지 않는 건 아니다. 기쁨을 나눌 수 있는 축제라면 ',
        urara.get_colored_name(),
        '은(는) 무엇이든 반기고 ',
        you.get_colored_name(),
        '도 미리 준비한다.',
      ]);
      if (arim_kin_rank > 0) {
        await era.printAndWait(
          '하지만 아리마에서 너무 힘을 쏟은 탓인지, 지금 작은 우마무스메는 꼭 필요한 일을 할 때 빼고는 줄곧 축 늘어져 있다.',
        );
        await era.printAndWait([
          '트레이너실 소파에 누워 노곤하게 늘어진 ',
          urara.get_colored_name(),
          '을(를) 쓰다듬으며 ',
          you.get_colored_name(),
          '은(는) 업무를 마무리하는 마지막 글자를 키보드로 입력한다.',
        ]);
        if (arim_kin_rank === 1) {
          await era.printAndWait([
            '놀라운 만남 뒤에 입장 통로로 숨어들었을 때 본 광경이 떠오른다. 그때 ',
            you.get_colored_name(),
            '은(는) 자신이 백일몽을 꾸는 줄 알았다.',
          ]);
          await era.printAndWait([
            '놀라 있는 사이 사람들에게 둘러싸여 이것저것 질문을 받았고, 정신없는 와중에 ',
            urara.get_colored_name(),
            '이(가) 라이브 센터에 선 모습을 보고서야 모든 게 사실이라고 확신했다.',
          ]);
          await era.printAndWait([
            '그 뒤로 ',
            urara.get_colored_name(),
            '은(는) 친구들이 든든하게 지켜 주고 있다. 하지만 ',
            you.get_colored_name(),
            '은(는) 지금 혼자만 있으면 성가신 일들이 끊임없이 날아든다.',
          ]);
          await era.printAndWait([
            "이제는 '",
            urara.get_colored_name(),
            "을(를) 돌보고 있다'는 말이 피신할 핑계처럼 되어 버렸지만, 그 이상의 부담을 ",
            urara.get_colored_name(),
            '에게 지울 수는 없다.',
          ]);
          await era.printAndWait([
            '어른의 골칫거리는 적어도 어른이 직접 고민하자. 컴퓨터를 닫으며 ',
            you.get_colored_name(),
            '은(는) 작게 숨을 내쉰다.',
          ]);
          await era.printAndWait([
            callname,
            '의 움직임을 알아차리고 일어나려는 작은 ',
            urara.uma_sex_title,
            '에게서 ',
            you.get_colored_name(),
            '도 마침 손가락을 거둔다. 아직 부드러운 감촉이 남아 있다.',
          ]);
        } else {
          await era.printAndWait([
            '아리마에 출전한 것에 대해서는 ',
            you.get_colored_name(),
            '의 생각도 다른 사람들과 대체로 같다.',
            urara.get_colored_name(),
            '이(가) 지금 코스에 설 수 있었다는 것만으로도 이미 승리다.',
          ]);
          await era.printAndWait([
            '기뻐해야 할 일인데, 갑자기 ',
            you.get_colored_name(),
            '하고 만났던 ',
            inner_urara.get_colored_name(),
            '의 말은 대체……',
          ]);
          await era.printAndWait([
            callname,
            '의 움직임을 알아차리고 일어나려는 작은 ',
            urara.uma_sex_title,
            '에게서 ',
            you.get_colored_name(),
            '도 마침 손가락을 거둔다. 아직 부드러운 감촉이 남아 있다.',
          ]);
        }
      } else {
        await era.printAndWait([
          '오늘 ',
          urara.get_colored_name(),
          '은(는) 일하는 ',
          callname,
          '의 곁에 조용히 앉아 있다. 다만 가만있지 못하는 작은 귀는 슬그머니 ',
          you.get_colored_name(),
          '의 어깨에 얹힌다.',
        ]);
        await era.printAndWait([
          '기다리는 작은 ',
          urara.uma_sex_title,
          '의 기대에 빨리 답해 주기 위해 ',
          you.get_colored_name(),
          '도 키보드를 두드리는 손가락을 조금 더 서두른다……',
        ]);
      }
      await era.printAndWait(
        '그러고 보니 이쪽은 애초에 크리스마스를 제대로 보낼 생각이 없었다. 하지만 특별한 날을 골라 서로 축복을 전하는 건 언제나 가치 있는 일이다.',
      );
      await era.printAndWait([
        '그러니 작은 ',
        urara.uma_sex_title,
        '이(가) 지금껏 애써 온 데 감사하기 위해서라도 오늘의 ',
        urara.sex,
        '에게는 ',
        you.get_colored_name(),
        '이(가) 특별한 추억을 마련해 줄 만하다.',
      ]);
      await era.printAndWait([
        '컴퓨터를 닫고 ',
        you.get_colored_name(),
        '은(는) 책상 아래에서 미리 ',
        urara.get_colored_name(),
        '을(를) 위해 준비한 크리스마스 선물을 꺼낸다. 오늘 ',
        urara.sex,
        '은(는) 이 순간을 기다리고 있었을 것이다.',
      ]);
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 갑자기 내민 선물 상자를 보고 ',
          urara.get_colored_name(),
          '은(는) 처음에는 조금 놀라 굳었지만, 곧 귀여운 미소가 놀라움과 함께 뺨에 번진다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 허락을 받고 기쁘게 상자를 연 작은 ',
          urara.uma_sex_title,
          '은(는) 그 안에서 새 분홍색 귀 커버를 꺼내 들고 놀란다.',
        ]);
      } else {
        await era.printAndWait([
          '자신이 선물을 받을 줄은 몰랐는지 ',
          urara.get_colored_name(),
          '은(는) 처음에는 굳어 버린다. 하지만 ',
          you.get_colored_name(),
          '이(가) 고개를 끄덕여 주자 그래도 상자를 받는다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 권유에 조금 망설이다 포장을 풀고, 상자 속 새 귀 커버를 손에 들자 ',
          urara.get_colored_name(),
          '의 벚꽃빛 눈동자가 점점 밝아진다.',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait(
          "'연인이 선물하는 귀 커버와 꼬리 장식은 사랑의 증표'── 고사기에는 전혀 나오지 않는 말이지만, 요즘 학생들 사이에서는 무척 유행하고 있다.",
        );
        await era.printAndWait([
          '크리스마스를 핑계로 비싸지 않은 작은 장식을 선물하는 건 조금 얄밉다. 하지만 작은 ',
          urara.uma_sex_title,
          '하고 오랫동안 함께 달려온 낡은 귀 커버는 확실히 세탁으로 빛이 바래 있었다.',
        ]);
      } else {
        await era.printAndWait([
          '그리 친하지 않은 ',
          urara.uma_sex_title,
          '에게 귀 커버나 꼬리 장식을 선물하면 실례로 받아들일 수도 있다. 하지만 ',
          urara.get_colored_name(),
          '은(는) 그렇게까지 신경 쓰지는 않을 것이다.',
        ]);
        await era.printAndWait([
          '물론 ',
          you.get_colored_name(),
          '에게 불순한 의도는 없다. 그저 ',
          urara.get_colored_name(),
          '의 언제부터 썼는지도 모를 귀 커버가 너무 낡았을 뿐이다.',
        ]);
      }
      await urara.say_and_wait([
        '응? 이거 ',
        callname,
        '이(가) 준비한 거야? 대단해──! 게다가 우라라가 지금 쓰고 있는 거랑 똑같아!',
      ]);

      era.printButton('「산타 할아버지 부탁을 받아서 전해 주는 거야.」', 1);
      await era.input();

      await urara.say_and_wait([
        '정말!? 그럼 올해 산타 할아버지는 ',
        callname,
        '이구나! 에헤헤~ 고마워, ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '응? ',
        urara.get_colored_name(),
        '은(는) 산타를 안 믿는 쪽이었나…… 아니, 산타의 정체를 꿰뚫어 보고 있는 쪽인가?',
      ]);
      await era.printAndWait([
        '기뻐하면서도 어딘가 다른 뜻이 담긴 듯한 담당의 미소를 보고 ',
        you.get_colored_name(),
        '은(는) 문득 ',
        urara.get_colored_name(),
        '에 대해 뜻밖의 사실을 하나 더 알게 된 기분이 든다……',
      ]);
      await urara.say_and_wait(
        '그래도 크리스마스는 다들 기쁜 축제잖아! 어린이뿐 아니라 어른도!',
      );
      await urara.say_and_wait([
        '그러니까 이번에는 우라라도 산타 할아버지가 돼서 ',
        callname,
        '만의 선물을 줄게!',
      ]);
      await era.printAndWait([
        '웃는 얼굴로 다가와 ',
        urara.get_colored_name(),
        '은(는) 주머니에서 꺼낸 무언가를 ',
        you.get_colored_name(),
        '의 손에 쥐여 준다.',
      ]);
      await era.printAndWait([
        '손바닥을 펴 보니 작은 ',
        urara.uma_sex_title,
        '이(가) ',
        you.get_colored_name(),
        "에게 건넨 것은 색을 빼곡히 칠한 색종이였다. 가운데에는 '무엇이든 도와주기 쿠폰'이라고 쓰여 있다.",
      ]);
      await urara.say_and_wait(
        '대청소를 돕는 것도, 밥을 만드는 것도, 이야기하는 것도, 뭐든 말해!',
      );
      await urara.say_and_wait([
        '우라라는 앞으로도 더 열심히 할 테니까 ',
        callname,
        '이(가) 도움이 필요할 때는 부담 없이 불러 줘!',
      ]);

      era.printButton('「응! 고마워!」', 1);
      await era.input();

      await urara.say_and_wait([
        '에헤헤~',
        callname,
        ', 지금 기쁘지? 우라라도 어렸을 때 이런 쿠폰을 아빠한테 줬어. 아빠도 엄청 좋아했어!',
      ]);
      await urara.say_and_wait([
        '우라라는 ',
        callname,
        '도 아빠처럼 기쁘게 해 주고 싶어! 그런데 아빠는 쿠폰을 소중히 넣어 두고 지금까지 한 장도 안 썼어……',
      ]);
      await urara.say_and_wait([
        '그러니까! 우라라는 ',
        callname,
        '이(가) 쿠폰을 넣어 두지 말고, 지금 바로 우라라한테 제대로 써 줬으면 좋겠어!',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '의 장난스러운 미소를 띠고 ',
        you.get_colored_name(),
        '의 품에 뛰어든다. 어느새 다시 조금 자란 작은 ',
        urara.uma_sex_title,
        '은(는) 조금 제멋대로 ',
        you.get_colored_name(),
        '의 위로 올라앉는다.',
      ]);

      await urara.say_and_wait([
        '그래서 ',
        callname,
        ', 이 쿠폰으로 뭘 할 거야?',
      ]);
      era.printButton(
        '「지금이라면, 우라라가 앞으로 더 빨리 달릴 수 있기를 바랄게.」(스피드&스태미나&지능+10)',
        1,
      );
      era.printButton(
        '「그럼 다음에 상점가에서 특훈할 때, 다들 더 많이 도와줘.」(파워&근성+10)',
        2,
      );
      era.printButton(
        '「……이 티켓, 우라라의 몸을 선물로 해줄 수도 있을까?」(전 능력 +5)',
        3,
        { disabled: era.get('love:52') < 50 },
      );
      const ret = await era.input();
      if (ret < 3) {
        await urara.say_and_wait([
          '응? 그렇게 평범한 소원이야? 우라라는 ',
          callname,
          '이(가) 어른이니까 우라라가 모르는 걸 원할 줄 알았어!',
        ]);

        era.printButton(
          `「뭘 기대했는지는 둘째 치고, 어른인 ${callname}이(가) 우라라가 모르는 어떤 걸 원할 거라고 생각해?」`,
          1,
        );
        await era.input();

        await urara.say_and_wait([
          '음…… 뭘까? 예를 들면 ',
          callname,
          '이(가) 우라라를 원한다든지?',
        ]);
        await era.printAndWait('어?');
        await urara.say_and_wait([
          '예를 들면 ',
          callname,
          '이(가) 우라라한테 계속 곁에 있어 달라고 한다든지…… 그런데 그건 평소에도 하고 있네?',
        ]);
        await era.printAndWait('──휴!');
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '의 여전히 티 없이 맑은 얼굴을 보고 ',
          you.get_colored_name(),
          '은(는) 속으로 길게 숨을 내쉰다. 하마터면 ',
          urara.get_colored_name(),
          '이(가) 또 누군가에게 이상한 걸 배워 온 줄 알았다……',
        ]);
        await urara.say_and_wait([
          '그래도 우라라가 자기 전부를 ',
          callname,
          '한테 주고 싶다고 생각하면 ',
          callname,
          ', 받아 줄 거야?',
        ]);
        await era.printAndWait(
          '……역시 방심할 수 없다. 이건 누가 가르쳐 준 거지? 하지만 지금 이 순간, 이 질문에는 답할 가치가 있다──',
        );

        era.printButton(
          "「이미 받았잖아? '우라라가 내게 준 모든 일상'을.」",
          1,
        );
        await era.input();

        await era.printAndWait([
          '대가를 바라지 않는 ',
          urara.teen_sex_title,
          '은(는) 진작에 가장 잘 어울리는 선물을 ',
          you.get_colored_name(),
          '의 손에 건넸다. 성탄절 밤이 찾아온 지금, 더 필요한 게 있을까?',
        ]);
        await era.printAndWait([
          '조금 당혹스러움이 섞인 ',
          urara.teen_sex_title,
          '의 미소를 바라보며 ',
          you.get_colored_name(),
          '하고 ',
          urara.get_colored_name(),
          '은(는) 또다시 선물 같은 하루를 함께 보낸다.',
        ]);
      } else {
        await urara.say_and_wait([
          '응! 좋아. 어차피 ',
          callname,
          ' 네가 말하지 않아도, 우라라는 그렇게 할 생각이었으니까……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 의 욕망이 섞인 시도에 망설임 없이 대답하며, 작은 손이 수줍어하면서도 ',
          you.get_colored_name(),
          ' 의 민감한 곳으로 향한다.',
        ]);
        await urara.say_and_wait([
          '……게다가 ',
          callname,
          ' , 여기 벌써 느끼고 있잖아?',
        ]);
        await era.printAndWait([
          '옷감 위로 손가락을 움직여 ',
          you.get_colored_name(),
          ' 의 민감한 곳을 쓰다듬자, 작은 ',
          urara.uma_sex_title,
          '의 앳된 뺨이 서서히 발그레하게 물든다.',
        ]);
        await era.printAndWait([
          '참을 수 없이 배어 나온 애액은 이미 ',
          urara.teen_sex_title,
          '의 속옷을 흠뻑 적셨고, 억누를 수 없는 발정의 물결이 ',
          you.get_colored_name(),
          '의 다리로 번져 나간다.',
        ]);
        if (era.get('exp:52:성교 횟수') >= 10) {
          await urara.say_and_wait(
            '에헤헤~ 사실 올라탔을 때부터, 우라라는 이미 흠뻑 젖어 있었어……',
          );
          await urara.say_and_wait([
            '이제 못 참겠어…… 우라라가 나쁜 아이가 된 건, 아무리 생각해도 ',
            callname,
            ' 탓이야…… 쪽~',
          ]);
          await era.printAndWait([
            '자연스럽게 연인을 끌어안고,',
            you.get_colored_name(),
            ' 에게 매일 조교당한 작은 몸은, 이제 주인의 욕구를 받아들이기 위한 전희를 능숙하게 준비한다.',
          ]);
          await era.printAndWait([
            '젖어 든 깊은 키스 속에서 ',
            you.get_colored_name(),
            ' 와 끈적한 체액을 섞으며, 올라탄 작은',
            urara.sex_slave_title,
            '는 능숙하게 자신의 옷을 벗는다.',
          ]);
        } else {
          await urara.say_and_wait([
            '하아…… 미안해,',
            callname,
            ' 옷을 더럽혀버렸어…… 하지만 우라라, 이제 더는 못 참겠어……',
          ]);
          await urara.say_and_wait([
            '우라라가,',
            callname,
            '의 소원을 들어줄게. 그러니까 우라라, 힘낼 거야…… 하앙~',
          ]);
          await era.printAndWait([
            '본능에 이끌려 연인과 서로 껴안고, 애인의 명령에 따라 작은',
            urara.sex_slave_title,
            '는 서툴지만 진지하게 주인님을 위한 봉사, 그 전희를 시작한다.',
          ]);
          await era.printAndWait([
            '의식이 아득해지는 틈을 타 입안을 침범당하고,',
            you.get_colored_name(),
            '에게 몸을 마음껏 유린당하는 작은',
            urara.uma_sex_title,
            '는 곧바로 옷이 벗겨진다.',
          ]);
        }
        await urara.say_and_wait([
          '……',
          callname,
          '、오늘은 마음껏 맛봐줘…… 크리스마스 선물인 우라라를~?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 아래로 쓰러뜨려지는 순간, 애정으로 나른해진 ',
          urara.get_colored_name(),
          ' 은 작게 ',
          you.get_colored_name(),
          ' 의 귓불을 핥으며, 두 사람만의 음란한 만찬의 시작을 알린다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // TODO Synced from the current i18n template; this new scene is not translated yet.
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {number} pregnant 春乌拉拉作为母亲的孩子数量（生下+怀孕）
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   */
  async load_talk(urara, inner_urara, callname, pregnant, high_relation) {
    const buffer = [];
    if (pregnant) {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                ', 다음에 다시 만나면 많이 안아 줘. ',
                pregnant > 1 ? '아이들을' : '이 아이를',
                ' 말이야!',
              ]),
            () =>
              urara.say_and_wait(
                '괜찮아. 우라라가 다들 잘 달래 줄게. 다음에 다시 만날 수 있다면, 또 함께——',
              ),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '아무래도 ',
                callname,
                '도 우라라도 준비가 안 됐나 봐…… 미안해……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                ', 우라라는 곁에 두고 싶어. ',
                pregnant > 1 ? '아이들을' : '이 아이를',
                '. 아니면 다음에 다시 만날 수만 있다면——',
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              '우리 다시 만날 수 있지? ',
              pregnant > 1 ? '아이들도' : '이 아이도',
              '…… 미안해. 그래도 우리 다시——',
            ]),
          () =>
            urara.say_and_wait([
              '버리지 말아 줘. ',
              pregnant > 1 ? '아이들을' : '이 아이를',
              '! 부탁이야, ',
              callname,
              '! 우라라한테 약속해 줘. 적어도 다음에는 우리——',
            ]),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              '는 ',
              pregnant > 1 ? '아이들을' : '이 아이를',
              ' 어떻게 생각해? 우라라는 아직……',
            ]),
          () =>
            urara.say_and_wait([
              '버림받는 건 우라라 혼자라도 괜찮아. 하지만 ',
              pregnant > 1 ? '아이들도' : '이 아이도',
              ' 다시는 못 만나게 된다면——',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……하아, 당신을 위로할 말이 하나도 떠오르지 않네요……',
      );
    } else {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                '우라라는 아직 떠나고 싶지 않아. 그러니까 ',
                callname,
                ', 다음에도 우라라랑 함께해 줄래……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                ', 다시 만날 수 있다면 무슨 일이 있어도 꼭 다시 서로를 좋아할 수 있겠지──',
              ]),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '우라라는 걱정하지 않아도 돼! 우라라는 ',
                callname,
                '의 선택을 믿을게! 그러니까──',
              ]),
            () =>
              urara.say_and_wait([
                '다음에 다시 함께할 수 있다면, ',
                callname,
                ' 님과 즐거운 시간을 보내면 정말 좋겠어요—'
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              '은(는) 우라라를 버리는 게 아니지…… 미안해. 무슨 일이 있어도 우라라는 원망하지 않아, ',
              callname,
              '……',
            ]),
          () =>
            urara.say_and_wait(
              '이제 싫증이 난 걸까, 아니면 우라라가 또 뭘 잘못한 걸까? 미안해. 우라라는 아직…… 미안해……',
            ),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              '이(가) 이전의 우라라를 다시 만나면…… 조금만 더 잘 대해 줄 수 있을까?',
            ]),
          () =>
            urara.say_and_wait([
              callname,
              ', 다음에는 또 ',
              callname,
              '하고 같이…… 미안해. 아무것도 아니야……',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……일단은 아직 괜찮아요. 다음에는 너무 지나치게 하지 마세요.',
      );
    }
  },
  basement_end: (() => {
    const title = '기약 없는 자유';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(['……']);
      await era.printAndWait([
        '지금은 몇 시지? 지난번에 시간을 물은 뒤로 또 얼마나 지났을까? 낮도 밤도 없는 밀실에서 ',
        you.get_colored_name(),
        '은(는) 시간 감각을 잃고 있다.',
      ]);
      await era.printAndWait(['하지만 이제 와서 시간이 중요할까?']);
      await era.printAndWait([
        '원래 어두컴컴하던 방은 부드럽고 따뜻한 빛으로 가득하다. 생활감이 묻어나는 가구들이 방을 채우고, 한쪽 벽에는 자연광을 흉내 낸 가짜 창문까지 걸려 있다.',
      ]);
      await era.printAndWait([
        '침대 옆 책상에는 컴퓨터와 서류, 방 한가운데의 낮은 탁자에는 과자와 과일이 놓여 있다. 반대편 벽 쪽에는 별도 욕실까지 마련되어 있다……',
      ]);
      await era.printAndWait([
        '평범한 거실처럼 환하게 꾸며진 주위를 둘러보며 ',
        you.get_colored_name(),
        '은(는) 조금 꿈을 꾸는 듯한 기분에 빠진다.',
      ]);
      await urara.say_and_wait(['에헤헤~ 여기, 둘만의 작은 집 같네!']);
      await era.printAndWait([
        '처음에는 농담 같던 말이 이제는 점점 현실이 되어 간다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '이(가) 사람들에게 ',
        urara.sex,
        '의 트레이너가 어디로 갔는지 어떻게 설명했는지 모른다. 가구를 어디서 가져왔고 수도와 전기는 어떻게 연결했는지도 모른다.',
      ]);
      await era.printAndWait([
        '원래라면 중요한 의문인데, 지금은 손만 뻗으면 작은 ',
        urara.uma_sex_title,
        '의 부드러운 분홍빛 긴 머리카락에 닿는다. 그런 것도 이제는 아무래도 상관없어졌다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 곁에서 안심하고 잠든 ',
        urara.get_colored_name(),
        '은(는) 꿈속에서 자기도 모르게 행복한 미소를 짓고 있다.',
      ]);
      await era.printAndWait([
        '계속 나가려다 결국 포기한 트레이너와, 감금을 선택하고 점점 다정해진 ',
        urara.uma_sex_title,
        '. 대체 누가 누구를 길들인 걸까.',
      ]);
      await era.printAndWait(['그 답은 아마 여기 있는 두 사람만 알 것이다.']);
      await urara.say_and_wait([callname, '、', callname, ', 오늘은……']);
      await era.printAndWait([
        '어느새 짧은 잠에서 깬 ',
        urara.get_colored_name(),
        '이(가) 자신이 기대고 있는 사람을 올려다본다. 다시 맑고 밝아진 눈동자에 벚꽃빛이 피어난다.',
      ]);

      era.printButton('「……오늘은 밖에 나가는 날인가?」', 1);
      await era.input();

      await urara.say_and_wait([
        '응. 오늘은 ',
        callname,
        '을(를) 밖에 데리고 나가서 햇볕을 쬐는 날이야!',
      ]);
      await era.printAndWait([
        "'연인'이 도망칠까 무섭지 않은 걸까. 그런 의문은 더 이상 들지 않는다. 정말 떠나고 싶었다면 ",
        you.get_colored_name(),
        '은(는) 진작에 몇 번이고 나갔을 것이다.',
      ]);
      await era.printAndWait([
        '오랜만에 사람들로 북적이는 거리에 선 두 사람은 손깍지를 끼고 있을 뿐인데도, 수갑이나 사슬보다 단단하게 묶여 있는 것 같다.',
      ]);
      await era.printAndWait([
        '봄꽃이 피어나듯 ',
        urara.get_colored_name(),
        '의 미소가 푸른 하늘 아래에서 원래 모습을 되찾는 걸 보고, 몇 번째인지도 모를 꿈결 같은 기분이 다시 ',
        you.get_colored_name(),
        '의 머릿속으로 밀려온다.',
      ]);
      await era.printAndWait(['사실은 알고 있던 것도 있지 않은가?']);
      await era.printAndWait([
        '상냥한',
        urara.sex,
        '가 「감금」을 선택한 이유. 배덕의 몸으로 ',
        you.get_colored_name(),
        ' 과 뒤섞였던, 헤아릴 수 없이 많았던 탁한 밤의 이유.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 그저 독차지하고 싶은 것만은 아니다.',
        urara.sex,
        '은(는) 지금도 자신의 트레이너를 바로잡고 싶고, 나아가 지켜 주고 싶어 한다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '은(는) 그저 진심으로 ',
        you.get_colored_name(),
        '이(가) ',
        urara.sex,
        ' 덕분에 행복해지기를 바란다.',
        urara.get_colored_actual_name(),
        '(이)라는 작은 ',
        urara.uma_sex_title,
        '에게 사랑받는 트레이너이기를 바란다.',
      ]);
      await era.printAndWait([
        '그러니 ',
        urara.sex,
        '은(는) 트레이너도 진심으로 자신을 바라봐 주기를 바란다. 그러니 ',
        urara.get_colored_actual_name(),
        '(이)라는 작은 ',
        urara.uma_sex_title,
        '은(는) 이제 ',
        you.get_colored_name(),
        '을(를) 누구에게도 넘겨주고 싶지 않다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 진작부터 ',
        urara.sex,
        '의 트레이너를 원망하고 싶지 않았다.',
        urara.sex,
        '은(는) 한 번도 ',
        you.get_colored_name(),
        '을(를) 해치고 싶었던 적이 없다. 그저 ',
        you.get_colored_name(),
        '이(가) 영원히 ',
        urara.sex,
        '의 곁에 있어 주기를 바랄 뿐이다.',
      ]);
      await era.printAndWait(['아마 이래도 괜찮겠지……']);
      await era.printAndWait([
        '이야기가 흘러온 과정을 아름답다고 할 수는 없다. 그래도 서로를 묶어 둔 두 사람에게 행복한 결말은 남겨 줄 수 있다.',
      ]);

      era.printButton('「아마 나는 줄곧 우라라를 사랑했나 봐.」', 1);
      await era.input();

      await era.printAndWait([
        '당연한 선언은 아니다. 누군가를 사랑하는 건 원래 당연한 일이 아니다. 다만 지금 ',
        you.get_colored_name(),
        '은(는) 예전에는 늘 잊곤 했던 사실 하나를 더 확실히 알고 있다.',
      ]);
      await era.printAndWait([
        '한때는 ',
        you.actual_name,
        '(이)라는 이름의 ',
        you.sex,
        '이(가) 많은 사람을, 많은 ',
        urara.uma_sex_title,
        '을(를) 좋아했을지도 모른다. 하지만 지금은 선택하는 데 의미가 없다.',
      ]);
      await era.printAndWait([
        '왜냐하면 ',
        you.get_colored_name(),
        '의 곁에 선 이 작은 ',
        urara.uma_sex_title,
        '은(는) 여지를 남기지 않고 ',
        you.get_colored_name(),
        '의 전부가 되려 하고 있으니까.',
      ]);
      await era.printAndWait([
        '그러니 오늘은 특별한 날이 될 것이다. 작은 ',
        urara.uma_sex_title,
        '도 한때 나쁜 아이가 되기로 결심했을 때처럼 이미 마음을 정했다.',
      ]);
      await urara.say_and_wait([callname, ', 우라라, 결심했어──']);
      await era.printAndWait([
        you.get_colored_name(),
        '의 작은 중얼거림을 들었는지 작은 ',
        urara.uma_sex_title,
        '은(는) 그렇게 선언한다.',
      ]);
      await urara.say_and_wait([
        '조금 아쉬울 것 같기도 하지만, 같이 저기서 나가서 햇볕을 제대로 쬘 수 있는 곳에서 살자!',
      ]);

      era.printButton('「그래도……」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        '하고 우라라는 이제 그런 사이일 필요 없잖아?',
      ]);
      await urara.say_and_wait([
        '우라라는 이제 어린애가 아니야! 그러니까 ',
        callname,
        '도 따라와! 여기 햇볕, 기분 좋아!',
      ]);
      await era.printAndWait([
        '눈부신 햇살이 ',
        you.get_colored_name(),
        '의 얼굴에 쏟아진다. 옆에서 ',
        you.get_colored_name(),
        '을(를) 끌어안은 ',
        urara.get_colored_name(),
        '의 미소는 햇살만큼이나 밝다.',
      ]);
      await era.printAndWait(["역시 이제 '그래도' 같은 말은 필요 없다……"]);
      await era.printAndWait([
        "'용서받지 못할 죄인'은 가장 자유로운, '",
        urara.get_colored_actual_name(),
        "의 사랑'이라는 이름의 '감옥'에 갇혀 있다──",
      ]);
      await era.printAndWait([
        "이것이 세상에서 가장 행복한 '무기징역'일까? 지금 ",
        you.get_colored_name(),
        '은(는) 아직 답을 알지 못한다.',
      ]);
      await era.printAndWait([
        '앞으로 햇살 아래에 선 ',
        you.get_colored_name(),
        '은(는) 남은 생을, 누구보다 ',
        you.get_colored_name(),
        "을(를) 사랑하는 '작은 간수'와 함께 끝없이 이어질 '옥중의 추억'에 써 내려갈 것이다.",
      ]);

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '……하아.',
        urara.sex,
        '이(가) 그렇게 바란다면 그게 가장 좋은 결말이겠지요. 다만 당신이 조금 이득을 본 것 같네요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '저도 속 좁은 사람은 아니에요. 그저 조금 마음에 들지 않을 뿐이지요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '처음 우라라와 했던 약속을 아직 기억하시나요? 당신, 너무 많은 걸 건너뛴 건 아닌가요?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '삐치려는 건 아니에요. 하지만 이런 공허한 결말로 끝내는 건 조금 성의 없지 않나요?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '다시 만날 기회가 있다면 단단히 마음을 다잡아 주세요.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
