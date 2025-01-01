const era = require('#/era-electron');

const { update_juels_from_talent } = require('#/system/ero/sys-calc-juel');
const { update_palam_from_talent } = require('#/system/ero/sys-calc-palam');
const { merge_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /**
   * @param {string} date
   * @param {number} chara_id
   * @param {number} other_id
   */
  update_attacking_mouth_exp(date, chara_id, other_id) {
    if (!era.get(`cstr:${chara_id}:初次口交经历`)) {
      if (sys_check_awake(chara_id)) {
        era.set(`cstr:${chara_id}:初次口交经历`, [
          `在 ${date} 被 `,
          { c: other_id },
          ' 教会了这张嘴的另一种用法',
        ]);
      } else if (!era.get(`cstr:${chara_id}:无自觉初次口交经历`)) {
        era.set(`cstr:${chara_id}:无自觉初次口交经历`, [
          `实际上，早在 ${date} 就初次被 `,
          { c: other_id },
          ' 使用过了',
        ]);
      }
    }
  },
  /**
   * @param {string} date
   * @param {number} chara_id
   * @param {number} other_id
   */
  update_blow_job_exp(date, chara_id, other_id) {
    if (!era.get(`cstr:${chara_id}:初次口交经历`)) {
      era.set(`cstr:${chara_id}:初次口交经历`, [
        `在 ${date} 与 `,
        { c: other_id },
        ' 探索了这张嘴的另一种用法',
      ]);
    }
  },
  /**
   * @param {number} chara_id
   * @param {number} semen
   * @param {number} other_id
   * @param {number} supporter_id
   */
  update_breast_exp(chara_id, semen, other_id, supporter_id) {
    const semen_list = [];
    if (supporter_id) {
      semen_list.push(Math.ceil(semen / 2));
      semen_list.push(semen - semen_list[0]);
      merge_stain(
        new EroParticipant(chara_id, part_enum.penis),
        new EroParticipant(supporter_id, part_enum.breast),
      );
    } else {
      semen_list.push(semen);
    }
    [other_id.toString(), supporter_id]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:胸部沾染精液量`, semen_list[i]);
        update_juels_from_talent(c_id, '浴精成瘾');
        update_palam_from_talent(
          c_id,
          '气味敏感',
          part_enum.breast,
          part_enum.masochism,
        );
      });
  },
  /**
   * @param {string} date
   * @param {number} chara_id
   * @param {number} semen
   * @param {number} other_id
   * @param {number} supporter_id
   */
  update_face_exp(date, chara_id, semen, other_id, supporter_id) {
    const semen_list = [];
    if (supporter_id) {
      semen_list.push(Math.ceil(semen / 2));
      semen_list.push(semen - semen_list[0]);
    } else {
      semen_list.push(semen);
    }
    [other_id.toString(), supporter_id]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:颜射次数`, 1);
        era.add(`exp:${c_id}:颜射精液量`, semen_list[i]);
        if (era.get(`exp:${c_id}:马跳S`) || era.get(`exp:${c_id}:沉睡`)) {
          if (!era.get(`cstr:${c_id}:无自觉初次颜射经历`)) {
            era.set(`cstr:${c_id}:无自觉初次颜射经历`, [
              `实际上，在 ${date} 就盖上了 `,
              { c: chara_id },
              ' 的精液',
            ]);
          }
        } else if (!era.get(`cstr:${c_id}:初次颜射经历`)) {
          era.set(`cstr:${c_id}:初次颜射经历`, [
            `在 ${date} 初次被 `,
            { c: chara_id },
            ' 以精液覆面',
          ]);
        }
        set_stain(c_id, part_enum.mouth, stain_enum.semen);
        set_stain(c_id, part_enum.body, stain_enum.semen);
        update_juels_from_talent(c_id, '浴精成瘾');
        update_palam_from_talent(
          c_id,
          '气味敏感',
          part_enum.mouth,
          part_enum.body,
          part_enum.masochism,
        );
        era.set(`nowex:${c_id}:颜射`, 1);
      });
  },
  /**
   * @param {string} date
   * @param {number} chara_id
   * @param {number} other_id
   */
  update_hand_job_exp(date, chara_id, other_id) {
    if (!era.get(`cstr:${chara_id}:初次手交经历`)) {
      era.set(`cstr:${chara_id}:初次手交经历`, [
        `手指，果然是最原始也最好用的取乐道具呀，在 ${date} `,
        chara_id !== other_id ? '因 ' : '',
        { c: other_id },
        ' 学会了这一点',
      ]);
    }
  },
  /**
   * @param {string} date
   * @param {number} chara_id
   * @param {number} amount
   * @param {string} breast_desc
   * @param {number} other_id
   * @param {number} supporter_id
   */
  update_milk_exp(date, chara_id, amount, breast_desc, other_id, supporter_id) {
    if (!era.get(`cstr:${chara_id}:初次授乳经历`)) {
      era.set(`cstr:${chara_id}:初次授乳经历`, [
        `${date}，第一次让 `,
        { c: other_id },
        ...(supporter_id > 0 ? [' 与 ', { c: supporter_id }] : []),
        ` 品尝了自己那对 ${breast_desc} 乳房中内容物的味道`,
      ]);
    }
    const milk_list = [amount];
    if (supporter_id) {
      const random_val = Math.random();
      let tmp_amount = amount;
      if (random_val < 0.3) {
        tmp_amount = Math.max(1, tmp_amount - 1);
      } else if (random_val > 0.7) {
        tmp_amount += 1;
      }
      milk_list.push(tmp_amount);
      era.add(`nowex:${chara_id}:喷奶量`, tmp_amount);
      era.add(`exp:${chara_id}:喷奶量`, tmp_amount);
      merge_stain(
        new EroParticipant(chara_id, part_enum.breast),
        new EroParticipant(supporter_id, part_enum.mouth),
      );
    }
    const heal_ratio = era.get(`cflag:${chara_id}:种族`) ? 5 : 10;
    [other_id.toString(), supporter_id]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:吸奶量`, milk_list[i]);
        era.add(`nowex:${c_id}:吸奶量`, milk_list[i]);
        const heal = milk_list[i] / heal_ratio;
        era.add(`nowex:${c_id}:体力消耗`, -heal);
        era.add(`base:${c_id}:性欲`, heal);
        if (c_id === '0') {
          era.add(`tcvar:${chara_id}:获得因子`, milk_list[i] / 10);
        } else if (!chara_id) {
          era.add(`tcvar:${c_id}:获得因子`, milk_list[i] / 15);
        }
        if (!era.get(`cstr:${c_id}:初次吸奶经历`)) {
          era.set(`cstr:${c_id}:初次吸奶经历`, [
            `${date}，第一次并非因饥饿而吮吸了 `,
            { c: chara_id },
            ` 那对 ${breast_desc} 的乳房，不知对味道是否满意呢？`,
          ]);
        }
      });
  },
  /**
   * @param {string} date
   * @param {number} attacker_id
   * @param {number} defender_id
   */
  update_sm_exp(date, attacker_id, defender_id) {
    if (!era.get(`cstr:${attacker_id}:初次施虐经历`)) {
      era.set(`cstr:${attacker_id}:初次施虐经历`, [
        `在 ${date} 初次虐待了 `,
        { c: defender_id },
      ]);
    }
    if (!era.get(`cstr:${defender_id}:初次受虐经历`)) {
      era.set(`cstr:${defender_id}:初次受虐经历`, [
        `在 ${date} 初次被 `,
        { c: attacker_id },
        ' 虐待',
      ]);
    }
  },
};
