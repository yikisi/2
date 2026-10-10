/**
 * @file ワンダーアキュート - 恋慕
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  async '49-before'(acute) {
    await era.printAndWait([
      '요즘 어째서인지 ',
      acute.get_colored_name(),
      '은(는) 중정의 고목 구멍에 앉아 있는 일이 잦다.',
    ]);
    await era.printAndWait([
      '며칠 전 몰래 뒤따라가 멀리서 바라보니, ',
      acute.sex,
      '는 나무 구멍 안에서 무언가 생각에 잠긴 듯했다.',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      acute.get_colored_name(),
      '을(를) 더 알고 싶다면 중정의 고목 구멍을 들여다보는 것도 좋을 것 같다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async 49(acute, you) {
    await era.printAndWait('트레이닝 틈틈이, 혼자 중정으로 왔다.');
    await era.printAndWait([
      acute.get_colored_name(),
      '이(가) 가끔 들어가 있는 나무 구멍이 보여, 자연스레 그쪽으로 발길이 향했다.',
    ]);
    await era.printAndWait('몸을 굽혀 들여다보니, 구멍 안은 생각보다 좁았다.');
    await era.printAndWait(
      '가지인지 뿌리인지 모를 나뭇조각에 검은 흔적이 남아 있고, 울퉁불퉁한 표면 사이로 검은 개미가 기어 다닌다. 앉아 있어 봐야 편할 리 없다.',
    );
    await era.printAndWait([
      '그런데 구멍에 앉은 ',
      acute.get_colored_name(),
      '은(는) 어떻게 그렇게 편안해 보였을까.',
    ]);
    await era.printAndWait('이리저리 생각해 보아도——도무지 알 수 없다.');
    await era.printAndWait('「하아」 하고 한숨을 내쉬며 일어서려던 그때——');
    await you.say_and_wait('으악!?');
    await era.printAndWait(
      '갑자기 강한 힘이 두 다리를 밀어 올렸다. 눈앞의 하늘과 땅이 뒤바뀌고, 몸은 억지로 한 바퀴 돌아 구멍 안으로 「굴러」 들어갔다——',
    );
    await era.printAndWait('무슨 일이야!?');
    await era.printAndWait(
      '당황해서 비명을 지르려던 순간, 거꾸로 뒤집힌 하늘에 익숙한 얼굴이 나타났다.',
    );
    era.printButton(`「${acute.name}！」`, 1);
    await era.input();
    await era.printAndWait([
      '튀어나오려던 물음은, 아이처럼 신이 난 얼굴의 ',
      acute.get_colored_name(),
      '을(를) 보고 놀라움으로 바뀌었다.',
    ]);
    await era.printAndWait(
      '하지만 그 놀라움은 곧 새로운 의문에 자리를 내주었다.',
    );
    era.printButton(`「${acute.name}？」`, 1);
    await era.input();
    await era.printAndWait('두 번째로 이름을 불렀다.');
    await era.printAndWait(
      '처음의 멍한 기분이나 첫마디의 놀라움과는 달리, 이번 목소리는 거의 의문으로 가득했다.',
    );
    await era.printAndWait([
      '지금까지 ',
      you.get_colored_name(),
      '은(는) 이렇게 아이처럼 신이 난 ',
      acute.get_colored_name(),
      '을(를) 본 적이 없었다.',
    ]);
    await era.printAndWait('그런 모습이 지금, 갑자기 눈앞에 나타났다.');
    await era.printAndWait([
      '그것은 ',
      you.get_colored_name(),
      '을(를) 기쁘게 하면서도, 그보다 더 큰 당혹감을 안겼다——',
    ]);
    await era.printAndWait([
      '눈앞에서 아이처럼 기뻐하는 ',
      acute.get_colored_name(),
      '은(는) 정말 ',
      you.get_colored_name(),
      '이(가) 아는, 늘 온화하던 ',
      acute.get_colored_name(),
      '일까.',
    ]);
    await era.printAndWait([
      '눈앞의 ',
      acute.get_colored_name(),
      '은(는) 마치 ',
      you.get_colored_name(),
      '의 속마음을 듣기라도 한 듯, 두 번째 부름에 표정을 바꾸었다. 처음의 기쁨은 사라지고, 어째서인지 그 자리에 굳어 버렸다.',
    ]);
    await era.printAndWait([
      acute.sex,
      '가 굳어 버리자, ',
      you.get_colored_name(),
      '도 어쩔 줄 몰라 굳어 버렸다. 그렇게 ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 나란히 굳어 있었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 발목을 붙잡힌 채 거꾸로 나무 구멍 안에 누워 있었고, ',
      acute.sex,
      '는 ',
      you.get_colored_name(),
      '의 발목을 붙잡은 채 구멍 위로 몸을 숙이고 있었다.',
    ]);
    await era.printAndWait([
      acute.sex,
      'はうつむき、正面を遮る豊かな実を通して ',
      you.get_colored_name(),
      ' を見る。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は顔を上げ、できるだけその実の隙間から',
      acute.sex,
      'を見る。',
    ]);
    await era.printAndWait('……');
    await era.printAndWait([
      '한참 뒤, 그제야 무언가 깨달은 듯한 ',
      acute.get_colored_name(),
      '은(는) 귀까지 새빨개졌다.',
    ]);
    await era.printAndWait('………');
    await era.printAndWait([
      '겨우 ',
      acute.get_colored_name(),
      '의 메치기에서 풀려난 뒤에는, ',
      acute.get_colored_name(),
      '의 허둥지둥하는 사과를 들어야 했다.',
    ]);
    await era.printAndWait([
      '이야기를 들어 보니, ',
      acute.get_colored_name(),
      '은(는) 평소처럼 중정에 와 고목 구멍에서 쉬려다가, 구멍 앞에 웅크린 이쪽의 뒷모습을 문득 발견했다고 한다.',
    ]);
    await era.printAndWait([
      '그러다 어째서인지 「흥이 나서」 발목을 들어 올려, ',
      you.get_colored_name(),
      '을(를) 구멍 안으로 밀어 넣었다는 것이다.',
    ]);
    await you.say_and_wait('……');
    await acute.say_and_wait('……');
    await era.printAndWait([
      '둘 다 아무 말도 하지 못했다. 무슨 말을 해야 할지도 몰랐다. 다만 ',
      acute.get_colored_name(),
      '의 붉어진 뺨은 아직 가라앉지 않았고, 분주하게 흔들리는 시선은 말 못 할 생각을 감추고 있는 듯했다.',
    ]);
    await era.printAndWait('……무슨 생각을 하는 걸까.');
    await era.printAndWait([
      '솔직히 ',
      you.get_colored_name(),
      '은(는) 입 밖에 낼 수 없었다.',
      acute.get_colored_name(),
      '도 마찬가지로, 부끄러워 입을 열지 못했다.',
    ]);
    await era.printAndWait([
      '둘은 약속이라도 한 듯 서로의 얼굴을 보지 않고 나란히 고개를 돌렸다.',
    ]);
    await era.printAndWait(
      '처음에는 좁다고 생각했던 옆의 나무 구멍을 바라보다가, 감회와 이 어색한 침묵을 깨고 싶은 마음이 겹쳐 입을 열었다——',
    );
    await you.say_and_wait('……넓네.');
    await acute.say_and_wait('……그러게——');
    await era.printAndWait(
      '무슨 공감대가 생긴 건지 스스로도 모른 채, 둘은 나란히 고개를 끄덕였다——',
    );
  },
  async '74-before'(acute) {
    await era.printAndWait([
      '요즘 ',
      acute.get_colored_name(),
      '과(와) 함께하는 시간이 점점 길어지고 있다.',
    ]);
    await era.printAndWait([
      '떨어져 있어도 머릿속은 ',
      acute.sex,
      ' 생각으로 가득하다.',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      '어쩌면 ',
      acute.get_colored_name(),
      '과(와)의 관계를 한 걸음 더 진전시킬 수 있을지도 모른다.',
    ]);
    await era.printAndWait([
      '……마음의 준비가 되면 ',
      acute.get_colored_name(),
      '을(를) 역으로 데이트에 초대하자.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 74(acute, you, callname) {
    await era.printAndWait([
      acute.get_colored_name(),
      '와 함께 역 앞에서 데이트를 하러 갔다……',
    ]);
    await acute.say_and_wait([
      '저기…… ',
      you.actual_name,
      ' 선생님. 어째서 꼭 역까지 와야 했던 거니?',
    ]);
    await era.printAndWait('음…… 좋은 질문이다.');
    await era.printAndWait([
      you.get_colored_name(),
      '의 입장에서 보면, ',
      acute.get_colored_name(),
      '과(와) 단둘이 외출할 수만 있다면 어디든 데이트라고 부를 수 있을 터다.',
    ]);
    await era.printAndWait('그런데 역에 와야 비로소 「데이트」가 된다는 건가?');
    await era.printAndWait('이게 신의 짓궂은 취향 때문이 아니라면, ');
    await era.printAndWait('그러니까……');
    era.println();

    era.printButton(`「${acute.name}에게 고백한다. (관계 진전)`, 1);
    era.printButton(
      '……내가 너무 깊게 생각한 걸지도 몰라. (당분간 진전 없음)',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        '……굳이 「데이트」라고 강조한 이유를 아직도 묻는 건가.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        acute.get_colored_name(),
        '을(를) 좋아한다. 그래서 데이트를 구실로 ',
        acute.sex,
        '에게 고백하고 싶었다.',
      ]);
      await era.printAndWait('——그 밖에 무슨 이유가 있겠는가.');
      await era.printAndWait([
        '그렇다. ',
        you.get_colored_name(),
        '은(는) ',
        acute.get_colored_name(),
        '을(를) 좋아한다.',
      ]);
      await era.printAndWait(
        '꺼림칙한 비밀 따위가 아니다. 수없이 가슴이 두근거린 끝에, 마침내 인정하게 된 사실일 뿐이다.',
      );
      await era.printAndWait(
        '아무리 어려워도 이겨 내겠다며 트레이닝장에 흘린 땀.',
      );
      await era.printAndWait('아무리 피곤해도 미소로 답해 주는 온화함.');
      await era.printAndWait('셀 수 없이 함께 보낸 낮과 밤.');
      await era.printAndWait('셀 수 없이 함께 맛본 단무지.');
      await era.printAndWait(
        '같은 넓은 하늘 아래 있으면서도, 별을 올려다볼 여유는 한 번도 없었다.',
      );
      await era.printAndWait(
        '손끝이 맞닿는 일 자체가 기적으로 이루어진 꿈일지도 모르니까.',
      );
      await era.printAndWait('하늘에서 문득 비가 내려 역의 지붕을 두드린다.');
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '은(는) 나란히 앉아 있다. 빗소리 속에서 왼쪽 가슴이 두근거린다.',
      ]);
      await you.say_and_wait(
        ['그래, 용기를 내라, ', you.actual_name, '. 용기를 내.'],
        true,
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '처럼——노력하고, 용감하게, 꺾이지 않고.',
      ]);
      await era.printAndWait(
        '왼쪽 가슴이 두근거리고, 빗소리 속에서 손끝이 살며시 다가간다.',
      );
      await you.say_and_wait(
        [
          '그래, ',
          acute.sex,
          ' 쪽을 바라봐라, ',
          you.actual_name,
          '、',
          acute.sex,
          ' 쪽을 바라봐.',
        ],
        true,
      );
      await era.printAndWait([
        '빗소리 속에서 ',
        acute.get_colored_name(),
        '은(는) 고개를 들고 있다.',
      ]);
      await era.printAndWait([
        acute.sex,
        '의 시선은 평소와 다름없이, 어딘지 모를 먼 곳을 향하고 있었다.',
      ]);
      await you.say_and_wait(['말해라, ', acute.sex, '에게 말해.'], true);
      await era.printAndWait(['그래, 말해라, ', you.actual_name, '。']);
      await era.printAndWait([
        acute.get_colored_name(),
        '에게, 내가 얼마나 ',
        acute.sex,
        '를 좋아하는지 말하는 거야.',
      ]);
      await era.printAndWait(
        '입술이 가늘게 떨렸고, 맴도는 말들은 다이아몬드 결정처럼 굳어, 목구멍을 꽉 틀어막고 있었다.',
      );
      await you.say_and_wait(['말해라, ', acute.sex, '에게 말해.'], true);
      era.printButton('「나, 나는……나는——」', 1);
      await era.input();
      await acute.say_and_wait('좋아한단다, 트레이너.');
      await you.say_and_wait('……어?');
      await acute.say_and_wait('——————');
      await era.printAndWait(
        '빗방울이 떨어지는 순간, 공기와 이 찰나의 시간이 얼어붙었다.',
      );
      await era.printAndWait([
        '귓가에 남은 것은 ',
        you.get_colored_name(),
        '이(가) 들으리라고는 생각지도 못했던 목소리.',
      ]);
      await era.printAndWait([
        '줄곧 앞을 바라보던 ',
        acute.get_colored_name(),
        '은(는) 어느새 시선을 돌려, 눈에 띄지 않는 ',
        you.get_colored_name(),
        '을(를) 바라보고 있었다.',
      ]);
      await era.printAndWait('이럴 리가 없는데…… 이럴 리는, 없었잖아.');
      await era.printAndWait([
        acute.get_colored_name(),
        '처럼 강하고 용감한 ',
        acute.phy_sex_title,
        '이(가), 어째서……',
      ]);
      await acute.say_and_wait([
        '정말로 좋아한단다, ',
        you.actual_name,
        ' 선생님.',
      ]);
      await era.printAndWait([
        '이번에는, ',
        acute.sex,
        '의 목소리가 더 이상 희미하지 않았다.',
      ]);
      await era.printAndWait([
        '부드러우면서도 굳은 심지가 느껴지는 눈빛이, 붉게 물든 부끄러움과 함께 ',
        you.get_colored_name(),
        '을(를) 바라본다.',
      ]);
      era.printButton('「나, 나는……」', 1);
      await era.input();
      await acute.say_and_wait([
        '서두르지 마려무나, ',
        callname,
        '. 천천히 말해 보렴~',
      ]);
      era.printButton(`「나도——나도 널 좋아해, ${acute.name}！」`, 1);
      await era.input();
      await era.printAndWait('————————');
      await era.printAndWait('어느 맑게 갠 오후.');
      await era.printAndWait('많지도 적지도 않은 비가 내리는 가운데.');
      await era.printAndWait('역의 작은 지붕 아래에서 비를 피하던 두 사람은,');
      await era.printAndWait('조용히, 어느새 서로에게 다가가고 있었다……');
      await era.printAndWait('……………………');
      await era.printAndWait([
        '【',
        acute.get_colored_name(),
        '와 연인 관계가 되었습니다!】',
      ]);
    } else {
      await era.printAndWait([
        '담당 ',
        acute.uma_sex_title,
        '와(과) 데이트하는 데 이유가 필요할까.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 있고 싶고, ',
        acute.get_colored_name(),
        '와 함께 있으면 즐겁다, 이유는 그저 그뿐이다.',
      ]);
      await era.printAndWait(
        '고개를 내저으며, 쓸데없는 고민을 모두 털어버렸다.',
      );
      await era.printAndWait('………………');
      await era.printAndWait([
        acute.get_colored_name(),
        '와 역 앞에서 즐거운 시간을 보냈다.',
      ]);
    }
    return ret;
  },
  async '89-before'(acute, you) {
    await era.printAndWait([
      acute.get_colored_name(),
      '과(와) 사랑하는 것은 정말 행복한 일이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 서로를 안을 때마다 사람이 없는 곳을 골라야 한다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 그렇게 숨어서 행동하는 것이 말로 표현하기 어렵게 마음에 걸렸다.',
    ]);
    await era.printAndWait([
      '그 초조함을 ',
      acute.get_colored_name(),
      '에게 털어놓아도, ',
      acute.sex,
      '는 늘 미소 지으며 이렇게 말한다.',
    ]);
    await acute.used_to_say_and_wait(
      '괜찮단다. 나는 지금도 충분히 행복하니까.',
    );
    await era.printAndWait([
      '하지만 밀회처럼 숨기는 이 관계가 정말 ',
      acute.get_colored_name(),
      '에게 공평한 걸까.',
    ]);
    await era.printAndWait([
      '……어쩌면 ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 이 사랑을 공개해도 될지 모른다.',
    ]);
    await era.printAndWait(
      '트레센의 모두 앞에서 이 사랑을 공개하려면 【강철 같은 의지】가 필요할 것이다.',
    );
    await era.printAndWait('그래도 망설임 없이 이 한 걸음을 내딛기로 했다면——');
    await era.printAndWait([
      acute.get_colored_name(),
      '과(와) 중정에서 데이트하자.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 89(acute, tama, you, callname) {
    tama.name = `어느 간사이의 ${tama.uma_sex_title}`;
    await era.printAndWait([
      '사람이 많이 오가는 중정에서 다른 ',
      acute.uma_sex_title,
      '들의 시선을 견디며 데이트하려면 상당한 각오가 필요하다……',
    ]);
    await acute.say_and_wait('어머…… 여기서 데이트하는 거니? 나는 괜찮단다~');
    await era.printAndWait([
      acute.get_colored_name(),
      '은(는) 주위 ',
      acute.uma_sex_title,
      '들의 시선 따위 신경 쓰지 않는 듯했다……',
    ]);
    await era.printAndWait([
      '정작 한 걸음을 내딛지 못하는 건 ',
      you.get_colored_name(),
      ' 쪽이다.',
    ]);
    await era.printAndWait([
      '——',
      acute.get_colored_name(),
      '의 기대 어린 눈빛이 느껴진다.',
    ]);
    await era.printAndWait('………………');
    await you.say_and_wait('너는 언제까지 겁쟁이로 있을 셈이냐.');
    await era.printAndWait('문득 가슴속으로 그런 말이 스쳤다.');
    await era.printAndWait('순간, 몸 안으로 충동이 내달렸다——');
    await acute.say_and_wait(['왜 그러니?', callname, '……읍!']);
    await era.printAndWait([
      acute.get_colored_name(),
      '이(가) 질문을 마치기도 전에, ',
      you.get_colored_name(),
      '은(는) ',
      acute.get_colored_name(),
      '을(를) 끌어안고 있었다.',
    ]);
    await era.printAndWait(
      '입술 위로 또 다른 입술이 포개지고, 달콤한 기운이 가슴 깊이 스며든다.',
    );
    await era.printAndWait(
      '一方は強く、一方は迷い、やがて門が叩かれ、激しい交換が始まる——',
    );
    await era.printAndWait('…………');
    await you.say_as_passer_by_and_wait(
      '타임라인 이용자',
      '어, 저기 봐. 중정에서 키스하고 있어.',
    );
    await you.say_as_passer_by_and_wait(
      '우마 계정 이용자',
      '와, 진짜!? 찍어서 올려야지~',
    );
    await tama.say_and_wait([
      '참 징그러운 커플이네. 게다가 우리 학교 ',
      acute.uma_sex_title,
      '라니, 꼴사납구마.',
    ]);
    await era.printAndWait('…………');
    await acute.say_and_wait([
      '읍～～～하아……',
      callname.substring(0, 1),
      '、',
      callname,
      '——',
    ]);
    await era.printAndWait([
      '품에 안긴 ',
      acute.get_colored_name(),
      '는, 뺨을 붉힌 채 몽롱한 눈빛으로 당신을 바라보고 있었다.',
    ]);
    await era.printAndWait(
      '거절하는 것도 아니고, 동의하는 것도 아닌, 마치 밀당을 하는 듯한……',
    );
    await era.printAndWait(
      '왜 이런 짓을 한 걸까? 이렇게 대담하게 굴면 어떤 결과가 따를까?',
    );
    await era.printAndWait('그런 건 어찌 되든 상관없었다.');
    await era.printAndWait('적어도 지금은……지금은.');
    await era.printAndWait('지금은 무척 행복하니까, 이걸로 충분했다.');
  },
  async '99-before'(acute, you) {
    await era.printAndWait(
      '【그대여, 금실로 수놓은 옷을 아끼지 말고 젊은 시절을 아끼라.】',
    );
    await era.printAndWait(
      '【꽃이 피어 꺾을 수 있을 때 바로 꺾어라. 꽃이 진 뒤 헛되이 가지를 꺾지 말라.】',
    );
    await era.printAndWait('………………');
    await era.printAndWait([
      acute.get_colored_name(),
      '과(와) 사랑한 지도 오래되었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 매일 같은 시각에 일어나고, 같은 시각에 먹고, 같은 시각에 트레이닝하고, 같은 시각에 레이스에 나선다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 언제나 서로를 받쳐 주고, ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 언제나 떨어지지 않는다.',
    ]);
    await era.printAndWait([
      '의심할 여지 없이 ',
      you.get_colored_name(),
      '은(는) ',
      acute.get_colored_name(),
      '을(를) 사랑한다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 생각한다. ',
      acute.get_colored_name(),
      '도 ',
      you.get_colored_name(),
      '을(를) 사랑한다고.',
    ]);
    await era.printAndWait([
      '그렇기에 ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 트레이닝과 일상의 모든 순간을 함께할 수 있다.',
    ]);
    await era.printAndWait('——하지만 이 생활이 정말 영원히 이어질까.');
    await era.printAndWait('………………');
    await era.printAndWait(
      '나이는 세월을 따라 달리고, 뜻은 날이 갈수록 사라진다.',
    );
    await era.printAndWait('삼 년의 시간은 언제나 조용히 흘러간다.');
    await era.printAndWait([
      '설령 삼 년에 불과한 덧없는 꿈이라 해도, ',
      acute.get_colored_name(),
      '과(와) 사랑했던 날들은 ',
      you.get_colored_name(),
      '의 인생에서 가장 행복한 시간이다.',
    ]);
    await era.printAndWait(
      '하지만 이 행복을 놓고 싶지 않다면, 잿빛의 뜨거운 사랑을 삶의 끝까지 불태우고 싶다면.',
    );
    await era.printAndWait([
      '——그렇다면 ',
      acute.get_colored_name(),
      '과(와) 【돌아올 약속】과 【다시 만날 맹세】를 나누자.',
    ]);
    await era.printAndWait([
      '준비가 되면 ',
      acute.sex,
      '는 옥상에서 ',
      you.get_colored_name(),
      '을(를) 기다리고 있다.',
    ]);
  },
  async '99-notify'(acute, you) {
    await era.printAndWait([
      '준비가 되면 ',
      acute.sex,
      '는 옥상에서 ',
      you.get_colored_name(),
      '을(를) 기다리고 있다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 99(acute, you, callname) {
    await era.printAndWait(
      '하늘 끝에서 굉음이 한 번 울리고, 강철 새가 주황색 비행운을 남긴다.',
    );
    await era.printAndWait(
      '황혼의 눈부신 빛도 곧 막을 내린다. 그 뒤에는 칠흑 속 아련한 달밤이 찾아올 것이다.',
    );
    await era.printAndWait([
      '옥상에서 ',
      acute.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '에게 등을 돌린 채 하늘 끝의 구름을 올려다보고 있다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '이(가) 처음 만났을 때처럼, ',
      acute.get_colored_name(),
      '이(가) 옥상에서 갈 곳을 잃은 ',
      you.get_colored_name(),
      '을(를) 거두어 주었던 그때처럼, 오늘 밤 옥상에도 ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      ' 단둘뿐이다.',
    ]);
    await era.printAndWait([
      '——하지만 오늘 밤, ',
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '이(가) 서 있는 위치는 그때와 반대다.',
    ]);
    await era.printAndWait([
      '옥상 문을 살며시 닫고 가슴속의 술렁임을 가라앉히며, ',
      you.get_colored_name(),
      '은(는) 천천히 다가간다.',
    ]);
    await era.printAndWait([
      acute.sex,
      '의 뒤에 서서, ',
      acute.sex,
      '과(와) 함께 하늘의 귤색 뜬구름을 올려다보았다.',
    ]);
    await era.printAndWait(['그러고는, ', acute.sex, '의 말투를 흉내 내며——']);
    era.printButton('「어머나, 어머나」', 1);
    await era.input();
    era.printButton('「계속 한숨을 쉬면, 복이 달아나 버릴게야——」', 1);
    await era.input();
    await acute.say_and_wait('——');
    await era.printAndWait(
      '걱정 어린 말들은, 하늘로 흩어지고 바람 속에 부서졌다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 아는 ',
      acute.get_colored_name(),
      '답게, ',
      acute.sex,
      '에게는 별다른 놀라움도 없다.',
    ]);
    await era.printAndWait([
      acute.sex,
      '는 천천히 몸을 돌려 발돋움을 했고, 평온한 표정 아래, 짙은 눈동자에는 눈물이 맺혀 있었다.',
    ]);
    await acute.say_and_wait(['와 주었구나, ', callname, '。']);
    era.printButton(`「왔어, 원더 어큐트.」`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '은(는) 인사를 나눈다. 그 평온함만으로도 이미 많은 의미가 담겨 있다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      acute.sex,
      '는 두 팔을 벌리지 않고, 그에 맞춰 ',
      you.get_colored_name(),
      '도 팔을 벌리지 않는다.',
    ]);
    await era.printAndWait(
      '이것은 단순한 감사의 포옹이 아니다. 마음까지 독차지하고 싶은 뜨거운 욕심이다.',
    );
    await era.printAndWait(
      'つま先が立ち、きれいな鼻筋が顎の剃り残しを上下に撫で、桜色の痕が赤白い首筋に吸いつく。',
    );
    await era.printAndWait([
      '揺れる両耳が、',
      you.get_colored_name(),
      ' の口元を滑る。',
    ]);
    await era.printAndWait(
      '桃色のものが蠕き、深い灰色を飲み込みたがっている——',
    );
  },
  async '99-end'(acute, callname) {
    await era.printAndWait([
      '熱い液体の交換のあと、まだ溢れる泉を構わず、',
      acute.get_colored_name(),
      ' は下を包む白い布を身につけた。',
    ]);
    await era.printAndWait('月明かりの下、下腹の刻印が桃色の微光を放つ。');
    await era.printAndWait([
      acute.get_colored_name(),
      ' は言う。これはトレセンの最近の流行だ、と。この刻印を体に持つ',
      acute.uma_sex_title,
      'は、刻印の主だけのものになる、と。',
    ]);
    await era.printAndWait('そして今、刻印はあと一歩だ。');
    await acute.say_and_wait(['……ねえ、', callname, '？']);
    await era.printAndWait(
      '長いスカートを咥え、白い腹を見せ、言葉にならない欲を訴える。',
    );
    await era.printAndWait(
      '開いた胸は豊かな赤い実を晒し、両手に捧げる銀の輪は献上の宝物のようだ。',
    );
    await era.printAndWait(
      '野の鳥が慈悲を請うようでも、主を認めた家畜のようでもある。目尻の銀の珠が、胸の高ぶりを止められない。',
    );
    await era.printAndWait([
      'その精緻な銀の輪を受け取り、自分の両手で、',
      acute.get_colored_name(),
      ' の首にかける。',
    ]);
    await era.printAndWait([
      'それから、満ち足りた ',
      acute.get_colored_name(),
      ' は、微笑んで蹲る。',
    ]);
    await era.printAndWait('赤い舌を出し、獰猛な主獣に仕える。');
  },
};
