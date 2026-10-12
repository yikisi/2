/**
 * @file 孕袋関連イベント
 * @author 幽白書
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require('#/i18n/ko-KR/snippets');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      "의 학업을 지도한 뒤, ",
      chara.get_colored_name(),
      "은(는) 뺨을 붉히며 ",
      you.get_colored_name(),
      "을(를) 바라보았다. 다음은 성교육 시간이다.",
    ]);
    await printAndWait([
      you.get_colored_name(),
      "이(가) 지도하는 쪽인데도, ",
      chara.get_colored_name(),
      "쪽이 오히려 ",
      you.get_colored_name(),
      "의 몸을 더 잘 알고 있다.",
      chara.get_colored_name(),
      "의 손안에서, ",
      you.get_colored_name(),
      "은(는) 자신의 민감한 곳과 만졌을 때의 부끄러운 반응을 좋든 싫든 철저히 배우게 되었다.",
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      "은(는) ",
      you.get_colored_name(),
      "을(를) 고목의 빈 구멍 옆으로 데려갔다.",
    ]);
    await printAndWait([
      you.get_colored_name(),
      `은(는) ${chara.sex}이(가) 요즘 쌓인 스트레스를 풀고 싶을 뿐이라고 생각한 순간, 그루터기 위로 밀쳐졌다.`,
    ]);
    await printAndWait([
      "그러고는 ",
      you.get_colored_name(),
      "의 하반신 옷이 천천히 벗겨지고 뜨거운 살기둥이 입구에 닿았다.",
    ]);
    await printAndWait([
      "소리를 내면 나무 구멍의 메아리로 ",
      you.get_colored_name(),
      "의 목소리가 학원 전체에 울릴 것이다.",
    ]);
    await printAndWait([
      `담당 ${chara.uma_sex_title}에게 고목의 빈 구멍에서 범해졌다는 사실이 알려지면, `,
      you.get_colored_name(),
      "의 트레이너로서의 명성은 끝이다……",
    ]);
    await printAndWait("물론 그런 것은 진작 남아 있지도 않다.");
    await printAndWait([
      you.get_colored_name(),
      "은(는) 고목의 빈 구멍 옆에서 신음했다. ",
      get('flag:35') === 2 ? "성노예" : "임신주머니",
      "인 ",
      you.get_colored_name(),
      "에게는 이것도 평소와 같은 하루일 뿐이다.",
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      "은(는) ",
      you.get_colored_name(),
      "의 손을 잡고 안뜰로 데이트를 나갔다.",
    ]);
    await printAndWait([
      you.get_colored_name(),
      "은(는) 두 다리를 다문 채 허벅지에서 하얀 액체를 천천히 흘리고 있다. 마스크는 무언가의 액체에 젖어 입과 코에 달라붙어 있었다. 발정한 냄새에 지나가던 ",
      chara.uma_sex_title,
      "들까지 뺨을 붉히며 코를 막았다.",
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      "옥상에서의 공개 노출……이때 누군가 고개를 들면, ",
      you.get_colored_name(),
      "은(는) 견딜 수 없을 것이다.",
    ]);
    await printAndWait(
      `옥상 아래, 트레이닝장을 달리는 ${chara.uma_sex_title}들.`,
    );
    await printAndWait(
      "들키면 분명 가 버리고 말 것이다. 분출한 애액이 비처럼 아래의 사람들에게 떨어진다……",
    );
    await printAndWait([
      "하지만 ",
      chara.get_colored_name(),
      "에게 한쪽 다리를 들려 힘을 줄 수 없는 자세가 된 ",
      you.get_colored_name(),
      "은(는) 옥상의 보호망에 의지할 수밖에 없고, 철선이 가슴에 붉은 자국을 남겼다.",
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait("아아, 나와 버렸어……");
      await printAndWait([
        `음부의 애액이 넘치기 전에 아래에 있는 ${chara.uma_sex_title}의 머리에 떨어진 것은 `,
        you.get_colored_name(),
        "의 젖꼭지에서 가느다란 흐름으로 나온 젖이었다.",
      ]);
    }
  },
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `다른 트레이너들이 담당 ${chara.uma_sex_title}에게 마지막 말을 건네는 동안, `,
        you.get_colored_name(),
        "은(는) ",
        chara.get_colored_name(),
        "의 육봉을 입에 머금고 있었다.",
      ]);
      await printAndWait([
        "레이스 전의 열기에 취한 ",
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        "의 단단한 아래쪽은 당연히 처리해야 한다. 그것도 ",
        get('flag:35') === 2 ? "성노예" : "임신주머니",
        "인 ",
        you.get_colored_name(),
        "에게 빠질 수 없는 의무다.",
      ]);
      await printAndWait([
        "정액을 모두 삼킨 뒤, ",
        you.get_colored_name(),
        "은(는) ",
        chara.get_colored_name(),
        "의 육봉에 레이스의 무사를 기원하는 입맞춤을 남겼다.",
      ]);
    };
    f.title = "레이스 전에";
    return f;
  })(),
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        "은(는) ",
        child.get_colored_name(),
        "와(과) ",
        father.get_colored_name(),
        "에게 빈틈없이 끼여 있었다.",
      ]);
      await printAndWait([
        "뜨겁게 달아오른 두 육봉이 ",
        you.get_colored_name(),
        "의 앞뒤를 동시에 공략하고, 찌를 때마다 새로운 쾌감이 달린다.",
      ]);
      await printAndWait([
        "몽롱한 가운데, ",
        you.get_colored_name(),
        "은(는) ",
        child.get_colored_name(),
        "이(가) 태어났을 때를 떠올렸다——",
      ]);
      await you.used_to_say_and_wait(
        "언젠가 자식이 다 자라면……자식과 그 아버지에게 함께 쓰이고, 사이에 끼인 채 수컷의 육봉에 빠져든다……",
        true,
      );
      await printAndWait("그 망상이 지금 현실이 되어 있다……");
    };
    f.title = "부모와 자식의 합동 봉사";
    return f;
  })(),
  /**
   * 親子丼の睡姦で目覚める
   * @author 幽白書
   * @param {CharaTalk} chara 子の父
   * @param {CharaTalk} child 子
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname_c 子からプレイヤーへの呼び名
   */
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait(["한밤중, ", you.get_colored_name(), "은(는) 벌떡 일어났다"]);
    await printAndWait("임신주머니인 이상 잠자는 시간에도 의무를 잊어서는 안 된다");
    await printAndWait("다만 오늘 밤 손님이 조금 특별할 뿐이다");
    println();
    await printAndWait([
      you.get_colored_name(),
      "은(는) 앞뒤에서 서로 다른 박자의 충격을 받고 있었다",
    ]);
    await printAndWait([
      child.get_colored_name(),
      "은(는) ",
      callname_c,
      "하고 낮게 부르며 허리를 흔들고, 찌를 때마다 ",
      you.get_colored_name(),
      "의 가장 깊은 곳까지 닿는다",
    ]);
    await printAndWait([
      you.get_colored_name(),
      "은(는) 침대에 무릎을 꿇고, 자기 자식에게 짐승 같은 자세로 범해지는 감각을 부끄러움과 함께 맛보았다",
    ]);
    await printAndWait(
      "어머니로서의 긍지——그런 것이 있었다 한들——는 이제 완전히 사라졌다",
    );
    await printAndWait([
      "암캐처럼 엉덩이를 흔들며 괴롭힘을 바라는 모습은 입으로 봉사하고 있는 ",
      chara.get_colored_name(),
      "의 웃음거리도 되었다",
    ]);
    await printAndWait([
      you.get_colored_name(),
      "은(는) 입 안의 육봉을 더 깊이 머금고 짙은 냄새 속에 얼굴을 파묻어 현실에서 달아났다",
    ]);
    println();
    await printAndWait([
      "얼마 지나지 않아, ",
      chara.get_colored_name(),
      "와(과) ",
      child.get_colored_name(),
      "은(는) 짙은 정액을 쏟아냈다",
    ]);
    await printAndWait([
      you.get_colored_name(),
      "은(는) 입 안의 정액을 뱉어 손에 바르고, 손가락을 음부에 넣어 천천히 휘저은 뒤 넘친 백탁액을 다른 손으로 떠서 삼켰다",
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        "의 정액과 ",
        child.get_colored_name(),
        "의 정액이 섞인다. 어느 쪽이 먼저 임신시킬까?",
      ]);
      await printAndWait([
        you.get_colored_name(),
        "은(는) 상상에 빠져 눈앞의 ",
        chara.get_colored_name(),
        "와(과) ",
        child.get_colored_name(),
        "의 육봉이 그 행동에 다시 일어서고 있다는 것을 알아차리지 못했다",
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        "의 행동을 보고, ",
        chara.get_colored_name(),
        "와(과) ",
        child.get_colored_name(),
        "의 육봉은 다시 일어섰다",
      ]);
    }
    await printAndWait("밤은 아직 계속된다……");
  },
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {string} your_title 現在の肩書（XX性奴隷 / XX孕袋）
     * @param {string} penis_desc 陰茎の形容
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([
        you.get_colored_name(),
        "은(는) 뺨을 두드리는 온기에 눈을 떴다.",
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          "밤새 ",
          you.get_colored_name(),
          "을(를) 괴롭힌 ",
          chara.get_colored_name(),
          "은(는) 또 약을 먹고, 굳이 ",
          chara.sex,
          "의 고귀한 ",
          penis_desc,
          " 육봉을 자명종으로 삼았다.",
        ]);
      } else {
        await printAndWait([
          "밤새 ",
          you.get_colored_name(),
          "을(를) 괴롭힌 ",
          chara.get_colored_name(),
          "은(는) 또 굳이 ",
          chara.sex,
          "의 고귀한 ",
          penis_desc,
          " 육봉을 자명종으로 삼았다.",
        ]);
      }
      await printAndWait([
        '——',
        you.get_colored_name(),
        "에게 아직 다하지 않은 의무가 있음을 상기시킨다. 아침부터 밤까지 같은 일의 반복이다.",
      ]);
      ret.push(
        await degeneration_to_evil("순순히 머금는다", "못마땅한 듯 얼굴을 돌린다"),
      );
      if (ret[0] === 1) {
        await printAndWait([
          "수고를 들일 것도 없이, ",
          you.get_colored_name(),
          "이(가) 입술을 조금 벌린 순간 육봉은 기다리지 못하고 들어왔다.",
        ]);
        await printAndWait([
          chara.get_colored_name(),
          "이(가) 마음대로 하는 동안, ",
          you.get_colored_name(),
          "은(는) 순종적으로 입술과 혀로 봉사했다.",
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          "은(는) 오늘도 자신의 의무를 잊지 않는다……",
        ]);
      } else {
        await printAndWait([
          "이 지경으로 타락해도, ",
          you.get_colored_name(),
          "에게는 긍지, 적어도 자존심은 있다——",
        ]);
        await printAndWait([
          you.get_colored_name(),
          "이(가) 살짝 얼굴을 돌리며 그렇게 주장하려 했을 때, 이미 인내심이 바닥난 주인 ",
          chara.get_colored_name(),
          "은(는) 뺨을 때려 지금의 처지를 상기시켰다.",
        ]);
        await printAndWait([
          "그러고는 ",
          chara.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "의 협조 따위는 기대하지 않고 혼자 이 아침 식사를 시작했다.",
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          "은(는) 오늘도 의무를 철저히 주입받았다……",
        ]);
      }
      setColor();
      return ret;
    };
    f.title = "다음 날 아침의 의무";
    return f;
  })(),
  /**
   * 性奴隷 / 孕袋の仕事イベント
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} sex 彼女 or 彼
   * @param {string} they 彼女たち or 彼ら
   * @param {string} slave 性奴隷 or 孕袋
   */
  work(you, uma, sex, they, slave) {
    print([
      "【오늘도 ",
      you.get_colored_name(),
      "은(는) ",
      slave,
      "의 일을 명령받았다】",
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          "은(는) 레이스장 선수 대기실로 끌려가 패배한 ",
          uma,
          "들을 위로했다.",
        ]);
        print([
          "문이 닫히자, ",
          you.get_colored_name(),
          "의 구색뿐인 옷은 완전히 벗겨지고 격렬한 육봉에 몸이 흔들렸다.",
        ]);
        print([
          uma,
          "들은 패배의 울분을 토해 내며, ",
          you.get_colored_name(),
          "의 몸에 손톱자국과 잇자국을 남겼다……",
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          "은(는) 레이스장 선수 대기실로 끌려가 멋진 달리기를 보여 준 ",
          uma,
          "들을 위로했다.",
        ]);
        print([
          "다른 선수보다 먼저 우승한 ",
          uma,
          "이(가) 뛰어들었다.",
          you.get_colored_name(),
          "을(를) 밀어 넘어뜨리기 전에 인사까지 했다.",
        ]);
        print([
          sex,
          "은(는) 웃으며 허리를 비틀어, ",
          you.get_colored_name(),
          "의 자궁에 소변과 함께 정액을 쏟아냈다……",
        ]);
      },
      () => {
        print([
          "일하기 전에, ",
          you.get_colored_name(),
          "은(는) 화장실에 가려 했다.",
        ]);
        print([
          "시작하기 전에 대여섯 개의 육봉이 ",
          you.get_colored_name(),
          "의 앞길을 막았다.",
        ]);
        print([
          you.get_colored_name(),
          "은(는) 요의를 참으며 ",
          uma,
          "들에게 봉사하다 곧 백탁액 속에서 심하게 실금했다……",
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          "은(는) 사이가 좋아 보이는 ",
          uma,
          "두 명에게 지명받았다.",
        ]);
        print([
          they,
          "은(는) 육봉을 세워 앞뒤에서 ",
          you.get_colored_name(),
          "의 아래쪽을 범했다.",
        ]);
        print([
          "두 겹의 강한 자극 속에서, ",
          you.get_colored_name(),
          "은(는) 익숙한 질내사정의 감각과 함께 크게 절정에 달해 의식을 잃었다……",
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          "은(는) ",
          uma,
          "의 결의 대회에 참가하라는 명령을 받았다.",
        ]);
        print([
          "모임의 한 순서로, ",
          uma,
          "들이 줄을 서서 ",
          you.get_colored_name(),
          "의 안팎 구멍을 사용했다.",
        ]);
        print([
          "언제나 한 개에서 세 개가 몸속을 드나들어, 완전히 채워지기도 전에 ",
          you.get_colored_name(),
          "은(는) 쾌감에 의식이 날아갔다……",
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          "은(는) 트레이닝장에서 함께 연습하던 ",
          uma,
          "을(를) 맞이했다.",
        ]);
        print([
          sex,
          "은(는) ",
          you.get_colored_name(),
          "의 옷을 벗기고 얼룩투성이인 아래쪽 따위는 개의치 않은 채 곧장 삽입했다.",
        ]);
        print([
          uma,
          "은(는) 찌르면서 놀리듯 물었다. 매일 트레이닝 전에 담당에게 하루 치를 안에 받고 있느냐고.",
        ]);
        print([
          "극도의 쾌감과 치욕 속에서, ",
          you.get_colored_name(),
          "은(는) 의식을 잃었다……",
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          '은(는) 출근하던 중 초등부의',
          uma,
          '에게 가로막혔다.',
        ]);
        print([
          '거절할 틈도 없이, 아직 어린 ',
          uma,
          '는 나이에 어울리지 않는 거대한 성기를 꺼냈다.',
        ]);
        print([
          '개조된 몸의 본능에 굴복하여 ',
          you.get_colored_name(),
          '은(는) 밀려서 땅에 깔린 채, 은밀한 부위가 거대한 물체에 드나드는 감각을 맛보았다……',
        ]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([
          you.get_colored_name(),
          "은(는) ",
          uma,
          "들에게 대 위에 묶여 몸을 앞으로 기울이자, 구멍이 뚫린 판이 머리와 손, 커다란 가슴을 고정했다.",
        ]);
        print([
          you.get_colored_name(),
          "의 몸은 ",
          they,
          "에게 마음대로 주물러지고, 가슴은 세게 짜여 하얀 젖을 뿜었다.",
        ]);
        print([
          uma,
          "들은 짝을 이루어 구멍 사용과 착유를 번갈아 하다가 마지막에는 함께 ",
          you.get_colored_name(),
          "의 가슴과 얼굴에 정액을 쏟아냈다……",
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} taste 秋川やよい / キタサンブラック
     * @param {CharaTalk} minoru 駿川たづな / ライスシャワー
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(["응……크읏……으……"]);
      println();
      await printAndWait([
        "트레센 학원 안에는 평소 아무도 가까이 가지 않는 곳이 있다.",
      ]);
      await printAndWait(["건초가 쌓여 있고 울타리로 둘러싸인 한쪽 구석."]);
      await printAndWait([
        "무언가 동물을 기르는 곳처럼 보이지만 생물의 기척은 한 번도 없었다.",
      ]);
      await printAndWait(["이곳은 무엇을 위해 있는 걸까?"]);
      await printAndWait([you.get_colored_name(), "도 한때는 의문을 품었다."]);
      println();
      await printAndWait([
        "지금, ",
        you.get_colored_name(),
        "은(는) 이곳의 용도를 알게 되었다.",
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        "처벌! 임신주머니의 의무를 피했으니 엄하게 벌하겠네!",
      ]);
      await minoru.say_as_unknown_and_wait([
        "본래 임신주머니가 되는 것 자체가 가장 무거운 벌입니다……트레센과 ",
        taste.uma_sex_title,
        "의 미래를 위해 힘쓰는 가운데 트레이너님께서 자신의 잘못을 되돌아보시리라 기대했습니다. 하지만 아무래도 아직 강한 약이 필요한 모양이군요.",
      ]);
      println();
      await printAndWait(["두 사람의 말이 끝나자, "]);
      await printAndWait([
        "이미 두 사람에게 쓰여 하얀 액체가 아직 가늘게 흐르는, 빨갛게 부은 ",
        you.get_colored_name(),
        "의 음부에 새로운 손님이 찾아왔다.",
      ]);
      const ret = await degeneration_to_evil("복종한다", "굴복하지 않는다", false);
      await printAndWait([
        "안대와 입마개를 착용한 ",
        you.get_colored_name(),
        "은(는) 찾아온 사람이 누구인지 알 수 없다.",
      ]);
      await printAndWait([
        "목소리로 구별하려 해도 방음 헤드폰에 덮인 귀로는, ",
        taste.uma_sex_title,
        "의 뛰어난 청력으로도 몸속에서 울리는 소리밖에 듣지 못한다.",
      ]);
      println();
      await printAndWait(["츄팟……츄팟……"]);
      println();
      await printAndWait(["끈적하게 육체가 부딪히는 소리."]);
      await printAndWait([
        "그리고 뒤쪽의 육봉을 놓기 싫다는 듯 입구에서 나는 입맞춤 소리.",
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            "그 쪽 하는 소리는 커서, ",
            you.get_colored_name(),
            "은(는) 이 육봉이야말로 몸의 지배자라고 생각할 뻔했다——이상할 것도 없다. 오늘 밤, 한 개가 들어올 때마다 ",
            you.get_colored_name(),
            "은(는) 같은 생각을 했다.",
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            "그 쪽 하는 소리는 커서, ",
            you.get_colored_name(),
            "은(는) 이 육봉이야말로 몸의 지배자라고 생각할 뻔했다——",
            you.get_colored_name(),
            "은(는) 그렇게 생각하고 싶지 않았지만, 약에 흐려진 머리는 그 사실을 받아들이게 했다.",
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(["그팟……그팟……"]);
      println();
      await printAndWait(["모든 방어는 언젠가 뚫리는 날을 맞는다."]);
      await printAndWait([
        "그렇다면 방어란 뚫리기 위해 존재한다는 등식도 대체로 성립한다.",
      ]);
      await printAndWait([
        "그러므로 도도한 척하는 좁은 길은 ",
        taste.uma_sex_title,
        "님의 씩씩한 육봉에 정복감을 주기 위해 차가운 척하다가, 닿는 순간 휘감겨 열녀에서 녹아내린 암컷으로 완벽하게 바뀐다. 휘감기는 소리 또한 몸의 주인이 보이는 태도를 드러낸다.",
      ]);
      await printAndWait([
        "임신하고 싶다, 견딜 수 없이 임신하고 싶다. 멀쩡한 트레이너인 척했던 것은 ",
        taste.uma_sex_title,
        "님이 자신을 맛볼 때 감정적인 만족까지 누릴 수 있게 하기 위해서였다.",
      ]);
      await printAndWait([
        "그 탓에 ",
        taste.uma_sex_title,
        "님의 정자에 범해져 자신이 얼마나 비천한 암컷인지 배울 기회를 잃었다. 얼마나 손해인가.",
      ]);
      println();
      await printAndWait([
        "다행히 자비로운 ",
        taste.uma_sex_title,
        "님은 어리석은 임신주머니에게 기회를 주신다.",
      ]);
      println();
      await printAndWait(["똑, 똑……똑, 똑……"]);
      println();
      await printAndWait([
        "자궁 입구를 예의 바르게 두드리는 육봉은 관문이 무혈 개성하기를 기다린다.",
      ]);
      await printAndWait([
        "온몸의 기관도 조직도 세포도 이미 완전히 복종하고 있다.",
      ]);
      await printAndWait([
        "지금의 찌르기는 마지막 방벽에 대한 충격이라기보다 형식적인 노크다.",
      ]);
      await printAndWait([
        "저항? 임신주머니의 몸이 ",
        taste.uma_sex_title,
        "님의 침범에 저항할 리 없다. 그것은 유전자 깊이 새겨진 논리다.",
      ]);
      println();
      await printAndWait(["그리고 가장 기다리던 소리."]);
      await printAndWait([
        "아아, ",
        you.get_colored_name(),
        "은(는) 다리를 더욱 벌렸다.",
      ]);
      await printAndWait([
        "어느새 ",
        you.get_colored_name(),
        "을(를) 교배대에 묶어 두었던 벨트는 풀려 있었다.",
      ]);
      await printAndWait(["본래 그 벨트는 필요하지도 않았다."]);
      await printAndWait([
        "임신주머니가 ",
        taste.uma_sex_title,
        "님의 육봉을 거스를 리 없다.",
      ]);
      await printAndWait([
        "임신주머니가 ",
        taste.uma_sex_title,
        "님이 주시는 것을 거부할 리 없다.",
      ]);
      println();
      await printAndWait(["마침내 달리기보다 가슴을 뛰게 하고 첫사랑보다 마음을 흔드는 "]);
      await printAndWait([
        taste.uma_sex_title,
        "님의 침범이 끝을 향한다.",
      ]);
      println();
      await printAndWait(["슈……슈르르르르……"]);
      println();
      await printAndWait(["왔다."]);
      await printAndWait(["이것이다."]);
      await printAndWait([you.get_colored_name(), "은(는) 마음속으로 확신했다."]);
      await printAndWait(["이것이 자신의 자궁에 들어와, "]);
      await printAndWait(["원래 주인인 난자를 철저히 복종시키고, "]);
      await printAndWait([
        "납작 엎드려 발을 핥고 모체의 모든 것을 바칠 만큼 아양 떨게 만드는, ",
        taste.uma_sex_title,
        "님의 고귀한 씨앗인 정액이다.",
      ]);
      await printAndWait(["정자는 끊임없이 뿜어져 나와, "]);
      await printAndWait([
        you.get_colored_name(),
        "의 몸 구석구석을 유린하고 범해 간다.",
      ]);
      await printAndWait(["이것이야말로 임신주머니의 행복이다."]);
      println();
      await printAndWait(['——————']);
      println();
      await printAndWait(["아쉽게도 즐거운 시간은 영원히 계속되지 않는다."]);
      await printAndWait(["아무리 긴 사정에도 끝은 있다."]);
      await printAndWait([
        "절정과 수태의 기쁨에 잠긴 망가진 임신주머니의 뇌보다, 육봉님과 직접 맞닿은 질 쪽이 더욱 초조하게 기둥을 휘감으며 머물러 달라고 애원한다.",
      ]);
      await printAndWait(["아니, 적어도……상대의 모양은 기억해 두고 싶다."]);
      await printAndWait([
        "…………설령 오 초 뒤 다음 한 개가 들어오는 순간 잊어버릴 기억일지라도.",
      ]);
      println();
      await printAndWait(
        "【정액에 젖어 요염한 분홍빛을 띤 음문이 조용히 모양을 바꿨다】",
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: "임신주머니의 의무에 대한 징계" }];
    return f;
  })(),
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(["츄팟……츄팟……"]);
      println();
      await printAndWait(["다시 밤이 찾아와 익숙한 곳으로 돌아왔다."]);
      await printAndWait([
        you.get_colored_name(),
        "은(는) 다시 복면과 입마개를 착용하고, 익숙한 밤이 또 시작된다.",
      ]);
      await printAndWait([
        "임신주머니의 의무를 다하지 않으면 다시 이곳에 오게 된다는 것을 알고 있었다.",
      ]);
      await printAndWait([
        "담당도 학원의 수강생도 선생도 이 「작은 수고」라면 기꺼이 도와주리라는 것을 알고 있었다.",
      ]);
      await printAndWait([
        "거기서 멈췄다면 아이의 아버지를 직접 고를 수 있었다는 것을 알고 있었다.",
      ]);
      if ((await degeneration_to_evil("복종한다", "굴복하지 않는다")) === 1) {
        await printAndWait([
          "그러니 일부러 여기까지 온 ",
          you.get_colored_name(),
          "의 목적은 이미 분명하겠지.",
        ]);
        await printAndWait([
          "그날의 교접을 잊을 수 없다. 모든 것을 남에게 맡기는 쾌감을 잊을 수 없다.",
        ]);
        await printAndWait([
          "성욕 처리 도구로 취급받는 감각을 잊을 수 없다.",
        ]);
      } else {
        await printAndWait([
          "그러니 여기까지 온 ",
          you.get_colored_name(),
          "의 말로도 분명하겠지——",
          you.get_colored_name(),
          "은(는) 멍하니 생각했다.",
        ]);
        await printAndWait([
          "그날의 교접을 잊을 수 없는 걸까. 모든 것을 남에게 맡기는 쾌감을 잊을 수 없는 걸까.",
        ]);
        await printAndWait(["아니면 성욕 처리 도구로 취급받는 감각일까."]);
        await printAndWait(["——약으로 뜨거워진 귓가에 그런 속삭임이 들린다."]);
      }
      setColor();
      println();
      await printAndWait(["꾹"]);
      await printAndWait([
        "세게 짓누르는 감촉이 통증과 더 큰 쾌감을 젖꼭지에서 ",
        you.get_colored_name(),
        "의 뇌로 보낸다. 안 된다, 봉사하는 도중에 한눈팔아서는.",
      ]);
      if (is_teammate) {
        await printAndWait([
          "그런데 뒤에 있는 ",
          uma_sex_title,
          "님의 육봉은 어딘가 익숙하다.",
        ]);
        await printAndWait([
          "보통이라면 문제없다. 임신주머니로서 학원 전체의 ",
          uma_sex_title,
          "에게 쓰여 왔으니.",
        ]);
        await printAndWait(["하지만……이 익숙함은."]);
        await printAndWait(["설마 뒤에 있는 ", uma_sex_title, "은(는) 자신의 담당?"]);
        await printAndWait(["정체를 숨긴 채 담당에게 쓰인다."]);
        await printAndWait([
          "어쩐지 ",
          you.get_colored_name(),
          "은(는) 빼앗긴 듯한 긴장감……과 흥분을 느꼈다.",
        ]);
        await printAndWait(["분명 화가 났을 것이다. 분명 분개하고 있을 것이다."]);
        await printAndWait(["자신의 트레이너, 자신의 성노예, 자신의 임신주머니가 "]);
        await printAndWait([
          "자기 아이를 임신하려 하지 않고 정체 모를 상대들에게 돌려 쓰이는 쪽을 택했으니.",
        ]);
      } else {
        await printAndWait([
          "그런데 뒤에 있는 ",
          uma_sex_title,
          "님의 육봉은 어째서인지 유난히 조급하다.",
        ]);
        await printAndWait([
          "보통이라면 문제없다. 임신주머니로서, 욕망의 처리 도구로서 아무리 난폭하게 쓰여도 당연하니까.",
        ]);
        await printAndWait(["하지만……이토록 조급하고 분노까지 어려 있다."]);
        await printAndWait([
          "설마 뒤에 있는 ",
          uma_sex_title,
          "은(는) 자신의 팬?",
        ]);
        await printAndWait(["정체를 숨긴 채 팬에게 쓰인다."]);
        await printAndWait([
          "어쩐지 ",
          you.get_colored_name(),
          "은(는) 빼앗긴 듯한 긴장감……과 흥분을 느꼈다.",
        ]);
        await printAndWait(["분명 화가 났을 것이다. 분명 분개하고 있을 것이다."]);
        await printAndWait(["동경하던 트레이너, 동경하던 상대가 "]);
        await printAndWait([
          "이토록 비천한 모습으로, 아담한 ",
          uma_sex_title,
          "의 순수한 연심을 짓밟고 있다.",
        ]);
      }
      println();
      await printAndWait(["화가 났겠지. 분개하겠지."]);
      await printAndWait([
        "그러니 누구에게나 다리를 벌리는 이 암퇘지 안에 가차 없이 씨를 뿌려라.",
      ]);
      await printAndWait([
        "이 음란한 구멍을 망가뜨려라. 임신시켜라, 임신시켜라, 임신시켜라.",
      ]);
      await printAndWait(["철저하게 육봉의 노예로 바꿔라."]);
      println();
      if (is_teammate) {
        await printAndWait([
          "그렇게 생각하자, ",
          you.get_colored_name(),
          "의 허리는 더욱 춤췄다.",
        ]);
        await printAndWait([
          "얼마 지나지 않아 그 육봉은 한순간 멈췄다가 ",
          you.get_colored_name(),
          "이(가) 가장 기다리던 백탁액을 쏟아냈다.",
        ]);
        await printAndWait(["아아……아쉽다."]);
        await printAndWait([
          "무언가 빗나갔다는 예감이 ",
          you.get_colored_name(),
          "의 가슴에 떠오른다.",
        ]);
        await printAndWait([
          "하지만 다음의 익숙한 육봉 감촉이 다시 ",
          you.get_colored_name(),
          "을(를) 딴생각도 못 할 만큼 찔렀다.",
        ]);
        println();
        await printAndWait([
          "다음 아이는 사랑하는 담당 ",
          uma_sex_title,
          "에게서 받자고 생각했다.",
        ]);
        await printAndWait([
          "몽롱한 가운데, ",
          you.get_colored_name(),
          "은(는) 지킬 수 있을지 모를 결심을 다졌다.",
        ]);
      } else {
        await printAndWait([
          "그렇게 생각하자, ",
          you.get_colored_name(),
          "의 허리는 더욱 춤췄다.",
        ]);
        await printAndWait(["하지만 공격을 서두르다가 방어를 소홀히 했는지, "]);
        await printAndWait(["아니면 그저 시간이 겹쳤을 뿐인지."]);
        await printAndWait([
          "진심을 내보이려던 순간, 뒤쪽이 굳어지며 구멍 안에 대량의 백탁액을 쏟았다.",
        ]);
        await printAndWait(["아아……아쉽다."]);
        await printAndWait([
          "공허한 상실감이 ",
          you.get_colored_name(),
          "의 가슴에 떠오른다.",
        ]);
        await printAndWait([
          "하지만 다음의 익숙한 육봉 감촉이 다시 ",
          you.get_colored_name(),
          "을(를) 딴생각도 못 할 만큼 찔렀다.",
        ]);
        println();
        await printAndWait(["다음에는 더 힘내 줘."]);
        await printAndWait([
          "상대의 정자가 더욱 사나운 육봉에 구멍에서 긁혀 나오는 감각을 맛보며, ",
          you.get_colored_name(),
          "은(는) 말없는 축복을 보냈다.",
        ]);
      }
      println();
      await printAndWait(
        "【정액에 젖어 요염한 분홍빛을 띤 음문이 조용히 모양을 바꿨다】",
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: "임신주머니의 의무에 대한 징계" }];
    return f;
  })(),
  report_preg_duty: (() => {
    const title = "책무";
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        "은(는) 아랫배의 음문에 나타난 임신 문양을 바라보다 세면장으로 뛰어가 토했다.",
      ]);
      await printAndWait([
        "삶의 발걸음을 흔들어 놓는 이 작은 생명에게,",
        you.get_colored_name(),
        "은(는)——",
      ]);
      const ret = await degeneration_to_evil(
        "기쁘게 찾아오기를 기다린다",
        "어쩔 수 없이 받아들인다",
      );
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), "은(는) 기쁜 마음으로 상상했다."]);
        await printAndWait("아이가 생긴 뒤의 미래, 태어난 뒤의 교육……");
        await printAndWait([
          "하지만,",
          you.get_colored_name(),
          "이(가) 마음속으로 가장 궁금해하는 것은 역시",
        ]);
        println();
        await printAndWait("아이의 아버지는 누구일까?");
        await printAndWait(
          `며칠 전 패배한 뒤 온몸에 잇자국을 남기며 울분을 풀었던 ${father.uma_sex_title}？`,
        );
        await printAndWait(
          `아니면 이겨서 기쁜 나머지 자궁 안까지 소변을 쏟았던 ${father.uma_sex_title}？`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `혹은 매일 트레이닝 전에 음부에 하루 치를 채워 넣고, 복도에 이따금 백탁액을 떨어뜨리며 트레이닝장으로 향하게 하는 담당 ${father.uma_sex_title}？`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            '아니면, 겉보기엔 아직 어린아이인데도, 엄마 뱃속에서 나온 길을 기억하는 듯, 항상 무능한 엄마를 황홀한 표정을 짓는 암퇘지로 만들어 버리는, 마음씨 따뜻한 보물일까?',
          );
        }
        println();
        await printAndWait("누구든, 새로운 생명의 탄생은 기쁜 일이다.");
        await printAndWait([
          "다만,",
          you.get_colored_name(),
          "이(가) 가장 걱정하는 것은 역시……",
        ]);
        println();
        await printAndWait("(아이가 태어날 때까지 임신주머니의 의무는……)");
        println();
        await printAndWait([
          "한 문장을 끝까지 생각하기도 전에 뒤에서 오는 충격이 ",
          you.get_colored_name(),
          "의 생각을 끊었다",
        ]);
        await printAndWait(
          `상대는 의사 따위는 신경 쓰지 않고 젖었는지 확인조차 하지 않는다——개조된 몸에는 확인할 필요도 없다. 스물네 시간 내내 ${father.uma_sex_title}님의 사용을 환영하며 젖어 있으니까——그대로 집어넣었다`,
        );
        await printAndWait([
          "격렬하게 찔려 ",
          you.get_colored_name(),
          "이(가) 의식을 잃을 뻔한 뒤에야 뒤쪽의 ",
          father.uma_sex_title,
          "은(는) 마침내 쏟아냈고, ",
          you.get_colored_name(),
          "의 얼굴에 육봉을 닦고 그대로 떠났다",
        ]);
        await printAndWait([
          "그동안 ",
          you.get_colored_name(),
          "은(는) 상대의 얼굴조차 보지 못했다",
        ]);
        println();
        await printAndWait("자신이 임신했다는 말 따위는 하지 않는다");
        await printAndWait(
          `배가 불러와도 ${father.uma_sex_title}의 주인에게는 가지고 놀 부위가 하나 늘었을 뿐이겠지`,
        );
        await printAndWait([
          "그것을 깨달은 ",
          you.get_colored_name(),
          "의 아래쪽은 다시 경련하고, 멈추지 않는 애액 분출이 햇살 속에서 무지개를 그려 임신을 축하하는 듯했다",
        ]);
      } else {
        await printAndWait("놀랄 일은 아니다");
        await printAndWait(
          "——매일 화장실에 가는 것만으로 대여섯 개에 입구를 가로막히고, 마지막에는 애액과 정액과 실금한 소변이 섞인 바닥을 직접 꼼꼼히 핥아 내는 생활에서 임신을 상상하기 어려울 리 없다.",
        );
        println();
        await printAndWait("아이의 아버지는 누구일까?");
        await printAndWait([
          you.get_colored_name(),
          "은(는) 또다시 생각하지 않을 수 없었다——",
        ]);
        await printAndWait(
          `어제 사이가 좋아 보였고 임신주머니까지 함께 사용했던 두 ${father.uma_sex_title}？`,
        );
        await printAndWait(
          "아니면 눈앞에서 결의를 다지던 팀의 누군가일까. 안팎의 구멍을 모두 채워 내쉬는 숨까지 짙은 정액 냄새가 났다……마지막에는 몸의 정액을 조금씩 입으로 핥고 음부에 밀어 넣어야 했다——혹은 그때 임신했을지도 모른다",
        );
        println();
        await printAndWait([
          "어느새,",
          you.get_colored_name(),
          "은(는) 아이의 미래에 이유 모를 두려움을 느끼고 있었다.",
        ]);
        if (children_count > 0) {
          await printAndWait(
            `그 아이의 어린 시절이 떠오른다. 마치 엊그제 일처럼 느껴지는데 ${father.sex}은(는) 순수한 눈빛을 가진 유아에서, 자신이 태어난 곳을 탐욕스러운 눈으로 바라보는 짐승이 되어 있었다.`,
          );
          await printAndWait([
            you.get_colored_name(),
            '은(는) 아이에게 놀림당해, 어머니라고 부를 수 없는 부끄러운 모습이 되지 않을까 걱정했다',
          ]);
        } else {
          await printAndWait(
            `이제 태어날 이 아이는, 다른 ${father.uma_sex_title}들처럼, 나를 임신 주머니로 취급할까……?`,
          );
          await printAndWait(
            '……안 돼. 내 임무를 다해야 해. 적어도 이 아이는 제대로 키워내야지',
          );
        }
        println();
        await printAndWait('임신 주머니가 키운 아이가 제대로 된 어른이 될 수 있을까?');
        await printAndWait(
          `매일, 어머니가 온갖 ${father.elder_sibling_sex_title}들에게 강간당하고, 침을 흘리며, 존엄성 없이 용서를 구하는 모습을 보며`,
        );
        await printAndWait('그런 아이가 굴복하지 않고 건강하게 자랄 수 있겠는가?');
        await printAndWait('하지만 걱정할 자격도 없다');
        await printAndWait([
          '지금, 화장실 앞을 지나가던 초등부 ',
          father.uma_sex_title,
          '에게 땅에 짓눌려, 성기에 봉사하고 있는 ',
          you.get_colored_name(),
          '은(는) 그 희미한 빛에 희망을 걸 수밖에 없었다',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_in_sleep: (() => {
    const title = "새로운 생명";
    /**
     * 孕袋が睡姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), "은(는) 아이를 품에 안았다——"]);
      const ret = await degeneration_to_evil("다정하게 쓰다듬는다", "말없이 저항한다");
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          "의 마음은 사랑으로 가득했다.",
        ]);
        await printAndWait("아이의 아버지가 누구인지는 이제 아무래도 좋다.");
        await printAndWait([
          '오히려, 임신 주머니의 평소 일을 하고 있을 뿐인데, 이렇게 귀여운 아이가 생기다니……',
          you.get_colored_name(),
          "은(는) 마음속으로, 얼굴도 모르는 아버지에게 고마워했다.",
        ]);
        await printAndWait("이제부터 이 아이를 잘 키워 내자……");
        await printAndWait([
          "어느새, 한때 ",
          you.get_colored_name(),
          "의 마음속에 있었던 트레이너로서의 책임감과 긍지가 다시 싹트기 시작했다……",
        ]);
        printButton('「！」', 1);
        await input();
        await printAndWait([
          '갑작스레 쏟아진 물이 ',
          you.get_colored_name(),
          '을(를) 환상에서 깨워냈다',
        ]);
        await printAndWait('안아 올린 아이가, 어머니에게 인생 첫 오줌을 싸버렸다');
        await printAndWait([
          '자신의 아이가 자신을 변기로 삼은 일——비록 우연이라 해도—— ',
          you.get_colored_name(),
          '은(는)언할 수 없는 쾌감을 느꼈다. 이 아이가 자신을 변기로 사용할 수 있도록 태어난 것이라고까지 생각했다',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는)부드럽게 아이의 사타구니를 핥고, 몸에 묻은 액체를 남김없이 입으로 옮긴 뒤, 만족스러운 표정으로 손가락을 핥았다',
        ]);
        println();
        await printAndWait('이토록 비천한 모습은, 최하급의 임신 주머니에서도 이 정도일 뿐이다');
        await printAndWait('이런 내가, 예전의 삶으로 돌아갈 리가 없다');
        await printAndWait('그런 삶으로 돌아가는 것 따위는, 더 이상 견딜 수 없다');
        await printAndWait([
          you.get_colored_name(),
          "은(는) 품 안의 아이를 다정하게 바라보고 있다. 표정은 변하지 않는다.",
        ]);
        await printAndWait("하지만 마음속은 이미 달라졌다.");
        await printAndWait(
          '————어떻게 해야 이 아이를, 나를 훈련시키는 데 가장 적합한 주인으로 키울 수 있을까?',
        );
      } else {
        await printAndWait(
          "이 아이에게 어머니라면 마땅히 느껴야 할 감정이 희미해져 버렸다.",
        );
        await printAndWait(
          "갓 태어난 아이에게는 아무 잘못도 없다는 걸 알면서도……",
        );
        printButton('「！」', 1);
        await printAndWait(["갑자기,", you.get_colored_name(), "은(는) 소리를 질렀다."]);
        await printAndWait([
          "아이가 처음 본 소변은 마치 겨냥한 것처럼 뿜어져 나와,",
          you.get_colored_name(),
          "의 얼굴을 적셨다.",
        ]);
        await printAndWait(
          "간호사도 호의적인 웃음을 흘렸다. 아이가 건강한 것이 기쁘다는 듯이.",
        );
        await printAndWait([
          "하지만 ",
          you.get_colored_name(),
          "의 마음에는 기쁨이 없었고, 머릿속에는 과거가 되살아났다.",
        ]);
        println();
        await printAndWait(
          `아침, 두 다리를 벌리고 쪼그려 앉아, 아직 졸음이 가시지 않은 ${father.uma_sex_title}의 아침 발기를 입으로 처리하고, 하루의 첫 정액과 첫 소변을 배 속으로 삼킨 경험`,
        );
        await printAndWait(
          `저녁, 훈련장에서 연습을 마친 ${father.uma_sex_title}들에게 욕구를 해소해 달라고 명령받아, 하루 동안 땀과 때로 범벅이 된 성기를 입에 물고 ${father.couple_title}의 피로를 입안으로 토해내게 한 경험`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            "은(는) 슬픈 마음으로 며칠 전 밤을 떠올렸다.",
          ]);
          await printAndWait([
            '자신의',
            children_count > 0 ? '아이' : `담당 ${father.uma_sex_title}`,
            '이(가) 몽유병에 걸려 방으로 들어와, 반쯤 잠든 상태에서 성기를 채운 뒤, 잠든 입술을 억지로 벌려 닦아냈을 때도, 나는 깨어나지 못했다',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            "은(는) 자신이 이런 생활에 익숙해지기 시작한 것은 아닌지 의심하기 시작했다……",
          ]);
          await printAndWait([
            "안 돼, 그렇게 생각하면 안 돼. ",
            you.get_colored_name(),
            "은(는) 정신을 차린 듯 고개를 저었다.",
          ]);
        }
        println();
        await printAndWait("……역시 떠오르는 것은 괴로운 기억뿐이다. 하지만……");
        await printAndWait(
          "품 안에서 아무것도 모른 채, 엄마 얼굴에 소변을 보고도 아랑곳하지 않고 깔깔 웃는 아이를 바라본다.",
        );
        await printAndWait("아이의 타고난 본성에는 선악이 없다……");
        await printAndWait("어쩌면, 아직 기회가 있을지도……?");
        println();
        await printAndWait("아이가 주변의 행동을 배우는 능력을 잊고 있다.");
        await printAndWait(
          `임신 주머니가 봉사해야 하는 상대는 신분고하를 가리지 않고 ‘모든 ${father.uma_sex_title}」이라는 사실도 잊고 있었다`,
        );
        await printAndWait(
          '곁에 있는 간호사가 이미 임신 주머니의 구강 봉사를 원하고 있다는 사실도 눈치채지 못한다',
        );
        await printAndWait(
          '무의식적으로 친자식이 흘린 오줌을 핥아내고 있다는 사실조차 눈치채지 못한다',
        );
        await printAndWait([
          you.get_colored_name(),
          '은(는)아이를 안은 채, 간호사의 치마 아래에 있는 굵은 것을 빨게 되어도 눈빛은 꺼지지 않았다',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            "다시 공허한 꿈을 품으며,",
            you.get_colored_name(),
            "은(는) 이번에야말로 이 아이를 잘 키우겠다고 결심했다.",
          ]);
        } else {
          await printAndWait([
            "공허한 꿈을 품으며,",
            you.get_colored_name(),
            "은(는) 이 아이를 잘 키우겠다고 결심했다.",
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_after_raped: (() => {
    const title = "새로운 생명";
    /**
     * 孕袋が強姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), "은(는) 아이를 품에 안았다——"]);
      const ret = await degeneration_to_evil(
        "아이에게는 아버지가 필요하다",
        "아니, 혼자서도 키울 수 있다",
      );
      if (ret === 1) {
        await printAndWait(
          "……나 혼자라면 어떻게든 살아갈 수 있을지도 모른다.",
        );
        await printAndWait("하지만 적어도 아이에게는 온전한 가정을 주고 싶다.");
        println();
        await printAndWait(`아이의 아버지를 바라보고, 품 안의 아이를 ${father.sex}에게 보여 주었다.`);
        await printAndWait(`이 아이가,${father.sex}의 책임감을 일깨워 줄 수 있다면.`);
        await printAndWait([
          father.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "와(과) 아이를 힘껏 끌어안고, 앞으로 소중히 여기겠다고 맹세했다.",
        ]);
        await printAndWait("마음을 고쳐먹은 아버지와, 곁을 떠나지 않는 어머니.");
        await printAndWait(
          "조금 전까지 마음속에 그리던 세 식구의 모습이 그대로 현실이 된 듯했다.",
        );
        println();
        await printAndWait("하지만……");
        await printAndWait([
          '임신 주머니로서의 직업적 본능이 ',
          you.get_colored_name(),
          '이(가) 이를 간과하지 못하게 했다',
        ]);
        await printAndWait([
          '내가 젖을 먹이는 모습을 보고 ',
          father.get_colored_name(),
          '의 허벅지가 떨리는 모습을 ',
        ]);
        println();
        await printAndWait('가정생활……참 좋은 핑계다');
        await printAndWait(
          '이 정도면, 아이에게 젖을 먹이면서 성기를 입에 넣어도 「영양 보충」이라고 치부할 수 있을 것이다',
        );
        await printAndWait([
          '남편인 ',
          father.get_colored_name(),
          '이(가) 아이를 안고 있는 나를 다정하게 껴안는 그림은, 가정에 의문을 품는 누구라도 의심을 떨쳐버릴 것이다…… 아래에서 젖은 은밀한 부위를 굵은 성기가 막고 있다는 사실을 눈치채지 못한다면 말이다',
        ]);
        await printAndWait(
          '언젠가 아이가 자라면…… 아이와 아이의 아버지에게 함께 이용당하고, 끼여들며, 수컷의 성기에 빠져들게 될 것이다……',
        );
        println();
        await printAndWait([
          '그런 미래를 떠올리며 ',
          you.get_colored_name(),
          '은(는) 무심코 입술을 핥았다……',
        ]);
        await printAndWait('그런 내일을, 기다리기 시작한다');
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 욕망을 마음껏 토해내고, 책임 따위는 생각하지 않은 채 안에 쏟아부은',
          father.get_colored_name(),
          "을(를) 노려보았다.",
        ]);
        await printAndWait(`이런 ${father.sex}이(가) 아버지로서 책임을 질 리 없다.`);
        await printAndWait(
          "필요한 것은 치욕 속에서도 자신과 아이를 지탱하고, 아이를 지켜 줄 상대다.",
        );
        await printAndWait(
          '자신이 욕망의 도구로 이용당할 때, 마지막 목소리가 나올 수 있는 곳까지 자지로 막아버리는 쓰레기는 아니다',
        );
        println();
        await printAndWait("나 혼자라도 이 아이를 키울 것이다.");
        await printAndWait([
          "이때 ",
          you.get_colored_name(),
          "은(는) 가장 험난한 길을 선택했다.",
        ]);
        println();
        await printAndWait("갑자기 품 안의 아이가 울기 시작했다.");
        await printAndWait("배가 고픈 걸까? 젖을 먹고 싶은 걸까?");
        await printAndWait('그렇다면…… 완전히 조교당한 지금의 이 몸은');
        await printAndWait(
          `젖꼭지를 빨리는 순간, 자신의 젖꼭지를 깨물고 핥았던 ${father.uma_sex_title}들을 떠올릴 것이다`,
        );
        await printAndWait(
          '슴을 물린 순간, 주무르고 짜내던 밤을 떠올리며 곧 절정에 달할 것이다',
        );
        await printAndWait(
          '아이가 젖을 다 마시고 가슴에 기대었을 때…… 아기의 체온과 비슷한 성기가 가슴 앞에서 주권을 과시하며, 마지막에 입 안으로 진한 흰 액체를 쏟아부었던 그 밤을, 떠올리지 않을까?',
        );
        println();
        await printAndWait(
          '그리고, 그 모든 것을 극복하고 드디어 이 아이를 키워냈다고 치더라도……',
        );
        await printAndWait(
          '사랑이 무엇인지 알기도 전에, 본능적으로 성을 이해한 눈빛을 아이가 나를 향해 던졌을 때',
        );
        await printAndWait("나는 어떻게 해야 할까.");
        println();
        await printAndWait("눈앞에 놓인 길은 캄캄했다……");
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_dedicate: (() => {
    const title = "새로운 생명";
    /**
     * 孕袋が自ら身を捧げて子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), "은(는) 아이를 품에 안았다——"]);
      const ret = await degeneration_to_evil('기쁜 생각이 들었다', '모성이 솟아올랐다');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          "은(는) 아이를 안고 마음속에서 격렬한 감정이 솟아오르는 것을 느꼈다.",
        ]);
        await printAndWait([
          "이 아이는 ",
          you.get_colored_name(),
          "와(과) ",
          father.get_colored_name(),
          "이(가) 맺어져 태어난 아이다.",
        ]);
        await printAndWait('……아니야. 맺어진 게 아니다');
        await printAndWait([
          you.get_colored_name(),
          '의 유전자가 스스로 굴복하고 ',
          father.get_colored_name(),
          '의 유전자 아래에 무릎 꿇고 태어난 산물이다',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '의 몸은, 궁합을 이겨낼 수 없고, 유전자의 깊은 갈망을 이겨낼 수 없다',
        ]);
        await printAndWait([
          "이 아이의 얼굴을 보자,",
          you.get_colored_name(),
          "의 마음은 갖가지 애정으로 가득 찬다.",
        ]);
        await printAndWait([
          '저기 보이는 ',
          father.get_colored_name(),
          '의 그림자 하나하나가, 강렬하고 무자비한 달콤한 침범을 몇 번이고 떠올리게 한다',
        ]);
        await printAndWait([
          '이 아이를 데리고 밖으로 나가는 모습을 상상하면, 마치 자신이 ',
          father.get_colored_name(),
          '의 전속 임신 주머니라는 증거를 들고 다니는 것 같아서……',
        ]);
        await printAndWait([you.get_colored_name(), '의 아래를 보니, 저도 모르게 떨렸다']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          "은(는) 아이를 안고 마음속에 파문이 이는 것을 느꼈다.",
        ]);
        await printAndWait([
          "이 아이는 ",
          you.get_colored_name(),
          "와(과) ",
          father.get_colored_name(),
          "이(가) 맺어져 태어난 아이다.",
        ]);
        await printAndWait('틀렸다. 맺어진 것이 아니다');
        await printAndWait([
          father.get_colored_name(),
          '의 유전자가 ',
          you.get_colored_name(),
          '의 유전자를 침범하여 태어난 산물이다',
        ]);
        await printAndWait([
          '이 몸은 타고난 노예성에 저항하기 어렵다. 마음 깊은 곳에서는 받아들이지 못하고 혐오하더라도, 조교된 몸은 아이를 위한 공간을 스스로 열고 ',
          father.get_colored_name(),
          '에게 씨를 뿌려질 준비를 갖춘다',
        ]);
        await printAndWait([
          "품 안의 아이를 보며,",
          you.get_colored_name(),
          "은(는) 원망했어야 했다.",
        ]);
        await printAndWait([
          '저기 보이는 ',
          father.get_colored_name(),
          '의 그림자 하나하나가, 강렬하고 무자비한 침해를 몇 번이고 떠올리게 한다',
        ]);
        await printAndWait([
          '이 아이를 잉태한 밤 ',
          father.get_colored_name(),
          '의 요구로 ',
          you.get_colored_name(),
          '은(는) 암캐처럼 네 발로 기어갔고, 정액으로 가득 차 양손으로 몸을 지탱할 수 없을 때까지 계속되었고',
          father.get_colored_name(),
          '은(는) 드디어 성기를 빼내어 ',
          you.get_colored_name(),
          '의 입에 넣으며 끝을 냈다',
        ]);
        await printAndWait([
          "하지만 두 사람의 유전자는 그토록 잘 맞았던 걸까.",
          you.get_colored_name(),
          "은(는) 끝내 미워할 수 없었고, 마음속에는 어머니라 불리는 감정만이 솟아올랐다.",
        ]);
        await printAndWait([
          '——하지만 ',
          you.get_colored_name(),
          '은(는)아직 모른다. 이 아이가 자란 뒤, 그 감정은 다시 유전적 굴복으로 변할 것이다……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
