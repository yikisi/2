const era = require('#/era-electron');

const change_cost = require('#/system/ero/sub-calc-ero/change-ero-cost');
const get_random_delta = require('#/system/ero/sub-calc-ero/get-random-delta');
const get_sm_buff = require('#/system/ero/sub-calc-ero/get-sm-buff');
const handle_lost_virginity = require('#/system/ero/sub-calc-ero/handle-lost-virginity');
const {
  update_attacking_mouth_exp,
  update_blow_job_exp,
  update_hand_job_exp,
  update_sm_exp,
} = require('#/system/ero/sys-calc-ero-exp');
const { use_item } = require('#/system/ero/sys-calc-ero-item');
const { change_part, clean_part } = require('#/system/ero/sys-calc-ero-part');
const {
  get_bust_size,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { calc_pleasure } = require('#/system/ero/sys-calc-palam');
const { merge_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const {
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const {
  action_cost,
  attack_juel_reward,
  base_damage,
} = require('#/data/ero/battle-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const {
  part_enum,
  part_names,
  part_skills,
  part_touch,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { penis_desc, vp_status_enum } = require('#/data/ero/status-const');

/**
 * @param {EroParticipant} attacker
 * @param {EroParticipant} defender
 * @param {number} [item]
 */
function sys_do_sex(attacker, defender, item) {
  let damage = {
      defender: base_damage.base,
      attacker: base_damage.self,
    },
    attacker_skill_part = part_skills[attacker.part],
    attack_extra_buff = 0,
    attack_extra_bonus = 0,
    defender_part = defender.part,
    attacker_virgin_status,
    defender_virgin_status,
    attacker_cost = action_cost.body,
    defender_cost = action_cost.body;

  const date = `${era.get('flag:当前年')} 年 ${era.get(
      'flag:当前月',
    )} 月 第 ${era.get('flag:当前周')} 周`,
    is_defender_awake = sys_check_awake(defender.id);

  switch (attacker.part) {
    case part_enum.mouth:
      switch (defender_part) {
        case part_enum.mouth:
          attacker_skill_part = '接吻';
          era.add(`exp:${attacker.id}:接吻次数`, 1);
          era.add(`exp:${defender.id}:接吻次数`, 1);
          if (!era.get(`cstr:${attacker.id}:初吻经历`)) {
            era.set(`cstr:${attacker.id}:初吻经历`, [
              `初吻在 ${date} 献给了 `,
              sys_get_colored_full_callname(attacker.id, defender.id),
            ]);
          }
          if (!era.get(`cstr:${defender.id}:初吻经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初吻经历`, [
                `初吻在 ${date} 献给了 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初吻经历`)) {
              era.set(`cstr:${defender.id}:无自觉初吻经历`, [
                `实际上，初吻在 ${date} 就已被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 夺走',
              ]);
            }
          }
          break;
        case part_enum.breast:
          era.add(`exp:${attacker.id}:舔吸次数`, 1);
          era.add(`exp:${defender.id}:授乳次数`, 1);
          break;
        case part_enum.clitoris:
        case part_enum.virgin:
          era.add(`exp:${attacker.id}:口交次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          update_blow_job_exp(date, attacker.id, defender.id);
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:口交次数`, 1);
          update_blow_job_exp(date, attacker.id, defender.id);
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:荡唇`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:凶器`);
          break;
        default:
          era.add(`exp:${attacker.id}:舔吸次数`, 1);
      }
      attack_extra_buff += 2 * (era.get(`talent:${attacker.id}:淫口`) === 2);
      set_stain(attacker.id, attacker.part, stain_enum.saliva);
      break;
    case part_enum.breast:
      switch (defender_part) {
        case part_enum.mouth:
          era.add(`exp:${attacker.id}:授乳次数`, 1);
          era.add(`exp:${defender.id}:舔吸次数`, 1);
          set_stain(attacker.id, attacker.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:乳交次数`, 1);
          era.add(`exp:${defender.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${attacker.id}:初次乳交经历`)) {
            era.set(`cstr:${attacker.id}:初次乳交经历`, [
              sys_get_colored_full_callname(attacker.id, defender.id),
              ` 的肉棒会因为胸部兴奋，在 ${date} 学会了这一点`,
            ]);
          }
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:妖乳`);
          change_cost(defender.id, attacker.id, part_enum.breast, damage);
          break;
        default:
          era.add(`exp:${attacker.id}:乳交次数`, 1);
      }
      // 淫乳+1技巧
      attack_extra_buff += era.get(`talent:${attacker.id}:淫乳`) === 2;
      // B罩杯以下有减成
      // 淫乳+5cm胸围，等效目标部位掌握+1
      attack_extra_bonus =
        ((get_bust_size(attacker.id) - era.get(`cflag:${attacker.id}:下胸围`)) /
          2.5 -
          6) /
        10;
      // 罩杯尺寸对乳交攻击的加成20%封顶，减成60%封顶
      attack_extra_bonus = attack_extra_bonus > 0.2 ? 0.2 : attack_extra_bonus;
      attack_extra_bonus =
        attack_extra_bonus < -0.6 ? -0.6 : attack_extra_bonus;
      break;
    case part_enum.hand:
      damage.attacker = base_damage.sm;
      switch (defender_part) {
        case part_enum.mouth:
          era.add(`exp:${attacker.id}:摸身体次数`, 1);
          set_stain(attacker.id, attacker.part, stain_enum.saliva);
          break;
        case part_enum.breast:
          era.add(`exp:${attacker.id}:揉乳次数`, 1);
          era.add(`exp:${defender.id}:挤奶次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次挤奶经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次挤奶经历`, [
                `在 ${date} 第一次`,
                attacker.id !== defender.id ? '被 ' : ' ',
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 爱抚了乳头，立起来了',
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次挤奶经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次挤奶经历`, [
                '实际上，那对胸部已经成为 ',
                sys_get_colored_full_callname(defender.id, attacker.id),
                ` 的玩物了，从 ${date} 开始`,
              ]);
            }
          }
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:撸管次数`, 1);
          era.add(`exp:${defender.id}:戳身体次数`, 1);
          update_hand_job_exp(date, attacker.id, defender.id);
          break;
        case part_enum.clitoris:
          era.add(`exp:${attacker.id}:抠穴次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          update_hand_job_exp(date, attacker.id, defender.id);
          break;
        case part_enum.virgin:
          era.add(`exp:${attacker.id}:抠穴次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          update_hand_job_exp(date, attacker.id, defender.id);
          damage.attacker += 20 * era.get(`talent:${defender.id}:名穴`);
          break;
        case part_enum.anal:
          era.add(`exp:${attacker.id}:慰菊次数`, 1);
          damage.attacker += 20 * era.get(`talent:${defender.id}:魔尻`);
          break;
        default:
          era.add(`exp:${attacker.id}:摸身体次数`, 1);
      }
      attack_extra_buff += 2 * era.get(`talent:${attacker.id}:神之手`);
      damage.attacker *= 1 + get_sm_buff(attacker.id);
      break;
    case part_enum.foot:
      switch (defender_part) {
        case part_enum.clitoris:
          era.add(`exp:${attacker.id}:踩小穴次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:踩肉棒次数`, 1);
          era.add(`exp:${defender.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${attacker.id}:初次足交经历`)) {
            era.set(`cstr:${attacker.id}:初次足交经历`, [
              `在 ${date} 第一次将 `,
              sys_get_colored_full_callname(attacker.id, defender.id),
              ' 的肉棒踩在了脚下',
            ]);
          }
          break;
        default:
          era.add(`exp:${attacker.id}:踩踏次数`, 1);
      }
      attack_extra_buff += 2 * era.get(`talent:${attacker.id}:神之足`);
      break;
    case part_enum.body:
      damage.attacker /= 2;
      switch (defender_part) {
        case part_enum.mouth:
          set_stain(attacker.id, attacker.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:身交次数`, 1);
          era.add(`exp:${defender.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${attacker.id}:初次身交经历`)) {
            era.set(`cstr:${attacker.id}:初次身交经历`, [
              `${date}，是第一次用身体接纳 `,
              sys_get_colored_full_callname(attacker.id, defender.id),
              ' 肉棒和欲望的日子',
            ]);
          }
      }
      attack_extra_buff += 2 * (era.get(`talent:${attacker.id}:淫身`) === 2);
      break;
    // 阴蒂有磨镜子和素股两种情况
    case part_enum.clitoris:
      switch (defender_part) {
        case part_enum.mouth:
          era.add(`exp:${attacker.id}:阴部玩弄次数`, 1);
          era.add(`exp:${defender.id}:口交次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次口交经历`)) {
            era.set(`cstr:${defender.id}:初次口交经历`, [
              `在 ${date} 被 `,
              sys_get_colored_full_callname(defender.id, attacker.id),
              ' 教会了这张嘴的另一种用法',
            ]);
          }
          break;
        case part_enum.clitoris:
          era.add(`exp:${attacker.id}:阴部玩弄次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:阴部玩弄次数`, 1);
          era.add(`exp:${defender.id}:戳阴部次数`, 1);
      }
      attack_extra_buff += 2 * (era.get(`talent:${attacker.id}:淫核`) === 2);
      break;
    case part_enum.virgin:
      switch (defender_part) {
        case part_enum.mouth:
          era.add(`exp:${attacker.id}:阴部玩弄次数`, 1);
          era.add(`exp:${defender.id}:口交次数`, 1);
          update_attacking_mouth_exp(date, defender.id, attacker.id);
          set_stain(attacker.id, attacker.part, stain_enum.saliva);
          break;
        case part_enum.hand:
          era.add(`exp:${attacker.id}:性交次数`, 1);
          era.add(`exp:${defender.id}:抠穴次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次手交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次手交经历`, [
                `手指，果然是最原始也最好用的取乐道具呀，被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                `在 ${date} 教会了这一点`,
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次手交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次手交经历`, [
                `实际上，在 ${date} 的某一天，手指被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的爱液涂上了色情的气味',
              ]);
            }
          }
          break;
        case part_enum.penis:
          era.add(`exp:${attacker.id}:性交次数`, 1);
          era.add(`exp:${defender.id}:戳阴部次数`, 1);
          attacker_virgin_status = era.get(`talent:${attacker.id}:处女`);
          defender_virgin_status = era.get(`talent:${defender.id}:童贞`);
          // 有膜的情况下会流血
          if (attacker_virgin_status > 0) {
            set_stain(attacker.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(defender.id, attacker.id);
            era.set(`nowex:${attacker.id}:破处标记`, 1);
          }
          if (
            // 无自觉非处女算破处
            attacker_virgin_status === vp_status_enum.dont_know ||
            // 真·处女算破处
            attacker_virgin_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${attacker.id}:破处经历`, [
              `在 ${date} ${is_defender_awake ? '' : '偷偷'}将处女献给了 `,
              sys_get_colored_full_callname(attacker.id, defender.id),
              ' ',
              penis_desc[get_penis_size(defender.id)],
              '的肉棒',
            ]);
            era.set(`talent:${attacker.id}:处女`, vp_status_enum.no);
          }
          // 没干过人的肉棒算失童贞
          if (defender_virgin_status > 0) {
            era.set(`nowex:${defender.id}:失贞标记`, 1);
          }
          // 判断是不是睡奸
          if (is_defender_awake) {
            if (
              // 无自觉非童贞算失童贞
              defender_virgin_status === vp_status_enum.dont_know ||
              // 真·童贞算失童贞
              defender_virgin_status === vp_status_enum.virgin
            ) {
              era.set(`cstr:${defender.id}:失去童贞经历`, [
                `童贞在 ${date} 被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 夺走了',
              ]);
            }
            // 都醒着就明牌了
            era.set(`talent:${attacker.id}:处女`, vp_status_enum.no);
            era.set(`talent:${defender.id}:童贞`, vp_status_enum.no);
          } else {
            era.add(`exp:${attacker.id}:阴道睡奸`, 1);
            era.add(`exp:${defender.id}:阴茎被睡奸`, 1);
            // 只有真·童贞才能在睡奸情况下失去童贞
            if (defender_virgin_status === vp_status_enum.virgin) {
              era.set(`cstr:${defender.id}:无自觉失去童贞经历`, [
                `实际上，已在 ${date} 被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 夺走',
              ]);
              era.set(`talent:${defender.id}:童贞`, vp_status_enum.dont_know);
            } else if (defender_virgin_status === vp_status_enum.i_think) {
              // 俺寻思童贞会被揭穿
              era.set(`talent:${defender.id}:童贞`, vp_status_enum.no);
            }
            // 如果被睡奸的是自己且对方是处女，附加俺寻思处女情况
            if (!defender.id && attacker_virgin_status > 0) {
              era.set(`talent:${attacker.id}:处女`, vp_status_enum.i_think);
            }
          }
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:名穴`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:凶器`);
          damage = change_cost(
            defender.id,
            attacker.id,
            part_enum.virgin,
            damage,
          );
      }
      attack_extra_buff += 2 * (era.get(`talent:${attacker.id}:淫壶`) === 2);
      break;
    case part_enum.anal:
      if (defender_part === part_enum.penis) {
        era.add(`exp:${attacker.id}:肛交次数`, 1);
        era.add(`exp:${defender.id}:戳肛门次数`, 1);
        if (!era.get(`cstr:${attacker.id}:初次肛交经历`)) {
          era.set(`cstr:${attacker.id}:初次肛交经历`, [
            `${date}，因 `,
            sys_get_colored_full_callname(attacker.id, defender.id),
            ' 初次领会了臀部的性意义',
          ]);
        }
        attack_extra_buff += 2 * era.get(`talent:${attacker.id}:魔尻`);
        damage.attacker += 20 * era.get(`talent:${defender.id}:凶器`);
        damage = change_cost(defender.id, attacker.id, part_enum.anal, damage);
      }
      attack_extra_buff += 2 * era.get(`talent:${attacker.id}:淫臀`);
      break;
    case part_enum.penis:
      switch (defender_part) {
        case part_enum.mouth:
          era.add(`exp:${defender.id}:口交次数`, 1);
          update_attacking_mouth_exp(date, defender.id, attacker.id);
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:凶器`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:荡唇`);
          break;
        case part_enum.breast:
          era.add(`exp:${attacker.id}:戳身体次数`, 1);
          era.add(`exp:${defender.id}:乳交次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次乳交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次乳交经历`, [
                sys_get_colored_full_callname(defender.id, attacker.id),
                ` 的肉棒会因为胸部兴奋，在 ${date} 被教会了这一点`,
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次乳交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次乳交经历`, [
                `实际上，在 ${date} 之后，胸部已经适应侍弄 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的肉棒了，虽然本人并不知情',
              ]);
            }
          }
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:凶器`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:妖乳`);
          damage = change_cost(
            attacker.id,
            defender.id,
            part_enum.breast,
            damage,
          );
          break;
        case part_enum.hand:
          era.add(`exp:${attacker.id}:戳身体次数`, 1);
          era.add(`exp:${defender.id}:撸管次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次手交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次手交经历`, [
                '手指，果然是最原始也最好用的取乐道具呀，被 ',
                sys_get_colored_full_callname(defender.id, attacker.id),
                ` 在 ${date} 教会了这一点`,
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次手交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次手交经历`, [
                `实际上，在 ${date} 的某一天，手指被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的爱液涂上了色情的气味',
              ]);
            }
          }
          break;
        case part_enum.foot:
          era.add(`exp:${attacker.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次足交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次足交经历`, [
                `在 ${date}，第一次将 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的肉棒踩在了脚下',
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次足交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次足交经历`, [
                '实际上，连足与趾都成了 ',
                sys_get_colored_full_callname(defender.id, attacker.id),
                ` 肉棒的玩物，在 ${date} 之后走路时会觉得寂寞吗`,
              ]);
            }
          }
          break;
        case part_enum.body:
          era.add(`exp:${attacker.id}:戳身体次数`, 1);
          era.add(`exp:${defender.id}:身交次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次身交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次身交经历`, [
                `${date}，是身体第一次被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的肉棒用欲望填满的日子',
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次身交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次身交经历`, [
                `实际上，从 ${date} 起，睡颜，娇喘，无防备的身体，都已成了 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 的肉棒套',
              ]);
            }
          }
          break;
        case part_enum.clitoris:
          era.add(`exp:${attacker.id}:戳阴部次数`, 1);
          era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.virgin:
          era.add(`exp:${attacker.id}:戳阴部次数`, 1);
          era.add(`exp:${defender.id}:性交次数`, 1);
          attacker_virgin_status = era.get(`talent:${attacker.id}:童贞`);
          defender_virgin_status = era.get(`talent:${defender.id}:处女`);
          // 童贞没再生的说法
          // 没干过人的肉棒算失童贞
          if (attacker_virgin_status > 0) {
            era.set(`nowex:${attacker.id}:失贞标记`, 1);
          }
          if (
            // 无自觉非童贞算失童贞
            attacker_virgin_status === vp_status_enum.dont_know ||
            // 真·童贞算失童贞
            attacker_virgin_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${attacker.id}:失去童贞经历`, [
              `在 ${date} ${is_defender_awake ? '' : '偷偷'}将童贞交给了 `,
              sys_get_colored_full_callname(attacker.id, defender.id),
            ]);
            era.set(`talent:${attacker.id}:童贞`, vp_status_enum.no);
          }
          // 有膜的情况下会流血
          if (defender_virgin_status > 0) {
            set_stain(defender.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(attacker.id, defender.id);
            era.set(`nowex:${defender.id}:破处标记`, 1);
          }
          // 睡奸判定
          if (is_defender_awake) {
            if (
              // 因为有再生处女被睡奸成无自觉非处女的蛋疼情况，这里判断破处经历
              !era.get(`cstr:${defender.id}:破处经历`)
            ) {
              era.set(`cstr:${defender.id}:破处经历`, [
                `处女在 ${date} 被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' ',
                penis_desc[get_penis_size(attacker.id)],
                '的肉棒夺走了',
              ]);
            }
            // 都醒着就明牌了
            era.set(`talent:${attacker.id}:童贞`, vp_status_enum.no);
            era.set(`talent:${defender.id}:处女`, vp_status_enum.no);
          } else {
            era.add(`exp:${attacker.id}:阴茎睡奸`, 1);
            era.add(`exp:${defender.id}:阴道被睡奸`, 1);
            // 只有真·处女才能在睡奸情况下破处
            if (defender_virgin_status === vp_status_enum.virgin) {
              era.set(`cstr:${defender.id}:无自觉破处经历`, [
                `实际上，已在 ${date} 被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 夺走',
              ]);
              era.set(`talent:${defender.id}:处女`, vp_status_enum.dont_know);
            } else if (defender_virgin_status === vp_status_enum.i_think) {
              // 俺寻思处女被揭穿了
              era.set(`talent:${defender.id}:处女`, vp_status_enum.no);
            } else if (defender_virgin_status === vp_status_enum.reborn) {
              // 再生处女操成无自觉非处女
              era.set(`talent:${defender.id}:处女`, vp_status_enum.dont_know);
            }
            // 如果被睡奸的是自己且对方是童贞，附加俺寻思童贞情况
            if (
              !defender.id &&
              attacker_virgin_status === vp_status_enum.virgin
            ) {
              era.set(`talent:${attacker.id}:童贞`, vp_status_enum.i_think);
            }
          }
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:凶器`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:名穴`);
          damage = change_cost(
            attacker.id,
            defender.id,
            part_enum.virgin,
            damage,
          );
          break;
        case part_enum.anal:
          era.add(`exp:${attacker.id}:戳肛门次数`, 1);
          era.add(`exp:${defender.id}:肛交次数`, 1);
          if (!era.get(`cstr:${defender.id}:初次肛交经历`)) {
            if (is_defender_awake) {
              era.set(`cstr:${defender.id}:初次肛交经历`, [
                `${date}，初次被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 教会了臀部的性意义',
              ]);
            } else if (!era.get(`cstr:${defender.id}:无自觉初次肛交经历`)) {
              era.set(`cstr:${defender.id}:无自觉初次肛交经历`, [
                `实际上，在 ${date} 被 `,
                sys_get_colored_full_callname(defender.id, attacker.id),
                ' 玩弄过，大概回不去了吧',
              ]);
            }
          }
          attack_extra_buff += 2 * era.get(`talent:${attacker.id}:凶器`);
          damage.attacker += 20 * era.get(`talent:${defender.id}:魔尻`);
          damage = change_cost(
            attacker.id,
            defender.id,
            part_enum.anal,
            damage,
          );
          break;
        default:
          era.add(`exp:${attacker.id}:戳身体次数`, 1);
      }
      // 本身有肉棒的情况，弗隆K+1技巧，弗隆P+2技巧
      if (era.get(`cflag:${attacker.id}:性别`) >= 1) {
        if (era.get(`status:${attacker.id}:弗隆K`)) {
          attack_extra_buff += 1;
        } else if (era.get(`status:${attacker.id}:弗隆P`)) {
          attack_extra_buff += 2;
        }
      }
      break;
    case part_enum.abuse:
      damage.defender = base_damage.sm;
      damage.attacker = base_damage.sm;
      defender_part = part_enum.masochism;
      attacker_cost = defender_cost = action_cost.spirit;
      era.add(`exp:${attacker.id}:责骂次数`, 1);
      era.add(`exp:${defender.id}:被骂次数`, 1);
      update_sm_exp(date, attacker.id, defender.id);
      attack_extra_bonus =
        get_sm_buff(defender.id, true) +
        3 * era.get(`talent:${defender.id}:喜欢责骂`);
      if (era.get(`talent:${attacker.id}:抖S`)) {
        attack_extra_buff += 1;
        attack_extra_bonus += 1;
        damage.attacker *= 4 + get_sm_buff(attacker.id);
      } else {
        damage.attacker *= 1 + get_sm_buff(attacker.id);
      }
      clean_part(new EroParticipant(attacker.id, part_enum.mouth));
      era.set(`tcvar:${attacker.id}:刚刚施虐`, 2);
      era.set(`tcvar:${defender.id}:刚刚受虐`, part_enum.abuse + 100);
      break;
    case part_enum.hit:
      damage.defender = base_damage.sm;
      damage.attacker = base_damage.sm;
      era.add(`exp:${attacker.id}:击打次数`, 1);
      era.add(`exp:${defender.id}:被打次数`, 1);
      update_sm_exp(date, attacker.id, defender.id);
      attack_extra_bonus =
        get_sm_buff(defender.id, true) +
        2 * era.get(`talent:${defender.id}:喜欢痛苦`);
      if (era.get(`talent:${attacker.id}:抖S`)) {
        attack_extra_buff += 1;
        attack_extra_bonus += 1;
        damage.attacker *= 3 + get_sm_buff(attacker.id);
      } else {
        damage.attacker *= 1 + get_sm_buff(attacker.id);
      }
      clean_part(new EroParticipant(attacker.id, part_enum.hand));
      era.set(`tcvar:${attacker.id}:刚刚施虐`, 2);
      era.set(`tcvar:${defender.id}:刚刚受虐`, part_enum.hit + 100);
      break;
    // 道具算作性虐攻击，施虐快感正常累积
    case part_enum.item:
      damage.attacker = base_damage.sm;
      attacker_cost = action_cost.spirit;
      update_sm_exp(date, attacker.id, defender.id);
      // 道具攻击的攻击力由道具属性决定
      if (
        era.get(`tcvar:${defender.id}:${part_touch[defender_part]}接触部位`)
          .item === item
      ) {
        attacker_cost = { stamina: 0, time: 0 };
        damage.attacker = base_damage.self_stay;
        damage.defender = base_damage.item_stay;
      } else {
        damage.defender = base_damage.item;
        clean_part(new EroParticipant(attacker.id, part_enum.hand));
        switch (defender_part) {
          case part_enum.clitoris:
            era.add(`exp:${defender.id}:阴部玩弄次数`, 1);
            break;
          case part_enum.virgin:
            era.add(`exp:${defender.id}:性交次数`, 1);
            break;
          case part_enum.anal:
            era.add(`exp:${defender.id}:肛交次数`, 1);
        }
        if (item !== item_enum.electric_stunner) {
          use_item(defender.id, defender.part, item);
        }
      }
      if (era.get(`talent:${attacker.id}:抖S`)) {
        attack_extra_bonus += 1;
        damage.attacker *= 3 + get_sm_buff(attacker.id);
      } else {
        damage.attacker *= 1 + get_sm_buff(attacker.id);
      }
      era.set(`tcvar:${attacker.id}:刚刚施虐`, 2);
      era.set(`tcvar:${defender.id}:刚刚受虐`, part_enum.item + 100);
  }
  //好色及未经人事无视部位加减技能等级
  attack_extra_buff += era.get(`talent:${attacker.id}:工口意愿`);
  // 失神or眼罩：+10%快感
  if (
    era.get(`tcvar:${defender.id}:失神`) ||
    (!era.get(`tcvar:${defender.id}:脱力`) &&
      !era.get(`status:${defender.id}:马跳Z`) &&
      !era.get(`status:${defender.id}:沉睡`) &&
      era.get(`tequip:${defender.id}:眼罩`) !== -1)
  ) {
    attack_extra_bonus += 0.1;
  }
  if (attacker.part !== part_enum.item) {
    // 技巧加成结算：技巧、技巧buff，加算，每级+20伤害
    // 道具攻击力固定，不参与技巧加成结算
    // attack_extra_buff：特质加成
    damage.defender +=
      20 *
      (era.get(`abl:${attacker.id}:${attacker_skill_part}技巧`) +
        attack_extra_buff);
  }
  // 掌握加成结算：掌握、掌握buff，与技巧乘算，每级增伤20%
  // attack_extra_bonus：特质加成
  damage.defender *=
    1 +
    0.2 * era.get(`abl:${attacker.id}:${part_names[defender_part]}掌握`) +
    attack_extra_bonus;
  // 部位倍率结算
  damage.attacker *= attacker.times;
  damage.defender *= defender.times;
  // 波个动
  const love =
    !attacker.id || !defender.id
      ? era.get(`love:${attacker.id || defender.id}`)
      : 0;
  damage.attacker &&
    (damage.attacker += get_random_delta(damage.attacker, love));
  damage.defender &&
    (damage.defender += get_random_delta(damage.defender, love));
  // 先计算攻击者的快感上升
  const attacker_part =
    attacker.part === part_enum.hand || attacker.part === part_enum.foot
      ? part_enum.sadism
      : attacker.part;
  calc_pleasure(
    attacker.id,
    // 手和脚自己增加的是施虐快感
    attacker_part,
    damage.attacker,
  );
  // 计算攻击者的体力和精力消耗
  const end = [
    { id: attacker.id, part: attacker_part },
    { id: defender.id, part: defender_part },
  ].map((e) => {
    const val = era.get(`abl:${e.id}:${part_names[e.part]}耐性`) || 0;
    return (
      val -
      2 *
        (!era.get(`cflag:${e.id}:性别`) &&
          (era.get(`status:${e.id}:弗隆K`) || era.get(`status:${e.id}:弗隆P`)))
    );
  });
  const attacker_reduce_cost =
      (1 - 0.1 * end[0]) *
      (1 + 0.5 * (era.get(`tcvar:${attacker.id}:余韵`) > 0)) *
      attacker.times,
    defender_reduce_cost =
      (1 - 0.1 * end[1]) *
      (1 + 0.5 * (era.get(`tcvar:${defender.id}:余韵`) > 0)) *
      defender.times *
      (0.75 -
        0.5 *
          (era.get(`tcvar:${defender.id}:脱力`) ||
            era.get(`status:${defender.id}:马跳S`) ||
            era.get(`status:${defender.id}:沉睡`)));
  era.add(
    `nowex:${attacker.id}:体力消耗`,
    attacker_cost.stamina * attacker_reduce_cost,
  );
  era.add(
    `nowex:${attacker.id}:精力消耗`,
    attacker_cost.time * attacker_reduce_cost,
  );
  era.add(
    `nowex:${defender.id}:体力消耗`,
    defender_cost.stamina * defender_reduce_cost,
  );
  era.add(
    `nowex:${defender.id}:精力消耗`,
    defender_cost.time * defender_reduce_cost,
  );
  calc_pleasure(defender.id, defender_part, damage.defender);
  // 攻击者只能拿防御者对应部位的宝珠
  // 对面牛子是不应期，获得宝珠-90%（和快感计算同）
  add_juel(
    attacker.id,
    `${part_names[defender_part]}快感`,
    (damage.defender /
      (defender_part === part_enum.penis &&
      era.get(`tcvar:${defender.id}:不应期`)
        ? 10
        : 1)) *
      attack_juel_reward,
  );
  // 打击和道具攻击额外增加施虐伤害
  if (attacker.part === part_enum.hit || attacker.part === part_enum.item) {
    damage.defender = base_damage.sm;
    damage.defender *=
      1 +
      (era.get(`talent:${defender.id}:喜欢痛苦`) > 0 &&
        (attacker.part === part_enum.hit ||
          item === item_enum.clamps ||
          item === item_enum.electric_stunner)) +
      get_sm_buff(defender.id, true);
    calc_pleasure(
      defender.id,
      part_enum.masochism,
      damage.defender + get_random_delta(damage.defender, love),
      true,
    );
    // 攻击者拿额外的受虐宝珠
    add_juel(
      attacker.id,
      `${part_names[part_enum.masochism]}快感`,
      damage.defender * attack_juel_reward,
    );
  }
  // 如果是打击和电击，只记录施虐关系（打击之后道具不会停留在目标身上）
  if (attacker.part === part_enum.hit || item === item_enum.electric_stunner) {
    merge_stain(attacker, defender);
    change_part(attacker, new EroParticipant(defender.id, part_enum.masochism));
  } else if (
    // 道具停留效果的情况下，只合并污垢
    attacker_cost.time === 0 ||
    // 接触部位有道具的情况下，只合并污垢
    era.get(`tcvar:${attacker.id}:${part_touch[attacker_part]}接触部位`)
      .part === part_enum.item ||
    era.get(`tcvar:${defender.id}:${part_touch[defender_part]}接触部位`)
      .part === part_enum.item
  ) {
    merge_stain(attacker, defender);
  } else {
    // 其他情况记录接触信息
    change_part(attacker, new EroParticipant(defender.id, defender_part), item);
    if (attacker.part === part_enum.item) {
      // 道具攻击额外生成一个受虐接触关系
      change_part(
        attacker,
        new EroParticipant(defender.id, part_enum.masochism),
      );
    }
  }
}

module.exports = sys_do_sex;
