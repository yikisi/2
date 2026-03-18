const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number[]} j_names
 * @param {Record<string,number>} j_info
 * @param {(PrintedSpan|string)[][]} a_info
 */
function get_jewel_result(cid, j_names, j_info, a_info) {
  const buffer = [];
  const chara_name = get_chara_talk(cid).full_name;
  buffer.push({
    type: 'divider',
    config: {
      content: i18n().sex.jewel_header_template.replace('%NAME%', chara_name),
      position: 'left',
    },
  });
  const self_protect = j_info[-15];
  if (self_protect > 0) {
    buffer.push({
      content: i18n().sex.get_jewel_info_start({
        ...get_abbr_number(self_protect),
        color: palam_colors.notifications[0],
      }),
      type: 'text',
    });
  }
  for (const jid of j_names) {
    const final = era.get(`juel:${cid}:${jid}`);
    const got = j_info[jid];
    const un_got = j_info[`-${jid}`];
    if (got > 0 || un_got > 0) {
      buffer.push(
        {
          config: { width: 4 },
          content: i18n().sex.get_jewel_row_start(__(`tb_param.jewel${jid}`)),
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            get_abbr_number(final - got),
            ` (${i18n().sex.jewel_has}) +`,
          ],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              ...get_abbr_number(got + un_got),
            },
            ` (${i18n().sex.jewel_got}) -`,
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
            ` (${i18n().sex.jewel_lose}) = `,
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
            ` (${i18n().sex.jewel_total})`,
          ],
          type: 'text',
        },
      );
    }
  }
  if (self_protect > 0) {
    const final = era.get(`juel:${cid}:自卫`);
    const got = j_info[15];
    buffer.push(
      {
        config: { width: 4 },
        content: i18n().sex.get_jewel_row_start(i18n().tb_param.jewel14),
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          get_abbr_number(final - got + self_protect),
          ` (${i18n().sex.jewel_has}) +`,
        ],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            ...get_abbr_number(got),
          },
          ` (${i18n().sex.jewel_got}) -`,
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
          ` (${i18n().sex.jewel_lose}) =`,
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
          ` (${i18n().sex.jewel_total})`,
        ],
        type: 'text',
      },
    );
  }
  if (!cid) {
    // JEWELNAME:20 - 22 = 粉 - 白
    for (let jid = 20; jid <= 22; ++jid) {
      const final = era.get(`jewel:${cid}:${jid}`);
      const got = j_info[jid];
      if (got > 0) {
        buffer.push(
          {
            config: { width: 4 },
            content: i18n().tb_param.get_jewel_count(
              __(`tb_param.jewel${jid}`),
              '',
            ),
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: [
              get_abbr_number(final - got),
              ` (${i18n().sex.jewel_has}) + `,
            ],
            type: 'text',
          },
          {
            config: { align: 'right', width: 10 },
            content: [
              {
                color: palam_colors.notifications[1],
                ...get_abbr_number(got),
              },
              ` (${i18n().sex.jewel_got}) = `,
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
              ` (${i18n().sex.jewel_total})`,
            ],
            type: 'text',
          },
        );
      }
    }
  }
  if (buffer.length === 1) {
    buffer.push({ content: i18n().sex.no_change, type: 'text' });
  }
  const buffer2 = [];
  if (cid > 0) {
    buffer2.push({
      config: {
        content: i18n().sex.mark_header_template.replace('%NAME%', chara_name),
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
          content: i18n().sex.get_mark_row(
            {
              color,
              content: i18n().tb_mark.name_template.replace(
                '%NAME%',
                di18n.tb_mark.names[mid],
              ),
            },
            {
              color: get_gradient_color(void 0, color, (now - change) / 3),
              content: i18n().tb_mark.lv_template.replace(
                '%LEVEL%',
                (now - change).toString(),
              ),
            },
            {
              color: get_gradient_color(void 0, color, now / 3),
              content: i18n().tb_mark.lv_template.replace(
                '%LEVEL%',
                now.toString(),
              ),
            },
          ),
          type: 'text',
        });
      }
    });
    if (buffer2.length === 1) {
      buffer2.push({ content: i18n().sex.no_change, type: 'text' });
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
        content: i18n().sex.attr_header_template.replace('%NAME%', chara_name),
        position: 'left',
      },
      type: 'divider',
    });
  }
  return buffer.concat(buffer2).concat(buffer3);
}

module.exports = get_jewel_result;
