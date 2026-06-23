/**
 * @file 北部玄驹 - 育成
 * @author 小黑
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '额外自主训练！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, callname) => {
      await era.printAndWait([
        '训练结束后，',
        kita.get_colored_name(),
        ' 似乎仍有些意犹未尽。',
      ]);
      await era.printAndWait([
        kita.sex,
        '远远向天边望去，夕阳正在垂落，最后的光芒洒落大地。',
      ]);
      await era.printAndWait(`天马上就要黑了，但是还不够，还没有到达极限。`);
      era.printButton('「继续训练吧！」', 1);
      era.printButton('「今天就到此为止吧。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(['明白了！那么', callname, '请看好哦！']);
      } else {
        await kita.say_and_wait(`这样么，好～那么就好好休息明天再锻炼吧！`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`痛痛痛痛……扭伤了啊……`);
      await era.printAndWait(
        `坐在保健室的椅子上，${kita.name} 伸手轻轻戳着缠绕在脚腕上的膏药贴，不甘心的嘟起了嘴。`,
      );
      await era.printAndWait(
        `看来今天只能休息了呢，${you.name} 如此告知 ${kita.name}。`,
      );
      await kita.say_and_wait(`休息么……真不甘心啊……`);
      await kita.say_and_wait(`但是既然 ${callname} 这么说了，也只能这样了……`);
      await era.printAndWait(
        `${kita.name} 翻身用被子包裹住了自己，闭上眼开始睡觉了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(`好痛啊……这次的好像真的有点严重了……`);
      await era.printAndWait(
        `${kita.name} 坐在保健室的床上，捂住腰，露出了十分扭曲的表情。`,
      );
      await era.printAndWait(
        `看来今天只能休息了呢，${you.name} 如此告知 ${kita.name}。`,
      );
      await kita.say_and_wait(
        `诶，休息么？可是……这个时候的大家都在训练，对吧…？`,
      );
      await kita.say_and_wait(
        `让我……休息真的好么？就算是比较轻松的训练也好，我不太想要休息啊……`,
      );
      await era.printAndWait(
        `${you.name} 看向小北身上肿起的地方，不管怎么样，这都只能休息了，不如说不休息问题反而会更加严重……`,
      );
      await kita.say_and_wait(
        `说的也是……那我也只能收拾一下心情，好好的休息了……`,
      );
      await era.printAndWait(
        `${kita.name} 有些落寞地躺进被子里，呆呆的望着天花板。`,
      );
      await kita.say_and_wait(
        `保健室，原来是这么安静的地方啊……有点寂寞呢……`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}！我，赢了哦！`);
      await kita.say_and_wait(`来看望比赛的大家也很开心的样子，真是太好了！`);
      await era.printAndWait(
        `高兴地摇晃起尾巴，${kita.name} 露出了愉快的表情。`,
      );
      await era.printAndWait(
        `刚刚看到小北和老家的父亲通了电话，被父亲好好夸奖了一番，还说晚上要喝酒庆祝。`,
      );
      await era.printAndWait(
        `那么今天也用果汁庆祝一下吧，这么说着，${you.name} 拿出饮料倒了两杯果汁。`,
      );
      await kita.say_and_wait(`好耶，${callname}，干杯！`);
      await era.printAndWait(
        `在纸杯的碰撞中，${kita.name} 毫不在乎撒在手腕上的果汁，开心地庆祝起了胜利。`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜！';
    /**
     * 通用比赛入着
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在休息室里，${kita.name} 咕咚咕咚的大口喝着水，而后长长的舒了一口气。`,
      );
      await kita.say_and_wait(
        `噗哇～感觉好多了！谢谢你${callname}……诶？为什么要露出这样的表情？`,
      );
      await era.printAndWait(
        `看着露出担忧表情的 ${you.name}，${kita.name} 嘿嘿笑着将瓶盖拧上。`,
      );
      await kita.say_and_wait(
        `只不过是没有赢下比赛而已啦，${callname}请不要太担心哦。`,
      );
      await kita.say_and_wait(
        `虽然小北我觉得很不甘心，但是下一次一定会加倍努力，赢得比赛的！`,
      );
      await era.printAndWait(
        `看到反而是安慰起自己的黑色${kita.uma_sex_title}，${
          you.name
        } 松了一口气，同时在心底暗自下了决心。`,
      );
      await era.printAndWait('下一次，一定会赢。');
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '竞赛失败！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
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
        `手机屏幕的光照亮了小北的脸蛋，${you.name} 注意到上面没有半分沮丧的神情。`,
      );
      await era.printAndWait(
        `正相反，小北的脸蛋是已经振作起来的人才会露出的表情。`,
      );
      await kita.say_and_wait(
        `这么多的人都在为我应援，鼓励我呢，既然如此，我又有什么资格沮丧呢！`,
      );
      await kita.say_and_wait(`${callname}，等我们回去了就去加倍锻炼吧！`);
      await era.printAndWait(`这么说着，小北站起身，仿佛比之前更有精神了。`);
    };
    f.title = title;
    return f;
  })(),
  race_lose: (() => {
    const title = '竞赛失败！';
    /** @param {CharaTalk} kita 北部玄驹 */
    const f = async (kita) => {
      await kita.say_and_wait('唔姆姆姆姆……这次又输了啊……');
      await era.printAndWait(
        '垂头丧气的小北用吸管在果汁里吹着泡泡，露出了沮丧的表情。',
      );
      await kita.say_and_wait('真是不甘心啊……下次一定要赢过来……');
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = '北部玄驹登场';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '时值新学期开始前的最后一天，正是春光明媚的好时候。',
      );
      await era.printAndWait(
        `而在特雷森，生涯的开始是在让人心情愉快的大晴天里的赛${kita.uma_sex_title}们也显得十分快乐。`,
      );
      await era.printAndWait(
        `在这样美好的日子里，${you.name} 整理好着装，想好致辞，准备和担当迎接一起努力奔驰的三年。`,
      );
      await era.printAndWait(`而${kita.sex}的名字就是————`);
      await kita.say_and_wait(`请多指教！${callname}！`);
      await era.printAndWait(
        `北部玄驹跟黑道似的起身向 ${you.name} 深深鞠躬，黑色的短发随着大幅度的动作摇晃起来。`,
      );
      await era.printAndWait(
        `这幅健康的样子让 ${you.name} 赞许的点了点头，结实的身体是结出胜利果实的基础，而努力的锻炼正是在这些基础上达成的。`,
      );
      await era.printAndWait(
        `仅仅是这样的身体，便足以让 ${
          you.name
        } 相信${kita.teen_sex_title}的力量。`,
      );
      await era.printAndWait(
        '训练场在太阳的照耀下显得是那么耀眼，绿茵茵的草场跑道的香味让人兴奋起来。',
      );
      await era.printAndWait(
        `如何与青春期本格化的${kita.uma_sex_title}相处？未来的训练和赛程计划？失败后又要如何面对自己的担当？那些就留给未来的自己去想吧！`,
      );
      await era.printAndWait(
        `现在的 ${you.name}，只需要现在跑道上看着 ${kita.name} 奔跑的样子，这就足够了！`,
      );
      await kita.say_and_wait(
        `那么${callname}，我开始跑了哦！请您认认真真的看好了！`,
      );
      await era.printAndWait(
        `祭典般的赛${kita.uma_sex_title}站在跑道上向 ${
          you.name
        } 挥了挥手，弯下腰，绷紧小小的身体，在 ${
          you.name
        } 面前毫无保留地迈开步伐奔跑起来。`,
      );
      await era.printAndWait(
        `于是那振奋人心的步子，那有如祭典般的热情，仿佛在清晨盛开的牵牛花般在 ${you.name} 面前绽放。`,
      );
      await era.printAndWait(`而 ${kita.name} 的故事，也由此开始了。`);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kita) => `不过是平平无常的${kita.teen_sex_title}`;
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}！今天也请您多多指教了！`);
      await era.printAndWait(
        `向 ${you.name} 深深鞠了一躬，${kita.name} 小跑着翻过栅栏，像只活泼的小鹿似的跳进跑道里开始了今天的锻炼。`,
      );
      await era.printAndWait(
        `在和 ${kita.name} 一起进行过锻炼之后，身为训练员的 ${you.name} 基本摸清了担当的素质。`,
      );
      await era.printAndWait(
        `首先，也是最重要的是，${kita.name} 的身体相当结实。`,
      );
      await era.printAndWait(
        `仅仅在进入赛道后不到二十分钟的时间，${kita.name} 便完成了预计应是半小时的热身任务。`,
      );
      await kita.say_and_wait(
        `${callname}，我热身完了，接下来的计划是什么！？`,
      );
      await kita.say_and_wait('是速度训练么？还是耐力训练？这些我都可以哦。');
      await era.printAndWait(
        `站在跑道里，好看的脸蛋因为热身而微微发烫的赛${kita.uma_sex_title}对这边大声问道。`,
      );
      await era.printAndWait(`第二个是，${kita.sex}是个很不擅长计划的姑娘。`);
      await era.printAndWait(
        '虽然不至于到在训练里三心二意的地步，说好听点也可以称赞这是随时而动。',
      );
      await era.printAndWait(
        `但是 ${
          kita.name
        } 这位赛${kita.uma_sex_title}，并不会是那些会根据自己条件制定策略和计划的孩子。`,
      );
      era.println();

      era.printButton('「是评测小北奔跑素质的锻炼哦。」', 1);
      await era.input();
      await era.printAndWait(
        `一边说着，${you.name} 将视线重新移回笔记本上。而除此之外，还有一个最大的问题。`,
      );
      await kita.say_and_wait(
        '评测我的身体素质么？明白了！我会全力以赴地展现实力的！',
      );
      await era.printAndWait(
        '正在兴头上的小北摇晃起尾巴，小跑着跑到用白油漆画出的起点线后。',
      );
      await era.printAndWait(
        `在号令枪令人耳鸣的巨大声响中，黑色的赛${kita.uma_sex_title}迈开步伐向前奔驰而去。`,
      );
      await era.printAndWait(
        `深色跑鞋在草地上踏出一道浅浅的脚印，${kita.name} 压低身子大步冲锋在前`,
      );
      await era.printAndWait(
        `若这是赛道上的一条行列的话，那么${kita.sex}必然在先行靠前的位置上。`,
      );
      era.println();

      era.printButton('「但是……」', 1);
      await era.input();
      await era.printAndWait(`但是，看不到能够取得绝对胜利的要素。`);
      await era.printAndWait(
        `${
          you.name
        } 忧心忡忡地望向小北漆黑的身影，渴望从中看到掩藏在${kita.teen_sex_title}小小身体下的某种天赋。`,
      );
      await era.printAndWait(
        `尽管${kita.sex}的身体素质优秀的无可言说，但在中央这卧虎藏龙之地这远远不够，若是没有足以击败${kita.sex}人的兵器……`,
      );
      await kita.say_and_wait('呼，呼，呼……');
      await era.printAndWait(
        `${
          you.name
        } 看到${kita.teen_sex_title}均匀的喘息，那白皙结实的小腿在草场上绷出令人惊叹的曲线，而${
          kita.sex
        }的身影在 ${you.name} 的视网膜中变得越来越近。`,
      );
      await era.printAndWait('可是仅凭身体素质，走不了太远的。');
      await era.printAndWait(`${you.name} 摁下秒表，那是个中规中矩的成绩。`);
      await era.printAndWait(
        `必须让 ${kita.name} 找到独属于${kita.sex}的兵器。`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '第一次！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在 ${kita.name} 冲过终点线的瞬间，${you.name} 长长的松了口气，悬住的心脏终于放了下来。`,
      );
      await era.printAndWait(
        `尽管无比相信担当的素质，尽管无比确信${kita.sex}是能赢得胜利的孩子。`,
      );
      await era.printAndWait(
        `但在真正胜利前，${you.name} 仍然对能否顺利的取得胜利而感到些许忧虑，以及对自己的不信任。`,
      );
      await era.printAndWait(
        `而现在，尘埃落定，${you.name} 看着跌跌撞撞向这边跑来的担当，拿着毛巾和矿泉水凑了上去。`,
      );
      await kita.say_and_wait(
        `${callname}！我…赢了哦！赢了对吧！是这样赢了的对吧！`,
      );
      await era.printAndWait(
        `带着满身滚烫的热气猛地逼近，${kita.name} 带着急切的表情向 ${you.name} 询问道。`,
      );
      await kita.say_and_wait('我……不是在做梦对吧！');
      era.println();

      era.printButton('「赢了哦，小北。」', 1);
      await era.input();
      await era.printAndWait(
        `聆听着竞马场里高亢而兴奋的欢呼声和赞扬声，${you.name} 对自己那无比渴望胜利的担当如此回答道。`,
      );
      await era.printAndWait(
        `想要将自己的热情、自己的意志传达给众人的 ${kita.name}，通过这次胜利毫无疑问地将其传达了出去。`,
      );
      await era.printAndWait(
        `带 ${you.name} 看到担当的表情从紧绷的急切一下子松弛了下来，而后像往常那样露出了温暖的笑。`,
      );
      await kita.say_and_wait(
        `嘿诶……感觉，没什么实感的样子啊，脑子还是空荡荡的。`,
      );
      await era.printAndWait(
        `毕竟是小北啊，${you.name} 如此感叹着将视线移开，而直到这时 ${you.name} 才注意到，小北的衣服已经被汗液彻底淋透了。`,
      );
      await kita.say_and_wait(`呜哇啊～${callname}！？`);
      await era.printAndWait(
        `不好……在不像样的想法从脑海中浮现时，${you.name} 迅速展开毛巾盖在小北身上，将${kita.sex}的身体仔仔细细的盖了起来。`,
      );
      await era.printAndWait(
        '？？？「下午第一场比赛，就到这里结束了，真是一场精彩的比赛。」',
      );
      await era.printAndWait(`？？？「那么接下来的比赛是……」`);
      await era.printAndWait(`于是就这样，${kita.name} 的出道赛结束了。`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_after: (() => {
    const title = '第一次的……';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await kita.say_and_wait('我……赢了么了？这次真的赢了么……');
      await era.printAndWait(
        `站在终点线后，${kita.name} 大口大口地喘息着，似乎不敢相信眼前的事实。`,
      );
      await era.printAndWait(
        `直到在原地站了很久之后，${you.name} 的担当才露出了笑容。`,
      );
      await kita.say_and_wait('我，赢了啊……');
      await era.printAndWait(
        `随着赛${kita.uma_sex_title}们一起走向了竞马场出口，${
          kita.name
        } 露出了胜利的笑容。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = '优秀素质 登场';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, nature, you, callname) => {
      await era.printAndWait('十月后半的某一天上午。');
      await era.printAndWait(
        `自从出道战之后已经过去了三个半月的时间，${you.name} 和小北在赛道上一如往常地进行着并跑锻炼。`,
      );
      await era.printAndWait(`而今天作为训练的陪同对象是……`);
      await kita.say_and_wait(`啊，是素质${nature.adult_sex_title}！`);
      await nature.say_and_wait(`呀吼～${callname}我来了呦～小北久等了么？`);
      await era.printAndWait(
        `向这边挥着手慢步跑来，碰巧有时间的素质小姐慵懒地嘿嘿笑着同小北闲聊起来。`,
      );
      await era.printAndWait(
        `今天的训练计划是锻炼对恶劣环境的毅力和忍受能力，内容则是两人在泥地赛道上的并跑训练。`,
      );
      await era.printAndWait(
        `虽然 ${kita.name} 并没有在泥地赛道奔跑的天赋，但是这样反而能更好的进行训练吧。`,
      );
      await kita.say_and_wait(
        `今天请多多指教，素质${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(`不要这么认真啦，叫我素质就好了～`);
      await era.printAndWait(
        `在稍微热身了十分钟后，${nature.name} 和 ${kita.name} 一前一后地走进赛道，开始了今天的训练。`,
      );
      era.drawLine({ content: '一段时间后' });
      await era.printAndWait(`就结果而言，并不乐观。`);
      await nature.say_and_wait(`呜哇～小北 ${you.name} 没事吧～脚还好么？`);
      await kita.say_and_wait(
        `哈啊哈啊……没…没关系的……素质${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(`都说了叫我素质就好……`);
      await era.printAndWait(
        `在 ${nature.name} 的搀扶下，在泥地里摔了一跤的${kita.name}走出跑道，露出了明显是在强撑的笑容。`,
      );
      await era.printAndWait(
        `不知是担当的用力过猛还是训练员选用的训练方式有误，小北在结束训练后重重的摔了一跤。`,
      );
      await era.printAndWait(
        `尽管训练本身卓有成效，但是除去常规训练以外，其他的根性训练计划暂时中止好了。`,
      );
      await era.printAndWait(
        `看着勉强站起身走向这边的${kita.name}，${you.name} 在笔记本的这一条上重重的划了一道叉。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sa_42: (() => {
    const title = '悠闲的午后时光';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在没有课也没有训练计划的某个下午，${you.name} 在食堂旁的侧门处找到了小北。`,
      );
      await kita.say_and_wait(`啊～${callname}中午好。`);
      await era.printAndWait(
        `小北搬着两箱罐装汽水，尾巴左摇右晃的向这边打了个招呼。`,
      );
      await era.printAndWait(
        `${
          you.name
        } 看到在${kita.teen_sex_title}背后，食堂原本关闭的侧门正被木棍撑住，而七八箱汽水在旁边堆成了小山……这是在干什么啊。`,
      );
      await kita.say_and_wait(
        '啊，这个是食堂小卖部的阿姨搬汽水扭到了腰，所以我想帮她把箱子都搬进去。',
      );
      await kita.say_and_wait(
        `诶嘿嘿……被${callname}看到了其他的样子，有点害羞呢……`,
      );
      await era.printAndWait(
        `看着 ${you.name} 惊讶的样子，${kita.name}害羞的嘿嘿笑着用箱子挡住了脸。`,
      );
      await kita.say_and_wait(`先不和${callname}说了，我接着搬箱子了哦。`);
      await era.printAndWait(
        `这么说着，小北将几个箱子叠在一块，稳稳当当地顺着侧门走了进去。`,
      );
      await era.printAndWait(
        `${you.name} 看着小北娇小而结实的背影，心里若有所思。`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在神社鸟居旁的角落里，${you.name} 看到了带着滚烫热情的 ${kita.name}，看样子已经等 ${you.name} 等了很久的样子。`,
      );
      await kita.say_and_wait(`${callname}，新年的一年请您多多指教！诶嘿嘿～`);
      await era.printAndWait(
        `${kita.name} 向 ${you.name} 打了个招呼，哒哒哒地跑了过来，小小的靴子在石板上发出了清脆的响声。`,
      );
      await era.printAndWait(
        '看来每年为了祈祷经典年能够顺利进行的祈福传统，让这只小马过于兴奋了呢。',
      );
      await kita.say_and_wait(
        '那么事不宜迟，为了今年的顺利，我们快去神社里参拜吧！',
      );
      await era.printAndWait(
        `穿着一身深色浴衣的 ${kita.name} 抖动着可爱的马耳，拉着你的衣袖笑嘻嘻的催促道。`,
      );
      await era.printAndWait(
        `${you.name} 摸了摸小北的脑袋，和 ${kita.sex} 一起聆听着神社里传来的阵阵声响，走上满是青苔的漫长台阶。`,
      );
      await era.printAndWait('哒、哒、哒……');
      await era.printAndWait(
        `聆听着两人安静而单调的脚步声，${you.name} 和 ${kita.name} 踏过八十八节略显圆滑的台阶。`,
      );
      await era.printAndWait(
        `而在追着迫不及待跑上的${kita.teen_sex_title}走过最后几节台阶后，出现在你们面前的是满是欢声笑语的热闹景象。`,
      );
      await kita.say_and_wait(
        '呜哈哈～就算是东京的神社也和老家的神社差不多啊～',
      );
      await era.printAndWait(
        `${kita.name} 穿过被张灯结彩的纸灯笼束成的小道，小跑着来到神社的赛钱箱前面，认真的拍了两次手，鞠了一躬。`,
      );
      await kita.say_and_wait(
        '唔唔唔……为了明年三月能够有足够的粉丝去比赛，请大家一定要来看我的比赛啊……',
      );
      await era.printAndWait(
        `听着赛${kita.uma_sex_title}小声念叨着自己的愿望，${
          you.name
        } 也拍了拍手，开始祈祷起来。`,
      );
      era.printButton('（希望小北能跑得更快）（速度+25）', 1);
      era.printButton('（希望小北能应对更长的比赛）（耐力+20）', 2);
      era.printButton('（希望小北能掌握更多技巧）（技能点数+50）', 3);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = '家人是很重要的';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `某一天上午，${you.name} 同 ${kita.name} 一起待在训练员室里。`,
      );
      await era.printAndWait(
        `因为没有训练计划，${you.name} 看到小北正百无聊赖地趴在沙发上同家里人打着电话，等 ${you.name} 整理完明天的教案。`,
      );
      await kita.say_and_wait(`诶，最近还发生了这种事么？还真是不得了哇……`);
      await kita.say_and_wait(`唔嘿嘿。妈妈也是，不要太娇惯大家了哦。`);
      await era.printAndWait(
        `看着开心地和家里人聊着天的 ${kita.name}，${you.name} 突然对小北的母亲产生了些许的兴趣。`,
      );
      await era.printAndWait(`${kita.name} 的妈妈，是什么样的人呢？`);
      await kita.say_and_wait(`诶，我的妈妈么？`);
      await era.printAndWait(
        `带着这样的好奇，${you.name} 在小北挂断电话后主动出言问道`,
      );
      await kita.say_and_wait(
        `怎么说呢，嗯唔唔……我的妈妈是什么样的人的话……感觉就是很普通。`,
      );
      await kita.say_and_wait(
        `虽然妈妈她也是退役下来的赛马娘，身材也非常好啦，但是感觉就是很平常，或者说没有特殊的地方？`,
      );
      await kita.say_and_wait(
        `啊，不过妈妈她很会唱演歌呢，${callname}有机会的话可以一起哦。`,
      );
      await era.printAndWait(
        `听着 ${kita.name} 讲着 ${kita.sex} 和妈妈的日常，${you.name} 开始不知不觉间期待起和小北家人见面的时候。`,
      );
      await era.printAndWait(
        `而在不知不觉间，${you.name} 的教案已经整理完毕了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_10: (() => {
    const title = '没有恶意的小小恶作剧';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `白色情人节，${you.name} 一大早便在草场跑道上等着${kita.name}。`,
      );
      await kita.say_and_wait(`${callname}！到的真早啊～`);
      await era.printAndWait(`等了没多久，小北便从跑道上踩着草地跑了过来。`);
      await era.printAndWait(
        `呼吸着清新的新鲜空气，${
          you.name
        } 看向穿着运动服的${kita.teen_sex_title}，心里怀着小北对礼物还一无所知的些许窃喜，慢步走了上去。`,
      );
      await kita.say_and_wait(`？${callname}？那一脸奇怪的笑容是怎么回事？`);
      await era.printAndWait(
        `像是头警惕的小鹿似的在 ${you.name} 面前停步，${kita.name}小心翼翼地弯下腰，一点一点的靠近。`,
      );
      await era.printAndWait(
        `哼哼哼，不想着逃跑还想要凑近过来么？不愧是小北，但是已经没有用了！`,
      );
      era.println();
      era.printButton('「白色情人节快乐哦小北～这是训练员我送你的礼物～」', 1);
      await era.input();
      await era.printAndWait(
        `一边大声说着，${
          you.name
        } 掏出礼物递给了小北，吓得${kita.teen_sex_title}摆出了空手道应敌的姿势。`,
      );
      await era.printAndWait(
        `在调笑了小北好一阵后，${you.name} 面带微笑的看着小北拆开包装吃起里面的巧克力。`,
      );
      await kita.say_and_wait(
        `谢谢${callname}，我不客气……好酸！这是话梅……啊！口水口水！`,
      );
      await era.printAndWait(
        `在入口的一瞬间，刺激的酸味便让${kita.teen_sex_title}的表情反射性的扭曲起来。`,
      );
      await era.printAndWait(
        `唾液在酸酸话梅的刺激下大量分泌，而这就是 ${you.name} 给小北准备的一点小小的恶作剧，在众多巧克力中唯二的巧克力话梅糖。`,
      );
      await era.printAndWait(
        `至于后来在小北全心全意的报复下，${you.name} 被迫把剩下的话梅一口吃了导致口水直流什么的。`,
      );
      await era.printAndWait(`那就不需要太在意了呢～`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_11: (() => {
    const title = '稳健的支持与皋月阴云';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, teio, you, callname) => {
      await kita.say_and_wait(
        `${callname}！表格已经填好了吧！没有错误吧？比如说，比如说名字啊年龄啊……`,
      );
      await kita.say_and_wait(
        `啊啊还有两分钟就要开始确认了好吓人！帝王${teio.adult_sex_title}当年也是这样的吗！？`,
      );
      await era.printAndWait(
        `在训练员室里苦恼的来回度步，${kita.name}焦急地翻查着手里的报名表，一副忧心忡忡的样子。`,
      );
      await era.printAndWait(
        `这也难怪，即使粉丝数达成了目标，但是G1比赛的报名注册也是十分严格的。`,
      );
      await era.printAndWait(
        `对于第一次进行报名的小北来说，感到紧张也是在所难免的吧。`,
      );
      await teio.say_and_wait(
        `放宽心啦小北～本帝王大人都给 ${you.name} 检查过十次了哦，不要太紧张啦。`,
      );
      await era.printAndWait(
        `坐在沙发上悠闲地喝着蜂蜜特饮，${kita.name} 的偶像 ${teio.name} 晃着两条小腿。`,
      );
      await kita.say_and_wait(
        `但是，帝王${teio.adult_sex_title}！报名马上就开始了，不第一时间——`,
      );
      await teio.say_and_wait(
        `但是报名时间是从今天开始的一周左右吧，这么急也是一周后统一审查啊。`,
      );
      await era.printAndWait(
        `一边说着，${teio.name} 招手把 ${kita.name} 拉到身边，将蜂蜜特饮塞进自己的小粉丝手里。`,
      );
      await kita.say_and_wait(
        `好啦～放下心好好休息啦～事情交给${callname}处理就好。`,
      );
      await kita.say_and_wait(`唔唔……唔唔唔唔……还是好不安啊……`);
      await era.printAndWait(
        `看着这样的小北，${you.name} 悄悄地按下回车键，觉得还是把已经提交上去这件事延后一点说好了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '胜利的大舞台';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`谢谢你，${callname}。`);
      await era.printAndWait(
        `在皋月赏后的休息室中，${kita.name} 对 ${you.name} 深深地鞠了一躬。`,
      );
      await kita.say_and_wait(
        `能在皋月赏的舞台上奔跑，同大鸣大放同台竞技……说实话，现在感觉也还是有些心潮澎湃。`,
      );
      await era.printAndWait(
        `而且在比赛前，也差点因为进王同学的粗心忘记交申请书，在比赛中途也有好几次心脏刺激的差点跳出来呢。`,
      );
      await era.printAndWait(
        `带着一波三折后如同老僧入定的心态，${you.name} 在昏昏欲睡中才勉强想到，${kita.name} 已经拿下了三冠马的第一冠了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '疲惫的原因';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} baku 樱花进王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, baku, you, callname) => {
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
      await kita.say_and_wait(`${callname}，日本德比，真的是好厉害啊……`);
      era.println();
      era.printButton('「缓过来了么，小北？」', 1);
      await era.input();

      await kita.say_and_wait(
        `是啊，勉勉强强的缓过来了，但是，还是没有胜利的实感。`,
      );
      await kita.say_and_wait(
        `真奇怪啊，${callname}，明明小北我对自己的韧性还是很有自信的，但是……`,
      );
      await kita.say_and_wait(
        `这份胜利后还是没法驱散的疲惫，是我从来没没有感觉到的，莫非我并不适合这么长的距离么？`,
      );
      await era.printAndWait(`这么说的的 ${kita.name}，露出了有些沮丧的表情。`);
      await era.printAndWait(
        `三冠比赛的分量，2400M的漫长距离，强敌的威压和气场，对这个坚韧的孩子造成了很大的影响。`,
      );
      await era.printAndWait(
        `犹豫再三，正当 ${you.name} 准备开口说话时，门外传来了一个 ${you.name} 相当熟悉的声音。`,
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
        `看着又恢复了往日神采的 ${kita.name}，${you.name} 偷偷把进王同学平时形象完全不同这一件事吞进了肚里，希望这只是人家偶然的灵光一闪而已。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_summer_start: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `对于年轻的小赛${kita.uma_sex_title}们来说，中央学园每年八月的夏季合宿，是${
          kita.couple_title
        }仅次于几次假期最为期待的日子。`,
      );
      await era.printAndWait(
        `毕竟谈到特雷森的合宿，便是阳光，沙滩，南国舒适的温度和带有咸味的海风。`,
      );
      await era.printAndWait(
        `但对于老练的训练员们而言，夏季合宿则是提升赛${kita.uma_sex_title}能力的最好时间。`,
      );
      await era.printAndWait(
        `合宿地点完善的器材，不会扭伤脚踝的柔软沙地，适合锻炼游泳技术的清澈海洋，再严肃的训练员，也会不禁露出幸福的笑容。`,
      );
      await era.printAndWait(
        `而对于${kita.name}来说，夏季合宿也是有效巩固自身力量的最好时间。`,
      );
      await kita.say_and_wait(
        `呜诶啊！好软的沙滩啊！${callname}快看快看，我的脚整个都陷进去了诶！`,
      );
      await era.printAndWait(
        `在白色的沙滩上赤着脚踩来踩去，黑色的赛${kita.uma_sex_title}笑着高高举起双手，露出糯米般光滑的腋下。`,
      );
      await kita.say_and_wait(
        `哈哈，感觉好厉害啊${callname}！这样的话，感觉怎么样的训练也能忍受了～`,
      );
      await era.printAndWait(
        `看着像是小孩子似的${kita.name}，${you.name} 也忍不住有些想要闹腾起来了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_summer_end: (() => {
    const title = '夏季合宿结束';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `在足足一个月的合宿训练计划下，${kita.name} 的能力以肉眼可见的速度提升起来。`,
      );
      await era.printAndWait(
        `在精神的时候爆发起来的气势，在训练员的指导下获得的勇气，以及毫不懈怠的刻苦锻炼。`,
      );
      await era.printAndWait(
        `能够让赛${kita.uma_sex_title}强大起来的要素，仿佛同水混和起来的面粉一样，肉眼可见地发酵，成型，散发着惊人的热量。`,
      );
      await era.printAndWait(
        `而随着夏季合宿即将落入尾声，${
          you.name
        } 也放了这团美味的小${kita.uma_sex_title}休息时间。`,
      );
      await era.printAndWait(`让${kita.sex}好好休息一下吧。`);
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '升龙与伏龙';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `当 ${kita.name} 在走廊里被 ${you.name} 用毛巾紧紧裹住，花了好半天才从满是汗味的毛巾里逃出的时候。`,
      );
      await era.printAndWait(
        `${kita.name} 的幼驯染，里见家的${
          daiya.sex_code - 1 ? '大小姐' : '少爷'
        }光钻正抱着两杯蜂蜜特饮，就站在走廊的远处。`,
      );
      await era.printAndWait(
        `安静地注视正在 ${you.name} 怀里被毛巾擦来擦去的 ${kita.name}。`,
      );
      await kita.say_and_wait(`啊，小钻！你来看我的比赛了！`);
      await era.printAndWait(
        `头发被汗水弄得湿漉漉的 ${kita.name} 回过头，向小钻打了个招呼，急匆匆的朝着 ${daiya.name} 跑了过去。`,
      );
      await era.printAndWait(
        `两只小马亲昵地抱在一起你侬我侬，两具丰腴的肉体贴合在一起，挤出色情的肉浪。`,
      );
      await daiya.say_and_wait(
        `嗯，我看到了哦，小北，谢谢你让我看到了这么精彩的比赛。`,
      );
      await daiya.say_and_wait(
        `简直让人心潮澎湃，让我也想要更加努力锻炼、去参加比赛了。`,
      );
      if (era.get('cflag:67:招募状态') !== recruit_flags.yes) {
        await daiya.say_and_wait(
          `而且，可能也要谢谢你的那位${callname}呢，是他对你的锻炼，让我燃起了兴趣啊。`,
        );
        await era.printAndWait(`说着，里见光钻对 ${you.name} 微微点头以致意。`);
      }
      await kita.say_and_wait(`诶诶！？真的么小钻！太好了`);
      await era.printAndWait(
        `小北像是狗狗一样高兴的摇起尾巴，而光钻也亲昵地在好朋友的脸蛋上亲了一口。`,
      );
      await daiya.say_and_wait(
        `是哦，所以小北你要加油哦，菊花赏一定要加油啊。`,
      );
      await kita.say_and_wait(
        `我会的哦！诶嘿嘿，我可是绝对不会辜负小钻你的期待的！`,
      );
      await era.printAndWait(
        `听着小北和小钻慢悠悠的的闲聊，${you.name} 感叹着女孩子之间的友谊可真是麻烦，偷偷露出了微笑。`,
      );
    };
    f.title = title;
    return f;
  })(),
  three_crowns: (() => {
    const title = '喝彩！三冠祭典！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `在听到 ${kita.name} 冲过终点时满场的欢呼雀跃时，总有种想哭的感觉。`,
      );
      await era.printAndWait(
        `最开始的 ${
          kita.name
        }，只是一个没有任何粉丝的普通赛${kita.uma_sex_title}。`,
      );
      await era.printAndWait(
        `尽管其天赋足以被训练员们所认可，但是那并不华丽的朴实身体，让小北在最开始奔跑时总是得不到本应有的人气。`,
      );
      await era.printAndWait(
        `但是随着小北那足以证明自己的力量，皋月赏的胜利，在强敌手中夺下了日本德比。`,
      );
      await era.printAndWait(
        `如今已经成为二冠王${kita.uma_sex_title}的小北正在全场的欢呼下奔跑。`,
      );
      await era.printAndWait(
        `所有人都在呼唤着小北的名字，在冲过终点时拼命的剁脚，马券和门票仿佛疯了似的漫天飞舞，还有人在Live时高兴的摔了下来。`,
      );
      await era.printAndWait(
        `希望医药费不会算在小北头上，${
          you.name
        } 苦笑着继续望着台上的${kita.teen_sex_title}。`,
      );
      await era.printAndWait(
        `此时的 ${kita.name} 正随着音乐鼓点握紧麦克风，带着近乎冷傲的表情用手指扫过台下连成一片的粉丝。`,
      );
      await era.printAndWait(
        `不知是否是错觉，${you.name} 注意到小北在看向这边时，表情肉眼可见地温柔起来。`,
      );
      await era.printAndWait(
        `……可能是错觉吧，一边这么想着，${you.name} 随着人群一起打起了号子。`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '看啊！北部祭典！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在听到 ${kita.name} 冲过终点时满场的欢呼雀跃时，总有种想哭的感觉。`,
      );
      await era.printAndWait(
        `只有最快的${kita.uma_sex_title}才能赢下的比赛，无数强人望之叹息，因伤痛和无奈感叹时也命也的菊花赏。`,
      );
      await era.printAndWait(`如今，已经被 ${kita.name} 用脚亲自取下了。`);
      await era.printAndWait(
        `在最开始的时候，最初那个只有朴实的性格与身体的赛${kita.uma_sex_title}，已经在刻苦的锻炼下蜕变成了能够胜利的孩子。`,
      );
      await era.printAndWait(
        `大家的欢呼，大家的鼓励如潮水般涌来，这份被小北炒热的气氛，仿佛是祭典欢庆的号子般在竞马场里不停回荡。`,
      );
      await era.printAndWait(
        `即使在小北已经在走廊深处消失不见了也仍能听见些许残存。`,
      );
      era.println();
      await kita.say_and_wait(`${callname}，可以在这里稍微陪我坐一下么？`);
      await era.printAndWait(
        `在走廊拐角的地方，黑色的赛${kita.uma_sex_title}摸索着在塑料椅子上坐下。`,
      );
      await era.printAndWait(
        `而后，满身汗水的 ${kita.name} 就这么呆呆的望着 ${you.name}，那因为激烈运动而微微泛起红晕的可爱脸蛋上露出了模糊不清的表情。`,
      );
      await kita.say_and_wait(
        `诶嘿嘿，总感觉还是没什么实感呢，虽然还是一如既往地以『祭典』风格奔跑的……`,
      );
      await kita.say_and_wait(
        `但是，果然啊……没有${callname}的帮助，尽凭我自己是达不到这个程度的吧。`,
      );
      await kita.say_and_wait(`所以，谢谢你哦！${callname}！`);
      await era.printAndWait(
        `一边说着，${kita.name} 冲 ${you.name} 深深地鞠了一躬，而${kita.sex}的表情也终于恢复到了平常的姿态。`,
      );
      await era.printAndWait(
        `${you.name} 摸了摸${kita.teen_sex_title}的脑袋，忍不住和${
          kita.sex
        }一起笑了起来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '圣诞夜的晚餐';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `圣诞节的特雷森，就如同过去的十几年那样一如既往的吵闹。`,
      );
      await era.printAndWait(
        `此时，${you.name} 和 ${kita.name} 就像其他人一样，在食堂里欢庆着节日，享受着食堂的节假日特别菜单。`,
      );
      await kita.say_and_wait(
        `唔姆姆……两份大薯条，四份炸鸡块和鸡肉汉堡，还要两杯可乐……`,
      );
      await era.printAndWait(
        `在 ${you.name} 身边，${you.name} 的担当踮起脚尖看着柜台后的菜单，毫不顾忌地点着热量相当之高的食品。`,
      );
      await era.printAndWait(
        `看来要加大日后的训练力度了……${you.name} 在心底里的笔记本上默默记上了一笔。`,
      );
      await kita.say_and_wait(
        `唔嘿嘿～谢谢你${callname}，明明是难得的圣诞节还要陪我出来玩。`,
      );
      await era.printAndWait(
        `抱着一大盘食物坐在空出的椅子上，${kita.name} 露出不好意思的表情，将可乐递给了 ${you.name}。`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 喝着可乐环顾四周，零星也能看到几个同样在大吃特吃的孩子，看来对年轻人来说这么点上一大盘食物也不是什么奇怪的事……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 将视线收回，',
        kita.get_colored_name(),
        ' 正在 ',
        you.get_colored_name(),
        ' 面前小口小口地吃着薯条，明明只是普通的庶民食物却吃得不亦乐乎。',
      ]);
      era.println();
      era.printButton('「感觉小北是很适合吃薯条的孩子呢。」（好感+10）', 1);
      era.printButton(
        '「感觉小北是很适合吃汉堡的孩子呢。」（好感+5，爱慕+2）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(`诶？很适合吃薯条是指？`);
        await era.printAndWait(
          `将香软温热的薯条两口吃下，${kita.name} 好奇的问道。`,
        );
        await era.printAndWait(
          `${
            you.name
          } 略带犹豫地紧紧盯着${kita.uma_sex_title}的嘴巴，那薄软而纤细的双唇带着健康的红润，还带着些许润唇膏的晶莹。`,
        );
        await you.say_and_wait(
          `不，就是，小北叼着薯条的样子很孩子气，很可爱啊。`,
        );
        await kita.say_and_wait(`嘿诶？是这样么…？`);
        await era.printAndWait(
          `像 ${you.name} 说的那样咬住一根薯条，那食指长的金光长条自然的垂下，${kita.name} 垂下头将脸凑近了一些。`,
        );
        await era.printAndWait(
          `${kita.teen_sex_title}天真而毫无防备的面容就这么摆在 ${
            you.name
          } 面前，仍然带着一股活泼稚气的 ${kita.name} 眨着眼，似乎对 ${
            you.name
          } 的态度十分好奇。`,
        );
        await era.printAndWait(
          `${you.name} 将视线移下，透过校服的衣领能够看到小北雪白的脖颈，那明显而又色气的锁骨一览无余。`,
        );
        await kita.say_and_wait(`唔姆姆……`);
        await era.printAndWait(
          `三两口将薯条吃下，${kita.teen_sex_title}将后背重新贴回椅子上，大口大口的吃起了薯条。`,
        );
        await era.printAndWait(
          `${you.name} 喝着可乐，开始享受起这和小北共度的美妙圣诞节。`,
        );
      } else {
        await kita.say_and_wait(`汉堡是指？`);
        await era.printAndWait(
          `三两口薯条吞咽进肚子里，${kita.name} 好奇的问道。`,
        );
        await era.printAndWait(
          `……不好，说错了话了……${
            you.name
          } 略带犹豫地紧紧盯着${kita.uma_sex_title}的嘴巴，那纤细而晶莹的红润双唇。`,
        );
        await you.say_and_wait(
          `不，就是，小北的嘴巴大大的，感觉很适合吃汉堡的样子。`,
        );
        await era.printAndWait(
          `听到 ${you.name} 的理由，小北鼓着嘴巴露出了不开心的表情。`,
        );
        await era.printAndWait(
          `虽然完全可以理解，毕竟哪有${kita.child_sex_title}子听了这种话还会开心啊……`,
        );
        await kita.say_and_wait(
          `${callname}……这可是难得的圣诞节哦，惹我不开心真的可以么？`,
        );
        await era.printAndWait(
          `嘟着嘴咔嚓咔嚓地薯条，${kita.name} 仿佛是威胁一样地说着话。`,
        );
        era.println();
        era.printButton(`「对不起是我不好……请小北大人饶了我吧……」`, 1);
        await era.input();
        await era.printAndWait(`哼～`);
        await era.printAndWait(
          `上下抖动着耳朵的 ${kita.name} 侧过身去，闭着眼摸索着薯条塞进嘴里。`,
        );
        await kita.say_and_wait(
          `唔唔唔……居然这么说人家，小北我真是对 ${callname} 太失望了。`,
        );
        await era.printAndWait(
          `所言极是……不如说这么瞎说了还没发大火已经是小北宽容大量了……`,
        );
        await era.printAndWait(
          `${you.name} 双手合十，不停的向不高兴的小北说着讨好的话。`,
        );
        await era.printAndWait(
          `但就在 ${you.name} 道歉的时候，小北正偷偷侧过身来看着 ${you.name} 的态度，露出了得意的坏笑。`,
        );
        await era.printAndWait(
          `在被强行塞了一个汉堡吃证明${callname}也很适合吃汉堡后，在 ${
            you.name
          } 眼里，小北终于开心的转过神来。`,
        );
        await era.printAndWait(
          `${you.name} 咬着汉堡，一边接受着惩罚，一边享受起和小北共度的时光。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_c: (() => {
    const title = '真正的祭典';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `在所有人的欢呼声中，赢取了胜利的 ${kita.name} 向众人挥手致意。`,
      );
      await era.printAndWait(
        `那充满力量的奔跑，那肉眼可见的热量，以及 ${kita.name} 万千的思绪。`,
      );
      await era.printAndWait(`在竞马场中再一次传达给了注视着小北的大家。`);
      await era.printAndWait(`也有，${you.name}。`);
      await daiya.say_and_wait(`真是漂亮的胜利啊，${callname}。`);
      await era.printAndWait(`在 ${you.name} 身旁，${daiya.name} 轻声赞叹道。`);
      await daiya.say_and_wait(
        `小北${kita.sex}，赢下了有马纪念呢，哼哼～简直就像是祭典一样。`,
      );
      await daiya.say_and_wait(
        `而且，想到以前的小北是绝对做不到现在这样的事，就连我也被现在的气氛稍微感染了呢。`,
      );
      await era.printAndWait(
        `是啊……${you.name} 在心底里无声的赞同着 ${daiya.name} 的说法。`,
      );
      await era.printAndWait(
        `无论曾经的小北有多么结实，但是，能够赢得胜利的绝不是从前，而是现在的小北呢。`,
      );
      await era.printAndWait(
        `${you.name} 和里见光钻并肩注视着仍然在挥手致意的小北。`,
      );
      await era.printAndWait(`而经典年最后的比赛，有马纪念就这么落入了尾声。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '小北的熟人？';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, minoru, you, callname) => {
      await era.printAndWait('一年的时光转瞬即逝，很快就到了新年伊始。');
      await era.printAndWait(
        `对于 ${you.name} 的担当 ${kita.name} 来说，训练强度的提升，赛程的安排，导致了接下来的一年是相当重要的一年。`,
      );
      await kita.say_and_wait(`嗯哼哼～嗯哼哼～哼哼嗯哼哼～`);
      await era.printAndWait(
        `穿着睡衣的 ${kita.name} 在门外哼着歌，似乎是在干些什么，而 ${you.name} 则在房间里准备着新年的火锅。`,
      );
      await era.printAndWait(
        '毕竟不管怎么说，新年还是要好好过得，不能因为期待而让小北压力太大。',
      );
      await era.printAndWait(
        '虽然在训练员室里吃火锅睡被褥怎么想都还是有些奇怪就是了。',
      );
      await era.printAndWait(
        `在这样准备着橘子和被炉的时候，${
          you.name
        } 听到${kita.teen_sex_title}打开门的声音，和一阵阵的脚步声。`,
      );
      era.println();
      era.printButton('「欢迎回来，小……小北！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 回过头，看到的反而是两个身材高大的壮汉。`,
      );
      await era.printAndWait(
        '这两位的体魄异常的结实，且都穿着白色的西服，戴着眼镜的那人面容满是伤疤，另一人的下巴上则留着一丛小胡子。',
      );
      await era.printAndWait(
        `其冷酷的表情，满是审视的眼神……不管怎么看这都是黑道啊！骏川小姐 ${you.name} 怎么把他们放进来的啊！？`,
      );
      await kita.say_and_wait(
        `啊，花山哥，桐生哥，这个人就是我的${callname}哦～`,
      );
      await era.printAndWait(
        `在两位壮汉身后，${you.name} 的担当笑嘻嘻地钻了出来，抱着一纸袋的礼物替 ${you.name} 介绍起来。`,
      );
      await kita.say_and_wait(
        `${callname}，这就是我和你说过的花山哥和桐生哥哦。`,
      );
      await kita.say_and_wait(
        `嘻嘻，虽然表情凶了点，但是都是和小北我关系很好的好人，所以不要害怕哦。`,
      );
      await era.printAndWait('花山「啊。」');
      await era.printAndWait('桐生「嗯。」');
      await era.printAndWait(
        `两个壮汉一起点了点头，在小北身后对 ${you.name} 露出近乎憨厚的笑容，抬手拎起几袋从商店街买来的羊肉。`,
      );
      await era.printAndWait(
        `在小北的招呼声中，${you.name} 和传奇黑道们一起悠闲用黑道式休闲的度过了接下来的时光。`,
      );
      era.drawLine({ content: '过了一段时间后' });
      await kita.say_and_wait(`明年再见哦！桐生哥花山哥！`);
      await era.printAndWait(
        `在吃过火锅又聊了几个小时的黑道传奇历史之后，${you.name} 和小北一起看着两位黑道大哥走向校门。`,
      );
      await era.printAndWait(
        `……并且给路边坐在亭子里的 ${minoru.name} 深深地鞠了一躬。`,
      );
      await era.printAndWait(
        `最后那个就当做没有看到吧，${you.name} 一边这样想着，一边转身享受起这美好的一夜。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = '新年拜访';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait('众弟子「师父，新年快乐！！！」');
      await era.printAndWait(
        `下午三点十五分，身为训练员的 ${you.name} 听着 ${kita.name} 父亲弟子们震耳欲聋的问好声，终于松了口气。`,
      );
      await era.printAndWait(
        `${you.name} 身穿黑色和服，在榻榻米上撑起身体向一旁的男人鞠了一躬。`,
      );
      await era.printAndWait(
        `身旁小北的父亲微微颌首，此人身材高大不怒自威，让 ${you.name} 看起来像黑道们请的文化人顾问。`,
      );
      await era.printAndWait(
        `若不是同样穿着印有荷叶纹样黑色和服，满脸笑意轻松写意的小北正坐在 ${you.name} 身旁，恐怕 ${you.name} 早就起身鞠躬站到弟子的行列里了吧。`,
      );
      await kita.say_and_wait(`${callname}，第一次在这么多人面前很紧张对吧～`);
      await era.printAndWait(
        `合上推拉门，小北笑嘻嘻地凑在 ${you.name} 身边对 ${you.name} 说。`,
      );
      await era.printAndWait(
        `${you.name} 揉了揉担当的脑袋，在嘻嘻哈哈的轻巧吵闹声中开始享受起了新的一年。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '略微有些破碎的甜酒味';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `在资深年的情人节这天，和 ${kita.name} 相约在训练员室里见面。`,
      );
      await era.printAndWait(
        `虽然是需要赠送巧克力的节日，不过打开门的时候却发现小北少见的打扮了一番。`,
      );
      await kita.say_and_wait(`啊！${callname}，已经来了么！`);
      await era.printAndWait(
        `穿着昂贵和服的 ${kita.name} 慌慌张张地摆好桌子，对着 ${you.name} 紧张地深深鞠了一躬。`,
      );
      await kita.say_and_wait(
        `${callname}，情人节快乐！那个，这个，这个！是小北我上供给训练员的礼物，请您笑纳！`,
      );
      era.println();
      era.printButton(`「礼物么？谢谢你小北。」`, 1);
      await era.input();
      await era.printAndWait(
        `满怀期待的接过礼物盒打开，放在高档的盒子里的是碎的乱七八糟的巧克力。`,
      );
      await era.printAndWait(
        `而在盒子的小格子里，还能隐约看到无色透明的液体……是甜酒啊！`,
      );
      await kita.say_and_wait(
        `呜呜……虽然是想要给${callname}一个惊喜的，但是不知道为什么巧克力全碎掉了……`,
      );
      await era.printAndWait(
        `看到盒子里的样子，早已知道这副惨样的 ${kita.name} 露出了不安的表情。`,
      );
      await era.printAndWait(
        `${you.name} 拿起一颗巧克力放进嘴里，咀嚼着碎掉巧克力内部带着些许酒味的糖心。`,
      );
      await era.printAndWait(
        `嗯，是担当在情人节送给 ${you.name} 的很棒的巧克力啊。揉搓着小北的脑袋，感觉着柔顺发丝在手掌间划过的感觉。`,
      );
      await era.printAndWait(
        `${you.name} 拉着 ${kita.name} 在桌前坐下，开始一起享用起情人节的巧克力了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '「奖励」';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `在白色情人节这天清晨，为了给担当赠送礼物而早早来到训练室。`,
      );
      await era.printAndWait(
        `虽然大概只是想要巧克力之类的甜食吧，不过 ${you.name} 还是询问起小北有什么想要的奖励。`,
      );
      await kita.say_and_wait(`奖励么？只是普通的巧克力……不，那个……奖励的话……`);
      await kita.say_and_wait(`可以用别的方式，奖励么？`);
      era.drawLine({ content: '夜' });
      await kita.say_and_wait(`训练员……在学园里这样的…不会被人看到的对吧…♡`);
      await era.printAndWait([
        '在夜晚特雷森学园的走廊里，',
        you.get_colored_name(),
        ' 和全裸的 ',
        kita.get_colored_name(),
        ' 进行着今天的约会，',
      ]);
      await era.printAndWait(
        `满是骚味的狗项圈紧紧地套在赛${kita.uma_sex_title}雪白的颈上，而连接着项圈的狗链则被 ${
          you.name
        } 抓在手里。`,
      );
      await era.printAndWait(
        `粉嫩的小舌淫靡色气地垂落在口外，随着${kita.teen_sex_title}粗重的喘息止不住的滴落着甜蜜的涎水。`,
      );
      await era.printAndWait(
        `往日里骄傲可爱的${kita.teen_sex_title}，此时此刻正被黑色透光的纱布眼罩蒙住双眼，用脸蛋蹭着 ${
          you.name
        } 的裤脚。`,
      );
      if (kita.sex_code !== 1) {
        await era.printAndWait(
          `在赛${kita.uma_sex_title}胸前，一条丝带将两颗硕大粉嫩的乳头绑在一起，在乳房的重压下在地面上拖拽着摩擦。`,
        );
      }
      await kita.say_and_wait(
        `在学园里被训练员抓住狗链…简直就像宠物狗一样呢…哈啊…♡一想到要在走廊里…小腹深处…火辣辣的…好厉害…♡`,
      );
      await era.printAndWait(
        `如果被别人知道 ${you.name} 的担当是个喜欢露出自慰的变态的话，${you.name} 就一定会进监狱了吧。`,
      );
      await era.printAndWait(
        `${
          you.name
        } 拉紧狗链轻轻拉扯着项圈，而${kita.teen_sex_title}则在发出一声闷哼后因为脖颈上的束缚而羞红了脸蛋，用脸蛋磨蹭着 ${
          you.name
        } 的鞋子欢快地摇起了尾巴。`,
      );
      await era.printAndWait(
        `没办法了呢……一边如此想着，${you.name} 牵着 ${kita.name} 走进了一旁的房间，`,
      );
      await era.printAndWait(
        `而后，一阵难以想象是 ${kita.name} 发出的放荡浪叫和拍打肉体的声音，毫不遮掩地从男厕所里喷溅出来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = '粉丝感谢祭！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `为了感谢粉丝们的支持，${you.name} 和小北在商店街的餐厅里举报了感谢服务。`,
      );
      await era.printAndWait(
        `站在用箱子堆叠起来的桌子后，小北握着麦克风，用欢快的嗓音唱着特雷森音头。`,
      );
      await kita.say_and_wait(`晃来晃去、飘来飘去、翩翩起舞花浴衣～`);
      await era.printAndWait(
        `摇晃着手欢快的唱着音头，${you.name} 坐在台后默默观赏着，这除 ${you.name} 之外没有任何人能够看到的身影。`,
      );
      await era.printAndWait(
        `在小北帮助过的大家的支持下，这次感谢祭就这么落入了尾声。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai: (() => {
    const title = '没有劲敌的世界';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
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
      await kita.say_and_wait(`${callname}，我，突破了今年的目标了哦。`);
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
        `${callname}！嗯！根本有没什么做不做得到的哦！也没有什么跑不完的比赛！`,
      );
      await kita.say_and_wait(
        '这次做到了，下一次我也一定能做到！所以，接下来的天皇赏（春）请你好好期待吧！',
      );
      await kita.say_and_wait(
        '下一场比赛，我要将胜利的桂冠献给您！我会做到的！证明没有什么是努力后做不到的！',
      );
      await era.printAndWait(
        `那话语中的热量让人心头一暖，于是在 ${kita.name} 一如既往温暖的微笑中，${you.name} 暗自下定了决心。`,
      );
      await era.printAndWait('绝对会让自己的担当迎来胜利。');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr: (() => {
    const title = '耸立的绝壁';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} ag 气槽
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, ag, you, callname) => {
      await era.printAndWait(
        `在 ${kita.name} 站在胜者舞台上向粉丝们挥手致意时，因为胜利而备受感动的粉丝们的欢呼，几乎要把屋顶都要掀翻了过去。`,
      );
      await era.printAndWait(`粉丝A「干得漂亮啊 ${kita.name}！」`);
      await era.printAndWait(
        `粉丝B「这才是我们期待的赛${kita.uma_sex_title}！」`,
      );
      await era.printAndWait(`粉丝C「祝你一定要春秋连霸啊！」`);
      await era.printAndWait(
        `在卖力的奔跑下，热爱 ${kita.name} 的粉丝们也变得越来越多。`,
      );
      await era.printAndWait(
        `而关注小北的大家，也在这场胜利后仰慕起 ${kita.name} 不认输的努力形象，或许也会或多或少地改变自己的生存方式吧。`,
      );
      await era.printAndWait(`但是——`);
      await ag.say_and_wait(`${kita.name} 的${callname}，可以稍微谈一谈么？`);
      await era.printAndWait(
        `在音乐奏响起的一刹那间，${you.name} 的耳边传来了女人的声音。`,
      );
      await era.printAndWait(
        `${you.name} 回过头，出现在 ${you.name} 面前的是特雷森学生会的副会长，有着『女帝』别名的${ag.name}。`,
      );
      await ag.say_and_wait(
        `我知道您很想欣赏 ${kita.name} 同学的胜利live，所以我稍微说两句话就走，可以么？`,
      );
      era.println();
      era.printButton('「没关系，请说。」', 1);
      await era.input();
      await ag.say_and_wait(
        `谢谢您，作为最强也是本世代的代表赛${kita.uma_sex_title}之一，${
          kita.name
        } 同学的努力有目共睹，所以Live开始前我也就快点说了。`,
      );
      await ag.say_and_wait(
        `您对于去年菊花赏时，没有实现的大鸣大放同学和 ${kita.name} 同学的对局，有什么想法么？`,
      );
      await era.printAndWait(
        `激昂的鼓点在耳边响起，连带着的是小北悦耳而中气十足地歌喉。`,
      );
      await era.printAndWait(
        `在去年的宝冢纪念后，本世代最强的赛${kita.uma_sex_title}之一，也是小北强敌的大鸣大放因为身体因素而避战菊花赏。`,
      );
      await era.printAndWait(
        `在此之后小北便没什么同对方较量的机会，恐怕对于对方来说，这也是十足的遗憾……但这可不是一个人就能决定的事啊……`,
      );
      await ag.say_and_wait(
        `我只是来传达消息的，要不要重新为那次比赛做出了断是您和 ${kita.name} 的决断。`,
      );
      await era.printAndWait(
        `似乎是看出了 ${you.name} 想要和 ${kita.name} 商讨的意思，${ag.name} 微笑着在气场上退了一步。`,
      );
      await era.printAndWait(
        `在留下一句话之后，便向 ${you.name} 道别转身离去。`,
      );
      await ag.say_and_wait(
        `若是有兴趣的话，下一站就请去仁川，在宝冢纪念上同对方决一胜负吧。`,
      );
      await era.printAndWait(
        `在舞台上，${kita.name} 的live正到了新的高潮，${you.name} 思索着在宝冢纪念上决一胜负的规划，转头欣赏起自己担当的舞步。`,
      );
      await era.printAndWait(
        `${ag.name} 有一点想错了，从一开始 ${you.name} 就没有想过 ${kita.name} 会避战的可能性。`,
      );
      await era.printAndWait(`而那忧虑，也只是在思考怎样才能胜利，仅此而已。`);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_s: (() => {
    const title = '交到手中的接力棒';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name} 同大鸣大放的决一死战，最终以 ${kita.name} 的胜利落下了帷幕。`,
      );
      await era.printAndWait(
        `这场噱头响亮的竞赛让阪神竞马场座无虚席，门票早在售票开始后的半个小时便被哄抢一空。`,
      );
      await era.printAndWait(
        `无数人挤破头也想亲眼目睹这场传奇的对决————而两位强大的赛${kita.uma_sex_title}也的确没有辜负众人的寄托。`,
      );
      await kita.say_and_wait(`到达了极限啊，我。`);
      await era.printAndWait(
        `被${kita.teen_sex_title}们的铁蹄踏过的草场此刻已经外翻，露出了下面湿润的泥土。`,
      );
      await era.printAndWait(
        `坐在已经空无一人阪神竞马场里，${kita.name} 面前的是一片斑驳残缺的草地，${kita.sex}的体力已经消耗殆尽，${kita.sex}的意志紧绷到了极限。`,
      );
      await era.printAndWait(
        `但即使如此，${kita.name} 依然在望着身下这片草地。`,
      );
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
        `不过，这就是属于我们的奔跑，胜者要带着败者的份，同${callname}一起胜利下去，这是我和大鸣大放同学约好的。`,
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
      await kita.say_and_wait(`${callname}，让我们胜利下去吧！`);
      await era.printAndWait(`没错，${kita.sex}会这么说着然后露出温暖的微笑。`);
      await era.printAndWait(`这就是 ${kita.name}，黑色的祭典。`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_s: (() => {
    const title = '泥地之后就是花道';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
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
      await era.printAndWait(`${kita.uma_sex_title}A「北部同学！脸！脸！」`);
      await era.printAndWait(
        `${kita.uma_sex_title}B「发什么呆啊赶紧来个大人！」`,
      );
      await era.printAndWait(`${kita.uma_sex_title}C「呜哇啊！」`);
      await kita.print_and_wait(
        `嗯？为什么大家这么慌张，莫非是脸上粘上泥土了么？`,
      );
      await kita.print_and_wait(
        `不，摸了一下没感觉啊，只有黏糊糊的汗液的感觉……难道是跑的脸红脖子粗露出了不像样的表情么？`,
      );
      await kita.print_and_wait(
        `呜哇啊，不要啊……我还是想要像光钻${kita.couple_title}一样像个闪亮亮的${
          kita.sex_code - 1 ? '大小姐' : '明星'
        }一点的，这下丢大人了……`,
      );
      await kita.say_and_wait(
        `天皇赏秋的赛${kita.uma_sex_title}是个跑的脸红脖子粗的孩子不要啊……呜诶～${callname}在哪啊。`,
        true,
      );
      await kita.print_and_wait(
        `四下摇晃着脑袋寻找着${callname}的踪迹，${
          kita.name
        } 注意到不远处，${you.name} 正跨越栏杆向这边飞奔而来。`,
      );
      era.println();
      era.printButton('「小北！脸！鼻子！怎么样！」', 1);
      await era.input();
      await kita.print_and_wait(
        `？怎么${callname}也在说听不懂的话啊…？啊，是在说比赛的感想么？`,
      );
      await kita.print_and_wait(
        `${kita.name} 猛的吸了吸鼻子，一股铁锈般美味的泥土味涌入喉咙当中。`,
      );
      await kita.print_and_wait(
        `于是，开闸时被故障反弹的铁门撞破了脑门和鼻子，满脸鲜血的 ${kita.name} 对这边露出微笑，大声喊道：`,
      );
      await kita.say_and_wait(`味道超级甜的哦！`);
    };
    f.title = title;
    return f;
  })(),
  japa_cup_s: (() => {
    const title = '交汇的源流';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `在 ${kita.name} 第一个冲过终点线后，${you.name} 翻过栅栏，急匆匆地跑到 ${kita.name} 身边。`,
      );
      await era.printAndWait(
        `在区区一个月的疗养之后，${you.name} 的担当依旧选择出道日本杯进行比赛，在所有人忧心忡忡的状态下踏上了跑道。`,
      );
      await era.printAndWait(`但最终，小北赢了胜利，这就足够了。`);
      await kita.say_and_wait(
        `诶嘿嘿，蹄铁在跑步的时候掉了下来，所以只能赤着脚跑啦！`,
      );
      await era.printAndWait(
        `脸上仍然包着纱布的 ${kita.name} 嘿嘿笑着，让 ${you.name} 感觉到了一阵内心的抽动和于心不忍。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_s: (() => {
    const title = '名为笑容的烟花';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(`解说「${kita.name}！冲过终点线！」`);
      await era.printAndWait(
        `伴随着观众们的掌声和欢呼雀跃声，${kita.name} 对着天空高高举起手臂，仿佛是在宣告自己的胜利。`,
      );
      await era.printAndWait(
        `这位曾经两度挑战有马纪念的赛${kita.uma_sex_title}，如今在竞马场上取得了有马纪念的胜利。`,
      );
      await era.printAndWait(
        `以并不华丽，甚至仍旧带伤的身姿，在年末的舞台上为所有人献上了最美好的收尾。`,
      );
      await era.printAndWait(
        `回过神来时，${
          you.name
        } 已经悄悄地凑到了小北身边，用毛巾心疼的擦着${kita.teen_sex_title}额头上的汗水。`,
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
        `露出松弛表情的 ${kita.name} 踮起脚尖，那纤细的手指牵住 ${you.name} 的手臂。`,
      );
      await era.printAndWait(
        `带着足以灼烧他人的温度的美丽瞳孔，带着笑意就这么同 ${you.name} 对视起来。`,
      );
      await kita.say_and_wait(`而且我也没有辜负${callname}你。`);
      await kita.say_and_wait(`嘿嘿嘿～这就是我人生中最后的比赛，太好了……`);
      await era.printAndWait(
        `${kita.teen_sex_title}的脸蛋因为羞涩和奔跑涨得通红，似乎就连说出这番言论的${
          kita.sex
        }也有些不知所措。`,
      );
      await era.printAndWait(
        `毕竟还是个小孩子呢，${you.name} 这么想着，张开双臂紧紧抱住 ${kita.name}。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = '与北部玄驹的酒吧生活';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `和 ${you.name} 的担当约好了，要在某处酒吧里见面。`,
      );
      await era.printAndWait(
        `在同 ${
          kita.name
        } 共度了三年的时光后，你们终于迎来了终局，或许这个月就会是和${
          kita.sex
        }共度的时光了吧。`,
      );
      await era.printAndWait(
        `带着这样忧伤的想法，${you.name} 推开地下酒吧挂着黑猫门牌的门走入其中。`,
      );
      await kita.say_and_wait(`啊，${callname}……欢……欢迎光临～`);
      await era.printAndWait(
        `推开门，空无一人的酒吧里，只有穿着校服的${kita.name}单独坐在吧台前。`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}来回摇晃着空荡荡的酒杯，脸颊微微有些泛红，身旁却只是放着一瓶启封的汽水。`,
      );
      await kita.say_and_wait(
        `那个……哈哈……这间酒吧是妈妈的熟人在圣诞节要回老家，正好想找个安静的地方就借来了。`,
      );
      await kita.say_and_wait(
        `所以……酒水什么的是没有的哦，${callname}～啊哈哈哈～`,
      );
      era.println();
      era.printButton(`「和小北在一起肯定不会喝酒啦……」`, 1);
      await era.input();
      await kita.say_and_wait(`说的是呢……`);
      await era.printAndWait(
        `坐在靠窗的位置用高脚杯喝着汽水，小北望着窗外寂寥的街景，看起来若有所思。`,
      );
      await era.printAndWait(
        `那黑色的马耳贴在冰凉的玻璃上，一下一下地轻轻拍打着……`,
      );
      await kita.say_and_wait(`${callname}，喜欢这种安静的感觉么？`);
      era.println();
      era.printButton(`「安静？」`, 1);
      await era.input();
      await kita.say_and_wait(
        `嗯，敲打着窗户的雪花，寂寥无人的街道，只有隐隐约约的风声。`,
      );
      await kita.say_and_wait(`这种感觉，小北我还挺期待的呢……`);
      await era.printAndWait(
        `一向活泼的 ${kita.name} 居然会喜欢这样的景象，有些意外呢。`,
      );
      await era.printAndWait(
        `${you.name} 尝试着和 ${kita.name} 一起靠在玻璃上，享受着圣诞夜的寂静和冰冷。`,
      );
      await era.printAndWait(`作为最后的几天，也不错呢。`);
    };
    f.title = title;
    return f;
  })(),
  kitasan_touch: (() => {
    const title = '紧急开店 · 小北按摩！';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}！欢迎光临小北按摩店！`);
      await era.printAndWait(
        `推开训练员室的门，${you.name} 看到穿着和服的 ${kita.name} 正跪在门后，而身后的训练员室的桌子则被铺上了一块白布。`,
      );
      await era.printAndWait(
        `这是在干什么啊……${
          you.name
        } 目瞪口呆的看着今天应该没有训练任务的${kita.teen_sex_title}。`,
      );
      await kita.say_and_wait(
        `嘿嘿嘿～为了感谢${callname}对人家的照顾，也是您最近身体总是嘎吱嘎吱的响。`,
      );
      await kita.say_and_wait(
        `所以……唔，是呢，今天的小北是为您提供临时按摩服务，让${callname}放松身体的按摩${
          kita.sex_code - 1 ? '女将' : '大将'
        }小北哦！`,
      );
      await era.printAndWait(
        '说着，小北将额头垂下紧紧贴地，三指并拢在额前，露出自己光滑而娇嫩的后背。',
      );
      await era.printAndWait(
        `${
          you.name
        } 这时才注意到小北穿的是一件近似肚兜的露背服，只要附身就能看到${kita.uma_sex_title}背后外溢的春光。`,
      );
      era.printButton('「不不不这再怎么说也不对劲吧……」', 1);
      era.printButton('「那么就麻烦小北了」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name} 后腿几步想要逃离，可是嘎嘣的一声脆响和脊椎的感觉让 ${you.name} 痛苦的垂下腰。`,
        );
        await era.printAndWait(
          `……不行了，只能接受小北的服务了……不然就算小北不放过 ${you.name}，这老腰也不会放过的……`,
        );
        await era.printAndWait(`${you.name} 重新转过身，踉跄着向小北走去。`);
        era.drawLine();
        await era.printAndWait(
          '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
        );
        await era.printAndWait(
          `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${you.name} 就这么睡了过去。`,
        );
      } else {
        await era.printAndWait(
          `${kita.name} 对着训练员露出温婉的微笑，仿佛母狗般四足跪爬着引导 ${you.name} 脱下衣服，趴在拼接而成的桌子上。`,
        );
        await era.printAndWait(
          `这孩子到底是和谁学的啊……？${
            you.name
          } 露出疑惑的表情，感受着${kita.teen_sex_title}起身骑跨在 ${
            you.name
          } 后背上。`,
        );
        await era.printAndWait(
          `在等待了半分钟后，${kita.name} 纤细有力的手指在 ${you.name} 背后摁压起紧绷的地方。`,
        );
        await kita.say_and_wait(
          `${callname}的身体，好紧绷呢……您和${kita.uma_sex_title}不一样，身体要好好的修养哦。`,
        );
        await era.printAndWait(
          '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
        );
        await era.printAndWait(
          `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${you.name} 就这么睡了过去。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_event: (() => {
    const title = '温泉旅行';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     * @param {boolean} has_ticket 持有温泉旅行券（商店街抽奖得到）
     */
    const f = async (kita, you, callname, has_ticket) => {
      await era.printAndWait(`${you.name} 在训练员室里整理着文件……`);
      await kita.say_and_wait(`${callname}！那个，我要和你说温泉券的声音！`);
      await kita.say_and_wait(`这三年，我有好好努力对吧！`);
      await kita.say_and_wait(`是这样了吧${callname}！`);

      await era.printAndWait(
        `突然闯进训练员室的小北，这么大声向 ${you.name} 询问道。`,
      );
      await era.printAndWait([
        '怎么突然开始说这个了？',
        you.get_colored_name(),
        ' 略带诧异地看着面前的',
        kita.teen_sex_title,
        '。',
      ]);
      era.println();
      era.printButton('「嗯，有好好努力了哦。」', 1);
      await era.input();
      await era.printAndWait(`毕竟无论如何，这三年来的胜利都是有目共睹的。`);
      await era.printAndWait(
        `${kita.name} 付出的努力毫无疑问，甚至远超我个人的预计，而结果也是显而易见的。`,
      );
      await kita.say_and_wait(`谢谢你，这三年来小北我一直在压抑着自己……`);
      await kita.say_and_wait(
        `但是，现在有了${callname}的努力，就算稍微奖励一下小北也是可以的，对吧！`,
      );
      await era.printAndWait(
        `黑发的${kita.teen_sex_title}一步步地逼近，用纤细的双手压住 ${
          you.name
        } 的肩膀让 ${you.name} 无法动弹。`,
      );
      if (has_ticket) {
        await kita.say_and_wait([
          '所以 ',
          callname,
          '，我们就用之前的温泉券去温泉吧！',
        ]);
        era.println();
        era.printButton(`「可以去！小北你松手，我们这就去！所以松手哇！」`, 1);
        await era.input();
        await era.printAndWait([
          '一边这么说着，',
          you.get_colored_name(),
          ' 慌忙从抽屉里找出放好的温泉券在 ',
          kita.get_colored_name(),
          ' 面前摇晃了起来。',
        ]);
      } else {
        await kita.say_and_wait(['所以 ', callname, '，我们就去温泉吧！']);
        await era.printAndWait([
          kita.get_colored_name(),
          ' 一边说一边亮出了一张温泉券，上面隐约印着一个以「北」开头的词……',
        ]);
      }
      era.drawLine({ content: '温泉旅馆' });
      await era.printAndWait(
        `为了防止过于想要奖励的小北做出什么出格的事，${you.name} 和小北一起来到了温泉旅馆。`,
      );
      await kita.say_and_wait(
        `呼啊～这里的温泉洗的好舒服啊～感觉身体心灵都洗的干干净净了～`,
      );
      await era.printAndWait(
        `用毛巾擦着白皙的后颈，${kita.name} 跪坐在柔软的垫子上，柔顺的马尾在软嫩有力的两只小脚间摇来摇去。`,
      );
      await era.printAndWait(
        `平日里紧绷的态度消失不见，看起来在泡过温泉后小北放松了不少。`,
      );
      await era.printAndWait(`挠～挠～`);
      await era.printAndWait(
        `${you.name} 打了个激灵，发现小北不知不觉转身趴在地板上，用尾巴轻轻挠着 ${you.name} 的脚心。`,
      );
      await era.printAndWait(
        `而在被 ${you.name} 发现之后，小北立刻打着滚在榻榻米上嘻嘻笑了起来。`,
      );
      await kita.say_and_wait(
        `呼呼呼～平时都一直紧绷着，放松下来后想要像小孩子一样在训练员面前撒娇玩闹了呢……哇！`,
      );
      await era.printAndWait(
        `打着滚的 ${kita.name}，不知不觉间就撞到了墙上，就这么大叫着露出了傻乎乎的笑容。`,
      );
      await era.printAndWait(
        `偶尔犯一下傻放开瞎闹似乎也挺好的呢，一边这么想着，${you.name} 开始和 ${kita.name} 在房间里就这么傻笑着打闹起来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_wife_end: (() => {
    const title = '独属于你的黑色夕阳';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `三年时光匆匆而过，${you.name} 和 ${kita.name} 迎来了即将分别的日子。`,
      );
      await kita.say_and_wait(
        `还有几天就要和您分开了呢，感觉，心里有点落寞啊。`,
      );
      await kita.say_and_wait(
        `毕竟${callname}，过几个月就要迎来新的孩子，成为那孩子专属的训练员了吧。`,
      );
      await kita.say_and_wait(`嘿嘿，稍微有点讨厌啊……`);
      await era.printAndWait(
        `抱着自己放在训练员室里的书本和用品，${kita.teen_sex_title}露出了有些落寞的表情。`,
      );
      await era.printAndWait(
        `并肩走在黄昏时分的寂静里，走廊里回荡着小北哒哒哒的脚步声，在空无一人的教室里回荡。`,
      );
      await era.printAndWait(
        `明明是不知道并肩走多少次的道路，今天却变得格外漫长。`,
      );
      await era.printAndWait(`毕竟，${kita.name} 已经预定了要回老家去了。`);
      await era.printAndWait(
        `虽然只是向年事已高的父亲报平安，并不是一定就不会回来，但是即使回到了特雷森，${kita.teen_sex_title}也不一定会继续和你共事了。`,
      );
      await kita.say_and_wait(`我，喜欢${callname}哦。`);
      await era.printAndWait(`转过拐角，${kita.teen_sex_title}轻描淡写的说。`);
      await era.printAndWait(
        `夕阳映照在小北孩子气的脸蛋上，将那温暖的笑容染上了和以往不同的颜色。`,
      );
      await kita.say_and_wait(
        `不如说最喜欢${callname}你了，想要成为${callname}的伴侣一直在一起呢。`,
      );
      await era.printAndWait(
        `这时，${you.name} 注意到小北脸上的绯红从不是温暖夕阳的映照，${kita.sex}那仔细打理过的黑发柔滑地垂下，甚至能够闻到些许香水的味道。`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}露出羞涩的神情，那胆怯的声音一反往常的活泼，带着试探和讨好的声音，${
          kita.name
        } 问 ${you.name} 道：`,
      );
      await kita.say_and_wait(`${callname}，能一直喜欢我么？`);
      await era.printAndWait(`哒，哒，哒。`);
      await era.printAndWait(
        `寂静的走廊里只听得到两人的脚步声，看来那泛着红晕的夕阳还没有消退的样子。`,
      );
      era.println();
      era.printButton('「小北」', 1);
      await era.input();
      await kita.say_and_wait(`是。`);
      era.println();
      era.printButton('「我也，一直以来都最喜欢了。」', 1);
      await era.input();
      await era.printAndWait(
        `于是，那脚步声戛然而止，而夕阳的心跳却愈发的怦怦跃动起来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_love_end: (() => {
    const title = '北部玄驹的小小祭典';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `小${kita.uma_sex_title}A「呜哇！小北${
          kita.elder_sibling_sex_title
        }来啦！快跑！」`,
      );
      await kita.say_and_wait(`站住站住！`);
      await era.printAndWait(
        `在小学的草操场上，${
          kita.name
        } 嘻嘻哈哈的的追着年幼的${kita.uma_sex_title}跑来跑去打闹在一起。`,
      );
      await era.printAndWait(
        `这是以地方学校为目的开展的公益比赛座谈会，在 ${kita.name} 结束赛程之后，由特雷森推动的公益计划。`,
      );
      await era.printAndWait(
        `不仅会向偏远地区提供经费，同时也会努力发掘想要成为训练员和赛${kita.uma_sex_title}的人。`,
      );
      await era.printAndWait(
        `而作为形象大使，去考察地方学园的人选，则是北部玄驹。`,
      );
      await era.printAndWait(
        `从籍籍无名到横空出世，这三年的时候可谓是北部剧场也不为过，而在民间积攒的人气则让小北有了能让他人避让三分的权利。`,
      );
      await era.printAndWait(
        `而除了工作之外，小北最喜欢的就是和孩子们开心的追逐奔跑着。`,
      );
      await era.printAndWait(
        `小北是很厉害的${kita.uma_sex_title}，所以慢的孩子也会高兴，快的孩子也很高兴，老师们也能闲下来休息一下。`,
      );
      await kita.say_and_wait(
        `呼哇哇！嘿嘿～真是一群可爱的孩子们呢，${callname}。`,
      );
      await era.printAndWait(
        `用毛巾擦着额头上的汗水，${kita.name} 笑眯眯地带着孩子们凑了过来。`,
      );
      await era.printAndWait(
        `似乎是看到外人有些兴奋，孩子们七嘴八舌地说着各自的话。`,
      );
      await era.printAndWait(
        `小${kita.uma_sex_title}B「那个那个！训练员${you.adult_sex_title}和小北${
          kita.elder_sibling_sex_title
        }在交往么！」`,
      );
      await era.printAndWait(`直到有个孩子这么说了为止……`);
      await kita.say_and_wait(`诶！？那个，这个……诶，在交往么？。`);
      await kita.say_and_wait(`这个，啊哈哈……怎么说呢……不太想说出来呢……`);
      await kita.say_and_wait(
        `但是，我和 ${callname} 每天都在一起，所以也算是交往？`,
      );
      await era.printAndWait(
        `轻轻抚摸着孩子们的脑袋，${kita.name} 露出了有些尴尬的微笑。`,
      );
      await era.printAndWait(
        `有些问题可不能回答啊……带着这样的想法，${you.name} 开始说起小北训练时候的故事，开始吸引孩子们的注意力了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_back_home: (() => {
    const title = '归乡的北部玄驹';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`抱歉，${callname}。`);
      await era.printAndWait(
        `站在返回家乡的车站，${kita.name} 对 ${you.name} 深深地鞠了一躬。`,
      );
      await era.printAndWait(
        `以往活泼的${kita.teen_sex_title}此时面色苍白，眼袋肉眼可见的红肿起来，似乎是哭过的样子。`,
      );
      await era.printAndWait(
        `因为比赛失败的原因，愤怒的粉丝为此冲击了校园，希望把 ${you.name} 这个「罪魁祸首」处刑掉。`,
      );
      await era.printAndWait(
        '虽然最后这件事莫名平静了下来，但是小北已经不能够继续在特雷森学园训练了。',
      );
      era.println();
      era.printButton(`「对不起，小北。」`, 1);
      await era.input();
      await kita.say_and_wait(
        `不，应该是我对不起您才对，${callname}是什么错也没有的。`,
      );
      await era.printAndWait(
        `露出惨淡的微笑，${kita.name} 忍不住又一次流下泪来。`,
      );
      await era.printAndWait(
        `在这短短的几天里，${kita.teen_sex_title}到底哭泣过多少次了呢。`,
      );
      await kita.say_and_wait(
        `果然，小北我并不是什么能够胜利的赛${kita.uma_sex_title}呢。`,
      );
      await kita.say_and_wait(
        '样貌普普通通，只有结实这一个优点，真是对不起，耽误了您这么长的时间。',
      );
      await kita.say_and_wait(`我会负起责任的，再见了，${callname}。`);
      await era.printAndWait(
        `登上归乡的巴士，${kita.name} 在嗡嗡作响的手机上说了一句话。`,
      );
      await era.printAndWait(`那声音被风儿吹散，未能传进 ${you.name} 的耳中。`);
      await era.printAndWait(`但在之后，有关 ${kita.name} 的热度莫名的消退。`);
      await era.printAndWait(
        `${you.name} 的训练员生涯中就像是从没有过 ${kita.name} 出现过一样，正常的继续了下去。`,
      );
      await era.printAndWait(
        `但偶尔，${
          you.name
        } 还是会想起那个${kita.teen_sex_title}转身时，那脆弱而苍白的背影。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_hello: (() => {
    const title = (callname) => `${callname}，最近还好么！`;
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(`在 ${kita.name} 毕业之后过了多久呢。`);
      await era.printAndWait(
        `时间已经记得不太清了，在那位黑色的${kita.teen_sex_title}离开之后，${
          you.name
        } 一如既往地像个训练员一样工作。`,
      );
      await era.printAndWait(
        `成为新的孩子的训练员，用稍微有点鬼畜的手段进行训练。`,
      );
      await era.printAndWait(`最后目送着孩子们在三年后离开。`);
      await era.printAndWait(
        `有些孩子会偶尔进行通讯，有些则不会，但是每年一如既往地，${kita.name} 会在你也有时间的时候打电话给你。`,
      );
      await kita.say_and_wait(`${callname}，最近过得怎么样呢？`);
      await kita.say_and_wait(
        `新的担当么？会不会很累？毕竟仔细想想的话，小北我那个时候不是一般的听话呢～`,
      );
      await kita.say_and_wait(
        `我这边么？啊～我在准备演歌手的出道，诶嘿嘿～毕竟父亲大人他年纪也大了嘛。`,
      );
      await era.printAndWait(
        `就这样闲聊着彼此最近的生活，分享着有趣的故事，讨论着那三年的时光。`,
      );
      await era.printAndWait(
        `${kita.name} 嘿嘿笑着同 ${you.name} 互相道着祝贺起彼此，像是往常一样结束了通话。`,
      );
      await you.say_and_wait(`这样就好。`);
      await you.say_and_wait(`这样就可以了。`);
    };
    f.title = title;
    return f;
  })(),
};
