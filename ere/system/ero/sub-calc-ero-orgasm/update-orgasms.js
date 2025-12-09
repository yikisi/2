const era = require('#/era-electron');

const { clean_part_without_item } = require('#/system/ero/sys-calc-ero-part');
const {
  check_erect,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_list } = require('#/utils/list-utils');
const { log_max_wp } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, item_names } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  max_absent_mind_time,
  time_resume_ratio,
  wp_coefficient,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { attr_enum } = require('#/data/train-const');

/** @type {function(number,number,*?):Promise} */
let run_custom_ero;

let ex_list = undefined;

const cum_loc_desc = {
  [part_enum.anal]: '屁穴中',
  [part_enum.body]: '身体上',
  [part_enum.breast]: '乳穴中',
  [part_enum.clitoris]: '阴核上',
  [part_enum.foot]: '足穴中',
  [part_enum.hand]: '手中',
  [part_enum.mouth]: '口穴中',
  [part_enum.penis]: '肉棒上',
  [part_enum.virgin]: '小穴中',
};

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
  const actions = [];
  const chara = join_list(
    (loc.c || [])
      .filter((e) => e >= 0)
      .map((e) => get_chara_talk(e).get_colored_name()),
    ' 和 ',
  );
  switch (loc.p) {
    case part_enum.mouth:
      actions.push('在 ', ...chara, ' 的口中');
      break;
    case part_enum.hand:
      actions.push('在 ', ...chara, ' 的指间');
      break;
    case part_enum.item:
      if (loc.i === item_enum.milk_pump) {
        actions.push(
          '在 ',
          { content: item_names[loc.i], color: buff_colors[2] },
          ' 中',
        );
      }
  }
  if (era.get(`ex:${cid}:喷奶阻碍`) > 0) {
    actions.push('猛然喷出了 ');
  } else if (is_orgasm) {
    actions.push('喷出了 ');
  } else {
    switch (loc.p) {
      case part_enum.mouth:
      case part_enum.hand:
      case part_enum.item:
        actions.push('泌出了 ');
        break;
      default:
        actions.push('流出了 ');
    }
  }
  era.set(`ex:${cid}:喷奶阻碍`, 0);
  return [
    ...actions,
    {
      content: ` ${amount.toLocaleString()}ml `,
      color: buff_colors[2],
    },
    ' 乳汁',
  ];
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
  const actions = [];
  const chara = join_list(
    (loc.c || [])
      .filter((e) => e >= 0)
      .map((e) => get_chara_talk(e).get_colored_name()),
    ' 和 ',
  );
  switch (loc.p) {
    case part_enum.mouth:
      actions.push('向 ', ...chara, ' 的口中');
      break;
    case part_enum.hand:
      actions.push('在 ', ...chara, ' 的指间');
      break;
    case part_enum.foot:
      actions.push('在 ', ...chara, ' 的脚下');
      break;
    case part_enum.penis:
      return [
        '将 ',
        {
          content: ` ${squirt.toLocaleString()}ml `,
          color: buff_colors[2],
        },
        ' 爱液浇在了 ',
        ...chara,
        ' 的龟头上',
      ];
    case 100:
      actions.push('朝 ', ...chara, ' 的嘴唇');
      break;
    case 101:
      actions.push('朝 ', ...chara, ' 的肉棒');
  }
  if (era.get(`nowex:${cid}:潮吹`) > 0) {
    actions.push('喷出了 ');
  } else {
    switch (loc.p) {
      case part_enum.mouth:
      case 100:
        actions.push('溅出了 ');
        break;
      default:
        actions.push('流出了 ');
    }
  }
  return [
    ...actions,
    {
      content: ` ${squirt.toLocaleString()}ml `,
      color: buff_colors[2],
    },
    ' 爱液',
  ];
}

/** @param {number} cid */
function common_orgasm(cid) {
  const chara = get_chara_talk(cid);
  let multi_orgasm = undefined;
  if (era.get(`nowex:${cid}:二重高潮`)) {
    multi_orgasm = '二';
  } else if (era.get(`nowex:${cid}:三重高潮`)) {
    multi_orgasm = '三';
  } else if (era.get(`nowex:${cid}:四重高潮`)) {
    multi_orgasm = '四';
  } else if (era.get(`nowex:${cid}:五重高潮`)) {
    multi_orgasm = '五';
  } else if (era.get(`nowex:${cid}:多重高潮`)) {
    multi_orgasm = '多';
  }
  if (multi_orgasm !== undefined) {
    era.print([
      chara.get_colored_name(),
      ' 发生了',
      { content: ` ${multi_orgasm}重高潮`, color: buff_colors[2] },
      '！',
    ]);
  }
  for (const part of orgasm_check_list) {
    if (part === part_enum.clitoris) {
      continue;
    }
    const part_name = part_names[part];
    const times =
      era.get(`nowex:${cid}:${part_name}高潮`) +
      (era.get(`nowex:${cid}:无自觉${part_name}高潮`) || 0);
    if (part === part_enum.breast) {
      const nipple_times =
        era.get(`nowex:${cid}:乳头高潮`) +
        era.get(`nowex:${cid}:无自觉乳头高潮`);
      const buffer = [];
      if (times > 0) {
        buffer.push([
          chara.get_colored_name(),
          ' 的',
          { content: ' 胸部 ', color: buff_colors[2] },
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
        ]);
      }
      if (nipple_times > 0) {
        buffer.push([
          chara.get_colored_name(),
          ' 的',
          { content: ' 乳头 ', color: buff_colors[2] },
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
        ]);
      }
      const milk = get_milk_info(cid, times + nipple_times > 0);
      if (milk.length > 0) {
        if (buffer.length > 0) {
          buffer[buffer.length - 1].push('，', ...milk);
        } else {
          buffer.push([
            chara.get_colored_name(),
            ' 的',
            { color: buff_colors[2], content: ' 乳头 ' },
            ...milk,
          ]);
        }
      }
      era.printMultiColumns(
        buffer.map((e) => ({ content: [...e, '！'], type: 'text' })),
      );
    } else if (part === part_enum.virgin) {
      const c_times =
        era.get(`nowex:${cid}:外阴高潮`) +
        era.get(`nowex:${cid}:无自觉外阴高潮`);
      const buffer = [];
      if (c_times > 0) {
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: part_names[part_enum.clitoris], color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
      }
      const tmp = get_squirt_info(cid);
      if (times > 0) {
        buffer.push(
          chara.get_colored_name(),
          ' 的 ',
          { content: part_name, color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
        );
      }
      if (tmp.length > 0) {
        if (buffer.length > 0) {
          buffer.push('，', ...tmp, '！');
        } else {
          buffer.push(
            chara.get_colored_name(),
            ' 的 ',
            { content: '蜜穴', color: buff_colors[2] },
            ' ',
            ...tmp,
            '！',
          );
        }
      }
      if (buffer.length > 0) {
        era.print(buffer);
      }
    } else if (times > 0) {
      let semen;
      switch (part) {
        case part_enum.sadism:
        case part_enum.masochism:
          era.print([
            chara.get_colored_name(),
            ' 因 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
          break;
        case part_enum.penis:
          if ((semen = era.get(`nowex:${cid}:射精量`)) > 0) {
            const semen_loc = era.get(`tcvar:${cid}:射精位置`) || {};
            semen = {
              content: ` ${semen.toLocaleString()}ml `,
              color: buff_colors[2],
            };
            if (semen_loc.p === part_enum.keys.length) {
              era.print([
                chara.get_colored_name(),
                ' 对着 ',
                ...join_list(
                  semen_loc.c.map((e) => get_chara_talk(e).get_colored_name()),
                  ' 和 ',
                ),
                ' 的脸庞射出了',
                semen,
                '精液！',
              ]);
            } else if (semen_loc.p === -1) {
              era.print([
                chara.get_colored_name(),
                ' 在避孕套中射出了',
                semen,
                '精液！',
              ]);
            } else if (semen_loc.p === part_enum.item) {
              era.print([
                chara.get_colored_name(),
                ' 在 ',
                {
                  content: item_names[item_enum.artificial_virgin],
                  color: buff_colors[2],
                },
                ' 中射出了',
                semen,
                '精液！',
              ]);
            } else if (cum_loc_desc[semen_loc.p] !== undefined) {
              era.print([
                chara.get_colored_name(),
                ' 在 ',
                get_chara_talk(semen_loc.c).get_colored_name(),
                ' 的',
                cum_loc_desc[semen_loc.p],
                '射出了',
                semen,
                '精液！',
              ]);
            } else {
              era.print([chara.get_colored_name(), ' 射出了', semen, '精液！']);
            }
          }
          break;
        default:
          era.print([
            chara.get_colored_name(),
            ' 的 ',
            { content: part_name, color: buff_colors[2] },
            ' ',
            {
              content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
              color: buff_colors[2],
            },
            '！',
          ]);
      }
    }
  }
}

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function update_orgasms(shown, ...ids) {
  if (!ex_list) {
    ex_list = era
      .get('exentries')
      .filter((e) => e[1] >= 20 && e[1] < 65)
      .map((e) => e[0]);
  }
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
        [
          get_chara_talk(cid).get_colored_name(),
          ' 的 ',
          ...cost[0],
          cost[0].length > 0 && cost[1].length > 0
            ? { content: '，' }
            : undefined,
          ...cost[1],
        ].filter((e) => e),
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
      if (shown) {
        common_orgasm(cid);
      }
      era.set(`tcvar:${cid}:刚刚高潮`, true);
    } else if (shown) {
      const chara = get_chara_talk(cid);
      const milk_info = get_milk_info(cid);
      if (milk_info.length > 0) {
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '乳头', color: buff_colors[2] },
          ' ',
          ...milk_info,
          '！',
        ]);
      }
      const squirt_info = get_squirt_info(cid);
      if (squirt_info.length > 0) {
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '蜜穴', color: buff_colors[2] },
          ' ',
          ...squirt_info,
          '！',
        ]);
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
      '痛苦',
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
      const part_name = part_names[part];
      era.add(
        `ex:${cid}:${part_name}高潮`,
        era.get(`nowex:${cid}:${part_name}高潮`),
      );
      era.set(`nowex:${cid}:${part_name}高潮`, 0);
      if (part !== part_enum.sadism && part !== part_enum.masochism) {
        era.add(
          `ex:${cid}:${part_name}高潮`,
          era.get(`nowex:${cid}:无自觉${part_name}高潮`),
        );
        era.add(
          `ex:${cid}:无自觉${part_name}高潮`,
          era.get(`nowex:${cid}:无自觉${part_name}高潮`),
        );
        era.set(`nowex:${cid}:无自觉${part_name}高潮`, 0);
      }
    });
    era.add(`cflag:${cid}:子宫内精液`, era.get(`nowex:${cid}:膣内精液`));
    era.add(`cflag:${cid}:肠道内精液`, era.get(`nowex:${cid}:肠内精液`));
    era.add(`cflag:${cid}:腹中精液`, era.get(`nowex:${cid}:饮精量`));
    ex_list.forEach((key) => {
      era.add(`ex:${cid}:${key}`, era.get(`nowex:${cid}:${key}`));
      era.set(`nowex:${cid}:${key}`, 0);
    });
    era.set(`tcvar:${cid}:射精位置`, {});
    era.set(`tcvar:${cid}:喷奶位置`, {});
    era.set(`tcvar:${cid}:潮吹位置`, {});
  }
}

update_orgasms.init = (_handler) => (run_custom_ero = _handler);

module.exports = update_orgasms;
