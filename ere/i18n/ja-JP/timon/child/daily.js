/**
 * @file 日常の地の文 - 子供
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_0(child, you) {
    const talk = [
      () =>
        era.print([
          'まだ幼い子はたどたどしく言葉を覚え始めたばかりで、',
          you.get_colored_name(),
          ' を見るなり楽しそうに小走りで駆け寄ってくる。',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          ' は地面の上でころころ転がっている。',
          you.get_colored_name(),
          ' は、このまま地球の裏側まで転がってしまわないか心配になった。',
        ]),
    ];
    get_random_entry(talk)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_1(child, you) {
    era.print([
      child.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' に連れられて走りの練習をしている。夕日の川沿いには、ふたつの長い影が落ちていた。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {CharaTalk} parent
   */
  select_2(child, you, parent) {
    era.print([
      child.get_colored_name(),
      ' は年を重ね、いまでは ',
      parent.get_colored_name(),
      ' に負けないほど美しい。競走の道でも、きっと青は藍より出でるだろう。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_0(child, you, callname) {
    await child.say_and_wait([
      callname,
      '……！わたし、',
      child.get_colored_name(),
      ' だよ！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, '！おなかすいた！']);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_2(child, you, callname) {
    const temp = [];
    // TALENTNAME:35 = 腋毛成长
    if (era.get(`talent:${child.id}:35`)) {
      temp.push('わきに毛が生えてきた……');
    }
    // TALENTNAME:36 = 阴毛成长
    if (era.get(`talent:${child.id}:36`)) {
      temp.push('下に毛が生えてきた……');
    }
    if (child.sex_code !== 1) {
      temp.push('胸が大きくなった……');
      // TALENTNAME:32 = 泌乳
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('白いものが流れてきた……');
      }
    }
    if (child.sex_code > 0) {
      temp.push('下が大きくなった……');
    }
    await child.say_and_wait([
      callname,
      '……体の調子がちょっと変で……あの、',
      get_random_entry(temp),
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_estrus(child, you, callname) {
    child.say(['はぁ……はぁ……', callname, '……熱いよ……これが発情期……？']);
    await era.printAndWait([
      'そのあと、',
      you.get_colored_name(),
      ' は急いで ',
      child.get_colored_name(),
      ' に発情抑制剤を買いに走った。',
    ]);
  },
  growth_0: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' は一緒に楽しそうに子供と遊び、三人で幸せな親子の時間を過ごした。',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は自分に似た ',
            child.get_colored_name(),
            ' を見つめ、これからの家庭のことを考えている……',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' は一緒に楽しそうに子供と遊び、三人で幸せな親子の時間を過ごした。',
        ]);
        await era.printAndWait([
          'そのあと、',
          mother.get_colored_name(),
          ' は子供を背負った ',
          father.get_colored_name(),
          ' に、申し訳なさそうな目を向けた。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' は ',
          mother.get_colored_name(),
          'の',
          // CFLAGNAME:6 = 身高
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
            ? '頭'
            : '頬',
          'を撫で、気にしていないと示した。',
        ]);
        await era.printAndWait([
          '許された ',
          mother.get_colored_name(),
          ' は再び ',
          child.get_colored_name(),
          ' へ視線を戻し、慈愛の笑みを浮かべた。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は温かい笑みを浮かべて子供と遊んだ。',
            child.get_colored_name(),
            ' という子は、',
            mother.get_colored_name(),
            ' の惨い人生のなかで、数少ない慰めにもなっている。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は ',
            father.get_colored_name(),
            ' が子供と過ごしたがるのを拒みはしなかったが、',
            father.get_colored_name(),
            ' にはそっけなかった。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は結局警戒を解き、',
            father.get_colored_name(),
            ' と一緒に子供と遊んだ。',
          ]);
        }
      }
    };
    f.title = '成長';
    return f;
  })(),
  growth_1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は ',
          father.get_colored_name(),
          ' の肩に寄りかかり、日ごとに成長する子供を見て、幸せそうに微笑んだ。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は日ごとに成長する子供を見るたび、',
            father.get_colored_name(),
            ' への思いがいっそう複雑になっていく。',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、これほど睦まじい子供もすぐに羽ばたいて自分のもとから去ると考えると、胸が寂しくなった。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'それでも ',
            mother.get_colored_name(),
            ' は ',
            father.get_colored_name(),
            ' の肩に寄りかかり、日ごとに成長する子供を見て、わずかに充足を味わった。',
          ]);
        }
      }
    };
    f.title = '本格化';
    return f;
  })(),
  growth_2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' は、子供の入学同意書にそれぞれ自分の名を記した。',
        ]);
        await era.printAndWait([
          '書き終えると、',
          mother.get_colored_name(),
          ' は早速、通学に必要なものを揃え始めた。',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は子供もトレセン学園へ入ると知り、背筋が凍るような寒気を覚えた……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' と ',
            father.get_colored_name(),
            ' は、子供の入学同意書にそれぞれ自分の名を記した。',
          ]);
          await era.printAndWait([
            '書き終えてもなお、',
            mother.get_colored_name(),
            ' は現実味のない幻のような感覚を引きずっていた。',
          ]);
        }
        // MARKNAME:2 = 同心
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'それでも ',
            mother.get_colored_name(),
            ' はそんな思いを振り払い、通学に必要なものを揃え始めた。',
          ]);
        }
      }
    };
    f.title = '入学';
    return f;
  })(),
  /**
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   * @param {PrintedSpan} call_child
   */
  async load_talk(child, callname, call_child) {
    // CFLAGNAME:65 = 成长阶段
    switch (era.get(`cflag:${child.id}:15`)) {
      case 0:
        await child.say_and_wait([
          'うわあああん——',
          callname,
          '——',
          callname,
          'がいい——',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '……あのね……置いていかないで、',
          call_child,
          'を……（すすり泣き）',
        ]);
    }
  },
};
