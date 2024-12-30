/**
 * @file 调教地文
 *
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const common_pregnant_report_in_love = require('#/event/ero/common-lines/common-pregnant-report-in-love');
const NormalCommandLines = require('#/event/ero/common-lines/normal/normal-common');
const RapeCommandLines = require('#/event/ero/common-lines/rape/rape-common');
const SleepCommandLines = require('#/event/ero/common-lines/sleep/sleep-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { shop_result_type_enum } = require('#/data/ero/juel-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const {
  breast_size,
  penis_desc,
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const { default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_breast_cup } = require('#/data/info-generator');

const optimized_part_names = {};
optimized_part_names[part_enum.mouth] = '口穴';
optimized_part_names[part_enum.virgin] = '小穴';
optimized_part_names[part_enum.anal] = '屁穴';

const hate_mark_desc = [
  '用锐利的目光瞪了过来……',
  '露出了愤怒的表情……',
  '愤怒得面容扭曲，低声咒骂着……',
];
const pain_mark_desc = [
  '面部扭曲，忍受着痛苦……',
  '发出了一阵痛苦的悲鸣……',
  '因过于痛苦而哭喊……',
];
const pleasure_mark_desc = [
  '由于强烈的快感颤抖着身体……',
  '接受着快感的余韵，面色舒缓……',
  '似乎被强烈的快乐烧灼了身心……',
];
const shame_mark_desc = [
  '羞辱地红着脸……',
  '似乎被羞辱所支配了……',
  '完全被羞辱支配了……',
];
const sex_mark_desc = [
  '淫纹显示出了卵子的活动轨迹……',
  '淫纹能随着胎儿的成长而变得更加瑰丽了……',
  '淫纹能显示出怀孕率和受孕的情况了……',
];

class CustomizedEro {
  /** @type {CustomizedEro} */
  static me;
  /** @type {function(number,number,*?):Promise} */
  static run_custom_ero;

  /**
   * @param {number} chara_id
   * @param [exclude]
   * @param {boolean} exclude.[normal]
   * @param {boolean} exclude.[sleep]
   * @param {boolean} exclude.[rape]
   */
  constructor(chara_id, exclude) {
    this.id = chara_id;
    if (!exclude?.normal) {
      this.normal = new NormalCommandLines(this);
    }
    if (!exclude?.sleep) {
      this.sleep = new SleepCommandLines(this);
    }
    if (!exclude?.rape) {
      this.rape = new RapeCommandLines(this);
    }
  }

  /**
   * 调教开始
   *
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  // eslint-disable-next-line no-unused-vars
  async ero_start(handle_ero_act) {}

  /**
   * 调教结束
   *
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  // eslint-disable-next-line no-unused-vars
  async ero_end(handle_ero_act) {}

  /**
   * 设置马娘偏好部位
   *
   * @param {Record<string,1>} attacker_parts
   * @param {Record<string,1>} defender_parts
   */
  // eslint-disable-next-line no-unused-vars
  set_preference(attacker_parts, defender_parts) {}

  /**
   * 马娘主动指令筛选器
   *
   * @returns {function(number): boolean}
   */
  filter_in_rape() {
    if (era.get(`tcvar:${this.id}:孕袋卖奶`)) {
      return (e) =>
        (ero_tagged_hooks[e] || default_tags).attacker_tags.findIndex(
          (t) =>
            t === ero_hook_tags.super_sadism ||
            t === ero_hook_tags.sadism ||
            t === ero_hook_tags.imp ||
            t === ero_hook_tags.insert,
        ) !== -1;
    }
    if (era.get('flag:惩戒力度') >= 2) {
      return (e) => e >= ero_hooks.missionary && e <= ero_hooks.stimulate_womb;
    }
    return (e) =>
      e >= ero_hooks.missionary && e <= ero_hooks.ask_stimulate_womb;
  }

  /** 下一回合：呻吟口上？ */
  async next_round() {}

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag
   */
  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      era.print([
        chara.get_colored_name(),
        ' ',
        penis_desc[get_penis_size(this.id)],
        ' 的肉棒勃起了！',
      ]);
    } else if (extra_flag.part === part_enum.breast) {
      let cup = get_breast_cup(this.id);
      cup > 'G' && (cup = 'G');
      era.print([
        '深色的小樱桃在 ',
        chara.get_colored_name(),
        ' 两只 ',
        breast_size[cup],
        ' 的乳房顶端探出了头……',
      ]);
    }
  }

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag
   */
  become_lubrication(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.breast) {
      const amount = era.get(`nowex:${this.id}:喷奶量`);
      amount &&
        era.print([
          chara.get_colored_name(),
          ' 的',
          { content: ' 胸部 ', color: buff_colors[2] },
          `${era.get(`ex:${this.id}:喷奶阻碍`) ? '猛然喷出了' : '分泌了'} `,
          { content: `${amount}ml 乳汁`, color: buff_colors[2] },
          '！',
        ]);
    } else {
      era.print([
        chara.get_colored_name(),
        ' 的 ',
        { content: part_names[extra_flag.part], color: buff_colors[2] },
        ' 变得湿润了！',
      ]);
    }
  }

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{continue:boolean,part:number}} extra_flag
   */
  wound(chara, me, callname, hook, extra_flag) {
    era.print(
      extra_flag.continue
        ? [
            chara.get_colored_name(),
            ' 的 ',
            { content: part_names[extra_flag.part], color: buff_colors[2] },
            ' 还在',
            { content: ' 流血 ', color: buff_colors[3] },
            '！',
          ]
        : [
            chara.get_colored_name(),
            ' 的 ',
            { content: part_names[extra_flag.part], color: buff_colors[2] },
            ' 被',
            { content: ' 撑裂 ', color: buff_colors[3] },
            '了！',
          ],
    );
  }

  /** @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{virgin:boolean}} extra_flag
   */
  lose_virginity(chara, me, callname, hook, extra_flag) {
    era.print([
      chara.get_colored_name(),
      ' 失去了 ',
      { content: extra_flag.virgin ? '处女' : '童贞', color: buff_colors[2] },
      '！',
    ]);
  }

  /**
   * @author 无名黑奴
   *
   * @param {boolean} stop_success 如果寸止的话是否成功
   */
  async orgasm_denial(stop_success) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0),
      touch = era.get(`tcvar:${this.id}:阴茎接触部位`);
    if (
      touch.part === part_enum.mouth ||
      touch.part === part_enum.virgin ||
      touch.part === part_enum.anal
    ) {
      if (
        await select_yes_or_no(
          [chara.get_colored_name(), ' 的肉棒已经达到极限……'],
          `以 ${optimized_part_names[touch.part]} 接纳`,
          '避开精芒',
        )
      ) {
        return 0;
      }
      if (!stop_success) {
        era.print([
          me.get_colored_name(),
          ' 在和 ',
          chara.get_colored_name(),
          ' 的竞速中失败了……',
        ]);
      } else {
        era.print([
          me.get_colored_name(),
          ' 的 ',
          optimized_part_names[touch.part],
          ' 吐出了 ',
          chara.get_colored_name(),
          ' 蓄势待发的肉棒，温热的精液径直喷向了 ',
          me.get_colored_name(),
          ' 的 ',
          touch.part === part_enum.mouth ? '俏脸' : '玉体',
          '……',
        ]);
      }
      return 2;
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async orgasm(chara, me, callname) {}

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async zero_stamina(chara, me, callname) {
    era.print([chara.get_colored_name(), ' 因体力过分消耗陷入了昏迷……']);
  }

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async lost_mind(chara, me, callname) {
    era.print([chara.get_colored_name(), ' 因精力过分消耗陷入了失神……']);
  }

  /**
   * 获取刻印
   *
   * @author 无名黑奴
   *
   * @param {number} level
   * @param {number} type
   * @param {boolean} _new
   */
  async get_mark(level, type, _new) {
    const chara = get_chara_talk(this.id);
    let message = '';
    switch (type) {
      case mark_enum.pleasure:
        message = pleasure_mark_desc[level - 1];
        break;
      case mark_enum.meek:
        if (era.get(`love:${this.id}`) >= 75) {
          message = ' 更加一心同体了……';
        } else {
          message = ' 更加屈服了……';
        }
        break;
      case mark_enum.pain:
        message = pain_mark_desc[level - 1];
        break;
      case mark_enum.shame:
        message = shame_mark_desc[level - 1];
        break;
      case mark_enum.hate:
        if (era.get(`love:${this.id}`) >= 75) {
          await era.printAndWait('虽说是在交往，但好像做得有点过头了');
        }
        message = hate_mark_desc[level - 1];
        break;
      case mark_enum.ero:
        message =
          (_new ? '小腹上出现了一个淫纹……' : '小腹上') +
          sex_mark_desc[level - 1];
    }
    await era.printAndWait([chara.get_colored_name(), ' ', message]);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prison(chara, me, callname, hook) {}

  /**
   * @author 雞雞
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  async cum_in_womb(chara, me, callname, hook, extra_flag) {
    const father = get_chara_talk(extra_flag.father_id),
      mother = get_chara_talk(extra_flag.mother_id),
      talent_palam =
        era.get(`talent:${mother.id}:子宫敏感`) ||
        era.get(`mark:${mother.id}:欢愉`) >= 2,
      talent_sex =
        era.get(`talent:${mother.id}:淫乱`) ||
        era.get(`talent:${mother.id}:榨精成瘾`),
      sex_mark = era.get(`mark:${mother.id}:淫纹`) >= 2,
      is_awake = sys_check_awake(mother.id);
    let talent_check = talent_palam || talent_sex;
    if (sex_mark) {
      await era.printAndWait([
        '在 ',
        mother.get_colored_name(),
        ' 的小腹上，代表子宫的心形图案正在慢慢填充……',
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) ||
      era.get(`status:${mother.id}:短效避孕药`)
    ) {
      if (is_awake && talent_check) {
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
        } else if (era.get('tflag:强奸') !== mother.id) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 在屈辱中感受到了身为 ',
            {
              content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
              color: buff_colors[2],
            },
            ' 的极乐……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 欣喜地品尝着身为 ',
            {
              content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
              color: buff_colors[2],
            },
            ' 的极乐……',
          ]);
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 射出的大量精子正朝向 ',
          mother.get_colored_name(),
          ' 毫无防备的卵子前进……',
        ]);
        is_awake &&
          !talent_check &&
          (await era.printAndWait([
            mother.get_colored_name(),
            ' 惊恐地意识到自己可能会怀孕的事实……',
          ]));
      } else if (love < 90) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 射出的大量精子正朝向 ',
          mother.get_colored_name(),
          ' 卸下防备的卵子前进……',
        ]);
        is_awake &&
          !talent_check &&
          (await era.printAndWait([
            mother.get_colored_name(),
            ' 朦胧地意识到自己可能会怀孕的事实……',
          ]));
      } else {
        if (
          era.get(`status:${mother.id}:反避孕套`) &&
          era.get(`tcvar:${father.id}:避孕套`) &&
          sys_check_awake(father.id)
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
        if (is_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 欣喜地品味着即将成为母亲的感觉……',
          ]);
        }
      }
      if (is_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 沉溺在发疼的子宫被精液充盈的快感之中，丝毫没有顾及到怀孕的可能性……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            era.get('tflag:强奸') !== mother.id
              ? ' 在屈辱中感受到了身为 '
              : ' 欣喜地品尝着身为 ',
            {
              content: era.get(`cflag:${mother.id}:性别`) ? '扶她' : '女性',
              color: buff_colors[2],
            },
            ' 的极乐……',
          ]);
        }
      }
    }
  }

  /**
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  be_pregnant(chara, me, callname, hook, extra_flag) {
    if (era.get(`mark:${extra_flag.mother_id}:淫纹`) === 3) {
      era.print([
        '在 ',
        get_chara_talk(extra_flag.father_id).get_colored_name(),
        ' 射进来之后，',
        get_chara_talk(extra_flag.mother_id).get_colored_name(),
        ' 的淫纹变得有点奇怪……',
      ]);
    } else {
      era.logger.debug(`角色 ${extra_flag.mother_id} 怀孕了！`);
    }
  }

  /**
   * @author 雞雞
   * @author 无名黑奴
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  async report_pregnant_between_weeks(chara, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id === 0) {
      return await CustomizedEro.me.report_pregnant_between_weeks(
        get_chara_talk(extra_flag.father_id),
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    const father = get_chara_talk(extra_flag.father_id),
      mother = get_chara_talk(extra_flag.mother_id),
      love = era.get(`love:${mother.id || father.id}`),
      unexpected_pregnant = LifeEventMarks.get_marks(
        mother.id,
      ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await common_pregnant_report_in_love(father, mother, unexpected_pregnant);
    } else {
      await print_event_name('意外', mother);
      await era.printAndWait([
        mother.get_colored_name(),
        ' 脸色煞白地看着 ',
        ...(era.get(`mark:${mother.id}:淫纹`) === 3
          ? [
              {
                content: '小腹淫纹上代表怀孕的图案',
                color: buff_colors[2],
              },
              '，冲到卫生间呕吐了起来。',
            ]
          : [
              { content: '手上的验孕棒', color: buff_colors[2] },
              '，又一次在洗手台上吐了出来。',
            ]),
      ]);
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 对自己如何怀孕完全没有印象，虽然难以相信犯人会是 ',
          father.get_colored_name(),
          '，但想来只有 ',
          father.get_colored_name(),
          ' 有这个可能……',
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
    }
  }

  /**
   * 孩子出生
   *
   * @author 雞雞
   *
   * @param {CharaTalk} father
   * @param {CharaTalk} mother
   * @param {number} child
   */
  async have_baby(father, mother, child) {
    if (mother.id === 0) {
      return await CustomizedEro.me.have_baby(father, mother, child);
    }
    if (era.get(`love:${mother.id || father.id}`) < 90) {
      era.drawLine();
      await print_event_name('新生命', mother);
      if (
        LifeEventMarks.get_marks(mother.id).unexpected_pregnant ===
        unexpected_pregnant_enum.father_sleep
      ) {
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
      era.println();
    }
  }

  /**
   * 进入能力升级
   *
   * @author 无名黑奴
   */
  async shop_start() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.drawLine();
    if (!sys_check_awake(this.id)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 沉睡着，对 ',
        me.get_colored_name(),
        ` 将要对${chara.sex}做的事情丝毫不觉……`,
      ]);
    } else if (era.get(`mark:${this.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 冷冷地看着 ',
        me.get_colored_name(),
        '，眼中只有愤恨……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 挑衅地看着 ',
        me.get_colored_name(),
        '，区区性奴还能搞出什么花样……',
      ]);
    } else if (
      era.get(`mark:${this.id}:淫纹`) ||
      era.get(`mark:${this.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 跃跃欲试地看着 ',
        me.get_colored_name(),
        '，等不及让自己发生什么变化……',
      ]);
    } else if (era.get(`mark:${this.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 怯生生地看着 ',
        me.get_colored_name(),
        '，不明白为什么要这么做……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 不安地看着 ',
        me.get_colored_name(),
        '，不知道接下来将会发生什么……',
      ]);
    }
  }

  /**
   * 离开能力升级
   *
   * @author 无名黑奴
   *
   * @param {{hate_clear:number,mark_clear:number,pleasure_delta:number,sex_delta:number,skill:number,talent:number}} extra_flag
   */
  async shop_end(extra_flag) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (extra_flag.skill || extra_flag.talent) {
      era.drawLine();
      if (!sys_check_awake(this.id)) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 沉睡着，对 ',
          me.get_colored_name(),
          ` 对${chara.sex}做的事情丝毫不觉……`,
        ]);
      } else if (era.get(`mark:${this.id}:反抗`)) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 忍受着身体的变化，对 ',
          me.get_colored_name(),
          ` 把${chara.sex}当作性玩具肆意摆弄的行为出言讥讽……`,
        ]);
        return shop_result_type_enum.hate;
      } else if (
        era.get(`mark:${this.id}:淫纹`) ||
        era.get(`mark:${this.id}:欢愉`)
      ) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 感受着身体的变化，忍不住想和 ',
          me.get_colored_name(),
          ' 一起享受欢愉……',
        ]);
        return shop_result_type_enum.pleasure;
      } else if (era.get(`mark:${this.id}:同心`) >= 2) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 看着 ',
          me.get_colored_name(),
          ' 泫然欲涕，但意识总有一天会被身体潜移默化地改变……',
        ]);
        return shop_result_type_enum.slave;
      } else {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 失望地看着 ',
          me.get_colored_name(),
          '，对 ',
          me.get_colored_name(),
          ` 不满意${chara.sex}身体的事实感到悲伤……`,
        ]);
        return shop_result_type_enum.lover;
      }
    }
  }

  /**
   * @author 雞雞
   *
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{partners:number[]}} extra_flag
   */
  // eslint-disable-next-line no-unused-vars
  async after_betrayed(chara, me, callname, hook, extra_flag) {
    const race = era.get(`cflag:${this.id}:种族`),
      like_betrayed = era.get(`talent:${this.id}:绿帽癖`);
    switch (era.get(`exp:${this.id}:被绿次数`) + 1) {
      case 1:
        era.drawLine();
        await era.printAndWait([
          race ? chara.get_uma_sex_title() + '的鼻子十分灵敏，而 ' : '',
          me.get_colored_name(),
          ' 身上传来的淫臭味无时无刻不在向周遭宣布着自己刚才马儿跳过的事实。',
          { isBr: true },
          race ? '嗅到气味的 ' : '察觉此事 ',
          chara.get_colored_name(),
          ' 对 ',
          me.get_colored_name(),
          ' 的不忠产生了',
          like_betrayed
            ? '情欲'
            : era.get(`cflag:${this.id}:气性`) >= 0
              ? '愤慨'
              : '悲伤',
          '的情绪……',
        ]);
        break;
      case 2:
        era.drawLine();
        await era.printAndWait([
          me.get_colored_name(),
          ' 没有抵受住诱惑，再次背叛了 ',
          chara.get_colored_name(),
          '。',
          { isBr: true },
          '在一时性欲释放的背后，又有多少感情纠葛正在蔓延缠绕？',
          { isBr: true },
          race ? '嗅到气味的 ' : '察觉此事 ',
          chara.get_colored_name(),
          ' 对 ',
          me.get_colored_name(),
          ' 的不忠产生了',
          like_betrayed
            ? '情欲'
            : era.get(`cflag:${this.id}:气性`) >= 0
              ? '愤慨'
              : '悲伤',
          '的情绪……',
        ]);
        break;
      default:
        if (like_betrayed) {
          await era.printAndWait([
            me.get_colored_name(),
            ' 的不忠让 ',
            chara.get_colored_name(),
            ' 无比伤心的同时，又涌起了一股隐隐难言的兴奋……',
          ]);
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            ' 的不忠让 ',
            chara.get_colored_name(),
            ' 无比愤怒……',
          ]);
        }
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   */
  async run(hook, extra_flag) {
    if (this[ero_hooks.keys[hook.hook]] !== undefined) {
      return await this[ero_hooks.keys[hook.hook]].call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        hook,
        extra_flag,
      );
    }
  }
}

module.exports = CustomizedEro;
