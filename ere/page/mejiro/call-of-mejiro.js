const era = require('#/era-electron');

const MejiroCity = require('#/page/mejiro/mejiro-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

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

  get_positions(chara_id, player_base, chara_base) {
    const ret = super.get_positions(chara_id, player_base, chara_base);
    const mejiro_button = ret.find((e) => e.l === location_enum.mejiro);
    era.logger.info(`${this.called}'s san=${this.san}`);
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
    }
    return ret;
  }

  async page(chara_id) {
    const chara = get_chara_talk(chara_id);
    if (era.get('item:「恩宠」') === 0) {
      await this.misty(chara, get_chara_talk(0));
    } else {
      await this.city(chara, get_chara_talk(0));
    }
  }

  /**
   * 外场：正常的目白城，消耗恩宠购买服务
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async city(chara, me) {
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 站在干净的街道上。',
    ]);
    await era.printAndWait('明媚的阳光下，出双入对的人们穿行在大街小巷。');
  }

  /**
   * 内场：迷雾笼罩的目白城，需要逃离
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async misty(chara, me) {
    let temp,
      difficulty = 1;
    if ((temp = era.get('item:「亏欠」')) > 0) {
      difficulty += Math.min(Math.floor(Math.log(temp + 9) / Math.log(10)), 5);
      era.set('item:「亏欠」', 0);
    }
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 身处迷雾笼罩的街道……',
    ]);
    era.logger.debug(`亏欠=${temp} 难度=${difficulty}`);
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

module.exports = CallOfMejiro;
