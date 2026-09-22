/**
 * @file 醒目飞鹰 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} falcon 醒目飞鹰
   * @param {string} train 训练的基础属性（已经过 i18n 翻译）
   */
  get_ts_content(falcon, train) {
    era.print([falcon.get_colored_name(), ' 的 ', train, ' 训练顺利结束了']);
  },
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`预定的计划全部结束之后`);
      await falcon.say_and_wait(`${callname}！看到闪闪发光的飞鹰子了吗？`);
      await era.printAndWait(
        `在泥地上挥洒着汗水，满身尘土的${falcon.name}，眼神却是闪闪发光。`,
      );
      await you.say_and_wait(`预定计划都顺利完成了，飞鹰子辛苦了。`);
      await falcon.say_and_wait(`${callname}也觉得飞鹰子在闪耀吗！太好了⭐`);
      await era.printAndWait(
        `从${you.name}的手上接过洗好的毛巾擦去了脸上的泥污，慢慢靠近了正在整理数据的${you.name}。`,
      );
      await falcon.say_and_wait(`嗯，那个，${callname}，`);
      await era.printAndWait(
        `微风吹动了路边生长的小草，${falcon.name} 的神情被夕阳的光线被隐藏。`,
      );
      await falcon.say_and_wait(
        `可以再稍微练习一会吗？飞鹰子还有想要完成的目标哦！`,
      );
      await falcon.say_and_wait(
        `而且，作为${falcon.uma_sex_title}偶像的话，目标稍微～定高一样也没关系吧？`,
      );
      await falcon.say_and_wait(`那么，${callname}又是怎么想呢？`);
      era.printButton(`这样的话`, 1);
      await era.input();
      await era.printAndWait(
        `虽然飞鹰子现在的状态很好可以额外训练，不过训练量突然加大会不会影响第二天的训练呢？`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`即使是路边生长的小草，也渴望着茁壮成长吗？`);
      era.printButton(`「那么加油哦，未来的${falcon.uma_sex_title}偶像」`, 1);
      era.printButton('「……今天的话就训练到这里了」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`嗯！额外训练也请多关照了，${callname}！`);
        era.printButton(
          `能看着飞鹰子一步步走向顶级偶像的道路，我也很高兴哦。`,
          1,
        );
        await era.input();
        await you.say_and_wait(`接下来的话`);
        await era.printAndWait(
          `一直训练到快门禁后，${callname} 抱着跑不动的飞鹰子到了宿舍门口。`,
        );
      } else {
        await falcon.say_and_wait(`可是……`);
        await you.say_and_wait(
          `成为${falcon.uma_sex_title}偶像的道路不是一蹴而就的，过度的训练只会适得其反！`,
        );
        await falcon.say_and_wait('诶？');
        await you.say_and_wait(
          `过度训练之后容易因为疲惫疏忽训练方法不当使得腿部受伤甚至骨折。`,
        );
        await you.say_and_wait(
          `所以作为飞鹰子的训练员我不能犯这么高风险的事情。`,
        );
        await falcon.say_and_wait(
          `飞鹰子真是个笨蛋呢，居然没想到这么简单的事情。`,
        );
        await era.printAndWait(
          `看着低着头不敢直视 ${callname} 的飞鹰子，${callname} 叹了口气，摸了摸${falcon.sex}的头。`,
        );
        await you.say_and_wait(`接下来的话先回训练室吧稍微休息一会吧。`);
        await falcon.say_and_wait(`好！`);
        await era.printAndWait(
          `之后${you.name}在训练室中一边帮着飞鹰子做着腿部按摩一边讨论着最近的流行趋势。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     * @param {number} fail_again 如果选努力的话是否再次失败
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`……${callname}`);
      await you.say_and_wait(`飞鹰子……`);
      await era.printAndWait(
        `校医「您是${falcon.sex} 的训练员吧，为什么${falcon.sex} 这么疲惫还要冒这份风险？」`,
      );
      await era.printAndWait(
        `无言以对，${you.name} 只能默默地听着${falcon.sex} 的训斥。`,
      );
      await falcon.say_and_wait(`不对，是我自己要求的。`);
      await era.printAndWait(`校医「您不知道受伤的话有可能会产生后遗症吗？」`);
      await era.printAndWait(
        `训练员手册上也记载了因为平时训练受伤留下后遗症的缘故不得不退役的案例。`,
      );
      await era.printAndWait(`尽管如此。`);
      await you.say_and_wait(`抱歉，下次我会注意的。`);
      await era.printAndWait(`校医「不要打扰病人休息」`);
      await era.printAndWait(
        `校医叹了口气，顺手关上了门，医务室里沉默的二人对视着。`,
      );
      era.printButton('「没关系的，飞鹰子就这样好好休息吧」', 1);
      era.printButton('「……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`……嗯，飞鹰子一定很快会好起来的。`);
        await falcon.say_and_wait(
          `飞鹰子有的时候也过于急躁了，所以不全是${callname}的错哦。`,
        );
        era.printButton('「谢谢你，飞鹰子」', 1);
        await era.input();
        await falcon.say_and_wait(
          `嗯，${callname}，可以把放在训练室中的杂志帮我拿过来吗？`,
        );
        await you.say_and_wait(`好的，飞鹰子也要好好休息。`);
        await falcon.say_and_wait(`嗯。`);
        await era.printAndWait(`轻轻关上了医务室的门，飞鹰子似乎已经睡下了。`);
      } else if (fail_again) {
        await falcon.say_and_wait(`${callname}。`);
        await era.printAndWait(`飞鹰子抢在${callname} 之前打破了沉默。`);
        await falcon.say_and_wait(`可以握着我的手吗？`);
        await era.printAndWait(`飞鹰子的目光从天花板慢慢移向了窗外。`);
        await falcon.say_and_wait(`与朋友们分开，也是在这个夕阳的时候。`);
        await falcon.say_and_wait('好痛！');
        await you.say_and_wait(`飞鹰子！`);
        await falcon.say_and_wait(`${callname}，可以再稍微靠近一点吗？`);
        await falcon.say_and_wait(
          `已经与那么多朋友分开了，我不想再失去${callname}了。`,
        );
        await era.printAndWait(
          `紧紧抱住了哽咽着的飞鹰子，${you.name}看着巨大的金黄色物体慢慢被地平线吞没。`,
        );
        await era.printAndWait(`漫长的黑夜要到了。`);
      } else {
        await falcon.say_and_wait(`${callname}`);
        await era.printAndWait(`飞鹰子呼唤着${callname} 的名字。`);
        await era.printAndWait(
          `不知为何，${callname} 紧紧握住了${falcon.sex} 的手。`,
        );
        await falcon.say_and_wait(`我能感受到，${callname}那温暖的大手`);
        await falcon.say_and_wait(`感觉稍微好点了。`);
        await you.say_and_wait(`我就在这里，哪里也不会去！`);
        await falcon.say_and_wait(`${callname}，真温柔呢。`);
        await era.printAndWait(`飞鹰子将大手放到了自己的脸庞`);
        await falcon.say_and_wait(`就这样，好好休息一会吧。`);
        await era.printAndWait(`没过多久，飞鹰子就这样睡着了。`);
        await era.printAndWait(`悄悄关上房门后，${callname} 离开了医务室。`);
        await era.printAndWait(`飞鹰子很快就恢复了活力。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     * @param {number} fail_again 如果选努力的话是否再次失败
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`${callname}……`);
      await era.printAndWait(`飞鹰子在训练的时候不甚扭到了脚`);
      await falcon.say_and_wait(`抱歉，飞鹰子太累了所以……`);
      await era.printAndWait(`可能是接连不断的突击live大量消耗了飞鹰子的体力`);
      era.printButton('「接下来的街头live需要暂时停止了。」', 1);
      era.printButton('「试试看街头演出吧？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`呜～那些期待着飞鹰子的粉丝们该怎么办呢？`);
        era.printButton(
          '「就这样挺着受伤的腿强行表演的话，粉丝们也会担心的吧？」',
          1,
        );
        await era.input();
        await falcon.say_and_wait('……看来只能这样稍微暂停一会了');
        await falcon.say_and_wait(
          '那么，为了打起精神来，一起在训练室看有马胜者舞台的表演吧！',
        );
        era.printButton('「注意受伤的部位不要用力。」', 1);
        await era.input();
        await falcon.say_and_wait(`知道了！${callname}可以抱着我吗？`);
        era.printButton(`「嘿咻！」`, 1);
        await era.input();
        await falcon.say_and_wait(`呜哇，真的抱起来了`, true);
        await falcon.say_and_wait(`身上有种很好闻的气味而且靠的好近`, true);
        await era.printAndWait(`因为腿伤需要休息所以回到状态需要一点时间。`);
      } else {
        await era.printAndWait(
          `如果能伴随着音乐的节拍，说不定能让飞鹰子好的快一点？`,
        );
        await era.printAndWait('想了一会后，决定还是试试。');
        era.printButton(
          '「如果心情愉悦的话伤口也会好的快一点，所以去开live吧！」',
          1,
        );
        await era.input();
        await falcon.say_and_wait(`诶，原来还有这种方法吗？飞鹰子会加油的！`);
        if (fail_again) {
          await era.printAndWait(
            `像以往一样，趁绿色恶魔被${callname} 缠住的时候，飞鹰子的例行演出又开始了。`,
          );
          await falcon.say_and_wait(
            `各位！看这边！飞鹰子的live现在就要开始了！`,
          );
          await era.printAndWait(
            `在这边不停伴随着节奏的跳着舞蹈的飞鹰子，像是根本没有受过伤一样。`,
          );
          await falcon.say_and_wait(`太好了！总算吸引到几个粉丝了！`, true);
          await era.printAndWait(
            `因为大脑在思考的时候反应慢了一拍，不小心摔了一跤。`,
          );
          await falcon.say_and_wait(`呜，飞鹰子没关系的⭐`);
          await era.printAndWait(
            `等到${callname} 勉强摆脱手纲小姐时，飞鹰子的伤口好像恶化了。`,
          );
        } else {
          await era.printAndWait(`演出的效果意外的好`);
          await falcon.say_and_wait('大家！这边！都看过来！');
          await era.printAndWait(
            `以平地作为舞台，取出随身携带的麦克风，飞鹰子的小小舞台就出现了。`,
          );
          await falcon.say_and_wait(`♪`);
          await era.printAndWait(
            `慢慢的，从无人问津，到稀疏的人群，再到人们纷纷聚集在一起。`,
          );
          await era.printAndWait(`河岸边的草地上聚满了人群。`);
          era.printButton('「看来效果很好啊」', 1);
          await era.input();
          await era.printAndWait(
            `${callname} 也站在不时喝彩的人群之中，静静看着飞鹰子的演出。`,
          );
          await era.printAndWait(
            `演出作战看上去大获成功，${falcon.name}的伤口也恢复得更快了.`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '喊声隆隆的沙地赛';
    // 对于偶像活动相当热枕，但对于比赛有点强迫自己上去，可能是对失败未来的恐惧
    // 主题：奋力向前，逆流而上 飞鹰子与训练员旅游时闲聊得出的结论
    // 人是一种很容易寂寞的生物，在曲终人散之后，从亢奋的精神慢慢退回，然后只剩下疲惫
    // 一般人眼中的乐观，仅仅只是将四处收集而来的瓦片聚拢起来，然后拼凑起来的乐观，因此，面对较大的危险就会四分五裂
    // 因此，不过只是装作乐观的悲观者罢了
    // 然而，悲观往往是对自身所做成就的忽视，如果将看向未来的视野收回到自身不足5米的可操纵区域，反而会得到继续下去的动力
    // 过大的期待会造成止步不前，最终会被借口所埋没，良心也因此蒙尘，最后欠下一个又一个谎言的债务
    // 训练员遵守约定带飞鹰子看沙地赛
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname_37 荣进闪耀对玩家的称呼
     */
    const f = async (falcon, flash, you, callname_37) => {
      await era.printAndWait(`某处的沙地赛`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `解说`,
        `比赛已经进入最终阶段！二号选手与四号选手从马群之中脱颖而出，开始了最后的角逐！`,
      );
      await you.say_as_passer_by_and_wait(`观众`, `唔噢噢噢噢噢噢噢！`);
      await era.printAndWait(
        `雪花从天空悄然落到肩头，然后化为了潮湿的水汽，看台上的观众们裹着厚厚的围巾与大衣，手中挥舞着旗帜和彩带，此起彼伏的加油助威声打破了冬日的宁静。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛${falcon.uma_sex_title}`,
        `哈啊啊啊啊！`,
      );
      await era.printAndWait(
        `两名${falcon.uma_sex_title}在前半段的比赛中一直位于先头阵营，但并未真正与马群拉开差距。直到最后的冲刺阶段才骤然加速，将马群逐渐甩在后面。`,
      );
      await era.printAndWait(
        `观众席上的尽然有序的加油助威声被戏剧性的场面划破而杂乱无章。`,
      );
      await you.say_as_passer_by_and_wait(
        `解说`,
        `两人之间毫不相让，距离终点还有200米！100米！50米！最后的胜利者是——`,
      );
      await era.printAndWait(`时间在此凝固。`);
      await era.printAndWait(
        `追赶的${falcon.uma_sex_title}与前方的${falcon.uma_sex_title}并肩做好了超越的架势，而后——`,
      );
      await falcon.say_and_wait(
        `这就是训练员${you.adult_sex_title}想让我看到的画面吗？`,
      );
      await era.printAndWait(`凝固的时间再次移动。`);
      await era.printAndWait(
        `取得胜利的${falcon.uma_sex_title}，不顾浑身被沙土所覆盖，将混合着汗水与泪水的笑脸献给了观众们。\n\n`,
      );
      await era.printAndWait(
        `场地的聚光灯集中照射在胜者的那位身上，其他${falcon.uma_sex_title}宛如众星拱月，将胜利的果实衬托得如此甜美诱人。`,
      );
      await era.printAndWait(
        `激动的喜悦也好，失败的不甘也罢，从喉咙之中挤出的不甘呐喊、喉咙嘶哑也要触及到的那片天空。`,
      );
      await era.printAndWait(
        `即使是寒冷的夜晚，这份炽热的情感也切实传到了在场的每一位观众心中。`,
      );
      await falcon.say_and_wait(`哇啊啊——沙地赛，比我想象之中还要热闹呢。`);
      await falcon.say_and_wait(
        `在舞台最中央的${falcon.uma_sex_title}，观众们的注意力全部集中在这里……`,
        true,
      );
      await falcon.say_and_wait(`如果飞鹰子也能站在这里的话。`, true);
      await falcon.say_and_wait(`飞鹰子……飞鹰子感动得都要哭出来了！`);
      await era.printAndWait(`从出口处离开的${falcon.name}诉说着心中的感受。`);
      await falcon.say_and_wait(
        `没想到沙地赛比想象中还要精彩，观众们的热情，还有${falcon.uma_sex_title}们为此付出的爱，与选择草地的${falcon.uma_sex_title}们都是一样的！`,
      );
      await falcon.say_and_wait(`飞鹰子决定了！`);
      await era.printAndWait(
        `被热情点燃的${falcon.teen_sex_title}认真的看向${you.name}。`,
      );
      await falcon.say_and_wait(
        `飞鹰子要以沙地赛为起点，顺着这条赛道一气不停的直直冲向顶级${falcon.uma_sex_title}偶像的终点！`,
      );
      await era.printAndWait(
        `吵闹声引得周围的游客纷纷侧目，而${falcon.name}的泥地偶像之路才刚刚开始。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`快到门禁时间了！那么明天见⭐`);
      await era.printAndWait(
        `在目送载着${falcon.name}的电车离开之后，偶然间看到了一个熟悉的身影。`,
      );
      await you.say_and_wait(
        `荣进闪耀，是荣进闪耀小姐没错吧。今晚真是个风和日丽的好日子。`,
      );
      await era.printAndWait(
        `由学生来打招呼有点让${you.name}不太舒服，同时抱着了解对方的目的，${you.name}主动向对方打起了招呼。`,
      );
      await flash.say_and_wait(`是呢，晚上好哦，${callname_37}。`);
      await you.say_and_wait(
        `是在等待${falcon.actual_name_with_title}回来吗？请放心，${falcon.actual_name_with_title}已经平安回到宿舍中了。`,
      );
      await you.say_and_wait(
        `在路上听飞鹰小姐说过自己有个能严格按照计划表进行的室友。虽然在路上就有所期待了，不过现在看来本人比飞鹰小姐说的更加可靠。`,
      );
      await era.printAndWait(
        `在路上听到${falcon.name}提到过自己有个守时的室友，与对方打好关系比较重要。`,
      );
      await flash.say_and_wait(
        `呵呵，您过奖了。只是为了能顺利执行预定的事项而应该做的事情而已，没有什么了不起的。`,
      );
      await flash.say_and_wait(
        `不过既然提到飞鹰同学的话，说来也是巧合，我也在这段时间内不止一次听到${falcon.sex}谈论起您来了呢。`,
      );
      await era.printAndWait(
        `荣进闪耀轻笑了几声，随后便将话题指向了${you.name}。`,
      );
      await you.say_and_wait(
        `飞鹰${falcon.adult_sex_title}对我如此看重实在令我感到荣幸。`,
      );
      await you.say_and_wait(`既然这样，我也对接下来的三年时光开始期待了呢。`);
      await flash.say_and_wait(`三年时光啊……`);
      await era.printAndWait(`听到${you.name}提起这个词汇，荣进闪耀沉默片刻。`);
      await flash.say_and_wait(
        `${callname_37}，虽然在现在这个时间点提起这个问题可能会有一些冒犯与唐突，不过还是请容我询问一句。`,
      );
      await flash.say_and_wait(
        `身为担当训练员，您已经对此做出相应的觉悟了吗？与飞鹰同学${falcon.sex}一心同体，肩负起责任的觉悟。`,
      );
      await era.printAndWait(`来了，就是这句！`);
      await era.printAndWait(`和想象中一样，闪耀一定是看重这份友谊。`);
      await era.printAndWait(
        `如果要通过${falcon.sex}的考验，这边夜的拿出同样的诚意才行。`,
      );
      era.printButton(
        '「我会像醉心于园艺的园丁一样精心呵护埋下去的种子，带着祝福与希望祈祷${falcon.sex}能顺利绽放。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        `真是相当感性的回答呢，既然如此，那我也放心了。`,
      );
      await era.printAndWait(
        `荣进闪耀朝${you.name}微微鞠躬，似乎是在表达谢意。`,
      );
      await flash.say_and_wait(
        `飞鹰同学${falcon.sex}以后就拜托给您了，作为${falcon.sex}的朋友，如果您有任何需要的话，我也会竭力提供帮助的。`,
      );
      await flash.say_and_wait(`。`);
      await era.printAndWait(`既然如此。`);
    };
    f.title = title;
    return f;
  })(),
  next_beginning: (() => {
    const title = 'First！偶像的第一步';
    /**
     * 颤抖的双手 意象 梦中的故事 人物 交涉 细微的动作 脸庞 天空的变化 色彩 草原
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('训练场');
      era.printButton(`坚持住！最后一圈！`, 1);
      await era.input();
      await falcon.say_and_wait(`……哈啊啊啊！`);
      await era.printAndWait(
        `${falcon.name} 身体向前倾斜，努力克服着地面的阻力，脚下的大地传来沉闷的震动感。`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `咬紧了牙关，努力维持着速度的${falcon.name}冲过了沙地上鲜明的白线。`,
      );
      await you.say_and_wait(`辛苦了！`);
      await era.printAndWait(
        `${you.name} 将准备好的毛巾递给${falcon.name}，后者仔细将额头上的汗水擦去。`,
      );
      await era.printAndWait(
        `混杂着沙砾与汗水混合物紧紧吸附在了${falcon.sex}的体操服上。`,
      );
      await era.printAndWait(
        `在剧烈运动过后，为了避免突然坐下而对身体造成较大的危害，${you.name}与${falcon.name}绕着训练场不紧不慢的闲聊着。`,
      );
      await falcon.say_and_wait(`${callname}⭐，这次比上次进步了吗？`);
      await era.printAndWait(
        `${you.name} 掏出计时器，确认着上面的时间，然后看向了最后冲刺时留下的深深的痕迹，最后轻轻的点了头。得到肯定回答的${falcon.teen_sex_title}似乎忍耐不住激动的心情，走在了${callname}的前面。`,
      );
      await falcon.say_and_wait(
        `太好了⭐，这样就可以朝着${falcon.uma_sex_title}偶像的道路前行了！`,
      );
      await you.say_and_wait(`${falcon.uma_sex_title}偶像？`);
      await era.printAndWait(
        `${falcon.name}之前确实提到过${falcon.uma_sex_title}偶像的这个概念，不过，自己不太确定${falcon.uma_sex_title}偶像究竟是什么。`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}偶像是飞鹰子创建的概念，是亮闪闪的亲民偶像，与粉丝们一同成长并见证陪伴并给予对方爱与希望的存在！`,
      );
      await you.say_and_wait(`有点像是突出个人魅力的偶像艺人？`);
      await era.printAndWait(
        `${falcon.uma_sex_title}偶像的概念似乎与演艺界的新人偶像相似。`,
      );
      await you.say_and_wait(
        `作为${falcon.uma_sex_title}偶像的特殊之处又在哪里呢？`,
        true,
      );
      await era.printAndWait(`${you.name} 将矿泉水递给了${falcon.sex}。`);
      await you.say_and_wait(`先把这份概念记在记事本上吧。`, true);
      await falcon.say_and_wait(
        `我想让观众席上的大家一直看到飞鹰子闪耀的样子！`,
      );
      await era.printAndWait(`以领放为策略的跑法正符合${falcon.name}的要求。`);
      await you.say_and_wait(`所有跑法之中，最适合的恐怕还是领放。`, true);
      await you.say_and_wait(`不过这样确实有飞鹰子的风格呢。`);
      await era.printAndWait(
        `不论是赛场还是舞台，比谁都要闪耀的存在，${falcon.sex}选择了这个方向啊。`,
      );
      await falcon.say_and_wait(
        `毕竟飞鹰子是闪闪发光的${falcon.uma_sex_title}偶像呦⭐`,
      );
      await falcon.say_and_wait(
        `从过去到现在，直到之后的未来，都会一直闪耀下去的${falcon.uma_sex_title}偶像!`,
      );
      await you.say_and_wait(
        `${falcon.name}要到达的地方，到底会是什么样的呢，我也开始期待了。`,
      );
      await falcon.say_and_wait(`一定会是最棒的场景！`);
      await falcon.say_and_wait(
        `啊啊。光是想到${falcon.name}作为${falcon.uma_sex_title}偶像的场景，飞鹰子就有～说不尽的力气涌出来了！`,
      );
      await falcon.say_and_wait(`${callname}，接下来的目标是！`);
      await era.printAndWait(
        `看来${falcon.name}已经恢复了力气，${you.name} 有点担心对方是不是在逞强。`,
      );
      await you.say_and_wait(`不过这样确实有飞鹰子的风格呢。`, true);
      era.printButton(`那就重新开始计时`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}！飞鹰子已经准备好了！`);
      await you.say_and_wait(`预备！`);
      await era.printAndWait(
        `${falcon.name}的身体绷紧，眼神紧紧盯着前方的赛道。`,
      );
      await era.printAndWait(
        `随着发令枪的响起，扬起的尘土见证了沙地偶像踏出的第一步。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_9: (() => {
    const title = '接下来也请多多指教⭐';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(`2月正是一年中最寒冷的日子。`);
      await era.printAndWait(
        `城市的天空被厚厚的云层所笼罩，突如其来的大雪将城市刷成了纯白色的样式。`,
      );
      await era.printAndWait(
        `寒冷的天气总会让人有种紧迫感，所以虽是休息日，${you.name}还是早早的来到了训练室。`,
      );
      await era.printAndWait(
        `${falcon.name}的训练已经步入正轨，接下里的出道战应该不成问题。`,
      );
      await era.printAndWait(
        `不过令人在意的一点是，${falcon.name}的脚步很重。`,
      );
      await era.printAndWait(
        `拜此所赐，为${falcon.sex}在沙地上制定的速度与力量训练进展很快。`,
      );
      await era.printAndWait(
        `或许正是这点支撑着对方在长时间的${falcon.uma_sex_title}偶像活动仍然充满活力吧。`,
      );
      await minoru.say_and_wait(`哎呀，今天来这么早吗？`);
      await era.printAndWait(
        `思考的时间总是过得很快，手纲小姐就像是理所当然的出现在了特雷森校门，带着一丝微笑看着${you.name}。`,
      );
      era.printButton(
        `只是希望为了可爱的${falcon.uma_sex_title}们能够早日启程才早起前往的特雷森。说起来，今天的手纲小姐看起来也很美丽。`,
        1,
      );
      await era.input();
      await minoru.say_and_wait(`呵呵，真是的，就算夸奖我也不会有什么好处哦？`);
      await era.printAndWait(
        `轻笑着的手纲小姐露出了不会动摇的神情。某种意义上${falcon.sex}更像是理想的成年人。`,
      );
      await era.printAndWait(`互相鞠躬告辞后，名为礼节的仪式就此结束。`);
      await era.printAndWait(
        `当${you.name}抖落肩膀上飘下的雪，将空调调至30度时——`,
      );
      await falcon.say_and_wait(`打扰了⭐`);
      await era.printAndWait(`${falcon.name}猛地一下推开了训练室的大门。`);
      era.printButton(`早上好！`, 1);
      await era.input();
      await era.printAndWait(
        `忽视门口传来的巨响，${falcon.teen_sex_title}口中呼出的白雾很快消散在了冰冷的空气之中，而${falcon.name}的热情不减。`,
      );
      await falcon.say_and_wait(`${callname}早上好！今天看起来也很精神呢！`);
      await era.printAndWait(`随后便收到了${falcon.name}元气满满的回应。`);
      await era.printAndWait(
        `顺着${falcon.name}的笑容向下看去，${you.name}的视线集中在了${falcon.sex}提着的小桶与扫把上。`,
      );
      await falcon.say_and_wait(
        `因为平时受到很多关照的缘故，所以飞鹰子今天打算做义工！`,
      );
      await era.printAndWait(
        `${falcon.name}摇晃着手中的小桶，如果里面装满了清水的话，一定会就此洒出去吧。`,
      );
      await you.say_and_wait(`具体来说是指？`);
      await falcon.say_and_wait(
        `嗯——趁着大家还没起来之前，将高架桥下飘到草地上的垃圾分类后扔到垃圾场⭐。`,
      );
      await era.printAndWait(`${falcon.uma_sex_title}偶像到底是什么（哲学）。`);
      await falcon.say_and_wait(`说起来，${callname}打算一起来吗？`);
      era.printButton(`我也想出一份力`, 1);
      era.printButton(`虽然很想去，但是这边还有工作要做`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`那真是太好了！`);
        await falcon.say_and_wait(`事不宜迟现在就出发吧！`);
        await era.printAndWait(
          `得到${you.name}的同意后，${falcon.name}的笑容更灿烂了。`,
        );
        era.drawLine();
        await falcon.say_and_wait(`不会让你逃走的呦⭐`);
        await era.printAndWait(
          `${falcon.name}将最后的一点垃圾集中起来，放进了装好的黑色塑料袋中。`,
        );
        await falcon.say_and_wait(`接下来只要把这些垃圾全部扔掉就结束了！`);
        await falcon.say_and_wait(`${callname}辛苦了！`);
        await era.printAndWait(
          `随后${falcon.sex}便小心翼翼的将黑色塑料袋打上了漂亮的蝴蝶结。`,
        );
        await era.printAndWait(
          `虽说平时有宣传过要保护环境，但直到现在亲手拾起垃圾时${you.name}才对此有了更深刻的理解。`,
        );
        await era.printAndWait(
          `不过对于飞鹰子来说，是以自己的方式回应一直支持自己的粉丝们吧。`,
        );
        await era.printAndWait(
          `……在这种地方意外的坚持着${falcon.teen_sex_title}感吗？`,
        );
        await falcon.say_and_wait(
          `如果没有${callname}的话，要在演出开始之前处理完对飞鹰子还是有些困难呢……`,
        );
        await falcon.say_and_wait(`飞鹰子不知该如何感谢${callname}。`);
        await era.printAndWait(
          `大部分的垃圾都是${falcon.name}处理的，帮了大忙只是一种谦辞罢了。`,
        );
        era.print(`该怎么回复好呢？`);
        era.printButton(`可以让我提前欣赏到飞鹰子的演出吗？`, 1);
        era.printButton(`接下来的期中考试全部及格！`, 2);
        if ((await era.input()) === 1) {
          await falcon.say_and_wait(
            `咦？这样就好了吗？既然是${callname}的要求的话。`,
          );
          await you.say_and_wait(`是飞鹰子的粉丝一号的要求！`);
          await falcon.say_and_wait(`欸？粉丝一号吗……飞鹰子想到了！`);
          await era.printAndWait(
            `似乎是因为粉丝一号这个称呼触及了飞鹰子的灵感，${falcon.name}的尾巴刷的一下竖了起来。`,
          );
          await falcon.say_and_wait(`嗯……这样的话……不对……这样更好。`);
          await era.printAndWait(
            `${falcon.name}将黑色塑料袋在舞台后面（舞台仅仅只是高架桥下5平方米的空地），随后从校服口袋中取出了麦克风。`,
          );
          await falcon.say_and_wait(
            `接下来将要出场的是飞鹰子刚刚想出来的歌曲♪是应粉丝一号${you.adult_sex_title}的要求所作的beta版歌曲♪`,
          );
          await falcon.say_and_wait(`那么，三、二、一！`);
          await era.printAndWait(
            `尚未消散的白雾，泛白的天空，以及小小的空地所组成的演唱会现在开始。`,
          );
        } else {
          await falcon.say_and_wait(`咦咦咦？居然是这个要求。`);
          await you.say_and_wait(
            `有什么不会的地方我也会辅导你的，所以飞鹰子不要想着逃跑这种事情了。`,
          );
          await era.printAndWait(`${falcon.name}稍微有些烦恼的样子。`);
          await falcon.say_and_wait(`不过飞鹰子会努力的！飞鹰子！加油！`);
          await era.printAndWait(
            `元气满满的声音惊吓到了附近公园的鸟群，它们绕着树木盘旋良久才回到巢中。`,
          );
          await era.printAndWait(
            `在回到特雷森的路上，${falcon.name}的心情似乎比之前更好。`,
          );
          await falcon.say_and_wait(`说起来，${callname}。`);
          await falcon.say_and_wait(`${callname}也有正在关注的偶像吗？`);
          await era.printAndWait(
            `虽然不知为何${falcon.name}突然提出了这个问题。`,
          );
          await falcon.say_and_wait(`啊，不用回答也行。不对，还是不要回答了。`);
          await era.printAndWait(
            `正当${you.name}准备回答的时候，${falcon.name}有些窘迫不安。`,
          );
          await era.printAndWait(
            `${you.name}望向了天空，靛蓝色的天空正逐渐被地平线上的金色所取代，不久后喧嚣声又将响起。`,
          );
        }
      } else {
        await falcon.say_and_wait(`${callname}果然很辛苦呢。`);
        await falcon.say_and_wait(
          `毕竟是飞鹰子自作主张的要求，${callname}没关系的！`,
        );
        await era.printAndWait(
          `${falcon.name}露出了略微遗憾的表情，但很快恢复了往日的神情。`,
        );
        await you.say_and_wait(`路上小心！`);
        await falcon.say_and_wait(
          `嗯！飞鹰子会连着${callname}的那份一起加油的！`,
        );
        await era.printAndWait(
          `${you.name}看到${falcon.name}的耳朵动了动后轻轻关上了训练室的大门。`,
        );
        await era.printAndWait(
          `在飞鹰子的努力之下，在河边漂浮的废弃物全部都消失了。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_18: (() => {
    const title = '于是大脑空空的醒目飞鹰只剩下了一个念头';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`5月中旬的某一天。`);
      await era.printAndWait(
        `训练计划稳步推进，得益于${falcon.name}一直以来不遗余力的宣传，渐渐地河边的街头演出已经有几名忠实粉丝了。`,
      );
      await era.printAndWait(
        `现实的情况比预想之中更加乐观，或许有些答案只有在实践过后才能得知。`,
      );
      await era.printAndWait(
        `满足的吐出叹息声后，${you.name}才意识到背后已经汗流浃背。`,
      );
      await era.printAndWait(`春夏交替的间隔期，明显比去年更热了。`);
      await you.say_and_wait(
        `距离出道战也不远了，接下来就是检验训练成果的时候了！`,
      );
      await falcon.say_and_wait(`${callname}不好了！`);
      await era.printAndWait(
        `这么想着的${you.name}，突然被闯入训练室的身影吓了一跳。`,
      );
      await you.say_and_wait(`又是因为测试不及格吗？`, true);
      await era.printAndWait(`虽然是意料之外但也不是没有预想。`);
      await falcon.say_and_wait(
        `虽然这件事也很重要，但是飞鹰子遇到的不是这个！`,
      );
      await era.printAndWait(
        `${you.name}才注意到${falcon.teen_sex_title}大口的喘着粗气，汗珠从额头流向脖颈。`,
      );
      await era.printAndWait(`对方是一路跑过来的。`);
      await you.say_and_wait(`发生什么了？`);
      await falcon.say_and_wait(
        `哈啊，哈啊……嗯，飞鹰子为了向特雷森周围的大家推广${falcon.uma_sex_title}偶像的概念，除了派发自己精心准备的海报之外，还额外附赠了一些小礼品。`,
      );
      await falcon.say_and_wait(
        `但是一直以来以非常便宜的价格卖给飞鹰子的那家杂货店突然搬走了，而新找的其他店铺的价格却非常高昂。`,
      );
      await falcon.say_and_wait(
        `如果只是这样的话飞鹰子还能坚持下去。不过最近去的那家杂货店因为原材料价格上涨，所以价格也要抬高了。`,
      );
      await falcon.say_and_wait(`再这样下去，飞鹰子要陷入大危机了！`);
      await era.printAndWait(
        `大概明白了，${falcon.name}因为稳定的供货渠道突然消失，而陷入了慌乱。`,
      );
      await era.printAndWait(`短暂思考过后，${you.name}决定\n`);
      era.printButton(`试着考虑一下其他店铺？`, 1);
      era.printButton(`最重要是飞鹰子作为偶像的心！`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`如果考虑到${falcon.name}积攒下来的人气。`);
        await you.say_and_wait(
          `作为${falcon.uma_sex_title}偶像向商业街的店铺开展活动筹集经费怎么样？`,
        );
        await you.say_and_wait(
          `飞鹰子很擅长将气氛炒热，就这样一边为店铺吸引顾客，一边脚踏实地积累人气。`,
        );
        await you.say_and_wait(`利用从店铺积累下来的资金，撑过这段时间吧！`);
        await falcon.say_and_wait(`但是应该找谁呢？`);
        await era.printAndWait(`如果考虑到${falcon.name}积攒下来的人气。`);
        await you.say_and_wait(`我也会在旁边协助飞鹰子的。`);
        await falcon.say_and_wait(`呼～得救了……太好了。`);
        await era.printAndWait(
          `${falcon.name}兴奋的拉着${you.name}的手转起了圈。`,
        );
        await era.printAndWait(`说起来——`);
        await era.printAndWait(
          `对粉丝一视同仁的飞鹰子与作为担当${falcon.uma_sex_title}的${falcon.name}。`,
        );
        await era.printAndWait(`对${falcon.name}来说，那个更加重要呢？`);
        await era.printAndWait(
          `在这份天旋地转的充裕中，${you.name}懒洋洋的想起了这个问题。`,
        );
        await you.say_and_wait(`……先处理眼前的事情吧。`, true);
        await era.printAndWait(
          `之后${you.name}从在不同店家打工的${falcon.uma_sex_title}那里得知了正在苦恼缺少宣传的店主。`,
        );
        await era.printAndWait(
          `最终以联动的方式成功吸引了一大批参观的游客，除去应得的酬劳与奖金外，${falcon.name}还在马推上收获了新的粉丝。`,
        );
      } else {
        await you.say_and_wait(`最重要的是飞鹰子作为偶像的那颗心！`);
        await falcon.say_and_wait(`诶？`);
        await you.say_and_wait(
          `与重视外表与排场的模特相比，青涩而又可爱，比模特更加亲近粉丝才是${falcon.uma_sex_title}偶像的卖点！`,
        );
        await era.printAndWait(
          `越说越激动的${you.name}猛地拍了一下桌子，随后被震得生疼。`,
        );
        await falcon.say_and_wait(
          `诶？${callname}的意思是飞鹰子太过使用宣传手段而忽视了作为${falcon.uma_sex_title}偶像的核心吗？`,
        );
        await you.say_and_wait(
          `没错！让大家看看作为${falcon.uma_sex_title}偶像而活跃的${falcon.name}吧！`,
        );
        await falcon.say_and_wait(
          `我知道了！飞鹰子会朝着${falcon.uma_sex_title}偶像的方向努力的！`,
        );
        await era.printAndWait(`说起来——`);
        await era.printAndWait(
          `对粉丝一视同仁的飞鹰子与作为担当${falcon.uma_sex_title}的${falcon.name}。`,
        );
        await era.printAndWait(`对${falcon.name}来说，那个更加重要呢？`);
        await you.say_and_wait(
          `虽然有些不甘心，不过对于飞鹰子来说，恐怕`,
          true,
        );
        await era.printAndWait(
          `很快这个想法便在${falcon.name}兴奋的提出的诸多方案中被淹没了。`,
        );
        await era.printAndWait(
          `在习得了${falcon.uma_sex_title}偶像之心后的${falcon.name}，凭借其特有的敏感且细腻，吸引了大量的粉丝。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = '薰衣草';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`河边草地。\n`);
      await falcon.say_and_wait(`一直支持着飞鹰子的大家！飞鹰子现在终于`);
      await era.printAndWait(
        `按照计划踏踏实实进行训练的${falcon.name}现在已经颇具成效。`,
      );
      await era.printAndWait(`接下来的出道战，${falcon.name}已经准备万全了。`);
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `就像往常一样陪伴着${falcon.name}走在回到特雷森的道路时，${falcon.name}突然望着${you.name}。`,
      );
      await era.printAndWait(`临近比赛，会有所忧虑也是在所难免的吧。`);
      await era.printAndWait(`这也是正常的事情。`);
      await falcon.say_and_wait(`说起来，这是飞鹰子第一次亮相呢。`);
      await era.printAndWait(
        `${falcon.name}正是以${falcon.uma_sex_title}偶像为目标直直的出发。`,
      );
      await falcon.say_and_wait(
        `虽然在踏上${falcon.uma_sex_title}偶像这条道路时兴奋得一晚没睡，但随着撕下来的日历一天天的过去，飞鹰子现在也稍微有些……`,
      );
      era.printButton(`因为是出道站所以害怕吗？`, 1);
      await era.input();
      await falcon.say_and_wait(`不对，只是心情……稍微有些复杂呢。`);
      await era.printAndWait(
        `就跟追着自己的尾巴转着圈圈的小猫不小心撞到了纸箱子发出的啪嗒声。`,
      );
      era.printButton(`原来是这样。`, 1);
      await era.input();
      await falcon.say_and_wait(`不过，飞鹰子的心情却是最高峰呢！`);
      await falcon.say_and_wait(
        `踏上偶像之路的初次亮相，就像是小说中的主人公一样呢！`,
      );
      await falcon.say_and_wait(`接下来就是飞鹰子闪耀的时刻了！`);
      await era.printAndWait(`${falcon.name}向${you.name}露出了微笑。`);
      await falcon.say_and_wait(
        `……${callname}接下来也会在飞鹰子的身边一直支持飞鹰子吧？`,
      );
      era.printButton(`就是这样。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `唔——${callname}对其他${falcon.uma_sex_title}也会这么说吗？`,
      );
      await era.printAndWait(`${you.name}假装没听到${falcon.name}的自言自语。`);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '首次试镜！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`河边草地\n`);
      await falcon.say_and_wait(
        `目标是！Top idol的${falcon.uma_sex_title}偶像——${falcon.name}，现在要正式出道了⭐`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子终于要出道了吗！`);
      await falcon.say_and_wait(
        `没错！为了这一天飞鹰子一直在努力！虽然飞鹰子也想让大家稍微忍耐一下……`,
      );
      await falcon.say_and_wait(
        `因为飞鹰子也和大家一样激动到直冲云霄的地步了♪`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `就趁着这种气势一直向前冲吧！`,
      );
      await falcon.say_and_wait(
        `飞鹰子会从比赛开始一直闪耀到演出结束的呦⭐……好兴奋啊！真是不可思议的感觉，心跳不停的dokidoki回应着我……`,
      );
      await falcon.say_and_wait(`约好了哟，各位请在观众席上观看飞鹰子的演出⭐`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(`\n准备室\n`);
      await falcon.say_and_wait(`缎带……ok！背后的号码牌……无误！`);
      await era.printAndWait(
        `站在等身镜前的${falcon.name}反复检查着自己的模样。`,
      );
      await falcon.say_and_wait(
        `为了一直支持自己的大家……飞鹰子一定会赢的！`,
        true,
      );
      await falcon.say_and_wait(`飞鹰子！加油！`);
      await era.printAndWait(`${falcon.name}将握紧了拳头的右手高高举起。`);
      era.printButton(`把赛场想象成舞台就好了`, 1);
      await era.input();
      await era.printAndWait(
        `在一旁等待着的${you.name} 看着初次参与出道战的${falcon.name}。`,
      );
      await you.say_and_wait(`我相信飞鹰子一定会胜利！`);
      await falcon.say_and_wait(`${callname}也是！`);
      await era.printAndWait(
        `${you.name} 感受到${falcon.name}双手的微微颤动。`,
      );
      await falcon.say_and_wait(
        `粉丝们的大家会坐在哪里等待着飞鹰子呢♪闪耀着的飞鹰子一定会把胜利带给大家⭐`,
      );
      await era.printAndWait(
        `不是安慰，而是${falcon.name}对这段时间训练成果的确信。`,
      );
      await falcon.say_and_wait(
        `${callname}就在观众席上好好看着飞鹰子精彩的表现吧♪`,
      );
      await falcon.say_and_wait(`……而且，飞鹰子还有一个不能输的理由！`, true);
      // 与训练员无关，仅仅只是无法承担恐惧的结果
      await falcon.say_and_wait(
        `消沉的想法就此打住！飞鹰子的顶级偶像之路就从这里起步！`,
        true,
      );
      await falcon.say_and_wait(
        `闪耀的${falcon.uma_sex_title}偶像——${falcon.name}！接下来会让观众席上所有人眼睛不眨的注视着飞鹰子！`,
      );
      await era.printAndWait(`${falcon.name}走向了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '出道战后・冉冉升起的新星';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await you.say_as_passer_by_and_wait(`解说`, `胜利者是——${falcon.name}！`);
      await era.printAndWait(
        `正如${falcon.name}向粉丝们所宣布的那样，从比赛的开始便牢牢的吸引了所有观众的目光。`,
      );
      await era.printAndWait(
        `就这么保持着与其他${falcon.uma_sex_title}之间的距离一直到最后。`,
      );
      await falcon.say_and_wait(
        `${callname}！${callname}！看到飞鹰子在赛场上的表现了吗？`,
      );
      era.printButton(`不小心看入迷了！`, 1);
      await era.input();
      await falcon.say_and_wait(`真的吗？太好了⭐`);
      await era.printAndWait(
        `从赛场上下来的${falcon.name}稍作休息后又重新恢复了活力。`,
      );
      await era.printAndWait(
        `帮着飞鹰子按摩腿部已经发麻的肌肉，${you.name}的脸上抑制不住的笑容来。`,
      );
      await falcon.say_and_wait(
        `——就这样飞鹰子快要坚持不住的时候，听到了来自观众席上的应援声，然后飞鹰子不知从哪里来的力气，就这么一口气冲到了底！`,
      );
      await era.printAndWait(
        `从赛场上下来的${falcon.name}，打算趁演出尚未开始的空隙向观众席的各位推销自己每日进行的突击演出，但最后还是被${you.name}给劝说下来了。`,
      );
      await falcon.say_and_wait(`好好期待飞鹰子接下来的表演吧！`);
      await era.printAndWait(
        `最后的按摩结束后，${falcon.name}为了确认新的感觉而踮起了脚尖。`,
      );
      era.printButton(`一定要让他们看见泥地偶像的气势哦！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `就这样将所有观众的心在飞鹰子的主场中全～部夺过来♪因为飞鹰子是世界上最闪耀的${falcon.uma_sex_title}偶像呦⭐`,
      );
      era.drawLine({ content: '胜者舞台' });
      await falcon.say_and_wait(`这就是胜者舞台吗？`, true);
      await era.printAndWait(
        `跟随着工作人员的指引，按照之前确定好的队形站在升降机上。`,
      );
      await era.printAndWait(
        `在排列队形时还会有稀稀疏疏的声音，到了站定时能听到的却只剩下微弱的呼吸声了。`,
      );
      await falcon.say_and_wait(`${falcon.name}的梦想将从这里启程！`, true);
      await era.printAndWait(
        `一阵强烈的震动传来，随后${falcon.name}感受到了一股向下的力量传来，接下来就是正式演出了。`,
      );
      await era.printAndWait(
        `虽然在心底告诉自己没有什么可怕的，但额头还有手心还是被汗液打湿。`,
      );
      await era.printAndWait(
        `探照灯已经按照名次顺序点亮了舞台，时间也因等待着${falcon.teen_sex_title}们而渐渐停止。`,
      );
      await era.printAndWait(
        `朝思暮想的舞台就在眼前，排练过的舞步在脑海中闪过无数次，因为紧张而大脑几近空白，但凝滞的时间已经缓缓转动，现在就是前进的时刻了。`,
      );
      await era.printAndWait(`于是${falcon.name}完成了自己的第一次胜者舞台。`);
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = '希望永远持续下去的日常';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(
        `${callname}，飞鹰子最近找到了一个适合演出的场所，可以和飞鹰子一起去看看吗？`,
      );
      await era.printAndWait(
        `${you.name}从文件夹中抬起头，与${falcon.name}对上了视线。`,
      );
      await you.say_and_wait(`呜啊。`);
      await era.printAndWait(
        `猛地贴近${you.name}的${falcon.name}露出了恶作剧成功的笑容。`,
      );
      await you.say_and_wait(`好近！`, true);
      await era.printAndWait(
        `仔细想想的话，${falcon.sex}也正处于多愁善感的时间段，会做出这种事也很正常。`,
      );
      await you.say_and_wait(
        `虽然也不是否定飞鹰子的努力，不过最近偶像活动会不会有些太频繁了？`,
      );
      await you.say_and_wait(
        `虽然向着理想的未来前进是正确的事，但考试挂科会拖累自己前进的步伐。`,
      );
      await falcon.say_and_wait(
        `呀！……这个……飞鹰子已经在反省中了，所以偶像活动也有好好考虑过时间和地点啦。`,
      );
      await era.printAndWait(
        `${falcon.name}似乎有些心不在焉的样子，在${you.name}猛地咳嗽一声才慌忙的做出解释。`,
      );
      await you.say_and_wait(`说谎的人眼睛不敢对视他人。`);
      await era.printAndWait(
        `听完之后慌忙正视${you.name}的双眼的${falcon.name}使${you.name}确信了一件事。`,
      );
      await you.say_and_wait(
        `我就知道……如果飞鹰子答应我在接下来的期中好好复习的话，我也答应你的请求。`,
      );
      await falcon.say_and_wait(`诶诶诶？${callname}是怎么知道的。`);
      await era.printAndWait(
        `${falcon.name}的表情不像是装的，但心中却隐隐感觉不安。`,
      );
      await you.say_and_wait(`这样下去，${falcon.name}真的没问题吗？`, true);
      await era.printAndWait(`接下来的计划可能要稍微修改了。`);
      await you.say_and_wait(`这段时间就稍微暂停一下突击演出吧？`);
      await falcon.say_and_wait(`不要！`);
      await era.printAndWait(`${falcon.name}的反应比想象中更加激烈。`);
      await falcon.say_and_wait(
        `不对!飞鹰子不是这个意思！飞鹰子会好好复习的！所以飞鹰子有必须举办的必要！`,
      );
      await era.printAndWait(
        `姑且得到了${falcon.name}的承诺，以飞鹰子对偶像活动的重视来看，至少不用担心接下来和班主任玩猫捉老鼠的游戏了。`,
      );
      await falcon.say_and_wait(
        `唔——飞鹰子想要说什么来着……对了！${callname}？`,
      );
      await era.printAndWait(`${falcon.name}直视着${you.name}的双眼。`);
      await falcon.say_and_wait(
        `飞鹰子有个地方想要和${callname}一起去看看。\n\n\n`,
      );
      await era.printAndWait(
        `被${falcon.name}牵着的${you.name}，来到了一处空旷的草地。`,
      );
      await era.printAndWait(
        `或许是周围没有高大建筑物的原因，总觉得天空比以往离得更近。`,
      );
      await era.printAndWait(
        `或许是快到夏天的缘故，空气也比以往更加潮湿。穿透云层的阳光在草地上形成了薄薄的一层气雾。`,
      );
      await falcon.say_and_wait(`${callname}觉得这里怎么样？`);
      await era.printAndWait(
        `${falcon.name}摇晃着${you.name}的手腕，用压抑不住的兴奋感询问着${you.name}的意见。`,
      );
      await era.printAndWait(
        `能在繁华的都市圈找到这样一处草地，恐怕${falcon.name}也是花了很多时间吧。`,
      );
      await era.printAndWait(
        `不，仔细想想的话，也许是因为这块地皮原本计划着作为大型商场来使用，但因为种种原因搁置了。随后便成了植物们的乐园。`,
      );
      await falcon.say_and_wait(
        `嗯——作为排练的一环，${callname}可以作为飞鹰子的助手吗？`,
      );
      await you.say_and_wait(`嗯？`);
      await era.printAndWait(
        `${falcon.name}的表情因为背对着太阳而看不清楚，但可以从不断抖动的耳朵判断，恐怕${falcon.sex}是下了很大的勇气才做出的决定。`,
      );
      await era.printAndWait(
        `找借口也要找个更好的吧，但${falcon.sex}这份心意说实话有些难办。`,
      );
      era.printButton(`接下来可以拜托你吗？飞鹰子？`, 1);
      await era.input();
      await falcon.say_and_wait(`如果${callname}不愿意的话也没办法……诶？`);
      await era.printAndWait(
        `似乎是没想到${you.name}会这么爽快同意的缘故，${falcon.name}先是愣了一下，然后轻轻牵起了${you.name}的手。`,
      );
      await falcon.say_and_wait(`非常荣幸⭐`);
      await era.printAndWait(
        `${falcon.sex}以一种奇妙的轻快声音回复着${you.name}。`,
      );
      await era.printAndWait(
        `天空比任何时候都要接近地面，融化在青草与泥土混合吐息之中，虽说一开始还在努力跟上${falcon.name}的节奏，但伴随着一次剧烈的碰撞，终于还是坚持不住的${you.name}一屁股坐在了草地之上。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `虽然从眩晕感中尚未恢复，但也着实感受到了${falcon.name}的兴奋与喜悦。`,
      );
      await falcon.say_and_wait(`抱歉，飞鹰子太兴奋了。`);
      await era.printAndWait(`被纤细的手臂小心翼翼的拉了起来。`);
      era.printButton(`原来偶像也不是这么遥不可及的存在嘛。`, 1);
      await era.input();
      await era.printAndWait(`噗通。`);
      await era.printAndWait(
        `带着自言自语的满足，如年幼时在草坪上全力奔跑后顺势躺在了草坪之上。`,
      );
      await era.printAndWait(`恍惚间又回到了无忧无虑的童年。`);
      await era.printAndWait(`剧烈搏动的心跳声有力地证明自己的存在。`);
      await era.printAndWait(`是啊，就这样保存着这份幸福感直到永远——`);
      await falcon.say_and_wait(`诶！${callname}剧烈运动后不能躺在草坪上！`);
      await era.printAndWait(`被纤细手臂传来的巨力拉了起来。`);
      await era.printAndWait(`唔，总觉得有些怀念呢。`);
      await era.printAndWait(`悲伤、怀念以及释然混杂的复杂情感涌上心头。`);
      await you.say_and_wait(`但是，现在的我也没什么不幸福的地方。`, true);
      await era.printAndWait(`如果这样的日常能永远持续下去的话。`);
      await era.printAndWait(
        `下意识的抬头看去，湛蓝的天空之中几朵积雨云无拘无束的飘动着。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_34: (() => {
    const title = '向着闪耀大舞台不停歇的前进！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`……呼⭐谢谢大家！`);
      await era.printAndWait(
        `即兴歌曲串烧结束后，此起彼伏的掌声汇聚成了对${falcon.name}的认可。`,
      );
      await era.printAndWait(
        `出道战结束后，在赛场以及舞台上闪闪发光的飞鹰子受到了大量的关注。`,
      );
      await era.printAndWait(
        `马推上「${falcon.uma_sex_title}偶像？！${falcon.name}⭐」受到大量讨论。`,
      );
      await era.printAndWait(
        `随之而来的河边演出视频也在马推上收获了大量粉丝。`,
      );
      await you.say_and_wait(`就这样继续前进！`, true);
      await era.printAndWait(
        `被闻讯而来的观众们团团围住，于河边草地认真演出的${falcon.name}一口气唱到了深夜。`,
      );
      await you.say_and_wait(`辛苦了！`);
      await era.printAndWait(
        `等到最后一名粉丝满意离开后，${you.name}走向了${falcon.name}。`,
      );
      await era.printAndWait(
        `因为预料到了这种情况，所以提前向宿舍长申请了外宿许可。`,
      );
      await era.printAndWait(
        `${you.name}将准备好的毛巾递给${falcon.sex}时，被汗水打湿的触感混杂着奇异的香味跳动着人的神经。`,
      );
      await falcon.say_and_wait(`非常感谢⭐`);
      await era.printAndWait(
        `${you.name}一边协助${falcon.name}将搭建的舞台重新收起，一边观察着${falcon.name}的神情。`,
      );
      await falcon.say_and_wait(`～～～♪`);
      await era.printAndWait(`心情不错的${falcon.name}还沉浸在演出之中。`);
      await you.say_and_wait(`辛苦了！接下来我来善后吧。`);
      await era.printAndWait(
        `正准备揽下所有收尾工作的${you.name}被尾巴扑打到了好几下。`,
      );
      await falcon.say_and_wait(
        `看到这么多支持着我的粉丝们，自己好像充满了动力一样，能一口气唱到第二天早上！`,
      );
      await falcon.say_and_wait(`即使是收拾的时候心脏也在扑通扑通的乱跳呢。`);
      await falcon.say_and_wait(`……而且。`);
      await era.printAndWait(
        `似乎沉浸在演出之中无法自拔的${falcon.name}，轻轻拉扯着衣袖的${falcon.name}期待着${you.name}的答复。`,
      );
      await you.say_and_wait(
        `飞鹰子的表演非常精彩，作为一直关注着飞鹰子的粉丝真的很感动！`,
      );
      await falcon.say_and_wait(`……真的吗！`);
      await era.printAndWait(`${falcon.name}紧紧握住了${you.name}的手。`);
      await falcon.say_and_wait(`太好了！`);
      await era.printAndWait(`如果不是突然其来的咕噜声，一切都显得这么美好。`);
      await falcon.say_and_wait(`……啊哈哈，还好粉丝们不在呢。`);
      await era.printAndWait(`略显尴尬的${falcon.name}不好意思的低下了头。`);
      await you.say_and_wait(`说起来的话，最近有家拉面店很火爆，去看看吧？`);
      await era.printAndWait(`${you.name}看了眼时间，现在快步走过去还来得及。`);
      await falcon.say_and_wait(`——好⭐那现在就赶过去吧！`);
      await era.printAndWait(
        `${falcon.name}拉住了${you.name}的手，${you.name}突然有种不祥的预感。`,
      );
      await falcon.say_and_wait(`——3，1！出发！`);
      era.drawLine({ content: '拉面店内' });
      await falcon.say_and_wait(
        `哇——啊啊！比想象中还美味呢，飞鹰子现在充满能量了⭐`,
      );
      await era.printAndWait(
        `${you.name}看着${falcon.name}在马推上发出的拉着${you.name}与精心摆放的两碗拉面的合照。`,
      );
      await you.say_and_wait(`真是厉害啊。`);
      await era.printAndWait(
        `不管是从摆放角度还是时机的捕捉，都是无可挑剔的程度。`,
      );
      await you.say_and_wait(`飞鹰子说不定有作为摄像师的才能？`);
      await era.printAndWait(
        `看着手指在手机触屏上飞快游走的${falcon.name}不时露出了笑容，突然觉得不应就此打扰对方。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}偶像究竟是什么？恐怕现在还没定论。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_40: (() => {
    const title = '夜来香';
    /**
     * 夜间停止光合作用排出废气 为了摆脱某种“我已经过时、即将被埋葬”的恐惧。大量追赶新潮头试图击退自己的生存恐惧。
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `为了在沙地赛上打响${falcon.name}的名气，你们开始计划接下来要参加的比赛。`,
      );
      await era.printAndWait(`深夜 训练员宿舍\n`);
      await era.printAndWait(
        `将在出道战收集的数据重新整理一遍后，将第二天的计划记录在备忘录。`,
      );
      await era.printAndWait(`正准备就这么休息时——`);
      await era.printAndWait(`——嗡嗡嗡`);
      await era.printAndWait(`手机传来了震动声`);
      await era.printAndWait(`已经是深夜了，这种时候要接电话吗？`);
      era.printButton(`接`, 1);
      era.printButton(`不接`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`既然是深夜发来的短信，没有不接的道理吧？`);
        await era.printAndWait(`这么想着${you.name}打开了手机。`);
        await falcon.say_and_wait(`晚上好！${callname}睡着了吗？`);
        await era.printAndWait(
          `注意到了时间已经是第二天的午夜了。因为困意袭来不由得打了一个哈欠。`,
        );
        await era.printAndWait(
          `${falcon.name}这么晚回复的原因是什么？如果有什么急事的话为什么不先去问自己的室友反而来找我？`,
        );
        await era.printAndWait(`还是说是因为这件事只有我才能解决吗？`);
        await era.printAndWait(
          `一边斟酌着说话的语气一边考虑着${falcon.name}的动机。`,
        );
        await era.printAndWait(`消息发出去没一会，手机再次传来了震动声。`);
        await falcon.say_and_wait(
          `虽然不是什么很大的事情，不过飞鹰子总觉得还是咨询${callname}比较好。`,
        );
        await era.printAndWait(
          `看上去${falcon.name}是把${you.name}视为了可靠的大人吗？`,
        );
        await era.printAndWait(`虽然有些荣幸但……一时间不知道该如何是好。`);
        era.printButton(`请告诉我发生了什么。`, 1);
        era.printButton(`有什么事明天再说`, 2);
        if ((await era.input()) === 1) {
          await you.say_and_wait(
            `如果飞鹰子有什么困难的话，无论何时何地都可以和我商量。`,
          );
          await era.printAndWait(
            `等待回复的时间比想象之中还要漫长，就在${you.name}即将睡着的前一刻，一口气接受的消息瞬间多了10+条。`,
          );
          await falcon.say_and_wait(
            `……如果是${callname}，偶尔说些丧气话也没关系吧？`,
          );
          await falcon.say_and_wait(
            `出道战结束后，飞鹰子作为新泥地偶像收获了不少的粉丝。`,
          );
          await falcon.say_and_wait(
            `拜此所赐每天早上的演唱会前来观看的人也满满聚集起来了。`,
          );
          await falcon.say_and_wait(
            `不过昨天的演唱会上，有几个熟悉的面孔不见了。`,
          );
          await falcon.say_and_wait(
            `在与粉丝之间的安可之上，也收到了「现实偶像不如虚拟偶像」的评价。`,
          );
          await falcon.say_and_wait(
            `虽然飞鹰子也不是那么在意这种事情啦⭐，不过飞鹰子还是觉得空落落的呢。`,
          );
          await era.printAndWait(
            `${you.name}几乎想象到了对方一遍又一遍的修改着语气，最后才勉强压抑住了心中的激动。`,
          );
          await era.printAndWait(
            `一边感慨着，现在的学生手机打字的速度比当年的我还要快，一边仔细的斟酌话语。`,
          );
          await era.printAndWait(
            `作为传统偶像而言比起虚拟偶像来说更有一种真实感存在。虽然虚拟偶像的出现引起了相当大的热潮。`,
          );
          await era.printAndWait(`但虚拟偶像依然存在劣势的方面。`);
          await era.printAndWait(
            `最切实的一点在于，${falcon.sex}不能作为选手站在舞台之上。`,
          );
          await era.printAndWait(
            `作为赛${falcon.uma_sex_title}的${falcon.name}可以在比赛之中的活跃表现，向还在观看比赛的观众们诉说自己的故事。`,
          );
          await era.printAndWait(
            `在科技日新月异的当下，这也足够为传统偶像留下一席之地了。`,
          );
          await era.printAndWait(
            `一边选择合适的论点，一边思考着传统偶像的优势。`,
          );
          await falcon.say_and_wait(
            `谢谢你！${callname}！接下来飞鹰子会在偶像的道路上更加努力的！`,
          );
          await era.printAndWait(`很快飞鹰子回复了一个高兴的表情包。`);
          await falcon.say_and_wait(`飞鹰子真期待能早日成为顶级偶像！`);
          await era.printAndWait(
            `第二天，活力满满的${falcon.name}为支持着${falcon.sex}的粉丝们献上了最美妙的演出。`,
          );
        }
      } else {
        await era.printAndWait(`都已经这么晚了，有什么事情明天再说吧。`);
        await era.printAndWait(
          `将手机调成免打扰后，${you.name}继续陷入了睡眠之中。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的感觉！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name} 与 ${falcon.name} 共同迎来了新的一年。`,
      );
      await era.printAndWait(`训练室\n`);
      await falcon.say_and_wait(`新年快乐！`);
      await era.printAndWait(
        `${you.name}推开训练室的大门，看见坐在围炉旁的${falcon.name}。`,
      );
      era.printButton(`飞鹰子新年快乐！`, 1);
      await era.input();
      await era.printAndWait(`回以问候后${you.name}也钻了进去。`);
      await era.printAndWait(
        `温暖的围炉驱散了外界的寒冷，畅想着新的一年会带来什么变化时，${you.name}迎上了${falcon.name}的双眼，后者对${you.name}笑了一下。`,
      );
      await you.say_and_wait(`跨年的新年演出怎么样？`);
      await era.printAndWait(
        `冰冷的双手慢慢恢复了触觉，${you.name}随手拿起一个橘子剥开。`,
      );
      await falcon.say_and_wait(
        `昨晚的表演比想象之中还要精彩，飞鹰子也学到了很多演唱和舞蹈方面的知识！`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}一边说着一边将过于兴奋不小心露出的尾巴重新塞回围炉之中。`,
      );
      await falcon.say_and_wait(`差点忘了！`);
      await era.printAndWait(`${falcon.name}在校服口袋中悉悉索索翻找着什么。`);
      await falcon.say_and_wait(
        `虽然在挑选礼物的时候苦恼着到底送什么才好，不过飞鹰子突然想到要送给在意的人自己亲手制作的礼物才是正解。`,
      );
      await falcon.say_and_wait(
        `${callname}，过去一年辛苦了，新的一年里也请多多指教！`,
      );
      await era.printAndWait(`飞鹰子带着笑容将贺卡递给了${you.name}。`);
      await you.say_and_wait(`那我就心怀感激的收下了。`);
      await era.printAndWait(
        `从围炉之中伸手接过带着围炉余温的贺卡，被${falcon.name}捏住的一角有小小的松软感。`,
      );
      await you.say_and_wait(`今年的计划是？`);
      await falcon.say_and_wait(
        `今年飞鹰子也要把可爱的模样带给作为粉丝们的大家！`,
      );
      await era.printAndWait(
        `话音未落，${falcon.name}便以极快的语速回答着${you.name}的问题。`,
      );
      await you.say_and_wait(`平时这么辛苦的飞鹰子现在的话多休息一会也好哦。`);
      await era.printAndWait(
        `${you.name}抚摸着${falcon.name}圆圆的脑袋，而${falcon.sex}没有反抗，露出了舒服的表情。`,
      );
      await falcon.say_and_wait(`欸？唔——飞鹰子已经不是小孩子了。`);
      await era.printAndWait(
        `虽然嘴上还在抗议着，但从围炉中再次脱逃的尾巴兴奋的上下摆动着。`,
      );
      await you.say_and_wait(`既然飞鹰子有些疲惫的话\n`);
      era.printButton(`偶像之道在于持之以恒的练习（全属性+10）`, 1);
      era.printButton(`去哪里玩一下吧？（技能点数+100）`, 2);
      era.printButton(`一起去看场电影？（体力+600）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `持之以恒的训练是迈向卓越的关键，对于${falcon.name}的偶像之路来说，一刻也不能松懈。`,
          );
          await you.say_and_wait(`今天练习一下速度吧。`);
          await era.printAndWait(`虽然舍不得围炉的温暖，但还是将腿从中抽出。`);
          await falcon.say_and_wait(`${callname}？`);
          await era.printAndWait(`不知何时${falcon.name}已经换好了运动服。`);
          await era.printAndWait(
            `${falcon.name} 比想象中更具活力实在令 ${you.name} 感到安心。`,
          );
          await era.printAndWait(
            `随后，${you.name} 与 ${falcon.name} 一同走向了训练场。`,
          );
          break;
        case 2:
          await falcon.say_and_wait(`嗯，去哪里比较好呢？`);
          await era.printAndWait(
            `${falcon.name}从口袋中拿出手机一边轻声念叨着一边快速划过各种界面。`,
          );
          await era.printAndWait(
            `与闪耀的飞鹰子相比，像这样专注思考的飞鹰子非常稀有。`,
          );
          await falcon.say_and_wait(`中午就去这家吧！`);
          await era.printAndWait(
            `${falcon.name} 将手机屏幕旋转过来后递给 ${you.name}，上面显示的是附近作为话题的人气奶茶店。`,
          );
          await you.say_and_wait(`不自觉露出笑容的飞鹰子比平时更加可爱哦。`);
          await era.printAndWait(`不知不觉间露出笑容的${falcon.name}。`);
          await falcon.say_and_wait(`啊……`);
          await era.printAndWait(`${falcon.name}突然脸红了。`);
          await falcon.say_and_wait(`心跳的好快……`, true);
          await falcon.say_and_wait(`咦咦咦？飞鹰子没有露出什么失格的表情吧？`);
          await era.printAndWait(
            `慌慌张张的控制住自己表情的飞鹰子手忙脚乱的将尾巴塞回围炉之中。`,
          );
          await falcon.say_and_wait(`${callname}！`);
          await era.printAndWait(
            `似乎是察觉到了 ${you.name} 的表情后，${falcon.name} 恢复了往日的神情。`,
          );
          await era.printAndWait(`不久后两人在沏茶店度过了愉快的一天。`);
          break;
        case 3:
          await falcon.say_and_wait(
            `适合${falcon.uma_sex_title}与训练员一起看的电影是——`,
          );
          await falcon.say_and_wait(`飞鹰子似乎也没有很好的主意呢？`);
          await era.printAndWait(`${you.name} 也没有什么好主意。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '恋心！飞鹰子的礼物！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`——早安⭐！`);
      await falcon.say_and_wait(`说起来今天是情人节呢——各位有收到巧克力吗？`);
      await falcon.say_and_wait(
        `没收到也没有关系，因为接下来将要登场的是飞鹰子亲手准备的巧克力——。`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await falcon.say_and_wait(`接下来也要一直支持着飞鹰子呦♪`);
      await you.say_as_passer_by_and_wait(
        `粉丝A`,
        `这是飞鹰子的本命巧克力吗？`,
      );
      await falcon.say_and_wait(
        `不对～因为飞鹰子要平等的爱着每一位粉丝，所以是从巧克力店里批量采购的巧克力。`,
      );
      await falcon.say_and_wait(
        `而且盒子里还有飞鹰子精心准备的明信片与签名⭐！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝B`,
        `能够参加飞鹰子的情人节纪念真是太好了！`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(`现场的气氛更加热烈了。`);
      await falcon.say_and_wait(`接下来也要多多支持飞鹰子哦♪`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `噢噢噢噢！！！`);
      await falcon.say_and_wait(
        `就是这样♪请观赏带着害羞与爱意的飞鹰子的表演吧！`,
      );
      await era.printAndWait(
        `在粉丝们的欢呼声中${falcon.name}的情人节纪念演唱会才刚刚拉开序幕。`,
      );
      await falcon.say_and_wait(`辛苦了！接下来也要一直支持飞鹰子哦？`);
      await era.printAndWait(
        `直到送走最后一名粉丝之后，在不远处等待着的${you.name}才走上前。`,
      );
      await falcon.say_and_wait(`飞鹰子的歌有传达到${callname}心中吗？`);
      era.printButton(`已经感受到了哦。`, 1);
      await era.input();
      await falcon.say_and_wait(`……说起来，还有要给${callname}的东西。`);
      await era.printAndWait(
        `${falcon.name}从不起眼的角落放置的纸箱里取出了一个包装精美的礼物盒。`,
      );
      await falcon.say_and_wait(
        `这是${falcon.name}作为担当${falcon.uma_sex_title}送给${callname}的本命……义理巧克力哦？`,
      );
      await era.printAndWait(
        `打开礼物盒后，看见了爱心形状的巧克力以及旁边的贺卡。`,
      );
      await falcon.say_and_wait(`今后也要一直支持飞鹰子哦！`);
      await era.printAndWait(`${falcon.name}露出了甜美的笑容。`);
      era.printButton(`收拾好演出场地后，一起去吃饭吧？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `我听说附近有家对训练员与${falcon.uma_sex_title}的组合有优惠的店铺，一起去看看吧！`,
      );
      await era.printAndWait(`${falcon.name}拉起了${you.name}的手。`);
      await falcon.say_and_wait(
        `是粉丝们推荐飞鹰子去尝尝看的，不知道那边的店铺也会有飞鹰子的粉丝吗？好期待啊。`,
      );
      era.printButton(`一定会的。`, 1);
      await era.input();
      await falcon.say_and_wait(`说起来，飞鹰子……不，飞鹰子什么都没说哦⭐。`);
      await era.printAndWait(`两人在附近的人气餐厅度过了情人节。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '目标是皋月赏！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} suzuka 无声铃鹿
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, suzuka, you, callname) => {
      await era.printAndWait(
        `覆盖在枝条上的厚厚积雪终于化开，静谧的特雷森再次被啼鸣声造访。`,
      );
      await era.printAndWait(
        `正当${you.name}在温暖的训练室思考着接下来的赛事时。`,
      );
      await falcon.say_and_wait(`${callname} 我回来了！`);
      await suzuka.say_and_wait(`打扰了。`);
      await era.printAndWait(`训练室迎来了两位访客。`);
      await you.say_and_wait(`今天的飞鹰子依然活力四射呢。`);
      await falcon.say_and_wait(
        `嗯！毕竟活力与可爱正是${falcon.uma_sex_title}偶像的不同之处呢。`,
      );
      await era.printAndWait(
        `${falcon.name}在训练室转了一圈后一头扎进了沙发里，无声铃鹿安静的坐在沙发边上，双眼不断的打量着训练室。`,
      );
      await falcon.say_and_wait(`在沙发上躺着真是舒服啊。`);
      await you.say_and_wait(`今天的偶像活动是？`);
      await era.printAndWait(
        `${you.name}取出两个塑料杯，泡上了便利店中购买的红茶。`,
      );
      await falcon.say_and_wait(`嗯——飞鹰子希望能参加皋月赏。`);
      await you.say_and_wait(`什么？`);
      await suzuka.say_and_wait(`欸？`);
      await era.printAndWait(`一旁的无声铃鹿轻轻遮住了嘴。`);
      await falcon.say_and_wait(`飞鹰子希望能参加皋月赏！`);
      await era.printAndWait(
        `${falcon.name}以相当具有气势的声音向训练室里的人们宣布。`,
      );
      await suzuka.say_and_wait(`原来飞鹰同学把我拉过来是为了这件事吗？`);
      await suzuka.say_and_wait(
        `不过我记得飞鹰同学在泥地赛道活跃，为什么想要参加草地呢？`,
      );
      await era.printAndWait(
        `${you.name}也带着同样的问题看向了${falcon.sex}。`,
      );
      await falcon.say_and_wait(
        `因为飞鹰子一直都活跃在沙地赛上，所以沙地赛的粉丝们都认识飞鹰子了⭐`,
      );
      await falcon.say_and_wait(
        `不过草地那边的观众好像都不认识飞鹰子，所以飞鹰子希望借着参加草地的机会，让关注草地赛事的粉丝们也开始支持飞鹰子！`,
      );
      era.printButton(`既然这样的话，我也支持。`, 1);
      await era.input();
      await era.printAndWait(
        `如果能让在草地方面的观众也能认识这么可爱的${falcon.uma_sex_title}，对飞鹰子的偶像之路也是一大助力。`,
      );
      await suzuka.say_and_wait(
        `原来如此，所以希望我能传授一些在草地方面的技巧吗？`,
      );
      await falcon.say_and_wait(`所以请把『异次元的逃亡者』借给我吧！`);
      await suzuka.say_and_wait(`……欸？`);
      await falcon.say_and_wait(
        `干脆飞鹰子在跑皋月赏的时候就自称异次元的逃亡者，从小铃鹿这边获取力量！`,
      );
      await era.printAndWait(
        `不只是无声铃鹿，${you.name}也对${falcon.name}的脱线有些头疼。`,
      );
      await suzuka.say_and_wait(`飞鹰同学，请不要顶着别人的称号做奇怪的事情！`);
      await era.printAndWait(`无声铃鹿生气了。\n`);
      era.printButton(`抱歉，之后我会对飞鹰子好好说教的。`, 1);
      era.printButton(`可以传授一些有关草地的技巧吗？`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`无论什么理由顶着别人的名头都不会是什么好事。`);
        await era.printAndWait(`在这样下去的话可能会引发不必要的纷争。`);
        await suzuka.say_and_wait(`不，您多虑了。`);
        await suzuka.say_and_wait(
          `飞鹰同学似乎是充满活力又很跳脱的类型，不过飞鹰同学不是会拿别人的声誉作为坏事的人。`,
        );
        await suzuka.say_and_wait(
          `虽然在逃马姐妹的活动中要跟上飞鹰同学的节奏还是很辛苦的事情呢。`,
        );
        await suzuka.say_and_wait(
          `但是还请以自己的身份走完道路，不是自己真心认同的称号是不会带来理想的结局。`,
        );
        await falcon.say_and_wait(`咦咦？小铃鹿生气起来好可怕！`);
        await you.say_and_wait(`原来如此。`);
        await era.printAndWait(`${you.name}又重新坐在座位上。`);
        await suzuka.say_and_wait(
          `虽然不能借给飞鹰同学我的称号，不过草地方面的技巧我会好好告诉你的。`,
        );
        await era.printAndWait(
          `之后的三小时里，你们通过无声铃鹿了解到了有关草地的知识。`,
        );
      } else {
        await suzuka.say_and_wait(`如果只是这样的话，当然可以。`);
        await era.printAndWait(`无声铃鹿似乎不在生气了？`);
        await suzuka.say_and_wait(
          `不是自己真心认同的称号是不会带来理想的结局的，还请脱线的飞鹰同学牢记这点。`,
        );
        await suzuka.say_and_wait(`还有\n`);
        await suzuka.say_and_wait(
          `不过前方的风景我是不会让给其他人的！这点还请飞鹰同学记在心底。`,
        );
        await falcon.say_and_wait(`咦咦？小铃鹿生气起来好可怕！`);
        await era.printAndWait(`……原来这个才是重点吗？`);
        await you.say_and_wait(`接下来${falcon.name}似乎要很辛苦了。`, true);
        await era.printAndWait(
          `${falcon.name}带着求助的目光看向了${you.name}。`,
        );
        await you.say_and_wait(`（移开视线）`, true);
        era.drawLine();
        await suzuka.say_and_wait(
          `已经训练了8个小时，飞鹰同学还这么有活力吗？`,
        );
        await falcon.say_and_wait(`对于耐久演出来说，现在还没有到极限哦！`);
        await suzuka.say_and_wait(`既然这样的话，那就继续吧。`);
        await era.printAndWait(`之后的草地特训一直持续到了宵禁才结束。`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_15: (() => {
    const title = '目标！皋月赏！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`训练场\n`);
      await falcon.say_and_wait(`哈啊，哈啊……`);
      await you.say_and_wait(`辛苦了。`);
      await falcon.say_and_wait(
        `${callname}，飞鹰子比上次练习的速度更快了吗？`,
      );
      await era.printAndWait(`${you.name} 看了一眼秒表。`);
      await you.say_and_wait(`……距离获胜还有一段距离。`);
      await era.printAndWait(
        `虽然有无声铃鹿所教导的跑法技巧，但对${falcon.name}适应了泥地赛道的${falcon.name}还是很辛苦的事情。`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `${falcon.name}似乎从${you.name}的表情之中看出了什么，一边喝着水一边观察着${you.name}的反应。`,
      );
      await you.say_and_wait(`虽然有些困难，不过多练习一下的话就能克服了。`);
      await era.printAndWait(
        `${you.name}将文件夹放下，然后认真的看着${falcon.sex}。`,
      );
      await falcon.say_and_wait(`${callname}这样子看起来很可疑呢?`);
      await falcon.say_and_wait(`难道是已经有喜欢的对象了吗?`);
      await era.printAndWait(
        `虽然不知道飞鹰子为什么得出了这个结论，不过却莫名的令人安心。`,
      );
      await you.say_and_wait(`只是有些疲惫了，稍微休息一下就好。`);
      await falcon.say_and_wait(`……真的是这样吗？`);
      await era.printAndWait(
        `似乎无法撇开这种嫌疑了，于是看着越来越疑惑的${falcon.name}的${you.name}寻找着新的话题。`,
      );
      await you.say_and_wait(
        `比起这个的话，飞鹰子不是还要将制作新曲的决定告诉一直支持着自己的大家吗？`,
      );
      await you.say_and_wait(`再不快点的话，大家都要等急了。`);
      await falcon.say_and_wait(`欸?那得抓紧时间了才行了呢。`);
      await era.printAndWait(
        `虽然嘴上这么说着但${falcon.sex}却没有丝毫动作，只有尾巴在啪嗒啪嗒的敲打着座位。`,
      );
      await you.say_and_wait(`再不快点的话，大家都要等急了。`);
      await falcon.say_and_wait(`知道了～`);
      await era.printAndWait(
        `以为是没有听清重复了一遍，${falcon.name}还是坐在那里。`,
      );
      await era.printAndWait(`思考着该说些什么好时，${falcon.name}站了起来。`);
      await falcon.say_and_wait(`那我出发了～`);
      await falcon.say_and_wait(`真遗憾。`, true);
      await era.printAndWait(`随后${falcon.name}便迎着夕阳跑向了更衣室。`);
      era.drawLine({ content: '演出结束后' });
      await falcon.say_and_wait(`谢谢大家⭐，今天的演唱会也是大受好评呢⭐`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(`周围传来了稀稀拉拉的掌声。`);
      await falcon.say_and_wait(
        `那么飞鹰子再唱一首歌吧♪——献给一直支持着我的你⭐`,
      );
      await era.printAndWait(`今天的演出也是大获成功。`);
      await era.printAndWait(
        `等到围观的人群慢慢散开后，从远处观看着的${you.name}走向了${falcon.name}。`,
      );
      await you.say_and_wait(`辛苦了，今天的演出也非常受欢迎。`);
      await era.printAndWait(
        `无论何时都牵挂着舞台的${falcon.teen_sex_title}实在可爱。`,
      );
      await falcon.say_and_wait(
        `没有那回事！如果不是${callname}发掘我的话，飞鹰子现在也在为演出而烦恼呢。`,
      );
      await era.printAndWait(
        `自己只是做了应尽的义务……虽然想这么说，但${you.name}还是闭上了嘴。`,
      );
      await falcon.say_and_wait(
        `今天的演唱会也结束了，接下来就全力准备皋月赏吧！`,
      );
      await era.printAndWait(
        `接过${falcon.name}手中的纸袋后，你们在回特雷森的路上沉默的前行。`,
      );
      await falcon.print_and_wait(`手中的纸袋为何如此沉重呢？`);
      await falcon.print_and_wait(
        `过度兴奋的大脑就像不断旋转的黑色物体咕噜咕噜在纸杯中旋转着。`,
      );
      await you.say_as_passer_by_and_wait(`稚嫩的声音`, `打扰了！`);
      await era.printAndWait(
        `声音从背后传来，${you.name}与${falcon.name}对视一眼后一起看去。`,
      );
      await you.say_as_passer_by_and_wait(
        `稚嫩的声音`,
        `${falcon.name}姐姐的表演真的很棒，我也想成为飞鹰姐姐那样的偶像！`,
      );
      await era.printAndWait(
        `看上去是像是初中部的小${falcon.uma_sex_title}，似乎是${falcon.name}的粉丝。`,
      );
      await falcon.say_and_wait(
        `谢谢你！明天也要支持飞鹰子呦，还是在这个地方⭐`,
      );
      await era.printAndWait(
        `重新回到了偶像状态的${falcon.name}高兴的挥舞着双手。`,
      );
      await you.say_as_passer_by_and_wait(
        `稚嫩的声音`,
        `请问怎么样才能成为飞鹰子姐姐那样的大偶像呢？`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}想要了解更多有关你们的事情。`,
      );
      await falcon.say_and_wait(
        `带着成为顶级${falcon.uma_sex_title}偶像的目标，然后牢牢记住这个目标，随后开始行动就行了！`,
      );
      await era.printAndWait(`原来如此，小${falcon.uma_sex_title}点了点头。`);
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `旁边的那位是对飞鹰子姐姐很重要的人吧？`,
      );
      await falcon.say_and_wait(`是非常重要的人哦？`);
      await era.printAndWait(
        `${falcon.name}带着难以抑制的上扬感回答${falcon.sex}的疑惑。`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `比粉丝们还要重要吗？`,
      );
      await falcon.say_and_wait(`诶？这个的话。`);
      await era.printAndWait(`${falcon.name}罕见的停顿了，随后。`);
      era.printButton(`是比粉丝还要重要的人哦`, 1);
      era.printButton(`是与粉丝不同意义上一样重要的人`, 2);
      if ((await era.input()) === 1) {
        await you.say_as_passer_by_and_wait(
          `小${falcon.uma_sex_title}`,
          `比粉丝还重要是说？`,
        );
        await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
      } else {
        await you.say_as_passer_by_and_wait(
          `小${falcon.uma_sex_title}`,
          `不同意义是说？`,
        );
        await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
      }
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `原来是训练员！`,
      );
      await era.printAndWait(
        `高兴的围着你旋转的小${falcon.uma_sex_title}突然拉住了你。`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `等我入学之后，大哥哥可以做我的专属训练员吗？`,
      );
      await era.printAndWait(
        `想要培养${falcon.uma_sex_title}需要向理事长提出申请，同时还要负责接下来整整三年的训练。`,
      );
      await era.printAndWait(`实话说是件相当艰难的事情。`);
      await you.say_and_wait(
        `如果进入特雷森的话，你会遇到比我更优秀的训练员。`,
      );
      await era.printAndWait(`说起来不知为何背后凉飕飕的。`);
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `我知道了！`,
      );
      await era.printAndWait(
        `在表达感谢之后，小${falcon.uma_sex_title}便飞快的离开了。`,
      );
      await you.say_and_wait(`飞鹰子——`);
      await falcon.say_and_wait(`什么都没有哦⭐`);
      await era.printAndWait(`${falcon.name}像是什么都没发生一样盯着你看。`);
      await you.say_and_wait(`这下麻烦了`, true);
      await era.printAndWait(
        `之后为了补偿，答应${falcon.name}下次节假日会和${falcon.sex}一起出行。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '闪耀在皋月赏的飞鹰子';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`在新闻发布会上向记者宣布参加皋月赏后。`);
      await era.printAndWait(
        `虽然也有对于${falcon.name}是否能在非适应性的赛场上获胜的疑虑，不过更多的还是活跃在沙地的${falcon.name}会展示出什么样的活力的期待。`,
      );
      await era.printAndWait(`准备室中`);
      await falcon.say_and_wait(`哼哼♪这样的话飞鹰子就准备完成了！`);
      await era.printAndWait(`${falcon.name}在等身镜前再次确认了一遍决胜服，`);
      await falcon.say_and_wait(`${callname}觉得怎么样？`);
      era.printButton(`真是耀眼！`, 1);
      await era.input();
      await falcon.say_and_wait(`就这样把所有粉丝的目光全部——夺过来！`);
      await falcon.say_and_wait(
        `……说起来，这也是飞鹰子第一次穿上这身决胜服呢……`,
      );
      await era.printAndWait(
        `${falcon.name}突然不好意思地移开了与${you.name} 对视的目光。`,
      );
      await falcon.say_and_wait(`……没什么⭐`);
      await era.printAndWait(`然后像是掩饰什么一样，捂着嘴笑了起来。`);
      await falcon.say_and_wait(`这次真的要出发了！`);
      await era.printAndWait(`${falcon.name}握住了门把手，将要打开。`);
      era.printButton(
        `就像夺走我的目光一样，将赛场上所有人的目光全部夺去吧！`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `${falcon.name}眨了眨眼，然后关上了准备室的大门。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '皋月赏后・闪耀的大舞台';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} suzuka 无声铃鹿
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, suzuka, you, callname) => {
      await falcon.say_and_wait(`真的吗……`);
      await falcon.say_and_wait(
        `${falcon.name}……飞鹰子居然真的赢了！Lucky！Victory⭐`,
      );
      await era.printAndWait(
        `${you.name}也死死的盯着记分板上的字符，生怕眼前的事实就像是一场梦一样，就这么带着不真实的感觉醒来，可醒来的话也会是一场好梦吧。`,
      );
      await era.printAndWait(
        `然而${falcon.name}的名次没有因为${you.name}的动作而有任何改变，就像是使苹果从树上落下的重力一样令人安心。`,
      );
      await falcon.say_and_wait(`不会是梦吧！${callname}！`);
      await era.printAndWait(`${falcon.name}也没从这种狂喜之中回复过来`);
      era.printButton(`接下来就是${falcon.name}梦寐以求的……草地的舞台！`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}发出了连自己听到后都有些吃惊的尖锐与颤抖声。`,
      );
      await falcon.say_and_wait(`是！`);
      await era.printAndWait(
        `${falcon.name}终于反应过来，飞快的做着决胜舞台时所需的准备。`,
      );
      await era.printAndWait(`${you.name}靠在座位上，久久不能回神。`);
      era.drawLine({ content: '胜者舞台结束后' });
      await you.say_and_wait(`辛苦了。`);
      await era.printAndWait(
        `${you.name}将准备好的毛巾递给了正散发着蒸汽的${falcon.name}。`,
      );
      await era.printAndWait(
        `浑身湿透的${falcon.name}尽管疲惫不堪，但${falcon.sex}的双眼却散发着光芒。`,
      );
      await you.say_and_wait(`皋月赏的舞台怎么样？`);
      await falcon.say_and_wait(`比想象之中还要旷阔，比想象中还要闪耀！`);
      await falcon.say_and_wait(
        `而且，飞鹰子从来没有在这么多人的舞台之上演出过，特别是站在比奔跑过的舞台还要大上两倍的地方。`,
      );
      await era.printAndWait(
        `一边用毛巾擦拭着头发上黏着的汗水，一边望着${you.name}的${falcon.name}。`,
      );
      await falcon.say_and_wait(
        `在那么多观众的注视下，飞鹰子就像是充满了力量一样……如果${callname}也能体会到飞鹰子所说的那种万众瞩目的感觉，那么就会明白飞鹰子说的是什么了。`,
      );
      await era.printAndWait(
        `${falcon.name}略有遗憾的停下了手中的动作，眼睛似乎在望着什么，又像是回忆着美好事物时无意识摩擦着毛巾。`,
      );
      await suzuka.say_and_wait(`打扰了。`);
      await era.printAndWait(`无声铃鹿打开了休息室的大门。`);
      await suzuka.say_and_wait(`欸？我是不是应该等下再过来。`);
      await era.printAndWait(
        `${falcon.name}下意识的动作停了下来，而无声铃鹿看向了${you.name}，似乎在等待着${you.name}的下一句话。`,
      );
      await you.say_and_wait(`没有，不如说是来得正好。谢谢你铃鹿小姐。`);
      await you.say_and_wait(`之前的草地特训真是帮了大忙。`);
      await era.printAndWait(`${you.name}由衷的向${falcon.sex}表示感谢。`);
      await falcon.say_and_wait(
        `谢谢你，小铃鹿，飞鹰子能取得胜利真是多亏了你⭐`,
      );
      await suzuka.say_and_wait(`小……小铃鹿？`);
      await era.printAndWait(`不知何时，${falcon.name}回到了之前的模式。`);
      await you.say_and_wait(
        `作为这次比赛胜利的大功臣，铃鹿${suzuka.adult_sex_title}可否和我们一起庆祝获胜？`,
      );
      await era.printAndWait(
        `将之前的暧昧气氛抛掷脑后，${you.name}向无声铃鹿提出建议。`,
      );
      await suzuka.say_and_wait(`……既然${callname}都说到这份上了，非常感谢。`);
      await era.printAndWait(`随后一行人在附近有名的西餐厅享受着胜利的滋味。`);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_lose: (() => {
    const title = '皋月赏后・憧憬的大舞台中央';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`休息室中`);
      era.printButton(`演出辛苦了，飞鹰子。`, 1);
      await era.input();
      await era.printAndWait(
        `虽然没能在皋月赏中获胜，但${falcon.name}却很满足的样子。`,
      );
      await falcon.say_and_wait(`皋月赏的舞台比想象中还要大呢……`);
      await falcon.say_and_wait(
        `比平时登上的舞台还要大两倍，耀眼的闪光灯，满眼全部都是注视着我们的观众。`,
      );
      await falcon.say_and_wait(
        `不过，最耀眼的还是舞台最中间的位置吧……下一次，飞鹰子一定会登上去的！`,
      );
      await falcon.say_and_wait(`飞鹰子加油！`);
      await you.say_and_wait(
        `笨蛋，皋月赏是限定第二年的赛${falcon.uma_sex_title}才能参加的比赛！`,
      );
      await era.printAndWait(`${you.name}轻轻敲了敲${falcon.name}的小脑袋。`);
      await falcon.say_and_wait(`欸嘿⭐`);
      await era.printAndWait(`吐着舌头的${falcon.name}显得意外可爱。`);
      await you.say_and_wait(`真是可爱。`, true);
      await you.say_and_wait(`咳咳！接下来的话飞鹰子要好好准备泥地德比了。`);
      await falcon.say_and_wait(`好⭐`);
      await you.say_and_wait(`不过偶像演出也不能松懈！`);
      await falcon.say_and_wait(`是⭐`);
      await you.say_and_wait(`就这样顺着这股气势向前进！`);
      await falcon.say_and_wait(
        `最强的${falcon.uma_sex_title}偶像——${
          falcon.name
        }⭐下次一定要让大家看着我闪耀的样子！`,
      );
      await era.printAndWait(`${falcon.name}以活力的声音作为回复。`);
      await era.printAndWait(`${you.name}开始期待着接下来的比赛了。`);
    };
    f.title = title;
    return f;
  })(),
  we_47_15: (() => {
    const title = '早已察觉的恋心';
    /**
     * 默认皋月赏结束
     * 演出结束之后，回到学校时发现缎带掉了一根，急忙寻找，离宵禁很近，抉择
     * 到失去地点，没找到，绝望时，被匆匆赶来的小马娘捡到，被询问与训练员之间的感情
     * 醒目飞鹰突然意识到了自己对训练员的感情可能导致偶像事业的重创
     * 陷入不安之中
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`宿舍\n`);
      await falcon.say_and_wait(`${callname}，谢谢你送飞鹰子回宿舍！`);
      await falcon.print_and_wait(
        `目送着${you.name}渐渐消失在转角处，带着微笑的${falcon.name}也转身离开。`,
      );
      await falcon.print_and_wait(
        `因为参加比赛的缘故，同时也要满足一直支持${falcon.name}的愿望，为了在这两者之间保持平衡，${you.name}努力说服了${falcon.name}在参加比赛这个星期减少突击演出的时间。`,
      );
      await falcon.print_and_wait(
        `为了珍惜宝贵的演出时间，${falcon.name}比以往更加努力的闪耀着。`,
      );
      await falcon.say_and_wait(`……训练员${falcon.uma_sex_title}。`);
      await falcon.print_and_wait(
        `起床——上课——训练——演出——回宿舍，如流水一样平静的日常。`,
      );
      await falcon.print_and_wait(
        `目送${callname}消失在道路的转角处，已经是我日常的一部分了。`,
      );
      await falcon.print_and_wait(
        `为了让更多的人露出笑容，坚持着偶像活动直到精疲力竭为止，每天也因此过得很充实。`,
      );
      await falcon.print_and_wait(
        `啊，虽然有时候演出结束时，两腿瘫软到几乎不想动的情况也越来越多了。`,
      );
      await falcon.print_and_wait(
        `是偶像修行的程度还太浅的缘故吧，这么试着向自己问道。`,
      );
      await falcon.print_and_wait(
        `另一个自己却摇摇头，「不能让粉丝们看到飞鹰子消极的一面」，所以抛弃了消极的想法。`,
      );
      await falcon.print_and_wait(
        `上一次已经试过了女仆装，这次要不要试试决胜服进行演出呢？`,
      );
      await falcon.print_and_wait(
        `毕竟飞鹰子的粉丝们也总因为这样那样的理由没机会进入赛场呢。`,
      );
      await falcon.print_and_wait(
        `因为比赛开始时恰好是工作日的缘故所以没能亲自观看吗……虽然这么想，但还是草地一边的比赛更吸引人吧。`,
      );
      await falcon.print_and_wait(
        `皋月赏的舞台更大，参与的${falcon.uma_sex_title}更强，坐在远比飞鹰参与的泥地赛更大的观众席上观看比赛的粉丝也更多。`,
      );
      await falcon.print_and_wait(`说起来，还是有些不甘心呢——`);
      await falcon.print_and_wait(
        `决定了！飞鹰子要以最闪耀的姿态带给大家幸福！`,
      );
      await falcon.print_and_wait(
        `令人安心的手势！夺去目光的舞步！以及钻石般亮晶晶的决胜服！`,
      );
      await falcon.print_and_wait(`啊——说起来发型可能也要调整。`);
      era.printButton(`欸？`, 1);
      await era.input();
      await falcon.print_and_wait(
        `用发髻固定的头发像是终于解放了一样，固定住马尾的皮筋绷断了。`,
      );
      await falcon.say_and_wait(`终于到极限了呢。`);
      await falcon.print_and_wait(
        `像是自言自语一样的${falcon.name}下意识的抚摸着刘海处的缎带。`,
      );
      await falcon.print_and_wait(
        `为了节约经费在二手市场上购买的橡皮筋支撑不住这么剧烈的运动。`,
      );
      await falcon.print_and_wait(`一二……三呢？`);
      await falcon.print_and_wait(
        `心中泛起一丝不安，我将缎带取下一遍又一遍徒劳的数着。`,
      );
      await falcon.say_and_wait(`得赶快顺着回来的道路去找。`, true);
      await falcon.print_and_wait(
        `那是对我最重要的，温柔的母亲亲手制作的第一件决胜服。`,
      );
      await falcon.say_and_wait(`可是时间。`, true);
      await falcon.print_and_wait(
        `时针与分针的夹角看上去连水果巴菲上的草莓都塞不下。`,
      );
      await falcon.print_and_wait(
        `如果是打破宵禁的话，之后会被手纲小姐说教的吧。`,
      );
      await falcon.print_and_wait(
        `如果事先和奇石同学说一声的话，应该可以通融一下吧？`,
      );
      await falcon.say_and_wait(`飞鹰子！加油！`);
      await falcon.print_and_wait(`意识到的时候，自己已经在飞驰的路上了。`);
      await falcon.print_and_wait(`啊啊，总是这样。`);
      await falcon.print_and_wait(
        `扑哧扑哧闪着光环的天使飞鹰子叹息着，一旁的恶魔飞鹰子兴高采烈的加油喝彩。`,
      );
      await falcon.say_and_wait(
        `全力以赴的面对现在的困境，后果什么的就交给明天的飞鹰子处理！这就是飞鹰子的偶像道！`,
      );
      await falcon.print_and_wait(
        `确定了前进的方向后，${falcon.name}不错过任何一处角落的全速前进。`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `特雷森门口，沿着商业街的小道，直到目的地河边草地，一路上都没有缎带的样子。`,
      );
      await falcon.print_and_wait(`就像是缎带长出了翅膀扑哧扑哧飞走了一样。`);
      await falcon.print_and_wait(
        `啊啊，亲爱的缎带小姐，希望你在伊甸园的生活一直顺利。`,
      );
      await falcon.print_and_wait(
        `将胡乱的思绪甩开，飞鹰子重新意识到了一件事。`,
      );
      await falcon.say_and_wait(`离宵禁已经过去半个小时了吧！怎么办！`);
      await falcon.print_and_wait(
        `恐怕得知情况的特雷森现在正焦急地寻找着飞鹰子吧。`,
      );
      await falcon.print_and_wait(
        `不甘心，就这么两手空空的回去，实在是不甘心。`,
      );
      await falcon.say_and_wait(
        `不对，如果从积极的方面考虑的话，直到第二天早晨为止，飞鹰子有充足的时间寻找缎带了！`,
        true,
      );
      await falcon.print_and_wait(
        `焦躁的内心也追歼平复下来了，就这样回忆有可能落下的地方。`,
      );
      await falcon.print_and_wait(`演出开始前，缎带完好无缺的呆在额头上。`);
      await falcon.print_and_wait(
        `安可时为了兼顾最左和最右侧的观众，想起了之前看过的热门偶像帅气的旋转后实现了视线的翻转。`,
      );
      await falcon.print_and_wait(`或许就是那个时候不小心掉下来的吧。`);
      await falcon.print_and_wait(
        `如果是被哪位观众捡起来的话，那飞鹰子找到的希望就比较小了。`,
      );
      await falcon.print_and_wait(`唔——如果平时没有在数学课打瞌睡的话。`);
      await you.say_as_passer_by_and_wait(`？？？`, `那边的是飞鹰子姐姐吗？`);
      await falcon.say_and_wait(`咦咦咦咦？`);
      await falcon.print_and_wait(
        `${falcon.name}被突如其来的声音吓到心脏停了一拍，尾巴上的毛发也变得僵硬。`,
      );
      await falcon.print_and_wait(
        `深夜时分从小径传来的稚嫩童声，以及朝着河边缓缓逼近的黑影。`,
      );
      await falcon.say_and_wait(
        `难道这就是训练员说过的专门吃不听话${falcon.uma_sex_title}的${falcon.uma_sex_title}杀手吗？`,
        true,
      );
      await falcon.say_and_wait(`飞——飞鹰子，飞鹰子不好吃啊啊啊！`);
      await you.say_as_passer_by_and_wait(`小${falcon.uma_sex_title}`, `欸？`);
      await falcon.print_and_wait(`澎！`);
      await falcon.print_and_wait(`黑影旁的绿化树轰然倒下。`);
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `果然是飞鹰子姐姐！`,
      );
      await falcon.print_and_wait(
        `丝毫没被吓到的小${falcon.uma_sex_title}兴奋的凑上前来。`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `小心翼翼将缎带收进口袋之中，看着眼前为了归还缎带而偷偷离开的${falcon.teen_sex_title}。`,
      );
      await falcon.print_and_wait(`失而复得的安慰感转瞬又被自责所覆盖。`);
      await falcon.print_and_wait(
        `如果没有为了缎带逃了宵禁的话，飞鹰子恐怕会陷入自责之中。`,
      );
      await falcon.print_and_wait(
        `看着眼前期待着表扬的${falcon.teen_sex_title}，至少飞鹰子会负起责任好好把你送回去的。`,
      );
      await falcon.print_and_wait(
        `${falcon.name}蹲下身体，努力保证自己的视线与${falcon.teen_sex_title}平行。`,
      );
      await falcon.say_and_wait(
        `谢谢你，飞鹰子一定会为了大家努力成为${falcon.uma_sex_title}偶像的。`,
      );
      await falcon.print_and_wait(
        `学着训练员${falcon.uma_sex_title}抚摸的手法，尽可能温柔的笑着。`,
      );
      await falcon.say_and_wait(`抱歉，飞鹰子还是太不成熟了。`, true);
      await falcon.print_and_wait(
        `向着心中的${callname}道歉，后者只是苦笑的摇摇头。`,
      );
      await falcon.say_and_wait(`让飞鹰子姐姐送你回去吧。`);
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `欸？真的吗！飞鹰子姐姐要送我回去了！`,
      );
      await falcon.print_and_wait(
        `眼前的${falcon.teen_sex_title}为了自己帮助到了他人而雀跃着，就像是飞鹰子所做的一样。`,
      );
      await falcon.print_and_wait(
        `突然意识到自己给${callname}添了多少麻烦的时候，背后传来一阵灼烧感。`,
      );
      await falcon.say_and_wait(`一起前往最闪耀的舞台吧！`);
      await falcon.print_and_wait(
        `将破损的缎带小心收起，轻轻牵起${falcon.teen_sex_title}的小手。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `谢谢你送我回家！`,
      );
      await falcon.print_and_wait(
        `在居民楼的门口，小${falcon.uma_sex_title}向${falcon.name}道谢。`,
      );
      await falcon.say_and_wait(`不，我这边才是。`);
      await falcon.print_and_wait(`苦笑着做出了回礼。`);
      await falcon.print_and_wait(
        `小${falcon.uma_sex_title}的父母经常出差，每天${falcon.sex}都是独自一人上下学。`,
      );
      await falcon.print_and_wait(
        `虽然试着问了要不要每天接${falcon.sex}，却被对方以不能麻烦他人而拒绝了。`,
      );
      await falcon.print_and_wait(`这份执拗感有点像小时候的飞鹰子呢。`);
      await falcon.say_and_wait(
        `就像在路上说好的一样，不要再做这么危险的事情了！这是和飞鹰子之间的约定呦？`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `知道了！`,
      );
      await falcon.print_and_wait(
        `正准备从大门进入的${falcon.uma_sex_title}像是想到了什么一样，回过头看向了${falcon.name}。`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `说起来，飞鹰子姐姐为什么脸通红着？`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `是想到${callname}了吗？`,
      );
      await falcon.print_and_wait(`不，不是这种关系。`);
      await falcon.print_and_wait(`正打算这么反驳时，却怎么也说不出口。`);
      await falcon.print_and_wait(
        `像是不小心把鸡蛋整个吞下一样，话语卡在了喉咙之中。`,
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}`,
        `明天我也会看飞鹰子姐姐的表演的！`,
      );
      await falcon.print_and_wait(`大门在眼前缓缓关上了。`);
      await falcon.print_and_wait(
        `连小${falcon.uma_sex_title}都已经看出来了吗？`,
      );
      await falcon.print_and_wait(
        `在没有实现${falcon.uma_sex_title}偶像的理想前，还是在众人面前稍微保持一点距离吧。`,
      );
      await falcon.print_and_wait(`不过\n`);
      await falcon.say_and_wait(`飞鹰子原来给 ${callname} 添了这么大麻烦吗？`);
      await falcon.print_and_wait(
        `第二天，小${falcon.uma_sex_title}一家向特雷森表达了对${falcon.name}送小${falcon.uma_sex_title}回家的感谢，为此${you.name}被手纲小姐狠狠的批评了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_21: (() => {
    const title = '训练室的花';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      era.printButton(`终于结束了。`, 1);
      await era.input();
      await era.printAndWait(
        `整理完最后一份文件，${you.name}如释重负般的松了一口气。`,
      );
      await you.say_and_wait(`作为训练员真是辛苦啊`, true);
      await era.printAndWait(
        `不知何时训练室被金黄色的夕阳悄悄拜访，窗外热火朝天的训练声音让${you.name}回忆起了在训练员学院的生活。`,
      );
      await era.printAndWait(
        `在沙地上飞驰的${falcon.uma_sex_title}偶像——${falcon.name}，虽然没有什么实感，但已经是现在泥地的一颗新星了。`,
      );
      await era.printAndWait(
        `但是，看着${falcon.name}日益增大的粉丝群体，以及变得越来越慢的日程表。`,
      );
      await era.printAndWait(`不知为何，心里的角落变得空落落的。`);
      await you.say_and_wait(`……我有好好完成作为训练员的职责吗？`, true);
      await era.printAndWait(
        `每天的注意力资源非常有限，所以只能将注意力放在自己能察觉到的范围内。`,
      );
      await era.printAndWait(
        `而且面面俱到几乎是不可能的，为了防止意外投入更多注意力反而会造成更大的不确定。`,
      );
      await era.printAndWait(
        `呆在空旷的训练室里，不知不觉间消极的想法就从记忆的角落里溢出。`,
      );
      await falcon.say_and_wait(`${callname}我回来了⭐`);
      await era.printAndWait(
        `${falcon.name}圆圆的小脑袋从推门的间隙中窜了出来。`,
      );
      await you.say_and_wait(`辛苦了。在今天的训练开始之前，先休息一会吧。`);
      await era.printAndWait(
        `为了重新振作起来，${you.name}离开座位，帮${falcon.name}倒了一杯红茶。`,
      );
      await era.printAndWait(`然后看着眼前坐正的${falcon.name}。`);
      await era.printAndWait(
        `与平时的${falcon.name}相比，手中多了一份不知是谁赠送的种子。`,
      );
      await era.printAndWait(
        `${falcon.name}察觉到了${you.name}的视线，耳朵动了动，然后将手中的小袋子挥了挥。`,
      );
      await era.printAndWait(
        `在${you.name}和${falcon.name}的努力之下，${falcon.uma_sex_title}偶像的概念总算推了出去。`,
      );
      await era.printAndWait(
        `现如今，一提到${falcon.uma_sex_title}偶像，关注沙地的观众们都会想到${falcon.name}。`,
      );
      await era.printAndWait(
        `拜此所赐，${falcon.name}也聚集了数量不少的粉丝团体。`,
      );
      await falcon.say_and_wait(`嗯，是商业街的店员姐姐送给我的。`);
      await era.printAndWait(
        `不少粉丝都把${falcon.name}当作了自己理想的投影，所以帮助自己也是理所应当的吧？`,
      );
      await era.printAndWait(
        `如果是信件，则会由身为训练员的${you.name}筛选之后再给${falcon.name}看，如果是包装的礼物也是同理。`,
      );
      await era.printAndWait(
        `${falcon.name}意外的在这方面表现的很顺从，同时也有粉丝们之间的自律缘故，所以现在${falcon.sex}的小脑袋还没被丧气话所淹没。`,
      );
      era.printButton(`好好养起来吧。`, 1);
      await era.input();
      await era.printAndWait(
        `先将种子种在靠近窗户的阴影处，等发芽时再放在阳光之下吧。`,
      );
      await era.printAndWait(
        `看着${falcon.name}将花盆放下后，啪嗒啪嗒地坐在了${you.name}的旁边。`,
      );
      await falcon.say_and_wait(`啊，${callname}`);
      await you.say_and_wait(`嗯？飞鹰子怎么了？`);
      await falcon.say_and_wait(`……不，没什么⭐`);
      await era.printAndWait(
        `${falcon.name}的耳朵扑哧扑哧的扇打着，尾巴也不停拍打着沙发。`,
      );
      await falcon.say_and_wait(`说起来，接下来的训练方针是——`);
      await era.printAndWait(`时间便在闲聊与训练之中度过。`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = '莫名的焦躁感';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, minoru, you, callname) => {
      await falcon.say_and_wait(`……嗯——`);
      await era.printAndWait(
        `${you.name} 走进准备室，看见情绪稍稍低落的${falcon.name}。`,
      );
      await falcon.say_and_wait(`${callname}，这次比赛会有很多人来看吗？`);
      await you.say_and_wait(
        `因为飞鹰子在皋月赏参赛的缘故，现在草地的观众们也知道在泥地赛道努力闪耀的${falcon.name}了。`,
      );
      await falcon.say_and_wait(`比起草地的赛道来说……`);
      await you.say_and_wait(
        `虽然还是不足，不过在飞鹰子的努力下，泥地也慢慢有了人气。`,
      );
      await falcon.say_and_wait(`这样吗。`);
      await falcon.say_and_wait(`飞鹰子说不定真的可以带动泥地比赛呢！`);
      await era.printAndWait(`努力最终还是会有结果的。`);
      era.printButton(`而且，大家都期待着飞鹰子登场！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……没错！为了在观众席上欢呼着的粉丝们，飞鹰子就这样一口气冲到终点！`,
      );
      await falcon.say_and_wait(`……${callname}，距离比赛开始还有多久？`);
      await era.printAndWait(
        `${you.name} 将手机递给了${falcon.name}，屏幕上显示的时间距离比赛开始还有半个小时。`,
      );
      await falcon.say_and_wait(`既然这样的话！`);
      await era.printAndWait(
        `${falcon.name}从带来的包裹中取出了厚厚一沓海报。`,
      );
      await falcon.say_and_wait(
        `在比赛开始之前，让住在附近的大家认识到飞鹰子吧！`,
      );
      await era.printAndWait(
        `还没等${you.name} 开口答复，${falcon.name}就拉着${you.name} 的手腕向外跑去。`,
      );
      await falcon.say_and_wait(`飞鹰子！加油！`);
      await era.printAndWait(
        `之后，${falcon.name}作为参赛${falcon.uma_sex_title}在比赛开始前还在演出而小小的成为了话题。`,
      );
      await era.printAndWait(
        `不久后，${minoru.name} 恐怖的笑容以及下个月的工资让 ${you.name} 保证不会再发生这种事情了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = '泥地德比后・满足的尽兴';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`休息室\n`);
      await falcon.say_and_wait(`${callname}看到飞鹰子在舞台上的表现了吗⭐`);
      await you.say_and_wait(`现场的情绪比想象之中还要高涨！`);
      await era.printAndWait(
        `在舞台之上的飞鹰子相比于比赛，不如说舞台才是${falcon.sex}的主场。`,
      );
      await era.printAndWait(
        `无数次练习的舞步以及与粉丝之间的一问一答炒热了现场的气氛。`,
      );
      await you.say_and_wait(`飞鹰子作为偶像来说真是专业级别的啊。`);
      await era.printAndWait(
        `比起赛${falcon.uma_sex_title}也许${falcon.sex}应该向偶像方向发展？`,
      );
      await falcon.say_and_wait(
        `飞鹰子既然以顶级偶像为目标前进，那么作为偶像基础中的基础也是必须认真对待的！`,
      );
      await you.say_and_wait(`现在的话，腿还有知觉吗？`);
      await era.printAndWait(`脱下跑鞋之后，帮着飞鹰子做起了脚部按摩。`);
      await falcon.say_and_wait(`比起之前的话，稍微有点感觉了！`);
      await you.say_and_wait(
        `虽然飞鹰子的热情像火焰一样炽热，不过忽视自己身体的话是会非常容易受伤的！`,
      );
      await falcon.say_and_wait(`我知道了，接下来的话也拜托${callname}了。`);
      await era.printAndWait(
        `从舞台之上下来的飞鹰子几乎都站不住了，还是${you.name}抱着飞鹰子回到的休息室。`,
      );
      await you.say_and_wait(`飞鹰子漂亮的像蝴蝶一样呢。`);
      await era.printAndWait(`燃烧自己，照耀世界，脆弱而易碎。`);
      await falcon.say_and_wait(
        `欸？蝴蝶吗……如果是蝴蝶的话，${callname}也会在花丛中吗？`,
      );
      await you.say_and_wait(`不如说遇到飞鹰子是我的荣幸！`);
      await falcon.say_and_wait(`呀啊——飞鹰子要被捉住了！`);
      await you.say_and_wait(`这下飞鹰子跑不了了！`);
      await era.printAndWait(`${falcon.name} 取得了泥地德比的胜利。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '合宿开始！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `夏季合宿开始后，${you.name}和飞鹰子为了进行夏季特训来到了理事长的私人沙滩。`,
      );
      era.printButton('「好大的沙滩！」', 1);
      await era.input();
      await era.printAndWait(`一路的颠簸总算有了回报。`);
      await falcon.say_and_wait(`而且比想象中还要漂亮呢！`);
      await falcon.say_and_wait(`……嗯，这个时候先拍一张照片给粉丝们——`);
      await era.printAndWait(`一下车便迫不及待的咔嚓咔嚓拍个不停。`);
      era.printButton(`训练的话也不要忘记了！`, 1);
      await era.input();
      await falcon.say_and_wait(`是！${callname}就看着飞鹰子活跃的表现吧！`);
      await falcon.say_and_wait(
        `不管是作为偶像的飞鹰子还是作为${falcon.uma_sex_title}的${
          falcon.name
        }都要全部完成！`,
      );
      era.printButton(`就是这种气势！`, 1);
      await era.input();
      era.println();
      await falcon.say_and_wait(
        `——综上所述，飞鹰子的第一个目标是！让附近小镇的居民认识到飞鹰子！`,
      );
      era.printButton(`飞鹰子加油！`, 1);
      await era.input();
      await falcon.say_and_wait(`马娘偶像清凉夏日演出作战，就从这个沙滩开始！`);
      await era.printAndWait(
        `${you.name}与${falcon.name}在确定了演出场地后，夏季合宿便在歌声中开始了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '庙会';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`飞鹰子要好好准备一下！`);
      await era.printAndWait(`${falcon.name}这么说着便匆忙跑进了宿舍之中。`);
      await era.printAndWait(
        `在夏季演出结束之后，因为气氛绝佳而额外进行的安可曲将结束时间向后推迟了一小时。`,
      );
      await era.printAndWait(
        `计划之中一起看烟火大会的时间表一下子紧张了起来。`,
      );
      await era.printAndWait(
        `从宿舍中传出的喧嚣声渐渐消失。距离烟火大会开始还有不足一个小时。`,
      );
      await era.printAndWait(
        `今年的烟火大会在小镇中心举行。附近的最佳观赏点是在小镇不远处的山上。`,
      );
      await era.printAndWait(
        `以平时的脚力大概需要半个小时才能到山脚，距离上山还要额外的十五分钟，想到这一点不禁有些焦躁起来。`,
      );
      await falcon.say_and_wait(`不好意思久等了！`);
      await era.printAndWait(`终于来了。`);
      await era.printAndWait(
        `原本是想这么说的，但换上了浴衣的${falcon.name}比平时更加可爱。`,
      );
      await era.printAndWait(
        `嘴唇变得焦躁，心跳猛地开始加剧，头上也冒起了水珠。`,
      );
      await falcon.say_and_wait(`难道这身不好看吗？`);
      await era.printAndWait(
        `换上粉色浴衣的${falcon.name}将窈窕的身材展现的淋漓尽致，远远看去就像一朵鲜花一样惹人怜爱。`,
      );
      await you.say_and_wait(
        `如果飞鹰子不是最闪耀的马娘，恐怕世界上就没有人能承担这个称号了。`,
      );
      await falcon.say_and_wait(`${callname}这么说飞鹰子都有些不好意思了呢。`);
      await era.printAndWait(`${falcon.name}害羞的低下了头。`);
      await you.say_and_wait(
        `虽然不能赶上第一波表演，但第二场的时间也已经足够了。`,
        true,
      );
      await falcon.say_and_wait(`${callname}，可以牵起飞鹰子的手吗？`);
      era.printButton(`牵起飞鹰子的手`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}将小手纳入掌心之中，比起平时在粉丝面前闪耀的模样，额外多了一份抚魅。`,
      );
      await falcon.say_and_wait(`抓好飞鹰子呦？`);
      await era.printAndWait(`嗯？`);
      await falcon.say_and_wait(`没什么⭐`);
      await era.printAndWait(
        `${falcon.name}偷偷捂着嘴笑了起来，随后便跟上了${you.name}的脚步。`,
      );
      era.drawLine();
      await era.printAndWait(
        `举行庆典的数个场所之中，视野最好的是远离小镇的神社。`,
      );
      await era.printAndWait(
        `通向神社的道路需要走上一段漫长的阶梯，也因此人群相比其他地点要稍微稀疏一点。`,
      );
      await falcon.say_and_wait(`${callname}再不快一点就要开始了！`);
      await era.printAndWait(
        `站在比${you.name}稍高一级的阶梯上，${falcon.name}望向了不远处的山腰。`,
      );
      await you.say_and_wait(`飞鹰子等一下，太快了让我缓一下。`);
      await era.printAndWait(
        `${falcon.name}似乎有用不尽的活力一样，一开始是${you.name}牵着${falcon.sex}的手，走了一段道路后，很快变成了${falcon.sex}拉着${you.name}在阶梯上不断前进。`,
      );
      await falcon.say_and_wait(`${callname}的体力比想象中还要差呢！`);
      await era.printAndWait(`该说马娘不愧是三女神的宠儿吗？`);
      await era.printAndWait(
        `相比人类来说几乎要耗尽所有体力的路程对马娘来说恐怕连热身都算不上。`,
      );
      await era.printAndWait(
        `在喘息时向左右望去，前往神社的道路几乎不见人影，祭礼音乐也渐渐到了尾声，烟火大会马上就要开始了。`,
      );
      await you.say_and_wait(`不能和飞鹰子一起看烟火大会的开幕式有些可惜呢。`);
      await era.printAndWait(
        `${you.name}带着略微遗憾的语气向${falcon.name}说着。`,
      );
      await falcon.say_and_wait(`${callname}这么想和飞鹰子一起看烟火大会吗？`);
      await era.printAndWait(
        `${falcon.name}的语气中带着一丝难以形容的奇怪感。`,
      );
      era.printButton(`想和飞鹰子一起记录那个瞬间`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}在思索过后坦率的告诉了${falcon.sex}。`,
      );
      await falcon.say_and_wait(`那么抓紧飞鹰子！`);
      await era.printAndWait(
        `纤细的${falcon.teen_sex_title}将${you.name}拉了过来。`,
      );
      await falcon.say_and_wait(`就这么一口气从阶梯上跨过去！ \n\n`);
      await era.printAndWait(
        `很难形容那种感觉，就像是在小镇里贩卖的胡辣汤全部洒在脸上一样，被风切割传来的剧痛感以及心脏受到的巨大压迫几乎使${you.name}陷入恐惧之中。`,
      );
      await era.printAndWait(
        `然而这段地狱般的恐怖经历比想象中退去的迅速，直到${falcon.name}轻轻摇晃着${you.name}的肩膀时，${you.name}才意识到已经到山腰了。`,
      );
      await era.printAndWait(
        `忽然意识到了为什么路上没看到有人将马娘作为交通工具载着自己上下班。`,
      );
      await falcon.say_and_wait(`${callname}，烟火大会开始了！`);
      await era.printAndWait(
        `砰、砰、随着火红的鲜花照亮夜空，烟火大会的气氛正式进入高潮。`,
      );
      await era.printAndWait(
        `同时，在天空之中绽放的烟火也可以算是祭典这场演出的安可吧。`,
      );
      await era.printAndWait(
        `忽然间，让${you.name}想起了正在泥地奔跑的${falcon.name}。`,
      );
      await era.printAndWait(`或许就像烟火一样，稍纵即逝。`);
      await era.printAndWait(`这么想的话多少会有些伤感。`);
      await falcon.say_and_wait(
        `真漂亮啊，如果飞鹰子登上顶级偶像的那一瞬间，恐怕没有比这更适合的吧！`,
      );
      await era.printAndWait(
        `在${you.name}旁边的${falcon.name}被烟火染上了如火焰般橙黄的神情。`,
      );
      era.printButton(`明年也一起来看烟火大会吧`, 1);
      await era.input();
      await era.printAndWait(
        `天空中的花朵一排排的绽放，烟火大会也接近了尾声。`,
      );
      await you.say_and_wait(`那时候一定比现在还要闪耀夺目！`);
      await era.printAndWait(`${falcon.name}望向了${you.name}。`);
      await falcon.say_and_wait(`是！到时候请多指教！`);
      await era.printAndWait(`最美丽的烟火在${you.name}眼前绽放。`);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿结束·为了更大的舞台';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`哈啊！哈啊！哈啊！`);
      await you.say_and_wait(`飞鹰子加油！`);
      await falcon.say_and_wait(`哈啊啊啊啊啊！`);
      await era.printAndWait(
        `驱使着疲惫不堪的身体冲向终点的飞鹰，终于慢慢停了下来。`,
      );
      await you.say_and_wait(`辛苦了。`);
      await era.printAndWait(
        `将准备好的毛巾递给飞鹰子，在纸张上记下最后一行数据。`,
      );
      await falcon.say_and_wait(
        `就这样活用在夏季合宿中学到的技巧，在赛场上让更多的粉丝们看到飞鹰子闪耀的一面⭐`,
      );
      await era.printAndWait(
        `即使是${falcon.uma_sex_title}，兼顾训练以及小镇演出恐怕早已力不从心，但${falcon.uma_sex_title}却只是稍作休息之后便着手做起了演出的准备。`,
      );
      era.printButton(`这样会不会太辛苦了？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `比起其他${falcon.uma_sex_title}来说，或许飞鹰子的特点就是活力的模样呢。`,
      );
      await era.printAndWait(
        `作为${falcon.uma_sex_title}偶像的${falcon.name}，受邀在小镇的告别演唱会上献唱。`,
      );
      await era.printAndWait(
        `也是为了在这个小镇上新结识的粉丝与朋友们，即使疲惫不堪也必须全力以赴。`,
      );
      await you.say_and_wait(
        `今晚的演唱会对于粉丝们来说，一定是一生一次的演出！`,
      );
      await era.printAndWait(`至少做好身为训练员的职责。`);
      await falcon.say_and_wait(
        `对于${callname}也是这样吗……飞鹰子现在充满了活力！`,
      );
      era.drawLine({ content: '演唱会结束后' });
      await falcon.say_and_wait(`～～～～♪ 谢谢大家！`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(
        `在附近小镇里举行的演唱会意外的很有人气，甚至有因为听到飞鹰子要开演唱会而专门开了3个小时车过来赶过来的粉丝。`,
      );
      await era.printAndWait(
        `对于很多人来说比起演出，能亲眼见证作为泥地偶像的${falcon.name}才是真正的目的吧。`,
      );
      await falcon.say_and_wait(
        `嗯嗯！大家的呼唤传达到了飞鹰子的耳朵里了！飞鹰子很高兴哦！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `再来一首！飞鹰子！再来一首！`,
      );
      await falcon.say_and_wait(`那么就再来一首……`);
      await era.printAndWait(`${falcon.name}注意到了${you.name}的视线。`);
      await falcon.say_and_wait(
        `啊哈哈……现在已经很晚了，还有的粉丝是从很远的地方专门来看飞鹰子的演唱会的……作为${falcon.uma_sex_title}偶像，飞鹰子必须为每一位粉丝考虑，所以非常抱歉！`,
      );
      await falcon.say_and_wait(
        `不过，告诉大家一个好消息！这次演唱会已经拜托飞鹰子的训练员上传到了马推和视频网站上！`,
      );
      await falcon.say_and_wait(`大家可以将飞鹰子闪耀的模样随时重播哦❤`);
      await falcon.say_and_wait(`那么！让我们喊出我们的口号！`);
      await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `就只能追上去了！`);
      await falcon.say_and_wait(`要一直追下去吗？`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `一直追到地平线的大舞台！`);
      await falcon.say_and_wait(`谢谢大家⭐`);
      await era.printAndWait(
        `等到现场的粉丝们渐渐散去，整个舞台只剩下了${you.name}和${falcon.name}。`,
      );
      era.printButton(`太精彩了。`, 1);
      await era.input();
      await era.printAndWait(`${falcon.name}露出了满足的表情。`);
      await era.printAndWait(
        `站在舞台之上蹦跳的双腿，在${you.name}轻轻抱起${falcon.sex}的一瞬间便像破娃娃一样瘫软在了地上。`,
      );
      await falcon.say_and_wait(`……真希望每天都能像现在这样。`);
      await era.printAndWait(`飞鹰子的${falcon.sex}眼里却依然闪闪发光。`);
      await falcon.say_and_wait(
        `按照这种情况下去的话，说不定飞鹰子也能突破那道障碍呢！`,
      );
      await era.printAndWait(
        `沙地因为${falcon.name}的存在，原本只关心草地的观众们也慢慢将视线注视到了现在。`,
      );
      await you.say_and_wait(`一定会成功的！`);
      await era.printAndWait(
        `听到${you.name}的话语后，${falcon.name}看向了观众席。`,
      );
      await falcon.say_and_wait(`就这样一步步的迈向最高的舞台。`);
    };
    f.title = title;
    return f;
  })(),
  we_47_39: (() => {
    const title = '萱草';
    /**
     * 萱草 忘忧草，寓意忘记烦恼
     * 过量摄入可能会中毒
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`在商业街举行的突击演唱会\n`);
      await falcon.say_and_wait(`～～～♪大家辛苦了！`);
      await era.printAndWait(
        `以沙地为作战方向，在最先头一直闪耀的${falcon.uma_sex_title}偶像——${falcon.name}，如今已经是热门话题。`,
      );
      await era.printAndWait(
        `不少人为了亲眼目睹${falcon.name}活跃的表现而专门购票前来观看。`,
      );
      await era.printAndWait(
        `夸张的说，沙地===${falcon.name}几乎都已经要实现了。`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(
        `……正如多大的名声就会迎来多大的考验，虽说是${falcon.name}自愿的缘故而奔波于各类广告之间，但繁忙时训练都被迫停止有点让${you.name}笑不出来。`,
      );
      await you.say_and_wait(
        `……等到现在的合同结束后，我必须和飞鹰子好好谈谈了。`,
      );
      await era.printAndWait(
        `虽说是尊重${falcon.name}意志的缘故，但真的能称得上是自由吗？`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝A`,
        `虽然每天上班很累！但一看到飞鹰子的表演，身上的疲惫似乎都已经消失了！`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝B`,
        `我可是飞鹰子代言过的每一个周边全部都收集了！如果要说用实际行动来支持飞鹰子，那绝对是我对飞鹰子的爱最深！`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝C`,
        `开什么玩笑！我可是从飞鹰子还未出道的时候就已经开始支持飞鹰子的资深粉丝！虽然现在经济有点拮据……不过对飞鹰子的爱比你们更强！`,
      );
      await era.printAndWait(
        `被粉丝们称作「偶像制作人」的你，本职却几乎被人所遗忘，你看着越来越狂热的粉丝群体，心中的担忧越来越深。`,
      );
      await you.say_and_wait(
        `……也许是现在的人内心越来越渴求寻找一个精神寄托的存在吧。`,
      );
      await era.printAndWait(`暂且用这个理由安慰自己。`);
      await era.printAndWait(
        `看着不远处在舞台之上与粉丝互动的${falcon.teen_sex_title}，精神恐怕也已经到极限了吧。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = '飞鹰子的决定';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`商业街广场\n`);
      await falcon.say_and_wait(`非常感谢大家一直以来默默支持着飞鹰子⭐`);
      await falcon.say_and_wait(
        `这是飞鹰子昨天忙了一个晚上才制作好的小礼物，希望大家接受飞鹰子的小小心意❤`,
      );
      await era.printAndWait(
        `在 ${you.name} 和${falcon.name}的不懈宣传之下，越来越多的人们慕名而来，小小的草坪如今被大量的人群所包围。`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await era.printAndWait(
        `而被人群团团围住的，便是在${falcon.uma_sex_title}偶像之道上努力的${falcon.name}。`,
      );
      await era.printAndWait(
        `虽然人气距离草地的明星偶像还有一段距离，但沙地的粉丝们愿意前来参观演出的热情却远远胜过草地粉丝。`,
      );
      await era.printAndWait(
        `究其原因的话，毕竟关注草地的粉丝同时期有不少的名赛${falcon.uma_sex_title}可以选择，但专精于沙地的${falcon.uma_sex_title}偶像，人气与实力共存的${falcon.name}只有${falcon.sex}一人罢了。`,
      );
      await era.printAndWait(`可想而知${falcon.name}的压力有多大。`);
      await era.printAndWait(`就像是在显微镜下聚焦的太阳光一样。`);
      await you.say_and_wait(
        `${falcon.name}最近的睡眠时间越来越少了，真的没问题吗？`,
      );
      await era.printAndWait(
        `最近训练室已经成了${falcon.name}补觉的场所，这还是在你的强迫之下。`,
      );
      await era.printAndWait(
        `训练、偶像活动，回复粉丝之间的来信（经过你审核之后），为了下一次的突击演出所做的准备。`,
      );
      await era.printAndWait(`繁琐的活动占据了${falcon.sex}大量的心力。`);
      await falcon.say_and_wait(`……除此之外！飞鹰子还有一个好消息要告诉大家！`);
      await falcon.say_and_wait(
        `飞鹰子决定参加接下来的JBC经典赛还有东京大赏赛！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `接下来也能看到飞鹰子活跃的表现了！真是太棒了！`,
      );
      await falcon.say_and_wait(
        `接下来的比赛，飞鹰子也会一直闪耀下去的！大家一定要到现场去参观哦！`,
      );
      await you.say_as_passer_by_and_wait(`粉丝们`, `一定会参加的！`);
      await falcon.say_and_wait(`非常感谢⭐`);
      await era.printAndWait(
        `直到最后一名粉丝离开之后，你才从稍远的位置走向${falcon.name}。`,
      );
      era.printButton(`辛苦了。`, 1);
      await era.input();
      await era.printAndWait(
        `所谓的收尾，就是将围观人群留下的垃圾全部清扫干净。`,
      );
      await era.printAndWait(
        `一开始${falcon.name}还想坚持自己打扫，但被你以自己也差不多到极限了吧为由强行制止。`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `与平时在树下打盹的疲惫不堪的${falcon.name}不同，${falcon.sex}那充满了渴求的眼睛直勾勾的盯着你。`,
      );
      await falcon.say_and_wait(
        `飞鹰子是个合格的${falcon.uma_sex_title}偶像了吗？`,
      );
      await you.say_and_wait(
        `就${falcon.uma_sex_title}偶像而言，是世界上独一无二的存在了。`,
      );
      await falcon.say_and_wait(
        `……只要再坚持一下就可以了，所以${callname}放心吧！`,
      );
      await era.printAndWait(
        `……${falcon.sex}的眼睛并没有看向你，而是看向你身后的某个物体。`,
      );
      await falcon.say_and_wait(
        `飞鹰子其实很讨厌孤独的哦？所以无论如何都希望能在最大的舞台之上闪耀。`,
      );
      await falcon.say_and_wait(`……就像烟火一样，划破令人讨厌的黑夜。`);
      await falcon.say_and_wait(`为更多像飞鹰子这样的人带来答案。`);
      await era.printAndWait(`说着说着${falcon.sex}突然流下了泪水。`);
      await falcon.say_and_wait(`尽管飞鹰子能够为之努力的方向，只有沙地了。`);
      await falcon.say_and_wait(`……好想再踏上一次，像皋月赏那样的大舞台。`);
      await era.printAndWait(
        `随后疲惫不堪的${falcon.teen_sex_title}合上了双眼。`,
      );
      await era.printAndWait(
        `作为训练员的自己，让担当${falcon.uma_sex_title}陷入这种境地，已经算是失职了。`,
      );
      await era.printAndWait(
        `即使是打着尊重担当的意见，也不过是自我逃避的产物。`,
      );
      await era.printAndWait(`比以往还要痛恨自己的软弱。`);
      await you.say_and_wait(`……不能这么下去了。`);
      await era.printAndWait(
        `轻轻抱起心爱的${falcon.teen_sex_title}，怀中的重量便是作为训练员职责的重量。`,
      );
      await you.say_and_wait(`……至少完成作为训练员的责任。`);
      await era.printAndWait(
        `做好觉悟之后，虽然手臂的肌肉传来阵阵疼痛，但内心却感到了解脱。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '决定的代价';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `与11月的气候变换成反比的，有关${falcon.name}暂停偶像活动的相关报道。`,
      );
      await era.printAndWait(
        `以无论赛场还是舞台都在一刻不停闪耀而闻名的${falcon.name}，终于到达了极限。`,
      );
      await era.printAndWait(`至少对外是如此宣传的。`);
      await era.printAndWait(
        `因为事发突然而当事人又都三缄其口，使得这场事务变得愈发魔幻起来。`,
      );
      await era.printAndWait(`排除掉过于离谱的猜测，目前主流的有两种。`);
      await era.printAndWait(`${falcon.name}有了男朋友，不久之后便会退役。`);
      await era.printAndWait(
        `${falcon.name}腿部受了相当严重的伤，目前正在医院修养，痊愈的概率不高，将来可能会隐退。`,
      );
      await era.printAndWait(`无论那种对于偶像活动都是毁灭性的打击。`);
      await you.say_and_wait(`既然已经做出了决定，就没有回头路可走了。`);
      await era.printAndWait(
        `在宣布暂时停止一段时间的偶像活动后，预想之中的争吵并没有发生，${falcon.sex}只是平静的接受了这个事实`,
      );
      await era.printAndWait(
        `……话虽如此，因为自己的擅自行为，说不定使${falcon.sex}失去了成长的机会。`,
      );
      await era.printAndWait(
        `如果因为自己的主张，结果造成了这么严重的后果。回过头来看这样的决定是对是错？`,
      );
      await you.say_and_wait(
        `……最后是对是错我不知道，我只是做了我认为正确的事情。`,
      );
      await era.printAndWait(`就算因此要付出代价。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}的粉丝`,
        `啊，您好，请问是${falcon.name}的${callname}吗？`,
      );
      await era.printAndWait(
        `不知何时出现在走廊上的男人像是终于找到了目标后眼睛发亮的向你快步走来。奇怪，这次的行程应该没有通知任何人吧。`,
      );
      await you.say_and_wait(
        `没错，请问您有什么事？如果是打算要飞鹰子的签名，抱歉${falcon.sex}刚刚下去了。`,
      );
      await era.printAndWait(
        `……说起来，这个包厢是在最里侧的一间，如果是找${falcon.name}的话，应该在路上就碰到才对。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}的粉丝`,
        `啊……不好意思，仅仅是我个人的好奇罢了。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}的粉丝`,
        `比起飞鹰子，我对${falcon.sex}的训练员更感兴趣呢。`,
      );
      await era.printAndWait(`像是为了掩饰着什么一样，连口罩手套都戴上了。？`);
      await you.say_and_wait(`……不，不对，哪里不对劲。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}的粉丝`,
        `就这么下地狱去吧！`,
      );
      await era.printAndWait(`一道白光毫无征兆的闪过。`);
      await you.say_and_wait(`唔。`);
      await era.printAndWait(
        `虽然也有考虑后会被粉丝的报复，但没想到会有如此的激进事情发生。`,
      );
      await era.printAndWait(`大脑还在处理发生于眼前的，超出现实的事件。`);
      await era.printAndWait(`于是你只能站在原地呆呆地看着小刀刺中你的腹部。`);
      await era.printAndWait(`就这样无奈的迎来自己的末路。`);
      await you.say_and_wait(`唔！`);
      await era.printAndWait(`——如果你没有下意识将公文包作为缓冲的话。`);
      await era.printAndWait(`小刀在皮质的公文包上留下了一道深深的划痕。`);
      await you.say_as_passer_by_and_wait(`狂热粉丝`, `该死。`);
      await era.printAndWait(
        `尽管如此，突然之间受到的冲击还是让你下意识的扬起了头，险些一屁股坐到地上。`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `飞鹰子明明这么完美，为什么会喜欢上你？`,
      );
      await era.printAndWait(`意识到触感不对的暴徒被眼前的失败所激怒。`);
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `给我就这么带着哭喊着下地狱去吧!`,
      );
      await era.printAndWait(
        `不抽出小刀，反而接着这股冲劲意图将你逼迫到墙壁之上。`,
      );
      await you.say_and_wait(`该死，没有退路了。`);
      await era.printAndWait(
        `不抽出小刀，趁你失去着力点就这么将你逼迫到墙壁之上。`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `那个青涩、敏感细腻的飞鹰子，怎么会突然宣布停止活动了——`,
      );
      await era.printAndWait(
        `不知是理智被愤怒所冲散的缘故，越说越激动的粉丝用力将小刀向前深入。`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `——原来如此，我明白了。。`,
      );
      await era.printAndWait(`一瞬间露出了迷惑表情的狂热者恍然大悟。`);
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `都是因为你的存在，我们的飞鹰子才会变成这样。`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `如果你消失的话，飞鹰子就会回到之前的样子吧？`,
      );
      await era.printAndWait(`肾上腺素飙升的你看着眼前绝望的一幕。`);
      await era.printAndWait(
        `小腹传来微麻的触感，就像是有人将冰块塞进了你的腹部，从作为盾牌的文件夹下滑落的小刀切实的命中了目标。`,
      );
      await you.say_as_passer_by_and_wait(`狂热粉丝`, `切。`);
      await era.printAndWait(
        `原本是瞄准心脏的一击，被公文包挡了下来，只能退而求其次瞄准腹部。`,
      );
      await you.say_and_wait(`请告诉我，为什么${falcon.name}迟迟没有回来。`);
      await era.printAndWait(`局面压倒性的不利，你反而冷静了下来。`);
      await era.printAndWait(
        `激烈的心脏跳动，体力像是积雪一般消散，近乎麻痹的身体，你以前所未有的集中力思考着突破的方式。`,
      );
      await you.say_as_passer_by_and_wait(
        `狂热粉丝`,
        `……对你这种罪无可恕之人没有解释的必要。`,
      );
      await you.say_and_wait(`好机会！`, true);
      await era.printAndWait(
        `之前的对话不过是为了麻痹对方，让对方下意识的思考如何对话而疏忽对身体的防守。`,
      );
      await era.printAndWait(
        `虽然也有反过来彻底激怒对方的可能，但这种时候只考虑赌对的可能性。`,
      );
      await era.printAndWait(
        `你趁着对方一时偷袭得手后暂时放松的警惕狠狠的一脚踢到对方下体。`,
      );
      await you.say_as_passer_by_and_wait(`狂热粉丝`, `啊啊啊啊啊啊！`);
      await era.printAndWait(
        `似乎疼痛感超过了快感所带来的麻痹，对方的手一下子松开了。`,
      );
      await you.say_and_wait(`好机会！`, true);
      await era.printAndWait(`乘着对方痛苦弯曲时，你将公文包狠狠的砸向对方。`);
      await you.say_as_passer_by_and_wait(`狂热粉丝`, `唔——`);
      await era.printAndWait(
        `从手上传来的麻痹感来说，这一击绝对造成了严重的伤害。`,
      );
      await you.say_as_passer_by_and_wait(`狂热粉丝`, `……明明就差最后一步了！`);
      await era.printAndWait(
        `因为无路可退而勉强站起来的恶魔看上去随时会倒在地上。`,
      );
      await era.printAndWait(`然而你的状态更糟。`);
      await you.say_and_wait(`一切就这么结束了吗？`, true);
      await era.printAndWait(`眩晕如雪花般袭来。`);
      await era.printAndWait(
        `咬破舌尖，让剧痛暂时驱散晕厥感，使出全力将公文包投掷过去。`,
      );
      await era.printAndWait(
        `第一击被对方侧头躲了过去，紧接着便是 ${you.name} 以身体为武器直接撞向对方。`,
      );
      await era.printAndWait(
        `对方后脑勺重重撞在了玻璃桌上，然后彻底的晕了过去。`,
      );
      await you.say_and_wait(`得打电话给救护车`, true);
      await era.printAndWait(
        `直到拼尽全力打出电话之后，${you.name} 也昏了过去。`,
      );
      await era.printAndWait(`${you.name} 的视线渐渐变得模糊。`);
      await era.printAndWait(`即将远去的意识在最后一刻看到的——`);
      await era.printAndWait(`是赶不上新时代船只的乘客。`);
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_c: (() => {
    const title = '焦躁开端';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`JBC经典赛，往年来说观众数不会超过两万`);
      await era.printAndWait(`然而`);
      await falcon.say_and_wait(
        `${callname}，我们必须在比赛开始之前将这打传单发完！`,
      );
      await era.printAndWait(`在飞鹰子的努力之下，来往的粉丝显得络绎不绝？！`);
      await you.say_and_wait(`如果是飞鹰子的话，说不定真的可以？`);
      await era.printAndWait(
        `即使是一直担心着飞鹰子身体健康的${you.name}，心里似乎也开始不切实际的期待着。`,
      );
      await you.say_as_passer_by_and_wait(`路人A`, `欸？这附近还有比赛？`);
      await you.say_as_passer_by_and_wait(
        `路人B`,
        `泥地比赛？没啥兴……${falcon.name}会参加？`,
      );
      await you.say_as_passer_by_and_wait(
        `路人C`,
        `${falcon.name}？就是在马推上成为话题的那个？`,
      );
      await you.say_as_passer_by_and_wait(`路人A`, `等等我。`);
      await era.printAndWait(`不知不觉间，传单被抢购一空。`);
      await falcon.say_and_wait(`飞鹰子说不定比想象中还要受欢迎呢……`);
      await falcon.say_and_wait(`以前要发完这么多至少要一个上午才行。`);
      await era.printAndWait(`虽是这么说，${falcon.name}的笑容几乎收不住。`);
      await falcon.say_and_wait(
        `说不定飞鹰子已经成为了比想象中还要受欢迎的人了呢。`,
      );
      await you.say_and_wait(`大家都看好你呢。`);
      await falcon.say_and_wait(`是啊，为了一直支持着飞鹰子的大家们。`);
      await falcon.say_and_wait(`飞鹰子要以2000%的努力取得冠军！`);
      await era.printAndWait(`一股无形的气浪包裹着${falcon.name}。`);
      await falcon.say_and_wait(`事不宜迟现在就出发吧！`);
      await you.say_and_wait(`比赛还没开始。`);
      await era.printAndWait(`话还没说完，${falcon.name}便挂断了视频。`);
      await falcon.say_and_wait(`接下来，要让${callname}大吃一惊！`);
      await era.printAndWait(`${falcon.name}下定了决心，向赛马场跑去。`);
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_c: (() => {
    const title = 'JBC经典赛后・过载';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`飞鹰子以绝对的优势取得了比赛的胜利。`);
      await era.printAndWait(`采取领放跑法的飞鹰子掌控了整场比赛的节奏。`);
      await era.printAndWait(
        `接下来的胜者舞台中，${falcon.sex}也使出了浑身解数。`,
      );
      await era.printAndWait(`然而——`);
      await you.say_as_passer_by_and_wait(
        '医生',
        '本身没有大碍，只是因为过于疲惫而晕过去了。',
      );
      await you.say_as_passer_by_and_wait(
        '医生',
        `您是 ${falcon.name} 的训练员吧？为什么不让${falcon.sex}好好休息？`,
      );
      await you.say_and_wait(`抱歉，都是我的错。`);
      await you.say_as_passer_by_and_wait('医生', '接下来不要再过度劳累了。');
      await you.say_and_wait(`谢谢医生。`);
      await era.printAndWait(
        `看着躺在病床之上的${falcon.name}，坐下来的${you.name}握紧了拳头`,
      );
      era.drawLine();
      await you.say_and_wait(`飞鹰子！振作一点，飞鹰子！`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「刚刚表演的时候还是活跃的样子，从升降机上下来结果就——」`,
      );
      await you.say_and_wait(`救护车！救护车在哪里？`);
      await you.say_as_passer_by_and_wait('负责人', '已经打电话叫救护车了。');
      await you.say_as_passer_by_and_wait('负责人', '总之先赶快抬到医务室里。');
      await falcon.say_and_wait([
        { content: `${callname}？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(
        `轻轻将飞鹰子背了起来，顺着负责人的指示向着医务室跑去。`,
      );
      era.printButton(`如果你有什么事的话，我也`, 1);
      await era.input();
      await falcon.say_and_wait([
        { content: `是${callname}吗？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(`似乎飞鹰子在说着什么一样。`);
      await era.printAndWait(
        `奔向医务室之后的事情记不太清了，除了看着飞鹰子被抬进救护车之外，什么都不记得了。`,
      );
      await falcon.say_and_wait(`${you.actual_name}！`);
      era.drawLine();
      await era.printAndWait(
        `眼前的${falcon.teen_sex_title}睁着大眼睛看着 ${you.name}。`,
      );
      await era.printAndWait(`充满汗水的小手紧紧抓着 ${you.name} 的衣袖不放。`);
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`视野不知何时变得一片模糊。`);
      await you.say_and_wait(`飞鹰子……实在是太好了。`);
      await era.printAndWait(`只要 ${falcon.name} 没事就好。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_42: (() => {
    const title = '水仙';
    /**
     * 我越喜欢，我对“我受不了的方式”的定义就越严苛。我去做点什么的动能就越强。
     * 什么也不做，对我就是痛苦的，内心深处就有双重辜负感——第一感觉自己辜负了自己所喜欢的对象，第二感觉辜负了自己的喜欢本身。
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`粉丝袭击事件已经过去了一周。`);
      await era.printAndWait(
        `身处于事件的风暴中心，出于对你与${falcon.name}的人生安全考虑。`,
      );
      await era.printAndWait(`学院决定暂时限制你们的外出。`);
      await era.printAndWait(`……某种意义上也是一种解脱。`);
      await era.printAndWait(
        `虽然心里一直再说忘记这件事，但自己总会不由自主的想起那副空虚的模样`,
      );
      await you.say_and_wait(`存在感焦虑吗？`, true);
      await era.printAndWait(
        `因为在任何角度之上都是零，任何机会都因为技能和资历的空白从一开始就没有入场的资格。`,
      );
      await era.printAndWait(
        `一开始或许还可以借着说不定自己不适合这行转向其他方面。`,
      );
      await era.printAndWait(`直到在新的行业再次面对一摸一样的窘境。`);
      await era.printAndWait(`回过头来只是白白虚度了几年的岁月。`);
      await era.printAndWait(
        `或许曾经一腔热血想要做出什么，但在现实面前被迫承认自己什么都做不好。`,
      );
      await era.printAndWait(
        `对于不甘心现状的人来说，证明自己存在确实比生命更加重要。`,
      );
      await era.printAndWait(
        `因为没有存在，生命也只是没有显示和输出、途耗能量的过程罢了。`,
      );
      await era.printAndWait(`如果在这个时候有个机会能站在聚光灯下呢？`);
      await era.printAndWait(`就算这件事会给你们造成巨大的伤害。`);
      await era.printAndWait(`我很抱歉，但我必须存在。`);
      await era.printAndWait(
        `因为迷茫而寻求证明自身存在的事物，主动将自己染上色彩，加入和自己色彩相同的人群之中，假装自己不是迷茫的存在。`,
      );
      await era.printAndWait(
        `虽然知道自己得出的结论可能是错的，但现在只能暂时接受这一观点说服自己。`,
      );
      await era.printAndWait(
        `如果从这个角度考虑，上周的袭击事件只是为了证明存在感的绝望之人找到了最能引起热议的话题。`,
      );
      await era.printAndWait(`只是对方恰好是${falcon.name}的粉丝罢了。`);
      await era.printAndWait(
        `看着${falcon.name}轻轻推开训练室的大门，向你勉强露出微笑时。`,
      );
      await era.printAndWait(
        `你将看向${falcon.name}的视线向下挪开，看着训练计划发呆。`,
      );
      await era.printAndWait(
        `上周的袭击虽然惊险无比，但真正造成的伤害也仅仅只是在你小腹之上划了一道口子。`,
      );
      await era.printAndWait(
        `多亏特雷森考虑到训练员在与所属${falcon.uma_sex_title}起冲突时可能会发生的暴力事件，因此采用了凯夫拉纤维作为训练员制服的一部分。`,
      );
      await era.printAndWait(
        `虽说是为了防止被愤怒的${falcon.uma_sex_title}直接踢中导致重伤，但意外的在防刺方面也有出色的性能。`,
      );
      await era.printAndWait(`怎么说呢？因祸得福？`);
      await you.say_and_wait(`飞鹰子……不，${falcon.name}。`);
      await era.printAndWait(
        `将发散的思绪重新集中到眼前的${falcon.teen_sex_title}身上。你犹豫着要不要使用这个艺名称呼${falcon.sex}。`,
      );
      await falcon.say_and_wait(`${callname}，飞鹰子没关系的。`);
      await era.printAndWait(
        `比想象之中还要坚强的${falcon.teen_sex_title}即令你高兴又感到了一丝悲哀。`,
      );
      await era.printAndWait(
        `被阴影所覆盖的${falcon.teen_sex_title}低下了头。`,
      );
      await falcon.say_and_wait(
        `飞鹰子作为${falcon.uma_sex_title}偶像，心中隐隐约约就有这种不安，不如说这种事情一定会到来。`,
      );
      await falcon.say_and_wait(
        `所以，与其是${callname}道歉，倒不如说我才是应该道歉的那一边。`,
      );
      await era.printAndWait(
        `${falcon.name}的视线上下浮动着，似乎不太擅长这样的对话。`,
      );
      await era.printAndWait(`你深吸一口气，准备继续说下去时——`);
      await falcon.say_and_wait(`飞鹰子知道的。`);
      await era.printAndWait(
        `比镜面的湖泊还要平静的${falcon.name}抬起头直视你的双眼。`,
      );
      await falcon.say_and_wait(
        `飞鹰子的粉丝们将希望寄托在了飞鹰子的身上，所以，飞鹰子不能有任何的污点存在。`,
      );
      await falcon.say_and_wait(
        `但是，飞鹰子不这么想，只要有为了成为偶像付出的汗水，然后再加上一点点的运气。`,
      );
      await falcon.say_and_wait(
        `像飞鹰子这样的${falcon.uma_sex_title}就能在舞台中心闪耀了……但是……做出这种事来不是很奇怪吗。`,
      );
      await era.printAndWait(
        `你想要逃避这双悲哀的眼睛，但无法将视线从中移开。`,
      );
      era.printButton(`飞鹰子为什么想成为偶像？`, 1);
      await era.input();
      await era.printAndWait(`逃避会有比不逃避更惨重的事情发生，。`);
      await falcon.say_and_wait(
        `……为了让像飞鹰子这样寂寞的人也能暂时忘掉孤独的痛苦。`,
      );
      await era.printAndWait(`是了，就是为了这个。`);
      await era.printAndWait(`不管如何哀叹自身的不幸，责任都是一样的。`);
      await era.printAndWait(
        `作为${falcon.uma_sex_title}偶像一帆风顺的走到了现在，已经是难以想象的奇迹般的幸运了。`,
      );
      await you.say_and_wait(
        `我知道的，就像心脏被掏空，那片黑洞洞的伤口，无论何时都在向外流血。`,
      );
      await you.say_and_wait(
        `就算有无数的鲜花与掌声否定这判断，也会在演出结束之后，从舞台之上走下时，从伤口之中流出的鲜血质问着自己。`,
      );
      era.printButton(
        `比起为了减轻罪恶感的流泪，作为偶像有更重要的事情去做`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `飞鹰子要考虑的是如何赢得接下来的比赛，以及第三年的泥地赛事。`,
      );
      await you.say_and_wait(
        `除了回应粉丝们的期待，更重要的，为了也有以泥地${falcon.uma_sex_title}偶像为目标的后辈们。`,
      );
      await you.say_and_wait(
        `就算看不到方向又如何，就算错了又怎么样！就这么带着这个伤口一直向前！就这样在赛场之上舞台中心一直闪耀下去！。`,
      );
      await you.say_and_wait(
        `让${falcon.couple_title}看看作为初代${falcon.uma_sex_title}偶像的${falcon.name}，到底能做到什么地步！`,
      );
      await era.printAndWait(
        `世界上不存在同时满足正确的方向与正确的目标而造成的成功。`,
      );
      await era.printAndWait(
        `严肃考虑的话，正确的方向与正确的目标都是不存在的。`,
      );
      await era.printAndWait(
        `然而，就算方向与目标都是错的，我们也依然做成了无数的成功，不是吗？`,
      );
      await era.printAndWait(
        `前半段旅程取得的成功都是这么过来的，又有什么理由不能证明后面的成功不也是顺着错误的方向与错误的目标而成就的呢？`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '圣诞祈愿';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`中山竞马场·有马纪念`);
      await era.printAndWait(
        `坐在观众席上的观众们所呼出的气体化作淡淡的白雾弥漫在冬日的竞马场。`,
      );
      await era.printAndWait(`今年的有马纪念比依然火热。`);
      await era.printAndWait(
        `你与${falcon.name}一起坐在观众席上，听着解说介绍接下来参与有马纪念的明星赛${falcon.uma_sex_title}们。`,
      );
      await you.say_and_wait(
        `今年有马纪念最受瞩目的参赛${falcon.uma_sex_title}是大和赤骥。`,
      );
      await falcon.say_and_wait(`大和同学吗？`);
      await era.printAndWait(
        `在嘈杂的声音下，${falcon.uma_sex_title}引以为傲的听力反而成为了一种枷锁。`,
      );
      await you.say_and_wait(`有好好保护好耳朵吗？`);
      await falcon.say_and_wait(`飞鹰子好好戴上耳套了！`);
      await era.printAndWait(
        `打上了蝴蝶结的可爱耳套避免了飞鹰子因为过于激烈的呼喊声暂时性失聪的可能性。`,
      );
      await you.say_and_wait(`那么，现在一起去找座位吧。`);
      await falcon.say_and_wait(`好！那个……${callname}`);
      await falcon.say_and_wait(`就今天的话，可以直接叫我的名字吗？`);
      await era.printAndWait(`意外的${falcon.name}不再执着于偶像的包袱了。`);
      await you.say_and_wait(`${falcon.name}，我们一起走吧。`);
      await falcon.say_and_wait(`嗯！`);
      await era.printAndWait(
        `观众们差不多都坐定了之后，你们才找到自己的座位。`,
      );
      await you.say_and_wait(`今年的有马纪念也依然盛况空前。`);
      await falcon.say_and_wait(`听说赤骥同学也出场了呢！`);
      await era.printAndWait(
        `身穿蓝白色决胜服的赛${falcon.uma_sex_title}走进了赛场。`,
      );
      await era.printAndWait(
        `最引人注目的还是${falcon.sex}那长长的棕色双马尾。`,
      );
      await falcon.say_and_wait(`赤骥同学的决胜服比在电视上看到的还要漂亮！`);
      await you.say_and_wait(`不知道这次${falcon.sex}会采取什么跑法呢？`);
      era.drawLine({ content: '胜利舞台后' });
      await era.printAndWait(`大和赤骥漂亮的取得了第一的成绩。`);
      await era.printAndWait(`舞台上的表演也让人感到振奋。`);
      await era.printAndWait(`直到结束之后，`);
      await falcon.say_and_wait(`有马纪念的舞台真大呢。`);
      await falcon.say_and_wait(`要是飞鹰子也能登上这样的舞台就好了。`);
      await era.printAndWait(
        `从手机上看到的消息是今年的观看人数超过了十一万人。`,
      );
      await era.printAndWait(`相比之下，东京大赏人数仅有两三万。`);
      await falcon.say_and_wait(
        `不过就算是这样，飞鹰子也要作为顶级偶像让泥地赛道也变得受欢迎才行！`,
      );
      await era.printAndWait(`所谓的正统偶像吗？`);
      await you.say_and_wait(
        `那么先从东京大赏开始，朝着这个目标一点一点前进吧！`,
      );
      await falcon.say_and_wait(`好！`);
      await era.printAndWait(`掏出手机扫了一眼，已经快到宵禁时间了。`);
      await you.say_and_wait(
        `现在的话回去也有些来不及了，干脆就在附近休息一个晚上吧。`,
      );
      await falcon.say_and_wait(`嗯——${callname}一定已经订好房间了吧？`);
      await you.say_and_wait(`订房间？`);
      await era.printAndWait(
        `慌忙拿出手机开始查看，才发现附近的酒店早已爆满。`,
      );
      await era.printAndWait(
        `而且在耽搁的这段时间，就算从现在跑到车站都已经赶不上最后一班回特雷森的列车了。`,
      );
      await falcon.say_and_wait(`……没，没关系的${callname}。`);
      await era.printAndWait(
        `看着你无力垂下的肩膀，${falcon.name}顿了顿从贴身小包中取出了一张卡片递给了你。`,
      );
      await falcon.say_and_wait(`差点忘了！这是给${callname}的。`);
      await era.printAndWait(`你接过印有${falcon.name}圣诞服的小卡片。`);
      await falcon.say_and_wait(`差点忘了！这是给${callname}的。`);
      await falcon.say_and_wait(
        `不是${callname}突然提醒我的话，飞鹰子差点就忘了呢……啊哈哈。`,
      );
      await era.printAndWait(
        `你看着飞鹰子腼腆的笑容，然后顺着${falcon.sex}期待的视线注意到了反面还有字。`,
      );
      era.printButton(`「谢谢。」`, 1);
      await era.input();
      await era.printAndWait(
        `略微潦草的艺术签名，以及写着「今天也要加油」的飞鹰子Q版头像。`,
      );
      await falcon.say_and_wait(`如果心情低落的话，看到飞鹰子就会高兴起来的！`);
      await era.printAndWait(`真是感激不尽。那么——`);
      await you.say_and_wait(`先去附近的旅馆询问一下有没有剩余的房间吧。`);
      await era.printAndWait(
        `虽然附近的酒店都被人提前预约好了，但也有因为各种原因而无法前来的客人，如果能抓住这个机会的话。`,
      );
      await era.printAndWait(
        `在意识到这点后，你们加快了前去探访的脚步。在询问了三家旅店的前台后打听到了一个因为临时有事取消预约而空余的房间。`,
      );
      await falcon.say_and_wait(`这样真的可以吗？`);
      await era.printAndWait(`取下发饰后将头发散开的${falcon.name}喃喃自语。`);
      await era.printAndWait(
        `毕竟是无可奈何的事情，你揉了揉${falcon.name}的小脑袋。`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `果然还在因为没赶上电车而有些沮丧吧？之后想办法补偿${falcon.sex}吧。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_c: (() => {
    const title = '醒目飞鹰';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `重振旗鼓的${falcon.name}决定稍微放缓一点自己的脚步前行。`,
      );
      await era.printAndWait(`等待着一直苦苦寻找自己的粉丝们。`);
      await era.printAndWait(`训练室`);
      await you.say_and_wait(`接下来的话，就期待着飞鹰子的努力了。`);
      await falcon.say_and_wait(
        `${callname}接下来也要在观众席上看着飞鹰子的成长吧。`,
      );
      await era.printAndWait(
        `实际上，这位${falcon.teen_sex_title}意外的坚强。`,
      );
      await era.printAndWait(
        `重新思考之后，将大部分的日程取消掉，集中于少数的事情之上。`,
      );
      await era.printAndWait(
        `重新找到方向并开始踏踏实实前进到现在也不过一个月左右。`,
      );
      await falcon.say_and_wait(`${callname}，可以帮我调整一下左边的发饰吗？`);
      await era.printAndWait(
        `看着全身镜中的${falcon.teen_sex_title}重新回到了正常状态后，一种说不出的高兴油然而生。`,
      );
      await falcon.say_and_wait(
        `虽然作为东京大赏，永远也无法与有马相比，不过——`,
      );
      await era.printAndWait(`前来观看的游客们已经远远超越了往年的人数。`);
      await falcon.say_and_wait(`至少，作为蒲公英来说，飞鹰子很幸福哦♪`);
      await era.printAndWait(`${falcon.name}轻轻关上了准备室的大门。`);
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_c: (() => {
    const title = '东京大赏典后・名为「醒目飞鹰」的泥地偶像';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}赢得了今年的冠军。`);
      await era.printAndWait(`舞台之上的${falcon.sex}像是重新蜕变了一样。`);
      await era.printAndWait(`爽朗的笑容与节奏的掌控顺利炒热了现场的气氛。`);
      await you.say_and_wait(`飞鹰子……辛苦了`);
      await era.printAndWait(
        `从舞台之上下来的${falcon.name}喘着粗气，浑身的汗水象征着作为偶像的努力。`,
      );
      await era.printAndWait(
        `即使在后台也能听到粉丝们的呼喊声如同浪潮一样经久不息。`,
      );
      await you.say_and_wait(`比想象中还要厉害呢`);
      await era.printAndWait(`作为偶像来说是最高的荣誉。`);
      await falcon.say_and_wait(
        `没有${callname}的话，飞鹰子也看不到这一切呢。`,
      );
      await falcon.say_and_wait(`与其说全是飞鹰子的功劳，不如说`);
      await you.say_and_wait(`是我们共同努力的结果。`);
      await era.printAndWait(
        `虽然身体微微颤抖，但还是坚持着向${you.name}露出灿烂笑容的飞鹰子伸出了手。`,
      );
      await falcon.say_and_wait(
        `今后的道路，也希望能和${callname}一起走下去。`,
      );
      await era.printAndWait(
        `紧紧握住着粘稠的小手的${you.name}同样带着微笑看向了${falcon.name}。`,
      );
      await you.say_and_wait(`我也从飞鹰子这里学到了很多，今后也请多指教了。`);
      await era.printAndWait(
        `对视着的彼此像是发泄着心中所有的恐惧一样笑了起来，因为他们知道——`,
      );
      await era.printAndWait(`——世界上再没有第二个人能心意相通到这个程度了。`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '神社祈愿';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`不管来多少次，这里看起来都是这么安静呢⭐`);
      await falcon.say_and_wait(
        `唔——虽然干脆让神明大人也来看飞鹰子的演唱会吧！`,
      );
      era.printButton(`犯傻也要适可而止！`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 轻轻敲了敲 ${falcon.name} 的脑袋，随着后者发出唔嗯一声，涟漪的水面又恢复了平静。`,
      );
      await era.printAndWait(
        `抬头再次看向排成长队的香客，一阵无力感袭击了全身。`,
      );
      era.printButton(`前来参拜的游客比想象之中多得多啊。`, 1);
      await era.input();
      await falcon.say_and_wait(`因为大家都要宁愿花费时间也要实现的愿望呢。`);
      await falcon.say_and_wait(
        `不过飞鹰子会给作为粉丝们（预定）的大家努力加油的！`,
      );
      await era.printAndWait(
        `看着大量人群向着同一处前进，化为本能的偶像意识让${falcon.name}一瞬间就兴奋起来。`,
      );
      await you.say_and_wait(`……至少先参拜完再说吧。`);
      await era.printAndWait(
        `看着旁边精力似乎永远花不完的${falcon.teen_sex_title}，${you.name} 稍微有些头疼。`,
      );
      await era.printAndWait(
        `既不是因为随意举办临时演唱会造成的困扰，也不是因为对接下来的泥地G1全部胜利的苛刻要求感到头疼。`,
      );
      await you.say_and_wait(`那个笑容，怎么看都是挤出来的。`, true);
      era.drawLine();
      await era.printAndWait(`漫长的等待过后，你们站在了奉纳箱前。`);
      await era.printAndWait(
        `看着近在咫尺的三女神雕像，向三女神祈求繁荣的河神传说浮现在脑海之中。`,
      );
      await era.printAndWait(`……祈求着繁荣的河神吗？`);
      await era.printAndWait(`思考在时间面前来回踱步。`);
      await falcon.say_and_wait(`三女神大人——`);
      await era.printAndWait(`身体模仿着旁边的物体做出了相同的动作。`);
      await era.printAndWait(`在这霎那之间，${you.name} 思考的结果是`);
      era.printButton(`河神祈求土地的人们健康（体力+600）`, 1);
      era.printButton(`河神祈求土地的人们勇敢（全属性+10）`, 2);
      era.printButton(`河神祈求土地的人们智慧（力量+10，技能点数+100）`, 3);
      const ret = await era.input();
      await era.printAndWait(`之后，${you.name} 的耳边传来了三女神的低语。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '飞鹰子与情人节♪';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`今年的情人节是在专门的会场举行的。`);
      await era.printAndWait(
        `虽说飞鹰子一度坚持在平时活动的场所举行，但考虑到会前来参加的粉丝以及因为好奇而前来的游客。`,
      );
      await era.printAndWait(`……又或许是为了安全考虑。`);
      await falcon.say_and_wait(`非常感谢大家参加飞鹰子的感谢庆典♪`);
      await falcon.say_and_wait(
        `为了感谢大家平时一直默默支持作为偶像的飞鹰子，这是飞鹰子昨天花了一天制作的礼物！`,
      );
      await era.printAndWait(`飞鹰子向现场的粉丝们展示了包装好的巧克力盒。`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await falcon.say_and_wait(`嗯嗯！飞鹰子感受到大家的热情了！`);
      await falcon.say_and_wait(
        `接下来也要以这样的气势好好品尝充满飞鹰子心意的巧克力呦！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `噢噢噢噢！飞鹰子！飞鹰子！`,
      );
      era.drawLine();
      await falcon.say_and_wait(`接下来也要一直支持着飞鹰子哦！`);
      await era.printAndWait(
        `直到最后一位粉丝带着巧克力满足的离开后，现场只剩下${you.name}和${falcon.name}了。`,
      );
      await era.printAndWait(`${falcon.name}背后堆积的巧克力山也分完了。`);
      await falcon.say_and_wait(`啊，等等，还有一份！`);
      await era.printAndWait(
        `${falcon.sex}从角落里取出一个包装精美的礼物盒，恐怕是布置场所时就已经准备好的吧。`,
      );
      await falcon.say_and_wait(
        `这是作为赛马娘的${falcon.name}平日里对${callname}的感谢。`,
      );
      await era.printAndWait(
        `${falcon.name}的语气比想象之中更加平淡，看不出有什么变化。`,
      );
      await era.printAndWait(`大概是反应过度了吧，最近还是好好休息才行。`);
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = '前辈与后辈（一）';
    /** @param {CharaTalk} falcon 醒目飞鹰 */
    const f = async (falcon) => {
      await falcon.say_and_wait(
        `希望大家能来赛场看朝着顶级偶像前进的飞鹰子的赛跑♪`,
      );
      await falcon.say_and_wait(`飞鹰子的话，一定会把最棒的比赛带给大家⭐`);
      await era.printAndWait(`在比赛前分发传单似乎已经成了你们之间的默契。`);
      await era.printAndWait(`${falcon.uma_sex_title}「是，是飞鹰子吗？」`);
      await era.printAndWait(
        `似乎是从地方特雷森来的${falcon.uma_sex_title}注意到了${falcon.name}。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「飞鹰子前辈！我也打算作为偶像在泥地出道！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「看到了你在东京大赏奔跑的样受到了鼓舞，所以我也希望能成为带给人们希望的偶像！」`,
      );
      await era.printAndWait(
        `带着崇拜的眼神看着${falcon.name}的${falcon.uma_sex_title}。`,
      );
      await falcon.say_and_wait(`……飞鹰子`, true);
      await falcon.say_and_wait(
        `飞鹰子一定会把那份想要成为偶像最初的感受传达到你身上的！`,
      );
      await era.printAndWait(`带着复杂情感的飞鹰子走向了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = '二月锦标后・后辈';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('胜者舞台后');
      await falcon.say_and_wait(`谢谢大家的支持！`);
      await era.printAndWait(`精彩的结束了胜者舞台后的飞鹰子回到了休息室。`);
      await you.say_and_wait(`飞鹰子，辛苦了！`);
      await era.printAndWait(`接过了矿泉水和毛巾之后，慢慢平复着澎湃的心情。`);
      await falcon.say_and_wait(`距离飞鹰子成为顶级偶像更近了一步呢！`);
      await you.say_and_wait(`如果是飞鹰子的话，一定可以做到的！`);
      await falcon.say_and_wait(`那个，${callname}，飞鹰子的话……`);
      await era.printAndWait(`咚咚咚`);
      await era.printAndWait(`不合时宜的敲门声响了起来`);
      await you.say_and_wait(`说不定是飞鹰子的粉丝来了。`);
      await era.printAndWait(`轻轻打开休息室的门。`);
      await you.say_and_wait(`抱歉，飞鹰子正在休息……你是？`);
      await era.printAndWait(
        `在发传单时见到的自称是后辈的${falcon.uma_sex_title}。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「飞鹰子前辈！祝贺你胜利了！」`,
      );
      await falcon.say_and_wait(`欸？`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「飞鹰子前辈不知道吗？对参加泥地的${falcon.uma_sex_title}们来说，飞鹰子可是闪耀着炫目光芒的存在呢！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「虽然在草地上没有适应性而转战泥地的大家已经是退无可退了……不过，是飞鹰子前辈让我们看到了前进的希望！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「所以，希望飞鹰子前辈能够一直闪耀下去！」`,
      );
      await era.printAndWait(
        `越说越激动的${falcon.uma_sex_title}紧紧握住了${falcon.name}的手。`,
      );
      await falcon.say_and_wait(`那个，飞鹰子的话`);
      await you.say_and_wait(
        `我是${falcon.name}的训练员，现在的${falcon.sex}需要休息，如果有什么想法的话请和我说。`,
      );
      await era.printAndWait(`在这一步不可退让。`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「飞鹰前辈的训练员吗？抱歉！太激动忘了这件事！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「抱歉打扰你们独处我先走了！」`,
      );
      await era.printAndWait(
        `露出尴尬表情的${falcon.uma_sex_title}姗笑着离开了休息室。`,
      );
      await you.say_and_wait(`总算离开了，飞鹰子？`);
      await falcon.say_and_wait(
        `明明飞鹰子也是在磕磕绊绊前进着的，总觉得没什么实感呢。`,
      );
      await era.printAndWait(
        `飞鹰子似乎像是想到了什么一样，露出了迷茫的表情。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_9: (() => {
    const title = '醒目飞鹰';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('火红色的天空被深蓝所劈开，随后散为漫天星尘。');
      await era.printAndWait('与平时并无不同的演唱会。');
      await era.printAndWait(
        '尽管进入第三年后关注度略微下滑，但泥地粉丝们的热情却依然不减。',
      );
      await era.printAndWait(
        '或许是个性如此鲜明的泥地偶像实在过于稀有的缘故吧。',
      );
      await era.printAndWait([
        '被粉丝们所簇拥的 ',
        falcon.get_colored_name(),
        '，具有着水晶胡萝卜一般的吸引力。',
      ]);
      await falcon.say_and_wait(`呼——大家！非常感谢！`);
      await era.printAndWait(
        `不远处的歌曲串烧进入尾声，粉丝们将喜悦的情绪传递给了站在舞台上的偶像。`,
      );
      await you.say_as_passer_by_and_wait(
        `新粉丝A`,
        `虽然只是在CD中听过，不过还是现场给人感觉更愉悦啊。`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝B`,
        `因为飞鹰子将作为马娘偶像的爱平均分给了大家，所以才会有这么大的吸引力。`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝C`,
        `虽然这么说有点看不懂气氛，不过飞鹰子是不是有点反常的样子？`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝C`,
        `之前的飞鹰子一直有种跃动的活力感，不过现在却有种奇怪的感觉？`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝D`,
        `应该与接下来的比赛有关吧，毕竟在粉丝发布会上宣布第三年的泥地赛要全部胜利。`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝D`,
        `不过就算这么苛刻的难度，飞鹰子却依然能绽放出笑容。`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝D`,
        `『或许这才是马娘偶像吧』我总是这么想。`,
      );
      await you.say_as_passer_by_and_wait(
        `新粉丝E`,
        `说起来去年不是有个粉丝袭——`,
      );
      await you.say_as_passer_by_and_wait(
        `忠实粉丝B`,
        `Stop！这种事是不能讨论的禁忌!`,
      );
      await era.printAndWait(
        `原本讨论正热烈的粉丝群体被这一盆冷水所打岔，众人纷纷没了继续讨论下去的欲望。\n\n\n`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `最后一位来到现场的粉丝离开后，${you.name}才从不远处迎接${falcon.name}。`,
      );
      await era.printAndWait(
        `面带笑容的${falcon.teen_sex_title}与${you.name}分析着今天的演唱会成功与不足之处，每当得到肯定或更好的结论，回到特雷森的小径上便传来的欢快的笑声。`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await you.say_and_wait(`诶？`);
      await falcon.say_and_wait(`虽然很遗憾。`);
      await era.printAndWait(`${falcon.name}的声音充满了平静。`);
      await falcon.say_and_wait(
        `不，没什么。像这样保持着距离，对于飞鹰子，还有${callname}才是最好的。`,
      );
      await era.printAndWait(
        `与平时鲁莽的模样不同，${falcon.name}向${you.name}露出了笑容。`,
      );
      await falcon.say_and_wait(
        `飞鹰子也反思过，或许与${callname}之间的关系确实太亲密了呢。`,
      );
      await era.printAndWait(`一种难以言喻的隔阂在你们之间展开。`);
      await falcon.say_and_wait(
        `作为马娘偶像，不平等的爱着所有的粉丝们可不行呢。`,
      );
      await you.say_and_wait(`不，倒也不至于。`);
      await era.printAndWait(`正当${you.name}开始烦恼接下来该说些什么的时候。`);
      await falcon.say_and_wait(`${callname}，这个就暂时放在你这里了。`);
      await era.printAndWait(`${falcon.name}小心翼翼的将额头上的发饰取下。`);
      await you.say_and_wait(`……为什么？`);
      await era.printAndWait(
        `因为过于震惊而思考停止，下意识的将心底的疑惑吐露出来。`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}笑着将被水粘湿的缎带递给了你。`,
      );
      await you.say_and_wait(`这不是对飞鹰子来说很珍贵的东西吗？`);
      await falcon.say_and_wait(`是的，对于飞鹰子来说是无可比拟的宝物。`);
      await falcon.say_and_wait(
        `不过飞鹰子觉得比起放在自己这边，暂时借给${callname}才最能发挥用处。`,
      );
      await you.say_and_wait(`不，不对，一定是哪里出错了。`);
      await era.printAndWait(`如同眼睁睁的看着过山车即将通过缺口的道路一样。`);
      await era.printAndWait(
        `紧紧握住的右拳却被如同老虎钳的纤细手掌强行掰开。`,
      );
      await falcon.say_and_wait(`${callname}真是木头脑袋呢`);
      await era.printAndWait(`带着略有遗憾的宛若死水的平静回复。`);
      await falcon.say_and_wait(`接下来飞鹰子要以马娘偶像的身份了。所以——`);
      await era.printAndWait(`直至深渊。`);
      await falcon.say_and_wait(`接下来请多指教了，${you.actual_name}训练员。`);
      await era.printAndWait(`原来如此，作为与过去的自己诀别之物吗。`);
      await era.printAndWait(`真好猜啊哈哈哈，答案肯定不是这个对吧。`);
      await you.say_and_wait(`哈哈，对吧，不对，不，也许。`);
      await you.say_and_wait(`${falcon.name}。`);
      await era.printAndWait(
        `像是被悬挂在教室上的白炽灯脱落时不幸在胸口处破裂时发出的悲鸣。`,
      );
      await falcon.say_and_wait(`所以，${callname}，这样就可以了。`);
      await era.printAndWait(`${falcon.name}不动声色的后退了一步。`);
      await you.say_and_wait(`开什么玩笑！`);
      await era.printAndWait(`与${falcon.name}一起经历的时间就这么否定了吗？`);
      await era.printAndWait(`为什么努力到最后是这个结果？`);
      await era.printAndWait(
        `因为愤怒而狂乱的身体想要宣泄心中的不甘与憎恨，最终却只能空虚的吐露支离破碎的话语。`,
      );
      await era.printAndWait(
        `眼前的视野化为一片模糊，口中重复着自己也不明白的对话，下意识的抗拒眼前的事实。`,
      );
      await era.printAndWait(
        `等到${you.name}从目眩感中恢复时，身旁的${falcon.teen_sex_title}已经无影无踪。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '目眩感';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`训练室\n`);
      await falcon.print_and_wait(`提不起劲。`);
      await falcon.print_and_wait(
        `或许是因为${falcon.name}决绝的态度，不知道应该从什么方面入手。`,
      );
      await falcon.print_and_wait(
        `是不是被${falcon.name}讨厌了？想要旁观${falcon.name}的演唱会都被${falcon.name}找了各种理由婉拒。`,
      );
      await falcon.print_and_wait(`但是——`);
      await falcon.print_and_wait(`因为被拒绝而更加恐慌。`);
      await you.say_and_wait(`可恶！`);
      await falcon.print_and_wait(`借着用力捶打桌面发泄心中的情绪。`);
      await falcon.print_and_wait(
        `想要告诉${falcon.sex}，告诉${falcon.sex}作为偶像追求自己的幸福这件事是没有任何问题的。`,
      );
      era.drawLine();
      await falcon.print_and_wait(`谢谢大家！`);
      await falcon.print_and_wait(
        `例行的2小时演唱会结束后，又一口气连唱了三首。`,
      );
      await falcon.print_and_wait(`只要稍作休息，就能接着一口气连唱3小时。`);
      await falcon.print_and_wait(`但是，怎么也提不起干劲。`);
      await falcon.print_and_wait(`如果被粉丝们看到这副提不起干劲的状态。`);
      await falcon.print_and_wait(`恐怕连自己也无法原谅自己吧。`);
      await falcon.print_and_wait(`只要向${callname}倾诉烦恼的话——`);
      await falcon.print_and_wait(`疲惫的身体传出了软弱的话语。`);
      await falcon.say_and_wait(
        `飞鹰子不能再让亲爱的${callname}受到危险了。`,
        true,
      );
      await falcon.print_and_wait(
        `捂住受伤的部位，矗立在血泊之中的${callname}。`,
      );
      await falcon.print_and_wait(`不行，不能再继续想下去了。`);
      await falcon.print_and_wait(
        `${falcon.name}作为${falcon.uma_sex_title}偶像已经失格。`,
      );
      await falcon.print_and_wait(`但是——`);
      await falcon.print_and_wait(
        `将心中的疑问强行压下，作为完美的${falcon.uma_sex_title}偶像不能有任何瑕疵。`,
      );
      await falcon.say_and_wait(`飞鹰子加油！`);
      await falcon.print_and_wait(
        `重新为自己打气，作为${falcon.uma_sex_title}偶像的${falcon.name}从后台回到了舞台之上。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭♪';
    /**
     * 在第三年 醒目飞鹰作为泥地的马娘偶像成功提高了泥地赛道的人气
     * 马娘A、B选择了泥地赛道 A外向 B内向
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`为了感谢粉丝平时关照而举行的感谢活动再次开始。`);
      await era.printAndWait(`然而与以往不同的是。`);
      await you.say_as_passer_by_and_wait(
        `马娘A`,
        `${falcon.name}前辈可以和我合影吗？`,
      );
      await you.say_as_passer_by_and_wait(`马娘B`, `我也想和飞鹰子合影！`);
      await era.printAndWait(`被刚刚入学的小马娘们团团围住的${falcon.name}。`);
      await falcon.say_and_wait(`没想到飞鹰子现在这么受欢迎呢……`);
      await you.say_as_passer_by_and_wait(
        `马娘A`,
        `飞鹰子前辈现在可是泥地赛道的热门明星！`,
      );
      await you.say_as_passer_by_and_wait(
        `马娘A`,
        `大家现在一提到泥地赛事就会想到${falcon.name}呢！`,
      );
      await falcon.say_and_wait(`哇——这样离飞鹰子的顶级偶像道路更近了一步呢！`);
      await you.say_as_passer_by_and_wait(
        `马娘A`,
        `还有还有，因为飞鹰子在泥地上的活跃表现收到了大量关注的泥地赛事，原本默默无闻的泥地马娘们也终于变得瞩目起来了呢！`,
      );
      await falcon.say_and_wait(
        `这也不全部都是飞鹰子的功劳，还有一直支持着飞鹰子的——大家。`,
      );
      await falcon.say_and_wait(
        `说到这里，为了向一直支持着飞鹰子的大家表达感激之情，接下来10点开始，在第二舞台的飞鹰子会举行回馈粉丝们的表演。`,
      );
      await falcon.say_and_wait(`大家一定要来参加哦？`);
      await you.say_as_passer_by_and_wait(`马娘A`, `飞鹰子！飞鹰子！`);
      era.drawLine();
      await falcon.say_and_wait(`～～～♪谢谢大家！`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `飞鹰子！飞鹰子！`);
      await falcon.say_and_wait(
        `接下来的比赛大家也要紧盯着闪耀的飞鹰子哟？那么，一二`,
      );
      await falcon.say_and_wait(`如果飞鹰子逃跑了？`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `那就只能追上去了！`);
      await falcon.say_and_wait(`要追到地平线的尽头吗～？`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `那里就是飞鹰子的大舞台！`);
      await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
      await you.say_as_passer_by_and_wait(`粉丝们`, `——去抓住大大的爱吧！`);
      await falcon.say_and_wait(
        `最强的${falcon.uma_sex_title}偶像，${falcon.name}♪今天也送到了呢⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `噢噢噢噢噢噢噢噢！飞鹰子！飞鹰子！`,
      );
      await era.printAndWait(`飞鹰子的演出大获成功。`);
      era.drawLine();
      await you.say_and_wait(`稍微在附近转转吧`, true);
      await era.printAndWait(
        `原本人烟稀少的小径，也因为访客的到来而变得拥挤。`,
      );
      await era.printAndWait(
        `虽然对想要从捷径处离开的${you.name}造成了些许困扰，但密密麻麻的人群却有一种虚幻的安全感。`,
      );
      await era.printAndWait(
        `记得有位学者曾说过，一个人能维持稳定社交的人数是150人，而进一步交流的人数只有20人左右，最终能发展成为密友的人数却只剩下可怜的5～7人左右。`,
      );
      await era.printAndWait(
        `对于他们来说，我也只是他们世界之中一个微不足道的配角，或者只是作为70亿人之一的背景板存在吧。`,
      );
      await era.printAndWait(
        `这么考虑的话，就算在大街上突然变成马娘，对大多数人也就是一个记忆不到一个月的新闻罢了。`,
      );
      await era.printAndWait(
        `像跟随着洋流游动的鱼群一样，不知不觉就来到了副舞台这边。`,
      );
      await era.printAndWait(`看着作为一日明星的马娘们闪耀的瞬间。`);
      await you.say_and_wait(`……${falcon.name}`, true);
      await era.printAndWait(
        `以顶级马娘偶像为目标一直闪耀到尽头为止的，不服输的${falcon.teen_sex_title}。`,
      );
      await era.printAndWait(
        `总觉得${falcon.name}这么急躁的拉开两者之间的界限，并没有之前自己想象中那么简单。`,
      );
      await you.say_and_wait(`${falcon.name}也有自己的苦衷。`);
      await era.printAndWait(`光是意识到这一点，就已经是一种深层的安慰了。`);
      await era.printAndWait(
        `——哪怕这安全感并不真实，但不真实的安全感也是安全感。`,
      );
      await era.printAndWait(`强迫自己认识到这一点。`);
      await you.say_and_wait(`接下来找机会好好和${falcon.name}聊聊吧。`, true);
      await era.printAndWait(`${you.name}将注意力重新集中在训练计划上。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = '倘若泪水能回到眼眶';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `打定主意后，${you.name}便强行将${falcon.name}拉了过去。`,
      );
      await you.say_and_wait(
        `抱歉，虽然这样非常失礼，不过有什么能改变的话，恐怕也只有这么做了。`,
      );
      await era.printAndWait(
        `不容分说强行拉过${falcon.sex}的手腕，带着${falcon.sex}向着目标地点前进。`,
      );
      await era.printAndWait(
        `虽然一开始受到惊吓而猛然加大力度，但骤然之间力度突然就变小了。`,
      );
      await era.printAndWait(`${you.name}的内心已经被即将实现的美好憧憬填满。`);
      await era.printAndWait(
        `想要告诉${falcon.sex}，告诉${falcon.sex}，作为偶像追求自己的幸福这件事是没有任何问题的。`,
      );
      await era.printAndWait(
        `${you.name}与${falcon.name}来到了这片空旷的草坪上。`,
      );
      await era.printAndWait(`令人难以忍受的尴尬氛围在你们之间扩散开来。`);
      await era.printAndWait(
        `不用一个人背负着这么沉重的压力，之前的事情仅仅只是一个意外，只需要将注意力。`,
      );
      await era.printAndWait(
        `如果${you.name}是${falcon.name}。这种话能说服自己吗？`,
      );
      await you.say_and_wait(`……请多信任我一点。`);
      await era.printAndWait(`飞鹰子已经不堪重负了。`);
      await falcon.say_and_wait(`……诶？`);
      await era.printAndWait(`${falcon.name}的语气之中夹杂着困惑与不解。`);
      await falcon.say_and_wait(`我一直都相信${callname}呦？`);
      await era.printAndWait(`不对，${you.name}摇了摇头。`);
      await you.say_and_wait(
        `不只是训练员与${falcon.uma_sex_title}之间，也不止粉丝与偶像之间的关系，我希望能被${falcon.name}作为最信任的人对待。`,
      );
      await falcon.say_and_wait(
        `……哪怕是飞鹰子的缘故，${callname}受到了伤害？`,
      );
      era.printButton(`我对${falcon.name}的爱不会因为这种程度受到动摇。`, 1);
      era.printButton(`我对飞鹰子的爱不会因为这种程度受到动摇。`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`……诶？`);
        await era.printAndWait(
          `像是听到了不可思议的话语，${falcon.name}的瞳孔也一瞬间放大了。`,
        );
        await falcon.say_and_wait(
          `……真讨厌……最喜欢了……${callname}怎么可以这样……`,
        );
        await falcon.say_and_wait(`这样下去的话，飞鹰子……还怎么……抱歉。`);
        await era.printAndWait(
          `像是错觉一样，随着下颚传来的剧痛，${you.name}陷入了黑暗之中。`,
        );
        await era.printAndWait(`就这样，沉沉的睡去。`);
      } else {
        await falcon.say_and_wait(`……飞鹰子吗？`);
        await era.printAndWait(`${falcon.name}的表情变得僵硬。`);
        await falcon.say_and_wait(
          `飞鹰子……果然还是飞鹰子才对呢……${callname}。`,
        );
        await era.printAndWait(`像是相当怀念一样，眯起了眼睛。`);
        await falcon.say_and_wait(
          `呐……看着飞鹰子吧。如果是为了${callname}的话，飞鹰子什么都……`,
        );
        await era.printAndWait(`黯淡火燃的眼神一瞬间陷入死寂之中。`);
        await falcon.say_and_wait(
          `不对！这样的飞鹰子才不是${callname}喜欢的那个包容着所有粉丝们的${falcon.uma_sex_title}偶像！`,
        );
        await era.printAndWait(`罪恶感像针一样刺入了胸口。`);
        await falcon.say_and_wait(
          `舞台之上的飞鹰子是所有粉丝们的，像这样……这样的行为是不可能被允许的。`,
        );
        await falcon.say_and_wait(
          `飞鹰子因为抛弃了作为${falcon.uma_sex_title}偶像的原则，结果${callname}像是破烂的布娃娃一样被随意丢弃在血泊之中`,
        );
        await falcon.say_and_wait(
          `可是，明明已经发誓绝对会将爱平等的分给所有的粉丝，可是……看到${callname}的时候，飞鹰子还是忍不住像倾注更多的爱。`,
        );
        await falcon.say_and_wait(
          `飞鹰子不会将爱全部倾注在${callname}身上，而将爱倾注在${callname}身上的时候，飞鹰子也就不是飞鹰子了。`,
        );
        await era.printAndWait(
          `比起单纯的失败，在最大的努力下遇到的两难抉择，更令人感到悲哀。`,
        );
        await falcon.say_and_wait(`……如果是这样的话。`);
        await era.printAndWait(
          `像是错觉一样，随着下颚传来的剧痛，${you.name}陷入了黑暗之中。`,
        );
        await era.printAndWait(`就这样，沉沉的睡去。`);
      }
      era.drawLine();
      await era.printAndWait(`${you.name}又一次站在了这片草地上。`);
      await era.printAndWait(
        `废墟夹缝间的草地，从远处天空飘来的积雨云，那段令人怀念的美好时光。`,
      );
      await era.printAndWait(`以及旁边的${falcon.teen_sex_title}。`);
      await era.printAndWait(`是啊，就是这种地方，才适合好好交流。`);
      await you.say_and_wait(`飞鹰子——`);
      await era.printAndWait(`飞鹰子没有任何回应。`);
      await you.say_and_wait(`飞鹰子？`);
      await era.printAndWait(
        `${you.name}试探性的触碰着身旁的${falcon.teen_sex_title}。`,
      );
      await era.printAndWait(`体温正常，从手指传来的肌肤触感也没有区别。`);
      await you.say_and_wait(
        `仔细观察的话，好像有一条细细的银线在控制着${falcon.sex}一样。`,
      );
      await era.printAndWait(`就像是人偶一样。`);
      await you.say_and_wait(`如果顺着银线寻找的话，说不定就能找到操纵者。`);
      await era.printAndWait(`拇指与食指握住这条细线，顺着这条细线的来源——`);
      await era.printAndWait(`一阵剧烈的强光晃得${you.name}睁不开眼。`);
      await era.printAndWait(`眼前的草地变成了舞台现场。`);
      await era.printAndWait(
        `自己正站在舞台中央，不，确切的说是${falcon.name}站在舞台中央。`,
      );
      await era.printAndWait(
        `密密麻麻的观众跟随着${you.name}所熟悉的歌曲按节拍摇摆着。`,
      );
      await you.say_and_wait(`演唱会吗？但为什么违和感这么重。`);
      await era.printAndWait(`从刚才开始，空气之中就有一缕若有若无的腥味。`);
      await era.printAndWait(`察觉到这究竟代表着什么的时候毛孔瞬间竖立。`);
      await you.say_and_wait(`飞鹰子？`);
      await era.printAndWait(`被称为飞鹰子的人偶转向了${you.name}，然后——`);
      await era.printAndWait(`左眼右眼左耳右耳左鼻右鼻口腔之中暗红色的液体`);
      await era.printAndWait(
        `视觉触觉嗅觉味觉听觉理性感性混杂黏糊糊的一团\n\n`,
      );
      await you.say_and_wait(`哈啊哈啊哈啊。`);
      await era.printAndWait(
        `猛地从噩梦之中惊醒，额头上的汗珠，被汗水打湿的衬衫，无不再提醒刚才的一切不过是场噩梦。`,
      );
      await you.say_and_wait(`刚才的是？`);
      await era.printAndWait(`用力将液体咳出，嘴巴传来了一阵苦涩的腥味。`);
      await era.printAndWait(
        `虽然很想回忆起之前发生了什么，但稍微思考就头疼欲裂。`,
      );
      await era.printAndWait(`只能暂且作罢，转而观察起周围的环境。`);
      await era.printAndWait(
        `承载着自己的沙发，沙发右侧的办公桌，办公桌后方的墙壁上用相框装潢的合照。`,
      );
      await you.say_and_wait(`好像回到了训练室？`);
      await era.printAndWait(
        `记忆消失的前一刻，自己在干什么，晕倒过后又是谁把自己送回来的。`,
      );
      await era.printAndWait(`下意识将手伸进裤子口袋之中确认着手机。`);
      await era.printAndWait(`却碰到了更加软绵绵的东西。`);
      await you.say_and_wait(`这是？`);
      await era.printAndWait(`像是用来固定头发的，经过精心保养的缎带。`);
      await era.printAndWait(`如果飞鹰子逃走了？`);
      await you.say_and_wait(`……原来如此。`);
      await era.printAndWait(`答案已经不言而喻。`);
      await era.printAndWait(`将小心保存的缎带系在手腕上。`);
      await era.printAndWait(`${you.name}决定\n`);
      era.printButton(`追赶${falcon.name}`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `不知已经过去了多久，商业街、百货商场、河边草地。`,
      );
      await era.printAndWait(
        `即使是向亲近的粉丝与好友询问，得到的答案都是否定。`,
      );
      await you.say_and_wait(`哈啊……哈啊……哈啊……`);
      await era.printAndWait(
        `就这么放弃的话，从飞鹰子身边逃走的话，果然还是不甘心。`,
      );
      await era.printAndWait(`常言道，君子不立于危墙之下。`);
      await era.printAndWait(
        `即使是在东京这样的大都市，在深夜徘徊也是一种极其危险的行为。`,
      );
      await era.printAndWait(`之所以会发生这种事情，自己恐怕也脱不了干系。`);
      await era.printAndWait(
        `但是，这不是责怪自己的理由，因为自己没有自己想象中那么睿智，自己也没想象中的自己那般充满勇气。`,
      );
      await era.printAndWait(
        `自己只有这点智慧，自己只有这种程度的勇气，这已经被不理想的现实所证明。`,
      );
      await era.printAndWait(
        `如果明白这点的话，后悔恐怕是在后悔自己明明充满智慧与勇气却失败了。`,
      );
      await era.printAndWait(`有很大可能走向认知失调的风险。\n`);
      await era.printAndWait(`不知不觉回到了熟悉的草地上。`);
      await era.printAndWait(
        `正值春夏交替之时，深夜的草地比想象之中更加寒冷。`,
      );
      await era.printAndWait(`${you.name}不禁打了一个寒颤。`);
      await era.printAndWait(
        `正值春夏交替之时，深夜的草地比想象之中更加寒冷。`,
      );
      await era.printAndWait(
        `潮湿的空气混杂着泥土的芳香，月光照耀下的废墟将这片草地团团包围。`,
      );
      await era.printAndWait(`就像是拉起了帷幕一样。`);
      await era.printAndWait(
        `而期待的${falcon.teen_sex_title}——${falcon.name}就在这片草地之上。\n`,
      );
      await era.printAndWait(
        `只要向${falcon.sex}道歉，然后好好交流，一切误会都会化解。`,
      );
      await falcon.say_and_wait(`诶?${callname}怎么这么快……`);
      await era.printAndWait(`舞台的主角带着惊讶的表情看着${you.name}。`);
      await era.printAndWait(
        `是因为从昨天下午开始就没有吃饭的缘故吗?此刻摇摇欲坠的${falcon.sex}就像是苍白的人偶一样脆弱。`,
      );
      await falcon.say_and_wait(
        `……不，没关系的呦？飞鹰子只是稍微有些烦恼罢了，等到明天，飞鹰子还会回到原来的——`,
      );
      await era.printAndWait(`就这么双腿并拢跌坐在了地上，痛苦的咳嗽着。`);
      era.printButton(`飞鹰子！`, 1);
      await era.input();
      await era.printAndWait(
        `想好的话语全部抛到了脑后，${you.name}奔向了${falcon.teen_sex_title}。`,
      );
      await you.say_and_wait(`忍耐一下，这一切马上就会结束。`);
      await era.printAndWait(`${falcon.name}拉住了${you.name}。`);
      await era.printAndWait(
        `比起双手所感知的寒冷，那明亮的双眼却吸引了${you.name}。`,
      );
      await falcon.say_and_wait(`飞鹰子……没有责怪${callname}的意思……只是。`);
      await falcon.say_and_wait(
        `比起飞鹰子的幸福……如果${callname}能更加幸福的话……`,
      );
      await falcon.say_and_wait(
        `抱歉……连粉丝一号的幸福都无法保证，作为偶像真是失格了呢……`,
      );
      await falcon.say_and_wait(`……对不起。`);
      await era.printAndWait(
        `在奋力吐出积压于心头的痛苦后，${falcon.name}直挺挺的倒在了地上。`,
      );
      await era.printAndWait(
        `虽然心中已有猜测，直到${falcon.sex}亲口说出为止自己才能确认，${falcon.name}心底真正希望的是什么。`,
      );
      await era.printAndWait(`对不起，发生了这种事情。`);
      era.printButton(`轻轻背起${falcon.name}`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}将${falcon.teen_sex_title}轻轻背起，确认着与${falcon.sex}一同前行的重量。`,
      );
      await era.printAndWait(`来时的道路比想象中还要漫长。`);
      await era.printAndWait(
        `——但对${falcon.name}来说，或许是人生中最重要的成年礼。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_18: (() => {
    const title = '日常';
    /**
     * 脑海之中闪现与训练员之间的过往
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`被大幅的震动所惊醒。`);
      await era.printAndWait(`尚且模糊的视线之中，隐隐约约有橙色的色块移动。`);
      await era.printAndWait(`揉了揉发胀的双眼，想要将自身的注意力集中。`);
      await era.printAndWait(`却与同样迷茫的${falcon.teen_sex_title}对视。`);
      await falcon.say_and_wait(`啊……`);
      await era.printAndWait(
        `${falcon.teen_sex_title}似乎也是刚刚醒来，疑惑于陌生的天花板。`,
      );
      await you.say_and_wait(`下午好，${falcon.name}。`);
      await era.printAndWait(
        `似乎意识到了什么，瞬间放大的瞳孔以及刷的一下竖立起来的耳朵。`,
      );
      await falcon.say_and_wait(`——诶？诶！为什么我会在${callname}的房间里？`);
      await era.printAndWait(
        `得益于两人之间的深厚羁绊，${falcon.name}在疑惑之后没有向${you.name}发起攻击而是大声询问。`,
      );
      await you.say_and_wait(
        `抱歉，虽然是我自作主张，已经将外宿许可证交给寮长确认过了。`,
      );
      await falcon.say_and_wait(`这样……${callname}对飞鹰子……`);
      await you.say_and_wait(`不对！我也开始跟不上飞鹰子跳脱的思路了。`);
      await you.say_and_wait(
        `因为我突然意识到未经许可就擅自离开特雷森去医院而被小报记者拍到的话，我会直接上花边新闻的头条。`,
      );
      await you.say_and_wait(
        `不论是我还是飞鹰子的名誉，恐怕都会受到严重的挫伤。`,
      );
      await you.say_and_wait(
        `所以我在得到医生没有大碍需要好好休息的回复后，便以${falcon.name}在巡回过程中因为过度劳累昏倒作为理由向理事长申请了外宿许可。`,
      );
      await you.say_and_wait(
        `虽然是深夜，但手纲小姐能这么迅速的回复，实在是帮了大忙。`,
      );
      await you.say_and_wait(`说起来，飞鹰子现在觉得怎么样?`);
      await era.printAndWait(
        `就这么默默听着${you.name}讲述的${falcon.name}从床上站了起来。`,
      );
      await falcon.say_and_wait(`抱歉，给${callname}添了这么大的麻烦。`);
      await era.printAndWait(`然后转向${you.name}深深的鞠躬。`);
      await you.say_and_wait(
        `抱歉，如果我能多对${falcon.name}信赖一点的话，飞鹰子也不会陷入这种境地。`,
      );
      await era.printAndWait(`脑海中闪过了${falcon.name}悲伤的笑容。`);
      await you.say_and_wait(
        `如果我能抑制住心中焦虑的话，飞鹰子就不会受到这种折磨。`,
      );
      await era.printAndWait(`于是${you.name}也深深的低下了头。`);
      await falcon.say_and_wait(
        `诶！明明是飞鹰子犯下的错误，${callname}没必要这样。`,
      );
      await era.printAndWait(
        `想要抬起头阻止${you.name}的${falcon.name}与${you.name}的脑袋发生了碰撞。`,
      );
      await era.printAndWait(
        `${you.name}的鼻子似乎因为受到了重击而传来了酥麻感。`,
      );
      await falcon.say_and_wait(`啊，${callname}。`);
      await you.say_and_wait(`嗯？怎么了？`);
      await era.printAndWait(
        `${you.name}下意识的摸了摸鼻子，鲜红色的液体顺着鼻腔流入了嘴巴。`,
      );
      await era.printAndWait(
        `……不知为何，苦涩的铁锈味却给予了${you.name}一种安心的感觉。`,
      );
      await falcon.say_and_wait(`${callname}请坐下来！`);
      await era.printAndWait(
        `${falcon.name}不容分说便让${you.name}坐在了床上，${you.name}将餐巾纸撕成两半后折叠堵住了正在流血的鼻孔。`,
      );
      await you.say_and_wait(`……哈哈哈。`);
      await era.printAndWait(
        `看着病人与看护者立场反转的一幕，实在忍不住笑了出来。`,
      );
      await era.printAndWait(
        `尚未扎稳的餐巾纸因为震动而在空中划过了一道红色的丝线，下一刻，沾湿了${you.name}的训练员外套。`,
      );
      await falcon.say_and_wait(`诶诶诶！`);
      await era.printAndWait(`如往日一般，手忙脚乱的日常再次启动。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '闲暇日';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     * @param {string} callname_4 丸善斯基对玩家的称呼
     */
    const f = async (falcon, maru, you, callname, callname_4) => {
      await era.printAndWait(
        `正处于春与夏交织的季节，从天空照射下来的光线也多了一份炎热。`,
      );
      await era.printAndWait(
        `但对此刻的${you.name}来说，却正好处于不冷不热的舒适区间。`,
      );
      await era.printAndWait(
        `……从事件的波浪之中奋力挣扎，才在告一段落后勉强幸存。`,
      );
      await era.printAndWait(
        `看着在商业街来来往往的行人们，总有一种不切实际的感觉。`,
      );
      await era.printAndWait(
        `他们是不是也是和${you.name}一样在磨难之中挣扎后，同样勉力幸存下来的同道呢？`,
      );
      await era.printAndWait(
        `虽然从上次的磨难中存活了下来，要是下一次却失败了呢？`,
      );
      await era.printAndWait(
        `一旦失败的话，一切就全部归零了，没有一丝一毫是能留到那个地方（伊甸）的。`,
      );
      await era.printAndWait(`人们为什么不会害怕呢？`);
      await era.printAndWait(
        `不，因为在死的面前，人们才会意识到生的幸福实际是被赋予的一种特权。`,
      );
      await era.printAndWait(
        `因为我们总有一天会无牵无挂的离开世界，所以才要加倍的珍惜活下来的每一天。`,
      );
      await falcon.say_and_wait(`${callname}久等了♪`);
      await era.printAndWait(
        `换上了便装的${falcon.name}踩着小碎步出现在了${you.name}的眼前。`,
      );
      await era.printAndWait(
        `将头发自然的放下，若不是以其独特的发声，恐怕与人群之中来来往往的小${falcon.uma_sex_title}没有区别。`,
      );
      await era.printAndWait(
        `虽说${you.name}打算将保管于${you.name}的缎带交还给${falcon.name}，却以「还是放在${callname}这边比较好哦，妈妈也同意了」的理由拒绝了。`,
      );
      await era.printAndWait(
        `……虽说自己不是那种会对小${falcon.uma_sex_title}感兴趣的类型，但看向对方的时候，内心之中却涌现了一种难以言喻的感情。`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `对方丝毫没有意识到${you.name}对${falcon.sex}的复杂感情，依然带着那份灿烂的笑容看着${you.name}。`,
      );
      await era.printAndWait(
        `因为是节假日的缘故，站在十字路口的你们不时被奇怪的目光所打量着。`,
      );
      await you.say_and_wait(`先去附近的百货大楼逛逛吧！`);
      await era.printAndWait(
        `一直犹豫下去会把宝贵的休息时间全部浪费掉，${you.name}便伸手指向了有着巨大广告牌的大厦。`,
      );
      await falcon.say_and_wait(`诶！我记得那边新开了一家很有名气的甜品店！`);
      await falcon.say_and_wait(`事不宜迟，现在就出发吧！`);
      await era.printAndWait(`${falcon.name}拉着${you.name}的手走向了甜品店。`);
      era.drawLine();
      await era.printAndWait(
        `从服务员处得到了菜单，看着琳琅满页的甜品照片，${you.name}有些犹豫。`,
      );
      await falcon.say_and_wait(`${callname}喜欢什么呢？`);
      era.printButton(`水果巴菲感觉就不错！`, 1);
      era.printButton(`有点想尝尝看巧克力口味的新品！`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`飞鹰子也很喜欢那种酸甜口感的巴菲呢。`);
        await falcon.say_and_wait(
          `在口中释放出的寒冷与甜蜜气息，就像是和${callname}第一次见面时的场景呢♪`,
        );
      } else {
        await falcon.say_and_wait(`飞鹰子也想尝尝看这种口味的巧克力呢♪。`);
        await falcon.say_and_wait(`……⭐`);
        await era.printAndWait(
          `……不知道为什么${falcon.sex}偷偷捂着嘴笑了起来。`,
        );
        await era.printAndWait(`是思维跳跃到我不知道的维度了吗。`);
      }
      await maru.say_and_wait(`嗨！下午好！没想到能在这里遇见飞鹰子。`);
      await falcon.say_and_wait(`下午好⭐丸善前辈！`);
      await era.printAndWait(`不远处独自一人品尝甜品的丸善斯基向你们搭话。`);
      await maru.say_and_wait(`因为最近美眉我得知了最近泥地比赛很流行的样子。`);
      await maru.say_and_wait(
        `所以为了追逐着潮流，美眉我便观看了正在泥地赛道上大放异彩的飞鹰子的比赛。`,
      );
      await maru.say_and_wait(
        `因为之前选择了泥地的后辈们向美眉我请教过跑法的缘故而专门去看过比赛。`,
      );
      await maru.say_and_wait(
        `不过像飞鹰子这样奋力闪耀的偶像，美眉我总有一种后辈不知什么时候就超过了前辈的复杂情感呢。`,
      );
      await you.say_and_wait(
        `毕竟是飞鹰子，${falcon.sex}在的话就一定会让泥地赛道变得更加受欢迎。`,
      );
      await falcon.say_and_wait(`……！`);
      await maru.say_and_wait(
        `说起来接下来是打算参战帝王赏吧？美眉我也会到现场去加油的！`,
      );
      await falcon.say_and_wait(`到时候一定会让丸善前辈看到后辈精彩的表现！`);
      await era.printAndWait(`露出笑容的丸善斯基将视线转向了${you.name}。`);
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('love:4') > 90
      ) {
        await you.say_and_wait(`这么巧啊，丸善斯基。`);
        await era.printAndWait(`丸善斯基只是面带微笑的搅拌着手中的咖啡。`);
        await you.say_and_wait(`……啊。`);
        await maru.say_and_wait(
          `啊拉，训练员君？今天把训练场地改到甜品店了是打算进行智力训练吗？`,
        );
        await maru.say_and_wait(
          `呵呵～姐姐我也想一边吃着水果巴菲迅速提高智力呢。`,
        );
        await era.printAndWait(`转弯抹角的暗示这不是训练员应该做的事情吗。`);
        await era.printAndWait(
          `虽说与${falcon.name}之间的关系稍稍稍微有那么一点点接近，但自认为还是处于良好的发展态势。`,
        );
        await falcon.say_and_wait(`久等了⭐${callname}……还有丸善斯基前辈。`);
        await era.printAndWait(
          `似乎察觉到了两人之间的微妙关系，从长长的队伍中奔跑过来的${falcon.name}渐渐放慢了脚步。`,
        );
        await maru.say_and_wait(`小飞鹰中午好♪`);
        await era.printAndWait(
          `虽然打算迅速从修罗场脱离的${you.name}，却被丸善斯基用气势死死的钉在了原地。`,
        );
        if (era.get('love:46') > 90) {
          await falcon.say_and_wait(
            `就算是丸善前辈的话？这个巧克力也不能让给你的呦♪`,
          );
          await maru.say_and_wait(`现在的后辈比想象之中还要可爱呢♪`);
          await maru.say_and_wait(
            `如果不是擅长的赛道不同，真想和小飞鹰比一场呢♪`,
          );
          await falcon.say_and_wait(
            `即使是丸善前辈的话，飞鹰子也不会认输的哦♪`,
          );
          await maru.say_and_wait(`不觉得稍微有些失礼了吗？`);
          await falcon.say_and_wait(`没有哦？飞鹰子可没有任何恶意哦？`);
          await falcon.say_and_wait(
            `只是觉得丸善前辈差不多也要到了该去结婚的年纪了，为什么还在这里呢？`,
          );
          await maru.say_and_wait(
            `说起来飞鹰子不是作为偶像的吗？就这样和${callname}坐在一起不怕有绯闻出现吗？`,
          );
          await maru.say_and_wait(`${callname_4}，你怎么想的呢？`);
          await falcon.say_and_wait(
            `不会的哦？如果出现了，干脆直接宣布和${callname}结婚就好了♪对吧，${callname}？`,
          );
          await era.printAndWait(
            `游仞有余的丸善斯基看着露出了认真态势的${falcon.name}，无形的气浪让周围的人纷纷开始远离。`,
          );
          era.printButton(`什么也不想看`, 1);
          await era.input();
          await era.printAndWait(
            `在化为战场的正中央，带着呆滞的表情看着两人发力的${you.name}活像鸵鸟把头埋进了沙子里。`,
          );
        } else {
          await falcon.say_and_wait(
            `既然丸善斯基前辈也在场，不如就在这里举行一场突击演唱会吧⭐`,
          );
          await era.printAndWait(
            `面对这种突如其来的状况，${falcon.name}依然踏入了这片场所。`,
          );
          await maru.say_and_wait(`最近流行的是万物都可作为舞台的潮流吗？`);
          await falcon.say_and_wait(`是飞鹰子流哦⭐`);
          await falcon.say_and_wait(
            `虽然小铃鹿、小波旁还有风神不在现场稍微有些可惜……不过就当做逃马sister成员之间的一次活动吧！`,
          );
          await maru.say_and_wait(
            `不管是比赛还是演唱会，姐姐我都要马力全开了！`,
          );
          await era.printAndWait(
            `丸善斯基向${you.name}眨了眨眼，便协助着${falcon.name}准备起了临时舞台的搭建。`,
          );
          await era.printAndWait(`一场风波就这么消散了。`);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_teio_sho: (() => {
    const title = '帝王赏前的准备';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name} 即将挑战帝王赏的消息传遍了整个马推。`,
      );
      await era.printAndWait(
        `被飞鹰子的奔跑与歌唱所吸引的人在开闸购票时就将票抢购一空。`,
      );
      await era.printAndWait(
        `与其说是泥地选择了${falcon.name}，不如说是${falcon.name}成就了泥地。`,
      );
      await era.printAndWait(`休息室里`);
      await falcon.say_and_wait(`……飞鹰子还是有点紧张呢`);
      await era.printAndWait(
        `与以往不同，${falcon.name}面对即将开始的比赛出现了迷茫。`,
      );
      await falcon.say_and_wait(
        `如果失误的话，不知道支持着的粉丝和后辈们会不会对我失望。`,
      );
      await you.say_and_wait(
        `作为飞鹰子粉丝同时也是${falcon.name}的训练员，我相信`,
      );
      await you.say_and_wait(`飞鹰子一定没问题的！`);
      await falcon.say_and_wait(`如果是${callname}的话，飞鹰子会努力的！`);
      await era.printAndWait(`${you.name}看了一眼时间，差不多该出发了。`);
      await you.say_and_wait(`那么，接下来就等着你的好消息了，飞鹰子！`);
      await falcon.say_and_wait(
        `好！接下来就让后辈${falcon.uma_sex_title}看看作为前辈的偶像是怎么做的！`,
      );
      await era.printAndWait(`作为前辈偶像的飞鹰子走向了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  teio_sho_win: (() => {
    const title = '帝王赏后・闪耀的偶像';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, maru, you, callname) => {
      await era.printAndWait(`${falcon.name}漂亮的取得了一着。`);
      await era.printAndWait(`在胜者舞台的场上也展现得。`);
      await era.printAndWait(
        `对于飞鹰子来说，距离成为顶级偶像的道路已经越来越近了。`,
      );
      await falcon.say_and_wait(`${callname}，飞鹰子表演得怎么样？`);
      await you.say_and_wait(`飞鹰子与专业偶像也相差不多了。`);
      await you.say_and_wait(`不过比起来的话，还是我家的飞鹰子最可爱了。`);
      await falcon.say_and_wait(`嗯！飞鹰子也觉得自己很可爱！`);
      await maru.say_and_wait(`飞鹰子很厉害呢！`);
      await era.printAndWait(`不知何时，丸善斯基站在了休息室门口。`);
      await falcon.say_and_wait(`诶？丸善前辈为什么在这里？`);
      await maru.say_and_wait(
        `嗯！看到飞鹰子努力奔跑的样子，我可是超～感动呢！`,
      );
      await maru.say_and_wait(
        `带着想要闪闪发光的梦想，在草地上一路疾驰，然后在胜者舞台上展现最美的自己。`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}我也被这种热情点燃了呢！`,
      );
      await falcon.say_and_wait(`没，没有丸善前辈说的这么厉害啦……`);
      await maru.say_and_wait(`嗯——说起来，如果有机会的话，一起练习一下吧？`);
      await falcon.say_and_wait(`那个，飞鹰子`);
      await maru.say_and_wait(
        `泥地的话，${maru.elder_sibling_sex_title}我会努力克服这点小缺陷的♪`,
      );
      await maru.say_and_wait(`那么，到时候再见了♪`);
      await falcon.say_and_wait(
        `……嗯！能和丸善前辈一起的话，说不定飞鹰子也能学到更多的东西！`,
      );
      await era.printAndWait(`就这样，帝王赏完美结束了。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '合宿开始！';
    /**
     * 节拍 场景 序列 幕 故事
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await you.say_and_wait(`终于到了。`);
      await era.printAndWait(
        `因为${falcon.name}在马推上发布的演唱会通知而一口气涌入的粉丝们。`,
      );
      await era.printAndWait(`点赞，耐心回答问题，对不友好的评论进行删除。`);
      await era.printAndWait(
        `在颠簸的大巴车上一直看手机的结果就是离目的地还有1/4路程时一股反胃感袭来。`,
      );
      await era.printAndWait(`好不容易到达目的地后立刻吐到了昏天黑地。`);
      await era.printAndWait(`虽然借由此切身体会到了自己活着的鲜明存在感。`);
      await era.printAndWait(
        `不过对于${falcon.name}来说，这也是一个难得的从不停的奔波之中得以休息的日子。`,
      );
      await you.say_and_wait(`简直就跟度假一样。`, true);
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`${falcon.name}正四处寻找着${you.name}。`);
      await you.say_and_wait(`我在这里！`);
      await era.printAndWait(`尽可能大声地回应着对方。`);
      await era.printAndWait(
        `在得到了回应的${falcon.name}啪塔啪塔地踩着沙子向${you.name}的方向跑了过来。`,
      );
      await falcon.say_and_wait(`${callname}⭐接下来的训练也请多——`);
      await falcon.say_and_wait(`哎哎？${callname}没事吧？`);
      await era.printAndWait(`看着${you.name}因为难受而苍白的脸色。`);
      await you.say_and_wait(`只是处理粉丝回复太久有点晕车了，不是什么大事。`);
      await falcon.say_and_wait(`不对!`);
      await era.printAndWait(
        `不像是马娘偶像风格的${falcon.name}大声的反驳着。`,
      );
      await falcon.say_and_wait(
        `${callname}是飞鹰子在马娘偶像道路上一起前行的同伴!如果${callname}因为状态不好倒下了，那么飞鹰子的训练也会大打折扣的。`,
      );
      await era.printAndWait(`从两人身边路过的马娘与训练员纷纷侧目。`);
      await you.say_and_wait(`抱歉，下次不会这么做了。`);
      await era.printAndWait(
        `或许是周围汇聚的目光越来越多，亦或是${you.name}道歉的缘故，${falcon.name}的态度缓和了。`,
      );
      await falcon.say_and_wait(`飞鹰子这么说也有点过分了呢，抱歉。`);
      await falcon.say_and_wait(
        `——如果${callname}跑到了飞鹰子看不到的地方的话`,
      );
      await era.printAndWait(`${falcon.name}低下了头不知在想着什么。`);
      await you.say_and_wait(`飞鹰子？`);
      await falcon.say_and_wait(
        `没什么啦⭐飞鹰子在夏季合宿的计划是——让沙滩在内的所有游客全部成为飞鹰子的粉丝！`,
      );
      await falcon.say_and_wait(
        `为此，接下来的庙会上，飞鹰子要俘获前来观看演出的游客的心！`,
      );
      await you.say_and_wait(`不要忘记训练！`);
      await era.printAndWait(
        `似乎是从这份目标之中得到了活力的缘故，${falcon.name}变得闪闪发光。`,
      );
      await falcon.say_and_wait(`真是的～这个也不会落下的啦⭐`);
      await era.printAndWait(
        `看着眼前的${falcon.name}又恢复到了原来的状态，${you.name}也放下了心。`,
      );
      era.printButton(`嗯——接下来先绕着沙滩跑十圈热下身吧！`, 1);
      await era.input();
      await falcon.say_and_wait(`好♪`);
      await era.printAndWait(`${you.name}与飞鹰子之间第三年的夏季合宿开始了。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = '庙会';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`离沙滩不远的小镇上\n`);
      await era.printAndWait(
        `因为靠近沙滩而利用地势举行着一年一度的夏日庆典。`,
      );
      await era.printAndWait(
        `而作为最近冉冉升起的沙地之星而受到邀请的${falcon.name}正站在舞台的中央。`,
      );
      await falcon.say_and_wait(`～～～♪呼——谢谢大家⭐`);
      await era.printAndWait(
        `舞台之下的观众们向舞台之上的偶像献上了掌声与喝彩。`,
      );
      await you.say_and_wait(`果然还是在观众席上才是最棒的选择。`, true);
      await era.printAndWait(
        `听到了${you.name}想要在观众席上观看${falcon.name}表演的意愿时，${falcon.name}似乎有什么想说的话，但当${you.name}想要询问时却被敷衍过去了。`,
      );
      await era.printAndWait(
        `尽管如此，每当歌曲结束后，在与粉丝互动的视线交互中，一股若有若无的视线一直紧紧看着${you.name}。`,
      );
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`总觉得有些寂寞。`);
      await era.printAndWait(
        `倒不是说${falcon.name}的表演一般，青涩的原石在经历的雕琢下已经露出了璀璨的钻石。`,
      );
      await era.printAndWait(
        `仅仅只是有些，有一点怀念遇到${falcon.name}时纯粹的模样。`,
      );
      await era.printAndWait(`现在的${falcon.sex}已经出色的成为了一名偶像。`);
      await era.printAndWait(`已经足够了。`);
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`心中的不安却并没有因此消散。`);
      await era.printAndWait(`就像是忽略了什么。`);
      await era.printAndWait(`那双悲伤的眼睛。`);
      await you.say_as_passer_by_and_wait(`游客A`, `呜啊！`);
      await era.printAndWait(
        `随着一声惨叫，暗红色的液体泼溅到了${you.name}的身上。`,
      );
      await you.say_and_wait(`唔啊啊啊啊`);
      await era.printAndWait(
        `不幸之中的万幸，暗红色的液体经过时间的流逝热度已经消退大半，体感只是微热。`,
      );
      await era.printAndWait(`剩下的烦恼沾染了大半汤汁的衬衫如何清洗,以及`);
      await you.say_and_wait(`唔啊啊啊！`, true);
      await era.printAndWait(`就像是无数蚂蚁沿着眼睑在角膜周围四处乱爬。`);
      await you.say_and_wait(`餐巾纸，水，或者什么能够帮到我的——`);
      await era.printAndWait(`向着四周胡乱挣扎的双手总算握住了湿润的毛巾。`);
      await you.say_and_wait(`非常抱歉，接下来我会补偿你的！`);
      await era.printAndWait(
        `说着连自己都觉得过分的话语，不管三七二十一就往脸上招呼。`,
      );
      await era.printAndWait(`周围似乎起了很大的骚动。`);
      await you.say_and_wait(
        `……不会是把那位女士的衣服作为毛巾撕扯下来了吧？`,
        true,
      );
      await era.printAndWait(`刺痛的触觉结束之后，猛地睁开眼。`);
      await you.say_and_wait(`抱歉，我会设法补偿你的……${falcon.name}。`);
      await era.printAndWait(`映入眼帘的是缺失了右腕布料的偶像服。`);
      await era.printAndWait(
        `于是舞台之上的${falcon.teen_sex_title}来到了舞台之下。`,
      );
      era.drawLine();
      await era.printAndWait(
        `想办法安抚好了骚动的人群后，${you.name}与${falcon.name}走在了回宿舍的道路上。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`不知该如何开口。`);
      await era.printAndWait(
        `第一次见到这么慌张的${falcon.name}，就像是得知自己要与${falcon.name}永远分别一样。`,
      );
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(`飞鹰子是不是搞砸了……`);
      await falcon.say_and_wait(
        `明明大家都是千里迢迢从很远的地方专门支持飞鹰子的。`,
      );
      await era.printAndWait(`在冲动过后，开始懊悔的${falcon.name}。`);
      await you.say_and_wait(
        `并不会，粉丝们的大家看到这么焦急的飞鹰子，心里也一定跟着焦急起来。`,
      );
      await you.say_and_wait(
        `当他们看到飞鹰子安心的表情之后，一定也会安心下来的。`,
      );
      await era.printAndWait(
        `${falcon.name}似乎有什么话想说出口，但最终还是保持沉默。`,
      );
      await era.printAndWait(
        `你们与沉浸在欢乐氛围之中的人群背道而行，直到走到一个人烟稀少的地段，${falcon.name}终于开口了。`,
      );
      await falcon.say_and_wait(`${callname}，飞鹰子是不是很自私呢？`);
      await falcon.say_and_wait(
        `明明说着要平等的爱着每一个粉丝，不过天平却总会向一方倾倒。`,
      );
      await falcon.say_and_wait(
        `飞鹰子最终还是违约了呢……即使是对自己应负责之事(偶像之责)还是继续违约了。`,
      );
      await era.printAndWait(
        `思索再三后，${falcon.name}还是将心中的话语说出了口。`,
      );
      await era.printAndWait(
        `${you.name}心中明白，这是${falcon.sex}为之痛苦的迷茫。`,
      );
      await you.say_and_wait(`飞鹰子，你知道训练员这个职业吗？`);
      await era.printAndWait(`片刻的思考过后，${you.name}努力保持着平静开口。`);
      await falcon.say_and_wait(
        `——训练员需要充分发掘负责马娘的潜力，对赛马娘的身体以及心理健康进行看护。最重要的是，尽可能的帮助马娘们在赛马娘的道路上走得更远。`,
      );
      await you.say_and_wait(
        `是的，能做到飞鹰子说的这些，已经算是合格的训练员了。`,
      );
      await you.say_and_wait(`……不过，距离更闪耀的训练员还有一段距离。`);
      await falcon.say_and_wait(`……就像飞鹰子追求的偶像一样吧。`);
      await you.say_and_wait(
        `除了意识到上述所说的职责，我们更关心失败了怎么办。`,
      );
      await you.say_and_wait(
        `除了水平与天赋同样高到让人仰望的传奇训练员，或者运气好到能让其他人嫉妒的天选之子，剩余的凡人都会面对这个严肃的课题。`,
      );
      await you.say_and_wait(
        `成功的时候或许因为胜利的事实而不违背自己的承诺，而失败的时候，我们又该如何面对向${falcon.couple_title}夸下海口的自己呢？`,
      );
      await you.say_and_wait(
        `尽管我们已经尽了最大的努力，仅仅只是运气不好罢了。`,
      );
      await falcon.say_and_wait(`这样吗……`);
      await you.say_and_wait(`虽然很遗憾，不过我们必须承担失败带来的后果。`);
      await you.say_and_wait(
        `最轻的可能只是预期收益降低，自身受到外界质疑，更严重的可能会被迫辞职，甚至有生命风险。`,
      );
      await you.say_and_wait(
        `面对这一课题，优秀的训练员会给出不同的答案。在我这里，我的答案是`,
      );
      await you.say_and_wait(
        `任何不容我自身选择的意外，背后最终包含的是对我的好意。出了意外，哪怕直接的当下我失败了，这份失败会在最后好过成功。`,
      );
      await you.say_and_wait(`所以我才甘愿承受这份责任。`);
      await you.say_and_wait(
        `我们都要为自己的选择负责，偶像其实与训练员殊途同归。`,
      );
      await you.say_and_wait(`所以，在明白你的责任后，按照你的想法去实现吧。`);
      await era.printAndWait(
        `接下来的这段道路之中，${falcon.name}的步伐轻快了许多。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿结束';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}的第三年夏季合宿结束了。`);
      await falcon.say_and_wait(`向着顶级偶像的道路一刻不停的前进♪`);
      await era.printAndWait(
        `从庆祝夏季合宿结束的宴会上借口喝多离开的${you.name}遇到了同样从宴会上离开的${falcon.teen_sex_title}。`,
      );
      await you.say_and_wait(
        `作为知名偶像的飞鹰子像这样离开宴会还真是少见呢。`,
      );
      await falcon.say_and_wait(
        `毕竟一号粉丝不在的话，偶像活动也会突然黯淡许多呢。`,
      );
      await era.printAndWait(`原来如此。`);
      await you.say_and_wait(`飞鹰子已经不害怕孤独了吗？`);
      await falcon.say_and_wait(
        `……说实话还是很害怕，但已经没有以前那么害怕了。`,
      );
      await falcon.say_and_wait(`毕竟${callname}一直在我身边呢。`);
      await you.say_and_wait(`……这就是飞鹰子的决定吗。`, true);
      await era.printAndWait(
        `${falcon.name}的身体向前微倾，右手食指竖在嘴唇中心，眨了眨右眼。`,
      );
      await falcon.say_and_wait(
        `而且，${falcon.name}想和最喜欢的${callname}一起登上世界上最大的舞台！`,
      );
      await falcon.say_and_wait(
        `等到那个时候……飞鹰子……不对，${falcon.name}什么都没说哦⭐`,
      );
      await era.printAndWait(
        `从${falcon.sex}掩饰不住的笑容来看，是想到了幸福的事情吧。`,
      );
      await era.printAndWait(
        `为此努力的每一天，都是为了将这个梦想实现而度过的。`,
      );
      await falcon.say_and_wait(`踏上的道路，周围渐渐能看到一望无际的草原了。`);
      await you.say_and_wait(`为了成为顶级偶像，接下来的比赛也不能松懈！`);
      await falcon.say_and_wait(`不对！`);
      await era.printAndWait(`${falcon.name}说出了令${you.name}吃惊的话。`);
      await you.say_and_wait(`飞鹰子的意思是？`);
      await falcon.say_and_wait(
        `就跟${callname}之前说过的一样，每个人都要为自己的选择负起责任。`,
      );
      await falcon.say_and_wait(
        `尽管飞鹰子将心中的天平偏向了${callname}，但飞鹰子作为${falcon.uma_sex_title}偶像的责任一直没变。`,
      );
      await falcon.say_and_wait(
        `不论过去多久，听到过承诺的人们是否已经忘记，它依然没有改变。`,
      );
      await falcon.say_and_wait(
        `所以，直到飞鹰子因为过度劳累而倒下之前，飞鹰子都要肩负起作为${falcon.uma_sex_title}偶像的责任，直到退役为止。`,
      );
      await falcon.say_and_wait(`这就是飞鹰子想出的答案。`);
      await era.printAndWait(
        `身旁的${falcon.teen_sex_title}露出了释然的表情，${falcon.sex}已经觉悟了。`,
      );
      era.printButton(`请让我作为你身边最近的人见证这一切。`, 1);
      await era.input();
      await falcon.say_and_wait(`呵呵呵。`);
      await era.printAndWait(
        `${falcon.name}突然笑了起来，一直笑到眼泪都流了出来。`,
      );
      era.printButton(`飞鹰子？`, 1);
      await era.input();
      await era.printAndWait(`然后紧紧的抱住了${you.name}。`);
      await falcon.say_and_wait(`谢谢你，${callname}。`);
      await era.printAndWait(`${falcon.name}不再孤单了。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_37: (() => {
    const title = '前辈与后辈';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(
        `在仔细考虑过后，${you.name}将育马场经典赛、冠军杯以及东京大赏典这三场比赛列入了第三年下半的计划之中。`,
      );
      await era.printAndWait(`要在下半年的三场之中全部获胜，压力可想而知。`);
      await era.printAndWait(
        `所谓的顶级偶像，就是要在这种艰难的场合给予众人希望。`,
      );
      await era.printAndWait(`咚咚咚。`);
      await you.say_and_wait(`我不记得有邀请过谁前来。`);
      await era.printAndWait(
        `${falcon.name}会直接推门进来，${minoru.name} 会事先在手机上发送消息，其他${falcon.uma_sex_title}的话，一般都是自己主动联系。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `好久不见，${callname}！`,
      );
      await era.printAndWait(
        `栗色的${falcon.uma_sex_title}推门进来，甚至因为过于激动不小心把门把手卸了下来。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `啊，抱歉！我实在太激动了！`,
      );
      await era.printAndWait(`总觉得似曾相识的样子。`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `${callname}还认识我吗？`,
      );
      await era.printAndWait(`脑海之中重复着将浮现的名字再次划去的工作，`);
      await era.printAndWait(
        `如果是${falcon.name}在这里的话，应该能一眼看出。`,
      );
      await era.printAndWait(
        `毕竟${falcon.sex}记得每一名观看过演唱会的粉丝长相。`,
      );
      await you.say_and_wait(
        `演唱会？${falcon.uma_sex_title}，河边的草地。`,
        true,
      );
      await you.say_and_wait(
        `说起来，确实遇到过一名${falcon.uma_sex_title}。`,
        true,
      );
      await you.say_and_wait(
        `你是去年立志成为偶像的那名${falcon.uma_sex_title}吧。`,
      );
      await era.printAndWait(
        `虽然体格与身高的变得几乎看不出来，过往的神态却依稀可见。`,
      );
      await you.say_and_wait(`你也迎来本格化了呢。`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `不愧是${callname}！一开始还有点担心${callname}认不出来呢，看来是我想多了。`,
      );
      await era.printAndWait(
        `看来自己的猜测是正确的，得到想要回答的${falcon.uma_sex_title}得意的竖起了耳朵。`,
      );
      await you.say_and_wait(
        `挫折，疑惑，不解，汗水与泪水只能算是基本，有时，信念比生命还要重要。`,
      );
      await you.say_and_wait(`虽然我对偶像之道的了解也不多，希望能帮助到你。`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `训、${callname}，你到底经历了什么？`,
      );
      await era.printAndWait(
        `被${you.name}的平凡的经历吓得躲在沙发角落瑟瑟发抖的${falcon.uma_sex_title}。`,
      );
      await era.printAndWait(
        `真是失礼，明明只是把自己的经历没有修饰的说了出来而已。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `是飞鹰子前辈！`,
      );
      await era.printAndWait(`在解释了之前的那一幕后。`);
      await falcon.say_and_wait(`不过是偶像的日常罢了。`);
      await era.printAndWait(`面带笑容的${falcon.name}语气没有任何变化。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_38: (() => {
    const title = '铭记的镜子';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await you.used_to_say_and_wait(`${falcon.uma_sex_title}偶像？`);
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title}偶像的概念似乎有些笼统啊。`,
      );
      await you.used_to_say_and_wait(
        `如果是积极参与比赛，并且闪闪发光的话，所有在赛场上奔驰的${falcon.uma_sex_title}都是一样的。`,
      );
      await you.used_to_say_and_wait(
        `作为${falcon.uma_sex_title}偶像的特殊之处又在哪里呢？`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `第一次训练的时候，${callname}向我提出了这个问题。`,
      );
      await falcon.print_and_wait(`……当时是怎么回答的？`);
      await falcon.print_and_wait(`只是随口敷衍过去了吧。`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`即使是现在，我也给不出正确的答案。`);
      await falcon.print_and_wait(
        `想要，想要借着青春期特有的敏感与细腻交织而成的可爱作为卖点。`,
      );
      await falcon.print_and_wait(
        `就这样与粉丝一同成长，最后作为见证者与被见证者敲开顶级偶像的殿堂大门。`,
      );
      await falcon.print_and_wait(
        `不管在河岸下作为志愿者清理垃圾，还是辛苦的突击演出。`,
      );
      await falcon.print_and_wait(
        `通过贯彻贴近生活的偶像这一概念，向粉丝们传递出自己的成长。`,
      );
      await falcon.print_and_wait(
        `将痛苦与失意悄然藏起，带上作为万众期待的偶像这一面具。`,
      );
      await falcon.print_and_wait(`……过程也没有想象中那么辛苦。`);
      await falcon.print_and_wait(`在草地之上的表演，同样也是一种训练。`);
      await falcon.print_and_wait(
        `回忆着电视上、舞蹈老师、访谈杂志上学到的经验。`,
      );
      await falcon.print_and_wait(`节拍接着节拍，动作接着动作,一刻接着一刻。`);
      await falcon.print_and_wait(`直到将表演锻炼成像是与生俱来的天赋为止。`);
      await falcon.print_and_wait(`一舞已毕。`);
      await falcon.print_and_wait(`睁开双眼然后迎接无人的草地。`);
      await falcon.print_and_wait(`睁开双眼然后迎接一人的草地。`);
      await falcon.print_and_wait(`睁开双眼然后迎接数人的草地。`);
      await falcon.print_and_wait(`睁开双眼然后迎接盛大的舞台。\n`);
      await falcon.print_and_wait(
        `曾经作为知识的东西融化成了本能，本能又凝结出了新的知识。`,
      );
      await falcon.print_and_wait(
        `不断进行着融化与凝结的这条直到生命尽头的河流，在外者看来，就像是璀璨的钻石一样。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`育马场经典赛马上就要开始了。`);
      await falcon.say_and_wait(`……${callname}。`);
      await falcon.say_and_wait(
        `如果能再给飞鹰子一点时间的话，飞鹰子一定可以早点察觉到。`,
      );
      await falcon.say_and_wait(`不对！${callname}一定不会喜欢现在的飞鹰子！`);
      await falcon.say_and_wait(
        `${callname}期待的飞鹰子一定是那个永远充满活力，一直向前的完美偶像！`,
      );
      await falcon.say_and_wait(
        `所以无论赛场还是舞台之上，飞鹰子都要一直闪耀下去，直到夺去所有人的目光为止！`,
      );
      era.drawLine();
      await falcon.print_and_wait(`纵使已经被名为负罪感的高墙所隔阂。`);
      await falcon.print_and_wait(
        `粉丝袭击的源头是天平的失衡，是无视了粉丝愿望的偶像末路。`,
      );
      await falcon.print_and_wait(
        `是会随着偶像的不断成长，不断施加压力的恶意。`,
      );
      await falcon.print_and_wait(
        `再继续下去，迟早有一天会因为承受不住这份巨大的压力而像被高温加热后的岩石一样，遇到微小的契机，便会轰然炸开。`,
      );
      await falcon.print_and_wait(`或许不断选择错误的我明白的唯一正确的事情。`);
      await falcon.print_and_wait(`——啊啊，如果时间再多一点就好了。`);
      await falcon.print_and_wait(
        `如果能给我更多的时间的话，我就能处理好这一团乱麻。`,
      );
      await falcon.print_and_wait(`然而这是不可能的事。`);
      await falcon.print_and_wait(
        `只要还在逃避必需完成的义务，未来就不会到来。`,
      );
      await falcon.print_and_wait(
        `既然选择了偶像的道路，无论如何都要回应来自粉丝的依赖与祈祷。`,
      );
      await falcon.print_and_wait(`作为偶像尽忠职守到最后一刻。`);
      await falcon.print_and_wait(`所以，不能再逃避下去了。`);
      await falcon.print_and_wait(`第一次看沙地比赛时，我记得`);
      era.printButton(
        `追赶的${falcon.uma_sex_title}超越了领头的${falcon.uma_sex_title}`,
        1,
      ); //恋心超越责任
      era.printButton(`领头的${falcon.uma_sex_title}踏出了关键的一步`, 2); //责任压倒恋心
      // te为2选项 ge为1选项
      const ret = await era.input();
      if (ret === 1) {
        await falcon.print_and_wait(
          `——没错，追赶的${falcon.uma_sex_title}超越了领头的${falcon.uma_sex_title}。`,
        );
        await falcon.print_and_wait(
          `沙地的${falcon.uma_sex_title}们所要面对的环境更加恶劣。`,
        );
        await falcon.print_and_wait(`拼尽全力，放空一切，为了超越前方的目标。`);
        await falcon.print_and_wait(`尽管如此，这还不够。`);
        await falcon.print_and_wait(
          `若不在一开始就抢到优势位置，败者将承受沙土的考验。`,
        );
        await falcon.print_and_wait(
          `决胜服被沙地弄脏，姣好的面容被沙土覆盖。不管从什么角度来看，都称不上是闪耀的姿态。`,
        );
        await falcon.print_and_wait(
          `眼睛被浸入的沙子深深刺痛，急促的呼吸被沙土打乱节奏。`,
        );
        await falcon.print_and_wait(
          `没有思考的充裕，连自身的存在都忘记，就这么超越对方。`,
        );
        await falcon.print_and_wait(`这就是竞争的意义。`);
      } else {
        await falcon.print_and_wait(
          `领头的${falcon.uma_sex_title}踏出了关键的一步。`,
        );
        await falcon.print_and_wait(
          `好像是去年，小铃鹿教导草地赛的时候，不会交给其他人的风景……好像是这个来着？`,
        );
        await falcon.print_and_wait(`领先的风景吗……有些怀念呢。`);
        await falcon.print_and_wait(
          `在全国巡演时，与地方${falcon.uma_sex_title}之间的比赛。`,
        );
        await falcon.print_and_wait(`比起草地赛事，还是沙地赛的印象更加深刻。`);
        await falcon.print_and_wait(`……`);
        await falcon.print_and_wait(`除了皋月赏。`);
        await falcon.print_and_wait(
          `随着歌曲节奏变换的光线，台下的荧光棒随着节奏变换的光线组成的海洋，远远望去就像是层次分明的潮汐。`,
        );
      }
      await falcon.print_and_wait(
        `……啊啊……脑海之中又浮现出了${callname}的模样。`,
      );
      await falcon.print_and_wait(`明明不能逃避。`);
      await falcon.print_and_wait(`纵使泪流满面。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_40: (() => {
    const title = '天空、大地以及生活在这里的我们';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`公园\n`);
      await era.printAndWait(`在飞鹰子的提议下，你们来到了公园的一处草坪上。`);
      await era.printAndWait(
        `转眼之间秋天已经过去一半了，一路上的行人也纷纷穿起了外套。`,
      );
      await you.say_and_wait(`飞鹰子不觉得冷吗？`);
      await era.printAndWait(
        `看着比的飞鹰子，你实在忍不住好奇的向${falcon.sex}询问。`,
      );
      await falcon.say_and_wait(`飞鹰子不觉得冷哦？`);
      await era.printAndWait(
        `说起来也是，毕竟${falcon.uma_sex_title}比起人类体温更高一点。`,
      );
      await you.say_and_wait(`真是有点羡慕飞鹰子呢。`);
      await falcon.say_and_wait(`${callname}突然之间在说什么呢？`);
      await you.say_and_wait(
        `像飞鹰子这么开朗可爱的${falcon.uma_sex_title}偶像，作为训练员真是幸运。`,
      );
      await falcon.say_and_wait(
        `诶～～？真是的！${callname}突然之间这么说，飞鹰子。`,
      );
      await you.say_and_wait(`啊，到了。`);
      await era.printAndWait(
        `公园一处靠近湖边的草坪之上，随处可见的旅人与正在嬉戏的孩童。`,
      );
      await you.say_and_wait(`来湖边的游客比想象之中还多啊。`);
      await era.printAndWait(
        `你 一边从带来的背包之中取出亲手制作的便当，一遍随口问道。`,
      );
      await falcon.say_and_wait(`来湖边的游客很大一部分都是情侣呢。`);
      await era.printAndWait(`飞鹰子乖巧的坐在了铺好的毯子上看着你。`);
      await you.say_and_wait(
        `也许在马推上作为著名的情侣打卡圣地而出名了吧。给。`,
      );
      await falcon.say_and_wait(`毕竟情侣们只有休息日才会有时间出来玩呢——`);
      await era.printAndWait(`飞鹰子接过了准备好的胡萝卜蜂蜜特饮。`);
      await falcon.say_and_wait(`……情侣吗？`, true);
      await you.say_and_wait(`飞鹰子怎么想的呢？`);
      await falcon.say_and_wait(`诶？`);
      await era.printAndWait(
        `被 ${you.name} 看穿了的飞鹰子不小心用力过猛，盖子划过一条优美的弧线牢牢的嵌在了不远处的树干。`,
      );
      await falcon.say_and_wait(`……${callname}看好了！呀啊！`);
      await era.printAndWait(
        `趁着 ${you.name} 还没反应过来，飞鹰子飞奔向了盖子所在的大树。`,
      );
      await falcon.say_and_wait(`情侣吗？我和${callname}`, true);
      await era.printAndWait(
        `还没反应过来的时候，飞鹰子飞奔向了盖子所在的大树\n\n。`,
      );
      await era.printAndWait(`小小的插曲结束后，两人重新坐了下来。`);
      await era.printAndWait(
        `${you.name} 享用着飞鹰子亲手制作的便当，然后接过一旁递过来的饮料。`,
      );
      await era.printAndWait(
        `顺着冰凉的水流划过喉咙，像是满足了一样打了一个饱嗝。`,
      );
      await you.say_and_wait(`嗯——稍微有点甜呢。`);
      await falcon.say_and_wait(`毕竟是用草莓汁浇在了便当之上呢。`);
      await falcon.say_and_wait(
        `说起来，闪耀同学试吃的时候也给出了差不多的评价呢。`,
      );
      await era.printAndWait(
        `如果是荣进闪耀在旁边指导的话，偏甜也是可以理解吧。`,
      );
      await you.say_and_wait(`原来是这样啊，毕竟是蛋糕——`);
      await falcon.say_and_wait(`不对！这是飞鹰子自己想出来的！`);
      await era.printAndWait(`飞鹰子突然变大的声音引得路人纷纷侧目。`);
      await falcon.say_and_wait(`啊，对不起。突然之间激动起来了。`);
      await falcon.say_and_wait(`这样子可不像飞鹰子呢⭐哈哈哈。`);
      await era.printAndWait(`意识到了什么，飞鹰子低着头脸红得几乎滴出水来。`);
      era.printButton(`谢谢你，飞鹰子`, 1);
      await era.input();
      await era.printAndWait(`你 轻轻抚摸着飞鹰子的小脑袋。`);
      await falcon.say_and_wait(`飞鹰子已经不是小孩子了。`);
      await era.printAndWait(
        `虽然嘴巴上这么抗议着，但却没有激烈的反抗，就这样任凭你 抚摸着。`,
      );
      await you.say_and_wait(`飞鹰子不太适应这样的场合吗？`);
      await falcon.say_and_wait(
        `虽然也没有那么在意别人的目光呢，不过还是多少有一点。`,
      );
      await falcon.say_and_wait(`……稍微有点在意${callname}的评价呢。`);
      await era.printAndWait(`最后的声音慢慢变得听不清了。`);
      await you.say_and_wait(
        `与舞台之上的飞鹰子相比，果然这样的飞鹰子也很可爱呢。`,
      );
      await you.say_and_wait(`飞鹰子闪耀的样子也很可爱。`);
      await falcon.say_and_wait(`飞鹰子也没有想象之中那么闪耀呢。`);
      await falcon.say_and_wait(
        `遇到${callname}之前，飞鹰子每天都在为偶像活动还有逼近死线的挂科奔波呢。`,
      );
      await falcon.say_and_wait(
        `有的时候，在终于能闲下来休息时，总会忍不住想着。`,
      );
      await falcon.say_and_wait(`说不定飞鹰子走的路是错的呢。`);
      await era.printAndWait(`凝视着手中茶杯的飞鹰子。你 正打算开口安慰`);
      await falcon.say_and_wait(`不过经过这段时间后，我也释然了呢。`);
      await falcon.say_and_wait(
        `像这样一直错误的道路上一路奔跑过来的，才是飞鹰子嘛！`,
      );
      await falcon.say_and_wait(`说起来，偶像就是这样才对吧？`);
      era.printButton(`为其他人带来希望，引导更多的人？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `不对！是鼓励更多内心渴望走上这条道路的人，给予的勇气！`,
      );
      await falcon.say_and_wait(
        `走上这条道路的人们，一定比飞鹰子更加聪明，更加努力，所以会更加的闪耀！`,
      );
      era.printButton(`只是缺少了这份勇气？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `这就是飞鹰子为什么作为${falcon.uma_sex_title}偶像的原因！`,
      );
      await falcon.say_and_wait(
        `正因为飞鹰子不太聪明，所以鼓起勇气帮助更多的人！`,
      );
      await falcon.say_and_wait(
        `看到那些被飞鹰子的舞蹈感染到的${falcon.uma_sex_title}们走上飞鹰子走过的道路后。`,
      );
      await falcon.say_and_wait(`飞鹰子才会由衷的感到开心。`);
      await falcon.say_and_wait(`就像是，被电视上的偶像所激励的我一样呢。`);
      await era.printAndWait(
        `聚精会神诉说着的飞鹰子，才意识到自己一直端着的茶水变凉了。`,
      );
      era.printButton(`飞鹰子很伟大呢。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `才没有呢！飞鹰子也只是普通的${falcon.uma_sex_title}偶像罢了。`,
      );
      await falcon.say_and_wait(
        `只是一个觉得这么做会很开心才去做的普通小${falcon.uma_sex_title}罢了。`,
      );
      await falcon.say_and_wait(`而且`);
      await falcon.say_and_wait(
        `不过只是一个连告白都不敢的最差劲的${falcon.uma_sex_title}偶像罢了。`,
        true,
      );
      era.printButton(`而且？`, 1);
      await era.input();
      await falcon.say_and_wait(`诶嘿嘿⭐`);
      await era.printAndWait(
        `之后的谈话便在湖泊染上第一缕金色的光辉后结束了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = '育马场经典赛·偶像的第一步';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`作为偶像之路上的一个考验，育马场经典赛开始了。`);
      await era.printAndWait(
        `听说${falcon.name}将要参加的消息传来，经典赛的观众数立刻增加一大截。`,
      );
      await era.printAndWait(`已经能与一些冷门的草地G1相比了。`);
      await era.printAndWait(`而对于飞鹰子来说。`);
      await falcon.say_and_wait(
        `对于飞鹰子这样的普通${falcon.uma_sex_title}来说，到面前为止的胜利全部都是奇迹般的出现。`,
      );
      await falcon.say_and_wait(`即使是这样，飞鹰子依然希望能继续闪耀下去。`);
      await you.say_and_wait(
        `那么，接下来就放手去做吧。飞鹰子，按照自己的想法描绘这副画卷！`,
      );
      await you.say_and_wait(`顶级${falcon.uma_sex_title}偶像是由自己定义的！`);
      await era.printAndWait(
        `即使是在准备室中，外面震耳欲聋的呼喊声也隐隐约约传了进来。`,
      );
      await falcon.say_and_wait(`即使是这样，飞鹰子依然希望能继续闪耀下去。`);
      await falcon.say_and_wait(`接下来要好好看着飞鹰子闪耀的样子！`);
      await era.printAndWait(`尚显稚嫩的偶像走向了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = '育马场经典赛后・再次起跑！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await you.say_as_passer_by_and_wait(
        `粉丝们`,
        `飞鹰子！飞鹰子！唔噢噢噢噢噢噢噢！`,
      );
      await era.printAndWait(
        `冲过终点的一瞬间,全场的观众都为沙地冉冉升起的明星喝彩。`,
      );
      await you.say_and_wait(`飞鹰子比想象中还要闪耀呢。`);
      await falcon.say_and_wait(
        `非常感谢你的支持，接下来也要多多支持飞鹰子哦！`,
      );
      await you.say_and_wait(`嗯——接下来是胜者舞台吧。`);
      await era.printAndWait(
        `${you.name}将今年的育马场赛事制作的CD放入录像机之中。`,
      );
      await era.printAndWait(
        `虽然没能到现场亲眼见证${falcon.name}冲线的瞬间,不过通过当事人绘声绘色的描述着当时的情景,也能多少弥补遗憾。`,
      );
      await falcon.say_and_wait(`接下来就是飞鹰子强烈推荐的胜者舞台时间⭐`);
      await era.printAndWait(`录像带中的${falcon.name}独自走向了胜者舞台。`);
      era.drawLine({ content: '胜者舞台结束后' });
      await falcon.say_and_wait(`今年的目标就只剩下东京大赏了。`);
      await era.printAndWait(
        `飞鹰子的表演比想象之中还要精彩，粉丝们排山倒海般的气浪几乎将舞台掀翻。`,
      );
      await era.printAndWait(
        `尽管比起在现场观看缺少了临场感,不过${you.name}也很满足了。`,
      );
      await you.say_and_wait(`距离顶级偶像的话现在只剩一步之遥了哦？`);
      await falcon.say_and_wait(`离顶级偶像还差得远呢。`);
      await you.say_and_wait(`虽是这么说。`);
      await era.printAndWait(
        `${you.name}将录像暂停后,重新看向${falcon.name}。`,
      );
      await you.say_and_wait(`飞鹰子比想象中还要坚强呢。`);
      await falcon.say_and_wait(`……飞鹰子没有想象中这么坚强哦?`);
      await you.say_and_wait(`为了今年压轴的东京大赏，现在还是好好休息吧。`);
      await you.say_and_wait(`毕竟飞鹰子。`);
      await era.printAndWait(`一旁的${falcon.name}传出了均匀的呼吸声。`);
      await era.printAndWait(
        `这段时间的准备一直都是${falcon.name}独自完成的缘故，积累下来的疲惫也终于到极限了吧。`,
      );
      await you.say_and_wait(`现在的话，就让${falcon.sex}稍微睡一会吧。`, true);
      await you.say_and_wait(`谢谢你，${falcon.name}。`);
      await era.printAndWait(
        `轻轻将${falcon.name}放在柔软的沙发上，然后将身上的训练员服披在${falcon.sex}身上。`,
      );
      await era.printAndWait(
        `或许是因为摆动的幅度过大，${falcon.name}的耳朵动了动，身体也换了更加舒服的姿势。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_cham_cup_s: (() => {
    const title = '冠军杯·泥泞的顶级偶像！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`其二，冠军杯开始了。`);
      await era.printAndWait(`经过经典赛的准备之后，接下来面对的是冠军杯。`);
      await era.printAndWait(
        `与之前费尽心思发放传单不同，得知${falcon.name}即将参战的粉丝们自发购买了座位。`,
      );
      await falcon.say_and_wait(`飞鹰子比想要之中还要受欢迎呢。`);
      await era.printAndWait(`不如说外面的骚动声隐隐传来了巨大的压迫感。`);
      await you.say_and_wait(`强打着精神出来的吗？`);
      await era.printAndWait(
        `微微颤动的双手，面对无形之间的压力，飞鹰子的话。`,
      );
      await falcon.say_and_wait(`接下来的比赛，飞鹰子也会加油的！`);
      await you.say_and_wait(`祝君武运昌隆……如果不舒服的话来找我。`);
      await era.printAndWait(`稍微停顿之后，${falcon.name}打开了准备室的门。`);
      await era.printAndWait(
        `在震耳欲聋的欢呼声之中，${falcon.name}走上了赛场。`,
      );
    };
    f.title = title;
    return f;
  })(),
  cham_cup_win_s: (() => {
    const title = '冠军杯后・目标——东京大赏';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}轻松获得了冠军杯的胜利。`);
      await era.printAndWait(`在舞台之上的${falcon.name}变得更加闪耀。`);
      await era.printAndWait(`休息室中`);
      await falcon.say_and_wait(`${callname}——接下来只剩下东京大赏了。`);
      await you.say_and_wait(`我相信飞鹰子一定可以做到的。`);
      await era.printAndWait(`平静的说出了自己的心情。`);
      await era.printAndWait(`与其说是鼓励，不如是在坦述自己的确信。`);
      await falcon.say_and_wait(`——现在的飞鹰子稍微有些紧张呢。`);
      await era.printAndWait(
        `是啊，面对即将踏出的最后一步，在结果到来之前的这段时间里是最紧张的时刻。`,
      );
      await you.say_and_wait(
        `${
          falcon.name
        }是我见过最坚强的${falcon.uma_sex_title}了，所以我希望你的梦想能够实现。`,
      );
      await era.printAndWait(
        `轻轻抚摸着${falcon.name}的小脑袋，比起一开始的抗拒，现在的${falcon.sex}看上去十分平静。`,
      );
      await falcon.say_and_wait(`现在的心情稍微有些平复了，谢谢。`);
      await you.say_and_wait(`既然平静下来的话，找个地方吃一顿庆祝一下吧？`);
      await falcon.say_and_wait(`有点想去尝尝看烤肉呢，接下来一起去吃吧⭐`);
      await era.printAndWait(
        `在享受了美食之后，赶在宵禁前将${falcon.name}送回了宿舍。`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `似乎打算说着什么的${falcon.name}，稍微犹豫了一下。`,
      );
      await you.say_and_wait(`怎么了？`);
      await falcon.say_and_wait(`什么都没有哦⭐`);
      await era.printAndWait(`${falcon.teen_sex_title}捂着嘴偷笑着跑走了。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_45: (() => {
    const title = '莫桑石';
    /**
     * 纵使失约，纵使内心陷入疯狂，
     * 既然作为偶像就要认真回应粉丝的期待
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(
        `送走${callname}后，醒目飞鹰独自坐在训练室的沙发上。`,
      );
      await falcon.print_and_wait(`将天真无邪的面具摘下，享受着宁静的瞬间。`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`特雷森的夜晚比想象中还要安静。`);
      await falcon.say_and_wait(`说起来`);
      await falcon.print_and_wait(
        `等到东京大赏结束之后，与${callname}之间的契约就结束了。`,
      );
      await falcon.print_and_wait(
        `虽然根据情形可以向理事长申请续约，但不知为什么，总是提不起干劲。`,
      );
      await falcon.print_and_wait(`缺了什么，有什么地方自己还没有察觉到的。`);
      await falcon.print_and_wait(`从胸口传来的刺痛感迫使着我寻找这一答案。`);
      await falcon.say_and_wait(`今天的月亮，比想象中还要美呢。`);
      await falcon.print_and_wait(
        `从训练室窗户透过的仿佛轻轻触碰就会撕碎的朦胧月光。`,
      );
      await falcon.print_and_wait(
        `视野顺着白色丝绸的延展的方向落下，幻想的尽头是冰冷的黑色固体。`,
      );
      await falcon.print_and_wait(
        `……因为使用过于频繁而提前完成了使命的麦克风${you.adult_sex_title}吗。`,
      );
      await falcon.say_and_wait(`你 也完成了自己的使命呢。`);
      await falcon.print_and_wait(`黑色固体默不作声的看着自己。`);
      await falcon.say_and_wait(`啊啊，真是的。`);
      await falcon.print_and_wait(`为什么要用这么悲伤的眼神看着我。`);
      await falcon.say_and_wait(`……是啊，飞鹰子已经什么都没有了。`);
      await falcon.say_and_wait(
        `想要握住两件互不相容的事物，最后却全部失去了。`,
      );
      await falcon.say_and_wait(
        `为了调整与粉丝之间的关系，将对${callname}的恋心深深埋在心底。`,
      );
      await falcon.say_and_wait(
        `尽管如此，对一直支持飞鹰子的粉丝大家们，存在裂纹的钻石无论如何都无法比拟之前的光彩。`,
      );
      await falcon.print_and_wait(
        `我认真的回答着麦克风${you.adult_sex_title}的问题。`,
      );
      await falcon.print_and_wait(
        `纵使期望最后以无法承受的代价实现，我也想站在舞台之上，亲眼见证那个瞬间的诞生。`,
      );
      await falcon.say_and_wait(
        `飞鹰子从始至终都是为了追求闪耀的瞬间才踏上的偶像之路。`,
      );
      await falcon.print_and_wait(`尽管这份最初的渴望已经大半。`);
      await falcon.print_and_wait(
        `并非为了什么人，仅仅只是为了实现自己的心愿。`,
      );
      await falcon.print_and_wait(
        `作为${falcon.uma_sex_title}偶像的自己，要向一路支持自己的粉丝们献上最满意的画卷。`,
      );
      await falcon.print_and_wait(`所以，就这么出发吧！`);
      await falcon.print_and_wait(`纵使泥地大赛只有草地十分之一的支持度。`);
      await falcon.print_and_wait(
        `飞鹰子也会让它比钻石更加闪耀，火彩更加惊艳！`,
      );
      await falcon.print_and_wait(
        `堵上飞鹰子身为${falcon.uma_sex_title}偶像的觉悟！`,
      );
      await falcon.print_and_wait(`就这么一口气闪耀到终点！`);
    };
    f.title = title;
    return f;
  })(),
  we_95_47: (() => {
    const title = '醒目飞鹰的决定';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name} 与 ${falcon.name} 紧张的准备着下周将要准备的东京大赏。`,
      );
      await era.printAndWait(
        `与${falcon.name}之间签订的契约，已经快满三年了。`,
      );
      await you.say_and_wait(`接下来就是毕业典礼了吗？`);
      await era.printAndWait(
        `从特雷森学院毕业，然后向着更高的地方深造，亦或者正式踏上偶像的道路。`,
      );
      await era.printAndWait(`作为${falcon.name}来说，也就这两种可能了吧。`);
      await era.printAndWait(
        `作为向着未来同行的乘客，与${falcon.name}一同经历的经验，恐怕会在某个夜深人静的夜晚，像是发生在昨天一样的历历在目。`,
      );
      await era.printAndWait(`叮铃铃。`);
      await era.printAndWait(
        `烦人的噪音打断了 ${you.name} 的思绪，差不多也到放学的时候了。`,
      );
      await era.printAndWait(
        `往常你 都会在整理好文件后前往河边的草地等待着${falcon.name}的到来。`,
      );
      await you.say_and_wait(`就在这里稍微等一下${falcon.name}吧。`);
      await era.printAndWait(
        `如果实在抽不开身时，${falcon.name}便会自行前来等待着你。`,
      );
      await era.printAndWait(
        `虽然没有特意约定过，但两人之间已经达成了这种默契。`,
      );
      await era.printAndWait(
        `——但是，直到倒好的咖啡热气消散为止，熟悉的敲门声却没有想起。`,
      );
      await you.say_and_wait(`可能是被突然拉去参加什么活动一直抽不开身吧。`);
      await era.printAndWait(
        `对如今的${falcon.uma_sex_title}偶像来说，突发的工作也愈发频繁。`,
      );
      await era.printAndWait(
        `似乎是一直以来的心结就此了结的缘故，${falcon.name}的行动比往日更加积极。`,
      );
      await you.say_and_wait(
        `既然这样就在手机上等待着马推发来的新消息吧。`,
        true,
      );
      await you.say_and_wait(
        `第二天早上的时候再去听${falcon.sex}分享那些有趣的经历吧。`,
      );
      await era.printAndWait(
        `将处理文件时不小心碰倒的相框扶起，重新放回到最显眼的位置。`,
      );
      era.drawLine();
      await era.printAndWait(`冬日的夜晚比想象中还要漫长。`);
      await era.printAndWait(`思绪在独处的时刻延伸到了世界的尽头。`);
      await era.printAndWait(`深不见底的情感也在延伸的过程中被无限的放大。`);
      await era.printAndWait(`像沉默的大海，又像深不见底的井一样。`);
      await era.printAndWait(`咚咚咚。`);
      await era.printAndWait(
        `轻轻打开门锁，却看见了散着头发的栗色${falcon.uma_sex_title}。`,
      );
      await falcon.say_and_wait(`……${callname}。`);
      await you.say_and_wait(`先进来。`);
      await era.printAndWait(
        `你 从挂钩上取下毛巾递给了${falcon.name}，然后关上了门。`,
      );
      await era.printAndWait(
        `比起传出奇奇怪怪的传言，${you.name}更担心的是飞鹰子的情况。`,
      );
      await falcon.say_and_wait(`打扰了。`);
      await you.say_and_wait(
        `喜欢喝什么饮料？红茶？果汁？还是咖啡？不，咖啡还是算了吧。`,
      );
      await era.printAndWait(
        `进来后端坐在客厅的沙发上，双眼正四处打量着周围环境。`,
      );
      await era.printAndWait(
        `说起来这还是${falcon.name}第一次知道你 居住的地方。`,
      );
      await era.printAndWait(`……${falcon.sex}是怎么知道的？`);
      await falcon.say_and_wait(`${callname}有些心不在焉的样子呢？`);
      await era.printAndWait(
        `思考的时间太长，${falcon.name}的好奇心被引起了。`,
      );
      await you.say_and_wait(`不，只是在思考应该拿什么饮料招待比较好。`);
      await falcon.say_and_wait(`飞鹰子想尝尝看啤酒！`);
      await you.say_and_wait(`决定了，还是红茶吧。`);
      await era.printAndWait(`脑海之中做出决定后，行动便具有了目的。`);
      await era.printAndWait(
        `尽可能的将水壶慢慢倾倒下来，不让一滴茶水逸到桌子上。`,
      );
      await you.say_and_wait(`刚烧开的水有点烫，小心一点。`);
      await falcon.say_and_wait(`好的！`);
      await era.printAndWait(
        `说起来${falcon.name}在今年的合宿派对上不小心喝到了训练员那边的饮料之后，一直对它念念不忘。`,
      );
      await era.printAndWait(
        `就${falcon.sex}本人所说的那种轻飘飘像是踩到云朵般的感受，总觉得是……不，只是风味饮料喝多罢了。`,
      );
      await era.printAndWait(
        `不过将${falcon.name}送回宿舍以及思考如何应付手纲小姐实在是一件苦差事。`,
      );
      await era.printAndWait(
        `说起来，现在的话，就算走到地铁站门口也来不及赶不上最后一班了。`,
      );
      await era.printAndWait(
        `而就这样抱着杯子盯着茶叶不知在想些什么的${falcon.name}。`,
      );
      await era.printAndWait(`噗呲。`);
      await you.say_and_wait(`可以跟我说一下怎么了吗？`);
      await era.printAndWait(
        `稍微思考了一下，将易拉罐打开，从罐口涌出的棕黄色气泡总会让人联想到汹涌的洪水。`,
      );
      await era.printAndWait(
        `外宿许可，明天再补也行吧？诸如此类的想法也伴随着酒精融入血液之中从潜意识中升起。`,
      );
      await you.say_and_wait(`没有一丝阴霾的天空。`);
      await you.say_and_wait(`明天也会是一个好天气。`, true);
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(``);
      await you.say_and_wait(`干脆在这里住一个晚上吧？`);
      await you.say_and_wait(`……毕竟是飞鹰子。`);
      await you.say_and_wait(`祝你 幸福`);
      await era.printAndWait(`说出口的一瞬间${you.name}就后悔了。`);
      await era.printAndWait(`万千感情涌上心头，最后脱口而出的竟是这句。`);
      // 根据上文恋心与责任之间做出的决定 此处的对话将会改变 但仅仅只是侧重的方向发生改变，醒目飞鹰对训练员的恋心无论如何压制都不会消灭，就像暗火一样
      // 恋心大于责任
      await you.say_and_wait(`这下要被讨厌了。`, true);
      await falcon.say_and_wait(`${callname}，我喜欢你。`);
      await you.say_and_wait(`果然……嗯？`);
      await era.printAndWait(
        `比想象之中更加凌然的表情，是你 从未见过的，作为${falcon.name}的${falcon.teen_sex_title}所露出的不为人知的一面。`,
      );
      await falcon.say_and_wait(`比起粉丝，比起粉丝们还要喜欢${callname}！`);
      await era.printAndWait(`你 被突如其来的告白攻势打得不知所措。`);
      await you.say_and_wait(`欸？飞鹰子，为什么？`);
      await falcon.say_and_wait(
        `说起来一直都有点羡慕真机伶同学呢……比起清纯系偶像，还是主动出击将训练员的好感牢牢抓再手心才是正确的事……吧。`,
      );
      await falcon.say_and_wait(
        `啊，说起来飞鹰子在憧憬成为${falcon.uma_sex_title}偶像的时候，可没有想到会有一天为了喜欢的人而放弃深耕到此的粉丝们呢。`,
      );
      await falcon.say_and_wait(
        `不过，飞鹰子不后悔，从与${callname}相遇的那个草地开始，飞鹰子一直都在压抑着自己的情感。`,
      );
      await falcon.say_and_wait(
        `所以，飞鹰子其实是个坏孩子，虽然说着为了粉丝们，实际上也只是为了满足自己，然而正是因为如此，飞鹰子才做出了自己的决定——不是作为偶像，而是作为${falcon.name}来爱着${callname}。`,
      );
      await era.printAndWait(
        `与其说是${falcon.name}的告白，不如说是作为${falcon.name}的${falcon.teen_sex_title}向你 所展示的深藏于心的一面。`,
      );
      await you.say_and_wait(`啊……这样吗……`);
      await era.printAndWait(`或许早有预感，因为未知引起的不安也得到了诠释。`);
      await you.say_and_wait(`接下来的道路请多指教。`);
      await era.printAndWait(`你 轻轻拉起了${falcon.name}的手。`);
      await falcon.say_and_wait(`欸？`);
      await you.say_and_wait(`这一次是我赢了。`);
      await era.printAndWait(
        `被汗水浸湿的右手略微颤抖着，但始终稳稳的握在手心之中。`,
      );
      await falcon.say_and_wait(`……是啊，是${callname}赢了！接下来请多指教！`);
      await you.say_and_wait(
        `接下来的偶像道路要多几分波折了，真是有些伤脑筋呢。`,
      );
      await falcon.say_and_wait(
        `是呢……接下来的粉丝骚动，恐怕要辛苦一段时间呢。`,
      );
      await era.printAndWait(`你 们对视了一眼，然后大声的笑了起来。`);
      await era.printAndWait(
        `一直笑到混杂着喜悦与释然的泪水迸出，并且将会一直带着笑容下去。`,
      );
      await falcon.say_and_wait(`果然飞鹰子还是喜欢直接扑到训练员的怀里呢⭐`);
      await falcon.say_and_wait(`呐……${callname}。`);
      await era.printAndWait(`此情此景已经无需思考。`);
      await era.printAndWait(`你 轻轻吻上了${falcon.name}的嘴唇。`);
      await you.say_and_wait(`好咸。`, true);
      await era.printAndWait(`比想象之中更甜一点。`);
      // 就让我们一起努力吧 醒目飞鹰与玩家拉起对方的手 就算建起的沙堡轰然倒塌，但只要我们握在一起的手未曾分开，一切都会重新建起
      // 责任超过恋心
      await falcon.say_and_wait(`唔。`);
      await era.printAndWait(
        `嘴唇突然被踮起脚尖的${falcon.teen_sex_title}被覆盖。`,
      );
      await era.printAndWait(
        `微微的刺痛感，伴随着苦涩的咸味……这就是${falcon.name}的吻吗，原来如此。`,
      );
      await falcon.say_and_wait(`我喜欢你。`);
      await era.printAndWait(
        `突然其来的告白，却让你 有股一只脚踏在悬崖边的错觉。于是你 等待着对方接下来的话语`,
      );
      await falcon.say_and_wait(
        `——但是，飞鹰子必须要为一直支持着飞鹰子的粉丝们负责。`,
      );
      await you.say_and_wait(`果然如此。`);
      await falcon.say_and_wait(`飞鹰子迷茫过，彷徨过，逃避过。`);
      await falcon.say_and_wait(`被负罪感随笼罩的那段日子，比死亡更加痛苦。`);
      await falcon.say_and_wait(
        `——就像全身上下挂满了伤口，无论如何都称不上是闪耀的样子，令人憎恶。`,
      );
      await falcon.say_and_wait(`但是，飞鹰子依然要为了自己而行动。`);
      await falcon.say_and_wait(
        `如果没有粉丝们的支持，飞鹰子也就不是飞鹰子了。`,
      );
      await era.printAndWait(
        `与其说${falcon.sex}的模样像是在笑着一样，不如更像是因为极度的痛苦而大幅扭曲的面部肌肉。`,
      );
      await falcon.say_and_wait(
        `……但是……但是飞鹰子的内心空落落的，就像是有一处无论如何都无法缝合的伤口。`,
      );
      await era.printAndWait(
        `你 将从刚才一直开始就一直在震动的手机狠狠的摔到了墙壁之上。`,
      );
      await era.printAndWait(`如果能更早一点接触到${falcon.name}的内心的话。`);
      await falcon.say_and_wait(`所以，`);
      await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
      await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
      await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
      await era.printAndWait(
        `啊啊，就像是从遥远的彼岸传来的话语，后半句完全完全被强迫的思绪覆盖。`,
      );
      await era.printAndWait(`明明已经做好了准备，为什么会这么悲伤？`);
      await falcon.say_and_wait(
        `……就是这样，纵使失约，纵使内心陷入疯狂，既然作为偶像就要认真回应粉丝的期待`,
      );
      await you.say_and_wait(`我明白了……无论如何我都会支持飞鹰子做出的决定。`);
      await era.printAndWait(
        `你 的视野似乎能突破自己的范围，从眼前的${falcon.teen_sex_title}转到了俯瞰着整个画面，像是机械一样按照制定好的规则熟练的进行着对话。`,
      );
      await era.printAndWait(`尽管如此，你 依然尊重${falcon.sex}的决定。`);
      await you.say_and_wait(`晚安`);
      await falcon.say_and_wait(`${callname}晚安。`);
      await era.printAndWait(`等到中断的思绪再次恢复时，忽然发现自己已经在。`);
      await era.printAndWait(`像是从遥远的地方一样传来的微弱声音。`);
      await you.say_and_wait(`不，怎么会。`);
      await you.say_and_wait(
        `不论飞鹰子成功也好，失败也好，我都会陪着你 一起见证最终的结局。`,
      );
      await you.say_and_wait(`那个时候，我们一定会笑着谈论今晚的对话的。`);
      await you.say_and_wait(`所以，飞鹰子不用害怕。`);
      era.printButton(`抉择之时，我会推你 一把`, 1);
      await era.input();
      await falcon.say_and_wait(`……${callname}。`);
      await era.printAndWait(`${you.name}紧紧握住了${falcon.name}伸出的手`);
      await falcon.say_and_wait(`${callname}一定要记住今天说的话呦？`);
      await you.say_and_wait(`嗯，已经记住了。`);
      await era.printAndWait(
        `第二天早上，起来的时候发现睡在旁边的${falcon.name}就是后话了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '圣诞节♪';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${you.name}与${falcon.name}度过的第三个圣诞。`);
      await falcon.say_and_wait(`谢谢大家！`);
      await era.printAndWait(
        `在圣诞当天依然举办着演唱会感谢着作为粉丝的大家。`,
      );
      await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
      await falcon.say_and_wait(
        `为了感谢大家一直以来支持着飞鹰子，飞鹰子将自己的心意装在里面了哦！`,
      );
      await era.printAndWait(`粉丝A「非常感谢！」`);
      await era.printAndWait(`粉丝B「今后也会一直支持着你的！」`);
      await era.printAndWait(`粉丝C「每场比赛我都会去看的！」`);
      await era.printAndWait(
        `等到礼物分光之后，还有一些粉丝们因为拿不到礼物而灰心丧气。`,
      );
      await falcon.say_and_wait(
        `参加飞鹰子感谢祭的粉丝们，接下来就用飞鹰子的笑容来温暖大家吧！`,
      );
      await era.printAndWait(`剩余的粉丝们收到了握手与一份笑容的礼物。`);
      await era.printAndWait(
        `粉丝D「虽然来晚了，没得到礼物，不过之后我也会一直支持飞鹰子的！」`,
      );
      await era.printAndWait(
        `等到粉丝们纷纷散去之后，现场只剩下了${you.name}和飞鹰子两人。`,
      );
      await falcon.say_and_wait(`终于结束了！`);
      era.printButton(`收到礼物的粉丝们一定会很开心的`, 1);
      await era.input();
      await falcon.say_and_wait(`嗯！`);
      await falcon.say_and_wait(
        `从一开始一个粉丝也没有一直到成为闪耀的偶像，没有${callname}的帮助，飞鹰子是不可能做到这一步的！`,
      );
      await era.printAndWait(
        `低头向${you.name}鞠躬的飞鹰子让${you.name}有点意外。`,
      );
      era.printButton(
        `不，再怎么说也是飞鹰子的功劳，我只是做了分内的事情罢了`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(
        `怎么会！如果没有${callname}的话，飞鹰子连出场的机会都不存在！`,
      );
      await falcon.say_and_wait(`而且，我对${callname}……啊，抱歉。`);
      await falcon.say_and_wait(`接下来一起去哪里逛逛吧？`);
      await falcon.say_and_wait(`外宿许可也已经申请了哦！`);
      await era.printAndWait(
        `轻轻牵起${you.name}的手的${falcon.name}拉着${you.name}前进。`,
      );
      await you.say_and_wait(`这边的摆放的道具呢？`);
      await falcon.say_and_wait(`没关系的！`);
      await era.printAndWait(
        `从充满暖气的房间里走出来后，立刻感受到了寒冷的气息。`,
      );
      await falcon.say_and_wait(`外面比想象中还要冷呢。`);
      await era.printAndWait(
        `尽管戴上了保暖的手套，还是有冷气从摩擦的细缝之中溜了进来。`,
      );
      await you.say_and_wait(`一起去萨莉亚吃一顿大餐吧？`);
      await era.printAndWait(
        `经济实惠的萨莉亚对饥肠辘辘的两人来说具有非常大的吸引力。`,
      );
      await falcon.say_and_wait(
        `${
          falcon.name
        }也这么想的呢，而且和${callname}一起吃饭的话，兴致突然就高涨起来了⭐`,
      );
      await you.say_and_wait(`那么我们加快脚步吧！`);
      era.drawLine();
      await era.printAndWait([
        falcon.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: '干', color: falcon.color },
        '杯！」',
      ]);
      await era.printAndWait(
        `在暖色调的灯光下，餐厅嘈杂的人声伴随着叮叮铛铛的道具碰撞声形成了独特的声音。`,
      );
      await falcon.say_and_wait(`萨莉亚的食物比想象中还要美味呢`);
      await you.say_and_wait(
        `是因为节日的缘故吧？这里的人都洋溢着快乐的气息。`,
      );
      await falcon.say_and_wait(
        `也有这一部分的缘故，不过更多的还是像普通${falcon.uma_sex_title}一样享受着节日的气息。`,
      );
      await you.say_and_wait(`飞鹰子对偶像感到疲惫了吗？`);
      await falcon.say_and_wait(`不会哦？不如说飞鹰子很享受呢！`);
      await era.printAndWait(`睁大了眼睛的飞鹰子露出了疑惑的神情。`);
      await you.say_and_wait(`接下来的路飞鹰子也要努力才行。`);
      await falcon.say_and_wait(`梦之杯吗？`);
      await you.say_and_wait(
        `除了比赛之外，还要注意自己的日程表不要过度劳累才行！`,
      );
      await era.printAndWait(`不知不觉恢复了平时说教的状态。`);
      await falcon.say_and_wait(`咕～这种气氛下你真是木头呢。`);
      await era.printAndWait(
        `咕噜咕噜搅拌着还剩下一半果汁发出了不满声音的飞鹰子看着${you.name}。`,
      );
      await falcon.say_and_wait(
        `不过，也许就是这样的${callname}，${falcon.name}才最喜欢了呢！`,
      );
      await era.printAndWait(`突然之间笑出来的飞鹰子看起来额外可爱。`);
      await falcon.say_and_wait(`嗯——可以靠过来一点吗？`);
      await era.printAndWait(`说着将自己的身体靠近了${you.name}坐着的位子。`);
      await you.say_and_wait(`……`);
      await falcon.say_and_wait(`那么！一、二、三！`);
      await era.printAndWait(`在手机上拍下了接吻瞬间的${falcon.name}。`);
      await era.printAndWait(`作为偶像来说绝对NG的吧？`);
      await falcon.say_and_wait(
        `作为偶像的飞鹰子必须把平等的爱给每一位粉丝，不过现在的我只是随处可见的普通${falcon.uma_sex_title}哦！`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_s: (() => {
    const title = '东京大赏典·the biggest stage';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await falcon.print_and_wait(`这一天的到来，比想象之中还要快。`);
      await falcon.print_and_wait(
        `辛苦的汗水，努力的价值，都将在这一刻显露出来。`,
      );
      await falcon.print_and_wait(
        `为了追逐作为顶级偶像的目标，为了那些支持着我的粉丝们，一直努力到现在。`,
      );
      await falcon.print_and_wait(`明明是这样的，但我一直无法说服自己。`);
      await falcon.print_and_wait(
        `内心深处一直传来的声音一直在询问我，这样做是对的吗？`,
      );
      await falcon.print_and_wait(`胸口好疼，像是被揪住了心脏一样。`);
      await falcon.print_and_wait(`我不知道答案。`);
      await falcon.print_and_wait(`但我隐隐有种感觉，最后的答案，将在此展现。`);
      era.printButton(`差不多该出发了，飞鹰子。`, 1);
      await era.input();
      await falcon.say_and_wait(`……出发吧，为了追寻那份答案。`);
      await era.printAndWait(
        `被混杂着沙粒的风吹得几乎睁不开眼睛的${you.name}，恍惚间将走向赛场的${falcon.name}与初次见面时的${falcon.teen_sex_title}重合在了一起。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_s: (() => {
    const title = '东京大赏典后・胜者舞台前的决定';
    /**
     * （恋心高于责任）东京大赏结束，前往胜者舞台的间隙期间，醒目飞鹰再次认识了自己（我对自己所做的决定毫无后悔，如果重新再做选择的话，我也会选择这条道路）
     * （责任大于恋心）东京大赏结束，前往胜者舞台的间隙期间，醒目飞鹰再次认识了自己（我对自己所做的决定毫无后悔，如果重新再做选择的话，我也会选择这条道路）
     * 渴望最终得到满足，内心不再孤独，恐惧随着信仰的坚定而消散,坚强蜕变为了觉悟
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`这一刻终于到来了。`);
      await falcon.print_and_wait(
        `三年前的自己所憧憬的聚集了万千粉丝目光的最闪耀舞台，尽管与自己设想的轨道再无交汇的可能。`,
      );
      await falcon.print_and_wait(`最终还是实现了。`);
      await falcon.print_and_wait(
        `面对艰难的目标最终实现的那一刻，一般人应该会激动到语无伦次，或者屏住呼吸直到最后彻底达成之后如释重负的吐出那口气为止。`,
      );
      await falcon.print_and_wait(`但此刻的自己却出乎意料的平静。`);
      await falcon.print_and_wait(
        `为了这一刻调整的面部表情、手的动作、身体姿态、发音，都是最自然的形态。`,
      );
      await falcon.print_and_wait(`尽管内心之中还是存在着一种无法形容的感情。`);
      await falcon.print_and_wait(
        `如果要形容那种感觉的话，就像还是在电视前，一边憧憬着电视上的著名偶像，一边刻意的模仿着偶像舞步姿态时的那个小${falcon.uma_sex_title}一样。`,
      );
      await falcon.print_and_wait(
        `——直到刚才还在脑海之中徘徊的噪音，不知不觉就消失了。`,
      );
      // 恋心大于责任
      await falcon.print_and_wait(
        `我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路`,
      );
      await falcon.print_and_wait(`如果有什么真正要说的话，`);
      await falcon.print_and_wait(`与${callname}一起的日子，我很满足。`);
      await falcon.print_and_wait(`谢谢你，${callname}，`);
      //责任大于恋心
      await falcon.print_and_wait(
        `为了逃避责任而寻求着自我麻痹，只会被内心的自我步步诘问，最后在放大了1000倍的敏感状态下，陷入烈火与寒冷的双重痛苦之中`,
      );
      await falcon.print_and_wait(
        `在此增幅之下，哪怕是微不足道的羽毛般的压力，也会彻底摧毁一个人。`,
      );
      await falcon.print_and_wait(
        `直面自己被赋予的责任，固然是一种压力，而从自己所处的责任面前逃避，只会陷入另一种痛苦之中。`,
      );
      await falcon.print_and_wait(`这就是我的感悟。`);
      await falcon.print_and_wait(`所以。`);
      await falcon.say_and_wait(
        `为了粉丝们的大家，飞鹰子要毫无遗憾的献上最后一曲！`,
      );
      era.drawLine();
      await era.printAndWait(
        `从无人问津的路边偶像，到泥地的顶级偶像，以三年的跨度来说，也过于迅速了。`,
      );
      await era.printAndWait(
        `就像是与${falcon.sex}第一次见面时，从窗户上一跃而下的身影。`,
      );
      await era.printAndWait(`那一刻的${falcon.sex}比起大地，更接近天空。`);
      await era.printAndWait(
        `或许这才是自己下定决心与${falcon.sex}签约的原因吧。`,
      );
      await era.printAndWait(
        `被闪光灯汇聚的焦点，便是名为${falcon.name}的顶级偶像。`,
      );
    };
    f.title = title;
    return f;
  })(),
  deadline_fight: (() => {
    const title = '期末大作战！';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`呜———好难`);
      await falcon.print_and_wait(`看着手里的挂科的试卷，飞鹰子陷入了沉默中。`);
      await falcon.say_and_wait(
        `再这样下去的话，不止是课后留级这样子了，搞不好就要挂科了。`,
      );
      await falcon.print_and_wait(
        `飞鹰子开始急得团团转，然后突然想起了 ${callname}。`,
      );
      await falcon.say_and_wait(`不如去问问 ${callname} 吧。`);
      era.drawLine({ content: '训练室' });
      await era.printAndWait(
        `看着眼前的分数，${you.name} 也和飞鹰子一样陷入了沉默之中。`,
      );
      await you.say_and_wait(`……飞鹰子？`);
      await era.printAndWait(
        `看着低着头不好意思的飞鹰子，${you.name} 长叹了一口气。`,
      );
      await you.say_and_wait(`那么，一起来分析一下错误的问题吧`);
      await era.printAndWait(
        `让飞鹰子坐在了${you.name} 的位置，${you.name} 另外搬了一把椅子坐在了${falcon.sex} 的旁边。`,
      );
      await you.say_and_wait(
        `要想及格的话，重要的不是细枝末节的东西，而是理解作为"树干"部分的思维或者思路`,
      );
      await you.say_and_wait(
        `对于哪一项需要优先，哪一项回头再说也可以需要冷静的做出判断。`,
      );
      await you.say_and_wait(`那么，对于这一部分……`);
      await era.printAndWait(`一整个下午，你们都在与错误进行斗争。`);
      era.drawLine({ content: '黄昏之后' });
      await you.say_and_wait(`差不多就是这样了……飞鹰子？`);
      await falcon.say_and_wait(`……啊，是。`);
      await era.printAndWait(
        `不知从何时开始，飞鹰子的思绪似乎飘到了其他地方。`,
      );
      await you.say_and_wait(`……算了，今天的话就到这里了。`);
      await era.printAndWait(
        `长叹一口气后，${you.name} 将飞鹰子的试卷收到了自己的文件夹中。`,
      );
      await you.say_and_wait(`接下来的话，在补考及格之前，禁止你开演唱会。`);
      await falcon.say_and_wait(`欸？`);
      await falcon.say_and_wait(`${callname} 不要啊！！！`);
      await era.printAndWait(`飞鹰子的悲鸣响彻了整个教学楼。`);
    };
    f.title = title;
    return f;
  })(),
  idol_ice_cream: (() => {
    const title = '飞鹰子·约会大作战';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`还没进门就听见了飞鹰子充满活力的声音。`);
      await you.say_and_wait(`这就是所谓的未闻其名先闻其声吗？`, true);
      await era.printAndWait(`当然不是。`);
      await falcon.say_and_wait(
        `飞鹰子打算推荐给支持自己的粉丝们性价比高的一种甜品，${callname}知道哪里有吗？`,
      );
      await era.printAndWait(
        `说起来偶像也要给一直支持自己的粉丝表达感谢之情。`,
      );
      await you.say_and_wait(`甜品的话，去附近的商场看看吧？`);
      await you.say_and_wait(`或者在马推上看下生活博主推荐的店铺？`);
      await era.printAndWait(`飞鹰子也陷入了思考之中`);
      await falcon.say_and_wait(`嗯……飞鹰子还是觉得去看看才能做出决定吧？`);
      await falcon.say_and_wait(`所以 ${callname}……`);
      await era.printAndWait(`偷偷观察着 ${you.name} 的反应的飞鹰子。`);
      await falcon.say_and_wait(`……还是飞鹰子一个人过去吧⭐`);
      await you.say_and_wait(`啊好。`);
      await era.printAndWait(`故意装作没听清的样子。`);
      await falcon.say_and_wait(`欸？！怎么可以这样！`);
      await era.printAndWait(
        `因为搬起石头砸自己的脚而气急败坏的飞鹰子终于暴露出了真实想法。`,
      );
      await you.say_and_wait(`抱歉刚才没听清，可以再说一遍吗？`);
      await falcon.say_and_wait(`飞鹰子想邀请 ${callname} 一起出发。`);
      await you.say_and_wait(`既然是可爱飞鹰子的请求当然可以了。`);
      await falcon.say_and_wait(`太好了⭐`);
      await era.printAndWait(`之后两人一起品尝了附近的甜品店。`);
    };
    f.title = title;
    return f;
  })(),
  loneliness_girl: (() => {
    const title = '河岸边的偶像';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`岸边的草地上`);
      await falcon.say_and_wait(`${callname}，这里的空气真清新呢`);
      await falcon.say_and_wait(
        `岸边的草地上，清新的空气似乎很适合人们放松呢。`,
      );
      await falcon.say_and_wait(
        `！对啊，在这种地方开演唱会的话发到马推上，粉丝数也会一口气增加的吧。`,
      );
      await falcon.say_and_wait(`${callname} 又是怎么想的呢？`);
      await era.printAndWait(`看着飞鹰子深呼吸后对着未来憧憬的样子`);
      await you.say_and_wait(`是啊，呼吸着清新的空气，粉丝们也会很高兴吧。`);
      await falcon.say_and_wait(`……${callname} 也高兴吗？`);
      await you.say_and_wait(`？是啊。`);
      await falcon.say_and_wait(`飞鹰子也很高兴呦⭐`);
      await era.printAndWait(
        `与捂着嘴偷偷笑着的飞鹰子漫步在河岸边，感受着从水面吹向陆地的微风，生长在水陆交界之处的种种植物也跟着微风的吹拂摇摆着身体。`,
      );
      await era.printAndWait(`植物们也期待着风与水的浸润。`);
      await falcon.say_and_wait(`${callname}，快看这边！`);
      await era.printAndWait(
        `发现了新鲜事物的飞鹰子跑向了河边，然后蹲了下来。`,
      );
      await era.printAndWait(
        `紧跟着飞鹰子来到岸边，${you.name} 也随着飞鹰子的视线向那边看去。`,
      );
      await era.printAndWait(`靠近着河边顽强生长的白色小花丛，正随风摇曳着。`);
      await falcon.say_and_wait(`这花真像飞鹰子呢。`);
      await era.printAndWait(
        `想要轻轻触碰，却担心自己过大的力量将花朵折下，只能静静地看着被白色花瓣保护着的黄色花芯。`,
      );
      era.printButton(`好像叫做洋甘菊`, 1);
      await era.input();
      await you.say_and_wait(
        `古埃及人称呼${falcon.sex} 为月亮的药草，具有清凉安神的效果。`,
      );
      await you.say_and_wait(`花语的话是……`);
      await era.printAndWait(`悄悄打开手机输入洋甘菊`);
      await you.say_and_wait(`苦难中的力量。`);
      await falcon.say_and_wait(`飞鹰子希望也能像洋甘菊一样绽放。`);
      await era.printAndWait(`看着时不时被河水冲刷的湿润陆地。`);
      await falcon.say_and_wait(`将根深深扎进泥土之中，将绽放的花朵献给大家。`);
      await falcon.say_and_wait(`所以，飞鹰子也要努力才行呢。`);
      await era.printAndWait(
        `伸出手打算抚摸着飞鹰子的脑袋，却被后者巧妙的躲开了。`,
      );
      await falcon.say_and_wait(`如果想抓住逃走的飞鹰子的话，那就来追赶我吧！`);
      await you.say_and_wait(`飞鹰子我要抓到你！`);
      await falcon.say_and_wait(`${callname} 永远抓不到飞鹰子的⭐`);
      await era.printAndWait(
        `喧闹的草地逐渐归于宁静，只有轻轻摇曳着的花朵发出的声音在风的耳边缓缓流淌着。`,
      );
    };
    f.title = title;
    return f;
  })(),
  shine_girl: (() => {
    const title = '车站宣传';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname_4 丸善斯基对玩家的称呼
     */
    const f = async (falcon, maru, you, callname_4) => {
      await era.printAndWait(`休息日的某一天`);
      await falcon.say_and_wait(`这里是目标为顶级偶像的${falcon.name} ！`);
      await falcon.say_and_wait(`希望大家多多支持作为偶像的飞鹰子♪`);
      await era.printAndWait(
        `休息日的时候${you.name}被${falcon.name} 拉着来到了车站`,
      );
      await you.say_and_wait(`瞄准了车站人流量大进行粉丝宣传吗？`);
      await you.say_and_wait(`如果把这种热情放在学习上的话就好了。`);
      await era.printAndWait(`然而大多数人都是奇怪的看了一眼之后就离开了。`);
      era.drawLine({ content: '到了中午' });
      await falcon.say_and_wait(`呜～到了中午没有新的粉丝增加啊。`);
      await era.printAndWait(
        `不如说大家都有自己的事情要去做，能无忧无虑作为粉丝的也只有学生了。`,
      );
      await era.printAndWait(`而且`);
      await maru.say_and_wait(`这不是飞鹰子吗？`);
      await era.printAndWait(`意外的人出现了。`);
      await falcon.say_and_wait(`欸？丸善前辈为什么来这边了？`);
      await era.printAndWait(
        `穿着特雷森制服的丸善斯基带着充裕的笑容看着你们。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 47
      ) {
        await maru.say_and_wait(`到处找不到 ${callname_4}，原来在这里啊？`);
        await era.printAndWait(
          `${you.name} 当然记得这位外表亲和的${maru.elder_sibling_sex_title}大人`,
        );
        await maru.say_and_wait(
          `一段时间看不到 ${callname_4}，${maru.elder_sibling_sex_title}我好伤心啊？`,
        );
        era.printButton(`要一起来吗？`, 1);
        await era.input();
        await maru.say_and_wait(
          `帮助可爱的后辈是我的荣幸哦，那么我应该做什么呢？`,
        );
        await era.printAndWait(
          `既享受着奔跑的快乐，也为了能让更多的${maru.uma_sex_title}追逐着自己的背影，`,
        );
      }
      await falcon.say_and_wait(`飞鹰子的话，正在车站进行粉丝劝诱呢⭐`);
      await falcon.say_and_wait(`所以也希望丸善前辈也能帮我做下宣传。`);
      await maru.say_and_wait(
        `这么可爱的后辈${maru.elder_sibling_sex_title}我当然要帮忙了，就让你们看下${maru.elder_sibling_sex_title}我的宣传方式吧`,
      );
      await era.printAndWait(`等到下一班列车到达时`);
      await maru.say_and_wait(
        `哈喽！各位帅锅美眉看过来，这边这么可爱的菇凉不打算抢个沙发吗？`,
      );
      await maru.say_and_wait(`亚历山大也没关系，毕竟神马都是浮云呦～`);
      await falcon.say_and_wait(`……好怀念的用法啊。`);
      await era.printAndWait(
        `${you.name}想到了自己初中时上网冲浪时当时人们这么互相称呼的环境。`,
      );
      await era.printAndWait(
        `此举一出，所有人都加快了自己的脚步，不少人还双手掩面像是被雷到了一样。`,
      );
      await maru.say_and_wait(`唔～连个抢沙发的人都没有啊`);
      await era.printAndWait(`看着一脸遗憾的丸善斯基，飞鹰子向前安慰到。`);
      await falcon.say_and_wait(`没，没关系的，已经帮了飞鹰子大忙了。`);
      await falcon.say_and_wait(`总之，非常感谢。`);
      await maru.say_and_wait(`既然这样的话……我也能做飞鹰子的粉丝吗？`);
      await falcon.say_and_wait(`欸？丸善前辈是我的粉丝……非常感谢！`);
      await era.printAndWait(
        `看着收获了粉丝的飞鹰子，${you.name} 也觉得很开心。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 96
      ) {
        await maru.say_and_wait(`飞鹰子，可以拜托你一件事吗？`);
        await era.printAndWait(
          `带着充裕表情的丸善斯基看着${you.name} 和${falcon.name} 之间的互动。`,
        );
        await falcon.say_and_wait(`飞鹰子能帮上忙的话也很高兴！`);
        maru.say(`太好了！可以去附近的商场帮我买一份最近流行的可可芭蕾吗？()`);
        await era.printAndWait('巧克力与冰淇淋混合在一起的一种饮料', {
          fontSize: '0.5rem',
        });
        await falcon.say_and_wait(`当然可以，不过飞鹰子还在劝诱粉丝呢。`);
        await maru.say_and_wait(
          `我也会帮忙的呦？所以拜托了飞鹰子，请听听看刚刚作为飞鹰子粉丝的请求吧！`,
        );
        await falcon.say_and_wait(
          `嗯——好！即热是丸善前辈的要求的话，飞鹰子会努力的！`,
        );
        await falcon.say_and_wait(`那么，飞鹰子出发了！`);
        await era.printAndWait(
          `看着逐渐远去的飞鹰子，车站只剩下了${you.name} 和丸善斯基。`,
        );
        await maru.say_and_wait(
          `既然没事的话，就让我多占据一下 ${callname_4} 吧♪`,
        );
        await era.printAndWait(
          `忍不住将${you.name} 抱在怀里温柔抚摸的丸善斯基很开心的样子。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  curiosity_girl: (() => {
    const title = '黄金菊';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`休息日的某一天`);
      await falcon.say_and_wait(`${callname}，可以过来一下吗？`);
      await era.printAndWait(`飞鹰子对着放在训练室的等身镜打扮着自己。`);
      await falcon.say_and_wait(
        `那个，飞鹰子想试试看将头发放下来后梳马尾将蝴蝶结固定在头发上。`,
      );
      await era.printAndWait(
        `似乎因为自己看不到头发后面，所以想借助 ${you.name} 的手`,
      );
      await you.say_and_wait(`——这样吗？`);
      await falcon.say_and_wait(`嗯——再上去一点。`);
      await era.printAndWait(`小心翼翼的将蝴蝶夹子放到稍高一点的位置。`);
      await you.say_and_wait(`——这样的话可以吗？`);
      await falcon.say_and_wait(`嗯——差不多了。`);
      await era.printAndWait(`看着换了发型的飞鹰子，感觉和之前不太一样了。`);
      await falcon.say_and_wait(`不过总觉得哪里还差了一点。`);
      await era.printAndWait(`然后又开始有些在意了。`);
      await falcon.say_and_wait(
        `${callname}！接下来的话可以和我一起去趟商店街吗？`,
      );
      await falcon.say_and_wait(`我想去买一点小装饰品。`);
      await era.printAndWait(`想要看看自己的魅力最终能到那种极限吗？`);
      await you.say_and_wait(`好！`);
      era.drawLine({ content: '商店街' });
      await era.printAndWait(
        `因为是周末的缘故，商店街来来往往的人群也比工作日出不少`,
      );
      await falcon.say_and_wait(`那么去这家店看一下吧！`);
      await era.printAndWait(
        `似乎是最近冲上热搜的网红店，前来打量小饰品的情侣的比例意外很高。`,
      );
      await you.say_and_wait(`好多情侣啊。`);
      await falcon.say_and_wait(
        `飞鹰子和${callname}混在里面一点违和感都没有呢。`,
      );
      await era.printAndWait(
        `拉着${you.name} 手臂的飞鹰子转了一圈后，在头绳那边停下了脚步。`,
      );
      await falcon.say_and_wait(`都很可爱啊,不过哪种比较好呢？`);
      await era.printAndWait(`飞鹰子似乎很喜欢这些手绳。`);
      await you.say_and_wait(`既然这么纠结的话心仪的全部买走吧？`);
      await era.printAndWait(
        `最近刚发了工资的 ${you.name} 说话就是有底气（大概？）。`,
      );
      await falcon.say_and_wait(`真的可以吗？${callname}真好呢！`);
      await falcon.say_and_wait(`不过，${callname}喜欢哪种呢？`);
      era.printButton(`系上了绿色蝴蝶结的白色头绳`, 1);
      era.printButton(`白色小兔子装饰的绿色头绳`, 2);
      era.printButton(`白色玫瑰装饰的黑色头绳`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(`嗯——飞鹰子也喜欢这种清新的感觉呢。`);
          await falcon.say_and_wait(`像是在绿色田野漫步的样子充满活力⭐`);
          break;
        case 2:
          await falcon.say_and_wait(`可爱风吗？不如说飞鹰子也是这么想的！`);
          await falcon.say_and_wait(`据说小兔子也有象征渴望爱情的隐语呢。`);
          await falcon.say_and_wait(`飞鹰子什么都没说哦⭐。`);
          break;
        case 3:
          await falcon.say_and_wait(`吼吼吼！飞鹰子也是小恶魔系的偶像呢！`);
          await era.printAndWait(`虽然怎么看都不太像`);
          await falcon.say_and_wait(`既然训练员挑选的话，那我就认真考虑下吧。`);
          await era.printAndWait(
            `轻轻敲了下${falcon.sex} 的小脑袋，爆发出了悲鸣。`,
          );
          await falcon.say_and_wait(`对不起，下次不会这么说话了！`);
      }
      await era.printAndWait(
        `将挑选完的手绳放入了购物袋之中，你们继续享受着购物的乐趣。`,
      );
    };
    f.title = title;
    return f;
  })(),
  rooftop_idol: (() => {
    const title = '天台上的偶像';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`放学后的某一天`);
      await era.printAndWait(
        `整理完 ${falcon.name} 最近的数据后，如释重负的 ${you.name} 终于长长的呼了一口气。`,
      );
      era.printButton(`接下来的话去天台走走吧`, 1);
      await era.input();
      await era.printAndWait(
        `不知何时 ${you.name} 也养成了对着镜子自言自语的习惯。`,
      );
      await you.say_and_wait(
        `所谓的两个人在一起迟早会继承对方的习惯吗？`,
        true,
      );
      await era.printAndWait(
        `虽然想尽力将这个念头埋入情感的最深处，但它却像是和${you.name} 来劲了一样开始不断上浮。`,
      );
      await era.printAndWait(`最后的结论是——`);
      await you.say_and_wait(`其实我喜欢作为飞鹰子的${falcon.name}。`, true);
      await era.printAndWait(
        `乐观，积极向上，一直盯着目标不断前行的${falcon.sex} 将乐观的希望带给了${you.name} 与粉丝们。`,
      );
      await you.say_and_wait(`这样的${falcon.uma_sex_title}真的存在吗？`, true);
      await era.printAndWait(`${you.name} 的内心一直在怀疑这一点。`);
      await era.printAndWait(
        `想要一直保持作为偶像这一身份所遭受的痛苦与精神上的折磨。`,
      );
      await you.say_and_wait(
        `${falcon.sex} 只是不愿意将消极的一面展示给我看吧`,
        true,
      );
      await era.printAndWait(`不知不觉间走上了天台。`);
      await era.printAndWait(
        `夕阳缓缓地落入地平线，凉爽的气息从四周传递过来，温度又降了一个台阶。`,
      );
      await you.say_and_wait(`差不多也该回去了吧`);
      await era.printAndWait(`正准备回去的时候，意外看到了熟悉的身影。`);
      await falcon.say_and_wait(`举头能望见，伸手是虚空。`);
      await falcon.say_and_wait(`好似月中桂，高居碧海中。`);
      await era.printAndWait(
        `忧郁的歌声被风托到了身边，忧郁的眼神看着夕阳远去的方向。`,
      );
      await you.say_and_wait(`飞鹰子？`, true);
      await era.printAndWait(`凭着对声音的好奇，循着源头看去。`);
      await era.printAndWait(
        `被风吹拂的${falcon.name} 任凭长发飘逸，忧郁的目光望着虚无。`,
      );
      await era.printAndWait(`正想向其搭话的时候，但还是愣在原地。`);
      await era.printAndWait(`${falcon.name} 终于还是离开了天台。`);
    };
    f.title = title;
    return f;
  })(),
  petrichor_girl: (() => {
    const title = (falcon) => `带着青草气息的${falcon.uma_sex_title}们`;
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`今天是校园开放日。`);
      await falcon.say_and_wait(
        `这里是 ${falcon.name} ${falcon.elder_sibling_sex_title}，接下来的话就让我来带领大家参观特雷森吧♪`,
      );
      await era.printAndWait(
        `附近小学的小${falcon.uma_sex_title}们来到特雷森学院进行参观。`,
      );
      era.printButton(
        `说不定之后这些小${falcon.uma_sex_title}们其中也有人会成为我的担当${falcon.uma_sex_title}呢`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `小${falcon.uma_sex_title}A「这里就是特雷森吗？」`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}B「哇！好大的学院啊！」`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}C「${
          falcon.name
        } 姐姐可以讲一下特雷森学院的历史吗？」`,
      );
      await falcon.say_and_wait(
        `作为偶像的飞鹰子当然会给粉丝们耐心的讲解的♪首先是……`,
      );
      await era.printAndWait(
        `充满活力的${falcon.name} 耐心讲解着与特雷森相关的事情。`,
      );
      await era.printAndWait(`小${falcon.uma_sex_title}A「那边的人影是？」`);
      await era.printAndWait(
        `簇拥在${
          falcon.name
        } 周围蹦蹦跳跳的小${falcon.uma_sex_title}发现了${you.name}。`,
      );
      await falcon.say_and_wait(
        `即使是特雷森学院的${falcon.uma_sex_title}们，想要取得G1也是很辛苦的一件事呢……欸？等一下`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}A「那边的训练员看起来很帅气呢？」`,
      );
      await era.printAndWait(
        `刚还围绕在${
          falcon.name
        } 身边的${falcon.uma_sex_title}们呼啦一下全部围到了${you.name} 身边。`,
      );
      await falcon.say_and_wait(`训，${callname}！`);
      await era.printAndWait(
        `小${falcon.uma_sex_title}B「等我进入特雷森的话，可以做我的钻数训练员吗？」`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}A「不要！明明应该是我先看到他的！」`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}B「是我先提出来的，所以应该跟我一起！」`,
      );
      await era.printAndWait(
        `小${falcon.uma_sex_title}们像是抢心爱的玩具一样拉着${you.name} 的双手`,
      );
      era.printButton(`好，好痛啊！`, 1);
      await era.input();
      await era.printAndWait(
        `众所周知${falcon.uma_sex_title}的力气是成年人类的三倍。`,
      );
      await era.printAndWait(
        `为了避免控制不住自己力量造成危险的发生，作为${falcon.uma_sex_title}有一门必修课。`,
      );
      await era.printAndWait(`就是学会控制自己的力量。`);
      await era.printAndWait(
        `对于大多数${falcon.uma_sex_title}来说初中时就开始有意识控制自己的力量。`,
      );
      await era.printAndWait(
        `但对于连心智都尚处在发育阶段的小${falcon.uma_sex_title}们来说。`,
      );
      await era.printAndWait(
        `${you.name} 像是被两个肌肉壮汉当成玩具一样拽来拽去。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`所幸，${falcon.name} 及时赶到了。`);
      await falcon.say_and_wait(`你们两个给我说清楚怎么回事！`);
      await era.printAndWait(
        `两名小${falcon.uma_sex_title}突然被一股巨大的力量提到了空中，想要查看发生了什么的时候就迎来了${
          falcon.name
        } 像修罗一样的表情。`,
      );
      await era.printAndWait(`小${falcon.uma_sex_title}A「唔啊啊啊！」`);
      await era.printAndWait(`小${falcon.uma_sex_title}B「不要吃我啊！」`);
      await era.printAndWait(
        `刚刚还在争吵的两人现在又蜷缩在了一起瑟瑟发抖地听着${falcon.name} 的训斥。`,
      );
      await falcon.say_and_wait(`${callname}！${callname} 没事吧？`);
      await era.printAndWait(
        `说教结束之后，${falcon.name} 担心的向${you.name} 询问。`,
      );
      era.printButton(`没关系，不过是小朋友们淘气了一点。`, 1);
      await era.input();
      await era.printAndWait(`忍着剧痛来到了小朋友旁边。`);
      await era.printAndWait(`小${falcon.uma_sex_title}A「呜——」`);
      await era.printAndWait(`小${falcon.uma_sex_title}B「嗯？」`);
      era.printButton(
        `人类比起${falcon.uma_sex_title}来说是很脆弱的生物，所以下次一定要控制住自己的力量才行。`,
        1,
      );
      await era.input();
      era.printButton(
        `如果可以的话，希望在特雷森的时候也能看到你们活泼的样子。`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}A`,
        '嗯嗯。',
      );
      await you.say_as_passer_by_and_wait(
        `小${falcon.uma_sex_title}B`,
        '我们知道了。',
      );
      await era.printAndWait(
        '带队老师这时才姗姗来迟，在了解经过之后向你们道歉。',
      );
      era.drawLine({ content: '结束后' });
      await falcon.say_and_wait(
        `比起自己更关心其他人的感受，这样的话很容易受伤的！`,
      );
      await era.printAndWait([
        '乖乖听着飞鹰子说教的 ',
        you.get_colored_name(),
        ' 活动着双手。',
      ]);
      await you.say_and_wait(`飞鹰子原来这么关心我吗？`);
      await falcon.say_and_wait(`作为偶像当然要关心粉丝才行呢！`);
      await falcon.say_and_wait(`更别说${callname} 是我的……`);
      await era.printAndWait(`像是意识到了什么一样，飞鹰子的脸渐渐红了起来。`);
      await falcon.say_and_wait(`呀啊！${callname}欺负人！`);
      await era.printAndWait(`在打闹之中，今天的日常结束了。`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Freesia';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`一个平平无奇的早上`);
      await falcon.say_and_wait(`${callname}今天也要加油哦⭐`);
      await era.printAndWait(
        `虽然因为接连的失败而受到许多粉丝们的质疑，不过在飞鹰子的鼓励之下，${you.name}还是坚持着自己的训练计划。`,
      );
      await you.say_and_wait(`今日份的飞鹰子，拜托了呦？`);
      await falcon.say_and_wait(
        `——！既然是 ${callname} 的要求，飞鹰子也会继续努力的⭐`,
      );
      await era.printAndWait(
        `在众多的竞争者之间脱颖而出，每日挥洒的汗水总算得到了回报。`,
      );
      await era.printAndWait(
        `如果能借助这份工作将飞鹰子的名气打响的话，那么对之后的泥地赛也`,
      );
      await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
      await era.printAndWait(
        `似乎在期待着什么的${falcon.name}带着焦急的眼神看着${you.name}。`,
      );
      era.printButton(`就就只能追上去了！`, 1);
      await era.input();
      await falcon.say_and_wait(`要追到地平线的尽头吗？`);
      await era.printAndWait(`刺眼的光线照射在舞台上。`);
      await you.say_and_wait(`那里就是飞鹰子的大舞台！`);
      await era.printAndWait(
        `演员们小声默念着属于自己的台词，摄制组最后确认了一遍摄像机的运转正常。`,
      );
      await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
      await era.printAndWait(`导演在第一排坐定。`);
      await you.say_and_wait(`——去抓住大大的爱吧！`);
      await era.printAndWait(`各就各位！所有人都在等待着主角的登场。`);
      await falcon.say_and_wait(
        `最强的${falcon.uma_sex_title}偶像，${falcon.name}♪今天也送到了呢⭐`,
      );
      await era.printAndWait(`穿着可爱服装的飞鹰子登场了。`);
      era.printButton(`稍微在附近转转吧`, 1);
      era.printButton(`还是找个座位看飞鹰子表演吧`, 2, { disabled: true });
      if ((await era.input()) === 1) {
        await era.printAndWait(`回到了空无一人的后台准备室中。`);
        await era.printAndWait(`不知为何情绪也变得高涨起来了。`);
        await you.say_and_wait(
          `虽然空气有些浑浊，不过在这里也能听到${falcon.name}美丽的歌声。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「您好，请问是${falcon.name}的训练员吗？」`,
        );
        await era.printAndWait(
          `不知何时出现在准备室的${falcon.uma_sex_title}。`,
        );
        await you.say_and_wait(`是的，我是——`);
        await era.printAndWait(`尚未来得及反应，一阵剧痛便从胸口传来。`);
        await era.printAndWait(
          `${falcon.uma_sex_title}「初次见面，训练员${you.adult_sex_title}。然后，永别了。」`,
        );
        await era.printAndWait(
          `正准备刺出第二刀的${falcon.uma_sex_title}被 ${you.name} 顺手扔出的化妆品砸了正着。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「唔——不要太嚣张了！呜啊！！！」`,
        );
        await era.printAndWait(
          `从随身的挎包中掏出了防${falcon.uma_sex_title}喷雾的${you.name}颤颤巍巍的站了起来。`,
        );
        await era.printAndWait(
          `无视发出凄惨叫声的${falcon.uma_sex_title}，一口气将喷雾中的气体摁到底。`,
        );
        await you.say_and_wait(`必须将这情况告诉飞鹰子。`);
        await era.printAndWait(
          `下意识举起了挎包的${you.name}，总算避免了即死这一最糟的结局。`,
        );
        await era.printAndWait(
          `然而，在肾上腺素的刺激之下，止不住的鲜血正在往外流淌。`,
        );
        await you.say_and_wait(`这里太危险不能在这里包扎。`);
        await era.printAndWait(`必须离开这里。`);
        await era.printAndWait(
          `这么想着的${you.name}正准备离开，却被${falcon.uma_sex_title}胡乱伸出的双手抓住了挎包。`,
        );
        await you.say_and_wait(`不好。`, true);
        await era.printAndWait(
          `一阵巨力传来，原本是救命的挎包现在反而成了索命的死神。`,
        );
        await era.printAndWait(
          `被拉住脖子的${you.name}只能胡乱地空中挥舞着双手。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「你这家伙，就在地狱里忏悔你的罪行吧！哈哈哈哈哈哈！！！」`,
        );
        await falcon.say_and_wait(`${callname}，飞鹰子进来了呦？`);
        await era.printAndWait(`意识逐渐模糊的${you.name}似乎产生了幻听。`);
        await you.say_and_wait(`就这样，能够听到飞鹰子的声音`, true);
        await you.say_and_wait(`我`, true);
        await era.printAndWait(
          `无力的倒在地板上的${you.name}，连痛苦都感受不到了。`,
        );
      }
      era.drawLine();
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`温柔的呼唤声传来，似乎是很熟悉的声音。`);
      await you.say_and_wait(`到了天国吗？让我再睡一会吧。`, true);
      await era.printAndWait(`不知何时就这样心安理得沉沉睡了过去。`);
      era.drawLine();
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(`温柔又坚定的声音从遥远的地方传来。`);
      await era.printAndWait(`好熟悉的声音啊。`);
      await era.printAndWait(
        `好像在哪里听过的样子？教室吗？天台吗？那位${falcon.teen_sex_title}——`,
      );
      await you.say_and_wait(`我是谁？我在哪里？`, true);
      await era.printAndWait(`扫视着这片漆黑的世界，再次沉沉睡了过去。`);
      await falcon.say_and_wait(`${callname}，我又来看望 ${callname} 了。`);
      await falcon.say_and_wait(`飞鹰子，在业界也稍微站住脚跟了呢。`);
      await falcon.say_and_wait(
        `虽然之前和 ${callname} 说过这件事。不过 ${callname} 也不记得了呢。`,
      );
      await era.printAndWait(`欢快的声音逐渐低沉了下来。`);
      await falcon.say_and_wait(
        `不过，不过飞鹰子一定会带着 ${callname} 的期待一直努力下去的！${callname}，下次见！`,
      );
      await you.say_and_wait(`飞鹰子`);
      await era.printAndWait(
        `想要坐起来却因为麻木感而失败，身体重重地躺在了病床之上。`,
      );
      await falcon.say_and_wait(`哎？！`);
      await era.printAndWait([
        '——打算最后看一眼的 ',
        falcon.get_colored_name(),
        ' 却目睹了整个过程。',
      ]);
      await falcon.say_and_wait(`${callname}……欢迎回来！`);
      await you.say_and_wait(`已经过去多久了？`);
      await era.printAndWait(
        `一定已经过去很久了，${you.name} 已经做好了最糟的打算。`,
      );
      await falcon.say_and_wait(`嗯——从那件事件后已经过去三年了。`);
      await you.say_and_wait(`……这样啊。`);
      await era.printAndWait(`已经过去这么久了啊。`);
      await you.say_and_wait(`你看起来比之前更加闪耀了。`);
      await era.printAndWait(
        `难以想象孤独的${falcon.teen_sex_title}是如何踏上这条偶像之路的。`,
      );
      await falcon.say_and_wait(
        `嗯！${callname} 出院后也能看到闪耀的飞鹰子了！`,
      );
      await you.say_and_wait(`……对不起。`);
      await you.say_and_wait(`明明作为训练员的我应该站在你的身边的。`);
      await falcon.say_and_wait(
        `不会的，飞鹰子能看到 ${callname} 清醒的样子，飞鹰子就已经很幸福了。`,
      );
      await falcon.say_and_wait(`再奢求更多的话，飞鹰子也太贪心了。`);
      await era.printAndWait(`冰凉的小手与粗糙的大手重合在了一起。`);
      await falcon.say_and_wait(`所以 ${callname}，快点好起来吧。`);
      await era.printAndWait(
        `轻轻将大手放在了自己的脸颊，${falcon.name}闭上了双眼感受着久违的温暖。`,
      );
      await you.say_and_wait(
        `……嗯，一定会的，飞鹰子的演唱会，与飞鹰子接下来的一切，全都会。`,
      );
      await era.printAndWait(
        `湿润的感觉从嘴唇之中传来，将接下来的话语生生遏止住了。`,
      );
      await you.say_and_wait(`不，已经足够了`, true);
      await era.printAndWait(`接吻的感觉，是咸咸的呢。`);
    };
    f.title = title;
    return f;
  })(),
};
