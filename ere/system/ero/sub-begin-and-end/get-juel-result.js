const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { palam_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const { gene_juel_names } = require('#/data/other-const');

/**
 * @param {number} chara_id
 * @param {string[]} juel_names
 * @param {Record<string,Record<string,number>>} tmp
 */
function get_juel_result(chara_id, juel_names, tmp) {
  const buffer = [];
  buffer.push({
    type: 'divider',
    config: {
      content: `${era.get(`callname:${chara_id}:-2`)} 的因子`,
      position: 'left',
    },
  });
  const self_protect = tmp[chara_id]['-自卫'];
  if (self_protect) {
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
  juel_names.forEach((j_name) => {
    const val = era.get(`juel:${chara_id}:${j_name}`),
      got = tmp[chara_id][j_name],
      un_got = tmp[chara_id][`-${j_name}`];
    if (got || un_got) {
      buffer.push(
        {
          config: { width: 4 },
          content: `${j_name.substring(0, 2)}因子：`,
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: `${(val - got).toLocaleString()} (具有) +`,
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              content: (got + un_got).toLocaleString(),
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
              content: un_got.toLocaleString(),
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
              content: val.toLocaleString(),
              fontWeight: 'bold',
            },
            ' (总计)',
          ],
          type: 'text',
        },
      );
    }
  });
  if (self_protect) {
    const val = era.get(`juel:${chara_id}:自卫`),
      got = tmp[chara_id]['自卫'];
    buffer.push(
      {
        config: { width: 4 },
        content: '自卫因子：',
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: `${(val - got + self_protect).toLocaleString()} (具有) +`,
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            content: got.toLocaleString(),
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
            content: self_protect.toLocaleString(),
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
            content: val.toLocaleString(),
            fontWeight: 'bold',
          },
          ' (总计)',
        ],
        type: 'text',
      },
    );
  }
  if (!chara_id) {
    gene_juel_names.forEach((j_name) => {
      const val = era.get(`juel:${chara_id}:${j_name}`),
        got = era.get(`gotjuel:${chara_id}:${j_name}`);
      if (got) {
        buffer.push(
          {
            config: { width: 4 },
            content: `${j_name}因子：`,
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: `${(val - got).toLocaleString()} (具有) + `,
            type: 'text',
          },
          {
            config: { align: 'right', width: 10 },
            content: [
              {
                color: palam_colors.notifications[1],
                content: got.toLocaleString(),
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
                content: val.toLocaleString(),
                fontWeight: 'bold',
              },
              ' (总计)',
            ],
            type: 'text',
          },
        );
      }
    });
  }
  if (buffer.length === 1) {
    buffer.push({ content: '无变化', type: 'text' });
  }
  const buffer2 = [];
  if (chara_id) {
    buffer2.push({
      config: {
        content: `${era.get(`callname:${chara_id}:-2`)} 的刻印`,
        position: 'left',
      },
      type: 'divider',
    });
    era.get('marknames').forEach((m_name) => {
      const change = era.get(`ex:${chara_id}:${m_name}获取`),
        now = era.get(`mark:${chara_id}:${m_name}`),
        color = mark_colors[m_name];
      if (change) {
        buffer2.push({
          config: { width: 8 },
          content: [
            { color, content: `${m_name}刻印` },
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
  }
  if (buffer2.length === 1) {
    buffer2.push({ content: '无变化', type: 'text' });
  }
  return buffer.concat(buffer2);
}

module.exports = get_juel_result;
