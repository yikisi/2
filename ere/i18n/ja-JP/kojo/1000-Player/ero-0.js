/**
 * @file プレイヤー - 調教
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
      chara.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      ' の奉仕を受け、',
      you.get_colored_name(),
      ' の ',
      penis_desc,
      ' 肉棒はすぐに硬くそそり立った。',
    ]);
  },
  bt_cum_in: '射精する！',
  bt_cum_not: 'もう少し我慢',
  get_cum_on_body: (target) => `${target} の身体に出す！`,
  get_cum_on_face: (targets) => `${targets} の顔に出す！`,
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} stop_success 寸止めに成功したか
   * @param {boolean} change_aim 他の部位へ出すことを選んだか
   * @param {boolean} cum_on_face 他の部位へ出す場合、顔射か。フェラで体外なら顔射、性交・肛交で体外なら身体
   * @param {[]} targets
   */
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), ' は我慢しきれなかった！']);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          ' は陰茎を抜き、',
          ...targets,
          ' の顔に向けた。',
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          ' は陰茎を抜き、',
          ...targets,
          ' の身体に向けた。',
        ]);
      }
    } else {
      era.print([
        you.get_colored_name(),
        ' は射精の衝動を、とりあえず抑え込んだ……',
      ]);
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
          ' は下腹の淫紋に浮かぶ妊娠の模様を見つめ、トイレへ駆け込んで吐いた。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は手にした妊娠検査薬を見つめ、トイレへ駆け込んで吐いた。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は、自分がどう孕んだのか全く覚えていない。誰が犯人でもおかしくないと思うだけで、',
          you.get_colored_name(),
          ' はぞっとした……',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '……それなのに、',
            you.get_colored_name(),
            ' は父親にだってなれたはずなのに……',
          ]);
        }
      } else {
        await era.printAndWait([
          '短い混乱のあと、',
          you.get_colored_name(),
          ' はやはり ',
          father.get_colored_name(),
          ' に知らせることにした。',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は何度も聞き返したが、子が自分の血を引いているという答えは変わらなかった。',
          ]);
          await era.printAndWait([
            'だが ',
            father.get_colored_name(),
            ' には、その記憶がまったくない……',
          ]);
        } else {
          await era.printAndWait([
            '同じように慌てたあと、落ち着きを取り戻した ',
            father.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' に父親としての責任を果たすと約束した……',
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
        ' は病床に横たわり、産んだ子を見つめながら、ぼんやりと父親のことを思い浮かべる。',
      ]);
      await era.printAndWait([
        'こんなに短いあいだに、',
        father.get_colored_name(),
        ' があそこまで早く育ち、女性（',
        you.get_colored_name(),
        '）に子を産ませる歳になるとは、思ってもみなかった。',
      ]);
      await era.printAndWait([
        '噂をすれば、',
        father.get_colored_name(),
        ' が部屋へ飛び込んできた。かつて自分の腕の中で乳を飲んでいた子の、いまの後ろ姿に、',
        you.get_colored_name(),
        ' は顔を赤らめて胸を高鳴らせずにはいられない。',
      ]);
      await era.printAndWait([
        '母であるより、',
        you.get_colored_name(),
        ' は ',
        father.get_colored_name(),
        ' の恋人でいる幸せを選んだ。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は子を抱き、心配が尽きない。',
        father.get_colored_name(),
        ' との近親相姦で生まれた子だ。この子のこれからを、',
        you.get_colored_name(),
        ' は案じてしまう。',
      ]);
      await era.printAndWait([
        'あのとき ',
        father.get_colored_name(),
        ' と……',
        you.get_colored_name(),
        ' はそうこぼしたくなるのに、言葉にできない。',
      ]);
      await era.printAndWait(
        '母としての愛情と、恋人としての愛情が混ざり合い、当人にも判別のつかない感情になっていた。',
      );
      await era.printAndWait([
        'やがてそれは甘えた叱り声となり、遅れてやってきた ',
        father.get_colored_name(),
        ' に浴びせられた。',
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
      await era.printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      era.printButton('子の父親を無視する', 1);
      era.printButton(`${father.sex}も一緒に見よう`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          father.get_colored_name(),
          ' を見る目は虚ろなのに、子には慈しみを浮かべている。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は迷った末、手招きして ',
          father.get_colored_name(),
          ' を近づかせた。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' は喜んで ',
          you.get_colored_name(),
          ' を抱き寄せ、ふたりで眠る子をあやす。',
        ]);
      }
    };
    f.title = '新しい命';
    return f;
  })(),
};
