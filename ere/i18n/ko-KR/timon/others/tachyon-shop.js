/**
 * @file 売店 - システム提示
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * タキオンがチームにいる、熱恋＆良好以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      '오호,',
      callname,
      '……이런 곳까지 오다니. 꽤……성급하군……',
    ]);
    await printAndWait([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입고 뺨을 붉힌 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었고, 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    await printAndWait([
      '수상한 행동을 하는 그',
      tachyon.sex,
      '은(는)',
      you.get_colored_name(),
      '의 담당',
      tachyon.uma_sex_title,
      '이자 연인인',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        '……설마 너무 많이 해서 약이 필요하다는 거야……아, 아니……궁합 실험에 필요하니까 어쩔 수 없지……',
      );
      await tachyon.say_and_wait(
        '그리고, 그……기분 좋았으니까……넉넉히 사 둬. 돌아가서 쓰기 편하잖아❤️',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        '자, 잠깐, 다른 사람이랑 하려는 건 아니지?……아, 아니, 그럴 리가……이건……나랑 하려고 사는 거지?',
      );
      await tachyon.say_and_wait(
        '정말? 거짓말 아니지?……알았어. 밤에 기대하고 있을게❤️',
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        '……그래, 알고 있네. 사귀기 시작한 이상 그 정도 각오는 되어 있어……',
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          '듣기로는 인간 남성의 성욕이 꽤 강하다던데……솔직히 지금까지 참고 여기에 오지 않았다는 게 놀라울 정도야……',
        );
      }
      await tachyon.say_and_wait([
        '먼저 확인할게. 그럴 리는 없다고 생각하지만……이 약은 나랑 하려고 사는 거지?……',
        callname,
        '？',
      ]);
    }
    await tachyon.say_and_wait('어쨌든 오늘의 물건을 살펴보도록 하지.');
  },
  /**
   * タキオンがチームにいる、愛欲＆良好以上
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '? 여기서 뭘 하고 있나?']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('……또 왔나? 이번에는 누구와……');
    } else {
      tachyon.say([
        '그렇게 했는데도 아직 부족해……대단한 정력이네, ',
        callname,
        '. 안을 해부해서 연구해 보고 싶어지는군.',
      ]);
    }
    print([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었고, 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    print([
      '수상한 행동을 하는 그',
      tachyon.sex,
      '은(는)',
      you.get_colored_name(),
      '의 담당',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '……여기서 뭘 파는지는 알고 있겠지……그러니까……자, 자네에게는 그런 상대가 있나?',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        '은(는) 어째서인지 긴장한 얼굴로 물었다',
      ]);
      printButton('물론 있다', 1);
      printButton('없다', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          '오호? 상대가 누구지? 온몸에서 빛이 나는 수상한 자네를 마음에 들어 하는 사람이 있나? 인간? 아니면',
          tachyon.uma_sex_title,
          '？',
        ]);
        await tachyon.say_and_wait(
          '아니, 이건 생물 다양성에 관한 고찰일세. 좋아하는 상대의 정보를 제공하는 것은 모르모트로서 최소한의 정보 공유라네……',
        );
        await tachyon.say_and_wait('뭐, 좋아. 언젠가 알아낼 기회가 있겠지.');
      } else {
        await tachyon.say_and_wait(
          '……후후, 예상대로군. 온몸에서 빛이 나는 수상한 자네를 좋아하는 사람이 있다면 오히려 관찰하고 연구해 보고 싶을 정도야.',
        );
        await tachyon.say_and_wait([
          '하지만 그렇다면 약을 찾는 이유를 모르겠군. 이봐,',
          callname,
          '. 범죄에 가까운 짓을 하려는 건 아니겠지?',
        ]);
        await tachyon.say_and_wait(
          '그러고 보니 약의 반응에 관한 피드백을 한동안 받지 못한 것 같군……',
        );
        await tachyon.say_and_wait(
          '뭐, 좋아. 마음대로 쓰게. 연구를 위해서라면 어떤 대가든 시도할 가치가 있지……나 자신이라 해도 말이야.',
        );
        await tachyon.say_and_wait(
          '무엇을 암시하느냐고? 후후, 글쎄. 둔감한 누군가에게 이 뜻이 통할지는 모르겠지만.',
        );
      }
    }
    tachyon.say('어쨌든 오늘의 물건을 살펴보도록 하지.');
  },
  /**
   * タキオンがチームにいる、低恋慕＆冷淡以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(['오호,', callname, '아닌가.']);
    await printAndWait([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다.',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었고, 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다',
    ]);
    await printAndWait([
      '수상한 행동을 하는 그',
      tachyon.sex,
      '은(는)',
      you.get_colored_name(),
      '의 담당',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      '설마 그런 사람이었을 줄이야……뭐, 좋아. 먹는 것과 성은 본성이지. 굳이 약까지 사러 오다니,',
    );
    await tachyon.say_and_wait([
      '평소 약의 양을 두 배로 늘리는 게 좋으려나……어쨌든 말해 보게. 어느',
      tachyon.uma_sex_title,
      '에게 눈독을 들이고 있나?',
    ]);
    printButton('대답한다', 1);
    printButton('고개를 저으며 거절한다', 2);
    if ((await input()) === 1) {
      print('상대의 이름 입력:');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case 'アグネスタキオン':
        case 'タキオン':
        case '你':
        case '妳':
        case 'あなた':
        case '君':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '. 그런 농담은 입에 담지 않는 편이 좋겠네.',
            ]);
            await printAndWait([
              tachyon.sex,
              '은(는) 억지웃음을 지었지만, 눈빛은 분명히 경고하고 있었다',
            ]);
            await printAndWait([
              '이 질문은',
              tachyon.get_colored_name(),
              '을(를) 화나게 한 모양이다. 말하지 않는 편이 좋겠다……',
            ]);
          } else {
            await tachyon.say_and_wait(
              '그렇게 내가 마음에 든다면 내일 이 약을 시험해 보게.',
            );
            await tachyon.say_and_wait([
              '어째서인지 이걸 마신 사람은 모두 아름다운',
              tachyon.teen_sex_title,
              '의 모습이 보인다고 하더군. 그 아름다운',
              tachyon.teen_sex_title,
              '외에는 세상이 고깃덩어리로 보인다는 모양이야……',
            ]);
            await tachyon.say_and_wait(
              '이상하군. 시력을 높이는 약일 텐데, 어째서 그렇게 되는 걸까?',
            );
            await printAndWait([
              tachyon.sex,
              '은(는)',
              you.get_colored_name(),
              '의 말을 가볍게 넘겼다. 진지하게 받아들이지는 않는 듯하다',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
        case 'マンハッタンカフェ':
        case 'カフェ':
          // カフェとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait('카페라고……!');
            await printAndWait([
              tachyon.get_colored_name(),
              '은(는) 어째서인지 감탄한 표정을 지었다',
            ]);
            await tachyon.say_and_wait(
              '원하는 건 마음껏 가져가게! 정가의 80……아니 70퍼센트만 받지! 다만 전 과정을 기록할 것!',
            );
            await tachyon.say_and_wait(
              '실험 보고서 양식으로 작성해서……아니, 전부 녹화하게!',
            );
            await tachyon.say_and_wait(
              '크크크……실험뿐 아니라 그 애가 정욕에 빠지는 모습까지 볼 수 있다니……너무 재미있군!',
            );
            await printAndWait([
              you.get_colored_name(),
              '은(는)',
              tachyon.get_colored_name(),
              '의 속사포 같은 말에 놀라, 황급히',
              tachyon.sex,
              '의 제안을 거절했다',
            ]);
            await tachyon.say_and_wait('큭……거절인가? 뭐, 좋아.');
            await printAndWait([
              tachyon.get_colored_name(),
              '은(는) 실망하여 한숨을 쉬고 백의 안쪽을 뒤지기 시작했다',
            ]);
            await tachyon.say_and_wait([
              '그렇다면……이걸 주지,',
              callname,
              '。',
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는)',
              tachyon.get_colored_name(),
              '에게 장기 기증 동의서를 받았다. 기증처는',
              tachyon.get_colored_name(),
              '의 연구실이었다',
            ]);
            printButton('……', 1);
            await input();
            await tachyon.say_and_wait([
              '카페라면 시체를 가지고 노는 취미는 없을 테니, 80퍼센트쯤은 연구용으로 남겨 주겠지. 나중에',
              tachyon.sex,
              '과(와) 이야기해서 깔끔하게 자르도록 해 두면……',
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 식은땀을 흘리며, 웃는 얼굴로 그 말을 하는',
              tachyon.get_colored_name(),
              '을(를) 바라보았다',
            ]);
            await tachyon.say_and_wait(
              '하하하, 농담일세……하지만 만일을 위해 서명해 두겠나?',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
        case 'ダイワスカーレット':
        case 'ダイワ':
        case 'スカーレット':
          // ダイワとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '. 혹시 몰라 묻겠네. 내일이 인생의 마지막 날이라면 무슨 색 약을 마시고 싶나?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              '은(는) 거의 냉혹한 눈으로',
              you.get_colored_name(),
              '을(를) 바라보았다',
            ]);
            printButton('「……！？」', 1);
            printButton('「목숨만은!」', 2);
            tachyon.sex_code - 1 &&
              printButton('「적어도 다이와의 품에서 죽게 해 줘!」', 3);
            await input();
            await tachyon.say_and_wait([
              '후후……농담일세……하지만',
              callname,
              ', 산과 바다 중 어느 쪽이 좋나?',
            ]);
            await tachyon.say_and_wait(
              '아니, 이런 어리석은 질문을 하다니 나도 이상하군. 역시 연구실의 포르말린을 가장 좋아하겠지?',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              '의 눈은 농담하는 것으로 보이지 않았다……',
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
        case 'ジャングルポケット':
        case 'ポケット':
          // ポケットとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '. 바보를 범하는 건 불법이라네?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              '은(는) 쓰레기를 보는 듯한 눈으로',
              you.get_colored_name(),
              '을(를) 바라보았다',
            ]);
            await tachyon.say_and_wait([
              '상인이자 미치광이 과학자로서 참견하지 않으려 했지만, 신고하고 싶어지는군,',
              callname,
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 쓴웃음을 지을 수밖에 없었다',
            ]);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          '오호……흥미롭군. 그렇다면 사용 후의 데이터와 감정 변화를 보고서 형식으로 제출하게.',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          '은(는) 흥미로워 보였지만,',
          you.get_colored_name(),
          '은(는) 그것이 실험 데이터에 대한 관심일 뿐임을 알았다',
        ]);
      }
    } else {
      await tachyon.say_and_wait(
        '그렇게 부끄러워할 것 없네. 다른 사람에게는 말하지 않을 테니.',
      );
      await printAndWait([
        tachyon.get_colored_name(),
        '은(는) 흥이 식은 표정을 지었다',
      ]);
    }
    await tachyon.say_and_wait('어쨌든 오늘의 물건을 살펴보도록 하지.');
  },
  /**
   * タキオンがチームにいる、疑念、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_doubt(tachyon, you) {
    tachyon.say('……왔군. 이번에는 누구를 해칠 셈인가?');
    print([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입고 뺨을 붉힌 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었지만,',
      you.get_colored_name(),
      '을(를) 본 순간 오물을 보는 눈으로 변했다. 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    tachyon.say(
      '쯧……진심으로 하는 말인데, 자네 같은 상대에게 약을 팔아도 될까? 같은 생각을 수십 번은 했다네.',
    );
    tachyon.say('뭐, 좋아. 오늘의 물건은 직접 보게.');
  },
  /**
   * タキオンがチームにいる、失望、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_hate(tachyon, you) {
    tachyon.say('……쯧.');
    print([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다.',
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었지만,',
    ]);
    print([
      you.get_colored_name(),
      '을(를) 본 순간 증오 어린 빛으로 변했다. 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    print([
      '증오 어린 눈으로',
      you.get_colored_name(),
      '을(를) 바라보는 그',
      tachyon.sex,
      '은(는)',
      you.get_colored_name(),
      '의 담당',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '더 다루기 쉬운 실험동물만 있다면, 이 약들에 살아 있는 것이 괴로워질 만한 무언가를 섞고 싶어지는군.',
    );
    print([tachyon.sex, '은(는) 태연하게 위험한 말을 했다']);
    tachyon.say('직접 보게. 돈을 놓고 얼른 사라지게나.');
  },
  /**
   * タキオンがチームにいる、汎用
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start(tachyon, you, callname) {
    tachyon.say([
      '미리 확인해두겠는데, 자네가 그럴 리 없다고 생각은 하지만…… 이 약들, 나랑 하기 위해 사는 거 맞겠지? ……',
      callname,
      '아닌가.',
    ]);
    print([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었고, 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    print([
      '수상한 행동을 하는 그',
      tachyon.sex,
      '은(는)',
      you.get_colored_name(),
      '의 담당',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '이제 풋내기는 아니겠지. 뭘 하는 곳인지 알겠나? 원하는 약을 말하게. 마신 다음 날에는 잊지 말고 실험 결과를 제출하도록.',
    );
    printButton('「이제 대놓고 실험이라고 하네……」', 1);
    printButton('「실험약이면 돈은 받지 말아야지」', 2);
    await input();
    tachyon.say([
      '흐음～～ 살 약에 생식기가 빛난다거나, 전신의 피부가 투명해진다거나, 배출하는 정액이 강산성이 되는 실험용 약을 섞어도 괜찮다면 공짜로 줘도 되겠군',
    ]);
    print([you.get_colored_name(), '은(는) 얌전히 지갑을 꺼냈다']);
    tachyon.say('그래야지. 그럼 오늘의 물건을 살펴보도록 하지.');
  },
  /**
   * タキオンがチームにいる場合の売店導入の締め。どの分岐も最後はこの一文
   * @param {CharaTalk} tachyon タキオン
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      '은(는)',
      tachyon.sex,
      '의 백의를 펼쳤다……',
    ]);
  },
  /**
   * タキオンがチームにいない、純粋な初見
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      '오호, 새로운 봉……아니, 모르모트……그러니까 손님이군.',
    );
    await printAndWait([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 만났다',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드같은 짙은 붉은 눈동자에는 광기와 신비가 서려 있었고,',
    ]);
    await printAndWait(
      '좀 커 보이는 흰 가운은 안에 걸려있는 물건들로 꽉 차 있었다.',
    );
    await tachyon.say_as_unknown_and_wait(
      '하하하, 여기까지 왔으니, 여기가 무슨 곳인지 잘 알고 있겠지.',
    );
    printButton('「몰라」', 1);
    printButton('「……몰라」', 2);
    printButton('「알지」', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          '오오, 설마 순수한 어린양인가? 괜찮아. 보면 알 거네.',
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          '하하, 누구도 믿지 않을 거짓말을 왜 하는 건가? 정말 불성실하군.',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          '정직한 착한 아이……아니, 이런 상황에서는 나쁜 아이라고 해야겠지?',
        );
    }
    await tachyon.say_as_unknown_and_wait('그럼 오늘 준비한 것을 보여주지.');
    await printAndWait([
      '밤색 머리의',
      tachyon.uma_sex_title,
      '은(는)',
      tachyon.sex,
      '의 백의를 펼쳤다……',
    ]);
  },
  /**
   * タキオンがチームにいないが、募集の第一環は済んでいる
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        '오호, 새로운 봉……아니, 모르모트……그러니까 손님이군.',
      );
    } else {
      tachyon.say(
        '오호, 또 자네로군, 손님. 트레이너란 그렇게 문란한 직업인가? 쯧쯧.',
      );
    }
    print([
      '돌아다니던',
      you.get_colored_name(),
      '은(는) 백의를 입은 수상한 밤색 머리의',
      tachyon.uma_sex_title,
      '을(를) 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍색 눈에는 광기와 신비가 깃들었고, 조금 큰 백의는 안쪽에 매단 물건들로 빵빵했다.',
    ]);
    print([
      '그런',
      tachyon.sex,
      '은(는) 학원에서도 이름난 문제아,',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        '오호? 어디서 본 얼굴인데……그래, 내 기억이 맞는다면 자네는 트레이너겠지?',
      );
      printButton('「아니야」', 1);
      printButton('「……아니야」', 2);
      printButton('「맞아」', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            '음? 잘못 기억했나?……아니면 암시장에서 만났던……',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            '은(는) 소름 끼치는 단어를 중얼거렸다',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            '하하하, 안심하게! 이런 일에는 입이 무겁다네. 담당인',
            tachyon.uma_sex_title,
            '에게는 말하지 않겠어.',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            "은(는) '알고 있다'는 듯 수수께끼 같은 미소를 지었다",
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            '……그렇게 순순히 인정하는군. 담당인',
            tachyon.uma_sex_title,
            '이(가) 가엾어지는군.',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어이없다는 표정을 지었다',
          ]);
      }
    }
    tachyon.say('어쨌든 오늘의 물건부터 보도록 하지.');
    await printAndWait([
      tachyon.get_colored_name(),
      '은(는)',
      tachyon.sex,
      '의 백의를 펼쳤다……',
    ]);
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      '응……그렇게 적게 사도 충분해? 뭐? 네 능력을 의심하냐고? 아니, 그런 뜻이 아니라……잔뜩 벌해 주겠다고? 후후, 그럼 밤을 기대하고 있을게❤️',
    );
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '!? 이렇게 많이 사다니……버틸 수 있을까……후후, 기대되네. 게다가 끝나고 나면 약으로 인한 변화를 가장 직접적으로 느낄 수 있어……',
    );
    tachyon.say('오늘 밤은 잔뜩 즐기게 해 줘❤️……');
  },
  /**
   * 売店を離れる、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('오호, 그렇게 적게 사도 괜찮겠나?');
      tachyon.say_as_unknown(
        '아니, 호기심일세. 이런 것은 개인차도 있겠지. 가능하면 실험 횟수는 많은 편이……아무것도 아니네.',
      );
    } else {
      tachyon.say('오호, 그렇게 적게 사도 괜찮겠나?');
      tachyon.say(
        '아니, 호기심일세. 이런 것은 개인차도 있겠지. 가능하면 실험 횟수는 많은 편이……아무것도 아니네.',
      );
    }
  },
  /**
   * 売店を離れる、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        '오호, 이렇게 많이 사나? 아니, 호기심일세. 이런 것은 개인차도 있지 않은가?……',
      );
      tachyon.say_as_unknown(
        '덧붙여 개인적인 부탁인데, 다음에는 사용 후기도 가져왔으면 하네. 정식 실험 보고서 양식이면 더욱 좋고.',
      );
    } else {
      tachyon.say(
        '오호, 이렇게 많이 사나? 아니, 호기심일세. 이런 것은 개인차도 있지 않은가?……',
      );
      tachyon.say(
        '덧붙여 개인적인 부탁인데, 다음에는 사용 후기도 가져왔으면 하네. 정식 실험 보고서 양식이면 더욱 좋고.',
      );
    }
  },
};
