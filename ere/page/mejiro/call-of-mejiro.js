const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { get_progress_bar } = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');
const MejiroCity = require('#/page/mejiro/mejiro-common');
const print_ero_page = require('#/page/page-ero');

const cum_shop = require('#/event/others/mejiro-kindness/cum-shop');
const MejiroEvents = require('#/event/others/mejiro-kindness/mejiro-events');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { vehicle_names } = require('#/data/move-const');

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

  get_want_sex_buff(chara_id) {
    return this.called === chara_id;
  }

  get_rape_buff(chara_id) {
    if (chara_id === this.called) {
      return 0.5;
    }
    return 0;
  }

  get_positions(chara_id, player_base, chara_base) {
    const ret = super.get_positions(chara_id, player_base, chara_base);
    const mejiro_button = ret.find((e) => e.l === location_enum.mejiro);
    if (this.called > 0) {
      if (this.called === chara_id) {
        if (this.san === 0) {
          ret.forEach((e) => {
            if (e !== mejiro_button) {
              e.d = true;
              e.t = '麦吉罗在呼唤……';
            }
          });
        }
        mejiro_button.h = true;
      } else {
        mejiro_button.d = true;
        if (mejiro_button.t || (mejiro_button.t = '')) {
          mejiro_button.t += '\n';
        }
        mejiro_button.t += '麦吉罗并未呼唤此人……';
      }
    } else if (chara_id >= 340 && chara_id <= 342) {
      mejiro_button.d = true;
      if ((mejiro_button.t ||= '')) {
        mejiro_button.t += '\n';
      }
      mejiro_button.t += '麦吉罗也许不在三女神之下，但绝不在其之上……';
    }
    if (this.limit === 0) {
      mejiro_button.d = true;
      if ((mejiro_button.t ||= '')) {
        mejiro_button.t += '\n';
      }
      mejiro_button.t += '本周内找不到目白城了……';
    }
    return ret;
  }

  async page(chara_id) {
    this.limit--;
    const chara = get_chara_talk(chara_id),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 一同进入了目白城……',
    ]);
    if (era.get('item:「恩宠」') === 0 || (this.called > 0 && this.san === 0)) {
      await era.printAndWait('……然后迷雾吞没了你们……');
      if (this.called > 0) {
        EventMarks.get(this.called).sub(event_hooks.out_mejiro);
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
        columns: get_progress_bar(),
        config: { width: 16 },
      },
      {
        columns: [
          {
            content: [
              '与 ',
              chara.get_colored_name(),
              ' 位于 ',
              {
                content: '目白城',
                fontWeight: 'bold',
              },
            ],
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
    let temp,
      difficulty = 1;
    if ((temp = era.get('item:「亏欠」')) > 0) {
      difficulty += Math.min(Math.floor(Math.log(temp + 1) / Math.log(2)), 6);
      era.set('item:「亏欠」', 0);
    }
    difficulty = Math.max(difficulty * 2 + get_random_value(0, 5), 6);
    temp = 0;
    begin_and_init_ero(0, chara.id);
    const events = new MejiroEvents(chara, me);
    while (flag) {
      await era.clear();
      this.page_header(chara);
      era.drawLine();
      const my_lust = era.get('base:0:性欲');
      const lust = Math.max(my_lust, era.get(`base:${chara.id}:性欲`));
      if (lust >= lust_border.want_sex) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 被迷雾完全包围了……',
        ]);
        await era.printAndWait([
          '目光所及除了迷雾就是一对对疯狂做爱的情侣，他们的面容依稀有着你们的影子。',
        ]);
        await era.printAndWait(
          '性爱的声音盖过了其他所有，呼吸的空气中满是淫水和汗水的臭味……',
        );
        if (my_lust >= lust_border.want_sex) {
          await era.printAndWait([
            me.get_colored_name(),
            ' 听到血液在脑中轰鸣，自控在绮念的进攻下分崩离析……',
          ]);
          await era.printAndWait([
            '看到身边的 ',
            chara.get_colored_name(),
            ' 也同样霞飞双颊，夹紧双腿，',
            me.get_colored_name(),
            ' 最终任由思想把自己控制……',
          ]);
          era.add('base:0:体力', Math.floor(era.get('maxbase:0:体力') * 0.2));
          era.add('base:0:精力', Math.floor(era.get('maxbase:0:精力') * 0.2));
        } else {
          if (
            await select_yes_or_no(
              '',
              '沉溺其中（「恩宠」+10）',
              '试图冷静（体力&精力+50%）',
            )
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 看向 ',
              chara.get_colored_name(),
              '，那眼眸中暗波荡漾……',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              ' 主动踏入欲望的泥淖，',
            ]);
            await era.printAndWait(['伴随着', chara.sex, '一同下坠，下坠……']);
            era.add('item:「恩宠」', 10);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 看向 ',
              chara.get_colored_name(),
              '，那眼眸中暗波荡漾……',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              ' 惊慌地想抬腿离开欲望的泥淖，',
            ]);
            await era.printAndWait('脚步却越踩越深，直至坠落……');
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
        era.add('item:「恩宠」', Math.floor(temp * 5) / 2 + 2);
        flag = false;
        temp = false;
      } else {
        era.print([
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 身处迷雾笼罩的街道……',
        ]);
        if (lust >= lust_border.absent_mind) {
          era.print(
            '周围是成双成对疯狂做爱的人群，放肆的呻吟、肉体碰撞的声音和喷溅的水声充斥着整片空间。',
          );
        } else if (lust >= lust_border.itch) {
          era.print(
            '周围是面容模糊的爱侣，正在欢爱、摆动，低低的娇吟和水声不绝于耳。',
          );
        } else if (lust >= 4000) {
          era.print(
            '周围是面容模糊的眷侣，正在相互抚摸、狎戏，偶尔能听见呻吟和绵密的水声。',
          );
        } else if (lust >= 3000) {
          era.print(
            '周围是成双成对的伴侣，相互拥抱、接吻，偶尔能听见轻悄悄的情话。',
          );
        } else if (lust >= 2000) {
          era.print('周围是影影绰绰的一对对旅客，偶尔能听见模糊的低语。');
        }
        const progress = temp / difficulty;
        if (temp === difficulty - 1) {
          era.print('前面的迷雾正在消散，能看见明亮、干净的街区。');
        } else if (progress >= 0.66) {
          era.print('前面的迷雾变得稀薄了一些，阳光穿过云层星星点点地照着。');
        } else if (progress >= 0.33) {
          era.print('来路已经看不见了，似乎只能向前。');
        } else if (temp === 0) {
          era.print(
            '一条大道笔直通向前方，但并不清楚延伸向哪里。来路只剩下蒙蒙的灰。',
          );
        }
        const stamina = era.get('base:0:体力');
        const buttons = [
          {
            a: 100,
            c: '谨慎前进（低风险，性欲+++，体力--）',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(600, 1200));
              era.add('base:0:性欲', get_random_value(300, 600));
              sys_change_attr_and_print(0, '体力', -get_random_value(50, 150));
              temp++;
              await events.good_event(progress, lust);
            },
          },
          {
            a: 101,
            c: '正常前进（中风险，性欲++，体力--）',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(0, '体力', -get_random_value(50, 150));
              temp++;
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 102,
            c: '大胆前进（高风险，性欲+，体力--）',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(0, 600));
              era.add('base:0:性欲', get_random_value(0, 300));
              sys_change_attr_and_print(0, '体力', -get_random_value(50, 150));
              temp++;
              await events.bad_event(progress, lust);
            },
          },
          {
            a: 200,
            c: '仔细搜索（低风险，性欲++，体力---）',
            d: stamina < 150,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(0, '体力', -get_random_value(125, 175));
              await events.good_event(progress, lust);
            },
          },
          {
            a: 201,
            c: '正常搜索（中风险，性欲++，体力--）',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(0, '体力', -get_random_value(50, 150));
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 202,
            c: '粗略搜索（高风险，性欲++，体力-）',
            d: stamina < 50,
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(0, '体力', -get_random_value(25, 75));
              await events.bad_event(progress, lust);
            },
          },
          {
            a: 300,
            c: '停下休息（性欲++，体力+）',
            async h() {
              era.add(`base:${chara.id}:性欲`, get_random_value(300, 900));
              era.add('base:0:性欲', get_random_value(100, 500));
              sys_change_attr_and_print(0, '体力', get_random_value(25, 75));
              await events.avg_event(progress, lust);
            },
          },
        ];
        era.printMultiColumns(
          buttons.map((e) => ({
            accelerator: e.a,
            config: e.d ? { disabled: true, title: '体力不足' } : {},
            content: e.c,
            type: 'button',
          })),
        );
        const ret = await era.input();
        era.drawLine();
        await buttons.find((e) => e.a === ret).h();
        if (temp === difficulty) {
          flag = false;
          temp = true;
        }
      }
    }
    if (temp) {
      era.add('item:「恩宠」', difficulty * 5);
      end_ero_and_train();
      era.drawLine();
      const vehicle = era.get('flag:多人载具');
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 走出了迷雾，发现正处于',
        vehicle > 0 ? vehicle_names[vehicle] : '公交车',
        '旁。',
      ]);
      await era.printAndWait('指向来路的路牌标着「目白城」的标志。');
      await era.printAndWait('耳边传来满足的笑声……');
    } else {
      await end_ero_and_show_result(true);
      era.drawLine();
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 清醒时，已出现在目白城外的长椅上，旁边是睡着的 ',
        chara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        chara.sex,
        '清醒过来后，',
        me.get_couple_title(),
        ' 在不知从何而来的满足笑声中离开了目白城……',
      ]);
      await era.printAndWait([
        '……但是自那以后，',
        chara.get_colored_name(),
        ' 就会时不时听到若有若无的低语……',
      ]);
      this.called = chara.id;
      this.san = Math.floor(
        era.get('item:「恩宠」') * get_random_value(0.5, 0.7),
      );
    }
  }

  async next_week() {
    this.limit = 1;
    if (era.get('item:「恩宠」') > 0) {
      if (era.add('item:「恩宠」', -1) === 0) {
        await era.printAndWait('目白城再次为迷雾笼罩……');
      }
    }
    if (this.called > 0 && this.san > 0 && --this.san === 0) {
      await era.printAndWait([
        get_chara_talk(this.called).get_colored_name(),
        ' 从耳边的低语中听到了麦吉罗的呼唤……',
      ]);
      EventMarks.get(this.called).add(event_hooks.out_mejiro);
    }
  }
}

MejiroCity.register(1, new CallOfMejiro());

module.exports = {};
