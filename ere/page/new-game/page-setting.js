const era = require('#/era-electron');

const difficulties = [
  {
    n: '地上神国',
    d: [
      '三女神平等保佑着所有马娘',
      { isDivider: true },
      '特雷森的马娘远超同侪',
      { isDivider: true },
      '马娘憧憬着纯粹的爱',
    ],
  },
  {
    n: '尘世间',
    d: [
      '三女神的目光并未投注这里',
      { isDivider: true },
      '特雷森只是著名学园之一',
      { isDivider: true },
      '马娘面临着现实的压力',
    ],
  },
  {
    n: '特雷普',
    d: [
      '三女神关照着马娘，除了你的队伍',
      { isDivider: true },
      '比赛中总有强敌出现',
      { isDivider: true },
      '马娘将尝试各种方式排遣压力',
      { isDivider: true },
      '特雷森对训练员严苛而残忍',
    ],
  },
  {
    n: '世界之敌',
    d: [
      '三女神关照着马娘，除了你和你的队伍',
      { isDivider: true },
      '比赛中总有强敌出现',
      { isDivider: true },
      '马娘讨厌你',
      { isDivider: true },
      '特雷森对训练员严苛而残忍',
    ],
  },
  {
    n: '鹅摸啦',
    d: [
      '三女神格外关照你的队伍',
      { isDivider: true },
      '特雷森的马娘远超同侪',
      { isDivider: true },
      '马娘将不择手段地占有你',
      { isDivider: true },
      '马娘的孩子们也会',
    ],
  },
  {
    n: 'Uma3rb',
    d: [
      '三女神格外关照你的队伍',
      { isDivider: true },
      '特雷森的马娘远超同侪',
      { isDivider: true },
      // '马娘可以以任意状态完赛（即使身上插满玩具）',
      // { isDivider: true },
      '马娘一直在发情',
      { isDivider: true },
      '马娘不能抵抗你的雷普，也无法伤害你',
    ],
  },
  {
    n: '嗦多马',
    d: [
      '和鹅摸啦难度同',
      { isDivider: true },
      '但是所有成员都是FUTA',
      { isDivider: true },
      '包括你',
      { isDivider: true },
      '特雷森对训练员严苛而残忍',
    ],
  },
  {
    n: '幻想♂︎乡',
    d: [
      '和鹅摸啦难度同',
      { isDivider: true },
      '但是所有成员都是男性',
      { isDivider: true },
      '包括你（暂定）',
      { isDivider: true },
      '特雷森对训练员严苛而残忍',
    ],
  },
].map((e) => {
  e.d = e.d.map((es) => {
    if (!es.isDivider) {
      return {
        content: es,
        display: 'inline-block',
      };
    }
    return es;
  });
  return e;
});

/** @param {number} theme */
function set_from_theme(theme) {
  switch (theme) {
    case 0:
      era.set('flag:训练难度', 25);
      era.set('flag:训练加成', 25);
      era.set('flag:比赛难度', -25);
      era.set('flag:可能伤病', 0);
      era.set('flag:马娘初始好感', 150);
      era.set('flag:马娘初始爱慕', 0);
      era.set('flag:好感上升加成', 0);
      era.set('flag:爱慕上升加成', 0);
      era.set('flag:极端行为限制', 0);
      era.set('flag:回合声望惩罚', 0);
      era.set('flag:回合好感惩罚', 5);
      era.set('flag:回合爱慕惩罚', 0);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 0);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', -50);
      era.set('flag:宝珠消耗量', -50);
      era.set('flag:因子消耗量', -50);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 0);
      era.set('flag:压力获取', 0);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 0);
      era.set('flag:性技自主学习', 0);
      era.set('flag:马娘身高', 1);
      break;
    case 1:
      era.set('flag:训练难度', 0);
      era.set('flag:训练加成', 0);
      era.set('flag:比赛难度', 0);
      era.set('flag:可能伤病', 1);
      era.set('flag:马娘初始好感', 75);
      era.set('flag:马娘初始爱慕', 0);
      era.set('flag:好感上升加成', 0);
      era.set('flag:爱慕上升加成', 0);
      era.set('flag:极端行为限制', 0);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', 0);
      era.set('flag:回合爱慕惩罚', 0);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 0);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', 0);
      era.set('flag:宝珠消耗量', 0);
      era.set('flag:因子消耗量', 0);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 0);
      era.set('flag:压力获取', 1);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 0);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
      break;
    case 2:
      era.set('flag:训练难度', -25);
      era.set('flag:训练加成', -25);
      era.set('flag:比赛难度', 10);
      era.set('flag:可能伤病', 1);
      era.set('flag:马娘初始好感', 75);
      era.set('flag:马娘初始爱慕', 25);
      era.set('flag:好感上升加成', 0);
      era.set('flag:爱慕上升加成', 50);
      era.set('flag:极端行为限制', 3);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', -10);
      era.set('flag:回合爱慕惩罚', 0);
      era.set('flag:游戏结束', 1);
      era.set('flag:后代爱慕限制', 0);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', 100);
      era.set('flag:宝珠消耗量', 100);
      era.set('flag:因子消耗量', 100);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 1);
      era.set('flag:压力获取', 1);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 1);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
      break;
    case 3:
      era.set('flag:训练难度', -25);
      era.set('flag:训练加成', -25);
      era.set('flag:比赛难度', 10);
      era.set('flag:可能伤病', 1);
      era.set('flag:马娘初始好感', -100);
      era.set('flag:马娘初始爱慕', 0);
      era.set('flag:好感上升加成', -50);
      era.set('flag:爱慕上升加成', 0);
      era.set('flag:极端行为限制', 1);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', -10);
      era.set('flag:回合爱慕惩罚', 0);
      era.set('flag:游戏结束', 3);
      era.set('flag:后代爱慕限制', 0);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', -4);
      era.set('flag:道具价格', 100);
      era.set('flag:宝珠消耗量', 100);
      era.set('flag:因子消耗量', 100);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 1);
      era.set('flag:压力获取', 1);
      era.set('flag:不忠惩罚', 0);
      era.set('flag:读档对话', 1);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
      break;
    case 4:
      era.set('flag:训练难度', 25);
      era.set('flag:训练加成', 25);
      era.set('flag:比赛难度', -25);
      era.set('flag:可能伤病', 0);
      era.set('flag:马娘初始好感', 225);
      era.set('flag:马娘初始爱慕', 50);
      era.set('flag:好感上升加成', -50);
      era.set('flag:爱慕上升加成', 50);
      era.set('flag:极端行为限制', 3);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', -10);
      era.set('flag:回合爱慕惩罚', 1);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 1);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', 0);
      era.set('flag:宝珠消耗量', 0);
      era.set('flag:因子消耗量', 0);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 0);
      era.set('flag:压力获取', 0);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 1);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
      break;
    case 5:
      era.set('flag:训练难度', 25);
      era.set('flag:训练加成', 25);
      era.set('flag:比赛难度', -25);
      era.set('flag:可能伤病', 0);
      era.set('flag:马娘初始好感', 150);
      era.set('flag:马娘初始爱慕', 0);
      era.set('flag:好感上升加成', 0);
      era.set('flag:爱慕上升加成', 0);
      era.set('flag:极端行为限制', 0);
      era.set('flag:回合声望惩罚', 0);
      era.set('flag:回合好感惩罚', 5);
      era.set('flag:回合爱慕惩罚', 0);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 0);
      era.set('flag:角色性别', 0);
      era.set('flag:自带特性', 1);
      era.set('flag:道具价格', 0);
      era.set('flag:宝珠消耗量', -50);
      era.set('flag:因子消耗量', 0);
      era.set('flag:强奸抵抗', 0);
      era.set('flag:道具影响', 0);
      era.set('flag:声望不足替换', 0);
      era.set('flag:压力获取', 0);
      era.set('flag:不忠惩罚', 0);
      era.set('flag:读档对话', 0);
      era.set('flag:性技自主学习', 0);
      era.set('flag:马娘身高', 1);
      break;
    case 6:
      era.set('flag:训练难度', 25);
      era.set('flag:训练加成', 25);
      era.set('flag:比赛难度', -25);
      era.set('flag:可能伤病', 0);
      era.set('flag:马娘初始好感', 225);
      era.set('flag:马娘初始爱慕', 50);
      era.set('flag:好感上升加成', -50);
      era.set('flag:爱慕上升加成', 50);
      era.set('flag:极端行为限制', 2);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', -10);
      era.set('flag:回合爱慕惩罚', 1);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 1);
      era.set('flag:角色性别', 10);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', 0);
      era.set('flag:宝珠消耗量', 0);
      era.set('flag:因子消耗量', 0);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 1);
      era.set('flag:压力获取', 0);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 1);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
      break;
    case 7:
      era.set('flag:训练难度', 25);
      era.set('flag:训练加成', 25);
      era.set('flag:比赛难度', -25);
      era.set('flag:可能伤病', 0);
      era.set('flag:马娘初始好感', 225);
      era.set('flag:马娘初始爱慕', 50);
      era.set('flag:好感上升加成', -50);
      era.set('flag:爱慕上升加成', 50);
      era.set('flag:极端行为限制', 2);
      era.set('flag:回合声望惩罚', -1);
      era.set('flag:回合好感惩罚', -10);
      era.set('flag:回合爱慕惩罚', 1);
      era.set('flag:游戏结束', 0);
      era.set('flag:后代爱慕限制', 1);
      era.set('flag:角色性别', 1);
      era.set('flag:自带特性', 0);
      era.set('flag:道具价格', 0);
      era.set('flag:宝珠消耗量', 0);
      era.set('flag:因子消耗量', 0);
      era.set('flag:强奸抵抗', 1);
      era.set('flag:道具影响', -25);
      era.set('flag:声望不足替换', 1);
      era.set('flag:压力获取', 0);
      era.set('flag:不忠惩罚', 1);
      era.set('flag:读档对话', 1);
      era.set('flag:性技自主学习', 1);
      era.set('flag:马娘身高', 1);
  }
  if (era.get('cflag:0:模版角色') > 0) {
    era.set('flag:声望不足替换', 0);
  }
}

async function page_settings() {
  let flag_default = true,
    flag_setting = false;
  let theme;
  era.set('flag:新手教学', Number(!era.get('global:新手教学')));
  set_from_theme((theme = 1));

  while (flag_default) {
    await era.clear();
    const buffer = [];
    buffer.push({ config: { content: '游戏模式' }, type: 'divider' });
    difficulties.slice(0, 4).forEach((e, i) => {
      buffer.push(
        {
          accelerator: i,
          config: { width: 3 },
          content: e.n,
          type: 'button',
        },
        {
          config: { width: 21 },
          content: e.d,
          type: 'text',
        },
      );
    });
    buffer.push(
      {
        accelerator: 98,
        config: { buttonType: era.get('flag:新手教学') ? 'warning' : 'info' },
        content: '显示新手教学',
        type: 'button',
      },
      {
        content: '\n* 初次游玩强烈建议从【地上神国】或【尘世间】模式开始游戏！',
        type: 'text',
      },
    );
    buffer.push(
      {
        accelerator: 10,
        config: { align: 'center', width: 12 },
        content: '逐项调整',
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'center', width: 12 },
        content: '返回标题',
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);
    const ret = await era.input();
    switch (ret) {
      case 10:
        flag_default = false;
        flag_setting = true;
        break;
      case 98:
        era.set('flag:新手教学', 1 - era.get('flag:新手教学'));
        break;
      case 99:
        return true;
      default:
        set_from_theme(ret);
        return false;
    }
  }

  await era.clear();
  let selected_setting = undefined,
    flag_print = true;
  while (flag_setting) {
    const buffer = [];
    buffer.push([
      { config: { content: '预设' }, type: 'divider' },
      ...difficulties.map((e, i) => {
        return {
          accelerator: i,
          config: {
            buttonType: theme === i ? 'warning' : 'info',
            width: 3,
          },
          content: e.n,
          type: 'button',
        };
      }),
    ]);
    if (difficulties[theme]) {
      buffer[0].push({
        config: { align: 'center' },
        content: difficulties[theme].d,
        type: 'text',
      });
    }

    const options = [
      {
        key: '训练难度',
        options: [
          { l: '低', v: 25 },
          { l: '中', v: 0 },
          { l: '高', v: -25 },
        ],
      },
      {
        key: '训练加成',
        label: '训练效果',
        options: [
          { l: '好', v: 25 },
          { l: '正常', v: 0 },
          { l: '差', v: -25 },
        ],
      },
      {
        key: '比赛难度',
        options: [
          { l: '低', v: -25 },
          { l: '正常', v: 0 },
          { l: '高', v: 10 },
        ],
      },
      {
        key: '可能伤病',
        label: '马娘可能受伤',
        options: [
          { l: '否', v: 0 },
          { l: '是', v: 1 },
        ],
      },
      {
        key: '压力获取',
        label: '马娘承受压力',
        options: [
          { l: '否', v: 0 },
          { l: '是', v: 1 },
        ],
      },
      {
        key: '道具价格',
        label: '商店的经营者',
        options: [
          { l: '乐善好施', v: -50 },
          { l: '循规蹈矩', v: 0 },
          { l: '奸诈狡猾', v: 100 },
        ],
      },
      {
        key: '宝珠消耗量',
        label: '调教技能的因子消耗',
        options: [
          { l: '低', v: -50 },
          { l: '一般', v: 0 },
          { l: '高', v: 100 },
        ],
      },
      {
        key: '因子消耗量',
        label: '比赛能力的因子消耗',
        options: [
          { l: '低', v: -50 },
          { l: '一般', v: 0 },
          { l: '高', v: 100 },
        ],
      },
      {
        label: '游戏结局条件',
        key: '游戏结束',
        options: [
          { l: '不散筵席', v: 0 },
          { l: '+粉丝袭击', v: 1 },
          { l: '+金钱奴隶', v: 2 },
          { l: '+情爱囹圄', v: 3 },
        ],
        tip: (v) =>
          [
            '你的训练员生涯将一直持续，直到声望归零',
            '马娘的生涯成绩将决定你的生死……即使是她对你有一点点的厌恶也会导致育成结束成为你人生的结束',
            '你对马娘的债务也会决定你的命运，请负起成年人的责任，好好管理自己的资产',
            '无望之爱会结出什么样的果实？现在你也有机会在爱意构筑的囚牢中结束自己的人生',
          ][v],
      },
      {
        key: '回合声望惩罚',
        label: '声望的变化',
        options: [
          { l: '与日俱增', v: 1 },
          { l: '不增不减', v: 0 },
          { l: '逐渐衰减', v: -1 },
        ],
        tip: (v) =>
          [
            '你的声望会缓慢增长',
            '你的声望如无其他因素不会变化',
            '你的声望会逐渐衰减',
          ][v],
      },
      {
        disabled: era.get('cflag:0:模版角色') > 0,
        key: '声望不足替换',
        label: '身败名裂时',
        options: [
          { l: '黯然退场', v: 0 },
          { l: '黑暗交易', v: 1 },
        ],
        tip: (v) =>
          [
            '声望归零了，一切都结束了……游戏系统，将我们带回标题',
            '想在声望归零后继续下去？即使以你的一切作为代价？',
          ][v],
      },
      {
        key: '角色性别',
        options: [
          { l: '群芳环绕', v: 0 },
          { l: '阳刚爆表', v: 1 },
          { l: '阴阳并济', v: 10 },
          { l: '现实投射', v: 99 },
        ],
        tip: (v) =>
          [
            '被美女包围了！',
            '挥洒着青春汗水的帅哥们……',
            '各位女……女士？',
            '耳饰的位置表示着什么呢？',
          ][v],
      },
      {
        key: '马娘初始好感',
        label: '马娘初见好感',
        options: [
          { l: '热忱', v: 225 },
          { l: '融洽', v: 150 },
          { l: '冷淡', v: 75 },
          { l: '怀疑', v: 0 },
          { l: '失望', v: -100 },
        ],
      },
      {
        key: '好感上升加成',
        label: '好感提升难度',
        options: [
          { l: '容易', v: 50 },
          { l: '一般', v: 0 },
          { l: '困难', v: -50 },
        ],
      },
      {
        key: '回合好感惩罚',
        label: '好感的变化',
        options: [
          { l: '愈久愈和', v: 5 },
          { l: '君子之交', v: 0 },
          { l: '相看相厌', v: -10 },
        ],
        tip: (v) =>
          [
            '马娘们对你的好感与日俱增',
            '马娘们对你的好感不会受时间影响',
            '马娘们会逐渐对你产生厌恶',
          ][v],
      },
      {
        key: '马娘初始爱慕',
        label: '马娘初见爱慕',
        options: [
          { l: '平常', v: 0 },
          { l: '暧昧', v: 25 },
          { l: '爱欲', v: 50 },
        ],
      },
      {
        key: '爱慕上升加成',
        label: '爱慕提升难度',
        options: [
          { l: '一般', v: 0 },
          { l: '容易', v: 50 },
        ],
      },
      {
        key: '回合爱慕惩罚',
        label: '爱慕的变化',
        options: [
          { l: '不敢肖想', v: 0 },
          { l: '逐渐吸引', v: 1 },
        ],
        tip: (v) =>
          [
            '只有主动的行为才能让马娘爱上你',
            '马娘们会逐渐被你吸引，直到依存……即使你什么都不做',
          ][v],
      },
      {
        label: '对出轨的看法',
        key: '不忠惩罚',
        options: [
          { l: '心胸开阔', v: 0 },
          { l: '不可原谅', v: 1 },
        ],
        tip: (v) => ['马娘只在乎和你在一起的点点滴滴', '小心独占力……'][v],
      },
      {
        key: '极端行为限制',
        label: '马娘的极端行为',
        options: [
          { l: '不会进行', v: 0 },
          { l: '有可能', v: 1 },
          { l: '尽量抑制', v: 2 },
          { l: '积极采取', v: 3 },
        ],
        tip: (v) =>
          [
            '马娘不会对你做什么，很安全',
            '马娘在求而不得的时候有很低的可能夜袭或者绑架你',
            '马娘会尽量抑制夜袭和绑架的欲望……但是很勉强',
            '在你看不见的地方，马娘正一边扭曲地笑着一边准备着什么……',
          ][v],
      },
      {
        label: '天生特性',
        key: '自带特性',
        options: [
          { l: '淫娃荡妇', v: 1 },
          { l: '听天由命', v: 0 },
          { l: '冰清玉洁', v: -1 },
          { l: '与性无缘', v: -4 },
        ],
        tip: (v) =>
          [
            '以我所见，皆为母马',
            '每个人都独一无二',
            '马娘的身体完美无暇，找不到丝毫弱点',
            '极难让她们感到快感',
          ][v],
      },
      {
        key: '性技自主学习',
        label: '角色对性技的学习',
        options: [
          { l: '兴趣缺缺', v: 0 },
          { l: '主动摸索', v: 1 },
        ],
      },
      {
        key: '强奸抵抗',
        label: '角色的强奸抵抗',
        options: [
          { l: '一推就倒', v: 0 },
          { l: '激烈反抗', v: 1 },
        ],
      },
      {
        key: '后代爱慕限制',
        label: '不伦之恋',
        options: [
          { l: '不允许', v: 0 },
          { l: '允许', v: 1 },
        ],
        tip: (v) =>
          [
            '孩子们对你只有孺慕之情……除非你主动打破',
            '孩子们对你只有孺慕之情……吗？',
          ][v],
      },
      {
        key: '马娘身高',
        label: '马娘的身高',
        options: [
          { l: '这么矮的妈妈', v: 0 },
          { l: '一般就好', v: 1 },
          { l: '我想被支配！', v: 2 },
        ],
        tip: (v) =>
          ['被萝莉环绕的天国……', '马娘身高将自然分布', '巨大马娘不可战胜！'][v],
      },
      {
        key: '新手教学',
        label: '引导教学',
        options: [
          { l: '我已完全掌握！', v: 0 },
          { l: '第一次的时候显示一下吧', v: 1 },
        ],
      },
      // {
      //   label: '带玩具上场比赛',
      //   key: '道具影响',
      //   options: [
      //     { l: '流水冲锋', v: 0 },
      //     { l: '寸步难行', v: -25 },
      //   ],
      //   tip: (v) =>
      //     [
      //       '某观众「我还是第一次见有人能一边性高潮一边还能跑那么快的」',
      //       '某观众「翻着白眼跑得歪歪斜斜，跑道都湿了——这可是有马纪念，能不能尊重点！」',
      //     ][v],
      // },
    ];
    buffer.push(
      [
        {
          config: {
            content: `游戏选项`,
          },
          type: 'divider',
        },
      ],
      [],
    );
    let val_index;
    options.forEach((e, i) => {
      const val = era.get(`flag:${e.key}`);
      val_index = e.options.findIndex((o) => o.v === val);
      buffer.at(-1).push(
        {
          type: 'text',
          content: e.label || e.key,
          config: { width: 4 },
        },
        ...e.options.map((o, j) => {
          return {
            accelerator: 100 + i * 10 + j,
            config: {
              disabled: !!e.disabled,
              buttonType: val === o.v ? 'warning' : 'info',
              width: 4,
            },
            content: o.l,
            type: 'button',
          };
        }),
      );
      if (i < options.length - 1) {
        buffer.at(-1).push({
          config: { width: 20, offset: 4 },
          content:
            e.tip && (selected_setting === undefined || i === selected_setting)
              ? e.tip(val_index)
              : '',
          type: 'text',
        });
      }
    });
    buffer.at(-1).push(
      {
        accelerator: 998,
        config: { align: 'right', offset: 4, width: 4 },
        content: '进入游戏',
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 4 },
        content: '返回标题',
        type: 'button',
      },
    );
    if (
      selected_setting === undefined ||
      selected_setting === options.length - 1
    ) {
      buffer.push([
        {
          config: { width: 20, offset: 4 },
          content: options.at(-1)['tip']
            ? options.at(-1)['tip'](val_index)
            : '',
          type: 'text',
        },
      ]);
    }
    (flag_print ? era.printInColRows : era.replaceInColRows)(...buffer);
    flag_print = false;

    const ret = await era.input({ hideInput: true });
    switch (ret) {
      case 998:
        flag_setting = false;
        break;
      case 999:
        return true;
      default:
        if (ret >= 100) {
          const selected_index = ret % 10;
          selected_setting = (ret - 100 - selected_index) / 10;
          era.set(
            `flag:${options[selected_setting].key}`,
            options[selected_setting].options[selected_index].v,
          );
        } else {
          selected_setting = undefined;
        }
        break;
    }
    set_from_theme((theme = ret));
  }
  return false;
}

module.exports = page_settings;
