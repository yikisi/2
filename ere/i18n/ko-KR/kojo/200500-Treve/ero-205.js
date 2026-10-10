/**
 * @file トレヴ - 調教
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve
   * @param {CharaTalk} you
   */
  async ero_start(treve, you) {
    await era.printAndWait([
      treve.get_colored_name(),
      ' のような相手なら、その人生そのものに大きな影響を与え、後半生で何度も自分を思い出させ、想い続けさせることができる。それは ',
      treve.get_colored_name(),
      ' の人生そのものを「犯した」ような充足感で、快感は言いようもない。',
    ]);
    await era.printAndWait(
      '心の充足は十分に酔える。だが肉体の充足を求めるなら、実際の接触を通さなければならない。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      treve.get_colored_name(),
      ' を地面に下ろし、服を',
      treve.sex,
      'の柔らかい背中の下に敷く。位置を整えると、',
      treve.uma_sex_title,
      'の若い肢体——とりわけ瑞々しく立つ桃色の胸が、完全に ',
      you.get_colored_name(),
      ' の目の前に晒される。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      treve.get_colored_name(),
      ' の意識が朦朧としている隙に、舌を蕾のように膨らんだ優美な弧に沿わせて軽く舐め撫でる。舌先は柔らかく、行き届いて、',
      treve.sex,
      'の一寸一寸の桃色く潤んだ肌を外から内へ、下から上へ、胸を欲しいままに侵し、峰の頂の一点の紅へ向かう。',
    ]);
    await treve.say_and_wait('だめ……そんなことしないで、放して……');
    await treve.say_and_wait('せっかく忘れたのに、またあなたに……');
    await treve.say_and_wait('んっ……');
    await era.printAndWait(
      `${treve.name} の弱い拒絶など意に介さず、${
        you.name
      } は侵食を続ける。何度か舐め、吸い、歯で${treve.teen_sex_title}の桜のような可憐な蕾を軽く挟み、舌先で往復して挑む。熱い欲望はただちに電流となり、奔る血に溶け、${
        treve.name
      } に残っていたわずかな清醒を削っていく。`,
    );
    await era.printAndWait(
      `${treve.sex}の意志がどうあれ、${you.name} の巧みな挑発の下で、桃色の先端は舐められて立ち上がり膨らみ、紅い珠のようになる。${you.name} は思い切って丸い右乳を掴み、半球の頂を包み、雪のような胸の弾力と張りを感じ、何度か強く揉みしだく。`,
    );
    await era.printAndWait(
      `滑るように柔らかい感触と、${treve.teen_sex_title}が抑えきれない低い呻きが響き合い、${
        you.name
      } はもう一方の丸い丘でも力を強めてかき回す。${treve.teen_sex_title}の下腹が短く波打ち、白い肌の一寸一寸が興奮の衝撃に、波のように揺れる。`,
    );
    era.printButton('「自分の体がどれだけ淫らか、もう分かってるだろ？」', 1);
    era.printButton('「俺に出会わなくても、お前は抗えただと思うか？」', 2);
    if ((await era.input()) === 1) {
      await treve.say_and_wait('あなた……でたらめよ。頭は下げない。');
    } else {
      await treve.say_and_wait('あなたには、絶対に負けない。');
    }
    await era.printAndWait(
      `否定しても、${
        treve.name
      } は春情に火のついた自分の肉体には逆らえない。${treve.uma_sex_title}の血がもたらす発情は、いますべて欲火となり、首筋の軽い舐め噛みでも、胸や腹の摘まみ挑みでも、${
        treve.sex
      }は愛欲を溢れさせ、雲の中を飛ぶような快楽に身を委ねる。`,
    );
    era.printButton('さらに辱める', 1);
    await era.input();
    await you.say_and_wait(
      '負けない、だと？なら俺の指についてる、この濡れて粘るものは何だ？嗅いでみるか？何を抵抗してる？お前の体を俺以上に分かってる人間はいない。この変態の小さな露出狂、見られてるだけで、もう……',
    );
    await era.printAndWait(
      `${you.name} は軽く嘲り、${
        treve.name
      } の羞恥と怒りで死にそうな表情を見て、目に得意が光る。再び身を屈め、${treve.teen_sex_title}の優美な首筋を侵す。左手の五指で、ゆったりと${
        treve.sex
      }の張りつめた繊細な背を撫で、曲線の素直な脊椎と尾の根を軽く弄り、踊るようだ。右手は${
        treve.sex
      }の熱い下半身から螺旋を描いて上がり、指にきらきらと濡れた一片をつけたまま、${
        treve.sex
      }の眼前で揺らし、示威する。`,
    );
    await era.printAndWait(
      `一連の愛撫は、${treve.name} に冷静に抗う余地をまったく残さない。敏感な肉から頻りに来る強い快感が、${treve.sex}の意志と心を侵食する。`,
    );
    await treve.say_and_wait('んっ。');
    await era.printAndWait(
      `${
        treve.sex
      }のますます急な呼吸とともに、${treve.teen_sex_title}はついに耐えきれず呻きを漏らす。`,
    );
  },
  /**
   * @param {CharaTalk} treve
   * @param {CharaTalk} you
   */
  async ero_end(treve, you) {
    era.printButton('「俺に頭を下げないと誓ったよな？」', 1);
    era.printButton('「あのとき、頭はどこまで下がってた？」', 2);
    era.printButton('「さっき頭をどこに置いてたか、忘れたか。」', 3);
    await era.input();
    await era.printAndWait(
      `${treve.name} の美しい目から、そっと透き通った涙が滑り、${treve.sex}の艶やかな睫毛を濡らし、自信に満ちた外見の下にある、柔弱で无助な心を晒す。`,
    );
    await era.printAndWait(
      `その楚々とした表情も、${you.name} の冷静を乱しはしない。${you.name} はただ舌を出し、${treve.name} の白い頬に沿って二筋の涙跡をゆっくり舐め取り、${treve.sex}の顔の湿った冷たさが消えないうちに、耳元へ口を寄せて低く語る。`,
    );
    era.printButton('「一夜の夫婦は百日の恩、honey。」', 1);
    era.printButton('「こんなに夜を費やしたんだ、俺にも楽しませろよ？」', 2);
    await era.input();
    await era.printAndWait(
      `${you.name} は低く話し、右手で乳房を揉む力をわずかに強め、${treve.name} に抑えきれない嬌声を上げさせる。`,
    );
    await era.printAndWait(
      `${you.name} の言葉を聞き、${treve.name} は固く閉じた瞼を、抑えきれず何度か震わせる。`,
    );
    await era.printAndWait(
      `${you.name} は冷たく笑い、両手で ${treve.name} の凝脂のような細い腰を抱え、全身を半分${treve.sex}の上に乗せ、言葉の脅威をさらに増す。`,
    );
    await era.printAndWait(
      `${treve.name} はいくつか咽びを漏らすが、${you.name} が膝を突き上げて${treve.sex}の韻のある長い脚を左右に開くと、${treve.sex}はほとんど抵抗せず、${you.name} に両脚を開かせ、半ば ${you.name} の上に座らされた形になる。`,
    );
    await era.printAndWait(
      `${treve.name} の涙跡の残る顔に、自棄の覚悟が走り、弓を引くように ${you.name} へ抱きついてくる。白い両脚も ${you.name} の後ろ腰に絡み、下からきつく ${you.name} を抱きしめた。`,
    );
    await era.printAndWait(
      `こうして ${you.name} は止まらず、${treve.sex}が白目を剥いて気を失いかけたところで、ようやく${treve.sex}を下ろす。`,
    );
    await era.printAndWait(
      `一息ついたあと、${you.name} は素早く後始末をする。`,
    );
  },
};
