const era = require('#/era-electron');

const {
  sys_get_chara_info,
} = require('#/system/chara/sys-calc-characteristic');
const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { get_image } = require('#/system/sys-calc-image');
const filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const print_page_header = require('#/page/components/page-header');

const { get_custom_check } = require('#/event/check/check-factory');
const { check_edu_script } = require('#/event/edu/edu-factory');
const game_guides = require('#/event/others/game-guides');
const { check_rec_script, run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const {
  gacha,
  get_random_entry,
  join_to_string,
} = require('#/utils/list-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const {
  adaptability_colors,
  attr_change_colors,
  el_danger_color,
} = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const title_desc = require('#/data/desc/title-desc.json');
const { sex_title } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_adaptability_rank,
  get_breast_cup,
  get_hair_color,
  get_skin,
  get_skin_color,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

async function print_rec_page() {
  const me = get_chara_talk(0);
  let event_chara_list, flag_recruit, flag_leave;

  const team_list = filter_chara('cflag', '招募状态', recruit_flags.yes),
    stay_list = [
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
      today_list.findIndex((e) => stay_list.indexOf(e) === -1),
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
      (chara_id) => era.get(`cflag:${chara_id}:随机招募`) > 0,
    );
    if (today_list.length) {
      if (cur_recruit && today_list.indexOf(cur_recruit) === -1) {
        buffer[0].push({
          content: [
            get_chara_talk(cur_recruit).get_colored_name(),
            ' 似乎不在训练场……',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      } else if (flag_limit) {
        buffer[0].push({
          content: [
            me.get_colored_name(),
            ' 已经有一定数量的担当，其他马',
            era.get('flag:角色性别') === 1 ? '郎' : '娘',
            '不会同意 ',
            me.get_colored_name(),
            ' 的招募了……',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      } else {
        buffer[0].push({
          content: [
            '在训练场内见到了几位马',
            era.get('flag:角色性别') === 1 ? '郎' : '娘',
            '，是谁吸引了 ',
            me.get_colored_name(),
            ' 的注意力呢？',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      }
      buffer.push(
        ...today_list.map((chara_id) => {
          return {
            columns: [
              {
                names: get_image(chara_id)
                  .map((e) => `${e}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                accelerator: chara_id,
                config: {
                  align: 'center',
                  buttonType:
                    check_rec_script(chara_id) && check_edu_script(chara_id)
                      ? 'danger'
                      : 'warning',
                  disabled:
                    flag_limit || (cur_recruit && cur_recruit !== chara_id),
                },
                content: era.get(`static:${chara_id}:name`),
                type: 'button',
              },
              {
                accelerator: chara_id + 1000,
                config: { align: 'center' },
                content: '个人情报预览',
                type: 'button',
              },
              {
                accelerator: chara_id + 2000,
                config: { align: 'center' },
                content: '育成情报预览',
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
        [
          {
            content: [
              { isBr: true },
              '* 招募按钮显示为',
              { color: el_danger_color, content: '红色' },
              '的角色有口上',
            ],
            type: 'text',
          },
        ],
      );
    } else {
      buffer[0].push({
        config: {
          align: 'center',
        },
        content: [
          '训练场没有引人注目的马',
          era.get('flag:角色性别') === 1 ? '郎' : '娘',
          '……',
        ],
        type: 'text',
      });
    }
    era.setHorizontalAlign('space-around');
    era.printInColRows(...buffer, [
      { type: 'divider' },
      { type: 'button', accelerator: 999, content: '直接离开' },
    ]);
    era.setHorizontalAlign('start');

    let ret = await era.input();

    if (ret === 999) {
      // 选择直接离开的时候触发需要选择离开才触发的招募事件
      // 队伍已经满了的情况下是不会触发事件的
      event_chara_list = filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.success_on_leave,
      ).filter((chara_id) => today_list.includes(chara_id) && !flag_limit);
      if (event_chara_list.length) {
        era.drawLine();
        flag_leave = await run_custom_rec(
          get_random_entry(event_chara_list),
          event_hooks.recruit_end,
        );
      }
      flag_recruit = false;
    } else if (ret > 1000 && ret <= 2000) {
      const selected = ret - 1000,
        name = era.get(`static:${selected}:name`),
        body_hair_color = era.get(`cstr:${selected}:毛色`),
        hair_color = era.get(`cstr:${selected}:发色`),
        sex_code = era.get(`cflag:${selected}:性别`),
        talent_list = [];
      let hair = era.get(`cstr:${selected}:呆毛`);
      hair = join_to_string(
        [
          hair ? `${hair}呆毛` : '',
          era.get(`cstr:${selected}:前发`),
          era.get(`cstr:${selected}:中发`),
          era.get(`cstr:${selected}:后发`),
        ],
        '+',
      );
      let temp = get_talent(selected);
      if (temp.length > 0) {
        talent_list.push(
          {
            config: { width: 2 },
            content: '性格',
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
            content: '其他',
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
              content: `${name} 的个人情报`,
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: [
              '肤色',
              { color: get_skin_color(selected), content: get_skin(selected) },
              ' 的 ',
              {
                color: get_hair_color(hair_color),
                content: `${hair_color}发`,
              },
              {
                color: get_hair_color(body_hair_color),
                content: `${body_hair_color}毛`,
              },
              ' ',
              sys_get_chara_info(era.get(`cflag:${selected}:气性`)),
              ' ',
              sex_title[sex_code],
            ],
            type: 'text',
          },
          { content: ['发型：', hair], type: 'text' },
          {
            content: [
              '出生于 ',
              era.get(`cflag:${selected}:出生月份`),
              ' 月 ',
              era.get(`cflag:${selected}:出生日期`),
              ' 日',
            ],
            type: 'text',
          },
          {
            config: {
              content: `${name} 的身体尺寸`,
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: [
              '身高：',
              era.get(`cflag:${selected}:身高`).toString(),
              'cm ｜ 体重：控制得当',
            ],
            type: 'text',
          },
          ...(sex_code !== 1 &&
          (era.get('status:0:透视镜片') || era.get('status:0:马语者'))
            ? [
                {
                  content: [
                    '三围：B',
                    get_bust_size(selected, true).toString(),
                    ' (',
                    get_breast_cup(selected, true).toString(),
                    ' Cup) · W',
                    get_waist_size(selected).toString(),
                    ' · H',
                    get_hip_size(selected).toString(),
                  ],
                  type: 'text',
                },
              ]
            : []),
          {
            config: {
              content: `${name} 的性格特征`,
              position: 'left',
            },
            type: 'divider',
          },
          ...talent_list,
        ],
        { width: 18 },
      );
      await era.waitAnyKey();
    } else if (ret > 2000) {
      const selected = ret - 2000,
        name = era.get(`static:${selected}:name`),
        skill_list = CharaSkills.get(selected)
          .get()
          .map((e) => ({
            config: { width: 5 },
            content: skills_dict[e].get_colored_name(),
            type: 'text',
          })),
        available_list = CharaAvailableSkills.get(selected)
          .get()
          .map((e) => ({
            config: { width: 5 },
            content: skills_dict[e].get_colored_name(),
            type: 'text',
          })),
        skill_buffer = [];
      skill_buffer.push({
        config: { width: 3 },
        content: '初始：',
        type: 'text',
      });
      if (skill_list.length > 0) {
        skill_buffer.push(...skill_list);
      } else {
        skill_buffer.push({
          config: { width: 6 },
          content: '技能点数+680',
          type: 'text',
        });
      }
      skill_buffer.push({ content: [], type: 'text' });
      if (available_list.length > 0) {
        skill_buffer.push(
          {
            config: { width: 3 },
            content: '经典年解锁：',
            type: 'text',
          },
          ...available_list.slice(0, 2),
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: '资深年解锁：',
            type: 'text',
          },
          ...available_list.slice(2),
        );
      } else {
        skill_buffer.push(
          {
            config: { width: 3 },
            content: '经典年解锁：',
            type: 'text',
          },
          {
            config: { width: 6 },
            content: '技能点数+400',
            type: 'text',
          },
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: '资深年解锁：',
            type: 'text',
          },
          {
            config: { width: 6 },
            content: '技能点数+400',
            type: 'text',
          },
        );
      }
      const adapt_info = [];
      adaptability_names.forEach((e) => {
        const adapt = era.get(`cflag:${selected}:${e}适性`);
        adapt_info.push(
          { config: { width: 2 }, content: [e, '：'], type: 'text' },
          {
            config: {
              color: adaptability_colors[adapt],
              fontWeight: 'bold',
              width: 2,
            },
            content: get_adaptability_rank(adapt),
            type: 'text',
          },
        );
      });
      era.printMultiColumns(
        [
          {
            config: {
              content: `${name} 的训练加成`,
              position: 'left',
            },
            type: 'divider',
          },
          ...attr_names
            .map((e) => ({
              n: e,
              v: era.get(`staticcflag:${selected}:${e}加成`),
            }))
            .filter((e) => e.v > 0)
            .map((e) => ({
              config: { width: 4, color: attr_colors[e.n] },
              content: [e.n, '：+', e.v.toString(), '%'],
              type: 'text',
            })),
          {
            config: {
              content: `${name} 的比赛适应`,
              position: 'left',
            },
            type: 'divider',
          },
          ...adapt_info,
          {
            config: {
              content: `${name} 的比赛技巧`,
              position: 'left',
            },
            type: 'divider',
          },
          ...skill_buffer,
          {
            config: {
              content: `${name} 的育成目标`,
              position: 'left',
            },
            type: 'divider',
          },
          ...get_custom_check(selected)
            .get_edu_aims()
            .map((e) => {
              const g1 = e.content.indexOf('G1') !== -1;
              const champion = e.content.indexOf('1着') !== -1;
              return {
                config: {
                  color: champion ? el_danger_color : undefined,
                  fontWeight: g1 || champion ? 'bold' : 'normal',
                },
                content: e.content.substring(0, e.content.length - 2),
                type: 'text',
              };
            }),
          {
            config: {
              content: `${name} 的专属称号`,
              position: 'left',
            },
            type: 'divider',
          },
          ...get_custom_check(selected)
            .get_personal_titles()
            .map((e) => ({
              content: [
                { content: e, color: get_chara_color(selected) },
                '：',
                title_desc[e] || '在一次育成周期内赢取了六次以上的G1比赛胜利',
              ],
              type: 'text',
            })),
          {
            content: [
              '专属成就：',
              {
                color: get_chara_color(selected),
                fontWeight: 'bold',
                content: era.get(`staticcstr:${selected}:称号`),
              },
              ' ',
              sys_personal_achievement.get(selected) > 0
                ? { color: attr_change_colors.up, content: '✔' }
                : { color: attr_change_colors.down, content: '✘' },
            ],
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
    await era.printAndWait('【折返了】');
    await sys_get_random_event(event_hooks.recruit_end)();
  }
  await game_guides.recruit_end();
  era.set('flag:当前位置', location_enum.office);
}

module.exports = print_rec_page;
