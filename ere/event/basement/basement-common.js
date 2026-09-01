const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEvent = require('#/event/event-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { basement_status_enum } = require('#/data/basement-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

class CustomizedBase extends CustomizedEvent {
  get #timon() {
    return i18n().timon.basement;
  }

  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  static get_cur_time(hours, minutes, base_12 = false) {
    return i18n().timon.basement.get_clock(hours, minutes, base_12);
  }

  /** 初入地下室的欢迎 - 无人版本 */
  first_time() {
    this.#timon.first_time(get_chara_talk(0));
  }

  /** 初入地下室的欢迎 */
  welcome() {
    this.#timon.welcome(get_chara_talk(this.id), get_chara_talk(0));
  }

  /**
   * 地下室的基础情报，显示在当前互动角色情报下面，说明角色当前的警戒度和独占力情况
   * @param {boolean} [can_strike]
   */
  get_basement_info(can_strike) {
    const chara = get_chara_talk(this.id);
    if (can_strike) {
      return this.#timon.get_info_strike(chara);
    } else if (sys_check_awake(this.id)) {
      const { b_s_level } = LifeEventMarks.get_marks(this.id);
      const relation = era.get(`relation:${this.id}:0`);
      const love = era.get(`love:${this.id}`);
      let love_level =
        (love >= 85) * 2 +
        // FLAGNAME:110 = 极端行为限制
        (relation < (era.get('flag:110') || 1) * love);
      if (love_level === 3 && relation < 0) {
        love_level = 4;
      }
      return this.#timon.get_info_awake(
        chara,
        get_chara_talk(0),
        b_s_level,
        love_level,
        (LifeEventMarks.get_marks(this.id).b_status &
          (1 << basement_status_enum.fix)) >
          0,
      );
    } else {
      return this.#timon.get_info_sleep(chara);
    }
  }

  /**
   * 讨好角色后的反应
   * @param {number} [supporter]
   */
  async flatter(supporter) {}

  /** 趁角色刚回到地下室偷袭成功 */
  async strike_success() {
    await this.#timon.strike_success(get_chara_talk(0));
  }

  /** 趁角色刚回到地下室偷袭失败，被打晕了 */
  async strike_fail() {
    await this.#timon.strike_fail(get_chara_talk(0));
  }

  /** 正面击败角色，但还不知道能不能解除机关 */
  async battle_success() {
    await this.#timon.battle_success(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /** 没能正面击败角色，直接就被打晕了 */
  async battle_fail() {
    await this.#timon.battle_fail(get_chara_talk(this.id), get_chara_talk(0));
  }

  /** 正面击败角色后当面成功解除机关 */
  async battle_escape() {
    await this.#timon.battle_escape(get_chara_talk(0));
  }

  /** 正面击败角色后解除机关失败，没跑出去又被打晕了 */
  async battle_prison() {
    await this.#timon.battle_prison(get_chara_talk(0));
  }

  /**
   * 角色回到地下室/醒来发现玩家在逃离地下室
   * @param {boolean} out_of_prison
   * @param {boolean} s_level_up
   * @param {boolean} [is_back]
   */
  find_escape(out_of_prison, s_level_up, is_back) {
    this.#timon.find_escape(
      get_chara_talk(this.id),
      get_chara_talk(0),
      out_of_prison,
      s_level_up,
      is_back,
    );
  }

  /** 加固地下室 */
  fix_prison() {
    this.#timon.fix_prison(get_chara_talk(this.id));
  }

  /** 从沉睡中清醒 */
  get_up() {
    this.#timon.get_up(get_chara_talk(this.id), get_chara_talk(0));
    LifeEventMarks.get_marks(this.id).b_start = 0;
  }

  /** 回到地下室 */
  back_basement() {
    this.#timon.back_basement(get_chara_talk(this.id), get_chara_talk(0));
    LifeEventMarks.get_marks(this.id).b_start = 0;
  }

  /** 因精力不足而昏睡 */
  deep_sleep() {}

  /** 进食 */
  eat_something() {}

  /** 因精力不足而主动选择睡眠 */
  sleep() {}

  /** 角色主动调情 */
  lure() {}

  /** 选择雷普玩家 */
  async rape(supporter) {
    await this.#timon.rape(
      get_chara_talk(this.id),
      get_chara_talk(0),
      supporter > 0 ? get_chara_talk(supporter) : void 0,
    );
  }

  /** 开始加固地下室 */
  start_fixing() {}

  /** 刚刚离开 */
  out() {}

  /** 请求对方释放，对方同意 */
  async ask_release_agree() {
    await this.#timon.ask_release_agree(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /** 请求对方释放，对方拒绝 */
  async ask_release_reject() {
    await this.#timon.ask_release_reject(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /** 询问时间 */
  async ask_time(date, hours, minutes) {
    await this.#timon.ask_time(get_chara_talk(this.id), get_chara_talk(0));
  }

  /**
   * 救援事件 - 失败
   * @param {number} owner_id
   */
  async rescue_fail(owner_id) {
    if (sys_check_awake(0)) {
      await print_title_with_kojo(
        this.#timon,
        'rescue_fail_awake',
        get_chara_talk(this.id),
        get_chara_talk(0),
        get_chara_talk(owner_id),
      );
    } else {
      await this.#timon.rescue_fail_sleep(
        get_chara_talk(owner_id),
        get_chara_talk(0),
      );
    }
  }

  /**
   * 救援事件 - 趁主人不在时救援成功
   * @param {number} owner_id
   */
  async rescue_sneak_success(owner_id) {
    await print_title_with_kojo(
      this.#timon,
      'rescue_sneak_success',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(owner_id),
      sys_check_awake(0),
      sys_check_awake(owner_id),
    );
  }

  /**
   * 救援事件 - 趁主人不在时救援成功，但是将玩家关到自己的地下室
   * @param {number} owner_id
   */
  async rescue_sneak_prison(owner_id) {
    await print_title_with_kojo(
      this.#timon,
      'rescue_sneak_prison',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(owner_id),
      sys_check_awake(0),
      sys_check_awake(owner_id),
    );
  }

  /**
   * 救援事件 - 和玩家关系不睦，因此同流合污
   * @param {number} owner_id
   */
  async rescue_join(owner_id) {
    await print_title_with_kojo(
      this.#timon,
      'rescue_join',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(owner_id),
      sys_check_awake(0),
    );
  }

  /**
   * 救援事件 - 正面击败主人，救援成功
   * @param {number} owner_id
   */
  async rescue_battle_success(owner_id) {
    await print_title_with_kojo(
      this.#timon,
      'rescue_battle_success',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(owner_id),
      sys_check_awake(0),
    );
  }

  /**
   * 救援事件 - 正面击败主人，但是把玩家关到自己的地下室
   * @param {number} owner_id
   */
  async rescue_battle_prison(owner_id) {
    await print_title_with_kojo(
      this.#timon,
      'rescue_battle_prison',
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(owner_id),
      sys_check_awake(0),
    );
  }

  handle_escape() {}
}

module.exports = CustomizedBase;
