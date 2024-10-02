const era = require('#/era-electron');

const check_nipple_clamps = require('#/system/ero/sub-calc-ero-orgasm/check-nipple-clamps');
const update_orgasms = require('#/system/ero/sub-calc-ero-orgasm/update-orgasms');
const {
  update_breast_exp,
  update_face_exp,
  update_milk_exp,
} = require('#/system/ero/sys-calc-ero-exp');
const {
  change_part,
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const {
  check_erect,
  check_lubrication,
  get_bust_size,
  get_pregnant_ratio,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const {
  add_juel,
  update_juels_from_talent,
} = require('#/system/ero/sys-calc-juel');
const {
  update_palam,
  update_palam_from_main_orgasm,
  update_palam_from_talent,
} = require('#/system/ero/sys-calc-palam');
const {
  merge_stain,
  rollback_penis_stain,
  set_stain,
} = require('#/system/ero/sys-calc-stain');
const call_ero_script = require('#/system/script/sys-call-ero-script');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_random_value, log_max_wp } = require('#/utils/value-utils');

const { attack_juel_reward } = require('#/data/ero/battle-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const {
  base_orgasm_juel_reward,
  damage_buff,
  damage_from_stop,
  juel_reward,
  lust_from_palam,
  orgasm_cost,
  palam_border,
  palam_from_orgasm,
  secretion_amount,
  secretion_coefficient,
  wp_coefficient,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_talents,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { breast_size, pregnant_stage_enum } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_breast_cup } = require('#/data/info-generator');

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function sys_calc_orgasm(shown, ...ids) {
  const date = `${era.get('flag:当前年')} 年 ${era.get(
    'flag:当前月',
  )} 月 第 ${era.get('flag:当前周')} 周`;
  for (const chara_id of ids) {
    const wp_ratio = Math.log(era.get(`base:${chara_id}:根性`)) / log_max_wp;
    let total_cost = { stamina: 0, time: 0 },
      orgasm_count = 0,
      limited_count = 0,
      orgasm_part_count = 0,
      minus_lust = 0;
    for (let i = 0; i < orgasm_check_list.length; ++i) {
      const part = orgasm_check_list[i];
      const part_name = part_names[part];
      const { curr, max, old } = update_palam(chara_id, part, shown);
      if (era.get(`tcvar:${chara_id}:高潮抑制`)) {
        continue;
      }
      let amount = 0,
        cum_flag = false;
      let touched_part = era.get(`tcvar:${chara_id}:${part_name}接触部位`),
        other_id = -1,
        other_part = -1;
      if (touched_part !== -1) {
        other_id = touched_part.owner;
        other_part = touched_part.part;
      }
      // 超过快感上限的情况，高潮
      if (curr >= max) {
        cum_flag = true;
        const times = Math.min(Math.floor(curr / max), 6);
        let tmp_cost = {};
        era.set(`palam:${chara_id}:${part_name}快感`, curr % max);
        let abl = era.get(`abl:${chara_id}:${part_name}耐性`) || 0;
        if (part >= part_enum.sadism) {
          // 施虐和受虐属于精神高潮，只能造成普通高潮
          era.set(`nowex:${chara_id}:${part_name}高潮`, times);
          Object.assign(tmp_cost, orgasm_cost.spirit);
          if (part === part_enum.masochism) {
            abl +=
              era.get(`talent:${chara_id}:喜欢责骂`) +
              era.get(`talent:${chara_id}:喜欢痛苦`);
          }
        } else {
          if (!sys_check_awake(chara_id)) {
            // 昏睡时计算无自觉高潮
            era.set(`nowex:${chara_id}:无自觉${part_name}高潮`, times);
          } else {
            // 清醒时计算普通高潮
            era.set(`nowex:${chara_id}:${part_name}高潮`, times);
          }
          Object.assign(tmp_cost, orgasm_cost.body);
          // 分泌液计算
          if (part === part_enum.clitoris) {
            if (era.get(`talent:${chara_id}:漏尿`)) {
              era.set(`nowex:${chara_id}:放尿`, 1);
            }
          } else if (part === part_enum.breast) {
            if (
              era.get(`talent:${chara_id}:乳头类型`) === 2 &&
              !era.get(`tcvar:${chara_id}:乳突`)
            ) {
              era.set(`tcvar:${chara_id}:乳突`, 1);
              era.set(`nowex:${chara_id}:乳突`, 1);
            }
            if (
              era.get(`cflag:${chara_id}:性别`) - 1 &&
              era.get(`talent:${chara_id}:泌乳`)
            ) {
              // 余韵额外流20%
              amount = check_nipple_clamps(
                chara_id,
                get_random_value(...secretion_amount.breast) *
                  secretion_coefficient.breast[
                    era.get(`talent:${chara_id}:泌乳`)
                  ] *
                  (1 +
                    0.2 * (era.get(`tcvar:${chara_id}:余韵`) > 0) +
                    (get_bust_size(chara_id, true) -
                      era.get(`cflag:${chara_id}:下胸围`)) /
                      50) *
                  times,
              );
            }
          } else if (part === part_enum.anal) {
            set_stain(chara_id, part_enum.anal, stain_enum.anal);
            amount = 1;
          } else if (part === part_enum.penis) {
            !era.get(`tcvar:${chara_id}:避孕套`) &&
              set_stain(chara_id, part_enum.penis, stain_enum.semen);
            // 寸止判定
            // 昏睡等失去控制时无法寸止
            // 性奴和孕袋不能寸止
            if (
              shown &&
              sys_check_awake(0) &&
              !era.get('tcvar:0:脱力') &&
              !era.get('tcvar:0:失神')
            ) {
              let stop_success = undefined;
              if (chara_id === 0 && era.get('flag:惩戒力度') < 2) {
                const stopMarks = era.get(`ex:0:寸止`);
                // 以等差数列计算成功率
                // 部位快感每级可以提高5%寸止成功率
                // 早泄-50%成功率
                // 寸止成功判定，小于几率时成功寸止
                stop_success =
                  Math.random() <
                  1 -
                    ((1 + stopMarks) * stopMarks * 5) / 200 +
                    0.1 * era.get(`talent:0:钢之意志`) +
                    0.05 * abl -
                    0.5 * era.get(`talent:0:早泄`);
              } else if (
                chara_id > 0 &&
                era.get(`tcvar:${chara_id}:阴茎接触部位`).owner === 0 &&
                !era.get(`tcvar:${chara_id}:避孕套`)
              ) {
                stop_success =
                  Math.random() <
                  1 -
                    0.1 * era.get(`talent:${chara_id}:钢之意志`) +
                    0.05 * abl -
                    0.5 * era.get(`talent:${chara_id}:早泄`);
              }
              if (stop_success !== undefined) {
                const ret = await call_ero_script(
                  chara_id,
                  ero_hooks.orgasm_denial,
                  {
                    stop_success,
                  },
                );
                // 选择射或者没忍住就直接射了
                cum_flag = !ret || !stop_success;
                if (!cum_flag) {
                  if (ret === 2) {
                    // 体外成功，射到身上
                    if (other_part === part_enum.mouth) {
                      other_part = Object.keys(part_enum).length;
                      clean_part(new EroParticipant(chara_id, part_enum.penis));
                    } else {
                      other_part = part_enum.body;
                      change_part(
                        new EroParticipant(chara_id, part_enum.penis),
                        new EroParticipant(other_id, other_part),
                      );
                    }
                    cum_flag = true;
                  } else if (ret === 1) {
                    era.set(`nowex:${chara_id}:寸止`, 1);
                    // 恢复快感条和高潮状态
                    era.set(`palam:${chara_id}:阴茎快感`, curr);
                    era.set(`nowex:${chara_id}:阴茎高潮`, 0);
                    era.set(`nowex:${chara_id}:无自觉阴茎高潮`, 0);
                  }
                }
              }
            }

            if (cum_flag) {
              const stop_turn = era.get(`ex:${chara_id}:寸止`);
              if (stop_turn) {
                // 寸止每多一个回合，体力消耗+10%
                tmp_cost.stamina *= 1 + damage_from_stop * stop_turn;
                era.set(`ex:${chara_id}:寸止`, 0);
              }
              amount =
                get_random_value(...secretion_amount.penis) *
                secretion_amount.penis_times[times - 1];
              // 余韵额外射50%
              amount = Math.floor(
                amount * (1 + 0.5 * (era.get(`tcvar:${chara_id}:余韵`) > 0)),
              );
              era.add(`exp:${chara_id}:射精量`, amount);
              era.set(`nowex:${chara_id}:射精量`, amount);
              // 射精后有不应期
              // 每两级耐性-1回合不应期，早泄-1回合不应期
              if (
                !era.get(`status:${chara_id}:弗隆K`) &&
                !era.get(`status:${chara_id}:弗隆P`)
              ) {
                era.add(
                  `tcvar:${chara_id}:不应期`,
                  era.get(`status:${chara_id}:超马跳Z`) ||
                    era.get(`status:${chara_id}:马跳Z`) ||
                    era.get(`status:${chara_id}:马跳S`)
                    ? 1 + 1
                    : 8 +
                        Math.ceil(times / 2) -
                        Math.floor(3 * wp_ratio) -
                        Math.floor(
                          (era.get(`abl:${chara_id}:阴茎耐性`) + 1) / 2,
                        ) -
                        (era.get(`talent:${chara_id}:早泄`) > 0),
                );
              }
            }
          } else if (part === part_enum.virgin) {
            set_stain(chara_id, part_enum.virgin, stain_enum.secretion);
            amount = 1;
            // 阴道高潮也会漏尿
            if (era.get(`talent:${chara_id}:漏尿`)) {
              era.set(`nowex:${chara_id}:放尿`, 1);
            }
          }
        }
        if (cum_flag) {
          // 每级耐性减少10%高潮时体力精力消耗
          total_cost.stamina += tmp_cost.stamina * (1 - 0.1 * abl) * times;
          total_cost.time += tmp_cost.time * (1 - 0.1 * abl) * times;
          // 专门针对寸止的情况
          // 寸止时不计算高潮次数
          // 不管肉棒高潮了几次，只射一次精
          era.add(`exp:${chara_id}:${part_name}高潮次数`, times);
          orgasm_count += times;
          limited_count += part === part_enum.penis ? 1 : times;
          if (i < orgasm_check_list.length - 2) {
            update_palam_from_main_orgasm(chara_id, times);
          } else {
            // 主要部位高潮额外获得20%的因子奖励
            add_juel(
              chara_id,
              `${part_name}快感`,
              (palam_from_orgasm * times) / 5,
            );
          }
          orgasm_part_count++;
          if (part === part_enum.sadism || part === part_enum.masochism) {
            minus_lust += lust_from_palam * 0.75;
          } else {
            minus_lust +=
              (lust_from_palam *
                (1 -
                  Math.max(
                    0.25 *
                      (era.get(`talent:${chara_id}:${part_talents[part]}`) ||
                        0),
                    0,
                  ))) /
              (1 + (part !== part_enum.penis && part !== part_enum.virgin));
          }
        }
      } else {
        // 否则按照阈值计算分泌液
        // 淫系列特性使分泌液阈值减半
        if (part === part_enum.breast) {
          if (era.get(`cflag:${chara_id}:性别`) - 1) {
            const border =
              (max * palam_border.breast) /
              (1 +
                0.5 * era.get(`talent:${chara_id}:淫乳`) +
                0.5 * era.get(`tcvar:${chara_id}:发情`));
            if (curr >= border || era.get(`ex:${chara_id}:喷奶阻碍`)) {
              if (
                era.get(`talent:${chara_id}:乳头类型`) === 2 &&
                !era.get(`tcvar:${chara_id}:乳突`)
              ) {
                era.set(`tcvar:${chara_id}:乳突`, 1);
                era.set(`nowex:${chara_id}:乳突`, 1);
              }
              if (era.get(`talent:${chara_id}:泌乳`)) {
                amount = check_nipple_clamps(
                  chara_id,
                  (get_random_value(...secretion_amount.breast) *
                    secretion_coefficient.breast[
                      era.get(`talent:${chara_id}:泌乳`)
                    ] *
                    (curr - border) *
                    (1 +
                      0.2 * (era.get(`tcvar:${chara_id}:余韵`) > 0) +
                      (get_bust_size(chara_id, true) -
                        era.get(`cflag:${chara_id}:下胸围`)) /
                        50)) /
                    (max - border),
                );
              }
            }
          }
        } else if (part === part_enum.anal) {
          if (
            curr >=
            (max * palam_border.anal) /
              (1 +
                0.5 * era.get(`talent:${chara_id}:淫臀`) +
                0.5 * era.get(`tcvar:${chara_id}:发情`))
          ) {
            era.add(
              `nowex:${chara_id}:肛门润滑`,
              Number(!check_lubrication(chara_id, part_enum.anal)),
            );
            set_stain(chara_id, part_enum.anal, stain_enum.anal);
            amount = 1;
          }
        } else if (part === part_enum.penis) {
          if (check_erect(chara_id) && !check_erect(chara_id, old)) {
            era.add(`nowex:${chara_id}:勃起`, 1);
          }
        } else if (part === part_enum.virgin) {
          if (curr >= max * palam_border.virgin) {
            era.add(
              `nowex:${chara_id}:阴道润滑`,
              Number(!check_lubrication(chara_id, part_enum.virgin)),
            );
            set_stain(chara_id, part_enum.virgin, stain_enum.secretion);
            amount = 1;
          }
        }
      }
      const last_action = era.get('tflag:前回行动'),
        last_supporter = era.get('tflag:前回助手');
      // 分泌之后进行接触部位的污渍判定
      // 以及增加对方经历
      if (amount) {
        if (part === part_enum.penis) {
          if (
            (last_action === ero_hooks.ask_double_fuck ||
              last_action === ero_hooks.double_fuck) &&
            last_supporter === chara_id
          ) {
            other_id = 0;
            other_part = part_enum.virgin;
          }
          if (
            (last_action === ero_hooks.ask_double_blow_job ||
              last_action === ero_hooks.double_blow_job) &&
            other_part === Object.keys(part_enum).length
          ) {
            other_part = 100;
          }
        }
        if (part === part_enum.breast) {
          merge_stain(
            new EroParticipant(chara_id, part_enum.breast),
            new EroParticipant(other_id, other_part),
          );
          let tmp = era.get(`ex:${chara_id}:喷奶阻碍`);
          const nipple_orgasm_times = Math.floor(
            tmp /
              (secretion_amount.breast[1] *
                secretion_coefficient.breast[
                  era.get(`talent:${chara_id}:泌乳`)
                ] *
                (2 + 1 * (era.get(`tcvar:${chara_id}:余韵`) > 0))),
          );
          if (nipple_orgasm_times) {
            if (
              era.get(`status:${chara_id}:马跳S`) ||
              era.get(`status:${chara_id}:沉睡`)
            ) {
              // 昏睡时计算无自觉高潮
              era.add(`nowex:${chara_id}:无自觉乳头高潮`, nipple_orgasm_times);
            } else {
              // 清醒时计算普通高潮
              era.add(`nowex:${chara_id}:乳头高潮`, nipple_orgasm_times);
            }
            orgasm_count += nipple_orgasm_times;
            tmp = Math.ceil(tmp / (7 - Math.min(nipple_orgasm_times, 6)));
            amount = era.add(`nowex:${chara_id}:喷奶量`, tmp);
            era.add(`exp:${chara_id}:喷奶量`, tmp);
            // 乳头高潮的体力精力消耗结算
            // 乳头高潮无法豁免
            total_cost.stamina +=
              orgasm_cost.body.stamina * nipple_orgasm_times;
            total_cost.time += orgasm_cost.body.time * nipple_orgasm_times;
            update_palam_from_main_orgasm(chara_id, nipple_orgasm_times);
          }
          const cup = get_breast_cup(chara_id);
          if (other_part === part_enum.mouth) {
            update_milk_exp(
              date,
              chara_id,
              amount,
              breast_size[cup <= 'G' ? cup : 'G'],
              other_id,
              (last_action === ero_hooks.ask_double_suck_nipple &&
                chara_id === era.get('tflag:主导权')) ||
                (last_action === ero_hooks.double_suck_nipple &&
                  chara_id === era.get('tflag:前回对手'))
                ? last_supporter
                : 0,
            );
          } else if (touched_part.item === item_enum.milk_pump) {
            era.add(
              `tflag:${era.get(`cflag:${chara_id}:种族`) ? '马' : '人'}奶产量`,
              amount,
            );
          }
        } else if (other_id !== -1 && other_part !== -1) {
          if (part === part_enum.anal) {
            merge_stain(
              new EroParticipant(chara_id, part_enum.anal),
              new EroParticipant(other_id, other_part),
            );
          } else if (part === part_enum.penis) {
            // 避孕套避免精液沾染，所以优先判定
            if (
              !era.get(`tcvar:${chara_id}:避孕套`) ||
              (other_part === part_enum.virgin &&
                era.get(`status:${other_id}:反避孕套`))
            ) {
              merge_stain(
                new EroParticipant(chara_id, part_enum.penis),
                new EroParticipant(other_id, other_part),
              );
              if (other_part === part_enum.mouth) {
                era.add(`exp:${other_id}:饮精量`, amount);
                era.add(`nowex:${other_id}:饮精量`, amount);
                if (!chara_id) {
                  era.add(`tcvar:${other_id}:获得因子`, amount * 2.5);
                } else if (!other_id) {
                  era.add(`tcvar:${chara_id}:获得因子`, amount * 5);
                }
                if (!era.get(`cstr:${other_id}:初次吞精经历`)) {
                  if (sys_check_awake(other_id)) {
                    era.set(`cstr:${other_id}:初次吞精经历`, [
                      `在 ${date} 第一次品尝了 `,
                      { c: chara_id },
                      ' 的精液，莫名地为那腥臭的味道而着迷',
                    ]);
                  } else if (!era.get(`cstr:${other_id}:无自觉初次吞精经历`)) {
                    era.set(`cstr:${other_id}:无自觉初次吞精经历`, [
                      `实际上，在 ${date}，就已经开始习惯 `,
                      { c: chara_id },
                      ' 精液的味道了',
                    ]);
                  }
                }
                update_juels_from_talent(other_id, '饮精成瘾');
                update_palam_from_talent(
                  other_id,
                  '喉咙敏感',
                  part_enum.mouth,
                  part_enum.masochism,
                );
              } else if (other_part === part_enum.breast) {
                update_breast_exp(
                  chara_id,
                  amount,
                  other_id,
                  (last_action === ero_hooks.ask_double_tit_job ||
                    last_action === ero_hooks.double_tit_job) &&
                    !chara_id
                    ? last_supporter
                    : 0,
                );
              } else if (
                other_part === part_enum.hand ||
                other_part === part_enum.foot ||
                other_part === part_enum.body
              ) {
                era.add(`exp:${other_id}:身体沾染精液量`, amount);
                update_juels_from_talent(other_id, '浴精成瘾');
                update_palam_from_talent(other_id, '气味敏感', part_enum.body);
              } else if (other_part === part_enum.clitoris) {
                era.add(`exp:${other_id}:外阴沾染精液量`, amount);
                update_juels_from_talent(other_id, '浴精成瘾');
                update_palam_from_talent(
                  other_id,
                  '气味敏感',
                  part_enum.clitoris,
                );
              } else if (other_part === part_enum.virgin) {
                era.add(`exp:${other_id}:内射次数`, 1);
                era.add(`exp:${other_id}:膣内精液量`, amount);
                era.add(`nowex:${other_id}:膣内精液`, amount);
                if (!chara_id) {
                  era.add(`tcvar:${other_id}:获得因子`, amount * 3);
                } else if (!other_id) {
                  era.add(`tcvar:${chara_id}:获得因子`, amount * 6);
                }
                if (!era.get(`cstr:${chara_id}:初次内射经历`)) {
                  if (sys_check_awake(chara_id)) {
                    era.set(`cstr:${chara_id}:初次内射经历`, [
                      '第一次向 ',
                      { c: other_id },
                      ` 的身体注入 ${amount}ml 种子，是在 ${date}`,
                    ]);
                  } else if (!era.get(`cstr:${chara_id}:无自觉初次内射经历`)) {
                    era.set(`cstr:${chara_id}:无自觉初次内射经历`, [
                      `实际上，在 ${date} 就被 `,
                      { c: other_id },
                      ` 淫乱的小穴榨取了 ${amount}ml 精液`,
                    ]);
                  }
                }
                if (!era.get(`cstr:${other_id}:初次被内射经历`)) {
                  if (sys_check_awake(other_id)) {
                    era.set(`cstr:${other_id}:初次被内射经历`, [
                      '接纳了 ',
                      { c: chara_id },
                      ` 的 ${amount}ml 种子，是在 ${date}`,
                    ]);
                  } else if (
                    !era.get(`cstr:${other_id}:无自觉初次被内射经历`)
                  ) {
                    era.set(`cstr:${other_id}:无自觉初次被内射经历`, [
                      `实际上，宝贵的阴道和子宫在 ${date} 就受到 `,
                      { c: chara_id },
                      ` 的 ${amount}ml 精液洗礼`,
                    ]);
                  }
                }
                await call_ero_script(
                  other_id || chara_id,
                  ero_hooks.cum_in_womb,
                  { father_id: chara_id, mother_id: other_id, shown },
                );
                // 计算怀孕
                const ratio = get_pregnant_ratio(other_id, chara_id);
                era.logger.debug(
                  `角色 ${other_id} 怀上角色 ${chara_id} 孩子的概率：${(
                    ratio * 100
                  ).toFixed(2)}%`,
                );
                if (
                  (era.get(`cflag:${other_id}:妊娠阶段`) ===
                    1 << pregnant_stage_enum.no &&
                    ratio >= 1) ||
                  (ratio > 0 && Math.random() < ratio)
                ) {
                  era.add(`exp:${chara_id}:授种次数`, 1);
                  era.set(
                    `cflag:${other_id}:妊娠阶段`,
                    1 << pregnant_stage_enum.embryo,
                  );
                  era.set(`cflag:${other_id}:妊娠回合计时`, 0);
                  const life_marks = new LifeEventMarks(other_id);
                  life_marks.report = 1;
                  life_marks.sperm = chara_id;
                  life_marks.unexpected_pregnant =
                    sys_check_awake(chara_id) - sys_check_awake(other_id);
                  era.set(`status:${other_id}:排卵期`, 0);
                  await call_ero_script(
                    other_id || chara_id,
                    ero_hooks.be_pregnant,
                    { father_id: chara_id, mother_id: other_id, shown },
                  );
                }
                update_juels_from_talent(other_id, '榨精成瘾');
                update_palam_from_talent(
                  other_id,
                  '子宫敏感',
                  part_enum.virgin,
                );
              } else if (other_part === part_enum.anal) {
                era.add(`exp:${other_id}:肠内射精次数`, 1);
                era.add(`exp:${other_id}:肠内精液量`, amount);
                era.set(`nowex:${other_id}:肠内精液`, amount);
                if (!chara_id) {
                  era.add(`tcvar:${chara_id}:获得因子`, amount * 2.5);
                } else if (!other_id) {
                  era.add(`tcvar:${other_id}:获得因子`, amount * 5);
                }
                update_juels_from_talent(other_id, '精液灌肠');
                update_palam_from_talent(other_id, '肠道敏感', part_enum.anal);
              } else if (other_part !== part_enum.item) {
                // 颜射独立计算
                // 颜射归身体大类，但与身体性交经验独立
                update_face_exp(
                  date,
                  chara_id,
                  amount,
                  other_id,
                  other_part === 100 ? last_supporter : 0,
                );
              }
            } else if (era.get(`tcvar:${chara_id}:避孕套`)) {
              era.set(
                `nowex:${chara_id}:射精量`,
                -era.get(`nowex:${chara_id}:射精量`),
              );
            }
            if (era.get(`tcvar:${chara_id}:避孕套`)) {
              era.set(`tcvar:${chara_id}:避孕套`, 0);
              rollback_penis_stain(chara_id);
              set_stain(chara_id, part_enum.penis, stain_enum.semen);
              clean_part_without_item(
                new EroParticipant(chara_id, part_enum.penis),
              );
            }
          } else if (part === part_enum.virgin) {
            merge_stain(
              new EroParticipant(chara_id, part_enum.virgin),
              new EroParticipant(other_id, other_part),
            );
            if (other_part === part_enum.mouth) {
              if (!chara_id) {
                era.add(`tcvar:${other_id}:获得因子`, 5);
              } else if (!other_id) {
                era.add(`tcvar:${chara_id}:获得因子`, 10);
              }
            }
          }
        }
      }
    }
    // 只有在总快感不为零的情况下计算高潮
    if (orgasm_count) {
      orgasm_count = Math.min(orgasm_count, 6);
      limited_count = Math.min(limited_count, 6);
      era.add(`tcvar:${chara_id}:余韵`, 1 + Math.ceil((orgasm_count + 1) / 2));
      era.set(`nowex:${chara_id}:TotalEX`, limited_count);
      if (limited_count > 1) {
        era.set(
          `nowex:${chara_id}:${
            ['二', '三', '四', '五', '多'][limited_count - 2]
          }重高潮`,
          1,
        );
      }
      era.add(`nowex:${chara_id}:根性获取`, limited_count * limited_count);
      const multi_part_reward =
        1 - juel_reward + juel_reward * orgasm_part_count;
      add_juel(
        chara_id,
        '顺从',
        base_orgasm_juel_reward * orgasm_count * multi_part_reward,
      );
      add_juel(
        chara_id,
        '羞耻',
        base_orgasm_juel_reward * orgasm_count * multi_part_reward,
      );
      sys_change_lust(chara_id, -minus_lust * multi_part_reward);
      // 每多一重高潮，体力和精力消耗+10%，50%封顶
      // 根性降低体力和精力消耗，降低比率为系数*log根性/log最大根性，目前最大根性暂定为1200
      // 余韵增加10%的体力精力消耗
      const reduce_cost =
        1 -
        damage_buff +
        damage_buff * orgasm_count -
        wp_ratio * wp_coefficient +
        0.1 * (era.get(`tcvar:${chara_id}:余韵`) > 0);
      era.add(`nowex:${chara_id}:体力消耗`, total_cost.stamina * reduce_cost);
      era.add(`nowex:${chara_id}:精力消耗`, total_cost.time * reduce_cost);
      // 宝珠结算
      pleasure_list.forEach((part) => {
        const part_name = part_names[part];
        let part_times =
          era.get(`nowex:${chara_id}:${part_name}高潮`) +
          (era.get(`nowex:${chara_id}:无自觉${part_name}高潮`) || 0);
        if (part_name === part_enum.breast) {
          part_times +=
            era.get(`nowex:${chara_id}:乳头高潮`) +
            era.get(`nowex:${chara_id}:无自觉乳头高潮`);
        }
        if ((part_times = Math.min(part_times, 6))) {
          const juels =
            base_orgasm_juel_reward *
            part_times *
            Math.pow(1 + juel_reward, part_times - 1) *
            multi_part_reward;
          add_juel(chara_id, `${part_name}快感`, juels);
          const touched_part = era.get(
            `tcvar:${chara_id}:${part_name}接触部位`,
          );
          // 沉睡的人会减少75%的对方高潮因子奖励
          if (-1 !== touched_part && touched_part.part !== part_enum.item) {
            add_juel(
              touched_part.owner,
              `${part_name}快感`,
              (juels * (2 - attack_juel_reward)) /
                (1 +
                  3 *
                    (!sys_check_awake(touched_part.owner) ||
                      era.get(`tcvar:${touched_part.owner}:脱力`))),
            );
          }
        }
      });
      era.set(
        `nowex:${chara_id}:阴茎高潮`,
        Math.min(era.get(`nowex:${chara_id}:阴茎高潮`), 1),
      );
      era.set(
        `nowex:${chara_id}:无自觉阴茎高潮`,
        Math.min(era.get(`nowex:${chara_id}:无自觉阴茎高潮`), 1),
      );
    }
  }
  shown && era.println();
  await update_orgasms(shown, ...ids);
}

module.exports = sys_calc_orgasm;
