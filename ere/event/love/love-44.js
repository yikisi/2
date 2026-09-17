const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { fill_moho_in_dict } = require('#/event/snippets/104400');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return fill_moho_in_dict(
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  async 49(sweep, me, callname, stage, extra, ebj) {
    let dict = this.#dict;
    const { update: ret } = await print_title_with_kojo(
      this.#kojo,
      '49',
      sweep,
      this.#dict,
    );
    if (ret === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      const sky = get_chara_talk(20);
      const ines = get_chara_talk(31);
      const curren = get_chara_talk(38);
      const zob_zoy = get_chara_talk(47);
      const urara = get_chara_talk(52);
      const kitaru = get_chara_talk(56);
      const nature = get_chara_talk(60);
      dict = {
        SKY: sky.name,
        COLOR_20: sky.color,
        INES: ines.name,
        COLOR_31: ines.color,
        CURREN: curren.name,
        COLOR_38: curren.color,
        ZOB_ZOY: zob_zoy.name,
        COLOR_47: zob_zoy.color,
        URARA: urara.name,
        COLOR_52: urara.color,
        KITARU: kitaru.name,
        COLOR_56: kitaru.color,
        NATURE: nature.name,
        COLOR_60: nature.color,
        come: {},
        INFO_COUNT: '0',
        ...dict,
      };
      let r;
      while (r !== 7) {
        r = (await this.#kojo['49_reject'](dict))[0];
        if (r !== 7) {
          dict.come[r] = 1;
          dict.INFO_COUNT = (Number(dict.INFO_COUNT) + 1).toString();
        }
      }
      if (sys_like_chara(this.id, 0, 100)) {
        await era.waitAnyKey();
      }
      era.set(`cflag:${this.id}:爱慕暂拒`, 49);
    }
  }

  async 74(sweep, me, callname, stage, extra, ebj) {
    const dict = this.#dict;
    const { update: ret } = await print_title_with_kojo(
      this.#kojo,
      '74',
      sweep,
      dict,
    );
    if (ret === 1) {
      const check_in_ero = () => {
        const cit = era.getCharactersInTrain();
        return Array.isArray(cit) && cit.includes(0);
      };

      const safely_sex = async (p1, p2) => {
        if (!check_in_ero()) {
          begin_and_init_ero(0, this.id);
        }
        await quick_make_love(
          new EroParticipant(0, p1),
          new EroParticipant(this.id, p2),
          false,
        );
      };

      let r;
      while (r !== 5) {
        r = (await this.#kojo['74_accept_pet'](dict))[0];
        switch (r) {
          case 2:
            await safely_sex(part_enum.hand, part_enum.breast);
            break;
          case 3:
            await safely_sex(part_enum.hand, part_enum.body);
            break;
          case 4:
            await safely_sex(part_enum.hand, part_enum.virgin);
        }
      }
      if (check_in_ero()) {
        end_ero_and_train();
      }
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
    }
  }

  async 89(sweep, me, callname, stage, extra, ebj) {
    const dict = this.#dict;
    if (era.get(`cflag:${this.id}:育成回合计时`) < 95 + 25) {
      await this.#kojo['89_disabled'](dict);
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
      return;
    }
    await print_title_with_kojo(this.#kojo, '89', sweep, dict);
    let r;
    while (r !== 3) {
      r = (await this.#kojo['89_loop'](dict))[0];
    }
    const { update: ret } = await this.#kojo['89_marry'](dict);
    if (ret === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      if (ret === 2) {
        if (sys_like_chara(this.id, 0, 100)) {
          await era.waitAnyKey();
        }
      }
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
    }
  }

  /** @param {CharaTalk} sweep */
  async get_cuckold(sweep) {
    await print_title_with_kojo(this.#kojo, 'get_cuckold', sweep, this.#dict);
    era.set(`talent:${this.id}:绿帽癖`, 1);
  }
};
