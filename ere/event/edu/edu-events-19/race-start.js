const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const chara_talk = new CharaTalk(19);

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const chara15_talk = get_chara_talk(15),
    chara58_talk = get_chara_talk(58),
    chara61_talk = get_chara_talk(61),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:19:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('出道战开始！', chara_talk);
    await chara_talk.say_and_wait(
      `嗯哼，能听到吗？我是${chara_talk.name}，正值新叶萌发之时，各位大家过得好吗？我现在正站在出道战的亮相圈里，在周围的则是……`,
    );
    await chara_talk.say_and_wait(
      `数码……数码……在${chara_talk.get_uma_sex_title()}酱的周边……倒不如说就在${chara_talk.get_uma_sex_title()}酱里面！`,
    );
    await chara_talk.say_and_wait(
      `已经要……萌死了……训练员！能看到吗！这周边的${chara_talk.get_uma_sex_title()}酱们！`,
    );
    await era.printAndWait(
      `看得到，周围的${chara_talk.get_uma_sex_title()}有些都紧张地发抖了，有些眼神在发光，但其中最特别的是……`,
    );
    await era.printAndWait(
      `托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——${chara_talk.name}。`,
    );
    await chara_talk.say_and_wait(
      `吸溜溜，我想说的是${chara_talk.sex}们还能到什么地步啊！尊力检测仪都已经爆表了，而我，居然能够混入其中！`,
    );
    await chara_talk.say_and_wait(`哈～要，尊死了……数码……就要变成灰了……`);
    await me.say_and_wait(`现在可是要比赛了哦！`);
    await chara_talk.say_and_wait(`哇！对啊！现在不是升天的场合！`);
    await chara_talk.say_and_wait(
      `现在的我，也是和${chara_talk.get_uma_sex_title()}酱们肩并肩的存在，绝不能让我的存在使${
        chara_talk.sex
      }们蒙上阴影！`,
    );
    await chara_talk.say_and_wait(
      `我会努力的！能量充足，检查完备！尊力机能100%运作！`,
    );
    await chara_talk.say_and_wait(
      `数码的眼睛就是底片，要把${chara_talk.get_uma_sex_title()}酱们所有的笑容与泪水全都印在里面！`,
    );
    await era.printAndWait(`${chara_talk.name}，怀抱着觉悟，走向了赛场。`);
  } else if (extra_flag.race === race_enum.hyac_sta) {
    await print_event_name('风信子杯开始！', chara_talk);
    await era.printAndWait(
      `在前一段时间里，日经新春杯中，名将怒涛拿到了第二名。`,
    );
    await era.printAndWait(
      `本来只是想要在地下通道祝贺怒涛的数码，还为之前的逾越头疼的数码，却意外地收获了怒涛的感谢。`,
    );
    await era.printAndWait(
      `明明是违背了一般粉丝的决定，却逐渐开花结果了，这让数码逐渐无法理解了。`,
    );
    await era.printAndWait(
      `而解决问题的方式，就是比赛，今天的这场比赛，就是之前就已经预定的比赛。`,
    );
    await era.printAndWait(`作为一场op赛，连g3都不是的小比赛。`);
    await era.printAndWait(
      `在亮相圈里，数码死死地盯着其他的${chara_talk.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `数码的双手化作爪子在空中舞动，瞳孔里饱含着「美味」的含义……`,
    );
    await me.say_and_wait(`数码你可不要扑上去了哦。`);
    await chara_talk.say_and_wait(`不，本来之前也没有扑过吧。`);
    await chara_talk.say_and_wait(`说到这里，训练员，总感觉好奇怪啊。`);
    await chara_talk.say_and_wait(
      `感觉好像，气氛特别的严峻，但是其中所包含的尊味，又没有变化……`,
    );
    await era.printAndWait(
      `数码发现，每个${chara_talk.get_uma_sex_title()}表情上都写满了严阵以待，这股情感让数码欲罢不能，但气氛又不容数码像以往那样说出口。`,
    );
    await chara_talk.say_and_wait(
      `在这里面，应该是有更为纯粹的事物，使得${chara_talk.get_uma_sex_title()}为何为尊……`,
    );
    await me.say_and_wait(`你想，触碰它？`);
    await chara_talk.say_and_wait(`诶！这样也太失敬了！`);
    await chara_talk.say_and_wait(
      `不过，我想，尽量在比起以前更为接近的位置观察……`,
    );
    await era.printAndWait(
      `数码依旧还是把自己当成观众，但是，${chara_talk.sex}的眼神却比以往发生了一丝变化。`,
    );
  } else if (extra_flag.race === race_enum.nhk_cup) {
    await print_event_name('nhk英里杯开始！', chara_talk);
    await chara_talk.say_and_wait(`噢噢噢噢噢噢噢！果然，很不一样啊！`);
    await era.printAndWait(`G1赛场，超过十万观众的比赛……`);
    await era.printAndWait(
      `即使是经常观看，站在亮相圈所带来的感觉还是十分新鲜。`,
    );
    await era.printAndWait(
      `十万观众所带来的气氛足够震撼，但真正的大头，是选手的……`,
    );
    await chara_talk.say_and_wait(
      `怎怎怎怎么回事！这股气息，这股如同领域般的压迫力！`,
    );
    await chara_talk.say_and_wait(`糟糕！赛高！简直可以说是尊高！`);
    await me.say_and_wait(`很兴奋是吧！那就正是在状态上啊！`);
    await chara_talk.say_and_wait(`已经，已经什么都想不了了，大脑，已经……`);
    await chara_talk.say_and_wait(
      `美丽，恐怖，感觉这分辨率都要达到4K了，现在连站在这里都有点难……`,
    );
    await chara_talk.say_and_wait(
      `不过，我要搞明白，${chara_talk.get_uma_sex_title()}酱的尊的奥妙！`,
    );
    await chara_talk.say_and_wait(`就算……我会尊得幻化成灰……哈？！`);
    await era.printAndWait(`怎么了，数码说着说着突然一个哆嗦。`);
    await era.printAndWait(`数码环视了一下，然后……`);
    await chara_talk.say_and_wait(`感觉好像有人在盯着我？`);
    await era.printAndWait(
      `选手的话，你看得很清楚，并没有盯着数码的人，那应该就是从观众席传过来的。`,
    );
    await chara_talk.say_and_wait(`是吗，我居然，也在推中，做着被推的梦吗……`);
    await chara_talk.say_and_wait(`不能在这样轻浮了！`);
    await era.printAndWait(
      `如此重大的比赛，想必${chara_talk.name}也能激发${chara_talk.sex}的素质吧。`,
    );
  } else if (extra_flag.race === race_enum.japa_dir) {
    await print_event_name('泥地德比开始！', chara_talk);
    await chara_talk.say_and_wait(
      `（我还没注意到，${chara_talk.get_uma_sex_title()}酱们的尊能源的根源，那一定是无比珍贵之物……）`,
    );
    await chara_talk.say_and_wait(
      `（大井……夜晚……泥地……在这少来的异乡赛道，在这特殊的赛场，也许，就存在着我想要找到的秘密……）`,
    );
    await era.drawLine();
    await chara_talk.say_and_wait(
      `『日本泥地达比』，总感觉这场比赛的氛围很独特呢。`,
    );
    await me.say_and_wait(`JG1赛事……这种类型赛事总会带有很多的偏见。`);
    await chara_talk.say_and_wait(
      `即使如此，这场赛事带来的炙热气息，就像夏日的太阳……`,
    );
    await chara_talk.say_and_wait(
      `无论是赛道、景色、还是草地泥地都不一样，就算如此也好……`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱的心情，都是一样的吧？`,
    );
    await era.printAndWait(
      `没错，无论是g1还是g3、重赏还是公开赛、草地还是泥地、中央还是地方……`,
    );
    await me.say_and_wait(`都一样的。`);
    await me.say_and_wait(
      `这场比赛过后，你就经历了所有类型比赛了，肯定能明白为何一样吧。`,
    );
    await era.printAndWait(
      `${chara_talk.name}，或许早就明白了，${chara_talk.sex}只是需要求证而已，就通过这场比赛。`,
    );
    await chara_talk.say_and_wait(
      `现在！就和大井的泥地${chara_talk.get_uma_sex_title()}酱一起，找到答案！`,
    );
  } else if (extra_flag.race === race_enum.mile_cha) {
    await print_event_name('英里冠军赛开始！', chara_talk);
    await era.printAndWait(
      `圣王光环，数码出道前就已经一直仰望的${chara_talk.get_uma_sex_title()}，现在，数码终于能够和${
        chara_talk.sex
      }站在了一起。`,
    );
    await era.printAndWait(
      `亮相圈上的圣王，一扫之前的颓势，气场高涨，简直就像是回到了巅峰时期。`,
    );
    await chara61_talk.say_and_wait(
      `怎么样？数码，今天的我，是不是耀眼得眼睛都要花了？`,
    );
    await chara_talk.say_and_wait(
      `是！无比耀眼！不过……脊梁还是没有今年春天的挺直……`,
    );
    await chara61_talk.say_and_wait(
      `啊哈……还真瞒不过你呢，没想到这你都能察觉出来。`,
    );
    await chara61_talk.say_and_wait(`数码，你喜欢我到什么程度？`);
    await chara_talk.say_and_wait(`在这推得要比马里亚纳海沟还要深！`);
    await era.printAndWait(
      `圣王和数码有说有笑，在这里，能看出${chara_talk.sex}们一定能给出一场无法述说的比赛。`,
    );
    await chara_talk.say_and_wait(
      `你真正的想法，我想要在今天的比赛里，弄明白！`,
    );
    await chara61_talk.say_and_wait(
      `真正的一流，就用你的全身心来理解吧！数码！`,
    );
  } else if (extra_flag.race === race_enum.tenn_sho) {
    await print_event_name('秋季天皇赏开始！', chara_talk);
    await era.printAndWait(`终于到了，天皇赏秋当天。`);
    await era.printAndWait(`在亮相圈中，数码与熟悉的那两位碰面了。`);
    await chara_talk.say_and_wait(`请多关照！歌剧，怒涛。`);
    await chara58_talk.say_and_wait(`这边才是！请多关照了，数码！`);
    await era.printAndWait(
      `时隔三年，数码也终于能够在自己的推面前正常地交流了。`,
    );
    await chara15_talk.say_and_wait(
      `啊哈哈哈，你们这是在发名片吗？不过，身为霸王的我，其闪耀的自身，就已经表明了我的一切！不需要任何介绍！`,
    );
    await chara15_talk.say_and_wait(`数码君，欢迎来到我的加冕典礼！`);
    await chara15_talk.say_and_wait(
      `你的努力，我都看在眼里，我不得不承认你也到达了我们的身后。`,
    );
    await chara15_talk.say_and_wait(
      `但身后终究是身后！数码君，在这草地上，你还赢不了我，身为『世纪末霸王』，驱驰于中距离草场的我！`,
    );
    await chara_talk.say_and_wait(`的确……如你所言，在硬实力上，我还比不过你……`);
    await chara_talk.say_and_wait(`但是，我的技巧，在草地与泥地的技巧……`);
    await era.printAndWait(
      `是的，在这场草地比赛中，双刀流的数码，其优势在……只要在等一会，就会明了。`,
    );
    await era.printAndWait(`滴答……滴答……`);
    await era.printAndWait(`哗啦……哗啦……`);
    await era.printAndWait(`一开始仅是一点，紧接着便遍及全部！`);
    await era.printAndWait(`是的，重马场，这次的天皇赏秋，是重马场啊！`);
    await chara_talk.say_and_wait(
      `这是……${chara_talk.get_uma_sex_title()}酱的泪雨吗……不，是我遇见的所有${chara_talk.get_uma_sex_title()}酱的喜极而泣，是庆祝我的胜利的雨啊！`,
    );
    await chara15_talk.say_and_wait(
      `……雨吗……先说明，我可是擅长重马场的喔，霸王无论场况如何，都能适应！`,
    );
    await chara58_talk.say_and_wait(`啊哇哇哇……是雨啊啊啊……`);
    await era.printAndWait(
      `好歌剧是擅长重马场，但是，数码，${chara_talk.sex}可不仅是擅长啊！`,
    );
    await era.printAndWait(`数码可是字面意思地在泥潭上跑过的，面对这种情况……`);
    await era.printAndWait(`仅有赢的可能。`);
  } else {
    const sex_mark = era.get('mark:19:淫纹');
    if (sex_mark >= 1) {
      await chara_talk.say_and_wait(
        `数码碳的决胜服好像是露肚子的来着？！遭了遭了，要藏吗？怎么藏？藏得了吗？`,
      );
    } else {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          await chara_talk.say_and_wait(
            `胜券在握的${chara_talk.get_uma_sex_title()}酱，紧绷的${chara_talk.get_uma_sex_title()}酱，还是看似不在乎实则认真的${chara_talk.get_uma_sex_title()}酱……呼……嘿……`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `不不不，再怎么想我这种${chara_talk.get_uma_sex_title()}上赛场还是很奇怪吧？`,
          );
          break;
        case 2: //TODO 在宝冢纪念一着达成后 加入
          await chara_talk.say_and_wait(
            `我要，作为一名选手，跑出不负于对手的比赛。`,
          );
          break;
      }
    }
  }
};
