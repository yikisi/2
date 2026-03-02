const { get, input, printMultiColumns, set } = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { cb_enum } = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/** @returns {{[handle]:function:Promise,[name]:string}} */
function get_riko_button() {
  if (get('cflag:306:招募状态') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:306:招募状态') === recruit_flags.no) {
    return {
      handle() {
        set('cflag:306:招募状态', -1);
        const glasse = get_chara_talk(202);
        return i18n().kojo[306].recruit['intro']({
          ...generate_dictionary(306),
          B_SEX: glasse.sex,
          B_UMA: glasse.uma_sex_title,
        });
      },
      name: i18n().kojo[306].npc_talk_about_trainer,
    };
  } else if (get('cflag:306:招募状态') === -1) {
    return {
      disabled: get('flag:当前月') > 3 || sys_check_team_limit() > -2,
      async handle() {
        const glasse = get_chara_talk(202);
        await i18n().kojo[306].recruit['task']({
          ...generate_dictionary(306),
          B_NAME: glasse.name,
          B_SEX: glasse.sex,
          L_NAME: get_chara_talk(203).name,
        });
        await run_custom_rec(202, cb_enum.recruit);
        await run_custom_rec(203, cb_enum.recruit);
        if (get('cflag:202:育成次数') === 0) {
          new GlasseEduMarks().debuff = 20;
          new CoconEduMarks().debuff = 20;
        }
        set('cflag:306:招募状态', [0, 0]);
        set('flag:当前互动角色', get_random_entry([202, 203]));
      },
      name:
        get('cflag:202:育成次数') === 0
          ? i18n().timon.npc_accept_task
          : i18n().timon.npc_retry_task,
    };
  } else if (get('cflag:202:育成回合计时') < 3 * 48) {
    return {
      disabled: get('base:0:精力') < 200 || get('base:304:精力') < 200,
      async handle() {
        const aims = [];
        const glasse_edu_marks = new GlasseEduMarks();
        const cocon_edu_marks = new CoconEduMarks();
        const glasse = get_chara_talk(202);
        const cocon = get_chara_talk(203);
        if (glasse_edu_marks.debuff) {
          aims.push(202);
        }
        if (cocon_edu_marks.debuff) {
          aims.push(203);
        }
        let aim, aim_marks;
        switch (aims.length) {
          case 2:
            printMultiColumns([
              { content: i18n().kojo[306].select_talk_about, type: 'text' },
              {
                accelerator: 1,
                content: glasse.name,
                type: 'button',
              },
              {
                accelerator: 2,
                content: cocon.name,
                type: 'button',
              },
            ]);
            aim = (await input()) + 201;
            break;
          case 1:
            aim = aims[0];
            break;
          case 0:
            await i18n().kojo[306].daily['npc_talk_about_nothing'](
              generate_dictionary(306),
            );
            return;
        }
        aim_marks = aim === 202 ? glasse_edu_marks : cocon_edu_marks;
        aim = aim === 202 ? glasse : cocon;
        await i18n().kojo[306].daily['npc_talk_about_aim_in_edu']({
          ...generate_dictionary(306),
          AIM: aim.name,
        });
        aim_marks.debuff = Math.max(
          aim_marks.debuff -
            1 -
            (Math.random() < get('relation:306:0') / 600) -
            (Math.random() < get('love:306') / 100),
          0,
        );
        sys_change_attr_and_print(0, attr_enum.tp, -200);
        sys_change_attr_and_print(306, attr_enum.tp, -200);
      },
      name: i18n().kojo[306].npc_talk_about_uma,
    };
  } else {
    return {
      handle: () =>
        i18n().kojo[306].daily['npc_talk_about_aim'](generate_dictionary(306)),
      name: i18n().kojo[306].npc_talk_about_uma,
    };
  }
}

module.exports = get_riko_button;
