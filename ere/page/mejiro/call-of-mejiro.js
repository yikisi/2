const era = require('#/era-electron');

const { sys_get_ero_image } = require('#/system/ero/sys-calc-ero-image');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const get_progress_bar = require('#/page/components/get-progress-bar');
const cum_shop = require('#/page/mejiro/cum-shop');
const MejiroCity = require('#/page/mejiro/mejiro-common');
const print_ero_page = require('#/page/page-ero');

const MejiroEvents = require('#/event/others/mejiro-cum-events');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { vehicle_enum } = require('#/data/move-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

class CallOfMejiro extends MejiroCity {
  /**
   * 被呼唤的伴侣
   * @returns {number}
   */
  get called() {
    return this.var.called || 0;
  }

  /**
   * 被呼唤的伴侣ID
   * @param {number} v
   */
  set called(v) {
    if (!v) {
      delete this.var.called;
    } else {
      this.var.called = v;
    }
  }

  /**
   * 伴侣的SAN值
   * @returns {number}
   */
  get san() {
    return this.var.san || 0;
  }

  /**
   * 伴侣的SAN值
   * @param {number} v
   */
  set san(v) {
    if (!v) {
      delete this.var.san;
    } else {
      this.var.san = v;
    }
  }

  /**
   * 每周出行限制
   * @returns {number}
   */
  get limit() {
    return this.var.limit || 0;
  }

  /**
   * 每周出行限制
   * @param {number} v
   */
  set limit(v) {
    if (!v) {
      delete this.var.limit;
    } else {
      this.var.limit = v;
    }
  }

  get_want_sex_buff(cid) {
    return this.called === cid;
  }

  get_rape_buff(cid) {
    if (cid === this.called) {
      return 0.5;
    }
    return 0;
  }

  get_positions(cid, p_base, c_base) {
    const ret = super.get_positions(cid, p_base, c_base);
    const mejiro_button = ret.find((e) => e.l === location_enum.mejiro);
    function addTip(tip) {
      mejiro_button.t ??= '';
      mejiro_button.t = tip + (mejiro_button.t && '\n') + mejiro_button.t;
    }
    if (this.called > 0) {
      if (this.called === cid) {
        if (this.san === 0) {
          mejiro_button.a = 5;
          addTip(i18n().timon.cum.calling_tip);
          /** @type {{[a]:number,s:number,d:boolean,l:number,n:string,[t]:string}[]} */
          const ret = new Array(5)
            .fill(void 0)
            .map(() => ({ ...mejiro_button }));
          if (Math.random() < 0.05) {
            for (let i = 0; i < mejiro_button.t; ++i) {
              ret[i].n = i18n().timon.cum.calling_buttons[i];
            }
          }
          return ret;
        }
      } else {
        mejiro_button.d = true;
        addTip(i18n().timon.cum.calling_not_chara_tip);
      }
    } else if (cid >= 340 && cid <= 342) {
      mejiro_button.d = true;
      addTip(i18n().timon.cum.calling_god_tip);
    }
    if (this.limit === 0) {
      mejiro_button.d = true;
      addTip(i18n().timon.cum.come_limited);
    }
    return ret;
  }

  async page(cid) {
    this.limit--;
    const chara = get_chara_talk(cid);
    const me = get_chara_talk(0);
    await i18n().timon.cum.come_in_mejiro_city(chara, me);
    if (era.get('item:「恩宠」') === 0 || (this.called > 0 && this.san === 0)) {
      await i18n().timon.cum.misty_notify();
      if (this.called > 0) {
        if (EventMarks.get(this.called).check(event_hooks.out_mejiro)) {
          EventMarks.get(this.called).sub(event_hooks.out_mejiro);
        }
        this.called = 0;
      }
      await this.misty(chara, me);
    } else {
      await this.city(chara, me);
    }
  }

  /** @param {CharaTalk} chara */
  page_header(chara) {
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: get_progress_bar(0, {
          prog_width: 9,
          tp_offset: true,
          use_empty_line: false,
        }),
        config: { width: 16 },
      },
      {
        columns: [
          {
            content: i18n().timon.cum.get_header(chara, {
              content: i18n().location.mejiro,
              fontWeight: 'bold',
            }),
            type: 'text',
          },
        ],
        config: { width: 8 },
      },
    );
  }

  /**
   * 外场：正常的目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async city(chara, me) {
    await cum_shop.call(this, chara, me);
  }

  /**
   * 内场：迷雾笼罩的目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async misty(chara, me) {
    let flag = true;
    let temp;
    let difficulty = 1;
    if ((temp = era.get('item:「亏欠」')) > 0) {
      difficulty += Math.min(Math.floor(Math.log(temp + 1) / Math.log(2)), 6);
      era.set('item:「亏欠」', 0);
    }
    difficulty = Math.max(difficulty * 2 + get_random_value(0, 5), 6);
    const progress = { c: 0, p: 0 };
    begin_and_init_ero(0, chara.id);
    const events = new MejiroEvents(chara);
    while (flag) {
      await era.clear();
      this.page_header(chara);
      era.drawLine();
      const my_lust = era.get('base:0:性欲');
      const lust = Math.max(my_lust, era.get(`base:${chara.id}:性欲`));
      if (lust >= lust_border.want_sex) {
        const ret = await i18n().timon.cum.fail_to_escape(chara, me);
        if (ret.length === 0) {
          era.add('base:0:体力', Math.floor(era.get('maxbase:0:体力') * 0.2));
          era.add('base:0:精力', Math.floor(era.get('maxbase:0:精力') * 0.2));
        } else {
          if (ret[0] === 1) {
            era.add('item:「恩宠」', 10);
          } else {
            era.add('base:0:体力', Math.floor(era.get('maxbase:0:体力') * 0.5));
            era.add('base:0:精力', Math.floor(era.get('maxbase:0:精力') * 0.5));
          }
        }
        era.set(`status:${chara.id}:超马跳Z`, 1);
        era.set(`tcvar:${chara.id}:脱力`, 0);
        era.set('tcvar:0:脱力', 0);
        era.set(`status:${chara.id}:沉睡`, 0);
        era.set('status:0:沉睡', 0);
        era.add(
          `base:${chara.id}:体力`,
          Math.floor(era.get(`maxbase:${chara.id}:体力`) * 0.5),
        );
        era.add(
          `base:${chara.id}:精力`,
          Math.floor(era.get(`maxbase:${chara.id}:精力`) * 0.5),
        );
        update_ero_status(0);
        update_ero_status(chara.id);
        await print_ero_page(chara.id, true);
        era.add('item:「恩宠」', Math.floor(progress.c * 5) / 2 + 2);
        flag = false;
        temp = false;
      } else {
        const buffer = i18n().timon.cum.get_misty_info(
          chara,
          me,
          progress.c === difficulty - 1 ? 1 : progress.c / difficulty,
        );
        const stamina = era.get('base:0:体力');
        const buttons = [
          {
            a: 100,
            c: i18n().timon.cum.bt_slow_forward,
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(600, 1200));
              era.add('base:0:性欲', get_random_value(300, 600));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(50, 150),
              );
              progress.c++;
              await events.good_event(progress, lust);
            },
          },
          {
            a: 101,
            c: i18n().timon.cum.bt_normal_forward,
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(50, 150),
              );
              progress.c++;
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 102,
            c: i18n().timon.cum.bt_fast_forward,
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(0, 600));
              era.add('base:0:性欲', get_random_value(0, 300));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(50, 150),
              );
              progress.c++;
              await events.bad_event(progress, lust);
            },
          },
          void 0,
          {
            a: 200,
            c: i18n().timon.cum.bt_slow_search,
            d: stamina < 150,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(125, 175),
              );
              await events.good_event(progress, lust);
            },
          },
          {
            a: 201,
            c: i18n().timon.cum.bt_normal_search,
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(50, 150),
              );
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 202,
            c: i18n().timon.cum.bt_fast_search,
            d: stamina < 50,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                -get_random_value(25, 75),
              );
              await events.bad_event(progress, lust);
            },
          },
          void 0,
          {
            a: 300,
            c: i18n().timon.cum.bt_rest,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(
                0,
                attr_enum.hp,
                get_random_value(25, 75),
              );
              await events.avg_event(progress, lust);
            },
          },
          {
            a: 301,
            c: i18n().timon.cum.bt_surrender,
            async h() {
              era.set('base:0:性欲', lust_border.want_sex);
              era.set(`base:${chara.id}:性欲`, lust_border.want_sex);
            },
          },
        ];
        era.printInColRows(
          {
            columns: [
              ...buffer.map((e) => ({ content: e, type: 'text' })),
              ...buttons.map((e) =>
                e
                  ? {
                      accelerator: e.a,
                      config: {
                        ...(e.d
                          ? { disabled: true, title: i18n().tb_status.r_hp_ins }
                          : {}),
                        width: 12,
                      },
                      content: e.c,
                      type: 'button',
                    }
                  : { content: [], type: 'text' },
              ),
            ],
            config: { width: 20 },
          },
          {
            columns: [
              {
                config: { align: 'center' },
                content: [chara.get_colored_name()],
                type: 'text',
              },
              {
                names: sys_get_ero_image(chara.id),
                type: 'image.whole',
              },
            ],
            config: { width: 4 },
          },
        );
        const ret = await era.input();
        era.drawLine();
        await buttons.find((e) => e?.a === ret).h();
        if (progress.c >= difficulty) {
          flag = false;
          temp = true;
        }
      }
    }
    if (temp) {
      era.add('item:「恩宠」', difficulty * 5);
      end_ero_and_train();
    } else {
      await end_ero_and_show_result(true);
      this.called = chara.id;
      this.san = Math.floor(
        era.get('item:「恩宠」') * get_random_value(0.5, 0.7),
      );
    }
    era.drawLine();
    const vehicle = era.get('flag:多人载具');
    await i18n().timon.cum.leave_misty(
      chara,
      me,
      vehicle > 0 && i18n().vehicle[vehicle_enum.keys[vehicle - 1]],
      temp,
    );
    era.set('item:「恩宠」', Math.floor(era.get('item:「恩宠」')));
  }

  async next_week() {
    this.limit = 1;
    if (era.get('item:「恩宠」') > 0) {
      if (era.add('item:「恩宠」', -1) === 0) {
        await i18n().timon.cum.notify_misty();
      }
    }
    if (
      this.called > 0 &&
      (!era.get('item:「恩宠」') || (this.san > 0 && --this.san === 0))
    ) {
      this.san = 0;
      await i18n().timon.cum.notify_called(get_chara_talk(this.called));
      EventMarks.get(this.called).add(event_hooks.out_mejiro);
    }
  }
}

MejiroCity.register(1, new CallOfMejiro());

module.exports = {};
