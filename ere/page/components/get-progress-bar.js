const era = require('#/era-electron');

const { attr_bg_colors } = require('#/data/color-const');

const { __ } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {object} [options]
 * @param {function(string):string} get_key
 * @param {number} prog_bar_width
 * @param {number} prog_width
 * @param {number} tag_width
 * @param {boolean} tp_offset
 * @param {boolean} use_empty_line
 * @param {boolean} use_tag
 */
function get_progress_bar(
  cid,
  {
    get_key = (b) => b,
    prog_bar_width = 24,
    prog_width = 12,
    tag_width = 2,
    tp_offset = false,
    use_empty_line = true,
    use_tag = true,
  } = {},
) {
  // BASENAME:0 - 1 =   体力 - 精力
  return ['hp', 'tp'].reduce((p, c, i) => {
    const base = era.get(`base:${cid}:${i}`);
    const maxbase = era.get(`maxbase:${cid}:${i}`);
    if (use_tag) {
      p.push({
        config: { offset: +(tp_offset && i), width: tag_width },
        content: __(get_key(c)),
        type: 'text',
      });
    }
    p.push({
      config: {
        color: attr_bg_colors[c],
        barWidth: prog_bar_width,
        height: 22,
        width: prog_width,
      },
      inContent: `${Math.floor(base)}/${Math.floor(maxbase)}`,
      percentage: (base * 100) / maxbase,
      type: 'progress',
    });
    if (use_empty_line) {
      p.push({ content: [], type: 'text' });
    }
    return p;
  }, []);
}

module.exports = get_progress_bar;
