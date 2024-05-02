const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const plana = require('#/event/edu/edu-events-32/week-start-10-plana');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { common_future } = require('#/event/edu/edu-events-32/snippets');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 48] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    era.set('cflag:32:节日事件标记', 0);
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('圣夜的诺言', tachyon);
      era.println();
      await era.printAndWait([
        '最近 ',
        tachyon.get_colored_name(),
        ' 的情绪似乎有些反常',
      ]);
      await era.printAndWait([
        '总是一个人闷闷不乐的，',
        coffee.get_colored_name(),
        ' 的训练也都不跟着，甚至连实验都很少做了',
      ]);
      await era.printAndWait([
        '虽说对于实验最大受害者的 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 而言也不能说这是什么坏事，但还是令人有些担心',
      ]);
      await era.printAndWait([
        '忽然，商店街的圣诞歌声传入 ',
        me.get_colored_name(),
        ' 的耳中',
      ]);
      await era.printAndWait([
        '有了，以圣诞节为理由找',
        tachyon.sex,
        '出门谈心吧',
      ]);
      era.drawLine();
      await era.printAndWait('圣诞夜的商店街比起平时更加灯火通明气氛火热');
      await era.printAndWait('其原因不只是圣诞节，更是因为……');
      await say_by_passer_by_and_wait('商店街大叔', [
        '有马纪念预测！明天的有马纪念赛前预测！',
      ]);
      await say_by_passer_by_and_wait('游客A', [
        '不知道明天有马纪念会怎么样……不过，赢的应该会是 ',
        coffee.get_colored_name(),
        ' 吧',
      ]);
      await say_by_passer_by_and_wait('游客B', [
        '日本杯的表现，真的太强了！……说是史上最强也不为过吧',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('一直沉默也不是办法，这个时候还是该说点话吧');
      era.printButton('「明天就是有马纪念了，不过茶座不会有问题的」', 1);
      era.printButton('「那边的蜂蜜特饮好像在搞圣诞特卖的样子」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, '还是没说什么']);
        await era.printAndWait([
          '感到有些气氛尴尬的 ',
          me.get_colored_name(),
          ' 只能继续聊着 ',
          coffee.get_colored_name(),
          ' 最近的训练状况',
        ]);
      } else {
        await tachyon.say_and_wait('……那就，来一杯吧');
        era.println();
        await era.printAndWait([
          '喝了最甜的蜂蜜后，',
          tachyon.get_colored_name(),
          ' 的心情似乎缓和一些了',
        ]);
        await era.printAndWait([
          '顺带一提，',
          me.get_colored_name(),
          ' 为了配合也点了最甜的，然而……',
        ]);
        await era.printAndWait([
          '只吸了一口，',
          me.get_colored_name(),
          ' 便感到牙齿生疼',
        ]);
        await era.printAndWait([
          '看着 ',
          tachyon.get_colored_name(),
          ' 欢快喝着蜂蜜的模样，',
          me.get_colored_name(),
          ' 开始思考是不是该找机会带',
          tachyon.sex,
          '去检查牙齿了',
        ]);
      }
      era.println();
      await era.printAndWait([
        '没过多久，',
        me.get_couple_title(),
        ' 走到了商店街中央的圣诞树前',
      ]);
      await era.printAndWait([
        '忽然，一阵狂风，将周围有马纪念的报导吹到了 ',
        me.get_couple_title(),
        ' 面前',
      ]);
      await era.printAndWait([
        '报纸上是日本杯时的 ',
        coffee.get_colored_name(),
        '，看上去威风凛凛',
      ]);
      era.printButton(
        '「日本杯……那时候的茶座，真的好厉害，虽然不太合适，但要是跟速子……」',
        1,
      );
      era.printButton('「速子！那边的棉花糖摊看起来好厉害！」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await era.printAndWait([
          '前面看提起有马纪念 ',
          tachyon.get_colored_name(),
          ' 的心情似乎不太好',
        ]);
        await era.printAndWait([
          '因此 ',
          me.get_colored_name(),
          ' 转而提起日本杯的事',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的宿愿被达成的那天，想必一定能让 ',
          tachyon.get_colored_name(),
          ' 提起精神来吧',
        ]);
        await era.printAndWait('然而……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 依然什么话也没说',
        ]);
        await era.printAndWait('还是不对吗……');
      } else {
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 看着圣诞树旁的棉花糖摊，在师傅高超的手艺下，各种模样的软绵绵动物瞬间被雕塑而成',
        ]);
        era.println();
        await tachyon.say_and_wait('……不，我……');
        era.println();
        await era.printAndWait([
          '没等 ',
          tachyon.get_colored_name(),
          ' 说完，棉花糖摊的摊主便塞了个又大又软绵绵的棉花糖豚鼠在 ',
          tachyon.get_colored_name(),
          ' 手中',
        ]);
        await get_chara_talk(33).say_as_unknown_and_wait(
          '心情不好的时候要记住，只有软绵绵是不会背叛你的',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('摊主不知道为什么，有些莫名的眼熟');
          await era.printAndWait('……应该，只是错觉而已吧');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 愣愣的接过了棉花糖豚鼠，没有退回去也没有多说什么',
        ]);
        await era.printAndWait([
          '然后，',
          tachyon.sex,
          '轻启朱唇，小小的咬了一口',
        ]);
        era.println();
        await tachyon.say_and_wait('……软绵绵的');
        era.println();
        await era.printAndWait([
          '不知道为什么，摊主听见这句话后骄傲的挺起了胸膛',
        ]);
      }
      era.println();
      await era.printAndWait([
        '最后，',
        me.get_couple_title(),
        ' 走到了商店街末尾',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        ' 看见路旁的书店，店内最引人注目的地方，摆放着几本过期的杂志',
      ]);
      await era.printAndWait('过期……也不能这么说');
      await era.printAndWait(
        '虽然以比赛情报来说是已经过期的，但就时间而言，只是前两个月的杂志而已',
      );
      await era.printAndWait([
        '————是 ',
        tachyon.get_colored_name(),
        ' 凯旋门赏后的采访杂志',
      ]);
      await say_by_passer_by_and_wait('书店老板', '欢迎光临！');
      era.printButton('「这是……」', 1);
      era.printButton('「凯旋门赏的杂志？」', 2);
      await era.input();
      await era.printAndWait([
        '书店老板并没有注意到跟在 ',
        me.get_colored_name(),
        ' 身后将头低下的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('望着杂志开始夸夸而谈');
      await say_by_passer_by_and_wait('书店老板', [
        '喔！这些杂志啊，我专门摆在这里的！',
      ]);
      if (check_aim_race(new RaceHistory(32).get(), race_enum.prix_lat, 2, 1)) {
        await say_by_passer_by_and_wait('书店老板', [
          '好不容易啊，日本',
          tachyon.get_uma_sex_title(),
          '终于赢下世界的凯旋门！当然要摆出来做纪念了！',
        ]);
      }
      await say_by_passer_by_and_wait('书店老板', [
        '要我说外面那些人根本不懂，',
        tachyon.get_colored_name(),
        ' 才是最强的！要是没退役那什么 ',
        coffee.get_colored_name(),
        ' 根本不会是',
        tachyon.sex,
        '的对手！',
      ]);
      era.printButton('「也不好说呢……」', 1);
      era.printButton('「当然，速子是最强的」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await era.printAndWait(['如果是日本杯前的话确实如此']);
        await era.printAndWait([
          '但日本杯之后的 ',
          coffee.get_colored_name(),
          '，已经是 ',
          tachyon.get_colored_name(),
          ' 认证的完成体了',
        ]);
        await era.printAndWait([
          '这种情况下的 ',
          coffee.get_colored_name(),
          '，要是再与 ',
          tachyon.get_colored_name(),
          ' 比一场的话……谁胜谁负真不好说',
        ]);
        await era.printAndWait([
          '没错，哪怕 ',
          coffee.get_colored_name(),
          ' 已经超越了极限……自己的心里还是相信，',
          tachyon.get_colored_name(),
          ' 一定能够与',
          tachyon.sex,
          '一较高下',
        ]);
        await era.printAndWait([
          '绝对不是像',
          tachyon.sex,
          '自己说的什么绊脚石',
        ]);
        await say_by_passer_by_and_wait(
          '书店老板',
          '切，还以为来了个识货的，没想到也是什么都不懂的家伙',
        );
        era.println();
        await era.printAndWait([
          '听见店老板这么说，',
          me.get_colored_name(),
          ' 只能露出苦笑',
        ]);
        await era.printAndWait([
          '忽然，',
          me.get_colored_name(),
          ' 看到 ',
          tachyon.get_colored_name(),
          ' 走近了那堆杂志',
        ]);
        era.println();
        await tachyon.say_and_wait('……老板，给我一本');
        await say_by_passer_by_and_wait('书店老板', [
          '喔喔，小',
          tachyon.sex_code - 1 ? '姑娘' : '伙子',
          '挺识货的嘛',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 刻意压低了声音，不让人听出',
          tachyon.sex,
          '的真实音色',
        ]);
        await era.printAndWait(
          '不过这杂志……当初应该有收到样品才对，为什么要再买一次呢？',
        );
        era.println();
        await tachyon.say_and_wait(
          '……没办法，有人不懂这些杂志的价值，我只好自己好好珍惜了',
        );
        era.println();
        await era.printAndWait('欸');
        await era.printAndWait([
          '看着 ',
          tachyon.get_colored_name(),
          ' 偷偷对 ',
          me.get_colored_name(),
          ' 露出的带着恼怒的眼神',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 不禁开始思考，自己难道又说错什么了吗？',
        ]);
      } else {
        era.println();
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('这还需要问吗？');
        await era.printAndWait('虽说如果毫无意义');
        await era.printAndWait([
          '但还是让人忍不住去想如果的',
          tachyon.get_uma_sex_title(),
        ]);
        await era.printAndWait([
          '带来无限的可能性及遐想的',
          tachyon.get_uma_sex_title(),
        ]);
        await era.printAndWait(['这就是 ', tachyon.get_colored_name()]);
        await say_by_passer_by_and_wait('书店老板', [
          '果然！小',
          me.sex_code - 1 ? '妹' : '哥',
          '你进来的时候我就有感觉了，这家伙一定是个懂行的！',
        ]);
        await say_by_passer_by_and_wait('书店老板', [
          '我就说了，',
          tachyon.get_colored_name(),
          ' 才是最强的！什么 ',
          coffee.get_colored_name(),
          ' 根本就不会是对手！',
        ]);
        await say_by_passer_by_and_wait('书店老板', [
          '实不相瞒，我其实从去年的皋月赏就开始关注 ',
          tachyon.get_colored_name(),
          ' 了！那种跑法……说是',
          tachyon.get_uma_sex_title(),
          '的极限真的不夸张啊！',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 和老板兴致勃勃的谈论着 ',
          tachyon.get_colored_name(),
          ' 的比赛',
        ]);
        await era.printAndWait([
          '直到身后的 ',
          tachyon.get_colored_name(),
          ' 受不了了拉着 ',
          me.get_colored_name(),
          ' 想往店外走',
        ]);
        await era.printAndWait([
          '不知为何，',
          tachyon.sex,
          '的脸看起来似乎有点红……大概是灯光的错觉吧',
        ]);
      }
      era.println();
      if (edu_marks.chris >= 2) {
        await era.printAndWait([
          '不知不觉，',
          me.get_couple_title(),
          ' 漫步到了河堤旁',
        ]);
        await era.printAndWait(
          '昏暗寂静的河岸，与远处商店街的灯火及圣诞歌曲成为对比',
        );
        era.println();
        await tachyon.say_and_wait('……下雪了');
        era.println();
        await era.printAndWait('确实，周围开始飘起了绵绵雪絮');
        await era.printAndWait(
          '……这么晚，还是下雪天跑到这种地方来，果然还是很危险吧',
        );
        await era.printAndWait([
          '虽然没能问出 ',
          tachyon.get_colored_name(),
          ' 心情沮丧的原因，但今天真的太晚了',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 正想提议今天就到这边结束的时候……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………呼');
        era.println();
        await era.printAndWait([
          '忽然，',
          me.get_colored_name(),
          ' 被 ',
          tachyon.get_colored_name(),
          ' 抱住了',
        ]);
        await era.printAndWait('非常突然，毫无前兆的拥抱');
        era.printButton('「速子……？」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          ' 想说些什么，但怀中人微微颤抖的身体，以及靠在 ',
          me.get_colored_name(),
          ' 肩膀上的脑袋，还有莫名湿热的肩膀，使 ',
          me.get_colored_name(),
          ' 意识到此时或许不该开口说话',
        ]);
        era.println();
        await tachyon.say_and_wait('对不起……但是……只要，只要一下就好……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 愣着神让 ',
          tachyon.get_colored_name(),
          ' 在 ',
          me.get_colored_name(),
          ' 的怀中哭泣',
        ]);
        await era.printAndWait('内心满是疑惑');
        await era.printAndWait([tachyon.get_colored_name(), ' 到底怎么了']);
        era.drawLine();
        await tachyon.print_and_wait('其实，已经猜到了');
        await tachyon.print_and_wait('这次出来，不过是再一次确认自己的猜想');
        await tachyon.print_and_wait('但实际听见还是忍不住心中刺痛');
        era.println();
        await tachyon.print_and_wait('从先前的闲聊就已经能够发现');
        await tachyon.print_and_wait([
          me.sex,
          '的话题总是三句不离 ',
          t_call_c,
          '，眼中也满是对',
          tachyon.sex,
          '的期待',
        ]);
        await tachyon.print_and_wait([
          '以前那个凡事总以 ',
          tachyon.get_colored_name(),
          ' 为优先的 ',
          callname,
          '，已经不在了',
        ]);
        await tachyon.print_and_wait([
          '现在的',
          me.sex,
          '，是 ',
          t_call_c,
          ' 的「',
          sys_get_colored_callname(25, 0),
          '」',
        ]);
        await tachyon.print_and_wait('于情于理这都是最正确的选项');
        await tachyon.print_and_wait(
          '自己不过是利用跑法将其魅惑，将其当成方便工具对待的卑鄙魔女',
        );
        await tachyon.print_and_wait([
          '跨越了各种阻碍，最终超越了极限的',
          coffee.get_uma_sex_title(),
        ]);
        await tachyon.print_and_wait([
          '用自己的跑法将魔女施加在',
          me.sex,
          '身上的魔咒破除，最后两人过着幸福快乐的生活',
        ]);
        await tachyon.print_and_wait('这一定就是，故事最好的结局');
        era.println();
        await tachyon.print_and_wait('所以……');
        era.println();
        await tachyon.say_and_wait('最后一次……让我，最后爱我一次就好');
        await tachyon.say_and_wait([
          '只要一次……之后就再也不会干涉你跟 ',
          t_call_c,
          ' 了',
        ]);
        era.println();
        await tachyon.print_and_wait('利用各种借口理由，只求一夜欢愉');
        await tachyon.print_and_wait(
          '可悲的是，直到最后自己也还是只能用这种借口',
        );
        await tachyon.print_and_wait([
          '用好像威胁一样的口吻，期望',
          me.sex,
          '能给予最后一次的慈悲',
        ]);
        await tachyon.print_and_wait('只要一次就好');
        await tachyon.print_and_wait([
          '然后自己就能放弃，衷心的祝福',
          me.sex,
          '们了',
        ]);
        await tachyon.print_and_wait(
          '无视脑海中「你真的觉得自己能够放弃吗」的低语',
        );
        await tachyon.print_and_wait('用这样的话来说服自己');
        era.println();
        await era.printAndWait([
          '看着这样的 ',
          tachyon.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 选择',
        ]);
        era.printButton('「抱住」', 1);
        era.printButton('「亲吻」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait('忽然，还想说出口的话被堵住了');
          await tachyon.print_and_wait(['……被', me.sex, '反向抱住了自己']);
          await tachyon.print_and_wait('想说的话卡在喉咙说不出口');
        } else {
          await tachyon.print_and_wait('忽然，还想说出口的话被堵住了');
          await tachyon.print_and_wait('……温柔，暖和的触感');
          await tachyon.print_and_wait('仿佛将冬日的寒冷完全去除的圣诞之吻');
        }
        era.println();
        await tachyon.print_and_wait('不……自己的意思不是这样');
        await tachyon.print_and_wait([
          '还是说……',
          tachyon.get_colored_name(),
          ' 已经连被爱着的资格都没有了？',
        ]);
        await tachyon.print_and_wait('自暴自弃下，不由得产生这样的想法');
        era.println();
        await tachyon.say_and_wait(['唔……', callname]);
        era.println();
        await tachyon.print_and_wait('正当自己这么想的时候');
        await tachyon.print_and_wait([
          '仿佛在驱赶自己心中的杂念般，',
          me.sex,
          '加重了拥抱的力道',
        ]);
        era.printButton('「至少，看完明天的有马纪念吧」', 1);
        era.printButton('「一定会给速子一个交代的」', 2);
        await era.input();
        await tachyon.print_and_wait('交代……什么样的交代');
        await tachyon.print_and_wait('作为……关系结束的交代吗？');
        await tachyon.print_and_wait([
          '直直望着',
          me.sex,
          '的双眼，却无法看出任何含义',
        ]);
        era.println();
        await tachyon.print_and_wait('……也不错吧');
        await tachyon.print_and_wait([
          '如果可以最后，再看见',
          me.sex,
          '那狂热的眼神的话',
        ]);
        await tachyon.print_and_wait([
          '……即便目光指向的对象，已经不是 ',
          tachyon.get_colored_name(),
        ]);
        flags.wait_flag = sys_like_chara(32, 0, -20, true, 10);
      } else {
        await tachyon.say_and_wait('……啊，下雪了');
        era.println();
        await era.printAndWait('忽然，天空中开始飘起渺渺白雪');
        await era.printAndWait([
          '是不是该回去了……正当 ',
          me.get_colored_name(),
          ' 这么想着的时候，',
          tachyon.get_colored_name(),
          ' 拉了拉 ',
          me.get_colored_name(),
          ' 的衣服',
        ]);
        era.println();
        await tachyon.say_and_wait('找个地方先坐坐吧');
        era.println();
        await era.printAndWait('也是，今天的目标还没达成呢');
        await era.printAndWait([
          '找个店先坐一下，然后把 ',
          tachyon.get_colored_name(),
          ' 不高兴的原因问出来吧',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 给自己打了打气']);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '？不坐吗？']);
        era.printButton('「……不，那个」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '这样支支吾吾的，可不像你啊……还是说，有什么难言之隐吗？',
        );
        era.println();
        await era.printAndWait('不，要说的话，也并非是难言之隐的问题，而是……');
        era.printButton('「和学生一起进居酒屋什么的，NG了吧」', 1);
        era.printButton('「和未成年一起进居酒屋什么的，犯法了吧」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 拉着 ',
          me.get_colored_name(),
          ' 要进入的，赫然是商店街末尾的居酒屋',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '都已经退役了，没关系的吧……虽然我也是第一次来这种地方，不过应该不会有问题',
        );
        await tachyon.say_and_wait([
          '还是 ',
          callname,
          '，你都这么大的人了，难道说连居酒屋都不敢进？',
        ]);
        era.printButton('「问题不是退役不退役而是学生啊！」', 1);
        era.printButton('「……激将法是没用的」', 2);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          ' 正想拒绝拉着 ',
          tachyon.get_colored_name(),
          ' 往回走时，',
          tachyon.get_colored_name(),
          ' 却直接就进入了店里',
        ]);
        era.println();
        await tachyon.say_and_wait('好啦好啦，来吧，就当吃个宵夜……之类的');
        await say_by_passer_by_and_wait('店主', '欢迎光临～～');
        era.println();
        await era.printAndWait([
          '店门一开，温暖的暖气与外面的冷空气成对比后便让 ',
          me.get_colored_name(),
          ' 再也走不动路了',
        ]);
        era.printButton('「……坐一下或许也不是不行」', 1);
        await era.input();
        await era.printAndWait([
          '进了店内，',
          me.get_colored_name(),
          ' 才意外的发现',
        ]);
        await era.printAndWait(
          '在店内忙里忙完的店主，身后竟然有着根长长的栗色尾巴',
        );
        era.println();
        await tachyon.say_and_wait('……哦呀，居然……');
        era.println();
        await tachyon.say_and_wait(
          '欢迎光临！……我说这位客人，应该，是学生吧？',
        );
        era.println();
        await tachyon.say_and_wait(
          '啊啦，看起来是这样吗？不过我可是已退役身份就是了',
        );
        era.println();
        await era.printAndWait('不，已经退役不代表就不是学生了吧');
        await era.printAndWait('虽然很想吐槽，但店主却点了点头说那就没问题');
        await era.printAndWait('不……没问题什么啊');
        era.println();
        await say_by_passer_by_and_wait(
          '店主',
          '再说，身边那位应该是你的训练员吧，有训练员陪着就没问题啦',
        );
        await tachyon.say_and_wait('……哦，看得出来吗？');
        era.println();
        await era.printAndWait([
          '问题很大吧……不过比起这个，',
          me.get_colored_name(),
          ' 也好奇为什么能够看出自己是训练员',
        ]);
        await say_by_passer_by_and_wait('店主', [
          me.sex,
          '的眼神啊，和我老公一模一样，都是看见自家担当就走不动路的眼神',
        ]);
        era.println();
        await era.printAndWait('这，这是什么说法');
        await era.printAndWait('自己难道是什么变态吗');
        await say_by_passer_by_and_wait(
          '店主',
          '呵呵，这种眼神可是好老公必备的～～千万别放过了',
        );
        era.println();
        await era.printAndWait('店主说完后就去招待其他客人了');
        await era.printAndWait([
          me.get_colored_name(),
          ' 战战兢兢的望着 ',
          tachyon.get_colored_name(),
          '，心想这下绝对会被',
          tachyon.sex,
          '嘲笑了……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('不知道在思考些什么');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的神情看起来仿佛出神了一般',
        ]);
        era.printButton('「速子？」', 1);
        await era.input();
        await tachyon.say_and_wait('……啊，嗯，咳咳，没什么');
        era.println();
        await era.printAndWait([
          '回过神后，',
          tachyon.get_colored_name(),
          ' 脸仿佛延时启动的自热便当一般',
        ]);
        await era.printAndWait([
          '瞬间变得通红，',
          me.get_colored_name(),
          ' 仿佛能看见蒸气从',
          tachyon.sex,
          '脸上冒出',
        ]);
        await era.printAndWait([
          '为了掩饰尴尬，',
          tachyon.sex,
          '将注意力转移到了店内的情况',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 也将目光望了过去']);
        era.println();
        await era.printAndWait('店主忙前忙后招待着客人');
        await era.printAndWait([
          '店里的客人虽然有些在谈论着有马纪念的事，却也并非主流',
        ]);
        await era.printAndWait('就和每天的天气一般，是无聊时聊个两句的话题');
        await era.printAndWait([
          '证据就是，到现在还没有人认出 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '身为在特雷森学园附近的商店街，不认识上半年最为出名的',
          tachyon.get_uma_sex_title(),
          '，可以说是极为异类的情况了',
        ]);
        era.println();
        await era.printAndWait([
          '看到这，',
          me.get_colored_name(),
          ' 不由得想起身为',
          tachyon.get_uma_sex_title(),
          '的店主',
        ]);
        await era.printAndWait([
          '既然说老公是训练员，那么代表',
          tachyon.sex,
          '当初应该也是竞赛',
          tachyon.get_uma_sex_title(),
          '吧',
        ]);
        await era.printAndWait('退役后却过着这样，与比赛几乎无缘的生活');
        await era.printAndWait('如此平淡，如此乏味，如此……祥和');
        era.println();
        await tachyon.say_and_wait('……这也是，一种可能性吗');
        era.println();
        await era.printAndWait([tachyon.get_uma_sex_title(), '的可能性']);
        await era.printAndWait([
          '这是 ',
          tachyon.get_colored_name(),
          ' 总放在口上的话',
        ]);
        await era.printAndWait([
          '……但，',
          tachyon.get_uma_sex_title(),
          '绝对不是每个人都能成为赛',
          tachyon.get_uma_sex_title(),
          '的',
        ]);
        await era.printAndWait([
          '就算是赛',
          tachyon.get_uma_sex_title(),
          '，也能选择走上并非赛场的那条路',
        ]);
        era.println();
        await era.printAndWait([
          '那么，这种可能性能否共用在 ',
          tachyon.get_colored_name(),
          ' 身上呢？',
        ]);
        await era.printAndWait([
          '忽然，',
          me.get_colored_name(),
          ' 能够理解 ',
          tachyon.get_colored_name(),
          ' 消沉的原因了',
        ]);
        await common_future(tachyon, callname);
        await era.printAndWait(['与', tachyon.sex, '一起，建筑属于两人的生活']);
        await era.printAndWait('……但是，现在不行');
        era.printButton('「……可以等到明天的有马之后吗」', 1);
        era.printButton('「明天看完有马之后再问我一次」', 2);
        await era.input();
        await era.printAndWait('想要离开赛场，本身也是一种可以选择的可能性');
        await era.printAndWait([
          '但绝对不是像 ',
          tachyon.get_colored_name(),
          ' 现在这样，如同逃避一般的远离',
        ]);
        await era.printAndWait('……只能希望，明天的有马能够令其改观了');
        flags.wait_flag = sys_like_chara(32, 0, 100, true, 20);
      }
    } else {
      await plana(tachyon, me, callname, relation, love);
      flags.wait_flag = get_attr_and_print_in_event(
        32,
        undefined,
        0,
        JSON.parse(`{"体力":${era.get('maxbase:32:体力') * 0.4}}`),
      );
      flags.wait_flag = sys_like_chara(32, 0, 100);
    }
  };
};
