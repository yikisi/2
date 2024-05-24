const era = require('#/era-electron');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const kita = get_chara_talk(68),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:68:育成回合计时');
  extra_flag.attr_change = new Array(5).fill(0);
  if (extra_flag.race === race_enum.begin_race && extra_flag.rank === 1) {
    extra_flag.pt_change = 30;
    if (edu_weeks === 23) {
      await print_event_name('第一次！', kita);
      await era.printAndWait(
        `在 ${kita.name} 冲过终点线的瞬间，${me.name} 长长的松了口气，悬住的心脏终于放了下来。`,
      );
      await era.printAndWait(
        `尽管无比相信担当的素质，尽管无比确信${kita.sex}是能赢得胜利的孩子。`,
      );
      await era.printAndWait(
        `但在真正胜利前，${me.name} 仍然对能否顺利的取得胜利而感到些许忧虑，以及对自己的不信任。`,
      );
      await era.printAndWait(
        `而现在，尘埃落定，${me.name} 看着跌跌撞撞向这边跑来的担当，拿着毛巾和矿泉水凑了上去。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}！我…赢了哦！赢了对吧！是这样赢了的对吧！`,
      );
      await era.printAndWait(
        `带着满身滚烫的热气猛地逼近，${kita.name} 带着急切的表情向 ${me.name} 询问道。`,
      );
      await kita.say_and_wait('我……不是在做梦对吧！');
      era.println();

      era.printButton('「赢了哦，小北。」', 1);
      await era.input();
      await era.printAndWait(
        `聆听着竞马场里高亢而兴奋的欢呼声和赞扬声，${me.name} 对自己那无比渴望胜利的担当如此回答道。`,
      );
      await era.printAndWait(
        `想要将自己的热情、自己的意志传达给众人的 ${kita.name}，通过这次胜利毫无疑问地将其传达了出去。`,
      );
      await era.printAndWait(
        `带 ${me.name} 看到担当的表情从紧绷的急切一下子松弛了下来，而后像往常那样露出了温暖的笑。`,
      );
      await kita.say_and_wait(
        `嘿诶……感觉，没什么实感的样子啊，脑子还是空荡荡的。`,
      );
      await era.printAndWait(
        `毕竟是小北啊，${me.name} 如此感叹着将视线移开，而直到这时 ${me.name} 才注意到，小北的衣服已经被汗液彻底淋透了。`,
      );
      await kita.say_and_wait(`呜哇啊～训练员${me.get_adult_sex_title()}！？`);
      await era.printAndWait(
        `不好……在不像样的想法从脑海中浮现时，${me.name} 迅速展开毛巾盖在小北身上，将${kita.sex}的身体仔仔细细的盖了起来。`,
      );
      await era.printAndWait(
        '？？？「下午第一场比赛，就到这里结束了，真是一场精彩的比赛。」',
      );
      await era.printAndWait(`？？？「那么接下来的比赛是……」`);
      await era.printAndWait(`于是就这样，${kita.name} 的出道赛结束了。`);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    } else {
      await print_event_name('第一次的……', kita);
      await kita.say_and_wait('我……赢了么了？这次真的赢了么……');
      await era.printAndWait(
        `站在终点线后，${kita.name} 大口大口地喘息着，似乎不敢相信眼前的事实。`,
      );
      await era.printAndWait(
        `直到在原地站了很久之后，${me.name} 的担当才露出了笑容。`,
      );
      await kita.say_and_wait('我，赢了啊……');
      await era.printAndWait(
        `随着赛${kita.get_uma_sex_title()}们一起走向了竞马场出口，${
          kita.name
        } 露出了胜利的笑容。`,
      );

      extra_flag.motivation_change = 1;
      extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 5;
    }
  } else if (extra_flag.race === race_enum.sats_sho && extra_flag.rank === 1) {
    await print_event_name('胜利的大舞台', kita);
    await kita.say_and_wait(`谢谢你，训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(
      `在皋月赏后的休息室中，${kita.name} 对 ${me.name} 深深地鞠了一躬。`,
    );
    await kita.say_and_wait(
      `能在皋月赏的舞台上奔跑，同大鸣大放同台竞技……说实话，现在感觉也还是有些心潮澎湃。`,
    );
    await era.printAndWait(
      `而且在比赛前，也差点因为进王同学的粗心忘记交申请书，在比赛中途也有好几次心脏刺激的差点跳出来呢。`,
    );
    await era.printAndWait(
      `带着一波三折后如同老僧入定的心态，${me.name} 在昏昏欲睡中才勉强想到，${kita.name} 已经拿下了三冠马的第一冠了。`,
    );
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    const baku = get_chara_talk(41);
    await print_event_name('疲惫的原因', kita);
    await kita.say_and_wait(`哈啊……哈啊……诶……跑完了么？`);
    await era.printAndWait(
      `冲过终点线后，${kita.name} 看向了一旁记录名次的看板。`,
    );
    await era.printAndWait(
      `是因为距离的不适应么？还是单纯的身体要素，如今的小北感觉不到胜利的实感。`,
    );
    await kita.say_and_wait(`我，胜利了么？在面对那个大鸣大放时？`);
    await era.printAndWait(
      `明明胜利了，${kita.name} 却还是露出了一副疲惫的表情，名为大鸣大放的强敌的气场似乎郝干了 ${kita.name} 的全部精力。`,
    );
    await era.printAndWait(
      `而直到回到休息室里过了好长时间，${kita.name} 才正常的开口说话。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，日本德比，真的是好厉害啊……`,
    );
    era.println();
    era.printButton('「缓过来了么，小北？」', 1);
    await era.input();

    await kita.say_and_wait(
      `是啊，勉勉强强的缓过来了，但是，还是没有胜利的实感。`,
    );
    await kita.say_and_wait(
      `真奇怪啊，训练员${me.get_adult_sex_title()}，明明小北我对自己的韧性还是很有自信的，但是……`,
    );
    await kita.say_and_wait(
      `这份胜利后还是没法驱散的疲惫，是我从来没没有感觉到的，莫非我并不适合这么长的距离么？`,
    );
    await era.printAndWait(`这么说的的 ${kita.name}，露出了有些沮丧的表情。`);
    await era.printAndWait(
      `三冠比赛的分量，2400M的漫长距离，强敌的威压和气场，对这个坚韧的孩子造成了很大的影响。`,
    );
    await era.printAndWait(
      `犹豫再三，正当 ${me.name} 准备开口说话时，门外传来了一个 ${me.name} 相当熟悉的声音。`,
    );
    await baku.say_and_wait(`是因为2400M的跑道太长了啦，北部同学！`);
    await era.printAndWait(
      `推开门，穿着体育服的 ${baku.name} 像是一阵风一样走了进来，自信满满地对小北说。`,
    );
    await era.printAndWait(
      `说起来，似乎在观众席上也确实看到了为两人一起加油的进王同学的身影。`,
    );
    await baku.say_and_wait(
      `不不，北部同学，完全不用担心！你的疲惫只不过是不熟悉距离所带来的疲倦，仅此而已！`,
    );
    await baku.say_and_wait(
      `北部同学常跑的2000m跑道，和2400m跑道，虽然仅仅有400M差距，这可不是什么1200m×3这样简单的数学题。`,
    );
    await baku.say_and_wait(
      `这区区400m，在没有习惯的时候，对体力和速度的影响可是相当大的！所以，不要太过沮丧和怀疑自己！北部同学！`,
    );
    await kita.say_and_wait(`是……是这样么！？原来只是不习惯啊！`);
    await era.printAndWait(
      `听完进王同学的教诲，${kita.name} 露出了恍然大悟的表情，语气也变得兴奋了起来。`,
    );
    await era.printAndWait(
      `看着又恢复了往日神采的 ${kita.name}，${me.name} 偷偷把进王同学平时形象完全不同这一件事吞进了肚里，希望这只是人家偶然的灵光一闪而已。`,
    );
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.stli_kin && extra_flag.rank === 1) {
    const dia = get_chara_talk(67);
    await print_event_name('升龙与伏龙', kita);
    await era.printAndWait(
      `当 ${kita.name} 在走廊里被 ${me.name} 用毛巾紧紧裹住，花了好半天才从满是汗味的毛巾里逃出的时候。`,
    );
    await era.printAndWait(
      `${kita.name} 的幼驯染，里见家的${
        dia.sex_code - 1 ? '大小姐' : '少爷'
      }光钻正抱着两杯蜂蜜特饮，就站在走廊的远处。`,
    );
    await era.printAndWait(
      `安静地注视正在 ${me.name} 怀里被毛巾擦来擦去的 ${kita.name}。`,
    );
    await kita.say_and_wait(`啊，小钻！你来看我的比赛了！`);
    await era.printAndWait(
      `头发被汗水弄得湿漉漉的 ${kita.name} 回过头，向小钻打了个招呼，急匆匆的朝着 ${dia.name} 跑了过去。`,
    );
    await era.printAndWait(
      `两只小马亲昵地抱在一起你侬我侬，两具丰腴的肉体贴合在一起，挤出色情的肉浪。`,
    );
    await dia.say_and_wait(
      `嗯，我看到了哦，小北，谢谢你让我看到了这么精彩的比赛。`,
    );
    await dia.say_and_wait(
      `简直让人心潮澎湃，让我也想要更加努力锻炼、去参加比赛了。`,
    );
    if (era.get('cflag:67:招募状态') !== recruit_flags.yes) {
      await dia.say_and_wait(
        `而且，可能也要谢谢你的那位训练员${me.get_adult_sex_title()}呢，是他对你的锻炼，让我燃起了兴趣啊。`,
      );
      await era.printAndWait(`说着，里见光钻对 ${me.name} 微微点头以致意。`);
    }
    await kita.say_and_wait(`诶诶！？真的么小钻！太好了`);
    await era.printAndWait(
      `小北像是狗狗一样高兴的摇起尾巴，而光钻也亲昵地在好朋友的脸蛋上亲了一口。`,
    );
    await dia.say_and_wait(`是哦，所以小北你要加油哦，菊花赏一定要加油啊。`);
    await kita.say_and_wait(
      `我会的哦！诶嘿嘿，我可是绝对不会辜负小钻你的期待的！`,
    );
    await era.printAndWait(
      `听着小北和小钻慢悠悠的的闲聊，${me.name} 感叹着女孩子之间的友谊可真是麻烦，偷偷露出了微笑。`,
    );
    extra_flag.relation_change = 10;
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank === 1) {
    const races = era.get('cflag:68:育成成绩');
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1)
    ) {
      await print_event_name('喝彩！三冠祭典！', kita);
      await era.printAndWait(
        `在听到 ${kita.name} 冲过终点时满场的欢呼雀跃时，总有种想哭的感觉。`,
      );
      await era.printAndWait(
        `最开始的 ${
          kita.name
        }，只是一个没有任何粉丝的普通赛${kita.get_uma_sex_title()}。`,
      );
      await era.printAndWait(
        `尽管其天赋足以被训练员们所认可，但是那并不华丽的朴实身体，让小北在最开始奔跑时总是得不到本应有的人气。`,
      );
      await era.printAndWait(
        `但是随着小北那足以证明自己的力量，皋月赏的胜利，在强敌手中夺下了日本德比。`,
      );
      await era.printAndWait(
        `如今已经成为二冠王${kita.get_uma_sex_title()}的小北正在全场的欢呼下奔跑。`,
      );
      await era.printAndWait(
        `所有人都在呼唤着小北的名字，在冲过终点时拼命的剁脚，马券和门票仿佛疯了似的漫天飞舞，还有人在Live时高兴的摔了下来。`,
      );
      await era.printAndWait(
        `希望医药费不会算在小北头上，${
          me.name
        } 苦笑着继续望着台上的${kita.get_teen_sex_title()}。`,
      );
      await era.printAndWait(
        `此时的 ${kita.name} 正随着音乐鼓点握紧麦克风，带着近乎冷傲的表情用手指扫过台下连成一片的粉丝。`,
      );
      await era.printAndWait(
        `不知是否是错觉，${me.name} 注意到小北在看向这边时，表情肉眼可见地温柔起来。`,
      );
      await era.printAndWait(
        `……可能是错觉吧，一边这么想着，${me.name} 随着人群一起打起了号子。`,
      );
      extra_flag.attr_change.fill(5);
      extra_flag.pt_change = 20;
    } else {
      await print_event_name('看啊！北部祭典！', kita);
      await era.printAndWait(
        `在听到 ${kita.name} 冲过终点时满场的欢呼雀跃时，总有种想哭的感觉。`,
      );
      await era.printAndWait(
        `只有最快的${kita.get_uma_sex_title()}才能赢下的比赛，无数强人望之叹息，因伤痛和无奈感叹时也命也的菊花赏。`,
      );
      await era.printAndWait(`如今，已经被 ${kita.name} 用脚亲自取下了。`);
      await era.printAndWait(
        `在最开始的时候，最初那个只有朴实的性格与身体的赛${kita.get_uma_sex_title()}，已经在刻苦的锻炼下蜕变成了能够胜利的孩子。`,
      );
      await era.printAndWait(
        `大家的欢呼，大家的鼓励如潮水般涌来，这份被小北炒热的气氛，仿佛是祭典欢庆的号子般在竞马场里不停回荡。`,
      );
      await era.printAndWait(
        `即使在小北已经在走廊深处消失不见了也仍能听见些许残存。`,
      );
      era.println();
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，可以在这里稍微陪我坐一下么？`,
      );
      await era.printAndWait(
        `在走廊拐角的地方，黑色的赛${kita.get_uma_sex_title()}摸索着在塑料椅子上坐下。`,
      );
      await era.printAndWait(
        `而后，满身汗水的 ${kita.name} 就这么呆呆的望着 ${me.name}，那因为激烈运动而微微泛起红晕的可爱脸蛋上露出了模糊不清的表情。`,
      );
      await kita.say_and_wait(
        `诶嘿嘿，总感觉还是没什么实感呢，虽然还是一如既往地以『祭典』风格奔跑的……`,
      );
      await kita.say_and_wait(
        `但是，果然啊……没有训练员${me.get_adult_sex_title()}的帮助，尽凭我自己是达不到这个程度的吧。`,
      );
      await kita.say_and_wait(
        `所以，谢谢你哦！训练员${me.get_adult_sex_title()}！`,
      );
      await era.printAndWait(
        `一边说着，${kita.name} 冲 ${me.name} 深深地鞠了一躬，而${kita.sex}的表情也终于恢复到了平常的姿态。`,
      );
      await era.printAndWait(
        `${me.name} 摸了摸${kita.get_teen_sex_title()}的脑袋，忍不住和${
          kita.sex
        }一起笑了起来。`,
      );
      extra_flag.attr_change.fill(3);
      extra_flag.pt_change = 10;
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 96 &&
    extra_flag.rank === 1
  ) {
    const dia = get_chara_talk(67);
    await print_event_name('真正的祭典', kita);
    await era.printAndWait(
      `在所有人的欢呼声中，赢取了胜利的 ${kita.name} 向众人挥手致意。`,
    );
    await era.printAndWait(
      `那充满力量的奔跑，那肉眼可见的热量，以及 ${kita.name} 万千的思绪。`,
    );
    await era.printAndWait(`在竞马场中再一次传达给了注视着小北的大家。`);
    await era.printAndWait(`也有，${me.name}。`);
    await dia.say_and_wait(
      `真是漂亮的胜利啊，训练员${me.get_adult_sex_title()}。`,
    );
    await era.printAndWait(`在 ${me.name} 身旁，${dia.name} 轻声赞叹道。`);
    await dia.say_and_wait(
      `小北${kita.sex}，赢下了有马纪念呢，哼哼～简直就像是祭典一样。`,
    );
    await dia.say_and_wait(
      `而且，想到以前的小北是绝对做不到现在这样的事，就连我也被现在的气氛稍微感染了呢。`,
    );
    await era.printAndWait(
      `是啊……${me.name} 在心底里无声的赞同着 ${dia.name} 的说法。`,
    );
    await era.printAndWait(
      `无论曾经的小北有多么结实，但是，能够赢得胜利的绝不是从前，而是现在的小北呢。`,
    );
    await era.printAndWait(
      `${me.name} 和里见光钻并肩注视着仍然在挥手致意的小北。`,
    );
    await era.printAndWait(`而经典年最后的比赛，有马纪念就这么落入了尾声。`);
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.sank_hai && extra_flag.rank === 1) {
    await print_event_name('没有劲敌的世界', kita);
    await era.printAndWait(
      `在比赛前，实际上也有担忧过 ${kita.name} 能否取得大阪杯的胜利。`,
    );
    await era.printAndWait(
      '作为从G2提升为G1级别的比赛，大阪杯有着太多的不确定性，更不要说选手中更是强敌如云。',
    );
    await era.printAndWait('所以在胜利之后，就连小北也显得有些惊讶。');
    await era.printAndWait(
      `但在惊讶之余，${kita.name} 脸上露出的则更多是喜悦和兴奋的表情。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，我，突破了今年的目标了哦。`,
    );
    await era.printAndWait(`握住训练员的手，${kita.name} 兴奋地对你说。`);
    await era.printAndWait(
      '就算自己是个没有什么值得称道的特质，也没有能做出瞩目的事迹的孩子。',
    );
    await era.printAndWait(
      `但是，就算再怎么不擅长的比赛，也在 ${kita.name} 的努力下被${kita.sex}克服了。`,
    );
    await era.printAndWait(
      `而如今，${kita.name} 想要将这份感情传达给自己的训练员。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}！嗯！根本有没什么做不做得到的哦！也没有什么跑不完的比赛！`,
    );
    await kita.say_and_wait(
      '这次做到了，下一次我也一定能做到！所以，接下来的天皇赏（春）请你好好期待吧！',
    );
    await kita.say_and_wait(
      '下一场比赛，我要将胜利的桂冠献给您！我会做到的！证明没有什么是努力后做不到的！',
    );
    await era.printAndWait(
      `那话语中的热量让人心头一暖，于是在 ${kita.name} 一如既往温暖的微笑中，${me.name} 暗自下定了决心。`,
    );
    await era.printAndWait('绝对会让自己的担当迎来胜利。');
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.tenn_spr && extra_flag.rank === 1) {
    const pero = get_chara_talk(18);
    await print_event_name('耸立的绝壁', kita);
    await era.printAndWait(
      `在 ${kita.name} 站在胜者舞台上向粉丝们挥手致意时，因为胜利而备受感动的粉丝们的欢呼，几乎要把屋顶都要掀翻了过去。`,
    );
    await era.printAndWait(`粉丝A「干得漂亮啊 ${kita.name}！」`);
    await era.printAndWait(
      `粉丝B「这才是我们期待的赛${kita.get_uma_sex_title()}！」`,
    );
    await era.printAndWait(`粉丝C「祝你一定要春秋连霸啊！」`);
    await era.printAndWait(
      `在卖力的奔跑下，热爱 ${kita.name} 的粉丝们也变得越来越多。`,
    );
    await era.printAndWait(
      `而关注小北的大家，也在这场胜利后仰慕起 ${kita.name} 不认输的努力形象，或许也会或多或少地改变自己的生存方式吧。`,
    );
    await era.printAndWait(`但是——`);
    await pero.say_and_wait(
      `${kita.name} 的训练员${me.get_adult_sex_title()}，可以稍微谈一谈么？`,
    );
    await era.printAndWait(
      `在音乐奏响起的一刹那间，${me.name} 的耳边传来了女人的声音。`,
    );
    await era.printAndWait(
      `${me.name} 回过头，出现在 ${me.name} 面前的是特雷森学生会的副会长，有着『女帝』别名的${pero.name}。`,
    );
    await pero.say_and_wait(
      `我知道您很想欣赏 ${kita.name} 同学的胜利live，所以我稍微说两句话就走，可以么？`,
    );
    era.println();
    era.printButton('「没关系，请说。」', 1);
    await era.input();
    await pero.say_and_wait(
      `谢谢您，作为最强也是本世代的代表赛${kita.get_uma_sex_title()}之一，${
        kita.name
      } 同学的努力有目共睹，所以Live开始前我也就快点说了。`,
    );
    await pero.say_and_wait(
      `您对于去年菊花赏时，没有实现的大鸣大放同学和 ${kita.name} 同学的对局，有什么想法么？`,
    );
    await era.printAndWait(
      `激昂的鼓点在耳边响起，连带着的是小北悦耳而中气十足地歌喉。`,
    );
    await era.printAndWait(
      `在去年的宝冢纪念后，本世代最强的赛${kita.get_uma_sex_title()}之一，也是小北强敌的大鸣大放因为身体因素而避战菊花赏。`,
    );
    await era.printAndWait(
      `在此之后小北便没什么同对方较量的机会，恐怕对于对方来说，这也是十足的遗憾……但这可不是一个人就能决定的事啊……`,
    );
    await pero.say_and_wait(
      `我只是来传达消息的，要不要重新为那次比赛做出了断是您和 ${kita.name} 的决断。`,
    );
    await era.printAndWait(
      `似乎是看出了 ${me.name} 想要和 ${kita.name} 商讨的意思，${pero.name} 微笑着在气场上退了一步。`,
    );
    await era.printAndWait(`在留下一句话之后，便向 ${me.name} 道别转身离去。`);
    await pero.say_and_wait(
      `若是有兴趣的话，下一站就请去仁川，在宝冢纪念上同对方决一胜负吧。`,
    );
    await era.printAndWait(
      `在舞台上，${kita.name} 的live正到了新的高潮，${me.name} 思索着在宝冢纪念上决一胜负的规划，转头欣赏起自己担当的舞步。`,
    );
    await era.printAndWait(
      `${pero.name} 有一点想错了，从一开始 ${me.name} 就没有想过 ${kita.name} 会避战的可能性。`,
    );
    await era.printAndWait(`而那忧虑，也只是在思考怎样才能胜利，仅此而已。`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    extra_flag.rank === 1 &&
    edu_weeks > 96
  ) {
    await print_event_name('交到手中的接力棒', kita);
    await era.printAndWait(
      `${kita.name} 同大鸣大放的决一死战，最终以 ${kita.name} 的胜利落下了帷幕。`,
    );
    await era.printAndWait(
      `这场噱头响亮的竞赛让阪神竞马场座无虚席，门票早在售票开始后的半个小时便被哄抢一空。`,
    );
    await era.printAndWait(
      `无数人挤破头也想亲眼目睹这场传奇的对决————而两位强大的赛${kita.get_uma_sex_title()}也的确没有辜负众人的寄托。`,
    );
    await kita.say_and_wait(`到达了极限啊，我。`);
    await era.printAndWait(
      `被${kita.get_teen_sex_title()}们的铁蹄踏过的草场此刻已经外翻，露出了下面湿润的泥土。`,
    );
    await era.printAndWait(
      `坐在已经空无一人阪神竞马场里，${kita.name} 面前的是一片斑驳残缺的草地，${kita.sex}的体力已经消耗殆尽，${kita.sex}的意志紧绷到了极限。`,
    );
    await era.printAndWait(`但即使如此，${kita.name} 依然在望着身下这片草地。`);
    await kita.say_and_wait(
      `虽然这一次和就要退役的大鸣大放同学的比试相当愉快，但是之后的比赛恐怕会很困难吧。`,
    );
    await kita.say_and_wait(
      `天皇赏，日本杯，有马纪念，还有皇冠同学还有高尚骏逸同学这两位强敌，呜哇～想想就头皮发麻……`,
    );
    await era.printAndWait(
      `叹息着发出哀怨的声音，${kita.name} 用脚尖戳着一块翻起的泥土。`,
    );
    await kita.say_and_wait(
      `不过，这就是属于我们的奔跑，胜者要带着败者的份，同训练员${me.get_adult_sex_title()}一起胜利下去，这是我和大鸣大放同学约好的。`,
    );
    await era.printAndWait(
      `${kita.name} 张开双臂，背对着竞马场露出了坚毅无比的表情。`,
    );
    await era.printAndWait(
      `合宿过后的十月就是G1的高强度连战，恐怕接下来的比赛一定会变得更加困难。`,
    );
    await era.printAndWait(
      `保守考验的老将和崭露头角的新人，更不要说近乎连轴转的比赛本就是对体力的消耗。`,
    );
    await era.printAndWait(`但是。若是 ${kita.name} 的话，一定……`);
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，让我们胜利下去吧！`,
    );
    await era.printAndWait(`没错，${kita.sex}会这么说着然后露出温暖的微笑。`);
    await era.printAndWait(`这就是 ${kita.name}，黑色的祭典。`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (extra_flag.race === race_enum.tenn_sho && extra_flag.rank === 1) {
    await print_event_name('泥地之后就是花道', kita);
    await kita.print_and_wait(`赢了，胜利了，夺下了这场比赛。`);
    await kita.print_and_wait(
      `大口大口地喘息着发出沉重的声音，${kita.name} 在终点线后慢跑着停下脚步。`,
    );
    await kita.print_and_wait(
      `不断传来抽痛的双足已经濒临极限，实际上也有好几次两腿撞到了一起。`,
    );
    await kita.print_and_wait(
      `尝试了好几次让颤抖停下也没办法，最后只能在大家的注视下用手按住双腿……`,
    );
    await kita.say_and_wait(
      `不好。这样是不是丢人啊……必须要说点什么才好……`,
      true,
    );
    await kita.say_and_wait(`真不愧是G1比赛，真是名不虚传～啊哈哈～`, true);
    await kita.print_and_wait(
      `想要发出这样的感叹打消丢人的感觉，但是连这样的感叹都累的发不出了。`,
    );
    await kita.say_and_wait(
      `呜哇……这样的话就真的有点丢人了，而且笑什么笑啊……弄得大家都凑过来看着我了……`,
      true,
    );
    await era.printAndWait(
      `${kita.get_uma_sex_title()}A「北部同学！脸！脸！」`,
    );
    await era.printAndWait(
      `${kita.get_uma_sex_title()}B「发什么呆啊赶紧来个大人！」`,
    );
    await era.printAndWait(`${kita.get_uma_sex_title()}C「呜哇啊！」`);
    await kita.print_and_wait(
      `嗯？为什么大家这么慌张，莫非是脸上粘上泥土了么？`,
    );
    await kita.print_and_wait(
      `不，摸了一下没感觉啊，只有黏糊糊的汗液的感觉……难道是跑的脸红脖子粗露出了不像样的表情么？`,
    );
    await kita.print_and_wait(
      `呜哇啊，不要啊……我还是想要像光钻${kita.sex}们一样像个闪亮亮的${
        kita.sex_code - 1 ? '大小姐' : '明星'
      }一点的，这下丢大人了……`,
    );
    await kita.say_and_wait(
      `天皇赏秋的赛${kita.get_uma_sex_title()}是个跑的脸红脖子粗的孩子不要啊……呜诶～训练员${me.get_adult_sex_title()}在哪啊。`,
      true,
    );
    await kita.print_and_wait(
      `四下摇晃着脑袋寻找着训练员${me.get_adult_sex_title()}的踪迹，${
        kita.name
      } 注意到不远处，${me.name} 正跨越栏杆向这边飞奔而来。`,
    );
    era.println();
    era.printButton('「小北！脸！鼻子！怎么样！」', 1);
    await era.input();
    await kita.print_and_wait(
      `？怎么训练员${me.get_adult_sex_title()}也在说听不懂的话啊…？啊，是在说比赛的感想么？`,
    );
    await kita.print_and_wait(
      `${kita.name} 猛的吸了吸鼻子，一股铁锈般美味的泥土味涌入喉咙当中。`,
    );
    await kita.print_and_wait(
      `于是，开闸时被故障反弹的铁门撞破了脑门和鼻子，满脸鲜血的 ${kita.name} 对这边露出微笑，大声喊道：`,
    );
    await kita.say_and_wait(`味道超级甜的哦！`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.japa_cup &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('交汇的源流', kita);
    await era.printAndWait(
      `在 ${kita.name} 第一个冲过终点线后，${me.name} 翻过栅栏，急匆匆地跑到 ${kita.name} 身边。`,
    );
    await era.printAndWait(
      `在区区一个月的疗养之后，${me.name} 的担当依旧选择出道日本杯进行比赛，在所有人忧心忡忡的状态下踏上了跑道。`,
    );
    await era.printAndWait(`但最终，小北赢了胜利，这就足够了。`);
    await kita.say_and_wait(
      `诶嘿嘿，蹄铁在跑步的时候掉了下来，所以只能赤着脚跑啦！`,
    );
    await era.printAndWait(
      `脸上仍然包着纱布的 ${kita.name} 嘿嘿笑着，让 ${me.name} 感觉到了一阵内心的抽动和于心不忍。`,
    );
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('名为笑容的烟花', kita);
    await era.printAndWait(`解说「${kita.name}！冲过终点线！」`);
    await era.printAndWait(
      `伴随着观众们的掌声和欢呼雀跃声，${kita.name} 对着天空高高举起手臂，仿佛是在宣告自己的胜利。`,
    );
    await era.printAndWait(
      `这位曾经两度挑战有马纪念的赛${kita.get_uma_sex_title()}，如今在竞马场上取得了有马纪念的胜利。`,
    );
    await era.printAndWait(
      `以并不华丽，甚至仍旧带伤的身姿，在年末的舞台上为所有人献上了最美好的收尾。`,
    );
    await era.printAndWait(
      `回过神来时，${
        me.name
      } 已经悄悄地凑到了小北身边，用毛巾心疼的擦着${kita.get_teen_sex_title()}额头上的汗水。`,
    );
    era.println();
    era.printButton('「小北，感觉怎么样？」', 1);
    await era.input();
    await kita.say_and_wait(
      `感觉脑子里乱糟糟的，说实话小北我脑子可能有点笨，跑步和思考只能实现一边……`,
    );
    await kita.say_and_wait(
      `但是，我觉得没有辜负大家对我的应援，没有辜负付出全力的对手，也没有辜负我自己的努力。`,
    );
    await era.printAndWait(
      `露出松弛表情的 ${kita.name} 踮起脚尖，那纤细的手指牵住 ${me.name} 的手臂。`,
    );
    await era.printAndWait(
      `带着足以灼烧他人的温度的美丽瞳孔，带着笑意就这么同 ${me.name} 对视起来。`,
    );
    await kita.say_and_wait(
      `而且我也没有辜负训练员${me.get_adult_sex_title()}你。`,
    );
    await kita.say_and_wait(`嘿嘿嘿～这就是我人生中最后的比赛，太好了……`);
    await era.printAndWait(
      `${kita.get_teen_sex_title()}的脸蛋因为羞涩和奔跑涨得通红，似乎就连说出这番言论的${
        kita.sex
      }也有些不知所措。`,
    );
    await era.printAndWait(
      `毕竟还是个小孩子呢，${me.name} 这么想着，张开双臂紧紧抱住 ${kita.name}。`,
    );
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜！', kita);
    await kita.say_and_wait(`训练员${me.get_adult_sex_title()}！我，赢了哦！`);
    await kita.say_and_wait(`来看望比赛的大家也很开心的样子，真是太好了！`);
    await era.printAndWait(`高兴地摇晃起尾巴，${kita.name} 露出了愉快的表情。`);
    await era.printAndWait(
      `刚刚看到小北和老家的父亲通了电话，被父亲好好夸奖了一番，还说晚上要喝酒庆祝。`,
    );
    await era.printAndWait(
      `那么今天也用果汁庆祝一下吧，这么说着，${me.name} 拿出饮料倒了两杯果汁。`,
    );
    await kita.say_and_wait(`好耶，训练员${me.get_adult_sex_title()}，干杯！`);
    await era.printAndWait(
      `在纸杯的碰撞中，${kita.name} 毫不在乎撒在手腕上的果汁，开心地庆祝起了胜利。`,
    );
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜!', kita);
    await era.printAndWait(
      `在休息室里，${kita.name} 咕咚咕咚的大口喝着水，而后长长的舒了一口气。`,
    );
    await kita.say_and_wait(
      `噗哇～感觉好多了！谢谢你训练员${me.get_adult_sex_title()}……诶？为什么要露出这样的表情？`,
    );
    await era.printAndWait(
      `看着露出担忧表情的 ${me.name}，${kita.name} 嘿嘿笑着将瓶盖拧上。`,
    );
    await kita.say_and_wait(
      `只不过是没有赢下比赛而已啦，训练员${me.get_adult_sex_title()}请不要太担心哦。`,
    );
    await kita.say_and_wait(
      `虽然小北我觉得很不甘心，但是下一次一定会加倍努力，赢得比赛的！`,
    );
    await era.printAndWait(
      `看到反而是安慰起自己的黑色${kita.get_uma_sex_title()}，${
        me.name
      } 松了一口气，同时在心底暗自下了决心。`,
    );
    await era.printAndWait('下一次，一定会赢。');
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛失败！', kita);
    await era.printAndWait(
      `在休息室里，${kita.name} 的手机不断传来嗡嗡的声音。`,
    );
    await kita.say_and_wait(
      `这个是班上的同学发来安慰的短信呢，下一次一定要复仇，${kita.sex}是这么说的。`,
    );
    await kita.say_and_wait(
      `商店街的阿姨也发来短信了啊，下次也会来应援什么的。`,
    );
    await era.printAndWait(
      `手机屏幕的光照亮了小北的脸蛋，${me.name} 注意到上面没有半分沮丧的神情。`,
    );
    await era.printAndWait(
      `正相反，小北的脸蛋是已经振作起来的人才会露出的表情。`,
    );
    await kita.say_and_wait(
      `这么多的人都在为我应援，鼓励我呢，既然如此，我又有什么资格沮丧呢！`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，等我们回去了就去加倍锻炼吧！`,
    );
    await era.printAndWait(`这么说着，小北站起身，仿佛比之前更有精神了。`);
  } else {
    await print_event_name('竞赛失败！', kita);
    await kita.say_and_wait('唔姆姆姆姆……这次又输了啊……');
    await era.printAndWait(
      '垂头丧气的小北用吸管在果汁里吹着泡泡，露出了沮丧的表情。',
    );
    await kita.say_and_wait('真是不甘心啊……下次一定要赢过来……');
  }
};
