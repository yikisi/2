/**
 * @file 育成の地の文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry, join_list } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} races
   * @param {PrintedSpan} wins
   * @param {PrintedSpan} reward
   * @param {PrintedSpan[]} race_names
   */
  get_result_list(chara, races, wins, reward, race_names) {
    const ret = [];
    ret.push([
      chara.get_colored_name(),
      '、生涯 ',
      races,
      ' 戦 ',
      wins,
      ' 勝、総獲得賞金 ',
      reward,
      ' ウマコイン',
    ]);
    if (race_names.length > 0) {
      ret.push([
        '主な勝ち鞍：',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '……' : '',
      ]);
    }
    return ret;
  },
  on_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait(
        `毎年一月、URAの${chara.uma_sex_title}殿堂は、引退したウマ娘の票選を始める。`,
      );
      era.println();
      await era.printAndWait(
        `そして三月、生涯を全うし、厳正な票選を勝ち抜いた${chara.uma_sex_title}が殿堂入りを果たし、《顕彰${chara.uma_sex_title}》という最高の栄誉を受ける。`,
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の愛馬 ',
        chara.get_colored_name(),
        '——',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `${chara.sex}を模した銅像が除幕されるとともに、`,
        ...title,
        chara.get_colored_name(),
        ' の伝説は、永遠に殿堂へ刻まれる……',
      ]);
    };
    f.title = '殿堂の座へ';
    return f;
  })(),
  under_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait('残念ながら、殿堂入りは叶わなかった。');
      era.println();
      await era.printAndWait(
        'それでも、力の限り積み上げた成果は誇りであり、後に続く者がその肩の上からさらに高い頂を目指せると信じている。',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        chara.get_colored_name(),
        ' の物語は、これからも人々の口に残るだろう……',
      ]);
    };
    f.title = '殿堂の座の下で';
    return f;
  })(),
  pl_future: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} can_sex
     */
    const f = async (chara, you, can_sex) => {
      await era.printAndWait([
        '時は白駒の隙を過ぐるがごとし。',
        chara.get_colored_name(),
        ' と過ごした歳月はすでに数年。もう少しすれば、新しい章が始まる。',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは睦まじく身を寄せ合った。',
        );
        await era.printAndWait(
          '恋人たちは幸せな二人きりの世界に浸り、俗世の雑事など虚空へ投げ捨てたかのように見える。',
        );
        era.println();
        await era.printAndWait('俺は世界の王だ！——ジャック・ドーソン', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは熱く口づけを交わした。',
        );
        await era.printAndWait(
          '情欲の気配が部屋を満たし、甘い声と肌が触れ合う音だけが響き続ける。',
        );
        era.println();
        await era.printAndWait('食色、性なり。——孟子', { align: 'center' });
      } else {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは楽しく語り合い、避けられない別れに胸を痛めた。',
        );
        await era.printAndWait(
          '人生で出会える機会は少ない。失うかもしれないからこそ、今いる人を大切にするのだ。',
        );
        era.println();
        await era.printAndWait('一期一会の心は、ただ茶の相中に見ゆ。——千利休', {
          align: 'center',
        });
      }
    };
    f.title = 'それから、未来へ';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} attr
   */
  async train(chara, you, attr) {
    const chara_name = chara.get_colored_name();
    if (!chara.id) {
      chara_name.content = '自分';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          'スピードを伸ばすため、',
          you.get_colored_name(),
          ' は ',
          chara_name,
          ' に走り込みを組んだ……',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          'スタミナを伸ばすため、',
          you.get_colored_name(),
          ' は ',
          chara_name,
          ' に水泳トレーニングを組んだ……',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          'パワーを伸ばすため、',
          you.get_colored_name(),
          ' は ',
          chara_name,
          ' にウェイトトレーニングを組んだ……',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '根性を鍛えるため、',
          you.get_colored_name(),
          ' は ',
          chara_name,
          ' に坂路トレーニングを組んだ……',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          'レース勘を磨くため、',
          you.get_colored_name(),
          ' は ',
          chara_name,
          ' にレース映像の研究を組んだ……',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), ' のトレーニングは無事に終わった！']);
  },
  ts_add: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' はまだ足りない様子だ。自主トレーニングをしたがっているのか？',
      ]);
      era.printButton('許可する！', 1);
      era.printButton('計画を超えてしまう……', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ` の自主トレーニングを黙認し、${chara.sex}のやる気を称えた`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' の自主トレーニングを止め、しっかり休むよう言い聞かせた',
        ]);
      }
      return ret;
    };
    f.title = '熱血の追加トレーニング！';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  async tf_info(chara, attr, is_fumble) {
    if (attr === attr_enum.intelligence) {
      await era.printAndWait([
        'まずい！',
        chara.get_colored_name(),
        ` が${is_fumble ? '気を失って' : '眠って'}しまった！`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push('滑って転んだ', '地面に転がった', '力が尽きた');
          break;
        case attr_enum.endurance:
          buffer.push('足がつった');
          break;
        case attr_enum.strength:
          buffer.push('泥が目に入った', '倒れた', 'サンドバッグに反撃された');
          break;
        case attr_enum.toughness:
          buffer.push('力が尽きた', '腰をやった', '転げ落ちた');
      }
      await era.printAndWait([
        'まずい！',
        chara.get_colored_name(),
        ' が',
        get_random_entry(buffer),
        '！',
      ]);
    }
  },
  train_fail: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' のトレーニングは失敗した……',
      ]);
      era.println();
      era.print('どうする？');
      era.println();
      era.printButton('「ここでしばらく休もう」', 1);
      era.printButton('「反省会だ！」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = 'トレーナー室にて……';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' のトレーニングは失敗した……',
      ]);
      era.println();
      era.print('どうする？');
      era.println();
      era.printButton('「しっかり休め！」', 1);
      era.printButton('「根性で乗り越えろ！」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '保健室にて……';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print([
        '【',
        chara.get_colored_name(),
        ' は練習が楽になってきたと感じた】',
      ]);
    } else {
      era.print([
        '【',
        chara.get_colored_name(),
        ' は練習が厳しくなってきたと感じた】',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_success
   */
  async foreign_study(chara, you, is_success) {
    if (!chara.id) {
      await era.printAndWait([
        '最低限の外国語で会話できるよう、',
        you.get_colored_name(),
        ' はホテルの部屋で勉強した……',
      ]);
    } else {
      await era.printAndWait([
        '最低限の外国語で会話できるよう、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' にホテルの部屋での勉強を組んだ……',
      ]);
    }
    if (is_success) {
      await era.printAndWait('一夜漬け、効いた！');
    } else {
      await era.printAndWait([
        'まずい！',
        chara.get_colored_name(),
        ' が眠ってしまった！',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([chara.get_colored_name(), ' は ', language, ' を覚えた！']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      ' の ',
      language,
      ' がさらに上達し、いまは ',
      new_level,
      '！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_rest(chara, you) {
    await era.printAndWait([
      '調子を戻すため、',
      you.get_colored_name(),
      ' は現地の理学療法を手配し、ホテルで体を整えた……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' の体調は、少しずつ戻ってきたようだ！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      '現地のコースに慣れるため、',
      you.get_colored_name(),
      ' はトレーニング場での適応走を組んだ……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' は、現地の馬場の感触に少しずつ慣れてきたようだ！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} loc_name
   */
  async foreign_travel(chara, you, loc_name) {
    await era.printAndWait([
      '気分をほぐすため、',
      you.get_colored_name(),
      ...(chara.id > 0
        ? [' は ', chara.get_colored_name(), ' と一緒に']
        : [' はひとりで']),
      loc_name,
      'を観光した……',
    ]);
    await era.printAndWait('かなり使ったが、それでも元は取れた！');
  },
  race_start: (() => {
    /**
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {number} item
     * @param {boolean} do_sex
     */
    const f = async (chara, you, item, do_sex) => {
      if (!item) {
        /** @author 雞雞 */
        const buffer = [
          async () => await you.say_and_wait('全力を出せばいい！'),
          async () => await you.say_and_wait('自分の走りを見せろ！'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          ' は自ら ',
          chara.get_colored_name(),
          ' にいくつかの「特別な装備」を取り付けた。',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              ' は愛らしく ',
              you.get_colored_name(),
              ' を睨み、ふたりの秘密を服の下に隠して、スタートラインへ歩いていった……',
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              ' は素直に服を整え、透ける薄桃色の光が下腹と流し目に重なる……',
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              ' はゆっくり服を着直し、玩具が体から外れないよう確かめた……',
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              ' はそっと ',
              you.get_colored_name(),
              ' の表情を窺い、それから俯いて刺激に耐えた……',
            ]);
        }
      }
    };
    f.title = 'レースの前に';
    return f;
  })(),
  race_end_item_win: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は頬を赤らめた ',
        chara.get_colored_name(),
        ' を出迎え、休憩室へ案内した。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' は入るなり解放されたような甘い声を漏らし、',
        you.get_colored_name(),
        ' は急いで扉を閉め、すべての性玩具を止めた。',
      ]);
      await era.printAndWait([
        'そのあと、',
        you.get_colored_name(),
        ' は腕の中で体を擦り寄せる ',
        chara.get_colored_name(),
        ' に、あとできちんと甘やかすと約束し、白昼の過ちだけは避けた。',
      ]);
    };
    f.title = '高ぶった勝利';
    return f;
  })(),
  race_end_item_lose: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' はうなだれた ',
        chara.get_colored_name(),
        ' を出迎え、休憩室へ案内した。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' は力なくその場に崩れた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は空気を読んで性玩具を止め、静かに声をかけた。',
      ]);
    };
    f.title = '予想どおりの敗北';
    return f;
  })(),
  race_end_win: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '最高だ！' : 'もっと上を目指そう！',
      );
    };
    f.title = 'レース勝利';
    return f;
  })(),
  race_end_5: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '今日の走りもよかった！'
          : 'あいつらには絶対に負けられない！',
      );
    };
    f.title = 'レース入着';
    return f;
  })(),
  race_end_10: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '次はもっとよくなる！'
          : '落ち込んでいても始まらない！',
      );
    };
    f.title = 'レース敗北';
    return f;
  })(),
  race_end_lose: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? 'いつか絶対に勝つ！'
          : 'このまま恥をかき続けるつもりか？',
      );
    };
    f.title = '次は負けない！';
    return f;
  })(),
  summer_start: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '夏といえば水着と海辺。もちろん、',
        chara.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は海で休みながらも、トレーニングは欠かさなかった。',
      ]);
    };
    f.title = '夏合宿';
    return f;
  })(),
};
