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
const { log_max_wp } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
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

/** @type {function(number,number,*?):Promise} */
let run_custom_ero;

let ex_list = undefined;

/**
 * @param {number} chara_id
 */
function get_squirt_info(chara_id) {
  const squirt = era.get(`nowex:${chara_id}:爱液分泌`);
  if (!squirt) {
    return [];
  }
  return [
    era.get(`nowex:${chara_id}:潮吹`) > 0 ? '喷出了 ' : '分泌了 ',
    {
      content: ` ${squirt.toLocaleString()}ml `,
      color: buff_colors[2],
    },
    ' 爱液',
  ];
}

function common_orgasm(chara_id) {
  const chara = get_chara_talk(chara_id);
  let multi_orgasm = undefined;
  if (era.get(`nowex:${chara_id}:二重高潮`)) {
    multi_orgasm = '二';
  } else if (era.get(`nowex:${chara_id}:三重高潮`)) {
    multi_orgasm = '三';
  } else if (era.get(`nowex:${chara_id}:四重高潮`)) {
    multi_orgasm = '四';
  } else if (era.get(`nowex:${chara_id}:五重高潮`)) {
    multi_orgasm = '五';
  } else if (era.get(`nowex:${chara_id}:多重高潮`)) {
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
      era.get(`nowex:${chara_id}:${part_name}高潮`) +
      (era.get(`nowex:${chara_id}:无自觉${part_name}高潮`) || 0);
    if (part === part_enum.breast) {
      const nipple_times =
        era.get(`nowex:${chara_id}:乳头高潮`) +
        era.get(`nowex:${chara_id}:无自觉乳头高潮`);
      if (times > 0) {
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '胸部', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
      }
      if (nipple_times > 0) {
        era.print([
          chara.get_colored_name(),
          ' 的 ',
          { content: '乳头', color: buff_colors[2] },
          ' ',
          {
            content: times > 1 ? `发生了 ${times} 重高潮` : '高潮了',
            color: buff_colors[2],
          },
          '！',
        ]);
      }
    } else if (part === part_enum.virgin) {
      const c_times =
        era.get(`nowex:${chara_id}:外阴高潮`) +
        era.get(`nowex:${chara_id}:无自觉外阴高潮`);
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
      const tmp = get_squirt_info(chara_id);
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
            { content: '阴道', color: buff_colors[2] },
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
          if ((semen = era.get(`nowex:${chara_id}:射精量`)) !== 0) {
            era.print([
              chara.get_colored_name(),
              ' ',
              semen < 0 ? '在避孕套中' : '',
              '射出了',
              {
                content: ` ${Math.abs(semen).toLocaleString()}ml `,
                color: buff_colors[2],
              },
              '精液！',
            ]);
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
      .filter((e) => e[1] >= 20 && e[1] <= 52)
      .map((e) => e[0]);
    console.log(ex_list);
  }
  for (const chara_id of ids) {
    let lost_mind_timer = era.get(`tcvar:${chara_id}:失神`);
    const wp_ratio = Math.log(era.get(`base:${chara_id}:根性`)) / log_max_wp,
      cost = [
        sys_change_attr_and_print(
          chara_id,
          '体力',
          -era.get(`nowex:${chara_id}:体力消耗`) * (lost_mind_timer ? 1.5 : 1),
        ),
        sys_change_attr_and_print(
          chara_id,
          '精力',
          -era.get(`nowex:${chara_id}:精力消耗`) *
            (1 - wp_coefficient * wp_ratio),
        ),
      ];
    let lost_mind = 0;
    if (shown && (cost[0].length > 0 || cost[1].length > 0)) {
      era.print(
        [
          get_chara_talk(chara_id).get_colored_name(),
          ' 的 ',
          ...cost[0],
          cost[0].length > 0 && cost[1].length > 0
            ? { content: '，' }
            : undefined,
          ...cost[1],
        ].filter((e) => e),
      );
    }
    const stamina = era.get(`base:${chara_id}:体力`);
    if (
      !stamina &&
      !era.get(`tcvar:${chara_id}:脱力`) &&
      sys_check_awake(chara_id)
    ) {
      era.set(`tcvar:${chara_id}:脱力`, 1);
      era.add(`nowex:${chara_id}:脱力`, 1);
      lost_mind_timer = 0;
    } else if (
      stamina &&
      !era.get(`base:${chara_id}:精力`) &&
      !era.get(`tcvar:${chara_id}:失神`)
    ) {
      era.set(`tcvar:${chara_id}:精力不济`, 1);
      lost_mind = era.add(`nowex:${chara_id}:失神`, 1);
    }
    if (check_erect(chara_id) && !era.get(`tcvar:${chara_id}:避孕套`)) {
      set_stain(chara_id, part_enum.penis, stain_enum.semen);
    }
    await run_custom_ero(chara_id, ero_hooks.orgasm, { shown });
    era.set(
      `nowex:${chara_id}:爱液分泌`,
      Math.floor(era.get(`nowex:${chara_id}:爱液分泌`)),
    );
    if (era.get(`nowex:${chara_id}:TotalEX`) > 0) {
      if (shown) {
        common_orgasm(chara_id);
      }
      era.set(`tcvar:${chara_id}:刚刚高潮`, true);
    } else if (shown) {
      const squirt_info = get_squirt_info(chara_id);
      if (squirt_info.length > 0) {
        era.print([
          get_chara_talk(chara_id).get_colored_name(),
          ' 的 ',
          { content: '阴道', color: buff_colors[2] },
          ' ',
          ...squirt_info,
          '！',
        ]);
      }
    }
    if (era.get(`nowex:${chara_id}:失贞`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.lose_virginity, {
        shown,
      });
    }
    if (era.get(`nowex:${chara_id}:破处`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.lose_virginity, {
        shown,
        virgin: true,
      });
    }
    if (era.get(`nowex:${chara_id}:阴道撕裂`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.wound, {
        part: part_enum.virgin,
        shown,
      });
    } else if (era.get(`ex:${chara_id}:阴道撕裂`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.wound, {
        continue: true,
        part: part_enum.virgin,
        shown,
      });
    }
    if (era.get(`nowex:${chara_id}:肛门撕裂`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.wound, {
        part: part_enum.anal,
        shown,
      });
    } else if (era.get(`ex:${chara_id}:肛门撕裂`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.wound, {
        continue: true,
        part: part_enum.anal,
        shown,
      });
    }
    add_juel(
      chara_id,
      '痛苦',
      2 *
        base_emotion_juel *
        (era.get(`ex:${chara_id}:阴道撕裂`) +
          era.get(`ex:${chara_id}:肛门撕裂`)),
    );
    if (era.get(`nowex:${chara_id}:勃起`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.become_erect, {
        shown,
        part: part_enum.penis,
      });
    }
    if (era.get(`nowex:${chara_id}:乳突`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.become_erect, {
        shown,
        part: part_enum.breast,
      });
    }
    if (era.get(`nowex:${chara_id}:喷奶量`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.breast,
      });
      era.set(`ex:${chara_id}:喷奶阻碍`, 0);
    }
    if (era.get(`nowex:${chara_id}:阴道润滑`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.virgin,
      });
    }
    if (era.get(`nowex:${chara_id}:肛门润滑`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.anal,
      });
    }
    if (era.get(`nowex:${chara_id}:潮吹`) > 0) {
      era.add(`exp:${chara_id}:潮吹次数`, 1);
    }
    let tmp;
    if ((tmp = era.get(`nowex:${chara_id}:爱液分泌`)) > 0) {
      era.add(`exp:${chara_id}:爱液分泌量`, tmp);
    }
    if ((tmp = era.get(`nowex:${chara_id}:饮爱液量`)) > 0) {
      era.add(`exp:${chara_id}:饮爱液量`, tmp);
    }
    if (era.get(`nowex:${chara_id}:脱力`) > 0) {
      await run_custom_ero(chara_id, ero_hooks.zero_stamina, { shown });
    }
    if (lost_mind > 0) {
      // 失神时间与根性相关，最少1回合
      era.set(
        `tcvar:${chara_id}:失神`,
        Math.ceil((max_absent_mind_time - 1) * (1 - wp_ratio)) + 1,
      );
      await run_custom_ero(chara_id, ero_hooks.lost_mind, { shown });
    } else if (lost_mind_timer) {
      // 失神状态每回合衰减
      era.add(`tcvar:${chara_id}:失神`, -1);
      if (!(lost_mind_timer - 1) && !era.get(`tcvar:${chara_id}:脱力`)) {
        era.set(
          `base:${chara_id}:精力`,
          Math.floor(
            time_resume_ratio *
              era.get(`maxbase:${chara_id}:精力`) *
              (1 + wp_ratio),
          ),
        );
      }
    }
    if (era.get(`tcvar:${chara_id}:余韵`) > 0) {
      era.add(`tcvar:${chara_id}:余韵`, -1);
    }
    if (era.get(`tcvar:${chara_id}:不应期`) > 0) {
      era.add(`tcvar:${chara_id}:不应期`, -1);
      // 射精之后如果进入不应期，拔出来
      const touched_part = era.get(`tcvar:${chara_id}:阴茎接触部位`);
      if (
        era.get(`nowex:${chara_id}:阴茎高潮`) > 0 &&
        (touched_part.part === part_enum.virgin ||
          touched_part.part === part_enum.anal)
      ) {
        clean_part_without_item(new EroParticipant(chara_id, part_enum.penis));
      }
    }
    if (era.get(`tcvar:${chara_id}:阴道扩张`) > 0) {
      era.add(`tcvar:${chara_id}:阴道扩张`, -1);
    }
    if (era.get(`tcvar:${chara_id}:肛门扩张`) > 0) {
      era.add(`tcvar:${chara_id}:肛门扩张`, -1);
    }
    if (shown) {
      era.println();
    }
  }
  for (const chara_id of ids) {
    era.add(
      `nowex:${chara_id}:胸部高潮`,
      era.get(`nowex:${chara_id}:乳头高潮`),
    );
    era.add(`ex:${chara_id}:乳头高潮`, era.get(`nowex:${chara_id}:乳头高潮`));
    era.set(`nowex:${chara_id}:乳头高潮`, 0);
    era.add(
      `ex:${chara_id}:胸部高潮`,
      era.get(`nowex:${chara_id}:无自觉乳头高潮`),
    );
    era.add(
      `nowex:${chara_id}:无自觉胸部高潮`,
      era.get(`nowex:${chara_id}:无自觉乳头高潮`),
    );
    era.add(
      `ex:${chara_id}:无自觉乳头高潮`,
      era.get(`nowex:${chara_id}:无自觉乳头高潮`),
    );
    era.set(`nowex:${chara_id}:无自觉乳头高潮`, 0);
    era.add(
      `tcvar:${chara_id}:高潮满足`,
      era.get(`nowex:${chara_id}:阴茎高潮`) +
        era.get(`nowex:${chara_id}:阴道高潮`),
    );
    pleasure_list.forEach((part) => {
      const part_name = part_names[part];
      era.add(
        `ex:${chara_id}:${part_name}高潮`,
        era.get(`nowex:${chara_id}:${part_name}高潮`),
      );
      era.set(`nowex:${chara_id}:${part_name}高潮`, 0);
      if (part !== part_enum.sadism && part !== part_enum.masochism) {
        era.add(
          `ex:${chara_id}:${part_name}高潮`,
          era.get(`nowex:${chara_id}:无自觉${part_name}高潮`),
        );
        era.add(
          `ex:${chara_id}:无自觉${part_name}高潮`,
          era.get(`nowex:${chara_id}:无自觉${part_name}高潮`),
        );
        era.set(`nowex:${chara_id}:无自觉${part_name}高潮`, 0);
      }
    });
    era.add(
      `cflag:${chara_id}:子宫内精液`,
      era.get(`nowex:${chara_id}:膣内精液`),
    );
    era.add(
      `cflag:${chara_id}:肠道内精液`,
      era.get(`nowex:${chara_id}:肠内精液`),
    );
    era.add(`cflag:${chara_id}:腹中精液`, era.get(`nowex:${chara_id}:饮精量`));
    ex_list.forEach((key) => {
      era.add(
        `ex:${chara_id}:${key}`,
        Math.abs(era.get(`nowex:${chara_id}:${key}`)),
      );
      era.set(`nowex:${chara_id}:${key}`, 0);
    });
  }
}

update_orgasms.init = (_handler) => (run_custom_ero = _handler);

module.exports = update_orgasms;
