/**
 * @file シンボリルドルフ - 日常
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say(
          '누가 상상했겠나. 우리가 이런 관계가 될 줄은…… 이제 돌이킬 수 없겠군.',
        ),
      () => luna.say('나를 믿고 기대하는 사람들…… 그 마음을 탓할 수는 없어.'),
      () =>
        luna.say(
          '그대가 곁에 있어 준 덕분에, 허황되다는 비웃음을 받는 에덴에도 한 걸음씩 다가가고 있네.',
        ),
      () =>
        luna.say(
          '상대의 처지에서 생각하라고? 내 입장을 이해할 수 있는 사람은 없을 것 같군.',
        ),
      () =>
        luna.say(
          '학생회에 바라는 점은 종이에 적어 건네주게. 할 수 있는 한 모두의 바람을 이루어 주지.',
        ),
      () =>
        luna.say('승부복이 멋지다고? ……감옥을 멋지다고 부르고 싶지는 않군.'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('요즘 가끔은 머리가 견딜 수 없을 만큼 아파.'),
        () => luna.say('내가 잠드는 시간이 점점 늘어나고 있지 않나?'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () =>
          luna.say(
            '내 시야에서 벗어나지 말아 줘! 그대의 기척이 사라져 버릴 것 같아서……!',
          ),
        () =>
          luna.say(
            `${you.actual_name}, 아직 루나를 지켜봐 줄 거야? 나는 이제…… 내가 아니게 될 것 같아——`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say('시간을 낭비하지 마라.'),
      () => emperor.say('과오를 범하지 마라.'),
      () => emperor.say('짐을 실망시키지 마라.'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say('잠드는 시간이 줄어드는군. 좋다.'),
        () =>
          emperor.say('광대여, 짐의 상태가 좋은 지금 사냥을 몇 차례 준비하라!'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => emperor.say('나약함을 지우고 황제의 이름을 멀리까지 떨쳐라!'),
        () =>
          emperor.say(
            `누가 짐의 머릿속에서 소란을 피우느냐. ${emperor.sex}를 조용히 시켜라.`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say('썰렁한 농담이 떠오르지 않는군……'),
      () => luna.say('오늘 일정은 어떻게 되지?'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say('네놈이냐, 광대여.'),
      () => emperor.say('짐은 지금 기분이 좋다. 흥을 깨지 마라.'),
      () =>
        emperor.say(
          '만물에는 시작과 끝이 있는 법. 짐이 언젠가 시들더라도 후배들에게 향기를 남기도록 하라.',
        ),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝 */
  select_sleep(chara17) {
    chara17.say('스으…… 후우……');
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '그대가 심리학 책을 읽는 줄은 몰랐군. 나에게도 가르쳐 주겠나?',
        ),
      () => luna.say_and_wait('트레이너 자격시험에는 내가 출제한 문제도 있지.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('짐에게는 실력 없는 스승 따위 필요 없다.'),
      () => emperor.say_and_wait('어느 시대든 현자는 마땅히 존중받아야 한다.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('나도 한때는 달리는 것을 좋아했지……'),
      () => luna.say_and_wait('우리의 이상을 위해서라면 나는 물러서지 않아.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('이 순간, 온몸의 피가 끓어오르는구나!'),
      () =>
        emperor.say_and_wait(
          '자, 영웅과 용사들이 어떻게 발버둥 치는지 보여 다오!!!',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait('나는 아직 계속할 수 있어!'),
        () =>
          luna.say_and_wait('한 바퀴 더 달리지. 내 실력은 이 정도가 아니야.'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '컨디션은 『최상』, 훈련을 향한 의욕도 『상승』 중이네! 후후……',
              ),
            () =>
              luna.say_and_wait(
                '평소보다 상태가 좋군. 좋은 달리기를 보여 줄 수 있겠어.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('하루하루 쌓아 가는 것이 중요하지.'),
            () =>
              luna.say_and_wait(
                '훈련이 끝나면 함께 산책이라도…… 시간이 난다면 말이야.',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                '완벽한 상태라고 할 수는 없지만, 약한 소리를 할 수는 없지.',
              ),
            () => luna.say_and_wait('한 걸음씩 나아가세. 나는 버텨 낼 테니.'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                '승부복을 입는다는 건 신분을 바꾸는 일이지. 다시 황제가 되어야 해……',
              ),
            () =>
              luna.say_and_wait(
                '흠…… 아무래도 상태가 좋지 않군. 하지만 이 정도 피로로 약한 소리를 할 수는 없어.',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '곤란하군…… 몸이 무거워. 그래도 단 하루도 허비하고 싶지는 않은데……',
              ),
            () =>
              luna.say_and_wait(
                '평소의 감각이 돌아오지 않아…… 이대로는 안 된다는 걸 아는데도……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait('피로가 쌓이는 것이 느껴지는군.'),
        () => emperor.say_and_wait('믿을 필요 없다. 그저 따르기만 하면 된다.'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('출정할 때가 왔다.'),
            () => emperor.say_and_wait('황제의 이름을 하늘 끝까지 떨쳐라!'),
          );
          break;
        case 1:
          buffer.push(
            () =>
              emperor.say_and_wait('제국은 벽돌 하나를 쌓는 것에서 시작된다.'),
            () =>
              emperor.say_and_wait(
                '음……? 광대여, 농담이라도 해 보지 않겠느냐.',
              ),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('흥이 나지 않는군.'),
            () => emperor.say_and_wait('짐의 흥을 깨지 마라.'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('흥……'),
            () => emperor.say_and_wait('내 눈앞에서 꺼져라.'),
          );
          break;
        case -2:
          buffer.push(
            () =>
              emperor.say_and_wait(
                '광대여, 네놈이 일을 모조리 망쳐 놓은 것 같구나?',
              ),
            () => emperor.say_and_wait('짐에게 무례를 범하지 마라.'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_gift_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('이제 어린애가 아니야……! 에헤헤, 그래도 고마워!'),
      () =>
        luna.say_and_wait(
          '우리는 같은 이상을 품은 『공범』이야. 목표를 이룰 때까지 멈춰서는 안 되지…… 미안하군, 조금 부담스러웠나?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '오? 선물이라고? ……흥, 원하는 것은 짐이 직접 손에 넣는다.',
        ),
      () => emperor.say_and_wait('공물은 보물 창고에 쌓아 두어라.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '함께 즐겁게 여러 요리를 만들어 보세. 후후, 요리하는 과정도 즐거운 법이지. 특히 그대와 함께라면.',
        ),
      () =>
        luna.say_and_wait(
          '오전에 학생회 업무를 모두 끝냈지. 이제 여기에 집중할 수 있겠군.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_cook_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('음식을 만드는 일에도 깊은 학문이 깃들어 있군.'),
      () =>
        emperor.say_and_wait(
          '네게 하사하는 것이다. 경외하는 마음으로 먹도록 하라.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '……부끄럽군. 어른이 되고 나니 예전에는 아무렇지 않았던 포옹에도 조금은 열기가 도는 것 같아.',
        ),
      () => luna.say_and_wait('스으…… 후우……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('……깊은 잠……'),
      () =>
        emperor.say_and_wait(
          '난처한 일이 생긴다면, 광대여…… 짐을 깨우는 것을 허락하마.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '놀이라고……? 어릴 때 그대는 언제나 나를 안고 놀아 주었지.',
        ),
      () => luna.say_and_wait('노는 것은 좋지만, 시간을 낭비할 수는 없지.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('소일거리로서는 나쁘지 않군.'),
      () => emperor.say_and_wait('아직도 사냥 준비가 끝나지 않았느냐?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '싹트는 의지는 열정일까, 본능일까. 보이지 않는 힘이 나를 앞으로 이끄는군.',
        ),
      () =>
        luna.say_and_wait(
          `세 여신이시여, 정말 에덴이 있다면 나는 모든 ${luna.uma_sex_title}를 그곳으로 이끌겠습니다.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '짐에게는 들린다…… 실의와 패배에 빠진 자들이 이곳에 남긴 쓰라린 한이.',
        ),
      () =>
        emperor.say_and_wait(
          '제국이 끝내 무너지더라도 아름다운 경치와 유적은 오래도록 남을 것이다.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '세월이 화살 같다는 게 이런 뜻이겠지. 아직도 어릴 적처럼 심볼리 가문에서 함께 떠들고 있는 것 같은데.',
        ),
      () =>
        luna.say_and_wait(
          '우리는 몇 년이나 떨어져 있었지. 이제부터는 서로에게서 멀리 떨어지지 않는 게 좋겠어.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '짐이 잠든 동안, 짐의 뜻에 따라 이 행궁을 잘 관리했느냐?',
        ),
      () =>
        emperor.say_and_wait(
          '광대여, 짐을 충실히 섬긴다면 끝없는 영광을 약속하마.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '후후후…… 생강 없는 말은 『고삐 풀린 말』인가…… 중국어로 생강과 고삐는 소리가 같거든. 후후후!',
        ),
      () =>
        luna.say_and_wait(
          '사실 맛을 까다롭게 따지지는 않아. 하지만 보기 좋게 담겨 있고 향도 좋으면 더 입맛이 돌지.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('평소 식사는 배를 채울 수 있으면 그만이다.'),
      () => emperor.say_and_wait('짐은 음식에 별다른 요구가 없다.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '마음을 단련하고 인내를 길러, 못 하던 일도 해낼 수 있도록 한다. 낚시란 꽤 깊은 학문이군.',
        ),
      () =>
        luna.say_and_wait(
          '물고기를 잡더라도 기념사진만 남기게. 학원의 재산이니까.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '경기장에서 사냥하는 일 또한 일종의 낚시가 아니겠느냐?',
        ),
      () => emperor.say_and_wait('물속의 생명들……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '어린 시절이 조금 떠오르는군. 그대는 언제나 내 곁에 있었지.',
        ),
      () =>
        luna.say_and_wait(
          '이제는 나란히 걸을 수 있네——보게. 키가 많이 자랐지?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('영토를 시찰하는 것 또한 황제의 책무다.'),
      () =>
        emperor.say_and_wait(
          '앞쪽이 어째서 소란스러운 것이냐? 광대여, 가서 알아보거라.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('음…… 한 판 더!'),
      () =>
        luna.say_and_wait(`저것도, 이것도! ${you.actual_name}, 전부 해 보세!`),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('시끄러운 곳이군.'),
      () =>
        emperor.say_and_wait(
          '허구의 게임이 주는 위안은 공허할 뿐이다. 진정한 즐거움을 얻고 싶다면 용사들과 맞붙는 편이 낫지.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '그대가 원한다면…… 차라리 온천 호텔을 사들이는 건 어떻겠나?',
        ),
      () => luna.say_and_wait('추첨하는 이들 모두에게 행운이 찾아오기를.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('확률론은 심오한 학문이지.'),
      () =>
        emperor.say_and_wait(
          '온천에 가기로 했다면 굳이 이런 방식을 택할 이유가 있느냐?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('이 기회에 조금 쉬도록 하지.'),
      () =>
        luna.say_and_wait(
          '온갖 고통을 노랫소리로 털어 낼 수 있다면 얼마나 좋을까.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('극장과는 또 다른 맛이 있군.'),
      () =>
        emperor.say_and_wait(
          '아름다운 음악을 감상하는 것은 더없이 훌륭한 즐거움이지.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '좋은 작품이었군. 잠을 잘 생각이었는데 이야기에 눈길을 빼앗겼어.',
        ),
      () => luna.say_and_wait('요즘 영화는 이렇게나 생생하군. 식은땀이 났어.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('재미없군.'),
      () => emperor.say_and_wait('다음은 없을 것이다.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna シンボリルドルフ/ルナ
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈祷の出目。0-1の小数、小さいほど良い
   */
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `신사는 ${you.name}과(와) ${luna.name}에게 특별한 곳은 아니다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 행운을 비는 나이를 지났고, ${luna.name}는 언제나 실력으로 성과를 거두었다.`,
    );
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '을(를) 안도하게 한 것은 ',
      luna.get_colored_name(),
      '가 예전처럼 새로운 것에 끝없는 호기심을 품고 있다는 사실이었다.',
    ]);
    await era.printAndWait(
      `해마다 몇 번씩 복을 빌러 오는 것만으로도 ${luna.sex}에게는 충분히 신선한 경험이었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) ${luna.name}의 곁에 서서 ${luna.sex}가 『행운』을 뜻하는 제비를 뽑기를 기다렸다.`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('꽤 좋은 징조인 것 같군.');
      await era.printAndWait([
        luna.get_colored_name(),
        '는 기쁜 얼굴로 길한 점괘를 ',
        you.get_colored_name(),
        '에게 보여 준 뒤 나무에 매달았다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 문득 생각했다. 나도 좋은 점괘를 뽑아 볼까?`,
      );
      await era.printAndWait(
        `${luna.name}가 기뻐한다면 그것으로 충분하다. 앞이 보이지 않는 굽이진 길에 작은 희망이라도 보태기 위해서.`,
      );
      await era.printAndWait(
        `어떤 도움이라도 좋다. 아아…… 세 여신이시여, ${luna.name}를 지켜 주소서!`,
      );
    } else {
      await luna.say_and_wait('앞으로도 많은 장애물과 마주칠 것 같군.');
      await era.printAndWait([
        luna.get_colored_name(),
        '는 점괘를 ',
        you.get_colored_name(),
        '에게 보여 주지 않고 정성껏 접어 두었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 안색이 조금 어두워졌다.',
      ]);
      await era.printAndWait([you.get_colored_name(), '은(는) 알고 있었다.']);
      await era.printAndWait(
        '앞이 보이지 않는 굽이진 길에 신의 질책까지 더해진다면……',
      );
      await era.printAndWait('조금 짜증이 난다.');
    }
  },
  /**
   * @param {CharaTalk} emperor 皇帝
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈祷の出目。0-1の小数、小さいほど良い
   */
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `신사는 ${you.name}과(와) ${emperor.name}에게 특별한 곳은 아니다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 행운을 비는 나이를 지났고, ${emperor.name}은(는) 언제나 실력으로 성과를 거두었다.`,
    );
    await era.printAndWait([
      '하지만 ',
      you.get_colored_name(),
      '을(를) 놀라게 한 것은 ',
      emperor.get_colored_name(),
      '도 루나처럼 새로운 것에 끝없는 호기심을 품고 있다는 사실이었다.',
    ]);
    await era.printAndWait(
      `해마다 몇 번씩 복을 빌러 오는 것만으로도 ${emperor.sex}에게는 충분히 신선한 경험이었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) ${emperor.name}의 곁에 서서 ${emperor.sex}가 『행운』을 뜻하는 제비를 뽑기를 기다렸다.`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait(
        '압도적인 실력만 있다면 하늘조차 보살펴 주는 법이다.',
      );
      await era.printAndWait([
        emperor.get_colored_name(),
        '은(는) 제비를 뒤로 던졌고, ',
        you.get_colored_name(),
        '은(는) 황급히 받아 나무에 매달았다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 문득 생각했다. 나도 좋은 점괘를 뽑아 볼까?`,
      );
      await era.printAndWait(
        `${emperor.name}이(가) 기뻐한다면 그것으로 충분하다. 앞이 보이지 않는 굽이진 길에 작은 희망이라도 보태기 위해서.`,
      );
      await era.printAndWait(
        `어떤 도움이라도 좋다. 아아…… 세 여신이시여, ${emperor.name}을(를) 지켜 주소서!`,
      );
    } else {
      await emperor.say_and_wait('재미있군! 짐은 도전을 좋아한다.');
      await era.printAndWait([
        emperor.get_colored_name(),
        '은(는) 흥미롭다는 듯 손에 든 제비를 들어 올리고 호탕하게 웃었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 안색이 조금 어두워졌다.',
      ]);
      await era.printAndWait([you.get_colored_name(), '은(는) 알고 있었다.']);
      await era.printAndWait(
        '앞이 보이지 않는 굽이진 길에 신의 질책까지 더해진다면……',
      );
      await era.printAndWait('조금 짜증이 난다.');
    }
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `후배가 아이스크림을 사 주겠다고 성화더군…… 후후, 시간을 내서 ${luna.sex}와 함께 먹으러 가야겠어.`,
        ),
      () =>
        luna.say_and_wait(
          '요즘 식욕이 왕성한 이들이 많군. 식재료 구입량을 얼마나 늘려야 할지 계산해야겠어.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '여정의 큰 즐거움 중 하나는 발아래 땅이 길러 낸 음식을 맛보는 것이지.',
        ),
      () => emperor.say_and_wait('좋은 음식과 술을 바쳐라!'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '악몽을 꾸면 내게 말해 줘. 곁에서 밤을 지켜 줄 테니.',
        ),
      () =>
        luna.say_and_wait(
          '마음이 가라앉을 때는 『단풍』을 구경하며 마음에 『방풍』을 해 주는 거지…… 후후, 걸작이군.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          '광대여, 환심을 사기로 마음먹었다면 제대로 짐을 즐겁게 하라.',
        ),
      () =>
        emperor.say_and_wait(
          '……흥, 발끝으로 서는 것조차 못 한다면 곁에서 시중들 필요도 없다.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna シンボリルドルフ/ルナ */
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '요즘 가게들은 이렇게 인기가 많나? 아이들이 빠져드는 것도 무리는 아니군.',
        ),
      () => luna.say_and_wait('저쪽이 떠들썩하군. 가 보겠나?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('짐은 활기 넘치는 도시를 좋아한다.'),
      () => emperor.say_and_wait('백성들이 화목하게 즐기고 있군. 좋다.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_good_end GEかどうか（シンボリルドルフ形態）
   * @param {boolean} i_emperor 皇帝形態かどうか（でなければルナ）
   */
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait('태양과 달이 앞으로도 그대와 함께하기를');
      await chara17.say_and_wait(
        '……하지만 황제를, 그리고 루나를 잊지는 말아 줘',
      );
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 뒤돌아보며 떨고 있다.',
      ]);
      await chara17.say_and_wait('조심해…… 또 만나자(흐느낌)');
    } else if (i_emperor) {
      await chara17.say_and_wait('광대여, 헛수고를 몇 번이고 반복할 셈이냐?');
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 입술을 살짝 벌렸지만 목소리는 나오지 않았다.',
      ]);
      await chara17.say_and_wait('——！');
      await chara17.say_and_wait('——가지 마……');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        '은(는) 흐느끼고 있다. 하지만 ',
        you.get_colored_name(),
        '은(는) 이미 멀어지고 있다……',
      ]);
      await chara17.say_and_wait(
        '약속했잖아…… 무슨 일이 있어도 헤어지지 않겠다고——',
      );
    }
  },
};
