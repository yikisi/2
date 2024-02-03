const era = require('#/era-electron');

const { palam_colors, buff_colors } = require('#/data/color-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');

/**
 * @param {number} chara_id
 * @param {*[]} buffer
 * @param {string} part_name
 * @param {string} unsatisfied_desc
 */
function fill_part_ex(chara_id, buffer, part_name, unsatisfied_desc) {
  const content_buffer = [],
    ex = era.get(`ex:${chara_id}:${part_name}高潮`),
    unknown_ex = era.get(`ex:${chara_id}:无自觉${part_name}高潮`);
  if (ex) {
    content_buffer.push(
      `${part_name}高潮了 `,
      {
        color: palam_colors.notifications[1],
        content: ex.toString(),
      },
      ' 次',
    );
    if (unknown_ex) {
      content_buffer.push(
        '，但对其中 ',
        {
          color: palam_colors.notifications[1],
          content: unknown_ex.toString(),
        },
        ' 次毫无感知',
      );
    }
  }
  if (
    era.get(`palam:${chara_id}:${part_name}快感`) >
    era.get(`tcvar:${chara_id}:${part_name}快感上限`) * lust_palam_border
  ) {
    content_buffer.push(
      content_buffer.length ? '；' : '',
      `${unsatisfied_desc}……`,
    );
  }
  if (content_buffer.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: content_buffer,
      type: 'text',
    });
  }
}

/**
 * @param {number} chara_id
 * @param {*[]} buffer
 * @param {string} part_name
 */
function fill_spirit_ex(chara_id, buffer, part_name) {
  const content_buffer = [],
    ex = era.get(`ex:${chara_id}:${part_name}高潮`);
  if (ex) {
    content_buffer.push(
      `因${part_name}感高潮了 `,
      {
        color: palam_colors.notifications[1],
        content: ex.toString(),
      },
      ' 次',
    );
  }
  if (
    era.get(`palam:${chara_id}:${part_name}快感`) >
    era.get(`tcvar:${chara_id}:${part_name}快感上限`) * lust_palam_border
  ) {
    if (content_buffer.length) {
      content_buffer.push('；');
    }
    content_buffer.push(
      era.get(`tcvar:${chara_id}:脱力`)
        ? `${part_name}的梦境袭扰了逐渐静息的身体`
        : `即将因${part_name}而感受的快乐仍然挥之不去`,
      '……',
    );
  }
  if (content_buffer.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: content_buffer,
      type: 'text',
    });
  }
}

function get_ex_result_in_the_end(chara_id) {
  const buffer = [];
  buffer.push({
    config: {
      content: `${era.get(`callname:${chara_id}:-2`)} 的高潮`,
      position: 'left',
    },
    type: 'divider',
  });
  const total_ex = era.get(`ex:${chara_id}:TotalEX`);
  if (total_ex) {
    buffer.push({
      content: [
        '在本次马儿跳中共高潮了 ',
        { color: palam_colors.notifications[1], content: total_ex.toString() },
        ' 次',
      ],
      type: 'text',
    });
    const multi_ex = new Array(5)
        .fill(0)
        .map((_, i) => era.get(`ex:${chara_id}:${i + 20}`)),
      count = multi_ex.reduce((p, c) => p + c);
    if (count) {
      const content_buffer = [];
      content_buffer.push(
        '特殊高潮 ',
        {
          color: palam_colors.notifications[1],
          content: count.toString(),
        },
        ' 次，包括：',
      );
      multi_ex.forEach((e, i) => {
        if (e) {
          content_buffer.push(
            era.get(`exname:${i + 20}`),
            ' ',
            {
              color: palam_colors.notifications[1],
              content: e.toString(),
            },
            ' 次',
            '，',
          );
        }
      });
      content_buffer.pop();
      buffer.push({
        content: content_buffer,
        type: 'text',
      });
    }
    buffer.push({ content: [{ isBr: true }, '其中：'], type: 'text' });
    let content_buffer = [];
    fill_part_ex(
      chara_id,
      buffer,
      '口腔',
      '不满足的嘴唇仍微微张开着，好似在期待着什么',
    );
    const breast_ex = era.get(`ex:${chara_id}:胸部高潮`),
      unknown_breast_ex = era.get(`ex:${chara_id}:无自觉胸部高潮`),
      nipple_ex = era.get(`ex:${chara_id}:乳头高潮`),
      unknown_nipple_ex = era.get(`ex:${chara_id}:无自觉乳头高潮`);
    if (breast_ex) {
      content_buffer.push(
        '胸部高潮了 ',
        {
          color: palam_colors.notifications[1],
          content: breast_ex.toString(),
        },
        ' 次',
      );
      if (unknown_breast_ex) {
        content_buffer.push(
          '，但对其中 ',
          {
            color: palam_colors.notifications[1],
            content: unknown_breast_ex.toString(),
          },
          ' 次毫无感知',
        );
      }
      if (nipple_ex) {
        content_buffer.push(
          '；有 ',
          {
            color: palam_colors.notifications[1],
            content: nipple_ex.toString(),
          },
          ' 次高潮是在蓄积的乳汁喷出时发生',
        );
        if (unknown_nipple_ex) {
          content_buffer.push(
            '但有 ',
            {
              color: palam_colors.notifications[1],
              content: unknown_nipple_ex.toString(),
            },
            ' 次毫无察觉',
          );
        }
      }
    }
    if (
      era.get(`palam:${chara_id}:胸部快感`) >
      era.get(`tcvar:${chara_id}:胸部快感上限`) * lust_palam_border
    ) {
      content_buffer.push(
        content_buffer.length ? '；' : '',
        '不知足的莓果',
        era.get(`talent:${chara_id}:乳头类型`) === 2
          ? '在保护它的凹坑之外'
          : '',
        '颤巍巍地凸起着……',
      );
    }
    if (content_buffer.length) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(
      chara_id,
      buffer,
      '身体',
      '未被充分疼爱的身体泛着油亮的汗渍和红晕',
    );
    const penis_ex = era.get(`ex:${chara_id}:阴茎高潮`),
      unknown_penis_ex = era.get(`ex:${chara_id}:无自觉阴茎高潮`);
    content_buffer = [];
    if (penis_ex) {
      content_buffer.push(
        '射精了 ',
        {
          color: palam_colors.notifications[1],
          content: penis_ex.toString(),
        },
        ' 次，共射出 ',
        {
          color: palam_colors.notifications[1],
          content: `${era.get(`ex:${chara_id}:射精量`)}ml`,
        },
        ' 精液',
      );
      if (unknown_penis_ex) {
        content_buffer.push(
          '，但对其中 ',
          {
            color: palam_colors.notifications[1],
            content: unknown_penis_ex.toString(),
          },
          ' 次毫无感知',
        );
      }
    }
    if (
      era.get(`palam:${chara_id}:阴茎快感`) >
      era.get(`tcvar:${chara_id}:阴茎快感上限`) * lust_palam_border
    ) {
      content_buffer.push(
        content_buffer.length ? '；' : '',
        '处于在极限边缘的肉棒仍渴望着出击……',
      );
    }
    if (content_buffer.length) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(chara_id, buffer, '外阴', '完全肿起的通红豆豆妖艳而痛苦');
    fill_part_ex(chara_id, buffer, '阴道', '翕动的小穴泛起阵阵热气');
    fill_part_ex(chara_id, buffer, '肛门', '屁穴一张一合地用热气诉说着饥渴');
    fill_spirit_ex(chara_id, buffer, '施虐');
    fill_spirit_ex(chara_id, buffer, '受虐');
  }
  let temp_buffer = [];
  temp_buffer.push({
    content: '在本次马儿跳中：',
    type: 'text',
  });
  if (era.get(`ex:${chara_id}:失贞标记`)) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '失去了',
        {
          content: '【童贞】',
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${chara_id}:阴茎高潮`) === 0
          ? '，但其中蕴含的洪荒之力并未能完全释放'
          : '',
      ],
      type: 'text',
    });
  }
  if (era.get(`ex:${chara_id}:破处标记`)) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '失去了',
        {
          content: '【处女】',
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${chara_id}:阴道高潮`) === 0
          ? '破瓜的身体没能在初次咬下禁果的体验中尝及快乐的甜美'
          : '',
      ],
      type: 'text',
    });
  }
  if (temp_buffer.length > 1) {
    if (buffer.length > 1) {
      buffer.push({ content: [{ isBr: true }], type: 'text' });
    }
    buffer.push(...temp_buffer);
  }
  temp_buffer = [];
  temp_buffer.push({ content: '在这当中：', type: 'text' });
  let temp_val =
    era.get(`tcvar:${chara_id}:性欲缓存`) - era.get(`base:${chara_id}:性欲`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '性欲得到了大幅释放！',
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '性欲基本得到了纾解',
      type: 'text',
    });
  } else if (temp_val < -500) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '性欲反而进一步累积了……',
      type: 'text',
    });
  }
  temp_val =
    era.get(`tcvar:${chara_id}:压力缓存`) - era.get(`base:${chara_id}:压力`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '压力得到了大幅纾解！',
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '一定程度上舒缓了紧绷的神经',
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:喷奶量`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '喷出了 ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 母乳',
      ],
      type: 'text',
    });
  }
  temp_val = [
    era.get(`ex:${chara_id}:饮精量`),
    era.get(`ex:${chara_id}:吸奶量`),
  ];
  if (temp_val[0] + temp_val[1]) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '饮下了 ',
        ...(temp_val[0]
          ? [
              {
                color: palam_colors.notifications[1],
                content: `${temp_val[0].toLocaleString()}ml`,
              },
              ' 精液',
            ]
          : []),
        temp_val[0] && temp_val[1] ? ' 和 ' : '',
        ...(temp_val[1]
          ? [
              {
                color: palam_colors.notifications[1],
                content: `${temp_val[1].toLocaleString()}ml`,
              },
              ' 母乳',
            ]
          : []),
      ],
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:膣内精液`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '用小穴接纳了 ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 精液',
      ],
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:肠内精液`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '用屁穴接纳了 ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 精液',
      ],
      type: 'text',
    });
  }
  temp_val = [
    era.get(`ex:${chara_id}:阴道撕裂`),
    era.get(`ex:${chara_id}:肛门撕裂`),
  ];
  if (temp_val[0] + temp_val[1]) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        temp_val[0] ? '阴道' : '',
        temp_val[0] && temp_val[1] ? '和' : '',
        temp_val[1] ? '谷道' : '',
        '被 ',
        {
          content: '撑裂',
          color: buff_colors[3],
        },
        ' 了……一定很疼吧',
      ],
      type: 'text',
    });
  }
  if (temp_buffer.length > 1) {
    if (buffer.length > 1) {
      buffer.push({ content: [{ isBr: true }], type: 'text' });
    }
    buffer.push(...temp_buffer);
  }
  if (buffer.length === 1) {
    buffer.push({ content: '没有发生高潮', type: 'text' });
  }
  return buffer;
}

module.exports = get_ex_result_in_the_end;
