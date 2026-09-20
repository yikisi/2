/**
 * @file ダイイチルビー - 育成 - NTR 結末
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  be_ntr: (() => {
    const title = '「ルビーはトレーナーを替えるかもしれませんわ」';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '[WARNING]\n！！！！NTR注意！！！！\nこの結末の口上は濃厚なNTR要素を含みます。続けますか？',
        {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
      );
      era.printMultiColumns(
        ['さあ、お出しなさい', 'やはり下げておきましょう……'].map((e, i) => ({
          accelerator: i * 100,
          config: { width: 12, align: 'center' },
          content: e,
          type: 'button',
        })),
      );
      const ret = await era.input();
      if (ret === 0) {
        await era.printAndWait('（警告は、もう受けたはずです）', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait([
          'その後のある日、',
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' が執事を通じて預けたCDを受け取った。',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          'フィアンセ',
          'いいだろう、ルビー。脱げ。',
        );
        await ruby.say_and_wait('……ええ、分かりましたわ。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は覚悟を決めたように、婚約者の下着へ手を置いた。',
        ]);
        await era.printAndWait([
          '息を吐き、心を落ち着ける。それから思い切って下着を一気に引き下げたとき、巨大な男根が勢いよく跳ね、',
          ruby.get_colored_name(),
          ' の眼前に現れた。',
        ]);
        await ruby.say_and_wait('あら……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は短い悲鳴を漏らした。',
        ]);
        await era.printAndWait('彼の巨根は力強くそそり立っている。');
        await era.printAndWait('その姿は、雄の象徴と呼ぶに相応しい。');
        await era.printAndWait([
          '巨根は ',
          ruby.get_colored_name(),
          ' を見据えるように、黒い光を怒らせていた。',
        ]);
        await era.printAndWait('大きすぎる……');
        await era.printAndWait(
          '彼の巨根はすでに勃起し、熟したバナナのように黒く太い。その大きさはペットボトルほどもあり、肥大した血管が走り、生き物のように盛り上がっている。',
        );
        await ruby.say_and_wait('あぁ……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は陰茎の大きさに思わず感嘆した。瞳はその巨根から離れず、驚きで見開かれている。信じがたい大きさの肉棒を、両目で凝視していた。',
        ]);
        await ruby.say_and_wait('すごいですわ……こんな……ことになるなんて……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はその巨根を讃え、とりわけ長さに一目惚れしたように、息を乱している。',
        ]);
        await era.printAndWait([
          '彼女は巨大な根元を握った。',
          ruby.get_colored_name(),
          ' の指は長く美しいが、相手の規格外の巨根にはまったく釣り合わず、その大きさを改めて確かめる。',
        ]);
        await era.printAndWait(
          'フィアンセ「お前のトレーナーと比べて、どっちのちんこが大きい？」',
        );
        await era.printAndWait([
          '彼は傲慢な笑みを浮かべて ',
          ruby.get_colored_name(),
          ' に問う。狙いは明白だ。だが、婚約者である彼女に言わせることに意味がある。',
        ]);
        await ruby.say_and_wait('……！ そんなこと、申しませんわ。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の表情が濁る。婚約者は ',
          ruby.get_colored_name(),
          ' の頭に手を置き、愛撫した。',
        ]);
        await era.printAndWait('フィアンセ「言え。」');
        await era.printAndWait([
          '鋭い表情で ',
          ruby.get_colored_name(),
          ' に命じると、彼女は諦めたように呟いた。',
        ]);
        await ruby.say_and_wait('貴方の……方が、大きいですわ。');
        await era.printAndWait('フィアンセ「誰よりいい？ ちゃんと言え。」');
        await ruby.say_and_wait(
          '貴方の方が……！ トレーナーより大きくて、立派ですわ……！',
        );
        await era.printAndWait('フィアンセ「よく言った。」');
        await era.printAndWait([
          '先ほどの表情とは打って変わり、彼は柔らかい顔で ',
          ruby.get_colored_name(),
          ' の頭を撫でた。',
        ]);
        await ruby.say_and_wait('ごめんなさい……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は申し訳なさそうな顔で、カメラを見つめた。',
        ]);
        await era.printAndWait(
          'その様子を見て、あなたは自分が愛されていたのだと悟った。',
        );
        await era.printAndWait([
          '彼女と目が合ったとき、突然、巨根が間に割り込んだ。眼前は彼の肉棒で埋まり、',
          ruby.get_colored_name(),
          ' もカメラから視線を外し、目の前の巨物に完全に奪われていた。',
        ]);
        await era.printAndWait([
          '彼は気ままに ',
          ruby.get_colored_name(),
          ' の髪を掴み、自分の股間へ押し付けた。無理に口をこじ開け、巨根をねじ込み、髪を乱暴に引っ張って上下させた。',
        ]);
        await ruby.say_and_wait('ん……ん……んっ……！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は苦しげに眉を寄せる。黒い巨根が ',
          ruby.get_colored_name(),
          ' の小さな口から出入りするたび、唾液が口角からぽたぽたと落ちた。',
        ]);
        await era.printAndWait(
          '小さな口の中で行き場を失った巨根は、ついに喉へ侵入し、華奢で美しい喉をふくらませた。',
        );
        await ruby.say_and_wait('んぅっ！ ん……！');
        await era.printAndWait(
          '普段は凛として美しい顔が、あまりの苦痛に涙と鼻水で濡れている。',
        );
        await era.printAndWait('フィアンセ「出る！ 全部飲め！」');
        await era.printAndWait(
          '婚約者がそう言ったあと、一気に彼女の頭を根元まで押しつけて射精した。精液は驚くほどの量で、鼻と口から溢れた。',
        );
        await ruby.say_and_wait('ん……ん……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はごくり、ごくりと精液を飲み干した。',
        ]);
        await ruby.say_and_wait('はあっ……！ うんっ……はぁ……');
        await era.printAndWait([
          'ようやく ',
          ruby.get_colored_name(),
          ' の喉から抜かれた巨根は、粘い精液と唾液を纏い、唾の糸が豊潤な唇から伸びている。',
        ]);
        await era.printAndWait(
          '瞳の焦点は合わず、酸欠のようで視線は濁っている。口角は根元まで含んだせいで男の陰毛が付き、口の中にまで入り込んでいた。',
        );
        await era.printAndWait([
          '婚約者は巨根を ',
          ruby.get_colored_name(),
          ' の顔に乗せ、溢れた精子をそのまま美しい頬へ塗りつけた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の顔は精液で塗られ、口から唾が滴り、息も十分にできない。',
        ]);
        await era.printAndWait('もう、抗う意思はないのだろう。');
        await ruby.say_and_wait('ん♥あっ♥あっ♥あっ♥');
        await ruby.say_and_wait('お♥♥おっ♥♥♥♥');
        await ruby.say_and_wait('んあぁ♥んん♥');
        await ruby.say_and_wait('ぐっ♥ふん♥');
        await ruby.say_and_wait('お〜っ♥');
        await era.printAndWait(
          'それは獣の声だった。強い雄へ、巨根へ媚びる、下品な声。',
        );
        await you.say_and_wait('ルビー……？', true);
        await era.printAndWait([
          'ありえない。',
          ruby.get_colored_name(),
          ' が、こんな汚い声で情けなく喘ぐなんて。',
        ]);
        await era.printAndWait('巨大な浅黒い雄が、白い雌を犯している。');
        await era.printAndWait(
          '雄は上から押さえ、腰を強く振り、雌は汚い喘ぎを漏らしながら、脚を雄の腰へ絡めて抱きついていた。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の秘部を出入りする漆黒の巨根は、圧倒的な大きさで大きな弧を描く。',
        ]);
        await era.printAndWait(
          '荒々しく腰を振り、巨根を女の体へ押し込む。それはほとんど強姦のようだった。',
        );
        await era.printAndWait(
          '見つめ合うたび、何度も深い口づけを交わす。親密度の高い体位は、本来恋人同士でしかしないものだ。',
        );
        await ruby.say_and_wait(
          'お♥お♥おっ！ すごい♥一番奥まで届きますわ♥うおおおっ！',
        );
        await era.printAndWait(
          '彼女が下品にそう叫ぶと、婚約者は嬉しそうに問うた。',
        );
        await era.printAndWait(
          'フィアンセ「トレーナーのちんこと、俺の巨根、どっちがいい？」',
        );
        await ruby.say_and_wait(
          'あっ！ こちらですわ！ こちらの大きい方♥トレーナーが届かないところまで届きますの♥',
        );
        await era.printAndWait(
          'フィアンセ「はは、本当に巨根が好きなんだな！」',
        );
        await ruby.say_and_wait(
          '好きですわ！♥大きいのが好き！♥ちっちゃいトレーナーとは、生き物としての格が違いますわ♥',
        );
        await era.printAndWait(
          'フィアンセ「だろ。あんなゴミトレーナーは捨てちまえ！」',
        );
        await ruby.say_and_wait(
          'だめ♥あの方の悪口はだめですわ♥ただ、ちんこが大きくないだけ♥包茎の子供ちんこですわ♥優しいところが好きなんですもの♥だめ♥',
        );
        await era.printAndWait(
          'フィアンセ「優しくても、男としては無価値なゴミだ！」',
        );
        await ruby.say_and_wait('だめ♥本当のことは、だめですわ♥');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は喘ぎながらそう叫び、それを聞いた彼の腰はますます速く動き、スパートを始めた。',
        ]);
        await ruby.say_and_wait('わああっ♥だめ♥だめ♥だめ♥いきそうです〜♥♥♥');
        await era.printAndWait(
          'それから、婚約者も体を震わせながら射精し始めた。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は「ほっほっほっ♥」と喘ぎ、絡めた両脚を伸ばし、快感に震えた。',
        ]);
        await era.printAndWait([
          '彼が体を離れて立ち上がると、',
          ruby.get_colored_name(),
          ' の秘部からぬるりと巨根が抜ける。もちろん避妊具はつけておらず、精液がぽたぽたと滴った。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は白目を剥き、脚も体も痙攣している。秘部からは行き場を失った精液が溢れていた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は中出しを受けた。',
        ]);
        await era.printAndWait([
          '婚約者は力の抜けた ',
          ruby.get_colored_name(),
          ' を軽く抱き上げ、可愛い脚の関節に腕をかけた。',
        ]);
        await era.printAndWait([
          '黒光りする肉棒が、再び濡れきった ',
          ruby.get_colored_name(),
          ' の秘部へ押し込まれた。',
        ]);
        await ruby.say_and_wait('わあ！♥');
        await era.printAndWait([
          '一気に奥まで突き上げられ、',
          ruby.get_colored_name(),
          ' は汚い声で喘いだ。激しい抽送のたび、',
          ruby.get_colored_name(),
          ' のふっくらした嫩乳が揺れる。',
        ]);
        await ruby.say_and_wait(
          '見ないで♥見ないでくださいまし♥こんなわたくしを♥お願い♥おおっ♥♥♥',
        );
        await era.printAndWait(
          '彼女は、見ないでと叫ぶ。普段保っている姿とはかけ離れ、こんな自分を見せたくないのだろう。',
        );
        await era.printAndWait(
          'そのとき婚約者が耳元で囁いた。彼女は吐息を漏らしながら頷く。それから、あなたへ言った。',
        );
        await ruby.say_and_wait(
          '見ないで♥変態♥ちんこ変態、死んで♥死んでくださいまし♥',
        );
        await era.printAndWait(
          '息もままならないのに、なおあなたへ侮蔑の言葉を吐く。',
        );
        await ruby.say_and_wait(
          '包茎は死んで♥愛馬を奪われたゴミは死んで♥死んで♥死んで♥死んで♥',
        );
        await era.printAndWait(
          'それを聞いた婚約者は、さらに強く挿入した。耳元の囁きは、「もっと気持ちよくしてやるから、トレーナーの悪口を言え」といった命令だったのだろう。',
        );
        await ruby.say_and_wait(
          '死んで♥劣等遺伝子は死んで♥この世に生きる価値はありませんわ♥',
        );
        await you.say_and_wait('これがルビーの本心なのか？', true);
        await ruby.say_and_wait('えっ♥あぁ〜♥');
        await era.printAndWait(
          '脚を伸ばし、痙攣する。唾が口から滴り、瞳は上を向く。全身を巡る快感から逃れようと、体をだらりとさせた。',
        );
        await era.printAndWait([
          'その光景を見た婚約者は、',
          ruby.get_colored_name(),
          ' をベッドへ放り投げた。',
        ]);
        await ruby.say_and_wait(['……ごめんなさい、', callname, '……']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
