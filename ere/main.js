const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { say_by_passer_by } = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const { el_warning_color } = require('#/data/color-const');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');

module.exports = async () => {
  let flagTitle = true;
  sys_personal_achievement.init();

  era.printMultiColumns([
    {
      config: {
        align: 'center',
        fontSize: '24px',
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
  let buffer;

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
            content: `版本号：v${era.get('gamebase').version / 1000}`,
            type: 'text',
          },
        ],
        config: { offset: 6, verticalAlign: 'middle', width: 12 },
      },
      [
        {
          content: ['雞雞', { isDivider: true }, '无名路人'],
          type: 'text',
        },
        { type: 'divider' },
        {
          accelerator: 0,
          content: '开始新游戏',
          type: 'button',
        },
        {
          accelerator: 1,
          content: '加载存档',
          type: 'button',
        },
        {
          accelerator: 2,
          content: '角色成就',
          type: 'button',
        },
        {
          accelerator: 3,
          content: '帮助说明',
          type: 'button',
        },
        {
          accelerator: 4,
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
              content: 'EraUma游戏发布页（需要登录gitgud.io）',
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
              url: 'https://discord.gg/CCsqKXJJjd',
            },
          ],
          type: 'text',
        },
      ],
    );
    era.setAlign('left');

    let ret = await era.input();
    switch (ret) {
      case 0:
        if (await new_game()) {
          await homepage();
        }
        break;
      case 1:
        if (await load_game()) {
          await homepage();
        }
        break;
      case 2:
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
      case 3:
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
            say_by_passer_by(note.title, note.content);
          }
          await era.waitAnyKey();
        }
        break;
      case 4:
        era.drawLine();
        era.setAlign('center');
        await era.printAndWait('鸣谢', {
          color: el_warning_color,
          fontSize: '24px',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait('主催', {
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });
        await era.printAndWait('雞雞');
        era.printMultiColumns([
          {
            config: {
              color: el_warning_color,
              fontSize: '20px',
              isParagraph: true,
              offset: 3,
              width: 9,
            },
            content: '架构',
            type: 'text',
          },
          {
            config: {
              color: el_warning_color,
              fontSize: '20px',
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
        await era.printAndWait('开发', {
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });
        await era.printAndWait([
          '无名路人',
          { isDivider: true },
          '色色',
          { isDivider: true },
          '黑奴队长',
        ]);
        await era.printAndWait('美术', {
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });
        await era.printAndWait([
          'kxmodel',
          { isDivider: true },
          '植物牙线',
          { isDivider: true },
          'フィンランド',
          { isDivider: true },
          '提交bug',
        ]);
        await era.printAndWait('口上', {
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });

        buffer = [];
        for (const a of [
          [
            '招募、日常、爱慕、育成地文',
            [
              '雞雞',
              { isDivider: true },
              '黑奴队长',
              { isDivider: true },
              '天马闪光蹄',
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
              '鬼鼠',
            ],
          ],
          [[{ color: get_chara_color(1), content: '特别周' }], 'wwm'],
          [[{ color: get_chara_color(3), content: '东海帝王' }], '天马闪光蹄'],
          [
            [
              { color: get_chara_color(4), content: '丸善斯基' },
              '、',
              { color: get_chara_color(46), content: '醒目飞鹰' },
            ],
            '黑奴一号',
          ],
          [[{ color: get_chara_color(7), content: '黄金船' }], '雞雞'],
          [[{ color: get_chara_color(17), content: '鲁铎象征' }], '露娜俘虏'],
          [
            [{ color: get_chara_color(19), content: '爱丽数码' }],
            '片手虾好评发售中！',
          ],
          [[{ color: get_chara_color(24), content: '摩耶重炮' }], '黑奴二号'],
          [[{ color: get_chara_color(25), content: '曼城茶座' }], 'Necroz'],
          [
            [
              {
                color: get_chara_color(30),
                content: '米浴',
              },
              '、',
              {
                color: get_chara_color(85),
                content: '第一红宝石',
              },
              '、',
              {
                color: get_chara_color(205),
                content: '卓芙',
              },
            ],
            '梦露',
          ],
          [[{ color: get_chara_color(32), content: '爱丽速子' }], '鬼鼠'],
          [
            [{ color: get_chara_color(37), content: '荣进闪耀' }],
            '爱放箭的袁本初',
          ],
          [[{ color: get_chara_color(52), content: '春乌拉拉' }], '99'],
          [
            [{ color: get_chara_color(60), content: '优秀素质' }],
            '红红火火恍惚',
          ],
          [
            [{ color: get_chara_color(67), content: '里见光钻' }],
            [
              '某知名手游公司编剧',
              { isDivider: true },
              '黑奴二号',
              { isDivider: true },
              '黑奴队长',
            ],
          ],
          [
            [{ color: get_chara_color(68), content: '北部玄驹' }],
            [
              '小黑',
              { isDivider: true },
              '黑奴一号',
              { isDivider: true },
              '黑奴队长',
            ],
          ],
          [
            [{ color: get_chara_color(100), content: '奇锐骏' }],
            '夕阳红艺术团小组长-赤红彗星红桃爵士Q先生',
          ],
          [
            [{ color: get_chara_color(400), content: '周日宁静' }],
            '黑衣剑士-星爆气流斩准备就绪',
          ],
          ['特殊角色（临时）', '黑奴队长'],
        ]) {
          buffer.push([
            ...(a[0] instanceof Array
              ? a[0].map((e) => {
                  e.fontSize = '18px';
                  return e;
                })
              : [{ color: el_warning_color, content: a[0], fontSize: '18px' }]),
            { isBr: true },
            ...(a[1] instanceof Array ? a[1] : [a[1]]),
          ]);
          if (buffer.length === 2) {
            era.printMultiColumns([
              {
                config: {
                  offset: 3,
                  width: 9,
                },
                content: buffer[0],
                type: 'text',
              },
              {
                config: { width: 9 },
                content: buffer[1],
                type: 'text',
              },
              { content: '\n', type: 'text' },
            ]);
            await era.waitAnyKey();
            buffer = [];
          }
        }
        buffer.length && (await era.printAndWait(buffer[0]));
        await era.printAndWait('口上翻译', {
          color: el_warning_color,
          fontSize: '20px',
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
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });
        await era.printAndWait([
          'Advocator',
          { isDivider: true },
          '清音林檎',
          { isDivider: true },
          '提交bug',
          { isDivider: true },
          '科比·布莱恩特',
        ]);
        await era.printAndWait('社区管理', {
          color: el_warning_color,
          fontSize: '20px',
          isParagraph: true,
        });
        await era.printAndWait(['Advocator', { isDivider: true }, '雞雞']);
        await era.printAndWait('特别鸣谢（笑）', {
          color: el_warning_color,
          fontSize: '24px',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait('午马牧师妹·普瑞提达比', {
          fontSize: '20px',
        });
        era.setAlign('left');
    }
  }
};
