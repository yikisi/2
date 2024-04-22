const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const sys_call_check = require('#/system/script/sys-call-check');
const sys_call_daily_event = require('#/system/script/sys-call-daily-script');
const sys_call_edu_event = require('#/system/script/sys-call-edu-script');
const {
  sys_change_status_by_base,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const { start_machine_gun, stop_machine_gun } = require('#/event/queue');

const print_curr_chara = require('#/page/components/cur-chara-info');
const check_game_over = require('#/page/components/game-over');
const print_page_header = require('#/page/components/page-header');
const print_ero_page = require('#/page/page-ero');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');

let random_event,
  notes_index = 0;

async function next_week() {
  era.drawLine();
  era.print('时间开始流动……', { align: 'center', fontSize: '1.5rem' });
  await sys_next_week();
  era.drawLine();
  await era.printAndWait('新的一周开始了……', {
    align: 'center',
    fontSize: '1.5rem',
  });
}

/**
 * @param {number} chara_id
 * @param {number} cur_loc
 * @param {number} rest_loc
 */
async function save_and_next_week(chara_id, cur_loc, rest_loc) {
  await era.saveData(
    0,
    `${get_chara_talk(0).actual_name} 于 ${new Date().toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
    })} 保存的进度 (${era.get('flag:当前年')} 年 ${era.get(
      'flag:当前月',
    )} 月 第 ${era.get('flag:当前周')} 周) (自动存档)`,
  );
  era.drawLine();
  era.set('flag:当前互动角色', 0);
  era.set('flag:当前位置', rest_loc);
  chara_id &&
    !era.get('flag:床伴') &&
    (await sys_call_daily_event(chara_id, event_hooks.good_night));
  let continue_flag = true,
    temp;
  start_machine_gun(event_hooks.week_end);
  while (
    continue_flag &&
    (random_event = sys_get_random_event(event_hooks.week_end))
  ) {
    era.drawLine();
    continue_flag = !(await random_event(chara_id));
  }
  stop_machine_gun(event_hooks.week_end);
  if ((temp = era.get('flag:床伴'))) {
    era.set(`cflag:${temp}:自主训练`, 0);
    const life_marks = new LifeEventMarks(temp);
    begin_and_init_ero(0, temp);
    if (life_marks.marital_rape) {
      era.set('tflag:强奸', temp);
      era.set('tflag:主导权', temp);
    }
    const sex_3p = get_random_entry(
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
        .filter(
          (e) =>
            e &&
            e !== temp &&
            sys_check_awake(e) &&
            era.get(`cflag:${e}:成长阶段`) >= 2,
        )
        .map((e) => {
          return {
            id: e,
            check: sys_call_check(e, check_stages.want_make_love),
          };
        })
        .filter(
          (e) =>
            e.check > 0 &&
            era.get(`relation:${temp}:${e.id}`) > 375 &&
            era.get(`relation:${e.id}:${temp}`) > 75,
        ),
    );
    if (sex_3p) {
      era.drawLine();
      const chara = get_chara_talk(sex_3p.id);
      era.print([chara.get_colored_name(), ' 面色绯红地想要加入……接受吗？']);
      era.printButton('「你来的正是时候」', 1);
      era.printButton('还是别了……', 2);
      let wait_flag = false;
      if ((await era.input()) === 1) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 扑入 ',
          get_chara_talk(0).get_colored_name(),
          ' 怀中……',
        ]);
        init_ero(sex_3p.id);
        era.println();
        wait_flag =
          sys_like_chara(sex_3p.id, 0, get_random_value(50, 150)) || wait_flag;
        wait_flag =
          sys_like_chara(sex_3p.id, temp, get_random_value(50, 150)) ||
          wait_flag;
        wait_flag =
          sys_like_chara(
            temp,
            0,
            -get_random_value(25, 75 + 25 * era.get(`talent:${temp}:病娇`)),
          ) || wait_flag;
        era.set(`cflag:${sex_3p.id}:自主训练`, 0);
      } else if (sex_3p.check === 2) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 征得 ',
          get_chara_talk(temp).get_colored_name(),
          ' 的同意后，华丽地无视了 ',
          get_chara_talk(0).get_colored_name(),
          ' 的抗议……',
        ]);
        init_ero(sex_3p.id);
        era.println();
        wait_flag =
          sys_like_chara(
            temp,
            sex_3p.id,
            -get_random_value(0, 25 * era.get(`talent:${temp}:病娇`)),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            temp,
            0,
            -get_random_value(50, 100 + 25 * era.get(`talent:${temp}:病娇`)),
          ) || wait_flag;
        era.set(`cflag:${sex_3p.id}:自主训练`, 0);
      } else {
        await era.printAndWait([chara.get_colored_name(), ' 掩面而去……']);
        era.println();
        wait_flag =
          sys_like_chara(
            sex_3p.id,
            0,
            -get_random_value(
              25,
              50 + 25 * era.get(`talent:${sex_3p.id}:病娇`),
            ),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            temp,
            0,
            get_random_value(50, 100 + 25 * era.get(`talent:${temp}:病娇`)),
          ) || wait_flag;
      }
      wait_flag && (await era.waitAnyKey());
    }
    await print_ero_page(temp);
    await end_ero_and_show_result(true);
    life_marks.marital_rape = 0;
  }
  if (continue_flag) {
    await next_week();
    if (era.get('flag:当前位置') === rest_loc) {
      era.set('flag:当前位置', cur_loc);
    }
  }
}

/** @type {Record<string,function(number,function(number,number,number):Promise,{after_select:boolean,homepage:boolean,week_start:boolean}):Promise<*>>} */
const handlers = {};

handlers[location_enum.basement] = require('#/page/homepage/basement');
handlers[location_enum.beach] = require('#/page/homepage/beach');
handlers[location_enum.guangzhou] =
  handlers[location_enum.hongkong] =
  handlers[location_enum.paris] =
    require('#/page/homepage/foreign');
handlers[location_enum.office] = require('#/page/homepage/office');

module.exports = async () => {
  const flags = {
    after_select: true,
    homepage: true,
    week_start: false,
  };
  while (flags.homepage) {
    await era.clear();
    let flag_skip_this_week = false;
    let cur_location = era.get('flag:当前位置');

    if (!handlers[cur_location]) {
      cur_location = era.set('flag:当前位置', location_enum.office);
    }

    if (flags.week_start) {
      print_page_header();
      if (await check_game_over()) {
        return;
      }
      if (era.get('flag:当前周') === 1) {
        const added_list = era.getAddedCharacters();
        gacha(
          era
            .getAllCharacters()
            .filter((x) => !added_list.includes(x) && x < first_child_id),
          get_random_value(2, 5),
        ).forEach((chara_id) => init_chara(chara_id));
      }
      start_machine_gun(event_hooks.week_start);
      while (
        !flag_skip_this_week &&
        (random_event = sys_get_random_event(event_hooks.week_start)) !==
          undefined
      ) {
        era.drawLine();
        flag_skip_this_week = (await random_event()) || flag_skip_this_week;
      }
      stop_machine_gun(event_hooks.week_start);
      const force_be = era.get('flag:强制BE');
      if (force_be) {
        await era.clear();
        era.drawLine();
        await sys_call_edu_event(force_be, event_hooks.crazy_fan_end);
        era.print('GAME OVER', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '3rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait(
          get_random_entry([
            '日蚀当先，万物无光。——丹尼斯・奥凯利',
            '杜鹃不鸣则杀之。——织田信长',
            '探案过程中，我是最后的、最高的上诉法庭。——福尔摩斯',
            '世以成败论人物，故操得在英雄之列。——苏轼',
            '拥有一位伟大的赛马娘，就拥有了最伟大的宝座。——丘吉尔',
          ]),
          {
            align: 'center',
          },
        );
      }
    }
    if (flag_skip_this_week) {
      era.drawLine();
      await next_week();
      continue;
    }

    const chara_id = era.get('flag:当前互动角色');

    sys_change_status_by_base(0);
    chara_id && sys_change_status_by_base(chara_id);

    await era.clear();
    print_page_header();
    if (cur_location === location_enum.basement) {
      print_curr_chara(era.get('flag:地下室之主'));
    } else {
      print_curr_chara(chara_id);
    }

    era.drawLine();
    let hook = -1;
    if (flags.week_start) {
      flags.week_start = false;
      if (chara_id) {
        hook = event_hooks.good_morning;
      }
    } else if (flags.after_select) {
      flags.after_select = false;
      if (chara_id) {
        hook = event_hooks.select;
      }
    }
    if (hook > 0) {
      await sys_call_daily_event(chara_id, hook);
    } else {
      const note_list = [...notes.common];
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach((e) => {
        if (era.get(`cflag:${e}:育成回合计时`) < 3 * 48 && notes[e]) {
          note_list.push(...notes[e]);
        }
      });
      const note = note_list[notes_index++ % note_list.length];
      CharaTalk.say_by_passer_by(note.title, note.content);
    }

    await handlers[cur_location](chara_id, save_and_next_week, flags);
  }
};
