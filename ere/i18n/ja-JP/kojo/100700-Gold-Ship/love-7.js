/**
 * @file ゴールドシップ - 恋慕
 * @author 雞雞
 */
const era = require('#/era-electron');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `因果の始まりは、${gold_shp.name} のあの選抜レースだった。あのレースのあと、${gold_shp.sex}は ${callname} と契約し、公式の舞台に立てるウマ娘になった。`,
      );
      era.println();
      await gold_shp.say_and_wait(
        'なんであいつを気に入ったのか、今さらもう分からねえ。',
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} は夕陽の遊園地の滑り台の上で沈思している。${gold_shp.sex}は顎を手すりに預け、銀の髪を滝のように落とす。傍らで戯れる子供たちが視界を出入りしても、心はずっと、ここにいない誰かに置かれたままだ。`,
      );
      era.println();
      await gold_shp.print_and_wait([
        `最初から、${gold_shp.sex}は自分の行動が理解できなかった。普通、ウマ娘とトレーナーの間では、トレーナー側が選手を募集する。だが ${callname} との契約は、スカウトされたというより、`,
        {
          color: gold_color,
          content: `${gold_shp.name} があいつに売りつけた、と言ったほうが近い。`,
        },
      ]);
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} が出走するには、トレーナーと契約する必要がある。それは確かだ。`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${you.actual_name} はトレーナーだ。それも確かだ。`,
      );
      era.println();
      if (era.get('flag:当前声望') < 1000) {
        await gold_shp.print_and_wait(
          `${you.actual_name} なら、${gold_shp.name} が自分のエデンを見つける助けになるかもしれない。`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${you.actual_name} の腕は確かで、${gold_shp.name} が自分のエデンを見つける助けになる。`,
        );
      }
      era.println();
      if (era.get('exp:7:性爱次数') > 0) {
        await gold_shp.print_and_wait(
          `後出しだが、${you.actual_name} はベッドの上で、火照った体を慰めてくれるのも確かだ。`,
        );
        era.println();
      }
      await gold_shp.print_and_wait(
        'だが——くそっ、だからってこの黄金の旅に、あいつが必要不可欠ってわけじゃねえ！',
      );
      era.println();
      await gold_shp.print_and_wait(
        '中央トレセンは優秀だ。ウマ娘もトレーナーも、良い選択肢は腐るほどある！ ロク叔父トレーナー（歳を取りすぎかも）、ナセトレーナー（真面目すぎるかも）、桐生院トレーナー（若すぎるかも）だって、かつてはエデンへ続く道の相棒候補だった。',
      );
      era.println();
      await gold_shp.print_and_wait([
        'なのに——あいつを見た',
        {
          color: gold_color,
          content: '0.0000001秒で、両脚に命令を下してしまった。',
        },
      ]);

      era.printButton('「黄金星の天啓、か……」（関係を進める）', 1);
      era.printButton('「アタシは何やってんだ……」（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `その言い訳は、${gold_shp.name} 自身すら騙せなかった。${gold_shp.sex}は目を閉じる。だが心に焼きついた影は消えない。${gold_shp.sex}は力いっぱい首を振ってあいつを見まいとするのに、頭はあいつについての思考を強いてくる。`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${gold_shp.sex}は目を閉じる。だが心に焼きついた影は消えない。${gold_shp.sex}は力いっぱい首を振ってあいつを見まいとするのに、頭はあいつについての思考を強いてくる。`,
        );
      }
      era.println();
      await gold_shp.print_and_wait(
        `いま、半分の ${gold_shp.name} は自分を説得している。世の中には一目惚れなんてものがあって、ゴルシとトレーナーは愛の神の矢に真正面から射抜かれた天生の一対なんだ、と。`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `残りの半分の ${gold_shp.name} は反対する。これは単にゴルシとトレーナーの仲がいい証拠で、それ以上の何も証明しない、と。`,
      );
      era.println();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `ついには、感性の ${gold_shp.name} が優勢を取った。${gold_shp.name} の目は迷いから決意へ変わり、体を起こしてトレセンの方を見る。`,
        );
        era.println();
        await gold_shp.say_and_wait('違う、これは一目惚れだ。');
      } else {
        await gold_shp.print_and_wait(
          `ついには、理性の ${gold_shp.name} が優勢を取った。だが抑えきれない想念は、雲の影みたいに頭上を徘徊したままだ。${gold_shp.name} ですら簡単に振り切れないこの苦悩は、いったいいつまで続くのか。`,
        );
      }
      return [ret];
    };
    f.title = [{ color: gold_color, content: '感性と理性' }];
    return f;
  })(),
  '74-1': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `ある夜、${gold_shp.name} は鼻と上唇で鉛筆を挟み、ふかふかの寮のベッドに半ば横たわっていた。${gold_shp.sex}は両脚と強い腰で体幹を浮かせたまま、頭だけはマットに密着させている。鉛筆の木と塗料の混ざった匂いも、${gold_shp.sex}の思考の速度を妨げない。いま、この世の万象が ${gold_shp.name} の中で素早く分析され、分解され、また組み立てられている。`,
      );
      era.println();
      await era.printAndWait('常温超電導に勝ち目はあるか？ ない。', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('恐竜は巨大な鶏か？ そうだ。', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('ペプシかコーラか？ 白湯。', {
        color: gold_color,
      });
      era.println();
      await gold_shp.print_and_wait('……');
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} は ${callname} のことが好きか？ 好きだ。`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} は両脚に力を込め、宙へ跳ね上がると、頭と両手の三点でベッドに逆立ちした！ 血液がいま、${gold_shp.sex}の脳へ、作戦に必要なエネルギーを送り込み続ける——気持ちが決まったなら、次にやることは一つしかない……！`,
      );
      era.println();

      era.printButton('「作戦を立てて、攻勢開始！」（関係を進める）', 1);
      era.printButton('「慎重に、長期戦でいけ！」（まだ進めない）', 2);
      return [await era.input()];
    };
    f.title = [{ color: gold_color, content: '戦術決断' }];
    return f;
  })(),
  '74-2-start': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.say_and_wait(
        'ゴールドシップ、野心満々、天下を呑む。地球上の人類とウマ娘がどれだけ警戒しようと、黄金火山が噴火した日にゃあ、最低でも120億ウマコインの被害を覚悟しとけ。',
      );
      era.println();
      await gold_shp.say_and_wait(
        'だが、英雄ゴールドシップといえども、色には弱い……',
      );
      era.println();
      await gold_shp.say_and_wait(
        'いまゴールドシップはトレーナーのデスクの端に座っている。口の中で何やら呟き、ちょうどこの場面を三人称で実況しているかのようだ。',
      );
      era.println();

      era.printButton(
        '「……自分にナレーション入れてるのか？ しかも今の文まで？」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        `${callname} うぜえな、もっと乗れよ！ 役やってくれよ！ ゴールドシップは少し怒って叫ぶと、拳を上げてトレーナーを軽く叩く。ダメージダイスを振れ。`,
      );
      era.println();

      era.printButton(
        '「いや、急にTRPGモード入るな！ こっちは真面目に仕事してるんだ。」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait([
        'うぅぅ、仕事と、かわいい担当',
        gold_shp.uma_sex_title,
        'と遊ぶの、どっちが大事なのさー！',
      ]);
      era.println();
      await era.printAndWait(
        `${gold_shp.name} が ${you.name} の椅子を揺すり続け、${you.name} は仕事に集中できない。仕方なく席を立ち、${gold_shp.name} がまた何を仕出かすのか見に行く。`,
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.name} はにやりと悪く笑い、${you.name} をソファへ押し倒した。`,
      );
    };
    f.title = [{ color: gold_color, content: '英雄船、色に弱し' }];
    return f;
  })(),
  /**
   * @param {CharaTalk} gold_shp ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ゴールドシップのプレイヤーへの呼び方
   */
  async '74-2-end'(gold_shp, you, callname) {
    const ret = [];
    era.drawLine();
    await era.printAndWait(
      `この激しい馬跳びは、疑いようもなく痛快な体験だった。さっきまで爽やかだったトレーナー室は、いま精液と愛液の匂いが充満している。${you.name} は息を切らして ${gold_shp.name} の腕の中へ沈み、${gold_shp.sex}が絶えず放つホルモンを吸い込みながら、頭の中ではさっき何が起きたのかを考え続けていた。`,
    );
    era.println();
    await gold_shp.say_and_wait(
      `どうだ ${callname}……超絶美少女ゴルシの、汁だくおまんこ、気持ちよかったろ？`,
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name} は頬を紅潮させ、得意げに ${you.name} へ笑う。`,
    );
    era.println();

    era.printButton('「いつからそんなに下品になったんだ……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      'てめぇのせいだろ……ふふふ。アタシの前で鎖骨見せたり尻振ったり、まるで誘ってるみたいにさぁ。我慢の限界だったんだよ！',
    );
    era.println();

    era.printButton('「変態……強姦魔……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      'なんて言われようと、もう抜き差しならねえ仲だ！',
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name} は腕で ${you.name} の首を絡め、強引に胸元へ鎖した。少女の体香が、意識を蕩けさせる。`,
    );
    era.println();
    await era.printAndWait(`長い沈黙のあと、${gold_shp.sex} が口を開く。`);
    era.println();
    await gold_shp.say_and_wait('だから……責任、取るから。その……');
    await gold_shp.say_and_wait(`${callname}、アタシと……付き合え！`);
    era.println();

    era.printButton('「うん、いいよ。」（関係を進める）', 1);
    era.printButton('「それはちょっと……」（まだ進めない）', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait(
        `${you.name} が予想しなかったのは、${gold_shp.name} のほうが ${you.name} より驚いた顔をしていたことだ。`,
      );
      era.println();
      await gold_shp.say_and_wait('マジかよ？ 絶対に断られると思ってた！');
      await gold_shp.say_and_wait(
        '……だから先に、生米を炊いて飯にしちまう作戦を選んだ。',
      );
      era.println();

      era.printButton(
        'ゴルシ、焦ってるな（笑）。そんなに信用してなかったのか？',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        'こんなことで焦んねえやついるか！ あと笑ってんじゃねえ！',
      );
      await gold_shp.say_and_wait('だって……成功すると思ってなかったし……');
      await gold_shp.say_and_wait(
        'アタシ、普段から面倒で、不真面目で、面倒で……手が止まらなくて、いつもてめえを巻き込むし……',
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} は話しながら黙り込み、${you.name} は ${gold_shp.sex} の急な呼吸から、泣き出すまいと耐えているのが分かった。`,
      );
      era.println();
      await you.say_and_wait(
        '俺はトレーナーだ。担当のウマ娘を導き、大切にするのが使命だ。お前は俺の担当で、それは永遠に変わらない。',
      );
      await you.say_and_wait(
        '現実にも、世間にも、問題は山ほどあるだろう。でも俺の頭は、もうお前にめちゃくちゃにされてる。',
      );
      await you.say_and_wait('いまは、お前と一緒に狂い続けたい。');
      await you.say_and_wait('だから覚悟しろ——');
      era.printButton('「愛してる♡」', 1);
      era.printButton('「レ○プ魔♡」', 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} と ${gold_shp.name} は固く抱き合った。このベッドはいま、${gold_shp.sex} の小さなすすり泣きと、できたての恋人たちを包んでいる。`,
      );
    } else {
      await era.printAndWait(
        `${gold_shp.name} は、${you.name} が想像したように駄々をこねて転がったりはしなかった。寂しげに体を起こし、胸の双丘が垂れる。${gold_shp.sex}は口を開いて何か言おうとしたが、歯の隙間から出たのは、結局——`,
      );
      era.println();
      await gold_shp.say_and_wait('うん、分かった。悪い。');
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} は黙ってベッドを離れ、床に落ちた服を着直す。`,
      );
      era.println();

      era.printButton('「あの、ゴルシ？」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} に返事はなかった。その人は一礼しただけで、扉を閉めて出ていった。`,
      );
    }
    return ret;
  },
  golden_ship_attack: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `トレーナー室のスピーカーから流れるバラエティ番組の効果音とともに、${gold_shp.name} は突然 ${you.name} をソファへ通した。`,
      );
      await era.printAndWait(
        `${gold_shp.sex}は器用にペンを取り、ホワイトボードへ書いた。`,
      );
      era.println();

      await era.printAndWait(`突撃！ ${gold_shp.name} の`, { align: 'center' });
      await era.printAndWait('超残酷二択クイズ！', { align: 'center' });
      await era.printAndWait('～生き残れるかな？～', { align: 'center' });
      era.println();

      await era.printAndWait(
        `突然すぎるが、${gold_shp.name} は突然、${you.name} に心理テストをやりたくなったらしい。`,
      );
      await era.printAndWait(
        `事の発端が突然なので、${you.name} にも突然断る権利はない！ 覚悟を決めて、突然受け入れろ！`,
      );

      era.printButton('「なんだこれ！？」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `そういうこと、問題は上に書くからな～${callname} はホワイトボードを見てくれよ～`,
      );
      await gold_shp.say_and_wait(
        '一問目は超定番！ 誰もが一度は聞かれるやつ！',
      );
      await gold_shp.say_and_wait(
        'お前なら【チョコ味の○○】と【○○味のチョコ】、どっちを選ぶ？',
      );

      era.printButton('「チョコ味の○○……」', 1);
      era.printButton('「○○味のチョコ……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '出題者のアタシでも【別のもの食べる】！ 次！',
      );
      await gold_shp.say_and_wait('二問目！ 見ろ！');
      await gold_shp.say_and_wait(
        'お前なら【馬跳びの中身を家族に誤送信】と【馬跳びの中身を担当ウマ娘に誤送信】、どっちを選ぶ？',
      );

      era.printButton('「馬跳びの中身を家族に誤送信……」', 1);
      era.printButton('「馬跳びの中身を担当ウマ娘に誤送信……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '人に知られたくなければ【己が為さざるに如かず】！ 次！',
      );
      await gold_shp.say_and_wait('三問目から、ちょっと意地悪になるぜ！');
      await gold_shp.say_and_wait(
        '彼女と飲んでるとき、彼女が三人目を呼ぼうとする！',
      );
      await gold_shp.say_and_wait(
        'お前なら【お前の元カノを呼ぶ】と【彼女の元カレを呼ぶ】、どっちを選ぶ？',
      );

      era.printButton('「お前の元カノを呼ぶ……」', 1);
      era.printButton('「彼女の元カレを呼ぶ……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('なんか【むかつく】な！ 次！');
      await gold_shp.say_and_wait('四問目！ けっこうやるやつ多そう！');
      await gold_shp.say_and_wait('お前はウマ娘チームのリーダーだ！');
      await gold_shp.say_and_wait(
        'お前なら【いつでも隊員と馬跳びしたい】と【いつでも隊員がお前と馬跳びしたがる】、どっちを選ぶ？',
      );

      era.printButton('「いつでも隊員と馬跳びしたい……」', 1);
      era.printButton('「いつでも隊員がお前と馬跳びしたがる……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '大スケベだな～でも時には【我慢も大事】だぜ？',
      );
      await gold_shp.say_and_wait('五問目！ 命に関わる事件発生！');
      await gold_shp.say_and_wait(
        'おっと！ お前、お前の彼女、お前の親友の三人が攫われた！ 誘拐犯は悪趣味で、一人を殺せ、残った一人とお前の命を助ける、と要求してきた！',
      );
      await gold_shp.say_and_wait(
        'お前なら【生死を共にした親友を殺す】と【お前のために死んでもいい彼女を殺す】、どっちを選ぶ？',
      );

      era.printButton('「生死を共にした親友を殺す……」', 1);
      era.printButton('「お前のために死んでもいい彼女を殺す……」', 2);
      await era.input();

      await era.printAndWait(
        '……ドラムもない。妙に茶目っ気のあるBGMもない。どこからともなく流れる缶笑いもない。',
      );
      await era.printAndWait('すべてが、突然止まった。');
      await era.printAndWait(
        `${gold_shp.name} の表情は異様なほど静かで、${gold_shp.sex}の目から光が消え、まっすぐ ${you.name} の顔に釘付けになっている。`,
      );
      era.println();

      await gold_shp.say_and_wait(
        'この問題は重要です。どうか、よく考えてからお答えください。',
      );
      era.println();

      era.printButton('「生死を共にした親友を殺す……」', 1);
      era.printButton('「お前のために死んでもいい彼女を殺す……」', 2);
      await era.input();

      await gold_shp.say_and_wait(
        'この問題は重要です。どうか、よく考えてからお答えください。',
      );
      era.println();

      await era.printAndWait(`${gold_shp.sex}は、そう言った。`);
      const buffer = [
        {
          accelerator: 1,
          config: { disableWarning: true },
          content: '「生死を共にした親友を殺す……」',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { disableWarning: true },
          content: '「お前のために死んでもいい彼女を殺す……」',
          type: 'button',
        },
      ];
      era.printInColRows(buffer);
      setTimeout(() => {
        if (ret.length < 5) {
          buffer.push({
            accelerator: 3,
            config: { disableWarning: true },
            content: '「どっちも選ばねえ……！」',
            type: 'button',
          });
          era.replaceInColRows(buffer);
        }
      }, 10000);
      ret.push(await era.input());
      era.println();

      await era.printAndWait(
        `${gold_shp.name} はいつもの顔に戻り、にやにやしながら音楽を流し始めた。`,
      );
      era.println();
      await gold_shp.say_and_wait(`ふふ～お疲れ ${callname}～`);
      if (ret.at(-1) === 3) {
        await gold_shp.say_and_wait(
          `ん～${callname} はいい子だな。担当ウマ娘と馬跳びしたがるのは、まあちょっとアレだけど。`,
        );
        await gold_shp.say_and_wait(
          '……それがアタシの出した問題だって？ じゃあなんで三番目を選ばねえんだよ。',
        );
        await gold_shp.say_and_wait(
          'そうだ、チョコ食うか？ 安心しろ、仕込んでねえし味も普通だぜ。',
        );
        era.println();
        await era.printAndWait([
          'トレーナー室で笑い合うこの景色は、きっとこの先もなくならない。',
        ]);
      } else {
        era.println();
        await era.printAndWait(
          `${gold_shp.sex} は風のように来て、風のように去った。${you.name} は結局、心理テストの結果を聞けなかった。`,
        );
      }
      era.println();
      if (ret[3] === 1) {
        era.print([
          gold_shp.get_colored_name(),
          ' は',
          { color: buff_colors[2], content: ' [罵倒好き] ' },
          'と',
          { color: buff_colors[2], content: ' [苦痛好き] ' },
          'になった！',
        ]);
      } else {
        era.print([
          gold_shp.get_colored_name(),
          ' は',
          { color: buff_colors[2], content: ' [ドS] ' },
          'になった！',
        ]);
      }
      if (ret[1] === 2) {
        era.print([
          gold_shp.get_colored_name(),
          ' はいま、少し',
          { color: buff_colors[2], content: ' [焦り] ' },
          '！',
        ]);
      }
      return ret;
    };
    f.title = [
      {
        color: gold_color,
        content: '突撃！ゴールドシップの超残酷二択クイズ！～生き残れるかな？～',
      },
    ];
    return f;
  })(),
};
