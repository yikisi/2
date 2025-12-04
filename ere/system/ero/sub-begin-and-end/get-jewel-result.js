const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');
const { gene_juel_names } = require('#/data/other-const');

/**
 * @param {number} cid
 * @param {string[]} j_names
 * @param {Record<string,number>} j_info
 * @param {(PrintedSpan|string)[][]} a_info
 */
function get_jewel_result(cid, j_names, j_info, a_info) {
  const buffer = [];
  buffer.push({
    type: 'divider',
    config: {
      content: `${era.get(`callname:${cid}:-2`)} 的因子`,
      position: 'left',
    },
  });
  const self_protect = j_info['-自卫'];
  if (self_protect > 0) {
    buffer.push({
      content: [
        {
          color: palam_colors.notifications[0],
          content: self_protect.toLocaleString(),
        },
        ' 个自卫因子与其他因子相互抵消后：',
      ],
      type: 'text',
    });
  }
  for (const j_name of j_names) {
    const final = era.get(`juel:${cid}:${j_name}`);
    const got = j_info[j_name];
    const un_got = j_info[`-${j_name}`];
    if (got > 0 || un_got > 0) {
      buffer.push(
        {
          config: { width: 4 },
          content: `${j_name.substring(0, 2)}因子：`,
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [get_abbr_number(final - got), ' (具有) +'],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              ...get_abbr_number(got + un_got),
            },
            ' (获得) -',
          ],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[0],
              ...get_abbr_number(un_got),
            },
            ' (抵消) = ',
          ],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              fontWeight: 'bold',
              ...get_abbr_number(final),
            },
            ' (总计)',
          ],
          type: 'text',
        },
      );
    }
  }
  if (self_protect > 0) {
    const final = era.get(`juel:${cid}:自卫`),
      got = j_info['自卫'];
    buffer.push(
      {
        config: { width: 4 },
        content: '自卫因子：',
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [get_abbr_number(final - got + self_protect), ' (具有) +'],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            ...get_abbr_number(got),
          },
          ' (获得) -',
        ],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[0],
            ...get_abbr_number(self_protect),
          },
          ' (抵消) = ',
        ],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            fontWeight: 'bold',
            ...get_abbr_number(final),
          },
          ' (总计)',
        ],
        type: 'text',
      },
    );
  }
  if (!cid) {
    for (const g_name of gene_juel_names) {
      const final = era.get(`juel:${cid}:${g_name}`);
      const got = era.get(`gotjuel:${cid}:${g_name}`);
      if (got > 0) {
        buffer.push(
          {
            config: { width: 4 },
            content: `${g_name}因子：`,
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: [get_abbr_number(final - got), ' (具有) + '],
            type: 'text',
          },
          {
            config: { align: 'right', width: 10 },
            content: [
              {
                color: palam_colors.notifications[1],
                ...get_abbr_number(got),
              },
              ' (获得) = ',
            ],
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: [
              {
                color: palam_colors.notifications[1],
                fontWeight: 'bold',
                ...get_abbr_number(final),
              },
              ' (总计)',
            ],
            type: 'text',
          },
        );
      }
    }
  }
  if (buffer.length === 1) {
    buffer.push({ content: '无变化', type: 'text' });
  }
  const buffer2 = [];
  if (cid > 0) {
    buffer2.push({
      config: {
        content: era.get(`callname:${cid}:-2`) + ' 的刻印',
        position: 'left',
      },
      type: 'divider',
    });
    Object.values(mark_enum).forEach((mid) => {
      const change = era.get(`ex:${cid}:${65 + mid}`);
      const now = era.get(`mark:${cid}:${mid}`);
      const color = mark_colors[mid];
      if (change > 0) {
        buffer2.push({
          config: { width: 8 },
          content: [
            { color, content: era.get(`markname:${mid}`) + '刻印' },
            '：',
            {
              color: get_gradient_color(undefined, color, (now - change) / 3),
              content: `Lv. ${now - change}`,
            },
            ' → ',
            {
              color: get_gradient_color(undefined, color, now / 3),
              content: `Lv. ${now}`,
            },
          ],
          type: 'text',
        });
      }
    });
    if (buffer2.length === 1) {
      buffer2.push({ content: '无变化', type: 'text' });
    }
  }
  const buffer3 = [];
  a_info.forEach((c) => {
    if (c.length > 0) {
      buffer3.push({ config: { width: 8 }, content: c, type: 'text' });
    }
  });
  if (buffer3.length > 0) {
    buffer3.unshift({
      config: {
        content: `${era.get(`callname:${cid}:-2`)} 的属性`,
        position: 'left',
      },
      type: 'divider',
    });
  }
  return buffer.concat(buffer2).concat(buffer3);
}

module.exports = get_jewel_result;
