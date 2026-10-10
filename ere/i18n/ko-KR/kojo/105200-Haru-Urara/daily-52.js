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
            '은(는) 늘 그렇지만!',
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
              `${callname}、もっと近づいてもいいよ？ わっ！ えへへ、また ${callname} の膝に座っちゃった！ ${callname} の体、あたたかいね！`,
            );
            era.print([
              urara.get_colored_name(),
              ' が嬉しそうに言う。一瞬、潤んだ色が顔をよぎった気がする。',
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
              `${callname} の匂い、いいにおい！ はぁ……あっ！ ごめんね！ ${callname} を困らせちゃだめだよね。でも、ん……`,
            );
            era.print([
              '離そうとはするものの、',
              urara.get_colored_name(),
              ' は抑えきれず、顔を赤らめたまま勝手に ',
              you.get_colored_name(),
              ' の匂いを嗅いでいる。',
            ]);
          },
          () => {
            urara.say([
              `『雑魚～雑魚～』、これ `,
              call_19,
              ` のメモ帳で習ったんだ。${callname} が嬉しくなるって！ え？ もう言わないで？ じゃあ ${self_call}、言わない！ でも ${callname}……まだ ${self_call} のこと、見ててね？`,
            ]);
            era.print([
              you.get_colored_name(),
              ' の戸惑いを眺めながら、',
              urara.get_colored_name(),
              ' の澄んだ笑顔に、いつの間にか忍び笑いのような愉悦が混ざる。',
            ]);
          },
          () => {
            urara.say([
              `昨日の夜、`,
              call_61,
              ` がベッドで変な声出してたよ！ でもその声聞いてたら、${self_call} の頭の中、全部 ${callname} で……なんで？ ${self_call}、よくわかんない。でもそのあと……？ そのあと……${self_call}、寝ちゃった！`,
            ]);
            era.print([
              '最近の話を最後まで言えず、',
              urara.get_colored_name(),
              ' は真っ赤な顔で視線を逸らす。',
            ]);
          },
          () => {
            urara.say(
              `あは～ ${callname} の『足のあいだ』は ${self_call} の『指定席』、約束でしょ？ 誤解されること言わないで？ 誤解じゃないよ！ それとも……${callname}、またなに考えてるの？`,
            );
            era.print([
              '無垢な口調で ',
              you.get_colored_name(),
              ' に誘惑の囁きを吐き、',
              urara.get_colored_name(),
              ' のかわいい顔まで『色気』を帯びて見える……',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `이 새로 나온 맛의 벌꿀 특제 드링크, 맛있다? ${callname}도 마셔 봐! 간접 키스……? ${self_call}은(는) 괜찮은데? 혹시…… ${callname}, 부끄러워?`,
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
              `最近またお料理おぼえたよ！ これから ${callname} のお腹、いっぱいにできるように、${self_call} がんばるね！ そんなこと言わないで？ じゃあ ${callname} も、${self_call} の体をいっぱいにしたいの？ 大人をからかうなって？ わかったよ……`,
            );
            era.print([
              you.get_colored_name(),
              ' の注意を聞いて、',
              urara.get_colored_name(),
              ' はやっと、言い終わる前から真っ赤だった顔を逸らす。',
            ]);
          },
          () => {
            urara.say(
              `商店街のみんな、また ${self_call} がきれいになったって！ ${self_call} が速くなったから？ ん？ それだけじゃない？ 実はわかってるよ！ ${callname} が ${self_call} の体を見る目、前より夢中なのも……冗談だよ！`,
            );
            era.print([
              'そっと裾をめくって柔らかい体を見せ、',
              urara.get_colored_name(),
              ' の純粋な笑顔に ',
              you.get_colored_name(),
              ' は焦って目が回りそうになる。',
            ]);
          },
          () => {
            urara.say(
              `最近 ${self_call}、いっぱい考えたよ？ うん！ みんなに、もっと勝つところ見せたい！ 無理しないで？ わかってるよ！ だから『1着』のなかには、${callname} にだけ見せるのもあるんだ……えへへ～`,
            );
            era.print([
              urara.get_colored_name(),
              ' の笑顔は相変わらず無邪気だ。だが ',
              callname,
              ' にだけ見せる1着とは……？',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `今日もちゃんと見ててね。ウララ、${callname} に勇気、届け続けるから！ ……それにこのあと、ふたりだけのときは、${callname} もがんばってね？`,
            );
            era.print([
              'つま先立ちで、',
              urara.get_colored_name(),
              ' が優しく ',
              you.get_colored_name(),
              ' の頬を撫でる。同時に、',
              you.get_colored_name(),
              ' を不安にさせる言い方も残した。',
            ]);
          },
          () => {
            urara.say(
              `これから先、${callname} は子供、何人ほしい？ 何人でも ${self_call}、受け入れるよ！`,
            );
            era.print([
              '前後の噛み合わない話をしながら、',
              urara.get_colored_name(),
              ' の熱い視線に ',
              you.get_colored_name(),
              ' は落ち着かない。',
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
              `ねえねえ、${callname}！ 気持ちよくて楽しいこと、今日も一緒にしない？ 声大きい？ でもウララが言ったの、一緒にトレーニングだよ？ もしかして ${callname}、${self_call} に……？`,
            );
            era.print([
              you.get_colored_name(),
              ' の反応を眺め、',
              urara.get_colored_name(),
              ' のまだ幼い笑顔に、羞恥の赤みが少し乗る。',
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
              '의 눈빛은 진지하기만 하다.',
            ]);
          },
          () => {
            urara.say(
              `${callname}、${self_call} のこと想った？ 昼のほうが想う？ 夜のほうが想う？ ふんふん～ ${callname} が怒ってもやめないよ。今のウララは、悪い ${self_call} だよ！`,
            );
            era.print([
              '後ろから ',
              you.get_colored_name(),
              ' の腰を抱き、',
              urara.get_colored_name(),
              ' が甘い声で ',
              you.get_colored_name(),
              ' の神経をくすぐる……',
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
            `보충 수업 때 또 다들 도와줬어. 그러게! ${self_call}도 다들처럼 똑똑하면 좋을 텐데……`,
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
              `${callname}、今日の匂い……ん？ ${self_call}、わざとじゃないよ？`,
            );
            era.print([
              'ぼんやりと ',
              you.get_colored_name(),
              ' の服にすり寄り、小さな担当は少し投げやりに ',
              you.get_colored_name(),
              ' へ謝る。',
            ]);
          },
          () => {
            urara.say(
              `最近 ${callname} を見ると体がほてって、夜に ${callname} のこと考えると、下が……ごめん、${self_call}、もう言わない。でも……やっぱり、なんでもないよね……？`,
            );
            era.print([
              'しばらくもじもじしたあと、真っ赤になった ',
              urara.get_colored_name(),
              ' は、最後まで言い切れなかった。',
            ]);
          },
          () => {
            urara.say(
              `『意気地なしの雑魚さん、生徒を騙すニセモノの優しさ、嫌い、最低……』やめて？ でも ${callname} も興奮してるでしょ？ 『${self_call} にすら騙せない変態トレーナー』……`,
            );
            era.print([
              you.get_colored_name(),
              ' の耳元で思う存分『いたずら』をして、',
              urara.get_colored_name(),
              ' の興奮した顔には、隠しきれない侮蔑と情欲が混ざる。',
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
              `またみんな、${self_call} が綺麗になったって言うんだ。${self_call}、本当に綺麗になった？ でも知ってるよ、${callname} が ${self_call} をめちゃくちゃにしたってこと……冗談じゃないよ？`,
            );
            era.print([
              'ふたりきりのとき、隠さず ',
              you.get_colored_name(),
              ' に体を寄せて見せて、',
              urara.get_colored_name(),
              ' の純粋だった笑顔が、少し濁っていく。',
            ]);
          },
          () => {
            urara.say(
              `気持ちいいこと、${self_call} も ${callname} としたいよ。でも毎日のトレーニングも大事だよ？ それに次、一着取れたら ${callname} ももっと喜ぶでしょ。そのとき……`,
            );
            era.print([
              '口では気が進まないみたいなのに、小さな',
              urara.uma_sex_title,
              'の頬は赤くなっている。そのときは、何を言うつもりなんだろう？',
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
              `${callname}……うっ……え？${callname}？！き、今日も一緒に頑張ろうね！`,
            );
            era.print([
              urara.get_colored_name(),
              ' はこそこそ何かしていたらしく、',
              you.get_colored_name(),
              ` が${urara.sex}の後ろに来て、ようやく顔を赤くして気づいた。`,
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
              `${callname}！${self_call}、ちょっと……だめ、${callname} に迷惑かけちゃだめ！えっ……本当になんでもないよ？`,
            );
            era.print([
              '',
              you.get_colored_name(),
              ' に背を向けているとき、',
              urara.get_colored_name(),
              ` は何かしていたようだが、${urara.sex}はずっと認めない顔をしている。`,
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
        urara.say('……うっん、あ……');
        era.print([
          '体は落ち着かないのに起きられず、',
          urara.get_colored_name(),
          ' は眠ったまま顔を赤くして甘い声を漏らす。',
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
          '近い……',
          callname,
          ' がすぐそばに……あ！ごめん！集中しなきゃ……うぅ……',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の両脚のあいだに割り込んだ ',
          urara.get_colored_name(),
          ' はまだそわそわしていて、今日の補習も変な方向に傾き始めている……',
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
          '！今度いい点取れたら！……特別なご褒美、もらってもいい？',
        ]);
        await era.printAndWait([
          '引き受けてもいいのだが、',
          urara.get_colored_name(),
          ' の赤らんだ顔と虚ろな目を見て、',
          you.get_colored_name(),
          ' はこの爆弾を受け取るべきか迷い始める。',
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
            '薬の影響で、眠っている ',
            urara.get_colored_name(),
            ' の吐息が、次第に甘く色っぽくなっていく。',
          ]),
        () =>
          era.printAndWait([
            '卑劣な薬に屈して意識を失った ',
            urara.teen_sex_title,
            ' は、いまは使われるのを待つ肉人形だ。',
          ]),
        () =>
          era.printAndWait([
            '手足は夢の中で抵抗するように身をよじっているのに、小さな',
            urara.uma_sex_title,
            'の股間はもう素直にぐしょぐしょに濡れている。',
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
            'よくわからないけど、',
            callname,
            ' のプレゼントもらうと体がぽかぽかする！なんでだろう……',
          ]);
          await era.printAndWait([
            '贈り物の話をしているのに、顔を赤くした ',
            urara.get_colored_name(),
            ' は熱っぽく ',
            you.get_colored_name(),
            ' の目を見つめ続けている。',
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
            '、ありがとう！',
            callname,
            ' は次の1着がほしいの？それともいまのウララを抱きしめたくて？',
          ]);
          await urara.say_and_wait([
            'ウララ的には、',
            callname,
            ' どっちもおすすめだよ？',
          ]);
          await era.printAndWait([
            '無邪気な口調で神経をくすぐる言葉を言い、',
            urara.get_colored_name(),
            ' の欲しがる桜色の瞳に ',
            you.get_colored_name(),
            ' の姿が揺れている……',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '……',
            callname,
            '、いまだけじゃなく、ウララのこれからのお返しも、ちゃんと楽しみにしてていい？',
          ]);
          await era.printAndWait([
            '贈り物を受け取った ',
            urara.get_colored_name(),
            ' は静かに手を下腹に重ね、顔を赤らめて ',
            you.get_colored_name(),
            ' に曖昧な問いを向ける。',
          ]);
          await era.printAndWait([
            '小さな',
            urara.uma_sex_title,
            'が答えを求めていないのはわかっているので、',
            you.get_colored_name(),
            ' も仕方なく、ありうる未来を受け止める覚悟を決める。',
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
          '抑えきれない熱い思いを抱えたまま、小さな',
          urara.uma_sex_title,
          'は震えながら舌を出し、自分の唾液をそっと ',
          you.get_colored_name(),
          ' の飲み物に混ぜる……',
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
          'んあっ～ごめん……うぅ……ウララ、声小さくするから……',
        );
        await era.printAndWait([
          '脚をマッサージしているだけなのに、',
          urara.get_colored_name(),
          ' は何度も顔の赤くなる声を漏らしてしまう……',
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
          '無邪気な笑顔の ',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の胸にすり寄り、耳元でそっと吐息を漏らす。',
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
          '噂だと、溜まりすぎた欲も木のうろさんが持ってってくれるらしいけど、そうされたら木のうろさんもかわいそう……',
        );
        await era.printAndWait([
          '口ではそう言いながら、',
          urara.get_colored_name(),
          ' の視線はかわいそうな枯れうろから離れない。',
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
          'お日さまに当たったあと、',
          callname,
          ' の匂い、すっごくいいにおい……本当だよ！',
        ]);
        await urara.say_and_wait([
          'でも、ウララのからだもいいにおいするよ！',
          callname,
          ' も嗅いでみて……！',
        ]);
        await era.printAndWait([
          '赤らんだ笑顔のまま、',
          urara.get_colored_name(),
          ' は',
          urara.uma_sex_title,
          'の力で ',
          you.get_colored_name(),
          ' を、',
          urara.teen_sex_title,
          'の体香でいっぱいの胸に引き込む……',
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
          '聞いたんだけど、',
          call_32,
          ' ',
          urara.sex,
          'が特別な調味料を売ってるらしい……あれ、どんな味なんだろう？',
        ]);
        await era.printAndWait([
          '特別な話題を小さな声で話す ',
          urara.get_colored_name(),
          ' は、なぜか何かを夢想するような恍惚した顔になる。',
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
          'あの格好、目が離せないね……みんな、ああいうの好きなの？',
        );
        await urara.say_and_wait([
          callname,
          ' は、',
          urara.get_colored_name(),
          ' が大人の格好して、大人のダンスするの、見たい？もし ',
          callname,
          ' がそうしたいなら……',
        ]);
        await era.printAndWait([
          'ダンスゲームの待機画面で繰り返される際どいダンス映像に目を奪われ、',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の服の端を掴む力もまた強くなる。',
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
          '今日は普通にぬいぐるみ取ろう！普通に取るだけでいいから！',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' は頬を赤らめて宣言し、',
          you.get_colored_name(),
          ' が真剣にクレーンをしている最中、突然胸元に潜り込んで小さな口で ',
          you.get_colored_name(),
          ' の首筋をそっと襲う。',
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
          '……え、え？',
          callname,
          '、隣の部屋、いったい……？',
        ]);
        await era.printAndWait([
          '隣の個室から絶えず聞こえる水音と喘ぎに、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はしばらく何をすればいいかわからなくなる……',
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
          'だが背を向けた ',
          you.get_colored_name(),
          ' は、担当がこっそり顔を赤らめて舌を出し、',
          you.get_colored_name(),
          ' が口をつけたスプーンを丁寧に舐めている、目のとろんとした様子を見逃す……',
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
          'あーん～ぐちゅ——食べるとき変な音出さない？わかったよ……？',
        );
        await era.printAndWait([
          '変な吸い方で食べ物を味わうところを見られたのに、真っ白な顔の小さな',
          urara.uma_sex_title,
          'は、自分でも何をしているのかわかっていないらしい。',
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
          '聞いて！雑誌で、すごい口移しでご飯あげる遊び、見たよ！',
        );
        await urara.say_and_wait(
          `でも外ではがまんしなきゃ……じゃあ二人だけのとき、${callname}、その遊び、してくれる？`,
        );
        await era.printAndWait([
          '断っても無駄だろう。小さな',
          urara.uma_sex_title,
          'の期待に熱を帯びた目を余所に、',
          you.get_colored_name(),
          ' は黙って飯をかき込む。',
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
          `はぁ……あ、ちゃんと歩かなきゃ！でも ${callname} の匂い……はぁ……`,
        );
        await era.printAndWait([
          'ずっと ',
          you.get_colored_name(),
          ' の服を掴んだまま、',
          urara.get_colored_name(),
          ' は自分の ',
          callname,
          ' の匂いにすっかり浸っている。',
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
                'はぁ……ごめんね ',
                callname,
                '、ん～もうちょっと待って……',
              ]);
              era.print([
                '顔に妙な赤みが差したまま、',
                urara.get_colored_name(),
                ' は去る前に発情した小動物みたいに ',
                you.get_colored_name(),
                ' の体にすり寄る。',
              ]);
            },
            () => {
              urara.say([
                callname,
                '！行く前に、もう一回ぎゅって ',
                self_call,
                ' を抱っこしてくれる？ん……もっと強くてもいいよ？',
              ]);
              era.print([
                'さよなら前の小さな願いを出して、',
                you.get_colored_name(),
                ' の抱擁で顔を真っ赤にした ',
                urara.get_colored_name(),
                ' はとろんとした表情になる。',
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
                'ちゅん～はぁ……ん！今日はここまで、',
                callname,
                ' がまだ欲しいなら次に遊ぼう！大丈夫、',
                callname,
                ' が来なくても、',
                self_call,
                ' はずっと ',
                callname,
                ' を待ってるから……',
              ]);
              era.print([
                '恋人の首に別れ前の赤い印を吸い、小さな',
                urara.uma_sex_title,
                'の澄んだ声が濁って色っぽく ',
                you.get_colored_name(),
                ' の耳に絡みつく。',
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
                'ごめん……これ、もう少し ',
                self_call,
                ' に時間、ちょうだい……',
              ]);
              era.print([
                '分かれる前に何度も ',
                you.get_colored_name(),
                ' の体にすり寄り、',
                urara.get_colored_name(),
                ' は欲情で震えるのを必死に抑える。',
              ]);
            },
            () => {
              urara.say([
                'あんな人なのに、',
                callname,
                ' の匂い……あ！ごめん……',
              ]);
              era.print([
                'うっとりからようやく我に返り、',
                urara.get_colored_name(),
                ' は慌てて恥ずかしそうに ',
                you.get_colored_name(),
                ' の服の端を離す。',
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
                '、夜に大人の遊びするときも気をつけてね！行かない？本当でもいいよ……',
              ]);
              era.print([
                '別れ前の雑談で、',
                urara.get_colored_name(),
                ' の疑いつつも受け入れる目が、',
                you.get_colored_name(),
                ' を少し落ち着かなくさせる。',
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
                'ちゅっ～ぐちゅ～はぁ……えへへ～好き？今日はここまで、次都合がいいとき、',
                self_call,
                ' が ',
                callname,
                ' に言うから！',
              ]);
              era.print([
                '別れ前の恋人に自分の印を強く焼き、小さな',
                urara.uma_sex_title,
                'は澄んだ声で濁った欲を語る。',
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
            urara.say('うっ……ん……');
            era.print([
              '',
              you.get_colored_name(),
              ' が',
              urara.sex,
              'を送る道でも、眠っている ',
              urara.get_colored_name(),
              ' はずっと落ち着かない声を漏らしている。',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '小さな体が熱っぽく ',
              you.get_colored_name(),
              ' の胸に縮こまり、帰り道でも ',
              urara.get_colored_name(),
              ' はピンクの夢に浸ったままだ。',
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
          'ぐちゅ～はぁ……',
          callname,
          '、今度も気持ちいいことしよ？満足するまでやっていいよ？',
        ]);
        era.print([
          '抑えきれない抱擁と湿ったキスのあと、小さな',
          urara.sex,
          'は無邪気な口調で ',
          you.get_colored_name(),
          ' の耳元に魔性の誘いを囁く。',
        ]);
      } else if (love >= 90) {
        urara.say([
          'ちゅっ～つまり今夜は ',
          self_call,
          '、大丈夫だよ？だから……',
          callname,
          '、',
          self_call,
          ' と一緒にいる？',
        ]);
        era.print([
          '少し大人びた羞じらいを帯びて恋人の顔にキスを落とし、',
          urara.get_colored_name(),
          ' の笑顔の下は潤んだ頬だ。',
        ]);
      } else if (love >= 75) {
        urara.say([
          '帰るとき、',
          self_call,
          '、',
          callname,
          ' の部屋、見に行っていい？み、見るだけだから！',
        ]);
        era.print([
          '',
          urara.teen_sex_title,
          'の欲しがる目で曖昧な言い訳を言い、頬を赤らめた ',
          urara.get_colored_name(),
          ' は、言わずとも伝わっている。',
        ]);
      } else {
        urara.say([
          callname,
          '！今日は、も、もっと ',
          self_call,
          ' に付き合ってくれる？夜、もう少しいて！',
        ]);
        era.print([
          'ごにょごにょしながら ',
          you.get_colored_name(),
          ' の体にすり寄り、',
          urara.get_colored_name(),
          ' は息を荒くして ',
          you.get_colored_name(),
          ' を引き止める。',
        ]);
      }
    } else if (love === 100) {
      urara.say([
        '最近、疲れてる？じゃあ、ちゅっ……えへへ、今日 ',
        callname,
        ' は ',
        self_call,
        ' に、もっとすごいことしていいよ？',
      ]);
      era.print([
        '柔らかい感触が ',
        you.get_colored_name(),
        ' の口元を撫で、つま先立ちの ',
        urara.get_colored_name(),
        ' は軽いキスで',
        urara.sex,
        'の ',
        callname,
        ' に纏綿とした願いを出す。',
      ]);
    } else if (love >= 90) {
      urara.say([
        '',
        self_call,
        ' は寂しくないけど、',
        callname,
        ' が欲しいなら……',
        self_call,
        ' も大丈夫だよ？',
      ]);
      era.print([
        '建前で誘いを出し、別れ際の ',
        urara.get_colored_name(),
        ' は突然とろんとした目で ',
        you.get_colored_name(),
        ' の腰を抱きしめる。',
      ]);
    } else if (love >= 75) {
      urara.say([
        '',
        self_call,
        ' を連れて帰りたい？明日に差し支えなければ、大丈夫だよね……？',
      ]);
      era.print([
        '',
        you.get_colored_name(),
        ' が最初の問いに答える前に、詰め寄る小さな',
        urara.uma_sex_title,
        'は満たされない顔で ',
        you.get_colored_name(),
        ' に二問目を投げる。',
      ]);
    } else {
      urara.say([callname, '、', self_call, ' の体、なんか変……行かないで？']);
      era.print([
        '気が進まないのに、小さな',
        urara.uma_sex_title,
        'は顔を真っ赤にして ',
        you.get_colored_name(),
        ' の服の端を掴む。',
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
      '羞じらいも忘れたように、見知らぬほど敏感になった体を弄り、今日の ',
      you.get_colored_name(),
      ' はトレーナー室の隅で小さな甘い声を漏らしている。',
    ]);
    await era.printAndWait([
      '鏡の中の体と顔は自分とは思えないほど整っているが、',
      you.get_colored_name(),
      ' は覚めない悪夢に浸ったまま抜けられない。',
    ]);
    await era.printAndWait([
      '軽く触れただけで、この体はかゆくてたまらない……これも改造のせい？それとも、これがウマ娘の体……？',
    ]);
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' がさらに服を脱ごうとしたとき、鍵のかかっていない後ろの扉から、軽く丁寧なノックが聞こえる。',
    ]);
    await era.printAndWait([
      '扉が開く一秒前、ほとんど目が覚めた ',
      you.get_colored_name(),
      ' は恐怖で跳ねる胸を押さえ、慌てて体を隠す。',
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
        '脱いだ服を横に無造作に積み、いまの',
        urara.sex,
        'は全身、きつめのピンクのスポーツ下着だけだ。',
      ]);
      await era.printAndWait([
        '桜色の髪としっぽが体の下に自然に広がり、小さくかわいい耳もゆるんで揺れている。',
      ]);
      await era.printAndWait([
        '人形みたいなかわいい顔は安心した表情で、眠ったまま自然に体を伸ばす小さな',
        urara.uma_sex_title,
        'の肌が、灯りに健康な光を返す。',
      ]);
      await era.printAndWait([
        'タイトな下着が',
        urara.teen_sex_title,
        'の柔らかい体に少し食い込み、初々しい肉感と育ちゆく曲線が、つぼみのような体の上で微妙な均衡を保っている。',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '事情あって過剰に豊かな胸は、上半身に残った布をいっぱいに押し広げ、小さな',
          urara.uma_sex_title,
          'の体の上で自由に形を主張している。',
        ]);
      }
      await era.printAndWait([
        'トレーナー室のソファベッドに横たわり、',
        urara.get_colored_name(),
        ' は無防備に愛らしい体を晒している。',
      ]);
      await era.printAndWait([
        'こんなに警戒のないかわいい生き物を前に、小さな',
        urara.uma_sex_title,
        'と初めて出会い、同じベッドで眠ったときと似た考えが ',
        you.get_colored_name(),
        ' の頭に浮かぶ。',
      ]);
      await era.printAndWait([
        'こんなに柔らかい小さな生き物、',
        urara.sex,
        'の邪魔にならなければ撫でてみたくなる。担当のこの様子では、見ている側まで眠くなる。',
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
        '首筋に埋まった髪が甘い香りを放ち、小さな',
        urara.uma_sex_title,
        'の鎮めるような匂いは肌の触れ合いを伝って、悪戯に ',
        you.get_colored_name(),
        ' の鼻へ潜り込む。',
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
        'その地味な機械は狩りをする蜘蛛みたいに暗い隅に座り、質素な筐体と暗いピンクの灯りが中の謎の賞品を隠している。',
      );
      await urara.print_and_wait(
        '機械の隅の「目白城製」は、ここにあってよいはずがないと証明するが、この隠れた隅を見つけた時点でもう遅い。',
      );
      await urara.print_and_wait([
        '小さな',
        urara.uma_sex_title,
        'は一瞬でこの幻覚じみた機械に魂を掴まれ、驚きで声が出そうな口を押さえても、中の「サプライズ」に視線を奪われている。',
      ]);
      await urara.print_and_wait([
        '薄暗いピンクの光の下、禍々しい器具たちが衝撃的に積み上がり、薄いガラス越しに',
        urara.sex,
        'へ誘惑の指先を伸ばしている。',
      ]);
      await urara.print_and_wait(
        '早く離れなければとわかっているのに、普段いちばん素直な両脚は主人の意思に逆らい、桃色の罠へ少しずつ寄っていく。',
      );
      await urara.print_and_wait([
        '穴に飛び込む前に一瞬迷うアリスみたいに、',
        urara.teen_sex_title,
        'は未知のざわめきのなかで耳を折り、震える手を投入口へ伸ばす。',
      ]);
      await urara.print_and_wait(
        '他ののろいクレーンと違い、この不気味な機械は動き出した瞬間からレバーの命令を真っ直ぐ実行する。',
      );
      await urara.print_and_wait(
        '力強い掴みと安定した運搬のあと、大きすぎる爪は少し潰れたギフト箱を簡単に吐き出す。',
      );
      await urara.print_and_wait([
        '肝を冷やしながら適当に掴んだものを取り出し、',
        urara.get_colored_name(),
        ' は少しの僥倖を抱えて、ランドセルに隠せる小さな箱を開ける。',
      ]);
      await urara.print_and_wait([
        '透明な窓越しに、ショーケースの禍々しい器具よりずっと小さいのに、',
        urara.get_colored_name(),
        ' は目の前の「現物」に圧倒される。',
      ]);
      await urara.print_and_wait([
        'これは',
        urara.sex,
        'が ',
        call_30,
        ' と ',
        call_19,
        ' の隠していた変な漫画で見た「おもちゃ」だが、型は違う。',
      ]);
      await urara.print_and_wait([
        '尖った頭と楕円の胴の金属プラグが',
        urara.child_sex_title,
        'の手で冷気を放ち、短い金属棒でつながった柔らかい台座の下には黒い強力吸盤がついている。',
      ]);
      await urara.print_and_wait([
        '手に取ってから、小さな',
        urara.uma_sex_title,
        'はそれが細長い梨ほどもあると気づく。これは絶対に「初心者」用ではない。',
      ]);
      await urara.print_and_wait([
        '心を失ったみたいに、',
        urara.teen_sex_title,
        'の桜色の瞳は灯りで色っぽい濃いピンクになり、',
        urara.sex,
        'はぼんやりと隅でスカートと上着をめくる……',
      ]);
      await urara.say_and_wait('だ、大丈夫……ちょっと、ちょっと試すだけ……');
      await urara.print_and_wait([
        '小さな声で自分を説得しながら、',
        urara.get_colored_name(),
        ' は包装の指示どおり、吸盤を床に固定する。',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        'は陰で片手でスカートを解き、スパッツと下着を脱いで横に投げ、もう一方の手でしっぽを軽く払う。',
      ]);
      await urara.print_and_wait([
        '漫画の被虐のヒロインを真似て、下半身裸の小さな',
        urara.uma_sex_title,
        'は四つん這いでゆっくり身をかがめる。',
      ]);
      await urara.print_and_wait([
        '冷たい空気に晒された後穴は秘裂と同じく緊張して収縮し、震えながらアナルプラグの金属の先端に合わせる。',
      ]);
      era.println();
      if (era.get('exp:52:肛交次数') >= 10) {
        await urara.print_and_wait([
          '先端の冷たい感触が沈むと、',
          urara.teen_sex_title,
          'は体を抑え、この少し過大な長いプラグを辛抱強く飲み込もうとする。',
        ]);
        await urara.print_and_wait([
          'だが',
          urara.sex,
          'は自分の経験と性の耐性を過信し、この小さな',
          urara.sex_slave_title,
          'の体がどれほど淫らなのかを見誤った。',
        ]);
        await urara.print_and_wait(
          '両脚が力を失うと、菊穴は下向きの重力のなか、準備もなく巨大な金属を丸ごと飲み込む……',
        );
      } else {
        await urara.print_and_wait([
          '先端の冷たい感触が、',
          urara.teen_sex_title,
          'の緩みかけた菊穴を引き締め、',
          urara.sex,
          'に一筋の理性的な退きを戻す。',
        ]);
        await urara.print_and_wait(
          'だが鍛えられた両脚は敏感すぎて、体の催情の信号に触れた瞬間に力を失う。',
        );
        await urara.print_and_wait([
          urara.teen_sex_title,
          'は滑るように膝をついて床に落ち、巨大なアナルプラグが一瞬で後部に丸ごと飲み込まれる……',
        ]);
      }
      era.println();
      await urara.print_and_wait([
        '悲鳴を出す余裕もなく、小さな',
        urara.uma_sex_title,
        'は突然の刺激で下半身を固くして前へ倒れる。',
      ]);
      await urara.print_and_wait([
        '底の吸盤が「プクッ」と床の吸い付きから外れ、',
        urara.get_colored_name(),
        ' の小さな体は冷たい床に重く伏す。',
      ]);
      await urara.print_and_wait([
        '生まれつき淫らな体は異常な性器の突入で連なって頂点へ押し上げられ、脳が瞬時に落ちた小さな',
        urara.uma_sex_title,
        'の喉は声にならない音を押し出す。',
      ]);
      await urara.print_and_wait(
        '孕む準備のような姿勢で無力に床に伏し、荒い息の淫らなピンクは小さな懇願にも、蕩けた悲鳴にも聞こえる。',
      );
      await urara.print_and_wait(
        '体を支える力すら消え、腕は体の揺れに合わせて無力に床を引きずる。',
      );
      await urara.print_and_wait(
        '幼い顔は凌辱を受けているみたいに、自分の体に床へ押しつけられて擦られる。',
      );
      await urara.print_and_wait(
        '尻としっぽも発情期に肉棒へ頭を下げる雌みたいに、快感のなかで無意識に高く上がる。',
      );
      await urara.print_and_wait(
        '生まれつき淫らな後穴は甘い飴を吸うみたいに、巨大な球体を貪欲に奥へ締め続ける。',
      );
      await urara.print_and_wait([
        '小さな',
        urara.sex_code - 1 ? '牝馬' : '牡馬',
        'の育ちすぎた蜜尻は法外な大きさではないが、厚く柔らかい尻肉は締めつけて台座を変形させ、跡も残さず包み込む。',
      ]);
      await urara.print_and_wait(
        '恐怖と快感の混ざった涙、涎と汗は、両脚のあいだで抑えきれない愛液とともに、下の滑らかな床タイルを濡らす。',
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait(
          '二つの白い膨らみが体とともに荒く震え、発情した乳首は壊れた蛇口みたいに白い汁を勝手に押し出す。',
        );
        await urara.print_and_wait(
          '強い絶頂が続き、白い媚肉は主人が慌てるほど母乳を搾り出し、誰かが牛乳を半分箱、悪戯に床へこぼしたみたいだ。',
        );
        await urara.print_and_wait(
          '先に服をめくり胸帯を解いていなければ、噴き続ける淫らな胸は内側から布を、人に見せられないほど濡らしていただろう。',
        );
        era.println();
      }
      await urara.print_and_wait(
        'さまざまな液体が激しく途切れず壁際のタイルと床へ飛び、ゲームセンターの誰もいない隅を一枚に染める。',
      );
      await urara.print_and_wait([
        '水音が何度か止まったあと、少し力と理性を取り戻した小さな',
        urara.uma_sex_title,
        'はやっと何かを思い出し、淫らな体を引きずるようにみっともなく這い始める……',
      ]);
      await urara.print_and_wait([
        '並んだ筐体を支えに歩き、',
        urara.get_colored_name(),
        ' はやっと、下腹に硬いものが触れる体にどうにか慣れる。',
      ]);
      await urara.print_and_wait([
        '半ば隠した淫らな格好のまま、小さな',
        urara.uma_sex_title,
        'はそれでも ',
        callname,
        ' より先に、半ば這って待ち合わせの場所へ戻る。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '遅れて来た ',
        you.get_colored_name(),
        ' は、顔を赤くして荒い息の ',
        urara.get_colored_name(),
        ' を見て、驚いて眉を上げる。',
      ]);

      era.printButton('「왜 그래? 몸이 안 좋아? 힘들면 조금 더 쉬자……」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' はもちろんある程度察しているが、',
        urara.get_colored_name(),
        ' のためなら、いまは知らないふりしかない。',
      ]);
      await era.printAndWait([
        '何も知らないふりをした ',
        you.get_colored_name(),
        ' の気遣いを前に、もう考える力のない ',
        urara.get_colored_name(),
        ' は本能で震える両脚を押さえるだけだ。',
      ]);
      await era.printAndWait([
        'だが無理な笑顔の',
        urara.sex,
        'は、今回は意外なほどきっぱり「大丈夫！」と言い、自分で歩いて帰ると言い張る。',
      ]);
      await era.printAndWait([
        '押し問答のあと、敏感な体に自信のない小さな',
        urara.uma_sex_title,
        'はそれでもどうにか ',
        you.get_colored_name(),
        ' の支えを受け入れる。',
      ]);
      await era.printAndWait([
        'もともと知らないふりをしている ',
        you.get_colored_name(),
        ' も、緊張して担当に密着して支えながら、',
        urara.sex,
        'が残したほかの異常はできるだけ見ないことにする。',
      ]);
      await era.printAndWait([
        'たとえば ',
        urara.get_colored_name(),
        ' が立ち上がった回転椅子に、円い吸盤型の押し跡の水染みが残っている。',
      ]);
      await era.printAndWait([
        'たとえば帰り道、小さな',
        urara.uma_sex_title,
        'は不自然な痙攣で何度も足を緩める。',
      ]);
      await era.printAndWait(
        'たとえばチャックを閉め忘れたランドセルの中、圧痕のついたピンクの箱が揺れに合わせて見え隠れする……',
      );

      await era.printAndWait([
        '',
        you.get_colored_name(),
        ' がふらふらの ',
        urara.get_colored_name(),
        ' を寮まで連れて戻るまで、まだ震えている',
        urara.sex,
        'は ',
        you.get_colored_name(),
        ' にまともな一文も言えない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も事が特殊すぎて、発情した担当のそばで生理反応は起きなかった。外で余計なことをしなくてよかった、と ',
        you.get_colored_name(),
        ' は安堵もする。',
      ]);
      await era.printAndWait([
        'だが下を見ると、担当の足元で銀糸を引き続けている ',
        you.get_colored_name(),
        ' は、結局我慢できなくなる……',
      ]);
      await era.printAndWait([
        '逃げ出す ',
        you.get_colored_name(),
        ' の背中を見て、まだ淫らな水を垂らす ',
        urara.get_colored_name(),
        ' の顔に、一瞬……物足りなさが過る？',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '淫らな小さな',
        urara.uma_sex_title,
        'は、いつかまた隅の魔性の機械へ手を伸ばすかもしれませんわ……',
      ]);
      await inner_urara.say_as_unknown_and_wait('うっ……わ、もうだめです……');
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
        '抽選を仕切るスタッフが振り返って机の下を探したあと、箱入りの丸頭の電動マッサージ器を出す。',
      );
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' は箱を受け取ってしばらく眺め、ふと思い出したみたいに顔を上げる。',
      ]);
      await urara.say_and_wait([
        'あ、これ知ってる！',
        call_61,
        ' も持ってるよ！みんなで貸し借りして——',
      ]);
      await era.printAndWait(
        'マッサージ器を貸し借りするなんて、仲がいいなあ。でもなんで自分で買わない？',
      );
      await era.printAndWait([
        'たとえ ',
        you.get_colored_name(),
        ' の疑問が口に出なくても、',
        urara.get_colored_name(),
        ' はすぐ次の一句で答えを出す。',
      ]);
      await urara.say_and_wait([
        'うん！みんな夜、これで脚の間を押すんだよ！そのときみんな、ああいう、ああいう……',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'が何かを思い出して詰まり、羞恥の赤が頬から ',
        urara.get_colored_name(),
        ' の頭頂までそっと上る。',
      ]);
      await urara.say_and_wait([
        'みんなあまり服を着てなくて、すごく、すごく大人みたいな声も出して、そういう……',
      ]);

      era.printButton('「……？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' がもごもご言い終えたあと、',
        you.get_colored_name(),
        ' もスタッフも、周囲の人まで動きを止める。',
      ]);
      await era.printAndWait([
        '自分が何か間違えたのか疑い、',
        urara.get_colored_name(),
        ' も一瞬きょとんとしてから、急に怖いくらい静かになった人ごみをきょろきょろ見回す。',
      ]);
      await urara.say_and_wait([
        'え？違うの？でも ',
        call_61,
        ' は本当にああやって使うし、',
        call_1,
        ' と ',
        call_14,
        ' も……',
      ]);
      await urara.say_and_wait([
        'で、でも使い終わるとみんな気持ちよさそうな顔するよ！汗もいっぱい！そ、その……',
      ]);
      await era.printAndWait([
        '周囲のひそひそが増えていくなか、',
        urara.get_colored_name(),
        ' はまだ無邪気で恥じらいのある顔のまま何かを言っている。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await era.printAndWait('だめだ、このままじゃ範囲社会的死亡が起きる！');
      await era.printAndWait([
        'まずいと察した ',
        you.get_colored_name(),
        ' は、すぐ気づいたスタッフと目を合わせる。',
      ]);
      await era.printAndWait([
        'スタッフが気をそらすための掛け声のなか、',
        you.get_colored_name(),
        ' はまだ何か言いたそうな担当の手を引いて現場から逃げる。',
      ]);
      await era.printAndWait([
        '一路駆けてトレセンに戻り、',
        urara.get_colored_name(),
        ' を寮の玄関に置いたあと、',
        you.get_colored_name(),
        ' はようやく息を吐く。',
      ]);
      await era.printAndWait([
        'だが帰る前、',
        urara.get_colored_name(),
        ' はもごもごしながらも異常なほど強く、',
        you.get_colored_name(),
        ' にそのマッサージ器をせがむ。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'に服を掴まれ、逃げられも折れられもしない ',
        you.get_colored_name(),
        ' は、仕方なくマッサージ器を ',
        urara.get_colored_name(),
        ' に渡す。',
      ]);
      await era.printAndWait([
        '担当が手を離した瞬間 ',
        you.get_colored_name(),
        ' は後悔するが、今から寮へ飛び込んだ',
        urara.sex,
        'を追うのはもう無理だ。',
      ]);
      await era.printAndWait(
        '好奇心盛りの年頃で何でも試したくなるのは仕方ないが、さすがにこれは……',
      );
      await era.printAndWait([
        'あとで、機会を見て ',
        halo.get_colored_name(),
        ' に何か言っておこう。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……でも、心配はいらないはず。若いころの過ち、ということにしておきましょうか？',
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
        'また美味しいものを夢見たのか、寝つきの悪い小さな',
        urara.uma_sex_title,
        'はキスみたいに ',
        you.get_colored_name(),
        ' の首の内側を吸ったり噛んだりしてやまない。',
      ]);
      await era.printAndWait([
        '傍から見れば幼い子に求められる禁断の光景かもしれないが、',
        you.get_colored_name(),
        ' は知っている。',
        urara.get_colored_name(),
        ' はきっと大根に関することを夢に見ているのだ。',
      ]);
      await era.printAndWait([
        'とはいえ、',
        you.get_colored_name(),
        ' の意志力も確かに大きな試練を受けている。',
      ]);
      await era.printAndWait([
        '尻尾をゆっくり ',
        you.get_colored_name(),
        ' の太ももに絡め、',
        urara.teen_sex_title,
        'の健康で肉感的な体は相変わらず ',
        you.get_colored_name(),
        ' の敏感なところを往復して擦る。',
      ]);
      await era.printAndWait([
        'キス痕みたいな跡が',
        urara.teen_sex_title,
        'の粘っこい吸い音とともに増え続けるが、その魅惑的な桜色のかたまりは止まる気配がない。',
      ]);
      await era.printAndWait([
        '出会ったときの同衾が、まだ精神のおかしかった ',
        you.get_colored_name(),
        ' の落ち度で、',
        urara.get_colored_name(),
        ' はただの無垢な小さな',
        urara.uma_sex_title,
        'だったとしても……',
      ]);
      await era.printAndWait(
        '今度は無垢なサキュバスみたいな担当が、夢の中で好意のあるトレーナーを無意識に誘惑しているのだ。',
      );
      await era.printAndWait([
        '少なくとも今の ',
        you.get_colored_name(),
        ' は、ゆっくり上げた自分の手にそんな言い訳を探している。',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        '자, 잠깐만요. 지금이라면 아직 그만둘 수 있어요——',
      );
      era.printButton('「このエッチな子馬に仕返し……」', 1);
      era.printButton('「그만두자, 참아야 해!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '眠ったまま身を翻す ',
          urara.get_colored_name(),
          ' に乗じて、',
          you.get_colored_name(),
          ' は暗い映画館で担当の服の下へ手を入れる。',
        ]);
        await era.printAndWait(
          'この映画はそもそもほとんど客がいないし、無人の最後列はもともと最高の隠れ蓑だ。',
        );
        await era.printAndWait([
          '片手は試しに服の上から、',
          urara.teen_sex_title,
          'のまだ青い峰をいじり、もう片手は',
          urara.teen_sex_title,
          'のスカートの下へ入り、',
          urara.uma_sex_title,
          'の敏感な太もも内側を撫でる。',
        ]);
        await era.printAndWait([
          '少し急になった吐息で ',
          you.get_colored_name(),
          ' の指は一瞬止まるが、何かに気づいても小さな',
          urara.uma_sex_title,
          'はまだ目を覚まさない。',
        ]);
        await era.printAndWait([
          '指先はさらに深く、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' のスパッツをめくり、最後の一枚の布越しに',
          urara.teen_sex_title,
          'の秘密を撫でる。',
        ]);
        await era.printAndWait([
          'スクリーンの騒音が',
          urara.teen_sex_title,
          'の夢の中の嬌声を覆い、',
          you.get_colored_name(),
          ' はその天然の隠れ蓑のなかで、ほどよく',
          urara.sex,
          'の柔らかく敏感な三点をいじり続ける。',
        ]);
        await era.printAndWait([
          '同時に、欲張りな担当が ',
          you.get_colored_name(),
          ' に残した痕を思い、仕返し心が膨らんだ ',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の首の柔らかい肌を狙って強くキスする。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の体が突然震えると、',
          you.get_colored_name(),
          ' のスパッツに入れた手に少し湿った感触が来る。まさか',
          urara.sex,
          'は……？',
        ]);
        await era.printAndWait([
          '度肝を抜かれた ',
          you.get_colored_name(),
          ' は急に手を引っ込め、',
          urara.get_colored_name(),
          ' も体の催促でようやく朦朧と目を開ける。',
        ]);
        await urara.say_and_wait([callname, '～映画……ううんんんん——？！']);
        await era.printAndWait([
          '寝起きのぼんやりのなか、',
          urara.get_colored_name(),
          ' の幼い体は ',
          you.get_colored_name(),
          ' が積み上げた刺激で震えて決壊する——',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の股間から伝わるしとしととした水音のなか、',
          you.get_colored_name(),
          ' はようやく思い出す。映画が退屈すぎて、',
          urara.sex,
          'は眠る前に大きなドリンクを一気に飲んでいた……',
        ]);
        await era.printAndWait([
          '詫びながら、',
          you.get_colored_name(),
          ' は「うっかり」失禁して泣きじゃくる ',
          urara.get_colored_name(),
          ' を慰めつつ、',
          urara.sex,
          'をトイレへ連れていく。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'を早めに連れて帰る道中、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' の秘部に触れた手が、まだ湿って粘っこい気がしてならない……',
        ]);
      } else {
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' が ',
          urara.get_colored_name(),
          ' を起こそうとしたとき、小さな',
          urara.uma_sex_title,
          'はまた身を翻して、ちょうど ',
          you.get_colored_name(),
          ' の前に止まった指を噛む。',
        ]);
        await era.printAndWait([
          '温かく柔らかい舌が ',
          you.get_colored_name(),
          ' の指先を絡め、',
          you.get_colored_name(),
          ' の指を少しずつ口の中へ巻き込む。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'は小さな口を一生懸命開け、指は舌先の愛撫に従って ',
          you.get_colored_name(),
          ' の制御を離れ、自ら温かく柔らかい奥へ入っていく。',
        ]);
        await era.printAndWait([
          '幻惑的な吸い音を立て続ける小さな担当を見て、',
          you.get_colored_name(),
          ' は少し息が詰まるのに、視線を外せない。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' は無垢で、とても淫らな子だ」。',
        ]);
        await era.printAndWait([
          urara.sex,
          'に初めて会ったときから ',
          you.get_colored_name(),
          ' はそんな下品な予感を抱いていたが、',
          urara.get_colored_name(),
          ' が本当に本性を出したとき、',
          you.get_colored_name(),
          ' は慌てた。',
        ]);
        await era.printAndWait([
          '味わいの最後、液体の滴りと指の解放とともに、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' の指の関節に小さな歯型をそっと残す。',
        ]);
        await era.printAndWait([
          '余韻を味わうみたいに舌打ちし、',
          urara.get_colored_name(),
          ' はまだ夢の中の笑顔のまま姿勢を変え、また ',
          you.get_colored_name(),
          ' の襟を噛み始める。',
        ]);
        await era.printAndWait([
          '衝撃を受けた ',
          you.get_colored_name(),
          ' はぼんやり座席に座り、',
          urara.get_colored_name(),
          ' が',
          urara.sex,
          'の匂いを夢の中で塗り続けるのに任せる。',
        ]);
        await era.printAndWait([
          '映画が終わりかけたころ、',
          you.get_colored_name(),
          ' は懐からの小さな呼びかけでようやく我に返る。',
        ]);
        await urara.say_and_wait([callname, '……トイレ行きたい……']);
        await era.printAndWait([
          '我に返ると、',
          you.get_colored_name(),
          ' も ',
          urara.get_colored_name(),
          ' が眠る前に大きなドリンクを飲んでいたことを思い出す。',
        ]);
        await era.printAndWait([
          '逃げるみたいに、まだ目を擦っている ',
          urara.get_colored_name(),
          ' を連れて、慌ただしくトイレへ逃げる……',
        ]);
      }
      await era.printAndWait([
        '当然、',
        urara.get_colored_name(),
        ' が残した噛み跡を隠し忘れて見つかった ',
        you.get_colored_name(),
        ' は、駿川さんに厳しく話をされた。',
      ]);
      await era.printAndWait(
        'もちろん、観賞中の経緯に比べればそれほど大事でもない。',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'やはり一部の作品は、人間にはまだ早すぎます。',
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
    const title = '隠しメニュー、おいしいね！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '一日のお出かけ食事が終わり、会計しようとした ',
        you.get_colored_name(),
        ' は、店員の特殊な条件をぼんやり聞いている。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店員A',
        'はい！では本店の隠しカップルメニューを味わったあと、お二人にしていただくことは？',
      );
      era.printButton('「キ、キス……？」', 1);
      await era.input();
      await era.printAndWait([
        '怪しい笑顔の店員が出した怪しい条件を復唱し、顔を上げて無邪気な担当を一目見て、',
        you.get_colored_name(),
        ' は考え込む。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に友だちの紹介だけで、ほかの目的もなくこの店に来たのか？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に「うっかり」この店で「隠しメニュー」を聞いたのか？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に店の外の妙な内装に気づかず、人を店内に引っ張ってきたのか？',
      ]);
      await you.say_and_wait(
        'でも、なんでウララを疑ってるんだ？ もしかして全部、俺のせい？',
        true,
      );
      await era.printAndWait([
        '見えなかった ',
        urara.get_colored_name(),
        ' の無邪気な顔に、悪戯が成功したときの悪い笑みがわずかに混じる。',
        you.get_colored_name(),
        ' は頭が回らず、自分を疑い続ける。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([callname, '、ぼーっとしてるの？ キスしよ！']);
        await urara.say_and_wait(
          `ほらほら！ えへへ～外で ${callname} とちゅーするよ！`,
        );
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' の動揺を見ても、',
          urara.get_colored_name(),
          ' は楽しそうにまわりと一緒に囃し立てる。',
        ]);
        await era.printAndWait([
          '真剣な顔で寄ってくる担当に、',
          you.get_colored_name(),
          ' は幽霊でも見たみたいに必死で首を振る。',
        ]);
        await you.say_and_wait(
          'ほかの選択肢があるはずだウララ、こんなことしたらみんなショックを受けるし、祝福なんてされない……',
        );
      } else {
        await urara.say_and_wait([
          callname,
          ' はキスしたくない？ わかってるけど……',
        ]);
        await urara.say_and_wait(
          `でも ${callname}！ 大人でも、全部選べるわけじゃないよ？`,
        );
        await era.printAndWait([
          'だんだん慌てていく ',
          you.get_colored_name(),
          ' を見て、',
          urara.get_colored_name(),
          ' は少し呆れつつも、なぜか嬉しそうな顔をする。',
        ]);
        await era.printAndWait([
          '表面は冷たいが態度は譲らない担当を前に、',
          you.get_colored_name(),
          ' は普段の対処をきれいさっぱり忘れる。',
        ]);
        await you.say_and_wait(
          'だめだよウララ、みんなの前でこんなことしたら捕まるし、商店街のみんなにも怒られるし、ウララの友だちも……',
        );
      }
      era.println();
      await urara.say_and_wait(
        `${callname}！ よそ見しないで、そしたらキスできないよ！`,
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の言葉が終わるやいなや、拒もうとした ',
        you.get_colored_name(),
        ' は、乗っている担当に',
        urara.uma_sex_title,
        'の力で顔を挟まれる。',
      ]);
      await era.printAndWait('これで、社会的には本当に終わりだ……');
      await era.printAndWait([
        '暴走した担当に掴まれて動けない ',
        you.get_colored_name(),
        ' は、みんなの視線の中、目的のはっきりした ',
        urara.get_colored_name(),
        ' のかわいい小さな顔を絶望的に見つめる……',
      ]);
      await era.printAndWait([
        'このあと、逃げられない ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の「息が止まるような愛欲」をたっぷり味わうことになる。',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') >= 10) {
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は無邪気さに七分の色気を混ぜ、緊張もなく ',
          you.get_colored_name(),
          ' に近づき、悪戯っぽく ',
          you.get_colored_name(),
          ' の唇を噛む。',
        ]);
        await era.printAndWait([
          'そのあと長いあいだ、小さな',
          urara.uma_sex_title,
          'に求められ続け、',
          you.get_colored_name(),
          ' は意識が飛びそうになる。',
        ]);
        await era.printAndWait([
          '最初は ',
          you.get_colored_name(),
          ' にもまわりのざわめきが聞こえていたが、すぐ ',
          urara.get_colored_name(),
          ' が注ぎ込む愛情のなかでぼやけていく。',
        ]);
        await era.printAndWait([
          'まわりの声がだいたい静かになったころ、',
          urara.get_colored_name(),
          ' は名残惜しそうに、倒れそうな ',
          you.get_colored_name(),
          ' をようやく離す。',
        ]);
        await era.printAndWait([
          'だがそのあと、',
          urara.get_colored_name(),
          ' は無邪気で何も知らない顔のまま、舌先で ',
          you.get_colored_name(),
          ' の唇をそっと拭う。',
        ]);
      } else {
        await era.printAndWait([
          '恥ずかしさからか、経験不足の緊張からか、焦った小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' の正面に真正面からぶつかる。',
        ]);
        await urara.say_and_wait('うわっ、いたい！ 唇と歯、ぶつけちゃった……');
        await era.printAndWait([
          'だが最初の失敗でも ',
          urara.get_colored_name(),
          ' は止まらず、焦って ',
          you.get_colored_name(),
          ' の襟を掴み、',
          urara.get_colored_name(),
          ' は乱暴に ',
          you.get_colored_name(),
          ' の息を味わい続ける。',
        ]);
        await era.printAndWait([
          'まわりのささやきをできるだけ無視しながら、小さな',
          urara.uma_sex_title,
          'に首を引っ張られる ',
          you.get_colored_name(),
          ' は、いつ倒れてもおかしくない……',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' が力尽きて倒れそうになったとき、',
          urara.get_colored_name(),
          ' はやっと少し名残惜しそうに、自分の ',
          callname,
          ' を離す。',
        ]);
      }
      era.println();
      await you.say_and_wait(
        '失礼な考えだけど、ウララ、欲求不満なんじゃ……？',
        true,
      );
      await era.printAndWait([
        '椅子にへたり込み、',
        you.get_colored_name(),
        ' は顔を覆う店員と顔を上げられないほかの客を余目で見て、力なく息を吐く。',
      ]);
      await era.printAndWait([
        '小さな担当は今も色っぽい目で ',
        you.get_colored_name(),
        ' を見て、続けるかどうかを ',
        you.get_colored_name(),
        ' に聞いているみたいだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は無邪気な ',
        urara.get_colored_name(),
        ' の目覚めに自分の責任があるのは認める。だが一気にこんな色欲に溺れたピンクの小さな',
        urara.sex_code - 1 ? '牝馬' : '牡馬',
        'になるのは、やりすぎではないか？',
      ]);
      await era.printAndWait([
        '深く反省しているあいだにも、',
        you.get_colored_name(),
        ' はまた赤らんだ顔で寄ってくる ',
        urara.get_colored_name(),
        ' を見る。',
      ]);
      await urara.say_and_wait(
        `カップルの証明なら、${callname} もこれじゃ足りないって思うでしょ？ 大丈夫、ウララもそう思うよ！`,
      );
      await urara.say_and_wait(['だから ', callname, '……もう一回しよ？']);
      await you.say_and_wait(
        `やめてくれウララ、${callname} は本当にもう無理だ！ せめて、せめて社会的に死んだあと、命の逃げ道は残してくれ！`,
        true,
      );
      await era.printAndWait([
        'そっと唇を舐める桜色を見つめたまま、',
        you.get_colored_name(),
        ' は耐えきれず目を閉じる……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ん、まあ、ああ……楽しむことを覚えるのも、悪くないでしょう？',
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
          '小さな',
          urara.uma_sex_title,
          'は更衣室の隅で、掛けられていない一着を見る。',
        ]);
        await urara.say_and_wait(
          [
            'ウララも、なんでその服を先に出さなかったか分かるよ。でもその服なら、',
            callname,
            ' は……',
          ],
          true,
        );
        await urara.print_and_wait([
          '耳を精一杯立て、だんだん理性が薄れる初恋の',
          urara.teen_sex_title,
          'は、思い切った試しをすることにする。',
        ]);
      } else {
        await urara.say_and_wait(
          ['なんでウララ、嬉しいんだろう？ ', callname, ' が嬉しそうだから？'],
          true,
        );
        await urara.say_and_wait(
          [
            'でも ',
            callname,
            ' がウララをもっと好きなら、ウララのために良くなってくれる？',
          ],
          true,
        );
        await urara.say_and_wait(
          ['じゃあ ', callname, ' をウララに夢中にさせたら、もしかして……？'],
          true,
        );
        await urara.print_and_wait([
          '箱を開けてその服を取り出し、初恋の',
          urara.teen_sex_title,
          'は少し迷ったあと、不器用な理由で自分を説得する。',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait('この服も着替えたよ！');
      await era.printAndWait([
        '半分は羞じらい、半分は元気な ',
        urara.get_colored_name(),
        ' の宣言とともに、更衣室の長すぎるカーテンが開く。',
      ]);
      await era.printAndWait(
        'すると、やっと賑やかになっていた空気が一瞬で固まる。',
      );
      await era.printAndWait([
        '赤らんだ顔の ',
        urara.get_colored_name(),
        ' 以外、その場の全員が何か衝撃的なものを見たみたいに動きを止める。',
      ]);

      era.printButton('「……？！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' は今の ',
        urara.get_colored_name(),
        ' をどう言い表せばいいか分からない。形容どころか、今の ',
        you.get_colored_name(),
        ' は担当を直視し続ける気力すら失いかけている。',
      ]);
      await era.printAndWait([
        'だがそれは確かに、トレーナーとして見たことのない ',
        urara.get_colored_name(),
        ' だ——',
      ]);
      await era.printAndWait([
        '締められた胸衣の膨らみの下でひとつになったのは、包まれた細い腰と、',
        urara.teen_sex_title,
        'の肉の曲線に食い込む高い股のライン。',
      ]);
      await era.printAndWait([
        '後腰と尾の根元から伸びるレースの裾が色っぽく揺れ、わざと空けた臍と下腹は、もはや情趣以外の意味がなさそうだ。',
      ]);
      await era.printAndWait([
        '横へ寄せた桜色のポニーテールの横にはハートの金属耳飾りと漆黒のイヤーカバー。皮の手袋とブーツが、愛欲の光を反射している。',
      ]);
      await era.printAndWait([
        '真っ黒な装いに包まれた、本来は「幼い」はずの ',
        urara.get_colored_name(),
        ' が、今は艷やかで蠱惑的だ。',
      ]);
      await era.printAndWait(
        'いったいどこのアイドルだ？ このサキュバスみたいな装いは、どこのステージ衣装なんだ？',
      );
      await era.printAndWait([
        '桜瞳の光が落ちた ',
        urara.get_colored_name(),
        ' に、この過激なステージ衣装が、なぜこんなに似合う？',
      ]);
      await era.printAndWait([
        '目を細めた ',
        urara.get_colored_name(),
        ' が、獲物を定めたみたいに',
        urara.sex,
        'の ',
        callname,
        ' へ送る、興奮した笑顔は何だ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の視線で背筋がざわついた ',
        you.get_colored_name(),
        ' は唾を飲み、いつの間にか、',
        you.get_colored_name(),
        ' も理性が蒸発していく罠へ落ちていく……',
      ]);
      await era.printAndWait([
        'だが大人が黙り込むより先に、小さな',
        urara.uma_sex_title,
        'のほうが真っ赤になっていく顔を押さえる。',
      ]);
      await urara.say_and_wait(
        'ご、ごめんね、ウララ、やりすぎちゃった、たぶん……',
      );
      await era.printAndWait([
        '小さなサキュバスは数秒だけ続き、すぐ隣の更衣室カーテンの陰へ逃げ込む。恥ずかしさで涙目になった ',
        urara.get_colored_name(),
        ' に戻る。',
      ]);
      era.println();

      await you.say_and_wait(
        '目白城と提携して、特殊用途の服を副業で作ってる？',
      );
      await era.printAndWait([
        'みんなが現状を整えたあと、衝撃を受けた ',
        you.get_colored_name(),
        ' は、謝り続ける店員の言葉を信じられないまま復唱し、何を言えばいいか分からない。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店員A',
        '本当に申し訳ありません。あの服は処分する予定だったのですが、試着室に置き忘れてしまって……',
      );
      await you.say_and_wait('その理由は、まあ分からなくもない……');
      await you.say_and_wait(
        '待て、ほかの服はいいとして、なんでこの服までウララにぴったりなんだ？ 特注した元の主は……？',
        true,
      );
      await you.say_and_wait('……やっぱり、考えないでおこう。', true);
      await era.printAndWait([
        '運動用品の袋をたくさん提げて帰る道で、',
        you.get_colored_name(),
        ' はこの怪しい疑問を考えるのをやめる。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が沈思している隙に、そばを歩く ',
        urara.get_colored_name(),
        ' が聞いてくる。',
      ]);
      await urara.say_and_wait([
        'ウララがこれから先も ',
        callname,
        ' に着てみせたら、',
        callname,
        '、ドキドキする？',
      ]);
      inner_urara.say_as_unknown([
        urara.get_colored_name(),
        ' の問いに、トレーナー',
        you.adult_sex_title,
        '（あなた）は答える。',
      ]);
      era.printButton('「무슨 소리야, 그건 너무 과하잖아……」(호감+10)', 1);
      era.printButton('「ほかを気にしなければ……すると思う」（恋慕+5）', 2);
      const ret = await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の答えを聞き、',
        urara.get_colored_name(),
        ' はいつもの分かりにくい笑顔とは違う笑みだけを見せる。',
      ]);
      await era.printAndWait([urara.sex, 'は、いったい何を考えているんだ……']);
      era.drawLine();
      await urara.say_and_wait([
        'あんまり乗り気じゃなさそうだったけど、',
        callname,
        '、ドキドキするって否定しなかったよ！ 今回はすぐダメになっちゃったけど。',
      ]);
      await urara.say_and_wait([
        'えへへ～これも、これから先も ',
        callname,
        ' をドキドキさせるためだよ！ もちろん、見てるのはウララだよ……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'それでいいのですか？ そんな衝動を信じるなんて……人間は、とても当てになりませんよ？',
      );
      await urara.say_and_wait([
        '大丈夫！ だってウララ、',
        callname,
        ' を信じてるから！',
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
      inner_urara.name = '「ハルウララ」';
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
        '「……この券、ウララの体をプレゼントに換えられる？」（全能力+5）',
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
          'うん！ いいよ？ だって ',
          callname,
          ' が言わなくても、ウララ、そうするつもりだったし……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の欲の混ざった試しに、迷いなく答え、小さな手が羞じらいながら ',
          you.get_colored_name(),
          ' の敏感なところへ登る。',
        ]);
        await urara.say_and_wait([
          '……それに ',
          callname,
          ' のここ、もう感じちゃってるよね？',
        ]);
        await era.printAndWait([
          '布の上から指で ',
          you.get_colored_name(),
          ' の敏感なところを撫で、小さな',
          urara.uma_sex_title,
          'の幼い頬はだんだん緋色に染まる。',
        ]);
        await era.printAndWait([
          '待ちきれない水音は、とうに',
          urara.teen_sex_title,
          'のきつく包んだ下着を浸し、発情の潮を抑えきれず ',
          you.get_colored_name(),
          ' の脚へ塗りつける。',
        ]);
        if (era.get('exp:52:性爱次数') >= 10) {
          await urara.say_and_wait(
            'えへへ～実は乗ったときから、ウララ、もうぐしょぐしょだったよ……',
          );
          await urara.say_and_wait([
            'もう、がまんできない……ウララが悪い子になったの、どう考えても ',
            callname,
            ' のせい……ちゅっ～',
          ]);
          await era.printAndWait([
            '自然に恋人を抱き、',
            you.get_colored_name(),
            ' に日々調教された小さな体は、今は主人の欲を受け入れる前戯を手慣れて用意する。',
          ]);
          await era.printAndWait([
            '濡れた深いキスの中で ',
            you.get_colored_name(),
            ' と粘る体液を絡め合い、乗ってきた小さな',
            urara.sex_slave_title,
            'は手慣れて自分の服を脱ぐ。',
          ]);
        } else {
          await urara.say_and_wait([
            'はぁ……ごめんね、',
            callname,
            ' の服、汚しちゃった……でもウララ、もう、がまんできない……',
          ]);
          await urara.say_and_wait([
            'ウララ、',
            callname,
            ' の願い、叶えるから。だからウララ、頑張る……はぁん～',
          ]);
          await era.printAndWait([
            '本能に押されて恋人と抱き合い、愛人の命令で、小さな',
            urara.sex_slave_title,
            'は不慣れでも真剣に、主人への奉仕の前戯を始める。',
          ]);
          await era.printAndWait([
            'ぼんやり意識が飛ぶ隙間に口の中を侵され、',
            you.get_colored_name(),
            ' に体を好きにされる小さな',
            urara.uma_sex_title,
            'は、すぐ服を剥がされる。',
          ]);
        }
        await urara.say_and_wait([
          '……',
          callname,
          '、今日は、好きなだけ味わって……クリスマスプレゼントのウララを～？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' に下へ押し倒される最後、愛情でとろんとした ',
          urara.get_colored_name(),
          ' は小さく ',
          you.get_colored_name(),
          ' の耳たぶを舐め、二人だけの淫らな晩餐の始まりを告げる……',
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
                '下次还能在一起的话，也能和 ',
                callname,
                ' 做上舒服的事就好了——',
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
        '優しい',
        urara.sex,
        'が「監禁」を選んだ理由。背徳の体で ',
        you.get_colored_name(),
        ' と溶け合った、数えきれない濁った夜の理由。',
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
