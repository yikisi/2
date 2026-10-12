/**
 * @file ワンダーアキュート - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  ts_add: (() => {
    const title = "뜨거운 추가 트레이닝";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await acute.say_and_wait("후후후…… 이 정도로는——");
      await era.printAndWait([
        "트레이닝이 막 끝났는데도, 체육복 차림의 ",
        acute.get_colored_name(),
        "은(는) 아직 성에 차지 않는 듯하다.",
      ]);
      await acute.say_and_wait(
        "이 정도로는 도무지 『만족』이라고 할 수 없겠구나……",
      );
      await acute.say_and_wait(["저기, 저기, ", callname]);
      await era.printAndWait([
        "옷을 잡아당기는 ",
        acute.get_colored_name(),
        ". 숨결마다 뜨거운 기운이 피어나고, 맑은 눈동자가 반짝인다——",
      ]);
      await acute.say_and_wait(
        "아직 계속할 수 있겠니? 나는 더 할 수 있단다——",
      );
      era.print("…………어째서인지 의미심장하게 들리는 한마디다.");
      era.printButton("허락한다", 1);
      era.printButton("보류한다", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          "고개를 끄덕이며 ",
          acute.get_colored_name(),
          "의 바람을 받아들였다.",
        ]);
        await era.printAndWait("트레이너로서 「무리야」라고 말할 수는 없다.");
        await era.printAndWait([
          "석양 아래, ",
          you.get_colored_name(),
          "과(와) 원더 어큐트는 운동장에서 계속 달렸다——",
        ]);
      } else {
        await era.printAndWait([
          '……',
          acute.get_colored_name(),
          "은(는) 일부러 도발해서 허락을 받아 내려는 것 같다.",
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          "의 제안을 단호하게 거절하고, 일찍 목욕한 뒤 쉬라고 일렀다.",
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = "초궁극무신극대화 이하 생략 · 초콜릿 무스 케이크";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, minoru, taste, you, callname) => {
      await era.printAndWait([
        "겨울 기운이 옅어지고 만물이 되살아나기 시작한다. 옥상에서 할머니 같은 ",
        acute.teen_sex_title,
        "와(과) 만난 뒤, 어느새 이월도 중순이다.",
      ]);
      await era.printAndWait([
        "벌써 발렌타인이다. 트레센 학원 옆 상점가에는 많은 가게가 「발렌타인 특가」를 내걸고 제철 상품을 팔고 있다.",
      ]);
      await era.printAndWait([
        "쇼핑의 주역은 물론 트레센의 ",
        acute.uma_sex_title,
        "들이다——",
        acute.uma_sex_title,
        "들은 대부분 레이스에 집중하느라 연애에는 별 관심이 없다. 그래도 작은 과자를 우정의 선물로 주는 정도라면 나쁘지 않다.",
      ]);
      await era.printAndWait([
        "물론 트레센에서 일하는 교직원들도 섞여 있다…… 그건 또 다른 이야기다.",
      ]);
      await you.say_and_wait(["……뭐라고? 왜 상점가에 왔느냐고?"]);
      await era.printAndWait([
        "——그야 물론, ",
        taste.get_colored_name(),
        "과(와) ",
        minoru.get_colored_name(),
        "의 명령 때문이다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 최근의 부진에서 벗어난 모습을 보고, ",
        minoru.get_colored_name(),
        "이(가) 교직원을 위한 발렌타인 파티를 열어 기분 전환을 하자고 제안한 것이다.",
      ]);
      await era.printAndWait([
        "상점가에서 예약해 둔 「초콜릿 무스 케이크」를 받아 오는 역할이 ",
        you.get_colored_name(),
        "에게 돌아왔다.",
      ]);
      await you.say_and_wait([
        "……그냥 운반책이 된 기분이다. 혹시 ",
        minoru.get_colored_name(),
        "은(는) 내가 싫은 걸까?",
      ]);
      await era.printAndWait([
        "원래 「초콜릿 무스 케이크」를 가져오는 건 ",
        minoru.get_colored_name(),
        "의 일이었다. 그런데 ",
        minoru.sex,
        "는 굳이 ",
        you.get_colored_name(),
        "을(를) 보내려고 한다…… 이상한 일이다.",
      ]);
      await era.printAndWait([
        "이제 와서 말해 봐야 늦었다. 이왕 왔으니 끝낼 수밖에.",
      ]);
      await era.printAndWait([
        "조금 자포자기한 마음으로 ",
        you.get_colored_name(),
        "은(는) 한숨을 쉬며 상점가 안쪽 케이크 가게에 들어갔다……",
      ]);

      era.drawLine();
      await era.printAndWait([
        "……학원 건물의 세 여신상과 높이가 같은 저 케이크 상자는 대체 뭐지.",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "……기다리셨습니다, ",
        you.actual_name,
        " 님. 하야카와 ",
        minoru.adult_sex_title,
        "께서 예약하신 『초궁극무신극대화위력강화호화특전판 · 초콜릿 무스 케이크』입니다.",
      ]);
      await era.printAndWait([
        "……케이크 가게 점원들은 전부 잰말놀이를 배우나.",
      ]);
      await you.say_and_wait([
        "……저기요, 가게 안에도 다 안 들어가는 이 상자가 제가 주문한 초콜릿 무스 케이크가 맞아요?",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        '？ 『',
        you.actual_name,
        "』 님, 맞으시죠?",
      ]);
      await era.printAndWait([
        "그래, 분명 ",
        you.get_colored_name(),
        "의 이름이다…… 이 순간만큼은 인정하고 싶지 않았지만.",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "그럼 맞습니다. 하야카와 ",
        minoru.adult_sex_title,
        "께서 예약하신 『초궁극무신극대화위력강화호화특전판 · 초콜릿 무스 케이크』입니다.",
      ]);
      await era.printAndWait(["좋아, 도망칠 수 없군."]);
      await you.say_and_wait([
        "……알겠어요. 만 번 양보하고 또 만 번 양보해서, 눈앞의 이 거대한 물건이 제 케이크라고 칩시다. 그런데 이걸 어떻게 트레센까지 옮기죠?",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "? 트레센 학원에서 오신 분 맞으시죠?",
      ]);
      await era.printAndWait([
        "점원은 또 의아한 눈으로 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      await era.printAndWait([
        "그래, ",
        you.get_colored_name(),
        "은(는) 그곳 사람이다…… 여기서 「아니다」라고 말할 선택지는 없다.",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "그렇다면 간단하죠——이 상자를 짊어지고 걸어 돌아가시면 됩니다.",
      ]);
      await you.say_and_wait([
        "아니, 아니, 아니! 무리잖아요!? 저를 헤라클레스라고 생각해요?",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "하지만 ",
        acute.uma_sex_title,
        "라면 가능하잖아요?",
      ]);
      await you.say_and_wait([
        acute.uma_sex_title,
        "그래도 무리라고요!? 그렇게 쉽게 말하지 마세요!",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "하지만 하야카와 ",
        minoru.adult_sex_title,
        "은 가능하시던데요?",
      ]);
      await you.say_and_wait(["하야카와……"]);
      await era.printAndWait(["…………아, 그렇구나."]);
      await era.printAndWait([
        minoru.get_colored_name(),
        "인가. 이제야 앞뒤가 맞는다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 모든 게 자연스러운 흐름으로 느껴졌다. 고개를 든 순간, 망설임도 괴로움도 더는 남아 있지 않았다.",
      ]);
      await you.say_as_passer_by_and_wait("점원", [
        "아무튼 저희 가게 상품은 판매 후 반품과 교환이 불가능합니다. 이것이 하야카와 ",
        minoru.adult_sex_title,
        "께서 주문하신 케이크입니다——",
      ]);
      await era.printAndWait([
        "그렇게 말하며 점원은 ",
        you.get_colored_name(),
        "에게 정중히 인사했다.",
      ]);
      await you.say_as_passer_by_and_wait("점원", ["서명 부탁드립니다."]);

      era.drawLine();
      await you.say_and_wait(["힘점, 받침점, 작용점……"]);
      await you.say_and_wait(["힘점, 받침점, 작용점……"]);
      await era.printAndWait([
        "자기 몸의 몇 배나 되는 케이크 상자를 짊어지고 거리를 걷는다. 이게 현실이 아니었다면 ",
        you.get_colored_name(),
        "은(는) 다크 소울의 새 캐릭터로 보였을 것이다.",
      ]);
      await era.printAndWait([
        "중력 때문에 상자가 기울지 않도록 ",
        you.get_colored_name(),
        "은(는) 균형을 유지하는 주문을 끊임없이 외워야 했다.",
      ]);
      await you.say_and_wait(["힘점, 받침점, 작용점……"]);
      await you.say_and_wait(["힘점, 받침점, 작용점……"]);
      await acute.say_and_wait([
        "……저기, ",
        callname,
        ", 무슨 주문을 외우는 게니?",
      ]);
      await era.printAndWait(['！？', acute.get_colored_name(), '！？']);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 고개를 기울이자 ",
        acute.get_colored_name(),
        "이(가) 몸을 숙인 채 ",
        you.get_colored_name(),
        "의 곁에 서 있었다.",
      ]);
      await you.say_and_wait("원더 어큐트? 언제부터 거기 있었어?");
      await acute.say_and_wait([
        '……',
        you.actual_name,
        " 선생님이 케이크 가게에 들어갔을 때부터 따라오고 있었단다…… 그런데, ",
        you.actual_name,
        " 선생님. 무슨 주문을 외우는 게니?",
      ]);
      await era.printAndWait(["처음부터 따라왔었나…… 둘러댈 수도 없겠다."]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 어색한 분위기를 웃음으로 넘기려 했지만, 입을 여는 순간 이마의 땀이 혀끝에 떨어졌다. 짜서 도저히 웃을 수가 없었다.",
      ]);
      await you.say_and_wait([
        "이건…… 외우면 평정심을 유지할 수 있는 주문이야. 이른바 『마음을 가라앉히는 주문』——",
      ]);
      await acute.say_and_wait(["『마음을 가라앉히는 주문』이라……"]);
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 생각에 잠긴 듯 「마음을 가라앉히는 주문」이라고 중얼거린다.",
      ]);
      await era.printAndWait([
        "……어라? 태클 안 거네?",
        you.get_colored_name(),
        "은(는) 태클이 들어올 거라고 생각했다.",
      ]);
      await acute.say_and_wait([
        "『마음을 가라앉히는 주문』이었구나. 다행이네.",
        callname,
        "이(가) 무언가에 씐 줄 알았단다……",
      ]);
      await you.say_and_wait(["뭔가에 씌었다고?"]);
      await acute.say_and_wait([
        "응, 그야 ",
        callname,
        "은(는) 케이크 가게에서 누가 봐도 크기가 이상한 물건을 짊어지고 나왔잖니.",
      ]);
      await era.printAndWait(["아…… 그쪽인가."]);
      await era.printAndWait([
        "남들이 보기에는 이렇게 큰 케이크 상자를 짊어진 인간이 아무래도 이상할 것이다.",
      ]);
      await acute.say_and_wait(["도와줄까, ", callname, '？']);
      await era.printAndWait([
        acute.get_colored_name(),
        "의 목소리는 여전히 다정하다. 하지만 거대한 짐을 짊어진 ",
        you.get_colored_name(),
        "에게는 그 온화한 얼굴에 위로받을 여유가 없다.",
      ]);
      await you.say_and_wait(["괜찮아…… 무거운 일은 젊은 사람이 해야지."]);
      await era.printAndWait([
        "당연하다는 듯 ",
        acute.get_colored_name(),
        "의 도움을 거절했다.",
        you.get_colored_name(),
        "에게는 아직 트레이너로서의 자존심이 남아 있다. 적어도 짐을 나르는 힘쓰는 일을 ",
        you.get_colored_name(),
        "은(는) ",
        acute.get_colored_name(),
        "에게 떠넘기고 싶지 않다.",
      ]);
      await era.printAndWait([
        "애초에 ",
        acute.get_colored_name(),
        "은(는) 겉보기에도 이렇게 「가냘프다」.",
        acute.sex,
        "에게 중력의 굴레를 짊어지게 할 수는 없다.",
      ]);
      await acute.say_and_wait([
        "저기, ",
        callname,
        ", 나이로 따지면 내가 더 어리단다?",
      ]);
      await era.printAndWait([
        "화가 난 게 아니라, 온화하게 바로잡아 줄 뿐이다.",
        acute.get_colored_name(),
        "은(는) 서두르지 않고 말한다.",
      ]);
      await era.printAndWait([
        "그러고는 ",
        acute.sex,
        "는 허리를 펴고 걸음을 조금 늦춰, ",
        you.get_colored_name(),
        "의 눈에 보이지 않는 옆쪽으로 물러났다.",
      ]);
      await era.printAndWait([
        acute.sex,
        "는 고개를 들어 거대한 상자의 초콜릿 무스 표시를 보더니, 자신에게만 들릴 목소리로 중얼거렸다.",
      ]);
      await acute.say_and_wait([
        '……',
        callname,
        "은(는) 초콜릿 케이크를 좋아하는구나——",
      ]);
      await era.printAndWait([
        "그렇게 말하고 ",
        acute.get_colored_name(),
        "은(는) 숨을 내쉰 뒤 오른손을 ",
        you.get_colored_name(),
        "에게 보이지 않는 상자 뒤로 뻗었다.",
      ]);
      await era.printAndWait([
        "——검지 끝이 케이크 상자 뒷면에 살며시 닿았다.",
      ]);

      era.drawLine();
      await era.printAndWait([
        "놀랍게도 ",
        you.get_colored_name(),
        "은(는) 가는 도중에 쓰러지지 않았다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 거대한 초콜릿 무스를 옮기다 체력이 바닥나 길에 쓰러질 줄 알았다. 그런데 후반부터 등이 갑자기 가벼워졌고, 마지막에는 가볍게 뛰어서 트레센까지 돌아올 수 있었다.",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 헤어진 뒤에는 어째서인지 등이 다시 무거워졌다. 하지만 이제 두세 걸음이면 된다.",
        you.get_colored_name(),
        "은(는) 곧 거대한 초콜릿 무스 케이크를 ",
        minoru.get_colored_name(),
        "에게 건넸다.",
      ]);
      await minoru.say_and_wait([
        "수고하셨어요, ",
        you.actual_name,
        " 님. 파티에 아직 안 오신 건 당신뿐이에요. 자, 들어오세요——",
      ]);
      await you.say_and_wait("미안, 먼저 좀 쉴게요.");
      await minoru.say_and_wait(["네?"]);
      await era.printAndWait([
        "이렇게 큰 상자를 먼 거리까지 짊어지고 왔으니 ",
        you.get_colored_name(),
        "의 체력은 이미 바닥이다. 지금 ",
        you.get_colored_name(),
        "은(는) 파티에 가기보다 침대에 쓰러지고 싶다.",
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        "에게 사정을 말한 뒤 ",
        you.get_colored_name(),
        "은(는) 뒤도 돌아보지 않고 휴게실로 돌아갔다. 오늘도 무거운 하루였다.",
      ]);
      await era.printAndWait(['…………………']);
      await era.printAndWait(['………………']);
      await era.printAndWait(['…………']);
      await era.printAndWait([
        "그나저나 이 파티는 뭘 위해 연 거였더라.",
      ]);
      await era.printAndWait(["뭐, 아무래도 좋다."]);

      era.drawLine();
      await era.printAndWait([
        "다음 날 아침, 휴게실 문 앞에 「취직을 축하합니다」라고 적힌 초콜릿 무스 케이크가 놓여 있었다.",
      ]);
      await era.printAndWait(["누가 두고 갔을까. 궁금하다."]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = "불안";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        "6월, ",
        acute.get_colored_name(),
        "의 데뷔전.",
      ]);
      await era.printAndWait([
        "경기장은 삿포로 근처의 작은 회장으로, 참가 측인 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "는 하루 일찍 경기장에 도착했다.",
      ]);
      await era.printAndWait('………………');
      await era.printAndWait("불안.");
      await era.printAndWait("극심한 불안.");
      await era.printAndWait(
        "비유하자면 달에 착륙했던 아폴로 17호의 지구 귀환 캡슐 안에서 바닥에 뜬금없이 나사 하나가 떨어져 있는 것을 발견했을 때만큼의 불안감이었다.",
      );
      await era.printAndWait(
        "밤에는 좀처럼 잠들지 못했고, 그저 침대에 기대어 있는 것만으로도 가끔씩 자신의 조급하고 불안한 심장 고동 소리가 들려왔다.",
      );
      await era.printAndWait("……솔직히 말해서, 정말 성공할 수 있을까?");
      await era.printAndWait([
        "내가 담당하는 ",
        acute.get_colored_name(),
        "가, 과연 이 레이스에서 승리할 수 있을까?",
      ]);
      await era.printAndWait("꼭 쥔 손바닥에서 자신도 모르게 식은땀이 흘러내렸다……");
      await acute.say_and_wait('……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        "몸을 돌리자, ",
        acute.get_colored_name(),
        "가 바로 뒤에 서 있었다.",
      ]);
      await era.printAndWait(
        "무의식적으로 땀으로 흥건한 두 손을 등 뒤로 숨기는 모습은, 마치 나쁜 짓을 들킨 어린아이 같았다.",
      );
      await acute.say_and_wait(["괜찮단다, ", callname, '。']);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait("그것은 마치 태양처럼 따스한 미소였다,");
      await era.printAndWait("하지만 그 모습을 본 당신은, 어째서인지 알 수 없는 죄책감이 피어올랐다.");
      await acute.say_and_wait([
        "너는 이미 충분히 노력했단다, ",
        callname,
        '。',
      ]);
      await acute.say_and_wait("남은 것은 내게 맡기렴.");
      await era.printAndWait([
        you.get_colored_name(),
        "의 어깨를 두드리고, ",
        acute.get_colored_name(),
        "은(는) 뒤도 돌아보지 않은 채 늠름한 뒷모습으로 통로 출구를 향한다——",
      ]);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait("얼마나 듬직하고 늠름한 뒷모습인가.");
      await era.printAndWait(
        "그 거대한 뒷모습을 멀리서 바라보며, 마음속에는 자괴감과 부끄러움이 교차했다——",
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async begin_race_win(acute, you, callname) {
    await era.printAndWait("하늘 끝의 제비가 경주장 위를 맴돈다.");
    await era.printAndWait("이야기하고, 전하고, 말하고, 드러낸다.");
    await era.printAndWait("늠름한 모습을 전하며, 개선의 답을 얻는다——");
    await era.printAndWait("작은 경기장, 백 명도 채 되지 않는 관중.");
    await era.printAndWait("환호는 그리 뜨겁지 않을지도 모른다.");
    await era.printAndWait(
      "하지만 벅찬 마음과 늠름한 모습은 한 사람의 가슴에 잊지 못할 흔적을 남기기에 충분하다.",
    );
    await era.printAndWait([
      "경기장 위에서 ",
      acute.get_colored_name(),
      "은(는) 의심할 여지 없는 중심에 서 있다.",
    ]);
    await era.printAndWait("그 늠름한 모습에, 평소의 온화한 미소.");
    await era.printAndWait(["황금빛 아래 ", acute.sex, "는 주먹을 높이 치켜들었다."]);
    await era.printAndWait("——얼마나 눈부신 모습인가.");
    await era.printAndWait([
      "그 성스러운 순간을 똑바로 바라보며 ",
      you.get_colored_name(),
      "은(는) 황홀함 속에서 넋을 잃었다.",
    ]);
    await era.printAndWait([
      "그사이 ",
      acute.sex,
      "는 승리의 의식을 마쳤다.",
    ]);
    await era.printAndWait([
      "발끝을 세운 채 ",
      acute.get_colored_name(),
      "이(가) 이쪽으로 걸어온다——",
    ]);
    era.printButton('「——」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 입을 열어 ",
      acute.sex,
      "의 승리를 축하하려 했다.",
    ]);
    era.printButton("「……아, 아——」", 1);
    await era.input();
    await era.printAndWait("하지만 입을 여는 순간, 말이 사라졌다.");
    await era.printAndWait([
      you.get_colored_name(),
      "이(가) 이렇게까지 허둥대는 자신을 탓하는 동안, ",
    ]);
    await era.printAndWait(["먼저 입을 연 것은 ", acute.sex, "이었다."]);
    await acute.say_and_wait(["후후…… 정말 수고 많았단다, ", callname]);
    await era.printAndWait(['——', acute.sex, "가 입을 열었다."]);
    await era.printAndWait([acute.sex, "의 첫마디는 "]);
    await era.printAndWait([
      "한때 패배했던 ",
      you.get_colored_name(),
      "에게 전하는 감사였다.",
    ]);
    era.printButton('「————」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 그 자리에 멍하니 굳었다. 주위는 순식간에 조용해지고, ",
      you.get_colored_name(),
      "의 가슴으로 감정의 열기만 밀려들었다.",
    ]);
    await era.printAndWait("손가락이 멈추지 않는다——");
    await acute.say_and_wait([
      '……',
      callname,
      "? 왜 그러니. 갑자기 어디 아프기라도 한 게야?",
    ]);
    era.printButton("「아니, 괜찮아——나는 괜찮아.」", 1);
    await era.input();
    await era.printAndWait([
      "솟구치는 감정을 억누르고, 손가락과 눈썹에 맺히는 물기를 훔치며 ",
      you.get_colored_name(),
      "은(는) 최대한 당황한 기색을 가다듬었다.",
    ]);
    era.printButton(`「아무것도 아니야——걱정하지 마, ${acute.name}。」`, 1);
    await era.input();
    await era.printAndWait([
      "그것이 그날 ",
      you.get_colored_name(),
      "이(가) ",
      acute.get_colored_name(),
      "에게 건넨 마지막 말이었다.",
    ]);
    await era.printAndWait('………………');
    await era.printAndWait([era.get('flag:当前年'), "년."]);
    await era.printAndWait([
      "한 번 패배했던 육성자가 담당 ",
      acute.uma_sex_title,
      "에게 거두어진 첫해.",
    ]);
    await era.printAndWait(
      "그리고 그해 유월, 평범한 데뷔전이 끝난 뒤 한 번 패배했던 육성자는 결심했다.",
    );
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 결심했다. 담당 ",
      acute.uma_sex_title,
      "를 ",
    ]);
    await era.printAndWait("진정한 전당 입성으로 이끌겠다고——");
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async begin_race_lose(acute, you, callname) {
    await era.printAndWait("바둑에는 「한 수를 그르치면」이라는 말이 있다.");
    await era.printAndWait("그 뒤에는 「판 전체를 잃는다」가 이어진다.");
    await era.printAndWait("지금 벌어지는 일을 이보다 더 잘 표현할 수는 없다.");
    await era.printAndWait(
      "늠름한 몸이 아무리 아름답고 충실해도, 한 수의 차이는 뒤집을 수 없는 사실이다.",
    );
    await era.printAndWait(
      "전광판이 보여 주는 사실 앞에서 패배를 향한 모든 해명은 변명처럼 들린다.",
    );
    await era.printAndWait([
      acute.get_colored_name(),
      "은(는) 천천히 경기장을 떠난다. 지금 박수와 환호는 ",
      you.get_colored_name(),
      "과(와) ",
      acute.get_colored_name(),
      "의 것이 아니다.",
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      "조금 풀이 죽은 ",
      acute.get_colored_name(),
      "의 모습을 보고 ",
      you.get_colored_name(),
      "은(는) 무언가 말하고 싶어졌다——",
    ]);
    await acute.say_and_wait(["괜찮단다, ", callname]);
    await era.printAndWait('……');
    await era.printAndWait("입을 열기도 전에 상대의 위로가 먼저 도착했다.");
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 지금 무엇을 해야 할지 알 수 없다.",
    ]);
    await era.printAndWait("얼음 같은 냉기가 정수리부터 발끝까지 흘러내린다.");
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 그 자리에 선 채 아무것도 하지 못하고, 조용히 ",
      acute.get_colored_name(),
      "이(가) 멀어지는 모습을 지켜보았다.",
    ]);
    await era.printAndWait('…………………');
    await era.printAndWait('……………');
    await era.printAndWait('………');
    await era.printAndWait("한순간만으로는 트레이닝의 기쁨을 다 담을 수 없다.");
    await era.printAndWait("세상은 승패가 갈리는 그 순간만 믿는다——");
  },
  ws_47: (() => {
    const title = "내기와 사랑과 비행";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづなへの呼び方
     * @param {PrintedSpan} m_call_t 駿川たづなの秋川やよいへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     */
    const f = async (
      acute,
      minoru,
      you,
      callname,
      call_301,
      m_call_t,
      y_call_m,
    ) => {
      await era.printAndWait(["봄이 가고 가을이 오더니, 어느새 크리스마스이브다."]);
      await era.printAndWait([
        "겨울, 학생들이 감기에 걸리지 않도록 학원 건물의 난방은 최대로 켜져 있다. 너무 잘되는 나머지 ",
        you.get_colored_name(),
        "은(는) 목도리와 외투를 벗어 교직원 휴게실 문 옆 옷걸이에 걸어야 했다.",
      ]);
      await era.printAndWait([
        "크리스마스라지만 이 시기에도 레이스는 적지 않다. 트레센 학원의 트레이너인 이상 자리를 지키며 계속 일해야 하니, 다른 사람들처럼 휴일을 만끽할 수는 없다.",
      ]);
      await era.printAndWait([
        "……그래도 밤이 되면 일하는 틈틈이 쉴 시간 정도는 낼 수 있다.",
      ]);
      await era.printAndWait([
        "누구의 제안이었는지, 휴게실의 교직원들이 모여 서랍 틈에 숨겨 둔 트럼프를 꺼냈다. 교직원 사무실은 금세 즐거운 분위기에 휩싸였다.",
      ]);
      await era.printAndWait([
        "어른이라면 무언가 거는 것이 당연하다. 무엇을 걸든 ",
        you.get_colored_name(),
        "에게는 절대적인 자신감이 있다. 누구에게도 지지 않으리라고.",
      ]);
      await you.say_and_wait(["뭐라고? 왜 누구에게도 지지 않느냐고?"]);
      await you.say_and_wait([
        "물을 필요도 없다. 코에 걸친 안경을 밀어 올리면 답은 뻔하다.",
      ]);
      await era.printAndWait([
        "이것은 ",
        you.get_colored_name(),
        "이(가) 오늘의 내기를 위해 「모든 생체 실험을 받겠다」는 계약서, 이하 신체 포기 각서에 서명하고, 상점가의 수수께끼 소녀에게 빌린 「투시 프레임」을 끼운 만능 안경이다. 이것만 있으면 ",
        you.get_colored_name(),
        "은(는) 상대의 패를 전부 꿰뚫어 보고 내기에서 불패의 경지에 설 수 있다.",
      ]);
      await era.printAndWait([
        "물론 이 안경에는 소소한 부가 기능도 있다. 예를 들면 옷 너머의 알몸이 보인다. 그래서 지금 ",
        you.get_colored_name(),
        "은(는) 키류인 트레이너의 작은 가슴까지 똑똑히 보고 있다——",
      ]);
      await era.printAndWait([
        "하지만 그런 건 아무래도 좋다! 여자의 몸이 트럼프보다 중요할 리 없잖아!?",
      ]);
      await era.printAndWait([
        "한때 골드 쉽은 경주장에서 하룻밤에 백이십일억을 걸고 따냈다. 너 ",
        you.actual_name,
        "이(가) 교직원 상대로 「20000」 우마 코인을 따내는 것쯤은 식은 죽 먹기다!",
      ]);
      await era.printAndWait(["오늘, 트레센 도박 전설이 세상을 뒤흔든다!"]);
      await era.printAndWait(["여러분, 기대하시라!"]);

      era.drawLine({ content: "삼여신상 앞" });
      await acute.say_and_wait([
        "그래서, ",
        you.actual_name,
        " 선생님. 어째서 세 여신상에 매달려서 구경거리가 되어 있는 게니?",
      ]);
      await era.printAndWait([
        "트레센의 중정.",
        acute.get_colored_name(),
        "은(는) 연못가에 앉아, 얇은 옷차림으로 세 여신상에 매달린 ",
        you.get_colored_name(),
        "을(를) 올려다보고 있다.",
      ]);
      await you.say_and_wait([
        "……투시 안경을 쓴 걸 ",
        y_call_m,
        "에게 들켰어.",
      ]);
      await acute.say_and_wait(["어머~ 그랬구나~"]);
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 온화하게 말한다. 느긋한 말투는 언제나처럼 다정하다.",
      ]);
      await era.printAndWait(["……사실 처음에는 순조로웠다."]);
      await era.printAndWait([
        "투시 안경 덕분에 ",
        you.get_colored_name(),
        "은(는) 테이블에서 불패를 유지하며 몇 번의 내기로 꽤 벌었다. 「20000」 우마 코인까지 한 걸음만 남아 있었다.",
      ]);
      await era.printAndWait([
        '——',
        minoru.get_colored_name(),
        "이(가) 오기 전까지는.",
      ]);

      era.drawLine({ content: "트레센 교직원 집무실" });
      await minoru.used_to_say_and_wait([
        "호오…… 1980년 서독에서 수입한 최신 기술, 투시가 가능한 X선 안경이군요……",
      ]);
      await you.used_to_say_and_wait(["윽!?"]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 긴장하며 돌아보니, 어느새 ",
        minoru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 뒤에 서 있었다.",
      ]);
      await minoru.used_to_say_and_wait([
        "안심하세요. 폭로할 생각은 없으니까요, ",
        you.actual_name,
        " 님……",
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        "은(는) 차갑게 말하며 ",
        you.get_colored_name(),
        "의 어깨를 가볍게 두드렸다. 그런데 순식간에 보이지 않는 거대한 손이 ",
        you.get_colored_name(),
        "을(를) 의자에 짓눌렀다.",
      ]);
      await minoru.used_to_say_and_wait([
        "전부터 말씀드렸죠. 트레센에서 트럼프를 해도 좋지만, 도박은 안 된다고요. 안타깝게도 여러분은 듣지 않으셨네요…… 이번 일이 교훈이 된다면 더는 학원 안에서 도박하는 분이 없겠죠……",
      ]);
      await minoru.used_to_say_and_wait([
        "다만 이렇게 많이 따게 내버려 두면 모양새가 좋지 않네요…… 마침 최근 ",
        m_call_t,
        " 쪽도 자금이 부족하니까——",
        you.actual_name,
        " 님, 저와 한 판 하시겠어요?",
      ]);

      era.drawLine({ content: "삼여신상 앞" });
      await acute.say_and_wait([
        "음…… ",
        call_301,
        "의 의도는 ",
        callname,
        "에게 부당하게 딴 돈을 내기 형식으로 돌려 내게 하려는 거였겠구나……",
      ]);
      await era.printAndWait([
        "……맞아, ",
        you.get_colored_name(),
        "도 그렇게 생각했어.",
      ]);
      await era.printAndWait([
        "딴 돈을 버리고 명예를 지키느냐, ",
        minoru.get_colored_name(),
        "에게 사기가 들통나 돈과 명예를 모두 잃느냐……",
        you.get_colored_name(),
        "은(는) 후자를 택할 정도로 미치진 않았다.",
      ]);
      await acute.say_and_wait([
        "그렇다면, ",
        you.actual_name,
        " 선생님은 왜 여신상에 매달린 게니?",
      ]);
      await era.printAndWait(["그건……"]);

      era.drawLine({ content: "트레센 교직원 집무실" });
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 딴 돈이 「3000」 우마 코인까지 줄었을 때, ",
        minoru.get_colored_name(),
        "은(는) 먼저 손을 멈췄다.",
      ]);
      await minoru.used_to_say_and_wait([
        "후우…… 이쯤 하죠. 통쾌한 승부였어요. 수고하셨습니다.",
      ]);
      await you.used_to_say_and_wait(["네? 이제 됐어요?"]);
      await minoru.used_to_say_and_wait([
        "네. 저도 악마는 아니니까요. 더 몰아붙이진 않을게요——게다가 그 돈, 당신도 쓸 곳이 있으시잖아요?",
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        "은(는) 고개를 저었다. 초록색 모자가 좌우로 흔들렸다.",
        acute.sex,
        "는 검지를 입가에 대며 짓궂은 미소를 지었다.",
      ]);
      await era.printAndWait([
        "……그나저나 ",
        acute.sex,
        "는 어떻게 ",
        you.get_colored_name(),
        "이(가) 당장 돈이 필요하다는 걸 알았지.",
      ]);
      await minoru.used_to_say_and_wait([
        "후후, 제 정보망을 얕보지 마세요.",
      ]);
      await era.printAndWait([acute.sex, "는 웃으며 말할 뿐, 자세히 설명하지 않았다."]);
      await minoru.used_to_say_and_wait([
        "그건 그렇고, 이 서독 첨단 제품은 어디서 구하셨나요? 이런 X선 안경은 이미 생산이 끝났을 텐데요……",
      ]);
      await you.used_to_say_and_wait([
        "아니…… 우선 이건 X선 안경이 아니에요. 투시 프레임을 끼운 만능 프레임이고……",
      ]);
      await minoru.used_to_say_and_wait(["……투시 프레임이요?"]);
      await you.used_to_say_and_wait([
        "네. 쉽게 말해 이 프레임을 끼우면 안경으로 보는 건 전부 투시할 수 있어요. 옷도 예외……",
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait([
        "잠깐, ",
        you.get_colored_name(),
        "은(는) 방금 무슨 말을 한 거지.",
      ]);
      await minoru.used_to_say_and_wait([
        "……옷도 예외가 아니라는 건, 지금 누구를 봐도 알몸이라는…… 뜻인가요?",
      ]);
      await you.used_to_say_and_wait(['…………']);
      await era.printAndWait([
        "칠흑 같은 기운이 ",
        you.get_colored_name(),
        "에게 다가온다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 재빨리 알아챘다. 머리 위에 「위험」이라는 글자가 나타났다 사라진다. 보이지 않는 거대한 손이 ",
        you.get_colored_name(),
        "을(를) 짓뭉개기 전에 어떻게든 해야 한다. 뭐라도 해야 한다.",
      ]);
      await era.printAndWait(["사과할까. 무릎 꿇고 사과할까. 지금? 여기서?"]);
      await era.printAndWait([
        "아니, 다른 방법이 있을 것이다. 더 좋은 말로 이 위기를 풀 수 있을 것이다……",
      ]);
      await era.printAndWait([
        "——그래, ",
        you.get_colored_name(),
        "은(는) 떠올렸다. 이렇게 중요한 걸 잊고 있었다니.",
        minoru.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "의 이 말을 들으면 반드시 용서해 줄 것이다.",
      ]);
      await you.used_to_say_and_wait([
        "……안심하세요, ",
        y_call_m,
        ". 당신의 알몸은 보지 않았어요.",
      ]);
      await you.used_to_say_and_wait([
        "왜냐하면 저는 카드쟁이니까요. 카드쟁이의 관심은 카드 위에만——",
      ]);
      await you.used_to_say_and_wait(["위위위위위위위위위위위위위———"]);
      await era.printAndWait([
        "……정신을 차려 보니 몸이 ",
        minoru.get_colored_name(),
        "의 쌍절곤이 되어 있었다.",
      ]);

      era.drawLine({ content: "삼여신상 앞" });
      await acute.say_and_wait([
        "어머나…… 알몸이 보이는 안경을 쓰고, 알몸에는 관심이 없다고 말하다니. 감옥에 갈 일인 데다 죄질도 꽤 나쁘구나, ",
        callname,
        '。',
      ]);
      await you.say_and_wait(["뭐…… 확실히 그렇지——"]);
      await era.printAndWait([
        "분명 어떻게 생각해도 ",
        you.get_colored_name(),
        "이(가) 먼저 잘못했다. 그러니 세 여신상에 매달려 반성하더라도 불평할 수는 없다.",
      ]);
      await era.printAndWait(["다만 그건 그렇다 치고……"]);
      await you.say_and_wait([
        acute.get_colored_name(),
        ", 이렇게 늦었는데 기숙사에 안 돌아가도 돼? 통금이라든가……",
      ]);
      await acute.say_and_wait(["음……"]);
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 고개를 들어 먼 하늘을 바라본다. 구름 없는 밤이지만 도시의 불빛 아래에서는 별이 거의 보이지 않는다.",
      ]);
      await acute.say_and_wait([
        callname,
        "을(를) 혼자 두려니 조금 걱정이 되어서……",
      ]);
      await you.say_and_wait(["……그래."]);
      await you.say_and_wait("나는 괜찮아. 얼른 돌아가 쉬어.", true);
      await era.printAndWait([
        "……그런 말로 ",
        acute.sex,
        "를 안심시키고 싶은데, 어째서인지 ",
        you.get_colored_name(),
        "이(가) 입을 열려는 순간 공허함과 가슴의 아픔이 ",
        you.get_colored_name(),
        "의 목을 가득 채웠다.",
      ]);
      await era.printAndWait([
        "세 여신상에 매달린 채 높은 곳에서 ",
        acute.get_colored_name(),
        "의 쓸쓸한 모습만 바라볼 수밖에 없다…… 어째서인지 ",
        you.get_colored_name(),
        "은(는) 말할 수 없이 답답하고 가슴이 아팠다.",
      ]);
      await you.say_and_wait("……저기, 원더 어큐트.");
      await acute.say_and_wait(["응?"]);
      await you.say_and_wait(["설 연휴에…… 같이 오키나와에 가지 않을래?"]);
      await acute.say_and_wait(["……오키나와로 여행을 말이니?"]);
      await era.printAndWait([
        acute.sex,
        "는 돌아서서 여신상 위의 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      await you.say_and_wait([
        "응. 남은 『3000』 우마 코인으로 왕복 비행기에 이박 일일 오키나와 여행…… 음——충분하지 않을까?",
      ]);
      await acute.say_and_wait([
        "……어째서 나를 부르는 게니, ",
        callname,
        '？',
      ]);
      await you.say_and_wait([
        "그건…… 순간적인 충동이었을 수도, 처음부터 목적이 있었을 수도 있다…… 처음부터 ",
        acute.get_colored_name(),
        "을(를) 위해 이 내기에 뛰어든 건지도 모른다.",
      ]);
      await you.say_and_wait([
        "『20000』 우마 코인을 벌어서 ",
        acute.get_colored_name(),
        " 앞에 가져가고, ",
        acute.get_colored_name(),
        "이(가) 놀라서 『어머~』 하며 박수 치는 소리를 듣고 싶어서……",
      ]);
      await you.say_and_wait([
        acute.get_colored_name(),
        "을(를) 기쁘게 해 주고 싶고, ",
        acute.get_colored_name(),
        "에게 칭찬받고 싶어서…… 하하, 이상하지?",
      ]);
      await acute.say_and_wait(['……']);
      await acute.say_and_wait(["……그랬구나."]);
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 고개를 숙였다. 온화한 미소는 그대로였지만 안색만 조금 어두워졌다.",
      ]);
      await era.printAndWait([
        "달빛이 ",
        acute.sex,
        "를 비춘다. 아득한 기분 속에서 ",
        acute.get_colored_name(),
        "에게서 평소의 온화함이 옅어지고, ",
        acute.teen_sex_title,
        "다운 여린 모습이 섞여 들었다.",
      ]);
      await you.say_and_wait(["……미안. 상처 줬어?"]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 무의식중에 사과했다. 하지만 ",
        acute.get_colored_name(),
        "은(는) 작게 고개를 저을 뿐이었다.",
      ]);
      await acute.say_and_wait([
        "아니란다. 오히려 반대야. 나는 무척 기쁘단다.",
      ]);
      await acute.say_and_wait([
        "다만 오키나와 여행은…… 그만두자꾸나. 나는 더운 곳이 그리 편하지 않아서~",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 일어나 연못을 건너고 높은 단에 올라, 여신상——그러니까 ",
        you.get_colored_name(),
        "의 앞으로 다가왔다.",
      ]);
      await you.say_and_wait(["……더운 곳이 싫다고?"]);
      await acute.say_and_wait([
        "응. 사실 비행기를 별로 좋아하지 않는단다. 하늘을 나는 쇠로 된 새는 너무 무섭거든…… 그러니까——",
      ]);
      await acute.say_and_wait([
        callname,
        ", 먼저 자신을 소중히 하렴.",
      ]);
      await era.printAndWait([
        "짙은 갈색 목도리를 풀어 ",
        acute.get_colored_name(),
        "은(는) 그것을 ",
        you.get_colored_name(),
        "의 목에 둘렀다.",
      ]);
      await era.printAndWait([
        "반으로 접고, 뒤집고, 둘러서, 틈으로 통과시킨다…… 금세 목도리가 감겼다.",
      ]);
      await acute.say_and_wait(["자, 그럼……"]);
      await era.printAndWait([
        acute.get_colored_name(),
        "의 손이 ",
        you.get_colored_name(),
        "의 뺨을 어루만졌다.",
      ]);
      await era.printAndWait([acute.sex, "의 손바닥은 아주 차가웠다."]);
      await acute.say_and_wait([
        "다음에는 이런 일 하지 말렴, ",
        callname,
        '。',
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait(['……………']);
      await era.printAndWait(['………']);
      await era.printAndWait(["이상하다."]);
      await era.printAndWait(["어째서 갑자기 눈물이 멈추지 않는 걸까."]);

      era.drawLine();
      await era.printAndWait(["다시 눈을 떴을 때는 다음 날 아침이었다."]);
      await era.printAndWait([
        "옷차림도 흐트러진 채 창가에 누워 있다. 창밖에는 흰 눈이 흩날린다.",
      ]);
      await era.printAndWait(["몸을 일으키자 조금 멍해진다."]);
      await era.printAndWait([
        "어제 일은 어째서인지 흐릿하다. 마지막으로 기억나는 것은 ",
        you.get_colored_name(),
        "이(가) 따뜻한 꿈에 잠겼다는 것뿐이다.",
      ]);
      await era.printAndWait([
        "일어나 평소처럼 세수하고, 밥을 먹고, 트레이닝 계획을 세우며 준비한다. 상점가의 수수께끼 실험녀와 맺은 신체 포기 각서 때문에 강제로 약물 실험을 받으며, 「3000」 우마 코인을 주고 빌린 투시 프레임을 망가뜨린 빚을 갚는다.",
      ]);
      await era.printAndWait(["뜻밖에도 기분이 좋다."]);
      await era.printAndWait([
        "그러고는 중정을 지나다 ",
        acute.get_colored_name(),
        "이(가) 고목 구멍에 웅크리고 있는 모습을 본다.",
      ]);
      await era.printAndWait(["하늘에서 눈이 흩날린다."]);
      await era.printAndWait(["발끝을 세우고 살며시, 살며시, "]);
      await era.printAndWait(["뒤에서 다가간다——"]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = "새해의 포부";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        "설날 무렵, ",
        acute.get_colored_name(),
        "와(과) 함께 트레이닝실에 머물며 텔레비전을 보면서 새해가 오기를 기다리고 있다.",
      ]);
      await acute.say_and_wait("우후후~ 코타츠 안은 따끈따끈하구나~");
      await era.printAndWait([
        "코타츠 안에 앉아 있는 ",
        acute.get_colored_name(),
        "는, 귤껍질에 붙은 하얀 귤락을 떼어내며 무심결에 말했다.",
      ]);
      await acute.say_and_wait([
        "아, 참. ",
        callname,
        "~ 하나 물어봐도 될까?",
      ]);
      era.printButton("「응? 왜 그래?」", 1);
      await era.input();
      await acute.say_and_wait(
        "실은 말이야... 요즘 또래 애들이랑 이야기할 때면, 젊은 애들이랑 어떻게 대화해야 할지 잘 모르겠다는 느낌이 드는게야.",
      );
      await acute.say_and_wait(
        "좋아하는 거라든지, 자주 산책하는 장소라든지, 요즘 즐겨 듣는 음악이라든지— 뭐 그런 것들. 요즘 젊은이들과는 화제가 많이 안 맞는 것 같구먼.",
      );
      await acute.say_and_wait(
        "그래서 말인데... 새해가 오면, 또래 친구들 눈에 확 달라진 모습으로 변신해 볼까 싶어서...",
      );
      await acute.say_and_wait([
        "그러니까, ",
        callname,
        ". 어떻게 하면 좋을지 조언해 주겠니?",
      ]);
      era.println();
      era.printButton("「요즘 젊은이들의 문화를 열심히 배워보자!」（근성+25）", 1);
      era.printButton("「일단 그런 건 제쳐두는 게 어때?」（스태미나+20）", 2);
      era.printButton(
        "「동년배들의 시선을 끌 만한 더 재미있는 화제를 생각해서 또래의 리더가 되어보자!」（스킬포인트+20）",
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await acute.say_and_wait("젊은이들의 문화 배우기라... 그렇구나.");
          await acute.say_and_wait(
            "그럼 우선, 핸드폰으로 요즘 유행하는 걸 검색해 봐야겠구먼.",
          );
          await acute.say_and_wait(
            "ㅇㆍㆍㅡㅈㅡㅁㅇㅡ... 오타가 났네, 지우기—",
          );
          await acute.say_and_wait("아, 너무 많이 지웠네... 그럼 다시—");
          await era.printAndWait(
            "검지손가락으로 화면을 톡톡 두드리며, 입력한 글자를 작게 소리 내어 읽고 있다.",
          );
          await era.printAndWait("멀리서 지켜보고 있자니, 그 모습이 무척이나 귀엽게 느껴졌다.");
          await acute.say_and_wait("ㅇㆍㆍㅡㅈㅡㅁㅇㅡㆍㆍㅎㅣㆍㅣㅇ—— 엔터");
          await acute.say_and_wait('………………');
          await acute.say_and_wait("어라? 화면이 왜 안 움직일까?");
          await era.printAndWait([
            acute.get_colored_name(),
            "의 핸드폰 조작 화면은 보이지 않지만.",
          ]);
          await era.printAndWait(
            "옆에서 듣자 하니, 엔터 키를 확인 버튼으로 착각한 모양이다.",
          );
          await era.printAndWait([
            "아무래도 【젊은이들의 문화 배우기】는 ",
            acute.get_colored_name(),
            "에게는 아직 갈 길이 먼 듯하다—",
          ]);
          break;
        case 2:
          await acute.say_and_wait("일단 그런 건 제쳐두라... 고?");
          await acute.say_and_wait(
            "음... 하긴 그렇네. 새해인 만큼— 푹 쉬어야겠구먼.",
          );
          await acute.say_and_wait(["그럼— 자, ", callname, '。']);
          await era.printAndWait([
            "느긋한 몸짓의 ",
            acute.get_colored_name(),
            "는, 손에 쥐고 있던 하얀 귤락을 다 떼어낸 귤을 반으로 갈라 건네주었다.",
          ]);
          await era.printAndWait("그중 한 조각을 떼어 입에 넣자—");
          era.printButton('「——————————————」', 1);
          await era.input();
          await era.printAndWait("엄청 셔!!!!");
          await era.printAndWait([
            "옆에서 신맛 때문에 얼굴이 일그러진 ",
            you.get_colored_name(),
            "을(를) 보며, ",
            acute.get_colored_name(),
            "는 무심결에 웃음을 터뜨렸다.",
          ]);
          await era.printAndWait(
            "웃음소리 속에서, 신맛 가득한 새해를 보냈다—",
          );
          break;
        case 3:
          await acute.say_and_wait("또래의 리더?");
          await era.printAndWait([
            acute.get_colored_name(),
            "는 무슨 말인지 잘 이해하지 못한 듯하다.",
          ]);
          await acute.say_and_wait(
            "무슨 말인지 잘 모르겠지만... 요컨대, 화제를 열심히 찾아보라는 뜻이려나?",
          );
          await acute.say_and_wait("열심히 화제를 찾는다... 화제라—");
          await acute.say_and_wait(
            "아, 생각났다. 새해 명절 스튜를 만드는 방법— 이걸 화제로 삼으면, 틀림없이 분위기가 화기애애해지겠구먼... 우후후.",
          );
          await era.printAndWait([
            acute.get_colored_name(),
            "는 온화하게 웃었다.",
          ]);
          await era.printAndWait(
            "그러는 사이, 주방 난로 위에서 끓고 있는 스튜가 보글보글 경쾌한 소리를 내기 시작했다—",
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = "세기 초 최강 권투인의 날";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_48 ワンダーアキュートのトーセンジョーダンへの呼び方
     * @param {PrintedSpan} j_call_a トーセンジョーダンのワンダーアキュートへの呼び方
     */
    const f = async (
      acute,
      jordan,
      minoru,
      taste,
      you,
      callname,
      call_48,
      j_call_a,
    ) => {
      await era.printAndWait([
        "봄이 오고 가을이 지나, ",
        acute.get_colored_name(),
        "의 트레이너가 된 지도 벌써 이 년째다.",
      ]);
      await era.printAndWait(
        "설날의 분위기가 아직 남아 있다. 지난 연말 상점가에서 쇼핑하다 문득 보았던 크리스마스트리가 새 장식을 달고 다시 입구에 서 있다.",
      );
      await era.printAndWait(
        "조금 떨어져 트리에 달린 선물을 바라보다가 무슨 축제 장식인지 궁금해졌다. 손가락을 꼽아 날짜를 세고서야 생각났다. 며칠 뒤면 발렌타인이다.",
      );
      await era.printAndWait([
        "……뭐, ",
        you.get_colored_name(),
        "과(와)는 인연 없는 축제다.",
      ]);
      await era.printAndWait([
        "트레센의 높은 담장 안에서 사는 ",
        you.get_colored_name(),
        "에게 일상은 앞날이 밝은 신인 ",
        acute.uma_sex_title,
        "와(과)의 끊임없는 트레이닝이다. 담장 밖에서 또래 이성과 달콤 쌉싸름한 연애를 할 시간이 있을 리 없다.",
      ]);
      await era.printAndWait([
        "인기 있는 트레이너는 발렌타인에 담당 ",
        acute.uma_sex_title,
        "에게 우정 초콜릿을 받기도 한다던데……",
      ]);
      await era.printAndWait([
        "하지만 아무리 생각해도 ",
        acute.get_colored_name(),
        "은(는) 발렌타인을 챙기는 젊은 감성의 ",
        acute.uma_sex_title,
        "처럼 보이지 않는다——",
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('…………');
      era.printButton("「응?」", 1);
      await era.input();
      await era.printAndWait([
        "상점가에서 트레이닝 용품을 사다가, 입구에서 마침 지나가던 「",
        acute.get_colored_name(),
        "」와 「",
        jordan.get_colored_name(),
        '」。',
      ]);
      await era.printAndWait(
        "둘은 이야기를 나누며 나란히 걷고 있다. 무슨 이야기인지는 모르겠다.",
      );
      await era.printAndWait("방향을 보니 「역」 근처로 가는 모양이다——");
      await era.printAndWait("…………따라가 볼까.");
      await era.printAndWait("어째서인지 무슨 일이 생길 것 같은 예감이 든다.");
      await era.printAndWait(
        "방금 특가로 산 닭가슴살 두 근과 단백질 보충제를 들고, 담당 학생의 뒤를 몰래 따라간다.",
      );
      await era.printAndWait('……');
      await era.printAndWait([
        "……기분 탓인가. 길가의 경찰관이 ",
        you.get_colored_name(),
        "을(를) 보는 눈빛이 조금 이상하다.",
      ]);
      era.drawLine();
      await jordan.say_and_wait([
        "이거야, 이거!",
        j_call_a,
        "——봐, 전혀 할 수가 없다니까!",
      ]);
      await acute.say_and_wait("……『펀치 머신』?");
      await acute.print_and_wait([
        "역 앞 오락실.",
        acute.get_colored_name(),
        "과(와) ",
        jordan.get_colored_name(),
        " 두 사람이 새 펀치 머신을 둘러싸고 있다.",
      ]);
      await jordan.say_and_wait([
        "맞아, 이 오락실에 새로 들어온 거야. 『",
        acute.uma_sex_title,
        "』급 펀치 머신.",
      ]);
      await jordan.say_and_wait([
        '『',
        acute.uma_sex_title,
        "』급에서 높은 점수를 내면 경품을 받을 수 있는데——",
      ]);
      await jordan.say_and_wait(
        "전에 와서 몇 번이나 쳤는데, 높은 점수는커녕 숫자가 아예 안 움직이더라고——분명 고장 난 거야!",
      );
      await acute.say_and_wait("……『펀치 머신』?");
      await acute.print_and_wait([
        "자기 뺨을 어루만지며 ",
        acute.get_colored_name(),
        "은(는) 처음 보는 기계를 바라본다.",
      ]);
      await jordan.say_and_wait("완전 최악…… 경품인 네일 세트 갖고 싶었는데.");
      await acute.say_and_wait(
        "어머나…… 그런 일이었구나. 그래서 그렇게 분했구먼. 그렇구나, 그렇구나——",
      );
      await acute.say_and_wait([
        call_48,
        ", 한 번 더 해 보겠니? 옆에서 봐 주마~",
      ]);
      await jordan.say_and_wait("오케이, 이번엔 진심으로 간다. 좀 떨어져 있어.");
      await jordan.say_and_wait("간다——");
      await acute.print_and_wait("╲! 쾅~! ╱");
      await jordan.say_and_wait(
        "——후우, 봐! 다 쳤는데 순위가 그대로야. 딱 봐도 고장 났잖아.",
      );
      await acute.say_and_wait("음…… 그렇구나.");
      await era.printAndWait([
        "옆에 있던 ",
        acute.get_colored_name(),
        "은(는) 조금 요령을 알아챈 듯하다.",
      ]);
      await acute.say_and_wait([
        "그럼, 내가 말하는 대로 한 번 더 해 보렴.",
        call_48,
        '。',
      ]);
      await acute.say_and_wait(
        "우선 엄지를 주먹 안에 넣지 말렴. 아까처럼 자기도 모르게 손톱을 감싸다 보면 힘이 들어가지 않는단다.",
      );
      await acute.say_and_wait(
        "다음은 발의 위치야. 주먹을 내지를 때는 반대쪽 발을 앞으로 내밀고, 몸을 옆으로——",
      );
      await jordan.say_and_wait("어, 어라?…… 이렇게?");
      await acute.say_and_wait(
        "그래, 그래…… 그다음 무릎에 힘을 빼고 겨드랑이를 조이렴. 주먹을 내지를 때 팔과 어깨는 수평으로. 하체의 무게중심에 주의해서 【황금장방형】을 만들고, 그다음은——",
      );
      await acute.say_and_wait("그다음은 온 힘을 다해 쳐라!…… 해 보겠니?");
      await jordan.say_and_wait([
        "어? 응…… 이렇게?…… 정말 괜찮아, ",
        j_call_a,
        '？',
      ]);
      await acute.say_and_wait([
        "날 믿으렴, ",
        call_48,
        ". 황금장방형 자세만 잡으면 반드시 할 수 있단다.",
      ]);
      await jordan.say_and_wait("으음…… 그렇게까지 말한다면…… 간다——");
      await era.printAndWait("╲!!! 쾅~!!! ╱");
      await era.printAndWait("*~띵~*");
      await era.printAndWait("*~경품을 획득했습니다~*");
      await jordan.say_and_wait("어!? 말도 안 돼, 진짜 경품이 나왔어?");
      await jordan.say_and_wait([
        j_call_a,
        "이(가) 말한 대로 자세만 고쳤는데…… 게다가 지금 팔이 저릿저릿해——",
      ]);
      await jordan.say_and_wait([j_call_a, ", 완전 대박이야!"]);
      await acute.say_and_wait(
        "후후…… 복싱에는 아·주·조·금 경험이 있어서 그런 걸까.",
      );
      await acute.say_and_wait(
        "예전에 주먹을 휘두르던 시절에는 『오른쪽 스트레이트의 꼬마 어큐트』라고 불렸단다?",
      );
      await acute.say_and_wait(
        "뭐…… 남○ 사천왕을 쓰러뜨린 뒤에는 『전설』이라고 불렸지만 말이야.",
        true,
      );
      await jordan.say_and_wait([
        "에———! 그럼 ",
        j_call_a,
        "이(가) 하면 경품을 더 많이 따겠네?",
      ]);
      await acute.say_and_wait("아하하…… 그건——");
      await acute.print_and_wait("……솔직히 말하면, 해 보고 싶지는 않았다.");
      await acute.print_and_wait(
        "주먹을 휘두르지 않은 지 벌써 여러 해. 한창때의 경지에는 이미 한참 못 미친다.",
      );
      await acute.print_and_wait(
        "이 기계로 측정해 봐야 결과가 어떻든, 예전의 감각이 돌아오지 않는다는 아쉬움만 남을 것이다.",
      );
      await acute.print_and_wait(
        "손을 내밀어 거절하려 했다——그때, 벽의 경품 목록이 눈에 들어왔다.",
      );
      await acute.say_and_wait(
        "으음…… 삼 등, 초콜릿 무스 특대 케이크?",
        true,
      );
      await acute.say_and_wait(
        ["그러고 보니, 곧 발렌타인이구나.", callname, " 쪽은——"],
        true,
      );
      await acute.say_and_wait('…………');
      await acute.say_and_wait([
        "응, 알겠단다. 그럼 해 보자꾸나.",
        call_48,
        ", 조금 뒤로 물러나 있으렴?",
      ]);
      await acute.print_and_wait([
        "거절하려던 오른손이 주먹으로 바뀐다.",
        acute.get_colored_name(),
        "의 각오가 그 안에 담긴다.",
      ]);
      await jordan.say_and_wait("좋았어!");
      await acute.say_and_wait("으음…… 예전의 감각을 떠올려 보자.", true);
      await acute.say_and_wait(
        "기억해 내자…… 이집트에서 ○오와 싸울 때, 눈이 가려진 채 휘둘렀던 그 일격——",
        true,
      );
      await acute.say_and_wait(
        "받침점, 힘점, 작용점…… 받침점, 힘점, 작용점——핫!!!",
      );
      await era.printAndWait("╲╲╲!!!!!!!! 쾅!!!!!!!! ╱╱╱");
      await acute.print_and_wait([
        acute.get_colored_name(),
        "의 일격과 함께 어디선가 거대한 먼지구름이 사방으로 피어올랐다.",
      ]);
      await era.printAndWait("*~띵~*");
      await era.printAndWait(
        "*~고장, 고장, 고장——즉시 직원에게 연락해 주세요~*",
      );
      await acute.say_and_wait(
        "어머…… 어머나? 기계를 망가뜨린 걸까……",
      );
      await acute.say_and_wait(
        "오랫동안 치지 않았더니 역시 손이 둔해졌구나——",
      );
      await jordan.say_and_wait("………………거짓말이지.");
      await acute.print_and_wait([
        jordan.get_colored_name(),
        "은(는) 눈이 휘둥그레진 채, 단 한 방에 완전히 뒤틀린 기계를 뚫어지게 바라본다.",
      ]);
      await acute.print_and_wait(
        "머지않아 이 도시의 지하 권투계에 새로운 전설이 태어난다——",
      );
      era.drawLine();
      await acute.print_and_wait([
        "그날 밤, 오락실의 일 등 상품인 삼천 우마 코인을 마다한 ",
        acute.get_colored_name(),
        "은(는) 초콜릿 무스 특대 케이크를 안고 트레이너실로 찾아왔다.",
      ]);
      await acute.print_and_wait(
        "케이크를 코타츠 위에 놓고, 옆의 선물 상자에 숨어 일부러 불을 껐다.",
      );
      await acute.say_and_wait(
        [
          "듣자 하니 ",
          call_48,
          " 말로는 젊은 사람들이 좋아하는 깜짝 이벤트라던데…… 이런 걸까?",
        ],
        true,
      );
      await acute.say_and_wait(
        [
          "그걸 위해 ",
          call_48,
          "이(가) 입던…… 승부복?까지 빌렸다.",
          callname,
          "이(가) 돌아오면 튀어나가서, 깜짝 놀라게 하고……",
        ],
        true,
      );
      await acute.say_and_wait(
        "에헤헤…… 생각해 보니 나답지 않은 일을 하고 있구나.",
        true,
      );
      await acute.print_and_wait([
        "왜 ",
        callname,
        "에게 이런 발렌타인 깜짝 이벤트를 해 주는지, 솔직히 ",
        acute.get_colored_name(),
        " 자신도 모르겠다.",
      ]);
      await acute.print_and_wait([
        "펀치 머신의 경품 목록에서 초콜릿 무스 특대 케이크를 본 순간, 머릿속에 ",
        callname,
        "을(를) 깜짝 놀라게 하는 광경이 떠올랐을 뿐이다.",
      ]);
      await acute.print_and_wait([
        "처음 옥상에서 몰래 울던 ",
        callname,
        "을(를) 보았을 때는 이성에게 차여 혼자 우는 아이인 줄 알았다.",
      ]);
      await acute.print_and_wait([
        "그랬는데 정신을 차려 보니, ",
        callname,
        "의 담당 ",
        acute.uma_sex_title,
        "가 된 지도 벌써 일 년이다.",
      ]);
      await acute.say_and_wait(
        "……일 년이라. 세월 참 빠르구나.",
        true,
      );
      await acute.say_and_wait(
        [
          "트레센 학원의 경주 ",
          acute.uma_sex_title,
          "로 지내면 지루한 트레이닝만 할 줄 알았는데…… 의외로 나쁘지 않구나.",
        ],
        true,
      );
      await acute.print_and_wait([
        "눈을 감으면 머릿속에 ",
        callname,
        "의 모습이 떠오른다.",
      ]);
      await acute.print_and_wait(
        "겁이 많고, 운이 없고, 일희일비하고, 어딘가 어린애 같다.",
      );
      await acute.print_and_wait(
        "그래도 다정하고, 착하고, 행동력도 있고, 뜻밖에 원칙도 있다.",
      );
      await acute.print_and_wait("자신은 그런 사람과 일 년을 보냈다.");
      await acute.print_and_wait("앞으로도 아직 이 년이 남아 있다……");
      await acute.print_and_wait(
        "앞으로의 이 년도 함께 보낸 이 일 년처럼 눈 깜짝할 사이에 지나갈까.",
      );
      await acute.say_and_wait('…………');
      await acute.print_and_wait("어째서인지 거기까지 생각하니 조금 초조해진다.");
      await acute.print_and_wait(
        "고개를 저으며 스스로에게 말한다——「아직 이 년이나 남았어. 조급해할 것 없어」.",
      );
      await acute.print_and_wait([
        callname,
        "이(가) 돌아올 때까지 기다리자——돌아오면 커다란 깜짝 선물을——",
      ]);
      await acute.say_and_wait("그런데——");
      await acute.say_and_wait('——……');
      await acute.say_and_wait('……');
      await acute.print_and_wait("말이 입술까지 맴돌다가 나오지 않는다.");
      await acute.print_and_wait([
        "이 초조함의 정체를 알 수 없는 ",
        acute.get_colored_name(),
        "은(는) 어두운 코타츠 안에서 몸을 웅크렸다.",
      ]);
      await acute.print_and_wait(
        "자신에게만 들리는 가슴의 두근거림이 계속된다.",
      );
      await acute.print_and_wait('………………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('……');
      await acute.print_and_wait([
        "오늘 ",
        callname,
        "은(는) 유난히 늦게 돌아온다.",
      ]);
      era.drawLine({ content: "트레센 밖 · 파출소" });
      era.printButton(
        `「경찰관님, 믿어 주세요. 담당 ${acute.uma_sex_title}가 걱정돼서 뒤를 따라갔을 뿐이에요. 미행하는 변태가 아니라고요!」`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait("경찰관", [
        "발뺌하지 마! 요즘 변태들은 인기 있는 경주 ",
        acute.uma_sex_title,
        "에게 망상을 품으면서 겉으로는 트레센 트레이너라고 자처하지. 이번 주에만 자칭 트레이너 여덟 명, 자칭 교사 세 명, 자칭 의학박사 한 명이 미행하다 잡혔어.",
      ]);
      era.printButton(
        "「저는 그 사람들과 다르다고요! 번듯한 직업도 있고, 훌륭한 꿈도 있어요——」",
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        "경찰관",
        "그래서 뭐? 옆방에도 섣달그믐 거리에 꿈을 날리는 지사라고 우기는 놈이 둘이나 있어. 실상은 무허가로 불꽃놀이 용품을 팔던 노점상인데?",
      );
      era.printButton(
        "「경찰관님, 정말 아니에요——됐어요, 다르게 말할게요. 제발 풀어 주세요. 사실——저, 메지로 가문에 연줄이 있어요.」",
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        "경찰관",
        "뭐? 협박하는 거야? 지금까지 누구에게도 협박받고 산 적 없어——안 무섭다고! 메지로 가문에 연줄이 있다고? 말해 두겠는데, 이 파출소는——메지로 가문이 운영하거든!",
      );
      era.printButton(
        "「……네? 메지로 가문이 파출소까지 진출했어? 으아, 누구든 좋으니까 꺼내 줘! 억울하다고!!!」",
        1,
      );
      await era.input();
      era.drawLine();

      await era.printAndWait([
        "그 뒤 ",
        minoru.get_colored_name(),
        "이(가) 순찰 중 근처 파출소를 지나다 ",
        you.get_colored_name(),
        "의 구조 요청을 듣고서야 데리고 나와 주었다.",
      ]);
      await era.printAndWait([
        '「',
        acute.uma_sex_title,
        " 미행」으로 잡혀 왔다는 사실을 알고는, ",
        minoru.get_colored_name(),
        "에게 매서운 눈총을 받았다.",
      ]);
      await era.printAndWait([
        "돌아오는 길에 필사적으로 미행하는 변태가 아니라고 설명하고, 성의를 보이려 ",
        acute.sex,
        "를 자기 휴게실에 야식 먹으러 초대했다.",
      ]);
      await era.printAndWait([
        "그런데 방에는 거대한 초콜릿 무스 케이크와, 어째서인지 노출이 많은 산타복, 아니 승부복 차림으로 거대한 선물 상자 안에서 잠든 ",
        acute.get_colored_name(),
        "이(가) 있었다.",
      ]);
      await minoru.say_and_wait('………………');
      era.printButton('「………………」', 1);
      await era.input();
      era.printButton("「제가 먼저 한 게 아니라면 믿으실래요?」", 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        "그 뒤 전신마취를 당하고 정원에 거꾸로 박혔다.",
      );
      await era.printAndWait("벌로 석 달 치 월급을 떼이고서야 일단락되었다.");
      await era.printAndWait([
        "그 뒤로 ",
        taste.get_colored_name(),
        '、',
        minoru.get_colored_name(),
        '、',
        acute.get_colored_name(),
        "이(가) ",
        you.get_colored_name(),
        "을(를) 보는 눈빛이 조금 달라졌다.",
      ]);
      await era.printAndWait("좋은 변화이기를 빈다…… 하하. (하늘을 본다)");
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = "새봄의 선물";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        "삼 년째 맞는 설날도 ",
        acute.get_colored_name(),
        "과(와) 트레이너실에서 보내고 있다.",
      ]);
      await acute.say_and_wait([
        "새해 복 많이 받으렴, ",
        callname,
        "~ 떡을 많이 구웠단다. 같이 먹으련?",
      ]);
      await era.printAndWait([
        "주방에서 쟁반을 들고 익숙한 걸음으로 나온 ",
        acute.get_colored_name(),
        "은(는) ",
        you.get_colored_name(),
        "보다 이 트레이너실의 주인처럼 보인다.",
      ]);
      await era.printAndWait([
        "쟁반을 안은 ",
        acute.get_colored_name(),
        "과(와) 대조되는 것은, 휴일이 시작된 뒤 코타츠와 한 몸이 된 게으른 자신이다.",
      ]);
      await era.printAndWait([
        "……미리 말해 두겠다.",
        you.get_colored_name(),
        "은(는) 농땡이를 피우는 게 아니다. 쉬는 시간을 알뜰하게 쓰고 있을 뿐이다.",
      ]);
      await era.printAndWait([
        "평소에는 트레이닝과 경주장 답사로 일정이 가득 차 있다. 드물게 생기는 자유 시간도 대부분 ",
        acute.get_colored_name(),
        "과(와) 함께 움직인다.",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 지내는 것 자체가 피곤하지는 않다…… 그래도 소중한 휴식 시간이 줄어드는 건 사실이다.",
      ]);
      await era.printAndWait([
        "평일에는 야간 트레이닝을 마치고 돌아오면 침대에 쓰러져 잠든다. 다음 날 아침 눈을 뜨자마자 다시 ",
        acute.get_colored_name(),
        "과(와) 트레이닝. 끝이 보이지 않는 나날이다.",
      ]);
      await era.printAndWait(
        "일주일에 한 번뿐인 휴일에도 세탁기에 산처럼 쌓인 냄새나는 빨랫감과 아무리 해도 끝나지 않는 휴게실 집안일을 보면, 하늘에 떠 있을 시간이 네 시간밖에 남지 않은 해와 함께 기분도 가라앉는다.",
      );
      await era.printAndWait([
        "솔직히 ",
        acute.get_colored_name(),
        "이(가) 세 끼를 챙겨 주지 않았다면 밥 먹는 법마저 잊었을 것 같다……",
      ]);
      await acute.say_and_wait([callname, ", 입 벌리렴. 아~~~"]);
      era.printButton("「아——앙.」", 1);
      await era.input();
      await era.printAndWait([
        acute.get_colored_name(),
        "이(가) 내민 구운 떡을 한입 베어 물자 뜨겁고 달콤한 맛이 입안에 퍼진다.",
      ]);
      await acute.say_and_wait([
        "음음~ 잘했구나, ",
        callname,
        "——이제부터는 스스로 먹으렴?",
      ]);
      await era.printAndWait([
        "어리광을 받아 주는 표정으로 ",
        acute.get_colored_name(),
        "은(는) 떡이 담긴 그릇과 젓가락을 이쪽으로 건넨다.",
      ]);
      await era.printAndWait(
        "그러고는 일어나 즐겁게 콧노래를 흥얼거리며 베란다로 향한다——",
      );
      await acute.say_and_wait("다음은 빨래란다~ 빨래~~~");
      await era.printAndWait('………………');
      await era.printAndWait("어째서인지 양심이 찔린다.");
      await era.printAndWait([
        "담당 ",
        acute.uma_sex_title,
        "에게 청소도 빨래도 식사도 맡겨 두고, 자기는 코타츠에서 농담이나 하다니……",
      ]);
      await era.printAndWait("……이거, 상당히 꼴사납지 않나.");
      await era.printAndWait("아니, 너무 꼴사납다.");
      await era.printAndWait("뭐라도 해야겠다——");
      era.println();
      era.printButton("「주방 일을 돕자!」 (모든 능력치 +5)", 1);
      era.printButton("「내 옷은 내가 빨자!」 (스킬 Pt +35)", 2);
      era.printButton(`「${acute.name}의 어깨를 주물러 주자!」 (스태미나 +30)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            "늘어져 지내는 행복은 각별하지만, 거기에 빠져만 있을 수는 없다.",
          );
          await era.printAndWait("——좋아, 정했어!");
          await era.printAndWait("일어나 가슴을 펴고 주방으로 향한다.");
          await era.printAndWait(
            "적어도 올해 저녁 식사와 설날 반찬은 직접 만들자.",
          );
          await era.printAndWait("우선 얼어 있는 만두부터 녹이고……");
          await era.printAndWait('………………');
          break;
        case 2:
          await era.printAndWait([
            "아무리 그래도 집안일을 전부 ",
            acute.get_colored_name(),
            " 혼자에게 맡길 수는 없다.",
          ]);
          await era.printAndWait("일어나 가슴을 펴고 베란다로 향한다.");
          await acute.say_and_wait("킁————");
          await era.printAndWait("…………응?");
          await era.printAndWait([
            "뜻하지 않게 ",
            acute.get_colored_name(),
            "이(가) 어제 막 벗어 놓은 셔츠 냄새를 맡는 모습을 보고 말았다.",
          ]);
          era.printButton(`「저기…… ${acute.name}？」`, 1);
          await era.input();
          await acute.say_and_wait(["어머…… ", callname, "이었구나~"]);
          await era.printAndWait([
            "아무 일도 없다는 듯 ",
            acute.get_colored_name(),
            "은(는) 코에 대고 있던 셔츠를 내린다.",
          ]);
          await acute.say_and_wait(["무슨 일이니, ", callname, '？']);
          era.printButton("「그…… 내 셔츠가 왜?」", 1);
          await era.input();
          await acute.say_and_wait([
            "아아…… 이거 말이니. 그냥 문득 생각이 나서 맡아 본 것뿐이란다——남자 냄새가 나는구나, ",
            callname,
            '。',
          ]);
          era.printButton('「………………」', 1);
          await era.input();
          await era.printAndWait('…………');
          await era.printAndWait([
            "일단 ",
            acute.get_colored_name(),
            "을(를) 베란다 밖으로 내보냈다.",
          ]);
          await era.printAndWait([
            "세탁기 안에서 옷이 빙글빙글 돈다. 아까 ",
            acute.get_colored_name(),
            "이(가) 셔츠 냄새를 맡던 모습을 떠올리니 어째서인지 가슴이 술렁인다.",
          ]);
          await era.printAndWait('………………');
          await era.printAndWait("방에 돌아가는 건 조금 뒤로 미루자.");
          break;
        case 3:
          await era.printAndWait([
            acute.get_colored_name(),
            "이(가) 빨래를 마치고 방으로 돌아오자, 일단 코타츠로 안내했다.",
          ]);
          await acute.say_and_wait([
            "으음? 무슨 일이니, ",
            callname,
            '？',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            "은(는) 고개를 들어 뒤에 서 있는 이쪽을 의아하게 바라본다.",
          ]);
          await era.printAndWait([
            "그때, ",
            you.get_colored_name(),
            "의 죄 많은 두 손이 ",
            acute.get_colored_name(),
            "의 몸을 향해 뻗는다——",
          ]);
          await era.printAndWait("——살며시 주무른다.");
          await acute.say_and_wait("앗?❤️");
          await era.printAndWait([
            "작은 손으로 부드럽게 주무르자, ",
            acute.get_colored_name(),
            "의 꼬리가 순식간에 꼿꼿이 선다.",
          ]);
          await era.printAndWait([
            "……그렇군, 여기가 ",
            acute.get_colored_name(),
            "의 약점인가.",
          ]);
          await acute.say_and_wait(["그, 그건❤️……", callname, "……이건 뭐니?"]);
          era.printButton(
            `「가만히 있어, ${acute.name}. 계속 바빴으니까 마사지해 줄게.」`,
            1,
          );
          await era.input();
          await acute.say_and_wait("하, 하지만 거기는……앗❤️~");
          await era.printAndWait([
            "조금 세게 주무르자 봐 달라는 듯한 목소리가 ",
            acute.get_colored_name(),
            "의 입에서 새어 나온다.",
          ]);
          await era.printAndWait([
            "힘을 줄 때마다 ",
            acute.get_colored_name(),
            "은(는) 자기도 모르게 짧은 소리를 낸다.",
          ]);
          await era.printAndWait("어째서인지 묘한 흥분과 배덕감이 느껴진다.");
          await era.printAndWait([
            "그렇게 단둘뿐인 휴게실에서 ",
            acute.get_colored_name(),
            "에게 마음껏 마사지를 해 주었다.",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = "권투인의 날 · 특대호 추가 초대용량 겹겹이 무적 연소판";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_19 ワンダーアキュートのアグネスデジタルへの呼び方
     * @param {PrintedSpan} call_48 ワンダーアキュートのトーセンジョーダンへの呼び方
     * @param {PrintedSpan} call_49 ワンダーアキュートのナカヤマフェスタへの呼び方
     * @param {PrintedSpan} d_call_a アグネスデジタルのワンダーアキュートへの呼び方
     * @param {PrintedSpan} j_call_a トーセンジョーダンのワンダーアキュートへの呼び方
     * @param {PrintedSpan} callname_49 ナカヤマフェスタのプレイヤーへの呼び方
     * @param {PrintedSpan} f_call_a ナカヤマフェスタのワンダーアキュートへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     */
    const f = async (
      acute,
      digital,
      jordan,
      festa,
      minoru,
      you,
      callname,
      call_19,
      call_48,
      call_49,
      d_call_a,
      j_call_a,
      callname_49,
      f_call_a,
      y_call_m,
    ) => {
      await era.printAndWait([
        "봄이 가고 가을이 오더니, 올해는 ",
        acute.get_colored_name(),
        "과(와) 만난 지 삼 년째가 된다.",
      ]);
      await era.printAndWait(
        "겨울눈은 녹았고 봄기운은 아직 남아 있다. 손가락을 꼽아 날짜를 세어 보니 발렌타인이 또 코앞이다.",
      );
      await era.printAndWait([
        "지난해의 헛발질과 꿈을 날려 보낸 일을 겪으며, 올해 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "은(는) 저마다 성장했다.",
      ]);
      await era.printAndWait([
        "그렇기에 발렌타인 당일 저녁, 평소의 트레이닝을 마친 뒤 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "은(는) 익숙한 발걸음으로 자신의 휴게실을 향했다.",
      ]);
      await era.printAndWait(
        "전원을 켜고 나란히 앉아 각자 코타츠에 발을 넣는다——",
      );
      era.printButton("「우와~~~❤️」", 1);
      await era.input();
      await acute.say_and_wait("아하하~ 따뜻하구나❤️");
      await era.printAndWait([
        "서로의 존재에 익숙해진 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "은(는) 코타츠 앞에 바짝 붙어 앉았다.",
      ]);
      era.printButton(
        "「이번 주가 끝나면 코타츠를 치워야 한다고 생각하니…… 아쉽네.」",
        1,
      );
      await era.input();
      await acute.say_and_wait(
        "후후후…… 이제 곧 기온이 오를 테니까. 안 치우면 땀띠가 난단다?",
      );
      era.printButton("「에—— 좀 더 늦게 치우면 안 돼?」", 1);
      await era.input();
      await acute.say_and_wait([
        "안 된단다? ",
        callname,
        "이(가) 코타츠 폐인이 되면 나까지 함께 늘어질 테니까~",
      ]);
      era.printButton("「으음…… 자기를 방패로 쓰는 건 반칙 아니야?」", 1);
      await era.input();
      await acute.say_and_wait([
        "호호호…… ",
        callname,
        ", 내 근성 없음을 원망하지는 말렴——",
      ]);
      era.printButton("「작년에는 안에서 잠들었으면서……」", 1);
      await era.input();
      await acute.say_and_wait("어머나…… 안 들리는구나?");
      await era.printAndWait(
        "눈이 아직 남아 있는 계절, 트레이닝을 마치고 휴게실로 돌아온 두 사람은 코타츠 안에서 농담을 주고받으며 땀을 식히지도 못하고 있다.",
      );
      await acute.say_and_wait("음…… 그래도 목욕부터 해야겠구나.");
      await era.printAndWait([
        "그렇게 말하며 ",
        acute.get_colored_name(),
        "은(는) 코타츠에서 빠져나와 일어난다.",
      ]);
      await acute.say_and_wait([
        "먼저 물을 데워 놓으마, ",
        callname,
        ". 다 데워지면 얼른 씻으렴?",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "에게 요즘 기술이면 목욕물을 굳이 데울 필요가 없다고 말해 주고 싶다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        acute.get_colored_name(),
        "은(는) 그런 표현을 좋아하는 듯하다——굳이 바로잡을 필요는 없겠지.",
      ]);
      era.printButton("「알았어——다녀와~」", 1);
      await era.input();
      await acute.say_and_wait(
        "그리고——초콜릿은 냉장고에 넣어 두었단다. 먹으렴?",
      );
      era.printButton("「알았어, 알았어~ 맡겨 둬.」", 1);
      await era.input();
      await era.printAndWait(
        "건성으로 손을 흔든다. 품위 있는 모습은 아니지만, 편안한 상대 앞에서는 가장 늘어진 모습이 나오는 법이다.",
      );
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 천천히 욕실로 가서 문을 닫았다. 달칵 소리가 난다.",
      ]);
      await era.printAndWait("코타츠 앞에 앉아 있으려니 시선이 자꾸 욕실로 향한다——");
      await era.printAndWait("【달칵, 달칵——】");
      await era.printAndWait("【쏴아아아——】");
      await era.printAndWait("틈새로 물소리가 새어 나온다……");
      await you.say_and_wait('…………', true);
      era.printButton("(정말이지, 너무 방심하는 거 아냐.)", 1);
      await era.input();
      await era.printAndWait("살짝……들여다볼까?");
      await era.printAndWait(
        "힘겹게 코타츠에서 기어 나와, 배를 깔고 엎드린 채 못된 일을 하러 향한다.",
      );
      await era.printAndWait(
        "거실을 가로질러 복도를 기어가, 맞은편 욕실 앞까지 다다른다.",
      );
      await era.printAndWait(
        "눈앞의 틈새로 물방울 떨어지는 소리가 들린다. 살짝 밀기만 하면 봉우리의 자태를 볼 수 있다.",
      );
      await you.say_and_wait("물론, 이건 변태 짓이 아니다.", true);
      await you.say_and_wait(
        ["그저 ", acute.get_colored_name(), "의 목욕에는 삼십 분이 걸릴 뿐이다."],
        true,
      );
      await you.say_and_wait("삼십 분을 기다려야 한다면 얌전히 기다리는 수밖에.", true);
      await you.say_and_wait(
        [
          "하지만 어차피 삼십 분을 기다릴 거라면, 왜 ",
          acute.get_colored_name(),
          "이(가) 있는 욕실 앞에서 기다리면 안 되는 걸까.",
        ],
        true,
      );
      await you.say_and_wait(
        "문이 닫히지 않았길래 닫아 주려다가, 실수로 안이 보이고 말았다——그 정도면 합리적이지 않은가~",
        true,
      );
      await you.say_and_wait("오오———!", true);
      await era.printAndWait("선경에 구름과 안개가 감돈다.");
      await era.printAndWait(
        "하늘에서 은하수가 쏟아져 두 봉우리를 타고 흐르고, 잔잔한 호수를 넘어 옅은 풀숲으로 스며들었다가, 마침내 큰 강으로 돌아간다.",
      );
      await era.printAndWait(
        "예부터 어진 이는 산을 좋아한다고 했다. 흰 골짜기와 옥빛 봉우리, 흰 안개가 구름을 건넌다. 애쓴 자만이 정상에 오를 수 있다.",
      );
      await era.printAndWait(
        "지혜로운 이는 물을 좋아한다고 했다. 회색 머리칼 아래로 은빛 물줄기가 흐르고, 떨어지는 옥구슬은 진수가 된다. 인연 있는 자만이 맛볼 수 있다.",
      );
      await era.printAndWait(
        "이 신선의 풍경은 몰래 엿보는 자만의 것. 눈높이에서 보아도 충분하지만, 올려다보면 더욱 좋다. 그저 '좋다'는 한마디로는 부족하다.",
      );
      await you.say_and_wait("최고다~~~~!", true);
      era.printButton("(그럼 조금만 더, 조금만 더 가까이……)", 1);
      await era.input();
      await era.printAndWait(
        "그런데 그때, 덜컥 하며 휴게실 현관문이 열린다——",
      );
      await minoru.say_and_wait([
        you.actual_name,
        ", 계세요? 짐이 도착했는데요……",
      ]);
      await era.printAndWait([
        "현관에서 욕실 앞에 엎드린 모습이 ",
        minoru.get_colored_name(),
        "에게 훤히 보이고 만다.",
      ]);
      await minoru.say_and_wait('………………');
      await era.printAndWait("쏴아아아~");
      await era.printAndWait("쏴아아아~");
      era.printButton('「………………」', 1);
      await era.input();
      await you.say_and_wait(["잠깐만요, ", y_call_m, ", 설명할게요."]);
      await you.say_and_wait("그러니까, 사실 이건……");
      await you.say_and_wait("벽에 구멍을 뚫고 엿보——");
      await era.printAndWait("【짝!!!!!】");
      await era.printAndWait("맑고 마른 소리가 트레센 전체에 울려 퍼진다——");
      era.drawLine();
      await era.printAndWait([
        "삼십 분 뒤, 목욕 가운을 걸친 ",
        acute.get_colored_name(),
        "이(가) 천천히 욕실에서 나온다.",
      ]);
      await acute.say_and_wait([
        "어머나…… ",
        callname,
        ", 거실에서 삼십 분이나 기다려 준 게니? 기특하구나——",
      ]);
      await acute.say_and_wait("그런데…… 오른쪽 뺨의 이 붉은 자국은 뭐니?");
      era.printButton("「……모기에 물렸어.」", 1);
      await era.input();
      await acute.say_and_wait("코에 든 푸른 멍은?");
      era.printButton("「……큰 모기에 물렸어.」", 1);
      await era.input();
      await acute.say_and_wait("정수리의 이 적갈색 액체는……?");
      era.printButton("「……특대 모기에 물렸어.」", 1);
      await era.input();
      await acute.say_and_wait(
        "어머…… 이 계절에도 그렇게 큰 모기가 있구나——",
      );
      await era.printAndWait([
        "생각에 잠긴 ",
        acute.get_colored_name(),
        "은(는) 느긋하게 냉장고로 걸어가 무언가 꺼낸다.",
      ]);
      await acute.say_and_wait(
        "그럼…… 오늘도 말을 잘 듣고, 열심히 하고, 착하게 지낸 트레이너에게. 자, 어제 만든 초콜릿이란다.",
      );
      era.printButton("「……그 말을 하기 전에 옷 좀 입어 줄래?」", 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "에게 목욕 가운을 감상할 여유가 없는 것은 아니다. 다만 조금 전 ",
        minoru.get_colored_name(),
        "에게 '알몸을 한 번 더 보면 칠공에서 피를 뿜고 폭사하는' 혈도를 짚였을 뿐이다.",
      ]);
      await era.printAndWait([
        "목숨을 위해서라도 ",
        acute.get_colored_name(),
        "에게 얼른 옷을 갈아입어 달라고 하는 게 좋겠다——",
      ]);
      await acute.say_and_wait(
        "연말 선물이냐고? 아니란다, 오늘은 발렌타인이잖니? 초콜릿을 서로 선물하는 날이지……",
      );
      era.printButton(
        "「아니…… 왜 갑자기 미연시처럼 이야기가 흘러가? 게다가 여주인공이 목욕 가운 차림으로 발렌타인 초콜릿을 주는 전개도 있어?」",
        1,
      );
      await era.input();
      await acute.say_and_wait(
        "으음? 왜 그러니, 초콜릿을 싫어하니? 여기 젤리 선물 세트도 있는데……",
      );
      era.printButton("「으음…… 싫은 건 아닌데——」", 1);
      await era.input();
      await era.printAndWait("……젠장, 이건 그냥 유혹이잖아.");
      await era.printAndWait(
        "트레이너실에서 목욕하고, 목욕 가운 차림으로 트레이너 앞을 돌아다닌다. 이건 완전히 '유혹'이잖아.",
      );
      await era.printAndWait([
        "아니면 '그거'인가. 하고 싶다는 것과 동의한다는 건 다르다는, '그거'……",
      ]);
      await era.printAndWait([
        "젠장……그 순간 망설이지만 않았어도 ",
        minoru.get_colored_name(),
        "에게 혈도를 짚이지 않고, ",
        you.get_colored_name(),
        "은(는) 지금 당장 붉은 형태로 변신해 무한의 전신을 소환했을 텐데……",
      ]);
      await era.printAndWait('…………');
      await era.printAndWait("뭐, 됐다. 잡념은 여기까지만 하자.");
      era.printButton("「사실…… 나도 주고 싶은 게 있어.」", 1);
      await era.input();
      await acute.say_and_wait("으음?");
      await you.say_and_wait(
        "작년 발렌타인에도 네게 초콜릿을 받았잖아. 뭐, 깜짝 놀라게 하는 방식이기는 했지만……",
      );
      await you.say_and_wait(
        "원래는 작년 화이트데이에 답례하려고 했어——뭘 줘야 할지 계속 모르겠더라고.",
      );
      await you.say_and_wait(
        "초콜릿으로 답례할까 생각도 했는데…… 넌 단 걸 잘 못 먹잖아. 다른 선물을 주자니 그날과는 안 어울리는 것 같고……",
      );
      await you.say_and_wait(
        "그러다 작년에는 미루게 됐고, 레이스 일정도 바빠서 답례가 늦어졌어……",
      );
      await you.say_and_wait([
        "그래서 올해는 미리 준비했지——해피 발렌타인, ",
        acute.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        "그렇게 말하며 ",
        you.get_colored_name(),
        "은(는) 커튼 뒤에 숨겨 두었던 꽃다발을 꺼내 ",
        acute.get_colored_name(),
        "에게 건넸다.",
      ]);
      await acute.say_and_wait("아……");
      await you.say_and_wait([
        "아하하…… 조던이 조언해 줬어. 발렌타인에는 조금 안 어울리지만…… 어때, 마음에 들어?",
      ]);
      await acute.say_and_wait('……');
      era.printButton(`「……${acute.name}？」`, 1);
      await era.input();
      await acute.say_and_wait('……');
      await era.printAndWait([
        "어째서인지 꽃다발을 안은 ",
        acute.get_colored_name(),
        "은(는) 그 자리에서 굳어 버렸다.",
      ]);
      await era.printAndWait(
        "아무리 말을 걸어도 별다른 반응이 없다. 삼십 초쯤 기다리자——",
      );
      await acute.say_and_wait("으…… 와…… 아…… 아아아아아!!!");
      await acute.say_and_wait("큰일, 큰일이란다!!!!");
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 꽃다발을 안은 채 휴게실을 뛰쳐나갔다.",
      ]);
      await era.printAndWait("……물론 목욕 가운 차림 그대로.");
      era.drawLine({ content: "교사" });
      await acute.say_and_wait([
        call_48,
        '、',
        call_48,
        ", 큰일이란다!~",
      ]);
      await jordan.say_and_wait([
        "왜 그래, ",
        j_call_a,
        "——우와, 왜 유카타…… 아니, 목욕 가운을 입고 있어!?",
      ]);
      era.drawLine({ content: "중정" });
      await acute.say_and_wait([
        call_49,
        '、',
        call_49,
        ", 큰일이란다!~",
      ]);
      await festa.say_and_wait([
        "목욕 가운?…… 그 꽃다발은 내가 ",
        callname_49,
        "에게 ",
        f_call_a,
        "한테 줄 발렌타인 선물로 추천한 건데…… 그렇군. 전설의 권법가는 곧 은퇴하겠군——",
      ]);
      era.drawLine({ content: "트레센 학원 · 복도" });
      await acute.say_and_wait([
        call_19,
        '、',
        call_19,
        ", 큰일이란다!~",
      ]);
      await digital.say_and_wait([
        "에에엣!? 목욕 가운 차림으로 복도를 뛰어다니는 ",
        d_call_a,
        "!? 이것도 존귀해! 그런데 이 광경, 설마!?",
      ]);
      era.drawLine({ content: "옥상" });
      await era.printAndWait(
        "너덜너덜한 몸을 끌고, 겨우 옥상에서 목욕 가운 차림의 뒷모습을 따라잡았다.",
      );
      await acute.say_and_wait([
        callname[0],
        '……',
        callname,
        ", 나, 나는…… 어떻게 해야 할까. 조금, 어쩔 줄을 모르겠구나.",
      ]);
      era.printButton("「일단…… 휴게실로 돌아가서 옷부터 입을까?」", 1);
      await era.input();
      await acute.say_and_wait(["에헤헤…… 미안하구나, ", callname, '。']);
      await acute.say_and_wait(
        "그저 이렇게 예쁜 꽃을 받고 나니 가슴속까지 따뜻해져서…… 아, 아, 아아아……",
      );
      era.printButton(
        "「그래도 목욕 가운 차림으로 학원을 뛰어다닐 이유는 안 되잖아……」",
        1,
      );
      await era.input();
      await era.printAndWait("……후우, 뭐, 다행이다.");
      await era.printAndWait([
        "모습을 보아하니 ",
        you.get_colored_name(),
        "의 선물이 싫었던 건 아닌 듯하다. 평소 받아 보지 못한 선물에 조금 마음이 흔들렸을 뿐이겠지.",
      ]);
      await era.printAndWait([
        "수수한 인상 때문에 ",
        acute.sex,
        "에게 꽃을 선물하는 사람이 드물었는지도 모른다.",
      ]);
      await acute.say_and_wait(["고맙구나…… ", callname, '。']);
      await acute.say_and_wait(
        "이렇게 예쁜 선물을 받을 줄은 생각도 못 했단다. 소중히 간직하마.",
      );
      await acute.say_and_wait(
        "음…… 답례로는…… 으음, 조금 다른 것 같구나. 선물을 받으면 감사 인사를 하는 게 도리지만, 이번에는 선물을 준 뒤에 답례를 받은 셈이니까~",
      );
      await acute.say_and_wait([
        "음…… 아무튼 정말 고맙구나, ",
        callname,
        '。',
      ]);
      era.printButton("「아하하…… 마음에 든다니 다행이야.」", 1);
      await era.input();
      await era.printAndWait([
        "옥상에서 목욕 가운 차림의 ",
        acute.sex,
        "와(과), 정수리에서 적갈색 액체가 배어 나오는 ",
        you.get_colored_name(),
        "이(가) 서로에게 감사를 전한다.",
      ]);
      await era.printAndWait([
        "틀림없이 이것은 ",
        you.get_colored_name(),
        "의 인생에서 가장 기억에 남는 발렌타인이 될 것이다.",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 있으면 이런 뜻밖의 일이 자주 생긴다——",
      ]);
      era.drawLine({ content: "지하 취조실" });
      await minoru.say_and_wait("최근 학생에게서 신고가 들어왔어요.");
      await minoru.say_and_wait([
        acute.get_colored_name(),
        "의 트레이너가 꽃다발을 들고 ",
        acute.get_colored_name(),
        "에게 청혼하고, 사랑의 증표로 목욕 가운을 입혀 학원을 뛰어다니게 했다더군요.",
      ]);
      await minoru.say_and_wait([
        "사실인가요, ",
        you.actual_name,
        " 트레이너?",
      ]);
      era.printButton('「………………」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        "의 육신은…… 새하얗게 타 버린 재가 되었다——",
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = "팬 감사제";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} princess カワカミプリンセス
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} muteki ヤエノムテキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_72 ワンダーアキュートのヤエノムテキへの呼び方
     * @param {PrintedSpan} m_call_a ヤエノムテキのワンダーアキュートへの呼び方
     * @param {number} win_count ワンダーアキュートの勝利数
     */
    const f = async (
      acute,
      princess,
      city,
      sirius,
      muteki,
      you,
      callname,
      call_72,
      m_call_a,
      win_count,
    ) => {
      await era.printAndWait(
        "팬 감사제는 팬들을 트레센에 초대해 함께 즐기는 운동 축제다.",
      );
      await era.printAndWait([
        "그중에서 ",
        acute.get_colored_name(),
        "이(가) 도전한 종목은——",
      ]);
      await acute.say_and_wait(
        "사실 예전에도 쳐 본 적이 있단다? 음…… 기억으로는 자세가 이렇게——으음.",
      );
      await era.printAndWait([
        "——전통 종목인 「골프」. ",
        acute.sex,
        "가 예전부터 해 봤을 줄은 몰랐다.",
      ]);
      await acute.say_and_wait([
        "으음…… 그런데, ",
        callname,
        ". 노려야 하는 골대는——어디에 있니?",
      ]);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        "은(는) 십 우마 코인을 걸겠다.",
        acute.get_colored_name(),
        "은(는) 골프를 축구로 알고 있다.",
      ]);
      await era.printAndWait([
        "그러니까 ",
        acute.get_colored_name(),
        "은(는) 역시 골프를 할 줄 모른다.",
      ]);
      await era.printAndWait("그리고, 그렇게 해서……");
      await era.printAndWait('————');
      await acute.say_and_wait(
        "후후, 역시 이 종목이 나한테 더 맞는구나——복싱.",
      );
      await acute.say_and_wait(
        "……으음? 자세히 보니 복싱 앞에 다른 말이 붙어 있구먼——【피겨 복싱】?",
      );
      era.printButton("「아아, 복싱 동작을 활용한 체조 경기네.」", 1);
      await era.input();
      await era.printAndWait(
        "실제로 주먹을 주고받을 필요 없이 보기 좋은 복싱 자세를 선보이고, 【동작의 아름다움】과 【지구력】을 심사위원에게 평가받는 경기다——",
      );
      await era.printAndWait([
        "……생각해 보면 당연하다. 십만에 가까운 팬을 거느린 ",
        acute.uma_sex_title,
        " 아이돌들이 트레센에서 진짜 복싱을 했다가는 장내의 팬들이 아수라장을 만들지도 모른다.",
      ]);
      await acute.say_and_wait([
        "으음…… 아쉽구나.",
        callname,
        "은(는) 여자아이들의 복싱을 좋아하는데——",
      ]);
      await you.say_and_wait([
        "아하하…… ",
        acute.get_colored_name(),
        ", 그 이야기는 하야카와 ",
        acute.adult_sex_title,
        " 앞에서 절대로 하지 마. 나 죽어.",
      ]);
      await era.printAndWait([
        "……정정하겠다.",
        you.get_colored_name(),
        "은(는) 단상에 서서 망원경으로 체육관의 수많은 사람이 피투성이로 치고받는 모습을 보는 취미는 없다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) 좋아하는 건 ",
        acute.uma_sex_title,
        "끼리 머리채를 잡고 손톱을 뜯으며 싸우는 광경뿐이다.",
      ]);
      await era.printAndWait("——그뿐이다.");
      await era.printAndWait(
        "자신의 별난 취향을 개척하는 사이, 피겨 복싱 선수들은 경기를 시작했다——",
      );
      await era.printAndWait('…………');
      await sirius.say_and_wait(
        "하, 피겨 복싱인가. 사바트 동작 몇 개만 보여 주면 되겠군.",
      );
      await era.printAndWait([
        "한쪽은 프랑스 호신술 「사바트」에 능통한 ",
        sirius.get_colored_name(),
        '——',
      ]);
      await city.say_and_wait(
        "예전에 몸을 가꾸려고 먼 동쪽에서 한동안 권법을 배운 적이 있어.",
      );
      await city.say_and_wait("1, 2…… 스트레이트, 스트레이트, 훅!");
      await era.printAndWait([
        "다른 한쪽은 학생이자 모델인 슈퍼 ",
        city.get_colored_name(),
        '。',
      ]);
      await era.printAndWait("이 한판 승부에 심판이 내린 판정은——");
      await you.say_as_passer_by_and_wait(
        "심판",
        "거기까지! 두 분 모두 내려가 주세요.",
      );
      await acute.say_and_wait("결승에 진출하지 못한 게니? 왜일까?");
      await you.say_as_passer_by_and_wait(
        "심판",
        "【피겨 복싱】 도중 시리우스 씨가 발차기를 해서 제 선글라스가 떨어질 뻔했습니다.",
      );
      await you.say_as_passer_by_and_wait(
        "심판",
        "골드 시티 씨는 【피겨 복싱】을 하는 틈틈이 카메라를 향해 포즈를 취하셨는데, 도발 기술처럼 보였습니다.",
      );
      await city.say_and_wait("뭐!——나도 모르게 직업병이…… 이 종목도 만만치 않네.");
      await era.printAndWait("……무슨 직업의 직업병인데.");
      await era.printAndWait("그때, 옆 경기장에서 큰 소리가 났다——");
      await princess.say_and_wait("핫, 왓, 챳, 앗——다!");
      await era.printAndWait("——피~케~펑~~~!——");
      await you.say_as_passer_by_and_wait(
        "심판",
        "카와카미 프린세스, 실격! 경기 중 날아차기로 울타리를 부수는 건 반칙입니다!",
      );
      await era.printAndWait('…………');
      await you.say_as_passer_by_and_wait(
        "머리를 핀으로 집어 올린 중년 여성 팬",
        "여보, 봤어요?",
      );
      await you.say_as_passer_by_and_wait(
        "환자복 차림의 중년 남성 팬",
        "봤지. 정통 불○무영각, 너무 짜군.",
      );
      await you.say_as_passer_by_and_wait(
        "옆자리에서 함께 죽을 먹는 젊은 팬",
        "짠 발이라고요? 얼마나 짠데요?",
      );
      await you.say_as_passer_by_and_wait("검은 고급 정장을 입은 흉터 얼굴 팬", [
        "키타산 가문의 ",
        acute.sex_code - 1 ? "딸" : "아들",
        "?…… 흠, 훌륭한 통배권이군. 주먹 바람이 차까지 닿았어.",
      ]);
      await you.say_as_passer_by_and_wait(
        "차를 타고 온 흰 가운 차림의 구경꾼 팬",
        "차? 내 차는!? 여기 세워 둔 그 커다란 차는!? 새 차라고! 사이드미러밖에 안 남았잖아!?",
      );
      await you.say_as_passer_by_and_wait(
        "담배를 문 채 사이드미러 없는 새 차에 앉은 머리 큰 중년 남성 팬",
        [
          "알겠군. 트레센의 ",
          acute.uma_sex_title,
          "들은 모두 한 가지 재주가 있어——",
        ],
      );
      await era.printAndWait('…………');
      await era.printAndWait(
        "세상이 넓음을 실감할 수밖에 없는 트레센의 피겨 복싱 경기장에서, ",
      );
      await era.printAndWait("인류가 아직 이해하지 못한 경기를 지켜보는 동안 ");
      await era.printAndWait([
        acute.get_colored_name(),
        "은(는) 담담하게 승승장구하며 마침내 결승 무대에 올랐다——",
      ]);
      await era.printAndWait('…………');
      await muteki.say_and_wait([m_call_a, ", 잘 부탁드립니다."]);
      await muteki.say_and_wait([
        "전설의 권법가인 ",
        acute.uma_sex_title,
        "와(과) 겨룰 수 있다니 실로 가슴이 뜨거워집니다.",
      ]);
      await acute.say_and_wait([
        "오오오~ ",
        call_72,
        ", 나야말로 잘 부탁하마. 서 있는 모습이 여전히 눈부시구나~",
      ]);
      await era.printAndWait([
        "정중히 인사하는 ",
        muteki.get_colored_name(),
        "에게 ",
        acute.get_colored_name(),
        "은(는) 평소처럼 느긋하게 답했다——",
      ]);
      await era.printAndWait("……잠깐, 전설의 권법가? 그건 또 뭐야.");
      await muteki.say_and_wait("그럼…… 야에 고무술, 한 수 가르침을 청합니다.");
      await era.printAndWait([
        "고무술에 능통한 ",
        muteki.get_colored_name(),
        "이(가) 다시 한번 인사한다.",
      ]);
      await era.printAndWait(
        "주먹의 움직임은 완벽하고 호흡의 리듬에도 빈틈이 없다. 드러난 겨드랑이까지 훤히 보이고, 어느 모로 보나 완벽하다.",
      );
      await era.printAndWait([
        "그런 상대를 앞에 두고도 ",
        acute.get_colored_name(),
        "은(는) 여유롭다.",
      ]);
      await era.printAndWait("호루라기가 울리고 두 사람이 경기를 시작한다——");
      await era.printAndWait('…………');
      await muteki.say_and_wait("음——핫! 얏!");
      await era.printAndWait([
        "결승의 막을 연 것은 ",
        muteki.get_colored_name(),
        "의 갑작스러운 돌진이었다.",
      ]);
      await era.printAndWait("거센 주먹 바람, 맹렬한 돌격. 폭풍 같은 복싱.");
      await era.printAndWait(
        "한 타 한 타가 강맹하다. 정해진 초식은 거의 버리고, 오직 힘과 속도를 실은 정권으로 상대를 찢어 놓을 듯 몰아붙인다.",
      );
      await you.say_as_passer_by_and_wait(
        "땋은 머리의 검고 건장한 사내",
        "소○권법!——틀림없어, 이건 소○권법이다!」",
      );
      era.printButton(
        "(옆에 있는 검고 갈색 호박 같은 해설자는 어디서 나타난 거지?)",
        1,
      );
      await era.input();
      await muteki.say_and_wait(
        "아아!! 일심불란! 끝까지 서 있으면! 이 자리에 끝까지 서 있으면 승리는 내 것이다!!!",
      );
      await era.printAndWait([
        "한 타, 두 타, 세 타……",
        muteki.get_colored_name(),
        "의 공격은 아직 이어지고 있다.",
      ]);
      await era.printAndWait(
        "상식적으로 생각하면, 이런 강맹한 공격은 체력을 크게 소모할 것이다.",
      );
      await era.printAndWait([
        "그러니까 ",
        acute.get_colored_name(),
        "이(가) 상대의 힘이 다할 때까지 버티기만 하면——",
      ]);
      await you.say_as_passer_by_and_wait("검고 건장한 사내", "아니, 소용없어.");
      era.printButton("「……어?」", 1);
      await era.input();
      await era.printAndWait([
        "옆의 검고 건장한 사내가 마음을 읽기라도 한 듯 ",
        you.get_colored_name(),
        "의 생각을 부정했다.",
      ]);
      await you.say_as_passer_by_and_wait(
        "검고 건장한 사내",
        "잘 들어 봐, 상대의 호흡 리듬을——조금도 흐트러지지 않았어!",
      );
      await you.say_and_wait("아니, 그걸 누가 듣고 구분할 수 있는데!?", true);
      await you.say_as_passer_by_and_wait(
        "검고 건장한 사내",
        "그래, 이 특수한 호흡…… 서○의 승려들이 사용하는 특수한 호흡법이지.",
      );
      await you.say_as_passer_by_and_wait(
        "검고 건장한 사내",
        "고산병을 이겨 내기 위해 호흡 빈도를 조절하고, 산소를 온몸 구석구석의 근육까지 빠짐없이 쓰는 거야.",
      );
      await you.say_as_passer_by_and_wait(
        "검고 건장한 사내",
        "전설에 따르면 이 호흡법의 최고수는 육체의 나이마저 되돌릴 수 있어. 몇 배의 중력이 걸리는 수천 미터 고원에서도 가장 강력한 일격을 자유자재로 휘두를 수 있지——",
      );
      await you.say_and_wait('………………………………');
      await you.say_and_wait("그래서?");
      await you.say_as_passer_by_and_wait("검고 건장한 사내", "아직도 모르겠나?");
      await era.printAndWait([
        "검고 건장한 사내는 믿을 수 없다는 표정으로 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      await era.printAndWait(
        "……누가 보통 사람도 무술 전문 용어를 상식으로 알 거라는 자신감을 심어 준 거지.",
      );
      await you.say_as_passer_by_and_wait("검고 건장한 사내", [
        "이 · 정 · 도 공격 빈도라면, 호흡법을 사용하는 ",
        muteki.get_colored_name(),
        "은(는) 사흘 밤낮을 때려도 지치지 않을 거야.",
      ]);
      era.printButton("「……흐음?」", 1);
      await era.input();
      await you.say_as_passer_by_and_wait("검고 건장한 사내", [
        "……아니, 사흘 밤낮은 인☆류라는 생물의 한계일 뿐이지——경주 ",
        acute.uma_sex_title,
        "라면 더 오래 버틸 거야.",
      ]);
      await you.say_as_passer_by_and_wait("검고 건장한 사내", [
        "고무술에 능통한 ",
        acute.uma_sex_title,
        ' ',
        muteki.get_colored_name(),
        "에게 전설의 권법가 ",
        acute.get_colored_name(),
        "은(는) 어떻게 대응할까?",
        acute.get_colored_name(),
        "은(는) 어떻게 해야 ",
        muteki.get_colored_name(),
        "의 호흡법 연타를 깨뜨릴 수 있을까? 하…… 이 절묘한 장면, 기공과 권공, 자○산 대회로부터 백 년 뒤의 최종 결전…… 점점 더 기대되는군.",
      ]);
      await you.say_and_wait('…………');
      era.printButton("(지금 저녁 만들러 돌아가도 늦지 않으려나?)", 1);
      await era.input();
      await era.printAndWait('…………');
      await acute.say_and_wait("하나… 둘… 셋… 넷! (*주먹을 휘두른다)");
      await acute.say_and_wait(
        [
          "역시 ",
          call_72,
          "…… 호흡법이 이렇게 능숙하다니, 몇 번이나 주먹을 휘둘러도 땀 한 방울 흘리지 않는구나——",
        ],
        true,
      );
      await acute.say_and_wait(
        [
          "이 공격을 계속 버티는 건 무척 힘들어——그래도 나는 복서인 아버지의 ",
          acute.sex_code - 1 ? "딸" : "아들",
          "이란다!",
        ],
        true,
      );
      await acute.say_and_wait("둘… 둘… 셋… 넷! (*주먹을 휘두른다)");
      await era.printAndWait([
        "상대의 호흡법 연타 속에서도 강한 오기를 지닌 ",
        acute.get_colored_name(),
        "은(는) 수비에서 밀리지 않는다!",
      ]);
      await era.printAndWait([
        "아무리 공격해도 빈틈을 보이지 않는 ",
        acute.get_colored_name(),
        "을(를) 앞에 두고 ",
        muteki.get_colored_name(),
        "의 공격은 점점 조급해지기 시작한다——",
      ]);
      await era.printAndWait([
        "……이대로라면 ",
        muteki.get_colored_name(),
        "의 빈틈을 기다렸다가 한 방에 끝낼 수 있을지도 몰라.",
      ]);
      await acute.say_and_wait("음…… 하지만 몸은 이미 한계구나——이대로는……", true);
      era.printButton(
        `「힘내! ${acute.name}! 고기는 냄비에 끓여 뒀어! 이기고 나서 같이 고기감자조림 먹자!」`,
        1,
      );
      await era.input();
      await acute.say_and_wait(
        [callname, '……', callname, "이(가) 응원해 주고 있어——"],
        true,
      );
      await acute.say_and_wait(
        ["후우——", callname, "에게 꼴사나운 모습을 보일 수는 없지."],
        true,
      );
      await acute.say_and_wait(
        "더는 버틸 수 없다면…… 모든 걸 이 한 방에——!",
        true,
      );
      await acute.say_and_wait(
        "으아아!!! 뜨거운 피를 불태워, 마지막 순간까지. 받아라, 내 마지막 일격을!!!",
      );
      await era.printAndWait([
        "그 순간 ",
        acute.get_colored_name(),
        "은(는) 수비를 버린다.",
      ]);
      await era.printAndWait("발을 뒤로 빼고 꼬리가 한 번 흔들린다——");
      await era.printAndWait("모든 것이 이 한 방에 담긴다!");
      if (win_count >= 5) {
        await era.printAndWait([
          acute.get_colored_name(),
          ", 전설의 권법가. 모든 것을 건, 천하를 제패할 유권.",
        ]);
        await era.printAndWait([
          "그 찰나에 ",
          muteki.get_colored_name(),
          "의 천하제일 강권을 빠져나가——근육으로 다져진 복부를 향해 곧장 파고든다!",
        ]);
        await era.printAndWait(["그래, ", acute.sex, "는 강권만큼 격렬하지 않다."]);
        await era.printAndWait([
          "그래, ",
          acute.sex,
          "는 강권만큼 용맹하지 않다.",
        ]);
        await era.printAndWait("그래, 이 부드러운 한 방만으로는 이길 수 없다.");
        await era.printAndWait(
          "큰 나무처럼 유연하고 버들잎처럼 부드러운 유권은 강권만큼 눈부시지 않을지도 모른다.",
        );
        await era.printAndWait("하지만 이 한 방이면 충분하다.");
        await era.printAndWait("금강불괴의 강맹함을 깨뜨리기에는——");
        await era.printAndWait("이 한 방만 있 · 으 · 면 · 충 · 분 · 하 · 다.");
        await muteki.say_and_wait("앗! 큭——");
        await muteki.say_and_wait("호, 호흡의 리듬이!?", true);
        await you.say_as_passer_by_and_wait("심판", "삑, 삑, 삑——");
        await you.say_as_passer_by_and_wait("검고 건장한 사내", "무너졌어!");
        await era.printAndWait("그래, 누구의 눈에도 보였다.");
        await era.printAndWait([
          "바로 ",
          acute.get_colored_name(),
          "의 유권이 ",
          muteki.get_colored_name(),
          "의 배에 닿은 그 순간.",
        ]);
        await era.printAndWait([
          muteki.get_colored_name(),
          "의 거의 완벽했던 호흡법——거기에 빈틈이 생겼다!",
        ]);
        await muteki.say_and_wait(
          "큭…… 호흡을 흐트러뜨리는 게 목적이었나?",
          true,
        );
        await muteki.say_and_wait(
          "공격이 끊기는 순간을 노려 호흡의 틈을 찾는다. 숨을 들이마시는 찰나에 복부를 찔러 리듬을 끊는 유권——이 얼마나 뛰어난 관찰력인가.",
          true,
        );
        await muteki.say_and_wait(
          "전설의 권법가, 기적의 시대를 살았던 전설. 세월에 깎여 주먹은 왕년의 위력을 잃었다. 하지만 세월이 준 지혜와 불굴의 오기가 오히려 새로운 경지로 밀어 올린 것인가——",
          true,
        );
        await muteki.say_and_wait(['——', m_call_a, '！'], true);
        await acute.say_and_wait("흥…… 숨 돌릴 틈은 주지 않겠어!");
        await acute.say_and_wait([
          "보고 있으렴, ",
          muteki.get_colored_name(),
          " 선생님——내 사전에 『끝』이라는 말은 없단다!!!",
        ]);
        await era.printAndWait("더는 서 있을 수 없어도, ");
        await era.printAndWait("더는 앞이 보이지 않아도, ");
        await era.printAndWait("다리가 천 근처럼 무겁게 떨려도.");
        await era.printAndWait(
          "무술계의 전설적인 권법가는——이 정도 어려움에 멈추지 않는다!",
        );
        await era.printAndWait([
          "잠깐 숨을 고를 틈만 주어져도 ",
          muteki.get_colored_name(),
          "은(는) 호흡의 리듬을 되찾을지 모른다.",
        ]);
        await era.printAndWait(
          "공격의 리듬을 조금만 늦춰도 무적의 강권은 다시 끝없는 공격을 퍼부을지 모른다.",
        );
        await era.printAndWait([
          "새 시대의 인재——",
          muteki.get_colored_name(),
          "은(는) 몇 번이고 실수해도 된다. 옛 시대의 전설——",
          acute.get_colored_name(),
          "은(는) 한 번의 실수로 패배한다.",
        ]);
        await era.printAndWait("——하지만 그게 뭐 어떤가.");
        await era.printAndWait("「한 번의 실수로 패배한다」면——");
        await era.printAndWait(
          "【단 · 한 · 번 · 도 · 실 · 수 · 하 · 지 · 않 · 으 · 면 · 그 · 만 · 이 · 다】",
          {
            color: acute.color,
            fontSize: '2rem',
          },
        );
        await era.printAndWait(
          "폭풍 속 꽃처럼 피어나는 유권, 멈추지 않는 유권, 오기와 용기의 유권——",
        );
        await acute.say_and_wait("내 유권은 아직 끝나지 않았어!!!!");
        era.drawLine();
        await era.printAndWait("황혼의 경기장 위에 서 있는 승자는 단 한 명.");
        await you.say_as_passer_by_and_wait("심판", "거기까지, 승부 종료!");
        await you.say_as_passer_by_and_wait(
          "심판",
          "트레센 제83회 천하제일 피겨 복싱, 최종 승자는——",
        );
        await you.say_as_passer_by_and_wait("심판", [
          acute.get_colored_name(),
          " 씨입니다!",
        ]);
        await era.printAndWait([
          "결승 무대 위에서 시야가 흐려진 ",
          acute.get_colored_name(),
          "이(가) 오른 주먹을 높이 치켜든다.",
        ]);
        await era.printAndWait(
          "무대 아래에서 우레 같은 박수가 승자에게 영광과 환호를 보낸다.",
        );
        await you.say_as_passer_by_and_wait(
          "검고 건장한 사내",
          "이겼어, 이겼다고!!!",
        );
        await you.say_as_passer_by_and_wait(
          "검고 건장한 사내",
          "세월은 흘렀고, 전설적인 권법가의 주먹은 이미 왕년의 위력을 잃었지.",
        );
        await you.say_as_passer_by_and_wait("검고 건장한 사내", [
          "하지만 ",
          acute.sex,
          "는 자신을 이기고, 세월의 침식도 이겨 냈어. 지극히 빠르고 절묘한 유권으로 강맹하고 무적이던 강권을 쓰러뜨렸다고!",
        ]);
        await you.say_as_passer_by_and_wait("검고 건장한 사내", [
          acute.get_colored_name(),
          '！',
          acute.get_colored_name(),
          '！！！',
          acute.sex,
          "는 마침내 무술계의 정점에 섰어!",
        ]);
        await you.say_as_passer_by_and_wait("검고 건장한 사내", [
          acute.sex,
          "는 시간을 이겼다!!!!!!",
        ]);
        await era.printAndWait("무대 아래에서는 흥분한 관객들이 서로 끌어안는다.");
        await era.printAndWait(
          "눈물과 감동이 경기장을 가득 메운다. 심판마저 살며시 감동의 눈물을 닦는다.",
        );
        await era.printAndWait("이 순간——무대 위의 무인.");
        await era.printAndWait(
          "높이 치켜든 주먹은 무술계의 진정한 영원한 전설이 되었다.",
        );
        era.drawLine();
        await era.printAndWait([
          "황혼, 인파가 흩어질 무렵. 힘이 다한 ",
          acute.get_colored_name(),
          "을(를) 등에 업고 ",
          you.get_colored_name(),
          "과(와) ",
          acute.get_colored_name(),
          "은(는) 돌아가는 길에 오른다.",
        ]);
        await acute.say_and_wait(
          "에헤헤…… 내가 이길 수 있을 줄은 생각도 못 했구나.",
        );
        await era.printAndWait([
          "등에 기대어 더는 움직일 힘조차 없는데도 ",
          acute.get_colored_name(),
          "은(는) 여전히 온화하게, 느긋한 목소리로 오늘의 승리를 전한다.",
        ]);
        era.printButton(
          "「하하…… 아슬아슬했지. 저 호박 같은 덩치랑 같이 무대 아래에서 진땀을 뺐다니까.」",
          1,
        );
        await era.input();
        await acute.say_and_wait("어머~~~ 그랬니~?");
        await era.printAndWait([
          "유난히 기쁜 탓인지 ",
          acute.get_colored_name(),
          "의 목소리에 드물게 들뜬 기색이 섞인다.",
        ]);
        await acute.say_and_wait([
          "그런데 기억하고 있단다——",
          callname,
          ", 복싱에는 별로 관심이 없지 않았니?",
        ]);
        era.printButton("「하하…… 그건 다른 이야기지.」", 1);
        await era.input();
        await era.printAndWait([
          "조금 어색하게 두어 번 웃는다.",
          you.get_colored_name(),
          "은(는) 일부러 고개를 돌려 저 멀리 황혼의 태양을 바라본다. 등 뒤에서 늘 속마음을 꿰뚫어 보는 ",
          acute.uma_sex_title,
          "와(과) 눈이 마주치지 않도록.",
        ]);
        era.printButton("「솔직히…… 처음에는 복싱에 관심 같은 건 없었어.」", 1);
        await era.input();
        await acute.say_and_wait(
          "음~——그렇게 말한다는 건, 지금은 생각이 바뀐 게니?",
        );
        era.printButton("「응, 바뀌었어.」", 1);
        await era.input();
        await era.printAndWait("망설이지 않고 인정한다.");
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          "은(는) 인정할 수밖에 없다. 처음에는 복싱에 편견이 있었다.",
        ]);
        await era.printAndWait(
          "서로 치고받는 경기는 아무래도 【야만적】이라는 말과 연결되는 인상이었다.",
        );
        await era.printAndWait(
          "하지만 가슴속에 감춰 두었던 작은 편견은 이 감동적인 한판이 끝난 뒤 연기처럼 사라져 버렸다.",
        );
        await era.printAndWait("무대 위에서 꺾이지 않았던 모습과 높이 치켜든 오른 주먹.");
        await era.printAndWait("나약한 자신에게는 평생 잊지 못할 모습일 것이다.");
        await era.printAndWait("그것은 너무나도 【눈부셨으니까】.");
        await acute.say_and_wait("음~ 흠~");
        await era.printAndWait([
          "어깨에 기댄 ",
          acute.get_colored_name(),
          "은(는) 무슨 생각을 하는 걸까. 갑자기 즐거운 콧노래를 흥얼거린다.",
        ]);
        await acute.say_and_wait(["저기, ", callname]);
        await you.say_and_wait(["왜, ", acute.get_colored_name(), '？']);
        await acute.say_and_wait(
          "있지——만약…… 만약 내가 졌다면, 너는 어떻게 했을까?",
        );
        era.printButton("「……졌다면?」", 1);
        await era.input();
        await era.printAndWait("미간이 좁아진다. 짓궂고도 묘한 질문이다.");
        await era.printAndWait([acute.get_colored_name(), "이(가) 진다고?"]);
        await era.printAndWait(
          "그런 생각은 단 한 순간도 떠오른 적이 없다.",
        );
        await era.printAndWait(
          "하지만 질문을 받았으니——답을 제대로 생각해 볼 필요가 있다.",
        );
        era.printButton(
          `「……져도 괜찮아. 그런 일로 ${acute.name}은(는) 꺾이지 않으니까.」`,
          1,
        );
        await era.input();
        await acute.say_and_wait("……으음? 어째서니?");
        await era.printAndWait([
          acute.get_colored_name(),
          "은(는) 흥미롭다는 듯 묻는다——",
          acute.sex,
          "는 이 대답에 유난히 관심이 많은 듯하다.",
        ]);
        era.printButton("「그야——실패해도 다시 일어서면 되잖아?」", 1);
        await era.input();
        await era.printAndWait([
          "황혼에 물든, 아무도 없는 중정.",
          acute.get_colored_name(),
          "을(를) 업은 ",
          you.get_colored_name(),
          "은(는) 고목 구멍 옆에서 발을 멈춘다.",
        ]);
        await era.printAndWait("그래, 실패했다. 하지만 그게 뭐 어떤가.");
        await era.printAndWait("【이번에】 졌을 뿐이다.");
        await era.printAndWait("【다음에】 만회하면 된다.");
        await era.printAndWait([
          "설령 【100】번 패배했더라도 【만회할 수 있다면】——",
          acute.sex,
          "는 여전히 최후의 승자다.",
        ]);
        await era.printAndWait("아주 간단한 이치다.");
        await era.printAndWait([
          "——동시에 이것은 ",
          acute.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "에게 가르쳐 준 이치이기도 하다.",
        ]);
        await era.printAndWait([
          "황혼 아래, 못된 짓을 들킨 소년처럼 ",
          you.get_colored_name(),
          "은(는) 살며시 고개를 돌려 연장자의 「눈치」를 살핀다.",
        ]);
        await era.printAndWait([
          "돌아보니——",
          acute.get_colored_name(),
          "도 이쪽을 보고 있었다.",
        ]);
        await era.printAndWait(
          "짙은 눈동자에 아침의 「이슬」이 섞여 생명의 빛을 머금고 있다——",
        );
        await era.printAndWait("황홀한 기분 속에서 심장이 쿵쿵 뛴다.");
        await acute.say_and_wait('……');
        await acute.say_and_wait(["…………저기, ", callname]);
        await acute.say_and_wait("이제…… 내려 주겠니?");
        era.printButton("「아——지, 지금, 지금 내려 줄게——」", 1);
        await era.input();
        await era.printAndWait("순식간에 손발이 꼬인다.");
        await era.printAndWait("어른에게 현장에서 들킨 장난꾸러기 같다.");
        await era.printAndWait([
          "허리를 낮추자 ",
          acute.get_colored_name(),
          "의 발끝이 살며시 땅에 닿았다.",
        ]);
        await era.printAndWait("빙그르르——갑자기 한 바퀴 돈다.");
        await era.printAndWait([
          "돌아보니 ",
          acute.get_colored_name(),
          "은(는) 등을 돌리고 있다——",
          acute.sex,
          "의 얼굴은 보이지 않는다.",
        ]);
        await acute.say_and_wait([
          "……미안하구나, ",
          callname,
          ". 사실 거짓말을 했단다.",
        ]);
        await era.printAndWait("뜨거워진 가슴이 쿵쿵 뛴다.");
        await acute.say_and_wait(
          "사실은…… 경기가 끝난 뒤에도 힘이 조금 남아 있었단다…… 휴게실까지 걸어가는 정도는 문제없었어.",
        );
        await era.printAndWait(
          "밤이 가까운 황혼인데도 몸은 끓어오르는 용암처럼 뜨겁다.",
        );
        await acute.say_and_wait("그러니까, 그게……");
        await era.printAndWait([
          acute.sex,
          "가 돌아서자 아름다운 긴 머리카락이 한 번 흔들린다. 포인트가 되는 흰 머리카락이 달빛처럼——",
        ]);
        await acute.say_and_wait([
          "……내게서든——다른 ",
          acute.uma_sex_title,
          "에게서든, 이미 몇 번이나 들었을지도 모르겠구나?",
        ]);
        await era.printAndWait("수줍음으로 물든 뺨에서 뜨거운 김이 피어오른다.");
        await acute.say_and_wait(
          "그래도 역시 너를 좋아한단다——트레이너.",
        );
        await era.printAndWait(
          "황혼 아래, 자랑스러운 얼굴과 솔직한 말이 텅 빈 중정에 남는다.",
        );
        await era.printAndWait([
          acute.get_colored_name(),
          "의 얼굴은 이미 새빨갛다——하지만 ",
          acute.sex,
          "의 눈은 똑바로 이쪽을 바라보고 있다.",
        ]);
        await era.printAndWait("……이상한가?");
        await era.printAndWait("조금도.");
        await era.printAndWait("왜일까.");
        await era.printAndWait([
          "그것이 자신이 알고 있는 ",
          acute.get_colored_name(),
          "이니까.",
        ]);
        await era.printAndWait("온화하고, 용감하고, 꺾이지 않는다.");
        await era.printAndWait([
          "차분한 겉모습 아래 뜨거운 마음을 불태우는 ",
          acute.get_colored_name(),
          '。',
        ]);
        await you.say_and_wait('……');
        await you.say_and_wait('…………');
        await you.say_and_wait("………………하하.");
        await era.printAndWait("이유 없이 웃음이 새어 나온다.");
        await era.printAndWait("……이상한가?");
        await era.printAndWait("조금도.");
        await era.printAndWait("왜일까.");
        await era.printAndWait([
          "그것이 ",
          acute.get_colored_name(),
          "이(가) 알고 있는 트레이너이니까.",
        ]);
        era.drawLine();
        await era.printAndWait("황혼 아래, 두 사람은 말없이 ");
        await era.printAndWait("작은 보폭으로 집, 곧 트레이너실로 돌아간다.");
        await era.printAndWait("불에 올린 감자가 드디어 다 익었다.");
        await era.printAndWait([
          acute.get_colored_name(),
          "이(가) 감자를 담고 ",
          you.get_colored_name(),
          "이(가) 그릇을 꺼낸다.",
        ]);
        await era.printAndWait("쇠고기를 더해 함께 밥에 비빈다.");
        await era.printAndWait("우물우물, 배 속으로 밀어 넣는다.");
      } else {
        await you.say_as_passer_by_and_wait("심판", "거기까지!");
        await you.say_as_passer_by_and_wait(
          "심판",
          "트레센 제83회 천하제일 피겨 복싱, 최종 승자는——",
        );
        await you.say_as_passer_by_and_wait("심판", [
          muteki.get_colored_name(),
          " 씨입니다!",
        ]);
        await you.say_as_passer_by_and_wait("검고 건장한 사내", [
          acute.get_colored_name(),
          " 씨의 마지막 일격은 복부를 찔러 ",
          muteki.get_colored_name(),
          " 씨의 호흡을 무너뜨리는 기적의 주먹이었지……",
        ]);
        await you.say_as_passer_by_and_wait(
          "검고 건장한 사내",
          "하지만 아깝군. 최강의 유권도 끝내 최강의 강권에는 미치지 못했어——",
        );
        await you.say_as_passer_by_and_wait(
          "검고 건장한 사내",
          "십 년만 빨랐더라면, 저 전설적인 권법가의 강맹함이 아직 남아 있었더라면. 저 최고의 일격으로 경기가 끝났을 텐데.",
        );
        await you.say_as_passer_by_and_wait(
          "검고 건장한 사내",
          "아아…… 나이. 모든 무술가의 최대 적이지.",
        );
        await era.printAndWait(
          "무대 아래에서는 해설하던 검고 건장한 사내가 눈물을 흘리고 있다.",
        );
        await era.printAndWait("한편, 무대 위에서는——");
        await acute.say_and_wait([
          callname.substring(0, 1),
          '……',
          callname,
          '……',
        ]);
        await era.printAndWait([
          "무대 위, 땀이 김이 되어 피어오를 무렵 ",
          acute.get_colored_name(),
          "의 눈에 눈물이 고인다.",
        ]);
        await acute.say_and_wait(
          "으~~~ 나는…… 다 타 버렸구나. 새하얀 재가 되어——",
        );
        await era.printAndWait([
          "힘이 다한 ",
          acute.get_colored_name(),
          "은(는) 무대 위에 힘없이 무너져 내린다.",
        ]);
        await era.printAndWait("——그와 동시에 관객들의 우레 같은 박수가——");
        await era.printAndWait([
          "그렇게 ",
          acute.get_colored_name(),
          "은(는) 박수 속에 무대에서 내려왔다.",
        ]);
        await era.printAndWait("옛 시대의 전설은 새 시대의 전설에게 길을 내어 준다——");
        era.drawLine();
        await era.printAndWait([
          "황혼, 인파가 흩어질 무렵. 힘이 다한 ",
          acute.get_colored_name(),
          "을(를) 등에 업고 ",
          you.get_colored_name(),
          "과(와) ",
          acute.get_colored_name(),
          "은(는) 돌아가는 길에 오른다.",
        ]);
        await acute.say_and_wait([
          "으음~~",
          callname,
          "에게 지는 모습을 보이고 말았구나——",
        ]);
        await era.printAndWait([
          "등에 기대어 더는 움직일 힘조차 없는데도 ",
          acute.get_colored_name(),
          "은(는) 여전히 입술을 내밀고, 오늘 결승을 잊지 못하는 듯하다.",
        ]);
        era.printButton(
          "「뭐——마지막 일격은 나도 관객들도 봤잖아? 모두 감동했어.」",
          1,
        );
        await era.input();
        await acute.say_and_wait("하지만…… 진 건 진 거란다.");
        era.printButton("「하하…… 그렇지, 분명 졌지.」", 1);
        await era.input();
        await era.printAndWait("무대 위의 승부는 이토록 무정하다.");
        await era.printAndWait(
          "승자가 있으면 반드시 패자가 있다. 승자는 빛나고 패자는 초라하게 퇴장한다.",
        );
        await era.printAndWait(
          "몸도, 컨디션도, 운도. 경기장에서 백 퍼센트를 발휘하고도 이기지 못한다면, 아무리 훌륭한 트레이닝 성적도 의미가 없다.",
        );
        await era.printAndWait("이 세계는 결과가 전부다. 무대 위에서도, 레이스에서도.");
        await era.printAndWait("……다만——");
        era.printButton("「지금 졌으면 다음에 만회하면 돼.」", 1);
        await era.input();
        await acute.say_and_wait(['……', callname, '？']);
        era.printButton("「그러니까——지금 져도 다음에 만회하면 된다고.」", 1);
        await era.input();
        await era.printAndWait(
          "이 세계가 결과만 따진다고 해도, 누구에게나 기회가 【딱 한 번】뿐인 것은 아니다.",
        );
        await era.printAndWait("그래, 실패했다. 하지만 그게 뭐 어떤가.");
        await era.printAndWait("【이번에】 졌을 뿐이다.");
        await era.printAndWait("【다음에】 만회하면 된다.");
        await era.printAndWait([
          "설령 【100】번 패배했더라도 【만회할 수 있다면】——",
          acute.sex,
          "는 여전히 최후의 승자다.",
        ]);
        await era.printAndWait([
          "등에 업은 ",
          acute.get_colored_name(),
          "을(를) 살며시 고쳐 업는다. 집, 곧 트레이너실까지 이제 몇 걸음 남지 않았다.",
        ]);
        await era.printAndWait([
          "돌아보자 ",
          acute.get_colored_name(),
          "——지금 ",
          acute.get_colored_name(),
          "도 ",
          you.get_colored_name(),
          "을(를) 바라보고 있었다.",
        ]);
        await era.printAndWait([
          "다만 이때 ",
          acute.get_colored_name(),
          "의 눈빛은 평소와 다르다.",
        ]);
        await era.printAndWait("——말로 표현한다면 어떻게 해야 할까.");
        await era.printAndWait("느긋하지도, 그저 다정하기만 하지도 않다……");
        await era.printAndWait(
          "놀라움이 섞인 온화함에, 다정함보다도 더 여린 빛이 있다.",
        );
        await era.printAndWait(
          "짙은 눈동자에 아침의 「이슬」이 섞여 생명의 빛을 머금고 있다——",
        );
        await era.printAndWait([
          "어째서인지 등 위에서 「처음 보는」「연약한 ",
          acute.teen_sex_title,
          "」를 보자 심장이 쿵쿵 뛴다.",
        ]);
        await era.printAndWait(
          "뛰고 또 뛴다——붉은 용기가 목구멍까지 차오른다.",
        );
        era.printButton("「……하하.」", 1);
        await era.input();
        await era.printAndWait("저도 모르게 웃음이 새어 나온다.");
        await acute.say_and_wait("……뭐가 웃긴 게니?");
        era.printButton("「웃은 건…… 냄비에 끓이고 있는 고기 때문이야.」", 1);
        await era.input();
        await era.printAndWait([
          "그렇게 말하며 ",
          you.get_colored_name(),
          "은(는) 고개를 돌린다. 눈앞에는 황혼의 복도가 펼쳐져 있다.",
        ]);
        await acute.say_and_wait("……그게 뭐가 웃긴 걸까.");
        await era.printAndWait([
          "입술을 내민, 딸 같은 ",
          acute.get_colored_name(),
          "이(가) 어깨에 기댄다.",
        ]);
        era.drawLine();
        await acute.print_and_wait("……사실 체력은 이미 회복되었다.");
        await acute.print_and_wait([
          "이 몇 걸음 정도라면 ",
          acute.uma_sex_title,
          "의 오기로 가뿐히 걸을 수 있다.",
        ]);
        await acute.print_and_wait("……하지만.");
        await acute.print_and_wait("하지만……");
        await acute.print_and_wait("몇 걸음밖에 남지 않았다면.");
        await acute.print_and_wait([
          callname,
          "에게 업혀 가는…… 그 정도는 괜찮겠지?",
        ]);
        await acute.say_and_wait('………………');
        await acute.say_and_wait("가슴속의 이 두근거림……", true);
        await acute.say_and_wait(
          ["역시 나는 ", callname, "을(를)…… 그를——"],
          true,
        );
        era.drawLine();
        await acute.print_and_wait("그렇게 조금 짭짤했던 팬 감사제는, ");
        await acute.print_and_wait("그날 밤 조금 지나치게 짰던 고기감자조림 속에서 ");
        await acute.print_and_wait("막을 내렸다——");
      }
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ge: (() => {
    const title = "맹세";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 만난 지 사 년째 되는 삼월.",
      ]);
      await era.printAndWait("기온은 오르고 있지만 땅은 아직 축축하고 차갑다.");
      await era.printAndWait([
        acute.get_colored_name(),
        "이(가) 전당에 입성한 지 사흘째.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "이(가) 홋카이도로 휴가를 온 첫날이기도 하다.",
      ]);
      era.drawLine({ content: "홋카이도 온천 여관" });
      await acute.say_and_wait(
        "와아~ 살아 있는 왕게는 처음 보는구나——",
      );
      await era.printAndWait([
        "눈앞에 차려진 진수성찬에 ",
        acute.get_colored_name(),
        "은(는) 진심으로 감탄한다.",
      ]);
      await era.printAndWait([
        "흥, 이게 다 ",
        you.get_colored_name(),
        "의 사전 준비 덕분이지.",
      ]);
      await era.printAndWait([
        "그렇다. 휴가가 시작되기도 전부터 ",
        you.get_colored_actual_name(),
        "라는 이름의 트레이너는 밤을 새워 료칸 안내를 읽고, 삼천 자 분량의 『홋카이도 생존 미식 안내서』를 외워 두었다——",
      ]);
      await you.say_and_wait([
        "흐흠~",
        acute.get_colored_name(),
        ", 알고 있어? 왕게는 사실 게가 아니라 소라게의 친척이야——",
      ]);
      await acute.say_and_wait("우물우물~");
      await you.say_and_wait(
        "식탁에 오르는 왕게는 대략 네 종류가 있어. 우리가 먹는 건 이 지역 명물인 하나사키게야——",
      );
      await acute.say_and_wait("꿀꺽꿀꺽~");
      await you.say_and_wait(
        "하나사키게라면 세 가지 먹는 법과 여섯 가지 이름을 빼놓을 수 없지——",
      );
      await acute.say_and_wait("에헤——아하하~");
      era.printButton(`……저기, ${acute.name}. 듣고 있어?`, 1);
      await era.input();
      await acute.say_and_wait("듣고 있단다~");
      await era.printAndWait([
        acute.sex,
        "는 그렇게 말하면서도 손을 바쁘게 움직인다——",
      ]);
      await acute.say_and_wait(
        "방금은 왕게를 쓰는 네 가지 방법에 관한 이야기였지~",
      );
      await you.say_and_wait("전·혀·아·니·거·든!");
      await era.printAndWait("음식 소개를 누군가의 서글픈 명언처럼 말하지 마.");
      await acute.say_and_wait("아하하~ 손으로 하는 이 일이 꽤 재미있어서 말이야.");
      await era.printAndWait([
        "목소리가 난 쪽을 보니 ",
        acute.get_colored_name(),
        "의 손에는 금색 게 가위가 들려 있다.",
      ]);
      await era.printAndWait(
        "다리 껍데기를 가장자리부터 잘라 관절을 따라 한 바퀴 돌린다. 그러면 집게를 잡은 채 살을 최대한 맛볼 수 있다.",
      );
      await era.printAndWait(
        "예약한 이 료칸의 왕게는 대개 손질되어 나온다. 손님에게 다리 손질을 맡기는 일은 드물다.",
      );
      await you.say_and_wait("……가게가 손님을 우습게 보는 건 아니겠지?");
      await acute.say_and_wait("내가 부탁했단다.");
      await acute.say_and_wait(
        "이렇게 작은 가위로 조금씩 껍데기를 자르고 있으면, 본가에서 공작하던 때가 떠올라서……",
      );
      await era.printAndWait(
        "맑은 눈이 천천히 커지고, 가위를 든 작은 손이 미세하게 움직인다. 딱딱 소리와 함께 껍데기 조각이 식탁에 떨어진다.",
      );
      await era.printAndWait([
        "얼마 지나지 않아 투명한 게살 한 덩이가 ",
        acute.get_colored_name(),
        "의 손에 나타났다.",
      ]);
      await acute.say_and_wait(["저기, ", callname, '。']);
      await you.say_and_wait("응?");
      await acute.say_and_wait("자, 아앙.");
      await era.printAndWait([
        "어머니처럼 다정한 목소리와 함께, 길쭉한 게살은 벌써 ",
        you.get_colored_name(),
        "의 얼굴 앞에 다가와 있다.",
      ]);
      await you.say_and_wait(["저기, ", acute.get_colored_name(), '……']);
      await acute.say_and_wait("아앙.");
      await you.say_and_wait("여기, 사람들 있는 곳인데……");
      await acute.say_and_wait("아앙.");
      await you.say_and_wait("그, 내 몫은 내가……");
      await acute.say_and_wait("아앙.");
      await you.say_and_wait('……');
      await era.printAndWait(
        "——입을 벌리지 않으면 이 게살이 코끝을 찌르겠어!",
      );
      await era.printAndWait(
        "입을 크게 벌려, 붉은 윤기가 도는 길쭉한 게살을 살며시 베어 문다.",
      );
      await era.printAndWait(
        "탄탄한 씹는 맛, 뜨거운 육즙, 해산물 특유의 짭짤함, 그리고 고급 식재료다운 품격——",
      );
      await you.say_and_wait("음…… 이거 맛있네.");
      await you.say_and_wait([
        "저기, ",
        acute.get_colored_name(),
        ", 너도 한입——",
      ]);
      await acute.say_and_wait("아아, 잠깐만 기다려 주렴~");
      await era.printAndWait(
        "훌륭한 맛을 확인하고는 손에 든 음식을 나누려 한다.",
      );
      await era.printAndWait([
        "옆의 ",
        acute.get_colored_name(),
        "은(는) 흥미진진한 얼굴로 가위를 들고 다음 다리를 손질하고 있다.",
      ]);
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait("조금 전 입에 밀어 넣어진 게살을 바라본다.");
      await acute.say_and_wait("음흠흠~ 흠흠흠~");
      await era.printAndWait([
        "식사 시간인데도 여전히 수예를 하듯 손을 움직이는 ",
        acute.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      await era.printAndWait("한 손으로 게살을 빼내자, 낯선 결심이 솟아오른다.");
      await you.say_and_wait(["저기, ", acute.get_colored_name(), '。']);
      await acute.say_and_wait(["왜 그러니, ", callname, '？']);
      await you.say_and_wait("지금은 밥 먹을 시간이지?");
      await acute.say_and_wait("그렇지~");
      await you.say_and_wait("그러니까 말이야……");
      await era.printAndWait([
        "그러고는 한 손을 ",
        acute.sex,
        "의 앞으로 뻗어 ",
        acute.get_colored_name(),
        "의 손질을 가로막는다.",
      ]);
      await era.printAndWait([
        "짙은 눈동자가 순간 반짝인다. 가슴 앞으로 갑자기 들어온 오른손이 아무래도 ",
        acute.sex,
        "의 시선을 사로잡은 모양이다.",
      ]);
      await era.printAndWait([
        "이어서 그 손은 에덴의 뱀처럼 ",
        acute.get_colored_name(),
        "의 턱을 가볍게 걸어 든다.",
      ]);
      await era.printAndWait("고개를 돌리자 눈과 눈이 마주친다.");
      await era.printAndWait([
        "갑작스러운 일에 놀란 것인지 ",
        acute.get_colored_name(),
        "은(는) 저항하지 않고 그 자리에 멍하니 있다. 흰 뺨에 분홍빛이 번지는데, 기쁜 건지 당황한 건지 구분할 수 없다.",
      ]);
      await acute.say_and_wait(["그, 저기……", callname, '……？']);
      await era.printAndWait(
        "그 목소리는 망설임 같기도, 놀라움 같기도 하다. 칠 할의 의문에 삼 할의 호기심이 섞여 있다.",
      );
      await era.printAndWait(
        "한번 내민 손가락은 물러나지 않는다. 은은한 눈빛 안에서 더 나아가려는 야심이 타오른다.",
      );
      await era.printAndWait("전초전은 끝났다. 이제부터가 본게임이다.");
      await you.say_and_wait(["저기, ", acute.get_colored_name(), '～。']);
      await acute.say_and_wait("응❤️……");
      await you.say_and_wait("지금은 밥 먹을 시간, 맞지?");
      await acute.say_and_wait("……응?");
      await you.say_and_wait("그러니까 말이야……");
      await era.printAndWait("미소 짓는 얼굴 앞에 커다란 게살 한 덩이가 비친다.");
      await era.printAndWait("손바닥 안에는 온화한 얼굴, 바로 앞에는 사나운 거수——");
      await era.printAndWait("지금이다, 고독한 용사여!");
      await you.say_and_wait("게살 좀 제대로 먹어!!!!");
      await era.printAndWait([
        "커다란 창이 그 순간 ",
        acute.get_colored_name(),
        "의 입으로 날아들었다.",
      ]);
      await acute.say_and_wait("읍!?");
      await acute.say_and_wait("음, 무, 르……");
      await acute.say_and_wait('…………');
      await acute.say_and_wait('……❤️');
      await era.printAndWait('——————');
      await era.printAndWait("——솔직히 말하자면, ");
      await era.printAndWait("정말 훌륭한 식사였다.");
      era.drawLine();
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 만난 지 사 년째 되는 삼월.",
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        "이(가) 전당에 입성한 지 사흘째.",
      ]);
      await era.printAndWait([
        "이사장의 통 큰 배려로 홋카이도의 온천 료칸에 휴가를 와 있다.",
      ]);
      await era.printAndWait([
        "……뭐, ",
        you.get_colored_name(),
        "이(가) 보기에는 자기한테 조금 사치스러운 숙소다.",
      ]);
      await era.printAndWait("——밤은 이미 깊었다.");
      await era.printAndWait(
        "온천에 몸을 담근 뒤에는 이불을 펴고 일찍 잠들 생각이었다.",
      );
      await era.printAndWait("하지만 이리저리 뒤척여도 잠이 오지 않는다.");
      await era.printAndWait([
        "이불을 걷어차고 창밖의 달을 바라본다. 알 수 없는 쓸쓸함이 ",
        you.get_colored_name(),
        "의 가슴에 밀려온다.",
      ]);
      await era.printAndWait([
        "돌아보면 그곳에는 ",
        acute.get_colored_name(),
        "의 평온한 잠든 얼굴이 있다.",
      ]);
      await era.printAndWait('………………');
      await era.printAndWait("어둠에 몸을 숨기고 발끝을 세워, ");
      await era.printAndWait("살며시, 살며시 문을 연다.");
      await era.printAndWait("끝없이 깊은 밤 속으로 발을 내딛는다.");
      await era.printAndWait('………………');
      await era.printAndWait("밤은 언제나 칠흑 같다.");
      await era.printAndWait("사람의 모든 것을 삼킬 듯한 검은빛.");
      await era.printAndWait("그럼에도 희미한 별과 달은 반딧불 같은 미광을 남긴다.");
      await era.printAndWait(
        "잠시나마 살아갈 방향과, 아직 앞으로 나아갈 수 있다는 희망을 건넨다.",
      );
      await era.printAndWait("삼월 홋카이도의 밤은 사방이 아직 춥다.");
      await era.printAndWait("하지만 그 추위야말로 정신을 맑게 한다.");
      await era.printAndWait("음식은 훌륭했고 잠자리는 푹신하며 난방도 충분하다.");
      await era.printAndWait(
        "그런데도 모든 것이 들뜬 그림자처럼, 물거품처럼 느껴진다.",
      );
      await era.printAndWait("——그래, 자신은 아직 나약하다.");
      await era.printAndWait("앞으로 나아가려면 「정진」하는 수밖에 없다——");
      await acute.say_as_unknown_and_wait([
        "아직 안 잤구나, ",
        callname,
        '。',
      ]);
      await era.printAndWait("등 뒤에서 익숙한 목소리가 들린다.");
      await era.printAndWait("몸은 추위에 떨고 머릿속은 추위로 맑아진다.");
      era.printButton(`「자는 줄 알았어, ${acute.name}」`, 1);
      await era.input();
      await acute.say_and_wait(
        "네가 잠들 때까지 나는 계속 깨어 있었단다.",
      );
      await era.printAndWait(
        "등 뒤로 그림자 하나가 지나간다. 짙은 잿빛 긴 머리카락을 지닌, 고동치는 마음이다.",
      );
      await era.printAndWait([
        acute.sex,
        "의 보폭은 언제나 ",
        you.get_colored_name(),
        "보다 넓다. 그래서 연못에도 달에도 한층 더 가깝다.",
      ]);
      await acute.say_and_wait(
        "오늘 식사 때 말해 줄 줄 알았단다.",
      );
      await you.say_and_wait('……');
      await you.say_and_wait("……무슨 말이야?");
      await acute.say_and_wait("프랑스에 간다는 이야기 말이야, 트레이너.");
      await acute.say_and_wait([
        "프랑스의 ",
        acute.uma_sex_title,
        "계에서 온 초대를 받아 파리에서 공부하는 거지. 사흘 뒤에는 혼자 파리행 비행기에 오르고. 그렇지?",
      ]);
      await you.say_and_wait('……');
      await era.printAndWait([acute.sex, "의 말은 틀림없는 사실이다."]);
      await acute.say_and_wait("……왜 말해 주지 않았니?");
      await era.printAndWait("짙은 잿빛 뒷모습이 차가운 말을 꺼낸다.");
      await you.say_and_wait("……숨기려던 건 아니야, 원더 어큐트.");
      await you.say_and_wait("그저 어떻게 말해야 할지 몰랐을 뿐이야.");
      await you.say_and_wait([
        "이 ",
        acute.uma_sex_title,
        "의 세계에서 한 단계 더 올라가려면. 지금의 나는 아직 네 곁에 설 자격이 없어.",
      ]);
      await you.say_and_wait("하지만…… 정말 자격 있는 사람으로 네 곁에 서고 싶어.");
      await acute.say_and_wait(
        "그래서…… 파리에 가서 삼 년 동안 공부할 생각인 게니?",
      );
      await you.say_and_wait("……응.");
      await acute.say_and_wait(
        "그래서…… 파리에 가서 삼 년 동안 공부할 생각인 게니?",
      );
      await era.printAndWait("찬바람 속에서 침묵이 대답한다.");
      await era.printAndWait("어쩔 수 없는 차가움과, 홀로 뜻을 관철하는 무정함.");
      await era.printAndWait("달 아래 바람이 살짝 스치고, 숲 소리는 변함없다.");
      await era.printAndWait("짙은 잿빛 뒷모습이 살며시 고개를 든다.");
      await acute.say_and_wait([
        "……『개선문상』은 알고 있니, ",
        callname,
        '？',
      ]);
      await you.say_and_wait("프랑스 최고의 레이스 말이야?");
      await acute.say_and_wait([
        "응. 해마다 이곳에서 『최강의 ",
        acute.uma_sex_title,
        "』 한 명이 바다를 건너 파리로 향하는, 그 레이스 말이야.",
      ]);
      await acute.say_and_wait("올해는 이미 기회가 없을지도 모르겠구나.");
      await acute.say_and_wait("하지만 내년이라면——");
      await you.say_and_wait("……그러니까?");
      await acute.say_and_wait("그러니까……");
      await era.printAndWait("달빛 아래, 짙은 잿빛 그림자가 돌아선다.");
      await era.printAndWait("늠름한 모습 아래 앞으로 나아가려는 야심이 타오른다.");
      await era.printAndWait(
        "삼 할의 망설임과 칠 할의 놀라움. 아쉬움 같기도 하고, 더없이 큰 기쁨 같기도 하다.",
      );
      await era.printAndWait(
        "소크라테스의 밀 이삭처럼, 귀청을 찢을 듯 울리면서도 고결한 이의 다정함에 가깝다.",
      );
      await era.printAndWait([
        "달 아래 별이 빛나고, 잿빛의 ",
        acute.teen_sex_title,
        "이(가) ",
        acute.sex,
        "의 약속을 입에 담는다.",
      ]);
      await acute.say_and_wait("네가 파리에 간다면, 나도 뒤따라가마.");
      await acute.say_and_wait("일 년만 더 기다려 주렴. 트레이너.");
      await acute.say_and_wait("반드시 뒤쫓아 가 보이겠어.");
      await acute.say_and_wait([callname, '——']);
      era.drawLine();
      await era.printAndWait("홋카이도 이야기는 일단 여기서 마무리한다.");
      await era.printAndWait("앞으로의 이야기는 아직, 아직도 아주 길다——");
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ne: (() => {
    const title = "출발점";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     * @param {PrintedSpan} y_call_t プレイヤーの秋川やよいへの呼び方
     */
    const f = async (
      acute,
      minoru,
      taste,
      you,
      callname,
      y_call_m,
      y_call_t,
    ) => {
      await era.printAndWait([
        acute.get_colored_name(),
        "과(와) 만난 지 사 년째 되는 삼월.",
      ]);
      await era.printAndWait("기온은 오르고 있지만 땅은 아직 축축하고 차갑다.");
      await era.printAndWait([
        acute.get_colored_name(),
        "이(가) 전당에 입성한 지 엿새째.",
      ]);
      await era.printAndWait([
        "한때 어깨를 맞대었던 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "이(가) 이제 서로 떨어져 지낼 첫해이기도 하다.",
      ]);
      era.drawLine({ content: "도쿄 국제공항" });
      era.printButton("「여기까지면 돼요.」", 1);
      await era.input();
      await you.say_and_wait([
        "여기까지 함께해 줘서 고마워요.",
        y_call_t,
        '、',
        y_call_m,
        '。',
      ]);
      await minoru.say_and_wait(
        "아하하——몇 년이나 함께했는데 그렇게 사양하지 않아도 돼요.",
      );
      await taste.say_and_wait([
        "동의!",
        you.actual_name,
        " 트레이너는 진작부터 트레센 학원의 가족이었느니라.",
      ]);

      await era.printAndWait([
        "공항 탑승구 앞에서 ",
        you.get_colored_name(),
        "은(는) ",
        minoru.get_colored_name(),
        '、',
        taste.get_colored_name(),
        "과(와) 마지막 잡담을 나누고 있다.",
      ]);
      await minoru.say_and_wait(
        "그나저나…… 정말 프랑스의 초대를 받아들일 줄은 몰랐어요.",
      );
      await taste.say_and_wait(
        "경악! 그 소식을 들었을 때는 충격으로 당근을 땅에 떨어뜨리고 말았네.",
      );
      await you.say_and_wait("하하…… 확실히 저다운 방식은 아닐지도 모르죠.");
      await era.printAndWait([
        "한 손으로 뒤통수를 긁으며 ",
        minoru.get_colored_name(),
        "과(와) ",
        taste.get_colored_name(),
        " 앞에서 어색하게 웃는다.",
      ]);
      await you.say_and_wait("사실…… 결심한 것도 얼마 안 됐어요.");
      await you.say_and_wait([
        acute.get_colored_name(),
        "의 트레이너가 된 지 삼 년. 정말 뛰어난 트레이너가 되려면 아직 멀었다는 걸 알았어요.",
      ]);
      await you.say_and_wait("흔들리지 않는 마음도, 완급을 판단해 짜는 트레이닝 계획도.");
      await you.say_and_wait("지금의 저는 『훌륭한 트레이너』와는 아직 거리가 멀어요.");
      await minoru.say_and_wait(
        "그래서 프랑스 우마무스메계의 초대를 받아 파리에서 한동안 배우기로 한 건가요?",
      );
      await you.say_and_wait(
        "네——하지만 두 분이 아시는 저잖아요. 혼자서는 고향을 떠날 용기 같은 건 없었죠.",
      );
      await you.say_and_wait([
        "사실…… 결심을 밀어 준 건 ",
        acute.get_colored_name(),
        "이에요.",
      ]);
      await you.say_and_wait([
        "이렇게 무능하고 실격인 트레이너를 두고도 ",
        acute.get_colored_name(),
        "은(는) 꺾이지 않고 노력과 약간의 운으로 전당 입성을 이뤘잖아요?",
      ]);
      await you.say_and_wait("그러니까——저도 조금은 노력해야겠다고 생각했어요.");
      await you.say_and_wait([
        "정말 자격을 갖춘 트레이너로서 ",
        acute.get_colored_name(),
        "의 곁에 서고 싶어요.",
      ]);
      await minoru.say_and_wait("그렇군요……");
      await taste.say_and_wait(
        "무회! 그것이 자네의 결정이라면 우리는 무조건 응원하겠네.",
      );
      await minoru.say_and_wait([
        "그런데…… ",
        acute.get_colored_name(),
        "은(는) 오늘 왜 배웅하러 오지 않았나요?",
      ]);
      await you.say_and_wait([
        "그건…… 프랑스에 간다는 걸 아직 ",
        acute.sex,
        "에게는 숨기고 있어요.",
      ]);
      await taste.say_and_wait([
        "경악!? 아직 ",
        acute.get_colored_name(),
        "에게 숨기고 있단 말인가!?",
      ]);
      await you.say_and_wait(["하하…… 편지는 남겼어요."]);
      await you.say_and_wait([
        "이게 옳은지 그른지는 저도 모르겠어요.",
      ]);
      await you.say_and_wait([
        "그저 ",
        acute.sex,
        " 앞에서 작별하느니…… 혼자 몰래 떠돌이 개처럼 달아나는 편이…… 차라리 나을 것 같아서요.",
      ]);
      await era.printAndWait("【딩, 동, 댕, 동~】");
      await era.printAndWait("【파리행 승객 여러분께 안내 말씀드립니다~】");
      await era.printAndWait("【QR5201편의 탑승을 지금 시작합니다~】");
      await you.say_and_wait([
        "시간이 된 것 같네요——",
        y_call_t,
        '、',
        y_call_m,
        '。',
      ]);
      await minoru.say_and_wait(["잘 다녀오세요, ", you.actual_name, '。']);
      await taste.say_and_wait("포부! 배움을 마치면 얼른 돌아오게!");
      await you.say_and_wait("고마워요. 그럼——");
      await you.say_and_wait("삼 년 뒤에 봬요.");
      await era.printAndWait('………………');
      await era.printAndWait("평범한 줄, 별다를 것 없는 검표.");
      await era.printAndWait("이 층에서 내려와 홀로 들어선다.");
      await era.printAndWait("재미있다거나, 이야기할 가치가 있다고 하기는 어렵다.");
      await era.printAndWait(
        "문득 목이 마르다. 습관적으로 손을 뻗어 가방에서 갈증을 달래 줄 말린 당근을 찾는다.",
      );
      await era.printAndWait([
        "찾다가 그제야 생각난다.",
        you.get_colored_name(),
        "은(는) 원래 외출할 때 먹을 것을 챙기지 않는다.",
      ]);
      await you.say_and_wait('……');
      await you.say_and_wait("……하하——");
      era.printButton(
        "「나는 대체 얼마나 오랫동안 혼자 멀리 나가지 않았던 거지?」",
        1,
      );
      await era.input();
      await era.printAndWait("분주한 인파 한가운데서 대답은 돌아오지 않는다.");
      await era.printAndWait("저도 모르게 고개를 들어 탑승구를 돌아본다.");
      await era.printAndWait(
        "그곳에는 평소처럼 화분이 있고, 몇몇 사람이 오가고 있다.",
      );
      await you.say_and_wait(
        [
          "……저기에 ",
          acute.get_colored_name(),
          "이(가) 있었다면 얼마나 좋았을까.",
        ],
        true,
      );
      await era.printAndWait("머릿속으로 그렇게 생각한다.");
      await era.printAndWait("뒤이어 스스로를 나직이 비웃는다.");
      era.printButton("(이제 와서…… 무슨 생각을 하는 거야.)", 1);
      await era.input();
      era.printButton(
        `（${you.actual_name}야, ${you.actual_name}. 그렇게 나약해서야 되겠냐.)`,
        1,
      );
      await era.input();
      await era.printAndWait("자조 섞인 쓴웃음이 허공에 흩어져 사람의 바다에 삼켜진다.");
      await era.printAndWait("마음을 다잡는다.");
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 「첫」 한 걸음을 내디뎠다——",
      ]);
      era.drawLine();
      await acute.print_and_wait("화분 아래, 유리창 곁.");
      await acute.print_and_wait([
        "한 명의 ",
        acute.child_sex_title,
        "가 조용히 앉아 있다.",
      ]);
      await acute.print_and_wait([
        "사람들은 흔히 ",
        acute.child_sex_title,
        "는 온화하고 다정하며, 노인 같다고 말한다.",
      ]);
      await acute.print_and_wait([
        "사실 ",
        acute.child_sex_title,
        "는 사람들이 말하는 것처럼 언제나 온화하고 다정하지만은 않다.",
      ]);
      await acute.print_and_wait([
        acute.sex,
        "도 보통 사람처럼 부담과 괴로움을 느낀다. 어디에도 내려놓을 수 없는 외로움과 가슴이 찢어지는 아픔을 느낀다.",
      ]);
      await acute.print_and_wait([
        "그저——",
        acute.sex,
        "는 그 속내를 남에게 말하고 싶지 않을 뿐이다.",
      ]);
      await acute.print_and_wait([
        acute.sex,
        "는 혼자 몰래 숨는 편을 더 좋아한다.",
      ]);
      await acute.print_and_wait("「아무에게도 들키지 않는」 곳으로.");
      await acute.print_and_wait("그곳에서 살며시 앉는다.");
      await acute.print_and_wait("「처음」과 마찬가지로——");
      minoru.name = `초록색 모자를 쓴 ${minoru.phy_sex_title}`;
      acute.name = acute.child_sex_title;
      await minoru.say_and_wait([
        '——',
        you.sex,
        "에게 작별 인사하러 가지 않을 건가요?",
      ]);
      await acute.print_and_wait([
        "곁에서는 친절한 ",
        acute.phy_sex_title,
        "가 ",
        acute.sex,
        "의 옆에 서 있다.",
      ]);
      await acute.say_and_wait("아니, 괜찮단다…… 이걸로 됐어.");
      await minoru.say_and_wait("그런가요……");
      await acute.print_and_wait([
        "아래쪽 인파를 바라보며 ",
        you.child_sex_title,
        "의 뒷모습을 찾아낸다.",
      ]);
      await acute.print_and_wait([
        "어째서인지 ",
        acute.phy_sex_title,
        "가 저도 모르게 한숨을 내쉰다.",
      ]);
      await minoru.say_and_wait("저 사람, 정말 바보네요——");
      await acute.say_and_wait(['', callname, "을(를) 말하는 게니?"]);
      await minoru.say_and_wait([you.sex, " 말고 누가 있겠어요?"]);
      await acute.print_and_wait([
        "말을 마치자 ",
        acute.phy_sex_title,
        "의 모자가 한 번 흔들린다. 감춰 두었던 비밀이 당장이라도 쏟아질 것 같다.",
      ]);
      await acute.say_and_wait("나는 다를까.", true);
      await acute.print_and_wait([
        acute.child_sex_title,
        "는 가슴에서 흘러나온 그 말을 다시 입안으로 삼킨다.",
      ]);
      await acute.print_and_wait([
        "애초에 ",
        you.child_sex_title,
        "는 숨기는 데 서툴다.",
      ]);
      await acute.print_and_wait("인터넷에도 서툴고, 현실에도 숨길 여지가 없다.");
      await acute.print_and_wait([
        "오가는 우편물과 NOK의 영입 제안은 트레센에 도착하면 언제나 ",
        acute.child_sex_title,
        "의 손을 거친다.",
      ]);
      await acute.print_and_wait("——처음부터 두 사람 사이에 비밀 같은 건 없었다.");
      await minoru.say_and_wait("……지금 가도 늦지 않아요.");
      await acute.print_and_wait([acute.phy_sex_title, "는 조금 걱정스러운 듯하다."]);
      await minoru.say_and_wait("마지막으로 얼굴을 보고 싶다면——");
      await acute.say_and_wait("괜찮단다.");
      await acute.print_and_wait([
        acute.child_sex_title,
        "는 앉은 채 단호하게 말한다.",
      ]);
      await acute.print_and_wait([
        "술렁이는 가슴이 오히려 ",
        acute.sex,
        "에게 용기를 준다.",
      ]);
      await acute.print_and_wait([
        minoru.phy_sex_title,
        "을(를) 향해 돌아선, 언제나 나약하던 ",
        acute.child_sex_title,
        "가 마침내 속마음을 털어놓는다——",
      ]);
      await acute.say_and_wait("바보라면——여기에도 한 명 더 있단다.");
      await acute.print_and_wait([
        "이 순간, 전당에 들어선 ",
        acute.child_sex_title,
      ]);
      await acute.print_and_wait("처음으로 「용기」를 얻었다.");
      era.drawLine();
      minoru.name = undefined;
      acute.name = undefined;
      await acute.print_and_wait("날아오르는 강철 새가 굉음을 연주한다.");
      await acute.print_and_wait(
        "강철 지붕 안의 사람들은 그 작별의 소리를 듣지 못한다.",
      );
      await acute.print_and_wait([
        "하늘의 구름을 올려다보며 ",
        acute.get_colored_name(),
        "은(는) 손에 든 봉투를 연다.",
      ]);
      await acute.print_and_wait("안에는 조금 빳빳한 분홍색 두꺼운 종이가 들어 있다.");
      await acute.print_and_wait("그 위에는 흘려 쓴 글씨가 빼곡하게 적혀 있다.");
      await you.say_and_wait([acute.get_colored_name(), "에게."]);
      await you.say_and_wait(
        "이 편지를 읽고 있을 때쯤이면 나는 파리행 비행기에 타고 있을 거야.",
      );
      await you.say_and_wait(
        "말없이 떠난 걸 용서해 줘. 어떤 얼굴로 떠난다는 말을 전해야 할지 몰랐어.",
      );
      await you.say_and_wait(
        "네 트레이너로서 길고도 재미있는 삼 년을 함께 보냈지.",
      );
      await you.say_and_wait("그 삼 년 동안 참 많은 추억을 만들었어.");
      await you.say_and_wait("나약한 나도 그동안 몇 번이나 네게 도움을 받았고.");
      await you.say_and_wait(
        "행운도 있었겠지. 하지만 무엇보다 네가 끊임없이 노력한 덕분에, 삼 년의 단련 끝에 전당에 입성할 수 있었어.",
      );
      await you.say_and_wait(
        "그래서 깨달았어——나는 아직 배워야 할 것이 너무 많다는 걸.",
      );
      await you.say_and_wait(
        "그래서 프랑스의 초대를 받아들이기로 했어. 더 앞서가는 해외의 우마무스메계에서 배우려고 해.",
      );
      await you.say_and_wait(
        "아쉽지만, 앞으로 삼 년 동안 나는 더 이상 네 트레이너로 있을 수 없어.",
      );
      await you.say_and_wait(
        "하지만 괜찮다면——삼 년 뒤에도 네가 아직 우마무스메의 세계에 있다면. 그때의 담당 트레이너 자리를 나를 위해 비워 두었으면 해.",
      );
      await you.say_and_wait(
        "내 사심을 용서해 줘——하지만 그 사심이 있기에 나는 이 삼 년 동안 각고의 노력을 기울일 거야.",
      );
      await you.say_and_wait("무슨 일이 있어도 너를 목표로 삼을게.");
      await you.say_and_wait(
        "정말 네 곁에 설 수 있는 트레이너가 되기 위해 노력할게.",
      );
      await you.say_and_wait("부디 몸조심해.");
      await you.say_and_wait(['——', you.get_colored_actual_name()]);
      era.drawLine();
      await acute.say_and_wait('……');
      await acute.say_and_wait("우리는——");
      await acute.say_and_wait("——틀림없는 바보로구나.");
      await acute.print_and_wait(
        "드넓은 하늘 아래에는 두 사람의 늠름한 모습만 남았다.",
      );
    };
    f.title = title;
    return f;
  })(),
  ws_leg: (() => {
    const title = "원더 어큐트의 무릎베개에서";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        "제대로 쉬지 못한 탓인지 오늘 아침은 도무지 졸음이 가시지 않는다.",
      );
      await era.printAndWait("큰일이다. 곧 트레이닝 시간인데.");
      await era.printAndWait([
        "어엿한 트레이너라면 ",
        acute.get_colored_name(),
        "에게 나태한 모습을 보일 수는 없다——",
      ]);
      await acute.say_and_wait([callname, '？']);
      await you.say_and_wait('——！？');
      await era.printAndWait("숨을 삼켰을 때는 이미 뒤에 서 있었다.");
      era.printButton(`「아, ${acute.name}!? 언제 왔어?」`, 1);
      await era.input();
      await acute.say_and_wait([
        "꽤 전부터 있었단다? 다만 ",
        callname,
        "이(가) 몹시 피곤해 보여서 말을 걸지 않고 있었지~",
      ]);
      await era.printAndWait([
        "온화한 말 아래 기척 없는 발걸음이 감춰져 있다. 빨간 체육복 차림의 ",
        acute.teen_sex_title,
        "는 흰 백합 옆 계단에 앉았다.",
      ]);
      await acute.say_and_wait([
        "트레이닝까지는 아직 조금 남았으니…… 쉬자꾸나, ",
        callname,
      ]);
      await era.printAndWait([
        acute.sex,
        "는 무릎이라는 극락을 가볍게 두드리고, 오른손을 흔들어 ",
        you.get_colored_name(),
        "을(를) 행복의 자리로 초대한다.",
      ]);
      await era.printAndWait([
        "……처음에는 ",
        you.get_colored_name(),
        "은(는) 거절했다.",
      ]);
      await era.printAndWait(
        "하지만 그곳은 정말 행복했다…… 상쾌한 민트 향기마저 감돌았다.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 일부러 ",
        acute.sex,
        "의 시선을 피하고 있었는지도 모른다.",
      ]);
      await era.printAndWait([
        "그래도 따뜻한 손바닥은 이미 ",
        you.get_colored_name(),
        "의 머리 위에 얹혀 있었다.",
      ]);
      await era.printAndWait([
        "이어서 흥얼거리는 노래가 ",
        you.get_colored_name(),
        "의 귓가에서 흔들린다——",
      ]);
      const buffer = [
        async () => {
          await acute.say_and_wait(
            "바람이 왔네~ 비가 왔네~ 천둥님이 북을 메고 오셨네~",
          );
          await acute.say_and_wait(
            "너도 둥둥~ 나도 둥둥~ 천둥님이 허리를 굽혔네~",
          );
          await acute.say_and_wait(
            "너도 쾅쾅~ 나도 쾅쾅~ 천둥님이 이를 드러냈네~",
          );
        },
        async () => {
          await acute.say_and_wait("크구나~ 작구나~");
          await acute.say_and_wait("하나 둘 셋 넷 다섯 여섯 일곱~");
          await acute.say_and_wait("크구나~ 작구나~");
          await acute.say_and_wait("도레미파솔라시~");
        },
        async () => {
          await acute.say_and_wait(
            "얼른 말하고 싶어, 날마다 함께 있고 싶다고~",
          );
          await acute.say_and_wait("십만 가지 궁금증을 함께 알아보고 싶다고~");
          await acute.say_and_wait("얼른 말하고 싶어, 커다란 진리를~");
          await acute.say_and_wait("친구가 가장 소중히 여기는 건 유대~");
          await acute.say_and_wait("내 마음은 네 곁에 있단다~");
        },
        async () => {
          await acute.say_and_wait(
            "달님이~ 흰 연꽃 같은 구름 사이를~ 누비네~",
          );
          await acute.say_and_wait("밤바람이 즐거운 노랫소리를 실어 오네~");
        },
      ];
      await get_random_entry(buffer)();
      await era.printAndWait('……………………');
      await era.printAndWait("잘 부르는 노래는 아니다.");
      await era.printAndWait("굳이 말하면 노래하는 사람은 음정이 조금 빗나간다.");
      await era.printAndWait("그래도…… 무릎베개에 누워 그런 노래를 듣고 있자니, ");
      await era.printAndWait("마음 깊은 곳에서부터 안심이 된다——");
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = "달은 뜨지 않았다";
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} title プレイヤーの肩書き
     */
    const f = async (acute, you, title) => {
      await era.printAndWait(
        "실패 자체는 부끄러운 일이 아니다. 다시 일어서면 된다.",
      );
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 그 격언을 굳게 믿었다.",
      ]);
      await era.printAndWait([
        "추문, 부상과 질병, 과실, 소문. 칠흑 같은 것들이 ",
        you.get_colored_name(),
        "과(와) ",
        acute.get_colored_name(),
        "의 하늘을 뒤덮고 있었다.",
      ]);
      await era.printAndWait([
        "그런데도 ",
        you.get_colored_name(),
        "은(는) 믿었다. 다음 레이스에서 이기면 승리의 영광이 모든 그림자를 걷어 낼 것이라고.",
      ]);
      await era.printAndWait([
        "그를 위해 저녁 무렵 ",
        you.get_colored_name(),
        "은(는) 트레센을 나서 상점가에 트레이닝 용품을 사러 갔다.",
      ]);
      await era.printAndWait([
        "사람들은 ",
        you.get_colored_name(),
        "을(를) 알아보았다.",
        title,
        "트레이너인 ",
        you.get_colored_name(),
        ". 조롱과 경멸, 더러운 말이 끊임없이 쏟아졌다.",
      ]);
      await era.printAndWait([
        "솔직히 ",
        you.get_colored_name(),
        "은(는) 상대할 생각도 없었다. 하지만 적의는 쇼핑을 방해했고, 가게를 나설 때쯤에는 하늘이 이미 어두워져 있었다.",
      ]);
      await era.printAndWait([
        "원래라면 ",
        you.get_colored_name(),
        "은(는) 큰길을 따라 트레센으로 돌아올 수 있었다.",
      ]);
      await era.printAndWait([
        "원래라면 ",
        you.get_colored_name(),
        "은(는) 그 골목에 들어가지 않아도 됐다.",
      ]);
      await era.printAndWait("원래라면——");
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');

      await acute.print_and_wait(
        "내가 달려갔을 때, 골목에는 작은 칼과 흰 천, 핏물 웅덩이만 있었단다.",
      );
      await acute.print_and_wait(
        "그리고 피를 뒤집어쓰고 한쪽이 짓밟힌 케이크 상자도.",
      );
      await acute.print_and_wait(
        "쏟아진 케이크가 범인의 신발 밑창에 묻어, 흰 천 옆에서 골목 밖까지 이어져 있었어.",
      );
      await acute.print_and_wait(
        "케이크 자국을 따라 골목 밖으로 나가자, 두 손에 수갑을 찬 채 경찰차에 태워지려는 술 취한 사람이 있었단다.",
      );
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait("그날 밤, 상점가의 네온 불빛 아래.");
      await acute.print_and_wait([
        "달은 ",
        { color: 'red', content: "뜨지 않았다." },
      ]);
      era.println();
      await era.printAndWait([
        "분노한 팬의 보복을 당해 ",
        you.get_colored_name(),
        "은(는) 결말을 맞았다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
};
