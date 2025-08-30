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
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');

const item_title_color =
  require('#/data/color-const').adaptability_colors.at(-1);
const { get_chara_color } = require('#/data/chara-colors');
const title_desc = require('#/data/desc/title-desc.json');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');
const { join_list } = require('#/utils/list-utils');

/**
 * @param {number} cid
 * @param {string} [_suffix]
 */
function get_copyright_entry(cid, _suffix) {
  const suffix = _suffix ? `（${_suffix}）` : '';
  return {
    color: get_chara_color(cid),
    content: `${era.get(`static:${cid}:name`)}${suffix}`,
    fontWeight: 'bold',
  };
}

module.exports = async () => {
  let flagTitle = true;
  sys_personal_achievement.init();
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
          '6. 在明确注明或保留游戏来源、不涉及任何商业目的和经济受益、并同样遵守本免责声明的情况下，允许他人基于本游戏进行修改或二次开发。该授权将直接赋予本游戏的所有玩家，不需要专门征求开发者的明确同意。',
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
  const line_copyrights = [
    [[get_copyright_entry(1, '招募')], 'wwm'],
    [[get_copyright_entry(3)], '天马闪光蹄'],
    [
      [
        get_copyright_entry(4),
        { isDivider: true },
        get_copyright_entry(46),
        '（招募）',
      ],
      '黑奴一号',
    ],
    [
      [
        get_copyright_entry(6),
        { isDivider: true },
        get_copyright_entry(7),
        { isDivider: true },
        get_copyright_entry(21),
      ],
      '雞雞',
    ],
    [[get_copyright_entry(13)], '伊兰'],
    [[get_copyright_entry(17)], '露娜俘虏'],
    [[get_copyright_entry(19)], '片手虾好评发售中！'],
    [[get_copyright_entry(24)], '黑奴二号'],
    [[get_copyright_entry(25)], ['Necroz', { isDivider: true }, 'Mr.E.']],
    [
      [
        get_copyright_entry(30),
        { isDivider: true },
        get_copyright_entry(85),
        { isDivider: true },
        get_copyright_entry(205),
      ],
      '梦露',
    ],
    [[get_copyright_entry(32)], '幽白書'],
    [[get_copyright_entry(35, '部分地下室')], '幽白書'],
    [[get_copyright_entry(36, '招募')], '幽白書'],
    [[get_copyright_entry(37)], '爱放箭的袁本初'],
    [[get_copyright_entry(47, '招募')], '某不思议的大嘴鸥'],
    [[get_copyright_entry(50, '招募')], '卡特曼'],
    [[get_copyright_entry(52)], '99'],
    [[get_copyright_entry(56)], 'ALEX'],
    [[get_copyright_entry(60)], '红红火火恍惚'],
    [[get_copyright_entry(64)], ['KUN', { isDivider: true }, 'Bottle']],
    [
      [get_copyright_entry(67)],
      [
        '某知名手游公司编剧',
        { isDivider: true },
        '黑奴二号',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
    [
      [get_copyright_entry(68)],
      [
        '小黑',
        { isDivider: true },
        '黑奴一号',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
    [[get_copyright_entry(71)], '洛洛'],
    [[get_copyright_entry(86, '部分地下室')], 'イーウィヤ'],
    [[get_copyright_entry(89, '招募、地下室')], '無奈'],
    [[get_copyright_entry(100)], '夕阳红艺术团小组长-赤红彗星红桃爵士Q先生'],
    [[get_copyright_entry(116, '招募')], 'AraP'],
    [[get_copyright_entry(119, '招募、地下室')], '幽白書'],
    [[get_copyright_entry(400)], '黑衣剑士-星爆气流斩准备就绪'],
    [
      [get_copyright_entry(303, '部分')],
      ['雞雞', { isDivider: true }, '幽白書'],
    ],
    [[get_copyright_entry(340, '招募')], 'O口口口口口'],
    [[get_copyright_entry(341, '招募')], 'フィンランド'],
    [[get_copyright_entry(342, '招募')], '黑衣剑士-星爆气流斩准备就绪'],
    [
      [
        '招募地文',
        { isDivider: true },
        '爱慕地文',
        { isBr: true },
        '新手教学',
        { isDivider: true },
        '地下室教学',
      ],
      ['雞雞', { isDivider: true }, '黑奴队长'],
    ],
    [
      ['日常地文', { isDivider: true }, '随机事件'],
      [
        '雞雞',
        { isDivider: true },
        '天马闪光蹄',
        { isDivider: true },
        'イーウィヤ',
        { isDivider: true },
        '幽白書',
        { isBr: true },
        'KUN',
        { isDivider: true },
        '阿格尼斯数码公司',
        { isDivider: true },
        '念来过倒要你',
        { isBr: true },
        'Mr.E.',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
    [
      '育成地文',
      [
        '雞雞',
        { isDivider: true },
        '天马闪光蹄',
        { isDivider: true },
        '幽白書',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
    [
      '调教地文',
      [
        'O口口口口口',
        { isDivider: true },
        '雞雞',
        { isDivider: true },
        '天马闪光蹄',
        { isBr: true },
        '黑衣剑士-星爆气流斩准备就绪',
        { isDivider: true },
        '幽白書',
        { isBr: true },
        'ALEX',
      ],
    ],
    ['地下室地文', ['露娜俘虏', { isDivider: true }, '黑奴队长']],
    ['特殊角色（临时）', '黑奴队长'],
    [
      '麦吉罗的呼唤',
      [
        'イーウィヤ',
        { isDivider: true },
        '99',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
  ];
  set_chara_ero_image();
  const { versionName, site, author } = era.get('gamebase');
  let buffer;

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
                content: '20250830',
                url: 'https://gitgud.io/umaera/erauma/-/archive/master/erauma-master.zip?path=res',
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
        {
          accelerator: 1,
          content: '开始新游戏',
          type: 'button',
        },
        {
          accelerator: 2,
          content: '加载存档',
          type: 'button',
        },
        {
          accelerator: 3,
          content: '角色成就',
          type: 'button',
        },
        {
          accelerator: 4,
          content: '帮助说明',
          type: 'button',
        },
        {
          accelerator: 5,
          content: '制作鸣谢',
          type: 'button',
        },
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

    const achievements = sys_personal_achievement.list().filter((e) => e < 200);
    let ret = await era.input();
    switch (ret) {
      case 1:
        ret = 0;
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
        break;
      case 2:
        if (await load_game()) {
          await homepage();
        }
        break;
      case 3:
        era.printMultiColumns([
          { config: { content: '角色成就获取情况' }, type: 'divider' },
          ...era
            .get('chara')
            .filter((e) => e && e < first_child_id)
            .map((e) => {
              const title = era.get(`staticcstr:${e}:称号`),
                desc = `在一次育成周期内完成了所有育成目标；同时，${(
                  title_desc[title] ||
                  '在一次育成周期内赢取了六次以上的G1比赛胜利。'
                ).substring(8)}`;
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
        await era.waitAnyKey();
        break;
      case 4:
        era.drawLine();
        for (const note of notes.common
          .filter(() => true)
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))) {
          say_by_passer_by(...note);
        }
        await era.waitAnyKey();
        for (const cid of Object.keys(notes).filter((k) => !isNaN(Number(k)))) {
          for (const note of notes[cid]) {
            era.print(
              [{ content: note[0], fontWeight: 'bold' }, '「', note[1], '」'],
              { color: get_chara_color(Number(cid)) },
            );
          }
          await era.waitAnyKey();
        }
        break;
      case 5:
        era.drawLine();
        era.setAlign('center');
        await era.printAndWait('鸣谢', {
          color: item_title_color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait('主催', {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait('雞雞');
        era.printMultiColumns([
          {
            config: {
              color: item_title_color,
              fontSize: '1.25rem',
              isParagraph: true,
              offset: 3,
              width: 9,
            },
            content: '架构',
            type: 'text',
          },
          {
            config: {
              color: item_title_color,
              fontSize: '1.25rem',
              isParagraph: true,
              width: 9,
            },
            content: '引擎',
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        era.printMultiColumns([
          {
            config: { offset: 3, width: 9 },
            content: '无名路人',
            type: 'text',
          },
          {
            config: { width: 9 },
            content: '黑奴队长',
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        era.printMultiColumns([
          {
            config: {
              color: item_title_color,
              fontSize: '1.25rem',
              isParagraph: true,
              offset: 3,
              width: 9,
            },
            content: '开发',
            type: 'text',
          },
          {
            config: {
              color: item_title_color,
              fontSize: '1.25rem',
              isParagraph: true,
              width: 9,
            },
            content: '美术',
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        era.printMultiColumns([
          {
            config: { offset: 3, width: 9 },
            content: [
              '无名路人',
              { isDivider: true },
              '色色',
              { isDivider: true },
              '黑奴队长',
            ],
            type: 'text',
          },
          {
            config: { width: 9 },
            content: [
              'kxmodel',
              { isDivider: true },
              '植物牙线',
              { isDivider: true },
              'フィンランド',
              { isBr: true },
              '提交bug',
              { isDivider: true },
              '洗发水',
            ],
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        await era.printAndWait('翻译参考', {
          align: 'center',
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait(
          [
            {
              content: "Trainers' Legend G 译文仓库",
              url: 'https://github.com/MinamiChiwa/Trainers-Legend-G-TRANS',
            },
            { isDivider: true },
            {
              content: '赛马娘中文 Wiki',
              url: 'https://wiki.biligame.com/umamusume/%E9%A6%96%E9%A1%B5',
            },
          ],
          {
            align: 'center',
          },
        );
        await era.printAndWait(
          [
            {
              color: item_title_color,
              content: '口上',
              fontSize: '1.25rem',
            },
            { isBr: true },
            '以负责角色ID最小值排序',
            { isBr: true },
            {
              content: '详细口上鸣谢',
              url: 'https://gitgud.io/umaera/erauma/-/wikis/COPYRIGHT',
            },
          ],
          {
            isParagraph: true,
          },
        );
        await era.waitAnyKey();

        buffer = [];
        for (const a of line_copyrights) {
          buffer.push([
            ...(a[0] instanceof Array
              ? a[0].map((e) => {
                  if (e instanceof Object) {
                    e.color ||= item_title_color;
                    e.fontSize = '1.125rem';
                    return e;
                  }
                  return {
                    color: item_title_color,
                    fontSize: '1.125rem',
                    content: e,
                  };
                })
              : [
                  {
                    color: item_title_color,
                    content: a[0],
                    fontSize: '1.125rem',
                  },
                ]),
            { isBr: true },
            ...(a[1] instanceof Array ? a[1] : [a[1]]),
          ]);
          if (buffer.length === 3) {
            era.printMultiColumns([
              ...buffer.map((e) => ({
                config: { width: 8 },
                content: e,
                type: 'text',
              })),
              { content: '\n', type: 'text' },
            ]);
            await era.waitAnyKey();
            buffer = [];
          }
        }
        if (buffer.length) {
          era.printMultiColumns(
            buffer.map((e) => ({
              config: { width: 8 },
              content: e,
              type: 'text',
            })),
            { horizontalAlign: 'center' },
          );
          await era.waitAnyKey();
        }
        await era.printAndWait('口上翻译', {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait([
          '黑奴队长',
          { isDivider: true },
          '黑奴一号',
          { isDivider: true },
          '黑奴二号',
        ]);
        await era.printAndWait('测试反馈', {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait([
          'Advocator',
          { isDivider: true },
          '清音林檎',
          { isDivider: true },
          '提交bug',
          { isDivider: true },
          '科比 · 布莱恩特',
        ]);
        await era.printAndWait('社区管理', {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait(['Advocator', { isDivider: true }, '雞雞']);
        await era.printAndWait('社区贡献', {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        });
        await era.printAndWait([
          '功德林今天的饭',
          { isDivider: true },
          'Manifold Paradox',
          { isDivider: true },
          'morrowind',
          { isDivider: true },
          'Great Sakiko',
          { isDivider: true },
          'odakasuya',
          { isDivider: true },
          'hsyzg1626',
          { isBr: true },
          'WindyWhisper',
          { isDivider: true },
          'wtmkks',
          { isDivider: true },
          'Что тиба,Я сао нима',
        ]);
        await era.printAndWait('特别鸣谢（笑）', {
          color: item_title_color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait('午马牧师妹 · 普瑞提达比', {
          fontSize: '1.25rem',
        });
        era.setAlign('left');
    }
  }
};
