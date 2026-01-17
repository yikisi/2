const era = require('#/era-electron');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.next_beginning = async (falcon, me, callname) => {
    // 颤抖的双手 意象 梦中的故事 人物 交涉 细微的动作 脸庞 天空的变化 色彩 草原
    await print_event_name(`First！偶像的第一步`, falcon);
    await era.printAndWait(`训练场\n`);
    era.printButton(`坚持住！最后一圈！`, 1);
    await era.input();
    await falcon.say_and_wait(`……哈啊啊啊！`);
    await era.printAndWait(
      `${falcon.name}身体向前倾斜，努力克服着地面的阻力，脚下的大地传来沉闷的震动感。`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `咬紧了牙关，努力维持着速度的${falcon.name}冲过了沙地上鲜明的白线。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `${callname}将准备好的毛巾递给${falcon.name}，后者仔细将额头上的汗水擦去。`,
    );
    await era.printAndWait(
      `混杂着沙砾与汗水混合物紧紧吸附在了${falcon.sex}的体操服上。`,
    );
    await era.printAndWait(
      `在剧烈运动过后，为了避免突然坐下而对身体造成较大的危害，${callname}与${falcon.name}绕着训练场不紧不慢的闲聊着。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}⭐，这次比上次进步了吗？`,
    );
    await era.printAndWait(
      `${callname}掏出计时器，确认着上面的时间，然后看向了最后冲刺时留下的深深的痕迹，最后轻轻的点了头。得到肯定回答的${falcon.teen_sex_title}似乎忍耐不住激动的心情，走在了${callname}的前面。`,
    );
    await falcon.say_and_wait(
      `太好了⭐，这样就可以朝着${falcon.get_uma_sex_title()}偶像的道路前行了！`,
    );
    await me.say_and_wait(`${falcon.get_uma_sex_title()}偶像？`);
    await era.printAndWait(
      `${falcon.name}之前确实提到过${falcon.get_uma_sex_title()}偶像的这个概念，不过，自己不太确定${falcon.get_uma_sex_title()}偶像究竟是什么。`,
    );
    await falcon.say_and_wait(
      `${falcon.get_uma_sex_title()}偶像是飞鹰子创建的概念，是亮闪闪的亲民偶像，与粉丝们一同成长并见证陪伴并给予对方爱与希望的存在！`,
    );
    await me.say_and_wait(`有点像是突出个人魅力的偶像艺人？`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}偶像的概念似乎与演艺界的新人偶像相似。`,
    );
    await me.say_and_wait(
      `作为${falcon.get_uma_sex_title()}偶像的特殊之处又在哪里呢？`,
      true,
    );
    await era.printAndWait(`，${callname}将矿泉水递给了${falcon.sex}。`);
    await me.say_and_wait(`先把这份概念记在记事本上吧。`, true);
    await falcon.say_and_wait(`我想让观众席上的大家一直看到飞鹰子闪耀的样子！`);
    await era.printAndWait(`以领放为策略的跑法正符合${falcon.name}的要求。`);
    await me.say_and_wait(`所有跑法之中，最适合的恐怕还是领放。`, true);
    await me.say_and_wait(`不过这样确实有飞鹰子的风格呢。`);
    await era.printAndWait(
      `不论是赛场还是舞台，比谁都要闪耀的存在，${falcon.sex}选择了这个方向啊。`,
    );
    await falcon.say_and_wait(
      `毕竟飞鹰子是闪闪发光的${falcon.get_uma_sex_title()}偶像呦⭐`,
    );
    await falcon.say_and_wait(
      `从过去到现在，直到之后的未来，都会一直闪耀下去的${falcon.get_uma_sex_title()}偶像!`,
    );
    await me.say_and_wait(
      `${falcon.name}要到达的地方，到底会是什么样的呢，我也开始期待了。`,
    );
    await falcon.say_and_wait(`一定会是最棒的场景！`);
    await falcon.say_and_wait(
      `啊啊。光是想到${falcon.name}作为${falcon.get_uma_sex_title()}偶像的场景，飞鹰子就有～说不尽的力气涌出来了！`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，接下来的目标是！`,
    );
    await era.printAndWait(
      `看来${falcon.name}已经恢复了力气，${callname}有点担心对方是不是在逞强。`,
    );
    await me.say_and_wait(`不过这样确实有飞鹰子的风格呢。`, true);
    era.printButton(`那就重新开始计时`, 1);
    await era.input();
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}！飞鹰子已经准备好了！`,
    );
    await me.say_and_wait(`预备！`);
    await era.printAndWait(
      `${falcon.name}的身体绷紧，眼神紧紧盯着前方的赛道。`,
    );
    await era.printAndWait(
      `随着发令枪的响起，扬起的尘土见证了沙地偶像踏出的第一步。`,
    );
  };

  handlers[9] = async (falcon, me, callname) => {
    const tokino = get_chara_talk(301);
    await print_event_name(`接下来也请多多指教⭐`, falcon);
    await era.printAndWait(`2月正是一年中最寒冷的日子。`);
    await era.printAndWait(
      `城市的天空被厚厚的云层所笼罩，突如其来的大雪将城市刷成了纯白色的样式。`,
    );
    await era.printAndWait(
      `寒冷的天气总会让人有种紧迫感，所以虽是休息日，${callname}还是早早的来到了训练室。`,
    );
    await era.printAndWait(
      `${falcon.name}的训练已经步入正轨，接下里的出道战应该不成问题。`,
    );
    await era.printAndWait(`不过令人在意的一点是，${falcon.name}的脚步很重。`);
    await era.printAndWait(
      `拜此所赐，为${falcon.sex}在沙地上制定的速度与力量训练进展很快。`,
    );
    await era.printAndWait(
      `或许正是这点支撑着对方在长时间的${falcon.get_uma_sex_title()}偶像活动仍然充满活力吧。`,
    );
    await tokino.say_and_wait(`哎呀，今天来这么早吗？`);
    await era.printAndWait(
      `思考的时间总是过得很快，手纲小姐就像是理所当然的出现在了特雷森校门，带着一丝微笑看着${callname}。`,
    );
    era.printButton(
      `只是希望为了可爱的${falcon.get_uma_sex_title()}们能够早日启程才早起前往的特雷森。说起来，今天的手纲小姐看起来也很美丽。`,
      1,
    );
    await era.input();
    await tokino.say_and_wait(`呵呵，真是的，就算夸奖我也不会有什么好处哦？`);
    await era.printAndWait(
      `轻笑着的手纲小姐露出了不会动摇的神情。某种意义上${falcon.sex}更像是理想的成年人。`,
    );
    await era.printAndWait(`互相鞠躬告辞后，名为礼节的仪式就此结束。`);
    await era.printAndWait(
      `当${callname}抖落肩膀上飘下的雪，将空调调至30度时——`,
    );
    await falcon.say_and_wait(`打扰了⭐`);
    await era.printAndWait(`${falcon.name}猛地一下推开了训练室的大门。`);
    era.printButton(`早上好！`, 1);
    await era.input();
    await era.printAndWait(
      `忽视门口传来的巨响，${falcon.teen_sex_title}口中呼出的白雾很快消散在了冰冷的空气之中，而${falcon.name}的热情不减。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}早上好！今天看起来也很精神呢！`,
    );
    await era.printAndWait(`随后便收到了${falcon.name}元气满满的回应。`);
    await era.printAndWait(
      `顺着${falcon.name}的笑容向下看去，${callname}的视线集中在了${falcon.sex}提着的小桶与扫把上。`,
    );
    await falcon.say_and_wait(
      `因为平时受到很多关照的缘故，所以飞鹰子今天打算做义工！`,
    );
    await era.printAndWait(
      `${falcon.name}摇晃着手中的小桶，如果里面装满了清水的话，一定会就此洒出去吧。`,
    );
    await me.say_and_wait(`具体来说是指？`);
    await falcon.say_and_wait(
      `嗯——趁着大家还没起来之前，将高架桥下飘到草地上的垃圾分类后扔到垃圾场⭐。`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}偶像到底是什么（哲学）。`,
    );
    await falcon.say_and_wait(
      `说起来，训练员${me.get_adult_sex_title()}打算一起来吗？`,
    );
    era.printButton(`我也想出一份力`, 1);
    era.printButton(`虽然很想去，但是这边还有工作要做`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await falcon.say_and_wait(`那真是太好了！`);
      await falcon.say_and_wait(`事不宜迟现在就出发吧！`);
      await era.printAndWait(
        `得到${callname}的同意后，${falcon.name}的笑容更灿烂了。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`不会让${callname}逃走的呦⭐`);
      await era.printAndWait(
        `${falcon.name}将最后的一点垃圾集中起来，放进了装好的黑色塑料袋中。`,
      );
      await falcon.say_and_wait(`接下来只要把这些垃圾全部扔掉就结束了！`);
      await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}辛苦了！`);
      await era.printAndWait(
        `随后${falcon.sex}便小心翼翼的将黑色塑料袋打上了漂亮的蝴蝶结。`,
      );
      await era.printAndWait(
        `虽说平时有宣传过要保护环境，但直到现在亲手拾起垃圾时${callname}才对此有了更深刻的理解。`,
      );
      await era.printAndWait(
        `不过对于飞鹰子来说，是以自己的方式回应一直支持自己的粉丝们吧。`,
      );
      await era.printAndWait(
        `……在这种地方意外的坚持着${falcon.teen_sex_title}感吗？`,
      );
      await falcon.say_and_wait(
        `如果没有训练员${me.get_adult_sex_title()}的话，要在演出开始之前处理完对飞鹰子还是有些困难呢……`,
      );
      await falcon.say_and_wait(
        `飞鹰子不知该如何感谢训练员${me.get_adult_sex_title()}。`,
      );
      await era.printAndWait(
        `大部分的垃圾都是${falcon.name}处理的，帮了大忙只是一种谦辞罢了。`,
      );
      await era.printAndWait(`该怎么回复好呢？\n`);
      era.printButton(`可以让我提前欣赏到飞鹰子的演出吗？`, 1);
      era.printButton(`接下来的期中考试全部及格！`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await falcon.say_and_wait(
          `咦？这样就好了吗？既然是训练员${me.get_adult_sex_title()}的要求的话。`,
        );
        await me.say_and_wait(`是飞鹰子的粉丝一号的要求！`);
        await falcon.say_and_wait(`欸？粉丝一号吗……飞鹰子想到了！`);
        await era.printAndWait(
          `似乎是因为粉丝一号这个称呼触及了飞鹰子的灵感，${falcon.name}的尾巴刷的一下竖了起来。`,
        );
        await falcon.say_and_wait(`嗯……这样的话……不对……这样更好。`);
        await era.printAndWait(
          `${falcon.name}将黑色塑料袋在舞台后面（舞台仅仅只是高架桥下5平方米的空地），随后从校服口袋中取出了麦克风。`,
        );
        await falcon.say_and_wait(
          `接下来将要出场的是飞鹰子刚刚想出来的歌曲♪是应粉丝一号${me.get_adult_sex_title()}的要求所作的beta版歌曲♪`,
        );
        await falcon.say_and_wait(`那么，三、二、一！`);
        await era.printAndWait(
          `尚未消散的白雾，泛白的天空，以及小小的空地所组成的演唱会现在开始。`,
        );
      } else if (ret1 === 2) {
        await falcon.say_and_wait(`咦咦咦？居然是这个要求。`);
        await me.say_and_wait(
          `有什么不会的地方我也会辅导${callname}的，所以飞鹰子不要想着逃跑这种事情了。`,
        );
        await era.printAndWait(`${falcon.name}稍微有些烦恼的样子。`);
        await falcon.say_and_wait(`不过飞鹰子会努力的！飞鹰子！加油！`);
        await era.printAndWait(
          `元气满满的声音惊吓到了附近公园的鸟群，它们绕着树木盘旋良久才回到巢中。`,
        );
        await era.printAndWait(
          `在回到特雷森的路上，${falcon.name}的心情似乎比之前更好。`,
        );
        await falcon.say_and_wait(
          `说起来，训练员${me.get_adult_sex_title()}。`,
        );
        await falcon.say_and_wait(
          `训练员${me.get_adult_sex_title()}也有正在关注的偶像吗？`,
        );
        await era.printAndWait(
          `虽然不知为何${falcon.name}突然提出了这个问题。`,
        );
        await falcon.say_and_wait(`啊，不用回答也行。不对，还是不要回答了。`);
        await era.printAndWait(
          `正当${callname}准备回答的时候，${falcon.name}有些窘迫不安。`,
        );
        await era.printAndWait(
          `${callname}望向了天空，靛蓝色的天空正逐渐被地平线上的金色所取代，不久后喧嚣声又将响起。`,
        );
      }
    } else {
      await falcon.say_and_wait(
        `训练员${me.get_adult_sex_title()}果然很辛苦呢。`,
      );
      await falcon.say_and_wait(
        `毕竟是飞鹰子自作主张的要求，训练员${me.get_adult_sex_title()}没关系的！`,
      );
      await era.printAndWait(
        `${falcon.name}露出了略微遗憾的表情，但很快恢复了往日的神情。`,
      );
      await me.say_and_wait(`路上小心！`);
      await falcon.say_and_wait(
        `嗯！飞鹰子会连着训练员${me.get_adult_sex_title()}的那份一起加油的！`,
      );
      await era.printAndWait(
        `${callname}看到${falcon.name}的耳朵动了动后轻轻关上了训练室的大门。`,
      );
      await era.printAndWait(
        `在飞鹰子的努力之下，在河边漂浮的废弃物全部都消失了。`,
      );
    }
  };
  handlers[18] = async (falcon, me, callname, flags) => {
    // 5月第3周
    await print_event_name(
      `于是大脑空空的${falcon.name}只剩下了一个念头`,
      falcon,
    );
    await era.printAndWait(`5月中旬的某一天。`);
    await era.printAndWait(
      `训练计划稳步推进，得益于${falcon.name}一直以来不遗余力的宣传，渐渐地河边的街头演出已经有几名忠实粉丝了。`,
    );
    await era.printAndWait(
      `现实的情况比预想之中更加乐观，或许有些答案只有在实践过后才能得知。`,
    );
    await era.printAndWait(
      `满足的吐出叹息声后，${callname}才意识到背后已经汗流浃背。`,
    );
    await era.printAndWait(`春夏交替的间隔期，明显比去年更热了。`);
    await me.say_and_wait(
      `距离出道战也不远了，接下来就是检验训练成果的时候了！`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}不好了！`);
    await era.printAndWait(
      `这么想着的${callname}，突然被闯入训练室的身影吓了一跳。`,
    );
    await me.say_and_wait(`又是因为测试不及格吗？`, true);
    await era.printAndWait(`虽然是意料之外但也不是没有预想。`);
    await falcon.say_and_wait(`虽然这件事也很重要，但是飞鹰子遇到的不是这个！`);
    await era.printAndWait(
      `${callname}才注意到${falcon.teen_sex_title}大口的喘着粗气，汗珠从额头流向脖颈。`,
    );
    await era.printAndWait(`对方是一路跑过来的。`);
    await me.say_and_wait(`发生什么了？`);
    await falcon.say_and_wait(
      `哈啊，哈啊……嗯，飞鹰子为了向特雷森周围的大家推广${falcon.get_uma_sex_title()}偶像的概念，除了派发自己精心准备的海报之外，还额外附赠了一些小礼品。`,
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
    await era.printAndWait(`短暂思考过后，${callname}决定\n`);
    era.printButton(`试着考虑一下其他店铺？`, 1);
    era.printButton(`最重要是飞鹰子作为偶像的心！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`如果考虑到${falcon.name}积攒下来的人气。`);
      await me.say_and_wait(
        `作为${falcon.get_uma_sex_title()}偶像向商业街的店铺开展活动筹集经费怎么样？`,
      );
      await me.say_and_wait(
        `飞鹰子很擅长将气氛炒热，就这样一边为店铺吸引顾客，一边脚踏实地积累人气。`,
      );
      await me.say_and_wait(`利用从店铺积累下来的资金，撑过这段时间吧！`);
      await falcon.say_and_wait(`但是应该找谁呢？`);
      await era.printAndWait(`如果考虑到${falcon.name}积攒下来的人气。`);
      await me.say_and_wait(`我也会在旁边协助飞鹰子的。`);
      await falcon.say_and_wait(`呼～得救了……太好了。`);
      await era.printAndWait(
        `${falcon.name}兴奋的拉着${callname}的手转起了圈。`,
      );
      await era.printAndWait(`说起来——`);
      await era.printAndWait(
        `对粉丝一视同仁的飞鹰子与作为担当${falcon.get_uma_sex_title()}的${falcon.name}。`,
      );
      await era.printAndWait(`对${falcon.name}来说，那个更加重要呢？`);
      await era.printAndWait(
        `在这份天旋地转的充裕中，${callname}懒洋洋的想起了这个问题。`,
      );
      await me.say_and_wait(`……先处理眼前的事情吧。`, true);
      await era.printAndWait(
        `之后${callname}从在不同店家打工的${falcon.get_uma_sex_title()}那里得知了正在苦恼缺少宣传的店主。`,
      );
      await era.printAndWait(
        `最终以联动的方式成功吸引了一大批参观的游客，除去应得的酬劳与奖金外，${falcon.name}还在马推上收获了新的粉丝。`,
      );
    } else {
      await me.say_and_wait(`最重要的是飞鹰子作为偶像的那颗心！`);
      await falcon.say_and_wait(`诶？`);
      await me.say_and_wait(
        `与重视外表与排场的模特相比，青涩而又可爱，比模特更加亲近粉丝才是${falcon.get_uma_sex_title()}偶像的卖点！`,
      );
      await era.printAndWait(
        `越说越激动的${callname}猛地拍了一下桌子，随后被震得生疼。`,
      );
      await falcon.say_and_wait(
        `诶？训练员${me.get_adult_sex_title()}的意思是飞鹰子太过使用宣传手段而忽视了作为${falcon.get_uma_sex_title()}偶像的核心吗？`,
      );
      await me.say_and_wait(
        `没错！让大家看看作为${falcon.get_uma_sex_title()}偶像而活跃的${falcon.name}吧！`,
      );
      await falcon.say_and_wait(
        `我知道了！飞鹰子会朝着${falcon.get_uma_sex_title()}偶像的方向努力的！`,
      );
      await era.printAndWait(`说起来——`);
      await era.printAndWait(
        `对粉丝一视同仁的飞鹰子与作为担当${falcon.get_uma_sex_title()}的${falcon.name}。`,
      );
      await era.printAndWait(`对${falcon.name}来说，那个更加重要呢？`);
      await me.say_and_wait(`虽然有些不甘心，不过对于飞鹰子来说，恐怕`, true);
      await era.printAndWait(
        `很快这个想法便在${falcon.name}兴奋的提出的诸多方案中被淹没了。`,
      );
      await era.printAndWait(
        `在习得了${falcon.get_uma_sex_title()}偶像之心后的${falcon.name}，凭借其特有的敏感且细腻，吸引了大量的粉丝。`,
      );
    }
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };
  handlers[24] = async (falcon, me, callname, flags) => {
    await print_event_name(`薰衣草`, falcon);
    await era.printAndWait(`河边草地。\n`);
    await falcon.say_and_wait(`一直支持着飞鹰子的大家！飞鹰子现在终于`);
    await era.printAndWait(
      `按照计划踏踏实实进行训练的${falcon.name}现在已经颇具成效。`,
    );
    await era.printAndWait(`接下来的出道战，${falcon.name}已经准备万全了。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(
      `就像往常一样陪伴着${falcon.name}走在回到特雷森的道路时，${falcon.name}突然望着${callname}。`,
    );
    await era.printAndWait(`临近比赛，会有所忧虑也是在所难免的吧。`);
    await era.printAndWait(`这也是正常的事情。`);
    await falcon.say_and_wait(`说起来，这是飞鹰子第一次亮相呢。`);
    await era.printAndWait(
      `${falcon.name}正是以${falcon.get_uma_sex_title()}偶像为目标直直的出发。`,
    );
    await falcon.say_and_wait(
      `虽然在踏上${falcon.get_uma_sex_title()}偶像这条道路时兴奋得一晚没睡，但随着撕下来的日历一天天的过去，飞鹰子现在也稍微有些……`,
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
    await era.printAndWait(`${falcon.name}向${callname}露出了微笑。`);
    await falcon.say_and_wait(
      `……训练员${me.get_adult_sex_title()}接下来也会在飞鹰子的身边一直支持飞鹰子吧？`,
    );
    era.printButton(`就是这样。`, 1);
    await era.input();
    await falcon.say_and_wait(
      `唔——训练员${me.get_adult_sex_title()}对其他${falcon.get_uma_sex_title()}也会这么说吗？`,
    );
    await era.printAndWait(`${callname}假装没听到${falcon.name}的自言自语。`);
    flags.wait_flag =
      get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 0) || flags.wait_flag;
  };

  handlers[30] = async (falcon, me, callname, flags) => {
    await print_event_name('希望永远持续下去的日常', falcon);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，飞鹰子最近找到了一个适合演出的场所，可以和飞鹰子一起去看看吗？`,
    );
    await era.printAndWait(
      `${callname}从文件夹中抬起头，与${falcon.name}对上了视线。`,
    );
    await me.say_and_wait(`呜啊。`);
    await era.printAndWait(
      `猛地贴近${callname}的${falcon.name}露出了恶作剧成功的笑容。`,
    );
    await me.say_and_wait(`好近！`, true);
    await era.printAndWait(
      `仔细想想的话，${falcon.sex}也正处于多愁善感的时间段，会做出这种事也很正常。`,
    );
    await me.say_and_wait(
      `虽然也不是否定飞鹰子的努力，不过最近偶像活动会不会有些太频繁了？`,
    );
    await me.say_and_wait(
      `虽然向着理想的未来前进是正确的事，但考试挂科会拖累自己前进的步伐。`,
    );
    await falcon.say_and_wait(
      `呀！……这个……飞鹰子已经在反省中了，所以偶像活动也有好好考虑过时间和地点啦。`,
    );
    await era.printAndWait(
      `${falcon.name}似乎有些心不在焉的样子，在${callname}猛地咳嗽一声才慌忙的做出解释。`,
    );
    await me.say_and_wait(`说谎的人眼睛不敢对视他人。`);
    await era.printAndWait(
      `听完之后慌忙正视${callname}的双眼的${falcon.name}使${callname}确信了一件事。`,
    );
    await me.say_and_wait(
      `我就知道……如果飞鹰子答应我在接下来的期中好好复习的话，我也答应${callname}的请求。`,
    );
    await falcon.say_and_wait(
      `诶诶诶？训练员${me.get_adult_sex_title()}是怎么知道的。`,
    );
    await era.printAndWait(
      `${falcon.name}的表情不像是装的，但心中却隐隐感觉不安。`,
    );
    await me.say_and_wait(`这样下去，${falcon.name}真的没问题吗？`, true);
    await era.printAndWait(`接下来的计划可能要稍微修改了。`);
    await me.say_and_wait(`这段时间就稍微暂停一下突击演出吧？`);
    await falcon.say_and_wait(`不要！`);
    await era.printAndWait(`${falcon.name}的反应比想象中更加激烈。`);
    await falcon.say_and_wait(
      `不对!飞鹰子不是这个意思！飞鹰子会好好复习的！所以飞鹰子有必须举办的必要！`,
    );
    await era.printAndWait(
      `姑且得到了${falcon.name}的承诺，以飞鹰子对偶像活动的重视来看，至少不用担心接下来和班主任玩猫捉老鼠的游戏了。`,
    );
    await falcon.say_and_wait(
      `唔——飞鹰子想要说什么来着……对了！训练员${me.get_adult_sex_title()}？`,
    );
    await era.printAndWait(`${falcon.name}直视着${callname}的双眼。`);
    await falcon.say_and_wait(
      `飞鹰子有个地方想要和训练员${me.get_adult_sex_title()}一起去看看。\n\n\n`,
    );
    await era.printAndWait(
      `被${falcon.name}牵着的${callname}，来到了一处空旷的草地。`,
    );
    await era.printAndWait(
      `或许是周围没有高大建筑物的原因，总觉得天空比以往离得更近。`,
    );
    await era.printAndWait(
      `或许是快到夏天的缘故，空气也比以往更加潮湿。穿透云层的阳光在草地上形成了薄薄的一层气雾。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}觉得这里怎么样？`,
    );
    await era.printAndWait(
      `${falcon.name}摇晃着${callname}的手腕，用压抑不住的兴奋感询问着${callname}的意见。`,
    );
    await era.printAndWait(
      `能在繁华的都市圈找到这样一处草地，恐怕${falcon.name}也是花了很多时间吧。`,
    );
    await era.printAndWait(
      `不，仔细想想的话，也许是因为这块地皮原本计划着作为大型商场来使用，但因为种种原因搁置了。随后便成了植物们的乐园。`,
    );
    await falcon.say_and_wait(
      `嗯——作为排练的一环，训练员${me.get_adult_sex_title()}可以作为飞鹰子的助手吗？`,
    );
    await me.say_and_wait(`嗯？`);
    await era.printAndWait(
      `${falcon.name}的表情因为背对着太阳而看不清楚，但可以从不断抖动的耳朵判断，恐怕${falcon.sex}是下了很大的勇气才做出的决定。`,
    );
    await era.printAndWait(
      `找借口也要找个更好的吧，但${falcon.sex}这份心意说实话有些难办。`,
    );
    era.printButton(`接下来可以拜托${callname}吗？飞鹰子？`, 1);
    await era.input();
    await falcon.say_and_wait(
      `如果训练员${me.get_adult_sex_title()}不愿意的话也没办法……诶？`,
    );
    await era.printAndWait(
      `似乎是没想到${callname}会这么爽快同意的缘故，${falcon.name}先是愣了一下，然后轻轻牵起了${callname}的手。`,
    );
    await falcon.say_and_wait(`非常荣幸⭐`);
    await era.printAndWait(
      `${falcon.sex}以一种奇妙的轻快声音回复着${callname}。`,
    );
    await era.printAndWait(
      `天空比任何时候都要接近地面，融化在青草与泥土混合吐息之中，虽说一开始还在努力跟上${falcon.name}的节奏，但伴随着一次剧烈的碰撞，终于还是坚持不住的${callname}一屁股坐在了草地之上。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}！`);
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
    await falcon.say_and_wait(
      `诶！训练员${me.get_adult_sex_title()}剧烈运动后不能躺在草坪上！`,
    );
    await era.printAndWait(`被纤细手臂传来的巨力拉了起来。`);
    await era.printAndWait(`唔，总觉得有些怀念呢。`);
    await era.printAndWait(`悲伤、怀念以及释然混杂的复杂情感涌上心头。`);
    await me.say_and_wait(`但是，现在的我也没什么不幸福的地方。`, true);
    await era.printAndWait(`如果这样的日常能永远持续下去的话。`);
    await era.printAndWait(
      `下意识的抬头看去，湛蓝的天空之中几朵积雨云无拘无束的飘动着。`,
    );
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };
  handlers[40] = async (falcon, me, callname, flags) => {
    // 夜间停止光合作用排出废气 为了摆脱某种“我已经过时、即将被埋葬”的恐惧。大量追赶新潮头试图击退自己的生存恐惧。
    await print_event_name('夜来香', falcon);
    await era.printAndWait(
      `为了在沙地赛上打响${falcon.name}的名气，${callname}们开始计划接下来要参加的比赛。`,
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
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`既然是深夜发来的短信，没有不接的道理吧？`);
      await era.printAndWait(`这么想着${callname}打开了手机。`);
      await falcon.say_and_wait(
        `晚上好！训练员${me.get_adult_sex_title()}睡着了吗？`,
      );
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
        `虽然不是什么很大的事情，不过飞鹰子总觉得还是咨询训练员${me.get_adult_sex_title()}比较好。`,
      );
      await era.printAndWait(
        `看上去${falcon.name}是把${callname}视为了可靠的大人吗？`,
      );
      await era.printAndWait(`虽然有些荣幸但……一时间不知道该如何是好。`);
      era.printButton(`请告诉我发生了什么。`, 1);
      era.printButton(`有什么事明天再说`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await me.say_and_wait(
          `如果飞鹰子有什么困难的话，无论何时何地都可以和我商量。`,
        );
        await era.printAndWait(
          `等待回复的时间比想象之中还要漫长，就在${callname}即将睡着的前一刻，一口气接受的消息瞬间多了10+条。`,
        );
        await falcon.say_and_wait(
          `……如果是训练员${me.get_adult_sex_title()}，偶尔说些丧气话也没关系吧？`,
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
          `${callname}几乎想象到了对方一遍又一遍的修改着语气，最后才勉强压抑住了心中的激动。`,
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
          `作为赛${falcon.get_uma_sex_title()}的${falcon.name}可以在比赛之中的活跃表现，向还在观看比赛的观众们诉说自己的故事。`,
        );
        await era.printAndWait(
          `在科技日新月异的当下，这也足够为传统偶像留下一席之地了。`,
        );
        await era.printAndWait(
          `一边选择合适的论点，一边思考着传统偶像的优势。`,
        );
        await falcon.say_and_wait(
          `谢谢${callname}！训练员${me.get_adult_sex_title()}！接下来飞鹰子会在偶像的道路上更加努力的！`,
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
        `将手机调成免打扰后，${callname}继续陷入了睡眠之中。`,
      );
    }
    flags.wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], 10) ||
      flags.wait_flag;
  };
};
