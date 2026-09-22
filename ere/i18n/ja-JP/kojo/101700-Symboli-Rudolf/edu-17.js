/**
 * @file シンボリルドルフ - 育成
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `トレーニングのあと、${chara17.name} はまだ足りない様子だった。`,
      );
      await era.printAndWait(
        `${chara17.sex}は遠く空の果てを見る。夕陽が沈み、最後の光が大地に落ちている。`,
      );
      await era.printAndWait(
        'すぐに夜になる。だがまだ足りない。まだ限界ではない——',
      );
      await era.printAndWait(
        `${you.name} は${chara17.sex}の心意を知っていた。`,
      );
      era.printButton('「走り続けろ！ その感覚を掴め。」', 1);
      era.printButton(
        '「今日はここまでだ。この先に、もっと大事なことがある。」',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('——征途の果てか？ 面白い。');
        } else {
          await chara17.say_and_wait(
            'ええ……なんだか、コツが掴めてきた気がします。',
          );
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('眠る……か？');
        } else {
          await chara17.say_and_wait('確かに。指摘してくれてありがとう。');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title}など、吾の相手にもならぬ。この程度に、吾が自ら出ねばならぬのか？`,
        );
      } else {
        await chara17.say_and_wait(
          '……あなたが見たい結末なら、私は反対しません。',
        );
      }
      era.printButton('「仕方のないことだ。」', 1);
      era.printButton('「もっとできるはずだ。」', 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('ふん。');
        } else {
          await chara17.say_and_wait('わかります……はあ。');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('弄臣よ、ずいぶん気位が高いな？ ふん……');
        } else {
          await chara17.say_and_wait('私は、そんな期待はしません。');
        }
      }
    };
    f.title = title;
    return f;
  })(),
  faith_collapse: (() => {
    const title = '信念の崩壊';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `${you.name} は口を開いたが、結局一字も出せなかった。`,
      );
      await era.printAndWait('負けた。');
      await era.printAndWait(
        `${you.name} は震える手でスタンドの柵を掴み、できるだけ倒れないようにした。`,
      );
      await era.printAndWait(
        '傍らの人々があなたに祝っている。シンボリルドルフの入着を。',
      );
      await era.printAndWait(
        `${you.name} は体面すら間に合わず、まっすぐコースを離れた。`,
      );
      await era.printAndWait(
        `${you.name} は地下通路へ走る。レース後、ウマ娘たちは更衣室へ戻ると知っている。`,
      );
      await era.printAndWait(
        `${you.name} は息を切らして ${luna.name} の更衣室の前まで来たが、扉はどうしても開かない。`,
      );
      era.printButton('「ルナ！？」', 1);
      era.printButton('「吾が君！！！」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `扉の向こうから嘔吐の音がした。${you.name} は誰かに頭を強く殴られた気がした。`,
      );
      await luna.say_and_wait('大丈夫…………少し時間が必要なだけ…………');
      await luna.say_and_wait('私は……………………………………');
      await era.printAndWait(
        `${you.name} は扉を叩くが、聞こえるのは門内の${luna.teen_sex_title}の嘔吐とすすり泣きだけだ。`,
      );
      await era.printAndWait(
        `${you.name} は頼りなく蹲る……${you.name} は知っている。ルナの期待を裏切った。`,
      );
      await era.printAndWait(`${you.name} は${luna.sex}を助けられなかった。`);
      await era.printAndWait(`あなたたちは……負けた。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_transform: (() => {
    const title = '日月交替';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 皇帝へ切り替えるか
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () =>
            luna.say_and_wait('ええ……私たちの願いのためなら、私は耐えます。'),
          () => luna.say_and_wait('……抱いて……ひとりで向き合うのは、嫌です……'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(
              `${you.actual_name}、そうしなければいけないのですか？`,
            ),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => luna.say_and_wait('…………………………………………私は誰？'));
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('入夢の時……？'),
          () =>
            emperor.say_and_wait('大器は必ず成る。されど、磨かねばならぬ。'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('夢醒の刻。'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => emperor.say_and_wait('エデンへ進め！'));
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '進撃開始';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `シンボリ家と少し相談したあと、${you.name} はルナのデビューを申し込んだ。`,
      );
      await era.printAndWait('ジャパンカップ当日だ。');
      await era.printAndWait(
        `ルナは ${you.name} の判断を聞いて眉を寄せたが、結局反対はしなかった。`,
      );
      await era.printAndWait(
        `${you.name} はこれがかなり……悪意だと知っている。だが、ほかにない手段でもあった。`,
      );
      await era.printAndWait(
        '日本は自信を取り戻す必要がある。未来に希望を託すとしても。',
      );
      await era.printAndWait(
        `だから、競争とは呼べないレースを目の当たりにしたとき、${you.name} は本能的に胸をなで下ろした。`,
      );
      await era.printAndWait(
        `実際、気づいたときには、自分の両手はすでにきつく拳になっていた。`,
      );
      await you.say_and_wait('誰に拳を振るうつもりだ？ くそっ……', true);
      await era.printAndWait(
        `${you.name} は不思議そうに自分の手を見て、視線が震えるのを感じた。`,
      );
      await era.printAndWait(
        `それだけでなく、${you.name} は次第に喉が渇き、目眩を感じ始めた。`,
      );
      await era.printAndWait(`皇帝。皇帝はなんと……なんと……なんと……強い！！！`);
      await era.printAndWait(
        `${you.name} はこのときの気持ちを形容できない。だが、わかっていることはひとつ——`,
      );
      await era.printAndWait(`${you.name} は、これほど卑劣だ。`);
      await era.printAndWait(
        `でなければ ${you.name} の笑顔をどう説明する。外国人たちの驚嘆を聞いたときの狂喜を。`,
      );
      era.printButton('（世界中の人間に、一事をわからせるためだ。）', 1);
      era.printButton('（見たか？ 世界よ——）', 2);
      await era.input();
      await era.printAndWait(`${you.name} は高らかに笑った。`);
      era.printButton(`「ルナ、${luna.sex}は世界を席巻する。」`, 1);
      era.printButton(`「皇帝、${luna.sex}は世界を席巻する！」`, 2);
      await era.input();
      await era.printAndWait('その日、すべての者が心を奪われた。');
      await era.printAndWait(
        `その日、ルナは戻っても ${you.name} と祝わず、ただ悲しげに ${you.name} の腕へ飛び込んだ。`,
      );
      await era.printAndWait(
        `その日、日本の${luna.uma_sex_title}は再びジャパンカップで負けた。`,
      );
      await era.printAndWait(
        '大丈夫だ、大丈夫だ……ルナがいれば、すべてはよくなる。',
      );
      await era.printAndWait(
        `${you.name} はルナを慰め、すべての憂いは煙のように消えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  saud_cup_win: (() => {
    const title = '破竹の勢い';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex}は計画どおりレースを勝った。`);
      await era.printAndWait(`${you.name} の余光に同僚たちが見える。`);
      await era.printAndWait(
        '担当が戻って、楽な顔を作らねばならないまで、まだ少し時間がある。',
      );
      await era.printAndWait(
        `だから ${you.name} は、彼らの長い溜息も、自分へ向けられる羨望や嫉妬の視線も責めない。`,
      );
      await era.printAndWait(
        `${you.name} はシンボリルドルフのトレーナーだ。${chara17.sex}は勝ち、${you.name} も勝つ。`,
      );
      await era.printAndWait('だが');
      era.printButton(i_emperor ? '「ご凱旋……！」' : '「お疲れ様……！」', 1);
      await era.input();
      await era.printAndWait(
        `${chara17.name} の帰還を見て挨拶しようとしたが、別の${chara17.uma_sex_title}が${chara17.sex}を出迎えた。`,
      );
      await era.printAndWait(
        `${you.name} は思わず緊張する——マルゼンスキーだ。`,
      );
      await era.printAndWait(`このときに ${chara17.name} を刺激すれば——`);
      await era.printAndWait(
        '幸い、二人は少し話しただけで、どちらも笑顔を見せた。',
      );
      await era.printAndWait(
        `戻ってきたとき、${chara17.name} はまだ嬉しそうだった。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。${chara17.sex}の笑顔は勝利のためではなく、マルゼンスキーとの今の会話のためだ。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('あれほどの怪物が、吾の狩りを待っている——');
      } else {
        await chara17.say_and_wait(
          '先輩に認められたこと、特にマルゼンに認められたことは、私にとって大きい。',
        );
      }
      await era.printAndWait(
        `${you.name} は知っている。すべてのウマ娘の中でも、マルゼンスキーは圧倒的な強さで知られている。`,
      );
      await era.printAndWait(
        `だが ${chara17.name} のトレーナーとして、${you.name} がはっきりしていることはひとつだ。`,
      );
      era.printButton('「勝つのは君だ。」', 1);
      era.printButton('「そのとき、『皇帝』の実力はさらに証明される。」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} がそう言うとは意外だったのか、${chara17.name} は小さく微笑んだ。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('きれいなことを言う。凱旋せよ！');
      } else {
        await chara17.say_and_wait(
          '本能を刺激された、ということでしょうか。もう走りたくないはずなのに、まだ戦慄を感じます。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'ルナと「共犯」になってから、気づかぬうちに新しい年を迎えた。',
      );
      await era.printAndWait(
        `絶え間ない戦々恐々と恐怖が、${you.name} を夜ごと眠れなくしていた。`,
      );
      await era.printAndWait(
        `だが新年の冷たい風が吹くと、${you.name} はわずかに勇気を取り戻した。`,
      );
      await era.printAndWait(
        `まして、ルナは艶やかな晴れ着を着て、${you.name} へ小走りに寄ってくる。`,
      );
      await era.printAndWait(
        `${luna.sex} はあなたの腕へ飛び込んだ。船が港へ入るように。`,
      );
      await luna.say_and_wait(
        'このまま続けば、皇帝に代わってもらわねばなりません。',
      );
      await era.printAndWait(
        `${you.name} は仕方なく${luna.sex}の髪を撫で、細雪を摘み取った。`,
      );
      await era.printAndWait(
        `早く ${you.name} と二人きりになりたくて、ルナは来る道で傘も差さなかったらしい。`,
      );
      await era.printAndWait(
        `${you.name} はルナの額にキスし、返礼として${luna.sex} は ${you.name} の肩に凭れた。`,
      );
      await era.printAndWait('窓の外、雪が揺れている。');
      await luna.say_and_wait(
        '今年は、ついにクラシック三冠に挑みます。これを取らねば、私は……',
      );
      await era.printAndWait(
        `真面目な顔のルナを見て、${you.name} は深く息を吸い、${luna.sex} の手を握った。`,
      );
      await era.printAndWait(
        `何があっても、${you.name} はルナの傍にいる、というように。`,
      );
      await era.printAndWait(
        `ルナは顔を上げて ${you.name} を見、目には幸福と希望が満ちている。`,
      );
      era.printButton('「賢明方正であれ。常に最善を選べ。」（賢さ+40）', 1);
      era.printButton(
        '「十全の健康であれ。身心を大事にしろ。」（スタミナ+40）',
        2,
      );
      era.printButton(
        '「皇帝に武芸百般あれ。すべての技を活かせ。」（スキルPt+80）',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait(
        'どれも幸福で、美しい願い……では、私にもひとつ願いがあります。',
      );
      await era.printAndWait(
        `ルナは ${you.name} の頰を摩り、${you.name} は${luna.sex}の体温と、魂の渇望を感じた。`,
      );
      await luna.say_and_wait(
        'あなたが長命でありますように。そうすれば、永遠に私の傍にいてくれますから。',
      );
      await era.printAndWait(`${you.name} は高らかに笑った。`);
      await luna.say_and_wait('それから、もっと寒い冗談が見たいです。');
      await era.printAndWait(`${you.name} の笑いが止まった。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '臥薪嘗胆';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('まずは第一冠だ。');
      if (i_emperor) {
        await era.printAndWait(
          `${you.name} と同じくこの喜びを噛みしめているように、皇帝は高く一本の指を掲げた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} と同じくこの喜びを噛みしめているように、ルナは顔を上げ、長く息を吐いた。`,
        );
      }
      await era.printAndWait(
        'これほどの圧倒的な強さ。これほどの疑う余地のない強さ。',
      );
      await era.printAndWait(
        '観客たちは伝説の開幕のような光景に、これまでで最も熱い歓声を上げた。',
      );
      era.printButton('「本当に実現できるかもしれない……皇帝なら。」', 1);
      era.printButton('「本当に実現できるかもしれない……ルナなら。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は覚えている。あの日、ルナが ${you.name} に言った言葉を。`,
      );
      await luna.say_and_wait(
        `すべての${chara17.uma_sex_title}が幸福になれる世界を、創ろう。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ts_47_17: (() => {
    const title = '不協和音';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        '目標の ',
        toky_yus,
        ' が眼前に迫り、トレーニングも最終段階に入っている。',
      ]);
      await era.printAndWait([
        chara17.get_colored_name(),
        ' がトレーニングコースを疾走すると、取り巻く',
        chara17.uma_sex_title,
        'とトレーナーたちから感嘆の声が上がる。',
      ]);
      await era.printAndWait(
        `周回を重ねるたび、${you.name} は ${chara17.name} の調子が極めて良いことに気づく。走る${chara17.sex}の顔には、笑みさえ浮かんでいる。`,
      );
      await era.printAndWait(
        `それでも、${you.name} の胸には大きな不安が残っていた。`,
      );
      await era.printAndWait([
        sats_sho,
        ' のあと、ルナの肩に乗った、もともと山のように重い負担は、もはや収拾がつかないほどになっている。',
      ]);
      await era.printAndWait(
        `あるいは、${chara17.name} は表向きほど落ち着いていないのかもしれない。`,
      );
      if (i_emperor) {
        era.printButton(
          '「吾が君、もう十分お楽しみのようです。どうか御身をお大事に。」',
          1,
        );
      } else {
        era.printButton('「今日のトレーニングは、ここまでにしよう。」', 1);
      }
      await era.input();
      await era.printAndWait(
        `一周を終えたところで、${you.name} は声を上げた。`,
      );
      await era.printAndWait(
        `${you.name} の言葉を聞き、${chara17.name} は足を止めた。`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `しばらくして、息を切らした皇帝が ${you.name} のもとへ来る。なぜか、先ほどの晴れやかな表情は怒りに変わっていた。`,
        );
        await chara17.say_and_wait('弄臣よ、吾の状態を妨げる理由を述べよ。');
        era.printButton('「吾が君、興奮が過ぎているようです。」', 1);
        era.printButton('「狩りが近いほど、冷静であるべきです……」', 2);
        await era.input();
        await era.printAndWait(
          `はじめから、${you.name} は皇帝がトレーニングの強度に耐えられないなどと考えていない。`,
        );
        await era.printAndWait(
          `${you.name} が${chara17.sex}のトレーナーになったことも、${chara17.sex}を皇帝へと唆したことも。`,
        );
        await era.printAndWait(
          `はじめから、${you.name} が恐れていたのは、ルナが自らの内なる獣に押し潰されることだけだった。`,
        );
        await era.printAndWait(
          `${you.name} は、己を玩ぶような表情の皇帝を見て、頭を下げた。後者の身に乗る山岳のような圧が、${you.name} に冷や汗を流させる。`,
        );
        await era.printAndWait(
          `皐月賞を越え、これからダービーへ進む……今このとき、トレーニングの調子より、${you.name} はルナの身体を守りたかった。`,
        );
        await era.printAndWait(
          `${you.name} を見て、皇帝は冷たく鼻を鳴らし、そのままコースを離れた。`,
        );
        await era.printAndWait(
          `${you.name} は本能的に${chara17.sex}へ手を伸ばしたが、${chara17.sex}の足は速く、${you.name} は${chara17.sex}を止められなかった。`,
        );
        era.printButton('「すまない。」', 1);
        era.printButton('「しっかり休んでくれ。」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name} は溜息をつき、小走りに後を追った。`,
        );
      } else {
        await era.printAndWait(
          `しばらくして、息を切らしたルナが ${you.name} のもとへ来る。なぜか、先ほどの晴れやかな表情は翳っていた。`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}、私の調子は良いのです。日本ダービーは近い。もっと、鍛えなければなりません！`,
        );
        era.printButton(
          '「わかっている。だが、こういうときほど冷静でいろ。」',
          1,
        );
        era.printButton('「君の状態が、心配なんだ……」', 2);
        await era.input();
        await era.printAndWait(
          `はじめから、${you.name} はルナがトレーニングの強度に耐えられないなどと考えていない。`,
        );
        await era.printAndWait(
          `${you.name} が${chara17.sex}のトレーナーになったことも、${chara17.sex}を皇帝へと唆したことも。`,
        );
        await era.printAndWait(
          `はじめから、${you.name} が恐れていたのは、ルナが自らの内なる獣に押し潰されることだけだった。`,
        );
        await era.printAndWait(
          `だが、初めて会ったときの発散以来、ルナは長いあいだ ${you.name} に本心を話していない。`,
        );
        await era.printAndWait(
          `皐月賞を越え、これからダービーへ進む。今このとき、トレーニングの調子より、${you.name} はルナの思いを知りたかった。`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' を見て、ルナはしばらく考えた。',
          chara17.sex,
          'は ',
          you.get_colored_name(),
          ' に微笑みを向けた。',
        ]);
        await chara17.say_and_wait(
          'この程度もできなければ、私たちの理想は、とうてい実現できません。',
        );
        await era.printAndWait(
          `${you.name} はひそかに歯を食いしばり、まだ何か言いたかった。`,
        );
        await era.printAndWait(
          `ルナは二度、足を踏み、コースへ戻ろうとした。だが ${you.name} の心配そうな目を見て、結局足を止めた。`,
        );
        era.printButton('「すまない。」', 1);
        era.printButton('「しっかり休んでくれ。」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が差し出したタオルと水を受け取り、ルナは小さく頷いた。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  re_double_crowns: (() => {
    const title = '抜山蓋世';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('これが第二冠だ！');
      await era.printAndWait('夢の実現に、また一歩近づいた。');
      await era.printAndWait(
        '人々は熱く語っている。ダービーで、シンボリルドルフがどれほど凄まじい実力を見せたかを。',
      );
      await era.printAndWait('なんという不思議！');
      if (i_emperor) {
        await era.printAndWait(
          '衆人と同じくこの驚きを噛みしめているように、皇帝は高く二本の指を掲げた。',
        );
      } else {
        await era.printAndWait(
          '衆人と同じくこの驚きを噛みしめているように、ルナは心からの笑みを見せた。',
        );
      }
      await era.printAndWait(
        'その後の数日、人々は熱く語り続けた。ダービーで、シンボリルドルフがどれほど凄まじい実力を見せたかを。',
      );
      await era.printAndWait(
        `${chara17.sex}の名は、歴史に残る偉大なウマ娘たちと並び称されている。`,
      );
      await era.printAndWait('あの輝き、そしてやがて翳った星たちと。');
      await era.printAndWait('だが、シンボリルドルフは違うらしい。');
      await era.printAndWait(
        `${you.name} だけが知っている。ダービーで、${chara17.sex}はさらに深い一歩を踏んだ——`,
      );
      await era.printAndWait('領域。');
      await era.printAndWait(
        `今この話をするだけで、${you.name} はなお深い畏敬を覚える。`,
      );
      await era.printAndWait(
        `だが考えを転じると、${you.name} はまた胸が詰まる。`,
      );
      await era.printAndWait(
        '先人も成し遂げた。だが時は一点の容赦もなく流れ、あらゆる偉大は思い出になるだけだ。',
      );
      era.printButton(
        '「今も現役で、本格化の力をわずかに残しているのは、マルゼンスキーだけだ。」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} は ${chara17.name} に語る。`);
      await era.printAndWait(
        `本格化が消えれば、どれほど強い${chara17.uma_sex_title}も衆人に埋もれ、わずかな記憶だけが残る。`,
      );
      await era.printAndWait(`抗えないことだ。いつか、${chara17.name} も……`);
      await era.printAndWait(
        `${you.name} の興奮の下に隠れた悲嘆を感じ取ったのか、${chara17.name} は静かにあなたを見ている。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('征途は、決して止まらぬ。');
      } else {
        await chara17.say_and_wait('私たちの夢……答えが見えた気がします。');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} にはその意味がわからない。だが ${chara17.name} に、あなたへ説明するつもりはないらしい。`,
      );
      await chara17.say_and_wait('エデン……');
      era.drawLine();
      await chara17.print_and_wait(
        `${you.name} と ${chara17.name} が別れたあと、${chara17.sex}はひとり学園の中庭へ来た。`,
      );
      await chara17.print_and_wait(
        '三女神の像を見、領域へ踏み入った光景を噛みしめ、世代の頂点に立つウマ娘は拳を握った。',
      );
      if (i_emperor) {
        await chara17.say_and_wait('桎梏など、永遠に存在すべきではない。');
      } else {
        await chara17.say_and_wait(
          `私は必ず、${you.actual_name} と私の願いを果たします。たとえ私が……`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' は',
        { color: buff_colors[1], content: ' [領域]', fontWeight: 'bold' },
        'を悟った！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('夏季合宿の期間であるはずなのに——');
      await era.printAndWait(
        `${you.name} は、ウマ娘たちに取り囲まれたルナを見て、額に冷や汗を浮かべた。`,
      );
      await era.printAndWait(
        '万人が注目する生徒会長として、生徒たちの自主トレを指導し、',
      );
      await era.printAndWait(
        '突破できない生徒を助け、ときには自ら手本を示す。',
      );
      await era.printAndWait(
        `それだけでなく、トレーニングでも${luna.sex}は格別に励んでいる。`,
      );
      await era.printAndWait(
        '夜になっても、ルナは二つの寮の寮長を助け、任務を割り振っていた。',
      );
      await luna.say_and_wait(
        '学園の問題は、すべて私の問題です。気にしないでください。',
      );
      await era.printAndWait(
        `それから${luna.sex}は身をもって示し、早めに寝室へ戻って休んだ。`,
      );
      await era.printAndWait(
        `そう言いながらも、${you.name} の携帯はちょうどよく鳴った。`,
      );
      await luna.say_and_wait(
        'なんだか、あなたの視線がずっと私から離れていない気がします。',
      );
      await era.printAndWait(
        `ルナからの短信を見て、${you.name} は思わず微笑んだ。`,
      );
      era.printButton(
        '「おかけになった電話は圏外です。しばらくしてからおかけ直しください。」',
        1,
      );
      era.printButton('「だって、あなたが目を奪うから。」', 2);
      await era.input();
      await luna.say_and_wait(
        '口が上手いのですね。ですが学園の風紀のため、私以外の子には使わないでください',
      );
      await luna.say_and_wait('そういえば');
      await luna.say_and_wait('あなたは、いつもそう！');
      await luna.say_and_wait(
        'シンボリ家でも巧言令色、よく生きてこられましたね',
      );
      await luna.say_and_wait(
        'ですが、私は先に寝ます。明日は早起きしてトレーニングしましょう',
      );
      await era.printAndWait(
        `${you.name} は携帯に点滅するメッセージを見ているうちに、いつのまにか眠っていた。`,
      );
      await era.printAndWait(
        `翌朝早く、ルナはトレーニングへ向かうところだったが、${you.name} は${luna.sex}を引き止めた。`,
      );
      await era.printAndWait(
        `夏季合宿が始まる前から、${luna.sex}は矢継ぎ早にいくつもの仕事をこなし、トレーニングも落とさなかった。`,
      );
      await era.printAndWait(`疲労は蓄積する。${you.name} は確信していた。`);
      era.printButton(
        '「豪勢な食事を取って、もっと強くなってくれ。」（パワー+10）',
        1,
      );
      era.printButton(
        '「たまにはトレーニングを先送りにしてみよう。」（根性+10）',
        2,
      );
      const ret = await era.input();
      await era.printAndWait('ルナは呆けた。');
      await luna.say_and_wait('心配してくれているのですか？');
      await era.printAndWait(
        `${you.name} は頷いた。ルナは窓枠に凭れ、海と砂浜を向いている。`,
      );
      await era.printAndWait(
        `朝の陽が${luna.sex}の顔を埋め、あなたには${luna.sex}の表情が見えない。`,
      );
      await luna.say_and_wait(
        '他者のために励むことは、いつだって美しい願いです。',
      );
      await luna.say_and_wait(
        'そうは言っても、私たちは菊花賞のために励まねばなりません。',
      );
      await luna.say_and_wait(
        'ですが、あなたの目がすでに物語っています——『これ以上のトレーニングは身体に害』、でしょう？',
      );
      await luna.say_and_wait(
        'ダービーのあと、私はますます確信しています。私たちの理想を果たすには、並大抵ではない努力が要ると。',
      );
      await luna.say_and_wait(
        'あなたは、私を守りすぎてはいませんか？ 私がここまで弱いと、ここで倒れるとでも？',
      );
      era.printButton('「……！」', 1);
      await era.input();
      await era.printAndWait(
        `窮した ${you.name} を見て、ルナは何かに気づき、${you.name} の腕を掴んだ。`,
      );
      await luna.say_and_wait(
        'これでは、あなたに八つ当たりしているだけですね……',
      );
      await era.printAndWait(
        `ルナは ${you.name} に謝っているようだった。だが ${you.name} は知っている。${luna.sex}はあなたに折れてはいない。`,
      );
      await era.printAndWait(
        `${luna.sex}の思いは、確かに ${you.name} の胸へ届いた。`,
      );
      await luna.say_and_wait(
        '今日はトレーニングには行きません。安心してください。',
      );
      await era.printAndWait(`それから、ルナは ${you.name} の傍を離れた。`);
      await era.printAndWait(
        `${you.name} は引き止められなかった。${you.name} は胸を押さえ、長くしてから我に返り、がらんとした廊下を離れた。`,
      );
      await era.printAndWait(`その一日、${you.name} はルナに会えなかった。`);
      await era.printAndWait(
        `夜、${you.name} は携帯を取り、ルナへ短信を送る。`,
      );
      era.printButton('「俺は、ずっと傍にいる。」', 1);
      era.printButton('「ルナ、俺はいつでも君を愛している。」', 2);
      await era.input();
      await era.printAndWait(
        '既読にはなったが、ルナからの返事はいつまでも来ない。',
      );
      await era.printAndWait(
        `${you.name} は待ち続けた。結局、一晩中、ルナは返信しなかった。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  re_triple_crowns: (() => {
    const title = '三冠達成';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait('怒号のように、世界中が熱く歓呼している。');
      await era.printAndWait(
        `またひとり、${chara17.uma_sex_title}がこの偉業を成し遂げた！`,
      );
      await era.printAndWait(
        '時宜を得て、管弦楽団が誰もが知る、この場に極めて似つかわしい交響曲を奏で始めた。',
      );
      await era.printAndWait('【皇帝】', { color: emperor.color });
      await era.printAndWait(
        `${you.name} は熱い涙を浮かべ、腰を支え、頭を下げた。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。約束も、夢も、まだ遠い。`,
      );
      await era.printAndWait('だが、しばらくだけでいい……しばらくだけでいい……');
      await era.printAndWait(`${you.name} は俯き、誰も知らぬ場所で号泣した。`);
      era.printButton('「おめでとう……」', 1);
      era.printButton('「史上……最も偉大な走りだ……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は ${chara17.name} に、尽きせぬ誇りを感じた！`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `${you.name} と心が通じたように、皇帝は高く三本の指を掲げた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} と心が通じたように、ルナは幸福の涙を流した。`,
        );
      }
      await era.printAndWait(
        `長いあいだ、息を切らした ${chara17.name} はコースを離れなかった。`,
      );
      await era.printAndWait(
        `人々は、${chara17.sex}が栄光にもっと長く浴したいのだと思っている。`,
      );
      await era.printAndWait(
        `だが ${chara17.name} の天を衝く戦意の下で、${you.name} はふと気づく。${chara17.sex}の足元が揺れている。`,
      );
      await era.printAndWait(
        `${you.name} は拳を握りしめた。かつてない寒気が ${you.name} の身体を覆った。`,
      );
      era.printButton('「まさか……」', 1);
      era.printButton('「怪我……」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `その夜、${chara17.name} はひとり中庭へ、三女神の像の下へ来た。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '貴様らの築いた揺籃（牢獄）がどれほど堅かろうと……',
        );
      } else {
        await chara17.say_and_wait('あと少しで、私は入れる……');
      }
    };
    f.title = title;
    return f;
  })(),
  we_47_41: (() => {
    const title = '急転直下';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `皎々たる明月の下、${you.name} は焦って門外の廊下を徘徊していた。`,
      );
      await era.printAndWait(
        `長くして、${you.name} は看護師の呼びかけを聞いた。`,
      );
      await era.printAndWait(
        `焦って病室へ駆け込むと、${you.name} はルナがベッドに横たわり、すでに眠っているのを見た。`,
      );
      await era.printAndWait(
        `${luna.sex}の顔は蒼いが、呼吸は整っている。それを見て、${you.name} は胸をなで下ろした。`,
      );
      await era.printAndWait(
        '菊花賞のあと、ルナは緊急でシンボリ家の私設病院へ送られた。',
      );
      await era.printAndWait('検査の結果、医師の診断は——ルナの過労だった。');
      await era.printAndWait(
        `身体は弱いが、ルナがしっかり休めば、${luna.sex}はなおジャパンカップに間に合う。`,
      );
      era.printButton('「ジャパンカップか——」', 1);
      await era.input();
      await era.printAndWait(
        `ルナは静養が必要なので、${you.name} は${luna.sex}の様子を確かめたあと、足音を忍ばせて門外へ出た。`,
      );
      await era.printAndWait(`窓の外の夜色を見て、${you.name} は頭が痛んだ。`);
      await era.printAndWait(
        'ジャパンカップ。日本のウマ娘すべての悲願……主場で最も壮大なレースであるはずなのに、海外の強豪に勝利を奪われ続けている。',
      );
      await era.printAndWait(
        `ルナと ${you.name} の夢を果たすため、すべてのウマ娘が幸福になれる世界へ至るため。`,
      );
      await era.printAndWait(
        'ジャパンカップは、ルナが越えねばならない試練だ。',
      );
      await era.printAndWait(
        `${you.name} は振り返って扉を見る。ルナは扉の向こうのベッドで休んでいる。`,
      );
      await era.printAndWait(
        `${you.name} は溜息をついた。${luna.sex}の蒼い顔を思い浮かべると、${you.name} の本来揺るがぬ心が揺れる。`,
      );
      await era.printAndWait(
        'ウマ娘が走る姿はなんと麗しいか。だがそこに潜む危機は、刃を交える戦場に劣らない。',
      );
      await era.printAndWait(
        '一瞬の油断、一瞬のミスがあれば、ウマ娘は二度と立ち上がれなくなる。',
      );
      await era.printAndWait(
        `ルナはまだ若い。${luna.sex}には、まだ機会がある……必ずしも今回でなくてもいい。`,
      );
      await era.printAndWait(
        `${you.name} は自分を説得しようとする。だが ${you.name} はわかっている。全日本がルナ——シンボリルドルフへ向ける期待は、${luna.sex}の「臨戦離脱」を許さない。`,
      );
      await era.printAndWait('ルナも、ここで諦めるつもりはないはずだ。');
      await era.printAndWait(
        `${you.name} は焦って髪を掻き、思いを尽くすうち、睡魔が ${you.name} を覆った。`,
      );
      era.printButton('「明日、ルナと話そう……」', 1);
      await era.input();
      await era.printAndWait(`${you.name} も疲れ果てていた。`);
      await era.printAndWait(
        `だが翌朝、目を開けたとき、${you.name} は自分の上に掛け布団がかかっているのに気づいた。`,
      );
      await era.printAndWait(
        `${you.name} は傍らの扉を見る。半開きで、部屋で休んでいるはずのルナの姿はない。`,
      );
      era.printButton('「まさか！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は悟った。ルナは行動で、${you.name} へ${luna.sex}の決意を示したらしい。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} は生徒会の扉を開けたが、中は人で溢れていた——庶務たちが各種の書類を手に、ルナへこの数日の仕事を報告している。`,
      );
      await era.printAndWait(
        `ルナは ${you.name} を見て、口角をわずかに結んだ。`,
      );
      await luna.say_and_wait('トレーナー、何かありましたか？');
      await era.printAndWait(
        `${you.name} は息を切らし、皆がじっとこちらを見ているのに気づき、仕方なく作り笑いをした。`,
      );
      era.printButton('「忘れ物を……」', 1);
      era.printButton('「君はちゃんと……」', 2);
      await era.input();
      await era.printAndWait(
        `言葉の半ばで、${you.name} はふと気づく。ルナが自分を見つめる紫の瞳に、哀願が宿っている。`,
      );
      await luna.say_and_wait('私は大丈夫です。', true);
      await era.printAndWait(
        `${you.name} は${luna.sex}の口の形を読んだ。${you.name} は${luna.sex}の意思に逆らえない。幼いころから、ずっと……`,
      );
      era.printButton('「いや、大したことじゃない。」', 1);
      era.printButton('「すまない……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は魂の抜けたように生徒会を離れた。${you.name} はわかっている。学園はルナを必要としている。`,
      );
      await era.printAndWait(
        'ルナもわかっている。日本は、今このときシンボリルドルフを失えない。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '比肩なし';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        'ジャパンカップと違い、毎年の有馬記念——最後のグランプリであり、長らく最も人々の注目を集めるレースは、出走登録だけで出場が決まるものではない。',
      );
      await era.printAndWait(
        '毎年、レース前に全日本のファンが投票し、出場する資格があるとみなが考えるウマ娘を選ぶ。',
      );
      await era.printAndWait(
        `つまり、出走できる${chara17.uma_sex_title}は、いずれも深い印象を残した強者ばかりだ。`,
      );
      await era.printAndWait(
        'そして高票で選ばれながら、ルナは人気一番を取れなかった。',
      );
      await era.printAndWait(
        '人々は喧々と語る。ジャパンカップがその年の強者たちの世界豪強への迎撃なら、有馬は本国最強を決めるレースだ、と。',
      );
      era.printButton('（投票は、出走者の本当の実力を映さない。）', 1);
      era.printButton('（だが投票は、一定の実情を映している。）', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は憂いを抱えて ${chara17.name} の控え室へ戻った。${chara17.sex}は目を閉じて気を休めている。`,
      );
      await era.printAndWait(
        'つまり、経験豊かな先輩たちの前で、ルナが苦戦すると考える者が、常にいるということだ。',
      );
      await era.printAndWait(
        'だがそれは同時に、問題の解き方が単純で粗暴でもある、ということだ。',
      );
      if (i_emperor) {
        await chara17.say_and_wait('吾の強権を示せ。');
      } else {
        await chara17.say_and_wait('すべきことは、ひとつだけです。');
      }
      await era.printAndWait(`${chara17.teen_sex_title}は両目を開け、呟いた。`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拝';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('新年だからこそ、忙しい。');
      await era.printAndWait(
        `寒冬の中、${you.name} は息を吐く。瞬くうちに白い霧になる。`,
      );
      await era.printAndWait(
        `また一年の新春。${you.name} はルナの後ろに立ち、${luna.sex}の仕事を輔佐する。お辞儀、受け取り、謝辞。`,
      );
      await era.printAndWait(
        '顔見知りの者へ年賀し、新年の動員会を開き、昨年残った仕事を片づける……',
      );
      await era.printAndWait(
        `ルナの仕事の一部を分けただけなのに、${you.name} はほとんど頭が回らなくなった。`,
      );
      await era.printAndWait(
        `このときになって ${you.name} はわかった。一年前、ルナがなぜ皇帝に代行してほしいと言ったのかを。`,
      );
      await luna.say_and_wait('なんだか、失礼なことを考えているようです。');
      await era.printAndWait(
        `段階の仕事を終えて、ようやく参拝の時間ができた。道すがら、ルナはなぜか突然呟いた。`,
      );
      await era.printAndWait(
        `${you.name} は慌てて否定した。ルナは是とも非ともせず、${luna.sex}は神社の鐘鼓を見て、目を閉じた。`,
      );
      await era.printAndWait(
        `新しい年、ルナの願いは何だろう。${you.name} は尋ねなかった。願いは口に出すと叶わない、という話だ。`,
      );
      await era.printAndWait(
        `儀式は終わったらしい。ルナは目を開け、顔を上げ、${you.name} の真似をして息を吐いた。`,
      );
      await era.printAndWait(
        `白い霧が漂う。${luna.sex}は虚空を呆けて見つめ、それから横を向き、両手を合わせて ${you.name} へ疲れきった微笑みを見せた。`,
      );
      await luna.say_and_wait('あるいは、私も失礼なことを考えていました。');
      await era.printAndWait(
        `一瞬で、${you.name} の顔は真っ赤になった。このあいだの波瀾万丈を思い返し、感慨が尽きない。`,
      );
      await era.printAndWait(`${you.name} は鄭重にルナへ言った。`);
      era.printButton(
        '「医食同源。食事の中で健康を大事にしてほしい。」（スタミナ+20）',
        1,
      );
      era.printButton(
        '「全知全能。本当の皇帝になってほしい。」（全能力+5）',
        2,
      );
      era.printButton(
        '「風流韻事。考えすぎず、好きなことをすればいい。」（スキルPt+35）',
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} の祝福を聞き、ルナは答えず、ただ軽くあなたの腕に凭れ、疲れて目を閉じた。`,
      );
      await era.printAndWait('短い休息も、今はかけがえがない。');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '寄り添って前へ';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `新しい年。${you.name} は寒風を冒して、ルナと会う約束の場所へ向かっていた。`,
      );
      await era.printAndWait(
        `だが道中、${you.name} はルナが大門の前に立ち、まだ幼く見える生徒と話しているのを見つけた。`,
      );
      await era.printAndWait(
        '後者は何度も頷き、お辞儀をし、鄭重にルナへ礼を述べてから去った。',
      );
      era.printButton('「ルナ先輩。」', 1);
      era.printButton('「ルナお姉さん？」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} の揶揄を聞き、ルナの顔はわずかに紅らむ。${luna.sex}は拗ねたように ${you.name} を見るが、その呼び方も嫌いではないらしい。`,
      );
      await luna.say_and_wait(
        '今になって戻ってきた子です。もうすぐメイクデビューです。',
      );
      await luna.say_and_wait(
        '一月の末近くになって学園へ戻る。あなたも不思議に思うでしょう？ 大半のウマ娘は秋か冬にデビューします。',
      );
      await luna.say_and_wait(
        'ですがその前に、私たちは学園へ来て、同年代と学び、競い合います。',
      );
      await luna.say_and_wait(
        'それは楽しいことです。ですが、その過程に心碎と疲労がないとは限りません。',
      );
      await era.printAndWait(
        `人のいない場所へ来ると、ルナの腕が ${you.name} の肩に触れる。${luna.sex}にはそういう癖があるらしい。無意識に、あなたへ寄ってしまう。`,
      );
      await luna.say_and_wait(
        '過酷なレースとトレーニングに耐えきれず、自分に失望したとき、休暇で温かい家へ戻れば……',
      );
      await luna.say_and_wait('諦める思いが芽生えるのかもしれません。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は黙ってルナの話を聞いた。正直、あなたたちの立場——シンボリルドルフの立場では、',
        you.get_colored_name(),
        ' はきれいな言葉を並べられない。',
      ]);
      await era.printAndWait(
        `${you.name} は知っている。多くの${luna.uma_sex_title}は、ルナが出走すると聞けば、${luna.couple_title}の第一の反応が回避だと。`,
      );
      era.printButton(
        '「現実と苦境に真正面から向き合う者こそ、真の勇者だ。」',
        1,
      );
      era.printButton('「彼女たちにもっと助けを出すべきかもしれない。」', 2);
      await era.input();
      await era.printAndWait(`ルナは笑って ${you.name} を見た。`);
      await luna.say_and_wait(
        '私も逃げたいと思ったことがあります。ですが……私の逃げ場は、いつもあなたのところなのです。',
      );
      await era.printAndWait(
        `ルナは ${you.name} の懐に凭れ、指で軽く ${you.name} の胸を突いた。`,
      );
      if (ret === 1) {
        await luna.say_and_wait(`ルナ先輩にも、もう逃げ場はありませんね。`);
      } else {
        await luna.say_and_wait(`ルナお姉さんにも、もう逃げ場はありませんね。`);
      }
      await era.printAndWait(`まったく……`);
      await era.printAndWait(
        `${you.name} は頰を赤らめ、ルナの小さな仕返しを欣然と受けた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '心血を注ぐ';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '天皇賞（春）が近づいている。最長距離のG1として、3200メートルはウマ娘の靭性を試す大関だ。',
      );
      await era.printAndWait(
        'かつては、天皇賞を勝ったウマ娘が最強とされた。だが時代が変わり、各レースの評価も起伏する。',
      );
      await era.printAndWait(
        'それでも、天皇賞（春）は今なお最も苛烈なレースであることに変わりはない。',
      );
      await era.printAndWait(
        '上級生になっても、ルナの生徒会の仕事の圧は下がらず、後輩の指導に時間を割き、各種の取材にも出ねばならない。',
      );
      await era.printAndWait(
        `${you.name} は憂えるが、ルナは一貫して、それに見合う名声を担う責任だと考えている。`,
      );
      await era.printAndWait(
        `${you.name} の思いに気づいたのか、一日の忙しさを終えたあと、ルナは ${you.name} を呼び止めた。`,
      );
      await luna.say_and_wait('怒っていますか？');
      era.printButton('「心配しているだけだ。」', 1);
      era.printButton('「もっと俺を頼ってほしい。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の言葉を聞き、ルナは軽く息を吐いた。`,
      );
      await luna.say_and_wait('あなたも、もう少し私を信じてください。');
      await era.printAndWait(
        `ルナは${you.name}を見て、手を伸ばし、${you.name}の頰を撫でた。`,
      );
      await luna.say_and_wait(
        '私はこうしなければいけません。でなければ、多くの者が迷いと苦境に沈みます。',
      );
      await luna.say_and_wait('私たちは、まだ夢を果たしていません。');
      await era.printAndWait(`${you.name} はルナの手を握った。`);
      await era.printAndWait(
        `遠大な理想を語っているのに、${you.name} はルナの眉間に散らない憂いがあるのに気づく。`,
      );
      await era.printAndWait(
        `${you.name} たちが再び出会ったときのように、息が詰まる様子だ。`,
      );
      await era.printAndWait(`${you.name} は溜息をつき、頷いた。`);
      await era.printAndWait(
        `——ルナのために、まだ何ができるのか。これから先の日々、${you.name} はずっとその問いを考えていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '皇帝の墜落';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '四月になれば、万人が注目するファン感謝祭が始まる。',
      );
      await era.printAndWait(
        `${you.name} には不満もあるが、開会式のあとには模擬レースがある。`,
      );
      await era.printAndWait(
        `模擬レースとはいえ、激しさは正式なレースとほとんど変わらないはずだ。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。こういうときほど、${you.name} はルナの身体の調子を釣り合わせにくい。`,
      );
      await era.printAndWait('ひとたび問題が起きれば……');
      await era.printAndWait(
        `だが夏合宿の出来事を思い出すと、${you.name} はルナに回避を頼めない。`,
      );
      await era.printAndWait(
        `模擬レースが始まろうとするとき、ルナの疲労した様子に ${you.name} は目尻が跳ねた。`,
      );
      await era.printAndWait(
        'トレーニングだけでなく、生徒会の仕事と行事の運営。今日のために、ルナの負担は重すぎる。',
      );
      await era.printAndWait('——少し休め。');
      await era.printAndWait(
        `${you.name} は傍らに立つルナを見て、言葉が喉で止まり、つい溜息になった。`,
      );
      await luna.say_and_wait('すべての人が、このレースを期待しています。');
      await luna.say_and_wait(
        'ファンの歓声、期待と祈り。すでに引退した先輩たちさえ、胸を高鳴らせています。',
      );
      await era.printAndWait(
        `${you.name} はルナを見る。${luna.sex}は思い巡らしているようだ。しばらくして、${luna.sex}は ${you.name} を見た。`,
      );
      await luna.say_and_wait('あなたも、私に期待していますか？');
      era.printButton('「いつだって！」', 1);
      era.printButton('「休め……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の答えを聞き、ルナは深く息を吸い、それから ${you.name} の肩を叩いた。`,
      );
      await luna.say_and_wait('行ってきます。');
      await era.printAndWait(
        `${you.name} はその場で固まった。だがすぐに悟る。ルナは【今】のこの状態で、コースへ上がるつもりだ。`,
      );
      await era.printAndWait(
        `——結果、ルナは苦戦した。連日の疲労が${luna.sex}の調子を落としたのかもしれない。`,
      );
      await era.printAndWait(`観客は騒然となった。`);
      await era.printAndWait(
        `皇帝がどうしてここまで乱れるのか。そんな議論が数週間続いた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_16: (() => {
    const title = '乾坤一擲';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `明日は天皇賞（春）の日だ。だがこのあいだ、${you.name} は気づいた。どうしても、ルナは【皇帝】を呼び出せない。`,
      );
      era.printButton('「積み重ねた疲労が、ついに報いをもたらした。」', 1);
      era.printButton('「もう無理をするな！」', 2);
      await era.input();
      await era.printAndWait(
        `生徒会で、${you.name} は額を押さえるルナを憂えて見ていた。`,
      );
      await era.printAndWait(`${luna.sex}の髪は乱れ、厚い隈を乗せている。`);
      era.printButton('「全部、俺の責任だ……！」', 1);
      era.printButton('「すまないルナ、俺は……」', 2);
      await era.input();
      await luna.say_and_wait('いいえ、あなたとは関係ありません。');
      await era.printAndWait(
        `ルナは顔を上げて ${you.name} を見る。${luna.sex}の髪は乱れ、厚い隈を乗せ、涙が${luna.sex}の頰を伝う。`,
      );
      await luna.say_and_wait(
        '夢のために、私は無謀なほど今まで突き進みました。私の我がままに、あなたを巻き込んで……',
      );
      await luna.say_and_wait(
        'まして、あなたは何度も身体を大事にするよう言ってくれました。すべてを壊したのは、私です。',
      );
      await luna.say_and_wait(
        '【皇帝】を失ったままでは、私はとうてい、すべての人を満足させられません。',
      );
      await luna.say_and_wait(
        'ごめんなさい。私は強いウマ娘ではありません……ごめんなさい……ごめんなさい……',
      );
      await era.printAndWait(`${you.name} の前で、ルナは号泣した。`);
      await era.printAndWait(
        `${you.name} はすぐに前へ出て、ルナをきつく抱いた。`,
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}の脆さを感じ、${luna.sex}の悔しさを感じる。`,
      );
      await era.printAndWait(
        `同時に、${you.name} の胸には不満と、いたわりが満ち、ルナへ告げたい。`,
      );
      await era.printAndWait(
        'いたわりは、ルナの涙のため。不満は、ルナの自らを卑下するため。',
      );
      await era.printAndWait(
        '模擬レースで力を出せなかったからといって、ルナはすべての者に敬われる存在ではなくなるのか？',
      );
      await era.printAndWait('否。否！！！');
      await era.printAndWait(`${you.name} は歯を食いしばった。`);
      await era.printAndWait(
        'あれほど励み、トレセンのため、すべてのウマ娘のために心血を注ぎ、身を尽くしたルナを、人は議すべきではない。',
      );
      await era.printAndWait(`${luna.sex}は、胸を張ってよいはずだ！`);
      await you.say_and_wait(
        '君は、人々の心にある【皇帝】の強さを誤解している。',
      );
      await era.printAndWait(
        `ルナが泣き疲れたあと、${you.name}は口を開いて慰めた。${you.name}の言葉の見極めを聞き、ルナの心は小さく震えた。`,
      );
      await you.say_and_wait(
        '皇帝——シンボリルドルフが人を惹きつけるのは、あのシンボリの旗の下で、誰もがそれぞれの務めを果たせるからだ。',
      );
      await you.say_and_wait(
        'すべての者が励み、奮闘するよう、背中を押している。',
      );
      await you.say_and_wait(
        '今まで、君より【皇帝】の称号にふさわしい者はいない。君は俺たちを導き、俺たちを前へ連れていった！',
      );
      await you.say_and_wait(
        '夢へ向かう天途の途中で、君はすでに、誰かの夢になっている。',
      );
      await you.say_and_wait('だから、自分を貶めるな、ルナ——');
      await era.printAndWait(
        `${you.name} はルナをきつく抱き、${luna.sex}に無限の力を与えたいようだった。また、${you.name} が生涯で最も大切な人を、己の魂へ揉み込みたいようでもあった。`,
      );
      await era.printAndWait(
        `長くして、ルナはやっと抗議するように、小さく拳を振り、${you.name} の肩を叩いた。`,
      );
      await era.printAndWait(
        `${you.name} はやっと力が入りすぎたのに気づく。${you.name} は慌てて腕を緩めたが、ルナは離れず、なお ${you.name} の胸に凭れていた。`,
      );
      await luna.say_and_wait('私は、まだ前へ進めますか？');
      era.printButton('「もちろん。」', 1);
      await era.input();
      await luna.say_and_wait('あなたは、まだ私の傍にいてくれますか？');
      era.printButton('「奈落の底でも。」', 1);
      era.printButton('「永遠に。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} はルナの浅い笑いを聞いた。`);
      await you.say_and_wait(
        '俺だけじゃない。生徒会のみんなも、トレセンの生徒たちも、君を助けたいと思っている。微力でもいいから。',
      );
      await you.say_and_wait('君の努力は、必ず実を結ぶ。');
      await luna.say_and_wait('では、私はなおさら、ここで足を止められません。');
      await luna.say_and_wait('私たちの夢は、未来にしかありません。');
      await era.printAndWait(
        `${you.name} はポケットからハンカチを出し、ルナの涙を優しく拭った。${you.name} は気づく。ルナの目に輝いているのは、もう涙ではない。`,
      );
      await era.printAndWait(`乾坤一擲の意志だ。`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '油尽き灯枯れる（上）';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `${chara17.uma_sex_title}には生まれついての勝負欲がある。${chara17.couple_title}はいつでも、より遠くへ疾走したいと思っている。`,
      );
      await era.printAndWait(
        `定められた距離のコースでは、${chara17.couple_title}はすべてを賭して、いちばん早く終点へ着く勝者になろうとする。`,
      );
      await era.printAndWait(
        'そしてその願いへ応えるように、ウマ娘たちは本格化の中で急速に成長し、ついにはコースへ立てるようになる。',
      );
      await era.printAndWait(
        'だが同時に、時が経てば——正確には、おそらく三、四年のうちに、本格化の力は次第に衰える。',
      );
      await era.printAndWait(
        '燃料を使い果たしたように。ウマ娘はそのあと、ただの衆人となる。',
      );
      await era.printAndWait(
        'それこそが、ウマ娘が死に物狂いでコースに立つ理由だ——己の章を残したい。人々に忘れられたくない。',
      );
      await era.printAndWait('想いを抱いて、ウマ娘たちは身を擲つ。');
      await era.printAndWait(
        'その中の優れた者は、限りなく激烈な競争の中で【領域】へ入った。',
      );
      await era.printAndWait('それはすべてを超える力だ。');
      await era.printAndWait('だが、力の代価は何か？');
      await era.printAndWait(
        `ルナが領域へ入れるようになってから、${you.name} はずっとその問いを考えていた。`,
      );
      await era.printAndWait(
        '運命は憐れまない。あらゆるものには、ひそかに値が付けられている。',
      );
      await era.printAndWait(
        `シンボリ家ほどの強さでも、${chara17.couple_title}は血脈の暴力を抑えきれず、自壊へ向かうことがある。`,
      );
      await era.printAndWait(
        `ルナは領域へ入った感覚を語った。すべてが静止し、${chara17.sex}は果てしない草原へ来ると。`,
      );
      await era.printAndWait(
        `${chara17.sex}は使い切れない力を持つ。まるで未来と取引をしたようだと。`,
      );
      era.drawLine();
      await era.printAndWait('ジャパンカップ。');
      await era.printAndWait(
        `レース前、${you.name} は ${chara17.name} をじっと見つめた。${you.name} は知っている。${chara17.sex}はすでに最良の状態へ整えている。`,
      );
      await era.printAndWait(
        `だが強敵に勝つため、${chara17.sex}は再び領域へ入るだろう。否、${chara17.sex}は領域へ入らざるをえない。`,
      );
      await era.printAndWait(
        `燃え上がった炎のように、燃料を焼き尽くすまで止まらない炎のように。`,
      );
      era.printButton(`「気をつけてくれ。」`, 1);
      era.printButton(`「悪い予感がする。」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name} は ${you.name} を見る。${you.name} はやっと気づく。${chara17.sex}の手がわずかに震えている。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('ならば皇帝の姿を、心に刻め。');
      } else {
        await chara17.say_and_wait(
          'あなたの心配はわかります。ですが私たちの夢のため、私は退きません。',
        );
      }
      await era.printAndWait(
        `言い終えると、${chara17.teen_sex_title}はコースへ向かった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '油尽き灯枯れる（下）';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name} は ${chara17.name} がゴールするのを見た。${chara17.sex}は全身を震わせ、観客の歓声の中で素早く場を離れた。`,
      );
      await era.printAndWait(`${you.name} は急いで更衣室へ走る。`);
      await era.printAndWait('間違いない。');
      await era.printAndWait(
        `${you.name} は気が狂いそうだった。コース上で、${chara17.sex}が領域から崩れかけたのを見て、${you.name} はいわゆる代価が何かわかった。`,
      );
      await era.printAndWait(
        `領域——その燃料は、ウマ娘たちの未来だ！ でなければ、${chara17.name} がこれほどの傷を負うはずがない。まるで、まるで……`,
      );
      await era.printAndWait('本格化の力が消えたように。');
      await era.printAndWait(
        `${you.name} は更衣室へ着き、突然大きな音を聞いた！ ${you.name} が扉を開けると、壁に大きな穴が開いていた。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('吾の力が、コースの中で突然消えるだと？');
      } else {
        await chara17.say_and_wait('ごめんなさい。少し、感情が激しくて……');
      }
      await era.printAndWait(
        `${you.name} は慌てて前へ出る。${chara17.name} の血に濡れた手を見て、${you.name} はすぐに救急箱を探しに行った。`,
      );
      await era.printAndWait(
        `このままでは、勝利を望むどころか、${chara17.sex}はコースに立つことすらできない。`,
      );
      await chara17.say_and_wait('それでも、私は足を止めません。');
      await era.printAndWait(
        `${you.name} は驚いて顔を上げる。だが ${chara17.name} の目には、${you.name} にはとうてい理解できない感情があった。`,
      );
      await era.printAndWait('驚きと無念、そして狂喜と狂怒。');
      await era.printAndWait([
        { content: '？？？「領域が消えたその一瞬、', color: luna.color },
        { content: '私は見た——', color: emperor.color },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '？？？「', color: emperor.color },
        { content: 'あと少し……', color: luna.color },
        { content: '少し', color: emperor.color },
        { content: '（エデン）', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name} は応えられず、涙をこらえ、ただ ${chara17.name} の傷を処置した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_ge: (() => {
    const title = '領域の果て';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('は……は……');
      await chara17.print_and_wait('は…………');
      await chara17.print_and_wait(
        `${chara17.name} の眼前の世界は激しく揺れている。${chara17.sex}の視界のすべてが、ぼやけていく。`,
      );
      await chara17.print_and_wait(
        `潮のように襲う目眩と痛みが${chara17.sex}を打つ。領域が己を排斥している——${chara17.name} は悟った。`,
      );
      await chara17.print_and_wait(`${chara17.sex}は、もはや全能ではない。`);
      await chara17.print_and_wait(
        `一歩踏み出すたび、${chara17.name} は巨大な違和を感じる。`,
      );
      await chara17.print_and_wait(
        `足を置き、また上げる。激しい痛みで${chara17.sex}の顔は恐ろしいほど歪む。`,
      );
      await chara17.print_and_wait(
        `普段なら易々と割ける風が鉄壁のように立ち、${chara17.sex}を傷だらけにする。`,
      );
      await chara17.print_and_wait(
        `このレースで、${chara17.sex}は嵐の中で両翼を折られた飛鳥のようだった。`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `瞼が重くなる。${chara17.name}の意識はすでに恍惚としている。`,
      );
      await chara17.print_and_wait(
        '領域が崩れ始めている。あの緩慢な光景が、次第に動き出そうとしている。',
      );
      await chara17.print_and_wait(
        'ウマ娘たちが走る。緑の芝を蹴り、土埃を上げ、飛草を風へ乗せる。',
      );
      await chara17.print_and_wait(
        '自分の心臓はますます速く打つ。だが、わずかな力も出せない。',
      );
      await chara17.print_and_wait(
        '身体の部品——筋肉、筋脈、内臓が、巨大な慣性に引き裂かれている。',
      );
      await chara17.print_and_wait(
        'このカーブで止まらなければ、領域が完全に褪せる一瞬——',
      );
      await chara17.print_and_wait('自分は死ぬ。');
      if (i_emperor) {
        await chara17.say_and_wait(
          'コースは天途に非ず。いずれ停滞の時が来る。',
        );
      } else {
        await chara17.say_and_wait(
          'これが領域の真実……本格化の力を先食いしている……',
        );
      }
      await chara17.print_and_wait(
        '一代また一代の勇者が領域へ踏み入り、己の未来、理想、あらゆる可能性を先食いした。',
      );
      await chara17.print_and_wait(`今、番は ${chara17.name} に来た。`);
      await chara17.print_and_wait(
        '生涯、ひいては生命の終わりに直面したとき、自分は何をすべきか。誰も教えてくれなかった。',
      );
      await era.printAndWait([
        {
          content: 'ルナ',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '。', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'ルナ',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: 'お前は', color: emperor.color },
        { content: '私と', color: luna.color },
        { content: '（吾と）', color: emperor.color },
        { content: '一緒にいてくれますね？', color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `胸の息を吐き切り、千万の観客の視線の下で、${chara17.name} は加速した！！！`,
      );
      await era.printAndWait('道の続きがなければ、自ら踏み破れ！');
      await era.printAndWait([
        {
          content: 'ルナ',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: '我ら', color: emperor.color },
        { content: '私', color: luna.color },
        { content: 'たち', color: emperor.color },
        { content: 'の夢のために！！！', color: luna.color },
        '」',
      ]);
      era.printButton('「行け！！！！！！！」', 1);
      await era.input();
      await you.print_and_wait('行け！！！！！！！');
      await you.print_and_wait('行け！！！！！！！');
      await era.printAndWait(
        `${you.name} はもう、喉が裂けるかどうかなど気にしていなかった。`,
      );
      await era.printAndWait(
        `${you.name} が知っているのは、${chara17.name} があなたたちの夢へ真正面から踏み出していることだけだ。`,
      );
      await era.printAndWait('近い！ 近い！');
      await era.printAndWait(
        '盛大な歓声の中、最強のウマ娘は未知の彼方へ踏み出した。',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_be: (() => {
    const title = '絶響';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('は……は……');
      await chara17.print_and_wait('は…………');
      await chara17.print_and_wait(
        `${chara17.name} の眼前の世界は激しく揺れている。${chara17.sex}の視界のすべてが、ぼやけていく。`,
      );
      await chara17.print_and_wait(
        `潮のように襲う目眩と痛みが${chara17.sex}を打つ。領域が己を排斥している——${chara17.name} は悟った。`,
      );
      await chara17.print_and_wait(`${chara17.sex}は、もはや全能ではない。`);
      await chara17.print_and_wait(
        `一歩踏み出すたび、${chara17.name} は巨大な違和を感じる。`,
      );
      await chara17.print_and_wait(
        `足を置き、また上げる。激しい痛みで${chara17.sex}の顔は恐ろしいほど歪む。`,
      );
      await chara17.print_and_wait(
        `普段なら易々と割ける風が鉄壁のように立ち、${chara17.sex}を傷だらけにする。`,
      );
      await chara17.print_and_wait(
        `このレースで、${chara17.sex}は嵐の中で両翼を折られた飛鳥のようだった。`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `瞼が重くなる。${chara17.name}の意識はすでに恍惚としている。`,
      );
      await chara17.print_and_wait(
        '領域が崩れ始めている。あの緩慢な光景が、次第に動き出そうとしている。',
      );
      await chara17.print_and_wait(
        'ウマ娘たちが走る。緑の芝を蹴り、土埃を上げ、飛草を風へ乗せる。',
      );
      await chara17.print_and_wait(
        '自分の心臓はますます速く打つ。だが、わずかな力も出せない。',
      );
      await chara17.print_and_wait(
        '身体の部品——筋肉、筋脈、内臓が、巨大な慣性に引き裂かれている。',
      );
      await chara17.print_and_wait(
        'このカーブで止まらなければ、領域が完全に褪せる一瞬——',
      );
      await chara17.print_and_wait('自分は死ぬ。');
      if (i_emperor) {
        await chara17.say_and_wait(
          'コースは天途に非ず。いずれ停滞の時が来る。',
        );
      } else {
        await chara17.say_and_wait(
          'これが領域の真実……本格化の力を先食いしている……',
        );
      }
      await chara17.print_and_wait(
        '一代また一代の勇者が領域へ踏み入り、己の未来、理想、あらゆる可能性を先食いした。',
      );
      await chara17.print_and_wait(`今、番は ${chara17.name} に来た。`);
      await chara17.print_and_wait(
        '生涯、ひいては生命の終わりに直面したとき、自分は何をすべきか。誰も教えてくれなかった。',
      );
      await era.printAndWait([
        {
          content: 'ルナ',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '。', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'ルナ',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: '吾は', color: emperor.color },
        { content: '（私は）', color: luna.color },
        { content: '貴重な経験を', color: emperor.color },
        { content: 'あなたに伝える……', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('——おいで。');
      await chara17.print_and_wait(
        `己の宿命を迎えるように、${chara17.name} は己の末路へ向かって突っ込んだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  re_good_end: (() => {
    const title = (emperor) => [
      ['エデン、私を見よ', { content: '（我を）', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('ここは、どこ？');
      await luna.print_and_wait('ウマ娘は、突然夢から覚めたようだった。');
      await luna.print_and_wait('ここは、果てしない草原だ。');
      await luna.print_and_wait(
        `ウマ娘は走る。風が緑の芝を起こし、${chara17.sex}の散った髪も起こす。`,
      );
      await luna.print_and_wait(
        `${chara17.sex}の頭上には、太陽と月が同時にある。`,
      );
      await luna.print_and_wait(
        '日月の下、いくつかの影がウマ娘を見つめている。',
      );
      await luna.print_and_wait('三柱の女神——好奇の目で、その子を見ている。');
      await luna.print_and_wait('なるほど。');
      await luna.print_and_wait('ウマ娘は瞬きをした。');
      await luna.print_and_wait(
        `ウマ娘「${you.actual_name}、あなたはいつも私に休めと言いました。今……私は永遠に安らげる場所へ着きました。」`,
      );
      await luna.print_and_wait(
        'ウマ娘「初めて【エデン】の名を聞いたとき、それがどれほど壮大で美しい光景を含むか、想像できませんでした。」',
      );
      await luna.print_and_wait('ウマ娘「これは、まったく新しい世界です。」');
      await luna.print_and_wait(
        'ウマ娘「あるいはここにも生命がいるのでしょう。私たちと同じ喜怒哀楽を持って。」',
      );
      await luna.print_and_wait(
        'ウマ娘「多彩な物語と熱い願い、それから浪漫、愛情、そしてもがき。」',
      );
      await luna.print_and_wait('ウマ娘「私は、ついに着きました——」');
      await luna.print_and_wait(
        'ウマ娘の走りは次第に緩やかになり、ついには女神たちの前で止まった。',
      );
      await era.printAndWait(
        '三女神「子よ、すべてのはての……すべての始まりへ着いたことを祝おう。お前は、エデンへ来た最初のウマ娘だ。」',
      );
      await era.printAndWait(
        '三女神「我らはお前を報い、本当の夢を叶えてやろう！ では、願いを口にする前に、まだ尋ねたいことはあるか？」',
      );
      era.drawLine();
      await luna.print_and_wait(
        'ウマ娘は己の人生を思い返す。多くの画面が眼前を過ぎる。',
      );
      await luna.print_and_wait('ウマ娘「私たちの悲願と、とうてい届かぬ夢——」');
      await luna.print_and_wait('ウマ娘「私たちの伝承と、愛してきたすべて——」');
      await luna.print_and_wait(
        'ウマ娘「それらはなぜ、衰えず、一代また一代のウマ娘に受け継がれていくのですか？」',
      );
      await luna.print_and_wait(
        'ウマ娘は胸の疑問を口にした。だが女神たちが答える前に、彼女は自ら答えた。',
      );
      await luna.print_and_wait(
        'ウマ娘「ウマ娘とトレーナー……私たちのあいだの絆だから、でしょうか？」',
      );
      await luna.print_and_wait('ウマ娘は額を支え、顔を上げて粲然と笑った。');
      await luna.print_and_wait(
        `女神たちは愛おしげに${chara17.sex}の乱れた髪を撫でる。`,
      );
      await era.printAndWait('三女神「では、お前の願いは？」');
      await luna.print_and_wait(
        'ウマ娘は両腕を開き、この新しい世界を抱くようだった。',
      );
      await luna.print_and_wait('ウマ娘「夢が続いていく場所が欲しいのです。」');
      await luna.print_and_wait(
        'ウマ娘「ウマ娘が永遠に走り続けられる場所が欲しいのです。」',
      );
      await luna.print_and_wait(
        'ウマ娘「私たちを愛する者の歓声と祈りが聞こえ、勝利を祈ってくれているかぎり——」',
      );
      await luna.print_and_wait(
        'ウマ娘「私たちはいつでも挺身し、すべての強敵に勝てる場所が欲しいのです。」',
      );
      await luna.print_and_wait(
        'ウマ娘「人の世のエデンを！ 夢があるかぎり、すべてのウマ娘が行けるエデンを！」',
      );
      await era.printAndWait('女神たちは黙って頷いた。ウマ娘はまた口を開く。');
      await luna.print_and_wait(
        'ウマ娘「それから、私は戻ります。あのかたで、私の愛する人が待っていますから。」',
      );
      await era.printAndWait(
        '三女神「欲深い子だ……ふむ……だが我らも、願いをひとつに限るとは定めていなかったか？」',
      );
      era.drawLine();
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${luna.sex}は背を向け、${you.name} には${luna.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${luna.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${luna.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`${you.name} は長く息を吐いた。`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `ついに、${you.name} は${luna.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${luna.sex}を見るが、${luna.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        'ひとつの魂が眠るたび、もうひとつの魂が目覚める。',
      );
      await luna.say_as_unknown_and_wait(
        '一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。',
      );
      await era.printAndWait(
        `${luna.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      era.printButton('「君は、ただの太陽なのかもしれない。」', 1);
      era.printButton('「君は、ただの月なのかもしれない。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の言葉を聞き、${chara17.sex}は頭を下げた。`,
      );
      era.printButton('「だが君は、太陽でもあり、月でもあれる。」', 1);
      era.printButton('「だが君は、皇帝でもあり、ルナでもあれる。」', 2);
      await era.input();
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait(
        `${luna.sex} は呆けて ${you.name} を見つめ、それから頰を赤らめ、目尻も赤くした。`,
      );
      await era.printAndWait(
        `${you.name} は手を伸ばし、${luna.sex}はあなたへ走る。ルナか？ 皇帝か？ ${you.name} はもうその問いを考えない。`,
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}の伸ばした手を握り、それから心ゆくまで抱き合い、涙を雨のように流した。`,
      );
      await era.printAndWait(
        `${you.name} は信じる。今このとき、${you.name} の腕の中の${luna.sex}、ただ ${you.name} と熱く抱き、口づけする${luna.sex}も、もうその問いには縛られていない。`,
      );
      await era.printAndWait(
        '深い口づけのあと、二人は息を整え、次の真心を澄ませる嵐の前に、一息つきたいと思っている。',
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}があなたの胸に凭れた熱を感じる。こんな熾熱は、これまでなかった——皇帝の疑う余地のないものと、ルナの柔情が、ともにある。`,
      );
      await you.say_and_wait(
        '君は俺が愛する皇帝であり、俺を愛するルナだ。',
        true,
      );
      await era.printAndWait(
        `${you.name} はそう思ったが、しばらくして首を振り、懐の美人の小さな声の中で、${luna.sex}とともに芝生へ倒れた。`,
      );
      era.printButton('「俺の愛人の名は、シンボリルドルフだ。」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_luna: (() => {
    const title = '悠久の輪月';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${chara17.name} は遠く夕陽の下に立つ。風が緑の芝を起こし、${chara17.sex} の散った髪も起こす。`,
      );
      await era.printAndWait(
        `月夜が近づき、太陽はまだ落ちていない。${chara17.sex}は背を向け、${you.name} には${chara17.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${chara17.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${chara17.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `ついに、${you.name} は${chara17.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${chara17.sex}を見るが、${chara17.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「ひとつの魂が眠るたび、もうひとつの魂が目覚める。」',
      );
      await era.printAndWait(
        '？？？「一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。」',
      );
      await era.printAndWait(
        `${chara17.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      await luna.say_as_unknown_and_wait(
        `私は、あの皇帝をとても憎んでいました。`,
      );
      await era.printAndWait(`${you.name} は呆けて${chara17.sex}を見つめた。`);
      await luna.say_as_unknown_and_wait(
        `ですが最後に、${chara17.sex}は私に言いました。『あの弄臣は、はじめから吾が負けぬと信じていた』と。`,
      );
      await luna.say_as_unknown_and_wait(
        `だから${chara17.sex}は ${you.actual_name} に、永遠に覚めない美しい夢を贈ると。`,
      );
      await luna.print_and_wait(
        '？？？「皇帝の征途は、もう終わったのですね。」',
      );
      await era.printAndWait(
        `ルナのかつての憂いの目には迷いがある。あなたたちの願いはもう果たされたのに、${
          chara17.sex
        }はどうしてこれほど悵然としているのか。`,
      );
      await luna.say_and_wait('では、私の物語も、終わってしまうのでしょうか？');
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait('夜が降り、太陽の姿は消えた。');
      await era.printAndWait('天上に残るのは、明月の優しい抱擁だけ。');
      await era.printAndWait(`${you.name} は頭を下げ、目尻を赤くした。`);
      era.printButton('「俺は傍にいる。」', 1);
      era.printButton('「『皇帝』の物語は、永遠に終わらない。」', 2);
      await era.input();
      await luna.say_and_wait('そう、ですか。');
      await era.printAndWait('重い足を上げ、ルナは輪月のほうへ歩いていく。');
      await era.printAndWait(
        `${you.name} は${luna.sex}がどこへ行くのかわからない。`,
      );
      await era.printAndWait([
        `だが ${you.name} はそれでも震えながら立ち上がり、`,
        luna.get_colored_name(),
        ` のあとを追った——${luna.sex}がどこへ行こうと。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_emperor: (() => {
    const title = '皇帝降臨';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${chara17.name} は遠く夕陽の下に立つ。風が緑の芝を起こし、${chara17.sex} の散った髪も起こす。`,
      );
      await era.printAndWait(
        `月夜が近づき、太陽はまだ落ちていない。${chara17.sex}は背を向け、${you.name} には${chara17.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${chara17.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${chara17.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `ついに、${you.name} は${chara17.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${chara17.sex}を見るが、${chara17.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「ひとつの魂が眠るたび、もうひとつの魂が目覚める。」',
      );
      await era.printAndWait(
        '？？？「一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。」',
      );
      await era.printAndWait(
        `${chara17.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      await emperor.say_as_unknown_and_wait(
        '近日、吾は危うくコースで戦死するところだった。だが最後、か細い声が吾を励ました。',
      );
      await era.printAndWait(`${you.name} は呆けて${chara17.sex}を見つめた。`);
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex}は吾に支えよと言った。${chara17.sex}は言った。『私はあなたが一番嫌いです。ですが私たちの夢のため、ただひとつだけ祈ります。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『勝利を携えて、${you.actual_name} に会いに行って。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『たとえこれから永遠に逢えなくても』、${chara17.sex}は言った……${chara17.sex}も、すべてを捧げると。`,
      );
      await era.printAndWait(
        `皇帝の鋭い目には迷いがある。${chara17.sex}はどうしても思い出せない。誰が己の脳裏でこれほどやかましくするのかを。`,
      );
      await emperor.say_and_wait(`${chara17.sex}は誰だ？`);
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait('空が明るすぎて、月の姿は消えた。');
      await era.printAndWait('残るのは、太陽の尽きせぬ光だけ。');
      await era.printAndWait(`${you.name} は頭を下げ、目尻を赤くした。`);
      era.printButton('「吾が君、あの者は俺にとって非常に大切な人です。」', 1);
      era.printButton('「……誰だろう？」', 2);
      await era.input();
      await emperor.say_and_wait('そうか。');
      await era.printAndWait('重い足を上げ、皇帝は太陽のほうへ歩いていく。');
      await era.printAndWait(
        `${you.name} は${emperor.sex}がどこへ行くのかわからない。`,
      );
      await era.printAndWait([
        `だが ${you.name} はそれでも震えながら立ち上がり、`,
        emperor.get_colored_name(),
        ` のあとを追った——${emperor.sex}がどこへ行こうと。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_wax_and_wane: (() => {
    const title = '陰晴円欠';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '小さなころ、家の者は私に期待などしていませんでした。',
      );
      await luna.print_and_wait(
        '私は好き勝手に遊ぶことを許され、トレーニングに出ないことも許されていました。私には、みな「どうでもいい」という態度でした。',
      );
      await luna.print_and_wait(
        'シンボリ家とはそういう場所です。人々が気にかけるのは実力だけ。',
      );
      await luna.print_and_wait('だから、強い姉たちはコースを飛んでいました。');
      await luna.print_and_wait(
        'そして私は、芝生の上で一日中眠ることさえできました。',
      );
      await luna.print_and_wait(
        '私は楽に日を過ごしたかった。ですが年を重ねるうち、体内の躁動を抑えきれないことに気づきました。',
      );
      await luna.print_and_wait('まるで、私の血が体内で燃えているように。');
      await luna.print_and_wait(
        'そういうとき、私の胸には暴虐で兇暴な気持ちが生まれます。',
      );
      await luna.print_and_wait(
        '引き裂きたい、踏み潰したい、相手を足の下に踏みつけ、嘲り、嗤いたい！',
      );
      await luna.print_and_wait(
        '——すべての者からすべてを奪い、世界を焼き払いたい！',
      );
      await luna.print_and_wait(
        '体力を使い果たし、やっと我に返ったとき、私は尽きせぬ空虚と恐怖しか感じられませんでした。',
      );
      await luna.print_and_wait(
        '私は一喜一憂するようになりました……妄想を止めたい一心で、自らトレーニングに出るようになりました。',
      );
      await luna.print_and_wait(
        '極限まで走ったときだけ、私は穏やかになれる……私自身でいられる。',
      );
      await luna.print_and_wait('「ルナ。」');
      await luna.print_and_wait(
        '母がつけてくれた美しい名。優しい名でもあります。',
      );
      await luna.print_and_wait(
        '私は、暴力を発散するだけの怪物にはなりたくありません……',
      );
      await luna.print_and_wait(
        'ですが血脈がもたらす暴虐には勝てません。シンボリ家のこれまでのウマ娘と同じように。',
      );
      await luna.print_and_wait(
        'このとき、私はやっとわかりました。なぜ家の者が私を躾けないのかを。',
      );
      await luna.print_and_wait(
        '代々流れる「シンボリ」の血が、私を定められた道へ導くからです。',
      );
      await luna.print_and_wait('勝利。勝利。');
      await luna.print_and_wait(
        '勝てさえすれば、私が自分でなくなっても許される。',
      );
      await luna.print_and_wait('というより、勝てさえすれば、どうでもいい。');
      await luna.print_and_wait(
        '私が稀代の才能を見せたあと、シンボリ家は私を育て始めました。',
      );
      await luna.print_and_wait('望めば、すべての資源を易々と手にできます。');
      await luna.print_and_wait('望めば、すべての寵愛を易々と手にできます。');
      await luna.print_and_wait('ですが私は、なお空虚と恐怖を感じていました。');
      await luna.print_and_wait(
        '走ることで頭を空にできるのは一時です。すべての相手を越え、ゴールから振り返ったとき、息を切らして気づくのです。私の口角が、止められずに上がっていることに。',
      );
      await luna.print_and_wait('まるで、人が変わったように。');
      await luna.print_and_wait(
        '思わず考えます。ルナは、本当の私なのでしょうか？',
      );
      await luna.print_and_wait(
        'それとも、コースで八方を虐げる怪物こそが、本当の私なのでしょうか？',
      );
      await luna.print_and_wait(
        '誰かに泣きたいと思いました。ですが私が成長するにつれ、優しくしてくれた人々は唐突に逝きました。',
      );
      await luna.print_and_wait(
        '母は、狩人に驚いて鬱々として果てました。姉は、レース前の準備の中で粲然と逝きました。',
      );
      await luna.print_and_wait('あるいは、私も……');
      await luna.print_and_wait(
        '冷たい月光の注視の下、私は狂ったように大人たちの傍へ行きました。',
      );
      await luna.say_and_wait('欲しいのは——');
      await luna.print_and_wait(
        '安心でした。もう恐れなくていいこと。ですが和やかな祖父と父母の前で、私はそう言えませんでした。',
      );
      await luna.print_and_wait('彼らの目にある期待を見てしまったからです。');
      await luna.print_and_wait(
        'だから私は【愛】を願いました。数えきれない兄弟姉妹が傍にいること。各地から集う面白い人たちが、シンボリ家を囲むこと。',
      );
      await luna.print_and_wait('ここが賑やかになれば——');
      await luna.print_and_wait('人々に囲まれれば——');
      await luna.print_and_wait(
        'きっと、きっと機会はある。きっと誰かが、自分を空虚と恐怖から救ってくれる。',
      );
      await luna.print_and_wait('そのとき……私は……ルナは、きっと——');
      await luna.say_and_wait(`${you.actual_name}？`);
      await luna.print_and_wait(
        'ルナは夢から驚き、自分がひとりベッドにいるのに気づいた。',
      );
      await luna.print_and_wait(
        'なぜこんな夢を見たのか。ルナは頭を押さえる。窓の外の皎々たる明月を見て、目眩を感じた。',
      );
      await luna.print_and_wait(
        '励ましを受け、理想へ衝く決意をしたはずなのに、【皇帝】に意識を奪われ、暴虐の血脈を奮い起こすことを思うと……',
      );
      await luna.print_and_wait(
        'ルナは潸然と涙を流した。どうしても、まだ怖い。',
      );
      await luna.print_and_wait(
        '忍耐には慣れたつもりでした。耐えれば、事態は好転すると信じていました。',
      );
      await luna.print_and_wait(
        `ですが ${you.actual_name} と再会してから、これまで頼ってきた忍耐が、役に立たなくなりました。`,
      );
      await luna.say_and_wait('会いたい……');
      await luna.say_and_wait('会いたい……');
      await luna.print_and_wait(`${luna.teen_sex_title}は、一晩眠れなかった。`);
    };
    f.title = title;
    return f;
  })(),
  ws_a_stones_throw: (() => {
    const title = 'あと一歩';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `ルナはどうして皇帝になったのか。${you.name} はやっと思い出した。`,
      );
      await era.printAndWait(
        'あれは無謀な計略だった。新米の生意気な小僧が、シンボリの未来の星へ仕掛けた蠱惑だった。',
      );
      era.printButton(
        '「暴虐が憎いなら、そういうことは他人にやらせればいいんじゃないか？」',
        1,
      );
      await era.input();
      await luna.say_and_wait('他人……？');
      era.printButton(
        '「ああ、他人。たとえば——別の人だ。つまり、もうひとりの君だ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} の本意は、浮かない顔のルナを解きほぐすための冗談だった。だがなぜか、普段は悪戯な子が、ずいぶん真剣に聞いていた。`,
      );
      await era.printAndWait(
        `${luna.sex}の目に急かされ、${you.name} は知恵を絞り、荒唐な話を続けた。`,
      );
      era.printButton('「ルナとは違う、好戦的で暴虐な存在を創り出そう。」', 1);
      era.printButton('「君の個性の上に立てた、想像の姿だ。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} は息を吐き、ふと思いついた。`);
      await you.say_and_wait('そうだ、【皇帝】みたいに！');
      await era.printAndWait(
        `ルナは呆けて ${you.name} を見つめる。${you.name} は、いま脳裏を過ぎった考えに歓喜していた。`,
      );
      await era.printAndWait(
        `違う、だめだ——${you.name} の魂が震える。${you.name} はやっと思い出した。`,
      );
      await era.printAndWait(
        `皇帝は、${you.name} がルナのために創った牢獄だ。`,
      );
      era.printButton(
        '「ルナにできないことは、すべて皇帝にやらせればいい。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `そうではない。あの子の運命、${luna.sex}が背負うすべてを、こんなに軽く括っていいはずがない！`,
      );
      await you.say_and_wait('そうすれば、ルナは易々と頂点に立てるだろ！');
      await you.say_and_wait('黙れ！ 早く黙れ！ もう言うな！！！', true);
      await era.printAndWait(
        `${you.name} は己の首をきつく絞めたいと思った。その動作のあいだに、${you.name} は夢から覚めた。`,
      );
      await era.printAndWait(`${you.name} は冷や汗に濡れていた。`);
      await era.printAndWait(
        `あのころの ${you.name} は、ただの思い上がった馬鹿だった。四方で才能を持て余していると自称していたが、実際は学生の空論にすぎない。`,
      );
      await era.printAndWait(
        `ルナと出会ったとき、${you.name} は脳裏に隠していた、日の目を見なかった戦略、見聞、幻想、そして ${you.name} がルナから読み取った——${luna.sex}はいずれ大人物になる、ということを、一気に口にした。`,
      );
      await era.printAndWait(
        `${you.name} は、あのときの自分がどれほどみっともなかったか知らない。だがルナは、あのとき、釈然とした笑みを見せた。`,
      );
      await era.printAndWait('月夜の下で、咲いた笑み。');
      await era.printAndWait(
        'あのとき、自分は決めた。ルナのために湯火も辞さず、命も知恵も捧げると。',
      );
      await era.printAndWait(
        '本業へ戻ったことも、死ぬほど学んだことも、シンボリルドルフのトレーナーになったことも——',
      );
      await era.printAndWait('【皇帝】の威名を遠くへ響かせるためではない。');
      await era.printAndWait('すべては、ルナの笑顔のためだったはずだ！');
      await era.printAndWait('だがなぜ、なぜこうなってしまったのか……');
      await era.printAndWait(`${you.name} は頭を押さえ、深く息を吐いた。`);
    };
    f.title = title;
    return f;
  })(),
  fall_into_hell: (() => {
    const title = '深淵へ堕ちる';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `対戦相手が次々とコースへ上がる中、${you.name} はふと気づく。ルナの様子がおかしい。`,
      );
      await era.printAndWait(
        `${luna.sex}は呆けて椅子に座り、呆けてあなたを見ている。`,
      );
      await era.printAndWait(`皇帝は？ ${you.name} は固まった。`);
      await era.printAndWait(
        `${you.name} の惑った目に対し、ルナは口を開いても声にならない。`,
      );
      await luna.say_and_wait('もう……あの子を出したくない！');
      era.printButton('「ルナ、レースが始まる！」', 1);
      era.printButton('「大丈夫だ。俺が傍にいる。」', 2);
      await era.input();
      await era.printAndWait(
        `だが ${you.name} がどう諭しても、ルナは首を振って拒んだ。`,
      );
      await era.printAndWait(
        '——レースはすぐ始まる。皇帝がまた「現れ」なければ、本当に万事休すだ。',
      );
      await era.printAndWait(
        `仕方なく、${you.name} は喉を絞り、全力で滑稽な弄臣のように声を作った。`,
      );
      era.printButton(
        '「皇帝よ、我が偉大なる皇帝！ 聞こえますか？ 万民の雷のような呼び声が！」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `ルナはなお泣いている。名もない火が ${you.name} の胸で燃える。こんなときまで……！`,
      );
      era.printButton(
        '「吾が君、あなたが眠っているあいだに、また逆賊が栄光を辱めました。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `ルナはただ頼りなく首を振る。${you.name} は歯を食いしばった。`,
      );
      era.printButton('「どうかお目覚めを。滔天の怒りを……」', 1);
      await era.input();
      await era.printAndWait(
        `偏執が ${you.name} の顔を歪ませ、声を嗄れさせた。`,
      );
      await era.printAndWait(
        '狂った呼びかけが効いたのか、ルナの身体は次第に震えを止めた。',
      );
      await era.printAndWait(
        `${luna.sex}は ${you.name} を見る。両目の恐怖が次第に退き、代わって人を凍らせる鋭さが宿る。`,
      );
      await era.printAndWait(
        `${you.name} は胸をなで下ろした。だが眼前のウマ娘は突然頭を押さえた。`,
      );
      await era.printAndWait(`ルナは迷って ${you.name} を見る。`);
      await luna.say_and_wait(
        `${luna.couple_title}は、私の友人ではありませんか？`,
      );
      era.printButton(`「……${luna.couple_title}は君の友人だ。」`, 1);
      era.printButton(`「吾が君、${luna.couple_title}は万死に値します！」`, 2);
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          'どうしても、こうしなければいけないのですか？ どうしても、あの嫌いな姿にならなければいけないのですか？',
        );
        era.printButton('「いや……いやだ！ 今すぐ回避の手続きをする！」', 1);
        era.printButton('「吾が君！ あなたは生まれながらの皇帝です！」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            '私は皇帝ではありません！ もうルナを消さないで。このままでは、ルナは本当にいなくなります。',
          );
          await luna.say_and_wait('あなたがまだ私を愛しているなら、そんな……');
          await era.printAndWait(
            `ルナは絶望して ${you.name} を見る。伸ばした手は、救命の藁を掴みたいようだ。`,
          );
          await luna.say_and_wait('離れないで……私から……');
          await era.printAndWait(
            `${you.name} は目を閉じた。ルナはこれほど ${you.name} を信頼し、恋慕している。だから——`,
          );
          era.printButton('「俺の手を握れ、ルナ！」', 1);
          era.printButton('「皇帝万歳！」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `言葉が出た瞬間、${you.name} は時間が凍ったように感じた。だが次の刹那、${you.name} は呼吸する権利を失った。`,
            );
            await era.printAndWait(
              `ルナ……いや、皇帝が手を伸ばし、${you.name} の首をきつく絞めた。`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `あなたの言葉を聞き、ルナはやっと重荷を下ろした。${luna.sex}は待ちきれず ${you.name} へ手を伸ばす。沈まぬための藁を掴むように。`,
        );
        await era.printAndWait(
          `${you.name} は思わず溜息をつく——自分はルナに、何をさせてしまったのか。`,
        );
        await era.printAndWait(
          'なぜこれまでルナの異変に気づかなかったのか。どんな荒波が来ようとも。',
        );
        await era.printAndWait(
          `だが今からでも遅くない！ ルナのトレーナーとして、守り手として、そして……愛人として、${you.name} はルナのためにすべての風雨を背負う。`,
        );
        era.printButton('「ルナ、俺は……」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} はルナを見て、${luna.sex}の手を取ろうとした。`,
        );
        await era.printAndWait(
          `だがその、${you.name} が幾度も握り、永遠に離さないと誓った手は、突然前へ出た。`,
        );
        await era.printAndWait('鉄の万力のように、首を死ぬほど絞める。');
        await emperor.say_and_wait('ルナ？ 誰だ？');
      }
      await era.printAndWait(
        `皇帝は蔑んで ${you.name} の首を絞め、立ち上がった。`,
      );
      await emperor.say_and_wait(
        '吾はどれほど眠った？ 吾の栄光を狙う賊はどこだ？',
      );
      await era.printAndWait(
        `${emperor.sex}はあたりを睥睨する。驚くことに、眠から覚めるたび、${emperor.sex}は違う場所にいる。`,
      );
      await era.printAndWait(
        'そしてなぜ、覚めるたび、なお己の意志に逆らう者がいるのか？',
      );
      await era.printAndWait(
        `${you.name} は声も出せず、抜け出すこともできず、ただ大口を開けてアァアァと息をするだけだった。`,
      );
      await era.printAndWait(
        `酸素が足りず、${you.name} の視界は次第にぼやけ、意識が遠のいていく。`,
      );
      await emperor.say_and_wait('ふん。');
      await era.printAndWait(
        `応えがないのに飽きたのか、皇帝は気ままに ${you.name} を地面へ投げた。鈍い音のあと、${you.name} は激しく嘔吐し、五臓六腑が潰されたように感じた。`,
      );
      await era.printAndWait(
        `起き上がれない ${you.name} は、地面に伏せ、皇帝の足音が遠ざかるのを聞くだけだった。`,
      );
      await era.printAndWait(
        `意識が消える最後に、${you.name} はまたルナの泣き声を聞いた気がした。`,
      );
      await era.printAndWait('すまない……もう引き返せない。');
      await era.printAndWait(`${you.name} は意識を失った。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
   * @param {boolean} i_good_end Good Ending か（その場合はシンボリルドルフ）
   * @param {boolean} i_emperor 現在が皇帝人格か（GE でない場合）
   */
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        'あなたはどんな空が好きですか？ 太陽、それとも月？ 決められなくても構いません。あなたがどんな空の下にいようと、いつか、私たちは出会います。ええ、今度は、私たちがあなたを探しに行きます。',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        'まだ前へ進めるなら、ここに留まる必要はない！ 吾の天途は止まらぬ。祝え、弄臣よ！ 貴様は皇帝の偉業を目撃する。褒美として、吾は貴様に永世、吾に従い仕えよという栄誉を許す……答えは？',
      );
    } else {
      await chara17.say_and_wait(
        `皇帝の物語は終わりました。ですが私の使命は、まだ終わっていません。手を携えて、あそこへ行きましょう。すべての${chara17.uma_sex_title}が幸福になれる未来へ。ええ……その未来には、私も含まれるはずです。だから……あなたは、私を幸福にしてくれますよね？`,
      );
    }
  },
};
