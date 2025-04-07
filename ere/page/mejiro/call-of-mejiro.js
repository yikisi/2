const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');

const { get_progress_bar } = require('#/page/components/page-header');
const MejiroCity = require('#/page/mejiro/mejiro-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const { location_enum } = require('#/data/locations');
const { vehicle_names } = require('#/data/move-const');

class CallOfMejiro extends MejiroCity {
  constructor() {
    super();
    MejiroCity.register(1, this);
  }

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
      } else {
        mejiro_button.d = true;
        if (mejiro_button.t || (mejiro_button.t = '')) {
          mejiro_button.t += '\n';
        }
        mejiro_button.t += '麦吉罗并未呼唤此人……';
      }
    } else if (chara_id >= 340 && chara_id <= 342) {
      mejiro_button.d = true;
      if (mejiro_button.t || (mejiro_button.t = '')) {
        mejiro_button.t += '\n';
      }
      mejiro_button.t += '……';
    }
    return ret;
  }

  async page(chara_id) {
    const chara = get_chara_talk(chara_id),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 一同进入了目白城……',
    ]);
    if (era.get('item:「恩宠」') === 0 || (this.called > 0 && this.san === 0)) {
      await era.printAndWait([
        '……然后迷雾吞没了 ',
        me.get_couple_title(),
        '……',
      ]);
      this.called = 0;
      await this.misty(chara, me);
    } else {
      await this.city(chara, me);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {number} money
   */
  page_header(chara, money) {
    const status_list = sys_get_status(0);
    const info = [];
    if (money > 0) {
      info.push(
        { width: 6, content: '「恩宠」' },
        {
          width: 8,
          content: money.toString(),
        },
      );
    }
    info.push({
      width: 12,
      content: ['与 ', chara.get_colored_name(), ' 同行中'],
    });
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          ...get_progress_bar(),
          {
            config: { width: 2 },
            content: '状态',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: status_list.length > 0 ? status_list : '正常',
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      {
        columns: [
          {
            content: [
              '位于 ',
              {
                content: '目白城',
                fontWeight: 'bold',
              },
            ],
            type: 'text',
          },
          ...info.map((e) => ({
            config: { width: e.width },
            content: e.content,
            type: 'text',
          })),
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
    let flag = true;
    while (flag) {
      await era.clear();
      const money = era.get('item:「恩宠」');
      this.page_header(chara, money);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 站在干净的街道上。',
      ]);
      await era.printAndWait('明媚的阳光下，出双入对的人们穿行在大街小巷。');
    }
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
      difficulty += Math.min(Math.floor(Math.log(temp + 1) / Math.log(2)), 5);
      era.set('item:「亏欠」', 0);
    }
    difficulty = difficulty * 2 + get_random_value(0, 5);
    temp = 0;
    while (flag) {
      await era.clear();
      this.page_header(chara, 0);
      era.drawLine();
      const lust = Math.max(
        era.get('base:0:性欲'),
        era.get(`base:${chara.id}:性欲`),
      );
      if (lust >= lust_border.want_sex) {
        era.print([
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 被迷雾完全包围了，目光所及除了迷雾就是一对对疯狂做爱的情侣，他们的面容依稀有着 ',
          me.get_couple_title(),
          ' 的影子。性爱的声音盖过了其他所有，呼吸的空气中满是淫水和汗水的臭味……',
        ]);
        era.add('item:「恩宠」', temp * 5 + 20);
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
        if (temp === difficulty - 1) {
          era.print('前面的迷雾正在消散，能看见明亮、干净的街区。');
          flag = false;
          temp = true;
          era.add('item:「恩宠」', difficulty * 5);
        } else if (temp / difficulty >= 0.66) {
          era.print('前面的迷雾变得稀薄了一些，阳光穿过云层星星点点地照着。');
        } else if (temp / difficulty >= 0.33) {
          era.print('来路已经看不见了，似乎只能向前。');
        } else if (temp === 0) {
          era.print(
            '一条大道笔直通向前方，但并不清楚延伸向哪里。来路只剩下蒙蒙的灰。',
          );
        }
        // TODO
        era.printButton('+性欲', 1);
        era.printButton('+进度', 2);
        era.printButton('停留', 3);
        switch (await era.input()) {
          case 1:
            era.add(`base:${chara.id}:性欲`, get_random_value(500, 1500));
            break;
          case 2:
            temp += get_random_value(1, 2);
        }
      }
    }
    if (temp) {
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
      // TODO
      await era.printAndWait('逃离');
      await era.printAndWait([
        '自那以后，',
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
    if (era.get('item:「恩宠」') > 0) {
      if (era.add('item:「恩宠」', -1)) {
        await era.printAndWait('目白城再次为迷雾笼罩……');
      }
    }
    if (this.called > 0 && this.san > 0 && --this.san === 0) {
      await era.printAndWait([
        get_chara_talk(this.called).get_colored_name(),
        ' 从耳边的低语中听到了麦吉罗的呼唤……',
      ]);
    }
  }
}

new CallOfMejiro();

module.exports = {};
