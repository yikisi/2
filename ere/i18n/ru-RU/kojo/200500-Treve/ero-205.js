/**
 * @file 卓芙 - 调教
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
      '像 ',
      treve.get_colored_name(),
      ' 这样，你能够对',
      treve.sex,
      '的整个人生产生重大影响，让',
      treve.sex,
      '后半生反复想起你、牵挂你、这就有了一种「强奸」了 ',
      treve.get_colored_name(),
      ' 整个人生的满足感，爽快得无以复加。',
    ]);
    await era.printAndWait(
      '心灵上的满足是足够过瘾，但要追求肉体上的满足，就必须透过实际的接触。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 把 ',
      treve.get_colored_name(),
      ' 放在地上，用衣服垫在',
      treve.sex,
      '娇嫩的后背。摆好位置后，',
      treve.uma_sex_title,
      '青春的酮体，尤其是盈盈玉立的粉乳，彻底地暴露在 ',
      you.get_colored_name(),
      ' 眼底。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 趁着 ',
      treve.get_colored_name(),
      ' 神智迷乱地当口，用舌头贴着含苞怒贲的那道优美弧线轻轻舔抚，舌端柔和又周到地照顾',
      treve.sex,
      '每一寸粉嫩莹润的肌肤，由外及内，由下到上，逐一肆意地侵占',
      treve.sex,
      '的胸部，直向峰尖顶上的那一点嫣红。',
    ]);
    await treve.say_and_wait('不……不要这样，放过我……');
    await treve.say_and_wait('我好不容易才忘记的，不可以再被你……');
    await treve.say_and_wait('唔……');
    await era.printAndWait(
      `没理会 ${treve.name} 的微弱拒绝，${
        you.name
      } 持续进行侵袭。在几轮舔弄以及吮吸过后，用牙齿轻啮住${treve.teen_sex_title}樱桃般的玲珑乳蕾，舌尖来回挑拨。火热欲望立即化作一股电流，融合到奔腾的血液中，冲蚀着 ${
        treve.name
      } 仅存的一点清醒意识。`,
    );
    await era.printAndWait(
      `无论${treve.sex}个人意愿如何，在 ${you.name} 巧妙地挑逗下，粉红乳尖被舔弄得翘立膨胀，如同一颗嫣红的朱玉。${you.name} 索性一把抓上圆润的右乳，包住球状的半个圆顶，感受雪乳盈韧的弹性和饱满，不由使劲揉捏了几把。`,
    );
    await era.printAndWait(
      `滑腻柔和的手感，与${treve.teen_sex_title}抑制不住的低低呻吟声交相辉映，促使 ${
        you.name
      } 在另一边的圆润乳球上加重了搅动的力道，直弄得${treve.teen_sex_title}的小腹不停地短促起伏，白嫩的每一寸肌肤都在兴奋的冲击中，波浪般盈盈波动。`,
    );
    era.printButton('「你应该已经知道自己的肉体有多淫乱了吧？」', 1);
    era.printButton('「就算你不遇到我，你以为你还能抗拒？」', 2);
    if ((await era.input()) === 1) {
      await treve.say_and_wait('你……胡说，我才不会向你低头。');
    } else {
      await treve.say_and_wait('我永远也不向你认输。');
    }
    await era.printAndWait(
      `即使否认，${
        treve.name
      } 也很难与自己春情勃发的肉体作对。${treve.uma_sex_title}之血带来的发春期，现在已经全部转为欲火，无论是粉颈处的轻舔温啮，还是胸腹部的捻拢拨挑，总能让${
        treve.sex
      }爱欲横流，享受有如飞在云雾中的快乐感觉。`,
    );
    era.printButton('继续羞辱', 1);
    await era.input();
    await you.say_and_wait(
      '不肯认输，那我手指上这些湿哒哒、黏腻腻的东西是什么？你要不要闻闻看啊？其实你抵抗什么呢？在没有比我更了解你身体的人了。你这变态的小暴露狂，光是被我这样子看，你就已经…',
    );
    await era.printAndWait(
      ` ${you.name} 轻声调笑，看着 ${
        treve.name
      } 羞愤欲死地表情，眼中闪烁出几分得意。再次俯下身来，侵略${treve.teen_sex_title}优美的脖颈。左手五指并用，悠闲地摩挲着${
        treve.sex
      }紧绷细致的后背，在曲线柔顺的脊椎和尾根上轻轻抚弄，犹似起舞。右手则从${
        treve.sex
      }热情如火的下身盘旋而上，手指带着亮晶晶的一片湿润，在${
        treve.sex
      }眼前来回摇晃，得意示威。`,
    );
    await era.printAndWait(
      `一系列的爱抚动作，丝毫没给 ${treve.name} 冷静反抗地余地。敏感肉频频传来的强烈快感，侵蚀了${treve.sex}的意志和心灵。`,
    );
    await treve.say_and_wait('嗯。');
    await era.printAndWait(
      `随着${
        treve.sex
      }愈渐紧促的呼吸，${treve.teen_sex_title}终于不堪重负地呻吟出来。`,
    );
  },
  /**
   * @param {CharaTalk} treve
   * @param {CharaTalk} you
   */
  async ero_end(treve, you) {
    era.printButton('「你发誓不会对我低头？」', 1);
    era.printButton('「那时候，你的头低到哪里去了？」', 2);
    era.printButton('「忘记之前你把头放在什么地方了啊。」', 3);
    await era.input();
    await era.printAndWait(
      `${treve.name} 美丽的眼睛，悄然滑下晶莹的眼泪，打湿了${treve.sex}亮泽的睫毛，暴露出自信的外表下那柔弱无助的芳心。`,
    );
    await era.printAndWait(
      `然后，这楚楚可怜的神情，没有让 ${you.name} 乱了方寸。${you.name} 只是伸出舌头，沿着 ${treve.name} 白嫩地脸庞，慢慢舔干两道泪痕，并在${treve.sex}脸上的湿润凉意尚未消褪之际，凑到${treve.sex}耳边低低说话。`,
    );
    era.printButton('「一夜夫妻百日恩，honey。」', 1);
    era.printButton('「看在我白干这么多晚的份上，让我过把瘾如何？」', 2);
    await era.input();
    await era.printAndWait(
      `${you.name} 轻声说话，右手稍微加重揉捏乳房的力道，引得 ${treve.name} 抑制不住娇呼。`,
    );
    await era.printAndWait(
      `听了 ${you.name} 的话语，${treve.name} 紧闭地眼睛，忍不住颤动几下。`,
    );
    await era.printAndWait(
      `${you.name} 冷血一声，双手搂住 ${treve.name} 凝脂天成地细窄小腰，整个身体半压在${treve.sex}身上，更加增添了说话时候的威胁性。`,
    );
    await era.printAndWait(
      `${treve.name} 发出几声呜咽，但当 ${you.name} 顶起膝盖，将${treve.sex}那双韵致的长腿左右岔开，${treve.sex}却没有什么反抗，任 ${you.name} 分开${treve.sex}双腿，整个人如同半坐在 ${you.name} 身上似的。`,
    );
    await era.printAndWait(
      `${treve.name} 满是泪痕的俏脸上，闪过一种自暴自弃的觉悟，跟着就像拉弓似地朝 ${you.name} 抱过来。一双玉腿也缠在 ${you.name} 后腰，从下面紧紧地抱住了 ${you.name}。`,
    );
    await era.printAndWait(
      `就这样，${you.name} 丝毫不停，让${treve.sex}几乎是翻着白眼晕厥过去，才把${treve.sex}放下。`,
    );
    await era.printAndWait(`经过一番喘息，${you.name} 快速做着善后工作。`);
  },
};
