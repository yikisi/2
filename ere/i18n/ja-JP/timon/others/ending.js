/**
 * @file 地の文 - 結末
 * <br>ゲーム終了につながる結末は、必ずバッドエンドである！
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  loser: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        ' が怠りすぎたのか、担当の天賦が足りなかったのか。勝利は、いつまでも遠いままだった。',
      ]);
      await era.printAndWait([
        'どれほど励んでも甲斐はなく、ついには校側が ',
        you.get_colored_name(),
        ' と担当の契約解除と移籍を命じた。',
      ]);
      await era.printAndWait([
        '社会的評価が低すぎて解雇された ',
        you.get_colored_name(),
        ' は、結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '門前払い';
    return f;
  })(),
  hentai: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        ' は大人としての社会的責任を忘れ、担当に変態行為を唆したことが露見した。トレセンとて、',
        you.get_colored_name(),
        ' の過去を覆い隠すことはできない。',
      ]);
      await era.printAndWait([
        'ついには校側が ',
        you.get_colored_name(),
        ' と担当の契約解除と移籍を命じた。',
      ]);
      await era.printAndWait([
        '社会的評価が低すぎて解雇された ',
        you.get_colored_name(),
        ' は、結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '身の破滅';
    return f;
  })(),
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        '金に腐った ',
        you.get_colored_name(),
        ' は、選んではならない道へ足を踏み入れた——自尊を捨て、自分の生徒から金を借りる……',
      ]);
      await era.printAndWait('だが運命の贈り物には、みな裏で値がついている。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の借入は、雪だるま式の複利のなかで、ついに ',
        you.get_colored_name(),
        ' が耐えうる重さを超えた。',
      ]);
      await era.printAndWait([
        'あとは、',
        you.get_colored_name(),
        ' が代価を返す番だ……',
      ]);
      await era.printAndWait([
        '金の関係に囚われた ',
        you.get_colored_name(),
        ' は、結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '金の奴隷';
    return f;
  })(),
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          '出走でも取材でも、',
          you.get_colored_name(),
          ' と担当の険悪さは衆目の知るところだった。その険悪さが担当の成長を妨げているという声は止まらず、校側もこの組み合わせに堪忍袋の緒が切れ始めていた……だが、彼らよりさらに耐性のない者たちがいた。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' が怠りすぎたのか、担当',
          chara.uma_sex_title,
          'の天賦が足りなかったのか。勝利はいつまでも遠いままだった。校側もこの組み合わせに堪忍袋の緒が切れ始めていた……だが、彼らよりさらに耐性のない者たちがいた。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' へ渡すハチミツケーキを片手に、大雨の道をひとり歩いていた。背後から急な足音がし、それから腰に錐のような痛みが走った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は地面に押し倒され、背後の者は背中へ刺し続けた。',
        you.get_colored_name(),
        ' が動かなくなるまで。',
      ]);
      await era.printAndWait(
        'ケーキ箱を包んだビニール袋は、雨粒に激しく叩かれ、叩かれ、叩かれ続けた……',
      );
      await era.printAndWait('怒れるファンの報復を受け、結末を迎えた……');
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'ファン襲撃';
    return f;
  })(),
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait('トレセンの、どの探知機にも映らない地下室で……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は手足を縛る縄を必死にほどこうとしたが、自分を締めつけるだけだった。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' はベッドの縁に座り、',
        you.get_colored_name(),
        ' に嫣然と微笑み、優しく世話をした。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の胸にあるのは、未知の未来への深い恐怖だけだった……',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' の愛に囚われ、',
        you.get_colored_name(),
        ' は結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '情愛の牢獄';
    return f;
  })(),

  /**
   * 闇取引を選んだあとの三段階の懲罰イベント
   */

  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment1(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      '人は自由を奪われて初めて……自分を本当に知る、とも言う。',
    );
    await you.say_as_unknown_and_wait(
      'では……あなたは、自分をどれほど知っている？',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '……怠惰、傲慢',
      era.get('flag:变态行为') > 0 ? '、色欲' : '',
      '……今日……あなたは新生した。',
    ]);
    await you.say_as_unknown_and_wait(
      'だがすぐに分かるだろう……自由にも代価がある。',
    );
    await you.say_as_unknown_and_wait(
      '牢獄はあなたと同行する……この肉体が、永遠の懲罰になる。',
    );
    await you.say_as_unknown_and_wait(
      '贖罪はこれから始まる——もっと苦しめたくなければ、力の限り走れ。',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      ' さん——自由が呼んでいる。',
    ]);
    await you.say_as_unknown_and_wait('二度と会わないことを願う。');
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    if (era.get('cflag:0:种族') > 0) {
      await era.printAndWait([you.get_colored_name(), ' は改造を受けた！']);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' はウマ娘へ変えられた！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はこれまでどおり',
        uma,
        'を募集し、',
        they,
        'を鍛え、',
        they,
        'と走ることはできる。だがトレセンから支給される給与はもうない。',
      ]);
      await era.printAndWait([
        'その代わり、',
        you.get_colored_name(),
        ' は自主トレーニングをし、レースに出走し、賞金と社会的名声を得ることができる。',
      ]);
    }
    await era.printAndWait(
      '名声が再びゼロを下回れば、さらに厳しい罰が待っている！',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {TextContent} date
   * @param {string} uma
   * @param {string} they
   */
  async punishment2(you, date, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('性 奴 宣 言', {
      align: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait([
      '本牝馬 ',
      you.get_colored_actual_name(),
      ' は、自ら',
      uma,
      '様方の奴隷となることを望む。',
    ]);
    await era.printAndWait(
      '身心を、主人たちを悦ばせる最適な状態へ整え、すべての人権を永遠に放棄する。',
    );
    await era.printAndWait(
      '以後、主人たちのあらゆる調教を受け、あらゆる指令に従い、一切の異議を唱えない。',
    );
    era.setOffset(13);
    era.setWidth(5);
    era.setAlign('center');
    era.print([you.get_colored_actual_name()]);
    era.print(`<${you.name} の唇印>`);
    era.print(`<${you.name} の乳頭印>`);
    await era.printAndWait(`<${you.name} の陰唇印>`);
    await era.printAndWait(date);
    era.setAlign('left');
    era.setOffset(0);
    era.setWidth(24);
    era.println();
    await era.printAndWait([
      'こうして「自ら」宣言に署名したあと、',
      you.get_colored_name(),
      ' は',
      uma,
      'たちの性奴へ改造された！',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' はこれまでどおり',
      uma,
      'を募集し、',
      they,
      'を鍛え、',
      they,
      'と走り、自主トレーニングをし、レースに出走できる。',
    ]);
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' のより重要な務めは、',
      they,
      'の性欲を受け止めることだ！',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' の体はすでに感度の極みへ整えられている。性の技を磨き、主人たちを悦ばせ、名声を得よ！',
    ]);
    await era.printAndWait(
      '名声が再びゼロを下回れば、さらに厳しい罰が待っている！',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment3(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      'ここまで堕ちるとは、思ってもみなかった。',
    );
    await you.say_as_unknown_and_wait(
      'あなたの手には、谷底から地表へ戻る縄が握られていた。',
    );
    await you.say_as_unknown_and_wait('だがあなたは、その命綱を捨てた。');
    await you.say_as_unknown_and_wait(
      'いまとなっては、すべてが取り返しのつかないところまで流れるのを、わざと見ていたのではないかとすら疑う。',
    );
    await you.say_as_unknown_and_wait(
      'こちらは、人権を残す機会をあれほど何度も与えたのに。',
    );
    await you.say_as_unknown_and_wait(
      'もっとも、いまのあなたにはもう聞こえないだろう。',
    );
    await you.say_as_unknown_and_wait([
      'では、二度と会うことはない。',
      you.get_colored_actual_name(),
      ' さん。',
    ]);
    await you.say_as_unknown_and_wait([
      {
        color: '#ff7373',
        content: 'GAME OVER',
        fontWeight: 'bold',
      },
    ]);
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    await era.printAndWait([
      '繁殖用の牝馬。それが ',
      you.get_colored_name(),
      ' の末路だ。',
    ]);
    await era.printAndWait('かつての壮志は風に散り、理想は無慈悲に砕かれた。');
    if (you.sex_code > 0) {
      await era.printAndWait([
        'これからの ',
        you.get_colored_name(),
        ' の務めは、短い肉棒で高貴な',
        uma,
        'を悦ばせ、劣った穴で神聖な因子を受け、彼女たちとの優れた子孫を産むことだ！',
      ]);
    } else {
      await era.printAndWait([
        'これからの ',
        you.get_colored_name(),
        ' の務めは、劣った穴で神聖な因子を受け、',
        they,
        'との優れた子孫を産むことだ！',
      ]);
    }
    await era.printAndWait([
      '人権はすでに ',
      you.get_colored_name(),
      ' から遠ざかったが、孕袋として精進は続けよ。',
    ]);
    await era.printAndWait([
      '運がよければ、',
      you.get_colored_name(),
      ' は子によって貴くなるかもしれない！',
    ]);
  },
  /** @param {CharaTalk} you */
  get_basement_ending_confirm: (you) => [
    you.get_colored_name(),
    ' は地下室で結末を迎えた……',
    { isBr: true },
    '地下室の結末を見る？',
  ],
  bt_confirm_yes: '惨状を直視する',
  bt_confirm_no: '見たくない',
};
