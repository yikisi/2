/**
 * @file 調教の地の文 - 通常
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');

module.exports = {
  /** コミュニケーション系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} chara 現在の視点キャラ
   * @param {boolean} is_attacker 現在の視点キャラが攻撃側か
   */
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait('やっぱり、だめだったか……');
      await chara.print_and_wait(
        '空気に乗せて口にした下品なねだりも、さすがに限度があるらしい……',
      );
      await chara.print_and_wait(
        'こうして、体の奥はまだざわついたまま、今日はここで終わりにするしかない。',
      );
      await chara.print_and_wait('ただ……');
    } else {
      await chara.print_and_wait('そんな目をしないでほしい……');
      await chara.print_and_wait(
        '何でもこちらが従うとでも思っているのだろう！',
      );
      await chara.print_and_wait('……まったく');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('こういう時は、やっぱりあれがしたくなる……');
      await attacker.print_and_wait([
        '視線の先に気づいたのだろう。目を細めた ',
        a_call_d,
        ' が、つま先立ちで自ら唇を寄せてきた……',
      ]);
      await defender.say_and_wait('ちゅ……❤️');
      await attacker.print_and_wait('安心してしまう、甘い味……');
      await attacker.print_and_wait(
        'こちらが鼻から漏らす吐息が、向こうの滑らかな首筋にそのまま当たり、きれいな睫毛がそれに応えてまたたく……',
      );
      await attacker.print_and_wait(
        '……唇を離したくない……このまま、欲張って張り付いていよう……',
      );
    } else {
      await defender.say_and_wait('はぁ……はぁ……❤️');
      await defender.print_and_wait(
        'もう、満足してくれてもいいのに……執拗に追いかけてくる唇……',
      );
      await defender.print_and_wait(
        '鼻も唇も……息をするための道を、欲張りな相手がほとんど塞いで、下腹が疼くような甘い匂いを意地悪く頭の中へ吹き込んでくる……',
      );
      await defender.print_and_wait(
        'ん……もしこれから、ひとりで息をする寂しさに慣れられなくなったら、責任を取ってもらわないと……❤️',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait('唇の手前で止まるつもりはなかった。');
      await defender.say_and_wait('ん——？');
      await attacker.print_and_wait([
        `キスのなかで${attacker.phy_sex_title}の腕に閉じ込められていく `,
        defender.get_colored_name(),
        ' は、慌てて ',
        attacker.get_colored_name(),
        ' の名を呼ぼうとしたのだろう。けれど、侵略的に絡みつく舌が、漏れた声をただ甘く沈めた音に変えてしまう。',
      ]);
      await attacker.print_and_wait(
        '唇が重なった正面、さらに深く傾ける横顔、そして最後は……後ろに回した腕で、力が抜けた恋人を抱き上げて見下ろす、舌。',
      );
      await defender.say_and_wait('……息が、できない……', true);
    } else {
      await defender.print_and_wait('頭がふわふわする……');
      await defender.print_and_wait(
        '抱擁、それから——どれだけ経ったのか分からないほど長い、舌まで欲張って入り込んでくるキス……',
      );
      await defender.print_and_wait(
        'いったいどれくらいだろう……たまに唇を離して休んでも、粘る銀糸で繋がったままで、この唇は最初から分かれてはいけなかったみたいだ……顔まで熱い。',
      );
      await defender.print_and_wait('でも……嫌じゃない……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} success いちゃつきが成功したか
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, ' が興奮してきた……']);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        a_call_d,
        ' は、これ以上興奮できないみたいだ……',
      ]);
    } else {
      await attacker.print_and_wait('あまり効いていないようだ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.uma_sex_title,
        'の耳は、感情の出し方がどの動物に近いんだろう。',
      ]);
      await attacker.print_and_wait('不満そうに睨まれた。');
      await attacker.say_and_wait('……っと……たとえば、猫の耳が熱いときは……');
      attacker.print('尻を蹴られた。');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('将来、子供は何人がいいだろう……');
      await attacker.print_and_wait([
        '向かいの ',
        a_call_d,
        ' の下腹を見て、本音がこぼれてしまった。',
      ]);
      await attacker.print_and_wait('……蹴られてもいない……返事もない');
      attacker.print('……でも、顔はひどく赤い。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait('えっ……？');
    await defender.print_and_wait([
      'すぐそばにいた ',
      d_call_a,
      ' が急に距離を取った。下に押さえられていた ',
      defender.get_colored_name(),
      ' は、瞬きして、すぐには状況が飲み込めない。',
    ]);
    await defender.print_and_wait('次の瞬間、眼前が天地逆転する……');
    await attacker.say_and_wait('今から、君の番だ。');
    await defender.print_and_wait([
      '両手を開いた ',
      d_call_a,
      ' が、励ますような笑顔を見せる。',
    ]);
    attacker.say('……どうしてもいいよ。');
  },
  /**
   * @author O口口口口口
   * @author 幽白書
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続の抵抗の初回か
   * @param {boolean} success 抵抗が成功したか
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // 孕袋が主人に抵抗
        if (success) {
          // 抵抗成功、孕袋の主視点
          await attacker.print_and_wait('孕袋のくせに、主導を奪おうとする');
          await attacker.print_and_wait('この大逆も、主人は黙って許してくれた');
          await attacker.print_and_wait('淫らな母畜への恩寵だろうか？');
          await attacker.print_and_wait(
            'それとも……自ら欲に沈む姿を、もう少し見物したいだけか？',
          );
        } else {
          // 抵抗失敗、孕袋の主視点
          await attacker.print_and_wait(
            '孕袋である以上、服従と従順は精神の底に焼き付いた刻印のはずなのに',
          );
          await attacker.print_and_wait('どうして、それでも抗おうとしたのか？');
          await attacker.print_and_wait(
            'まだ堕ちたくないという、細い糸が残っていたのか？',
          );
          await attacker.print_and_wait(
            'それとも……無理やり従わされる快感を、もっと深く味わいたかっただけか？',
          );
        }
        // 主人が孕袋に抵抗
      } else if (success) {
        // 抵抗成功、孕袋の主視点
        await defender.print_and_wait(
          'どれだけ抗っても、心の底の服従には勝てない',
        );
        await defender.print_and_wait(
          '主人のひと動作で、抵抗などきれいさっぱり手放してしまう',
        );
        await defender.print_and_wait(
          '主導を許されたのも、孕袋である自分が服従の性を思い知るためだろう……',
        );
      } else {
        // 抵抗失敗、主人の主視点
        await attacker.print_and_wait([
          a_call_d,
          ' が体を揺らし、欲と肉体に溺れている様',
        ]);
        await attacker.print_and_wait(
          'かつてのトレーナーとしての矜持など、もはや見当たらない',
        );
        await attacker.print_and_wait('もう少し見ていよう、ほんの少しだけ');
        await attacker.print_and_wait([
          '指導者であるはずの ',
          a_call_d,
          ' が、どこまで堕ちられるかを',
        ]);
      }
    } else {
      // @author O口口口口口
      if (is_first) {
        await defender.say_and_wait('動かない方がいいよ。');
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          ' に跨った ',
          a_call_d,
          ' が、唇を舐めて、どこか見知らぬ表情を浮かべている。',
        ]);
        await attacker.print_and_wait(
          '一方的に下に押さえられるなんて……簡単に慣れてたまるか！',
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait('動かない方がいいよ。');
        await attacker.print_and_wait([
          'さっきの言葉を、目の前の ',
          a_call_d,
          ' にそっくり返す。戸惑う顔を見て、今の ',
          attacker.get_colored_name(),
          ' の顔は、得意げな笑いでいっぱいだ。',
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['やっぱり、人間は', defender.uma_sex_title, 'には敵わない……'],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ['やっぱり、自分は ', a_call_d, ' には敵わない……'],
            true,
          );
        }
        await attacker.print_and_wait([
          'あっさりと再び下に押し戻され、',
          attacker.get_colored_name(),
          ' の頭に、そんな一文が閃いた。',
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            [
              'おかしいだろ、そっちだって',
              defender.uma_sex_title,
              'じゃない！',
            ],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['おかしいだろ、こちらこそが', attacker.uma_sex_title, 'なのに！'],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['おかしいだろ、こっちだって', attacker.uma_sex_title, 'なのに！'],
            true,
          );
        }
        await attacker.say_and_wait('ぐっ……', true);
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: 'ちゅ……' },
      { color: defender.color, content: 'ん……！？' },
      '」',
    ]);
    await era.printAndWait(
      '蕩けきったふたりの唇は、また近づいたところで、触れる前に離れた。',
    );
    await era.printAndWait('慌てて瞬きを重ね、頭を掻いて視線を逸らす……');
    await attacker.say_and_wait([a_call_d, '……']);
    await defender.say_and_wait([d_call_a, '……']);
    await era.printAndWait('たたたた……');
    await era.printAndWait('ごくごくごく————');
    await era.printAndWait(
      'それから洗面台の前に並ぶのは、ハムスターのように頬を膨らませた、顔の赤いバカカップルだった。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async wipe_body(attacker, defender) {
    await defender.say_and_wait('まだ……続けるの……❤️');
    await attacker.print_and_wait(
      '向こうの、本来なら滑らかなはずの肌に、今は甘い痕が散らばっている……やりすぎたかもしれない……',
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '……相手の体に自分で塗りつけた下品な匂いを吸い切った、みっともないタオルを手にすれば、少しでも共感できる人間なら、さすがに手を緩めたくなるだろう。',
    );
    await attacker.print_and_wait('……だよな……？');
  },
  /** 愛撫系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        'の耳は、やはり憧れてしまうものだ。四肢の延長としても、表情の延長としても、あるいは……性感帯の延長としても……',
      ]);
      await attacker.print_and_wait([
        `指先で蜻蛉の水打ちほどにそっと触れただけなのに、`,
        attacker.get_colored_name(),
        ` がその細やかな感触を味わい切る前に、尖って長い馬耳は恥ずかしそうに ${attacker.phy_sex_title} の指の間から逃げていった。`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait(
        'お願い……もう一度撫でて。今度は逃げないから。',
      );
      await attacker.print_and_wait([
        '腕の中の ',
        a_call_d,
        ' は、今、顔が赤い。',
      ]);
    } else {
      await attacker.print_and_wait('ふふ……');
      await attacker.print_and_wait(
        '掌に、もう逃げない馬耳がある。細かな産毛が指腹を撫でて……身も心も癒される気がする。',
      );
      await attacker.print_and_wait('これが恋人の特権なのだろうか……');
      await attacker.print_and_wait('ただ、今はあちらの具合が気になって……');
      await attacker.print_and_wait([
        '見えない糸で繋がっているみたいに、',
        a_call_d,
        ' の両脚が、',
        attacker.phy_sex_title,
        'の、馬耳に吸いついた手に合わせて、恥ずかしそうに小刻みに震える。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait('これは、よくない……');
    await attacker.print_and_wait('……恋人がするべきことではない……');
    await attacker.print_and_wait('……それでも');
    await attacker.print_and_wait([
      'ただ優しい愛撫では足りず、下腹から湧く支配欲に呑まれた',
      attacker.phy_sex_title,
      'は、指の力を安全に増していく術を、だんだん覚えていく……',
    ]);
    await attacker.print_and_wait([
      '……そうすれば、下の馬耳の',
      defender.phy_sex_title,
      'にも分かるはずだ。体内で目覚めつつある、人間に向かって尻尾を振る血の記憶が、いつどこから来たのかを……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      a_call_d,
      ' の弱々しい姿に、憐れみも満足も微塵も感じない。簡単には満たされない ',
      attacker.get_colored_name(),
      ' は、さらに両手を伸ばし、林檎が落ちる力に従って形を強調する美乳を掴んだ。',
    ]);
    await defender.say_and_wait('はぁ……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' は、盈々とした乳肉を包む五指まで力を込め、',
      a_call_d,
      ' 自身の柔らかさを、自分好みの形へと勝手に変えていく。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        'の柔らかさが……今、掌に落ちてきた。',
      ]);
    } else {
      await attacker.print_and_wait(
        '誘うような柔らかさが……今、掌に落ちてきた。',
      );
    }
    await attacker.print_and_wait(
      '我慢できない指先が勝手に動き出し、目の前の柔らかさに指紋を残し、自分好みの形にしたくなる。',
    );
    await defender.say_and_wait('ん……');
    await attacker.print_and_wait([
      a_call_d,
      ' の体が自分の指に合わせて揺れ、甘い声を漏らす……はぁ、認めざるを得ない。この感触は、止めたくなくなるほどいい……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait([
      'ああ、こちらでももう分かる……目の前の ',
      a_call_d,
      ' の体は、自分の触れ方で張りつめ、自分の触れ方で寂しがっている……',
    ]);
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait('それでも、もう少しだけわがままを通したい。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait('熱い……');
      await attacker.print_and_wait(
        '白い乳肉に埋まった小さな肉粒なのに、とんでもない熱を放っている',
      );
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        '指で乳輪を円に撫で、桃色の点を指腹で押さえ、少しずつ腫れ、少しずつ立ち、指に抗う硬さになっていくのを見る……',
      );
      await attacker.print_and_wait('……それから力を足して、潰すように揉む。');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait(
        defender.race > 0 ? 'ああ、尻尾でお仕置きされた。' : 'ああ、叩かれた。',
      );
    } else {
      await attacker.print_and_wait('このまま搾れば、乳が出るかもしれない……');
      await attacker.print_and_wait(
        '連なる愛撫で硬くなった、下品な乳首を見ていると、ついそう思ってしまう……',
      );
      await defender.say_and_wait('やぁ——');
      await attacker.print_and_wait([
        a_call_d,
        ' が俯いて息を乱している隙に、指で乳首を上へ引き上げてみる……',
      ]);
      await attacker.print_and_wait('慌てた顔が、とても美味しい。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        a_call_d,
        ' の両脚を開き、',
        defender.sex,
        'の剥き出しの下腹部を、こうしてじっと見つめる……',
      ]);
      await attacker.print_and_wait(
        'もう引き返せない……なのに、そのせいでかえって昂ぶってしまう……',
      );
      await attacker.print_and_wait(
        '指で、桃色の小さな肉粒を覆う皮を揉み開き、敏感な陰核が空気に晒されて、可愛い桃色から、より淫らな充血の赤へ変わっていくのを見る。',
      );
      await attacker.print_and_wait('……安心しな。優しくするから');
    } else {
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ああ、いつの間にか、こんなに赤く腫れた可哀想な姿になっていた。',
      );
      await attacker.print_and_wait([
        'そっと触れて、少しだけ辛抱強く待てば、この小さな敏感な突起は ',
        a_call_d,
        ' の無垢な体を、だらしなく動かし始める……',
      ]);
      await defender.say_and_wait('やぁ——');
      await attacker.print_and_wait('もう一度だけ見よう。これが最後だ。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async finger_fuck(attacker, defender) {
    await defender.say_and_wait('ん……');
    await attacker.print_and_wait(
      '体の反応はまだ硬いのに、秘部は苦もなく人差し指の先から第一関節まで含んでしまった……',
    );
    await attacker.print_and_wait('指が、熱く口づけされている。');
    await attacker.print_and_wait(
      '上へ鉤し、下へ擦り、襞の蠕動に合わせて、両側へ……',
    );
    await attacker.print_and_wait(
      'はぁ……脚をそんなに締められたら、続けられないよ。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      '慎重に二本の指を入れ、自分の前に開かれた、',
      defender.teen_sex_title,
      'の細い一本の縫い目のような狭い秘部を、裏返すように開く。',
    ]);
    await attacker.print_and_wait('きれいだ……');
    await defender.say_and_wait('そんなにじっと見ないで……');
    await attacker.print_and_wait(
      '狂ったように揺れる尻尾がそう呟いた。けれど……',
    );
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait(
      'ふぅ。指で秘部を押し広げるほど、指の間に、蠕動するなかから押し出される熱い息が吹き、くすぐったいほどに誘ってくる。',
    );
    await attacker.print_and_wait('もう一本足しても、いいだろう。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.sex,
        'をもっと楽にしたい。',
        defender.sex,
        'の秘部をもっと柔らかくしたい。このきれいな体を、自分の動きで、もっと夢中に捻らせたい……',
      ]);
      await defender.say_and_wait('はぁ……はぁ……');
      await attacker.print_and_wait(
        '指を動かすだけなのに、頭の中で暴走する欲が、息を荒くさせる。',
      );
      await attacker.print_and_wait('どこだ……もう近いはずなのに……');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait([
        '周りの襞とは違う、わずかな盛り上がりに指が吸い寄せられ、その微かな膨らみだけが持つ熱と、湿った感触が分かる……答え合わせをしてくれたのは、急に反った ',
        a_call_d,
        ' の腰と、犯行の腕を挟んだ両脚だった。',
      ]);
      await attacker.print_and_wait('……見つけた。');
    } else {
      await attacker.print_and_wait('押し潰す。');
      await attacker.print_and_wait('揉みほぐす。');
      await attacker.print_and_wait('突き弄る。');
      await attacker.print_and_wait('鈍い爪先で、くすぐるように掻く。');
      await attacker.print_and_wait([
        'この手が飽きるまで、いつの間にか泥のように溶けて汗ばむ ',
        defender.get_colored_name(),
        ' に、快楽がなぜ毒と呼ばれるのかを、たっぷり教えてやろう。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('んっ——！？');
      await attacker.print_and_wait([
        '少し遅れたが、目の前の尻の',
        defender.adult_sex_title,
        'は、こちらの意図に明らかに気づいた。',
        attacker.get_colored_name(),
        'の指が甘く寄り、体がちょうど警戒する程度の粗い感触で、小さな穴口を円に撫でる。',
      ]);
      await attacker.print_and_wait([
        'その「ちょうどいい」警戒は……',
        a_call_d,
        ' が無意識に指へ媚びて突き出す尻に現れている……',
        defender.race > 0 ? 'そして、ふらつく馬の尻尾にも……' : '',
      ]);
    } else {
      await defender.print_and_wait('だから……本当にあそこを攻める気なの……');
      await defender.print_and_wait([
        `気のせい……だろうか……`,
        d_call_a,
        `……こういう焦らし方が、やけに気に入っているみたいで……`,
      ]);
      await defender.print_and_wait(
        '体を硬く保つことなど、もうできない。甘い愛撫に溶けた自分の尻穴は、いつの間にか緩み、何を飲み込んでもおかしくない色穴になっていた。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `掌で、目の前で開閉する穴から吐かれる熱い息を感じながら、四本の指を杭のように立て、恥ずかしさに秘部を閉じようとする臀肉を、${attacker.phy_sex_title}の視線から逃げられないよう固定する。`,
    );
    await attacker.print_and_wait(
      'とりわけ太い中指だけが別の仕事を持つ。蠍の尾のようにわずかに曲がり、尻穴へ近づき、それから遅く、しかし決然と挿し入る。',
    );
    await attacker.print_and_wait('抵抗が強い。');
    await attacker.print_and_wait([
      '自ら蠕動する襞が、生き物のように息をして ',
      attacker.get_colored_name(),
      ` の指を押し返す。隣の秘部のように交わりのためにある淫肉ではないのに、今の${attacker.phy_sex_title}の指に対しては、意外なほど積極的だ。`,
    ]);
    await attacker.print_and_wait('恐れているのか……喜んでいるのか……？');
    await attacker.print_and_wait([
      '喘いでいる ',
      a_call_d,
      ' 自身にも分からない。恥ずかしそうに蠢く尻穴の奥から走り、背筋を駆け上がって体を震わせる電流が、何を意味するのかを。',
    ]);
    await defender.say_and_wait('また……奥へ……最初の関節……もう全部……', true);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          'トレーナーとして、目の前の担当の両脚を、性の意味で眺め、撫でる……',
        );
        await attacker.print_and_wait(
          '今していることを、抑えた言葉で言い表すだけで、体が冷える背徳が寒気となって全身を走る。',
        );
        await attacker.print_and_wait(
          '調教後に状態を確かめるため、たまに手で撫でる親しみはあったはずなのに……',
        );
        await attacker.print_and_wait(
          '不思議なことに、今の頭は、この両脚を「レース」と結びつけることができない',
        );
      }
      await attacker.print_and_wait('今の自分の頭にあるのは……');
      await attacker.print_and_wait(
        'この脚に交差して腰を絡まれたら、きっとたまらない、という想像だけだ。',
      );
    } else {
      await attacker.print_and_wait('柔らかく、弾力がある。');
      await attacker.print_and_wait('曲線は優雅で、長い。');
      await attacker.print_and_wait('指の愛撫で震える、見事な敏感さがある。');
      if (defender.race > 0) {
        await attacker.print_and_wait('惜しいな……');
        await attacker.print_and_wait(
          'こんな脚が、レースのためだけにあるなんて……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_tail(attacker, defender) {
    await attacker.print_and_wait('ずいぶん新鮮な体験だ。');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        'なにしろ、',
        defender.uma_sex_title,
        'の尾骨の根元から伸び、普段は制服のスカートの後ろで、見える風のように揺れている尻尾なのだから。',
      ]);
    }
    await attacker.print_and_wait(
      '鼻歌を混ぜて優しく撫で、指を滑らかな尻尾の毛に沿って根元へ滑らせ、両手を尻尾の付け根の秘めやかな匂いで印す……',
    );
    await attacker.print_and_wait('ああ……そういえば……');
    await defender.say_and_wait('嗅がないで！', true);
    await attacker.print_and_wait(
      'そう叱られたみたいに、上げようとした手が尻尾にきつく巻かれ、動けなくなる。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('おぉ～');
      await attacker.print_and_wait([
        '下の ',
        a_call_d,
        ' の口から漏れる、蕩けた喘ぎは毒だ。',
      ]);
      await attacker.print_and_wait(
        `尻尾を引けば目の前の${defender.uma_sex_title}が素直に従うと知ったあと、下腹から突き上げる熱は、さらに止めにくくなった。`,
      );
    } else {
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait(
        '少し力を足せば尻が上がり、そこで手を緩めれば、腰まで落ちる……',
      );
      await attacker.print_and_wait([
        'おいおい……自分が今、',
        attacker.phy_sex_title,
        'の前でどんな動きをしているか、分かっているのか、可哀想な ',
        a_call_d,
        '？',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('んんんん————');
      await attacker.print_and_wait(
        '口に含まない理由などない。眼前で下品な雌の匂いを放つ、充血した豆を保護から剥き出し、ひとりで震えていさせる理由などない。',
      );
      await attacker.print_and_wait([
        'だから ',
        attacker.get_colored_name(),
        ' は深く身を屈め、頭を ',
        a_call_d,
        ' の大きく開いた両脚の間へ埋めた。',
      ]);
      await attacker.print_and_wait(
        '反射で閉じようとする太股の間が震えている。',
      );
      await attacker.print_and_wait('腰に回した膝が震えている。');
      await attacker.print_and_wait('腰の後ろで組んだ両足が震えている。');
      await attacker.print_and_wait('ああ……どうして急にこうなったのだろう……');
      await attacker.print_and_wait(
        'まさか、舌でさらに濡らされているこの陰核のせいではあるまい。',
      );
    } else {
      await attacker.print_and_wait('舌先で弄ぶ。');
      await attacker.print_and_wait('吸って、立たせる。');
      await attacker.print_and_wait('そっと息を吹きかける。');
      await attacker.print_and_wait('少し困ってしまう……');
      await attacker.print_and_wait([
        '目の前の陰核を、どのやり方で刺激しても、目の前の ',
        a_call_d,
        ' が同じように歓びに震えるなら、どれが好きなのか分からないではないか。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('お願い……');
      await defender.print_and_wait([
        'まだ羞じらいを残したまま、目の前の ',
        d_call_a,
        ' が自分の両手で、震える両脚をこちらへ開いてくれた',
      ]);
      await defender.say_and_wait('んんんん————');
      await defender.print_and_wait(
        '口に含まない理由などない。眼前で下品な雌の匂いを放つ、充血した豆を保護から剥き出し、ひとりで震えていさせる理由などない。',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は深く身を屈め、頭を ',
        d_call_a,
        ' の大きく開いた両脚の間へ埋めた。',
      ]);
      await defender.print_and_wait(
        '反射で閉じようとする太股の間が震えている。',
      );
      await defender.print_and_wait('腰に回した膝が震えている。');
      await defender.print_and_wait('腰の後ろで組んだ両足が震えている。');
      await defender.print_and_wait('ああ……どうして急にこうなったのだろう……');
      await defender.print_and_wait(
        'まさか、舌でさらに濡らされているこの陰核のせいではあるまい。',
      );
    } else {
      await defender.print_and_wait('舌先で弄ぶ。');
      await defender.print_and_wait('吸って、立たせる。');
      await defender.print_and_wait('そっと息を吹きかける。');
      await defender.print_and_wait('少し困ってしまう……');
      await defender.print_and_wait([
        '目の前の陰核を、どのやり方で刺激しても、目の前の ',
        d_call_a,
        ' が同じように歓びに震えるなら、どれが好きなのか分からないではないか。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('お願いだよ～');
      await defender.print_and_wait([
        '自ら両脚を開いた ',
        d_call_a,
        ' が、下の ',
        defender.get_colored_name(),
        ' を期待して見つめ、視線の泳ぐ ',
        defender.get_colored_name(),
        ' の頭を手で押し下げる。',
      ]);
      await defender.say_and_wait('んんんん————');
      await defender.print_and_wait(
        '口に含まない理由などない。眼前で下品な雌の匂いを放つ、充血した豆を保護から剥き出し、ひとりで震えていさせる理由などない。',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は深く身を屈め、頭を ',
        d_call_a,
        ' の大きく開いた両脚の間へ埋めた。',
      ]);
      await attacker.say_and_wait('はぁ❤️');
      await defender.print_and_wait(
        'まずいお願いをした側なのに、今は夢中で体を揺らしている……',
      );
      await defender.print_and_wait(
        '反射で閉じようとする太股の間が震えている。',
      );
      await defender.print_and_wait('腰に回した膝が震えている。');
      await defender.print_and_wait('腰の後ろで組んだ両足が震えている。');
      await defender.print_and_wait('ああ……どうして急にこうなったのだろう……');
      await defender.print_and_wait(
        'まさか、舌でさらに濡らされているこの陰核のせいではあるまい。',
      );
    } else {
      await defender.print_and_wait('舌先で弄ぶ。');
      await defender.print_and_wait('吸って、立たせる。');
      await defender.print_and_wait('そっと息を吹きかける。');
      await defender.print_and_wait('少し困ってしまう……');
      await defender.print_and_wait([
        '目の前の陰核を、どのやり方で刺激しても、目の前の ',
        d_call_a,
        ' が同じように歓びに震えるなら、どれが好きなのか分からないではないか。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        '心拍を速める匂い……舌先から全身へ溶ける、甘酸っぱい腥さ……',
      );
      await attacker.print_and_wait(
        '舌で秘部を舐める、この甘い繋がり方で、先に来たのはどちらだったのだろう……',
      );
      await attacker.print_and_wait('柔らかさと柔らかさの拮抗。');
      await attacker.print_and_wait(
        '口笛を吹くような唇の形で、膣道のなかで丸められ、ゆっくり前へ進む舌と、熱い挑発に応えて未熟に蠕動し抗う秘部……',
      );
      await attacker.print_and_wait('どちらにも、安易に退けない理由がある……');
    } else {
      await attacker.print_and_wait('そろそろ、別のことをしてもいい頃だ。');
      await attacker.print_and_wait(
        '最初は細い縫い目のように閉じていた清楚な形など、もうほとんど思い出せない。迎えてくる舌に内側まで舐められ、今の秘部は外へ開き、微かに震えている……',
      );
      await attacker.print_and_wait(
        '悪い子の腰をきつく挟んでいた両脚も、いつの間にか解け、バレエのように高く爪先だけが残っている。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('はぁ……');
      await defender.print_and_wait([
        d_call_a,
        ' が自分の前で指を使い、桃色の秘部の弁を開いている。こちらがすべきことは、もう明らかだろう……',
      ]);
      await defender.print_and_wait(
        '心拍を速める匂い……舌先から全身へ溶ける、甘酸っぱい腥さ……',
      );
      await defender.print_and_wait(
        '舌で秘部を舐める、この甘い繋がり方で、先に来たのはどちらだったのだろう……',
      );
      await defender.print_and_wait('柔らかさと柔らかさの拮抗。');
      await defender.print_and_wait(
        '口笛を吹くような唇の形で、膣道のなかで丸められ、ゆっくり前へ進む舌と、熱い挑発に応えて未熟に蠕動し抗う秘部……',
      );
      await defender.print_and_wait('どちらにも、安易に退けない理由がある……');
    } else {
      await defender.print_and_wait(
        '止めてくれという声が聞こえない以上、こちらの舌に途中でやめる理由はない。',
      );
      await defender.print_and_wait('ただ……');
      await defender.print_and_wait('そろそろ、別のことをしてもいい頃だ。');
      await defender.print_and_wait(
        '最初は細い縫い目のように閉じていた清楚な形など、もうほとんど思い出せない。迎えてくる舌に内側まで舐められ、今の秘部は外へ開き、微かに震えている……',
      );
      await defender.print_and_wait(
        '悪い子の腰をきつく挟んでいた両脚も、いつの間にか解け、バレエのように高く爪先だけが残っている。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('ん——');
      await defender.print_and_wait(
        '頭を強引に押し下げられ、驚いて開いた唇が、開けっ放しの秘部にぶつかる。',
      );
      await defender.print_and_wait(
        '心拍を速める匂い……舌先から全身へ溶ける、甘酸っぱい腥さ……',
      );
      await defender.print_and_wait(
        '舌で秘部を舐める、この甘い繋がり方で、先に来たのはどちらだったのだろう……',
      );
      await defender.print_and_wait('柔らかさと柔らかさの拮抗。');
      await defender.print_and_wait(
        '口笛を吹くような唇の形で、膣道のなかで丸められ、ゆっくり前へ進む舌と、熱い挑発に応えて未熟に蠕動し抗う秘部……',
      );
      await defender.print_and_wait('どちらにも、安易に退けない理由がある……');
    } else {
      await attacker.say_and_wait('はぁ～');
      await defender.print_and_wait([
        '満足したのだろう。冷たいビールを一気に飲んだあとのように、',
        d_call_a,
        ' が気持ちよさそうに息を吐く。',
      ]);
      await defender.print_and_wait('そろそろ、別のことをしてもいい頃だ。');
      await defender.print_and_wait(
        '最初は細い縫い目のように閉じていた清楚な形など、もうほとんど思い出せない。迎えてくる舌に内側まで舐められ、今の秘部は外へ開き、微かに震えている……',
      );
      await defender.print_and_wait(
        '悪い子の腰をきつく挟んでいた両脚も、いつの間にか解け、バレエのように高く爪先だけが残っている。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        '目の前の光景は、罪悪感が込み上げてくるほどだ……',
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          'ウマ娘と肉棒。ほとんど交わることのなかった二つの言葉が、今はねっとりと繋がっている……',
        );
      }
      await attacker.print_and_wait(
        '自分の唇を肉棒が強引に押し開き、本来なら養分を取る場所を、硬く起立した危ういものが占領し、体をおかしくする下品な匂いを勝手に撒き散らしている。',
      );
      await attacker.print_and_wait(
        '屈んだ体が、震え始めている……どうしてだろう……',
      );
      await attacker.print_and_wait('こんなこと、やっぱり少しおかしい……？');
    } else {
      await attacker.say_and_wait('ちゅるちゅる～～');
      await attacker.print_and_wait('いつの間にか、少し上手くなっている……');
      await attacker.print_and_wait(
        '頭を少し上げれば、目の前の肉棒をもっと深く含めそうだ……',
      );
      await attacker.print_and_wait(
        '押し潰された舌で横からそっと舐めれば、気持ちよさそうに震える。',
      );
      await attacker.print_and_wait('唇を使えば……吸って……');
      await attacker.print_and_wait(
        'ごほっ……濃く流れ込む恥ずかしい味で、頭がふらふらする……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('お願い——');
      await defender.print_and_wait([
        '目の前の ',
        d_call_a,
        ` が突然、顔の赤くなる言葉を口にした。`,
      ]);
      await defender.print_and_wait(
        'いきなりこんなお願いをして、断られて蹴り飛ばされても文句は言えない……',
      );
      await attacker.say_and_wait(
        '目の前の光景は、罪悪感が込み上げてくるほどだ……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'ウマ娘と肉棒。ほとんど交わることのなかった二つの言葉が、今はねっとりと繋がっている……',
        );
      }
      await defender.print_and_wait(
        '自分の唇を肉棒が強引に押し開き、本来なら養分を取る場所を、硬く起立した危ういものが占領し、体をおかしくする下品な匂いを勝手に撒き散らしている。',
      );
      await defender.print_and_wait(
        '屈んだ体が、震え始めている……どうしてだろう……',
      );
      await defender.print_and_wait('こんなこと、やっぱり少しおかしい……？');
    } else {
      await defender.print_and_wait('同じお願いを何度もされるのは、反則だ……');
      await defender.say_and_wait('ちゅるちゅる～～');
      await defender.print_and_wait('いつの間にか、少し上手くなっている……');
      await defender.print_and_wait(
        '頭を少し上げれば、目の前の肉棒をもっと深く含めそうだ……',
      );
      await defender.print_and_wait(
        '押し潰された舌で横からそっと舐めれば、気持ちよさそうに震える。',
      );
      await defender.print_and_wait('唇を使えば……吸って……');
      await defender.print_and_wait(
        'ごほっ……濃く流れ込む恥ずかしい味で、頭がふらふらする……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('口を開けて。');
      await defender.print_and_wait(
        '抗う言葉は効くかもしれない……そう思ったのに、体はあの手に少しずつ押し下げられていく……',
      );
      await defender.say_and_wait('ん……');
      await attacker.say_and_wait(
        '目の前の光景は、罪悪感が込み上げてくるほどだ……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'ウマ娘と肉棒。ほとんど交わることのなかった二つの言葉が、今はねっとりと繋がっている……',
        );
      }
      await defender.print_and_wait(
        '自分の唇を肉棒が強引に押し開き、本来なら養分を取る場所を、硬く起立した危ういものが占領し、体をおかしくする下品な匂いを勝手に撒き散らしている。',
      );
      await defender.print_and_wait(
        '屈んだ体が、震え始めている……どうしてだろう……',
      );
      await defender.print_and_wait('こんなこと、やっぱり少しおかしい……？');
    } else {
      await defender.say_and_wait('はぁ……', true);
      await defender.say_and_wait('まだ……続けるの……', true);
      await defender.say_and_wait('ちゅるちゅる～～');
      await defender.print_and_wait('いつの間にか、少し上手くなっている……');
      await defender.print_and_wait(
        '頭を少し上げれば、目の前の肉棒をもっと深く含めそうだ……',
      );
      await defender.print_and_wait(
        '押し潰された舌で横からそっと舐めれば、気持ちよさそうに震える。',
      );
      await defender.print_and_wait('唇を使えば……吸って……');
      await defender.print_and_wait(
        'ごほっ……濃く流れ込む恥ずかしい味で、頭がふらふらする……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('こうすれば……');
      await attacker.say_and_wait('ん……');
      await attacker.print_and_wait('やっぱり少し難しい……でも……');
      await attacker.print_and_wait('もっと深く含んだ……');
      await attacker.say_and_wait(
        ['気持ちいいでしょう……わたしの……', a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait('ちゅるちゅる……');
      await attacker.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await attacker.print_and_wait([
        '……こうして、',
        attacker.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await attacker.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await attacker.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        a_call_d,
        ' の下に屈む ',
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          '喉でごくごくと肉棒に仕えながら尻尾を揺らせる余裕まで出てきた。',
          attacker.get_colored_name(),
          ' はこの点で、',
          a_call_d,
          ' の予想通り、才能がある。',
        ]);
        await attacker.print_and_wait([
          'ちらりと ',
          a_call_d,
          ` が息を吸って顔を上げる姿をちらりと見ながら、鼻歌の暇もない `,
          attacker.get_colored_name(),
          ' は分かりやすく耳を震わせる。',
        ]);
      }
      await attacker.say_and_wait('はぁ……はぁ……❤️');
      await attacker.print_and_wait('飲み込む……');
      await attacker.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        attacker.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await attacker.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        attacker.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await attacker.say_and_wait('ん……んんんん……');
      await attacker.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('もっと、奥がほしい……');
      await defender.print_and_wait([
        '欲張って呟き、快感を求める本能に支配された ',
        d_call_a,
        ' は腰を突き出した。',
      ]);
      await defender.print_and_wait('もっと深く含んだ……');
      await defender.print_and_wait('当たった、いちばん奥……');
      await defender.say_and_wait('ちゅるちゅる……');
      await defender.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await defender.print_and_wait([
        '……こうして、',
        defender.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await defender.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await defender.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        d_call_a,
        ' の下に屈む ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '喉でごくごくと肉棒に仕えながら尻尾を揺らせる余裕まで出てきた。',
        defender.get_colored_name(),
        ' はこの点で、',
        attacker.phy_sex_title,
        'の予想通り、才能がある。',
      ]);
      await defender.print_and_wait([
        'ちらりと ',
        d_call_a,
        ' が息を吸って顔を上げる姿をちらりと見ながら、鼻歌の暇もない ',
        defender.get_colored_name(),
        ' は分かりやすく耳を震わせる。',
      ]);
      await defender.print_and_wait('どう～');
      await defender.print_and_wait([
        '今の小さな口に話す暇はない。だが、自分の',
        defender.race > 0 ? '担当' : '仲間',
        '零距離で触れている ',
        d_call_a,
        ' は、舌先で肉棒の亀頭に描かれた手柄話を、完全に理解した。',
      ]);
      await defender.say_and_wait('はぁ……はぁ……❤️');
      await defender.print_and_wait('飲み込む……');
      await defender.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        defender.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await defender.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        defender.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await defender.say_and_wait('ん……んんんん……');
      await defender.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('顔を上げて。');
      await defender.print_and_wait('もっと深く含んだ……');
      await defender.print_and_wait(
        '相変わらず、温情など聞き取れない短い命令だ。',
      );
      await defender.print_and_wait([
        'だが ',
        defender.get_colored_name(),
        ' の体は抗いがたく、それに支配されている。',
      ]);
      await defender.say_and_wait('ちゅるちゅる……');
      await defender.print_and_wait(
        'この場のふたりのうち、少なくとも一人の名もなき下品な誰かが先走って、この淫らな体勢からちゅうちゅうと、眉をほどく禁忌の快感を搾り出している。',
      );
      await defender.print_and_wait([
        '……こうして、',
        defender.get_colored_name(),
        ' のこの小さな口は、今この瞬間から、養分を取る以外の意味を与えられ、ねちねちとした音を立てて肉棒に絡みつく下品な性器へと堕ちた。もう取り返しはつかない❤️',
      ]);
      await defender.print_and_wait(
        '喉の柔らかさで亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さないほどきつい吸いで柱を支える……',
      );
      await defender.print_and_wait([
        '何を学び、何を覚え、どんな姿になっていくのだろう……今、',
        d_call_a,
        ' の下に屈む ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '無言で急かし、',
        attacker.phy_sex_title,
        '再び強引に手で、目の前の',
        defender.teen_sex_title,
        'を自分の股間に固定する。満足するまで。',
      ]);
      await defender.say_and_wait('はぁ……はぁ……❤️');
      await defender.print_and_wait('飲み込む……');
      await defender.print_and_wait([
        '必要な空気を得るため、肉棒を含んだ ',
        defender.get_colored_name(),
        ' が大きく飲み込み、肉棒の匂いが混じった……いや、酸素が混じった肉棒臭と言った方が正確だろう。',
      ]);
      await defender.print_and_wait([
        '先走りと、小さな口を塞がれた ',
        defender.get_colored_name(),
        ' が抑えきれず溢す涎は、口穴への抽送のたび、長い糸を引きやすい粘る透明へと搗き混ぜられていく……',
      ]);
      await defender.say_and_wait('ん……んんんん……');
      await defender.print_and_wait(
        'まあ、何度こうしても、最後に口の開け方まで忘れることはないだろう。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('ん——');
      await attacker.print_and_wait([
        'その熱さに驚いたように、',
        attacker.get_colored_name(),
        ' が肉棒に添えた手が、本能で後ろへ引く。それから冬に足を布団へ入れるように、少しずつ再び近づく。',
      ]);
      await attacker.print_and_wait(
        'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
      );
      await attacker.print_and_wait(
        'なのに……指で輪に握って軽く扱けば、先走りが指の間で踊る様子が……少し可愛い。',
      );
      await attacker.say_and_wait('はぁ……はぁ……ん——');
      await attacker.print_and_wait('聞き分けられるようになった……');
    } else {
      await attacker.print_and_wait('本当に、これだけでいいのだろうか……');
      await attacker.print_and_wait([
        attacker.child_sex_title,
        'の手に肉棒を包まれて扱かれるだけで満足できる……？',
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('本当に……他にしたいことはないのか……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('助けて……お願い……', true);
      await defender.print_and_wait([
        d_call_a,
        ' は何も言わなかった。だが ',
        defender.get_colored_name(),
        ' は目の前の赤く脹れた充血の肉棒を見て、温め始めた十指が、自分がすべきことをもう完全に理解している。',
      ]);
      await defender.say_and_wait('ん——');
      await defender.print_and_wait([
        'その熱さに驚いたように、',
        defender.get_colored_name(),
        ' が肉棒に添えた手が、本能で後ろへ引く。それから冬に足を布団へ入れるように、少しずつ再び近づく。',
      ]);
      await defender.print_and_wait(
        'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
      );
      await defender.print_and_wait(
        'なのに……指で輪に握って軽く扱けば、先走りが指の間で踊る様子が……少し可愛い。',
      );
      await defender.say_and_wait('はぁ……はぁ……ん——');
      await defender.print_and_wait('聞き分けられるようになった……');
    } else {
      await defender.print_and_wait('本当に、これだけでいいのだろうか……');
      await defender.print_and_wait([
        defender.child_sex_title,
        'の手に肉棒を包まれて扱かれるだけで満足できる……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('本当に……他にしたいことはないのか……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('手でして。いいだろう。');
      await defender.print_and_wait([
        `拒む余地は与えられない。`,
        d_call_a,
        ` の言葉とともに、すでに `,
        defender.get_colored_name(),
        ' の前で素直に両手を出して仕えるか、先走りを垂らす肉棒に好奇の隅々まで擦られるか。',
        defender.get_colored_name(),
        ' に残された選択肢は、その二つだけだ。',
      ]);
      await defender.say_and_wait('ん——');
      await defender.print_and_wait([
        'その熱さに驚いたように、',
        defender.get_colored_name(),
        ' が肉棒に添えた手が、本能で後ろへ引く。それから冬に足を布団へ入れるように、少しずつ再び近づく。',
      ]);
      await defender.print_and_wait(
        'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
      );
      await defender.print_and_wait(
        'なのに……指で輪に握って軽く扱けば、先走りが指の間で踊る様子が……少し可愛い。',
      );
      await defender.say_and_wait('はぁ……はぁ……ん——');
      await defender.print_and_wait('聞き分けられるようになった……');
    } else {
      await defender.print_and_wait('本当に、これだけでいいのだろうか……');
      await defender.print_and_wait([
        defender.child_sex_title,
        'の手に肉棒を包まれて扱かれるだけで満足できる……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('本当に……他にしたいことはないのか……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('なんだか');
      await attacker.print_and_wait('意外なほど自然な動きだ……');
      await attacker.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await attacker.print_and_wait('指の体温で温め、擦り開き、それから……');
      await attacker.say_and_wait('ちゅ～');
      await attacker.print_and_wait('超浓厚……');
    } else {
      await attacker.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await attacker.say_and_wait('ちゅるちゅる——');
      await attacker.print_and_wait([
        a_call_d,
        ` の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……`,
      ]);
      await attacker.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('含んで……ほしい……？');
      await defender.print_and_wait('そう……なの');
      era.println();
      await defender.print_and_wait('なんだか');
      await defender.print_and_wait('意外なほど自然な動きだ……');
      await defender.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await defender.print_and_wait('指の体温で温め、擦り開き、それから……');
      await defender.say_and_wait('ちゅ～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await defender.say_and_wait('ちゅるちゅる——');
      await defender.print_and_wait([
        d_call_a,
        ' の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……',
      ]);
      await defender.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('いつの間にか、蹲る姿勢になっていた。');
      await defender.print_and_wait(
        '不思議だ……はっきりした要求は聞いていないのに、体は次にすべきことを完全に分かっている。',
      );
      era.println();
      await defender.print_and_wait('なんだか');
      await defender.print_and_wait('意外なほど自然な動きだ……');
      await defender.print_and_wait(
        '両手で肉棒を起こしたあと、頭が知らず寄っていく。',
      );
      await defender.print_and_wait('指の体温で温め、擦り開き、それから……');
      await defender.say_and_wait('ちゅ～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '肉棒を脇へずらし、首を傾けて上から下まで丁寧に舐める。角が溶けて垂れたアイスのように。',
      );
      await defender.say_and_wait('ちゅるちゅる——');
      await defender.print_and_wait([
        d_call_a,
        ' の亀頭がきらきらしている。光る濡れ跡は、どちらが悪いのだろう……',
      ]);
      await defender.print_and_wait('もう完全に……分からなくなってきた……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('すごくないか。');
      await defender.print_and_wait([
        'この ',
        d_call_a,
        ' が自分の下に屈み、少女だけの柔らかさで熱い肉棒を包む姿……',
      ]);
      await attacker.say_and_wait('ん……');
      await defender.print_and_wait(
        'ちゃんと伝わっているみたいだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い息。',
      );
      await defender.print_and_wait([
        '手を添えて、下の ',
        d_call_a,
        ' の顔を上げる。',
      ]);
      await defender.print_and_wait(
        'うん、もう十分に燻された、美味しそうな顔だ。',
      );
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        '分かる。',
        a_call_d,
        ' の腰が後ろへ反る。',
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          '敏感な馬耳が、上から吐かれる乱れた熱い息にふぅふぅと撫でられている。',
        );
      }
      await attacker.print_and_wait(
        '柔らかさに包まれた肉棒も、秘部を簡単に震わせそうな形まで起立している。',
      );
      await attacker.print_and_wait(
        '何を思ったのか、胸がどきどきしている。だが、これもいわゆる「群盲象を撫でる」ようなものだろう……',
      );
      await attacker.print_and_wait([
        'だから ',
        attacker.get_colored_name(),
        ' は顔を上げる。',
      ]);
      await attacker.print_and_wait('やっぱり、獣のような顔だ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '熱い視線で目の前の ',
        a_call_d,
        ' の乳首が熱く立つほど、お願いするようにじっと見つめる。',
      ]);
      await attacker.print_and_wait([
        '向かいの ',
        a_call_d,
        ' はやはり抗いきれず、負けてくれた。やった。',
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait('すごくないか。');
      await attacker.print_and_wait([
        'この ',
        a_call_d,
        ' が自分の下に屈み、少女だけの柔らかさで熱い肉棒を包む姿……',
      ]);
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ちゃんと伝わっているみたいだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い息。',
      );
      await attacker.print_and_wait([
        '手を添えて、下の ',
        a_call_d,
        ' の顔を上げる。',
      ]);
      await attacker.print_and_wait(
        'うん、もう十分に燻された、美味しそうな顔だ。',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '分かる。',
        d_call_a,
        ' の腰が後ろへ反る。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感な馬耳が、上から吐かれる乱れた熱い息にふぅふぅと撫でられている。',
        );
      }
      await defender.print_and_wait(
        '柔らかさに包まれた肉棒も、秘部を簡単に震わせそうな形まで起立している。',
      );
      await defender.print_and_wait(
        '何を思ったのか、胸がどきどきしている。だが、これもいわゆる「群盲象を撫でる」ようなものだろう……',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は顔を上げる。',
      ]);
      await defender.print_and_wait('やっぱり、獣のような顔だ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '待ちきれずに腰を揺らす。冷たい空気より、目の前の ',
        a_call_d,
        ' の体には、肉棒がいるべき場所が、もっとある。',
      ]);
      await attacker.print_and_wait('分かっているだろう。');
      await attacker.print_and_wait(
        '無駄な会話はいらない。揺るがない命令を、視線だけで伝える。',
      );
      era.println();
      await attacker.print_and_wait('すごくないか。');
      await attacker.print_and_wait([
        'この ',
        a_call_d,
        ' が自分の下に屈み、少女だけの柔らかさで熱い肉棒を包む姿……',
      ]);
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ちゃんと伝わっているみたいだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い息。',
      );
      await attacker.print_and_wait([
        '手を添えて、下の ',
        a_call_d,
        ' の顔を上げる。',
      ]);
      await attacker.print_and_wait(
        'うん、もう十分に燻された、美味しそうな顔だ。',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '分かる。',
        d_call_a,
        ' の腰が後ろへ反る。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感な馬耳が、上から吐かれる乱れた熱い息にふぅふぅと撫でられている。',
        );
      }
      await defender.print_and_wait(
        '柔らかさに包まれた肉棒も、秘部を簡単に震わせそうな形まで起立している。',
      );
      await defender.print_and_wait(
        '何を思ったのか、胸がどきどきしている。だが、これもいわゆる「群盲象を撫でる」ようなものだろう……',
      );
      await defender.print_and_wait([
        'だから ',
        defender.get_colored_name(),
        ' は顔を上げる。',
      ]);
      await defender.print_and_wait('やっぱり、獣のような顔だ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('もう……そんなに胸が好きなの……');
      await attacker.print_and_wait(
        'スイーツのクリームみたいだ。どこに絞っても美味しそう……',
      );
      await attacker.say_and_wait('じゅるじゅるじゅる……');
      await attacker.print_and_wait([
        '乳肉は肉棒の竿に垂れた先走りでぬめぬめと光っている。苦労する胸より、いちばん熱く膨らんだ亀頭は ',
        attacker.get_colored_name(),
        ' が両手で口へ迎え入れた。',
      ]);
      await attacker.say_and_wait('ん……');
      await attacker.print_and_wait(
        '舌がもう言うことを聞かない。口の上の亀頭が少し寂しそうなだけで、乳首を寄せて肉棒に媚びる動きが止まらなくなる……',
      );
    } else {
      await attacker.say_and_wait('じゅるじゅる……');
      await attacker.print_and_wait(
        '何度味わっても、美味しいとは言いがたい……塩辛く下品な味が、まっすぐ頭へ走る……',
      );
      await attacker.print_and_wait('でも……');
      await attacker.print_and_wait('でも…………');
      await attacker.print_and_wait('でも………………');
      await attacker.say_and_wait(
        ['どうして動きが止まらないのだろう……私も ', a_call_d, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        ' の、乳肉から覗く亀頭が少し元気なさそうだ。',
      ]);
      await defender.print_and_wait(
        '本人も分かりやすく、掌を合わせてお願いしている。',
      );
      await defender.print_and_wait('もう……そんなに胸が好きなの……');
      await defender.print_and_wait(
        'スイーツのクリームみたいだ。どこに絞っても美味しそう……',
      );
      await defender.say_and_wait('じゅるじゅるじゅる……');
      await defender.print_and_wait([
        '乳肉は肉棒の竿に垂れた先走りでぬめぬめと光っている。苦労する胸より、いちばん熱く膨らんだ亀頭は ',
        defender.get_colored_name(),
        ' が両手で口へ迎え入れた。',
      ]);
      await defender.say_and_wait('ん……');
      await defender.print_and_wait(
        '舌がもう言うことを聞かない。口の上の亀頭が少し寂しそうなだけで、乳首を寄せて肉棒に媚びる動きが止まらなくなる……',
      );
    } else {
      await defender.say_and_wait('じゅるじゅる……');
      await defender.print_and_wait(
        '何度味わっても、美味しいとは言いがたい……塩辛く下品な味が、まっすぐ頭へ走る……',
      );
      await defender.print_and_wait('でも……');
      await defender.print_and_wait('でも…………');
      await defender.print_and_wait('でも………………');
      await defender.say_and_wait(
        ['どうして動きが止まらないのだろう……私も ', d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('なに……！？');
      await defender.print_and_wait(
        'こちらの意向を聞く気などなく、ただ乱暴に自分のしたいことを通す。',
      );
      await defender.print_and_wait('もう……そんなに胸が好きなの……');
      await defender.print_and_wait(
        'スイーツのクリームみたいだ。どこに絞っても美味しそう……',
      );
      await defender.say_and_wait('じゅるじゅるじゅる……');
      await defender.print_and_wait([
        '乳肉は肉棒の竿に垂れた先走りでぬめぬめと光っている。苦労する胸より、いちばん熱く膨らんだ亀頭は ',
        defender.get_colored_name(),
        ' が両手で口へ迎え入れた。',
      ]);
      await defender.say_and_wait('ん……');
      await defender.print_and_wait(
        '舌がもう言うことを聞かない。口の上の亀頭が少し寂しそうなだけで、乳首を寄せて肉棒に媚びる動きが止まらなくなる……',
      );
    } else {
      await defender.say_and_wait('じゅるじゅる……');
      await defender.print_and_wait(
        '何度味わっても、美味しいとは言いがたい……塩辛く下品な味が、まっすぐ頭へ走る……',
      );
      await defender.print_and_wait('でも……');
      await defender.print_and_wait('でも…………');
      await defender.print_and_wait('でも………………');
      await defender.say_and_wait(
        ['どうして動きが止まらないのだろう……私も ', d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * 乳首を吸う地の文。授乳でも使う
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側。授乳のときは受動側
   * @param {CharaTalk} defender 受動側。授乳のときは主動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('ちゅ——');
      await attacker.print_and_wait(
        '目の前の白さと薔薇色は本能で逃げたがる。だが舌は、そう簡単には満足しない。',
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        'の柔らかさが左右に逃げ、やがて観念したように舌先へ留まる。',
      ]);
      await attacker.say_and_wait('すう——');
      await attacker.print_and_wait(
        'やがて舌先で独り熱を持つ赤い点が硬さを帯び、歯で慎重にその肉粒を銜え、すう、と吸う——',
      );
      await defender.say_and_wait('ん——！');
      await attacker.print_and_wait([
        a_call_d,
        ' の体の重みが、どさりと覆いかぶさってきた。',
      ]);
      await attacker.print_and_wait('脚が立たなくなったのだろう。');
    } else {
      await attacker.print_and_wait('恥ずかしくないのだろうか？');
      await attacker.print_and_wait([
        '膝枕で仕えられ、',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '乳の溢れる' : '白い',
        '乳肉を自分の前へ伏せる。',
      ]);
      await attacker.print_and_wait(
        '自分のせいだろう。色の濃い淫らな乳首は、吸いやすいほど細長く腫れている……',
      );
      await attacker.print_and_wait('……だから、本当に恥ずかしくないのか？');
      await attacker.print_and_wait('まったく恥ずかしくない。');
      await attacker.print_and_wait(
        '気持ちよさそうに目を細め、口を開けてその赤い乳粒を銜えて吸う。',
      );
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait('「びゅっびゅっびゅっ——」');
        await attacker.print_and_wait([
          `見えないのに、頭の中はもう、初めて乳が溢れたときの、`,
          a_call_d,
          ` の赤らんだ顔の下、白い乳肉から細く途切れず噴き出す、視線を追わせるきれいな放物線……`,
        ]);
        await attacker.print_and_wait('それに、少し甘い。');
      }
    }
  },
  /**
   * 乳首を噛む地の文。噛ませる依頼でも使う
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側。噛ませる依頼のときは受動側
   * @param {CharaTalk} defender 受動側。噛ませる依頼のときは主動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      `歯で硬い乳粒を銜えた瞬間、腕の中の `,
      a_call_d,
      ` の体が一気に硬直する。`,
    ]);
    await attacker.print_and_wait('えっ……そう……');
    await attacker.print_and_wait([
      '歯を優しく使い、敏感な乳首の周りにギザギザの赤い痕を残す……ついでに腕の中の',
      defender.teen_sex_title,
      'の体が止まらず震える……',
    ]);
    await attacker.print_and_wait([
      '次の狙いが分かったのだろう。乳首を舌で丁寧に濡らした瞬間、',
      defender.get_colored_name(),
      ' は両手を伸ばし、 ',
      attacker.get_colored_name(),
      ' の腰へ抱きついた……',
    ]);
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait('可愛い。');
    await attacker.print_and_wait([
      '腕の中の ',
      a_call_d,
      ' だけではない。赤く腫れた痕だらけの乳首も。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        '目の前がすべて ',
        a_call_d,
        ' の白い肌と乳肉ばかりで、今の美味しいはずの顔が見えないのが惜しい。',
      ]);
      await attacker.print_and_wait([
        '舌先でくすぐられ踊る乳首まで、一瞬そっけなく感じる。だが ',
        attacker.get_colored_name(),
        ' はすぐ、新しい注意の向け先を見つける。',
      ]);
      await attacker.print_and_wait('では、今はどんな顔をしているのだろう。');
      await attacker.print_and_wait([
        '吸われる',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '母乳' : '乳首',
        'の快感に、下品の彼方へ引きずられる失神と抗いの顔……掌で跳ねる熱い肉棒に戸惑う羞じらいの顔……あるいは、もう完全に浸かった下品な享受の顔だろうか……',
      ]);
      await defender.say_and_wait('えっ！？');
      await attacker.print_and_wait([
        '答えのない問いだと分かっている。それでも ',
        attacker.get_colored_name(),
        ' を',
        a_call_d,
        ' の指がかろうじて包んだ肉棒が、突然いつもより高く立ち上がる。',
      ]);
    } else {
      await defender.print_and_wait('こんな自分を喜んでいいのか分からない……');
      await defender.print_and_wait([
        '銜えられた',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '乳の溢れる' : '',
        '乳首の横、舌の動きからおぼろに見える ',
        d_call_a,
        ' の表情。',
      ]);
      await defender.print_and_wait(
        '掌の肉棒の熱さと膨らんだ筋から、今の形をおぼろに描ける。',
      );
      await defender.print_and_wait('はぁ……責任、取ってよ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('分かりやすいだろう');
      await defender.print_and_wait(
        '膝枕で乳を含まされたあと、高く起立した股間。',
      );
      await defender.print_and_wait('分かりやすいだろう……');
      await defender.print_and_wait([
        '目の前がすべて ',
        d_call_a,
        ' の白い肌と乳肉ばかりで、今の美味しいはずの顔が見えないのが惜しい。',
      ]);
      await defender.print_and_wait([
        '舌先でくすぐられ踊る乳首まで、一瞬そっけなく感じる。だが ',
        defender.get_colored_name(),
        ' はすぐ、新しい注意の向け先を見つける。',
      ]);
      await defender.print_and_wait('では、今はどんな顔をしているのだろう。');
      await defender.print_and_wait([
        '吸われる',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '母乳' : '乳首',
        'の快感に、下品の彼方へ引きずられる失神と抗いの顔……掌で跳ねる熱い肉棒に戸惑う羞じらいの顔……あるいは、もう完全に浸かった下品な享受の顔だろうか……',
      ]);
      await attacker.say_and_wait('えっ！？');
      await defender.print_and_wait([
        '答えのない問いだと分かっている。それでも ',
        defender.get_colored_name(),
        ' を',
        d_call_a,
        ' の指にかろうじて包まれた肉棒が、突然いつもより高く立ち上がる。',
      ]);
    } else {
      await attacker.print_and_wait('こんな自分を喜んでいいのか分からない……');
      await attacker.print_and_wait([
        '銜えられた',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '乳の溢れる' : '',
        '乳首の横、舌の動きからおぼろに見える ',
        a_call_d,
        ' の表情。',
      ]);
      await attacker.print_and_wait(
        '掌の肉棒の熱さと膨らんだ筋から、今の形をおぼろに描ける。',
      );
      await attacker.print_and_wait('はぁ……責任、取ってよ……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('本当に挿し入れた。');
      await defender.print_and_wait([
        '肉棒を……',
        d_call_a,
        ' の閉じた太股の間へ挿し入れる。',
      ]);
      await defender.print_and_wait(
        '柔らかい。温かい。すごい、すごい、すごい……',
      );
      await defender.print_and_wait(
        'わずかに交差した両脚は、羞じているのだろう……',
      );
      await defender.print_and_wait(
        '柔らかいだけではない。日頃の成果として、肉棒はしっかりと支えられている。',
      );
      await defender.print_and_wait([
        '発情した猿のように、',
        defender.get_colored_name(),
        ' の肉棒が熱に狂って ',
        d_call_a,
        ' の股間を前後に擦る。',
      ]);
    } else {
      await defender.print_and_wait('ぬるぬるして、きらきらしてきた。');
      await defender.print_and_wait('少し上手くなってきた。');
      await defender.print_and_wait('もう素直に耐えられない。');
      await defender.print_and_wait('少し……寂しくなってきたのだろうか……');
      await attacker.say_and_wait([a_call_d, '……']);
      await defender.print_and_wait('目まで……濡れている……');
      await defender.print_and_wait('両脚をこう使われれば、こうなるものだ。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ['自分が何を言っているか分かっているのか……', d_call_a, '……'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `ああ……ああ……そう見ていたのか、自分の担当の両脚を。`,
          true,
        );
      }
      await attacker.print_and_wait('本当に挿し入れた。');
      await attacker.print_and_wait([
        '肉棒を……',
        a_call_d,
        ' の閉じた太股の間へ挿し入れる。',
      ]);
      await attacker.print_and_wait(
        '柔らかい。温かい。すごい、すごい、すごい……',
      );
      await attacker.print_and_wait(
        'わずかに交差した両脚は、羞じているのだろう……',
      );
      await attacker.print_and_wait(
        '柔らかいだけではない。日頃の成果として、肉棒はしっかりと支えられている。',
      );
      await attacker.print_and_wait([
        '発情した猿のように、',
        attacker.get_colored_name(),
        ' の肉棒が熱に狂って ',
        a_call_d,
        ' の股間を前後に擦る。',
      ]);
    } else {
      await attacker.print_and_wait('ぬるぬるして、きらきらしてきた。');
      await attacker.print_and_wait('少し上手くなってきた。');
      await attacker.print_and_wait('もう素直に耐えられない。');
      await attacker.print_and_wait('少し……寂しくなってきたのだろうか……');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait('目まで……濡れている……');
      await attacker.print_and_wait('両脚をこう使われれば、こうなるものだ。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait('ぬるぬると重なった体。');
      await era.printAndWait('唇が穴に当たり、唇が肉棒にも当たる。');
      await era.printAndWait('塩辛い汁がふたりの体を巡る……獣のように');
      await era.printAndWait(
        'どちらが先かは分からない。わざとちゅるちゅると淫らな音を立て、もう一方も見よう見まねで続く。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'ちゅるちゅる' },
        { color: defender.color, content: 'んんんちゅる……' },
        '……」',
      ]);
      await era.printAndWait('寄り添う体が、熱を帯びていく。');
      await era.printAndWait('熱くて、頭が蕩ける……');
    } else {
      await era.printAndWait(
        'もともと清楚な一本の縫い目だった弁が、舐められて開き、緩んでいる。',
      );
      await era.printAndWait(
        'もともとは獰猛な充血の肉棒が、跳ねる小さな舌のせいで、可愛い光を纏っている。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'はぁ……' },
        { color: defender.color, content: 'はぁ……' },
        '……」',
      ]);
      await era.printAndWait(
        '汗ばむ二つの体が擦り合い、めったにない休戦を貪っている……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('最低だ。');
      await defender.print_and_wait([
        '目の前で腕を高く上げた ',
        d_call_a,
        ' の、恥ずかしそうに揺れる尻から、そんな不満が読める。',
      ]);
      await defender.print_and_wait('こればかりは仕方ない。');
      await attacker.say_and_wait('ん——');
      await defender.print_and_wait([
        d_call_a,
        ' の腋が、肉棒の大きな亀頭に洗われている。',
      ]);
      await defender.print_and_wait(
        '湯気立つ腋肉が抽送に合わせて薄く赤らみ、本当に性の器官へ変わっていくみたいだ……',
      );
      await defender.print_and_wait([
        'これを当然だと思いきれず、',
        defender.get_colored_name(),
        ' の動きには、まだ迷いがある……',
      ]);
      await defender.print_and_wait([
        '……迷いながら肉棒で擦り、背を向けた ',
        d_call_a,
        ' の腋の穴を……',
      ]);
    } else {
      await attacker.print_and_wait('なんだか……おかしくなってきた……');
      await attacker.print_and_wait('腋は、こんなことに使う器官だったのか……');
      await attacker.print_and_wait('それに、こんな感触があったなんて……');
      await attacker.print_and_wait([
        '肉棒に染まって何かが変わっていくらしい。顔を真っ赤にした ',
        attacker.get_colored_name(),
        ' は不安げに、もうちゅるちゅると手慣れた肉棒殿に仕えている。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('えっ？');
      await attacker.print_and_wait('もう一度言ってくれるか……');
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' の気が進まなそうな顔が無言で急かすので……',
      ]);
      await attacker.say_and_wait('腋を肉棒で擦らせてください！');
      await defender.say_and_wait('……');
      await attacker.print_and_wait('最低だ。');
      await attacker.print_and_wait([
        '目の前で腕を高く上げた ',
        a_call_d,
        ' の、恥ずかしそうに揺れる尻から、そんな不満が読める。',
      ]);
      await attacker.print_and_wait('こればかりは仕方ない。');
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait([
        a_call_d,
        ' の腋が、肉棒の大きな亀頭に洗われている。',
      ]);
      await attacker.print_and_wait(
        '湯気立つ腋肉が抽送に合わせて薄く赤らみ、本当に性の器官へ変わっていくみたいだ……',
      );
      await attacker.print_and_wait([
        'これを当然だと思いきれず、',
        attacker.get_colored_name(),
        ' の動きには、まだ迷いがある……',
      ]);
      await attacker.print_and_wait([
        '……迷いながら肉棒で擦り、背を向けた ',
        a_call_d,
        ' の腋の穴を……',
      ]);
    } else {
      await defender.print_and_wait('なんだか……おかしくなってきた……');
      await defender.print_and_wait('腋は、こんなことに使う器官だったのか……');
      await defender.print_and_wait('それに、こんな感触があったなんて……');
      await defender.print_and_wait([
        '肉棒に染まって何かが変わっていくらしい。顔を真っ赤にした ',
        defender.get_colored_name(),
        ' は不安げに、もうちゅるちゅると手慣れた肉棒殿に仕えている。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '腕を引き上げられた ',
        a_call_d,
        'は、今何を思っているのだろう…',
      ]);
      await attacker.print_and_wait('きっとろくな言葉ではあるまい……');
      await attacker.print_and_wait('最低だ。');
      await attacker.print_and_wait([
        '目の前で腕を高く上げた ',
        a_call_d,
        ' の、恥ずかしそうに揺れる尻から、そんな不満が読める。',
      ]);
      await attacker.print_and_wait('こればかりは仕方ない。');
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait([
        a_call_d,
        ' の腋が、肉棒の大きな亀頭に洗われている。',
      ]);
      await attacker.print_and_wait(
        '湯気立つ腋肉が抽送に合わせて薄く赤らみ、本当に性の器官へ変わっていくみたいだ……',
      );
      await attacker.print_and_wait([
        'これを当然だと思いきれず、',
        attacker.get_colored_name(),
        ' の動きには、まだ迷いがある……',
      ]);
      await attacker.print_and_wait([
        '……迷いながら肉棒で擦り、背を向けた ',
        a_call_d,
        ' の腋の穴を……',
      ]);
    } else {
      await defender.print_and_wait('なんだか……おかしくなってきた……');
      await defender.print_and_wait('腋は、こんなことに使う器官だったのか……');
      await defender.print_and_wait('それに、こんな感触があったなんて……');
      await defender.print_and_wait([
        '肉棒に染まって何かが変わっていくらしい。顔を真っ赤にした ',
        defender.get_colored_name(),
        ' は不安げに、もうちゅるちゅると手慣れた肉棒殿に仕えている。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('笑みを浮かべるだろう。');
      await defender.print_and_wait([
        '',
        attacker.get_colored_name(),
        ' ',
        defender.race > 0 ? 'あの、レースで疾走する両足で' : '',
        '目の前の肉棒に足を乗せ、その悪いものが興奮して逆に足裏を持ち上げたとき、きっと笑みを浮かべるだろう。',
      ]);
      await defender.print_and_wait(
        '下品なものを見たときの嫌悪と軽蔑の笑み……性癖の変わった恋人への、興味と包容の笑み……無邪気に面白いと笑うだけの笑み……',
      );
      await defender.print_and_wait([
        '目の前の ',
        d_call_a,
        ' はどれだろう…とにかく、肉棒がさらに昂ぶる種類だろう。',
      ]);
    } else {
      await defender.print_and_wait('察したのだろう。');
      await defender.print_and_wait(
        '自分の足裏を侵しているこの肉棒は、脆いものではない。',
      );
      await defender.print_and_wait([
        d_call_a,
        ' が肉棒を踏む動きは、ずいぶん自然になった。',
      ]);
      await defender.print_and_wait([
        'まるで ',
        defender.get_colored_name(),
        ' の肉棒を足裏に乗せるのが、生まれつきの才能であるかのように。',
      ]);
      await defender.print_and_wait('すぅ……');
      await defender.print_and_wait([
        'ただ想像しただけで、',
        defender.get_colored_name(),
        ' はまた下腹が熱くなる。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('……やっぱり？');
      await attacker.print_and_wait([
        '度を越した下品なお願いを聞いたはずなのに、目の前の ',
        a_call_d,
        ' は、予想していたかのような余裕の顔を見せる。',
      ]);
      await attacker.print_and_wait('こんなに……露骨だったのか……');
      await attacker.print_and_wait('笑みを浮かべるだろう。');
      await attacker.print_and_wait([
        '',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? 'あの、レースで疾走する両足で' : '',
        '目の前の肉棒に足を乗せ、その悪いものが興奮して逆に足裏を持ち上げたとき、きっと笑みを浮かべるだろう。',
      ]);
      await attacker.print_and_wait(
        '下品なものを見たときの嫌悪と軽蔑の笑み……性癖の変わった恋人への、興味と包容の笑み……無邪気に面白いと笑うだけの笑み……',
      );
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' はどれだろう…とにかく、肉棒がさらに昂ぶる種類だろう。',
      ]);
    } else {
      await attacker.print_and_wait('察したのだろう。');
      await attacker.print_and_wait(
        '自分の足裏を侵しているこの肉棒は、脆いものではない。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' が肉棒を踏む動きは、ずいぶん自然になった。',
      ]);
      await attacker.print_and_wait([
        'まるで ',
        attacker.get_colored_name(),
        ' の肉棒を足裏に乗せるのが、生まれつきの才能であるかのように。',
      ]);
      await attacker.print_and_wait('すぅ……');
      await attacker.print_and_wait([
        'ただ想像しただけで、',
        attacker.get_colored_name(),
        ' はまた下腹が熱くなる。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'こんな要求に不満で、顔を背けるのも当然だろう。',
      );
      await attacker.print_and_wait(
        'ただこちらの業界では、踏むときに顔を逸らすのはご褒美なのだ。',
      );
      await attacker.print_and_wait('ああ……こちらを見た……');
      await attacker.print_and_wait('笑みを浮かべるだろう。');
      await attacker.print_and_wait([
        '',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? 'あの、レースで疾走する両足で' : '',
        '目の前の肉棒に足を乗せ、その悪いものが興奮して逆に足裏を持ち上げたとき、きっと笑みを浮かべるだろう。',
      ]);
      await attacker.print_and_wait(
        '下品なものを見たときの嫌悪と軽蔑の笑み……性癖の変わった恋人への、興味と包容の笑み……無邪気に面白いと笑うだけの笑み……',
      );
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' はどれだろう…とにかく、肉棒がさらに昂ぶる種類だろう。',
      ]);
    } else {
      await attacker.print_and_wait('察したのだろう。');
      await attacker.print_and_wait(
        '自分の足裏を侵しているこの肉棒は、脆いものではない。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' が肉棒を踏む動きは、ずいぶん自然になった。',
      ]);
      await attacker.print_and_wait([
        'まるで ',
        attacker.get_colored_name(),
        ' の肉棒を足裏に乗せるのが、生まれつきの才能であるかのように。',
      ]);
      await attacker.print_and_wait('すぅ……');
      await attacker.print_and_wait([
        'ただ想像しただけで、',
        attacker.get_colored_name(),
        ' はまた下腹が熱くなる。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('器用だ……');
      await defender.print_and_wait([
        'お願いした ',
        defender.get_colored_name(),
        ' すら意外に思うほど器用に、曲がる毛の馬の尻尾が肉棒に巻きつく。',
      ]);
      await defender.print_and_wait('この角度から見る尻も、また格別だ。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          'ほのかに嗅げる、長い馬の尻尾にどうしても染みる女の子の匂いが、',
          defender.get_colored_name(),
          ' の肉棒を、かつてないほど昂ぶらせる。',
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '……その膨れ上がる熱を感じたのだろう。背を向けた ',
        d_call_a,
        ' は、赤らんだ耳の動きまで可愛くなった。',
      ]);
    } else {
      await defender.print_and_wait(
        '動きが乱暴になってきた……あるいは、上手くなった。',
      );
      await defender.print_and_wait(
        '淫らな汁でべたべたにされた尻尾は、毛を光らせるその手入れから、何かを悟るものだ。',
      );
      await defender.print_and_wait('たとえば、この肉棒が好む巻き方の強さ。');
      await defender.print_and_wait('たとえば、ここを掻かれると震える場所。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          'たとえば、尻尾の下の秘部も、もっと……激しく……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('はぁ……');
      await attacker.print_and_wait(['目の前の ', a_call_d, ' の長い溜息。']);
      await attacker.print_and_wait('少しやりすぎだろうか……');
      await attacker.print_and_wait([
        '抑えきれない自分を反省しているようだが、今の ',
        attacker.get_colored_name(),
        ' は、それでもじっと目の前の ',
        a_call_d,
        '。',
      ]);
      await attacker.print_and_wait('器用だ……');
      await attacker.print_and_wait([
        'お願いした ',
        attacker.get_colored_name(),
        ' すら意外に思うほど器用に、曲がる毛の馬の尻尾が肉棒に巻きつく。',
      ]);
      await attacker.print_and_wait('この角度から見る尻も、また格別だ。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'ほのかに嗅げる、長い馬の尻尾にどうしても染みる女の子の匂いが、',
          attacker.get_colored_name(),
          ' の肉棒を、かつてないほど昂ぶらせる。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……その膨れ上がる熱を感じたのだろう。背を向けた ',
        a_call_d,
        ' は、赤らんだ耳の動きまで可愛くなった。',
      ]);
    } else {
      await attacker.print_and_wait(
        '動きが乱暴になってきた……あるいは、上手くなった。',
      );
      await attacker.print_and_wait(
        '淫らな汁でべたべたにされた尻尾は、毛を光らせるその手入れから、何かを悟るものだ。',
      );
      await attacker.print_and_wait('たとえば、この肉棒が好む巻き方の強さ。');
      await attacker.print_and_wait('たとえば、ここを掻かれると震える場所。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'たとえば、尻尾の下の秘部も、もっと……激しく……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('意外な沈黙？');
      await attacker.print_and_wait([
        'おそらく ',
        attacker.get_colored_name(),
        ' の下品な性癖には、もう少し覚悟ができていたらしく、',
        a_call_d,
        ' は、今回は意外なほど従順だ。',
      ]);
      await attacker.print_and_wait('器用だ……');
      await attacker.print_and_wait([
        'お願いした ',
        attacker.get_colored_name(),
        ' すら意外に思うほど器用に、曲がる毛の馬の尻尾が肉棒に巻きつく。',
      ]);
      await attacker.print_and_wait('この角度から見る尻も、また格別だ。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          'ほのかに嗅げる、長い馬の尻尾にどうしても染みる女の子の匂いが、',
          attacker.get_colored_name(),
          ' の肉棒を、かつてないほど昂ぶらせる。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……その膨れ上がる熱を感じたのだろう。背を向けた ',
        a_call_d,
        ' は、赤らんだ耳の動きまで可愛くなった。',
      ]);
    } else {
      await attacker.print_and_wait(
        '動きが乱暴になってきた……あるいは、上手くなった。',
      );
      await attacker.print_and_wait(
        '淫らな汁でべたべたにされた尻尾は、毛を光らせるその手入れから、何かを悟るものだ。',
      );
      await attacker.print_and_wait('たとえば、この肉棒が好む巻き方の強さ。');
      await attacker.print_and_wait('たとえば、ここを掻かれると震える場所。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'たとえば、尻尾の下の秘部も、もっと……激しく……',
        );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('うっ——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は中腰になり、目の前の見慣れた影を見ながら、わずかな恐れを覚える。',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' は含み笑いを浮かべ、腰を突き出し、 ',
        attacker.get_colored_name(),
        ' へ迫る。',
      ]);
      await attacker.print_and_wait([
        '熱い棒状のものが、抗えない意思を乗せて額へ突き出し、',
        attacker.get_colored_name(),
        ' は唾を飲み、自ら顔を上げて迎え、指で髪をすくい、突いてくる長槍に巻きつけて作業を始める。',
      ]);
    } else {
      await attacker.print_and_wait('さらさら……');
      await attacker.print_and_wait('掌と髪が、それを繰り返し揉み擦る。');
      await attacker.print_and_wait('この感触……あれが……まだ膨らんでいる……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は髪先がくすぐったく、息も荒くなる。',
      ]);
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '……？']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' は期待と羞じらいの混じった顔でわずかに顔を上げる。頭頂に熱く、見た目より重い（気のせいだろうか？）感触。近さと濃いフェロモンが、情報を処理する頭をかき乱す。',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' はしゃがみ込み、 ',
            attacker.get_colored_name(),
            ' の股下で、顔が勝手に下品になっていく……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は思わず微笑む。両手を伸ばし、そっと',
            defender.sex,
            'の両耳の脇に置き、優しく頭を支える……それから腰を動かし始める。',
          ]);
          await attacker.print_and_wait([
            '股間が髪の間を往き来し、整えられた短髪を乱し、自分のための道を作る。毛と肌の摩擦で先が濡れ、動きが滑らかになる。液が頂から流れ、もう意識の薄い、喘ぐ',
            defender.phy_sex_title,
            'の睫毛を伝い、さらに下へ滴る……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' はその光景を見て、さらに硬くなる。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('そんなこと……したいの？！');
          await attacker.print_and_wait([
            '',
            attacker.get_colored_name(),
            ' の目の前の ',
            a_call_d,
            ' は「変態だ」と「仕方ないな」が混じった声で言い終え、溜息をつき、軽く頭を振る。滑らかな髪がいい匂いを乗せて ',
            attacker.get_colored_name(),
            ' の、すでに外へ起立した肉根に触れ、そこで止まる。',
          ]);
          await attacker.print_and_wait('自分の番だ。');
          await attacker.print_and_wait([
            '腰を一突きし、自分のそれを斜めに滑らせて首筋へ。細かな髪と滑らかな肌の二重の刺激に ',
            attacker.get_colored_name(),
            ' は思わず溜息をつく。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'は ',
            attacker.get_colored_name(),
            ' のその顔に眉を上げ、わずかに首を傾け、片手を軽く ',
            attacker.get_colored_name(),
            ' のそれに軽く押し、三重の力で挟み、いくつもの感触が同時に襲い、',
            attacker.get_colored_name(),
            ' は満足げに息を吐く。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('ふふ……');
          await attacker.print_and_wait([
            a_call_d,
            ' は、笑っているとも言えない目で ',
            attacker.get_colored_name(),
            '、',
            attacker.get_colored_name(),
            ' は少し後ろめたいが、それでも体で',
            defender.sex,
            'に、そうしてほしいと頼む。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'はわざと ',
            attacker.get_colored_name(),
            ' を数秒焦らし、両手を後ろへ回して長い髪をすくい、一気に振り上げる——',
          ]);
          await attacker.print_and_wait([
            '幾筋もの髪が ',
            attacker.get_colored_name(),
            ' の敏感な場所へ落ち、冷たく、くすぐったく、',
            attacker.get_colored_name(),
            ' が、すう、と息を吸う。いや、まだ終わらない——',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '髪を掬った手が続き、十指が髪ごと筒を作り、',
            attacker.get_colored_name(),
            ' の股間を完全に、隙間なく包み、それから扱き始める——',
          ]);
          await attacker.print_and_wait([
            '今度の刺激は、',
            attacker.get_colored_name(),
            ' には、たぶん多すぎた。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            '耳先を撫でるのは、産毛の感触を楽しむためではない。わずかに曲げ、自分の大切なものに擦りつけるためだ。',
          );
          await attacker.print_and_wait([
            '滑らせる。普段は味わえない体毛の刺激に ',
            attacker.get_colored_name(),
            ' は異常なほど昂ぶる。',
          ]);
          await attacker.print_and_wait([
            '下の',
            defender.phy_sex_title,
            'がかすかな喘ぎを漏らし、さらに ',
            attacker.get_colored_name(),
            ' の欲を煽る。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            '三つの部位……三重の感触……眼前の',
            defender.phy_sex_title,
            '自ら ',
            attacker.get_colored_name(),
            ' が、こんな奉仕をしてくれる……',
          ]);
          await attacker.print_and_wait('これ以上気持ちのいいことはない。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は思わず口角を上げ、目を閉じて味わう。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait(
            '細く落ちる水幕のように、柔らかく巻く薄絹のように。',
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' のそれは、奇妙な穴へ入った。',
          ]);
          await attacker.print_and_wait([
            '繰り返し擦り、',
            attacker.get_colored_name(),
            ' は思わず両脚を縮め、無色の液が肉根の先から溢れる……',
          ]);
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('えっ……ん！');
          await attacker.print_and_wait([
            '突然、',
            attacker.get_colored_name(),
            ' が目の前のこの',
            defender.phy_sex_title,
            'の顔を掴み、熱く充血したそれを',
            defender.sex,
            'の耳と髪の隙間へ置き、',
            defender.sex,
            'の頭を揺らしながら腰の抽送を速める。肌と毛の間で擦られる肉根はすぐ興奮し、膨らみ始める。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            'は何が起きたかも分からないまま思考を諦める。外界を受け取る部位が、もう ',
            attacker.get_colored_name(),
            ' の股間の馳せ場になっている。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('はぁ、待っ、待って！');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' の目を見て、',
            defender.sex,
            'は次に何が起きるか察したように、片手で後頭部を守り、片手を慌てて振る。だが、',
            attacker.get_colored_name(),
            ' は構わない。',
          ]);
          await attacker.print_and_wait([
            '大股で寄り、',
            defender.sex,
            'の肩を押さえ、腰を入れて、それを',
            defender.phy_sex_title,
            'にとって秘めやかな後頸で、滑らかな髪と白い肌の間を、快楽に滑らせる。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('いいわ……どうしてもというなら', true);
          await attacker.print_and_wait([
            '見つめ合った末、目の前の',
            defender.phy_sex_title,
            'は後ずさりし、',
            attacker.get_colored_name(),
            ' は勝者の顔で、戦利品に手をつける。',
          ]);
          await attacker.print_and_wait([
            '利き手を伸ばし、',
            attacker.get_colored_name(),
            ' は',
            defender.sex,
            'の麗しく淡い香りの長い髪を弄び、意地悪く笑い、一握りすくって乱暴に',
            defender.phy_sex_title,
            'が普段丁寧に整えたそれを自分のモノに巻き、軽く引っ張り、いつもと違う扱きの快感を得る。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            '股下の ',
            a_call_d,
            ' の秘めやかな場所を縦横に、',
            attacker.get_colored_name(),
            ' の肉根はさらに興奮している。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' に下から押さえられた ',
            a_call_d,
            ' の表情はもう判別しにくい……赤らんだ顔と耳根だけが、',
            defender.sex,
            'の今を覗かせる。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は口角を舐め、さらに熱心に擦りつける。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は滑る肌の上を繰り返し擦る……分身を撫でる細い髪先を抜け、肉体の心地よさと、精神の征服を味わう。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '普段は整って滑らかな髪が、',
            attacker.get_colored_name(),
            ' にめちゃくちゃにされる。',
          ]);
          await attacker.print_and_wait([
            '陰毛と数本の髪が絡み、',
            attacker.get_colored_name(),
            ' の雄の気配を',
            defender.sex,
            'の匂いの上に被せる。',
          ]);
          await attacker.print_and_wait([
            '野蛮に動き、野蛮に印す……',
            attacker.get_colored_name(),
            ' は野蛮に',
            defender.sex,
            'の大切なもので欲を晴らす。',
          ]);
      }
    }
  },
  /** 性交系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait(
      'これが……互いの体温をいちばん感じられる体勢なのだろう。',
    );
    if (is_anal_sex) {
      await defender.say_and_wait('でも、あそこの温度まで覚えたいの…❤️', true);
    }
    await defender.print_and_wait([
      'いわゆる正常位、あるいはミッショナリー。絡み合うふたりを正面から見れば、まるで ',
      d_call_a,
      ' が懐へ飛び込み、母乳を吸う姿のようだ。',
    ]);
    await defender.print_and_wait([
      d_call_a,
      ' の体が ',
      defender.get_colored_name(),
      ' の体。硬い肉棒が容赦なく秘部へ入り、',
      defender.get_colored_name(),
      ' の長く細い脚が、少しみっともない形で ',
      d_call_a,
      ' の腰の両側へ伸ばし、硬く足裏を天井へ向ける……',
    ]);
    await defender.print_and_wait('熱い……熱い……');
    await defender.print_and_wait('……熱い❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async doggy_style(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('子犬みたいに……');
    await attacker.print_and_wait(
      'あの脚……爪先を突っ張り、膝を曲げ、濡れた腰を高く持ち上げた脚……',
    );
    await attacker.print_and_wait(
      'その上に支えられているのは……子犬のように無意識に揺れる尻。',
    );
    await attacker.print_and_wait([
      '煽情的な姿で下に跨がれた',
      defender.race > 0 ? '馬耳の' : '',
      defender.adult_sex_title,
      'は、体の震えが止まらない。見れば乾いた唇を湿らせたくなる。肉棒の媚薬として、後ろで低く喘ぐ ',
      attacker.get_colored_name(),
      ' は、袋まで押し込みそうだ。',
    ]);
    if (is_anal_sex) {
      await attacker.print_and_wait(
        '……って、それなら尻で袋まで搾り出せるじゃないか',
      );
      await attacker.print_and_wait('寒い冗談みたいだ、まったく。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async sitting(attacker, defender, d_call_a, is_vagina = true) {
    await defender.print_and_wait('思っていたより恥ずかしい……');
    await defender.print_and_wait([
      '',
      is_vagina ? '秘部' : '尻穴',
      'を激しく搗かれながら、じっと見られている……❤️',
    ]);
    await defender.print_and_wait([
      '悪い肉棒に全身をくにゃくにゃにされたはずなのに、',
      d_call_a,
      ' の視線を浴びながらも、無理に腰を伸ばしている。',
    ]);
    await defender.print_and_wait([
      '笑みを含んだ視線が、赤い顔の上を……',
      defender.sex_code !== 1 ? '揺れる柔らかい胸の上……' : '',
      '肉棒の跡がわずかに浮く下腹を…飽きもせず行き来する……',
    ]);
    await defender.print_and_wait('まだ足りないというのか——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('見られないための体勢。');
    await defender.print_and_wait('でも、まだ見られているじゃない——');
    await defender.print_and_wait([
      '後ろに手をついて体を支え、',
      defender.get_colored_name(),
      ' は肉棒を吞吐する尻を、無意識に捻る。',
    ]);
    await defender.print_and_wait([
      '嘆くように気づく。後ろの ',
      attacker.get_colored_name(),
      ' の熱い視線はやはりそこへ集まる……だから ',
      d_call_a,
      ' に見えない小さな顔だけが、溶けかけの下品な表情になっている。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        'まずい❤️どうして肉棒にいじめられるのが、あそこなの……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
    await attacker.print_and_wait('他の体勢より、子宮へ届きそうだ……');
    await attacker.print_and_wait([
      '無意識に深く息を吸い、',
      attacker.get_colored_name(),
      ' は身を前へ傾け、一本の美しい脚を頭上まで上げた ',
      a_call_d,
      ' に寄り添う。',
    ]);
    await attacker.print_and_wait([
      '膨らんだ二つの袋が穴口に密着し、肉棒の形に持ち上がった下腹も ',
      attacker.get_colored_name(),
      ' の下腹とぴったり重なる。',
    ]);
    await defender.say_and_wait('はぁ……すぅ……❤️');
    if (is_anal_sex) {
      await defender.say_and_wait(
        'まだ……秘部を一枚隔てているはずなのに❤️',
        true,
      );
      await defender.say_and_wait('どうして……❤️', true);
    }
    await attacker.print_and_wait(
      '近すぎる距離が、ふたりの下腹を動かす深い呼吸を、この交わりの薬味にする。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_standing(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('腰がすぐ落ちる。');
    await attacker.print_and_wait([
      'まさか',
      defender.race > 0 ? defender.uma_sex_title : '大人',
      'なのに、両足だけでは立てず、何かに掴まり尻を突き出すことでやっと立つ、みっともない姿になる。',
    ]);
    await attacker.print_and_wait(
      'レースとも調教とも無縁の内股立ちに崩され、爪先が体重を抱えすぎて地面に沈みそうなのに、後ろの踵は肉棒の抽送に合わせて高く浮く。',
    );
    await attacker.print_and_wait([
      '自ら肉棒の下へ這うように、',
      is_anal_sex ? '尻穴' : '秘部',
      'の主は膝を前へ出し、弱い内股のせいですり寄った膝が、肉棒が深く入るたびほとんど触れ合い、汗ばむ体がさらに揺れる……',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait(
        'こうあるべきではない……でも、でもこの体勢に、肉棒に押し開かれる尻穴……まずい……',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('逃げられない……');
    await defender.print_and_wait('この体勢に入った瞬間から、逃げられない。');
    await defender.print_and_wait([
      '体を高く持ち上げられ、',
      d_call_a,
      ' に尻を支えられ、肉棒の上に載せられる。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        '羞じらう尻穴を、無理矢理肉棒の鞘にされる……それだけではない……',
      );
    }
    await defender.print_and_wait([
      '',
      d_call_a,
      ' の腰の両側へ開いた脚に許された自由は、絡むか絡まないかだけ。体を肉棒に預けきらないため、両手は ',
      d_call_a,
      ' を抱きしめるしかない。',
    ]);
    await defender.print_and_wait([
      '',
      d_call_a,
      ' の腰を伝って流れ落ちるだろうか……絶対に……そうなる❤️',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async hug_suspended_congress(
    attacker,
    defender,
    d_call_a,
    is_anal_sex = false,
  ) {
    await defender.print_and_wait('逃げられない……');
    await defender.print_and_wait('この体勢に入った瞬間から、逃げられない。');
    await defender.print_and_wait([
      '体を高く持ち上げられ、',
      d_call_a,
      ' に尻を支えられ、肉棒の上に載せられる。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        '羞じらう尻穴を、無理矢理肉棒の鞘にされる……それだけではない……',
      );
    }
    await defender.print_and_wait([
      '',
      d_call_a,
      ' の腰の両側へ開いた脚に許された自由は、絡むか絡まないかだけ。体を肉棒に預けきらないため、両手は ',
      d_call_a,
      ' を抱きしめるしかない。',
    ]);
    await defender.print_and_wait([
      '',
      d_call_a,
      ' の腰を伝って流れ落ちるだろうか……絶対に……そうなる❤️',
    ]);
    await defender.print_and_wait([
      'はぁ……今に限って、',
      d_call_a,
      ' の顔が見たい。',
    ]);
    await defender.print_and_wait([
      '荒い喘ぎのなかで表情が恍惚へ溶け、背を向けた ',
      d_call_a,
      ' の ',
      defender.get_colored_name(),
      ' はだんだん腰をかがめ、制御できない顔を、垂れた髪の影に隠す。',
    ]);
    await defender.say_and_wait('はぁ……❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   * @param {boolean} is_anal_sex 尻穴性交か
   */
  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('飲み込んだ……');
    await defender.print_and_wait([
      '仰向けの ',
      d_call_a,
      ' と十指を組み、締まりと弾力のある光る両脚で沈み、穴口で熱い亀頭を含むきっかけを探る……',
    ]);
    await defender.print_and_wait([
      '自分から座るなんて……',
      d_call_a,
      ' はいじわるだ……',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait('しかも、尻穴で……', true);
    }
    await attacker.say_and_wait('腰も、揺らして。');
    await defender.print_and_wait([
      '今度は ',
      defender.get_colored_name(),
      ' ののろのろした動きを待つ必要はない。締まった腔に含まれた肉棒が敏感な膣肉をそっと探れば、',
      defender.get_colored_name(),
      ' の逃げ場のない腰は、ぜんまいを巻かれたように休みなく ',
      d_call_a,
      ' の前で踊り出す……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('あぁ……疲れた……');
    await defender.print_and_wait([
      'ちゅくちゅくと ',
      defender.get_colored_name(),
      ' の大切な',
      is_vagina ? '秘部' : '尻穴',
      'を乱れて濡れるまで搗いていた肉棒が、突然止まる。',
    ]);
    await defender.print_and_wait(
      '口では疲れたと言うのに、股間の肉棒は正直に硬い。',
    );
    await attacker.say_and_wait('あとは頼む。');
    await defender.print_and_wait(
      '意地を張って、悪い肉棒を抜いてやれと思う瞬間もある。だが、ちゅる、と秘部から一寸離れただけで……体がたまらなく寂しい……',
    );
    await defender.print_and_wait([
      'だから、',
      defender.get_colored_name(),
      ' は腰を捻る。',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        '白い尻が、濡れた馬の尻尾の伴奏で舞い踊る。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('もっと奥へ。');
    await defender.say_and_wait('おかしい——');
    await attacker.print_and_wait([
      a_call_d,
      ' はほとんど ',
      attacker.get_colored_name(),
      ' の体へ揉み込まれそうだ。飽きたらない ',
      attacker.get_colored_name(),
      ' は零距離を越えても迷いなく、腰を入れて硬い肉棒を前へ送り、唇も秘部も子宮も、それに夢中な声を上げさせる……',
    ]);
    await defender.say_and_wait('ぐおおおっほおおお————❤️❤️');
    await attacker.print_and_wait(
      'いわゆるGスポットとはこういうものだ。それまでどんな子でも、優しくても明るくても、雄の匂いのする硬い肉棒にあの襞を押し開かれれば、一気に交わりに溺れる下品な雌へ堕ちる。',
    );
    await attacker.print_and_wait(
      'きれいな体が肉棒の突きに丸まり、喉には濁った淫らな声だけが残り、すぐそこにある子宮だけが熱い。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   */
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait('肉棒なしで秘部を気持ちよくする魔法。');
    await defender.print_and_wait([
      d_call_a,
      ' は自信げに笑い、五指を開いて大きな掌を下腹に重ねる。',
    ]);
    await defender.print_and_wait('確かに温かい。でも……');
    await defender.say_and_wait('んほっんん——');
    await defender.print_and_wait('みっともない声が、突然漏れた——');
    await defender.print_and_wait(['沈み込みそうだ……', d_call_a, ' の掌……']);
    await defender.print_and_wait('対比のように、子宮だけがどきどきと昂ぶる……');
    await defender.print_and_wait([
      'まるで ',
      d_call_a,
      ' の手品の手に掴まれたみたい……❤️',
    ]);
    await defender.print_and_wait('……嘘でしょう❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait('みっともない……');
    await attacker.print_and_wait('快感を乞うために、こんなことまで……');
    await attacker.say_and_wait('はぁ……❤️');
    await attacker.print_and_wait([
      '降伏するように',
      (motion ^ towards) > 0 ? '両脚を開く' : '尻を高く上げる',
      '。震える指で縮んだ',
      is_vagina ? '陰唇' : '尻穴',
      'を外へ開き、内側の桃色の肉を見せる。',
    ]);
    await attacker.say_and_wait('お願い、入れて……');
    await attacker.say_and_wait('肉棒を……入れて——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('はぁ……');
    await attacker.print_and_wait([
      'こんなに近くで見る……下の ',
      a_call_d,
      ' の顔を見る……自分がどれほど最低か、思い知らされるだけだ❤️',
    ]);
    await attacker.print_and_wait([
      '自暴自棄に体を揺らし、背徳に屈した ',
      attacker.get_colored_name(),
      ' の体は淡い桃色を帯び、',
      is_vagina ? '秘部' : '尻穴',
      'に含んだ肉棒へ必死に仕えている。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {boolean} is_vagina 秘部性交か
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('正直……今のこれだけで昇天しそうだ……');
    await attacker.print_and_wait([
      'めちゃくちゃだ……犯されている',
      is_vagina ? '秘部' : '尻穴',
      'の今の有様も、蕩けきった体も……',
    ]);
    await attacker.print_and_wait([
      'さらに滅茶苦茶なのは……まだ何かできそうな ',
      attacker.get_colored_name(),
      ' 自身……',
    ]);
    await attacker.print_and_wait(
      'はぁ……ただおかしいと叫ぶだけでなく、深く息を吸えば……',
    );
    await attacker.print_and_wait([
      '「ちゅ」と縮まった。一秒も持たず体は痙攣して崩れる。だがその一瞬、',
      attacker.get_colored_name(),
      ' の',
      is_vagina ? '秘部' : '尻穴',
      'が、深く口づけするように ',
      a_call_d,
      ' の亀頭。',
    ]);
    await attacker.print_and_wait(
      'はぁ……亀頭が跳ねている。喜んでいるのだろう……',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('お願い……');
    await attacker.say_and_wait('お願い……');
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        'この',
        attacker.uma_sex_title,
        'として、これはあまりにみっともない……',
      ]);
    } else {
      await attacker.print_and_wait(
        '大人として、トレーナーとして、これはあまりにみっともない……',
      );
    }
    await attacker.print_and_wait('でも、まったく耐えられない——');
    await attacker.print_and_wait('欲しいんだから——');
    await attacker.print_and_wait(
      '子宮の奥を、すごい肉棒に、すごく、乱暴に、強く……',
    );
    await attacker.print_and_wait('「ちゅ——と、いちばん奥まで届いて❤️');
    await attacker.print_and_wait('体を「しゅっ」と丸めて——');
    await attacker.print_and_wait([
      '世界でいちばん気持ちいい',
      is_vagina ? '秘部' : '秘部と尻穴',
      '——',
    ]);
    await attacker.print_and_wait(
      'だからお願い……そのあと、どうされてもいいから❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 挿入側
   * @param {CharaTalk} defender 被挿入側
   * @param {PrintedSpan} d_call_a 被挿入側から挿入側への呼びかけ
   */
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('おおおおおお————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' の体が破廉恥に ',
        d_call_a,
        ' の前で痙攣するように激しく捻れ、濡れた体の温かい雫を周囲へ飛ばす。',
      ]);
      await defender.print_and_wait(
        '当の本人に、そんな体裁を気にする余裕はない。粘る髪が額に寄り、下腹でどきどきが暴れている。中に肉棒も指も意地悪な舌がなくても、開閉する秘部は蓮根のように長い銀糸を引き、熱い蒸気を吐く。',
      );
      await defender.say_and_wait('イく……もう……イく……', true);
      await defender.say_and_wait('早く……早く……イかせて❤️', true);
      await defender.print_and_wait([
        '一度力を失い、それから嫌々また張りつめる。自分でも、なぜこの体がそう動くのか分からない。',
        d_call_a,
        ' にそこまで弄ばれた体は、もう野性に従っているだけなのだろう。',
      ]);
      await defender.print_and_wait('どうイくのか、いつイかされるのか');
      await defender.print_and_wait(
        '真っ白になった頭は、止まって再起動したあと、そんなことしか考えられない廃脳になる。',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('……来……来るの❤️', true);
    } else {
      await defender.say_and_wait('はぁ……');
      await defender.print_and_wait(
        'ただの呼吸のつもりが、喉から自分でも驚くほど淫らな声が絞り出た……❤️',
      );
      await defender.print_and_wait('ちゃんと悦んでいる……体が……');
      await defender.print_and_wait('羞じらい……？抵抗……？');
      await defender.print_and_wait(
        'いつからだろう、そんな感情は漏れた喘ぎと一緒に消えていた。今の……正直な自分は、もっと欲しい……もっともっと❤️',
      );
      await defender.print_and_wait([
        'もっと密着したい。',
        d_call_a,
        ' の体に密着してその熱を感じたい。もっと、',
        d_call_a,
        ' にもっと下品なことを教えてほしい。この濡れて熱い体を、人前に出せないほど恥ずかしい姿に弄んでほしい……',
      ]);
      await defender.say_and_wait(
        '……はぁ……このあとの自分を説得できる保証がないから……',
        true,
      );
      await defender.say_and_wait('……だから、しっかり……今のうちに❤️', true);
    }
  },
  /** 性虐系 */
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() =>
        attacker.say_and_wait('人でなし！強姦魔！死ねばいい！'),
      );
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait('雑魚～雑魚～'));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() =>
        attacker.say_and_wait([
          '愚か者！役立たずの',
          defender.sex_slave_title,
          '！犯されたがりの変態！',
        ]),
      );
    }
    if (buffer.length === 0) {
      buffer.push(() =>
        attacker.say_and_wait([
          'そんなに罵られたいのか、',
          defender.sex_slave_title,
          '？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼びかけ
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼びかけ
   */
  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        d_call_a,
        ' に髪を掴まれ、力では抗えないと悟り、',
        d_call_a,
        ' の股下の肉棒が凶悪に頭を上げ、',
        defender.get_colored_name(),
        ' の胸に、嫌な予感が走る。',
      ]);
      await attacker.say_and_wait([
        a_call_d,
        '～ちゃんと、わたしの匂いを覚えてね～',
      ]);
      await defender.print_and_wait([
        '抗えない。頬に叩かれた感触があり、',
        d_call_a,
        ' の肉棒の凶悪な匂いが ',
        defender.get_colored_name(),
        ' を、思わず屈服させようとする。',
      ]);
      await defender.print_and_wait([
        '顔に ',
        d_call_a,
        ' の肉棒の痕が残り、',
        defender.get_colored_name(),
        ' は顔を上げ、次の平手を待つ',
      ]);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        ' の髪を掴み、',
        attacker.get_colored_name(),
        ' は強引に自分の肉棒を',
        defender.sex,
        'の顔へ寄せ、',
        defender.sex,
        'の顔を ',
        attacker.get_colored_name(),
        ' が肉棒で突いている姿に、笑みがこぼれる。',
      ]);
      await defender.say_and_wait('んんん！！！');
      await attacker.print_and_wait([
        '雄の匂いに満ちた肉棒が ',
        a_call_d,
        ' の鼻が止まらずひくひくし、',
        attacker.get_colored_name(),
        ' は ',
        a_call_d,
        ' の髪を掴んだまま腰を振り、肉棒が ',
        a_call_d,
        ' の滑らかな頬に当たって淫らな音を立て、',
        a_call_d,
        ' の目も、とろんとしてくる。',
      ]);
    }
  },
  /** 乱交系 */
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {string} a_penis 主動側の肉棒の大きさ
   */
  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は脚を開き、',
        a_penis,
        ' の肉棒が傲然と起立し、',
        defender.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' は ',
        attacker.get_colored_name(),
        ' の合図で口を開けて寄っていく……',
      ]);
    } else {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' の合図で、',
        defender.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' は口で交代しながら肉棒に仕える……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {string} d_penis 受動側の肉棒の大きさ
   * @param {string} s_penis 助手の肉棒の大きさ
   */
  async ask_double_fuck(
    attacker,
    defender,
    supporter,
    is_first,
    d_penis,
    s_penis,
  ) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は両脚を開き、',
            defender.get_colored_name(),
            ' と ',
            supporter.get_colored_name(),
            ' は秘部を開き、ふたりの起立した肉棒を見て唇を舐める',
          ]);
          await attacker.print_and_wait([
            '',
            attacker.get_colored_name(),
            ' の露骨な誘いに、',
            defender.get_colored_name(),
            ' と ',
            supporter.get_colored_name(),
            ' は抑えきれず、',
            attacker.get_colored_name(),
            ' の体へ飛びかかり、誘う秘部を交代で突く……',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? ' は両脚を開き' : ' は四つん這いになり',
            '尻を揺らし、',
            defender.get_colored_name(),
            ' と ',
            supporter.get_colored_name(),
            ' に、交代で肉棒を奥まで入れてほしいと示す。',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          if (d_penis === s_penis) {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' は ',
              defender.get_colored_name(),
              ' と ',
              supporter.get_colored_name(),
              '  に挟まれ、二本の',
              d_penis,
              'の肉棒を交代で ',
              attacker.get_colored_name(),
              ' の淫らな秘部が飲み込んでいく',
            ]);
          } else {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' は ',
              defender.get_colored_name(),
              ' と ',
              supporter.get_colored_name(),
              '  に挟まれ、二本の',
              d_penis,
              'と',
              s_penis,
              'の肉棒を交代で ',
              attacker.get_colored_name(),
              ' の淫らな秘部が飲み込んでいく',
            ]);
          }
          await attacker.print_and_wait([
            '蜜が三人の股間を汚し、ときどき ',
            attacker.get_colored_name(),
            ' の甘い声が漏れる……',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' と ',
            supporter.get_colored_name(),
            ' の違う肉棒と、それぞれの挿し方、',
          ]);
          await attacker.print_and_wait(
            'そして自分をふたりが代わる代わる犯している背徳が、',
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' は挿入されるたび、並大抵ではない快感を味わう。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は騎乗位で ',
        defender.get_colored_name(),
        ' を秘部の奥まで入れ、それから ',
        supporter.get_colored_name(),
        ' にも自分の尻穴へ入ってほしいと示す……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' が一緒になって攻め続ける ',
        attacker.get_colored_name(),
        ' の前後の穴を、',
      ]);
      await attacker.print_and_wait(
        '二重の快感と、ふたりに同時に犯されている背徳が、',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は挿入されるたび、声を上げずにはいられない……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} is_vagina 秘部性交か
   */
  async ask_spit_roast(
    attacker,
    defender,
    supporter,
    is_first,
    is_vagina = true,
  ) {
    const part_name = is_vagina ? '秘部' : '尻穴';
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? ' は両脚を開き' : ' は四つん這いになり',
        '尻を揺らし、',
        defender.get_colored_name(),
        ' に自分の',
        part_name,
        'へ入れてほしいと示し、欲張って ',
        supporter.get_colored_name(),
        ' の肉棒を口へ含む……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' が一緒になって攻め続ける ',
        attacker.get_colored_name(),
        ' の口穴と',
        part_name,
        '……',
      ]);
      await attacker.print_and_wait([
        '下の快感と、口の中の肉棒が息を奪う衝撃が ',
        attacker.get_colored_name(),
        ' の頭の中は、もう肉棒しか残っていない……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} d_has_penis 受動側に陰茎があるか
   * @param {boolean} s_has_penis 助手に陰茎があるか
   */
  async fuck_69(
    attacker,
    defender,
    supporter,
    is_first,
    d_has_penis,
    s_has_penis,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' はベッドに横たわり、 ',
        supporter.get_colored_name(),
        ' と互いの ',
        d_has_penis
          ? s_has_penis
            ? '肉棒'
            : '肉棒と秘部'
          : s_has_penis
            ? '秘部と肉棒'
            : '秘部',
        ' を舐め合い、',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' は膨らむまで興奮した肉棒を、待ちきれずに ',
        defender.get_colored_name(),
        ' の秘部へ……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' の秘部から跳ねる蜜が、',
        supporter.get_colored_name(),
        ' が懸命に舐めている、 ',
        attacker.get_colored_name(),
        ' の肉棒が出し入れされる場所の顔を、',
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(),
        ' も ',
        defender.get_colored_name(),
        ' の口に侍らされ、甘い喘ぎが止まらない……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' は ',
        attacker.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' に一気に押さえつけられ、',
      ]);
      await defender.print_and_wait([
        'ふたりは ',
        defender.get_colored_name(),
        ' の気持ちなど構わない。',
      ]);
      await defender.print_and_wait([
        'ただ交代で、興奮して高く起立した肉棒を ',
        defender.get_colored_name(),
        ' の秘部へ力任せに出し入れする……',
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' は絶えず ',
        attacker.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' の肉棒に代わる代わる犯されている。',
      ]);
      await defender.print_and_wait(
        'どちらかが少し疲れれば、もう一方が代わって続ける。',
      );
      await defender.print_and_wait([
        'ただ ',
        defender.get_colored_name(),
        ' の、汁を飛ばすほど犯された秘部に一息の暇もなく、',
      ]);
      await defender.print_and_wait('意識まで、自分から離れていきそうだ……');
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' は ',
        attacker.get_colored_name(),
        ' に引き寄せられ、秘部へ入れられ、',
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(),
        ' も同時に ',
        defender.get_colored_name(),
        ' の尻穴へ……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' が一緒になって攻め続ける ',
        defender.get_colored_name(),
        ' の前後の穴を、',
      ]);
      await defender.print_and_wait(
        '二重の快感と、ふたりに同時に犯されている背徳が、',
      );
      await defender.print_and_wait([
        '',
        defender.get_colored_name(),
        ' は挿入されるたび、声を抑えきれず喘いでしまう……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   * @param {boolean} is_vagina 秘部性交か
   */
  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? '秘部' : '尻穴';
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' は ',
        attacker.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' に一気に押さえつけられ、',
      ]);
      await defender.print_and_wait([
        'ふたりは ',
        defender.get_colored_name(),
        ' の気持ちなど構わない。',
      ]);
      await defender.print_and_wait([
        '前後から、興奮して高く起立した肉棒を ',
        defender.get_colored_name(),
        ' の',
        part_name,
        'と口穴へ力任せに出し入れする……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' が一緒になって攻め続ける ',
        defender.get_colored_name(),
        ' の',
        part_name,
        'と口穴を、',
      ]);
      await defender.print_and_wait([
        '下の快感と、口の中の肉棒が息を奪う衝撃が ',
        defender.get_colored_name(),
        ' の頭の中は、もう肉棒しか残っていない……',
      ]);
    }
  },
  /** 道具系 */
  /**
   * @param {CharaTalk} chara 服薬者
   * @param {number} item 道具ID
   */
  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait(
            [chara.get_colored_name(), ' に凶悪な巨根が生えた！'],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            ' の肉棒が、さらに逞しくなった！',
          ]);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait(
            [chara.get_colored_name(), ' は興奮してきた'],
            { color: buff_colors[2] },
          );
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait(
          [chara.get_colored_name(), ' の乳房から乳が流れ始めた……'],
          { color: buff_colors[2] },
        );
    }
  },
};
