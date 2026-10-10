/**
 * @file 日常の地の文 - 子供
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_0(child, you) {
    const talk = [
      () =>
        era.print([
          '아직 어린 아이는 이제 막 서툴게 말을 배우기 시작해,',
          you.get_colored_name(),
          '을(를) 보자마자 즐거운 듯 종종걸음으로 달려온다.',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          '은(는) 땅바닥에서 데굴데굴 구르고 있다.',
          you.get_colored_name(),
          '은(는) 이대로 지구 반대편까지 굴러가는 것은 아닐까 걱정했다.',
        ]),
    ];
    get_random_entry(talk)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_1(child, you) {
    era.print([
      child.get_colored_name(),
      '은(는)',
      you.get_colored_name(),
      '과(와) 함께 달리기 연습을 하고 있다. 석양이 비치는 강가에 두 사람의 긴 그림자가 드리워졌다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {CharaTalk} parent
   */
  select_2(child, you, parent) {
    era.print([
      child.get_colored_name(),
      '은(는) 나이를 먹어, 이제는',
      parent.get_colored_name(),
      '에게 뒤지지 않을 만큼 아름다워졌다. 경주에서도 분명 부모를 뛰어넘을 것이다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_0(child, you, callname) {
    await child.say_and_wait([
      callname,
      '……! 나,',
      child.get_colored_name(),
      '이야!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, '! 배고파!']);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_2(child, you, callname) {
    const temp = [];
    // TALENTNAME:35 = 腋毛成长
    if (era.get(`talent:${child.id}:35`)) {
      temp.push('겨드랑이에 털이 나기 시작했어……');
    }
    // TALENTNAME:36 = 阴毛成长
    if (era.get(`talent:${child.id}:36`)) {
      temp.push('아래에 털이 나기 시작했어……');
    }
    if (child.sex_code !== 1) {
      temp.push('가슴이 커졌어……');
      // TALENTNAME:32 = 泌乳
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('하얀 것이 흘러나와……');
      }
    }
    if (child.sex_code > 0) {
      temp.push('아래가 커졌어……');
    }
    await child.say_and_wait([
      callname,
      '……몸 상태가 조금 이상해서……저기, ',
      get_random_entry(temp),
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_estrus(child, you, callname) {
    child.say(['하아……하아……', callname, '……뜨거워……이게 발정기……?']);
    await era.printAndWait([
      '그 뒤 ',
      you.get_colored_name(),
      '은(는) 서둘러 ',
      child.get_colored_name(),
      '에게 줄 발정 억제제를 사러 달려갔다.',
    ]);
  },
  growth_0: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와)',
          father.get_colored_name(),
          '은(는) 함께 즐겁게 아이와 놀며, 세 식구만의 행복한 시간을 보냈다.',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 자신과 어딘가 닮은 ',
            child.get_colored_name(),
            '을(를) 바라보며, 앞으로의 가정 생활에 대해 생각했다……',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와)',
          father.get_colored_name(),
          '은(는) 함께 즐겁게 아이와 놀며, 세 식구만의 행복한 시간을 보냈다.',
        ]);
        await era.printAndWait([
          '그 뒤,',
          mother.get_colored_name(),
          '은(는) 아이를 업은',
          father.get_colored_name(),
          '에게 미안한 눈길을 보냈다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는)',
          mother.get_colored_name(),
          '의',
          // CFLAGNAME:6 = 身高
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
            ? '머리'
            : '뺨',
          '을(를) 쓰다듬으며 괜찮다는 뜻을 전했다.',
        ]);
        await era.printAndWait([
          '용서받은 ',
          mother.get_colored_name(),
          '은(는) 다시 시선을 ',
          child.get_colored_name(),
          '에게 돌리며 자애로운 미소를 지었다.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 따뜻한 미소를 지으며 아이와 놀아주었고 ',
            child.get_colored_name(),
            '도 ',
            mother.get_colored_name(),
            '의 비참한 인생에서 얼마 안 되는 위안이 되었다.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) ',
            father.get_colored_name(),
            '이(가) 아이와 함께하려는 행동을 거부하진 않았지만 ',
            father.get_colored_name(),
            '에게는 무관심한 태도로 일관했다.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 결국 경계를 풀고,',
            father.get_colored_name(),
            '과(와) 함께 아이와 놀았다.',
          ]);
        }
      }
    };
    f.title = '성장';
    return f;
  })(),
  growth_1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는)',
          father.get_colored_name(),
          '의 어깨에 기대어 나날이 자라는 아이를 바라보며 행복하게 미소 지었다.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 나날이 자라는 아이를 볼 때마다,',
            father.get_colored_name(),
            '을(를) 향한 마음이 더욱 복잡해졌다.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 이렇게 살가운 아이도 곧 날개를 펴고 자신의 곁을 떠나리라 생각하니 쓸쓸해졌다.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '그래도',
            mother.get_colored_name(),
            '은(는)',
            father.get_colored_name(),
            '의 어깨에 기대어 나날이 자라는 아이를 바라보며 작은 만족감을 느꼈다.',
          ]);
        }
      }
    };
    f.title = '본격화';
    return f;
  })(),
  growth_2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와)',
          father.get_colored_name(),
          '은(는) 아이의 입학 동의서에 각자 이름을 적었다.',
        ]);
        await era.printAndWait([
          '작성을 마치자,',
          mother.get_colored_name(),
          '은(는) 곧바로 통학에 필요한 물건들을 준비하기 시작했다.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 아이도 트레센 학원에 들어간다는 사실에 등골이 오싹해졌다……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '과(와)',
            father.get_colored_name(),
            '은(는) 아이의 입학 동의서에 각자 이름을 적었다.',
          ]);
          await era.printAndWait([
            '작성을 마치고 나서도,',
            mother.get_colored_name(),
            '은(는) 현실감 없는 꿈속에 있는 듯한 기분에서 벗어나지 못했다.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '그래도',
            mother.get_colored_name(),
            '은(는) 그런 생각을 떨쳐 내고 통학에 필요한 물건들을 준비하기 시작했다.',
          ]);
        }
      }
    };
    f.title = '입학';
    return f;
  })(),
  /**
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   * @param {PrintedSpan} call_child
   */
  async load_talk(child, callname, call_child) {
    // CFLAGNAME:65 = 成长阶段
    switch (era.get(`cflag:${child.id}:15`)) {
      case 0:
        await child.say_and_wait([
          '으아아앙——',
          callname,
          '——',
          callname,
          '이(가) 좋아——',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '……저기……두고 가지 마,',
          call_child,
          '을(를)……(훌쩍)',
        ]);
    }
  },
};
