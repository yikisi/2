const era = require('#/era-electron');

const change_cost = require('#/system/ero/sub-calc-ero/change-ero-cost');
const get_random_delta = require('#/system/ero/sub-calc-ero/get-random-delta');
const get_sm_buff = require('#/system/ero/sub-calc-ero/get-sm-buff');
const handle_lost_virginity = require('#/system/ero/sub-calc-ero/handle-lost-virginity');
const {
  update_attacking_mouth_exp,
  update_be_hand_job_exp,
  update_blow_job_exp,
  update_hand_job_exp,
  update_kiss_exp,
  update_sm_exp,
} = require('#/system/ero/sys-calc-ero-exp');
const { use_item } = require('#/system/ero/sys-calc-ero-item');
const {
  change_part,
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const {
  get_bust_delta,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { calc_pleasure } = require('#/system/ero/sys-calc-palam');
const { merge_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_date_obj } = require('#/data/date-indicator');
const {
  action_cost,
  attack_juel_reward,
  base_damage,
} = require('#/data/ero/battle-const');
const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const { item_enum } = require('#/data/ero/item-const');
const { part2jid, part_enum, part_skills } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { vp_status_enum } = require('#/data/ero/status-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {EroParticipant} atk
 * @param {EroParticipant} def
 * @param {number} [item]
 */
function sys_do_sex(atk, def, item) {
  const date = get_date_obj();
  const i_def_awake = sys_check_awake(def.id);
  let dmg = {
    defender: base_damage.base,
    attacker: base_damage.self,
  };
  let atk_s_part = part_skills[atk.part];
  let atk_ex_buff = 0;
  let atk_ex_bonus = 0;
  let def_part = def.part;
  let atk_v_status;
  let def_v_status;
  let atk_cost = action_cost.body;
  let def_cost = action_cost.body;

  switch (atk.part) {
    case part_enum.mouth:
      switch (def_part) {
        case part_enum.mouth:
          atk_s_part = '接吻';
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:获得因子`, 1);
          }
          update_kiss_exp(date, atk.id, def.id, i_def_awake);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:舔吸次数`, 1);
          era.add(`exp:${def.id}:授乳次数`, 1);
          break;
        case part_enum.clitoris:
        case part_enum.virgin:
          era.add(`exp:${atk.id}:口交次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:获得因子`, 1);
          }
          update_blow_job_exp(date, atk.id, def.id);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:口交次数`, 1);
          update_blow_job_exp(date, atk.id, def.id);
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:荡唇`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:凶器`);
          break;
        default:
          era.add(`exp:${atk.id}:舔吸次数`, 1);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:淫口`) === 2);
      set_stain(atk.id, atk.part, stain_enum.saliva);
      break;
    case part_enum.breast:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:授乳次数`, 1);
          era.add(`exp:${def.id}:舔吸次数`, 1);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:乳交次数`, 1);
          era.add(`exp:${def.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${atk.id}:初次乳交经历`)) {
            era.set(`cstr:${atk.id}:初次乳交经历`, { ...date, c: def.id });
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:妖乳`);
          change_cost(def.id, atk.id, part_enum.breast, dmg);
          break;
        default:
          era.add(`exp:${atk.id}:乳交次数`, 1);
      }
      // 淫乳+1技巧
      atk_ex_buff += era.get(`talent:${atk.id}:淫乳`) === 2;
      // B罩杯以下有减成
      // 淫乳+5cm胸围，等效目标部位掌握+1
      atk_ex_bonus = (get_bust_delta(atk.id, true) / 2.5 - 6) / 10;
      // 罩杯尺寸对乳交攻击的加成20%封顶，减成60%封顶
      atk_ex_bonus = atk_ex_bonus > 0.2 ? 0.2 : atk_ex_bonus;
      atk_ex_bonus = atk_ex_bonus < -0.6 ? -0.6 : atk_ex_bonus;
      break;
    case part_enum.hand:
      dmg.attacker = base_damage.sm;
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:摸身体次数`, 1);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:揉乳次数`, 1);
          era.add(`exp:${def.id}:挤奶次数`, 1);
          if (!era.get(`cstr:${def.id}:初次挤奶经历`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:初次挤奶经历`, {
                ...date,
                be: atk.id !== def.id,
                c: atk.id,
              });
            } else if (!era.get(`cstr:${def.id}:无自觉初次挤奶经历`)) {
              era.set(`cstr:${def.id}:无自觉初次挤奶经历`, {
                ...date,
                c: atk.id,
              });
            }
          }
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:撸管次数`, 1);
          era.add(`exp:${def.id}:戳身体次数`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:抠穴次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          break;
        case part_enum.virgin:
          era.add(`exp:${atk.id}:抠穴次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          dmg.attacker += 20 * era.get(`talent:${def.id}:名穴`);
          break;
        case part_enum.anal:
          era.add(`exp:${atk.id}:慰菊次数`, 1);
          dmg.attacker += 20 * era.get(`talent:${def.id}:魔尻`);
          break;
        default:
          era.add(`exp:${atk.id}:摸身体次数`, 1);
      }
      atk_ex_buff += 2 * era.get(`talent:${atk.id}:神之手`);
      dmg.attacker *= 1 + get_sm_buff(atk.id);
      break;
    case part_enum.foot:
      switch (def_part) {
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:踩小穴次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:踩肉棒次数`, 1);
          era.add(`exp:${def.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${atk.id}:初次足交经历`)) {
            era.set(`cstr:${atk.id}:初次足交经历`, { ...date, c: def.id });
          }
          break;
        default:
          era.add(`exp:${atk.id}:踩踏次数`, 1);
      }
      atk_ex_buff += 2 * era.get(`talent:${atk.id}:神之足`);
      break;
    case part_enum.body:
      dmg.attacker /= 2;
      switch (def_part) {
        case part_enum.mouth:
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:身交次数`, 1);
          era.add(`exp:${def.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${atk.id}:初次身交经历`)) {
            era.set(`cstr:${atk.id}:初次身交经历`, { ...date, c: def.id });
          }
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:淫身`) === 2);
      break;
    // 阴蒂有磨镜子和素股两种情况
    case part_enum.clitoris:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:阴部玩弄次数`, 1);
          era.add(`exp:${def.id}:口交次数`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:获得因子`, 1);
          }
          update_blow_job_exp(date, def.id, atk.id);
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:阴部玩弄次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:阴部玩弄次数`, 1);
          era.add(`exp:${def.id}:戳阴部次数`, 1);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:淫核`) === 2);
      break;
    case part_enum.virgin:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:阴部玩弄次数`, 1);
          era.add(`exp:${def.id}:口交次数`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:获得因子`, 1);
          }
          update_attacking_mouth_exp(date, def.id, atk.id);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.hand:
          era.add(`exp:${atk.id}:性交次数`, 1);
          era.add(`exp:${def.id}:抠穴次数`, 1);
          update_be_hand_job_exp(date, def.id, atk.id);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:性交次数`, 1);
          era.add(`exp:${def.id}:戳阴部次数`, 1);
          atk_v_status = era.get(`talent:${atk.id}:处女`);
          def_v_status = era.get(`talent:${def.id}:童贞`);
          // 有膜的情况下会流血
          if (atk_v_status > 0) {
            set_stain(atk.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(def.id, atk.id);
            era.set(`nowex:${atk.id}:破处`, 1);
          }
          if (
            // 无自觉非处女算破处
            atk_v_status === vp_status_enum.dont_know ||
            // 真 · 处女算破处
            atk_v_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${atk.id}:破处经历`, {
              ...date,
              c: def.id,
              penis: get_penis_size(def.id),
              sleep: !i_def_awake,
            });
            era.set(`talent:${atk.id}:处女`, vp_status_enum.no);
          }
          // 没干过人的肉棒算失童贞
          if (def_v_status > 0) {
            era.set(`nowex:${def.id}:失贞`, 1);
          }
          // 判断是不是睡奸
          if (i_def_awake) {
            if (
              // 无自觉非童贞算失童贞
              def_v_status === vp_status_enum.dont_know ||
              // 真 · 童贞算失童贞
              def_v_status === vp_status_enum.virgin
            ) {
              era.set(`cstr:${def.id}:失去童贞经历`, {
                ...date,
                be: true,
                c: atk.id,
              });
            }
            // 都醒着就明牌了
            era.set(`talent:${atk.id}:处女`, vp_status_enum.no);
            era.set(`talent:${def.id}:童贞`, vp_status_enum.no);
          } else {
            era.add(`exp:${atk.id}:阴道睡奸`, 1);
            era.add(`exp:${def.id}:阴茎被睡奸`, 1);
            // 只有真 · 童贞才能在睡奸情况下失去童贞
            if (def_v_status === vp_status_enum.virgin) {
              era.set(`cstr:${def.id}:无自觉失去童贞经历`, {
                ...date,
                c: atk.id,
              });
              era.set(`talent:${def.id}:童贞`, vp_status_enum.dont_know);
            } else if (def_v_status === vp_status_enum.i_think) {
              // 俺寻思童贞会被揭穿
              era.set(`talent:${def.id}:童贞`, vp_status_enum.no);
            }
            // 如果被睡奸的是自己且对方是处女，附加俺寻思处女情况
            if (!def.id && atk_v_status > 0) {
              era.set(`talent:${atk.id}:处女`, vp_status_enum.i_think);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:名穴`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:凶器`);
          dmg = change_cost(def.id, atk.id, part_enum.virgin, dmg);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:淫壶`) === 2);
      break;
    case part_enum.anal:
      if (def_part === part_enum.penis) {
        era.add(`exp:${atk.id}:肛交次数`, 1);
        era.add(`exp:${def.id}:戳肛门次数`, 1);
        if (!era.get(`cstr:${atk.id}:初次肛交经历`)) {
          era.set(`cstr:${atk.id}:初次肛交经历`, { ...date, c: def.id });
        }
        atk_ex_buff += 2 * era.get(`talent:${atk.id}:魔尻`);
        dmg.attacker += 20 * era.get(`talent:${def.id}:凶器`);
        dmg = change_cost(def.id, atk.id, part_enum.anal, dmg);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:淫臀`) === 2);
      break;
    case part_enum.penis:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${def.id}:口交次数`, 1);
          update_attacking_mouth_exp(date, def.id, atk.id);
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:凶器`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:荡唇`);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:戳身体次数`, 1);
          era.add(`exp:${def.id}:乳交次数`, 1);
          if (!era.get(`cstr:${def.id}:初次乳交经历`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:初次乳交经历`, {
                ...date,
                be: true,
                c: atk.id,
              });
            } else if (!era.get(`cstr:${def.id}:无自觉初次乳交经历`)) {
              era.set(`cstr:${def.id}:无自觉初次乳交经历`, {
                ...date,
                c: atk.id,
              });
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:凶器`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:妖乳`);
          dmg = change_cost(atk.id, def.id, part_enum.breast, dmg);
          break;
        case part_enum.hand:
          era.add(`exp:${atk.id}:戳身体次数`, 1);
          era.add(`exp:${def.id}:撸管次数`, 1);
          update_be_hand_job_exp(date, def.id, atk.id);
          break;
        case part_enum.foot:
          era.add(`exp:${atk.id}:戳身体次数`, 1);
          if (!era.get(`cstr:${def.id}:初次足交经历`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:初次足交经历`, { ...date, c: atk.id });
            } else if (!era.get(`cstr:${def.id}:无自觉初次足交经历`)) {
              era.set(`cstr:${def.id}:无自觉初次足交经历`, {
                ...date,
                c: atk.id,
              });
            }
          }
          break;
        case part_enum.body:
          era.add(`exp:${atk.id}:戳身体次数`, 1);
          era.add(`exp:${def.id}:身交次数`, 1);
          if (!era.get(`cstr:${def.id}:初次身交经历`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:初次身交经历`, {
                ...date,
                be: true,
                c: atk.id,
              });
            } else if (!era.get(`cstr:${def.id}:无自觉初次身交经历`)) {
              era.set(`cstr:${def.id}:无自觉初次身交经历`, {
                ...date,
                c: atk.id,
              });
            }
          }
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:戳阴部次数`, 1);
          era.add(`exp:${def.id}:阴部玩弄次数`, 1);
          break;
        case part_enum.virgin:
          era.add(`exp:${atk.id}:戳阴部次数`, 1);
          era.add(`exp:${def.id}:性交次数`, 1);
          atk_v_status = era.get(`talent:${atk.id}:童贞`);
          def_v_status = era.get(`talent:${def.id}:处女`);
          // 童贞没再生的说法
          // 没干过人的肉棒算失童贞
          if (atk_v_status > 0) {
            era.set(`nowex:${atk.id}:失贞`, 1);
          }
          if (
            // 无自觉非童贞算失童贞
            atk_v_status === vp_status_enum.dont_know ||
            // 真 · 童贞算失童贞
            atk_v_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${atk.id}:失去童贞经历`, {
              ...date,
              c: def.id,
              sleep: !i_def_awake,
            });
            era.set(`talent:${atk.id}:童贞`, vp_status_enum.no);
          }
          // 有膜的情况下会流血
          if (def_v_status > 0) {
            set_stain(def.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(atk.id, def.id);
            era.set(`nowex:${def.id}:破处`, 1);
          }
          // 睡奸判定
          if (i_def_awake) {
            if (
              // 因为有再生处女被睡奸成无自觉非处女的蛋疼情况，这里判断破处经历
              !era.get(`cstr:${def.id}:破处经历`)
            ) {
              era.set(`cstr:${def.id}:破处经历`, {
                ...date,
                be: true,
                c: atk.id,
                penis: get_penis_size(atk.id),
              });
            }
            // 都醒着就明牌了
            era.set(`talent:${atk.id}:童贞`, vp_status_enum.no);
            era.set(`talent:${def.id}:处女`, vp_status_enum.no);
          } else {
            era.add(`exp:${atk.id}:阴茎睡奸`, 1);
            era.add(`exp:${def.id}:阴道被睡奸`, 1);
            // 只有真 · 处女才能在睡奸情况下破处
            if (def_v_status === vp_status_enum.virgin) {
              era.set(`cstr:${def.id}:无自觉破处经历`, {
                ...date,
                c: atk.id,
                penis: get_penis_size(atk.id),
              });
              era.set(`talent:${def.id}:处女`, vp_status_enum.dont_know);
            } else if (def_v_status === vp_status_enum.i_think) {
              // 俺寻思处女被揭穿了
              era.set(`talent:${def.id}:处女`, vp_status_enum.no);
            } else if (def_v_status === vp_status_enum.reborn) {
              // 再生处女操成无自觉非处女
              era.set(`talent:${def.id}:处女`, vp_status_enum.dont_know);
            }
            // 如果被睡奸的是自己且对方是童贞，附加俺寻思童贞情况
            if (!def.id && atk_v_status === vp_status_enum.virgin) {
              era.set(`talent:${atk.id}:童贞`, vp_status_enum.i_think);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:凶器`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:名穴`);
          dmg = change_cost(atk.id, def.id, part_enum.virgin, dmg);
          break;
        case part_enum.anal:
          era.add(`exp:${atk.id}:戳肛门次数`, 1);
          era.add(`exp:${def.id}:肛交次数`, 1);
          if (!era.get(`cstr:${def.id}:初次肛交经历`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:初次肛交经历`, {
                ...date,
                be: true,
                c: atk.id,
              });
            } else if (!era.get(`cstr:${def.id}:无自觉初次肛交经历`)) {
              era.set(`cstr:${def.id}:无自觉初次肛交经历`, {
                ...date,
                c: atk.id,
              });
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:凶器`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:魔尻`);
          dmg = change_cost(atk.id, def.id, part_enum.anal, dmg);
          break;
        default:
          era.add(`exp:${atk.id}:戳身体次数`, 1);
      }
      // 本身有肉棒的情况，弗隆K+1技巧，弗隆P+2技巧
      if (era.get(`cflag:${atk.id}:性别`) >= 1) {
        if (era.get(`status:${atk.id}:弗隆K`)) {
          atk_ex_buff += 1;
        } else if (era.get(`status:${atk.id}:弗隆P`)) {
          atk_ex_buff += 2;
        }
      }
      break;
    case part_enum.abuse:
      dmg.defender = base_damage.sm;
      dmg.attacker = base_damage.sm;
      def_part = part_enum.masochism;
      atk_cost = def_cost = action_cost.spirit;
      era.add(`exp:${atk.id}:责骂次数`, 1);
      era.add(`exp:${def.id}:被骂次数`, 1);
      update_sm_exp(date, atk.id, def.id);
      atk_ex_bonus =
        get_sm_buff(def.id, true) + 3 * era.get(`talent:${def.id}:喜欢责骂`);
      if (era.get(`talent:${atk.id}:抖S`)) {
        atk_ex_buff += 1;
        atk_ex_bonus += 1;
        dmg.attacker *= 4 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      clean_part(new EroParticipant(atk.id, part_enum.mouth));
      era.set(`tcvar:${atk.id}:刚刚施虐`, 2);
      era.set(`tcvar:${def.id}:刚刚受虐`, part_enum.abuse + 100);
      break;
    case part_enum.hit:
      dmg.defender = base_damage.sm;
      dmg.attacker = base_damage.sm;
      era.add(`exp:${atk.id}:击打次数`, 1);
      era.add(`exp:${def.id}:被打次数`, 1);
      update_sm_exp(date, atk.id, def.id);
      atk_ex_bonus =
        get_sm_buff(def.id, true) + 2 * era.get(`talent:${def.id}:喜欢痛苦`);
      if (era.get(`talent:${atk.id}:抖S`)) {
        atk_ex_buff += 1;
        atk_ex_bonus += 1;
        dmg.attacker *= 3 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      clean_part(new EroParticipant(atk.id, part_enum.hand));
      era.set(`tcvar:${atk.id}:刚刚施虐`, 2);
      era.set(`tcvar:${def.id}:刚刚受虐`, part_enum.hit + 100);
      break;
    // 道具算作性虐攻击，施虐快感正常累积
    case part_enum.item:
      dmg.attacker = base_damage.sm;
      atk_cost = action_cost.spirit;
      update_sm_exp(date, atk.id, def.id);
      // 道具攻击的攻击力由道具属性决定
      if (new EroTouch(def.id, def_part).item === item) {
        atk_cost = { stamina: 0, time: 0 };
        dmg.attacker = base_damage.self_stay;
        dmg.defender = base_damage.item_stay;
      } else {
        dmg.defender = base_damage.item;
        clean_part(new EroParticipant(atk.id, part_enum.hand));
        switch (def_part) {
          case part_enum.clitoris:
            era.add(`exp:${def.id}:阴部玩弄次数`, 1);
            break;
          case part_enum.virgin:
            era.add(`exp:${def.id}:性交次数`, 1);
            break;
          case part_enum.anal:
            era.add(`exp:${def.id}:肛交次数`, 1);
        }
        if (item !== item_enum.electric_stunner) {
          use_item(def.id, def.part, item);
        }
      }
      if (era.get(`talent:${atk.id}:抖S`)) {
        atk_ex_bonus += 1;
        dmg.attacker *= 3 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      era.set(`tcvar:${atk.id}:刚刚施虐`, 2);
      era.set(`tcvar:${def.id}:刚刚受虐`, part_enum.item + 100);
  }
  //好色及未经人事无视部位加减技能等级
  atk_ex_buff += era.get(`talent:${atk.id}:工口意愿`);
  // 失神or眼罩：+10%快感
  if (
    era.get(`tcvar:${def.id}:失神`) ||
    (!era.get(`tcvar:${def.id}:脱力`) &&
      !era.get(`status:${def.id}:马跳Z`) &&
      !era.get(`status:${def.id}:沉睡`) &&
      era.get(`tequip:${def.id}:眼罩`) !== -1)
  ) {
    atk_ex_bonus += 0.1;
  }
  if (atk.part !== part_enum.item) {
    // 技巧加成结算：技巧、技巧buff，加算，每级+20伤害
    // 道具攻击力固定，不参与技巧加成结算
    // attack_extra_buff：特质加成
    dmg.defender +=
      20 * (era.get(`abl:${atk.id}:${atk_s_part}技巧`) + atk_ex_buff);
  }
  // 掌握加成结算：掌握、掌握buff，与技巧乘算，每级增伤20%
  // attack_extra_bonus：特质加成
  dmg.defender *=
    1 +
    0.2 *
      era.get(
        `abl:${atk.id}:${i18n('zh-CN').tb_param[part2jid[def_part]]}掌握`,
      ) +
    atk_ex_bonus;
  // 部位倍率结算
  dmg.attacker *= atk.times;
  dmg.defender *= def.times;
  // 波个动
  const love = !atk.id || !def.id ? era.get(`love:${atk.id || def.id}`) : 0;
  dmg.attacker && (dmg.attacker += get_random_delta(dmg.attacker, love));
  dmg.defender && (dmg.defender += get_random_delta(dmg.defender, love));
  // 先计算攻击者的快感上升
  // 手和脚自己增加的是施虐快感
  const atk_part =
    atk.part === part_enum.hand || atk.part === part_enum.foot
      ? part_enum.sadism
      : atk.part;
  calc_pleasure(atk.id, atk_part, dmg.attacker);
  // 计算攻击者的体力和精力消耗
  const end = [
    { id: atk.id, part: atk_part },
    { id: def.id, part: def_part },
  ].map((e) => {
    let val =
      era.get(`abl:${e.id}:${i18n('zh-CN').tb_param[part2jid[e.part]]}耐性`) ||
      0;
    if (
      !era.get(`cflag:${e.id}:性别`) &&
      (era.get(`status:${e.id}:弗隆K`) > 0 ||
        era.get(`status:${e.id}:弗隆P`) > 0)
    ) {
      val -= 2;
    }
    return val;
  });
  const atk_cost_down =
    Math.max(1 - 0.1 * end[0], 0.01) *
    (1 + 0.5 * (era.get(`tcvar:${atk.id}:余韵`) > 0)) *
    atk.times;
  const def_cost_down =
    Math.max(1 - 0.1 * end[1], 0.01) *
    (1 + 0.5 * (era.get(`tcvar:${def.id}:余韵`) > 0)) *
    def.times *
    (0.75 -
      0.5 *
        (era.get(`tcvar:${def.id}:脱力`) ||
          era.get(`status:${def.id}:马跳S`) ||
          era.get(`status:${def.id}:沉睡`)));
  if (atk_cost.stamina > 0) {
    era.add(
      `nowex:${atk.id}:体力消耗`,
      Math.max(atk_cost.stamina * atk_cost_down, 1),
    );
  }
  if (atk_cost.time > 0) {
    era.add(
      `nowex:${atk.id}:精力消耗`,
      Math.max(atk_cost.time * atk_cost_down, 1),
    );
  }
  if (def_cost.stamina > 0) {
    era.add(
      `nowex:${def.id}:体力消耗`,
      Math.max(def_cost.stamina * def_cost_down, 1),
    );
  }
  if (def_cost.time > 0) {
    era.add(
      `nowex:${def.id}:精力消耗`,
      Math.max(def_cost.time * def_cost_down, 1),
    );
  }
  calc_pleasure(def.id, def_part, dmg.defender);
  // 攻击者只能拿防御者对应部位的宝珠
  // 对面牛子是不应期，获得宝珠-90%（和快感计算同）
  add_juel(
    atk.id,
    part2jid[def_part],
    (dmg.defender /
      (def_part === part_enum.penis && era.get(`tcvar:${def.id}:不应期`)
        ? 10
        : 1)) *
      attack_juel_reward,
  );
  // 打击和道具攻击额外增加施虐伤害
  if (atk.part === part_enum.hit || atk.part === part_enum.item) {
    dmg.defender = base_damage.sm;
    dmg.defender *=
      1 +
      (era.get(`talent:${def.id}:喜欢痛苦`) > 0 &&
        (atk.part === part_enum.hit ||
          item === item_enum.clamps ||
          item === item_enum.electric_stunner)) +
      get_sm_buff(def.id, true);
    calc_pleasure(
      def.id,
      part_enum.masochism,
      dmg.defender + get_random_delta(dmg.defender, love),
      true,
    );
    // 攻击者拿额外的受虐宝珠
    // JEWELNAME:8 = 受虐快感
    add_juel(atk.id, 8, dmg.defender * attack_juel_reward);
  }

  const atk_touch = new EroTouch(atk.id, atk.part);
  const def_touch = new EroTouch(def.id, def_part);
  if (atk.part <= part_enum.penis && def.part <= part_enum.penis) {
    clean_part_without_item(atk, def);
  }
  // 如果是打击和电击，只记录施虐关系（打击之后道具不会停留在目标身上）
  if (atk.part === part_enum.hit || item === item_enum.electric_stunner) {
    merge_stain(atk, def);
    change_part(atk, new EroParticipant(def.id, part_enum.masochism));
  } else if (
    // 道具停留效果的情况下，只合并污垢
    atk_cost.time === 0 ||
    // 接触部位有道具的情况下，只合并污垢
    atk_touch.part === part_enum.item ||
    def_touch.part === part_enum.item
  ) {
    merge_stain(atk, def);
  } else {
    // 其他情况记录接触信息
    change_part(atk, new EroParticipant(def.id, def_part), item);
    if (atk.part === part_enum.item) {
      // 道具攻击额外生成一个受虐接触关系
      change_part(atk, new EroParticipant(def.id, part_enum.masochism));
    }
  }
  if (atk.part <= part_enum.penis && def.part <= part_enum.penis) {
    if (
      atk_touch.part !== part_enum.item &&
      (atk_touch.owner !== def.id || atk_touch.part !== def.part)
    ) {
      atk_touch.set(def.id, def.part);
    }
    if (
      def_touch.part !== part_enum.item &&
      (def_touch.owner !== atk.id || def_touch.part !== atk.part)
    ) {
      def_touch.set(atk.id, atk.part);
    }
  }
}

module.exports = sys_do_sex;
