/**
 * @file アグネスタキオン - 育成 - Plan A
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { adaptability_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_a_advanced: (() => {
    const title = 'Advanced';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        "정말로,",
        tachyon.get_colored_name(),
        "의 말대로,",
        tachyon.sex,
        "에게 희망을 안겨 준 사람이 나라면",
      ]);
      await era.printAndWait([
        "그렇다면 이 꿈을 향한 길을",
        tachyon.sex,
        "와 함께 걷는 것도 내 책임이자 의무일 것이다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "의 말대로 이 이야기의 막을 올린 것이 나라면, 어떤 결말이 기다리든 막이 내릴 때까지 무대에 서 있어야 한다",
      ]);
      era.println();
      await era.printAndWait("그러니까……");
      era.printButton("「……아니야」", 1);
      era.printButton("「그게 아니야」", 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await era.printAndWait(["곁을 지키는 것만으로는 부족하다"]);
      await era.printAndWait(["무대에 서 있는 것만으로도 부족하다"]);
      era.println();
      await era.printAndWait([
        "나는,",
        tachyon.get_colored_name(),
        "의 트레이너다",
      ]);
      await era.printAndWait([tachyon.sex, "와 둘이서 발을 맞춰 나아가는 트레이너다"]);
      await era.printAndWait([tachyon.sex, "의 뒤가 아니라, 나란히 옆에서 걷는 사람이다"]);

      era.printButton("「……난 Plan A를 선택하겠어」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "……그런가. 그렇다면 나를 위해 헌신하며 똑똑히 지켜보게나……내가 불타 없어지든, 시들어 쓰러지든",
      );
      era.println();
      await era.printAndWait("아니야. 그게 아니야");
      await era.printAndWait([
        you.get_colored_name(),
        "는 고개를 저으며,",
        tachyon.get_colored_name(),
        "의 말을 끊었다",
      ]);
      era.println();
      await you.say_and_wait("지켜보는 게 아니야");
      era.println();
      await tachyon.say_and_wait('……？');
      era.printButton("「난 너와 『함께』, 『우리』의 꿈을 이룰 거야」", 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), "는 입을 다물었다"]);
      await era.printAndWait([
        tachyon.sex,
        "의 표정은 화가 난 것 같기도, 조금 기쁜 것 같기도 했다",
      ]);
      await era.printAndWait("그리고……");
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait(
          "……모르모트 주제에 인간과 동등한 지위를 바라는 건가?",
        );
        era.println();
        await era.printAndWait([
          "늘 듣던 그 오만한 한마디가,",
          you.get_colored_name(),
          "를 나락으로 떨어뜨린다",
        ]);
        await era.printAndWait(
          "나란히 걸으려면, 상대도 같은 길을 걸으려 해야 한다",
        );
        await era.printAndWait(
          "이인삼각에서 한쪽만 끈을 붙잡고 있어 봐야 앞으로 나아갈 수는 없다",
        );
        await era.printAndWait("이 말투라면, 분명……");
        era.println();
        await tachyon.say_and_wait(
          "그렇다면 내 보폭을 따라잡아 보게나. 내가 외면할 수 없는 빛을 보여 주게……자네의 가능성을 증명하는 거야!",
        );
      } else if (love < 75) {
        await tachyon.say_and_wait("……후후, 하하하핫!");
        era.println();
        await era.printAndWait([
          "갑자기,",
          tachyon.get_colored_name(),
          "가 만족스럽게 웃었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "그래, 그래. 나란히 걷는 동료, 함께 싸우는 전우라……후후, 재미있군!",
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          "는 두 팔을 벌리고, 고개를 기울여 뒤에 있는 ",
          you.get_colored_name(),
          "를 바라본다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "그렇다면 따라오게나, ",
          callname,
          "! 내 위도 아래도 아닌 동료로서. 자신 있다면, 어디 와 보게",
        ]);
      } else {
        await tachyon.say_and_wait([
          "그러니까……",
          callname,
          ", 진심인 건가?",
        ]);
        era.println();
        await era.printAndWait("진심……?");
        await era.printAndWait([
          "나는 진심으로 ",
          tachyon.get_colored_name(),
          "와 함께 걷고 싶다. 그런 뜻일까",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 결의를 담아 고개를 끄덕였다",
        ]);
        era.println();
        await tachyon.say_and_wait("……그, 동행이라면, 그러니까, 동거……음……");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 세차게 고개를 저었다",
        ]);
        await era.printAndWait(
          "무슨 상황인지는 모르겠지만, 어딘가 말이 엇갈리는 것 같은데……?",
        );
        era.println();
        await tachyon.say_and_wait(
          "……크흠. 알겠네. 그럼 우리의 목표를 향해 함께 힘써 보세",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 조금 진정한 뒤 다시 말했다",
        ]);
        await era.printAndWait(
          "무슨 일인지는 모르겠지만, 어쨌든 인정받았다는 뜻이겠지",
        );
        await era.printAndWait("앞으로도 마음을 다잡아야겠다!");
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "가 월계배 출전을 사퇴했다는 소식은 학원 전체에 퍼졌다",
      ]);
      await era.printAndWait([
        "트레이너인 ",
        you.get_colored_name(),
        "도 비판을 피할 수는 없었다",
      ]);
      await era.printAndWait([
        "그래도……이 역시,",
        tachyon.sex,
        "와 함께 걷기 위해 치러야 할 대가겠지",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_29: (() => {
    const title = "언론 대응";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait("여름 합숙");
      await era.printAndWait([
        tachyon.uma_sex_title,
        "들에게는 휴식과 실력 향상을 겸하는 기간",
      ]);
      await era.printAndWait([
        "기자들에게는 평소 레이스 외에는 좀처럼 모습을 드러내지 않는",
        tachyon.uma_sex_title,
        "들을 드디어 취재할 수 있는 나날",
      ]);
      await era.printAndWait(
        "그렇기에 파파라치들은 일찌감치 합숙소 밖에 모여 있었다",
      );
      await you.say_as_passer_by_and_wait("기자 A", "보였어?");
      await you.say_as_passer_by_and_wait(
        "기자 B",
        "서두르지 마, 아직 다 안 내렸어",
      );
      await you.say_as_passer_by_and_wait(
        "기자 C",
        "왔다, 왔어! 저쪽이야, 트레이너가 빛나는 애!",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "가 차에서 내리자마자 기자들이 둘을 에워쌌다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 아차 싶어 황급히 몸에서 나는 빛을 줄였다. 하지만 이미 늦었다",
      ]);
      await you.say_as_passer_by_and_wait("기자 A", [
        "질문 하나 드리겠습니다.",
        tachyon.get_colored_name(),
        "가 월계배 출전을 사퇴한 이유가 뭡니까?",
      ]);
      await you.say_as_passer_by_and_wait(
        "기자 B",
        "무슨 사정이라도 있는 겁니까?",
      );
      await you.say_as_passer_by_and_wait(
        "기자 C",
        "학생회장을 불신한다는 뜻인가요?",
      );
      await era.printAndWait(
        "으아, 곤란한 질문뿐이잖아. 게다가 마지막 기자는 생각이 위험한데. 갈등을 부추기려는 건가?",
      );
      await era.printAndWait([
        "이렇게 많은 기자들 앞에서,",
        you.get_colored_name(),
        "는——",
      ]);
      era.printButton("정중하게 설명한다 (의욕 1단계 하락)", 1);
      era.printButton("쫓아낸다 (명성 하락)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          "는 인내심을 발휘해, 우리 진영의 목표는 연말의 국화상이라고 설명했다",
        ]);
        await era.printAndWait(
          "그때까지는 다른 일정을 뒤로 미뤄야 하며, 현 회장에게 불만이 있는 것도 아니라고 덧붙였다",
        );
        await era.printAndWait(
          ["기자들을 상대하느라 시간이 지체되자, 타키온도 슬슬 짜증을 내기 시작했다"],
        );
        await era.printAndWait([
          "그 모습을 본 ",
          you.get_colored_name(),
          "는 적당히 둘러대며 취재를 마무리하고,",
          tachyon.get_colored_name(),
          "를 데리고 합숙소로 들어갔다",
        ]);
      } else {
        await era.printAndWait("아, 시끄러워");
        await era.printAndWait([
          you.get_colored_name(),
          "와 ",
          tachyon.get_colored_name(),
          "는 눈빛을 주고받았다",
        ]);
        await era.printAndWait([
          "오랫동안 호흡을 맞춰 온 덕분에,",
          tachyon.sex,
          "는 곧바로 ",
          you.get_colored_name(),
          "의 의도를 알아채고 가방에서 선글라스를 꺼냈다",
        ]);
        await era.printAndWait("그리고……");
        era.printButton("「진심으로 발광한다!」", 1);
        era.printButton("「태양권!」", 2);
        await era.input();
        await you.say_as_passer_by_and_wait("기자 A", "내 눈!");
        await you.say_as_passer_by_and_wait("기자 B", "눈부셔!");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "의 120% 전력 발광 앞에서는 태양마저 빛이 바래 보였다",
        ]);
        await era.printAndWait([
          "기자들이 눈을 비비는 틈을 타,",
          you.get_colored_name(),
          "는 ",
          tachyon.get_colored_name(),
          "를 데리고 합숙소로 뛰어들었다",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_31: (() => {
    const title = "여름의 데이터 수집";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait("하아……하아……하아……");
      era.println();
      await era.printAndWait([
        "합숙 기간에,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 국화상을 향해 특훈을 거듭하고 있었다. 훈련과 휴식을 적절히 섞은 메뉴 덕분에 성과는 착실히 나타나고 있다",
      ]);
      era.println();
      await tachyon.say_and_wait("데이터는……어떤가?");

      era.printButton(
        "「주법을 바꾸기 전의 스피드까지 돌아왔어……이대로라면 국화상은 문제없어!」",
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 다리에 가해지는 부담을 최소화하도록 개량한 주법이 이제 완성되어 가고 있다. 둘이 힘을 합친다면 국화상은 분명……",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "가 ",
        tachyon.get_colored_name(),
        "의 미래를 그려 보고 있자, 숨을 고른 ",
        tachyon.get_colored_name(),
        "가 입을 열었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "좋아. 내 트레이닝은 끝났네. 다음은 자네 차례야",
      );
      era.println();
      await era.printAndWait("…………올 것이 왔다");
      await era.printAndWait([
        "훈련과 휴식의 실상은 이렇다. ",
        tachyon.get_colored_name(),
        "가 트레이닝하는 동안 ",
        you.get_colored_name(),
        "는 쉬고,",
        tachyon.get_colored_name(),
        "가 쉬는 동안에는……당연히,",
        you.get_colored_name(),
        "의 차례가 된다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 약에 힘입어, 지금 ",
        you.get_colored_name(),
        "의 순발력은 오픈급 ",
        tachyon.uma_sex_title,
        "에게도 뒤지지 않는다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "를 대상으로 약물 실험 데이터를 측정하는 것 역시,",
        tachyon.get_colored_name(),
        "가 합숙 중에 성실히 트레이닝하기 위한 조건 중 하나였다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "오늘은 자비를 베풀어 직접 고르게 해 주지, ",
        callname,
        "……파워 트레이닝과 스태미나 트레이닝, 어느 쪽으로 하겠나?",
      ]);
      era.println();
      await era.printAndWait("음……어느 쪽이든 별 차이 없을 것 같은데");
      era.printButton("파워 트레이닝 (파워＆근성+10)", 1);
      era.printButton("스태미나 트레이닝 (스태미나＆파워+10)", 2);
      era.printButton("스피드 트레이닝 (스피드＆지능+10)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait("이러쿵저러쿵");
          await era.printAndWait([
            "그리하여 ",
            you.get_colored_name(),
            "는 사람보다 세 배는 큰 거대한 타이어를 모래사장에서 끌고 있다",
          ]);
          await era.printAndWait(
            "대체 무슨 차에 쓰는 타이어야. 옆으로 눕혀 놓아도 높이가 사람의 세 배나 된다",
          );
          await era.printAndWait([
            "그동안,",
            tachyon.get_colored_name(),
            "는 줄곧 타이어 위에 앉아,",
            you.get_colored_name(),
            "에게 응원을……",
          ]);
          era.println();
          await tachyon.say_and_wait(["좀 더 빨리 걷게, ", callname]);
          await tachyon.say_and_wait(
            "너무 느리군. 스피드, 스피드라네",
          );
          await tachyon.say_and_wait(
            "차라리 옷을 찢고 헐크라도 되어 보는 게 어떤가",
          );
          era.println();
          await era.printAndWait("응원……?");
          era.println();
          await era.printAndWait([
            "응원이라기보다는 압박 내성 시험에 가까운 구령 속에서,",
            you.get_colored_name(),
            "는 오늘의 트레이닝을 마쳤다",
          ]);
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait("들어가게");
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "는 눈을 동그랗게 뜨고 ",
            tachyon.get_colored_name(),
            "를 보았다. 메뉴가 가혹해서가 아니다. 오히려……",
          ]);
          era.printButton("「……그냥 수영하고 오면 되는 거야?」", 1);
          await era.input();
          await tachyon.say_and_wait(
            "그래. 평소처럼 정해진 거리를 헤엄치고 오면 된다네～～",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "의 얼굴에는 뭔가 꿍꿍이가 있는 게 분명하다. 하지만 뭔지 짐작이 안 간다……",
          ]);
          await era.printAndWait([
            "아니,",
            tachyon.sex,
            "가 꾸밀 법한 일이 너무 많아서, 그중 무엇을 택했는지 알 수 없는 것이다",
          ]);
          await era.printAndWait([
            "여기서 기다려 봐야 별수 없다.",
            you.get_colored_name(),
            "는 일단 물에 들어갔다",
          ]);
          era.println();
          await era.printAndWait("차가워!");
          await era.printAndWait(
            "바닷물의 온도가 평소 느끼던 차가움과는 확연히 다르다. 비유하자면……",
          );
          await era.printAndWait([
            "예전에,",
            tachyon.get_colored_name(),
            "가 내한성 약을 시험한다며 뛰어들게 했던 얼음 수영장 그 자체다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "는 황급히 주위를 둘러봤지만, 다른 학생들은 평소처럼 바다에서 놀고 있다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "후후, 지금은 유난히 차갑겠지. 물에 들어가기 전에 먹인 약의 효과라네. 감각을 예민하게 만드는 약——그래, 대○인에 나오는 바로 그거야!",
          );
          era.println();
          await era.printAndWait("대마○ 얘기는 하지 마!?");
          await era.printAndWait(
            "이상하게도 한겨울 얼음물에 들어간 듯한 체감 온도 외에는 별다른 느낌이 없다. 대마○라면 지금쯤……",
          );
          era.println();
          await tachyon.say_and_wait(
            "물론 아직 미완성이라네. 주로 추위에 대한 신경 감도만 높였지. 자, 정해 준 거리를 끝까지 헤엄치게나",
          );
          era.println();
          await era.printAndWait("추워……");
          await era.printAndWait([
            tachyon.get_colored_name(),
            "가 지시할 것도 없이, 추위에 쫓긴 ",
            you.get_colored_name(),
            "는 열을 내려고 필사적으로 몸을 움직여, 간신히 목표 거리를 다 헤엄쳤다",
          ]);
          era.drawLine({ content: "여담" });
          await tachyon.say_and_wait([
            "……신경 감도만 높였을 뿐인데, 어째서 감기까지 걸리는 건가, ",
            callname,
          ]);
          era.println();
          await you.say_and_wait("……그걸 나한테 물으면 어떡해?");
          break;
        case 3:
          await era.printAndWait("어느 쪽이든 악의가 넘친다……");
          await era.printAndWait([
            "기지를 발휘한 ",
            you.get_colored_name(),
            "는 선택한다",
          ]);
          era.printButton(
            "「……숙소 가스레인지를 안 끄고 온 것 같아! 먼저 돌아갈게!」",
            1,
          );
          await era.input();
          await era.printAndWait("도망치는 게 상책이지!");
          era.println();
          await tachyon.say_and_wait([
            "호오, 나와 경주를 하겠다는 건가? 요즘 체력이 좋아졌다고 조금 우쭐해진 모양이군, ",
            callname,
            '。',
          ]);
          await tachyon.say_and_wait(
            "상관없네. 십 초를 주지. 따라잡히면 오늘 먹을 약은 두 배라네.",
          );
          await tachyon.say_and_wait(
            "자, 날 즐겁게 해 주게나. 아하하하하하하!",
          );
          era.println();
          await era.printAndWait([
            "십 초가 지나자마자,",
            tachyon.get_colored_name(),
            "의 발소리가 귓가로 다가왔다",
          ]);
          await era.printAndWait(
            "서둘러, 서둘러. 이럴 때 트레이너 양성 학교에서는 뭐라고 가르쳤더라",
          );
          await you.say_and_wait(
            ["장애물을 이용해서", tachyon.uma_sex_title, "의 움직임을 방해해라!"],
            true,
          );
          await era.printAndWait(
            "좋아, 빨리………여긴 모래사장이잖아, 장애물이 어디 있냐아아아아!!!",
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            "쯧쯧, 너무 느리군, ",
            callname,
            ". 그럼 오늘은 두 병……좋아, 한 번 더 하지. 이번에도 십 초, 또 따라잡히면 네 병이야……계속해 보세～～",
          ]);
          await you.say_and_wait("아직도 하는 거야!?");
          await era.printAndWait([
            "결국,",
            you.get_colored_name(),
            "는 ",
            tachyon.get_colored_name(),
            "에게 네 번 붙잡혔다가 풀려났고, 모두 합쳐 열여섯 병의 약을 마셔야 했다",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_low_rel: (() => {
    const title = "또 다른 가능성";
    /**
     * 菊花賞前 - 低好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        "그날 밤,",
        you.get_colored_name(),
        "는 꿈을 꾸었다",
      ]);
      await era.printAndWait([
        "초광속 입자라 불리는",
        tachyon.sex,
        "가 레이스장에서 날개가 꺾이는 꿈",
      ]);
      await era.printAndWait([
        "유리 같은 두 다리가 부서지고, 흩어진 유리 파편이 ",
        you.get_colored_name(),
        "의 두 눈을 찔렀다",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 꿈에서 벌떡 깨어나, 한참 동안 진정하지 못했다",
      ]);
      await era.printAndWait([
        "너무나 생생해서,",
        you.get_colored_name(),
        "는 그 여운에서 벗어날 수 없었다",
      ]);
      await era.printAndWait([
        "그날 밤 남은 시간 내내,",
        you.get_colored_name(),
        "는 뒤척이며 아침까지 잠들지 못했다",
      ]);
      era.drawLine();
      await era.printAndWait([
        "하늘이 희미하게 밝아 올 무렵,",
        you.get_colored_name(),
        "는 서둘러 트레이너 기숙사를 나섰다",
      ]);
      await era.printAndWait([
        "레이스에 앞서,",
        tachyon.sex,
        "의 몸 상태는 몇 번이나 확인했다",
      ]);
      await era.printAndWait(
        "꿈처럼 처참하게 부서질 리도 없다. 그런데도 걱정스럽고 두려워서",
      );
      await era.printAndWait([
        "내 눈으로 직접",
        tachyon.sex,
        "를 봐야만, 꿈이 현실이 아니었다고 확신할 수 있을 것 같다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "이런, ",
        callname,
        "? 오늘은 꽤 이르군",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "가 연구실로 뛰어들었을 때, 그곳에는 아침부터 느긋하게 홍차를 마시는 ",
        tachyon.get_colored_name(),
        "가 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "뭐, 오늘은 3관의 마지막이니……긴장하는 것도 당연하겠지",
      );
      await era.printAndWait([
        "국화상. 가장 강한",
        tachyon.uma_sex_title,
        "만이 승리를 거머쥐는 레이스",
      ]);
      await era.printAndWait([
        "문득,",
        you.get_colored_name(),
        "는 말문이 막혔다",
      ]);
      await era.printAndWait("내 선택은 정말 옳았을까");
      await era.printAndWait([
        "만약",
        tachyon.sex,
        "가 꿈에서처럼 부서져 버린다면",
      ]);
      await era.printAndWait("나는 그 현실을 담담히 마주할 수 있을까");
      era.println();
      await tachyon.say_and_wait([callname, "? 무슨 일인가?"]);
      era.println();
      await era.printAndWait("충동적으로 연구실에 뛰어들었건만");
      await era.printAndWait([tachyon.sex, "를 보는 순간, 아무 말도 할 수 없었다"]);
      era.printButton("「……아무것도 아니야. 국화상, 반드시 이기자」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 스스로를 위로하기에도 부족한 말밖에 하지 못했다",
      ]);
      era.println();
      await tachyon.say_and_wait("……그래, 반드시 이길 거라네");
      era.println();
      await era.printAndWait("침묵");
      await era.printAndWait("오늘 국화상을 부디 무사히 마칠 수 있기를");
      await era.printAndWait([
        you.get_colored_name(),
        "는 신에게, 부처에게, 빛에게 기도했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_high_rel: (() => {
    const title = "이길 수 있을까?";
    /**
     * 菊花賞前 - 高好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        "국화상. 가장 강한",
        tachyon.uma_sex_title,
        "만이 승리를 거머쥐는 레이스",
      ]);
      await era.printAndWait("가장 강하다는 것은 모든 면에서 강하다는 뜻이다");
      await era.printAndWait("스피드, 스태미나, 파워, 근성, 지능");
      await era.printAndWait(
        "트레이너가 가장 중시하는 다섯 능력을 균형 있게 극한까지 끌어올린 자만이 이길 수 있는 레이스",
      );
      await era.printAndWait([
        "하지만……",
        tachyon.get_colored_name(),
        "라면 문제없다",
      ]);
      era.println();
      await era.printAndWait("태어날 때부터 강한 자");
      await era.printAndWait([
        "단련하지 않아도,",
        tachyon.sex,
        "라면 그 경지에 닿을 것이다",
      ]);
      await era.printAndWait([
        "그것이 바로 ",
        tachyon.get_colored_name(),
        ". 절대적인 강함",
      ]);
      await era.printAndWait([
        "……그보다, 나는 정말",
        tachyon.sex,
        "에게 도움이 되고 있는 걸까?",
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          "애초에 지금의",
          tachyon.sex,
          "는, 예전의",
          tachyon.sex,
          "가 보여 준 한계에 닿으려면 아직 한참 먼 것 아닌가?",
        ]);
      } else {
        await era.printAndWait([
          "애초에 지금의",
          tachyon.sex,
          "는, 예전 수준으로 돌아왔을 뿐인 게 아닐까?",
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        callname,
        "? 레이스를 앞두고 또 뭘 그렇게 멍하니 있나?",
      ]);
      era.println();
      await era.printAndWait([
        "자기혐오에 빠져 있던 ",
        you.get_colored_name(),
        "의 생각을 끊은 것은, 편자를 고정하고 있던 ",
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "에게 ",
        you.get_colored_name(),
        "가 속마음을 털어놓자, 예상대로 ",
        tachyon.get_colored_name(),
        "는 코웃음을 쳤다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "시시한 소리로군. 지금 내 두 다리가 버티는 건 내 연구와 자네의 트레이닝 덕분이라네",
      );
      era.println();
      await tachyon.say_and_wait(
        "자네가 힘써 주지 않았다면 지금의 나는 달릴 수 없게 됐을지도 모르지. 그렇게 되길 바랐다는 건가?",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 황급히 그런 뜻이 아니었다며 사과했다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "늦었네. 내일 먹을 약은 두 배야. 그 노력의 무게를 모른다면 조금 더 맛보게 해 줘야겠군",
      );
      era.println();
      await era.printAndWait(
        "아니, 이미 하루 세 끼 밥 먹듯 마시고 있는데, 더 늘릴 수 있는 거야?",
      );
      await era.printAndWait([you.get_colored_name(), "는 속으로 딴지를 걸었다"]);
      era.println();
      await era.printAndWait([
        "허물없이 잡담을 나누는 사이, 출발 시각이 다가왔다",
      ]);
      await era.printAndWait(["두 사람은 이야기를 나누며 레이스장으로 향했다"]);
      era.printButton("「오늘 레이스, 이길 수 있겠지?」", 1);
      await era.input();
      await tachyon.say_and_wait("그건……과연 어떨까～～");
      await tachyon.say_and_wait(
        "아니, 진지하게 물어봐도 솔직히 답하기는 어렵군……",
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait([
          "아무래도 ",
          call_25,
          "는 다른",
          tachyon.uma_sex_title,
          "들과는 완전히 격이 다르니 말이야",
        ]);
        await tachyon.say_and_wait([
          "무엇보다",
          tachyon.sex,
          "는 내가 선택한, 나와 마찬가지로 한계 너머의 세계에 발을 들일 수 있는 자……",
        ]);
        await tachyon.say_and_wait([
          "게다가 이 거리에서의 ",
          call_25,
          "……역대 최강이라 해도 과언이 아닐지도 모르겠군",
        ]);
      }
      era.printButton("「그럼 지는 거야?」", 1);
      await era.input();
      await tachyon.say_and_wait("이길 걸세");
      era.println();
      await tachyon.say_and_wait("『우리』는 반드시 이겨");
      era.println();
      await era.printAndWait("그저 배웅하는 것이 아니다");
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 나란히 레이스장으로 향했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = "이길 거야";
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     * @param {boolean} win_triple_crowns アグネスタキオンが三冠を制したか
     * @param {boolean} invincible アグネスタキオンが無敗か
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
      win_triple_crowns,
      invincible,
    ) => {
      if (win_triple_crowns) {
        if (invincible) {
          await you.say_as_passer_by_and_wait("해설", [
            "무패 3관의 탄생! 역사의 수레바퀴가 다시 한번 돌아갑니다!",
            tachyon.get_colored_name(),
            ", 무패 3관 달성!",
          ]);
        } else {
          await you.say_as_passer_by_and_wait("해설", [
            "3관",
            tachyon.uma_sex_title,
            "탄생! 동기 최강! 가장 빠르고, 가장 운이 좋으며, 가장 강한",
            tachyon.uma_sex_title,
            ", 그 주인공은 바로 ",
            tachyon.get_colored_name(),
            '！',
          ]);
        }
      } else {
        await you.say_as_passer_by_and_wait("해설", [
          "강적들을 물리치고 가장 먼저 결승선을 통과한 것은, 초광속의",
          tachyon.sex_code - 1 ? "공주" : "왕자",
          '、',
          tachyon.get_colored_name(),
          "! 국화상 최강의",
          tachyon.uma_sex_title,
          "는,",
          tachyon.get_colored_name(),
          '！',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        "가 국화상을 제패했다. 의심할 여지 없는 승리다",
      ]);
      await era.printAndWait(
        "하지만 축배를 들 틈도 없이, 불청객이 찾아왔다",
      );
      era.println();
      await coffee.say_and_wait([c_call_t, "……오늘의 주법은……"]);
      await tachyon.say_and_wait(["이런, ", call_25, ", 무슨 일인가?"]);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 Plan B를 이어받을 자",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 Plan A를 시험할 시금석",
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          "이번 국화상에서,",
          tachyon.get_colored_name(),
          "의 최대 적수",
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          "동시에,",
          you.get_colored_name(),
          "의 또 다른 담당",
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, ", 당신의 주법……전과 달라요……"]);
      await tachyon.say_and_wait(
        "후후, 무슨 문제라도 있나? 주법이란 원래 계속 진화하는 것 아닌가?",
      );
      await coffee.say_and_wait(
        "……아니에요. 그저, 축하해요. 또 다른 자신을 뛰어넘었네요",
      );
      await tachyon.say_and_wait([
        "……또 다른 자신? 기다리게, ",
        call_25,
        "! 무슨 뜻인가!",
      ]);
      await coffee.say_and_wait(
        "……무슨 뜻일까요. 저는 친구의 말을 전할 뿐이에요",
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            "그리고, 담당",
            tachyon.uma_sex_title,
            "라고 해도……남의 연인을 오래 독차지하지는 말아 주세요, ",
            c_call_t,
          ]);
          await era.printAndWait([
            "그렇게 말하고,",
            coffee.get_colored_name(),
            "는 ",
            you.get_colored_name(),
            "의 뺨에 입을 맞춰, 자신의 연인임을 드러냈다",
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            "오늘은 특별한 날이니까,",
            c_call_y,
            "를 잠시 빌려줄게요……나중에 돌려주세요",
          ]);
        } else {
          await coffee.say_and_wait([
            "그리고……나중에 ",
            c_call_y,
            "를 돌려주세요",
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        "!…………쳇, 가 버렸군……",
      ]);
      await era.printAndWait([
        "괜찮은지 걱정스러워,",
        you.get_colored_name(),
        "는 ",
        tachyon.get_colored_name(),
        "를 바라보았다",
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            "아무것도 아니네……그나저나,",
            callname,
            ", 꽤 인기가 많군",
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            "아무것도 아니네……그나저나, ",
            callname,
            ", 여기저기 마음의 빚을 너무 많이 지고 다니는군",
          ]);
        } else {
          await tachyon.say_and_wait([
            "아무것도 아니네……그보다,",
            callname,
            "……여기저기 마음의 빚을 너무 많이 지고 다니는군",
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 이를 갈며 돌아보고 말했다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            "가 더럽혀 놓은 곳은 제대로 소독해야겠군!",
          ]);
          era.println();
          await era.printAndWait([
            "그것을 구실로,",
            tachyon.sex,
            "는 ",
            you.get_colored_name(),
            "의 뺨에 몇 번이고 입을 맞추며,",
            coffee.get_colored_name(),
            "가 먼저 남긴 입맞춤을 열 배, 백 배로 덮어 버리려 했다",
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        "아무튼, 우여곡절 끝에,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 영광스러운 국화상이 막을 내렸다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = "불씨가 보인다";
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
    ) => {
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton("「……타키온?」", 1);
      await era.input();
      await era.printAndWait([
        "레이스는 끝났다. 영광스러운 국화상, 가장 강한",
        tachyon.uma_sex_title,
        "를 가리는 승부",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 담당",
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        "는 이번 레이스에서 패배했다",
      ]);
      await era.printAndWait([
        "레이스를 마치고 선수 대기실에 들어온 뒤에도, 두 사람은 줄곧 말이 없었다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 슬쩍",
        tachyon.sex,
        "의 얼굴을 살폈지만,",
        tachyon.sex,
        "의 속마음은 알 수 없었다",
      ]);
      await era.printAndWait("침묵의 압박이 한계에 이르렀을 때……");
      era.println();
      await tachyon.say_and_wait("후후……");

      era.printButton("「타키온……?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "지지 않을 줄 알았는데……이런 이런, 결국 추월당하고 말았군",
      );
      await tachyon.say_and_wait([
        "역시,",
        tachyon.uma_sex_title,
        "의 가능성은 레이스 속에서만 탐구할 수 있겠군",
      ]);
      await tachyon.say_and_wait("졌어, 졌군그래");
      era.println();
      await era.printAndWait([
        "타키온의 태도는,",
        you.get_colored_name(),
        "의 예상보다 훨씬 가벼웠다",
      ]);
      await era.printAndWait([
        "그래……",
        tachyon.sex,
        "에게 레이스는 어디까지나 실험일 뿐이다",
      ]);
      await era.printAndWait("실험에는 성공도 실패도 있다. 레이스도 마찬가지다");
      await era.printAndWait("실패했다면 교훈을 얻으면 된다");
      era.println();
      await era.printAndWait([
        "이런 태도가 레이스에 적합한지는 차치하고, 적어도",
        tachyon.sex,
        "는 그리 동요하지 않은 듯하다",
      ]);
      era.println();
      await era.printAndWait("하지만 안심할 틈도 없이, 불청객이 찾아왔다");
      era.println();
      await coffee.say_and_wait([c_call_t, "……오늘의 주법은……"]);
      await tachyon.say_and_wait(["이런, ", call_25, ", 무슨 일인가?"]);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 Plan B를 이어받을 자",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 Plan A를 시험할 시금석",
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          "이번 국화상에서,",
          tachyon.get_colored_name(),
          "의 최대 적수",
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          "동시에,",
          you.get_colored_name(),
          "의 또 다른 담당",
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, ", 당신의 주법……전과 달라요……"]);
      await tachyon.say_and_wait(
        "후후, 무슨 문제라도 있나? 주법이란 원래 계속 진화하는 것 아닌가?",
      );
      await coffee.say_and_wait(
        "……아니에요. 그저, 축하해요. 또 다른 자신을 뛰어넘었네요",
      );
      await tachyon.say_and_wait([
        "……또 다른 자신? 기다리게, ",
        call_25,
        "! 무슨 뜻인가!",
      ]);
      await coffee.say_and_wait(
        "……무슨 뜻일까요. 저는 친구의 말을 전할 뿐이에요",
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            "그리고, 담당",
            tachyon.uma_sex_title,
            "라고 해도……남의 연인을 오래 독차지하지는 말아 주세요, ",
            c_call_t,
          ]);
          await era.printAndWait([
            "그렇게 말하고,",
            coffee.get_colored_name(),
            "는 ",
            you.get_colored_name(),
            "의 뺨에 입을 맞춰, 자신의 연인임을 드러냈다",
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            "오늘은 특별한 날이니까,",
            c_call_y,
            "를 잠시 빌려줄게요……나중에 돌려주세요",
          ]);
        } else {
          await coffee.say_and_wait([
            "그리고……나중에 ",
            c_call_y,
            "를 돌려주세요",
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        "!…………쳇, 가 버렸군……",
      ]);
      await era.printAndWait([
        "괜찮은지 걱정스러워,",
        you.get_colored_name(),
        "는 ",
        tachyon.get_colored_name(),
        "를 바라보았다",
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            "아무것도 아니네……그나저나,",
            callname,
            ", 꽤 인기가 많군",
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            "아무것도 아니네……그나저나, ",
            callname,
            ", 여기저기 마음의 빚을 너무 많이 지고 다니는군",
          ]);
        } else {
          await tachyon.say_and_wait([
            "아무것도 아니네……그보다,",
            callname,
            "……여기저기 마음의 빚을 너무 많이 지고 다니는군",
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 이를 갈며 돌아보고 말했다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            "가 더럽혀 놓은 곳은 제대로 소독해야겠군!",
          ]);
          era.println();
          await era.printAndWait([
            "그것을 구실로,",
            tachyon.sex,
            "는 ",
            you.get_colored_name(),
            "의 뺨에 몇 번이고 입을 맞추며,",
            coffee.get_colored_name(),
            "가 먼저 남긴 입맞춤을 열 배, 백 배로 덮어 버리려 했다",
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 클래식 시즌은 여기서 끝났다!",
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_triple_crowns: (() => {
    const title = "3관의 꿈";
    /**
     * Plan A 専用（Plan B は菊花賞出走不可のため三冠不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      pocket,
      you,
      callname,
      call_25,
      relation,
      love,
      sats_sho,
      toky_yus,
    ) => {
      await tachyon.say_and_wait("……여긴");
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 문득 의식이 아득해졌다",
      ]);
      await tachyon.print_and_wait(
        "눈앞에는 푸른 잔디가 펼쳐진, 텅 빈 레이스장이 있었다",
      );
      era.println();
      await tachyon.say_and_wait("……꿈인가?");
      era.println();
      await tachyon.print_and_wait([
        "기억난다. 지금은 국화상이 끝난 뒤, ",
        callname,
        "와 헤어져 녹초가 된 채 침대에 쓰러졌을 터였다",
      ]);
      await tachyon.print_and_wait(
        ["국화상은 지금까지 치른 레이스 중 가장 혹독한 싸움이었다"],
      );
      await tachyon.print_and_wait("그래도 이겼다");
      await tachyon.print_and_wait(
        "하지만 눈앞에 있는 것은 그토록 뚜렷이 기억에 남은 레이스장이 아니다. 여기는……",
      );
      era.println();
      await tachyon.print_and_wait("나카야마 레이스장?");
      await tachyon.print_and_wait("나카야마라면, 그러니까……");
      era.println();
      await tachyon.print_and_wait(
        ["아니나 다를까, 뒤돌아본 전광판에는 사츠키상의 로고가 떠 있었다"],
      );
      await tachyon.print_and_wait([
        "하지만 게시판의 성적은 이미 레이스가 끝났음을 보여 주고 있었다. 1착은 ",
        tachyon.get_colored_name(),
        ". 당연하다",
      ]);
      era.println();
      await tachyon.say_and_wait(["……사츠키상 때로 돌아온 건가?"]);
      era.println();
      await tachyon.print_and_wait(
        ["아무도 없는 레이스장. 출전한 말도 없는데, 사츠키상은 이미 끝나 있다"],
      );
      await tachyon.print_and_wait(
        "논리를 따르지 않는 꿈이라 해도, 너무나 터무니없는 광경이다",
      );
      era.println();
      await tachyon.print_and_wait("그때……");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 어느새 나타난 빛의 구체를 노려보았다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "자네……누구지? 나를 이 꿈에 끌어들인 게 자네인가?",
      );
      era.println();
      await tachyon.print_and_wait([
        "꿈에 끌어들인다니, 과학적인 표현은 아니다. 하지만……",
        call_25,
        "의 말을 바탕으로 생각한다면……",
      ]);
      await you.say_as_passer_by_and_wait('？？？', '…………');
      era.println();
      await tachyon.print_and_wait("빛의 구체는 아무 말 없이 그 자리에 떠 있었다");
      era.println();
      await tachyon.say_and_wait("……말하고 싶지 않은 건가?");
      await tachyon.say_and_wait("그렇다면 내 추측을 말하지……");
      await tachyon.say_and_wait([
        "자네……「",
        tachyon.get_colored_name(),
        "」겠지",
      ]);
      era.println();
      await tachyon.print_and_wait("어렵지 않은 추측이다");
      await tachyon.print_and_wait([
        call_25,
        "가 말한 「또 다른 자신」을 여기에 대입하면 된다",
      ]);
      await tachyon.print_and_wait([
        "전설에 따르면……",
        tachyon.uma_sex_title,
        "는 이세계의 영혼을 품은 존재라고 한다",
      ]);
      await tachyon.print_and_wait([
        "……물론,",
        tachyon.get_colored_name(),
        "는 그런 이야기보다는 생물의 자연스러운 진화의 결과라고 믿고 싶지만",
      ]);
      await tachyon.print_and_wait("하지만 그 이야기가 사실이라면……");
      era.println();
      await tachyon.print_and_wait("「또 다른 자신」이란 아마 이것이겠지");
      await tachyon.print_and_wait(
        "이세계에서 온 영혼, 혹은 「Uma Soul」이라 불리는 존재",
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
      await tachyon.say_and_wait("뭐라고?");
      era.println();
      await tachyon.print_and_wait(
        "갑자기 빛의 구체에 파문이 일더니, 온 힘을 쥐어짜 희미한 소리를 내는 듯했다",
      );
      await tachyon.print_and_wait([
        "정신을 차려 보니,",
        tachyon.get_colored_name(),
        "는 가까이 다가가 무슨 말을 하는지 들으려 하고 있었다……",
      ]);
      era.println();
      await tachyon.say_and_wait('………！');
      era.println();
      await tachyon.print_and_wait("닿았다");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "의 머릿속으로 존재하지 않는 기억이 한꺼번에 흘러들었다",
      ]);
      era.println();
      await tachyon.print_and_wait([
        "그 세계에서,",
        tachyon.get_colored_name(),
        "라 불렸던 생물의 기억",
      ]);
      await tachyon.print_and_wait([
        "처음 예상했던 대로, 「",
        tachyon.get_colored_name(),
        "」의 두 다리는 사츠키상 이후 부하를 견디지 못했고, 결국 은퇴해야 했다",
      ]);
      await tachyon.print_and_wait([
        "그 세계에서,",
        tachyon.get_colored_name(),
        "는 가능성의 상징으로 여겨져, 「만약의 ⬛」, 「환상의 3관⬛」라 불렸다",
      ]);
      await tachyon.print_and_wait(
        "기회만 주어진다면 반드시 3관을 차지하리라고, 누구도 의심하지 않았다",
      );
      await tachyon.print_and_wait(
        "다리에 문제가 없었다면 역사에 이름을 남길 명⬛이 되었을 것이다",
      );
      await tachyon.print_and_wait(
        "은퇴하지 않았다면 동세대의 다른 ⬛들은 그 빛에 가려졌을 것이다",
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 3관에 가장 가까운 존재였다",
      ]);
      await tachyon.print_and_wait("하지만 만약은……결국 만약일 뿐이다");
      await tachyon.print_and_wait("실현되지 않은 가정은 그저 종잇조각에 불과하다");
      await tachyon.print_and_wait("동기들이 저마다의 영역에서 빛을 발하면서");
      await tachyon.print_and_wait("그 확신은 의문으로 변해 갔다");
      await tachyon.print_and_wait([
        "도쿄 2400미터에서, 그 ",
        pocket.get_colored_name(),
        "를 정말 이길 수 있었을까?",
      ]);
      await tachyon.print_and_wait([
        "교토 3000미터에서, 그 ",
        coffee.get_colored_name(),
        "를 정말 이길 수 있었을까",
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "가, 3관……?",
      ]);
      era.println();
      await tachyon.print_and_wait([
        "그제야,",
        tachyon.get_colored_name(),
        "는 정신을 차렸다",
      ]);
      await tachyon.print_and_wait([
        "문득,",
        tachyon.sex,
        "는 빛의 구체가 하는 말을 알아들을 수 있게 되었다",
      ]);
      await tachyon.say_as_unknown_and_wait("……고마워……고마워……");
      await tachyon.say_and_wait('…………');
      era.println();
      await tachyon.print_and_wait("만약을 현실로 만들었다");
      await tachyon.print_and_wait("공허한 가능성을 확실한 현실로 바꿨다");
      era.println();
      await tachyon.print_and_wait([
        "이세계의 「",
        tachyon.get_colored_name(),
        "」는 이루지 못했다",
      ]);
      await tachyon.print_and_wait([
        "하지만 ",
        tachyon.get_colored_name(),
        "는 해냈다",
      ]);
      await tachyon.print_and_wait("자신의 가능성을 증명했다");
      era.println();
      await tachyon.print_and_wait([tachyon.get_colored_name(), "는, 3관⬛"]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는, 3관⬛?",
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는, 3관",
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait("……그런 거였군");
      era.println();
      await tachyon.print_and_wait("과거의 자신을 뛰어넘었다");
      await tachyon.print_and_wait("또 다른 세계의 자신을 뛰어넘었다");
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 새로운 한 걸음을 내디뎠다",
      ]);
      era.println();
      await tachyon.say_and_wait("그럼, 난 가 보겠네");
      await tachyon.say_as_unknown_and_wait('…………？');
      era.println();
      await tachyon.print_and_wait([
        "말은 없었다. 그래도,",
        tachyon.get_colored_name(),
        "는 빛의 구체가 당황하는 것을 느낄 수 있었다",
      ]);
      await tachyon.print_and_wait("어디로?");
      await tachyon.print_and_wait("꿈은 이미 이루지 않았나");
      await tachyon.print_and_wait("목표는 이미 달성하지 않았나");
      await tachyon.print_and_wait("앞으로 뭘 하려는 거지?");
      era.println();
      await tachyon.say_and_wait([
        "흥, 『",
        tachyon.get_colored_name(),
        "』의 가능성은 클래식이 끝나는 데까지만 상상할 수 있는 건가?",
      ]);
      await tachyon.say_and_wait(
        "……아니, 이렇게 말하면 스스로를 욕하는 꼴이군……크흠, 다시 하지",
      );
      await tachyon.say_and_wait([
        '『',
        tachyon.get_colored_name(),
        "』의 가능성은 클래식이 끝나는 데까지일지도 모르지……",
      ]);
      await tachyon.say_and_wait([
        "아니, 기껏해야 사츠키상까지겠지.",
        tachyon.get_colored_name(),
        "의 가능성도……",
      ]);
      await tachyon.say_and_wait("어쩌면 그럴지도 모르겠군");
      era.println();
      await tachyon.print_and_wait("하지만");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 떠올렸다. 자신을 위해 불타 없어지는 것도 마다하지 않던, 눈동자에 광기를 품은 그 사람을",
      ]);
      era.println();
      if (relation <= 0) {
        await tachyon.say_and_wait([
          "뭐……인격만 놓고 보자면,",
          you.sex,
          "를 없애는 게 세상을 위해 나을지도 모를, 형편없는 사람이지만",
        ]);
      } else if (love >= 75) {
        await tachyon.say_and_wait("내가 가장 사랑하고, 나를 가장 사랑하는 나의 연인");
      } else if (relation <= 225) {
        await tachyon.say_and_wait("나와 나란히 걷는, 뜻을 함께하는 동료");
      } else {
        await tachyon.say_and_wait(
          "나의 모든 것을 이해하고, 목숨을 맡겨도 한순간의 망설임도 없을 그 사람",
        );
      }
      era.println();
      await tachyon.print_and_wait("만약……그 사람이 없었다면");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 ",
        sats_sho,
        "이후, 완전히 불타 버렸을지도 모른다",
      ]);
      era.println();
      await tachyon.print_and_wait("만약……그 사람이 없었다면");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 ",
        toky_yus,
        "이후, 한계를 깨닫고 스스로 물러났을지도 모른다",
      ]);
      era.println();
      await tachyon.print_and_wait("만약……그 사람이 없었다면");
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 미래조차 상상하지 못했을 것이다",
      ]);
      era.println();
      await tachyon.print_and_wait("하지만……만약이라는 가정은 의미가 없다");
      await tachyon.print_and_wait("그리고 이 가정은 영원히 실현되지 않을 것이다");
      await tachyon.print_and_wait("그러니까……");
      era.println();
      await tachyon.say_and_wait([
        "지켜보게, 『",
        tachyon.get_colored_name(),
        "』. 『우리』는 과거를 넘어 지금 이곳에 서 있네. 다음은 미래를 개척할 차례야!",
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 레이스장의 출구로 향했다",
      ]);
      await tachyon.print_and_wait([
        "문을 나서기 전,",
        tachyon.sex,
        "는 한 번 뒤를 돌아보았다",
      ]);
      era.println();
      await tachyon.print_and_wait(
        "장내 전광판에서 사츠키상의 로고는 사라져 있었다",
      );
      await tachyon.print_and_wait("화면은 새하얬다");
      await tachyon.print_and_wait("지난 레이스는 끝났다");
      await tachyon.print_and_wait("이곳에 다음으로 비칠 것은 어떤 레이스일까");
      era.println();
      await tachyon.print_and_wait(
        "모른다. 하지만 약속했다. 함께 가겠다고",
      );
      await tachyon.print_and_wait("그러니까");
      era.println();
      await tachyon.say_and_wait(
        "실험을 계속해 보세……가능성이 닿을 저 너머를 보기 위해",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_41: (() => {
    const title = "두 번째 연간 평가";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait("그럼……진지한 이야기를 해 보세");
      era.println();
      await era.printAndWait(["때는 국화상이 끝난 뒤"]);
      await era.printAndWait([
        "장소는 ",
        tachyon.get_colored_name(),
        "의 연구실",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "는 엄숙하게 커튼을 내리고 조명을 켰다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 긴장한 채 침을 삼켰다",
      ]);
      await era.printAndWait([
        "이 팽팽한 분위기……",
        tachyon.get_colored_name(),
        "의 성격을 생각하면",
      ]);
      await era.printAndWait(
        "실험에 실패했나? 위험한 실험동물이 도망갔나? 위험한 약을 수원지에 뿌렸나? 아니면……",
      );
      era.printButton("「알았어, 내가 잡아 올게」", 1);
      era.printButton("「알았어, 내가 뒤집어쓸게」", 2);
      era.printButton("「알았어, 자수하자, 타키온」", 3);
      await era.input();
      await tachyon.say_and_wait(
        "……아니야. 무슨 엉뚱한 소리를 하는 건가. 3관도 끝났으니, 앞으로의 목표를 의논할 때가 됐다는 말이라네",
      );
      await era.printAndWait("…………뭐!?");
      await era.printAndWait([
        "예상보다 훨씬 정상적인 화제에,",
        you.get_colored_name(),
        "는 소리도 내지 못한 채 경악했다",
      ]);
      era.printButton("「목표……」", 1);
      era.printButton("「아, 연구 목표 말이지」", 2);
      await era.input();
      await era.printAndWait([
        "틀림없다. 실험 이야기겠지.",
        tachyon.get_colored_name(),
        "의 두 다리는 국화상 이후 전보다 안정되었다. 적어도 지금은 부상을 지나치게 걱정하지 않아도 된다",
      ]);
      await era.printAndWait(
        "그렇다면 다음 단계로 나아가는 것도 당연하다. 그래, 그렇지 않다면, 마치……",
      );
      era.println();
      await tachyon.say_and_wait(
        "실험 목표……그것도 맞는 말이네. 하지만 지금 의논할 건 출전 일정의 목표야. 처음 약속한 건 3관까지였지 않나. 3관이 끝났으니 다음 단계로 나아가야지",
      );
      era.println();
      await era.printAndWait("뭐어어어!!!!????");
      await era.printAndWait([
        "이번에야말로 ",
        you.get_colored_name(),
        "는 진심으로 경악해, 뭉크의 『절규』 같은 자세가 되었다",
      ]);
      await era.printAndWait([
        "그 모습을 보고, 눈앞의 ",
        tachyon.get_colored_name(),
        "도 저도 모르게 웃음을 터뜨렸다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "후후……내가 먼저 레이스 이야기를 꺼낸 게 그렇게 놀랄 일인가?",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는",
        tachyon.sex,
        "의 태도를 보며, 레이스를 실험의 부속품으로만 여기던 예전의 ",
        tachyon.get_colored_name(),
        "를 떠올렸다",
      ]);
      era.printButton("「……타키온……변했구나」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "따지고 보면 변하지 않는 것은 없지. 연구에서 현상에 안주하고 틀에 갇히는 건 가장 경계해야 할 일이라네……",
      );
      await tachyon.say_and_wait(
        "물론 변화에도 좋고 나쁨은 있지. 적어도 지금의 변화에는 만족하고 있어. 그 점은 자네에게 감사해야겠군",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 보기 드문 솔직한 말에,",
        you.get_colored_name(),
        "는 잠시 당황했다",
      ]);
      await era.printAndWait([
        "오늘은 ",
        you.get_colored_name(),
        "에게도,",
        tachyon.get_colored_name(),
        "에게도 처음 겪는 일이 너무 많다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그때의 열정만으로 여기까지 올 수 있으리라고는 정말 생각하지 못했네……",
      );
      await tachyon.say_and_wait(
        "나조차 조금 두려울 정도야. 가능성이란 독과도 같아서, 이성을 잊게 만드는군……",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 자신의 두 다리를 바라보며 살짝 떨었다",
      ]);
      await era.printAndWait([tachyon.sex, "의 진의는 잘 모르겠다. 하지만"]);
      era.printButton("「타키온은 아직도 한계에 도전하고 싶어?」", 1);
      await era.input();
      await tachyon.say_and_wait([
        "계속하냐고? 아니, ",
        callname,
        ". 나는 줄곧 한계에 도전하는 길 위에 있었네. 멈춘 적은 한 번도 없어.",
      ]);
      await tachyon.say_and_wait(
        ["국화상은 출발점일 뿐이야. 국화상이 끝난 뒤부터가 진정으로 한계를 향하는 여정이라네!"],
      );
      await tachyon.say_and_wait([
        "중거리 최강을 가리는 오사카배, 현역",
        tachyon.uma_sex_title,
        "들의 상반기와 하반기 정점인 타카라즈카 기념과 아리마 기념……",
      ]);
      await tachyon.say_and_wait(
        "뛰어넘어야 할 목표도, 도달해야 할 정상도 얼마든지 있지 않나?",
      );
      era.println();
      await era.printAndWait("그러니");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 두 눈을 똑바로 바라보았다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "3관 이후의 세계도 다시 한번 나와 함께 걸어 주게, ",
        callname,
      ]);
      await tachyon.say_and_wait(
        "보답으로 더 넓은 세계를 보여 주지",
      );
      era.printButton("「그래」", 1);
      era.printButton("「말할 것도 없지. 기꺼이 함께할게」", 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 클래식 시즌은 끝났다",
      ]);
      await era.printAndWait("시니어 시즌이 시작되려 하고 있다!");
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_1: (() => {
    const title = "두 번째 연간 평가 보고";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_9 アグネスタキオンのダイワスカーレットへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} cook_times アグネスタキオンに料理を作った回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_9,
      call_25,
      relation,
      love,
      cook_times,
    ) => {
      await era.printAndWait([
        "올해는,",
        tachyon.get_colored_name(),
        "와 함께하는 시니어 시즌이다",
      ]);
      await era.printAndWait(
        "올해 두 사람의 목표……앞서 명확히 말하지는 않았지만, 최강을 노린다면 그 두 레이스는 빼놓을 수 없다",
      );
      await era.printAndWait([
        "타카라즈카 기념과 아리마 기념……그리고 기회가 된다면 오사카배에도 출전하고 싶다",
      ]);
      era.println();
      await era.printAndWait([
        "이 세 레이스에서 승리한다면, 이른바",
        tachyon.uma_sex_title,
        "의 한계에는 도달할 것이다",
      ]);
      await era.printAndWait([
        "하지만,",
        tachyon.get_colored_name(),
        "의 목표는 거기가 아니다.",
        tachyon.sex,
        "의 목표는……한계를 뛰어넘는 것",
      ]);
      await era.printAndWait(
        "그러니 레이스뿐 아니라 연구를 돕는 것도 잊어서는 안 된다……",
      );
      era.println();
      await tachyon.say_and_wait([callname, ", 꽤 일찍 왔군?"]);
      era.println();
      await era.printAndWait([
        "어느새 오늘 함께 참배하기로 약속한 ",
        tachyon.get_colored_name(),
        "도 도착해 있었다",
      ]);
      era.printButton(
        "「당연하지! 올해 시니어 시즌도, 다른 이것저것도……빌 소원이 너무 많거든!」",
        1,
      );
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          "그런가……그럼 내가 이루어 줬으면 하는 소원도 있나?❤",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 유혹하는 눈빛으로, 의미심장하게 ",
          you.get_colored_name(),
          "에게 물었다",
        ]);
        era.print([
          "올 한 해,",
          tachyon.get_colored_name(),
          "와 하고 싶은 일은……",
        ]);
        era.printButton("「타키온과 더 많이 섹스하고 싶어」", 1);
        era.printButton("「타키온의 몸이 더 민감해졌으면 좋겠어」", 2);
        era.printButton("「타키온에게 밟히고 싶어」", 3, {
          disabled: you.sex_code === 0,
        });
        era.printButton("「타키온이 성실하게 트레이닝해 줬으면 좋겠어」", 4);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait(
              "……색마로군. 하고 싶다면 돌아가서 하세",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "는 ",
              you.get_colored_name(),
              "의 귓가에 다가가 작게 속삭였다",
            ]);
            break;
          case 2:
            await tachyon.say_and_wait([
              "그거야……약을 쓰면 간단하지. 하지만,",
              callname,
              "의 손으로 직접, 나를 자네 취향대로 만들어 줬으면 좋겠군❤",
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "는 ",
              you.get_colored_name(),
              "의 어깨에 기대어 기분 좋게 말했다",
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              "그런 소원을 빌다니……역시 변태로군, ",
              callname,
            ]);
            era.println();
            await era.printAndWait([
              "말은 그렇게 하면서도,",
              tachyon.get_colored_name(),
              "는 살며시 신발을 벗고 검은 스타킹에 싸인 발바닥을 드러냈다",
            ]);
            await era.printAndWait("참배하느라 온종일 걸어, 충분히 냄새가 밴 검은 스타킹");
            era.println();
            await tachyon.say_and_wait("이런 두 발에……밟히고 싶다는 건가?");
            await tachyon.say_and_wait(
              "얼굴에 짓눌려, 내 발바닥의 더러운 냄새로 폐를 가득 채우고 싶은 건가?",
            );
            await tachyon.say_and_wait(
              "성기를 밟혀서, 내 발 냄새와 자네의 쿠퍼액으로 범벅이 되어 십 미터 밖까지 냄새를 풍기고 싶은 건가?",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "는 열기에 들뜬 눈으로 ",
              tachyon.get_colored_name(),
              "를 바라보았다. 대답은 말할 필요도 없었다",
            ]);
            era.println();
            await tachyon.say_and_wait(
              "……색마로군. 하고 싶다면 돌아가서 하세",
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "는 ",
              you.get_colored_name(),
              "의 귓가에 다가가 작게 속삭였다",
            ]);
            break;
          case 4:
            await tachyon.say_and_wait("……분위기를 모르는 사람이군");
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              "는 재미없다는 듯 혀를 찼다",
            ]);
        }
      } else if (love >= 50) {
        await tachyon.say_and_wait("다른 소원이라……예를 들면?");
        era.println();
        era.print([
          tachyon.get_colored_name(),
          "는 흥미롭다는 듯 ",
          you.get_colored_name(),
          "를 바라보았다",
        ]);
        era.printButton("「타키온과 사이가 더 좋아졌으면 좋겠어」", 1);
        era.printButton("「다른 담당들과 사이가 더 좋아졌으면 좋겠어」", 2);
        era.printButton("「실크송이 올해 나왔으면 좋겠어!」", 3);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait("후후, 분명 그렇게 될 거라네❤");
            break;
          case 2:
            await tachyon.say_and_wait(
              "……굳이 다른 담당을 들먹여서 날 화나게 하려는 건가? 유감이지만 그런 수에는 넘어가지 않네",
            );
            era.println();
            await era.printAndWait([
              "그렇게 말하면서도,",
              tachyon.get_colored_name(),
              "는 불만스럽게 볼을 부풀렸다",
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              "음……그게 뭔가……신성둥지? 할○ 나이트?……",
              callname,
              "는 그렇게 게임을 좋아했나?",
            ]);
        }
      } else if (relation <= 0) {
        await tachyon.say_and_wait(
          "흥, 귀신이나 기이한 현상을 보물처럼 여기다니. 그런 것보다 내 실험을 어떻게 도울지나 생각하게",
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait(
          "후후, 그런 초자연적인 건 믿지 않지만, 마음만은 받아 두지",
        );
      } else {
        await tachyon.say_and_wait(
          "그런가. 그렇다면 자네의 소원은 반드시 이루어질 걸세",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "의 말투에,",
          you.get_colored_name(),
          "는 조금 의외라는 생각이 들었다",
        ]);
        await era.printAndWait([
          "이런 미신 따위,",
          tachyon.sex,
          "는 코웃음을 치지는 않더라도 진지하게 받아들이지는 않을 줄 알았다",
        ]);
        await era.printAndWait([
          "그런데",
          tachyon.sex,
          "의 말투는 진심으로 그렇게 믿고 있는 듯했다",
        ]);
        era.printButton("「타키온……?」", 1);
        era.printButton("「안 믿는 거 아니었어?」", 2);
        await era.input();
        await tachyon.say_and_wait(
          "물론 신보다는 내 손에 있는 연구를 믿네……하지만 연구보다 믿는 건 자네라네",
        );
        era.println();
        await era.printAndWait([
          "정확히는,",
          you.get_colored_name(),
          "의 노력을 믿는다는 뜻이다",
        ]);
        await era.printAndWait([tachyon.sex, "는 덧붙였다"]);
        era.println();
        await tachyon.say_and_wait(
          "자네가 지난 한 해 쏟은 노력은 반드시 보답받을 걸세. 신이 주지 않는다면 내가 주겠네",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 자신만만하게 말했다. 신을 대신하겠다니, 참으로 ",
          tachyon.get_colored_name(),
          "답다. 그래도……신사에서는 그런 말을 삼가는 편이 좋겠지",
        ]);
      }
      era.drawLine();
      await era.printAndWait(
        ["새해의 신사는 북적였지만, 참배 자체는 금세 끝났다"],
      );
      await era.printAndWait([
        "참배를 마친 뒤,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 올해 계획을 의논했다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그래……11월에 이야기한 대로군. 문제없네",
      );
      era.println();
      await era.printAndWait(
        "레이스 이야기는 간단히 끝났다. 이제부터가 오늘의 본론이다",
      );
      era.println();
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await tachyon.say_and_wait([
          "한계라……우리의 노력을 생각하면, 지금의 나는 한계에 도달했다고 자신 있게 말할 수 있네……",
          tachyon.uma_sex_title,
          "의 한계에",
        ]);
      } else {
        await tachyon.say_and_wait(
          "한계라……아직 도달하지는 못했지만, 실험을 계속하면 언젠가 닿을 걸세. 그건 문제가 아니야",
        );
      }
      era.println();
      await tachyon.say_and_wait("유일한 문제는……한계를 뛰어넘는 것");
      await tachyon.say_and_wait(
        "그리고 그 점에 관해서는……지금의 나도 실마리가 없네",
      );
      era.println();
      await era.printAndWait([
        "실마리가 없다고 말하면서도,",
        tachyon.get_colored_name(),
        "의 눈에 어린 자신감은, 마치",
        tachyon.sex,
        "가 리만 가설의 해법이라도 말한 듯한 표정이었다",
      ]);
      era.printButton("「실마리가 없다니……곤란하네」", 1);
      await era.input();
      await era.printAndWait("어쩔 수 없다");
      await era.printAndWait("정말로 실마리가 없다면");
      era.println();
      await era.printAndWait("고민해야 할 텐데도, 이상하게 마음은 평온하다");
      await era.printAndWait("실마리가 없다면 찾으면 된다");
      era.printButton("「그럼 타키온, 레이스에 힘을 쏟아 보는 건 어때?」", 1);
      era.printButton(
        `${tachyon.uma_sex_title}의 한계는 역시 레이스장에서만 돌파할 수 있을 테니까`,
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        "……일리 있군. 하지만 그건 ",
        callname,
        "의 사심을 채우려는 것 같기도 하네",
      ]);
      era.printButton(
        "「더 넓은 세계를 보여 주겠다고 한 건 타키온이잖아?」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        "후후, 그렇지. 그럼 계속해 보세, 우리의 새로운 한 해의 연구를!",
      );
      era.println();
      era.print("그럼 연구를 시작하기 전에……");
      era.printButton("「먼저 떡부터 먹자」 (체력+20%)", 1);
      era.printButton("「바로 트레이닝하러 가자」 (무작위 능력치+20)", 2);
      era.printButton("「돌아가서 연구하자」 (스킬 Pt+30)", 3);
      let ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            "두 사람은 ",
            tachyon.get_colored_name(),
            "의 연구실로 돌아왔다",
          ]);
          await era.printAndWait(["그리고 가장 먼저 한 일은……"]);
          era.println();
          await tachyon.say_and_wait(
            "……내가 이런 말을 하는 것도 이상하지만, 우리는……방금 그런 이야기를 나누고서 지금 뭘 하고 있는 건가",
          );
          era.println();
          await era.printAndWait("한때 학생들이 과학 실험을 하던 교실");
          await era.printAndWait([
            "지금은 ",
            you.get_colored_name(),
            "가 열에너지 방출과 찹쌀 합성물의 발화점을 측정하는 실험에 쓰고 있다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "와 ",
            tachyon.get_colored_name(),
            "는 실험 도구인 화로 옆에 앉아 따뜻한 온기를 즐기고 있다",
          ]);
          await era.printAndWait([
            "스프링클러? 그건 예전에,",
            tachyon.get_colored_name(),
            "가 학원 안에서 대규모 약제 살포 실험에 이용한 탓에, 학생회가 손대지 못하도록 강제로 철거했다",
          ]);
          era.printButton("「슬슬 다 구워졌어」", 1);
          era.printButton("「타키온은 안 먹어?」", 2);
          await era.input();
          await tachyon.say_and_wait("물론 먹을 거라네");
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 ",
            you.get_colored_name(),
            "가 구운 찹쌀 합성물——떡을 받아 들자마자 베어 물었고, 예상대로……",
          ]);
          era.println();
          await tachyon.say_and_wait("뜨거워!……후우, 후우");
          era.println();
          if (cook_times < 10) {
            await tachyon.say_and_wait("……제법 맛있군. 의외야");
          } else {
            await tachyon.say_and_wait(
              "뜨겁군……하지만 맛있어. 역시 내가 단련한 모르모트답네",
            );
          }
          era.println();
          await you.say_and_wait("왜 자기가 잘한 것처럼 말하는 거야……");
          era.println();
          await era.printAndWait(
            "실험 연구도, 트레이닝도, 레이스 대책도 다른 날 하면 된다",
          );
          await era.printAndWait("모처럼 새해다. 이 고요함을 즐기자");
          era.println();
          await era.printAndWait("타키온은 웃으며 떡을 조금 베어 물었다");
          await era.printAndWait([
            "요즘은 「내일」이나 「앞으로」라는 말만 나와도,",
            tachyon.get_colored_name(),
            "의 기분이 한결 좋아진다",
          ]);
          await era.printAndWait([
            "궁금해진 ",
            you.get_colored_name(),
            "는 무심코 물었다",
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, ", 내 다리가……"]);
          break;
        case 2:
          await era.printAndWait([
            tachyon.get_colored_name(),
            "가 의욕을 보이는 틈에,",
            you.get_colored_name(),
            "는 곧바로 ",
            tachyon.sex,
            "와 트레이닝장으로 향했다",
          ]);
          await era.printAndWait([
            tachyon.sex,
            "가 트레이닝장을 달리는 모습은 몇 번이나 본 광경인데도,",
            you.get_colored_name(),
            "는 또다시 넋을 잃고 바라보았다",
          ]);
          await era.printAndWait(
            "빛처럼 찬란하고, 빛처럼 눈부시며……빛처럼 영원하다",
          );
          await era.printAndWait(
            "한때 그 달리기에 어려 있던 위태로움은 어느새 사라졌다",
          );
          await era.printAndWait("불안은 사라지고, 가장 순수한 빛만 남았다");
          await era.printAndWait([
            you.get_colored_name(),
            "는 더욱 깊이 빠져들었다",
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '？……', callname, '！']);
          era.println();
          await era.printAndWait([
            "어느새,",
            tachyon.sex,
            "는 트레이닝을 마치고 ",
            you.get_colored_name(),
            "의 곁으로 돌아와 있었다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "내 트레이닝을 보다가 멍하니 있다니……배짱이 좋군……",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "는 황급히 자신이 느낀 차이를",
            tachyon.sex,
            "에게 설명했다",
          ]);
          era.println();
          await tachyon.say_and_wait("……그런가");
          await tachyon.say_and_wait("사실은……나도 묘한 느낌이 든다네");
          await tachyon.say_and_wait([
            "국화상 이후로……다리가……어딘가 이상하다고 할까",
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            callname,
            ", 그 시험관을 가져오게. 흔들지 말고. 쏟으면 일 층까지 바닥이 녹을 수도 있으니",
          ]);
          await tachyon.say_and_wait([
            callname,
            ", 지금은 손을 뗄 수 없네. 알코올램프에 불을 붙이고 옆의 약을 도가니에 넣어 끓이게",
          ]);
          await tachyon.say_and_wait([
            "그리고……좋아, 이걸 커피색으로 물들여서,",
            call_25,
            "의 커피 가루에……",
            callname,
            "! 왜 빼앗아 가는 건가!",
          ]);
          await tachyon.say_and_wait(
            "마스크를 쓰게. 이제 나올 연기는 강한 혼수 작용이 있네. 제대로 막지 않으면 주말까지 잠들 걸세",
          );
          await tachyon.say_and_wait([
            "이건……사과 주스와 설탕을 넣고……약이냐고? 아니야. 나중에 ",
            call_9,
            "가 오면 ",
            tachyon.sex,
            "에게 내줄 음료라네",
          ]);
          era.println();
          await era.printAndWait([
            "참배를 마친 뒤, 두 사람은 ",
            tachyon.get_colored_name(),
            "의 연구실로 돌아왔다. 오늘의 ",
            tachyon.get_colored_name(),
            "는 컨디션이 아주 좋다",
          ]);
          await era.printAndWait([
            "지시가 끊이지 않는다. 너무 괴상한 것만 빼면,",
            you.get_colored_name(),
            "도 거의 다 해냈다. 하지만……",
          ]);
          era.println();
          await tachyon.say_and_wait("성공하지 않는군……쳇, 조금 더 넣어야겠어");
          await tachyon.say_and_wait(
            "오늘 안에……스물두 번의 임상 시험을 끝내야 하네",
          );
          era.println();
          await era.printAndWait(
            "평소의 조급한 실험 속도에 최상의 컨디션이 더해졌다",
          );
          await era.printAndWait("그 결과, 할 일은 두 배로 늘어났다");
          era.printButton("「타키온, 조금 쉬는 게 어때?」", 1);
          era.printButton("「그렇게 서두르지 않아도 돼. 내일 해도……」", 2);
          await era.input();
          await tachyon.say_and_wait("내일이라……");
          era.println();
          await era.printAndWait("꾸짖으려던 말이 도중에 멈췄다");
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 일시 정지 버튼이라도 누른 듯 손을 멈췄다",
          ]);
          await era.printAndWait([
            "손에 든 시험관에서 약이 금방이라도 바닥에 쏟아질 것 같다.",
            you.get_colored_name(),
            "는 한 방울이면 일 층까지 녹인다던 그 약을 황급히 받쳐 들었다",
          ]);
          era.printButton("「타키온! 왜 그래……!」", 1);
          era.printButton("「갑자기 왜 멈춘 거야!」", 2);
          await era.input();
          await tachyon.say_and_wait("…………하하");
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "가 갑자기 웃기 시작했다",
          ]);
          era.printButton("「머리가……드디어 망가졌나」", 1);
          await era.input();
          await tachyon.say_and_wait([
            "……나중에 두고 보게, ",
            callname,
            "……그저 생각하고 있었네",
          ]);
          era.println();
          await era.printAndWait("뭘?");
          era.println();
          await tachyon.say_and_wait("……우리는 정말로 내일을 보게 됐군");
          await era.printAndWait("내일?");
          await era.printAndWait("무슨 말이지. 정말 머리를 부딪치기라도 했나?");
          await era.printAndWait([
            "아니면 천재와 광인은 종이 한 장 차이라더니,",
            tachyon.get_colored_name(),
            "가 마침내 미쳐 버린 건가?",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "무례한 생각을 하는 것 같군……자네 말대로, 내일 해도 늦지 않겠지. 후후",
          );
          await tachyon.say_and_wait(
            "앞으로는 내일이 얼마든지 있으니 말이야",
          );
          era.printButton("「어차피 내일은 오잖아」", 1);
          era.printButton("「너무 깊이 생각하지 마. 어쨌든 내일 계속하자」", 2);
          if ((await era.input()) === 1) {
            await tachyon.say_and_wait(
              "그래. 하지만……이렇게 아름다운 내일은……처음이라네",
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              "는 알아듣기 어려운 말을 중얼거렸다",
            ]);
          } else {
            await tachyon.say_and_wait(
              "후후, 물론이지. 내일 계속하세. 그래, 내일",
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              "가 흐름을 끊었는데도,",
              tachyon.get_colored_name(),
              "는 기뻐 보였다",
            ]);
          }
          era.println();
          await era.printAndWait([
            "왜인지 「내일」이라는 말을 듣고 나서,",
            tachyon.get_colored_name(),
            "의 기분이 한결 좋아졌다",
          ]);
          await era.printAndWait([
            "궁금해진 ",
            you.get_colored_name(),
            "는 무심코 물었다",
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, ", 내 다리가……"]);
      }
      era.printButton("왜 그래!", 1);
      era.printButton("어디 이상해!", 2);
      await era.input();
      await tachyon.say_and_wait([
        "……후후, 그렇게 긴장하지 말게. 내가 하려던 말은, 내 다리가……국화상 이후 갑자기 안정됐다는 거라네",
      ]);
      era.println();
      await era.printAndWait("안정됐다니……좋은 일 아닌가?");
      await era.printAndWait("어, 지금은 축하해야 하는 건가?");
      await era.printAndWait([
        "너무나 갑작스러운 화제에,",
        you.get_colored_name(),
        "는 당황하며,",
        tachyon.sex,
        "가 왜 지금 그 이야기를 꺼냈는지 알 수 없었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……다리 걱정을 내려놓고 한 가지 일에 집중할 수 있게 된 건, 살면서 처음이라네……",
      );
      await tachyon.say_and_wait(
        "당연하다는 듯 계속 달릴 수 있어. 세상 끝까지라도",
      );
      await tachyon.say_and_wait(
        "그러니……내일이나 미래를 생각하기만 해도——보통 사람에게는 당연한 일인데도——나까지, 이렇게……",
      );
      await tachyon.say_and_wait(
        "어떻게 말해야 할까……자네 말대로, 나는 분명 기쁨이라는 감정을 드러내고 있네, ",
      );
      await tachyon.say_and_wait(
        "하지만 연구에 집중할 수 있게 돼서 기쁜 걸까?",
      );
      await tachyon.say_and_wait(
        "……음, 아무래도 다른 것 같군……검토할 가치가 있겠어",
      );
      era.println();
      await era.printAndWait([
        "그 말을 듣고,",
        you.get_colored_name(),
        "는 문득 생각이 떠올랐다",
      ]);
      era.printButton("「망설임 없이 달릴 수 있게 돼서 그런 거 아닐까?」", 1);
      era.printButton("「자유롭게 달릴 수 있게 돼서 그런 거 아닐까?」", 2);
      await era.input();
      await tachyon.say_and_wait([
        "음……",
        callname,
        ", 내가 하는 말이 그 말일세. 굳이 다시 말하는 이유를 모르겠군",
      ]);
      era.printButton("「실험 말고, 달리는 것 자체를 말하는 거야」", 1);
      await era.input();
      await tachyon.say_and_wait([
        "……달리는 걸 좋아하니까, 자유롭게 달릴 수 있게 돼서 기쁘다는 뜻인가?",
      ]);
      era.println();
      await era.printAndWait([
        "아아……역시,",
        tachyon.get_colored_name(),
        "로서는 받아들이기 어렵겠지",
      ]);
      await era.printAndWait(
        "순전히 이성적인 자신이 무언가를 좋아한다는 것을 인정하기란……",
      );
      await tachyon.say_and_wait("그건……");
      era.println();
      await you.say_and_wait("그건?");
      era.println();
      await tachyon.say_and_wait("재미있는 가능성 아닌가!");
      era.println();
      await era.printAndWait("…………어?");
      era.println();
      await tachyon.say_and_wait([
        "달리는 것 자체에 흥미를 느낀다……흥미로운 연구 과제로군!",
        callname,
        "! 다음 연구는 이걸로 정하겠네!",
      ]);
      era.println();
      await era.printAndWait("여, 연구라니 뭘?");
      era.println();
      await tachyon.say_and_wait(
        "당연하지 않나! 달리기에 대한 『좋아하는 마음』이라네!",
      );
      era.println();
      await era.printAndWait("연구……좋아하는 마음?");
      await era.printAndWait([
        you.get_colored_name(),
        "가 정신을 차리기도 전에, 흥분한 ",
        tachyon.get_colored_name(),
        "는 말을 이었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "예감이 들어……한계를 돌파할 가능성은 여기에 있네! 다음 목표는 이걸 연구하는 것으로 하세!",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 말을 듣고,",
        you.get_colored_name(),
        "도 마음을 가라앉히고 득실을 따지기 시작했다",
      ]);
      await era.printAndWait([
        "정말 그렇다면, 무슨 일이 있어도 ",
        tachyon.get_colored_name(),
        "의 목표를 도와야 한다",
      ]);
      await era.printAndWait([
        "착각이라고 해도……",
        tachyon.get_colored_name(),
        "가 달리기를 즐기기 시작했다는 사실 자체는,",
        you.get_colored_name(),
        "에게도 나쁠 게 없다",
      ]);
      await era.printAndWait(
        "연구를 위해 달리는 것과 좋아서 달리는 것 중에는 후자가 더 나을 게 분명하다",
      );
      era.println();
      await era.printAndWait(
        "그러니 한 가지 난제만 빼면, 이득만 있고 손해는 없는 결정이다……",
      );
      await era.printAndWait([
        "생각을 정리한 뒤,",
        you.get_colored_name(),
        "는 ",
        tachyon.get_colored_name(),
        "에게 고개를 끄덕였다",
      ]);
      era.printButton("「그걸 목표로 하자!」", 1);
      await era.input();
      await era.printAndWait("이득만 있고 손해는 없다——가장 큰 난제만 빼면");
      await era.printAndWait(
        "그렇다면 「감정」을 어떻게 연구할 것인가? 힘내라, 모르모트!",
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = "변수·군중 감정의 자극";
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 アグネスタキオンのフジキセキへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_sank_hai マンハッタンカフェが大阪杯に出走するか
     */
    const f = async (tachyon, you, callname, call_5, love, coffee_sank_hai) => {
      await era.printAndWait("오사카배");
      await era.printAndWait("한 해의 첫 중장거리 G1");
      await era.printAndWait([
        "시니어 시즌에 막 들어선 ",
        tachyon.uma_sex_title,
        "에게는 실력을 시험할 첫 레이스다",
      ]);
      await era.printAndWait([
        "하지만……",
        tachyon.get_colored_name(),
        "에게는",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "타키온 선배! 사츠키상 때 정말 멋있었어요!",
      );
      await tachyon.say_and_wait(
        "후후, 응원 고맙네. 하지만 내 주법은 계속 진화하고 있다네. 사츠키상 때보다 지금이……분명 더 놀라울 걸세",
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        "타키온 선배……더비에서 달리시는 모습을 보고……",
        tachyon.uma_sex_title,
        "에게 한계가 있다면, 바로 저거겠다고 생각했어요!",
      ]);
      await tachyon.say_and_wait([
        "아니, 그건 ",
        tachyon.get_colored_name(),
        "의 한계일 뿐이라네……",
        tachyon.uma_sex_title,
        "에게 한계는 없네. 자네들에게도 무한한 가능성이 있다고 믿고 있지",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        "타키온 선배! 어떻게 하면 선배처럼 빨라질 수 있나요……!",
      );
      await tachyon.say_and_wait(
        "이런? 정말 알고 싶은가? 그럼 내일 오후, 과학실에……",
      );
      era.printButton("「크흠」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 두 번 헛기침을 하며,",
        tachyon.get_colored_name(),
        "에게 주의를 줬다",
      ]);
      await era.printAndWait([
        "후배들과 화기애애하게 이야기하던 ",
        tachyon.sex,
        "는 잠깐 굳었다가, 아무 일도 없었다는 듯 말을 이었다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 레이스 이야기를 이어 갔고, 어린 후배 ",
        tachyon.uma_sex_title,
        "들은 귀를 기울였다",
      ]);
      await era.printAndWait(
        "레이스 전 팬 서비스로서는 훈훈한 광경이다",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 한숨을 쉬며, 몇 달 전 ",
        tachyon.get_colored_name(),
        "가 설명한 실험 내용을 떠올렸다",
      ]);
      era.println();
      await tachyon.used_to_say_and_wait([
        "자료를 모아 보니……",
        tachyon.uma_sex_title,
        "가 레이스나 달리기에서 기쁨을 느끼는 가장 큰 이유는 칭찬받고 관객의 지지를 얻는 것……",
      ]);
      await tachyon.used_to_say_and_wait(
        ["중고등학생 나이니, 인정받고 싶어 하는 건 자연스러운 일이겠지"],
      );
      await tachyon.used_to_say_and_wait(
        "나 자신은 영향을 받지 않을 거라 생각하지만……실험인 이상 모든 가능성을 고려해야 하네",
      );
      await tachyon.used_to_say_and_wait(
        "종합해 보면……그래, 관객의 지지를 얻는 것……",
      );
      era.println();
      await era.printAndWait(["그 대목에서 두 사람은 막혔다"]);
      era.println();
      await era.printAndWait(
        "몇 달 전의 여름 합숙……그리고 그 뒤로 이어진 수많은 취재 거절이 떠오른다",
      );
      await era.printAndWait([
        "세간의 시선 속 ",
        tachyon.get_colored_name(),
        "는 언론의 선전과 이쪽의 방치 탓에, 현역 최고의 문제아가 된 모양이다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……아무튼, 우선 트레센 안에서 할 수 있는 일부터 시작하세",
      );
      era.drawLine();
      await era.printAndWait("이러쿵저러쿵");
      await era.printAndWait([
        "처음 보는 것도 아니지만,",
        tachyon.get_colored_name(),
        "의 사교 능력은 여전히 뛰어나다……",
      ]);
      await era.printAndWait(
        "위험한 실험에 쏟는 정성을 조금만 인간관계에 돌린다면……",
      );
      await era.printAndWait([
        "나는",
        tachyon.sex,
        "에게 끌리지 않았을지도 모른다",
      ]);
      await era.printAndWait(
        "연구를 위해서라면 무슨 일이든 최선을 다하는, 그 헌신적인 모습",
      );
      await era.printAndWait("모든 것을 버리고 뒤로 남겨 두는 달리기");
      await era.printAndWait([
        "그 두 가지가 겹쳐진 ",
        tachyon.get_colored_name(),
        "야말로 가장 사람을 매료시킨다",
        tachyon.sex,
      ]);
      if (love >= 75 && tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait("……하지만");
        await era.printAndWait(
          ["자기 연인이 다른 사람들에게 둘러싸여 있으면, 상대가 동성이어도 조금 질투가 난다"],
        );
        await era.printAndWait("이럴 때는……");
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 손에 숨겨 둔 스위치를 살며시 눌렀다",
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          "타키온 선배! 사인해 주세요!",
        );
        await tachyon.say_and_wait("후후, 물론이지……읏!");
        era.println();
        await era.printAndWait([
          "사인하는 순간 작동한 작은 장난감 탓에, ",
          tachyon.get_colored_name(),
          "의 사인이 조금 비뚤어졌다",
        ]);
        await era.printAndWait(
          "다행히 동경 어린 눈빛을 한 작은 팬은 그 정도는 신경 쓰지 않았다",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 뒤돌아 ",
          you.get_colored_name(),
          "을(를) 빤히 노려보았다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 고개를 끄덕이며 미안하다는 듯 웃었다……그리고 리모컨의 강도를 한 단계 올렸다",
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'B',
          "타키온 선배……오늘 레이스, 힘내세요!",
        );
        await tachyon.say_and_wait("그, 그래……꼬……꼭……");
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'C',
          "타키온 선배……왜 그러세요?",
        );
        await tachyon.say_and_wait("아……아무것도……그저……그저……큭……");
        era.printButton("「시간도 없으니 선수 대기실에서 준비하자」", 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 서둘러 ",
          tachyon.get_colored_name(),
          "을(를) 도왔다. 노려본다기보다는 욕구불만의 색기가 어린 시선을 받으며, ",
          tachyon.sex,
          "를 데리고 선수 대기실로 돌아왔다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "……정말이지……그렇게 질투하지 말게……후배들에게까지 질투하다니……",
          you.sex_code === 1 ? "남자라면 좀 더 너그러워지게나" : '',
        ]);
        era.printButton("「그럼 카페의 레이스를 보러 갈게」", 1, {
          disabled: !coffee_sank_hai,
        });
        era.printButton("「그럼 후배들도 좀 챙겨 줘야겠네」", 2);
        await era.input();
        await tachyon.say_and_wait(
          "이렇게 애태워 놓고 이제 와서 다른 사람에게 가겠다는 건가……그건 안 되지",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 뒤에서 살며시 끌어안았다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "레이스 전까지……시간은 충분하겠지❤️ 이런 시시한 장난감 말고……직접 안을 채우고 싶지는 않은가❤️",
        ]);
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) 레이스장에 섰다",
        ]);
        await era.printAndWait([
          "다만……이번만큼은 ",
          tachyon.sex,
          "의 승부복이 몸을 잘 가려 주는 게 다행이었다. 그렇지 않았다면 묘하게 부푼 아랫배를 모두가 알아챘을 것이다",
        ]);
      }
      era.printButton("「시간 됐어, 타키온」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "아, 그렇군. 그럼 출전하고 오겠네……레이스가 끝나면 축하해 주게나, 망아지들",
      );
      era.println();
      await era.printAndWait([
        "마지막으로 흘린 눈웃음에, 어린",
        tachyon.uma_sex_title,
        "들은 다시 환호성을 질렀다",
      ]);
      era.printButton("「……망아지?」", 1);
      await era.input();
      await tachyon.say_and_wait([
        call_5,
        "에게 배운 거라네……어떤가, 자네도 그렇게 불리고 싶은가? 나의 작은 모르모트 군?",
      ]);
      era.printButton("…………아니, 사양할게", 1);
      await era.input();
      await tachyon.say_and_wait([
        "이런, 부끄러운 건가? 순진하군, ",
        callname,
      ]);
      era.printButton(
        "아니……하드웨어가 안 따라주잖아. 따라 해 봐야 오히려……",
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 안쓰럽다는 듯 ",
        tachyon.get_colored_name(),
        "의 가슴께를 바라보았다",
      ]);
      await tachyon.say_and_wait([
        '…………',
        callname,
        "? 하드웨어라니, 무슨 뜻인지 똑똑히 말해 보게나",
      ]);
      era.printButton("「……아무것도 아니야」", 1);
      await era.input();
      await era.printAndWait("장난을 주고받는 사이, 출발 시각이 되었다");
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = "미지의 인자";
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait("해설", [
        tachyon.get_colored_name(),
        "! 새해 G1 연전에서, 초광속의 종이 울렸습니다!",
        tachyon.get_colored_name(),
        "가 멋지게 결승선을 통과했습니다!",
      ]);
      era.println();
      await tachyon.print_and_wait("이런, 이겼군");
      await tachyon.print_and_wait([
        "무례하게 들릴지도 모르지만, 그것이 ",
        tachyon.get_colored_name(),
        "의 솔직한 심정이다",
      ]);
      await tachyon.print_and_wait([
        "이 레이스장에서 ",
        tachyon.get_colored_name(),
        "를 막을 수 있는 것은,",
        tachyon.sex,
        "자신의 부상뿐",
      ]);
      await tachyon.print_and_wait([
        "부상에서 벗어난 지금, 오만하다는 말을 들어도 상관없다.",
        tachyon.get_colored_name(),
        "는 누구에게도 지지 않는다",
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        "가 신경 쓰는 것은 실험 결과뿐",
      ]);
      await tachyon.print_and_wait("하지만……");
      era.println();
      await tachyon.say_and_wait(
        "환호가 없군……그렇겠지. 급조한 인기몰이가 통할 리 없으니……시간이 필요해",
        true,
      );
      await tachyon.print_and_wait(
        "게다가 환호가 있다 한들 레이스에 영향을 줄 리도 없다",
      );
      await tachyon.print_and_wait("그렇지 않다면 인기순으로 착순을 정하면 그만이겠지");
      await tachyon.print_and_wait(
        "레이스는 끝났어……그럼 모르모트를 찾으러……",
      );
      era.println();
      await you.say_as_passer_by_and_wait("관객 A", "굉장해!");
      era.println();
      await tachyon.say_and_wait('…………？');
      await you.say_as_passer_by_and_wait("관객 B", [
        "빠르다……저게 ",
        tachyon.get_colored_name(),
        "인가?",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객 C",
        "언론 때문에 문제아인 줄 알았는데……문제아라도 레이스장에서는 성적으로 말하는 거지!",
      );
      await you.say_as_passer_by_and_wait("관객 D", [
        "클래식 성적부터가 차원이 달랐잖아. 저런 ",
        tachyon.uma_sex_title,
        "가 트윙클 시리즈를 휩쓰는 건 당연해. 드림 컵 출전자들이 와도 못 이길걸!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객 E",
        "클래식 때부터 계속 봤지만, 몇 번을 봐도 너무 강해!",
      );
      era.println();
      await tachyon.say_and_wait("이건……", true);
      era.println();
      await tachyon.print_and_wait(
        "결승선을 지난 지 잠시 뒤, 정지된 화면이 움직이기 시작하듯",
      );
      await tachyon.print_and_wait("장내에 환호성이 울려 퍼진다");
      await tachyon.print_and_wait(
        "과장되고 부풀려진, 근거 없는 찬사와 터무니없는 치켜세움",
      );
      await tachyon.print_and_wait("……이상하군. 이번 레이스에 뭔가 특별한 게 있었나?");
      era.println();
      await tachyon.say_and_wait(
        "아니……늘 이랬어. 그저……알아차리지 못했을 뿐",
        true,
      );
      await tachyon.print_and_wait("두 다리가 부서질 것을 걱정하고");
      await tachyon.print_and_wait("실험에 실패할 것을 걱정하고");
      await tachyon.print_and_wait("제자리걸음일 것을 걱정했다");
      await tachyon.print_and_wait(
        "그러니……없었던 게 아니라, 듣지 못했던 것이다. 중요하지 않았으니까",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "타키온 선배, 멋있어요!",
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        "역시 타키온 선배가 최강의 ",
        tachyon.uma_sex_title,
        "야!",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        "타키온 선배 필승!",
      );
      await tachyon.print_and_wait("사실은 늘 있었다");
      await tachyon.print_and_wait([
        "사츠키상 때, 그 사람은 분명 「광속을 뛰어넘어!",
        tachyon.get_colored_name(),
        "!」라고 외쳤을 것이다",
      ]);
      await tachyon.print_and_wait([
        "일본 더비 때, 그 사람은 분명 「",
        tachyon.uma_sex_title,
        "의 가능성을 보여 줘!」라고 외쳤을 것이다",
      ]);
      await tachyon.print_and_wait([
        "국화상 때, 그 사람은 분명 「증명해 줘,",
        tachyon.uma_sex_title,
        "의 부상은 극복할 수 있다고!」라고 외쳤을 것이다",
      ]);
      era.println();
      await tachyon.print_and_wait("그리고……오사카배");
      await you.say_and_wait([
        tachyon.get_colored_name(),
        "의 가능성은 3관이 전부가 아니야!",
      ]);
      era.println();
      await tachyon.print_and_wait("아아");
      await tachyon.print_and_wait("이번에야말로 들렸다");
      era.println();
      await tachyon.print_and_wait([
        "그랬구나,",
        tachyon.get_colored_name(),
        "는 줄곧 사랑받고 있었다",
      ]);
      await tachyon.print_and_wait("팬들에게, 후배들에게, 세상에게");
      await tachyon.print_and_wait("그리고……관객석 맨 앞줄");
      await tachyon.print_and_wait("빛나고 있지도 않은데, 누구보다 눈부신 그 사람에게");
      era.println();
      await tachyon.print_and_wait("정말이지, 이 바보");
      await tachyon.print_and_wait(
        "레이스 중에는 그런 말을 외칠 수 있으면서",
      );
      await tachyon.print_and_wait(
        "얼굴을 마주하면 왜 그 서투른 칭찬밖에 못 하는 걸까?",
      );
      await tachyon.print_and_wait("내가 듣지 못했으면 어쩌려고");
      await tachyon.print_and_wait("그 응원이 헛수고가 되지 않나");
      await tachyon.print_and_wait(
        "응원……응원받는 상대에게 들려주려고 외치는 것 아니었나?",
      );
      await tachyon.print_and_wait(
        "……그렇다면, 들려주기 위해서가 아니라 저절로 나오는 것이야말로 진정한 응원인가?",
      );
      era.drawLine();
      await tachyon.say_and_wait(["다녀왔네……", callname]);
      era.printButton("「어서 와, 타키온. 다리는 괜찮아!」", 1);
      era.printButton("「오늘도 달리는 모습이 정말, 굉장했어!」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "……응원의 정의를 명확히 했다고 생각했는데 말이야. 자네 탓이네. 다시 조사해야겠어",
      );
      era.println();
      await you.say_and_wait("뭐————왜!?");
      era.println();
      await tachyon.say_and_wait(
        "벌로……오늘 먹을 약은 뇌의 고차 인지 판단을 방해하는 약이라네……",
      );
      await tachyon.say_and_wait(
        "쉽게 말하면 자백제지. 마시고 나면 오늘 레이스에 대해 제대로 이야기해 보세",
      );
      era.println();
      await you.say_and_wait("뭐—————!?");
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_14: (() => {
    const title = "팬 감사제";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, you, callname, call_25) => {
      await tachyon.say_and_wait([
        "그러니까, 실험 결과에 따르면……오사카배 때의 팬들은……",
      ]);
      await tachyon.say_and_wait(
        "게다가 어떤 이의 열정이 힘을 만들어 내, 본래의 스피드를 뛰어넘게 했네. 역시 감정에는 어느 정도 힘이 있는 모양이야",
      );
      era.printButton(
        "「타키온이 그런 관념적인 개념을 믿을 줄은 몰랐어」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        "내가 믿는 것은 진리와 가능성뿐이네. 그 가능성이 있다면 모든 것을 걸겠어……",
        callname,
        ", 자네도 그렇지 않나?",
      ]);
      await tachyon.say_and_wait([
        "유물론이든 관념론이든 상관없네. 쓸 수만 있다면, 한계를 넘어 가능성의 끝에 닿을 수만 있다면……",
        call_25,
        "의 친구라도 기꺼이 힘을 빌리겠어",
      ]);
      await tachyon.say_and_wait(
        "……합리적으로 설명하자면 대뇌 피질과 중추 신경의 활성에 관계가 있겠지. 쉽게 말해서……후후, 합법적인 흥분제랄까?",
      );
      era.printButton('「！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        "후후, 농담이라네……하지만 본질적으로, 이런 흥분이 신체 능력을 끌어올리는 데에는 무의식적인 흥분의 한계가 있지",
      );
      await tachyon.say_and_wait([
        "적어도 오사카배에서 측정한 만큼 높아지지는 않을 텐데……설마 나 자신의 정신이……",
      ]);
      era.printButton("「타키온?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "……아니, 아무것도 아니네. 검증이 필요할 뿐이야. 그보다 더 깊이 알아보고 싶군……『팬』이라는 개념을",
      );
      era.printButton("「팬……」", 1);
      era.printButton("「그러니까……」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "아니야……팬 감사제에 나가 볼 생각이라네",
      );
      await tachyon.say_and_wait(
        "가까운 거리에서의 접촉……이번 목적은 두 가지야. 잘된다면……한 번에 해결하고 싶군",
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait("팬 A", [
        "타키온",
        tachyon.adult_sex_title,
        "! 같이 사진 찍어도 될까요!",
      ]);
      await tachyon.say_and_wait(
        "후후, 물론이지. 특별히 원하는 자세라도 있나?",
      );
      await you.say_as_passer_by_and_wait(
        "팬 A",
        "아뇨, 팔짱만 껴 주시면 돼요!",
      );
      await tachyon.say_and_wait("이렇게 말인가?");
      await you.say_as_passer_by_and_wait(
        "팬 A",
        "가, 감사합니다!",
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        "팬 B",
        "타키온 씨! 늘 응원하고 있어요! 타카라즈카 기념도 힘내세요",
      );
      await tachyon.say_and_wait("그래, 그래. 응원 고맙네");
      await you.say_as_passer_by_and_wait(
        "팬 B",
        "네. 앞으로도 더욱 매력적인 달리기를 보여 주세요!",
      );
      await tachyon.say_and_wait("반드시 그러지, 하하하핫!");
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 찾아온 팬들을 능숙하게 상대하고 있다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 영업 모드와 평소 모습의 차이는……",
      ]);
      await era.printAndWait([
        "때로는 어느 쪽이",
        tachyon.sex,
        "의 본모습인지 의심스러울 정도다",
      ]);
      await era.printAndWait("얼마 지나지 않아 행사가 끝났다");
      era.println();
      await tachyon.say_and_wait("음……재미있는 데이터를 얻었군");
      await tachyon.say_and_wait(
        "오늘 악수와 사인, 사진 촬영을 하러 온 레이스 관객들을 정리했네——",
      );
      await tachyon.say_and_wait(
        "이하 『팬』이라 부르겠어. 관전 목적과 나를 만난 뒤의 심박·호흡·맥박 반응 속도……",
      );
      await tachyon.say_and_wait("팬들 각자의 말로부터 결론을 내렸지");
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        "는 이 팬들에게 실험의 보상과도 같은 존재야",
      ]);
      await tachyon.say_and_wait(
        "응원이라는 노력을 들이고, 그에 대한 반응을 보상으로 받고 싶어 하지……",
      );
      era.printButton("「……난 그렇게 생각하지 않아」", 1);
      era.printButton("「타키온을 응원하는 마음은 그렇게 복잡하지 않아」", 2);
      await era.input();
      await tachyon.say_and_wait([
        "……그래. 이 이론의 가장 큰 허점은,",
        callname,
        ", 자네가 무엇을 위해 나를 돕는지라는 점이네",
      ]);
      await tachyon.say_and_wait(
        ["사츠키상, 일본 더비, 국화상, 그리고 오사카배……자네는 나를 응원해 줬지"],
      );
      await tachyon.say_and_wait(
        "하지만 자네는 그들과 달라……곁에 있었으니 알고 있을 거야. 당시 나는 팬들의 지지를 특별한 실험 변수로 보지 않았네",
      );
      await tachyon.say_and_wait(
        "그러니 자네는 응원과 지지로 아무런 보답도 얻을 수 없어. 연구를 돕는 것과는 다르지……",
      );
      await tachyon.say_and_wait(
        "연구를 도와주면 자네가 보고 싶어 하는 달리기와 레이스를 돌려받을 수 있네……",
      );
      await tachyon.say_and_wait(
        "하지만 응원과 지지에 관해서는 도무지 모르겠군",
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 질문에,",
        you.get_colored_name(),
        "는 말문이 막혔다",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 물음에 답하는 것 자체는 어렵지 않다",
      ]);
      await era.printAndWait(
        "하지만……감정 같은 것을 말로 이해시킬 수 있을까",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "가 말없이 있자,",
        tachyon.get_colored_name(),
        "는 말을 이었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "이렇게 되면 오늘 실험은 절반의 성공이군……",
      );
      await tachyon.say_and_wait(
        ["다음은 타카라즈카 기념이네. 팬들의 지지가 데이터에 미치는 영향을 전체적으로 측정해야겠어"],
      );
      await era.printAndWait([
        "의문을 품은 채,",
        tachyon.get_colored_name(),
        "의 팬 감사제는 끝났다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_a: (() => {
    const title = "모두가 한마음으로";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        "한신 레이스장에 도착했을 때, 장내는 이미 뜨겁게 달아올라 있었다",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait("관객 A", [
        "역시 가장 유력한 건 ",
        tachyon.get_colored_name(),
        "지",
      ]);
      await you.say_as_passer_by_and_wait("관객 B", [
        tachyon.get_colored_name(),
        "? 걔는……전에……",
      ]);
      await you.say_as_passer_by_and_wait("관객 C", [
        "그렇게 말하는 걸 보니 오사카배를 안 봤구나. 저런 달리기를 할 수 있는 ",
        tachyon.uma_sex_title,
        "가 나쁜 사람일 리 없잖아!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객 D",
        "달리기에 인격이 드러난다는 소리는 그만해……그래도 확실히 남들과 다른 달리기긴 하지",
      );
      await you.say_as_passer_by_and_wait("관객 E", [
        "힘내라! 오사카배 때의 달리기를 다시 보여 줘!",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "이런 이런……인기가 많군. 게다가 온통 오사카배 이야기뿐이라니……작년 레이스는 그렇게 지루했나?",
      );
      era.printButton("「작년도 물론 멋졌어」", 1);
      era.printButton("「오사카배가 특히 멋졌을 뿐이야」", 2);
      await era.input();
      await era.printAndWait([
        "작년 ",
        tachyon.get_colored_name(),
        "의 달리기에는 빛의 눈부심뿐 아니라 위태로움도 어려 있었다",
      ]);
      await era.printAndWait([
        "그래서",
        tachyon.sex,
        "의 레이스를 보고 나면, 감탄보다 걱정이 앞섰다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "가 그대로 빛이 되어 사라져 버리지 않을까 하고",
      ]);
      await era.printAndWait("그 위태로움이 사라진 지금");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 달리기는 예술이라 부를 만하다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……일단 칭찬으로 받아 두지. 그럼 이 분위기는 두 번째 실험에 딱 좋겠군",
      );
      await tachyon.say_and_wait(
        "오사카배에서는……도중에 충분히 확인하지 못했네. 지금은 G1 무대에, 응원해 주는 팬들도 있어. 후후, 어디까지 갈 수 있을까",
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_a: (() => {
    const title = "신화의 탄생";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait("해설", [
        "상반기의 총결산을 제패하고 신화가 된 것은 ",
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 당연하다는 듯 가장 먼저 결승선을 넘었다",
      ]);
      await era.printAndWait("장내에 커다란 박수와 환호성이 울려 퍼진다");
      await era.printAndWait(
        "하늘에는 색종이가 흩날리고, 또 하나의 빛나는 레이스가 끝났다",
      );
      era.println();
      await era.printAndWait("갑자기 관객석이 술렁이며, 열기가 한층 뜨거워졌다");
      await era.printAndWait([
        "레이스가 끝나면 늘 가볍게 손을 흔들고 물러나던 ",
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait("이제는 경기장에 남아, 팬들의 환호에 당당히 화답하고 있다");
      await era.printAndWait("그 행동에 응원 소리는 더 커져 하늘까지 닿았다");
      era.drawLine({ content: "퇴장한 뒤" });
      await tachyon.say_and_wait("……후후");
      era.printButton("「타키온!」", 1);
      era.printButton("「오늘도 멋졌어!」", 2);
      await era.input();
      await tachyon.say_and_wait([
        "음? 아, 그보다, ",
        callname,
        "! 보게, 측정 결과라네!",
      ]);
      await tachyon.say_and_wait(
        ["이번 실험에서는 오사카배보다 환호라는 변수의 양을 늘렸네. 레이스 후 데이터를 분석해 보니"],
      );
      await tachyon.say_and_wait(
        "근육 출력에 확실히 도움이 되고 있어……평소의 기분 상승에 따른 증가 폭을 넘어섰네……",
      );
      await tachyon.say_and_wait(
        "쉽게 말해서 실험 성공이야! 관객의 응원은 확실히 영향을 준다네. 하하하하핫!",
      );
      era.println();
      era.print("……잘은 모르겠지만, 어쨌든 실험은 성공한 모양이다");
      era.printButton("「축하해!」", 1);
      era.printButton("「가능성에 또 한 걸음 다가갔네!」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "후후……아직 모르는 부분도 있지만, 레이스에 활용하는 데에는 이제 문제없네!",
      );
      await tachyon.say_and_wait(
        "그런데……이렇게 보니 나는 박수갈채를 받으면 기뻐지는 모양이군……사회적 동물이기 때문인가……",
      );
      era.printButton(
        "「모두 진심으로 타키온을 응원하고 있어. 화답해 주면 분명 기뻐할 거야」",
        1,
      );
      era.printButton(
        "「난 진심으로 타키온을 응원하고 있어. 타키온이 기쁘면 그걸로 됐어」",
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            "후후, 그렇군……그럼 다음에는 조금 화답해 보지. 응원에 대한 보상으로 팬 서비스를 해 주는 셈이군",
          );
          era.println();
          await era.printAndWait([
            "보상이 아니다……그렇게 말하고 싶지만,",
            tachyon.get_colored_name(),
            "는 아직 이해하지 못할 것이다",
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait(
            "자네의 응원……그래, 확실히 들었네……",
          );
          await tachyon.say_and_wait(
            "그런데 그런 말을 외칠 수 있으면서, 왜 내가 달리고 돌아오면 매번 그 진부한 말만 하는 건가?",
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            "그렇다면 그 모두에는 자네도 포함되겠군……내게 어떤 화답을 바라나? 감사의 뜻으로♡",
          );
        } else {
          await tachyon.say_and_wait(
            "그런가. 그럼 가장 열렬한 팬에게는 무엇으로 보답하면 좋을까",
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 요염한 눈빛으로 ",
          you.get_colored_name(),
          "를 바라보았다",
        ]);
        await era.printAndWait([
          "순간,",
          you.get_colored_name(),
          "는 할 말을 잊었다",
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 타카라즈카 기념은 끝났다!",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_31: (() => {
    const title = "타인의 가능성";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_2 アグネスタキオンのサイレンススズカへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, call_2, love) => {
      await era.printAndWait("햇살, 모래사장");
      await era.printAndWait([
        "그리고 모래사장을 뛰어다니는 ",
        tachyon.uma_sex_title,
        "들",
      ]);
      era.printButton("「청춘이네」", 1);
      await era.input();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        "……이 광경을 보고 그런 말이 나오다니, 트레이너 ",
        you.adult_sex_title,
        "도……역시 타키온 선배의 트레이너네요",
      ]);
      era.println();
      await era.printAndWait([
        "여름의 모래사장에서는,",
        tachyon.uma_sex_title,
        "들이 쫓고 쫓기는 추격전을 벌이고 있다",
      ]);
      await era.printAndWait("술래잡기라고 해야 할까");
      await era.printAndWait(
        "일대다인데도, 어째서인지 겁에 질려 달아나는 쪽이 다수다",
      );
      await era.printAndWait([
        "모두가 두려워하는 상대는 올해 상반기 가장 기세가 좋은 ",
        tachyon.uma_sex_title,
        "이자,",
        you.get_colored_name(),
        "의 담당 ",
        tachyon.uma_sex_title,
        '、',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        "이런 이런……요즘 아이들은 몸에 좋은 약이 입에 쓰다는 말도 모르는 건가",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        "……쓰기만 하다면 그나마 괜찮겠지만요",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        "타키온 선배의 약은……맛은 좋아요, 좋긴 한데……!",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        "몸에서 빛이 나는 건……정말 부끄러워요!",
      );
      era.println();
      await era.printAndWait("…………어?");
      await era.printAndWait([
        you.get_colored_name(),
        "는 눈앞의 ",
        tachyon.uma_sex_title,
        "들을 바라본다……햇살 때문에 알아보기 어렵지만, 팔이나 어깨, 다리 부근이 확실히 희미하게 빛나고 있다",
      ]);
      await era.printAndWait("그런데 빛나는 부위가 묘하다");
      await era.printAndWait([
        '응? 허벅지 안 쪽이 빛나고 있는데 ',
        tachyon.uma_sex_title,
        '까지……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……이 약은 혈류가 빨라진 부위에서 빛이 나게 하지. 효력은 트레이닝하는 한 시간 동안만 지속될 터인데, ",
      );
      await tachyon.say_and_wait(
        "부작용으로는 흥분했을 때 접촉한 부위의 단백질 UMA—A의 활성을 촉진한다네. 혈류가 빨라져 빛이 나는 원리도 그 UMA—A를 통한 것이지",
      );
      era.drawLine();
      await tachyon.say_and_wait(
        "요컨대……마음에 둔 사람, 혹은 심박수를 높이는 상대와 몸이 닿았을 때만 빛이 난다는 거라네",
      );
      era.println();
      await era.printAndWait("아아, 그렇군");
      await era.printAndWait("어깨나 팔에서 빛이 나는 이유는 알겠다");
      await era.printAndWait('……잠깐, 허벅지 안쪽이라면……');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '이 갑자기 얼굴을 붉히는 것을 보고 모든 것을 깨달았다.',
      ]);
      await era.printAndWait('……요즘 애들은 화려하게도 노네');
      era.println();
      await tachyon.say_and_wait(
        "아무튼……이 약은 보조 역할이 주목적이네. 꾸준한 트레이닝과 병행해야 효과가 있지",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        "저……저희는 열심히 트레이닝할게요! 게으름 안 피울게요! 그러니까 약은……",
      );
      await tachyon.say_and_wait(
        "후후, 그건 안 되지. 둘 다 해야 가장 큰 효과를 얻을 수 있으니……얌전히 마시게나!",
      );
      era.println();
      await era.printAndWait([
        "눈 깜짝할 사이,",
        tachyon.get_colored_name(),
        "는 ",
        tachyon.uma_sex_title,
        "들이 방심한 틈을 타 한 걸음 내디뎌, 한 명의 ",
        tachyon.uma_sex_title,
        "앞으로 다가갔다. 그리고 전광석화처럼 약을 ",
        tachyon.sex,
        "의 입에 부어 넣었다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "보여 주겠네……",
        callname,
        "를 상대로 갈고닦은 약 먹이는 기술을! 하하하하핫!",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        "꺄아악———",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        "으아악————",
      );
      era.println();
      await era.printAndWait([
        "무엇보다 G1급 ",
        tachyon.uma_sex_title,
        "이며,",
        you.get_colored_name(),
        "도 인정하는 가장 빠른 ",
        tachyon.uma_sex_title,
        "다. 아직 다 자라지 않은 후배들이 ",
        tachyon.get_colored_name(),
        "의 상대가 될 리 없다",
      ]);
      await era.printAndWait("몇 분도 지나지 않아 모래사장에는 쓰러진 이들이 가득했다");
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        "타……타키온 선배, 딴사람 같아요……",
      );
      era.println();
      await era.printAndWait([
        "그러고 보니 후배들에게 좋은 인상을 남겨 실험하기 쉽게 만들려고,",
        tachyon.get_colored_name(),
        "는 후배들 앞에서 차분한 선배인 척하고 있었다",
      ]);
      await era.printAndWait([
        "말하자면 지금 모습이야말로 ",
        tachyon.get_colored_name(),
        "이라는 ",
        tachyon.uma_sex_title,
        "의 본모습이다",
      ]);
      await era.printAndWait(["하지만……", tachyon.sex, "의 말도 맞다"]);
      era.printButton("「타키온은 확실히……많이 변했네」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 며칠 전 ",
        tachyon.get_colored_name(),
        "의 말을 떠올렸다",
      ]);
      await tachyon.used_to_say_and_wait(
        "타키온 선배처럼 강해지고 싶다……그 아이들이 그렇게 말하더군!",
      );
      await tachyon.used_to_say_and_wait([
        "자!",
        callname,
        "! 그 아이들을 위해,",
        tachyon.couple_title,
        "에게 가장 잘 맞는 약을 조합해야겠네!",
      ]);
      await era.printAndWait([
        "「실험을 위해,",
        tachyon.couple_title,
        "에게 약을 시험한다」가 아니다",
      ]);
      await era.printAndWait([
        '「',
        tachyon.couple_title,
        "를 위해 약을 조합한다」인 것이다",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "역시……예전의 다정한 타키온 선배는 어디로……",
      );
      era.println();
      await tachyon.say_and_wait(
        "이런～～여기에도 아직 망아지 한 마리가 남아 있었군?",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "히익!!!",
      );
      era.println();
      await era.printAndWait([
        "마지막으로 ",
        you.get_colored_name(),
        "의 곁에 숨어 있던 어린 ",
        tachyon.uma_sex_title,
        "까지 ",
        tachyon.get_colored_name(),
        "에게 붙잡혀 약을 마셨고, 모래사장의 이 잔혹한 실험은 ",
        tachyon.get_colored_name(),
        "의 완승으로 막을 내렸다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "좋아,",
        callname,
        ". 오늘의 실험을 시작하세",
      ]);
      await era.printAndWait("하지만 이것만은 변하지 않는다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 지금도 한계와 그 돌파를 추구하는 ",
        tachyon.uma_sex_title,
        "다",
      ]);
      era.printButton("「그래서 오늘 실험 주제는 뭐야?」", 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          "……알고 있겠지. 최근 ",
          call_2,
          "가 물 위를 달리는 법을 익혔다는 이야기 말이야",
        ]);
        await era.printAndWait("…………어?");
        era.println();
        await tachyon.say_and_wait(
          "계산상으로는 초속 30미터를 넘겨 물 위를 달리면, 경공으로 수면을 딛는 것 같은 효과를 낼 수 있네",
        );
        era.println();
        await era.printAndWait("……아니, 30미터? 초당?");
        await era.printAndWait("어느새 허리에 밧줄이 묶여 있다");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 바닷가의 수상 오토바이에 올라타 있었다",
        ]);
        await you.say_and_wait(
          "……왜 넌 수상 오토바이를 타고, 내가 물 위를 달리는 건데!?",
        );
        era.println();
        await tachyon.say_and_wait([
          "힘내게,",
          callname,
          ". 자네라면 할 수 있네",
        ]);
        era.println();
        await era.printAndWait("말이 끝나기가 무섭게 몸이 튀어나갔다");
        await era.printAndWait([
          "경공이 성공했는지는 모르겠다. 하지만 그 광경을 본 어린 ",
          tachyon.uma_sex_title,
          "들의 말로는 물수제비 같았다고 한다",
        ]);
      } else {
        await tachyon.say_and_wait("오늘은……조금 재미있는 실험을 해 보도록 하지");
        era.println();
        await era.printAndWait([
          "문득,",
          tachyon.get_colored_name(),
          "은 후배들 앞에서 ",
          you.get_colored_name(),
          "의 손을 잡았다",
        ]);
        era.printButton("「타……타키온?」", 1);
        await era.input();
        await era.printAndWait(
          ["바닥에 엎드려 죽은 척하던 후배들이 갑자기 고개를 들어 두 사람을 바라보았다"],
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은 얼굴을 ",
          you.get_colored_name(),
          "의 귀에 가까이 대고 나직이 말했다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "전에도 말했지. 관객, 혹은 팬을 관찰하고 싶다고",
        );
        await tachyon.say_and_wait([
          "지금은 감정을 자극했을 때를 알아보는 거라네……가령 여기서 입을 맞추면, ",
          tachyon.couple_title,
          "는 어떤 반응을 보일까?",
        ]);
        era.println();
        await era.printAndWait([
          "햇살이 너무 뜨거워서일까,",
          you.get_colored_name(),
          "는 ",
          tachyon.get_colored_name(),
          "의 지금 눈빛을 똑바로 마주할 수 없었다",
        ]);
        await era.printAndWait([
          "문득,",
          tachyon.get_colored_name(),
          "의 입술이 ",
          you.get_colored_name(),
          "의 얼굴에 다가왔다. 몸에 가려져 정말 입을 맞춘 것처럼 보였다",
        ]);
        await era.printAndWait([
          "곁에 있던 ",
          tachyon.uma_sex_title,
          "들에게서 작은 비명이 새어 나왔다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "참 신기하군. ",
          callname,
          "……어째서인지 ",
          tachyon.couple_title,
          "의 목소리를 듣고 나니 더 행동하고 싶어지는군",
        ]);
        await tachyon.say_and_wait(
          "칼리굴라 효과인가? 공공장소에서 이런 일을 한다는 게 부끄러울수록 오히려 하고 싶은 마음이 강해지는 거지",
        );
        era.println();
        await tachyon.say_and_wait("쪽❤");
        era.println();
        await era.printAndWait("키스를 당했다");
        await era.printAndWait("스스로를 납득시킬 핑계도 이제는 없다");
        era.println();
        await tachyon.say_and_wait(
          "그럼……계속해 볼까? 관객들의 감상도 들어 보세❤",
        );
        era.println();
        await era.printAndWait([
          "마지막 말을 할 때, ",
          tachyon.get_colored_name(),
          "의 목소리가 갑자기 커졌다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 모래사장 쪽을 돌아보았다. 눈앞의 광경에 새빨개진 앳된 얼굴들이 눈에 들어왔다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "아무래도……다들 마음에 든 모양이군. 타카라즈카 때 자네가 말하지 않았나? 팬 서비스……라던가",
        ]);
        era.println();
        await era.printAndWait([
          "큰일이다. 그때 ",
          tachyon.get_colored_name(),
          "을 설득했던 말이 그대로 되돌아왔다",
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "의 몸을 끌어안더니, 그 기세로 ",
          you.get_colored_name(),
          "을(를) 모래사장에 밀어 눕혔다",
        ]);
        era.println();
        await tachyon.say_and_wait("아직……계속하고 싶은가?");
        era.printButton("「그만두자」", 1);
        era.printButton("「……그만두자」", 2);
        await era.input();
        await era.printAndWait(
          "아무리 그래도 이렇게 많은 사람 앞에서는 지나치다",
        );
        await era.printAndWait([
          "자세히 보니 ",
          tachyon.get_colored_name(),
          "의 뺨도 살짝 붉어져 있다……부끄러워서인지 흥분해서인지는 모르겠지만",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "그럼……이 작은 ",
          tachyon.uma_sex_title,
          "들에게서 흥분했을 때의 데이터를 모아 와 주게나",
        ]);
        era.println();
        await era.printAndWait([
          "불쑥 ",
          tachyon.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "의 위에서 몸을 일으켰다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "계속하고 싶다면……데이터를 가지고 내게 돌아오게나❤",
        );
        era.println();
        await era.printAndWait([
          "목소리를 낮추지도 않은 채 던진 암시에, 주위의 ",
          tachyon.uma_sex_title,
          "들에게서 다시 비명이 터져 나왔다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 코를 문질렀다. 데이터 수집은 쉬워졌지만, 돌아가든 돌아가지 않든 소문은 피할 수 없을 것 같다",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_32: (() => {
    const title = "입장을 바꾸는 실험";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} kobe_hai 神戸新聞杯（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      kobe_hai,
      arim_kin,
    ) => {
      await era.printAndWait("그렇게 즐거운 여름 합숙도 지나갔다");
      await era.printAndWait("학원 버스를 타고 학교로 돌아갈 준비를 하고 있다");
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "타……타키온 선배! 자, 잠깐만요!",
      );
      era.println();
      await era.printAndWait("음?");
      await era.printAndWait([
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 동시에 돌아보며, 머리에 커다란 유성 무늬가 있는 어린 ",
        tachyon.uma_sex_title,
        "를 보았다",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        "올가을……저,",
        kobe_hai,
        "에 출전해요……타키온 선배……그때 응원하러 와 주실 수 있나요!",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "응원……말인가?",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "네! 타키온 선배에게 제가 달리는 모습을 보여 드리고 싶어요!",
      );
      era.println();
      await era.printAndWait([
        kobe_hai,
        "……구월 하순의 레이스다. 관전만 한다면 중요한 일정을 망칠 정도는 아니다",
      ]);
      await era.printAndWait([
        "이제는,",
        tachyon.get_colored_name(),
        "가 내키는지에 달렸다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그래……상관없네. 그때는 아직 다른 일정도 없으니",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "정말요! 잘됐다! 반드시 이길게요!",
      );
      era.println();
      await era.printAndWait([
        "어린 ",
        tachyon.uma_sex_title,
        "는 흥분해서 벌떡 일어나더니, 조금 전 억지로 약을 먹은 이라고는 믿기지 않는 속도로 달려갔다",
      ]);
      era.println();
      await tachyon.say_and_wait("……눈부시군. 이 아이들의 가능성은");
      era.printButton("「늙은이 같은 말투네」", 1);
      era.printButton("「내 눈에는 타키온이 가장 눈부셔!」", 2);
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          "그런가? 그렇다면……계속 지켜봐 주게. 내 가능성은 이제 자네 없이는 성립하지 않으니♡",
        );
        await era.printAndWait([
          "여름 합숙은 끝났다. 다음은 ",
          arim_kin,
          "!……그 전에,",
          kobe_hai,
          "관전부터다!",
        ]);
      } else if (love >= 50) {
        await tachyon.say_and_wait(
          "그렇다면……지켜보게. 내 가능성이 닿을 곳을",
        );
      } else if (relation >= 225) {
        await tachyon.say_and_wait(
          "후후, 당연하지. 그 아이들이 나를 뛰어넘기엔 아직 일러!",
        );
      } else if (relation >= 0) {
        await tachyon.say_and_wait(
          "자네……그런 달콤한 말을 하지 않으면 죽기라도 하나?",
        );
      } else {
        await tachyon.say_and_wait(
          "자네 같은 사람에게 기대를 받는 건……불쾌하군",
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_35: (() => {
    const title = "인자·관찰자의 설정";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait(
        "생각해 보니……관객석에서 레이스를 보는 건 이번이 처음이군",
      );
      era.println();
      await era.printAndWait(["오늘은 고베 신문배"]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "가 후배의 초대를 받고 관전하는 날이다",
      ]);
      era.printButton("「대개 직접 출전하니까」", 1);
      era.printButton("「대개 영상으로 보니까」", 2);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "에게는 자신이 출전하는 레이스 외에 경기장에 올 필요가 없었을 것이다",
      ]);
      await era.printAndWait(
        "레이스 데이터를 분석한다면, 관객석보다 경기 후 영상에서 얻을 수 있는 정보가 더 많다",
      );
      await era.printAndWait(
        "그러니 오늘은 정말 처음이다. 연구가 아니라 관객으로서 레이스를 본다",
      );
      era.println();
      await tachyon.say_and_wait("……현장의 느낌은……역시 시끄럽군");
      era.println();
      await you.say_as_passer_by_and_wait("팬 A", "힘내!");
      await you.say_as_passer_by_and_wait("팬 B", "꼭 이겨 줘!");
      await you.say_as_passer_by_and_wait("팬 C", [
        "고베 신문배가 국화상의 전초전이라고는 하지만, 사실 2400미터에 한신 개최라는 점에서 국화상을 가늠하기에는……",
      ]);
      await you.say_as_passer_by_and_wait("팬 C", [
        "……그러니까 고베 신문배에서 이긴 ",
        tachyon.uma_sex_title,
        "가 국화상에서도 이긴다는 보장은 없어",
      ]);
      await you.say_as_passer_by_and_wait("팬 D", "갑자기 무슨 소리야");
      era.println();
      await tachyon.say_and_wait("평소 내가 달리기 전의 관객석도 이런 건가?");
      era.printButton("「대충 그래. 오히려 더 시끌벅적하지」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "……그렇겠군, G1이니. 마음은 이해하지만, 이때 응원해 봐야 의미 없지 않나",
      );
      era.printButton("「의미가 있느냐 없느냐……그런 계산으로 하는 게 아니야」", 1);
      era.printButton("「보면 알 거야」", 2);
      await era.input();
      await tachyon.say_and_wait("보면 안다니……이런? 게이트에 들어가는군");
      era.drawLine();
      await tachyon.print_and_wait("그 아이가 게이트에 들어갔다");
      await tachyon.print_and_wait([
        "솔직히 이번 레이스에서 ",
        tachyon.get_colored_name(),
        "가 주목할 부분은 많지 않다",
      ]);
      await tachyon.print_and_wait("가능성을 지닌 그 아이가 당연히 최우선이다");
      await tachyon.print_and_wait(
        "……그 외에는 클래식급 한정 G2일 뿐이다",
      );
      era.println();
      await tachyon.say_and_wait("질 리가 없다고 할 수 있겠군");
      era.println();
      await tachyon.print_and_wait("사전 인기도 당연히 1번 인기");
      await tachyon.print_and_wait("때와 장소, 사람까지 모두 유리하다. 질 리가 없다");
      await tachyon.print_and_wait("사전 분석에 따른 승률은 97.46%");
      era.println();
      await tachyon.print_and_wait("하지만……");
      era.println();
      await you.say_as_passer_by_and_wait("관객 A", "지지 마!");
      await you.say_as_passer_by_and_wait("관객 B", [
        "힘내! 아직 할 수 있어! 바깥쪽으로 ",
        tachyon.sex,
        "를 추월해!",
      ]);
      await you.say_as_passer_by_and_wait(
        "관객 C",
        "포기하지 마! 반드시 따라잡을 수 있어!",
      );
      era.println();
      await tachyon.print_and_wait([
        "왜 아직도 뒤처진 ",
        tachyon.uma_sex_title,
        "에게 응원을 보내는가",
      ]);
      await tachyon.print_and_wait("이제 따라잡을 수 없다는 건 명백하지 않은가");
      await tachyon.print_and_wait("……모르겠군");
      await tachyon.print_and_wait([
        "아니, 이해는 한다. 헛수고라도 자신이 응원하는 ",
        tachyon.uma_sex_title,
        "를 위해 소리치고 싶다는 마음은 이해한다",
      ]);
      await tachyon.print_and_wait(
        "미친 과학자라 불려도, 인정도 모르는 로봇은 아니다",
      );
      await tachyon.print_and_wait("하지만 왜 나는……");
      era.println();
      await you.say_as_passer_by_and_wait("해설", [
        "따라붙었습니다! 방금 후방의 ",
        tachyon.uma_sex_title,
        "가 따라붙었습니다!",
      ]);
      era.println();
      await tachyon.say_and_wait('！');
      await tachyon.say_and_wait("……힘내라");
      await tachyon.say_and_wait("힘내! 지지 말게!");

      era.printButton('「！」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        "해설",
        "골—————인! 1착은 1번, 1번 게이트—————",
      );
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 응원은 장내의 박수와 함성에 파묻혔다",
      ]);
      await era.printAndWait([
        "경기장에서 그 소리를 들은 것은 아마도 ",
        tachyon.sex,
        "의 곁에 있던 ",
        you.get_colored_name(),
        "와……",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "선배! 응원 들었어요! 고마워요……그때 온몸에 힘이 솟았어요!",
      );
      era.println();
      await tachyon.say_and_wait(
        "……후후, 잘 달렸네. 앞으로도 꾸준히 노력하게나",
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "네!",
      );
      era.println();
      await era.printAndWait([
        "고베 신문배가 끝나고,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 경기장을 떠났다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……이론상으로는 확실했지만, 경기장 밖에서……혹은 당사자로서 보는 건 처음이군",
      );
      await tachyon.say_and_wait(
        "다른 아이들도, 그 아이도, 마지막에는……정말 한계를 뛰어넘었어",
      );
      era.println();
      await era.printAndWait([
        "오늘 레이스에서는 여러 ",
        tachyon.uma_sex_title,
        "가",
      ]);
      await era.printAndWait("한계를 뛰어넘었다");
      await era.printAndWait([
        "미리 측정한,",
        tachyon.couple_title,
        "의 이론상 최고 속도를 넘어섰다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ", 팬 감사제 때의 일을 기억하나?",
      ]);

      era.printButton(
        "「타키온은 보답을 바라고 그 아이를 응원했어?」",
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 대답 대신 되물었을 뿐이다",
      ]);
      era.println();
      await tachyon.say_and_wait("……후후");
      await tachyon.say_and_wait(
        "들려주고 싶어서, 무언가 주고받고 싶어서 한 행동이 아니다……",
      );
      await tachyon.say_and_wait(
        "그저 자신의 마음과 감정을 소리 내어 쏟아 냈다",
      );
      await tachyon.say_and_wait("바꿔 말하면, 『감동』이라네");
      await tachyon.say_and_wait([
        "관객이 ",
        tachyon.uma_sex_title,
        "에게 감동해 환호하고,",
        tachyon.uma_sex_title,
        "도 관객에게 감동해 자신의 한계를 뛰어넘는다……",
      ]);
      await tachyon.say_and_wait(
        "왼발로 오른발을 딛고 올라서는 것처럼, 영구기관 같은 불합리한 개념인데도 실제로 일어나고 있어",
      );
      await tachyon.say_and_wait(
        "역시 연구실에서는 결코 맛볼 수 없는 경험이군. 하하하핫!",
      );

      era.printButton("「이제 레이스를 『좋아』하게 된 거야?」", 1);
      await era.input();
      await tachyon.say_and_wait("……글쎄, 나도 모르겠군");
      era.println();
      await era.printAndWait("……그렇다");
      await era.printAndWait("결국 직접 경기장에 서서 달린 것은 아니다");
      await era.printAndWait("좋아하는지 아닌지는 아직 말로 표현하기 어렵겠지");
      await era.printAndWait([
        "하지만 고베 신문배가 끝나고, 아리마 기념이 코앞으로 다가왔다",
      ]);
      await era.printAndWait("연구의 마감(Deadline)이 눈앞에 있다");
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_39: (() => {
    const title = "마지막 인자를 찾아서";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait(
        "가을이 되자, 연말 최대의 레이스도 세간의 관심을 받기 시작했다",
      );
      era.println();
      await you.say_as_passer_by_and_wait("기자 A", [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        ", 연말 아리마 기념의 1번 인기라는 점에 대해 소감은 어떻습니까?",
      ]);
      await tachyon.say_and_wait([
        "1번 인기? 별로……아니, 여러분의 지지에 감사드리네. 아리마 기념에서는……",
      ]);
      await tachyon.say_and_wait("자신의 한계를 뛰어넘는 것을 목표로 달리겠네");
      await you.say_as_passer_by_and_wait("기자 B", [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        "의 목표가 ",
        tachyon.uma_sex_title,
        "의 한계를 넘는 것이라는데, 무슨 뜻입니까?",
      ]);
      await tachyon.say_and_wait(
        ["후후후……모든 게 잘 풀린다면 아리마 기념에서 볼 수 있을 걸세"],
      );
      await you.say_as_passer_by_and_wait("기자 C", [
        "아리마 기념을 앞두고,",
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        "는 어떤 준비를 하고 있나요?",
      ]);
      await tachyon.say_and_wait(
        "코스 공략과 신체적인 발전은 말할 것도 없지. 그 외에는……사실 정신적인 돌파구를 찾고 있네",
      );
      era.println();
      await era.printAndWait("정신적인 돌파구");
      await era.printAndWait("그 말에 현장의 기자들은 어리둥절해졌다");
      await era.printAndWait("겉으로 보이는 인상으로도, 가끔 들리는 소문으로도");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 정신론을 이야기할 만한 ",
        tachyon.uma_sex_title,
        "로 보이지 않는다",
      ]);
      era.println();
      await you.say_as_passer_by_and_wait("기자 A", [
        "저……정신적인 돌파구요?……다음 상대가 그 ",
        coffee.get_colored_name(),
        "라서 정신적인 도움을 구한다는 뜻인가요?",
      ]);
      await tachyon.say_and_wait([call_25, "……상대……?"]);
      await you.say_as_passer_by_and_wait("기자 A", "아, 아닌가요?");
      await tachyon.say_and_wait("……아니, 검토할 가치가 있는 가능성이군. 후후후");
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 의미심장한 말을 남기고 더 설명하지 않았다",
      ]);
      if (love >= 50 && love < 75) {
        await you.say_as_passer_by_and_wait("기자 A", [
          "그러고 보니……또,",
          tachyon.get_colored_name(),
          "와 트레이너에 관한 소문이",
        ]);
        await you.say_as_passer_by_and_wait("기자 A", "두 분께 여쭙고 싶은데……");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "가 ",
          you.get_colored_name(),
          "를 힐끗 보았다. 어째서인지,",
          you.get_colored_name(),
          "는 등골이 서늘해졌다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "묻고 싶은 건 나와 ",
          you.sex,
          "사이에……연애 감정이 있느냐는 건가?",
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 다시 ",
          you.get_colored_name(),
          "를 보았다. 이번에는 알았다.",
          tachyon.sex,
          "의 뜻은 「어떻게 대답해 줬으면 좋겠나?」였다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 기자들이 보지 못하는 각도에서 아주 작게 고개를 저었다.",
          tachyon.sex,
          "에게 전해지도록",
        ]);
        era.println();
        await tachyon.say_and_wait([
          "……이렇게 말하지.",
          you.sex,
          "는……내게 가장 소중한……",
        ]);
        await you.say_as_passer_by_and_wait("기자 A", "가장 소중한……?");
        era.println();
        await era.printAndWait([
          "모두의 관심이 ",
          tachyon.get_colored_name(),
          "의 말에 쏠렸다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "도 저도 모르게 침을 삼켰다",
        ]);
        era.println();
        await tachyon.say_and_wait("가장 소중한……실험동물이라네");
        era.println();
        await era.printAndWait("대답을 들은 기자들은 하나같이 맥이 풀렸다");
        await era.printAndWait([
          you.get_colored_name(),
          "도 한숨을 내쉬었다. 다만 안도의 한숨이었다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "는 입 모양만으로,",
          you.get_colored_name(),
          "에게 「빚 하나 졌네」라고 전했다",
        ]);
        await era.printAndWait([
          "하지만 지금 ",
          you.get_colored_name(),
          "에게는 그걸 신경 쓸 여유가 없다",
        ]);
        era.println();
        await era.printAndWait("덧붙이자면, 다음 날 신문의 제목은……");
        await you.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ", 소문에 답하다! 트레이너가 가장 소중한 존재라고 밝혀!",
        ]);
        await era.printAndWait("…………아무것도 피하지 못했잖아");
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_43: (() => {
    const title = "끝까지 타오른 승부욕";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕
     * @param {boolean} invincible アグネスタキオンは無敗か
     * @param {boolean} beat_c アグネスタキオンはマンハッタンカフェに勝ったことがあるか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      invincible,
      beat_c,
    ) => {
      await tachyon.say_and_wait("후우……후우……");
      era.println();
      await era.printAndWait([
        "고베 신문배 이후 오늘까지,",
        tachyon.get_colored_name(),
        "의 트레이닝은 좋은 상태를 유지하고 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait("……오늘도 같군");
      era.println();
      await era.printAndWait("하지만……유지된다는 것은 진전이 없다는 뜻이기도 하다");
      await era.printAndWait([
        "아리마가 다가올수록,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 마음에도 조급함이 깃들었다",
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        "타키온 선배! 오늘도 왔어요!",
      );
      era.println();
      await era.printAndWait([
        "그때 두 사람의 마음을 달래 준 것은 고베 신문배 때의 후배 ",
        tachyon.uma_sex_title,
        "였다",
      ]);
      await era.printAndWait([
        "그 후배 ",
        tachyon.uma_sex_title,
        "는 이제 자주 ",
        tachyon.get_colored_name(),
        "를 따라 트레이닝하고 있다",
      ]);
      await era.printAndWait([
        "트레이너인 ",
        you.get_colored_name(),
        "도 가끔 ",
        tachyon.sex,
        "에게 조언해 준다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "가 따분한 듯 상대를 바라보고 있을 때, 익숙한 얼굴이 눈앞에 불쑥 나타났다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "왜 그러나? 그렇게 빤히 보니, 그 아이에게 관심이라도 있나?",
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), "는 황급히 고개를 저었다"]);
      era.println();
      if (relation >= 0) {
        await tachyon.say_and_wait(
          "쿠후후……그 아이에게는 확실히 상당한 가능성이 있지",
        );
        await tachyon.say_and_wait([
          "……예전의 나라면,",
          tachyon.sex,
          "를 Plan B 후보로 삼았을지도 모르겠군",
        ]);
        await tachyon.say_and_wait(
          "하지만 Plan B는 어디까지나 Plan A가 성립하지 않을 때의 대비책이네",
        );
        await tachyon.say_and_wait(["주객이 전도되면 곤란하지,", callname]);
      } else {
        await tachyon.say_and_wait(
          "내가 아끼는 후배를 그런 눈으로 보지 말게",
        );
        await tachyon.say_and_wait(
          "……자네 같은 부류는 남을 끌어들일 자격이 없네",
        );
        await tachyon.say_and_wait(
          "내 곁에 있게 해 주는 것 자체가 자네에게 베푸는 가장 큰 자비야",
        );
      }
      if (love >= 75) {
        era.println();
        await tachyon.say_and_wait(
          "잊어버린 모양이라면, 다시 한번 자네 눈을 불태워 주겠네……",
        );
        await tachyon.say_and_wait([
          "이번에는 눈이 멀 정도로……다른 ",
          tachyon.uma_sex_title,
          "의 모습 따위는 보이지 않을 때까지",
        ]);
      }
      era.println();
      await era.printAndWait([
        "이것도 어떤 의미에서는 ",
        tachyon.get_colored_name(),
        "의 독점욕일까",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 쓴웃음을 지을 수밖에 없었다",
      ]);
      era.println();
      await era.printAndWait([
        "하지만 오늘 찾아온 손님은 후배 ",
        tachyon.uma_sex_title,
        "만이 아니었다",
      ]);
      era.println();
      await tachyon.say_and_wait("……이런");
      await coffee.say_and_wait([c_call_t, '……']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        tachyon.get_colored_name(),
        "의 Plan B 제일 후보",
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          you.get_colored_name(),
          "의 담당 ",
          tachyon.uma_sex_title,
          "이기도 하다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "와 맹세하고, 친구를 따라잡기로 결심한 소중한 담당",
        ]);
      }
      era.println();
      await era.printAndWait([
        "그런 상대가 갑자기 ",
        tachyon.get_colored_name(),
        "를 찾아왔다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        call_25,
        "? 내 실험을 받으러 온 건가? 언제든 대환……",
      ]);
      await coffee.say_and_wait(
        "아니에요……그저, 모의 레이스를……부탁드릴 수 있을까 해서요",
      );
      await tachyon.say_and_wait("……모의 레이스?");
      await coffee.say_and_wait("네……꼭 부탁드리고 싶어요");
      era.println();
      await era.printAndWait("……모의 레이스를 신청하는 것은 간단하다");
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          "더구나 ",
          you.get_colored_name(),
          "는 ",
          tachyon.couple_title,
          "두 사람의 트레이너다",
        ]);
      }
      await era.printAndWait("특별히 준비할 것도 없이, 장소만 빌리면 된다");
      era.println();
      await era.printAndWait("신청은 얼마 지나지 않아 승인되었다");
      await era.printAndWait([
        "두 사람만 서 있는 코스에서,",
        you.get_colored_name(),
        "는 출발 신호를 맡아 울타리 밖에 섰다",
      ]);
      await era.printAndWait("마음속은 불안과 술렁임으로 가득했다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        '。',
        tachyon.sex,
        "의 목표는,",
        tachyon.uma_sex_title,
        "의 한계를 뛰어넘는 것",
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        coffee.sex,
        "의 목표는 친구의 발걸음을 따라잡는 것",
      ]);
      era.println();
      await era.printAndWait("운명의 배역일까, 짓궂은 우연일까.");
      await era.printAndWait(["두 사람 모두 최종 목표를 아리마 기념으로 정했다"]);
      await era.printAndWait(
        "오늘의 모의 레이스……이유는 모르겠지만, 그날의 예행연습이라 봐도 좋을 것이다",
      );
      await era.printAndWait([
        "복잡한 마음을 안은 채,",
        you.get_colored_name(),
        "는 깃발을 내렸다",
      ]);
      era.drawLine();
      await tachyon.print_and_wait("제3코너, 그리고……마지막 직선");
      await tachyon.print_and_wait([call_25, "는 왼쪽? 아니, 오른쪽"]);
      await tachyon.print_and_wait([
        call_25,
        "의 달리기는 여전히……종잡을 수 없군",
      ]);
      await tachyon.print_and_wait("하지만 규칙이라면 알아낼 수 있을 걸세");
      era.println();
      await tachyon.say_and_wait("지금이야……읏!?");
      era.println();
      await tachyon.print_and_wait("인정해야겠군");
      await tachyon.print_and_wait("레이스 전의 나는 확실히 방심했다");
      await tachyon.print_and_wait("Plan B의 대체자로서");
      if (beat_c) {
        await tachyon.print_and_wait("게다가 과거의 패자로서");
      }
      await tachyon.print_and_wait("입으로는 아무리 그럴듯하게 말해도");
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        "는 독립된 존재라느니",
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        "에게는 나 못지않은 재능이 있다느니 해도",
      ]);
      await tachyon.print_and_wait(
        "마음속에는 오만이라 부르기도 민망할 만큼의 경시가 자리 잡고 있었다",
      );
      await tachyon.print_and_wait([
        "가짜 ",
        coffee.sex,
        "가 최상의 상태인 진짜를 이길 리 없다고",
      ]);
      era.println();
      await tachyon.say_and_wait("주법도, 속도도……낯설군");
      era.println();
      await tachyon.print_and_wait("당연하지");
      await tachyon.print_and_wait([
        "지난번에,",
        tachyon.get_colored_name(),
        "가 ",
        coffee.get_colored_name(),
        "의 주법과 속도를 자세히 살펴본 것은 일 년 전 칠월이었으니까",
      ]);
      era.println();
      await tachyon.print_and_wait(
        "자신이 나아가는 동안 상대는 제자리에 있을 거라 생각한 이론가는, 얕본 대가를 치르게 된다",
      );
      await tachyon.print_and_wait("……상대라?");
      era.println();
      await tachyon.print_and_wait("가짜가 아니다");
      await tachyon.print_and_wait("대체품도 아니다");
      await tachyon.print_and_wait(
        "칠흑의 사냥개가 오만한 연구자의 목덜미에 송곳니를 박았다",
      );
      await tachyon.print_and_wait("고통과 패배로 자신의 존재를 증명한다");
      await tachyon.print_and_wait([
        tachyon.sex,
        "와 같은 무대에 설 수 있는 「상대」임을 증명한다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "……쿠후후. 상대를 이기고 싶다, 상대를 뛰어넘고 싶다, 누군가를 넘어서고 싶다……과연, 이런 느낌인가?",
      );
      era.println();
      await tachyon.print_and_wait("좋아. 인정하겠네");
      await tachyon.print_and_wait([
        "이번에는 ",
        tachyon.get_colored_name(),
        "의 패배야",
      ]);
      await tachyon.print_and_wait(
        "각오가 부족하다. 연구가 부족하다. 진지함이 부족하다",
      );
      await tachyon.print_and_wait(
        "이 상태로 이겨 버린다면, 상대의 노력을 가볍게 여기는 셈이지",
      );
      await tachyon.print_and_wait([
        "오히려,",
        call_25,
        "에게 감사해야겠군",
      ]);
      await tachyon.print_and_wait([
        "이대로 내버려 두고 아리마 기념에서야 부족한 「마지막 요소」를 깨달았다면, 되돌릴 수 없었을 테니",
      ]);
      await tachyon.print_and_wait("그러니……");
      era.println();
      await tachyon.say_and_wait("아아……이번의 나는———");
      era.printButton("「타키온, 지지 마!」", 1);
      era.printButton("「카페, 힘내!」", 2, {
        disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
      });
      const ret = await era.input();
      era.println();
      if (ret === 1) {
        await tachyon.print_and_wait("말이 목구멍까지 올라왔다가 나오지 않는다");
        await tachyon.print_and_wait([
          "순수한 ",
          tachyon.get_colored_name(),
          "라면 눈앞의 패배를 인정하는 것쯤 어렵지 않을 터다",
        ]);
        await tachyon.print_and_wait(
          "레이스는 실험과 같다. 반드시 성공한다는 법은 없다",
        );
        await tachyon.print_and_wait(
          "실패해도 상관없다. 교훈을 얻어 다시 하면 된다. 그뿐이다",
        );
        await tachyon.print_and_wait("더구나 이건 모의 레이스일 뿐이네");
        era.println();
        await tachyon.print_and_wait("포기할 이유는 얼마든지 댈 수 있다");
        await tachyon.print_and_wait("계속할 이유는 단 하나");
        await tachyon.print_and_wait("하지만 그 하나가 다른 모든 이유를 압도한다");
        era.println();
        await tachyon.say_and_wait("이기고 싶어……이기고 싶다네!");
        era.println();
        await tachyon.print_and_wait("스스로도 놀랄 만큼의 집착");
        await tachyon.print_and_wait([
          "순수한 ",
          tachyon.get_colored_name(),
          "라면 지금도 깨끗이 포기할 수 있다",
        ]);
        await tachyon.print_and_wait(
          "하지만 외부에 흔들리지 않는 순수하고 냉혹한 연구자는 이제 없네",
        );
        era.println();
        await tachyon.print_and_wait(
          "타인의 응원을 받아들이고, 타인에게 물든 순간",
        );
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          "는 이미 순수하지 않게 되었다",
        ]);
        await tachyon.print_and_wait([
          "지금의 ",
          tachyon.get_colored_name(),
          "는 연구를 위해, 한계를 넘기 위해",
        ]);
        await tachyon.print_and_wait("그리고……");
        await tachyon.print_and_wait("어떤 레이스에서든 자신의 곁에 있는 사람을 위해");
        await tachyon.print_and_wait([
          "언제나 ",
          tachyon.get_colored_name(),
          "의 요구를 우선해 주는 사람을 위해",
        ]);
        era.println();
        if (love >= 50) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            "는 단 하나뿐인 연인을 위해 달리고 있다",
          ]);
        } else if (relation > 225) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            "는 뜻을 함께하는 동지를 위해 달리고 있다",
          ]);
        } else {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            "는 단 하나뿐인 실험동물을 위해 달리고 있다",
          ]);
        }
        era.println();
        await tachyon.print_and_wait(
          "반응은 상호 작용한다. 화학의 기본 원리라네",
        );
        await tachyon.print_and_wait([
          you.get_colored_actual_name(),
          "라는 이름의 모르모트가 ",
          tachyon.get_colored_name(),
          "의 달리기에 두 눈이 불타는 동시에",
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          "도 ",
          you.sex,
          "의 응원을 받으며,",
          you.sex,
          "에 의해 변해 간다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          "의 앞에서 지고 싶지 않아……",
          you.sex,
          "의 믿음을 저버리고 싶지 않아……게다가……",
        ]);
        era.println();
        await tachyon.say_and_wait([
          coffee.get_colored_name(),
          "에게는 지고 싶지 않네!",
        ]);
      } else {
        await tachyon.say_and_wait("————나의 패배야");
        era.println();
        await tachyon.print_and_wait("하지만 영원히는 아니다");
        await tachyon.print_and_wait("지금만, 이 순간만 인정한다");
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          "는 ",
          coffee.get_colored_name(),
          "에게 미치지 못한다",
        ]);
        await tachyon.print_and_wait("다음은 아리마 기념");
        await tachyon.print_and_wait("이번에는 도전자로서 마주 서서");
        await tachyon.print_and_wait([
          coffee.get_colored_name(),
          "의 목덜미를 물어뜯고 짓이길 것이다",
        ]);
        era.println();
        await tachyon.print_and_wait("아아……멈추지 않는 열기");
        await tachyon.print_and_wait("도무지 가라앉지 않는다");
      }
      era.println();
      await tachyon.print_and_wait("연구자로서의 자만심?");
      await tachyon.print_and_wait("예비 계획에 대한 경시?");
      await tachyon.print_and_wait("아니, 달라");
      await tachyon.print_and_wait("그저 이기고 싶다. 철저히 뛰어넘고 싶다");
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        "에게 지고 싶지 않다",
      ]);
      await tachyon.print_and_wait([coffee.get_colored_name(), "를 이기고 싶다"]);
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait("반드시……이기겠네!");
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "가 모의 레이스에서 이겼다",
        ]);
        await era.printAndWait("하지만……아주 근소한 차이였다");
        era.println();
        await tachyon.say_and_wait([
          "하아……하아……후……쿠후후후! 어떤가?",
          call_25,
          ", 결국 내가 이겼군!",
        ]);
        await coffee.say_and_wait(
          "……지금이 제 진짜 실력이라고 생각하지 마세요……이건 모의 레이스일 뿐이에요",
        );
        await tachyon.say_and_wait(
          "쿠후후후! 유쾌하군, 유쾌해. 패배한 사냥개의 분한 울음소리도 나쁘지 않네……윽!",
        );
        await coffee.say_and_wait("…………기억해 두세요");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 억지로 웃다가,",
          coffee.get_colored_name(),
          "의 시선에 입을 다물었다. 보이지 않는 손이 입과 코를 틀어막은 듯이",
        ]);
        if (
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 75
        ) {
          await coffee.say_and_wait([
            callname_25,
            "……아리마 때도……응원해 주시면 기쁠 거예요",
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          "는 돌아보지 않고 트레이닝장을 떠났고,",
          you.get_colored_name(),
          "와 ",
          tachyon.get_colored_name(),
          ", 그리고 나설 기회는 없었지만 분명 그 자리에 있던 후배 ",
          tachyon.uma_sex_title,
          "만 남았다",
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          "타키온 선배! 정말 대단했어요!",
        );
        await tachyon.say_and_wait([
          "……흐흥, 아직 시작일 뿐이네. 아리마 기념을 지켜보게나. 그때는 극한의 달리기를 보여 주지!",
        ]);
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          "타키온 선배～～～～!",
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "가 후배에게 몇 마디 답해 주자, 후배도 자리를 떠났다",
        ]);
        await era.printAndWait("그제야……");
        era.printButton(`「……이제 됐어.${tachyon.couple_title}는 갔어」`, 1);
        await era.input();
        await tachyon.say_and_wait("하아～～");
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 참았던 숨이 풀리듯 ",
          you.get_colored_name(),
          "에게 기대어 바닥에 주저앉았다",
        ]);
        await era.printAndWait([
          "평소라면 ",
          you.get_colored_name(),
          "는 걱정스러운 얼굴로,",
          tachyon.sex,
          "의 상태를 물었을 것이다",
        ]);
        await era.printAndWait("하지만 지금은……");
        era.printButton("「수고했어」", 1);
        era.printButton("「힘들었지」", 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          "만이 안다. 방금 레이스에서 ",
          tachyon.get_colored_name(),
          "는 정말로 전력을 다했다",
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          "의 달리기와 가능성에 몰려 전력을 다한 끝에, 간신히, 정말로 간신히,",
        ]);
        await era.printAndWait("오차라 해도 좋을 정도의 차이로 이겼다");
        era.println();
        await tachyon.say_and_wait([
          "그래……",
          call_25,
          "……상상 이상으로 성장했더군……",
        ]);
        await tachyon.say_and_wait([
          "나는 아직도……예전 태도 그대로 ",
          tachyon.sex,
          "를 대하고 있었어……",
        ]);
      } else {
        await tachyon.print_and_wait("아아……이 느낌이, 그러니까……");
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 모의 레이스에서 졌다",
        ]);
        await era.printAndWait("하지만 아주 근소한 차이의 패배였다");
        era.println();
        await coffee.say_and_wait("……이 정도라면 실망이에요");
        await coffee.say_and_wait([
          "이런 ",
          c_call_t,
          "로는 친구를 뛰어넘겠다는 목표에 도움이 안 돼요……",
        ]);
        if (love >= 75) {
          await coffee.say_and_wait([
            "모르겠어요……왜 ",
            callname_25,
            "가 당신에게 시간을 쓰는지",
          ]);
          era.println();
          await era.printAndWait([
            coffee.get_colored_name(),
            "가 ",
            you.get_colored_name(),
            "에게 다가가 기댔다. 친밀한 몸짓과 가차 없는 비평 사이의 간극에,",
            you.get_colored_name(),
            "는 당황했다",
          ]);
          await era.printAndWait([
            "막 달리고 온 몸에서 풍기는 옅은 풀 내음과 희미한 땀 냄새가 ",
            you.get_colored_name(),
            "의 후각을 간질인다",
          ]);
          await era.printAndWait([
            "살짝 젖은 머리카락과 숨을 고르며 붉어진 뺨이 ",
            you.get_colored_name(),
            "의 시선을 사로잡는다",
          ]);
          await era.printAndWait([
            "자기도 모르게,",
            you.get_colored_name(),
            "는 손을 억누르지 못한다",
          ]);
          era.println();
          await coffee.say_and_wait([
            callname_25,
            "……여기서요?",
            c_call_t,
            "앞에서……?",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "는 잔디에 엎드려 아직도 숨을 헐떡이는 ",
            tachyon.get_colored_name(),
            "를 보고 정신을 차렸다",
          ]);
          await coffee.say_and_wait([
            callname_25,
            ", 아까 그건……괜찮다면 나중에……",
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            "는 모호한 말을 남기고 떠났다",
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 ",
            you.get_colored_name(),
            "를 매섭게 노려보았다",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "는 시선을 돌려,",
            tachyon.sex,
            "를 똑바로 보지 못했다",
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          "가 떠난 뒤에도,",
          tachyon.get_colored_name(),
          "는 잔디에서 일어나지 않는다",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 잔디에 엎드린 ",
          tachyon.get_colored_name(),
          "를 걱정스럽게 바라보았다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '……',
          call_25,
          "는 정말……상상 이상으로 성장했더군……",
        ]);
        await tachyon.say_and_wait([
          "나는 아직도……예전 태도 그대로 ",
          tachyon.sex,
          "를 대하고 있었어……",
        ]);
      }
      await tachyon.say_and_wait("……정말……부끄럽군……");
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "가 숨을 몰아쉬며 한 말은, 오늘까지 ",
        tachyon.get_colored_name(),
        "가 하리라고는 생각하지 못했던 말이었다",
      ]);
      if (invincible) {
        await era.printAndWait([
          "패배를 모르던 ",
          tachyon.get_colored_name(),
          "가 그 순간, 패배할 가능성을 진정으로 맛보았다",
        ]);
      } else {
        await era.printAndWait(
          "예전에 졌던 레이스조차 이렇게 압박감을 주지는 않았다",
        );
      }
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait([
          "만약……만약 아까 정말 ",
          call_25,
          "에게 졌다면",
        ]);
        await tachyon.say_and_wait(
          "그 가능성을 생각하는 것만으로 온몸이 떨리네……나는 거부하고 있어. 그 가능성을 거부하고 있어",
        );
      } else {
        await tachyon.say_and_wait([
          "만약……만약 아까,",
          call_25,
          "를 이겼다면",
        ]);
        await tachyon.say_and_wait(
          "그 가능성을 생각하는 것만으로 온몸이 떨리네……나는 갈망하고 있어. 그 가능성을 갈망하고 있어",
        );
      }
      await tachyon.say_and_wait([
        call_25,
        "에게 지고 싶지 않아……",
        call_25,
        "에게 진 게 분해",
      ]);
      await tachyon.say_and_wait([
        "그런데도……가슴은 아직 타오르고 있어. 다시 ",
        call_25,
        "와 겨루고 싶어. 정면에서, 철저하게 ",
        tachyon.sex,
        "를 꺾고 싶어",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "는 고개를 들어,",
        you.get_colored_name(),
        "의 눈을 보았다",
      ]);
      await era.printAndWait([
        "미칠 듯이 매료시키던 광자 같은 예전의 눈빛과 달리, 지금 ",
        tachyon.sex,
        "의 두 눈에는 감정의 일렁임이 가득하다",
      ]);
      await era.printAndWait([
        "타오르는 횃불 같다. 하지만 그 거센 불꽃은 흔들림 없는 광자보다 눈부시게,",
        you.get_colored_name(),
        "의 시선을 더욱 강하게 사로잡는다",
      ]);
      era.println();
      await tachyon.say_and_wait("이게……라이벌이라는 느낌인가?");
      await tachyon.say_and_wait([
        "진 게 분한 것이 아니라……『",
        coffee.get_colored_name(),
        "』에게 진 것이 분하다",
      ]);
      await tachyon.say_and_wait("그렇게밖에는 설명할 수 없군. 이 뜨거움은……");
      await tachyon.say_and_wait([
        "……지금 당장 돌아가세!",
        callname,
        "! 이거야! 바로 이거라네! 부족했던 마지막 요소야!",
      ]);
      era.println();
      await era.printAndWait(["연말이 가깝다. 다음은 아리마 기념이다"]);
      return [];
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_48: (() => {
    const title = "성야의 산타";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait("한겨울 밤");
      await era.printAndWait(["내일은 아리마 기념이다"]);
      await era.printAndWait([
        "컨디션을 정비하고,",
        tachyon.get_colored_name(),
        "의 응원에 나서야 한다",
      ]);
      await era.printAndWait("그러니 일찍 자야 한다");
      await era.printAndWait("그러니까……");
      era.println();
      await era.printAndWait(
        "대체 누구야, 이 시간에 밖에서 덜그럭거리며 잠을 방해하는 건!",
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 화가 나서 창문을 열었다. 밖에는 시험관을 든 ",
        tachyon.get_colored_name(),
        "가 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "이런, 깨 버렸군. 최신 시험약을 써 볼 기회를 놓쳤어……",
      );
      era.printButton("「……그건 뭐야」", 1);
      era.printButton("「……왜 창밖에 있어」", 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          "음……맛도 냄새도 없고 유리만 녹이는 약이라네. 유리에만 작용하니, 예전처럼 바닥까지 구멍이 뚫리는 사고는 막을 수 있지. 다만 부작용은……",
        );
        await tachyon.say_and_wait(
          "녹은 뒤에는 틈새로 스며들어 청소가 거의 불가능해진다네. 부식된 부분을 전부 떼어 내지 않는 한, 다시는 유리를 끼울 수 없지",
        );
        era.println();
        await era.printAndWait("너무 무섭잖아!?");
      } else {
        await tachyon.say_and_wait(
          "후후, 깜짝 선물이라네……그보다 먼저 들여보내 주지 않겠나? 밖은 조금 춥군",
        );
        era.println();
        await era.printAndWait("그러니까 왜 창문으로 올라오냐고!!");
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 거리낌 없이 방으로 들어왔다",
      ]);
      await era.printAndWait([you.get_colored_name(), "는 경계하며 상대를 바라본다"]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 주거 침입은 처음이 아니다. 매번 아침까지 기다릴 수 없는 실험이라며 나에게 약을 먹인다",
      ]);
      await era.printAndWait([
        "평소라면 몰라도, 아리마 전날 밤이라는 중요한 때에 더는 ",
        tachyon.sex,
        "가 제멋대로 굴게 둘 수 없다",
      ]);
      era.printButton("「내일은 아리마 기념이야」", 1);
      era.printButton("「빨리 돌아가서 쉬어」", 2);
      await era.input();
      await tachyon.say_and_wait([
        "……흠, 내일은 아리마 기념이지. 그렇다면……오늘은 무슨 날인가?",
      ]);
      era.printButton("「오늘?」", 1);
      era.printButton("「……아리마 기념 전날?」", 2);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait("갑자기 방 안에 침묵이 내려앉았다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "조차 기가 막혀 할 말을 잃은 듯했다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ", 오늘 거리의 빵집들이 갑자기 부슈 드 노엘을 내놓기 시작한 건 봤나?",
      ]);
      era.printButton("「요즘 유행이야?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "…………켄○키에서 치킨 세트를 내놓기 시작했네만?",
      );
      era.printButton("「○터키에 치킨 말고 다른 세트도 있어?」", 1);
      await era.input();
      await tachyon.say_and_wait("……………학생회장의 인형옷은?");
      era.printButton(
        "「어차피 썰렁한 농담거리겠지, 안 속아. 크리스마스트리로 분장해서…………어?」",
        1,
      );
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait("방 안은 다시 침묵에 잠겼다");
      era.printButton("「설마……오늘……크리스마스야?」", 1);
      await era.input();
      await era.printAndWait("하하하");
      await era.printAndWait([
        "실내에,",
        tachyon.sex,
        "의 방울 같은 웃음소리가 울렸다",
      ]);
      await era.printAndWait(
        "이 소리가 방울 소리라면, 나도 산타클로스가 왔다고 믿을 것 같다",
      );
      era.println();
      await tachyon.say_and_wait([
        "그렇다네,",
        callname,
        "! 오늘은 크리스마스야! 그럼……원하는 크리스마스 선물이 있나? 오늘만큼은 이 산타클로스가 통 크게 이루어 주겠네!",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 어디 숨겨 뒀는지 산타 모자를 꺼내 귀 위에 비스듬히 썼다",
      ]);
      await era.printAndWait(
        "두 팔을 벌리는 평소의 자세. 하지만 입에서 나온 말은 「실험을 시작하세」가 아니라 「Merry Christmas」였다",
      );
      era.printButton('「Merry Christmas」', 1);
      era.printButton("「메리 크리스마스」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "좋아, 좋아, 얼른 말해 보게. 원하는 크리스마스 선물이 뭔가!",
      );
      era.printButton("「타키온의 키스」", 1);
      era.printButton("「아리마에서의 승리」", 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        await era.printAndWait("크리스마스 분위기에 취한 탓일까");
        await era.printAndWait([
          "무심코,",
          tachyon.get_colored_name(),
          "에게 담당과 트레이너의 관계를 명백히 넘어서는 말을 해 버렸다",
        ]);
        era.println();
        if (love >= 75) {
          await tachyon.say_and_wait("어………");
          era.println();
          await era.printAndWait("여……역시 이상했나");
          await era.printAndWait("다른 걸로 바꾸자");
          era.println();
          await tachyon.say_and_wait(
            "아니……그저 평소에도 하는 일을 크리스마스 소원으로 빌다니, 너무 소박하군",
          );
          await tachyon.say_and_wait(
            "모처럼 크리스마스 아닌가……좀 더 특별한 소원은 없나?",
          );
          await tachyon.say_and_wait("예를 들면……");
          era.println();
          await era.printAndWait(
            "천천히 걷어 올리는 교복 치마. 그 아래로 짙은 보라색 레이스가 보인다",
          );
          await era.printAndWait("의미심장한 눈빛에는 욕망과 갈망이 가득하다");
          await era.printAndWait("하지만……");
          era.printButton("「내일……아리마……」", 1);
          await era.input();
          await era.printAndWait("핵심 단어밖에 내뱉지 못하는 것은");
          await era.printAndWait("그 말들을 붙드는 것만으로도 이성이 버겁기 때문이다");
          await era.printAndWait("마음속은 절반이 두려움, 절반이 기대");
          await era.printAndWait([
            tachyon.get_colored_name(),
            "가 들어주지 않을까 봐 두렵고",
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            "가 들어주지 않을까 기대된다",
          ]);
          era.println();
          await tachyon.say_and_wait("……그만두겠네");
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), "는 손을 멈췄다"]);
          await era.printAndWait([
            you.get_colored_name(),
            "의 마음에는 안도와 아쉬움이 반씩 들었다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "생각해 보니, 내일 실험 성공을 축하하며 하는 것도 나쁘지 않겠군",
          );
          era.println();
          await era.printAndWait("내일……");
          await era.printAndWait("기대할 일이 하나 더 늘어난 모양이다");
        } else if (love >= 50) {
          await tachyon.say_and_wait("좋네");
          era.println();
          await era.printAndWait("어……?");
          await era.printAndWait([
            you.get_colored_name(),
            "가 반응하기도 전에,",
            tachyon.get_colored_name(),
            "가 먼저 몸을 기대어 왔다",
          ]);
          await era.printAndWait("잠깐, 무슨 일이 일어나는 거지");
          era.println();
          await tachyon.say_and_wait("응, 쪽……쪽……츄릅……");
          era.println();
          await era.printAndWait("몇 분이나 이어진 긴 키스");
          await era.printAndWait(
            "짧으면서도 긴 시간. 고요한 성야에 울리는 것은 타액이 섞이는 소리뿐이었다",
          );
          if (!era.get('exp:0:接吻次数')) {
            await era.printAndWait("첫 키스부터 깊은 딥 키스라니");
            await era.printAndWait(
              "이런 기적 같은 꿈은 성야에나 일어나는 것일지도 모른다",
            );
          }
          era.println();
          await tachyon.say_and_wait(
            "이 크리스마스 선물은 마음에 드나?",
          );
          era.println();
          await era.printAndWait([
            "달빛 아래의 ",
            tachyon.sex,
            ". 그 눈동자에는 요염하고 위험한 빛이 감돌고 있다",
          ]);
          era.println();
          await tachyon.say_and_wait(
            "안심하게……일의 경중 정도는 가릴 줄 아니",
          );
          era.println();
          await era.printAndWait([
            "무엇보다 내일이 아리마 기념인데, 거기까지 하는 건 상대에게도 자신에게도 크나큰 실례다",
          ]);
          era.println();
          await tachyon.say_and_wait([
            "그러니……조금만 표시해 두는 거라네. 아리마가 끝난 뒤에는……후후……그때 어떻게 답할지 잘 생각해 두게나",
          ]);
        } else if (relation > 225) {
          await tachyon.say_and_wait(
            "음? 묘한 소원이군……그게 전부인가?",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 아주 자연스럽게,",
            you.get_colored_name(),
            "의 뺨에 입을 맞췄다",
          ]);
          era.println();
          await era.printAndWait("……별로 느낌이 없는데?");
          era.println();
          await tachyon.say_and_wait(
            "정말이지, 모처럼의 크리스마스 소원을 이런 데 쓰다니……이해할 수 없군",
          );
          era.println();
          await era.printAndWait(
            "느낌은 둘째 치고, 그런 말을 들으니 손해 본 기분이다",
          );
          await era.printAndWait("그렇다면……");
          era.println();
          await tachyon.say_and_wait([
            "!……잠깐, 잠깐만,",
            callname,
            "……뭘 하는 건가",
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "는 반대로,",
            tachyon.get_colored_name(),
            "의 허리를 끌어안았다",
          ]);
          await era.printAndWait(
            "받은 만큼 돌려주는 것이다……아마도. 뭐, 상관없다",
          );
          await era.printAndWait(
            "모처럼 크리스마스다. 주도권을 잡는 것도 재미있는 경험 아닌가",
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            "는 살며시,",
            tachyon.get_colored_name(),
            "의 이마에 입을 맞췄다",
          ]);
          era.printButton("「메리 크리스마스」", 1);
          await era.input();
          await tachyon.say_and_wait(
            "…………오늘이 크리스마스라서 넘어가 주겠네……나중에 두고 보게",
          );
          era.printButton("「그렇게 말하면서 타키온도 얼굴 빨개졌는데……」", 1);
          await era.input();
          await tachyon.say_and_wait("조용히 하게!");
        } else if (relation > 0) {
          await tachyon.say_and_wait("이런? 정말 원하는 건가?");
          era.println();
          await era.printAndWait("————어?");
          era.println();
          await tachyon.say_and_wait(
            "들어 본 적 있네. 맹세의 키스라는 것이지",
          );
          era.println();
          await era.printAndWait("뭐어어———!?");
          era.println();
          await tachyon.say_and_wait("그럼 이리 오게");
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 말을 마치자마자 불쑥 ",
            you.get_colored_name(),
            "에게 다가왔다",
          ]);
          era.println();
          await tachyon.say_and_wait("축일이니, 통 크게 베푼다는 뜻에서……");
          era.println();
          await era.printAndWait([
            tachyon.sex,
            "는 살며시,",
            you.get_colored_name(),
            "에게 몸을 기댔다",
          ]);
          await era.printAndWait("다정하게———손등에 가볍게 입을 맞췄다");
          era.println();
          await tachyon.say_and_wait("됐군");
          era.println();
          await era.printAndWait("…………어?");
          era.println();
          await tachyon.say_and_wait([
            "덧붙이자면, 맹세의 내용은 앞으로도 영원히 내 ",
            callname,
            "로서 실험을 받는 것이라네?",
          ]);
          era.println();
          await era.printAndWait("잠깐!?");
          await era.printAndWait(
            "손등에 하는 사교적인 키스 한 번과 평생이라니, 전혀 안 맞잖아!?",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 ",
            you.get_colored_name(),
            "의 불평에 답하지 않고, 그저 큭큭 웃었다",
          ]);
          await era.printAndWait("진심인지 농담인지 알 수 없다");
        } else {
          await tachyon.say_and_wait(
            "이봐, 크리스마스라고 해도 그 농담은 지나치군",
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            "는 위험한 눈빛으로 ",
            you.get_colored_name(),
            "를 견제했다",
          ]);
          await era.printAndWait([
            "하지만 그 익숙하고 차가운 반응에, 오히려 ",
            you.get_colored_name(),
            "는 안심했다",
          ]);
        }
      } else {
        await era.printAndWait(["아마 내일이 아리마 기념이기 때문일 것이다"]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 머리가 달아올라, 눈치 없다고 할 만한 말을 내뱉었다",
        ]);
        era.printButton("「아리마……」", 1);
        await era.input();
        await tachyon.say_and_wait("쉿");
        era.println();
        await era.printAndWait([
          "말을 잇기도 전에,",
          tachyon.get_colored_name(),
          "의 검지가 입술을 막았다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "오늘은 기적과 환상의 밤이라네. 현실 이야기는 내일 하지 않겠나?",
        );
        era.println();
        await era.printAndWait([
          "달빛 아래의 ",
          tachyon.sex,
          "는 진짜 천사 같았다",
        ]);
        era.printButton(
          "「타키온에게도 이렇게 낭만적인 면이 있구나」",
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          "이런? 하하핫! 그러고 보니 이런 말이 있지. 『과학자야말로 세상에서 가장 위대한 낭만주의자다』",
        );
        era.println();
        await era.printAndWait(
          "그 낭만적이고 감성적인 것들을 믿지 않는다면",
        );
        await era.printAndWait(
          "지루하고 반복적인 연구에 인생을 쏟지는 않을 것이다",
        );
        await era.printAndWait([
          tachyon.uma_sex_title,
          "의 가능성을 믿는 ",
          tachyon.sex,
          "와,",
          tachyon.get_colored_name(),
          "의 가능성을 믿는 ",
          you.get_colored_name(),
        ]);
        await era.printAndWait("가장 순수한 몽상가가 두 명 있을 뿐 아닌가");
        era.println();
        await tachyon.say_and_wait(
          "그럼 다른 크리스마스 선물도 원하는 게 있나?",
        );
        era.printButton("「이제 됐어」", 1);
        await era.input();
        await era.printAndWait("이 꿈이야말로 최고의 선물이다");
        await era.printAndWait([
          tachyon.get_colored_name(),
          "는 ",
          you.get_colored_name(),
          "의 뜻을 알아챈 듯 고개를 끄덕이며, 그 생각을 인정하는 것 같았다",
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          "그럼……자네가 원하던 선물은 끝났군",
        );
        era.println();
        await era.printAndWait("음……?");
        await era.printAndWait([
          "「선물」 순서가 끝났는데도,",
          tachyon.get_colored_name(),
          "는 아직 성에 차지 않는지 말을 이었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "다음은 산타클로스가 주고 싶은 선물 차례라네",
        );
        era.println();
        await era.printAndWait([
          "그 말을 듣는 순간,",
          you.get_colored_name(),
          "는 신경을 곤두세웠다",
        ]);
        await era.printAndWait("역시……피할 수 없는 건가");
        era.println();
        await tachyon.say_and_wait([
          callname,
          ", 요 며칠 자네도 피곤했겠지",
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "를 걱정하는 말과 함께,",
          tachyon.get_colored_name(),
          "는 한 걸음씩 침대 옆의 ",
          you.get_colored_name(),
          "에게 다가왔다",
        ]);
        await era.printAndWait([
          "서서히,",
          you.get_colored_name(),
          "를 침대 구석으로 몰아넣는다",
        ]);
        await era.printAndWait("이번에는 뭐지? 발광? 변색? 변형?");
        era.println();
        await era.printAndWait(
          "두려움과 함께 침대로 기어오르는, 붉은 눈동자의 그림자가 다가온다",
        );
        await era.printAndWait([
          "마침내 거리가 거의 사라졌을 때,",
          tachyon.sex,
          "는 ",
          tachyon.sex,
          "의 진짜 목적을 드러냈다",
        ]);
        era.println();
        await tachyon.say_and_wait("————착하지, 착해");
        era.println();
        await era.printAndWait("뒤통수 아래로 비단 같은 감촉이 느껴진다");
        await era.printAndWait(["눈앞에는,", tachyon.sex, "의 고운 얼굴"]);
        if (tachyon.sex_code - 1) {
          await era.printAndWait(
            "——그렇게 말하려 했지만, 두 개의 봉긋한 곡선이 시야를 가렸다",
          );
        }
        await era.printAndWait("이건……무릎베개?");
        era.println();
        await tachyon.say_and_wait(
          "정말이지, 뭘 생각한 건가? 말했을 텐데. 오늘 밤의 나는 그저 평범한 산타클로스야. 그 이상도 이하도 아니네",
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "는 멍하니 듣고 있었다.",
          tachyon.sex,
          "의 목소리는 동요를 부르는 듯 부드럽다",
        ]);
        era.println();
        await tachyon.say_and_wait("수고했네———그리고 고마워");
        era.println();
        await era.printAndWait([
          "오늘 밤까지 담당 ",
          tachyon.uma_sex_title,
          "의 폭주에 계속 어울려 줬다",
        ]);
        await era.printAndWait(
          "내일 아침부터는 아리마 기념과 그 이후의 URA 결승이 기다린다",
        );
        await era.printAndWait("그러니 적어도 지금, 오늘 밤만큼은");
        await era.printAndWait("부디 좋은 꿈을");
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_a: (() => {
    const title = "최종 실험, 준비 완료";
    /**
     * シニア級有馬記念のレース前、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait("그날이 와도 모든 것은 놀라울 만큼 평온했다");
      await era.printAndWait([
        "전날 밤 푹 잔 덕분인지, 유난히 컨디션이 좋은 ",
        you.get_colored_name(),
        "는 아침 일찍 일어나 ",
        tachyon.get_colored_name(),
        "에게 홍차를 타 주었다",
      ]);
      await era.printAndWait("햇살이 방 안에 내려앉고, 먼지가 빛 속에서 춤춘다");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 실험을 하지 않는다. 그저 평소처럼 조간신문을 읽고 있다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "도 빛을 내는 대신 조용히 홍차를 음미하고 있다",
      ]);
      await era.printAndWait(
        "두 사람은 연구실에서 폭풍 전의 마지막 고요를 즐겼다",
      );
      era.println();
      await you.say_as_passer_by_and_wait("기자 A", [
        "타키온 ",
        tachyon.adult_sex_title,
        ", 이번 아리마 기념에서 특별히 의식하는 상대가 있나요?",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "……그래, 며칠 전에 생겼네.",
        coffee.get_colored_name(),
        '、',
        call_25,
        "……아마 라이벌이라 부를 수 있는 존재겠지",
      ]);
      await you.say_as_passer_by_and_wait("기자 A", "아마……요?");
      await tachyon.say_and_wait("그래, 대략 그런 뜻이라네");
      era.println();
      await era.printAndWait([
        "코스로 향하기 전,",
        you.get_colored_name(),
        "는 문득 지난번 취재에서 ",
        tachyon.get_colored_name(),
        "가 했던 말을 떠올렸다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ", 물리학의 두 먹구름 이야기를 들어 봤나?",
      ]);
      await tachyon.say_and_wait("못 들어 봤다고? 괜찮네. 그저 이야기를 꺼내기 위한 서두니");
      await tachyon.say_and_wait(
        "켈빈 경이 이렇게 말했다고 하지. 물리학이라는 거대한 건물은 이미 완성됐고, 하늘에 작은 구름 두 개만 남아 있다고",
      );
      await tachyon.say_and_wait(
        "하지만 누구도 예상하지 못했네. 그 작은 구름 두 개가 양자역학과 상대성이론이라는 현대 물리학의 양대 산맥을 이끌어 낼 줄은……",
      );
      await tachyon.say_and_wait([
        "물론 이 일화는 십중팔구 후대에 덧붙인 이야기겠지. 하지만……내가 하고 싶은 말은,",
        call_25,
        "야말로 그 구름이라는 거라네",
      ]);
      await tachyon.say_and_wait([
        "내 이론에서,",
        call_25,
        "는 마지막 남은 조각이야……그렇다면 그 너머에는?",
      ]);
      await tachyon.say_and_wait(
        "이 구름은 내게 상대성이론만큼의 충격을 안겨 줄까? 보여……주게나",
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_a: (() => {
    const title = "한계를 넘어서";
    /**
     * シニア級有馬記念終了、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_win_kiku_sho マンハッタンカフェが菊花賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_win_kiku_sho,
    ) => {
      await tachyon.say_and_wait("하아……하아……");
      era.println();
      await tachyon.print_and_wait("발걸음이 무겁다. 둔하다");
      await tachyon.print_and_wait("이유는……명백하다");
      await tachyon.print_and_wait("뒤의 사냥개가 강렬한 압박감을 내뿜고 있다");
      era.println();
      await tachyon.print_and_wait([
        call_25,
        "가 달릴 때, 앞뒤의 ",
        tachyon.uma_sex_title,
        "가 예외 없이 느끼는 그 압도적인 압력",
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        "의 친구와 마찬가지로, 자신의 과학으로는 설명할 수 없는 것이다",
      ]);
      era.println();
      await tachyon.say_and_wait("……오는군!");
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        "가 뒤로 바짝 다가온다",
      ]);
      await tachyon.print_and_wait([
        "목덜미의 솜털이 곤두선다.",
        tachyon.sex,
        "의 숨결이 닿을 것 같다",
      ]);
      await tachyon.print_and_wait("지금이다. 바로 여기서");
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "가 지닌 것은 차원을 초월한 속도",
      ]);
      await tachyon.print_and_wait([
        "그렇다면 ",
        coffee.get_colored_name(),
        "는 차원을 가로지르는 역설이다",
      ]);
      await tachyon.print_and_wait(
        "어디서 나타날지 알 수 없다. 거울 속 세계를 빠져나온 이형의 모습",
      );
      era.println();
      await tachyon.print_and_wait([
        "그 칠흑의 환영이 순식간에 ",
        tachyon.get_colored_name(),
        "를 넘어섰다",
      ]);
      era.drawLine();
      await coffee.say_and_wait("……미안해요");
      era.println();
      await coffee.print_and_wait(
        "자신의 꿈을 이루기 위해 타인의 꿈을 밀어 떨어뜨린다",
      );
      await coffee.print_and_wait("더구나 상대는……");
      await coffee.print_and_wait("뭐라고 해야 할까");
      await coffee.print_and_wait(
        "친구? 숙적? 타고난 상극? 연구자와 실험체?",
      );
      await coffee.print_and_wait([
        "마지막 선택지를 머리에서 털어 내고,",
        coffee.get_colored_name(),
        "는 더욱 앞으로 달린다",
      ]);
      await coffee.print_and_wait(
        "꿈으로 향하는 길에서는 아무리 깊은 감정도, 고작 이런 짧은 사과로밖에 표현할 수 없다",
      );
      era.println();
      await coffee.print_and_wait("여길 넘으면 다음 목표는 「그 모습」……!");
      era.println();
      await coffee.print_and_wait([
        "하지만,",
        coffee.sex,
        "는 한 가지 가능성을 놓쳤다",
      ]);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        "에게 아직 여력이 남아 있을 가능성",
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        "가 처음부터 전력을 다하지 않았을 가능성",
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        "가 기다린 것이 바로 이 순간일 가능성",
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        "앞에 있는 ",
        tachyon.uma_sex_title,
        "는……선두를 달리는 도주 ",
        tachyon.uma_sex_title,
        "와,",
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "에게 가장 잘 맞는 위치. 연구실에 있을 때만큼 편안한 위치",
      ]);
      await tachyon.print_and_wait("지금이다. 바로 여기서");
      era.println();
      await tachyon.print_and_wait("시간이 멈췄다. 세상이 변했다");
      era.println();
      await tachyon.print_and_wait("눈앞에는 끝없이 넓은 검은 공간");
      await tachyon.print_and_wait("수식으로 빼곡히 채워진 공간");
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        "를 뛰어넘고 싶다——변수·숙적, 추가 완료",
      ]);
      await tachyon.print_and_wait(
        "자신에게 가장 적합한 환경——변수·위치 선정, 추가 완료",
      );
      await tachyon.print_and_wait("단련과 천부적 재능의 결합——변수·속도, 추가 완료");
      await tachyon.print_and_wait("그리고……");
      era.println();
      await tachyon.print_and_wait(
        "뒤에서 희미한 온기와 홍차 향기가 느껴졌다",
      );
      await tachyon.print_and_wait([
        "하지만 ",
        tachyon.get_colored_name(),
        "는 돌아보지 않는다",
      ]);
      await tachyon.print_and_wait(
        "돌아볼 필요는 없다. 그건 상대를 믿지 못한다는 뜻이니까",
      );
      await tachyon.print_and_wait([
        "앞을 바라보고, 그리고……기다린다.",
        you.sex,
        "는 반드시 따라와 나란히 달릴 것이라 믿는다",
      ]);
      era.println();
      await tachyon.print_and_wait([
        "김이 피어오르는 홍차가 ",
        tachyon.get_colored_name(),
        "의 앞에 놓였다",
      ]);
      await tachyon.print_and_wait("평소 연구실에서처럼");
      await tachyon.print_and_wait("모든 것이 이토록 당연하게");
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        "는 당연하다는 듯 ",
        tachyon.get_colored_name(),
        "의 곁에 있다",
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "는 당연하다는 듯 눈앞의 난제를 푼다",
      ]);
      era.println();
      await tachyon.say_and_wait("마지막 해답은 이거라네……");
      era.println();
      await tachyon.print_and_wait("칠판 같은 공간에 U=MA2라는 식을 그린다");
      await tachyon.print_and_wait("찰나, 어두운 공간의 모든 수식이 빛을 뿜었다");
      await tachyon.print_and_wait([
        "이것이,",
        tachyon.get_colored_name(),
        "의 최종 해답",
      ]);
      await you.say_as_passer_by_and_wait("해설", [
        tachyon.get_colored_name(),
        "가 왔습니다!",
        tachyon.get_colored_name(),
        "가 따라붙었습니다!",
      ]);
      await you.say_as_passer_by_and_wait("해설", [
        "선두의 도주 ",
        tachyon.uma_sex_title,
        "는 이미 힘이 다했습니다! 마지막 격전은 역시 이 두 사람입니다!",
      ]);
      await you.say_as_passer_by_and_wait("해설", [
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        "! 거의 나란히 마지막 직선으로!",
      ]);
      if (coffee_win_kiku_sho) {
        await you.say_as_passer_by_and_wait("해설", [
          "『최강의 ",
          tachyon.uma_sex_title,
          "』와 『최속의 ",
          tachyon.uma_sex_title,
          "』, 여기서 결판납니다!",
        ]);
      }
      await tachyon.print_and_wait("아아");
      await tachyon.print_and_wait("레이스인데도");
      await tachyon.print_and_wait("이렇게나……기분 좋다");
      era.println();
      await tachyon.print_and_wait("스스로 인정한 라이벌을 상대로");
      await tachyon.print_and_wait("자신의 모든 힘을 쏟는다");
      await tachyon.print_and_wait("하지만……아직 부족하다");
      era.printButton("「한계를 뛰어넘어!」", 1);
      await era.input();
      await tachyon.print_and_wait("몇 차례의 인터뷰를 거치면서");
      await tachyon.print_and_wait([
        "한계를 뛰어넘으라는 말은 이미 ",
        tachyon.get_colored_name(),
        "의 팬들 사이에서 「",
        tachyon.get_colored_name(),
        "최강」, 「",
        tachyon.get_colored_name(),
        "필승」보다 자주 쓰는 응원 구호가 되었다",
      ]);
      await tachyon.print_and_wait([
        "하지만 아무리 많은 응원이 뒤섞여도,",
        you.sex,
        "의 말 옆에서는 희미하게 들린다",
      ]);
      era.println();
      await tachyon.print_and_wait("그래, 그렇지");
      await tachyon.print_and_wait("지금이야");
      era.println();
      await tachyon.print_and_wait("영역보다도 더 높은 곳에 있는 한계");
      await tachyon.print_and_wait("한계를 뛰어넘자");
      await tachyon.print_and_wait([tachyon.uma_sex_title, "의 한계를 뛰어넘는다"]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        "의 한계를 뛰어넘는다",
      ]);
      await tachyon.print_and_wait("모든 것을 넘어, 그 너머로");
      await tachyon.print_and_wait("더 먼 저편을 향해—————손을 뻗는다");
      await you.say_as_passer_by_and_wait("해설", [
        "골————인! 신기록입니다, 기록 경신! 한 해의 총결산!",
        tachyon.get_colored_name(),
        "! 기록을 깨고 오늘 나카야마를 제패한 것은 ",
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait("끝났다");
      await tachyon.print_and_wait("끝난……건가?");
      era.println();
      await tachyon.print_and_wait("끝났을 터다");
      await tachyon.print_and_wait("착순 게시판에 성적이 나와 있으니");
      await tachyon.print_and_wait(
        "그런데도 몸의 열기는 레이스가 끝났다는 듯 식지 않는다",
      );
      await tachyon.print_and_wait(
        "아드레날린이 끓어오른 채 끝없이 솟아난다",
      );
      era.println();
      await you.say_as_passer_by_and_wait("관객 A", "해냈다!");
      era.println();
      await tachyon.print_and_wait(
        "갑작스러운 외침에 움찔하며, 동시에 현실로 돌아왔다",
      );
      await you.say_as_passer_by_and_wait(
        "관객 B",
        "정말이야, 정말 기록을 깼어!",
      );
      await you.say_as_passer_by_and_wait("관객 C", "잘했어!");
      era.println();
      await tachyon.print_and_wait("경기장 전체가 환호성으로 흔들린다");
      await tachyon.print_and_wait(
        "……이긴 나보다 훨씬 흥분해 있지 않나",
      );
      era.println();
      await tachyon.print_and_wait("화답해야겠지");
      await tachyon.print_and_wait("사회적인 표현 정도는 해야겠네");
      await tachyon.print_and_wait(
        "……아니, 이건 순수하게 응원해 준 사람들에게 전하는 감사",
      );
      await tachyon.print_and_wait("보여 줘야겠네");
      await tachyon.print_and_wait("하지만……");
      era.println();
      await tachyon.print_and_wait("허둥지둥한 끝에");
      await tachyon.print_and_wait("간신히 손을 드는 것이 고작이었다");
      await tachyon.print_and_wait("아직 꿈속에 있는 것 같군");
      era.println();
      await tachyon.print_and_wait("그런데");
      await tachyon.print_and_wait("그것만으로도 해일 같은 환호성이 일었다");
      era.drawLine();
      era.printButton("「타키온……방금 그건……!」", 1);
      await era.input();
      await era.printAndWait("단정할 수 없다");
      await era.printAndWait("본 적 없는 것에 누구도 쉽게 결론을 내릴 수 없다");
      await era.printAndWait(
        "정말이라면, 이것은 누구도 닿아 본 적 없는 영역————",
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton("「……타키온?」", 1);
      await era.input();
      await era.printAndWait("아직 꿈에서 깨어나지 않은 것 같다");
      await era.printAndWait([
        "잘 설명할 수는 없지만, 눈앞의 ",
        tachyon.get_colored_name(),
        "는 몽유병 환자처럼 보인다",
      ]);
      await era.printAndWait(["이런 상황에서는,", tachyon.sex, "를 깨워야 하나?"]);
      await era.printAndWait("하지만 어떻게 해야 하지");
      await era.printAndWait(
        "나조차 눈앞의 모든 것이 꿈은 아닌지 의심하고 있다",
      );
      await era.printAndWait(
        "기나긴 삼 년이 오늘, 가장 완벽한 실험 성과로 막을 내렸다",
      );
      era.println();
      await tachyon.say_and_wait("…………후후");
      await tachyon.say_and_wait("하하하하하하핫!");
      era.println();
      await era.printAndWait("일 초 전의 웃음에는 드디어 정신이 들었구나 하고 안도했다");
      await era.printAndWait(
        "다음 순간의 광소에는 머리가 이상해진 건 아닌지 의심이 들었다",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "가 걱정하며 다가가려던 그때……",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "봤나?……분명 봤겠지!",
        callname,
        '！',
      ]);
      await tachyon.say_and_wait(
        "이것이 실험의 성과……보여 줬네! 이것이 한계 너머의 세계라네!",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "는 작년 11월에 ",
        tachyon.get_colored_name(),
        "가 했던 말을 떠올렸다",
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        "보답으로 더 넓은 세계를 보여 주겠네",
      );
      era.println();
      await era.printAndWait([tachyon.sex, "는 정말로 해냈다"]);
      await era.printAndWait("모든 레이스가 한 걸음씩 목표로 다가가는 과정이었다");
      await era.printAndWait("그리고 지금");
      await era.printAndWait("두 사람은 정말로 더 넓은, 한계 너머의 세계를 보았다");
      era.printButton("「그래……우리는 정말 해냈어」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "는 처음 알았다. 이 세상에는,",
        tachyon.get_colored_name(),
        "의 달리기보다 눈부신 것이 있다는 걸",
      ]);
      await era.printAndWait([
        "그것은 바로 지금 이 순간의 ",
        tachyon.get_colored_name(),
        "의 미소였다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_a: (() => {
    const title = "승리 축하";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
    ) => {
      await era.printAndWait("아리마 다음 날");
      await era.printAndWait([
        "목표를 이루고 긴장이 풀린 탓인지, 삼 년 만에 처음으로,",
        you.get_colored_name(),
        "는 지각했다",
      ]);
      await era.printAndWait("뭐, 두 사람의 목표는 이미 이루었다");
      await era.printAndWait("이제 편한 마음으로 URA 결승을 맞이하면 된다");
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait(
          "뭘 하는 건가? 너무 늦었네. 실험은 진작 시작했다네",
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          "가 ",
          tachyon.get_colored_name(),
          "의 연구실에 도착하자, 그곳에는 여전히 연구에 몰두하는 ",
          tachyon.get_colored_name(),
          "가 있었다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "어제는 레이스에서 한계를 넘어설 가능성을 보였을 뿐이네. 다음 목표는 그 상태를 유지하는 거야!",
        );
        await tachyon.say_and_wait(
          "한 번의 돌파는 우연, 두 번은 요행. 늘 그 상태를 유지할 수 있어야 비로소 진짜 돌파라네!",
        );
        await tachyon.say_and_wait(
          "얼른 실험복으로 갈아입고 도와주게나!",
        );
        await coffee.say_and_wait([c_call_t, "……시끄러워요"]);
        await tachyon.say_and_wait([
          "이런 이런, 어제 아리마 기념에서 나에게 진 ",
          call_25,
          "아닌가?",
        ]);
        await tachyon.say_and_wait(
          "하고 싶은 말이 있다면 들어 주겠네. 패자의 울음소리를 받아 주는 것도 승자의————",
        );
        await coffee.say_and_wait("쳇……");
        await tachyon.say_and_wait(
          "으앗! 내 실험 자료가————불타고………안 타잖아?",
        );
        era.println();
        await era.printAndWait([
          "순간,",
          tachyon.get_colored_name(),
          "의 실험 자료에 불길이 치솟았다.",
          tachyon.get_colored_name(),
          "가 황급히 구하려던 순간, 불꽃은 사라졌다",
        ]);
        era.println();
        await coffee.say_and_wait([
          "……이번만큼은 인정할게요……어제의 ",
          c_call_t,
          "는 확실히 잘 달렸어요……",
        ]);
        await coffee.say_and_wait(
          "분하지만……자꾸 당신과 『친구』를 겹쳐 보게 됐어요……",
        );
        await tachyon.say_and_wait([
          "친구? 이런? 그건……흥미롭군!",
          call_25,
          ", 꼭 자세히 들려주게나!",
        ]);
        await tachyon.say_and_wait("시끄러워요……비켜 주세요……");
        era.println();
        await era.printAndWait([
          "시끄러운 두 사람을 바라보며,",
          you.get_colored_name(),
          "는 실험복으로 갈아입고 쓴웃음을 지으며 앞으로도 이어질 일상에 끼어들었다",
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          "그런데,",
          you.get_colored_name(),
          "가 연구실 문 앞에 도착하자",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 안에서 나누는 대화를 들었다",
        ]);
        era.println();
        await tachyon.say_and_wait([
          call_25,
          "……어쩌지……",
          callname,
          "는 ",
          you.sex,
          ", 정말 이제 안 오는 게 아닐까……",
        ]);
        await coffee.say_and_wait("……제가 알 바 아니에요");
        await tachyon.say_and_wait([
          "어제 목표는 이루었다고 말했네……",
          you.sex,
          ", 그래서 오지 않는 게 아닐까……",
        ]);
        await tachyon.say_and_wait([
          "애초에 삼 년 동안의 인연이라는 건 내 망상이고,",
          you.sex,
          "는 처음부터 끝까지 아무것도……아무것도……",
        ]);
        await coffee.say_and_wait("……정말 그렇다면, 어쩌실 건가요");
        await tachyon.say_and_wait([
          "……역시 약으로 ",
          you.sex,
          "를 내게서 떨어질 수 없게 만드는 수밖에 없겠군. 생각해 보면 불공평하지 않나?",
        ]);
        await tachyon.say_and_wait([
          "나만 ",
          you.sex,
          "에게서 떨어질 수 없는데,",
          you.sex,
          "는 내가 없어도 멀쩡히 살아갈 수 있다니. 의존성이 강한 약을 빨리 만들어서,",
          you.sex,
          "를 두 번 다시 내게서 떨어질 수 없게 해야……",
        ]);
        await tachyon.say_and_wait(
          "아니면 소설에 나오는 주술로 만든 독처럼……내가 만든 해독제를 정기적으로 먹지 않으면 발병한다든가……",
        );
        await coffee.say_and_wait("……무거워요");
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            "하지만 경고할게요. 제 ",
            callname_25,
            "에게 그런 짓은 하지 마세요",
          ]);
        }
        era.println();
        await era.printAndWait([
          "그 말을 듣고 등골이 서늘해진 ",
          you.get_colored_name(),
          "는 서둘러 문을 열었다",
        ]);

        era.printButton("「미안해! 늦잠 잤어!」", 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          "!………뭘 하는 건가? 너무 늦었네. 실험은 진작 시작했다네!",
        ]);
        era.println();
        await era.printAndWait([
          "엄한 표정을 짓고 있지만,",
          tachyon.get_colored_name(),
          "의 등 뒤에서는 꼬리가 미친 듯이 흔들리며 좀처럼 멈추지 않는다",
        ]);
        await era.printAndWait([
          tachyon.sex,
          "도 눈치챘는지 몇 번이나 눌러 보지만 멈추지 않는다. 어쩔 수 없이 다시 고개를 돌리고 아무 일 없었다는 듯 잔소리를 이어 간다",
        ]);
        era.println();
        await tachyon.say_and_wait(
          "어제는 레이스에서 한계를 넘어설 가능성을 보였을 뿐이네. 다음 목표는 그 상태를 유지하는 거야!",
        );
        await tachyon.say_and_wait(
          "한 번의 돌파는 우연, 두 번은 요행. 늘 그 상태를 유지할 수 있어야 비로소 진짜 돌파라네!",
        );
        era.println();
        await tachyon.say_and_wait(
          "……그러니 얼른 실험복으로 갈아입고 도와주게나!……알겠지?",
        );
        era.println();
        await era.printAndWait([
          "엄하게 보이려 애쓰면서도 불안한 눈으로 ",
          you.get_colored_name(),
          "를 바라보는 ",
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "는 참지 못하고 다가가,",
          tachyon.sex,
          "를 끌어안았다",
        ]);
        era.println();
        await tachyon.say_and_wait(['！', callname, '……！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          "와 ",
          tachyon.sex,
          "의 실험동물은 삼 년이 지나도, 두 번째, 세 번째 삼 년을 함께 맞이할 것이다. 영원히……",
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait([
            "……너무 기세등등해하지 마세요.",
            callname_25,
            "를 돌려주세요",
          ]);
          era.println();
          await era.printAndWait([
            "두 사람에게 붙잡혀 쟁탈전을 겪으며,",
            you.get_colored_name(),
            "는 쓴웃음을 짓고 소란스러운 일상에 끼어들었다",
          ]);
        } else {
          await coffee.say_and_wait("……제 앞에서 그렇게 꽁냥거리지 마세요");
          era.println();
          await era.printAndWait(
            "방 안의 또 한 사람, 애정 공세를 버티고 있는 동거인의 존재를 잊고 있었다",
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_a: (() => {
    const title = "슈뢰딩거의 초광속 입자";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, love) => {
      await tachyon.say_and_wait("그러고 보니 아직 이게 있었군……");
      await tachyon.say_and_wait([
        "그냥 버리기도 아까우니, 어떤가,",
        callname,
        "? 함께 가지 않겠나?",
      ]);
      era.println();
      await era.printAndWait("우연히 연구실을 정리하다가");
      await era.printAndWait(["구석에 숨겨진 봉투를 발견했다"]);
      if (love >= 75) {
        await era.printAndWait("음……?");
        await era.printAndWait("어째서인지 위화감이 아주 크다");
        await era.printAndWait([
          you.get_colored_name(),
          "는 자세히 살펴보고 금세 허점을 발견했다",
        ]);
        await era.printAndWait(
          "대청소를 하다 「발견한」 물건일 텐데, 봉투에는 주름 하나 없다. 오히려 소중히 보관했던 흔적마저 있다",
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          "가 「발견한」 것이라는 점을 생각하니,",
          you.get_colored_name(),
          "는 대충 진상을 짐작했다",
        ]);
        era.println();
        await tachyon.say_and_wait(["음?", callname, "? 왜 그러나?"]);
        era.println();
        await era.printAndWait("……말하지 말자");
        await era.printAndWait([
          "화를 내게 만드는 것까지는 괜찮다. 문제는,",
          tachyon.sex,
          "가 화나면 그날 밤의 내가 절대 무사하지 못하다는 점이다",
        ]);
      }
      era.println();
      await era.printAndWait([
        "도착한 온천 숙소는 상점가 행사 경품치고는 상당히 호화로웠다",
      ]);
      await era.printAndWait(
        "전용 욕탕, 일본식 객실, 거기에 가이세키 요리까지",
      );
      await era.printAndWait(
        "그보다……평범한 상점가 추첨에 이런 특등상을 준비할 수 있나?",
      );
      await era.printAndWait([
        "설마……처음부터 누군가 꾸며 놓고, 이 기회에 ",
        tachyon.uma_sex_title,
        "와 트레이너에게 건네준 것뿐 아닐까?",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 탕에 몸을 담그고 끝없는 망상을 펼치고 있었다",
      ]);
      era.println();
      await tachyon.say_and_wait([callname, "? 들어가겠네～～"]);
      era.println();
      await era.printAndWait([
        "갑자기 담당 ",
        tachyon.uma_sex_title,
        "가 문밖에서 부르는 소리에,",
        you.get_colored_name(),
        "는 정신을 차렸다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 반사적으로 들어오라고 대답한 뒤에야, 지금 자신이 목욕 중이라는 걸 떠올렸다",
      ]);
      await era.printAndWait("이제 와 숨기기에는 이미 늦었다—————");
      await era.printAndWait([
        you.get_colored_name(),
        "는 황급히 몸을 물속에 가라앉혀, 수증기로 보여서는 안 될 곳을 조금이라도 가리려 했다",
      ]);
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.say_and_wait([
          callname,
          "—————왜 그렇게 부끄러워하며 움츠리는 건가? 이미 몇 번이나 봤는데",
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          "—————왜 그렇게 부끄러워하며 움츠리는 건가? 실험할 때 다 봤는데",
        ]);
      }
      era.println();
      await era.printAndWait([
        "그렇게 말하면서도,",
        tachyon.get_colored_name(),
        "의 목소리에도 조금은 조심스러운 기색이 있다",
      ]);
      await era.printAndWait([
        "알몸인 ",
        you.get_colored_name(),
        "와 달리,",
        tachyon.get_colored_name(),
        "는 커다란 수건 한 장을 두르고 있다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "는 제멋대로 탕에 들어와,",
        you.get_colored_name(),
        "쪽으로 다가왔다",
      ]);
      await era.printAndWait([
        "그리고 ",
        you.get_colored_name(),
        "의 옆에 앉아 편안한 표정으로 기대었다",
      ]);
      era.println();
      await tachyon.say_and_wait("드디어……URA도 끝났군");
      await tachyon.say_and_wait("가끔은 이렇게 느긋하게 쉬는 것도 나쁘지 않네");
      era.println();
      await era.printAndWait([tachyon.sex, "는 만족스러운 숨을 내쉬었다"]);
      await era.printAndWait(
        "큰일을 끝낸 직장인이 회식 자리에서 맥주를 단숨에 들이켜고 내쉬는 그 한숨과도 같다",
      );
      await era.printAndWait(
        "해방감일까, 성취감일까. 아니면……스스로도 이유를 모르는 희미한 상실감일까",
      );
      await era.printAndWait([
        "지난 삼 년을 돌아보면,",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "는 확실히 많은 것을 이루었다",
      ]);
      await era.printAndWait([
        "3관을 향한 길, 감정이라는 연구 과제,",
        coffee.get_colored_name(),
        "와의 격전……",
      ]);
      await era.printAndWait(
        "그 외에도 이야기할 만한 일과 굳이 말할 필요 없는 일들까지",
      );
      await era.printAndWait([
        "삼 년의 무게에,",
        you.get_colored_name(),
        "도 무심코,",
        tachyon.get_colored_name(),
        "와 똑같이 숨을 내쉬었다",
      ]);
      era.println();
      await era.printAndWait([
        "그 뒤로 한동안 두 사람은 아무 말도 하지 않고 그저 기대어 있었다",
      ]);
      await era.printAndWait([
        "그제야 ",
        you.get_colored_name(),
        "는 깨달았다. 곁에 있는 ",
        tachyon.sex,
        "의 몸이 이렇게나 작다는 것을",
      ]);
      await era.printAndWait([
        "지금은 천재 ",
        tachyon.uma_sex_title,
        "도, 미친 과학자도 아니다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "는 그저 평범한 ",
        tachyon.teen_sex_title,
        "일 뿐이다",
      ]);
      era.println();
      await era.printAndWait("수증기가 피어오르는 온천에서 잠깐의 고요를 즐기는 두 사람");
      await era.printAndWait([
        "말썽꾸러기 ",
        tachyon.get_colored_name(),
        "와 그 장단에 맞춰 주는 담당 트레이너를 아는 사람이라면 믿기 어려운 광경일 것이다",
      ]);
      await era.printAndWait("하지만 지금 두 사람은 바로 그 고요에 잠겨 있다");
      era.drawLine();
      await tachyon.say_and_wait([
        callname,
        ", 슈뢰딩거의 고양이를 알고 있나?",
      ]);
      era.println();
      await era.printAndWait([
        "갑자기,",
        tachyon.get_colored_name(),
        "가 침묵을 깼다",
      ]);
      await era.printAndWait("슈뢰딩거의 고양이……?");
      era.printButton("「몰라」", 1);
      era.printButton("「알아」", 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          "슈뢰딩거의 고양이는 원래 슈뢰딩거가 양자역학에 반박하려고 제시한 사고 실험이라네",
        );
        await tachyon.say_and_wait(
          "아이러니하게도 지금은 양자역학을 설명하는 대표적인 상징이 됐지",
        );
        await tachyon.say_and_wait(
          "간단히 말하면 방사성 물질과 방사선에 반응하는 독가스 스위치, 그리고 고양이를 외부와 완전히 차단된 상자에 넣는 거야",
        );
        await tachyon.say_and_wait(
          "방사성 물질이 언제 붕괴해서 방사선을 내놓을지는 아무도 모르네",
        );
        await tachyon.say_and_wait(
          "즉, 스위치가 작동할지도 모른다는 거지. 상자를 열기 전까지 고양이는 죽음과 삶이 중첩된 상태에 있네",
        );
      } else {
        await tachyon.say_and_wait(
          "이 실험에 대해서는 지금도 학파마다 해석이 다르지. 하지만 뿌리는 같아……이 실험에서 가장 중요한 게 무엇인지 알겠나?",
        );
      }
      era.printButton("「……고양이?」", 1);
      era.printButton("「……독가스?」", 2);
      await era.input();
      await tachyon.say_and_wait(
        "하하, 확실히 그것들이 없으면 실험이 성립하지 않겠지……하지만 둘 다 틀렸네",
      );
      era.println();
      await era.printAndWait([
        "갑자기,",
        tachyon.get_colored_name(),
        "가 물에서 일어나,",
        you.get_colored_name(),
        "를 향해 눈을 마주했다",
      ]);
      await era.printAndWait(
        "와인빛 눈동자는 오랫동안 숙성된 꿀의 샘처럼 사람을 취하게 만든다",
      );
      await era.printAndWait([
        "문득 ",
        you.get_colored_name(),
        "는 생각했다. 이런 ",
        tachyon.sex,
        "도 한때는 내 눈을 미친 눈이라고 평했지",
      ]);
      await era.printAndWait([
        "그렇다면 지금,",
        tachyon.sex,
        "의 눈동자에 비친 것은 무엇일까",
      ]);
      era.println();
      await tachyon.say_and_wait("답은—————『관측자』라네");
      await tachyon.say_and_wait(
        "고양이가 죽었든 살았든, 그것은 그저 『가능성』일 뿐이지. 한없이 가까워져도 확정되지 않은 가능성이야",
      );
      await tachyon.say_and_wait(
        "관측이 더해져야 비로소 가능성이 확정되고, 삶이든 죽음이든 결과가 되는 거라네",
      );
      era.println();
      await era.printAndWait("그러니까");
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 손을 뻗었다.",
        you.get_colored_name(),
        "의 눈에 닿으려다가도, 다치게 할까 봐 떨고 있다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 스스로 ",
        tachyon.sex,
        "의 손을 잡아, 천천히 그러나 확실하게 자신의 두 눈으로 이끌었다",
      ]);
      era.println();
      await tachyon.say_and_wait("자네가 바로 나의 관측자라네");
      await tachyon.say_and_wait([
        tachyon.get_colored_name(),
        "의 가능성을 확정한 사람",
      ]);
      await tachyon.say_and_wait([
        "지금 이 순간의 ",
        tachyon.get_colored_name(),
        "를 결정한 사람",
      ]);
      await tachyon.say_and_wait(
        "이 실험에서는 자네가 연구자야. 나는 자네가 상자에 넣은 고양이일 뿐이라네",
      );
      era.println();
      await era.printAndWait("살짝, 닿았다");
      await era.printAndWait("특별한 감촉은 없다. 눈에 손이 닿은 따끔함뿐이다");
      await era.printAndWait([
        "하지만 ",
        tachyon.get_colored_name(),
        "는 그것으로 충분하다는 듯 스스로 손을 거뒀다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "앞으로의 실험도……잘 부탁하겠네",
      );
      await tachyon.say_and_wait("나의 친애하는 교수 군");
      await tachyon.say_and_wait(
        "탕에서 나오면 준비해 둔 선물도 잊지 말게나",
      );
      era.println();
      await era.printAndWait([
        "그렇게 말하고,",
        tachyon.get_colored_name(),
        "는 먼저 탕 밖으로 나갔다",
      ]);
      era.println();
      await tachyon.say_and_wait(
        "그러고 보니 오늘의 약은 차가운 우유에 넣어 뒀네. 잊지 말고 마시게나",
      );
      era.println();
      await era.printAndWait(
        "…………적어도 차가운 우유는 준비해 준다. 이것도 성장이라고 해야 하나?",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "는 의존성이 길들여진 사람 같은 생각을 하며, 조금 더 탕에 몸을 담그기로 했다",
      ]);
    };
    f.title = title;
    return f;
  })(),
  palace_a: (() => {
    const title = "한계의 저편";
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        "와 함께한 삼 년이 끝났다",
      ]);
      era.println();
      await era.printAndWait([
        "졸업식 뒤,",
        you.get_colored_name(),
        "는 ",
        tachyon.sex,
        "의 앞으로의 계획을 물은 적이 있었다",
      ]);
      await tachyon.say_and_wait(
        "학생으로서 가장 중요한 본분은 배우는 것 아닌가?",
      );
      await era.printAndWait([
        tachyon.sex,
        "는 웃으며,",
        tachyon.sex,
        "답지 않은 한마디만 돌려줬다",
      ]);
      era.println();
      await era.printAndWait("하지만 이번에는 진심인 듯하다");
      await era.printAndWait([
        you.get_colored_name(),
        "는 그해 대학 입시 응시자 명단에서 ",
        tachyon.sex,
        "의 이름을 보았다",
      ]);
      await era.printAndWait([
        "믿기 어렵지만,",
        tachyon.sex,
        "는 진학을 선택한 모양이다",
      ]);
      era.println();
      await era.printAndWait("오늘은 각 대학의 입학식 날이다");
      await era.printAndWait([
        you.get_colored_name(),
        "는 몇 달 전, 합격 발표일을 떠올렸다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "의 합격 소식을 들은 ",
        you.get_colored_name(),
        "의 마음은 말로 표현하기 어려웠다",
      ]);
      await era.printAndWait([
        "가능성으로 가득 찬 ",
        tachyon.sex,
        "도 결국 평범한 사람의 길을 걷는 걸까",
      ]);
      await era.printAndWait(
        "보통 사람처럼 진학하고, 보통 사람처럼 졸업하고, 보통 사람처럼 취직한다",
      );
      await era.printAndWait([
        "그리고 언젠가는,",
        tachyon.sex,
        "도……나와 같은 지루한 어른이 되는 걸까",
      ]);
      await era.printAndWait([
        "둘만의 축하 자리에서,",
        you.get_colored_name(),
        "가 ",
        tachyon.sex,
        "에게 무슨 말을 했고,",
        tachyon.sex,
        "가 ",
        you.get_colored_name(),
        "에게 무슨 말을 했는지는 이제 까맣게 잊었다",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "와 헤어진 나도 원래의 생활로 돌아가, 다음 담당 ",
        tachyon.uma_sex_title,
        "를 만나,",
        tachyon.sex,
        "의 꿈을 뒷받침하겠지",
      ]);
      await era.printAndWait([
        "하지만 ",
        tachyon.sex,
        "처럼,",
        you.get_colored_name(),
        "의 눈을 불태울 빛 같은 ",
        tachyon.uma_sex_title,
        "……다시는 만나지 못할 것이다",
      ]);
      await era.printAndWait([
        "정신을 차려 보니,",
        you.get_colored_name(),
        "는 무의식중에 예전의 과학 준비실이자, 이후 연구실이 됐고, 이제는 당연히 다시 과학 준비실로 돌아갈 빈 교실 앞에 서 있었다",
      ]);
      era.println();
      await you.say_and_wait("온 김에 정리나 하자");
      await era.printAndWait([
        you.get_colored_name(),
        "가 문을 열자, 평소처럼 실험하는 ",
        tachyon.get_colored_name(),
        "와 자기 구석에서 커피를 마시는 ",
        coffee.get_colored_name(),
        "가 있었다……그런 망상 같은 일은 당연히 일어나지 않았다",
      ]);
      await era.printAndWait([
        "졸업식 뒤로 아무도 들어오지 않은 교실은 마지막으로 썼을 때 그대로 남아 있었다",
      ]);
      await era.printAndWait([
        "실험대의 빈 시험관, 안의 액체가 말라 버린 플라스크, 책상의 홍차 얼룩. 세월의 흔적이,",
        you.get_colored_name(),
        "의 삼 년 동안의 기억을 되살렸다",
      ]);
      era.println();
      await tachyon.say_and_wait(["……아아,", callname]);
      era.println();
      await era.printAndWait([
        "뒤에서 익숙한 부름이 들려,",
        you.get_colored_name(),
        "는 돌아보았다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "가 아침저녁으로 그리워하던 ",
        tachyon.sex,
        "였다",
      ]);
      era.println();
      await tachyon.say_and_wait("왔으면 짐 옮기는 걸 도와주게나");
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "를 보는 순간 평소처럼 웃었다. 너무나 밝아서,",
        you.get_colored_name(),
        "는 아무것도 변하지 않았다는 착각마저 들었다",
      ]);
      await era.printAndWait(
        "그렇다. 졸업했으니 이곳의 실험 기구도 당연히 옮겨야 한다",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "는 아무 말 없이 묵묵히 ",
        tachyon.get_colored_name(),
        "의 뒤를 따랐다",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 생각했다.",
        tachyon.sex,
        "는 자기 집이나 지금 다니는 학교로 옮기겠지. 아니면……폐기할까",
      ]);
      await era.printAndWait([
        "그런데 ",
        tachyon.sex,
        "는 모든 기구를 옆 과학 준비실로 옮겼다",
      ]);
      era.println();
      await tachyon.say_and_wait("좋아, 이걸로 끝이군……");
      era.println();
      await era.printAndWait([
        "마지막으로, ",
        tachyon.sex,
        "는 아마 다시는 돌아오지 않을 교실 앞에서 쓸쓸한 미소를 지었다",
      ]);
      await era.printAndWait([
        "그리고 돌아서,",
        you.get_colored_name(),
        "를 보았다",
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ", 오늘의 실험을 시작하세!"]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "의 눈에는 지금도 미친 듯한 빛이 깃들어 있다",
      ]);
      await era.printAndWait([
        "삼 년 동안 매일,",
        tachyon.sex,
        "가 만날 때마다 나누던 인사 그대로다",
      ]);
      await era.printAndWait([
        "어느새,",
        you.get_colored_name(),
        "도 웃고 있었다. 웃으면 웃을수록 즐거워져 목소리가 커지고, 눈물까지 났다",
      ]);
      await era.printAndWait(
        "지난 삼 년 동안 정말로 변하지 않은 것도 있는 모양이다",
      );
      await era.printAndWait([
        "예를 들어 ",
        you.get_colored_name(),
        "와 ",
        tachyon.get_colored_name(),
        "의 관계. 예를 들어 ",
        tachyon.sex,
        "의 지식욕. 예를 들어 ",
        you.get_colored_name(),
        "가 ",
        tachyon.sex,
        "에게 품은, 그리고 ",
        tachyon.sex,
        "가 ",
        you.get_colored_name(),
        "에게 품은 감정",
      ]);
      await era.printAndWait([
        "바람이 사르륵 복도를 지나며,",
        you.get_colored_name(),
        "의 말에 화답하는 듯하다",
      ]);
      await era.printAndWait("창밖에는 낙엽이 춤추고, 가을이 찾아왔다");
      era.drawLine({ content: "사흘 뒤" });
      era.printButton(
        "「……잠깐!? 그날 작별 인사하러 온 거 아니었어!?」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '…………',
        callname,
        "? 사흘이나 지나서 깨닫다니, 조금 늦지 않나",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 연구실……옆의 새 연구실",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "는 「마지막으로 한 번,",
        tachyon.sex,
        "의 폭주에 어울려 주자」고 생각하며,",
        tachyon.sex,
        "의 「마지막 한 번」 실험에 참여했다",
      ]);
      await era.printAndWait("그런데 그 마지막 한 번이 사흘이나 이어졌다");

      era.printButton("「대학 가는 거 아니었어!?」", 1);
      await era.input();
      await tachyon.say_and_wait("그래, 트레센의 대학부라네");
      era.println();
      await you.say_and_wait(
        "트레센에 대학부가 있어!? 처음 듣는데!?",
      );
      era.println();
      await tachyon.say_and_wait(
        "본편에서는 언급되지 않지만, 공식 설정에는 트레센 학원에 대학부가 있다네",
      );
      era.printButton("「공식 설정은 또 뭔데!?」", 1);
      era.printButton(
        "「정말 있다고 쳐도, 수업 안 가도 돼!?」",
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……',
        callname,
        ", 자네 대학에 가 본 적 있나? 대학에서 성실하게 수업에 나가는 사람은 없다네",
      ]);
      era.println();
      await era.printAndWait(
        "반박하고 싶지만, 눈앞의 상대는 고등학교 수업조차 나갔다 안 나갔다 하며 거의 다 빼먹던 인물이다. 문득 반박할 기운이 사라졌다",
      );
      era.printButton("「그럼 갑자기 교실은 왜 바꾼 건데!?」", 1);
      await era.input();
      await tachyon.say_and_wait(
        "아니……이건 말하기 조금 그렇지만, 그 교실은 지난 몇 년간 사용하면서……",
      );
      await tachyon.say_and_wait("안전상 문제가 조금……");
      await tachyon.say_and_wait(
        "점검과 수리가 필요해졌네……일주일쯤 지나면 돌아갈 수 있겠지",
      );
      era.printButton(
        "「일주일이면 그렇게 감상에 젖을 필요 없잖아!?」",
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        "아아,",
        callname,
        "는 너무하는군. 그 교실은 삼 년 동안 우리의 학……사용을 견뎌 줬다네. 감사 인사쯤 한다고 벌받지는 않지 않나?",
      ]);
      era.println();
      await era.printAndWait("할 말이 없다");
      await era.printAndWait([
        "이제 보니 모든 것이 ",
        tachyon.sex,
        "의 말대로였던 모양이다",
      ]);
      await era.printAndWait("결국 혼자 감상에 잠겨 있던 건 나뿐인가");
      era.println();
      await tachyon.say_and_wait(
        "합격 발표일에 진학할 곳도 말했고, 앞으로의 실험도 부탁한다고 했는데……",
      );
      await tachyon.say_and_wait(
        "전부 잊었군……역시 그날 음료에 넣은 약이 너무 강했나",
      );
      era.println();
      await era.printAndWait(
        "그날을 기억 못 하는 건 연출이 아니라, 정말 기억이 날아간 거였어!?",
      );
      era.println();
      await tachyon.say_and_wait([
        "좋아, 좋아, 잡담은 거기까지.",
        callname,
        ", 얼른 가세. 오늘의 약은 잘만 되면……",
      ]);
      await tachyon.say_and_wait([
        '…',
        tachyon.uma_sex_title,
        "의 세계를 통째로 뒤집을지도 모르겠네",
      ]);
      era.println();
      await era.printAndWait("뒤집는다고……세계를……?");
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        "의 발명품이 세상을 멸망시킬 가능성을 백스물네 가지쯤 떠올린 뒤,",
        you.get_colored_name(),
        "는 ",
        tachyon.sex,
        "를 따라 운동장으로 나갔다",
      ]);
      await era.printAndWait([
        tachyon.sex,
        "는 늘 보던 것 같으면서도 본 적 없는 약 한 병을 꺼냈다",
      ]);
      await era.printAndWait("늘 보던 것 같다는 건, 평소처럼 빛을 내는 약이라는 뜻이다");
      await era.printAndWait(
        "본 적 없다는 건, 그 빛이 평소의 어느 색과도 다르다는 뜻이다",
      );
      await era.printAndWait(
        "굳이 말하자면……파랑과 하양이 섞인 빛. 하지만 단순히 청색과 백색의 혼합도 아니다",
      );
      await era.printAndWait(
        "어쩌면 이 약은 정말 세상을 뒤집을 수 있을지도 모른다",
      );
      await era.printAndWait([
        "어째서인지,",
        you.get_colored_name(),
        "는 그렇게 생각했다",
      ]);
      await era.printAndWait([
        "하지만 그 변화가 좋은 것일지 나쁜 것일지는,",
        you.get_colored_name(),
        "도 아직 판단할 수 없다",
      ]);
      era.println();
      await tachyon.say_and_wait("그럼 마시겠네");
      era.println();
      await era.printAndWait([
        "무슨 말을 할 틈도 없이,",
        tachyon.get_colored_name(),
        "는 재빨리 약병을 열어 단숨에 마셨다",
      ]);
      era.println();
      await tachyon.say_and_wait("그리고……");
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "는 갑자기 달리기 시작했다. 너무 갑작스러워,",
        you.get_colored_name(),
        "는 아무것도 하지 못했다",
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        "는 평소의 운동량을 다 채우고도 얼굴 하나 붉히지 않고 숨도 흐트러지지 않은 채,",
        you.get_colored_name(),
        "의 곁으로 돌아왔다",
      ]);
      await era.printAndWait([
        "이 정도 단련은 지금의 ",
        tachyon.sex,
        "에게는 아무것도 아니다",
      ]);
      await era.printAndWait([
        "그보다 처음 측정한 수치대로라면, 지금의 ",
        tachyon.sex,
        "는 진작에 ",
        tachyon.uma_sex_title,
        "의 한계에 도달했을 터인데……",
      ]);
      era.println();
      await era.printAndWait([
        "거기까지 생각한 순간,",
        you.get_colored_name(),
        "는 한 가지 생각에 이르렀다",
      ]);
      await era.printAndWait([
        "미친 생각이다. 하지만 그렇다면……",
        tachyon.sex,
        "의 행동도, 이 모든 것도 설명이 된다",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "는 떨리는 손으로 주머니를 뒤져, 예전에 ",
        tachyon.sex,
        "가 ",
        you.get_colored_name(),
        "에게 줬던 안경을 찾았다",
      ]);
      era.println();
      await tachyon.say_and_wait([
        "어떤가,",
        callname,
        "? 지금의 나는 『얼마』로 보이나?",
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "의 눈에 비친 ",
        tachyon.sex,
        ". 머리 위의 숫자와 기호는 한계를 나타내는 「SS+ 1200」이 아니라……",
      ]);
      await era.printAndWait('「UG 1205」', {
        color: adaptability_colors.at(-1),
      });
      era.drawLine();
      await tachyon.print_and_wait([
        you.get_colored_actual_name(),
        "의 표정을 보고,",
        tachyon.get_colored_name(),
        "는 웃었다",
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        "는 기구 없이도 자신의 변화를 안다.",
        tachyon.sex,
        "보다 자신의 몸을 잘 아는 이가 있을까",
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        "가 원했던 것은 눈앞의 ",
        you.get_colored_actual_name(),
        "가 짓는 바로 이 표정이다",
      ]);
      era.println();
      await tachyon.print_and_wait("함께 걸어온 삼 년");
      await tachyon.print_and_wait("꿈을 위해 쏟아부은 시간");
      await tachyon.print_and_wait(
        "두 사람의 노력. 땀과 눈물을 모두 쏟아내고서야 마침내 허문",
      );
      era.println();
      await tachyon.print_and_wait("한계라는 이름의 장벽");
      era.println();
      await tachyon.print_and_wait("놀랐나? 기쁜가? 충격적인가?");
      await tachyon.print_and_wait([
        "점점,",
        tachyon.get_colored_name(),
        "는 자신의 표정을 억누를 수 없게 되었다",
      ]);
      await tachyon.print_and_wait(
        "아아, 이 대사는 좀 더 담담하게 하고 싶었는데",
      );
      await tachyon.print_and_wait("그런데도 입꼬리는 참지 못하고 올라간다");
      await tachyon.print_and_wait("그런데도 눈가에서는 주체할 수 없이 눈물이 흐른다");
      await tachyon.print_and_wait("이게 기쁨의 눈물이라는 건가?");
      await tachyon.print_and_wait("안 되겠군, 참을 수 없어");
      era.println();
      await tachyon.say_and_wait([
        "자,",
        callname,
        ", 함께 탐구하세. 한계 너머의 세계를!",
      ]);
      era.println();
      await tachyon.print_and_wait(
        "안 되겠군. 지금 내 얼굴은 분명 바보 같겠지",
      );
      await tachyon.print_and_wait(
        "정말이지, 이런 얼굴로 교섭하면 누가 믿어 주겠나",
      );
      await tachyon.print_and_wait(
        "이렇게 바보 같은 얼굴을 한 사람을 믿는 자가 있다면……",
      );
      era.println();
      await tachyon.print_and_wait("후후, 틀림없이 광인이거나 미치광이일 테지");
      await tachyon.print_and_wait([
        "예를 들어 눈앞에서 똑같이 바보 같은 얼굴을 하고, 눈에는 여전히 사람을 미치게 만드는 빛을 품은 ",
        you.get_colored_actual_name(),
        "처럼",
      ]);
      era.println();
      await era.printAndWait(
        "미친 과학자와 광신적인 모르모트는, 두 사람에게 가장 어울리는 결말을 맞이했다",
      );
    };
    f.title = title;
    return f;
  })(),
};
