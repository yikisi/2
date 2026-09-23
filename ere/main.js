/**
 * EraUma - 愛若駑馬（EraUma）是以某頁遊公司旗下馬耳學生妹作品爲世界觀製作的一款同人文字冒險遊戲。
 * 該世界觀的核心圍繞娘化的名賽馬和歷史上曾發生過的比賽展開。
 * 玩家將在遊戲中扮演訓練員——即負責訓練馬娘的角色——與諸多馬娘邂逅並創作獨屬於玩家和其負責馬娘的故事。
 *
 * Copyright (C) 2025 UmaERA Team <erauma@tutanota.com>
 *
 * 本程序是免费软件；您可以根据自由软件基金会发布的 GNU 通用公共许可证
 * 的条款重新分发和/或修改它；许可证的版本可以是第2版，也可以是（由您选择）
 * 任何更高版本。
 *
 * 本程序的分发是希望它会有用，但没有任何担保；甚至没有适销性或特定用途
 * 适用性的暗示担保。请参阅 GNU 通用公共许可证以获取更多详细信息。
 *
 * 您应该已经随本程序收到了 GNU 通用公共许可证的副本；如果没有，请联系
 * UmaERA Team <erauma@tutanota.com>。
 */
const era = require('#/era-electron');

const { set_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const global_achievement = require('#/system/global/sys-calc-achievement');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { get_custom_check } = require('#/event/check/check-factory');
const { check: check_edu_script } = require('#/event/edu/edu-factory');

const get_display_name = require('#/utils/calc-display-name');
const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { join_list } = require('#/utils/list-utils');
const { set_lan: set_lan_for_value } = require('#/utils/value-utils');

const { generate_copyrights, get_copyright_entry } = require('#/copyright');
const { get_chara_color } = require('#/data/chara-colors');
const {
  adaptability_colors,
  buff_colors,
  el_danger_color,
} = require('#/data/color-const');
const { first_child_id } = require('#/data/other-const');

const { __, i18n, lan, lans, set_lan } = require('#/i18n/selector');

const { res_version } = require('#/versions');

module.exports = async () => {
  // GLOBALNAME:3 = 语言
  set_lan(era.get('global:3') || era.set('global:3', 'zh-CN'));
  set_lan_for_value(lan());

  let flag_title = true;
  CharaTalk.me = new CharaTalk(0);

  era.printMultiColumns(
    [
      { type: 'divider' },
      {
        config: {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
        content: i18n().tt_disclaimer,
        type: 'text',
      },
      {
        content: i18n().tt_disclaimer_content,
        type: 'text',
      },
      {
        accelerator: 1,
        content: i18n().tt_disclaimer_accept,
        type: 'button',
      },
      {
        accelerator: 2,
        content: i18n().tt_disclaimer_reject,
        type: 'button',
      },
    ],
    {
      offset: 4,
      width: 16,
    },
  );
  if ((await era.input()) === 2) {
    era.quit();
  }
  set_chara_ero_image();
  const { versionName, site, author } = era.get('gamebase');

  const date = new Date();
  const real_month = date.getMonth() + 1;
  const real_date = date.getDate();
  const birth_list = [];
  era.getAllCharacters().forEach((cid) => {
    if (
      cid > 0 &&
      cid < 1000 &&
      // CFLAGNAME:1 = 种族
      // CFLAGNAME:17 = 出生月份
      // CFLAGNAME:18 = 出生日期
      era.get(`staticcflag:${cid}:1`) > 0 &&
      era.get(`staticcflag:${cid}:17`) === real_month &&
      era.get(`staticcflag:${cid}:18`) === real_date
    ) {
      birth_list.push(cid);
    }
  });

  function get_birth_names() {
    const ret = join_list(
      birth_list.map((cid) => ({
        color: get_chara_color(cid),
        content: get_display_name(era.get(`static:${cid}:name`)),
        fontWeight: 'bold',
      })),
      i18n().ui_comma,
    );
    if (i18n().ui_comma !== i18n().ui_conjunction) {
      const b_index = ret.findLastIndex((e) => e === i18n().ui_comma);
      if (b_index !== -1) {
        ret[b_index] = i18n().ui_conjunction;
      }
    }
    return ret;
  }

  const buttons = [
    {
      c: () => i18n().tt_new_game,
      async h() {
        const achievements = sys_personal_achievement
          .list()
          .filter(
            (cid) => cid < 200 && era.get(`staticcflag:${cid}:随机招募`) > 0,
          );
        let ret = 0;
        if (achievements.length > 0) {
          era.printMultiColumns([
            {
              config: { content: i18n().new_game.rp_select },
              type: 'divider',
            },
            {
              accelerator: 0,
              config: {
                align: 'center',
                width: 6,
              },
              content: i18n().new_game.rp_select_me,
              type: 'button',
            },
            ...achievements.map((e) => ({
              accelerator: e,
              config: {
                align: 'center',
                buttonType: '',
                color: get_chara_color(e),
                width: 6,
              },
              content: `${get_display_name(era.get(`static:${e}:name`))}${check_edu_script(e) ? '*' : ''}`,
              type: 'button',
            })),
            {
              content: [
                '* ',
                i18n().new_game.rp_select_tip_1,
                { isBr: true },
                '** ',
                i18n().new_game.rp_select_tip_2,
                { isBr: true },
                '*** ',
                ...i18n().new_game.rp_select_tip_3(
                  join_list(
                    [
                      get_copyright_entry(201),
                      get_copyright_entry(204),
                      get_copyright_entry(301),
                      get_copyright_entry(304),
                      get_copyright_entry(400),
                    ],
                    i18n().ui_comma2,
                  ),
                ),
              ],
              type: 'text',
            },
          ]);
          ret = await era.input();
        }
        if (await new_game(ret)) {
          // GLOBALNAME:1 = 新手教学
          era.set('global:1', 1);
          await homepage();
        }
      },
    },
    {
      c: () => i18n().tt_load_game,
      async h() {
        if (await load_game()) {
          await homepage();
        }
      },
    },
    {
      c: () => i18n().tt_achieve,
      h: global_achievement.show.bind(global_achievement),
    },
    {
      c: () => i18n().tt_chara_achieve,
      async h() {
        era.printMultiColumns([
          {
            config: { content: i18n().title.ui_chara_achieve },
            type: 'divider',
          },
          ...era
            .getAllCharacters()
            .filter((cid) => cid > 0 && cid < first_child_id)
            .map((cid) => {
              const name = get_display_name(era.get(`static:${cid}:name`));
              let title = get_custom_check(cid).this.get_personal_achieve();
              const desc = sys_personal_achievement.describe(cid, title);
              title = __(`title.${title}`, i18n().title.undef);
              let t = sys_personal_achievement.get(cid);
              if (t === 1) {
                t = sys_personal_achievement.set(cid, 1);
              }
              return {
                config: {
                  align: 'center',
                  color: get_chara_color(cid),
                  width: 6,
                },
                content:
                  t > 0
                    ? i18n().title.template_got_tt(name, {
                        content: title,
                        fontWeight: 'bold',
                        title: i18n()
                          .title.title_template_got_tt.replace('%TITLE%', title)
                          .replace('%NAME%', name)
                          .replace('%DESC%', desc)
                          .replace('%TIME%', new Date(t).toLocaleString(lan())),
                      })
                    : [
                        {
                          content: i18n().title.ungot,
                          title: i18n()
                            .title.title_template_ungot_tt.replace(
                              '%NAME%',
                              name,
                            )
                            .replace('%TITLE%', title)
                            .replace('%DESC%', desc),
                        },
                      ],
                type: 'text',
              };
            }),
          { content: i18n().title.ui_tips, type: 'text' },
        ]);
        era.printButton(i18n().ui_back, 0, {
          align: 'center',
          hideInput: true,
        });
        await era.input();
      },
    },
    {
      c: () => i18n().tt_help,
      async h() {
        era.drawLine();
        for (const note of i18n()
          .note.common.filter(() => true)
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))) {
          say_by_passer_by(...note);
        }
        for (const cid of Object.keys(i18n().note).filter(
          (k) => !isNaN(Number(k)),
        )) {
          await era.waitAnyKey();
          for (const note of i18n().note[cid]) {
            era.print(
              [{ content: note[0], fontWeight: 'bold' }, '「', note[1], '」'],
              { color: get_chara_color(Number(cid)) },
            );
          }
        }
        era.printButton(i18n().ui_back, 0, {
          align: 'center',
          disableContinue: true,
          hideInput: true,
        });
        await era.input();
      },
    },
    {
      c: () => i18n().tt_copyrights,
      async h() {
        const copyrights = generate_copyrights();
        era.drawLine();
        let c_flag = true;
        era.setAlign('center');
        era.setHorizontalAlign('space-evenly');
        const bottom_columns = [
          { content: [{ isBr: true }], type: 'text' },
          {
            accelerator: 0,
            config: { align: 'center', disableWarning: true },
            content: i18n().ui_skip,
            type: 'button',
          },
        ];
        era.printMultiColumns([...copyrights[0], ...bottom_columns], {
          flush: true,
        });
        era.input({ hideInput: true }).then(() => (c_flag = false));
        for (let i = 2; i < copyrights.length && c_flag; ++i) {
          await era.delay(800);
          era.replaceInColRows(...copyrights.slice(0, i), bottom_columns);
        }
        if (c_flag) {
          await era.delay(800);
        }
        era.replaceInColRows(...copyrights, [
          { content: [{ isBr: true }], type: 'text' },
          {
            accelerator: 0,
            config: {
              align: 'center',
              disableContinue: true,
              disableWarning: true,
            },
            content: i18n().ui_back,
            type: 'button',
          },
        ]);
        await era.input({ hideInput: true });
        era.setHorizontalAlign('start');
        era.setAlign('left');
      },
    },
  ];
  const lan_list = lans();
  if (lan_list.length > 1) {
    buttons.push(
      {
        c: () => '语言/Language',
        async h() {
          era.drawLine();
          for (let i = 0; i < lan_list.length; ++i) {
            era.printButton(i18n(lan_list[i]).language, i + 1);
          }
          set_lan(era.set('global:3', lan_list[(await era.input()) - 1]));
          await era.saveGlobal();
          set_lan_for_value(lan());
        },
      },
      {
        c: () => 'Check Lan Lib',
        async h() {
          era.print('check if the library you input has all content:');
          const lan = await era.input();
          if (!lan_list.includes(lan)) {
            await era.printAndWait(`No such language! ${lan}`);
            return;
          }
          if (lan === 'zh-CN') {
            await era.printAndWait('Do not need to check the zh-CN library!');
            return;
          }

          function do_check(key_path, aim_lib, cn_lib) {
            for (const k in cn_lib) {
              const _path = `${k} <- ${key_path}`;
              if (!(k in aim_lib)) {
                era.print(`[WARN] miss: ${_path}`, { color: buff_colors[3] });
              } else if (aim_lib[k] === cn_lib[k]) {
                era.print(`[WARN] miss or equal: ${_path}`, {
                  color: buff_colors[1],
                });
              } else if (typeof cn_lib[k] !== typeof aim_lib[k]) {
                era.print(
                  `[ERROR] not same type: ${_path} (${typeof aim_lib[k]} -> ${typeof cn_lib[k]})`,
                  { color: el_danger_color },
                );
              } else if (
                typeof cn_lib[k] === 'object' &&
                !Array.isArray(cn_lib[k])
              ) {
                do_check(_path, aim_lib[k], cn_lib[k]);
              }
            }
            for (const k in aim_lib) {
              if (!(k in cn_lib)) {
                era.print(`[WARN] unused: ${k} <- ${key_path}`, {
                  color: adaptability_colors.at(-2),
                });
              }
            }
          }

          do_check(`${lan}-entrypoint`, i18n(lan), i18n('zh-CN'));
          era.printButton('End', 1);
          await era.input();
        },
      },
    );
  }
  while (flag_title) {
    await era.clear();
    era.setAlign('center');
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          { config: { width: 7 }, names: 'logo', type: 'image.whole' },
          { config: { width: 17 }, names: 'title', type: 'image.whole' },
          {
            content: i18n().tt_version_template.replace(
              '%VERSION%',
              versionName,
            ),
            type: 'text',
          },
          {
            content: [
              i18n().tt_version_resource,
              {
                content: res_version,
                url: 'https://umaera.gitgud.site/data/uma-resource/full.html',
              },
            ],
            type: 'text',
          },
          {
            content: join_list(author.split('|'), { isDivider: true }),
            type: 'text',
          },
        ],
        config: { offset: 6, verticalAlign: 'middle', width: 12 },
      },
      birth_list.length > 0
        ? [
            { type: 'divider' },
            {
              type: 'text',
              content: i18n().tt_birthday_notify(get_birth_names()),
            },
          ]
        : [],
      [
        { type: 'divider' },
        ...buttons.map(({ c }, i) => ({
          accelerator: i + 1,
          content: c(),
          type: 'button',
        })),
        { type: 'divider' },
        {
          config: { offset: 6, width: 4 },
          content: i18n().tt_links,
          type: 'text',
        },
        {
          config: { align: 'left', width: 12 },
          content: [
            {
              content: i18n().tt_link_release,
              url: site,
            },
            { isBr: true },
            {
              content: i18n().tt_link_desk_engine,
              url: 'https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: i18n().tt_link_app_engine,
              url: 'https://gitgud.io/umaera/engine/ere-app/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: i18n().tt_link_community,
              url: 'https://discord.gg/ake5SP3zUP',
            },
            { isBr: true },
            {
              content: i18n().tt_link_wiki,
              url: 'https://gitgud.io/umaera/erauma/-/wikis',
            },
          ],
          type: 'text',
        },
      ],
    );
    era.setAlign('left');
    await buttons[(await era.input()) - 1].h();
  }
};
