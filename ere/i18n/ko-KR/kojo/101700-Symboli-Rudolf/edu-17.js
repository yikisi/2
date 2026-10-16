/**
 * @file シンボリルドルフ - 育成
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `훈련이 끝난 후에도 ${chara17.name}는 여전히 아쉬움이 남는 듯했다.`,
      );
      await era.printAndWait(
        `${chara17.sex}는 멀리 지평선을 바라보았다. 석양이 지고 마지막 빛이 대지에 내려앉고 있었다.`,
      );
      await era.printAndWait(
        '금세 어두워지겠지만 아직 부족하다. 아직 한계에 도달하지 못했다——',
      );
      await era.printAndWait(
        `${you.name}은(는) ${chara17.sex}의 마음을 알아차렸다.`,
      );
      era.printButton('「계속 달려 보자! 그 감각을 놓치지 마.」', 1);
      era.printButton(
        '「오늘은 여기까지 하자. 다음에는 더 중요한 일이 기다리고 있어.」',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('——정벌의 끝인가? 재미있군.');
        } else {
          await chara17.say_and_wait(
            '응…… 왠지 점점 요령을 알 것 같은 기분이야.',
          );
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('잠들라는…… 것인가?');
        } else {
          await chara17.say_and_wait('과연 그렇네. 일깨워줘서 고마워.');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title} 따위는 짐의 적수조차 되지 못한다. 고작 이 정도에 짐이 직접 나서야 했느냐?`,
        );
      } else {
        await chara17.say_and_wait(
          '……이것이 그대가 원하던 결말이라면, 반대하지 않겠어.',
        );
      }
      era.printButton('「어쩔 수 없는 선택이었어.」', 1);
      era.printButton('「넌 더 잘할 수 있어.」', 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('흥.');
        } else {
          await chara17.say_and_wait('알고 있어…… 하아.');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('어릿광대 주제에 제법 기세등등하군? 흥……');
        } else {
          await chara17.say_and_wait('난 그런 기대를 하지 않아.');
        }
      }
    };
    f.title = title;
    return f;
  })(),
  faith_collapse: (() => {
    const title = '신념의 붕괴';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `${you.name}은(는) 입을 벌렸으나, 끝내 단 한 마디도 내뱉지 못했다.`,
      );
      await era.printAndWait('졌다.');
      await era.printAndWait(
        `${you.name}은(는) 떨리는 손으로 관중석 난간을 붙잡으며 쓰러지지 않으려 애썼다.`,
      );
      await era.printAndWait(
        '주변 사람들이 심볼리 루돌프의 입착을 축하하며 인사를 건네왔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 겉치레를 할 여유조차 없이 곧장 경기장을 빠져나왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지하 통로를 향해 달렸다. 레이스가 끝나면 우마무스메들이 대기실로 돌아간다는 것을 알기 때문이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 숨을 헐떡이며 ${luna.name}의 대기실 문 앞에 도착했지만, 문은 아무리 밀어도 열리지 않았다.`,
      );
      era.printButton('「루나?!」', 1);
      era.printButton('「폐하!!!」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `문 너머에서 구토하는 소리가 들려왔다. ${you.name}은(는) 누군가에게 머리를 세게 얻어맞은 듯한 충격을 받았다.`,
      );
      await luna.say_and_wait('괜찮아………… 잠시 시간만 주면…………');
      await luna.say_and_wait('난……………………………………');
      await era.printAndWait(
        `${you.name}은(는) 문을 두드렸지만, 들려오는 것은 문 너머 ${luna.teen_sex_title}의 구토와 흐느낌뿐이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무력하게 바닥에 주저앉았다…… ${you.name}은(는) 자신이 루나의 기대를 저버렸음을 깨달았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}에게 아무런 도움도 되지 못했다.`,
      );
      await era.printAndWait(`당신들은…… 패배했다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_transform: (() => {
    const title = '해와 달의 교대';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 皇帝へ切り替えるか
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () =>
            luna.say_and_wait('그래…… 우리의 소원을 위해서라면 견뎌 내겠어.'),
          () => luna.say_and_wait('……안아 줘…… 혼자 마주하고 싶지 않아……'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(`${you.actual_name}, 꼭 이렇게 해야만 해?`),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => luna.say_and_wait('…………………………………………나는 누구지?'));
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('꿈에 들 시간인가……?'),
          () =>
            emperor.say_and_wait(
              '대기만성이라 해도 갈고닦는 노력은 필요한 법이지.',
            ),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('꿈에서 깰 시간이다.'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => emperor.say_and_wait('에덴을 향해 전진하라!'));
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '진격의 시작';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `심볼리 가문과 간단히 상의한 뒤, ${you.name}은(는) 루나의 데뷔전을 신청했다.`,
      );
      await era.printAndWait('바로 재팬컵 당일이다.');
      await era.printAndWait(
        `루나는 ${you.name}의 판단을 듣고 미간을 찌푸렸으나, 결국 반대하지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이것이 상당히…… 악의적이라는 것을 알았지만, 달리 도리가 없는 선택이었다.`,
      );
      await era.printAndWait(
        '일본에는 자신감을 되찾을 계기가 필요했다. 설령 미래에 희망을 거는 것뿐일지라도.',
      );
      await era.printAndWait(
        `그렇기에 경쟁이라 부르기도 민망한 레이스를 목격했을 때, ${you.name}은(는) 본능적으로 안도의 한숨을 내쉬었다.`,
      );
      await era.printAndWait(
        `정신을 차리고 보니 어느새 두 손을 꽉 쥐고 있었다.`,
      );
      await you.say_and_wait(
        '내가 누구한테 주먹이라도 휘두르려는 건가? 젠장……',
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 믿기지 않는다는 듯 자신의 손을 바라보았고, 시야가 떨리는 것을 느꼈다.`,
      );
      await era.printAndWait(
        `그뿐만 아니라, ${you.name}은(는) 점점 입안이 마르고 현기증이 나는 것을 느꼈다.`,
      );
      await era.printAndWait(
        `황제. 황제는 얼마나…… 얼마나…… 얼마나…… 강한 것인가!!!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지금 이 기분을 형언할 수 없었지만, 단 한 가지는 확실히 알 수 있었다——`,
      );
      await era.printAndWait(`${you.name}은(는) 이토록 비겁한 자다.`);
      await era.printAndWait(
        `그렇지 않다면 ${you.name}의 이 미소를, 그리고 외국인들의 경악 섞인 비명을 들었을 때의 이 기쁨을 어떻게 설명할 수 있겠는가?`,
      );
      era.printButton(
        '（전 세계 사람들에게 한 가지 사실을 깨닫게 하기 위해.）',
        1,
      );
      era.printButton('（보았는가? 세계여——）', 2);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 호탕하게 웃었다.`);
      era.printButton(`「루나, ${luna.sex}는 세계를 휩쓸 거야.」`, 1);
      era.printButton(`「황제, ${luna.sex}는 세계를 휩쓸 거야!」`, 2);
      await era.input();
      await era.printAndWait('그날, 모든 이들이 마음을 빼앗겼다.');
      await era.printAndWait(
        `그날, 루나는 돌아와서 ${you.name}과(와) 축하하는 대신, 그저 슬픈 듯 ${you.name}의 품으로 뛰어들었다.`,
      );
      await era.printAndWait(
        `그날, 일본의 ${luna.uma_sex_title}는 다시 한번 재팬컵에서 패배했다.`,
      );
      await era.printAndWait(
        '괜찮아, 괜찮아…… 루나만 있다면 모든 것이 잘될 거야.',
      );
      await era.printAndWait(
        `${you.name}은(는) 루나를 위로했고, 모든 걱정은 연기처럼 사라졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  saud_cup_win: (() => {
    const title = '파죽지세';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `${chara17.sex}는 계획대로 레이스를 승리로 이끌었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 곁눈질하자 동료들의 모습이 보였다.`,
      );
      await era.printAndWait(
        '담당이 돌아오면 애써 태연한 척해야겠지만, 아직은 시간이 조금 남아 있었다.',
      );
      await era.printAndWait(
        `그렇기에 ${you.name}은(는) 그들의 깊은 한숨과, 자신을 향한 선망 혹은 질투 섞인 시선을 탓하지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 심볼리 루돌프의 트레이너다. ${chara17.sex}가 승리할 것이고, ${you.name} 또한 승리할 것이다.`,
      );
      await era.printAndWait('하지만');
      era.printButton(
        i_emperor ? '「개선을 축하드립니다……!」' : '「수고했어……!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${chara17.name}의 귀환을 보고 인사하려던 참에, 다른 ${chara17.uma_sex_title}가 ${chara17.sex}를 맞이했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 저도 모르게 긴장했다——마루젠스키였다.`,
      );
      await era.printAndWait(`만약 이 타이밍에 ${chara17.name}를 자극한다면——`);
      await era.printAndWait(
        '그러나 다행히도 두 사람은 짧은 대화를 나누며 미소를 지어 보였다.',
      );
      await era.printAndWait(
        `돌아온 ${chara17.name}는 여전히 기쁨에 들떠 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 알 수 있었다. ${chara17.sex}의 미소는 승리 때문이 아니라, 방금 마루젠스키와 나눈 대화 때문이라는 것을.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '그토록 강한 괴물이 짐의 사냥을 기다리고 있군——',
        );
      } else {
        await chara17.say_and_wait(
          '선배님께 인정을 받다니, 특히 마루젠 선배님께 인정을 받은 건 내게 정말 큰 의미가 있어.',
        );
      }
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 모든 우마무스메 중에서도 마루젠스키는 압도적인 강함으로 이름이 높다는 것을.`,
      );
      await era.printAndWait(
        `하지만 ${chara17.name}의 트레이너로서, ${you.name}은(는) 단 한 가지만은 확신했다.`,
      );
      era.printButton('「이기는 건 너야.」', 1);
      era.printButton('「그때가 되면, 『황제』의 실력은 더욱 증명되겠지.」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name}의 말에 놀란 듯, ${chara17.name}는 살며시 미소 지었다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '제법 그럴싸한 말을 하는군. 개선하도록 하지!',
        );
      } else {
        await chara17.say_and_wait(
          '이게 바로 본능이 자극받았다는 걸까? 설령 내가 더 이상 달리고 싶지 않더라도, 여전히 전율을 느낄 수 있네.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '신년의 포부';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '루나와 「공범」이 된 후, 어느덧 새로운 한 해가 밝았다.',
      );
      await era.printAndWait(
        `시도 때도 없이 찾아오는 불안과 공포 탓에 ${you.name}은(는) 밤잠을 설치기 일쑤였다.`,
      );
      await era.printAndWait(
        `하지만 신년의 차가운 바람이 불어오자, ${you.name}은(는) 조금은 용기가 생기는 것 같았다.`,
      );
      await era.printAndWait(
        `무엇보다, 화려한 설빔을 차려입은 루나가 ${you.name}을(를) 향해 종종걸음으로 다가오고 있었다.`,
      );
      await era.printAndWait(
        `${luna.sex}는 마치 항구로 들어오는 배처럼 당신의 품속으로 뛰어들었다.`,
      );
      await luna.say_and_wait(
        '이대로 더 계속된다면, 아무래도 황제에게 대신 부탁해야 할지도 모르겠네.',
      );
      await era.printAndWait(
        `${you.name}은(는) 어쩔 수 없다는 듯 ${luna.sex}의 머리카락을 쓰다듬으며 고운 눈송이를 털어주었다.`,
      );
      await era.printAndWait(
        `조금이라도 빨리 ${you.name}과(와) 단둘이 있고 싶었는지, 루나는 오는 길에 우산조차 쓰지 않은 모양이었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 루나의 이마에 입을 맞추자, 답례로 ${luna.sex}는 ${you.name}의 어깨에 머리를 기대었다.`,
      );
      await era.printAndWait('창밖으로 흩날리는 눈꽃을 바라보며.');
      await luna.say_and_wait(
        '올해는 드디어 클래식 3관에 도전하는 해네. 이걸 따내야만 나는……',
      );
      await era.printAndWait(
        `진지한 표정의 루나를 보며 ${you.name}은(는) 깊게 숨을 들이마시고 ${luna.sex}의 손을 맞잡았다.`,
      );
      await era.printAndWait(
        `어떤 상황에서도 ${you.name}이(가) 루나의 곁에 있겠다는 무언의 약속이었다.`,
      );
      await era.printAndWait(
        `루나는 행복과 희망이 가득한 눈으로 ${you.name}을(를) 올려다보았다.`,
      );
      era.printButton(
        '「현명하고 올곧게, 언제나 최선의 선택을 하길 바라.」（지능+40）',
        1,
      );
      era.printButton(
        '「몸과 마음을 모두 소중히 여기며 건강하길 바라.」（스태미나+40）',
        2,
      );
      era.printButton(
        '「황제가 온갖 무예를 익혀 모든 기교를 발휘하길 바라.」（스킬 Pt+80）',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait(
        '전부 행복하고 아름다운 소원들이네…… 그럼 나도 소원이 하나 있어.',
      );
      await era.printAndWait(
        `루나가 ${you.name}의 얼굴을 어루만졌다. ${you.name}은(는) ${luna.sex}의 체온과 영혼 속의 갈망을 느낄 수 있었다.`,
      );
      await luna.say_and_wait(
        '그대가 만수무강했으면 좋겠어. 그래야 영원히 내 곁에 있어 줄 수 있을 테니까.',
      );
      await era.printAndWait(`${you.name}은(는) 하하하 웃음을 터뜨렸다.`);
      await luna.say_and_wait('그리고, 썰렁한 농담을 더 많이 들을 수 있기를.');
      await era.printAndWait(`${you.name}의 웃음소리가 뚝 끊겼다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '숨겨진 투혼';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('우선은 첫 번째 왕관이다.');
      if (i_emperor) {
        await era.printAndWait(
          `${you.name}과(와) 똑같이 이 기쁨을 되새기듯, 황제는 손가락 하나를 높이 치켜들었다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}과(와) 똑같이 이 기쁨을 되새기듯, 루나는 고개를 들고 길게 숨을 내뱉었다.`,
        );
      }
      await era.printAndWait(
        '이토록 압도적인 강함, 이토록 의문의 여지가 없는 강함.',
      );
      await era.printAndWait(
        '관중들은 전설의 개막을 알리는 듯한 광경에 어느 때보다 뜨거운 환호를 보냈다.',
      );
      era.printButton('「어쩌면 정말 실현될지도 몰라…… 황제라면.」', 1);
      era.printButton('「어쩌면 정말 실현될지도 몰라…… 루나라면.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 기억하고 있었다. 그날 루나가 ${you.name}에게 했던 말을.`,
      );
      await luna.say_and_wait(
        `모든 ${chara17.uma_sex_title}가 행복해질 수 있는 세계를 만들자.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ts_47_17: (() => {
    const title = '불협화음';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        '목표인 ',
        toky_yus,
        '이(가) 코앞으로 다가왔고, 훈련도 마지막 단계에 접어들었다.',
      ]);
      await era.printAndWait([
        chara17.get_colored_name(),
        '이(가) 트레이닝 코스를 질주하자, 구경하던 ',
        chara17.uma_sex_title,
        '와 트레이너들에게서 감탄이 쏟아졌다.',
      ]);
      await era.printAndWait(
        `트랙을 돌고 또 돌 때마다, ${you.name}은(는) ${chara17.name}의 컨디션이 더없이 좋음을 깨달았다. 달리는 얼굴에는 미소까지 떠올랐다.`,
      );
      await era.printAndWait(
        `그럼에도 불구하고, ${you.name}의 마음 한구석에는 커다란 불안감이 자리 잡고 있었다.`,
      );
      await era.printAndWait([
        sats_sho,
        ' 이후 루나의 어깨에 지워진 짐은 산처럼 무거워졌고, 그 부담은 갈수록 걷잡을 수 없이 커져만 갔다.',
      ]);
      await era.printAndWait(
        `어쩌면 ${chara17.name}은(는) 겉보기만큼 평온하지 않을지도 모른다.`,
      );
      if (i_emperor) {
        era.printButton(
          '「폐하, 충분히 즐기신 듯하오니 부디 옥체를 보존하시옵소서.」',
          1,
        );
      } else {
        era.printButton('「오늘 훈련은 여기까지 하자.」', 1);
      }
      await era.input();
      await era.printAndWait(
        `한 바퀴를 다 돌았을 때, ${you.name}이(가) 큰 소리로 외쳤다.`,
      );
      await era.printAndWait(
        `${you.name}의 말을 들은 ${chara17.name}는 발걸음을 멈추었다.`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 황제가 ${you.name}에게 다가왔다. 어째서인지 그녀의 즐거웠던 표정은 분노로 바뀌어 있었다.`,
        );
        await chara17.say_and_wait(
          '광대여, 짐의 흥을 깬 대가로 합당한 이유를 대라.',
        );
        era.printButton('「폐하, 너무 흥분하신 것 같습니다.」', 1);
        era.printButton('「사냥이 가까워질수록 더욱 냉정해지셔야……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${you.name}은(는) 황제가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) ${chara17.sex}의 트레이너가 된 것도, ${chara17.sex}를 황제가 되도록 부추긴 것도.`,
        );
        await era.printAndWait(
          `처음부터 끝까지 ${you.name}이(가) 두려워한 것은 루나가 자기 안의 야수에게 짓눌리는 일뿐이었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 자신을 비웃듯 바라보는 황제를 향해 고개를 숙였다. 그녀에게서 뿜어져 나오는 산처럼 짓누르는 압박감에 ${you.name}은(는) 식은땀을 흘렸다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로…… 지금 이 순간, 훈련 상태보다 ${you.name}이(가) 지키고 싶은 것은 루나의 몸이었다.`,
        );
        await era.printAndWait(
          `${you.name}을(를) 바라보던 황제는 차갑게 코웃음을 치며 경기장을 떠났다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 본능적으로 ${chara17.sex}에게 손을 뻗었지만, ${chara17.sex}의 걸음이 너무 빨라 ${you.name}은(는) ${chara17.sex}를 붙잡지 못했다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 한숨을 내쉬며 그녀의 뒤를 쫓아 뛰어갔다.`,
        );
      } else {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 루나가 ${you.name}에게 다가왔다. 어째서인지 ${chara17.sex}의 활기찼던 표정은 어둡게 가라앉아 있었다.`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}, 내 컨디션은 아주 좋아. 일본 더비가 얼마 남지 않았으니 더 박차를 가해야 해!`,
        );
        era.printButton('「이해해. 하지만 이럴 때일수록 냉정해져야 해.」', 1);
        era.printButton('「네 상태가 걱정돼서 그래……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${you.name}은(는) 루나가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) ${chara17.sex}의 트레이너가 된 것도, ${chara17.sex}를 황제가 되도록 부추긴 것도.`,
        );
        await era.printAndWait(
          `처음부터 끝까지 ${you.name}이(가) 두려워한 것은 루나가 자기 안의 야수에게 짓눌리는 일뿐이었다.`,
        );
        await era.printAndWait(
          `하지만 처음 만났을 때 속마음을 터놓은 이후로, 루나는 좀처럼 ${you.name}에게 속내를 드러내지 않았다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로. 지금 이 순간, 훈련 성과보다 ${you.name}이(가) 알고 싶은 것은 루나의 진심이었다.`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          '을(를) 바라보며 루나는 잠시 생각에 잠겼다. ',
          chara17.sex,
          '는 ',
          you.get_colored_name(),
          '에게 미소를 지었다.',
        ]);
        await chara17.say_and_wait(
          '이 정도조차 해내지 못한다면, 우리의 이상은 결코 실현될 수 없어.',
        );
        await era.printAndWait(
          `${you.name}은(는) 남몰래 이를 악물며 무어라 더 말하려 했다.`,
        );
        await era.printAndWait(
          `루나는 발을 구르며 다시 트랙으로 향하려 했으나, ${you.name}의 걱정 어린 시선을 이기지 못하고 결국 멈춰 섰다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 건넨 수건과 물을 받아 들고 루나는 작게 고개를 끄덕였다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  re_double_crowns: (() => {
    const title = '천하무적';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('이것으로 두 번째 왕관이다!');
      await era.printAndWait('꿈을 실현하는 데 한 걸음 더 다가섰다.');
      await era.printAndWait(
        '사람들은 더비에서 심볼리 루돌프가 얼마나 강력한 실력을 발휘했는지 열띠게 토론하고 있었다.',
      );
      await era.printAndWait('이 얼마나 믿기지 않는 광경인가!');
      if (i_emperor) {
        await era.printAndWait(
          '마치 대중들과 함께 이 놀라움을 만끽하듯, 황제는 손가락 두 개를 높이 치켜들었다.',
        );
      } else {
        await era.printAndWait(
          '마치 대중들과 함께 이 놀라움을 만끽하듯, 루나는 진심 어린 미소를 지어 보였다.',
        );
      }
      await era.printAndWait(
        '그 후 며칠 동안, 사람들은 더비에서 심볼리 루돌프가 보여준 실력이 얼마나 대단했는지 입을 모았다.',
      );
      await era.printAndWait(
        `${chara17.sex}의 이름은 역사 속 위대한 우마무스메들과 나란히 거론되었다.`,
      );
      await era.printAndWait(
        '한때 찬란하게 빛났으나 결국은 희미해져 간 스타들.',
      );
      await era.printAndWait('하지만 심볼리 루돌프는 어딘가 다른 것 같았다.');
      await era.printAndWait(
        `오직 ${you.name}만이 알고 있었다. 더비에서 ${chara17.sex}가 한층 더 깊은 단계에 발을 들였다는 것을——`,
      );
      await era.printAndWait('영역.');
      await era.printAndWait(
        `지금 이 순간에도, 그 이야기를 떠올리면 ${you.name}은(는) 깊은 경외심을 느낀다.`,
      );
      await era.printAndWait(
        `하지만 다시 생각해보니, ${you.name}은(는) 왠지 모를 씁쓸함을 느꼈다.`,
      );
      await era.printAndWait(
        '선구자들 또한 해냈던 일이지만, 시간은 조금의 자비도 없이 흘러 모든 위대함은 결국 추억이 되어버렸다.',
      );
      era.printButton(
        '「지금도 활동하며 본격화의 힘을 조금이라도 유지하고 있는 건 마루젠스키 정도뿐이지.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}과(와) ${chara17.name}는 대화를 나누었다.`,
      );
      await era.printAndWait(
        `본격화가 사라지면 아무리 강한 ${chara17.uma_sex_title}라도 평범한 이들 속에 묻혀 희미한 기억만을 남긴다.`,
      );
      await era.printAndWait(
        `이것은 거부할 수 없는 순리이며, 언젠가는 ${chara17.name} 또한……`,
      );
      await era.printAndWait(
        `${you.name}의 흥분 뒤에 숨겨진 비탄을 느낀 듯, ${chara17.name}는 조용히 당신을 바라보았다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('정벌은 결코 멈추지 않을 것이다.');
      } else {
        await chara17.say_and_wait('우리의 꿈…… 나는 해답을 찾은 것 같아.');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그 말이 무슨 뜻인지 이해하지 못했지만, ${chara17.name}는 설명해줄 생각이 없어 보였다.`,
      );
      await chara17.say_and_wait('에덴……');
      era.drawLine();
      await chara17.print_and_wait(
        `${you.name}과(와) ${chara17.name}이(가) 헤어진 뒤, ${chara17.sex}는 홀로 학원의 안뜰로 향했다.`,
      );
      await chara17.print_and_wait(
        '세 여신상을 바라보며 영역에 발을 들였던 광경을 회상하던, 세대의 정점에 선 우마무스메는 주먹을 꽉 쥐었다.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('굴레란 결코 존재해서는 안 되는 것이다.');
      } else {
        await chara17.say_and_wait(
          `나는 반드시 나와 ${you.actual_name}의 소원을 이룰 거야, 설령 내가……`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' 이(가) ',
        { color: buff_colors[1], content: ' [영역]', fontWeight: 'bold' },
        '에 눈을 떴다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('분명 여름 합숙 기간인데도——');
      await era.printAndWait(
        `${you.name}은(는) 우마무스메들에게 겹겹이 둘러싸인 루나를 보며 식은땀을 흘렸다.`,
      );
      await era.printAndWait(
        '만인의 주목을 받는 학생회장으로서 학생들의 자율 훈련을 지도하고, ',
      );
      await era.printAndWait(
        '한계에 부딪힌 학생들을 돕고, 때로는 직접 시범을 보였다.',
      );
      await era.printAndWait(
        `그뿐만 아니라, ${luna.sex} 본인의 훈련에도 누구보다 열심이었다.`,
      );
      await era.printAndWait(
        '밤이 되어서도 루나는 두 기숙사 사감들을 도와 업무를 분담하고 있었다.',
      );
      await luna.say_and_wait(
        '학원의 문제는 곧 나의 문제이니, 신경 쓰지 않아도 돼.',
      );
      await era.printAndWait(
        `그 말을 마친 ${luna.sex}는 솔선수범하듯 일찍 침실로 돌아가 휴식을 취했다.`,
      );
      await era.printAndWait(
        `하지만 그 순간, ${you.name}의 스마트폰이 타이밍 좋게 울렸다.`,
      );
      await luna.say_and_wait(
        '왠지 그대의 시선이 한 번도 나에게서 떨어지지 않은 것 같은데.',
      );
      await era.printAndWait(
        `루나가 보낸 메시지를 보며 ${you.name}은(는) 빙그레 미소 지었다.`,
      );
      era.printButton(
        '「지금 거신 번호는 통화 가능 지역을 벗어나 있습니다. 잠시 후 다시 걸어 주세요.」',
        1,
      );
      era.printButton('「네가 너무 내 눈길을 사로잡아서 그래.」', 2);
      await era.input();
      await luna.say_and_wait(
        '말은 참 잘한다니까. 하지만 학원의 건전한 분위기를 위해, 나 이외의 아이들에게는 삼가주길 바라.',
      );
      await luna.say_and_wait('맞다.');
      await luna.say_and_wait('그대는 늘 그랬지!');
      await luna.say_and_wait(
        '심볼리 가문에서도 감언이설을 늘어놓다니, 용케 살아남았네.',
      );
      await luna.say_and_wait(
        '그나저나, 난 이제 자야겠어. 내일 아침 일찍 훈련하러 가자.',
      );
      await era.printAndWait(
        `${you.name}은(는) 깜빡이는 스마트폰 화면을 보다 어느새 잠이 들었다.`,
      );
      await era.printAndWait(
        `다음 날 아침, 루나가 훈련을 나가려는 채비를 하자 ${you.name}이(가) ${luna.sex}를 불러세웠다.`,
      );
      await era.printAndWait(
        `여름 합숙이 시작되기 전부터 ${luna.sex}는 이미 빽빽한 업무 일정을 소화해 왔고, 훈련 또한 거르지 않았다.`,
      );
      await era.printAndWait(
        `피로는 반드시 축적되기 마련이라고 ${you.name}은(는) 확신했다.`,
      );
      era.printButton('「맛있는 걸 먹고 더 강해지자.」（파워+10）', 1);
      era.printButton('「가끔은 훈련을 미뤄 보는 건 어때?」（근성+10）', 2);
      const ret = await era.input();
      await era.printAndWait('루나가 멍하니 멈춰 섰다.');
      await luna.say_and_wait('나를 걱정해 주는 거야?');
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕였다. 루나는 창가에 기대어 바다와 백사장을 바라보았다.`,
      );
      await era.printAndWait(
        `아침 햇살이 ${luna.sex}의 얼굴을 가득 비추어, 당신에게는 ${luna.sex}의 표정이 보이지 않았다.`,
      );
      await luna.say_and_wait(
        '타인을 위해 노력하겠다는 마음은 언제나 아름답지.',
      );
      await luna.say_and_wait(
        '그렇긴 해도, 우리는 국화상을 위해 정진해야만 해.',
      );
      await luna.say_and_wait(
        '하지만 그대의 눈빛이 이미 말하고 있네—— 『더 훈련하는 건 몸에 해롭다』고, 그렇지?',
      );
      await luna.say_and_wait(
        '하지만 더비 이후로 나는 더욱 확신하게 됐어. 우리의 이상을 실현하려면 평범한 노력으로는 부족하다는 걸.',
      );
      await luna.say_and_wait(
        '그대, 나를 너무 과잉보호하는 거 아니야? 내가 고작 여기서 쓰러질 만큼 약해 보여?',
      );
      era.printButton('「……！」', 1);
      await era.input();
      await era.printAndWait(
        `당황한 ${you.name}을(를) 보며 루나는 무언가 깨달은 듯 ${you.name}의 팔을 붙잡았다.`,
      );
      await luna.say_and_wait(
        '이건 마치 그대한테 화풀이하는 꼴이 되어버렸네……',
      );
      await era.printAndWait(
        `루나는 ${you.name}에게 사과하는 듯했지만, ${you.name}은(는) 알고 있었다. ${luna.sex}가 타협하지 않았다는 것을.`,
      );
      await era.printAndWait(
        `${luna.sex}의 의지는 확실하게 ${you.name}의 마음속으로 전해졌다.`,
      );
      await luna.say_and_wait('오늘은 훈련하지 않을게. 안심해.');
      await era.printAndWait(`그러고는 루나는 ${you.name}의 곁을 떠났다.`);
      await era.printAndWait(
        `${you.name}은(는) 붙잡지 못했다. ${you.name}은(는) 가슴을 누른 채 한참 뒤에야 정신을 차리고 텅 빈 복도를 떠났다.`,
      );
      await era.printAndWait(
        `그날 하루 종일, ${you.name}은(는) 루나를 볼 수 없었다.`,
      );
      await era.printAndWait(
        `밤이 되어 ${you.name}은(는) 스마트폰을 들어 루나에게 메시지를 보냈다.`,
      );
      era.printButton('「내가 언제나 네 곁에 있을게.」', 1);
      era.printButton('「루나, 나는 언제나 너를 사랑해.」', 2);
      await era.input();
      await era.printAndWait(
        '메시지는 읽음으로 표시되었지만, 루나에게선 끝내 답장이 오지 않았다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 애타게 기다렸지만, 밤이 다 지나도록 루나의 회신은 없었다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  re_triple_crowns: (() => {
    const title = '3관 달성';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait('포효하듯 전 세계가 열광적으로 환호했다.');
      await era.printAndWait(
        `또 한 명의 ${chara17.uma_sex_title}가 이 위업을 이루었다!`,
      );
      await era.printAndWait(
        '때맞춰 관현악단이 누구나 알고 있는, 그리고 이 상황에 아주 잘 어울리는 교향곡을 연주하기 시작했다.',
      );
      await era.printAndWait('【황제】', { color: emperor.color });
      await era.printAndWait(
        `${you.name}은(는) 뜨거운 눈물을 흘리며 허리를 굽히고 고개를 떨구었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 약속과 꿈은 아직 멀었다는 것을.`,
      );
      await era.printAndWait('하지만 지금은 잠시만…… 아주 잠시만이라도……');
      await era.printAndWait(
        `${you.name}은(는) 고개를 숙인 채, 아무도 모르는 곳에서 소리 높여 울었다.`,
      );
      era.printButton('「축하해……」', 1);
      era.printButton('「역사상…… 가장 위대한 활약이었어……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${chara17.name}가 한없이 자랑스러웠다!`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `${you.name}과(와) 마음이 통한 듯, 황제는 손가락 세 개를 높이 치켜들었다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}과(와) 마음이 통한 듯, 루나는 행복의 눈물을 흘렸다.`,
        );
      }
      await era.printAndWait(
        `레이스가 끝난 후 한참이 지나도록, 숨을 헐떡이는 ${chara17.name}는 경기장을 떠나지 않았다.`,
      );
      await era.printAndWait(
        `사람들은 ${chara17.sex}가 영광을 조금 더 오래 누리고 싶은 것이라 생각했다.`,
      );
      await era.printAndWait(
        `하지만 ${chara17.name}의 하늘을 찌를 듯한 투지 아래에서, ${you.name}은(는) 문득 알아차렸다. ${chara17.sex}의 발걸음이 흔들리고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 주먹을 꽉 쥐었다. 이전에 느껴본 적 없는 오한이 ${you.name}의 몸을 휩쓸었다.`,
      );
      era.printButton('「설마……」', 1);
      era.printButton('「부상인가……」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `그날 밤, ${chara17.name}는 홀로 안뜰의 세 여신상 아래를 찾았다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '너희가 만든 요람(감옥)이 아무리 견고할지라도……',
        );
      } else {
        await chara17.say_and_wait(
          '조금만 더, 조금만 더 하면 들어갈 수 있는데……',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_47_41: (() => {
    const title = '급전직하';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `차가운 달빛 아래, ${you.name}은(는) 초조하게 병실 밖 복도를 서성였다.`,
      );
      await era.printAndWait(
        `한참이 지나서야 ${you.name}은(는) 간호사가 부르는 소리를 들었다.`,
      );
      await era.printAndWait(
        `다급히 병실로 뛰어 들어간 ${you.name}은(는) 침대에 누워 잠든 루나를 발견했다.`,
      );
      await era.printAndWait(
        `${luna.sex}의 얼굴은 창백했지만 호흡은 고른 것을 보고, ${you.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      await era.printAndWait(
        '국화상 이후, 루나는 긴급히 심볼리 가문의 전용 병원으로 이송되었다.',
      );
      await era.printAndWait('검사 결과, 의사가 내린 진단명은——과로였다.');
      await era.printAndWait(
        `몸은 쇠약해졌지만 루나가 충분히 쉰다면, ${luna.sex}는 여전히 재팬컵에 출주할 수 있었다.`,
      );
      era.printButton('「재팬컵인가——」', 1);
      await era.input();
      await era.printAndWait(
        `루나에게는 안정이 필요했기에, ${you.name}은(는) ${luna.sex}의 상태를 확인한 뒤 조심스레 문밖으로 나왔다.`,
      );
      await era.printAndWait(
        `창밖의 밤풍경을 바라보며 ${you.name}은(는) 머리를 감싸 쥐었다.`,
      );
      await era.printAndWait(
        '재팬컵. 모든 일본 우마무스메들의 숙원…… 안방에서 열리는 가장 거대한 레이스임에도, 번번이 해외 강호들에게 승리를 빼앗겨 온 곳.',
      );
      await era.printAndWait(
        `루나와 ${you.name}의 꿈을 이루기 위해, 모든 우마무스메가 행복해질 수 있는 세상을 만들기 위해.`,
      );
      await era.printAndWait(
        '재팬컵은 루나가 반드시 넘어야만 하는 시련이었다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 뒤를 돌아 문을 바라보았다. 루나가 저 문 너머 침대에서 쉬고 있다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 한숨을 쉬었다. ${luna.sex}의 창백한 얼굴을 떠올리자, ${you.name}의 굳건했던 마음도 흔들렸다.`,
      );
      await era.printAndWait(
        '우마무스메가 달리는 모습은 무엇보다 아름답지만, 그 안에는 진검승부가 오가는 전장 못지않은 위기가 도사리고 있다.',
      );
      await era.printAndWait(
        '한순간의 방심, 찰나의 실수만으로도 우마무스메는 영영 돌이킬 수 없는 구렁텅이에 빠질 수 있다.',
      );
      await era.printAndWait(
        `루나는 아직 젊다. ${luna.sex}에게는 아직 기회가 있다…… 꼭 이번이어야 할 필요는 없다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 스스로를 설득하려 했다. 하지만 ${you.name}은(는) 알고 있었다. 온 일본이 루나——심볼리 루돌프에게 거는 기대는 ${luna.sex}의 출주 포기를 용납하지 않을 것이다.`,
      );
      await era.printAndWait(
        '루나 본인 또한 결코 포기하고 싶어 하지 않을 것이다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 초조하게 머리를 헝클어뜨렸다. 골똘히 생각하는 사이 졸음이 ${you.name}을(를) 덮쳤다.`,
      );
      era.printButton('「내일 다시 루나와 이야기해보자……」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 역시 지칠 대로 지쳐 있었다.`);
      await era.printAndWait(
        `그러나 다음 날, 눈을 떴을 때 ${you.name}은(는) 자신의 어깨에 이불이 덮여 있는 것을 발견했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 옆의 문을 홱 바라보았다. 문은 살짝 열려 있었고, 병실 안에서 쉬고 있어야 할 루나는 흔적도 없이 사라져 있었다.`,
      );
      era.printButton('「설마?!」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 깨달았다. 루나는 행동으로 ${you.name}에게 ${luna.sex}의 결의를 보여 준 것이다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name}이(가) 학생회실 문을 열자, 그 안은 인산인해를 이루고 있었다. 서무들이 각종 서류를 들고 루나에게 최근 업무를 보고하고 있었다.`,
      );
      await era.printAndWait(
        `루나는 ${you.name}을(를) 바라보며 입술을 살짝 깨물었다.`,
      );
      await luna.say_and_wait('트레이너, 무슨 일인가?');
      await era.printAndWait(
        `${you.name}은(는) 숨을 헐떡이며 모두가 자신을 빤히 바라보는 것을 느꼈다. 결국 어색하게 웃어넘길 수밖에 없었다.`,
      );
      era.printButton('「두고 가신 물건이 있어서……」', 1);
      era.printButton('「좀 더 쉬어야 한다고……」', 2);
      await era.input();
      await era.printAndWait(
        `말을 채 끝내기도 전에, ${you.name}은(는) 자신을 응시하는 루나의 보랏빛 눈동자에 간절한 애원이 서려 있음을 발견했다.`,
      );
      await luna.say_and_wait('난 괜찮아.', true);
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}의 입 모양을 읽었다. ${you.name}은(는) ${luna.sex}의 뜻을 거스르지 못했다. 어릴 때부터 줄곧……`,
      );
      era.printButton('「아니, 별일 아니야.」', 1);
      era.printButton('「미안해……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 넋이 나간 채 학생회실을 떠났다. ${you.name}은(는) 알고 있었다. 학원에는 루나가 필요하다.`,
      );
      await era.printAndWait(
        '루나도 알고 있었다. 지금 일본은 심볼리 루돌프를 잃을 수 없다.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '무적의 위용';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        '재팬컵과는 달리, 매년 열리는 아리마 기념—— 한 해를 마무리하는 그랑프리이자 가장 주목받는 이 레이스는 단순히 등록만으로 출주가 결정되는 것이 아니다.',
      );
      await era.printAndWait(
        '매년 레이스 전, 일본 전역의 팬들이 투표를 진행하여 대중이 인정하는, 레이스에 나갈 자격이 있는 우마무스메를 선출한다.',
      );
      await era.printAndWait(
        `즉, 출주할 수 있는 ${chara17.uma_sex_title}는 모두 사람들에게 깊은 인상을 남긴 강자들뿐이다.`,
      );
      await era.printAndWait(
        '루나는 높은 득표수로 선발되었지만 최고 인기는 차지하지 못했다.',
      );
      await era.printAndWait(
        '사람들은 수군거렸다. 재팬컵이 당대의 강자들이 세계의 거물들에 맞서는 자리라면, 아리마는 국내 최강자를 가리는 자리였다.',
      );
      era.printButton(
        '（투표가 참가자의 진정한 실력을 다 반영하는 건 아니야.）',
        1,
      );
      era.printButton(
        '（하지만 투표는 분명 어느 정도의 현실을 투영하고 있어.）',
        2,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 걱정스러운 마음으로 ${chara17.name}의 대기실로 돌아갔다. ${chara17.sex}는 눈을 감고 정신을 집중하고 있었다.`,
      );
      await era.printAndWait(
        '즉, 여전히 누군가는 루나가 경험이 풍부한 선배들 앞에서 고전할 것이라 생각한다는 의미다.',
      );
      await era.printAndWait(
        '하지만 그것은 문제를 해결할 방법 또한 단순 명료하다는 뜻이기도 했다.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('짐의 권능을 보여줄 뿐이다.');
      } else {
        await chara17.say_and_wait('해야 할 일은 단 하나뿐이야.');
      }
      await era.printAndWait(
        `${chara17.teen_sex_title}가 눈을 뜨며 나지막이 중얼거렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('새해이기에 더욱 바쁘다.');
      await era.printAndWait(
        `한겨울의 추위 속에서, ${you.name}이(가) 내뱉은 숨결이 금세 하얀 안개로 변했다.`,
      );
      await era.printAndWait(
        `또 한 번 새해가 밝았다. ${you.name}은(는) 루나의 뒤에 서서 ${luna.sex}의 일을 도왔다. 인사를 하고, 선물을 받고, 감사의 말을 전했다.`,
      );
      await era.printAndWait(
        '지인들에게 신년 인사를 건네고, 새해 결의를 다지는 행사를 열며, 작년에 남겨진 업무들을 마무리한다……',
      );
      await era.printAndWait(
        `루나의 업무를 아주 조금 분담했을 뿐인데도, ${you.name}은(는) 정신이 아득해질 지경이었다.`,
      );
      await era.printAndWait(
        `그제야 ${you.name}은(는) 깨달았다. 한 해 전 루나가 왜 황제에게 대신 맡기고 싶어 했는지를.`,
      );
      await luna.say_and_wait(
        '왠지 모르겠지만, 그대 지금 무척 실례되는 생각을 하는 것 같네.',
      );
      await era.printAndWait(
        `한 차례 업무를 끝내고서야 참배할 시간이 생겼다. 길을 걷던 중 루나가 문득 중얼거렸다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 황급히 부정했다. 루나는 긍정도 부정도 하지 않았다. ${luna.sex}는 신사의 종과 북을 바라보다 눈을 감았다.`,
      );
      await era.printAndWait(
        `새로운 일 년, 루나의 소원은 무엇일까? ${you.name}은(는) 묻지 않았다. 원래 소원은 입 밖으로 내뱉으면 이루어지지 않는 법이니까.`,
      );
      await era.printAndWait(
        `의식을 마친 모양이다. 루나는 눈을 뜨고 고개를 치켜들며, ${you.name}의 모습을 따라 하듯 숨을 크게 내뱉었다.`,
      );
      await era.printAndWait(
        `하얀 입김이 흩어졌다. ${luna.sex}는 멍하니 허공을 바라보다 고개를 돌려 두 손을 모으고 ${you.name}에게 지친 미소를 지었다.`,
      );
      await luna.say_and_wait(
        '어쩌면, 나 또한 실례되는 생각을 하고 있었을지도 모르겠네.',
      );
      await era.printAndWait(
        `그 순간, ${you.name}의 얼굴이 확 붉어졌다. 그동안 겪어온 파란만장했던 일들이 떠올라 감회가 새로웠다.`,
      );
      await era.printAndWait(`${you.name}이(가) 정중하게 루나에게 말했다:`);
      era.printButton('「잘 먹고 잘 자서 건강에 신경 쓰길 바라.」', 1);
      era.printButton('「네가 진정한 황제가 되기를 기원할게.」', 2);
      era.printButton(
        '「너무 깊게 생각하지 말고 네가 좋아하는 걸 즐겼으면 좋겠어.」',
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `${you.name}의 축복을 듣고서도 루나는 대답하지 않았다. 그저 살며시 당신의 어깨에 기대어 피곤한 듯 두 눈을 감을 뿐이었다.`,
      );
      await era.printAndWait(
        '이 찰나의 휴식이, 지금 이 순간에는 무엇보다 소중하게 느껴졌다.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '함께 기대어 나아가다';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `새해를 맞아 ${you.name}은(는) 찬 바람을 뚫고 루나와 만나기로 한 장소로 향하고 있었다.`,
      );
      await era.printAndWait(
        `그런데 가는 길에 ${you.name}은(는) 루나가 정문 앞에서 앳되어 보이는 학생과 이야기하는 모습을 발견했다.`,
      );
      await era.printAndWait(
        '학생은 연신 고개를 숙여 인사하더니, 정중하게 감사를 표하고는 자리를 떠났다.',
      );
      era.printButton('「루나 선배님.」', 1);
      era.printButton('「루나 언니?」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name}의 짓궂은 농담에 루나의 얼굴이 살짝 붉어졌다. ${luna.sex}는 나무라는 눈으로 ${you.name}을(를) 보았지만, 싫지는 않은 기색이었다.`,
      );
      await luna.say_and_wait(
        '이제 막 복귀한 아이야. 곧 데뷔전을 치를 예정이거든.',
      );
      await luna.say_and_wait(
        '일월 말이 다 되어서야 학원에 돌아오다니, 그대도 의아하겠지? 대부분은 가을이나 겨울에 데뷔하니까.',
      );
      await luna.say_and_wait(
        '하지만 그전에 우리는 학원에 와서 또래들과 함께 배우고, 또 경쟁해.',
      );
      await luna.say_and_wait(
        '그건 즐거운 일이지만, 그 과정에 상처나 피로가 없으리란 보장은 없지.',
      );
      await era.printAndWait(
        `인적이 드문 곳으로 들어서자 루나의 팔이 ${you.name}의 어깨에 닿았다. ${luna.sex}는 무의식중에 당신에게 몸을 기대는 버릇이 있었다.`,
      );
      await luna.say_and_wait(
        '가혹한 레이스와 훈련을 견디지 못하고 자신에게 실망했을 때, 방학을 맞아 따뜻한 집으로 돌아가면……',
      );
      await luna.say_and_wait('어쩌면 포기하고 싶다는 마음이 싹틀지도 몰라.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 말없이 루나의 이야기를 들었다. 솔직히 당신들——심볼리 루돌프와 트레이너라는 입장에서, ',
        you.get_colored_name(),
        '은(는) 듣기 좋은 말만 늘어놓을 수는 없었다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 많은 ${luna.uma_sex_title}는 루나가 출주한다는 소식을 들으면, ${luna.couple_title}의 첫 반응은 출주 회피였다.`,
      );
      era.printButton(
        '「현실과 고난에 정면으로 맞서는 자가 진정한 용자야.」',
        1,
      );
      era.printButton(
        '「어쩌면 우리가 그들에게 더 많은 도움을 줘야 할지도 몰라.」',
        2,
      );
      await era.input();
      await era.printAndWait(
        `루나가 미소 지으며 ${you.name}을(를) 바라보았다.`,
      );
      await luna.say_and_wait(
        '나도 도망치고 싶다고 생각한 적 있어. 하지만 내 도망칠 곳은 언제나 그대뿐이었던 것 같네.',
      );
      await era.printAndWait(
        `루나가 ${you.name}의 품에 기대어 손가락으로 ${you.name}의 가슴팍을 살짝 찔렀다.`,
      );
      if (ret === 1) {
        await luna.say_and_wait(`루나 선배님도 이제 도망칠 곳이 없네.`);
      } else {
        await luna.say_and_wait(`루나 언니도 이제 도망칠 곳이 없네.`);
      }
      await era.printAndWait(`참 나……`);
      await era.printAndWait(
        `${you.name}은(는) 얼굴을 붉히며 루나의 작은 복수를 기꺼이 받아들였다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '피땀 흘려';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '텐노상(봄)이 다가오고 있다. 최장거리 G1 레이스인 3200m는 우마무스메의 인내심을 시험하는 거대한 관문이다.',
      );
      await era.printAndWait(
        '과거에는 텐노상을 제패한 우마무스메가 곧 최강으로 인정받았으나, 시대가 변하며 여러 레이스에 대한 평가도 달라졌다.',
      );
      await era.printAndWait(
        '그러나 어떤 시대든, 텐노상(봄)이 현재 가장 가혹한 레이스라는 사실만은 변함이 없다.',
      );
      await era.printAndWait(
        '고학년이 된 루나의 학생회 업무는 줄어들기는커녕, 후배들을 지도하고 각종 인터뷰에 응하느라 더욱 늘어만 갔다.',
      );
      await era.printAndWait(
        `${you.name}이(가) 우려를 표해도, 루나는 항상 이것이 자신의 명성에 걸맞은 책임이라고 여겼다.`,
      );
      await era.printAndWait(
        `${you.name}의 생각을 눈치챈 것인지, 바쁜 하루가 끝난 뒤 루나는 ${you.name}을(를) 불러 세웠다.`,
      );
      await luna.say_and_wait('화가 난 거야?');
      era.printButton('「그저 네가 걱정될 뿐이야.」', 1);
      era.printButton('「내게 좀 더 의지해줬으면 좋겠어.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}의 말을 들은 루나가 가볍게 한숨을 내쉬었다.`,
      );
      await luna.say_and_wait('그대도 나를 좀 믿어줘.');
      await era.printAndWait(
        `루나는 ${you.name}을(를) 바라보며 손을 뻗어 ${you.name}의 뺨을 어루만졌다.`,
      );
      await luna.say_and_wait(
        '내가 멈추면, 수많은 이들이 갈피를 잃고 헤매게 될 거야. 나는 계속해야만 해.',
      );
      await luna.say_and_wait('우리는 아직 꿈을 이루지 못했으니까.');
      await era.printAndWait(`${you.name}은(는) 루나의 손을 맞잡았다.`);
      await era.printAndWait(
        `원대한 이상을 이야기하고 있었지만, ${you.name}은(는) 루나의 미간에 서린 깊은 수심을 보았다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 루나와 재회했을 때처럼 숨이 막히는 모습이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 한숨을 내쉬며 고개를 끄덕였다.`,
      );
      await era.printAndWait(
        `——진정 루나를 위해 내가 할 수 있는 일은 무엇일까? 이어지는 며칠 동안 ${you.name}은(는) 그 고민에 잠겼다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '황제의 추락';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '사월이 되면 만인이 기다리던 팬 감사제가 시작된다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 내심 불만이 있었지만, 개막식 직후에는 모의 레이스가 열릴 예정이었다.`,
      );
      await era.printAndWait(
        `모의 레이스라고는 해도 그 치열함만큼은 공식 레이스와 다를 바 없었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 이런 때일수록 ${you.name}은(는) 루나의 몸 상태를 관리하기 어려웠다.`,
      );
      await era.printAndWait('만약 문제라도 생긴다면……');
      await era.printAndWait(
        `하지만 지난 여름 합숙 때의 일이 떠올라 ${you.name}은(는) 차마 루나에게 레이스를 포기하라고 말할 수 없었다.`,
      );
      await era.printAndWait(
        `모의 레이스 시작 전, 루나의 초췌한 기색을 본 ${you.name}은(는) 가슴이 철렁 내려앉았다.`,
      );
      await era.printAndWait(
        '단순한 훈련뿐만 아니라 학생회 업무와 행사 운영까지, 오늘을 위해 루나가 짊어진 짐은 너무나 무거웠다.',
      );
      await era.printAndWait('——좀 쉬어.');
      await era.printAndWait(
        `${you.name}은(는) 곁에 선 루나를 바라보았다. 말이 목에 걸려 결국 한숨만 나왔다.`,
      );
      await luna.say_and_wait('모든 사람이 이 레이스를 기대하고 있어.');
      await luna.say_and_wait(
        '팬들의 환호와 기대, 축복이 이미 은퇴한 선배들의 마음까지 들끓게 하고 있어.',
      );
      await era.printAndWait(
        `${you.name}이(가) 루나를 돌아보자 ${luna.sex}는 깊은 생각에 잠겨 있는 듯했다. 잠시 후 ${luna.sex}가 ${you.name}을(를) 바라보았다.`,
      );
      await luna.say_and_wait('그대도 나에게 무언가 기대하고 있어?');
      era.printButton('「물론, 언제나!」', 1);
      era.printButton('「그냥 좀 쉬었으면 좋겠어……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}의 대답에 루나는 깊은 숨을 내쉰 뒤 ${you.name}의 어깨를 가볍게 두드렸다.`,
      );
      await luna.say_and_wait('금방 다녀올게.');
      await era.printAndWait(
        `${you.name}은(는) 그 자리에 굳어버렸다. 루나가 【지금】 그 상태로 경기장에 나가려 한다는 사실을 뒤늦게 깨달았기 때문이었다.`,
      );
      await era.printAndWait(
        `——결과적으로 루나는 고전했다. 쌓인 피로가 ${luna.sex}의 컨디션을 무너뜨린 것인지도 몰랐다.`,
      );
      await era.printAndWait(`관중석은 술렁거렸다.`);
      await era.printAndWait(
        `황제가 어쩌다 저렇게 망가진 거지? 그런 논란은 몇 주간이나 계속되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_16: (() => {
    const title = '건곤일척';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `내일은 텐노상(봄)이 시작되는 날이다. 하지만 최근 ${you.name}은(는) 루나가 아무리 애써도 【황제】를 불러내지 못한다는 사실을 알아차렸다.`,
      );
      era.printButton('「계속 쌓여온 피로가 결국 한계에 달했어.」', 1);
      era.printButton('「더 이상 자신을 몰아세우지 마!」', 2);
      await era.input();
      await era.printAndWait(
        `학생회실에서 ${you.name}은(는) 이마를 짚고 있는 루나를 걱정스럽게 바라보았다.`,
      );
      await era.printAndWait(
        `${luna.sex}는 머리카락이 헝클어진 채 짙은 다크서클이 내려앉아 있었다.`,
      );
      era.printButton('「전부 내 책임이야……!」', 1);
      era.printButton('「미안해 루나, 내가……」', 2);
      await era.input();
      await luna.say_and_wait('아니, 그대 잘못이 아니야.');
      await era.printAndWait(
        `루나는 고개를 들어 ${you.name}을(를) 바라보았다. ${luna.sex}는 머리가 헝클어지고 눈 밑에는 짙은 그늘이 드리웠으며, 눈물이 ${luna.sex}의 뺨을 타고 흘렀다.`,
      );
      await luna.say_and_wait(
        '꿈을 위해 무모할 정도로 달려왔어. 내 독단적인 고집이 그대까지 끌어들인 거야……',
      );
      await luna.say_and_wait(
        '게다가 그대는 몇 번이고 건강을 챙기라고 말해줬는데, 내가 모든 걸 망쳐버렸어.',
      );
      await luna.say_and_wait(
        '【황제】를 잃어버린 지금의 나로서는 결코 모두를 만족시킬 수 없어.',
      );
      await luna.say_and_wait(
        '미안해, 나는 강한 우마무스메가 아니었어…… 미안해…… 미안해……',
      );
      await era.printAndWait(`${you.name} 앞에서 루나는 아이처럼 통곡했다.`);
      await era.printAndWait(
        `${you.name}은(는) 급히 다가가 루나를 꽉 껴안았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}의 연약함과 ${luna.sex}의 서러움을 느꼈다.`,
      );
      await era.printAndWait(
        `동시에 ${you.name}의 가슴 속에는 루나에게 쏟아내고 싶은 안타까움과 애틋함이 휘몰아쳤다.`,
      );
      await era.printAndWait(
        '루나의 눈물에는 가슴이 찢어질 듯 아팠고, 루나의 자조에는 화가 치밀었다.',
      );
      await era.printAndWait(
        '고작 모의 레이스 한 번 제대로 뛰지 못했다고 해서, 루나가 모두의 경외를 받는 존재가 아니게 된단 말인가?',
      );
      await era.printAndWait('아니. 절대 아니다!!!');
      await era.printAndWait(`${you.name}은(는) 이를 악물었다.`);
      await era.printAndWait(
        '트레센을 위해, 모든 우마무스메를 위해 온 마음을 다해 헌신해 온 루나가 그런 소리를 들어서는 안 된다.',
      );
      await era.printAndWait(`${luna.sex}는 당당히 가슴을 펴도 될 터였다!`);
      await you.say_and_wait(
        '아무래도 너는 사람들이 생각하는 【황제】의 강함을 오해하고 있는 것 같아.',
      );
      await era.printAndWait(
        `루나가 울다 지친 뒤, ${you.name}은(는) 입을 열어 위로했다. ${you.name}의 단호한 말을 듣고 루나의 마음이 작게 떨렸다.`,
      );
      await you.say_and_wait(
        '황제—— 심볼리 루돌프가 매력적인 이유는, 그 상징의 깃발 아래서 모두가 각자의 역할을 다할 수 있기 때문이야.',
      );
      await you.say_and_wait(
        '모든 이가 노력하고 분투할 수 있도록 격려해주니까.',
      );
      await you.say_and_wait(
        '지금까지 그 누구도 너보다 【황제】라는 칭호에 어울리는 사람은 없었어. 너는 우리를 이끌었고, 끊임없이 앞으로 나아가게 했어!',
      );
      await you.say_and_wait(
        '꿈을 향해 나아가는 그 길 위에서, 너는 이미 다른 누군가의 꿈이 되었단 말이야.',
      );
      await you.say_and_wait('그러니까 자신을 깎아내리지 마, 루나——');
      await era.printAndWait(
        `${you.name}은(는) 루나를 꽉 껴안았다. ${luna.sex}에게 끝없는 힘을 주려는 듯했다. 또한 ${you.name}이(가) 생애 가장 소중한 사람을 제 영혼 속에 새겨 넣으려는 듯했다.`,
      );
      await era.printAndWait(
        `한참이 지나서야 루나는 항의하듯 가벼운 주먹으로 ${you.name}의 어깨를 톡톡 쳤다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 그제야 너무 세게 안았음을 깨달았다. ${you.name}은(는) 황급히 팔을 느슨하게 풀었지만 루나는 떨어지지 않고 여전히 ${you.name}의 품에 기대어 있었다.`,
      );
      await luna.say_and_wait('나, 계속 앞으로 나아가도 괜찮을까?');
      era.printButton('「당연하지.」', 1);
      await era.input();
      await luna.say_and_wait('그대도 계속 곁에 있어 줄 거야?');
      era.printButton('「지옥 끝까지라도.」', 1);
      era.printButton('「영원히.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 루나의 옅은 웃음소리를 들었다.`,
      );
      await you.say_and_wait(
        '사실 나뿐만이 아니야. 학생회 식구들, 그리고 트레센의 학생들 모두가 너를 돕고 싶어 해. 비록 사소한 일일지라도 말이야.',
      );
      await you.say_and_wait('네 노력은 반드시 결실을 맺을 거야.');
      await luna.say_and_wait('그렇다면 더더욱 여기서 멈출 수는 없겠네.');
      await luna.say_and_wait('우리의 꿈은 오직 미래에만 존재하니까.');
      await era.printAndWait(
        `${you.name}은(는) 주머니에서 손수건을 꺼내 루나의 눈물을 부드럽게 닦아 주었다. ${you.name}은(는) 깨달았다. 루나의 눈에서 빛나는 것은 더 이상 눈물이 아니었다.`,
      );
      await era.printAndWait(`그것은 건곤일척의 의지였다.`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '꺼져 가는 불씨 (상)';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `${chara17.uma_sex_title}에게는 타고난 승부욕이 있다. ${chara17.couple_title}은 언제나 더 멀리 달리고 싶어 한다.`,
      );
      await era.printAndWait(
        `정해진 거리의 경기장에서 ${chara17.couple_title}은 모든 것을 쏟아부어, 가장 먼저 결승선에 도달하는 승자가 되려 한다.`,
      );
      await era.printAndWait(
        '마치 그러한 소망에 응답하듯, 우마무스메들은 본격화 시기에 급격히 성장하여 경기장에 설 수 있게 된다.',
      );
      await era.printAndWait(
        '하지만 시간이 흐르면——정확히는 서너 해쯤 지나면 본격화의 힘은 서서히 쇠퇴한다.',
      );
      await era.printAndWait(
        '마치 연료가 바닥난 것처럼. 그 시기가 지나면 우마무스메는 다시 평범한 이들과 다를 바 없어진다.',
      );
      await era.printAndWait(
        '이것이 우마무스메들이 죽을힘을 다해 경기장에서 분투하는 이유다. 자신의 이야기를 남기고 싶어서, 대중이 자신을 잊지 않기를 바라기에.',
      );
      await era.printAndWait('그 마음을 품고 우마무스메들은 몸을 던진다.');
      await era.printAndWait(
        '그중에서도 빼어난 이들은 한계에 다다른 경쟁 속에서 【영역】에 발을 들인다.',
      );
      await era.printAndWait('그것은 모든 것을 초월하는 힘이다.');
      await era.printAndWait('하지만, 그 힘의 대가는 무엇인가?');
      await era.printAndWait(
        `루나가 영역에 들어갈 수 있게 된 후로, ${you.name}은(는) 끊임없이 이 의문에 대해 고민해 왔다.`,
      );
      await era.printAndWait(
        '운명은 결코 자비롭지 않다. 모든 것에는 보이지 않는 가격표가 붙어 있는 법이다.',
      );
      await era.printAndWait(
        `심볼리 가문처럼 강대한 혈통일지라도, ${chara17.couple_title}은 혈맥에 흐르는 폭력성을 억제하지 못해 스스로 파멸에 이르기도 한다.`,
      );
      await era.printAndWait(
        `루나는 영역에 들어가는 기분을 묘사한 적이 있다. 모든 것이 정지하고, 오직 ${chara17.sex}만이 끝없는 초원에 서 있는 느낌이라고.`,
      );
      await era.printAndWait(
        `${chara17.sex}는 무한한 힘이 솟구치는 것을 느끼는 것이다. 마치 자신의 미래와 거래를 한 것처럼.`,
      );
      era.drawLine();
      await era.printAndWait('재팬컵.');
      await era.printAndWait(
        `레이스 전, ${you.name}은(는) ${chara17.name}를 뚫어지게 바라보았다. ${you.name}은(는) 알고 있었다. ${chara17.sex}가 이미 최상의 상태로 스스로를 조율했다는 것을.`,
      );
      await era.printAndWait(
        `하지만 강적에게 이기려면 ${chara17.sex}는 다시 영역에 들어갈 것이다. 아니, ${chara17.sex}는 영역에 들어갈 수밖에 없다.`,
      );
      await era.printAndWait(
        `마치 타오르는 불꽃처럼, 모든 연료를 불태우기 전까지는 멈추지 않을 불꽃.`,
      );
      era.printButton(`「조심해 줘.」`, 1);
      era.printButton(`「불길한 예감이 들어.」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name}은(는) ${you.name}을(를) 바라보았다. ${you.name}은(는) 그제야 알아차렸다. ${chara17.sex}의 손이 미세하게 떨리고 있었다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '그렇다면 황제의 자태를 마음 깊이 새겨 두어라.',
        );
      } else {
        await chara17.say_and_wait(
          '그대의 걱정은 알고 있어. 하지만 우리의 꿈을 위해서라면 물러설 수 없어.',
        );
      }
      await era.printAndWait(
        `말을 마친 ${chara17.teen_sex_title}가 경기장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '꺼져 가는 불씨 (하)';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name}은(는) ${chara17.name}이(가) 결승선을 통과하는 모습을 보았다. ${chara17.sex}는 온몸을 떨며 관중들의 환호 속에서 황급히 자리를 떠났다.`,
      );
      await era.printAndWait(`${you.name}은(는) 급히 대기실로 달려갔다.`);
      await era.printAndWait('틀림없다.');
      await era.printAndWait(
        `${you.name}은(는) 미칠 것만 같았다. 경기장에서 ${chara17.sex}가 영역에서 무너져 내리려는 모습을 보고, ${you.name}은(는) 그 대가가 무엇인지 깨달았다.`,
      );
      await era.printAndWait(
        `영역——그것의 연료는 우마무스메들의 미래다! 그렇지 않고서야 ${chara17.name}가 이토록 큰 대미지를 입을 리 없었다. 마치, 마치……`,
      );
      await era.printAndWait('본격화의 힘이 사라진 것만 같았다.');
      await era.printAndWait(
        `${you.name}은(는) 대기실에 도착하자마자 커다란 소음을 들었다! ${you.name}이(가) 문을 열자 벽에 큰 구멍이 뚫려 있었다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('짐의 힘이 레이스 도중 갑자기 사라졌다고?');
      } else {
        await chara17.say_and_wait('미안해. 잠깐 감정이 격해져서……');
      }
      await era.printAndWait(
        `${you.name}은(는) 황급히 다가갔다. ${chara17.name}의 피투성이 손을 보고, ${you.name}은(는) 곧장 구급상자를 찾아 나섰다.`,
      );
      await era.printAndWait(
        `이대로라면 승리는커녕 ${chara17.sex}는 경기장에 서는 것조차 불가능하다.`,
      );
      await chara17.say_and_wait(
        '설령 그렇다 해도, 나는 내 발걸음을 멈추지 않겠다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 깜짝 놀라 고개를 들었지만, ${chara17.name}의 눈에는 ${you.name}이(가) 도저히 이해할 수 없는 감정들이 서려 있었다.`,
      );
      await era.printAndWait(
        '경악과 불만이 섞인 듯하면서도, 기쁨과 분노가 동시에 느껴졌다.',
      );
      await era.printAndWait([
        { content: '???「영역이 사라지던 그 찰나에, ', color: luna.color },
        { content: '보았다——', color: emperor.color },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '???「', color: emperor.color },
        { content: '조금만 더……', color: luna.color },
        { content: '아주 조금만 더 하면', color: emperor.color },
        { content: '（에덴에）', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name}은(는) 대답할 말을 찾지 못한 채, 터져 나오려는 눈물을 참으며 ${chara17.name}의 상처를 치료했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_ge: (() => {
    const title = '영역의 끝';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('하아…… 하아……');
      await chara17.print_and_wait('하아…………');
      await chara17.print_and_wait(
        `${chara17.name}의 눈앞에서 세계가 격렬히 요동쳤다. ${chara17.sex}의 시야에 들어오는 모든 것이 흐려졌다.`,
      );
      await chara17.print_and_wait(
        `파도처럼 밀려드는 현기증과 통증이 ${chara17.sex}를 덮쳤다. 영역이 자신을 밀어내고 있다——${chara17.name}은(는) 깨달았다.`,
      );
      await chara17.print_and_wait(
        `${chara17.sex}는 더 이상 무소불위의 존재가 아니었다.`,
      );
      await chara17.print_and_wait(
        `한 걸음을 내디딜 때마다 ${chara17.name}는 강한 위화감을 느꼈다.`,
      );
      await chara17.print_and_wait(
        `발을 딛고 다시 들어 올릴 때마다 극심한 통증에 ${chara17.sex}의 얼굴이 무섭게 일그러졌다.`,
      );
      await chara17.print_and_wait(
        `평소라면 가볍게 가를 바람이 철벽처럼 가로막아 ${chara17.sex}를 상처투성이로 만들었다.`,
      );
      await chara17.print_and_wait(
        `이번 레이스에서 ${chara17.sex}는 폭풍 속에서 두 날개가 꺾인 새와 같았다.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `눈꺼풀이 무거워지고, ${chara17.name}의 의식은 이미 몽롱해졌다.`,
      );
      await chara17.print_and_wait(
        '영역이 무너지고 있다. 그 느릿하게 흐르던 풍경들이 점차 움직이기 시작했다.',
      );
      await chara17.print_and_wait(
        '우마무스메들이 달리고 있다. 잔디를 차고 먼지를 일으키며 흩날리는 풀잎들을 바람에 싣고 간다.',
      );
      await chara17.print_and_wait(
        '자신의 심장 소리는 점점 빨라지는데, 정작 힘은 조금도 나오지 않는다.',
      );
      await chara17.print_and_wait(
        '몸의 부품들, 근육과 힘줄 그리고 내장이 거대한 관성에 의해 찢겨나가는 것 같다.',
      );
      await chara17.print_and_wait(
        '만약 이 코너에서 멈추지 않는다면, 영역이 완전히 걷히는 그 순간——',
      );
      await chara17.print_and_wait('자신은 죽게 될 것이다.');
      if (i_emperor) {
        await chara17.say_and_wait(
          '코스는 천상의 길이 아니니, 결국은 멈춰야 할 때가 오나 보군.',
        );
      } else {
        await chara17.say_and_wait(
          '이것이 영역의 진실인가…… 본격화의 힘을 앞당겨 쓰는 대가……',
        );
      }
      await chara17.print_and_wait(
        '세대와 세대를 거듭하며 용자들은 영역에 발을 들였고, 자신의 미래와 이상 그리고 모든 가능성을 앞당겨 써버렸다.',
      );
      await chara17.print_and_wait(`이제 ${chara17.name}의 차례가 온 것이다.`);
      await chara17.print_and_wait(
        '자신의 생애, 나아가 생명의 끝을 마주했을 때 무엇을 해야 하는지, 아무도 가르쳐준 적이 없었다.',
      );
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '당신은', color: emperor.color },
        { content: ' 나와', color: luna.color },
        { content: '（나와）', color: emperor.color },
        { content: ' 함께할 거지?', color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `가슴 속의 공기를 남김없이 토해내며, 수천수만 관중들의 시선 속에서 ${chara17.name}가 가속했다!!!`,
      );
      await era.printAndWait('길이 이어지지 않는다면 스스로 딛고 나아가리라!');
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '우리', color: emperor.color },
        { content: '의', color: luna.color },
        { content: ' 꿈을', color: emperor.color },
        { content: ' 위해!!!', color: luna.color },
        '」',
      ]);
      era.printButton('「달려라!!!!!!!」', 1);
      await era.input();
      await you.print_and_wait('달려라!!!!!!!');
      await you.print_and_wait('달려라!!!!!!!');
      await era.printAndWait(
        `${you.name}은(는) 이미 자신의 목소리가 갈라지든 말든 상관없었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 그저 ${chara17.name}가 우리들의 꿈을 향해 정면으로 나아가고 있다는 것만을 알았다.`,
      );
      await era.printAndWait('다 왔어! 거의 다 왔다고!');
      await era.printAndWait(
        '성대한 환호성 속에서, 최강의 우마무스메는 미지의 저 너머를 향해 발을 내디뎠다.',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_be: (() => {
    const title = '마지막 선율';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('하아…… 하아……');
      await chara17.print_and_wait('하아…………');
      await chara17.print_and_wait(
        `${chara17.name}의 눈앞에서 세계가 격렬히 요동쳤다. ${chara17.sex}의 시야에 들어오는 모든 것이 흐려졌다.`,
      );
      await chara17.print_and_wait(
        `파도처럼 밀려드는 현기증과 통증이 ${chara17.sex}를 덮쳤다. 영역이 자신을 밀어내고 있다——${chara17.name}은(는) 깨달았다.`,
      );
      await chara17.print_and_wait(
        `${chara17.sex}는 더 이상 무소불위의 존재가 아니었다.`,
      );
      await chara17.print_and_wait(
        `한 걸음을 내디딜 때마다 ${chara17.name}는 강한 위화감을 느꼈다.`,
      );
      await chara17.print_and_wait(
        `발을 딛고 다시 들어 올릴 때마다 극심한 통증에 ${chara17.sex}의 얼굴이 무섭게 일그러졌다.`,
      );
      await chara17.print_and_wait(
        `평소라면 가볍게 가를 바람이 철벽처럼 가로막아 ${chara17.sex}를 상처투성이로 만들었다.`,
      );
      await chara17.print_and_wait(
        `이번 레이스에서 ${chara17.sex}는 폭풍 속에서 두 날개가 꺾인 새와 같았다.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `눈꺼풀이 무거워지고, ${chara17.name}의 의식은 이미 몽롱해졌다.`,
      );
      await chara17.print_and_wait(
        '영역이 무너지고 있다. 그 느릿하게 흐르던 풍경들이 점차 움직이기 시작했다.',
      );
      await chara17.print_and_wait(
        '우마무스메들이 달리고 있다. 잔디를 차고 먼지를 일으키며 흩날리는 풀잎들을 바람에 싣고 간다.',
      );
      await chara17.print_and_wait(
        '자신의 심장 소리는 점점 빨라지는데, 정작 힘은 조금도 나오지 않는다.',
      );
      await chara17.print_and_wait(
        '몸의 부품들, 근육과 힘줄 그리고 내장이 거대한 관성에 의해 찢겨나가는 것 같다.',
      );
      await chara17.print_and_wait(
        '만약 이 코너에서 멈추지 않는다면, 영역이 완전히 걷히는 그 순간——',
      );
      await chara17.print_and_wait('자신은 죽게 될 것이다.');
      if (i_emperor) {
        await chara17.say_and_wait(
          '코스는 천상의 길이 아니니, 결국은 멈춰야 할 때가 오나 보군.',
        );
      } else {
        await chara17.say_and_wait(
          '이것이 영역의 진실인가…… 본격화의 힘을 앞당겨 쓰는 대가……',
        );
      }
      await chara17.print_and_wait(
        '세대와 세대를 거듭하며 용자들은 영역에 발을 들였고, 자신의 미래와 이상 그리고 모든 가능성을 앞당겨 써버렸다.',
      );
      await chara17.print_and_wait(`이제 ${chara17.name}의 차례가 온 것이다.`);
      await chara17.print_and_wait(
        '자신의 생애, 나아가 생명의 끝을 마주했을 때 무엇을 해야 하는지, 아무도 가르쳐준 적이 없었다.',
      );
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '짐의', color: emperor.color },
        { content: '（나의）', color: luna.color },
        { content: ' 소중한 경험을 ', color: emperor.color },
        { content: '그대에게 전하마……', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('——오너라.');
      await chara17.print_and_wait(
        `자신의 숙명을 맞이하듯, ${chara17.name}는 자신의 종착역을 향해 질주했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  re_good_end: (() => {
    const title = (emperor) => [
      ['에덴이여, 나를 보라', { content: '（짐을）', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('여긴 어디지?');
      await luna.print_and_wait('우마무스메는 마치 꿈에서 깬 듯한 기분이었다.');
      await luna.print_and_wait('끝없이 펼쳐진 초원이었다.');
      await luna.print_and_wait(
        `우마무스메는 달렸다. 바람이 푸른 잔디와 ${chara17.sex}의 흐트러진 머리카락을 흔들었다.`,
      );
      await luna.print_and_wait(
        `${chara17.sex}의 머리 위에는 태양과 달이 함께 떠 있었다.`,
      );
      await luna.print_and_wait(
        '해와 달 아래, 몇몇 형체들이 그녀를 지켜보고 있었다.',
      );
      await luna.print_and_wait(
        '세 명의 여신——그녀들은 호기심 어린 눈으로 자신들의 아이를 바라보고 있었다.',
      );
      await luna.print_and_wait('그렇구나.');
      await luna.print_and_wait('그녀는 눈을 깜빡였다.');
      await luna.print_and_wait(
        `우마무스메 「${you.actual_name}, 그대는 항상 내게 쉬라고 했었지. 이제야…… 영원히 안식할 수 있는 곳에 도착했나 봐.」`,
      );
      await luna.print_and_wait(
        '우마무스메 「처음 【에덴】이라는 이름을 들었을 때, 이곳이 이렇게 웅장하고 아름다운 풍경일 줄은 상상도 못 했어.」',
      );
      await luna.print_and_wait(
        '우마무스메 「드디어 새로운 세계에 도착했구나.」',
      );
      await luna.print_and_wait(
        '우마무스메 「어쩌면 이곳에도 생명이 존재하겠지. 우리와 똑같이 기뻐하고 화내고 슬퍼하고 즐거워하는.」',
      );
      await luna.print_and_wait(
        '우마무스메 「다채로운 이야기와 뜨거운 염원, 그리고 낭만과 사랑, 투쟁이 있는 곳.」',
      );
      await luna.print_and_wait('우마무스메 「드디어 도달했어——」');
      await luna.print_and_wait(
        '우마무스메의 질주는 점차 느려졌고, 결국 그녀는 여신들의 앞에 멈춰 섰다.',
      );
      await era.printAndWait(
        '세 여신 「아이야, 모든 종착지이자…… 모든 시작의 땅에 도달한 것을 축하한다. 네가 에덴에 도달한 첫 번째 우마무스메란다.」',
      );
      await era.printAndWait(
        '세 여신 「우리는 너를 포상하고, 너의 진정한 꿈을 이루어주마! 자, 소원을 말하기 전에 묻고 싶은 것이 있느냐?」',
      );
      era.drawLine();
      await luna.print_and_wait(
        '우마무스메는 자신의 인생을 회상했고, 수많은 장면이 눈앞을 스쳐 지나갔다.',
      );
      await luna.print_and_wait(
        '우마무스메 「우리의 숙원과 손에 닿지 않는 꿈들——」',
      );
      await luna.print_and_wait(
        '우마무스메 「우리의 전승과 사랑하는 모든 것들——」',
      );
      await luna.print_and_wait(
        '우마무스메 「그것들이 어떻게 오랜 시간 동안 변치 않고, 세대에서 세대로 이어질 수 있었던 걸까요?」',
      );
      await luna.print_and_wait(
        '우마무스메는 마음속 의문을 던졌지만, 여신들이 대답하기도 전에 스스로 답을 내놓았다.',
      );
      await luna.print_and_wait(
        '우마무스메 「우마무스메와 트레이너…… 우리 사이의 인연 덕분이었을까요?」',
      );
      await luna.print_and_wait(
        '그녀는 이마를 짚고 고개를 들어 활짝 미소 지었다.',
      );
      await luna.print_and_wait(
        `여신들은 사랑스럽다는 듯 ${chara17.sex}의 흐트러진 머리카락을 쓰다듬었다.`,
      );
      await era.printAndWait('세 여신 「그렇다면, 너의 소원은 무엇이냐?」');
      await luna.print_and_wait(
        '그녀는 두 팔을 벌려 이 새로운 세계를 껴안는 듯한 포즈를 취했다.',
      );
      await luna.print_and_wait(
        '우마무스메 「꿈이 계속 이어질 수 있는 곳을 원해요.」',
      );
      await luna.print_and_wait(
        '우마무스메 「우마무스메가 영원히 달릴 수 있는 곳을요.」',
      );
      await luna.print_and_wait(
        '우마무스메 「우리를 사랑해주는 사람들의 환호와 기도가 들리는 한, 우리의 승리를 빌어주는 한——」',
      );
      await luna.print_and_wait(
        '우마무스메 「우리가 영원히 맞서 싸워, 모든 강적을 물리칠 수 있는 그런 곳을 원해요.」',
      );
      await luna.print_and_wait(
        '우마무스메 「지상의 에덴! 꿈만 있다면 모든 우마무스메가 갈 수 있는 에덴을요!」',
      );
      await era.printAndWait(
        '여신들은 묵묵히 고개를 끄덕였고, 우마무스메는 다시 입을 열었다.',
      );
      await luna.print_and_wait(
        '우마무스메 「그리고, 다시 돌아가고 싶어요. 그곳엔 나의 사랑하는 사람이 반드시 기다리고 있을 테니까요.」',
      );
      await era.printAndWait(
        '삼여신 「정말 욕심이 많은 아이로구나…… 음…… 하지만 소원을 하나만 빌어야 한다는 규칙은 없었지?」',
      );
      era.drawLine();
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 자신을 에워싼 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`,
      );
      await era.printAndWait(
        `${luna.sex}는 등을 돌리고 있어, ${you.name}에게는 ${luna.sex}의 표정이 보이지 않았다.`,
      );
      await era.printAndWait(
        `${luna.sex}는 여전히 우승의 광경에 압도되어 있는지도 모른다. 혹은 ${you.name}이(가) 모르는 격정을 되새기는 것인지도 모른다.`,
      );
      await era.printAndWait(
        `혹은 ${luna.sex}는 그저 지쳐서 혼자 있고 싶은 것인지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 힘없이 땅에 주저앉았다. 며칠간 쌓인 피로에 ${you.name}은(는) 일어설 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 바라보았고, 멀리 맑은 하늘에 달이 걸려 있는 것을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`${you.name}은(는) 길게 숨을 내뱉었다.`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${luna.sex}의 부름을 들었다. 거센 불안감 속에서 ${you.name}은(는) ${luna.sex}를 바라보았지만, ${luna.sex}에게 대답하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주한 존재는 루나인가, 황제인가?`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        '한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.',
      );
      await luna.say_as_unknown_and_wait(
        '한쪽은 애상에 잠기고, 다른 한쪽은 광노에 휩싸이지. 마치 달과 태양처럼, 결코 만날 수 없고 서로를 밀어내기만 하던 존재들.',
      );
      await era.printAndWait(
        `${luna.sex}는 끝없는 하늘을 바라보았고, 그 표정은 마치 깊은 심연을 들여다보는 듯 엄숙했다.`,
      );
      era.printButton('「너는 그저 태양일지도 몰라.」', 1);
      era.printButton('「너는 그저 달일지도 몰라.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}의 말을 듣고 ${chara17.sex}는 고개를 숙였다.`,
      );
      era.printButton('「하지만 너는 태양이면서 동시에 달일 수도 있어.」', 1);
      era.printButton('「하지만 너는 황제이면서 동시에 루나일 수도 있어.」', 2);
      await era.input();
      await era.printAndWait(
        '해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.',
      );
      await era.printAndWait(
        `${luna.sex}는 멍하니 ${you.name}을(를) 바라보다가, 이내 뺨을 붉히며 눈시울을 적셨다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 손을 뻗었고, ${luna.sex}는 당신에게 달려왔다. 루나인가? 황제인가? ${you.name}은(는) 더 이상 그런 물음에 매달리지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}가 내민 손을 잡았다. 두 사람은 마음껏 끌어안고 비 오듯 눈물을 흘렸다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 확신했다. 지금 ${you.name}의 품에 안긴 ${luna.sex}, 오직 ${you.name}과(와) 뜨겁게 포옹하고 입을 맞추는 ${luna.sex}도 더 이상 그 물음에 얽매이지 않는다는 것을.`,
      );
      await era.printAndWait(
        '깊은 입맞춤이 끝나고 두 사람은 숨을 헐떡이며, 진심을 확인하는 다음 폭풍이 몰아치기 전 잠시 숨을 골랐다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}가 당신의 가슴에 기댄 온기를 느꼈다. 이런 뜨거움은 이전에 없었다——황제의 단호함과 루나의 부드러움이 함께 깃들어 있었다.`,
      );
      await you.say_and_wait(
        '너는 내가 사랑하는 황제이자, 나를 사랑해주는 루나야.',
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 그렇게 생각하다가 이내 고개를 저었다. 품 안의 연인이 작게 소리를 지르는 가운데 ${luna.sex}와 함께 잔디밭에 누웠다.`,
      );
      era.printButton('「나의 연인, 그 이름은 심볼리 루돌프.」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_luna: (() => {
    const title = '영원한 둥근 달';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`,
      );
      await era.printAndWait(
        `${chara17.name}은(는) 멀리 석양 아래 서 있었다. 바람은 푸른 잔디와 ${chara17.sex}의 흐트러진 머리카락을 흔들었다.`,
      );
      await era.printAndWait(
        `달밤이 다가오고 있었지만 태양은 아직 지지 않았다. ${chara17.sex}는 등을 돌리고 있어, ${you.name}에게는 ${chara17.sex}의 표정이 보이지 않았다.`,
      );
      await era.printAndWait(
        `${chara17.sex}는 여전히 우승의 광경에 압도되어 있는지도 모른다. 혹은 ${you.name}이(가) 모르는 격정을 되새기는 것인지도 모른다.`,
      );
      await era.printAndWait(
        `혹은 ${chara17.sex}는 그저 지쳐서 혼자 있고 싶은 것인지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 힘없이 땅에 주저앉았다. 며칠간 쌓인 피로에 ${you.name}은(는) 일어설 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 보았고, 맑은 하늘 한구석에 걸린 달을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${chara17.sex}의 부름을 들었다. 거센 불안감 속에서 ${you.name}은(는) ${chara17.sex}를 바라보았지만, ${chara17.sex}에게 대답하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주한 존재는 루나인가, 황제인가?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
      );
      await era.printAndWait(
        '???「한쪽은 슬픔에, 한쪽은 분노에. 마치 달과 태양처럼 만나지 못한 채 서로를 밀어내지.」',
      );
      await era.printAndWait(
        `${chara17.sex}는 끝없는 하늘을 응시했고, 그 표정은 마치 심연을 마주한 듯 무거웠다.`,
      );
      await luna.say_as_unknown_and_wait(`나는 한때 그 황제가 너무나 미웠어.`);
      await era.printAndWait(
        `${you.name}은(는) 멍하니 ${chara17.sex}를 바라보았다.`,
      );
      await luna.say_as_unknown_and_wait(
        `그런데 마지막에 ${chara17.sex}는 내게 말했어. 『그 광대는 처음부터 짐이 패배하지 않을 거라 믿고 있었다』고.`,
      );
      await luna.say_as_unknown_and_wait(
        `그래서 ${chara17.sex}는 ${you.actual_name}에게 영원히 깨지 않는 아름다운 꿈을 선물하겠다고 했어.`,
      );
      await luna.print_and_wait('황제의 여정은 이제 끝난 거야.');
      await era.printAndWait(
        `한때 근심에 잠겼던 루나의 눈에 혼란이 어렸다. 당신들의 소원은 이루어졌는데, ${
          chara17.sex
        }는 어째서 이토록 허탈한 걸까.`,
      );
      await luna.say_and_wait('그럼 내 이야기 또한, 여기서 끝나는 걸까?');
      await era.printAndWait(
        '해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.',
      );
      await era.printAndWait('밤이 내려앉고, 태양은 자취를 감추었다.');
      await era.printAndWait(
        '오직 하늘 위 밝게 빛나는 달의 부드러운 품만이 남았다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 숙였고, 눈시울이 붉어졌다.`,
      );
      era.printButton('「내가 곁에 있어 줄게.」', 1);
      era.printButton('「『황제』의 이야기는 영원히 끝나지 않아.」', 2);
      await era.input();
      await luna.say_and_wait('그렇구나.');
      await era.printAndWait(
        '무거운 발걸음을 떼며, 루나는 달이 비치는 방향으로 걸어갔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}가 어디로 가는지 알 수 없었다.`,
      );
      await era.printAndWait([
        `하지만 ${you.name}은(는) 떨리는 몸을 일으켜 `,
        luna.get_colored_name(),
        `의 뒤를 따랐다——${luna.sex}가 어디로 가든 상관없이.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_emperor: (() => {
    const title = '황제의 즉위';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`,
      );
      await era.printAndWait(
        `${chara17.name}은(는) 멀리 석양 아래 서 있었다. 바람은 푸른 잔디와 ${chara17.sex}의 흐트러진 머리카락을 흔들었다.`,
      );
      await era.printAndWait(
        `달밤이 다가오고 있었지만 태양은 아직 지지 않았다. ${chara17.sex}는 등을 돌리고 있어, ${you.name}에게는 ${chara17.sex}의 표정이 보이지 않았다.`,
      );
      await era.printAndWait(
        `${chara17.sex}는 여전히 우승의 광경에 압도되어 있는지도 모른다. 혹은 ${you.name}이(가) 모르는 격정을 되새기는 것인지도 모른다.`,
      );
      await era.printAndWait(
        `혹은 ${chara17.sex}는 그저 지쳐서 혼자 있고 싶은 것인지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 힘없이 땅에 주저앉았다. 며칠간 쌓인 피로에 ${you.name}은(는) 일어설 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 보았고, 맑은 하늘 한구석에 걸린 달을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${chara17.sex}의 부름을 들었다. 거센 불안감 속에서 ${you.name}은(는) ${chara17.sex}를 바라보았지만, ${chara17.sex}에게 대답하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주한 존재는 루나인가, 황제인가?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
      );
      await era.printAndWait(
        '???「한쪽은 슬픔에, 한쪽은 분노에. 마치 달과 태양처럼 만나지 못한 채 서로를 밀어내지.」',
      );
      await era.printAndWait(
        `${chara17.sex}는 끝없는 하늘을 응시했고, 그 표정은 마치 심연을 마주한 듯 무거웠다.`,
      );
      await emperor.say_as_unknown_and_wait(
        '얼마 전 짐은 경기장에서 죽을 뻔했다. 하지만 마지막 순간, 가느다란 목소리가 짐을 격려했지.',
      );
      await era.printAndWait(
        `${you.name}은(는) 멍하니 ${chara17.sex}를 바라보았다.`,
      );
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex}는 짐에게 버티라고 했다. ${chara17.sex}는 말했지. 『난 네가 정말 싫어. 하지만 우리의 꿈을 위해 단 하나만 바랄게.』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『승리를 거머쥐고, ${you.actual_name}을(를) 만나러 가라고.』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『앞으로 영원히 다시 만나지 못하더라도』, ${chara17.sex}는 말했지…… ${chara17.sex}도 모든 것을 바치겠다고.`,
      );
      await era.printAndWait(
        `황제의 날카로운 눈에 혼란이 어렸다. ${chara17.sex}는 도저히 기억할 수 없었다. 누가 제 머릿속에서 그토록 소란을 피웠는지를.`,
      );
      await emperor.say_and_wait(`${chara17.sex}는 누구지?`);
      await era.printAndWait(
        '해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.',
      );
      await era.printAndWait('하늘이 너무나 밝아, 달이 자취를 감추었다.');
      await era.printAndWait('오직 태양의 끝없는 광채만이 남았다.');
      await era.printAndWait(
        `${you.name}은(는) 고개를 숙였고, 눈시울이 붉어졌다.`,
      );
      era.printButton('「폐하, 그녀는 제게 정말 소중한 사람이었습니다.」', 1);
      era.printButton('「……누구였을까요?」', 2);
      await era.input();
      await emperor.say_and_wait('그렇군.');
      await era.printAndWait(
        '무거운 발걸음을 떼며, 황제는 태양이 비치는 방향으로 걸어갔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${emperor.sex}가 어디로 가는지 알 수 없었다.`,
      );
      await era.printAndWait([
        `하지만 ${you.name}은(는) 떨리는 몸을 일으켜 `,
        emperor.get_colored_name(),
        `의 뒤를 따랐다——${emperor.sex}가 어디로 가든 상관없이.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_wax_and_wane: (() => {
    const title = '음양의 감옥';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '어릴 적, 가족들은 내게 큰 기대를 걸지 않았어.',
      );
      await luna.print_and_wait(
        '마음껏 뛰어노는 것도, 훈련에 빠지는 것도 허락됐지. 다들 내게 「어찌 되든 상관없다」는 식의 태도였어.',
      );
      await luna.print_and_wait(
        '심볼리 가문은 그런 곳이야. 오직 실력만을 중요하게 여기지.',
      );
      await luna.print_and_wait('그래서 강인한 언니들은 트랙 위를 질주했고, ');
      await luna.print_and_wait(
        '나는 잔디밭에 누워 온종일 잠을 자도 괜찮았어.',
      );
      await luna.print_and_wait(
        '나 역시 편안하게 하루하루를 보내고 싶었지만, 나이가 들수록 내 몸 안의 요동치는 기운을 억누를 수가 없었어.',
      );
      await luna.print_and_wait('마치 내 피가 몸 안에서 타오르는 것 같았어.');
      await luna.print_and_wait(
        '그럴 때마다 내 마음속에는 폭압적이고 흉포한 감정이 솟구쳤지.',
      );
      await luna.print_and_wait(
        '찢어발기고 싶고, 짓뭉개버리고 싶고, 상대를 발아래 짓밟으며 비웃어주고 싶었어! 조롱하고 싶었다고!',
      );
      await luna.print_and_wait(
        '——모든 이의 모든 것을 빼앗고, 이 세상을 잿더미로 만들고 싶었어!',
      );
      await luna.print_and_wait(
        '체력을 완전히 소진하고 간신히 정신을 차렸을 때, 내게 남은 건 끝없는 허무함과 공포뿐이었지.',
      );
      await luna.print_and_wait(
        '불안해지기 시작했어…… 쓸데없는 생각을 하지 않으려 스스로 훈련에 참여하기 시작했어.',
      );
      await luna.print_and_wait(
        '한계까지 달릴 때만이 비로소 평온해질 수 있었으니까…… 그래야만 나 자신으로 남아있을 수 있었어.',
      );
      await luna.print_and_wait('「루나.」');
      await luna.print_and_wait(
        '어머니는 내게 예쁘고도 다정한 이름을 지어주셨어.',
      );
      await luna.print_and_wait('폭력만을 휘두르는 괴물이 되고 싶지 않았어……');
      await luna.print_and_wait(
        '하지만 혈통이 내게 부여한 그 포악함을 극복할 수 없었지. 과거 심볼리 가문의 모든 우마무스메들이 그랬던 것처럼.',
      );
      await luna.print_and_wait(
        '그때 깨달았어. 왜 가족들이 나를 훈육하지 않았는지.',
      );
      await luna.print_and_wait(
        '대대로 이어져 내려온 「심볼리」의 피가, 나를 정해진 길로 인도할 것이기 때문이었지.',
      );
      await luna.print_and_wait('승리. 그리고 승리.');
      await luna.print_and_wait(
        '승리할 수만 있다면, 설령 내가 더 이상 내가 아니게 된다 해도 허용되는 거야.',
      );
      await luna.print_and_wait(
        '아니, 오히려 승리만 한다면 무엇이든 상관없다는 거지.',
      );
      await luna.print_and_wait(
        '내게서 희대의 재능이 엿보이자, 심볼리 가문은 본격적으로 나를 육성하기 시작했어.',
      );
      await luna.print_and_wait(
        '마음만 먹으면 모든 자원을 손에 넣을 수 있었고, ',
      );
      await luna.print_and_wait(
        '마음만 먹으면 모든 총애를 독차지할 수 있었지.',
      );
      await luna.print_and_wait('하지만 여전히 공허하고 두려웠어.');
      await luna.print_and_wait(
        '달리기가 잠시나마 머릿속을 비워줄지라도, 모든 상대를 제치고 결승선에서 뒤를 돌아볼 때면…… 숨을 헐떡이면서도 내 입꼬리가 멈추지 않고 올라가는 걸 발견하곤 했거든.',
      );
      await luna.print_and_wait('마치 내가 다른 사람이 된 것처럼 말이야.');
      await luna.print_and_wait('문득 생각했어. 루나가 진짜 나일까?');
      await luna.print_and_wait(
        '아니면 경기장에서 사방을 유린하는 저 괴물이 진짜 나인 걸까?',
      );
      await luna.print_and_wait(
        '누군가에게 매달려 울고 싶었지만, 내가 자라날수록 나를 따뜻하게 대해주던 사람들은 갑작스레 세상을 떠났어.',
      );
      await luna.print_and_wait(
        '어머니는 사냥꾼에게 놀란 여파로 앓다가 돌아가셨고, 언니는 레이스 전 준비 중에 허망하게 가버렸지.',
      );
      await luna.print_and_wait('어쩌면 나도……');
      await luna.print_and_wait(
        '차가운 달빛 아래에서, 나는 미친 듯이 어른들을 찾아갔어.',
      );
      await luna.say_and_wait('나는——');
      await luna.print_and_wait(
        '안정감을 원한다고, 더 이상 무섭지 않게 해달라고 말하고 싶었어. 하지만 인자한 조부모님과 부모님 앞에서 차마 그럴 수 없었지.',
      );
      await luna.print_and_wait('그분들의 눈에 서린 기대감을 보았으니까.');
      await luna.print_and_wait(
        '그래서 나는【사랑】을 달라고 빌었어. 수많은 형제자매가 내 곁에 있어 주길, 세상 천지의 흥미로운 사람들이 심볼리 가문으로 모여들기를 바랐지.',
      );
      await luna.print_and_wait('이곳이 북적거리기만 한다면——');
      await luna.print_and_wait('사람들에게 둘러싸여 있기만 한다면——');
      await luna.print_and_wait(
        '분명, 분명 기회가 있을 거라고. 분명 누군가는 내가 더 이상 공허함과 공포를 느끼지 않게 해줄 수 있을 거라고 믿었어.',
      );
      await luna.print_and_wait('그때가 되면…… 나…… 루나는…… 반드시——');
      await luna.say_and_wait(`${you.actual_name}？`);
      await luna.print_and_wait(
        '루나는 꿈에서 깨어나, 자신이 홀로 침대에 누워 있음을 깨달았다.',
      );
      await luna.print_and_wait(
        '왜 이런 꿈을 꾼 걸까? 루나는 머리를 짚었다. 창밖의 휘영청 밝은 달을 바라보자 현기증이 일었다.',
      );
      await luna.print_and_wait(
        '분명 격려를 받고 이상을 향해 나아가기로 결심했건만, 【황제】에게 의식을 빼앗기고 잔혹한 혈통에 몸을 맡길 생각을 하니……',
      );
      await luna.print_and_wait(
        '루나는 눈물을 흘렸다. 아무리 애써도 결국 너무나 무서웠다.',
      );
      await luna.print_and_wait(
        '참아내는 데 익숙해졌고, 견디다 보면 분명 상황이 나아질 거라 굳게 믿어왔는데.',
      );
      await luna.print_and_wait(
        `하지만 ${you.actual_name}과(와) 재회한 이후로, 지금까지 의지해왔던 그 인내심이 아무런 소용이 없게 되어버렸다.`,
      );
      await luna.say_and_wait('보고 싶어……');
      await luna.say_and_wait('만나고 싶어……');
      await luna.print_and_wait(`${luna.teen_sex_title}는 밤새 잠들지 못했다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_a_stones_throw: (() => {
    const title = '한 걸음의 거리';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `루나가 어떻게 황제로 변하게 되었나? ${you.name}은(는) 마침내 기억해냈다.`,
      );
      await era.printAndWait(
        '그것은 무모한 책략이었고, 풋내기 애송이가 심볼리의 미래가 될 스타에게 심어 준 헛된 생각이었다.',
      );
      era.printButton(
        '「폭압을 증오한다면, 다른 이에게 그 역할을 맡기면 되잖아?」',
        1,
      );
      await era.input();
      await luna.say_and_wait('다른 이……?');
      era.printButton(
        '「응, 다른 사람. 예를 들면—— 또 다른 인격이라든가, 그러니까, 또 다른 너 말이야.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고민에 빠진 루나를 달래기 위해 농담조로 던진 말이었지만, 웬일인지 평소 장난기 많던 아이는 무척 진지하게 귀를 기울였다.`,
      );
      await era.printAndWait(
        `${luna.sex}의 재촉하는 눈빛에 ${you.name}은(는) 머리를 쥐어짜며 허무맹랑한 이야기를 이어갔다.`,
      );
      era.printButton(
        '「루나와는 전혀 다른, 호전적이고 위압적인 존재를 만들어내는 거야.」',
        1,
      );
      era.printButton('「네 개성을 바탕으로 만든, 상상 속의 이미지를 말이지.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 한숨을 내쉬며 문득 떠오른 생각을 입 밖에 냈다.`,
      );
      await you.say_and_wait('그래, 마치 【황제】처럼 말이야!');
      await era.printAndWait(
        `루나는 멍하니 ${you.name}을(를) 바라보았고, ${you.name}은(는) 방금 뇌리를 스친 생각에 들떠 있었다.`,
      );
      await era.printAndWait(
        `아니, 안 돼——${you.name}의 영혼이 떨렸다. ${you.name}은(는) 마침내 기억해 냈다.`,
      );
      await era.printAndWait(
        `황제는, ${you.name}이(가) 루나를 위해 만들어 버린 감옥이었다.`,
      );
      era.printButton(
        '「루나가 할 수 없는 일은, 전부 황제가 완수하게 하는 거야.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `그럴 리가 없어. 그 아이의 운명, ${luna.sex}가 짊어진 모든 것을 어떻게 그렇게 가볍게 단정 지을 수 있단 말인가?!`,
      );
      await you.say_and_wait(
        '그러면 루나는 아주 쉽게 정점에 오를 수 있을 거야!',
      );
      await you.say_and_wait('닥쳐! 제발 입 다물어! 더는 말하지 마!!!', true);
      await era.printAndWait(
        `${you.name}은(는) 제 목을 조르고 싶었다. 그렇게 몸을 움직이다 ${you.name}은(는) 꿈에서 깨어났다.`,
      );
      await era.printAndWait(`${you.name}은(는) 식은땀에 흠뻑 젖어 있었다.`);
      await era.printAndWait(
        `그때의 ${you.name}은(는) 그저 오만한 얼간이에 불과했다. 가는 곳마다 재능을 인정받지 못한다며 투덜댔지만, 실상은 학생의 허풍이나 다름없었다.`,
      );
      await era.printAndWait(
        `루나와 만났을 때, ${you.name}은(는) 머릿속에만 묻어 두었던 전략과 견문, 환상, 그리고 ${you.name}이(가) 루나에게서 읽어 낸——${luna.sex}는 언젠가 거물이 되리라는 생각을 단숨에 쏟아냈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 그때의 자신이 얼마나 꼴불견이었는지 알지 못했지만, 루나는 그때 홀가분한 듯 미소를 지었었다.`,
      );
      await era.printAndWait('달밤 아래서 피어난, 그 미소.');
      await era.printAndWait(
        '그때 결심했었다. 루나를 위해 물불 가리지 않고, 자신의 목숨과 지혜를 모두 바치겠노라고.',
      );
      await era.printAndWait(
        '트레이너 본업으로 돌아온 것도, 필사적으로 공부한 것도, 심볼리 루돌프의 트레이너가 된 것도——',
      );
      await era.printAndWait('【황제】의 위명을 떨치기 위해서가 아니었다.');
      await era.printAndWait('모든 것은 루나의 미소를 위해서였어야만 했다!');
      await era.printAndWait('그런데 어째서, 왜 이렇게 되어버린 걸까……');
      await era.printAndWait(
        `${you.name}은(는) 머리를 감싸 쥐고 깊은 한숨을 내뱉었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  fall_into_hell: (() => {
    const title = '심연으로의 추락';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `라이벌들이 차례로 경기장에 들어설 때, ${you.name}은(는) 문득 루나의 상태가 이상하다는 것을 알아차렸다.`,
      );
      await era.printAndWait(
        `${luna.sex}는 의자에 멍하니 앉아 당신을 바라보고 있었다.`,
      );
      await era.printAndWait(`황제는 어디 있지? ${you.name}은(는) 당황했다.`);
      await era.printAndWait(
        `${you.name}의 의아한 시선에 루나는 입을 열었지만, 좀처럼 말이 나오지 않는 듯했다.`,
      );
      await luna.say_and_wait('그녀가…… 다시 나오는 건 싫어!');
      era.printButton('「루나, 곧 레이스가 시작돼!」', 1);
      era.printButton('「괜찮아, 내가 곁에 있어 줄게.」', 2);
      await era.input();
      await era.printAndWait(
        `하지만 ${you.name}의 끈질긴 설득에도 루나는 고개를 저으며 거부했다.`,
      );
      await era.printAndWait(
        '——레이스가 코앞이었다. 지금 황제가 「나타나지」 않는다면 모든 것이 수포로 돌아간다.',
      );
      await era.printAndWait(
        `어쩔 수 없이 ${you.name}은(는) 목소리를 억지로 쥐어짜며, 마치 우스꽝스러운 어릿광대처럼 소리를 높였다.`,
      );
      era.printButton(
        '「황제여, 위대한 나의 황제여! 들리십니까? 만백성의 저 천둥 같은 함성이!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `루나는 여전히 울고 있었다. ${you.name}의 마음속에서 알 수 없는 분노가 치밀어 올랐다. 하필 이 중요한 때에……!`,
      );
      era.printButton(
        '「폐하, 당신께서 잠드신 사이 역적들이 당신의 영광을 모독하고 있습니다.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `루나는 그저 무력하게 고개를 저었다. ${you.name}은(는) 이를 악물었다.`,
      );
      era.printButton(
        '「부디 깨어나시어, 하늘을 뒤덮는 진노를 내리소서……」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `집착에 사로잡힌 ${you.name}의 얼굴은 일그러졌고 목소리는 쉬어 터졌다.`,
      );
      await era.printAndWait(
        '그 광기가 효과가 있었던 것일까, 루나의 몸이 점차 떨림을 멈췄다.',
      );
      await era.printAndWait(
        `${luna.sex}가 ${you.name}을(를) 바라보았다. 양 눈에 가득했던 공포는 서서히 걷히고, 그 자리를 소름 끼칠 정도로 날카로운 기색이 채우기 시작했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 안도의 한숨을 내쉬었지만, 눈앞의 우마무스메는 갑자기 머리를 감싸 쥐었다.`,
      );
      await era.printAndWait(
        `루나가 혼란스러운 눈으로 ${you.name}을(를) 보았다.`,
      );
      await luna.say_and_wait(`${luna.couple_title}은 내 친구가 아니었어?`);
      era.printButton(`「……${luna.couple_title}은 네 친구야.」`, 1);
      era.printButton(
        `「폐하, ${luna.couple_title}은 죽어 마땅한 죄인들입니다!」`,
        2,
      );
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          '꼭 이렇게 해야만 해? 꼭 그 끔찍한 모습으로 변해야만 하느냐고!',
        );
        era.printButton('「아니…… 아니야! 지금 당장 기권 처리하고 올게!」', 1);
        era.printButton('「폐하! 당신은 태생부터 황제이십니다!」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            '난 황제가 아니야! 제발 루나를 없애지 마. 이대로라면 루나는 정말 사라져 버릴 거야.',
          );
          await luna.say_and_wait('그대가 아직 나를 사랑한다면, 제발……');
          await era.printAndWait(
            `루나는 절망적인 눈빛으로 ${you.name}을(를) 바라보며, 마치 구원의 동아줄이라도 잡으려는 듯 손을 뻗었다.`,
          );
          await luna.say_and_wait('제발…… 나를 떠나지 마……');
          await era.printAndWait(
            `${you.name}은(는) 두 눈을 감았다. 루나는 이토록 ${you.name}을(를) 신뢰하고 사랑하고 있었다. 그러니——`,
          );
          era.printButton('「내 손을 잡아, 루나!」', 1);
          era.printButton('「황제 폐하 만세!」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `말을 내뱉는 순간, ${you.name}은(는) 시간이 얼어붙는 것만 같았다. 그러나 다음 순간, ${you.name}은(는) 숨을 쉴 권리를 박탈당했다.`,
            );
            await era.printAndWait(
              `루나…… 아니, 황제가 손을 뻗어 ${you.name}의 목을 거세게 쥐어짰다.`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `당신의 말을 들은 루나는 마침내 안도한 듯했다. ${luna.sex}는 가라앉지 않기 위해 지푸라기라도 잡는 심정으로 ${you.name}에게 급히 손을 뻗었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 탄식하지 않을 수 없었다. 자신이 루나에게 대체 무슨 짓을 시킨 것인가.`,
        );
        await era.printAndWait(
          '어째서 진작 루나의 이상 징후를 알아채지 못했을까. 어떤 거친 파도가 몰아친다 해도.',
        );
        await era.printAndWait(
          `하지만 지금이라도 늦지 않았다! 루나의 트레이너이자 보호자, 그리고…… 연인으로서 ${you.name}은(는) 루나를 위해 모든 풍파를 막아낼 것이다.`,
        );
        era.printButton('「루나, 나는……」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 루나를 바라보며 ${luna.sex}의 손을 잡으려 했다.`,
        );
        await era.printAndWait(
          `하지만 그 순간, ${you.name}이(가) 수없이 맞잡았고, 영원히 놓지 않겠다고 맹세했던 그 손이 갑자기 앞으로 튀어나왔다.`,
        );
        await era.printAndWait('강철 집게처럼, 목을 무자비하게 죄어 왔다.');
        await emperor.say_and_wait('루나? 그게 누구냐?');
      }
      await era.printAndWait(
        `황제는 경멸 어린 눈으로 ${you.name}의 목을 쥔 채 몸을 일으켰다.`,
      );
      await emperor.say_and_wait(
        '짐이 얼마나 잠들어 있었지? 감히 짐의 영광을 탐내는 도적놈들은 어디 있느냐?',
      );
      await era.printAndWait(
        `${emperor.sex}는 주위를 둘러보았다. 이상하게도 잠에서 깨어날 때마다 ${emperor.sex}는 다른 장소에 있었다.`,
      );
      await era.printAndWait(
        '그리고 왜 깨어날 때마다 감히 짐의 의지를 거스르려는 놈들이 나타나는 것인지 의문이었다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 말도 못 하고 떨쳐낼 수도 없었다. 그저 입을 벌린 채 꺽꺽거리며 가쁜 숨을 몰아쉴 뿐이었다.`,
      );
      await era.printAndWait(
        `산소 부족으로 인해 ${you.name}의 시야가 서서히 흐려졌고, 의식은 멀어져 갔다.`,
      );
      await emperor.say_and_wait('흥.');
      await era.printAndWait(
        `대답을 듣지 못하는 것이 지루해진 듯, 황제는 아무렇게나 ${you.name}을(를) 바닥으로 내팽개쳤다. 둔탁한 소리와 함께 바닥에 처박힌 ${you.name}은(는) 장기가 으스러진 듯한 고통에 격렬하게 구토했다.`,
      );
      await era.printAndWait(
        `일어설 기력조차 없는 ${you.name}은(는) 바닥에 엎드린 채 황제의 발소리가 멀어지는 것을 들었다.`,
      );
      await era.printAndWait(
        `의식이 사라져가는 끄트머리에서, ${you.name}은(는) 다시 한번 루나의 울음소리를 들은 것 같았다.`,
      );
      await era.printAndWait('미안해…… 이제는 돌이킬 수 없어.');
      await era.printAndWait(`${you.name}은(는) 의식을 잃었다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
   * @param {boolean} i_good_end Good Ending か（その場合はシンボリルドルフ）
   * @param {boolean} i_emperor 現在が皇帝人格か（GE でない場合）
   */
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        '그대는 어떤 하늘을 좋아하나? 태양인가, 달인가? 결정하지 못해도 괜찮아. 그대가 어떤 하늘 아래 있든 언젠가 우리는 반드시 만나게 될 테니. 그래, 이번에는 우리가 그대를 찾아갈게.',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        '아직 앞으로 나아갈 수 있다면 이곳에 머물 이유가 없다! 짐의 천도는 멈추지 않는다. 경축하라, 광대여! 네놈은 황제의 위업을 목격하게 될 것이다. 그 포상으로 영원히 짐을 따르며 보필할 영광을 허락하마…… 대답은?',
      );
    } else {
      await chara17.say_and_wait(
        `황제의 이야기는 끝났지만 나의 사명은 아직 끝나지 않았어. 함께 그곳으로 가자. 모든 ${chara17.uma_sex_title}가 행복해질 수 있는 미래로. 음…… 그 미래에는 나도 포함되어 있겠지? 그러니까…… 그대가 나를 행복하게 해 줄 거지?`,
      );
    }
  },
};
