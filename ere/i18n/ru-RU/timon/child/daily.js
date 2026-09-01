/**
 * @file 日常地文 - 孩子
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
          'Малыш ещё лепечет, но стоит увидеть ',
          you.get_colored_name(),
          ' — радостно семенит навстречу.',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          ' катается по полу, и ',
          you.get_colored_name(),
          ' боится, как бы ',
          child.get_colored_name(),
          ' не укатился(ась) на другой конец планеты.',
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
      ' под руководством ',
      you.get_colored_name(),
      ' учится бегать: на тропе у реки в закате тянутся две длинные тени.',
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
      ' с годами вырос(ла) в такую же красавицу, как ',
      parent.get_colored_name(),
      ' — наверняка и в беговой карьере превзойдёт родителя.',
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
      '…! Я — ',
      child.get_colored_name(),
      '!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, '! Я голодная!']);
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
      temp.push('в подмышках выросли волосы…');
    }
    // TALENTNAME:36 = 阴毛成长
    if (era.get(`talent:${child.id}:36`)) {
      temp.push('внизу выросли волосы…');
    }
    if (child.sex_code !== 1) {
      temp.push('грудь стала больше…');
      // TALENTNAME:32 = 泌乳
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('течёт что-то белое…');
      }
    }
    if (child.sex_code > 0) {
      temp.push('внизу стало больше…');
    }
    await child.say_and_wait([
      callname,
      '… с моим телом что-то не так… э-э, ',
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
    child.say(['Ха-а… ха-а… ', callname, '… мне так жарко… это течка…?']);
    await era.printAndWait([
      'После этого ',
      you.get_colored_name(),
      ' спешит купить ',
      child.get_colored_name(),
      ' подавитель течки.',
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
          ' и ',
          father.get_colored_name(),
          ' вместе весело играют с ребёнком — трое проводят счастливое семейное время.',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' смотрит на чуть похожего(ую) на себя ',
            child.get_colored_name(),
            ', думая о будущей семейной жизни…',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' и ',
          father.get_colored_name(),
          ' вместе весело играют с ребёнком — трое проводят счастливое семейное время.',
        ]);
        await era.printAndWait([
          'После этого ',
          mother.get_colored_name(),
          ' виновато смотрит на ',
          father.get_colored_name(),
          ' с ребёнком на спине.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' гладит ',
          mother.get_colored_name(),
          ' по ',
          // CFLAGNAME:6 = 身高
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
            ? 'голове'
            : 'щеке',
          ', показывая, что не в обиде.',
        ]);
        await era.printAndWait([
          'Получив прощение, ',
          mother.get_colored_name(),
          ' снова переводит взгляд на ',
          child.get_colored_name(),
          ' и нежно улыбается.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' тепло улыбается, играя с ребёнком, и ',
            child.get_colored_name(),
            ' стал(а) одной из немногих отрад для ',
            mother.get_colored_name(),
            ' в её несчастной жизни.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' не противится тому, что ',
            father.get_colored_name(),
            ' хочет побыть с ребёнком, но на ',
            father.get_colored_name(),
            ' едва обращает внимание.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' в конце концов опускает защиту, и вот уже ',
            father.get_colored_name(),
            ' играет с ребёнком вместе с ней.',
          ]);
        }
      }
    };
    f.title = 'Рост';
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
          ' прислоняется к плечу ',
          father.get_colored_name(),
          ' и смотрит, как ребёнок растёт день за днём, счастливо улыбаясь.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' смотрит, как ребёнок растёт день за днём, и её чувства к ',
            father.get_colored_name(),
            ' делаются всё сложнее.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' грустит при мысли, что такой близкий ей ребёнок скоро расправит крылья и улетит от неё.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'Впрочем, ',
            mother.get_colored_name(),
            ' прислоняется к плечу ',
            father.get_colored_name(),
            ' и, глядя, как ребёнок растёт день за днём, всё же ощущает лёгкое удовлетворение.',
          ]);
        }
      }
    };
    f.title = 'Взросление';
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
          ' и ',
          father.get_colored_name(),
          ' ставят свои подписи под согласием на поступление ребёнка.',
        ]);
        await era.printAndWait([
          'Отложив ручку, ',
          mother.get_colored_name(),
          ' тут же принимается активно собирать всё, что нужно ребёнку для учёбы.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' узнаёт, что ребёнок тоже поступит в академию Трейсен, и по спине вдруг пробегает холодок…',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' и ',
            father.get_colored_name(),
            ' ставят свои подписи под согласием на поступление ребёнка.',
          ]);
          await era.printAndWait([
            'Даже отложив ручку, ',
            mother.get_colored_name(),
            ' всё ещё ощущает какую-то нереальность происходящего.',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'Впрочем, ',
            mother.get_colored_name(),
            ' всё же отбрасывает эти мысли и деятельно собирает всё, что нужно ребёнку для учёбы.',
          ]);
        }
      }
    };
    f.title = 'Поступление';
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
          'У-у-у, уа-а-а—',
          callname,
          '— я хочу к тебе, ',
          callname,
          '—',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '… э-э… можно… не бросать ',
          call_child,
          '… (всхлип)',
        ]);
    }
  },
};
