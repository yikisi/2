/**
 * @file i18n 衍生 - 角色相关
 * 可以理解为辅助 i18n 的工具函数组
 * 不需要任何修改或者翻译（也没有任何可以修改的地方）
 */
const { __, i18n } = require('#/i18n/selector');

const _chara_def = {
  name: {
    /**
     * @param {string} name
     * @param {number} sex
     * @returns {string}
     */
    get_name_with_adult_title(name, sex) {
      switch (sex) {
        case 0:
        case 10:
          return i18n().name.madam_template.replace('%NAME%', name);
        case 1:
          return i18n().name.sir_template.replace('%NAME%', name);
      }
      return name;
    },
    check_duplicate(name, check) {
      const _ = i18n().name;
      if (typeof check === 'string') {
        return _.duplicate_template
          .replace('%NAME%', name)
          .replace('%LAN%', check);
      }
      return _.duplicate_template2.replace('%NAME%', name);
    },
  },
  feature: {
    get types() {
      const _ = i18n().feature;
      return [
        _.n_hair_color,
        _.n_ahoge_hair,
        _.n_front_hair,
        _.n_back_hair,
        _.n_skin_color,
        _.n_armpit_hair,
        _.n_pubic_hair,
        _.n_sex_organ_color,
      ];
    },
    /**
     * @param {number} sex
     * @param {number} race
     * @returns {string}
     */
    get_sex_title(sex, race) {
      return __(`feature.${race > 0 ? 'u_sex' : 'h_sex'}_${sex}`);
    },
    /**
     * @param {number} growth
     * @param {number} race
     * @returns {string}
     */
    get_growth(growth, race) {
      if (growth > 2) {
        growth = 2;
      }
      return __(`feature.${race > 0 ? 'u_age' : 'h_age'}_${growth}`);
    },
    get n_skin() {
      const _ = i18n().feature;
      return [_.skin_0, _.skin_1, _.skin_2, _.skin_3];
    },
    get n_body_hair_talent() {
      const _ = i18n().feature;
      return [_.body_hair_talent_0, _.body_hair_talent_1, _.body_hair_talent_2];
    },
    get_body_hair_desc(body_hair, talent) {
      let ret = __(`feature.body_hair_${body_hair}`);
      if (talent === 2) {
        ret += i18n().ui_comma + i18n().feature.body_hair_talent_suffix;
      }
      return ret;
    },
    get n_c_sex_organ() {
      const _ = i18n().feature;
      return [_.p_color_0, _.p_color_1, _.p_color_2];
    },
    get_breast_desc(cup) {
      return __(`feature.breast_${cup}`, i18n().feature.breast_G);
    },
    get n_penis() {
      const _ = i18n().feature;
      return ['', _.penis_1, _.penis_2, _.penis_3, _.penis_4, _.penis_5];
    },
    get_hair_color: (hc) =>
      i18n().feature.hair_color_template.replace(
        '%COLOR%',
        __(`feature.hc_${hc}`),
      ),
    get_body_hair_color: (bhc) =>
      i18n().feature.uma_hair_color_template.replace(
        '%COLOR%',
        __(`feature.hc_${bhc}`),
      ),
    get_ahoge_hair: (th) =>
      !th || th === 'none'
        ? ''
        : i18n().feature.ahoge_hair_template.replace(
            '%LONG%',
            __(`feature.th_${th}`),
          ),
    get_chara_info(chara) {
      const name = __(`feature.chara_${chara}`);
      return {
        content: name,
        title: i18n()
          .feature.chara_template.replace('%NAME%', name)
          .replace('%DESC%', __(`feature.chara_${chara}_desc`)),
      };
    },
  },
  detail: {
    get_mouth_poisoned(poisoned) {
      const _ = i18n().detail;
      switch (poisoned) {
        case 1:
          return _.exp_mouth_poisoned_sens;
        case 2:
          return _.exp_mouth_poisoned_meek;
        case 3:
          return _.exp_mouth_poisoned_both;
      }
    },
    get nipple_type() {
      const _ = i18n().detail;
      return [
        _.exp_breast_nipple_pink,
        _.exp_breast_nipple_deep,
        _.exp_breast_nipple_inverted,
      ];
    },
    get_body_poisoned(poisoned) {
      const _ = i18n().detail;
      switch (poisoned) {
        case 1:
          return _.exp_body_poisoned_sens;
        case 2:
          return _.exp_body_poisoned_meek;
        case 3:
          return _.exp_body_poisoned_both;
      }
    },
    get vagina_color() {
      const _ = i18n().detail;
      return [_.exp_vagina_pink, _.exp_vagina_purple, _.exp_vagina_deep];
    },
    get_vagina_poisoned(poisoned) {
      const _ = i18n().detail;
      switch (poisoned) {
        case 1:
          return _.exp_vagina_poisoned_sens;
        case 2:
          return _.exp_vagina_poisoned_meek;
        case 3:
          return _.exp_vagina_poisoned_both;
      }
    },
    get pregnant_stage() {
      const _ = i18n().detail;
      return {
        [1 << 0]: _.exp_vagina_pregnant_desc_resume,
        [1 << 1]: _.exp_vagina_pregnant_desc_no,
        [1 << 2]: _.exp_vagina_pregnant_desc_embryo,
        [1 << 3]: _.exp_vagina_pregnant_desc_fetal,
        [1 << 4]: _.exp_vagina_pregnant_desc_late,
        [1 << 5]: _.exp_vagina_pregnant_desc_pre_birth,
      };
    },
    get_anal_poisoned(poisoned) {
      const _ = i18n().detail;
      switch (poisoned) {
        case 1:
          return _.exp_anal_poisoned_sens;
        case 2:
          return _.exp_anal_poisoned_meek;
        case 3:
          return _.exp_anal_poisoned_both;
      }
    },
    get_machoism_poisoned(poisoned) {
      const _ = i18n().detail;
      switch (poisoned) {
        case 1:
          return _.exp_sm_machoism_abuse_talent_template;
        case 2:
          return _.exp_sm_machoism_hit_talent_template;
        case 3:
          return _.exp_sm_machoism_all_talent_template;
      }
    },
  },
};

module.exports = _chara_def;
