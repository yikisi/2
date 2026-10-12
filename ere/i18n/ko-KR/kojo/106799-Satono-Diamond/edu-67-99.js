/**
 * @file サトノダイヤモンド - 育成
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = "추가 자율 트레이닝";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {PrintedSpan} call_68 サトノダイヤモンドのキタサンブラックへの呼び方
     */
    const f = async (daiya, kita, you, callname, call_68) => {
      await era.printAndWait("하루 훈련을 마친 뒤──");
      await daiya.say_and_wait([
        "수고하셨어요, ",
        callname,
        ". 오늘도 지도해 주셔서 감사해요.",
      ]);
      await daiya.say_and_wait("……아.");
      await era.printAndWait([
        you.get_colored_name(),
        "는 ",
        daiya.get_colored_name(),
        "의 시선을 따라간다…… 아직 훈련에 열중하는 ",
        kita.get_colored_name(),
        "의 모습이 보였다.",
      ]);
      await kita.say_and_wait(
        "하아, 하아……! 아직 부족해, 부족해! 한 바퀴 더 달릴래!",
      );
      await daiya.say_and_wait(
        "……저기, 죄송하지만 저도 추가 훈련을 해도 될까요?",
      );
      era.printButton("「무리하지 않는 편이……」", 1);
      await era.input();
      await daiya.say_and_wait([
        "……사실 어제 ",
        call_68,
        "의 레이스 영상을 봤는데요──",
      ]);
      await daiya.say_and_wait([
        call_68,
        "의 달리기가 점점 더 빠르고 강해지고 있어요……",
      ]);
      await daiya.say_and_wait(
        "조바심이 나는 건 인정해요. 하지만…… 그보다 더 달리고 싶은 충동이에요!",
      );
      await daiya.say_and_wait(
        "투지가 불타올랐거든요! 그러니까…… 부탁드려요!",
      );
      era.printButton("「그럼 해 볼까!」", 1);
      era.printButton("「그 열정은 내일을 위해 아껴 두자.」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(["에헤헤, 역시 ", callname, '！']);
        await daiya.say_and_wait(
          "감사해요! 그럼 저도 달리고 올게요!",
        );
        await daiya.say_and_wait(['──', call_68, ". 저…… 지지 않을 거예요!"]);
        await era.printAndWait([
          "그렇게 ",
          daiya.get_colored_name(),
          "는 라이벌을 향한 투지를 품고 ",
          daiya.sex,
          "의 추가 훈련을 끝마쳤다.",
        ]);
      } else {
        await daiya.say_and_wait(
          "내일을 위해 아껴 두라고요……? 으으, 참을 수 있을지 모르겠어요……!",
        );
        era.printButton("「투지는 모아 뒀다가 마지막에 한꺼번에 터뜨리자.」", 1);
        await era.input();
        await daiya.say_and_wait(
          "……알겠어요. 그럼 그렇게 할게요. 내일은 철저하게 훈련시켜 주세요……!",
        );
        await daiya.say_and_wait(
          "……맞다! 지금 트레이너실로 돌아가서 함께 레이스 영상을 볼까요?",
        );
        await daiya.say_and_wait(
          "그러면 가슴속 충동이 더 커질 테니까요. 내일 정말 열심히 할 수 있을 거예요!",
        );
        era.printButton("「그럼 같이 보자!」", 1);
        await era.input();
        await daiya.say_and_wait("네♪");
        await era.printAndWait([
          "그렇게 ",
          daiya.get_colored_name(),
          "의 열띤 중계과 함께 ",
          kita.get_colored_name(),
          "를 중심으로 한 레이스 영상을 지켜보았다.",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = "쾌유를 빕니다!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        you.get_colored_name(),
        "는 다친 사토노 다이아몬드를 보건실로 데려왔다.",
      ]);
      await daiya.say_and_wait(
        "트레이너님, 이렇게 신경 써 주셔서 감사해요.",
      );
      await daiya.say_and_wait(
        "하지만…… 이 정도 상처라면 아직 훈련할 수 있을 것 같아요.",
      );
      await daiya.say_and_wait(
        "응급 처치도 끝났으니 지금부터 조금…… 움직여도 괜찮겠죠?",
      );
      era.printButton("「방심은 금물이야.」", 1);
      era.printButton("「그럼 조심해서 훈련해 볼까.」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "하지만 거의 아프지 않아요. 조심하면 괜찮을 거예요……!",
        );
        era.printButton("「더 나빠지기 전에 그만두자.」", 1);
        await era.input();
        await daiya.say_and_wait(
          "……말씀대로네요. 가벼운 상처라도 자칫하면 크게 악화할 수 있으니까요.",
        );
        await daiya.say_and_wait(
          "죄송해요…… 오늘은 기숙사로 돌아가 쉴게요.",
        );
        await era.printAndWait(
          `사토노 다이아몬드는 의욕이 넘치는 만큼 훈련을 못 하는 것이 분한 듯했다. 그래도 ${daiya.sex}는 얌전히 기숙사로 돌아가 쉬었다.`,
        );
      } else if (fail_again) {
        await daiya.say_and_wait(
          "네! 오늘 훈련을 전부 마치고 싶어요!",
        );
        await era.printAndWait([
          you.get_colored_name(),
          `는 사토노 다이아몬드의 뜻을 존중해 ${daiya.sex}에게 훈련을 계속하게 했다. 하지만──`,
        ]);
        await daiya.say_and_wait("……하아…… 하아……");
        era.printButton("「……역시 아프지?」", 1);
        await era.input();
        await daiya.say_and_wait("……윽!?");
        await daiya.say_and_wait(
          "……네, 사실 아직 아파요…… 죄송해요. 너무 가볍게 생각했어요……",
        );
        await era.printAndWait([
          "이번에는 ",
          you.get_colored_name(),
          "가 곧바로 훈련을 중단하고 사토노 다이아몬드를 푹 쉬게 했다.",
        ]);
      } else {
        await daiya.say_and_wait("……후! 이걸로 끝났어요!");
        era.printButton("「다친 곳은 괜찮아?」", 1);
        await era.input();
        await daiya.say_and_wait("괜찮아요! 봐 주세요!");
        await daiya.say_and_wait(
          "가벼운 운동이라면 문제없는 것 같네요! 후후, 다행이에요!",
        );
        await era.printAndWait([
          you.get_colored_name(),
          `는 완전히 안심할 수는 없었지만 ${daiya.sex}에게 눈에 띄는 이상은 보이지 않는다. 정말 가벼운 상처였던 모양이다.`,
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = "무리는 금물!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        "사토노 다이아몬드가 훈련 중 다쳐서 ",
        you.get_colored_name(),
        `는 서둘러 ${daiya.sex}를 보건실로 데려갔다.`,
      ]);
      await daiya.say_and_wait("아파……!");
      await daiya.say_and_wait(
        "조금 움직였을 뿐인데…… 생각보다 심한 부상일지도 모르겠어요……",
      );
      era.printButton("「당분간 쉬자.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "하지만…… 계속 쉬고 있으면 꿈이 멀어질 것 같아요.",
      );
      await daiya.say_and_wait(
        "지금은 쉬는 게 맞겠죠. 그래도 저는…… 이 난관을 극복하고 더 앞으로 나아가고 싶어요……!",
      );
      await daiya.say_and_wait(
        "아픔은 반드시 이겨 낼게요…… 이대로 훈련을 계속해도 될까요?",
      );
      era.printButton("「무리하게 둘 수는 없어.」", 1);
      era.printButton("「……알았어, 너를 믿을게.」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "하지만 제가 쉬는 동안 레이스의 라이벌들은 더 앞서갈 텐데──",
        );
        era.printButton("「너라면 반드시 따라잡을 수 있어.」", 1);
        await era.input();
        await daiya.say_and_wait(
          "……알겠어요. 너무 조급해하면 안 되겠죠?",
        );
        await daiya.say_and_wait(
          "분하기는 해요. 하지만 이 마음은 상처가 나으면 훈련에 쏟아부을게요.",
        );
        await era.printAndWait(
          "사토노 다이아몬드는 치료를 마치고 아쉬운 듯 기숙사로 돌아갔다.",
        );
      } else if (fail_again) {
        await daiya.say_and_wait(
          "감사해요! 그럼 코스로 돌아가요.",
        );
        await daiya.say_and_wait("──괜찮아요, 이 정도 상처는……!", true);
        await daiya.say_and_wait("윽!?", true);
        await daiya.say_and_wait('…………！');
        era.printButton("「괜찮아!?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "──너무 가볍게 생각했어요. 정말 죄송해요……",
        );
        await era.printAndWait(
          `무리한 탓에 오히려 ${daiya.sex}의 부상이 악화해 회복에 필요한 시간도 길어지고 말았다.`,
        );
      } else {
        await daiya.say_and_wait(
          "──이 정도 아픔은 아직 참을 수 있어요!",
          true,
        );
        await daiya.say_and_wait(
          "이제 부담이 가지 않도록 한 걸음씩…… 천천히, 끝까지 해내겠어요!",
          true,
        );
        await daiya.say_and_wait("……꺄아아아아아아아!");
        await daiya.say_and_wait(
          "하아, 하아……! 후후, 훈련을 마쳤어요……! 아픔에 지지 않았어요……!",
        );
        await era.printAndWait(
          "사토노 다이아몬드는 강한 자제력을 발휘해 다친 부위에 무리가 가지 않도록 주의하며 훈련을 끝마쳤다.",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_g1: (() => {
    const title = "나의 따뜻한 ";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        "사토노 다이아몬드가 처음 도전하는 G1까지 이제 하루 남았다.",
      );
      era.printButton("「옷은 챙겼어?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네, 가방에 넣었어요. 여분 신발도 한 켤레 더 챙겼고요.",
      );
      era.printButton("「편자는?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "물론 다 갈았어요…… 트레이너님, 그렇게 긴장하지 마세요.",
      );
      await era.printAndWait(
        `${daiya.sex}의 긴장을 풀어 주려다가 오히려 위로받고 말았다.`,
      );
      await era.printAndWait("드르르르르……");
      await daiya.say_and_wait(
        "어머, 휴대전화가…… 전화가 왔네요. 잠깐 실례할게요.",
      );
      await daiya.say_and_wait(
        "여보세요, 아버지? 네, 잘 준비하고 있어요──",
      );
      await era.printAndWait('……');
      await daiya.say_and_wait(
        "이야기 중에 전화를 받아서 죄송해요.",
      );
      era.printButton("「부모님께서 응원해 주셨구나?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네…… 후후후! 아버지도 트레이너님처럼 빠뜨린 건 없는지 계속 걱정하시더라고요.",
      );
      await daiya.say_and_wait(
        "레이스 전에는 늘 주변 분들이 저보다 더 긴장하시는 것 같아요.",
      );
      await daiya.say_and_wait(
        "……제가 『반드시 승리를 가져올게요』라고 해도 두 분은 그저 무사히, 다치지만 말라고 하세요.",
      );
      era.printButton("「정말로 네가 다치지 않았으면 하시는 거야.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 아버지도 어머니도 『이겨라』라고 하신 적은 없어요. 그저 부모로서 다정하게 대해 주실 뿐이죠.",
      );
      await daiya.say_and_wait(
        "그렇기에 저는…… 내일 레이스에서 이기고 싶어요.",
      );
      await daiya.say_and_wait(
        `딸인 제가 『뛰어난 ${daiya.uma_sex_title}』가 되어, 사토노 가문이 꿈꿔 온 첫 영광을 두 분께 바칠 거예요.`,
      );
      await daiya.say_and_wait(
        `아버지도 어머니도 아무리 바쁘셔도 ${daiya.uma_sex_title}계의 발전을 위해 애쓰는 걸 잊지 않으세요.`,
      );
      await daiya.say_and_wait(
        "그러니까 두 분의 노력에는 『보상』이 따라야 한다고 생각해요♪",
      );
      era.printButton("「최고의 보상을 가져오자!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네! 사토노 가문 최초의 G1 우승. 반드시 이루겠어요!",
      );
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = "결전을 앞둔 마음가짐";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait("띵동♪");
      await daiya.say_and_wait(
        "후후, 또 응원 메시지네요. 아침부터 계속 울리고 있어요.",
      );
      await daiya.say_and_wait(
        "가족, 친구, 그리고 저를 도와주신 분들…… 기운이 필요할 때 모두 곁에 있어 주세요.",
      );
      await daiya.say_and_wait(
        "여러분의 마음을 저버리지 않도록──이 레이스에서 반드시 이기겠어요!",
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = "레이스 승리!";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait(
        "해냈어요! 해냈다고요! 보셨나요, 트레이너님!",
      );
      await daiya.say_and_wait(
        "지금 가진 힘을 모두 쏟아부었어요…… 최고의 달리기를 보여 드린 것 같아요!",
      );
      era.printButton("「정말 최고의 달리기였어!」", 1);
      era.printButton("「이 감각을 유지하며 앞으로 나아가자!」", 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          "와아……! 감사해요! 트레이너님께 그런 말씀을 듣다니, 저……!",
        );
        await daiya.say_and_wait(
          "후후…… 다음에는 더 빛나는 달리기를 보여 드릴게요! 트레이너님과의 약속이에요!",
        );
      } else {
        await daiya.say_and_wait("네! 꿈을 향해 곧장……!");
        await daiya.say_and_wait(
          "후후, 지금이라면 손이 닿을 것 같아요.",
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = "레이스 입상";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait("입상…… 사토노 가문의 이름을 더럽히지는 않았네요.");
      await daiya.say_and_wait("하지만 우승까지는…… 한 걸음 모자랐어요.");
      era.printButton("「충분히 훌륭한 결과야.」", 1);
      era.printButton("「이 경험을 다음 레이스에 살리자!」", 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          "후후, 칭찬해 주셔서 감사해요♪",
        );
        await daiya.say_and_wait(
          "하지만 제 꿈은 여기서 끝이 아니에요. 더 강해져야 해요……!",
        );
      } else {
        await daiya.say_and_wait("네! 마음을 모아 다음에는 꼭 이겨요!");
        await daiya.say_and_wait(
          "학원으로 돌아가면 작전 회의예요! 지금의 약점을 철저히 찾아내요!",
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = "레이스 패배";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait("…………이게 지금 제 실력이군요……");
      await daiya.say_and_wait(
        "……죄송해요. 기대에 부응하지 못했어요.",
      );
      await daiya.say_and_wait(
        "실력도, 페이스를 읽는 것도 부족했어요…… 아직 과제가 많이 남았네요.",
      );
      era.printButton("「함께 해결하자.」", 1);
      era.printButton("「목표를 향해 다시 출발하자.」", 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          "네! 다시 잘 부탁드려요, 트레이너님!",
        );
        await daiya.say_and_wait(
          "단련하고 또 단련해서…… 다음에는 가장 빛나는 달리기를 보여 드릴게요!",
        );
      } else {
        await daiya.say_and_wait(
          "네, 물론이에요! 이루어야 할 꿈은 아직 잃지 않았으니까요.",
        );
        await daiya.say_and_wait("꿈을 위해…… 다시 정진하겠어요!");
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = "다음에는 지지 않아요!";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await daiya.say_and_wait(
        "……해내지 못했어요. 이기지 못했어요. 또 져 버렸네요……",
      );
      await daiya.say_and_wait(
        "수많은 기대를 저버렸어요. 아버지, 어머니, 사토노 가문 여러분…… 그리고 트레이너님도요.",
      );
      await daiya.say_and_wait(
        "……처음부터 시작한다는 마음으로 노력할게요. 지금까지의 노력이 부족했다면 더, 더 많이…… 그러니까──",
      );
      era.printButton("「그렇게 조급해하지 않아도 돼.」", 1);
      era.printButton("「이인삼각처럼 함께 스퍼트하자!」", 1);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          "괜찮아요! 다음에 이기기 위해서라면 어떤 훈련이든 끝까지 하겠어요……!",
        );
        era.printButton("「우선 심호흡부터 하자.」", 1);
        await era.input();
        await daiya.say_and_wait("힘이라니…… 그게, 저기……");
        await daiya.say_and_wait("들이쉬고…… 내쉬고……! 들이쉬고…… 내쉬고……");
        era.printButton("「……진정됐어?」", 1);
        await era.input();
        await daiya.say_and_wait("……아! 네, 네.");
        era.printButton("「무리하지 말고 앞으로 나아가자.」", 1);
        await era.input();
        await daiya.say_and_wait("트레이너님……! ……네!");
        await daiya.say_and_wait(
          "네! 몇 번이든 다시 일어날게요……! 당신과 함께 힘내고 싶어요!",
        );
      } else {
        await daiya.say_and_wait(
          "그럼…… 우선 다리를 묶을 천이 필요하겠네요!",
        );
        await daiya.say_and_wait("지금 바로 찾아올게요!");
        await era.printAndWait(
          "……『이인삼각』은 비유였지만 기운은 되찾은 모양이다. 다시 함께 힘내자──",
        );
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = "메이크 데뷔를 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `메이크 데뷔 관중석에 선 ${you.name}은(는) 문득 데뷔가 코앞이던 어느 날을 떠올린다──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait("──실례할게요.");
      era.printButton("「맥퀸?」", 1);
      await era.input();
      await mcqueen.say_and_wait(
        "참견일지도 모르지만 알아 두시면 좋을 일이 있어요.",
      );
      await mcqueen.say_and_wait(
        "사토노의 메이크 데뷔가 평소보다 더 큰 관심을 모을 것 같아요.",
      );
      await era.printAndWait(
        `『RKST 점수 합계 오억의 메이크 데뷔!!』 메지로 맥퀸이 ${you.name}에게 건넨 잡지에 큼지막한 제목이 실려 있었다.`,
      );
      await era.printAndWait('『Rookie Knowledge, Stats, and Talent』');
      await era.printAndWait(
        `RKST 점수란 매년 칠월에 발표되는 데뷔 전 ${daiya.uma_sex_title}의 평가 점수다.`,
      );
      await era.printAndWait(
        `은퇴한 트레이너나 ${daiya.uma_sex_title}평론가 등이 능력을 분석해 종합 평가를 수치로 나타낸 것이다.`,
      );
      await era.printAndWait(
        "사토노 다이아몬드는 이억 삼천만 점. 기록상 압도적인 고득점이다. 그래서 데뷔 전부터 이토록 주목받고 있다.",
      );
      await mcqueen.say_and_wait(
        `사토노보다 점수가 높은 ${daiya.uma_sex_title}도 같은 메이크 데뷔에 출전한대요.`,
      );
      await mcqueen.say_and_wait(
        `그 밖에도 고득점의 ${daiya.uma_sex_title}들이 출전해서 합계 오억 점의 메이크 데뷔가 되었다는 거군요.`,
      );
      era.printButton("「그래서 오억 대결이구나.」", 1);
      await era.input();
      await mcqueen.say_and_wait(
        "아무리 주목받아도 사토노라면 괜찮겠지만……",
      );
      era.printButton("「고마워, 주의할게.」", 1);
      await era.input();
      await era.printAndWait(
        "사토노 다이아몬드는 침착한 아이다. 그래도 메이크 데뷔니 조심해서 나쁠 것은 없다.",
      );
      await mcqueen.say_and_wait(
        "네. 이만큼 주목받으면…… 여러 이야기도 나오니까요.",
      );
      await daiya.say_and_wait(
        "트레이너님, 오늘도 잘 부탁드려요!",
      );
      await you.say_as_passer_by_and_wait(
        "기자 A",
        "야, 사토노 다이아몬드가 나왔어!",
      );
      await daiya.say_and_wait("……오늘은 기자분들이 많네요.");
      await you.say_as_passer_by_and_wait(
        "기자 B",
        "사토노 다이아몬드 씨, 취재해도 될까요?",
      );
      era.printButton("「이제 훈련해야 해서……」", 1);
      await era.input();
      await daiya.say_and_wait("트레이너님, 괜찮아요. 짧은 인터뷰라면요.");
      await you.say_as_passer_by_and_wait(
        "기자 B",
        `감사합니다! 메이크 데뷔는 고득점 ${daiya.uma_sex_title}들의 대결이 될 텐데, 이번 레이스의 포부를 들려주세요!`,
      );
      await daiya.say_and_wait(
        "어머, 그렇게 불리고 있었군요.",
      );
      await daiya.say_and_wait(
        "관심을 가져 주셔서 기뻐요. 평가에 걸맞은 메이크 데뷔를 보여 드리도록 노력하겠어요.",
      );
      await you.say_as_passer_by_and_wait(
        "기자 B",
        "부담은 없으신가요?",
      );
      await daiya.say_and_wait("그건 모두 마찬가지일 거라고 생각해요.");
      await era.printAndWait(
        `사토노 다이아몬드의 대답에는 빈틈이 없었다. 고득점 ${daiya.uma_sex_title}의 대결도 특별히 신경 쓰는 눈치는 아니다.`,
      );
      await daiya.say_and_wait(
        "후우…… 기다리게 해서 죄송해요. 취재는 끝났어요.",
      );
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await daiya.say_and_wait("에헤헤, 조금 목이 마르네요.");
      era.printButton("「학원에 부탁해서 취재를 제한해 달라고 할까?」", 1);
      await era.input();
      await era.printAndWait(
        "메이크 데뷔 준비는 중요한 시기다. 타즈나 씨에게 부탁하면 취재를 적당한 수준으로 조절해 줄 것이다.",
      );
      await daiya.say_and_wait(
        `아니요, 괜찮아요. 취재에 응하는 것도 ${daiya.uma_sex_title}의 일이니까요.`,
      );
      await daiya.say_and_wait(
        "제 메이크 데뷔가 화제가 되고 열기를 더한다면 오히려 기쁜 일이에요.",
      );
      await daiya.say_and_wait(
        "사토노 가문 여러분도 기뻐하실 테니까요.",
      );
      era.printButton("「이만큼 주목받으면 부담스럽지 않아?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후, 익숙해요. 어릴 때부터 사토노 가문에서 가장 주목받는 아이였거든요.",
      );
      await daiya.say_and_wait(
        "파티에서도 요즘 성적은 어떤지, 장래에 트레센 학원에 갈 건지 같은 질문을 받았어요.",
      );
      await daiya.say_and_wait(
        `동갑내기 친척이나 ${daiya.uma_sex_title}들에게는 저만 관심받는 게 불공평하다며 부러움을 사기도 했답니다♪`,
      );
      await era.printAndWait(
        `${daiya.sex}에게는 무리하는 기색이 없다. 관심에 익숙하다는 말은 사실일 것이다.`,
      );
      await daiya.say_and_wait(
        "혹시…… 트레이너님께서 곤란하신 건 아닐까요?",
      );
      await daiya.say_and_wait(
        "훈련에 방해된다면 취재는 거절해도 괜찮아요.",
      );
      era.printButton("「네가 괜찮다면 문제없어……!」", 1);
      await era.input();
      await era.printAndWait(
        `오히려 ${daiya.sex}에게 ${you.name}을(를) 걱정하게 했다. 본인이 신경 쓰지 않는다면 ${you.name}이(가) 지나치게 염려할 필요도 없겠다.`,
      );
      era.drawLine();
      await era.printAndWait("그리고 메이크 데뷔 당일──");
      await daiya.say_and_wait("──드디어 시작이네요.");
      era.printButton("「기뻐 보이네.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 제 트윙클 시리즈가 시작된다고 생각하니……",
      );
      await daiya.say_and_wait("소름이 돋을 만큼 두근거려요……!");
      await era.printAndWait(
        "사토노 다이아몬드에게는 긴장 대신 적당한 의욕만이 있었다.",
      );
      era.printButton("「다녀와!」", 1);
      await era.input();
      await daiya.say_and_wait("네! 사토노 다이아몬드, 갑니다!");
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = "여명";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait("하아, 하아, 하아……");
      await daiya.say_and_wait("…………응!");
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "오~ 사토노 다이아몬드, 멋진 달리기였어……! 그 높은 점수가 괜히 나온 게 아니네!",
      );
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "안정감이 메이크 데뷔 수준이 아니야. 앞날이 기대되는데!",
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "G1에서도 이겨 줘!! 『사토노 가문의 징크스』를 깨고……!",
      );
      await daiya.say_and_wait("트레이너님!!");
      await daiya.say_and_wait("드디어 무사히 데뷔했어요!");
      era.printButton("「그래.」", 1);
      await era.input();
      await daiya.say_and_wait("달리고 나니 이제야 실감이 나요.");
      await daiya.say_and_wait(
        "레이스 중의 함성…… 다른 선수들의 압박과 숨소리. 온몸 깊숙이 전해지는 긴장감……",
      );
      await daiya.say_and_wait(
        "모두 처음 느끼는 분위기였어요. 이게 진짜 레이스군요……!",
      );
      await daiya.say_and_wait(
        "맥퀸과 키타짱도 이 분위기 속에서 달리고 있었군요……",
      );
      await daiya.say_and_wait("저도 드디어 같은 무대에 섰어요……!");
      await era.printAndWait(
        `사토노 다이아몬드는 상당히 흥분한 상태다. 이번 메이크 데뷔가 ${daiya.sex}에게 깊이 와닿은 모양이다.`,
      );
      await daiya.say_and_wait(
        "……이 다리로 계속 달리고, 이기고, 또 이길 거예요. 사토노 가문의 염원을 반드시 이루겠어요!",
      );
      await era.printAndWait(
        `귀가하는 인파를 따라 경기장에서 역까지 천천히 걸어간다.`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 C",
        `사토노 다이아몬드라는 ${daiya.uma_sex_title}、${
          daiya.sex
        }의 달리기, 정말 멋졌어! 그 오억 대결 말이야!`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        `${daiya.sex}의 막판 스퍼트가 굉장해 보이던데!`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 C",
        "조만간 G1에도 나가지 않을까? 일본 더비도 기대할 만하겠어!",
      );
      await you.say_as_passer_by_and_wait(
        `관중 B`,
        `……응? 그런데──사토노 그룹에서 G1을 우승한 ${daiya.uma_sex_title}가 나온 적 있나……?`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `없어. 예전에는 사토노 가문의 ${daiya.uma_sex_title}도 제법 출전했지만 G1에서는 한 번도 못 이겼지.`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `그래서 잡지에도──『아직 G1 우승 ${daiya.uma_sex_title}가 없는 사토노 가문의 징크스』라는 제목이……`,
      );
      await era.printAndWait(
        "관중 C 「아──그런 소문이 있어? 징크스 때문에 G1에서 못 이긴다는 거야?」",
      );
      await era.printAndWait(
        `관중 A 「그래. 사토노 다이아몬드는 사토노 가문에 오랜만에 태어난 ${daiya.uma_sex_title}야. G1에서 이겨 줬으면 좋겠네.」`,
      );
      await era.printAndWait(
        `${you.name}은(는) 앞서 걷는 사람들의 이야기를 들으며 사토노 다이아몬드를 슬쩍 본다.`,
      );
      await daiya.say_and_wait("후후, 징크스라면 반드시 깨뜨리겠어요!");
      await era.printAndWait(
        `사토노 다이아몬드는 밝은 미소를 지으며 ${you.name}에게 기합 가득한 응원 동작을 해 보였다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 생각한다. 마음이 강하고 흔들리지 않는 ${daiya.sex}라면 소문도 징크스도 분명 지울 수 있을 것이다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = "나를 이루는 것";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus, kiku_sho) => {
      await era.printAndWait(
        `메이크 데뷔 이후, ${you.name}은(는) 사토노 다이아몬드와 다음 목표를 의논했다.`,
      );
      await era.printAndWait(
        `「G1을 우승하는 뛰어난 ${daiya.uma_sex_title}가 된다」──${
          daiya.sex
        }의 목표를 생각하면 주니어급 G1을 고르는 게 순서일 것이다──`,
      );
      era.printButton("「다음 레이스는 어떻게 생각해?」", 1);
      await era.input();
      await daiya.say_and_wait("클래식 3관에 도전하고 싶어요.");
      era.printButton("「주니어급 G1을 고르지 않고?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "G1에서 이기는 것도 목표지만, 그건 과정에 불과해요.",
      );
      await daiya.say_and_wait(
        `사토노 가문이 바라는 『뛰어난 ${daiya.uma_sex_title}』란 ${daiya.uma_sex_title}계의 발전을 뒷받침할 수 있는 ${daiya.uma_sex_title}를 뜻해요.`,
      );
      await daiya.say_and_wait(
        `아시다시피 사토노 가문은 ${daiya.uma_sex_title}계에 공헌하기 위해 오랫동안 운영 협력과 자선 활동에 힘써 왔어요.`,
      );
      await daiya.say_and_wait(
        `『G1을 우승하는 뛰어난 ${daiya.uma_sex_title}』를 많이 길러 내는 것도 ${daiya.uma_sex_title}계를 지탱하는 공헌 중 하나예요.`,
      );
      await daiya.say_and_wait(
        `제 목표는 안에서부터 ${daiya.uma_sex_title}계와 ${daiya.uma_sex_title}레이스 문화를 뒷받침하는 존재가 되는 거예요.`,
      );
      await daiya.say_and_wait(
        `그렇다면 가장 정통적인 길을 걸어야 해요. 제 출전이 클래식 3관을 뜨겁게 달군다면 그것도 ${daiya.uma_sex_title}계에 대한 공헌이겠죠.`,
      );
      await daiya.say_and_wait([
        "가능하다면 만전의 상태로 ",
        sats_sho,
        "에 도전하고 싶어요.",
      ]);
      era.printButton("「다음 목표는 『사츠키상』이야?」", 1);
      await era.input();
      await era.printAndWait(
        "만전의 상태를 만들려면 주니어급을 우선해서는 안 된다. 목표는 「사츠키상」이 적합하다.",
      );
      await daiya.say_and_wait("네. 어떠세요?");
      era.printButton("「알았어.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}에게 반대할 이유는 없다. 클래식 3관을 제패한다면 G1 우승도 따라올 것이다. 다만──`,
      );
      await daiya.say_and_wait("……왜 그러세요? 그렇게 얼굴을 바라보시고.");
      era.printButton("「언제나 그렇게 흔들림 없구나 싶어서.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "목표 말인가요? 그게 제가 태어난 이유니까요. 의심할 여지는 없어요.",
      );
      await daiya.say_and_wait(
        `……그러고 보니 저와 부모님이 왜 뛰어난 ${daiya.uma_sex_title}에 이토록 집착하는지 아직 말씀드리지 않았네요.`,
      );
      await daiya.say_and_wait(
        `방금 말씀드린 대로 사토노 가문은 ${daiya.uma_sex_title}계의 발전에 열정을 쏟아 왔어요. 하지만 뛰어난 ${daiya.uma_sex_title}를 길러 낸 경험은 한 번도 없어요.`,
      );
      await daiya.say_and_wait(
        `사토노 가문의 ${daiya.uma_sex_title}중에서 G1을 우승한 사람은 아무도 없어요.`,
      );
      await daiya.say_and_wait(
        "어느새 그건 『사토노 가문의 징크스』라고 불리게 되었죠.",
      );
      await daiya.say_and_wait(
        `게다가 오랫동안 남자아이만 태어나서 가문에 새로운 ${daiya.uma_sex_title}가 나타나지 않았고……`,
      );
      await daiya.say_and_wait(
        `사토노 가문은 한때 ${daiya.uma_sex_title}가 태어나지 않는 것까지 징크스 때문이라고 생각했을 정도예요.`,
      );
      await daiya.say_and_wait(
        `그리고 저는 그 징크스를 깨고 태어난 ${daiya.uma_sex_title}──`,
      );
      await daiya.say_and_wait(
        "사토노 가문의 꿈을 이루기 위해 태어난 게 저예요.",
      );
      await daiya.say_and_wait(
        "게다가 부모님은 사토노 그룹의 중심에 계세요. 어릴 때부터 많은 지원과 도움을 받았죠.",
      );
      await daiya.say_and_wait(
        "사토노 가문 모두의 기대가 있기에 지금의 제가 있어요.",
      );
      await daiya.say_and_wait("──그건 제 마음의 버팀목이기도 해요!");
      await daiya.say_and_wait(
        "그래서 가문의 기대에 부응하고 싶어요. 그게 제 꿈이에요! 절대로 흔들리지 않을 거예요!",
      );
      await daiya.say_and_wait(
        `사토노 가문의 ${daiya.uma_sex_title}는 G1에서 이기지 못한다는 징크스, 저라면 깰 수 있어요──`,
      );
      await daiya.say_and_wait(
        "클래식 3관을 우승해 증명하겠어요!",
      );
      era.printButton("「알았어, 클래식 3관을 목표로 하자.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "감사해요! 그럼 첫 경기는 『사츠키상』이네요.",
      );
      await era.printAndWait([
        "클래식 3관에 도전한다면 ",
        sats_sho,
        "보다 긴 ",
        toky_yus,
        "와 ",
        kiku_sho,
        "에도 대비해야 한다.",
      ]);
      await era.printAndWait([
        `지금 시작하면 충분히 준비할 시간이 있다. 그 뒤의 목표까지 내다보며 내년 `,
        sats_sho,
        "을 준비하자.",
      ]);
      era.drawLine();
      await daiya.say_and_wait(
        "──준비 운동은 끝났어요. 첫 훈련은……",
      );
      await kita.say_and_wait("아────!! 다이아, 다이아!");
      await daiya.say_and_wait(
        "와앗! 키타짱, 왜 그래? 그렇게 다급하게……",
      );
      await kita.say_and_wait(
        "있잖아, 봤어! 다이아의 메이크 데뷔 봤어!!",
      );
      await kita.say_and_wait(
        "직접 가 보진 못했지만 영상으로 봤어! 엄청~~~ 흥분했어!",
      );
      await kita.say_and_wait(
        "기숙사 큰 화면으로 다 같이 봤거든! TV를 향해 『다이아, 힘내──!』 하고 외쳤어.",
      );
      await kita.say_and_wait("목소리가 너무 커서 다들 뭐라고 했지만.");
      await kita.say_and_wait(
        "그래도 다이아의 그 레이스는 손에 땀을 쥘 만큼 대단했어!",
      );
      await daiya.say_and_wait(
        "후후, 키타짱답네. 응원해 줘서 고마워!",
      );
      await kita.say_and_wait(
        "뭔가…… 내 메이크 데뷔 때랑은 다른 기쁨이었어. 보고 있으니 가슴이 뛰더라!",
      );
      await kita.say_and_wait(
        "레이스 중 다이아의 얼굴이 학원 모의 레이스나 병주 때랑 전혀 달라서……",
      );
      await kita.say_and_wait(
        "그때 처음으로 아, 다이아도 정말 나랑 같은 곳까지 왔구나 하고 생각했어.",
      );
      await kita.say_and_wait("……다이아, 데뷔 축하해!");
      await daiya.say_and_wait("응, 기다리게 했네…… 키타짱!");
      await kita.say_and_wait(
        "헤헤, 다이아가 내 뒤를 쫓아온다고 생각하니 나도 더 열심히 해야겠어!",
      );
      await kita.say_and_wait([
        "나는 ",
        sats_sho,
        "와 ",
        toky_yus,
        "를 놓쳤지만 ",
        kiku_sho,
        "은 반드시 이길 거야!!",
      ]);
      await kita.say_and_wait("다이아의 언니로서 먼저 G1을 이겨야지!");
      await daiya.say_and_wait("내 다음 목표도 클래식 3관이야.");
      await kita.say_and_wait("뭐!? 정말!?");
      await daiya.say_and_wait([
        "응. 그러니까 키타짱의 ",
        kiku_sho,
        "…… 제대로 참고할게.",
      ]);
      await kita.say_and_wait(
        "으으~! 그럼 더더욱 질 수 없지! 절대 나쁜 본보기가 되지는 않을 거야!",
      );
      await kita.say_and_wait(
        "그럼 나 먼저 훈련하러 갈게! 안녕, 다이아!",
      );
      await daiya.say_and_wait(
        "나도 내 레이스를 잘 달릴게! 조금만 더 기다려 줘!",
      );
      await kita.say_and_wait("알았어──! 서로 힘내자!");
      await era.printAndWait(
        "키타산 블랙은 바람처럼 달려갔다. 이야기하는 것만으로 상대에게 활력을 주는 신기한 아이다.",
      );
      era.printButton("「그러고 보니…… 함께 달리자고 약속했었지.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네, 어릴 때부터 한 약속이에요. 줄곧 함께 달리자고 약속했죠.",
      );
      await daiya.say_and_wait(
        "키타짱은 제가 만난 동갑내기 중 처음으로 저보다 『강한』 아이였어요.",
      );
      await daiya.say_and_wait(
        "그 뒤 단짝이 되었죠…… 바깥세상을 모르던 저를 키타짱이 여러 곳에 데려가 주었어요.",
      );
      await daiya.say_and_wait(
        "저는 언제나 앞서 달리는 키타짱을 쫓아가며 계속, 계속 그 뒷모습을……",
      );
      await daiya.say_and_wait(
        "따라잡고 싶다, 뛰어넘고 싶다고 어릴 때부터 생각했어요.",
      );
      await daiya.say_and_wait(
        "키타짱은 단짝인 동시에 줄곧 이기고 싶은 목표이기도 해요.",
      );
      await daiya.say_and_wait(
        "게다가 키타짱은 정말 대단해요. 제게는 없는 끈기…… 남다른 의지의 힘이라고 할까요?",
      );
      era.printButton("「무슨 뜻인지 알 것 같아……!」", 1);
      await era.input();
      await daiya.say_and_wait([
        "후후후, 그렇죠? ",
        sats_sho,
        "와 ",
        toky_yus,
        `에서는 ${kita.sex}, 아쉽게도 패배했지만……`,
      ]);
      await daiya.say_and_wait(
        "키타짱은 절대 포기하지 않는 아이예요. 앞으로의 레이스가 진짜 승부죠!",
      );
      await daiya.say_and_wait(
        "그러니 저도 발걸음을 재촉해야겠어요. 『사츠키상』에서 반드시 이기겠어요!",
      );
      await era.printAndWait(
        `이기고 싶은 목표──키타산 블랙의 존재가 사토노 다이아몬드를 더욱 성장시킨다. 이야기를 듣고 ${you.name}은(는) 한층 확신했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = "아직은 먼 곳";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho 皐月賞（色つき名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色つき名前）
     */
    const f = async (daiya, nature, dictus, pama, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `오늘 ${you.name}은(는) 사토노 다이아몬드와 함께 키타산 블랙이 출전하는 『국화상』을 보러 왔다.`,
      );
      await daiya.say_and_wait("아, 키타짱 일행이 나왔어요!");
      await daiya.say_and_wait("어라……? 키타짱, 기운이 없어 보이는데……?");
      await daiya.say_and_wait("긴장한 걸까요……?");
      await nature.print_and_wait("??? 「……그 사람이 안 나왔으니까 그렇겠지.」");
      await era.printAndWait(
        `나이스 네이처가 인파 속에서 불쑥 나타났다. ${daiya.sex}는 사토노 다이아몬드가 입학했을 때 환영회를 열어 준 선배 중 한 명이라고 한다.`,
      );
      await daiya.say_and_wait([
        "아아……! 분명 그렇겠어요. ",
        sats_sho,
        "와 ",
        toky_yus,
        "를 우승한 그분……",
      ]);
      await nature.say_and_wait(
        `맞아, ${nature.sex}는 오늘 안 나왔어. 키타산은 『국화상』에서 그 사람을 이기려고 지금까지 애써 왔으니까.`,
      );
      await nature.say_and_wait(
        "당연히 풀이 죽겠지…… 게다가 봐. 경기장에도 주인공이 빠졌다는 분위기가 감돌잖아.",
      );
      await daiya.say_and_wait("주인공이 빠졌다고요……");
      await daiya.say_and_wait("……윽!");
      await daiya.say_and_wait("키타짱──!!");
      await daiya.say_and_wait("앗……!");
      await daiya.say_and_wait(
        "키타짱, 지금은 집중하고 있어요…… 우리의 걱정은 필요 없었나 봐요!",
      );
      await daiya.say_and_wait(
        `${daiya.sex}라면 오늘의 주인공이 자신이라는 걸 모두에게 보여 줄 수 있어요!`,
      );
      await era.printAndWait(
        "중계 「축제다! 요도의 축제다! 키타산의 축제가 시작됐다! 국화상을 제패한 것은 키타산 블랙──!」",
      );
      await daiya.say_and_wait("대단해……! 역시 키타짱!!");
      await nature.say_and_wait("……하아, 키타산도 주인공의 빛을 갖고 있었구나……");
      await daiya.say_and_wait(
        "하지만…… 키타짱은 마지막 진로 싸움에서 조금 고전한 것 같아요……",
      );
      await daiya.say_and_wait(
        "……저라면 막판 스퍼트로 승부할 테니 안쪽에 갇히지 않도록 마지막 코너에서 바깥으로 나가고, 그다음에……",
      );
      await nature.say_and_wait(
        "…………거짓말이지? 와~ 이쪽도 너무 눈부시네~",
      );
      await era.printAndWait("그리고 『국화상』을 관전한 다음 날──");
      era.printButton("「오늘 훈련은 여기까지!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "트레이너님, 아직 더 할 수 있어요! 마침 스태미나도 키우고 싶었는데…… 추가 훈련 부탁드려요!!",
      );
      era.printButton("「지금은 아직 스태미나를 집중적으로 단련할 단계가 아니야.」", 1);
      await era.input();
      await daiya.say_and_wait("그럼 오르막 스퍼트는 어떨까요!?");
      await era.printAndWait(
        `사토노 다이아몬드는 무척 적극적이다. 하지만 ${you.name}은(는) 아직 주니어급인 ${daiya.sex}에게 부담이 큰 훈련을 시킬 생각은 없다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${daiya.sex}에게 설명했다. 몸이 다 자라기 전에 무리한 부하를 주면 다칠 수 있다.`,
      );
      await daiya.say_and_wait(
        "아아…… 말씀대로예요. 죄송해요…… 키타짱의 『국화상』을 보고 저도 더 열심히 해야겠다고 생각해서……",
      );
      await era.printAndWait(
        `어제 레이스에 자극받은 모양이다. 지금은 의욕이 넘친다.`,
      );
      await era.printAndWait(
        `그렇다면 몸에 부담을 주지 않고 ${daiya.sex}의 열정을 제대로 풀어 주려면──`,
      );
      era.printButton("「학원의 징크스를 깨는 훈련은 어때?」", 1);
      await era.input();
      await daiya.say_and_wait("할게요!!");
      await daiya.say_and_wait(
        "그럼 바로 가요! 그 징크스는 어디에 있나요!?",
      );
      await era.printAndWait(
        `${daiya.sex}는 ${you.name}의 제안에 눈을 빛냈다.`,
      );
      await daiya.say_and_wait("시작해요. 첫 번째 징크스는 뭔가요!?");
      era.drawLine();
      await era.printAndWait(
        `학원의 징크스, 첫 번째. 『옥상에서 딱지치기를 이긴 사람은 내려가다 미끄러진다』.${you.name}이(가) 서둘러 딱지를 꺼냈을 때──`,
      );
      await pama.print_and_wait("??? 「어? 사토노랑 트레이너잖아!」");
      await pama.say_and_wait(
        "뭐야 뭐야? 딱지치기라면 나도 끼워 줘! 마침 심심하던 참이야──!",
      );
      await era.printAndWait(
        `말을 건 사람은 메지로 파머였다. 곁에는 이쿠노 딕터스와 나이스 네이처도 있다.`,
      );
      await daiya.say_and_wait(
        "함께해 주신다면 물론 환영이에요! 사실 지금 징크스 깨기 훈련 중이거든요.",
      );
      await nature.say_and_wait(
        "……응? 징크스 깨기 훈련? 그게 무슨 말이야?",
      );
      await pama.say_and_wait(
        "아하, 그런 거구나. 그럼 우리도 도와줄게!",
      );
      await dictus.say_and_wait(
        "네, 그렇군요. 학원의 징크스라면 많지는 않지만 열 가지 정도는 알고 있어요.",
      );
      await dictus.say_and_wait(
        "여기는 『옥상에서 딱지치기를 이긴 사람은 내려가다 미끄러진다』겠죠.",
      );
      await dictus.say_and_wait(
        "사토노가 딱지치기에서 이기고 내려가면서 미끄러지지 않으면 징크스가 깨지는 셈이에요.",
      );
      await pama.say_and_wait("그러고 보니 네이처, 딱지치기 잘하잖아!");
      await nature.say_and_wait(
        "잘하는 건 아니고…… 자주 할 뿐이야. 그런데 사토노는 딱지치기 할 줄 알아?",
      );
      await daiya.say_and_wait("경험은 적지만 노력할게요!");
      await pama.say_and_wait(
        "……그럼 네이처를 이기는 것부터 쉽지 않겠는데.",
      );
      await daiya.say_and_wait("──도착했어요!");
      await pama.say_and_wait("오~! 계단에서 전혀 안 미끄러졌네!");
      await daiya.say_and_wait("에헤헤! 첫 번째 징크스를 깼어요!");
      era.drawLine();
      await dictus.say_and_wait(
        "매점의 징크스. 『마지막 남은 주스를 산 사람은 하루 종일 운이 나쁘다』.",
      );
      await daiya.say_and_wait("아, 마침 마지막 한 병이네요.");
      await dictus.say_and_wait(
        "운이 어떤지 보려면…… 저와 사토노가 뽑기를 해 보죠.",
      );
      await nature.say_and_wait(
        "──이쿠노는 사 등, 사토노는 일 등. 이야, 운 좋네.",
      );
      await daiya.say_and_wait(
        "에헤헤! 두 번째 징크스도 깼어요! 성공이에요~!!",
      );
      era.drawLine();
      await daiya.say_and_wait(
        "──이걸로 열 번째예요! 열 번 연속으로 징크스를 깼어요!!",
      );
      await pama.say_and_wait(
        "열 개나 깨다니. 사토노, 정말 대단해…… 존경스럽네.",
      );
      await daiya.say_and_wait("후후, 칭찬해 주셔서 감사해요.");
      await pama.say_and_wait(
        "겸손해하지 마. 징크스든 가문의 꿈이든 피하지 않고 정면으로 마주하는 사토노는 정말 훌륭하다고 생각해.",
      );
      await pama.say_and_wait("그런 점은 맥퀸이랑 닮았네.");
      await daiya.say_and_wait("정말요!? 기뻐요!");
      await daiya.say_and_wait("저…… 맥퀸을 동경하거든요.");
      await daiya.say_and_wait(
        "스스로를 다잡으며 목표로 나아가고, 아무리 큰 압박에도 흔들리지 않는 의연한 모습이 제 목표예요.",
      );
      await daiya.say_and_wait(
        "맥퀸이 메지로 가문의 사명을 짊어지고 이루었듯이 저도 사토노 가문의 염원을 이루고 싶어요.",
      );
      await pama.say_and_wait(
        "후후, 맥퀸도 가문의 꿈을 위해 노력하는 사토노를 늘 칭찬해.",
      );
      await daiya.say_and_wait(
        "아직 멀었어요. 지금은 특별히 내세울 성적도 없는걸요.",
      );
      await nature.say_and_wait(
        `……뭔가…… 주인공의 빛을 가진 ${daiya.uma_sex_title}도 마냥 편하지만은 않네……`,
      );
      await pama.say_and_wait(
        "우리도 응원할게. 사토노, 힘내! 절대 지지 마!",
      );
      await daiya.say_and_wait("네! 감사해요!");
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = "새해 포부";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {CharaTalk} callname_68 キタサンブラックのプレイヤーへの呼び方
     * @param {CharaTalk} k_call_d キタサンブラックのサトノダイヤモンドへの呼び方
     */
    const f = async (daiya, kita, you, callname, callname_68, k_call_d) => {
      await daiya.say_and_wait([callname, '！']);
      if (era.get('cflag:68:招募状态') === recruit_flags.yes) {
        await kita.say_and_wait([k_call_d, "의 트레이너님!"]);
      } else {
        await kita.say_and_wait([callname_68, '！']);
      }
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        "「새해 참배, 잘 부탁드려요!」",
      ]);
      await era.printAndWait(
        `두 사람의 열정 가득한 새해 첫 부탁이었다. 새해 소원을 빌기 위해 셋이서 신사로 향한다.`,
      );
      await daiya.say_and_wait("으음~~ 어떤 소원을 빌까요?");
      era.printButton("「클래식 3관 우승 아니야?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "그건 제가 직접 이룰 일이에요. 신께 부탁할 일은 아니죠.",
      );
      era.printButton("「징크스 깨기는?」", 1);
      await era.input();
      await daiya.say_and_wait("징크스는 제 힘으로 깨뜨릴 거예요!");
      await daiya.say_and_wait(
        "……항상 이래요. 막상 신께 부탁하려고 하면 무슨 소원을 빌지 몰라 매년 한참 고민해요……",
      );
      await era.printAndWait(
        `그래서 ${you.name}은(는) ${daiya.sex}에게 신 앞에서 『새해 포부』를 선언하자고 제안했다.`,
      );
      await daiya.say_and_wait(
        "좋은 생각이에요! 신께 선언했으니 이루지 않을 수 없겠죠!",
      );
      await daiya.say_and_wait("그러니까 필승 기원이 아니라 필승의 사명이군요!");
      await era.printAndWait(
        `……${daiya.sex}는 신 앞에서 꽤 무거운 맹세를 할 생각인 듯하다.`,
      );
      await daiya.say_and_wait(
        "새해 포부…… 클래식 3관 우승만으로는 너무 당연해요.",
      );
      await daiya.say_and_wait(
        `사토노 가문의 ${daiya.uma_sex_title}로서, 뛰어난 ${daiya.uma_sex_title}는 어떤 달리기를 해야 할까요……`,
      );
      await daiya.say_and_wait("되고 싶은 모습──", true);
      await daiya.say_and_wait("특히 소중히 해야 할 것……", true);
      await daiya.say_and_wait(
        "가슴을 펴고 자랑할 수 있는 달리기를 자신 있게 보여 드릴게요.",
      );
      await daiya.say_and_wait(
        "맥퀸처럼 긍지와 영광을 품고. 사토노 가문을 대표하는 품격을 모두에게 보여 드릴게요.",
      );
      era.printButton("「너답네. 좋은 것 같아.」", 1);
      await era.input();
      await era.printAndWait(
        `다이아몬드처럼 품격 있는 달리기. 어릴 때부터 일류 교육을 받은 ${daiya.sex}다운 포부다.`,
      );
      await daiya.say_and_wait(
        "키타짱도 정한 것 같네. 그럼 같이 신께 말씀드리자.",
      );
      await kita.say_and_wait("응……!");
      await kita.say_and_wait(
        "『봄 시니어 3관』……! 더 많은 사람에게 응원받도록 잘 달릴게! 그리고 웃음을 전할 거야!",
      );
      await daiya.say_and_wait(
        `저는 『클래식 3관』을 우승하겠어요! 사토노 가문의 ${daiya.uma_sex_title}로서 눈부신 달리기를 보여 드릴 것을 맹세해요!`,
      );
      await era.printAndWait(
        `목표 레이스는 달라도 ${daiya.couple_title}의 눈에 깃든 빛은 같았다──`,
      );
      await era.printAndWait(
        `갈림길 전까지 나란히 달리는 두 사람의 모습에서 ${you.name}은(는) ${daiya.couple_title}의 어린 시절부터 이어진 인연을 깊이 느꼈다.`,
      );
      await kita.say_and_wait(
        "헤헤! 나도 점점 주목받고 있어! 더 응원받을 수 있도록 열심히 할게!",
      );
      await daiya.say_and_wait(
        "어머, 나도 다이아몬드라는 이름에 걸맞게 모두를 매료시키는 달리기를 보여 줄 거야.",
      );
      await kita.say_and_wait(
        "으……! 내가 먼저 『봄 시니어 3관』으로 모두를 사로잡을 거야!",
      );
      await daiya.say_and_wait(
        "으…… 내 『클래식 3관』 때는 모두 나를 보고 있을걸!",
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        "「으으~~ 이기는 건 나야!! 으으~~ 내가 이길 거야──!!」",
      ]);
      await kita.say_and_wait("그럼 새해 대결로 승부하자!");
      era.printButton("「둘 다 진정해……!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "트레이너님, 걱정 마세요. 새해 대결은 매년 하는 행사예요.",
      );
      await daiya.say_and_wait(
        "승부를 가리기에 이보다 적합한 건 없죠!",
      );
      await era.printAndWait(
        "두 사람 모두 열이 올라 대결을 그만둘 것 같지 않다. 매년 하는 행사라면 위험하지는 않겠지……",
      );
      await daiya.say_and_wait(
        "대결 내용은 트레이너님이 정해 주세요!",
      );
      await kita.say_and_wait(
        "부탁해! 전력을 다해 승부할 수 있는 걸로 생각해 줘!",
      );
      await era.printAndWait(
        `${daiya.couple_title}가 둘 다 전력을 다할 수 있는, 새해다운 대결이라면……`,
      );
      era.printButton("「장거리 역전 경주 응원단을 한다」(스태미나+20)", 1);
      era.printButton("「떡 뿌리기 행사에서 떡을 줍는다」(체력+200)", 2);
      era.printButton("「연날리기를 한다」(스킬 Pt+30)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kita.say_and_wait(
            `『신춘 ${daiya.uma_sex_title} 장거리 역전 경주』 말이지! 지금 시간이면…… 곧 이 근처를 지나갈 거야!`,
          );
          await daiya.say_and_wait(
            "누가 더 열심히 응원하는지 겨루는 거군요! 심판은 트레이너님께 맡길게요!",
          );
          era.printButton("「좋아!」", 1);
          await era.input();
          await daiya.say_and_wait("아, 선두 집단이 보여요!");
          await kita.say_and_wait(
            "힘내────!! 뒤에서 따라온다! 지금이 승부처야!",
          );
          await daiya.say_and_wait(
            "할 수 있어요, 반드시 따라잡을 거예요!! 그래요, 바로 그거예요! 그 페이스를 유지하세요!",
          );
          await era.printAndWait(
            `선두 집단의 ${daiya.uma_sex_title}들이 눈앞을 엄청난 속도로 달려 지나간다.`,
          );
          await kita.say_and_wait("좋아, 다음 응원 지점으로 가자!");
          await daiya.say_and_wait("다음은 오르막길이야!");
          era.printButton("「……뭐?」", 1);
          await era.input();
          await kita.say_and_wait(
            "오르막은 다들 똑같이 힘들어! 버텨! 지지 마!!",
          );
          await daiya.say_and_wait(
            "지금은 인내가 중요해요! 무리하지 말고 자신의 페이스를 지키세요!!",
          );
          await daiya.say_and_wait("다음 지점으로 가요!");
          era.printButton("「잠깐!? 언제까지 따라갈 거야……!」", 1);
          await era.input();
          await era.printAndWait([
            daiya.get_colored_name(),
            '&',
            kita.get_colored_name(),
            "「마지막 직선이에요────!! 치고 나가──────!!」",
          ]);
          await era.printAndWait(
            "중계 「두 팀이 거의 동시에 골인────!! 끝까지 양보하지 않았습니다!!」",
          );
          await kita.say_and_wait("아, 개운하다! 땀도 잔뜩 흘렸어~!");
          await daiya.say_and_wait(
            "저도 모르게 같이 흥분했네요! ──그런데 응원 대결의 결과는……",
          );
          era.printButton("「…………윽! …………으으!!」", 1);
          await era.input();
          await era.printAndWait(
            `……${daiya.couple_title}가 새해에 살찔 걱정은 없겠다. 다행이다.`,
          );
          break;
        case 2:
          await daiya.say_and_wait("떡 뿌리기……?");
          await kita.say_and_wait(
            "참배객들에게 떡을 던져 주는 행사야! 그러니까 누가 더 많이 줍는지 겨루는 거지?",
          );
          await daiya.say_and_wait("그렇군요, 많이 주우면 되는 거네요!");
          await era.printAndWait("떡 뿌리기 담당자 「받으세요──────!」");
          await era.printAndWait("사람들 「꺄────! 와아아아아아아!」");
          await kita.say_and_wait("저쪽에 많이 떨어질 것 같아! 간다────!!");
          await daiya.say_and_wait("어? 어…… 꺅!");
          await daiya.say_and_wait(
            `사람들…… 인파에 떠밀려 나왔어요……${daiya.uma_sex_title}이 구역도 일반 구역도…… 사람으로 가득해요……`,
          );
          era.printButton("「뒤쪽 바닥을 찾아봐.」", 1);
          await era.input();
          await era.printAndWait(
            "사람들의 시선은 지금 뿌려지는 떡에 쏠려 있다. 조금 멀리 떨어지거나 놓친 떡은 의외로 아무도 보지 않는다.",
          );
          await daiya.say_and_wait("아, 정말이네요! 뒤쪽 바닥에 잔뜩 있어요!");
          await daiya.say_and_wait("좋아──많이 주워 올게요!");
          await daiya.say_and_wait("에헤헤, 이렇게나 주웠어요!");
          await kita.say_and_wait(
            "풍년이다, 풍년이야~ 하아~ 아아♪ 돌아가면 단팥죽 만들어 먹자!",
          );
          await daiya.say_and_wait("네!");
          await era.printAndWait(
            `돌아가는 길에 팥을 사서 학원으로 돌아온 세 사람은 단팥죽을 실컷 즐겼다.`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            "문어 『튀김』이요! 맛있겠네요! 누가 더 많이 먹는지 겨루나요?",
          );
          await kita.say_and_wait(
            "아, 다이아. 튀기는 게 아니라 연을 하늘에 띄우는 거야.",
          );
          await daiya.say_and_wait(
            "아, 그런 뜻이었구나! TV에서 본 적 있어! 연날리기 재미있겠네!",
          );
          await kita.say_and_wait(
            "그럼 나는 저쪽에서 띄울게! 누가 더 잘 날리는지 다이아의 트레이너에게 심판을 부탁할게!",
          );
          await era.printAndWait(
            `사토노 다이아몬드는 연날리기 경험이 없는 것 같아 ${you.name}이(가) 먼저 시범을 보였다.`,
          );
          await daiya.say_and_wait(
            "네…… 줄은 이렇게 다루고…… 달릴 때는 바람 방향에도 주의해서……",
          );
          await kita.say_and_wait("우오오────────!!");
          await kita.say_and_wait("우오──────!! …………어라~?");
          await kita.say_and_wait("이상하네, 전혀 안 뜨잖아.");
          await daiya.say_and_wait("후후, 이번에는 제 차례예요!");
          await era.printAndWait(
            `사토노 다이아몬드가 가볍게 달리자 연도 사뿐히 하늘로 올라갔다. ${daiya.sex}는 바람에 맞춰 달리는 방향을 바꾸어 성공했다.`,
          );
          await kita.say_and_wait("와, 다이아 대단해! 좋아, 나도!");
          await kita.say_and_wait("에잇──────!! ……아! 떴다, 떴어!");
          await daiya.say_and_wait(
            "올라오길 기다렸어, 키타짱! 이제부터가 승부야!",
          );
          await era.printAndWait(
            "이론과 기술을 중시하는 사토노 다이아몬드. 기세와 끈기로 밀어붙이는 키타산 블랙.",
          );
          await era.printAndWait(
            "성격이 달라 날리는 방법도 달랐지만 두 사람의 연은 저마다 하늘을 누볐다.",
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = "사츠키상을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} first_g1 サトノダイヤモンドの初G1出走か
     */
    const f = async (daiya, you, first_g1) => {
      if (first_g1) {
        await era.printAndWait(
          "내일은 드디어 기다리던 사토노 다이아몬드의 첫 G1, 『사츠키상』이다.",
        );

        era.printButton("「옷은 챙겼어?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "네, 가방에 넣었어요. 여분 신발도 한 켤레 더 챙겼고요.",
        );
        era.printButton("「편자는?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "물론 다 갈았어요…… 트레이너님, 그렇게 긴장하지 마세요.",
        );
        await era.printAndWait(
          `${daiya.sex}의 긴장을 풀어 주려다가 오히려 위로받고 말았다.`,
        );
        await era.printAndWait("드르르르르……");
        await daiya.say_and_wait(
          "어머, 휴대전화가…… 전화가 왔네요. 잠깐 실례할게요.",
        );
        await daiya.say_and_wait(
          "여보세요, 아버지? 네, 잘 준비하고 있어요──",
        );
        await era.printAndWait('……');
        await daiya.say_and_wait(
          "이야기 중에 전화를 받아서 죄송해요.",
        );
        era.printButton("「부모님께서 응원해 주셨구나?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "네…… 후후후! 아버지도 트레이너님처럼 빠뜨린 건 없는지 계속 걱정하시더라고요.",
        );
        await daiya.say_and_wait(
          "레이스 전에는 늘 주변 분들이 저보다 더 긴장하시는 것 같아요.",
        );
        await daiya.say_and_wait(
          "……제가 『반드시 승리를 가져올게요』라고 해도 두 분은 그저 무사히, 다치지만 말라고 하세요.",
        );
        era.printButton("「정말로 네가 다치지 않았으면 하시는 거야.」", 1);
        await era.input();
        await daiya.say_and_wait(
          "네. 아버지도 어머니도 『이겨라』라고 하신 적은 없어요. 그저 부모로서 다정하게 대해 주실 뿐이죠.",
        );
        await daiya.say_and_wait(
          "그렇기에 저는…… 내일 레이스에서 이기고 싶어요.",
        );
        await daiya.say_and_wait(
          `딸인 제가 『뛰어난 ${daiya.uma_sex_title}』가 되어, 사토노 가문이 꿈꿔 온 첫 영광을 두 분께 바칠 거예요.`,
        );
        await daiya.say_and_wait(
          `아버지도 어머니도 아무리 바쁘셔도 ${daiya.uma_sex_title}계의 발전을 위해 애쓰는 걸 잊지 않으세요.`,
        );
        await daiya.say_and_wait(
          "그러니까 두 분의 노력에는 『보상』이 따라야 한다고 생각해요♪",
        );
        era.printButton("「최고의 보상을 가져오자!」", 1);
        await era.input();
        await daiya.say_and_wait(
          "네! 사토노 가문 최초의 G1 우승. 반드시 이루겠어요!",
        );
        await era.printAndWait(
          `『사츠키상』 우승을 향한 의욕이 더욱 높아졌다. 첫 G1 우승을 손꼽아 기다리고 있다.`,
        );
        await era.printAndWait(
          "──하지만 찬물을 끼얹듯 TV 일기예보에서 걱정스러운 소식을 전했다.",
        );

        era.printButton("「내일은 폭풍이 온대……」", 1);
        await era.input();
        await daiya.say_and_wait(
          "그런 것 같네요. 그래도 걱정 마세요! 최악의 경기장 상태에도 대비했어요!",
        );
        await era.printAndWait(
          `사토노 다이아몬드의 대답은 무척 믿음직했다. 만일을 대비해 ${you.name}은(는) 내일 트레센 학원에서 일찍 출발하기로 했다.`,
        );
        era.drawLine({ content: "다음 날 아침" });
        await era.printAndWait(
          "비는 예상만큼 내리지 않았지만 강풍이 끊임없이 불고 있다.",
        );
        await era.printAndWait(
          `이 바람이라면 전철이 멈출지도 모른다. ${you.name}은(는) 택시로 나카야마 경기장에 가기로 했다.`,
        );
        await era.printAndWait(
          "하지만 고속도로도 날씨 탓에 정체되었다. 경기장에 도착할 예정 시간이 되어도 아직 고속도로를 벗어나지 못했다──",
        );
        await era.printAndWait(
          "나들목을 빠져나온 뒤에도 정체가 계속된다. 이대로라면 늦는다……!",
        );
        era.printButton("「내려서 경기장까지 달려가는 수밖에 없어!」", 1);
        await era.input();
        await daiya.say_and_wait("네! 그럼 먼저 갈게요!");
        await daiya.say_and_wait("윽……! 바람이 세……!");
        await era.printAndWait(
          "강풍은 사토노 다이아몬드를 날려 버릴 듯했다. 이 시기에는 드문 봄 폭풍이다. 날씨에 막혀 도중에 발이 묶이고 지각할 뻔하다니──",
        );
        await daiya.say_and_wait(
          "이례적인 봄 폭풍…… 교통 정체…… 하필 오늘 이렇게 나쁜 일이 겹치다니……",
          true,
        );
        await daiya.say_and_wait("……설마…………징크스인 걸까?", true);
        await daiya.say_and_wait(
          "이대로면 출전도 위험해…… 이 조바심이 달리기에도 영향을 줄 거야……!",
          true,
        );
        await daiya.say_and_wait(
          `『뛰어난 ${daiya.uma_sex_title}』가 되기 위해 반드시 지나야 할 길. 징크스가 나를 막으려는 거야……!?`,
          true,
        );
        await daiya.say_and_wait("……윽! 그렇다면 절대 지지 않아!!", true);
        await daiya.say_and_wait("으아아아아앗!");
        await era.printAndWait(
          `사토노 다이아몬드는 외치며 ${daiya.uma_sex_title}전용 통로를 달렸다.`,
        );
        era.printButton("「제발 늦지 마라……!」", 1);
        await era.input();
        era.drawLine();
        await era.printAndWait(
          "나카야마 경기장에 도착했을 때는 이미 『사츠키상』 출발 삼십 분 전이었다.",
        );
        await era.printAndWait(
          `${you.name}은(는) ${daiya.sex}가 늦지 않았기를 바라며──패독으로 향한다.`,
        );
        await era.printAndWait(`사토노 다이아몬드의 모습은……`);
        await daiya.say_and_wait("……윽!");
        era.printButton("(늦지 않았구나……!)", 1);
        await era.input();
        await daiya.say_and_wait("……후우……");
        await daiya.say_and_wait("아, 트레이너님!");
        era.printButton("「괜찮아?」", 1);
        await era.input();
        await daiya.say_and_wait("네, 어떻게든 제시간에 도착했어요!");
        await daiya.say_and_wait(
          "페이스는 조금 흐트러졌지만…… 오히려 침착해진 것 같아요!",
        );
        await era.printAndWait(
          `사토노 다이아몬드는 미소 지었다. ${daiya.sex}의 강인한 정신력에 ${you.name}은(는) 또 한 번 놀란다.`,
        );
        await daiya.say_and_wait(
          "클래식 3관의 첫 번째 관문…… 절대로 지지 않겠어요!!",
        );
        await era.printAndWait(
          `${daiya.sex}의 의욕에 응답한 것일까. 어느새 두꺼운 비구름이 걷히고 눈부신 햇살이 경기장으로 돌아왔다.`,
        );
      } else {
        await era.printAndWait(
          "내일은 드디어 기다리던 사츠키상이다. 하지만 일기예보가 좋지 않다.",
        );

        era.printButton("「내일은 폭풍이 온대……」", 1);
        await era.input();
        await daiya.say_and_wait(
          "그런 것 같네요. 그래도 걱정 마세요! 최악의 경기장 상태에도 대비했어요!",
        );
        await era.printAndWait(
          `사토노 다이아몬드의 대답은 무척 믿음직했다. 만일을 대비해 ${you.name}은(는) 내일 트레센 학원에서 일찍 출발하기로 했다.`,
        );
        era.drawLine({ content: "다음 날 아침" });
        await era.printAndWait(
          "비는 예상만큼 내리지 않았지만 강풍이 끊임없이 불고 있다.",
        );
        await era.printAndWait(
          `이 바람이라면 전철이 멈출지도 모른다. ${you.name}은(는) 택시로 나카야마 경기장에 가기로 했다.`,
        );
        await era.printAndWait(
          "하지만 고속도로도 날씨 탓에 정체되었다. 경기장에 도착할 예정 시간이 되어도 아직 고속도로를 벗어나지 못했다──",
        );
        await era.printAndWait(
          "나들목을 빠져나온 뒤에도 정체가 계속된다. 이대로라면 늦는다……!",
        );
        era.printButton("「내려서 경기장까지 달려가는 수밖에 없어!」", 1);
        await era.input();
        await daiya.say_and_wait("네! 그럼 먼저 갈게요!");
        await daiya.say_and_wait("윽……! 바람이 세……!");
        await era.printAndWait(
          "강풍은 사토노 다이아몬드를 날려 버릴 듯했다. 이 시기에는 드문 봄 폭풍이다. 날씨에 막혀 도중에 발이 묶이고 지각할 뻔하다니──",
        );
        await daiya.say_and_wait(
          "이례적인 봄 폭풍…… 교통 정체…… 하필 오늘 이렇게 나쁜 일이 겹치다니……",
          true,
        );
        await daiya.say_and_wait("……설마…………징크스인 걸까?", true);
        await daiya.say_and_wait(
          "이대로면 출전도 위험해…… 이 조바심이 달리기에도 영향을 줄 거야……!",
          true,
        );
        await daiya.say_and_wait(
          `『뛰어난 ${daiya.uma_sex_title}』가 되기 위해 반드시 지나야 할 길. 징크스가 나를 막으려는 거야……!?`,
          true,
        );
        await daiya.say_and_wait("……윽! 그렇다면 절대 지지 않아!!", true);
        await daiya.say_and_wait("으아아아아앗!");
        await era.printAndWait(
          `사토노 다이아몬드는 외치며 ${daiya.uma_sex_title}전용 통로를 달렸다.`,
        );
        era.printButton("「제발 늦지 마라……!」", 1);
        await era.input();
        era.drawLine();
        await era.printAndWait(
          "나카야마 경기장에 도착했을 때는 이미 『사츠키상』 출발 삼십 분 전이었다.",
        );
        await era.printAndWait(
          `${you.name}은(는) ${daiya.sex}가 늦지 않았기를 바라며──패독으로 향한다.`,
        );
        await era.printAndWait(`사토노 다이아몬드의 모습은……`);
        await daiya.say_and_wait("……윽!");
        era.printButton("(늦지 않았구나……!)", 1);
        await era.input();
        await daiya.say_and_wait("……후우……");
        await daiya.say_and_wait("아, 트레이너님!");
        era.printButton("「괜찮아?」", 1);
        await era.input();
        await daiya.say_and_wait("네, 어떻게든 제시간에 도착했어요!");
        await daiya.say_and_wait(
          "페이스는 조금 흐트러졌지만…… 오히려 침착해진 것 같아요!",
        );
        await era.printAndWait(
          `사토노 다이아몬드는 미소 지었다. ${daiya.sex}의 강인한 정신력에 ${you.name}은(는) 또 한 번 놀란다.`,
        );
        await daiya.say_and_wait(
          "클래식 3관의 첫 번째 관문…… 절대로 지지 않겠어요!!",
        );
        await era.printAndWait(
          `${daiya.sex}의 의욕에 응답한 것일까. 어느새 두꺼운 비구름이 걷히고 눈부신 햇살이 경기장으로 돌아왔다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = "징크스";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サトノダイヤモンドのプレイヤーへの呼び方
     * @param {number} rank 着順
     * @param {PrintedSpan} toky_yus 日本ダービー（色つき名前）
     */
    const f = async (daiya, you, callname, rank, toky_yus) => {
      await you.say_as_passer_by_and_wait(
        "중계",
        "각 선수, 마지막 코너를 돌아 직선으로!",
      );
      await daiya.say_and_wait("──지금이야! 여기서부터……!", true);
      await daiya.say_and_wait("어라……?");
      await daiya.say_and_wait(
        "다리가…… 무거워……! 여기서 가속해야 하는데……!!",
        true,
      );
      await daiya.say_and_wait("으으으으아아아아아……!");
      if (rank === 1) {
        await era.printAndWait(
          "중계 「골인! 우승은 사토노 다이아몬드!! 폭풍 뒤의 햇살 속에서 다이아몬드가 빛납니다!」",
        );
        await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아아!");
        await daiya.say_and_wait("하아, 하아…… 하아, 하아……");
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "대단해, 사토노 다이아몬드!! 아직 더 성장할 것 같아. 기대되네!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 B",
          "마지막에는 힘들어 보였지만 버텼어!",
        );
        era.printButton("(아니야……)", 1);
      } else {
        await era.printAndWait(
          "중계 「……주목받던 사토노 다이아몬드는 『사츠키상』의 영광을 놓쳤습니다!!」",
        );
        await daiya.say_and_wait("하아, 하아…… 하아, 하아……");
        await era.printAndWait(
          "관중 A 「아, 안 됐네. 사토노 다이아몬드, 기대만큼은 아니었어.」",
        );
        await era.printAndWait(
          "관중 B 「마지막에도 힘들어 보이더라. 이런 상태면 장거리는 어렵지 않을까……?」",
        );
        era.printButton("(만전의 상태가 아니었어……)", 1);
      }
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${daiya.sex}의 레이스를 보고 이상을 알아차렸다. 후반에 사토노 다이아몬드는 분명 피로한 기색을 보였다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 생각한다…… 출발 전에 경기장까지 달려온 탓에 ${daiya.sex}의 체력이 상당히 소모된 게 아닐까……?`,
      );
      await era.printAndWait(
        "달리지 않았다면 늦었을 것이다. 어쩔 수 없는 상황이었지만……",
      );
      await daiya.say_and_wait(
        "……2000미터를 달린 것만으로 한계라니…… 이런 달리기로 어떻게 최고가 될 수 있을까요……",
        true,
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          "실제로 후반은 정말 힘들었어요…… 막판 스퍼트를 전혀 하지 못했어요……",
          true,
        );
        await daiya.say_and_wait(
          "이건…… 제가 생각한 달리기와 너무 달라요……",
          true,
        );
        await daiya.say_and_wait(
          `가장 빠른 ${daiya.uma_sex_title}가 이기는 『사츠키상』에서 우승자가 이런 달리기를 하다니……!`,
          true,
        );
        await daiya.say_and_wait(
          `뛰어난 ${daiya.uma_sex_title}라니, 저는 전혀 자격이 없어요!`,
          true,
        );
      } else {
        await daiya.say_and_wait("하지만 제 실력이 조금만 더 뛰어났더라면……!", true);
      }
      await daiya.say_and_wait("윽……!");
      era.printButton("다이아……!", 1);
      await era.input();
      await daiya.say_and_wait("……트레이너님……");
      era.printButton("「경기장까지 직접 달려오게 해서 미안해.」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네!? 트레이너님이 사과하실 일은 아니에요!",
      );
      await daiya.say_and_wait(
        "그 상황에서는 저도 내려서 달리는 편이 낫다고 생각했는걸요!",
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          "……하지만…… 오늘은 날씨가 나빴어요. 100%의 힘을 내지 못했어요……",
        );
        await daiya.say_and_wait(
          "이것도 사토노 가문의 징크스 때문일까요……?",
        );
        await daiya.say_and_wait("하지만 정말로 징크스 때문이라면──");
        await daiya.say_and_wait("제가 깨뜨리겠어요!");
        await daiya.say_and_wait([
          "다음 ",
          toky_yus,
          "에서 징크스를 깨뜨리겠어요! 최고의 달리기를 보여 드리고 이기겠어요!!",
        ]);
      } else {
        await daiya.say_and_wait(
          "……하지만…… 오늘은 날씨가 나빴어요. 100%의 힘을 내지 못하고 져 버렸어요……",
        );
        await daiya.say_and_wait(
          `『사토노 가문의 ${daiya.uma_sex_title}는 G1에서 이기지 못한다』는 징크스, 저도……`,
        );
        era.printButton("「다이아……」", 1);
        await era.input();
        await daiya.say_and_wait("하지만 다음에는 지지 않을 거예요!");
        await daiya.say_and_wait("반드시 징크스를 깨뜨리겠어요!!");
        await daiya.say_and_wait([
          "다음 ",
          toky_yus,
          "! 반드시 징크스를 깨뜨리고 이겨 보이겠어요!!",
        ]);
      }
      await era.printAndWait(
        `사토노 다이아몬드는 굳게 다짐했다. 불운한 경험이 오히려 ${daiya.sex}의 징크스를 깨려는 결의를 불태웠다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_win_g1: (() => {
    const title = "나를 지탱해 주는 수많은 사람들";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await era.printAndWait(
        "사토노 다이아몬드가 첫 G1에서 우승한 뒤 어느 날. 거리를 걷고 있는데──",
      );
      await you.say_as_passer_by_and_wait(
        "게임 센터 직원",
        "일 인당 한 번, 호화 경품에 무료로 도전하세요! 지금 『사토노 다이아몬드 G1 우승 기념 행사』가 진행 중입니다!!",
      );
      era.printButton("「사토노 다이아몬드 기념 행사!?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 궁금해져서 게임 센터에 들어갔다. 화려하게 꾸며진 매장 곳곳에 지금까지의 레이스 사진이 붙어 있다.`,
      );
      await daiya.say_and_wait("어머, 트레이너님. 안녕하세요.");
      await kita.say_and_wait("여어! 트레이너도 놀러 온 거야?");
      era.printButton("「아니, 다이아 기념 행사라고 해서 놀라서……」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${daiya.couple_title}에게 왜 사토노 다이아몬드 기념 행사를 하는지 물었다.`,
      );
      await daiya.say_and_wait(
        "여기는 사토노 그룹에서 개발한 게임기를 설치한 게임 센터예요.",
      );
      await daiya.say_and_wait(
        "제가 G1에서 우승한 기념으로 그룹 관련 시설에서 행사를 열고 있어요.",
      );
      await daiya.say_and_wait(
        "『경사가 있으면 고객에게 보답하고 기쁨을 함께 나눈다』──그게 사토노 그룹의 경영 방침이거든요.",
      );
      await daiya.say_and_wait(
        "학원 측의 허가도 이미 받았을 텐데요……",
      );
      await era.printAndWait(
        `레이스와 직접 관련이 없는 잡무라 학원에서 ${you.name}의 몫까지 절차를 처리해 준 모양이라고 ${you.name}은(는) 생각한다.`,
      );
      await kita.say_and_wait(
        "이제 패밀리 레스토랑에 가려고 해. 트레이너도 같이 갈래?",
      );
      await daiya.say_and_wait("맞아요! 함께 가요!");
      era.printButton("「그럼 같이 갈까」", 1);
      await era.input();
      await daiya.say_and_wait("잘됐어요! 에헤헤♪");
      await daiya.say_and_wait(
        "아……맞다. 그 전에 잠깐만 기다려 주세요.",
      );
      await era.printAndWait(
        "그렇게 말한 사토노 다이아몬드는 직원에게 말을 걸어 사인 보드를 건네고 게임기 한 대에도 사인을 했다.",
      );
      await kita.say_and_wait(
        "다이아는 이렇게 그룹 시설을 돌면서 사인해 주고 있거든!",
      );
      await kita.say_and_wait(
        "찾아온 사람들이 조금이라도 기뻐했으면 해서 직접 생각해 낸 거래!",
      );
      await kita.say_and_wait(
        "전국의 매장을 다 돌 수는 없으니까 G1에서 쓴 편자를 사인 보드에 찍어서 나눠 준대!",
      );
      await daiya.say_and_wait("기다리게 해서 죄송해요. 가죠.");
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        "「『다이아 함박스테이크』 세 개 주세요──!」",
      ]);
      await era.printAndWait("패밀리 레스토랑 직원「네. 잠시만 기다려 주세요.」");
      era.printButton("「행사 한정 메뉴까지……」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후후, 사실 이 『다이아 함박스테이크』는 어머니가 만들어 주신 함박스테이크를 재현한 거예요.",
      );
      await daiya.say_and_wait(
        "……레이스 전날이면 어머니는 요리사 대신 직접 함박스테이크를 만들어 주셨어요.",
      );
      await daiya.say_and_wait(
        "동그란 함박스테이크 위에 다이아몬드 모양의 치즈……가운데에는 어머니가 직접 만드신 깃발이 꽂혀 있었죠.",
      );
      await daiya.say_and_wait(
        "아무리 바쁘셔도 어머니는 꼭 저를 응원하는 함박스테이크를 만들어 주셨어요.",
      );
      await kita.say_and_wait("그래서 『다이아 함박스테이크』구나!");
      await daiya.say_and_wait(
        "응. 맛까지 완전히 같지는 않겠지만……기대돼♪",
      );
      await era.printAndWait(
        "패밀리 레스토랑 직원「기다리셨습니다. 『다이아 함박스테이크』 나왔습니다.」",
      );
      await daiya.say_and_wait("와아, 나왔네요! 잘 먹겠습니다──!");
      await daiya.say_and_wait("냠냠…………음!");
      await daiya.say_and_wait(
        "이 맛……어머니가 만드신 것과 정말 비슷해요! 특히 속이 폭신한 식감이……!",
      );
      await daiya.say_and_wait("……후후후, 분명 어머니가 감수하셨을 거예요♪");
      await era.printAndWait(
        "패밀리 레스토랑 메뉴치고 『다이아 함박스테이크』에는 집에서 직접 만든 듯한 느낌이 짙게 배어 있었다.",
      );
      await kita.say_and_wait(
        "이렇게 성대하게 하는 걸 보면 아저씨랑 아주머니도 다이아의 첫 G1 우승이 엄청 기쁘신가 보다?",
      );
      await daiya.say_and_wait(
        "응──전화로 축하해 주시긴 했지만 특별히 평소와 다른 느낌은 아니었어. 여전히 바쁘신 것 같더라.",
      );
      await kita.say_and_wait("어? 그래?");
      await daiya.say_and_wait(
        "응. 다만 다음에 집에 가면 축하해 주시겠다고 하셨어.",
      );
      await daiya.say_and_wait("……두 분 다 아직 더 드실 수 있나요?");
      await daiya.say_and_wait(
        "그룹에서 운영하는 다른 카페에서는 G1 우승 기념 동판 케이크 세트도 판매하고 있거든요.",
      );
      await daiya.say_and_wait(
        "디저트는 거기서 먹어요♪ 그 뒤에는 실내 놀이 시설도 지금은 전부 무료니까……",
      );
      era.printButton("「다이아 부모님이 바쁘신 게 설마 그래서……」", 1);
      await era.input();
      await kita.say_and_wait("G1 우승 기념 행사 준비로 바쁘신 것 같은데.");
      await kita.say_and_wait(
        "……그룹 관련 시설 전부에서 행사를 여는 건 아니겠지……",
      );
      await daiya.say_and_wait(
        "아, 사토노 그룹 리조트 호텔도 오늘 예약하면 특별 숙박 요금을 적용해 준대요.",
      );
      await daiya.say_and_wait(
        "괜찮으시면 트레이너님도 이용해 보세요♪",
      );
      await kita.say_and_wait("진짜 전부 하고 있잖아!!");
      await era.printAndWait(
        "──보통 규모의 축하가 아니다. 사토노 다이아몬드의 부모님과 일가가 얼마나 기뻐하는지 생생히 전해진다.",
      );
      await era.printAndWait(
        "사토노 가문의 첫 G1 승리. 사토노 다이아몬드가 이뤄 낸 위업은 수많은 사람에게 기쁨을 안겨 주었다.",
      );
      await era.printAndWait(
        `앞으로도 ${daiya.sex}와 함께 더 많은 승리를 안겨 주자──`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = "일본 더비를 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho 皐月賞（色付き）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き）
     */
    const f = async (daiya, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `수많은 ${daiya.uma_sex_title}가 꿈꾸는 무대──『일본 더비』. 본 경기를 내일 앞두고 사토노 다이아몬드는 평소보다 더욱 의욕에 차 있다.`,
      );
      await daiya.say_and_wait(
        "승부복과 편자는 어제 다 준비해 뒀어요.",
      );
      await daiya.say_and_wait(
        "그러니 오늘은 마지막 트레이닝에 집중할 수 있어요!",
      );
      era.printButton("「그래도 가볍게 조정하는 정도밖에 못 하겠지만」", 1);
      await era.input();
      await daiya.say_and_wait(
        "피로가 남은 채로 레이스에 나갈 수는 없으니까요. 괜찮아요. 전부 트레이너님의 지시대로 할게요.",
      );
      await daiya.say_and_wait("──내일은 날씨도 좋을 것 같아요.");
      era.drawLine({
        content: `일본 더비 당일`,
      });
      await daiya.say_and_wait(
        "슬슬 시간이네요. 후후, 오늘은 모든 게 순조롭네요♪",
      );
      await era.printAndWait(
        `사토노 다이아몬드의 상태는 좋다.${daiya.sex}의 말대로 오늘은 『사츠키상』 때와 달리 경기장까지 오는 길도 순탄했다.`,
      );
      await daiya.say_and_wait("마지막으로 편자를 확인하고──");
      await daiya.say_and_wait("꺄악!");
      era.printButton("「왜 그래!?」", 1);
      await era.input();
      await daiya.say_and_wait("신발이……");
      await daiya.say_and_wait(
        "밑창이 찢어진 것 같아요……편자를 박은 곳부터 갈라졌어요……",
      );
      await daiya.say_and_wait("………………어제 봤을 때는 아무렇지도 않았는데……");
      await era.printAndWait(
        `${you.name}이(가) 신발 상태를 살펴보니 수리는 어려울 것 같다. 예비 신발로 갈아 신는 수밖에 없다.`,
      );
      await era.printAndWait(
        "다행히 사토노 다이아몬드는 예비 신발에도 미리 편자를 박아 두었다.",
      );
      await daiya.say_and_wait("…………네, 괜찮아요!");
      era.printButton("「출주 전에 발견해서 다행이야!」", 1);
      await era.input();
      await daiya.say_and_wait("……그렇네요.");
      await daiya.say_and_wait('…………');
      era.printButton("「……다이아?」", 1);
      await era.input();
      await daiya.say_and_wait("또 평소라면 일어나지 않을 일이……");
      await daiya.say_and_wait([
        sats_sho,
        "도 ",
        toky_yus,
        "도. 중요한 클래식 3관 레이스 때마다 왜……!",
      ]);
      await daiya.say_and_wait(
        "마치 사토노 가문의 염원을 가로막으려는 것 같아요.",
      );
      await daiya.say_and_wait("……무언가가 제 발목을 잡는 것처럼……");
      await daiya.say_and_wait("……이게 사토노 가문의 징크스가 가진 힘……");
      era.printButton("「다이아, 지금은……」", 1);
      await era.input();
      await daiya.say_and_wait(
        "하지만!! 저는 지지 않아요! 징크스 따위 전부 깨뜨리겠어요!!",
      );
      await daiya.say_and_wait("반드시 해내겠어요!! 그러니까……!");
      await daiya.say_and_wait([
        "저는 ",
        toky_yus,
        "에서 이길 거예요! 반드시!!",
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = "한심한 자신";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き）
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き）
     */
    const f = async (daiya, etsuko, you, rank, tenn_spr, takz_kin) => {
      await daiya.say_and_wait("……괜찮아요! 신발도 갈아 신었어요!", true);
      await daiya.say_and_wait(
        "예비 신발에도 미리 편자를 박아 뒀고요! ……봐요, 신어 봐도 평소와 같아요.",
        true,
      );
      await daiya.say_and_wait("……걱정할 일은……", true);
      await daiya.say_and_wait("아무것도 없어요!!", true);
      await daiya.say_and_wait("아아아아아아아아아아아!!");
      await era.printAndWait(
        "무언가를 떨쳐 내려는 듯한……날것 그대로의 포효. 사토노 다이아몬드가 엄청난 기세로 잔디를 달린다.",
      );
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          "중계",
          `선두는……사토노 다이아몬드──! 올해의 더비 ${daiya.uma_sex_title}는 사토노 다이아몬드!`,
        );
        await you.say_as_passer_by_and_wait("관중", "우와아아아아아아아!");
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "사토노 다이아몬드가 1착!! 막판 스퍼트가 굉장해!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 B",
          "스태미나도 여유가 있어 보이네. 『국화상』도 되지 않겠어!",
        );
      } else {
        await you.say_as_passer_by_and_wait(
          "중계",
          `……사토노 다이아몬드, 미치지 못합니다! 더비 ${daiya.uma_sex_title}의 꿈이 ${daiya.sex}에게서 멀어집니다──!!`,
        );
      }
      await daiya.say_and_wait("하아, 하아……");
      await daiya.say_and_wait(
        "신발은……멀쩡했는데, 저는……신발이 신경 쓰여서 견딜 수가 없었어요……",
        true,
      );
      await daiya.say_and_wait("정말 한심하게 달렸어요……!!", true);
      if (rank === 1) {
        await etsuko.say_and_wait(
          `사토노 다이아몬드${daiya.adult_sex_title}, 축하드립니다! 더비 ${daiya.uma_sex_title}가 되신 소감은요?`,
        );
        await daiya.say_and_wait(
          `……감사합니다.${daiya.uma_sex_title}의 역사에 이름을 남기게 되어 영광이에요.`,
        );
        await daiya.say_and_wait(
          "『일본 더비』에서의 승리는 사토노 가문에도 더없이 큰 영예예요.",
        );
        await etsuko.say_and_wait(
          "사토노 그룹 여러분도 무척 기뻐하시겠네요!",
        );
        await daiya.say_and_wait(
          "네, 물론이죠. 다만 자만하지 말라는 말씀도 하시겠죠.",
        );
        await etsuko.say_and_wait(
          `어머! 그 성실한 향상심이야말로 사토노 다이아몬드 ${daiya.adult_sex_title}를 강하게 만들어 온 원동력이겠네요!`,
        );
        await daiya.say_and_wait(
          "네. 그룹 여러분은 늘 제가 더 성장하도록 격려해 주세요.",
        );
        await daiya.say_and_wait(
          "그러니 다음에는 오늘보다 더 멋진 달리기를 보여 드릴게요!",
        );
        await era.printAndWait("관중 A「오, 기대할게──!」");
        await daiya.say_and_wait("네! 반드시요!!");
        await you.say_as_passer_by_and_wait("관중", "우와아아아아아아……");
        await daiya.say_and_wait("……후우……");
        await era.printAndWait(
          "지하 통로로 들어서자 사토노 다이아몬드의 팽팽하던 긴장이 풀린다. 길게 한숨을 내쉰 뒤 평소의 표정으로 돌아왔다.",
        );
        await daiya.say_and_wait("……가요.");
        era.drawLine();
        await era.printAndWait(
          `대기실로 돌아와서도 ${daiya.sex}의 얼굴에는 어딘가 불만이 남아 있다.`,
        );
        era.printButton(
          `「축하해. 오늘부터 너는 더비 ${daiya.uma_sex_title}야」`,
          1,
        );
        await era.input();
        await daiya.say_and_wait("감사해요. 하지만……");
        await daiya.say_and_wait(
          `더비 ${daiya.uma_sex_title}를 가리는 레이스에서……그렇게 달렸다니, 제 자신이 한심해서……`,
        );
        era.printButton("「왜 그래?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "저……레이스 내내 신발 상태가 신경 쓰여서 견딜 수가 없었어요.",
        );
      } else {
        era.drawLine();
        await era.printAndWait(
          "대기실로 돌아온 뒤 사토노 다이아몬드는 말이 없었다.",
        );
        era.printButton("「이기지 못해서 분하겠지만……」", 1);
        await era.input();
        await daiya.say_and_wait(
          "……아니에요, 트레이너님. 진 건 제 자신이 한심했기 때문이에요.",
        );
        era.printButton("「한심하다니?」", 1);
        await era.input();
        await daiya.say_and_wait(
          "네. 레이스 내내 신발이 신경 쓰여서 견딜 수가 없었거든요.",
        );
      }
      await daiya.say_and_wait(
        "아무 이상도 없었는데, 몇 번이나 직접 확인하고 문제가 없다고 판단했는데도요!",
      );
      await daiya.say_and_wait(
        "……그때 저는……징크스를 너무 두려워하고 있었어요……",
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          `징크스에 정신을 빼앗겨서 최선을 다하지 못했어요!`,
        );
        await daiya.say_and_wait("그런 제 자신을 용서할 수 없어요!!");
      } else {
        await daiya.say_and_wait(
          "징크스에 정신을 빼앗겨서 최선을 다하지 못했고, 그래서 졌어요!",
        );
        await daiya.say_and_wait("부끄러워서 용서할 수 없어요!!");
      }
      await daiya.say_and_wait(
        "징크스에는 절대 지지 않겠다고! 분명 그렇게 맹세했는데!!",
      );
      await daiya.say_and_wait(
        "……사토노 가문의 꿈을 이루는 길에 불안은 조금도 남겨 두면 안 돼요!",
      );
      await daiya.say_and_wait(
        "앞길에 강대한 징크스가 기다리고 있다면 제 실력을 그보다 더 높이 끌어올리겠어요!",
      );
      await daiya.say_and_wait(
        "어떤 어려움에도 흔들리지 않는 강인함! 무슨 일이 생겨도 대응할 수 있는 준비!",
      );
      await daiya.say_and_wait("불운도 징크스도 압도적인 실력으로 짓밟겠어요!");
      await era.printAndWait(
        `완벽한 승리를 맹세하는 선언.──${you.name}은(는) 그저 감탄했다.`,
      );
      await daiya.say_and_wait("트레이너님!");
      era.printButton("「트레이닝 준비는 나한테 맡겨!」", 1);
      await era.input();
      await daiya.say_and_wait("후후후! 역시 제 트레이너님이세요♪");
      await daiya.say_and_wait(
        "『국화상』에서는 반드시 완벽한 레이스를 보여 드릴게요!",
      );
      era.drawLine();
      await era.printAndWait(
        `경기장에서 돌아오는 길에 ${you.name}은(는) 사토노 다이아몬드를 카페로 데려갔다.`,
      );
      await era.printAndWait(
        `징크스에 맞서려는 ${daiya.sex}를 격려하려고 달콤한 디저트를 사 주기로 했다.`,
      );
      await daiya.say_and_wait(
        "뭘 시켜도 괜찮나요……? 음……과일 파르페에 치즈 케이크를 추가해도……?",
      );
      era.printButton("「물론이지!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "그럼 아이스크림 세 스쿱에 경단과 젤리도 넣고, 과일도 더 얹어서……",
      );
      era.printButton("「원하는 만큼 추가해!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후, 더는 못 먹겠어요. 잘 먹었습니다, 트레이너님♪",
      );
      await era.printAndWait("──그때 옆자리에서 익숙한 이름이 들렸다.");
      await you.say_as_passer_by_and_wait("관전을 마치고 온 남성 손님 A", [
        "얼마 전 ",
        takz_kin,
        " 팬 투표 중간 발표! 1위가 키타산 블랙이야!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관전을 마치고 온 남성 손님 B",
        `맞아, 맞아! 나도 ${daiya.sex}한테 투표해서 정말 기뻐!`,
      );
      await era.printAndWait([
        "출주할 선수를 팬 투표로 정하는 ",
        takz_kin,
        ". 중간 발표에서 키타산 블랙이 1위에 올랐다.",
      ]);
      await you.say_as_passer_by_and_wait("관전을 마치고 온 남성 손님 A", [
        `${daiya.sex}의 `,
        tenn_spr,
        "는 정말 굉장했지! 키타산 블랙, 한 번 추월당할 뻔했는데 마지막에 다시 앞질러서 코 차이로 1착!!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관전을 마치고 온 남성 손님 B",
        `그 레이스는 뜨거웠지~! 마지막에는 ${daiya.sex}의 의지가 이겼어!!`,
      );
      await you.say_as_passer_by_and_wait(
        "관전을 마치고 온 남성 손님 A",
        `${daiya.sex}, 필사적으로 달리는 게 느껴진단 말이야. 흔들리지 않는 모습에 응원하고 싶어진다니까.`,
      );
      await you.say_as_passer_by_and_wait(
        "관전을 마치고 온 남성 손님 B",
        `맞아, 맞아! ${daiya.sex}은(는) 특별히 눈부신 느낌보다는 평범하고 우리와 가까운 느낌이야.`,
      );
      await you.say_as_passer_by_and_wait(
        "관전을 마치고 온 남성 손님 B",
        `그래서 더 이겼으면 좋겠어! 마치 내가 뭔가 해낸 것 같은 기분이 들거든!`,
      );
      await daiya.say_and_wait(
        "저도 그렇게 생각해요! 두 분도 키타짱의 매력을 잘 아시네요!",
      );
      await daiya.say_and_wait(
        `키타짱……${daiya.sex}는 새해 참배 때 자기를 응원해 주는 사람을 늘리겠다는 목표를 세웠어요……`,
      );
      await daiya.say_and_wait("그걸 이뤘네요.");
      era.printButton("「팬 투표 1위니까」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 팬분들도 즐겁게 키타짱의 레이스 이야기를 하고 계세요.",
      );
      await daiya.say_and_wait(
        "응원해 주는 사람들에게 웃음을 전하고 싶다──그 목표에도 가까워지고 있어요.",
      );
      await daiya.say_and_wait("……저도 질 수는 없어요.");
      await daiya.say_and_wait(
        "키타짱과 나란히 달릴 라이벌로서 그 이름에 부끄럽지 않도록 노력해야죠……!",
      );
      await daiya.say_and_wait(
        "지금은 키타짱이 앞서 달리고 있어요. 하지만 저는 제 길을 나아가서 반드시 따라잡겠어요!",
      );
      era.printButton("「『국화상』에서는 더욱 질 수 없겠네」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 키타짱이 작년에 우승한 『국화상』. 이 레이스에서는 절대로 질 수 없어요!",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = "여름 합숙(클래식급) 시작!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait("오늘부터 기다리고 기다리던 『여름 합숙』이다!");
      await daiya.say_and_wait(
        "이번 여름 합숙에서 징크스에 흔들리지 않는 강함을 손에 넣겠어요!",
      );
      await era.printAndWait(
        "강인한 몸을 만들기 위해 여름 합숙에서는 기초 트레이닝을 늘릴 예정이다. 우선 몸의 기초를 다지는 것이 중요하다.",
      );
      await era.printAndWait(
        "『국화상』의 3000미터를 끝까지 달릴 스태미나를 기르는 것도 이번 합숙의 과제다.",
      );
      await kita.say_as_unknown_and_wait("다이아──!");
      await kita.say_and_wait("자, 자, 얼른 방으로 가자!");
      await daiya.say_and_wait("정말, 키타짱도 참. 너무 들떴잖아.");
      await kita.say_and_wait(
        "바다잖아! 당연히 설레지! 올해도 제대로 단련하자~!",
      );
      await daiya.say_and_wait("오──!");
      await kita.say_and_wait("아하하, 다이아도 들떴잖아!");
      await daiya.say_and_wait(
        "후후, 물론 의욕은 넘치지. 『국화상』에서 꼭 이길 거니까.",
      );
      await daiya.say_and_wait(
        "키타짱이 우승한 『국화상』에서 이기고……사토노 가문의 징크스를 깨뜨려서……키타짱의 라이벌에 걸맞은 내가 될 거야!",
      );
      await kita.say_and_wait(
        "다이아……! 그래! 언젠가 같은 레이스를 달리기 위해서.",
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        "「힘내자, 오──!」",
      ]);
      await era.printAndWait(
        "두 사람의 기합 소리가 여름 하늘에 울려 퍼진다.──뜨거운 여름 합숙이 될 것 같다.",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = "여름 합숙(클래식)에서";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} turbo ツインターボ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await daiya.say_and_wait("하아, 하아……페이스주……끝났어요……");
      era.printButton("「수고했어. 쉬자」", 1);
      await era.input();
      await daiya.say_and_wait("네……");
      await era.printAndWait(
        "여름 합숙도 절반이 지난 날. 사토노 다이아몬드의 움직임은 눈에 띄게 둔하다.",
      );
      await era.printAndWait(
        `무더위 속 트레이닝은 체력을 크게 소모시킨다. 연일 이어진 훈련으로 ${daiya.sex}는 지친 모양이다.`,
      );
      await kita.say_as_unknown_and_wait("우오오오오──!");
      await kita.say_and_wait(
        "후우, 10번 끝났다! 점점 수월해지는데~",
      );
      await kita.say_and_wait("좋아──강도를 배로 올려서 1세트 더──!");
      await daiya.say_and_wait("……트레이너님, 다음 훈련으로 넘어가요!");
      era.printButton("「조금 더 쉬는 게 좋겠어……」", 1);
      await era.input();
      await daiya.say_and_wait("아니요, 괜찮아요! 그럼 시작할게요!");
      era.drawLine();
      await daiya.say_and_wait("하아, 하아, 하아……");
      era.printButton("「오전 트레이닝은 여기까지 하자」", 1);
      await era.input();
      await daiya.say_and_wait("그, 그래도……예정된 훈련이 아직……");
      await era.printAndWait(
        `${you.name}은(는) 지친 상태로 계속해도 효과가 적다고 설명했다. 실제로 지금 기록은 크게 떨어져 있다.`,
      );
      await daiya.say_and_wait(
        "몸이 한계라고 멈춰 버리면……앞으로 나아갈 수 없어요! 징크스를 뛰어넘을 실력을 얻으려면 더 필사적으로 해야 해요!!",
      );
      await daiya.say_and_wait(
        "게다가 키타짱은 아직도 열심히 하고 있어요! 저도 질 수 없어요!",
      );
      await era.printAndWait(
        `${daiya.sex}의 시선은 조금 떨어진 곳에서 땀투성이가 된 채 계속 훈련을 소화하는 키타산 블랙에게 머물러 있다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 기합과 근성으로 한계를 뛰어넘는 키타산 블랙의 방식이 사토노 다이아몬드에게는 맞지 않는다고 생각한다.`,
      );
      await daiya.say_and_wait(
        "트레이너님, 괜찮으시면 이걸 참고해 주세요.",
      );
      await daiya.say_and_wait(
        "예전에 지도해 주셨던 선생님들이 정리해 주신 제 트레이닝 자료예요. 성적 데이터와 레이스 영상도 들어 있어요.",
      );
      await daiya.say_and_wait(
        "사토노 가문의 트레이닝 시설은 최신 기기를 사용하니까 데이터도 매우 정확해요.",
      );
      await era.printAndWait(
        `지금까지 ${daiya.sex}는 좋은 환경에서 훈련해 왔다. 무더위 속에서 훈련한 경험은 적기에 낯선 환경이 체력과 기력을 더욱 소모시키고 있다.`,
      );
      era.printButton("「우선 점심부터 먹자」", 1);
      await era.input();
      await daiya.say_and_wait("……네……");
      await turbo.say_as_unknown_and_wait(
        "어──이! 사토노! 거기 트레이너도!",
      );
      await turbo.say_and_wait("터보가 같이 트레이닝해 줄게!");
      await daiya.say_and_wait("……네? 터보?");
      await turbo.say_and_wait(
        "다 같이 할 수 있는 트레이닝이야! 사토노도 끼워 줄게!",
      );
      await dictus.say_and_wait("터보, 진정하세요. 설명은 제가 하겠습니다.");
      await era.printAndWait(
        `어리둥절해하고 있자 사토노 다이아몬드가 말했던 『${daiya.sex}의 환영회를 열어 준 선배들』이 하나둘 나타났다.`,
      );
      await era.printAndWait(
        "이쿠노 딕터스뿐만 아니라 오늘은 트윈 터보, 마치카네 탄호이저, 다이타쿠 헬리오스도 있다.",
      );
      await dictus.say_and_wait(
        "사토노, 괜찮다면 함께 합동 트레이닝을 하지 않겠어요?",
      );
      await dictus.say_and_wait(
        "많은 사람과 교류할 수 있다는 것도 여름 합숙의 장점입니다. 이번 기회에 해 보겠어요?",
      );
      await daiya.say_and_wait("그렇군요……");
      await pama.say_and_wait(
        "어렵게 생각할 필요 없어. 작년에는 테이오 일행이 키타산을 도와줬으니까──",
      );
      await turbo.say_and_wait(
        "테이오만 도와주는 건 불공평해! 터보도 서──언배가 되고 싶어!",
      );
      await pama.say_and_wait("그런 거야. 어울려 주면 고맙겠어.");
      await turbo.say_and_wait("좋지! 응, 사토노! 응──응──응──응──!!");
      await nature.say_and_wait(
        "괜찮으면 우리랑 같이 트레이닝해 주지 않을래?",
      );
      await daiya.say_and_wait("그렇네요……어떻게 할까요, 트레이너님?");
      era.printButton("「어떤 트레이닝을 하려는 거야?」", 1);
      await era.input();
      await dictus.say_and_wait("생각해 둔 건 두 가지입니다──");
      await era.printAndWait(
        "이쿠노 딕터스의 제안을 살펴본다──과연, 체력을 너무 쓰지 않고 무리 없는 범위에서 진행할 수 있는 내용이다.",
      );
      await era.printAndWait("무엇보다 재미있어 보인다. 기분 전환도 될 것 같다.");
      era.printButton("「그럼 합동 트레이닝에 끼워 달라고 하자」", 1);
      await era.input();
      await turbo.say_and_wait(
        "아싸──!! 사토노, 나머지는 터보 선배한테 맡겨────!",
      );
      await daiya.say_and_wait("후후후, 잘 부탁드려요! 터보 선배♪");
      await tannhauser.say_and_wait(
        "정해졌네요. 그럼 점심 먹어요~♪ 카레? 야키소바? 아니면 둘 다~?",
      );
      await helios.say_and_wait(
        "예이☆ 먹을 거면 전부 먹어야지! 전원 세 가지 메뉴 싹 비우는 게 규칙이야!",
      );
      await nature.say_and_wait("벌써!?");
      await dictus.say_and_wait("그럼 점심 식사 후에 모이죠.");
      await dictus.say_and_wait(
        "어느 쪽으로 하시겠어요? 트레이너는 어느 쪽이 좋습니까?",
      );
      await era.printAndWait("지금 사토노 다이아몬드에게 어울리는 트레이닝은──");
      era.printButton("「모래 터널 파기」(스태미나+20)", 1);
      era.printButton("「천천히 떠다니는 종이 풍선 배구」(파워+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await dictus.say_and_wait(
          "모래 터널이군요. 해변 가게에 가게 근처 모래사장 사용 허가는 받아 두었습니다. 가죠.",
        );
        await daiya.say_and_wait(
          "저기~ 질문이 있어요. 모래로 터널을 만드는 게 정말 트레이닝이 되나요?",
        );
        await nature.say_and_wait(
          "그럼──우리가 지나갈 수 있는 터널을 만들 거니까.",
        );
        await nature.say_and_wait(
          "터널을 만들 모래도 엄청 많이 파야 해. 계속, 계속, 계속 파는 거지.",
        );
        await daiya.say_and_wait("그렇군요……그거라면 단련이 되겠네요!");
        await daiya.say_and_wait("후우, 이 정도면 될까요?");
        await tannhauser.say_and_wait(
          "네, 딱 좋아요~ 자기가 판 구덩이에 빠지지 않게 조심하세요!",
        );
        await dictus.say_and_wait("탄호이저, 당신도 빠지지 않게 조심하세요.");
        await tannhauser.say_and_wait(
          "앗! 그러네요~! ……『조심할게요』……",
        );
        await tannhauser.say_and_wait(
          "그럼──다음은 기초 공사예요. 모래에 물을 듬~뿍 붓고 밟아서 다지는 거죠.",
        );
        await tannhauser.say_and_wait(
          "터널 높이까지 모래를 쌓고, 밟고, 쌓고, 밟고……저랑 같이──♪",
        );
        await era.printAndWait("일동「터널 완성이에요~!」");
        await daiya.say_and_wait("와아~! 정말로 지나갈 수 있어요!");
        await pama.say_and_wait("처음 만들어 본 것치고 완성도가 높은데!");
        await nature.say_and_wait("후우~ 끝나자마자 피로가 확 밀려오네……");
        await daiya.say_and_wait(
          "모래를 파고, 바닷물을 나르고, 모래산을 밟아 다지고……계속 몸을 움직였으니까요.",
        );
        await daiya.say_and_wait("그래도 재미있었어요!");
        await era.printAndWait(
          "모래 터널 만들기는 힘을 기르는 트레이닝일 뿐만 아니라 기분 전환도 된 모양이다.",
        );
        await turbo.say_and_wait(
          "헤헤헤──마지막이야! 같이 부수자~~!!",
        );
        await daiya.say_and_wait("……네!?");
        await nature.say_and_wait(
          "무슨 말이 하고 싶은지는 알겠지만 모래사장에 구덩이를 잔뜩 남겨 둘 수는 없잖아.",
        );
        await era.printAndWait(
          "모래 터널은 순식간에 무너져 흔적도 없이 사라졌다. 합동 트레이닝은 조금 씁쓸한 추억이 되었다.",
        );
      } else {
        await dictus.say_and_wait(
          "네. 평범한 배구공 대신 종이 풍선을 사용합니다. 한 번 해 보면 알 거예요.",
        );
        await dictus.say_and_wait(
          "그럼 첫 번째 경기! 파머 & 헬리오스 대 사토노 & 터보입니다!",
        );
        era.printButton("「태양」", 1);
        await era.input();
        await era.printAndWait([
          pama.get_colored_name(),
          '&',
          helios.get_colored_name(),
          "「예이예이☆」",
        ]);
        await turbo.say_and_wait("사토노는 터보만 따라오면 돼──!");
        await daiya.say_and_wait("네~♪");
        await pama.say_and_wait("서브 간다~! 에잇──!");
        await era.printAndWait(
          `종이 풍선은 ${daiya.sex}가 높이 쳐 올린 뒤……한참이 지나도 내려오지 않는다.`,
        );
        await turbo.say_and_wait(
          "좋아, 와라, 와라, 와라, 와라! 와라, 와라…………아직도 안 와────!?",
        );
        await daiya.say_and_wait(
          "떨어질 곳은 이 근처……앗! 바람 방향이……! 네트를 넘어서……!",
        );
        await daiya.say_and_wait("아……넘어가지 않았네요……");
        await turbo.say_and_wait("뭐야──! 이 풍선 너무 느리잖아!!");
        await daiya.say_and_wait(
          "천천히 떠다닌다는 게……이런 뜻이었군요. 종이 풍선은 보통 공보다 훨씬 가벼우니까 공중에 떠 있는 시간이 길어요.",
        );
        await daiya.say_and_wait(
          "게다가 네트를 넘기려면 힘 조절도 필요하네요. 그 때문에 움직이지 않고 기다리기도 해야 하고요.",
        );
        await pama.say_and_wait(
          "맞아. 때가 올 때까지 참고 기다렸다가 적당한 힘으로 치는 거지. 침착하지 않으면 못 해.",
        );
        await helios.say_and_wait(
          "바람 때문에 멀리 날아가기도 하고! 이리저리 뛰게 되니까 완전 웃겨☆",
        );
        await daiya.say_and_wait("기회를 기다린다……레이스에서 승부를 거는 타이밍과 같네요.");
        await daiya.say_and_wait(
          "주변에 휩쓸리지 않고 자신에게 가장 좋은 순간까지 버티는 거군요. 상당한 인내심이 필요하겠어요. 좋은 트레이닝이 될 것 같아요!",
        );
        await era.printAndWait(
          "그렇게──사토노 다이아몬드는 바람 방향과 종이 풍선이 떨어질 곳을 침착하게 읽어 경기에서 이겼다.",
        );
        await dictus.say_and_wait(
          "잘했어요. 특히 사토노. 무슨 일이 일어나도 흔들리지 않는 정신력에 감탄했습니다.",
        );
        await daiya.say_and_wait(
          "에헤헤, 저도 모르게 푹 빠져 버렸어요. 재미있었어요!",
        );
        await era.printAndWait(
          "사토노 다이아몬드는 합동 트레이닝으로 인내심을 기르고 기분 전환에도 성공한 모양이다.",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = "여름 합숙(클래식) 종료";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        "여름 합숙 마지막 날. 사토노 다이아몬드는 무언가 생각에 잠긴 듯했다.",
      );
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await daiya.say_and_wait("……앞으로의 일을 생각하고 있었어요.");
      await daiya.say_and_wait(
        "『국화상』까지 대략 두 달……그동안 얼마나 성장할 수 있을까요.",
      );
      await daiya.say_and_wait(
        "아직 징크스에 전혀 흔들리지 않을 만큼 강해졌다고는 할 수 없을 것 같아요.",
      );
      era.printButton("「아직 두 달이나 있어」", 1);
      await era.input();
      await era.printAndWait(
        "여름 합숙은 기초 트레이닝이 중심이었다. 『국화상』을 위한 본격적인 조정은 이제부터다.",
      );
      await daiya.say_and_wait(
        "……그렇네요. 트레이닝의 효과가 곧바로 나타나지는 않는다는 걸 알면서도 초조해져요.",
      );
      await daiya.say_and_wait(
        "이렇게 흔들리면 안 되죠! 징크스에는 지지 않아요! 절대로! 반드시 깨뜨려 보이겠어요!",
      );
      await daiya.say_and_wait(
        "네! 마음을 다잡았어요! 『국화상』을 위해 더 열심히 할게요!",
      );
      await era.printAndWait(
        `『국화상』에서 이기겠다는 결심이 ${daiya.sex}를 초조하게 할 만큼 큰 모양이다.`,
      );
      await era.printAndWait(
        "다만──너무 힘이 들어간 것 같기도 하다. 좋지 않은 결과로 이어지지 않았으면 좋겠는데……",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_34: (() => {
    const title = "나를 옭아매는 것";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (
      daiya,
      mcqueen,
      you,
      sats_sho,
      toky_yus,
      kiku_sho,
      tenn_spr,
    ) => {
      await daiya.say_and_wait("우오오오오오──!");
      await daiya.say_and_wait(
        "하아, 하아……아직 부족해요. 이 정도로는 이길 수 없어요……",
      );
      await daiya.say_and_wait(
        "『국화상』에서 이기려면 어떤 돌발 상황에도 흔들리지 않을 만큼 강해져야……!",
      );
      await era.printAndWait(
        `사토노 다이아몬드는 『국화상』을 위해 연일 트레이닝에 몰두하고 있다. 날이 갈수록 ${daiya.sex}의 성장이 느껴진다.`,
      );
      await era.printAndWait(
        "몸 상태는 좋다. 하지만 사토노 다이아몬드의 정신은 상당히 팽팽하게 긴장되어 있다.",
      );
      await era.printAndWait(
        `특히 ${daiya.sex}는 요즘 『징크스를 제압할 실력을』이라는 말을 자주 입에 올린다.`,
      );
      await daiya.say_and_wait("하아, 하아……후읏!");
      await daiya.say_and_wait(
        "트레이너님, 이제는 언덕길 스프린트도 수월하게 할 수 있어요.",
      );
      era.printButton("「두 번 더 할 수 있겠어?」", 1);
      await era.input();
      await daiya.say_and_wait("네. 그럼 한 번 더 달려 볼게요!");
      await era.printAndWait(
        "징크스에 이렇게 집착하는 건 사토노 가문의 기대를 짊어지고 있기 때문일까. 그렇다면──",
      );
      await era.printAndWait(`『${daiya.sex}』에게 도움을 청해 보자.`);
      await mcqueen.say_and_wait("오늘 잘 부탁드려요, 사토노.");
      await daiya.say_and_wait(
        "매, 매……맥퀸!? 맥퀸이 함께 트레이닝을!?",
      );
      era.printButton("「배울 게 많을 거야」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네!! 맥퀸, 귀한 시간 내 주셔서 감사해요!",
      );
      await mcqueen.say_and_wait(
        "후후, 그렇게 긴장하지 않아도 돼요. 저도 당신에게서 자극을 받을 수 있으니까요.",
      );
      await mcqueen.say_and_wait(
        "자, 시간이 많지 않네요. 우선 지구력 달리기로 몸을 풀고 나서 병주 연습을 하죠.",
      );
      await daiya.say_and_wait("잘 부탁드려요!");
      await era.printAndWait("두 사람「우오오오오! 우오오오오!」");
      await daiya.say_and_wait("하아, 하아……조금만 더 가면 됐는데……");
      await mcqueen.say_and_wait(
        "전반에 너무 뒤처졌어요. 선행 주자의 페이스에 맞춰 승부를 거는 타이밍을 바꾸는 연습을 더 하는 게 좋겠네요.",
      );
      await daiya.say_and_wait(
        "말씀대로예요……덕분에 부족한 점을 알았어요!",
      );
      await mcqueen.say_and_wait(
        "후후, 바로 그거예요. 마지막으로 긴 거리를 가볍게 달리며 몸을 식히죠.",
      );
      await daiya.say_and_wait("힘이라니…… 그게, 저기……");
      await era.printAndWait(
        "사토노 다이아몬드의 표정이 밝다. 팽팽하게 긴장한 기색은 더 이상 보이지 않는다.",
      );
      await era.printAndWait(
        `${you.name}은(는) 처지가 비슷한 메지로 맥퀸이라면 사토노 다이아몬드의 마음을 이해할 거라 생각했다.${daiya.sex}에게 부탁하길 잘했다.`,
      );
      await daiya.say_and_wait(
        "하아, 하아…………앗! 죄송해요, 맥퀸!",
      );
      await mcqueen.say_and_wait("무슨 일이죠?");
      await daiya.say_and_wait(
        "벌꿀 음료를 파는 노점이 보여서요! 저……사 와도 될까요?",
      );
      await mcqueen.say_and_wait(
        "어머, 정말이네요. 그럼 여기서 잠깐 쉬면서 수분을 보충하죠.",
      );
      await daiya.say_and_wait("감사해요!");
      await mcqueen.say_and_wait("……사토노, 굉장히 큰 잔이네요……");
      await daiya.say_and_wait(
        "에헤헤, 사실 이 노점에는 유명한 징크스가 있어요.",
      );
      await daiya.say_and_wait(
        "레이스 전에 『LL 사이즈 벌꿀 레몬, 꿀은 적게, 아주 진하게, 특대 사이즈』를 마시면 진다는 징크스예요!",
      );
      await daiya.say_and_wait(
        "그래서 『국화상』 전에 일부러 한 잔 마시고 이 징크스를 깨뜨리려고요!",
      );
      await mcqueen.say_and_wait("징크스를 깨뜨린다……고요?");
      await daiya.say_and_wait([
        "사실 저는 ",
        sats_sho,
        "와 ",
        toky_yus,
        "에서 징크스에 휘둘려서──",
      ]);
      await mcqueen.say_and_wait([
        "──그렇군요. 그래서 ",
        kiku_sho,
        "에서는 더더욱 징크스를 끊어 내고 싶은 거군요.",
      ]);
      await daiya.say_and_wait([
        "네! 징크스에 절대 굴복하지 않겠어요! ",
        kiku_sho,
        "에서 증명해 보일 거예요!",
      ]);
      await mcqueen.say_and_wait(
        "징크스에 지지 않으려는 그 마음가짐은 정말 훌륭해요.",
      );
      await mcqueen.say_and_wait("하지만──");
      await mcqueen.say_and_wait(
        "불운을 징크스라고 여기기 때문에 평정심을 잃고 쉽게 흔들리는 건 아닐까요?",
      );
      await daiya.say_and_wait("네……?");
      await mcqueen.say_and_wait(
        "레이스에서는, 특히 장거리에서는 평정심을 유지하며 자신의 달리기를 끝까지 해내야 해요.",
      );
      await mcqueen.say_and_wait(
        "마음이 흔들리면 집중력이 떨어지고 정신적 부담이 체력까지 소모시켜요. 자신의 달리기를 펼칠 여유가 없어지는 거죠.",
      );
      await mcqueen.say_and_wait(
        "저도 비슷한 경험이 있어요. 중요한 레이스에서 불운이 닥친 적이 있죠.",
      );
      await daiya.say_and_wait("맥퀸도……아……");
      await daiya.say_and_wait(['', tenn_spr, " 말씀이시군요……?"]);
      await mcqueen.say_and_wait(
        "네……그 레이스는 연패가 걸린 중요한 승부였어요.",
      );
      await mcqueen.say_and_wait(
        "게이트에 들어가기 전에 오른쪽 다리에 뭔가 걸리는 느낌이 들어 확인했더니……편자가 빠져 있더군요.",
      );
      await daiya.say_and_wait(
        "알고 있어요. 편자 절반이 휘어져서……그 자리에서 다시 박으셨다고요.",
      );
      await mcqueen.say_and_wait(
        "맞아요. 하지만 그때 저는 편자가 빠진 일을 불운이라고 생각하지 않았어요.",
      );
      await mcqueen.say_and_wait(
        "그저 침착하게 다시 박는 일에만 집중했죠. 레이스가 시작된 뒤에는──",
      );
      await mcqueen.say_and_wait(
        "오른쪽 편자도, 당시 라이벌로 불리던 테이오도 의식하지 않았어요.",
      );
      await mcqueen.say_and_wait(
        "이기기 위해서 제 달리기에만 집중했죠.",
      );
      await mcqueen.say_and_wait(
        "자신의 달리기에 집중해서 3200미터를 끝까지 달렸어요. 그래서 이길 수 있었던 거예요.",
      );
      await daiya.say_and_wait("……자신의 달리기에만……");
      await daiya.say_and_wait([
        "저……",
        toky_yus,
        " 때 신발이 망가져서 예비 신발을 신고 달렸어요. 레이스 중에도 신발이 신경 쓰여서……",
      ]);
      await daiya.say_and_wait(
        "집중하지 못하고 힘을 다 발휘하지 못한 게 분해서……",
      );
      await mcqueen.say_and_wait(
        "어머, 그럼 이미 그 이치는 알고 있었군요.",
      );
      await daiya.say_and_wait(
        "……징크스에 너무 집착해서 오히려 징크스에 옭아매여 있었던 걸까요……?",
      );
      await daiya.say_and_wait(
        "그렇게까지 신경 쓰지 않으면 징크스에 손발이 묶일 일도 없겠죠……",
      );
      await mcqueen.say_and_wait("저는 그렇게 생각해요.");
      await daiya.say_and_wait(
        "……생각해 본 적도 없어요……하지만 곰곰이 생각해 보니……",
      );
      await daiya.say_and_wait(
        "……맥퀸이 흔들리지 않는 강함을 지킬 수 있는 이유를 알 것 같아요……",
      );
      await daiya.say_and_wait(
        "언제나 자신의 달리기와 목표만을 바라보시니까……언제나 의연하고 흔들리지 않으시는 거군요.",
      );
      await daiya.say_and_wait(
        "자신의 중심을 잡고 계신 거겠죠. 에헤헤, 맥퀸은 정말 멋진 분이에요!",
      );
      await mcqueen.say_and_wait("그렇게 말씀해 주시니 영광이네요.");
      await mcqueen.say_and_wait(
        "그리고……징크스라고 불리는 것들 대부분은 결과를 보고 만들어져요.",
      );
      await mcqueen.say_and_wait(
        "그 레이스에서 졌다면 징크스라고 불렸을지도 모르죠. 하지만 이기면 징크스라고 부를 여지가 없어지는 거예요.",
      );
      await daiya.say_and_wait(
        "듣고 보니 정말 그렇네요! 그럼 벌꿀 레몬을 마시면 진다는 징크스도……",
      );
      await mcqueen.say_and_wait(
        "아마……살이 찌기 때문이 아닐까요? 그만큼 마시면 열량이 너무 높고, 레몬이 단맛을 가려 버리니까요.",
      );
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait("저기……버, 벌써 다 마셔 버렸는데요……");
      await daiya.say_and_wait(
        "트……트레이너님!! 아까 마신 벌꿀 레몬의 열량을……추가 트레이닝으로 소모하게 해 주세요~!",
      );
      era.drawLine({ content: "다음 날" });
      await daiya.say_and_wait([
        "저……어젯밤에 ",
        kiku_sho,
        "까지 해결해야 할 과제들을 적어 봤어요.",
      ]);
      await daiya.say_and_wait(
        "3000미터의 페이스 배분, 위치 경쟁 연구, 승부를 걸 타이밍 구상……스태미나도 더 필요해요.",
      );
      await daiya.say_and_wait(
        "할 일이 산더미예요! 이제 징크스를 신경 쓸 틈 같은 건 없어요!",
      );
      await daiya.say_and_wait(
        "사토노 다이아몬드의 달리기를 완성해 보이겠어요! 그리고 『국화상』에서 반드시 이길 거예요!",
      );
      await era.printAndWait(
        "사토노 다이아몬드는 밝은 얼굴로 흔들림 없이 승리를 맹세했다.",
      );
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = "국화상을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus) => {
      await daiya.say_and_wait("몇 번을 겪어도 이 분위기는 짜릿하네요.");
      era.printButton("「긴장돼?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "아니요. 제 페이스대로 달리면 된다……그렇게 생각하니 신기하게 마음이 차분해져요.",
      );
      await daiya.say_and_wait(
        "클래식 3관의 마지막, 『국화상』. 제 목표도 오늘이면 한 고비를 넘기게 돼요.",
      );
      await daiya.say_and_wait("이 목표를 이룰 때까지 절대로 방심하지 않겠어요!");
      await kita.say_and_wait("다이아 트레이너! 어때? 다이아 상태는?");
      era.printButton("「평소와 같아」", 1);
      await era.input();
      await era.printAndWait(
        "이번에는 사고 없이 레이스를 치를 수 있을 것 같다. 오늘 하루 사토노 다이아몬드는 징크스 이야기를 한 번도 하지 않았다.",
      );
      await era.printAndWait(
        `${you.name}은(는) 사토노 다이아몬드에게 좋은 징조라고 생각했다.`,
      );
      await kita.say_and_wait("아, 다이아 나왔다!");
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "오, 사토노 다이아몬드다! 의욕이 넘쳐 보여서 좋네!",
      );
      await you.say_as_passer_by_and_wait("관중 B", [
        `인터뷰에서 답한 걸 들어 보니 ${daiya.sex}는 `,
        sats_sho,
        "와 ",
        toky_yus,
        "에서 실력을 다 발휘하지 못했다고 생각하는 모양이야.",
      ]);
      await you.say_as_passer_by_and_wait(
        "관중 B",
        `그렇다면 ${daiya.sex}가 전력을 다하는 모습을 보고 싶네!`,
      );
      await kita.say_and_wait("……응, 나도……!");
      await kita.say_and_wait("다이아──! 힘내────!!");
      await kita.say_and_wait("아, 들었어!");
      await kita.say_and_wait("…………읏!");
      await kita.say_and_wait(
        "……트레이너. 오늘 다이아는 틀림없이 최고의 달리기를 보여 줄 것 같아!",
      );
      await kita.say_and_wait(
        "왜냐하면 저렇게 집중한 다이아의 얼굴은 처음 보거든……!",
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_end: (() => {
    const title = "극기";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, kita, you, rank, sats_sho, toky_yus, arim_kin) => {
      await daiya.say_and_wait(
        "이 흐름이라면……이제 곧 자리싸움이 시작되겠지. 지금은 이 위치에서 버티고……",
        true,
      );
      await era.printAndWait(
        "중계「안쪽에서 승부를 겁니다! 지금 이 타이밍에 나섭니다! 후방 주자들도 뒤따릅니다!」",
      );
      await daiya.say_and_wait("아직이야. 참는 거야. 내 페이스대로……", true);
      await daiya.say_and_wait("──지금이야!!");
      await daiya.say_and_wait("하아아아아아아아아아아!!");
      await era.printAndWait(
        "중계「나왔다──!! 사토노 다이아몬드! 멋진 막판 스퍼트를 터뜨립니다──!」",
      );
      if (rank === 1) {
        await era.printAndWait(
          `중계「1착은 사토노 다이아몬드!! ${daiya.sex}는 다이아몬드처럼 모든 장애물을 부숴 버렸습니다──!」`,
        );
        await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
        await kita.say_and_wait(
          "해냈다! 잘됐다, 잘됐다, 잘됐다──────!!",
        );
        await kita.say_and_wait("다이아! 해냈어, 다이아!!");
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "대단해……소름이 돋았어……! 사토노 다이아몬드, 정말 강해!!",
        );
        await you.say_as_passer_by_and_wait("관중 B", [
          `하하, 이게 ${daiya.sex}의 진짜 힘인가! ${daiya.sex}가 `,
          sats_sho,
          "와 ",
          toky_yus,
          "에서 자기 달리기에 불만이었던 이유를 알겠어!",
        ]);
        await kita.say_and_wait("……다이아는 역시 굉장해!");
      } else {
        await era.printAndWait(
          "중계「사토노 다이아몬드, 비록 1착은 놓쳤지만 최상급 다이아몬드에 걸맞은 달리기를 보여 주었습니다!!」",
        );
        await you.say_as_passer_by_and_wait("관중", "짝짝짝짝짝!");
        await kita.say_and_wait("대단해……다이아, 언제 이렇게까지……!");
        await kita.say_and_wait("헤헤헤! 같이 달릴 날이 기대돼!");
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "나도……소름이……사토노 다이아몬드, 정말 멋진 달리기였어.",
        );
        await you.say_as_passer_by_and_wait("관중 B", [
          '',
          sats_sho,
          "와 ",
          toky_yus,
          " 때와는 완전히 달라! 이게 사토노 다이아몬드의 진짜 힘……!",
        ]);
        await you.say_as_passer_by_and_wait(
          "관중 A",
          `${daiya.sex}의 다음 레이스가 기대되네!`,
        );
      }
      await daiya.say_and_wait("하아……하아……");
      await daiya.say_and_wait("다리가……가벼워…………이렇게나……", true);
      await daiya.say_and_wait("나……", true);
      await daiya.say_and_wait("나…………읏!", true);
      await daiya.say_and_wait("트레이너님……!");
      if (rank === 1) {
        era.printButton("「1착 축하해! 최고의 달리기였어!」", 1);
        await era.input();
        await daiya.say_and_wait("네……! 감사합니다!!");
      } else {
        era.printButton("「멋진 달리기였어!」", 1);
        await era.input();
        await daiya.say_and_wait("네……!");
      }
      await daiya.say_and_wait(
        "저기, 오늘은 다리가 유난히 가벼웠어요! 끝까지 달렸는데도 하나도 피곤하지 않아요!!",
      );
      await daiya.say_and_wait("저도 만족할 만한 달리기를 했어요!!");
      await daiya.say_and_wait("다리에 채워진 족쇄가 풀린 것 같아요……!");
      await daiya.say_and_wait("……몸도…………마음도……가벼워요……!");
      era.printButton("「아무래도 징크스를 『극복』한 것 같네」", 1);
      await era.input();
      await daiya.say_and_wait('……！');
      await daiya.say_and_wait("…………후우…………흑……");
      await era.printAndWait(
        "사토노 다이아몬드의 눈에서 굵은 눈물방울이 흘러내린다. 그리고──",
      );
      await daiya.say_and_wait("으아아아아아아……!!");
      await era.printAndWait("지하 통로에 울음소리가 가득 찼다.");
      await era.printAndWait(
        `${daiya.sex}가 태어나기 전부터 끊이지 않았던 사토노 가문의 징크스에 관한 소문.${daiya.sex}가 짊어져 온 그 무게는 어렵지 않게 짐작할 수 있었다.`,
      );
      await era.printAndWait(
        `언제나 사람들에게 징크스에 지지 않겠다고 선언해 온 것도 ${daiya.sex}가 스스로를 북돋우기 위한 방법이었을 것이다.`,
      );
      await era.printAndWait(
        `${daiya.sex}는 마침내 그 속박에서 풀려났다.`,
      );
      await daiya.say_and_wait("……에헤헤……흑……이런 모습 보여서 죄송해요……");
      await daiya.say_and_wait(
        "……정말 맥퀸의 말대로예요. 계속 징크스를 너무 의식해서……오히려 스스로 한계를 만들고 있었네요.",
      );
      await daiya.say_and_wait("하지만 이제 괜찮아요. 더는 얽매이지 않겠어요!");
      await daiya.say_and_wait(
        "앞으로도 오늘처럼 제 페이스대로 다른 G1에서도 이겨 보이겠어요!",
      );
      await kita.say_and_wait("그렇게는 안 되지!");
      await daiya.say_and_wait("키타짱!");
      if (rank === 1) {
        await kita.say_and_wait("『국화상』 1착, 축하해, 다이아!");
        await daiya.say_and_wait(
          "고마워! 작년에 키타짱이 우승한 레이스……나도 이겼어! 그러니까 자신 있게 말할게!",
        );
        await daiya.say_and_wait("키타짱! 『아리마 기념』에서 승부하자!");

        await kita.say_and_wait("얼마든지!!");
        await daiya.say_and_wait("괜찮죠, 트레이너님?");
        era.printButton("「물론이지!」", 1);
        await era.input();
      } else {
        await kita.say_and_wait("멋진 달리기였어, 다이아!");
        await daiya.say_and_wait(
          "고마워! 내 달리기……키타짱의 상대가 될 자격이 있었을까……?",
        );
        await kita.say_and_wait("──다이아.");
        await kita.say_and_wait("『아리마 기념』에서 같이 승부하자!");
        await daiya.say_and_wait("키타짱……!");
        await daiya.say_and_wait("……트레이너님, 『아리마 기념』은……");
        era.printButton("「그래, 다음은 『아리마 기념』이야!」", 1);
        await era.input();
        await daiya.say_and_wait("네!!");
      }
      await kita.say_and_wait(
        "하지만 다이아, 각오해! 『아리마 기념』에서의 나는 지금까지와는 다를 테니까!",
      );
      await kita.say_and_wait(
        "다이아랑 달리기 전에 『재팬컵』에서 내 달리기를, 일본의 마음을 전 세계에 전할 거야!",
      );
      await daiya.say_and_wait("후후, 그날이 기대돼!");
      await daiya.say_and_wait([
        arim_kin,
        "……지금 우리가 할 수 있는 최고의 승부를 펼치자!",
      ]);
      era.drawLine();
      await era.printAndWait("그날, 교토 경기장에서 돌아오는 길.");
      await daiya.say_and_wait(
        "후후후, 트레이너님. 오늘은 계속 가슴이 두근거려요♪",
      );
      era.printButton("「지금도?」", 1);
      await era.input();
      await daiya.say_and_wait("네, 지금도요.");
      await daiya.say_and_wait([
        "키타짱과 ",
        arim_kin,
        "를 달릴 수 있다고 생각하니 심장이 계속 쿵쾅거려요. 아, 흥분보다는 기대가 더 크네요.",
      ]);
      await daiya.say_and_wait(
        "어릴 때 순수하게 그렸던 꿈이 곧 현실이 된다니……",
      );
      era.printButton("「키타짱과 함께 달리는 꿈 말이지?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후, 그때 상상했던 무대도 G1이었지만 현실은 훨씬 더 멋져요.",
      );
      await daiya.say_and_wait(
        `일류 ${daiya.uma_sex_title}가 되겠다는 제 꿈으로 향하는 길에 키타짱도 있어요……${kita.sex}는 라이벌로서 제 앞에 서 있죠.`,
      );
      await daiya.say_and_wait(
        "이보다 더 운명적이고 가슴 뛰는 상황은 없을 거예요!",
      );
      era.printButton("「최고의 무대네」", 1);
      await era.input();
      await daiya.say_and_wait(
        `네. 앞서 달리는 키타짱을 따라잡고 뛰어넘어서 제 꿈을 이루겠어요. 저와 사토노 가문의 꿈을요.`,
      );
      await era.printAndWait(
        `사토노 다이아몬드의 눈에는 한 치의 망설임도 없다.${daiya.sex}의 눈동자 깊은 곳에서 타오르는 불꽃은 처음 만났을 때와 같다. 뜨겁고 맹렬하게 타오르고 있다.`,
      );
      era.printButton("「우선은 『아리마 기념』이야!」", 1);
      await era.input();
      await daiya.say_and_wait("네! 이번에는 누구의 힘도 빌리지 않을 거예요.");
      await daiya.say_and_wait(
        "징크스를 극복한 이 다이아가 키타짱도, 시니어급 여러분도 완전히 꺾어 보이겠어요!",
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = "아리마 기념을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait(
        `『아리마 기념』. 팬 투표로 출주할 ${daiya.uma_sex_title}를 정하는 특별한 레이스.`,
      );
      await era.printAndWait(
        "사토노 다이아몬드의 득표 순위는 2위. 1위는 키타산 블랙이다.",
      );
      await era.printAndWait(
        `관중 A「오늘은 키타산 블랙이 이길 거야! 막판 끈기가 차원이 다르거든!!」`,
      );
      await era.printAndWait(
        "관중 B「매번 마지막에 한 단계 더 끌어올리지! 평범한 막판 스퍼트로는 따라잡을 수 없어!」",
      );
      await era.printAndWait(
        `관중 A「키타산은 우리의 희망의 별이야! ${daiya.sex}, 힘내 줬으면 좋겠어!」`,
      );
      await daiya.say_and_wait("다들 입을 열자마자 키타짱 이야기네요.");
      era.printButton("「다이아도 근소한 차이로 2위잖아!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "어머, 트레이너님도 참……너무 제 편만 드시네요. 2만 표 차이를 근소하다고는 하지 않죠.",
      );
      await daiya.say_and_wait(
        "그래도 많은 분이 투표해 주셔서 정말 기쁘고 영광이에요♪",
      );
      await daiya.say_and_wait(
        "……그저 키타짱 팬분들의 응원이 무척 뜨겁다고 느꼈을 뿐이에요.",
      );
      await daiya.say_and_wait(
        "다들 『힘내라』가 아니라 『힘내 줬으면 좋겠다』고 하시잖아요.",
      );
      era.printButton("「……부러운 거야?」", 1);
      await era.input();
      await daiya.say_and_wait("네……부럽지 않다고 하면 거짓말이겠죠……");
      await daiya.say_and_wait("사람은 자기도 모르게 남을 부러워하게 되니까요.");
      await daiya.say_and_wait(
        "그리고 키타짱의 팬분들을 실망시키게 될 거라고 생각하니 조금 죄송하기도 해서요.",
      );
      await era.printAndWait(
        `말을 마친 사토노 다이아몬드가 장난스럽게 미소 지었다. 이기겠다는 선언이나 다름없다.${daiya.sex}는 강하고 든든하다.`,
      );
      await daiya.say_and_wait("시간이네요. 그럼 다녀올게요!");
      await era.printAndWait(
        "중계「더없이 귀한 보석의 이름을 지닌 아가씨, 등장! 팬 투표 2위, 사토노 다이아몬드!」",
      );
      await era.printAndWait("관중「와아아아아아아아!」");
      await era.printAndWait(
        "중계「기다리셨습니다, 마지막 출주자! 팬 투표 1위, 키타산 블랙!」",
      );
      await era.printAndWait("관중「와아아아아아아아아아아아!」");
      await daiya.say_and_wait("……키타짱, 오래 기다렸지!");
      await kita.say_and_wait(
        "응! 계속 이날을 기다렸어, 다이아!",
      );
      await daiya.say_and_wait(
        "이 기회를 줘서 고마워. 오늘 레이스에서 키타짱을 따라잡았다는 걸 증명할게!",
      );
      await daiya.say_and_wait("아니, 단숨에 뛰어넘어 보이겠어!");
      await kita.say_and_wait("선두는 양보 안 해!! 승부하자, 다이아!");
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = "고양";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} arim_kin
     * @param {PrintedSpan} sank_hai
     */
    const f = async (
      daiya,
      kita,
      etsuko,
      you,
      rank,
      sats_sho,
      arim_kin,
      sank_hai,
    ) => {
      if (rank === 1) {
        await daiya.say_and_wait(
          "줄곧 앞서가는 등을 뒤쫓아 왔어요.",
          true,
        );
        await daiya.say_and_wait("지금──이 등을 뛰어넘겠어요!!", true);
        await daiya.say_and_wait("이야아아아아아아아아!!");
        await you.say_as_passer_by_and_wait(
          "중계",
          `사토노 다이아몬드, 선두로 골인!! 다이아몬드의 단단함으로 라이벌을 꺾었습니다──!`,
        );
        await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
        await daiya.say_and_wait("하아, 하아, 하아……");
        await kita.say_and_wait("……아아────! 분해! 졌다────!!");
        await kita.say_and_wait("하지만 엄────청 즐거웠어!!");
        await daiya.say_and_wait(
          "후후후후! 나도! 정말 엄────청 즐거웠어!!",
        );
        await daiya.say_and_wait(
          "앞으로 몇 번이고 이 즐거움을 맛볼 수 있겠지!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 C",
          "다이아, 축하해────! 방금 정말 멋졌어────!!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 D",
          "최고의 레이스였어!! 잘 달렸어, 키타산──!",
        );
        await kita.say_and_wait("다들 다이아를 기다리고 있어! 다녀와!");
        await etsuko.say_and_wait(
          "사토노 다이아몬드 씨, 축하드립니다! 지금 기분이 어떠신가요?",
        );
        await daiya.say_and_wait(
          "클래식급을 마무리하며 이렇게 멋진 레이스를 할 수 있어서 정말 기뻐요.",
        );
        await daiya.say_and_wait(
          "올 한 해……클래식 3관을 목표로 걸어왔어요. 결코 쉬운 길은 아니었죠.",
        );
        await daiya.say_and_wait(
          "도중에 여러 일이 있었어요. 예상하지 못한 일도 있었고요.",
        );
        await etsuko.say_and_wait("구체적으로 어떤 일이었나요?");
        await daiya.say_and_wait([
          "예를 들면 ",
          sats_sho,
          " 때의 악천후요……상상을 뛰어넘을 만큼 궂은 날씨였죠.",
        ]);
        await daiya.say_and_wait(
          "트윙클 시리즈는 때로 가혹한 레이스이기도 하네요……하지만 오늘은 정말 멋진 승부였어요.",
        );
        await daiya.say_and_wait(
          "여기까지 함께 걸어와 주신 여러분께 진심으로 감사드려요. 감사합니다.",
        );
        await kita.say_and_wait(
          "헤헤헤, 나야말로 고마워! 하지만 다음에는 지지 않을 거야, 다이아!!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "오, 좋아──! 키타산! 다음에도 응원할게!",
        );
        await you.say_as_passer_by_and_wait("관중 C", "다이아도 힘내──!");
        await etsuko.say_and_wait(
          "두 분은 소꿉친구이자 라이벌이라고 공개적으로 말씀하셨죠! 다음 대결은 벌써 정해졌나요?",
        );
        await daiya.say_and_wait("아니요, 아직……");
        await kita.say_and_wait([sank_hai, '！']);
        await kita.say_and_wait([
          "나는 ",
          sank_hai,
          "에 나갈 거야! 거기서 설욕하겠어!!",
        ]);
      } else {
        await daiya.say_and_wait("하아, 하아, 하아……");
        await kita.say_and_wait(
          "하아, 하아……다이아……정말 따라잡았네……!",
        );
        await kita.say_and_wait(
          "다이아의 기백을 피부로 느꼈어. 지금도 찌릿찌릿해.",
        );
        await daiya.say_and_wait(
          "나도 그래. 키타짱의 뜨거운 투지에 데일 것 같아.",
        );
        await kita.say_and_wait("이게 레이스할 때의 다이아……!");
        await daiya.say_and_wait("이게 레이스할 때의 키타짱……!");
        await kita.say_and_wait(
          "앞으로 몇 번이고 오늘처럼 다이아랑 승부할 수 있겠구나! 정말 기대돼!",
        );
        await daiya.say_and_wait(
          "응! 앞으로 계속 키타짱과 함께 달릴 수 있어!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "좋아──! 키타산! 다음에도 응원할게!",
        );
        await you.say_as_passer_by_and_wait("관중 C", "다이아도 힘내──!");
        await kita.say_and_wait([
          "응!! 고마워! 내 다음 레이스는……",
          sank_hai,
          '！',
        ]);
      }
      await you.say_as_passer_by_and_wait("관중", "오오오오오오오오오!");
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "관중 A「그러니까 『봄 시니어 3관』이구나! 꼭 달성해, 키타산!!」",
      );
      await kita.say_and_wait("네! 꼭 현장에서 지켜봐 주세요!");
      await daiya.say_and_wait(["저도 나갈게요!", '！！']);
      era.printButton("「뭐……다이아!?」", 1);
      await era.input();
      await era.printAndWait(
        `다음 레이스는커녕 시니어급에서의 방침조차 아직 상의하지 않았다.`,
      );
      await era.printAndWait(
        `그런데도 사토노 다이아몬드는 ${you.name}을(를) 한 번 바라보고는 관중석을 향해 다시 말했다.`,
      );
      await daiya.say_and_wait([
        "저는 ",
        sank_hai,
        "에서 키타짱과 승부할 거예요!!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관중 B",
        `사토노 다이아몬드 대 키타산 블랙, ${daiya.couple_title}의 대결은 아직 계속되는 건가!`,
      );
      await you.say_as_passer_by_and_wait("관중 A", [
        arim_kin,
        "는 시작에 불과한 거구나……오오오! 앞으로도 지켜볼게!!",
      ]);
      await era.printAndWait(
        `관중석을 뒤덮은 함성은 한동안 그치지 않았다. 그때 키타산 블랙이 함께 출주한 ${daiya.uma_sex_title}들을 위너스 서클로 불렀다.`,
      );
      await era.printAndWait(
        `${daiya.uma_sex_title}들은 한 줄로 나란히 서서 관중석을 향했다. 양손을 좌우로 크게 흔들었다.`,
      );
      await kita.say_and_wait("여러분, 내년에도 잘 부탁드립니다──!!");
      await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아아!");
      era.drawLine();
      await daiya.say_and_wait(
        "……제멋대로 결정해서 정말 죄송해요.",
      );
      await era.printAndWait(
        "대기실로 돌아온 사토노 다이아몬드가 깊이 고개를 숙였다.",
      );
      era.printButton("「다음 목표는 정말 『오사카배』로 괜찮아?」", 1);
      await era.input();
      await era.printAndWait(
        `거리도 일정도 문제는 없다. 다만 혹시 몰라 ${you.name}은(는) ${daiya.sex}에게 확인했다. 일류 ${daiya.uma_sex_title}가 되겠다는 꿈을 위한 결정이냐고.`,
      );
      await daiya.say_and_wait(
        "네. 『오사카배』도 G1이니까요. 문제없어요.",
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          `오늘 위너스 서클에서 키타짱을 보고……새삼 ${kita.sex}가 얼마나 대단한지 알았어요.`,
        );
        await daiya.say_and_wait(
          "레이스에서는 이겼지만 아직 키타짱이 걸어온 길을 완전히 따라잡지는 못했어요……",
        );
      } else {
        await daiya.say_and_wait(
          `오늘 레이스가 끝나고 키타짱을 보고……새삼 ${kita.sex}가 얼마나 대단한지 깨달았어요.`,
        );
        await daiya.say_and_wait("……키타짱과의 거리는 아직 멀어요……");
      }
      await daiya.say_and_wait(
        "트레이너님도 보셨죠? 그때 관중석의 미소와 경기장을 뒤흔드는 함성을요.",
      );
      await daiya.say_and_wait(
        `키타짱은 ${kita.sex}의 달리기로 모두를 웃게 하고 트윙클 시리즈 전체를 뜨겁게 달아오르게 해요.`,
      );
      await daiya.say_and_wait(
        `그거야말로 『일류 ${daiya.uma_sex_title}』의 모습이라고 절실히 느꼈어요.`,
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』가 어떤 모습이어야 하는지 저는 아직 답을 찾지 못했어요.`,
      );
      await daiya.say_and_wait(
        `키타짱은 ${kita.sex}가 진지하게 달리는 모습 그 자체가 응원하고 싶어지게 해요.`,
      );
      await daiya.say_and_wait(
        "팬들의 마음을 사로잡고 뒤흔들죠. 그게 키타짱의 방식이에요.",
      );
      await daiya.say_and_wait(
        "……사토노 가문의 영애인 저는 그런 열기를 만들어 낼 수 없어요.",
      );
      era.printButton("「다이아에게는 다이아만의 장점이 있어」", 1);
      await era.input();
      await era.printAndWait(
        `흔들리지 않는 강한 의지. 기품을 지키고 약한 모습을 보이지 않는 게 ${daiya.sex}의 방식이다.`,
      );
      await era.printAndWait(
        `그만큼 ${daiya.sex}의 노력은 눈에 잘 띄지 않는다. 하지만 ${daiya.sex}의 노력은 키타산 블랙에게 뒤지지 않는다. 언제나 가장 강하게 빛나고 있다.`,
      );
      await daiya.say_and_wait(
        "후후, 그렇게 말씀해 주셔서 기뻐요……하지만 걱정하지 마세요.",
      );
      await daiya.say_and_wait(
        `저만의 『일류 ${daiya.uma_sex_title}』의 모습을 찾을 거예요.`,
      );
      await daiya.say_and_wait(
        `사토노 다이아몬드인 제가 어떤 형태로 ${daiya.uma_sex_title}계에 힘을 보탤 수 있을지……`,
      );
      await daiya.say_and_wait(
        `키타짱의 모습을 보면서, ${kita.sex}의 등을 쫓아가다 보면……그 답에 닿을 수 있을 것 같아요.`,
      );
      era.printButton("「알았어. 다음 레이스는 『오사카배』네!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네! 트레이너님, 앞으로도 잘 부탁드려요!",
      );
      await era.printAndWait(
        `『일류 ${daiya.uma_sex_title}』의 모습. 아직 알 수 없는 그 답을 찾기 위해 ${you.name}와(과) 사토노 다이아몬드는 시니어급으로 발을 내딛는다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = "새해 참배";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait(
        "새해 복 많이 받으세요. 『신년회』에 오신 걸 환영해요!",
      );
      await era.printAndWait(
        `새해. 사토노 다이아몬드의 초대를 받아 ${you.name}은(는) 사토노 그룹이 주최하는 신년회에 왔다.`,
      );
      await era.printAndWait(
        "사토노 가문 사람들과 그룹 관계자들이 새해 인사를 나누도록 마련한 자리라고 한다.",
      );
      await daiya.say_and_wait(
        "시작하자마자 죄송하지만 부모님께서 트레이너님께 인사드리고 싶다고 하셔서요.",
      );
      await era.printAndWait(
        "다이아의 아버지「새해 복 많이 받으십시오. 늘 다이아를 돌봐 주셔서 감사합니다.」",
      );
      await era.printAndWait(
        "다이아의 아버지「딸아이가 지난해 클래식급에서 기대 이상의 성과를 거뒀습니다. 트레이너님의 지도 덕분입니다.」",
      );
      await era.printAndWait(
        "다이아의 아버지「다이아의 직감은 틀리지 않았던 거군요──시니어급에서도 잘 부탁드립니다.」",
      );
      era.printButton(
        `「네. 『일류 ${daiya.uma_sex_title}』로 이끌겠습니다」`,
        1,
      );
      await era.input();
      await era.printAndWait("다이아의 아버지「네, 기대하겠습니다.」");
      await daiya.say_and_wait(
        "이제 여러분께 인사를 드려야 해서 잠시 자리를 비울게요.",
      );
      await daiya.say_and_wait(
        "트레이너님은 편하게 쉬고 계세요.",
      );
      await era.printAndWait(
        `사토노 다이아몬드의 부모님은 사토노 가문에서도 중심에 가까운 인물이다. 그러니 ${
          daiya.sex_code === 1 ? "아들" : "딸"
        }인 ${daiya.sex}도 바쁜 모양이다.`,
      );
      await era.printAndWait(
        "다이아의 옛 트레이너「다이아, 새해 복 많이 받아! 트윙클 시리즈에서 멋지게 달리더구나!」",
      );
      await era.printAndWait(
        "다이아의 옛 담당 의사「후후후, 그렇게 작던 다이아가 벌써 이렇게 컸네요. 레이스를 볼 때마다 감회가 새로워요.」",
      );
      await daiya.say_and_wait(
        "새해 복 많이 받으세요. 트레이너님, 선생님, 오랜만이에요.",
      );
      await daiya.say_and_wait(
        "두 분 덕분에 지금의 제가 있어요. 달리기의 기초도 두 분께서 다져 주셨죠. 진심으로 감사드려요.",
      );
      await era.printAndWait(
        "다이아의 옛 트레이너「사실 지금도 학생들에게 자랑하곤 해. 예전에 다이아의 트레이너였다고! 다들 감탄하더구나!」",
      );
      await daiya.say_and_wait(
        "어머, 후후후. 영광이에요♪ 하지만 저를 지도하시기 전부터 이미 유명한 트레이너셨잖아요.",
      );
      await daiya.say_and_wait(
        "선생님도 영양학으로 이름 높은 교수님이시고요. 두 분 같은 분들께 지도받은 저야말로 남들이 부러워할 만한 처지죠.",
      );
      await era.printAndWait(
        "다이아의 옛 담당 의사「어머, 말씀도 잘하시네요. 벌써 사토노 그룹의 얼굴에 걸맞은 기품이 느껴져요.」",
      );
      await daiya.say_and_wait("아니에요, 아직 멀었어요.");
      await daiya.say_and_wait(
        `저는 아직 『일류 ${daiya.uma_sex_title}』가 어떤 모습이어야 할지 찾는 중인걸요.`,
      );
      await era.printAndWait(
        `다이아의 옛 트레이너「일류 ${daiya.uma_sex_title}가 되었다는 건……해외 원정도 생각하고 있니?」`,
      );
      await era.printAndWait(
        "스포츠 용품 회사 담당자「해외 원정 계획이 있으시다면 현지에 맞춘 트레이닝 기구와 신발을 준비해 드릴 수 있습니다.」",
      );
      await era.printAndWait(
        "스포츠 용품 회사 담당자「다이아 님 전용 제품 개발도 가능합니다. 언제든 말씀해 주십시오.」",
      );
      await daiya.say_and_wait(
        "귀사에서 만들어 주신 트레이닝 기구는 집에서도 애용하고 있어요.",
      );
      await daiya.say_and_wait(
        "새로운 기구가 필요할 때 다시 개발을 부탁드려도 될까요?",
      );
      await era.printAndWait(
        "스포츠 용품 회사 담당자「물론입니다. 다이아 님은 사토노 그룹의 별이니까요. 저희도 최선을 다하겠습니다.」",
      );
      await daiya.say_and_wait(
        "감사해요. 조만간 연락드릴게요♪",
      );
      await era.printAndWait(
        "뛰어난 트레이너, 일류 의사, 스포츠 용품 회사의 협력……",
      );
      await era.printAndWait(
        `사토노 다이아몬드는 어릴 때부터 풍족한 환경에서 자랐다. 많은 기대를 짊어지고 있기 때문일 것이다.`,
      );
      await era.printAndWait(
        `그만큼 ${daiya.sex}의 책임도 무겁다. 받은 은혜는 성적으로 갚아야 한다. 기대의 이면에는 피할 수 없는 책임이 있다.`,
      );
      era.printButton(
        `──시니어급의 이 한 해, ${daiya.sex}와 함께 승리라는 결실을 맺자!`,
        1,
      );
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `신년회가 끝난 뒤 ${you.name}은(는) 사토노 다이아몬드와 새해 참배를 하러 갔다.`,
      );
      await daiya.say_and_wait(
        "──트레이너님, 꽤 오래 기도하셨네요.",
      );
      era.printButton("「신께 내 결심을 전하려고」", 1);
      await era.input();
      await daiya.say_and_wait("제 레이스와 관련된 일인가요?");
      era.printButton("「물론이지」", 1);
      await era.input();
      await daiya.say_and_wait(
        "그렇다면 저도 함께 결심을 말씀드리고 싶었는데……",
      );
      await daiya.say_and_wait(
        "하지만 트레이너님의 진지한 얼굴을 봤으니 이번에는 넘어갈게요♪ 후후후!",
      );
      await daiya.say_and_wait(
        "그럼 이다음에는……트레이너님은 어떻게 지내실 생각이세요?",
      );
      await daiya.say_and_wait(
        "괜찮으시면 트레이너님이 새해를 어떻게 보내시는지 알고 싶어요!",
      );
      await daiya.say_and_wait(
        "저희 집도 키타짱네 집도 사람이 많이 모이는 잔치만 하거든요.",
      );
      await daiya.say_and_wait(
        "파티나 잔치 말고는 어떻게 지내는지 알고 싶어요! 저도 함께하게 해 주세요!",
      );
      await era.printAndWait(
        "말로 설명만 하면 되는 줄 알았는데 어느새 함께 시간을 보내기로 되어 있었다.",
      );
      await era.printAndWait(
        `새해라면 ${you.name}이(가) 매년 하는 일은──`,
      );
      era.printButton("「집에서 뒹굴며 쉰다」(체력+300)", 1);
      era.printButton("「복주머니 상품을 산다」(모든 능력+10)", 2);
      era.printButton("「새해 포부를 쓴다」(스킬 Pt+70)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait(
            "……벌써 주무시려고요? 새해 첫 꿈을 꾸는 연습인가요──",
          );
          await era.printAndWait(
            "정말 잠을 자는 사람도 있지만 외출하지 않고 집에서 느긋하게 쉰다는 뜻이라고 설명했다.",
          );
          await daiya.say_and_wait(
            "어머, 새해가 시작되자마자 집에서 느긋하게……죄책감이 들 것 같네요♪ 그럼 함께 뒹굴며 쉬어요!",
          );
          await era.printAndWait(
            `트레이너실에서 과자를 먹으며 둘이 새해 특집 방송을 보기로 했다.`,
          );
          await daiya.say_and_wait(
            "……버스 여행인데 거의 걸어 다니시네요……",
          );
          await daiya.say_and_wait("와아! 이 장어덮밥, 맛있겠어요……!");
          era.printButton("「보고 있으니 먹고 싶네」", 1);
          await era.input();
          await daiya.say_and_wait(
            "오늘도 영업하는 것 같으니 배달시켜 먹을까요?",
          );
          era.printButton("「배달 올 수 있는 거리가 아닌데!?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "괜찮아요. 트레이너님도 저도 이렇게 열심히 했잖아요. 이 정도 어리광은 아버지도 들어주실 거예요♪",
          );
          await era.printAndWait(
            `그렇게──신칸센으로 공수해 온 장어덮밥을 둘이서 맛보았다.`,
          );
          break;
        case 2:
          await daiya.say_and_wait(
            "복주머니 상품! 기대감에 가슴이 부푸는 물건이죠! 저도 갖고 싶어요!",
          );
          await era.printAndWait(
            `복주머니 상품을 사러 ${you.name}와(과) 사토노 다이아몬드는 쇼핑몰로 향했다.`,
          );
          await daiya.say_and_wait(
            "어느 가게로 갈까요……어머, 먹을거리나 차가 든 복주머니도 있네요.",
          );
          era.printButton("「그걸 사 볼까?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "먹을거리라면 취향에 안 맞아도 다른 분들께 나눠 드릴 수 있죠. 그럼 그걸로 해요!",
          );
          await daiya.say_and_wait(
            "줄이 기네요……한동안 기다려야 할 것 같으니 기다리는 동안 관찰 퀴즈를 해요.",
          );
          await daiya.say_and_wait("지나가는 분이 어느 가게에 들어갈지 맞히는 거예요!");
          era.printButton("「좋아!」", 1);
          await era.input();
          await daiya.say_and_wait(
            "그럼 저기 패딩을 입은 남성분부터요. 저는 카페로 예상할게요!",
          );
          era.printButton("「나는 위층 서점일 것 같아」", 1);
          await era.input();
          await daiya.say_and_wait(
            "…………아, 카페에 들어가셨어요! 후후후, 제가 이겼네요♪ 피곤해 보이셨거든요.",
          );
          await daiya.say_and_wait(
            "놀다 보니 시간이 금방 가네요. 자, 복주머니를 열어 보러 돌아가요!",
          );
          await era.printAndWait(
            `즐겁게 기다린 끝에 복주머니도 무사히 손에 넣었다!`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            "새해 포부 쓰기……그렇다면 커다란 종이에 쓰고 싶어요!",
          );
          era.printButton("「서예 퍼포먼스 말이야?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "네! 큰 붓과 화선지는 집에 있는 분들께 사다 달라고 할게요!",
          );
          await era.printAndWait(
            `다행히 새해에는 체육관이 비어 있어서 빌린 뒤 서예 퍼포먼스를 하기로 했다.`,
          );
          await daiya.say_and_wait(
            "음……미리 구도를 잡지 않으면 균형이 안 맞겠네요.",
          );
          await era.printAndWait(
            `사토노 다이아몬드는 화선지 앞에서 꼼꼼하게 동작을 연습한 뒤 ${daiya.sex}와 키가 거의 같은 붓으로 단숨에 써 내려갔다.`,
          );
          await daiya.say_and_wait(
            "이야아아아아아아! 핫! 에잇! 핫!",
          );
          await daiya.say_and_wait("후우────! 어땠나요, 트레이너님!");
          await era.printAndWait(
            `그렇게 ${daiya.sex}는 아주 아름다운 글씨로 『숙원 성취』를 큼직하게 써냈다!`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = "추첨으로 운 시험!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {number} result 抽選結果。0 - 特等温泉旅行券、1-3 - 一等〜三等（にんじんハンバーグ、にんじん山、にんじん一本）、4 - トイレットペーパー
     */
    const f = async (daiya, you, result) => {
      await era.printAndWait(
        `돌아오는 길에 ${you.name}와(과) 사토노 다이아몬드가 상점가를 지나는데──`,
      );
      await era.printAndWait(
        "상점가 사람「자, 자, 새해 대추첨 행사 중입니다~! 특등은 『온천 여행권』!」",
      );
      await era.printAndWait(
        "상점가 사람「일 등은 『특상 당근 함박스테이크』, 이 등은 『산더미 같은 당근』, 삼 등은 『당근 한 개』!」",
      );
      await era.printAndWait(
        "상점가 사람「자, 자, 즐거운 경품 추첨이에요! 누구나 오세요~!」",
      );
      await daiya.say_and_wait("와아, 경품 추첨이에요!");
      await daiya.say_and_wait(
        "저건……손으로 돌리는 추첨기! 경품 추첨은 저런 게 제일 신나죠!",
      );
      era.printButton("「특별히 좋아하는 이유가 있어?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "직접 돌리면 힘과 속도를 스스로 조절할 수 있잖아요?",
      );
      await daiya.say_and_wait(
        "제 힘으로 행운을 잡는 느낌이 들거든요. 그 느낌이 참 좋아요!",
      );
      era.printButton("「한 번 해 볼래?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 쇼핑하고 받은 추첨권을 떠올리고 ${daiya.sex}에게 권했다.`,
      );
      await daiya.say_and_wait("할게요!! 반드시 특등을 뽑겠어요!");
      await daiya.say_and_wait("에잇~~!!");
      await era.printAndWait(
        "사토노 다이아몬드는 엄청난 기세로 추첨기 손잡이를 돌렸다!",
      );
      await era.printAndWait("결과는──");
      switch (result) {
        case 0:
          await era.printAndWait(
            "상점가 사람「이럴 수가! 축하합니다────!! 특등 『온천 여행권』이에요~~~~!!」",
          );
          await era.printAndWait("「온천 여행권」을 얻었다.");
          await daiya.say_and_wait(
            "서……성공이에요~~!! 특등! 특등이에요, 트레이너님!!",
          );
          await daiya.say_and_wait(
            "거봐요! 제 말대로죠? 행운은 기백으로 잡는 거예요!!",
          );
          era.printButton("「응, 대단하네……!」", 1);
          await era.input();
          await era.printAndWait(
            `${daiya.sex}의 말대로 특등이 나왔다. 정말 기백으로 행운을 잡은 것 같다.`,
          );
          await daiya.say_and_wait("후후후, 올해는 좋은 해가 될 것 같아요♪");
          era.printButton("「키타산이랑 온천에 가면 되겠네」", 1);
          await era.input();
          await daiya.say_and_wait(
            "아니요, 트레이너님께 드릴게요. 추첨권은 트레이너님 거잖아요.",
          );
          await daiya.say_and_wait("저는 추첨을 해 본 것만으로 충분해요!");
          era.printButton("「그래도 뽑은 건 너잖아……」", 1);
          await era.input();
          await daiya.say_and_wait("그럼 저랑 트레이너님이 같이 가요.");
          await daiya.say_and_wait(
            "수고를 위로하는 여행으로요. 네, 그게 좋겠어요! 결정이에요!",
          );
          await daiya.say_and_wait(
            "트윙클 시리즈의 첫 삼 년이 일단락되면 함께 수고를 위로하는 여행을 가요! 하나의 과정을 마쳤으면 축하해야죠!",
          );
          await daiya.say_and_wait(
            "그리고 보상이 있으면 할 일에도 의욕이 나잖아요?",
          );
          era.printButton("「그렇지」", 1);
          await era.input();
          await daiya.say_and_wait("그럼 결정이에요! 약속이에요!");
          await era.printAndWait(
            `시니어급의 이 한 해 동안 만족스러운 성적을 거둔 뒤 여행권을 쓰기로 약속했다.`,
          );
          break;
        case 1:
          await era.printAndWait(
            "상점가 사람「일 등 축하합니다~! 경품은 『특상 당근 함박스테이크』!」",
          );
          await era.printAndWait("「특상 당근 함박스테이크」를 얻었다.");
          await daiya.say_and_wait("어머, 당근 함박스테이크……!");
          await daiya.say_and_wait(
            "이 호쾌한 담음새, 좋네요. 집에서는 당근을 잘라서 먹으니까 이런 외식을 전부터 기대하고 있었어요♪",
          );
          await daiya.say_and_wait(
            "이 당근, 세워 둔 채로 깔끔하게 먹을 수 있어요!",
          );
          era.printButton("「처음부터 끝까지 세워 둔 채로!?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "네♪ 우선 당근 위쪽부터……직접 보여 드리는 게 빠르겠네요. 트레이너님, 함께 먹어요!",
          );
          await daiya.say_and_wait(
            "후후후, 잘 보세요……다이아의 비기예요!",
          );
          await era.printAndWait(
            "사토노 다이아몬드는 우아하게 나이프와 포크를 사용하며 당근을 한 번도 쓰러뜨리지 않고 함박스테이크를 먹어 나갔다.",
          );
          await daiya.say_and_wait(
            "……잘 먹었습니다. 역시 특상이라 정말 맛있네요!",
          );
          era.printButton("「칼솜씨가 엄청난데……!」", 1);
          await era.input();
          await daiya.say_and_wait(
            "에헤헤……예전에 당근 함박스테이크의 당근이 쓰러진 방향에 불행이 닥친다는 징크스를 들은 적이 있어서요.",
          );
          await daiya.say_and_wait(
            "그렇다면 쓰러뜨리지 않으면 불행한 방향도 생기지 않겠다고 생각해서 이 기술을 연마했어요.",
          );
          era.printButton("「징크스를 깨려고 연습한 거야?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "네. 보신 분들은 모두 놀라시고 대화 소재도 돼요. 트레이너님도 해 보실래요?",
          );
          await era.printAndWait(
            `그 뒤 사토노 다이아몬드는 ${you.name}에게 비기를 전수하며 당근을 쓰러뜨리지 않고 먹는 법을 가르쳐 주었다!`,
          );
          break;
        case 2:
          await era.printAndWait(
            "상점가 사람「이 등~!! 경품은 『산더미 같은 당근』!」",
          );
          await era.printAndWait("「산더미 같은 당근」을 얻었다.");
          await daiya.say_and_wait("와아~, 당근이 잔뜩이에요♪");
          await daiya.say_and_wait(
            "트레이너님이 가져가세요. 추첨권은 트레이너님 거니까요.",
          );
          era.printButton("「이렇게 많으면 다 못 먹어!」", 1);
          await era.input();
          await daiya.say_and_wait(
            "어머……그럼 기숙사 분들께 나눠 드려요.",
          );
          await daiya.say_and_wait(
            "그냥 드리는 건 재미없으니 요리해서 나눠 드리죠♪",
          );
          era.printButton("「뭘 만들려고?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "사실 계속 만들어 보고 싶었던 요리가 있어요……당근 붕어빵이에요!!",
          );
          await daiya.say_and_wait(
            "붕어빵 안에 모두가 좋아하는 당근 앙금을 넣고, 당근 초절임으로 포인트를 주는 거죠.",
          );
          await daiya.say_and_wait(
            "반죽에도 당근을……얇게 썬 당근도 넣고요! 주황색의 귀여운 붕어빵이 될 거예요♪",
          );
          await daiya.say_and_wait(
            "그리고 위에는 통당근 하나를! 당근 함박스테이크처럼요!!",
          );
          era.printButton("「대, 대단히 새로운 발상이네……」", 1);
          await era.input();
          await daiya.say_and_wait(
            "트레이너님도 그렇게 생각하세요? 잘되면 그룹 외식 부문의 신메뉴로도 낼게요♪",
          );
          await era.printAndWait(
            `너무 참신한 요리라 불안해진 ${you.name}은(는) 함께 만들겠다고 나섰다.`,
          );
          await era.printAndWait(
            `다음 날──사토노 다이아몬드는 ${you.name}에게 보고했다. 릿토 기숙사 사람들이 「당근 붕어빵」을 무척 마음에 들어 했다고.`,
          );
          break;
        case 3:
          await era.printAndWait(
            "상점가 사람「삼 등~! 경품은 『당근 한 개』!」",
          );
          await era.printAndWait("「당근 한 개」를 얻었다.");
          await daiya.say_and_wait(
            "한 개……정말 죄송해요, 트레이너님. 귀한 추첨권을 낭비해서……",
          );
          await daiya.say_and_wait("제 기백이 부족했나 봐요……");
          era.printButton("「그럼 이 당근으로 기운을 보충하자!」", 1);
          await era.input();
          await daiya.say_and_wait("네……? 정말 저한테 주시는 건가요……?");
          era.printButton("「먹어 줘!」", 1);
          await era.input();
          await daiya.say_and_wait(
            "단 하나뿐인 소중한 당근을 저에게……감사해요.",
          );
          await daiya.say_and_wait("…………후후.");
          await daiya.say_and_wait(
            "트레이너님이 주신 당근……세상에 하나뿐인, 저만의 당근……",
          );
          await daiya.say_and_wait("세상에서 제일 맛있을 거예요♪");
          await era.printAndWait(
            "사토노 다이아몬드가 기뻐하는 게 가장 중요하다.──하지만 상점가 사람은 세상에서 제일 맛있을 거라는 말에 부담을 느끼고 있었다.",
          );
          break;
        case 4:
          await era.printAndWait(
            "상점가 사람「아쉽지만 꽝! 참가상은 『두루마리 휴지』예요~」",
          );
          await era.printAndWait("「두루마리 휴지」를 얻었다.");
          await daiya.say_and_wait("…………꽝……이라고요……?");
          await daiya.say_and_wait("…………한 번 더.");
          await daiya.say_and_wait("한 번 더 뽑겠어요!");
          await daiya.say_and_wait(
            "꽝이라는 결과는 인정할 수 없어요! 반드시 뒤집어 보이겠어요!!",
          );
          await era.printAndWait(
            "상점가 사람「저기……추첨권이 더 있으세요?」",
          );
          await daiya.say_and_wait("아니요. 어디서 살 수 있죠?");
          await era.printAndWait(
            "상점가 사람「추첨권은 안 팔아요~ 상점가에서 물건을 사면 드리는 거라──」",
          );
          await daiya.say_and_wait(
            "쇼핑하면 받을 수 있는 거군요!? 그럼 사러 갈게요!",
          );
          era.printButton("「잠깐! 일단 진정하자!?」", 1);
          await era.input();
          await daiya.say_and_wait(
            `말리지 마세요!! 사토노 가문의 ${daiya.uma_sex_title}로서 이 난관에서 도망칠 수는 없어요!`,
          );
          await era.printAndWait(
            `${daiya.sex}의 불운에 맞서려는 결의가 불을 뿜은 모양이다. 징크스를 깨려는 집념과 같다.──아니, 그저 지기 싫어하는 것뿐일지도……`,
          );
          await daiya.say_and_wait("지갑은……앗!?");
          await era.printAndWait(
            `이날 사토노 다이아몬드는 지갑을 기숙사에 두고 나왔다. 덕분에 경품 추첨 재도전은 멈췄다.`,
          );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = "밸런타인데이";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait("해피 밸런타인♪ 트레이너님!");
      await daiya.say_and_wait("가요!");
      era.printButton("「어디로!?」", 1);
      await era.input();
      await daiya.say_and_wait("후후후, 도착할 때까지 기대해 주세요♪");
      await era.printAndWait(
        `밸런타인데이. 사토노 다이아몬드는 어째서인지 ${you.name}의 손을 잡아끌고 밖으로 나갔다. 도착한 곳은……`,
      );
      await era.printAndWait(
        "특별히 색다른 장소는 아니다. 릿토 기숙사 앞이다. 기숙사 문 앞에 낯선 커다란 기계가 설치되어 있다.",
      );
      era.printButton("「저 크레인이랑 수많은 상자는 뭐야!?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "에헤헤, 트레이너님을 위한 밸런타인 깜짝 선물이에요!",
      );
      await daiya.say_and_wait(
        "트레이너님을 위해 준비한 거대 인형 뽑기 기계랍니다!",
      );
      await daiya.say_and_wait(
        "규칙은 보통 인형 뽑기와 같아요. 크레인으로 사람을 매달면 직접 경품을 집으시면 돼요.",
      );
      await era.printAndWait("즉, 사람이 크레인의 집게 역할을 하는 게임이다.");
      await daiya.say_and_wait(
        "모처럼의 밸런타인데이잖아요. 깜짝 선물이 있으면 좋겠다 싶어서 여러 가지 알아봤어요.",
      );
      await daiya.say_and_wait(
        "그러다 사토노 그룹의 자회사가 거대 인형 뽑기 행사를 열었다는 기사를 찾았죠!",
      );
      await daiya.say_and_wait(
        "정말 재미있어 보여서 장비와 직원분들을 빌려 왔어요♪",
      );
      await daiya.say_and_wait(
        "경품은 밸런타인 초콜릿이에요! 종류를 많이 준비했으니 좋아하시는 걸 집어 주세요!",
      );
      await daiya.say_and_wait(
        "문방구 과자 초콜릿부터 유명 가게의 한정 초콜릿까지 종류가 꽤 다양해요.",
      );
      await daiya.say_and_wait(
        "가고 싶은 방향을 말씀하시면 직원분들이 크레인을 조작해 주실 거예요♪",
      );
      era.printButton("「집게 역할이라는 건, 그러니까……」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네, 트레이너님이에요! 다이아 특제 밸런타인을 마음껏 즐겨 주세요!",
      );
      await era.printAndWait(
        `……호기심 많은 사토노 다이아몬드다운 발상이다.${daiya.sex}의 트레이너로서 ${you.name}도 각오를 다질 수밖에 없다……!`,
      );
      await daiya.say_and_wait(
        "트레이너님~! 가고 싶은 방향을 말씀해 주세요~!",
      );
      era.printButton("「이, 이쯤이면 되겠어……!」", 1);
      await era.input();
      await daiya.say_and_wait(
        `네~~! 그럼 천천히 ${you.sex}을(를) 내려 주세요──!`,
      );
      await era.printAndWait(
        `역시 크레인 조작에 익숙한 직원들이다. 안정적인 조작 덕분에 ${you.name}은(는) 안심하고 초콜릿 더미로 내려갔다.`,
      );
      await era.printAndWait(
        `아니, 오히려 ${you.name}은(는) 재미가 붙었다! 손 닿는 곳의 초콜릿을 모으자 양손이 가득 찼다.`,
      );
      await daiya.say_and_wait(
        "와아! 트레이너님, 잘하시네요! 그 균형 감각……대단하세요!",
      );
      await daiya.say_and_wait(
        "어머, 아직 하나 더요!? 떨어뜨리지 않게 조심하세요……!",
      );
      await daiya.say_and_wait(
        `후후, 푹 빠지셨네요.${you.sex}이(가) 즐거워하셔서 다행이에요♪`,
      );
      era.drawLine();
      await daiya.say_and_wait(
        "트레이너님, 정말 잘하셨어요! 넋을 잃고 봤어요!",
      );
      await daiya.say_and_wait("그리고……후후후, 즐거워 보이셨어요.");
      era.printButton("「정말 재미있었어!」", 1);
      await era.input();
      await daiya.say_and_wait("에헤헤, 기뻐요……♪");
      await daiya.say_and_wait(
        "레이스 말고도 이렇게 기쁜 일을……트레이너님과 나눌 수 있다면 멋지겠네요.",
      );
      era.printButton("「그러게!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "아, 초콜릿! 사양하지 말고 드세요!",
      );
      await daiya.say_and_wait(
        "돌아가서도 오늘 일을 떠올리며 저도 초콜릿을 먹을게요.",
      );
      await era.printAndWait(
        `거대 인형 뽑기로 초콜릿을 잔뜩 얻었다. 앞으로 한 입 먹을 때마다 ${daiya.sex}의 웃는 얼굴이 떠오를 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 재미가 붙었다! 손 닿는 곳의 초콜릿을 집는다.`,
      );
      era.printButton("「이건……?」", 1);
      await era.input();
      await daiya.say_and_wait("앗……! 그 초콜릿은……!");
      await era.printAndWait(
        `하나만 포장이 조금 삐뚤어진 초콜릿이 있다.${you.name}은(는) 몸을 흔들며 손수 만든 듯한 그 초콜릿을 향해 손을 뻗었다.`,
      );
      await daiya.say_and_wait("트, 트레이너님! 무리하지 마세요……!");
      await daiya.say_and_wait("아아, 아까 힘들게 집은 초콜릿이 떨어져서……");
      await daiya.say_and_wait(
        `……${you.sex}, 눈치채신 걸까요……?`,
      );
      await era.printAndWait(
        `${you.name}은(는) 거대 인형 뽑기에서 그럭저럭 성과를 거뒀다. 무엇보다 포장이 삐뚤어진 초콜릿을 끝내 집었다!`,
      );
      era.drawLine();
      await daiya.say_and_wait("……그건……제가 만든 초콜릿이에요.");
      era.printButton("「그럴 줄 알았어!」", 1);
      await era.input();
      await daiya.say_and_wait("역시 손수 만든 걸 알아보시고 집으셨군요……");
      await daiya.say_and_wait("정말……");
      era.printButton("「먹어도 돼?」", 1);
      await era.input();
      await daiya.say_and_wait("……네, 드세요.");
      await era.printAndWait(
        `${you.name}은(는) 포장을 열고 가지런히 놓인 초콜릿 중 하나를 입에 넣었다.`,
      );
      await era.printAndWait(
        "……뭐라고 해야 할까. 묘한 맛이다. 맛있는 편이긴 한데 말로 표현하기 어렵다.",
      );
      await daiya.say_and_wait("이상한 맛이죠……?");
      era.printButton("「맛있는데 맛이 묘하네……」", 1);
      await era.input();
      await daiya.say_and_wait(
        "맞아요. 색다른 맛에 도전하려다가 이렇게 신기한 맛이 되어 버려서……",
      );
      await daiya.say_and_wait(
        "직접 맛봤을 때 나쁘지는 않았지만 이 초콜릿을 드려도 될지 망설이고 있었어요……",
      );
      await daiya.say_and_wait(
        "먹어 주신 것만으로도 정말 감사해요! 저는 그것만으로 충분해요……!",
      );
      era.printButton("「이 초콜릿에 어울리는 걸 같이 찾아볼까?」", 1);
      await era.input();
      await daiya.say_and_wait("네……?");
      await era.printAndWait(
        `${you.name}은(는) 맛을 하나 더하면 더 맛있어질 것 같아 어울리는 재료를 찾자고 제안했다.`,
      );
      await daiya.say_and_wait(
        "그렇군요……과일이나 과자와 함께 먹으며 어떤 조합이 좋은지 시험하는 거네요.",
      );
      await daiya.say_and_wait("재미있겠어요! 그렇게 해요!");
      await era.printAndWait(
        `초콜릿을 더 맛있게 만들려고 여러 조합에 도전했다.`,
      );
      await era.printAndWait(
        "그 결과 사토노 다이아몬드가 만든 초콜릿에는 용과가 가장 잘 어울렸다.",
      );
      await daiya.say_and_wait(
        "후후후, 트레이너님과 제가 함께 완성한 세상에 하나뿐인 초콜릿이네요.",
      );
      await daiya.say_and_wait(
        "정말 맛있지만……이 배합은 아무에게도 알려 주지 않을 거예요. 우리 둘만의 비밀이니까요♪",
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = "오사카배를 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await era.printAndWait(
        "키타산 블랙도 출주하는 『오사카배』. 사토노 다이아몬드는 묵묵히 준비하고 있다.",
      );
      era.printButton("「꽤 차분하네」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 키타짱과 달릴 수 있어서 기대되지만 그렇다고 냉정함을 잃어서는 안 되죠.",
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』라면 자신이 어떤 모습을 목표로 할지 분명히 해야 해요.`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}계에 어떻게 기여할까? 『일류 ${daiya.uma_sex_title}』로서 무엇을 이뤄야 할까? 그 답을 찾아야 해요.`,
      );
      await daiya.say_and_wait(
        `키타짱은 관중에게 웃음과 활기를 전하며 ${daiya.uma_sex_title}계를 지탱하는 존재가 될 것 같아요.`,
      );
      await daiya.say_and_wait(
        "그러니 키타짱을 참고하면서 제가 할 수 있는 일을 찾는다면……",
      );
      era.printButton(
        `「그리고 『일류 ${daiya.uma_sex_title}』에게는 뛰어난 실력도 필요하지」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait(
        `말씀대로예요. 생각에 잠겨서 져 버리면 『일류 ${daiya.uma_sex_title}』라고 할 수 없으니까요.`,
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』에 걸맞은 달리기로 이기겠어요. 우선은 그게 제가 할 일이에요.`,
      );
      await era.printAndWait(
        "패독의 관중들은 온통 사토노 다이아몬드와 키타산 블랙 이야기뿐이었다.",
      );
      await era.printAndWait(
        `관중 A「키타산 블랙 대 사토노 다이아몬드……이 대결을 또 볼 수 있다니! ${daiya.couple_title}, 둘 다 힘냈으면 좋겠다!」`,
      );
      await era.printAndWait(
        `관중 B「키타산 블랙은 작년 『오사카배』에서 아쉽게 2착이었지. 이번에는 이기고 싶겠네.」`,
      );
      await era.printAndWait("관중 C「아! 다이아 나왔다!」");
      await era.printAndWait(
        "관중 B「다이아──! 오늘도 멋진 달리기 기대할게──!」",
      );
      await era.printAndWait("관중 D「키타산──! 작년의 설욕을 해라!!」");
      await kita.say_and_wait("응, 반드시!");
      era.printButton("(어라……? 왠지……)", 1);
      await era.input();
      await era.printAndWait(
        `……평소와 다르다.${you.name}은(는) 키타산 블랙의 분위기가 평소와 다르다는 걸 알아챘다.`,
      );
      await kita.say_and_wait(
        "──다이아. 있잖아, 출발 전에 해 두고 싶은 말이 있어.",
      );
      await daiya.say_and_wait("응……? 키타짱, 무슨 일이야?");
      await kita.say_and_wait(
        "시니어급의 왕도 노선을 제패하는 게 내 목표야!",
      );
      await kita.say_and_wait("그러니까 이 『오사카배』는 절대 양보하지 않을 거야!");
      await daiya.say_and_wait("…………읏!?");
      await kita.say_and_wait("서로 멋지게 달리자, 다이아!");
      await daiya.say_and_wait("……응……!");
      await era.printAndWait(
        `관중 A「오늘 키타산 블랙은 관록이 느껴지네. 역시 작년의 연도 대표 ${daiya.uma_sex_title}야.」`,
      );
      await era.printAndWait(
        `……그 기백에 압도되었다. 키타산 블랙의 의연한 모습에 늘 침착하던 사토노 다이아몬드조차 순간 말을 잃었다.`,
      );
      await daiya.say_and_wait("방금 잠깐……키타짱이 두려웠어……", true);
      await daiya.say_and_wait(
        "기백에서 먼저 지면 이길 수 없어!! 그런데 나는……!",
        true,
      );
      await daiya.say_and_wait("……지지 않겠어요!");
      await daiya.say_and_wait("안 져, 지지 않겠어요!!");
      era.printButton(`「다이아, ${kita.sex}에게 지지 마!!」`, 1);
      await era.input();
      await daiya.say_and_wait("네! 반드시 이겨 보이겠어요!!");
    };
    f.title = title;
    return f;
  })(),
  sank_hai_end: (() => {
    const title = "공명";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (daiya, teio, mcqueen, kita, you, rank, tenn_spr) => {
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          "중계",
          "다이아몬드의 빛은 흐려지지 않습니다! 『오사카배』를 제패한 것은 사토노 다이아몬드!",
        );
        await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
        await you.say_as_passer_by_and_wait(
          "관중 C",
          "정말 빈틈이 없네, 사토노 다이아몬드! 오늘도 멋지게 달렸어.",
        );
        await you.say_as_passer_by_and_wait(
          "관중 B",
          `${daiya.sex}의 실력은 작년에 두각을 드러낸 키타산 블랙에 필적해……아니, 뛰어넘었다고 해도 되겠어……`,
        );
        await you.say_as_passer_by_and_wait(
          "관중 A",
          "키타산 블랙도 이대로 주저앉을 상대가 아니지. 다이아 대 키타산, 앞으로가 기대되네……!",
        );
      } else {
        await you.say_as_passer_by_and_wait(
          "중계",
          `키타산 블랙, 접근을 허용하지 않습니다! ${daiya.sex}는 작년의 설욕에 성공했습니다. 오늘도 키타산 축제입니다!」`,
        );
        await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
        await you.say_as_passer_by_and_wait(
          "관중 B",
          "이야, 대단한 관록이야! 또 강해졌구나, 키타산 블랙!!",
        );
        await you.say_as_passer_by_and_wait(
          "관중 A",
          `연도 대표 ${daiya.uma_sex_title}의 실력은 올해도 여전하네!`,
        );
        await you.say_as_passer_by_and_wait(
          "관중 C",
          "사토노 다이아몬드도 앞날이 밝아. 이대로 계속 질 상대는 아니지. 키타산 대 다이아의 대결, 앞으로도 놓칠 수 없겠어!",
        );
      }
      await teio.say_and_wait(
        "응, 응, 키타짱도 다이아도 많이 컸네!",
      );
      await mcqueen.say_and_wait(
        "당신이 무슨 입장에서 하는 말인지……하지만 저도 그렇게 생각해요.",
      );
      await teio.say_and_wait(
        `${daiya.couple_title}의 달리기를 보면 나랑 네가 대결하던 시절이 생각나.`,
      );
      await mcqueen.say_and_wait([
        "당신은 ",
        tenn_spr,
        " 때를 말하는 거겠죠.",
      ]);
      await mcqueen.say_and_wait(
        `어쩌면……${daiya.couple_title}의 다음 레이스도 그럴지 모르겠네요.`,
      );
      await teio.say_and_wait("그럴지도~ 있잖아, 맥퀸.");
      await teio.say_and_wait("나 지금 엄~~~~청 달리고 싶어졌어!");
      await mcqueen.say_and_wait(
        "어머, 우연이네요. 저도 같은 생각을 하고 있었어요.",
      );
      await teio.say_and_wait("그럼 역까지 같이 달리자!");
      await mcqueen.say_and_wait("네, 그렇게 하죠.");
      era.drawLine();
      if (rank === 1) {
        await kita.say_and_wait(
          "으아아아아아, 분해!! 내 목표는 시니어급 왕도 노선 제패인데!",
        );
        await kita.say_and_wait("첫 경기부터 실패하다니, 젠장──!!");
        await daiya.say_and_wait("키, 키타짱……!");
        await kita.say_and_wait(
          "다이아를 떨쳐 내지 못했어! 계속 힘든 트레이닝을 해 왔는데.",
        );
        await kita.say_and_wait(
          "그래도 다이아는 따라잡았어! 아니, 마지막에 방심해서 추월당한 거야!",
        );
        await kita.say_and_wait("아, 분해, 분해! 역시 다이아야!");
        await daiya.say_and_wait(
          "에헤헤! 키타짱한테 뒤처지지 않으려고 정말 필사적이었어!",
        );
        await kita.say_and_wait(
          "진심인 다이아랑 승부해서 정말 즐거웠어! 더 많이 같이 달리고 싶어!",
        );
        await kita.say_and_wait([
          "진심인 다이아를 이기고 싶어! 그러니까……",
          tenn_spr,
          "에 나와 줬으면 해!",
        ]);
      } else {
        await kita.say_and_wait(
          "해냈다────!! 오사카배 우승──! 첫 목표 달성!!",
        );
        await daiya.say_and_wait("읏……!");
        await daiya.say_and_wait(
          "역시 키타짱은 『아리마 기념』 때보다 더 강해졌어……!",
          true,
        );
        await daiya.say_and_wait(
          "달리는 실력은 따라잡았다고 생각했는데……",
          true,
        );
        await daiya.say_and_wait(
          "키타짱은 더 앞으로 가 버렸어!",
          true,
        );
        await daiya.say_and_wait(
          "……따라잡을 수 있다고 생각했는데. 또 뒤처졌어……",
        );
        await kita.say_and_wait(
          "다이아한테 지지 않으려고 나 정말 엄청 열심히 했거든!",
        );
        await kita.say_and_wait(
          "『아리마 기념』에서 다이아의 실력을 알게 된 뒤로 쭉!",
        );
        await daiya.say_and_wait(
          "나도 충분히 노력했다고 생각했는데 아직 한참 부족했네……",
        );
        await daiya.say_and_wait(
          "하지만! 난 아직 더 노력할 수 있어! 다음에는 꼭 내가 이길 거야!!",
        );
        await kita.say_and_wait(
          "응, 또 승부하자, 다이아! 나도 다이아랑 더 달리고 싶어!",
        );
        await kita.say_and_wait(
          "다이아를 이기고 싶다는 마음이 날 강하게 만들어!",
        );
        await kita.say_and_wait([tenn_spr, "!! 다이아도 나와 줬으면 해!"]);
      }
      await daiya.say_and_wait([
        tenn_spr,
        "……키타짱의 연패가 걸린 레이스지.",
      ]);
      await kita.say_and_wait(
        "응! G1 중 가장 긴 3200미터. 다이아랑 달려 보고 싶어!",
      );
      await kita.say_and_wait("트레이너랑 상의해서 생각해 봐.");
      await kita.say_and_wait("교토에서 기다릴게!!");
      era.drawLine();
      await daiya.say_and_wait("……트레이너님, 다음 레이스 말인데요……");
      era.printButton("「『텐노상(봄)』에 나가고 싶은 거지?」", 1);
      await era.input();
      await daiya.say_and_wait("네! 그런데……어떻게 아셨어요?");
      await era.printAndWait(
        `사토노 다이아몬드는 전에 키타산 블랙의 등을 쫓으며 『일류 ${daiya.uma_sex_title}』의 모습에 대한 답을 찾겠다고 말했다.`,
      );
      await era.printAndWait(
        `그래서 ${you.name}은(는) ${daiya.sex}가 키타산 블랙과 같은 레이스를 원하리라 짐작했다.`,
      );
      await era.printAndWait([
        `게다가 사토노 다이아몬드의 성격이라면 키타산 블랙에게 유리하고 연패에 도전하는 `,
        tenn_spr,
        "를 일부러 고를 것이다.",
      ]);
      await daiya.say_and_wait(
        "전부 꿰뚫어 보셨네요……후후, 이러면 앞으로는 저 혼자 결정해도 괜찮겠어요.",
      );
      era.printButton("「안 돼, 제대로 상의해야지!?」", 1);
      await era.input();
      await daiya.say_and_wait("후후후, 농담이에요♪");
      if (rank === 1) {
        await daiya.say_and_wait([
          "그럼 다음 레이스는 ",
          tenn_spr,
          "로 결정이네요. 사토노 가문을 위해 유서 깊은 영예의 방패를 받으러 가겠어요.",
        ]);
      } else {
        await daiya.say_and_wait(
          `오늘 진 건 『일류 ${daiya.uma_sex_title}』가 되기에는 실력이 아직 부족하기 때문이에요.`,
        );
        await daiya.say_and_wait([
          "그러니 다음에는 반드시 ",
          tenn_spr,
          "에서 키타짱을 이기겠어요……!!",
        ]);
        await daiya.say_and_wait(
          "그리고 사토노 가문을 위해 유서 깊은 영예의 방패를 받으러 가겠어요.",
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = "팬 감사제";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} condor エルコンドルパサー
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait(
        `오늘은 봄 팬 감사제. ${daiya.uma_sex_title}들과 수많은 팬이 다양한 교류를 나누고 있다.`,
      );
      await era.printAndWait(
        `사토노 다이아몬드도 여성 팬들에게 둘러싸여 ${daiya.couple_title}는 즐겁게 이야기를 나누고 있었다.`,
      );
      await era.printAndWait(
        "다이아의 팬 A「다이아가 달리는 모습, 정말 좋아해요!!」",
      );
      await era.printAndWait(
        "다이아의 팬 A「똑바로 앞을 보고 가속하는 모습이 아름답고 멋져서……!」",
      );
      await daiya.say_and_wait(
        "와아, 기뻐요!! 언제나 응원해 주셔서 감사해요!",
      );
      await era.printAndWait(
        `다이아의 팬 A「네! 다이아를 직접 보고 싶어서 전에 ${daiya.sex}와 처음으로 현장 관전을 갔어요!」`,
      );
      await era.printAndWait(
        "다이아의 팬 B「『국화상』을 현장에서 보고 저도 다이아의 팬이 됐어요!! 위닝 라이브도 귀여웠어요!」",
      );
      await daiya.say_and_wait(
        "어머, 경기장에 처음 가셨던 거예요!? 저를 위해 와 주셔서 감사해요!",
      );
      await era.printAndWait(
        "다이아의 팬 A「말을 걸기도 조심스러웠는데……이렇게 이야기할 수 있다니……저, 정말 감격이에요……!」",
      );
      await daiya.say_and_wait(
        "에헤헤, 말을 걸어 주셔서 저도 정말 즐거워요♪",
      );
      await era.printAndWait(
        "다이아의 팬 B「저기, 다이아는 오늘 어떤 행사에 참가하나요?」",
      );
      await daiya.say_and_wait(
        "저는 『비정한 카드 짝 맞추기』에 나가요! 커다란 카드를 운동장에 늘어놓고 짝을 맞추는 거예요♪",
      );
      await era.printAndWait("다이아의 팬 B「……『비정하다』는 건 무슨……?」");
      await daiya.say_and_wait(
        "달리면서 카드를 뒤집는 속도를 겨루거든요. 차례대로 뒤집는 게 아니라 먼저 하는 사람이 임자예요.",
      );
      await daiya.say_and_wait(
        "『도전장 카드』를 뒤집으면 다른 선수와 승부해서 이긴 쪽이 진 쪽의 카드를 가져갈 수 있어요♪",
      );
      await era.printAndWait("다이아의 팬 B「그, 그거 치열하겠네요……」");
      await era.printAndWait(
        "다이아의 팬 A「그래도 다이아라면 이길 수 있어요! 응원하러 갈게요!」",
      );
      await daiya.say_and_wait(
        "후후후후후! 여러분이 응원해 주신다면 다이아, 최선을 다할게요♪",
      );
      await era.printAndWait("다이아의 팬들「귀……귀여워~~!」");
      await daiya.say_and_wait(
        "정말! 숨어서 엿보시다니, 트레이너님 그러시면 안 돼요!",
      );
      era.printButton("「방해하면 미안할 것 같아서」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${daiya.sex}가 팬들과 즐겁게 어울리고 있어서 말을 걸기 어려웠다고 전했다.`,
      );
      await daiya.say_and_wait(
        "저도 그만 신이 나서……실례했네요……",
      );
      await you.say_as_passer_by_and_wait(
        `중계를 맡은 ${daiya.uma_sex_title}`,
        "경기 안내입니다. 『비정한 카드 짝 맞추기』 참가자는 준비 구역으로 모여 주세요.",
      );
      await daiya.say_and_wait("아, 모이라는군요. 그럼 먼저 갈게요!");
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `중계를 맡은 ${daiya.uma_sex_title}`,
        "──이어서 지략과 체력을 시험하는 『비정한 카드 짝 맞추기』! 참가자 6명, 입장합니다!",
      );
      await condor.say_and_wait(
        "직감, 계략, 열혈! 승자의 자리는 엘 콘도르 파사의 것임다────!!",
      );
      await gs.say_and_wait(
        "대게, 털게, 마쓰바게!! 좋아, 게 축제다!!",
      );
      await festa.say_and_wait("훗……재미있는 얼굴들이 모였군.");
      await sirius.say_and_wait("이봐, 이봐……꼬맹이들 친목회에는 관심 없어.");
      await coffee.say_and_wait("……응, 그래……같은 그림을 뒤집는 거야……");
      await daiya.say_and_wait("? 카페, 누구랑 이야기하는 거예요……?");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「6명 모두 출발 위치에 섰습니다! 그럼 『비정한 카드 짝 맞추기』, 시작합니다!!」`,
      );
      await era.printAndWait("탕!!");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「네, 이 경기는 코스 위 카드를 뒤집어 같은 그림을 모으면 점수를 얻는 카드 짝 맞추기입니다!」`,
      );
      await condor.say_and_wait("No──────!! 그림이 다름다────!!");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「참가자들이 동시에 뒤집으므로 보통 카드 짝 맞추기보다 기억력이 더 중요합니다!」`,
      );
      await daiya.say_and_wait("……좋아! 한 쌍 맞췄어요♪");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「사토노 다이아몬드, 꾸준히 점수를 쌓고 있습니다!」`,
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「……이건!? 맨하탄 카페가 연이어 짝을 맞추며 현재 점수 선두!」`,
      );
      await coffee.say_and_wait(
        "……같은 그림은……오른쪽 구석……응, 다행이야……고마워……",
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「시작부터 한 번도 실수하지 않았습니다! ${daiya.sex}는 혼잣말로 정답을 확인하고 있습니다. 이 신중함이 실수하지 않는 비결일까요!」`,
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「이제 5분도 남지 않았습니다! ……어라? 나카야마 페스타가 움직입니다! 아까 그걸 쓸 생각인가요!?」`,
      );
      await festa.say_and_wait("미안하군, 아가씨. 비장의 카드를 쓰겠어.");
      await daiya.say_and_wait("!! 도전장……!");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「오──나카야마 페스타! ${daiya.sex}가 사토노 다이아몬드에게 도전장을 내밀었습니다!」`,
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「도전장 카드는 양측 합의로 걸 점수를 정한 뒤 다음 승부에서 이긴 쪽이 그 점수를 빼앗을 수 있습니다!」`,
      );
      await sirius.say_and_wait("잠깐!! 나도 도전장을 쓰겠어!");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「시리우스 심볼리도 여기서 참전!! 도전장 승부가 삼파전이 됐습니다!」`,
      );
      await sirius.say_and_wait("그래서? 몇 점을 걸 생각이지?");
      await daiya.say_and_wait(
        "……500점은 어떨까요? 이 정도면 카페의 점수를 따라잡을 수 있어요.",
      );
      await sirius.say_and_wait(
        "훗, 침착하군. 충동적으로 전부 걸었다면 더 재미있었을 텐데.",
      );
      await festa.say_and_wait("그럼 단판 승부다. 간다──");
      await era.printAndWait("세 사람「가위, 바위, 보!!」");
      await daiya.say_and_wait("해냈어요!! 제가 이겼어요!");
      await sirius.say_and_wait(
        "오? 속지 않았나. 좋아, 점수는 가져가!",
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「사토노 다이아몬드, 1000점 획득! 현재 1위인 맨하탄 카페와 동점입니다──!! ──하지만!!」`,
      );
      await coffee.say_and_wait("…………이겼다.");
      await gs.say_and_wait(
        "아아아아아아 젠장────!! 1위한테 점수를 빼앗는 작전, 실패다!",
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「맨하탄 카페 대 골드 쉽의 도전장 승부는 카페의 승리!! ${daiya.sex}는 골드 쉽의 모든 점수를 얻었습니다!」`,
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「경기 종료!! 『비정한 카드 짝 맞추기』의 승자는──맨하탄 카페!」`,
      );
      await era.printAndWait("다이아의 팬 B「다이아, 아까웠어!」");
      await era.printAndWait(
        "다이아의 팬 A「그래도 다이아의 다양한 표정을 볼 수 있어서 저는 만족해요!」",
      );
      await daiya.say_and_wait("후후후, 즐거우셨다니 다행이에요!");
      await era.printAndWait(
        "팬들과 직접 만난 이날은 사토노 다이아몬드에게도 무척 즐거운 팬 감사제가 되었다.",
      );
      await daiya.say_and_wait("모든 점수를 걸겠어요!!");
      await festa.say_and_wait("하하! 전부 거는 건 못 참지! 받아 주겠어!!");
      await sirius.say_and_wait("나도 이의 없어! 덤벼!!");
      await era.printAndWait("세 사람「가위, 바위, 보!!」");
      await daiya.say_and_wait("해냈어요!! 제가 이겼어요!");
      await festa.say_and_wait("……심리전에서 날 이기다니……대단한 아가씨군.");
      await festa.say_and_wait("내 점수는 전부 가져가.");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「사토노 다이아몬드가 나카야마 페스타와 시리우스 심볼리의 점수를 획득!! 이로써 ${daiya.sex}는 카페를 제치고 1위로──!」`,
      );
      await gs.say_and_wait(
        "아──하하하하하!! 기다리고 있었다! THE·어부지리! 다이아에게 도전장이다──!",
      );
      await gs.say_and_wait("자, 자, 승부다──!!");
      await gs.say_and_wait("가위, 바위, 보!!");
      await daiya.say_and_wait("후후후, 제가 이겼네요♪");
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「오──사토노 다이아몬드, 골드 쉽의 작전을 완전히 간파!! 마지막 자객──골드 쉽을 격파했습니다!」`,
      );
      await era.printAndWait(
        `중계를 맡은 ${daiya.uma_sex_title}「경기 종료!! 『비정한 카드 짝 맞추기』의 승자는──사토노 다이아몬드!」`,
      );
      await era.printAndWait("다이아의 팬 B「다이아, 우승 축하해!」");
      await era.printAndWait(
        "다이아의 팬 A「다이아한테 이렇게 대담한 면이……!」",
      );
      await daiya.say_and_wait(
        "에헤헤♪ 여러분이 응원해 주셔서 과감해질 수 있었어요!",
      );
      await era.printAndWait(
        "다이아의 팬 A「저……정말 멋져요~~!! 앞으로도 응원하게 해 주세요!」",
      );
      await daiya.say_and_wait(
        "저야말로 앞으로도 잘 부탁드려요! 계속 응원해 주세요♪",
      );
      await era.printAndWait(
        "팬들과 직접 만난 이날은 사토노 다이아몬드에게도 무척 즐거운 팬 감사제가 되었다.",
      );
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = "텐노상(봄)을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     */
    const f = async (daiya, teio, mcqueen) => {
      await era.printAndWait(
        "『텐노상(봄)은 양강 대결 구도!!』『키타산 블랙 VS 사토노 다이아몬드』",
      );
      await era.printAndWait(
        "『소꿉친구가 최강의 자리를 다툰다! 승리의 여신은 누구에게 미소 지을 것인가!?』",
      );
      await era.printAndWait(
        "──『텐노상(봄)』 관련 보도는 하나같이 『양강 대결』이라는 제목을 내걸었다.",
      );
      await era.printAndWait(
        "관중 A「양강 대결인데 두 사람 유형이 완전히 달라서 재미있네~」",
      );
      await era.printAndWait(
        "관중 A「데뷔 전부터 2억 3000만 분의 1의 영애라 불리며 높은 평가와 인지도를 자랑한 사토노 다이아몬드와──」",
      );
      await era.printAndWait(
        `관중 C「처음에는 무명이었지만 노력과 끈기에 관중들이 공감하면서 차츰 두각을 드러낸 키타산 블랙……」`,
      );
      await era.printAndWait(
        `관중 A「게다가 ${daiya.couple_title}는 소꿉친구잖아. 운명의 대결 같아!」`,
      );
      await era.printAndWait(
        `관중 C「그래도 오늘은 키타산 블랙이 더 유리하겠지. 작년 우승자도 ${daiya.sex}니까.」`,
      );
      await era.printAndWait(
        "안경 쓴 남성「『텐노상(봄)』은 3200미터, G1 최장거리야. 요도의 언덕은 높낮이 차도 커서 스태미나뿐 아니라 위치 선정도 중요하지.」",
      );
      await era.printAndWait("후드티 입은 남성「갑자기 왜 그래?」");
      await era.printAndWait(
        `안경 쓴 남성「키타산 블랙은 작년에 출주한 경험이 있어. 그게 ${daiya.sex}의 우위지……예전에도 비슷한 대화를 한 것 같은데.」`,
      );
      await era.printAndWait(
        "후드티 입은 남성「……아, 그때구나! 똑같은 『텐노상(봄)』, 메지로 맥퀸 대 토카이 테이오 때!」",
      );
      await era.printAndWait(
        "안경 쓴 남성「그렇군……확실히 그때와 겹쳐 보이네……」",
      );
      await teio.say_and_wait(
        "하핫, 다들 오늘 레이스가 우리 때랑 비슷하다고 생각하는구나!",
      );
      await mcqueen.say_and_wait(
        "저와 테이오를 동경했던 두 사람이 저희와 같은 『텐노상(봄)』에서 대결하다니……",
      );
      await mcqueen.say_and_wait("신기한 인연이네요.");
      await teio.say_and_wait(
        "둘 다 우리 그 승부는 봤을 거야. 그때 우리보다 더 멋지게 달렸으면 좋겠네!",
      );
      await mcqueen.say_and_wait(
        "네. 적어도 그때 저희에 필적하는 달리기를 보여 줬으면 해요.",
      );
      await daiya.say_and_wait(
        "양강 대결……이 열기의 한 축이 될 수 있어 영광이에요.",
      );
      era.printButton("「다이아에게는 그런 의미구나」", 1);
      await era.input();
      await daiya.say_and_wait(
        `네. 예전 사토노 가문은 이루지 못했던 일이니까요. 『출주자로서 ${daiya.uma_sex_title}계에 기여하는 것』이죠.`,
      );
      await daiya.say_and_wait(
        "데뷔 전부터 취재해 주신 기자분들께도 감사드려야겠어요.",
      );
      era.printButton("「항상 성실하게 취재에 응했기 때문이지」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후후♪ 키타짱에게도 감사해야겠네요.",
      );
      await daiya.say_and_wait(
        "키타짱이 모두에게 웃음을 주려고 계속 달려 왔기에 오늘 이렇게 주목받는 거니까요.",
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』가 어떤 모습이어야 할지……역시 키타짱과 함께 달려야 찾을 수 있을 것 같아요.`,
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』가 되기 위해서라도 이겨야 해요.`,
      );
      await daiya.say_and_wait(
        "키타짱은 작년에 『텐노상(봄)』을 경험한 만큼 유리해 보일지도 몰라요. 그렇기에 이 승부에서 이기는 의미가 커요.",
      );
      await daiya.say_and_wait(
        `이 레이스에서 이겨 모두가 실력을 인정하는 ${daiya.uma_sex_title}가 되겠어요!`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = "양강";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {number} rank 着順
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     */
    const f = async (
      daiya,
      teio,
      mcqueen,
      kita,
      you,
      rank,
      takz_kin,
      kyot_dai,
      tenn_sho,
      japa_cup,
    ) => {
      await era.printAndWait(
        "중계「두 번째 언덕을 넘어 이제 제3코너! 힘겹지만 승부는 여기서부터입니다!」",
      );
      await daiya.say_and_wait("하아, 하아, 하아, 하아!");
      await kita.say_and_wait("하아, 하아, 하아, 하아────!");
      await era.printAndWait("관중 A「다이아, 힘내────!」");
      await era.printAndWait("관중 B「키타산, 가라────!!」");
      if (rank === 1) {
        await era.printAndWait(
          "중계「키타산 블랙, 사토노 다이아몬드! 양강 대결의 승자는……사토노 다이아몬드──!」",
        );
      } else {
        await era.printAndWait(
          "중계「키타산 블랙, 사토노 다이아몬드! 양강 대결의 승자는……키타산 블랙──! 키타산 블랙, 연패 달성────!!」",
        );
      }
      await you.say_as_passer_by_and_wait(
        "관중",
        "와아아아아아아아아아아아아!",
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "……대단해……엄청난 달리기였어……",
      );
      await you.say_as_passer_by_and_wait(
        "관중 C",
        "우와, 소름이……! 등골이 떨려……!",
      );
      await you.say_as_passer_by_and_wait(
        "후드티 입은 남성",
        "으으……둘 다……! 둘 다 훌륭했어……!!",
      );
      await teio.say_and_wait(
        `하……아하하! ${daiya.couple_title}, 둘 다 대단하잖아!`,
      );
      await teio.say_and_wait("……있잖아, 맥퀸.");
      await mcqueen.say_and_wait("네, 가죠.");
      if (rank === 1) {
        await kita.say_and_wait("하아, 하아……헤헤헤, 아직도 심장이 빨리 뛰어……");
        await daiya.say_and_wait("나도 그래……하아, 하아……");
        await kita.say_and_wait(
          "……응, 전력을 다하고 졌으니 인정해야지! 오늘은 내 완패야!",
        );
        await kita.say_and_wait("축하해, 다이아!");
        await daiya.say_and_wait(
          "이긴 건 키타짱 덕분이야! 키타짱이 앞에서 날 이끌어 줘서 한계를 넘을 수 있었어.",
        );
      } else {
        await daiya.say_and_wait("하아, 하아……다리가 떨려……");
        await kita.say_and_wait(
          "하아, 하아……헤헤헤, 나도……! 정말 엄────청 지쳤어──!!",
        );
        await daiya.say_and_wait("……분해……전력을 다했는데……");
        await daiya.say_and_wait(
          "내 한계를 뛰어넘을 만큼 애썼는데……그래도 이길 수 없다니……",
        );
        await kita.say_and_wait("다이아……");
        await daiya.say_and_wait(
          "내 완패야……연패 축하해, 키타짱.",
        );
        await kita.say_and_wait("……고마워, 다이아.");
        await daiya.say_and_wait(
          "에헤헤, 그래도……키타짱이 앞에서 이끌어 줘서 오늘은 한계를 넘을 수 있었어……",
        );
      }
      await daiya.say_and_wait(
        "키타짱과 함께 달리면 더 앞으로 갈 수 있을 것 같아!",
      );
      await kita.say_and_wait(
        "나도 마찬가지야! 이대로 함께 정점까지 가자!",
      );
      await teio.say_and_wait("후후후, 정점이라~! 쉽게 말하네!");
      await teio.say_and_wait(
        "정점에서 기다리는 상대가 누군지 알아, 키타짱?",
      );
      await kita.say_and_wait("어, 테이오!?");
      await daiya.say_and_wait("맥퀸도!");
      await teio.say_and_wait(
        "네가 말하는 정점은 내 영역이야! 내 무대에 서려면 우선 제왕님을 이겨야지~!",
      );
      await mcqueen.say_and_wait("테이오, 너무 놀리는군요.");
      await daiya.say_and_wait("네……?");
      await teio.say_and_wait(
        "선전포고야!! 나랑 맥퀸은 가을 레이스에 나갈 거야!",
      );
      await teio.say_and_wait(
        "정점으로 가고 싶지! 그럼 우리에게 도전해 봐!",
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        "「에에에에에~~!?」",
      ]);
      await daiya.say_and_wait(
        "저, 정말 출주하시는 건가요!? 그런 이야기는 못 들었는데……너무 갑작스러워요……",
      );
      await mcqueen.say_and_wait("네, 원래 예정에는 없었어요.");
      await mcqueen.say_and_wait(
        "하지만 다이아와 키타산의 레이스를 보고 생각이 바뀌었죠.",
      );
      await mcqueen.say_and_wait("두 분과 한 번 달려 보고 싶어졌어요.");
      await mcqueen.say_and_wait(
        "두 분의 달리기가 저희 투지에 불을 붙였어요.",
      );
      await daiya.say_and_wait('……！');
      await mcqueen.say_and_wait(
        "──어떤가요? 저희 도전을 받아 주시겠어요?",
      );
      await daiya.say_and_wait(
        "읏! 영광이에요!! 부디 그 기회를 주세요!",
      );
      await kita.say_and_wait("저도요! 잘 부탁드립니다!!");
      await teio.say_and_wait("그래야지!");
      await teio.say_and_wait("나는 『재팬컵』에 나갈 거야!");
      await mcqueen.say_and_wait(
        "그럼 저는 『텐노상(가을)』에서 기다릴게요.",
      );

      await teio.say_and_wait(
        "기대된다~! 오랜만에 트윙클 시리즈를 달릴 수 있겠네!",
      );
      await mcqueen.say_and_wait("그럼 저는 이만.");
      await kita.say_and_wait("다이아……! 꿈 아니지……?");
      await daiya.say_and_wait(
        "응! 하지만……둘이 동시에 꿈을 꾸고 있을 가능성도 없지는 않아……",
      );
      era.printButton("「나도 다 들었어. 꿈이 아니야」", 1);
      await era.input();
      await kita.say_and_wait(
        "우와아아아!! 정말 꿈이 아니었어! 테이오랑 달릴 수 있어!!",
      );
      await daiya.say_and_wait(
        "맥퀸과 트윙클 시리즈 무대에서……!",
      );
      await daiya.say_and_wait("기뻐……이런 날이 오다니……");
      await era.printAndWait(
        "사토노 다이아몬드의 눈에 감격의 눈물이 맺혔다. 키타산 블랙도 마찬가지였다.",
      );
      await era.printAndWait(
        `${daiya.couple_title}는 각각 메지로 맥퀸과 토카이 테이오를 동경해 트레센에 들어왔다. 크게 반응하는 것도 당연할 것이다.`,
      );
      await kita.say_and_wait([
        tenn_sho,
        "도 ",
        japa_cup,
        "도, 난 나갈 거야!",
      ]);
      await kita.say_and_wait(
        "원래 『가을 시니어 3관』 목표 레이스니까. 다이아는?",
      );
      await daiya.say_and_wait([
        "나는 ",
        tenn_sho,
        "에 나가고 싶어! 맥퀸에게 도전하고 싶어!!",
      ]);
      era.printButton("「『텐노상(가을)』인가……」", 1);
      await era.input();
      await era.printAndWait(
        `그러면 그 전에 여름 합숙이 있다.${daiya.sex}는 원래 무더위 속 트레이닝에 강하지 않다……`,
      );
      await era.printAndWait(
        `여름이 끝나자마자 정면 대결을 벌이는 건 ${you.name}으로서도 불안하다. 『텐노상(가을)』 전에 다른 레이스로 상태를 확인해 두고 싶다.`,
      );
      era.printButton("「그 전에 『교토 대상전』에 나가자」", 1);
      await era.input();
      await daiya.say_and_wait([
        "그러니까 ",
        kyot_dai,
        "에서 상태를 확인하고 필요하면 조정하는 거군요. 이견은 없어요.",
      ]);
      await kita.say_and_wait([
        "나는 팬 투표로 출주할 수 있는 ",
        takz_kin,
        "에 나간 뒤 ",
        tenn_sho,
        "에 나갈 거야!",
      ]);
      await kita.say_and_wait([
        "맥퀸을 이기기 위해 ",
        tenn_sho,
        "를 향해 열심히 노력하자!",
      ]);
      await daiya.say_and_wait("후우…………아직도 꿈속인 것 같아요……");
      era.printButton("「차츰 실감이 날 거야」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네……그러니 기뻐하기만 해서는 안 되겠죠. 모처럼 맥퀸과 달릴 수 있으니까요.",
      );
      await daiya.say_and_wait(
        `맥퀸도 테이오도 이미 『일류 ${daiya.uma_sex_title}』로서 여러 방면에서 활약하고 계세요.`,
      );
      await daiya.say_and_wait(
        `${teio.couple_title}인 두 분께 『일류 ${daiya.uma_sex_title}』의 모습을 배우겠어요.`,
      );
      await daiya.say_and_wait(
        `특히 맥퀸은 메지로 가문의 책임을 짊어지고 계시죠. 저와 비슷한 처지라고 느껴요.`,
      );
      await daiya.say_and_wait(
        `사토노 가문의 대표로서 저는 어떤 『일류 ${daiya.uma_sex_title}』가 되어야 할까요──`,
      );
      era.printButton("「고민은 언제든 들어줄게」", 1);
      await era.input();
      await era.printAndWait(
        `『G1에서 이길 수 있는 일류 ${daiya.uma_sex_title}가 된다』.${you.name}은(는) ${daiya.sex}와 그 꿈을 함께 이루기로 약속했다.`,
      );
      await era.printAndWait(
        `${daiya.sex}의 트레이너로서 ${daiya.sex}의 미래에 도움이 된다면 ${you.name}은(는) 가능한 한 힘이 될 생각이다.`,
      );
      await daiya.say_and_wait("에헤헤, 그때는 의지할게요♪");
      await daiya.say_and_wait("……만약 맥퀸을 이길 수 있다면──");
      await era.printAndWait(
        `『일류 ${daiya.uma_sex_title}』인 메지로 맥퀸을 이기는 것은 실질적으로 『일류 ${daiya.uma_sex_title}』의 실력에 도달했다는 증거가 된다.`,
      );
      await era.printAndWait(
        `사토노 가문의 숙원도 머지않았다──${you.name}은(는) 차마 다 하지 못한 말의 뒤를 헤아리며 새삼 자신의 책임을 느꼈다.`,
      );
      await era.printAndWait([
        "우선은 ",
        kyot_dai,
        ". 전초전에서 실수할 수는 없다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = "그림자";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await daiya.say_and_wait("……키타짱……");
      await kita.say_and_wait("………………읏.");
      await era.printAndWait(
        "관중 A「야, 키타산 왜 저러지……오늘 상태가 안 좋은가……?」",
      );
      await era.printAndWait(
        "관중 B「마지막에 평소의 끈기가 없었네. 키타산이라면 더 잘해야 하는데……」",
      );
      await era.printAndWait(
        "관중 C「풀이 죽어 있을 때가 아니야! 평소의 기백은 어디 갔어, 키타산!!」",
      );

      await kita.say_and_wait("…………읏!");
      await daiya.say_and_wait("키타짱!!");
      await era.printAndWait(
        "오늘 키타산 블랙에게는 평소의 날카로움이 없었다. 힘을 다 발휘하지 못한 이유는──",
      );
      await daiya.say_and_wait("하아, 하아…………키타짱.");
      await kita.say_and_wait("과, 관중들의 말……더는 듣고 있을 수가 없어……");
      await kita.say_and_wait("제대로 못 달렸다는 건 나도 알아……");
      await kita.say_and_wait("……읏……하지만…………");
      await kita.say_and_wait("내가 실망시킨 거야────!!");
      await kita.say_and_wait("으아아아아아아아아아아아아아!");
      await daiya.say_and_wait("……키타짱……");
      await daiya.say_and_wait(
        "……키타짱, 오늘은 완벽한 상태에서 달린 게 아니었지……?",
      );
      await kita.say_and_wait(
        "응……흑……오늘 왜 그랬지……이상해서……몸이 무겁고……",
      );
      await kita.say_and_wait(
        "페이스를 올려야 하는 건 아는데……흑, 다리가……점점 안 움직여서……!",
      );
      await kita.say_and_wait("……이렇게 열심히 했는데……");
      await kita.say_and_wait(
        "……『타카라즈카 기념』……흑……팬 투표 1위가 돼서……정말 기뻤어……!",
      );
      await kita.say_and_wait(
        "기대에 보답해야 한다고……그래서 정말, 정말 열심히 했는데!!",
      );
      await kita.say_and_wait("왜 이렇게 된 거야!?");
      await daiya.say_and_wait(
        "아마……몸에 피로가 남아 있던 게 아닐까? 나도 『텐노상(봄)』이 끝나고 피로가 남아 있었어.",
      );
      await era.printAndWait(
        `『텐노상(봄)』의 격전으로 키타산 블랙의 몸에도 피로가 쌓여 있었다.${kita.sex}본인은 깨닫지 못했다.`,
      );
      await era.printAndWait(
        `${kita.sex}는 기대에 보답하고 싶은 마음뿐이라 피로를 느끼지 못했지만, 피로는 사라지지 않고 ${kita.sex}의 몸에 조용히 쌓여 갔다.`,
      );
      await daiya.say_and_wait(
        "너무 열심히 한 거야……키타짱답네.",
      );
      await kita.say_and_wait("……지쳐 있었다고……? 그럴 수가……하지만……");
      await kita.say_and_wait(
        "내가 지쳤다는 것도 몰랐어……그래서 모두의 기대를 저버렸어……",
      );
      await kita.say_and_wait("분해……정말 분해……!");
      await daiya.say_and_wait(
        "──괜찮아. 키타짱이 너무 열심히 했다는 걸 팬분들도 이해해 주실 거야.",
      );
      await daiya.say_and_wait(
        "다들 노력하는 키타짱을 지켜보며 키타짱에게 힘을 받아 온 분들이잖아.",
      );
      await kita.say_and_wait(
        "……그래도 일부러 투표까지 해 줬는데 이런 결과라니……실망했을 거야……",
      );
      await daiya.say_and_wait(
        "……기대에 보답하지 못하면 더는 응원받지 못할 거라고 생각하는 거야……?",
      );
      await kita.say_and_wait(
        "응……눈에 띄지 않던 내가 주목받게 된 건 계속 이겼기 때문이니까……",
      );
      await kita.say_and_wait("계속 이겨서 응원해 주는 사람이 늘어난 거야!");
      await kita.say_and_wait(
        `이기지 못하면 나는 주목받지 못하는 평범한 ${daiya.uma_sex_title}일 뿐이고……`,
      );
      await kita.say_and_wait(
        "다이아처럼 굉장한 막판 스퍼트도 없어. 무기도 없고 노력밖에 모르는 평범한……",
      );
      await daiya.say_and_wait("그게 키타짱의 멋진 점이야.");
      await kita.say_and_wait("네……?");
      await daiya.say_and_wait(
        "흔들리지 않고 노력할 수 있다는 것. 다들 그런 모습을 보고 응원하고 싶어진 거야.",
      );
      await daiya.say_and_wait(
        "키타짱이 여기까지 줄곧 노력해 온 모습을 보고 깊은 애정을 품게 된 거야.",
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 A「키타산 블랙은 매번 전력을 다해 달려서 자꾸 응원하고 싶어져. 정말 흔들림이 없다니까.」`,
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 B「맞아, 맞아! ${kita.sex}은(는) 특별히 눈부시다기보다는 평범하고 우리와 가까운 느낌이야.」`,
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 B「그래서 더 이겼으면 좋겠어! 마치 내가 뭔가 해낸 듯한 기분이 들거든!」`,
      );
      await daiya.say_and_wait(
        "관중분들이 그러셨어. 키타짱이 이기면 자기 일처럼 기쁘다고.",
      );
      await daiya.say_and_wait(
        "『키타산이 노력하니까 나도 힘낼 수 있다』……키타짱은 나와 달리 그런 응원을 받고 있어.",
      );
      await daiya.say_and_wait(
        "가끔은 그런 키타짱이 조금 부럽기도 해.",
      );
      await kita.say_and_wait("아……");
      await era.printAndWait(
        "관중 A「그러니까 『봄 시니어 3관』이네! 꼭 따내라, 키타산!!」",
      );
      await era.printAndWait("관중 A「키타산──! 작년의 설욕을 해라!!」");
      await daiya.say_and_wait(
        "관중이 자기 일처럼 응원해 주는 건 정말 대단한 일이야.",
      );
      await daiya.say_and_wait(
        "팬분들은 강해서 좋아하는 게 아니라 키타짱 그 자체를 사랑하는 거야.",
      );
      await daiya.say_and_wait("그러니 괜찮아.");
      await kita.say_and_wait("다이아……");
      await daiya.say_and_wait(
        "오늘은 정말 실망하셨을지도 몰라. 하지만 팬분들은 아직 키타짱에게 『기대』하고 있어.",
      );
      await kita.say_and_wait("……기대……");
      await daiya.say_and_wait("나도 기대하고 있어.");
      await kita.say_and_wait('…………');
      await daiya.say_and_wait("……키타짱이라면 할 수 있다고 믿으니까.");
      era.drawLine();
      await era.printAndWait(
        "대기실을 나온 사토노 다이아몬드는 무언가 생각에 잠긴 듯했다.",
      );
      await daiya.say_and_wait(
        "……트레이너님은 어떤 제 모습을 보고 싶으세요?",
      );
      era.printButton("「응……? 무슨 뜻이야?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 뜻을 몰라 ${daiya.sex}에게 되물었다.`,
      );
      await daiya.say_and_wait(
        "아까부터 생각했어요. 다들 키타짱에게 자신을 겹쳐 보며 응원한다면 저를 응원하는 분들은 무엇을 보고 계실까요?",
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』로서의 기여……키타짱${kita.sex}는 이미 웃음을 전한다는 기여를 하고 있어요.`,
      );
      await daiya.say_and_wait(
        "저는 무엇을 해야 할지조차 아직 떠오르지 않는데……",
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}계의 발전을 위해 제가 해야 할 일……`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}로서 제 달리기가 여러분께 전할 수 있는 것은 무엇일까요……`,
      );
      await era.printAndWait(
        `모두가 사토노 다이아몬드에게 바라는 것.${daiya.sex}의 달리기는 팬들에게 어떤 꿈을 보여 줄까.`,
      );
      await era.printAndWait(
        `『일류 ${daiya.uma_sex_title}』는 저마다 다른 꿈을 전할 수 있다.`,
      );
      era.printButton("「나는 너에게서 『가능성』을 느껴」", 1);
      await era.input();
      await daiya.say_and_wait("가능성……");
      await era.printAndWait(
        `흔들리지 않는 의지를 품은 ${daiya.sex}에게는 불가능조차 뒤집을 듯한 힘이 깃들어 있다.`,
      );
      await era.printAndWait(
        `사토노 가문을 오랫동안 옭아맨 징크스를 극복한 ${daiya.sex}라면 무엇이든 할 수 있을지도 모른다──그렇게 느끼게 한다.`,
      );
      await daiya.say_and_wait("그렇군요……감사해요.");
      await daiya.say_and_wait("……조금 더 혼자 생각해 볼게요……");
      await era.printAndWait(
        `사토노 다이아몬드는 다시 깊이 생각에 잠겼다.${daiya.sex}의 생각을 방해하지 않도록 둘은 말없이 역으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = "타카라즈카 기념을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await daiya.say_and_wait("……하아, 하아……");
      era.printButton("「아프거나 몸이 무거운 데는 없어?」", 1);
      await era.input();
      await daiya.say_and_wait("……네, 괜찮아요.");
      await daiya.say_and_wait(
        "몸도 가볍고 움직임이 둔한 느낌도 없어요.",
      );
      era.printButton("「무리하지는 마」", 1);
      await era.input();
      await daiya.say_and_wait("무리는 부상의 원인이죠?");
      await daiya.say_and_wait(
        "『텐노상(봄)』이 끝난 뒤에는 피로가 정말 심했어요. 몸소 실감했죠.",
      );
      await era.printAndWait(
        "『텐노상(봄)』의 격전 때문에 사토노 다이아몬드의 피로는 한동안 계속되었다.",
      );
      await era.printAndWait(
        "그래서 훈련 강도를 낮추고 회복을 우선했지만 몸이 둔해진 기색은 없다.",
      );
      await daiya.say_and_wait(
        "투표해 주신 여러분께 예정대로 레이스를 보여 드릴 수 있어서 정말 다행이에요.",
      );
      await daiya.say_and_wait("『타카라즈카 기념』, 다녀올게요.");
      await daiya.say_and_wait(
        "키타짱, 오늘도 잘 부탁해.",
      );
      await daiya.say_and_wait("……키타짱?");
      await kita.say_and_wait(
        "어? 아, 다이아! 미안, 미안. 방금 부른 줄 몰랐어.",
      );
      await daiya.say_and_wait("방금 잘 부탁한다고 했어……");
      await kita.say_and_wait("응! 안 질 거야!!");
      await daiya.say_and_wait('…………？');
      await daiya.say_and_wait(
        "……키타짱은 『오사카배』나 『텐노상(봄)』 때 더……",
        true,
      );
      await daiya.say_and_wait("기분 탓이면 좋겠는데……", true);
    };
    f.title = title;
    return f;
  })(),
  we_95_24: (() => {
    const title = "그것은 하나뿐인 빛";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     */
    const f = async (daiya, kita, you, tenn_spr, takz_kin) => {
      await era.printAndWait([
        `${you.name}은(는) 사토노 다이아몬드와 함께 키타산 블랙이 출주하는 `,
        takz_kin,
        "를 관전하러 왔다.",
      ]);
      await daiya.say_and_wait([
        "예정대로 ",
        takz_kin,
        "에 나가다니 키타짱은 정말 튼튼하네요.",
      ]);
      await era.printAndWait([
        "사실 이번 ",
        takz_kin,
        "에는 팬 투표로 사토노 다이아몬드도 출주 자격을 얻었다.",
      ]);
      await era.printAndWait([
        "다만 ",
        tenn_spr,
        `의 격전으로 피로가 심해 안전을 생각해서 이번에는 쉬기로 했다.`,
      ]);
      await era.printAndWait(
        `같은 레이스를 막 마친 키타산 블랙이 계속 출주할 수 있다니 정말 튼튼하다.──그렇게 생각했는데……`,
      );
      await era.printAndWait(
        "중계「힘겹습니다! 키타산 블랙! 앞으로 나가지 못합니다! 평소의 달리기를 보여 주지 못합니다!!」",
      );
      await era.printAndWait(
        "중계「──키타산 블랙, 패배!! 키타산 블랙은 후방 집단에 가라앉았습니다!」",
      );
      await daiya.say_and_wait("……키타짱……");
      await kita.say_and_wait("………………읏.");
      await era.printAndWait(
        "관중 A「야, 키타산 왜 저러지……오늘 상태가 안 좋은가……?」",
      );
      await era.printAndWait(
        "관중 B「왜 『타카라즈카 기념』에서 지는 거야. 질 이유가 없었는데……」",
      );
      await era.printAndWait(
        `관중 C「이건 키타산의 진짜 실력이 아니야!! ${kita.sex}는 다음에 꼭 이겨! 그렇지, 키타산!」`,
      );

      await kita.say_and_wait("…………읏!");
      await daiya.say_and_wait("키타짱!!");
      await era.printAndWait(
        "오늘 키타산 블랙에게는 평소의 날카로움이 없었다. 힘을 다 발휘하지 못한 이유는──",
      );
      await daiya.say_and_wait("하아, 하아…………키타짱.");
      await kita.say_and_wait("과, 관중들의 말……더는 듣고 있을 수가 없어……");
      await kita.say_and_wait("제대로 못 달렸다는 건 나도 알아……");
      await kita.say_and_wait("……읏……하지만…………");
      await kita.say_and_wait("내가 실망시킨 거야────!!");
      await kita.say_and_wait("으아아아아아아아아아아아아아!");
      await daiya.say_and_wait("……키타짱……");
      await daiya.say_and_wait(
        "……키타짱, 오늘은 완벽한 상태에서 달린 게 아니었지……?",
      );
      await kita.say_and_wait(
        "응……흑……오늘 왜 그랬지……이상해서……몸이 무겁고……",
      );
      await kita.say_and_wait(
        "페이스를 올려야 하는 건 아는데……흑, 다리가……점점 안 움직여서……!",
      );
      await kita.say_and_wait("……이렇게 열심히 했는데……");
      await kita.say_and_wait(
        "……『타카라즈카 기념』……흑……팬 투표 1위가 돼서……정말 기뻤어……!",
      );
      await kita.say_and_wait(
        "기대에 보답해야 한다고……그래서 정말, 정말 열심히 했는데!!",
      );
      await kita.say_and_wait("왜 이렇게 된 거야!?");
      await daiya.say_and_wait(
        "아마……몸에 피로가 남아 있던 게 아닐까? 나도 『텐노상(봄)』이 끝나고 피로가 남아 있었어.",
      );
      await era.printAndWait(
        `『텐노상(봄)』의 격전으로 키타산 블랙의 몸에도 피로가 쌓여 있었다.${kita.sex}본인은 깨닫지 못했다.`,
      );
      await era.printAndWait(
        `${kita.sex}는 기대에 보답하고 싶은 마음뿐이라 피로를 느끼지 못했지만, 피로는 사라지지 않고 ${kita.sex}의 몸에 조용히 쌓여 갔다.`,
      );
      await daiya.say_and_wait(
        "너무 열심히 한 거야……키타짱답네.",
      );
      await kita.say_and_wait("……지쳐 있었다고……? 그럴 수가……하지만……");
      await kita.say_and_wait(
        "내가 지쳤다는 것도 몰랐어……그래서 모두의 기대를 저버렸어……",
      );
      await kita.say_and_wait("분해……정말 분해……!");
      await daiya.say_and_wait(
        "──괜찮아. 키타짱이 너무 열심히 했다는 걸 팬분들도 이해해 주실 거야.",
      );
      await daiya.say_and_wait(
        "다들 노력하는 키타짱을 지켜보며 키타짱에게 힘을 받아 온 분들이잖아.",
      );
      await kita.say_and_wait(
        "……그래도 일부러 투표까지 해 줬는데 이런 결과라니……실망했을 거야……",
      );
      await daiya.say_and_wait(
        "……기대에 보답하지 못하면 더는 응원받지 못할 거라고 생각하는 거야……?",
      );
      await kita.say_and_wait(
        "응……눈에 띄지 않던 내가 주목받게 된 건 계속 이겼기 때문이니까……",
      );
      await kita.say_and_wait("계속 이겨서 응원해 주는 사람이 늘어난 거야!");
      await kita.say_and_wait(
        `이기지 못하면 나는 주목받지 못하는 평범한 ${daiya.uma_sex_title}일 뿐이고……`,
      );
      await kita.say_and_wait(
        "다이아처럼 굉장한 막판 스퍼트도 없어. 무기도 없고 노력밖에 모르는 평범한……",
      );
      await daiya.say_and_wait("그게 키타짱의 멋진 점이야.");
      await kita.say_and_wait("네……?");
      await daiya.say_and_wait(
        "흔들리지 않고 노력할 수 있다는 것. 다들 그런 모습을 보고 응원하고 싶어진 거야.",
      );
      await daiya.say_and_wait(
        "키타짱이 여기까지 줄곧 노력해 온 모습을 보고 깊은 애정을 품게 된 거야.",
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 A「키타산 블랙은 매번 전력을 다해 달려서 자꾸 응원하고 싶어져. 정말 흔들림이 없다니까.」`,
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 B「맞아, 맞아! ${kita.sex}은(는) 특별히 눈부시다기보다는 평범하고 우리와 가까운 느낌이야.」`,
      );
      await era.printAndWait(
        `관전을 마치고 온 남성 손님 B「그래서 더 이겼으면 좋겠어! 마치 내가 뭔가 해낸 듯한 기분이 들거든!」`,
      );
      await daiya.say_and_wait(
        "관중분들이 그러셨어. 키타짱이 이기면 자기 일처럼 기쁘다고.",
      );
      await daiya.say_and_wait(
        "『키타산이 노력하니까 나도 힘낼 수 있다』……키타짱은 나와 달리 그런 응원을 받고 있어.",
      );
      await daiya.say_and_wait(
        "가끔은 그런 키타짱이 조금 부럽기도 해.",
      );
      await kita.say_and_wait("아……");
      await era.printAndWait(
        "관중 A「그러니까 『봄 시니어 3관』이네! 꼭 따내라, 키타산!!」",
      );
      await era.printAndWait("관중 A「키타산──! 작년의 설욕을 해라!!」");
      await daiya.say_and_wait(
        "관중이 자기 일처럼 응원해 주는 건 정말 대단한 일이야.",
      );
      await daiya.say_and_wait(
        "팬분들은 강해서 좋아하는 게 아니라 키타짱 그 자체를 사랑하는 거야.",
      );
      await daiya.say_and_wait("그러니 괜찮아.");
      await kita.say_and_wait("다이아……");
      await daiya.say_and_wait(
        "오늘은 정말 실망하셨을지도 몰라. 하지만 팬분들은 아직 키타짱에게 『기대』하고 있어.",
      );
      await kita.say_and_wait("……기대……");
      await daiya.say_and_wait("나도 기대하고 있어.");
      await kita.say_and_wait('…………');
      await daiya.say_and_wait("……키타짱이라면 할 수 있다고 믿으니까.");
      era.drawLine();
      await era.printAndWait(
        `지하 통로를 나온 사토노 다이아몬드는 무언가 생각에 잠긴 듯했다.`,
      );
      await daiya.say_and_wait(
        "……트레이너님은 어떤 제 모습을 보고 싶으세요?",
      );
      era.printButton("「응……? 무슨 뜻이야?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 뜻을 몰라 ${daiya.sex}에게 되물었다.`,
      );
      await daiya.say_and_wait(
        "아까부터 생각했어요. 다들 키타짱에게 자신을 겹쳐 보며 응원한다면 저를 응원하는 분들은 무엇을 보고 계실까요?",
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』로서의 기여……키타짱${kita.sex}는 이미 웃음을 전한다는 기여를 하고 있어요.`,
      );
      await daiya.say_and_wait(
        "저는 무엇을 해야 할지조차 아직 떠오르지 않는데……",
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}계의 발전을 위해 제가 해야 할 일……`,
      );
      await daiya.say_and_wait(
        `${daiya.uma_sex_title}로서 제 달리기가 여러분께 전할 수 있는 것은 무엇일까요……`,
      );
      await era.printAndWait(
        `모두가 사토노 다이아몬드에게 바라는 것.${daiya.sex}의 달리기는 팬들에게 어떤 꿈을 보여 줄까.`,
      );
      await era.printAndWait(
        `『일류 ${daiya.uma_sex_title}』는 저마다 다른 꿈을 전할 수 있다.`,
      );
      era.printButton("「나는 너에게서 『가능성』을 느껴」", 1);
      await era.input();
      await daiya.say_and_wait("가능성……");
      await era.printAndWait(
        `흔들리지 않는 의지를 품은 ${daiya.sex}에게는 불가능조차 뒤집을 듯한 힘이 깃들어 있다.`,
      );
      await era.printAndWait(
        `사토노 가문을 오랫동안 옭아맨 징크스를 극복한 ${daiya.sex}라면 무엇이든 할 수 있을지도 모른다──그렇게 느끼게 한다.`,
      );
      await daiya.say_and_wait("그렇군요……감사해요.");
      await daiya.say_and_wait("……조금 더 혼자 생각해 볼게요……");
      await era.printAndWait(
        `사토노 다이아몬드는 다시 깊이 생각에 잠겼다.${daiya.sex}의 생각을 방해하지 않도록 둘은 말없이 역으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = "여름 합숙(시니어급) 시작!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (
      daiya,
      kita,
      you,
      tenn_spr,
      takz_kin,
      japa_cup,
      arim_kin,
    ) => {
      await era.printAndWait("매년 열리는 여름 합숙이 올해도 시작됐다!");
      await kita.say_and_wait("다이아, 잠깐 괜찮아?");
      await daiya.say_and_wait("무슨 일이야?");
      await kita.say_and_wait([
        "있잖아……",
        takz_kin,
        " 때 다이아가 해 준 말.",
      ]);
      await kita.say_and_wait("다들 나한테 『기대』하고 있다고……");
      await daiya.say_and_wait("응.");
      await kita.say_and_wait(
        "나름대로 생각해 봤어. 다들 뭘 『기대』하는 걸까 하고.",
      );
      await kita.say_and_wait("그래서……정했어!!");
      await kita.say_and_wait(
        "내가 노력하는 모습이 모두의 힘이 된다면 포기하지 않는 모습을 계속 보여 줄 거야!",
      );
      await kita.say_and_wait(
        "바닥에서 역전하는 모습을 다들 기대하는 것 같아!",
      );
      await kita.say_and_wait(
        "의지로 절대 포기하지 않고 끝까지 끈질기게 버틴다. 그게 내 달리기야!",
      );
      await daiya.say_and_wait("후후후! 그거야말로 키타짱이지!");
      await kita.say_and_wait([
        "그러니까 목표는 ",
        tenn_spr,
        '、',
        japa_cup,
        '、',
        arim_kin,
        "에서 전부 이기는 것!",
      ]);
      await kita.say_and_wait("즉, 테이오도 맥퀸도 이기겠어!!");
      await kita.say_and_wait(
        "계속 동경해 온 상대니까 얼마나 강한지, 이기기가 얼마나 어려운지도 알아……",
      );
      await kita.say_and_wait("그래서 더 이기고 싶어!! 동경하던 상대를 뛰어넘고 싶어!");
      await kita.say_and_wait([
        takz_kin,
        "에서 실망시킨 만큼 동경을 뛰어넘는 모습을 보여 주고 싶어!",
      ]);
      await daiya.say_and_wait("……나도 같아. 동경을 뛰어넘고 싶어.");
      await daiya.say_and_wait("승자의 자리는 키타짱에게 양보하지 않을 거야!");
      await kita.say_and_wait("응!! 서로 힘내자! 그럼 나중에 봐!");
      await daiya.say_and_wait("에헤헤, 다행이야……!");
      await daiya.say_and_wait(
        "아, 맞다. 트레이너님, 부탁드리고 싶은 게 있어요……",
      );
      await daiya.say_and_wait(
        "앞으로의 훈련 방침 말이에요. 어떤 상황에도 대응할 수 있도록 파워를 키우고 싶어요.",
      );
      await daiya.say_and_wait(
        "얼마 전에 연구하려고 맥퀸의 레이스 영상을 봤는데요……",
      );
      await daiya.say_and_wait(
        "나쁜 경기장 상태에도 흔들리지 않는 강한 다리 힘. 힘차게 내딛는 발걸음이 정말 인상적이었어요.",
      );
      await daiya.say_and_wait(
        "저에게도 그런 다리 힘이 있다면……집단을 뚫고 앞으로 나가기 쉬워져서 앞으로의 레이스에도 도움이 될 거예요.",
      );
      await daiya.say_and_wait(
        "……아니요──지금 부족한 점을 보완하는 건 맥퀸 일행을 이기기 위해 필요한 일이에요.",
      );
      era.printButton("「그렇구나」", 1);
      await era.input();
      await daiya.say_and_wait(
        "맥퀸 일행이 주신 귀한 기회잖아요. 완벽한 상태로 도전해서 이기고 싶어요……!",
      );
      await daiya.say_and_wait(
        `그리고 제가 『일류 ${daiya.uma_sex_title}』라면 언젠가는 해외 원정도 생각해야 해요.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 신년회에서 해외 원정 이야기가 나왔던 것을 떠올렸다.`,
      );
      await era.printAndWait(
        "더 험난한 해외 무대에서 성과를 내려면 확실히 충분한 파워가 필요하다.",
      );
      era.printButton("「갑자기 해외를 목표로 삼은 이유가 뭐야?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "결정한 건 아니에요. 다만……전에 제 달리기가 여러분께 무엇을 전할 수 있을지 상담드렸잖아요?",
      );
      await daiya.say_and_wait(
        "그때 트레이너님이 주신 답이 『가능성』이었고, 거기서 해외 원정이 떠올랐어요.",
      );
      await daiya.say_and_wait(
        `일본의 ${daiya.uma_sex_title}계가 오랫동안 넘지 못했던 프랑스의 전통 있는 큰 레이스──`,
      );
      await daiya.say_and_wait(
        "사토노 가문의 징크스를 깬 저라면 새로운 역사를 쓸 가능성을 보여 드릴 수 있을지도 몰라요.",
      );
      await daiya.say_and_wait(
        "그렇다면 지금부터 해외 원정도 미래의 목표에 넣어 두는 게 좋을지도 모르죠.",
      );
      era.printButton("「알았어」", 1);
      await era.input();
      await era.printAndWait(
        `파워를 키우면 ${daiya.sex}의 말대로 대응력이 높아진다.${you.name}에게 거절할 이유는 없었다.`,
      );
      await daiya.say_and_wait(
        "죄송해요. 부담이 늘어나겠네요. 잘 부탁드려요.",
      );
      await daiya.say_and_wait("힘이 넘치는 새로운 달리기……반드시 익히겠어요!");
      await daiya.say_and_wait(
        "그러지 못하면 맥퀸을 볼 면목이 없어요!",
      );
      await era.printAndWait(
        "동경하던 상대에게 도전하고 앞으로의 방향도 정한 사토노 다이아몬드는 의욕이 넘쳤다.",
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = "여름 합숙(시니어급) 종료";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, dictus, kita) => {
      await daiya.say_and_wait("하아, 하아, 하아……!");
      await daiya.say_and_wait(
        "다……다리에 부담이 꽤 크네요……그래도 발걸음은 확실히 단단해지고 있어요.",
      );
      await daiya.say_and_wait("이 달리기를 반드시 제 것으로 만들겠어요……!");
      await daiya.say_and_wait("한 바퀴 더……!");
      await daiya.say_and_wait("하아아아아아아아!!");
      await dictus.say_and_wait(
        `……트레이너. 참견일지도 모르지만 ${daiya.sex}는 괜찮은 건가요……?`,
      );
      await dictus.say_and_wait(
        "너무 힘이 들어갔다고 할까요. 힘으로만 밀어붙이는 것 같습니다. 다이아다운 달리기가 아니에요.",
      );
      era.printButton("「응……」", 1);
      await era.input();
      await era.printAndWait(
        "메지로 맥퀸과의 『텐노상(가을)』과 향후 해외 진출도 내다보며 발을 힘차게 내딛는 훈련을 시작했다.",
      );
      await era.printAndWait(
        "그런데 예상하지 못한 일이 생겼다. 사토노 다이아몬드의 달리기가 흐트러지기 시작했다.",
      );
      await era.printAndWait("힘을 주는 방식이 한쪽으로 치우친 달리기가 되어 버렸다.");
      await dictus.say_and_wait(
        "모래사장을 달리는 탓도 있겠죠. 일시적인 현상이길 바랍니다.",
      );
      await era.printAndWait(
        "이쿠노 딕터스의 말대로였으면 좋겠다……일단 조금 더 지켜보자.",
      );
      await era.printAndWait("어느새 여름 합숙 마지막 날이 되었다.");
      await daiya.say_and_wait("키타짱, 돌아가는 버스 같이 앉자♪");
      await kita.say_and_wait("짐은 벌써 올려놨어! 가자!");
      await kita.say_and_wait("……응? 다이아?");
      await daiya.say_and_wait("……새근…………새근…………");
      await kita.say_and_wait("잠들었네……");
      await daiya.say_and_wait("음……더 힘차게 달려야 해……");
      await kita.say_and_wait("후후, 합숙 동안 다이아 정말 열심히 했지.");
      await kita.say_and_wait("……잘 자, 다이아.");
    };
    f.title = title;
    return f;
  })(),
  ws_95_33: (() => {
    const title = "저 멀리 앞을, 계속 쫓아서";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     */
    const f = async (daiya, kita, you, takz_kin, kyot_dai, tenn_sho) => {
      await daiya.say_and_wait("…………핫!");
      await era.printAndWait(
        "잔디 훈련 코스로 돌아왔는데도 사토노 다이아몬드의 달리기는 여전히 이상하다.",
      );
      await era.printAndWait(
        "아니, 완전히 무너졌다고 해도 좋을 정도다. 기록도 크게 떨어졌다.",
      );
      await daiya.say_and_wait("………………트레이너님.");
      await daiya.say_and_wait([
        "이대로 ",
        tenn_sho,
        "까지 맞출 수 있을까요……?",
      ]);
      era.printButton("「지금부터 바로잡으면 아슬아슬하게 맞출 수 있을지도 몰라」", 1);
      await era.input();
      await era.printAndWait([
        "전초전인 ",
        kyot_dai,
        "는 100%의 상태로 나가지 않아도 되지만 ",
        tenn_sho,
        "까지 이제 시간이 얼마 없다.",
      ]);
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait("……우선 원래 달리기를 되찾겠어요.");
      await daiya.say_and_wait(
        "이런 상태로 맥퀸과의 승부에 나설 수는 없으니까요……!",
      );
      era.printButton("「그래, 『텐노상(가을)』까지 바로잡자!」", 1);
      await era.input();
      await era.printAndWait(
        `${daiya.sex}에게도 힘든 결정일 것이다. 그 마음에 보답하기 위해서라도 ${you.name}은(는) ${daiya.sex}를 완벽한 상태로 『텐노상(가을)』에 내보내겠다!`,
      );
      await daiya.say_and_wait("하아, 하아…………왜……?");
      await daiya.say_and_wait(
        "예전에는 더 빠르게 발을 움직일 수 있었는데……그러니까……",
      );
      await daiya.say_and_wait("읏……!");
      await era.printAndWait(
        `하지만 ${daiya.sex}는 원래 달리기를 되찾지 못했다.`,
      );
      await era.printAndWait(
        `${daiya.sex}는 원래 달리기로 돌아가려는 조바심에 균형이 더 흐트러졌고, 그 때문에 또 초조해져 한 부분에만 신경을 썼다.`,
      );
      await era.printAndWait(
        "이 악순환을 어떻게 끊을까.──사토노 다이아몬드가 정말 원래 달리기를 잊었다면 차라리……",
      );
      era.drawLine();
      await kita.say_and_wait("실례할게. 트레이너, 상의할 게 뭐야?");
      era.printButton("「사실 다이아의 달리기 말인데……」", 1);
      await era.input();
      await kita.say_and_wait(
        "아, 대충 알겠어. 요즘 다이아의 달리기, 확실히 이상하지.",
      );
      await era.printAndWait(
        `${you.name}은(는) 설명했다. 사토노 다이아몬드가 원래 달리기를 되찾으려 하지만 잘되지 않아 막막한 상태라고.`,
      );
      await kita.say_and_wait("응, 응……그럼 나랑 한 번 달려 볼래?");
      await kita.say_and_wait(
        "해결 방법은 모르지만 직접 달려 보면 뭔가 잡힐지도 모르잖아!",
      );
      era.drawLine();
      await daiya.say_and_wait("키타짱과 함께 달린다고?");
      await kita.say_and_wait([
        "응! ",
        takz_kin,
        "와 같은 2200미터. 그때의 감각을 되짚어 보고 싶어.",
      ]);
      await daiya.say_and_wait("……트레이너님.");
      era.printButton("「그 부탁, 들어주자!」", 1);
      await era.input();
      await daiya.say_and_wait([
        "……그렇네요. 거리도 마침 ",
        tenn_sho,
        "와 ",
        kyot_dai,
        "의 중간이니 저에게도 좋은 훈련이 되겠어요.",
      ]);
      await kita.say_and_wait("고마워, 다이아!!");
      await daiya.say_and_wait("정말……고맙다고 해야 할 사람은 나야.");
      await era.printAndWait(
        "그렇게 키타산 블랙과의 2200미터 달리기가 시작됐다.",
      );
      await kita.say_and_wait("하아아아아아아아!");
      await daiya.say_and_wait(
        "여기서 차이가 벌어지면 안 돼. 페이스를 조금 올려서……",
        true,
      );
      await daiya.say_and_wait("하아아……읏! 윽……!");
      await daiya.say_and_wait(
        "……앞으로 나갈 수 없어! 발걸음이 무거워……? 안 돼, 차이가 벌어져……!",
        true,
      );
      await daiya.say_and_wait("……생각대로 달릴 수 없어……", true);
      await daiya.say_and_wait("……하아, 하아………………");
      await kita.say_and_wait("으음──다이아, 상태가 안 좋은 것 같네.");
      await kita.say_and_wait("무리하지 말고 오늘은 여기까지 하자!");
      await daiya.say_and_wait("안 돼, 아직……");
      await kita.say_and_wait("하지만 다이아, 병주에도 집중하지 못하는 것 같아.");
      await kita.say_and_wait(
        "집중하지 못하면 다칠지도 몰라. 오늘은 쉬자.",
      );
      era.printButton("「그래, 오늘은 여기까지 하자. 푹 쉬어」", 1);
      await era.input();
      await daiya.say_and_wait("……알겠어요. 수고하셨어요.");
      await era.printAndWait(
        `사토노 다이아몬드는 ${daiya.sex}가 자신의 부상을 걱정하는 마음을 알아챈 모양이다. 얌전히 고개를 끄덕였다.`,
      );
      await kita.say_and_wait("있잖아, 아직 이르니까 조금 산책하다 돌아가자!");
      await daiya.say_and_wait("키타짱……미안해, 나는──");
      await kita.say_and_wait("가자!!");
      await daiya.say_and_wait("앗! ……키타짱, 나……!");
      await kita.say_and_wait("배고파! 먼저 상점가에 가자!");
      era.drawLine();
      await kita.say_and_wait("음───! 맛있다!");
      await kita.say_and_wait("다이아는 무슨 맛으로 골랐어?");
      await daiya.say_and_wait(
        "매콤한 치즈 핫도그랑 민트초코, 반반이야.",
      );
      await kita.say_and_wait("또, 또 이상한 조합……");
      await daiya.say_and_wait(
        "색다른 조합이 더 재미있잖아. 맵고 차가운 자극적인 맛이야♪",
      );
      await kita.say_and_wait("다이아는 도전자네.");
      await kita.say_and_wait(
        "목말라. 음료수 사자! 사서 경치 좋은 곳에서 마시자!",
      );
      await daiya.say_and_wait(
        "키타짱! 손을……갑자기 잡아당기면 붕어빵이 떨어지잖아!",
      );
      await kita.say_and_wait("미안, 미안! 그래도 안 떨어졌지!");
      await daiya.say_and_wait(
        "……어릴 때도 이렇게 키타짱이 손을 잡아끌고……",
        true,
      );
      await daiya.print_and_wait(
        "【어린 다이아「키타짱……아직 더 걸어야 해……?」】",
      );
      await kita.print_and_wait("【어린 키타산「이제 다 왔어. 봐……」】");
      await daiya.print_and_wait("【어린 다이아「와아~! 높다……!」】");
      await kita.print_and_wait(
        "【어린 키타산「여기가 내 비밀 기지야! 계속 다이아를 데려오고 싶었어!」】",
      );
      await daiya.say_and_wait("여러 곳에 데려가 줬지……", true);
      await kita.say_and_wait("하아, 하아……단숨에 올라오니까 역시 힘드네……!");
      await daiya.say_and_wait("응……하아, 하아……");
      await daiya.say_and_wait(
        "예전에도 여기 왔었어……그때도 키타짱이 손을 잡아끌어 줬지.",
      );
      await daiya.say_and_wait(
        "여기뿐만 아니라 여러 곳으로. 키타짱이 바깥세상을 알려 줬어.",
      );
      await daiya.say_and_wait(
        "……나는 줄곧 키타짱을 언니처럼 생각했어.",
      );
      await kita.say_and_wait(
        "아하하, 다이아랑 있을 때는 최대한 언니답게 굴려고 했지!",
      );
      await kita.say_and_wait(
        "다이아 앞에서 걸으며 여러 곳으로 데려가고……",
      );
      await kita.say_and_wait(
        "──있잖아, 다이아! 경주하자! 강까지 누가 더 빠른지!",
      );
      await daiya.say_and_wait("어? 경주? 갑작스럽네?");
      await kita.say_and_wait(
        "조금 달리는 정도는 괜찮잖아. 자! 준비……땅!!",
      );
      await daiya.say_and_wait("잠깐……치사해, 키타짱!!");
      await kita.say_and_wait("헤헤헤, 내가 이겼다! 다음은……공원까지!");
      await daiya.say_and_wait("어!? 정말……!");
      await kita.say_and_wait("빨리 안 오면 두고 간다!");
      await kita.print_and_wait(
        "【어린 키타산「빨리, 빨리, 다이아! 빨리──! 두고 간다!」】",
      );
      await daiya.print_and_wait(
        "【어린 다이아「기다려──! 키타짱!!」】",
      );
      await daiya.print_and_wait(
        "【어린 다이아「하아, 하아……에헤헤, 조금만 더 가면 됐는데……!」】",
      );
      await daiya.say_and_wait("후우……뒤처지지 않을 거야!");
      await kita.say_and_wait("그럼 마지막은 기숙사까지! 기숙사가 결승점이야!");
      await daiya.say_and_wait("……후후, 이번에는 꼭 따라잡을게.");
      await daiya.say_and_wait(
        "……예전에도 이렇게 그저 저 등만 쫓았지……",
        true,
      );
      await daiya.say_and_wait("그저 키타짱을 따라잡고 싶어서.", true);
      await daiya.say_and_wait("……좋아──!");
      await daiya.say_and_wait("……어라? 나……평소처럼 달리고 있어……", true);
      await daiya.say_and_wait("아무 생각 없이……그저 자연스럽게 달리고 있어……!", true);
      await daiya.say_and_wait(
        "……맞아. 키타짱을 쫓을 때 나는 언제나 달리는 데만 집중했어……",
        true,
      );
      await daiya.say_and_wait(
        "그저 상상하는 거야──저 등을 따라잡고 앞질렀을 때 키타짱이 어떤 표정을 지을지.",
        true,
      );
      await daiya.say_and_wait(
        "그러면 즐거워서……달리는 게 즐거워서!!",
        true,
      );
      await kita.say_and_wait("골인────!");
      await daiya.say_and_wait("하아, 하아, 하아…………");
      await daiya.say_and_wait("…………키타짱.");
      await kita.say_and_wait("왜 그래, 다이아?");
      await daiya.say_and_wait("에헤헤, 정말 즐겁게 달렸어!");
      await kita.say_and_wait("응!! 나도!");
      await daiya.say_and_wait("다음에는 꼭 앞지를 거야!");
      await kita.say_and_wait("…………! 헤헤, 언제든 덤벼!!");
      await daiya.say_and_wait("마음 가는 대로 달리자. 예전처럼……", true);
    };
    f.title = title;
    return f;
  })(),
  before_kyot_dai_s: (() => {
    const title = "교토 대상전을 향해";
    /** @param {CharaTalk} daiya サトノダイヤモンド */
    const f = async (daiya) => {
      await era.printAndWait(
        "『교토 대상전』 출발 전. 관중들 사이에 걱정스러운 분위기가 감돌았다.",
      );
      await era.printAndWait(
        `관중 C「보도에 따르면 사토노 다이아몬드 상태가 안 좋다던데. 오늘 ${daiya.sex}는 괜찮을까……」`,
      );
      await era.printAndWait(
        `관중 A「기자까지 ${daiya.sex}가 이상하다고 생각한다면 꽤 심각한 거 아니야……?」`,
      );
      await era.printAndWait("관중 C「그러게, 무슨 일이 있었을까……」");
      await daiya.say_and_wait("후우……");
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "아, 네……오늘만큼은 조금 긴장돼서요……",
      );
      await era.printAndWait(
        "사토노 다이아몬드의 상태는 조정 끝에 조금씩 돌아오고 있다. 하지만 그 일 이후 첫 레이스다.",
      );
      await daiya.say_and_wait("……오늘은 괜찮아요.");
      await daiya.say_and_wait("키타짱과 달리며 떠올렸거든요……");
      await daiya.say_and_wait("그저 앞을 보고 달리던 감각을요.");
      await daiya.say_and_wait("따라잡고 싶어서 한마음으로 달리던 감각을요.");
      await daiya.say_and_wait("저는 달리는 이유를 착각했을 뿐이었어요.");
      era.printButton("「달리는 이유……?」", 1);
      await era.input();
      await daiya.say_and_wait(
        `네. 지금까지 저는 『일류 ${daiya.uma_sex_title}』답게 달리는 것이 제 의무라고 생각했어요.`,
      );
      await daiya.say_and_wait(
        "맥퀸을 뛰어넘고 해외로 나갈 수 있다고 느끼게 하는 달리기──원래는 그렇게 생각했죠.",
      );
      await daiya.say_and_wait("하지만 그건 아니에요.");
      await daiya.say_and_wait("──저는 여러분이 가능성을 느꼈으면 좋겠어요.");
      await daiya.say_and_wait(
        `사토노 가문의 숙원을 이루고 싶다, 맥퀸을 뛰어넘고 싶다, 『일류 ${daiya.uma_sex_title}』로서 ${daiya.uma_sex_title}계에 기여하고 싶다.`,
      );
      await daiya.say_and_wait(
        "그것들은 전부 키타짱을 따라잡고 싶다는 마음과 같아요.",
      );
      await daiya.say_and_wait("모두 제 자신의 소망이에요.");
      await daiya.say_and_wait("누군가를 위해서가 아니라 자신의 소망을 위해 달리는 거예요.");
      await daiya.say_and_wait(
        "초심을 착각해서 길을 잃고 목표를 향해 나아가는 방법을 잊어버린 거예요.",
      );
      await daiya.say_and_wait(
        "사실은 그저 앞을 보고 달리면 됐어요. 제 마음 가는 대로요.",
      );
      await daiya.say_and_wait("마음 가는 대로 달리는 건 즐거운 일이에요.");
      await daiya.say_and_wait("달리는 게 즐거워요. 그 감각을 되찾았어요.");
      era.printButton("「그런 거였구나……」", 1);
      await era.input();
      await era.printAndWait(
        `그 말은 틀리지 않았다. 가문의 숙원을 짊어지는 것도 ${daiya.sex}스스로 선택한 길이라고 전에 말했었다.`,
      );
      await era.printAndWait(`${daiya.sex}는 자신의 꿈을 향해 나아가고 있다.`);
      await daiya.say_and_wait(
        `그러니 오늘은 『일류 ${daiya.uma_sex_title}』가 되고 싶다는 꿈만을 품고 레이스에 나설게요.`,
      );
      await daiya.say_and_wait("──사토노 다이아몬드답게 달리겠어요.");
    };
    f.title = title;
    return f;
  })(),
  kyot_dai_win_s: (() => {
    const title = "결과";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await you.say_as_passer_by_and_wait(
        "중계",
        "사토노 다이아몬드, 선두로 골인!",
      );
      await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
      await you.say_as_passer_by_and_wait(
        "관중 C",
        `뭐야, ${daiya.sex}의 상태는 나쁘지 않았잖아!`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        `${daiya.sex}, 정말 멋진 달리기였어!! 다이아는 달릴 때 그저 앞을 보고 가속하지……`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "아무것에도 흔들리지 않는 그 모습. 난 정말 좋아해……",
      );
      await mcqueen.say_and_wait("……후후, 당연한 결과예요.");
      await mcqueen.say_and_wait(
        "여기서 진다면 제 상대가 될 수 없으니까요.",
      );
      await daiya.say_and_wait("……네!");
      await daiya.say_and_wait("이게 내 달리기……!");
      await daiya.say_and_wait("트레이너님, 드디어 마음껏 달렸어요!");
      era.printButton("「그렇게 보였어!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "트레이너님도 문제없다고 하시니 정말 안심이에요!",
      );
      era.printButton("「발걸음에 힘이 실려 있었어」", 1);
      await era.input();
      await era.printAndWait(
        `아직 아주 강하다고 할 정도는 아니지만 ${you.name}은(는) 발걸음에서 힘과 안정감이 느껴졌다고 ${daiya.sex}에게 전했다.`,
      );
      await daiya.say_and_wait(
        "정말인가요……? 저는 그냥 자연스럽게 달렸을 뿐인데……",
      );
      era.printButton("「이제 그 달리기가 몸에 익고 있는 거야」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 생각한다.${daiya.sex}가 자신의 달리기를 되찾았기에 그동안의 훈련 성과도 드러난 것이리라.`,
      );
      await daiya.say_and_wait(
        "다행이에요……! 그렇다면 안심하고 발을 내딛는 힘을 계속 기를 수 있겠어요……!",
      );
      await daiya.say_and_wait(
        "즉, 해외 레이스에 나갈 가능성도 있다는 거죠……",
      );
      era.printButton("「너에게 맞는 방법을 함께 찾자」", 1);
      await era.input();
      await era.printAndWait(
        `앞으로 훈련하다 다시 달리기에 영향이 생길 수도 있다. 하지만 지금의 ${daiya.sex}라면 괜찮을 것이다.`,
      );
      await era.printAndWait(
        `달리는 이유를 되찾은 ${daiya.sex}라면 자신에게 맞는 성장 방법을 찾을 수 있을 것이다.`,
      );
      await daiya.say_and_wait("네, 걱정 마세요. 더는 헤매지 않아요.");
      await daiya.say_and_wait("오직 꿈만 바라보며 앞으로 나아갈게요!");
      era.printButton("「『텐노상(가을)』에서도 그대로 달려」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네! 드디어 맥퀸과……! 그리고 키타짱도!!",
      );
      await daiya.say_and_wait("계속 꿈꿔 온 무대가 드디어……!");
      await daiya.say_and_wait(
        `그리고 이기면 『일류 ${daiya.uma_sex_title}』의 실력을 갖췄다고 증명할 수 있어요.`,
      );
      await daiya.say_and_wait(
        `동경하던 분과 오랜 라이벌……${daiya.couple_title}와 승부할 수 있는 이 기회──`,
      );
      await daiya.say_and_wait("모든 것을 걸 각오로 도전하겠어요!!");
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = "텐노상(가을)을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, kita, you) => {
      await kita.say_and_wait("──드디어 이날이다……『텐노상(가을)』.");
      await daiya.say_and_wait("네……! 드디어 맥퀸과……!");
      await daiya.say_and_wait("제가 동경하던 메지로 맥퀸──", true);
      await daiya.say_and_wait(
        `메지로 가문의 ${daiya.uma_sex_title}로서 ${daiya.sex}의 책무를 다한 『일류 ${daiya.uma_sex_title}』。`,
        true,
      );
      await daiya.say_and_wait(
        `${daiya.sex}의 고결하고 기품 있는 모습을 동경하며 저도 그렇게 되고 싶었어요.`,
        true,
      );
      await daiya.say_and_wait(
        "트레센 학원에 들어온 뒤에는 가까이서 맥퀸의 달리기를 보는 것만으로도 정말 기뻤죠.",
        true,
      );
      await daiya.say_and_wait(
        "사토노 가문의 숙원을 이루려 꿈을 계속 쫓다 보니……어느새 여기까지 왔네요.",
        true,
      );
      await daiya.say_and_wait("드디어 동경하던 분과 같은 무대에 설 수 있어요──", true);
      await daiya.say_and_wait(
        "……그리고 오늘, 저는 라이벌로서 동경하던 상대에게 도전하겠어요!!",
        true,
      );
      await daiya.say_and_wait(
        "전설적인 최강의 스테이어를 뛰어넘는다. 제가 그 가능성을 보여 드리겠어요!",
        true,
      );
      await era.printAndWait(
        "중계「이어서 등장하는 키타산 블랙과 사토노 다이아몬드! 두 사람, 동시 입장!」",
      );
      await era.printAndWait("관중 A「다이아──! 힘내────!!」");
      await era.printAndWait("관중 B「『텐노상(가을)』도 이겨라, 키타산!!」");
      await era.printAndWait(
        `중계「기다리셨습니다!! ${daiya.sex}의 출주를 누가 예상했겠습니까!?」`,
      );
      await era.printAndWait(
        `중계「『텐노상(봄)』 연패를 달성한 ${daiya.uma_sex_title}, 메지로 맥퀸!!」`,
      );
      await you.say_as_passer_by_and_wait("관중", "오오오오오오오오오!!");
      await era.printAndWait(
        "중계「이 함성을 들어 보십시오! 도쿄 경기장 전체가 흔들립니다!!」",
      );
      await era.printAndWait(
        "중계「폭우 속에서도 이토록 많은 관중이 찾아왔습니다. 꿈의 대결을 한눈에 보기 위해서입니다!」",
      );
      await daiya.say_and_wait("……맥퀸은 역시 대단하네.");
      await kita.say_and_wait("응……하지만 우리도 질 수 없어!");
      await daiya.say_and_wait("맞아! 여기까지 온 우리라면!");
      await daiya.say_and_wait("반드시 맥퀸을 이길 수 있어!");
      await era.printAndWait(
        "두 사람「1착은 내 거야!! 1착은 내 거라고!!」",
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = "도달";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, mcqueen, kita, you, tenn_sho, arim_kin) => {
      await daiya.say_and_wait(
        "경기장 상태가 나빠도 상관없어!! 내 달리기로 결승점을 향하면 돼!",
        true,
      );
      await daiya.say_and_wait("하아아아아아아아아아아아아!!");
      await you.say_as_passer_by_and_wait(
        "중계",
        "1착은 사토노 다이아몬드────!! 최상급 다이아몬드에는 흐림이 없습니다! 맑고 투명한 빛입니다!",
      );
      await you.say_as_passer_by_and_wait(
        "관중",
        "(와아아아아아아아아아아아!)",
      );
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "마음을 뒤흔드는 달리기였어, 사토노 다이아몬드!! 맥퀸을 이기다니 흠잡을 데 없는 실력이야!",
      );
      await you.say_as_passer_by_and_wait(
        "관중 A",
        "진흙투성이가 되어도 의연하고 흔들리지 않는……저 모습, 정말 아름다워……",
      );
      await kita.say_and_wait(
        "으아아아아아아아아!! 분해, 분해, 분해!!",
      );
      await kita.say_and_wait("내 상태는 완벽했는데!");
      await kita.say_and_wait("……하지만 그만큼 다이아가 대단했다는 거야.");
      await kita.say_and_wait("나는 더 정진해야겠어!");
      await daiya.say_and_wait(
        "응, 나도 키타짱에게 추월당하지 않도록 노력할게.",
      );
      await mcqueen.say_and_wait("다이아, 훌륭한 달리기였어요.");
      await daiya.say_and_wait("맥퀸! 감사해요. 하지만──");
      await mcqueen.say_and_wait("무슨 일인가요?");
      await daiya.say_and_wait(
        "거리는 제가 유리했어요. 스테이어인 맥퀸은 장거리가 더 특기잖아요.",
      );
      await mcqueen.say_and_wait([
        "네, 하지만 ",
        tenn_sho,
        "를 지정한 건 저예요.",
      ]);
      await daiya.say_and_wait("꼬, 꼭 장거리에서도 함께 달리고 싶어요!!");
      await daiya.say_and_wait("장거리에서 맥퀸을 이기고 싶어요……!");
      await mcqueen.say_and_wait('……！');
      await teio.say_as_unknown_and_wait("훌륭한 마음가짐이네~, 다이아!");
      await daiya.say_and_wait("테이오!");
      await teio.say_and_wait("그럼 이렇게 하는 건 어때?");
      await teio.say_and_wait("우리 모두 같은 레이스를 달리자!!");
      await daiya.say_and_wait("……! 네, 기꺼이! 그 기회를 주세요!!");
      await mcqueen.say_and_wait(
        "정말……테이오도 다이아와 달리고 싶은 거죠?",
      );
      await teio.say_and_wait("헤헤♪ 들켰네.");
      await mcqueen.say_and_wait(['──', arim_kin, '！']);
      await mcqueen.say_and_wait([
        "여러분만 괜찮다면 ",
        arim_kin,
        "에서 다시 겨뤄요!",
      ]);
      await teio.say_and_wait("나도 나갈게! 팬 투표 잘 부탁해!");
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "진짜!? 꼭 투표할게! 테이오, 맥퀸!!",
      );
      await daiya.say_and_wait("맥퀸……! 감사합니다!!");
      await daiya.say_and_wait("저, 『아리마 기념』에 나갈게요!!");
      await kita.say_and_wait(
        "저도요!! 그때 잘 부탁드립니다!!",
      );
      await you.say_as_passer_by_and_wait(
        "관중",
        "우오오오오오오오오오오오!!",
      );
      await era.printAndWait([
        "6만 명의 함성이 관중석을 뒤흔든다.",
        arim_kin,
        "는 세기의 꿈 같은 승부가 될 것이다.",
      ]);
      await era.printAndWait([
        "후추의 뜨거운 함성 앞에서 ",
        arim_kin,
        "를 피한다는 선택지는 존재하지 않았다.",
      ]);
      await daiya.say_and_wait("──저기, 맥퀸!");
      await daiya.say_and_wait("한 가지 여쭤봐도 될까요?");
      await mcqueen.say_and_wait("무엇인가요?");
      await daiya.say_and_wait(
        "맥퀸은……왜 저희와 달리려고 하셨나요?",
      );
      await mcqueen.say_and_wait(
        `……두 분의 레이스가 제 투지에 불을 붙였어요. 그리고 메지로 가문의 ${daiya.uma_sex_title}로서 그래야 한다고 생각했죠.`,
      );
      await daiya.say_and_wait(`메지로 가문의 ${daiya.uma_sex_title}로서……`);
      await mcqueen.say_and_wait(
        "다이아가 알고 싶은 건 지금 제 입장과 마음가짐이군요?",
      );
      await daiya.say_and_wait(
        `네. 맥퀸은 사토노 가문이 목표로 하는 『일류 ${daiya.uma_sex_title}』로서 여러 방면에서 활약하고 계세요.`,
      );
      await daiya.say_and_wait(
        `그러니 이번에 저희와 달리기로 결정하신 것도 『일류 ${daiya.uma_sex_title}』로서의 판단이지 않을까 해서요.`,
      );
      await mcqueen.say_and_wait("네, 맞아요.");
      await mcqueen.say_and_wait(
        `──새로움이 없다는 말이 나올 만큼 절대적인 실력으로 ${daiya.uma_sex_title}계에 메지로 가문의 이름을 떨치는 것. 그것이 제 자신에게 부과해 온 과제예요.`,
      );
      await mcqueen.say_and_wait(
        `그러니 메지로 가문과 제가 특히 중시하는 『텐노상(봄)』에……강력한 ${daiya.uma_sex_title}가 출주한다면 나서야 하죠.`,
      );
      await mcqueen.say_and_wait(
        `그뿐만이 아니에요. 트윙클 시리즈에서 좋은 성적을 거둔 ${daiya.uma_sex_title}와 달리는 것은 물론이고──`,
      );
      await mcqueen.say_and_wait(
        `여러분처럼 신세대에서 두각을 드러낸 ${daiya.uma_sex_title}의 도전도 받아들여 압도적인 실력으로 이기는 거예요.`,
      );
      await mcqueen.say_and_wait(
        "그렇게──메지로 가문의 명성이 결코 시들지 않도록 하는 것.",
      );
      await mcqueen.say_and_wait("그것이 지금 제 입장과 마음가짐이에요.");
      await daiya.say_and_wait("메지로 가문이 계속 실력을 자랑할 수 있도록……");
      await mcqueen.say_and_wait(
        "……하지만 사토노 가문과 메지로 가문의 입장은 같지 않아요.",
      );
      await mcqueen.say_and_wait(
        `사토노 가문의 ${daiya.uma_sex_title}계 역사는 다이아에게서 시작된다고 해도 좋겠죠.`,
      );
      await mcqueen.say_and_wait(
        "그러니 다이아는 저와 다른 길을 택할 수 있을 거예요.",
      );
      await daiya.say_and_wait("……사토노 가문의 역사는 저에게서 시작된다……");
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait(
        "감사해요, 맥퀸. 잘 생각해 볼게요.",
      );
      await mcqueen.say_and_wait("네, 잘 생각해 보세요.");
      await mcqueen.say_and_wait(
        "다이아의 앞날을 미리 축하할게요. 그럼 이만.",
      );
      await daiya.say_and_wait(
        "……역시 맥퀸은 정말 멋진 분이에요!",
      );
      await daiya.say_and_wait(
        `${mcqueen.sex}는 『일류 ${daiya.uma_sex_title}』의 정의와 목표를 저렇게 명확히 갖고 계시다니……정말 존경스러워요……!`,
      );
      era.printButton("「참고가 됐다니 다행이네」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네! 맥퀸 말씀대로 제가 무엇을 할 수 있을지 잘 생각해 볼게요……",
      );
      await daiya.say_and_wait(
        "가능하면 『아리마 기념』까지 제가 찾은 답을 전하고 싶어요!",
      );
      await era.printAndWait([
        arim_kin,
        `──사토노 다이아몬드가 『일류 ${daiya.uma_sex_title}』가 되겠다는 꿈의 답은 거기서 찾을 수 있을지도 모른다.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = "재팬컵을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, teio, kita) => {
      await era.printAndWait(
        "『재팬컵』──토카이 테이오가 출주를 선언한 레이스에 사토노 다이아몬드도 도전한다.",
      );
      await kita.say_and_wait(
        "다이아까지 이 레이스에 나올 줄은 몰랐어.",
      );
      await daiya.say_and_wait(
        "왜? 테이오도 내가 뛰어넘고 싶은 분인걸!",
      );
      await daiya.say_and_wait(
        "맥퀸에게 특별한 라이벌이잖아. 테이오와도 꼭 달리고 싶어!",
      );
      await kita.say_and_wait(
        "후후, 그렇구나! 다이아도 나랑 같이 테이오가 얼마나 대단한지 봐 왔으니까!",
      );
      await daiya.say_and_wait(
        "그리고 테이오에게 배우고 싶은 게 하나 있어.",
      );
      await daiya.say_and_wait(
        `테이오가 『일류 ${daiya.uma_sex_title}』의 모습을 어떻게 보여 주는지 직접 보고 싶어.`,
      );
      await kita.say_and_wait(
        "응……잘은 모르겠지만 다이아에게는 그러고 싶은 이유가 있는 거지.",
      );
      await kita.say_and_wait(
        "하지만! 테이오는 내가 계속 동경해 온 사람이야!",
      );
      await kita.say_and_wait(
        "그러니까 이번 레이스의 승리는 양보하지 않아! 테이오를 이기는 건 나야!!",
      );
      await daiya.say_and_wait(
        `키타짱도 테이오도 이기고 『일류 ${daiya.uma_sex_title}』가 되겠어!!`,
      );
      await teio.say_and_wait(
        "후후, 둘 다 강해졌지만 토카이 테이오 님은 더 강하다고!",
      );
      await teio.say_and_wait("내 실력을 보여 줄게!");
      await teio.say_and_wait("키타짱, 다이아! 전력으로 덤벼!!");
      await era.printAndWait("두 사람「지지 않겠어요!! 안 질 거예요!!」");
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = "도전";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, kita, you, arim_kin) => {
      await you.say_as_passer_by_and_wait(
        "중계",
        "지금 선두로 골인! 1착은──",
      );
      await you.say_as_passer_by_and_wait("관중", "와아아아아아아아아!");
      await daiya.say_and_wait("하아, 하아……");
      await teio.say_and_wait(
        "이런 실력을 갖췄을 줄이야……! 멋진 달리기였어, 다이아.",
      );
      await daiya.say_and_wait("감사합니다!");
      await teio.say_and_wait("키타짱도 내 상상보다 강해졌어!");
      await kita.say_and_wait([
        "정말요!? 하지만 저는 ",
        arim_kin,
        "에서 오늘보다 더 멋진 달리기를 보여 드릴게요!",
      ]);
      await daiya.say_and_wait("저도 지금에 만족하지 않을 거예요.");
      await daiya.say_and_wait(
        "지금의 저는 드디어 한발 앞서 있던 키타짱, 맥퀸, 테이오와 같은 출발선에 섰다고 생각해요.",
      );
      await teio.say_and_wait("──좋네. 키타짱도 다이아도 정말 좋아.");
      await teio.say_and_wait("우릴 이기겠다고 마음먹은 그 눈빛이 좋아.");
      await teio.say_and_wait("그만 옛날의 내가 떠올랐어.");
      await daiya.say_and_wait("옛날의……테이오 말인가요?");
      await teio.say_and_wait(
        "응. 옛날의 나도 회장님을 동경하면서……언젠가 꼭 뛰어넘겠다고 생각하며 트윙클 시리즈를 달렸어.",
      );
      await teio.say_and_wait("마침내 회장님과 정면으로 맞붙었을 때──");
      await teio.say_and_wait(
        "동경하던 상대가 순식간에 라이벌이 됐어. 반드시 쓰러뜨리겠다고 생각했지.",
      );
      await teio.say_and_wait(
        "지금 너희도 그때 나와 같은 마음이지? 문득 그런 생각이 들었어!",
      );
      await teio.say_and_wait(
        "하지만 회장님에게 도전하던 그 감각은 한 번도 잊은 적 없어.",
      );
      await teio.say_and_wait(
        "너희의 멋진 달리기를 보니 나도 다시 달리고 싶어졌어!",
      );
      await teio.say_and_wait(
        "다음 『아리마 기념』에는 도전자로서 다이아와 키타짱에게 도전할게!",
      );

      await teio.say_and_wait("각오해!!");
      await daiya.say_and_wait("──읏! 네!!");
      await kita.say_and_wait("네!! 진심으로 맞서겠어요!");
      await daiya.say_and_wait(
        `언제 어떤 때라도 도전하는 마음을 잊지 않는다……그것이 테이오${teio.sex}의 『일류 ${daiya.uma_sex_title}』로서의 방식……`,
      );
      await daiya.say_and_wait(
        "맥퀸은 도전을 받는 쪽, 테이오는 도전하는 쪽.",
        true,
      );
      await daiya.say_and_wait("그렇다면 나는……", true);
      await daiya.say_and_wait(
        "사토노 가문의 첫 G1 승리……징크스에 도전하고, 깨뜨리고, 이긴다.",
        true,
      );
      await daiya.say_and_wait(
        "키타짱을 따라잡고 꿈꾸던 트윙클 시리즈 무대에서 달린다.",
        true,
      );
      await daiya.say_and_wait("나에게 가장 어울리는 방식은……!", true);
      await daiya.say_and_wait("……트레이너님.");
      await era.printAndWait(
        "잠시 침묵한 뒤 입을 연 사토노 다이아몬드는 각오를 굳힌 얼굴이었다.",
      );
      await daiya.say_and_wait("저는 앞으로도 계속 도전하겠어요.");
      era.printButton("「계속 도전한다고……?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 저는 지금까지도 여러 가지에 도전해 왔어요. 사토노 가문을 가로막는 징크스에도, 키타짱에게도요.",
      );
      await daiya.say_and_wait(
        `그러니 『일류 ${daiya.uma_sex_title}』인 저도 계속 도전하는 것이 가장 어울리는 방식 아닐까요.`,
      );
      await daiya.say_and_wait(
        "맥퀸과 테이오에게 도전해서 사토노 가문 역사에 새 장을 열었던 것처럼요.",
      );
      await daiya.say_and_wait(
        `여러 가지에 도전해서 사토노 가문과 ${daiya.uma_sex_title}계에 새로운 역사를 열고 싶어요.`,
      );
      await daiya.say_and_wait(
        "그렇게 생각하니 다시 깨달았어요. 해외 레이스에 도전하고 싶다고요.",
      );
      await daiya.say_and_wait(
        "여러분께 가능성을 느끼게 해 드리기 위해서만이 아니라 저 자신의 소망으로요.",
      );
      await daiya.say_and_wait(
        `역사 깊은 해외 레이스에서 이겨 사토노의 이름을 ${daiya.uma_sex_title}계의 역사에 새기고 싶어요.`,
      );
      await daiya.say_and_wait(
        `그리고 사토노 가문과 일본의 ${daiya.uma_sex_title}에게 새로운 역사를 열어 주는 것──`,
      );
      await daiya.say_and_wait(
        `그것이 제가 할 수 있는 ${daiya.uma_sex_title}계에 대한 기여라고 생각해요.`,
      );
      era.printButton("「너만의 답을 찾았구나」", 1);
      await era.input();
      await daiya.say_and_wait("네!");
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』로서 사토노 다이아몬드의 모습……목표는 정해졌어요.`,
      );
      await daiya.say_and_wait(
        `『아리마 기념』에서 이겨 『일류 ${daiya.uma_sex_title}』의 반열에 들겠어요!`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_44: (() => {
    const title = "도전하고, 개척하다";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_cup
     */
    const f = async (daiya, teio, kita, you, japa_cup) => {
      await era.printAndWait([
        `${you.name}은(는) 사토노 다이아몬드와 함께 `,
        japa_cup,
        "를 관전하러 왔다.",
      ]);
      await kita.say_and_wait("테이오……! 정말 동경하던 테이오와……!");
      await teio.say_and_wait(
        "그렇게 들떠 있으면 레이스에서 혼날 거야, 키타짱.",
      );
      await teio.say_and_wait(
        `오늘은 해외에서 초청한 ${daiya.uma_sex_title}도 있어. 불확실한 요소가 많은 승부지……`,
      );
      await teio.say_and_wait("하지만 상대가 누구든 제왕님이 쓰러뜨려 주겠어!!");
      await kita.say_and_wait("쓰러지지 않겠어요! 저는……테이오를 이길 거예요!!");
      await daiya.say_and_wait(
        "다행이에요! 키타짱, 기백으로는 밀리지 않네요!",
      );
      await era.printAndWait("관중 A「키타산, 힘내!! 동경을 뛰어넘어라!」");
      await era.printAndWait(
        "관중 B「『제왕』을 뛰어넘어! 우리 키타산이라면 할 수 있어!!」",
      );
      await era.printAndWait(
        `관중 C「${daiya.couple_title}에게 『제왕』의 관록을 보여 줘! 토카이 테이오!!」`,
      );
      await daiya.say_and_wait("……양쪽의 응원 열기는 막상막하인 것 같네요……");
      await era.printAndWait(
        `${daiya.couple_title}는 원래 열성 팬이 많은 두 사람이다. 이번 『재팬컵』도 예년보다 북적이고 있다.`,
      );
      await daiya.say_and_wait("키타짱……힘내──!");
      await era.printAndWait(
        "중계「오, 토카이 테이오! 여기서 단숨에 올라옵니다! 벌써 키타산 블랙의 바로 뒤입니다!」",
      );
      await daiya.say_and_wait(
        "네……!? 빨라요……! 평소 테이오라면 여기서 가속하지 않을 텐데……!",
      );
      await era.printAndWait(
        "토카이 테이오가 과감하게 키타산 블랙의 뒤로 따라붙었다.",
      );
      await era.printAndWait("테이오에게는 드문 공격 방식이다.");
      await teio.say_and_wait("하아아아아아아아!");
      await kita.say_and_wait("읏……아아아아아아아!");
      await daiya.say_and_wait(
        "키타짱도 가속했어……아니, 달라. 이건……!",
      );
      await era.printAndWait(
        "키타산 블랙은 테이오의 압박에 일단 페이스를 올렸다가 다시 원래 리듬으로 되돌린다.",
      );
      await era.printAndWait(
        "토카이 테이오와 키타산 블랙 사이에서 치열한 공방이 펼쳐졌다.",
      );
      await daiya.say_and_wait(
        `키타짱도 테이오도 ${kita.couple_title}는 『재팬컵』을 경험했는데도……`,
      );
      await daiya.say_and_wait("자신의 달리기에만 갇히지 않고 적극적으로 승부를 걸고 있어……!");
      await daiya.say_and_wait("……이게 나라면……");
      await era.printAndWait(
        "사토노 다이아몬드는 전개를 보며 자신이 달리고 있다면 어떨지 가정하기 시작한 듯했다.",
      );
      await era.printAndWait(
        "중계「토카이 테이오, 계속 가속합니다! 키타산 블랙은 선두를 지킬 것인가, 테이오에게 추월당할 것인가──」",
      );
      await era.printAndWait("관중「와아아아아아아아아아아아!」");
      await kita.say_and_wait(
        "놀랐어요……! 테이오가 그렇게 끈질기게 따라붙을 줄은……",
      );
      await teio.say_and_wait("무슨 소리야. 지키려고만 하면 금방 져!");
      await teio.say_and_wait(
        "나는 언제나 도전하는 마음을 잊지 않아. 더 위로 올라가기 위해서!",
      );
      await teio.say_and_wait(
        "그러니 『아리마 기념』도 같아. 도전자로서 다이아와 키타짱에게 도전하겠어!",
      );

      await teio.say_and_wait("각오해!!");
      await daiya.say_and_wait("──읏! 네!!");
      await kita.say_and_wait("네!! 진심으로 맞서겠어요!");
      await daiya.say_and_wait(
        `언제 어떤 때라도 도전하는 마음을 잊지 않는다……그것이 테이오${teio.sex}의 『일류 ${daiya.uma_sex_title}』로서의 방식……`,
      );
      await daiya.say_and_wait(
        "맥퀸은 도전을 받는 쪽, 테이오는 도전하는 쪽.",
        true,
      );
      await daiya.say_and_wait("그렇다면 나는……", true);
      await daiya.say_and_wait(
        "사토노 가문의 첫 G1 승리……징크스에 도전하고, 깨뜨리고, 이긴다.",
        true,
      );
      await daiya.say_and_wait(
        "키타짱을 따라잡고 꿈꾸던 트윙클 시리즈 무대에서 달린다.",
        true,
      );
      await daiya.say_and_wait("나에게 가장 어울리는 방식은……!", true);
      await daiya.say_and_wait("……트레이너님.");
      await era.printAndWait(
        "잠시 침묵한 뒤 입을 연 사토노 다이아몬드는 각오를 굳힌 얼굴이었다.",
      );
      await daiya.say_and_wait("저는 앞으로도 계속 도전하겠어요.");
      era.printButton("「계속 도전한다고……?」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 저는 지금까지도 여러 가지에 도전해 왔어요. 사토노 가문을 가로막는 징크스에도, 키타짱에게도요.",
      );
      await daiya.say_and_wait(
        `그러니 『일류 ${daiya.uma_sex_title}』인 저도 계속 도전하는 것이 가장 어울리는 방식 아닐까요.`,
      );
      await daiya.say_and_wait(
        "맥퀸과 테이오에게 도전해서 사토노 가문 역사에 새 장을 열었던 것처럼요.",
      );
      await daiya.say_and_wait(
        `여러 가지에 도전해서 사토노 가문과 ${daiya.uma_sex_title}계에 새로운 역사를 열고 싶어요.`,
      );
      await daiya.say_and_wait(
        "그렇게 생각하니 다시 깨달았어요. 해외 레이스에 도전하고 싶다고요.",
      );
      await daiya.say_and_wait(
        "여러분께 가능성을 느끼게 해 드리기 위해서만이 아니라 저 자신의 소망으로요.",
      );
      await daiya.say_and_wait(
        `역사 깊은 해외 레이스에서 이겨 사토노의 이름을 ${daiya.uma_sex_title}계의 역사에 새기고 싶어요.`,
      );
      await daiya.say_and_wait(
        `그리고 사토노 가문과 일본의 ${daiya.uma_sex_title}에게 새로운 역사를 열어 주는 것──`,
      );
      await daiya.say_and_wait(
        `그것이 제가 할 수 있는 ${daiya.uma_sex_title}계에 대한 기여라고 생각해요.`,
      );
      era.printButton("「너만의 답을 찾았구나」", 1);
      await era.input();
      await daiya.say_and_wait("네!");
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』로서 사토노 다이아몬드의 모습……목표는 정해졌어요.`,
      );
      await daiya.say_and_wait(
        `『아리마 기념』에서 이겨 『일류 ${daiya.uma_sex_title}』의 반열에 들겠어요!`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = "크리스마스";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} dictus イクノディクタス
     * @param {CharaTalk} pama メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} turbo ツインターボ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await pama.say_and_wait(
        "야호~ 실례할게! 트레이너, 크리스마스 파티 시작이야!",
      );
      era.printButton("「……뭐?」", 1);
      await era.input();
      await era.printAndWait(
        "갑자기 나타난 메지로 파머는 그렇게 말하며 제멋대로 방에 들어왔다. 이어서 나이스 네이처 일행도 들어온다.",
      );
      await daiya.say_and_wait(
        "갑자기 찾아와서 죄송해요. 네이처 일행과 크리스마스 파티를 하기로 했거든요.",
      );
      await daiya.say_and_wait("트레이너님도 함께하지 않으실래요?");
      await pama.say_and_wait(
        "겸사겸사 여길 파티 장소로 빌릴 수 있으면 더 좋겠는데!",
      );
      await nature.say_and_wait("아~, 트레이너 굳었네.");
      await daiya.say_and_wait("사실 이렇게 된 거예요……");
      await tannhauser.say_and_wait(
        "네!? 다이아네 집에서는 크리스마스 파티를 안 해!?",
      );
      await daiya.say_and_wait(
        "네. 크리스마스에는 아버지도 어머니도 업무나 자선 활동이 있으시거든요.",
      );
      await daiya.say_and_wait(
        "가끔 아버지와 거래처 파티에 가거나 사토노 그룹이 여는 파티에 참석하기는 하지만……",
      );
      await daiya.say_and_wait(
        "가족끼리만 하는 파티는 한 번도 없었어요.",
      );
      await helios.say_and_wait("진짜? 선물도 못 받으면 너무 괴롭잖아!");
      await daiya.say_and_wait(
        "아, 선물은 있어요! 산타클로스가 밤에 양말에 넣어 주세요!",
      );
      await daiya.say_and_wait(
        "다만 영화 같은 가족 크리스마스 파티는 경험이 없어서……사실 동경하고 있었어요.",
      );
      await pama.say_and_wait("그럼 하자!");
      await daiya.say_and_wait("뭐!?");
      await dictus.say_and_wait(
        "네. 다이아 부모님을 모실 수는 없지만 가족 같은 파티라면 우리도 할 수 있어요.",
      );
      await nature.say_and_wait(
        "작고 정겨운 가족 파티라면 우리도 경험 많으니까──하자.",
      );
      await turbo.say_and_wait("신난다! 파티, 파티!");
      await tannhauser.say_and_wait(
        "아, 부모님은 무리여도 다이아의 트레이너는 부를 수 있지?",
      );
      await helios.say_and_wait(
        `탄호이저 천재네! 그럼 바로 ${you.sex}한테 가자!`,
      );
      await dictus.say_and_wait(
        "──그렇게 된 거예요. 장소 제공 겸 참가해 주시겠어요?",
      );
      era.printButton("「물론이지!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "와아, 정말 괜찮나요!? 감사해요!",
      );
      await dictus.say_and_wait("그럼 바로 장식부터 하죠.");
      await nature.say_and_wait("후우──대충 이 정도면 되겠네.");
      await daiya.say_and_wait(
        "멋져……정말 멋져요! 전부 손수 만든 장식인데 이렇게 예쁘다니……!",
      );
      await tannhauser.say_and_wait(
        "다녀왔어~! 요리랑 과자 사 왔어──!",
      );
      await helios.say_and_wait("프라이드치킨에 피자☆ 예이!");
      await kita.say_and_wait("안녕하세요──!");
      await daiya.say_and_wait("어? 키타짱!?");
      await kita.say_and_wait(
        "헤헤헤, 교문에서 우연히 만나서 초대받았어!",
      );
      await daiya.say_and_wait("대환영이야! 어서 와, 키타짱!");
      await kita.say_and_wait(
        "그러고 보니 지금 멤버, 신입생 환영회 때랑 같네!",
      );
      await daiya.say_and_wait("네, 그때가 생각나요!");
      await tannhauser.say_and_wait(
        "와아~, 그때 신입생이 벌써 이렇게 훌륭하게 자라서……",
      );
      await pama.say_and_wait("자, 자, 옛날이야기는 나중에! 식기 전에 먹자!");
      await daiya.say_and_wait(
        "피자, 샐러드, 프라이드치킨……마른오징어, 가오리 지느러미, 다시마 초절임……?",
      );
      await daiya.say_and_wait(
        "그렇군요. 이게 보통 가정의 파티 메뉴로군요.",
      );
      await kita.say_and_wait(
        "아닌데……맞는 것 같기도 해. 우리 집 크리스마스에도 안주가 나오니까 부정할 수가 없어……!",
      );
      await tannhauser.say_and_wait(
        "아~, 상점가 분들이 잔뜩 주셔서~ 옛날 과자랑 안주가 섞여 있어. 정말 고맙지~",
      );
      await daiya.say_and_wait(
        "손에 든 카드가 다 없어졌어요! 이제 키타짱과 터보 중 누가 지느냐만 남았네요!",
      );
      await kita.say_and_wait("으음──그럼 맨 오른쪽……");
      await kita.say_and_wait("아니, 맨 왼쪽……");
      await kita.say_and_wait("응, 맨 왼쪽으로 할래!");
      await turbo.say_and_wait("안 돼, 안 돼, 안 돼, 안 돼──!! 왼쪽은 안 줄 거야!");
      await nature.say_and_wait("……터보, 포기해. 표정에 너무 드러나……");
      await era.printAndWait(
        `그렇게 즐거운 시간을 보내고……크리스마스 파티는 막을 내렸다.`,
      );
      era.drawLine();
      await era.printAndWait(
        "남아서 뒷정리를 도와준 사토노 다이아몬드와 키타산 블랙을 기숙사까지 바래다준다.",
      );
      await daiya.say_and_wait("에헤헤, 오늘 정말 즐거웠어요!");
      await daiya.say_and_wait("저에게 크리스마스는 일이라는 느낌이었거든요……");
      await kita.say_and_wait(
        "맞아. 매년 크리스마스마다 다이아는 볼일이 있다고 했지.",
      );
      await daiya.say_and_wait("응. 다음에는 남동생도 부르고 싶어.");
      await kita.say_and_wait(
        "아, 그러자! 틀림없이 좋아할 거야! 내년에도 같이 크리스마스 파티 하자!",
      );
      await daiya.say_and_wait("내년에도……트레이너님이 와 주실 건가요?");
      era.printButton("「좋아!」", 1);
      await era.input();
      await daiya.say_and_wait("정말인가요? 그럼 약속이에요?");
      await daiya.say_and_wait(
        "시간은 미리 예약했으니까 다른 분과 약속 잡으시면 안 돼요.",
      );
      await era.printAndWait(
        "아직 아무 일정도 없던 내년에 사토노 다이아몬드와 함께 보낼 크리스마스 약속이 생겼다.",
      );
      await dictus.say_and_wait("그럼 슬슬 케이크를 먹죠──");
      await tannhauser.say_and_wait("앗!? 케이크……사는 걸 잊었어!!");
      await era.printAndWait(
        `${you.name}와(과) 사토노 다이아몬드는 케이크를 사러 나갔다. 하지만 근처 가게는 매진이라 조금 더 멀리 가게 되었다.`,
      );
      await daiya.say_and_wait("조명이 예쁘네요.");
      await daiya.say_and_wait(
        "후후, 이렇게 크리스마스 거리를 걷는 것도 계속 동경하던 영화 속 한 장면이에요.",
      );
      await daiya.say_and_wait(
        "아, 아버지 일행의 자선 활동에 불만이 있다는 건 아니에요.",
      );
      await daiya.say_and_wait(
        "함께 자선 활동을 하며 배운 것도 많고 저도 자부심을 갖고 돕고 있어요.",
      );
      await daiya.say_and_wait("다만 이런 시간도 나쁘지 않겠다고……");
      era.printButton("「천천히 걷자」", 1);
      await era.input();
      await daiya.say_and_wait(
        "하지만……여러분이 케이크를 기다리실 텐데……",
      );
      era.printButton("「과자는 아직 잔뜩 있어. 괜찮아」", 1);
      await era.input();
      await daiya.say_and_wait(
        "후후후, 그렇네요. 과자가 다 먹지 못할 만큼 있었죠!",
      );
      await daiya.say_and_wait("……그럼 천천히 걸어요.");
      await daiya.say_and_wait(
        "크리스마스 거리는 외국에 온 듯한 기분이 드네요.",
      );
      await daiya.say_and_wait("……옛날 해외여행 때 걸었던 거리가 생각나요.");
      await daiya.say_and_wait(
        "……저도……트레이너님과 외국 거리를 걸어 보고 싶어요.",
      );
      await daiya.say_and_wait("트레이너님은 어떠세요?");
      await daiya.say_and_wait(
        "제 담당 트레이너가 되어 주실 때는 제가 조금 무리한 부탁을 드린 면도 있었죠.",
      );
      await daiya.say_and_wait(
        "그러니 이번에는 트레이너님의 마음을 제대로 여쭤보고 싶어요.",
      );
      await daiya.say_and_wait("저와 함께 해외에 가 주실래요?");
      era.printButton("「네가 원한다면 함께 갈게」", 1);
      await era.input();
      await daiya.say_and_wait("……에헤헤.");
      await daiya.say_and_wait(
        "다행이에요! 트레이너님, 앞으로도 잘 부탁드려요!",
      );
      await daiya.say_and_wait("그때는 함께 외국 거리를 걸어요!");
      await era.printAndWait(
        `이국적인 정취가 감도는 크리스마스 거리를 바라보며 ${you.name}와(과) 사토노 다이아몬드는 머지않은 미래를 약속했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = "아리마 기념을 향해";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await daiya.say_and_wait(
        `──사토노 가문의 꿈. 『G1에서 이길 수 있는 ${daiya.uma_sex_title}』를 많이 길러 내는 것.`,
      );
      await daiya.say_and_wait(
        `그 『일류 ${daiya.uma_sex_title}』가 되기 위해 저는 어릴 때부터 계속 달려왔어요.`,
      );
      await daiya.say_and_wait(
        "트윙클 시리즈 G1에서 승리하고 오늘 도전하는 상대는──",
      );
      await daiya.say_and_wait(
        `『일류 ${daiya.uma_sex_title}』인 선배들. 동경하는 분이자 오늘의 상대인 두 분.`,
      );
      await daiya.say_and_wait("맥퀸과 테이오.");
      await daiya.say_and_wait(
        "그리고──만난 뒤로 줄곧 제 곁에 있어 준 너.",
      );
      await daiya.say_and_wait(
        "언제나 내 앞을 달리는 사람. 달리는 레이스도, 목표도 달라도.",
      );
      await daiya.say_and_wait("우리는 언제나 함께였어.");
      await kita.say_and_wait("──다이아!");
      await daiya.say_and_wait("응, 키타짱!");
      await daiya.say_and_wait(
        "트레센 학원에 들어오기 전부터 동경하던 분과 같은 무대에 서기를 꿈꾸며……",
      );
      await daiya.say_and_wait(
        "키타짱과 경쟁해 왔기에 오늘까지 올 수 있었어.",
      );
      await daiya.say_and_wait("하지만 영광을 거머쥘 수 있는 사람은 한 명뿐!");
      await daiya.say_and_wait(
        "키타짱에게도! 맥퀸에게도! 테이오에게도! 지지 않겠어!!",
      );
      await daiya.say_and_wait("이겨서 사토노 가문과 내 꿈을 이루겠어!!");
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = "지고의 보석";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, teio, mcqueen, kita) => {
      await era.printAndWait(
        "중계「제2코너 내리막을 지나 건너편 직선! 선두 집단의 페이스는 어떨까요!」",
      );
      await era.printAndWait(
        "안경 쓴 남성「나카야마 잔디 2500미터는 코너 6개를 돌아. 높낮이 차도 커서 끈기가 중요하지. 스피드만으로 밀어붙이기는 어려워.」",
      );
      await era.printAndWait("후드티 입은 남성「갑자기 왜 그래?」");
      await era.printAndWait(
        "안경 쓴 남성「결승점 앞에는 가파른 『심장 파열 언덕』이 기다려. 결과는 마지막까지 몰라.」",
      );
      await era.printAndWait("모두 숨을 죽이고 레이스를 지켜본다. 그리고──");
      await daiya.say_and_wait("하아아아아아아아아아아아아!!");
      await era.printAndWait(
        "중계「빠져나왔다! 사토노 다이아몬드! 선두는 사토노 다이아몬드!!」",
      );
      await kita.say_and_wait("으아아아아아아!!");
      await era.printAndWait("맥퀸 & 테이오「하아아아아아아아!」");
      await era.printAndWait(
        "중계「사토노 다이아몬드, 마지막 언덕으로! 절친도 동경하던 상대도 단숨에 앞질러──」",
      );
      await era.printAndWait("중계「사토노 다이아몬드, 1착으로 골인!!」");
      await era.printAndWait("(와아아아아아아아아아아아!)");
      await daiya.say_and_wait("하아, 하아, 하아……");
      await mcqueen.say_and_wait("축하해요, 다이아. 당신의 승리예요.");
      await daiya.say_and_wait("맥퀸……!");
      await mcqueen.say_and_wait(
        "장거리에서도 당신에게 졌네요. 실력은 이제 의심할 여지가 없어요.",
      );
      await mcqueen.say_and_wait(
        `──이미 갖추고 있어요. 당신이 말하던 『일류 ${daiya.uma_sex_title}』의 실력을요.`,
      );
      await daiya.say_and_wait("감사합니다……!");
      await teio.say_and_wait(
        "으음~, 다이아도 키타짱도 벌써 이렇게 강해졌다니……내 상상을 뛰어넘었어.",
      );
      await kita.say_and_wait("테이오……! 기, 기뻐요~~!!");
      await teio.say_and_wait(
        "이봐, 이봐, 이걸로 끝이 아니잖아. 오히려 이제부터지!",
      );
      await teio.say_and_wait(
        "발을 멈추면 금방 추월당해. 나는 또 둘에게 도전할 거야.",
      );
      await teio.say_and_wait(
        `게다가 너희 같은 대단한 ${daiya.uma_sex_title}는 앞으로도 계속 나타날 테고.`,
      );
      await kita.say_and_wait(
        "네! 방심하지 않을게요! 모두를 웃게 하려고 더 강해지고, 또 강해질 거예요!",
      );
      await mcqueen.say_and_wait(
        "……다이아, 당신은요? 나아갈 방향이 보이나요?",
      );
      await daiya.say_and_wait(
        `……네. 사토노 가문의 ${daiya.uma_sex_title}로서 사토노 가문을 이끌며 역사를 열어 가겠어요.`,
      );
      await daiya.say_and_wait(
        `성적으로 ${daiya.uma_sex_title}계에 기록을 남기며 사토노 가문의 역사를 쌓아 갈 거예요.`,
      );
      await mcqueen.say_and_wait(
        "그렇군요. 그럼 어떤 길을 여실 생각인가요?",
      );
      await daiya.say_and_wait(
        "──정점으로 이어지는 길이에요. 제 이름처럼 최상급 다이아몬드의 빛에 도전하겠어요.",
      );
      await daiya.say_and_wait(
        `일본과 세계 각지의 정점에 도전하며 ${daiya.uma_sex_title}계에 활기를 불어넣겠어요.`,
      );
      await daiya.say_and_wait(
        `그것이 저──사토노 다이아몬드가 생각하는 『일류 ${daiya.uma_sex_title}』의 모습이에요.`,
      );
      await daiya.say_and_wait(
        `지금 저는 그 길의 입구에 섰을 뿐이에요. 앞으로 이 뜻을 품고 『일류 ${daiya.uma_sex_title}』를 향해 계속 걸어가겠어요.`,
      );
      await mcqueen.say_and_wait("후후, 훌륭한 포부네요.");
      await mcqueen.say_and_wait(
        `그럼 『일류 ${daiya.uma_sex_title}』답게 가죠! 모두 기다리고 있어요!`,
      );
      await daiya.say_and_wait("네!");
      await daiya.say_and_wait("여러분, 응원해 주셔서 감사합니다!");
      await era.printAndWait("관중 A「다이아────!! 축하해────!」");
      await era.printAndWait(
        `관중 B「${daiya.uma_sex_title}계의 보물!! 다이아의 빛보다 눈부신 건 없어!」`,
      );
      await daiya.say_and_wait("후후후, 이 빛을 오래도록 지키고 싶어요.");
      await daiya.say_and_wait(
        `사토노 다이아몬드는 사토노 가문의 ${daiya.uma_sex_title}로서 일본의 ${daiya.uma_sex_title}계 발전에 온 힘을 다해 기여하겠어요.`,
      );
      await daiya.say_and_wait("그리고 이 길은 앞으로도──");
      await daiya.say_and_wait("키타짱!!");
      await daiya.say_and_wait(
        "앞으로도 키타짱과 함께 여러 가지에 도전하고 싶어.",
      );
      await daiya.say_and_wait(
        "달리는 레이스가 달라도, 목표와 나아가는 방향이 달라도.",
      );
      await daiya.say_and_wait("각자의 길을 걸어가더라도──");
      await daiya.say_and_wait("키타짱과 나란히 앞으로 나아가고 싶어!");
      await kita.say_and_wait("다이아……!");
      await daiya.say_and_wait("함께 계속 달리자!!");
      await kita.say_and_wait("응!! 앞으로도 쭉 함께야!");
      await kita.say_and_wait(
        "하지만 그 전에! 다음 레이스!! 나는 다이아를 이길 거야!",
      );
      await kita.say_and_wait("지금 내 목표는 우선 그거야!");
      await daiya.say_and_wait("후후후! 안 질 거야!");
      await era.printAndWait(
        "관중 C「우오오오오! 좋아, 너희들!! 기대할게!」",
      );
      await era.printAndWait(
        "안경 쓴 남성「약속할게. 사토노의, 그리고 두 사람의 역사를 계속 지켜보겠어!!」",
      );
      await era.printAndWait(
        "후드티 입은 남성「우리 마음은 언제까지나 너희와 함께야! 응원할게! 쭉!!」",
      );
      await daiya.say_and_wait(
        "감사합니다! 이렇게 따뜻한 응원을 받아서……",
      );
      await daiya.say_and_wait("에헤헤, 다이아는 행복한 사람이에요!");
      await era.printAndWait(
        "말을 마친 사토노 다이아몬드가 환하게 미소 지었다.",
      );
      await era.printAndWait(
        "그건 어떤 보석보다도, 다이아몬드보다도 눈부셨다──사토노 다이아몬드의 빛이었다.",
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = "동경하던 이와 함께";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, mcqueen, tenn_sho, japa_cup, arim_kin) => {
      await era.printAndWait([
        tenn_sho,
        '、',
        japa_cup,
        ", 그리고 ",
        arim_kin,
        '。',
      ]);
      await era.printAndWait(
        "사토노 다이아몬드는 모두 우승하며 『가을 시니어 3관』을 달성했다!",
      );
      await daiya.say_and_wait(
        "──전송. 이걸로 답장은 전부 끝났네요.",
      );
      era.printButton("「성대한 행사가 되겠네」", 1);
      await era.input();
      await era.printAndWait(
        "사토노 그룹 관련 시설에서 사토노 다이아몬드의 『가을 시니어 3관 기념 행사』가 열린다고 한다.",
      );
      await daiya.say_and_wait(
        "네. 제 『가을 시니어 3관』 기념 행사……최선을 다해 돕겠다고 방금 답장했어요.",
      );
      await daiya.say_and_wait(
        "오늘부터 카페에 『가을 시니어 3관 선데』가 나올 거예요. 인사드리러 가려고요.",
      );
      await daiya.say_and_wait(
        "트레이너님, 시간 있으시면 함께 가실래요?",
      );
      era.printButton("「같이 가자!」", 1);
      await era.input();
      await daiya.say_and_wait("에헤헤, 잘됐어요♪ 그럼 가요.");
      await mcqueen.say_and_wait("어머, 다이아. 마침 찾고 있었어요.");
      await daiya.say_and_wait("맥퀸! 저에게 볼일이 있으신가요?");
      await mcqueen.say_and_wait(
        "네, 축하해 드리려고요……바쁜 중이었나요?",
      );
      await daiya.say_and_wait(
        "사실 지금 사토노 그룹 카페에 가려던 참이에요……",
      );
      await daiya.say_and_wait(
        "아! 괜찮으시면 맥퀸도 『가을 시니어 3관 선데』 드시지 않을래요?",
      );
      await mcqueen.say_and_wait("선데요!?");
      await daiya.say_and_wait(
        "네. 『가을 시니어 3관』 달성 기념 한정 선데가 나와서 인사도 드리고 맛도 보러 가요.",
      );
      await mcqueen.say_and_wait(
        "한정……! 그, 그렇군요. 모처럼이니 함께 갈게요.",
      );
      await mcqueen.say_and_wait(
        "다시 한번……두 분의 『가을 시니어 3관』 달성을 축하드려요.",
      );
      await mcqueen.say_and_wait(
        "저와 테이오, 그리고 키타산을 꺾고 얻은 『가을 시니어 3관』이죠.",
      );
      await mcqueen.say_and_wait(
        `다이아 개인의 공적일 뿐만 아니라 사토노 가문이 ${daiya.uma_sex_title}계에 남긴 빛나는 성적이기도 해요.`,
      );
      await mcqueen.say_and_wait("……정말 잘했어요, 다이아.");
      await daiya.say_and_wait("……! 아……감사합니다!!");
      await mcqueen.say_and_wait(
        "후후, 선배인 척 축하하고 있지만 입장은 같아요.",
      );
      await mcqueen.say_and_wait(
        `저희는 서로의 라이벌이자 똑같이 가문의 이름을 짊어진 ${daiya.uma_sex_title}예요. 앞으로도 서로 갈고닦아 가요.`,
      );
      await daiya.say_and_wait("네! 계속 정진하겠어요!");
      await daiya.say_and_wait(
        "아직 맥퀸에게 배울 것이 많지만……",
      );
      await daiya.say_and_wait("스스로 시도하고 계속 탐구해야겠죠.");
      await daiya.say_and_wait(
        "사토노 가문의 대표라는 자각도 마음 깊이 새길게요!",
      );
      await mcqueen.say_and_wait(
        "네. 그래도 고민이 생기면 상담해 주세요. 같은 학원에 다니는 사이잖아요.",
      );
      await daiya.say_and_wait("와……맥퀸……!");
      await daiya.say_and_wait(
        "정말 멋진 분이에요……저의 영원한 동경……!",
      );
      await mcqueen.say_and_wait(
        "후후, 영광이네요. 하지만 이제 다이아를 동경하는 사람도 나타날 거예요.",
      );
      await mcqueen.say_and_wait("다음은 당신이 좋은 선배가 될 차례예요.");
      await daiya.say_and_wait(
        "네. 맥퀸이 저를 도와주셨듯 저도 누군가의 힘이 될 수 있다면……",
      );
      await mcqueen.say_and_wait("괜찮을 거예요. 그렇죠, 트레이너?");
      era.printButton("「응! 괜찮을 거야!」", 1);
      await era.input();
      await daiya.say_and_wait(
        "두 분 다……감사해요! 에헤헤, 기뻐요……♪",
      );
      await daiya.say_and_wait(
        "아, 선데가 녹기 시작했어요! 먹어요! 맥퀸도 편하게 드세요.",
      );
      await era.printAndWait(
        "메지로 맥퀸의 말은 사토노 다이아몬드에게 무엇보다 기쁜 축하였다!",
      );
    };
    f.title = title;
    return f;
  })(),
  sa_sos: (() => {
    const title = "딸꾹질 SOS";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `방과 후, ${you.name}은(는) 메지로 맥퀸에게 달려가는 사토노 다이아몬드를 보았다.`,
      );
      await mcqueen.say_and_wait("……딸꾹!");
      await daiya.say_and_wait(
        "맥퀸, 이거 드세요. 이걸로 멈출지도 몰라요!",
      );
      await mcqueen.say_and_wait(
        "어머, 감사해요. 그럼 마실게요.",
      );
      await mcqueen.say_and_wait("……딸꾹!");
      await mcqueen.say_and_wait(
        "멈추지 않네요……조금 뒤 모임에서 인사해야 하는데.",
      );
      await mcqueen.say_and_wait(
        "지금 이 순간에도 시간은 흘러가고 있어요……어떻게 해야 할까요……!",
      );
      await daiya.say_and_wait("맥퀸……");
      await daiya.say_and_wait(
        "……저기, 파티 전까지 시간을 내 주실래요? 다른 방법을 써 보고 싶어요!",
      );
      await daiya.say_and_wait(
        "……아, 트레이너님! 죄송하지만 부탁이 있어요!",
      );
      await daiya.say_and_wait(
        "학원 방송으로 옥상 출입을 금지해 주세요!",
      );
      era.printButton("「뭘 하려고?」", 1);
      await era.input();
      await daiya.say_and_wait("지금은 설명할 시간이……부탁드려요!");
      await mcqueen.say_and_wait("어, 어쩐지 일이 커지는데요……");
      await era.printAndWait(
        `${daiya.sex}의 부탁에 ${you.name}은(는) 어쩔 수 없이 방송했다.${daiya.sex}는 이제 무엇을 하려는 걸까……?`,
      );
      await mcqueen.say_and_wait("…………딸꾹. 모임 시간이 얼마 안 남았어요……");
      await daiya.say_and_wait("조금만 더……아, 왔어요!");
      await you.say_and_wait("프로펠러 소리……!", true);
      await era.printAndWait(
        "의료진「HQ! HQ! 트레센 학원에 도착! 지금부터 아가씨의 학우를 지원한다!」",
      );
      await mcqueen.say_and_wait("헤, 헬리콥터!? 이게 대체……!?");
      await daiya.say_and_wait(
        "그룹의 전용 의료팀을 불렀어요.",
      );
      await you.say_and_wait("의료 기기 소리……!", true);
      await daiya.say_and_wait(
        "ICU 등 최신 의료 설비를 실은 이동식 집중 치료실이에요!",
      );
      await mcqueen.say_and_wait("그건 너무 과하지 않나요!?");
      await daiya.say_and_wait(
        "자, 안으로 들어가세요! 이거라면 딸꾹질도 멈출 거예요.",
      );
      await mcqueen.say_and_wait("무, 무리예요~!?");
      await mcqueen.say_and_wait(
        "……어, 어머? 너무 충격적이어서 딸꾹질이 멈춘 것 같아요.",
      );
      await daiya.say_and_wait(
        "어? 정말인가요? 그럼 딸꾹질을 이긴 거네요!",
      );
      await mcqueen.say_and_wait(
        "정말, 이렇게 놀라게 하지 마세요. 그래도……고마워요, 다이아.",
      );
      await daiya.say_and_wait(
        "아니에요, 이 정도는 아무것도 아닌걸요! 조금이라도 도움이 됐다면……기뻐요!",
      );
      era.printButton("「이만큼이나 동원하다니, 수고했어!」(스태미나+20)", 1);
      era.printButton("「상상을 뛰어넘는 규모네……」(파워+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("에헤헤, 맥퀸을 돕는 일이니까요♪");
        await daiya.say_and_wait(
          "또 무슨 일이 있으면 말씀해 주세요! 반드시 최선을 다해 도울게요!",
        );
        await mcqueen.say_and_wait(
          "네, 네……그때는 상식적인 범위에서 부탁드려요……",
        );
        await daiya.say_and_wait("후후후, 네!");
        await era.printAndWait(
          "진심을 다하는 사토노 다이아몬드는 평소보다 더욱 든든해 보였다.",
        );
      } else {
        await daiya.say_and_wait(
          "그렇군요. 조금 더 소박하게 하는 편이 좋겠네요.",
        );
        await daiya.say_and_wait(
          "아, 맞다……! 전용기로 맥퀸을 병원에 모셨어야 했어요!",
        );
        await mcqueen.say_and_wait("……그, 그런 뜻이었군요……");
        await era.printAndWait(
          `상식 밖의 발상을 하는 사토노 다이아몬드에게 ${you.name}은(는) 그저 놀랄 뿐이었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweepy5: (() => {
    const title = "스위피 5☆ 입단 테스트!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} sweepy スイープトウショウ
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, tachyon, sweepy, kita, you) => {
      await era.printAndWait(
        `그 일은 ${you.name}와(과) 사토노 다이아몬드가 복도를 걷던 중 일어났다.`,
      );
      await sweepy.print_and_wait("???「찾았다──────!!!!」");
      await sweepy.say_and_wait(
        "다이아! 오늘부터 너를 『마법소녀 다이아』로 임명할게!",
      );
      await daiya.say_and_wait("네? 『마법소녀 다이아』……요?");
      await kita.say_and_wait(
        "『마법소녀☆Sweepy5』. 마법소녀 키타산, 등장! 헤헤♪",
      );
      await daiya.say_and_wait("와아, 키타짱까지 그걸!?");
      await kita.say_and_wait(
        "헤헤♪ 스윕이 만든 단체인데 『마법소녀☆Sweepy5』라고 해.",
      );
      await kita.say_and_wait(
        "나도 방금 마법소녀 키타산으로 임명됐어!",
      );
      await kita.say_and_wait("그래서 다이아도 같이 들어와 줬으면 해서……어때?");
      await sweepy.say_and_wait(
        "단원은 나──천재 마법소녀 스위피랑 마법소녀 키타산, 그리고 타키온 박사야.",
      );
      await daiya.say_and_wait(
        "어머, 다 같이 마법을 쓰는 건가요? 아니면 무슨 놀이예요? 재미있겠어요♪ 꼭 참가하게 해 주세요!",
      );
      await sweepy.say_and_wait(
        "정말!? 잘됐다♪ 그럼 바로 마법 연습이야! 어디 보자──",
      );
      await sweepy.say_and_wait(
        "──아! 저 녀석! 저 적을 쓰러뜨려 봐!",
      );
      era.printButton("「뭐!?」", 1);
      await era.input();
      await sweepy.say_and_wait(
        "적은 언제 나타날지 모르니까. 제대로 연습해야지!",
      );
      await daiya.say_and_wait(
        `트레이너님을 쓰러뜨린다고요……? 그런데 어떻게 ${you.sex}을(를) 쓰러뜨리면 되나요?`,
      );
      await you.say_and_wait("쓰러뜨리는 건 이미 정해진 건가……", true);
      await sweepy.say_and_wait(
        "그건 내가 가르쳐 줄게♪ 잘 봐. 이렇게 주문을 외우는 거야──",
      );
      await tachyon.print_and_wait(
        "???「……후후후, 적을 쓰러뜨리는 수단은 마법만이 아니지.」",
      );
      await tachyon.say_and_wait(
        "약물로 자신을 강화해서 적을 쓰러뜨리는 방법도 있네. 그쪽을 택한다면 내가 도와주지.",
      );
      await sweepy.say_and_wait(
        "잠깐, 지금은 내가 보여 줄 차례야!! 다이아, 타키온보다 나한테 배우고 싶지!?",
      );
      await daiya.say_and_wait(
        "후후, 둘 다 재미있겠어요♪ 그런데 트레이너님은 누구에게 배우면 좋을 것 같으세요?",
      );
      era.printButton("「스윕 토쇼에게 배우자」(스피드+20)", 1);
      era.printButton("「아그네스 타키온의 도움을 받자」(파워+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await sweepy.say_and_wait(
          "흐흥~, 당연하지! 그럼 마법 시범을 보여 줄게♪ 간다──",
        );
        await sweepy.say_and_wait(
          "러브러브 러브 플라워☆ 별빛이여, 내려라!",
        );
        await era.printAndWait(
          "……아무 일도 일어나지 않았다. 하지만 자세만큼은 당당해서 자칭 마법소녀답다.",
        );
        await sweepy.say_and_wait(
          "후후, 알겠어? 너다운 주문을 외우면 돼♪",
        );
        await daiya.say_and_wait(
          "그렇군요. 저다운 주문……좋아요, 해 볼게요!",
        );
        await kita.say_and_wait("힘내! 다이아라면 괜찮아!");
        await daiya.say_and_wait("보아라, 눈부신 다이아몬드의 반짝임을! 고요한 빛──!");
        await era.printAndWait(
          `그 순간 ${you.name}은(는) 정말로──눈부신 빛을 본 것 같아서 쓰러지기로 했다.`,
        );
        await sweepy.say_and_wait(
          "와아, 정말 반짝반짝 빛나는 것 같았어……! 다이아, 제법인데♪",
        );
        await sweepy.say_and_wait(
          "마법소녀 다이아! 정식 입단을 허락할게! 오늘부터 너는 『마법소녀☆Sweepy5』의 단원이야♪ 알겠지?",
        );
        await daiya.say_and_wait(
          "네! 마법소녀 다이아, 앞으로 더 빛나겠어요!",
        );
        await era.printAndWait(
          `마법은 잘 모르겠지만 또래 학생들이 즐거워하는 모습을 보니 ${you.name}도 덩달아 기뻐졌다.`,
        );
      } else {
        await tachyon.say_and_wait(
          "후후후, 좋은 선택이야! 그럼 다이아, 우선 약물로 몸을 강화하겠네. 단숨에 마시게.",
        );
        await era.printAndWait(
          `아그네스 타키온이 수상한 빛깔의 약을 꺼내려 했다……${you.name}은(는) 위험을 느낀다.`,
        );
        await kita.say_and_wait("색깔이 굉장하네……다이아, 정말 마실 거야?");
        era.printButton("「그만두자!」", 1);
        await era.input();
        await tachyon.say_and_wait("에이! 뭐야, 이제 와서 그만두겠다고?");
        await daiya.say_and_wait(
          "아니요. 한 번 결정했으면 번복하지 않아요. 트레이너님이라도 제 결심은 바꿀 수 없어요!",
        );
        await you.say_and_wait("하지만──");
        await daiya.say_and_wait("사토노 다이아몬드, 단숨에 마실게요!");
        await era.printAndWait(
          `${daiya.sex}는 아그네스 타키온에게 약을 받아 한 번에 들이켰다.`,
        );
        await daiya.say_and_wait("음──먹어 본 적 없는 맛이에요! 재미있네요!");
        await tachyon.say_and_wait(
          "오──! 혈액 순환을 촉진하려고 캡사이신을 듬뿍 넣었는데 아무렇지도 않은 건가!",
        );
        await tachyon.say_and_wait(
          "후후후……제법이군! 좋아, 그대로 달려 보게!",
        );
        await you.say_and_wait("캡사이신……!?", true);
        await sweepy.say_and_wait(
          "너, 너 제법이네……! 마법소녀 다이아! 오늘부터 정식으로 『마법소녀☆Sweepy5』의 단원이야♪",
        );
        await era.printAndWait(
          `스윕 토쇼 일행이 떠난 뒤 ${you.name}은(는) 사토노 다이아몬드에게 다가갔다……아까 캡사이신을 마신 게 마음에 걸린다.`,
        );
        era.printButton("「방금……맵지 않았어?」", 1);
        await era.input();
        await daiya.say_and_wait("……눈치채셨나요?");
        await daiya.say_and_wait(
          "후후, 사실 혀가 정말 얼얼했지만 다들 보는 앞에서 얼굴을 찌푸릴 수는 없었는걸요♪",
        );
        await era.printAndWait(
          `${daiya.sex}는 슬쩍 속마음을 털어놓았다. 허세를 부리고 있었던 것이다. 나이에 걸맞은 모습에 ${you.name}은(는) 저도 모르게 미소 지었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_high_dream: (() => {
    const title = "너무나 큰 포부";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, you) => {
      await era.printAndWait(
        `${you.name}이(가) 사토노 다이아몬드와 걷다가 진지한 표정의 골드 쉽을 발견했다.`,
      );
      await gs.say_and_wait("대충 이 정도 크기인가? 아니, 더 들어가려면……");
      await daiya.say_and_wait("골시, 뭔가 생각 중인가요?");
      await gs.say_and_wait("다이아냐……좋아, 알려 주지. 따라와.");
      await gs.say_and_wait("야, 이 수영장 보고 무슨 생각 드냐?");
      await daiya.say_and_wait("글쎄요……평소 훈련에서 자주 쓰죠?");
      await daiya.say_and_wait(
        "또……음, 조금 더 넓으면 더 재미있겠어요. 해외에서 큰 수영장에 갔을 때 정말 즐거웠거든요!",
      );
      await gs.say_and_wait("좋은 말 하는데, 나이스! 564점 주마!");
      await daiya.say_and_wait("와아, 감사해요♪");
      await gs.say_and_wait("이 수영장 넓이가 훈련에는 충분할지 몰라도……");
      await gs.say_and_wait(
        `${daiya.uma_sex_title}의 가능성을 난 더 믿거든! 넓은 수영장의 해방감이 ${daiya.uma_sex_title}에게 어떤 신세계를 열어 줄지 내 눈으로 보고 싶단 말이야!`,
      );
      await daiya.say_and_wait(
        `어머! 골시는 그렇게나……${daiya.uma_sex_title}를 생각하고 계셨군요!`,
      );
      await gs.say_and_wait("그래. 그래서 정했다……나는──");
      await gs.say_and_wait("이 수영장을 오호츠크해로 만들겠어!");
      await daiya.say_and_wait(
        "오호츠크해! ……오호츠크해요? 그러니까 무슨 뜻인가요?",
      );
      await gs.say_and_wait(
        "오호츠크해를 수영장으로 가져오는 거야! 그러면 원하는 만큼 훈련할 수 있지!",
      );
      await daiya.say_and_wait(
        "정말 장대한 공사네요……! 정말 가능할까요?",
      );
      await gs.say_and_wait(
        "가능하지! 전교생이 오십 년 동안 양동이로 물을 나르면 돼!",
      );
      era.printButton("「난도가 너무 높은데……」", 1);
      await era.input();
      await daiya.say_and_wait(
        "그래도 현실적인 문제만 빼면 정말 멋진 이상이라고 생각해요.",
      );
      await daiya.say_and_wait(
        "……그리고 듣다 보니 정말 기대돼요!",
      );
      await gs.say_and_wait("다이아……이 녀석!");
      await daiya.say_and_wait("수영장을 넓히는 데도 찬성이에요.");
      await daiya.say_and_wait(
        "해 봐요, 골시! 최선을 다해 도울게요!",
      );
      era.printButton("「지금 넓이로 충분해」(파워+20)", 1);
      era.printButton("「학원에 이 제안을 전하자!」(지능+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "그건 그렇지만 개조하면 더 좋은 환경이 될 텐데요?",
        );
        await you.say_and_wait("소중한 시간을 전부 양동이로 물 나르는 데 쓰게 될 텐데?");
        await daiya.say_and_wait("앗……!? 그, 그건……");
        await gs.say_and_wait(
          "곤란하네……그렇게까지 말하면 강요할 수는 없지.",
        );
        await gs.say_and_wait(
          "하지만 언젠가는 할 거야. 실행 전에 만반의 준비를 하고 송곳니를 갈아 두겠어……무 강판으로 말이지.",
        );
        await daiya.say_and_wait("……네!");
        await era.printAndWait(
          `두 사람은 힘차게 악수하며 약속했다. 실행하는 날이 온다면……그때는 ${you.name}이(가) 말리자.`,
        );
      } else {
        await daiya.say_and_wait("그렇다면……기획서를 만들어야겠네요?");
        await gs.say_and_wait("좋은 생각이야! 구체적으로 쓰면 설득력이 생기지!");
        await daiya.say_and_wait("후후후, 점점 재미있어지네요♪");
        await daiya.say_and_wait(
          "『트레센 학원 수영장을 오호츠크해로 만드는 계획』, 시작이에요!",
        );
        await era.printAndWait(
          "이후 계획은 실현되지 않았지만 사토노 다이아몬드에게는 좋은 경험이 되었다!",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_chase: (() => {
    const title = "동경을 뒤쫓아서";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(`어느 날, ${you.name}이(가) 광장을 걷고 있는데──`);
      await daiya.say_and_wait('…………');
      era.printButton("「뭐 하고 있어?」", 1);
      await era.input();
      await daiya.say_and_wait("트레이너님!?");
      await daiya.say_and_wait("쉿! 지금 맥퀸을 조사하는 중이에요……!");
      await mcqueen.say_and_wait('……');
      await mcqueen.say_and_wait(
        "시선이 느껴지는데? ……아니, 기분 탓이겠죠.",
      );
      await daiya.say_and_wait("……후우. 위험했어요……!");
      await daiya.say_and_wait(
        "맥퀸의 강함의 비밀을 알아낼 때까지 관찰하는 걸 들켜서는 안 돼요.",
      );
      await you.say_and_wait(`차라리 직접 ${mcqueen.sex}에게 물어보면 되잖아`);
      await daiya.say_and_wait("안 돼요! 직접 조사하는 게 더 재미있는걸요!");
      await daiya.say_and_wait("……어머? 맥퀸이 없어요!?");
      await daiya.say_and_wait(
        "잠깐 한눈팔았을 뿐인데……어디로 가셨을까요?",
      );
      era.printButton("「연습실에서 노래 연습을 할지도 몰라」(근성+20)", 1);
      era.printButton("「식당에서 머리를 싸매고 있을 것 같아」(지능+20)", 2);
      era.printButton(
        `「${mcqueen.sex}라면 분명 훈련 코스에서 단련하고 있을 거야!」(파워+20)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait("알겠어요. 가 봐요!");
          await daiya.say_and_wait(
            "연습실이 여러 개네요. 어디부터 찾으면──",
          );
          await mcqueen.print_and_wait("???「우오~, 불타올라라~!」");
          await daiya.say_and_wait("노랫소리……이 방에서 들려요.");
          await mcqueen.say_and_wait("꿈을 싣고, 아아──우리의~ 승리……♪");
          await daiya.say_and_wait(
            "와아~! 맑고 힘찬 목소리……멋져요♪",
          );
          await mcqueen.say_and_wait(
            "다이아!? 네? 저기, 어떻게 여기에……?",
          );
          await mcqueen.say_and_wait(
            "설마……방음이 된다고 너무 큰 소리로……!",
          );
          await daiya.say_and_wait(
            "후후, 덕분에 찾았어요! 맥퀸의 비밀을요.",
          );
          await mcqueen.say_and_wait(
            "비, 비밀!? 무슨 뜻인지 모르겠네요. 그, 그냥 기분 전환으로 노래했을 뿐인데……!",
          );
          await daiya.say_and_wait(
            "……아니요, 이제 다 알았어요. 맥퀸은 사실──",
          );
          await daiya.say_and_wait(
            "노래로 자신을 북돋워 능력을 끌어올리는 거군요!",
          );
          await mcqueen.say_and_wait(
            "……네? 아, 아아……그런 뜻이었군요? 오, 오호호호~",
          );
          await daiya.say_and_wait(
            "저기……저에게도 가르쳐 주세요. 방금 들으니 가슴이 뛰던 그 노래를……!",
          );
          await mcqueen.say_and_wait(
            "가슴이 뛴다고요……? 그러니까……마음에 드셨나요?",
          );
          await daiya.say_and_wait(
            "네. 선율이 정말 열정적이라 어느새 즐거워져서──",
          );
          await daiya.say_and_wait(
            "이 노래에 담긴 마음을 더 알고 싶어요!",
          );
          await mcqueen.say_and_wait('……！');
          await mcqueen.say_and_wait(
            "……먼저 두 가지 말할게요. 하나, 오늘 일은 아무에게도 말하지 말 것.",
          );
          await mcqueen.say_and_wait("둘──제 지도는 만만하지 않을 거예요.");
          await daiya.say_and_wait("……! 알겠어요!");
          await mcqueen.say_and_wait(
            "자, 가슴을 펴고! 하늘에 울려 퍼질 목소리로……셋, 시작.",
          );
          await daiya.say_and_wait("불타올라라~!");
          await era.printAndWait(
            "사토노 다이아몬드는 목소리를 한껏 높여 노래하며 뜨거운 열혈 노래를 익혔다.",
          );
          break;
        case 2:
          await daiya.say_and_wait(
            "후후후, 그 모습이 저절로 떠오르네요. 그럼 가요.",
          );
          await mcqueen.say_and_wait(
            "팬케이크, 과일 타르트……고구마 맛탕에 행인두부……!",
          );
          await mcqueen.say_and_wait(
            "다 매력적이네요……하지만 열량 초과는 피해야 해요! 생각해……잘 생각해……!",
          );
          await daiya.say_and_wait(
            "맥퀸이 디저트를 고르는 데 이렇게 진지하다니……!",
          );
          await daiya.say_and_wait(
            "……알 것 같아요. 맥퀸의 강함의 비밀을요.",
          );
          await daiya.say_and_wait(
            "일상의 사소한 일까지 진지하게 생각하며 한 걸음씩 신중하게 내딛는 것……중요하군요!",
          );
          await daiya.say_and_wait("맥퀸!");
          await mcqueen.say_and_wait(
            "꺅! 다, 다이아……!? 설마……전부 보고……!?",
          );
          await daiya.say_and_wait(
            "네. 정말 진지한 표정을 봤어요……멋졌어요, 맥퀸!",
          );
          await mcqueen.say_and_wait(
            "그, 그렇게 말하니……기쁜 건지 부끄러운 건지……!",
          );
          await daiya.say_and_wait(
            "저도 맥퀸처럼 신중하게 디저트를 고를게요.",
          );
          await daiya.say_and_wait("으음, 뭘 고를까요……어머?");
          await daiya.say_and_wait(
            "지금 개최 중인……『진기한 디저트전』이에요! 그럼 저걸로 할게요♪",
          );
          await mcqueen.say_and_wait(
            "『오징어 치즈 케이크』, 『푸딩 초밥』……이건 무슨 메뉴죠!?",
          );
          await mcqueen.say_and_wait(
            "저기, 다이아……방금 신중하게 고르겠다고 하지 않으셨나요?",
          );
          await daiya.say_and_wait(
            "네! 이 신비하고 기묘한 디저트들……골라서 먹어 볼 가치가 있지 않나요♪",
          );
          await mcqueen.say_and_wait(
            "……! 훌륭한 탐구심이네요……! 디저트와 정면 대결하는 거군요?",
          );
          await mcqueen.say_and_wait(
            "……저도 도전하겠어요! 『진기한 디저트전』에!",
          );
          await daiya.say_and_wait(
            "맥퀸……! 함께 디저트의 신세계를 열어 봐요.",
          );
          await daiya.say_and_wait(
            "그럼……저 『버섯 몽블랑』은 어떨까요?",
          );
          await mcqueen.say_and_wait(
            "……저기, 다이아. 조금 더 생각해도 될까요?",
          );
          await era.printAndWait(
            "두 사람은 고심 끝에 메뉴를 골라 맛있는 디저트를 즐겼다!",
          );
          break;
        case 3:
          await daiya.say_and_wait(
            "비밀 특훈의 정석이죠. 보러 가요……!",
          );
          await mcqueen.say_and_wait(
            "저기……코스 한가운데서 뭘 하는 건가요?",
          );
          await gs.say_and_wait("관문 역할이지. 지나가고 싶으면 웃겨 봐.");
          await mcqueen.say_and_wait(
            "다른 분들께 방해돼요. 비켜 주세요, 골시.",
          );
          await gs.say_and_wait("……응? 방금 개그는 어디가 웃긴 거야?");
          await mcqueen.say_and_wait("개그가 아니에요! 정말, 힘으로라도……!");
          await mcqueen.say_and_wait("하나, 둘──읏!!");
          await gs.say_and_wait("어어!? 밀어낼 수가 없어……!?");
          await gs.say_and_wait(
            "그대로 가 버렸네……힘이 너무 세잖아. 저 녀석, 보통이 아니군.",
          );
          await daiya.say_and_wait(
            "저기, 방금 뭘 하신 건가요? 씨름처럼 보였는데……",
          );
          await gs.say_and_wait(
            "맞아. 멋진 장면을 봤군. 난 완전히 상대가 안 됐어.",
          );
          await daiya.say_and_wait(
            "그럼 맥퀸이 강한 이유는 아주 튼튼한 허리와 다리……!?",
          );
          await daiya.say_and_wait(
            "……골시. 저와도 씨름해 주실래요……부탁해요!",
          );
          await gs.say_and_wait("후──……아직 일러. 먼저 엉뚱한 소리 하는 법부터 배워.");
          await daiya.say_and_wait("엉뚱한 소리요……?");
          await mcqueen.say_and_wait("……후우, 기록이 오르지 않네요.");
          await mcqueen.say_and_wait(
            "아까 힘을 너무 썼나 봐요. 골시……또 누군가에게 폐를 끼치고 있지 않으면 좋겠는데.",
          );
          await mcqueen.say_and_wait("……어머? 저건?");
          await gs.say_and_wait("근육, 근육──");
          await gs.say_and_wait("번뜩이는 근육!!");
          await daiya.say_and_wait("가자미근!");
          await gs.say_and_wait(
            "안 돼, 안 돼! 허리에 힘이 하나도 안 들어갔잖아! 맥퀸이 훨씬 더 진지했어!",
          );
          await daiya.say_and_wait("……네!!");
          await mcqueen.say_and_wait(
            "저는 그런 걸 한 기억이 없어요!",
          );
          await daiya.say_and_wait("맥퀸!?");
          await daiya.say_and_wait(
            "저기, 이건 무슨……어머, 골시가 없네요?",
          );
          await era.printAndWait(
            "사토노 다이아몬드는 기묘한 개그 특훈 덕분에 뜻밖에도 근육을 단련할 수 있었다!",
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_diamond_cotton: (() => {
    const title = "부드러운 솜 속의 단단한 다이아몬드";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await era.printAndWait("오늘은 승부복 촬영을 포함한 취재가 있는 날이다.");
      await era.printAndWait(
        `${you.name}와(과) 사토노 다이아몬드는 조금 일찍 스튜디오로 향했다. 지금──`,
      );
      await daiya.say_and_wait("흥, 흥, 흐흥~♪");
      await era.printAndWait(
        `승부복으로 갈아입은 ${daiya.sex}는 카메라 앞에서 움직이며 자세를 잡고 가끔 화면으로 결과를 확인하고 있다.`,
      );
      era.printButton("「진지하게 확인하네」", 1);
      await era.input();
      await daiya.say_and_wait(
        "네. 전하고 싶은 느낌이 제대로 담겼는지 확인하고 있어요.",
      );
      await you.say_and_wait("전하고 싶은 느낌?");
      await daiya.say_and_wait(
        "네. 이 승부복은 평소 소중히 여기는 마음을 주제로 디자인됐어요.",
      );
      await daiya.say_and_wait(
        "취재를 보시는 분들이 그 마음을 느끼셨으면 해요.",
      );
      await era.printAndWait(
        `듣고 보니 ${daiya.sex}의 승부복에는 특히 인상적인 부분이 있다.`,
      );
      era.printButton("「다이아몬드 장식이 제일 인상적이야」(근성+20)", 1);
      era.printButton("「프릴이 제일 인상적이야」(스태미나+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("네, 맞아요!");
        await daiya.say_and_wait(
          "물론 이름과도 관련 있지만 동시에 굳건한 의지도 나타내고 있어요.",
        );
        await daiya.say_and_wait("예를 들면 종유석이죠.");
        await daiya.say_and_wait(
          "비가 땅에 내리고 석회 성분을 품은 물이 떨어지며 만들어져요.",
        );
        await daiya.say_and_wait(
          "몇만 년, 몇십만 년 동안 같은 자리에 쌓여 단단하고 커지죠.",
        );
        await daiya.say_and_wait(
          `${daiya.uma_sex_title}의 강함도 그와 비슷하다고 생각해요.`,
        );
        await daiya.say_and_wait("──다시 말해 끝까지 관철하는 거예요.");
        await daiya.say_and_wait(
          "목표를 정하고 계속 나아가는 것. 그 노력이 승리를 가져온다고 믿어요.",
        );
        await era.printAndWait(
          `${daiya.sex}가 그렇게 말하는 눈에는 다이아몬드 장식처럼 강한 신념과 의지가 떠올라 있었다.`,
        );
      } else {
        await daiya.say_and_wait("어머, 그걸 알아보셨군요!");
        await daiya.say_and_wait(
          "프릴이 귀여워서 좋아하기도 하지만 가장 중요한 건 그 부드러움이에요.",
        );
        await daiya.say_and_wait(
          "목표가 높고 멀수록 나아가는 길에는 어려움이 늘어나죠.",
        );
        await daiya.say_and_wait(
          "어려움 하나하나에 힘으로만 맞서면 아무리 단단한 보석도 금이 갈 거예요.",
        );
        await daiya.say_and_wait(
          "그러니──때로는 부드러움으로 강함을 제압하는 것도 중요해요.",
        );
        await daiya.say_and_wait(
          "그러면 불필요한 걱정을 줄이고 나아갈 방향에 집중할 수 있다고 믿어요.",
        );
        await era.printAndWait(
          `${daiya.sex}가 그렇게 말하는 눈에는 프릴에 담긴 마음처럼 부드러운 빛이 떠올라 있었다.`,
        );
        await era.printAndWait(
          `그 뒤에도 한동안 이야기를 나눴지만 본 촬영까지는 아직 시간이 남았다.`,
        );
        era.printButton("「뭐라도 마시면서 기다리자」", 1);
        await era.input();
        await daiya.say_and_wait(
          "좋아요! 그럼 함께 차를 마셔요!",
        );
        await daiya.say_and_wait("그런데 차는……어디서 살 수 있나요?");
        era.printButton("「복도에 자판기가 있었을 텐데──」", 1);
        await era.input();
        await daiya.say_and_wait(
          "자동판매기! 아까 보니 보통 기종과 달라서 궁금했어요!",
        );
        await daiya.say_and_wait(
          "트레이너님, 제게 맡겨 주세요. 자판기에서 차를 사 올게요.",
        );
        await era.printAndWait(
          `${you.name}은(는) 의욕 넘치는 사토노 다이아몬드를 보냈다……아까 『보통과 다르다』는 말이 신경 쓰이기 시작한다.`,
        );
        await era.printAndWait(
          `따라가는 게 좋겠다.${you.name}이(가) ${daiya.sex}를 따라가려는 순간──`,
        );
        await daiya.say_and_wait(
          "……어머, 캔도 페트병도 없네요. 이 패널은? 누르면 될까요? 아니면 이 버튼……?",
        );
        await era.printAndWait("철컥, 철컥──");
        await daiya.say_and_wait("어머! 컵이 나왔어요!");
        await era.printAndWait("쏴아아아아!");
        await daiya.say_and_wait(
          "와아, 얼음이 떨어지네요!? 차가 나올 기미가 없어요. 멈춰야 할까요?",
        );
        era.printButton("「지금 갈 테니 거기서 움직이지 마!」", 1);
        await era.input();
        await era.printAndWait(
          `${daiya.sex}에게는 매우 침착하고 든든한 면도 있고 그 반대도 있다. 이번에 ${you.name}은(는) 새삼 앞으로도 ${daiya.sex}를 잘 지켜봐 주겠다고 다짐했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_high_place: (() => {
    const title = "동경하는 이가 기다리는 높은 곳으로";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(
        `휴일에 ${you.name}은(는) 카페에서 사토노 다이아몬드와 메지로 맥퀸을 보았다.`,
      );
      await daiya.say_and_wait("아, 트레이너님! 안녕하세요!");
      await daiya.say_and_wait(
        "후후, 오늘은 맥퀸이 추천하는 카페에 데려와 주셨어요!",
      );
      await mcqueen.say_and_wait(
        "좋아하는 걸 고르세요. 여기 메뉴는 뭘 시켜도 실망하지 않을 거예요.",
      );
      await daiya.say_and_wait("감사해요! 볼게요……!");
      await daiya.say_and_wait(
        "대단해요……! 이 가게는 디저트가 무려 129종류나……!",
      );
      await daiya.say_and_wait(
        "……네? 『모든 메뉴를 정복한 고객에게 특별한 영예를……!?』이건……무슨 뜻인가요?",
      );
      await mcqueen.say_and_wait(
        "그, 그건……저도 소문으로만 들었는데 모든 메뉴를 먹은 분에게 『마스터』 칭호를 준대요.",
      );
      await mcqueen.say_and_wait("지금까지 그 칭호를 얻은 사람은 없다고……");
      await gs.say_and_wait("맞아──(감량 중인) 맥퀸 말고는 없지.");
      await mcqueen.say_and_wait("어떻게 알고 있죠!? 그리고 왜 여기에!?");
      await daiya.say_and_wait(
        "맥퀸만 얻은 칭호……정말 흥미로워요!",
      );
      await daiya.say_and_wait(
        "도전해 보고 싶어요! 우선 메뉴 왼쪽의 스무 가지부터!",
      );
      era.printButton("「필요 이상의 열량이야」(체력+100)", 1);
      era.printButton("「도전해 볼까」(체력+300, 체중 증가)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "그건 그렇지만……으음, 안 되나요……?",
        );
        await mcqueen.say_and_wait(
          "현명한 판단이에요. 저는 열흘 동안 필사적으로 완주했더니 체중이──",
        );
        await mcqueen.say_and_wait(
          "크흠. 맛있는 음식도 적당히 먹어야죠. 자, 다시 먹고 싶은 걸 골라 봐요──",
        );
        await gs.say_and_wait(
          "내 추천은 돈가스덮밥에 오이절임, 그리고 바지락국이야.",
        );
        await daiya.say_and_wait("그렇다면……그걸로──");
        await mcqueen.say_and_wait(
          "그런 메뉴는 없어요! 골시는 얼른 돌아가세요!",
        );
        await era.printAndWait(
          "그 뒤 사토노 다이아몬드는 메지로 맥퀸이 추천한 디저트를 주문했다……열량을 고려한 선택이다.",
        );
      } else {
        await daiya.say_and_wait("네! 반드시 맥퀸을 따라잡겠어요!");
        await daiya.say_and_wait(
          "으으……더, 더는 안 되겠어요……온몸에서 디저트의 단맛이 나오는 것 같아요……",
        );
        await daiya.say_and_wait(
          "아직 맥퀸의 경지에는 도달하지 못했어요……",
        );
        await mcqueen.say_and_wait(
          "당연하죠. 저도 열흘에 걸쳐 완주했는걸요. 한 번에 스무 가지라니……",
        );
        await gs.say_and_wait(
          "아니, 아니, 충분히 대단하잖아. 잘됐네, 맥퀸. 후계자가 생겼어.",
        );
        await mcqueen.say_and_wait(
          "무슨 후계자예요!? 하아, 제 실수 때문에 후배까지 휘말리다니……!",
        );
        await era.printAndWait(
          `사토노 다이아몬드는 엄청난 열량을 섭취했다.${daiya.sex}는 이대로 두 번째 『마스터』가 되는 걸까……!?`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_fresh: (() => {
    const title = "신선하게!";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} kita キタサンブラック
     */
    const f = async (daiya, kita) => {
      await era.printAndWait(
        "사토노 다이아몬드와 외출하던 중 채소 가게 주인과 이야기하는 키타산 블랙이 보였다.",
      );
      await daiya.say_and_wait(
        "어라? 키타짱, 무슨 일이야? 고민하는 표정인데……",
      );
      await kita.say_and_wait("아, 다이아. 채소 가게 아저씨가 곤란해하셔서……");
      await era.printAndWait(
        "채소 가게 아저씨「이야~, 오늘은 채소가 잔뜩 남았어……손님도 통 없고.」",
      );
      await era.printAndWait(
        "채소 가게 아저씨「싸요, 싸~ 신선하고 맛있는 채소예요……」",
      );
      era.printButton("「…………정말 아무도 안 오네」", 1);
      await era.input();
      await era.printAndWait(
        "채소 가게 아저씨「그렇지? 응원하는 야구팀이 지면 매번 이래. 정말 싫은 징크스야……」",
      );
      await kita.say_and_wait("아저씨는 이 징크스에 몇 번이나 당하셨대.");
      await daiya.say_and_wait("……읏!");
      await daiya.say_and_wait(
        "아저씨, 징크스는 깰 수 있어요! 포기하지 말고 맞서 봐요!",
      );
      await daiya.say_and_wait(
        "예를 들면……남은 채소를 제가 전부 사면 어떨까요?",
      );
      era.printButton("「그건 좀……」", 1);
      await era.input();
      await kita.say_and_wait(
        "그럼 다른 방법으로……! 나도 곤란한 사람을 돕고 싶어!",
      );
      await kita.say_and_wait("……맞다! 같이 팔게 해 줘요!");
      await daiya.say_and_wait("저도요! 함께 징크스를 깨 봐요!");
      await kita.say_and_wait("상점가 여러분!");
      await kita.say_and_wait("채소 어떠세요──!");
      await era.printAndWait("행인「무슨 일이야!?」");
      await era.printAndWait(
        "키타산 블랙의 힘찬 호객 소리가 상점가에 울려 퍼지자 지나가던 사람들이 발을 멈췄다.",
      );
      await daiya.say_and_wait(
        "싱싱한 토마토에 윤기 나는 가지! 저녁거리 어떠세요~?",
      );
      await era.printAndWait(
        "주부「어머, 기운찬 목소리네~ 잠깐 보고 갈까.」",
      );
      await daiya.say_and_wait(
        "모두 추천해요♪ 편하게 둘러보세요.",
      );
      await kita.say_and_wait("헤헤헤, 좋아! 효과 만점이야!");
      await daiya.say_and_wait("키타짱의 힘찬 목소리 덕분이야♪");
      await kita.say_and_wait(
        "다이아의 손님 응대도 좋네! 평소 예의 바른 게 빛을 발하네!",
      );
      await era.printAndWait("사람들이 모여들어 북적였다……");
      await era.printAndWait(
        "채소 가게 아저씨「이건……! 응원하는 팀이 진 뒤에 이렇게 많이 팔린 건 처음이야!」",
      );
      await daiya.say_and_wait(
        "후후후, 특별한 건 하지 않았어요. 아저씨도 평소처럼 기운 내시면 저희가 없어도 잘 팔릴 거예요.",
      );
      await kita.say_and_wait(
        "아, 맞아요! 오늘 아저씨 호객 소리에는 평소 같은 활기가 없었던 것 같아요!",
      );
      await era.printAndWait(
        "채소 가게 아저씨「아, 그렇구나……! 듣고 보니 풀이 죽어 있었네.」",
      );
      await daiya.say_and_wait(
        "『징크스에 지지 않겠어!』『신경 쓰지 말고 즐겁게 지내자!』",
      );
      await daiya.say_and_wait(
        "그런 마음으로 손님을 부르면 징크스는 금방 깨질 거예요♪",
      );
      era.printButton(
        "「언제나 긍정적인 게 최고야!」(스피드+20)",
        1,
      );
      era.printButton("「어떤 징크스든 깰 수 있어?」(스태미나+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("후후, 맞아요!");
        await daiya.say_and_wait(
          "맞다. 다른 징크스로 고민하는 분도 찾아볼까요? 도움이 될지도 몰라요!",
        );
        await kita.say_and_wait(
          "나도, 나도! 상점가의 다른 분들께도 물어보자!",
        );
        await era.printAndWait(`세 사람은 상점가를 걸으며 아직 모르는 징크스를 찾았다!`);
      } else {
        await daiya.say_and_wait(
          "어머, 안 믿으세요? 그럼 징크스를 하나 더 깨서 보여 드릴게요!",
        );
        await era.printAndWait(
          "채소 가게 아저씨「징크스라면 또 있어! 『장사가 잘되는 날에는 꼭 오이가 남는다』는 징크스야!」",
        );
        await kita.say_and_wait(
          "그럼 오이를 먹으면 좋은 점을 홍보하자. 예를 들면……맛있게 먹는 시범 같은 거?",
        );
        await daiya.say_and_wait(
          "좋은 생각이야! 평소 자주 먹는 별 셋짜리 레스토랑 셰프에게 방법을 여쭤볼게♪",
        );
        await era.printAndWait(
          "시식 판매가 호평을 받아 사토노 다이아몬드 일행은 오이도 모두 팔았다!",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_heartbeat_excite: (() => {
    const title = "두근두근 설렘";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, you) => {
      await era.printAndWait(
        "외출 중 사토노 다이아몬드가 거대한 포스터 앞에서 걸음을 멈췄다.",
      );
      await daiya.say_and_wait(
        "『유원지 역사상 가장 무서운 롤러코스터──헤븐 탄생……용감한 도전자를 모집합니다』?",
      );
      await daiya.say_and_wait(
        "높이 때문일까요……아니면 속도? 어떤 롤러코스터일까요……!",
      );
      await daiya.say_and_wait("유원지에 가야겠어요!");
      era.printButton("「뭐!? 잠깐……」", 1);
      await era.input();
      await daiya.say_and_wait("자, 트레이너님. 가요♪");
      await daiya.say_and_wait(
        "아, 저거예요! 저 높은 곳의 레일……전설의 공포 롤러코스터가 틀림없겠죠!?",
      );
      await era.printAndWait(
        "그것이 『헤븐』……구름을 꿰뚫을 듯한 높이는 이름에 걸맞은 규모였다!",
      );
      await era.printAndWait(
        "행인 A「우와……정말 『천국』에 다녀온 것 같아……! 저럴 줄은 몰랐어……」",
      );
      await era.printAndWait(
        "행인 B「안 돼, 못 타겠어……오 대 위 조상님까지 보였어……!」",
      );
      await daiya.say_and_wait(
        "어머, 타신 분들이 저렇게 무서워하다니……! 이러면──",
      );
      await daiya.say_and_wait(
        "저도 긴장되고 짜릿해지네요! 완전히 새로운 경험이 될 것 같아요♪",
      );
      era.printButton("「재미있어 보이기는 하는데……」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 도전하고 싶은 마음과 무서운 마음이 맞서고 있었다……`,
      );
      await daiya.say_and_wait(
        "트레이너님, 왜 그러세요? 별로 타고 싶지 않으신가요……?",
      );
      await daiya.say_and_wait("그렇다면……타고 싶어지실 때까지 기다릴게요♪");
      await era.printAndWait(
        `일단 유원지 안을 둘러보며 느긋하게 지내기로 했다.`,
      );
      await daiya.say_and_wait("냠냠……");
      await daiya.say_and_wait("잘 먹었습니다♪");
      await daiya.say_and_wait("아, 롤러코스터. 지금은 줄이 조금 짧아진 것 같은데요?");
      era.printButton("「혼자 타도 괜찮아」", 1);
      await era.input();
      await daiya.say_and_wait(
        "으음, 그건 사양할게요! 혼자라도 재미있겠지만……",
      );
      await daiya.say_and_wait(
        "혼자 느끼는 긴장과 짜릿함으로는 부족할 것 같아요.",
      );
      await daiya.say_and_wait(
        "……돌이켜 보면 트레이너님과 정말 여러 곳에 갔네요.",
      );
      await daiya.say_and_wait("미지의 세계를 들여다보고 새로운 걸 찾고──");
      await daiya.say_and_wait("새로운 경험을 하고 더 재미있는 걸 찾아서……");
      await daiya.say_and_wait(
        "조금만 떠올려도 멋진 추억이 가득해요……그래서 알았어요.",
      );
      await daiya.say_and_wait(
        "트레이너님이 곁에 계시면……모든 설렘이 두 배가 된다는 걸요!",
      );
      await daiya.say_and_wait(
        "그러니 언제까지나 기다릴게요♪ 그 긴장과 짜릿함을 함께 맛봐 주실 때까지!",
      );
      era.printButton("「아직 각오가 안 됐어……」(스태미나+20)", 1);
      era.printButton("「좋아, 타자!」(근성+20)", 2);
      era.printButton("「다른 모험을 찾아볼까?」(지능+20)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait("네──알겠어요♪");
          await era.printAndWait(
            `하지만 ${you.name}은(는) 결심하지 못한 채 통금 시간이 다가오고 말았다……`,
          );
          await daiya.say_and_wait("그럼……돌아가요!");
          era.printButton("「괜찮아?」", 1);
          await era.input();
          await daiya.say_and_wait(
            "괜찮아요. 저는 좋아하는 건 마지막까지 아껴 두는 편이거든요.",
          );
          await daiya.say_and_wait(
            "그러니 언젠가 함께 경험해 봐요♪",
          );
          await era.printAndWait(
            `그날이 오면 ${you.name}은(는) 용기를 내겠다.${daiya.sex}의 미소를 위해 마음속으로 그렇게 맹세했다!`,
          );
          break;
        case 2:
          await daiya.say_and_wait(
            "와아~, 그 말을 기다렸어요! 가요, 가요!",
          );
          await era.printAndWait("덜컹덜컹덜컹덜컹……휘이────!");
          await daiya.say_and_wait("꺄아아아아──────!");
          era.printButton("「헤븐────────!!」", 1);
          await era.input();
          await daiya.say_and_wait(
            "정말 엄청난 경험이었어요, 트레이너님! 아까 정말 예쁜 꽃밭이 보였거든요!",
          );
          await daiya.say_and_wait(
            "……맨 앞자리에 앉으면 뭐가 보일까요!",
          );
          await era.printAndWait(
            `맨 앞자리에 탈 때까지 다시 줄을 서며 즐겁고도 어지러운 하루를 보냈다!`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            "어머, 좋은 생각이에요! 사실 다른 놀이기구도 궁금했거든요♪",
          );
          await daiya.say_and_wait(
            "회전 찻잔에 귀신의 집……마지막 순간까지 놀아요!",
          );
          await daiya.say_and_wait(
            "자, 트레이너님! 먼저 귀신의 집이에요~",
          );
          await daiya.say_and_wait(
            "어디 볼까요──가장 무서운 귀신의 집……『헬』!",
          );
          await era.printAndWait(
            `롤러코스터를 타지 않아도 ${you.name}은(는) 사토노 다이아몬드와 즐거운 시간을 보낼 수 있었다!`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_practice: (() => {
    const title = "댄스 레슨";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, teio, you) => {
      await era.printAndWait(
        `사토노 다이아몬드가 봐 달라고 부탁해서 ${you.name}은(는) ${daiya.sex}의 춤 연습에 함께하고 있다.`,
      );
      await daiya.say_and_wait("이렇게, 그다음은 이렇게……그리고 이렇게──");
      await daiya.say_and_wait(
        "……으음, 뭔가 달라요. 고수라면 이렇게 추지 않을 텐데.",
      );
      await daiya.say_and_wait("더 기백을 담아서──");
      await daiya.say_and_wait("……앗!");
      era.printButton("「괜찮아!?」", 1);
      await era.input();
      await daiya.say_and_wait("괜찮아요. 실례했네요……");
      await era.printAndWait(
        "어째서인지 사토노 다이아몬드의 춤은 헛도는 것처럼 보였다.",
      );
      era.printButton("「고민이 있어?」", 1);
      await era.input();
      await daiya.say_and_wait('……');
      await daiya.say_and_wait("사실……키타짱은 노래를 잘하잖아요?");
      await daiya.say_and_wait(
        "저도 연습은 하고 있지만 하루아침에 도달할 수준이 아니에요.",
      );
      await daiya.say_and_wait(
        "그래서 적어도 스텝만큼은 자랑할 만한 수준에 이르고 싶어서요.",
      );
      era.printButton("「기초부터 다시 점검해 볼까」(스피드+20)", 1);
      era.printButton(
        "「키타산 블랙의 노래에 맞춰 춰 볼래?」(파워+20)",
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "네. 키타짱이 그렇게 노래를 잘하는 것도 기초가 탄탄해서겠죠.",
        );
        await daiya.say_and_wait(
          "저도 기초 스텝부터 다시 시작해서 조금씩 쌓아 가면──",
        );
        await teio.print_and_wait("???「뭐야, 뭐야? 스텝 이야기?」");
        await daiya.say_and_wait(
          "와아, 테이오!? ……방금 이야기 들으셨어요?",
        );
        await teio.say_and_wait("응, 기초 스텝이라고 했지?");
        await teio.say_and_wait(
          "흐흥──스텝이라면 내 차례네! 가르쳐 줘도 되는데~?",
        );
        await daiya.say_and_wait(
          "확실히 스텝이라면 테이오죠. 하지만 테이오는 키타짱도 존경하는 분인데.",
          true,
        );
        await daiya.say_and_wait(
          "저 혼자 배우기는 조금 미안해서……",
          true,
        );
        await daiya.say_and_wait(
          "──아니에요. 사양할 때가 아니죠. 춤을 완성하기로 했으니까!",
          true,
        );
        await daiya.say_and_wait(
          "테이오, 괜찮으시면 지도해 주실래요? 다만──",
        );
        await teio.say_and_wait("다만?");
        await daiya.say_and_wait(
          "……키타짱에게는 비밀로 해 주셨으면 해요. 저 혼자 테이오를 독차지한 것 같아 마음에 걸리거든요.",
        );
        await teio.say_and_wait(
          "그런 거구나! 다이아랑 나만의 비밀이네. 히히히, 알았어!",
        );
        await era.printAndWait(
          "토카이 테이오에게 지도를 받은 뒤 사토노 다이아몬드의 움직임은 전보다 부드러워졌다.",
        );
      } else {
        await daiya.say_and_wait(
          "어머, 키타짱 노래에 맞춰 춤을……? 그건 생각도 못 했어요!",
        );
        await daiya.say_and_wait(
          "하지만 좋겠네요. 키타짱의 노래에 질 수 없다는 마음이 더 강해질 테니까요!",
        );
        await daiya.say_and_wait("그럼──");
        await daiya.say_and_wait('……！', true);
        await daiya.say_and_wait(
          "키타짱의 목소리는 힘차고 생동감이 넘쳐……",
          true,
        );
        await daiya.say_and_wait(
          "내게 부족한 건 이 힘일지도 몰라……!",
          true,
        );
        await daiya.say_and_wait(
          "좋아, 나도 더 힘차게!! 더 강하게, 더 강하게──!!",
          true,
        );
        await daiya.say_and_wait(
          "어라? 출수록 뜨거워져……이 느낌, 즐거워요!!",
          true,
        );
        await era.printAndWait(
          "사토노 다이아몬드는 혼잣말하며 한동안 계속 춤을 췄다.",
        );
        await era.printAndWait(
          `조금 걱정스럽기는 하지만……${daiya.sex}의 스텝은 훨씬 더 절도 있어졌다!`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_banned_coffee: (() => {
    const title = "금단의 블렌드";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} coffee マンハッタンカフェ
     */
    const f = async (daiya, coffee) => {
      await era.printAndWait(
        "「맛있는 커피 내리는 법을 배우고 싶어요」. 맨하탄 카페는 사토노 다이아몬드의 소원을 도와주기로 했다.",
      );
      await daiya.say_and_wait("오늘 잘 부탁드려요!");
      era.printButton("「잘 부탁해!」", 1);
      await era.input();
      await coffee.say_and_wait(
        "네, 잘 부탁해요……맛있는 커피를 내려 봐요.",
      );
      await coffee.say_and_wait(
        "커피는 농장마다 맛이 달라요……품종이나 재배 방식도 큰 영향을 주죠.",
      );
      await coffee.say_and_wait("좋아하는 원두를 찾는 것도 즐거움이에요……골라 봐요……");
      await daiya.say_and_wait(
        "이렇게 많이……! 뭘 골라야 할지 모르겠어요.",
      );
      await coffee.say_and_wait(
        "그럴 때는……블렌딩을 해 봐도 좋아요. 미지의 세계……당신만의 한 잔이 탄생하죠.",
      );
      await daiya.say_and_wait(
        "미지의 세계……멋져요! 그럼 블렌딩에 도전할게요!",
      );
      await daiya.say_and_wait(
        "온두라스……초콜릿 향에 패션프루트 풍미……이것도!",
      );
      await coffee.say_and_wait("이걸로 열 종류……저기, 일단 이 정도에서──");
      await coffee.say_and_wait(
        "……네? 새로운 맛이 나올지도 모른다고요? 그건……틀린 말은 아니지만……",
      );
      await daiya.say_and_wait("좋아──이것도……아, 이것도!");
      await daiya.say_and_wait(
        "후후……직접 내린 나만의 블렌드♪ 잘 마시겠습니다.",
      );
      await era.printAndWait([
        { color: daiya.color, content: "두 ", fontWeight: 'bold' },
        { color: coffee.color, content: "사람", fontWeight: 'bold' },
        '「',
        { color: daiya.color, content: "꿀꺽" },
        '、',
        { color: coffee.color, content: "꿀꺽" },
        '……」',
      ]);
      await daiya.say_and_wait(
        "으음……쓴맛과 신맛이 서로 잡아당기네요. 별로 취향은 아니에요……!",
      );
      era.printButton("「실패네……」", 1);
      await era.input();
      await coffee.say_and_wait(
        "……원두 종류가 많을수록 맛은 복잡해져요. 각각의 자기주장이……너무 강했어요.",
      );
      await daiya.say_and_wait(
        "그렇군요……으음──맛이 싸우지 않게 하려면……",
      );
      await daiya.say_and_wait(
        "아! 방법이 있어요! 맛끼리 사이좋게 만들어 줄 도우미가!",
      );
      await daiya.say_and_wait("보세요! 채소밭이에요!");
      await daiya.say_and_wait(
        "채소는 여러 재료와 볶거나 끓이잖아요?",
      );
      await daiya.say_and_wait(
        "채소를 달인 차도 있으니 원두끼리의 맛을 중화할 수 있을지도 몰라요!",
      );
      era.printButton("「그건 안 하는 게……」", 1);
      await era.input();
      await coffee.say_and_wait("……다이아의 제안에 찬성해요.");
      await coffee.say_and_wait(
        "커피의 개념 자체를 뒤집다니……상식을 깨는 방식은 생각하지 못했어요……",
      );
      await daiya.say_and_wait("카페……!");
      await coffee.say_and_wait(
        "분명 재미있는 커피가 나올 거예요……『친구』도……그렇게 말하고 있어요.",
      );
      await daiya.say_and_wait(
        "에헤헤, 그렇죠? 저도 어떤 커피가 될지 상상도 안 돼요.",
      );
      await daiya.say_and_wait(
        "그래서 더 도전하고 싶어요……맛없는 커피가 되더라도……!",
      );
      era.printButton("「그 전에 기초를 익히는 게 어때?」(근성+20)", 1);
      era.printButton("「맛있어질 때까지 계속 도전하자!」(지능+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("그렇군요……우선 기초라는 거죠.");
        await daiya.say_and_wait(
          "알겠어요……기초를 익힌 뒤 모험은 나중에 할게요.",
        );
        await daiya.say_and_wait(
          "……좋아, 뜨거운 물을 부으면 완성이에요! 아……그런데 이 원두도 더하면──",
        );
        await coffee.say_and_wait("저기, 레시피에는……");
        await daiya.say_and_wait("──맞아요! 레시피대로……!");
        await era.printAndWait(
          "사토노 다이아몬드는 호기심을 누르고 맛있는 커피를 내리는 데 성공했다!",
        );
      } else {
        await daiya.say_and_wait("맡겨 주세요! 기대해 주세요!");
        await coffee.say_and_wait(
          "채소를 넣은 커피……됐어요. 시금치, 피망……초록색이네요.",
        );
        await daiya.say_and_wait(
          "향도 채소 그 자체네요……자, 잘 마시겠습니다!",
        );
        await era.printAndWait([
          { color: daiya.color, content: "두 ", fontWeight: 'bold' },
          { color: coffee.color, content: "사람", fontWeight: 'bold' },
          '「',
          { color: daiya.color, content: "꿀꺽" },
          '、',
          { color: coffee.color, content: "꿀꺽" },
          '……」',
        ]);
        await daiya.say_and_wait(
          "이건……맛이 없어요……! 아하, 아하하하!",
        );
        await coffee.say_and_wait("……네……후후.");
        await era.printAndWait("맛은 어쨌든 웃음을 가져다준 한 잔이었다!");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_satono_uma: (() => {
    const title = (daiya) => `사토노 가문으로서, ${daiya.uma_sex_title}로서`;
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} bright メジロブライト
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, ryan, bright, you) => {
      await era.printAndWait("휴일 해 질 무렵, 교문 근처를 지나는데──");
      await ryan.say_and_wait("다이아는 아직 안 돌아왔어?");
      await bright.say_and_wait(
        "그런 것 같네요~ 조금 더 여기서 기다려요~",
      );
      era.printButton("「사토노 다이아몬드에게 무슨 일 있어?」", 1);
      await era.input();
      await ryan.say_and_wait("당신은……다이아의 트레이너죠.");
      await ryan.say_and_wait(
        "사실 오늘 아침에 네이처가 다이아가 나가는 걸 봤대요. 회사에 간다고 했거든요.",
      );
      era.printButton("「회사!?」", 1);
      await era.input();
      await era.printAndWait(
        `뜻밖의 단어에 ${you.name}은(는) 놀라 메지로 라이언에게 자세히 물었다. 사토노 가문 소유의 회사로 간 모양이다.`,
      );
      await ryan.say_and_wait(
        "저녁에는 돌아온다고 했는데 아직 안 와서 걱정돼서요……",
      );
      era.printButton("「알려 줘서 고마워」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${daiya.couple_title}에게 이제부터는 자신이 맡겠다고 전하고 사토노 다이아몬드에게 전화하기로 했다.`,
      );
      await daiya.say_and_wait("어머, 트레이너님이세요?");
      era.printButton("「아직 회사야?」", 1);
      await era.input();
      await era.printAndWait(
        `상황을 물은 뒤 ${you.name}은(는) 메지로 라이언 일행이 걱정한다고 전했다.`,
      );
      await daiya.say_and_wait(
        "『어머, 걱정을 끼쳐 드렸네요. 하지만 이제 괜찮아요. 볼일은 거의 끝났어요.』",
      );
      era.printButton("「그래도 걱정돼. 데리러 갈게」", 1);
      await era.input();
      await daiya.say_and_wait(
        "데리러 와 주시나요? 그럼 회사 사람들에게 바로 들어오시게 해 달라고 전해 둘게요.",
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name}은(는) ${daiya.sex}가 알려 준 건물에 들어가 사토노 다이아몬드가 있는 층으로 향했다.`,
      );
      await era.printAndWait(
        `${daiya.sex}는 어디 있을까.${you.name}이(가) 주위를 둘러보자──`,
      );
      await era.printAndWait(
        "사토노 그룹 직원「──그럼 자선 레이스 건은 어떻게 할까요?」",
      );
      await daiya.say_and_wait("우선 일정과 개최지를 정해야겠어요.");
      await daiya.say_and_wait("다음 주 회의까지 어머니와 큰 틀을 생각해 둘게요.");
      await daiya.say_and_wait(
        "다 같이 힘을 모아서 당일에 더 많은 분이 오시게 해요♪",
      );
      await era.printAndWait("직원으로 보이는 사람이 인사하고 떠났다.");
      era.printButton("「자선 레이스?」", 1);
      await era.input();
      await daiya.say_and_wait("트레이너님, 오셨네요!");
      await daiya.say_and_wait(
        "사토노 그룹 자선 사업의 일환으로 지금 자선 레이스를 기획하고 있어요.",
      );
      await daiya.say_and_wait(
        `저도 사토노 가문의 일원이자 ${daiya.uma_sex_title}이기도 하니까 뭔가 도울 수 없을까 해서 작은 힘이나마 보태려고요.`,
      );
      await era.printAndWait(
        `${daiya.sex}가 그렇게 말하는 표정은 평소보다 의연했고 큰 책임감이 느껴졌다.`,
      );
      era.printButton("「역시 사토노 가문의 일원이네」(지능+20)", 1);
      era.printButton(
        "「자선 레이스에는 너도 나가?」(스태미나 & 파워+10)",
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("후후, 칭찬해 주셔서 영광이에요♪");
        await daiya.say_and_wait(
          "언젠가 사토노 가문을 이끄는 자리에 설 테니까요. 지금부터 시야와 견문을 넓혀 두고 싶어요.",
        );
        await daiya.say_and_wait(
          "그리고 이렇게 사토노 가문의 일원으로 활동하면 오히려 더 힘내고 싶어져요!",
        );
        await era.printAndWait(
          "그렇게 말하는 미소에는 사토노 가문의 대표라는 자부심이 보였다.",
        );
        await ryan.say_and_wait(
          "아, 돌아왔네! 다이아, 막 일을 마쳤는데도 기운이 넘치네.",
        );
        await daiya.say_and_wait(
          "사토노 가문을 짊어진 사람으로서 이 정도에 풀이 죽을 수는 없죠♪",
        );
        await ryan.say_and_wait(
          "아하하, 정말 네이처 말대로야! 그런 점은 맥퀸과 닮았네.",
        );
        await daiya.say_and_wait(
          "어머, 정말인가요!? 라이언, 방금 이야기 더 자세히 들려주세요!",
        );
        await daiya.say_and_wait("네, 그럴 생각이에요.");
        await daiya.say_and_wait(
          `아까 말씀드렸듯 저는 사토노 가문의 일원이자 ${daiya.uma_sex_title}이기도 해요.`,
        );
        await daiya.say_and_wait(
          `지금은 아직 어린 후배지만 언젠가 사토노 가문에도, ${daiya.uma_sex_title}업계에도 기여하고 싶어요!`,
        );
        await era.printAndWait(
          `현재뿐 아니라 먼 앞날까지 바라보는 ${daiya.sex}의 눈에서 ${you.name}은(는) 앞으로 활약할 모습을 그려 보았다.`,
        );
      } else {
        era.drawLine();
        await bright.say_and_wait(
          "어머, 어서 와요~ 일은 어땠나요?",
        );
        await era.printAndWait(
          `사토노 다이아몬드는 마중 나온 두 사람에게 자선 레이스 이야기를 했다.`,
        );
        await bright.say_and_wait(
          "어머, 재미있겠네요~ 그 레이스에는 저도 나가 보고 싶어요~",
        );
        await daiya.say_and_wait(
          "물론 대환영이에요! 메지로 가문 여러분도 꼭 와 주세요!",
        );
        await bright.say_and_wait(
          "후후후♪ 나가기로 했으니 우승을 노릴 거예요~",
        );
        await daiya.say_and_wait(
          "네, 레이스란 그런 거죠! 저도 진심으로 상대할게요♪",
        );
        await ryan.say_and_wait(
          "비슷한 성격의 애들이 모이겠네. 아하하, 당일에 어떻게 될지……",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_street_adv: (() => {
    const title = "뒷골목 모험";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, jordan, you) => {
      await era.printAndWait(
        `${you.name}와(과) 사토노 다이아몬드가 외출했다 돌아가는 길──`,
      );
      await daiya.say_and_wait("어머? 어머, 어머, 어머!?");
      await daiya.say_and_wait(
        "트레이너님, 엄청난 걸 찾았어요! 저기 『골목길』이 있어요!",
      );
      await daiya.say_and_wait(
        "와아~, 지금까지 몰랐어요! 저 길은……어디로 이어질까요!",
      );
      await era.printAndWait(
        `${you.name}이(가) 말릴 틈도 없이 사토노 다이아몬드가 골목길로 달려갔다……`,
      );
      await daiya.say_and_wait(
        "후후후, 조금 기묘한 곳이네요. 유령이 나와도 이상하지 않겠어요……",
      );
      await jordan.say_and_wait("그런 거라면~, 이런 유령?");
      await daiya.say_and_wait("어머, 조던. 안녕하세요♪");
      await jordan.say_and_wait(
        "잠깐, 전혀 안 놀라? 네가 멀쩡하면 민망한 건 나인데~!",
      );
      await jordan.say_and_wait("그나저나 여기서 뭐 해?");
      await daiya.say_and_wait(
        "이 골목길이 어디로 이어지는지 궁금해서……지금 모험 중이에요.",
      );
      await daiya.say_and_wait(
        "여기 풍경은 유독 달라서 다른 세계에 들어온 것 같아요……후후후, 신나고 기대돼요♪",
      );
      await jordan.say_and_wait(
        "그래? 그럼 같이 걸을래? 좋은 곳에 데려가 줄게!",
      );
      await jordan.say_and_wait(
        "……그래서~, 이 집 개가 엄청 무섭거든! 눈이 마주치면 바로 짖어!",
      );
      await daiya.say_and_wait(
        "기운찬 강아지네요! 어떤 아이일까요……?",
      );
      await era.printAndWait("큰 개「멍멍! 멍!!」");
      await daiya.say_and_wait("와아, 정말이네요! 후후후, 귀여워요~!");
      await jordan.say_and_wait(
        "즐거워 보이네~! 겸사겸사 신나는 가게도 들를래?",
      );
      await daiya.say_and_wait("어머, 재미있겠어요──");
      await daiya.say_and_wait("──어머? 저 골목은 유난히 어둡네요.");
      await jordan.say_and_wait("잠깐! 그쪽은 안 돼!");
      era.printButton("「그쪽에 무슨 문제 있어?」", 1);
      await era.input();
      await jordan.say_and_wait(
        "아~, 뭐랄까, 좀 불량한 언니들이 자주 모이는 곳이랄까?",
      );
      await jordan.say_and_wait(
        "나한테 뭘 한 건 아닌데~ 굳이 먼저 갈 필요는 없잖아?",
      );
      await jordan.say_and_wait("그러니까 다이아, 그쪽 말고 이쪽──");
      era.printButton("「벌써 없어!?」", 1);
      await era.input();
      await jordan.say_and_wait("큰일인데!? 야, 다이아──!");
      await daiya.say_and_wait(
        "어머, 불량소녀인가요……? 연속극에서 봤던 그……",
      );
      await era.printAndWait("불량소녀「뭐? 뭐라고!?」");
      await daiya.say_and_wait(
        "아, 사토노 다이아몬드라고 해요. 몇 가지 여쭤보고 싶어서요.",
      );
      await daiya.say_and_wait(
        "불량소녀 하면 비 오는 날 젖은 강아지를 구해 주는 장면을 좋아하는데……그런 경험이 있으신가요?",
      );
      await jordan.say_and_wait("잠깐, 잠깐! 멈춰, 멈춰!");
      await jordan.say_and_wait("아이고, 죄송해요! 지금 바로 물러갈게요~!");
      await daiya.say_and_wait("네? 아, 그래도……!");
      era.printButton("「자, 얼른 돌아가자!」(지능+20)", 1);
      era.printButton(
        "「갑자기 말을 건 것부터 사과하자」(파워+20)",
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait("아, 알겠어요?");
        await daiya.say_and_wait("그럼 실례할게요. 안녕히 계세요♪");
        await daiya.say_and_wait(
          `아아, 불량한 ${daiya.teen_sex_title}……조금만 더 이야기할 수 있었으면……아쉬워요.`,
        );
        await jordan.say_and_wait("설마 안 무서워!?");
        await daiya.say_and_wait(
          `무섭지 않은데요? 연속극의 불량한 ${daiya.teen_sex_title}는 떠돌이 강아지를 구해 주는 마음씨 착한 분들뿐인걸요♪`,
        );
        await jordan.say_and_wait("다이아, 위험한 의미로 강하네~!");
        await era.printAndWait(
          `사토노 다이아몬드가 쓸쓸해 보여 ${you.name}도 더는 나무랄 수 없었다.`,
        );
      } else {
        await daiya.say_and_wait(
          "그건 확실히 실례였네요……죄송해요. 제가 무례했어요.",
        );
        await era.printAndWait(
          `불량한 ${daiya.teen_sex_title}「쳇, 일반인이랑 싸울 취미는 없어. 다음부터 조심해.」`,
        );
        await daiya.say_and_wait(
          `감사해요! 불량한 ${daiya.teen_sex_title}는 도리를 지키는 강직한 분이라는 말이 사실이군요!`,
        );
        await era.printAndWait(
          `불량한 ${daiya.teen_sex_title}「오? 잘 아네. 헤헤, 같이 한잔하러 갈래?」`,
        );
        await daiya.say_and_wait(
          "어머, 괜찮나요? 꼭 그 기회를 주세요♪",
        );
        await jordan.say_and_wait("진짜? 다이아 너무 강한데!?");
        await era.printAndWait(
          `그 뒤 사토노 다이아몬드는 호기심 가득한 얼굴로 불량한 ${daiya.teen_sex_title}의 이야기에 귀를 기울였다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_shopping: (() => {
    const title = "편의점 앞에서는 조심하세요";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} condor エルコンドルパサー
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait([
        you.name,
        "와(과) 사토노 다이아몬드가 외출했다 돌아가는 길, 편의점 앞에……두 명의 ",
        daiya.uma_sex_title,
        "가 모여 있었다.",
      ]);
      await gs.say_and_wait(
        "젠장! 또──플라밍고 걸이냐! 벌써 다섯 장째라고……!?",
      );
      await festa.say_and_wait("나도야……또 데굴데굴 애벌레군.");
      await daiya.say_and_wait(
        "어머, 골시와 페스타네요? 두 분이 여기서 뭘……여쭤보고 올게요!",
      );
      await era.printAndWait(
        `불길한 예감이 든다……${you.name}은(는) 그렇게 생각하면서 사토노 다이아몬드를 뒤따랐다.`,
      );
      await daiya.say_and_wait("안녕하세요. 두 분은 뭘 하고 계세요?");
      await gs.say_and_wait(
        "오, 다이아냐! 방금 『경이로운 생물 초콜릿』을 잔뜩 샀거든!",
      );
      await gs.say_and_wait(
        "그런데 제일 희귀한 암모나이트 나이트가 통 안 나와서……여기서 계속 초콜릿을 먹고 있어.",
      );
      await daiya.say_and_wait(
        "어머, 새로운 도전인가요? 재미있겠어요! 저도 참가해도 될까요?",
      );
      await festa.say_and_wait(
        "하하, 호기심 많은 아가씨군……좋아, 어느 봉지로 할래? 골라.",
      );
      await daiya.say_and_wait(
        "글쎄요. 트레이너님은 어느 쪽이 좋을 것 같으세요?",
      );
      era.printButton("「포장이 깔끔한 쪽」(스태미나+20)", 1);
      era.printButton("「포장이 구겨진 쪽」(근성+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "저도 그쪽이 좋겠어요! 그럼 열게요. 갑니다──",
        );
        await daiya.say_and_wait("개봉──!");
        await daiya.say_and_wait("이건──음, 프테라노돈……?");
        await gs.say_and_wait(
          "──프테라노돈 두목!!!! 우오오, 프테라노돈 두목이다!!",
        );
        await festa.say_and_wait(
          "호오, 골드 등급인가……운이 나쁘지 않군, 다이아.",
        );
        await daiya.say_and_wait(
          "어머, 좋은 게 나왔나요!? 그럼 더 열어 보고 싶어요!",
        );
        await gs.say_and_wait(
          "좋아, 열어! 카드는 이쪽에 던지고 초콜릿은 내가 먹을게!",
        );
        await daiya.say_and_wait("네! 그럼 시작할게요──");
        await condor.print_and_wait("???「잠깐!」");
        await daiya.say_and_wait('？');
        await condor.say_and_wait(
          "그 『경이로운 생물 초콜릿』, 엘도 사려고 했슴다!!",
        );
        await condor.say_and_wait(
          "품절이라니……골시랑 페스타 선배 짓이군요!?",
        );
        await gs.say_and_wait(
          "콘도르, 그렇게 화내지 마……어쩔 수 없네. 그럼──",
        );
        await gs.say_and_wait(
          "──승부다! 네가 이기면 프테라노돈 두목을 주겠어! 지면 졸음 매미만 준다!!",
        );
        await condor.say_and_wait(
          "좋슴다! 받아들이겠슴다! 반드시 프테라노돈 두목을 따내겠슴다!",
        );
        await condor.say_and_wait("그럼 정정당당하게──!!");
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          condor.get_colored_name(),
          "「──승부다!!」",
        ]);
        await daiya.say_and_wait(
          "으음──큰일이 됐네요, 트레이너님.",
        );
        era.printButton("「응……」", 1);
        await era.input();
        await coffee.print_and_wait(
          "???「──걱정할 필요 없어요. 내버려 두면 곧 질릴 테니까……」",
        );
        await daiya.say_and_wait("카페! 쇼핑하러 오셨나요?");
        await coffee.say_and_wait(
          "네, 자주 가는 카페가 문을 닫아서……그래서 여기로……",
        );
        await coffee.say_and_wait("하지만──다른 가게로 갈게요……먼저 갈게요……");
        await daiya.say_and_wait(
          "어머, 아는 카페가 많으시군요. 괜찮다면 저도 함께 가도 될까요!?",
        );
        await era.printAndWait(
          "바로 곁의 전쟁보다 호기심을 우선하는 사토노 다이아몬드……그 솔직한 성격을 또 한 번 실감했다.",
        );
      } else {
        await daiya.say_and_wait(
          "일부러 이런 도전을 하는 거군요! 재미있겠어요. 열게요──",
        );
        await era.printAndWait(
          "하지만 사토노 다이아몬드가 포장을 뜯으려는 순간──돌풍이 초콜릿 봉지를 누군가의 발밑으로 날렸다.",
        );
        await sirius.print_and_wait("???「응……이게 뭐야?」");
        await sirius.say_and_wait(
          "……정말, 과자 봉지잖아. 여기서 무슨 친목회를 하고 있어?",
        );
        await festa.say_and_wait(
          "후후……잘 왔다. 너도 낄래, 시리우스?",
        );
        await sirius.say_and_wait(
          "끼라니, 과자로 승부하자는 거야? 이봐, 이봐, 나이가 몇인데──",
        );
        await sirius.say_and_wait("──응?");
        await sirius.say_and_wait(
          "……호오──순진한 아가씨인가. 상대가 너라면 재미있겠네.",
        );
        await daiya.say_and_wait("? 저와 승부하신다고요?");
        await sirius.say_and_wait(
          "그래. 방금 내 발밑으로 날아온 봉지가 당첨이면 네 승리야.",
        );
        await sirius.say_and_wait(
          "반대로 꽝이면 네 패배. 내 요구를 하나 들어줘.──어때?",
        );
        era.printButton("(뭐……!?)", 1);
        await era.input();
        await daiya.say_and_wait(
          "후후, 재미있겠어요. 그런 조건이라면 절대 질 수 없겠네요♪",
        );
        await daiya.say_and_wait("받아들일게요!");
        await daiya.say_and_wait("그럼──!");
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「……！！」',
        ]);
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「',
          { color: gs.color, content: "숨겨진 캐릭터!!" },
          { color: festa.color, content: "켄타도로……!!" },
          '」',
        ]);
        await era.printAndWait(
          "카드를 본 순간 골드 쉽과 나카야마 페스타가 격하게 반응했다……!!",
        );
        await sirius.say_and_wait(
          "!? 숨겨진 캐릭터……? 그러니까 최고는 아니지만 꽝도 아닌 건가?",
        );
        await sirius.say_and_wait(
          "……정말, 이 승부는 무효야. 뭐, 너를 이기지는 못했지만 좋은 구경은 했네.",
        );
        await daiya.say_and_wait("후후♪ 그럼 승부는 다음으로 미루는 거죠?");
        await sirius.say_and_wait("……응?");
        await daiya.say_and_wait(
          "아직 승패가 안 났잖아요. 한 번 더 도전할 기회를 주세요!",
        );
        await sirius.say_and_wait(
          "후후, 하하하! 간신히 빠져나왔는데 스스로 위험에 뛰어드는 거야!?",
        );
        await sirius.say_and_wait(
          "……좋아. 정점에서 기다릴게. 네가 내가 있는 곳까지 올라오는 날을.",
        );
        await daiya.say_and_wait("후후후♪ 이렇게 또 목표가 늘었네요.");
        await era.printAndWait(
          `사토노 다이아몬드는 선배 앞에서도 주눅 들지 않고 나아간다.${you.name}은(는) 새삼 ${daiya.sex}의 강함을 알게 되었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_in_colorful: (() => {
    const title = "수많은 색채 속에서";
    /**
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} creek スーパークリーク
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (daiya, maya, creek, you) => {
      await era.printAndWait(
        `${you.name}와(과) 사토노 다이아몬드가 외출했다 돌아가는 길에 쇼핑몰에 들르자──`,
      );
      await daiya.say_and_wait(
        "가게가 너무 많아서 눈이 돌아가요. 언젠가 전부 돌아보고 말겠어요──어머?",
      );
      await maya.say_and_wait(
        "……있잖아, 이쪽은 어때? 어른스러워? 아니면 이쪽이 더──",
      );
      await maya.say_and_wait("아! 다이아다☆ 안녕~!");
      await daiya.say_and_wait("마야랑 크릭! 쇼핑 중인가요?");
      await maya.say_and_wait(
        "에헤헤, 맞아~ 크릭한테 어른스러운 옷을 골라 달라고 했어♪",
      );
      await maya.say_and_wait(
        "그런데 못 고르겠어. 전부 갖고 싶어지거든☆",
      );
      await creek.say_and_wait(
        "후후, 마야는 뭘 입어도 귀여워서 저도 고를 수가 없네요~",
      );
      await daiya.say_and_wait(
        "어머! 그럼 저도 골라 봐도 될까요? 마야에게 어울리는 옷을 찾는 도전이에요!",
      );
      await era.printAndWait(
        "그렇게 마야노 탑건에게 어울리는 옷을 찾게 되었다.",
      );
      await daiya.say_and_wait(
        "으음, 생각보다 어렵네요. 제 옷이라면 금방 고를 텐데……",
      );
      await daiya.say_and_wait(
        "역시 자기 것을 고를 때와 조건도 기준도 다르기 때문이겠죠.",
      );
      await daiya.say_and_wait(
        "트레이너님은 어떻게 고르면 좋을 것 같으세요?",
      );
      era.printButton("「어른스러운 느낌을 우선하자」(스피드+20)", 1);
      era.printButton("「마야에게 어울리는 걸 우선하자」(근성+20)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          "그렇군요. 우선 방향을 정하는 게 중요하네요!",
        );
        await daiya.say_and_wait(
          "그럼 다시 생각해 볼게요! ……후후, 어떻게 할까요♪",
        );
        await daiya.say_and_wait(
          "정했어요! 마야, 저 조합은 어때요?",
        );
        await era.printAndWait(
          "사토노 다이아몬드는 차분한 색 조합으로 한 벌을 골라 마야에게 입어 보게 했다.",
        );
        await maya.say_and_wait(
          "와아, 흰색 상의에 남색 치마! 기본에 충실하고 단정해서 어른스러워~!",
        );
        await maya.say_and_wait(
          "하이웨이스트라 다리도 길어 보이고, 섹시한 느낌이야♪",
        );
        await maya.say_and_wait(
          "이런 조합도 있구나~! 많이 배웠어☆",
        );
        await daiya.say_and_wait("후후, 마음에 든다니 다행이에요.");
        await maya.say_and_wait(
          "그런데 다이아는 왜 그렇게 어른스러운 옷차림을 잘 알아?",
        );
        await daiya.say_and_wait(
          "글쎄요……사토노 가문의 일원으로 여러 자리에 나가는 일이 많아서요.",
        );
        await daiya.say_and_wait(
          "특히 사교 파티에는 어른들이 많거든요.",
        );
        await daiya.say_and_wait(
          "그분들 곁에서 뒤처져 보이지 않도록 기본적인 색으로 맞출 때도 많아요.",
        );
        await maya.say_and_wait(
          "와아~, 사교 파티는 정말 어른스럽다!!",
        );
        await maya.say_and_wait(
          "있잖아, 마야도 언젠가 어른이 되면 사교 파티에 갈 수 있을까?",
        );
        await daiya.say_and_wait(
          `물론이에요! 선수인 ${daiya.uma_sex_title}는 연회에 자주 초대받거든요!`,
        );
        await maya.say_and_wait(
          "정말!? 그럼 사교 파티 준비를 서둘러야겠네☆",
        );
        await maya.say_and_wait(
          "있잖아, 다이아. 더 어른스러운 조합도 알려 줘~♪",
        );
        await daiya.say_and_wait("네, 물론이죠! 맡겨 주세요!");
        await creek.say_and_wait(
          "후후, 두 분 다 귀엽네요~ 즐겁게 이야기하는 모습이♪",
        );
      } else {
        await daiya.say_and_wait(
          "그렇군요……! 본인에게 어울리지 않으면 의미가 없죠!",
        );
        await daiya.say_and_wait("으음……그럼 조금 생각해 볼게요. 후후♪");
        await daiya.say_and_wait(
          "정했어요! 마야, 저 조합은 어때요?",
        );
        await era.printAndWait(
          "사토노 다이아몬드는 귀엽고 활기찬 분위기로 한 벌을 골라 마야에게 입어 보게 했다.",
        );
        await daiya.say_and_wait(
          "프릴이 정말 귀엽다고 생각하는데 취향에 맞나요?",
        );
        await maya.say_and_wait(
          "와아, 정말 엄청 귀여워~! 소매 리본이 포인트라서 멋져☆",
        );
        await daiya.say_and_wait("맞아요! 그걸 알아보셨군요!");
        await daiya.say_and_wait(
          "리본 크기가 소맷부리에 방해되지 않는 정도라 딱 좋은 포인트가 돼요♪",
        );
        await maya.say_and_wait(
          "응, 응. 바지도 짧아서 마야가 좋아하는 귀여운 느낌이야☆",
        );
        await daiya.say_and_wait("그리고 신발을 맞춘다면──");
        await maya.say_and_wait("──아, 알겠어!! 짧은 부츠지?");
        await daiya.say_and_wait("정답이에요! 역시 마야, 잘 아시네요!");
        await daiya.say_and_wait(
          "바지가 짧으니 부츠도 짧은 걸 고르면 다리가 더 길어 보이죠!",
        );
        await maya.say_and_wait(
          "응응, 알겠어~! 다리를 드러내면 섹시한 느낌도 나니까.",
        );
        await maya.say_and_wait(
          "마야랑 다이아는 취향이 잘 맞을 것 같아☆ 있잖아, 더 같이 조합을 찾아보자!",
        );
        await daiya.say_and_wait(
          "네, 좋아요! 그럼 저쪽부터 차례대로 돌아봐요♪",
        );
        await creek.say_and_wait(
          "후후, 두 분 다 귀엽네요~ 즐겁게 이야기하는 모습이♪",
        );
        await daiya.say_and_wait(
          "트레이너님, 크릭! 괜찮으시면 함께 가실래요~?",
        );
        era.printButton("「응, 지금 갈게」", 1);
        await era.input();
        await era.printAndWait(`그 뒤 네 사람은 즐겁게 옷을 고르는 시간을 보냈다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
