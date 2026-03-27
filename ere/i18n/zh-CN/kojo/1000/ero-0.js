/**
 * @file 玩家 - 调教
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} supporter
   * @param {CharaTalk} you
   * @param {string} penis_desc
   */
  become_erect(chara, supporter, you, penis_desc) {
    era.print([
      '在 ',
      chara.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      ' 的侍奉下，',
      you.get_colored_name(),
      ' ',
      penis_desc,
      ' 的肉棒很快就一柱擎天了。',
    ]);
  },
  bt_cum_in: '射了！',
  bt_cum_not: '再忍一下',
  get_cum_on_body: (target) => `射到 ${target} 身上！`,
  get_cum_on_face: (targets) => `射到 ${targets} 脸上！`,
  /**
   * @param {CharaTalk} you 玩家
   * @param {boolean} stop_success 是否寸止成功
   * @param {boolean} change_aim 是否选择射到其他部位
   * @param {boolean} cum_on_face 如果射到其他部位，是否是颜射：口交选择体外是颜射，性交和肛交选择体外是身体
   * @param {[]} targets
   */
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), ' 的忍耐失败了！']);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          ' 拔出阴茎对准 ',
          ...targets,
          ' 的俏脸',
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          ' 拔出阴茎对准 ',
          ...targets,
          ' 的玉体',
        ]);
      }
    } else {
      era.print([you.get_colored_name(), ' 暂时忍住了射精冲动……']);
    }
  },
  report_preg_not_love: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (you, father, unexpected_pregnant) => {
      if (era.get('flag:惩戒力度') >= 2) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 盯着小腹淫纹上代表怀孕的图案，冲到卫生间呕吐了起来。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 盯着手上的验孕棒，冲到卫生间呕吐了起来。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 对自己如何怀孕完全没有印象，一想到谁都有可能是犯人就让 ',
          you.get_colored_name(),
          ' 为之胆寒……',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '……而且明明 ',
            you.get_colored_name(),
            ' 可以成为父亲的……',
          ]);
        }
      } else {
        await era.printAndWait([
          '在短暂的慌乱后，',
          you.get_colored_name(),
          ' 还是决定向 ',
          father.get_colored_name(),
          ' 报告消息',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' 再三询问确认，还是得到了孩子是自己骨肉的回答。',
          ]);
          await era.printAndWait([
            '但 ',
            father.get_colored_name(),
            ' 对此毫无印象……',
          ]);
        } else {
          await era.printAndWait([
            '在同样的惊慌后，平静下来的 ',
            father.get_colored_name(),
            ' 向 ',
            you.get_colored_name(),
            ' 承诺一定会负起父亲的责任……',
          ]);
        }
      }
    };
    f.title = '意外';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} you
   * @param {CharaTalk} father
   */
  async have_baby_with_child(you, father) {
    if (era.get(`love:${father.id}`) >= 90) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 躺在病床上，看着自己生下的孩子，脑中有些恍惚，想起了孩子的父亲。',
      ]);
      await era.printAndWait([
        '没有想到，才这么短暂的时间，',
        father.get_colored_name(),
        ' 这孩子就已经成长的这么快速，到了能够让女性（',
        you.get_colored_name(),
        '）为其生下孩子的年纪。',
      ]);
      await era.printAndWait([
        '说曹操曹操到，',
        father.get_colored_name(),
        ' 沖进了房间内，当初那个在自己怀中喝奶的孩子，现在的背影却让 ',
        you.get_colored_name(),
        ' 都忍不住脸红心跳。',
      ]);
      await era.printAndWait([
        '比起母亲的身份，',
        you.get_colored_name(),
        ' 选择了身为 ',
        father.get_colored_name(),
        ' 爱人的幸福。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 抱着孩子，心中是无尽的担忧。作为与 ',
        father.get_colored_name(),
        ' 乱伦生下的孩子，',
        you.get_colored_name(),
        ' 担心着这孩子接下来的命运。',
      ]);
      await era.printAndWait([
        '如果当初没有和 ',
        father.get_colored_name(),
        '……',
        you.get_colored_name(),
        ' 忍不住想要这么抱怨，但却又说不出口。',
      ]);
      await era.printAndWait(
        '作为母亲的亲情与作为恋人的爱情混杂在一起，化作了连当事人都摸不清楚的感情。',
      );
      await era.printAndWait([
        '最终变作一声撒娇的娇叱，吐在姗姗来迟的 ',
        father.get_colored_name(),
        ' 身上。',
      ]);
    }
  },
  have_baby_with_fuck_buddy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await era.printAndWait([you.get_colored_name(), ' 抱起了孩子——']);
      era.printButton('无视孩子的父亲', 1);
      era.printButton(`让${father.sex}一起来看`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 看向 ',
          father.get_colored_name(),
          ' 的眼神十分空虚，却对孩子露出了关爱的神情。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 思前想后，还是招手让 ',
          father.get_colored_name(),
          ' 上前来。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' 惊喜地环住 ',
          you.get_colored_name(),
          '，两人一起安抚着熟睡的孩子。',
        ]);
      }
    };
    f.title = '新生命';
    return f;
  })(),
};
