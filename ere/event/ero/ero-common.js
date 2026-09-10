const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const SleepCommandLines = require('#/event/ero/common/sleep/sleep-common');
const CustomizedEvent = require('#/event/event-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { shop_result_type_enum } = require('#/data/ero/juel-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { get_slang_part_name_key, part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const {
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

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

class CustomizedEro extends CustomizedEvent {
  /** @type {function(number):CustomizedEro} */
  static get_custom_ero;
  /** @type {function(number,number,*?):Promise} */
  static run_custom_ero;

  /**
   * @param {number} cid
   * @param [exclude]
   * @param {boolean} exclude.[normal]
   * @param {boolean} exclude.[sleep]
   * @param {boolean} exclude.[rape]
   */
  constructor(cid, exclude) {
    super(cid);
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
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  async ero_start(handle_ero_act) {}

  /**
   * 睡奸惊醒
   * @param {number} supporter
   */
  async raping_start(supporter = 0) {
    let temp;
    if (
      era.get('flag:惩戒力度') === 3 &&
      supporter > 0 &&
      (temp = [
        era.get(`cflag:${this.id}:父方角色`) === supporter,
        era.get(`cflag:${supporter}:父方角色`) === this.id,
      ]).reduce((p, c) => p || c)
    ) {
      const { c: child, f: father } = temp[0]
        ? { c: this.id, f: supporter }
        : { c: supporter, f: this.id };
      await i18n().timon.pregnant_slave.be_awake_as_slave(
        get_chara_talk(father),
        get_chara_talk(child),
        get_chara_talk(0),
        sys_get_colored_callname(child, 0),
      );
    }
  }

  /**
   * 调教结束
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  async ero_end(handle_ero_act) {}

  /**
   * 加入3P
   * @param {number} lover 主要床伴
   * @returns {Promise<boolean>} 是否同意
   */
  async join_3p(lover) {
    return await i18n().timon.ero_o.join_3p(get_chara_talk(this.id));
  }

  /**
   * 加入3P同意
   * @param {number} lover 主要床伴
   */
  async join_3p_accept(lover) {
    await i18n().timon.ero_o.join_3p_accept(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /**
   * 强行加入3P
   * @param {number} lover 主要床伴
   */
  async join_3p_force(lover) {
    await i18n().timon.ero_o.join_3p_force(
      get_chara_talk(this.id),
      get_chara_talk(lover),
      get_chara_talk(0),
    );
  }

  /**
   * 加入3P拒绝
   * @param {number} lover 主要床伴
   */
  async join_3p_reject(lover) {
    await i18n().timon.ero_o.join_3p_reject(get_chara_talk(this.id));
  }

  /**
   * 设置马娘偏好部位
   * @param {Record<string,1>} attacker_parts
   * @param {Record<string,1>} defender_parts
   */
  set_preference(attacker_parts, defender_parts) {}

  /**
   * 马娘主动指令筛选器
   * @returns {function(number): boolean} 参数是调教指令ID
   */
  filter_in_rape() {
    if (era.get(`tcvar:${this.id}:孕袋卖奶`) > 0) {
      return (e) =>
        (ero_tagged_hooks[e] || default_tags).attacker_tags.some(
          (t) =>
            t === ero_hook_tags.super_sadism ||
            t === ero_hook_tags.sadism ||
            t === ero_hook_tags.imp ||
            t === ero_hook_tags.insert,
        );
    }
    if (era.get('flag:惩戒力度') >= 2) {
      if (
        era.get('flag:惩戒力度') === 3 &&
        era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no
      ) {
        return (e) =>
          e >= ero_hooks.missionary && e <= ero_hooks.stimulate_g_spot;
      }
      return (e) =>
        (e >= ero_hooks.ask_blow_job && e <= ero_hooks.force_deep_blow_job) ||
        (e >= ero_hooks.missionary && e <= ero_hooks.stimulate_womb);
    }
    return (e) =>
      e >= ero_hooks.missionary && e <= ero_hooks.ask_stimulate_womb;
  }

  /** 下一回合：呻吟口上？ */
  async next_round() {}

  /**
   * 定制过夜后事件
   * @param {(function(CharaTalk,CharaTalk):Promise)[]} buffer 过夜后事件列表，地文有：隔日清晨之早安口交、隔日清晨之裸体围裙、隔日清晨之义务履行
   * @param {function(number):Promise} quick_into_sex 快速进入调教的函数
   */
  cus_morning_sex(buffer, quick_into_sex) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag
   */
  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      era.print(
        i18n().timon.ero_o.get_penis_be_erect(
          chara,
          di18n.feature.n_penis[get_penis_size(this.id)],
        ),
      );
    } else if (extra_flag.part === part_enum.breast) {
      era.print(
        i18n().timon.ero_o.get_nipple_be_erect(
          chara,
          di18n.feature.get_breast_desc(get_breast_cup(chara.id)),
        ),
      );
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag
   */
  become_lubrication(chara, me, callname, hook, extra_flag) {
    era.print(
      i18n().timon.ero_o.get_be_lubricated(chara, {
        content: i18n().body_part[get_slang_part_name_key(extra_flag.part)],
        color: buff_colors[2],
      }),
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{continue:boolean,part:number}} extra
   */
  wound(chara, me, callname, hook, extra) {
    era.print(
      (extra.continue
        ? i18n().timon.ero_o.get_bleed
        : i18n().timon.ero_o.get_be_wounded)(chara, {
        content: i18n().body_part[part_enum.keys[extra.part]],
        color: buff_colors[2],
      }),
      { color: buff_colors[3] },
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{virgin:boolean}} extra_flag
   */
  lose_virginity(chara, me, callname, hook, extra_flag) {
    era.print(i18n().timon.ero_o.get_lose_virginity(chara, extra_flag.virgin));
  }

  /**
   * @param {boolean} stop_success 如果寸止的话是否成功
   * @returns {Promise<0|2|undefined>}
   */
  async orgasm_denial(stop_success) {
    if (era.get('tflag:主导权') > 0 && era.get('flag:惩戒力度') >= 2) {
      return 0;
    }
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const touch = era.get(`tcvar:${this.id}:阴茎接触部位`);
    if (
      touch.part === part_enum.mouth ||
      touch.part === part_enum.virgin ||
      touch.part === part_enum.anal
    ) {
      const part =
        touch.part === part_enum.mouth
          ? i18n().body_part.s_mouth_hole
          : i18n().body_part[get_slang_part_name_key(touch.part)];
      if (
        await select_yes_or_no(
          i18n().timon.ero_o.get_orgasm_denial_notification(chara),
          i18n().timon.ero_o.get_bt_cum_in(part),
          i18n().timon.ero_o.bt_cum_out,
        )
      ) {
        return 0;
      }
      await i18n().timon.ero_o.orgasm_denial(
        chara,
        me,
        part,
        stop_success,
        touch.part === part_enum.mouth,
      );
      return 2;
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async orgasm(chara, me, callname) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async zero_stamina(chara, me, callname) {
    era.print(i18n().timon.ero_o.get_zero_stamina(chara));
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async lost_mind(chara, me, callname) {
    era.print(i18n().timon.ero_o.get_lost_mind(chara));
  }

  /**
   * 获取刻印
   * @param {number} level
   * @param {number} type
   * @param {boolean} _new
   */
  async get_mark(level, type, _new) {
    const chara = get_chara_talk(this.id);
    switch (type) {
      case mark_enum.meek:
        await i18n().timon.ero_o.mark_meek(chara, get_chara_talk(0));
        break;
      case mark_enum.ero:
        await i18n().timon.ero_o.mark_ero(chara, level, _new);
        break;
      default:
        await i18n().timon.ero_o[`mark_${Object.keys(mark_enum)[type]}`](
          chara,
          level,
        );
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   */
  async prison(chara, me, callname, hook) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  async cum_in_womb(chara, me, callname, hook, extra_flag) {
    await i18n().timon.ero_o.cum_in_womb(
      get_chara_talk(extra_flag.mother_id),
      get_chara_talk(extra_flag.father_id),
      sys_check_awake(extra_flag.mother_id),
      sys_check_awake(extra_flag.father_id),
      CharaInmon.get(extra_flag.mother_id).on(plugin_enum.no_preg),
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra
   */
  be_pregnant(chara, me, callname, hook, extra) {
    if (era.get(`mark:${extra.mother_id}:淫纹`) === 3) {
      i18n().timon.ero_o.be_pregnant(
        get_chara_talk(extra.mother_id),
        get_chara_talk(extra.father_id),
      );
    } else {
      era.logger.debug(`角色 ${extra.mother_id} 怀孕了！`);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  async report_pregnant_between_weeks(chara, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id === 0) {
      return await CustomizedEro.get_custom_ero(
        0,
      ).report_pregnant_between_weeks(
        get_chara_talk(extra_flag.father_id),
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    const father = get_chara_talk(extra_flag.father_id);
    const mother = get_chara_talk(extra_flag.mother_id);
    const love = era.get(`love:${mother.id}`);
    const unexpected_pregnant = LifeEventMarks.get_marks(
      mother.id,
    ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await print_title_with_kojo(
        i18n().timon.ero_o,
        'report_preg_in_love',
        mother,
        father,
        unexpected_pregnant,
      );
    } else {
      await print_title_with_kojo(
        i18n().timon.ero_o,
        'report_preg',
        mother,
        father,
        unexpected_pregnant,
      );
    }
    if (
      !global_achievement.st_maria &&
      !father.id &&
      unexpected_pregnant === unexpected_pregnant_enum.father_sleep
    ) {
      global_achievement.st_maria = 1;
    }
  }

  /**
   * 孩子出生
   * @param {CharaTalk} father
   * @param {CharaTalk} mother
   * @param {number} child
   */
  async have_baby(father, mother, child) {
    if (mother.id === 0) {
      return await CustomizedEro.get_custom_ero(0).have_baby(
        father,
        mother,
        child,
      );
    }
    if (era.get(`love:${mother.id}`) < 90) {
      era.drawLine();
      await print_title_with_kojo(
        i18n().timon.ero_o,
        'have_baby',
        mother,
        father,
        LifeEventMarks.get_marks(mother.id).unexpected_pregnant,
      );
      era.println();
    }
  }

  /** 进入能力升级 */
  async shop_start() {
    era.drawLine();
    await i18n().timon.ero_o.shop_start(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_check_awake(this.id),
    );
  }

  /**
   * 离开能力升级
   * @param {{hate_clear:number,mark_clear:number,pleasure_delta:number,sex_delta:number,skill:number,talent:number}} extra
   */
  async shop_end(extra) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    if (extra.skill || extra.talent) {
      era.drawLine();
      if (!sys_check_awake(this.id)) {
        await i18n().timon.ero_o.shop_end_sleep(chara, me);
      } else if (era.get(`mark:${this.id}:反抗`) > 0) {
        await i18n().timon.ero_o.shop_end_hate(chara, me);
        return shop_result_type_enum.hate;
      } else if (
        (era.get(`mark:${this.id}:淫纹`) || era.get(`mark:${this.id}:欢愉`)) > 0
      ) {
        await i18n().timon.ero_o.shop_end_pleasure(chara, me);
        return shop_result_type_enum.pleasure;
      } else if (era.get(`mark:${this.id}:同心`) >= 2) {
        await i18n().timon.ero_o.shop_end_slave(chara, me);
        return shop_result_type_enum.slave;
      } else {
        await i18n().timon.ero_o.shop_end_lover(chara, me);
        return shop_result_type_enum.lover;
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{partners:number[]}} extra_flag
   */
  async after_betrayed(chara, me, callname, hook, extra_flag) {
    const cuckold = sys_check_cuckold(this.id);
    switch (era.get(`exp:${this.id}:被绿次数`) + 1) {
      case 1:
        era.drawLine();
        i18n().timon.ero_o.after_betrayed_first(
          chara,
          me,
          sys_get_chara(this.id),
          cuckold,
        );
        await era.waitAnyKey();
        break;
      case 2:
        era.drawLine();
        i18n().timon.ero_o.after_betrayed_second(
          chara,
          me,
          sys_get_chara(this.id),
          cuckold,
        );
        await era.waitAnyKey();
        break;
      default:
        i18n().timon.ero_o.after_betrayed(chara, me, cuckold);
    }
    await era.waitAnyKey();
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
