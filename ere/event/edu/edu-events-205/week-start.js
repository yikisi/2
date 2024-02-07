const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const HookArg = require('#/data/event/hook-arg');
const { race_infos, race_enum } = require('#/data/race/race-const');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const me = get_chara_talk(0),
    montjeu = get_chara_talk(204),
    vp = get_chara_talk(205);
  let temp,
    wait_flag = false;
  switch (event_object?.arg) {
    case 47 + 24:
      await print_event_name('翱翔于蓝天之上', vp);
      await era.printAndWait([
        vp.name,
        ' 在过年后，于春天稍过的五月，和出道赛相同，大胜1600米的 ',
        race_infos[race_enum.prix_prb].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '在本人强烈希望的支持下，',
        vp.sex,
        '也参加了距离延长了500米左右的 ',
        race_infos[race_enum.prix_dia].get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        `出乎包括 ${me.name} 在内的众多观众的意料，在三冠级别的赛事上获得了压倒性的胜利。`,
      );
      await era.printAndWait(`${vp.name} 稳步地提高了自己的实力。`);
      await era.printAndWait(`而且在那个过程中，${me.name} 能教的东西减少了。`);
      await era.printAndWait(
        `听一而知十的 ${vp.name}，有时即使不教也能自然地得出正确的答案。`,
      );
      await era.printAndWait(
        '即使是资深训练员也不会注意到的事情自己就能改善。',
      );
      await era.printAndWait(
        `虽然也有被其他训练员指责为放任主义的时候，但 ${me.name} 认为对${vp.sex}来说这是正确的。`,
      );
      break;
    case 47 + 33:
      await print_event_name('家贫？走他乡', vp);
      await era.printAndWait(
        `然后夏天也快结束了，从海边的集训回来的 ${me.name} 又在写G1的参赛登记书。`,
      );
      await era.printAndWait(`称霸法国橡树明明还没多久，回过神来又是G1。`);
      await era.printAndWait(`接下来要参加的是${vp.sex}期待的凯旋门赏。`);
      await era.printAndWait(
        `如果只看已经展现出的如此强大的实力，${vp.name} 获得这一荣誉也是不足为奇的。`,
      );
      await era.printAndWait(
        `${me.name} 在参赛登记上写上签名，交给在训练员室的沙发上躺着的 ${vp.name}。`,
      );
      era.printButton(`「这是参赛登记表，请签名。」`, 1);
      await era.input();
      await vp.say_and_wait(`嗯。`);
      await era.printAndWait(
        `不知什么时候，${vp.sex}把自身带进了训练员室，就好像这里是${vp.sex}的私人房间。`,
      );
      await era.printAndWait(`但既然和${vp.sex}签了契约，所以也不能抱怨。`);
      await era.printAndWait(
        `比起那些，或许 ${me.name} 更希望${vp.sex}能想办法解决私生活的邋遢。`,
      );
      await era.printAndWait(
        `${vp.name} 从沙发上摔了下来，站起身，一边敲着递过来的圆珠笔，一边朝 ${me.name} 看了一眼。`,
      );
      await vp.say_and_wait(`这么说来，这个星期天有空吗？`);
      era.printButton(`「白天很闲。」（爱慕+1）`, 1);
      era.printButton(`「要追加练习吗？」（好感+5）`, 2);
      temp = await era.input();
      await era.printAndWait(`${vp.name} 一边签字一边沉思。`);
      await vp.say_and_wait(
        `我师傅说想见我。${vp.sex}说夏天集训结束后就可以，差不多回去一趟。`,
      );
      era.printButton(`「师傅？」`, 1);
      await era.input();
      await vp.say_and_wait(`是的，是教我跑步的人。`);
      await era.printAndWait(`培养${vp.sex}跑步的人物。`);
      await era.printAndWait(
        `如果能遇到从另一个角度看待完成度高的 ${vp.name} 的人物，也会成为很好地了解${vp.sex}的机会吧。`,
      );
      await era.printAndWait(
        `${me.name} 一边糊起装有参赛登记书的信封，一边答应了${vp.sex}的邀请。`,
      );
      await era.printAndWait(
        `既然如此，那还得准备伴手礼。${me.name} 把目光转向摆放着茶叶罐的架子。`,
      );
      await era.printAndWait(`秋天的收获期还很远，哪里都没有秋高气爽的茶叶。`);
      await era.printAndWait(`如果是这样的话，选有长收获期的阿萨姆比较好。`);
      era.println();
      wait_flag = sys_like_chara(
        205,
        0,
        5 * (temp === 2),
        true,
        Number(temp === 1),
      );
      break;
    case 95 + 25:
      await print_event_name('陌路。', vp);
      await era.printAndWait(`从凯旋门赏之后过了半年多。`);
      await era.printAndWait(
        `${vp.name} 的态度至今没有改变，对 ${me.name} 的指导坦率地接受。`,
      );
      await era.printAndWait(
        `虽然有很多方面的成长，但是对练习的动力也没有下降。`,
      );
      await era.printAndWait(
        `${vp.sex}的可爱被更多的人所认知，随着比赛的不断增加，${vp.sex}的粉丝也越来越多。`,
      );
      await era.printAndWait(
        `包括凯旋门赏上的战果在内，现在的${
          vp.sex
        }作为一个背负着法国的${vp.get_teen_sex_title()}而驰名。`,
      );
      await era.printAndWait(`但是，比赛的结果不会因此改变。`);
      await era.printAndWait(
        `${vp.name} 的私人物品比去年增加了很多的训练员室，在被暑气侵蚀的炎热中。`,
      );
      await era.printAndWait(
        `让人 ${me.name} 认为即使该让疲劳的身体休息也必须在这里的理由只有一个。`,
      );
      await era.printAndWait(`关于今年以来 ${vp.name} 的战绩。`);
      await era.printAndWait(
        `在眼前的电脑中，春天和初夏跑过的两场G1的影像不断循环。`,
      );
      await era.printAndWait(`距离也和去年一样，马场的情况也不是特别差。`);
      await era.printAndWait(`尽管如此，前者是第二名，后者是第三名。`);
      await era.printAndWait(
        `虽然 ${vp.name} 一直在练习，但在没有明确的解决方法的情况下，赌上连霸的下一个红宝锦标也留下了不安。`,
      );
      await era.printAndWait(
        `看着反复出现的影像和${vp.sex}的状况，已经过了几个小时了呢。`,
      );
      await era.printAndWait(
        `乌鸦的叫声使 ${me.name} 猛然惊醒。回头一看，窗外被晚霞染成了橙色。`,
      );
      await me.say_and_wait(`……糟了。`, true);
      await era.printAndWait(`今天应该有训练的计划。`);
      await era.printAndWait(
        `只顾自己而忘记${vp.sex}，慌忙拿出手机，收到了一个短信的通知。`,
      );
      await era.printAndWait(
        `在省略的通知中也清楚地知道了大约一个小时前来的那个是来自 ${vp.name} 的。`,
      );
      await vp.say_and_wait(`对不起，今天身体不舒服，请让我休息。`);
      await era.printAndWait(`训练的计划应该在那之前就有了。`);
      await era.printAndWait(`也就是说，经过一定的时间之后才发送了那个信息。`);
      await era.printAndWait(`${me.name} 一边抱着头，一边想给${vp.sex}回信`);
      await era.printAndWait(
        `但是，无论什么借口在这里都是徒劳的，还是只发送简洁的信息比较好。`,
      );
      era.printButton(`「明白了。」`, 1);
      await era.input();
      await era.printAndWait(
        `对于最近没有取得成果的 ${vp.name}，${me.name} 自己也充分理解不得不面对${vp.sex}了。`,
      );
      await era.printAndWait(
        `不知道原因的训练员，到底能胜任${vp.sex}的什么呢。`,
      );
      await era.printAndWait(`${me.name} 站起来才感觉到肚子饿了。`);
      await era.printAndWait(`（……红茶可以吗？）`);
      await era.printAndWait(`茶叶罐架子，轻飘飘的清爽香味刺激着大脑的深处。`);
      await era.printAndWait(
        `有一种大脑放空的顺畅，${me.name} 拿起了一个罐子。`,
      );
      await era.printAndWait(
        `但是里面几乎没有什么东西，只剩下残留的茶叶和留在罐子里残香，是柠檬香味的。`,
      );
      await era.printAndWait(`从那天以来，${vp.name} 就喜欢喝这个。`);
      await era.printAndWait(`偶尔来训练员室的话，泡这种茶的情况也很多。`);
      await era.printAndWait(`到了秋天，寒冷的日子也会增加。`);
      await era.printAndWait(`${me.name} 默默地合上罐子。`);
      await me.say_and_wait('独自去买点吧……', true);
      era.set('cflag:205:招募状态', -2);
      if (era.get('flag:当前互动角色') === 205) {
        era.set('flag:当前互动角色', 0);
      }
      new EventMarks(0).add(event_hooks.out_start);
      new EduEventMarks(205).add('tea');
      break;
    case 95 + 29:
      await print_event_name('Fly Away', vp);
      await era.printAndWait(
        `${me.name} 在训练员室等着约好见面的 ${vp.name}。`,
      );
      await era.printAndWait(
        `在${vp.sex}来之前的这段时间里，重新审视之前比赛的影像。`,
      );
      await era.printAndWait(
        `一个一个地按顺序排出 ${vp.name} 不顺利的理由。但是，还有其他问题。`,
      );
      await era.printAndWait(`${me.name} 重新审视了最近比赛的最终直线。`);
      await era.printAndWait(
        `${vp.name} 和以前一样，为了从第一集团脱出到前方而跃跃欲试。`,
      );
      await era.printAndWait(
        `但在这场比赛中没能摆脱包围网，得意的末脚毫无建树就结束了。`,
      );
      await era.printAndWait(
        `原来 ${vp.name} 就是个算不得高大的${vp.get_uma_sex_title()}。`,
      );
      await era.printAndWait(
        `而且，如果战略也被知晓的话，出现互相勾结不让${vp.sex}向前的集团也不奇怪。`,
      );
      await era.printAndWait(
        `最重要的是，${vp.sex}的做法很容易预料—— ${vp.name} 的跑动很像 ${montjeu.name}。`,
      );
      await era.printAndWait(
        `那个时候，训练员们致力于制定应对 ${montjeu.name} 的战略，在 ${vp.name} 身上就这样通用了。`,
      );
      await era.printAndWait(
        `${me.name} 需要让传奇的接班人赢下去，能给予什么？`,
      );
      await era.printAndWait(
        `在这样烦恼的过程中，约定的时间已经过了一个小时左右。但是 ${vp.name} 没有来的样子。`,
      );
      break;
    case 95 + 41:
      temp = [0, 0];
      await print_event_name('永远属于你', vp);
      await era.printAndWait(
        `那是一个假日的早晨，突然内线电话响了，${me.name} 走向门口。`,
      );
      await vp.say_and_wait(`Salut！训练员，我来了！`);
      era.print(`${me.name} 决定：`);
      era.printButton(`关上门`, 1);
      era.printButton(`……看错了吗？（好感-10，爱慕+1）`, 2);
      if ((await era.input()) === 2) {
        temp = [-10, 1];
      }
      await vp.say_and_wait(`喂喂，是我啊！`);
      era.printButton(`是来诈骗的吗？`, 1);
      era.printButton(`「请回吧，我没有钱！」（好感-10，爱慕+1）`, 2);
      if ((await era.input()) === 2) {
        temp[0] -= 10;
        temp[1]++;
      }
      await era.printAndWait(
        `${
          me.name
        } 想要关门，很遗憾人类不可能用腕力战胜${vp.get_uma_sex_title()}。`,
      );
      await era.printAndWait(`门被撬开了。`);
      await era.printAndWait(
        `${vp.get_child_sex_title()}一不小心在门口摔了个屁股蹲儿。`,
      );
      await era.printAndWait(
        `法国的公主、天才${vp.get_teen_sex_title()}，不过在 ${
          me.name
        } 眼前整理头发的样子让人忍俊不禁。`,
      );
      await era.printAndWait(
        `虽然服装依旧是短裤配T恤，但是个子比相遇时大了不少。`,
      );
      await era.printAndWait(
        `欧美人特有的皮肤似乎晶莹剔透，脸上留着些许稚气。`,
      );
      await era.printAndWait(
        `${me.name}们 在凯旋门赏上取得了胜利。从那以后，在电视和杂志上频繁登场，与品牌公司合作，一跃成为了红极一时的人。`,
      );
      await vp.say_and_wait(`我在哪里由我决定，训练员。`);
      await era.printAndWait(
        `视线和视线互相碰撞。关于主张，${vp.sex}有一定的道理。${vp.name} 脸上露出了自豪的表情。`,
      );
      await era.printAndWait(
        `${vp.name} 是世界最强的${vp.get_uma_sex_title()}，${
          me.name
        } 不会忘记那时的情景。`,
      );
      await era.printAndWait(`身穿蓝色调的胜负服冲过终点线的瞬间。`);
      await era.printAndWait(
        `那是一种兼具与中学生相称的坦率和正直，有着与年龄相称的不服输，充满活力的${vp.get_uma_sex_title()}的感觉。`,
      );
      await era.printAndWait(
        `那时的孩子长大了。个子变高，渐渐成了苗条的模特体型。`,
      );
      await era.printAndWait(
        `头发连发梢都打理的井井有条，简直像人偶一样齐整。`,
      );
      await era.printAndWait(`货真价实的美人。`);
      await vp.say_and_wait(`${sys_get_callname(205, 0)}。`);
      await vp.say_and_wait(`我不想回去。`);
      await vp.say_and_wait(`但只要你不愿意，我立刻就走。`);
      await era.printAndWait(
        `${vp.sex}的眼睛映出了 ${me.name} 糟糕的脸，不过本来就是刚起床。`,
      );
      era.print(`${me.name} 的答复是……`);
      era.printButton(`「……该干嘛干嘛去。」`, 1);
      era.printButton(`「出去走走吧。」（好感+15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      if ((await era.input()) === 1) {
        await vp.say_and_wait(`……明白了。`);
        await era.printAndWait(`这可能是标准答案，但或许不是最佳答案。`);
        await era.printAndWait(
          `${vp.name} 直截了当地应答，回到了自己走过来的路上。`,
        );
        await era.printAndWait(
          `按照 ${me.name} 说的回去，${vp.sex}的背影渐行渐远。`,
        );
        await era.printAndWait(
          `那个样子明明是 ${me.name} 想要的，但不知为什么却没能看下去。`,
        );
        await era.printAndWait(`为什么？不，理由很明显。`);
        await era.printAndWait(`——穿透身心的虚脱感慢慢地灼烧着内心。`);
        await era.printAndWait(`不用伸出手吗？不知从哪里传来了那样的话。`);
        await era.printAndWait(
          `想要伸出手，连那个 ${me.name} 都犹豫了。结果 ${me.name} 什么都没做。`,
        );
        await era.printAndWait(`然后 ${me.name} 像想要转移思绪一样回到家里。`);
        era.println();
        wait_flag = sys_like_chara(205, 0, temp[0] - 600, true, temp[1]);
      } else {
        era.drawLine();
        await era.printAndWait(`${vp.name} 依旧穿着短裤和黑色T恤，戴着墨镜。`);
        await era.printAndWait(
          `也许是因为不想被粉丝发现，特征性的栗毛被整理得太整齐，反倒吸引了周围的目光。`,
        );
        await era.printAndWait(
          `据说，${vp.get_uma_sex_title()}的美貌大部分由毛色决定。`,
        );
        await era.printAndWait(
          `当然，长相等也要考虑，但总的来说，毛发的比重更重。`,
        );
        await era.printAndWait(
          `${
            vp.name
          } 的头发和尾巴，和这一带的${vp.get_uma_sex_title()}完全不同。`,
        );
        await era.printAndWait(`变装，没有意义啊……`);
        await era.printAndWait(`${vp.name} 从车窗眺望外面的景色。`);
        await era.printAndWait(
          `摇摇晃晃地坐了一会儿，因换乘而下车，为了不在拥挤的人群中走散，${me.name} 牵着 ${vp.name} 的手带路。`,
        );
        await era.printAndWait(
          `突然回头一看，在人群中混迹的${vp.sex}，脸上浮现出像在泥中盛开的花朵一样美丽的笑容。`,
        );
        await era.printAndWait(`因为是休息日，所以行人很多。带家人的也很多。`);
        await era.printAndWait(
          `被妈妈牵着手的孩子东张西望地环视着周围。${vp.name} 对那个孩子有点目不转睛。`,
        );
        await era.printAndWait(
          `${vp.sex}用湿润的眼睛，认真地说出了好似恳求的话语。`,
        );
        await vp.say_and_wait(`再多一点，再多一点就好了。`);
        await era.printAndWait(
          `结果，${me.name}们 要去的地方只有赛马场，来看了大井赛马场的比赛。`,
        );
        await vp.say_and_wait(`果然是比赛啊！`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name} 有兴致地看着比赛。`);
        await era.printAndWait(`很有趣，现在进行的是G3。`);
        era.printButton(`「有点意外。」`, 1);
        await era.input();
        await vp.say_and_wait(`什么？`);
        era.printButton(
          `「凯旋门${vp.get_uma_sex_title()}对G3比赛感兴趣。」`,
          1,
        );
        await era.input();
        await vp.say_and_wait(`……也许是这样啊。`);
        await vp.say_and_wait(
          `如果你也是训练员的话应该知道，在${vp.sex}们看来，这也像凯旋门一样。`,
        );
        era.printButton(`「那不是说得太过分了吗？」`, 1);
        await era.input();
        await vp.say_and_wait(`……`);
        await era.printAndWait(`${vp.name} 的话，不知什么时候分量增加了。`);
        await era.printAndWait(`几年前的 ${me.name} 没有资格说${vp.sex}。`);
        await vp.say_and_wait(
          `对${vp.sex}们来说是大舞台，为此而调整，来到这里。赌上自己的灵魂。所以——`,
        );
        await me.say_and_wait('冲线了。', true);
        era.printButton(`「……是吗？」`, 1);
        await era.input();
        await era.printAndWait(
          `对 ${me.name} 来说，这是一场没有任何区别的G3比赛。`,
        );
        await era.printAndWait(
          `做了普通的准备，普通的努力，有一点闪光的地方。那样的比赛。`,
        );
        await era.printAndWait(
          `也许是因为 ${me.name} 站在训练员的立场上看了很多比赛，所以看漏了重要的东西。`,
        );
        await vp.say_and_wait(`……哈哈。`);
        await era.printAndWait(`干笑盈盈。`);
        await vp.say_and_wait(`……`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `赛马场很冷清。比赛已经结束了。但是，${me.name} 一点也起不来，弯着像灌了铅一样沉重的膝盖，坐在比赛场的观众席上。`,
        );
        await era.printAndWait(`风很冷。`);
        era.drawLine();
        await era.printAndWait(
          `到了深夜，${me.name} 和 ${vp.name} 走在东京的街道上。`,
        );
        await vp.say_and_wait(`……我想参加日本杯。`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `${vp.name} 接下来似乎要讲一个重要的故事，这点 ${me.name} 心知肚明。`,
        );
        await vp.say_and_wait(`我忘不了你了，训练员。`);
        await vp.say_and_wait(
          `国家、人种什么的，我不知道。但如果是训练员你的话，我觉得会很开心。`,
        );
        await era.printAndWait(`这是 ${me.name} 的罪状。`);
        await era.printAndWait(`感到胸口隐隐作痛，${me.name} 假装没事。`);
        await vp.say_and_wait(`我爱你。`);
        await vp.say_and_wait(`我一直爱你。`);
        await era.printAndWait(`话语很流畅。`);
        await era.printAndWait(
          `一定是反复练习了好几次。为了 ${me.name} 特地练习。`,
        );
        await era.printAndWait(`头脑一片空白。心悸，呼吸好像变粗了？`);
        await era.printAndWait(
          `每次被${vp.sex}展露心意的时候，${me.name} 的心也会被暴露出来。`,
        );
        await era.printAndWait(
          `就像抽丝剥茧一样，${vp.name} 的话就像一张一张地扯掉面纱，让 ${me.name} 的心也赤裸。`,
        );
        await era.printAndWait(`而 ${me.name} 感到了无可奈何的遗憾。`);
        await era.printAndWait(`${vp.name} 反复说了很多话。`);
        await vp.say_and_wait(
          `……呐，${
            me.actual_name
          }。如果我们不是训练员和${vp.get_uma_sex_title()}的话，我们能相遇吗？`,
        );
        era.printButton(`「……不会。」`, 1);
        await era.input();
        await vp.say_and_wait(`也是啊。`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `从 ${me.name}们 站的这个地方抬头，天上只有几颗一等星闪闪发光。`,
        );
        await era.printAndWait(`这是从市中心看到的廉价星空。`);
        await era.printAndWait(
          `出生在这低沉的星空下，恐怕也会在这里死去的 ${me.name} 和抱着满分星空般未来的${vp.sex}。`,
        );
        await era.printAndWait(`不平衡什么的很明显。`);
        await era.printAndWait(
          `${me.name} 告诉了眼看就要哭出来的 ${vp.name}。`,
        );
        await era.printAndWait(`夜风吹来，快日落了。`);
        await era.printAndWait(`${vp.name} 的眼睛和相遇的时候比没有什么变化。`);
        await era.printAndWait(
          `和至今为止回想过好几次的记忆中的${vp.sex}一样。`,
        );
        await era.printAndWait(
          `但是，也有改变的事情。${vp.sex}萌生了对比赛以外的兴趣。`,
        );
        await era.printAndWait(`时间会改变一切。`);
        await era.printAndWait(
          `${me.name} 和${vp.sex}不一样，只会拖${vp.sex}的后腿。`,
        );
        await era.printAndWait(
          `${me.name} 不想拖${vp.get_uma_sex_title()}的后腿。`,
        );
        await era.printAndWait(`所以——`);
        era.printButton(`「分手了。」`, 1);
        await era.input();
        await vp.say_and_wait(`嗯……！`);
        await me.say_and_wait(
          `不要再出现在我面前。如果不是工作的话，也不要来日本。消失吧。`,
        );
        await vp.say_and_wait(`为什么，为什么这么说！`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`记忆中的训练员很温柔，我一直在想——`);
        await me.say_and_wait(`那就错了。`);
        await vp.say_and_wait(`嗯……！`);
        await me.say_and_wait(
          `……马上就要到晚上了，睡了就要到早上了。这样的话就是明天了，再见——`,
        );
        await vp.say_and_wait(`等一下！`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`至少，至少心情…至少训练员的心情——`);
        era.printButton(`「不知道。」`, 1);
        await era.input();
        await vp.say_and_wait(`啊……！`);
        await era.printAndWait(`${me.name} 说出了适合最低等人生的话。`);
        await vp.say_and_wait(`骗子！`);
        await me.say_and_wait(`……`);
        await era.printAndWait(
          `${me.name} 听到了 ${vp.name} 从背后离去的脚步声。`,
        );
        await era.printAndWait(`${me.name} 晃晃悠悠地来到了东京赛马场。`);
        await era.printAndWait(
          `十月的赛马场很冷，${me.name} 感到周围的喧嚣在复苏，是行驶在道路上的车的声音和树叶摇曳的声音。`,
        );
        await era.printAndWait(`快到十一月了，日本杯临近。`);
        await era.printAndWait(
          `${me.name} 暂时站在那里，在秋天的赛马场一个人站着。`,
        );
        await era.printAndWait(`${me.name} 的旁边没有别人。`);
        await era.printAndWait(`这样就好了，所以——`);
        era.printButton(`「忘了吧……」`, 1);
        await era.input();
        await era.printAndWait(`——过了几分钟呢。`);
        await era.printAndWait(`天已经黑了，夜幕降临到东京赛马场。`);
        await era.printAndWait(`听广播好像马上就要到关门的时间了。`);
        await era.printAndWait(`心里似乎有一个洞。`);
        await era.printAndWait(
          `当 ${me.name} 将要离开时……出入口站着 ${vp.name}。`,
        );
        era.printButton(`「为什么你会在这里……」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.name} 用惊人的脚力向 ${me.name} 冲刺。${vp.sex}的头像枪一样扎进 ${me.name} 的腹部，肺彷佛被压碎了。`,
        );
        await era.printAndWait(`痛、相当痛。`);
        await era.printAndWait(`刺骨的痛感刺激着神经。`);
        await era.printAndWait(
          `${vp.name} 抱在 ${me.name} 的肚子上，${vp.sex}——`,
        );
        await era.printAndWait(`哭了。`);
        await era.printAndWait(
          `那蓝宝石般美丽的眼睛扭曲着，像要裂开一样皱眉。`,
        );
        await vp.say_and_wait(
          `训练员笨蛋！Stupide idiot.Pourquoi dis-tu des choses aussi horribles！（大笨蛋！为什么这么过分！）`,
        );
        era.printButton(`「等一下！我不知道你在说什么！——」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name} 就这样在 ${me.name} 的臂弯里哭。`);
        await era.printAndWait(
          `擅自扑上来，受到伤害的是 ${me.name}，${vp.sex}却在哭。`,
        );
        await era.printAndWait(`当然了，是 ${me.name} 伤了${vp.sex}的心。`);
        await era.printAndWait(
          `准备清场的工作人员来了。惊讶地盯着 ${me.name}们 看了一眼。`,
        );
        await era.printAndWait(`大概是被当成疯丫头和坏男人，情侣吵架吧。`);
        await era.printAndWait(`那个人马上转移视线，回到了自己的工作中。`);
        await era.printAndWait(
          `灯饰点缀着赛马场，在那样的地方 ${me.name}们 蹲在地上。`,
        );
        await vp.say_and_wait(
          `你以为我是抱着怎样的想法站在这里的！要来接我的话就赶紧来！`,
        );
        era.printButton(`「诶！？不是你埋伏我——」`, 1);
        await era.input();
        await vp.say_and_wait(`吵死了，吵死了！我不想听你狡辩，你这个笨蛋！`);
        era.printButton(`「诶欸欸？」`, 1);
        await era.input();
        await era.printAndWait(
          `${
            me.name
          } 感觉真的快要被${vp.get_uma_sex_title()}特有的怪力抱碎了，于是在 ${
            vp.name
          } 的背上轻拍。`,
        );
        await era.printAndWait(
          `明明说了“abandonne放弃”，${vp.name} 却一点也不想离开。痛哭的${vp.sex}，反倒增强了力量。`,
        );
        await era.printAndWait(`也许这就是自作自受吧…………但是肋骨真的要断了。`);
        await vp.say_and_wait(`怎么样？`);
        era.printButton(`「？」`, 1);
        await era.input();
        await vp.say_and_wait(`你爱我吗！？不爱我吗！？`);
        era.printButton(`「不是这样说的问题——」`, 1);
        await era.input();
        await vp.say_and_wait(`就是这样的问题！`);
        era.printButton(`「如果不爱你，我就不会这么困扰了。」`, 1);
        era.printButton(`「因为喜欢你，所以才困扰啊！」`, 2);
        await era.input();
        await era.printAndWait(`${vp.name} 就像一条得水的游鱼。`);
        await vp.say_and_wait(
          `那就快点举行婚礼吧！订婚，还要买戒指……‘师傅’一定也会祝福我们的！`,
        );
        await vp.say_and_wait(
          `在法国做的话是教会吧？在日本也可以，穿着雪白的衣服在寺庙前对爱发誓！`,
        );
        era.printButton(`「不是寺庙人家叫神社。」`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name} 为了阻止自嗨的 ${vp.name} 而抓住了${vp.sex}的肩膀。`,
        );
        await vp.say_and_wait(`好大胆…`);
        await vp.say_and_wait(`在外面什么的……但如果是你的话——`);
        era.printButton(`「别说奇怪的话了！我并没有说什么结婚的事！」`, 1);
        await era.input();
        await vp.say_and_wait(`也就是先成为情侣的意思吧，我很感动！`);
        await vp.say_and_wait(
          `周围的人也一定会理解并接受的！否则，孩子真的会很痛苦！`,
        );
        era.printButton(`「我又不是欧洲人。」`, 1);
        await era.input();
        await vp.say_and_wait(`人种那么重要！？`);
        era.printButton(`「很重要吧！？」`, 1);
        await era.input();
        await vp.say_and_wait(
          `我不是看了你的人种和容貌才爱上你的，而是爱上了你的心！`,
        );
        await vp.say_and_wait(
          `亚洲人？所以呢，怎么了？我会对吵吵嚷嚷的人大声喊‘吵死了’！谁都不会妨碍我们！`,
        );
        await vp.say_and_wait(`不要随便决定我的价值！`);
        await vp.say_and_wait(
          `我的价值是由我决定的，将来都是！请不要自恋！即使和你结婚，我也不会改变什么！如果有人说烦人的话，我就把他头拧下来！`,
        );
        era.printButton(`「这有点……」`, 1);
        era.printButton(`「不至于……」`, 2);
        await era.input();
        await era.printAndWait(
          `于是，虽然哭肿了的脸，尽管如此 ${vp.name} 也高贵地站了起来。`,
        );
        await era.printAndWait(
          `即使脱了妆，${vp.sex}还是很美。像是用神圣照亮夜晚的月亮。`,
        );
        await vp.say_and_wait(
          `我是天才${vp.get_uma_sex_title()}！大部分的事情都可以说是fermez-la！`,
        );
        era.printButton(`「我不想让你烦心。」（好感+10，爱慕+1）`, 1);
        era.printButton(`「你要明白……」`, 2);
        if ((await era.input()) === 1) {
          temp[0] += 10;
          temp[1]++;
        }
        await vp.say_and_wait(
          `不明白，完全不明白！如果你喜欢我的话，就让我开心吧！我说了要和你在一起！我说只有你才能让我幸福！`,
        );
        era.printButton(`「『能让我幸福的只有你』……这才是求婚吧！」`, 1);
        await era.input();
        await vp.say_and_wait(`之前不是！现在的才是求婚！`);
        era.printButton(`「莫名其妙！」`, 1);
        await era.input();
        await vp.say_and_wait(`我喜欢你到莫名其妙的程度！`);
        await era.printAndWait(
          `彼此的吼声在东京夜晚的一角回响。彼此都气喘吁吁，但没有移开视线。`,
        );
        await vp.say_and_wait(
          `我一直在心中的某个地方追着你！我试过不去想你，但还是做不到！和训练员聊天的日子，那些记忆就像是被录下了一样循环播放着！`,
        );
        era.print(`${me.name} 也是……`);
        era.printButton(`「一直想着你。」`, 1);
        era.printButton(`「一直忘不了……」`, 2);
        await era.input();
        await vp.say_and_wait(`那么！`);
        await era.printAndWait(
          `${vp.name} 从膝盖上靠近 ${me.name}，抓住 ${me.name} 的胸口。`,
        );
        await era.printAndWait(`被美女吓到的话会害怕，这好像是真的。`);
        await era.printAndWait(
          `${vp.sex}的法裔端正容貌逼近到了近距离。${vp.name} 对 ${me.name} 开口。${vp.sex}的怒吼在大井赛马场前响起。`,
        );
        await vp.say_and_wait(`你这个笨蛋。`);
        era.printButton(`「我不是笨蛋」`, 1);
        await era.input();
        await vp.say_and_wait(
          `不，笨蛋！就算弱小也没关系……如果没出息的话就携手支持就好了。你没有放弃责任，我更不能放弃。`,
        );
        await vp.say_and_wait(
          `训练员和${vp.get_uma_sex_title()}的关系是对等的。我们会全力奔跑，训练员则会引导。就像是缺一不可的夫妇一样。`,
        );
        await vp.say_and_wait(`所以……咕、嘶，我们才会互相吸引，不是吗？`);
        await era.printAndWait(
          `${me.name} 把比自己小十岁的${vp.get_child_sex_title()}子弄哭了。`,
        );
        await era.printAndWait(
          `夜晚有点冷。因为白天很热，所以 ${me.name}们 穿得很少。`,
        );
        await era.printAndWait(
          `尽管如此，两个人聚在一起，像虫子一样用体温温暖彼此的话，就不会冷了。`,
        );
        await era.printAndWait(
          `${vp.name} 依然露出忧心忡忡的表情，${me.name} 抚摸着${vp.sex}的脑袋。`,
        );
        era.printButton(`「有点冷？」`, 1);
        await era.input();
        await vp.say_and_wait(`……嗯。`);
        era.printButton(`「先去你住过的酒店吧。这样下去会感冒的。」`, 1);
        await era.input();
        await vp.say_and_wait(`好的。`);
        await era.printAndWait(`${vp.sex}按照 ${me.name} 说的一起走了。`);
        await era.printAndWait(`灯饰的光辉照耀着 ${me.name}们 的背影。`);
        era.drawLine();
        era.printButton(`「${vp.name}，这是怎么回事……！？」`, 1);
        await era.input();
        await vp.say_and_wait(
          `带${vp.get_child_sex_title()}子进房间，不觉得只有一件事要做吗？`,
        );
        await era.printAndWait(
          `勉强遮住皮肤的布被解开，${vp.name} 那双海蓝的眼睛发出奇怪的光。`,
        );
        await vp.say_and_wait(
          `rb:Bonne soirée（祝你有个美好的夜晚），rb:ma cheri（我心爱的人）。`,
        );
        era.println();
        await era.printAndWait(
          `本来只是打算在房间里冷静一下，等着的时候，出现了穿着浴巾的 ${vp.name}。`,
        );
        await era.printAndWait(`未成年淫行上演。`);
        await era.printAndWait(
          `总之，完全失去了法律这一后盾的 ${me.name} 不可能阻止世界最强的${vp.sex}，就这样完全上垒了。`,
        );
        await era.printAndWait(`${me.name} 和担当在夜晚玩得很开心。`);
        await vp.say_and_wait(`早上好，亲爱的`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `旁边是一个裸体的 ${vp.name}，${me.name} 对这种状况感到安心。`,
        );
        era.printButton(`「……早上好，我的公主。」`, 1);
        await era.input();
        await vp.say_and_wait(`咦，你承认了吗？`);
        await vp.say_and_wait(`……这样啊，果然从一开始就这样做就好了。`);
        era.printButton(`「不要说可怕的话。」`, 1);
        await era.input();
        await era.printAndWait(
          `从窗户射入的朝阳照射下的 ${vp.name} 像画上的圣母一样美丽。`,
        );
        await era.printAndWait(
          `被纯白的面纱包着，一边趴着一边看着 ${me.name} 的${vp.sex}，只隐藏着突出的部分，让背鲁莽地露出。`,
        );
        await era.printAndWait(
          `${me.name} 冲动地抚摸着像艺术品一样的 ${vp.name} 的脑袋。${vp.sex}那流丽的发丝穿过手指。`,
        );
        await vp.say_and_wait(`……♪`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(`看着${vp.sex}微笑的脸，${me.name} 下定决心。`);
        await vp.say_and_wait(
          `我最喜欢你了。到现在为止，我一直在想你。我梦想着这样说话。`,
        );
        era.printButton(`「我也是，${vp.name}」`, 1);
        await era.input();
        await era.printAndWait(`微笑着的${vp.sex}，果然很漂亮。`);
        await vp.say_and_wait(`我爱你，训练员。`);
        era.printButton(`「啊，我爱你，只属于我的 ${vp.name}。」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.sex}那可爱地握着 ${me.name} 的手的样子，在任何人看来都是圣女。`,
        );
        await era.printAndWait(`${me.name} 眼前的爱马美颜生彩，笑靥生辉。`);
        era.println();
        sys_like_chara(205, 0, temp[0] + 15, true, temp[1]) &&
          (await era.waitAnyKey());
      }
      break;
    case 143 + 9:
      temp = [era.get('love:205'), era.get('relation:205:0')];
      era.set('love:205', 0);
      era.set('relation:205:0', 0);
      await require('#/event/edu/edu-common')(
        205,
        new HookArg(event_hooks.week_start),
      );
      era.set('love:205', temp[0]);
      era.set('relation:205:0', temp[1]);
      if (temp[0] >= 50) {
        era.drawLine();
        await print_event_name(`${vp.sex}即是成真的美梦`, vp);
        await era.printAndWait(`${me.name} 听到了什么声音。`);
        await era.printAndWait(
          `从黑暗中睁开眼睛，眼前是陌生（完全不）的天花板。`,
        );
        await era.printAndWait(`脑子里软绵绵的，无法理解状况。`);
        await era.printAndWait(`总觉得好像身处和往常完全不同的地方。`);
        await era.printAndWait(
          `用模糊的头呆呆地凝视着虚空，轻飘飘的香味扑鼻而来。`,
        );
        await era.printAndWait(
          `紧接着，一个${vp.get_teen_sex_title()}突然映入眼帘。`,
        );
        await era.printAndWait(`柔软的栗色头发，清澈的苍蓝双眸。`);
        await era.printAndWait(
          `然后，${vp.sex}的脸上浮现出宛如注视婴儿般慈爱的笑容。`,
        );
        await vp.say_and_wait(`Bonjour，睡得舒服吗？`);
        await era.printAndWait(`像抚摸一样温柔的声色会引起微微的睡意。`);
        await era.printAndWait(
          `看着对方的脸，${me.name} 终于理解了状况，于是想要让意识苏醒。`,
        );
        await era.printAndWait(`但是，眼睛被温暖的手掌轻轻地盖住了。`);
        await vp.say_and_wait(`再稍微睡一会儿？现在还早呢。`);
        era.printButton(`「……不，该起床了。」`, 1);
        era.printButton(`「我也想享受和你一起的早晨。」（爱慕+1）`, 2);
        temp = await era.input();
        await vp.say_and_wait(`呵呵，这样啊，我很高兴。`);
        await era.printAndWait(`手掌做成的眼罩被取下，光线射入视野。`);
        await era.printAndWait(
          `站起身来，${vp.name} 坐在 ${me.name} 的寝床上微笑着。`,
        );
        await era.printAndWait(
          `虽然稍微考虑了一下感觉有什么遗憾、但或许这就足够了，首先要做的是必须做的事情。`,
        );
        era.printButton(`「早上好，${vp.name}。」`, 1);
        await era.input();
        await vp.say_and_wait(`是的，${me.actual_name}！`);
        await era.printAndWait(`${vp.name} 像唱歌一样回话。`);
        era.drawLine();
        await era.printAndWait(
          `自凯旋门赏以来，${me.name}们 一直以海外比赛为主。`,
        );
        await era.printAndWait(
          `准确地说，因为表现出了比平时更好的实力，结果决定以海外的比赛为主战场进行比赛。`,
        );
        await era.printAndWait(
          `想办法赶走粘着的 ${vp.name}，换完衣服，去客厅。`,
        );
        await era.printAndWait(
          `桌上摆满了佳肴，${vp.name} 在等着 ${me.name}。`,
        );
        await era.printAndWait(`说实话很吃惊，${vp.name} 的料理也很拿手。`);
        await era.printAndWait(`坐在座位上眺望各种料理。`);
        await era.printAndWait(
          `用金枪鱼、凤尾鱼、橄榄等制作的分量十足的沙拉。`,
        );
        await era.printAndWait(`看起来很暖人的浓汤散发着美妙的香气。`);
        await era.printAndWait(
          `每一个都是令人眼花缭乱的菜品，但只有一个特别引人注目。`,
        );
        await era.printAndWait(`加入了厚厚的火腿和大量奶酪的热三明治。`);
        await era.printAndWait(
          `告诉 ${vp.name} “我开动了”以后，大口大口地吃了起来。`,
        );
        await era.printAndWait(
          `浓厚的奶酪酱汁加上火腿的风味，就和高档餐厅里吃的味道一样。`,
        );
        await era.printAndWait(`——味道完全一样，现在想起来了。`);
        era.printButton(`「……这个，你买来的吗？」`, 1);
        await era.input();
        await vp.say_and_wait(`是我做的哦？`);
        await vp.say_and_wait(`因为你看起来很爱吃，所以我研究了一下！`);
        await era.printAndWait(`……差点忘了这孩子是个天才。`);
        await era.printAndWait(
          `但是，能复制到这种程度，还是得夸句不愧是${vp.sex}。`,
        );
        await vp.say_and_wait(`……${sys_get_callname(205, 0)} 该给我奖励吧？`);
        await era.printAndWait(
          `一瞬间，带着微笑的 ${vp.name} 在下一刻向我开口了。`,
        );
        await era.printAndWait(
          `${me.name} 看到闪闪发光的鲜红的口内和舌头，不知为什么心脏骤停。`,
        );
        await era.printAndWait(`总觉得好像在看不该看的东西，有一种背德感。`);
        await vp.say_and_wait(`啊……♪`);
        await era.printAndWait(
          `就这样，${vp.name} 一边转动着耳朵和尾巴，一边期待着看 ${me.name}。`,
        );
        await era.printAndWait(`……就是说要做啊，那个。`);
        await era.printAndWait(
          `虽然犹豫了一下，但不确信如果不做的话${vp.sex}就会一直张开嘴。`,
        );
        await era.printAndWait(
          `总之，把三明治撕成小碎块，慢慢地放入${vp.sex}的嘴里。`,
        );
        await vp.say_and_wait(`嗯……`);
        await era.printAndWait(
          `${vp.name} 闭上嘴唇，把 ${me.name} 的指尖微微卷入。`,
        );
        await era.printAndWait(`栩栩如生的触感和温暖从指尖传到大脑。`);
        await era.printAndWait(
          `然后${vp.sex}一边想着什么，一边扭动着嘴，一口一口地咽下去。`,
        );
        await vp.say_and_wait(`……嗯。`);
        await era.printAndWait(`闭上眼睛，再张开嘴。`);
        await era.printAndWait(`没想到要求再来一次。`);
        await era.printAndWait(
          `背德感、保护欲和内心深处的刺激，${me.name} 再次撕下三明治。`,
        );
        await era.printAndWait(
          `两次、三次、四次，放进${vp.sex}的嘴里，指尖渐渐湿润。`,
        );
        await era.printAndWait(
          `不久，盘子上的法式三明治消失了，立刻宣告结束。`,
        );
        await vp.say_and_wait(`啊，连你的份儿都吃了。`);
        era.printButton(`「没关系，没关系的，对吧！？」`, 1);
        await era.input();
        await vp.say_and_wait(`是的♪谢谢♪`);
        await era.printAndWait(
          `${vp.name} 用笑容满面的表情道谢，然后用舌头舔了一圈嘴唇。`,
        );
        await era.printAndWait(`这让 ${me.name} 不得不意识到湿润的手指。`);
        await era.printAndWait(`${vp.name} 一边看着那个，一边小声嘟囔着。`);
        await vp.say_and_wait(`……好像会上瘾。`);
        await era.printAndWait(`假装没听到吧。`);
        era.drawLine();
        await vp.say_and_wait(`……又工作到晚上。`);
        await era.printAndWait(`两肩上放着温暖的手，从上面传来了声音。`);
        await era.printAndWait(
          `抬头一看，洗完澡后残留着热气的 ${vp.name}，用严肃的目光俯视着 ${me.name}。`,
        );
        await era.printAndWait(`那么，时间已经到了，回房间吧。`);
        era.printButton(
          `「今天就睡觉了，晚安 ${sys_get_callname(0, 205)}。」`,
          1,
        );
        await era.input();
        await vp.say_and_wait(`啊……`);
        await era.printAndWait(`衣服被拉了一下。`);
        await era.printAndWait(
          `回头一看，${vp.name} 好像很寂寞，抓住 ${me.name} 衣服的下摆。`,
        );
        await era.printAndWait(`因为那个样子让 ${me.name} 想起了某些小动物。`);
        era.printButton(`「果然不能马上就睡着，要不要吹个晚风？」`, 1);
        await era.input();
        await vp.say_and_wait(`……好！`);
        await era.printAndWait(`${vp.name} 眼睛闪闪发光，摇起尾巴来。`);
        await era.printAndWait(
          `这个反应也见怪不怪了啊，${me.name} 一边这样想着一边牵着${vp.sex}的手。`,
        );
        await era.printAndWait(
          `跑得很漂亮，很美，对任何人来说是都是理想的奔跑。`,
        );
        await era.printAndWait(`拥有圣女般纯洁的${vp.sex}。`);
        await era.printAndWait(`有着女神般高贵的${vp.sex}。`);
        await era.printAndWait(`略有些懒散，意外地容易亲近的${vp.sex}。`);
        await era.printAndWait(`而且，比起别人，容易寂寞的${vp.sex}。`);
        era.printButton(`「只要你在我身边——」`, 1);
        await era.input();
        await era.printAndWait(`简洁地，好好地传达。`);
        await era.printAndWait(`用与 ${vp.name} 相称的话语。`);
        era.printButton(`「无论多少次，我都会将爱传递给你。」`, 1);
        await era.input();
        await era.printAndWait(`好像说了什么荒唐的话。`);
        await era.printAndWait(
          `虽然 ${me.name} 注意到冷汗一股一股地流，但语言已经出发了。`,
        );
        await era.printAndWait(
          `${vp.name} 把耳朵和尾巴立到极限，眼睛睁得满满的，满脸通红。`,
        );
        await era.printAndWait(
          `不久，像是惊呆了一样，像是放弃了一样，发出巨大的叹息。`,
        );
        await vp.say_and_wait(`……你也意外的贪得无厌啊，说了很随便的话。`);
        era.printButton(`「不知道吗，训练员都是这样的。」`, 1);
        await era.input();
        await era.printAndWait(
          `每个人都想把负责的${vp.get_uma_sex_title()}变成英雄。`,
        );
        await era.printAndWait(`拿到桂冠的第二天，就已经在寻觅新的奖杯了。`);
        await era.printAndWait(
          `训练员这种生物实际上是比${vp.get_uma_sex_title()}更贪婪的生物。`,
        );
        await era.printAndWait(
          `听到这句话，${vp.name} 发出比刚才更大的叹气，伸出双手。`,
        );
        await era.printAndWait(
          `轻轻地把手放在 ${me.name} 的两颊上，目不转睛地盯着 ${me.name}。`,
        );
        await vp.say_and_wait(`没办法，我知道了，我会站在你身边的。`);
        await era.printAndWait(`这样说的话，${vp.name} 会更加靠近脸。`);
        await era.printAndWait(
          `眼前是${vp.sex}端正的容貌，甜甜的香味在能让肌肤感受到热气的距离。`,
        );
        await era.printAndWait(`然后就这样，${vp.sex}的目光骤然锐利。`);
        await vp.say_and_wait(`但是请不要误会，我不会满足你的理想。`);
        await era.printAndWait(
          `这是对 ${me.name} 的宣战，就这样，苍白的眼神射穿了 ${me.name}。`,
        );
        await vp.say_and_wait(
          `谁也不让，我会一直站在你面前，总有一天会让你只看着我的。`,
        );
        await era.printAndWait(`说完之后，${vp.name} 莞尔一笑。`);
        await era.printAndWait(
          `那是${vp.sex}本来就有的天真烂漫的，能让周围也变得快乐的笑容。`,
        );
        await era.printAndWait(
          `${vp.sex}脸上重新展露笑颜后，像发出“啪”的一声眨了眨眼。`,
        );
        await vp.say_and_wait(`——我的甜心。`);
        era.println();
        wait_flag = temp === 2 && sys_love_uma(205, 1);
      }
  }
  wait_flag && (await era.waitAnyKey());
};
