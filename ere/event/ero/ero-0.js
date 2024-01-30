const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const common_pregnant_report_in_love = require('#/event/ero/snippets/common-pregnant-report-in-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_enum } = require('#/data/ero/part-const');
const {
  penis_desc,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

/** @type {Record<string,function(HookArg,*):Promise<*>>} */
const handlers = {};

/**
 * @param _
 * @param {{shown:boolean,part:number}} extra_flag
 */
handlers[ero_hooks.become_erect] = (_, extra_flag) => {
  if (extra_flag.shown) {
    if (extra_flag.part === part_enum.penis) {
      const last_action = era.get('tflag:前回行动');
      if (
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job ||
        last_action === ero_hooks.ask_double_tit_job ||
        last_action === ero_hooks.double_tit_job
      ) {
        era.print([
          '在 ',
          get_chara_talk(
            era.get('tcvar:0:阴茎接触部位').owner,
          ).get_colored_name(),
          ' 与 ',
          get_chara_talk(era.get('tflag:前回助手')).get_colored_name(),
          ' 的侍奉下，',
          get_chara_talk(0).get_colored_name(),
          ` ${penis_desc[get_penis_size(0)]} 的肉棒很快就一柱擎天了。`,
        ]);
        return;
      }
    }
    throw new Error();
  }
};

const stop_ex_options = {};
stop_ex_options[part_enum.virgin] = (chara_id) =>
  `射到 ${era.get(`callname:${chara_id}:-2`)} 身上！`;
stop_ex_options[part_enum.mouth] = (chara_id, is_double_blow_job) => {
  return `射到 ${era.get(`callname:${chara_id}:-2`)}${
    is_double_blow_job
      ? ` 与 ${era.get(`callname:${era.get('tflag:当前助手')}:-2`)}`
      : ''
  } 脸上！`;
};

/**
 * 只有醒着的主控才能寸止，所以这里必然是需要输出的
 *
 * @param _
 * @param {{stop_success:boolean}} extra_flag 如果寸止的话是否成功
 */
handlers[ero_hooks.orgasm_denial] = async (_, extra_flag) => {
  const me = get_chara_talk(0),
    touch = era.get('tcvar:0:阴茎接触部位'),
    last_action = era.get('tflag:前回行动'),
    is_double_blow_job =
      last_action === ero_hooks.ask_double_blow_job ||
      last_action === ero_hooks.double_blow_job;
  era.print([me.get_colored_name(), ' 的肉棒已经达到极限……']);

  era.printMultiColumns(
    [
      '射了！',
      '再忍一下',
      !era.get('tcvar:0:避孕套') && stop_ex_options[touch.part]
        ? stop_ex_options[touch.part](touch.owner, is_double_blow_job)
        : '',
    ]
      .filter((e) => e)
      .map((e, i, l) => {
        return {
          accelerator: i,
          config: { width: 24 / l.length, align: 'center' },
          content: e,
          type: 'button',
        };
      }),
  );
  const ret = await era.input();
  if (ret) {
    // 寸止但没忍住
    if (!extra_flag.stop_success) {
      era.print([get_chara_talk(0).get_colored_name(), ' 的忍耐失败了！']);
    } else if (ret === 2) {
      // 忍住了且换目标
      const touched_part = era.get('tcvar:0:阴茎接触部位');
      if (touched_part !== -1) {
        const curr_supporter = era.get('tflag:当前助手');
        era.print([
          me.get_colored_name(),
          ' 拔出阴茎对准 ',
          get_chara_talk(touched_part.owner).get_colored_name(),
          ...(is_double_blow_job
            ? [' 与 ', get_chara_talk(curr_supporter).get_colored_name()]
            : []),
          ` 的 ${touch.part === part_enum.virgin ? '玉体' : '俏脸'}`,
        ]);
      }
    } else {
      // 寸止成功
      era.print([me.get_colored_name(), ' 暂时忍住了射精冲动……']);
    }
  }
  return ret;
};

/**
 * @param {HookArg} hook
 * @param {{father_id:number,mother_id:number}} extra_flag
 */
handlers[ero_hooks.report_pregnant_between_weeks] = async (
  hook,
  extra_flag,
) => {
  const father = get_chara_talk(extra_flag.father_id),
    mother = get_chara_talk(0),
    love = era.get(`love:${mother.id || father.id}`),
    unexpected_pregnant = era.get(`cflag:${mother.id}:意外怀孕`);
  era.drawLine();
  if (love >= 90) {
    await common_pregnant_report_in_love(father, mother, unexpected_pregnant);
  } else {
    const is_p_slave = era.get('flag:惩戒力度') === 3;
    await print_event_name(is_p_slave ? '职责' : '意外', mother);
    if (era.get('mark:0:淫纹') === 3) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 盯着 ',
        {
          content: '小腹淫纹上代表怀孕的图案',
          color: buff_colors[2],
        },
        '，冲到卫生间呕吐了起来。',
      ]);
    } else {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 盯着 ',
        {
          content: '手上的验孕棒',
          color: buff_colors[2],
        },
        '，又一次在洗手台上吐了出来。',
      ]);
    }
    if (is_p_slave) {
      hook.override = true;
      await era.printAndWait([
        '对这个打乱步调的小生命，',
        mother.get_colored_name(),
        ' 决定——',
      ]);
      era.printButton('欢喜地期待到来 (顺从因子+200 父方好感+150)', 1);
      era.printButton('无奈地接受事实 (受虐因子+200 父方好感+50)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 轻轻抚摸自己平坦的小腹，喜悦从嘴角开始蔓延……',
        ]);
        await era.printAndWait('不论是谁的孩子，自己都会担负起母亲的职责。');
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 看向镜子里脸如死灰的自己，两行清泪从脸颊旁划过……',
        ]);
        await era.printAndWait('不论是谁的孩子，自己都没有权利摆脱了。');
      }
      era.println();
      if (ret === 1) {
        await add_juel_out_of_train(0, '顺从', 1000);
        sys_like_chara(
          father.id,
          0,
          150,
          unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
        );
      } else {
        await add_juel_out_of_train(0, '受虐快感', 200);
        sys_like_chara(
          father.id,
          0,
          50,
          unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
        );
      }
      await era.waitAnyKey();
    } else {
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 对自己如何怀孕完全没有印象，一想到谁都有可能是犯人就让 ',
          mother.get_colored_name(),
          ' 为之胆寒……',
        ]);
      } else {
        await era.printAndWait([
          '在短暂的慌乱后，',
          mother.get_colored_name(),
          ' 还是决定向 ',
          father.get_colored_name(),
          ' 报告消息',
        ]);
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
          await era.printAndWait([
            ' 在同样的惊慌后，平静下来的 ',
            father.get_colored_name(),
            ' 向 ',
            mother.get_colored_name(),
            ' 承诺一定会负起父亲的责任……',
          ]);
        }
      }
    }
  }
};

/**
 * @param {HookArg} hook
 * @param {{child_id:number,father:CharaTalk}} extra_flag
 */
handlers[ero_hooks.have_baby] = async (hook, extra_flag) => {
  const father =
      extra_flag.father ||
      get_chara_talk(era.get(`cflag:${extra_flag.child_id}:父方角色`)),
    me = get_chara_talk(0);
  if (era.get(`love:${father.id}`) < 90) {
    era.drawLine();
    await print_event_name('新生命', me);
    await era.printAndWait([me.get_colored_name(), ' 抱起了孩子——']);
    let ret;
    if (era.get('flag:惩戒力度') === 3) {
      era.printButton('慈爱地轻抚', 1);
      era.printButton('无声地反抗', 2);
      ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          ` 抱着熟睡的孩子，认命般顺从地轻抚着${
            era.get(`cflag:${extra_flag.child_id}:性别`) - 1 ? '她' : '他'
          }。`,
        ]);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          ' 冷淡、漠然地抱着怀中的孩子，看向窗外的双眼目无神采。',
        ]);
      }
    } else {
      era.printButton('无视孩子的父亲', 1);
      era.printButton(`让${father.sex}一起来看`, 2);
      ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 看向 ',
          father.get_colored_name(),
          ' 的眼神十分空虚，却对孩子露出了关爱的神情。',
        ]);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          ' 思前想后，还是招手让 ',
          father.get_colored_name(),
          ' 上前来。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 惊喜地环住 ',
          me.get_colored_name(),
          '，两人一起安抚着熟睡的孩子。',
        ]);
      }
    }
  }
};

handlers[ero_hooks.shop_start] = () => {};

handlers[ero_hooks.shop_end] = () => {};

/**
 * @param {HookArg} hook
 * @param {{shown:boolean}} extra_flag
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag) => {
  if (extra_flag.shown === false) {
    return;
  }
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
