/**
 * @file 醒目飞鹰 - 爱慕
 * @author 黑奴一号
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '一叶代表请求！';
    /**
     * 意识到自己恋情的醒目飞鹰打算约训练员出来野餐
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `休息日的某天，当${you.actual_name}打开训练室时，那是一个晴朗的天气。`,
      );
      await falcon.say_and_wait(`训练员${you.adult_sex_title}♪`);
      await era.printAndWait(
        `意外的，${falcon.name}比${you.actual_name}来得要早。`,
      );
      await falcon.say_and_wait(`这么好的天气，一起去野餐吧♪`);
      await era.printAndWait(`天气吗？确实是个适合野餐的好天气。`);
      era.printButton(`不过好像材料不够啊`, 1);
      await era.input();
      await era.printAndWait(`就算是野餐的话提前通知一下也好啊。`);
      await falcon.say_and_wait(`锵锵♪`);
      await era.printAndWait(`像是魔术师一样，拉开了用桌布包裹着的野餐盒。`);
      await falcon.say_and_wait(`已经全部都准备好了！`);
      await era.printAndWait(`飞鹰子似乎很期待的样子。`);
      await falcon.say_and_wait(
        `所以，训练员${you.adult_sex_title}，可以和飞鹰子一起出发吗？`,
      );
      await era.printAndWait(`答案当然是。`);
      era.printButton(`我也很高兴。`, 1);
      await era.input();
      await falcon.say_and_wait(`太好了⭐`);
      await era.printAndWait(
        `轻轻关上训练室，在${falcon.name}的引导之下走出了特雷森。`,
      );
      era.drawLine({ content: '过了一段时间' });
      await falcon.say_and_wait(`准备好了！`);
      await era.printAndWait(`来到了附近的一处公园。`);
      era.printButton(`草坪上前来野餐的游客真多啊。`, 1);
      await era.input();
      await era.printAndWait(`在休息处的草坪上，到处都是铺上餐桌布的游客。`);
      await falcon.say_and_wait(`毕竟今天的天气很适合野餐嘛♪`);
      await you.say_and_wait(`飞鹰子很期待野餐呢。`);
      await falcon.say_and_wait(`因为飞鹰子一直期待着能够两个人一起野餐。`);
      await you.say_and_wait(
        `嗯，没有和荣进闪耀${falcon.couple_title}一起野餐过吗？`,
      );
      await era.printAndWait(`从篮子里取出食物的${falcon.name}动作一僵。`);
      await falcon.say_and_wait(
        `不，不一样哦？和闪耀${
          falcon.couple_title
        }野餐是朋友性质的，和训练员${you.adult_sex_title}之间则是`,
      );
      await you.say_and_wait(`我和${falcon.couple_title}不一样吗？`);
      await falcon.say_and_wait(
        `那……那个……哦，对了！是训练员与${falcon.uma_sex_title}之间的羁绊！是羁绊哦！`,
      );
      await era.printAndWait(`拼命掩饰的飞鹰子显得额外可爱。`);
      await you.say_and_wait(`哦，原 来 如 此？`);
      await falcon.say_and_wait(
        `诶？训练员${you.adult_sex_title}不要捉弄飞鹰子啦！`,
      );
      await falcon.say_and_wait(`这样的训练员${you.adult_sex_title}最讨厌了！`);
      await you.say_and_wait(`飞鹰子原来讨厌我吗？`);
      await falcon.say_and_wait(`不对！这是两回事！`);
      await you.say_and_wait(`我好伤心，所以这块肉是我的了！`);
      await era.printAndWait(
        `${you.actual_name}突然从飞鹰子的便当里夹走了一块肉。`,
      );
      await falcon.say_and_wait(`训练员${you.adult_sex_title}坏心眼！`);
      await falcon.say_and_wait(`那么飞鹰子也要回敬！`);
      await era.printAndWait(
        `从${callname}的便当里夹走了两份寿司的${falcon.name}露出了得意的表情。`,
      );
      await falcon.say_and_wait(
        `哼哼♪这下训练员${you.adult_sex_title}知道飞鹰子的厉害了吧！`,
      );
      era.printButton(`开什么玩笑，现在正是气氛高涨的时候！`, 1);
      await era.input();
      await era.printAndWait(
        `一瞬间做好了决斗准备的${you.actual_name}瞬间处于兴奋状态，瞄准了飞鹰子手中的便当！`,
      );
      await falcon.say_and_wait(`赌上偶像之名！飞鹰子绝不会输！`);
      await era.printAndWait(`两人之间的战斗（？）吸引了周围游人的纷纷侧目。`);
      await era.printAndWait(`最终`);
      era.printButton(`咕！人类还是战胜不了${falcon.uma_sex_title}吗？`, 1);
      await era.input();
      await era.printAndWait(`以${you.actual_name}的完败告终。`);
      await falcon.say_and_wait(`这场对局是飞鹰子的胜利！`);
      await falcon.say_and_wait(`诶？这样是不是互相投喂对方的便当啊？`, true);
      await era.printAndWait(`突然意识到这点飞鹰子刷一下脸变得通红。`);
      await falcon.say_and_wait(`不！不对！这样子还太早了啦！`);
      await falcon.say_and_wait(`${callname}真H！`);
      await era.printAndWait(
        `不知为何突然跑开的飞鹰子留下了一脸懵逼的${callname}以及一片狼藉的战场。`,
      );
      await you.say_and_wait(`今天的天空像琉璃一样漂亮啊。`);
      await era.printAndWait(
        `突然被天空中的白云吸引着的${callname}似乎忘了某个${falcon.uma_sex_title}的身影。`,
      );
      await era.printAndWait(`今天真是个好天气。`);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '二叶代表希望⭐';
    /**
     * 希翼着训练员能听到自己心声的醒目飞鹰暗自期待着
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      const ret = [];
      await falcon.print_and_wait(
        `训练员${you.adult_sex_title}比想象之中还要迟钝呢`,
      );
      await falcon.print_and_wait(
        `明明已经那么明显的暗示了，为什么他的眼神还是那么无动于衷呢？`,
      );
      await falcon.print_and_wait(
        `不！不能放弃，赌上我作为顶级偶像的荣誉，一定要让这个木头粉丝一号开窍！`,
      );
      era.drawLine();
      await era.printAndWait(`又是一个下雨的休息日。`);
      await falcon.say_and_wait(`欸——明明今天应该是晴天才对的啊。`);
      await you.say_and_wait(
        `嘛，毕竟天气预报也不是准确的，只能说是遇到小概率事件了。`,
      );
      await era.printAndWait(
        `因为下雨导致的场地湿滑，飞鹰子的街头演出也泡汤了。`,
      );
      await era.printAndWait(
        `似乎是对这场演出很重视的样子，提前了两个星期开始排练的舞蹈似乎也没排上用场。`,
      );
      await falcon.say_and_wait(`唔——真不甘心。`);
      await era.printAndWait(
        `盯着窗外的${falcon.name}看着越来越大的雨势没精打采的甩着尾巴。`,
      );
      await you.say_and_wait(
        `不过，飞鹰子也可以往好的方面想想看嘛，虽然下雨天失去了在户外交流的权力。`,
      );
      await you.say_and_wait(`但是，说不定在室内的话也能遇到好事情发生呢！`);
      await falcon.say_and_wait(
        `就算训练员${you.adult_sex_title}这么说的话……对啊！`,
      );
      await era.printAndWait(`刚才还耷拉着的耳朵一瞬间就恢复了状态。`);
      await falcon.say_and_wait(`不如就在训练室里表演吧！`);
      await falcon.say_and_wait(`训练员${you.adult_sex_title}等我一下♪`);
      await era.printAndWait(`一想到什么就决定去行动也是飞鹰子的特点。`);
      await you.say_and_wait(`不过，窗外的雨吗？`);
      await era.printAndWait(
        `如同摇摆不定的树木一样，${you.actual_name}的内心也开始动摇了。`,
      );
      await falcon.say_and_wait(`我回来了♪`);
      await era.printAndWait(`换上了决胜服的${falcon.name}回到了训练室中。`);
      await you.say_and_wait(`开始期待接下来的舞蹈了。`);
      await falcon.say_and_wait(`为了粉丝们的大家，飞鹰子可是排练了好久呦♪`);
      await you.say_and_wait(`哦哦哦！飞鹰子！飞鹰子！`);
      await era.printAndWait(`如同街头演出时一模一样。`);
      await falcon.say_and_wait(`那么，飞鹰子开始唱了♪`);
      era.drawLine();
      await falcon.say_and_wait(`～～～♪谢谢大家！`);
      era.printButton(`「飞鹰子最喜欢${callname}了！」（暂不升级）`, 1, {
        buttonType: '',
        color: falcon.color,
      });
      era.printButton(`「……」`, 2, {
        buttonType: '',
        color: falcon.color,
      });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await falcon.say_and_wait(
          `嗯嗯，能够收到粉丝们的感谢，飞鹰子也很高兴呦！`,
        );
        await falcon.say_and_wait(`欸？好像忘了要干什么了？`, true);
        await falcon.say_and_wait(
          `作为偶像可不能让粉丝们干站着，先不管了！`,
          true,
        );
        await falcon.say_and_wait(`那么，接下来，一，二！`);
        era.printButton(`飞鹰子！`, 1);
        await era.input();
        await era.printAndWait(`动人的歌声再次响彻在了训练室。`);
      } else {
        await you.say_and_wait(`飞鹰子比想象之中还要可爱啊`);
        await falcon.say_and_wait(`……?`);
        await falcon.say_and_wait(
          `训练员${you.adult_sex_title}什么时候变成笨蛋了？飞鹰子一直都很可爱呦？`,
        );
        await you.say_and_wait(
          `不，我说的是飞鹰子作为${falcon.teen_sex_title}的部分。`,
        );
        await you.say_and_wait(
          `处于多愁善感的年纪，天真浪漫的简直像是艺术品。`,
          true,
        );
        await era.printAndWait(`飞鹰子的脸慢慢红了起来。`);
        await falcon.say_and_wait(
          `训练员${you.adult_sex_title}，变态！色狼！H！`,
        );
        await falcon.say_and_wait(`再也不理${callname}了！`);
        await era.printAndWait(
          `夺门而出的${falcon.name}甚至没有给${callname}反应的时间就离开了训练室。`,
        );
        await you.say_and_wait(`啊，这下产生误会了。`);
        await era.printAndWait(
          `${falcon.teen_sex_title}的心情似乎正如外面的大雨一样。`,
        );
        await you.say_and_wait(`不过这雨似乎下的额外的大啊。`);
        await you.say_and_wait(`……飞鹰子`);
        await era.printAndWait(`而作为训练员的${you.actual_name}，最终决定。`);
        era.printButton(`只能追上去了！（升级关系）`, 1);
        era.printButton(`……还是先打电话吧？（暂不升级）`, 2);
        ret.push(await era.input());
        if (ret[1] === 1) {
          await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
          await you.say_and_wait(`就只能追上去了！`);
          await era.printAndWait(
            `朝夕共处的${callname}当然知道${falcon.name}最有可能出现的地方。`,
          );
          await you.say_and_wait(`……为什么不在这里？`);
          await era.printAndWait(`河岸边没有看到${falcon.sex}的身影`);
          await era.printAndWait(`洋甘菊丛在涨潮的河水中几乎被全部淹没。`);
          await you.say_and_wait(`……飞鹰子，${callname}在哪里？`);
          await era.printAndWait(`洋甘菊丛在涨潮的河水中几乎被全部淹没。`);
          await falcon.say_and_wait(
            `……如果是训练员${you.adult_sex_title}的话，说不定可以实现我的梦想。`,
          );
          await you.say_and_wait(`……没错！一定在那里！`);
          await era.printAndWait(
            `直觉像闪电般突然给予了${you.actual_name}方向。`,
          );
          await era.printAndWait(
            `一刻思考的时间也不存在，${you.actual_name}立刻朝着那边奔跑。`,
          );
          era.drawLine({ content: '天台' });
          await era.printAndWait(
            `仿佛像是矗立在雨水之中的雕像一样，${falcon.name}一动也不动。`,
          );
          await you.say_and_wait(`${falcon.name}！`);
          await falcon.say_and_wait(
            `……训练员${you.adult_sex_title}请不要在过来了。`,
          );
          await era.printAndWait(
            `像是意识到了什么一样，试图远离${callname}的${falcon.name}慢慢向围栏退去。`,
          );
          await falcon.say_and_wait(`请不要再靠近飞鹰子了！`);
          await era.printAndWait(
            `向前逼近的${you.actual_name}与一步一步向后退去的飞鹰子。`,
          );
          await falcon.say_and_wait(
            `飞鹰子……飞鹰子急了的话也会踢训练员${you.adult_sex_title}的哦！`,
          );
          await era.printAndWait(
            `${
              you.actual_name
            }心中明白，人类是不可能战胜${falcon.uma_sex_title}的。`,
          );
          await era.printAndWait(`但是，此时此刻，唯一能做的就是。`);
          await falcon.say_and_wait(`……唔！`);
          await era.printAndWait(
            `紧紧抱住湿透了的${falcon.name}，强硬的将嘴唇贴在一起。`,
          );
          await falcon.say_and_wait(`……`);
          await era.printAndWait(`意料之外的，${falcon.name}没有强烈的抗拒。`);
          await you.say_and_wait(`对不起，我现在才明白${falcon.name}的感受。`);
          await you.say_and_wait(`早就应该明白的，那么多的暗示。`);
          await you.say_and_wait(
            `我是个懦弱的人，不敢幻想着存在一条希望的道路。`,
          );
          await you.say_and_wait(
            `所以，给${falcon.name}造成了这么多的伤害，对不起。`,
          );
          await you.say_and_wait(`但是，只有此时此刻，我希望`);
          await you.say_and_wait(`真真切切的希望`);
          await you.say_and_wait(`${falcon.name}，${callname}可以和我交往吗？`);
          await era.printAndWait(
            `紧紧盯着${falcon.name}的双眼，迫使着${falcon.name}得出答案。`,
          );
          await falcon.say_and_wait(`……`);
          await falcon.say_and_wait(
            `……训练员${you.adult_sex_title}真是坏心眼呢。`,
          );
          await falcon.say_and_wait(`回答的话，不是只有一个了吗？`);
          await era.printAndWait(
            [falcon.get_colored_name(), `「最喜欢${you.actual_name}了！」`],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.375rem',
            },
          );
          await you.say_and_wait(`有多喜欢！`);
          await era.printAndWait(
            [falcon.get_colored_name(), '「有这么喜欢❤️」'],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.875rem',
            },
          );
          await era.printAndWait(
            `在雨中像笨蛋情侣一样互相告白的两人，终于朝着恋人的方向发展了。`,
          );
        } else {
          await era.printAndWait(
            `之后得知了飞鹰子平安回到宿舍时的消息让${callname}松了一口气。`,
          );
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '三叶代表爱情❤️';
    /**
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 醒目飞鹰对玩家的称呼
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`女仆${falcon.name}参上⭐`);
      await falcon.say_and_wait(
        `训练员${you.adult_sex_title}觉得飞鹰子这身打扮怎么样？`,
      );
      await era.printAndWait(
        `换上了可爱风女仆装的${falcon.name}穿上了吊带袜。`,
      );
      await you.say_and_wait(`飞鹰子穿起来真合适啊。`);
      await falcon.say_and_wait(
        `现在站在这里的是${falcon.name}哦，训练员${you.adult_sex_title}♪`,
      );
      await you.say_and_wait(
        `一如既往将${falcon.name}与飞鹰子分的很清楚啊。`,
        true,
      );
      await era.printAndWait(
        `${falcon.name}顿了一下，做出了女仆的标准行礼姿势。`,
      );
      await falcon.say_and_wait(
        `感谢主人大人一直以来的关照，作为女仆的${falcon.name}虽然还只是新手，但也会尽全力服侍主人大人的。`,
      );
      await era.printAndWait(`哦哦，这么快就进入状态了吗？`);
      await you.say_and_wait(
        `辛苦了${falcon.name}，可以把今天的日程表拿过来吗？`,
      );
      await falcon.say_and_wait(`是，主人大人。`);
      await era.printAndWait(
        `从架子上取下存放资料的${falcon.name}将文件递到了${callname}的手上。`,
      );
      await you.say_and_wait(`非常感谢。`);
      await falcon.say_and_wait(
        `欸嘿嘿⭐主人大人再多夸奖一下${falcon.name}吧♪`,
      );
      await you.say_and_wait(`糟糕！有点过于可爱了`, true);
      await you.say_and_wait(`辛苦了，接下来请在沙发上休息吧`);
      await falcon.say_and_wait(`谨遵指示♪`);
      await era.printAndWait(
        `将这种莫名升起的奇怪感觉压下去后，强迫自己将注意力集中到资料上去。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`真的不需要飞鹰子在旁边帮忙吗？`);
      await era.printAndWait(`不知何时凑过来的小脑袋与${callname}对视着。`);
      await you.say_and_wait(`该死！现在还不是时候。`, true);
      await you.say_and_wait(`不，飞鹰子好好坐在那里就可以了。`);
      era.drawLine();
      await falcon.say_and_wait(`主人大人工作辛苦了♪`);
      await era.printAndWait(
        `将泡好的红茶端到了办公桌上的${falcon.name}带着期待的神情看着${you.actual_name}。`,
      );
      await you.say_and_wait(`非常感谢。`);
      await era.printAndWait(`轻抿一口茶水之后，意外的感受到了甘甜的味道。`);
      era.printButton(`很好喝哦`, 1);
      await era.input();
      await falcon.say_and_wait(`真的吗！飞鹰子的努力终于有回报了♪`);
      await you.say_and_wait(`里面加了什么吗。`);
      await falcon.say_and_wait(`柠檬、冰糖还有红茶叶♪`);
      await you.say_and_wait(`飞鹰子也坐下来一起喝吧？`);
      await falcon.say_and_wait(`盯————`);
      await era.printAndWait(`鼓起的小嘴额外的可爱。`);
      await you.say_and_wait(
        `咳！作为主人破例给予女仆${falcon.name}与我一起品尝红茶的权力。`,
      );
      await falcon.say_and_wait(`能得到主人大人的宠爱是${falcon.name}的荣幸！`);
      await era.printAndWait(`坐下来一起品尝的${falcon.name}一副享受的样子。`);
      await you.say_and_wait(`接下来怎么cosplay来着？`, true);
      await era.printAndWait(
        `有些心虚的多喝了几口，从余光偷偷打量着${falcon.name}。`,
      );
      await era.printAndWait(
        `紧紧盯着${you.actual_name}的${falcon.name}露出了可爱的笑脸，放在身前的红茶依然冒着滚烫的气息。`,
      );
      await era.printAndWait(`在微妙的感觉之间，时间一点一点流逝着。`);
      era.drawLine();
      await you.say_and_wait(
        `呼——上午的工作差不多结束了。一起去餐厅吧，${falcon.name}。`,
      );
      await falcon.say_and_wait(`是，主人大人！`);
      await era.printAndWait(
        `前往餐厅的路上似乎有很多的视线盯着${callname}们。`,
      );
      await you.say_and_wait(`？`, true);
      await era.printAndWait(
        `备感疑惑的${callname}下意识看向了身边的${falcon.name}。`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `身穿女仆装的${falcon.name}带着笑容看着${callname}。`,
      );
      await you.say_and_wait(`什么惩罚游戏。`, true);
      await era.printAndWait(
        `在纠结要不要让${falcon.sex}换回去的时候走进了餐厅。`,
      );
      await falcon.say_and_wait(`主人大人想要吃什么呢？`);
      await you.say_and_wait(`跟昨天一样`);
      await era.printAndWait(`下意识说出口了。`);
      await falcon.say_and_wait(`那么${falcon.name}现在就去准备♪`);
      await era.printAndWait(
        `啪嗒啪嗒走向了窗口排队的${falcon.name}在一众校服之间显得额外显眼。`,
      );
      await you.say_and_wait(`世界啊毁灭吧，为啥这么多看着我的人。`, true);
      await you.say_and_wait(`今天的天气也是那种即将要下雨的样子啊。`, true);
      await era.printAndWait(
        `灰蒙蒙的天气意外让${you.actual_name}感到了愉悦。`,
      );
      await falcon.say_and_wait(`久等了训练员${you.adult_sex_title}♪`);
      await era.printAndWait(
        `将两人的午餐端在了桌子上，${falcon.name}带着期待的目光看着${callname}。`,
      );
      await you.say_and_wait(`辛苦了飞鹰子。`);
      await falcon.say_and_wait(`唔——`);
      await era.printAndWait(
        `轻轻抚摸着${falcon.name}的脑袋，后者的不满很快就转变为了享受的表情。`,
      );
      await falcon.say_and_wait(`既然这样的话，就让飞鹰子来喂${callname}吧！`);
      await era.printAndWait(
        `${falcon.name}将筷子伸进${callname}的餐盘之中，夹了一块肉放到${callname}的嘴边。`,
      );
      await falcon.say_and_wait(`啊～～～`);
      await era.printAndWait(
        `筷子碰到口腔之中的异物感很快被满满的幸福所替代。`,
      );
      era.printButton(`接下来换我来喂${falcon.name}吧`, 1);
      await era.input();
      await falcon.say_and_wait(`啊～～～嗯！`);
      await era.printAndWait(
        `回味着余韵的${falcon.name}眯起了眼睛享受着这一刻。`,
      );
      await falcon.say_and_wait(`现在轮到我了！`);
      era.drawLine();
      await you.say_and_wait(`非常感谢！`);
      await falcon.say_and_wait(`飞鹰子也是！`);
      await era.printAndWait(
        `在互相投喂期间，周围的人似乎都与${callname}们隔开了一段距离。`,
      );
      await you.say_and_wait(
        `${callname}们就是在嫉妒找不到这么可爱的恋人`,
        true,
      );
      await era.printAndWait(`${you.actual_name}心中愤愤不平的想着。`);
      await you.say_and_wait(`接下来的话，做什么好呢？`);
      await falcon.say_and_wait(
        `比起这个的话，训练员${you.adult_sex_title}嘴角边的酱汁没有擦干净！`,
      );
      await era.printAndWait(
        `就这样，${falcon.name}快速贴近到了${callname}的身旁，伸出了舌头擦得一干二净。`,
      );
      await falcon.say_and_wait(`多谢款待！`);
      await era.printAndWait(`正准备后退的${falcon.name}却被环住了腰肢。`);
      await you.say_and_wait(`飞鹰子嘴角边也有酱汁没舔干净哦？`);
      await falcon.say_and_wait(`欸~训练员${you.adult_sex_title}❤`);
      await era.printAndWait(`再次品尝了${falcon.name}嘴角的美味后。`);
      await you.say_and_wait(`${falcon.name}。`);
      await falcon.say_and_wait(`${you.actual_name}❤`);
      await era.printAndWait(
        `就在餐厅之中旁若无人接吻的恋人享受着这段甜蜜时光。`,
      );
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '四叶代表幸福♪';
    /**
     * 如愿已偿和训练员结婚的醒目飞鹰感到了幸福
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     */
    const f = async (falcon, you) => {
      era.printButton(`说起来还是有点紧张呢。`, 1);
      await era.input();
      await falcon.say_and_wait(`没关系的，毕竟飞鹰子现在也很紧张呦♪`);
      await era.printAndWait(`相恋的两人终于决定确定了结婚的日期。`);
      era.printButton(`当时在马推上宣布的时候我可是担心会被粉丝们报复呢。`, 1);
      await era.input();
      await era.printAndWait(
        `在马推上宣布了结婚的消息之后，虽然也有少数的粉丝表示无法接受，但大多数的粉丝还是送上了祝福。`,
      );
      await falcon.say_and_wait(`不会的，毕竟？`);
      era.printButton(
        `不过飞鹰子在我身边的话，总觉得有种什么困难都可以度过的安心感呢。`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `所以，能遇到${falcon.name}，是我一生之中最幸福的时刻了。`,
      );
      await falcon.say_and_wait(
        `事到如今说这种奇怪的话，可是会让飞鹰子困惑的呦？`,
      );
      await you.say_and_wait(`抱歉，不过我会永远陪伴在飞鹰子身边的。`);
      await falcon.say_and_wait(
        `这样的话，接下来的日子里也要把飞鹰子放在最重要的地方哦？`,
      );
      await you.say_and_wait(
        `嗯，直到老到两个人都动不了，弥留之际也会想起今天的日子。`,
      );
      await falcon.say_and_wait(`飞鹰子也是。`);
      await era.printAndWait(`紧紧握住双手的二人发誓将永远记得今天的誓言。`);
      await you.say_and_wait(`抱歉气氛太沉重了，换个话题吧。`);
      era.printButton(`飞鹰子喜欢什么种类的婚纱？`, 1);
      await era.input();
      await falcon.say_and_wait(`训练员喜欢什么种类的婚纱呢？`);
      await era.printAndWait(`话题被抛回来了。`);
      await you.say_and_wait(`让我想想看。`);
      era.printButton(`心型领的婚纱甜美中带着性感suki`, 1);
      era.printButton(`抹胸性感优雅还可以露出锁骨suki`, 2);
      era.printButton(`不如还是宫廷风加超大拖尾的好看`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(`飞鹰子对这种太过大胆的服饰可是NG的哦？`);
          await era.printAndWait(`从手掌传来的压力越来越大。`);
          await you.say_and_wait(`对，对不起，非常抱歉！`);

          break;
        case 2:
          await falcon.say_and_wait(`要不先去试试看吧？`);
          await you.say_and_wait(`好。`);
          await falcon.say_and_wait(`……要不还是换一套吧⭐`);
          await you.say_and_wait(`难道是胸部太小穿不上吗？`, true);
          await era.printAndWait(
            `失礼的话没有说出来，只是用鼓励的眼神看向了飞鹰子。`,
          );
          break;
        case 3:
          await falcon.say_and_wait(`唔，飞鹰子的气质似乎不太适合的样子呢。`);
      }
      era.printButton(`再看看其他种类的吧`, 1);
      await era.input();
      await falcon.say_and_wait(`嗯，这套怎么样？`);
      await era.printAndWait(
        `换上了泡泡袖婚纱的飞鹰子得意的在你面前转了一圈。`,
      );
      await you.say_and_wait(`像天使一样可爱。`);
      await falcon.say_and_wait(
        `啊，说起来的话训练员${you.adult_sex_title}选好了西装吗？`,
      );
      await you.say_and_wait(`嗯，已经选好了。`);
      await falcon.say_and_wait(`时间还有剩的话先在附近逛逛吧！`);
      await falcon.say_and_wait(
        `像这样和训练员${you.adult_sex_title}一起度过的时间可真幸福呢！`,
      );
      await you.say_and_wait(`说起来的话，飞鹰子接下来的打算是？`);
      await falcon.say_and_wait(
        `飞鹰子接下来打算以泥地偶像的身份作为前辈在赛场上激励着作为后辈的${falcon.uma_sex_title}们！`,
      );
      await falcon.say_and_wait(
        `飞鹰子接下来打算以泥地偶像的身份作为前辈在赛场上激励着作为后辈的${falcon.uma_sex_title}们！`,
      );
      await falcon.say_and_wait(
        `虽然这样的话可能也会很辛苦，不过只要训练员${you.adult_sex_title}在身边的话，不论什么困难都可以度过的！`,
      );
      await falcon.say_and_wait(`而且，飞鹰子比起今天更期待着明天！`);
      await you.say_and_wait(`我也是！`);
      await era.printAndWait(`之后两人在周围的公园附近享受着约会的乐趣。`);
      era.drawLine({ content: '到了黄昏' });
      await falcon.say_and_wait(`飞鹰子差不多该回去了呦！`);
      await era.printAndWait(
        `依依不舍的将牵着的手分开的${falcon.name}带着通红的脸颊看着你。`,
      );
      await you.say_and_wait(`那么，回去之前的话。`);
      await era.printAndWait(`在黄昏之际两人幸福的接吻在了一起。`);
      await falcon.say_and_wait(`那么，这下飞鹰子真的要回去了呦！`);
      await you.say_and_wait(`明天的话一定是个洋溢着幸福气息的日子。`);
      await falcon.say_and_wait(`飞鹰子也这么认为。`);
      await era.printAndWait(`在黄昏之际两人幸福的接吻在了一起。`);
      await falcon.say_and_wait(`飞鹰子开始期待着明天的到来了呢⭐`);
      await falcon.say_and_wait(`训练员${you.adult_sex_title}，明天见⭐`);
      era.drawLine({ content: '第二天' });
      await era.printAndWait(
        `预想之中因为过度紧张而失眠的情况没有发生，${you.actual_name}睡得比平时还要深沉。`,
      );
      await era.printAndWait(
        `在迷迷糊糊之中被闹钟吵醒的后迅速换上了衣服之后走向了教堂。`,
      );
      await you.say_and_wait(`提前一个小时过来会不会有些早了？`);
      await era.printAndWait(`不如说时间刚刚好，在司仪的引导下走向了准备室。`);
      await era.printAndWait(
        `教堂之中坐满了前来见证的${falcon.uma_sex_title}们。`,
      );
      era.printButton(`稍微有些紧张啊`, 1);
      await era.input();
      await era.printAndWait(`乖乖地在座位上等着化妆。`);
      await falcon.say_and_wait(`训练员${you.adult_sex_title}⭐`);
      await you.say_and_wait(`欸？飞鹰子你怎么在这里？`);
      await falcon.say_and_wait(
        `因为想要早点看到训练员${you.adult_sex_title}的脸！`,
      );
      await falcon.say_and_wait(
        `一想到训练员${you.adult_sex_title}的温柔的笑容，飞鹰子的心就跳的好快。`,
      );
      await falcon.say_and_wait(
        `然后，突然的失落感就出来了，如果训练员${you.adult_sex_title}不在这里的话。`,
      );
      await falcon.say_and_wait(`飞鹰子又该怎么办呢？`);
      await falcon.say_and_wait(`等待着等待着，飞鹰子的心就越来越不安。`);
      await falcon.say_and_wait(
        `想要早点看见训练员${you.adult_sex_title}的模样！想要早点被那双温柔的手臂抱住！`,
      );
      await falcon.say_and_wait(`所以，飞鹰子已经等不及了！`);
      await era.printAndWait(
        `面对着越来越激动的${falcon.name}，${you.actual_name}温柔的抚摸着${falcon.sex}的小脑袋。`,
      );
      await you.say_and_wait(`放心，我就在这里，永远也不会离开你。`);
      await era.printAndWait(
        `慢慢平静下来的${falcon.name}终于安心下来了，看向了${you.actual_name}。`,
      );
      await era.printAndWait(`女化妆师「抱歉请问有没有看到……」`);
      await era.printAndWait(
        `女化妆师「${falcon.actual_name_with_title}！请赶快过来，马上就要开始了！」`,
      );
      await you.say_and_wait(
        `接下来的话，我会一直陪在你身边的，所以，请不要紧张。`,
      );
      await falcon.say_and_wait(`嗯！训练员${you.adult_sex_title}，待会见♪`);
      await era.printAndWait(
        `轻轻提起婚纱的${falcon.name}回到了自己的准备室。`,
      );
      await you.say_and_wait(`${falcon.name}`, true);
      await era.printAndWait(
        `脑海之中浮现出了刚刚跑过来的${falcon.name}可爱的样子。`,
      );
      era.drawLine();
      await era.printAndWait(`点燃同心烛之后，`);
      await era.printAndWait(
        `在三女神的见证之下，${you.actual_name}与${falcon.name}走进了教堂。`,
      );
      await era.printAndWait(
        `神父「在三女神的旨意下我将见证这场神圣的婚姻。」`,
      );
      await era.printAndWait(
        `神父「${falcon.uma_sex_title}是三女神引导来自异界的灵魂赋予身为母亲的祝福。」`,
      );
      await era.printAndWait(
        `神父「在三女神的祝福下美丽又强大，而且热爱奔跑的${falcon.uma_sex_title}诞生了。」`,
      );
      await era.printAndWait(
        `神父「三女神希望人类和${falcon.uma_sex_title}能够一生一世、一心一意的结合在一起。」`,
      );
      await era.printAndWait(
        `神父「诞下的子女也会受到来自三女神之间的祝福，是不可抛弃，必须抚养长大。」`,
      );
      await era.printAndWait(
        `神父「那么，${you.actual_name}，你愿意${falcon.name}成为你的妻子，作为朋友和伴侣生活在一起吗？」`,
      );
      await era.printAndWait(
        `神父「你爱${falcon.sex}尊重${falcon.sex}吗？你愿意与${falcon.sex}平等、共同分享快乐，无论痛苦、胜利还是在困惑中？」`,
      );
      era.printButton(`我愿意。`, 1);
      await era.input();
      era.printButton(`选你${falcon.name}，成为我的妻子。`, 1);
      await era.input();
      era.printButton(
        `从今日起，拥有你、坚守你，无论好与坏、富足贫穷、有病无病都要爱你、珍惜你直到死神将你我分离。`,
        1,
      );
      await era.input();
      era.printButton(`遵循三女神的旨意，我承诺对你的爱和我对你的忠诚。`, 1);
      await era.input();
      await era.printAndWait(
        `神父「那么，${falcon.name}，你愿意${you.actual_name}成为你的丈夫，作为朋友和伴侣生活在一起吗？」`,
      );
      await era.printAndWait(
        `神父「你爱他尊重他吗？你愿意与他平等、共同分享快乐，无论痛苦、胜利还是在困惑中？」`,
      );
      await falcon.say_and_wait(`我愿意。`);
      await falcon.say_and_wait(`选你${you.actual_name}，成为我的丈夫。`);
      await falcon.say_and_wait(
        `从今日起，拥有你、坚守你，无论好与坏、富足贫穷、有病无病都要爱你、珍惜你直到死神将你我分离。`,
      );
      await era.printAndWait(
        `神父「结婚戒指象征着永恒，象征着两颗拥有无尽的爱的心与灵的永远的结合。现在将你的爱和你殷切的渴望你们的心与灵永远结合的愿望作为礼物送给${falcon.sex}。」`,
      );
      await era.printAndWait(`神父「你可以给你的新娘戴上这枚结婚戒指了。」`);
      await era.printAndWait(
        `得到许可之后，小心翼翼将戒指从戒指盒之中取出，将戒指戴上了${falcon.name}的无名指。`,
      );
      era.printButton(`给${falcon.name}戴上戒指`, 1);
      await era.input();
      await era.printAndWait(
        `紧紧盯着左手无名指的${falcon.name}眼角流下了幸福的眼泪。`,
      );
      await era.printAndWait(
        `虽然依然存在着些许对未来的恐惧与迷茫，但此刻的${falcon.name}无疑是最幸福的状态。`,
      );
      await era.printAndWait(
        `神父「同样以你的爱和你殷切的渴望你们的心与灵永远结合的愿望作为礼物送给他。」`,
      );
      await era.printAndWait(`神父「你可以给你的新郎戴上这枚结婚戒指了。」`);
      await era.printAndWait(
        `同样的，${falcon.name}从戒指盒中取出另一只戒指，戴在了你的手上。`,
      );
      await era.printAndWait(`而${you.actual_name}的想法则是`);
      era.printButton(`能够遇到${falcon.name}是我一生中最大的荣幸`, 1);
      await era.input();
      await era.printAndWait(
        `神父「从这时起，你们要为彼此而着想，而不能只顾个人。你们有着共同的理想，你们共同分享着欢乐与悲伤。」`,
      );
      await era.printAndWait(
        `神父「当你们各自手执一支蜡烛点燃中间那支蜡烛时，你们要熄灭代表你们自己的蜡烛。」`,
      );
      await era.printAndWait(
        `神父「点燃中间那支蜡烛代表你们二人新生活的开始，是两人将永远生活在一起成为不可分割的一体的见证。」`,
      );
      await era.printAndWait(`神父「愿这只蜡烛的光辉证明你们的结合。」`);
      await era.printAndWait(
        `神父「人间的任何事利都不能使你们分开，恭喜你们。」`,
      );
      await era.printAndWait(`两人在祝福之中接吻，沐浴在众人的喝彩之中。`);
      await era.printAndWait(
        `神父「愿三女神降福你们，使你们的家庭成为爱的楷模。」`,
      );
      await era.printAndWait(`环抱着花束的${falcon.name}露出了最幸福的笑容。`);
    };
    f.title = title;
    return f;
  })(),
};
