const era = require('#/era-electron');

const item_title_color =
  require('#/data/color-const').adaptability_colors.at(-1);
const { get_chara_color } = require('#/data/chara-colors');

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

function generate_copyrights() {
  const line_copyrights = [
    [[get_copyright_entry(1, '招募')], 'wwm'],
    [[get_copyright_entry(2, '招募')], '牛蛙煲'],
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
    [[get_copyright_entry(74, '招募')], 'KUN'],
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
  const buffer = [];
  buffer.push(
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
        content: '鸣谢',
      },
    ],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        },
        content: '主催',
      },
    ],
    [{ content: '雞雞' }],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          offset: 3,
          width: 9,
        },
        content: '架构',
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 9,
        },
        content: '引擎',
      },
    ],
    [
      {
        config: { offset: 3, width: 9 },
        content: '无名路人',
      },
      {
        config: { width: 9 },
        content: '黑奴队长',
      },
    ],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          offset: 3,
          width: 9,
        },
        content: '开发',
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 9,
        },
        content: '美术',
      },
    ],
    [
      {
        config: { offset: 3, width: 9 },
        content: [
          '无名路人',
          { isDivider: true },
          '色色',
          { isDivider: true },
          '黑奴队长',
        ],
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
      },
    ],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        },
        content: '翻译参考',
      },
    ],
    [
      {
        content: [
          {
            content: "Trainers' Legend G 译文仓库",
            url: 'https://github.com/MinamiChiwa/Trainers-Legend-G-TRANS',
          },
          { isDivider: true },
          {
            content: '赛马娘中文 Wiki',
            url: 'https://wiki.biligame.com/umamusume/首页',
          },
        ],
      },
    ],
    [
      {
        config: { isParagraph: true },
        content: [
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
      },
    ],
  );
  buffer.push([]);
  let tmp = buffer.at(-1);
  for (const a of line_copyrights) {
    const title =
      a[0] instanceof Array
        ? a[0].map((e) => (e instanceof Object ? e : { content: e }))
        : [{ content: a[0] }];
    const names = a[1] instanceof Array ? a[1] : [a[1]];
    tmp.push({
      config: { width: 8 },
      content: [
        ...title.map((e) => ({
          color: item_title_color,
          fontSize: '1.125rem',
          ...e,
        })),
        { isBr: true },
        ...names,
        { isBr: 2 },
      ],
    });
    if (tmp.length === 3) {
      buffer.push([]);
      tmp = buffer.at(-1);
    }
  }
  buffer.push([
    {
      config: {
        color: item_title_color,
        fontSize: '1.25rem',
        isParagraph: true,
      },
      content: '口上翻译',
    },
  ]);
  buffer.push([
    {
      content: [
        '黑奴队长',
        { isDivider: true },
        '黑奴一号',
        { isDivider: true },
        '黑奴二号',
      ],
    },
  ]);
  buffer.push([
    {
      content: '测试反馈',
      config: {
        color: item_title_color,
        fontSize: '1.25rem',
        isParagraph: true,
      },
    },
  ]);
  buffer.push([
    {
      content: [
        'Advocator',
        { isDivider: true },
        '清音林檎',
        { isDivider: true },
        '提交bug',
        { isDivider: true },
        '科比 · 布莱恩特',
      ],
    },
  ]);
  buffer.push([
    {
      config: {
        color: item_title_color,
        fontSize: '1.25rem',
        isParagraph: true,
      },
      content: '社区管理',
    },
  ]);
  buffer.push([{ content: ['Advocator', { isDivider: true }, '雞雞'] }]);
  buffer.push([
    {
      config: {
        color: item_title_color,
        fontSize: '1.25rem',
        isParagraph: true,
      },
      content: '社区贡献',
    },
  ]);
  buffer.push([
    {
      content: [
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
      ],
    },
  ]);
  buffer.push([
    {
      config: {
        color: item_title_color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        isParagraph: true,
      },
      content: '特别鸣谢（笑）',
    },
  ]);
  buffer.push([
    {
      config: { fontSize: '1.25rem' },
      content: ['午马牧师妹 · 普瑞提达比'],
    },
  ]);
  buffer.forEach((l) => l.forEach((s) => (s.type = 'text')));
  return buffer;
}

module.exports = { get_copyright_entry, generate_copyrights };
