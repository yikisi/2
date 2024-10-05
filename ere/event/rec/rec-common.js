/**
 * @file 招募地文
 *
 * @author 雞雞
 */
const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { recruit_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const notes = require('#/data/notes.json');

class CustomizedRecruit {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }

  /** @returns {Promise<boolean|void>} */
  async check_before_rec() {
    const chara = get_chara_talk(this.id);
    if (
      !(await select_yes_or_no(
        [
          '训练员与',
          chara.get_uma_sex_title(),
          '的契约足以影响双方一生，确定要招募 ',
          chara.get_colored_name(),
          ' 吗？',
        ],
        '确定',
        '还是算了',
      ))
    ) {
      era.print([
        '虽然想要招募 ',
        chara.get_colored_name(),
        '，但还是打消了念头……',
      ]);
      return true;
    }
  }

  /**
   * @param {number} stage
   * @param {EventObject} event_object
   * @returns {Promise<boolean|void>}
   */
  // eslint-disable-next-line no-unused-vars
  async recruit(stage, event_object) {
    if (await this.check_before_rec()) {
      return;
    }
    const chara = get_chara_talk(this.id);
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 积极地把 ',
      chara.get_colored_name(),
      ' 招揽进自己的队伍……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 在仔细思考后，点头答应了！',
    ]);
    era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    await this.recruit_end();
    await this.recruit_result();
  }

  async recruit_end() {
    await era.printAndWait([
      { isBr: true },
      get_chara_talk(this.id).get_colored_name(),
      ' 加入了队伍！',
    ]);
  }

  async recruit_result() {
    recruit_chara(this.id);
    const temp = sys_get_star_premium_draw();
    if (temp.chara === this.id) {
      temp.chara = 0;
      temp.cost += 20;
    }
    if (notes[this.id]) {
      era.drawLine();
      if (
        await select_yes_or_no(
          '是否查看相关的小纸条？',
          '查看',
          '之后去首页确认',
        )
      ) {
        notes[this.id].forEach((e) =>
          era.print(
            [{ content: e.title, fontWeight: 'bold' }, '「', e.content, '」'],
            { color: get_chara_color(this.id) },
          ),
        );
        await era.waitAnyKey();
      }
    }
  }
}

module.exports = CustomizedRecruit;
