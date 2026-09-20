const era = require('#/era-electron');

const { clean_part_without_item } = require('#/system/ero/sys-calc-ero-part');
const { check_erect } = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { join_list } = require('#/utils/list-utils');
const { log_max_wp } = require('#/utils/value-utils');

const { buff_colors, palam_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  max_absent_mind_time,
  time_resume_ratio,
  wp_coefficient,
} = require('#/data/ero/orgasm-const');
const { part2jid, part_enum, pleasure_list } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

const { __, i18n, lan } = require('#/i18n/selector');

/** @type {function(number,number,*?):Promise} */
let run_custom_ero;

/**
 * @param {number} cid
 * @param {boolean} [is_orgasm=false]
 * @returns {TextContent}
 */
function get_milk_info(cid, is_orgasm = false) {
  const amount = era.get(`nowex:${cid}:喷奶量`);
  if (!amount) {
    return [];
  }
  const loc = era.get(`tcvar:${cid}:喷奶位置`) || {};
  const ret = i18n().timon.ero_sys.get_milk_info(
    cid,
    join_list(
      (loc.c || [])
        .filter((e) => e >= 0)
        .map((e) => get_chara_talk(e).get_colored_name()),
      i18n().ui_conjunction,
    ),
    loc.p === part_enum.item
      ? loc.i === item_enum.milk_pump && item_enum.milk_pump
      : loc.p,
    {
      content: i18n().timon.ero_sys.liquid_amount_template.replace(
        '%AMOUNT%',
        Object(amount).toLocaleString(lan()),
      ),
      color: buff_colors[2],
    },
    is_orgasm,
  );
  era.set(`ex:${cid}:喷奶阻碍`, 0);
  return ret;
}

/**
 * @param {number} cid
 * @returns {TextContent}
 */
function get_squirt_info(cid) {
  const squirt = era.get(`nowex:${cid}:爱液分泌`);
  if (!squirt) {
    return [];
  }
  const loc = era.get(`tcvar:${cid}:潮吹位置`) || {};
  return i18n().timon.ero_sys.get_squirt_info(
    cid,
    join_list(
      (loc.c || [])
        .filter((e) => e >= 0)
        .map((e) => get_chara_talk(e).get_colored_name()),
      i18n().ui_conjunction,
    ),
    loc.p,
    {
      content: i18n().timon.ero_sys.liquid_amount_template.replace(
        '%AMOUNT%',
        Object(squirt).toLocaleString(lan()),
      ),
      color: buff_colors[2],
    },
  );
}

/** @param {number} cid */
function common_orgasm(cid) {
  const get_color = (orgasm) =>
    get_gradient_color(
      palam_colors.notifications[1],
      palam_colors.progress[1],
      orgasm / 6,
    );
  const chara = get_chara_talk(cid);
  let multi_orgasm = 1;
  if (era.get(`nowex:${cid}:二重高潮`)) {
    multi_orgasm = 2;
  } else if (era.get(`nowex:${cid}:三重高潮`)) {
    multi_orgasm = 3;
  } else if (era.get(`nowex:${cid}:四重高潮`)) {
    multi_orgasm = 4;
  } else if (era.get(`nowex:${cid}:五重高潮`)) {
    multi_orgasm = 5;
  } else if (era.get(`nowex:${cid}:多重高潮`)) {
    multi_orgasm = 6;
  }
  if (multi_orgasm > 1) {
    era.print(
      i18n().timon.ero_sys.get_chara_total_orgasm(chara, {
        content: __(`sex.orgasm_${multi_orgasm}`, i18n().sex.orgasm_m),
        color: get_color(multi_orgasm),
      }),
    );
  }
  for (const part of [part_enum.mouth, part_enum.body]) {
    const part_name = i18n('zh-CN').tb_param[part2jid[part]];
    const times =
      era.get(`nowex:${cid}:${part_name}高潮`) +
      era.get(`nowex:${cid}:无自觉${part_name}高潮`);
    if (!times) {
      continue;
    }
    era.print(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().tb_param[part2jid[part]],
          color: buff_colors[2],
        },
        {
          content:
            times > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  times.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(times),
        },
      ),
    );
  }
  for (const part of [part_enum.sadism, part_enum.masochism]) {
    const part_name = i18n('zh-CN').tb_param[part2jid[part]];
    const times = era.get(`nowex:${cid}:${part_name}高潮`);
    if (!times) {
      continue;
    }
    era.print(
      i18n().timon.ero_sys.get_chara_spirit_orgasm(
        chara,
        {
          content: i18n().tb_param[part2jid[part]],
          color: buff_colors[2],
        },
        {
          content:
            times > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  times.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(times),
        },
      ),
    );
  }
  const br_orgasm =
    era.get(`nowex:${cid}:胸部高潮`) + era.get(`nowex:${cid}:无自觉胸部高潮`);
  const nipple_orgasm =
    era.get(`nowex:${cid}:乳头高潮`) + era.get(`nowex:${cid}:无自觉乳头高潮`);
  let buffer = [];
  if (br_orgasm > 0) {
    buffer.push(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().body_part.breast,
          color: buff_colors[2],
        },
        {
          content:
            br_orgasm > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  br_orgasm.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(br_orgasm),
        },
      ),
    );
  }
  if (nipple_orgasm > 0) {
    buffer.push(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().body_part.s_nipple,
          color: buff_colors[2],
        },
        {
          content:
            nipple_orgasm > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  nipple_orgasm.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(nipple_orgasm),
        },
      ),
    );
  }
  const milk_info = get_milk_info(cid, br_orgasm + nipple_orgasm > 0);
  if (milk_info.length > 0) {
    if (buffer.length > 0) {
      buffer.at(-1).push(i18n().ui_comma, ...milk_info);
    } else {
      buffer.push(
        i18n().timon.ero_sys.get_chara_have_liquid(
          chara,
          { content: i18n().body_part.s_nipple, color: buff_colors[2] },
          milk_info,
        ),
      );
    }
  }
  buffer.forEach((c) => era.print(c));
  const c_orgasm =
    era.get(`nowex:${cid}:外阴高潮`) + era.get(`nowex:${cid}:无自觉外阴高潮`);
  const v_orgasm =
    era.get(`nowex:${cid}:阴道高潮`) + era.get(`nowex:${cid}:无自觉阴道高潮`);
  buffer = [];
  if (c_orgasm > 0) {
    buffer.push(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().body_part.clitoris,
          color: buff_colors[2],
        },
        {
          content:
            c_orgasm > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  c_orgasm.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(c_orgasm),
        },
      ),
    );
  }
  if (v_orgasm > 0) {
    buffer.push(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().body_part.virgin,
          color: buff_colors[2],
        },
        {
          content:
            v_orgasm > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  v_orgasm.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(v_orgasm),
        },
      ),
    );
  }
  const squirt_info = get_squirt_info(cid);
  if (squirt_info.length > 0) {
    if (buffer.length > 0) {
      buffer.at(-1).push(i18n().ui_comma, ...squirt_info);
    } else {
      buffer.push(
        i18n().timon.ero_sys.get_chara_have_liquid(
          chara,
          { content: i18n().body_part.s_virgin, color: buff_colors[2] },
          squirt_info,
        ),
      );
    }
  }
  buffer.forEach((c) => era.print(c));
  const a_orgasm =
    era.get(`nowex:${cid}:肛门高潮`) + era.get(`nowex:${cid}:无自觉肛门高潮`);
  buffer = [];
  if (a_orgasm > 0) {
    era.print(
      i18n().timon.ero_sys.get_chara_part_orgasm(
        chara,
        {
          content: i18n().tb_param[part2jid[part_enum.anal]],
          color: buff_colors[2],
        },
        {
          content:
            a_orgasm > 1
              ? i18n().timon.ero_sys.orgasm_template.replace(
                  '%TIME%',
                  a_orgasm.toString(),
                )
              : i18n().timon.ero_sys.orgasm,
          color: get_color(a_orgasm),
        },
      ),
    );
  }
  buffer.forEach((c) => era.print(c));
  let semen = era.get(`nowex:${cid}:射精量`);
  if (semen > 0) {
    const semen_loc = era.get(`tcvar:${cid}:射精位置`) || {};
    semen = {
      content: i18n().timon.ero_sys.liquid_amount_template.replace(
        '%AMOUNT%',
        Object(semen).toLocaleString(lan()),
      ),
      color: buff_colors[2],
    };
    if (semen_loc.p === part_enum.keys.length) {
      era.print(
        i18n().timon.ero_sys.get_chara_cum_on_face(
          chara,
          join_list(
            semen_loc.c.map((e) => get_chara_talk(e).get_colored_name()),
            i18n().ui_conjunction,
          ),
          semen,
        ),
      );
    } else if (semen_loc.p === -1) {
      era.print(i18n().timon.ero_sys.get_chara_cum_in_condom(chara, semen));
    } else if (semen_loc.p === part_enum.item) {
      era.print(
        i18n().timon.ero_sys.get_chara_cum_in_artificial_vagina(
          chara,
          {
            content: i18n().tb_item[item_enum.artificial_virgin],
            color: buff_colors[2],
          },
          semen,
        ),
      );
    } else {
      const key = `cum_in_${part_enum.keys[semen_loc.p]}`;
      if (key in i18n().timon.ero_sys) {
        era.print(
          i18n().timon.ero_sys.get_chara_cum_in_part(
            chara,
            get_chara_talk(semen_loc.c),
            i18n().timon.ero_sys[key],
            semen,
          ),
        );
      } else {
        era.print(i18n().timon.ero_sys.get_chara_cum(chara, semen));
      }
    }
  }
}

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function update_orgasms(shown, ...ids) {
  for (const cid of ids) {
    let lost_mind_timer = era.get(`tcvar:${cid}:失神`);
    const wp_ratio = Math.log(era.get(`base:${cid}:根性`)) / log_max_wp,
      cost = [
        sys_change_attr_and_print(
          cid,
          attr_enum.hp,
          -era.get(`nowex:${cid}:体力消耗`) * (lost_mind_timer ? 1.5 : 1),
        ),
        sys_change_attr_and_print(
          cid,
          attr_enum.tp,
          -era.get(`nowex:${cid}:精力消耗`) * (1 - wp_coefficient * wp_ratio),
        ),
      ];
    let lost_mind = 0;
    if (shown && (cost[0].length > 0 || cost[1].length > 0)) {
      era.print(
        i18n().sex.get_hp_tp_change(get_chara_talk(cid).get_colored_name(), [
          ...cost[0],
          cost[0].length > 0 && cost[1].length > 0 ? i18n().ui_comma : '',
          ...cost[1],
        ]),
      );
    }
    const stamina = era.get(`base:${cid}:体力`);
    if (!stamina && !era.get(`tcvar:${cid}:脱力`) && sys_check_awake(cid)) {
      era.set(`tcvar:${cid}:脱力`, 1);
      era.add(`nowex:${cid}:脱力`, 1);
      lost_mind_timer = 0;
    } else if (
      stamina &&
      !era.get(`base:${cid}:精力`) &&
      !era.get(`tcvar:${cid}:失神`)
    ) {
      era.set(`tcvar:${cid}:精力不济`, 1);
      lost_mind = era.add(`nowex:${cid}:失神`, 1);
    }
    if (check_erect(cid) && !era.get(`tcvar:${cid}:避孕套`)) {
      set_stain(cid, part_enum.penis, stain_enum.semen);
    }
    await run_custom_ero(cid, ero_hooks.orgasm, { shown });
    era.set(
      `nowex:${cid}:爱液分泌`,
      Math.floor(era.get(`nowex:${cid}:爱液分泌`)),
    );
    if (era.get(`nowex:${cid}:TotalEX`) > 0) {
      era.set(`tcvar:${cid}:刚刚高潮`, true);
    }
    if (shown) {
      if (era.get(`nowex:${cid}:TotalEX`) > 0) {
        common_orgasm(cid);
      } else {
        const chara = get_chara_talk(cid);
        const milk_info = get_milk_info(cid);
        if (milk_info.length > 0) {
          era.print(
            i18n().timon.ero_sys.get_chara_have_liquid(
              chara,
              { content: i18n().body_part.s_nipple, color: buff_colors[2] },
              milk_info,
            ),
          );
        }
        const squirt_info = get_squirt_info(cid);
        if (squirt_info.length > 0) {
          era.print(
            i18n().timon.ero_sys.get_chara_have_liquid(
              chara,
              { content: i18n().body_part.s_virgin, color: buff_colors[2] },
              squirt_info,
            ),
          );
        }
      }
    }
    if (era.get(`nowex:${cid}:失贞`) > 0) {
      await run_custom_ero(cid, ero_hooks.lose_virginity, {
        shown,
      });
    }
    if (era.get(`nowex:${cid}:破处`) > 0) {
      await run_custom_ero(cid, ero_hooks.lose_virginity, {
        shown,
        virgin: true,
      });
    }
    if (era.get(`nowex:${cid}:阴道撕裂`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        part: part_enum.virgin,
        shown,
      });
    } else if (era.get(`ex:${cid}:阴道撕裂`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        continue: true,
        part: part_enum.virgin,
        shown,
      });
    }
    if (era.get(`nowex:${cid}:肛门撕裂`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        part: part_enum.anal,
        shown,
      });
    } else if (era.get(`ex:${cid}:肛门撕裂`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        continue: true,
        part: part_enum.anal,
        shown,
      });
    }
    add_juel(
      cid,
      11,
      2 *
        base_emotion_juel *
        (era.get(`ex:${cid}:阴道撕裂`) + era.get(`ex:${cid}:肛门撕裂`)),
    );
    if (era.get(`nowex:${cid}:勃起`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_erect, {
        shown,
        part: part_enum.penis,
      });
    }
    if (era.get(`nowex:${cid}:乳突`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_erect, {
        shown,
        part: part_enum.breast,
      });
    }
    if (era.get(`nowex:${cid}:阴道润滑`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.virgin,
      });
    }
    if (era.get(`nowex:${cid}:肛门润滑`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.anal,
      });
    }
    if (era.get(`nowex:${cid}:潮吹`) > 0) {
      era.add(`exp:${cid}:潮吹次数`, 1);
    }
    let tmp;
    if ((tmp = era.get(`nowex:${cid}:爱液分泌`)) > 0) {
      era.add(`exp:${cid}:爱液分泌量`, tmp);
    }
    if ((tmp = era.get(`nowex:${cid}:饮爱液量`)) > 0) {
      era.add(`exp:${cid}:饮爱液量`, tmp);
    }
    if (era.get(`nowex:${cid}:脱力`) > 0) {
      await run_custom_ero(cid, ero_hooks.zero_stamina, { shown });
    }
    if (lost_mind > 0) {
      // 失神时间与根性相关，最少1回合
      era.set(
        `tcvar:${cid}:失神`,
        Math.ceil((max_absent_mind_time - 1) * (1 - wp_ratio)) + 1,
      );
      await run_custom_ero(cid, ero_hooks.lost_mind, { shown });
    } else if (lost_mind_timer) {
      // 失神状态每回合衰减
      era.add(`tcvar:${cid}:失神`, -1);
      if (!(lost_mind_timer - 1) && !era.get(`tcvar:${cid}:脱力`)) {
        era.set(
          `base:${cid}:精力`,
          Math.floor(
            time_resume_ratio * era.get(`maxbase:${cid}:精力`) * (1 + wp_ratio),
          ),
        );
      }
    }
    if (era.get(`tcvar:${cid}:余韵`) > 0) {
      era.add(`tcvar:${cid}:余韵`, -1);
    }
    if (era.get(`tcvar:${cid}:不应期`) > 0) {
      era.add(`tcvar:${cid}:不应期`, -1);
      // 射精之后如果进入不应期，拔出来
      const touched_part = era.get(`tcvar:${cid}:阴茎接触部位`);
      if (
        era.get(`nowex:${cid}:阴茎高潮`) > 0 &&
        (touched_part.part === part_enum.virgin ||
          touched_part.part === part_enum.anal)
      ) {
        clean_part_without_item(new EroParticipant(cid, part_enum.penis));
      }
    }
    if (era.get(`tcvar:${cid}:阴道扩张`) > 0) {
      era.add(`tcvar:${cid}:阴道扩张`, -1);
    }
    if (era.get(`tcvar:${cid}:肛门扩张`) > 0) {
      era.add(`tcvar:${cid}:肛门扩张`, -1);
    }
    if (shown) {
      era.println();
    }
  }
  for (const cid of ids) {
    era.add(`nowex:${cid}:胸部高潮`, era.get(`nowex:${cid}:乳头高潮`));
    era.add(`ex:${cid}:乳头高潮`, era.get(`nowex:${cid}:乳头高潮`));
    era.set(`nowex:${cid}:乳头高潮`, 0);
    era.add(`ex:${cid}:胸部高潮`, era.get(`nowex:${cid}:无自觉乳头高潮`));
    era.add(
      `nowex:${cid}:无自觉胸部高潮`,
      era.get(`nowex:${cid}:无自觉乳头高潮`),
    );
    era.add(`ex:${cid}:无自觉乳头高潮`, era.get(`nowex:${cid}:无自觉乳头高潮`));
    era.set(`nowex:${cid}:无自觉乳头高潮`, 0);
    era.add(
      `tcvar:${cid}:高潮满足`,
      era.get(`nowex:${cid}:阴茎高潮`) + era.get(`nowex:${cid}:阴道高潮`),
    );
    pleasure_list.forEach((part) => {
      const pname = i18n('zh-CN').tb_param[part2jid[part]];
      era.add(`ex:${cid}:${pname}高潮`, era.get(`nowex:${cid}:${pname}高潮`));
      era.set(`nowex:${cid}:${pname}高潮`, 0);
      if (part !== part_enum.sadism && part !== part_enum.masochism) {
        era.add(
          `ex:${cid}:${pname}高潮`,
          era.get(`nowex:${cid}:无自觉${pname}高潮`),
        );
        era.add(
          `ex:${cid}:无自觉${pname}高潮`,
          era.get(`nowex:${cid}:无自觉${pname}高潮`),
        );
        era.set(`nowex:${cid}:无自觉${pname}高潮`, 0);
      }
    });
    era.add(`cflag:${cid}:子宫内精液`, era.get(`nowex:${cid}:膣内精液`));
    era.add(`cflag:${cid}:肠道内精液`, era.get(`nowex:${cid}:肠内精液`));
    era.add(`cflag:${cid}:腹中精液`, era.get(`nowex:${cid}:饮精量`));
    era.get('exkeys').forEach((exid) => {
      // EXNAME:20 - 24 = 二重高潮 - 多重高潮
      // EXNAME:25 - 32 = 体力消耗 - 技能点获取
      // EXNAME:35 - 51 = 喷奶量 - 饮爱液量
      // EXNAME:55 - 57 = 寸止 - 失神
      // EXNAME:60 - 62 = TotalEX - 破处
      if (exid >= 20 && exid < 65) {
        era.add(`ex:${cid}:${exid}`, era.get(`nowex:${cid}:${exid}`));
        era.set(`nowex:${cid}:${exid}`, 0);
      }
    });
    era.set(`tcvar:${cid}:射精位置`, {});
    era.set(`tcvar:${cid}:喷奶位置`, {});
    era.set(`tcvar:${cid}:潮吹位置`, {});
  }
}

update_orgasms.init = (_handler) => (run_custom_ero = _handler);

module.exports = update_orgasms;
