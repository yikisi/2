/**
 * @file プレイヤー - 調教
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} supporter
   * @param {CharaTalk} you
   * @param {string} penis_desc
   */
  become_erect(chara, supporter, you, penis_desc) {
    era.print([
      chara.get_colored_name(),
      '와 ',
      supporter.get_colored_name(),
      '의 봉사를 받자, ',
      you.get_colored_name(),
      '의 ',
      penis_desc,
      ' 육봉은 금세 단단하게 솟아올랐다.',
    ]);
  },
  bt_cum_in: '사정한다!',
  bt_cum_not: '조금 더 참기',
  get_cum_on_body: (target) => `${target}의 몸에 싼다!`,
  get_cum_on_face: (targets) => `${targets}의 얼굴에 싼다!`,
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} stop_success 寸止めに成功したか
   * @param {boolean} change_aim 他の部位へ出すことを選んだか
   * @param {boolean} cum_on_face 他の部位へ出す場合、顔射か。フェラで体外なら顔射、性交・肛交で体外なら身体
   * @param {[]} targets
   */
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), '은(는) 참아 내지 못했다!']);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          '은(는) 음경을 빼내어 ',
          ...targets,
          '의 얼굴을 향했다.',
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          '은(는) 음경을 빼내어 ',
          ...targets,
          '의 몸을 향했다.',
        ]);
      }
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) 사정하고 싶은 충동을 일단 억눌렀다……',
      ]);
    }
  },
  report_preg_not_love: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (you, father, unexpected_pregnant) => {
      if (era.get('flag:惩戒力度') >= 2) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아랫배의 음문에 떠오른 임신 무늬를 바라보다, 화장실로 뛰어가 토했다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손에 든 임신 검사기를 바라보다, 화장실로 뛰어가 토했다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 자신이 어떻게 임신했는지 전혀 기억하지 못한다. 누구라도 범인일 수 있다고 생각하니 ',
          you.get_colored_name(),
          '은(는) 소름이 끼쳤다……',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '……그런데도 ',
            you.get_colored_name(),
            '은(는) 아버지가 될 수도 있었을 텐데……',
          ]);
        }
      } else {
        await era.printAndWait([
          '잠시 혼란스러워하던 ',
          you.get_colored_name(),
          '은(는) 결국 ',
          father.get_colored_name(),
          '에게 알리기로 했다.',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            '는 몇 번이고 되물었지만, 아이가 자신의 핏줄이라는 대답은 바뀌지 않았다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            father.get_colored_name(),
            '에게는 그 기억이 전혀 없다……',
          ]);
        } else {
          await era.printAndWait([
            '마찬가지로 당황하다가 진정한 ',
            father.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '에게 아버지로서 책임을 다하겠다고 약속했다……',
          ]);
        }
      }
    };
    f.title = '뜻밖의 일';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} you
   * @param {CharaTalk} father
   */
  async have_baby_with_child(you, father) {
    if (era.get(`love:${father.id}`) >= 90) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 병상에 누워 갓 태어난 아이를 바라보며, 멍하니 아이의 아버지를 떠올린다.',
      ]);
      await era.printAndWait([
        '이렇게 짧은 사이에 ',
        father.get_colored_name(),
        '가 그토록 빨리 자라 여자인 자신（',
        you.get_colored_name(),
        '）에게 아이를 낳게 할 나이가 되리라고는 생각도 못 했다.',
      ]);
      await era.printAndWait([
        '말이 나오기가 무섭게 ',
        father.get_colored_name(),
        '가 방으로 뛰어들었다. 한때 자신의 품에서 젖을 먹던 자녀의 지금 뒷모습에, ',
        you.get_colored_name(),
        '은(는) 얼굴을 붉히며 가슴이 두근거리는 것을 어쩔 수 없다.',
      ]);
      await era.printAndWait([
        '어머니이기보다는 ',
        you.get_colored_name(),
        '은(는) ',
        father.get_colored_name(),
        '의 연인으로서 느끼는 행복을 택했다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 안고 끝없이 걱정한다.',
        father.get_colored_name(),
        '와의 근친상간으로 태어난 아이다. 이 아이의 앞날을 ',
        you.get_colored_name(),
        '은(는) 걱정하지 않을 수 없다.',
      ]);
      await era.printAndWait([
        '그때 ',
        father.get_colored_name(),
        '와……',
        you.get_colored_name(),
        '은(는) 그렇게 한탄하고 싶지만 말이 나오지 않는다.',
      ]);
      await era.printAndWait(
        '어머니로서의 사랑과 연인으로서의 사랑이 뒤섞여, 당사자조차 구분할 수 없는 감정이 되어 있었다.',
      );
      await era.printAndWait([
        '이윽고 그 감정은 응석 섞인 꾸중이 되어, 뒤늦게 찾아온 ',
        father.get_colored_name(),
        '에게 쏟아졌다.',
      ]);
    }
  },
  have_baby_with_fuck_buddy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 안아 들었다——',
      ]);
      era.printButton('아이의 아버지를 무시한다', 1);
      era.printButton(`${father.sex}도 함께 보자`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          father.get_colored_name(),
          '를 바라보는 눈은 공허하지만, 아이에게는 자애로운 눈길을 보낸다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 망설이다가 손짓으로 ',
          father.get_colored_name(),
          '를 가까이 불렀다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '는 기뻐하며 ',
          you.get_colored_name(),
          '을(를) 끌어안고, 함께 잠든 아이를 어른다.',
        ]);
      }
    };
    f.title = '새로운 생명';
    return f;
  })(),
};
