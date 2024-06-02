const {
  clear,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printInColRows,
  printMultiColumns,
  println,
  set,
  setHorizontalAlign,
} = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_call_recruit = require('#/system/script/sys-call-recruit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const CharaTitles = require('#/data/chara-titles');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

/** @type {Record<string,function(CharaTalk,CharaTalk):{handle:function:Promise,name:string}>} */
const handlers = {};

handlers[304] = (chara, me) => {
  if (get('cflag:304:招募状态') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:304:招募状态') === recruit_flags.no) {
    return {
      handle: () => {
        set('cflag:304:招募状态', -1);
        return printAndWait([
          chara.get_colored_name(),
          ' 告诉 ',
          me.get_colored_name(),
          '，',
          chara.sex,
          '有一名负责',
          chara.get_uma_sex_title(),
          ' ',
          get_chara_talk(201).get_colored_name(),
          '，天赋很不错，马上要开始育成。',
        ]).then(() =>
          printAndWait([
            '如果 ',
            me.get_colored_name(),
            ' 愿意的话，可以先辅助',
            chara.sex,
            '训练一段时间，也许可以增长一些经验。',
          ]),
        );
      },
      name: '谈起训练员的工作',
    };
  } else if (get('cflag:304:招募状态') === -1) {
    return {
      disabled: get('flag:当前月') > 3 || sys_check_team_limit() > -1,
      handle: () => {
        set('cflag:304:招募状态', -2);
        return sys_call_recruit(201, cb_enum.recruit);
      },
      name: get('cflag:201:育成次数') === 0 ? '接受任务' : '再次尝试',
    };
  } else if (get('cflag:201:育成回合计时') < 3 * 48) {
    return {
      disabled: get('base:0:精力') < 200 || get('base:304:精力') < 200,
      async handle() {
        const edu_marks = new MeekEduMarks();
        if (edu_marks.debuff) {
          await printAndWait([
            me.get_colored_name(),
            ' 与 ',
            chara.get_colored_name(),
            ' 讨论了一会，增进了对 ',
            get_chara_talk(201).get_colored_name(),
            ' 的理解。',
          ]);
          edu_marks.debuff = Math.max(
            edu_marks.debuff -
              1 -
              (Math.random() < get('relation:304:0') / 600) -
              (Math.random() < get('love:304') / 100),
            0,
          );
          sys_change_attr_and_print(0, '精力', -200);
          sys_change_attr_and_print(304, '精力', -200);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            ' 表示已经没有什么新情报可以和 ',
            me.get_colored_name(),
            ' 分享了。',
          ]);
        }
      },
      name: '谈起 快乐米可 的训练',
    };
  } else {
    return {
      handle: () =>
        printAndWait([chara.get_colored_name(), ' 表示没什么特别。']).then(() =>
          printAndWait([
            '但',
            chara.sex,
            '同时也表示，如果 ',
            me.get_colored_name(),
            ' 找到了让',
            chara.get_uma_sex_title(),
            '获得第二次机会的方法，请一定要帮 ',
            get_chara_talk(201).get_colored_name(),
            ' 挽回遗憾',
          ]),
        ),
      name: '谈起 快乐米可 的现状',
    };
  }
};

handlers[306] = (chara, me) => {
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
          handle: () =>
            printAndWait([
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
            ),
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
              new GlasseEduMarks().debuff = 20;
              new CoconEduMarks().debuff = 20;
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
              await sys_call_recruit(202, cb_enum.recruit);
              await sys_call_recruit(203, cb_enum.recruit);
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
              await sys_call_recruit(202, cb_enum.recruit);
              await sys_call_recruit(203, cb_enum.recruit);
              set('cflag:306:招募状态', [0, 0]);
              set('flag:当前互动角色', get_random_entry([202, 203]));
            },
      name: get('cflag:202:育成次数') === 0 ? '接受任务' : '再次尝试',
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
        sys_change_attr_and_print(0, '精力', -200);
        sys_change_attr_and_print(306, '精力', -200);
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
};

async function page_trainer_office() {
  let flag_page = true,
    flag_trainer = true;
  set('flag:当前位置', location_enum.trainer);
  await clear();
  print_page_header();
  drawLine();
  const vehicle = get('equip:0:单人载具');
  print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了 ',
    location_name[location_enum.trainer],
    '……',
  ]);
  let trainer_list = [];
  if (!(get('cflag:304:育成回合计时') < 3 * 48) && sys_check_npc_working(304)) {
    trainer_list.push(304);
  }
  if (
    !(get('cflag:306:育成回合计时') < 3 * 48) &&
    get('flag:理事长') !== 306 &&
    sys_check_npc_working(306)
  ) {
    trainer_list.push(306);
  }
  if (trainer_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    if (!get('flag:初见办公室')) {
      set('flag:初见办公室', 1);
      await printAndWait([
        me.get_colored_name(),
        ' 来到训练员公用的办公室，里面已经有两位训练员在了。',
      ]);
      const trainer0 = get_chara_talk(304),
        trainer1 = get_chara_talk(306);
      await trainer1.say_as_unknown_and_wait([
        '您好，您就是新来的 ',
        me.actual_name,
        ' 训练员吧。',
      ]);
      await trainer1.say_and_wait([
        '我是 ',
        trainer1.get_colored_actual_name(),
        '，今后为了中央特雷森的荣光一起努力吧。',
      ]);
      await trainer0.say_and_wait([
        '啊，贵安，我是 ',
        trainer0.get_colored_actual_name(),
        '，今后请您多多指教。',
      ]);
      if (
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length === 1
      ) {
        await trainer1.say_and_wait([
          '您现在还没有担当，如果有什么困难的话请尽管来找我或者这位 ',
          sys_get_colored_callname(306, 304),
          ' 商量吧',
        ]);
      }
      await clear();
      print_page_header();
      drawLine();
    }
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: '要和谁交谈？', type: 'text' }],
        ...trainer_list.map((e) => ({
          columns: [
            {
              names: get_image(e)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              accelerator: e,
              config: { align: 'center' },
              content: get(`callname:${e}:-2`),
              type: 'button',
            },
          ],
          config: { width: 4 },
        })),
        [{ accelerator: 999, type: 'button', content: '离开' }],
      );
      setHorizontalAlign('start');
      const chara_id = await input();
      if (chara_id !== 999) {
        const chara = get_chara_talk(chara_id),
          title = new CharaTitles(chara_id).get_curr_title();
        flag_trainer = true;
        while (flag_trainer) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: '聊天',
            },
            {
              loc: location_enum.restroom,
              name: '求爱',
              fail_cb() {
                flag_trainer = flag_page = false;
              },
            },
            {
              loc: location_enum.trainer,
              name: '约会',
              print_out_page,
            },
            {
              name: `庆祝 ${celebration}`,
            },
            handlers[chara_id](chara, me),
            {
              name: '再见',
            },
          );
          if ((flag_trainer &&= temp_flag)) {
            await clear();
            print_page_header();
          }
        }
        trainer_list = trainer_list.filter(sys_check_awake);
        flag_page &= trainer_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await clear();
        print_page_header();
        drawLine();
      }
    }
    drawLine();
    await printAndWait('回去了……');
  } else {
    drawLine();
    await printAndWait('没有人在的样子……回去了……');
  }
  println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.trainer,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_trainer_office;
