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
   * @param {number} cid
   * @param {number} oid
   */
  update_attacking_mouth_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:初次口交经历`)) {
      if (sys_check_awake(cid)) {
        era.set(`cstr:${cid}:初次口交经历`, [
          `在 ${date} 被 `,
          { c: oid },
          ' 教会了这张嘴的另一种用法',
        ]);
      } else if (!era.get(`cstr:${cid}:无自觉初次口交经历`)) {
        era.set(`cstr:${cid}:无自觉初次口交经历`, [
          `实际上，早在 ${date} 就初次被 `,
          { c: oid },
          ' 使用过了',
        ]);
      }
    }
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} oid
   */
  update_blow_job_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:初次口交经历`)) {
      era.set(`cstr:${cid}:初次口交经历`, [
        `在 ${date} 与 `,
        { c: oid },
        ' 探索了这张嘴的另一种用法',
      ]);
    }
  },
  /**
   * @param {number} cid
   * @param {number} semen
   * @param {number} oid
   * @param {number} sid
   */
  update_breast_exp(cid, semen, oid, sid = 0) {
    const semen_list = [];
    if (sid) {
      semen_list.push(Math.ceil(semen / 2));
      semen_list.push(semen - semen_list[0]);
      merge_stain(
        new EroParticipant(cid, part_enum.penis),
        new EroParticipant(sid, part_enum.breast),
      );
    } else {
      semen_list.push(semen);
    }
    [oid.toString(), sid]
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
   * @param {number} cid
   * @param {number} semen
   * @param {number} oid
   * @param {number} sid=0
   */
  update_face_exp(date, cid, semen, oid, sid = 0) {
    const semen_list = [semen];
    if (sid > 0) {
      semen_list[0] = Math.ceil(semen / 2);
      semen_list.push(semen - semen_list[0]);
    }
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:颜射次数`, 1);
        era.add(`exp:${c_id}:颜射精液量`, semen_list[i]);
        if (!era.get(`cstr:${c_id}:初次颜射经历`)) {
          if (sys_check_awake(c_id)) {
            era.set(`cstr:${c_id}:初次颜射经历`, [
              `在 ${date} 初次被 `,
              { c: cid },
              ' 以精液覆面',
            ]);
          } else if (!era.get(`cstr:${c_id}:无自觉初次颜射经历`)) {
            era.set(`cstr:${c_id}:无自觉初次颜射经历`, [
              `实际上，在 ${date} 就盖上了 `,
              { c: cid },
              ' 的精液',
            ]);
          }
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
   * @param {number} cid
   * @param {number} oid
   */
  update_hand_job_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:初次手交经历`)) {
      era.set(`cstr:${cid}:初次手交经历`, [
        `手指，果然是最原始也最好用的取乐道具呀，在 ${date} `,
        cid !== oid ? '因 ' : '',
        { c: oid },
        ' 学会了这一点',
      ]);
    }
  },
  update_kiss_exp(date, aid, did, i_def_awake = true) {
    if (!era.get(`cstr:${aid}:初吻经历`)) {
      era.set(`cstr:${aid}:初吻经历`, [`初吻在 ${date} 献给了 `, { c: did }]);
    }
    if (!era.get(`cstr:${did}:初吻经历`)) {
      if (i_def_awake) {
        era.set(`cstr:${did}:初吻经历`, [`初吻在 ${date} 献给了 `, { c: aid }]);
      } else if (!era.get(`cstr:${did}:无自觉初吻经历`)) {
        era.set(`cstr:${did}:无自觉初吻经历`, [
          `实际上，初吻在 ${date} 就已被 `,
          { c: aid },
          ' 夺走',
        ]);
      }
    }
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} amount
   * @param {string} breast_desc
   * @param {number} oid
   * @param {number} sid
   */
  update_milk_exp(date, cid, amount, breast_desc, oid, sid) {
    if (!era.get(`cstr:${cid}:初次授乳经历`)) {
      era.set(`cstr:${cid}:初次授乳经历`, [
        `${date}，让 `,
        { c: oid },
        ...(sid > 0 ? [' 与 ', { c: sid }] : []),
        ` 第一次品尝了自己那对 ${breast_desc} 乳房中内容物的味道`,
      ]);
    }
    const milk_list = [amount];
    if (sid > 0) {
      const total = Math.ceil(amount * 1.2);
      milk_list[0] = Math.ceil(total / 2);
      milk_list.push(total - milk_list[0]);
      era.add(`nowex:${cid}:喷奶量`, total - amount);
      era.add(`exp:${cid}:喷奶量`, total - amount);
      merge_stain(
        new EroParticipant(cid, part_enum.breast),
        new EroParticipant(sid, part_enum.mouth),
      );
    }
    const heal_ratio = era.get(`cflag:${cid}:种族`) ? 5 : 10;
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:吸奶量`, milk_list[i]);
        era.add(`nowex:${c_id}:吸奶量`, milk_list[i]);
        const heal = milk_list[i] / heal_ratio;
        era.add(`nowex:${c_id}:体力消耗`, -heal);
        era.add(`base:${c_id}:性欲`, heal);
        if (c_id === '0') {
          era.add(`tcvar:${cid}:获得因子`, milk_list[i] / 10);
        } else if (!cid) {
          era.add(`tcvar:${c_id}:获得因子`, milk_list[i] / 15);
        }
        if (!era.get(`cstr:${c_id}:初次吸奶经历`)) {
          era.set(`cstr:${c_id}:初次吸奶经历`, [
            `${date}，第一次并非因饥饿而吮吸了 `,
            { c: cid },
            ' 那对',
            breast_desc,
            '的乳房，不知对味道是否满意呢？',
          ]);
        }
      });
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} amount
   * @param {number} oid
   * @param {number} sid
   */
  update_secretion_exp(date, cid, amount, oid, sid) {
    const amount_list = [amount];
    if (sid > 0) {
      amount_list[0] = Math.ceil(amount / 2);
      amount_list.push(amount - amount_list[0]);
    }
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((id, i) => {
        set_stain(id, part_enum.mouth, stain_enum.secretion);
        era.add(`nowex:${id}:饮爱液量`, amount_list[i]);
        if (id === '0') {
          era.add(`tcvar:${cid}:获得因子`, amount_list[i] / 10);
        } else if (!cid) {
          era.add(`tcvar:${id}:获得因子`, amount_list[i] / 15);
        }
        if (!era.get(`cstr:${id}:初次饮爱液经历`)) {
          if (sys_check_awake(id)) {
            era.set(`cstr:${id}:初次饮爱液经历`, [
              date,
              '，从 ',
              { c: cid },
              ' 的樱穴中第一次采饮了欢愉的蜜液',
            ]);
          } else if (!era.get(`cstr:${id}:无自觉初次饮爱液经历`)) {
            era.set(`cstr:${id}:无自觉初次饮爱液经历`, [
              '实际上，在 ',
              date,
              ' 就被喂食了 ',
              { c: cid },
              ' 的淫液',
            ]);
          }
        }
      });
  },
  /**
   * @param {string} date
   * @param {number} attacker
   * @param {number} defender
   */
  update_sm_exp(date, attacker, defender) {
    if (!era.get(`cstr:${attacker}:初次施虐经历`)) {
      era.set(`cstr:${attacker}:初次施虐经历`, [
        `在 ${date} 初次虐待了 `,
        { c: defender },
      ]);
    }
    if (!era.get(`cstr:${defender}:初次受虐经历`)) {
      era.set(`cstr:${defender}:初次受虐经历`, [
        `在 ${date} 初次被 `,
        { c: attacker },
        ' 虐待',
      ]);
    }
  },
};
