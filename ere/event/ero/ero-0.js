/**
 * @file 玩家 - 调教
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const pregnant_report_in_love = require('#/event/ero/common/pregnant-report-in-love');
const kojo = require('#/event/ero/ero-0.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { part_enum } = require('#/data/ero/part-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

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

module.exports = class extends CustomizedEro {
  /** @author 雞雞 */
  become_erect(chara, me, callname, hook, extra_flag) {
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
          ` ${i18n().n_penis[get_penis_size(0)]} 的肉棒很快就一柱擎天了。`,
        ]);
        return;
      }
    }
    super.become_erect(chara, me, callname, hook, extra_flag);
  }

  /**
   * 只有醒着的主控才能寸止，所以这里必然是需要输出的
   * @author 黑奴队长
   */
  async orgasm_denial(stop_success) {
    const me = get_chara_talk(0),
      touch = era.get('tcvar:0:阴茎接触部位'),
      last_action = era.get('tflag:前回行动'),
      is_double_blow_job =
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job;
    era.printMultiColumns([
      {
        content: [me.get_colored_name(), ' 的肉棒已经达到极限……'],
        type: 'text',
      },
      ...[
        '射了！',
        '再忍一下',
        !era.get('tcvar:0:避孕套') && stop_ex_options[touch.part]
          ? stop_ex_options[touch.part](touch.owner, is_double_blow_job)
          : '',
      ]
        .filter((e) => e)
        .map((e, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: 24 / l.length },
          content: e,
          type: 'button',
        })),
    ]);
    const ret = await era.input();
    if (ret) {
      // 寸止但没忍住
      if (!stop_success) {
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
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async report_pregnant_between_weeks(father, mother, callname, hook) {
    const love = era.get(`love:${mother.id || father.id}`),
      unexpected_pregnant = LifeEventMarks.get_marks(
        mother.id,
      ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await pregnant_report_in_love(father, mother, unexpected_pregnant);
    } else {
      const dict = {
        CHARA: father.name,
        YOU: era.get('callname:0:-2'),
        slave: era.get('flag:惩戒力度'),
      };
      if (dict.slave === 3) {
        hook.override = true;
        await print_event_name('职责', mother);
        const ret = await kojo['职责']({
          ...dict,
          ...(era.get('flag:角色性别') === 1
            ? { UMA: '马郎', SHE: '他', SISTER: '哥哥' }
            : { UMA: '马娘', SHE: '她', SISTER: '姐姐' }),
          child: sys_filter_chara('cflag', '母方角色', 0).filter(
            (cid) =>
              era.get(`exp:${cid}:性爱次数`) > era.get(`exp:${cid}:睡奸次数`),
          ).length,
          edu: sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
            (cid) => cid > 0 && era.get(`cflag:${cid}:育成回合计时`) < 3 * 48,
          ).length,
        });
        era.println();
        if (ret[0] === 1) {
          add_jewel_reward(0, '顺从', 1000);
          sys_like_chara(
            father.id,
            0,
            150,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        } else {
          add_jewel_reward(0, '受虐快感', 200);
          sys_like_chara(
            father.id,
            0,
            50,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        }
        await era.waitAnyKey();
      } else {
        await print_event_name('意外', mother);
        await kojo['意外']({ ...dict, unexpect: unexpected_pregnant });
      }
    }
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async have_baby(father, mother, ch_id) {
    const is_slave = era.get('flag:惩戒力度') === 3;
    if (
      era.get(`cflag:${father.id}:母方角色`) === 0 &&
      LifeEventMarks.get_marks(0).unexpected_pregnant !==
        unexpected_pregnant_enum.mother_sleep &&
      !is_slave
    ) {
      await kojo['乱伦生子']({
        id: father.id,
        YOU: mother.name,
        CHARA: father.name,
      });
    } else if (era.get(`love:${father.id}`) < 90) {
      era.drawLine();
      await print_event_name('新生命', mother);
      const dict = {
        CHARA: father.name,
        YOU: era.get('callname:0:-2'),
        ...(era.get('flag:角色性别') === 1
          ? { SHE: '他', UMA: '马郎' }
          : { SHE: '她', UMA: '马娘' }),
      };
      if (is_slave) {
        if (
          LifeEventMarks.get_marks(0).unexpected_pregnant ===
          unexpected_pregnant_enum.mother_sleep
        ) {
          const diff_mark = sys_filter_chara(
            'cflag',
            '招募状态',
            recruit_flags.yes,
          ).reduce(
            (p, c) => {
              if (c > 0 && era.get(`cflag:${c}:成长阶段`) >= 2) {
                if (
                  era.get(`cflag:${c}:父方角色`) === 0 ||
                  era.get(`cflag:${c}:母方角色`) === 0
                ) {
                  p.c++;
                } else {
                  p.s++;
                }
              }
              return p;
            },
            { c: 0, s: 0 },
          );
          await kojo['孕袋睡奸生子']({
            ...dict,
            RAPER:
              diff_mark.c > 0
                ? '孩子'
                : diff_mark.s > 0
                  ? `负责${dict.UMA}`
                  : '',
          });
        } else if ((await kojo['孕袋强奸生子'](dict))[0] === 2) {
          (new MyEduMarks().orgy ||= []).push(ch_id);
        }
      } else {
        await kojo['非自愿生子'](dict);
      }
      era.println();
    }
  }

  async shop_start() {}

  async shop_end() {}
};
