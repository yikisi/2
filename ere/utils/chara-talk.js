const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

class CharaTalk {
  /** @type {CharaTalk} */
  static me;
  /** @type {number} */
  id;
  /** @type {string} */
  name;
  /** @type {string} */
  actual_name;
  /** @type {string} */
  color;
  /**
   * 角色的人称代词
   * @type {string}
   */
  sex;
  /** @type {number} */
  sex_code;

  /**
   * 输出一句路人的台词
   *
   * @param {string} name
   * @param {string|({content:string,[color]:string}|string)[]} _content
   * @param {boolean} [mental]
   */
  static say_by_passer_by(name, _content, mental) {
    const content = [
      {
        content: name,
        fontWeight: 'bold',
      },
      mental ? '（' : '「',
    ];
    if (_content instanceof Array) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(mental ? '）' : '」');
    era.print(content);
  }

  /**
   * 输出一句路人的台词并等待
   *
   * @param {string} name
   * @param {string|({content:string,[color]:string}|string)[]} _content
   * @param {boolean} [mental]
   */
  static async say_by_passer_by_and_wait(name, _content, mental) {
    CharaTalk.say_by_passer_by(name, _content, mental);
    await era.waitAnyKey();
  }

  /**
   * @param {number} id
   * @param {string} [color]
   */
  constructor(id, color) {
    this.id = id;
    this.name = era.get(`callname:${id}:-2`);
    if (this.name === '-') {
      require('#/system/sys-init-chara').init_chara(id);
      this.name = era.get(`callname:${id}:-2`);
    }
    this.actual_name = era.get(`callname:${id}:-1`);
    this.color = color || get_chara_color(id);
    if (!this.color) {
      const id_color = this.id.toString(9).padStart(3, '0');
      this.color = `#${[id_color[0], id_color[1], id_color[2]]
        .map((e) => (0xff - Number(e) * 16).toString(16).padStart(2, '0'))
        .join('')}`;
    }
    this.sex_code = era.get(`cflag:${this.id}:性别`);
    this.sex = this.sex_code - 1 ? '她' : '他';
  }

  get_colored_actual_name() {
    return {
      color: this.color,
      content: this.actual_name,
      fontWeight: 'bold',
    };
  }

  /** 返回一个可以在isList模式下的print系指令中使用的content对象 */
  get_colored_name() {
    return {
      color: this.color,
      content: this.name,
      fontWeight: 'bold',
    };
  }

  get_colored_full_name() {
    return {
      color: this.color,
      content: this.get_full_name(),
      fontWeight: 'bold',
    };
  }

  get_colored_sex() {
    return {
      color: this.color,
      content: this.sex,
      fontWeight: 'bold',
    };
  }

  get_full_name = () =>
    this.actual_name === this.name
      ? this.name
      : `${this.name} (${this.actual_name})`;

  /** 成人角色的称呼 */
  get_adult_sex_title = () => (this.sex_code - 1 ? '小姐' : '先生');

  /** 婴儿角色的称呼 */
  get_baby_sex_title = () => (this.sex_code - 1 ? '女婴' : '男婴');

  /** 孩童角色的称呼 */
  get_child_sex_title = () => (this.sex_code - 1 ? '女孩' : '男孩');

  // 以角色为首的复数形式人称代词
  get_couple_title = () => (this.name === '你' ? '你们' : `${this.sex}们`);

  /** 角色生理性别的称呼 */
  get_phy_sex_title = () => (this.sex_code - 1 ? '女性' : '男性');

  /** 性奴角色的称呼 */
  get_sex_slave_title = () => (this.sex_code - 1 ? '母马' : '公马');

  /** 青少年角色的称呼 */
  get_teen_sex_title = () => (this.sex_code - 1 ? '少女' : '少年');

  /** UMA角色的称呼 */
  get_uma_sex_title = () => (this.sex_code - 1 ? '马娘' : '马郎');

  /**
   * 事件从该角色视角展开时的旁白
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   */
  print(_content) {
    era.print(_content, { color: this.color });
  }

  /**
   * 事件从该角色视角展开时的旁白，在输出后会等待玩家按任意键的版本
   *
   * @param {string|({content:string,[color]:string}|string)[]} content
   * @returns {Promise<void>}
   */
  async print_and_wait(content) {
    this.print(content);
    await era.waitAnyKey();
  }

  /**
   * 输出一句该角色的台词
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   * @param {boolean} [mental]
   */
  say(_content, mental) {
    const content = [
      this.id ? this.get_colored_name() : '',
      `${mental ? '（' : '「'}`,
    ];
    if (_content instanceof Array) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push(mental ? '）' : '」');
    era.print(content, { color: this.color });
  }

  /**
   * 输出一句该角色的台词，在输出后会等待玩家按任意键的版本
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   * @param {boolean} [mental]
   */
  async say_and_wait(_content, mental) {
    this.say(_content, mental);
    await era.waitAnyKey();
  }

  /**
   * 以未知名输出一句该角色的台词
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   */
  say_as_unknown(_content) {
    const content = [
      {
        color: this.color,
        content: '？？？',
        fontWeight: 'bold',
      },
      '「',
    ];
    if (_content instanceof Array) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push('」');
    era.print(content, { color: this.color });
  }

  /**
   * 以未知名输出一句该角色的台词并等待
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   */
  async say_as_unknown_and_wait(_content) {
    this.say_as_unknown(_content);
    await era.waitAnyKey();
  }

  /** @param {string} color */
  set_color(color) {
    this.color = color;
    return this;
  }

  /**
   * 输出一句该角色在回忆中的台词
   *
   * @param {string|({content:string,[color]:string}|string)[]} _content
   * @param {boolean} [is_unknown]
   */
  used_to_say(_content, is_unknown) {
    const content = [];
    content.push('（');
    if (this.id) {
      content.push({
        content: is_unknown ? '？？？' : this.name,
        fontWeight: 'bold',
      });
    }
    content.push('「');
    if (_content instanceof Array) {
      content.push(..._content);
    } else {
      content.push(_content);
    }
    content.push('」）');
    era.print(content, { color: this.color });
  }

  /**
   * 输出一句该角色在回忆中的台词，在输出后会等待玩家按任意键的版本
   *
   * @param {string|({content:string,[color]:string}|string)[]} content
   * @param {boolean} [is_unknown]
   */
  async used_to_say_and_wait(content, is_unknown) {
    this.used_to_say(content, is_unknown);
    await era.waitAnyKey();
  }
}

module.exports = CharaTalk;
