const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (tachyon, me, callname, extra_flag) => {
    await print_event_name('未知因素', tachyon);
    await say_by_passer_by_and_wait('解说', [
      tachyon.get_colored_name(),
      '！新一年的G1连战敲响了超光速的钟声！',
      tachyon.get_colored_name(),
      ' 漂亮的越过终点！',
    ]);
    era.println();
    await tachyon.print_and_wait('哦，赢了啊');
    await tachyon.print_and_wait([
      '虽然说来可能十分不尊重人，但这确实就是 ',
      tachyon.get_colored_name(),
      ' 的真实想法',
    ]);
    await tachyon.print_and_wait([
      '在这个赛场上，能够阻止 ',
      tachyon.get_colored_name(),
      ' 的就只有',
      tachyon.sex,
      '自己的伤病',
    ]);
    await tachyon.print_and_wait([
      '在已经摆脱伤病的现在，哪怕被称为自傲也无所谓，',
      tachyon.get_colored_name(),
      ' 无法输给任何人',
    ]);
    era.println();
    await tachyon.print_and_wait([tachyon.sex, '唯一在乎的，只有实验的结果']);
    await tachyon.print_and_wait('但是……');
    era.println();
    await tachyon.say_and_wait(
      '没有欢呼声……也是啊，这种临时抱佛脚的收买人心怎么可能有用……还是需要时间积累',
      true,
    );
    await tachyon.print_and_wait(
      '再说，就算有了欢呼声，对比赛也不可能有什么影响的吧',
    );
    await tachyon.print_and_wait('不然比赛只要看人气颁发名次不就好了');
    await tachyon.print_and_wait('比赛结束……那么，该去找豚鼠……');
    era.println();
    await say_by_passer_by_and_wait('观众A', '好厉害啊！');
    era.println();
    await tachyon.say_and_wait('…………？');
    await say_by_passer_by_and_wait('观众B', [
      '好快的跑法……那个就是 ',
      tachyon.get_colored_name(),
      ' 吗？',
    ]);
    await say_by_passer_by_and_wait(
      '观众C',
      '因为媒体的关系，原本以为是个问题儿童……就算真的是问题儿童，在赛场上就该是成绩论高下吧！',
    );
    await say_by_passer_by_and_wait('观众D', [
      '本来经典赛上的战绩就堪称逆天，这种',
      tachyon.get_uma_sex_title(),
      '到底为什么会在闪耀系列赛里乱杀啊，哪怕梦之杯来人都赢不过的啦！',
    ]);
    await say_by_passer_by_and_wait(
      '观众E',
      '从经典赛就一直在看了，但无论看几次果然还是太强了！',
    );
    era.println();
    await tachyon.say_and_wait('这是……', true);
    era.println();
    await tachyon.print_and_wait('仿佛定格了一般，在通过终点线一会后才响起的');
    await tachyon.print_and_wait('全场的欢呼声');
    await tachyon.print_and_wait('夸张，夸大，毫无根据的赞扬，荒谬至极的吹嘘');
    await tachyon.print_and_wait('……奇怪，是这场比赛有什么特别的吗？');
    era.println();
    await tachyon.say_and_wait(
      '不……一直都是如此，只是……一直都没注意到而已',
      true,
    );
    await tachyon.print_and_wait('担心双腿崩溃');
    await tachyon.print_and_wait('担心实验失败');
    await tachyon.print_and_wait('担心止步不前');
    await tachyon.print_and_wait('所以……不是不存在，只是没听见，因为不重要');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速子前辈好帅！',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'B', [
      '果然速子前辈才是最强的',
      tachyon.get_uma_sex_title(),
      '！',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'C',
      '速子前辈必胜！',
    );
    await tachyon.print_and_wait('实际上，一直存在');
    await tachyon.print_and_wait([
      '在皋月赏的时候，那个人一定喊过「超越光速吧！',
      tachyon.get_colored_name(),
      '！」',
    ]);
    await tachyon.print_and_wait([
      '在日本德比的时候，那个人一定喊过「让我看见',
      tachyon.get_uma_sex_title(),
      '的可能性吧！」',
    ]);
    await tachyon.print_and_wait([
      '在菊花赏的时候，那个人一定喊过「向我证明，',
      tachyon.get_uma_sex_title(),
      '的伤病是可以被超越的吧！」',
    ]);
    era.println();
    await tachyon.print_and_wait('然后……是大阪杯');
    await me.say_and_wait([
      tachyon.get_colored_name(),
      ' 的可能性，绝对不只三冠！',
    ]);
    era.println();
    await tachyon.print_and_wait('啊啊');
    await tachyon.print_and_wait('这次，终于听见了');
    era.println();
    await tachyon.print_and_wait([
      '原来，',
      tachyon.get_colored_name(),
      ' 一直都是被人爱着的',
    ]);
    await tachyon.print_and_wait('被粉丝，被后辈，被世界');
    await tachyon.print_and_wait('还有……观众席最前排');
    await tachyon.print_and_wait('明明没有在发光，却比谁都还要亮眼的那个人');
    era.println();
    await tachyon.print_and_wait('真是，这个笨蛋');
    await tachyon.print_and_wait('明明比赛的时候都喊得出那样的话来');
    await tachyon.print_and_wait('怎么面对面时，就只能说出那种蹩脚的夸奖了？');
    await tachyon.print_and_wait('要是我没听到的话怎么办');
    await tachyon.print_and_wait('这些支持不就白费了吗？');
    await tachyon.print_and_wait(
      '支持……原来不是为了被支持的人听见才喊出的吗？',
    );
    await tachyon.print_and_wait(
      '……那么，不为了被听见而喊出的，才是真正的支持吗？',
    );
    era.drawLine();
    await tachyon.say_and_wait(['我回来了……', callname]);
    era.printButton('「欢迎回来，速子，腿没有任何问题吧！」', 1);
    era.printButton('「今天跑的一样真的，太厉害了！」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '……原本感觉对支持的定义已经能够明确了，都怪你啊，又得重新调查了',
    );
    era.println();
    await me.say_and_wait('欸————为啥！？');
    era.println();
    await tachyon.say_and_wait(
      '作为惩罚……今天的药是干扰大脑高级认知判断能力的药……',
    );
    await tachyon.say_and_wait(
      '或者通俗一点来讲叫做吐真剂，喝下去之后好好聊聊今天比赛的看法吧',
    );
    era.println();
    await me.say_and_wait('欸—————！？');
    extra_flag.attr_change = [10];
  };

  handlers[race_enum.tenn_spr] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
    _,
    love,
  ) => {
    if (
      !edu_marks.plan_b ||
      sys_reg_race(25).curr.race !== race_enum.tenn_spr
    ) {
      return true;
    }
    const coffee = get_chara_talk(25);
    await print_event_name('わかります', tachyon);
    era.println();
    await era.printAndWait('啊啊，原来如此');
    era.println();
    await era.printAndWait(['天皇赏春']);
    await era.printAndWait('看着那两人在最终直线上的争斗');
    await era.printAndWait('总算，弄懂了');
    era.println();
    await era.printAndWait([
      '为什么当初明明知道要以 ',
      tachyon.get_colored_name(),
      ' 的成果做为基石也要支持 ',
      coffee.get_colored_name(),
    ]);
    await era.printAndWait([
      '为什么那天晚上却又为 ',
      tachyon.get_colored_name(),
      ' 的回答感到欣喜',
    ]);
    era.println();
    await era.printAndWait([
      '在看见那超越光速的身姿，以及如同漆黑的猎犬一般撕咬前者的跑法时，终于理解了',
    ]);
    await era.printAndWait(['早在第一次看见', tachyon.sex, '们跑步的模样时']);
    await era.printAndWait([
      '自己，就已经深深爱上',
      tachyon.sex,
      '们',
      era.get('love:25') >= 75 && love >= 75 ? '' : '的跑法',
      '了',
    ]);
    era.println();
    await era.printAndWait(['闪烁如光的', tachyon.sex]);
    await era.printAndWait(['漆黑如影的', coffee.sex]);
    await era.printAndWait(['最开始就是如此简单的事']);
    era.println();
    await era.printAndWait('只是像孩子一样稚气的愿望');
    await era.printAndWait('想要分出强弱……不，只是想要看同场的竞技');
    await era.printAndWait([
      '强还是弱那都不是重点，只是想看',
      tachyon.sex,
      '们奔跑的模样',
    ]);
    era.println();
    await era.printAndWait('希望终点前的这段直线可以永远不要结束');
    await era.printAndWait([
      '希望可以永远看着',
      tachyon.sex,
      '们在赛场上奔驰的这一幕',
    ]);
    await era.printAndWait(['不知不觉，', me.get_colored_name(), ' 流下泪来']);
    era.println();
    await era.printAndWait('是光，还是影');
    await era.printAndWait('是照亮一切的光使阴影无处遁形');
    await era.printAndWait('还是吞没一切的黑暗将光明噬尽');
    era.println();
    await say_by_passer_by_and_wait('解说', [
      '撕咬至最后一刻的大接战！',
      coffee.get_colored_name(),
      '！还是 ',
      tachyon.get_colored_name(),
      '！是超光速的逃脱还是摩天楼的逮捕！现在，冲过终点的是……！',
    ]);
    era.drawLine();
    if (extra_flag.rank === 1) {
      await tachyon.say_and_wait('………赢了……吗？');
    } else {
      await tachyon.say_and_wait('………输了……吗？');
    }
    era.println();
    await tachyon.print_and_wait('不可理喻');
    await tachyon.print_and_wait('毫无道理');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 的出赛，是为了让 ',
      coffee.get_colored_name(),
      ' 取得成功',
    ]);
    await tachyon.print_and_wait([
      '为了让',
      coffee.sex,
      '登上巅峰，在比赛中针对',
      coffee.sex,
      '最难受的点进行刺激，迫使',
      coffee.sex,
      '产生进步',
    ]);
    await tachyon.print_and_wait([
      '然后……不引人注目的退居幕后，让',
      tachyon.sex,
      '享受名为胜利的补偿',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait('结果');
      await say_by_passer_by_and_wait('解说', [
        '是 ',
        tachyon.get_colored_name(),
        '！超越光速，立于淀坡之上的盾之荣光归于 ',
        tachyon.get_colored_name(),
        '！',
      ]);
    } else {
      await tachyon.print_and_wait('明明应该是这样的，那……');
      era.println();
      await say_by_passer_by_and_wait('解说', [
        '是 ',
        coffee.get_colored_name(),
        '！将超光速吞没，立于淀坡之上的盾之荣光归于 ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait('为什么……此刻却感到如此的……不甘心！');
    }
    era.println();
    await tachyon.print_and_wait('一开始明明很正常的');
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      ' 的优势和劣势都在其稳定性',
    ]);
    await tachyon.print_and_wait([
      '由于极强的稳定，使得',
      tachyon.sex,
      '在最考验强度的长距离比赛中总能取得优势',
    ]);
    await tachyon.print_and_wait([
      '但也因为太过稳定，导致',
      tachyon.sex,
      '欠缺关键时的爆发力',
    ]);
    await tachyon.print_and_wait([
      '所以破坏了',
      tachyon.sex,
      '的舒适状态，这样才能刺激',
      tachyon.sex,
      '超越极限',
    ]);
    era.println();
    await tachyon.print_and_wait('结果，出乎意料的');
    await tachyon.print_and_wait([
      tachyon.sex,
      '不但找回了节奏，还更进一步的进化，完善了自己的跑法',
    ]);
    await tachyon.print_and_wait('到此，这场比赛的目的就应该已经结束了才对');
    await tachyon.print_and_wait('可是……');
    era.println();
    await tachyon.print_and_wait('原因不用想也知道');
    await tachyon.print_and_wait('那天晚上和后辈的对话是主要原因');
    await tachyon.print_and_wait(['但是……后辈', tachyon.sex, '也没做错什么']);
    await tachyon.print_and_wait(['有问题的，是 ', tachyon.get_colored_name()]);
    era.println();
    await tachyon.print_and_wait(
      '如果心中没有犹豫的话，那时候应该能准确回答出口的',
    );
    await tachyon.print_and_wait('不管是敷衍的话语，还是诚实回答');
    await tachyon.print_and_wait('只要心中没有疑惑，应该就能说出口的');
    era.println();
    await tachyon.say_and_wait('我……');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，说到底还是一名',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait('还是无法抗拒，奔跑和争胜的本能');
    await tachyon.print_and_wait([
      '明明关于',
      tachyon.get_uma_sex_title(),
      '的可能性还有很多其他的路径',
    ]);
    await tachyon.print_and_wait('没有必要执着于赛场的');
    await tachyon.print_and_wait([
      '却还是选择了 ',
      sys_get_colored_callname(32, 25),
      '，哪怕只能痛苦的看着他人奔跑的模样，也不选择其他道路的原因',
    ]);
    await tachyon.print_and_wait([
      '因为……',
      tachyon.get_colored_name(),
      '，是爱着跑步的啊',
    ]);
    era.println();
    await tachyon.print_and_wait('想到这里，忽然释怀了');
    await tachyon.print_and_wait('无论找多么冠冕堂皇的借口和理由来掩盖都一样');
    await tachyon.print_and_wait([
      '无论怎么努力，也无法挣脱',
      tachyon.get_uma_sex_title(),
      '的本能',
    ]);
    await tachyon.print_and_wait('……也不想挣脱');
    await tachyon.print_and_wait([
      '想要变成最快最强的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait('想要与敌手纠缠死斗到最后一刻');
    await tachyon.print_and_wait('想要……证明自己');
    era.println();
    await tachyon.print_and_wait([
      '……但是，这样的话，自己该怎么去面对',
      me.sex,
    ]);
    await tachyon.print_and_wait(
      '一直帮助着自己的，总在身边支持着自己的那个人',
    );
    await tachyon.print_and_wait(['该用什么面目去面对', me.sex]);
    await tachyon.print_and_wait(['……哪怕是', me.sex, '，一定也会生气的吧']);
    await tachyon.print_and_wait([
      '身为 ',
      tachyon.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 的专属训练员',
    ]);
    await tachyon.print_and_wait([
      '当初说好的，将比赛让给 ',
      sys_get_colored_callname(32, 25),
      '，自己专注于幕后',
    ]);
    era.println();
    await tachyon.print_and_wait('结果……');
    if (extra_flag.rank === 1) {
      await tachyon.print_and_wait('这个不受控的，不稳定的问题儿童');
      await tachyon.print_and_wait('凭着一时的热血上头，搞砸了一切');
    } else {
      await tachyon.print_and_wait([
        '现在却要告诉',
        me.sex,
        '，自己……还是想要继续跑步？',
      ]);
      await tachyon.print_and_wait('耍人也该有个限度吧');
    }
    era.println();
    await tachyon.print_and_wait('不知不觉');
    await tachyon.print_and_wait([tachyon.get_colored_name(), ' 逃离了赛场']);
    era.drawLine();
    await era.printAndWait([tachyon.get_colored_name(), ' 没有回到选手休息室']);
    await era.printAndWait(['整个赛场里也没有', tachyon.sex, '的踪影']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 担心的打电话回去找宿舍长确认消息，得到了 ',
      tachyon.get_colored_name(),
      ' 已经回到特雷森的消息才放下心来',
    ]);
    await era.printAndWait('……不，也不能说放下心来');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 究竟怎么了……为什么会自己跑回学园',
    ]);
    await era.printAndWait(['有机会找', tachyon.sex, '聊聊吧']);
    extra_flag.motivation_change = -1;
  };

  handlers[race_enum.takz_kin] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (era.get('cflag:32:育成回合计时') < 96) {
      return true;
    }
    if (edu_marks.plan_b) {
      if (sys_reg_race(25).curr.race !== race_enum.takz_kin) {
        return true;
      }
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('前往极限', tachyon);
      era.println();
      await tachyon.say_and_wait(['哈啊……哈啊……茶……', t_call_c, '……！']);
      era.println();
      await tachyon.print_and_wait('拼尽全力喊出的嘶吼');
      await tachyon.print_and_wait('在比赛中说话');
      await tachyon.print_and_wait(
        '这无论在实验的角度来看，又或者是竞赛的角度来看，都是极度不符合常理的行为',
      );
      await tachyon.print_and_wait([
        '但是，',
        tachyon.get_colored_name(),
        ' 还是喊出声了',
      ]);
      era.println();
      await tachyon.print_and_wait('在最终直线前，在最后的冲刺开始前');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 发出的，违背常理的宣言',
      ]);
      era.println();
      await tachyon.say_and_wait('要是能追上的话……就试试看啊！');
      era.println();
      await tachyon.print_and_wait(['跑在前方的 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait('对着紧紧撕咬在后的猎犬发出挑衅');
      era.drawLine();
      await coffee.say_and_wait('……无聊');
      await coffee.say_and_wait('你觉得做这种事能让任何人开心吗？');
      await coffee.say_and_wait(
        '不需要你让，我也会堂堂正正的超越你……然后，超越朋友',
      );
      era.println();
      await tachyon.print_and_wait(
        '比赛前的坦承错误，果不其然，被狠狠数落了一顿啊',
      );
      await tachyon.print_and_wait('不过……嘛，这样也轻松多了');
      await tachyon.print_and_wait([
        '要是像 ',
        callname,
        ' 那样全肯定反而才更让人担心',
      ]);
      await tachyon.print_and_wait('所以，今天可以毫无顾虑，用尽全力的跑了');
      era.println();
      await tachyon.print_and_wait('对对手的尊重');
      await tachyon.print_and_wait('对自己的渴望');
      await tachyon.print_and_wait('对支持者的回报');
      era.println();
      await tachyon.say_and_wait([
        '以此献上的，',
        tachyon.get_colored_name(),
        ' 于日本国内的最后一舞',
      ]);
      await say_by_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！还是 ',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！现在，两人冲线———————————！',
      ]);
      era.println();
      await tachyon.print_and_wait('谁赢了');
      await tachyon.print_and_wait('谁输了');
      await tachyon.print_and_wait('不，那些都无关紧要');
      era.println();
      await tachyon.print_and_wait('这样一切就，都结束了');
      await tachyon.print_and_wait([
        '今天的比赛，',
        tachyon.get_colored_name(),
        ' 跑出了自己的最佳',
      ]);
      await tachyon.print_and_wait('下场比赛，也已经在射程以内了');
      era.drawLine();
      era.printButton('「好强，好快！不管是茶座……还是速子都是……！」', 1);
      era.printButton('「能够成为你们的训练员……真是……太好了！」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '呵呵，忽然讲这么煽情的话，搞得像大结局一样，我们的比赛可还没结束呢，',
        callname,
      ]);
      era.println();
      await era.printAndWait('啊啊，是啊');
      era.println();
      await tachyon.say_and_wait('……记者会，差不多要开始了');
      era.println();
      await era.printAndWait([
        '上半年最强',
        tachyon.get_uma_sex_title(),
        '总决赛，这种比赛想也知道必然会聚集许多记者媒体',
      ]);
      era.print('就在这个舞台上，宣布今后的目标吧');
      era.printButton('「上吧，速子」', 1);
      era.printButton('「我永远站在你身后」', 2);
      await era.input();
      await tachyon.say_and_wait('……嗯，我上了');
      era.drawLine();
      await tachyon.say_and_wait([
        '如此这般，于是下场比赛，我的预定计划是，世界最高峰，凯旋门杯。以上有任何记者有问题吗？',
      ]);
      era.println();
      await era.printAndWait('鸦雀无声');
      await era.printAndWait([
        '哪怕是在记者会前便听说了今天 ',
        tachyon.get_colored_name(),
        ' 阵营将宣布重量级消息的记者',
      ]);
      await era.printAndWait('也不由得因这重磅消息而大吃一惊');
      era.println();
      await tachyon.say_and_wait('———如果没有问题的话，那么今天的采访到此……');
      era.println();
      await era.printAndWait(
        '直到这时，记者们才忽然如梦中醒，纷纷开始做出提问',
      );
      await era.printAndWait(
        '但看得出由于太过突然的展开，导致他们原本准备的问题全都派不上场，只能临时寻找话题',
      );
      await era.printAndWait([
        '而 ',
        tachyon.get_colored_name(),
        ' 也不慌不忙的进行回答',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        '记者A',
        '为什么如此突然做出决定，真的是深思熟虑下做出的出赛安排吗？',
      );
      await tachyon.say_and_wait(
        '这是我与训练员君相谈后做出的决定，是在几个月前就已经决定的，并不突然也不唐突，只是先前并没有通知媒体',
      );
      await say_by_passer_by_and_wait('记者B', [
        '请问 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '去年由于不明原因暂停出赛闪耀系列赛的原因是……？今年凯旋门杯应该不会……',
      ]);
      await tachyon.say_and_wait([
        '这方面无可奉告，但我可以做出保证，今年的凯旋门杯我必然会参赛',
      ]);
      await say_by_passer_by_and_wait('记者B', [
        '……那个，今天的比赛很精彩，请问 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '有没有什么想对对手 ',
        coffee.get_colored_name(),
        ' 说的话吗？',
      ]);
      await tachyon.say_and_wait(
        '嗯……也是啊，那么，『不管是你，还是你的朋友，我都会在凯旋门上一并超越』，就这样吧',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 身居幕后，望着记者会上如星光一般闪耀的',
        tachyon.sex,
      ]);
      await era.printAndWait('一度黯淡的光子，如今正绽放着最为闪耀的光芒');
    } else {
      if (extra_flag.rank !== 1) {
        return true;
      }
      await print_event_name('神话诞生', tachyon);
      await say_by_passer_by_and_wait('解说', [
        '称霸了上半年的总决赛，化身为神话的是 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 理所当然的第一个跨越了终点线',
      ]);
      await era.printAndWait('全场响起了响亮的掌声及欢呼');
      await era.printAndWait('空中彩纸飞舞，又是一次辉煌且精彩的比赛');
      era.println();
      await era.printAndWait('忽然，观众席发出惊呼，接着喧闹变得更为热络');
      await era.printAndWait([
        '那个比赛后总是轻描淡写草草挥手下场的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('现在却依然留在场上，大方的回应着粉丝们的欢呼声');
      await era.printAndWait('而这一举动也引发了更热闹的声援，声音响彻云霄');
      era.drawLine({ content: '下场后' });
      await tachyon.say_and_wait('……呵呵');
      era.printButton('「速子！」', 1);
      era.printButton('「今天也很精彩！」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '嗯？哦，比起这个，',
        callname,
        '！你看，测试的结果！',
      ]);
      await tachyon.say_and_wait([
        '这次的实验中比起大阪杯加入了更多的欢呼声变量，根据比赛结束后的数据分析',
      ]);
      await tachyon.say_and_wait(
        '确实对肌肉的输出力量产生了帮助……其输出量大于平常情绪增长造成的幅度……',
      );
      await tachyon.say_and_wait(
        '简单来讲，实验成功！观众的应援确实能够造成影响，哈哈哈哈哈哈！',
      );
      era.println();
      era.print('……虽然不太明白，但总之实验似乎是成功了');
      era.printButton('「恭喜！」', 1);
      era.printButton('「这样距离可能性就更进一步了！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '呵呵……虽然还有些地方没能搞清楚，但在比赛中运用已经没有问题了！',
      );
      await tachyon.say_and_wait(
        '不过……这么看来，其实我确实是会因喝采而感到高兴的啊……该说毕竟还是社会性生物吗……',
      );
      era.printButton(
        '「大家都是很认真的为速子加油的哦，要是速子做出反应一定会很高兴的」',
        1,
      );
      era.printButton(
        '「我是很认真为速子加油的，要是速子能够感到高兴就太好了」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '呵呵，说的也是……那么下次做点回应吧，就当作支援报酬的粉丝服务吧',
          );
          era.println();
          await era.printAndWait([
            '并不是报酬……虽然想这么说，但 ',
            tachyon.get_colored_name(),
            ' 大概还是无法明白吧',
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait('你的喝采……嗯，我也确实的听到了……');
          await tachyon.say_and_wait(
            '话说，明明能说出那种话来，怎么每次跑完回来都是这些老套的陈腔滥调啊？',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '那么，这个大家一定也包括了你吧……你希望我做出怎么样的回应，来感谢你呢♡',
          );
        } else {
          await tachyon.say_and_wait(
            '这样啊，那么，我该用什么来回报我最大的粉丝才好呢',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用妩媚的眼神看着 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait([
          '一时 ',
          me.get_colored_name(),
          ' 竟忘记了言语',
        ]);
      }
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的宝冢纪念结束了！',
      ]);
      extra_flag.attr_change = [0, 10];
      extra_flag.pt_change = 10;
    }
  };

  handlers[race_enum.prix_lat] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (
      !edu_marks.plan_b ||
      era.get('cflag:32:育成回合计时') < 96 ||
      extra_flag.rank !== 1 ||
      sys_reg_race(25).curr.race === race_enum.prix_lat
    ) {
      return true;
    }
    await print_event_name('止于极限', tachyon);
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), '，登上了世界的顶点']);
    await era.printAndWait([
      '来自日本的',
      tachyon.get_uma_sex_title(),
      '，打破了世界的纪录',
    ]);
    await era.printAndWait(
      '那灼伤了自己双眼的跑法，第一次，也是最后一次在世界上绽放出最璀璨的光彩',
    );
    era.println();
    await era.printAndWait([
      '比赛后回到选手休息室的 ',
      tachyon.get_colored_name(),
      ' 没有多说什么',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 一如往常的先为',
      tachyon.sex,
      '检查腿部状况',
    ]);
    era.println();
    await tachyon.say_and_wait(['……没有必要了吧，', callname]);
    await tachyon.say_and_wait('明明知道的不是吗？');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 陷入沉默']);
    await era.printAndWait('虽然知道结局，但还是忍不住期待奇迹');
    await era.printAndWait('然而……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 没有多说什么，只是帮着 ',
      tachyon.get_colored_name(),
      ' 用药冷却及减轻腿的负担',
    ]);
    await era.printAndWait([
      '直到官方通知，颁奖仪式已经准备好了，',
      me.get_couple_title(),
      ' 才慢慢的朝着舞台走去',
    ]);
    era.println();
    await tachyon.say_and_wait('……那么，怎么样？这场比赛，让你满意了吗？');
    era.println();
    await era.printAndWait('拼尽了一切，燃烧了自己的双腿');
    await era.printAndWait('以此获得的胜利');
    await era.printAndWait('怎么可能不使人着迷，又怎么可能不使人狂热');
    era.println();
    await era.printAndWait('自己，一定不是个称职的训练员吧');
    await era.printAndWait([
      '身为训练员，应该要理智的为',
      tachyon.get_uma_sex_title(),
      '考虑对',
      tachyon.sex,
      '们最好的选项',
    ]);
    await era.printAndWait([
      '但自己，只是为了看见最美的跑法，最强的跑姿，就放任自己的负责',
      tachyon.get_uma_sex_title(),
      '做出了这种事',
    ]);
    await era.printAndWait('幸好，此时的问题也不是需要以训练员的身份做回答的');
    await era.printAndWait([
      '以一名粉丝，以 ',
      tachyon.get_colored_name(),
      ' 最狂热的死忠粉的身份',
    ]);
    era.printButton('「是我看过的，最精彩的一场比赛了」', 1);
    await era.input();
    await era.printAndWait([tachyon.get_colored_name(), ' 露出了朝阳般的微笑']);
    await era.printAndWait([
      '比起',
      tachyon.sex,
      '的光芒，略显弱小，却更加柔和，更加温暖的光芒',
    ]);
    era.drawLine();
    await tachyon.print_and_wait('隐隐作痛的腿');
    await tachyon.print_and_wait('明显刺痛的足跟');
    await tachyon.print_and_wait('但比起这些，更多的还是遗憾');
    era.println();
    await tachyon.print_and_wait('虽然早就知道了，但果然……');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，直到最后也还是没能超越极限',
    ]);
    era.println();
    await tachyon.print_and_wait('没有什么好失望的，只不过照着原计划进行而已');
    era.println();
    await say_by_passer_by_and_wait('记者A', [
      '速子',
      tachyon.get_adult_sex_title(),
      '！恭喜您今天拿下凯旋门赏！除此之外，这次的凯旋门还打破了历届以来的纪录！',
    ]);
    await say_by_passer_by_and_wait(
      '记者A',
      '关于这场胜利，请问有想对对手或日本的亲友说的话吗？',
    );
    era.println();
    await tachyon.say_and_wait('……呵呵');
    await tachyon.say_and_wait('那么最后……让我说几句吧');
    await say_by_passer_by_and_wait('记者A', '最后……？');
    await tachyon.say_and_wait([
      '我，相信所有',
      tachyon.get_uma_sex_title(),
      '都具有自己的可能性',
    ]);
    await tachyon.say_and_wait('无论是什么样的高墙，都一定能将其超越');
    await tachyon.say_and_wait('所以……这个纪录，只是个开始，而非结束');
    await tachyon.say_and_wait([
      '接下来，必然会有更多的',
      tachyon.get_uma_sex_title(),
      '能够站上世界，然后……超越极限',
    ]);
    await tachyon.say_and_wait('我如此相信，并期望着各位，以及……');
    era.println();
    await tachyon.print_and_wait(
      '充满了对后来者的期望，却又将傲慢的将自己定义为极限',
    );
    await tachyon.print_and_wait([
      '台下的众人燃烧着斗志，望着台上的',
      tachyon.sex,
    ]);
    await tachyon.print_and_wait([
      '但',
      tachyon.sex,
      '的眼中，却是至今仍躲在观众席上的那人',
    ]);
    await tachyon.print_and_wait('舞台已经布置完成');
    await tachyon.print_and_wait('热场已经结束');
    await tachyon.print_and_wait('接下来，你有办法超越这一切吗？');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，对 ',
      get_chara_talk(25).get_colored_name(),
      ' 发出了无声的挑战',
    ]);
    era.drawLine();
    await era.printAndWait(['凯旋门赏结束']);
    await era.printAndWait([
      '在比赛结束后 ',
      me.get_colored_name(),
      ' 马上带着 ',
      tachyon.get_colored_name(),
      ' 到医院进行检查',
    ]);
    await era.printAndWait('如预料一般，却又在预料之外');
    await era.printAndWait('如预料一般，是严重到必须退役的腿伤');
    await era.printAndWait('预料之外的，伤势远没有想像的那么严重');
    await era.printAndWait('除了无法奔跑以外，就没有其他更严重的情况了');
    await era.printAndWait([
      '……然而对',
      tachyon.get_uma_sex_title(),
      '而言，也不需要比这更严重的状况了',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 退役的消息瞬间震惊了世界',
    ]);
    await era.printAndWait([
      '身为其训练员的 ',
      me.get_colored_name(),
      ' 受到了全世界的关注，其中也不免有对此的抱怨微词出现',
    ]);
    extra_flag.love_change = 10;
    sys_change_fame(-20);
    sys_hurt_uma(32, 1);
    era.set('cflag:32:殿堂', 1);
  };
};
