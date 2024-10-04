const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { say_by_passer_by } = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors } = require('#/data/color-const');
const notes = require('#/data/notes.json');
const { first_child_id, set_chara_ero_image } = require('#/data/other-const');

const item_title_color = adaptability_colors.at(-1);

module.exports = async () => {
  let flagTitle = true;
  sys_personal_achievement.init();

  era.printMultiColumns([
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
      config: {
        offset: 4,
        width: 16,
      },
      content: [
        '1. 本游戏仅为开发者自娱自乐及代码练习所用，开发它是因为开发者趣味低下，思想低俗所致，无任何经济收益和利益驱动。',
        { isBr: true },
        '2. 本游戏含有大量的R18色情内容，内容中可能会出现的有：多P、调教、轻度SM、非合意性行为、近亲相奸等，不会出现的有：强制NTR、重度SM、血腥、R18G等。',
        { isBr: true },
        '3. 本游戏在设计理念和游戏内容上缝合了大量era与其他各类作品，仅适合era系列玩家或文字黄油爱好者进行游玩，不适合普通玩家游玩，特别是严格禁止未成年人游玩。',
        { isBr: true },
        '4. 本游戏所使用的素材资源包括开发者自制、互联网收集与协力者提供，开发者与协力者来自于不同的世界、种族、国家和民族，彼此之间也不存在经济关系。',
        { isBr: true },
        '5. 本游戏目前没有官方的公开发布地址，且因为游戏本身的性质，禁止在任何未成年人可以接触到的公开场合展示或传播本游戏，更禁止任何人在任何商业活动（贩卖/附送等）和公开活动（直播等）中使用本游戏。',
        { isBr: true },
        '6. 在明确注明或保留游戏来源、不涉及任何商业目的和经济受益、并同样遵守本免责声明的情况下，允许他人基于本游戏进行修改或二次开发。该授权将直接赋予本游戏的所有玩家，不需要专门征求开发者的明确同意。',
        { isBr: true },
        '7. 本声明的解释权归开发者所有，且在版本更新中声明内容可能有所变更，请以最新版本为准。',
        { isBr: true },
        '8. 基于以上叠了这么多层buff，建议有大胆想法的人请现在关掉窗口并立刻删除游戏，只要不删就默认你已经理解并遵守该声明，在不遵守的情况下出现的任何事故和法律责任都和开发者没有任何关系。',
      ],
      type: 'text',
    },
    {
      accelerator: 1,
      config: {
        offset: 4,
        width: 16,
      },
      content: '我读完并理解了以上8条，我对自己负责，我不删，我要玩。',
      type: 'button',
    },
    {
      accelerator: 2,
      config: {
        offset: 4,
        width: 16,
      },
      content: '分男女搭配！不玩了！',
      type: 'button',
    },
  ]);
  if ((await era.input()) === 2) {
    era.quit();
  }
  const line_copyrights = [
    [
      [{ color: get_chara_color(3), content: era.get('static:3:name') }],
      '天马闪光蹄',
    ],
    [
      [
        { color: get_chara_color(4), content: era.get('static:4:name') },
        '、',
        {
          color: get_chara_color(46),
          content: era.get('static:46:name'),
        },
      ],
      '黑奴一号',
    ],
    [
      [{ color: get_chara_color(7), content: era.get('static:7:name') }],
      '雞雞',
    ],
    [
      [
        {
          color: get_chara_color(17),
          content: era.get('static:17:name'),
        },
      ],
      '露娜俘虏',
    ],
    [
      [
        {
          color: get_chara_color(19),
          content: era.get('static:19:name'),
        },
      ],
      '片手虾好评发售中！',
    ],
    [
      [
        {
          color: get_chara_color(24),
          content: era.get('static:24:name'),
        },
      ],
      '黑奴二号',
    ],
    [
      [
        {
          color: get_chara_color(25),
          content: era.get('static:25:name'),
        },
      ],
      'Necroz',
    ],
    [
      [
        {
          color: get_chara_color(30),
          content: era.get('static:30:name'),
        },
        '、',
        {
          color: get_chara_color(85),
          content: era.get('static:85:name'),
        },
        '、',
        {
          color: get_chara_color(205),
          content: era.get('static:205:name'),
        },
      ],
      '梦露',
    ],
    [
      [
        {
          color: get_chara_color(32),
          content: era.get('static:32:name'),
        },
      ],
      '幽白書',
    ],
    [
      [
        {
          color: get_chara_color(35),
          content: `${era.get('static:35:name')}（部分地下室）`,
        },
      ],
      '幽白書',
    ],
    [
      [
        {
          color: get_chara_color(37),
          content: era.get('static:37:name'),
        },
      ],
      '爱放箭的袁本初',
    ],
    [
      [
        {
          color: get_chara_color(52),
          content: era.get('static:52:name'),
        },
      ],
      '99',
    ],
    [
      [
        {
          color: get_chara_color(56),
          content: era.get('static:56:name'),
        },
      ],
      'ALEX',
    ],
    [
      [
        {
          color: get_chara_color(60),
          content: era.get('static:60:name'),
        },
      ],
      '红红火火恍惚',
    ],
    [
      [
        {
          color: get_chara_color(67),
          content: era.get('static:67:name'),
        },
      ],
      [
        '某知名手游公司编剧',
        { isDivider: true },
        '黑奴二号',
        { isDivider: true },
        '无名黑奴',
      ],
    ],
    [
      [
        {
          color: get_chara_color(68),
          content: era.get('static:68:name'),
        },
      ],
      [
        '小黑',
        { isDivider: true },
        '黑奴一号',
        { isDivider: true },
        '无名黑奴',
      ],
    ],
    [
      [
        {
          color: get_chara_color(86),
          content: `${era.get('static:86:name')}（部分地下室）`,
        },
      ],
      'イーウィヤ',
    ],
    [
      [
        {
          color: get_chara_color(89),
          content: `${era.get('static:89:name')}（地下室）`,
        },
      ],
      '無奈',
    ],
    [
      [
        {
          color: get_chara_color(100),
          content: era.get('static:100:name'),
        },
      ],
      '夕阳红艺术团小组长-赤红彗星红桃爵士Q先生',
    ],
    [
      [
        {
          color: get_chara_color(119),
          content: `${era.get('static:119:name')}（地下室）`,
        },
      ],
      '幽白書',
    ],
    [
      [
        {
          color: get_chara_color(303),
          content: `${era.get('static:303:name')}（部分）`,
        },
      ],
      ['雞雞', { isDivider: true }, '幽白書'],
    ],
    [
      [
        {
          color: get_chara_color(340),
          content: `${era.get('static:340:name')}（招募）`,
        },
      ],
      'O口口口口口',
    ],
    [
      [
        {
          color: get_chara_color(341),
          content: `${era.get('static:341:name')}（招募）`,
        },
      ],
      'フィンランド',
    ],
    [
      [
        {
          color: get_chara_color(342),
          content: `${era.get('static:342:name')}（招募）`,
        },
      ],
      '黑衣剑士-星爆气流斩准备就绪',
    ],
    [
      [
        {
          color: get_chara_color(400),
          content: era.get('static:400:name'),
        },
      ],
      '黑衣剑士-星爆气流斩准备就绪',
    ],
    [
      ['招募、日常、爱慕地文', { isBr: true }, '教学、地下室教学'],
      ['雞雞', { isDivider: true }, '无名黑奴'],
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
        '无名黑奴',
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
      ],
    ],
    ['地下室地文', ['露娜俘虏', { isDivider: true }, '无名黑奴']],
    ['随机事件', ['雞雞', { isDivider: true }, 'イーウィヤ']],
    ['特殊角色（临时）', '无名黑奴'],
  ];
  set_chara_ero_image();
  let buffer,
    version = era.get('gamebase').version / 1000;
  if (version % 1 === 0) {
    version = version.toFixed(1);
  }

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
            content: `版本号：v${version}`,
            type: 'text',
          },
        ],
        config: { offset: 6, verticalAlign: 'middle', width: 12 },
      },
      [
        {
          content: [
            '雞雞',
            { isDivider: true },
            '无名路人',
            { isDivider: true },
            '无名黑奴',
          ],
          type: 'text',
        },
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
          config: { align: 'left', width: 8 },
          content: [
            {
              content: 'EraUma游戏发布页',
              url: 'https://gitgud.io/umaera/erauma/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'EraElectron引擎发布页',
              url: 'https://gitgud.io/umaera/era-electron/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'ERA特雷森学园（Discord社区）',
              url: 'https://discord.gg/ake5SP3zUP',
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
                let flag_script;
                try {
                  require(`#/event/rec/rec-${e}`);
                  flag_script = true;
                } catch (_) {
                  flag_script = false;
                }
                return {
                  accelerator: e,
                  config: {
                    align: 'center',
                    buttonType: '',
                    color: get_chara_color(e),
                    width: 6,
                  },
                  content: `${era.get(`static:${e}:name`)}${
                    flag_script ? '*' : ''
                  }`,
                  type: 'button',
                };
              }),
              {
                content: [
                  '* 带有',
                  { content: '*', fontWeight: 'bold' },
                  '号后缀的角色有专属口上',
                  { isBr: true },
                  '** 只有完成了个人成就的角色才能进行扮演',
                  { isBr: true },
                  '*** ',
                  {
                    color: get_chara_color(201),
                    content: '快乐米可',
                    fontWeight: 'bold',
                  },
                  '、',
                  {
                    color: get_chara_color(204),
                    content: '望族',
                    fontWeight: 'bold',
                  },
                  '、',
                  {
                    color: get_chara_color(301),
                    content: '骏川缰绳',
                    fontWeight: 'bold',
                  },
                  '、',
                  {
                    color: get_chara_color(304),
                    content: '桐生院葵',
                    fontWeight: 'bold',
                  },
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
                        content: era.get(`staticcstr:${e}:称号`),
                        fontWeight: 'bold',
                      },
                    ]
                  : '？？？',
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
          .sort((a, b) => (a.title > b.title ? 1 : -1))) {
          say_by_passer_by(note.title, note.content);
        }
        await era.waitAnyKey();
        for (const id of Object.keys(notes)
          .filter((k) => k !== 'common')
          .map(Number)
          .sort((a, b) => a - b)) {
          for (const note of notes[id]) {
            era.print(
              [
                { content: note.title, fontWeight: 'bold' },
                '「',
                note.content,
                '」',
              ],
              { color: get_chara_color(Number(id)) },
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
            content: '无名黑奴',
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
              '无名黑奴',
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
              { isDivider: true },
              '提交bug',
            ],
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
            content: '技能翻译参考',
            type: 'text',
          },
          {
            config: {
              color: item_title_color,
              fontSize: '1.25rem',
              isParagraph: true,
              width: 9,
            },
            content: '安卓移植',
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        era.printMultiColumns([
          {
            config: { offset: 3, width: 9 },
            content: [
              {
                content: "Trainers' Legend G 译文仓库",
                url: 'https://github.com/MinamiChiwa/Trainers-Legend-G-TRANS',
              },
            ],
            type: 'text',
          },
          {
            config: { width: 9 },
            content: '星尘之路',
            type: 'text',
          },
        ]);
        await era.waitAnyKey();
        await era.printAndWait(
          [
            {
              color: item_title_color,
              content: '口上',
              fontSize: '1.25rem',
            },
            { isBr: true },
            '以负责角色ID最小值排序',
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
          '无名黑奴',
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
