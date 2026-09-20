/**
 * @file 恋慕の地の文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: '関係を進める',
  update_no: 'まだ進めない',
  49: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'ある夜、',
        chara.get_colored_name(),
        ' は激しくひとりで慰めながら、',
        you.get_colored_name(),
        ' の名を呼んで絶頂した。',
      ]);
    };
    f.title = '愛欲';
    return f;
  })(),
  '74-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        'ある夜、',
        chara.get_colored_name(),
        ' は自分の ',
        you.get_colored_name(),
        ' への気持ちが、ただの関係を超えたときめきだと気づき始めていた。',
      ]);
      await chara.print_and_wait(
        'それは年相応の初恋なのか。それとも、日々を並べて過ごすうちに生まれた錯覚なのか。',
      );
      era.printButton('「本気かもしれない……」（関係を進める）', 1);
      era.printButton('「いや、考えすぎだろう……」（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' は、自分の ',
          you.get_colored_name(),
          ' への想いをはっきりと認めた。',
        ]);
        await chara.print_and_wait([
          ' どうしても ',
          you.get_colored_name(),
          ' に伝えなくては……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' は、そう覚悟を決めた。',
        ]);
      } else {
        await chara.say_and_wait('錯覚だよね……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' は首を振り、寝返りを打って、やがて眠りへ落ちていった……',
        ]);
      }
      return ret;
    };
    f.title = '恋心';
    return f;
  })(),
  '74-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      // FLAGNAME:5 = 当前互动角色
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          'トレーナー室へ戻ると、',
          chara.get_colored_name(),
          ' は緊張した顔で ',
          you.get_colored_name(),
          ' に交際を申し入れた。',
        ]);
      } else {
        await era.printAndWait([
          'トレーナー室へ戻ると、',
          chara.get_colored_name(),
          ' は緊張した顔で ',
          you.get_colored_name(),
          ' を探し出し、交際を申し入れた。',
        ]);
      }
      era.print([
        'どうする？ ',
        chara.get_colored_name(),
        ' を恋人として受け入れるか、それとも冷たく拒むか。',
      ]);
      era.printButton('受け入れる（関係を進める）', 1);
      era.printButton('断る（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の肯定の返事を聞き、',
          chara.get_colored_name(),
          ' は張りつめていた顔をほころばせ、興奮した様子で',
          // CFLAGNAME:6 = 身高
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? [' ', you.get_colored_name(), ' の胸に飛び込んだ。']
            : [' ', you.get_colored_name(), ' を胸へ引き寄せた。']),
        ]);
        await era.printAndWait([
          'これから先、ふたりのあいだには恋人という層がひとつ増えた。',
        ]);
      } else {
        await era.printAndWait([
          '胸の内には万感が渦巻いていたが、',
          you.get_colored_name(),
          ' は、ふたりが添い遂げることはないと信じた。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' は朱い唇を軽く噛み、全身を震わせて涙をこらえた。',
        ]);
        await era.printAndWait([
          '礼を尽くすため、',
          you.get_colored_name(),
          ` は${chara.sex}を丁寧に慰め、傷心の驟雨が静まるまでそばにいた。`,
        ]);
      }
      return ret;
    };
    f.title = '衝動';
    return f;
  })(),
  '89-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'ある夜、',
        chara.get_colored_name(),
        ' は自分と ',
        you.get_colored_name(),
        ' の睦まじい場面を思い浮かべ、幸せで胸がいっぱいになった。',
      ]);
      await chara.print_and_wait([
        '関係をもう一歩進めよう……',
        chara.get_colored_name(),
        ' はそう思った。',
      ]);
    };
    f.title = '相伴';
    return f;
  })(),
  '89-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        'ある日、',
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を外へ連れ出し、デートをした。',
      ]);
      era.print([
        '一日のロマンスと寄り添いのあと、',
        chara.get_colored_name(),
        ' は覚悟の込もった目で、',
        you.get_colored_name(),
        ' に結婚指輪を差し出した。',
      ]);
      era.printButton('受け入れる（関係を進める）', 1);
      era.printButton('断る（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は手を伸ばして指輪を受け取った。あれほど多くのことを乗り越えたのなら、結ばれる時機はもう来ていた。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' は興奮して ',
          you.get_colored_name(),
          ' に熱い口づけを捧げた。これから先、ふたりは貧富も病も健康も越えて、人生の道を支え合い、死ぬまで添い遂げる……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は指輪を受け取らなかった……',
        ]);
        await era.printAndWait([
          {
            content: 'あれほど多くのことを乗り越えてもなお、',
          },
          you.get_colored_name(),
          ' は、これが正しい決断かどうか確信が持てなかった。',
        ]);
        await era.printAndWait(
          '倫理、人間関係、社会的な責任……考えるべきこと、ふたりを縛ることのあまりの多さ。',
        );
        era.print([
          'ただ、',
          chara.get_colored_name(),
          ' の落ち込む顔を見て、',
          you.get_colored_name(),
          ' も思わず考える。そこまで考える必要があるだろうか……',
        ]);
      }
      return ret;
    };
    f.title = '誓い';
    return f;
  })(),
  '99-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'ある夜、',
        chara.get_colored_name(),
        ' はベッドの上で寝返りを打ち続け、どうしても眠れなかった。',
      ]);
      await chara.print_and_wait([
        chara.get_colored_name(),
        ' の頭の中は、さまざまな理由で ',
        you.get_colored_name(),
        ' が',
        chara.sex,
        'のもとを去る場面で埋め尽くされ、それを思うだけで胸が締めつけられた……',
      ]);
    };
    f.title = '悪夢';
    return f;
  })(),
  '99-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は誰よりも早くトレーナー室へ着き、',
        you.get_colored_name(),
        ' を離さず抱きしめた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はわけもわからず何度も慰め、ようやく ',
        chara.get_colored_name(),
        ' の気持ちを落ち着かせた。',
      ]);
    };
    f.title = '依存';
    return f;
  })(),
};
