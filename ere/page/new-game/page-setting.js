const era = require('#/era-electron');

const difficulty_desc = [
  '三女神平等保佑着所有马娘 · 特雷森的马娘远超同侪 · 马娘憧憬着纯粹的爱',
  '三女神的目光并未投注这里 · 特雷森只是著名学园之一 · 马娘面临着现实的压力',
  '三女神关照着马娘，除了你的队伍 · 比赛中总有强敌出现 · 马娘将尝试各种方式排遣压力 · 特雷森对训练员严苛而残忍',
  '三女神关照着马娘，除了你和你的队伍 · 比赛中总有强敌出现 · 马娘讨厌你 · 特雷森对训练员严苛而残忍',
  '三女神格外关照你的队伍 · 特雷森的马娘远超同侪 · 马娘将不择手段地占有你 · 马娘的孩子们也会',
  '和鹅摸啦难度同 · 但是所有成员都是FUTA · 包括你 · 特雷森对训练员严苛而残忍',
  '三女神格外关照你的队伍 · 特雷森的马娘远超同侪 · 马娘可以以任意状态完赛（即使身上插满玩具）\n马娘一直在发情 · 马娘不能抵抗你的雷普，也无法伤害你',
  '和鹅摸啦难度同 · 但是所有成员都是男性 · 包括你（暂定） · 特雷森对训练员严苛而残忍',
];

module.exports = async () => {
  let flag_setting = true;
  let theme = 10;
  era.set('flag:马娘初始好感', 75);
  era.set('flag:回合声望惩罚', -1);
  era.set('flag:爱慕限制', 1);
  era.set('flag:道具影响', -25);
  era.set('flag:雷普抵抗', 1);

  while (flag_setting) {
    await era.clear();
    const enable_hurt = era.get('flag:可能伤病');
    const love_buff = era.get('flag:爱慕上升加成');
    const love_event = era.get('flag:爱慕限制');
    const love_punish = era.get('flag:回合爱慕惩罚');
    const child_love = era.get('flag:后代爱慕限制');
    const part_sensitive = era.get('flag:自带钝感');
    const rape = era.get('flag:雷普抵抗');
    const item_influence = era.get('flag:道具影响');

    era.drawLine({ content: '预设' });
    era.printMultiColumns(
      [
        '地上神国',
        '尘世间',
        '特雷普',
        '世界之敌',
        '鹅摸啦',
        '嗦多马',
        'Uma3rb',
        'G K D',
      ].map((e, i) => {
        return {
          accelerator: i,
          config: {
            buttonType: theme === i ? 'warning' : 'info',
            width: 3,
          },
          content: e,
          type: 'button',
        };
      }),
    );
    if (difficulty_desc[theme]) {
      era.print(difficulty_desc[theme], { align: 'center' });
    }

    era.drawLine({
      content: `游戏难度设置选项`,
    });
    const options = [
      [
        '训练难度',
        era.get('flag:训练难度'),
        [
          [25, '低'],
          [0, '正常'],
          [-25, '高'],
        ],
      ],
      [
        '训练效果',
        era.get('flag:训练加成'),
        [
          [25, '好'],
          [0, '正常'],
          [-25, '差'],
        ],
      ],
      [
        '比赛难度',
        era.get('flag:比赛难度'),
        [
          [-25, '低'],
          [0, '正常'],
          [25, '高'],
        ],
      ],
      [
        '马娘可能受伤',
        enable_hurt,
        [
          [0, '否'],
          [1, '是'],
        ],
      ],
      [
        '马娘初见好感',
        era.get('flag:马娘初始好感'),
        [
          [225, '热忱'],
          [150, '融洽'],
          [75, '冷淡'],
          [0, '怀疑'],
          [-100, '失望'],
        ],
      ],
      [
        '马娘初见爱慕',
        era.get('flag:马娘初始爱慕'),
        [
          [0, '平常'],
          [25, '暧昧'],
          [50, '爱欲'],
        ],
      ],
      [
        '好感提升难度',
        era.get('flag:好感上升加成'),
        [
          [50, '容易'],
          [0, '一般'],
          [-50, '困难'],
        ],
      ],
      [
        '爱慕提升难度',
        love_buff,
        [
          [0, '一般'],
          [50, '容易'],
        ],
      ],
      [
        '爱慕需要事件',
        love_event,
        [
          [1, '是'],
          [0, '否'],
        ],
      ],
      [
        '马娘的极端行为',
        era.get('flag:地下室限制'),
        [
          [0, '不会进行'],
          [1, '有可能'],
          [2, '尽量抑制'],
          [3, '积极采取'],
        ],
      ],
      [
        '声望的变化',
        era.get('flag:回合声望惩罚'),
        [
          [1, '与日俱增'],
          [0, '不增不减'],
          [-1, '逐渐衰减'],
        ],
      ],
      [
        '好感的变化',
        era.get('flag:回合好感惩罚'),
        [
          [10, '愈久愈和'],
          [0, '君子之交'],
          [-25, '相看相厌'],
        ],
      ],
      [
        '爱慕的变化',
        love_punish,
        [
          [0, '不敢肖想'],
          [1, '逐渐吸引'],
        ],
      ],
      [
        '不伦之恋',
        child_love,
        [
          [0, '不允许'],
          [1, '允许'],
        ],
      ],
      [
        '游戏结局条件',
        era.get('flag:游戏结束'),
        [
          [0, '不散筵席'],
          [1, '粉丝袭击'],
          [2, '金钱奴隶'],
          [3, '情爱囹圄'],
        ],
      ],
      [
        '角色性别',
        era.get('flag:角色性别'),
        [
          [0, '自然'],
          [10, '全员扶她'],
          [1, '全员男性'],
        ],
      ],
      [
        '对性刺激的感觉',
        part_sensitive,
        [
          [0, '正常'],
          [1, '不敏感'],
        ],
      ],
      [
        '天生特性',
        era.get('flag:自带特性'),
        [
          [1, '淫娃荡妇'],
          [0, '听天由命'],
          [-1, '冰清玉洁'],
        ],
      ],
      [
        '商店的经营者',
        era.get('flag:道具价格'),
        [
          [-50, '乐善好施'],
          [0, '循规蹈矩'],
          [100, '奸诈狡猾'],
        ],
      ],
      [
        '调教技能的因子消耗',
        era.get('flag:宝珠消耗量'),
        [
          [-50, '低'],
          [0, '一般'],
          [100, '高'],
        ],
      ],
      [
        '比赛能力的因子消耗',
        era.get('flag:因子消耗量'),
        [
          [-50, '低'],
          [0, '一般'],
          [100, '高'],
        ],
      ],
      [
        '角色的雷普抵抗',
        rape,
        [
          [0, '一推就倒'],
          [1, '激烈反抗'],
        ],
      ],
      [
        '带玩具上场比赛',
        item_influence,
        [
          [0, '流水冲锋'],
          [-25, '寸步难行'],
        ],
      ],
    ];
    const buffer = [];
    options.forEach((a, i) =>
      buffer.push(
        {
          type: 'text',
          content: a[0],
          config: { width: 4 },
        },
        ...a[2].map((o, j) => {
          return {
            accelerator: 100 + i * 10 + j,
            config: {
              buttonType: a[1] === o[0] ? 'warning' : 'info',
              width: 4,
            },
            content: o[1],
            type: 'button',
          };
        }),
        ...(i === options.length - 1
          ? [
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
            ]
          : [
              {
                config: { width: 24 - 4 * (a[2].length + 1) },
                content: '',
                type: 'text',
              },
            ]),
      ),
    );
    era.printMultiColumns(buffer);

    const ret = await era.input();
    switch (ret) {
      case 100:
        era.set('flag:训练难度', 25);
        break;
      case 101:
        era.set('flag:训练难度', 0);
        break;
      case 102:
        era.set('flag:训练难度', -25);
        break;
      case 110:
        era.set('flag:训练加成', 25);
        break;
      case 111:
        era.set('flag:训练加成', 0);
        break;
      case 112:
        era.set('flag:训练加成', -25);
        break;
      case 120:
        era.set('flag:比赛难度', -25);
        break;
      case 121:
        era.set('flag:比赛难度', 0);
        break;
      case 122:
        era.set('flag:比赛难度', 25);
        break;
      case 130:
      case 131:
        era.set('flag:可能伤病', ret - 130);
        break;
      case 140:
        era.set('flag:马娘初始好感', 225);
        break;
      case 141:
        era.set('flag:马娘初始好感', 150);
        break;
      case 142:
        era.set('flag:马娘初始好感', 75);
        break;
      case 143:
        era.set('flag:马娘初始好感', 0);
        break;
      case 144:
        era.set('flag:马娘初始好感', -100);
        break;
      case 150:
        era.set('flag:马娘初始爱慕', 0);
        break;
      case 151:
        era.set('flag:马娘初始爱慕', 25);
        break;
      case 152:
        era.set('flag:马娘初始爱慕', 50);
        break;
      case 160:
        era.set('flag:好感上升加成', 50);
        break;
      case 161:
        era.set('flag:好感上升加成', 0);
        break;
      case 162:
        era.set('flag:好感上升加成', -50);
        break;
      case 170:
      case 171:
        era.set('flag:爱慕上升加成', 50 * (ret - 170));
        break;
      case 180:
      case 181:
        era.set('flag:爱慕限制', 181 - ret);
        break;
      case 190:
        era.set('flag:睡奸限制', 0);
        era.set('flag:地下室限制', 0);
        break;
      case 191:
        era.set('flag:睡奸限制', 4);
        era.set('flag:地下室限制', 1);
        break;
      case 192:
        era.set('flag:睡奸限制', 5);
        era.set('flag:地下室限制', 2);
        break;
      case 193:
        era.set('flag:睡奸限制', 6);
        era.set('flag:地下室限制', 3);
        break;
      case 200:
        era.set('flag:回合声望惩罚', 1);
        break;
      case 201:
        era.set('flag:回合声望惩罚', 0);
        break;
      case 202:
        era.set('flag:回合声望惩罚', -1);
        break;
      case 210:
        era.set('flag:回合好感惩罚', 10);
        break;
      case 211:
        era.set('flag:回合好感惩罚', 0);
        break;
      case 212:
        era.set('flag:回合好感惩罚', -25);
        break;
      case 220:
      case 221:
        era.set('flag:回合爱慕惩罚', ret - 220);
        break;
      case 230:
      case 231:
        era.set('flag:后代爱慕限制', ret - 230);
        break;
      case 240:
      case 241:
      case 242:
      case 243:
        era.set('flag:游戏结束', ret - 240);
        break;
      case 250:
        era.set('flag:角色性别', 0);
        break;
      case 251:
        era.set('flag:角色性别', 10);
        break;
      case 252:
        era.set('flag:角色性别', 1);
        break;
      case 260:
      case 261:
        era.set('flag:自带钝感', ret - 260);
        break;
      case 270:
      case 271:
      case 272:
        era.set('flag:自带特性', 271 - ret);
        break;
      case 280:
        era.set('flag:道具价格', -50);
        break;
      case 281:
        era.set('flag:道具价格', 0);
        break;
      case 282:
        era.set('flag:道具价格', 100);
        break;
      case 290:
        era.set('flag:宝珠消耗量', -50);
        break;
      case 291:
        era.set('flag:宝珠消耗量', 0);
        break;
      case 292:
        era.set('flag:宝珠消耗量', 100);
        break;
      case 300:
        era.set('flag:因子消耗量', -50);
        break;
      case 301:
        era.set('flag:因子消耗量', 0);
        break;
      case 302:
        era.set('flag:因子消耗量', 100);
        break;
      case 310:
      case 311:
        era.set('flag:雷普抵抗', ret - 310);
        break;
      case 320:
      case 321:
        era.set('flag:道具影响', -25 * (ret - 320));
        break;
      case 998:
        flag_setting = false;
        break;
      case 999:
        return true;
      default:
        break;
    }
    theme = ret;
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
        era.set('flag:爱慕限制', 1);
        era.set('flag:睡奸限制', 0);
        era.set('flag:地下室限制', 0);
        era.set('flag:回合声望惩罚', 0);
        era.set('flag:回合好感惩罚', 10);
        era.set('flag:回合爱慕惩罚', 0);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 0);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', -50);
        era.set('flag:宝珠消耗量', -50);
        era.set('flag:因子消耗量', -50);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 0);
        era.set('flag:压力获取', 0);
        era.set('flag:不忠惩罚', 1);
        era.set('flag:读档对话', 0);
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
        era.set('flag:爱慕限制', 1);
        era.set('flag:睡奸限制', 0);
        era.set('flag:地下室限制', 0);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', 0);
        era.set('flag:回合爱慕惩罚', 0);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 0);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 0);
        era.set('flag:宝珠消耗量', 0);
        era.set('flag:因子消耗量', 0);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 0);
        era.set('flag:压力获取', 1);
        era.set('flag:不忠惩罚', 1);
        era.set('flag:读档对话', 0);
        break;
      case 2:
        era.set('flag:训练难度', -25);
        era.set('flag:训练加成', -25);
        era.set('flag:比赛难度', 25);
        era.set('flag:可能伤病', 1);
        era.set('flag:马娘初始好感', 75);
        era.set('flag:马娘初始爱慕', 0);
        era.set('flag:好感上升加成', 0);
        era.set('flag:爱慕上升加成', 50);
        era.set('flag:爱慕限制', 0);
        era.set('flag:睡奸限制', 6);
        era.set('flag:地下室限制', 3);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', -25);
        era.set('flag:回合爱慕惩罚', 0);
        era.set('flag:游戏结束', 1);
        era.set('flag:后代爱慕限制', 0);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 100);
        era.set('flag:宝珠消耗量', 100);
        era.set('flag:因子消耗量', 100);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 1);
        era.set('flag:压力获取', 1);
        era.set('flag:不忠惩罚', 0);
        era.set('flag:读档对话', 1);
        break;
      case 3:
        era.set('flag:训练难度', -25);
        era.set('flag:训练加成', -25);
        era.set('flag:比赛难度', 25);
        era.set('flag:可能伤病', 1);
        era.set('flag:马娘初始好感', -100);
        era.set('flag:马娘初始爱慕', 0);
        era.set('flag:好感上升加成', -50);
        era.set('flag:爱慕上升加成', 0);
        era.set('flag:爱慕限制', 1);
        era.set('flag:睡奸限制', 4);
        era.set('flag:地下室限制', 1);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', -25);
        era.set('flag:回合爱慕惩罚', 0);
        era.set('flag:游戏结束', 3);
        era.set('flag:后代爱慕限制', 0);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 1);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 100);
        era.set('flag:宝珠消耗量', 100);
        era.set('flag:因子消耗量', 100);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 1);
        era.set('flag:压力获取', 1);
        era.set('flag:不忠惩罚', 0);
        era.set('flag:读档对话', 1);
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
        era.set('flag:爱慕限制', 0);
        era.set('flag:睡奸限制', 4);
        era.set('flag:地下室限制', 2);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', -25);
        era.set('flag:回合爱慕惩罚', 1);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 1);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 0);
        era.set('flag:宝珠消耗量', 0);
        era.set('flag:因子消耗量', 0);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 0);
        era.set('flag:压力获取', 0);
        era.set('flag:不忠惩罚', 1);
        era.set('flag:读档对话', 1);
        break;
      case 5:
        era.set('flag:训练难度', 25);
        era.set('flag:训练加成', 25);
        era.set('flag:比赛难度', -25);
        era.set('flag:可能伤病', 0);
        era.set('flag:马娘初始好感', 225);
        era.set('flag:马娘初始爱慕', 50);
        era.set('flag:好感上升加成', -50);
        era.set('flag:爱慕上升加成', 50);
        era.set('flag:爱慕限制', 0);
        era.set('flag:睡奸限制', 4);
        era.set('flag:地下室限制', 2);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', -25);
        era.set('flag:回合爱慕惩罚', 1);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 1);
        era.set('flag:角色性别', 10);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 0);
        era.set('flag:宝珠消耗量', 0);
        era.set('flag:因子消耗量', 0);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 1);
        era.set('flag:压力获取', 0);
        era.set('flag:不忠惩罚', 1);
        era.set('flag:读档对话', 1);
        break;
      case 6:
        era.set('flag:训练难度', 25);
        era.set('flag:训练加成', 25);
        era.set('flag:比赛难度', -25);
        era.set('flag:可能伤病', 0);
        era.set('flag:马娘初始好感', 150);
        era.set('flag:马娘初始爱慕', 0);
        era.set('flag:好感上升加成', 0);
        era.set('flag:爱慕上升加成', 0);
        era.set('flag:爱慕限制', 1);
        era.set('flag:睡奸限制', 0);
        era.set('flag:地下室限制', 0);
        era.set('flag:回合声望惩罚', 0);
        era.set('flag:回合好感惩罚', 10);
        era.set('flag:回合爱慕惩罚', 0);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 0);
        era.set('flag:角色性别', 0);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 1);
        era.set('flag:道具价格', 0);
        era.set('flag:宝珠消耗量', -50);
        era.set('flag:因子消耗量', 0);
        era.set('flag:雷普抵抗', 0);
        era.set('flag:道具影响', 0);
        era.set('flag:声望不足替换', 0);
        era.set('flag:压力获取', 0);
        era.set('flag:不忠惩罚', 0);
        era.set('flag:读档对话', 0);
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
        era.set('flag:爱慕限制', 0);
        era.set('flag:睡奸限制', 6);
        era.set('flag:地下室限制', 2);
        era.set('flag:回合声望惩罚', -1);
        era.set('flag:回合好感惩罚', -25);
        era.set('flag:回合爱慕惩罚', 1);
        era.set('flag:游戏结束', 0);
        era.set('flag:后代爱慕限制', 1);
        era.set('flag:角色性别', 1);
        era.set('flag:自带钝感', 0);
        era.set('flag:自带特性', 0);
        era.set('flag:道具价格', 0);
        era.set('flag:宝珠消耗量', 0);
        era.set('flag:因子消耗量', 0);
        era.set('flag:雷普抵抗', 1);
        era.set('flag:道具影响', -25);
        era.set('flag:声望不足替换', 1);
        era.set('flag:压力获取', 0);
        era.set('flag:不忠惩罚', 1);
        era.set('flag:读档对话', 1);
        break;
      default:
        theme = 10;
        break;
    }
  }
  return false;
};
