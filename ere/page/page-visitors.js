const era = require('#/era-electron');

const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { run_custom_rec } = require('#/event/rec/rec-factory');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { creditors } = require('#/data/other-const');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

/** @type {Record<string,function(CharaTalk,CharaTalk):{[handle]:function:Promise,[name]:string}>} */
const handlers = {};

[204, 346, 347, 348].forEach((cid) => {
  handlers[cid] = () =>
    era.get(`cflag:${cid}:招募状态`) !== recruit_flags.yes
      ? {
          name: i18n().timon.npc_recruit_out_school,
          handle() {
            era.set(`cflag:${cid}:招募状态`, recruit_flags.yes);
            if (era.get(`talent:${cid}:病娇`) > 0) {
              yandere_list.push(cid);
            }
            return i18n().timon.recruit.rec_end(get_chara_talk(cid));
          },
        }
      : {};
});

[207, 308, 345].forEach((cid) => {
  handlers[cid] = () =>
    era.get(`cflag:${cid}:招募状态`) !== recruit_flags.yes &&
    era.get(`love:${cid}`) >= 40
      ? {
          name: i18n().timon.npc_recruit_out_school,
          handle() {
            era.set(`callname:${cid}:-2`, era.get(`callname:${cid}:-1`));
            era.set(`cflag:${cid}:招募状态`, recruit_flags.yes);
            if (era.get(`talent:${cid}:病娇`) > 0) {
              yandere_list.push(cid);
            }
            return i18n().timon.recruit.rec_end(get_chara_talk(cid));
          },
        }
      : {};
});

handlers[303] = () =>
  era.get('cflag:303:招募状态') !== recruit_flags.yes
    ? {
        name: i18n().kojo[303].npc_func,
        handle: () => run_custom_rec(303, event_hooks.recruit),
      }
    : {};

handlers[343] = () =>
  // CFLAGNAME:66 = 招募状态
  era.get('cflag:343:66') !== recruit_flags.yes &&
  new MayLifeMarks().who_am_i === 3
    ? {
        name: i18n().timon.npc_recruit_out_school,
        handle() {
          era.set('callname:343:-2', '904301');
          era.set('cflag:343:66', recruit_flags.yes);
          // TALENTNAME:21 = 病娇
          if (era.get('talent:343:21') > 0) {
            yandere_list.push(343);
          }
          return i18n().timon.recruit.rec_end(get_chara_talk(343));
        },
      }
    : {};

handlers[344] = () =>
  era.get('cflag:344:招募状态') !== recruit_flags.yes &&
  era.get('love:344') >= 25
    ? {
        name: i18n().timon.npc_recruit_out_school,
        handle() {
          era.set('callname:344:-2', '904401');
          era.set('cflag:344:招募状态', recruit_flags.yes);
          return i18n().timon.recruit.rec_end(get_chara_talk(344));
        },
      }
    : {};

handlers[349] = () =>
  era.get('cflag:349:招募状态') === recruit_flags.yes
    ? {
        name: i18n().kojo[349].npc_func,
        async handle() {
          const bryne = get_chara_talk(349);
          const life_marks = new BryneLifeMarks();
          const money = era.get('flag:当前马币');
          if (money < 1000 && !life_marks.funds) {
            await i18n().timon.others.fund_reject(
              bryne,
              sys_get_colored_callname(349, 0),
            );
            return;
          }
          if (life_marks.funds > 0) {
            i18n().timon.others.fund_summary(
              bryne,
              get_abbr_number(life_marks.funds),
              get_abbr_number(life_marks.funds / (500 - 300 * life_marks.buff)),
            );
          }
          era.printButton(i18n().timon.others.bt_fund, 1, {
            disabled: money < 1000,
          });
          era.printButton(i18n().timon.others.bt_ransom, 2, {
            disabled: life_marks.funds <= 0,
          });
          const _old = life_marks.funds;
          if ((await era.input()) === 1) {
            era.print(i18n().timon.others.fund_confirm);
            let flag = true;
            let _new = 1;
            const curr = era.getLineCount();
            while (flag) {
              await era.clear(era.getLineCount() - curr);
              era.printMultiColumns([
                {
                  accelerator: 2,
                  config: { align: 'center', disabled: _new <= 20, width: 4 },
                  content: `-${Object(20000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  accelerator: 4,
                  config: { align: 'center', disabled: _new === 1, width: 4 },
                  content: `-${Object(1000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  config: {
                    align: 'center',
                    width: 4,
                  },
                  content: i18n().get_ui_hd_money(get_abbr_number(_new * 1000)),
                  type: 'text',
                },
                {
                  accelerator: 6,
                  config: {
                    align: 'center',
                    disabled: money <= _new * 1000,
                    width: 4,
                  },
                  content: `+${Object(1000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  accelerator: 8,
                  config: {
                    align: 'center',
                    disabled: money < (_new + 20) * 1000,
                    width: 8,
                  },
                  content: `+${Object(20000).toLocaleString(lan())}`,
                  type: 'button',
                },
                { content: [], type: 'text' },
                {
                  config: { width: 4 },
                  accelerator: 98,
                  content: i18n().ui_yes,
                  type: 'button',
                },
                {
                  config: { width: 4 },
                  accelerator: 99,
                  content: i18n().ui_no,
                  type: 'button',
                },
              ]);
              switch (await era.input()) {
                case 2:
                  _new -= 20;
                  break;
                case 4:
                  _new--;
                  break;
                case 6:
                  _new++;
                  break;
                case 8:
                  _new += 20;
                  break;
                case 98:
                  flag = false;
                  break;
                case 99:
                  _new = 0;
                  flag = false;
              }
            }
            if (_new > 0) {
              life_marks.funds += _new * 1000;
              era.add('flag:当前马币', -_new * 1000);
              await i18n().timon.others.fund_result(
                bryne,
                get_abbr_number(_new * 1000),
                get_abbr_number(
                  life_marks.funds / (500 - 300 * life_marks.buff),
                ),
              );
            }
          } else {
            era.print(
              i18n().timon.others.get_ransom_confirm(
                get_abbr_number(life_marks.funds),
              ),
            );
            let flag = true;
            let got = 1;
            const curr = era.getLineCount();
            while (flag) {
              await era.clear(era.getLineCount() - curr);
              era.printMultiColumns([
                {
                  accelerator: 2,
                  config: { align: 'center', disabled: got <= 20, width: 4 },
                  content: `-${Object(20000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  accelerator: 4,
                  config: { align: 'center', disabled: got === 1, width: 4 },
                  content: `-${Object(1000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  config: {
                    align: 'center',
                    width: 4,
                  },
                  content: i18n().get_ui_hd_money(get_abbr_number(got * 1000)),
                  type: 'text',
                },
                {
                  accelerator: 6,
                  config: {
                    align: 'center',
                    disabled: life_marks.funds <= got * 1000,
                    width: 4,
                  },
                  content: `+${Object(1000).toLocaleString(lan())}`,
                  type: 'button',
                },
                {
                  accelerator: 8,
                  config: {
                    align: 'center',
                    disabled: life_marks.funds < (got + 20) * 1000,
                    width: 8,
                  },
                  content: `+${Object(20000).toLocaleString(lan())}`,
                  type: 'button',
                },
                { content: [], type: 'text' },
                {
                  config: { width: 4 },
                  accelerator: 98,
                  content: i18n().ui_yes,
                  type: 'button',
                },
                {
                  config: { width: 4 },
                  accelerator: 99,
                  content: i18n().ui_no,
                  type: 'button',
                },
              ]);
              switch (await era.input()) {
                case 2:
                  got -= 20;
                  break;
                case 4:
                  got--;
                  break;
                case 6:
                  got++;
                  break;
                case 8:
                  got += 20;
                  break;
                case 98:
                  flag = false;
                  break;
                case 99:
                  got = 0;
                  flag = false;
              }
            }
            if (got > 0) {
              life_marks.funds -= got * 1000;
              era.add('flag:当前马币', got * 1000);
              await i18n().timon.others.ransom_result(
                get_abbr_number(got * 1000),
                life_marks.funds > 0 && get_abbr_number(life_marks.funds),
                get_abbr_number(
                  life_marks.funds / (500 - 300 * life_marks.buff),
                ),
              );
              if (!life_marks.funds) {
                await era.waitAnyKey();
              }
            }
          }
          if (_old !== life_marks.funds) {
            const billings = sys_get_billings();
            let invest = billings.find((e) => e.creditor === creditors.invest);
            if (!invest) {
              invest = { creditor: creditors.invest, timer: -1, repay: 0 };
              billings.push(invest);
            }
            invest.repay = life_marks.funds / (500 - 300 * life_marks.buff);
          }
        },
      }
    : era.get('love:349') >= 40
      ? {
          name: i18n().timon.npc_recruit_out_school,
          handle() {
            era.set('callname:349:-2', era.get('callname:349:-1'));
            era.set('cflag:349:招募状态', recruit_flags.yes);
            if (era.get('talent:349:病娇') > 0) {
              yandere_list.push(349);
            }
            return i18n().timon.recruit.rec_end(get_chara_talk(349));
          },
        }
      : {};

async function page_visitors() {
  let flag_page = true;
  let flag_visitor = true;
  await arrive_location(era.set('flag:当前位置', location_enum.visitor));
  let visitor_list = loc_characters.get(location_enum.visitor);
  if (visitor_list.length > 0) {
    const celebration = get_celebration();
    while (flag_page) {
      era.setHorizontalAlign('space-around');
      era.printInColRows(
        [{ content: i18n().timon.npc_select, type: 'text' }],
        ...visitor_list.map((cid) => {
          const image = era.get(`cstr:${cid}:头像`);
          return {
            columns: [
              {
                names: `${image}_私_半身\t${image}_半身`,
                type: 'image.whole',
              },
              {
                accelerator: cid,
                config: {
                  align: 'center',
                  buttonType:
                    EventMarks.get(cid).count() > 0 ? 'danger' : 'warning',
                },
                content: get_display_name(era.get(`callname:${cid}:-2`)),
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
        [
          {
            accelerator: 999,
            config: get_back_button_tip(),
            content: i18n().ui_back,
            type: 'button',
          },
        ],
      );
      era.setHorizontalAlign('start');
      const cid = await era.input();
      if (cid !== 999) {
        const chara = get_chara_talk(cid);
        const title = CharaTitles.get(chara.id).get_colored_curr_title();
        flag_visitor = true;
        while (flag_visitor) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: di18n.kojo.get_npc_talk(cid),
            },
            {
              loc: visitor_list.length > 1 && location_enum.restroom,
              name: di18n.kojo.get_npc_sex(cid),
              fail_cb: () => (flag_visitor = flag_page = false),
            },
            {
              loc: location_enum.visitor,
              name: di18n.kojo.get_npc_out(cid),
              print_out_page,
            },
            { name: di18n.kojo.get_npc_celebration(cid, celebration) },
            handlers[cid](),
            { name: di18n.kojo.get_npc_bye(cid) },
          );
          if ((flag_visitor &&= temp_flag)) {
            await era.clear();
            print_page_header();
          }
        }
        visitor_list = visitor_list.filter(sys_check_awake);
        flag_page = visitor_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await era.clear();
        print_page_header();
        era.drawLine();
      }
    }
    era.drawLine();
    await era.printAndWait(i18n().timon.it_back_office);
  } else {
    era.drawLine();
    await era.printAndWait(i18n().timon.it_force_back_office);
  }
  loc_characters.set(location_enum.visitor, visitor_list);
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.visitor,
  });
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_visitors;
