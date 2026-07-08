const era = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { get_image } = require('#/system/sys-calc-image');
const filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const print_page_header = require('#/page/components/page-header');
const {
  get_shared_com_base_birthday,
  get_shared_com_base_body,
  get_shared_com_base_female,
  get_shared_com_base_hair,
  get_shared_com_base_summary,
  get_shared_com_edu_adapt,
} = require('#/page/exp/snippets');

const {
  check: check_base_script,
} = require('#/event/basement/basement-factory');
const { get_custom_check } = require('#/event/check/check-factory');
const { check: check_daily_script } = require('#/event/daily/daily-factory');
const { check: check_edu_script } = require('#/event/edu/edu-factory');
const { check: check_ero_script } = require('#/event/ero/ero-factory');
const { check: check_love_script } = require('#/event/love/love-factory');
const game_guides = require('#/event/others/game-guides');
const {
  check: check_rec_script,
  run_custom_rec,
} = require('#/event/rec/rec-factory');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry, join_list } = require('#/utils/list-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const {
  attr_change_colors,
  attr_colors,
  el_danger_color,
} = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_talent, get_xp } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { skills_dict } = require('#/data/race/skill/skill-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

async function print_rec_page() {
  const me = get_chara_talk(0);
  const uma =
    era.get('flag:角色性别') === 1 ? i18n().name.uma_boy : i18n().name.uma_girl;
  let event_chara_list, flag_recruit, flag_leave;

  const team_list = filter_chara('cflag', '招募状态', recruit_flags.yes);
  const stay_list = [
    sys_get_star_premium_draw().chara,
    era.get('flag:物色对象'),
  ].filter((e) => e > 0);
  let today_list = gacha(
    filter_chara('cflag', '随机招募', 1).filter(
      (v) => !team_list.includes(v) && era.get(`cflag:${v}:成长阶段`) >= 2,
    ),
    5,
  );
  today_list.push(...stay_list);
  today_list = today_list.filter((e, i, l) => e && l.indexOf(e) === i);
  if (today_list.length > 6) {
    today_list.splice(
      today_list.findIndex((e) => !stay_list.includes(e)),
      1,
    );
  }
  today_list = today_list.sort((a, b) => a - b);
  await arrive_location(era.set('flag:当前位置', location_enum.playground));
  await game_guides.recruit();
  flag_leave = await sys_get_random_event(event_hooks.recruit_start)();
  const flag_limit = sys_check_team_limit() >= 0;
  flag_recruit = !flag_leave;

  while (flag_recruit) {
    const buffer = [];
    buffer.push([{ type: 'divider' }]);
    const cur_recruit = era.get('flag:物色对象');
    today_list = today_list.filter(
      (cid) => era.get(`cflag:${cid}:随机招募`) > 0,
    );
    if (today_list.length > 0) {
      if (cur_recruit && today_list.indexOf(cur_recruit) === -1) {
        buffer[0].push({
          content: [
            ...i18n().timon.get_it_chara_not_in_recruit(
              get_chara_talk(cur_recruit),
            ),
            { isBr: 2 },
          ],
          type: 'text',
        });
      } else if (flag_limit) {
        buffer[0].push({
          content: [
            ...i18n().timon.get_it_recruit_disabled(me, uma),
            { isBr: 2 },
          ],
          type: 'text',
        });
      } else {
        buffer[0].push({
          content: [...i18n().timon.get_it_in_recruit(me, uma), { isBr: 2 }],
          type: 'text',
        });
      }
      buffer.push(
        ...today_list.map((cid) => {
          const name = era.get(`static:${cid}:name`);
          /** @type {TextContent} */
          let mark = [
            check_rec_script(cid) && 'r',
            check_daily_script(cid) && 'd',
            check_edu_script(cid) && 'ed',
            check_love_script(cid) && 'l',
            check_ero_script(cid) && 'er',
            check_base_script(cid) && 'b',
          ]
            .filter((e) => e)
            .map((m) => ({
              content: __(`timon.rec_km_${m}`),
              title: __(`timon.others.sd_f_title_kojo_${m}`),
            }));
          if (era.checkImage('通用_裸') && check_chara_ero_image(cid)) {
            mark.push({
              content: i18n().timon.rec_km_i,
              title: i18n().timon.others.sd_f_title_image,
            });
          }
          if (mark.length > 0) {
            mark = [
              i18n().timon.rec_kojo_mark_border[0],
              ...mark,
              i18n().timon.rec_kojo_mark_border[1],
            ];
          } else {
            mark.push({ isBr: 1 });
          }
          return {
            columns: [
              {
                names: get_image(cid)
                  .map((img) => `${img}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                accelerator: cid,
                config: {
                  align: 'center',
                  disabled: flag_limit || (cur_recruit && cur_recruit !== cid),
                },
                content: __(`name.${name}`, name),
                type: 'button',
              },
              {
                config: { align: 'center', fontSize: '0.8rem' },
                content: join_list(mark, ' '),
                type: 'text',
              },
              {
                accelerator: cid + 1000,
                config: { align: 'center' },
                content: i18n().ui_rec_chara_info,
                type: 'button',
              },
              {
                accelerator: cid + 2000,
                config: { align: 'center' },
                content: i18n().ui_rec_edu_info,
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
      );
    } else {
      buffer[0].push({
        config: { align: 'center' },
        content: i18n().timon.get_it_no_chara_in_recruit(uma),
        type: 'text',
      });
    }
    era.setHorizontalAlign('space-around');
    era.printInColRows(...buffer, [
      { type: 'divider' },
      { type: 'button', accelerator: 999, content: i18n().ui_rec_exit },
    ]);
    era.setHorizontalAlign('start');

    let ret = await era.input();

    if (ret === 999) {
      // 选择直接离开的时候触发需要选择离开才触发的招募事件
      // 队伍已经满了的情况下是不会触发事件的
      if (era.get('flag:物色对象') === 0) {
        event_chara_list = filter_chara(
          'cflag',
          '招募状态',
          recruit_flags.success_on_leave,
        ).filter((cid) => today_list.includes(cid) && !flag_limit);
        if (event_chara_list.length > 0) {
          era.drawLine();
          flag_leave = await run_custom_rec(
            get_random_entry(event_chara_list),
            event_hooks.recruit_end,
          );
        }
      }
      flag_recruit = false;
    } else if (ret > 1000 && ret <= 2000) {
      const selected = ret - 1000;
      const name = get_display_name(era.get(`static:${selected}:name`));
      const sex_code = era.get(`cflag:${selected}:性别`);
      const talent_list = [];
      let temp = get_talent(selected);
      if (temp.length > 0) {
        talent_list.push(
          {
            config: { width: 2 },
            content: i18n().tb_talent.n_normal,
            type: 'text',
          },
          {
            config: { width: 22 },
            content: temp,
            type: 'text',
          },
        );
      }
      temp = get_xp(selected);
      if (temp.length > 0) {
        talent_list.push(
          {
            config: { width: 2 },
            content: i18n().tb_talent.n_xp,
            type: 'text',
          },
          {
            config: { width: 22 },
            content: temp,
            type: 'text',
          },
        );
      }
      era.printMultiColumns(
        [
          {
            config: {
              content: i18n().ui_rec_c_info_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: get_shared_com_base_summary(selected),
            type: 'text',
          },
          {
            content: get_shared_com_base_hair(selected),
            type: 'text',
          },
          {
            content: get_shared_com_base_birthday(selected),
            type: 'text',
          },
          {
            config: {
              content: i18n().ui_rec_c_body_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: get_shared_com_base_body(selected),
            type: 'text',
          },
          ...(sex_code !== 1 &&
          (era.get('status:0:透视镜片') || era.get('status:0:马语者'))
            ? [
                {
                  content: get_shared_com_base_female(selected, true),
                  type: 'text',
                },
              ]
            : []),
          {
            config: {
              content: i18n().ui_rec_c_talent_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...talent_list,
          ...(era.checkImage('通用_裸')
            ? [
                {
                  config: {
                    content: i18n().ui_rec_c_image_template.replace(
                      '%NAME%',
                      name,
                    ),
                    position: 'left',
                  },
                  type: 'divider',
                },
                {
                  content: check_chara_ero_image(selected)
                    ? i18n().detail.sex_image_personal_info
                    : i18n().detail.sex_image_common_info,
                  type: 'text',
                },
              ]
            : []),
        ],
        { width: 18 },
      );
      await era.waitAnyKey();
    } else if (ret > 2000) {
      const selected = ret - 2000;
      const skill_list = CharaSkills.get(selected)
        .get()
        .map((e) => ({
          config: { width: 5 },
          content: skills_dict[e].get_colored_name(),
          type: 'text',
        }));
      const available_list = CharaAvailableSkills.get(selected)
        .get()
        .map((e) => ({
          config: { width: 5 },
          content: skills_dict[e].get_colored_name(),
          type: 'text',
        }));
      const skill_buffer = [];
      let name = era.get(`static:${selected}:name`);
      name = __(`name.${name}`, name);
      skill_buffer.push({
        config: { width: 3 },
        content: i18n().ui_rec_e_skill_init,
        type: 'text',
      });
      if (skill_list.length > 0) {
        skill_buffer.push(...skill_list);
      } else {
        skill_buffer.push({
          config: { width: 6 },
          content: i18n().ui_rec_e_skill_init_pt,
          type: 'text',
        });
      }
      skill_buffer.push({ content: [], type: 'text' });
      if (available_list.length > 0) {
        const splitter = Math.floor(available_list.length / 2);
        skill_buffer.push(
          {
            config: { width: 3 },
            content: i18n().ui_rec_e_skill_classic,
            type: 'text',
          },
          ...available_list.slice(0, splitter),
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: i18n().ui_rec_e_skill_senior,
            type: 'text',
          },
          ...available_list.slice(splitter),
        );
      } else {
        skill_buffer.push(
          {
            config: { width: 3 },
            content: i18n().ui_rec_e_skill_classic,
            type: 'text',
          },
          {
            config: { width: 6 },
            content: i18n().ui_rec_e_skill_after_pt,
            type: 'text',
          },
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: i18n().ui_rec_e_skill_senior,
            type: 'text',
          },
          {
            config: { width: 6 },
            content: i18n().ui_rec_e_skill_after_pt,
            type: 'text',
          },
        );
      }
      const adapt_info = get_shared_com_edu_adapt(selected);
      const aim_template = i18n().detail.edu_aim_template_in_rec;
      const c_script = get_custom_check(selected);
      const personal_achieve = c_script.get_personal_achieve();
      era.printMultiColumns(
        [
          {
            config: {
              content: i18n().ui_rec_e_train_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...new Array(5)
            .fill(0)
            .map((_, i) => ({
              i,
              n: di18n.n_attr[i],
              // 属性训练加成：25-29
              v: era.get(`staticcflag:${selected}:${25 + i}`),
            }))
            .filter((e) => e.v > 0)
            .map((e) => ({
              config: { width: 4, color: attr_colors[e.i] },
              content: i18n()
                .ui_rec_e_train_buff_template.replace('%ATTR%', e.n)
                .replace('%BUFF%', e.v.toString()),
              type: 'text',
            })),
          {
            config: {
              content: i18n().ui_rec_e_adapt_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...adapt_info,
          {
            config: {
              content: i18n().ui_rec_e_skill_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...skill_buffer,
          {
            config: {
              content: i18n().ui_rec_e_aim_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...c_script
            .get_edu_aims()
            .filter(({ content }) => !content)
            .map(({ champion, desc, g1, require }) => ({
              config: {
                color: champion ? el_danger_color : void 0,
                fontStyle: g1 ? 'italic' : void 0,
                fontWeight: g1 && champion ? 'bold' : void 0,
              },
              content: aim_template
                .replace('%DESC%', desc)
                .replace('%REQUIRE%', require),
              type: 'text',
            })),
          {
            config: {
              content: i18n().ui_rec_e_title_template.replace('%NAME%', name),
              position: 'left',
            },
            type: 'divider',
          },
          ...c_script.get_personal_titles().map((tid) => {
            const name = __(`title.${tid}`, i18n().title.undef);
            return {
              content: i18n().title.template_in_rec(
                { content: name, color: get_chara_color(selected) },
                i18n().title_desc.personal_template.replace(
                  '%DESC%',
                  __(`title_desc.${tid}`, i18n().title_desc.undef),
                ),
              ),
              type: 'text',
            };
          }),
          {
            content: i18n().title.achieve_template_in_rec(
              {
                color: get_chara_color(selected),
                content: __(
                  `title.${personal_achieve}`,
                  i18n().title_desc.undef,
                ),
                fontWeight: 'bold',
              },
              sys_personal_achievement.get(selected) > 0
                ? { color: attr_change_colors.up, content: '✔' }
                : { color: attr_change_colors.down, content: '✘' },
            ),
            type: 'text',
          },
        ],
        { width: 20 },
      );
      await era.waitAnyKey();
    } else {
      era.drawLine();
      // 普通招募事件
      flag_leave = await run_custom_rec(ret, event_hooks.recruit);
      // 正常招募却没招募，说明招募没成功
      flag_recruit = era.get(`cflag:${ret}:招募状态`) <= 0 && !flag_leave;
    }
    if (flag_recruit) {
      await era.clear();
      print_page_header();
    }
  }
  if (!flag_leave) {
    era.drawLine();
    await era.printAndWait(i18n().timon.it_back_office);
    await sys_get_random_event(event_hooks.recruit_end)();
  }
  await game_guides.recruit_end();
  era.set('flag:当前位置', location_enum.office);
}

module.exports = print_rec_page;
