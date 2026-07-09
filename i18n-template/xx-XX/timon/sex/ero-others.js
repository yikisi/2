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
    era.print([chara.get_colored_name(), ' 面色绯红地想要加入……接受吗？']);
    era.printButton('「你来的正是时候」', 1);
    era.printButton('还是别了……', 2);
    return (await era.input()) === 1;
  },
  /**
   * @param {CharaTalk} chara 想加入3P的第三者
   * @param {CharaTalk} you 玩家
   */
  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 扑入 ',
      you.get_colored_name(),
      ' 怀中……',
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
      ' 征得 ',
      lover.get_colored_name(),
      ' 的同意后，华丽地无视了 ',
      you.get_colored_name(),
      ' 的抗议……',
    ]);
  },
  /** @param {CharaTalk} chara 想加入3P的第三者 */
  async join_3p_reject(chara) {
    await era.printAndWait([chara.get_colored_name(), ' 掩面而去……']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {string} p_desc 肉棒尺寸的形容词
   */
  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    ' ',
    p_desc,
    ' 的肉棒勃起了！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {string} b_desc 乳房尺寸的形容词
   */
  get_nipple_be_erect: (chara, b_desc) => [
    '深色的小樱桃在 ',
    chara.get_colored_name(),
    ' 两只 ',
    b_desc,
    ' 的乳房顶端探出了头……',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 变得湿润了！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 还在流血！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    ' 的 ',
    part,
    ' 被撑裂了！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_virgin 是否破处，如果是true就是失去处女，如果是false就是失去童贞
   */
  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? ' 失去了处女！' : ' 失去了童贞！',
  ],
  /**
   * 角色射精时，玩家决定让角色射在哪里的提示词
   * @param {CharaTalk} chara
   */
  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    ' 的肉棒已经达到极限……',
  ],
  /**
   * 角色射精时，玩家决定让角色体内射精的按钮
   * @param {string} part 角色射精时，玩家与肉棒的接触位置
   */
  get_bt_cum_in: (part) => `以 ${part} 接纳`,
  /** 角色射精时，玩家决定让角色体外射精的按钮 */
  bt_cum_out: '避开精芒',
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
        ' 的 ',
        part,
        ' 吐出了 ',
        chara.get_colored_name(),
        ' 蓄势待发的肉棒，温热的精液径直喷向了 ',
        you.get_colored_name(),
        ' 的 ',
        towards_face ? '俏脸' : '玉体',
        '……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' 在和 ',
        chara.get_colored_name(),
        ' 的竞速中失败了……',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    ' 因体力过分消耗脱力了……',
  ],
  /** @param {CharaTalk} chara */
  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    ' 因精力过分消耗陷入了失神……',
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
          ' 由于强烈的快感颤抖着身体……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 感受着快感的余韵，面色舒缓……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 似乎被强烈的快乐烧灼了身心……',
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
        ' 和 ',
        you.get_colored_name(),
        ' 更加一心同体了……',
      ]);
    } else {
      await era.printAndWait([chara.get_colored_name(), ' 更加屈服了……']);
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
          ' 面部扭曲，忍受着痛苦……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 发出了一阵痛苦的悲鸣……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 因过于痛苦而哭喊……',
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
        await era.printAndWait([chara.get_colored_name(), ' 羞辱地红着脸……']);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 似乎被羞耻感所支配了……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 完全被羞耻感支配了……',
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
      await era.printAndWait('虽说是已经很亲密的关系，但好像做得有点过头了');
    }
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 用锐利的目光瞪了过来……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 露出了愤怒的表情……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' 愤怒得面容扭曲，低声咒骂着……',
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
        ' 小腹上出现了一个淫纹……',
      ]);
    }
    switch (level) {
      case 1:
        await era.printAndWait('淫纹显示出了卵子的活动轨迹……');
        break;
      case 2:
        await era.printAndWait('淫纹能随着胎儿的成长而变得更加瑰丽了……');
        break;
      case 3:
        await era.printAndWait('淫纹能显示出怀孕率和受孕的情况了……');
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
        '在 ',
        mother.get_colored_name(),
        ' 的小腹上，代表子宫的心形图案正在慢慢填充……',
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
            ' 温热的精液正在充盈 ',
            mother.get_colored_name(),
            ' 发疼的子宫……',
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            ' 沉溺在快感之中……',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' 在屈辱中感受到了身为 ',
              mother.sex_code > 0 ? '扶她' : '女性',
              ' 的极乐……',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' 欣喜地品尝着身为 ',
              mother.sex_code > 0 ? '扶她' : '女性',
              ' 的极乐……',
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
            ' 感觉到自己射出的精液并没有被那一层薄膜阻拦……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' 射出的大量精子正朝向 ',
            mother.get_colored_name(),
            ' 毫无防备的卵子前进……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 惊恐地意识到自己可能会怀孕的事实……',
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
            ' 感觉到自己射出的精液畅通无阻……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' 射出的大量精子正朝向 ',
            mother.get_colored_name(),
            ' 卸下防备的卵子前进……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 朦胧地意识到自己可能会怀孕的事实……',
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
            ' 惊恐地发现自己射出的精液畅通无阻……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' 射出的大量精子正朝向 ',
            mother.get_colored_name(),
            ' 渴望怀孕的卵子前进……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 欣喜地品味着即将成为母亲的感觉……',
          ]);
        }
      }
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 沉溺在发疼的子宫被精液充盈的快感之中，丝毫没有顾及到怀孕的可能性……',
          ]);
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              era.get('tflag:强奸') !== father.id
                ? ' 在屈辱中感受到了身为 '
                : ' 欣喜地品尝着身为 ',
              mother.sex_code > 0 ? '扶她' : '女性',
              ' 的极乐……',
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
      '在 ',
      father.get_colored_name(),
      ' 射进来之后，',
      mother.get_colored_name(),
      ' 的淫纹变得有点奇怪……',
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
          ' 欣喜地看着小腹淫纹上代表怀孕的图案，欢快地向 ',
          father.get_colored_name(),
          ' 报告好消息。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 欣喜地看着手上的验孕棒，欢快地向 ',
          father.get_colored_name(),
          ' 报告好消息。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 再三询问确认，还是得到了孩子是自己骨肉的回答。',
        ]);
        await era.printAndWait([
          '但 ',
          father.get_colored_name(),
          ' 对此毫无印象……',
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            '虽然对如何怀孕毫无印象，但 ',
            mother.get_colored_name(),
            ' 坚信孩子父亲除了深爱的 ',
            father.get_colored_name(),
            ' 别无他想。',
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          ' 小心翼翼地拥抱着 ',
          mother.get_colored_name(),
          '，一起庆祝新生命的孕育时刻……',
        ]);
      }
    };
    f.title = '孕育';
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
          ' 脸色煞白地看着小腹淫纹上代表怀孕的图案，冲到卫生间呕吐了起来。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 脸色煞白地看着手上的验孕棒，又一次在洗手台上吐了出来。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 对自己如何怀孕完全没有印象，虽然难以相信犯人会是 ',
          father.get_colored_name(),
          '，但想来只有',
          father.sex,
          '有这个可能……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          '之后，',
          mother.get_colored_name(),
          ' 小心翼翼地向 ',
          father.get_colored_name(),
          ' 说出了怀孕的事。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 再三询问确认，还是得到了孩子是自己骨肉的回答。',
        ]);
        await era.printAndWait([
          '尽管 ',
          father.get_colored_name(),
          ' 对此毫无印象，但仍然在 ',
          mother.get_colored_name(),
          ' 的眼泪中选择负起父亲的责任……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '……虽然 ',
            father.get_colored_name(),
            ' 其实也有点想成为母亲……',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          '之后，',
          mother.get_colored_name(),
          ' 战战兢兢地向 ',
          father.get_colored_name(),
          ' 说出了怀孕的事。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 似乎看到了 ',
          mother.get_colored_name(),
          ' 的眼角泛泪……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' 胆怯地请求 ',
          father.get_colored_name(),
          ' 负起父亲的责任……',
        ]);
      } else {
        await era.printAndWait([
          '之后，',
          mother.get_colored_name(),
          ' 冷淡地向 ',
          father.get_colored_name(),
          ' 说出了怀孕的事。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 似乎看到了 ',
          mother.get_colored_name(),
          ' 的眼角泛泪……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' 愤恨地要求 ',
          father.get_colored_name(),
          ' 负起父亲的责任……',
        ]);
      }
    };
    f.title = '意外';
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
          ' 闪闪缩缩地看向 ',
          father.get_colored_name(),
          '，似乎是不知道应该怎么面对孩子的父亲。',
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 闪闪缩缩地看向 ',
          father.get_colored_name(),
          '，似乎是不知道应该怎么看待孩子的父亲。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 看向 ',
          father.get_colored_name(),
          ' 的眼神十分空虚，却对孩子露出了关爱的神情。',
        ]);
      }
    };
    f.title = '新生命';
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
        ' 沉睡着，对 ',
        you.get_colored_name(),
        ` 将要对${chara.sex}做的事情丝毫不觉……`,
      ]);
    } else if (era.get(`mark:${chara.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 冷冷地看着 ',
        you.get_colored_name(),
        '，眼中只有愤恨……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 挑衅地看着 ',
        you.get_colored_name(),
        '，区区性奴还能搞出什么花样……',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 跃跃欲试地看着 ',
        you.get_colored_name(),
        '，等不及让自己发生什么变化……',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 怯生生地看着 ',
        you.get_colored_name(),
        '，不明白为什么要这么做……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 不安地看着 ',
        you.get_colored_name(),
        '，不知道接下来将会发生什么……',
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
      ' 沉睡着，对 ',
      you.get_colored_name(),
      ` 对${chara.sex}做的事情丝毫不觉……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 忍受着身体的变化，对 ',
      you.get_colored_name(),
      ` 把${chara.sex}当作性玩具肆意摆弄的行为出言讥讽……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 感受着身体的变化，忍不住想和 ',
      you.get_colored_name(),
      ' 一起享受欢愉……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 看着 ',
      you.get_colored_name(),
      ' 泫然欲涕，但意识总有一天会被身体潜移默化地改变……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 失望地看着 ',
      you.get_colored_name(),
      '，对 ',
      you.get_colored_name(),
      ` 不满意${chara.sex}身体的事实感到悲伤……`,
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
        '的鼻子十分灵敏，而 ',
        you.get_colored_name(),
        ' 身上传来的淫臭味无时无刻不在向周遭宣布着自己刚才马儿跳过的事实。',
      ]);
      era.print([
        '嗅到气味的 ',
        chara.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 的不忠产生了',
        cuckold
          ? '隐隐的情欲……'
          : characteristic >= 0
            ? '愤慨的情绪……'
            : '悲伤的情绪……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' 身上传来的淫臭味无时无刻不在向周遭宣布着自己刚才马儿跳过的事实。',
      ]);
      era.print([
        '察觉此事，',
        chara.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 的不忠产生了',
        cuckold
          ? '隐隐的情欲……'
          : characteristic >= 0
            ? '愤慨的情绪……'
            : '悲伤的情绪……',
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
      ' 没有抵受住诱惑，再次背叛了 ',
      chara.get_colored_name(),
      '。',
    ]);
    era.print('在一时性欲释放的背后，又有多少感情纠葛正在蔓延缠绕？');
    era.print([
      chara.race > 0 ? '嗅到气味的 ' : '察觉此事，',
      chara.get_colored_name(),
      ' 对 ',
      you.get_colored_name(),
      ' 的不忠产生了',
      cuckold
        ? '隐隐的情欲……'
        : characteristic >= 0
          ? '愤慨的情绪……'
          : '悲伤的情绪……',
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
        ' 的不忠让 ',
        chara.get_colored_name(),
        ' 无比伤心的同时，又涌起了一股隐隐难言的兴奋……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' 的不忠让 ',
        chara.get_colored_name(),
        ' 无比愤怒……',
      ]);
    }
  },
};
