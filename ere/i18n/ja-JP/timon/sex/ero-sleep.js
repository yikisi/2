/**
 * @file 調教の地の文 - 睡姦
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('口づけてしまった。');
      await attacker.print_and_wait([
        '眠りのなかで、無意識にわずかに開いた ',
        a_call_d,
        ' の唇が、あまりに口づけたく見えたからだ。',
      ]);
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        '弾き上がりかけた右手を押し戻す。体を傾け、もっと覆いかぶされば、この唇の温度を独り占めできる。',
      );
      await attacker.print_and_wait('ただ……一人きりだと、やはり少し寂しい。');
    } else {
      await defender.say_and_wait('ん——');
      await attacker.print_and_wait(
        '頭が無意識に揺れ始め、顔にも潮紅が差す。呼吸が少し速くなったのだろう。',
      );
      await attacker.print_and_wait(
        'そろそろ止めるか……それとも、別のことをするか。',
      );
      await defender.say_and_wait('ちゅ……');
      await attacker.print_and_wait('では、最後にもう一度……？');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '顔を支えて、より深いところまで口づけたのに、かえって空虚が残る……',
      );
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' の唇と歯のあいだに、自分の匂いを残し切った。こっそりやる分には大勝利のはずなのに……',
      ]);
      await attacker.print_and_wait([
        'は……でも、むしろ ',
        a_call_d,
        ' がこのまま目覚めて、慌ててこちらを見てくれたら……面白いだろうなww',
      ]);
    } else {
      await defender.say_and_wait('は……は……');
      await attacker.print_and_wait('強張り、抗い、そして諦める。');
      await attacker.print_and_wait([
        '顔を支えられ、舌でいじめられて赤らむ ',
        a_call_d,
        ' の体は、意外なほど分かりやすい。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('いいな……');
      await attacker.print_and_wait(
        '柔らかくて、温かくて、しかも……いまは逃げられない。',
      );
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        '苦しげにわずかに開いた唇から漏れる吐息を聞けば、この耳が両手にどう扱われたいか、十分に分かる。',
      );
    } else {
      await defender.say_and_wait('は……❤️');
      await attacker.print_and_wait(
        '最初は……ただ、この温かな耳が手に馴染みすぎて、離せなかっただけなのに。',
      );
      await attacker.print_and_wait([
        'やがて、深く眠る ',
        a_call_d,
        ' が無意識に見せる愛らしい表情と声を、できるだけ集めたいと思い始める。',
      ]);
      await attacker.print_and_wait('大丈夫だ……時間は、まだたくさんある。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pull_ear(attacker, defender, a_call_d) {
    const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
    await attacker.print_and_wait('これは、よくない……');
    await attacker.print_and_wait(
      is_trainer
        ? '……恋人としてでも、トレーナーとしてでも、していいことではない……'
        : '……恋人として、していいことではない……',
    );
    await attacker.print_and_wait('……でも');
    await attacker.print_and_wait([
      '目の前の ',
      a_call_d,
      is_trainer
        ? ' が無防備に苦しげな寝顔を見せていると、トレーナー失格の悪戯がどうしても止められない。'
        : ' が無防備に苦しげな寝顔を見せていると、この悪戯がどうしても止められない。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '慎重になる必要はない。呼吸に合わせて浅く上下する胸は、この両手から逃げられないのだから。',
      );
      await attacker.print_and_wait(
        'だから、指を思い切り開いて、隙間からこぼれそうな柔らかさと温もりを味わえばいい。',
      );
      await attacker.print_and_wait(
        '口と鼻まで寄せて、昼なら絶対に許されない乳の香りを吸い込むことさえ、拒まれない。',
      );
    } else {
      await attacker.print_and_wait([
        'みっともない。眠る ',
        a_call_d,
        ' を下に押さえ、両手をその柔らかさへ沈めて抜けられない自分。',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' の顔に寄っていく眉も、下で熱を増す柔らかい体も、見ないふりをする……',
      ]);
      await attacker.print_and_wait(
        '許可も、恥ずかしげな黙認すら、この動きにはない……',
      );
      await attacker.print_and_wait('……いけない。急に、もっと昂ぶってきた。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('ん……気のせいか……');
      await attacker.print_and_wait(
        '乳首が硬くなる速さは、起きているときより遅い気がする。',
      );
      await attacker.print_and_wait(
        '文句も、本能の抵抗で振り払われることもない。淡い突起を上へ摘まみ上げる二本の指は、優雅で熟練している。',
      );
      await attacker.print_and_wait('え……つまり……');
      if (!attacker.race && attacker.race > 0) {
        await attacker.print_and_wait([
          '下の ',
          a_call_d,
          ' が乳首を摘ままれたとき、どんな艶っぽい思いを巡らせているのかを味わおうとして、失格の下品なトレーナーは目を細めて笑う。',
        ]);
      } else {
        await attacker.print_and_wait([
          '下の ',
          a_call_d,
          ' が乳首を摘ままれたとき、どんな艶っぽい思いを巡らせているのかを味わおうとして、',
          attacker.get_colored_name(),
          ' ',
          'は目を細めて笑う。',
        ]);
      }
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          '目の前の下品な乳首は、絶え間ない愛撫で硬く張り詰めている。',
        );
        await attacker.print_and_wait(
          '体までそう強張らせて、まるでこう言っている……',
        );
      } else {
        await attacker.print_and_wait('このまま、乳まで搾れそうだ……');
        await attacker.print_and_wait(
          '絶え間ない愛撫で硬く張り詰めた、目の前の下品な乳首が、そう思わせる……',
        );
        await attacker.print_and_wait(
          'しかも体までそう強張らせて、まるでこう言っている……',
        );
      }
      await defender.used_to_say_and_wait('ここは触っちゃだめな、敏感な急所！');
      await attacker.print_and_wait('かわいすぎるww');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '覚えられないのだから、いま引き返せばまだ間に合う……',
      );
      await attacker.print_and_wait([
        '目の前の妖しい景色をこっそり目に収めて、慌てて ',
        a_call_d,
        ' の服を直してやることも、できる。',
      ]);
      await attacker.print_and_wait(
        '指で、淡い肉粒を覆う包皮を揉み開き、空気に晒された敏感な陰核が、愛らしい桃色からより妖しい充血の赤へ変わるのを見る。',
      );
      await attacker.print_and_wait([
        '背徳の昂ぶりで体を微かに震わせる ',
        attacker.get_colored_name(),
        ' は、やはり続けるほうを選ぶ。',
      ]);
    } else {
      await defender.say_and_wait('ん……');
      await attacker.print_and_wait(
        'ああ、気づいたときには、こんなに赤く腫れた哀れな姿になっていた。',
      );
      await attacker.print_and_wait([
        '軽く触れて、少しだけ待てば、この小さな敏感な突起は、眠る ',
        a_call_d,
        ' の無垢な体を、さらにだらしなく動かす……',
      ]);
      await attacker.print_and_wait('さらさら……');
      await attacker.print_and_wait(
        '意識はなく、ただ快感に動かされる体が、シーツとの擦れで苦しさを紛らわせようとする。',
      );
      await attacker.say_and_wait('本当に、すまない……', true);
      await attacker.say_and_wait(
        'でも、もう一度だけ見せてほしい。最後の一度。',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async finger_fuck(attacker) {
    await attacker.print_and_wait('なるほど……こういうことか……');
    await attacker.print_and_wait(
      '想像していた、締まりのいい湿った膣肉が指先を押し出そうとする抵抗は、まったくない。',
    );
    await attacker.print_and_wait(
      '理性の制止がなくなった秘部は、正直に、浅く入った指へ熱く口づけている。',
    );
    await attacker.print_and_wait(
      '上へ鉤け、下へ擦り、膣肉の蠕動に合わせて、左右へ……',
    );
    await attacker.print_and_wait(
      'は……脚をそんなに閉じられたら、続けられないよ。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async prepare_virgin(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '隠す必要も、絶対に顔を赤らめる ',
      a_call_d,
      ' の気持ちを慮る必要もない。',
    ]);
    await attacker.print_and_wait(
      'いまこの瞬間、好きにできる無防備な体が目の前にある。',
    );
    await attacker.print_and_wait(
      `すべきことは、呼吸に合わせて浅く上下する狭い隙間の秘部を見飽きてから、両手の指先に少し力を入れ、${defender.sex}をさらに妖しく濡れた形へ開かせることだけだ。`,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.sex,
        'をもっと気持ちよくしたい。',
        defender.sex,
        'の秘部をもっと柔らかくしたい。この美しい体を、自分の動きでさらに我を忘れてよじらせたい……',
      ]);
      await attacker.say_and_wait('は……は……');
      await attacker.print_and_wait(
        '指を動かすだけなのに、頭のなかで暴れる欲が息を荒くさせる。',
      );
      await attacker.print_and_wait('どこだ……もう近いはずなのに……');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        'まわりの膣肉よりわずかな隆起が、指を勝手に吸い寄せ、その微かな盛り上がりだけが持つ熱と粘りを伝える……答え合わせをしてくれたのは、正直になった ',
        a_call_d,
        ' が突然反らす下腹だ。',
      ]);
      await attacker.print_and_wait('……見つけた。');
    } else {
      await attacker.print_and_wait('押し潰す。');
      await attacker.print_and_wait('揉む。');
      await attacker.print_and_wait('突く。');
      await attacker.print_and_wait('鈍い爪で、まさぐる。');
      await attacker.print_and_wait(
        '意識がないから、いつ触れても、どこを触れても、汗ばんで柔らかくなった体は、指へいちばん正直で激しい返事を返す。',
      );
      await attacker.print_and_wait('飽きるまでで止める……');
      await attacker.print_and_wait('だが、本当に止められるときが来るのか……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_anal(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'ああ、やはり眠っていても、ここだけは特に気にしている……',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' の指が曖昧に寄り、体がちょうど警戒する程度の粗い感触で、小さな穴の縁を円く撫でる。',
        a_call_d,
        ' の、さっきまで悠長だった両脚は、慌ててベッドの上で真っ直ぐに突っ張る。',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('ようやく、と言うべきか……？');
      await attacker.print_and_wait([
        '体を強張らせ続けることはできず、曖昧な愛撫に溶かされた ',
        a_call_d,
        ' の尻穴は、本人に記憶のないまま静かに緩み、何を吞んでもおかしくない性愛の穴へ変わっていく。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async prepare_anal(attacker) {
    await attacker.print_and_wait([
      '目の前で開閉する穴から吐かれる、誘う熱を掌で受け、',
      attacker.get_colored_name(),
      ' の四本の指は杭のように、恥ずかしがる肉穴を閉じさせまいとし、',
      attacker.get_colored_name(),
      ' の視線から逃げようとする尻の肉を固定する。',
    ]);
    await attacker.print_and_wait(
      'ひときわ長く太い中指だけは別の仕事がある。蠍の尾のようにわずかに曲がり、尻穴へ少しずつ寄り、それからゆっくり、しかし決然と入る。',
    );
    await attacker.print_and_wait('抵抗は強い。');
    await attacker.print_and_wait([
      '自ら蠕動する穴の肉は、生き物のように息をして ',
      attacker.get_colored_name(),
      ' の指を拒む。隣の秘部のように性愛のために在る淫肉ではないのに、いま ',
      attacker.get_colored_name(),
      ' の指に対しては、意外なほど積極的だ。',
    ]);
    await attacker.print_and_wait('怯えているのか……喜んでいるのか……？');
    await attacker.print_and_wait(
      '残念ながら、いま女主人公の口から答えは聞けない……',
    );
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
          'いましていることを抑制した言葉で言い表すだけで、体を冷やす背徳が悪寒となって全身を走る。',
        );
        await attacker.print_and_wait(
          'トレーニングのあと、状態を確かめるために手を添える親しさは、たまにあるはずなのに……',
        );
        await attacker.print_and_wait(
          '不思議なことに、いま頭のなかでは、この両脚と「レース」を結び付けられない。',
        );
      }
      await attacker.print_and_wait('いまの自分の頭にあるのは……');
      await attacker.print_and_wait(
        'この脚に交差して腰を絡まれたら、きっとたまらない、ということだ。',
      );
      await attacker.print_and_wait('は……いま眠っていて、よかった。');
    } else {
      await attacker.print_and_wait('柔らかくて、弾力がある。');
      await attacker.print_and_wait('曲線は優雅で、長い。');
      await attacker.print_and_wait('指の愛撫で震えるほど、敏感さも最上だ。');
      if (defender.race > 0) {
        await attacker.print_and_wait('惜しいな……');
        await attacker.print_and_wait(
          'こんな両脚が、レースのためだけに在るなんて……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_tail(attacker, defender, a_call_d) {
    await attacker.print_and_wait('これは……まずいな……');
    await attacker.print_and_wait([
      '目の前の、手触りがよく、',
      a_call_d,
      ' の体の香りをたっぷり含んだ尻尾の毛だけを言っているのではない。',
    ]);
    await attacker.print_and_wait([
      '眠る ',
      a_call_d,
      ' をベッドの上で裏返し、尻を上げ、衣まで剥ぎ、',
      defender.teen_sex_title,
      'の秘所をこんなに乱暴な仕方で好きに眺めている自分のことを、言っている……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pull_tail(attacker, defender, a_call_d) {
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait(
      '少し力を足すだけで尻は上がり、ここで手を離せば、腰まで落ちる……',
    );
    await attacker.print_and_wait([
      'おいおい……自分の前で、いまどんな動きを見せているか分かっているのか、哀れな ',
      a_call_d,
      '？',
    ]);
    await attacker.print_and_wait('同時に、微妙な物足りなさもある。');
    await attacker.print_and_wait('だって……');
    await attacker.say_and_wait(
      [
        a_call_d,
        ' なら、この少し乱暴な悪戯にもっと返事をしてくれるはずなのに……',
      ],
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '理性に支配されていないから、熱い吐息を含んだ唇が寄っても、無知で恐れを知らない ',
        a_call_d,
        ' の秘部は、下腹の上下に合わせて浅く呼吸しているだけだ。',
      ]);
      await attacker.print_and_wait(
        '心拍を速める匂い……舌先から全身へ溶ける、酸っぱく甘い生臭さ……',
      );
      await attacker.print_and_wait(
        '口笛を吹くような唇の形で膣のなかへ巻かれ、ゆっくり前へ進む舌と、温かな愛撫に未熟に蠕動して抗う穴……',
      );
      await attacker.print_and_wait([
        '二人分の呼吸のなか、一人だけが見る淫らな景色を独占した ',
        attacker.get_colored_name(),
        ' の舌先は、少しずつ、懸命に進んでいく。',
      ]);
    } else {
      await attacker.print_and_wait(
        '初め、狭い隙間に閉じていた清楚な形は、もうあまり思い出せない。迎えに来る舌に内外まで濡らされた穴は、いま外へ開き、微かに震えている……',
      );
      await attacker.print_and_wait(
        'ベッドの上で緩やかに開いていた両足は、股間の濡れた快感にどう応えていいか分からず、震えたまま、悪い子の肩へ強く回る。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '目の前の光景は、本当に罪の意識を湧かせる……',
      );
      await attacker.say_and_wait([
        'は……',
        a_call_d,
        ' が眠っているすきに手を出した自分は……本当に……',
      ]);
      if (defender.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          'ウマ娘と肉棒。ほとんど交わらないはずの二つの言葉が、いま ',
          attacker.get_colored_name(),
          ' の唇で粘り気を帯びて繋がっている……',
        ]);
      }
      await attacker.print_and_wait([
        '眠っていても、奉仕に腰を上げる程度の本能はある。',
        attacker.get_colored_name(),
        ' の両唇は、自ら動く肉棒に強引に押し開かれ、本来なら栄養を取る場所を、硬く立ち上がった危ういものが占有し、体をおかしくする下品な匂いを好き放題に撒いている。',
      ]);
      await attacker.print_and_wait(
        '目の前の寝顔で、余計な羞恥が生まれるか……もちろん生まれる。',
      );
      await attacker.print_and_wait('でも、だからこそ止められない欲もある……');
    } else {
      await attacker.say_and_wait('ちゅるちゅる～');
      await attacker.print_and_wait('気づいたら、少し上手くなっていた……');
      await attacker.print_and_wait(
        '頭を少し仰げば、目の前の肉棒をもっと深く銜えられる……',
      );
      await attacker.print_and_wait(
        '潰された舌で横から軽く舐めれば、気持ちよさそうに震える。',
      );
      await attacker.print_and_wait('唇を活かせば……吸って……');
      await attacker.print_and_wait(
        'けほっ……濃く流れ込む恥ずかしい匂いが、頭をくらくらさせる……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async deep_blow_job(attacker, defender, a_call_d) {
    await attacker.say_and_wait('もっと、深く……');
    await attacker.print_and_wait([
      '貪欲に寝言を漏らし、快感を求める本能に支配された ',
      attacker.get_colored_name(),
      ' は頭を下げる。',
    ]);
    await attacker.say_and_wait('ちゅるちゅる……');
    await attacker.print_and_wait([
      '……こうして、',
      attacker.get_colored_name(),
      ' の小さな口は、この瞬間から栄養を取る以外の意味を与えられ、粘る音を立てて肉棒へ絡む下品な性器へ堕ちた。もう取り返しはつかない❤️',
    ]);
    await attacker.print_and_wait(
      '喉の柔らかい肉で亀頭を迎え、器用な舌先で肉棒の充血した筋を撫で、空気を介さない締め付けで棒を支える……',
    );
    await attacker.print_and_wait([
      '何を学び、何を覚え、どんな姿になっていくのか……いま ',
      a_call_d,
      ' の傍らに蹲る ',
      attacker.get_colored_name(),
      ' は……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_deep_blow_job(attacker, defender) {
    await attacker.print_and_wait('目の前の光景は、本当に罪の意識を湧かせる……');
    if (defender.sex_code === 0 && defender.race > 0) {
      await attacker.print_and_wait(
        'ウマ娘と肉棒。ほとんど交わらないはずの二つの言葉が、いま粘り気を帯びて繋がっている……',
      );
    }
    await attacker.print_and_wait([
      defender.teen_sex_title,
      'の両唇は肉棒に強引に押し開かれ、本来なら栄養を取る場所を、硬く立ち上がった危ういものが占有し、体をおかしくする下品な匂いを好き放題に撒いている。',
    ]);
    await attacker.print_and_wait(
      '目の前の寝顔で、余計な不憫が生まれるか……もちろん生まれる。',
    );
    await attacker.print_and_wait('でも、だからこそ止められない欲もある……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hand_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '眠る ',
      a_call_d,
      ' は何も言わない。それでも、目の前で赤く脹れた充血の肉棒を見る ',
      attacker.get_colored_name(),
      ' の、すでに温め始めた十指は、自分が何をすべきか完全に分かっている。',
    ]);
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait([
      'その灼熱に驚き、',
      attacker.get_colored_name(),
      ' が肉棒に添えた手は本能で後ろへ退く。それから冬に両足を布団へ入れるように、少しずつ、また近づく。',
    ]);
    await attacker.print_and_wait(
      'かなり凶悪だ……女の子の下腹を跳ねさせる形なのに……',
    );
    await attacker.print_and_wait(
      'でも……指で環を作って軽く扱けば、先走りが指のあいだで踊る様子は……少し可愛い。',
    );
    await defender.say_and_wait('は……は……ん——');
    await attacker.print_and_wait('意味が、分かるようになってきた……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('なんだか');
      await attacker.print_and_wait('意外なほど、自然な動きだ……');
      await attacker.print_and_wait(
        '両手で肉棒を支えたあと、頭は気づかぬうちに寄っていく。',
      );
      await attacker.print_and_wait('指の体温で温め、擦り開き、それから……');
      await attacker.say_and_wait('ちゅ～');
      await attacker.print_and_wait('濃すぎる……');
      await attacker.print_and_wait(
        '完全に、盗み食いする色情な奴になってしまった……',
      );
    } else {
      await attacker.print_and_wait(
        '肉棒を横へ寄せ、顔を傾けて上から下まで丁寧に舐める。角が溶けて落ちるアイスを扱うように。',
      );
      await attacker.say_and_wait('ちゅるちゅる——');
      await attacker.print_and_wait([
        a_call_d,
        ' の亀頭は艶やかに光り、その水の跡は、どちらがどれだけ悪いのか……',
      ]);
      await attacker.print_and_wait('もう……全然、分からない……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async fuck_tit(attacker, defender, a_call_d) {
    await attacker.print_and_wait('素晴らしいと思わないか。');
    await attacker.print_and_wait([
      '自分の下に俯く ',
      a_call_d,
      ' が、手で',
      defender.teen_sex_title,
      'だけの柔らかさを捧げ、灼熱の肉棒を囲む姿……',
    ]);
    await defender.say_and_wait('ん……');
    await attacker.print_and_wait(
      'ちゃんと届いているようだ。肉棒の亀頭から立ち上る、愛欲を満載した熱い白い湯気。',
    );
    await attacker.print_and_wait(
      '隠したがる目覚めのときより、完全に無防備な寝顔は、正直すぎて興奮する。',
    );
    await attacker.print_and_wait('うん、十分に美味い表情へ燻されていた。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async tit_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'そんな要求は聞いていないのに、自分から上衣を下ろして胸を出した……',
    );
    await attacker.say_and_wait(
      '肉棒に、どこまで屈するつもりなんだ自分は……',
      true,
    );
    await attacker.print_and_wait(
      '柔らかさに包まれた肉棒は、秘部を容易に震わせる形へ、誇らしげに立ち上がっている。',
    );
    await attacker.print_and_wait([
      '両手で乳房を寄せ、顔を上げられない ',
      attacker.get_colored_name(),
      ' は、起きていたら ',
      a_call_d,
      ' がどんな顔をするかを想像する。',
    ]);
    await attacker.print_and_wait([
      'どんな顔を予見したのか、静かな部屋のなかで、',
      attacker.get_colored_name(),
      ' の胸がどきどきと鳴る。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tit_and_blow_job(attacker, defender) {
    await attacker.print_and_wait([
      defender.race > 0
        ? '乳肉に挟んだ肉棒を気持ちよく立たせるだけでは足りないのか……普段、担当をどんな目で見ているというのか……'
        : '乳肉に挟んだ肉棒を気持ちよく立たせるだけでは足りないのか……普段、仲間をどんな目で見ているというのか……',
    ]);
    await attacker.say_and_wait('ちゅるちゅるちゅる……');
    await attacker.print_and_wait([
      '乳肉は、肉棒の竿へ落ちた先走りで滑り、艶やかに光る。苦労している胸より、いちばん熱く膨らんだ亀頭を、',
      attacker.get_colored_name(),
      ' は両手で口へ迎える。',
    ]);
    await defender.say_and_wait('ん……');
    await attacker.print_and_wait(
      '舌が言うことを聞かなくなる。口の上の亀頭が少しでも寂しそうだと、乳首を寄せて肉棒へ奉仕する動きが止められない……',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async suck_nipple(attacker, defender) {
    await attacker.print_and_wait([
      era.get(`talent:${defender.id}:乳头类型`) > 0
        ? '淡い、きれいな乳首'
        : '褐色の、きれいな乳首',
      'を、寄ってくる ',
      attacker.get_colored_name(),
      ' から逸らす本能はまったくなく、浅く上下する',
      defender.teen_sex_title,
      'の柔らかさは、悪い奴の口へ素直に収まる。',
    ]);
    await attacker.say_and_wait('す——');
    await attacker.print_and_wait([
      'やがて、舌先で自ら熱を持つ赤い点が硬さとして残り、',
      attacker.get_colored_name(),
      ' は慎重に歯のあいだでその肉粒を銜え、ふっと吸う——',
    ]);
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait('は……いま抗おうとしても、もう遅いww');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '硬い乳粒を歯のあいだで銜えた瞬間、仰向けの ',
      a_call_d,
      ' の体が一気に強張る。',
    ]);
    await attacker.print_and_wait('え……そうか……');
    await attacker.print_and_wait(
      `歯を優しく使い、敏感な乳首のまわりに不揃いの赤い痕を残す……ついでに、懐の${defender.teen_sex_title}の体を絶えず震わせる……`,
    );
    await attacker.print_and_wait([
      '次の狙いが分かったのだろう。乳首を舌で丁寧に舐め濡らした瞬間、',
      a_call_d,
      ' の両脚は ',
      attacker.get_colored_name(),
      ' の腰へ絡む……',
    ]);
    await defender.say_and_wait('ん——');
    await attacker.print_and_wait('可愛い。');
    await attacker.print_and_wait([
      '懐の ',
      a_call_d,
      ' だけではない。赤い腫れの痕が残った乳首も。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_armpit_intercourse(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '眠る ',
      a_call_d,
      ' の無防備な手が、性欲に頭を曇らせた ',
      attacker.get_colored_name(),
      ' に真っ直ぐ上へ上げられる',
    ]);
    await attacker.print_and_wait([
      'それから ',
      a_call_d,
      ' の腋の下は、肉棒の大きな亀頭に責任を持って丁寧に洗われる。',
    ]);
    await attacker.print_and_wait(
      '湯気を立てる腋の肉が抽挿に合わせて緋色を帯び、本当に性に関わる色情の器官になったようだ……',
    );
    await attacker.print_and_wait([
      'それを当然だとは、まだ完全には思えない。',
      attacker.get_colored_name(),
      ' の動きには、いくらか迷いがある……',
    ]);
    await attacker.print_and_wait([
      '……迷いながら、背を向けた ',
      a_call_d,
      ' の腋の穴を肉棒で擦り、出入りさせる……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_foot_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('ふ……完全に、いわゆる変態だな。');
    await attacker.print_and_wait([
      '眠る ',
      a_call_d,
      ' の両足を手で支え、自分の肉棒へ奉仕させる。無自覚な ',
      a_call_d,
      ' が、まっすぐ嫌悪の目を向けられないと知っているから出せる勇気なのか……',
    ]);
    await attacker.print_and_wait([
      '初め、見知らぬ熱に触れた両足は怯えて逃げようとしたが、',
      attacker.get_colored_name(),
      ' の両手にまた引き戻される。',
    ]);
    await attacker.print_and_wait('それから、気づいたのだろう。');
    await attacker.print_and_wait(
      '自分の足裏を侵犯しているこの肉棒は、脆いものではないと。',
    );
    await attacker.print_and_wait([
      a_call_d,
      ' が肉棒を踏む動きは、ずいぶん自然になった。',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' の肉棒を足裏で踏むことが、生まれつきの才能であるかのように。',
    ]);
    await attacker.print_and_wait('っ……');
    await attacker.print_and_wait([
      'それだけを思っただけで、',
      attacker.get_colored_name(),
      ' の下腹はまた熱くなる。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async foot_job(attacker) {
    await attacker.print_and_wait(
      'ベッドの上で立ち上がったせいで、視線のなかで小さくなった肉棒まで、ずいぶん可愛く見える。',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' は足を上げ、赤く脹れた肉棒を足元へ踏みつける。',
    ]);
    await attacker.print_and_wait(
      'え……こんなに強い肉棒でも、足裏に踏まれると、こんなに可愛く揺れるのかww',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async tail_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('器用だ……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' の予想を超える敏さで、曲がった毛並みのウマの尻尾が肉棒へ絡む。',
    ]);
    await attacker.print_and_wait([
      '肉棒の、頭がくらくらするほど濃い匂いは尻尾に保護色を纏わされるが、それがかえって ',
      a_call_d,
      ' の肉棒を、これまで以上に興奮させる。',
    ]);
    await attacker.print_and_wait([
      'なるほど……',
      defender.uma_sex_title,
      'たちの尻尾は、本当にこんなことができるのか……',
    ]);
    await attacker.print_and_wait([
      '……この暴れる熱を感じながら、背を向けて尻を上げた ',
      attacker.get_colored_name(),
      ' の、赤らむ耳の動きまで愛らしくなる。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async missionary(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait(
      'これが……互いの体温をいちばん感じられる姿勢なのだろう。',
    );
    await attacker.print_and_wait([
      'いわゆる正常位、あるいはミッショナリー。絡み合う二人を前から見れば、',
      attacker.get_colored_name(),
      ' が懐へ飛び込み、母乳を吸う姿にも見える。',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' の体が ',
      a_call_d,
      ' の体を覆い、硬い肉棒が容赦なく',
      is_vagina ? '秘部' : '尻穴',
      'へ入り、無意識の ',
      a_call_d,
      ' の長く細い引き締まった脚は、少しみっともない姿勢で ',
      attacker.get_colored_name(),
      ' の腰の両側から伸び、硬く足裏を天へ向けて張り詰める……',
    ]);
    await attacker.print_and_wait([
      '信じられないほど従順で、',
      a_call_d,
      ' の体はふわりと自分の懐へ揉み込まれる。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async doggy_style(attacker, defender, a_call_d) {
    await attacker.print_and_wait('子犬のように……');
    await attacker.print_and_wait(
      'あの両脚……前足の裏をピンと伸ばし、膝を曲げて、濡れた腰を高く上げた両脚……',
    );
    await attacker.print_and_wait(
      'その上で支えられているのは……子犬のように、無意識に揺れる尻。',
    );
    await attacker.print_and_wait([
      '少し惜しい。',
      a_call_d,
      ' がまだ目覚められないせいで、この姿勢は完全に、腰を抱く ',
      attacker.get_colored_name(),
      ' の両手に頼っている。',
    ]);
    await attacker.print_and_wait([
      '扇情的な姿のまま、人形のようにベッドから抱き上げられた ',
      a_call_d,
      ' の体の震えは止まらず、見れば乾いた唇を舐めずにはいられない。',
    ]);
    await attacker.print_and_wait('完全に、一方的な乱暴みたいだ……');
    await attacker.print_and_wait('でも……それでいい……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('もっと、深く。');
    await attacker.print_and_wait([
      a_call_d,
      ' からの懇願は聞こえないから、肉棒が根元まで没するまで好きに入れ、眠る ',
      a_call_d,
      ' を自分の体へ揉み込める。',
    ]);
    await attacker.print_and_wait([
      '飽くなき ',
      attacker.get_colored_name(),
      ' は零の距離を越えても迷わず、股下の肉棒は反った腰とともに硬く前へ進み、女の子の唇も、秘部も、子宮も、それに魅入られた喘ぎを上げさせる……',
    ]);
    await defender.say_and_wait('————❤️❤️');
    await attacker.print_and_wait(
      'いわゆるGスポットとはこういうものだ。それまでどんな女の子でも、優しくても明るくても、雄の匂いを帯びた硬い肉棒にその襞を押し開かれれば、一気に性愛に魅入られた下品な雌へ堕ちる。',
    );
    await attacker.print_and_wait(
      '整った体は肉棒の衝突で丸まり、喉には濁った淫声だけが残り、間近の子宮だけが熱く脈打つ。',
    );
    era.println();
    await attacker.print_and_wait(
      '…………でも、女の子が眠っているすきに、こっそり肉棒と快感で体を馴らすやり方は……',
    );
    await attacker.say_and_wait(
      'しているのが自分でも、これは卑怯だと言わざるを得ない❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_womb(attacker, defender, a_call_d) {
    await attacker.print_and_wait('肉棒なしで秘部を気持ちよくする魔法。');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' は自信ありげに笑って五指を開き、広い掌を下腹へ覆う。',
    ]);
    await attacker.print_and_wait('確かに温かい感触だ。だが……');
    await defender.say_and_wait('んほっん——');
    await attacker.print_and_wait('見苦しい声が、突然漏れた——');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      ' の穏やかな眠りの呼吸が、急に速く焦る',
    ]);
    await attacker.print_and_wait([
      '沈み込みそうだ……',
      attacker.get_colored_name(),
      ' の掌が……',
    ]);
    await attacker.print_and_wait(
      '対比するように、子宮だけがどきどきと昂ぶる……',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' の手品のような手に掴まれたみたいに……',
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      '目覚めたあとでも、',
      a_call_d,
      ' はこの、両脚を止めどなく震わせる快感を思い出せるだろう。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('吞み込んでしまった……');
    await attacker.print_and_wait([
      '仰向けの ',
      a_call_d,
      ' と気ままに十指を絡め、',
      attacker.get_colored_name(),
      ' の締まりよく弾力のある、艶やかな両脚が下へ沈み、穴口で擦りながら、肉棒の大きな亀頭を銜えるきっかけを探す……',
    ]);
    if (!is_vagina) {
      await attacker.print_and_wait('ここは、こっそり……尻穴で……❤️');
    }
    await attacker.print_and_wait([
      '今度は ',
      a_call_d,
      ' のゆっくりした優しい動きを待たなくていい。締まった膣へ吞まれた肉棒が敏感な膣肉を軽く突くだけで、逃げ場のない ',
      attacker.get_colored_name(),
      ' の腰は、ぜんまいを巻かれたように休まず ',
      a_call_d,
      ' の前で舞い始める…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('正直……いまのこれだけで、昇天しそうだ……');
    await attacker.print_and_wait([
      'めちゃくちゃだ……犯されている',
      is_vagina ? '秘部' : '尻穴',
      'の現状も、気持ちよすぎてどうしようもない体も……',
    ]);
    await attacker.print_and_wait([
      'しかも、',
      attacker.get_colored_name(),
      ' をこうしているのは、眠くてぼんやりした ',
      a_call_d,
      ' の肉棒だけなのか❤️',
    ]);
    await attacker.print_and_wait('は……深く吸えば……');
    await attacker.print_and_wait([
      '「ちゅ」と窄まった。一秒も持たず体は痙攣して崩れ落ちたが、その一瞬、',
      attacker.get_colored_name(),
      ' の',
      is_vagina ? '秘部' : '尻穴',
      'は情を込めて ',
      a_call_d,
      ' の亀頭へ口づけた。',
    ]);
    await attacker.print_and_wait(
      'は……亀頭が脈打っている。喜んでいるのだろう……',
    );
    await attacker.print_and_wait([
      a_call_d,
      ' に跨り、姿勢では主導権を握っているはずなのに、',
      attacker.get_colored_name(),
      ' の顔は、いま動揺の緋色に染まっている。',
    ]);
  },
};
