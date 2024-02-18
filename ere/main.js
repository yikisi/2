const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { say_by_passer_by } = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const notes = require('#/data/notes.json');

module.exports = async () => {
  let flagTitle = true;
  const { title, gameCode } = era.get('gamebase');
  era.setTitle(`${title} v0.5 @ ${gameCode}`);
  sys_personal_achievement.init();

  era.print('免责声明', {
    align: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    isParagraph: true,
  });
  era.print(
    [
      '1. 本游戏仅为开发者自娱自乐及代码练习所用，开发它是因为开发者趣味低下，思想低俗所致，无任何经济收益和利益驱动。',
      { isBr: true },
      '2. 本游戏含有大量的R18色情内容，内容中可能会出现的有：多P、调教、轻度SM、非合意性行为、近亲相奸等，不会出现的有：强制NTR、重度SM、血腥、R18G等。',
      { isBr: true },
      '3. 本游戏在设计理念和游戏内容上缝合了大量era与其他各类作品，仅适合era系列玩家或文字黄油爱好者进行游玩，不适合普通玩家游玩，特别是严格禁止未成年人游玩。',
      { isBr: true },
      '4. 本游戏所使用的素材资源包括开发者自制、互联网收集与协力者提供，开发者与协力者来自于不同的国家和民族，彼此之间也不存在经济关系。',
      { isBr: true },
      '5. 本游戏目前没有官方的公开发布地址，且因为游戏本身的性质，禁止在任何未成年人可以接触到的公开场合展示或传播本游戏，更禁止任何人在任何商业活动（贩卖/附送等）和公开活动（直播等）中使用本游戏。',
      { isBr: true },
      '6. 在明确注明或保留游戏来源、不涉及任何商业目的和经济受益、并同样遵守本免责声明的情况下，允许他人基于本游戏进行修改或二次开发。该授权将直接赋予本游戏的所有玩家，不需要专门征求开发者的明确同意。',
      { isBr: true },
      '7. 本声明的解释权归开发者所有，且在版本更新中声明内容可能有所变更，请以最新版本为准。',
      { isBr: true },
      '8. 基于以上叠了这么多层buff，建议有大胆想法的人请现在关掉窗口并立刻删除游戏，只要不删就默认你已经理解并遵守该声明，在不遵守的情况下出现的任何事故和法律责任都和开发者没有任何关系。',
    ],
    {
      offset: 4,
      width: 16,
    },
  );
  era.printButton('我读完并理解了以上8条，我对自己负责，我不删，我要玩。', 1, {
    offset: 4,
    width: 16,
  });
  era.printButton('分男女搭配！不玩了！', 2, { offset: 4, width: 16 });
  if ((await era.input()) === 2) {
    process.exit(0);
  }

  while (flagTitle) {
    await era.clear();
    era.printMultiColumns([
      { type: 'divider' },
      {
        config: { width: 6, offset: 9 },
        names: 'logo',
        type: 'image.whole',
      },
      {
        config: { align: 'center' },
        content: ['雞雞', { isDivider: true }, '无名路人'],
        type: 'text',
      },
      { type: 'divider' },
      {
        accelerator: 0,
        config: { align: 'center' },
        content: '开始新游戏',
        type: 'button',
      },
      {
        accelerator: 1,
        config: { align: 'center' },
        content: '加载存档',
        type: 'button',
      },
      {
        accelerator: 2,
        config: { align: 'center' },
        content: '角色成就',
        type: 'button',
      },
      {
        accelerator: 3,
        config: { align: 'center' },
        content: '帮助说明',
        type: 'button',
      },
      {
        accelerator: 4,
        config: { align: 'center', disabled: true },
        content: '制作鸣谢',
        type: 'button',
      },
      { type: 'divider' },
      { config: { offset: 6, width: 4 }, content: '相关链接：', type: 'text' },
      {
        config: { width: 8 },
        content: [
          {
            content: 'EraUma游戏发布页（需要登录gitgud.io）',
            url: 'https://gitgud.io/SLeader/erauma/-/releases/permalink/latest',
          },
          { isBr: true },
          {
            content: 'EraElectron引擎发布页',
            url: 'https://gitgud.io/SLeader/era-electron/-/releases/permalink/latest',
          },
        ],
        type: 'text',
      },
    ]);

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
            .filter((e) => e)
            .map((e) => {
              const color = get_chara_color(e);
              if (sys_personal_achievement.get(e)) {
                return {
                  config: {
                    align: 'center',
                    color,
                    width: 6,
                  },
                  content: [
                    era.get(`static:${e}:name`),
                    '：',
                    {
                      content: era.get(`staticcstr:${e}:称号`),
                      fontWeight: 'bold',
                    },
                  ],
                  type: 'text',
                };
              } else {
                return {
                  config: { align: 'center', color, width: 6 },
                  content: '？？？',
                  type: 'text',
                };
              }
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
        for (const note of notes.common.sort((a, b) =>
          a.title > b.title ? 1 : -1,
        )) {
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
    }
  }
};
