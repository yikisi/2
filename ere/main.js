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

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { join_list } = require('#/utils/list-utils');

const { generate_copyrights, get_copyright_entry } = require('#/copyright');
const { get_chara_color } = require('#/data/chara-colors');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');
const { res_version } = require('#/versions');

module.exports = async () => {
  let flagTitle = true;
  CharaTalk.me = new CharaTalk(0);

  era.printMultiColumns(
    [
      {
        config: {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
        content: '免责声明',
        type: 'text',
      },
      {
        content: [
          '1. 本游戏仅为开发者自娱自乐及代码练习所用，开发它是因为开发者趣味低下，思想低俗所致，无任何经济收益和利益驱动。',
          { isBr: true },
          '2. 本游戏含有大量的 R18 色情内容，内容中可能会出现的有：多P、调教、轻度 SM、非合意性行为、近亲相奸等，不会出现的有：强制 NTR、重度 SM、血腥、R18G 等。',
          { isBr: true },
          '3. 本游戏在设计理念和游戏内容上缝合了大量 era 与其他各类作品，仅适合 era 系列玩家或文字黄油爱好者进行游玩，不适合普通玩家游玩，特别是严格禁止未成年人游玩。',
          { isBr: true },
          '4. 本游戏所使用的素材资源包括开发者自制、互联网收集与协力者提供，开发者与协力者来自于不同的世界、种族、国家和民族，彼此之间也不存在经济关系。',
          { isBr: true },
          '5. 本游戏的唯一指定官方发布地址即',
          { content: '托管仓库', url: 'https://gitgud.io/umaera/erauma' },
          '；因为游戏本身的性质，禁止在任何未成年人可以接触到的公开场合展示或传播本游戏，更禁止任何人在任何商业活动（贩卖/附送等）和公开活动（直播等）中使用本游戏。',
          { isBr: true },
          '6. 在明确注明或保留游戏来源、不涉及任何商业目的和经济受益、并同样遵守本免责声明、',
          {
            content: 'GPL 2.0 only 开源协议',
            fontWeight: 'bold',
            url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
          },
          '与',
          {
            content: '口上创作协议',
            fontWeight: 'bold',
            url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
          },
          '的情况下，允许他人基于本游戏进行修改或二次开发（衍生产物称为魔改版）。该授权将直接赋予本游戏的所有玩家，不需要专门征求开发者的明确同意，但需要在游戏标题和标题界面等处标明是魔改版并与原版做出明显区分。',
          { isBr: true },
          '7. 本声明的解释权归开发者所有，且在版本更新中声明内容可能有所变更，请以最新版本为准。',
          { isBr: true },
          '8. 基于以上叠了这么多层 buff，建议有大胆想法的人请现在关掉窗口并立刻删除游戏，只要不删就默认你已经理解并遵守该声明，在不遵守的情况下出现的任何事故和法律责任都和开发者没有任何关系。',
        ],
        type: 'text',
      },
      {
        accelerator: 1,
        content: '我读完并理解了以上 8 条，我对自己负责，我不删，我要玩。',
        type: 'button',
      },
      {
        accelerator: 2,
        content: '分男女搭配！不玩了！',
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
  const birthday = [];
  era.getAllCharacters().forEach((e) => {
    if (
      e > 0 &&
      e < 1000 &&
      era.get(`staticcflag:${e}:种族`) > 0 &&
      era.get(`staticcflag:${e}:出生月份`) === real_month &&
      era.get(`staticcflag:${e}:出生日期`) === real_date
    ) {
      if (birthday.length > 0) {
        birthday.push('，');
      }
      birthday.push({
        color: get_chara_color(e),
        content: era.get(`static:${e}:name`),
        fontWeight: 'bold',
      });
    }
  });
  const b_index = birthday.findLastIndex((e) => e === '，');
  birthday[b_index] = ' 和 ';

  const copyrights = generate_copyrights();
  const buttons = [
    {
      c: '开始新游戏',
      async h() {
        const achievements = sys_personal_achievement
          .list()
          .filter((e) => e < 200);
        let ret;
        if (achievements.length > 0) {
          era.drawLine();
          era.printButton('做我自己', 1);
          era.printButton('扮演角色', 2);
          if ((await era.input()) === 1) {
            ret = 0;
          } else {
            era.printMultiColumns([
              { config: { content: '选择要扮演的角色' }, type: 'divider' },
              {
                accelerator: 0,
                config: {
                  align: 'center',
                  width: 6,
                },
                content: '我自己',
                type: 'button',
              },
              ...achievements.map((e) => {
                return {
                  accelerator: e,
                  config: {
                    align: 'center',
                    buttonType: '',
                    color: get_chara_color(e),
                    width: 6,
                  },
                  content: `${era.get(`static:${e}:name`)}${
                    check_rec_script(e) && check_edu_script(e) ? '*' : ''
                  }`,
                  type: 'button',
                };
              }),
              {
                content: [
                  '* 带有',
                  { content: '*', fontWeight: 'bold' },
                  '号后缀的角色有口上',
                  { isBr: true },
                  '** 只有完成了个人成就的角色才能进行扮演',
                  { isBr: true },
                  '*** ',
                  get_copyright_entry(201),
                  '、',
                  get_copyright_entry(204),
                  '、',
                  get_copyright_entry(301),
                  '、',
                  get_copyright_entry(304),
                  '、',
                  get_copyright_entry(400),
                  ' 等特殊角色无法扮演',
                ],
                type: 'text',
              },
            ]);
            ret = await era.input();
          }
        }
        if (await new_game(ret)) {
          era.set('global:新手教学', 1);
          await homepage();
        }
      },
    },
    {
      c: '加载存档',
      async h() {
        if (await load_game()) {
          await homepage();
        }
      },
    },
    {
      c: '游戏成就',
      async h() {
        era.drawLine({ content: '游戏成就获取情况' });
        await global_achievement.show();
      },
    },
    {
      c: '角色成就',
      async h() {
        era.printMultiColumns([
          { config: { content: '角色成就获取情况' }, type: 'divider' },
          ...era
            .get('chara')
            .filter((e) => e && e < first_child_id)
            .map((e) => {
              const title = era.get(`staticcstr:${e}:称号`),
                desc = sys_personal_achievement.describe(e, title);
              return {
                config: {
                  align: 'center',
                  color: get_chara_color(e),
                  width: 6,
                },
                content: sys_personal_achievement.get(e)
                  ? [
                      era.get(`static:${e}:name`),
                      '：',
                      {
                        content: title,
                        fontWeight: 'bold',
                        title: `${title}：${desc}`,
                      },
                    ]
                  : [
                      {
                        content: '？？？',
                        title: `${era.get(`static:${e}:name`)}：${era.get(`staticcstr:${e}:称号`)}\n${desc}`,
                      },
                    ],
                type: 'text',
              };
            }),
          {
            content:
              '* 同时完成角色育成目标与最高称号条件即可获得该角色的成就\n** 获得成就后，所有存档招募该角色时初始好感+300，欧洲马娘在一开始就可以招募',
            type: 'text',
          },
        ]);
        era.printButton('返回', 0, { align: 'center', hideInput: true });
        await era.input();
      },
    },
    {
      c: '帮助说明',
      async h() {
        era.drawLine();
        for (const note of notes.common
          .filter(() => true)
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))) {
          say_by_passer_by(...note);
        }
        for (const cid of Object.keys(notes).filter((k) => !isNaN(Number(k)))) {
          await era.waitAnyKey();
          for (const note of notes[cid]) {
            era.print(
              [{ content: note[0], fontWeight: 'bold' }, '「', note[1], '」'],
              { color: get_chara_color(Number(cid)) },
            );
          }
        }
        era.printButton('返回', 0, { align: 'center', hideInput: true });
        await era.input();
      },
    },
    {
      c: '制作鸣谢',
      async h() {
        era.drawLine();
        let c_flag = true;
        era.setAlign('center');
        era.setHorizontalAlign('space-evenly');
        era.printMultiColumns(copyrights[0], { flush: true });
        era.input({ hideInput: true }).then(() => (c_flag = false));
        for (let i = 2; i < copyrights.length && c_flag; ++i) {
          await era.delay(800);
          era.replaceInColRows(...copyrights.slice(0, i), [
            { content: '\n', type: 'text' },
            {
              accelerator: 0,
              config: { align: 'center', disableWarning: true },
              content: '跳过',
              type: 'button',
            },
          ]);
        }
        if (c_flag) {
          await era.delay(800);
        }
        era.replaceInColRows(...copyrights, [
          { content: '\n', type: 'text' },
          {
            accelerator: 0,
            config: {
              align: 'center',
              disableContinue: true,
              disableWarning: true,
            },
            content: '返回标题',
            type: 'button',
          },
        ]);
        await era.input({ hideInput: true });
        era.setHorizontalAlign('start');
        era.setAlign('left');
      },
    },
  ];
  while (flagTitle) {
    await era.clear();
    era.setAlign('center');
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          { config: { width: 7 }, names: 'logo', type: 'image.whole' },
          { config: { width: 17 }, names: 'title', type: 'image.whole' },
          {
            content: ['版本号：v', versionName],
            type: 'text',
          },
          {
            content: [
              '适配资源包版本：',
              {
                content: res_version,
                url: `https://gitgud.io/umaera/data/uma-resource/-/archive/${res_version}/uma-resource-${res_version}.zip`,
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
      birthday.length > 0
        ? [
            { type: 'divider' },
            { type: 'text', content: ['今天是 ', ...birthday, ' 的诞生日'] },
          ]
        : [],
      [
        { type: 'divider' },
        ...buttons.map(({ c }, i) => ({
          accelerator: i + 1,
          content: c,
          type: 'button',
        })),
        { type: 'divider' },
        {
          config: { offset: 6, width: 4 },
          content: '相关链接：',
          type: 'text',
        },
        {
          config: { align: 'left', width: 12 },
          content: [
            {
              content: 'EraUma 游戏发布页',
              url: site,
            },
            { isBr: true },
            {
              content: 'EraElectron 引擎（PC 版）发布页',
              url: 'https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'ere.app 引擎（安卓版）发布页',
              url: 'https://gitgud.io/umaera/engine/ere-app/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'ERA 特雷森学园（Discord 社区）',
              url: 'https://discord.gg/ake5SP3zUP',
            },
            { isBr: true },
            {
              content: 'Wiki（使用说明/游戏设定/口上写作指引……）',
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
