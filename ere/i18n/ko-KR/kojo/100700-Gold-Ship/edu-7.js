/**
 * @file ゴールドシップ - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait([
        '오늘은 ',
        gs.get_colored_name(),
        '과의 훈련이 어떻게든 끝났다.',
      ]);
      era.println();

      await gs.say_and_wait('수고했어——! 바이바이, 바이바이!');
      era.println();

      await era.printAndWait([
        gs.get_colored_name(),
        '은 기지개를 켜고 가볍게 뛰어갔다. 그러더니 다시 돌아왔다.',
      ]);
      era.println();

      await gs.say_and_wait('좋아, 추가 트레이닝이다! 지금 나, 완전 신나거든!');
      await gs.say_and_wait([
        callname,
        ', 추가 트레이닝이 뭔지도 모르냐? 진구처럼 소식이 어둡네~',
      ]);
      await gs.say_and_wait(
        '추가 트레이닝은 추가 트레이닝의 줄임말이다—— 온 우주 천만 골쉽 팬들 사이에서 대유행 중이지!',
      );
      await gs.say_and_wait('내 트레이너라면 이런 것도 좀 더 깊이 연구해야지.');

      era.printButton('「그럼 우리도 유행에 뒤처질 수 없지.」', 1);
      era.printButton('「아니, 지금 유행은 CD (Cool Down)야!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait([
          '좋아! 기운 넘치네! ',
          you.actual_name,
          ' 대원, 나를 따라와라——!',
        ]);
        era.println();
        await era.printAndWait('두 사람은 노을 아래에서도 계속 달렸다.');
      } else {
        await gs.say_and_wait(
          'CD……? 그게 뭔데, 유행이냐? 트레이너들 사이에서 유행하는 거야……?',
        );
        await gs.say_and_wait('CD가 쿨 다운이란 뜻이구나…… 헤헷! 간단하잖아!');
        await gs.say_and_wait(
          '빙수 먹으면서 CD 하면 되지! 줄여서 『Cool Down CD』!',
        );
        era.println();
        await era.printAndWait('그렇게 두 사람은 푹 쉬었다.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리!';
    /** @param {CharaTalk} gs ゴールドシップ */
    const f = async (gs) => {
      await gs.say_and_wait(
        '어떠냐! 트레이너, 내 뜨거운 질주가 머릿속에 새겨졌냐!?',
      );
      era.printButton('「최고였어!」', 1);
      era.printButton('「더 높은 곳을 노리자!」', 2);
      if ((await era.input()) === 1) {
        await gs.say_and_wait('그치? 말 안 해도 알아.');
      } else {
        await gs.say_and_wait('좋아——! 지구 핵의 중심이 되어 주마!!');
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '갈팡질팡';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}을(를) 불안하게 했던 것과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await era.printAndWait(
        '앞으로의 레이스도 기대된다. 이제 앞으로의 목표를 정할 때다.',
      );
      era.println();

      era.printButton('「수고했어!」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.name}은 곧바로 두 팔을 높이 들고 뜻 모를 콩 주문을 외치며, 오늘의 자신이 있는 건 콩 단백질 덕분이라고 주장했다.`,
      );
      era.println();
      await gs.say_and_wait(
        '오늘도 진지하게 두유를 갈아 보자! 콩이다 콩이다 콩이다 콩——!',
      );
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = '에덴으로 가는 길';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      const ret = [];
      await era.printAndWait('무사히 완주했다!');
      era.println();
      await era.printAndWait(
        '이 기세라면 내년 클래식급에서도 골드 쉽의 활약을 기대할 수 있겠다.',
      );
      era.println();

      era.printButton('「수고했어!」', 1);
      await era.input();

      await gs.say_and_wait(
        '이 정도면 가오리 지느러미 양념구이도 질투할 향기다—— 맡아 볼래?',
      );
      era.println();
      await era.printAndWait(
        `땀으로 흠뻑 젖은 ${gs.name}이 다가와 ${you.name}에게 자기 땀 냄새를 맡게 했다……`,
      );
      era.println();
      await gs.say_and_wait(
        '어때? 육지를 정복한 데 이어 바다까지 손에 넣었다구~',
      );
      era.printButton('「확실히 좋은 냄새네……」(연모+2)', 1);
      era.printButton('「하지만 이건 육상 레이스잖아……」(호감+10)', 2);
      ret.push(await era.input());
      await era.printAndWait([
        gs.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 선수 통로의 벽으로 밀더니 자신도 ',
        you.get_colored_name(),
        '에게 등을 기댔다. ',
        gs.sex,
        '는 힘을 빼고 당장이라도 쓰러질 듯했다. ',
        you.get_colored_name(),
        '은(는) 어쩔 수 없이……',
      ]);
      era.println();
      era.printButton('(골드 쉽의 허리를 안아 받쳐 준다)(연모+2)', 1);
      era.printButton('(골드 쉽에게 어깨를 빌려준다)(호감+10)', 2);
      ret.push(await era.input());
      await gs.say_and_wait(
        `그러고 보니 트윙클 시리즈는 이걸로 전부 방영 종료지? 이 ${
          gs.sex_code === 1 ? '나리' : '아가씨'
        }의 뜨거운 승부욕도 이제 나설 데가 없네……`,
      );
      era.println();

      era.printButton(
        '「아니, 무슨 소리야. 이제부터 본격적인 클래식급이잖아!」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `그런 대화를 나누며 ${you.name}과(와) ${gs.name}은 천천히 대기실로 돌아갔다——`,
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `새로운 해, 새로운 시작. ${gs.name}의 활약이 더 높은 곳까지 닿기를 바란다. ${you.name}은(는) 그렇게 생각했다.`,
      );
      await era.printAndWait(
        `정작 본인은 ${you.name}을(를) 향해 두 손을 모았다. 손바닥이 맞부딪치며 짝 소리가 났다.`,
      );
      await gs.say_and_wait(
        '새해 고맙다—— 새로운 한 해…… 작년의 내가 올해의 내가 됐어.',
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며 엄밀히 따지면 옳은 말에 동의했다.`,
      );
      await gs.say_and_wait('그런데 말이야, 이건 엄청난 기적이라고 생각해.');
      await gs.say_and_wait(
        '지구가 없었다면, 우주가 없었다면…… 나도 없었겠지.',
      );
      await era.printAndWait(
        `${gs.sex}는 다시 ${you.name}을(를) 향해 합장했다. ${you.name}은(는) 세 번째는 사양하고 싶었다.`,
      );
      await gs.say_and_wait(
        '그러니까 올해는 온갖 것에 감사하는 한 해로 삼을 거야.',
      );
      await gs.say_and_wait('지구에 감사, 우주에 감사, 눈앞의 너한테도 감사.');
      await gs.say_and_wait(
        '그럼 한 곡 갑니다. 『근하신년~추운 겨울을 넘어 봄으로 가자~』',
      );
      await era.printAndWait(
        `${gs.name}은 엔카풍의 정체불명 노래를 부르기 시작했다. ${gs.sex}의 여유로운 노랫소리가 트레이너실에 오래도록 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `반주 없는 아카펠라인데도 ${you.name}에게는 노래에 가득 담긴 진심이 전해졌다.`,
      );
      await era.printAndWait(
        `한 곡이 끝나자 ${you.name}은(는) 저도 모르게 박수를 쳤다.`,
      );
      await gs.say_and_wait('땡큐, 땡큐, 산꼭대기 친구들도 안녕!');
      await era.printAndWait(
        '아이돌 가수는 즐거운 얼굴로 존재하지 않는 관객들에게 손을 흔들었다.',
      );
      era.println();

      era.printButton('「그러고 보니……」', 1);
      await era.input();

      await gs.say_and_wait('응? 왜? 나한테 전할 말이라도 있냐?');
      await era.printAndWait(
        `${gs.name}은 기대에 찬 표정을 지었다. 꼬리도 빗자루처럼 힘차게 좌우로 흔들렸다.`,
      );
      era.println();

      era.printButton('「올해 클래식급에서는 제대로 성적 내자.」', 1);
      await era.input();

      await gs.say_and_wait(
        '뭐야? 클래식? 올해는 강렬한 기타 솔로를 보여 주려고 했는데, 의외성을 노려서 바이올린도 괜찮겠네.',
      );
      era.println();

      era.print('「무슨 소리야, 그러니까……」');
      era.printButton('「장거리 적성을 단련하자!」(스태미나+40)', 1);
      era.printButton('「지금 생각해 보자!」(지능+40)', 2);
      era.printButton('「돔 투어를 하자!」(스킬 Pt+50)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await gs.say_and_wait(
            '과연, 장시간 연주를 버틸 스태미나를 단련하자는 거구나!',
          );
          await era.printAndWait(
            `아니다. ${you.name}은(는) 고개를 저었지만, 그녀는 이미 자기 세계에 빠져 있었다.`,
          );
          await gs.say_and_wait(
            '알겠어! 확실히 클래식은 긴 곡이면 10시간도 가니까!',
          );
          await gs.say_and_wait(
            '좋아! 10시간이든 20시간이든, 우마무스메를 내놔라!',
          );
          await era.printAndWait(
            `아니다. ${you.name}이(가) 클래식급과 클래식 음악의 차이를 설명하기도 전에 ${gs.sex}는 악기를 가지러 쏜살같이 달려갔다.`,
          );
          await era.printAndWait(
            '이제 와서는 임기응변으로 맞춰 줄 수밖에 없다.',
          );
          break;
        case 2:
          await gs.say_and_wait(
            '그렇군, 밴드 멤버의 의견을 존중하겠다는 거냐! 그거 괜찮네.',
          );
          await gs.say_and_wait(
            '해체하는 이유 중에 음악적 방향성 차이라는 게 많잖아.',
          );
          await gs.say_and_wait(
            '알겠어, 어울려 주마……! 자, 주먹으로 대화하자!',
          );
          await era.printAndWait(
            '그 뒤 두 사람은 물리적으로 마음을 터놓고 트레이너실에 나란히 누워 잤다.',
          );
          await era.printAndWait('푹 잤다.');
          break;
        case 3:
          await gs.say_and_wait('어이어이…… 돔 투어라고!?');
          await gs.say_and_wait('네 꿈, 너무 원대한데!! 나…… 불타오른다!!');
          await gs.say_and_wait(
            '좋아!! 지금 당장 공연 시작이다!! 라이브를 할 거면 정상을 노려야지!!!',
          );
          await era.printAndWait('그 뒤 두 사람은 한동안 필사적으로 연습했다.');
          await era.printAndWait(
            '학원에서 연 작은 야외 라이브는 의외로 평판이 좋았다.',
          );
          await era.printAndWait('그래서 레이스는?');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_47_3: (() => {
    const title = '엄마는 신보다 강하다 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} gs2 ゴールドシップ（第二配色、ふざけ状態）
     * @param {CharaTalk} creek スーパークリーク
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, gs2, creek, you) => {
      await gs2.say_as_unknown_and_wait('바닷속에 잠든 황금의 배여……');
      await gs2.say_as_unknown_and_wait('지금이야말로 깨어날 때……');
      await gs2.say_as_unknown_and_wait(
        '그 힘을 발휘하여 아무도 이르지 못한 경지에 도달하라……',
      );
      era.println();

      await gs.say_and_wait('……응? 방금 그 목소리, 뭐야……?');
      era.println();

      era.printButton('「드디어 환청까지 들리는 거야?」', 1);
      await era.input();

      await gs.say_and_wait(
        '신이라고 하는 목소리가 들렸어. 아니면 골쉽 안에 있는 두 번째 인격인가?',
      );
      era.println();
      era.printButton('「상담 전문가 예약을 잡아 둘까……」', 1);
      await era.input();

      await gs.say_and_wait('아니, 그 녀석이 나더러 『에덴』으로 가래……');
      era.println();

      await era.printAndWait(
        `클래식 3관의 첫 경기인 사츠키상은 코앞이다. 푸딩 생각은 하지 않는 편이 좋겠지만…… ${gs.name}은 제멋대로 뛰쳐나가 그 「에덴」을 찾으러 갔다.`,
      );
      era.println();

      await gs.say_and_wait('I AM GODSHIP(나는 갓 쉽이다)——!');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 실내에서 방향을 바꾸는 속도를 최대한 높여 어떻게든 ${
          gs.name
        }의 뒤를 쫓았다. 그런데 ${
          gs.sex
        }는 다른 ${gs.uma_sex_title}와 정면으로 부딪쳤고, 뒤에서 따라잡은 ${
          you.name
        } 사이에 끼고 말았다.`,
      );
      era.println();

      await gs.say_and_wait('나…… 금성이 보여…… 금성에 공원이……');
      await gs.say_and_wait('아니, 너 누구냐! 갓 쉽의 충격을 버티다니……!');
      await creek.say_and_wait(
        `어머어머, 안녕하세요, ${gs.name} 씨. 오늘도 기운이 넘치시네요.`,
      );
      era.println();

      await era.printAndWait(
        `저만한 충격을 견디다니, 실로 가슴…… 아니, 실로 내구력이 뛰어난 ${creek.uma_sex_title}이다!`,
      );
      era.println();

      era.printButton('「신이라도 엄마는 못 이기나 보네……」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) ${creek.name}에게 사과한 뒤 머리가 어질어질한 ${gs.name}을 훈련실로 끌고 돌아갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '사월의 원수';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('세이야——! 오월의 원수를 갚았다!');
      era.println();
      await era.printAndWait(
        `이유는 모르겠지만 ${gs.sex}는 사월에 열리면서 오월을 뜻하는 사츠키상이라고 부르는 게 불만인지, 이렇게 사츠키상에 시비를 걸었다.`,
      );
      era.println();
      await gs.say_and_wait(
        '내년에도 사츠키상에 돌아와서 오월의 원수를 한 번 더 갚겠어!',
      );
      era.println();

      era.printButton(
        '「사츠키상은 클래식급이야. 평생 한 번밖에 못 뛰어!」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `하지만 ${you.name}의 목소리가 닿기도 전에 ${gs.name}은 이미 멀리 달려가 버렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `여름 합숙은 ${gs.uma_sex_title}에게 배움과 놀이가 공존하는 시간이다. 여름 방학이 되면 대부분의 트레센 학생이 바다로 향해 햇볕과 모래사장, 그리고 약간의 지옥 훈련을 즐긴다.`,
      );
      await era.printAndWait(
        `당연히 이런 시기가 되면 ${you.name}의 유별난 애마 ${gs.name}은 특히 신이 난다.`,
      );
      era.println();

      await gs.say_and_wait(
        '오오오오오! 여름 하면 바다지! 다 같이 바다로 출발이다!!!',
      );
      await gs.say_and_wait('Zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 버스에서 세상모르고 곯아떨어진 ${gs.name}을 보며, 이 녀석의 의욕은 ${gs.sex} 본인처럼 왔다 싶으면 사라지는구나 하고 생각했다.`,
      );
      era.println();

      era.printButton('「일어나!!! 해가 중천이야!!!」', 1);
      await era.input();

      await gs.say_and_wait(
        '우와~ 깜짝이야! 지금 버스에서 바다 합숙을 기다리는 꿈을 꾸고 있었는데! 어떻게 책임질 거냐!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 못마땅한 얼굴로 창밖을 엄지로 가리켜 이미 도착했음을 알렸다. 이를 알아챈 ${gs.name}은 곧바로 기분이 좋아져 폴짝 뛰며 버스에서 내렸다.`,
      );
      era.println();

      await era.printAndWait(
        `며칠 동안은 괜찮은 휴가였고 훈련도 알찼다. 그런데 오늘은 훈련 시간이 되었는데도 ${gs.name}의 모습이 보이지 않았다. ${gs.sex}를 찾으러 바닷가로 왔다.`,
      );
      era.println();

      await era.printAndWait('그리고——');
      era.println();

      await gs.say_and_wait(
        '자자, 지나가는 분들 놓치지 마세요~ 맛있는 야키소바 파격 할인입니다~!!',
      );
      await gs.say_and_wait('달고 시고 쓰고 맵고~ 인생이랑 똑같다구요~!!');
      era.println();

      era.printButton('「왜 여기서 야키소바를 팔고 있어……!!」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) 화가 나서 노점 앞으로 가, 농땡이 치는 녀석에게 따져 물으려 했다.`,
      );
      era.println();

      await gs.say_and_wait('아~ 트레이너잖아~ 엄청 매운맛으로 하면 되지?');
      era.println();

      era.printButton('「훈련하라고 부르러 왔어.」', 1);
      await era.input();

      await gs.say_and_wait(
        '아니~ 주인아저씨 대신 가게 보는 것뿐이라구~ 허리가 아프시대. 한여름 땡볕 아래서 하루 종일 고생하게 둘 순 없잖아?',
      );
      await gs.say_and_wait(
        '그러니까 오늘은 이 면을 전부 팔아 버릴 거야! 안 그러면 아저씨 허리가 안 낫는다구!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) ${gs.sex}의 한번 정하면 말을 안 듣는 성격상 설득이 불가능함을 깨닫고, 어쩔 수 없이 새콤달콤한 야키소바 한 접시를 주문했다. 옆 비치 의자에서 먹으며 ${gs.name}이 또 사라지지 않도록 감시했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '에덴으로 향하는 단서';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전에 ${you.name}에게 남긴 불안과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await era.printAndWait('앞으로의 레이스가 점점 더 기대된다!');
      era.println();
      await gs.say_and_wait('아~ 다 뛰었다, 다 뛰었어~');
      era.println();
      await era.printAndWait(
        `${gs.name}은 힘이 빠진 자세로 길게 숨을 내쉬었다.`,
      );
      era.println();
      await gs.say_and_wait(
        '좋아, 모처럼 어깨 힘도 빠졌으니 이제 위너스 스테이지에서 채소나 기를까. 내 천재성이라면 위너스 스테이지를 초유기농 농장으로 만들 수 있지.',
      );
      era.println();

      era.printButton('「잠깐만.」', 1);
      await era.input();

      await era.printAndWait(
        `하지만 ${gs.name}은 거침없이 나아가며 ${you.name}의 말을 듣지 않고 점점 멀어졌다——`,
      );
      era.println();
      await flash.say_and_wait(`——그건 정말 유감이군요, ${gs.name} 씨.`);
      era.println();
      await era.printAndWait(
        `${gs.name}의 귀가 움찔하더니 이쪽을 돌아보았다. 성실하고 꼼꼼한 우마무스메 「${flash.name}」가 선수 통로의 벽에 기대어 웃는 듯 마는 듯한 표정을 짓고 있었다.`,
      );
      era.println();
      await flash.say_and_wait('당신의 닻은 벌써 무뎌진 모양이군요.');
      era.println();

      if (era.get('cflag:37:招募状态') === recruit_flags.yes) {
        era.printButton(`「플래시구나.」`, 1);
      } else {
        era.printButton(`「아, ${flash.name} 씨?」`, 1);
      }
      await era.input();

      await flash.say_and_wait(
        '저는 『그분』의 부탁으로 말씀을 전하러 왔습니다.',
      );
      await flash.say_and_wait(
        '하지만 한창 달릴 때 물러나실 생각이라면, 그럴 필요도 없겠군요.',
      );
      era.println();

      era.printButton('「무슨 전언인가요?」', 1);
      await era.input();

      await flash.say_and_wait(
        '두 분이 쫓고 계신 『에덴』으로 향하는 단서입니다.',
      );
      await gs.say_and_wait('뭐라고——! 에덴이라고!');
      await gs.say_and_wait('그런데 에덴이 뭐냐?');
      era.println();

      era.printButton('「설마 이온 같은 쇼핑몰은 아니겠지.」', 1);
      await era.input();

      await flash.say_and_wait(
        '……에덴이란, 말하자면 우마무스메의 이상향입니다.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) ${flash.name}가 작게 「그게 뭔데요」라고 중얼거리는 걸 들었지만, 못 들은 척했다.`,
      );
      era.println();

      await gs.say_and_wait('오오! 꿈에 나왔던 그거다!');
      await gs.say_and_wait('플래시, 알려 줘!');
      era.println();

      await era.printAndWait(`${flash.name}는 살짝 웃으며 고개를 저었다.`);
      era.println();

      await flash.say_and_wait(
        '은퇴 후 농사를 짓는 삶에서 복귀하실 생각이 드셨나 보군요.',
      );
      await flash.say_and_wait(
        '하지만 이렇게 중요한 정보는 쉽게 얻을 수 있는 것이 아닙니다.',
      );
      await flash.say_and_wait(
        '알고 싶으시다면 『아리마 기념』 무대에서 저와 겨뤄 보시겠어요?',
      );
      era.println();

      era.printButton('「아리마 기념에서 너와 달리면 되는 거야?」', 1);
      await era.input();

      await flash.say_and_wait('그렇습니다. 저는 두말하지 않습니다.');
      era.println();

      await era.printAndWait(
        `『그분』이 누구인지는 아직 모르겠다. 하지만 적어도 골쉽의 레이스 의욕은 돌아왔다! 고마워, 플래시!`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '파리 컬렉션을 향해 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, opera, you) => {
      await era.printAndWait(
        '골드 쉽은 아리마 기념에서 에이신 플래시와 맞붙는다——',
      );
      era.println();

      await era.printAndWait(
        '물론 에이신 플래시 자체도 강적이다…… 하지만 아리마 기념에 나오는 선수들은 모두 실력이 충분한 강자들이다!',
      );
      era.println();

      era.printButton('(골쉽을 붙잡아서 제대로 훈련시켜야 하는데……)', 1);
      await era.input();

      await era.printAndWait(
        `그렇다. 이렇게 중요한 시기에 ${
          you.name
        }의 귀엽고 매력적인 담당 ${gs.uma_sex_title} 골드 쉽은 또 어딘가로 사라졌다. 그 녀석은 의기양양하게 ${
          you.name
        }의 눈앞을 성큼성큼 지나가며 「오호호호호! 우마무스메의 정점에 서려면 압도적인 『아름다움』이 필요해……!!」 같은 말을 하더니 쏜살같이 달려갔다.`,
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        }은(는) 서둘러 뒤쫓다가 자신의 미학을 자랑하는 ${opera.uma_sex_title}와 우연히 마주쳤다……`,
      );
      era.println();

      await gs.say_and_wait('너는……!');
      await opera.say_and_wait(
        '그렇다! 나야말로 아름다움의 화신! 신의 사랑을 받는 빛의 아이! 티엠——',
      );
      await gs.say_and_wait(
        '오페라 오——!! 흥, 골드 쉽 님은 파리 컬렉션에도 가볍게 설 수 있는 존재다!',
      );
      await opera.say_and_wait(
        '큭, 내 대사를 빼앗다니……! 역시 골드 쉽, 한순간도 방심할 수 없군! 그렇다면 누가 더 아름다운지 여기서 결판내자!',
      );
      era.println();
      await era.printAndWait(
        `그 뒤 두 ${opera.uma_sex_title}는 ${
          you.name
        }이(가) 지켜보는 가운데 꼬박 네 시간 동안 워킹 대결을 벌였다……! 자기들끼리 즐거운 건 괜찮다. 그런데 왜 ${
          you.name
        }까지 끌어들이는가. 이 얼마나 무자비한가!`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '키워드를 모아라';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전 ${you.name}의 걱정과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await gs.say_and_wait('좋아! 결실을 거둘 때다!');
      era.println();

      era.printButton('「잘 달렸어!」', 1);
      await era.input();

      await era.printAndWait(
        `${flash.name}가 옆에서 다가와 ${gs.name}에게 박수를 보냈다.`,
      );
      era.println();
      await flash.say_and_wait(`역시 대단하시군요, ${gs.name} 씨.`);
      await gs.say_and_wait('오! 플래시!');
      await flash.say_and_wait('우리 약속을 기억하시겠지요.');
      era.println();

      era.printButton('「이온 이야기?」', 1);
      await era.input();

      await flash.say_and_wait('……에덴입니다.');
      await flash.say_and_wait(
        '이것이 그분께서 당신을 위해 준비하신 단서입니다.',
      );
      era.println();

      await era.printAndWait(
        `${flash.name}는 주머니에서 아직 온기가 남은 편지를 꺼내 ${
          gs.name
        }에게 건네고 떠났다. 두 사람만 남았다.`,
      );
      era.println();
      await gs.say_and_wait('어디 보자!');
      era.println();
      await gs.say_and_wait('『에덴은 가장 깊은 바닷속에……』');
      await gs.say_and_wait('『에덴을 얻으려면 네 가지 단서가 필요하다……』');
      await gs.say_and_wait(
        '『수많은 강적과 싸워 그들에게서 단서를 얻어라. 비전서 씀.』',
      );
      era.println();

      era.printButton(
        '「게임 조이스틱으로 조종하는 소형 잠수함을 타고 들어가지만 않으면 좋겠는데……」',
        1,
      );
      await era.input();

      await gs.say_and_wait('흐음, 점점 피가 끓어오르는데!');
      await gs.say_and_wait(
        '그런데 플래시가 자꾸 말하는 『그분』은 대체 누구냐……?',
      );
      era.println();

      await era.printAndWait(
        `아무튼 ${gs.name}의 레이스 열정이 한층 높아졌다. 나쁜 일은 아니다!`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 첫 참배';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('트레이너——! 또 왔다!');
      await gs.say_and_wait('어때!? 어때, 어때, 어때!?');
      era.println();

      await era.printAndWait(
        `예상과는 달리 ${gs.name}은 평소 교복 대신 검은색의 멋진 옷을 입고 있었다.`,
      );
      era.println();

      await gs.say_and_wait(
        '이건 골쉽이 직접 디자인하고 직접 바느질한 무대 의상이다!',
      );
      await gs.say_and_wait('목표는 파리 컬렉션의 런웨이지!');
      era.println();

      era.printButton('「예쁘냐고 하면, 확실히 예쁘긴 해……」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.sex}는 씩 웃더니 ${you.name}의 팔을 잡았다. 풍만한 가슴이 ${you.name}에게 닿았다.`,
      );
      era.println();

      await gs.say_and_wait(
        '그럼~ 내일은 멋지게 차려입고 신사에서 새해를 맞자!',
      );
      era.println();

      era.printButton('「……어? 나도 입어야 해?」', 1);
      await era.input();

      await era.printAndWait(
        `다음 날, ${you.name}은(는) 호화로운 사무라이 갑옷을 강제로 입게 되었고, 서양 귀부인 스타일의 골드 쉽과 함께 지역 신사에서 호기심 어린 군중들에게 둘러싸였다.`,
      );
      era.println();

      await era.printAndWait(
        `${gs.name}과 보내는 두 번째 새해도 도무지 마음을 놓을 수 없다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_3: (() => {
    const title = '사회인을 향해 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} ticket ウイニングチケット
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, ticket, you) => {
      await era.printAndWait('새해가 밝고 시니어급 레이스가 시작되었다.');
      await era.printAndWait(
        `곧 텐노상과 타카라즈카 기념 같은 큰 레이스도 다가온다.`,
      );
      era.println();

      await era.printAndWait('그런데 골드 쉽이 트레이너실에 오지 않았다.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 화를 억누르며 학원 곳곳을 찾아다녔다——`,
      );
      era.println();

      await gs.say_and_wait(
        `티켓아, 들어 봐. 후배 ${gs.child_sex_title.substring(
          0,
          1,
        )}에게 가장 중요한 건 이른바 사회인력이란 거다.`,
      );
      await ticket.say_and_wait('인력 회사?');
      await ticket.say_and_wait(
        '아니아니, 사회에 잘 녹아들고 규칙에 맞게 재빨리 움직이고 주위에 폐 끼치지 않는 『사회인·력』이다!',
      );
      await ticket.say_and_wait('『사회인점력』! 뭔가 굉장해 보이네……!!');
      era.println();

      era.printButton(
        '(네 『사회인점력』은 완전히 낙제점이야, 골드 쉽——!!)',
        1,
      );
      await era.input();

      await gs.say_and_wait(
        '왜 『사회인·력』을 『사회인점력』이라고 읽는진 모르겠지만, 그럼 우리 『사회인점력』을 시험해 볼까!',
      );
      await gs.say_and_wait('거기 훔쳐보는 트레이너, 너도 와!');
      era.println();

      await era.printAndWait(
        `말이 끝나기도 전에 골드 쉽과 위닝 티켓은 기세 좋게 학원을 뛰쳐나갔다. ${you.name}은(는) 숨을 헐떡이며 뒤쫓을 수밖에 없었다.`,
      );
      era.println();

      await era.printAndWait(
        '그 후 전철 안에서 조용히 있으면서 『사회인점력』을 뽐내려던 골드 쉽 일행의 시도는 시작한 지 15초 만에 실패로 끝났다.',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '키워드';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `레이스 전 ${you.name}의 걱정과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await gs.say_and_wait('호! 호! 호! 호! 오늘도 제가 잘 달렸나요?');
      await gs.say_and_wait(
        `이 ${
          era.get('cflag:7:性别') !== 1 ? '아가씨' : '나리'
        }의 아름다움은 맨손으로 쪼갠 성게처럼 신선하답니다. 호! 호! 호! 호!`,
      );
      era.println();
      await era.printAndWait(
        `오늘의 ${gs.name}은 스타일을 바꿔, 애니메이션과 만화에 나오는 아가씨 캐릭터의 전형을 전부 모아 놓은 듯했다.`,
      );
      era.println();

      era.printButton('「그 비린내는 맡고 싶지 않아.」', 1);
      await era.input();

      await flash.say_and_wait(`잘하셨습니다, ${gs.name} 씨.`);
      await flash.say_and_wait('그럼 약속한 첫 번째 단서입니다. 받으세요.');
      await gs.say_and_wait('벌써 가 버렸네. 지난번이랑 완전히 다른데.');
      era.println();

      era.printButton('「벌써 질렸나 보지? 뭐라고 쓰여 있어?」', 1);
      await era.input();

      await gs.say_and_wait('글자는 『Shu』 하나뿐인데.');
      era.println();
      await era.printAndWait(
        `전에 ${
          flash.name
        }가 준 편지에는 에덴으로 가기 위한 네 가지 단서를 모으라고 적혀 있었다. 이 『Shu』가 첫 번째겠지.`,
      );
      era.println();
      await gs.say_and_wait(
        '좋아! 재밌네! 그럼 네 가지 단서를 전부 모아 버리자!',
      );
      era.println();
      await era.printAndWait('골드 쉽의 레이스 열정이 한층 더 높아졌다!');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '키워드';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     * @param {boolean} win_takz_kin_c ゴールドシップがクラシック年の宝塚記念に勝っているか
     * @param {boolean} bad_result 悪い結果か（「ゲート難」を習得）
     */
    const f = async (
      gs,
      flash,
      jordan,
      you,
      callname,
      win_takz_kin_c,
      bad_result,
    ) => {
      await era.printAndWait(
        `레이스 전 ${you.name}의 걱정과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await gs.say_and_wait(`하하하! ${jordan.name}! 이겼다, 제삼부 끝!`);
      era.println();
      await era.printAndWait(
        `레이스가 끝난 뒤 ${gs.name}은 의기양양하게 적이자 친구인 갸루 ${jordan.name}에게 승리를 자랑했다.`,
      );
      era.println();
      await jordan.say_and_wait('으으—— 두고 보자!');
      await jordan.say_and_wait('그리고 이것도 기억해 둬!');
      era.println();
      await era.printAndWait(
        `${jordan.name}은(는) 쪽지를 ${gs.name}의 손에 억지로 쥐여 주고는 씩씩거리며 떠났다.`,
      );
      era.println();

      era.printButton('「아, 또 에덴의 단서야?」', 1);
      await era.input();

      await gs.say_and_wait('음…… 이번엔 『an』이라고 적혀 있어.');
      await gs.say_and_wait('전혀 모르겠네——!');
      era.println();
      await era.printAndWait(
        `${flash.name}뿐만 아니라 ${jordan.name}까지 가담하고 있다…… 배후에서 조종하는 인물은 대체 누구일까?`,
      );
      if (win_takz_kin_c) {
        await era.printAndWait(
          `돌아가려는데 옆에 있던 관객들이 ${gs.name}에게 손을 흔들며 외쳤다.`,
        );
        era.println();
        await era.printAndWait('관객 A 「골드 쉽, 정말 대단해!」');
        await era.printAndWait('관객 B 「연속 우승 축하해!」');
        era.println();
        await era.printAndWait(`예의상 이쪽도 관객들에게 화답했다.`);
        era.println();
        await gs.say_and_wait('고맙다!');
        era.println();

        era.printButton('「응원 고마워요~」', 1);
        await era.input();

        await era.printAndWait(
          `${gs.name}은 돌아서서 ${you.name}에게 물었다.`,
        );
        era.println();
        await gs.say_and_wait(`${callname}, 연속 우승이 뭐냐?`);
        era.println();

        era.printButton('「……작년에도 이 레이스에서 이겼잖아.」', 1);
        await era.input();

        await gs.say_and_wait('진짜냐? 그럼 나, 엄청 대단한 거야?');
        era.println();

        era.printButton('「확실히 엄청 대단하지.」', 1);
        era.print('(파워+18, 그 외 능력치+3)', { offset: 1, width: 23 });
        era.printButton('「역사에 이름을 남길 만큼 대단해!」', 2);
        era.print(
          [
            '(모든 능력치+3, 「게이트 난동」 습득, 스킬 Pt+45 또는 모든 능력치+8, 스킬 Pt+75)',
          ],
          { offset: 1, width: 23 },
        );
        const ret = await era.input();
        if (ret === 2 && !bad_result) {
          await gs.say_and_wait(
            '아~ 하하~ 역시 골쉽은 칭찬받으면 잘하는 타입이란 말이지~',
          );
          await gs.say_and_wait('앞으로도 많이 예뻐해 줘~');
        }
        return [ret];
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await gs.say_and_wait('여름이다! 바다다! 수영복이다!');
      era.println();

      await era.printAndWait('두 사람은 모래사장을 걷고 있었다……');
      await era.printAndWait(
        `${gs.name}은 땡볕 아래서도 상쾌해 보였고, ${you.name}만 땀으로 흠뻑 젖어 있었다.`,
      );
      era.println();

      era.printButton('「올여름은 예년보다 더 덥네……!」', 1);
      await era.input();

      await gs.say_and_wait('더우면 벗으면 되잖아?');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 그 말에 눈을 왕방울만 하게 뜨고, 수영복 외에는 아무것도 안 입은 자신을 가리켰다. ${you.name}은(는) 이어 손가락 두 개를 내밀어 자기 두 눈을 가리킨 다음 ${gs.name}의 눈을 가리켰다.`,
      );
      era.println();

      await era.printAndWait('「알았어, 알았어, 농담이야——」');
      await era.printAndWait('「빙수 먹으러 가자, 빙수! 열 좀 식히자!」');

      era.printButton('「알았어, 사 올게.」(우마코인-5, 호감+10, 연모+2)', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) ${gs.name}을 모래사장에 남겨 두고 빠른 걸음으로 노점에 가서 빙수를 사 왔다. 돌아오는 길에——`,
      );

      era.drawLine();
      await era.printAndWait(
        `행인 A 「어라? 이 ${gs.sex_code !== 1 ? '아가씨' : '언니'}, 혼자야?」`,
      );
      await era.printAndWait(
        `행인 B 「${gs.sex_code !== 1 ? '오빠' : '언니'}랑 안 놀래?」`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name}은 원래 자리에 서 있었지만, 꽃 같은 미모는 어김없이 벌과 나비를 불러들였다. 불순한 녀석들이 여럿 ${gs.sex}를 둘러싸고 끈질기게 말을 걸었다. 이런 상황에서도 ${gs.name}은 어떻게든 말을 돌리려 애쓰고 있었고, 평소의 기세는 조금도 보이지 않았다……`,
      );
      era.println();

      await gs.print_and_wait(
        `그렇구나…… 그 녀석은 이름이 알려진 ${gs.uma_sex_title}다. 여기서는 함부로 화를 낼 수 없는 거다……`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name}은 겉으로는 제멋대로지만 실제로는 누구보다 「사회성」이라는 걸 잘 알고 있다.`,
      );
      era.println();

      era.printButton(
        `「야, 남의 ${gs.sex_code - 1 ? '여자' : '남자'}한테 뭐 하는 거야?」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.actual_name}의 말이 끝나자 그 자리에 있던 사람들이 놀라서 ${you.sex}를 바라보았다.`,
      );
      era.println();

      await gs.say_and_wait('자기야~ 와 줬구나~');
      era.println();

      if (era.get('love:7') >= 75) {
        await gs.print_and_wait(
          `${gs.name}은 기회다 싶었는지 불량배들을 헤치고 두 팔을 흔들며 ${you.actual_name}에게 달려와 끌어안고 뜨겁게 입을 맞췄다. ${you.actual_name}을(를) 포함한 모두가 크게 놀랐지만 ${you.actual_name}은(는) 곧바로 응했다. 두 사람의 혀가 입안에서 얽히며 서로를 찾고 열기를 나눴다…… 불량배들은 작업이 실패했다는 걸 알고 욕을 내뱉으며 떠났다.`,
        );
      } else {
        await gs.print_and_wait(
          `${gs.name}은 기회다 싶었는지 불량배들을 헤치고 두 팔을 흔들며 ${you.actual_name}에게 달려와 끌어안았다. 그리고 ${you.actual_name}의 뺨에 가볍게 입을 맞췄다. 그 입맞춤은 얼굴에 립스틱의 서늘함을 남기고, ${you.actual_name}의 뛰는 가슴에 격정의 흔적을 새겼다.`,
        );
      }

      era.drawLine();
      await era.printAndWait(
        `한바탕 소동이 끝나고 ${you.name}과(와) 골드 쉽은 파라솔 아래에서 빙수의 시원함을 즐겼다.`,
      );
      era.println();

      await gs.say_and_wait('휴, 위험했다~ 골쉽, 납치당할 뻔했네~');
      await gs.say_and_wait(`고마워, ${callname}❤️`);
      await gs.say_and_wait(
        `그런데…… 나를 『${gs.sex_code - 1 ? '여자' : '남자'}』로 생각하고 있던 거냐?`,
      );

      await era.printAndWait(
        `${gs.name}은 능청스러운 얼굴로 ${you.name}의 어깨에 기대었다. ${you.name}이(가) 아무리 설명해도 들으려 하지 않았다…… 이 이야기는 ${gs.sex}에게 십 년은 놀림거리가 될 것 같다……`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '키워드?';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, jordan, you) => {
      await era.printAndWait(
        `레이스 전 ${you.name}의 걱정과는 달리 ${gs.name}은 힘차고 멋진 레이스를 보여 주었다!`,
      );
      era.println();
      await gs.say_and_wait(
        '때로는 웃고, 때로는 울며…… 굽이굽이 돌아온 여정……',
      );
      await gs.say_and_wait(
        '이 여정의 모든 것은 헛되지 않았어! 승리는 이미 내 손안에 있으니까!',
      );
      await jordan.say_and_wait('젠장, 또 네 녀석한테 지다니……!! 으……!!');
      await jordan.say_and_wait(
        '말도 발을 헛디딜 때가 있잖아. 오늘은 그랬을 뿐이야. 다음엔 반드시 되갚아 주겠어!',
      );
      await gs.say_and_wait('좋아! 결승선에서 마카롱 먹으면서 기다릴게!');
      await jordan.say_and_wait('흥!');
      era.println();
      await era.printAndWait(
        `그렇게 ${jordan.name}은(는) 또 씩씩거리며 떠났다. 그런데……`,
      );
      era.println();
      await gs.say_and_wait('어? 뭔가 떨어뜨리고 갔네.');
      era.println();
      await era.printAndWait('전과 같은 쪽지였다. 또 새로운 단서인 모양이다.');
      era.println();

      era.printButton('「솔직하지 못한 녀석이라니까.」', 1);
      await era.input();

      await gs.say_and_wait('이번엔…… 『izu』라고 적혀 있어.');
      await gs.say_and_wait('단서는 『Shu』, 『an』, 『izu』……');
      await gs.say_and_wait('여전히 모르겠네——!');
      era.println();
      await era.printAndWait(
        '그분은 이번에도 어김없이 새로운 단서를 남겼다. 학생들에게 이런 일을 시킬 수 있다면 꽤 높은 자리에 있는 사람일까?',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_95_41: (() => {
    const title = '진검승부 편';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, festa, you) => {
      await era.printAndWait(
        `${you.name}과(와) 골드 쉽을 에덴으로 이끄는 수수께끼의 인물……`,
      );
      era.println();

      await era.printAndWait(
        '그 사람은 골드 쉽이 레이스에 나갈 의욕을 내게 하려고 이렇게까지 공을 들이는 것이겠지. 어쨌든 골드 쉽의 원동력이 된다면…… 모두에게 이득인 셈이다.',
      );
      era.println();

      era.printButton('(그래서 얘들은 뭐 하는 거야……)', 1);
      await era.input();

      await era.printAndWait(
        `${
          you.name
        }의 눈앞에 진짜와 똑같은 ${gs.uma_sex_title} 조각상 두 개가 서 있었다…… 똑같다기보다, 본인이었다.`,
      );
      era.println();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……');
      era.println();

      await era.printAndWait(
        '두 사람은 사람들이 지나다니는 안뜰에 서 있었다. 꼼짝도 하지 않는데 오히려 눈에 띄었다.',
      );
      era.println();

      await festa.say_and_wait('……');
      await gs.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `또 움직이지 않기 대결 같은 영문 모를 승부를 하는 것이겠지. 그때 ${you.name}은(는) 재미있는 생각이 떠올랐다.`,
      );
      era.println();

      era.printButton(
        '「우와, 다 큰 사람들이 무궁화꽃이 피었습니다라도 하는 거야?」',
        1,
      );
      await era.input();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……！');
      era.println();

      era.printButton('「그래, 이참에 장난이나 쳐 볼까~?」', 1);
      await era.input();

      await festa.say_and_wait('……으음!');
      await gs.say_and_wait('……');
      era.println();

      era.printButton('「어라, 저니 씨 아니세요!」', 1);
      era.printButton('두 사람의 허리에서 민감한 곳을 쓰다듬는다.', 2, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await festa.say_and_wait('칫, 들켰나!? ……거짓말이잖아!');
        await gs.say_and_wait('좋아, 내 승리다!!');
        await festa.say_and_wait(
          '젠장! 골드 쉽 녀석! 좋아! 다음에는 내 특기 분야에서 정정당당하게 쓰러뜨려 주마!',
        );
        await gs.say_and_wait('핫! 그럼 결승선 옆에서 기다릴게!');
      } else {
        await festa.say_and_wait('……이 녀석❤️!');
        await gs.say_and_wait('……❤️');
        era.println();

        await era.printAndWait(
          `${you.name}의 짓궂은 애무에 두 사람은 애가 타고 숨이 거칠어졌다. 향기로운 입술 사이로 새어 나오는 달콤한 소리는 ${you.name}의 손이 금지된 곳으로 향할수록 더 다급해졌다. 승부의 결과 따위는 이제 아무래도 좋았다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '마지막 키워드';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, flash, jordan, you, callname) => {
      await flash.say_and_wait('정말로…… 아쉽군요.');
      await jordan.say_and_wait('젠장, 오늘이야말로 이길 줄 알았는데……!');
      await gs.say_and_wait('고맙다. 내 화산 폭발 심장도 최고로 뜨거워졌어!');
      await flash.say_and_wait(`축하합니다, ${gs.name} 씨.`);
      await flash.say_and_wait('이번이 당신과의 마지막 대결이 되겠군요.');
      await flash.say_and_wait('부디 받아 주세요.');
      era.println();
      await era.printAndWait(
        `${flash.name}가 꺼낸 쪽지. 이것이 에덴으로 향하는 마지막 단서다!`,
      );
      era.println();
      await gs.say_and_wait('이건……!!');
      await flash.say_and_wait(
        '이것이 당신이 찾던 에덴……인 걸까요. 잘은 모르겠지만, 부디 힘내 주세요.',
      );
      await gs.say_and_wait('고마워!');
      era.println();
      await era.printAndWait(
        `${flash.name}, ${jordan.name}. 골쉽의 평생 숙적들이 인파 속으로 멀어져 갔다……`,
      );
      era.println();
      await gs.say_and_wait(`${callname}, 이게……!`);
      era.println();

      era.printButton('「이게 마지막이야!」', 1);
      await era.input();

      await era.printAndWait('자, 마지막 단서를 밝혀 보자!');
    };
    f.title = title;
    return f;
  })(),
  ws_eden: (() => {
    const title = '에덴으로 가는 길';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} taste 秋川やよい / ホクホク味
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, taste, you, callname) => {
      await era.printAndWait(
        `늦겨울 찬 바람이 뼛속까지 스미고, 정오가 되자 진실이 길을 드러낸다…… ${you.name}과(와) 골드 쉽은 단서가 적힌 쪽지 네 장을 들고 마지막 목적지로 향했다.`,
      );
      era.println();
      await gs.say_and_wait(
        '운명의 만남을 앞두고 오른손까지 칠흑 같은 그림자의 저주로 아파 온다……',
      );
      era.println();

      era.printButton('「하지만 피할 수 없는 운명이다. 나아가라!」', 1);
      await era.input();

      await gs.say_and_wait(
        '당연하지, 신이라 해도 내가 그곳에 가는 걸 막을 수는 없어!',
      );
      await gs.say_and_wait(`준비됐냐, ${callname}? 저기가 우리 결승점이다!`);
      era.println();

      era.printButton('「흥, 걱정 마! 가자!」', 1);
      await era.input();

      await era.printAndWait(`어두컴컴하다. 이 장소에 대한 첫인상이었다.`);
      await era.printAndWait(`차갑다. 이 장소가 가한 첫 공격이었다.`);
      era.println();
      await era.printAndWait(
        `손가락조차 잘 보이지 않는 동굴 안에서 한 줄기 빛만이 두 사람을 앞으로 이끌었다.`,
      );
      era.println();
      await era.printAndWait(
        '주위의 기묘한 생물들은 두 사람에게 신경도 쓰지 않고 한가롭게 지내고 있었다.',
      );
      era.println();
      await gs.say_and_wait('여기가…… 쪽지에 적힌 장소야.');
      await gs.say_and_wait('단서는 『Shu』, 『an』, 『izu』.');
      era.println();

      era.printButton('「마지막은 『gu』야!」', 1);
      await era.input();

      await gs.say_and_wait(
        '조합해 보니 답은 뻔하다…… 『Shuizuguan』, 중국어로 수족관이라는 뜻이다!',
      );
      await gs.say_and_wait('설마 에덴이 이런 곳에 있었을 줄이야……');
      era.println();
      await era.printAndWait(
        '그때 옆에서 누군가 나타났다! 작은 체구의 인물이 박수를 치며 높은 웃음소리를 냈다.',
      );
      era.println();
      await taste.say_and_wait(
        '훌륭! 『에덴 계획』을 돌파하고 여기까지 왔구나!',
      );
      await taste.say_and_wait('감동! 트레이너의 뒷받침도 빼놓을 수 없지!');
      await gs.say_and_wait('너, 트레센의 대부!? 왜 여기에!');
      await gs.say_and_wait(`${callname}! 설마 알고 있었냐!?`);
      era.println();

      era.printButton(
        '「세 번째 단서 때 짐작했어. 장소도, 배후의 흑막도.」',
        1,
      );
      await era.input();

      await gs.say_and_wait('뭐!? 그럼 말해 줬어야지!');
      await taste.say_and_wait('재미! 그래서는 재미가 없지 않나!');
      await taste.say_and_wait('설명! 이른바 『에덴 계획』이란……!');
      era.println();
      await era.printAndWait(
        `원래 「에덴 계획」은 열정적이지만 자주 다른 곳에 정신이 팔리는 ${gs.name}이 트윙클 시리즈에 집중해서 도전할 수 있도록 세운 계획이었다.`,
      );
      era.println();
      await era.printAndWait(
        '「에덴 계획」에서는 여러 단서와 비전서로 골드 쉽의 호기심을 자극하여 계획의 목표로 이끌었다.',
      );
      era.println();
      await era.printAndWait(
        `${taste.name}에게 「에덴」이란 우마무스메의 생애에서 가장 중요한 트윙클 시리즈 그 자체였던 것이다.`,
      );
      era.println();
      await taste.say_and_wait('이상이다!');
      await gs.say_and_wait(
        '그렇구나! 그럼 꿈에 나온 목소리도 너희가 한 짓이냐?',
      );
      await taste.say_and_wait('어?');
      await gs.say_and_wait('어?');
      era.println();

      era.printButton('「어?」', 1);
      await era.input();

      await taste.say_and_wait(
        '경악! 학생들에게 쪽지와 비전서를 준비하게 한 것 외에는 숨겨진 금단의 기술을 쓰지 않았을 텐데!',
      );
      await taste.say_and_wait('아, 이건 말하면 안 된다. 잊어버리도록.');
      await gs.say_and_wait('설마 진짜로 골쉽 안에 두 번째 인격이 생긴 거냐!?');
      era.println();

      era.printButton('「그런 건 하나로도 충분해!」', 1);
      await era.input();

      await era.printAndWait(
        `그렇게 세 해의 여정은 웃음과 장난, 영문 모를 일들 속에서 일단락되었다.`,
      );

      era.drawLine();
      await era.printAndWait(
        `밤이 되어 ${you.name}과(와) ${gs.name}은 바닷가 모래 위에 누워 짭짤한 바닷바람이 얼굴을 스치는 감촉을 즐겼다.`,
      );
      era.println();

      era.printButton('「……고마워, 골드 쉽.」', 1);
      await era.input();

      await gs.say_and_wait('응? 갑자기…… 아, 벌써 자는 거냐?');
      await gs.say_and_wait(
        '거참, 믿음직한 듯하면서도 못 미더운 녀석이라니까.',
      );
      await gs.say_and_wait(
        '지난 세 해 동안 나한테 그렇게 휘둘리고도 사표 한 장 안 냈어.',
      );
      await gs.say_and_wait(
        '때로는 진지하고, 때로는 나랑 같이 바보짓을 하고. 나도 너무 심했나 싶을 때가 있는데, 넌 굳이 어른인 척하면서 막지는 않았지.',
      );
      await gs.say_and_wait(
        '그거 알아? 이사장은 『에덴』이 트윙클 시리즈라고 했어.',
      );
      await gs.say_and_wait(
        '하지만 내 『에덴』은 트레센도, 트윙클 시리즈도 아냐……',
      );
      await gs.say_and_wait('……');
      await gs.say_and_wait('쪽♡');
      era.println();

      if (era.get('love:7') >= 50) {
        era.printButton('「눈을 뜬다.」', 1);
      }
      era.printButton('「자는 척한다.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('우왓, 깨어났어!?');
        await gs.say_and_wait(
          '아니, 처음부터 안 잤던 거냐! 샤아, 날 속였구나!',
        );
      } else {
        await gs.say_and_wait('앞으로도 도망 못 간다❤️');
        era.println();
        await era.printAndWait(
          `아무래도 ${you.name}이(가) 골쉽에게 부려 먹히는 생활은 앞으로도 한참 이어질 것 같다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async ws_eden_sex_end(gs, you) {
    await gs.say_and_wait('하아…… 하아…… 속였겠다……');
    await gs.say_and_wait('……이 녀석…… 젠장……');
    era.println();

    era.printButton('「흐흥, 괴롭힘당하니까 기분이 어때?」', 1);
    await era.input();

    await gs.say_and_wait('너…… 하나 계산을 잘못했어……');
    await gs.say_and_wait('트레이너는 우마무스메를 못 이긴다!');
    era.println();

    era.printButton('「뭐라고!」', 1);
    await era.input();

    await gs.say_and_wait('앞으로도 도망 못 간다♡');
    era.println();
    await era.printAndWait(
      `아무래도 ${you.name}이(가) 골쉽에게 얼굴을 깔리는 생활은 앞으로도 한참 이어질 것 같다……`,
    );
  },
  hoverboard: (() => {
    const title = '골쉽호, 전격 탄생!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        '「부릉부릉부릉—— 부릉부릉부릉——」 하는 소음이 다가왔다. 모기 날갯소리는 아니었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 세그웨이가 눈앞을 지나가고, 그 위에 익숙한 모습이 서 있는 걸 보았다.',
      ]);
      era.println();
      await gs.say_and_wait(
        '최고 속도 시속 25킬로미터, 출력 250와트! 이것이 골쉽호다!',
      );
      era.println();
      await era.printAndWait(
        '세그웨이가 드리프트하며 멈추자 그 위의 아름다운 주인이 폴짝 뛰어내렸다.',
      );
      await era.printAndWait([
        gs.get_colored_name(),
        '은 의기양양하게 ',
        you.get_colored_name(),
        '에게 엄지를 치켜세웠다.',
      ]);
      era.println();
      era.printButton('「고, 골쉽호?」', 1);
      await era.input();
      await gs.say_and_wait('바로 골쉽호, 그것이로다!');
      await era.printAndWait([
        gs.sex,
        '는 골쉽호의 손잡이를 가볍게 두드리며 자랑스럽게 ',
        you.get_colored_name(),
        '에게 애차를 구석구석 보여 주었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 다가가 보니 모양은 제법 그럴듯했다. 위는 은색, 아래는 검은색이고 바퀴살은 보통 세그웨이보다 한 치수 컸다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 세그웨이에 대해 잘 몰라서 특별 주문품인지는 판단할 수 없었다.',
      ]);
      await era.printAndWait([
        '다만 이 세그웨이는 ',
        gs.sex,
        ' 본인처럼 금색인 부분이 거의 보이지 않았다.',
      ]);
      era.println();
      era.printButton('「그래서 어디가 골드인데?」', 1);
      await era.input();
      await gs.say_and_wait('가격이지.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 돈 이야기를 듣는 순간 눈썹을 치켜세웠다.',
      ]);
      era.println();
      era.printButton('「비싸진 않지?」', 1);
      await era.input();

      await era.printAndWait('프로 선수들은 씀씀이가 크다는 말을 자주 듣는다.');
      await era.printAndWait(
        '젊은 선수 중에는 수입이 생기자마자 유행하는 사치품으로 몸을 치장하다가 ',
      );
      await era.printAndWait(
        '부진이 찾아오면 대비할 자금조차 남지 않는 경우가 많다.',
      );
      await era.printAndWait('트레이너로서 제대로 살펴야 한다.');
      era.println();
      await era.printAndWait('하지만 쓸데없는 걱정이었다.');
      era.println();
      await gs.say_and_wait(
        '골쉽이 직접 개조한 골쉽호에는 값을 매길 수 없지. 당연히 비싸다!',
      );
      era.println();
      await gs.say_and_wait('안에서 밖까지 엄청나게 공들여 고친 내 애차라구!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 조금 놀랐다. 역시 골드 쉽의 사고방식은 엄청나게 튄다.',
      ]);
      era.println();
      era.printButton('「……내가 망가뜨리면 어쩌려고?」', 1);
      await era.input();
      await gs.say_and_wait(
        '걱정 마! 골쉽호의 장점은 튼튼함이다! 부딪쳐도 안 망가진다구!',
      );
      era.println();
      await era.printAndWait([
        '이 지식은 수없이 많은 실전에서 얻은 모양이다. 골쉽호가 안에서 밖까지 ',
        gs.sex,
        '에게 개조된 이유도 그렇게 설명이 된다.',
      ]);
      await era.printAndWait([
        '나중에 위험을 피하는 게 얼마나 중요한지 제대로 알려 줘야겠다. 하지만……',
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        '이 열의에 넘쳐 당장이라도 ',
        you.get_colored_name(),
        '을(를) 골쉽호에 묶고 달려갈 듯한 모습을 보니, ',
        you.get_colored_name(),
        '은(는) ',
        gs.sex,
        '의 호의를 고맙게 받아들이기로 했다.',
      ]);
      era.println();
      await era.printAndWait('【골쉽호】 대여증을 얻었다!');
    };
    f.title = title;
    return f;
  })(),
  sa_heroine_red: (() => {
    const title = '주인공의 빨강!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(`어느 날, ${you.name}이(가) 안뜰을 걷고 있는데——`);
      await era.printAndWait(`승부복을 입은 ${gs.name}이 있었다.`);
      era.println();

      await gs.say_and_wait(
        `아, ${you.actual_name}(이)잖아. 오늘도 힘차게 아가미 호흡 해라.`,
      );
      era.printButton('「……그것보다 왜 승부복을 입고 있어?」', 1);
      await era.input();
      await gs.say_and_wait('빨간 주인공의 힘을 얻으려고 그러지.');
      await gs.say_and_wait(
        '그 표정은 뭐냐? 잘 생각해 봐. 어릴 때 보던 전대물 히어로도 열혈 만화 주인공도 전부 빨강이잖아?',
      );
      await gs.say_and_wait(
        '빨간 옷 입은 녀석이 주인공이고, 마지막에는 반드시 이긴다!',
      );
      era.println();

      await era.printAndWait(
        `조금 엇나가기는 했지만 ${gs.name}의 말이 틀리지는 않았다…… 이 기회에 조금 알려 줄까?`,
      );
      era.printButton('「세상에는 여러 가지 빨강이 있어.」(지능+20)', 1);
      era.printButton('「자기 신념을 관철해!」(근성+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('섹시한 빨강도 있고 악역의 빨강도 있다고!?');
        await gs.say_and_wait('그렇구나, 빨강의 힘을 너무 얕봤어……');
        await gs.say_and_wait(
          '난 처음부터 주인공도 악역도 해낼 힘을 얻었던 거야!',
        );
        await gs.say_and_wait(
          '게다가…… 섹시함까지 더해져서 매력은 무적이라구❤️',
        );
        era.println();

        await era.printAndWait(
          `${gs.name}은 요염한 눈길을 남기고 신이 나서 떠났다.`,
        );
      } else {
        await gs.say_and_wait(
          `바로 그거다! ${gs.sex_code !== 1 ? '나' : '나'}, 등장!`,
        );
        era.println();

        await era.printAndWait(`${gs.name}은 기운차게 떠났다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_golden_ship_date: (() => {
    const title = '골쉽식 데이트';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait(
        `어느 날, ${you.name}과(와) ${gs.name}은 교문 근처에서 우연히 마주쳤다——`,
      );
      era.println();

      await gs.say_and_wait('으악! 열받아!');
      await gs.say_and_wait(
        `${callname}, 조던 녀석이 나더러 데이트도 모른다고 하잖아아아아!`,
      );
      await gs.say_and_wait(
        `어차피 한가하지!? 지금부터 ${
          gs.sex_code - 1 ? '나' : '나'
        }랑 데이트다!`,
      );
      era.println();

      await era.printAndWait(
        `결국 ${gs.sex}에게 억지로 끌려 번화가로 나왔다……`,
      );
      await era.printAndWait(
        '하루 종일 신나게 놀고 난 뒤, 두 사람은 돌아가는 길에 공원에 들러 잠시 휴식을 취했다.',
      );
      era.println();

      await gs.say_and_wait('휴~ 나도 좀 지쳤네. 이다음엔 뭐 할까?');
      era.printButton('「내가 음료수 사올게.」（스태미나+20）', 1);
      era.printButton('「연장전이야! 내가 이길 때까지 하자!」（파워+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) ${gs.sex}에게 마실 것을 사 주고 둘이서 천천히 기숙사로 걸어 돌아갔다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}과(와) ${gs.name}의 기묘한 게임은 아직 계속된다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sudden_look_back: (() => {
    const title = '골쉽의 갑작스러운 옛날이야기 편!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `배가 고팠다. 식당 라멘이 평판이 좋다던데. ${you.name}은(는) 트레센 식당에 가서 배 속의 아우성을 달래기로 했다.`,
      );
      era.println();

      await era.printAndWait(
        `가는 길에 ${you.name}은(는) 멀리 안뜰에 앉아 있는 골드 쉽을 알아보았다. 흔들리는 나뭇잎 사이로 햇빛이 말없는 미인 위에 내려앉아 반짝였다.`,
      );
      era.println();

      await gs.say_and_wait(`아, ${you.actual_name}(이)구나.`);
      era.println();

      era.printButton('여기서 뭐 해? 밥 안 먹어?', 1);
      await era.input();

      await gs.say_and_wait('뭐라고 할까, 옛날 생각을 하고 있었어.');
      await gs.say_and_wait(
        '아주 오래전 눈보라 치던 밤, 어린 나는 집에서 하던 나사 공장 살림에 보탬이 되려고 혼자 거리에서 금속 배트를 팔고 있었지……',
      );
      era.println();

      era.printButton('나사를 만들라고.', 1);
      await era.input();

      await gs.say_and_wait(
        '그러다 뼛속까지 스미는 바람에 꼴이 말이 아니게 됐고, 추워서 울어 버렸어.',
      );
      await gs.say_and_wait(
        `그때…… 내 운명을 바꾼 ${gs.uma_sex_title}가 나타났지.`,
      );
      await gs.say_and_wait(
        `${gs.sex}는 내 앞으로 와서 따뜻한 라멘 국물로 만든 죽을 내밀었어.`,
      );
      era.println();

      era.printButton('네가 지금 무슨 말을 하는지 좀 들어 봐.', 1);
      await era.input();

      await gs.say_and_wait(
        `${
          gs.sex
        }는 이렇게 말했어. 『나도 ${gs.uma_sex_title}지만 달리기는 잘 못해서 지금은 라멘집을 하고 있어. 너도 인생의 목표는 자유롭게 골라도 돼』라고.`,
      );
      await gs.say_and_wait(
        `그 ${gs.uma_sex_title}의 말에 깨달았지. 우리 집 나사 공장을 물려받지 않아도 된다는 걸!`,
      );
      era.println();

      await era.printAndWait(
        '남에게 휘둘리지 않고 자기 길을 걷는다…… 참 골드 쉽다운 이야기다.',
      );
      era.println();

      era.printButton('「그때 국물을 재현해 볼까?」(스태미나＆지능+10)', 1);
      era.printButton('「그때 그 장소에 가 볼까?」(스피드+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('국물을 재현한다고…… 내가 할 수 있을까?');
        await gs.say_and_wait(
          '……흥, 단련할 만큼 단련한 내가 못 할 리 없지. 마늘이 잔뜩 들어간 그 맛, 기억하고 있어!',
        );
        await gs.say_and_wait(`따라와!`);
        era.println();

        await era.printAndWait(
          `${you.name}은(는) 골드 쉽에게 끌려 식당 주방으로 갔다. 모두가 보는 가운데 한쪽을 차지하고 라멘 국물 연구를 시작했다.`,
        );
        era.println();

        await gs.say_and_wait('좋아! 완성이다! 마늘 범벅 라멘! 같이 맛보자!');
        era.println();

        era.printButton(
          '「너무 매워————!! 마늘을 너무 많이 넣어서 못 먹겠잖아!」',
          1,
        );
        await era.input();

        await era.printAndWait(
          `${you.name}과(와) 골드 쉽은 나중에 반성하며, 그날 그렇게 진한 죽을 삼킬 수 있었던 건 극심한 추위라는 특수한 상황 덕분이었다고 결론 내렸다.`,
        );
      } else {
        await gs.say_and_wait('그때 그 장소…… 맞아! 제방 옆이었어!');
        await gs.say_and_wait(
          '아무것도 안 변했다면 그 라멘 노점도 아직 있을 거야!',
        );
        era.println();

        await era.printAndWait(
          `${you.name}은(는) 골드 쉽에게 끌려 제방으로 가서 수수께끼의 라멘 노점을 찾았지만, 밤이 되도록 아무 소득도 없었다……`,
        );
      }
      era.println();

      await era.printAndWait(
        `그 후 어느 날, ${you.name}은(는) 밤까지 트레이너실에 남아 있었다. 골드 쉽의 트레이너로서 ${gs.sex}의 팬레터를 관리하는 것도 자신의 일이었다. ${you.name}은(는) 기계적으로 편지 한 통을 열었다가 의미심장한 문장을 보았다……`,
      );
      era.println();

      await era.printAndWait(
        '??? 「너는 정말 자유롭게 자기 길을 선택하고 있나 보구나. 나도 계속 지켜보고 있단다.」',
      );
      era.println();

      era.printButton('이 편지는 골쉽에게 보여 줘야겠다……', 1);
      await era.input();

      await era.printAndWait(
        `편지에는 그 문장만 있었고 받는 이도 보낸 이도 적혀 있지 않았다. 하지만 ${you.name}은(는) 골드 쉽이 들려준 마늘 범벅의 겨울 이야기를 저도 모르게 떠올렸다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_shoubu: (() => {
    const title = '진심으로 승부하자!';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_49 ゴールドシップのナカヤマフェスタへの呼び方
     * @param {boolean} success 対決が成功したか
     */
    const f = async (gs, festa, you, call_49, success) => {
      const ret = [];
      await era.printAndWait(
        `${you.name}과(와) ${gs.name}은 옥상에서 잠깐의 휴식을 즐기고 있었다…… 원래라면 조용히 흘러갈 시간이었지만, ${you.name}은(는) ${festa.name}을(를) 보았다.`,
      );
      era.println();

      await festa.say_and_wait('……여어, 오늘도 기분 좋아 보이네.');
      await gs.say_and_wait([call_49, '……！！']);
      era.println();

      await era.printAndWait(
        `찰나! 피가 얼어붙었다! ${festa.name}에게서 풍기는 도박꾼의 기백에 그 ${gs.name}마저 압도되고 있었다……!!`,
      );
      era.println();

      await festa.say_and_wait(
        '흐음…… 그런 얼굴 하지 마. 그러면 당장 승부하고 싶어지잖아.',
      );
      await gs.say_and_wait('승부……!?');

      era.printButton('「페스타, 무슨 소리를……!」', 1);
      await era.input();

      await festa.say_and_wait('당연히……');
      era.println();
      era.printButton(`${festa.name}「한정 가위바위보……!」`, 1);
      era.printButton(`${festa.name}「황제 카드……!」`, 2);
      era.printButton(`${festa.name}「……우마뾰이♡」`, 3, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      ret.push(await era.input());
      if (ret[0] === 3) {
        await era.printAndWait(
          `${you.name}과(와) 골드 쉽은 갑작스러운 행위의 유혹에 굳어 버렸다. 하지만 나카야마 페스타의 눈에 타오르는 욕망은 더는 기다릴 수 없다고 말하고 있었다……`,
        );
        era.println();
        await festa.say_and_wait(
          '있잖아, 상상만 해도 아래가 젖는다…… 빨리 승부하자❤️❤️❤️',
        );
      } else {
        if (ret[0] === 1) {
          await era.printAndWait(
            '한정 가위바위보……!! 카드로 가위바위보를 해서 상대의 목숨을 빼앗는 무시무시한 게임…… 한 발만 잘못 디디면 나락으로 떨어진다!!',
          );
        } else {
          await era.printAndWait(
            '엠퍼러……!! 카드의 높고 낮음으로 생사를 결정하는 무시무시한 게임…… 한 발만 잘못 디디면 나락으로 떨어진다!!',
          );
        }
        era.println();
        await era.printAndWait(
          `큰일이다…… ${
            gs.couple_title
          }의 성격이라면 끝날 때쯤에는 점심이 다 식겠다! 어떻게 하지, 말려야 하나……!?`,
        );
        era.printButton('「아니, 내가 대신 나서겠어!」(체력+100)', 1);
        era.printButton(
          '「힘내……!」(【비근간거리◯】 습득, 스킬 Pt+60 또는 스킬 Pt+15)',
          2,
        );
        ret.push(await era.input());
        if (ret[1] === 1) {
          await festa.say_and_wait('뭐? 제법 배짱이 있는데…… 재밌어!');
          await festa.say_and_wait('좋아! 오늘은 어울려 주마!');
          await gs.say_and_wait('어이어이, 진짜냐!? 나만 빠진 거야!?');
          era.println();

          await era.printAndWait(
            `${you.name}은(는) 가진 것을 전부 쏟아부어 어떻게든 절체절명의 위기를 살아 넘겼다……`,
          );
          await era.printAndWait('하지만 점심시간은 어느새 끝나 있었다!');
        } else if (success) {
          await era.printAndWait(
            `${gs.name}은 가진 것을 전부 쏟아부어 어떻게든 절체절명의 위기를 살아 넘겼다……`,
          );
          await era.printAndWait('하지만 점심시간은 어느새 끝나 있었다!');
        } else {
          await era.printAndWait(
            `${gs.name}은 가진 것을 전부 쏟아부었지만 ${festa.name}에게는 이길 수 없었다……`,
          );
          await era.printAndWait('게다가 점심시간은 어느새 끝나 있었다!');
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '팬의 습격';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait('쏟아지는 비, 길게 울리는 사이렌.');
      await era.printAndWait([
        '끝없이 이어진 듯한 거리는 구경꾼들로 가득했다. ',
        you.get_colored_name(),
        '은(는) 들것에 붙들린 채 절망에 가득 찬 눈을 부릅뜨고 ',
        gs.sex,
        '가 경찰차에 오르는 모습을 지켜보았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 찔린 곳의 극심한 통증을 참으며 목소리를 쥐어짜 「이건 ',
        gs.sex,
        '의 잘못이 아니야!」라고 외쳤다.',
      ]);
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        '의 온몸이 피로 물든 모습은 마치 ',
        gs.sex,
        '가 자랑스럽게 여기는 승부복을 입은 듯했다.',
      ]);
      era.println();
      await era.printAndWait('이렇게 되어서는 안 됐다.');
      await era.printAndWait([
        '트레이너의 실패를 ',
        gs.uma_sex_title,
        '가 짊어져서는 안 된다.',
      ]);
      await era.printAndWait([
        gs.uma_sex_title,
        '의 초인적인 몸은 이런 곳에 쓰일 것이 아니었다. ',
        gs.couple_title,
        '은 코스 위에서 즐겁게 겨루기만 하면 됐다.',
      ]);
      await era.printAndWait([
        '마치 ',
        gs.get_colored_name(),
        '이 ',
        you.get_colored_name(),
        '을(를) 위해 이성을 잃고, ',
        you.get_colored_name(),
        '을(를) 찌르려던 광인을 때려눕혀 거리에 너무나 아름다운 붉은 융단을 만드는 일 따위는 있어서는 안 됐다.',
      ]);
      era.println();
      await era.printAndWait('대체…… 어디서 잘못된 걸까……');
      era.println();
      await era.printAndWait([
        '분노한 팬의 보복을 당해 ',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
