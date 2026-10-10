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
      '의 학업을 지도한 뒤, ',
      chara.get_colored_name(),
      '은(는) 뺨을 붉히며 ',
      you.get_colored_name(),
      '을(를) 바라보았다. 다음은 성교육 시간이다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '이(가) 지도하는 쪽인데도, ',
      chara.get_colored_name(),
      '쪽이 오히려 ',
      you.get_colored_name(),
      '의 몸을 더 잘 알고 있다.',
      chara.get_colored_name(),
      '의 손안에서, ',
      you.get_colored_name(),
      '은(는) 자신의 민감한 곳과 만졌을 때의 부끄러운 반응을 좋든 싫든 철저히 배우게 되었다.',
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
      '은(는) ',
      you.get_colored_name(),
      '을(를) 고목의 빈 구멍 옆으로 데려갔다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      `은(는) ${chara.sex}이(가) 요즘 쌓인 스트레스를 풀고 싶을 뿐이라고 생각한 순간, 그루터기 위로 밀쳐졌다.`,
    ]);
    await printAndWait([
      '그러고는 ',
      you.get_colored_name(),
      '의 하반신 옷이 천천히 벗겨지고 뜨거운 살기둥이 입구에 닿았다.',
    ]);
    await printAndWait([
      '소리를 내면 나무 구멍의 메아리로 ',
      you.get_colored_name(),
      '의 목소리가 학원 전체에 울릴 것이다.',
    ]);
    await printAndWait([
      `담당 ${chara.uma_sex_title}에게 고목의 빈 구멍에서 범해졌다는 사실이 알려지면, `,
      you.get_colored_name(),
      '의 트레이너로서의 명성은 끝이다……',
    ]);
    await printAndWait('물론 그런 것은 진작 남아 있지도 않다.');
    await printAndWait([
      you.get_colored_name(),
      '은(는) 고목의 빈 구멍 옆에서 신음했다. ',
      get('flag:35') === 2 ? '성노예' : '임신주머니',
      '인 ',
      you.get_colored_name(),
      '에게는 이것도 평소와 같은 하루일 뿐이다.',
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
      '은(는) ',
      you.get_colored_name(),
      '의 손을 잡고 안뜰로 데이트를 나갔다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 두 다리를 다문 채 허벅지에서 하얀 액체를 천천히 흘리고 있다. 마스크는 무언가의 액체에 젖어 입과 코에 달라붙어 있었다. 발정한 냄새에 지나가던 ',
      chara.uma_sex_title,
      '들까지 뺨을 붉히며 코를 막았다.',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      '옥상에서의 공개 노출……이때 누군가 고개를 들면, ',
      you.get_colored_name(),
      '은(는) 견딜 수 없을 것이다.',
    ]);
    await printAndWait(
      `옥상 아래, 트레이닝장을 달리는 ${chara.uma_sex_title}들.`,
    );
    await printAndWait(
      '들키면 분명 가 버리고 말 것이다. 분출한 애액이 비처럼 아래의 사람들에게 떨어진다……',
    );
    await printAndWait([
      '하지만 ',
      chara.get_colored_name(),
      '에게 한쪽 다리를 들려 힘을 줄 수 없는 자세가 된 ',
      you.get_colored_name(),
      '은(는) 옥상의 보호망에 의지할 수밖에 없고, 철선이 가슴에 붉은 자국을 남겼다.',
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait('아아, 나와 버렸어……');
      await printAndWait([
        `음부의 애액이 넘치기 전에 아래에 있는 ${chara.uma_sex_title}의 머리에 떨어진 것은 `,
        you.get_colored_name(),
        '의 젖꼭지에서 가느다란 흐름으로 나온 젖이었다.',
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
        '은(는) ',
        chara.get_colored_name(),
        '의 육봉을 입에 머금고 있었다.',
      ]);
      await printAndWait([
        '레이스 전의 열기에 취한 ',
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        '의 단단한 아래쪽은 당연히 처리해야 한다. 그것도 ',
        get('flag:35') === 2 ? '성노예' : '임신주머니',
        '인 ',
        you.get_colored_name(),
        '에게 빠질 수 없는 의무다.',
      ]);
      await printAndWait([
        '정액을 모두 삼킨 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '의 육봉에 레이스의 무사를 기원하는 입맞춤을 남겼다.',
      ]);
    };
    f.title = '레이스 전에';
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
        '은(는) ',
        child.get_colored_name(),
        '와(과) ',
        father.get_colored_name(),
        '에게 빈틈없이 끼여 있었다.',
      ]);
      await printAndWait([
        '뜨겁게 달아오른 두 육봉이 ',
        you.get_colored_name(),
        '의 앞뒤를 동시에 공략하고, 찌를 때마다 새로운 쾌감이 달린다.',
      ]);
      await printAndWait([
        '몽롱한 가운데, ',
        you.get_colored_name(),
        '은(는) ',
        child.get_colored_name(),
        '이(가) 태어났을 때를 떠올렸다——',
      ]);
      await you.used_to_say_and_wait(
        '언젠가 자식이 다 자라면……자식과 그 아버지에게 함께 쓰이고, 사이에 끼인 채 수컷의 육봉에 빠져든다……',
        true,
      );
      await printAndWait('그 망상이 지금 현실이 되어 있다……');
    };
    f.title = '부모와 자식의 합동 봉사';
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
    await printAndWait([
      '한밤중, ',
      you.get_colored_name(),
      '은(는) 벌떡 일어났다',
    ]);
    await printAndWait(
      '임신주머니인 이상 잠자는 시간에도 의무를 잊어서는 안 된다',
    );
    await printAndWait('다만 오늘 밤 손님이 조금 특별할 뿐이다');
    println();
    await printAndWait([
      you.get_colored_name(),
      '은(는) 앞뒤에서 서로 다른 박자의 충격을 받고 있었다',
    ]);
    await printAndWait([
      child.get_colored_name(),
      '은(는) ',
      callname_c,
      '하고 낮게 부르며 허리를 흔들고, 찌를 때마다 ',
      you.get_colored_name(),
      '의 가장 깊은 곳까지 닿는다',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 침대에 무릎을 꿇고, 자기 자식에게 짐승 같은 자세로 범해지는 감각을 부끄러움과 함께 맛보았다',
    ]);
    await printAndWait(
      '어머니로서의 긍지——그런 것이 있었다 한들——는 이제 완전히 사라졌다',
    );
    await printAndWait([
      '암캐처럼 엉덩이를 흔들며 괴롭힘을 바라는 모습은 입으로 봉사하고 있는 ',
      chara.get_colored_name(),
      '의 웃음거리도 되었다',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 입 안의 육봉을 더 깊이 머금고 짙은 냄새 속에 얼굴을 파묻어 현실에서 달아났다',
    ]);
    println();
    await printAndWait([
      '얼마 지나지 않아, ',
      chara.get_colored_name(),
      '와(과) ',
      child.get_colored_name(),
      '은(는) 짙은 정액을 쏟아냈다',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 입 안의 정액을 뱉어 손에 바르고, 손가락을 음부에 넣어 천천히 휘저은 뒤 넘친 백탁액을 다른 손으로 떠서 삼켰다',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        '의 정액과 ',
        child.get_colored_name(),
        '의 정액이 섞인다. 어느 쪽이 먼저 임신시킬까?',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 상상에 빠져 눈앞의 ',
        chara.get_colored_name(),
        '와(과) ',
        child.get_colored_name(),
        '의 육봉이 그 행동에 다시 일어서고 있다는 것을 알아차리지 못했다',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '의 행동을 보고, ',
        chara.get_colored_name(),
        '와(과) ',
        child.get_colored_name(),
        '의 육봉은 다시 일어섰다',
      ]);
    }
    await printAndWait('밤은 아직 계속된다……');
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
        '은(는) 뺨을 두드리는 온기에 눈을 떴다.',
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          '밤새 ',
          you.get_colored_name(),
          '을(를) 괴롭힌 ',
          chara.get_colored_name(),
          '은(는) 또 약을 먹고, 굳이 ',
          chara.sex,
          '의 고귀한 ',
          penis_desc,
          ' 육봉을 자명종으로 삼았다.',
        ]);
      } else {
        await printAndWait([
          '밤새 ',
          you.get_colored_name(),
          '을(를) 괴롭힌 ',
          chara.get_colored_name(),
          '은(는) 또 굳이 ',
          chara.sex,
          '의 고귀한 ',
          penis_desc,
          ' 육봉을 자명종으로 삼았다.',
        ]);
      }
      await printAndWait([
        '——',
        you.get_colored_name(),
        '에게 아직 다하지 않은 의무가 있음을 상기시킨다. 아침부터 밤까지 같은 일의 반복이다.',
      ]);
      ret.push(
        await degeneration_to_evil(
          '순순히 머금는다',
          '못마땅한 듯 얼굴을 돌린다',
        ),
      );
      if (ret[0] === 1) {
        await printAndWait([
          '수고를 들일 것도 없이, ',
          you.get_colored_name(),
          '이(가) 입술을 조금 벌린 순간 육봉은 기다리지 못하고 들어왔다.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          '이(가) 마음대로 하는 동안, ',
          you.get_colored_name(),
          '은(는) 순종적으로 입술과 혀로 봉사했다.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '은(는) 오늘도 자신의 의무를 잊지 않는다……',
        ]);
      } else {
        await printAndWait([
          '이 지경으로 타락해도, ',
          you.get_colored_name(),
          '에게는 긍지, 적어도 자존심은 있다——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '이(가) 살짝 얼굴을 돌리며 그렇게 주장하려 했을 때, 이미 인내심이 바닥난 주인 ',
          chara.get_colored_name(),
          '은(는) 뺨을 때려 지금의 처지를 상기시켰다.',
        ]);
        await printAndWait([
          '그러고는 ',
          chara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 협조 따위는 기대하지 않고 혼자 이 아침 식사를 시작했다.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '은(는) 오늘도 의무를 철저히 주입받았다……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = '다음 날 아침의 의무';
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
      '【오늘도 ',
      you.get_colored_name(),
      '은(는) ',
      slave,
      '의 일을 명령받았다】',
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          '은(는) 레이스장 선수 대기실로 끌려가 패배한 ',
          uma,
          '들을 위로했다.',
        ]);
        print([
          '문이 닫히자, ',
          you.get_colored_name(),
          '의 구색뿐인 옷은 완전히 벗겨지고 격렬한 육봉에 몸이 흔들렸다.',
        ]);
        print([
          uma,
          '들은 패배의 울분을 토해 내며, ',
          you.get_colored_name(),
          '의 몸에 손톱자국과 잇자국을 남겼다……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          '은(는) 레이스장 선수 대기실로 끌려가 멋진 달리기를 보여 준 ',
          uma,
          '들을 위로했다.',
        ]);
        print([
          '다른 선수보다 먼저 우승한 ',
          uma,
          '이(가) 뛰어들었다.',
          you.get_colored_name(),
          '을(를) 밀어 넘어뜨리기 전에 인사까지 했다.',
        ]);
        print([
          sex,
          '은(는) 웃으며 허리를 비틀어, ',
          you.get_colored_name(),
          '의 자궁에 소변과 함께 정액을 쏟아냈다……',
        ]);
      },
      () => {
        print([
          '일하기 전에, ',
          you.get_colored_name(),
          '은(는) 화장실에 가려 했다.',
        ]);
        print([
          '시작하기 전에 대여섯 개의 육봉이 ',
          you.get_colored_name(),
          '의 앞길을 막았다.',
        ]);
        print([
          you.get_colored_name(),
          '은(는) 요의를 참으며 ',
          uma,
          '들에게 봉사하다 곧 백탁액 속에서 심하게 실금했다……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          '은(는) 사이가 좋아 보이는 ',
          uma,
          '두 명에게 지명받았다.',
        ]);
        print([
          they,
          '은(는) 육봉을 세워 앞뒤에서 ',
          you.get_colored_name(),
          '의 아래쪽을 범했다.',
        ]);
        print([
          '두 겹의 강한 자극 속에서, ',
          you.get_colored_name(),
          '은(는) 익숙한 질내사정의 감각과 함께 크게 절정에 달해 의식을 잃었다……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          '은(는) ',
          uma,
          '의 결의 대회에 참가하라는 명령을 받았다.',
        ]);
        print([
          '모임의 한 순서로, ',
          uma,
          '들이 줄을 서서 ',
          you.get_colored_name(),
          '의 안팎 구멍을 사용했다.',
        ]);
        print([
          '언제나 한 개에서 세 개가 몸속을 드나들어, 완전히 채워지기도 전에 ',
          you.get_colored_name(),
          '은(는) 쾌감에 의식이 날아갔다……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          '은(는) 트레이닝장에서 함께 연습하던 ',
          uma,
          '을(를) 맞이했다.',
        ]);
        print([
          sex,
          '은(는) ',
          you.get_colored_name(),
          '의 옷을 벗기고 얼룩투성이인 아래쪽 따위는 개의치 않은 채 곧장 삽입했다.',
        ]);
        print([
          uma,
          '은(는) 찌르면서 놀리듯 물었다. 매일 트레이닝 전에 담당에게 하루 치를 안에 받고 있느냐고.',
        ]);
        print([
          '극도의 쾌감과 치욕 속에서, ',
          you.get_colored_name(),
          '은(는) 의식을 잃었다……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' は仕事へ向かう途中、小学部の',
          uma,
          'に塞がれた。',
        ]);
        print([
          '拒む暇もなく、まだ幼い',
          uma,
          'は、年齢にそぐわない巨きな肉棒を出した。',
        ]);
        print([
          '改造された体の本能に屈し、',
          you.get_colored_name(),
          ' は半ば押し切られる形で地に押さえられ、秘部が巨物に出入りされる感覚を味わった……',
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
          '은(는) ',
          uma,
          '들에게 대 위에 묶여 몸을 앞으로 기울이자, 구멍이 뚫린 판이 머리와 손, 커다란 가슴을 고정했다.',
        ]);
        print([
          you.get_colored_name(),
          '의 몸은 ',
          they,
          '에게 마음대로 주물러지고, 가슴은 세게 짜여 하얀 젖을 뿜었다.',
        ]);
        print([
          uma,
          '들은 짝을 이루어 구멍 사용과 착유를 번갈아 하다가 마지막에는 함께 ',
          you.get_colored_name(),
          '의 가슴과 얼굴에 정액을 쏟아냈다……',
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
      await you.say_and_wait(['응……크읏……으……']);
      println();
      await printAndWait([
        '트레센 학원 안에는 평소 아무도 가까이 가지 않는 곳이 있다.',
      ]);
      await printAndWait(['건초가 쌓여 있고 울타리로 둘러싸인 한쪽 구석.']);
      await printAndWait([
        '무언가 동물을 기르는 곳처럼 보이지만 생물의 기척은 한 번도 없었다.',
      ]);
      await printAndWait(['이곳은 무엇을 위해 있는 걸까?']);
      await printAndWait([you.get_colored_name(), '도 한때는 의문을 품었다.']);
      println();
      await printAndWait([
        '지금, ',
        you.get_colored_name(),
        '은(는) 이곳의 용도를 알게 되었다.',
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        '처벌! 임신주머니의 의무를 피했으니 엄하게 벌하겠네!',
      ]);
      await minoru.say_as_unknown_and_wait([
        '본래 임신주머니가 되는 것 자체가 가장 무거운 벌입니다……트레센과 ',
        taste.uma_sex_title,
        '의 미래를 위해 힘쓰는 가운데 트레이너님께서 자신의 잘못을 되돌아보시리라 기대했습니다. 하지만 아무래도 아직 강한 약이 필요한 모양이군요.',
      ]);
      println();
      await printAndWait(['두 사람의 말이 끝나자, ']);
      await printAndWait([
        '이미 두 사람에게 쓰여 하얀 액체가 아직 가늘게 흐르는, 빨갛게 부은 ',
        you.get_colored_name(),
        '의 음부에 새로운 손님이 찾아왔다.',
      ]);
      const ret = await degeneration_to_evil(
        '복종한다',
        '굴복하지 않는다',
        false,
      );
      await printAndWait([
        '안대와 입마개를 착용한 ',
        you.get_colored_name(),
        '은(는) 찾아온 사람이 누구인지 알 수 없다.',
      ]);
      await printAndWait([
        '목소리로 구별하려 해도 방음 헤드폰에 덮인 귀로는, ',
        taste.uma_sex_title,
        '의 뛰어난 청력으로도 몸속에서 울리는 소리밖에 듣지 못한다.',
      ]);
      println();
      await printAndWait(['츄팟……츄팟……']);
      println();
      await printAndWait(['끈적하게 육체가 부딪히는 소리.']);
      await printAndWait([
        '그리고 뒤쪽의 육봉을 놓기 싫다는 듯 입구에서 나는 입맞춤 소리.',
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            '그 쪽 하는 소리는 커서, ',
            you.get_colored_name(),
            '은(는) 이 육봉이야말로 몸의 지배자라고 생각할 뻔했다——이상할 것도 없다. 오늘 밤, 한 개가 들어올 때마다 ',
            you.get_colored_name(),
            '은(는) 같은 생각을 했다.',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            '그 쪽 하는 소리는 커서, ',
            you.get_colored_name(),
            '은(는) 이 육봉이야말로 몸의 지배자라고 생각할 뻔했다——',
            you.get_colored_name(),
            '은(는) 그렇게 생각하고 싶지 않았지만, 약에 흐려진 머리는 그 사실을 받아들이게 했다.',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(['그팟……그팟……']);
      println();
      await printAndWait(['모든 방어는 언젠가 뚫리는 날을 맞는다.']);
      await printAndWait([
        '그렇다면 방어란 뚫리기 위해 존재한다는 등식도 대체로 성립한다.',
      ]);
      await printAndWait([
        '그러므로 도도한 척하는 좁은 길은 ',
        taste.uma_sex_title,
        '님의 씩씩한 육봉에 정복감을 주기 위해 차가운 척하다가, 닿는 순간 휘감겨 열녀에서 녹아내린 암컷으로 완벽하게 바뀐다. 휘감기는 소리 또한 몸의 주인이 보이는 태도를 드러낸다.',
      ]);
      await printAndWait([
        '임신하고 싶다, 견딜 수 없이 임신하고 싶다. 멀쩡한 트레이너인 척했던 것은 ',
        taste.uma_sex_title,
        '님이 자신을 맛볼 때 감정적인 만족까지 누릴 수 있게 하기 위해서였다.',
      ]);
      await printAndWait([
        '그 탓에 ',
        taste.uma_sex_title,
        '님의 정자에 범해져 자신이 얼마나 비천한 암컷인지 배울 기회를 잃었다. 얼마나 손해인가.',
      ]);
      println();
      await printAndWait([
        '다행히 자비로운 ',
        taste.uma_sex_title,
        '님은 어리석은 임신주머니에게 기회를 주신다.',
      ]);
      println();
      await printAndWait(['똑, 똑……똑, 똑……']);
      println();
      await printAndWait([
        '자궁 입구를 예의 바르게 두드리는 육봉은 관문이 무혈 개성하기를 기다린다.',
      ]);
      await printAndWait([
        '온몸의 기관도 조직도 세포도 이미 완전히 복종하고 있다.',
      ]);
      await printAndWait([
        '지금의 찌르기는 마지막 방벽에 대한 충격이라기보다 형식적인 노크다.',
      ]);
      await printAndWait([
        '저항? 임신주머니의 몸이 ',
        taste.uma_sex_title,
        '님의 침범에 저항할 리 없다. 그것은 유전자 깊이 새겨진 논리다.',
      ]);
      println();
      await printAndWait(['그리고 가장 기다리던 소리.']);
      await printAndWait([
        '아아, ',
        you.get_colored_name(),
        '은(는) 다리를 더욱 벌렸다.',
      ]);
      await printAndWait([
        '어느새 ',
        you.get_colored_name(),
        '을(를) 교배대에 묶어 두었던 벨트는 풀려 있었다.',
      ]);
      await printAndWait(['본래 그 벨트는 필요하지도 않았다.']);
      await printAndWait([
        '임신주머니가 ',
        taste.uma_sex_title,
        '님의 육봉을 거스를 리 없다.',
      ]);
      await printAndWait([
        '임신주머니가 ',
        taste.uma_sex_title,
        '님이 주시는 것을 거부할 리 없다.',
      ]);
      println();
      await printAndWait([
        '마침내 달리기보다 가슴을 뛰게 하고 첫사랑보다 마음을 흔드는 ',
      ]);
      await printAndWait([taste.uma_sex_title, '님의 침범이 끝을 향한다.']);
      println();
      await printAndWait(['슈……슈르르르르……']);
      println();
      await printAndWait(['왔다.']);
      await printAndWait(['이것이다.']);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 마음속으로 확신했다.',
      ]);
      await printAndWait(['이것이 자신의 자궁에 들어와, ']);
      await printAndWait(['원래 주인인 난자를 철저히 복종시키고, ']);
      await printAndWait([
        '납작 엎드려 발을 핥고 모체의 모든 것을 바칠 만큼 아양 떨게 만드는, ',
        taste.uma_sex_title,
        '님의 고귀한 씨앗인 정액이다.',
      ]);
      await printAndWait(['정자는 끊임없이 뿜어져 나와, ']);
      await printAndWait([
        you.get_colored_name(),
        '의 몸 구석구석을 유린하고 범해 간다.',
      ]);
      await printAndWait(['이것이야말로 임신주머니의 행복이다.']);
      println();
      await printAndWait(['——————']);
      println();
      await printAndWait(['아쉽게도 즐거운 시간은 영원히 계속되지 않는다.']);
      await printAndWait(['아무리 긴 사정에도 끝은 있다.']);
      await printAndWait([
        '절정과 수태의 기쁨에 잠긴 망가진 임신주머니의 뇌보다, 육봉님과 직접 맞닿은 질 쪽이 더욱 초조하게 기둥을 휘감으며 머물러 달라고 애원한다.',
      ]);
      await printAndWait(['아니, 적어도……상대의 모양은 기억해 두고 싶다.']);
      await printAndWait([
        '…………설령 오 초 뒤 다음 한 개가 들어오는 순간 잊어버릴 기억일지라도.',
      ]);
      println();
      await printAndWait(
        '【정액에 젖어 요염한 분홍빛을 띤 음문이 조용히 모양을 바꿨다】',
        { color: buff_colors[2] },
      );
    };
    f.title = [
      { color: buff_colors[2], content: '임신주머니의 의무에 대한 징계' },
    ];
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
      await printAndWait(['츄팟……츄팟……']);
      println();
      await printAndWait(['다시 밤이 찾아와 익숙한 곳으로 돌아왔다.']);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 다시 복면과 입마개를 착용하고, 익숙한 밤이 또 시작된다.',
      ]);
      await printAndWait([
        '임신주머니의 의무를 다하지 않으면 다시 이곳에 오게 된다는 것을 알고 있었다.',
      ]);
      await printAndWait([
        '담당도 학원의 수강생도 선생도 이 「작은 수고」라면 기꺼이 도와주리라는 것을 알고 있었다.',
      ]);
      await printAndWait([
        '거기서 멈췄다면 아이의 아버지를 직접 고를 수 있었다는 것을 알고 있었다.',
      ]);
      if ((await degeneration_to_evil('복종한다', '굴복하지 않는다')) === 1) {
        await printAndWait([
          '그러니 일부러 여기까지 온 ',
          you.get_colored_name(),
          '의 목적은 이미 분명하겠지.',
        ]);
        await printAndWait([
          '그날의 교접을 잊을 수 없다. 모든 것을 남에게 맡기는 쾌감을 잊을 수 없다.',
        ]);
        await printAndWait(['성욕 처리 도구로 취급받는 감각을 잊을 수 없다.']);
      } else {
        await printAndWait([
          '그러니 여기까지 온 ',
          you.get_colored_name(),
          '의 말로도 분명하겠지——',
          you.get_colored_name(),
          '은(는) 멍하니 생각했다.',
        ]);
        await printAndWait([
          '그날의 교접을 잊을 수 없는 걸까. 모든 것을 남에게 맡기는 쾌감을 잊을 수 없는 걸까.',
        ]);
        await printAndWait(['아니면 성욕 처리 도구로 취급받는 감각일까.']);
        await printAndWait(['——약으로 뜨거워진 귓가에 그런 속삭임이 들린다.']);
      }
      setColor();
      println();
      await printAndWait(['꾹']);
      await printAndWait([
        '세게 짓누르는 감촉이 통증과 더 큰 쾌감을 젖꼭지에서 ',
        you.get_colored_name(),
        '의 뇌로 보낸다. 안 된다, 봉사하는 도중에 한눈팔아서는.',
      ]);
      if (is_teammate) {
        await printAndWait([
          '그런데 뒤에 있는 ',
          uma_sex_title,
          '님의 육봉은 어딘가 익숙하다.',
        ]);
        await printAndWait([
          '보통이라면 문제없다. 임신주머니로서 학원 전체의 ',
          uma_sex_title,
          '에게 쓰여 왔으니.',
        ]);
        await printAndWait(['하지만……이 익숙함은.']);
        await printAndWait([
          '설마 뒤에 있는 ',
          uma_sex_title,
          '은(는) 자신의 담당?',
        ]);
        await printAndWait(['정체를 숨긴 채 담당에게 쓰인다.']);
        await printAndWait([
          '어쩐지 ',
          you.get_colored_name(),
          '은(는) 빼앗긴 듯한 긴장감……과 흥분을 느꼈다.',
        ]);
        await printAndWait([
          '분명 화가 났을 것이다. 분명 분개하고 있을 것이다.',
        ]);
        await printAndWait([
          '자신의 트레이너, 자신의 성노예, 자신의 임신주머니가 ',
        ]);
        await printAndWait([
          '자기 아이를 임신하려 하지 않고 정체 모를 상대들에게 돌려 쓰이는 쪽을 택했으니.',
        ]);
      } else {
        await printAndWait([
          '그런데 뒤에 있는 ',
          uma_sex_title,
          '님의 육봉은 어째서인지 유난히 조급하다.',
        ]);
        await printAndWait([
          '보통이라면 문제없다. 임신주머니로서, 욕망의 처리 도구로서 아무리 난폭하게 쓰여도 당연하니까.',
        ]);
        await printAndWait(['하지만……이토록 조급하고 분노까지 어려 있다.']);
        await printAndWait([
          '설마 뒤에 있는 ',
          uma_sex_title,
          '은(는) 자신의 팬?',
        ]);
        await printAndWait(['정체를 숨긴 채 팬에게 쓰인다.']);
        await printAndWait([
          '어쩐지 ',
          you.get_colored_name(),
          '은(는) 빼앗긴 듯한 긴장감……과 흥분을 느꼈다.',
        ]);
        await printAndWait([
          '분명 화가 났을 것이다. 분명 분개하고 있을 것이다.',
        ]);
        await printAndWait(['동경하던 트레이너, 동경하던 상대가 ']);
        await printAndWait([
          '이토록 비천한 모습으로, 아담한 ',
          uma_sex_title,
          '의 순수한 연심을 짓밟고 있다.',
        ]);
      }
      println();
      await printAndWait(['화가 났겠지. 분개하겠지.']);
      await printAndWait([
        '그러니 누구에게나 다리를 벌리는 이 암퇘지 안에 가차 없이 씨를 뿌려라.',
      ]);
      await printAndWait([
        '이 음란한 구멍을 망가뜨려라. 임신시켜라, 임신시켜라, 임신시켜라.',
      ]);
      await printAndWait(['철저하게 육봉의 노예로 바꿔라.']);
      println();
      if (is_teammate) {
        await printAndWait([
          '그렇게 생각하자, ',
          you.get_colored_name(),
          '의 허리는 더욱 춤췄다.',
        ]);
        await printAndWait([
          '얼마 지나지 않아 그 육봉은 한순간 멈췄다가 ',
          you.get_colored_name(),
          '이(가) 가장 기다리던 백탁액을 쏟아냈다.',
        ]);
        await printAndWait(['아아……아쉽다.']);
        await printAndWait([
          '무언가 빗나갔다는 예감이 ',
          you.get_colored_name(),
          '의 가슴에 떠오른다.',
        ]);
        await printAndWait([
          '하지만 다음의 익숙한 육봉 감촉이 다시 ',
          you.get_colored_name(),
          '을(를) 딴생각도 못 할 만큼 찔렀다.',
        ]);
        println();
        await printAndWait([
          '다음 아이는 사랑하는 담당 ',
          uma_sex_title,
          '에게서 받자고 생각했다.',
        ]);
        await printAndWait([
          '몽롱한 가운데, ',
          you.get_colored_name(),
          '은(는) 지킬 수 있을지 모를 결심을 다졌다.',
        ]);
      } else {
        await printAndWait([
          '그렇게 생각하자, ',
          you.get_colored_name(),
          '의 허리는 더욱 춤췄다.',
        ]);
        await printAndWait(['하지만 공격을 서두르다가 방어를 소홀히 했는지, ']);
        await printAndWait(['아니면 그저 시간이 겹쳤을 뿐인지.']);
        await printAndWait([
          '진심을 내보이려던 순간, 뒤쪽이 굳어지며 구멍 안에 대량의 백탁액을 쏟았다.',
        ]);
        await printAndWait(['아아……아쉽다.']);
        await printAndWait([
          '공허한 상실감이 ',
          you.get_colored_name(),
          '의 가슴에 떠오른다.',
        ]);
        await printAndWait([
          '하지만 다음의 익숙한 육봉 감촉이 다시 ',
          you.get_colored_name(),
          '을(를) 딴생각도 못 할 만큼 찔렀다.',
        ]);
        println();
        await printAndWait(['다음에는 더 힘내 줘.']);
        await printAndWait([
          '상대의 정자가 더욱 사나운 육봉에 구멍에서 긁혀 나오는 감각을 맛보며, ',
          you.get_colored_name(),
          '은(는) 말없는 축복을 보냈다.',
        ]);
      }
      println();
      await printAndWait(
        '【정액에 젖어 요염한 분홍빛을 띤 음문이 조용히 모양을 바꿨다】',
        { color: buff_colors[2] },
      );
    };
    f.title = [
      { color: buff_colors[2], content: '임신주머니의 의무에 대한 징계' },
    ];
    return f;
  })(),
  report_preg_duty: (() => {
    const title = '책무';
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
        '은(는) 아랫배의 음문에 나타난 임신 문양을 바라보다 세면장으로 뛰어가 토했다.',
      ]);
      await printAndWait([
        '삶의 발걸음을 흔들어 놓는 이 작은 생명에게,',
        you.get_colored_name(),
        '은(는)——',
      ]);
      const ret = await degeneration_to_evil(
        '기쁘게 찾아오기를 기다린다',
        '어쩔 수 없이 받아들인다',
      );
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 기쁜 마음으로 상상했다.',
        ]);
        await printAndWait('아이가 생긴 뒤의 미래, 태어난 뒤의 교육……');
        await printAndWait([
          '하지만,',
          you.get_colored_name(),
          '이(가) 마음속으로 가장 궁금해하는 것은 역시',
        ]);
        println();
        await printAndWait('아이의 아버지는 누구일까?');
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
            'あるいは、印象ではまだ子供なのに、母の腹から出てきた道を覚えているかのように、いつも役立たずの母をアヘ顔の雌豚にする、心優しい宝物？',
          );
        }
        println();
        await printAndWait('누구든, 새로운 생명의 탄생은 기쁜 일이다.');
        await printAndWait([
          '다만,',
          you.get_colored_name(),
          '이(가) 가장 걱정하는 것은 역시……',
        ]);
        println();
        await printAndWait('(아이가 태어날 때까지 임신주머니의 의무는……)');
        println();
        await printAndWait([
          '한 문장을 끝까지 생각하기도 전에 뒤에서 오는 충격이 ',
          you.get_colored_name(),
          '의 생각을 끊었다',
        ]);
        await printAndWait(
          `상대는 의사 따위는 신경 쓰지 않고 젖었는지 확인조차 하지 않는다——개조된 몸에는 확인할 필요도 없다. 스물네 시간 내내 ${father.uma_sex_title}님의 사용을 환영하며 젖어 있으니까——그대로 집어넣었다`,
        );
        await printAndWait([
          '격렬하게 찔려 ',
          you.get_colored_name(),
          '이(가) 의식을 잃을 뻔한 뒤에야 뒤쪽의 ',
          father.uma_sex_title,
          '은(는) 마침내 쏟아냈고, ',
          you.get_colored_name(),
          '의 얼굴에 육봉을 닦고 그대로 떠났다',
        ]);
        await printAndWait([
          '그동안 ',
          you.get_colored_name(),
          '은(는) 상대의 얼굴조차 보지 못했다',
        ]);
        println();
        await printAndWait('자신이 임신했다는 말 따위는 하지 않는다');
        await printAndWait(
          `배가 불러와도 ${father.uma_sex_title}의 주인에게는 가지고 놀 부위가 하나 늘었을 뿐이겠지`,
        );
        await printAndWait([
          '그것을 깨달은 ',
          you.get_colored_name(),
          '의 아래쪽은 다시 경련하고, 멈추지 않는 애액 분출이 햇살 속에서 무지개를 그려 임신을 축하하는 듯했다',
        ]);
      } else {
        await printAndWait('놀랄 일은 아니다');
        await printAndWait(
          '——매일 화장실에 가는 것만으로 대여섯 개에 입구를 가로막히고, 마지막에는 애액과 정액과 실금한 소변이 섞인 바닥을 직접 꼼꼼히 핥아 내는 생활에서 임신을 상상하기 어려울 리 없다.',
        );
        println();
        await printAndWait('아이의 아버지는 누구일까?');
        await printAndWait([
          you.get_colored_name(),
          '은(는) 또다시 생각하지 않을 수 없었다——',
        ]);
        await printAndWait(
          `어제 사이가 좋아 보였고 임신주머니까지 함께 사용했던 두 ${father.uma_sex_title}？`,
        );
        await printAndWait(
          '아니면 눈앞에서 결의를 다지던 팀의 누군가일까. 안팎의 구멍을 모두 채워 내쉬는 숨까지 짙은 정액 냄새가 났다……마지막에는 몸의 정액을 조금씩 입으로 핥고 음부에 밀어 넣어야 했다——혹은 그때 임신했을지도 모른다',
        );
        println();
        await printAndWait([
          '어느새,',
          you.get_colored_name(),
          '은(는) 아이의 미래에 이유 모를 두려움을 느끼고 있었다.',
        ]);
        if (children_count > 0) {
          await printAndWait(
            `あの子の幼い頃を思い出す。つい先日のようだったのに、${father.sex}は無垢な目の幼児から、自分が生まれた穴を欲の目で見る獣になっていた`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' は、また子に弄ばれ、母とは呼べない恥ずかしい姿になるのではないかと心配した',
          ]);
        } else {
          await printAndWait(
            `これから生まれるこの子は、ほかの${father.uma_sex_title}たちと同じように、自分を孕袋として扱うのだろうか……`,
          );
          await printAndWait(
            '……だめだ。務めを果たさねば。少なくとも、この子はきちんと育て上げる',
          );
        }
        println();
        await printAndWait('孕袋が育てた子が、まともに大人になれるのか？');
        await printAndWait(
          `毎日、母がさまざまな${father.elder_sibling_sex_title}に犯され、涎を垂らし、尊厳なく許しを請う姿を見て`,
        );
        await printAndWait('そんな子が、屈せず健やかに育つはずがあるのか？');
        await printAndWait('だが、笑う資格もない');
        await printAndWait([
          'いま、トイレの前を通りかかった小学部の',
          father.uma_sex_title,
          'に地へ押さえられ、肉棒に奉仕している ',
          you.get_colored_name(),
          ' は、その薄い光に希望を託すしかなかった',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_in_sleep: (() => {
    const title = '새로운 생명';
    /**
     * 孕袋が睡姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 품에 안았다——',
      ]);
      const ret = await degeneration_to_evil(
        '다정하게 쓰다듬는다',
        '말없이 저항한다',
      );
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          '의 마음은 사랑으로 가득했다.',
        ]);
        await printAndWait('아이의 아버지가 누구인지는 이제 아무래도 좋다.');
        await printAndWait([
          'むしろ、孕袋のいつもの仕事をしているだけで、こんなに可愛い子が得られる……',
          you.get_colored_name(),
          '은(는) 마음속으로, 얼굴도 모르는 아버지에게 고마워했다.',
        ]);
        await printAndWait('이제부터 이 아이를 잘 키워 내자……');
        await printAndWait([
          '어느새, 한때 ',
          you.get_colored_name(),
          '의 마음속에 있었던 트레이너로서의 책임감과 긍지가 다시 싹트기 시작했다……',
        ]);
        printButton('「！」', 1);
        await input();
        await printAndWait([
          '突然の水が、',
          you.get_colored_name(),
          ' を幻想から叩き起こした',
        ]);
        await printAndWait('抱き上げた子が、母へ人生最初の尿をかけた');
        await printAndWait([
          '自分の子に便所にされたこと——たとえ偶然でも——に、',
          you.get_colored_name(),
          ' は言いようのない快感を覚えた。この子が自分を便所として使えるように生まれてきたのだ、とさえ思えた',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は優しく子の秘部を舐め、体にかかった液を残らず口へ運び、満足げに指を舐めた',
        ]);
        println();
        await printAndWait('これほど卑しい姿は、最下等の孕袋でもこの程度だ');
        await printAndWait('こんな自分が、元の生活へ戻れるはずがない');
        await printAndWait('そんな生活へ戻ることなど、もう耐えられない');
        await printAndWait([
          you.get_colored_name(),
          '은(는) 품 안의 아이를 다정하게 바라보고 있다. 표정은 변하지 않는다.',
        ]);
        await printAndWait('하지만 마음속은 이미 달라졌다.');
        await printAndWait(
          '————どうすれば、この子を、自分を調教するのにいちばん向いた主人に育てられるだろう？',
        );
      } else {
        await printAndWait(
          '이 아이에게 어머니라면 마땅히 느껴야 할 감정이 희미해져 버렸다.',
        );
        await printAndWait(
          '갓 태어난 아이에게는 아무 잘못도 없다는 걸 알면서도……',
        );
        printButton('「！」', 1);
        await printAndWait([
          '갑자기,',
          you.get_colored_name(),
          '은(는) 소리를 질렀다.',
        ]);
        await printAndWait([
          '아이가 처음 본 소변은 마치 겨냥한 것처럼 뿜어져 나와,',
          you.get_colored_name(),
          '의 얼굴을 적셨다.',
        ]);
        await printAndWait(
          '간호사도 호의적인 웃음을 흘렸다. 아이가 건강한 것이 기쁘다는 듯이.',
        );
        await printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '의 마음에는 기쁨이 없었고, 머릿속에는 과거가 되살아났다.',
        ]);
        println();
        await printAndWait(
          `朝、両脚を開いて蹲り、眠気の残る${father.uma_sex_title}の朝勃ちを口で処理し、一日の初精と初尿を腹へ飲み込んだ経験`,
        );
        await printAndWait(
          `夕方、トレーニング場で練習を終えた${father.uma_sex_title}たちに欲の処理を懇願され、一日分の汗と垢のついた肉棒を口に含み、${father.couple_title}の疲れを口のなかへ吐き出させた経験`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            '은(는) 슬픈 마음으로 며칠 전 밤을 떠올렸다.',
          ]);
          await printAndWait([
            '自分の',
            children_count > 0 ? '子' : `担当${father.uma_sex_title}`,
            'が夢遊で部屋へ入り、半睡のなかで秘部を満たしたあと、眠っている唇を無理に開いて掃除したときも、自分は目覚められなかった',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            '은(는) 자신이 이런 생활에 익숙해지기 시작한 것은 아닌지 의심하기 시작했다……',
          ]);
          await printAndWait([
            '안 돼, 그렇게 생각하면 안 돼. ',
            you.get_colored_name(),
            '은(는) 정신을 차린 듯 고개를 저었다.',
          ]);
        }
        println();
        await printAndWait('……역시 떠오르는 것은 괴로운 기억뿐이다. 하지만……');
        await printAndWait(
          '품 안에서 아무것도 모른 채, 엄마 얼굴에 소변을 보고도 아랑곳하지 않고 깔깔 웃는 아이를 바라본다.',
        );
        await printAndWait('아이의 타고난 본성에는 선악이 없다……');
        await printAndWait('어쩌면, 아직 기회가 있을지도……?');
        println();
        await printAndWait('아이가 주변의 행동을 배우는 능력을 잊고 있다.');
        await printAndWait(
          `孕袋が奉仕する相手が、身分を問わない「すべての${father.uma_sex_title}」であることも、忘れている`,
        );
        await printAndWait(
          '傍らの看護師が、もう孕袋の口奉仕を欲しがっていることにも気づかない',
        );
        await printAndWait(
          '無意識に、実の子がかけた尿を舐め取っていることにも気づかない',
        );
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、看護師のスカートの下の太いものを吸わされても、瞳の光は消えなかった',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            '다시 공허한 꿈을 품으며,',
            you.get_colored_name(),
            '은(는) 이번에야말로 이 아이를 잘 키우겠다고 결심했다.',
          ]);
        } else {
          await printAndWait([
            '공허한 꿈을 품으며,',
            you.get_colored_name(),
            '은(는) 이 아이를 잘 키우겠다고 결심했다.',
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
    const title = '새로운 생명';
    /**
     * 孕袋が強姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 품에 안았다——',
      ]);
      const ret = await degeneration_to_evil(
        '아이에게는 아버지가 필요하다',
        '아니, 혼자서도 키울 수 있다',
      );
      if (ret === 1) {
        await printAndWait('……나 혼자라면 어떻게든 살아갈 수 있을지도 모른다.');
        await printAndWait('하지만 적어도 아이에게는 온전한 가정을 주고 싶다.');
        println();
        await printAndWait(
          `아이의 아버지를 바라보고, 품 안의 아이를 ${father.sex}에게 보여 주었다.`,
        );
        await printAndWait(
          `이 아이가,${father.sex}의 책임감을 일깨워 줄 수 있다면.`,
        );
        await printAndWait([
          father.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '와(과) 아이를 힘껏 끌어안고, 앞으로 소중히 여기겠다고 맹세했다.',
        ]);
        await printAndWait(
          '마음을 고쳐먹은 아버지와, 곁을 떠나지 않는 어머니.',
        );
        await printAndWait(
          '조금 전까지 마음속에 그리던 세 식구의 모습이 그대로 현실이 된 듯했다.',
        );
        println();
        await printAndWait('하지만……');
        await printAndWait([
          '孕袋としての職業本能が、',
          you.get_colored_name(),
          ' に見逃させなかった',
        ]);
        await printAndWait([
          '自分が乳をやるのを見て、',
          father.get_colored_name(),
          ' の股が震える様子を',
        ]);
        println();
        await printAndWait('家庭生活……いい口実だ');
        await printAndWait(
          'これなら、子に乳をやりながら肉棒を口へ入れられても、「栄養補給」で片づけられる',
        );
        await printAndWait([
          '夫である ',
          father.get_colored_name(),
          ' が、子を抱く自分を優しく抱きしめる絵は、家庭に疑問を持つ誰も疑念を捨てるだろう……下で濡れた秘部を太い肉棒が塞いでいることに気づかなければ',
        ]);
        await printAndWait(
          'いつか子が大きくなったら……子と、子の父に一緒に使われ、挟まれて、雄の肉棒に溺れる……',
        );
        println();
        await printAndWait([
          'そんな未来を思い、',
          you.get_colored_name(),
          ' は思わず唇を舐めた……',
        ]);
        await printAndWait('そんな明日を、待ち始める');
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は、欲を吐き出すだけ吐き、責任など考えず中に出した ',
          father.get_colored_name(),
          '을(를) 노려보았다.',
        ]);
        await printAndWait(
          `이런 ${father.sex}이(가) 아버지로서 책임을 질 리 없다.`,
        );
        await printAndWait(
          '필요한 것은 치욕 속에서도 자신과 아이를 지탱하고, 아이를 지켜 줄 상대다.',
        );
        await printAndWait(
          '自分が欲の処理道具にされているとき、最後の声の出口まで肉棒で塞ぐ屑ではない',
        );
        println();
        await printAndWait('나 혼자라도 이 아이를 키울 것이다.');
        await printAndWait([
          '이때 ',
          you.get_colored_name(),
          '은(는) 가장 험난한 길을 선택했다.',
        ]);
        println();
        await printAndWait('갑자기 품 안의 아이가 울기 시작했다.');
        await printAndWait('배가 고픈 걸까? 젖을 먹고 싶은 걸까?');
        await printAndWait('ならば……調教され尽くした今のこの体は');
        await printAndWait(
          `乳首を吸われた瞬間、自分の乳首を噛み、舐めた${father.uma_sex_title}たちを思い出すだろう`,
        );
        await printAndWait(
          '胸を含ませた瞬間、揉まれ搾られた夜を思い出して、すぐに果てるだろう',
        );
        await printAndWait(
          '子が乳を飲み終わり、胸に寄りかかったとき……赤ん坊の体温に近い肉棒が胸の前で主権を示し、最後に口へ濃い白濁を注いだ夜を、思い出さないだろうか？',
        );
        println();
        await printAndWait(
          'そして、それを乗り越え、ようやくこの子を育て上げたとして……',
        );
        await printAndWait(
          '愛が何かを知る前に、本能で性を理解した目を、子が自分へ向けたとき',
        );
        await printAndWait('나는 어떻게 해야 할까.');
        println();
        await printAndWait('눈앞에 놓인 길은 캄캄했다……');
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_dedicate: (() => {
    const title = '새로운 생명';
    /**
     * 孕袋が自ら身を捧げて子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 품에 안았다——',
      ]);
      const ret = await degeneration_to_evil('歓びを思い出す', '母性が湧く');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 아이를 안고 마음속에서 격렬한 감정이 솟아오르는 것을 느꼈다.',
        ]);
        await printAndWait([
          '이 아이는 ',
          you.get_colored_name(),
          '와(과) ',
          father.get_colored_name(),
          '이(가) 맺어져 태어난 아이다.',
        ]);
        await printAndWait('……違う。結ばれたのではない');
        await printAndWait([
          you.get_colored_name(),
          ' の遺伝子が自ら服し、',
          father.get_colored_name(),
          ' の遺伝子の下に跪いて生まれた産物だ',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' の体は、相性に抗えず、遺伝子の奥の渇望に抗えない',
        ]);
        await printAndWait([
          '이 아이의 얼굴을 보자,',
          you.get_colored_name(),
          '의 마음은 갖가지 애정으로 가득 찬다.',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない甘い侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を連れて外へ出る絵を思うと、自分が ',
          father.get_colored_name(),
          ' の専属孕袋である証明を持ち歩いているようで……',
        ]);
        await printAndWait([you.get_colored_name(), ' の下は、思わず震えた']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 아이를 안고 마음속에 파문이 이는 것을 느꼈다.',
        ]);
        await printAndWait([
          '이 아이는 ',
          you.get_colored_name(),
          '와(과) ',
          father.get_colored_name(),
          '이(가) 맺어져 태어난 아이다.',
        ]);
        await printAndWait('違う。結ばれたのではない');
        await printAndWait([
          father.get_colored_name(),
          ' の遺伝子が ',
          you.get_colored_name(),
          ' の遺伝子を侵して生まれた産物だ',
        ]);
        await printAndWait([
          'この体に生まれつきの奴隷性に抗いがたい。心底では受け入れられず、嫌悪していても、改造された体は子のための部屋を自ら開き、',
          father.get_colored_name(),
          ' に種を播かれる準備を整える',
        ]);
        await printAndWait([
          '품 안의 아이를 보며,',
          you.get_colored_name(),
          '은(는) 원망했어야 했다.',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を宿した夜、',
          father.get_colored_name(),
          ' の求めで、',
          you.get_colored_name(),
          ' は子犬のように四つん這いになり、精で満たされ、両手が体を支えられなくなるまで続き、',
          father.get_colored_name(),
          ' はやっと肉棒を抜き、',
          you.get_colored_name(),
          ' の口へ入れて終わりにした',
        ]);
        await printAndWait([
          '하지만 두 사람의 유전자는 그토록 잘 맞았던 걸까.',
          you.get_colored_name(),
          '은(는) 끝내 미워할 수 없었고, 마음속에는 어머니라 불리는 감정만이 솟아올랐다.',
        ]);
        await printAndWait([
          '——ただ、',
          you.get_colored_name(),
          ' はまだ知らない。この子が育ったあと、その感情は再び遺伝子上の屈服へと変わる……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
