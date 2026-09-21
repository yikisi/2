/**
 * @file トウカイテイオー - 育成 - 脚部負傷ルート
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ws_95_14_h: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `登壇の直前、${you.name} はまたテイオーの毛並みを整える。`,
      );
      await era.printAndWait(
        `今日はすでに何度も似た動作を繰り返しているが、ふたりとも黙契のうちに口にしない。心を梳くやり方なのかもしれない。`,
      );
      await era.printAndWait(
        '場へ踏み込み、遠くから来た大勢のファンを前に、テイオーはまたいつものように自信の顔を見せる。即興の帝王舞歩・改が、現場の空気を極限まで盛り上げる。',
      );
      await era.printAndWait(
        `${you.name} は幕の陰へ隠れ、近づくレースを考える。`,
      );
      await era.printAndWait(
        `テイオーの今日の走りが優れているほど、${you.name} の頭のなかの警報は大きくなる……`,
      );
    };
    f.title = title;
    return f;
  })(),
  bs_broken: (() => {
    const title = '折れた翼';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {TextContent} leg_hurt_notification 脚の怪我の通知
     */
    const f = async (teio, you, leg_hurt_notification) => {
      await era.printAndWait(
        `医師の存在は命を救い傷を癒すためであり、大切な人は必ずよくなる——病室の扉の前に立つ人は、しばしばそう思う。だがその思いの何割が真実で、何割が自己慰めか。救えるなら、医師がいてもこの世から死傷は消えない。医師が足りないのか、尽くしていないのか。いや……あるいは、自分の運が悪いだけなのか。`,
      );
      era.println();
      await era.printAndWait(
        `そう考えながら、${you.name} は無意識に利き手で額を支え、白い上着の中年男をぼんやり見る。彼の唇が動いている——話している？何か言っているのか。遊んでいる手に毛の感触が伝わる。いや、いつもの、丁寧に整えた滑らかな尻尾ではない。内側から逆立ったように炸裂し、掌がむず痒い。${you.name} は笑いそうになる。この子は、走って自分をこんなにして……あとでしっかり——`,
      );
      await era.printAndWait(
        `${you.name} は振り返り、努めて微笑んで担当を見る。それからその生気のない両目が、${you.name} の思考を現実へ引き戻す。`,
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '主治医',
        `${teio.actual_name_with_title}、そして ${you.actual_name_with_title}、${teio.sex}のトレーナー。もう一度強調する。この先、走ることを諦める覚悟をしてほしい。`,
      );
      era.println();
      await era.printAndWait(
        '——どんな逃避も、結局は現実の車輪には勝てない。現実は眼前にあり、受け入れる以外に道はない。',
      );
      era.println();
      await era.printAndWait(
        `${you.name} は主治医が金属の細い杖を取り出し、また画面の写真を指し示すのを見る。以前、受け入れたくなくて自ら遮断した記憶と、今の映像が重なる。${you.name} は彼が何を言ったか、すべてわかっている。「膝蓋骨脱臼」「習慣性骨折」「亀裂」「下腿」……そうだ、どの場所も ${you.name} は知っている。どの状況も ${you.name} はわかっている。`,
      );
      era.println();
      await era.printAndWait(
        `それでも、こういうことが起きた。${you.name} は感情を抑え、自分をその場に押しとどめる。`,
      );
      await era.printAndWait('尻尾が動く。離れようとするように。');
      await you.say_and_wait(
        '自分に失望したか。構わない。トレーナーとしての職務怠慢だ',
        true,
      );
      await era.printAndWait(
        `${you.name} はそう思い、自ら手を少し引く……失敗する。`,
      );
      era.println();
      await era.printAndWait(
        `力に似合わない小さな手が ${you.name} の掌のうえに置かれ、続いて下から握るもう一方。温かさが伝わり、同時に軽い震えも。子供が親しい人の裾を掴むように、${teio.name} は ${you.name} の手を引く。${you.name} は長く息を吐き、${teio.sex}を握り返し、もう放さない。`,
      );
      era.println();
      if (era.get('talent:3:身体素质') === 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          ' はもう [頑健] ではない！】',
        ]);
      }
      if (era.get('talent:3:自信程度') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          ' は [自信がない] になった！】',
        ]);
      }
      if (era.get('talent:3:淫乱') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          ' は ',
          {
            color: buff_colors[2],
            content: '[淫乱]',
          },
          ' になった！】',
        ]);
      }
      era.print(leg_hurt_notification);
    };
    f.title = title;
    return f;
  })(),
  ws_95_17_h: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} はネクタイを整え、最後に鏡で自分を眺める。`,
      );
      await era.printAndWait('——うん、言うことはない。');
      await era.printAndWait('もう、することもない。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は腕時計を見る。時間は逼迫しており、自分を説得して先延ばしする余裕はない。',
      ]);
      await era.printAndWait('深く息を吸い、努めて力を抜く。');
      await era.printAndWait(
        `${you.name} は洗面所を出て、自分の破滅へ向かう。`,
      );
      era.println();
      await era.printAndWait(
        `この記者会見に、${you.name} はテイオーを連れていない。対外的には治療と静養が必要だと言っているが、${you.name} も${teio.sex}のこの状態での出席は百害あって一利なしだと思っている。悪いことに——こうなると、${you.name} がすべてを背負う。`,
      );
      await era.printAndWait(
        `だが ${you.name} には、その心の準備はとっくにあったはずだ。そうだろう。`,
      );
      era.println();
      await era.printAndWait(
        `会場へ着き、無数の照明とレンズの前で、牙の鋭い記者に応じ、${you.name} は生涯の力を使い、落ち着いて理のある答えを目指す。汗は下着まで湿らせているが、なんとか乗り切ろうとしている。トレセンの研修に感謝、と ${you.name} は密かに思いながら、難しい質問に集中する。そして本当に致命的な問いが、ついに——`,
      );
      era.println();
      await era.printAndWait(
        `記者A「お聞きします。専門家の分析では、トウカイテイオーの傷は${teio.sex}独自の走法に由来すると。あなたは${teio.sex}のトレーナーとして、その事情を知らないはずがない。つまり、問題を知りながら${teio.sex}を出走させ、今日の惨劇を招いた、ということでしょうか？」`,
      );
      era.println();
      await era.printAndWait('——来た。');
      await era.printAndWait('慎重でなければならない。');
      await era.printAndWait(
        `この答えは、${you.name} のキャリアに関わりうる。`,
      );
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton(
        `「十分には把握していなかった。トウカイテイオーが出走を求め、自分は担当の考えに従っただけだ」`,
        1,
      );
      era.printButton(
        `「自分は${teio.sex}のトレーナーだ。すべての責任は自分が負う」`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `群衆がしばらく囁き合ってから静まる。${you.name} は彼らがどう反応するかわかっているが、もう関心はない。`,
        );
      } else {
        await era.printAndWait('場がどよめく。');
        await era.printAndWait(
          'だが、この爆発のような言葉を言い切れば、あとに応えるものはもうほとんどない。',
        );
        await era.printAndWait('ようやく、終わりまで耐えた。');
        await era.printAndWait(
          `照明が下り、記者とカメラマンは質問を終えて徐々に散る。最後に舞台上に ${you.name} ひとりが残る。${you.name} が長く息を吐いて去ろうとしたとき——`,
        );
        era.println();
        await era.printAndWait('ファンA「なんで……」');
        era.println();
        await era.printAndWait(`${you.name} は訝しげに顔を上げる。`);
        era.println();
        await era.printAndWait('ファンB「くそ……」');
        era.println();
        await era.printAndWait(
          `見知らぬ二人が突然室内に現れる。人波が散ったあと、滑り込んだのだろう。`,
        );
        era.println();
        await era.printAndWait(`ファンA「あなたが${teio.sex}を壊した！」`);
        era.println();
        await era.printAndWait(
          `ファンB「自分の成績だけ追いかけて、${teio.uma_sex_title}を顧みない態度のせいだ。トウカイテイオーを今の姿にしたのはあなただ！」`,
        );
        era.println();
        await era.printAndWait(
          `ファンA「それでトレーナーを名乗るあなたは……尻を払って去れる！責任を負うと言っても、人前で数言って頭を下げて謝るだけ。風が過ぎれば新しい苗と契約すればいい！元の${teio.uma_sex_title}の一生は、もう壊れてるんだぞ！」`,
        );
        era.println();
        await era.printAndWait(
          `ふたりが近づき、怒りを込めて ${you.name} を睨む。${you.name} は彼らと目を合わせるが、言葉が出ない。`,
        );
        await era.printAndWait(
          '彼らの目にあるのは、怒りと恨みのほかに、空洞だ。',
        );
        await era.printAndWait('夢を失った目だ。');
        await era.printAndWait(`——${you.name} が売っていたのは夢だ。`);
        await era.printAndWait(
          `——${you.name} は、夢を与えてくれた者を殺した。`,
        );
        await era.printAndWait(
          '三対の目が、それぞれ感情を胸に隠し、睨み合う。',
        );
        era.printButton(`「責任は取る」`, 1);
        await era.input();
        await you.say_and_wait(
          `${teio.sex}が再起する日……見てもらえる。${teio.sex}は、まだテイオーだ。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_17_h: (() => {
    const title = '頼り';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('雨の夜、静寂で音がない。');
      await era.printAndWait(
        `${you.name} はひとり寮で画面の資料を見つめ、気ままにメモを取り、担当${teio.uma_sex_title}の次の段階の計画を直している。実は、この仕事はとっくに終わっている。なぜか ${you.name} は仕事を深夜まで引き伸ばしている。胸の鬱を和らげるためか。機械的な労働で現実から逃げるためか。`,
      );
      await era.printAndWait(
        `鍵盤を叩く音が次第に苛立たしくなり、鼓膜から脳へ流れ込む。${you.name} はぱちりと画面を閉じ、両手でこめかみを軽く揉み、目を閉じ、深く息を吸い、長く吐く。`,
      );
      await era.printAndWait('……音は止まっていない。');
      await era.printAndWait(
        `${you.name} は一瞬呆け、それから素早く入口へ走り、覗き穴を一瞥して扉を開ける。チャイムの余韻が響き、扉が開く。深い闇の真ん中に、全身びしょ濡れの${teio.uma_sex_title}が ${you.name} の前に立っている。雨がレインコートを伝い、長く跳ねた白い前髪が雫の重みで鼻筋へ伏せ、軽く払われる。${teio.sex}がフードを上げる動作とともに、${you.name} は暗い青い両目を見る。`,
      );
      await era.printAndWait(
        `この瞬間、${you.name} は根拠のない確信を抱く——今夜はずっと${teio.sex}のことを考え、${teio.sex}を待っていたのだ、と。`,
      );
      await era.printAndWait(
        `胸の重荷が下りた安堵と、わずかな苛立ちとともに、${you.name} は一言も発せず、身を引いて${teio.sex}を中へ招く。`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}は一言も発さずソファに座り、${you.name} が湯気の立つタオルを頭へかけて撫でるのに身を任せる。${you.name} は何度か口を開こうとして、囁くような呟きしか出せず、諦める。人とウマが、妙な沈黙に沈む。`,
      );
      await era.printAndWait(
        `たとえ ${you.name} がトレーナーでなくても、${teio.uma_sex_title}${teio.teen_sex_title}が崩壊の縁にいることは一目でわかる。`,
      );
      await era.printAndWait(
        `${teio.sex}は生気なくそこに座り、両手を合わせる。祈りではなく、頼りを求めるように額を両手へ寄せている。この${teio.teen_sex_title}は、静かな闇に閉じこもり、あらゆる光と音を拒んでいるようで、${you.name} は${teio.sex}が本当にここにいるのか心配になる。`,
      );
      await era.printAndWait(`——うん、${teio.sex}は確かにいる。`);
      await era.printAndWait(
        `腰に伝わる感触が${teio.sex}の存在を現実に固定する。一本の尻尾がそっと、慎重に ${you.name} へ絡み、溺れる者が唯一の救命索を掴むように、${you.name} の体を強く巻く。`,
      );
      era.printButton('「テイオー……」', 1);
      await era.input();
      await era.printAndWait(
        `声はない。${teio.teen_sex_title}の微かな震えだけが、${you.name} に応えているようだ。`,
      );
      era.println();

      await you.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}のこんな顔は見たことがない。普段は滑らかに整った毛並みが乱れ、両目は生気なく暗く、いっそう小さく見える体が呼吸と脈とともに揺れる。${you.name} はもう一度${teio.sex}の名を呼ぶ。さっきより少し大きく、だが響きすぎないように。今度は返事がある。突然。${teio.name}は勢いよく顔を上げて ${you.name} を見つめ、確かめるように瞬きする。`,
      );
      await era.printAndWait('それから、飛びついてくる。');
      await era.printAndWait(`小さな体が ${you.name} の懐へ収まる。`);
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `嗚咽はない。涙もない。だが明らかに${teio.sex}はその衝動に抗っている。`,
      );
      await era.printAndWait(
        `精神がわずかでも譲れば、${teio.sex}に残った抵抗は消えるだろう。${teio.teen_sex_title}は泣き始め、止めどなく泣き続けるだろう。`,
      );
      await era.printAndWait(
        `それは ${teio.name} という${teio.uma_sex_title}の崩壊を意味する。`,
      );
      await era.printAndWait(
        '常識で言えば、心が傷めば、大いに泣いてもいい。確かにそうだ。涙には偉大な効能があり、悩みを洗い流し、どんな大きな痛みも和らげる。',
      );
      await era.printAndWait('泣いたあと、人は再び現実と向き合う活力を得る。');
      await era.printAndWait(
        `だが——${teio.name}という${teio.uma_sex_title}にとって、今はそれすら取れない手だ。`,
      );
      await era.printAndWait(
        `ここで ${you.name} に凭れて泣くのは、責任からの逃避ではないか。`,
      );
      await era.printAndWait(
        `デビュー時からクラシック三冠を掲げ、比類ない目標を立てた${teio.uma_sex_title}が、自ら編み、自分にいちばん合うと思い、天賦を組み合わせた走法で倒れた。最後は自分の我儘で、信頼するトレーナー（${you.name}）に責任まで負わせた。この状況で、泣く顔があるか。${you.name} のそばで感情を吐き、また ${you.name} に${teio.sex}を支えてもらうのか。`,
      );
      await era.printAndWait(
        `今ここで涙を流し、すべてから逃げるのが、${teio.name}にとって幸福なのかもしれない。だがそうなれば、粘り強く、自信を持って世に存在を示したあの${teio.uma_sex_title}は、負けて退場する。`,
      );
      await era.printAndWait(
        `だから${teio.teen_sex_title}は ${you.name} の懐に凭れ、唇を噛み、目を強く閉じ、どこか滑稽に体を震わせている。`,
      );
      await era.printAndWait(
        `${you.name} は優しく${teio.uma_sex_title}の背を撫で、${teio.sex}を落ち着かせようとする。`,
      );
      await era.printAndWait(
        `温度がふたりのあいだで移る。小さな太陽のように ${you.name} の心身を温めていた担当が、今は逆に ${you.name} に温められている。`,
      );
      era.println();
      await teio.say_and_wait('……トレーナー。');
      era.println();
      await era.printAndWait(
        `${you.name} は指で習慣のように、ゆっくり${teio.sex}の毛並みを整え、無意識にうん、と応える。`,
      );
      era.println();
      await teio.say_and_wait(
        'ボク……何を言えばいいか、どうすればいいか、もうわからない。',
      );
      await era.printAndWait(`${you.name} は沈黙で応え、手の動きが遅くなる。`);
      era.println();
      await teio.say_and_wait('今のボクに残ってるの……キミだけだよ。');
      era.println();
      await era.printAndWait(
        `誇りにしていた両脚も、夢を背負った双翼も、すべて${teio.teen_sex_title}の体から消えた。`,
      );
      era.println();
      await teio.say_and_wait('ほしい。キミの、その心の力。');
      era.println();
      await you.say_and_wait('そんなものは、やる。');
      era.println();
      await teio.say_and_wait('じゃあ……ボクのも、受け取って。');
      era.println();
      await era.printAndWait(
        `細い指が慎重に ${you.name} の襟へ入り、鎖骨を伝って胸へ下り、${you.name} は肌がすっと縮むのを感じる。`,
      );
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton(`${teio.sex}を押し、立ち上がる。`, 1);
      era.printButton('頷く。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は${teio.sex}の両肩を支え、体で答えを示す。それからタクシーを呼び、${teio.sex}を学園まで送り、道中は無言だった——あるいは ${you.name} が${teio.sex}の顔と向き合えなかっただけだ。`,
        );
      } else {
        await era.printAndWait(
          `躊躇。${teio.sex}が指す言外の意味に、${you.name} は単純な喜びを感じる。興奮も。`,
        );
        await era.printAndWait(
          `だが、このうねりに体を預けていいのか。それで本当にこの${teio.teen_sex_title}を救えるのか。`,
        );
        await era.printAndWait(
          `——そうは言っても、${you.name} はすでにすべてを${teio.sex}自身の決断に委ねると決めたのではなかったか。`,
        );
        await era.printAndWait(
          `その決断が${teio.sex}のものであるなら、${you.name} がすべきは——${teio.sex}の決断を尊重することだけだろう。`,
        );
        era.println();

        await you.say_and_wait(
          '自分は、そんなに優しい人間ではないかもしれない',
        );
        era.println();

        await teio.say_and_wait('大丈夫……ボク、んっ！');
        era.println();
        await era.printAndWait(
          `${you.name} は${teio.sex}の顎を上げ、${teio.sex}の唇に口づける。礼儀というより、${teio.sex}の気持ちを少し和らげるためだ。`,
        );
        await era.printAndWait(
          `だがその仕草は、${you.name} の奥に潜んでいたものを解放する。`,
        );
        await era.printAndWait(
          `熱く柔らかい感触で、${you.name} は${teio.uma_sex_title}の味を知る。そうだ、人に貪られるために生まれた生き物だ。耽溺させる魅惑が ${you.name} の欲を引き出す。`,
        );
        await era.printAndWait(
          `${teio.sex}を下に押し、体を支配したい衝動——抗えない波がこの瞬間に沸き、心臓から四肢の末端まで走る。`,
        );
        await era.printAndWait('精神の一部が、獣へ変じている。');
        await era.printAndWait(
          `${you.name} の変化を感じたのか、腕のなかの${teio.name}が震える。構わず、${you.name} は始めた動作を続ける——舌を伸ばして${teio.teen_sex_title}の唇を開き、侵入する。`,
        );
        await era.printAndWait(
          `滑らかな歯から弾力のある歯茎まで舐める。舌が${teio.teen_sex_title}の上唇を巻き、内側を舐る。`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}への正しい扱いとは言い難い。だがそうしたい衝動は抑えられない。`,
        );
        await era.printAndWait(
          `${teio.name}はきっと怯えているだろう。だが${teio.sex}は従順だ。逆らわず、躱さず、素直に体を ${you.name} へ預ける。`,
        );
        await era.printAndWait(
          `その態度が、さらに ${you.name} の獣性を燃やす。`,
        );
        await era.printAndWait(
          `${you.name} は顔を寄せ、担当と唇と舌を合わせ、体液が双方の口で翻る。口腔を容赦なく侵された小さなウマは、震えながらも負けを認めず柔舌を伸ばし、侵入者である ${you.name} に絡む。`,
        );
        await era.printAndWait('血が沸騰する。脳は考える機能を失う。');
        await era.printAndWait(
          `${teio.teen_sex_title}の薄い舌は為す術なく弄ばれる。過剰な暴虐に瞳が涙を含み——雫が密着した唇へ落ち、予期せぬ粗暴な扱いを受けた事実を伝える。`,
        );
        era.println();

        await era.printAndWait('——ひどく甘い。');
        await era.printAndWait(`${you.name} の奥が、満足の咆哮を上げる。`);
        await era.printAndWait(`${teio.sex_slave_title}一匹にすぎない。`);
        await era.printAndWait(
          `その念が出た瞬間、${you.name} に残っていた「教師としての体裁」はさらに見当たらなくなる。`,
        );
        await era.printAndWait(
          `唇が一定のリズムで吸い、肉と肉の狭い隙間から湧く液体を啜る。淫らな音が響く。力を失い、${you.name} に半分抱えられた${teio.teen_sex_title}の体が、いきなり熱を帯びる——羞恥のせいだろう。`,
        );
        await era.printAndWait(`それがさらに ${you.name} の欲を煽る。`);
        await era.printAndWait(
          `${you.name} は口腔を独占し続け、${teio.name}の口が渇くまで。いや、まだ足りない。`,
        );
        await era.printAndWait(
          `${you.name} は${teio.teen_sex_title}の舌に絡み、自分の口へ虜にする。軽く噛み、獲物の動きを封じる。`,
        );
        await era.printAndWait(
          `自分をどう扱うのか。${teio.sex}は硬直した体を縮め、${you.name} へ無声の問いを投げる。`,
        );
        await era.printAndWait('——ふふ。');
        await era.printAndWait('言うまでもないだろう。');
        await era.printAndWait(
          `衝動は止まない。止まるはずもない。最後の飾りのように、${you.name} は舌先で粘く ${teio.name}の舌の内側——その細く柔らかい領地——を擦る。`,
        );
        era.println();

        await teio.say_and_wait(`——んあっ！`);
        era.println();

        await era.printAndWait(
          `この秘所まで略奪されたと気づき、${teio.teen_sex_title}は慌てる。${teio.sex}は為す術なく、無意識に抜け出そうとするが、${you.name} が両腕を強く閉じ、抗うなという意思を込めれば、${teio.sex}は静かになる……両目に怯え、困惑、だがそれらに構っていられない表情が映る。`,
        );
        await era.printAndWait(
          '普段は一本気で子供っぽい担当が、今は壊れそうなほど柔らかい塊に縮んでいる。',
        );
        era.println();

        await you.say_and_wait('キミにも、そんな目があるんだな！', true);
        era.println();

        await era.printAndWait(
          `内心の声が上がる。こう強制的にひとりの${teio.uma_sex_title}を征服することが、${you.name} を陶然とさせる。${you.name} は我を忘れて、口のなかの自分だけのものになった柔らかさを吸い、${teio.sex}の体液を搾り、収奪する。`,
        );
        await you.say_and_wait(
          'キミのせいだ。自分たちを今の姿にしたのは。',
          true,
        );
        await you.say_and_wait(
          'キミの我儘と、自分の甘やかしが、この惨めな結末を招いた。',
          true,
        );
        await you.say_and_wait('だから、代償は回収する。', true);
        await era.printAndWait(
          `${teio.name}が ${you.name} の背に回した手は力なく撫でる。指先が、抵抗なく許しを請うだけだ。`,
        );
        await era.printAndWait('構わない。');
        await era.printAndWait(
          `突然、${teio.teen_sex_title}が激しく震える。肌が熱に浮かされたように灼ける。`,
        );
        await era.printAndWait(
          `${you.name} の手のなかで、強制的に挑まれた反応だ。`,
        );
        await era.printAndWait(`……絶頂したのだろう。`);
        await era.printAndWait(
          `その極めて卑俗な言葉が、${you.name} の胸で低く響く。`,
        );
        await era.printAndWait(`続ける。まだ遠く足りない。`);
        await era.printAndWait(
          `${teio.name}もそう思っているはずだ。衣がすべて落ちる前に止められるのは、${teio.sex}の望むところではない。`,
        );
        await era.printAndWait(
          `${teio.sex}は ${you.name} にこうしてほしいと言った。${you.name} が今しているのは、自分の欲を満たすのでも感情を晴らすのでもなく、${teio.teen_sex_title}の気持ちに従っているだけだ。`,
        );
        await era.printAndWait('なら、次の段へ進もう。');
        await era.printAndWait(
          `${teio.teen_sex_title}の視線は散って定まらず、${you.name} は${teio.sex}の注視のなか、両手を${teio.sex}の衣へ伸ばす。`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}の体はすでに充分熱く、往時のようだ。`,
        );
        await you.say_and_wait(`${teio.name}——やはり、そういう女だ！`, true);
        await era.printAndWait(
          `頭のなかが黒いもので埋まり、${you.name} は口を歪めて${teio.sex}の肌に触れる。舌を伸ばす。口づけを${teio.sex}の首筋に置き、汗を吸う。勢いで肌を舐め、柔らかな肉を吸い——醜い痕を残す。`,
        );
        era.println();
        await teio.say_and_wait('ああ……');
        era.println();
        await era.printAndWait(
          `また小さな略奪を受け、${teio.teen_sex_title}は夢うつつに呻く。`,
        );
        await era.printAndWait(
          `普段あれほど誇り高く固執し、レース場で舞い上がるウマ——所詮はこういう${teio.phy_sex_title}だ！`,
        );
        await era.printAndWait(
          `${you.name} を苦しめた小さなものが、今は甘く柔らかい贄の子羊として ${you.name} の前に並んでいる！`,
        );
        await era.printAndWait(
          `${you.name} が抑えきれない内心の一角がどれほど醜くても……${teio.sex}に責任は一片もないのか！影は太陽の下に現れる。それが真理ではないのか！`,
        );
        await era.printAndWait(
          `${you.name} は手を白い肌のうえを走らせる。大きくはない胸の隆起を覆う。`,
        );
        await era.printAndWait(
          '掌をそのうえに置き、軽く弄る。指の腹で桃色の突起を撫でる。',
        );
        await era.printAndWait(
          `${teio.teen_sex_title}は焦れて体をよじる。これは絶対に ${you.name} を誘っている。${you.name} はそう思い、${teio.teen_sex_title}の患部を避け、${teio.sex}のまだ育ちきっていない尻を擦り、他の部位へ手を伸ばして力を加える。予告なく、まだ硬い小さな丘を残酷に蹂躙し始める。`,
        );
        era.println();
        await teio.say_and_wait('やっ……');
        era.println();
        await era.printAndWait(
          `${teio.name}が小さく驚く。当然だ。${teio.name}の体は、この扱いをこなすほど熟練していない。`,
        );
        await era.printAndWait(
          `${you.name} は知りつつ、わざとやる。この悲痛を求めて、こうしている。`,
        );
        await era.printAndWait(
          `だから続ける。徹底して粗く、${teio.teen_sex_title}の第二の秘所を揉む。欲が高まり、胸のうえは油を塗ったように艶めき、${teio.sex}のちょうどいい寸法と相まって、火加減のいい目玉焼きのように誘う。`,
        );
        await era.printAndWait(
          `${you.name} は唇をもう一方の隆起へ移し、吸い、また猥褻な痕を残す。`,
        );
        await era.printAndWait(
          `${teio.name}が楚々と ${you.name} を見る。瞬間、血が逆流する。`,
        );
        await era.printAndWait(
          `暗い面が、抵抗しないこの${teio.teen_sex_title}を前に極限まで発揮する。`,
        );
        await era.printAndWait(
          `うん、きっと${teio.sex}はわざと ${you.name} の情熱を煽っている。完璧な小さな雌獣だ。`,
        );
        await era.printAndWait('では……本題へ入ろう。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async we_95_17_h_sex_end(teio, you) {
    era.printButton('「すまない」', 1);
    await era.input();

    await teio.say_and_wait('んぅん——！');
    era.println();
    await era.printAndWait(
      `結局、${you.name} はまる四時間自分を抑えられず、少しやりすぎた。`,
    );
    await era.printAndWait(
      `${you.name} の絶え間ない謝罪と保証のなか、小さな${teio.uma_sex_title}はようやく ${you.name} の詫びを受け入れ、ベッドで眠る。`,
    );
    await era.printAndWait(`${you.name} も身支度して、服のまま横になる。`);
    await era.printAndWait(
      `目を閉じたとき、何かが寄ってきて ${you.name} の体に貼りつく気がした。`,
    );
  },
  ws_95_19_h: (() => {
    const title = '交渉';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} abandon_disabled テイオーと関係を持ったあとなら捨てられない
     */
    const f = async (teio, you, abandon_disabled) => {
      await you.say_and_wait('今度は何だ……');
      await era.printAndWait(
        `${you.name} は見知らぬ部屋を見つめ、一瞬迷ってから扉を叩く。すぐに開き、${you.name} は中へ入る。`,
      );
      era.println();
      await era.printAndWait(
        `天皇賞（春）のあと、${you.name} は学園の管理側に呼ばれて単独で会議を開き、一線を退いたベテラントレーナーの先輩に指導を受けるよう言われた。そのトレーナーは業界で名高く、無数の${teio.uma_sex_title}を指導してきた。${you.name} が学生のころ、一学期だけその生徒になったこともある。${you.name} に断る理由はなく、今日ここに来た。`,
      );
      era.println();
      await era.printAndWait(
        `中年の婦人が椅子に端座して ${you.name} を待っている。卓上には資料があり、${you.name} は礼をして座り、ついでに卓面を一瞥する。案の定、契約関係の書類だ。`,
      );
      era.println();
      await era.printAndWait(
        `中年婦人「${you.actual_name}ね？覚えているわ。もう少し名の知れたトレーナーになったのね」`,
      );
      era.println();
      await era.printAndWait(`${you.name} は頷き、返事とする。`);
      era.println();
      await era.printAndWait(
        `中年婦人「今日は学園からの依頼で、あなたと、担当の${teio.uma_sex_title} ${teio.name} について話に来たの」`,
      );
      era.println();
      await era.printAndWait(
        `${teio.sex}の名を聞き、${you.name} は覚悟していたのに胸が沈む。ついに来たか——と ${you.name} は思う。`,
      );
      era.println();
      await era.printAndWait(
        `中年婦人「単刀直入に言うわ——あなたは${teio.uma_sex_title}の考えに従ったから今日の敗北になったのでしょう？過ちはあなたにない。そしてトレーナーにとって、目標を実現する機会はいくらでもある。一度の育成の失敗なら、契約を解いて新しい${teio.uma_sex_title}と結べばいい。今日、その選択を渡す——今の担当と解約しなさい。あなたは今後も優秀な子と契約できるし、元の担当も最善の世話を受けると保証する」`,
      );
      await era.printAndWait(
        `${you.name} は何を聞くかの心の準備はしていたが、それでも愕然とする。`,
      );
      era.println();
      await era.printAndWait(
        '中年婦人「あなたには見込みがある——ここで潰すのは惜しいわ。自分の前途を考えなさい。一本の木に縛られてはだめ」',
      );
      era.println();
      await era.printAndWait(`${you.name} の返答は——`);
      era.printButton('「……あなたの見方に同意します」', 1, {
        disabled: abandon_disabled,
      });
      era.print(
        '【これを選ぶと、すべてが取り返しつかない！セーブを確認せよ！】',
        {
          offset: 1,
          width: 23,
          color: buff_colors[3],
        },
      );
      era.printButton('「いいえ」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は黙って解約書に自分の名を記し、夢遊のように手続きを済ませ、部屋を出る。歩くほど速くなり、${you.name} の感情はもう安定せず、ついに通行人の驚く視線のなか、叫びながら家へ逃げるように走る。`,
        );
        await era.printAndWait(
          `${you.name} にはもう ${teio.name} に会う勇気がなかった。${teio.sex}と ${you.name} の人生は、ここで分かれる。`,
        );
      } else {
        await era.printAndWait(`${you.name} は自分の声が室内に響くのを聞く。`);
        era.println();
        await you.say_and_wait(
          `おっしゃるとおりです……トレーナーにとって、機会はまだ多い。自分の前途のためなら、失敗した担当を早めに諦め、別の${teio.sex}を選ぶほうが……`,
        );
        era.println();
        await era.printAndWait(
          `中年婦人は椅子に端座し、目を細めて ${you.name} の返答を聞く。`,
        );
        era.println();
        await you.say_and_wait(
          '未来のない生徒に固執することが、双方にとってよくないとわかっています。職業上の妥協も理解しています。',
        );
        era.println();
        await you.say_and_wait(
          'だが本当にその言葉を聞き、自分の口で一度復唱してみると……受け入れられない。',
        );
        era.println();
        era.printButton('「ですから、お断りします」', 1);
        await era.input();
        await you.say_and_wait(
          `トレセンのトレーナー制度は、${teio.uma_sex_title}の成長を支える欠かせない部分です。トレーナーの務めは、担当の${teio.uma_sex_title}に責任を負うことです。`,
        );
        era.println();
        era.printButton(
          `${teio.name} の専属トレーナーとして、なすべきことをする。`,
          1,
        );
        await era.input();
        await era.printAndWait('中年婦人「いい子ね」');
        await era.printAndWait('中年婦人が微笑む。');
        await era.printAndWait(
          `彼女は手を上げて卓上の書類を収め、また ${you.name} へ微笑む。`,
        );
        era.println();
        await era.printAndWait(
          '中年婦人「険しい道よ。でもそれを選んだのは立派だわ。頑張って。祝福する——できる限りの助けもする」',
        );
        era.println();
        await era.printAndWait(
          `${you.name} は部屋を出される。霧のなかにいるような気もするが、${you.name} の胸の底では信念が固まった——${teio.name} の夢を、${teio.sex}が実現するのを助ける、と。`,
        );
        era.println();
        await era.printAndWait(
          `あとになってなぜか、${you.name} についての陰口は減り、トレセン側も ${you.name} へいくらかの支援を出した。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_20_h: (() => {
    const title = '回帰';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('はあ……');
      era.println();

      await teio.print_and_wait(
        `トレーニングのあと、${you.name} が学園の職員に呼ばれて離れ、テイオーはひとりで寮へ戻る。${teio.sex}は学園の中庭を横切るとき、思わず足を止める。`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.uma_sex_title}の目が、隅の空洞になった幹を捉える——`,
      );
      era.println();

      await teio.print_and_wait(
        'ある意味で、これは学園のゴミ箱だ。ただし収めているのは、学園の人々の感情と言葉だ。',
      );
      era.println();

      await teio.print_and_wait(
        'ここで思いきり大声で自分の考えを吐き出すのは、もう一種の風習になっている。',
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      await teio.print_and_wait(
        `気づくと、${teio.sex}は樹洞の前に立っていた。`,
      );
      era.println();

      await teio.say_and_wait(`ボク……（諦めたい）`);
      era.println();

      await teio.print_and_wait(
        '口まで出かかって、吐くのがこんなに難しいと気づく。口に出せば、自分で認めたことになるのが怖いのか。認めたら、取り返しのつかない現実になるのか。',
      );
      era.println();

      await teio.print_and_wait(
        'だが現実は現実だ。主観で拒んだところで否定はできない。',
      );
      era.println();

      await teio.say_and_wait('ボク、本当に——');
      era.println();

      await era.printAndWait('（？）「キミはよくやったよ。お疲れ」');
      era.println();

      await teio.say_and_wait('？！トレーナー？');
      era.println();

      await era.printAndWait(
        `（？）「キミの選択は正しかった。自信を持て。もう大功を成したんだろ、迷って戻るんじゃないのか。大丈夫、一緒にいるよ」`,
      );
      era.println();

      await era.printAndWait('（？）「これから存分に——」');
      era.println();

      await teio.say_and_wait('だれ！');
      era.println();

      await era.printAndWait('（？）「わからないの？テイオー」');
      era.println();

      await era.printAndWait(
        `（？）「昨日も、その前の何日も、ボクはこうして話してたよ。キミはもう充分やった——休むときだ」`,
      );
      era.println();

      await era.printAndWait(
        `（？）「ふふ、悔いはないでしょ。一言あれば、一緒にいる。それからボクたちは——」`,
      );
      era.println();

      await teio.say_and_wait('——うるさい。');
      era.println();

      await teio.say_and_wait('キミはボクのトレーナーじゃない！');
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}は思わず大声で叫び、眼前の幻は遠ざかるが、声は止まない。頭のなかで、また文字が昂ぶる。`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `（？）「人が何と言っても、この数年の経験はキミの財産だ。${you.name} の走りを見て人生が変わった人も少なくない。${you.name} はとっくに伝説だ！」`,
      ]);
      era.println();

      await teio.say_and_wait(`なに言ってるの！！`);
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}は拳を握り、全身を震わせ、力を込めて叫ぶ。`,
      );
      era.println();

      await teio.say_and_wait(
        'ボクは伝説になったことなんて一度もない！何一つやり込めたことなんてない！自分で残した悔いは数えきれない！だいたい、本物のボクもトレーナーも、こんな言葉は絶対に言わない！キミはただ、気恥ずかしくて悲しい自己憐憫の影だ！自分を慰める言い訳は受け取らない！要するに再起して結果が出ないのが怖いだけでしょ！知らない！ボクは走りたい！殿堂入りして、そこでもっと興奮と喜びを得るんだ！',
      );
      era.println();

      await you.say_and_wait('テイオー？');
      era.println();

      await teio.say_and_wait('まだ——ん？');
      era.println();

      era.printButton('「ええと、うん、今戻ったところで、何も見てない」', 1);
      await era.input();

      await teio.say_and_wait('……ふん。');
      era.println();

      await era.printAndWait(`一筋の笑みが ${you.name} の担当の口元に咲く。`);
      era.println();

      await teio.say_and_wait(
        `知ってても、いいよ。トレーナー、今言ったこと、全部本気だよ。ボクたち——先へ行こう。`,
      );
      era.println();

      era.printButton(
        `「生まれ変わった無敵のテイオー${teio.adult_sex_title}と同行できるのは、光栄です」`,
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_h_s: (() => {
    const title = '再起';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} は自ら担当をレース場へ送り、${teio.sex}を励ましてから観客席へ戻る。`,
      );
      await era.printAndWait('隣はがら空きだ。');
      await era.printAndWait(
        `${you.name} は溜息をつく。会見に現れたあのテイオーのファンたちは、結局来なかった。`,
      );
      await era.printAndWait(
        `だが構わない、と ${you.name} は思う。テイオーが夢を叶えられればいい。首を捻り、視線を再び場へ戻す。`,
      );
      await era.printAndWait('だが、戦況は理想どおりではなさそうだ。');
      await era.printAndWait(
        `団子になった${teio.uma_sex_title}の群れは競争が激しく、テイオーは包囲を破れない。`,
      );
      await era.printAndWait(
        `${you.name} の掌は、いつのまにか汗でいっぱいだ。`,
      );
      era.drawLine();
      await era.printAndWait('トレーナーA「——以上が次のレースの出走馬です」');
      await era.printAndWait('通行人A「残念だね……また選ばれなかった」');
      await era.printAndWait('ファンA「……あはは、いいよ、どうせ下手だし」');
      await era.printAndWait(
        'ファンA（くそ……自分だって真面目に、朝早くから遅くまで鍛えてたのに！）',
      );
      await era.printAndWait(`——${you.name} が売っていたのは夢だ。`);
      era.println();

      await era.printAndWait(
        'ファンB「また怒鳴られた……自分のせいじゃないのに、全部自分のせいになる」',
      );
      await era.printAndWait(
        'ファンB「もういいや……ゲームするか。自分にも得意なものはあるし、へへ」',
      );
      await era.printAndWait(
        `——${you.name} が売っていたのは夢だ。誰もがそれに触れそうで触れず、必要だと認めないまま、心はそちらへ馳せる。`,
      );
      era.println();

      await era.printAndWait('ファンA「……ああ」');
      await era.printAndWait('ファンB「何もない……」');
      await era.printAndWait('——今まさに、人が夢を必要とするときだ。');
      era.println();

      await era.printAndWait(
        'ファンA「もういいや……テレビでも見るか……今日、ジャパンカップだっけ……」',
      );
      await era.printAndWait('ファンB「くそ……テレビでレースでも見るか」');
      await era.printAndWait(
        '——人は、すべてが幸せで、天は勤勉に報い、努力は実り、信念は困難を越えられる、という物語を聞きたい。',
      );
      era.println();

      await era.printAndWait(
        `ファンA「${teio.name}……？${teio.sex}、本当に出た？」`,
      );
      await era.printAndWait(`ファンB「${teio.sex}は……」`);
      await era.printAndWait(`——${you.name} は、そういう物語を書けるか。`);
      era.drawLine();
      await era.printAndWait(`？？？「${you.elder_sibling_sex_title}」`);
      era.println();
      await era.printAndWait(
        `${you.name} が振り返ると、女がどこか見覚えのある女の子の手を引き、${you.name} へ歩いてくる。`,
      );
      era.println();
      await era.printAndWait(
        `女の子「${you.elder_sibling_sex_title}？覚えてる？」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} は見て思い出す。あのとき ${you.name} とテイオーが初めて会ったときに見た子供だ。挨拶を交わし、彼女たちは ${you.name} の隣に座って一緒に観戦する。女の子はとても興奮している。初めて来たのか。`,
      );
      era.println();
      await era.printAndWait(
        `女の子「${you.elder_sibling_sex_title}、ずっとテイオー${teio.adult_sex_title}のレースが見たかったの……今まで機会がなくて、今度やっと！クラスで一番取ったら、お母さんがご褒美で連れてきてくれたの。テイオーさん、本当にかっこいい。${teio.sex} 絶対に一番だよね！」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} は${teio.sex}の顔を見て、思わず笑う。`,
      );
      era.printButton(`「ああ、${teio.sex}なら必ず」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('最悪……', true);
      await era.printAndWait(
        `いちばん得意な先行がまったく活きず、${teio.uma_sex_title}の群れが道を塞ぎ、突破は夢物語だ。`,
      );
      await era.printAndWait('本当に……できるのか。');
      era.println();
      await teio.say_and_wait('できる！', true);
      era.println();
      await era.printAndWait(
        `走る${teio.uma_sex_title}が集まり、散る。狭く、半馬身ほどの隙間が露出する——`,
      );
      era.println();
      await era.printAndWait(`実況「え、あれは——${teio.name}？！」`);
      era.println();
      await era.printAndWait(
        'ふくらはぎの筋肉がいったん緩み、それから縮んで放つ！大きく脚を上げ、巻き上がる埃と跳ねる土も構わず、発力！',
      );
      await era.printAndWait(`${teio.sex}だけの夢幻の歩法。`);
      await era.printAndWait(`${teio.sex}だけの舞歩。`);
      await era.printAndWait('すべての者に風采を見せる——帝王舞歩！');
      era.println();
      await era.printAndWait(
        `実況「あり得るのか——夢幻のような光景、${teio.name}、抜け出した、${teio.sex}は先頭へ——」`,
      );
      era.println();
      await era.printAndWait('刹那、局面は決した。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_h_s: (() => {
    const title = '奇跡の復活（上）';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      era.printButton('「準備はいいか」', 1);
      await era.input();

      await teio.say_and_wait(
        '願うよ……これが本当に、全部ボクのものでありますように。',
      );
      era.println();

      await teio.say_and_wait(
        'ここで、キミとボクと、支えてくれたすべての人の、テイオーの伝説を書きたい。',
      );
      era.println();

      await teio.say_and_wait(
        '夢みたいなことだと思う。でも、夢を見るだけじゃ、ボクたちに何の意味があるの？',
      );
      era.println();
      era.printButton(`「意味はないよ（笑）。それでも、ここまで来た」`, 1);
      await era.input();

      await teio.say_and_wait('そうだね。もうすぐ、全部手に入る。');
      era.println();

      era.printButton(`「よし、準備はできた顔だ」`, 1);
      await era.input();

      await teio.say_and_wait(
        'この一年、ボクたちは全部失って、わずかな希望と執着だけ抱えて走り続けた——',
      );
      era.println();

      era.printButton(
        '「だから必要なものはもうある。走り続ける以外に、何の選択がある」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.teen_sex_title}は口元を上げ、顔を上げて ${you.name} と目を合わせる——`,
      );
      if (era.get(`relation:3:0`) > 150) {
        await era.printAndWait(
          `${teio.sex}は両手を伸ばし、${you.name} の開いた掌のうえへ置く。${you.name} は担当の手を軽く摘み、温かい感触が伝わり、指先に${teio.teen_sex_title}の健康で弾力のある肌と、その下でやや速く打つ脈を感じる。`,
        );
        await era.printAndWait(
          `${you.name} は${teio.sex}のサファイアのように透き通った、${teio.teen_sex_title}の粘り、信念、希いが ${you.name} の瞳へ屈折するのを見る。${you.name} も笑う。だが、目尻が少し湿る。`,
        );
        era.println();

        era.printButton('「行け。キミの名を空に響かせろ」', 1);
        await era.input();

        await teio.say_and_wait('必ず。');
        era.println();

        await era.printAndWait(
          `地を踏む足音が小さな部屋に響き、${teio.teen_sex_title}は洒落て一回転し、手を振り、確かな歩幅で前へ出る。`,
        );
      } else {
        await era.printAndWait(
          `ふたりは黙契のうちに利き手を出し、ゆるく拳にして触れ合う。`,
        );
        await era.printAndWait(
          `小さな体に潜む力と、太陽のような温かさが触れた面から伝わる。向かい合って、思わず双方が声を出して笑う。`,
        );
        era.println();

        era.printButton('「武運を祈る」', 1);
        await era.input();

        await teio.say_and_wait('見てて。ボクの走りを。');
        await era.printAndWait(
          `${teio.sex}は腕を引き、きれいに一回転し、陽のなかへ歩いていく。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_h_s: (() => {
    const title = '奇跡の復活（下）';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('大丈夫だよ。');
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.teen_sex_title}は熾烈な流星と化し、体力を最大限に狂おしく燃やし、レース場を走る。`,
      );
      era.println();

      await teio.say_and_wait('勝てる。');
      era.println();

      await era.printAndWait(
        `${you.name} は専用観戦席から立ち上がり、そのぼやけた赤い影を目で追う——${you.name} の担当が、全身の筋繊維を絞り切ってこのレースを仕上げようとしている。`,
      );
      await era.printAndWait(`ふたりの夢を、叶えるために。`);
      era.println();

      await era.printAndWait(
        `青空に白い雲、赤い陽に清い風、いちばん適した天気なのに、${you.name} には味わう気がなく、ただその小さな影へ全身を投げる。`,
      );
      await era.printAndWait(`${you.name} の担当、${teio.name}。`);
      await era.printAndWait(
        `世界が ${you.name} の目から遠ざかり、${teio.sex}のうえへ再び焦点を結ぶ。あらゆる音がノイズのように濁る——待て。`,
      );
      era.println();

      await era.printAndWait(`実況「——${teio.name}選手が——」`);
      era.println();

      await era.printAndWait('何かがおかしい。');
      era.println();

      await era.printAndWait(
        `${you.name} は柵を掴み、身を乗り出し、必死に叫ぶ。`,
      );
      era.println();

      await era.printAndWait(`実況「——失速！脚の旧傷か——」`);
      era.println();

      await teio.say_and_wait('は……は……');
      era.println();

      await teio.say_and_wait('体が……言うこと聞かない', true);
      era.println();

      await teio.say_and_wait('こ——きゅう——上がらない', true);
      era.println();

      await teio.say_and_wait('肋骨と肺と心臓が……燃えてる。', true);
      era.println();

      await teio.say_and_wait('手足が……感じない', true);
      era.println();

      era.printButton('「——テ——イ——オー——」', 1);
      await era.input();

      await teio.say_and_wait('あの人はだれ……', true);
      era.println();

      await teio.say_and_wait(
        '声も……視界も……ぼやける……何も思い出せない、このまま倒れて……',
        true,
      );
      era.println();

      await era.printAndWait('胴が前へ傾き、頭が落ちる。');
      era.println();

      await era.printAndWait('いや、待て。');
      await era.printAndWait('こんな結末であるはずがない。');
      era.println();

      await teio.say_and_wait('違う', true);
      era.println();

      await teio.say_and_wait('ボクは何を——', true);
      era.println();

      era.printButton(`「${teio.name}！！！」`, 1);
      await era.input();

      await teio.say_and_wait('ああ……');
      era.println();

      await era.printAndWait(`実況「——おお！${teio.name} が追いついた？」`);
      era.println();

      await teio.say_and_wait('思い出した。');
      era.println();

      await era.printAndWait(
        `重い両脚、燃える肺、酸えた腕——痛みが ${teio.name} という${teio.uma_sex_title}の体へ戻る。`,
      );
      await era.printAndWait('だが同じように戻ったのは、闘志と信念だ。');
      era.println();

      await teio.say_and_wait('思い出した！');
      era.println();

      await era.printAndWait(
        `両足が大地に触れ、擦り、地面を蹴った反作用が、すでに苦痛に耐えきれない体を前へ押し、体を傾け、位置エネルギーが生む前向きの加速を最大限に使う——`,
      );
      era.println();

      await era.printAndWait(
        `実況「今の先頭は——待て、あれは、${teio.name} が上がってきた！${teio.name}だ！」`,
      );
      era.println();

      await teio.say_and_wait('呼吸が苦しい', true);
      era.println();

      await teio.say_and_wait('肺が破れても構わない', true);
      era.println();

      await teio.say_and_wait('脚は重い、でもまだ動く', true);
      era.println();

      await teio.say_and_wait('ボクは……何度も挫折した', true);
      era.println();

      await teio.say_and_wait('あのときも……あのときも', true);
      era.println();

      await teio.say_and_wait('誰より多く挫折したのはボクだ', true);
      era.println();

      await teio.say_and_wait('誰より悔しいのもボクだ', true);
      era.println();

      await teio.say_and_wait('誰より勝ちたいのもボクだ', true);
      era.println();

      await teio.say_and_wait('絶対に譲らない', true);
      era.println();

      await teio.say_and_wait('絶対に絶対に', true);
      era.println();

      await teio.say_and_wait('絶対にボクだ！', true);
      era.println();

      await teio.say_and_wait('行け', true);
      era.println();

      await teio.say_and_wait('行け', true);
      era.println();

      await teio.say_and_wait('行け、走れ', true);
      era.println();

      await teio.say_and_wait('勝負だ！', true);
      era.println();

      await era.printAndWait(
        `実況「${teio.name}だ！${teio.name} が追いついた！${teio.sex}と先頭の差が縮まっていく！」`,
      );
      era.println();

      await era.printAndWait('残り200メートルを切る');
      era.println();

      await era.printAndWait(
        `実況「一年ぶりにレース場へ戻った ${teio.name} は追いつけるか？${teio.sex}が抜き去った——いや、他の${teio.uma_sex_title}が${teio.sex}のそばに張りつき、必死に ${teio.name} を追っている！」`,
      );
      era.println();

      await era.printAndWait(
        `実況「${teio.name} が力を振り絞って追う！相手も一歩も譲らない——あと一馬身！」`,
      );
      era.println();

      await era.printAndWait(
        `実況「あと少し、あと少し！${teio.name} がもう一歩近づけない！」`,
      );
      era.println();

      await era.printAndWait(
        '実況「菊花賞レコード保持者の強さが、ここでも譲らない！」',
      );
      era.println();

      await era.printAndWait(
        `実況「だが——${teio.name} が近づいた！レース場へ戻ったテイオーが差をどんどん縮める！」`,
      );
      era.println();

      await era.printAndWait('100メートル\n最後の鍔迫り合い');
      era.println();

      await era.printAndWait(
        `実況「先頭と並んだか？${teio.name}！新世代の覇者か、往時の没落した王が玉座へ戻るのか——」`,
      );
      era.println();

      await era.printAndWait(
        '芝の原全体が、震えるようだ。中山競馬場——ここも、有馬記念の勝者を待っているのではないか。',
      );
      era.println();

      await teio.say_and_wait('あああああああああああ！');
      era.println();

      await era.printAndWait(`実況「${teio.name}だ！」`);
      era.println();

      await era.printAndWait(
        `実況「${teio.name} は越えたか？${teio.name} がわずかに先行、ダービーウマ${teio.uma_sex_title}の骨を見せるか？！」`,
      );
      era.println();

      await era.printAndWait(
        '実況「だが優勢は薄い、相手も食らいついて離さない！」',
      );
      era.println();

      await era.printAndWait('実況「どっちだ、どっちだ？！」');
      era.println();

      await era.printAndWait(`ウマ${teio.uma_sex_title}「ボクが——」`);
      era.println();

      await teio.say_and_wait('——勝った——');
      era.println();

      await era.printAndWait('一筋の赤い虹が、決勝線を切り裂く。');
      era.println();

      await era.printAndWait(
        '場全体が一瞬静まったようで、それから山を崩すような歓声。',
      );
      await era.printAndWait(
        '沸騰する人々の叫びが空に響き、ひとつの名がそのなかで回る。',
      );
      era.println();

      await era.printAndWait(`観客「${teio.name}！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`観客「${teio.name}！！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`観客「${teio.name}！！！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(`実況「${teio.name}——奇跡の復活！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      });
    };
    f.title = title;
    return f;
  })(),
  we_143_5_h: (() => {
    const title = '暗から明へ';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} は道を歩き、少し汗ばんだシャツが上半身に張りつく。`,
      );
      await era.printAndWait(
        `少し前を行くのは ${you.name} の担当、トウカイテイオーだ。${teio.sex}は ${you.name} の手を摘み、${teio.uma_sex_title}にしてはやや遅く、だが ${you.name} には鍛えになる速度で歩く。掌が合い、ときどき軽く揺れる。空の端の残照が額へ落ち、${you.name} は大理石を磨いた小道を踏み、前方を仰ぎ、淡い金色の光が${teio.sex}の白い前髪を掠めるのを見る。`,
      );
      await era.printAndWait(
        `一段の階段の前で${teio.sex}が足を止め、${you.name} も立ち、眼前の景色を眺める。`,
      );
      await era.printAndWait(
        '黄昏のもと、大地は落日の最後の光を借りて身を包み、一枚の布をまとう。点々と金の糸がその凹凸を滑る。雪は光を返さず、顔を出したばかりの緑の芽が貪欲にエネルギーを吸っている。',
      );
      await era.printAndWait('春が来る。');
      await era.printAndWait(`ふたりの夢も、終わった。`);
      await era.printAndWait('言うべきときだ……');
      era.println();

      era.printButton('「この瞬間を、長すぎるほど待った——どちらも同じだ」', 1);
      await era.input();

      await teio.say_and_wait('そうだね');
      era.println();

      await teio.say_and_wait(
        '天皇賞（春）のとき、怖かったのを覚えてる——体の傷や病じゃなくて——最初の願いが、永遠に泡になるかもしれない、って思ったから。',
      );
      await teio.say_and_wait(
        'いちばんひどかったのは……その恐怖が、本当になったこと。',
      );
      era.println();

      await era.printAndWait(
        `残陽を前に、${teio.teen_sex_title}は両腕を開き、体を伸ばし、ゆっくり語る。光が落ち、${teio.sex}の影が ${you.name} の顔に当たる。${you.name} は黙り、往時のあれこれが頭に浮かぶ。${teio.sex}が谷底へ落ち、${teio.sex}が迷い、${teio.sex}が険しい道を歩き、${you.name} はそれを見ながら手も足も出ず、幻から作った希望だけを抱いて歯を食いしばり、${teio.sex}と一緒に踏みとどまった。`,
      );
      await era.printAndWait('妥協しない。諦めない。');
      era.println();

      await teio.say_and_wait(
        'でもボクは——ボクたちは、踏みとどまった。今、そばにキミがいて、灯りがいて、人がいて、夢がある。',
      );
      era.println();

      await teio.say_and_wait(
        'ボクたちが信じてたことが——今、本当になったから。',
      );
      era.println();

      era.printButton('「テイオー」', 1);
      await era.input();

      await teio.say_and_wait('なに？');
      era.println();

      era.printButton('「キミは……信じてるか」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.uma_sex_title}はすぐには ${you.name} に答えず、夕陽へ向かって頭を下げ、それから尻尾を軽く揺らし、振り返って笑う。`,
      );
      era.println();

      await teio.say_and_wait('ずっと、疑ったことないよ。');
      era.println();

      await era.printAndWait(
        `それから${teio.sex}の心を動かす笑いが続き、${you.name} も思わず笑う。ふたりは手を携え、また前へ進む。`,
      );
      await era.printAndWait(`ふたりの物語は、まだ続く。`);
      era.println();
      if (era.get('talent:3:自信程度') === 1) {
        era.print([teio.get_colored_name(), ' はもう [自信がない] ではない！']);
      }
      era.print([
        teio.get_colored_name(),
        ' の ',
        {
          color: buff_colors[3],
          content: '[脚部負傷]',
        },
        ' が癒えた！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_h(teio) {
    await teio.say_and_wait('これは、ボクたちのものだよ——ふたりの記念碑——');
  },
  op_rehabilitation: (() => {
    const title = 'リハビリ';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `木の大桶に温かい水が満ち、${you.name} は愛馬の裸の両足を掴み、ゆっくり水へ浸す。`,
      );
      await era.printAndWait(
        `ツボを狙い、摘み、掴む。透き通って白い脚が刺激され、充血して赤くなる。${you.name} は頭を下げて日課をこなす。`,
      );
      await era.printAndWait(
        '医師と話し合って組んだ、テイオーの両脚を戻す計画は、毎日厳密に実行する。今しているのは、毎晩の最後の一歩だ。',
      );
      await era.printAndWait(
        `外見は完璧な${teio.teen_sex_title}の両脚を見て、${you.name} はやはり胸が痛む。内側の傷は、もう癒えにくいのだろう。`,
      );
      await era.printAndWait(
        'そもそも自分の努力に意味はあるのか。双方への気休めにすぎないのか。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は医師が内密に話した、似た症状の${teio.uma_sex_title}たちを思い出す。${teio.couple_title}は例外なく再起できず、引退を選んだ。ではテイオーは……`,
      );
      era.println();

      await teio.say_and_wait('トレーナー。');
      era.println();

      await era.printAndWait(
        `普段より低い声が立ち上る熱気を割り、${you.name} の耳へ漂う。`,
      );
      era.println();

      await teio.say_and_wait(
        `ボク……バカな質問だってわかってる。でも ${you.name} の口から聞きたい……今やってること、本当に意味あるの？`,
      );

      era.printButton('頭を下げる（スタミナ＆根性＆賢さ+15）', 1);
      era.printButton(
        '「ふたりの信念は、必ず応えてくれる」（スピード＆パワー+15、好感+5、やる気上昇）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は頭を下げ、答えたくない、あるいは答えられないまま、',
          teio.uma_sex_title,
          'の脚のケアだけを続ける',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_dead: (() => {
    const title = 'デッドエンド';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita 犯人（キタサンブラックの代表色で暫定）
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} k_call_t キタサンブラックがトウカイテイオーを呼ぶ名
     */
    const f = async (teio, kita, you, k_call_t) => {
      await era.printAndWait(
        '🎶You made one mistake, you got burned at the stake🎶',
        { align: 'center', isParagraph: true },
      );
      await era.printAndWait([
        teio.get_colored_name(),
        ' は傘を収め、鉤で掛けにかけ、ついでに帽子を外す。',
        teio.sex,
        'はクローゼットの下段からスーツケースを引き出し、ベッドのそばまで引いて、そのうえに座って脚を組む。',
      ]);
      await era.printAndWait(
        '帽子を斜めに被せてウマ耳を隠し、青い瞳の前を煙のような埃が過ぎる。窓からの陽が差し込み、それらに金粉をまぶす。',
      );
      await era.printAndWait([
        '顎を支え、',
        teio.sex,
        'は ',
        you.get_colored_name(),
        ' の寝顔を見る。陽が ',
        you.get_colored_name(),
        ' の睫毛の隙間を流れる。視線は規則正しく上下する鼻翼、少し白い両唇、きちんと留めた襟を辿る。',
      ]);

      await era.printAndWait(
        "🎶You're finished, you're foolish, you failed🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      era.printButton('「おはよう」', 1);
      await era.input();

      await era.printAndWait([
        teio.get_colored_name(),
        ' は前へ飛び、いきなり ',
        you.get_colored_name(),
        ' の喉を締め、左膝で ',
        you.get_colored_name(),
        ' の右肘を押さえ、右脚を胸へ当て、最後に左手の親指を捻じる。',
      ]);
      await era.printAndWait([
        'わずかに腰をかがめ、',
        teio.sex,
        'は目を据えて ',
        you.get_colored_name(),
        ' の満面の笑みを見る。',
      ]);
      await you.say_and_wait(
        'ん、愛しい担当はおはようのキスが欲しいのか——げほっ！',
      );
      era.println();

      await era.printAndWait([
        teio.get_colored_name(),
        ' が両手に力を込め、',
        you.get_colored_name(),
        ' の顔が同時に震える。',
      ]);

      await era.printAndWait(
        "🎵There's always a hope on this slippery slope🎵",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await you.say_and_wait('朝、まだ、うっ、食べてないだろ。');
      era.println();

      await era.printAndWait(
        '吊り上がった口元が絶えず引き攣り、酒気のある涎が垂れる。',
      );
      await era.printAndWait([
        teio.get_colored_name(),
        ' は目を細め、右膝を下へ押し付ける。',
        you.get_colored_name(),
        ' の両手が勢いよく震え、左手が連続で',
        teio.sex,
        'の手の甲を何度も叩く。',
      ]);
      await era.printAndWait([
        'しばらく叩いたあと、口元の高さが下り始め、血の筋が ',
        you.get_colored_name(),
        ' の眼球を囲む。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は両目を閉じ、咽び、震える人差し指で ',
        teio.get_colored_name(),
        ' の手の甲にゆっくり S を書く。',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' は首をかしげ、O が手の甲に半分書かれたところで、',
        teio.sex,
        'は喉の手を放す。',
        you.get_colored_name(),
        ' は咳き込み、両手とも脱力する。',
      ]);
      await you.say_and_wait(
        'げほっ、げほげほっ、まったく、朝食は、うっ、遅らせられない。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が咳をするたび、胸に酸い痛みが走る。',
      ]);

      await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('んふん、十一時近くまで寝てたみたいだよ。');
      era.println();
      await you.say_and_wait(
        'すまない！心からすまない。キミがいないあいだに隠れて煙草を吸い、酒を飲んだのは間違いだった。',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が言い終えると、また小さな両手が首の肉へ貼りつく。',
        you.get_colored_name(),
        ' は両脚が震え、目を見開く。',
      ]);
      era.println();
      await you.say_and_wait(
        'わかったわかった、ぺっ、やめろやめろ！もうやめろ！本当にやめろ！ふぅ、わかった。',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は深く息を吸い、',
        teio.get_colored_name(),
        ' の青い瞳を正面から見て言う。',
      ]);
      era.println();

      era.printButton('「悪かった。後悔してる！」', 1);
      await era.input();

      await era.printAndWait(
        '🎵To get back in that game and burn off your shame🎵',
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        teio.get_colored_name(),
        ' は下の ',
        you.get_colored_name(),
        ' の顔を見つめ、ゆっくり手を引き、両膝を ',
        you.get_colored_name(),
        ' の体から離す。親指がまだ捻じられているのを見て、',
        you.get_colored_name(),
        ' は眉を上げ、言う。',
      ]);
      era.println();
      await you.say_and_wait('片手を掴まれたまま、片手で朝食は作れないだろ？');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' は手を放し、頭の帽子を支え、軽く後ろへ跳んでベッドを下りる。',
      ]);
      era.println();
      await teio.say_and_wait('お腹空いてない。');
      era.println();
      await era.printAndWait([
        teio.sex,
        'は窓辺へ歩き、首をかしげて暗いカーテンに凭れる。',
        you.get_colored_name(),
        ' は肘を揉んで起き上がり、口を結んで言う。',
      ]);
      era.println();
      await you.say_and_wait('空いてないのに、それを持ってるのはなぜだ？');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' が振り返ると、',
        you.get_colored_name(),
        ' の右手の掌に包装された小さなパンがある。',
        teio.sex,
        'は口元を引き締め、一歩前へ出る。',
        you.get_colored_name(),
        ' は慌てて手を振る。',
      ]);
      era.println();
      await you.say_and_wait(
        '落ち着け、いい担当。次は温いうちに食べろ。それに、一緒に食事がしたいだけなら……朝、起こし方は知ってるだろ。',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' はポケットを触り、顔を赤くし、',
        you.get_colored_name(),
        ' の尻を軽く蹴る。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は尻を撫でてクローゼットを開け、パジャマのボタンを外し、目立たないチェックのシャツを出して着替える。',
      ]);
      await era.printAndWait([
        teio.sex,
        'は ',
        you.get_colored_name(),
        ' が着替え終わるのを見守り、',
        you.get_colored_name(),
        ' と一緒に部屋を出る。',
      ]);

      await era.printAndWait('🎶And dance with the big boys again🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        you.get_colored_name(),
        ' は片手でテーブルクロスを敷き、もう片方で炒り卵とソーセージの皿を置き、自分の食器を整え、ナプキンを腿のうえに平らに置く。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は搾ったてのオレンジジュースを一口飲み、',
        teio.get_colored_name(),
        ' の咀嚼の音のなかで食べる。それから ',
        you.get_colored_name(),
        ' は卵を切り、フォークで ',
        teio.get_colored_name(),
        ' の口元へ運ぶ。',
      ]);
      era.println();
      await you.say_and_wait('味は足りるか、試してみろ。');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' は一口で飲み込み、噛みながら肉を一切り、フォークで ',
        you.get_colored_name(),
        ' の前へ出す。',
        you.get_colored_name(),
        ' は身をかがめてフォークを銜え、肉を口へ巻く。',
      ]);
      era.println();

      era.printButton('「んむ、もっと食べろ。健康と発育にいい」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の卓下のつま先が、',
        teio.uma_sex_title,
        'に軽く踏まれる。',
      ]);

      await era.printAndWait("🎶It's a strange, strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '知り合い、寄り添い、今に至るまで、どれくらい経っただろう。三、五年はあるかもしれない。だがふたりとも、そういうことは気にしていないようだ。',
      ]);
      era.println();
      await era.printAndWait([
        'なにしろ、トレセンもレースも、過去のすべてはもう終わっている。',
      ]);
      era.println();
      await era.printAndWait([
        'ふたりの生活では、そうした話題をわざと避ける——ただし',
        teio.sex,
        'が ',
        you.get_colored_name(),
        ' を呼ぶ名はとっくに ',
        you.get_colored_actual_name(),
        ' に変わっているのに、',
        you.get_colored_name(),
        ' は無意識に',
        teio.sex,
        'を自分の担当と呼び、',
        teio.sex,
        'もそれにはあまり異議がないらしい。',
      ]);
      era.println();
      await era.printAndWait([
        teio.sex,
        'が脚を傷めてから、ふたりはいくらか努力したが、それでも',
        teio.sex,
        'の',
        teio.uma_sex_title,
        'としての生涯は救えず、再起後の連敗のなかで、あっけなく引退した。',
      ]);
      await era.printAndWait(
        '花も拍手もなく、いちばん低い調子で、その仕組みから退いた。',
      );
      await era.printAndWait([
        teio.sex,
        'を世話するため（あるいは、ただ離したくなかっただけか）、',
        you.get_colored_name(),
        ' も退職を願い、トレセンの助けで',
        teio.sex,
        'と静かな村にふたりの新しい家を据えた。',
      ]);

      await era.printAndWait('🎶Such a shame, shame, shame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('ん……さっき買い忘れたものがある。');
      era.println();
      await era.printAndWait([
        '遅めの朝食を終え、',
        you.get_colored_name(),
        ' と',
        teio.sex,
        'は台所で道具を洗う。',
        teio.sex,
        'が片付け、つま先立ちで冷蔵庫を開けたとき、突然そんな一言が出る。',
      ]);
      era.println();
      await you.say_and_wait('あ？じゃああとで一緒にもう一度行くか？');
      era.println();
      await teio.say_and_wait('ん——');
      era.println();
      await era.printAndWait([
        '突然、家の他の部屋から物音がする。ふたりは目を合わせ、それから',
        teio.sex,
        'は扉の外へ消える。一分も経たず、また ',
        you.get_colored_name(),
        ' の前へ戻る。',
      ]);
      era.println();
      await teio.say_and_wait('物置の天井が漏れてるみたい。一部が落ちてた。');
      era.println();

      era.printButton('「あとで直す。キミは買い物に行ってくれ」', 1);
      await era.input();

      await era.printAndWait([
        teio.sex,
        'は一瞬迷い、',
        you.get_colored_name(),
        ' を見る。',
      ]);
      era.println();

      era.printButton(
        '「問題ない。自分に任せてくれ。背が足りないと上は手伝えないし、ひとりで充分だ。分担すればちょうど終わる」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の元担当は長く考え込み、結局は頷いて ',
        you.get_colored_name(),
        ' の考えに同意する。',
      ]);
      await era.printAndWait([
        teio.sex,
        'が家の前に立ち、',
        you.get_colored_name(),
        ' は最後にもう一度',
        teio.sex,
        'の服を整え、尻尾と耳を隠し、満足して手を叩き、それから浅い口づけをし、別れを告げ、扉を開ける。',
      ]);
      await era.printAndWait([teio.sex, 'は外の世界へ歩いていく。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は扉を閉め、窓から',
        teio.sex,
        'の影が遠ざかるのを見送り、息を吐き、カーテンを引き、向きを変えて仕事に取りかかる。',
      ]);

      await era.printAndWait('🎶You got to carry the blame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '一刻ほどして、チャイムが ',
        you.get_colored_name(),
        ' の、金槌と釘と板に集中していた注意を割る。',
      ]);
      await era.printAndWait([
        '最初 ',
        you.get_colored_name(),
        ' は構わなかったが、外の者は忍耐強く、途切れない音は ',
        you.get_colored_name(),
        ' へのスタミナトレーニングに等しく、結局 ',
        you.get_colored_name(),
        ' は耐えきれず扉の前へ行き、覗き穴から——',
      ]);
      await era.printAndWait('一対のウマ耳を見る。');
      await era.printAndWait('茶色の、小さな三角形のウマ耳だ。');

      await era.printAndWait('🎶In this strange game🎶', {
        align: 'center',
        isParagraph: true,
      });

      await you.say_and_wait(
        ['偽装がバレた？', teio.sex, 'が急いで戻ってきた？'],
        true,
      );
      await era.printAndWait([
        '焦った ',
        you.get_colored_name(),
        ' は扉を開け、続いて来るのは——胸の激痛だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭を下げて初めて、利刃が巧妙に肋骨の隙間を抜け、自分の心臓へ刺さっているのに気づく。',
      ]);
      era.println();

      await you.say_and_wait('うっ……');

      await era.printAndWait(
        "🎶You're out on a limb and you're trying to gеt in🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        '鮮紅色の血が噴き出し、',
        you.get_colored_name(),
        ' の生命力とともに体外へ流れ出る。',
        you.get_colored_name(),
        ' は鈍く瞬き、犯人——どこか見覚えのある',
        teio.uma_sex_title,
        '——を瞳へ映す。',
      ]);
      era.println();
      await kita.say_as_unknown_and_wait([
        'あんたが……',
        k_call_t,
        ' の人生を壊した。',
      ]);
      await kita.say_as_unknown_and_wait([
        '自分の欲のために',
        teio.sex,
        'の両脚の状態を見ないふりして、虚に乗じて',
        teio.sex,
        '唯一の心の支えのふりをするなんて……これがあんたの末路よ！',
      ]);
      await kita.say_as_unknown_and_wait([
        'でも ',
        k_call_t,
        '……もうあんたに深く目隠しされて、何もできない。このファンがアイドルを解放するしかない！この機会、ずっと待ってたんだから！',
      ]);

      await era.printAndWait("🎶It's a strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        'ああ、',
        kita.sex,
        'は義憤に燃えて何か言っているようだ。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' には、もうその情報を処理する術がない。',
      ]);
      await you.say_and_wait(
        '惜しいな……酒も煙草も止められないまま、テイオーを喜ばせられなかった。',
        true,
      );
      await era.printAndWait([
        '最後の意識を連れて、',
        you.get_colored_name(),
        ' は深い闇へ堕ち、永遠に目を閉じる。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async be_dead_end() {
    await era.printAndWait('Do you want to play this a strange game again?', {
      align: 'center',
      isParagraph: true,
    });
  },
  be_normal: (() => {
    const title = '空しく終わる';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        teio.get_colored_name(),
        ' と解約したあと、世間の風を避け、静けさを求めて、',
        you.get_colored_name(),
        ' はトレセンを離れ、別の場所で再びトレーナーの仕事を始める。だが、なぜか ',
        you.get_colored_name(),
        ' が指導した',
        teio.uma_sex_title,
        'は二度と優れた成績を出せず、',
        you.get_colored_name(),
        ' の状態も能力も、',
        teio.get_colored_name(),
        ' と組んでいたころの水準へ戻らなかった……',
        you.get_colored_name(),
        ' の道は、こうしてあっけなく行き止まり、',
        you.get_colored_name(),
        ' と ',
        teio.get_colored_name(),
        ' がかつていた夢も、結局は叶わなかった。',
      ]);
      await era.printAndWait([
        '胸に何かが欠けたような ',
        you.get_colored_name(),
        ' は変わらない日々を繰り返し、仕事は次第に重荷になり、',
        you.get_colored_name(),
        ' は煙草と酒を気付けと慰めの薬にし始める。気づかぬうちに、',
        you.get_colored_name(),
        ' は当初の理想を忘れ、やる気を失い、碌々として ',
        you.get_colored_name(),
        ' の後半のキャリアを歩き切った……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
