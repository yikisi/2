/**
 * @file マチカネフクキタル - 育成
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, motivation_colors } = require('#/data/color-const');

const { typing } = require('#/i18n/zh-CN/snippets');

module.exports = {
  async train_success(kitaru, lucky_train) {
    era.print([
      kitaru.get_colored_name(),
      "의 훈련이 무사히 끝났다!",
    ]);
    era.println();
    if (lucky_train) {
      await kitaru.say_and_wait("운세에 맞는 선택이었네요! 복이 왔어요!");
    }
  },
  train_fail: (() => {
    const title = "몸을 소중히";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (kitaru, you, callname, fail_again) => {
      await era.printAndWait([
        "또다시 훈련 중에 다친 ",
        kitaru.get_colored_name(),
        "을(를) 보건실로 데려왔다.",
      ]);
      await kitaru.say_and_wait("앗! 전혀 예상하지 못했어요!");
      await kitaru.say_and_wait("운세 뽑기에는 오늘 대길이라고 적혀 있었는데요!");
      era.printButton("「푹 쉬어!」(실패를 받아들이고 결과를 감수한다)", 1);
      era.printButton(
        "「점에만 의지하지 마!」(만회를 시도한다. 결과가 더 나빠질 수도 있다)",
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait("읏!");
        await era.printAndWait([
          "흰 이불 속으로 쏙 들어간 ",
          kitaru.get_colored_name(),
          "은(는) 그대로 푹 잠들어 버렸다.",
        ]);
      } else {
        await kitaru.say_and_wait(["앗! ", callname, "말씀이 맞아요!"]);
        if (fail_again) {
          await era.printAndWait([
            "다음 날 상태를 보러 보건실에 가자,",
            you.get_colored_name(),
            "은(는) ",
            kitaru.sex,
            "이(가) 또 새로운 점술 이야기를 꺼내는 것을 들었다.",
          ]);
          await era.printAndWait([
            "아무래도 ",
            kitaru.get_colored_name(),
            "은(는) 별로 교훈을 얻지 못한 모양이다.",
          ]);
        } else {
          era.drawLine({ content: "다음 날" });
          await kitaru.say_and_wait([
            "오오! ",
            callname,
            ", 원인을 알았어요!",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 조금 의외라는 표정으로,",
            kitaru.get_colored_name(),
            "이(가) ",
            you.get_colored_name(),
            "에게 그날 훈련에서 ",
            kitaru.sex,
            "이(가) 무엇을 잘못했는지 되짚기 시작하는 것을 지켜봤다.",
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = "무리는 절대 금물!";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (kitaru, you, callname, fail_again) => {
      await era.printAndWait([
        "훈련 중에 다친 ",
        kitaru.get_colored_name(),
        "을(를) 보건실로 데려왔다.",
      ]);
      await kitaru.say_and_wait(
        "읏……오늘 운세는 생각만큼 순조롭지 않았네요!",
      );
      await kitaru.say_and_wait("혹시 대흉의 전조 아닐까요?");
      await era.printAndWait([
        "보건실 침대에 앉은 ",
        kitaru.get_colored_name(),
        "은(는) 부어오른 부위를 문지르며 큰 적이라도 마주한 듯한 표정을 짓고 있다.",
      ]);
      era.printButton("「너무 깊이 생각하지 마!」(실패를 받아들이고 결과를 감수한다)", 1);
      era.printButton(
        "「쉬는 동안 개운 의식이라도 할까?」(만회를 시도한다. 결과가 더 나빠질 수도 있다)",
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          "그렇게 말하며 후쿠키타루의 부스스한 머리를 쓰다듬는다.",
          you.get_colored_name(),
          "의 조금 거친 손길에,",
          kitaru.teen_sex_title,
          "은(는) 더는 망상을 이어 가지 않았다.",
        ]);
        await kitaru.say_and_wait([
          "어! 그렇죠, 네,",
          callname,
          '！',
        ]);
        await kitaru.say_and_wait("이제 푹 쉴게요!");
        await era.printAndWait([
          "새하얀 침대에 혼자 남은 ",
          kitaru.get_colored_name(),
          "은(는) 아쉬운 듯 ",
          you.get_colored_name(),
          "이(가) 보건실을 나서는 모습을 바라봤다.",
        ]);
      } else {
        await era.printAndWait([
          "그 제안을 듣자 침대에 축 늘어져 있던 ",
          kitaru.get_colored_name(),
          "의 눈이 다시 빛을 되찾았다.",
        ]);
        await era.printAndWait([
          "그 뒤,",
          kitaru.get_colored_name(),
          "의 지시에 따라 의식 장소를 준비하기 시작했다. 정신을 차리고 보니 보건실은 무언가를 모시는 제단처럼 변해 있었다.",
        ]);
        if (fail_again) {
          await era.printAndWait(
            "의식을 준비하다 상처가 악화된 모양이다.",
          );
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            kitaru.get_colored_name(),
            "와(과) 나란히 교의에게 혼났다.",
          ]);
        } else {
          await era.printAndWait("놀랍게도 정말 효과가 있었다!");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 보건실에 새로 온 환자에게 의기양양하게 시라오키님을 전도하는 ",
            kitaru.get_colored_name(),
            "의 목소리를 들었다.",
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  first_train_fail: (() => {
    const title = "촉진";
    /**
     * 男トレーナー＋ウマ娘＋熱恋以上、初回のトレーニング失敗で必ず発生するイベント
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        "훈련에 실패한 ",
        kitaru.get_colored_name(),
        "을(를) 공주님 안기로 안아 보건실로 옮겼다. 다행히 ",
        kitaru.sex,
        "은(는) 다치지 않았지만 혹시 모르니 검사는 필요하다.",
      ]);
      await era.printAndWait([
        "오는 도중,",
        you.get_colored_name(),
        "의 손이 견갑골과 무릎 뒤에 닿아 있다는 것을 깨달은 ",
        kitaru.get_colored_name(),
        "의 얼굴이 살짝 붉어졌다.",
      ]);
      await era.printAndWait([
        "보건실의 흰 침대 가장자리에 앉아,",
        you.get_colored_name(),
        "에게 폐를 끼쳤다고 생각하는 ",
        kitaru.teen_sex_title,
        "은(는) 안절부절못하며 바닥을 바라보고, 견디기 힘든 침묵 속에서 교의를 기다렸다.",
      ]);
      await kitaru.say_and_wait(["저기,", callname, '……']);
      await era.printAndWait([
        "교의는 아마 손이 많이 가는 환자를 돌보느라 바쁠 것이다. 트레센에는 매일 훈련에 실패하는 ",
        kitaru.uma_sex_title,
        "들이 셀 수 없이 많다. 그러니 다리의 예비 검사, 즉 촉진은 ",
        you.get_colored_name(),
        "이(가) 할 수밖에 없었다.",
      ]);
      era.printButton("「벗어.」", 1);
      await era.input();
      await kitaru.say_and_wait(["네?! ", callname, ", 설마!"]);
      await era.printAndWait([
        "요란한 반응을 참고,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "의 발에 신겨진 운동화를 가리켰다.",
      ]);
      era.printButton("신발을 벗긴다", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 허리를 굽혀 신발 끈을 풀고,",
        kitaru.sex,
        "의 운동화를 천천히 벗겼다. 흰 니삭스에 감싸여 살빛이 은근하게 비치는 발이,",
        you.get_colored_name(),
        "앞에서 발끝을 쭉 뻗는다.",
      ]);
      era.printButton("「양말도 벗어.」", 1);
      await era.input();
      await kitaru.say_and_wait(["저기! ", callname, '……']);
      await kitaru.say_and_wait("이 정도는 제가 할게요!");
      await era.printAndWait([
        "뺨을 붉힌 ",
        kitaru.get_colored_name(),
        "은(는) 침대 가장자리에 앉아 먼저 왼쪽 다리를 구부려 침대에 올렸다. 가리려 했지만 주름치마 아래가 보이고 만다.",
      ]);
      await era.printAndWait([
        "옷자락 틈으로 파란색과 흰색 팬티에 감싸인 작은 엉덩이가 보인다. 앉아 있는 탓에 조금 눌려 둥글게 보인다.",
      ]);
      await era.printAndWait([
        "허벅지에 자국을 남긴 스타킹 끝을 집어 바깥으로 당긴 뒤, 매끈한 근육선을 따라 종아리까지 내린다. 희고 둥근 허벅지가 드러나고 조금씩 말아 내릴 때마다 다릿살이 작게 떨린다. 양쪽 스타킹이 작은 덩어리가 될 때까지.",
      ]);
      await kitaru.say_and_wait(["그럼,", callname, "……다, 다음은요?"]);
      await era.printAndWait([
        "확연히 부끄러워하는 ",
        kitaru.get_colored_name(),
        "은(는) 고개를 숙였다. 두 발은 저절로 포개져 서로 비벼지고, 분홍빛 발끝까지 서로 건드리며 꼼지락거린다.",
      ]);
      era.printButton("손을 뻗는다", 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 부끄러움에 조금 움츠러든 발──정확히는 오른발이,",
        you.get_colored_name(),
        "의 손바닥에 들어왔다.",
      ]);
      await kitaru.say_and_wait("앗……");
      await era.printAndWait([
        "아름다운 발바닥의 곡선, 부드러운 발가락, 운동 후의 붉은 기운.",
        you.get_colored_name(),
        "은(는) 손가락으로 발바닥에서 발목까지 쓰다듬으며 감탄했다. 겉보기에는 보통 인간과 다를 바 없는 발이 달릴 때는 그 엄청난 가속을 지탱한다니.",
      ]);
      await kitaru.say_and_wait("햣……후……");
      await era.printAndWait([
        "짧은 숨소리가 ",
        kitaru.get_colored_name(),
        "의 입에서 새어 나온다.",
      ]);
      await era.printAndWait([
        "여기까지 왔으면,",
        kitaru.get_colored_name(),
        "에게 이상이 없다는 것은 안다. 그래도……",
      ]);
      await era.printAndWait("계속할까?");
      era.printButton("끝낸다", 1);
      era.printButton("계속한다", 2);
      if ((await era.input()) === 2) {
        await era.printAndWait([
          "한층 더 위로. 손끝이 탄력 있는 종아리와 무릎 힘줄, 그 위의 허벅지를 따라 움직인다.",
        ]);
        await kitaru.say_and_wait("읏……");
        await era.printAndWait([
          "남자의 피부에 닿은 허벅지가 한 번 굳었다가,",
          kitaru.get_colored_name(),
          "은(는) 운명의 사람이 쓰다듬는다는 것을 깨닫고 스르르 힘을 풀었다.",
        ]);
        await kitaru.say_and_wait("하앗!");
        await era.printAndWait([
          "손끝으로 근육 상태를 확인하고 마사지하듯 주무른다. 이미 촉진의 범위는 넘어섰다.",
          kitaru.get_colored_name(),
          "의 숨결에도 분홍빛 습기와 떨림이 감돌기 시작했다.",
        ]);
        await kitaru.say_and_wait("읏……하앗!");
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 실수인지 아닌지 모르게 ",
          kitaru.sex,
          "의 사타구니에 닿자,",
          kitaru.get_colored_name(),
          "이(가) 짧은 소리를 냈다. 그제야 ",
          you.get_colored_name(),
          "은(는) 고개를 들었고,",
          kitaru.sex,
          "와(과) 눈이 마주쳤다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 시선을 알아차린 ",
          kitaru.get_colored_name(),
          "은(는) 놀란 듯 옆머리로 새빨간 뺨을 가리려 했지만, 평소의 부스스한 머리로는 어림없었다.",
        ]);
        await kitaru.say_and_wait([callname, '……']);
        await era.printAndWait([
          "처음에는 옅게 붉었던 뺨이 지금은 새빨갛게 물들어 있다.",
          you.get_colored_name(),
          "의 촉진에 몸을 맡겼던 걸까. 침대에 단정히 앉아 있던 ",
          kitaru.get_colored_name(),
          "의 자세는 이미 흐트러졌고, 셔츠 사이로 보이는 피부까지 붉어져 있다.",
        ]);
        await kitaru.say_and_wait(["읏……하앗! 으……저기,", callname, '？']);
        era.printButton("「……응? 후쿠, 괜찮아?」", 1);
        await era.input();
        await kitaru.say_and_wait("네, 네……저기, 괜찮아요……");
        await kitaru.say_and_wait([
          "그러니까,",
          callname,
          "……문제, 없는 거죠?",
        ]);
        await era.printAndWait([
          "왼발에 천천히 니삭스를 다시 신고 있던 ",
          kitaru.get_colored_name(),
          "이(가) 고개를 들어 ",
          you.get_colored_name(),
          "을(를) 본다. 착각일지도 모르지만, 그 얼굴에는 희미한 기대가 어려 있었다.",
        ]);
        await era.printAndWait("계속할까?");
        era.printButton("끝낸다", 1);
        era.printButton("후쿠키타루의 발을 잡는다", 2, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton("후쿠키타루를 눕힌다", 3, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[0] === 2) {
          await kitaru.say_and_wait([callname, "……읏❤️!?"]);
          await era.printAndWait([
            "눈앞의 ",
            kitaru.uma_sex_title,
            "이(가) 짧게 비명을 지르는 사이,",
            kitaru.sex,
            "의 왼쪽 발목을 잡아 높이 들어 올린다.",
            kitaru.get_colored_name(),
            "이(가) ",
            you.get_colored_name(),
            "의 갑작스러운 행동에 표정 관리를 완전히 포기하고 새빨개진 순간, 얇은 흰 스타킹에 감싸인 발바닥을 바지 너머로 ",
            you.get_colored_name(),
            "의 팽팽하게 솟은 부분에 눌러 댔다.",
          ]);
          await kitaru.say_and_wait(["앗,", callname, ", 설마 여기서……"]);
          await kitaru.say_and_wait("……발로 하는 건가요?");
          await era.printAndWait([
            "의도를 알아차린 모양이다. 병상의 밤색 머리 ",
            kitaru.uma_sex_title,
            "이(가) 고개를 들어,",
            you.get_colored_name(),
            "의 뜻을 확인한다.",
          ]);
          await kitaru.say_and_wait([
            "아……알겠어요. 그럼 ",
            callname,
            ", 입구를 봐 주세요.",
          ]);
          await kitaru.say_and_wait([
            "이 다음에는 제게 그럴 여유가 있을지 걱정되니까요.",
          ]);
          await era.printAndWait([
            "허락을 받고 나자, 아까 촉진 뒤에 니삭스를 다시 신지 않은 오른발이 맨발의 발가락으로 ",
            you.get_colored_name(),
            "의 지퍼를 내렸다.",
          ]);
          await era.printAndWait(["지익……"]);
          await kitaru.say_and_wait("커요……");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "이(가) 작게 입 모양으로 그렇게 말한 듯했다.",
          ]);
          await era.printAndWait([
            "그 뒤 흰 니삭스를 신은 왼발과 감촉이 전혀 다른 맨발로 구멍을 만든다.",
          ]);
          await era.printAndWait([
            "굵은 육봉 위를 천천히 오르내리며 도드라진 핏줄을 하나씩 문지른다.",
          ]);
          await era.printAndWait([
            "벌어진 발가락 사이로 투명하고 끈적한 실이 늘어질 때까지.",
          ]);
          await kitaru.say_and_wait("읏……하앗!");
          await era.printAndWait([
            "그래도 너무 느리다. 이대로라면 언제 사정할 수 있을지 모른다.",
          ]);
          era.printButton("두 발을 잡는다", 1);
          await era.input();
          await kitaru.say_and_wait("으읏!……");
          await era.printAndWait([
            "침대를 짚고 있던 ",
            kitaru.get_colored_name(),
            "이(가) 갑자기 균형을 잃고 뒤로 넘어졌다. 대신 남은 것은 왼쪽에만 쿠퍼액으로 끈적해진 흰 니삭스를 신은 한 쌍의 발.",
            you.get_colored_name(),
            "이(가) 발목을 받쳐 높이 들어 육봉에 얹었다.",
          ]);
          await kitaru.say_and_wait([callname, ", 너, 너무 갑작스러워요!"]);
          await era.printAndWait([
            "목소리를 낮춰 ",
            you.get_colored_name(),
            "을(를) 나무랐지만, 거의 이성을 잃은 ",
            you.get_colored_name(),
            "은(는) 신경 쓰지 않는다.",
          ]);
          await era.printAndWait([
            "일회용 컵처럼 거리낌 없이 ",
            kitaru.get_colored_name(),
            "의 두 발을 쓴다.",
          ]);
          await era.printAndWait([
            "굵은 기둥 위에 색이 다른 고리를 만들고,",
            you.get_colored_name(),
            "의 두 손은 아까와는 비교도 안 되는 속도로 육봉을 훑으며 음란한 마찰음을 낸다.",
          ]);
          await kitaru.say_and_wait("자지님……뜨거워요～!");
          await era.printAndWait([
            "민감한 발바닥으로 전해지는 열기와 짙은 정액 냄새.",
            you.get_colored_name(),
            "에게 두 발을 잡힌 ",
            kitaru.get_colored_name(),
            "은(는) 사냥꾼의 덫에 걸린 밤색 여우 같다. 상반신은 보건실 매트에 파묻혀 있고,",
            kitaru.uma_sex_title,
            "의 유연함 덕분에 침대와 이루는 각도는 더욱 가팔라진다.",
          ]);
          await kitaru.say_and_wait(
            "운명의 사람❤️ 이렇게 격렬하게 하시면 발이 뜨거워요～!",
          );
          await era.printAndWait(["목소리 크기가 조금 위험해지기 시작했다."]);
          era.printButton("꾸짖는다", 1);
          await era.input();
          await you.say_and_wait([
            "목소리 낮춰! 아까 촉진할 때부터 이 천박한 발굽, 반응하고 있었잖아!",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "의 꾸짖음을 듣고,",
            kitaru.get_colored_name(),
            "은(는) 풀어진 얼굴로 참지 못하고 으응, 하고 낮은 소리를 흘린다.",
          ]);
          await kitaru.say_and_wait("에헤헤……난폭한 운명의 사람도 좋아요～!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 떨릴 듯한 발목을 움켜쥐고 살짝 힘을 주어, 발로 만든 구멍을 자위 기구 삼아 분출하듯 사용한다.",
          ]);
          await kitaru.say_and_wait(["하앗～하앗～하앗!"]);
          await kitaru.say_and_wait(["가요❤️ 가요❤️ 윽……"]);
          await era.printAndWait([
            "짙고 끈적한 정액이,",
            you.get_colored_name(),
            "에게 잡혀 저리고 힘없는 두 발 사이에서, 때맞춰 오므린 발바닥 안으로 쏟아졌다. 그래도 몇 방울은 ",
            kitaru.get_colored_name(),
            "의 얼굴과 옷에 흰 장식으로 남았다.",
          ]);
          await era.printAndWait([
            "짙은 백탁액에 왼쪽 니삭스의 색이 한층 진해졌다. 오른발에 떨어진 것은,",
            you.get_colored_name(),
            "이(가) ",
            kitaru.get_colored_name(),
            "의 발목을 잡은 채 아직 여력이 남은 ",
            kitaru.get_colored_name(),
            "에게 벗어 둔 자신의 겉옷에 문질러 닦게 했다.",
          ]);
          await era.printAndWait([
            "서둘러 치워야 한다. 이따 교의에게 들키면 곤란하다.",
          ]);
          if (!era.get('talent:56:神之足')) {
            await era.printAndWait([
              kitaru.get_colored_name(),
              "은(는) ",
              {
                color: buff_colors[2],
                content: "[신의 발]",
              },
              "을(를) 얻었다!",
            ]);
          }
        } else if (ret[0] === 3) {
          era.printButton("「다리 벌려.」", 1);
          await era.input();
          await kitaru.say_and_wait("네!?");
          await era.printAndWait([
            you.get_colored_name(),
            "의 명령에,",
            kitaru.get_colored_name(),
            "은(는) 순순히 두 손을 허벅지 양옆에 올렸다.",
          ]);
          await era.printAndWait([
            "떨리는 손으로 다리를 벌려, 아까 촉진으로 ",
            you.get_colored_name(),
            "때문에 젖은 팬티를 보여 준다.",
          ]);
        }
      }
      if (!ret[0] || ret[0] === 1) {
        await era.printAndWait([
          "이상이 없는 것을 확인한 뒤,",
          kitaru.get_colored_name(),
          "에게 푹 쉬라고 일러두었다.",
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = "레이스 전에";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} edu_prog 育成進行。シニア級宝塚記念以前は8未満
     */
    const f = async (kitaru, you, callname, edu_prog) => {
      const buffer = [];
      if (era.get('mark:56:淫纹') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait(
            "……승부복이 배를 드러내는 옷이 아니라 다행이에요.",
          );
          await era.printAndWait(
            "그래도 레이스 전의 흥분에 함께 반응해 버린 음문의 분홍빛은 희미하게 보인다.",
          );
        });
      }
      if (era.get('mark:56:欢愉') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait(
            "읏……정말, 정말 레이스가 끝난 뒤의 상이 기대돼요!",
          );
          await era.printAndWait([
            "레이스를 위해 한동안 금욕했던 ",
            kitaru.get_colored_name(),
            "은(는) 그것을 떠올리기만 해도 몸을 작게 떨기 시작한다.",
          ]);
        });
      }
      if (era.get('mark:56:同心') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait("이따가……운명의 사람, 알고 계시죠!");
          await kitaru.say_and_wait("읏!");
          await era.printAndWait([
            "발끝으로 서서 ",
            you.get_colored_name(),
            "의 뺨에 가볍게 입을 맞춘 뒤,",
            kitaru.get_colored_name(),
            "은(는) 코스로 향했다.",
          ]);
        });
      }
      if (edu_prog < 8) {
        buffer.push(
          async () => {
            await kitaru.say_and_wait(
              "……시라오키님을 모시겠어요. 그분의 힘이라면 분명 제 앞길을 열어 주실 거예요!",
            );
            await era.printAndWait([
              "어디서 배웠는지 모를 기도를 읊조리며,",
              kitaru.get_colored_name(),
              "의 모습은 코스 입구로 사라졌다.",
            ]);
          },
          async () => {
            await kitaru.say_and_wait("……별들이 올바른 위치로 움직였네요!");
            await era.printAndWait([
              "수정 구슬을 마네키네코 배낭에 넣고,",
              kitaru.get_colored_name(),
              "의 모습은 코스 입구로 사라졌다.",
            ]);
          },
        );
      } else {
        buffer.push(async () => {
          await kitaru.say_and_wait([
            "부디 ",
            callname,
            ", 희망을 품고 기다려 주세요!",
          ]);
          await kitaru.say_and_wait("전력을 다해 승리를 거머쥐겠어요!");
        });
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_sex: (() => {
    const title = "때아닌 발정";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("읏……");
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        "아랫배를 누른 ",
        kitaru.get_colored_name(),
        "이(가) 등을 구부린 채 ",
        you.get_colored_name(),
        "앞에 서 있다. 붉은 뺨에는 발정한 듯한 황홀함이 어려 있다.",
      ]);
      await kitaru.say_and_wait([callname, "……원해요……갖고 싶어요……"]);
      await era.printAndWait([
        "왜 갑자기 이렇게 된 건지,",
        you.get_colored_name(),
        "은(는) 당황하지 않을 수 없다.",
      ]);
      await era.printAndWait([
        "하지만 생각할 틈도 없이,",
        kitaru.get_colored_name(),
        "은(는) 반쯤 무릎 꿇듯 바닥에 주저앉았다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "이(가) 옷자락을 걷어 올리는 것을 보았다. 이미 붉어진 아랫배에서,",
        you.get_colored_name(),
        "이(가) 새긴 음문이 때아닌 분홍빛을 희미하게 내뿜고 있다.",
      ]);
      await era.printAndWait([
        "틀림없다. 지금 ",
        kitaru.get_colored_name(),
        "의 몸과 마음을 완전히 교접할 준비가 된 상태로 몰아넣은 원흉이다.",
      ]);
      await kitaru.say_and_wait([callname, "……죄송해요……"]);
      await era.printAndWait([
        "벤치에 앉은 ",
        you.get_colored_name(),
        "의 눈앞에서,",
        kitaru.get_colored_name(),
        "은(는) 무릎으로 기어가 ",
        you.get_colored_name(),
        "의 두 다리 사이로 들어갔다. 발정한 암말처럼 스스로 ",
        you.get_colored_name(),
        "의 사타구니에 얼굴을 댔다.",
      ]);
      await era.printAndWait([
        "천 너머로 풍기는 냄새만으로도 점술가의 아랫배에 묵직한 충격이 내리꽂힌다.",
      ]);
      await era.printAndWait([
        "음문에 이끌린 ",
        kitaru.get_colored_name(),
        "의 몸은 달콤한 호르몬을 풍기고, 그 요염한 표정이 ",
        you.get_colored_name(),
        "의 사타구니를 더욱 부풀린다.",
      ]);
      await kitaru.say_and_wait("음흣!");
      await era.printAndWait([
        "옅은 붉은 입술을 벌려 하얀 이로 ",
        you.get_colored_name(),
        "의 바지 지퍼를 물고 천천히 내린다. 구속에서 풀려난 굵고 붉은 기둥이 바지 밖으로 튀어나왔다.",
      ]);
      await kitaru.say_and_wait("자지 씨……안녕하세요……");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 탐욕스럽게 ",
        you.get_colored_name(),
        "의 사타구니 냄새를 맡고, 참지 못한 채 혀끝으로 육봉 끝에 입을 맞춘다.",
      ]);
      await kitaru.say_and_wait("질척!");
      await era.printAndWait([
        "요도구에서 흘러넘친 점액을 ",
        kitaru.get_colored_name(),
        "의 혀끝이 핥아 내고, 기둥 전체를 입에 넣는다. 투명한 침이 육봉의 출입에 맞춰 ",
        kitaru.uma_sex_title,
        "의 입가에서 흘러내리며 분홍빛 입술에 윤기를 입힌다.",
      ]);
      await era.printAndWait([
        "육봉 모양대로 부푼 뺨과 질척질척 끈적한 소리를 내는 빨기. 문 너머에서도 들릴지 모른다.",
      ]);
      await kitaru.say_and_wait("읏!");
      await era.printAndWait([
        "팬티의 천은 제 역할을 다하고 있는 모양이다.",
        kitaru.get_colored_name(),
        "의 하반신 옷차림은 눈에 띄게 흐트러지지 않았다. 하지만 점점 힘이 풀리는 두 다리는,",
        kitaru.get_colored_name(),
        "의 아랫배가 ",
        kitaru.sex,
        "에게 보내는 재촉을 말해 준다.",
      ]);
      await kitaru.say_and_wait("읏……!");
      await era.printAndWait([
        "먹이를 조르던 금붕어가 먹이를 삼키듯, 깊은 입맞춤을 하듯 귀두를 목 안의 부드러운 살에 밀어 붙인다. 아름다운 뺨은 관상구의 침입으로 양옆으로 부풀고, 목에서는 먹이를 삼키듯 꿀꺽꿀꺽 소리가 난다.",
      ]);
      await kitaru.say_and_wait("우엑……!");
      await era.printAndWait([
        "예쁜 코가 ",
        you.get_colored_name(),
        "의 음모에 파묻히고, 이제 곧 코스에 설 ",
        kitaru.get_colored_name(),
        "의 폐를 ",
        you.get_colored_name(),
        "의 냄새로 채운다.",
      ]);
      await era.printAndWait("찍!");
      await era.printAndWait([
        "숨이 막혀 눈꼬리에서 눈물이 넘치는데도,",
        you.get_colored_name(),
        "에게 음문이 새겨진 ",
        kitaru.get_colored_name(),
        "은(는) 여전히 ",
        you.get_colored_name(),
        "의 사타구니에 매달린다. 비릿한 냄새는 ",
        kitaru.uma_sex_title,
        "의 예민한 미각과 후각으로 더욱 증폭된다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 작은 혀는 더욱 부푸는 육봉에 눌려 납작해지고, 목 안의 부드러운 살까지 귀두를 마사지하는 데 가세한다.",
      ]);
      await kitaru.say_and_wait("하앗……하앗……");
      await era.printAndWait([
        "뜨겁고 조이는 입구멍을 육봉이 드나들고, 강렬한 흡인력과 함께 ",
        you.get_colored_name(),
        "은(는) 사정이라는 종점에 도달했다.",
      ]);
      await kitaru.say_and_wait("크헉!");
      await era.printAndWait([
        "입가에서 넘친 정액을 앞일을 읽는 점술가가 손바닥으로 받아, 기다리지 못하고 다시 입으로 가져간다.",
      ]);
      await kitaru.say_and_wait("꿀꺽!");
      await era.printAndWait([
        "이따금 솟아 나오는 잔여물도 목이 꿈틀대며 삼키는 소리와 함께 배 속으로 내려간다.",
      ]);
      await era.printAndWait([
        "마침 출주를 알리는 목소리가 울렸다.",
        kitaru.sex,
        "은(는) 겨우 ",
        you.get_colored_name(),
        "의 사타구니에서 몸을 일으켰다. 검지로 입가의 정액과 몇 가닥의 음모를 훑은 뒤, 혀끝으로 그것들을 입에 말아 넣는다.",
      ]);
      await era.printAndWait([
        "그제야,",
        kitaru.get_colored_name(),
        "의 눈동자가 조금 맑아졌다.",
      ]);
      await kitaru.say_and_wait("후……");
      await kitaru.say_and_wait("많이 편해졌어요……");
      await kitaru.say_and_wait([
        "정말! ",
        callname,
        "의 음문 다루는 솜씨는 전혀 능숙하지 않네요!",
      ]);
      await era.printAndWait([
        "조금 나무라는 말투로,",
        kitaru.get_colored_name(),
        "은(는) 천천히 바닥에서 일어선다. 흰 니삭스 위쪽에는 팬티가 막아 내지 못한 애액이 조금 배어 있다.",
      ]);
      await kitaru.say_and_wait([
        "하지만,",
        callname,
        "의 정액을 삼켰더니 왠지 기운이 났어요!",
      ]);
      await kitaru.say_and_wait("힘을 더 낼 수 있을지도 몰라요!");
      await era.printAndWait([
        "옷매무새를 꼼꼼히 다듬고 남들이 이상하게 여기지 않을지 확인한 뒤,",
        kitaru.get_colored_name(),
        "은(는) 레이스 전 대기실을 나섰다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = "레이스 승리";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("해피 컴 컴! 복이 왔어요!");
      await kitaru.say_and_wait([
        "이야아! ",
        callname,
        "덕분이에요! 시라오키님 덕분이에요! 신님의 보살핌을 받는 제 덕분이에요!",
      ]);
      era.printButton("「맞아!」", 1);
      era.printButton("「들뜨지 마!」", 2);
      if ((await era.input()) === 1) {
        if (era.get('love:56') < 75) {
          await kitaru.say_and_wait("와아! 그럼 어떻게 축하할까요?");
          await kitaru.say_and_wait("애플파이 어때요?");
          await era.printAndWait([
            "그리하여 저녁에는,",
            kitaru.get_colored_name(),
            "와(과) 함께 계피와 슈거 파우더를 뿌린 애플파이를 먹었다.",
          ]);
        } else {
          await kitaru.say_and_wait([
            "저기,",
            callname,
            ", 조금 더 가까이 가도 되나요?",
          ]);
          await kitaru.say_and_wait("에잇!");
          await era.printAndWait([
            "주황색 털 뭉치가 스스로 ",
            you.get_colored_name(),
            "의 품에 뛰어들었고, 그 뒤 ",
            kitaru.sex,
            "은(는) 거리낌 없이 ",
            you.get_colored_name(),
            "의 옷에 ",
            kitaru.sex,
            "의 냄새를 남겼다.",
          ]);
          await kitaru.say_and_wait("에헤헤, 운명의 사람 냄새예요!");
        }
      } else {
        await kitaru.say_and_wait("음! 그렇죠!");
        await kitaru.say_and_wait([
          "고작 실험의 검산일 뿐인데 그렇게 기뻐하다니, ",
          callname,
          ", 이걸 받아 주세요!",
        ]);
        await era.printAndWait(
          "등에 멘 마네키네코 배낭에서 부적 하나를 꺼냈다.",
        );
        await kitaru.say_and_wait(
          "이건! 승자의 행운을 담은 부적이에요!",
        );
        await kitaru.say_and_wait([
          "앞으로 ",
          callname,
          "은(는) 훨씬 더 많이 받으실 수 있을 거예요!",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = "입착";
    /** @param {CharaTalk} kitaru マチカネフクキタル */
    const f = async (kitaru) => {
      await kitaru.say_and_wait("우으……이길 수 있을 줄 알았어요.");
      await kitaru.say_and_wait("다음에는! 다음에는 꼭 괜찮을 거예요!");
      await era.printAndWait([
        "레이스에서 패한 ",
        kitaru.get_colored_name(),
        "은(는) 잠깐 풀이 죽었다가 곧바로,",
        kitaru.sex,
        "의 낙천가다운 모습으로 돌아왔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = "패배";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait("저……진 건가요?");
      await era.printAndWait([
        "대기실까지 걸어갈 새도 없이,",
        kitaru.get_colored_name(),
        "은(는) 벌써 ",
        you.get_colored_name(),
        "의 품에서 큰 소리로 울기 시작했다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 가슴에 바짝 붙은 두 귀,",
        you.get_colored_name(),
        "의 왼쪽 다리에 감긴 꼬리.",
        kitaru.sex,
        "은(는) 자기 몸째로 ",
        you.get_colored_name(),
        "의 품에 녹아들려는 듯, 꼭 ",
        you.get_colored_name(),
        "을(를) 끌어안는다.",
      ]);
      await era.printAndWait(
        "이렇게나 볼썽사나운 모습인데도 어째서인지 승자마저 부러운 눈길을 보내고 있었다.",
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_sex: (() => {
    const title = "준비 완료";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "멋지게 1착을 차지한 ",
        kitaru.get_colored_name(),
        "은(는) 관객들의 시선에서 벗어나자마자 안도한 듯 ",
        you.get_colored_name(),
        "의 품에 무너져 내렸다.",
      ]);
      await kitaru.say_and_wait("끄……끝났어요……");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "의 냄새를 맡고 나서야 팽팽하게 긴장했던 몸을 풀었다.",
      ]);
      await kitaru.say_and_wait([callname, '……', callname, '……']);
      await you.say_and_wait("뜨겁다!");
      await era.printAndWait([
        "운동의 열기, 발정의 열기, 운명의 사람 냄새를 맡은 흥분의 열기. 꼭 끌어안은 몸을 통해 그 모든 것이 ",
        you.get_colored_name(),
        "에게 전해진다.",
      ]);
      await era.printAndWait([
        "흰 스타킹을 신은 여우가,",
        you.get_colored_name(),
        "의 품에 응석을 부리듯 비벼 든다.",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "A「저 둘, 뭐 하는 거야?」",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "B「승리 축하하는 거 아냐?」",
      ]);
      await era.printAndWait([
        "어두컴컴한 지하 통로에서,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "의 아랫배를 덮은 옷 너머로 희미한 분홍빛이 비치는 것을 보았다.",
      ]);
      await era.printAndWait([
        "한순간도 머무를 수 없다.",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "을(를) 안고 선수 대기실로 향했다.",
      ]);
      await kitaru.say_and_wait(["……이제 못 참겠어요!"]);
      await era.printAndWait([
        "정욕에 머리가 잠식되어 더는 말을 잇지 못한다.",
      ]);
      await era.printAndWait([
        "배 속의 정액, 입에 남은 ",
        you.get_colored_name(),
        "의 정액 맛이 아직 가시지 않은 레이스 도중부터, 축축함과 간질거림, 희미하고 둔한 통증이 계속 ",
        kitaru.get_colored_name(),
        "을(를) 괴롭히고 있었다.",
      ]);
      await era.printAndWait(["쾅!"]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 뒤로 손을 뻗어 문을 닫고,",
        kitaru.get_colored_name(),
        "을(를) 벽에 밀어붙였다.",
      ]);
      await era.printAndWait([
        "땀에 젖은 옷은 잘 벗겨지지 않는다. 피어오르는 축축하고 하얀 김에 실린 ",
        kitaru.get_colored_name(),
        "의 좋은 향기가 끊임없이 ",
        you.get_colored_name(),
        "의 코로 흘러든다.",
      ]);
      await kitaru.say_and_wait("읏……");
      await era.printAndWait([
        "주황색 꼬리가 살며시 ",
        you.get_colored_name(),
        "의 허리를 감싼다.",
      ]);
      await kitaru.say_and_wait("빨리……운명의 사람……");
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kitaru) => ["운명을 엿보다", kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, "! 끝났어요!"]);
      await era.printAndWait([
        "조금 떨어진 곳에서 한 세트의 훈련을 마친 ",
        kitaru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "에게 손을 흔들고 있다. 지나치게 열띤 목소리에 다른 ",
        kitaru.uma_sex_title,
        "들이 힐끔힐끔 쳐다봤다.",
      ]);
      await era.printAndWait([
        "며칠 함께 지내 보니, 개운 도구에 지나치게 의지하는 점을 빼면 ",
        kitaru.sex,
        "은(는) 밝고 외향적이다. 한마디로 활기찬 성격을 가리키는 긍정적인 말은 대부분 ",
        kitaru.sex,
        "에게 들어맞는다.",
      ]);
      await era.printAndWait("하지만……");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 알 수 있다.",
        kitaru.get_colored_name(),
        "의 점술과 운명, 운에 대한 집착은 너무도 뚜렷하다.",
      ]);
      await era.printAndWait(
        "대부분의 사람은 이른바 점술을 차 한잔하며 나눌 이야기나 웃음거리 정도로 여긴다.",
      );
      await era.printAndWait([
        "하지만 ",
        kitaru.get_colored_name(),
        "은(는) 그렇게 생각하지 않는다. 평일의 훈련부터 휴일에 갈 곳까지,",
        kitaru.sex,
        "은(는) 운을 담아 점을 친 뒤,",
        kitaru.sex,
        "만이 읽을 수 있는 답에 따라 정해 버린다.",
      ]);
      await era.printAndWait([
        "그렇기에 어떤 점에서 ",
        kitaru.sex,
        "이(가) ",
        kitaru.sex,
        "의 운명의 사람으로 인정한 ",
        you.get_colored_name(),
        "인 것이겠지.",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "이(가) ",
        you.get_colored_name(),
        "에게 보내는 신뢰는 아직 호흡을 맞춰 가는 담당과 트레이너의 모습과는 전혀 다르다.",
      ]);
      await era.printAndWait([
        "아무래도 ",
        kitaru.sex,
        "은(는) ",
        you.get_colored_name(),
        "이(가) 입에 달고 사는 시라오키님이 보내신 사자라고 굳게 믿고 있다.",
      ]);
      await era.printAndWait("다음으로 중요한 것 하나를 정해야 한다.");
      era.printButton("「마치카네 후쿠키타루 씨, 앞으로의 목표 말인데……」", 1);
      await era.input();
      await era.printAndWait([
        "목표. 바꿔 말하면,",
        kitaru.uma_sex_title,
        "이(가) 달리는 이유이자 소망이다.",
      ]);
      await era.printAndWait(
        "구체적으로는 클래식 3관, 춘추 연패, 혹은 개선문상.",
      );
      await era.printAndWait(
        "좀 더 넓게 보면 단순히 이기기 위해서, 혹은 누군가 동경하는 이의 발자취를 따르기 위해서.",
      );
      await era.printAndWait(
        "더 추상적으로는 자신의 존재나 가치를 증명하기 위해서.",
      );
      await kitaru.say_and_wait("목표, 말인가요……");
      era.printButton(
        `「앞으로 어떤 레이스를 달릴지, 어떤 ${kitaru.uma_sex_title}이(가) 되고 싶은지 같은 거.」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait("어! 저는 특별한 목표가 없어요!");
      await kitaru.say_and_wait("지금의 행운이 쭉 이어지면 그걸로 좋아요!");
      await kitaru.say_and_wait("하지만……");
      await kitaru.say_and_wait(
        "굳이 말하자면……국화상이 괜찮을지도 모르겠네요?",
      );
      await era.printAndWait([
        "눈앞의 ",
        kitaru.get_colored_name(),
        "의 말투는 농담처럼 들리지만 표정은 진지하다.",
      ]);
      era.printButton("「이유가 있어?」", 1);
      await era.input();
      await kitaru.say_and_wait("음……");
      await kitaru.say_and_wait([
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.teen_sex_title,
        "! 행복을 이루기 위해! 신이 되기 위해! 운명에서 반드시 거쳐야 할 길이에요!",
      ]);
      await era.printAndWait([
        "잠시 생각한 뒤,",
        kitaru.teen_sex_title,
        "은(는) 평소처럼 지나치게 과장된 말투로 ",
        you.get_colored_name(),
        "에게 대답했다. 하지만 ",
        kitaru.sex,
        "의 눈빛은 무척 진실했다.",
      ]);
      await era.printAndWait("그나저나 3000미터 국화상에서 우승이라.");
      await era.printAndWait("가장 강한 말이 국화상을 차지한다.");
      await era.printAndWait([
        "이 목표는,",
        kitaru.sex,
        "에게 너무 멀지 않을까.",
      ]);
      await era.printAndWait(
        "우선 한 걸음씩, 데뷔전 승리부터 목표로 삼자!",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_fortune_week: (() => {
    const title = "길흉 점치기";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {number} luck 占い結果。0＝小吉、1＝中吉、2＝大吉、3＝凶
     */
    const f = async (kitaru, luck) => {
      // 占いの道具
      const luck_ways = [
        "타로",
        "추",
        "괘상",
        "별자리",
        "수비학",
        "주사위",
      ];
      const luck_result = ["소길", "중길", "대길", "흉"];
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) ",
        { color: kitaru.color, content: get_random_entry(luck_ways) },
        "으로 점을 쳐 봤다. 결과는",
        {
          color: motivation_colors[luck === 3 ? 1 : luck + 2],
          content: luck_result[luck],
        },
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_14: (() => {
    const title = "판 안으로";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 거의 ",
        kitaru.sex,
        "을(를) 모르는 채로,",
        kitaru.get_colored_name(),
        "와(과) 계약을 맺었다.",
      ]);
      await era.printAndWait([
        "다행히 시간이 흐르면서,",
        you.get_colored_name(),
        "이(가) ",
        kitaru.sex,
        "에 대해 아는 것은 달리기 이외의 영역까지 조금씩 넓어졌다.",
      ]);
      await era.printAndWait([
        "이를테면,",
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "이(가) 만났던 그 신사는 마침 ",
        kitaru.couple_title,
        "의 집안에서 관리하고 있다.",
      ]);
      await kitaru.say_and_wait(["어! ", callname, ", 관심 있으세요?"]);
      await kitaru.say_and_wait("마침 오늘은 저도 일하는 날이에요!");
      await era.printAndWait([
        "오늘은 훈련 일정도 없다.",
        you.get_colored_name(),
        "은(는) 모처럼 ",
        kitaru.get_colored_name(),
        "의 초대를 받아들여,",
        kitaru.sex,
        "와(과) 함께 신사 일을 돕기로 했다.",
      ]);
      await era.printAndWait([
        "휴일인데도 이 신사는 처음 ",
        kitaru.get_colored_name(),
        "와(과) 만났을 때만큼이나 한산하다.",
      ]);
      await era.printAndWait([
        "그래도 ",
        kitaru.get_colored_name(),
        "의 열의는 전혀 식지 않는다. 무녀복으로 갈아입은 ",
        kitaru.sex,
        "은(는) 간단한 청소부터 고헤이 접기까지 착실히 일을 해냈다.",
      ]);
      await era.printAndWait([
        "벌써 해 질 녘인데 오늘도 참배객은 오지 않는다. 그래도 ",
        you.get_colored_name(),
        "의 담당은 참배객이 반드시 지나는 도리이를 여전히 기대에 찬 얼굴로 바라보고 있다.",
      ]);
      await era.printAndWait("게다가……오늘 하루 동안 본 신직은 아무래도──");
      era.printButton("「마치카네 후쿠키타루?」", 1);
      await era.input();
      await kitaru.say_and_wait(["어! ", callname, '？']);
      era.printButton("「평소에는 여기 너 혼자 있어?」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait(
        "물론 설날처럼 특별한 날에는 사람을 고용해서 도움을 받아요!",
      );
      await kitaru.say_and_wait("가끔은 엄마도 오시고요……");
      await era.printAndWait([
        "거기까지 말하자,",
        kitaru.uma_sex_title,
        "의 길쭉한 두 귀가 풀이 죽어 내려갔다.",
      ]);
      await kitaru.say_and_wait("왜냐하면, 제 기억으로는……");
      await kitaru.say_and_wait("여긴 사람이 별로 안 오거든요.");
      await era.printAndWait([
        "조금 난처한 듯 ",
        you.get_colored_name(),
        "에게 어깨를 으쓱한다. 아무래도 ",
        kitaru.sex,
        "은(는) 이 일로 ",
        you.get_colored_name(),
        "에게 동정받고 싶지 않은 모양이다.",
      ]);
      await kitaru.say_and_wait([
        "괜찮아요! ",
        callname,
        ", 위로하지 않으셔도 돼요!",
      ]);
      await kitaru.say_and_wait("으냣!");
      await era.printAndWait([
        "갑자기 무언가 떠올린 모양이다.",
        kitaru.get_colored_name(),
        "은(는) 털을 곤두세운 새끼 고양이처럼 튀어 오르더니 다시 기쁜 표정으로 돌아왔다.",
      ]);
      await kitaru.say_and_wait([
        "맞아요! 그러니까 그때 여기까지 찾아오신 ",
        callname,
        "이(가) 대단하신 거예요!",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "이(가) 다시 운세 이야기를 몇 가지 하고 나니 벌써 돌아갈 시간이 되었다.",
      ]);
      await kitaru.say_and_wait(
        "그럼! 뒤에서 옷 갈아입고 올게요! 이따 같이 트레센으로 돌아가요!",
      );
      await era.printAndWait([
        "그렇게 말하며,",
        kitaru.get_colored_name(),
        "은(는) 본전 옆의 작은 방으로 향했다.",
      ]);
      era.drawLine({ content: "몇 분 후" });
      await era.printAndWait("댕!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 참배를 알리는 종소리를 들었다. 손님이 왔다는 뜻이다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        kitaru.get_colored_name(),
        "은(는) 아직 돌아오지 않았다.",
      ]);
      await era.printAndWait([
        "이렇게 된 이상,",
        you.get_colored_name(),
        "이(가) 나가서 응대할 수밖에 없다.",
      ]);
      await era.printAndWait(
        "주위를 둘러봐도 아직 흔들리는 구리 종 외에는 사람 그림자도 없다.",
      );
      await era.printAndWait("새전함의 투입구에 무언가 끼어 있다.");
      era.printButton("새전함을 살핀다", 1);
      await era.input();
      await you.say_and_wait("이상하네, 왜……");
      await era.printAndWait(
        "새전함 위에 어째서인지 누렇게 바랜 신문 조각이 놓여 있다.",
      );
      await era.printAndWait(
        "내용은 지역 신문이 이 신사의 일상을 찍은 사진 몇 장인 듯하다.",
      );
      await era.printAndWait([
        "인산인해를 이룬 참배객, 신직들의 미소, 그리고 그 가운데 둘러싸인……",
        kitaru.get_colored_name(),
        "이(가) 둘?",
      ]);
      era.printButton("아니다, 나이가 맞지 않는다.", 1);
      await era.input();
      await era.printAndWait([
        "아무래도 한 쌍의 ",
        kitaru.siblings_sex_title,
        "인 듯하다. 나이가 더 많은 ",
        kitaru.elder_sibling_sex_title,
        "이(가) 어린 ",
        kitaru.younger_sibling_sex_title,
        "의 손을 잡고 있다.",
      ]);
      await era.printAndWait([
        "어린 쪽은 귀 장식으로 보아 ",
        kitaru.get_colored_name(),
        "이(가) 틀림없다. 하지만 ",
        kitaru.sex,
        "의 옆에 있는 저 사람은……?",
      ]);
      era.printButton(`（${kitaru.elder_sibling_sex_title}인가?)`, 1);
      await era.input();
      await era.printAndWait([
        "하지만 지금까지,",
        kitaru.get_colored_name(),
        "에게서 ",
        kitaru.sex,
        "에게 ",
        kitaru.elder_sibling_sex_title,
        "이(가) 있다는 이야기는 들은 적이 없다.",
      ]);
      await kitaru.say_and_wait([
        "어! ",
        callname,
        ", 거기서 뭐 하세요?",
      ]);
      await era.printAndWait([
        "교복으로 갈아입은 ",
        kitaru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 뒤에 나타났다.",
      ]);
      era.printButton("후쿠키타루에게 보여 준다", 1);
      era.printButton("보여 주지 않는다", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          "하지만 마침 ",
          you.get_colored_name(),
          "이(가) 주운 신문 조각을 ",
          kitaru.sex,
          "에게 보여 주려던 순간.",
        ]);
      } else {
        await era.printAndWait([
          "하지만 마침 ",
          you.get_colored_name(),
          "이(가) 주운 신문 조각을 숨기려던 순간.",
        ]);
      }
      await era.printAndWait(["갑자기 바람이 몰아치고 종이가 찢어지는 소리가 났다."]);
      await era.printAndWait([
        "신문 조각은 ",
        you.get_colored_name(),
        "의 손에 아주 작은 조각만 남기고 바람에 휘말려 올라갔다. 나머지는 ",
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "앞에서 더욱 잘게 찢어져 멀리 흩어졌다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = "데뷔전을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이(가) 데뷔전에 나서는 날이 드디어 왔다.",
      ]);
      await era.printAndWait([
        "평소 훈련 수치로 보면,",
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.uma_sex_title,
        "은(는) 도주 주자를 상대할 때 쉽게 조급해지는 점만 빼면 다른 능력은 동기 중에서도 중상위권이다.",
      ]);
      await era.printAndWait([
        "신분증을 보여 준 뒤,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "의 레이스 전 대기실에 들어갈 수 있었다.",
      ]);
      await kitaru.say_and_wait([callname, '！！！']);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 방에 들어오는 것을 보자,",
        kitaru.get_colored_name(),
        "은(는) 신이 나서 ",
        you.get_colored_name(),
        "에게 달려왔다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "에게는 예상 밖이었다.",
      ]);
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          "기억하기로, 이때 대부분의 ",
          kitaru.uma_sex_title,
          "은(는) 어쩔 줄 모를 만큼 긴장한다. 하지만 ",
          kitaru.get_colored_name(),
          "은(는) 잔뜩 들뜬 얼굴이다.",
        ]);
      } else {
        await era.printAndWait([
          "선배들 말로는 이때 대부분의 ",
          kitaru.uma_sex_title,
          "은(는) 어쩔 줄 모를 만큼 긴장한다고 한다. 하지만 ",
          kitaru.get_colored_name(),
          "은(는) 잔뜩 들뜬 얼굴이다.",
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 후쿠키타루를 위아래로 살폈다.",
        kitaru.sex,
        "은(는) 한껏 들떠 있었다. 예전에 ",
        kitaru.sex,
        "이(가) 말했던 온몸에 영력이 가득 찼을 때의 모습 그대로다.",
      ]);
      era.printButton("「운세는 좋아?」", 1);
      await era.input();
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait(
          "그럭저럭인가요……그래도 데뷔전은 아마 괜찮을 거예요!",
        );
      } else {
        await kitaru.say_and_wait(
          "네! 지금은 시라오키님이 강림해 주셨으니까요!",
        );
      }
      await kitaru.say_and_wait(
        "게다가 그분이 보내신 신의 사자도 곁에 있어요. 그때와는 달라요!",
      );
      era.printButton("「그때?」", 1);
      await era.input();
      await era.printAndWait(
        "자신이 무심코 말을 흘렸다는 생각은 못 한 모양이다.",
      );
      await era.printAndWait([
        "환하게 웃던 ",
        kitaru.get_colored_name(),
        "이(가) 갑자기 멈추더니 표정이 조금 복잡해졌다.",
      ]);
      await kitaru.say_and_wait([
        "제 ",
        kitaru.elder_sibling_sex_title,
        "이(가)……아무튼……",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 몇 번 깊이 숨을 들이마신 뒤 말을 이었다.",
      ]);
      await kitaru.say_and_wait(
        "태어나서 처음으로 운세를 뽑고 싶었던 날이에요! 잔돈이 없어서 포기했던 그날!",
      );
      await kitaru.say_and_wait(
        "하지만 그때와는 달라요! 지금은 의지할 수 있는 동료가 있으니까요!",
      );
      await era.printAndWait([
        "말을 마치자,",
        you.get_colored_name(),
        "에게 익숙한,",
        kitaru.get_colored_name(),
        "의 미소가 다시 ",
        kitaru.sex,
        "의 얼굴로 돌아왔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = "참배의 시작";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("다행이에요! 끝까지 달렸어요!");
      await era.printAndWait([
        "가장 먼저 결승선을 통과한 ",
        kitaru.get_colored_name(),
        "은(는) 코스 위에서 두 손을 하늘로 들어 올리는 자세로 자축했다.",
      ]);
      await kitaru.say_and_wait([
        callname,
        "! 영험하시도다! 레이스는 순조로워요!",
      ]);
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait(
          "흉이어도 시라오키님의 가호를 받는 저는 제대로 이겼어요!",
        );
      } else {
        await kitaru.say_and_wait(
          "역시 대길이에요! 시라오키님도 제게 강림해 주셨어요!",
        );
      }
      await kitaru.say_and_wait("눈 깜짝할 사이에 끝났네요!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 방금 ",
        kitaru.get_colored_name(),
        "의 달리기를 떠올렸다.",
        kitaru.sex,
        "의 상태는 좋았다.",
      ]);
      await era.printAndWait([
        "평소 가르쳤던 것들을 ",
        kitaru.sex,
        "이(가) 제대로 활용했다.",
      ]);
      await era.printAndWait(
        "선발 레이스 때의 어색함과는 전혀 다르다.",
      );
      await era.printAndWait(
        "이런 성장세라면 국화상 우승도 전혀 불가능하지는 않다.",
      );
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        "상태가 정말 좋아요! 앞으로 국화상도 분명 괜찮을 거예요! 다음 레이스는 뭔가요?",
      );
      await kitaru.say_and_wait("점으로 정할까요?");
      await kitaru.say_and_wait("으윽!");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 오늘도 ",
        you.get_colored_name(),
        "의 아이언 클로를 당했다.",
      ]);
      era.printButton("「아오바상이야!」", 1);
      await era.input();
      await kitaru.say_and_wait("어! 아오바상!");
      await kitaru.say_and_wait("그러면 한참 뒤잖아요?");
      await era.printAndWait("확실히 그렇다.");
      await era.printAndWait([
        "하지만 ",
        kitaru.get_colored_name(),
        "의 거리 적성과,",
        kitaru.sex,
        "의 목표가 클래식 3관 중 하나인 국화상이라는 점을 생각하면.",
      ]);
      await era.printAndWait([
        "게다가 ",
        you.get_colored_name(),
        "에게도 이 종잡을 수 없는 ",
        kitaru.uma_sex_title,
        "을(를) 더 알아갈 시간이 필요하다.",
      ]);
      await era.printAndWait("아오바상은 나쁘지 않은 선택이다.");
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = "쇼윈도 속 기시감";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "이것으로 데뷔전은 끝났다.",
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "의 이인삼각은 이제야 본격적으로 발걸음을 내디뎠다.",
      ]);
      await era.printAndWait([
        "승리의 보상으로,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "와(과) 상점가에 새 개운 도구를 사러 가기로 약속했다.",
      ]);
      await era.printAndWait([
        "몇 번째인지도 모를 부름에 응해 ",
        kitaru.get_colored_name(),
        "에게 달려간다. 배낭 속의 비싼 수정 구슬만으로도 숨이 턱까지 차오른다.",
      ]);
      await era.printAndWait([
        "커다란 짐을 안은 ",
        you.get_colored_name(),
        "이(가) 벽을 짚고 땀에 흠뻑 젖었을 때,",
        kitaru.get_colored_name(),
        "의 다음 부름이 한참 들리지 않는다는 것을 깨달았다.",
      ]);
      era.printButton("고개를 든다", 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 선정에 든 것처럼 스포츠 용품점 쇼윈도 앞에 서 있다. 가끔 흔들리는 꼬리만이 ",
        kitaru.sex,
        "이(가) 조각상이 아니라는 증거다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "의 시선을 따라갔다.",
      ]);
      await era.printAndWait(
        "스포츠 용품점의 쇼윈도다. 안에 있는 텔레비전에서 영상이 나오고 있다.",
      );
      await era.printAndWait([
        "트레이너인 ",
        you.get_colored_name(),
        "은(는) 곧바로 알아봤다. 화면에 나오는 것은 역사적으로 유명한 도주 ",
        kitaru.uma_sex_title,
        "이(가) 끝까지 선두를 지켜 낸 영상이다.",
      ]);
      era.printButton("「마치카네 후쿠키타루?」", 1);
      await era.input();
      await kitaru.say_and_wait('……');
      era.printButton("「마치카네 후쿠키타루! 괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait(["앗! 괜찮아요,", callname, '！']);
      await kitaru.say_and_wait("에헤! 잠깐 넋을 놓고 봤네요!");
      await kitaru.say_and_wait("다음 영험한 장소로 가요!");
      await era.printAndWait([
        "아니다.",
        you.get_colored_name(),
        "은(는) 알 수 있다.",
        kitaru.get_colored_name(),
        "의 화제 돌리기는 이번에는 너무나 부자연스럽다. 게다가……",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 주된 각질이 선입이라는 점은 제쳐 두더라도, 그 표정은 다른 ",
        kitaru.uma_sex_title,
        "들이 남의 달리기에 공감하며 보이는 기쁨이나 흥분이 아니었다. 오히려……",
      ]);
      // await era.printAndWait('笑顔を保とうとして、湧いてくる悲しみに打たれて呆然とする、あの顔。');
      await era.printAndWait(
        "망연자실? 아니, 오히려 견본처럼 지나치게 반듯한 미소다.",
      );
      era.printButton("「방금 무슨 일이 있었어?」", 1);
      era.printButton("「왜 그래?」", 2);
      await era.input();
      await kitaru.say_and_wait("……저기.");
      await kitaru.say_and_wait("조금 기시감이 들었을 뿐이에요!");
      era.printButton("「기시감?」", 1);
      await era.input();
      await kitaru.say_and_wait("그러니까……그러니까……");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "의 시선이 조금 헤매고, 몇 번 고개를 젓는 것을 보았다.",
      ]);
      await kitaru.say_and_wait([
        "제 ",
        kitaru.elder_sibling_sex_title,
        "이(가) 떠올랐어요! 옛날에 ",
        kitaru.sex,
        "와(과) 함께 나란히 달릴 때,",
        kitaru.sex,
        "은(는) 항상 텔레비전 속 도주 주자처럼 저를 아주아주 멀리 떼어 놓았거든요!",
      ]);
      era.printButton(
        `「듣고 보니 네 ${kitaru.elder_sibling_sex_title}은(는) 훌륭한 ${kitaru.uma_sex_title}이었겠네?」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait("네……다만……");
      await era.printAndWait([
        "목구멍에서 억지로 짜낸 듯한 대답.",
        kitaru.get_colored_name(),
        "의 뒤로 누운 귀가 머릿속으로 파고들 것만 같다.",
      ]); // 緊張
      await kitaru.say_and_wait("돌아가셨어요……");
      await kitaru.say_and_wait("네……돌아가셨어요……");
      era.printButton("「미안해.」", 1);
      await era.input();
      await kitaru.say_and_wait(
        "네에?! 사과할 사람은 저예요. 또 이상한 이야기를 해 버렸네요.",
      );
      await kitaru.say_and_wait([
        callname,
        "와(과) 함께 있으면 저도 모르게 들떠 버려요!",
      ]);
      await kitaru.say_and_wait("음……");
      await era.printAndWait([
        "그 뒤 ",
        kitaru.get_colored_name(),
        "은(는) 적당한 핑계로 축하 자리를 끝냈고,",
        you.get_colored_name(),
        "은(는) 혼자 잔뜩 사들인 개운 도구를 안고 자신의 사무실로 돌아왔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = "회오리 대청소";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_62 マチカネタンホイザのプレイヤーへの呼び方
     */
    const f = async (kitaru, tannhauser, you, callname, callname_62) => {
      await era.printAndWait([
        "평소처럼,",
        you.get_colored_name(),
        "은(는) 사무실로 가는 길이었다.",
      ]);
      await era.printAndWait("「쾅!!!」");
      await era.printAndWait([
        kitaru.uma_sex_title,
        "기숙사 앞을 지날 때 큰 소리가 났다.",
      ]);
      era.printButton("소리가 난 쪽을 확인한다", 1);
      era.printButton("무시한다", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          "의 청력이 ",
          kitaru.uma_sex_title,
          "만큼은 못하더라도, 고요한 아침에 느닷없이 울린 이 소리의 출처를 찾는 일은 ",
          you.get_colored_name(),
          "에게도 어렵지 않다.",
        ]);
        await tannhauser.say_as_unknown_and_wait("우으……");
        await era.printAndWait(["어느 ", kitaru.uma_sex_title, "의 탄식."]);
        await kitaru.say_as_unknown_and_wait("아아앗! 정말 죄송해요!");
        await era.printAndWait([
          "그리고 틀림없는 ",
          kitaru.get_colored_name(),
          "의 목소리.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) ",
          kitaru.sex,
          "에게 전화를 걸까 망설이는 사이, 기숙사 입구에서 낯익은 모습이 뛰쳐나왔다.",
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 대충 알 수 있었다. 손이 많이 가는 담당이 또 무언가 저지른 게 분명하다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 걸음을 재촉하며 학생회에 들키기 전에 달아나려 했다.",
        ]);
        await era.printAndWait([
          "그러던 중,",
          you.get_colored_name(),
          "은(는) 뒤에서 옷을 붙잡혔다.",
        ]);
      }
      await kitaru.say_and_wait("아하하!");
      await kitaru.say_and_wait("다행이에요!");
      await kitaru.say_and_wait([callname, "이네요!"]);
      await you.say_and_wait("하아……");
      era.printButton("「도와 달라고?」", 1);
      era.printButton("「또 사고 쳤구나?」", 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait("오오! 오늘은 대길이네요!");
        await kitaru.say_and_wait([
          "남 돕기를 좋아하시는 ",
          callname,
          "이(가) 재난 뒤에 갑자기 나타나셨어요!",
        ]);
      } else {
        await kitaru.say_and_wait(
          "우엣! 역시 제 운명의 사람이세요! 한 번에 맞히셨어요!",
        );
        await kitaru.say_and_wait([
          "그래도 ",
          callname,
          ", 도와주실 거죠! 우리는 운명 공동체니까요!",
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "에게 이기지 못하고,",
          you.get_colored_name(),
          "은(는) 결국 고개를 끄덕였다.",
        ]);
      }
      await kitaru.say_and_wait("저기……아무튼 이쪽으로 와 주세요!");
      await era.printAndWait([
        "경비원의 의아한 시선 속에서,",
        kitaru.sex,
        "은(는) 다짜고짜 ",
        you.get_colored_name(),
        "을(를) 기숙사 안으로 끌고 들어갔다!",
      ]);
      await era.printAndWait([
        "문을 열자,",
        you.get_colored_name(),
        "의 눈에 들어온 것은 산처럼 쌓인 잡동사니였다.",
      ]);
      await tannhauser.say_and_wait("사……");
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([callname_62, "……살려 줘!"]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 다른 담당이 그 아래에 깔려 있었다.",
        ]);
      } else {
        await era.printAndWait([
          kitaru.sex,
          "의 룸메이트가 아래에 깔려 있다.",
        ]);
      }
      era.printButton("「이 쓰레기 산은 뭐야?」", 1);
      await era.input();
      await kitaru.say_and_wait("쓰레기 산이 아니에요!");
      await kitaru.say_and_wait("이건! 계속 모아 온 개운 도구라고요!");
      await kitaru.say_and_wait(
        "이 기세로 늘어나다가는 언젠가 트레센 학원이 삼켜져도 이상하지 않겠네요!",
      );
      await kitaru.say_and_wait("아, 방금 건 점이 아니라 제 예상이에요.");
      await kitaru.say_and_wait([
        "네네! ",
        callname,
        ", 어디 둘지 생각해 주세요!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 이름을 아는 것도, 모르는 것도. 온갖 작은 잡동사니가 이 산에 뒤섞여 있고, 분명 최근에 산 기념품까지 들어 있다.",
      ]);
      await era.printAndWait(
        "이제야 무너진 것만으로도 대길 중의 대길이라 할 수 있다.",
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.uma_sex_title,
        "에게는 뜻밖에도 심각한 수집벽이 있다.",
      ]);
      await era.printAndWait("역시 답은 하나다.");
      era.printButton("「버리자……」", 1);
      await era.input();
      await kitaru.say_and_wait("네?");
      await kitaru.say_and_wait("네에!!!!!!");
      era.drawLine({ content: "트레센 학원 기숙사 뒤 소각로" });
      await era.printAndWait([
        "산처럼 쌓인 개운 도구 앞에서,",
        you.get_colored_name(),
        "은(는) 무엇부터 손댈지 정한다.",
      ]);
      let a = true;
      let b = true;
      let c = true;
      do {
        era.printMultiColumns(
          [
            { c: "평범한 병뚜껑", e: a },
            { c: "심하게 망가진 인형", e: b },
            { c: "【대원성취】라고 적힌 부적", e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = false;
            await kitaru.say_and_wait(
              "이, 이건 처음으로 한 번에 열었던 병의 뚜껑이에요!",
            );
            await kitaru.say_and_wait("부탁이에요! 절대 안 돼요!");
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait(
              "윽! 그건 세발자전거에 치일 뻔했을 때 저 대신 수난을 겪어 준 인형이에요!",
            );
            await kitaru.say_and_wait("버리면 대흉이에요!");
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait(
              "앗! 그건 초등학생 때! 구기 대회에서 학원 8강까지 가게 해 준 부적이에요!",
            );
            await kitaru.say_and_wait("이것부터 버리는 건 절대 안 돼요!");
        }
      } while (a || b || c);
      await kitaru.say_and_wait("우으! 역시 하나도 안 돼요!");
      await kitaru.say_and_wait([
        "부탁이에요! ",
        callname,
        ", 버리지 말아 주세요! 뭐든 할게요!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 필사적으로 두 손을 비비는 ",
        kitaru.get_colored_name(),
        "을(를) 소각로 앞에서 떼어 놓을 수밖에 없었다.",
      ]);
      await era.printAndWait(
        "이 산을 어떻게 처리할지는 제대로 생각해야 할 것 같다.",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = "수용! 개운 도구";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, ", 정말 다행이에요!"]);
      await era.printAndWait([
        "여러모로 생각한 끝에,",
        you.get_colored_name(),
        "은(는) 어쩌면 쓸 만할 해결책을 떠올렸다──",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 짐을 잠시 ",
        you.get_colored_name(),
        "의 집에 놓아두자는 것이다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 하나씩,",
        kitaru.sex,
        "의 모양도 제각각인 개운 도구로 ",
        you.get_colored_name(),
        "의 집 곳곳을 채워 가는 모습을 지켜봤다.",
      ]);
      await era.printAndWait([
        "유난히 들뜬 모습은,",
        kitaru.uma_sex_title,
        "라기보다는 자기 영역에 냄새를 묻히는 작은 동물 같다.",
      ]);
      await kitaru.say_and_wait("에헤헤! 조금 실례할게요!");
      await kitaru.say_and_wait(
        "개운 도구를 모으는 건 제가……계속 해 온 습관이거든요!!!",
      );
      await kitaru.say_and_wait("신이 될 때까지! 계속할 거예요!");
      await era.printAndWait([
        kitaru.sex,
        "은(는) 잠시 말을 고르더니, 일부러 ",
        kitaru.sex,
        "이(가) 말하려던 시점을 건너뛰었다.",
      ]);
      await era.printAndWait("……데뷔전 때와 같다.");
      await kitaru.say_and_wait([
        "저기, 앞으로도 자주 ",
        callname,
        "의 집에 놀러 와도 될까요?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 집 거실에서 폴짝거리는 ",
        kitaru.get_colored_name(),
        "을(를) 보고, 어쩔 수 없이 고개를 끄덕였다.",
      ]);
      await kitaru.say_and_wait("에이, 그런 표정 짓지 마세요!");
      await kitaru.say_and_wait([
        "자! 그럼 ",
        callname,
        ", 후쿠에게 부탁하고 싶은 일 있으세요? 전력을 다할게요!",
      ]);
      await era.printAndWait([
        "자신의 행동이 ",
        you.get_colored_name(),
        "에게 상당히 폐를 끼쳤다는 것은 아는 모양이다. 주황색 머리의 ",
        kitaru.teen_sex_title,
        "은(는) ",
        kitaru.sex,
        "의 특기인 자세를 취했다. 하얀 두 팔을 천장으로 쭉 뻗고,",
        you.get_colored_name(),
        "의 대답을 기다리고 있다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "에게 부탁할 만한 일이 있을까.",
      ]);
      await era.printAndWait([
        "음……",
        kitaru.sex,
        "이(가) 폐를 끼치지 않는 것 자체가 가장 큰 도움이다.",
      ]);
      await era.printAndWait([
        "하지만 이번 일은 ",
        kitaru.sex,
        "을(를) 더 알아갈 기회일지도 모른다.",
      ]);
      await era.printAndWait([
        "이를테면,",
        kitaru.sex,
        "이(가) 자주 입에 올리는 시라오키님은 ",
        kitaru.get_colored_name(),
        "에게 단순한 신앙 대상만은 아닌 듯하다.",
      ]);
      await kitaru.say_and_wait(
        "어! 시라오키님에 대해 더 알고 싶으세요!",
      );
      await kitaru.say_and_wait("음……");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "이(가) 무언가를 떠올린 듯 미간을 찌푸리고 숨이 조금 빨라지는 것을 보았다.",
      ]);
      era.printButton("「정 싫으면……」", 1);
      await era.input();
      await kitaru.say_and_wait("아뇨, 아뇨, 아뇨, 아뇨!");
      await kitaru.say_and_wait(
        "그냥 오늘은 아직 대길이 아니거든요! 준비가 필요해요!",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_42: (() => {
    const title = "이른바 시라오키님";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait("시라오키님.");
      await era.printAndWait([
        "이 신의 이름은 거의 온종일 ",
        kitaru.get_colored_name(),
        "의 입에 오른다.",
      ]);
      await era.printAndWait([
        "훈련이 잘되든 못되든, 날씨가 바뀌든, 지구가 자전하든,",
        kitaru.get_colored_name(),
        "은(는) 어떤 식으로든 ",
        kitaru.sex,
        "이(가) 말하는 시라오키님과 연결 짓고 만다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 여러 번 물었지만 돌아오는 것은 ",
        kitaru.sex,
        "의 불분명한 설명뿐이었다.",
      ]);
      await era.printAndWait("그러던 어느 날──");
      await you.say_and_wait("그러니까 나도 개운 도구라고?!");
      await kitaru.say_and_wait(
        "네! 하지만 신세 지는 사람은 행운을 부른다고 하잖아요!",
      );
      await era.printAndWait([
        kitaru.sex,
        "의 거의 애원하는 태도에,",
        you.get_colored_name(),
        "은(는) 어쩔 수 없이 ",
        kitaru.sex,
        "와(과) 개운 나들이를 하기로 약속했다.",
      ]);
      await kitaru.say_and_wait([
        "먼저 과자 가게예요! 여기서 ",
        callname,
        "의 운세를 점쳐 봐요!",
      ]);
      await kitaru.say_and_wait("대길!");
      await kitaru.say_and_wait("시작이 좋네요!");
      await kitaru.say_and_wait("다음은 저 잡화점이에요!");
      await kitaru.say_and_wait("이 달마 인형, 느낌이 아주 좋아요!");
      await kitaru.say_and_wait("오오! 벌써 눈이 그려져 있네요?");
      await era.printAndWait("거의 하루 종일 돌아다니며 상점가 구석구석을 구경했다.");
      await kitaru.say_and_wait(
        "에헤, 역시 마무리는 신사죠! 두 손을 모아 기도하고 오늘 하루 무사했음에 감사드려요!",
      );
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait("음, 할 일은 다 했어요!");
      await kitaru.say_and_wait([callname, "! 준비됐어요!"]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "이(가) 갑자기 고개를 숙이더니 각오를 다진 듯 ",
        you.get_colored_name(),
        "을(를) 바라보는 것을 보았다.",
      ]);
      await kitaru.say_and_wait([
        callname,
        ", 계속 시라오키님이 궁금하셨죠……?",
      ]);
      await kitaru.say_and_wait([
        "사실 그분은 ",
        kitaru.elder_sibling_sex_title,
        "이(가) 알려 준 신이에요!",
      ]);
      await era.printAndWait(
        "두 손으로 머리를 감싸 쥐어 원래도 부스스한 주황색 머리를 더욱 헝클어뜨린다. 스스로 기억을 떠올리려는 듯하다.",
      );
      await kitaru.say_and_wait([
        "어릴 때는 무엇이든 잘하는 ",
        kitaru.elder_sibling_sex_title,
        "와(과) 자주 비교당했어요.",
      ]);
      await kitaru.say_and_wait(
        "그때 저는 느렸고 게이트에서 나오는 것도 무서웠어요.",
      );
      await kitaru.say_and_wait([
        "하지만 ",
        kitaru.elder_sibling_sex_title,
        "은(는) 달랐어요.",
        kitaru.sex,
        "은(는) 정말 훌륭한 도주 주자였어요! 트레센에서 초청까지 왔었죠!",
      ]);
      await kitaru.say_and_wait([
        "저를 위로하려고,",
        kitaru.elder_sibling_sex_title,
        "은(는) 매번 대길이 나오는 점을 쳐 줬어요. 개운 도구도 이것저것 주었고요!",
      ]);
      await kitaru.say_and_wait([
        "시라오키님의 가호도요! ",
        kitaru.elder_sibling_sex_title,
        "은(는) 말했어요. 시라오키님의 가호가 있으면 행운이 찾아온다고!",
      ]);
      await kitaru.say_and_wait("그래서 저는 줄곧 시라오키님을 믿었어요!");
      await kitaru.say_and_wait("그런데……");
      await kitaru.say_and_wait(["그 뒤 ", kitaru.sex, "은(는) 돌아가셨어요."]);
      await kitaru.say_and_wait("그래서……");
      await kitaru.say_and_wait([
        kitaru.sex,
        "은(는) 늘 시라오키님이 저를 지켜 주시길 빌었는데……어쩌면 시라오키님은 ",
        kitaru.sex,
        "을(를) 지켜 주지 않으셨을지도 몰라요.",
      ]);
      await kitaru.say_and_wait("가끔 생각해요. 어쩌면……만약 제가……");
      await era.printAndWait([
        "처음에는 눈가에 빛이 맺히고, 그 뒤 한 방울, 두 방울. 눈물이 띄엄띄엄 ",
        kitaru.get_colored_name(),
        "의 발밑 돌바닥을 두드린다.",
      ]);
      await kitaru.say_and_wait([
        "죄송해요……제멋대로 이렇게 떠들어서,",
        callname,
        "은(는) 분명 제가 성가시겠죠……",
      ]);
      era.printButton("휴지를 건넨다", 1);
      await era.input();
      await kitaru.say_and_wait("음……");
      await kitaru.say_and_wait("고마워요……");
      await era.printAndWait([
        "눈물을 닦은 뒤,",
        kitaru.get_colored_name(),
        "은(는) 거세게 몇 번이고 고개를 저으며 평소의 미소를 되찾으려 한다.",
      ]);
      await kitaru.say_and_wait("울면 안 돼……울면 안 돼……");
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        "은(는) 제가 웃는 모습을 가장 좋아했어요……",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 끊임없이 중얼거리는 것을 들었다. 그 뒤 자책과 죄책감에 가까운 몸짓으로 제 귀와 꼬리를 잡아당긴다.",
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        "은(는) 거의 미친 듯이 자신이 울고 있다는 현실에서 도망치려 한다.",
      ]);
      await kitaru.say_and_wait("읏!");
      era.printButton("손을 뻗는다", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "을(를) 품에 안아 진정시키려 했다. 멈추지 않는 눈물에 ",
        you.get_colored_name(),
        "의 가슴께까지 크게 젖었다.",
      ]);
      era.println();
      await era.printAndWait([
        "인적 없는 신사에서,",
        you.get_colored_name(),
        "은(는) 말없이 ",
        kitaru.get_colored_name(),
        "의 머리를 계속 쓰다듬었다.",
        kitaru.sex,
        "의 떨림이 조금씩 잦아들 때까지.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = "선택받은 자";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait("다시 새해 첫 참배 철이 되었다.");
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          "관례대로 트레센 학원의 트레이너는 담당 ",
          kitaru.uma_sex_title,
          "와(과) 이 의식을 함께 치르는 경우가 많다.",
        ]);
      } else {
        await era.printAndWait([
          "트레센 내부 지침에는 분명히 쓰여 있다. 가급적 담당 ",
          kitaru.uma_sex_title,
          "와(과) 함께할 것.",
        ]);
      }
      await era.printAndWait([
        "미리 ",
        kitaru.get_colored_name(),
        "와(과) 일정을 정했는데도,",
        kitaru.sex,
        "은(는) 평소처럼 학원 정문에서 ",
        you.get_colored_name(),
        "와(과) 만나지 않았다.",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "이(가) 전에 말했던 대로, 원래 한산하던 신사에 지금은 조금 활기가 돌아왔다. 참배객이 두셋씩 모여 끊임없이 담소를 나눈다.",
      ]);
      await era.printAndWait(
        "이 신사의 무녀가 사람들을 위해 기도하는 춤이 시작되었다.",
      );
      await era.printAndWait("「둥!」");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 북소리를 들었고, 뒤이어 샤미센 소리가 더해졌다.",
      ]);
      await era.printAndWait([
        "공연은 시작됐는데,",
        kitaru.get_colored_name(),
        "의 모습은 아직 없다.",
      ]);
      await era.printAndWait("「찰랑!」");
      await era.printAndWait(
        "뒤이어 신악 방울이 울려 이 신사의 무녀가 등장했음을 알린다.",
      );
      await era.printAndWait([
        "무대 위의 ",
        kitaru.uma_sex_title,
        "이(가) 리듬감 있는 음악에 맞춰 춤추고 있다.",
      ]);
      await era.printAndWait(
        "이렇게 추운 날씨에도 주변의 환호는 조금도 줄지 않는다.",
      );
      await era.printAndWait([
        "한 해 동안 쌓인 피로와 고단함이, 무대 위 주황색 머리와 금빛 눈동자의 ",
        kitaru.uma_sex_title,
        "이(가) 추는 고요하고 아름다운 강신의 춤과 함께 소리 없이 벗겨져 간다.",
      ]);
      await era.printAndWait([
        "그렇다. 이른바 ",
        kitaru.uma_sex_title,
        "이란 살아 있는 현인신 같은 존재가 아닌가.",
      ]);
      await era.printAndWait([
        "다만,",
        you.get_colored_name(),
        "은(는) 지금 춤추는 현인신의 정체를 알고 있다.",
      ]);
      await era.printAndWait([
        "늦도록 모습을 보이지 않았던 ",
        kitaru.get_colored_name(),
        "본인이다.",
        kitaru.sex,
        "의 손에 든 신악 방울이 흔들릴 때마다 맑은 방울 소리가 주변과 기도하는 이들의 마음을 정화한다.",
      ]);
      await era.printAndWait([
        "평소에는 늘 덜렁대는 ",
        kitaru.sex,
        "이(가) 이렇게 엄숙한 표정을 짓다니,",
        you.get_colored_name(),
        "에게는 꽤 의외였다.",
      ]);
      era.drawLine({ content: "마치카네 후쿠키타루 집안의 신사, 카구라가 끝난 뒤" });
      await era.printAndWait([
        "벌써 동이 틀 무렵이다. 집안의 신사를 위해 분주히 뛰어다니던 ",
        kitaru.get_colored_name(),
        "이(가) 겨우 잠깐 쉴 수 있게 되었다.",
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        "그 녀석은 거의 멈추지 않고 ",
        you.get_colored_name(),
        "앞까지 달려와 무녀복의 긴 소매를 양옆으로 흔들었다.",
      ]);
      await kitaru.say_and_wait([
        "정말 정말 죄송해요! 모처럼 신사에 사람이 많은 날이라서요! 먼저 ",
        callname,
        "에게 말씀드렸어야 했는데!",
      ]);
      await kitaru.say_and_wait(
        "아버지가 이곳의 궁사시니까 저도 열심히 해야죠!",
      );
      await kitaru.say_and_wait("하지만 답례로……");
      await kitaru.say_and_wait("지금부터 무녀의 특별 응대 시간이에요!");
      era.printButton("「후쿠가 그렇게 말하면 다른 참배객들이 질투하지 않을까?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "네에?! ",
        callname,
        "은(는) 시라오키님께 선택받은 분이라고요!",
      ]);
      await era.printAndWait(
        "두 사람의 조용하고 단조로운 발소리가 신사에 울리다가 마침내 새전함 앞에 이르렀다.",
      );
      await kitaru.say_and_wait(["자! ", callname, "의 소원은 무엇인가요!"]);
      await kitaru.say_and_wait(
        "지금 제 영력은 최고조예요! 어떤 소원이든 이루어져요!",
      );
      await kitaru.say_and_wait("시라오키님의 목소리까지 들려요!");
      await era.printAndWait([
        "난초처럼 하얀 무녀복을 입은 ",
        kitaru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 손을 잡았다.",
      ]);
      era.printButton("「그렇다면 당연히 후쿠가 다음 아오바상에서 우승하는 거지.」", 1);
      await era.input();
      await kitaru.say_and_wait("어……");
      await kitaru.say_and_wait([callname, "의 소원이 그건가요?"]);
      await kitaru.say_and_wait("알겠어요! 열심히 할게요!");
      await kitaru.say_and_wait([
        "그럼! ",
        callname,
        ", 안녕히 가세요! 괜찮으시면! 내일도 오세요!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "을(를) 배웅한 뒤,",
        kitaru.get_colored_name(),
        "은(는) 신사에 있는 ",
        kitaru.sex,
        "의 거처로 돌아갔다.",
      ]);
      await era.printAndWait([
        "하지만,",
        you.get_colored_name(),
        "이(가) 신사의 주홍빛 도리이를 나섰을 때, 가슴 깊은 곳에서 알 수 없는 목소리가 울렸다.",
      ]);
      await era.printAndWait("그러더니 주변 세상이 거의 새하얗게 뒤덮였다.");
      era.drawLine({ content: '？？？' });
      await typing(
        "선택받은 자／선택된 자여, 너의／우리의 소망／뜻은 무엇인가?",
        kitaru.color,
      );
      era.println();
      era.printButton("고양되는 공기(모든 능력치+7)", 1);
      era.printButton("전율하는 기운(스피드+30)", 2);
      era.printButton("희미한 틈(스킬 Pt+40)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kitaru.print_and_wait("오감이 예민해진다……");
          break;
        case 2:
          await kitaru.print_and_wait("발끝을 살짝 디디자 가볍고 기분 좋다……");
          break;
        case 3:
          await kitaru.print_and_wait(
            "끈이 풀린다──창문이 열린다──열쇠가 기름을 친 듯 돌아간다……",
          );
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 정신을 차렸을 때는 이미 트레센으로 돌아가는 막차에 타고 있었다.",
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = "의식의 이론";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        "아오바상이 다가오면서 훈련 강도도 조금씩 낮아졌다.",
      );
      await era.printAndWait([
        "난간에 기대어 훈련장에서 땀 흘리는 ",
        kitaru.uma_sex_title,
        "들을 바라보며,",
        you.get_colored_name(),
        "은(는) 생각에 잠겼다.",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "이(가) 코스에 서는 이유는 다양하다.",
      ]);
      await era.printAndWait(["그렇다면 ", kitaru.get_colored_name(), "은(는)……"]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "의 말을 기억한다.",
      ]);
      await kitaru.say_and_wait(
        [
          "마치카네 후쿠키타루라는 이름의 ",
          kitaru.teen_sex_title,
          "! 행복을 이루기 위해! 신이 되기 위해! 운명에서 반드시 거쳐야 할 길이에요!",
        ],
        true,
      );
      await era.printAndWait(
        "국화상에 대한 그 영문 모를 집착은 대체 무엇일까.",
      );
      await era.printAndWait([
        "의문을 품은 ",
        you.get_colored_name(),
        "은(는) 그 녀석의 땀을 닦아 준 뒤, 다시 ",
        kitaru.get_colored_name(),
        "에게 그 질문을 던졌다.",
      ]);
      await kitaru.say_and_wait("어……저도 잘 기억나지 않아요.");
      await kitaru.say_and_wait("아마 누군가와의 약속인 것 같아요.");
      await era.printAndWait([
        "신사에서 무너져 울었던 뒤로,",
        you.get_colored_name(),
        "은(는) 더 이상 ",
        kitaru.get_colored_name(),
        "와(과) ",
        kitaru.elder_sibling_sex_title,
        "의 이야기를 하지 않았다. 가족 이야기도 가능한 한 피해 왔다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        kitaru.uma_sex_title,
        "에게 달리는 이유는 중요한 문제다.",
        kitaru.get_colored_name(),
        "의 인간관계를 생각하면,",
        kitaru.sex,
        "와(과) 약속을 나눌 만한 상대는……?",
      ]);
      era.printButton(`「${kitaru.elder_sibling_sex_title}와(과)?」`, 1);
      era.printButton("「시라오키님과?」", 2);
      await era.input();
      await kitaru.say_and_wait("그럴지도 모르겠네요……음.");
      await kitaru.say_and_wait(
        "일부러 떠올리려 하지 않으면 어릴 적 기억은 안개가 낀 것 같아요.",
      );
      await kitaru.say_and_wait([
        "그러고 보니,",
        callname,
        ", 비슷한 이야기를 들어 보신 적 있나요?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 땀을 머금은 뜨거운 수건을 옆에 두고, 일어나려는 ",
        kitaru.get_colored_name(),
        "을(를) 눌러 앉혔다.",
      ]);
      era.printButton("「무슨 이야기?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        "이(가) 제물이 되어 신이 된다거나요?",
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        "의 이야기로 조금 어두워졌던 얼굴이 갑자기 밝아졌다.",
      ]);
      await era.printAndWait([
        "급격한 화제 전환에,",
        you.get_colored_name(),
        "은(는) 전혀 따라갈 수 없다.",
      ]);
      era.printButton("「제물?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "신에게 선물을 바치는 의식이에요! ",
        kitaru.uma_sex_title,
        "에게는 달린 뒤에 얻는 승리야말로 그것이죠!",
      ]);
      await kitaru.say_and_wait(
        "책에도 달리기는 본래 삼여신에게 바치는 춤이라고 쓰여 있고요!",
      );
      await kitaru.say_and_wait("전에 집 다락방의 책에서 얼핏 봤어요……");
      await kitaru.say_and_wait(
        "적어도 제게는, 의식의 길에 국화상이 있다는 것만큼은 틀림없어요!",
      );
      await era.printAndWait([
        "그렇게 말하며 주위에 은밀한 기운을 더한 ",
        kitaru.get_colored_name(),
        "은(는) 다시 훈련으로 돌아갔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_aoba_sho: (() => {
    const title = "아오바상을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait("아오바상은 일본 더비의 트라이얼 레이스다.");
      await era.printAndWait([
        "그래서 일본 더비 출주권을 얻으려는 ",
        kitaru.uma_sex_title,
        "들이 많이 출전한다.",
      ]);
      await era.printAndWait(
        "패덕에서부터 다른 출주자들의 기세가 데뷔전과는 전혀 다르다.",
      );
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          "백전노장인 ",
          you.get_colored_name(),
          "에게도 상당한 중압감이었다.",
        ]);
      } else {
        await era.printAndWait([
          "트레이너인 ",
          you.get_colored_name(),
          "에게도 상당한 중압감이었다.",
        ]);
      }
      era.drawLine({ content: "도쿄 경기장 대기실 앞" });
      era.printButton("문을 연다", 1);
      await era.input();
      await era.printAndWait([
        "다시 레이스 전 대기실에 들어간다. 지난 데뷔전 때와 같은 ",
        kitaru.get_colored_name(),
        "을(를) 만나길 기대하며……",
      ]);
      await kitaru.say_and_wait("후……하! 후……하!");
      await era.printAndWait([
        "기대는 빗나갔다. 숨을 쉴 수 없는 사람처럼,",
        kitaru.sex,
        "은(는) 크게 숨을 몰아쉬고 있다.",
      ]);
      era.printButton("「종이봉투 필요해?」", 1);
      await era.input();
      await kitaru.say_and_wait(
        "아하하……괜찮아요! 괜찮아요!",
      );
      await kitaru.say_and_wait(
        "레이스 전에 친 점에서도 지금은 대길이라고 했으니까요!",
      );
      await kitaru.say_and_wait([
        "시라오키님……",
        callname,
        "……그리고 ",
        kitaru.elder_sibling_sex_title,
        '……',
      ]);
      await kitaru.say_and_wait("괜찮아요! 꼭 괜찮을 거예요!");
      await era.printAndWait([
        "이상하다……",
        kitaru.get_colored_name(),
        "의 반응은 지나치게 예민하다. 단순히 레이스 전의 긴장으로는 도저히 설명되지 않는다.",
      ]);
      await kitaru.say_and_wait(
        "네네! 괜찮아요. 이 뒤의 국화상에서도 이길 테니까요!",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "의 걱정을 알아차린 모양이다.",
        kitaru.get_colored_name(),
        "은(는) 화제를 돌리려 한다.",
      ]);
      await kitaru.say_and_wait(
        "마……맞아요, 앞으로의 국화상을 위해 전력을 다할게요!",
      );
      await era.printAndWait([
        "너무나 노골적인 자기 암시다.",
        kitaru.get_colored_name(),
        "에게 효과가 있으면 좋겠지만.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  aoba_sho_end: (() => {
    const title = "그림자 속의 복";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} rank レース着順
     */
    const f = async (kitaru, you, callname, rank) => {
      await era.printAndWait([
        "초반에는,",
        kitaru.get_colored_name(),
        "의 위치 선정과 주법 모두 훌륭했다. 평소의 ",
        kitaru.sex,
        "은(는) 덜렁대지만,",
        you.get_colored_name(),
        "의 가르침은 ",
        kitaru.sex,
        "이(가) 확실히 마음에 새겨 두었다.",
      ]);
      await era.printAndWait([
        "레이스가 종반에 접어들자,",
        kitaru.get_colored_name(),
        "도 가속을 시작했다. 도주하는 몇 명과의 거리가 급격히 줄어든다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 막판 가속은 상당히 뛰어나, 몇 마신의 차이가 순식간에 사라진다.",
      ]);
      await era.printAndWait("그런데──");
      if (rank === 1) {
        await era.printAndWait([
          "중계「무슨 일이죠!? ",
          kitaru.get_colored_name(),
          "의 자세가 눈에 띄게 무너지고 있습니다!」",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 방송에서 그렇게 들었다.",
        ]);
        await era.printAndWait([
          "확실히……도주 주자 한 명에게 가까워진 뒤,",
          kitaru.get_colored_name(),
          "의 주법은 갈수록 불안정해지고 얼굴도 험악해진다.",
        ]);
        await era.printAndWait([
          "기본 실력 덕에,",
          kitaru.get_colored_name(),
          "은(는) 그래도 1착으로 들어왔다. 하지만 스퍼트 타이밍도, 보폭도, 위치 선정 의식도 전혀 없었다. 방금의 ",
          kitaru.get_colored_name(),
          "은(는) ",
          kitaru.uma_sex_title,
          "로서의 본능만으로 달린 듯했다.",
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "이(가) 거의 비틀거리며 결승선을 통과한 뒤,",
          you.get_colored_name(),
          "은(는) 지체 없이 코스로 달려가 대기하던 의사에게 이상이 없음을 확인하고, 그대로 ",
          kitaru.sex,
          "을(를) 안아 대기실로 향했다.",
        ]);
      } else {
        await era.printAndWait([
          "중계「실속인가요!? ",
          kitaru.get_colored_name(),
          "의 속도가 갑자기 떨어졌습니다.」",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 방송에서 그렇게 들었다.",
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "이(가) 거의 비틀거리며 결승선을 통과한 뒤,",
          you.get_colored_name(),
          "은(는) 지체 없이 코스로 달려가 대기하던 의사에게 이상이 없음을 확인하고, 그대로 ",
          kitaru.sex,
          "을(를) 안아 대기실로 향했다.",
        ]);
      }

      era.drawLine({ content: "도쿄 경기장 대기실 안" });
      await kitaru.say_and_wait("에헤헤! 괜찮다고 했잖아요!");
      await era.printAndWait([
        "레이스가 끝나고 대기실 의자에 앉은 ",
        kitaru.get_colored_name(),
        "은(는) 두 발을 맨발로 드러내고 있다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 안심할 수 없어 결국 ",
        kitaru.sex,
        "에게 신발과 양말을 벗게 하고 자세히 살핀다──즉 촉진이다.",
      ]);
      await era.printAndWait(
        "드러난 흰 피부는 레이스 직후라 옅게 붉고, 발바닥의 선은 매끈하며 발가락은 갑자기 공기에 닿아 작게 떨린다.",
      );
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "에게 ",
        kitaru.get_colored_name(),
        "의 두 발을 감상할 여유는 없다. 방금의 이상이 골절이나 염좌가 아님을 거듭 확인할 뿐이다.",
      ]);
      await era.printAndWait("그렇다면 육체의 문제가 아니라면……");
      era.printButton("되짚어 본다", 1);
      await era.input();
      await era.printAndWait([
        "비슷한 장면이 있었다. 선발 레이스 때도 같았다. 다만 ",
        you.get_colored_name(),
        "은(는) 당시,",
        kitaru.get_colored_name(),
        "의 스퍼트 타이밍이 미숙할 뿐이라고 생각했다.",
      ]);
      era.printButton("「무슨 일이 있었어?」", 1);
      await era.input();
      await kitaru.say_and_wait("아……");
      era.printButton("「아까 종반 얘기야.」", 1);
      await era.input();
      await era.printAndWait([
        "아직 밝은 모습이던 ",
        kitaru.sex,
        "이(가) 다시 입을 다문다.",
      ]);
      await kitaru.say_and_wait("음……");
      await kitaru.say_and_wait("그만해요……");
      await era.printAndWait([kitaru.sex, "은(는) 피가 날 듯 입술을 꽉 다물었다."]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 이 ",
        kitaru.uma_sex_title,
        "의 입에서 거절을 들은 적이 거의 없었다.",
      ]);
      era.printButton("추궁을 멈추고 지금 있는 정보로 분석한다", 1);
      era.printButton("더 부드러운 말투로 계속 묻는다", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          "그렇다. 데뷔전과 달리 선발 레이스와 이번 아오바상에는 공통점이 있다.",
        );
        await era.printAndWait([
          "도주 ",
          kitaru.uma_sex_title,
          "의 수와 실력이 모두 평균을 웃돌았고,",
          kitaru.get_colored_name(),
          "은(는) 두 번 모두 종반에 도주 주자와 맞붙으며 이렇게 되었다.",
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 평소 모습까지 생각하면.",
        ]);
        await era.printAndWait("상당히 좋지 않다……");
        await era.printAndWait(
          "특정 장면에 자극받는 감정과 선택적 망각. 전형적인 PTSD 증상이다.",
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 더 부드러운 말투로 계속 물었다. 그런데──",
        ]);
        await kitaru.say_and_wait("아니야! 아니야! 내 탓이 아니야!");
        await kitaru.say_and_wait("제발요!");
        await era.printAndWait(
          "귀가 뒤로 누워 머릿속으로 파고들 듯하다. 본래 밝던 두 눈이 흐려진다.",
        );
        await era.printAndWait(
          [
            kitaru.get_colored_name(),
            '「',
            {
              color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
              content: "아아아아악!!!!!",
            },
            '」',
          ],
          {
            align: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        );
        await era.printAndWait("쾅!", {
          align: 'center',
          color: 'red',
          fontSize: '2.25rem',
          fontWeight: 'bold',
        });
        await era.printAndWait([
          "제대로 한 방. 과각성 상태에 빠진 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "에게 주먹을 날렸다.",
        ]);
        await era.printAndWait([
          "다행히,",
          you.get_colored_name(),
          "이(가) 바닥에 쓰러지는 것을 본 순간,",
          kitaru.uma_sex_title,
          "의 흐려진 두 눈이 겨우 맑아졌다.",
        ]);
        await kitaru.say_and_wait("아아앗! 정말 죄송해요!");
        await kitaru.say_and_wait([
          callname,
          "! 괜찮으세요! 지금 의사 불러올게요!",
        ]);
        await era.printAndWait([
          "큰일은 아닌가? ",
          you.get_colored_name(),
          "은(는) 알고 싶었던 것도 확실히 알아냈다.",
        ]);
        await era.printAndWait(
          "과도한 놀람 반응과 공격적인 행동. 전형적인 PTSD 증상이다.",
        );
      }
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 깊이 생각한다. 정신의 결함은 육체의 문제보다 훨씬 손이 많이 간다.",
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "에게 달리기에 대한 PTSD가 있다는 사실을 알게 되었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = "문턱 앞에서";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_2 サイレンススズカのプレイヤーへの呼び方
     * @param {PrintedSpan} s_call_k サイレンススズカのマチカネフクキタルへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (
      kitaru,
      suzuka,
      you,
      callname,
      callname_2,
      s_call_k,
      teem_count,
    ) => {
      await era.printAndWait([
        "휴일,",
        you.get_colored_name(),
        "은(는) 사무실에 앉아 생각에 잠겼다.",
      ]);
      await era.printAndWait([
        "처음에는 트레이너로서의 책임감만으로 ",
        kitaru.get_colored_name(),
        "와(과) 담당 계약을 맺었다.",
      ]);
      await era.printAndWait([
        "하지만 이 ",
        kitaru.teen_sex_title,
        "은(는) ",
        you.get_colored_name(),
        "의 생각보다 훨씬 손이 많이 간다.",
        you.get_colored_name(),
        "은(는) 카리브디스와 마주한 선장처럼 밑바닥 없는 골칫거리의 소용돌이에 빨려 들어가고 있다.",
      ]);
      await era.printAndWait([
        "특히 아오바상 이후,",
        kitaru.sex,
        "의 감정은 갈수록 불안정해졌다.",
      ]);
      await era.printAndWait([
        "훈련 중뿐 아니라 평소의 ",
        kitaru.get_colored_name(),
        "도 점점 안절부절못한다.",
      ]);
      await era.printAndWait([
        "병주하러 부른 도주 동급생을 상대할 때도,",
        kitaru.sex,
        "은(는) 종반이 되기 전에 속도가 떨어지고 만다.",
      ]);
      // サイレンススズカの差分は要るか？
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait([
          callname_2,
          '、',
          s_call_k,
          "은(는) 괜찮아?",
        ]);
        await era.printAndWait([
          "팀의 다른 멤버들도,",
          kitaru.get_colored_name(),
          "의 현재 상태를 알아차리고 있다.",
        ]);
      }
      await era.printAndWait("그렇다면 이제 어떻게 할까.");
      era.printButton("(앞으로 나아갈 수밖에 없다)", 1);
      await era.input();
      await era.printAndWait([
        "다른 답은 없겠지. 그 녀석은 ",
        you.get_colored_name(),
        "을(를) 운명의 사람이라고 부르니까.",
      ]);
      await era.printAndWait("일을 시작할 때다……");
      await era.printAndWait(
        "PTSD, 즉 외상 후 스트레스 장애. 흔한 원인은 자신이나 타인의 실제 죽음과 관련된 사건을 경험하거나 목격하거나 맞닥뜨리는 것이다.",
      );
      await era.printAndWait(
        "방어 기제로 뇌는 사건 당시의 기억을 자동으로 차단하거나 허구로 대체한다. 이른바 선택적 망각으로, 외상과 관련된 세부 사항을 떠올리지 못하게 된다.",
      );
      await era.printAndWait([
        "평소의 ",
        kitaru.get_colored_name(),
        "이(가) ",
        kitaru.teen_sex_title,
        "다운 밝음을 유지하다가,",
        kitaru.sex,
        "의 ",
        kitaru.elder_sibling_sex_title,
        "의 이야기만 나오면 슬픔이 새어 나오는 것도 그 때문이다.",
      ]);
      await era.printAndWait([
        "여기서 추측할 수 있다. 당시 코스의 풍경에 달릴 때의 긴장과 높은 압박이 겹쳐,",
        kitaru.get_colored_name(),
        "의 과각성을 유발했을 것이다.",
      ]);
      await era.printAndWait("즉, 외상을 재경험하는 증상이다.");
      await era.printAndWait([
        "그렇다면 어린 시절의 ",
        kitaru.get_colored_name(),
        "은(는) 대체 무엇을 겪은 것일까.",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "의 사고라면 지역 신문에 보도가 있을 것이다. 게다가 ",
        kitaru.get_colored_name(),
        "은(는) 이전에,",
        kitaru.elder_sibling_sex_title,
        "이(가) 트레센에 초청받았다는 사실도 흘렸다.",
      ]);
      await era.printAndWait([
        "조사 시작.",
        you.get_colored_name(),
        "은(는) 먼저……",
      ]);
      era.printButton("옛 신문을 읽는다", 1);
      era.printButton("트레센의 과거 신입생 자료를 살핀다", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          "거의 십 년 전의 신문은 어느 ",
          kitaru.uma_sex_title,
          "이(가) 훈련 중 사고로 사망했다고 전한다. 지역 신사 궁사의 딸이었기에 당시 꽤 소란이 일었다.",
        ]);
        await era.printAndWait(
          "그 신사의 참배객이 다른 곳보다 적은 이유도 대략 알겠다.",
        );
        await era.printAndWait([
          "사고 현장 사진에서,",
          you.get_colored_name(),
          "은(는) 낯익은 모습을 발견했다.",
        ]);
        await era.printAndWait([
          "사고 당시,",
          kitaru.get_colored_name(),
          "도 현장에 있었다.",
          kitaru.sex,
          "은(는) 자신의 ",
          kitaru.elder_sibling_sex_title,
          "이(가) 도주의 종반 스퍼트 속도 그대로 울타리에 부딪치는 것을 눈앞에서 보았다.",
        ]);
        await era.printAndWait([
          "뇌의 방어 기제가 진짜 기억을 묻어 두었더라도, 온 신경을 집중한 아오바상 코스에서 종반 직전 도주 주자가 스퍼트하는 낯익은 광경이 ",
          kitaru.get_colored_name(),
          "의 증상을 촉발하고 만 것이다.",
        ]);
      } else {
        await era.printAndWait([
          "사진에는,",
          kitaru.get_colored_name(),
          "와(과) 어딘가 닮은 긴 머리의 ",
          kitaru.uma_sex_title,
          "이(가) 찍혀 있다.",
        ]);
        await era.printAndWait([
          "뛰어난 도주 주자였고 트레센에서도 ",
          kitaru.sex,
          "에게 초청장이 왔었다.",
        ]);
        await era.printAndWait([
          "트레센의 자료 보관 상태가 아직 양호한 덕에, 지금은 그 초청장 사본과 관련 자료가 ",
          you.get_colored_name(),
          "의 손에 있다.",
        ]);
        await era.printAndWait(
          "국화상을 목표로 삼은 도주 주자……하지만 그 뒤 훈련 중 사고로 사망했다.",
        );
        await era.printAndWait([
          "사고 당시,",
          kitaru.get_colored_name(),
          "도 현장에 있었다.",
          kitaru.sex,
          "은(는) 자신의 ",
          kitaru.elder_sibling_sex_title,
          "이(가) 도주의 종반 스퍼트 속도 그대로 울타리에 부딪치는 것을 눈앞에서 보았다.",
        ]);
        await era.printAndWait([
          "뇌의 방어 기제가 진짜 기억을 묻어 두었더라도, 온 신경을 집중한 아오바상 코스에서 종반 직전 도주 주자가 스퍼트하는 낯익은 광경이 ",
          kitaru.get_colored_name(),
          "의 증상을 촉발하고 만 것이다.",
        ]);
      }
      era.println();
      await era.printAndWait("「똑! 똑! 똑!」");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 사무실 문을 두드리는 소리를 들었다.",
      ]);
      era.printButton("「들어와!」", 1);
      await era.input();
      await era.printAndWait([
        "문이 열린다.",
        you.get_colored_name(),
        "에게 한참 손이 가게 했던 담당이 겁먹은 듯 입구에 서 있다. 겁에 질린 새끼 여우 같다.",
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait([
        "저기, 이건 ",
        callname,
        "에게 드리는 개운 도구예요!",
      ]);
      await era.printAndWait([
        "뚜렷한 사과의 마음을 담은 주황색 부적이 ",
        you.get_colored_name(),
        "의 책상에 놓였다.",
      ]);
      await kitaru.say_and_wait("저……드릴 말씀이……");
      await kitaru.say_and_wait(
        "아무튼! 아오바상 일은 정말 죄송해요!!!",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 이쪽으로 숙인 ",
        kitaru.sex,
        "의 머리를 쓰다듬었다.",
        kitaru.sex,
        "의 귀가 다시 기쁘게 ",
        you.get_colored_name(),
        "의 손등을 두드릴 때까지.",
      ]);
      await era.printAndWait("분위기는 다시 평소처럼 부드러워졌다.");
      await kitaru.say_and_wait([
        "그럼 ",
        callname,
        "! 다음 레이스 훈련 일정은요?",
      ]);
      await era.printAndWait([
        "예정대로라면 곧바로 일본 더비에 출전할 터였다. 하지만 지금의 ",
        kitaru.get_colored_name(),
        "이라면 제대로 완주할 수 있을지조차 의심스럽다.",
      ]);
      await kitaru.say_and_wait("취소하는 건가요!?");
      await era.printAndWait([
        kitaru.sex,
        "은(는) 말없이 있는 ",
        you.get_colored_name(),
        "의 얼굴에서 무언가 읽어 낸 듯하다. 눈동자에 불안이 흔들린다.",
      ]);
      era.printButton("고개를 끄덕인다", 1);
      await era.input();
      await era.printAndWait([
        "「취소할지도 몰라.」라고 ",
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "에게 전했다.",
      ]);
      await kitaru.say_and_wait("네에에?!");
      await kitaru.say_and_wait("괜찮아요, 꼭 괜찮을 거예요!");
      await kitaru.say_and_wait("저 레이스에 나갈 수 있어요!");
      await era.printAndWait([
        "비위를 맞추듯 ",
        you.get_colored_name(),
        "에게 다가가 몇 번이고 ",
        you.get_colored_name(),
        "에게 애원을 거듭한다.",
      ]);
      await era.printAndWait([
        "이게 정말 ",
        kitaru.get_colored_name(),
        "인가. 보호소에서 새 주인에게 있는 힘껏 자신을 어필하는 반려동물에 더 가깝다.",
      ]);
      era.printButton("「후쿠, 뭐가 무서워?」", 1);
      await era.input();
      await kitaru.say_and_wait("네?!");
      await kitaru.say_and_wait("아니에요!");
      await kitaru.say_and_wait("그냥……저기……");
      await kitaru.say_and_wait("하아……");
      await kitaru.say_and_wait([
        callname,
        "은(는) 분명 제가 쓸모없다고 생각하시겠죠. 늘 시끄럽기만 하고, 이제는, 이제는 레이스도 못 달리게 될 것 같아요.",
      ]);
      if (teem_count >= 2) {
        await kitaru.say_and_wait("다른 담당보다 이렇게 못나서……");
      } else {
        await kitaru.say_and_wait([
          "첫 담당이 저 같은 ",
          kitaru.uma_sex_title,
          "이라니, 대흉이죠.",
        ]);
      }
      await kitaru.say_and_wait([
        callname,
        "은(는) ",
        kitaru.elder_sibling_sex_title,
        "다음으로 저를 인정해 준 분이에요……",
      ]);
      await kitaru.say_and_wait("그런데 이렇게 쓸모없어서……");
      await kitaru.say_and_wait("저, 저 정말 무서워요……");
      await kitaru.say_and_wait([
        callname,
        "도,",
        kitaru.elder_sibling_sex_title,
        "처럼 저만 남겨 놓고 가 버리실 건가요?",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 목소리는 얼음 구덩이에서 들려오는 것 같다.",
      ]);
      await era.printAndWait([
        "곧 여름인데도 지금 사무실의 공기는 ",
        you.get_colored_name(),
        "의 피부를 얼린다. 유리에 서리가 내린 듯하다.",
      ]);
      era.printButton("「후쿠, 처음 만났을 때 했던 의식 기억해?」", 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), "은(는) 손을 내밀었다."]);
      await kitaru.say_and_wait("네, 손가락 걸기예요!");
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        "이(가) 알려 줬어요. 그때,",
        kitaru.sex,
        "와(과) 약속하고……",
      ]);
      await kitaru.say_and_wait("아오바상 종반에……전부 떠올랐어요……");
      await kitaru.say_and_wait([
        "지금 국화상을 목표로 삼은 것도,",
        kitaru.sex,
        "와(과)의 약속이에요.",
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        "와(과)의 약속인가. 그래서 ",
        kitaru.get_colored_name(),
        "은(는) 국화상을 그토록 중요하게 여겼던 것이다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 목소리는 점점 낮아지고, 울음을 참느라 쉬어 간다.",
      ]);
      await era.printAndWait([
        "연구에서도 강한 압박을 받는 사람일수록 미신적인 행동을 보이기 쉽다고 한다. 상황을 다시 자기 손에 넣으려 하기 때문이다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "에게는 일찍 세상을 떠난 ",
        kitaru.elder_sibling_sex_title,
        ", 딸을 잃고 엄해진 어머니, 신사에 가득한 신비주의.",
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        "이(가) 평소 위로하는 데 쓰던 시라오키님은 틀림없이 ",
        kitaru.sex,
        "이(가) 붙든 구명의 지푸라기가 되었다.",
      ]);
      await era.printAndWait([
        "그럼에도 ",
        kitaru.sex,
        "이(가) 평소의 밝고 낙천적인 겉모습을 유지하면서 가끔 ",
        you.get_colored_name(),
        "와(과) 있을 때만 약간의 위화감을 드러내는 정도라면 이미 대길이라 해도 좋다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 이쪽을 바라보고 있다. 눈물로 초점이 흐려진 눈동자는 어디 있는지 모를 시라오키님의 대답을 갈구하는 것 같기도 하다.",
      ]);
      await era.printAndWait([
        "그러니 지금이야말로,",
        you.get_colored_name(),
        "이(가) 담당을 현실로 끌어당길 차례다.",
      ]);
      era.printButton("「안 그래!」", 1);
      await era.input();
      era.printButton("「후쿠, 나는 널 버리지 않아!」", 1);
      await era.input();
      era.printButton("「처음처럼 약속하자!」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "에게 잡힌 오른손을 간신히 빼내 주먹을 쥐고 새끼손가락을 내밀었다.",
      ]);
      era.printButton(
        "「헤맬 때, 괴로울 때는 나를 떠올려. 같이 짊어질게. 나도 네가 달리는 이유 중 하나가 되게 해 줘!」",
        1,
      );
      await era.input();
      await kitaru.say_and_wait("으……");
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        kitaru.sex,
        "은(는) 떨리는 새끼손가락을 내밀어, 그때 신사 앞과 다름없는 손가락 걸기를 마쳤다.",
      ]);
      await kitaru.say_and_wait("에헤……");
      await era.printAndWait([
        "호박빛 눈동자가 흔들리며,",
        you.get_colored_name(),
        "이(가) ",
        kitaru.sex,
        "을(를) 바라보는 눈을 비춘다.",
      ]);
      era.printButton("「왜 그래!」", 1);
      await era.input();
      await era.printAndWait([
        kitaru.sex,
        "은(는) 너무나 진지한 ",
        you.get_colored_name(),
        "의 얼굴을 보고 문득 눈물 어린 채 웃었다.",
      ]);
      await kitaru.say_and_wait([
        "아뇨……저기……그냥……그때 점친 운명의 사람이 ",
        callname,
        "이라서 정말 다행이라고요!",
      ]);
      await kitaru.say_and_wait(
        "운명의 사람이 그렇게까지 말해 줬는데 제가 일본 더비를 취소하면 참배하러 가면서 공물을 안 가져가는 것과 같잖아요?",
      );
      await kitaru.say_and_wait([callname, "! 저를 믿어 주세요!"]);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = "일본 더비를 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 강한 요청으로 예정대로 일본 더비에 출전하게 되었다.",
      ]);
      await era.printAndWait([
        "동기 중 뛰어난 ",
        kitaru.uma_sex_title,
        "은(는) 거의 모두 출주 등록을 했다. 인기순으로 보면,",
        kitaru.get_colored_name(),
        "은(는) 언론에서 「참가에 의의가 있다」고 평가하는 눈에 띄지 않는 한 명에 불과하다.",
      ]);
      await era.printAndWait(
        "아오바상에서 갑자기 속도가 떨어진 것을 비판한 언론도 한두 곳이 아니었다.",
      );
      era.drawLine({ content: "도쿄 경기장 대기실 앞" });
      era.printButton("문을 연다", 1);
      await era.input();
      await era.printAndWait([kitaru.sex, "은(는) 방 안에 서 있다."]);
      await era.printAndWait(
        "얼핏 세일러복처럼 보이지만 무녀복처럼 양어깨를 일부러 드러내는 옷이다. 진홍빛 옷깃은 형태가 뚜렷한 가슴 사이로 눈에 띄게 늘어져 있다.",
      );
      await era.printAndWait(
        "아래는 풍만한 엉덩이를 간신히 가리는 주름치마와 긴 다리의 선을 그리는 흰 스타킹. 무녀임을 나타내는 에마와 염주, 등에는 행운의 마네키네코.",
      );
      await era.printAndWait([
        "이것이 ",
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.uma_sex_title,
        "의 승부복이다. 귀여움, 활기, 요염함, 신비로움. 그 모든 것이 이 한 벌에 조화롭게 담겨 있다.",
      ]);
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait("괜찮다고 말씀드리고 싶은데……하지만……");
      await kitaru.say_and_wait(
        "패덕에서 팬들의 응원만 들었는데 벌써 긴장돼요.",
      );
      await kitaru.say_and_wait(["하지만……", callname, '！']);
      await era.printAndWait([
        "주황색 머리의 ",
        kitaru.teen_sex_title,
        "은(는) 깊이 숨을 들이마시고 돌아서서 ",
        you.get_colored_name(),
        "에게 가능한 한 환한 미소를 보였다.",
      ]);
      await kitaru.say_and_wait("가장 운 좋은 말이 더비를 차지하는 거예요!");
      await kitaru.say_and_wait([
        "행운이라면! 시라오키님과 ",
        callname,
        "의 이중 가호를 받는 저는 무적이에요!",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "은(는) ",
        you.get_colored_name(),
        "에게 엄지를 치켜들었다. 지난번 약속 이후,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "의 태도가 꽤 달라졌음을 알 수 있다.",
      ]);
      await era.printAndWait([
        "적어도 ",
        you.get_colored_name(),
        "와(과) 함께 있을 때의 미소는 전처럼 틀에 박히지 않았다.",
      ]);
      era.printButton("「완전히 불타 버리진 않았으면 해.」", 1);
      await era.input();
      era.printButton("「무사히 돌아와!」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait(["저는,", callname, "에게 약속했으니까요!"]);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait([
          "하지만 ",
          callname,
          "도 개운 에너지를 주세요!",
        ]);
        await era.printAndWait([
          "그렇게 말하며 승부복 차림의 ",
          kitaru.get_colored_name(),
          "이(가) 갑자기 앞에서 ",
          you.get_colored_name(),
          "의 몸을 끌어안았다.",
        ]);
        await era.printAndWait([
          "푹신한 주황색 머리카락이 ",
          you.get_colored_name(),
          "의 가슴에 비벼진다.",
        ]);
        await era.printAndWait([
          "잠시 뒤 만족한 ",
          kitaru.get_colored_name(),
          "이(가) 겨우 고개를 들어 ",
          you.get_colored_name(),
          "을(를) 바라봤다.",
        ]);
      }
      await kitaru.say_and_wait([callname, ", 아세요?"]);
      await kitaru.say_and_wait(
        "의식에서는 말의 무게가 아주 중요해요!",
      );
      await kitaru.say_and_wait("그러니까 약속한 일은! 반드시 해내겠어요!");
      await era.printAndWait([
        "말을 마치고 마네키네코 배낭 끈을 고쳐 멘 ",
        kitaru.get_colored_name(),
        "은(는) 코스를 향해 몸을 돌렸다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = "서광";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait(
        "종반에 접어들었어요. 모두 스퍼트를 시작하고 앞의 도주 주자들도 가속해요!",
      );
      await kitaru.print_and_wait("머리가 아파요……");
      await kitaru.say_and_wait("그……그만해!");
      await kitaru.print_and_wait([
        "그날, 주황색 긴 머리의 ",
        kitaru.uma_sex_title,
        "이(가) 스퍼트를 시작하는 걸 봤어요.",
      ]);
      await kitaru.say_and_wait("그만해!");
      await kitaru.print_and_wait("쾅!!!");
      await kitaru.print_and_wait("드러난 뼈, 휘어진 울타리, 붉게 물든 잔디.");
      await kitaru.say_and_wait("그만해애애!");
      await kitaru.print_and_wait(
        "바닷속으로 떨어진 듯, 얼음 구덩이에 빠진 듯. 두 발이 진흙에 잠겨요.",
      );
      await you.say_as_passer_by_and_wait("중계", [
        kitaru.get_colored_name(),
        '、',
        kitaru.get_colored_name(),
        "은(는) 또 속도가 떨어지는 건가요?",
      ]);
      await kitaru.say_and_wait([callname, "……실망시킬지도 몰라요."]);
      await kitaru.print_and_wait([
        "울타리에 기댄 ",
        kitaru.uma_sex_title,
        "이(가) 입을 여는 것을 보기 전까지는.",
      ]);
      await kitaru.say_as_unknown_and_wait("후쿠……");
      await kitaru.say_as_unknown_and_wait("약속하자.");
      await kitaru.say_as_unknown_and_wait(
        "나중에 후쿠가 국화상을 달리는 모습을 볼 테니까!",
      );
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await kitaru.say_and_wait("음……약속.");
      await kitaru.say_and_wait([
        "그래, 약속……",
        callname,
        "에게도 약속했어요!",
      ]);
      await kitaru.say_and_wait("무사히 돌아가겠다고!");
      await kitaru.say_and_wait("지금은 신에게 달리기를 바칠 때예요!");
      await you.say_as_passer_by_and_wait("중계", [
        "아니, 빠릅니다! 빨라요! ",
        kitaru.sex,
        "이(가) 스퍼트를 시작했습니다!",
      ]);
      await kitaru.say_and_wait([callname, "이(가) 곁에 있는 저는 대길이에요!"]);
      era.drawLine({ content: "도쿄 경기장 대기실 안" });
      await kitaru.say_and_wait(["후……", callname, ", 치고 나갑니다!"]);
      await kitaru.say_and_wait(
        "네! 살아 있어요! 아무튼 지금은 정말 행복해요! 정말 충만해요!",
      );
      await kitaru.say_and_wait("복이 왔어요!");
      era.printButton("「수고했어. 고마워!」", 1);
      await era.input();
      await kitaru.say_and_wait("어, 그렇게까지 말씀하지 않으셔도 돼요!");
      await kitaru.say_and_wait("제가 할 수 있는 일을 했을 뿐이에요!");
      await kitaru.say_and_wait("그림자 속에서 빠져나왔어요!");
      era.printButton("「그럼 다음은 국화상인가?」", 1);
      await era.input();
      await kitaru.say_and_wait("국화상을 달리겠어요!");
      await kitaru.say_and_wait("네! 국화상이에요!");
      await kitaru.say_and_wait("조금 어려울지도 모르지만……");
      await kitaru.say_and_wait([
        "그래도 저와 ",
        callname,
        "이라면 분명 괜찮을 거예요!",
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 PTSD는 잠시 사라졌다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = "개운의 투사";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} join_toky_yus フクキタルが日本ダービーに出走したか
     */
    const f = async (kitaru, you, callname, join_toky_yus) => {
      await era.printAndWait([
        "훈련 중 휴식 시간,",
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "은(는) 난간에 기대어 두서없이 이야기하고 있다.",
      ]);
      await kitaru.say_and_wait("저기……국화상……아무리 생각해도 무리예요.");
      await kitaru.say_and_wait("그렇게 긴 거리는 달려 본 적 없어요.");
      await kitaru.say_and_wait("하지만 그 전에 고베 신문배도 달려야 하죠.");
      await kitaru.say_and_wait(
        "지금까지 모은 팬 수로는 국화상은 좀 힘들어서요……",
      );
      era.printButton("「불안해 보이네?」", 1);
      await era.input();
      await kitaru.say_and_wait("네……");
      await kitaru.say_and_wait("점을 쳐도 결과가 안 나와요……");
      await kitaru.say_and_wait([
        "하지만 이건 제 ",
        kitaru.elder_sibling_sex_title,
        "와(과)의 약속이에요! 꼭 지킬 거예요!",
      ]);
      await kitaru.say_and_wait([
        "손가락을 걸고,",
        kitaru.sex,
        "에게 약속했으니까요!",
      ]);
      if (join_toky_yus) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 일본 더비 종반 스퍼트는,",
          you.get_colored_name(),
          "의 기억에 남아 있다. 아무래도 ",
          kitaru.sex,
          "은(는) 마음의 막힌 곳에서 완전히 빠져나온 듯하다.",
        ]);
      }
      await era.printAndWait([
        "게다가 이 종반의 폭발력을 잘 활용하면,",
        kitaru.sex,
        "의 비책을 이룰 열쇠가 될 것이다.",
      ]);
      era.printButton("「훈련 계속할 수 있겠어?」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait([
        "음……왜냐하면 ",
        callname,
        "이(가) 곁에 계시니까요!",
      ]);
      await kitaru.say_and_wait([
        callname,
        "은(는) 제 최강의 개운 도구예요!",
      ]);
      await kitaru.say_and_wait(
        "운명의 사람이 곁에 있다면! 저는 무적일 거예요!",
      );
      await era.printAndWait("농담처럼 들리는가?");
      await era.printAndWait([
        "아니,",
        you.get_colored_name(),
        "은(는) 알 수 있다.",
        kitaru.sex,
        "이(가) 이 말을 했을 때는 진심이었다.",
      ]);
      await era.printAndWait("PTSD 치료법 중 하나로 정신분석 치료가 있다.");
      await era.printAndWait(
        "그 이론적 틀 중 하나가 다양한 감정적 유대를 설명하는 애착 이론이다.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "의 추론이 맞다면,",
        kitaru.get_colored_name(),
        "은(는) 조금씩 ",
        you.get_colored_name(),
        "을(를) 비롯한 개운 도구들을,",
        kitaru.sex,
        "이(가) 여기까지 올 수 있었던 정신적 버팀목, 즉 자기 의지의 투사로 여기기 시작한 것이다.",
      ]);
      await era.printAndWait("이건……좋은 일일까.");
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = "여름 합숙(클래식급)";
    /**
     * クラシック級とシニア級の夏季合宿で共通の開始イベント
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await era.printAndWait([
        "무더운 여름,",
        kitaru.get_colored_name(),
        "와(과) 함께 여름 합숙 장소로 향하는 장거리 버스에 올랐다.",
      ]);
      await era.printAndWait([
        "목덜미에 귀의 부드럽고 따뜻한 감촉이 전해진다.",
        kitaru.get_colored_name(),
        "은(는) 피곤해져서,",
        you.get_colored_name(),
        "의 어깨에 기대어 있다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 앞으로의 ",
        kitaru.sex,
        "의 훈련 계획을 생각하기 시작했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_32: (() => {
    const title = "지상에 내려온 별";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        "오늘은,",
        you.get_colored_name(),
        "이(가) ",
        kitaru.get_colored_name(),
        "와(과) 나들이하기로 약속한 날이다.",
      ]);
      await era.printAndWait([
        "배로 도착했을 때부터,",
        kitaru.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "의 손을 잡아끌고 그리 넓지도 않은 섬을 누비고 있다.",
      ]);
      await era.printAndWait([
        "국화상을 목표로 하는 ",
        kitaru.sex,
        "의 체력이 부족할 리는 없고, 불과 몇 시간 만에 ",
        you.get_colored_name(),
        "쪽은 이미 녹초가 되었다.",
      ]);
      await era.printAndWait("어느새 해 질 녘. 슬슬 돌아갈 때다.");
      await era.printAndWait("하지만……");
      await kitaru.say_and_wait([callname, "! 이쪽, 이쪽이에요!"]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 열의는 오히려 더해지고 있다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이라 해도 아침부터 지금까지 계속 이러는 것은 드물다.",
      ]);
      era.printButton("「이제 뭘 하고 싶은지 말해 봐.」", 1);
      await era.input();
      await kitaru.say_and_wait(["에헤헤! 역시 ", callname, '！']);
      await kitaru.say_and_wait("한 번에 꿰뚫어 보셨네요!");
      await kitaru.say_and_wait("저기! 오늘 밤 유성우가 내린대요!");
      await kitaru.say_and_wait([callname, "와(과) 같이 보고 싶어서요!"]);
      era.printButton("「처음부터 말하면 됐잖아.」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "우으……",
        callname,
        "에게 거절당하면 오늘 하루가 대흉이 되잖아요!",
      ]);
      era.drawLine({ content: "무인도, 몇 시간 후" });
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 급히 피운 모닥불이 타닥타닥 소리를 낸다.",
      ]);
      await kitaru.say_and_wait([
        "오오옷! ",
        callname,
        ", 보세요! 유성우예요!",
      ]);
      await kitaru.say_and_wait(
        "들은 바로는 제가 아직 엄마 배 속에 있을 때, 아빠와 엄마도 여기서 유성우를 보셨대요!",
      );
      await kitaru.say_and_wait(
        "그러니까! 오늘 저는 마치카네 후쿠키타루가 아니에요! 마치카네 호시키타루예요!",
      );
      await kitaru.say_and_wait(
        "저기, 맞아요. 유성우에는 어떤 의식이 좋을까요?",
      );
      era.printButton("「달리기」(스피드+25)", 1);
      era.printButton("「소원 빌기」(스킬 Pt+20)", 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await kitaru.say_and_wait("확실히 그렇네요!");
        await kitaru.say_and_wait("별하늘의 힘도 받을 수 있을지 몰라요.");
        await era.printAndWait([
          kitaru.sex,
          "은(는) 신발과 양말을 벗고 달리기 시작했다. 흰 맨발이 물보라를 일으키고, 뒤에서 흔들리는 꼬리가 이를 쓸어 넘겨 튄 물방울이 ",
          you.get_colored_name(),
          "의 옷자락까지 닿는다.",
        ]);
      } else {
        await kitaru.say_and_wait("소원, 말인가요?");
        await kitaru.say_and_wait("음……알겠어요!");
        await kitaru.say_and_wait("특별한 소원이랄 만큼 대단한 건 없지만요.");
        await era.printAndWait([kitaru.sex, "은(는) 눈을 감고 두 손을 모았다."]);
        await era.printAndWait([
          "주황색 머리의 ",
          kitaru.teen_sex_title,
          "은(는) 모닥불 빛 속에서 성당의 스테인드글라스에 그려진, 성스러운 빛에 보호받는 수녀처럼 청초했다.",
        ]);
      }
      if (era.get('love:56') >= 49) {
        era.drawLine({ content: "잠시 후" });
        if (ret[0] === 1) {
          await era.printAndWait([
            "달리기를 마치고 힘이 다한 ",
            kitaru.get_colored_name(),
            "이(가) ",
            you.get_colored_name(),
            "의 품에 쓰러졌다. 오늘 입은 셔츠는 의식으로 흠뻑 젖었고, 격렬한 움직임으로 붉어진 가슴의 굴곡이 비쳐 보인다.",
          ]);
          await era.printAndWait([
            kitaru.sex,
            "이(가) 감기에 걸리지 않도록,",
            you.get_colored_name(),
            "은(는) 자기 겉옷을 벗어 ",
            kitaru.sex,
            "에게 덮어 주었다.",
          ]);
          await kitaru.say_and_wait(["에헤헤,", callname, "의 냄새예요."]);
          await era.printAndWait([
            kitaru.sex,
            "이(가) ",
            you.get_colored_name(),
            "의 품에 파고들자 흐트러진 머리카락이 가슴을 간질이는 감촉이 전해진다.",
          ]);
        } else {
          await era.printAndWait([
            "기도를 마친 수녀가,",
            you.get_colored_name(),
            "의 품에 쓰러졌다. 흐트러진 머리카락이 가슴을 간질이는 감촉이 선명하게 느껴진다.",
          ]);
          await era.printAndWait([
            "그리고,",
            kitaru.sex,
            "의 부드러운 가슴이 가끔 ",
            you.get_colored_name(),
            "에게 눌리는 감촉. 본인은 지금 자신이 얼마나 요염한지 전혀 모르는 모양이다.",
          ]);
        }
        await kitaru.say_and_wait("저기, 오늘은 소원이 하나 더 있어요.");
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 보기에,",
          kitaru.get_colored_name(),
          "의 뺨은 살짝 붉다. 오늘 들뜬 탓일까.",
        ]);
        await kitaru.say_and_wait("저……");
        era.printButton("「읏!」", 1);
        await era.input();
        await era.printAndWait([
          "하루 종일 걸어 지친 ",
          you.get_colored_name(),
          "은(는) 반응이 늦었다.",
        ]);
        await you.say_and_wait("읏……");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 부드러운 입술이,",
          you.get_colored_name(),
          "의 입술에 포개졌다.",
        ]);
        await era.printAndWait([
          "입술 사이에서 흘러나오는 숨결과 침에,",
          kitaru.sex,
          "의 열기와 맛이 담겨 있다.",
        ]);
        await kitaru.say_and_wait("하아……");
        await kitaru.say_and_wait([callname, "와(과) 입 맞춰 버렸어요!"]);
        await kitaru.say_and_wait("후우……");
        await era.printAndWait([
          "끝난 뒤,",
          kitaru.sex,
          "의 숨결이 ",
          you.get_colored_name(),
          "의 귀를 쓰다듬는다.",
        ]);
        if (
          era.get('love:56') > 49 ||
          era.get('exp:56:性交次数') > era.get('exp:56:睡奸次数')
        ) {
          await era.printAndWait(["이대로 무언가 해야 할까."]);
          era.printButton("후쿠키타루를 눕힌다", 1);
          era.printButton("그만둔다(모든 능력치+1)", 2);
          ret.push(await era.input());
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kobe_hai: (() => {
    const title = "고베 신문배를 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 マチカネフクキタルのフジキセキへの呼び方
     */
    const f = async (kitaru, you, callname, call_5) => {
      await era.printAndWait([
        "지나치게 진지해 거의 무표정해진 ",
        kitaru.get_colored_name(),
        "이(가) 대기실 긴 의자에 앉아 있다.",
      ]);
      await era.printAndWait([
        "너무 반듯한 자세 탓에 체육복에 붙은 번호표의 곡선이 더욱 도드라진다. 흰 니삭스를 신은 다리는 딱 붙어 있고, 사타구니에는 요염한 선이 하나 생겨 있다.",
      ]);
      await era.printAndWait([
        "게다가……평소의 엉뚱한 모습을 떠올리자,",
        you.get_colored_name(),
        "은(는) 웃음을 참을 수 없었다.",
      ]);
      await kitaru.say_and_wait([callname, ", 뭘 웃으세요?"]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 여전히 진지한 척 ",
        you.get_colored_name(),
        "에게 묻는다. 그래도 입꼬리는 분명 한 번 움찔했다.",
      ]);
      era.printButton("「긴장했어?」", 1);
      await era.input();
      await kitaru.say_and_wait("아뇨, 여름 합숙에서 그렇게 준비했으니까요……");
      await era.printAndWait(
        "가슴의 번호표를 두어 번 잡아당겨 신경을 돌리려 한다.",
      );
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "이(가) 옆에 앉자,",
        kitaru.get_colored_name(),
        "의 진지한 표정이 무너졌다.",
      ]);
      await kitaru.say_and_wait("음……조금은요.");
      await kitaru.say_and_wait(
        "정말 어려운 건 앞으로라는 걸 아는데 벌써 조금 무서워져서요.",
      );
      await era.printAndWait([
        "몸을 기울여 ",
        you.get_colored_name(),
        "의 어깨에 기대자,",
        kitaru.get_colored_name(),
        "의 호흡이 조금 진정되었다. 이렇게 가까우니 신사처럼 서늘한 체향까지 전해진다.",
      ]);
      await kitaru.say_and_wait("킁……킁……");
      await kitaru.say_and_wait([
        call_5,
        "이(가) 말했어요. 서로의 냄새가 좋게 느껴지는 건 궁합이 좋다는 증거라고……",
      ]);
      await kitaru.say_and_wait("조금 진정됐어요……");
      await kitaru.say_and_wait([
        "그런데,",
        callname,
        "은(는) 약속을 어떻게 생각하세요?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 대답하기도 전에,",
        kitaru.teen_sex_title,
        "은(는) 혼자 이야기를 이어 갔다.",
      ]);
      await kitaru.say_and_wait(
        "제가 보기에는, 약속한 두 사람은 자기 운명의 일부를 상대에게 묶는 거예요.",
      );
      await kitaru.say_and_wait([
        "그러니까,",
        kitaru.elder_sibling_sex_title,
        "와(과) 약속한 저는 본래 ",
        kitaru.sex,
        "의 길을 걷고 있어요. 그러니까 제대로 달려야죠.",
      ]);
      await kitaru.say_and_wait("후우……");
      era.printButton("「앞으로는 후쿠 자신의 길도 보고 싶어.」", 1);
      await era.input();
      await kitaru.say_and_wait("앗!");
      await kitaru.say_and_wait("그런가요!?");
      await kitaru.say_and_wait("후우……우선 눈앞의 일부터 해야겠죠.");
      await kitaru.say_and_wait("아무튼 이제 나갈 시간이에요……");
      await kitaru.say_and_wait(["지켜봐 주세요,", callname, '！']);
      await kitaru.say_and_wait("국화상의 문을 열기 위해 전력을 다해 달릴게요!");
    };
    f.title = title;
    return f;
  })(),
  kobe_hai_win: (() => {
    const title = "맺음";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await you.say_as_passer_by_and_wait("중계", [
        kitaru.get_colored_name(),
        ", 따라잡을 수 있을까요!",
      ]);
      await you.say_as_passer_by_and_wait("중계", "빠릅니다! 빨라요! 너무나 빠릅니다!");
      await you.say_as_passer_by_and_wait("중계", "다섯 마신! 세 마신! 한 마신!");
      await you.say_as_passer_by_and_wait("중계", "제쳤습니다!");
      await you.say_as_passer_by_and_wait("중계", [
        "승자는 ",
        kitaru.get_colored_name(),
        '！',
      ]);
      await kitaru.print_and_wait(
        "두려움도 망설임도 없이, 평소의 훈련과 쌓아 온 노력을 종반에 모두 쏟아냈다.",
      );
      await kitaru.print_and_wait("아주 좋다. 그렇지 않은가?");
      era.drawLine({ content: "한신 경기장 대기실" });
      await kitaru.say_and_wait("후우!!!");
      era.printButton("「수고했어!」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait("이제 저도 완전히 익숙해진 거죠!?");
      await kitaru.say_and_wait("그럼 다음은 국화상이네요!");
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 대답하기도 전에,",
          kitaru.get_colored_name(),
          "은(는) 이미 ",
          you.get_colored_name(),
          "에게 달려들었다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 무릎에 앉아 땀에 젖은 머리를 수건으로 닦아 주길 기다린다.",
        ]);
        await era.printAndWait([
          "이윽고 품 안의 ",
          kitaru.uma_sex_title,
          "의 엉덩이가 안절부절못하며 비비기 시작하자,",
          you.get_colored_name(),
          "은(는) ",
          kitaru.get_colored_name(),
          "의 머리를 가볍게 두드려 가만히 있으라고 신호했다.",
        ]);
        await kitaru.say_and_wait("아얏!");
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 푹신한 꼬리를 비키고 옆의 가방에서,",
        kitaru.get_colored_name(),
        "에게 맞춰 짠 국화상 훈련 계획을 꺼냈다.",
      ]);
      await kitaru.say_and_wait([
        "오! 역시,",
        callname,
        ", 벌써 준비해 두셨네요!",
      ]);
      era.printButton("「무서워?」", 1);
      era.printButton("「실전에서 발목 잡지 마!」", 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait("물론이죠!");
      } else {
        await kitaru.say_and_wait("그럴 일 없어요!");
      }
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        "의 참배길은 제가 대신 끝까지 걸을 거예요!",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_39: (() => {
    const title = "두 세상 사이";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "국화상까지 앞으로 일주일.",
        you.get_colored_name(),
        "은(는) 알 수 있다. 요즘 ",
        kitaru.get_colored_name(),
        "은(는) 갈수록 열기를 띠고 있다.",
      ]);
      await era.printAndWait([
        "평소 훈련도 성실하게 소화한다. 하지만 지금의 ",
        kitaru.sex,
        "은(는) 시위를 너무 팽팽하게 당긴 활이다.",
      ]);
      await era.printAndWait([
        "레이스 전의 과부하는 대흉이다.",
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "에게 이틀의 휴식을 주었다.",
      ]);
      await kitaru.say_and_wait("하지만, 하지만! 국화상이 바로 코앞이라고요!");
      await kitaru.say_and_wait([
        "음, 그럼 ",
        callname,
        ", 함께 나가요.",
      ]);
      await kitaru.say_and_wait([
        "마침 계속 ",
        callname,
        "와(과) 가고 싶었던 곳이 있어요.",
      ]);
      era.drawLine({ content: "교외 묘지, 안쪽으로 이어지는 오솔길" });
      await era.printAndWait("버스를 타고 교외의 묘지에 왔다.");
      await era.printAndWait([
        "안으로 들어갈수록 늘 쾌활한 ",
        kitaru.get_colored_name(),
        "도 조용해지며 주변처럼 숙연해졌다.",
      ]);
      await kitaru.say_and_wait("도착했어요. 여기예요.");
      await era.printAndWait(
        "떡갈나무 아래 제법 큰 묘비 앞에서 후쿠키타루가 멈췄다.",
      );
      await era.printAndWait([
        "비석의 흑백 사진 속 ",
        kitaru.uma_sex_title,
        "은(는) ",
        kitaru.get_colored_name(),
        "와(과) 어딘가 닮았다. 다만 더 성숙해 보이는 긴 머리였다.",
      ]);
      await kitaru.say_and_wait([
        "음……제 ",
        kitaru.elder_sibling_sex_title,
        "예요.",
      ]);
      await kitaru.say_and_wait(
        "전에는 별로 오고 싶지 않았어요. 엄마가 부탁해도 자주 거절했죠.",
      );
      await kitaru.say_and_wait(
        "지금 생각하면 무의식적으로 무서워했던 것 같아요.",
      );
      await era.printAndWait([kitaru.sex, "은(는) 혼자 말을 이었다."]);
      era.printButton("「혼자 있고 싶어?」", 1);
      await era.input();
      await kitaru.say_and_wait("어!");
      await kitaru.say_and_wait("아니에요!");
      await kitaru.say_and_wait([callname, "이(가) 여기 계셔 주시면 돼요!"]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 목소리에는 작은 떨림이 있다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 보았다.",
        kitaru.sex,
        "의 두 손은 꽉 쥐어져, 손톱이 손바닥을 파고들 듯하다.",
      ]);
      await era.printAndWait([
        "그 뒤,",
        kitaru.sex,
        "은(는) 천천히 앞으로 나아갔다.",
      ]);
      await kitaru.say_and_wait([
        "저기,",
        kitaru.elder_sibling_sex_title,
        ". 지금의 ",
        callname,
        "을(를) 데리고 만나러 왔어요……",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 그 무덤에 말을 거는 것을 들었다. 장엄하다기보다 어딘가 편안하고,",
        kitaru.sex,
        "의 ",
        kitaru.elder_sibling_sex_title,
        "이(가) 아직 살아 있는 듯한 말투다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "와(과)의 만남부터 일본 더비, 고베 신문배의 승리까지.",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 세상을 떠난 ",
        kitaru.elder_sibling_sex_title,
        "에게 두 사람의 발자취를 전하는 것을 들었다.",
      ]);
      era.drawLine({ content: "잠시 후" });
      await kitaru.say_and_wait("다음 주는 국화상이에요!");
      await kitaru.say_and_wait(
        "모두 제대로 떠올리기까지 정말 오래 걸렸어요……",
      );
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        ", 약속대로 이길게요!",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = "국화상을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("드디어……약속대로……여기까지 왔어요!");
      await kitaru.say_and_wait("신사와 절도 많은 교토에서!");
      await kitaru.say_and_wait("국화를 상징으로 삼은 중요한 레이스!");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이(가) 3,000미터에 도전하는 것은 처음이다. 연옥 같은 장거리.",
      ]);
      await era.printAndWait(["당연히,", kitaru.sex, "은(는) 조금 긴장하고 있다."]);
      await era.printAndWait([
        kitaru.sex,
        "와(과) 국화상을 목표로 정했을 때부터,",
        you.get_colored_name(),
        "은(는) 그 집념을 느껴 왔다.",
        kitaru.elder_sibling_sex_title,
        "와(과)의 약속,",
        you.get_colored_name(),
        "와(과)의 약속. 그것이,",
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.teen_sex_title,
        "을(를) 여기까지 데려왔다.",
      ]);
      await era.printAndWait(["지금,", kitaru.sex, "의 목표는 눈앞에 있다."]);
      await kitaru.say_and_wait(["저기,", callname, '！']);
      era.printButton("「왜?」", 1);
      await era.input();
      await kitaru.say_and_wait("손을 잡아 주실래요?");
      await era.printAndWait([
        kitaru.teen_sex_title,
        "은(는) 조금 쑥스러운 듯,",
        you.get_colored_name(),
        "을(를) 바라봤다.",
      ]);
      await era.printAndWait([
        "갑작스러운 부탁이다. 또 ",
        kitaru.get_colored_name(),
        "이(가) 즉석에서 생각해 낸 의식이겠지.",
      ]);
      era.printButton("손을 내민다", 1);
      await era.input();
      await era.printAndWait([
        kitaru.uma_sex_title,
        "특유의 조금 높은 체온이 손바닥으로 전해진다.",
        you.get_colored_name(),
        "은(는) 알아차렸다.",
        kitaru.get_colored_name(),
        "의 얕은 호흡이 한결 차분해졌다.",
      ]);
      await kitaru.say_and_wait(
        "저기……지금 이런 이야기를 할 때는 아닐지도 몰라요.",
      );
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        "이(가) 돌아가신 뒤,",
        kitaru.sex,
        "대신 국화상을 달린다는 약속은 제게 너무 큰 꿈이었어요.",
      ]);
      await kitaru.say_and_wait([
        "그런데 여기까지 오게 되다니.",
        callname,
        "은(는) 제게 정말, 정말 하늘에서 온 사자나 다름없어요!",
      ]);
      await kitaru.say_and_wait("후우……");
      await kitaru.say_and_wait("에헤헤!");
      await kitaru.say_and_wait("역시 입 밖으로 내니 편해지네요!");
      await kitaru.say_and_wait(["그럼,", callname, ", 다녀올게요!"]);
      await kitaru.say_and_wait(
        "기다려 주세요……우리가 신들에게 승리를 바칠 테니까요!",
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = "운명의 도중";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} win_kobe_hai マチカネフクキタルが神戸新聞杯に勝ったか
     */
    const f = async (kitaru, you, callname, win_kobe_hai) => {
      await era.printAndWait("주자들이 제4코너로 들어선다. 레이스도 종반이다.");
      await era.printAndWait([
        "하지만 ",
        kitaru.get_colored_name(),
        "의 모습은 여전히 무리에 가려져 있고,",
        you.get_colored_name(),
        "은(는) 언뜻 보이는 밝은 주황색으로 대략적인 위치를 짐작할 수밖에 없다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 뛰어난 폭발력을 살리는 선입은 본래 타이밍이 까다롭다. 승패는 종이 한 장 차이다.",
      ]);
      await era.printAndWait([
        "이번 레이스는,",
        kitaru.get_colored_name(),
        "에게 대흉이 되는 것일까.",
      ]);
      await you.say_as_passer_by_and_wait(
        "중계",
        "제4코너를 지나, 이제 마지막 직선……",
      );
      await era.printAndWait(["막혔나. 그런데 결승선은 바로 눈앞이다."]);
      await era.printAndWait([
        "관찰하고, 정리하고, 결정하고, 움직인다. 지금 이 순환을 완수할 수 있는 것은 소용돌이 한가운데 있는 ",
        kitaru.get_colored_name(),
        "본인뿐이다. 관객석의 ",
        you.get_colored_name(),
        "에게는 손쓸 도리가 없다.",
      ]);
      await era.printAndWait(["기도하고 싶다. 문득 그런 생각이 든다."]);
      await era.printAndWait([
        "어쩌면 지금 ",
        you.get_colored_name(),
        "의 무력감은,",
        kitaru.elder_sibling_sex_title,
        "이(가) 요절했던 날의 ",
        kitaru.get_colored_name(),
        "와(과) 같을지도 모른다.",
      ]);
      await you.say_and_wait(
        "아니……지금 트레이너로서 할 수 있는 일이 있다.",
        true,
      );
      era.printButton("「후쿠!!!」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 목이 쉬도록 외쳤다.",
      ]);
      await era.printAndWait([
        "빠르게 달리는 ",
        kitaru.get_colored_name(),
        "에게 ",
        you.get_colored_name(),
        "의 목소리가 닿았는지는 모른다. 하지만 승리의 저울은 분명 ",
        kitaru.sex,
        "쪽으로 기울었다.",
      ]);
      await era.printAndWait([
        "성인이 바다를 갈랐듯, 혹은 아라비아의 소년이 주문으로 문을 열었듯, 그 주황색 번개가 무리를 갈랐다.",
      ]);
      await you.say_as_passer_by_and_wait("중계", [
        "──마치카네! ",
        kitaru.get_colored_name(),
        "! 복은 또 찾아올 것인가!?!?",
      ]);
      if (win_kobe_hai) {
        await you.say_as_passer_by_and_wait(
          "중계",
          "골인! 고베에 이어!!! 복은 국화의 무대에도 찾아왔습니다!!!",
        );
      } else {
        await you.say_as_passer_by_and_wait("중계", "골인!");
      }
      era.drawLine({ content: "교토 경기장, 국화상 후" });
      await kitaru.say_and_wait([callname, '！！']);
      await kitaru.say_and_wait("저……이겼어요! 이겼다고요……!");
      await era.printAndWait([
        "대기실에서 너무나 행복한 나머지 ",
        kitaru.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "의 품에 뛰어들어 꼭 끌어안았다.",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "이(가) 장거리를 달린 뒤의 뜨거운 체온과 가슴의 탄력 있는 부드러움이 땀에 젖은 세일러복 너머로, 포옹과 함께 ",
        you.get_colored_name(),
        "에게 전해진다.",
      ]);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait("이것도 전부 운명의 사람 덕분이에요!");
        await era.printAndWait([
          "그렇게 말하며,",
          kitaru.sex,
          "은(는) 고개를 들어 호박 같은 눈동자로 ",
          you.get_colored_name(),
          "을(를) 바라봤다.",
        ]);
        await kitaru.say_and_wait("맞아요!");
        await kitaru.say_and_wait("운명의 사람에게도 상을 드려야죠!");
        await era.printAndWait([
          "그리고,",
          you.get_colored_name(),
          "이(가) 눈을 크게 뜨는 사이,",
          kitaru.sex,
          "은(는) 살짝 까치발을 들었고 두 사람의 입술이 포개졌다.",
        ]);
        await era.printAndWait([
          "오컬트계 ",
          kitaru.teen_sex_title,
          "의 서늘한 체향과 공기 중에 퍼진 옅은 땀 냄새가,",
          you.get_colored_name(),
          "의 코를 채운다.",
        ]);
        await era.printAndWait("혀끝이 닿고, 다시 맞닿는다.");
        await era.printAndWait([
          "입술이 떨어진 뒤,",
          you.get_colored_name(),
          "은(는) 보았다.",
          kitaru.teen_sex_title,
          "의 작은 혀가 입가를 핥으며 침을 쏙 빨아들였다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) ",
          kitaru.get_colored_name(),
          "의 이렇게 적극적인 모습은 처음 본다.",
        ]);
      }
      await era.printAndWait([
        "국화상에서 이겼다.",
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.teen_sex_title,
        "은(는) 자신의 집념을 이루고, 행복을 좇는 운명의 길에서 큰 한 걸음을 내디뎠다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        kitaru.sex,
        "의 다음 발걸음은 어디로 향할까.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = "신격화";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, suzuka, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "은(는) 사무실에서 국화상 이후의 귀중한 휴식을 즐기고 있다.",
      ]);
      await era.printAndWait(
        "국화상이 끝나고 팽팽했던 줄은 겨우 느슨해졌다.",
      );
      await kitaru.say_and_wait([callname, ", 다음 레이스는 뭘로 할까요?"]);
      era.printButton("「후쿠는 달리고 싶은 레이스가 있어?」", 1);
      await era.input();
      await kitaru.say_and_wait("음……");
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        "의 그림자에서 벗어나 국화상을 달리겠다는 소망도 이루었다. 그런데 지금의 ",
        kitaru.get_colored_name(),
        "은(는) 오히려 갈피를 못 잡는 듯하다.",
      ]);
      await era.printAndWait([
        "소파에 늘어져 있던 ",
        kitaru.get_colored_name(),
        "이(가) 비틀비틀 일어났다.",
      ]);
      await era.printAndWait([
        "사무실 소파 위를,",
        kitaru.uma_sex_title,
        "다운 뛰어난 균형 감각으로 걷는다. 흰 천에 감싸인 작은 발이 번갈아 소파를 밟는다.",
      ]);
      if (era.get('cflag:2:招募状态') === 1) {
        await era.printAndWait("턱을 괴고 빙글빙글 돌고 있다.");
        await era.printAndWait([
          "생각할 때의 이 버릇을 보고,",
          you.get_colored_name(),
          "은(는) 다른 담당인 ",
          suzuka.get_colored_name(),
          "을(를) 떠올렸다.",
        ]);
      }
      await kitaru.say_and_wait(
        "굳이 말하자면 특별히 달리고 싶은 레이스는 없을지도요?",
      );
      await kitaru.say_and_wait(
        "이대로 재팬컵이랑 아리마 기념, 둘 다 가져올까요?",
      );
      era.printButton("「그건 너무 욕심내는 거 아냐!」", 1);
      await era.input();
      await kitaru.say_and_wait(["그럼,", callname, "의 지시에 따를까요?"]);
      await era.printAndWait([
        "무척 태연하게 말한다. 레이스가 ",
        kitaru.sex,
        "와(과) 상관없다는 듯한 말투다.",
      ]);
      await kitaru.say_and_wait("하아……");
      await era.printAndWait([
        "하품을 하더니,",
        kitaru.get_colored_name(),
        "이라는 이름의 ",
        kitaru.uma_sex_title,
        "은(는) 사무실 한가운데 산더미처럼 쌓인 개운 도구로 그대로 뒤로 넘어졌다.",
      ]);
      await era.printAndWait("바스락!");
      await era.printAndWait([
        "무엇이 들었는지 모를 종이 상자 몇 개가 누운 ",
        kitaru.get_colored_name(),
        "에게 밀려난다.",
      ]);
      await era.printAndWait([
        "몸을 조금 고쳐 누워 레이스 뒤에 사들인 잡동사니 산에 편안히 자리 잡은 뒤,",
        kitaru.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "을(를) 바라봤다.",
      ]);
      await kitaru.say_and_wait(
        "운세가 정점에 이른 저라면 반드시 승리를 바칠 수 있어요!",
      );
      await kitaru.say_and_wait(
        "어서 지시해 주세요! 제게 행운을 주는 운명의 사람!",
      );
      await era.printAndWait([
        "칼산이나 불바다라도 최강의 개운 도구인 ",
        you.get_colored_name(),
        "이(가) 대길이라고 하면,",
        kitaru.get_colored_name(),
        "은(는) 망설임 없이 뛰어들지 않을까.",
      ]);
      era.printButton("「내년의……킨코상?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "내년 봄인가요.",
        callname,
        ", 꽤 먼 레이스를 고르셨네요.",
      ]);
      await era.printAndWait([
        "개운 도구 산에 누운 채,",
        kitaru.teen_sex_title,
        "은(는) 나른한 목소리로 대답하고는 작게 코를 골며 잠들었다.",
      ]);
      await era.printAndWait([
        "확실히 먼 레이스다. 하지만 올해 이렇게 빽빽한 일정을 소화한 ",
        kitaru.get_colored_name(),
        "에게는 한 번 쉰 다음이 낫다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = "신악";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} win_kiku_sho マチカネフクキタルが菊花賞に勝ったか
     */
    const f = async (kitaru, you, callname, win_kiku_sho) => {
      const ret = [];
      await era.printAndWait([
        "작년과 달리 올해의 ",
        you.get_colored_name(),
        "은(는) 미리 ",
        kitaru.get_colored_name(),
        "에게 초대받아,",
        kitaru.couple_title,
        "의 집안 신사로 향했다.",
      ]);
      await era.printAndWait([
        "이 시간에는 아직 신사에 사람이 많지 않다.",
        you.get_colored_name(),
        "은(는) 돌계단을 밟고 다시 그 주홍빛 도리이를 지났다.",
      ]);
      await era.printAndWait([
        "그리고 지난번과 똑같이, 멀리서부터 가까이,",
        you.get_colored_name(),
        "의 세계가 순백으로 뒤덮였다.",
      ]);
      era.drawLine({ content: '？？？' });
      era.printButton("눈을 뜬다", 1);
      await era.input();
      await era.printAndWait([
        "주변에는 아무것도 없다. 부드러운 흰빛이 여러 각도에서 지켜보듯 ",
        you.get_colored_name(),
        "을(를) 비추고 있다.",
      ]);
      era.printButton("고개를 든다", 1);
      await era.input();
      await era.printAndWait(
        "새까만 역피라미드가 허공에 느닷없이 떠 있다.",
      );
      era.println();
      if (win_kiku_sho) {
        await typing(
          "양호／기대대로군. " +
            kitaru.sex +
            "의 조력자／반려자가 될 자격／능력이 있음",
          kitaru.color,
        );
        era.println();
        await typing("그대의 뜻／소망은 무엇인가?", kitaru.color);
      } else {
        await typing("기대 이하／응답 미달. 조력자／반려자는 예상 밖", kitaru.color);
        era.println();
        await typing(
          "매개변수／선택지는 아직 최적화／교체가 필요함",
          kitaru.color,
        );
      }
      era.println();
      era.printButton("고양되는 기운(모든 능력치+7)", 1);
      era.printButton("맥동하는 기운(파워+30)", 2);
      era.printButton("희미한 균열(스킬 Pt+30)", 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await kitaru.print_and_wait("열기가 높아진다……");
          break;
        case 2:
          await kitaru.print_and_wait("힘이 솟고 정신이 고무된다……");
          break;
        case 3:
          await kitaru.print_and_wait("구름이 갈라진다──벽이 삐걱거린다──오래된 상처가 아프다……");
      }
      if (
        era.get('love:56') >= 49 &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait("저기……");
        await kitaru.say_and_wait("저기……");
        await kitaru.say_and_wait([callname, '！']);
        era.printButton("눈을 뜬다", 1);
        await era.input();
        await kitaru.say_and_wait("왜 도리이에 기대서 주무세요?");
        await kitaru.say_and_wait("감기 걸려요!");
        era.printButton("고개를 든다", 1);
        await era.input();
        await era.printAndWait([
          "무녀복 차림의 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "의 손을 잡고 미소 짓고 있다. 석양이 밝은 주황색 단발머리 사이에서 춤춘다.",
        ]);
        await era.printAndWait([
          "올해는 겨울이 따뜻한 모양이다.",
          kitaru.uma_sex_title,
          "본래 높은 체온까지 있어 이 무녀복은 ",
          kitaru.sex,
          "에게 조금 두꺼울지도 모른다.",
        ]);
        await era.printAndWait([
          "무녀의 흰 웃옷에 아래는 선명한 붉은 하카마. 흰 니삭스가 ",
          kitaru.sex,
          "의 부드러운 다리 선을 그린다.",
        ]);
        await era.printAndWait(
          "갈라진 넓은 소매가 바람에 흔들리며 겨드랑이와 하얀 가슴 옆면이 때때로 드러난다.",
        );
        await era.printAndWait([
          "옷을 언덕처럼 뚜렷이 밀어 올린 가슴이,",
          kitaru.sex,
          "이(가) ",
          you.get_colored_name(),
          "의 팔을 당길 때마다 거침없이 흔들린다.",
        ]);
        await era.printAndWait([
          kitaru.uma_sex_title,
          "타고난 활기와 전통 의상의 엄숙함이,",
          kitaru.get_colored_name(),
          "이라는 이름의 ",
          kitaru.uma_sex_title,
          "의 위에서 아름답게 어우러진다.",
        ]);
        era.printButton("「예쁘다……」", 1);
        await era.input();
        await kitaru.say_and_wait("어!");
        await kitaru.say_and_wait(["우후후! ", callname, ", 반하셨어요?"]);
        await kitaru.say_and_wait("운명의 사람을 위해 일부러 고른 거예요!");
        await kitaru.say_and_wait(
          "그럼 오늘 밤 신악을 기대해 주세요!",
        );
        era.drawLine({ content: "후쿠키타루 집안의 신사, 배전 앞" });
        await era.printAndWait([
          "새해의 신사.",
          kitaru.get_colored_name(),
          "의 한 해 동안의 활약으로 참배객도 늘고 있다.",
        ]);
        await era.printAndWait(
          "십여 년 전 사고로 잊힐 뻔했던 이 신사가 지금 다시 활기를 되찾는다.",
        );
        await era.printAndWait(
          "사람들의 소란은 한차례 절정에 이르렀다가 썰물처럼 천천히 잦아든다.",
        );
        await era.printAndWait(
          "사방이 고요해졌을 때, 때를 기다린 듯 멀리서 북이 울리고 신악이 시작되었다.",
        );
        await era.printAndWait("악기들의 조화는 절묘하다.");
        await era.printAndWait(
          "북은 간사이 장정의 포효처럼 가슴을 뜨겁게 한다.",
        );
        await era.printAndWait(
          "샤미센은 달이 동산에 떠올라 두우 사이를 노니는 듯 가볍게 맴돈다.",
        );
        await era.printAndWait(
          "무녀가 흔드는 신악 방울이 그 사이를 장식한다. 맑고, 아득하고, 영묘하다.",
        );
        await era.printAndWait([
          "그 소리 속에서 신전 한가운데 선 것은 ",
          kitaru.get_colored_name(),
          '。',
          you.get_colored_name(),
          "의 담당,",
          kitaru.get_colored_name(),
          "이다.",
        ]);
        await era.printAndWait([
          "선율에 실려,",
          kitaru.sex,
          "은(는) 엄숙하고 서늘한 공간에서 춤춘다. 달빛이 천장에서 내려와 옅고 청아하게 화장한 ",
          kitaru.get_colored_name(),
          "의 얼굴을 비춘다.",
        ]);
        await era.printAndWait([
          kitaru.sex,
          "은(는) 신악 방울을 흔들어 신을 불러 함께 춤춘다.",
        ]);
        await era.printAndWait(
          "한 곡이 끝나자 무대 위의 현인신은 중앙에 서서 사방의 사람들에게 인사했다.",
        );
        era.drawLine({ content: "잠시 후" });
        await kitaru.say_and_wait("후우……드디어 끝났어요!");
        await kitaru.say_and_wait([
          "오늘 도와주셔서 고마워요,",
          callname,
          '！',
        ]);
        await era.printAndWait([
          "지난번과 대체로 비슷하게,",
          you.get_colored_name(),
          "일행은 새벽까지 일하며 신사가 다시 예전의 한산함을 되찾을 때까지 머물렀다.",
        ]);
        await era.printAndWait([
          "하지만 지난번과는 다르다……지친 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "의 어깨에 기대어 있다.",
        ]);
        await era.printAndWait([
          "역시 옷감이 조금 두꺼웠던 모양이다.",
          kitaru.get_colored_name(),
          "의 드러난 흰 피부는 향기로운 땀에 젖었고, 살짝 벌어진 입술에서도 뜨거운 숨이 새어 나온다.",
        ]);
        await era.printAndWait([
          "무녀복이 ",
          kitaru.sex,
          "의 아름다운 몸선을 그린다. 드러난 가슴 옆면은 바삐 움직인 탓에 붉어져 숨결에 맞춰 오르내린다.",
          you.get_colored_name(),
          "의 손길을 유혹하며 만져 보라고 하는 듯하다.",
        ]);
        era.printButton("참는다(호감+5, 연모+1)", 1);
        era.printButton("후쿠키타루의 허리를 감싼다", 2, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[1] === 1) {
          await era.printAndWait([
            "욕망을 누르고,",
            kitaru.get_colored_name(),
            "에게 작별을 고한 뒤,",
            you.get_colored_name(),
            "은(는) 트레센으로 돌아가는 차에 올랐다.",
          ]);
        } else {
          await kitaru.say_and_wait(["어! 어! ", callname, "……읏……"]);
          await era.printAndWait([
            "몸을 숙여,",
            kitaru.sex,
            "의 입술을 빼앗는다.",
            kitaru.get_colored_name(),
            "의 목에서 약한 신음이 샌다.",
          ]);
          await kitaru.say_and_wait("읏……읏……");
          await kitaru.say_and_wait("푸핫……");
          await era.printAndWait([
            "입술과 혀가 얽히고,",
            you.get_colored_name(),
            "에게 안긴 ",
            kitaru.get_colored_name(),
            "은(는) 견디지 못하듯 몸을 비튼다. 침이 입가에서 신사의 돌바닥으로 떨어진다.",
          ]);
          await era.printAndWait([
            "조금 전까지 사람들에게 축문을 바치던 입 안으로 탐욕스럽게 혀를 넣는다. 맞이하는 것은 아직 서투른 ",
            kitaru.sex,
            "의 응답이다.",
          ]);
          await kitaru.say_and_wait("햣……");
          await era.printAndWait("품 안의 담당이 음란한 소리를 냈다.");
          await era.printAndWait([
            "왼손을 무녀복 안으로 넣어,",
            kitaru.sex,
            "의 가슴 가장자리를 살짝 집어 희롱한다.",
          ]);
          await era.printAndWait([
            "그 뒤 손바닥 전체를 얹어 작은 가슴살이 ",
            you.get_colored_name(),
            "의 주무름에 모양을 바꾸는 감촉을 즐긴다.",
          ]);
          await kitaru.say_and_wait("하아……하앗!");
          await era.printAndWait([
            "손끝으로 부드러운 유륜을 둥글게 쓸며 가끔 가볍게 건드릴 때마다,",
            kitaru.get_colored_name(),
            "은(는) 거기에 맞춰 귀여운 소리를 낸다.",
          ]);
          await kitaru.say_and_wait("햣!");
          await era.printAndWait([
            "혀를 얽힌 채 오른손을 ",
            kitaru.sex,
            "의 허벅지로 미끄러뜨린다. 손끝이 스타킹 천을 문지르며 작은 소리를 낸다.",
          ]);
          await era.printAndWait([
            "조금씩,",
            kitaru.sex,
            "의 허벅지를 쓰다듬어 올라가 손이 따뜻한 옷자락 아래로 들어간다.",
          ]);
          await era.printAndWait([
            "젖어 있다.",
            you.get_colored_name(),
            "은(는) 그것을 알 수 있다.",
          ]);
          await era.printAndWait([
            "젖은 속옷 너머의 치구를 쓰다듬기만 했는데도,",
            kitaru.get_colored_name(),
            "은(는) 더욱 음란한 소리를 냈다.",
          ]);
          await era.printAndWait([
            "신사의 돌길 한가운데서 이런 짓을 하고 있다. 배덕한 자극이,",
            you.get_colored_name(),
            "의 욕망을 더욱 부추긴다.",
          ]);
          await kitaru.say_and_wait("아, 안 돼요……여기서는……");
          await era.printAndWait([
            kitaru.teen_sex_title,
            "의 거절하는 듯 유혹하는 말. 싫다고 하면서도 모았던 다리는 살짝 벌어져,",
            you.get_colored_name(),
            "의 손이 더 깊이 들어오게 한다.",
          ]);
          await era.printAndWait(
            "손가락을 넣자 살이 스스로 빨아들인다. 마디가 움직일 때마다 끈적한 소리가 난다.",
          );
          await kitaru.say_and_wait("읏!");
          await era.printAndWait([
            "강한 자극에,",
            kitaru.get_colored_name(),
            "은(는) 얕은 숨을 거듭하며 두 다리로 ",
            you.get_colored_name(),
            "의 팔을 끼우고 전류가 흐른 듯 떤다.",
          ]);
          await kitaru.say_and_wait(["햐앗,", callname, '！']);
          era.printButton("「그렇게 좋아?」", 1);
          await era.input();
          await kitaru.say_and_wait("모, 모르겠어요……으앗, 하앗……");
          await era.printAndWait(
            "애액이 넘쳐 허벅지 안쪽을 타고 흘러 흰 니삭스에 음란한 무늬를 그린다.",
          );
          await kitaru.say_and_wait(["앗, 으응, 햣,", callname, '！']);
          await kitaru.say_and_wait("와요!");
          await kitaru.say_and_wait([
            "가요! ",
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait(
            "경련 같은 떨림 뒤에 애액이 속옷을 넘어 흘러 신사의 돌바닥에 뚜렷한 물웅덩이를 만들었다.",
          );
          era.printButton("「계속할까?」", 1);
          await era.input();
          await kitaru.say_and_wait("어……네!");
          await era.printAndWait("다음으로 나아갈 때다.");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) ",
            kitaru.sex,
            "을(를) 길가의 굵은 금줄 두른 큰 나무에 밀어붙였다. 그동안에도 ",
            kitaru.sex,
            "을(를) 희롱하는 손은 멈추지 않아 물자국이 돌길 중앙에서 나무 앞까지 띄엄띄엄 이어진다.",
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 균형 잡힌 허벅지를 접듯 들어 올려 젖은 틈에 성기를 대고 단숨에 넣었다.",
          ]);
          await kitaru.say_and_wait("하앗!");
          await era.printAndWait(
            "무녀의 신음이 또렷이 들려 인적 없는 신사에 울린다.",
          );
          await era.printAndWait([
            "찌를 때마다,",
            kitaru.get_colored_name(),
            "의 몸이 오르내린다. 넓은 소매가 달린 팔이 펄럭여 조금 전 신악 같은 춤이 된다.",
          ]);
          await era.printAndWait([
            "그 뒤 쾌감을 좇아 ",
            you.get_colored_name(),
            "에게 매달리자 육봉이 더 깊은 부드러운 살까지 닿는다.",
          ]);
          await kitaru.say_and_wait([
            "하아……",
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "은(는) 힘이 풀려 자신을 원하는 트레이너에게 간신히 매달린다.",
          ]);
          await era.printAndWait("짝! 짝! 짝!");
          await era.printAndWait(
            "엄숙하고 청아한 신사 안에 음란한 물소리가 울린다.",
          );
          await era.printAndWait(
            "부딪칠 때마다 몸속의 애액이 무녀가 등을 댄 고목에 쏟아진다.",
          );
          await era.printAndWait([
            "이 음란한 의식에 아직 주저하던 ",
            kitaru.get_colored_name(),
            "도,",
            you.get_colored_name(),
            "의 공세에 이윽고 허리를 흔들며 빠져들기 시작했다.",
          ]);
          await kitaru.say_and_wait("기분 좋아요! 으으읏……!");
          await era.printAndWait([
            "지붕 없는 신사에서,",
            you.get_colored_name(),
            "와(과) ",
            kitaru.get_colored_name(),
            "은(는) 짐승처럼 서로에게 쾌감을 구한다.",
          ]);
          await era.printAndWait(
            "신성한 신사에서 이토록 더럽혀진 한 장면이 펼쳐지고 있다.",
          );
          await era.printAndWait([
            "어쩌면 이 배덕감 때문일 것이다.",
            kitaru.get_colored_name(),
            "의 내벽은 상상 이상으로 조인다.",
          ]);
          await kitaru.say_and_wait("오……! 조……좋아요……!");
          await era.printAndWait([
            "안쪽을 문지를 때마다,",
            you.get_colored_name(),
            "의 성기는 강한 자극을 받는다.",
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "도 같은 모양이다. 허리를 빼려 할 때마다 안의 부드러운 살이 ",
            you.get_colored_name(),
            "의 육봉에 감겨 든다.",
          ]);
          await kitaru.say_and_wait("으앗……가, 가요……!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 등이 휘고 밀혈이 갑자기 조여들어,",
            you.get_colored_name(),
            "에게 엄청난 쾌감을 안긴다.",
          ]);
          await era.printAndWait("질척──질척──");
          await era.printAndWait([
            you.get_colored_name(),
            "의 육봉이 ",
            kitaru.sex,
            "의 자궁 입구에 닿아 정액을 쏟으며 이미 절정에 이른 ",
            kitaru.get_colored_name(),
            "을(를) 더욱 떨게 한다.",
          ]);
          await kitaru.say_and_wait("으그으으읏!!!");
          await era.printAndWait("목소리를 억누르지 않고 음란한 무녀는 그대로 외쳤다.");
          await era.printAndWait(
            "애액이 연결된 곳에서 계속 넘쳐 신성한 고목 아래에 배덕한 욕망의 물웅덩이를 만든다.",
          );
          await era.printAndWait(
            "초점 잃은 별 모양 눈동자가 위를 향하고 향기로운 혀가 내밀어져, 이 신사의 신에게 제사의 끝을 알린다.",
          );
        }
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 정신을 차렸을 때는 이미 트레센으로 돌아가는 막차에 타고 있었다.",
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = "밸런타인의 이방인";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait(
        "밸런타인의 트레센 학원은 평소처럼 옅은 분홍빛에 감싸여 있다.",
      );
      await era.printAndWait([
        "공기는 즙을 머금은 듯 달콤하고, 짙은 초콜릿 향과 ",
        kitaru.uma_sex_title,
        "들이 무의식적으로 내뿜는 호르몬 냄새로 가득하다.",
      ]);
      await era.printAndWait(
        "밸런타인의 주인공은 당연히 각 트레이너다. 학원뿐 아니라 세간에서도 암묵적인 상식이다.",
      );
      era.printButton("「이상하네.」", 1);
      await era.input();
      if (teem_count >= 2) {
        await era.printAndWait([
          "오늘 하루 담당들이 ",
          you.get_colored_name(),
          "에게 준 초콜릿을 꽤 맛보았다. 담당 자체인 경우도 있었다.",
        ]);
        await era.printAndWait([
          "하지만 ",
          kitaru.get_colored_name(),
          "은(는) 나타나지 않았다.",
        ]);
      } else {
        await era.printAndWait([
          "하지만,",
          you.get_colored_name(),
          "은(는) 예외인 모양이다.",
        ]);
        await era.printAndWait([
          "오늘 하루,",
          kitaru.get_colored_name(),
          "의 모습은 보이지 않았다.",
        ]);
      }
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          "밤까지 기다려도,",
          kitaru.get_colored_name(),
          "에게서는 연락이 없었다.",
        ]);
        await era.printAndWait([
          "문자……없음. 전화……받지 않음.",
          you.get_colored_name(),
          "은(는) 룸메이트에게도 물었지만,",
          kitaru.sex,
          "은(는) 오늘 일정을 아무에게도 말하지 않았다.",
        ]);
        await era.printAndWait("조금 풀이 죽어 집으로 돌아왔다.");
        era.drawLine({ content: you.name + "의 집" });
        await era.printAndWait(
          "소파에 기대어 전자시계의 숫자가 0시에 가까워지는 것을 말없이 바라본다.",
        );
        await era.printAndWait([
          "조금 실망했다……문득,",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "에게 선물한 개운 도구를 보며,",
          you.get_colored_name(),
          "은(는) 그렇게 생각했다.",
        ]);
        era.printButton("듣기 판정", 1);
        await era.input();
        era.println();
        const result = get_random_value(65, 90);
        if (result > 60) {
          await era.printAndWait([
            "주사위 결과:",
            result,
            '/??',
            { isDivider: true },
            you.get_colored_name(),
            "의 듣기 판정: 실패",
          ]);
          await era.printAndWait(
            "아무것도 들리지 않았다. 날씨 탓인지 졸음이 밀려온다.",
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 소파에서 잠들려 할 때 창문 쪽에서 빗장 같은 소리가 나더니……",
        ]);
        await kitaru.say_and_wait("후앗!");
        await era.printAndWait("눈앞에 익숙한 밤색 그림자가 나타났다.");
        await era.printAndWait([
          "어느새,",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "앞에 있다. 그보다 더 ",
          you.get_colored_name(),
          "을(를) 술렁이게 한 것은,",
          kitaru.sex,
          "의 민망한 자세였다.",
        ]);
        await era.printAndWait([
          "주황색 머리의 ",
          kitaru.teen_sex_title,
          "이(가) ",
          you.get_colored_name(),
          "의 허리에 올라타, 치마에 가려진 엉덩이가 ",
          you.get_colored_name(),
          "의 바지 천을 문지르는 소리까지 들린다.",
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "평소의 거리감 없는 행동인 거겠지?",
        ]);
        await kitaru.say_and_wait([callname, ", 해피 밸런타인!"]);
        await era.printAndWait(
          "목소리에는 격렬하게 움직인 뒤의 피로가 묻어 있었고, 방금 말도 숨이 찼다. 줄곧 달려온 모양이다.",
        );
        await era.printAndWait([
          "교복에도 주황색 머리카락에도 갈색 얼룩이 묻어 있다.",
          kitaru.sex,
          "에게서 풍기는 짙은 향으로 보아 만들다가 흘린 초콜릿일 것이다.",
        ]);
        await era.printAndWait([
          kitaru.sex,
          "은(는) 등 뒤에서 구겨진 상자를 꺼내,",
          you.get_colored_name(),
          "의 가슴 위에 놓았다.",
        ]);
        await kitaru.say_and_wait("보세요!");
        await kitaru.say_and_wait(
          "하루 종일 당신을 위해 따 온 별이에요!",
        );
        await era.printAndWait(
          "상자를 열자 열두 별자리 모양의 초콜릿이 빼곡하다. 혼자 먹기에는 아무리 봐도 너무 많다.",
        );
        era.printButton("「혼자 다 먹으라고?」", 1);
        await era.input();
        await kitaru.say_and_wait(
          "안 되죠～ 이런 건 자기 별자리만 먹어야 재미있어요!",
        );
        await kitaru.say_and_wait("보세요, 저는 쌍둥이자리예요.");
        await kitaru.say_and_wait(
          "카스토르와 폴룩스를 더하면 다른 것의 딱 두 배예요!",
        );
        await kitaru.say_and_wait("음……역시 처음이라 양 조절이……");
        await kitaru.say_and_wait(
          "늦지 않아서 다행이에요. 오늘 밸런타인을 놓칠 뻔했어요!",
        );
        era.printButton("「수고했어!」", 1);
        await era.input();
        await kitaru.say_and_wait("잖아요……그러니까!");
        await kitaru.say_and_wait("저기～ 부탁이 있어요!");
        await kitaru.say_and_wait("괜찮으시면 둘이서 먹을까요?");
        await kitaru.say_and_wait("그러니까……친한 사람끼리 반씩 나눠 먹는 것처럼요.");
        await era.printAndWait([
          "말이 사제 관계에서 벗어날수록,",
          kitaru.get_colored_name(),
          "의 뺨도 붉어져 간다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 가슴 위에서 열린 상자를 보며 밑바닥에서 욕망이 솟는 것을 느꼈다.",
        ]);
        era.printButton("「상 받고 싶어?」", 1, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton("초콜릿만 먹는다(체력+300)", 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait("네!?");
          await era.printAndWait([
            "그렇게 물으며 오른손으로 ",
            kitaru.sex,
            "의 부드러운 허릿살을 집었다.",
          ]);
          await era.printAndWait([
            "지금 자세가 기승위와 별다르지 않음을 뒤늦게 알아차린 ",
            kitaru.teen_sex_title,
            "의 얼굴은 더욱 붉어지고, 꼬리가 일부러 ",
            you.get_colored_name(),
            "의 다리를 몇 번 두드린다.",
          ]);
          await era.printAndWait("그 뒤 모기만 한 목소리로 대답했다.");
          await kitaru.say_and_wait("……받고 싶어요.");
          era.printButton("「더 크게!」", 1);
          await era.input();
          await kitaru.say_and_wait("음……초콜릿 아직 안 드셨잖아요……");
          await era.printAndWait([
            "대답을 듣고,",
            you.get_colored_name(),
            "은(는) 오른손을 놓았다.",
          ]);
          await era.printAndWait("짝!");
          await kitaru.say_and_wait("햣!");
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 손가락을 모아 손바닥으로 가볍지도 무겁지도 않게, 재빨리 ",
            kitaru.teen_sex_title,
            "의 들린 엉덩이를 때렸다.",
          ]);
          await era.printAndWait("하얀 엉덩이 살이 흔들리고 저릿한 쾌감이 퍼진다.");
          await era.printAndWait([
            "그 뒤,",
            kitaru.teen_sex_title,
            "이(가) 정신이 팔린 틈에,",
            you.get_colored_name(),
            "은(는) 두 손을 뻗어 올라탄 ",
            kitaru.teen_sex_title,
            "의 두 손에 깍지를 꼈다.",
          ]);
          era.printButton("「그럼 먹여 줘.」", 1);
          await era.input();
          await kitaru.say_and_wait("어! 하지만……");
          await era.printAndWait([
            kitaru.teen_sex_title,
            "의 뼈가 없는 듯 부드러운 손이 ",
            you.get_colored_name(),
            "에게 잡혀 있는 이상, 손으로 ",
            you.get_colored_name(),
            "에게 먹여 줄 수는 없다.",
          ]);
          await kitaru.say_and_wait("알겠어요……");
          await era.printAndWait("점술가답게 눈치가 빠르다.");
          await era.printAndWait([
            kitaru.sex,
            "은(는) 귀여운 강아지처럼 천천히 몸을 숙였다.",
          ]);
          await era.printAndWait([
            "초콜릿을 물고 입술을 오므려 ",
            you.get_colored_name(),
            "의 입가로 가져간다.",
          ]);
          await era.printAndWait("딱.");
          await era.printAndWait(
            "초콜릿이 가운데서 갈라져 말한 대로 둘이 한 조각씩 나눠 가졌다.",
          );
          await era.printAndWait([
            "부서진 조각이 ",
            you.get_colored_name(),
            "의 몸에 떨어지자,",
            kitaru.teen_sex_title,
            "이(가) 혀끝으로 꼼꼼히 훑어 냈다.",
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 얼굴은 요염한 붉은빛으로 물들고, 가느다란 목을 따라 쇄골까지 물들인다.",
          ]);
          await era.printAndWait([
            "반쯤 누워 있던 ",
            you.get_colored_name(),
            "은(는) ",
            kitaru.teen_sex_title,
            "이(가) 초콜릿에 정신이 팔린 틈에 상체를 일으켰다.",
          ]);
          await kitaru.say_and_wait("읏!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 입을 벌려 반쯤 녹은 초콜릿을 혀와 함께 ",
            kitaru.sex,
            "의 입 안으로 밀어 넣었다.",
          ]);
          await kitaru.say_and_wait("음핫……");
          await era.printAndWait([
            "혀가 ",
            kitaru.sex,
            "의 입 안을 돌아다니며 초콜릿 맛과 ",
            kitaru.teen_sex_title,
            "의 침을 섞는다. 휘저을 때마다 짙은 음란한 소리가 난다.",
          ]);
          await kitaru.say_and_wait("읏……");
          await era.printAndWait([
            "먼저 카스토르, 그다음 폴룩스.",
            kitaru.get_colored_name(),
            "을(를) 형상화한 두 알은 두 사람의 침과 섞인 액체가 되어 배 속으로 내려갔다.",
          ]);
          await era.printAndWait([
            "눈앞에서는 방금의 코코아 맛 나는 격렬한 입맞춤에 조금 멍해진 ",
            kitaru.get_colored_name(),
            "이(가) 만족스럽게 숨 쉬고 있다.",
          ]);
          await era.printAndWait(
            "가끔 내미는 작은 혀에 녹은 초콜릿이 남아 검정과 분홍이 겹쳐 있다.",
          );
          await kitaru.say_and_wait([callname, "……받고 싶어요!"]);
        } else {
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 호의를 헛되이 할 수는 없다.",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 진지하게 초콜릿을 먹기 시작했다.",
          ]);
        }
      } else {
        await era.printAndWait([
          "밤이 되자,",
          kitaru.get_colored_name(),
          "에게서 전화가 왔다.",
        ]);
        await kitaru.say_and_wait("저기, 학원 근처 공원에서 만날 수 있나요?");
        era.drawLine({ content: "공원" });
        await era.printAndWait([
          "잠시 기다리자 입구에서 황급히 달려오는 ",
          kitaru.get_colored_name(),
          "이(가) 보였다.",
        ]);
        await kitaru.say_and_wait([
          "앗! ",
          callname,
          ", 큰일이에요! 큰일!",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 주황색 머리의 ",
          kitaru.teen_sex_title,
          "이(가) 허둥지둥 달려오는 것을 보았다.",
        ]);
        await era.printAndWait([
          "교복에 갈색 얼룩이 묻어 있고, 가까이서 맡으니 ",
          kitaru.sex,
          "에게는 진한 초콜릿 향이 배어 있다.",
        ]);
        era.printButton("「왜 그래?」", 1);
        await era.input();
        await kitaru.say_and_wait(
          "별이 너무 많아서 별자리가 전부 쏟아졌어요!",
        );
        await kitaru.say_and_wait("보세요!");
        await era.printAndWait([
          kitaru.sex,
          "은(는) 등 뒤에 숨긴 상자를,",
          you.get_colored_name(),
          "에게 내밀었다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 장단을 맞춰 놀란 표정을 지었다.",
        ]);
        era.printButton("상자를 받는다", 1);
        await era.input();
        await kitaru.say_and_wait("농담이에요!");
        await kitaru.say_and_wait(
          "열심히 만든 열두 별자리 초콜릿이에요.",
        );
        await kitaru.say_and_wait("오늘은 밸런타인이니까요!");
        await kitaru.say_and_wait("점을 좋아한다면 제대로 축하해야죠!");
        await era.printAndWait([
          kitaru.sex,
          "의 뜨거운 시선 아래,",
          you.get_colored_name(),
          "은(는) 상자를 열었다.",
        ]);
        await era.printAndWait([
          "열두 별자리 모양의 초콜릿이 빼곡하다. 모양은 조금 투박하지만,",
          kitaru.teen_sex_title,
          "의 마음은 확실히 들어 있다. 다만 혼자 먹기에는 아무리 봐도 너무 많다.",
        ]);
        era.printButton("「혼자 다 먹으라고?」", 1);
        await era.input();
        await kitaru.say_and_wait(
          "안 되죠～ 이런 건 자기 별자리만 먹어야 재미있어요!",
        );
        await kitaru.say_and_wait("보세요, 저는 쌍둥이자리예요.");
        await kitaru.say_and_wait(
          "카스토르와 폴룩스를 더하면 다른 것의 딱 두 배예요!",
        );
        await kitaru.say_and_wait("음……역시 처음이라 양 조절이……");
        await kitaru.say_and_wait(
          "늦지 않아서 다행이에요. 오늘 밸런타인을 놓칠 뻔했어요!",
        );
        era.printButton("「수고했어!」", 1);
        await era.input();
        await kitaru.say_and_wait("잖아요……그러니까!");
        await kitaru.say_and_wait("저기～ 부탁이 있어요!");
        await kitaru.say_and_wait("괜찮으시면 둘이서 먹을까요?");
        await era.printAndWait([
          "상자 안의 조금 투박한 수제 초콜릿을 가리키는 ",
          kitaru.teen_sex_title,
          "의 뺨에 옅은 홍조가 어렸다.",
        ]);
        await kitaru.say_and_wait("그러니까……친한 사람끼리 반씩 나눠 먹는 것처럼요.");
        await era.printAndWait([
          "사제 관계에서 벗어난 발언이라는 것을 본인은 모르는 모양이다.",
          kitaru.get_colored_name(),
          "은(는) 두 손을 모아 ",
          you.get_colored_name(),
          "을(를) 바라본다.",
        ]);
        era.printButton("고개를 끄덕인다", 1);
        await era.input();
        await era.printAndWait([
          "그 뒤,",
          kitaru.get_colored_name(),
          "와(과) 함께 초콜릿을 먹었다.",
        ]);
        await kitaru.say_and_wait("후앗! 생각보다 달아요!");
        await kitaru.say_and_wait([callname, ", 해피 밸런타인!"]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kink_sho: (() => {
    const title = "킨코상을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("후아아……정말 오랜만의 레이스네요.");
      era.printButton("「준비됐어?」", 1);
      await era.input();
      await kitaru.say_and_wait("그럭저럭이에요!");
      await kitaru.say_and_wait("음! 특별한 느낌은 없네요……");
      await kitaru.say_and_wait(
        "행운이 깃든 저라면 달리기만 해도 계속 이기겠죠?",
      );
      await era.printAndWait([
        "체육복 차림의 ",
        kitaru.get_colored_name(),
        "은(는) 미소 지으며 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait("맞다, 맞다!");
        await kitaru.say_and_wait([
          callname,
          "! 개운 의식 하나만 더 함께해 주세요!",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 반응하기 전에 두 손으로 ",
          you.get_colored_name(),
          "의 얼굴을 살며시 감쌌다.",
        ]);
        await you.say_and_wait("읏!");
        await era.printAndWait([
          "평소에는 이 뒤에 숨어 있던 작은 혀가 여느 때와 달리 ",
          you.get_colored_name(),
          "의 입에 들어와,",
          kitaru.get_colored_name(),
          "의 침을 전한다.",
        ]);
        await kitaru.say_and_wait("츄～");
        await era.printAndWait(
          "출주 안내가 올 때까지 한없이 긴 격렬한 입맞춤은 멈추지 않았다.",
        );
        await kitaru.say_and_wait(["좋아요! ", callname, "! 다녀올게요!"]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 뺨은 붉다. 달리기에 마음이 얼마나 남아 있는지,",
          you.get_colored_name(),
          "은(는) 의심하지 않을 수 없었다.",
        ]);
      }
      era.printButton("「좀 더 진지하게 해.」", 1);
      await era.input();
      await kitaru.say_and_wait(["어,", callname, '！']);
      await kitaru.say_and_wait("이런 행운을 주시는 게 당신이니까요!");
      await kitaru.say_and_wait("거기 앉아서 보고만 계시면 돼요!");
      await kitaru.say_and_wait("대길인 저는 적당히 달려도 이겨요!");
      await era.printAndWait([
        "담담하다 못해 차갑다. 레이스가 ",
        kitaru.sex,
        "와(과) 전혀 상관없다는 듯한 태도다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 명령에 따라 그저 코스에 올라설 뿐이다.",
      ]);
      await kitaru.say_and_wait("네네, 이제 됐어요!");
      await era.printAndWait([
        "국화상에서,",
        kitaru.get_colored_name(),
        "의 집념과 함께 바쳐진 것은 다른 무언가도 있었을지 모른다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_win: (() => {
    const title = "들린 자";
    /**
     * 菊花賞勝利＋金鯱賞勝利
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        "쉽게 이겼다.",
        callname,
        "와(과) 약속한 대로.",
      ]);
      await kitaru.print_and_wait([
        kitaru.elder_sibling_sex_title,
        "에게 지금의 나를 알리고 싶어졌다.",
      ]);
      await kitaru.say_and_wait([
        "저, 이제 훌륭한 ",
        kitaru.uma_sex_title,
        "예요!",
      ]);
      await kitaru.print_and_wait([
        kitaru.elder_sibling_sex_title,
        "의 무덤 앞에서 나는 ",
        kitaru.sex,
        "의 묘비에 그렇게 말했다.",
      ]);
      await kitaru.say_and_wait([
        callname,
        "은(는) 하고 싶은 말 있으세요?",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 두 손을 모았다. 진지한 옆얼굴에서는 움직이는 입술만 보였다.",
      ]);
      await you.say_and_wait([
        "후쿠키타루의 ",
        kitaru.elder_sibling_sex_title,
        ", 고마워요. 계속 ",
        kitaru.sex,
        "을(를) 지켜봐 줘서요.",
      ]);
      await kitaru.print_and_wait([
        "응,",
        kitaru.elder_sibling_sex_title,
        "은(는) 분명 기뻐할 거예요.",
      ]);
      era.drawLine({ content: "잠시 후, 트레센 기숙사" });
      await kitaru.say_and_wait('……');
      await kitaru.print_and_wait("그런 건가.");
      await kitaru.print_and_wait(
        "아오바상, 일본 더비, 고베 신문배, 국화상, 킨코상……",
      );
      await kitaru.print_and_wait(
        "지금까지 나를 달리게 한 것은 무엇이었을까.",
      );
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '……']);
      await kitaru.print_and_wait(
        "문득 보니 창문이 거울이 되어 홀로 선 나를 비추고 있었다.",
      );
      await kitaru.print_and_wait("키는 전보다 컸고 머리도 길어졌다.");
      await kitaru.print_and_wait([
        callname,
        "와(과) 처음 만났을 때보다 훨씬 어른스러워졌다.",
      ]);
      await kitaru.print_and_wait([
        "사진 속의 ",
        kitaru.elder_sibling_sex_title,
        "와(과) 거의 다르지 않다.",
      ]);
      await kitaru.print_and_wait("그럼……나는?");
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait("무언가 들린 빈 껍데기……");
      await kitaru.print_and_wait(
        "알 수 없는 메스꺼움. 위와 장이 하나로 뒤틀린 것 같다.",
      );
      era.drawLine({ content: "다음 날, " + you.name + "의 사무실" });
      era.printButton("「빈 껍데기?」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 내린 결론을 중얼거렸다. 자신에게 ",
        kitaru.elder_sibling_sex_title,
        "의 영혼이 씌었다고 생각하는 ",
        kitaru.teen_sex_title,
        "은(는) 방구석에 불안하게 서 있다.",
      ]);
      await kitaru.say_and_wait("네. 제가 저답지 않은 것 같아요.");
      await kitaru.say_and_wait(
        "몸만 빌려 줬는데 집념이 올라탄 거라고 할까요.",
      );
      await kitaru.say_and_wait("저는 아무 생각도 안 했거든요.");
      await kitaru.say_and_wait("흐름에 몸을 맡겼을 뿐이에요.");
      await kitaru.say_and_wait("이걸……제가 이겼다고 할 수 있나요?");
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait("이 년 전이라면 기뻐했을지도 몰라요!");
      await kitaru.say_and_wait("하지만 그렇게 생각하니……");
      await era.printAndWait([
        kitaru.teen_sex_title,
        "의 떨리는 목소리는 안개처럼 흐려진다.",
      ]);
      era.printButton("「후쿠?」", 1);
      await era.input();
      await kitaru.say_and_wait("죄송해요……");
      await kitaru.say_and_wait("잠시 혼자 있게 해 주세요.");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 PTSD가 다시 재발했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_lose: (() => {
    const title = "다한 운";
    /**
     * 菊花賞勝利＋金鯱賞敗北
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("어……졌어……?");
      await kitaru.say_and_wait("제 운이 안 통해……?");
      await kitaru.say_and_wait(
        "거짓말이죠! 이럴 리 없어요! 제 운은……!",
      );
      await kitaru.say_and_wait([callname, "! 이건 악몽이죠!"]);
      await kitaru.say_and_wait("당신 곁에 있는 저는 대길이어야 해요!");
      era.printButton("「이게 현실이야……」", 1);
      await era.input();
      await kitaru.say_and_wait("그럴 수가, 이제 다시 태어났다고 생각했는데!");
      await kitaru.say_and_wait("신에게 버림받으면……저……저……!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 말없이 앞으로 나아가 울 것 같은 ",
        kitaru.get_colored_name(),
        "을(를) 품에 안았다.",
      ]);
      await kitaru.say_and_wait(["우으……", callname, '……']);
      era.drawLine({ content: "다음 날, " + you.name + "의 사무실" });
      era.printButton("「빈 껍데기?」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 내린 결론을 중얼거렸다. 그 ",
        kitaru.teen_sex_title,
        "은(는) 방구석에 불안하게 서 있다.",
      ]);
      await kitaru.say_and_wait("네. 제가 저답지 않은 것 같아요.");
      await kitaru.say_and_wait(
        "몸만 빌려 줬는데 집념이 올라탄 거라고 할까요.",
      );
      await kitaru.say_and_wait("저는 아무 생각도 안 했거든요.");
      await kitaru.say_and_wait("흐름에 몸을 맡겼을 뿐이에요.");
      await kitaru.say_and_wait("이걸……제가 제대로 달렸다고 할 수 있나요?");
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        "의 떨리는 목소리는 안개처럼 흐려진다.",
      ]);
      era.printButton("「후쿠?」", 1);
      await era.input();
      await kitaru.say_and_wait("죄송해요……");
      await kitaru.say_and_wait("잠시 혼자 있게 해 주세요.");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 PTSD가 다시 재발했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_11: (() => {
    const title = "불안정한 단계";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "연승 중인 ",
        kitaru.get_colored_name(),
        "은(는) 킨코상 이후 방송국의 인터뷰 초청을 받았다.",
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        "로서는 평범한 출신인 ",
        kitaru.get_colored_name(),
        "이(가) 아오바상 부진 뒤에 국화상을 포함한 중상 경주를 연달아 이기면서,",
        kitaru.sex,
        "은(는) 사람들의 눈에 들어왔다.",
      ]);
      await era.printAndWait([
        "거절할 수 없다. 동기 중 일찍이 속도의 한계에 도전한다고 공언한 밤색 머리의 ",
        kitaru.uma_sex_title,
        "나 메지로 가문의 장거리 ",
        kitaru.uma_sex_title,
        "에 비해, 코스와 위닝 라이브 외에는 가끔 신사에만 모습을 보이는 ",
        kitaru.get_colored_name(),
        "은(는) 신비롭다고 할 만하다.",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "의 트레이너로서 동석은 당연하다. 게다가……",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 킨코상 이후의 ",
        kitaru.sex,
        "을(를) 떠올렸다. 그 레이스 뒤 무언가를 깨달은 ",
        kitaru.get_colored_name(),
        "은(는) 다시 정신이 불안정해졌다.",
      ]);
      era.drawLine({ content: "스튜디오" });
      await kitaru.say_and_wait("네, 맞아요.");
      await kitaru.say_and_wait("아마도요.");
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        "레이스 후 인터뷰에서,",
        kitaru.get_colored_name(),
        "의 답변은 상당히 힘겹다.",
        you.get_colored_name(),
        "이(가) 분위기를 이끈 덕에 화제는 ",
        kitaru.get_colored_name(),
        "이(가) 차분하고 말수가 적은 ",
        kitaru.uma_sex_title,
        "이라는 방향으로 흘러갔다.",
      ]);
      await era.printAndWait([
        "차분함, 과묵함이 ",
        kitaru.get_colored_name(),
        "와(과) 연결된다고? ",
        you.get_colored_name(),
        "은(는) 상상조차 할 수 없다.",
      ]);
      await era.printAndWait([
        "다행히 이 시련도 끝이 보이기 시작했다.",
        you.get_colored_name(),
        "은(는) 벌써 이 뒤에 ",
        kitaru.get_colored_name(),
        "을(를) 위로할 방안을 생각하고 있었다.",
      ]);
      await era.printAndWait("아니다!");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 땀에 젖은 주황색 머리카락이 이마에 붙고, 귀가 놀란 듯 곤두섰다.",
      ]);
      await era.printAndWait(
        "멈춰야 한다. 하지만 다음 질문은 이미 던져졌다.",
      );
      await you.say_as_passer_by_and_wait(
        "여성 진행자",
        "그럼 여쭤보고 싶은데요……",
      );
      await you.say_as_passer_by_and_wait("여성 진행자", [
        kitaru.get_colored_name(),
        "선수는 지금 무엇을 위해 달리시나요?",
      ]);
      await kitaru.say_and_wait("왜", true);
      await kitaru.say_and_wait("승리?", true);
      await kitaru.say_and_wait("상금?", true);
      await kitaru.say_and_wait("아니면 다른 무언가?", true);
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await you.say_as_passer_by_and_wait(
        "여성 진행자",
        "네? 죄송하지만 다시 한번 말씀해 주시겠어요?",
      );
      await kitaru.say_and_wait("하지만……", true);
      await kitaru.say_and_wait("하지만 저는 이미 달리기 시작했다고요!!!!!");
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          '「',
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: "싫어 싫어 싫어!!!!!",
          },
          '」',
        ],
        {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await kitaru.say_and_wait("읏!");
      await era.printAndWait([
        "정신을 잃은 ",
        kitaru.get_colored_name(),
        "이(가) 뒤로 쓰러지기 전에,",
        you.get_colored_name(),
        "은(는) 뛰어나가 가까스로 ",
        kitaru.sex,
        "을(를) 받쳤다.",
      ]);
      await era.printAndWait(["인터뷰는 중단되었다."]);
      era.drawLine({ content: "며칠 후" });
      await era.printAndWait(["검사 결과 이상은 없다. 휴식이 필요할 뿐이다."]);
      await kitaru.say_and_wait(["죄송해요. 또 ", callname, "에게 폐를……"]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 소파에서 안색이 좋지 않은 ",
        kitaru.get_colored_name(),
        "이(가) 사과하는 것을 들었다.",
      ]);
      await era.printAndWait(
        "그렇다. 방송 중 쓰러진 일로 폭발한 여론을 수습하느라 며칠간 머리가 깨질 지경이었다.",
      );
      await era.printAndWait([
        "스튜디오에서 쓰러진 ",
        kitaru.get_colored_name(),
        "은(는) 틀림없이 ",
        you.get_colored_name(),
        "을(를) 폭풍의 눈으로 밀어 넣었다.",
      ]);
      await era.printAndWait([
        "하지만 지금 더 중요한 것은 갈수록 불안정해지는 ",
        kitaru.get_colored_name(),
        "쪽이다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_12: (() => {
    const title = "고래의 배 속으로";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} bright メジロブライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_2 サイレンススズカのプレイヤーへの呼び方
     * @param {PrintedSpan} b_call_k メジロブライトのマチカネフクキタルへの呼び方
     */
    const f = async (
      kitaru,
      suzuka,
      tannhauser,
      bright,
      you,
      callname,
      callname_2,
      b_call_k,
    ) => {
      await era.printAndWait([
        "그 인터뷰 뒤,",
        kitaru.get_colored_name(),
        "은(는) 침울해졌다.",
      ]);
      await era.printAndWait("오늘은 훈련까지 빠졌다.");
      await era.printAndWait("내버려 둘 수 없다.");
      await era.printAndWait([
        kitaru.sex,
        "은(는) ",
        you.get_colored_name(),
        "에게 걱정하지 말라는 메시지를 남겼다. 그래도 불안은 ",
        you.get_colored_name(),
        "의 가슴에서 사라지지 않는다.",
      ]);

      if (era.get('cflag:74:招募状态') === 1) {
        await bright.say_and_wait([b_call_k, "말인가요?……못 봤어요."]);
      }
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([
          "어! 오늘 아침 기숙사를 나간 뒤로 못 봤어요.",
        ]);
      }
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait(["미안……", callname_2, ", 나도 못 봤어."]);
      }

      await era.printAndWait([
        "반 친구 몇 명에게 물어도 담당의 행방은 알 수 없다.",
        kitaru.get_colored_name(),
        "이라면 지금 어디로 갈까.",
      ]);
      await era.printAndWait([
        "아니다. 자주 참배하는 신사도, 학원 학생들이 자주 가는 고목의 구멍도 아니다.",
      ]);
      era.drawLine({ content: "교외 묘지" });
      await era.printAndWait([
        "주황색의 ",
        kitaru.uma_sex_title,
        "이(가) 세상을 떠난 ",
        kitaru.elder_sibling_sex_title,
        "을(를) 나타내는 그 묘비를 멍하니 바라보고 있다.",
      ]);
      era.printButton("「마치카네 후쿠키타루?」", 1);
      await era.input();
      await kitaru.say_and_wait(['……', callname, '！']);
      await kitaru.say_and_wait("역시 찾아내셨네요.");
      await kitaru.say_and_wait("에헤헤……?");
      era.printButton("아이언 클로를 쓴다", 1);
      await era.input();
      await kitaru.say_and_wait("아우!");
      await era.printAndWait([
        you.get_colored_name(),
        "에게 머리를 맞은 ",
        kitaru.teen_sex_title,
        "이(가) 비명을 질렀다.",
      ]);
      era.printButton("「도움이 필요해?」", 1);
      await era.input();
      await kitaru.say_and_wait("어, 괜찮아요!");
      await kitaru.say_and_wait("보세요, 이제 괜찮잖아요!");
      era.printButton("「정말은?」", 1);
      era.printButton("「솔직하게 말해.」", 2);
      await era.input();
      await kitaru.say_and_wait("무서워요……");
      era.printButton("「무서워?」", 1);
      await era.input();
      await kitaru.say_and_wait("……네.");
      await kitaru.say_and_wait(
        "점도, 길일을 고르는 것도 정말 좋아요. 늘 뒤에서 지탱해 주고……",
      );
      await kitaru.say_and_wait("그때부터 줄곧 그랬어요.");
      await era.printAndWait([
        "대리석 묘비의 표면을 쓰다듬는 ",
        kitaru.get_colored_name(),
        "의 별 모양 눈동자에 그늘이 드리운다.",
      ]);
      await kitaru.say_and_wait("어릴 때부터 점을 믿어 왔어요.");
      await kitaru.say_and_wait([
        "그렇게 대길인 날에 ",
        callname,
        "을(를) 만나, 무리해서라도 ",
        kitaru.elder_sibling_sex_title,
        "에게 약속한 국화상까지 달려왔어요.",
      ]);
      await kitaru.say_and_wait(
        "국화상에서 우승하면 운명의 사람과 개운 도구만 있으면 행복해질 줄 알았어요.",
      );
      await kitaru.say_and_wait([
        "그런데 킨코상 뒤에 저는 아직도,",
        kitaru.elder_sibling_sex_title,
        "의 그림자 속에서 웅크린 작은 ",
        kitaru.uma_sex_title,
        "이라는 걸 깨달았어요.",
      ]);
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        "이(가) 된 이유도 모른 채 운명의 사람의 지시로 코스에 올라갈 뿐……",
      ]);
      await kitaru.say_and_wait(
        "이대로 은퇴하는 게 낫지 않을까요?",
      );
      era.printButton("「왜?」", 1);
      await era.input();
      await kitaru.say_and_wait("그래요!");
      await era.printAndWait([
        kitaru.sex,
        "은(는) 고개를 끄덕이고, 빛을 잃은 별 모양 눈동자로 묘지의 연못을 멍하니 본다.",
      ]);
      await kitaru.say_and_wait([
        "목표도 없이 팬들도,",
        callname,
        "의 바람도 저버린, 신에게 버림받은 저!",
      ]);
      await kitaru.say_and_wait(
        "연못의 부서진 수초가 되어 떴다 가라앉았다 하다가, 결국 물고기 배 속으로 들어가야 해요!",
      );
      await kitaru.say_and_wait([
        "그러고 보니,",
        callname,
        "은(는) 왜 지금까지 저를 지탱해 주셨어요?",
      ]);
      await kitaru.say_and_wait("늘 실패하고 우쭐대기만 하는데……");
      era.printButton("「후쿠의 달리기가 좋으니까.」", 1);
      era.printButton("「후쿠의 소원을 이루고 싶으니까.」", 2);
      await era.input();
      await kitaru.say_and_wait("네에!!!!!!");
      era.printButton("「이상한 말 했어?」", 1);
      await era.input();
      await kitaru.say_and_wait(
        "아뇨! 그냥……저도 그런 멋진 말을 할 수 있으면 좋겠다고요.",
      );
      await kitaru.say_and_wait("다음에 어떻게 걸을지 정하는 것만으로도 벅찬데.");
      era.printButton("「그래?」", 1);
      await era.input();
      await kitaru.say_and_wait("네?");
      era.printButton("「하지만 난 후쿠가 대단하다고 생각해.」", 1);
      await era.input();
      await kitaru.say_and_wait("읏!");
      era.printButton(
        "「남에게서 받은 것들 속에서 자신에게 맞는 답을 찾을 수 있잖아.」",
        1,
      );
      await era.input();
      await era.printAndWait([
        "눈앞의 ",
        kitaru.uma_sex_title,
        "의 두 귀가 흔들렸다.",
      ]);
      era.printButton("「안 그래?」", 1);
      await era.input();
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait("고마워요. 위로라도 기뻐요.");
      await kitaru.say_and_wait([
        "……저는,",
        callname,
        "도 응원해 주신 팬들도 실망시켰는데.",
      ]);
      era.printButton("「그럼 타카라즈카 기념에서 모두에게 사과하자.」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait("네? 아아아, 안 돼요, 절대 안 돼요!");
      await kitaru.say_and_wait(
        "타카라즈카 기념──팬 투표가 있어야 나갈 수 있는 레이스잖아요?",
      );
      await era.printAndWait([
        "목소리를 높이는 ",
        kitaru.get_colored_name(),
        "을(를) 달래며,",
        you.get_colored_name(),
        "은(는) 팬 감사제에서 표를 모을 방법을 생각하기 시작했다.",
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 PTSD는 잠시 사라졌다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = (kitaru) => ["모두의 소망을 짊어지고", kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 지난 인터뷰에서 엉망이었던 답변은 많은 언론의 비판을 불렀다.",
      ]);
      await kitaru.say_and_wait([
        "우와아! ",
        callname,
        ". 정말 괜찮을까요?",
      ]);
      await kitaru.say_and_wait("저기, 신문에서는 저를……");
      await you.say_as_passer_by_and_wait("신문", [
        '……',
        kitaru.get_colored_name(),
        "의 태도는 차마 볼 수가 없다……",
      ]);
      await you.say_as_passer_by_and_wait(
        "신문",
        "……선수로서의 긍지도, 팬에게 보답하려는 마음도 없다……",
      );
      await you.say_as_passer_by_and_wait("신문", "……레이스를 사랑하지 않는다……");
      await kitaru.say_and_wait("앗! 굳이 말하지 않아도 되잖아요!");
      await kitaru.say_and_wait("하지만……괜찮아요. 저는 그런 사람이니까요.");
      await kitaru.say_and_wait("정말 귀가 아프네요……귀가 떨어질 만큼.");
      await kitaru.say_and_wait("나가면 달걀 세례를 받겠죠……");
      era.printButton("「자, 네 차례야.」", 1);
      await era.input();
      era.printButton("「날 믿어. 문제없어.」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 미리 조사해서 알고 있었다. SNS에서,",
        kitaru.get_colored_name(),
        "의 팬들은 인터뷰 답변 때문에 ",
        kitaru.sex,
        "을(를) 버리지 않았다.",
      ]);
      await era.printAndWait([
        "오히려 ",
        kitaru.sex,
        "의 팬 커뮤니티에서는,",
        you.get_colored_name(),
        "의 안내에 따라 출주 자격을 위한 투표를 시작한 사람도 있다.",
      ]);
      await kitaru.say_and_wait(["읏! ", callname, "이(가) 그렇게 말씀하신다면……"]);
      await kitaru.say_and_wait(
        "아무튼! 팬들의 야유 속에서 천국에 가 버리면 수정 구슬은 당신께 맡길게요!",
      );
      await era.printAndWait([
        "처형장으로 향하는 듯한 비장함을 띠고,",
        kitaru.get_colored_name(),
        "은(는) 앞으로 걸었다.",
      ]);
      era.drawLine({ content: "잠시 후" });
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) URA 문장이 장식된 인터뷰 배경 앞에 서 있다.",
      ]);
      await you.say_as_passer_by_and_wait("여성 진행자", [
        kitaru.get_colored_name(),
        ' ',
        kitaru.adult_sex_title,
        ", 봄 시즌 목표를 말씀해 주시겠어요?",
      ]);
      await kitaru.say_and_wait("으악! 시작부터 그런 질문인가요?");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이(가) 이렇게 나올 줄은 알았다. 그래도 ",
        you.get_colored_name(),
        "은(는) 어쩔 수 없이 이마를 짚었다.",
      ]);
      await era.printAndWait([
        "직접 조사한 바로는,",
        kitaru.get_colored_name(),
        "의 팬들은 인터뷰 답변 때문에 ",
        kitaru.sex,
        "을(를) 버리지 않았다.",
      ]);
      era.printButton("「모두에게 말해 줘.」", 1);
      await era.input();
      await era.printAndWait([
        kitaru.teen_sex_title,
        "의 어깨에 손을 얹고 살짝 힘을 주어, 여전히 거부하는 ",
        kitaru.sex,
        "을(를) 진행자의 마이크 앞으로 밀었다.",
      ]);
      await kitaru.say_and_wait("읏! 정말……알겠어요.");
      await kitaru.say_and_wait("여러분, 이번 봄 제 목표는!");
      await kitaru.say_and_wait("목표라기보다는 꿈이네요──!");
      await kitaru.say_and_wait("타카라즈카 기념에 나가는 거예요!");
      await era.printAndWait([
        "스스로도 이렇게 순조롭게 말할 줄은 몰랐던 모양이다.",
        kitaru.get_colored_name(),
        "의 얼굴은 먼저 놀라더니, 판결을 기다리듯 고개를 숙였다.",
      ]);
      await kitaru.say_and_wait("네?");
      era.printButton("박수를 친다", 1);
      await era.input();
      await era.printAndWait("객석에서 박수가 터졌다.");
      await kitaru.say_and_wait("박수요? 왜요?");
      await you.say_as_passer_by_and_wait("팬 A", [
        "힘내! ",
        kitaru.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        "팬 B",
        "투표할 테니까! 꼭 나와!",
      );
      await kitaru.say_and_wait(
        "여러분, 왜 그러세요? 그 인터뷰는 그렇게 엉망이었는데……",
      );
      await you.say_as_passer_by_and_wait("팬 A", [
        "아, 정말 처참했지. 하지만 그게 ",
        kitaru.get_colored_name(),
        "잖아.",
      ]);
      await you.say_as_passer_by_and_wait(
        "팬 B",
        "누구나 헤맬 수 있잖아. 친근감이라고 할까?",
      );
      await kitaru.say_and_wait(
        "친근감……그럼 아직 버림받지 않은 건가요?",
      );
      await you.say_as_passer_by_and_wait(
        "팬 C",
        "버릴 리 없잖아! 국화상에서 그렇게 필사적으로 달리던 모습, 잊을 수 없어!",
      );
      await you.say_as_passer_by_and_wait(
        "팬 D",
        "맞아! 타카라즈카 기념도 힘내!",
      );
      await kitaru.say_and_wait("네……네……!");
      await kitaru.say_and_wait("다시 한번 도전해 볼게요!");
      await era.printAndWait([
        "신에게 버림받아도 팬들이 거두어 준다. 투표 결과가 발표된 뒤,",
        kitaru.get_colored_name(),
        "은(는) 간신히 타카라즈카 기념 출주 자격을 얻었다.",
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 더 이상 운세에 의지하지 않는다……",
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = "타카라즈카 기념을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait("영광을 향한 참배길은 이미 끊어져 있었어요!");
      await kitaru.say_and_wait(
        "하지만 모두의 크고 작은 소망이 하나씩 모여서!",
      );
      await kitaru.say_and_wait("저를 위해 다시 그 길을 열어 줬어요!");
      await kitaru.say_and_wait("타카라즈카 기념!");
      await kitaru.say_and_wait(["절대 기대를 저버리지 않을게요,", callname, '！']);
      await kitaru.say_and_wait("최고의 레이스를 모두에게 보여 드리겠어요!");
      era.printButton("「이제 괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "네! 전에는 ",
        kitaru.elder_sibling_sex_title,
        "의 소망만 짊어지고 크고 작은 개운 도구에 기대 걸었어요.",
      ]);
      await kitaru.say_and_wait(
        "지금은 많은 팬들의 소망도 짊어지고 있어요! 전보다 훨씬 강해요!",
      );
      await kitaru.say_and_wait("게다가 가장 중요한, 스스로 이기고 싶은 마음도요!");
      await kitaru.say_and_wait("이 의식은……");
      await kitaru.say_and_wait(
        "아뇨……레이스는 운에 기대지 않고 제 의지로 달릴 거예요!",
      );
      era.printButton("「좀 너무 멋 부리는 거 아냐?」", 1);
      era.printButton("「그 기세로 가!」", 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait("그, 그렇게 말씀하시니～ 과장이네요, 과장……");
      } else {
        await kitaru.say_and_wait(
          "네! ……저도 조금 과장했다고는 생각하지만요.",
        );
      }
      await kitaru.say_and_wait(
        "그래도! 마음은 진심이에요! 이번 운세 통에서 무엇이 나올지!",
      );
      await kitaru.say_and_wait("정하는 건 저예요!");
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = "재기";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} kink_sho_kiss 金鯱賞の前にキスしたか
     */
    const f = async (kitaru, you, callname, kink_sho_kiss) => {
      const ret = [];
      await era.printAndWait([
        "관중석에서는 타케미카즈치 신이나 낼 법한 엄청난 환호가,",
        kitaru.get_colored_name(),
        "의 승리를 알렸다.",
      ]);
      await era.printAndWait("일은 사람이 이루는 법. 뜻이 있는 자는 끝내 이룬다.");
      await era.printAndWait([
        "슬럼프를 벗어난 뒤의 대부활.",
        kitaru.get_colored_name(),
        "의 오늘 달리기는 그 말 자체다.",
      ]);
      era.println();
      era.drawLine({ content: "한신 경기장 대기실" });
      await kitaru.say_and_wait([callname, "! 이겼어요! 이겼어요!"]);
      era.printButton("「그래! 팬들도 기뻐해!」", 1);
      await era.input();
      await kitaru.say_and_wait("다음 레이스는 뭘로 할까요?");
      await kitaru.say_and_wait("여름 합숙 동안 천천히 생각해 봐요.");
      await kitaru.say_and_wait(["맞아요,", callname, '！']);
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await kitaru.say_and_wait("제 길을 걷는 법이 조금 보이는 것 같아요!");
      await you.say_and_wait("알려 줄래?");
      await kitaru.say_and_wait("음……아직은 막연한 예감뿐이에요!");
      if (
        era.get('love:56') >= 75 &&
        kink_sho_kiss &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait([
          "하지만 그 길에는 ",
          callname,
          "이(가) 있어야 해요!",
        ]);
        await era.printAndWait([
          "말을 마치고 운동 후 뺨이 붉어진 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "의 허리를 감쌌다.",
        ]);
        await era.printAndWait([
          "일부러 느슨하게 한 승부복이,",
          kitaru.sex,
          "의 반듯한 쇄골과 숨결에 맞춰 떨리는 가슴살을 반쯤 가리고 드러낸다.",
        ]);
        await era.printAndWait(
          "더 아래에서는 젖은 흰 스타킹이 서로 비벼지고 파란 주름치마가 다리 사이로 말려 들어간다.",
        );
        await kitaru.say_and_wait(["저기……", callname, '……']);
        await kitaru.say_and_wait([
          "킨코상 때는 정말 죄송했어요.",
          callname,
          "에게 그런 말을 하고……",
        ]);
        await kitaru.say_and_wait(
          "괜찮으시면……저, 저를 사죄의 공물로 삼아 주세요……",
        );
        era.printButton("받아들인다", 1);
        era.printButton("거절한다", 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            "승리하고 돌아온 ",
            kitaru.get_colored_name(),
            "을(를) 벽가로 밀어붙였다.",
          ]);
          await kitaru.say_and_wait([callname, '！']);
          await era.printAndWait(
            "젖은 흰 스타킹과 가슴 사이, 겨드랑이의 달콤한 냄새를 깊이 들이마신다.",
          );
          await era.printAndWait([
            "대기실 화면 속 해설자의 평가에 맞춰, 오늘 우승한 ",
            kitaru.uma_sex_title,
            "의 단련된 몸을 함께 음미한다.",
          ]);
          await era.printAndWait([
            "숨결 속에서 ",
            kitaru.get_colored_name(),
            "의 오른다리를 어깨에 멘다. 어릴 때부터 신악을 연습한 ",
            kitaru.sex,
            "은(는) 유연하다.",
          ]);
          await era.printAndWait([
            "벗은 속옷과 실을 잇는 입구에 육봉을 대자 담당은 반사적으로 달아나려다, 오늘 자신이 공물이라는 것을 떠올리고 멈췄다.",
          ]);
          await era.printAndWait(
            "넣었다. 허리에 달린 에마가 기도하듯 소리를 낸다.",
          );
          await era.printAndWait([
            "가차 없이 찌르며, 욕망에 물든 목소리로 ",
            kitaru.get_colored_name(),
            "이(가) 어떻게 사과하든 듣지 않는다.",
          ]);
          await era.printAndWait([
            "그 뒤 안에 쏟아, 늘 손이 많이 가는 담당의 자궁을 ",
            you.get_colored_name(),
            "의 정액으로 채우려 했다.",
          ]);
          await era.printAndWait([
            kitaru.sex,
            "의 세일러복 아래 평평한 배가 조금 부풀 때까지 계속하다가, 이 뒤에 위닝 라이브가 있음을 떠올리고 멈췄다.",
          ]);
          await era.printAndWait([
            "이후 라이브에서 좀처럼 실수하지 않는 ",
            kitaru.get_colored_name(),
            "이(가) 연달아 몇 번 실수했다.",
          ]);
          await era.printAndWait(
            "라이브는 아직 중반인데 갈아입은 지 얼마 안 된 무대 의상은 땀에 젖었다. 가슴과 배의 천에 물자국이 비치고, 짧은 치마 속 떨리는 다리에서 떨어지는 물방울이 턱을 타는 땀과 함께 무대에 떨어졌다.",
          );
        } else {
          await era.printAndWait([
            "거절했다.",
            you.get_colored_name(),
            "은(는) 까닭 없이 뾰로통해진 ",
            kitaru.get_colored_name(),
            "이(가) 라이브 대기실로 향하는 것을 보았다.",
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = "소원 없는 소원";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 평소처럼 신사의 종 앞에 서 있다.",
      ]);
      await kitaru.say_and_wait("후후! 그럼 소원을 빌게요!");
      await kitaru.say_and_wait("아직 모르는 다음 레이스가……");
      await kitaru.say_and_wait(
        "어! 뭐든 좋아요. 신님은 보고만 계세요. 제가 직접 할 테니까요!",
      );
      await kitaru.say_and_wait("다른 소원으로 할게요……");
      await era.printAndWait([
        "하지만 고개를 숙여 잠시 생각한 뒤, 마음을 가라앉히던 ",
        kitaru.teen_sex_title,
        "이(가) 갑자기 ",
        kitaru.sex,
        "특유의 괴성을 질렀다.",
      ]);
      await kitaru.say_and_wait("어! 네에～? 어라?");
      await era.printAndWait("그러더니 연기처럼 신사를 뛰쳐나갔다.");
      era.drawLine({ content: you.name + "의 사무실" });
      await era.printAndWait([
        "주황색 머리의 ",
        kitaru.teen_sex_title,
        "이(가) 황급히 ",
        you.get_colored_name(),
        "의 사무실 문을 열고 뛰어들었다.",
      ]);
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await kitaru.say_and_wait([callname, "! 큰일이에요!"]);
      await kitaru.say_and_wait(
        "점술을 좋아하는 제가! 빌 소원이 없어요!",
      );
      await kitaru.say_and_wait(
        "좋은 인연도, 이루고 싶은 소원도 이미 전부 이루었어요.",
      );
      await kitaru.say_and_wait("또 국화상이 끝났을 때와 같은 걸까요.");
      era.printButton("「그건 지금 후쿠가 만족스럽다는 뜻이지.」", 2);
      await era.input();
      await kitaru.say_and_wait("만족스럽다고요?");
      await kitaru.say_and_wait([
        "음……확실히. 앞으로의 목표도 조금 보이고,",
        callname,
        "도 곁에 있고, 응원해 주는 팬들도 있어요.",
      ]);
      await kitaru.say_and_wait("팬들……");
      await kitaru.say_and_wait([
        "맞아요! ",
        callname,
        ", 지금까지 저를 응원해 준 팬들에게 레이스로 제대로 보답하고 싶어요!",
      ]);
      await kitaru.say_and_wait([callname, ", 좋은 생각 있으세요?"]);
      era.printButton("「똑같이 팬 투표로 나가는 아리마 기념은?」", 1);
      era.printButton("「재팬컵과 아리마 기념 연속 우승은?」", 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait("어머, 이제 그만 놀리세요!");
        await kitaru.say_and_wait(
          "그때 큰소리친 건 알아요. 하지만 아리마 기념뿐이라면 괜찮아요!",
        );
        await kitaru.say_and_wait("정했어요! 아리마 기념이에요!");
      }
      era.drawLine({ content: "후쿠키타루 집안의 신사" });
      await kitaru.say_and_wait(
        "지난 타카라즈카 기념은 신도 같은 팬들이 자비를 베풀어 주셔서 나갈 수 있었어요.",
      );
      await kitaru.say_and_wait(
        "이번에는 제 힘으로 제대로 표를 모아서 나가고 싶어요.",
      );
      await kitaru.say_and_wait(
        "수많은 소망을 모두 모아 연말의 나카야마에서 한꺼번에 이루고 싶어요.",
      );
      await kitaru.say_and_wait(
        "제 소원이 이루어졌으니 이번에는 제가 모두에게 행복을 전할 차례예요!",
      );
      await kitaru.say_and_wait(
        "제가 아리마 기념에서 이기면 모두 행복해지겠죠?",
      );
      await era.printAndWait([
        "시선이 ",
        you.get_colored_name(),
        "에게 향한다.",
        kitaru.sex,
        "의 표정은 무척 담담하다. 신불의 사랑을 받는 ",
        kitaru.uma_sex_title,
        "이라고 해도 이상하지 않다.",
      ]);
      era.printButton("「그래.」", 1);
      era.printButton("「분명!」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 고개를 끄덕여 동의했다.",
      ]);
      await kitaru.say_and_wait(
        "생각해 보면 신 앞에서는 소원만 비는 게 아니네요!",
      );
      await era.printAndWait([
        "주황색 머리의 ",
        kitaru.teen_sex_title,
        "이(가) 한 걸음 앞으로 나섰다. 아직 교복 차림인데도 의식을 치르는 무녀 같은 엄숙함이 차츰 얼굴에 나타난다.",
      ]);
      await kitaru.say_and_wait(
        "여기 좌정하신 신이시여! 제 서약을 받아 주세요!",
      );
      await kitaru.say_and_wait("저는 반드시! 아리마 기념에서 이기겠어요!");
      await kitaru.say_and_wait(
        "자신감을 되찾아 준 분들에게 행복을 전하기 위해서!",
      );
      await era.printAndWait("엄하고 늠름한 목소리가 해 질 녘 어스름에 울린다.");
      await era.printAndWait("그런데도 놀라울 만큼 신성하게 들렸다.");
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: { title: "여름 합숙(시니어급)" },
  ws_95_31: (() => {
    const title = "숲속의 참배";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait([
        "오늘은 오봉의 마지막 날. 관습에 따라 종이 등롱을 강에 띄워 세상을 떠난 친족을 저승으로 보내는 날이다.",
      ]);
      await era.printAndWait([
        "밤, 간신히 길이 보이는 숲에서 연두색 유카타를 입은 ",
        kitaru.get_colored_name(),
        "이(가) 거슬리는 가지를 걷어 내자 인적 없는 강가가 드러났다.",
      ]);
      await era.printAndWait([
        "합숙지 옆 강에는 이미 따뜻한 주황빛 불빛 몇 개가 떠 있다.",
      ]);
      await kitaru.say_and_wait([
        "그럼 마지막 날 의식은 여기서 해요!",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이(가) 어깨에 멘 자루를 내려놓자 무거운 것이 떨어지는 소리가 또렷했다.",
      ]);
      era.printButton("「오늘 계획은?」", 1);
      era.printButton("「안에 뭐가 들었어?」", 2);
      await era.input();
      await kitaru.say_and_wait(["바로 이런 거예요!"]);
      await kitaru.say_and_wait(["이 기회에 예전의 저와도 작별하고 싶어서요!"]);
      await era.printAndWait([
        kitaru.sex,
        "이(가) 자루를 열자 안에는 다양한 개운 도구가 들어 있었다.",
      ]);
      await era.printAndWait([
        "예전에 ",
        kitaru.get_colored_name(),
        "의 기숙사에서 본 것, 사무실에 둔 것, 국화상 뒤에 산 것이 대부분이다.",
      ]);
      await kitaru.say_and_wait([
        "음……기숙사와 훈련실에는 지금 백 개 조금 넘게 남았을 거예요!",
      ]);
      await kitaru.say_and_wait([
        callname,
        "의 집에 둔 것은 드릴게요!",
      ]);
      era.printButton("「아직도 많네……」", 1);
      era.printButton("「고맙게 받을게!」", 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait(["앗! 고르고 또 고른 거라고요!"]);
        await era.printAndWait([
          you.get_colored_name(),
          "에게 지적받은 ",
          kitaru.teen_sex_title,
          "은(는) 조금 뾰로통하게 ",
          you.get_colored_name(),
          "을(를) 노려봤다.",
        ]);
      } else {
        await kitaru.say_and_wait([
          "수정 구슬도 ",
          callname,
          "에게 드리려 했어요! 하지만 나중에 쓸지도 몰라서요!",
        ]);
      }
      era.println();
      await era.printAndWait([
        "작은 깃발, 접힌 자국이 있는 카드, 나무 인형이 강에 던져져 따뜻한 주황빛과 함께 하류로 흘러간다.",
      ]);
      await kitaru.say_and_wait(["어! 이거 환경에 안 좋지 않나요!"]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) ",
        kitaru.get_colored_name(),
        "에게 미리 담당자에게 알렸고 하류의 그물로 모아 한꺼번에 태울 것이라고 전하자,",
        kitaru.teen_sex_title,
        "은(는) 안심하고 ",
        kitaru.sex,
        "의 개운 도구를 흘려보내기 시작했다.",
      ]);
      era.drawLine({ content: "잠시 후" });
      await kitaru.say_and_wait([
        "그럼 이 종이 등롱으로 오늘을 마칠까요.",
      ]);
      await era.printAndWait([
        "불빛으로 따뜻한 주황색을 띤 네모난 종이 등롱이 물 위에 뜬다. 하지만 등롱은 못 박힌 듯 강 한가운데서 움직이지 않는다.",
      ]);
      await kitaru.say_and_wait(["하아……"]);
      await era.printAndWait(["어쨌든 벌써 한밤중이다. 돌아갈 때다."]);
      await era.printAndWait([
        "멍한 ",
        kitaru.get_colored_name(),
        "은(는) 길을 잘 기억하지 못하는 모양이다. 헤맬수록 조급해지는 걸음을 인간인 ",
        you.get_colored_name(),
        "은(는) 따라갈 수 없다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 담당은 거의 미친 듯 앞의 가지를 헤친다. 연두색 유카타가 어두운 숲에 보였다 사라진다.",
        you.get_colored_name(),
        "은(는) 뒤처질 것 같다.",
      ]);
      era.printButton("「마치카네 후쿠키타루!」", 1);
      era.printButton("「기다려!」", 2);
      await era.input();
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "이(가) 아무리 불러도 앞서 달리는 ",
        kitaru.uma_sex_title,
        "은(는) 들리지 않는 듯 숲속으로 계속 달린다.",
      ]);
      await era.printAndWait([
        "목소리가 어두운 숲에 울린다. 시야 안에는 지금 ",
        you.get_colored_name(),
        "혼자뿐이다.",
      ]);
      await era.printAndWait([
        "옆의 나무줄기를 짚자,",
        you.get_colored_name(),
        "의 헐떡이는 폐가 겨우 쉬었다. 하지만……이제 어떡하지.",
      ]);
      await era.printAndWait(["바스락!"]);
      await era.printAndWait([
        "뒤에서 나뭇잎을 헤치는 소리가 났다.",
        kitaru.get_colored_name(),
        "인가. 하지만 이 근처에는 곰도 나온다고 했다……담당이 없는 ",
        you.get_colored_name(),
        "은(는) 숨는 게 낫지 않을까.",
      ]);
      await kitaru.say_as_unknown_and_wait("어이!");
      await kitaru.say_as_unknown_and_wait([
        you.get_colored_actual_name(),
        you.adult_sex_title,
        '！',
      ]);
      await kitaru.say_as_unknown_and_wait("여기다!");
      await era.printAndWait([
        "돌아보니 미소 짓는 ",
        kitaru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 뒤에 서 있었다.",
      ]);
      await kitaru.say_and_wait("그럼! 다시 뒤처지지 않도록.");
      await kitaru.say_and_wait("제 손을 잡아 주세요!");
      era.printButton("손을 내민다", 1);
      era.printButton("당연히 손을 내민다", 2);
      await era.input();
      era.drawLine({ content: "잠시 후" });
      await era.printAndWait("큰길로 돌아온 모양이다.");
      let direction = 0,
        temp;
      do {
        await era.printAndWait([
          you.get_colored_name(),
          "와(과) ",
          kitaru.get_colored_name(),
          "이(가) 걷다 보니 눈앞에 갈림길이 나타났다.",
        ]);
        await kitaru.say_and_wait("그럼! 이쪽은 어떨까요?");
        await era.printAndWait([
          you.get_colored_name(),
          "의 옆에 있던 ",
          kitaru.get_colored_name(),
          "이(가) 왼쪽 길을 가리켰다.",
        ]);
        era.printButton("왼쪽으로 간다", 1);
        era.printButton("오른쪽으로 간다", 2);
        temp = await era.input();
        direction += temp === 2;
      } while (temp === 2 && direction < 3);
      if (direction < 3) {
        await era.printAndWait([
          "나무가 드문드문해지며 시야가 밝아졌다. 이윽고 ",
          you.get_colored_name(),
          "앞에 폐허가 나타났다.",
        ]);
        await era.printAndWait([
          "푸른 덩굴에 뒤덮인 도리이가 이 잔해 위에 서 있다. 오랫동안 버려진 신사인 듯하다.",
        ]);
        await kitaru.say_and_wait("어머 어머, 정말 운이 좋네요!");
        await kitaru.say_and_wait("이런 특별한 영지가 아직 남아 있었다니.");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "의 손을 잡아끌어 무너진 배전 지붕을 넘어갔다.",
        ]);
        await kitaru.say_and_wait("음! 영력이 아주 풍부해요!");
        await kitaru.say_and_wait([
          "그럼,",
          you.get_colored_actual_name(),
          you.adult_sex_title,
          ", 점치고 싶은 일이 있나요?",
        ]);
        era.printButton("「이제 돌아가자.」", 1);
        era.printButton("「물어봐도 돼?」", 2, {
          disabled: era.get('love:56') < 75,
        }); // 好感で解放
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait("그런가요?");
          await kitaru.say_and_wait("그럼 돌아가요!");
          await era.printAndWait([
            "그 뒤,",
            kitaru.get_colored_name(),
            "와(과) ",
            you.get_colored_name(),
            "은(는) 돌아왔다.",
            kitaru.get_colored_name(),
            "은(는) 몹시 지쳤는지 눕자마자 잠든 숨소리를 냈다.",
          ]);
        } else {
          await kitaru.say_and_wait("물론이죠, 뭐든지요!");
          await era.printAndWait([
            "눈앞의 ",
            kitaru.uma_sex_title,
            "은(는) 겉모습만 보면 ",
            you.get_colored_name(),
            "의 담당과 완전히 같고 웃는 모습도 다르지 않다.",
          ]);
          await era.printAndWait([
            "하지만 소리 없이 ",
            you.get_colored_name(),
            "뒤에 나타난 것, 갑자기 바뀐 호칭, 여기로 이끈 것까지 위화감은 셀 수 없이 많다.",
          ]);
          era.printButton("「넌 누구야?」", 1);
          await era.input();
          kitaru.name = "마치카네 후쿠키타루?";
          await kitaru.say_and_wait([
            "……아하하. 역시 그 아이의 ",
            callname,
            "/인도자로군.",
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 모습으로 나타난 ",
            kitaru.teen_sex_title,
            "은(는) 작게 웃고 있다.",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "의 눈앞에서 입을 움직이는데도,",
            kitaru.sex,
            "의 대답은 직접 ",
            you.get_colored_name(),
            "의 의식에 떠오르는 것 같다.",
          ]);
          await kitaru.say_and_wait([
            "미안하다. 내 무녀/네 담당의 몸을 빌렸다. 하지만,",
            kitaru.sex,
            "이(가) 운명의 사람을 찾은 뒤로 틈을 내어 이야기하고 싶었지.",
          ]);
          await kitaru.say_and_wait("음……너는 별로 놀라지 않는군.");
          era.printButton("(난 마치카네 후쿠키타루의 트레이너니까.)", 1);
          era.printButton(
            `（${kitaru.sex}에게 일어나는 일이라면 이 정도는 신기하지도 않지.)`,
            2,
          ); // 好感で解放
          await era.input();
          await kitaru.say_and_wait("어머!");
          await kitaru.say_and_wait([
            "그렇다고 해도,",
            kitaru.sex,
            "의 ",
            kitaru.elder_sibling_sex_title,
            "이(가) 죽기 전에는,",
            kitaru.sex,
            "도 점이나 주술에 몰두하지 않았다. 예전에는 늘 ",
            kitaru.sex,
            "의 ",
            kitaru.elder_sibling_sex_title,
            "뒤를 따라다니며 무슨 일만 있으면 ",
            kitaru.sex,
            "을(를) 불렀지.",
          ]);
          await kitaru.say_and_wait("성가시지?");
          era.printButton("(고개를 끄덕인다)", 1);
          era.printButton("「확실히 저도 자주 불려 다니죠.」", 2);
          await era.input();
          await era.printAndWait([
            kitaru.sex,
            "은(는) ",
            you.get_colored_name(),
            "을(를) 보면서도 어딘가 먼 곳을 응시하는 눈동자를 보고,",
            you.get_colored_name(),
            "은(는) 대답했다.",
          ]);
          if (teem_count >= 2) {
            await kitaru.say_and_wait([
              kitaru.sex,
              "이(가) 국화상의 약속을 이루도록 도와줬지. 정말 대단하다.",
            ]);
          } else {
            await kitaru.say_and_wait(
              "첫 담당으로 국화상을 따내다니, 정말 대단해.",
            );
          }
          await kitaru.say_and_wait([
            kitaru.sex,
            "이(가) 믿는 신으로서 나는 실패했다고 생각한다. 이렇게 영력이 뛰어난 무녀가 있는데도.",
          ]);
          await kitaru.say_and_wait([
            kitaru.sex,
            "이(가) 가장 필요로 할 때 나타나지 못하고, 가장 괴로울 때도 이끌지 못했어. 가끔 ",
            kitaru.sex,
            "의 꿈에 나타나 작은 힌트를 주는 정도였지.",
          ]);
          await kitaru.say_and_wait("으으……신자도 아직 적으니 말이다.");
          await kitaru.say_and_wait([
            "다만 사람이 늘면 계속 ",
            kitaru.sex,
            "을(를) 지켜볼 수는 없겠지. 그것도 좋은 일만은 아닌가?",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "의 담당에게 깃든 신은 여기까지 말하고 무의식적으로 머리를 헝클기 시작했다.",
            kitaru.get_colored_name(),
            "와(과) 같은 틀에서 나왔다고 해야 할까.",
          ]);
          await kitaru.say_and_wait(you.actual_name_with_title);
          era.printButton("「네.」", 1);
          era.printButton("「뭐지?」", 2);
          await era.input();
          await kitaru.say_and_wait([
            you.get_colored_name(),
            "이(가) ",
            kitaru.sex,
            "의 ",
            callname,
            "이라서 정말 다행이야!",
          ]);
          await era.printAndWait([
            "집안의 신에게 몸을 맡겼던 ",
            kitaru.get_colored_name(),
            "은(는) 몇 번 눈을 깜빡이더니 힘없이 ",
            you.get_colored_name(),
            "의 품에 쓰러졌다.",
          ]);
          await typing(
            "이 아이를 부탁하네. " + kitaru.sex + "의 운명의 사람이여",
            kitaru.color,
          );
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 몸이 조금 뜨겁다.",
          ]);
          kitaru.name = void 0;
        }
      } else {
        await era.printAndWait([
          "돌고 돌아 겨우 빠져나왔다. 멀리 기숙사 불빛이 희미하게 보인다……",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_37: (() => {
    const title = "각자의 천명";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 주황색 머리의 담당이 대리석 묘비 표면을 쓰다듬는 것을 보았다.",
      ]);
      await era.printAndWait([
        "국화상 전처럼 잠시 낮게 중얼거린 뒤,",
        kitaru.get_colored_name(),
        "은(는) 돌아서서 ",
        you.get_colored_name(),
        "에게 고개를 끄덕였다.",
      ]);
      era.printButton("「돌아갈까?」", 1);
      await era.input();
      await kitaru.say_and_wait("……네.");
      await era.printAndWait([
        "묘지를 나서도,",
        kitaru.get_colored_name(),
        "은(는) 평소의 쾌활함을 되찾지 않았다.",
      ]);
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await kitaru.say_and_wait([
        "국화상을 차지하고,",
        kitaru.elder_sibling_sex_title,
        "의 그림자에서 벗어나 트레이너와 함께 보낸 날들.",
      ]);
      await kitaru.say_and_wait("이 삼 년은 제게 꿈만 같았어요.");
      await era.printAndWait([
        "말을 마친 ",
        kitaru.teen_sex_title,
        "은(는) 다시 입을 다물었고 둘은 그대로 돌아가는 길을 걸었다. 길 양옆에서,",
        kitaru.get_colored_name(),
        "의 머리색 같은 단풍잎이 끊임없이 떨어진다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) ",
        kitaru.sex,
        "에게 소매를 잡아당겨졌음을 알아차릴 때까지.",
      ]);
      await kitaru.say_and_wait("맞아요!");
      await kitaru.say_and_wait([callname, "! 전에 말씀드린 앞으로의 목표 말이에요!"]);
      await kitaru.say_and_wait(
        "앞으로 가장 강력하고 큰 대길급 행복을 얻는 법을 완전히 정했어요!",
      );
      era.printButton("「뭔데?」", 1);
      era.printButton("「알려 줄래?」", 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait("물론이죠!");
      }
      await kitaru.say_and_wait(
        "그건──이대로 계속 운세를 좇아 달리는 거예요!",
      );
      await kitaru.say_and_wait(
        "하지만 전처럼 하늘만 원망하지는 않을 거예요!",
      );
      await kitaru.say_and_wait(
        "운세가 어떻든 마주하는, 그런 달리기예요!",
      );
      await kitaru.say_and_wait(
        "말하자면 운명이 차려 준 음식을 하나씩 맛보는 거죠.",
      );
      era.printButton("「멋진 말이네!」", 1);
      era.printButton("「듣기는 좋네!」", 2);
      await era.input();
      await kitaru.say_and_wait("어!");
      await kitaru.say_and_wait("맞아요!");
      await era.printAndWait([
        "흥분이 절정에 이르자,",
        kitaru.get_colored_name(),
        "은(는) 달리기 시작했다. 하얀 겨울날에 한 줄기 활기가 번진다.",
      ]);
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          "무언가 떠오른 모양이다. 시야에서 사라질 뻔한 ",
          kitaru.get_colored_name(),
          "이(가) 다시 달려와,",
          you.get_colored_name(),
          "의 손을 잡았다.",
        ]);
        await kitaru.say_and_wait(["맞아요! ", callname, '！']);
        await kitaru.say_and_wait("당신도 제 곁에 있어 주셔야 해요!");
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 통통 뛰듯 ",
        you.get_colored_name(),
        "앞에서 달렸다. 미소가 다시 ",
        kitaru.sex,
        "의 얼굴로 돌아왔다.",
      ]);
      await era.printAndWait(
        "밝은 주황색 머리카락이 가을 하늘을 나는 낙엽 사이로 보였다 사라지며 금빛으로 빛난다.",
      );
      await era.printAndWait([
        "아리마 기념은 코앞이다.",
        kitaru.get_colored_name(),
        "도 이때 자신의 길을 찾았다.",
      ]);
      await era.printAndWait([
        "앞으로 운세 통에서 무엇이 나오든,",
        kitaru.sex,
        "은(는) 담담히 받아들일 수 있을 것이다.",
      ]);
      if (era.get('talent:0:自信程度') === 1) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          "은(는) 더 이상 [비굴]하지 않다!",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  cl_before_arim_kin_s: (() => {
    const title = "승리의 별을 따다";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        "아리마 기념까지 며칠 남았다. 하지만 그 전에, 마찬가지로 일 년에 한 번인 크리스마스가 먼저 찾아왔다.",
      );
      await era.printAndWait(
        "크리스마스 분위기는 이미 트레센 전체에 퍼져 있다. 학생들이 꾸민 장식이 곳곳에 보인다.",
      );
      await era.printAndWait([
        "아직 아리마 기념 전술을 생각하던 ",
        you.get_colored_name(),
        "이(가) 창문에서 나는 소리를 들었다.",
      ]);

      await kitaru.say_and_wait("헤이!");
      await era.printAndWait([
        "소리가 난 쪽을 보았다.",
        you.get_colored_name(),
        "의 손이 많이 가는 담당이 큰 자루를 메고 창문으로 들어오려 하고 있다.",
      ]);
      await era.printAndWait([
        "무엇이 들었는지 모를 자루가 좁은 창문에 걸려,",
        kitaru.uma_sex_title,
        "의 괴력에 점점 찌그러진다.",
      ]);
      await kitaru.say_and_wait("어라!");
      await era.printAndWait(
        "찢어지는 소리와 함께 지팡이 사탕, 전구, 진저브레드맨, 선물 상자가 쏟아졌다. 크리스마스의 상징들이 자루에서 넘쳐흘렀다.",
      );
      await era.printAndWait(
        "평범했던 사무실이 순식간에 크리스마스 분위기로 가득해졌다.",
      );
      await kitaru.say_and_wait("짜잔! 마치카네 산타키타루예요!");
      await kitaru.say_and_wait([callname, ", 놀라셨어요?"]);
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait("어! 괜찮아요!");
      await kitaru.say_and_wait([
        "앗, 맞다 맞다,",
        callname,
        "에게 드리고 싶은 게 있어요!",
      ]);
      await era.printAndWait([
        "바닥에 흩어진 물건을 뒤져,",
        kitaru.get_colored_name(),
        "은(는) 의외로 포장이 깔끔한 상자를 집어 들었다.",
      ]);
      await kitaru.say_and_wait(
        "짜잔!──상자 안에는 수령 천 년의 크리스마스트리가 있어요!",
      );
      await kitaru.say_and_wait("미니어처지만요.");
      await era.printAndWait(
        "아쉽게도 열어 보니 손수 만든 트리는 아까 소동으로 두 동강 났고, 꼭대기의 별까지 떨어져 있었다.",
      );
      await kitaru.say_and_wait("어! 이럴 수가!");
      await kitaru.say_and_wait([
        "후우……이렇게 된 이상,",
        callname,
        "에게 밖에 같이 나가 달라고 할 수밖에요.",
      ]);
      era.drawLine({ content: "트레센 학원 옥상" });
      await era.printAndWait([
        kitaru.get_colored_name(),
        "와(과) 늘 가던 옥상에 왔다. 겨울바람에 ",
        you.get_colored_name(),
        "은(는) 조금 떨었지만,",
        kitaru.get_colored_name(),
        "은(는) 전혀 개의치 않는다.",
      ]);
      await kitaru.say_and_wait([
        "네! ",
        callname,
        ", 손에 든 트리를 하늘을 향해 들어 주세요!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 시키는 대로 했다. 오늘 밤 별하늘은 융단 같아, 별이 흩어진 밤이 트리 가지 사이로 비친다.",
      ]);
      await kitaru.say_and_wait(
        "보세요! 하늘의 별을 가득 담은 것 같잖아요!",
      );
      await kitaru.say_and_wait("낭만적이에요!");
      era.printButton("「실물 별이 더 좋겠는데.」", 1);
      await era.input();
      await kitaru.say_and_wait("어! 하늘의 별로는 안 되나요?");
      await era.printAndWait([
        "그 말을 듣자마자 주황색 머리의 ",
        kitaru.teen_sex_title,
        "은(는) 고개를 숙였다.",
      ]);
      era.printButton("「아리마 기념 승리의 별로 장식하자.」", 1);
      await era.input();
      await kitaru.say_and_wait("오! 아리마 기념!");
      await kitaru.say_and_wait(
        "우와아! 그런 방법이 있었네요. 한 수 배웠어요!",
      );
      era.printButton("「그럼 그렇게 할까?」", 1);
      await era.input();
      await kitaru.say_and_wait("네! ……네, 네……뭐든 따를게요!");
      await kitaru.say_and_wait([
        "저기, 오늘의 ",
        callname,
        ", 정말 박력 있으세요!",
      ]);
      await kitaru.say_and_wait("보고만 있어도 가슴이 두근거린다고 할까……");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 뺨에 귀여운 홍조가 어리고 눈동자가 흔들린다. 소중히 대하고 싶은 얼굴이다.",
      ]);
      await era.printAndWait([
        "하지만 아리마 기념이 코앞이다.",
        you.get_colored_name(),
        "은(는) 부풀어 오르는 욕망을 눌렀다.",
      ]);
      await era.printAndWait([
        "트리 꼭대기에 올릴 별은 아직 없다.",
        kitaru.get_colored_name(),
        "와(과) 함께 마지막 별을 따러 가자.",
      ]);
      await era.printAndWait(
        "아리마 기념 뒤에 크리스마스를 축하하는 편이 나을지도 모른다.",
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = "아리마 기념을 앞두고";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "드물게,",
        kitaru.get_colored_name(),
        "와(과) 코스로 이어지는 지하 통로까지 함께 걸었다.",
      ]);
      await era.printAndWait([
        "출구는 선택받은 자만 지날 수 있는 괴물의 입 같다.",
        kitaru.uma_sex_title,
        "이(가) 출구의 햇빛에 삼켜질 때마다.",
      ]);
      await era.printAndWait(
        "멀리서 팬들의 응원이 울린다. 맛있는 것을 먹은 괴물이 만족스럽게 포효하는 것 같다.",
      );
      await era.printAndWait(
        "관객의 함성이 겹쳐 지하 통로의 벽까지 떨린다.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 앞서 걷던 ",
        kitaru.get_colored_name(),
        "이(가) 꿈에서 깬 듯 잠시 멈추는 것을 보았다.",
      ]);
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait("읏!");
      await kitaru.say_and_wait("……정말 아리마 기념까지 왔어요!");
      await kitaru.say_and_wait("지금까지 많은 분께 폐를 끼쳐서……");
      era.printButton("「그럼 모두를 위해 오늘 이기자.」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await era.printAndWait([
        "모두 이미 입장했다. 지하 통로에 남은 것은 ",
        you.get_colored_name(),
        "와(과) ",
        kitaru.get_colored_name(),
        "뿐이다.",
      ]);
      await kitaru.say_and_wait("맞아요!");
      await kitaru.say_and_wait("저기……행운의 지원을 받고 싶어요!");
      if (era.get('love:56') < 50) {
        await era.printAndWait([
          "체온이 뜨거운 주황색 머리의 ",
          kitaru.uma_sex_title,
          "이(가) ",
          you.get_colored_name(),
          "의 품에 뛰어들자 귀가 움직여 ",
          you.get_colored_name(),
          "의 얼굴을 몇 번 두드렸다.",
        ]);
      } else {
        await era.printAndWait([
          "잠시 바라본 뒤,",
          you.get_colored_name(),
          "의 손이 ",
          kitaru.get_colored_name(),
          "의 목 옆을 돌아 뒤통수를 쓰다듬고, 고개를 숙여 ",
          kitaru.sex,
          "의 입술에 입을 맞췄다.",
        ]);
        await era.printAndWait(
          "다른 출주자가 볼 수도 있는 곳에서 침을 나눈다.",
        );
        era.println();
        await you.say_as_passer_by_and_wait(
          `지나가던 ${kitaru.uma_sex_title}`,
          "달달하네……",
        );
        era.println();
      }
      await kitaru.say_and_wait(
        "후우……이제 눈에서 운세 쪽지가 흘러나올 것 같아요!",
      );
      await era.printAndWait([
        "이렇게 가까우니,",
        you.get_colored_name(),
        "은(는) 알아차린다.",
        kitaru.sex,
        "의 눈동자 속 별이 더욱 밝아졌다.",
      ]);
      await kitaru.say_and_wait(["그럼 다녀올게요,", callname, '！']);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "이(가) 지하 통로를 빠져나가 괴물의 입을 넘어, 하늘에서 내리는 흰빛에 감싸이는 것을 배웅했다.",
      ]);
      await era.printAndWait("울려 퍼지는 함성 속에서 게이트로 들어간다.");
      era.drawLine({ content: "나카야마 경기장 게이트 안" });
      await kitaru.print_and_wait(
        "전에는 행운이 제 편이면 여기까지 올 수 있을 줄 알았어요!",
      );
      await kitaru.print_and_wait(
        "하지만 행운만으로는 여기 올 수 없어요! 수많은 인연이 저를 이끌어 주었어요!",
      );
      await kitaru.print_and_wait("자신을 제게 겹쳐 보며 응원해 준 팬들!");
      await kitaru.print_and_wait("동기인 동료들!");
      await kitaru.print_and_wait([
        "세상을 떠난 ",
        kitaru.elder_sibling_sex_title,
        '！',
      ]);
      await kitaru.print_and_wait([
        "그리고 계속 필사적으로 저를 키워 주신 ",
        callname,
        '！',
      ]);
      await kitaru.print_and_wait("오늘 저는 신에게 기도하지 않아요.");
      await kitaru.print_and_wait("오늘은──");
      await kitaru.print_and_wait("제가 신이 될 거예요──시라오키님이 되겠어요!");
      await kitaru.print_and_wait("모두에게 행복을 전하는 복의 무스메가 되겠어요!");
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = "복이 오는 지금";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        "옛날에 한 ",
        kitaru.uma_sex_title,
        "이(가) 있었어요. 이름은 ",
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.print_and_wait([
        kitaru.sex,
        "에게는 재능이 없었고, 욕심이 많고, 행운만으로 올라서려는 ",
        kitaru.child_sex_title,
        "이었어요.",
      ]);
      await kitaru.print_and_wait([
        "그런 ",
        kitaru.sex,
        "이(가) 아리마 기념을 제패했어요!",
      ]);
      await kitaru.print_and_wait([
        "그래요……",
        kitaru.sex,
        "은(는) 모든 것을 바쳤어요!",
      ]);
      await kitaru.print_and_wait([
        "그 ",
        kitaru.child_sex_title,
        "은(는) 신이 되어 말의 경계를 넘어 신의 영역에 들어갔고, 그 뒤 한 줄기 흰빛이 되었어요……",
      ]);
      era.drawLine({ content: "나카야마 경기장 지하 통로" });
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 레이스 뒤,",
        you.get_colored_name(),
        "에게 이렇게 이야기했다.",
      ]);
      await kitaru.say_and_wait([callname, "! 성공했어요!"]);
      await kitaru.say_and_wait("행복하세요?");
      await kitaru.say_and_wait("담당이 저라서 다행이라고 생각하시죠?");
      era.printButton("「당연하지!」", 1);
      await era.input();
      await kitaru.say_and_wait("우와아! 그 말이 듣고 싶었어요!");
      await you.say_and_wait("읏!?");
      await era.printAndWait([
        "흥분한 ",
        kitaru.get_colored_name(),
        "이(가) 그대로 ",
        you.get_colored_name(),
        "의 품에 뛰어들어 거리낌 없이 땀을 ",
        you.get_colored_name(),
        "의 셔츠에 흘렸다.",
      ]);
      if (kitaru.sex_code !== 1) {
        await era.printAndWait([
          kitaru.uma_sex_title,
          "의 레이스 뒤 축축하고 달콤한 체취를 ",
          you.get_colored_name(),
          "은(는) 들이마신다. 가슴의 부드러운 감촉은 운동 후의 체온으로 더욱 선명해진다.",
        ]);
      }
      await era.printAndWait([
        "너무 친밀한 행동에 다른 출주자와 트레이너들이 곁눈질한다.",
        you.get_colored_name(),
        "은(는) 어쩔 수 없이 ",
        kitaru.get_colored_name(),
        "의 등을 두드려 얼른 그만두라고 신호했다.",
      ]);
      await kitaru.say_and_wait(
        "좋아요, 이 기세로 승자 인터뷰에 가요!",
      );
      era.drawLine({ content: "아리마 기념 후 취재장" });
      await kitaru.say_and_wait("오늘! 여기서 이 말을 해야 해요!");
      await kitaru.say_and_wait("국화의 무대에 이어! 복은 나카야마에도 왔어요!");
      await kitaru.say_and_wait("진심으로 바라면 복은 와요!");
      await kitaru.say_and_wait("희망을 품으면 행운은 반드시 찾아와요!");
      await kitaru.say_and_wait("그럼! 여러분, 새해 복 많이 받으세요!");
      await era.printAndWait([
        "수많은 조명과 카메라 앞에서 그렇게 말한 ",
        kitaru.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "특유의 두 팔을 하늘로 뻗는 자세로 마무리하며, 소망을 맡긴 모든 팬에게 행복을 전했다.",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "의 뒤에서 함께 인터뷰한 ",
        you.get_colored_name(),
        "도, 이후 사람들의 소원을 빌어 주는 ",
        kitaru.get_colored_name(),
        "와(과) 함께 여러 언론의 지면에 실렸다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_after_arim_kin_s: (() => {
    const title = "마치카네 후쿠키타루라는 이름의 별";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} accept_sex 性行為を受け入れるか
     */
    const f = async (kitaru, you, callname, accept_sex) => {
      const ret = [];
      await era.printAndWait([
        "아리마 기념은 끝났다. 하지만 ",
        kitaru.get_colored_name(),
        "와(과)의 계약이 끝나기 전에, 마찬가지로 일 년에 한 번인 크리스마스가 먼저 찾아왔다.",
      ]);
      await era.printAndWait(
        "크리스마스 분위기는 이미 트레센 전체에 퍼져 있다. 학생들이 꾸민 장식이 곳곳에 보인다.",
      );
      await era.printAndWait([
        "사무실에서 연말 보고에 쫓기던 ",
        you.get_colored_name(),
        "이(가) 창문에서 나는 소리를 들었다.",
      ]);

      await kitaru.say_and_wait("에잇!");
      await era.printAndWait([
        "소리가 난 쪽을 보았다.",
        you.get_colored_name(),
        "의 손이 많이 가는 담당이 큰 자루를 메고 창문으로 들어오려 하고 있다.",
      ]);
      await era.printAndWait([
        "무엇이 들었는지 모를 자루가 좁은 창문에 걸려,",
        kitaru.uma_sex_title,
        "의 괴력에 점점 찌그러진다.",
      ]);
      await kitaru.say_and_wait("어라!");
      await era.printAndWait(
        "찢어지는 소리와 함께 지팡이 사탕, 전구, 진저브레드맨, 선물 상자가 쏟아졌다. 크리스마스의 상징들이 자루에서 넘쳐흘렀다.",
      );
      await era.printAndWait(
        "평범했던 사무실이 순식간에 크리스마스 분위기로 가득해졌다.",
      );
      await kitaru.say_and_wait("짜잔! 마치카네 산타키타루예요!");
      await kitaru.say_and_wait([callname, ", 놀라셨어요?"]);
      era.printButton("「괜찮아?」", 1);
      await era.input();
      await kitaru.say_and_wait("어! 괜찮아요!");
      await kitaru.say_and_wait([
        "앗, 맞다 맞다,",
        callname,
        "에게 드리고 싶은 게 있어요!",
      ]);
      await era.printAndWait([
        "바닥에 흩어진 물건을 뒤져,",
        kitaru.get_colored_name(),
        "은(는) 의외로 포장이 깔끔한 상자를 집어 들었다.",
      ]);
      await kitaru.say_and_wait(
        "짜잔!──상자 안에는 수령 천 년의 크리스마스트리가 있어요!",
      );
      await kitaru.say_and_wait("미니어처지만요.");
      await era.printAndWait(
        "아쉽게도 열어 보니 손수 만든 트리는 아까 소동으로 두 동강 났고, 꼭대기의 별까지 떨어져 있었다.",
      );
      await kitaru.say_and_wait("어! 이럴 수가!");
      await kitaru.say_and_wait([
        "후우……이렇게 된 이상,",
        callname,
        "에게 밖에 같이 나가 달라고 할 수밖에요.",
      ]);
      era.drawLine({ content: "트레센 학원 옥상" });
      await era.printAndWait([
        kitaru.get_colored_name(),
        "와(과) 늘 가던 옥상에 왔다. 겨울바람에 ",
        you.get_colored_name(),
        "은(는) 조금 떨었지만,",
        kitaru.get_colored_name(),
        "은(는) 전혀 개의치 않는다.",
      ]);
      await kitaru.say_and_wait([
        "네! ",
        callname,
        ", 손에 든 트리를 하늘을 향해 들어 주세요!",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 시키는 대로 했다. 오늘 밤 별하늘은 융단 같아, 별이 흩어진 밤이 트리 가지 사이로 비친다.",
      ]);
      await kitaru.say_and_wait(
        "보세요! 하늘의 별을 가득 담은 것 같잖아요!",
      );
      await kitaru.say_and_wait("낭만적이에요!");
      if (
        era.get('love:56') >= 75 &&
        kitaru.sex_code !== 1 &&
        you.sex_code !== 0
      ) {
        era.printButton("「실물 별이 더 좋겠는데.」", 1);
        await era.input();
        await kitaru.say_and_wait("어! 하늘의 별로는 안 되나요?");
        await era.printAndWait([
          "그 말을 듣자마자 주황색 머리의 ",
          kitaru.teen_sex_title,
          "은(는) 고개를 숙였다.",
        ]);
        era.printButton(
          "「예를 들면……마치카네 후쿠키타루라는 별도 괜찮네.」",
          1,
        );
        await era.input();
        await kitaru.say_and_wait("어! 저 말인가요?");
        await era.printAndWait([
          "이름이 불린 ",
          kitaru.teen_sex_title,
          "이(가) 돌아서서 ",
          you.get_colored_name(),
          "을(를) 바라본다. 십자 모양 별의 눈동자가 북극성처럼 밝다.",
        ]);
        await kitaru.say_and_wait(
          "우와아! 그런 방법이 있었네요. 한 수 배웠어요!",
        );
        await kitaru.say_and_wait([
          "저기, 오늘의 ",
          callname,
          ", 정말 박력 있으세요!",
        ]);
        await kitaru.say_and_wait("보고만 있어도 가슴이 두근거린다고 할까……");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 뺨에 귀여운 홍조가 어리고 눈동자가 흔들린다. 소중히 대하고 싶은 얼굴이다.",
        ]);
        await era.printAndWait([
          "무의식적으로 손을 뻗어,",
          kitaru.get_colored_name(),
          "에게 닿기만 해도,",
          kitaru.sex,
          "의 몸을 속속들이 아는 ",
          you.get_colored_name(),
          "은(는) 알아차린다.",
          kitaru.uma_sex_title,
          "치고도 체온이 조금 높다.",
        ]);
        await era.printAndWait("먼저 교복 위로 어깨를 쓰다듬는다.");
        await kitaru.say_and_wait("……어.");
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          "그대로 미끄러뜨려 가슴을 두 번 살짝 집자,",
          kitaru.get_colored_name(),
          "은(는) 거기에 맞춰 작은 신음을 흘렸다.",
        ]);
        await kitaru.say_and_wait("으……");
        await kitaru.say_and_wait("거긴 민감해요……", true);
        await era.printAndWait([
          "더 아래로, 손끝이 허리를 쓴다. 두꺼운 겨울 교복 너머인데도,",
          kitaru.get_colored_name(),
          "은(는) 전류가 흐른 것처럼 떨었다.",
        ]);
        await kitaru.say_and_wait("……하아.");
        await kitaru.say_and_wait(
          "운명의 사람에게 이렇게 만져지는 건 오랜만이에요……",
          true,
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 숨결이 더욱 축축하고 녹아내린다.",
        ]);
        await era.printAndWait([
          "눈앞에서는 반듯한 뺨이 새빨갛게 물들고 눈동자가 흔들리며 눈물이 고인 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "에게 기대 어린 시선을 보내고 있다.",
        ]);
        await kitaru.say_and_wait("원해요……", true);
        era.printButton("말없이 돌아간다", 1);
        era.printButton("후쿠키타루를 안아 든다", 2, {
          disabled: kitaru.sex_code === 1 || you.sex_code === 0 || !accept_sex,
        });
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            "무엇을 기대하는지 알 수 없는 ",
            kitaru.get_colored_name(),
            "을(를) 상대하지 않고,",
            you.get_colored_name(),
            "은(는) 돌아서서 옥상을 나갔다.",
          ]);
        } else {
          await era.printAndWait([
            "아리마 기념에 대비해,",
            kitaru.get_colored_name(),
            "와(과) ",
            you.get_colored_name(),
            "은(는) 오랫동안 금욕했다.",
          ]);
          await era.printAndWait(
            "거리낌 없는 성관계로 보상한다면 나쁘지 않은 선택일지도 모른다.",
          );
          await kitaru.say_and_wait("어앗!");
          await era.printAndWait([
            "다리에 힘이 풀린 ",
            kitaru.get_colored_name(),
            "을(를) 공주님 안기로 안자,",
            kitaru.get_colored_name(),
            "의 가느다란 팔이 ",
            you.get_colored_name(),
            "의 목에 감긴다.",
          ]);
          await kitaru.say_and_wait([callname, "의 냄새……"], true);
          await kitaru.say_and_wait("뜨거워요……", true);
          await era.printAndWait([
            "옥상 입구까지 걸어가는 동안만으로도,",
            kitaru.get_colored_name(),
            "은(는) 참지 못하고 얼굴을 ",
            you.get_colored_name(),
            "의 가슴에 묻었다. 포갠 다리를 비비는 움직임이 점점 심해지고, 옷자락 아래의 야릇한 냄새가 ",
            you.get_colored_name(),
            "의 코에 닿는다.",
          ]);
          era.printButton("후쿠키타루를 안아 든다", 1);
          await era.input();
          await kitaru.say_and_wait("음……", true);
          await era.printAndWait([
            "입을 열지는 않았다. 그래도 ",
            you.get_colored_name(),
            "은(는) 품 안의 담당이 원하는 것을 읽었다.",
          ]);
          await era.printAndWait("옥상 문을 닫아 찬바람을 밖에 가두었다.");
          await era.printAndWait("계단 입구의 공간은 넓지 않다.");
          await era.printAndWait([
            "품 안의 ",
            kitaru.get_colored_name(),
            "에게 등을 돌리게 해 안쪽 콘크리트 벽을 짚게 하고, 교복 치마를 걷어 속옷을 드러낸다.",
          ]);
          await kitaru.say_and_wait(
            ["음, 이 자세로는 ", callname, "이(가) 전혀 안 보여요……"],
            true,
          );
          await era.printAndWait(
            "천은 물방울이 떨어질 만큼 젖었고, 다리를 번갈아 비비는 동안 거의 한 줄의 끈처럼 꼬여 있다.",
          );
          era.printButton("다리를 벌리게 한다", 1);
          await era.input();
          await era.printAndWait([
            kitaru.get_colored_name(),
            "은(는) 시키는 대로 다리를 크게 벌렸다. 속옷을 내리자 작은 구멍과 떨어진 천 사이로 끈적한 실이 늘어졌다.",
          ]);
          await era.printAndWait(
            "그 뒤 손가락을 넣는다. 부드러운 살은 조금도 저항하지 못한다.",
          );
          await kitaru.say_and_wait("하아……하앗.");
          await era.printAndWait([
            "처음에는 조심스러웠다.",
            kitaru.get_colored_name(),
            "의 신음이 심해질수록 나머지 손가락도 가차 없이 함께 넣었다.",
          ]);
          await kitaru.say_and_wait("으읏?!");
          await era.printAndWait([
            "포피를 벗겨 부푼 음핵을 희롱한다. 엄청난 쾌감이 ",
            kitaru.get_colored_name(),
            "의 꼬리뼈 끝에서 일어나 전류처럼 등을 타고 온몸으로 달린다.",
          ]);
          await kitaru.say_and_wait("햐아아아아!");
          await era.printAndWait(
            "절정을 알리는 물이 넘쳐 옥상 입구의 콘크리트에 흩어진다.",
          );
          await era.printAndWait([
            "걷어 올린 겨울 교복 치마에 반쯤 가려진 하얀 엉덩이가,",
            kitaru.get_colored_name(),
            "의 경련에 맞춰 계속 떨린다.",
          ]);
          era.printButton("손을 뻗는다", 1);
          await era.input();
          await kitaru.say_and_wait("햣!");
          await era.printAndWait([
            "먼저 주무르고, 그 뒤 ",
            kitaru.get_colored_name(),
            "의 점점 귀여워지는 신음 속에서 무생물을 다루듯 힘 조절을 잊고 음란한 형태로 바꾸어 간다.",
          ]);
          await era.printAndWait(
            "절정을 알리는 물이 넘쳐 옥상 입구의 콘크리트에 흩어진다.",
          );
          await kitaru.say_and_wait([callname, '……']);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "에게 재촉받아 본격적으로 시작할 때다.",
          ]);
          await era.printAndWait(
            "바지를 내려 이미 발기한 성기를 꺼낸다.",
          );
          await kitaru.say_and_wait("음……");
          await era.printAndWait([
            "다가오는 열기를 느낀 것일까. 굶주린 작은 구멍이 열렸다 닫히며,",
            you.get_colored_name(),
            "의 성기를 부르고 있다.",
          ]);
          await era.printAndWait("그 뒤 굵은 육봉이 깊숙이 들어갔다.");
          await era.printAndWait(
            "구멍 속의 애액과 공기가 가차 없이 밀려난다.",
          );
          await era.printAndWait([
            "성인 남자의 육봉이 구멍 안을 독차지하며,",
            kitaru.teen_sex_title,
            "의 은밀한 곳을 마음대로 한다.",
          ]);
          await kitaru.say_and_wait(
            ["구멍이 오므라들어,", callname, "의 육봉을 감싸고 있어요."],
            true,
          );
          await era.printAndWait("쿵!");
          await era.printAndWait([
            "둔하게 부딪치는 소리가,",
            kitaru.get_colored_name(),
            "의 구멍 깊은 곳에서 들린다.",
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            "은(는) 크게 소리 내려다가,",
            you.get_colored_name(),
            "의 신호에 목소리를 죽였다.",
          ]);
          await kitaru.say_and_wait(
            "제 구멍에서 나는 『쯥쯥』 하는 음란한 소리까지 들려요.",
            true,
          );
          await era.printAndWait([
            "그렇게 생각하면서도,",
            kitaru.get_colored_name(),
            "의 두 다리는 더 벌어져 선 채로 하는 후배위의 자세가 더욱 뚜렷해진다.",
          ]);
          await era.printAndWait(
            "고리 모양의 분홍빛 살이 육봉의 충격에 꿀을 빼앗기는 꽃처럼 바람 속에서 경련하며 흔들린다.",
          );
          await kitaru.say_and_wait(
            "이렇게 격렬하게 하면, 가, 가요～～～",
            true,
          );
          await kitaru.say_and_wait("가요 가요 아아!!!");
          await era.printAndWait([
            "힘이 풀린 연인을 돌려세우자 콘크리트 벽의 차가움에,",
            kitaru.get_colored_name(),
            "의 초점 잃은 별 모양 눈동자가 다시 맞춰진다.",
          ]);
          await era.printAndWait([
            "이번에는 마주 본 입위다.",
            you.get_colored_name(),
            "은(는) 평소 활기찬 ",
            kitaru.uma_sex_title,
            "의 성관계 중 얼굴을 볼 수 있다.",
          ]);
          await kitaru.say_and_wait("쿵～ 쿵～");
          await era.printAndWait(
            "음란한 교합 소리가 옥상 계단 입구의 좁은 공간에 울린다.",
          );
          await kitaru.say_and_wait("너무 격렬해요! 너무 격렬해요!", true);
          await kitaru.say_and_wait("가, 가요～");
          await era.printAndWait("억누르던 요염한 목소리가 마침내 새어 나왔다.");
          await era.printAndWait([
            "말은 그래도 주황색 꼬리는 의지가 있는 듯 ",
            you.get_colored_name(),
            "의 다리에 감긴다. 더욱 세게 얽히는 구멍과 함께 주인이 절정에 가까움을 배반하듯 알린다.",
          ]);
          await kitaru.say_and_wait("가요 아아!!!");
          await era.printAndWait(
            "조금 앞으로 기울여 귀두를 자궁 입구에 대고 정액을 쏟는다.",
          );
          await era.printAndWait(
            "구멍과 육봉이 맞닿은 곳에서 흰 액체가 조금 샜다.",
          );
          era.drawLine();
          await kitaru.print_and_wait("그 뒤 얼마나 계속했을까요.");
          await kitaru.print_and_wait([
            "다음 날 눈을 떴을 때 저는 ",
            callname,
            "의 집 침대에 있었어요.",
          ]);
        }
      } else {
        await era.printAndWait([
          "잠시 축하한 뒤,",
          kitaru.get_colored_name(),
          "와(과) 함께 돌아왔다.",
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = "안녕, 마치카네……";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
     */
    const f = async (kitaru, doto, you, callname, call_58) => {
      await era.printAndWait([
        "어쩌면 마지막이 될 것이다.",
        kitaru.get_colored_name(),
        "의 트레이너로서,",
        kitaru.sex,
        "의 이번 새해 첫 참배에 함께하는 것은.",
      ]);
      await era.printAndWait([
        "그런 마음으로,",
        you.get_colored_name(),
        "은(는) 다시 이 외진 신사의 도리이 앞에 섰다.",
      ]);
      era.printButton("도리이를 지난다", 1);

      await era.input();
      await era.printAndWait(
        "이상하다. 전처럼 다른 세계로 떨어지는 듯한 어긋남은 없다.",
      );
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        "하지만,",
        you.get_colored_name(),
        "이(가) 오래 생각할 틈도 없이 참배길에서 먼저 기다리던 ",
        kitaru.get_colored_name(),
        "이(가) 새해 참배객을 맞을 준비 중인 신사로 ",
        you.get_colored_name(),
        "을(를) 끌어들였다.",
      ]);
      era.drawLine();
      await kitaru.say_and_wait("맞아요, 맞아요! 조금만 더 왼쪽으로.");
      await kitaru.say_and_wait("앗, 어, 네에에!!!");
      await kitaru.say_and_wait(["앗! 위험해요,", call_58, '！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 능숙하게,",
        doto.get_colored_name(),
        "을(를) 비롯해 도우러 온 반 친구들을 지휘하며 새해의 신사를 꾸미고 있다.",
      ]);
      await era.printAndWait(
        "옆에는 미리 접은 공예품과 매달기를 기다리는 등롱이 작은 산처럼 쌓여 앞으로 할 일이 얼마나 많은지 보여 준다.",
      );
      era.printButton("「한 사람 몫을 하게 됐네!」", 1);
      await era.input();
      await era.printAndWait([
        "담당을 칭찬하자 옆에서 사람들을 지휘하던 ",
        kitaru.teen_sex_title,
        "의 두 귀가 아주 살짝 흔들렸다.",
      ]);
      await kitaru.say_and_wait("……네.");
      await era.printAndWait([
        "높이를 가늠한 뒤,",
        kitaru.get_colored_name(),
        "은(는) 종이 등롱을 맡은 갈색의 ",
        kitaru.uma_sex_title,
        "에게 줄을 조금 더 높이 하라고 지시했다.",
      ]);
      await kitaru.say_and_wait([
        "어릴 때,",
        kitaru.elder_sibling_sex_title,
        "와(과) 함께한 새해 첫 참배는 정말 사람으로 넘쳐났어요!",
      ]);
      await kitaru.say_and_wait(
        "그래서 계속 준비해 왔어요. 이번에는 분명 쓸 수 있겠죠.",
      );
      await era.printAndWait([
        "갈색 머리의 ",
        kitaru.uma_sex_title,
        "이(가) 길을 가로지르는 종이 등롱을 다 연결하자, 따뜻한 머리색의 ",
        kitaru.uma_sex_title,
        "은(는) 돌아서서,",
        you.get_colored_name(),
        "의 대답을 기다렸다.",
      ]);
      era.printButton("고개를 끄덕인다", 1);
      era.printButton("「분명 그럴 거야.」", 2);
      await era.input();
      await era.printAndWait([
        "확실히 그렇다. 아리마 기념에서의 ",
        kitaru.get_colored_name(),
        "의 달리기와 발언은 전국의 관객을 놀라게 했다.",
      ]);
      await era.printAndWait([
        "SNS에는 이미 새해 참배에서 아리마 기념을 막 이긴 이 ",
        kitaru.teen_sex_title,
        "에게 행운을 받으려는 이야기가 많다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 숨은 사연도 캐기 좋아하는 언론이 찾아냈다. 이렇게 낙천적인 ",
        kitaru.teen_sex_title,
        "에게 무거운 과거가 있었다는 괴리감보다, 거기서 생긴 감동이 더 컸다.",
      ]);
      await you.say_and_wait(["운명을 짊어지고 달리다", kitaru.uma_sex_title]);
      await era.printAndWait([
        "그렇게 생각하며 최근의 ",
        kitaru.uma_sex_title,
        "지가 ",
        kitaru.get_colored_name(),
        "에게 붙인 이름을 무심코 입에 올렸다.",
      ]);
      await kitaru.say_and_wait("네에!!!");
      await kitaru.say_and_wait("과장이에요!");
      await kitaru.say_and_wait([
        "게다가,",
        kitaru.teen_sex_title,
        "와(과) ",
        kitaru.sex,
        "의 운명의 사람이라는 가십까지……",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 꺼낸 너무 화려한 칭호 때문인지, 그 뒤 떠오른 반쯤 사실인 소문 때문인지, 차분하게 사람들을 지휘하던 ",
        kitaru.get_colored_name(),
        "의 뺨이 붉어졌다.",
      ]);
      await kitaru.say_and_wait(
        "하지만 운명이라……정말 오랫동안 애먹었네요!",
      );
      await kitaru.say_and_wait("게다가 저……이제 준비됐다고 생각해요……");
      era.printButton("「무슨 준비?」", 1);

      await era.input();
      await kitaru.say_and_wait([
        "저기,",
        callname,
        ", 내일 다시 한번 교외의 묘지에 함께 가 주세요.",
      ]);
      await era.printAndWait([
        "호기심은 잠시 눌러 두고,",
        you.get_colored_name(),
        "은(는) ",
        kitaru.get_colored_name(),
        "의 지휘 아래 새해 신사 준비에 합류했다.",
      ]);
      era.drawLine({ content: "다음 날, 교외 묘지" });
      await era.printAndWait([
        "같은 떡갈나무 아래, 묘비 옆.",
        you.get_colored_actual_name(),
        "이라는 트레이너 옆에 주황색의 ",
        kitaru.uma_sex_title,
        "이(가) 서 있다.",
      ]);
      await era.printAndWait([
        "전날 밤의 정화 의식에는,",
        you.get_colored_name(),
        "이(가) 예상한 대로 참배객이 구름처럼 몰려들었다.",
      ]);
      await era.printAndWait([
        "손님이 가져온 부적과 갈퀴 같은 개운 도구를 태우는 것만으로도,",
        kitaru.get_colored_name(),
        "도,",
        kitaru.sex,
        "이(가) 부른 임시 무녀들은 한밤중까지 바빴다.",
      ]);
      await era.printAndWait([
        "자신의 약속을 기억하며,",
        kitaru.get_colored_name(),
        "은(는) 그래도 일찍 일어났다. 가는 먼지가 겨울 햇살 속에 떠돌고 대리석 묘비는 유리처럼 빛난다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 알아차렸다.",
        kitaru.teen_sex_title,
        "은(는) 무덤 앞에 가만히 서서 한마디도 하지 않는다.",
      ]);
      await you.say_and_wait("혼자 있고 싶어?");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 다시 같은 질문을 했다. 처음 ",
        kitaru.get_colored_name(),
        "에게 이곳으로 이끌려 왔을 때와 같다.",
      ]);
      await kitaru.say_and_wait([
        "아뇨, 괜찮아요,",
        you.actual_name[0],
        '……',
        you.get_colored_actual_name(),
        ", 잠시 곁에 있어 주세요……",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 목소리가 메었다. 평소의 아무 일 없다는 듯 담담한 목소리가 아니다.",
      ]);
      await kitaru.say_and_wait("……어제 준비됐다고 한 말, 기억하세요?");
      await kitaru.say_and_wait([
        "미소, 달리는 집념, 처음 배운 주법, 신사 운영.",
        kitaru.elder_sibling_sex_title,
        "은(는) 많은 것을 알려 줬어요.",
      ]);
      await kitaru.say_and_wait([
        "영혼이 있다면 이 껍데기를 ",
        kitaru.elder_sibling_sex_title,
        "에게 바쳐도 좋다고 생각했어요!",
      ]);
      await era.printAndWait([
        "거의 신음하듯 말한 ",
        kitaru.get_colored_name(),
        "은(는) ",
        kitaru.elder_sibling_sex_title,
        "의 흑백 사진을 본다. 삼 년간 성숙해진 옆얼굴은 사진 속 ",
        kitaru.uma_sex_title,
        "와(과) 거의 다르지 않다.",
      ]);
      await kitaru.say_and_wait([
        "하지만,",
        kitaru.elder_sibling_sex_title,
        "은(는) 분명 싫어할 테고……",
        callname,
        "도 싫으시겠죠.",
      ]);
      await kitaru.say_and_wait([
        "……준비됐어요.",
        kitaru.elder_sibling_sex_title,
        "을(를) 떠나보낼 준비가!",
      ]);
      await kitaru.say_and_wait(
        "잊는 게 아니에요. 이별이에요……저, 제 운명을 달릴 준비가 됐어요!",
      );
      await kitaru.say_and_wait([
        "여기 서서,",
        callname,
        "이(가) 곁에서 지켜봐 주시니 햇살이 얼굴에 내리는 것 같아요……",
      ]);
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        ", 지금 저는 행복해요……",
      ]);
      await era.printAndWait([
        "한 줄기 바람이 불고 잎사귀의 사각거림이 멀고 영묘하게 울린다. 어젯밤 ",
        kitaru.get_colored_name(),
        "이(가) 연주한 신악처럼……",
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_143_1: (() => {
    const title = "마무리";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "와의 괴력난신으로 가득했던 3년도 드디어 끝이 나려 하고 있다. 이제 슬슬 새로운 담당 우마무스메를 물색할 계획을 세워야 할 때다.",
      ]);
      await era.printAndWait(["하지만 그전에, 아직 정리해야 할 일들이 남았다."]);
      await era.printAndWait([
        "지난 3년 동안 사무실과 ",
        you.get_colored_name(),
        "의 집에 쌓여있던, ",
        kitaru.get_colored_name(),
        "가 방류한 뒤에도 여전히 남아있던 행운 아이템들을 원래 주인에게 돌려줄 차례다. 1층에 계신 ",
        kitaru.get_colored_name(),
        "의 어머니께 가볍게 인사를 드린 뒤, ",
        you.get_colored_name(),
        "은(는) 후쿠키타루네 집 다락방으로 발을 들였다.",
      ]);
      await kitaru.say_and_wait(["아! ", callname, ", 드디어 오셨군요!"]);
      await era.printAndWait([
        "나무 바닥 위에 가부좌를 틀고 앉아 있는 ",
        kitaru.get_colored_name(),
        "는 다락방을 가득 채운 누런 고서들과 온갖 골동품에 둘러싸여 있었다.",
      ]);
      await era.printAndWait([
        "그 사이를 익숙하게 드나드는 ",
        kitaru.sex,
        "의 모습을 보고 있자니, 오히려 이곳이야말로 ",
        kitaru.sex,
        "의 진정한 영역이라는 생각이 들었다.",
      ]);
      await kitaru.say_and_wait("이 물건들은 여기에 두면 돼요!");
      await era.printAndWait([
        kitaru.sex,
        "는 선별된 물건들을 빈 선반 위에 차곡차곡 정리하기 시작했다. 옆에 놓인 문어 얼굴 조각상이나 형광빛을 내는 부등변다면체 같은 기묘한 물건들 사이에 자연스럽게 섞여 들어갔다.",
      ]);
      await you.say_and_wait("물건이 정말 많네.");
      await kitaru.say_and_wait("네에, 제가 직접 모은 것만 있는 게 아니거든요.");
      await kitaru.say_and_wait(
        "참배객들이 액막이를 위해 신사에 맡겨두고 찾아가지 않은 물건들도 결국 이곳으로 흘러 들어온답니다.",
      );
      await kitaru.say_and_wait(
        "그래서 잘 찾아보면 지난 세기의 물건이 나올지도 몰라요!",
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 수집벽은 아무래도 가족 내력인 모양이다.",
      ]);
      await era.printAndWait([
        "정리가 계속되는 동안, 방 안에는 ",
        kitaru.get_colored_name(),
        "의 발소리만이 고요하게 울려 퍼졌다.",
      ]);
      await kitaru.say_and_wait(
        "그나저나, 운명의 사람과의 계약도 이제 끝이네요.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 옆에 놓인 고서의 글자를 해독하며 시간을 때우려던 찰나, 선반 너머에서 ",
        kitaru.get_colored_name(),
        "의 목소리가 들려왔다. 한참이 지나서야 ",
        kitaru.sex,
        "는 다음 말을 이어갔다.",
      ]);
      await kitaru.say_and_wait(
        "저기, 운명의 사람은 이제부터 어떻게 하실 건가요?",
      );
      era.printButton("「계속 트레이너로서 일해야지.」", 1);
      era.printButton("「새로운 담당을 모집할 계획이야.」", 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait("으음…… 전혀 의외가 아니네요.");
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 선반 틈새로 ",
          kitaru.get_colored_name(),
          "의 귀가 파르르 떨리는 것을 보았다.",
        ]);
      }
      await you.say_and_wait("그럼 후쿠키타루는?");
      await kitaru.say_and_wait("저는 아마…… 가업인 신사를 물려받게 될까요?");
      await kitaru.say_and_wait("지난 3년 동안 신사의 참배객이 예전보다 훨씬 늘어났으니까요.");
      await kitaru.say_and_wait("아니면 대학에 갈지도 모르겠네요.");
      await kitaru.say_and_wait(
        "미스캐토닉 대학의 민속학부에 지원하거나, 트레센 학원 대학부에 들어가는 것도 그리 어렵지는 않을 거예요.",
      );
      await era.printAndWait(
        "혼잣말하듯 앞날을 점쳐보는 사이, 꼬리가 가볍게 흔들거렸다.",
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 표정은 평소보다 훨씬 진지해졌고, 특유의 장난기 섞인 모습은 찾아볼 수 없었다.",
      ]);
      await kitaru.say_and_wait("하아……");
      await kitaru.say_and_wait(
        "뭐, 일단은 전당 입성 결과가 나온 뒤에 생각하도록 하죠!",
      );
      await era.printAndWait([
        kitaru.sex,
        "는 선반 위에서 수정구슬 하나를 꺼내 천으로 정성스럽게 감쌌다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 이것이 ",
        kitaru.sex,
        "가 데뷔전 이후 한참을 졸라서 ",
        you.get_colored_name(),
        "이(가) 사주었던 보상이었음을 기억해냈다.",
      ]);
      await kitaru.say_and_wait("저의 운명의 사람, 이건 부디 사무실에 놓아주세요.");
      await kitaru.say_and_wait([
        "졸업하고 제가 ",
        callname,
        " 곁에 없더라도, 분명 이 수정구가 행운을 가져다줄 거예요!",
      ]);
      await era.printAndWait([
        "그 뒤로 한동안 ",
        kitaru.get_colored_name(),
        "가 들려주는 물건들의 내력에 귀를 기울였다.",
      ]);
      await era.printAndWait([
        "어쩌면 이렇게 느긋하게 전당 입성 결과를 기다리는 것도 나쁘지 않을 것 같다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = "두 세계의 주인";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        "아리마 기념에서의 질주가 신사에 가져온 인기는 찾아올 때만큼이나 빠르게 사그라들었다.",
      );
      await era.printAndWait([
        "신사는 다시 ",
        you.get_colored_name(),
        "이(가) 처음 ",
        kitaru.get_colored_name(),
        "을(를) 만났을 때처럼 한산해졌다.",
      ]);
      await era.printAndWait([
        "달라진 점이라면 참배객 중에 국화상을 목표로 삼은 ",
        kitaru.uma_sex_title,
        "이(가) 늘었다는 것 정도일까.",
      ]);
      await era.printAndWait("그리고……");
      await kitaru.say_and_wait(["수고하셨어요, ", callname, '！']);
      await era.printAndWait([
        "무녀 차림의 ",
        kitaru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 팔을 붙잡았다.",
      ]);
      await kitaru.say_and_wait("허드렛일까지 맡겨서 죄송해요……");
      await era.printAndWait([
        "처음에는 아리마 기념 이후 갑자기 늘어난 참배객을 맞이하려던 것뿐이었지만, 신사 일을 돕는 습관은 ",
        you.get_colored_name(),
        "에게 그대로 남았다.",
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 트윙클 시리즈가 이제 막 끝난 참이다. 다음으로 자신과 맞는 담당을 언제 만나게 될지는 알 수 없다.",
      ]);
      await kitaru.say_and_wait("조금 쉬어요!");
      await era.printAndWait(
        "노을이 내려앉은 신사를 나란히 걷는다. 무녀의 나막신이 돌길 위에서 타닥타닥 소리를 낸다.",
      );
      await era.printAndWait([
        "눈앞의 ",
        kitaru.get_colored_name(),
        "이(가) 걸음을 멈출 때까지.",
      ]);
      await era.printAndWait([
        "눈앞에는 낯익은 새전함이 있다. 처음에 ",
        you.get_colored_name(),
        "은(는) 여기서 ",
        kitaru.get_colored_name(),
        "와(과) 만났다.",
      ]);
      await kitaru.say_and_wait([
        "그러고 보니,",
        callname,
        "은(는) 몇 달 뒤면 새 담당을 맞이하시겠죠.",
      ]);
      await kitaru.say_and_wait("기도해 드릴까요?");
      era.printButton("고개를 끄덕인다", 1);
      era.printButton("고개를 젓는다", 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          "은(는) 어폐를 흔들려다가 곧 멈추고 미간을 좁혔다.",
        ]);
        await kitaru.say_and_wait(
          "……역시 이런 기도에는 온 마음을 담을 수가 없네요.",
        );
      } else {
        await kitaru.say_and_wait("알겠어요!");
        await kitaru.say_and_wait([
          "그래도 ",
          callname,
          "이(가) 좋다고 하셨어도, 아마 하지 않았을 거예요.",
        ]);
      }
      await era.printAndWait([
        "다시 침묵이 내려앉았다. 저물어 가는 석양이 ",
        kitaru.get_colored_name(),
        "에게 황금빛 베일을 드리웠다.",
      ]);
      await era.printAndWait([
        "어폐를 옆의 새전함에 내려놓고 ",
        kitaru.get_colored_name(),
        "이(가) 침묵을 깼다.",
      ]);
      await kitaru.say_and_wait([callname, ", 황혼의 시간에 대해 아시나요?"]);
      era.printButton("고개를 끄덕인다", 1);
      era.printButton("고개를 젓는다", 2);
      await era.input();
      await kitaru.say_and_wait(
        "네! 해 질 무렵이요. 두 세계가 겹치는 시간이라 신도 마귀도 인간 세상에 가장 쉽게 관여할 수 있다고 해요.",
      );
      await kitaru.say_and_wait("그렇다면……");
      await kitaru.say_and_wait(
        "아리마 기념이라는 시련을 넘고 명예의 전당에 올라, 간신히 신이 된 저라면.",
      );
      await kitaru.say_and_wait("이제 제 소원도 이룰 수 있지 않을까요?");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 꼭 쥔 오른손이 ",
        you.get_colored_name(),
        "의 앞으로 뻗어 왔다. 그러더니 ",
        kitaru.sex,
        "의 새끼손가락이 펼쳐졌다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "에게는 익숙한, 손가락을 걸고 약속하자는 제안이다.",
      ]);
      await kitaru.say_and_wait("앞으로도 계속 함께해 주실 거죠?");
      await kitaru.say_and_wait(`제 트레이너${you.adult_sex_title}……`);
      await kitaru.say_and_wait("제 운명의 사람……");
      await kitaru.say_and_wait("그리고……");
      await era.printAndWait([
        kitaru.teen_sex_title,
        "의 목소리가 점점 모기 소리처럼 가늘어졌다. 따스한 노을과 함께 붉은 기가 ",
        kitaru.sex,
        "의 뺨을 물들였다.",
      ]);
      await era.printAndWait([kitaru.sex, "은(는) 고개를 들었다. 눈동자 속에서 별이 일렁였다."]);
      await kitaru.say_and_wait("제 연인.");
    };
    f.title = title;
    return f;
  })(),
  os_hot_line: (() => {
    const title = "핫라인";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        "기세가 오른 ",
        kitaru.get_colored_name(),
        "에게 이끌려 구교사를 이리저리 돌아다니고 있다.",
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        "들었어요! 이 번호로 전화를 걸면! 행운의 기운을 받을 수 있대요!",
      );
      await era.printAndWait([
        "가늘어 보이는 팔인데도 거스를 수 없는 힘으로 ",
        you.get_colored_name(),
        "의 팔을 꽉 붙들어, 도망칠 엄두도 내지 못하게 한다.",
      ]);
      era.drawLine({ content: "잠시 후" });
      await kitaru.say_and_wait("후우……");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "이(가) 길하다고 판단한 시간이 되었다. 하늘은 어둑하고, 창으로 들어오는 햇빛이 복도의 누렇게 바랜 벽에 얼룩을 만든다.",
      ]);
      await era.printAndWait([
        "하지만……",
        you.get_colored_name(),
        "의 담당이 흥분으로 반짝이는 눈빛에 비하면 턱없이 희미한 빛이다.",
      ]);
      await kitaru.say_and_wait([
        "그럼,",
        callname,
        "! 전화 걸어요!",
      ]);
      await era.printAndWait([
        "미리 골라 둔 의식 장소, 그러니까 낡은 책상과 의자에 둘러싸인 교실 한가운데서 ",
        kitaru.get_colored_name(),
        "은(는) 수화기를 들었다.",
      ]);
      let a = true,
        b = true,
        c = true;
      do {
        era.printMultiColumns(
          [
            { c: "전화를 건다", e: a },
            { c: "번호에 대해 자세히 묻는다", e: b },
            { c: "주위를 살핀다", e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            await era.printAndWait("뚜루루…… 뚜루루……");
            era.drawLine({ content: "몇 초 후" });
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait("으음…… 어느 커뮤니티 게시판에서 봤거든요.");
            await era.printAndWait([
              kitaru.get_colored_name(),
              "는 고개를 갸우뚱거리며 자신의 행동에 별다른 문제가 없다고 생각하는 듯했다.",
            ]);
            break;
          case 3:
            c = false;
            await era.printAndWait(
              "지나치게 고요했다. 이따금 창밖에서 들려오는 새의 지저귐만이 정적을 깼다.",
            );
            await era.printAndWait("해가 지려 하고 있었다……");
        }
      } while (a || b || c);

      await era.printAndWait("따르릉…… 따르릉……");
      await kitaru.say_and_wait("에엑?!");
      await kitaru.say_and_wait(["그, 저기…… ", callname, ", 방금 들으셨나요?"]);
      await era.printAndWait("일반 전화기의 벨소리 같은 소리가 들려왔다.");
      await era.printAndWait(
        "소리는 옆 교실에서 들리는 듯했고, 텅 빈 교사 안에서 메아리쳤다.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        kitaru.get_colored_name(),
        "는 복도로 나와 그 교실 안을 들여다보았다.",
      ]);
      await kitaru.say_and_wait("저, 저, 정말인가요!");
      await era.printAndWait(
        "먼지투성이 교탁 위에 낡은 유선 전화기가 뜬금없이 놓여 있다.",
      );
      await era.printAndWait(
        "붉은 몸체에는 플라스틱 특유의 광택이 흐르고, 원래 다이얼이 있어야 할 자리에는 검은 손잡이가 달려 있다.",
      );
      await era.printAndWait(
        "전화기는 마치 그 자리에 홀연히 나타난 것처럼, 전화선도 연결되지 않은 채 울리고 있다.",
      );
      await kitaru.say_and_wait("이, 이제…… 어떡하죠?");
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          "주황색 머리의 ",
          kitaru.teen_sex_title,
          "은(는) 나무늘보처럼 ",
          you.get_colored_name(),
          "의 허리에 매달려, 떨리는 손으로 여전히 울리는 전화기를 가리켰다.",
        ]);
      } else {
        await era.printAndWait([
          "주황색 머리의 ",
          kitaru.teen_sex_title,
          "은(는) 몸을 떨며 ",
          you.get_colored_name(),
          "의 옷자락을 붙잡고, 겁에 질려 여전히 울리는 전화기를 가리켰다.",
        ]);
      }

      a = b = c = true;
      do {
        era.printMultiColumns(
          [
            { c: "전화를 받는다", e: a },
            { c: "후쿠키타루에게 받게 한다", e: b },
            { c: "자리를 떠난다", e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            era.printButton("「여보세요?」", 1);
            era.printButton("「누구세요?」", 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……#&A%……');
            await era.printAndWait([
              "무언가 응답하는 소리가 들린 듯했으나, ",
              you.get_colored_name(),
              "은(는) 확신할 수 없었다.",
            ]);
            era.printButton("「여보세요?」", 1);
            era.printButton("「누구세요?」", 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……@&*#……&&￥……');
            await era.printAndWait(
              "수화기 너머로는 잡음과 마치 테이프를 거꾸로 감는 듯한 마찰음만이 가득했다.",
            );
            era.printButton("전화를 끊는다", 1);
            era.printButton("「여보세요?」", 2);
            if ((await era.input()) === 1) {
              await era.printAndWait([
                you.get_colored_name(),
                "이(가) 수화기를 내려놓으려던 그때, 반대편에서 기계 합성음 같은 목소리가 들려왔다……",
              ]);
            } else {
              await era.printAndWait(
                "반대편에서 기계 합성음 같은 목소리가 들려왔다……",
              );
            }
            era.println();
            await typing(
              `마치카네 후쿠키타루를 소중히 대해 주게, ${you.actual_name} 트레이너`,
              kitaru.color,
            );
            era.println();
            await era.printAndWait("뚜…… 뚜……");
            await era.printAndWait("전화가 끊겼다……");
            ret.push(1);
            break;
          case 2:
            a = b = c = false;
            await kitaru.say_and_wait("에엑! 제가요?!!!");
            await era.printAndWait([
              kitaru.get_colored_name(),
              "는 부들부들 떨리는 손으로 수화기를 들었다.",
            ]);
            await kitaru.say_and_wait("……어라?!");
            await era.printAndWait([
              "전화 너머의 상대가 예상 밖이었는지, ",
              kitaru.get_colored_name(),
              "의 얼굴에 경악이 서렸다.",
            ]);
            await kitaru.say_and_wait("네…… 맞아요……");
            await kitaru.say_and_wait(
              "……네, 트레이너 님, 제 트레이너 선생님도 계세요!",
            );
            await kitaru.say_and_wait("……알겠습니다.");
            await era.printAndWait([
              you.get_colored_name(),
              "은(는) 전화를 끊은 ",
              kitaru.get_colored_name(),
              "의 눈시울이 붉어져 있는 것을 발견했다.",
            ]);
            await era.printAndWait([
              "이후 상대가 누구였는지 물어보았으나 끝내 대답을 듣지 못했고, ",
              kitaru.sex,
              "는 마치 그 일을 완전히 잊은 것처럼 행동했다.",
            ]);
            ret.push(2);
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait("마, 맞아요…… 저도 이건 좀 그렇다고 생각해요……");
            era.drawLine({ content: "잠시 후" });
            await era.printAndWait("따르릉…… 따르릉……");
            await kitaru.say_and_wait(
              "에에엑?! 왜 또 여기로 돌아온 거예요!!!!",
            );
            await era.printAndWait([
              kitaru.get_colored_name(),
              "의 비명이 복도에 메아리쳤다.",
            ]);
        }
      } while (a || b || c);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_god_study: (() => {
    const title = "신학 연구 모임";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "오늘의 일정은 ",
        kitaru.get_colored_name(),
        "와(과) 사무실에서 공부하는 것이다. 텅 빈 의자…… 아무래도 ",
        kitaru.sex,
        "은(는) 오늘 지각인 모양이다.",
      ]);
      await kitaru.say_and_wait([callname, '！ ', callname, '！']);
      await kitaru.say_and_wait([callname, '！！！']);
      await kitaru.say_and_wait("지난번 질문의 정답을 찾아냈답니다!");
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 막 전화를 걸려던 찰나, 시끌벅적하게 소란을 피우며 ",
        kitaru.get_colored_name(),
        "가 어디선가 찾아온 정체 모를 책을 품에 안고 방으로 뛰어 들어왔다.",
      ]);
      await kitaru.say_and_wait("그게 뭐냐면요, 신사에 모셔진 주신이 누구인지에 대해서예요!");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 확실히 ",
        kitaru.get_colored_name(),
        "에게 그런 질문을 했던 기억이 났다.",
      ]);
      await kitaru.say_and_wait(
        "여기 좀 보세요! 세 여신님께는 여러 화신이 있다고 되어 있어요!",
      );
      await kitaru.say_and_wait("시라오키 님도 계시네요!");
      await era.printAndWait([
        kitaru.sex,
        "는 ",
        you.get_colored_name(),
        "을(를) 향해 누렇게 변색된 커다란 책을 들어 보였다. 그 안에는 꽤나 그럴싸한 필체로 여신들의 다양한 화신과 가능한 추측들이 상세히 묘사되어 있었다.",
      ]);
      await kitaru.say_and_wait(
        "그리고 돌아가서 전대 신주님의 수기도 뒤져봤거든요!",
      );
      await kitaru.say_and_wait(
        "저희 신사에 모셔진 분은 아마 화신이 너무 많은 그 여신님이라서, 구체적인 형상이 없는 거였나 봐요!",
      );
      await kitaru.say_and_wait(
        "보세요! 여기에는 무슨 권속 같은 개념도 나와 있다니까요.",
      );
      await kitaru.say_and_wait("샨타크 같은 거요!");
      era.printButton("「권속?」", 1);
      await era.input();
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait("신의 보살핌을 받는다는 뜻 같은 거예요!");
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        "도 그 안에 계신다고요!",
      ]);
      await era.printAndWait([
        "갑자기 머리가 아파오고, 눈앞의 주황빛 ",
        kitaru.uma_sex_title,
        "이(가) 어렴풋이 현실감을 잃어 간다……",
      ]);
      await kitaru.say_and_wait("앗! 맞아요!");
      await era.printAndWait([
        "무언가 떠올랐는지, ",
        kitaru.sex,
        "는 ",
        you.get_colored_name(),
        "의 손을 맞잡고 방글방글 웃으며 ",
        you.get_colored_name(),
        "을(를) 바라보았다.",
      ]);
      await kitaru.say_and_wait("만약 저도 나중에 신령님이 된다면요!");
      await kitaru.say_and_wait([callname, "에게 내려 주신 신의 은총은 절대 잊지 않을 거예요!"]);
      await era.printAndWait([
        "마치 언령이라도 발동한 것처럼 ",
        you.get_colored_name(),
        "의 의식이 다시 맑게 돌아왔다. 정신을 차린 ",
        you.get_colored_name(),
        "은(는) 즉시 ",
        kitaru.get_colored_name(),
        "에게 오늘의 학습 계획을 시작하자고 재촉했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_luck_name: (() => {
    const title = "행운을 부르는 이름";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        "최근 학업 성적이 좋지 않아, ",
        kitaru.get_colored_name(),
        "는 ",
        you.get_colored_name(),
        "의 지시에 따라 트레이닝실에 남아서 자습을 하게 되었다.",
      ]);
      await era.printAndWait("달그락……");
      await era.printAndWait([
        "오늘의 감독 역인 ",
        you.get_colored_name(),
        "이(가) 후쿠가 공부를 잘하고 있는지 확인하려던 찰나, 문을 열기도 전에 책상 위에서 주사위가 굴러가는 소리가 들려왔다.",
      ]);
      await era.printAndWait([
        "문에 등을 돌린 ",
        kitaru.teen_sex_title,
        "은(는) 무언가를 진지하게 고민하는 듯했다.",
      ]);
      await kitaru.say_and_wait("칠복신……");
      await kitaru.say_and_wait("수정……");
      await kitaru.say_and_wait("영동……");
      await kitaru.say_and_wait("음…… 『후쿠키타루』는 남기는 게 좋으려나요?");
      await era.printAndWait(
        "연습장에 연신 무언가를 끼적이는 것을 보니, 꽤나 중요한 일인 모양이다.",
      );
      era.printButton("「공부는 잘 돼가?」", 1);
      era.printButton("「무슨 생각 해?」", 2);
      await era.input();
      await kitaru.say_and_wait("아이쿠! 마침 잘 오셨어요!");
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        "딴짓을 하다가 들켰는데도 전혀 부끄러워하는 기색 없이, ",
        kitaru.get_colored_name(),
        "는 눈을 반짝이며 들어오는 ",
        you.get_colored_name(),
        "을(를) 쳐다보았다.",
      ]);
      await kitaru.say_and_wait(
        "그게 말이죠, 사실 요즘 성적이 안 나오는 게 운이 없어서 그런 게 아닐까 생각 중이었거든요!",
      );
      await kitaru.say_and_wait("이름을 바꾸면 좀 나아지지 않을까요?");
      await kitaru.say_and_wait("자, 보세요!");
      await era.printAndWait([
        kitaru.sex,
        "는 원래 계산 과정을 적어야 할 연습장을 ",
        you.get_colored_name(),
        "에게 내밀었다. 그곳에는 ",
        kitaru.get_colored_name(),
        "가 생각해낸 이름들이 빼곡하게 적혀 있었다.",
      ]);
      await kitaru.say_and_wait("우으…… 하지만 이렇게 많이 썼는데도 영 감이 안 오네요!");
      await kitaru.say_and_wait([
        "역시 원래의 ",
        kitaru.get_colored_name(),
        "가 제일 나은 것 같아요!",
      ]);
      await era.printAndWait(
        "그렇게 말하며 눈앞의 오렌지색 찐빵이 눈에 띄게 시무룩해졌다.",
      );
      era.printButton("위로한다 (스킬 포인트 +10)", 1);
      era.printButton("나간다 (모든 능력치 +3, 하지만……)", 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait("헛수고인 것만은 아니잖아!");
        await kitaru.say_and_wait("네! 왜요?");
        await you.say_and_wait("음……");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 따져 묻는 듯한 시선 속에서 ",
          you.get_colored_name(),
          "은(는) 언젠가 쓸 일이 있을 법한 상황을 무심코 입에 올렸다.",
        ]);
        await you.say_and_wait("예를 들어, 나중에 아이 이름을 지을 때라든가?");
        await kitaru.say_and_wait("네…… 아이 이름이요?");
        await kitaru.say_and_wait('……');
        await kitaru.say_and_wait([callname, "과의, 아이, 말인가요?"]);
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait([
            "앗! ",
            callname,
            ", 벌써 아이 생각까지 하고 계신 건가요?",
          ]);
          await kitaru.say_and_wait("어라아!!!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 머리를 몇 번 두드리자 망상에 빠져 있던 ",
            kitaru.sex,
            "도 겨우 다시 공부에 집중했다.",
          ]);
        } else {
          await kitaru.say_and_wait("앗!!!");
          await era.printAndWait([
            "방금 자신이 무슨 말을 했는지 뒤늦게 깨달은 ",
            kitaru.get_colored_name(),
            "이(가) 한 박자 늦게 비명을 질렀다.",
          ]);
          await era.printAndWait([
            "그 뒤 얼굴이 새빨개진 ",
            kitaru.get_colored_name(),
            "에게 방 밖으로 밀려났다.",
          ]);
        }
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          "에게 계속 공부하게 했다.",
        ]);
        await era.printAndWait([
          "어째서인지 ",
          kitaru.get_colored_name(),
          "의 기분은 가라앉았다.",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_miso_fortune: (() => {
    const title = "된장국 점";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        "그럼! ",
        callname,
        "! 오늘은 된장국 점괘를 해봐요!",
      ]);
      await era.printAndWait([
        "흥겨워하는 ",
        kitaru.get_colored_name(),
        "가 된장국 한 그릇을 ",
        you.get_colored_name(),
        "의 앞에 놓았다.",
      ]);
      era.printButton("마신다", 1);
      era.printButton("마시지 않는다", 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait("에엣!?");
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          "두 손을 모은 ",
          kitaru.teen_sex_title,
          "이(가) ",
          you.get_colored_name(),
          "의 앞에서 애처로운 표정을 지었다. 주황빛 꼬리도 풀이 죽어 축 늘어졌다.",
        ]);
        await era.printAndWait("이래서야 거절할 방법이 없겠지?");
        era.printButton("마신다", 1);
        await era.input();
      }
      await you.say_and_wait("꿀꺽");
      await era.printAndWait([
        kitaru.uma_sex_title,
        "미각이 너무 예민한 탓인지, 이 국은 간이 좀 싱겁다!",
      ]);
      await era.printAndWait([
        "하지만 그 점을 차치하더라도, 감칠맛 속에 은은한 단맛이 도는 것이 ",
        kitaru.get_colored_name(),
        "가 꽤나 정성을 들인 모양이다.",
      ]);
      await kitaru.say_and_wait([callname, "! 맛은 어떤가요?"]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        "의 황수정 같은 두 눈이 반짝이며 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      era.printButton("「간이 좀 심심한데.」", 1);
      await era.input();
      await kitaru.say_and_wait("에에!");
      await era.printAndWait(
        "방금 다 비운 그릇 바닥에 남은 국물을 손가락 끝으로 살짝 찍더니, 분홍빛 혓바닥을 내밀어 핥아 보았다.",
      );
      await kitaru.say_and_wait([
        "으음! ",
        callname,
        "은 조금 진하게 드시는 편이군요……",
      ]);
      era.printButton("「점괘 결과는?」", 1);
      await era.input();
      await kitaru.say_and_wait("오! 그걸 잊을 뻔했네요!");
      await era.printAndWait([
        kitaru.sex,
        "는 ",
        you.get_colored_name(),
        "이(가) 내려놓은 사발을 아무렇지 않게 들어 올려 그릇 바닥을 훑어보았다.",
      ]);
      await kitaru.say_and_wait("된장 건더기의 모양으로 보아하니…… 이번 점괘 결과는——");
      await kitaru.say_and_wait("흉!");
      await era.printAndWait("전혀 의외가 아니라고 해야 할까?");
      await kitaru.say_and_wait([
        "그러니까! ",
        callname,
        "액운을 피하기 위해서라도, 후쿠짱이 만든 다른 요리들도 드셔보시겠어요?",
      ]);
      if (kitaru.sex_code !== 1) {
        await kitaru.say_and_wait("무녀가 만든 음식에는 신비한 힘이 깃들어 있으니까요!");
      }
      await era.printAndWait(
        "그리하여 이후로 너무 짠 계란말이와 살짝 타버린 생선구이를 차례로 맛보게 되었다.",
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 요리 솜씨는 아직 발전할 여지가 많은 모양이다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_1: (() => {
    const title = "점술가와의 게임 대결! Ⅰ";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "가 게임, 특히 대전 요소가 강한 장르에서 의외로 재능이 높다고 해야 할까?",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) ",
        kitaru.sex,
        "를 비디오 게임의 깊은 늪으로 끌어들인 이후, 처음에는 ",
        kitaru.get_colored_name(),
        "의 서툰 솜씨 덕분에 우위를 점할 수 있었으나, 나중에는 ",
        kitaru.sex,
        "의 거의 예지력에 가까운 감각에 일방적으로 짓눌리게 되었다.",
      ]);
      await kitaru.say_and_wait([
        "자자! ",
        callname,
        ", 무슨 생각을 그렇게 하세요?",
      ]);
      await era.printAndWait([
        "또다시 게임을 즐기는 여유로운 시간이다. 게임기 앞에 앉은 담당이 ",
        you.get_colored_name(),
        "에게 컨트롤러를 들어 보이며, 꼬리로 옆 소파의 2인용 자리를 두드렸다.",
      ]);
      await era.printAndWait([
        "건강하고 살집 있는 두 다리를 포개 소파 팔걸이에 올린 채, 드러난 발끝을 나른하게 까딱이고 있다.",
      ]);
      await era.printAndWait(["그렇다면 ", you.get_colored_name(), "은(는)……"]);
      era.printButton("2인 격투 게임", 1);
      era.printButton("레이싱 게임", 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          "공방을 주고받았으나, 결국 마지막에 패배하고 말았다…… 이상하다, 대체 왜 지는 거지?",
        );
        await era.printAndWait([
          "처음 ",
          kitaru.get_colored_name(),
          "에게 게임을 가르친 사람은 ",
          you.get_colored_name(),
          "이다. 저런 조작 감각은 ",
          kitaru.uma_sex_title,
          "의 반응 속도만으로는 설명할 수 없다.",
        ]);
      } else {
        await era.printAndWait("위태로운 승리였다.");
        await era.printAndWait([
          "레이싱 게임을 했다. 다행히 마지막 바퀴에서 ",
          kitaru.get_colored_name(),
          "이(가) 반응하기 전에 추월할 수 있었다.",
        ]);
        await era.printAndWait([
          "그나저나 ",
          kitaru.sex,
          "은(는) 어떻게 백미러도 보지 않고 ",
          you.get_colored_name(),
          "의 차가 가는 길을 막은 거지.",
        ]);
      }
      await kitaru.say_and_wait("으음…… 아마 점술사로서의 예감 덕분이겠죠!");
      await you.say_and_wait("예감?");
      await kitaru.say_and_wait("네!");
      await kitaru.say_and_wait([
        "맞아요! 대충 ",
        callname,
        "이 다음에 어떻게 할지 짐작이 가거든요.",
      ]);
      await kitaru.say_and_wait(
        "아쉽게도 컴퓨터 화면 너머에 있는 다른 플레이어분들께는 통하지 않지만요……",
      );
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_2: (() => {
    const title = "점술가와의 게임 대결! Ⅱ";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await kitaru.say_and_wait("야호!!!");
      await era.printAndWait([
        kitaru.sex,
        "와(과) 게임을 하겠다고 약속하자 ",
        kitaru.get_colored_name(),
        "은(는) 겨우 조금 진정했다.",
      ]);
      await kitaru.say_and_wait([
        "맞아요! 역시 ",
        callname,
        "와(과) 노는 게 재미있어요!",
      ]);
      await era.printAndWait([
        "하지만 ",
        kitaru.get_colored_name(),
        "의 능력을 생각하면 ",
        you.get_colored_name(),
        "이(가) 상대해 주는 건 뻔히 고생을 자초하는 일이다.",
      ]);
      await kitaru.say_and_wait("네!?");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "에게 점술의 힘을 쓰지 말라고 하자 ",
        kitaru.sex,
        "은(는) 조금 불만스러운 표정을 지었다. 작은 우위라도 놓치고 싶지 않은 모양이다.",
      ]);
      await kitaru.say_and_wait("물론 괜찮아요!");
      await era.printAndWait([
        "이상하다.",
        kitaru.sex,
        "은(는) 잠시 고민하더니 순순히 ",
        you.get_colored_name(),
        "의 부탁을 받아들였다.",
      ]);
      await era.printAndWait(["그렇다면 ", you.get_colored_name(), "은(는)……"]);
      era.printButton("2인용 격투 게임", 1);
      era.printButton("경주에 중점을 둔 레이싱 게임", 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await era.printAndWait([
          "지난번 패배는 역시 ",
          kitaru.sex,
          "의 정체 모를 능력 탓이었던 모양이다.",
          kitaru.get_colored_name(),
          "이(가) 조작하는 닻을 든 캐릭터가 체력이 거의 바닥난 채 ",
          you.get_colored_name(),
          "에게 화면 구석까지 몰릴 때까지는 그렇게 생각했다.",
        ]);
      } else {
        await era.printAndWait([
          "지난번 패배는 역시 ",
          kitaru.sex,
          "의 정체 모를 능력 탓이었던 모양이다. 적절히 조작하자 ",
          you.get_colored_name(),
          "의 차는 줄곧 ",
          kitaru.get_colored_name(),
          "의 차 앞을 달리고 있다.",
        ]);
      }
      if (kitaru.sex_code !== 1 && you.sex_code !== 0) {
        await era.printAndWait("승리 확정……인가?");
        await you.say_and_wait("음……");
        await era.printAndWait(
          "아직 잠잠하던 사타구니의 물건에, 옷감 너머로 꽤나 곤란한 감촉이 갑자기 전해졌다.",
        );
        await kitaru.say_and_wait("에잇!");
        await era.printAndWait("한 번, 두 번, 그리고 잇달아 가볍게 스치는 감촉.");
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 무심코 고개를 내려 보았다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 두 다리 사이에서 ",
          kitaru.get_colored_name(),
          "의 오른발이 옷감 위에 올라와 있다. 드러난 둥근 발끝이 ",
          kitaru.sex,
          "이(가) 스틱을 움직이는 박자에 맞춰, 점점 고개를 드는 ",
          you.get_colored_name(),
          "의 자지를 가볍게 콕콕 찌르고 있다.",
        ]);
        await kitaru.say_and_wait("핫!");
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 한눈을 판 틈에 ",
          kitaru.get_colored_name(),
          "은(는) 기회를 잡았다.",
        ]);
        await era.printAndWait(
          "진주처럼 귀여운 발가락을 모아 발등을 쭉 편 채 앞으로 밀었다. 옷에 가로막혀 이미 괴로운 자지에 한층 강한 자극이 한꺼번에 전해졌다.",
        );
        await you.say_and_wait("야! 마치카네 후쿠키타루!");
        await kitaru.say_and_wait(["어머, ", callname, ", 실수하셨네요!"]);
        await you.say_and_wait("읏……");
        await era.printAndWait([
          "주의를 줘도 ",
          kitaru.get_colored_name(),
          "은(는) 더욱 기세가 올라, ",
          you.get_colored_name(),
          "은(는) 등을 젖힐 수밖에 없었다. 손에 쥔 스틱도 사타구니의 자지도 ",
          kitaru.sex,
          "의 움직임에 맞춰 떨렸다.",
        ]);
        if (ret1 === 1) {
          await era.printAndWait([
            kitaru.get_colored_name(),
            "이(가) 준비해 둔 연속 기술이 끝나자, 화면에는 때맞춰 ",
            you.get_colored_name(),
            "의 패배를 알리는 SLASH!가 떠올랐다.",
          ]);
        } else {
          await era.printAndWait([
            kitaru.uma_sex_title,
            "다운 색으로 도색된 경주용 자동차가 가드레일을 뚫고 골짜기로 추락했다.",
          ]);
        }
        await kitaru.say_and_wait(["어머, ", callname, ", 지셨네요?"]);
        await era.printAndWait([
          "방금까지 ",
          you.get_colored_name(),
          "의 하반신을 건드리던 발은 이미 물러나 있다.",
        ]);
        await era.printAndWait([
          "옷 속에서 부풀어 오른 자지가 ",
          you.get_colored_name(),
          "을(를) 괴롭힌다. 정작 원인을 제공한 당사자는 아무 일도 없었다는 듯 ",
          you.get_colored_name(),
          "을(를) 바라본다.",
        ]);
        await kitaru.say_and_wait("한 판 더 하실래요?");
        await era.printAndWait([
          "말에 교태를 담은 ",
          kitaru.get_colored_name(),
          "은(는) 컨트롤러를 내려놓고 몸을 옆으로 돌려 이쪽을 바라본다.",
        ]);
        await era.printAndWait([
          "셔츠 아래의 아름다운 등선과 엉덩이에서 뻗어 나온 매끈한 맨다리가 숨김없이 ",
          you.get_colored_name(),
          "의 눈앞에 펼쳐져 있다.",
        ]);
        await kitaru.say_and_wait("아니면…… 후쿠를, 벌주고, 싶으신가요?");
        era.printButton("예", 1);
        era.printButton("아니요", 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            "은(는) 일어섰다. 움직이는 모습을 본 ",
            kitaru.get_colored_name(),
            "은(는) 벌을 받는다는 당황스러움은커녕, 오히려……",
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            "이(가) 잘못 본 게 아니라면, 그 눈동자가 ",
            you.get_colored_name(),
            "의 하반신에 솟은 천막을 스쳤을 때 ",
            kitaru.sex,
            "은(는) 침을 꿀꺽 삼켰다.",
          ]);
          await era.printAndWait([
            "방금 장난을 치던 작은 발을 붙잡아 소파에 밀어 눕히고 바지를 내렸다. 후쿠키타루의 도발에 준비를 마친 자지를 후쿠키타루의 옷자락 아래로 들이밀었다.",
          ]);
          await kitaru.say_and_wait("얏!");
          await era.printAndWait(
            "무엇이 올지 아는 듯 이미 젖어 있는 속옷을 손가락으로 비키고, 뜨거운 입구에 자지를 두 번 문지른 뒤 깊숙이 밀어 넣었다.",
          );
          await era.printAndWait("쿵!");
          await kitaru.say_and_wait("으앗!!!");
          await era.printAndWait([
            "체격 차이도 있어서 ",
            kitaru.get_colored_name(),
            "의 부드러운 자궁 입구는 ",
            you.get_colored_name(),
            "의 자지가 닿지 못할 곳이 아니다.",
          ]);
          await era.printAndWait(
            "첫 번째 충격에 쾌감을 맛본 후쿠키타루는 벌써 목소리를 억누르지 못했다.",
          );
          await kitaru.say_and_wait("하아……");
          await era.printAndWait([
            you.get_colored_name(),
            "의 자지가 구멍 안을 가차 없이 오가며, 방금 발로 이것을 농락했던 ",
            kitaru.uma_sex_title,
            "에게 벌을 내린다.",
          ]);
          await kitaru.say_and_wait("하아…… 하아……");
          await era.printAndWait([
            "아래에 깔린 연인은 거친 숨만 내쉬며 붉어진 엉덩이를 높이 들어 ",
            you.get_colored_name(),
            "의 움직임에 맞춘다.",
          ]);
          await era.printAndWait([
            "두 손으로 처음에는 허리를 받치다가, 위로 올라가 가슴을 주무르고, 이윽고 후쿠키타루의 손목을 붙잡아 ",
            kitaru.sex,
            "을(를) ",
            you.get_colored_name(),
            "의 허리 움직임에 맞춰 고개를 들게 했다.",
          ]);
          await kitaru.say_and_wait("야아!!!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 두 발이 곧게 뻗고, 발끝도 쾌감에 경련한다.",
          ]);
          await kitaru.say_and_wait("가요오오옷!!!");
          await era.printAndWait(
            "정액이 쏟아지자 점술가는 고개를 높이 젖혔다. 쾌감에 입가에서 흘러넘친 투명한 침이 하얀 목을 타고 내려가 옷깃을 적셨다.",
          );
        }
      } else {
        await era.printAndWait("이겼다!");
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  be_force: (() => {
    const title = "현인신에게 바치는 공물";
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await you.say_and_wait("또 졌어?");
      await era.printAndWait([
        "패배한 ",
        kitaru.get_colored_name(),
        "을(를) 위로하는 것도 벌써 몇 번째인지 모르겠다.",
        kitaru.sex,
        "에게 결정적이었던 그 레이스에서 패한 이후, 산산조각 난 자신감은 두 번 다시 돌아오지 않았다.",
      ]);
      await era.printAndWait([
        "책상 위의 서류를 조금 옆으로 치워 ",
        kitaru.sex,
        "의 눈물에 젖지 않게 한다.",
      ]);
      await you.say_and_wait(["……이번에는 뭐 때문인데?"]);
      await kitaru.say_and_wait(["운이 나빴어요."]);
      await era.printAndWait([
        "그렇겠지.",
        you.get_colored_name(),
        "이(가) ",
        kitaru.sex,
        "의 입에서 나올 대답은 그것뿐이다.",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "에게 귀에 못이 박이도록 운명의 사람이라는 말을 듣는 ",
        you.get_colored_name(),
        "조차 이제는 조금 지긋지긋하다.",
      ]);
      await era.printAndWait(["어떻게 하지."]);
      await era.printAndWait(["자신감…… 자신감…… 자신감……"]);
      await era.printAndWait([
        "눈앞의 이 녀석은 사실 강하다. 어째서, 어째서 ",
        you.get_colored_name(),
        "같은 평범한 인간에게 사육장의 토끼처럼 다뤄져도 아무렇지 않은 걸까. 이제 ",
        kitaru.sex,
        "에게 그 사실을 깨닫게 해 줄 때다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "의 앞으로 다가가 허리를 숙이고, ",
        kitaru.sex,
        "이(가) 시선을 피하는 가운데 ",
        kitaru.sex,
        "의 두 손을 들어 자신의 목에 올렸다.",
      ]);
      await you.say_and_wait(["느껴져? 후쿠키타루."]);
      await kitaru.say_and_wait([
        "저기, 저기, ",
        callname,
        ", 이번에는 어떻게 벌주실 건가요?",
      ]);
      await era.printAndWait([
        "그때 ",
        you.get_colored_name(),
        "은(는) ",
        kitaru.sex,
        "의 조금 기대에 찬 눈빛을 마주하며 대답했다.",
      ]);
      await you.say_and_wait(["내 목을 졸라 봐"]);
      await era.printAndWait([
        "그런 것이다.",
        kitaru.uma_sex_title,
        "의 마음속 깊이 묻힌 지배욕을 자극한다.",
      ]);
      await era.printAndWait([
        "줄곧 자신을 억눌러 온 ",
        kitaru.get_colored_name(),
        "에게는 갑작스러운 해방감도, 그에 뒤따르는 쾌감도 더욱 강렬하다.",
      ]);
      await era.printAndWait([
        "가장 존경하는 ",
        callname,
        "조차 발밑에 둘 수 있다면, 당연하게 여기던 열등감도 사라질 것이다.",
      ]);
      await era.printAndWait([
        "점점 숨이 막혀 온다. 의식을 잃기 전 마지막으로 기억나는 것은 눈앞의 ",
        kitaru.get_colored_name(),
        "이(가) 짓던 귀여운 미소였다.",
      ]);
      era.drawLine();
      await era.printAndWait("계획은 성공했다.");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 확실히 강해졌다. 선입 주자로서 방해 스킬을 쓰는 솜씨가 갈수록 능숙해졌다. 아니…… 가차 없어졌다.",
      ]);
      await era.printAndWait([
        "집 문을 열기 전 ",
        you.get_colored_name(),
        "은(는) 그 일을 생각하고 있었다.",
      ]);
      await era.printAndWait([
        "집에서 ",
        you.get_colored_name(),
        "을(를) 맞이한 것은 사정없는 일격이었다. 뺨을 감싸 쥐자 붉게 물드는 입가에서 피 섞인 침이 조금 흘렀다.",
      ]);
      await era.printAndWait([
        "고개를 들자 앞에 선 ",
        kitaru.get_colored_name(),
        "은(는) 입술을 핥으며 ",
        you.get_colored_name(),
        "에게 여전히 햇살처럼 환한 미소를 지어 보였다.",
      ]);
      era.setToBottom();
      await era.printAndWait([
        kitaru.sex,
        "의 다음 발길질이 ",
        you.get_colored_name(),
        "의 배에 꽂히기 직전, ",
        you.get_colored_name(),
        "은(는) 문득 오늘의 세이프 워드를 아직 정하지 않았다는 사실을 떠올렸다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
};
