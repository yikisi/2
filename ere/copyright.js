const era = require('#/era-electron');

const get_display_name = require('#/utils/calc-display-name');

const item_title_color =
  require('#/data/color-const').adaptability_colors.at(-1);
const { get_chara_color } = require('#/data/chara-colors');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {string} [_suffix]
 */
function get_copyright_entry(cid, _suffix) {
  const suffix = _suffix
    ? i18n().cr_kojo_suffix_template.replace('%SUFFIX%', _suffix)
    : '';
  return {
    color: get_chara_color(cid),
    content: `${get_display_name(era.get(`static:${cid}:name`))}${suffix}`,
    display: 'inline-block',
    fontWeight: 'bold',
  };
}

function generate_copyrights() {
  const buffer = [];

  function push_copyrights(contents, cols_in_row = 3) {
    buffer.push([]);
    let tmp = buffer.at(-1);
    for (const a of contents) {
      const title = Array.isArray(a[0])
        ? a[0].map((e) => (typeof e === 'object' ? e : { content: e }))
        : [{ content: a[0] }];
      const names = Array.isArray(a[1]) ? a[1] : [a[1]];
      tmp.push({
        config: { width: 24 / cols_in_row },
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
      if (tmp.length === cols_in_row) {
        buffer.push([]);
        tmp = buffer.at(-1);
      }
    }
  }

  const kojo_copyrights = [
    [
      [get_copyright_entry(1, i18n().timon.others.star_drew_bt_filter_kojo_r)],
      'wwm',
    ],
    [
      [get_copyright_entry(2), { isDivider: true }, get_copyright_entry(61)],
      '牛蛙煲',
    ],
    [[get_copyright_entry(3)], '天马闪光蹄'],
    [
      [get_copyright_entry(4), { isDivider: true }, get_copyright_entry(46)],
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
    [[get_copyright_entry(20)], 'Wolke'],
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
    [[get_copyright_entry(35, i18n().cr_kojo_suffix_part)], '幽白書'],
    [
      [get_copyright_entry(36, i18n().timon.others.star_drew_bt_filter_kojo_r)],
      '幽白書',
    ],
    [[get_copyright_entry(37)], '爱放箭的袁本初'],
    [[get_copyright_entry(44)], '阿格尼斯数码公司'],
    [
      [get_copyright_entry(47, i18n().timon.others.star_drew_bt_filter_kojo_r)],
      '某不思议的大嘴鸥',
    ],
    [[get_copyright_entry(50)], '卡特曼'],
    [[get_copyright_entry(52)], '99'],
    [[get_copyright_entry(56)], 'ALEX'],
    [[get_copyright_entry(60)], '红红火火恍惚'],
    [[get_copyright_entry(64)], ['KUN', { isDivider: true }, 'Bottle']],
    [
      [get_copyright_entry(67, i18n().cr_kojo_suffix_temporary)],
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
    [[get_copyright_entry(74)], 'KUN'],
    [[get_copyright_entry(86, i18n().cr_kojo_suffix_part)], 'イーウィヤ'],
    [
      [
        get_copyright_entry(
          89,
          i18n().timon.others.star_drew_bt_filter_kojo_r +
            i18n().ui_comma2 +
            i18n().timon.others.star_drew_bt_filter_kojo_b,
        ),
      ],
      '無奈',
    ],
    [[get_copyright_entry(100)], '夕阳红艺术团小组长-赤红彗星红桃爵士Q先生'],
    [
      [
        get_copyright_entry(
          116,
          i18n().timon.others.star_drew_bt_filter_kojo_r,
        ),
      ],
      'AraP',
    ],
    [
      [
        get_copyright_entry(
          119,
          i18n().timon.others.star_drew_bt_filter_kojo_r +
            i18n().ui_comma2 +
            i18n().timon.others.star_drew_bt_filter_kojo_b,
        ),
      ],
      '幽白書',
    ],
    [[get_copyright_entry(400)], '黑衣剑士-星爆气流斩准备就绪'],
    // [[get_copyright_entry(304)], '魔法亚瑟'],
    [
      [get_copyright_entry(303, i18n().cr_kojo_suffix_part)],
      ['雞雞', { isDivider: true }, '幽白書'],
    ],
    [
      [
        get_copyright_entry(
          340,
          i18n().timon.others.star_drew_bt_filter_kojo_r,
        ),
      ],
      'O口口口口口',
    ],
    [
      [
        get_copyright_entry(
          341,
          i18n().timon.others.star_drew_bt_filter_kojo_r,
        ),
      ],
      'フィンランド',
    ],
    [
      [
        get_copyright_entry(
          342,
          i18n().timon.others.star_drew_bt_filter_kojo_r,
        ),
      ],
      '黑衣剑士-星爆气流斩准备就绪',
    ],
    [
      [
        i18n().cr_timon_recruit,
        { isDivider: true },
        i18n().cr_timon_love,
        { isBr: true },
        i18n().cr_timon_guide,
        { isDivider: true },
        i18n().cr_timon_guide_b,
      ],
      ['雞雞', { isDivider: true }, '黑奴队长'],
    ],
    [
      [i18n().cr_timon_daily, { isDivider: true }, i18n().cr_timon_random],
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
        '牛蛙煲',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
    [
      i18n().cr_timon_edu,
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
      i18n().cr_timon_ero,
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
    [i18n().cr_timon_basement, ['露娜俘虏', { isDivider: true }, '黑奴队长']],
    [i18n().cr_timon_special, '黑奴队长'],
    [
      i18n().cr_timon_mejiro,
      [
        'イーウィヤ',
        { isDivider: true },
        '99',
        { isDivider: true },
        '黑奴队长',
      ],
    ],
  ];

  const img_copyrights = [
    [
      [
        get_copyright_entry(2),
        { isDivider: true },
        get_copyright_entry(20),
        { isDivider: true },
        get_copyright_entry(38),
        { isDivider: true },
        get_copyright_entry(56),
        { isBr: true },
        get_copyright_entry(61),
        { isDivider: true },
        get_copyright_entry(65),
        { isDivider: true },
        get_copyright_entry(74),
        { isDivider: true },
        get_copyright_entry(87),
        { isBr: true },
        get_copyright_entry(91),
        { isDivider: true },
        get_copyright_entry(105),
        { isDivider: true },
        get_copyright_entry(129),
        { isDivider: true },
        get_copyright_entry(302),
      ],
      '无名者Y',
    ],
    [
      [
        get_copyright_entry(3),
        { isDivider: true },
        get_copyright_entry(6),
        { isDivider: true },
        get_copyright_entry(7),
        { isDivider: true },
        get_copyright_entry(9),
        { isBr: true },
        get_copyright_entry(17),
        { isDivider: true },
        get_copyright_entry(21),
        { isDivider: true },
        get_copyright_entry(24),
        { isDivider: true },
        get_copyright_entry(25),
        { isBr: true },
        get_copyright_entry(26),
        { isDivider: true },
        get_copyright_entry(30),
        { isDivider: true },
        get_copyright_entry(32),
        { isDivider: true },
        get_copyright_entry(60),
        { isBr: true },
        get_copyright_entry(67),
        { isDivider: true },
        get_copyright_entry(68),
        { isDivider: true },
        get_copyright_entry(98),
        { isDivider: true },
        get_copyright_entry(304),
      ],
      'kxmodel',
    ],
    [
      [
        get_copyright_entry(13),
        { isDivider: true },
        get_copyright_entry(21, '2'),
        { isDivider: true },
        get_copyright_entry(45),
        { isDivider: true },
        get_copyright_entry(100),
      ],
      '洗发水',
    ],
    [
      [
        get_copyright_entry(33),
        { isDivider: true },
        get_copyright_entry(44),
        { isDivider: true },
        get_copyright_entry(49),
        { isDivider: true },
        get_copyright_entry(50),
        { isBr: true },
        get_copyright_entry(70),
        { isDivider: true },
        get_copyright_entry(89),
        { isDivider: true },
        get_copyright_entry(114),
        { isDivider: true },
        get_copyright_entry(115),
        { isBr: true },
        get_copyright_entry(117),
        { isDivider: true },
        get_copyright_entry(119),
        { isDivider: true },
        get_copyright_entry(127),
        { isDivider: true },
        get_copyright_entry(135),
        { isBr: true },
        get_copyright_entry(140),
        { isDivider: true },
        get_copyright_entry(143),
      ],
      '西蟹瓜',
    ],
    [
      [
        get_copyright_entry(37),
        { isDivider: true },
        get_copyright_entry(46),
        { isDivider: true },
        get_copyright_entry(97),
        { isDivider: true },
        get_copyright_entry(132),
      ],
      '颜色可以叫颜',
    ],
    [
      [
        get_copyright_entry(71),
        { isDivider: true },
        get_copyright_entry(71, '2'),
        { isDivider: true },
        get_copyright_entry(86),
        { isDivider: true },
        get_copyright_entry(131),
      ],
      'gmddst',
    ],
    [
      [i18n().cr_image_common, { isDivider: true }, i18n().cr_image_gif],
      'kxmodel',
    ],
  ];

  buffer.push(
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
        content: i18n().cr_title_copyrights,
      },
    ],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        },
        content: i18n().cr_header_susai,
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
        content: i18n().cr_header_architecture,
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 9,
        },
        content: i18n().cr_header_engine,
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
        content: i18n().cr_header_developer,
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 9,
        },
        content: i18n().cr_header_art,
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
          '植物牙线',
          { isDivider: true },
          'フィンランド',
          { isDivider: true },
          '提交bug',
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
        content: i18n().cr_header_translate_reference,
      },
    ],
    [
      {
        content: [
          {
            content: i18n().cr_header_tr_repo,
            url: 'https://github.com/MinamiChiwa/Trainers-Legend-G-TRANS',
          },
          { isDivider: true },
          {
            content: i18n().cr_header_tr_wiki,
            url: 'https://wiki.biligame.com/umamusume/首页',
          },
        ],
      },
    ],
  );
  buffer.push([
    {
      config: { isParagraph: true },
      content: [
        {
          color: item_title_color,
          content: i18n().cr_header_kojo,
          fontSize: '1.25rem',
        },
        { isBr: true },
        i18n().cr_kojo_tip,
        { isBr: true },
        {
          content: i18n().cr_thanks_detail,
          url: 'https://gitgud.io/umaera/erauma/-/wikis/COPYRIGHT',
        },
      ],
    },
  ]);
  push_copyrights(kojo_copyrights);
  buffer.push([
    {
      config: { isParagraph: true },
      content: [
        {
          color: item_title_color,
          content: i18n().cr_header_image,
          fontSize: '1.25rem',
        },
        { isBr: true },
        i18n().cr_kojo_tip,
        { isBr: true },
        {
          content: i18n().cr_thanks_detail,
          url: 'https://gitgud.io/umaera/erauma/-/wikis/COPYRIGHT',
        },
      ],
    },
  ]);
  push_copyrights(img_copyrights, 2);
  buffer.push(
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 8,
        },
        content: i18n().cr_header_lib_en_us,
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 8,
        },
        content: i18n().cr_header_lib_ru_ru,
      },
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
          width: 8,
        },
        content: i18n().cr_header_lib_ja_jp,
      },
    ],
    [
      {
        config: { width: 8 },
        content: 'Katze',
      },
      {
        config: { width: 8 },
        content: 'Agnes Impera',
      },
      {
        config: { width: 8 },
        content: 'gamera',
      },
    ],
    [
      {
        config: {
          color: item_title_color,
          fontSize: '1.25rem',
          isParagraph: true,
        },
        content: i18n().cr_header_kojo_make,
      },
    ],
    [
      {
        content: [
          '黑奴队长',
          { isDivider: true },
          '黑奴一号',
          { isDivider: true },
          '黑奴二号',
        ],
      },
    ],
  );
  buffer.push([
    {
      config: {
        color: item_title_color,
        fontSize: '1.25rem',
        isParagraph: true,
      },
      content: i18n().cr_header_test,
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
      content: i18n().cr_header_community_management,
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
      content: i18n().cr_header_community_assistant,
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
      content: i18n().cr_header_special_thanks,
    },
  ]);
  buffer.push([
    {
      config: { fontSize: '1.25rem' },
      content: [i18n().cr_umamusme_pretty_derby],
    },
  ]);
  buffer.forEach((l) => l.forEach((s) => (s.type = 'text')));
  return buffer;
}

module.exports = { get_copyright_entry, generate_copyrights };
