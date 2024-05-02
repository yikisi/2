const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number}} extra_flag
 */
module.exports = async (_, extra_flag) => {
  const callname = sys_get_callname(37, 0),
    edu_weeks = era.get('cflag:37:育成回合计时'),
    flash = get_chara_talk(37),
    your_name = get_chara_talk(0).name;
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('万事之始 · 一', flash);
    await era.printAndWait('终于到了荣进闪耀出道的时候。');
    await flash.say_and_wait('呼……距离比赛开始还有15分钟。');
    await era.printAndWait(
      `选手休息室内，${your_name} 看见荣进闪耀正在为比赛的开始做最后的准备工作。`,
    );
    era.printButton('「感觉紧张吗？」', 1);
    await era.input();
    await flash.say_and_wait('嗯。');
    await era.printAndWait(`有些出乎 ${your_name} 意料的，荣进闪耀点了点头。`);
    await flash.say_and_wait('紧张情绪的话，肯定是无法避免的。');
    await flash.say_and_wait(
      '因为接下来要面对的，是决定于能否踏上闪光系列赛这条道路的出道战，可谓是万事之始。',
    );
    await flash.say_and_wait(
      '无论再怎么去压抑自己的内心，肯定或多或少也会产生一些波动的吧？',
    );
    era.printButton('「这是很正常的现象。」', 1);
    await era.input();
    await flash.say_and_wait(
      '没错，所以紧张并不会影响之后会发生的事情。更何况……',
    );
    await era.printAndWait(
      `说到这里，${your_name} 突然看到荣进闪耀的脸上浮现出一丝微笑。`,
    );
    await flash.say_and_wait('一切都在遵循着计划前进，不是吗？');
    era.printButton('「！」', 1);
    await era.input();
    await flash.say_and_wait(
      `为了奔跑而进行的训练也好，为了比赛而学习的策略也好。我和 ${callname} 您从签订担当契约的那一刻开始，到今天为止一起经历了这么多的事情。`,
    );
    await flash.say_and_wait(
      '从这个角度来看，出道战，也只是检验我们成果的一场测试而已。',
    );
    era.printButton('「这样啊。」', 1);
    await era.input();
    await era.printAndWait(
      `看着表情胸有成竹的荣进闪耀，${your_name} 拍了拍${flash.sex}的肩膀，露出鼓励的眼神。`,
    );
    era.printButton('「那就将你的成绩，展现给赛场的所有人看吧。」', 1);
    await era.input();
    await flash.say_and_wait('是！');
    await era.printAndWait(
      `荣进闪耀用力点头，昂扬的战意在${flash.sex}的身上迸发。`,
    );
    await flash.say_and_wait('距离比赛开始还有10分钟，那么，我出发了。');
  } else if (extra_flag.race === race_enum.keis_hai) {
    await print_event_name('意外之喜', flash);
    await era.printAndWait(
      '京成杯，经典三冠之一皋月赏的前哨战，与后者有着相同的赛道和相同的距离。',
    );
    await era.printAndWait(
      '因此，荣进闪耀在制定计划之初，将它拿来作为踏上王道之路的提前演练，可谓是再合适不过的打算。',
    );
    await say_by_passer_by_and_wait(
      '路人A',
      '说起来今天的比赛，你比较看好哪位选手？',
    );
    await say_by_passer_by_and_wait(
      '路人B',
      `诶？这还用说吗，果然还是${flash.sex}吧。`,
    );
    await era.printAndWait(
      `不过令 ${your_name} 和${flash.sex}都有些没想到的是，在正式参加这场比赛之前，却还收获了一件意外之喜。`,
    );
    await say_by_passer_by_and_wait(
      '路人A',
      '是呢，毕竟那孩子之前的表现也很出色。',
    );
    await say_by_passer_by_and_wait(
      '路人B',
      `而且从参赛阵容上来看，也只能支持${flash.sex}不是吗？`,
    );
    await say_by_passer_by_and_wait(
      '路人A',
      `虽然这么说总感觉对其他的孩子不公平……嘛，总之，那我们待会就一起替${flash.sex}加油吧。`,
    );
    await say_by_passer_by_and_wait('路人B', '嗯嗯，加油！荣进闪耀！！');
    era.drawLine({ content: '比赛当天，选手休息室内' });
    await flash.say_and_wait('……真没想到，我会是第一人气呢。');
    await era.printAndWait(
      `面对今日报纸上的比赛预测，${your_name} 发现荣进闪耀的眉头微微紧皱。`,
    );
    era.printButton('「不开心吗？」', 1);
    await era.input();
    await flash.say_and_wait(
      '不，与其说是不开心，准确来讲只是心里的情感有些微妙。',
    );
    await flash.say_and_wait(
      '毕竟我能得到第一人气，很大一部分原因是由于参赛的其他选手不被看好……',
    );
    era.printButton('「但换句话说，这也证明了他们对你抱有期待，不是吗？」', 1);
    await era.input();
    await flash.say_and_wait('………');
    await era.printAndWait(
      `${your_name} 的话让荣进闪耀沉默了几秒。然后，${flash.sex}缓缓点头。`,
    );
    await flash.say_and_wait(
      '您说得对呢，如果自己的能力不出色的话，也没有办法吸引别人的目光。',
    );
    await flash.say_and_wait(
      '所以，为了不让这份期待落空，我必须竭尽全力去回应。',
    );
    await era.printAndWait(
      `说着，荣进闪耀的脸上流露出认真的表情。${your_name} 看得出来，${flash.sex}非常看重粉丝的期待。`,
    );
    await flash.say_and_wait('……不仅如此，我也要，去回应自己。');
    await flash.say_and_wait(
      '京成杯与皋月赏之间拥有相同的赛道与距离。换句话说，如果连这场比赛都发挥的不尽人意的话，那么之后的道路，只会更加坎坷。',
    );
    era.printButton('「尽人事，无愧于己。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！您说的没错。');
    await flash.say_and_wait(
      '我只需要将一切都做到最好，那么应得的结果，就会自然而然地落入我的手中。',
    );
    await flash.say_and_wait(`呼……好！我出发了，${callname}。`);
    era.printButton('「加油！」', 1);
    await era.input();
    await era.printAndWait('话毕，荣进闪耀带着自信的神态奔赴赛场。');
    await era.printAndWait(
      `${your_name} 看向${flash.sex}离去的背影，心想，至少这次的比赛，${flash.sex}的发挥肯定会非常可观。`,
    );
  } else if (extra_flag.race === race_enum.sats_sho) {
    await print_event_name('应行之事 · 一', flash);
    await era.printAndWait('经典三冠比赛的第一战——皋月赏，终于来临了。');
    await say_by_passer_by_and_wait(
      '路人A',
      '关于这次的比赛，你想支持哪位选手？',
    );
    await say_by_passer_by_and_wait(
      `路人B`,
      `唔，本来最开始是打算支持荣进闪耀的，因为京成杯上${flash.sex}的发挥很亮眼。`,
    );
    await say_by_passer_by_and_wait(
      `路人A`,
      `荣进闪耀啊，但是听说${flash.sex}在前几天生了一场比较严重的病。虽然已经恢复，可在这种情况下参赛，发挥真的没有问题吗？`,
    );
    await say_by_passer_by_and_wait(
      '路人B',
      '没错，就是在担心这一点。皋月赏作为G1级重赏，无论是比赛的压力还是对手的强度，都远远超过了之前的京成杯。',
    );
    await say_by_passer_by_and_wait(
      `路人A`,
      `嗯，皋月赏的竞争太过激烈，都说唯有最快的赛${flash.get_uma_sex_title()}才能赢下这场比赛。」`,
    );
    await say_by_passer_by_and_wait(
      '路人B',
      '是啊，再加上受病情影响，所以比较怀疑。现在的荣进闪耀，真的能够发挥出自己的全部实力吗？」',
    );
    era.drawLine();
    if (
      check_aim_and_get_entry(
        era.get('cflag:37:育成成绩'),
        race_enum.keis_hai,
        1,
        1,
      )
    ) {
      await era.printAndWait(
        `主持人：「让我们有请下一位选手登场，${flash.sex}就是今年京成杯的冠军，本场比赛的三番人气——荣进闪耀！！」`,
      );
    } else {
      await era.printAndWait(
        `主持人：「让我们有请下一位选手登场，${flash.sex}就是在今年的京成杯上表现亮眼，本场比赛的三番人气——荣进闪耀！！」`,
      );
    }
    await flash.say_and_wait('………');
    await flash.say_and_wait('呼……');
    era.printButton('「闪耀？」', 1);
    await era.input();
    await era.printAndWait('皋月赏比赛当天，选手休息室。');
    await era.printAndWait(
      `${your_name} 看着眼前对于广播中的声音没有做出反应，只是低下头陷入思考的荣进闪耀，有些疑惑地呼唤道。`,
    );
    await flash.say_and_wait('啊。请放心，我没事。');
    await era.printAndWait('说着，荣进闪耀起身，然后摇了摇头。');
    await flash.say_and_wait(
      '只是稍微有些感慨呢，明明自认为在京成杯上的发挥不错，结果皋月赏这边的人气却完全没有体现出来这一点。',
    );
    era.printButton('「是因为受到了前几天生病的影响吧？」', 1);
    await era.input();
    await era.printAndWait(
      `至于产生这种现象的原因，${your_name} 自然心知肚明。`,
    );
    await era.printAndWait(
      '在上个星期，荣进闪耀因为淋雨受寒，出现了很严重的发烧现象。',
    );
    await era.printAndWait(
      `虽然经过几天的休养，${flash.sex}的身体得以顺利康复，并最终如愿参赛。`,
    );
    await era.printAndWait(
      '可即便如此，病痛带来的虚弱感却仍旧在其的身上纠缠。',
    );
    await era.printAndWait(
      '这种情况下，看好荣进闪耀在皋月赏的发挥的人大幅度减少，也是合情合理的事情。',
    );
    era.printButton('「总之，做好自己就好了。」', 1);
    await era.input();
    await era.printAndWait(`似乎是担心面前人会受此影响，${your_name} 宽慰道。`);
    await flash.say_and_wait('……是的，挑战经典三冠，是我必须要去执行的计划。');
    await era.printAndWait(
      `听到 ${your_name} 的话，荣进闪耀沉默了一瞬。紧接着，${your_name} 看见${flash.sex}缓缓攥紧了自己的拳头。`,
    );
    await flash.say_and_wait('无论有无他人的支持，我都要坚持到最后。');
    era.printButton('「……行应行之事，尽应尽之力。」', 1);
    await era.input();
    await era.printAndWait(
      `荣进闪耀对于比赛过于看重的态度让 ${your_name} 隐隐皱眉，不过这对于目前的${flash.sex}来说也并非坏事。`,
    );
    await flash.say_and_wait(`嗯！那么，我准备出发了，${callname}。`);
    era.printButton('「注意安全。」', 1);
    await era.input();
    await era.printAndWait(
      `于是 ${your_name} 也只是对${flash.sex}挥了挥手，祝贺${flash.sex}平安。`,
    );
  } else if (extra_flag.race === race_enum.toky_yus) {
    await print_event_name('应行之事 · 三', flash);
    await era.printAndWait(
      '经典三冠的第二场比赛——日本德比，终于在今天拉开序幕。',
    );
    await flash.say_and_wait('那么，我出……');
    await era.printAndWait('「嘟嘟。」');
    await flash.say_and_wait('诶。');
    await era.printAndWait(
      '选手休息室内，已经做好比赛前最后的准备工作，正打算前往赛场的荣进闪耀突然被手机提示音吸引了注意力。',
    );
    era.printButton('「怎么了？」', 1);
    await era.input();
    await flash.say_and_wait('啊，没什么。');
    await era.printAndWait(
      `从身后的口袋中拿出手机，对着屏幕中显现的内容注视了几秒的${flash.sex}，脸上露出欣慰的表情。`,
    );
    await flash.say_and_wait('是母亲发来的消息。');
    await flash.say_and_wait(
      `『完全没有想到自己的${
        flash.sex_code - 1 ? '女儿' : '儿子'
      }会在日本德比中出场。』`,
    );
    await flash.say_and_wait(
      '『希望能够留下令你满意的结果，我和爸爸他会在这里为你加油的。』',
    );
    era.printButton('「来自父母的祝福啊。」', 1);
    await era.input();
    await flash.say_and_wait('是期望呢。');
    await era.printAndWait('说完，荣进闪耀收回手机。');
    await flash.say_and_wait('………');
    await era.printAndWait(
      `接受远在大洋彼岸的父母意愿的${flash.sex}，身上似乎产生了微妙的变化。`,
    );
    await flash.say_and_wait('要找到比单纯的赢更重要的情感……吗？');
    era.printButton('「……闪耀︖」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 听到了${flash.sex}的低声轻语，${your_name} 刚想询问${flash.sex}是否遇到了什么问题。`,
    );
    await flash.say_and_wait('呼……');
    await flash.say_and_wait(`${callname}！`);
    era.printButton('「嗯。」', 1);
    await era.input();
    await era.printAndWait(`对上的却是${flash.sex}坚定的眼神。`);
    await flash.say_and_wait('我能赢下这场比赛的，对吗？');
    era.printButton('「我一直都是这么相信的。」', 1);
    await era.input();
    await flash.say_and_wait('好！');
    await era.printAndWait(
      `听到 ${your_name} 的话，荣进闪耀点了点头，自信的笑容浮现于${flash.sex}的脸颊之上。`,
    );
    await flash.say_and_wait('那么，我出发了。');
  } else if (extra_flag.race === race_enum.kiku_sho) {
    await print_event_name('迎向菊花赏', flash);
    await flash.say_and_wait('经典三冠的最后一场比赛——菊花赏。');
    await flash.say_and_wait('虽然一度从目标之中排除，但最终还是来参赛了呢。');
    era.printButton('「身体比预期中更快的得到痊愈，真是太好了。」', 1);
    await era.input();
    await flash.say_and_wait('嗯。');
    await flash.say_and_wait('不过，由于现在正朝着全新的目标而努力着。');
    await flash.say_and_wait(
      '所以已经没有必要再去执意于经典三冠了，菊花赏和别的比赛也没有什么不同。',
    );
    await flash.say_and_wait('因此，我要做的也只是和平常一样。');
    await flash.say_and_wait('将一切都做到最好，然后迎接顺其自然的结果。');
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks < 96) {
    await print_event_name('挑战之路 · 一', flash);
    await era.printAndWait(
      '日本杯，作为代表闪光系列赛最高荣誉的比赛之一，其的参赛阵容可谓是高手云集。',
    );
    await say_by_passer_by_and_wait(
      `观众A`,
      `这次日本杯的参赛阵容 ${your_name} 们都看到了吧。`,
    );
    await say_by_passer_by_and_wait('观众B', '嗯嗯，还真是出乎意料啊。');
    await say_by_passer_by_and_wait(
      `观众A`,
      `荒漠英雄，特别周……明明都是有一段时间没有出场的赛${flash.get_uma_sex_title()}，没想到还能在这场比赛中再次目睹${
        flash.sex
      }们的发挥。`,
    );
    await say_by_passer_by_and_wait(
      `观众B`,
      `不仅如此，更惊人的是，${flash.sex}们之前都赢下过日本杯。`,
    );
    await say_by_passer_by_and_wait(
      '观众B',
      '这种巧合，简直就像是提前商量好的一样。',
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '但是这样的话，经验带来的差距可就大了。对于还在经典级的选手来说，真是一场严峻的考验啊。',
    );
    era.drawLine();
    await flash.say_and_wait('日本杯，就要开始了呢。');
    await era.printAndWait('赛前，选手休息室内。');
    await era.printAndWait('荣进闪耀深吸一口气，将自己的状态调整至最佳。');
    await flash.say_and_wait(
      '不出意料的，在参赛名单上见到了很多资深级的前辈啊。',
    );
    era.printButton('「紧张吗？」', 1);
    await era.input();
    await flash.say_and_wait('嗯，毕竟是『挑战者』呢。');
    await era.printAndWait(
      `${flash.sex}点了点头，话虽如此，但 ${your_name} 从${flash.sex}的目光中又隐隐看出一丝期待。`,
    );
    await flash.say_and_wait(
      '之前和千明代表同学的併走让我从中收获了许多全新的经验，受益颇多。所以，想必这次的日本杯也是一样的。无论最终结果如何，在比赛的途中肯定都是能得到启发的吧。',
    );
    await era.printAndWait(
      `荣进闪耀充满干劲地说道，${flash.sex}的脸上露出自信的微笑。`,
    );
    await flash.say_and_wait(
      '嘛，不过话虽如此，但我也不会轻易的将胜利拱手相让。',
    );
    await flash.say_and_wait('毕竟经过这段时间的修养，身体已经彻底痊愈了呢。');
    era.printButton('「终于可以心无旁顾的奔跑了。」', 1);
    await era.input();
    await flash.say_and_wait(`嗯！那么我出发了，${callname}。`);
    era.printButton('「加油！」', 1);
    await era.input();
    //todo 本场比赛中，特别周，荒漠英雄，均获得强敌buff（实际比赛中面板数据提高2倍。）
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
    await print_event_name('挑战之路 · 三', flash);
    await era.printAndWait(
      '有马纪念，作为闪光训练赛年底的收官大赛，民间一直流传着『如果一年只看一场比赛的话那就非有马纪念赛莫属的说法。』',
    );
    await era.printAndWait(
      `因为这场比赛的参赛规则采用的是粉丝投票制度，所以唯有在今年留下了亮眼表现的赛${flash.get_uma_sex_title()}才有资格登场。`,
    );
    await era.printAndWait(
      '而赢下日本德比的荣进闪耀，不必多说，自然也在其列了。',
    );
    await say_by_passer_by_and_wait(`观众A`, `喂喂喂，你看到了吗？`);
    await say_by_passer_by_and_wait(
      '观众B',
      '难以想象，本来以为能看到特别周和荒漠英雄再度登场都已经是不可错过的盛事了。',
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '没想到参赛选手中居然还有气槽和富士奇石！',
    );
    await say_by_passer_by_and_wait(
      '观众B',
      '即便作为有马纪念赛来说，这阵容也豪华过头了……',
    );
    await say_by_passer_by_and_wait(
      `观众A`,
      `现在也好，之前的日本杯也好。连续两次见证了这么多知名赛${flash.get_uma_sex_title()}的再度登场。`,
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '给人的感觉就跟接下来会发生什么大事一样，真令人期待。',
    );
    await say_by_passer_by_and_wait(
      '观众B',
      '但这对于经典级的那些孩子们来说，真的是件好事吗？',
    );
    era.drawLine();
    await flash.say_and_wait('还真是……令人惊讶呢。');
    await era.printAndWait(
      '赛前，选手休息室内。荣进闪耀看着本次比赛的参赛名单，眼眉微皱。',
    );
    await flash.say_and_wait(
      '本来以为特别周同学和荒漠英雄同学就已经是这场比赛会遇到的最强大的对手了。',
    );
    await flash.say_and_wait('没想到气槽同学和富士奇石同学也会参与进来。');
    era.printButton('「比赛过程可以预见的会非常惊险。」', 1);
    await era.input();
    await flash.say_and_wait(
      '说的是呢。不过本身就是以挑战为目的来参赛的。所以能够遇到的强者越多，我在此行中得到的收获也会越大。',
    );
    await flash.say_and_wait('更何况……');
    await era.printAndWait('荣进闪耀攥紧拳头，脸上流露出毫不畏惧的神色。');
    await flash.say_and_wait(
      '已经携手跨越了这么多障碍的我们，所拥有的实力也是不容小窥的。',
    );
    era.printButton(`「让${flash.sex}们见识你的力量吧。」`, 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await flash.say_and_wait('要一直奔跑下去，直至登临绝巅。');
    era.println();
    //todo （本场比赛中，特别周，荒漠英雄，气槽，富士奇石获得强敌buff[实际比赛面板数值提升至1.5倍）
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name('挑战之路 · 五', flash);
    await era.printAndWait('春季三冠中的第一冠——大阪杯，就要开始了。');
    await flash.say_and_wait(
      '那么在比赛开始前再度确认一下吧，待会需要注意的对手。',
    );
    await era.printAndWait('赛前，选手休息室内。');
    await era.printAndWait('荣进闪耀拿出一份参赛名单。');
    await flash.say_and_wait(
      `首先是富士奇石同学，虽然大阪杯并非${flash.sex}最擅长的距离。但毫无疑问，拥有不俗实力的${flash.sex}即便在这种情况下也能够左右战局。`,
    );
    await flash.say_and_wait(
      `紧接着是曼城茶座同学，在赛前的选手采访中宣称对于一个月之后的春季天皇赏感觉到命运般的存在。因此大阪杯作为那场比赛的前哨战，想必${flash.sex}也会在此发挥出相当可怕的实力。`,
    );
    era.printButton('「第三位则是荣进闪耀……」', 1);
    await era.input();
    await flash.say_and_wait('诶。');
    await flash.say_and_wait('呵呵呵～');
    await era.printAndWait(`${your_name} 突然的话题插入让荣进闪耀笑的很开心。`);
    await flash.say_and_wait(
      '也许真的是这样吧。毕竟相较于去年，我也成长了不少呢。',
    );
    await flash.say_and_wait(
      '对决强敌，领悟知识，收获经验。并在下一次的比赛中利用所得的这一切去奔跑，借此实现进步。',
    );
    await flash.say_and_wait(
      '以往经历的每一次挑战都是这样度过的，今天的大阪杯也不会例外。',
    );
    era.printButton('「所谓高墙，只会成为你更进一步的台阶。」', 1);
    await era.input();
    await flash.say_and_wait('嗯。');
    await era.printAndWait('荣进闪耀点了点头。');
    await flash.say_and_wait('昂首挺胸，跨越阻碍，最终圆梦而归……');
    await flash.say_and_wait(`我出发了！${callname}。`);
    era.println();
  } else if (extra_flag.race === race_enum.tenn_spr && edu_weeks > 95) {
    await print_event_name('挑战之路 · 六', flash);
    await era.printAndWait('春季三冠第二冠——春季天皇赏。');
    await era.printAndWait(
      '作为长距离的G1级赛事，坐拥惊人的3200米长度，比荣进闪耀之前参加过的有马纪念还要多出整整700米的差距。',
    );
    await era.printAndWait(`毫无疑问，这是对${flash.sex}耐力的巨大考验。`);
    await flash.say_and_wait('实力强劲呢，曼城茶座同学。');
    await era.printAndWait('赛前，选手休息室内。');
    await era.printAndWait('荣进闪耀此时的语气罕见地有些凝重。');
    era.printButton(`「毕竟这是${flash.sex}擅长的领域。」`, 1);
    await era.input();
    await era.printAndWait(
      `而 ${your_name} 当然知道${flash.sex}在顾虑些什么。`,
    );
    await era.printAndWait(
      '因为与在长距离赛事方面缺乏经验的荣进闪耀不同。曼城茶座，可以说就是以此而闻名的。',
    );
    await era.printAndWait(
      `菊花赏、有马纪念、春季天皇赏，都是${flash.sex}在之前的生涯中取得的荣誉。`,
    );
    await era.printAndWait(
      '所以换句话说，这场春季天皇赏，完全就是在以己之短攻彼之长。',
    );
    await era.printAndWait('在这种情况下，感觉到比赛凶险也是自然而然的事情。');
    await flash.say_and_wait('话虽如此，但这也不是放弃的理由啊。');
    await era.printAndWait(
      `荣进闪耀摇了摇头，无论接下来要面对的情况如何，${flash.sex}向来都不会退缩。`,
    );
    era.printButton('「说起来。」', 1);
    await era.input();
    await era.printAndWait(`${your_name} 突然想起了一件事情。`);
    era.printButton('「有记者之前提出想在这场比赛结束后对你进行采访。」', 1);
    await era.input();
    await flash.say_and_wait('诶，采访？');
    era.printButton('「暂定的标题是『于最强世代中绽放的耀眼闪光』。」', 1);
    await era.input();
    await era.printAndWait(
      '因为从去年的日本杯开始，到上一场的大阪杯，在面对那些实力强劲的前辈时，荣进闪耀的表现都非常亮眼，想必这一次的春季天皇赏也不会例外。因此打算抢占热度的记者会事先拟出这个标题倒也无可厚非。',
    );
    await era.printAndWait(
      `${your_name} 向${flash.sex}详细解释了一遍这个标题的用意。`,
    );
    await flash.say_and_wait('耀眼闪光啊……');
    await era.printAndWait(
      `在听到 ${your_name} 的话后，荣进闪耀若有所思地点了点头。`,
    );
    await flash.say_and_wait('倒是十分简洁明了的概括呢。');
    await era.printAndWait(`${flash.sex}随即轻笑一声。`);
    await flash.say_and_wait('不过……');
    await era.printAndWait(
      `然后下一秒，${your_name} 看到${flash.sex}脸上的表情却又突然变得严肃。`,
    );
    await flash.say_and_wait('我和转瞬即逝的闪光可不一样。');
    await flash.say_and_wait('我会耀眼夺目地奔跑下去，直至最后的那一刻。');
    //todo （本场比赛中，曼城茶座获得强敌buff[对战时所有面板数据提升至1.5倍]）
  } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks > 95) {
    await print_event_name('璀璨之秋 · 一', flash);
    await era.printAndWait('万众瞩目的秋季天皇赏，终于开始了。');
    await era.printAndWait('观众：「喔喔喔——！！」');
    await say_by_passer_by_and_wait(
      '闪耀的母亲',
      '啊啦啦，这就是日本的G1级比赛吗，真是太热烈了。',
    );
    await say_by_passer_by_and_wait(
      `闪耀的父亲`,
      `秋季天皇赏，这似乎是个历史悠久的比赛，而我们的Schatzi${flash.sex}……`,
    );
    await say_by_passer_by_and_wait(
      `荣进闪耀的母亲`,
      `相信${flash.sex}吧。加油啊，闪耀！`,
    );
    era.drawLine();
    await flash.say_and_wait('我的父母，好像平安到达赛场了呢。');
    await era.printAndWait(
      `赛前，选手休息室内，荣进闪耀看着手机中向${flash.sex}报安的短信，露出安心的微笑。`,
    );
    await flash.say_and_wait(
      '这样的话，一切都在按计划前行着。我的状态也非常不错，那么接下来便是……',
    );
    era.printButton('「以闪耀之名，赢下这场比赛。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await era.printAndWait('荣进闪耀用力点头，脸上浮现自信的表情。');
    await flash.say_and_wait(
      '往日经历的所有事物都是在为这场比赛的结果做铺垫。',
    );
    await flash.say_and_wait('所以，唯独今天。');
    await flash.say_and_wait('我必须要赢！');
    era.printButton('「向所有人，证明你的信念吧！」', 1);
    await era.input();
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks > 95) {
    await print_event_name('未来之事 · 四', flash);
    await era.printAndWait(
      '闪耀系列赛每年热度最高的盛事，有马纪念，即将于今日开赛。',
    );
    await flash.say_and_wait('呼……比赛即将开始了呢。');
    await era.printAndWait(
      `赛前，选手休息室内。荣进闪耀看了眼时间，随后起身，向 ${your_name} 道别。`,
    );
    await flash.say_and_wait(
      '呵呵~说起来，这还是第一次呢，没有以自己的梦想为前提参加比赛。',
    );
    await era.printAndWait(
      `然后紧接着下一秒，${flash.sex}又带着调侃地露出微笑。`,
    );
    era.printButton('「一个月的休假，感觉如何？」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 则拍了拍${flash.sex}的肩膀，关切地问道。`,
    );
    await era.printAndWait(
      '兴许是在完成梦想之后，自身对于比赛的执念有所消散。荣进闪耀并没有按照最初预定的那样去参加日本杯，而是利用这一个月的空闲时间和远道而来的父母在日本各地旅行游玩。',
    );
    await flash.say_and_wait('嗯，感觉身体得到彻底的放松了呢。');
    await era.printAndWait('荣进闪耀点头，目光转向远方。');
    await flash.say_and_wait(
      '想必我的父母现在，也在家里关注这场有马纪念赛的结果吧。',
    );
    era.printButton('「在他们的眼前再次赢下一场比赛的胜利吧。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await era.printAndWait(`${flash.sex}自信应允，随后转身向门外走去。`);
    await flash.say_and_wait(`说起来，${callname}。`);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await era.printAndWait(
      `不过在彻底离开之前，${flash.sex}好像还有话要跟 ${your_name} 说。`,
    );
    await flash.say_and_wait(
      '能在对我说一次吗？去年皋月赏赛前，选手休息室内，您对我说的那句话。',
    );
    era.printButton('「皋月赏赛前？」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 眨了眨眼睛，顿时明白了荣进闪耀的所指。`,
    );
    await era.printAndWait(
      `虽然 ${your_name} 对${flash.sex}说过很多的话，鼓励也好，指引也好。但在如今这个场合，最合适的，恐怕也只有这句了。`,
    );
    era.printButton('「行应行之事……」', 1);
    await era.input();
    await flash.say_and_wait('尽应尽之力。');
    await flash.say_and_wait('呵呵呵~');
    era.printButton('「哈哈。」', 1);
    await era.input();
    await era.printAndWait(`接龙成功，${your_name} 们两人同时哈哈大笑。`);
    await flash.say_and_wait('那么，我出发了。');
    await era.printAndWait(
      `就这样，在这种愉快氛围的包裹下，${flash.sex}大步迈开自己的双腿，向赛场走去。`,
    );
    era.printButton('「加油！」', 1);
    await era.input();
    await era.printAndWait(
      `而 ${your_name} 目送着${flash.sex}离去的背影，用力挥手。`,
    );
    await era.printAndWait('不得不说这真是一幅美妙的画面。');
    await era.printAndWait(
      `而正如答应好的一样，${your_name} 相信，这种两人之间的守候，在未来的日子里，还会持续许久许久。`,
    );
  } else {
    throw new Error();
  }
};
