const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { flat_join_list, join_to_string } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, palam_colors } = require('#/data/color-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');
const { part2jid, part_enum } = require('#/data/ero/part-const');

const { __, i18n, lan } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {*[]} buffer
 * @param {number} pid
 * @param {string} unsatisfied_desc
 */
function fill_part_ex(cid, buffer, pid, unsatisfied_desc) {
  const ret = [];
  const pname = i18n('zh-CN').tb_param[part2jid[pid]];
  const ex = era.get(`ex:${cid}:${pname}高潮`);
  const unknown_ex = era.get(`ex:${cid}:无自觉${pname}高潮`);
  ret.push(
    i18n().sex.get_part_orgasm(
      __(`body_part.${part_enum.keys[pid]}`),
      ex > 0 && {
        ...get_abbr_number(ex),
        color: palam_colors.notifications[1],
      },
      unknown_ex > 0 && {
        ...get_abbr_number(unknown_ex),
        color: palam_colors.notifications[1],
      },
      era.get(`palam:${cid}:${pname}快感`) >
        era.get(`tcvar:${cid}:${pname}快感上限`) * lust_palam_border &&
        unsatisfied_desc,
    ),
  );
  if (ret.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: ret,
      type: 'text',
    });
  }
}

/**
 * @param {number} cid
 * @param {*[]} buffer
 * @param {number} pid
 */
function fill_spirit_ex(cid, buffer, pid) {
  const pname = i18n('zh-CN').tb_param[part2jid[pid]];
  const ex = era.get(`ex:${cid}:${pname}高潮`);
  const content_buffer = i18n().sex.get_spirit_orgasm(
    __(`body_part.${part_enum.keys[pid]}`),
    ex > 0 && { ...get_abbr_number(ex), color: palam_colors.notifications[1] },
    era.get(`palam:${cid}:${pname}快感`) >
      era.get(`tcvar:${cid}:${pname}快感上限`) * lust_palam_border &&
      (era.get(`tcvar:${cid}:脱力`) > 0
        ? pid === part_enum.sadism
          ? i18n().timon.ero_sys.unsatisfied_sadism_zero_stamina
          : i18n().timon.ero_sys.unsatisfied_masochism_zero_stamina
        : pid === part_enum.sadism
          ? i18n().timon.ero_sys.unsatisfied_sadism
          : i18n().timon.ero_sys.unsatisfied_masochism),
  );
  if (content_buffer.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: content_buffer,
      type: 'text',
    });
  }
}

function get_ex_result_in_the_end(cid) {
  const buffer = [];
  buffer.push({
    config: {
      content: i18n().sex.orgasm_header_template.replace(
        '%NAME%',
        get_chara_talk(cid).full_name,
      ),
      position: 'left',
    },
    type: 'divider',
  });
  const total_ex = era.get(`ex:${cid}:TotalEX`);
  if (total_ex) {
    buffer.push({
      content: i18n().sex.get_orgasm_count({
        ...get_abbr_number(total_ex),
        color: palam_colors.notifications[1],
      }),
      type: 'text',
    });
    const multi_ex = new Array(5)
      .fill(0)
      .map((_, i) => era.get(`ex:${cid}:${i + 20}`));
    const count = multi_ex.reduce((p, c) => p + c);
    if (count) {
      buffer.push({
        content: [
          ...i18n().sex.get_special_orgasm_count({
            ...get_abbr_number(count),
            color: palam_colors.notifications[1],
          }),
          ...flat_join_list(
            multi_ex
              .map((c, i) =>
                c > 0
                  ? i18n().sex.get_special_orgasm_detail(
                      __(`sex.orgasm_${i + 2}`, i18n().sex.orgasm_m),
                      {
                        color: palam_colors.notifications[1],
                        content: c.toString(),
                      },
                    )
                  : void 0,
              )
              .filter((e) => e),
            i18n().ui_comma,
          ),
        ],
        type: 'text',
      });
    }
    buffer.push({
      content: [{ isBr: true }, i18n().sex.orgasm_detail_start],
      type: 'text',
    });
    let content_buffer;
    fill_part_ex(
      cid,
      buffer,
      part_enum.mouth,
      i18n().timon.ero_sys.unsatisfied_mouth,
    );
    const breast_ex = era.get(`ex:${cid}:胸部高潮`);
    const unknown_breast_ex = era.get(`ex:${cid}:无自觉胸部高潮`);
    const nipple_ex = era.get(`ex:${cid}:乳头高潮`);
    const unknown_nipple_ex = era.get(`ex:${cid}:无自觉乳头高潮`);
    content_buffer = i18n().sex.get_breast_orgasm(
      breast_ex > 0 && {
        ...get_abbr_number(breast_ex),
        color: palam_colors.notifications[1],
      },
      unknown_breast_ex > 0 && {
        ...get_abbr_number(unknown_breast_ex),
        color: palam_colors.notifications[1],
      },
      nipple_ex > 0 && {
        ...get_abbr_number(nipple_ex),
        color: palam_colors.notifications[1],
      },
      unknown_nipple_ex > 0 && {
        ...get_abbr_number(unknown_nipple_ex),
        color: palam_colors.notifications[1],
      },
      era.get(`palam:${cid}:胸部快感`) >
        era.get(`tcvar:${cid}:胸部快感上限`) * lust_palam_border &&
        (era.get(`talent:${cid}:乳头类型`) === 2
          ? i18n().timon.ero_sys.unsatisfied_hidden_nipple
          : i18n().timon.ero_sys.unsatisfied_nipple),
    );
    if (content_buffer.length > 0) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(
      cid,
      buffer,
      part_enum.body,
      i18n().timon.ero_sys.unsatisfied_body,
    );
    const penis_ex = era.get(`ex:${cid}:阴茎高潮`);
    const unknown_penis_ex = era.get(`ex:${cid}:无自觉阴茎高潮`);
    content_buffer = i18n().sex.get_penis_orgasm(
      penis_ex > 0 && {
        ...get_abbr_number(penis_ex),
        color: palam_colors.notifications[1],
      },
      {
        color: palam_colors.notifications[1],
        content: i18n().timon.ero_sys.liquid_amount_template.replace(
          '%AMOUNT%',
          Object(era.get(`ex:${cid}:射精量`)).toLocaleString(lan()),
        ),
      },
      unknown_penis_ex > 0 && {
        ...get_abbr_number(unknown_penis_ex),
        color: palam_colors.notifications[1],
      },
      era.get(`palam:${cid}:阴茎快感`) >
        era.get(`tcvar:${cid}:阴茎快感上限`) * lust_palam_border &&
        i18n().timon.ero_sys.unsatisfied_penis,
    );
    if (content_buffer.length > 0) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(
      cid,
      buffer,
      part_enum.clitoris,
      i18n().timon.ero_sys.unsatisfied_clitoris,
    );
    fill_part_ex(
      cid,
      buffer,
      part_enum.virgin,
      i18n().timon.ero_sys.unsatisfied_vagina,
    );
    const squirt = era.get(`ex:${cid}:潮吹`);
    const secretion = era.get(`ex:${cid}:爱液分泌`);
    if (secretion > 0) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: flat_join_list(
          [
            squirt > 0 &&
              i18n().sex.get_squirt_info({
                ...get_abbr_number(squirt),
                color: palam_colors.notifications[1],
              }),
            secretion > 0 &&
              i18n().sex.get_secretion_info({
                content: i18n().timon.ero_sys.liquid_amount_template.replace(
                  '%AMOUNT%',
                  Object(secretion).toLocaleString(lan()),
                ),
                color: palam_colors.notifications[1],
              }),
          ].filter((e) => e),
          i18n().ui_comma,
        ),
        type: 'text',
      });
    }
    fill_part_ex(cid, buffer, part_enum.anal, '屁穴一张一合地用热气诉说着饥渴');
    fill_spirit_ex(cid, buffer, part_enum.sadism);
    fill_spirit_ex(cid, buffer, part_enum.masochism);
  }
  let temp_buffer = [];
  temp_buffer.push({
    content: i18n().sex.orgasm_event_start,
    type: 'text',
  });
  if (era.get(`ex:${cid}:失贞`) > 0) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_lose_virginity(
        {
          content: i18n().tb_status.template.replace(
            '%NAME%',
            i18n().tb_status.v_penis_v,
          ),
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${cid}:阴茎高潮`) === 0 &&
          i18n().timon.ero_sys.unsatisfied_lose_virgin_p,
      ),
      type: 'text',
    });
  }
  if (era.get(`ex:${cid}:破处`) > 0) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_lose_virginity(
        {
          content: i18n().tb_status.template.replace(
            '%NAME%',
            i18n().tb_status.v_vagina_v,
          ),
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${cid}:阴道高潮`) === 0 &&
          i18n().timon.ero_sys.unsatisfied_lose_virgin_v,
      ),
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
  let temp_val = era.get(`tcvar:${cid}:性欲缓存`) - era.get(`base:${cid}:性欲`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.lust_down_plus,
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.lust_down,
      type: 'text',
    });
  } else if (temp_val < -500) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.lust_up,
      type: 'text',
    });
  }
  temp_val = era.get(`tcvar:${cid}:压力缓存`) - era.get(`base:${cid}:压力`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.pressure_down_plus,
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.pressure_down,
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${cid}:喷奶量`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_milk_info({
        color: palam_colors.notifications[1],
        content: i18n().timon.ero_sys.liquid_amount_template.replace(
          '%AMOUNT%',
          Object(temp_val).toLocaleString(lan()),
        ),
      }),
      type: 'text',
    });
  }
  temp_val = [
    era.get(`ex:${cid}:吸奶量`),
    era.get(`ex:${cid}:饮精量`),
    era.get(`ex:${cid}:饮爱液量`),
  ];
  if (temp_val.reduce((p, c) => p || c > 0, false)) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_drink_info(
        flat_join_list(
          [
            temp_val[0] > 0 &&
              i18n().sex.get_milk_amount({
                color: palam_colors.notifications[1],
                content: i18n().timon.ero_sys.liquid_amount_template.replace(
                  '%AMOUNT%',
                  Object(temp_val[0]).toLocaleString(lan()),
                ),
              }),
            temp_val[1] > 0 &&
              i18n().sex.get_semen_amount({
                color: palam_colors.notifications[1],
                content: i18n().timon.ero_sys.liquid_amount_template.replace(
                  '%AMOUNT%',
                  Object(temp_val[1]).toLocaleString(lan()),
                ),
              }),
            temp_val[2] > 0 &&
              i18n().sex.get_secretion_amount({
                color: palam_colors.notifications[1],
                content: i18n().timon.ero_sys.liquid_amount_template.replace(
                  '%AMOUNT%',
                  Object(temp_val[2]).toLocaleString(lan()),
                ),
              }),
          ].filter((e) => e),
          i18n().ui_comma,
        ),
      ),
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${cid}:膣内精液`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_cum_in_womb_info({
        color: palam_colors.notifications[1],
        content: i18n().timon.ero_sys.liquid_amount_template.replace(
          '%AMOUNT%',
          Object(temp_val).toLocaleString(lan()),
        ),
      }),
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${cid}:肠内精液`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: i18n().sex.get_cum_in_anal_info({
        color: palam_colors.notifications[1],
        content: i18n().timon.ero_sys.liquid_amount_template.replace(
          '%AMOUNT%',
          Object(temp_val).toLocaleString(lan()),
        ),
      }),
      type: 'text',
    });
  }
  temp_val = [era.get(`ex:${cid}:阴道撕裂`), era.get(`ex:${cid}:肛门撕裂`)];
  if (temp_val[0] + temp_val[1] > 0) {
    temp_buffer.push({
      config: { offset: 1, width: 23, color: buff_colors[3] },
      content: i18n().sex.get_wound_info(
        join_to_string(
          [
            temp_val[0] && i18n().body_part.s_virgin,
            temp_val[1] && i18n().body_part.s_anal,
          ].filter((e) => e),
          i18n().ui_conjunction,
        ),
      ),
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
    buffer.push({ content: i18n().sex.no_orgasm, type: 'text' });
  }
  return buffer;
}

module.exports = get_ex_result_in_the_end;
