const {
  clear,
  drawLine,
  get,
  input,
  printAndWait,
  printInColRows,
  set,
  setHorizontalAlign,
} = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const get_riko_button = require('#/page/components/get-riko-button');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { cb_enum } = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @type {Record<string,function(CharaTalk):{handle:function:Promise,name:string}>} */
const handlers = {};

handlers[304] = () => {
  if (get('cflag:304:招募状态') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:304:招募状态') === recruit_flags.no) {
    return {
      handle: () => {
        set('cflag:304:招募状态', -1);
        const meek = get_chara_talk(201);
        return i18n().kojo[304].recruit['intro']({
          ...generate_dictionary(304),
          H_NAME: meek.name,
          H_SEX: meek.sex,
          H_UMA: meek.uma_sex_title,
        });
      },
      name: i18n().kojo[304].npc_talk_about_trainer,
    };
  } else if (get('cflag:304:招募状态') === -1) {
    return {
      disabled: get('flag:当前月') > 3 || sys_check_team_limit() > -1,
      handle: () => {
        set('cflag:304:招募状态', -2);
        return run_custom_rec(201, cb_enum.recruit).then(() => {
          if (get('cflag:201:育成次数') === 0) {
            new MeekEduMarks().debuff = 40;
          }
        });
      },
      name:
        get('cflag:201:育成次数') === 0
          ? i18n().timon.npc_accept_task
          : i18n().timon.npc_retry_task,
    };
  } else if (get('cflag:201:育成回合计时') < 3 * 48) {
    return {
      disabled: get('base:0:精力') < 200 || get('base:304:精力') < 200,
      async handle() {
        const edu_marks = new MeekEduMarks();
        await i18n().kojo[304].daily['npc_talk_about_meek_in_edu']({
          ...generate_dictionary(304),
          H_NAME: get_chara_talk(201).name,
          debuff: edu_marks.debuff,
        });
        if (edu_marks.debuff > 0) {
          edu_marks.debuff = Math.max(
            edu_marks.debuff -
              1 -
              (Math.random() < get('relation:304:0') / 600) -
              (Math.random() < get('love:304') / 100),
            0,
          );
          sys_change_attr_and_print(0, attr_enum.tp, -200);
          sys_change_attr_and_print(304, attr_enum.tp, -200);
        }
      },
      name: i18n().kojo[304].npc_talk_about_meek,
    };
  } else {
    return {
      async handle() {
        const meek = get_chara_talk(201);
        await i18n().kojo[304].daily.npc_talk_about_meek({
          ...generate_dictionary(304),
          H_NAME: meek.name,
          H_UMA: meek.uma_sex_title,
        });
      },
      name: i18n().kojo[304].npc_talk_about_meek,
    };
  }
};

handlers[306] = get_riko_button;

async function page_trainer_office() {
  let flag_page = true;
  let flag_trainer = true;
  await arrive_location(set('flag:当前位置', location_enum.trainer));
  let trainer_list = loc_characters.get(location_enum.trainer);
  if (trainer_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    if (!get('flag:初见办公室')) {
      set('flag:初见办公室', 1);
      await i18n().timon.others.welcome_trainer_office(
        get_chara_talk(304),
        get_chara_talk(306),
        me,
        sys_get_colored_callname(306, 304),
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length === 1,
      );
      await clear();
      print_page_header();
      drawLine();
    }
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: i18n().timon.npc_select, type: 'text' }],
        ...trainer_list.map((cid) => ({
          columns: [
            {
              names: get_image(cid)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              accelerator: cid,
              config: {
                align: 'center',
                buttonType:
                  EventMarks.get(cid).count() > 0 ? 'danger' : 'warning',
              },
              content: get_display_name(get(`callname:${cid}:-2`)),
              type: 'button',
            },
          ],
          config: { width: 4 },
        })),
        [
          {
            accelerator: 999,
            config: get_back_button_tip(),
            content: i18n().ui_back,
            type: 'button',
          },
        ],
      );
      setHorizontalAlign('start');
      const ret = await input();
      if (ret !== 999) {
        const chara = get_chara_talk(ret);
        const title = CharaTitles.get(ret).get_colored_curr_title();
        flag_trainer = true;
        while (flag_trainer) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: di18n.kojo.get_npc_talk(chara.id),
            },
            {
              loc: trainer_list.length > 1 && location_enum.restroom,
              name: di18n.kojo.get_npc_sex(chara.id),
              fail_cb: () => (flag_trainer = flag_page = false),
            },
            {
              loc: location_enum.trainer,
              name: di18n.kojo.get_npc_out(chara.id),
              print_out_page,
            },
            { name: di18n.kojo.get_npc_celebration(chara.id, celebration) },
            handlers[ret](chara),
            { name: di18n.kojo.get_npc_bye(chara.id) },
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
    await printAndWait(i18n().timon.it_back_office);
  } else {
    drawLine();
    await printAndWait(i18n().timon.it_force_back_office);
  }
  loc_characters.set(location_enum.trainer, trainer_list);
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.trainer,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_trainer_office;
