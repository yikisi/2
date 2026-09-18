/**
 * @file 调教地文 - 其他
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');

module.exports = {
  /** @param {CharaTalk} chara 想加入3P的第三者 */
  async join_3p(chara) {
    era.print([
      chara.get_colored_name(),
      ' с пылающим лицом хочет присоединиться… Принять?',
    ]);
    era.printButton('«Как раз вовремя»', 1);
    era.printButton('Лучше не надо…', 2);
    return (await era.input()) === 1;
  },
  /**
   * @param {CharaTalk} chara 想加入3P的第三者
   * @param {CharaTalk} you 玩家
   */
  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' бросается в объятия ',
      you.get_colored_name(),
      '…',
    ]);
  },
  /**
   * @param {CharaTalk} chara 想加入3P的第三者
   * @param {CharaTalk} lover 主要床伴
   * @param {CharaTalk} you 玩家
   */
  async join_3p_force(chara, lover, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' получив согласие ',
      lover.get_colored_name(),
      ', эффектно игнорирует протесты ',
      you.get_colored_name(),
      '…',
    ]);
  },
  /** @param {CharaTalk} chara 想加入3P的第三者 */
  async join_3p_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' закрывает лицо и уходит…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {string} p_desc 肉棒尺寸的形容词
   */
  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    ' ',
    p_desc,
    ' член встал!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {string} b_desc 乳房尺寸的形容词
   */
  get_nipple_be_erect: (chara, b_desc) => [
    'Тёмные вишенки выглянули у ',
    chara.get_colored_name(),
    ' на кончиках двух ',
    b_desc,
    ' грудей……',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    ': ',
    part,
    ' увлажняется!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    ': ',
    part,
    ' всё ещё кровоточит!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    ': ',
    part,
    ' разрывается от растяжения!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_virgin 是否破处，如果是true就是失去处女，如果是false就是失去童贞
   */
  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? ' лишилась девственности!' : ' лишился девственности!',
  ],
  /**
   * 角色射精时，玩家决定让角色射在哪里的提示词
   * @param {CharaTalk} chara
   */
  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    ' — член уже на пределе……',
  ],
  /**
   * 角色射精时，玩家决定让角色体内射精的按钮
   * @param {string} part 角色射精时，玩家与肉棒的接触位置
   */
  get_bt_cum_in: (part) => `принять ${part} внутрь`,
  /** 角色射精时，玩家决定让角色体外射精的按钮 */
  bt_cum_out: 'Уклониться от струи',
  /**
   * 角色射精时，玩家决定让角色体外射精的结果
   * @param {CharaTalk} chara 射精的角色
   * @param {CharaTalk} you 玩家
   * @param {string} part 角色射精时，玩家与肉棒的接触位置
   * @param {boolean} stop_success 选择体外的话是否成功
   * @param {boolean} towards_face 选择体外的话是朝向脸还是身体
   */
  async orgasm_denial(chara, you, part, stop_success, towards_face) {
    if (stop_success) {
      era.print([
        you.get_colored_name(),
        ' — ',
        part,
        ' выпускает ',
        chara.get_colored_name(),
        ' — готовый член, и тёплая сперма бьёт прямо в ',
        you.get_colored_name(),
        ' — ',
        towards_face ? 'хорошенькое лицо' : 'тело',
        '…',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' в гонке с ',
        chara.get_colored_name(),
        ' проигрываешь……',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    ' теряет силы от чрезмерной траты…',
  ],
  /** @param {CharaTalk} chara */
  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    ' от чрезмерной траты энергии теряет сознание…',
  ],
  /**
   * 获得欢愉刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pleasure(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' дрожит от сильного удовольствия…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' чувствует послевкусие наслаждения, лицо расслаблено…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' будто сильное наслаждение обожгло тело и душу…',
        ]);
    }
  },
  /**
   * 获得同心刻印
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async mark_meek(chara, you) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' стали ещё ближе к единому целому……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' ещё сильнее подчиняется……',
      ]);
    }
  },
  /**
   * 获得苦痛刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pain(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' морщит лицо, терпя боль…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' издаёт мучительный стон…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' от невыносимой боли плачет и кричит…',
        ]);
    }
  },
  /**
   * 获得羞耻刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_shame(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' стыдливо краснеет…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' словно во власти стыда…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' полностью во власти стыда…',
        ]);
    }
  },
  /**
   * 获得羞耻刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_hate(chara, level) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait(
        'Хоть вы уже и близки, но, кажется, перегнули палку',
      );
    }
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' сверлит тебя острым взглядом……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' показывает гневное лицо……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' лицо от гнева перекашивается, она тихо ругается……',
        ]);
    }
  },
  /**
   * 获得淫纹
   * @param {CharaTalk} chara
   * @param {number} level
   * @param {boolean} is_new 是否是新获得的淫纹
   */
  async mark_ero(chara, level, is_new) {
    if (is_new) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' на низу живота появляется инмон……',
      ]);
    }
    switch (level) {
      case 1:
        await era.printAndWait('Инмон показывает траекторию яйцеклеток……');
        break;
      case 2:
        await era.printAndWait(
          'Инмон с ростом плода становится ещё прекраснее……',
        );
        break;
      case 3:
        await era.printAndWait(
          'Инмон теперь показывает шанс беременности и факт зачатия……',
        );
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} mother 被内射的母方
   * @param {CharaTalk} father 内射的父方
   * @param {boolean} is_mother_awake 母方是否醒着
   * @param {boolean} is_father_awake 父方是否醒着
   * @param {boolean} inmon_no_preg 是否淫纹避孕
   */
  async cum_in_womb(
    mother,
    father,
    is_mother_awake,
    is_father_awake,
    inmon_no_preg,
  ) {
    const talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
      era.get(`mark:${mother.id}:欢愉`) >= 2;
    const talent_sex =
      era.get(`talent:${mother.id}:淫乱`) > 0 ||
      era.get(`talent:${mother.id}:榨精成瘾`) > 0;
    const has_lv2_inmon = era.get(`mark:${mother.id}:淫纹`) >= 2;
    let talent_check = talent_palam || talent_sex;
    if (has_lv2_inmon) {
      await era.printAndWait([
        'На животе ',
        mother.get_colored_name(),
        ' сердечко матки медленно наливается……',
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) > 0 ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) > 0 ||
      era.get(`status:${mother.id}:短效避孕药`) > 0 ||
      inmon_no_preg
    ) {
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            father.get_colored_name(),
            ' — тёплая сперма заливает ноющую матку ',
            mother.get_colored_name(),
            '……',
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            ' тонет в этом кайфе……',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' в унижении чувствует, каково это — быть ',
              mother.sex_code > 0 ? 'футанари' : 'женщиной',
              ': её заливают……',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' с жадностью смакует, каково это — быть ',
              mother.sex_code > 0 ? 'футанари' : 'женщиной',
              ': её заливают……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' чувствует: выстрелившая сперма не встретила плёнку. Прошло насквозь……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' — сперма бьёт внутрь к беззащитным яйцеклеткам ',
            mother.get_colored_name(),
            '……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' в ужасе понимает: сейчас может забеременеть……',
          ]);
        }
      } else if (love < 90) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' чувствует: выстрелившая сперма идёт без преграды, прямо внутрь……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' — сперма бьёт внутрь к яйцеклеткам ',
            mother.get_colored_name(),
            ', которые уже сняли защиту……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' смутно чувствует: сейчас может забеременеть……',
          ]);
        }
      } else {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' в ужасе понимает: выстрелившая сперма идёт без преграды, прямо внутрь……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' — сперма бьёт внутрь к яйцеклеткам ',
            mother.get_colored_name(),
            ', которые уже хотят забеременеть……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' с жадностью смакует: сейчас станет матерью……',
          ]);
        }
      }
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' тонет в кайфе: ноющую матку заливает сперма — и о беременности уже ни думки……',
          ]);
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              era.get('tflag:强奸') !== father.id
                ? ' в унижении чувствует, каково это — быть '
                : ' с радостью вкушает, каково это — быть ',
              mother.sex_code > 0 ? 'футанари' : 'женщиной',
              ' ……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    }
  },
  /**
   * 内射受精并马上被淫纹感知到的情况
   * @param {CharaTalk} mother 受孕的母方
   * @param {CharaTalk} father 内射的父方
   */
  be_pregnant(mother, father) {
    era.print([
      'После того как ',
      father.get_colored_name(),
      ' кончает внутрь, клеймо Похоти ',
      mother.get_colored_name(),
      ' стало странным…',
    ]);
  },
  report_preg_in_love: (() => {
    /**
     * 佳偶及以上关系怀孕
     * @author 雞雞
     * @param {CharaTalk} mother 母方
     * @param {CharaTalk} father 父方
     * @param {number} unexpected_pregnant 意外怀孕
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' радостно смотрит на узор беременности на инмоне живота и весело докладывает ',
          father.get_colored_name(),
          ' хорошую новость.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' радостно смотрит на тест в руке и весело докладывает ',
          father.get_colored_name(),
          ' хорошую новость.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          ' переспрашивает снова и снова, но ответ всё тот же: ребёнок — его плоть и кровь.',
        ]);
        await era.printAndWait([
          'Но ',
          father.get_colored_name(),
          ' совершенно этого не помнит……',
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            'Как забеременела — не помнит, но ',
            mother.get_colored_name(),
            ' свято верит: отец ребёнка — только горячо любимый ',
            father.get_colored_name(),
            '.',
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          ' осторожно обнимает ',
          mother.get_colored_name(),
          ', вместе празднуя зарождение новой жизни……',
        ]);
      }
    };
    f.title = 'Зарождение';
    return f;
  })(),
  report_preg: (() => {
    /**
     * 热恋及以下关系怀孕
     * @author 雞雞
     * @param {CharaTalk} mother 母方
     * @param {CharaTalk} father 父方
     * @param {number} unexpected_pregnant 意外怀孕
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' бледнеет, глядя на узор беременности на инмоне живота, и бежит в туалет блевать.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' бледнеет, глядя на тест в руке, и снова блюёт над раковиной.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' совершенно не помнит, как забеременела; трудно поверить, что виновник — ',
          father.get_colored_name(),
          ', но, по сути, только ',
          father.sex,
          ' на это способен(на)……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          'Потом ',
          mother.get_colored_name(),
          ' осторожно говорит ',
          father.get_colored_name(),
          ' о беременности.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' переспрашивает снова и снова, но ответ всё тот же: ребёнок — его плоть и кровь.',
        ]);
        await era.printAndWait([
          'Хотя ',
          father.get_colored_name(),
          ' ничего не помнит, но всё равно под слезами ',
          mother.get_colored_name(),
          ' берёт на себя отцовство……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '……Хотя ',
            father.get_colored_name(),
            ' на самом деле тоже чуть хотел(а) стать матерью……',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          'Потом ',
          mother.get_colored_name(),
          ' дрожа говорит ',
          father.get_colored_name(),
          ' о беременности.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' будто видит, как у ',
          mother.get_colored_name(),
          ' на глаза наворачиваются слёзы……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' робко просит ',
          father.get_colored_name(),
          ' взять на себя отцовство……',
        ]);
      } else {
        await era.printAndWait([
          'Потом ',
          mother.get_colored_name(),
          ' холодно говорит ',
          father.get_colored_name(),
          ' о беременности.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' будто видит, как у ',
          mother.get_colored_name(),
          ' на глаза наворачиваются слёзы……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' зло требует ',
          father.get_colored_name(),
          ' взять на себя отцовство……',
        ]);
      }
    };
    f.title = 'Нечаянность';
    return f;
  })(),
  have_baby: (() => {
    /**
     * 孩子出生，热恋及以下关系
     * @author 雞雞
     * @param {CharaTalk} mother 母方
     * @param {CharaTalk} father 父方
     * @param {number} unexpected_pregnant 意外怀孕
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' застенчиво смотрит на ',
          father.get_colored_name(),
          ', будто не знает, как смотреть в лицо отцу ребёнка.',
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' застенчиво смотрит на ',
          father.get_colored_name(),
          ', будто не знает, как относиться к отцу ребёнка.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' смотрит на ',
          father.get_colored_name(),
          ' пустым взглядом, но к ребёнку лицо полное заботы.',
        ]);
      }
    };
    f.title = 'Новая жизнь';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} awake 角色是否醒着
   */
  async shop_start(chara, you, awake) {
    if (!awake) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' спит и ни о чём не знает. Что ',
        you.get_colored_name(),
        ' собирается сделать — ',
        chara.sex,
        ' ничего не чувствует……',
      ]);
    } else if (era.get(`mark:${chara.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' холодно смотрит на ',
        you.get_colored_name(),
        ' — в глазах одна злоба……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' вызывающе смотрит на ',
        you.get_colored_name(),
        ' — что секс-рабыня вообще может выкинуть……',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' смотрит на ',
        you.get_colored_name(),
        ' с нетерпением, не может дождаться, когда тело изменится……',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' робко смотрит на ',
        you.get_colored_name(),
        ', не понимая, зачем это……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' тревожно смотрит на ',
        you.get_colored_name(),
        ', не зная, что будет дальше……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_sleep(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' спит и ни о чём не знает. Что ',
      you.get_colored_name(),
      ' успел сделать — ',
      chara.sex,
      ' не чувствует……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' терпит перемены тела и насмехается: ',
      you.get_colored_name(),
      ' играет телом, а ',
      chara.sex,
      ' — секс-игрушка, которую крутят как вздумается……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' чувствует перемены тела и не может не захотеть разделить наслаждение с ',
      you.get_colored_name(),
      '……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' смотрит на ',
      you.get_colored_name(),
      ' со слезами на глазах, но сознание рано или поздно изменится вслед за телом…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' разочарованно смотрит на ',
      you.get_colored_name(),
      ', грустя, что ',
      you.get_colored_name(),
      ' недоволен телом. А ',
      chara.sex,
      ' это тело носит……',
    ]);
  },
  /**
   * 第一次发现出轨
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 角色气性（可能是被淫纹扭曲过的结果）
   * @param {boolean} cuckold 角色是否是绿帽癖
   */
  after_betrayed_first(chara, you, characteristic, cuckold) {
    if (chara.race > 0) {
      era.print([
        chara.uma_sex_title,
        ': нюх очень острый, а с тела ',
        you.get_colored_name(),
        ' несётся похотливая вонь, которая без конца орёт окружающим: только что трахались.',
      ]);
      era.print([
        'Учуяв запах, ',
        chara.get_colored_name(),
        ' на измену ',
        you.get_colored_name(),
        ' отвечает ',
        cuckold
          ? 'глухим желанием…'
          : characteristic >= 0
            ? 'яростью…'
            : 'грустью…',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' — с тела несётся похотливая вонь, которая без конца орёт окружающим: только что трахались.',
      ]);
      era.print([
        'Заметив это, ',
        chara.get_colored_name(),
        ' на измену ',
        you.get_colored_name(),
        ' отвечает ',
        cuckold
          ? 'глухим желанием…'
          : characteristic >= 0
            ? 'яростью…'
            : 'грустью…',
      ]);
    }
  },
  /**
   * 第二次发现出轨
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 角色气性（可能是被淫纹扭曲过的结果）
   * @param {boolean} cuckold 角色是否是绿帽癖
   */
  after_betrayed_second(chara, you, characteristic, cuckold) {
    era.print([
      you.get_colored_name(),
      ' не может устоять перед соблазном и снова предаёт ',
      chara.get_colored_name(),
      '.',
    ]);
    era.print(
      'За мимолётной разрядкой похоти — сколько ещё клубков чувств сплетается?',
    );
    era.print([
      chara.race > 0 ? 'Учуяв запах, ' : 'Заметив это, ',
      chara.get_colored_name(),
      ' на измену ',
      you.get_colored_name(),
      ' реагирует ',
      cuckold
        ? 'глухим желанием…'
        : characteristic >= 0
          ? 'яростью…'
          : 'грустью…',
    ]);
  },
  /**
   * 多次发现出轨
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} cuckold 角色是否是绿帽癖
   */
  after_betrayed(chara, you, cuckold) {
    if (cuckold) {
      era.print([
        you.get_colored_name(),
        ' изменой безмерно ранит ',
        chara.get_colored_name(),
        ' — и одновременно поднимает глухое, невыразимое возбуждение……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' изменой приводит ',
        chara.get_colored_name(),
        ' в ярость……',
      ]);
    }
  },
};
