const {
  get,
  input,
  printAndWait,
  printMultiColumns,
  set,
} = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { cb_enum } = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @returns {{[handle]:function:Promise,[name]:string}}
 */
function get_riko_button(chara, me) {
  if (get('cflag:306:招募状态') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:306:招募状态') === recruit_flags.no) {
    return get('flag:当前声望') < 500
      ? {
          handle: () => {
            set('cflag:306:招募状态', -1);
            return printAndWait([
              chara.get_colored_name(),
              ' 向 ',
              me.get_colored_name(),
              ' 介绍了一些训练的心得，并强调了健康管理的重要性。',
            ]).then(() =>
              printAndWait([
                '实操方面，',
                chara.get_colored_name(),
                ' 表示',
                chara.sex,
                '团队里有两名天赋不错的',
                chara.get_uma_sex_title(),
                '，',
                me.get_colored_name(),
                ' 可以从辅助',
                chara.sex,
                '们的训练开始。',
              ]),
            );
          },
          name: '请教训练员的工作',
        }
      : {
          handle: () => {
            set('cflag:306:招募状态', -1);
            return printAndWait([
              chara.get_colored_name(),
              ' 赞许了 ',
              me.get_colored_name(),
              ' 作为训练员的能力',
            ]).then(() =>
              printAndWait([
                '如果 ',
                me.get_colored_name(),
                ' 有精力的话，',
                chara.sex,
                '希望 ',
                me.get_colored_name(),
                ' 能帮忙训练两个即将开始育成的天赋不错的',
                chara.get_uma_sex_title(),
                '。',
              ]),
            );
          },
          name: '讨论训练员的工作',
        };
  } else if (get('cflag:306:招募状态') === -1) {
    return {
      disabled: get('flag:当前月') > 3 || sys_check_team_limit() > -2,
      handle:
        get('cflag:202:育成次数') === 0
          ? async () => {
              const glasse = get_chara_talk(202),
                cocon = get_chara_talk(203);
              await printAndWait([
                '在 ',
                chara.get_colored_name(),
                ' 的引荐下，',
                me.get_colored_name(),
                ' 结识了 ',
                glasse.get_colored_name(),
                ' 与 ',
                cocon.get_colored_name(),
                '。',
              ]);
              await printAndWait([
                '背负着 ',
                chara.get_colored_name(),
                ' 的期许，',
                me.get_colored_name(),
                ' 与',
                glasse.sex,
                '们的三年开始了……',
              ]);
              await me.say_and_wait(
                ['带领', glasse.sex, '们多多地取得重赏胜利吧……'],
                true,
              );
              await run_custom_rec(202, cb_enum.recruit);
              await run_custom_rec(203, cb_enum.recruit);
              new GlasseEduMarks().debuff = 20;
              new CoconEduMarks().debuff = 20;
              set('cflag:306:招募状态', [0, 0]);
              set('flag:当前互动角色', get_random_entry([202, 203]));
            }
          : async () => {
              const glasse = get_chara_talk(202),
                cocon = get_chara_talk(203);
              await printAndWait([
                '光阴荏苒，',
                me.get_colored_name(),
                ' 与 ',
                glasse.get_colored_name(),
                '、',
                cocon.get_colored_name(),
                ' 再次站到了同一片草场。',
              ]);
              await printAndWait([
                '不知这次 ',
                me.get_colored_name(),
                ' 是否能够让',
                chara.sex,
                '们得偿所愿？',
              ]);
              await run_custom_rec(202, cb_enum.recruit);
              await run_custom_rec(203, cb_enum.recruit);
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
        const aims = [],
          glasse_edu_marks = new GlasseEduMarks(),
          cocon_edu_marks = new CoconEduMarks(),
          glasse = get_chara_talk(202),
          cocon = get_chara_talk(203);
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
              { content: '要谈论谁的话题？', type: 'text' },
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
            await printAndWait([
              chara.get_colored_name(),
              ' 表示已经没有什么新情报可以和 ',
              me.get_colored_name(),
              ' 分享了。',
            ]);
            return;
        }
        aim_marks = aim === 202 ? glasse_edu_marks : cocon_edu_marks;
        aim = aim === 202 ? glasse : cocon;
        await printAndWait([
          me.get_colored_name(),
          ' 向 ',
          chara.get_colored_name(),
          ' 讨教了一会，增进了对 ',
          aim.get_colored_name(),
          ' 的了解……',
        ]);
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
      name: '谈起担当的训练',
    };
  } else {
    return {
      handle: () =>
        printAndWait([
          chara.get_colored_name(),
          ' 只告诉 ',
          me.get_colored_name(),
          ' ',
          chara.sex,
          '们还好。',
        ]),
      name: `了解${chara.sex}们的现状`,
    };
  }
}

module.exports = get_riko_button;
