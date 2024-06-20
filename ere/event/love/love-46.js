const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

/**
 * 醒目飞鹰 - 爱慕
 *
 * @author 黑奴一号
 */
module.exports = async (hook) => {
  const me = get_chara_talk(0),
    chara_talk = new CharaTalk(46),
    love = era.get('love:46');
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      //意识到自己恋情的${chara_talk.name}打算约训练员出来野餐
      await print_event_name(`一叶代表请求！`, chara_talk);
      await era.printAndWait(
        `休息日的某天，当${me.actual_name}打开训练室时，那是一个晴朗的天气。`,
      );
      await chara_talk.say_and_wait(`训练员${me.get_adult_sex_title()}♪`);
      await era.printAndWait(
        `意外的，${chara_talk.name}比${me.actual_name}来得要早。`,
      );
      await chara_talk.say_and_wait(`这么好的天气，一起去野餐吧♪`);
      await era.printAndWait(`天气吗？确实是个适合野餐的好天气。`);
      era.printButton(`不过好像材料不够啊`, 1);
      await era.input();
      await era.printAndWait(`就算是野餐的话提前通知一下也好啊。`);
      await chara_talk.say_and_wait(`锵锵♪`);
      await era.printAndWait(`像是魔术师一样，拉开了用桌布包裹着的野餐盒。`);
      await chara_talk.say_and_wait(`已经全部都准备好了！`);
      await era.printAndWait(`飞鹰子似乎很期待的样子。`);
      await chara_talk.say_and_wait(
        `所以，训练员${me.get_adult_sex_title()}，可以和飞鹰子一起出发吗？`,
      );
      await era.printAndWait(`答案当然是。`);
      era.printButton(`我也很高兴。`, 1);
      await era.input();
      await chara_talk.say_and_wait(`太好了⭐`);
      await era.printAndWait(
        `轻轻关上训练室，在${chara_talk.name}的引导之下走出了特雷森。`,
      );
      era.drawLine({ content: '过了一段时间' });
      await chara_talk.say_and_wait(`准备好了！`);
      await era.printAndWait(`来到了附近的一处公园。`);
      era.printButton(`草坪上前来野餐的游客真多啊。`, 1);
      await era.input();
      await era.printAndWait(`在休息处的草坪上，到处都是铺上餐桌布的游客。`);
      await chara_talk.say_and_wait(`毕竟今天的天气很适合野餐嘛♪`);
      await me.say_and_wait(`飞鹰子很期待野餐呢。`);
      await chara_talk.say_and_wait(`因为飞鹰子一直期待着能够两个人一起野餐。`);
      await me.say_and_wait(
        `嗯，没有和荣进闪耀${chara_talk.sex}们一起野餐过吗？`,
      );
      await era.printAndWait(`从篮子里取出食物的${chara_talk.name}动作一僵。`);
      await chara_talk.say_and_wait(
        `不，不一样哦？和闪耀${
          chara_talk.sex
        }们野餐是朋友性质的，和训练员${me.get_adult_sex_title()}之间则是`,
      );
      await me.say_and_wait(`我和${chara_talk.sex}们不一样吗？`);
      await chara_talk.say_and_wait(
        `那......那个......哦，对了！是训练员与${chara_talk.get_uma_sex_title()}之间的羁绊！是羁绊哦！`,
      );
      await era.printAndWait(`拼命掩饰的飞鹰子显得额外可爱。`);
      await me.say_and_wait(`哦，原 来 如 此？`);
      await chara_talk.say_and_wait(
        `诶？训练员${me.get_adult_sex_title()}不要捉弄飞鹰子啦！`,
      );
      await chara_talk.say_and_wait(
        `这样的训练员${me.get_adult_sex_title()}最讨厌了！`,
      );
      await me.say_and_wait(`飞鹰子原来讨厌我吗？`);
      await chara_talk.say_and_wait(`不对！这是两回事！`);
      await me.say_and_wait(`我好伤心，所以这块肉是我的了！`);
      await era.printAndWait(
        `${me.actual_name}突然从飞鹰子的便当里夹走了一块肉。`,
      );
      await chara_talk.say_and_wait(
        `训练员${me.get_adult_sex_title()}坏心眼！`,
      );
      await chara_talk.say_and_wait(`那么飞鹰子也要回敬！`);
      await era.printAndWait(
        `从你的便当里夹走了两份寿司的${chara_talk.name}露出了得意的表情。`,
      );
      await chara_talk.say_and_wait(
        `哼哼♪这下训练员${me.get_adult_sex_title()}知道飞鹰子的厉害了吧！`,
      );
      era.printButton(`开什么玩笑，现在正是气氛高涨的时候！`, 1);
      await era.input();
      await era.printAndWait(
        `一瞬间做好了决斗准备的${me.actual_name}瞬间处于兴奋状态，瞄准了飞鹰子手中的便当！`,
      );
      await chara_talk.say_and_wait(`堵上偶像之名！飞鹰子绝不会输！`);
      await era.printAndWait(`两人之间的战斗（？）吸引了周围游人的纷纷侧目。`);
      await era.printAndWait(`最终`);
      era.printButton(
        `咕！人类还是战胜不了${chara_talk.get_uma_sex_title()}吗？`,
        1,
      );
      await era.input();
      await era.printAndWait(`以${me.actual_name}的完败告终。`);
      await chara_talk.say_and_wait(`这场对局是飞鹰子的胜利！`);
      await chara_talk.say_and_wait(
        `诶?这样是不是互相投喂对方的便当啊？`,
        true,
      );
      await era.printAndWait(`突然意识到这点飞鹰子刷一下脸变得通红。`);
      await chara_talk.say_and_wait(`不！不对！这样子还太早了啦！`);
      await chara_talk.say_and_wait(`训练员${me.get_adult_sex_title()}真H！`);
      await era.printAndWait(
        `不知为何突然跑开的飞鹰子留下了一脸懵逼的你以及一片狼藉的战场。`,
      );
      await me.say_and_wait(`今天的天空像琉璃一样漂亮啊。`);
      await era.printAndWait(
        `突然被天空中的白云吸引着的你似乎忘了某个${chara_talk.get_uma_sex_title()}的身影。`,
      );
      await era.printAndWait(`今天真是个好天气。`);
      await sys_love_uma_in_event(46);
    } else if (love === 74) {
      //希翼着训练员能听到自己心声的${chara_talk.name}暗自期待着
      await print_event_name(`二叶代表希望⭐`, chara_talk);
      await chara_talk.print_and_wait(
        `训练员${me.get_adult_sex_title()}比想象之中还要迟钝呢`,
      );
      await chara_talk.print_and_wait(
        `明明已经那么明显的暗示了，为什么他的眼神还是那么无动于衷呢？`,
      );
      await chara_talk.print_and_wait(
        `不！不能放弃，赌上我作为顶级偶像的荣誉，一定要让这个木头粉丝一号开窍！`,
      );
      era.drawLine();
      await era.printAndWait(`又是一个下雨的休息日。`);
      await chara_talk.say_and_wait(`欸——明明今天应该是晴天才对的啊。`);
      await me.say_and_wait(
        `嘛，毕竟天气预报也不是准确的，只能说是遇到小概率事件了。`,
      );
      await era.printAndWait(
        `因为下雨导致的场地湿滑，飞鹰子的街头演出也泡汤了。`,
      );
      await era.printAndWait(
        `似乎是对这场演出很重视的样子，提前了两个星期开始排练的舞蹈似乎也没排上用场。`,
      );
      await chara_talk.say_and_wait(`唔——真不甘心。`);
      await era.printAndWait(
        `盯着窗外的${chara_talk.name}看着越来越大的雨势没精打采的甩着尾巴。`,
      );
      await me.say_and_wait(
        `不过，飞鹰子也可以往好的方面想想看嘛，虽然下雨天失去了在户外交流的权力。`,
      );
      await me.say_and_wait(`但是，说不定在室内的话也能遇到好事情发生呢！`);
      await chara_talk.say_and_wait(
        `就算训练员${me.get_adult_sex_title()}这么说的话......对啊！`,
      );
      await era.printAndWait(`刚才还耷拉着的耳朵一瞬间就恢复了状态。`);
      await chara_talk.say_and_wait(`不如就在训练室里表演吧！`);
      await chara_talk.say_and_wait(
        `训练员${me.get_adult_sex_title()}等我一下♪`,
      );
      await era.printAndWait(`一想到什么就决定去行动也是飞鹰子的特点。`);
      await me.say_and_wait(`不过，窗外的雨吗？`);
      await era.printAndWait(
        `如同摇摆不定的树木一样，${me.actual_name}的内心也开始动摇了。`,
      );
      await chara_talk.say_and_wait(`我回来了♪`);
      await era.printAndWait(
        `换上了决胜服的${chara_talk.name}回到了训练室中。`,
      );
      await me.say_and_wait(`开始期待接下来的舞蹈了。`);
      await chara_talk.say_and_wait(
        `为了粉丝们的大家，飞鹰子可是排练了好久呦♪`,
      );
      await me.say_and_wait(`哦哦哦！飞鹰子！飞鹰子！`);
      await era.printAndWait(`如同街头演出时一模一样。`);
      await chara_talk.say_and_wait(`那么，飞鹰子开始唱了♪`);
      era.drawLine();
      await chara_talk.say_and_wait(`~~~♪谢谢大家！`);
      era.printButton(`飞鹰子最喜欢你了！`, 1);
      era.printButton(`......`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await chara_talk.say_and_wait(
          `嗯嗯，能够收到粉丝们的感谢，飞鹰子也很高兴呦！`,
        );
        await chara_talk.say_and_wait(`欸？好像忘了要干什么了？`, true);
        await chara_talk.say_and_wait(
          `作为偶像可不能让粉丝们干站着，先不管了！`,
          true,
        );
        await chara_talk.say_and_wait(`那么，接下来，一，二！`);
        era.printButton(`飞鹰子！`, 1);
        await era.input();
        await era.printAndWait(`动人的歌声再次响彻在了训练室。`);
        era.set('cflag:46:爱慕暂拒', 74);
      } else {
        await me.say_and_wait(`飞鹰子比想象之中还要可爱啊`);
        await chara_talk.say_and_wait(`......?`);
        await chara_talk.say_and_wait(
          `训练员${me.get_adult_sex_title()}什么时候变成笨蛋了？飞鹰子一直都很可爱呦？`,
        );
        await me.say_and_wait(`不，我说的是飞鹰子作为少女的部分。`);
        await me.say_and_wait(
          `处于多愁善感的年纪，天真浪漫的简直像是艺术品。`,
          true,
        );
        await era.printAndWait(`飞鹰子的脸慢慢红了起来。`);
        await chara_talk.say_and_wait(
          `训练员${me.get_adult_sex_title()}，变态！色狼！H！`,
        );
        await chara_talk.say_and_wait(`再也不理你了！`);
        await era.printAndWait(
          `夺门而出的${chara_talk.name}甚至没有给你反应的时间就离开了训练室。`,
        );
        await me.say_and_wait(`啊，这下产生误会了。`);
        await era.printAndWait(`少女的心情似乎正如外面的大雨一样。`);
        await me.say_and_wait(`不过这雨似乎下的额外的大啊。`);
        await me.say_and_wait(`......飞鹰子`);
        await era.printAndWait(`而作为训练员的${me.actual_name}，最终决定。`);
        era.printButton(`只能追上去了！`, 1);
        era.printButton(`......还是先打电话吧？`, 2);
        const ret2 = await era.input();
        if (ret2 === 1) {
          await chara_talk.say_and_wait(`如果飞鹰子逃跑的话？`);
          await me.say_and_wait(`就只能追上去了！`);
          await era.printAndWait(
            `朝夕共处的你当然知道${chara_talk.name}最有可能出现的地方。`,
          );
          await me.say_and_wait(`......为什么不在这里？`);
          await era.printAndWait(`河岸边没有看到${chara_talk.sex}的身影`);
          await era.printAndWait(`洋甘菊丛在涨潮的河水中几乎被全部淹没。`);
          await me.say_and_wait(`......飞鹰子，你在哪里？`);
          await era.printAndWait(`洋甘菊丛在涨潮的河水中几乎被全部淹没。`);
          await chara_talk.say_and_wait(
            `......如果是训练员${me.get_adult_sex_title()}的话，说不定可以实现我的梦想。`,
          );
          await me.say_and_wait(`......没错！一定在那里！`);
          await era.printAndWait(
            `直觉像闪电般突然给予了${me.actual_name}方向。`,
          );
          await era.printAndWait(
            `一刻思考的时间也不存在，${me.actual_name}立刻朝着那边奔跑。`,
          );
          era.drawLine({ content: '天台' });
          await era.printAndWait(
            `仿佛像是矗立在雨水之中的雕像一样，${chara_talk.name}一动也不动。`,
          );
          await me.say_and_wait(`${chara_talk.name}！`);
          await chara_talk.say_and_wait(
            `......训练员${me.get_adult_sex_title()}请不要在过来了。`,
          );
          await era.printAndWait(
            `像是意识到了什么一样，试图远离你的${chara_talk.name}慢慢向围栏退去。`,
          );
          await chara_talk.say_and_wait(`请不要再靠近飞鹰子了！`);
          await era.printAndWait(
            `向前逼近的${me.actual_name}与一步一步向后退去的飞鹰子。`,
          );
          await chara_talk.say_and_wait(
            `飞鹰子......飞鹰子急了的话也会踢训练员${me.get_adult_sex_title()}的哦！`,
          );
          await era.printAndWait(
            `${
              me.actual_name
            }心中明白，人类是不可能战胜${chara_talk.get_uma_sex_title()}的。`,
          );
          await era.printAndWait(`但是，此时此刻，唯一能做的就是。`);
          await chara_talk.say_and_wait(`......唔！`);
          await era.printAndWait(
            `紧紧抱住湿透了的${chara_talk.name}，强硬的将嘴唇贴在一起。`,
          );
          await chara_talk.say_and_wait(`......`);
          await era.printAndWait(
            `意料之外的，${chara_talk.name}没有强烈的抗拒。`,
          );
          await me.say_and_wait(
            `对不起，我现在才明白${chara_talk.name}的感受。`,
          );
          await me.say_and_wait(`早就应该明白的，那么多的暗示。`);
          await me.say_and_wait(
            `我是个懦弱的人，不敢幻想着存在一条希望的道路。`,
          );
          await me.say_and_wait(
            `所以，给${chara_talk.name}造成了这么多的伤害，对不起。`,
          );
          await me.say_and_wait(`但是，只有此时此刻，我希望`);
          await me.say_and_wait(`真真切切的希望`);
          await me.say_and_wait(`${chara_talk.name}，你可以和我交往吗？`);
          await era.printAndWait(
            `紧紧盯着${chara_talk.name}的双眼，迫使着${chara_talk.name}得出答案。`,
          );
          await chara_talk.say_and_wait(`......`);
          await chara_talk.say_and_wait(
            `......训练员${me.get_adult_sex_title()}真是坏心眼呢。`,
          );
          await chara_talk.say_and_wait(`回答的话，不是只有一个了吗？`);
          await era.printAndWait(
            [chara_talk.get_colored_name(), `「最喜欢${me.actual_name}了！」`],
            {
              align: 'center',
              color: chara_talk.color,
              fontSize: '1.375rem',
            },
          );
          await me.say_and_wait(`有多喜欢！`);
          await era.printAndWait(
            [chara_talk.get_colored_name(), `「有这么喜欢❤」`],
            {
              align: 'center',
              color: chara_talk.color,
              fontSize: '1.875rem',
            },
          );
          await era.printAndWait(
            `在雨中像笨蛋情侣一样互相告白的两人，终于朝着恋人的方向发展了。`,
          );
          await sys_love_uma_in_event(46);
        } else {
          await era.printAndWait(
            `之后得知了飞鹰子平安回到宿舍时的消息让你松了一口气。`,
          );
          era.set('cflag:46:爱慕暂拒', 74);
        }
      }
    } else if (love === 89) {
      await print_event_name(`三叶代表爱情❤`, chara_talk);
      await chara_talk.say_and_wait(`女仆${chara_talk.name}参上⭐`);
      await chara_talk.say_and_wait(
        `训练员${me.get_adult_sex_title()}觉得飞鹰子这身打扮怎么样？`,
      );
      await era.printAndWait(
        `换上了可爱风女仆装的${chara_talk.name}穿上了吊带袜。`,
      );
      await me.say_and_wait(`飞鹰子穿起来真合适啊。`);
      await chara_talk.say_and_wait(
        `现在站在这里的是${
          chara_talk.name
        }哦，训练员${me.get_adult_sex_title()}♪`,
      );
      await me.say_and_wait(
        `一如既往将${chara_talk.name}与飞鹰子分的很清楚啊。`,
        true,
      );
      await era.printAndWait(
        `${chara_talk.name}顿了一下，做出了女仆的标准行礼姿势。`,
      );
      await chara_talk.say_and_wait(
        `感谢主人大人一直以来的关照，作为女仆的${chara_talk.name}虽然还只是新手，但也会尽全力服侍主人大人的。`,
      );
      await era.printAndWait(`哦哦，这么快就进入状态了吗？`);
      await me.say_and_wait(
        `辛苦了${chara_talk.name}，可以把今天的日程表拿过来吗？`,
      );
      await chara_talk.say_and_wait(`是，主人大人。`);
      await era.printAndWait(
        `从架子上取下存放资料的${chara_talk.name}将文件递到了你的手上。`,
      );
      await me.say_and_wait(`非常感谢。`);
      await chara_talk.say_and_wait(
        `欸嘿嘿⭐主人大人再多夸奖一下${chara_talk.name}吧♪`,
      );
      await me.say_and_wait(`糟糕！有点过于可爱了`, true);
      await me.say_and_wait(`辛苦了，接下来请在沙发上休息吧`);
      await chara_talk.say_and_wait(`谨遵指示♪`);
      await era.printAndWait(
        `将这种莫名升起的奇怪感觉压下去后，强迫自己将注意力集中到资料上去。`,
      );
      era.drawLine();
      await chara_talk.say_and_wait(`真的不需要飞鹰子在旁边帮忙吗？`);
      await era.printAndWait(`不知何时凑过来的小脑袋与你对视着。`);
      await me.say_and_wait(`该死！现在还不是时候。`, true);
      await me.say_and_wait(`不，飞鹰子好好坐在那里就可以了。`);
      era.drawLine();
      await chara_talk.say_and_wait(`主人大人工作辛苦了♪`);
      await era.printAndWait(
        `将泡好的红茶端到了办公桌上的${chara_talk.name}带着期待的神情看着${me.actual_name}。`,
      );
      await me.say_and_wait(`非常感谢。`);
      await era.printAndWait(`轻抿一口茶水之后，意外的感受到了甘甜的味道。`);
      era.printButton(`很好喝哦`, 1);
      await era.input();
      await chara_talk.say_and_wait(`真的吗！飞鹰子的努力终于有回报了♪`);
      await me.say_and_wait(`里面加了什么吗。`);
      await chara_talk.say_and_wait(`柠檬、冰糖还有红茶叶♪`);
      await me.say_and_wait(`飞鹰子也坐下来一起喝吧？`);
      await chara_talk.say_and_wait(`盯————`);
      await era.printAndWait(`鼓起的小嘴额外的可爱。`);
      await me.say_and_wait(
        `咳！作为主人破例给予女仆${chara_talk.name}与我一起品尝红茶的权力。`,
      );
      await chara_talk.say_and_wait(
        `能得到主人大人的宠爱是${chara_talk.name}的荣幸！`,
      );
      await era.printAndWait(
        `坐下来一起品尝的${chara_talk.name}一副享受的样子。`,
      );
      await me.say_and_wait(`接下来怎么cosplay来着？`, true);
      await era.printAndWait(
        `有些心虚的多喝了几口，从余光偷偷打量着${chara_talk.name}。`,
      );
      await era.printAndWait(
        `紧紧盯着${me.actual_name}的${chara_talk.name}露出了可爱的笑脸，放在身前的红茶依然冒着滚烫的气息。`,
      );
      await era.printAndWait(`在微妙的感觉之间，时间一点一点流逝着。`);
      era.drawLine();
      await me.say_and_wait(
        `呼——上午的工作差不多结束了。一起去餐厅吧，${chara_talk.name}。`,
      );
      await chara_talk.say_and_wait(`是，主人大人！`);
      await era.printAndWait(`前往餐厅的路上似乎有很多的视线盯着你们。`);
      await me.say_and_wait(`？`, true);
      await era.printAndWait(
        `备感疑惑的你下意识看向了身边的${chara_talk.name}。`,
      );
      await chara_talk.say_and_wait(`⭐`);
      await era.printAndWait(`身穿女仆装的${chara_talk.name}带着笑容看着你。`);
      await me.say_and_wait(`什么惩罚游戏。`, true);
      await era.printAndWait(
        `在纠结要不要让${chara_talk.sex}换回去的时候走进了餐厅。`,
      );
      await chara_talk.say_and_wait(`主人大人想要吃什么呢？`);
      await me.say_and_wait(`跟昨天一样`);
      await era.printAndWait(`下意识说出口了。`);
      await chara_talk.say_and_wait(`那么${chara_talk.name}现在就去准备♪`);
      await era.printAndWait(
        `啪嗒啪嗒走向了窗口排队的${chara_talk.name}在一众校服之间显得额外显眼。`,
      );
      await me.say_and_wait(`世界啊毁灭吧，为啥这么多看着我的人。`, true);
      await me.say_and_wait(`今天的天气也是那种即将要下雨的样子啊。`, true);
      await era.printAndWait(`灰蒙蒙的天气意外让${me.actual_name}感到了愉悦。`);
      await chara_talk.say_and_wait(`久等了训练员${me.get_adult_sex_title()}♪`);
      await era.printAndWait(
        `将两人的午餐端在了桌子上，${chara_talk.name}带着期待的目光看着你。`,
      );
      await me.say_and_wait(`辛苦了飞鹰子。`);
      await chara_talk.say_and_wait(`唔——`);
      await era.printAndWait(
        `轻轻抚摸着${chara_talk.name}的脑袋，后者的不满很快就转变为了享受的表情。`,
      );
      await chara_talk.say_and_wait(`既然这样的话，就让飞鹰子来喂你吧！`);
      await era.printAndWait(
        `${chara_talk.name}将筷子伸进你的餐盘之中，夹了一块肉放到你的嘴边。`,
      );
      await chara_talk.say_and_wait(`啊~~~`);
      await era.printAndWait(
        `筷子碰到口腔之中的异物感很快被满满的幸福所替代。`,
      );
      era.printButton(`接下来换我来喂${chara_talk.name}吧`, 1);
      await era.input();
      await chara_talk.say_and_wait(`啊~~~嗯！`);
      await era.printAndWait(
        `回味着余韵的${chara_talk.name}眯起了眼睛享受着这一刻。`,
      );
      await chara_talk.say_and_wait(`现在轮到我了！`);
      era.drawLine();
      await me.say_and_wait(`非常感谢！`);
      await chara_talk.say_and_wait(`飞鹰子也是！`);
      await era.printAndWait(
        `在互相投喂期间，周围的人似乎都与你们隔开了一段距离。`,
      );
      await me.say_and_wait(`你们就是在嫉妒找不到这么可爱的恋人`, true);
      await era.printAndWait(`${me.actual_name}心中愤愤不平的想着。`);
      await me.say_and_wait(`接下来的话，做什么好呢？`);
      await chara_talk.say_and_wait(
        `比起这个的话，训练员${me.get_adult_sex_title()}嘴角边的酱汁没有擦干净！`,
      );
      await era.printAndWait(
        `就这样，${chara_talk.name}快速贴近到了你的身旁，伸出了舌头擦得一干二净。`,
      );
      await chara_talk.say_and_wait(`多谢款待！`);
      await era.printAndWait(`正准备后退的${chara_talk.name}却被环住了腰肢。`);
      await me.say_and_wait(`飞鹰子嘴角边也有酱汁没舔干净哦？`);
      await chara_talk.say_and_wait(`欸~训练员${me.get_adult_sex_title()}❤`);
      await era.printAndWait(`再次品尝了${chara_talk.name}嘴角的美味后。`);
      await me.say_and_wait(`${chara_talk.name}。`);
      await chara_talk.say_and_wait(`${me.actual_name}❤`);
      await era.printAndWait(
        `就在餐厅之中旁若无人接吻的恋人享受着这段甜蜜时光。`,
      );
      await sys_love_uma_in_event(46);
    } else if (love === 99) {
      // 如愿已偿和训练员结婚的${chara_talk.name}感到了幸福
      await print_event_name(`四叶代表幸福♪`, chara_talk);
      era.printButton(`说起来还是有点紧张呢。`, 1);
      await era.input();
      await chara_talk.say_and_wait(`没关系的，毕竟飞鹰子现在也很紧张呦♪`);
      await era.printAndWait(`相恋的两人终于决定确定了结婚的日期。`);
      era.printButton(`当时在马推上宣布的时候我可是担心会被粉丝们报复呢。`, 1);
      await era.input();
      await era.printAndWait(
        `在马推上宣布了结婚的消息之后，虽然也有少数的粉丝表示无法接受，但大多数的粉丝还是送上了祝福。`,
      );
      await chara_talk.say_and_wait(`不会的，毕竟？`);
      era.printButton(
        `不过飞鹰子在我身边的话，总觉得有种什么困难都可以度过的安心感呢。`,
        1,
      );
      await era.input();
      await me.say_and_wait(
        `所以，能遇到${chara_talk.name}，是我一生之中最幸福的时刻了。`,
      );
      await chara_talk.say_and_wait(
        `事到如今说这种奇怪的话，可是会让飞鹰子困惑的呦？`,
      );
      await me.say_and_wait(`抱歉，不过我会永远陪伴在飞鹰子身边的。`);
      await chara_talk.say_and_wait(
        `这样的话，接下来的日子里也要把飞鹰子放在最重要的地方哦？`,
      );
      await me.say_and_wait(
        `嗯，直到老到两个人都动不了，弥留之际也会想起今天的日子。`,
      );
      await chara_talk.say_and_wait(`飞鹰子也是。`);
      await era.printAndWait(`紧紧握住双手的二人发誓将永远记得今天的誓言。`);
      await me.say_and_wait(`抱歉气氛太沉重了，换个话题吧。`);
      era.printButton(`飞鹰子喜欢什么种类的婚纱？`, 1);
      await era.input();
      await chara_talk.say_and_wait(`训练员喜欢什么种类的婚纱呢？`);
      await era.printAndWait(`话题被抛回来了。`);
      await me.say_and_wait(`让我想想看。`);
      era.printButton(`心型领的婚纱甜美中带着性感suki`, 1);
      era.printButton(`抹胸性感优雅还可以露出锁骨suki`, 2);
      era.printButton(`不如还是宫廷风加超大拖尾的好看`, 3);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await chara_talk.say_and_wait(`飞鹰子对这种太过大胆的服饰可是NG的哦？`);
        await era.printAndWait(`从手掌传来的压力越来越大。`);
        await me.say_and_wait(`对，对不起，非常抱歉！`);
      } else if (ret1 === 2) {
        await chara_talk.say_and_wait(`要不先去试试看吧？`);
        await me.say_and_wait(`好。`);
        await chara_talk.say_and_wait(`......要不还是换一套吧⭐`);
        await me.say_and_wait(`难道是胸部太小穿不上吗？`, true);
        await era.printAndWait(
          `失礼的话没有说出来，只是用鼓励的眼神看向了飞鹰子。`,
        );
      } else {
        await chara_talk.say_and_wait(`唔，飞鹰子的气质似乎不太适合的样子呢。`);
      }
      era.printButton(`再看看其他种类的吧`, 1);
      await era.input();
      await chara_talk.say_and_wait(`嗯，这套怎么样？`);
      await era.printAndWait(
        `换上了泡泡袖婚纱的飞鹰子得意的在你面前转了一圈。`,
      );
      await me.say_and_wait(`像天使一样可爱。`);
      await chara_talk.say_and_wait(
        `啊，说起来的话训练员${me.get_adult_sex_title()}选好了西装吗？`,
      );
      await me.say_and_wait(`嗯，已经选好了。`);
      await chara_talk.say_and_wait(`时间还有剩的话先在附近逛逛吧！`);
      await chara_talk.say_and_wait(
        `像这样和训练员${me.get_adult_sex_title()}一起度过的时间可真幸福呢！`,
      );
      await me.say_and_wait(`说起来的话，飞鹰子接下来的打算是？`);
      await chara_talk.say_and_wait(
        `飞鹰子接下来打算以泥地偶像的身份作为前辈在赛场上激励着作为后辈的${chara_talk.get_uma_sex_title()}们！`,
      );
      await chara_talk.say_and_wait(
        `飞鹰子接下来打算以泥地偶像的身份作为前辈在赛场上激励着作为后辈的${chara_talk.get_uma_sex_title()}们！`,
      );
      await chara_talk.say_and_wait(
        `虽然这样的话可能也会很辛苦，不过只要训练员${me.get_adult_sex_title()}在身边的话，不论什么困难都可以度过的！`,
      );
      await chara_talk.say_and_wait(`而且，飞鹰子比起今天更期待着明天！`);
      await me.say_and_wait(`我也是！`);
      await era.printAndWait(`之后两人在周围的公园附近享受着约会的乐趣。`);
      era.drawLine({ content: '到了黄昏' });
      await chara_talk.say_and_wait(`飞鹰子差不多该回去了呦！`);
      await era.printAndWait(
        `依依不舍的将牵着的手分开的${chara_talk.name}带着通红的脸颊看着你。`,
      );
      await me.say_and_wait(`那么，回去之前的话。`);
      await era.printAndWait(`在黄昏之际两人幸福的接吻在了一起。`);
      await chara_talk.say_and_wait(`那么，这下飞鹰子真的要回去了呦！`);
      await me.say_and_wait(`明天的话一定是个洋溢着幸福气息的日子。`);
      await chara_talk.say_and_wait(`飞鹰子也这么认为。`);
      await era.printAndWait(`在黄昏之际两人幸福的接吻在了一起。`);
      await chara_talk.say_and_wait(`飞鹰子开始期待着明天的到来了呢⭐`);
      await chara_talk.say_and_wait(
        `训练员${me.get_adult_sex_title()}，明天见⭐`,
      );
      era.drawLine({ content: '第二天' });
      await era.printAndWait(
        `预想之中因为过度紧张而失眠的情况没有发生，${me.actual_name}睡得比平时还要深沉。`,
      );
      await era.printAndWait(
        `在迷迷糊糊之中被闹钟吵醒的后迅速换上了衣服之后走向了教堂。`,
      );
      await me.say_and_wait(`提前一个小时过来会不会有些早了？`);
      await era.printAndWait(`不如说时间刚刚好，在司仪的引导下走向了准备室。`);
      await era.printAndWait(
        `教堂之中坐满了前来见证的${chara_talk.get_uma_sex_title()}们。`,
      );
      era.printButton(`稍微有些紧张啊`, 1);
      await era.input();
      await era.printAndWait(`乖乖地在座位上等着化妆。`);
      await chara_talk.say_and_wait(`训练员${me.get_adult_sex_title()}⭐`);
      await me.say_and_wait(`欸？飞鹰子你怎么在这里？`);
      await chara_talk.say_and_wait(
        `因为想要早点看到训练员${me.get_adult_sex_title()}的脸！`,
      );
      await chara_talk.say_and_wait(
        `一想到训练员${me.get_adult_sex_title()}的温柔的笑容，飞鹰子的心就跳的好快。`,
      );
      await chara_talk.say_and_wait(
        `然后，突然的失落感就出来了，如果训练员${me.get_adult_sex_title()}不在这里的话。`,
      );
      await chara_talk.say_and_wait(`飞鹰子又该怎么办呢？`);
      await chara_talk.say_and_wait(`等待着等待着，飞鹰子的心就越来越不安。`);
      await chara_talk.say_and_wait(
        `想要早点看见训练员${me.get_adult_sex_title()}的模样！想要早点被那双温柔的手臂抱住！`,
      );
      await chara_talk.say_and_wait(`所以，飞鹰子已经等不及了！`);
      await era.printAndWait(
        `面对着越来越激动的${chara_talk.name}，${me.actual_name}温柔的抚摸着${chara_talk.sex}的小脑袋。`,
      );
      await me.say_and_wait(`放心，我就在这里，永远也不会离开你。`);
      await era.printAndWait(
        `慢慢平静下来的${chara_talk.name}终于安心下来了，看向了${me.actual_name}。`,
      );
      await era.printAndWait(`女化妆师「抱歉请问有没有看到......」`);
      await era.printAndWait(
        `女化妆师「${chara_talk.name}小姐！请赶快过来，马上就要开始了！」`,
      );
      await me.say_and_wait(
        `接下来的话，我会一直陪在你身边的，所以，请不要紧张。`,
      );
      await chara_talk.say_and_wait(
        `嗯！训练员${me.get_adult_sex_title()}，待会见♪`,
      );
      await era.printAndWait(
        `轻轻提起婚纱的${chara_talk.name}回到了自己的准备室。`,
      );
      await me.say_and_wait(`${chara_talk.name}`, true);
      await era.printAndWait(
        `脑海之中浮现出了刚刚跑过来的${chara_talk.name}可爱的样子。`,
      );
      era.drawLine();
      await era.printAndWait(`点燃同心烛之后，`);
      await era.printAndWait(
        `在三女神的见证之下，${me.actual_name}与${chara_talk.name}走进了教堂。`,
      );
      await era.printAndWait(
        `神父「在三女神的旨意下我将见证这场神圣的婚姻。」`,
      );
      await era.printAndWait(
        `神父「${chara_talk.get_uma_sex_title()}是三女神引导来自异界的灵魂赋予身为母亲的祝福。」`,
      );
      await era.printAndWait(
        `神父「在三女神的祝福下美丽又强大，而且热爱奔跑的${chara_talk.get_uma_sex_title()}诞生了。」`,
      );
      await era.printAndWait(
        `神父「三女神希望人类和${chara_talk.get_uma_sex_title()}能够一生一世、一心一意的结合在一起。」`,
      );
      await era.printAndWait(
        `神父「诞下的子女也会受到来自三女神之间的祝福，是不可抛弃，必须抚养长大。」`,
      );
      await era.printAndWait(
        `神父「那么，${me.actual_name}，你愿意${chara_talk.name}成为你的妻子，作为朋友和伴侣生活在一起吗？」`,
      );
      await era.printAndWait(
        `神父「你爱${chara_talk.sex}尊重${chara_talk.sex}吗？你愿意与${chara_talk.sex}平等、共同分享快乐，无论痛苦、胜利还是在困惑中？」`,
      );
      era.printButton(`我愿意。`, 1);
      await era.input();
      era.printButton(`选你${chara_talk.name}，成为我的妻子。`, 1);
      await era.input();
      era.printButton(
        `从今日起，拥有你、坚守你，无论好与坏、富足贫穷、有病无病都要爱你、珍惜你直到死神将你我分离。`,
        1,
      );
      await era.input();
      era.printButton(`遵循三女神的旨意，我承诺对你的爱和我对你的忠诚。`, 1);
      await era.input();
      await era.printAndWait(
        `神父「那么，${chara_talk.name}，你愿意${me.actual_name}成为你的丈夫，作为朋友和伴侣生活在一起吗？」`,
      );
      await era.printAndWait(
        `神父「你爱他尊重他吗？你愿意与他平等、共同分享快乐，无论痛苦、胜利还是在困惑中？」`,
      );
      await chara_talk.say_and_wait(`我愿意。`);
      await chara_talk.say_and_wait(`选你${me.actual_name}，成为我的丈夫。`);
      await chara_talk.say_and_wait(
        `从今日起，拥有你、坚守你，无论好与坏、富足贫穷、有病无病都要爱你、珍惜你直到死神将你我分离。`,
      );
      await era.printAndWait(
        `神父「结婚戒指象征着永恒，象征着两颗拥有无尽的爱的心与灵的永远的结合。现在将你的爱和你殷切的渴望你们的心与灵永远结合的愿望作为礼物送给${chara_talk.sex}。」`,
      );
      await era.printAndWait(`神父「你可以给你的新娘戴上这枚结婚戒指了。」`);
      await era.printAndWait(
        `得到许可之后，小心翼翼将戒指从戒指盒之中取出，将戒指戴上了${chara_talk.name}的无名指。`,
      );
      era.printButton(`给${chara_talk.name}戴上戒指`, 1);
      await era.input();
      await era.printAndWait(
        `紧紧盯着左手无名指的${chara_talk.name}眼角流下了幸福的眼泪。`,
      );
      await era.printAndWait(
        `虽然依然存在着些许对未来的恐惧与迷茫，但此刻的${chara_talk.name}无疑是最幸福的状态。`,
      );
      await era.printAndWait(
        `神父「同样以你的爱和你殷切的渴望你们的心与灵永远结合的愿望作为礼物送给他。」`,
      );
      await era.printAndWait(`神父「你可以给你的新郎戴上这枚结婚戒指了。」`);
      await era.printAndWait(
        `同样的，${chara_talk.name}从戒指盒中取出另一只戒指，戴在了你的手上。`,
      );
      await era.printAndWait(`而${me.actual_name}的想法则是`);
      era.printButton(`能够遇到${chara_talk.name}是我一生中最大的荣幸`, 1);
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
      await era.printAndWait(
        `环抱着花束的${chara_talk.name}露出了最幸福的笑容。`,
      );
      await sys_love_uma_in_event(46);
    }
  }
};
