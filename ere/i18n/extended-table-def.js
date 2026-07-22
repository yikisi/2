/**
 * @file i18n 衍生 - 数据表相关
 * 可以理解为辅助 i18n 的工具函数组
 * 不需要任何修改或者翻译（也没有任何可以修改的地方）
 */
const get_titled_content = require('#/i18n/get-titled-content');
const { __, i18n } = require('#/i18n/selector');

const _table_def = {
  tb_abl: {
    /**
     * @param {number} aid
     * @param {number} level
     * @returns {string}
     */
    get_leveled_ability(aid, level) {
      const _ = i18n().tb_abl;
      return _.template
        .replace('%ABL%', _[aid])
        .replace('%LEVEL%', level.toString());
    },
    /**
     * @param {number} aid
     * @param {number} level
     * @returns {string}
     */
    get_abl_desc(aid, level) {
      if (level >= 10) {
        return i18n().abl_desc.abl_ex;
      } else if (level > 5) {
        return i18n().abl_desc.abl_above;
      }
      let prefix;
      let part;
      if (aid <= 19 || aid === 40) {
        prefix = 'atk';
      } else if (aid <= 27) {
        prefix = 'buff';
      } else {
        prefix = 'def';
      }
      switch (aid) {
        case 10:
          part = 'kiss';
          break;
        case 11:
        case 20:
        case 30:
          part = 'mouth';
          break;
        case 12:
        case 21:
        case 31:
          part = 'tit';
          break;
        case 13:
          part = 'hand';
          break;
        case 14:
          part = 'foot';
          break;
        case 15:
        case 22:
        case 32:
          part = 'body';
          break;
        case 23:
        case 33:
          part = 'cli';
          break;
        case 16:
        case 24:
        case 34:
          part = 'vagina';
          break;
        case 17:
        case 25:
        case 35:
          part = 'anal';
          break;
        case 18:
        case 26:
        case 36:
          part = 'penis';
          break;
        case 19:
        case 27:
        case 37:
          part = 'sm';
          break;
        case 40:
          part = 'talk';
      }
      return (
        __(`abl_desc.${prefix}_${part}_lv${level}`) ||
        __(`abl_desc.${prefix}_lv${level}`)
      );
    },
  },
  tb_item: {
    get_name(iid) {
      const _ = i18n().tb_item;
      return _.template.replace('%NAME%', _[iid] || `item.${iid}`);
    },
    notify(iid) {
      return i18n().tb_item.got_template.replace(
        '%INAME%',
        _table_def.tb_item.get_name(iid),
      );
    },
    get_titled_item: (key) =>
      get_titled_content(i18n().tb_item, key, i18n().item_desc, (k) => k),
  },
  tb_mark: {
    get names() {
      const _ = i18n().tb_mark;
      return [_.n_pleasure, _.n_ero, _.n_meek, _.n_pain, _.n_shame, _.n_hate];
    },
    get abbr() {
      const _ = i18n().tb_mark;
      return [_.a_pleasure, _.a_ero, _.a_meek, _.a_pain, _.a_shame, _.a_hate];
    },
    get_mark_with_level_stars(mid, level, full_stars, empty_stars, divider) {
      const _ = i18n().tb_mark;
      return _.get_mark_with_level_stars(
        _.mark_with_level
          .replace('%MARK%', _table_def.tb_mark.names[mid])
          .replace('%LEVEL%', level.toString()),
        full_stars,
        empty_stars,
        divider,
      );
    },
    get_mark_full_name: (mid) =>
      i18n().tb_mark.name_template.replace(
        '%NAME%',
        _table_def.tb_mark.names[mid],
      ),
    get_mark_full_name_with_level: (mid, level) =>
      i18n()
        .tb_mark.mark_with_level.replace(
          '%MARK%',
          _table_def.tb_mark.get_mark_full_name(mid),
        )
        .replace('%LEVEL%', level.toString()),
    get s_titles() {
      const _ = i18n().tb_mark;
      return [
        _.s_t_no,
        _.s_t_milk,
        _.s_t_pregnant,
        _.s_t_worker,
        _.s_t_inherit,
        _.s_t_furniture,
        _.s_t_assistant,
      ];
    },
    get s_options() {
      const _ = i18n().tb_mark;
      return [
        _.s_o_no,
        _.s_o_milk,
        _.s_o_pregnant,
        _.s_o_worker,
        _.s_o_inherit,
        _.s_o_furniture,
        _.s_o_assistant,
      ];
    },
    get s_descriptions() {
      const _ = i18n().tb_mark;
      return [
        _.s_d_no,
        _.s_d_milk,
        _.s_d_pregnant,
        _.s_d_worker,
        _.s_d_inherit,
        _.s_d_furniture,
        _.s_d_assistant,
      ];
    },
    get_titled_slavery() {},
  },
  tb_param: {},
  tb_stain: {
    get names() {
      const _ = i18n().tb_stain;
      return [
        _.n_saliva,
        _.n_chocolate,
        _.n_milk,
        _.n_lubricant,
        _.n_semen,
        _.n_virgin,
        _.n_wound,
        _.n_secretion,
        _.n_anal,
        _.n_dirt,
      ];
    },
  },
  tb_status: {
    get train_buff() {
      const _ = i18n().tb_status;
      return [_.train_debuff, '', _.train_buff_1, _.train_buff_2];
    },
    get_titled_status: (key, ...args) =>
      get_titled_content(
        i18n().tb_status,
        key,
        i18n().status_desc,
        (k) => k,
        ...args,
      ),
  },
  tb_talent: {
    get_titled_talent: (key, ...args) =>
      get_titled_content(
        i18n().tb_talent,
        key,
        i18n().talent_desc,
        (k) => k,
        ...args,
      ),
    get_talent_with_status(tid, status) {
      const _ = i18n().tb_talent;
      return _.shop_template
        .replace('%NAME%', _[tid])
        .replace('%STATUS%', status ? i18n().ui_yes2 : i18n().ui_no2);
    },
  },
};

module.exports = _table_def;
