const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_random_entry } = require('#/utils/list-utils');

const { get_skill_list } = require('#/data/ero/part-const');
const { get_filtered_talents } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(teio, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(this.#kojo, '49', teio, me, callname);
    // TALENTNAME:0 = 情感活动
    era.set('talent:3:0', 1);
    sys_like_chara(3, 0, 20);
    await sys_love_uma_in_event(3);
  }

  async 74(teio, me, callname, stage, extra, ebj) {
    if (
      (await print_title_with_kojo(this.#kojo, '74', teio, me, callname))[0] ===
      1
    ) {
      const temp = get_random_entry(
        get_filtered_talents(teio.sex_code, 60).filter(
          (talent_id) => era.get(`talent:3:${talent_id}`) < 1,
        ),
      );
      if (temp > 0) {
        era.set(`talent:3:${temp}`, 1);
      }
      sys_like_chara(3, 0, 20);
      await sys_love_uma_in_event(3);
    } else {
      // CFLAGNAME:46 = 爱慕暂拒
      era.set('cflag:3:46', 74);
      await punish_rejecting_love(3);
    }
  }

  async 89(teio, me, callname, stage, extra, ebj) {
    const is_hurt = era.get('status:3:腿伤') > 0;
    const ret = await print_title_with_kojo(
      this.#kojo,
      is_hurt ? '89-hurt' : '89',
      teio,
      me,
    );
    if (is_hurt) {
      if (ret[0] === 1) {
        era.set('talent:3:53', 1);
        // ABLNAME:20 - 26 = 口腔掌握 - 阴茎掌握
        for (let aid = 20; aid <= 26; ++aid) {
          era.set(
            `abl:${this.id}:${aid}`,
            Math.min(era.get(`abl:${this.id}:${aid}`) + 1, 5),
          );
        }
      }
    } else if (ret[0] === 1) {
      // TALENTNAME:62 = 淫身
      era.set('talent:3:62', 2);
      get_skill_list(teio.sex_code).forEach((aid) =>
        era.set(`abl:3:${aid}`, Math.min(era.get(`abl:3:${aid}`) + 1, 5)),
      );
    }
    if (ret[0] === 1) {
      sys_like_chara(3, 0, 20);
      await sys_love_uma_in_event(3);
    } else {
      era.set('cflag:3:46', 89);
      await punish_rejecting_love(3);
    }
  }

  async 99(teio, me, callname, stage, extra, ebj) {
    const temp = get_random_entry(
      new Array(8)
        .fill(0)
        .map((_, i) => 70 + i)
        .filter((e) => (e !== 71 && e !== 75) || teio.sex_code !== 1)
        .filter((e) => !era.get(`talent:3:${e}`)),
    );
    const tname = temp > 0 && era.get(`talentname:${temp}`);
    if (
      (await print_title_with_kojo(this.#kojo, '99', teio, me, tname))[0] === 1
    ) {
      if (temp > 0) {
        era.set(`talent:3:${temp}`, 1);
      }
      sys_like_chara(3, 0, 20);
      await sys_love_uma_in_event(3);
    } else {
      era.set('cflag:3:46', 99);
      await punish_rejecting_love(3);
    }
  }
};
