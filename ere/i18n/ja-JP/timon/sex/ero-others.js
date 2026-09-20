/**
 * @file 調教の地の文 - その他
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');

module.exports = {
  /** @param {CharaTalk} chara 3Pに加わりたい第三者 */
  async join_3p(chara) {
    era.print([
      chara.get_colored_name(),
      ' は頬を赤らめ、加わりたがっている……受け入れる？',
    ]);
    era.printButton('「ちょうどいいところに」', 1);
    era.printButton('やめておく……', 2);
    return (await era.input()) === 1;
  },
  /**
   * @param {CharaTalk} chara 3Pに加わりたい第三者
   * @param {CharaTalk} you プレイヤー
   */
  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の胸へ飛び込んだ……',
    ]);
  },
  /**
   * @param {CharaTalk} chara 3Pに加わりたい第三者
   * @param {CharaTalk} lover 主な相手
   * @param {CharaTalk} you プレイヤー
   */
  async join_3p_force(chara, lover, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は ',
      lover.get_colored_name(),
      ' の同意を得ると、',
      you.get_colored_name(),
      ' の抗議を華麗に無視した……',
    ]);
  },
  /** @param {CharaTalk} chara 3Pに加わりたい第三者 */
  async join_3p_reject(chara) {
    await era.printAndWait([chara.get_colored_name(), ' は顔を覆って去った……']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {string} p_desc 肉棒の大きさの形容
   */
  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    ' の',
    p_desc,
    '肉棒が勃起した！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {string} b_desc 胸の大きさの形容
   */
  get_nipple_be_erect: (chara, b_desc) => [
    '色の濃いさくらんぼが、',
    chara.get_colored_name(),
    ' の',
    b_desc,
    '両胸の先から顔を出した……',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' が濡れた！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' はまだ出血している！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    ' の ',
    part,
    ' が裂けた！',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_virgin trueなら処女喪失、falseなら童貞喪失
   */
  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? ' は処女を失った！' : ' は童貞を失った！',
  ],
  /**
   * 射精時、どこへ出させるかの提示
   * @param {CharaTalk} chara
   */
  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    ' の肉棒は限界に達している……',
  ],
  /**
   * 体内へ出すボタン
   * @param {string} part 接触部位
   */
  get_bt_cum_in: (part) => `${part}で受け止める`,
  /** 体外へ出すボタン */
  bt_cum_out: '精を避ける',
  /**
   * 体外射精を選んだ結果
   * @param {CharaTalk} chara 射精する側
   * @param {CharaTalk} you プレイヤー
   * @param {string} part 接触部位
   * @param {boolean} stop_success 体外に成功したか
   * @param {boolean} towards_face 顔か体か
   */
  async orgasm_denial(chara, you, part, stop_success, towards_face) {
    if (stop_success) {
      era.print([
        you.get_colored_name(),
        ' の ',
        part,
        ' は、準備の整った ',
        chara.get_colored_name(),
        ' の肉棒を吐き出し、温かな精液は ',
        you.get_colored_name(),
        ' の',
        towards_face ? '顔' : '体',
        'へ真っ直ぐ飛んだ……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' との競り合いに負けた……',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    ' は体力を使い果たし、力尽きた……',
  ],
  /** @param {CharaTalk} chara */
  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    ' は気力を使い果たし、失神した……',
  ],
  /**
   * 快楽刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pleasure(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は強い快感に体を震わせている……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は快感の余韻に浸り、表情が緩んでいる……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は強い快楽に心身を焼かれたようだ……',
        ]);
    }
  },
  /**
   * 同心刻印
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async mark_meek(chara, you) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は、より一心同体になった……',
      ]);
    } else {
      await era.printAndWait([chara.get_colored_name(), ' はさらに屈服した……']);
    }
  },
  /**
   * 苦痛刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pain(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は顔を歪め、痛みに耐えている……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は苦しげな悲鳴を上げた……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' はあまりの痛みに泣き叫んだ……',
        ]);
    }
  },
  /**
   * 恥辱刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_shame(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は辱めに頬を赤らめた……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は恥辱に支配されたようだ……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は完全に恥辱に支配された……',
        ]);
    }
  },
  /**
   * 反抗刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_hate(chara, level) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait('すでに親密な関係だが、やりすぎたようだ');
    }
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は鋭い目で睨んできた……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は怒りの表情を浮かべた……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' は怒りで顔を歪め、低く呪詛を吐いた……',
        ]);
    }
  },
  /**
   * 淫紋
   * @param {CharaTalk} chara
   * @param {number} level
   * @param {boolean} is_new 新たに得た淫紋か
   */
  async mark_ero(chara, level, is_new) {
    if (is_new) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' の下腹に淫紋が現れた……',
      ]);
    }
    switch (level) {
      case 1:
        await era.printAndWait('淫紋は卵子の軌跡を示すようになった……');
        break;
      case 2:
        await era.printAndWait(
          '淫紋は胎児の成長とともに、さらに華やかになる……',
        );
        break;
      case 3:
        await era.printAndWait('淫紋は妊娠率と受胎の様子を示すようになった……');
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} mother 中出しされた母側
   * @param {CharaTalk} father 中出しした父側
   * @param {boolean} is_mother_awake 母側が起きているか
   * @param {boolean} is_father_awake 父側が起きているか
   * @param {boolean} inmon_no_preg 淫紋による避妊か
   */
  async cum_in_womb(
    mother,
    father,
    is_mother_awake,
    is_father_awake,
    inmon_no_preg,
  ) {
    const talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
      era.get(`mark:${mother.id}:欢愉`) >= 2;
    const talent_sex =
      era.get(`talent:${mother.id}:淫乱`) > 0 ||
      era.get(`talent:${mother.id}:榨精成瘾`) > 0;
    const has_lv2_inmon = era.get(`mark:${mother.id}:淫纹`) >= 2;
    let talent_check = talent_palam || talent_sex;
    if (has_lv2_inmon) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' の下腹で、子宮を表すハートの模様がゆっくりと埋まっていく……',
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) > 0 ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) > 0 ||
      era.get(`status:${mother.id}:短效避孕药`) > 0 ||
      inmon_no_preg
    ) {
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            father.get_colored_name(),
            ' の温かな精液が、疼く ',
            mother.get_colored_name(),
            ' の子宮を満たしていく……',
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            ' は快感に溺れている……',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' は屈辱のなかで、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' は喜びながら、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が薄い膜に阻まれていないことに気づいた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、無防備な ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、自分が孕むかもしれない事実に恐怖した……',
          ]);
        }
      } else if (love < 90) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が遮られずに進んでいるのを感じた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、防備を解いた ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、自分が孕むかもしれない事実を、ぼんやりと悟った……',
          ]);
        }
      } else {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が遮られずに進んでいることに驚いた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、妊娠を望む ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、母になる感覚を喜んで味わっている……',
          ]);
        }
      }
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、疼く子宮が精液で満たされる快感に溺れ、妊娠の可能性など顧みなかった……',
          ]);
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              era.get('tflag:强奸') !== father.id
                ? ' は屈辱のなかで、'
                : ' は喜びながら、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    }
  },
  /**
   * 中出し受精を淫紋がすぐ感知した場合
   * @param {CharaTalk} mother 受胎した母側
   * @param {CharaTalk} father 中出しした父側
   */
  be_pregnant(mother, father) {
    era.print([
      father.get_colored_name(),
      ' が中に出したあと、',
      mother.get_colored_name(),
      ' の淫紋の様子がおかしくなった……',
    ]);
  },
  report_preg_in_love: (() => {
    /**
     * 良縁以上の関係での妊娠
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は下腹の淫紋に現れた妊娠の模様を喜び、嬉しそうに ',
          father.get_colored_name(),
          ' へ知らせた。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は手にした妊娠検査薬を喜び、嬉しそうに ',
          father.get_colored_name(),
          ' へ知らせた。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          ' は何度も確認したが、子は自分の血を引く、との答えしか返ってこなかった。',
        ]);
        await era.printAndWait([
          'だが ',
          father.get_colored_name(),
          ' には、その記憶がない……',
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            'どう孕んだかの記憶はないが、',
            mother.get_colored_name(),
            ' は、子の父は愛する ',
            father.get_colored_name(),
            ' 以外にありえないと信じている。',
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          ' はそっと ',
          mother.get_colored_name(),
          ' を抱き、新しい命が宿った時をともに祝った……',
        ]);
      }
    };
    f.title = '受胎';
    return f;
  })(),
  report_preg: (() => {
    /**
     * 熱恋以下の関係での妊娠
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は青ざめた顔で下腹の淫紋に現れた妊娠の模様を見ると、洗面所へ駆け込み、吐いた。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は青ざめた顔で手にした妊娠検査薬を見ると、また洗面台で吐いた。',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' は、どう孕んだかの記憶がまったくない。犯人が ',
          father.get_colored_name(),
          ' だとは信じがたいが、思い返せば',
          father.sex,
          'しかありえない……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          'その後、',
          mother.get_colored_name(),
          ' は慎重に ',
          father.get_colored_name(),
          ' へ妊娠を告げた。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' は何度も確認したが、子は自分の血を引く、との答えしか返ってこなかった。',
        ]);
        await era.printAndWait([
          '記憶はないのに、',
          father.get_colored_name(),
          ' は ',
          mother.get_colored_name(),
          ' の涙を見て、父としての責任を選んだ……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '……もっとも ',
            father.get_colored_name(),
            ' も、母になりたい気持ちが少しあった……',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          'その後、',
          mother.get_colored_name(),
          ' はおどおどと ',
          father.get_colored_name(),
          ' へ妊娠を告げた。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' は、',
          mother.get_colored_name(),
          ' の目尻に涙が浮かぶのを見た……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' は怯えたまま、',
          father.get_colored_name(),
          ' に父としての責任を願った……',
        ]);
      } else {
        await era.printAndWait([
          'その後、',
          mother.get_colored_name(),
          ' は冷たく ',
          father.get_colored_name(),
          ' へ妊娠を告げた。',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' は、',
          mother.get_colored_name(),
          ' の目尻に涙が浮かぶのを見た……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' は恨めしげに、',
          father.get_colored_name(),
          ' に父としての責任を求めた……',
        ]);
      }
    };
    f.title = '予期せぬ妊娠';
    return f;
  })(),
  have_baby: (() => {
    /**
     * 子の誕生。熱恋以下の関係
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' はおずおずと ',
          father.get_colored_name(),
          ' を見た。子の父と、どう向き合えばいいかわからないようだ。',
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' はおずおずと ',
          father.get_colored_name(),
          ' を見た。子の父を、どう見ればいいかわからないようだ。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' が ',
          father.get_colored_name(),
          ' を見る目は空虚だったが、子へは慈しみを向けていた。',
        ]);
      }
    };
    f.title = '新しい命';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} awake 起きているか
   */
  async shop_start(chara, you, awake) {
    if (!awake) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は眠っており、',
        you.get_colored_name(),
        ` が${chara.sex}に何をしようとしているか、まったく気づいていない……`,
      ]);
    } else if (era.get(`mark:${chara.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は冷たく ',
        you.get_colored_name(),
        ' を見ている。瞳にあるのは恨みだけだ……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は挑発するように ',
        you.get_colored_name(),
        ' を見た。性奴隷程度に、何ができるというのか……',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' はうずうずと ',
        you.get_colored_name(),
        ' を見ている。自分にどんな変化が起きるか、待ちきれないようだ……',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は怯えた目で ',
        you.get_colored_name(),
        ' を見ている。なぜこんなことをするのか、わからない……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は不安げに ',
        you.get_colored_name(),
        ' を見ている。これから何が起きるか、わからない……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_sleep(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は眠っており、',
      you.get_colored_name(),
      ` が${chara.sex}にしたことに、まったく気づいていない……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は体の変化に耐えながら、',
      you.get_colored_name(),
      ` が${chara.sex}を性玩具として弄ぶのを、毒づいた……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は体の変化を感じ、',
      you.get_colored_name(),
      ' と一緒に快楽を味わいたくてたまらない……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を見て涙ぐんだ。だが意識は、いつか体に引きずられて変わっていく……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は失望して ',
      you.get_colored_name(),
      ' を見た。',
      you.get_colored_name(),
      ` が${chara.sex}の体に満足していない事実が、悲しい……`,
    ]);
  },
  /**
   * 初めて不貞に気づく
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 気性（淫紋で歪められている場合あり）
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed_first(chara, you, characteristic, cuckold) {
    if (chara.race > 0) {
      era.print([
        chara.uma_sex_title,
        'の鼻は鋭い。',
        you.get_colored_name(),
        ' から漂う淫らな匂いは、先ほどウマ跳びをした事実を周囲に告げている。',
      ]);
      era.print([
        '匂いを嗅いだ ',
        chara.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の不実に',
        cuckold
          ? 'かすかな情欲を覚えた……'
          : characteristic >= 0
            ? '憤りを覚えた……'
            : '悲しみを覚えた……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' から漂う淫らな匂いは、先ほどウマ跳びをした事実を周囲に告げている。',
      ]);
      era.print([
        'それに気づいた ',
        chara.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の不実に',
        cuckold
          ? 'かすかな情欲を覚えた……'
          : characteristic >= 0
            ? '憤りを覚えた……'
            : '悲しみを覚えた……',
      ]);
    }
  },
  /**
   * 二度目の不貞
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 気性（淫紋で歪められている場合あり）
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed_second(chara, you, characteristic, cuckold) {
    era.print([
      you.get_colored_name(),
      ' は誘惑に負け、再び ',
      chara.get_colored_name(),
      ' を裏切った。',
    ]);
    era.print('一時の欲の解放の裏で、どれだけの想いが絡みついているのだろう？');
    era.print([
      chara.race > 0 ? '匂いを嗅いだ ' : 'それに気づいた ',
      chara.get_colored_name(),
      ' は、',
      you.get_colored_name(),
      ' の不実に',
      cuckold
        ? 'かすかな情欲を覚えた……'
        : characteristic >= 0
          ? '憤りを覚えた……'
          : '悲しみを覚えた……',
    ]);
  },
  /**
   * 何度も不貞に気づく
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed(chara, you, cuckold) {
    if (cuckold) {
      era.print([
        you.get_colored_name(),
        ' の不実は、',
        chara.get_colored_name(),
        ' を深く傷つけながら、言いがたいかすかな興奮も湧かせた……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' の不実に、',
        chara.get_colored_name(),
        ' は激しく怒っている……',
      ]);
    }
  },
};
