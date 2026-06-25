const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

const { __, i18n } = require('#/i18n/selector');

class CharaTalk {
  /** @type {CharaTalk} */
  static me;
  /** @type {function(number,number?)} */
  static init_chara;

  /** @type {number} */
  id;

  /**
   * 输出一句路人的台词
   * @param {string} name
   * @param {TextContent} _content
   * @param {boolean} [mental]
   */
  static say_by_passer_by(name, _content, mental = false) {
    const content = [
      {
        content: name,
        fontWeight: 'bold',
      },
      mental ? i18n().tk_think_border[0] : i18n().tk_speak_border[0],
    ];
    if (Array.isArray(_content)) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(
      mental ? i18n().tk_think_border[1] : i18n().tk_speak_border[1],
    );
    era.print(content, { color: 'white' });
  }

  /**
   * 输出一句路人的台词并等待
   * @param {string} name
   * @param {TextContent} _content
   * @param {boolean} [mental]
   */
  static async say_by_passer_by_and_wait(name, _content, mental = false) {
    CharaTalk.say_by_passer_by(name, _content, mental);
    await era.waitAnyKey();
  }

  say_as_passer_by = CharaTalk.say_by_passer_by;

  say_as_passer_by_and_wait = CharaTalk.say_by_passer_by_and_wait;

  /**
   * @param {number} id
   * @param {string} [color]
   */
  constructor(id, color) {
    this.id = id;
    this._color = color;
  }

  /** @returns {string} */
  get actual_name() {
    const n = era.get(`callname:${this.id}:-1`);
    return __(`name.${n}`, n);
  }

  /** @return {string} */
  get color() {
    return this._color || get_chara_color(this.id);
  }

  /** @return {string} */
  get full_name() {
    if (this.actual_name === this.name) {
      return this.name;
    } else {
      return i18n()
        .name.full_name_template.replace('%NAME%', this.name)
        .replace('%CHARA_ACTUAL%', this.actual_name);
    }
  }

  /** @returns {string} */
  get name() {
    const n = this._name || era.get(`callname:${this.id}:-2`);
    return __(`name.${n}`, n);
  }

  /** @param {string} v */
  set name(v) {
    this._name = v;
  }

  /**
   * 角色的人称代词
   * @returns {string}
   */
  get sex() {
    return this.sex_code === 1 ? i18n().name.he : i18n().name.she;
  }

  /** @returns {number} */
  get sex_code() {
    // CFLAGNAME:0 = 性别
    return era.get(`cflag:${this.id}:0`);
  }

  get adult_sex_title() {
    return this.sex_code === 1 ? i18n().name.mr : i18n().name.miss;
  }

  get actual_name_with_title() {
    return (
      this.sex_code ? i18n().name.sir_template : i18n().name.madam_template
    ).replace('%NAME%', this.actual_name);
  }

  // 以角色为首的复数形式人称代词
  get couple_title() {
    if (!this.id) {
      return i18n().name.you_mul;
    }
    if (this.sex_code !== 1) {
      return i18n().name.she_mul;
    }
    return i18n().name.he_mul;
  }

  get elder_sibling_sex_title() {
    return this.sex_code === 1
      ? i18n().name.elder_brother
      : i18n().name.elder_sister;
  }

  get younger_sibling_sex_title() {
    return this.sex_code === 1
      ? i18n().name.younger_brother
      : i18n().name.younger_sister;
  }

  get phy_sex_title() {
    return this.sex_code === 1 ? i18n().name.male : i18n().name.female;
  }

  get siblings_sex_title() {
    return this.sex_code === 1 ? i18n().name.brothers : i18n().name.sisters;
  }

  get child_sex_title() {
    return this.sex_code === 1 ? i18n().name.boy : i18n().name.girl;
  }

  get teen_sex_title() {
    return this.sex_code === 1 ? i18n().name.teenager : i18n().name.frail;
  }

  get uma_sex_title() {
    return this.sex_code === 1 ? i18n().name.uma_boy : i18n().name.uma_girl;
  }

  /** 性奴角色的称呼 */
  get sex_slave_title() {
    return this.sex_code === 1
      ? i18n().detail.exp_sm_sex_title_1
      : i18n().detail.exp_sm_sex_title_0;
  }

  /** @returns {number} */
  get race() {
    // CFLAGNAME:1 = 种族
    return era.get(`cflag:${this.id}:1`);
  }

  /** @returns {PrintedSpan} */
  get_colored_actual_name() {
    return {
      color: this.color,
      content: this.actual_name,
      fontWeight: 'bold',
    };
  }

  /** @returns {PrintedSpan} */
  get_colored_full_name() {
    return {
      color: this.color,
      content: this.full_name,
      fontWeight: 'bold',
    };
  }

  /**
   * 返回一个可以在isList模式下的print系指令中使用的content对象
   * @returns {PrintedSpan}
   */
  get_colored_name() {
    return {
      color: this.color,
      content: this.name,
      fontWeight: 'bold',
    };
  }

  /** @returns {PrintedSpan} */
  get_colored_sex() {
    return {
      color: this.color,
      content: this.sex,
      fontWeight: 'bold',
    };
  }

  /**
   * 事件从该角色视角展开时的旁白
   * @param {TextContent} _content
   */
  print(_content) {
    era.print(_content, { color: this.color });
  }

  /**
   * 事件从该角色视角展开时的旁白，在输出后会等待玩家按任意键的版本
   * @param {TextContent} content
   */
  async print_and_wait(content) {
    this.print(content);
    await era.waitAnyKey();
  }

  /**
   * 输出一句该角色的台词
   * @param {TextContent} _content
   * @param {boolean} [mental]
   */
  say(_content, mental = false) {
    const content = [
      this.id ? this.get_colored_name() : '',
      mental ? i18n().tk_think_border[0] : i18n().tk_speak_border[0],
    ];
    if (Array.isArray(_content)) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(
      mental ? i18n().tk_think_border[1] : i18n().tk_speak_border[1],
    );
    era.print(content, { color: this.color });
  }

  /**
   * 输出一句该角色的台词，在输出后会等待玩家按任意键的版本
   * @param {TextContent} _content
   * @param {boolean} mental
   */
  async say_and_wait(_content, mental = false) {
    this.say(_content, mental);
    await era.waitAnyKey();
  }

  /**
   * 以未知名输出一句该角色的台词
   * @param {TextContent} _content
   */
  say_as_unknown(_content) {
    const content = [
      {
        color: this.color,
        content: i18n().tk_unknown,
        fontWeight: 'bold',
      },
      i18n().tk_speak_border[0],
    ];
    if (Array.isArray(_content)) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(i18n().tk_speak_border[1]);
    era.print(content, { color: this.color });
  }

  /**
   * 以未知名输出一句该角色的台词并等待
   * @param {TextContent} _content
   */
  async say_as_unknown_and_wait(_content) {
    this.say_as_unknown(_content);
    await era.waitAnyKey();
  }

  /**
   * 输出一句该角色在回忆中的台词
   * @param {TextContent} _content
   * @param {boolean} [is_unknown=false]
   */
  used_to_say(_content, is_unknown = false) {
    const content = [];
    content.push(i18n().tk_past_border[0]);
    if (this.id) {
      content.push({
        content: is_unknown ? i18n().tk_unknown : this.name,
        fontWeight: 'bold',
      });
    }
    content.push(i18n().tk_speak_border[0]);
    if (Array.isArray(_content)) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(i18n().tk_speak_border[1]);
    content.push(i18n().tk_past_border[1]);
    era.print(content, { color: this.color });
  }

  /**
   * 输出一句该角色在回忆中的台词，在输出后会等待玩家按任意键的版本
   * @param {TextContent} content
   * @param {boolean} [is_unknown=false]
   */
  async used_to_say_and_wait(content, is_unknown = false) {
    this.used_to_say(content, is_unknown);
    await era.waitAnyKey();
  }
}

module.exports = CharaTalk;
