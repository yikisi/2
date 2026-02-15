const get_progress_bar = require('#/page/components/get-progress-bar');

const CharaTitles = require('#/data/chara-titles');
const { love_colors, relation_colors } = require('#/data/color-const');
const { get_love_info, get_relation_info } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

/** @param {CharaTalk} chara */
function exp_chara_info(chara) {
  const relation = get_relation_info(chara.id, 0);
  const love = get_love_info(chara.id);
  const curr_title = CharaTitles.get(chara.id).get_colored_curr_title();
  return [
    { type: 'divider' },
    {
      config: { width: 12 },
      content: [
        ...(curr_title ? [curr_title, ' '] : []),
        chara.get_colored_full_name(),
      ],
      type: 'text',
    },
    {
      config: { width: 6 },
      content: [
        ' ',
        ...i18n().get_ui_colored_relation({
          content: relation.full(),
          color: relation_colors[relation.level],
        }),
      ],
      type: 'text',
    },
    {
      config: { width: 6 },
      content: [
        ' ',
        ...i18n().get_ui_colored_love({
          content: love.full(),
          color: love_colors[love.level],
        }),
      ],
      type: 'text',
    },
    ...get_progress_bar(chara.id, {
      prog_width: 9,
      tp_offset: !0,
      use_empty_line: !1,
    }),
  ];
}

module.exports = exp_chara_info;
