const era = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const get_riko_button = require('#/page/components/get-riko-button');
const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

async function page_chairman_office() {
  let flag_page = true;
  let nothing = true;
  await arrive_location(era.set('flag:当前位置', location_enum.chairman));
  const celebration = get_celebration();
  const chara = get_chara_talk(loc_characters.get(location_enum.chairman)[0]);
  const title = CharaTitles.get(chara.id).get_colored_curr_title();
  const star_premium_draw = sys_get_star_premium_draw();
  let cost = star_premium_draw.cost;
  if (era.get('cflag:302:招募状态') === recruit_flags.yes) {
    cost = (cost * 3) / 4;
  }
  let temp_flag;
  while (flag_page) {
    switch (chara.id) {
      case 302:
        temp_flag = await npc_common(
          chara,
          title,
          {
            name: di18n.kojo.get_npc_talk(chara.id),
            async handle() {
              nothing = false;
              await i18n().kojo[chara.id].daily.npc_talk(
                generate_dictionary(chara.id),
              );
            },
          },
          {
            async handle() {
              nothing = false;
              switch (await goto_sex(chara.id, location_enum.chairman)) {
                case true:
                  await i18n().kojo[chara.id].daily.npc_sex(
                    generate_dictionary(chara.id),
                  );
                  break;
                case 2:
                  flag_page = false;
              }
            },
            name: di18n.kojo.get_npc_sex(chara.id),
          },
          {
            async handle() {
              nothing = false;
              sys_handle_action(
                sys_get_move_cost(location_enum.gate, chara.id),
                chara.id,
              );
              era.set('flag:当前位置', location_enum.gate);
              await print_out_page();
              era.set('flag:当前位置', location_enum.chairman);
            },
            name: di18n.kojo.get_npc_out(chara.id),
          },
          {
            handle: async () => (nothing = false),
            name: di18n.kojo.get_npc_celebration(chara.id, celebration),
          },
          {
            async handle() {
              nothing = false;
              if (sys_check_team_limit() >= 0) {
                await i18n().timon.others.star_drew_limited(chara);
              } else if (era.get('flag:当前月') > 3) {
                await i18n().timon.others.star_drew_wrong_date(chara);
              } else {
                i18n().timon.others.star_drew_intro(chara);
                const temp_list = era
                  .getAllCharacters()
                  .filter(
                    (cid) =>
                      cid > 0 &&
                      (era.get(`cflag:${cid}:随机招募`) ||
                        era.get(`staticcflag:${cid}:随机招募`)) === 1 &&
                      era.get(`cflag:${cid}:招募状态`) !== recruit_flags.yes &&
                      era.get('cflag:0:模版角色') !== cid,
                  );
                if (
                  era.get('cflag:302:招募状态') !== recruit_flags.yes &&
                  new TasteLifeMarks().who_am_i === 2
                ) {
                  temp_list.push(302);
                }
                era.printMultiColumns(
                  i18n().timon.others.star_drew_options.map((e, i) => ({
                    accelerator: i + 1,
                    config: { align: 'center', width: 6 },
                    content: e,
                    type: 'button',
                  })),
                );
                let temp = await era.input();
                switch (temp) {
                  case 1:
                    temp = [];
                    temp_list
                      .map((cid) => {
                        const color = get_chara_color(cid);
                        const flag_script =
                          check_rec_script(cid) && check_edu_script(cid);
                        const name = get_display_name(
                          era.get(`static:${cid}:name`),
                        );
                        return {
                          accelerator: cid,
                          config: {
                            align: 'center',
                            buttonType: '',
                            color,
                            width: 4,
                          },
                          content:
                            star_premium_draw.chara === cid
                              ? i18n().timon.others.get_star_drew_selected(name)
                              : name,
                          priority: flag_script,
                          type: 'button',
                        };
                      })
                      .reduce(
                        (p, c) => {
                          p[1 - c.priority].push(c);
                          return p;
                        },
                        [[], []],
                      )
                      .forEach((l) => {
                        if (l.length > 0) {
                          temp.push({
                            config: {
                              content: l[0].priority
                                ? i18n().timon.others.star_drew_kojo_chara
                                : i18n().timon.others.star_drew_timon_chara,
                            },
                            type: 'divider',
                          });
                          temp.push(...l);
                        }
                      });
                    era.printMultiColumns(temp);
                    temp = await era.input();
                    break;
                  case 2:
                    era.print(i18n().timon.others.star_drew_chara_name_input);
                    temp = await era.input();
                    temp = temp_list.filter(
                      (e) =>
                        get_display_name(era.get(`static:${e}:name`)) === temp,
                    )[0];
                    break;
                  case 3:
                    era.print(i18n().timon.others.star_drew_chara_id_input);
                    temp = await era.input();
                    break;
                  case 4:
                    temp = -255;
                }
                if (temp === 302) {
                  era.set('callname:302:-2', '900201');
                  era.set('cflag:302:招募状态', recruit_flags.yes);
                  if (era.get('talent:302:病娇')) {
                    yandere_list.push(302);
                  }
                  await i18n().kojo[chara.id].recruit.recruit(
                    generate_dictionary(chara.id),
                  );
                } else if (temp !== -255) {
                  if (temp === star_premium_draw.chara) {
                    await i18n().timon.others.star_drew_duplicate(
                      chara,
                      get_chara_talk(temp),
                    );
                  } else if (temp_list.indexOf(temp) === -1) {
                    await i18n().timon.others.star_drew_no_one(chara);
                  } else {
                    if (
                      (await i18n().timon.others.star_drew(
                        chara,
                        get_chara_talk(0),
                        get_chara_talk(temp).get_colored_actual_name(),
                        star_premium_draw.chara > 0,
                      )) === 1
                    ) {
                      sys_change_fame(-cost);
                      if (star_premium_draw.chara > 0) {
                        era.println();
                        sys_like_chara(302, 0, -50) && (await era.waitAnyKey());
                      }
                      star_premium_draw.chara = temp;
                    }
                  }
                }
              }
            },
            name: i18n().kojo[chara.id].npc_func,
          },
          {
            config: get_back_button_tip(),
            async handle() {
              if (sys_check_awake(chara.id)) {
                await i18n().kojo[chara.id].daily.npc_bye({
                  ...generate_dictionary(chara.id),
                  nothing,
                });
                if (nothing) {
                  era.println();
                  sys_like_chara(302, 0, -25) && (await era.waitAnyKey());
                }
              }
            },
            name: di18n.kojo.get_npc_bye(chara.id),
          },
          () => (nothing = false),
        );
        break;
      case 306:
        temp_flag = await npc_common(
          chara,
          title,
          { name: di18n.kojo.get_npc_talk(chara.id) },
          {
            name: di18n.kojo.get_npc_sex(chara.id),
            fail_cb: () => (flag_page = false),
          },
          {
            loc: location_enum.chairman,
            name: di18n.kojo.get_npc_out(chara.id),
            print_out_page,
          },
          { name: di18n.kojo.get_npc_celebration(chara.id, celebration) },
          get_riko_button(),
          {
            config: get_back_button_tip(),
            name: di18n.kojo.get_npc_bye(chara.id),
          },
        );
    }
    if ((flag_page &&= temp_flag)) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait(i18n().timon.it_back_office);
  if (!sys_check_awake(chara.id)) {
    loc_characters.set(location_enum.chairman, []);
  }
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.chairman,
  });
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_chairman_office;
