const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEro = require('#/event/ero/ero-common');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_list, join_to_string } = require('#/utils/list-utils');

const { part_enum } = require('#/data/ero/part-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  get #kojo() {
    return i18n().kojo[0].ero;
  }

  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      const last_action = era.get('tflag:前回行动');
      if (
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job ||
        last_action === ero_hooks.ask_double_tit_job ||
        last_action === ero_hooks.double_tit_job
      ) {
        this.#kojo.become_erect(
          get_chara_talk(era.get('tflag:前回对手')),
          get_chara_talk(era.get('tflag:前回助手')),
          me,
          di18n.feature.n_penis[get_penis_size(0)],
        );
        return;
      }
    }
    super.become_erect(chara, me, callname, hook, extra_flag);
  }

  /** 只有醒着的主控才能寸止，所以这里必然是需要输出的 */
  async orgasm_denial(stop_success) {
    const me = get_chara_talk(0);
    const touch = era.get('tcvar:0:阴茎接触部位');
    const last_action = era.get('tflag:前回行动');
    const is_double_blow_job =
      last_action === ero_hooks.ask_double_blow_job ||
      last_action === ero_hooks.double_blow_job;
    let third_button;
    if (!era.get('tcvar:0:避孕套')) {
      switch (touch.part) {
        case part_enum.mouth:
          third_button = this.#kojo.get_cum_on_face(
            join_to_string(
              [touch.owner, is_double_blow_job && era.get('tflag:当前助手')]
                .filter((cid) => cid)
                .map((cid) => get_display_name(era.get(`callname:${cid}:-2`))),
              i18n().ui_conjunction,
            ),
          );
          break;
        case part_enum.virgin:
        case part_enum.anal:
          third_button = this.#kojo.get_cum_on_body(
            get_display_name(era.get(`callname:${touch.owner}:-2`)),
          );
      }
    }
    era.printMultiColumns([
      {
        content: i18n().timon.ero_o.get_orgasm_denial_notification(me),
        type: 'text',
      },
      ...[this.#kojo.bt_cum_in, this.#kojo.bt_cum_not, third_button]
        .filter((e) => e)
        .map((e, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: 24 / l.length },
          content: e,
          type: 'button',
        })),
    ]);
    const ret = await era.input();
    if (ret > 0) {
      this.#kojo.orgasm_denial(
        get_chara_talk(0),
        stop_success,
        ret === 2,
        touch.part === part_enum.mouth,
        join_list(
          [touch.owner, is_double_blow_job && era.get('tflag:当前助手')]
            .filter((cid) => cid)
            .map((cid) => get_chara_talk(cid).get_colored_name()),
          i18n().ui_conjunction,
        ),
      );
    }
    return ret;
  }

  async report_pregnant_between_weeks(father, mother, callname, hook, extra) {
    const love = era.get(`love:${mother.id || father.id}`);
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
      const slavery = era.get('flag:惩戒力度');
      if (
        slavery === 3 &&
        unexpected_pregnant === unexpected_pregnant_enum.mother_sleep
      ) {
        hook.override = true;
        const children_count = sys_filter_chara('cflag', '母方角色', 0).filter(
          (cid) =>
            era.get(`exp:${cid}:性爱次数`) > era.get(`exp:${cid}:睡奸次数`),
        ).length;
        const edu_count = sys_filter_chara(
          'cflag',
          '招募状态',
          recruit_flags.yes,
        ).filter(
          (cid) => cid > 0 && era.get(`cflag:${cid}:育成回合计时`) < 3 * 48,
        ).length;
        const ret = await print_title_with_kojo(
          i18n().timon.pregnant_slave,
          'report_preg_duty',
          mother,
          father,
          edu_count,
          children_count,
        );
        era.println();
        if (ret[0] === 1) {
          add_jewel_reward(0, 10, 100);
          sys_like_chara(
            father.id,
            0,
            150,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        } else {
          add_jewel_reward(0, 8, 200);
          sys_like_chara(
            father.id,
            0,
            50,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        }
        await era.waitAnyKey();
      } else {
        await print_title_with_kojo(
          this.#kojo,
          'report_preg_not_love',
          mother,
          father,
          unexpected_pregnant,
        );
      }
    }
  }

  async have_baby(father, mother, ch_id) {
    const is_slave = era.get('flag:惩戒力度') === 3;
    if (
      era.get(`cflag:${father.id}:母方角色`) === 0 &&
      LifeEventMarks.get_marks(0).unexpected_pregnant !==
        unexpected_pregnant_enum.mother_sleep &&
      !is_slave
    ) {
      await this.#kojo.have_baby_with_child(mother, father);
    } else if (era.get(`love:${father.id}`) < 90) {
      era.drawLine();
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
          const ret = await print_title_with_kojo(
            i18n().timon.pregnant_slave,
            'have_baby_in_sleep',
            mother,
            father,
            diff_mark.c,
            diff_mark.s,
          );
          if (ret[0] === 1) {
            era.set(`love:${ch_id}`, Math.max(era.get(`love:${ch_id}`), 1));
          }
        } else if (LifeEventMarks.get_marks(0).rape_child === father.id) {
          const ret = await print_title_with_kojo(
            i18n().timon.pregnant_slave,
            'have_baby_after_raped',
            mother,
            father,
          );
          if (ret[0] === 1) {
            (new MyEduMarks().orgy ||= []).push(ch_id);
          }
        } else {
          await print_title_with_kojo(
            i18n().timon.pregnant_slave,
            'have_baby_dedicate',
            mother,
            father,
          );
        }
      } else {
        await print_title_with_kojo(
          this.#kojo,
          'have_baby_with_fuck_buddy',
          mother,
          father,
        );
      }
      era.println();
    }
  }

  async shop_start() {}

  async shop_end() {}
};
