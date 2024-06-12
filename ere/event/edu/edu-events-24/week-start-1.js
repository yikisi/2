const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[16] = async (maya, me, callname) => {
    await print_event_name('我想闪闪发亮！', maya);
    await era.printAndWait(
      '这是在为了出道战，而持续进行训练时的某日所发生的事──',
    );
    await maya.say_and_wait([callname, '☆我跑完沙土赛道三圈咯！']);
    era.printButton('「辛苦了！」', 1);
    await era.input();
    await maya.say_and_wait('嘿嘿～♪人家还不累哦～！');
    await maya.say_and_wait('欸欸，接下来要训练什么？');
    await maya.say_and_wait('按照之前的训练项目来看，应该是比较轻松的训练？');
    await era.printAndWait([
      '──就跟',
      maya.sex,
      '说的一样，这次是以柔软沙土为主去安排训练内容。',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      ' 的身体还在成长当中。',
      me.get_colored_name(),
      ' 原本想说不要让',
      maya.sex,
      '的脚有太多负担……',
    ]);
    era.printButton('「你想再稍微努力一下？」', 1);
    await era.input();
    await maya.say_and_wait('不对！只有『稍微』是不够的！');
    await maya.say_and_wait('因为我要参赛的可是闪耀系列赛哦！');
    await maya.say_and_wait(
      '令人兴奋，又充满我想知道的事情，场上的大家也都很耀眼……',
    );
    await maya.say_and_wait('假如能在闪耀系列赛出赛，我想先让自己跑得更快！');
    await maya.say_and_wait('嘿嘿，而、且、啊～');
    await maya.say_and_wait([
      callname,
      ' 应该也认为人家还能『做到更多』对吧？',
    ]);
    era.printButton('「那当然了！」', 1);
    await era.input();
    await maya.say_and_wait('耶，我答对了～☆');
    await era.printAndWait([
      '于是，',
      me.get_colored_name(),
      ' 在不改变基本方针的情况下，让',
      maya.sex,
      '尝试了各种不同的训练──',
    ]);
    await maya.say_and_wait('……研究比赛。研究……吗……！');
    await maya.say_and_wait('啊哈哈♪有种像是朝着大人的阶梯，冲刺迈进的感觉☆');
    era.printButton('「这也是种训练」', 1);
    await era.input();
    await maya.say_and_wait('是是是，我知道☆而且，这方面人家很拿手！');
    await maya.say_and_wait('……嗯？');
    await maya.say_and_wait('咦，视频已经播完了吗？只过了半小时吧？');
    await maya.say_and_wait('啊，我懂了！是用这种方式，要吊人家胃口的作战吧～');
    await maya.say_and_wait('这、就、是……大人会用的欲擒故纵☆……呀☆');
    await era.printAndWait('话虽如此──');
    await maya.say_and_wait(['啊，', callname, '。这个视频不用再看了！']);
    await maya.say_and_wait(
      '进入第三弯道后，一号的女生会『咻──！』地提早超前吧？',
    );
    era.printButton('「是吗？」', 1);
    await era.input();
    await maya.say_and_wait('嗯，因为我就是知道。你可以看我讲的对不对。');
    await era.printAndWait([
      '被',
      maya.sex,
      '这么催着，',
      me.get_colored_name(),
      ' 把视频快转进行确认……',
    ]);
    await maya.say_and_wait('你看～☆跟我讲的一样～！');
    await maya.say_and_wait('嘿嘿，那来看下一个！下一个！！');
    await era.printAndWait([
      maya.sex,
      '就照着这股气势，把 ',
      me.get_colored_name(),
      ' 准备的所有比赛视频都看完了……',
    ]);
    await maya.say_and_wait(['咦？', callname, '。难道已经没了吗？']);
    era.printButton('「……来进行别的训练吧」', 1);
    await era.input();
    await maya.say_and_wait('啊！这样啊～！要继续训练我也很欢迎哦☆');
    await era.printAndWait('──于是为了锻炼心肺功能，接着来到了泳池。');
    await maya.say_and_wait(
      '也就是说，要测我在不换气的情况下，可以游多少距离，对吧！',
    );
    await maya.say_and_wait(
      '顺便问一下！大概要游多远，你才会称赞人家表现得超棒？',
    );
    await era.printAndWait(
      '……平常有练习的话，大概能游75米。那么第一次……100米应该差不多。',
    );
    await era.printAndWait([
      '不过曾经有赛',
      maya.get_uma_sex_title(),
      '游了300米。既然都来这里测试了──',
    ]);
    era.printButton('「就试着以300米为目标吧」', 1);
    await era.input();
    await maya.say_and_wait('收到！那我开始游了！');
    await maya.say_and_wait('唉……');
    await maya.say_and_wait('可恶～为什么～！？只游一半就不行了～！');
    await era.printAndWait(
      '不过一半──150米也是很厉害的纪录了。如果之后能一点一滴持续练习，迟早能游300米……',
    );
    await maya.say_and_wait('唔～再游一次！');
    await maya.say_and_wait('这次一定要游300米☆');
    era.printButton('「这还只是第二次耶！？」', 1);
    await era.input();
    await maya.say_and_wait('嗯，已经是第二次了。');
    await maya.say_and_wait(
      '而且，该说是出力的诀窍吗？我游到一半的时候也已经懂了☆',
    );
    await maya.say_and_wait('嘿嘿♪赶快来试试看！');
    await maya.say_and_wait('啊！！');
    await maya.say_and_wait([
      callname,
      '！要是我办到的话，要再给我新的课题！知道吗♪',
    ]);
    await maya.say_and_wait('嘻嘻☆你收到了吗？');
    await era.printAndWait([
      '……于是，为了满足',
      maya.sex,
      '的要求，',
      me.get_colored_name(),
      ' 死命地绞尽脑汁。',
    ]);
  };

  handlers.date = async (maya, me, callname) => {
    await print_event_name('来约会吧', maya);
    await era.printAndWait(
      '出道战结束后过了几个月。正当大家一如往常训练的时候──',
    );
    await maya.say_and_wait('……');
    await maya.say_and_wait('……啊。');
    era.printButton('「怎么了？」', 1);
    await era.input();
    await maya.say_and_wait(['哇呀！？', callname, '！？']);
    await maya.say_and_wait('没事，没什么！是没什么事啦……');
    await maya.say_and_wait('……唉。');
    await era.printAndWait('──嘴巴上说没事，却大大地叹了一口气。');
    era.printButton('「去散散心吧」', 1);
    await era.input();
    await maya.say_and_wait('散心……是要约会吗？');
    era.printButton('「是啊」', 1);
    await era.input();
    await maya.say_and_wait('真的吗！？');
    await maya.say_and_wait([
      '太棒了！那给我一分钟做准备！要和 ',
      callname,
      ' 去约会，约会☆',
    ]);
    await maya.say_and_wait([
      '嘿嘿，',
      callname,
      ' 会让我体验到怎样的大人约会呢～♪',
    ]);
    await era.printAndWait([
      '……就这样决定要出门散心了。说到',
      maya.sex,
      '会开心的地方──',
    ]);
    await maya.say_and_wait('约会最后还是要去人家最能闪闪发亮的地方才行！');
    await era.printAndWait('──果然只有那里吧。');
    await era.printAndWait('（哇啊啊啊啊啊啊────！！）');
    await maya.say_and_wait('这里是……');
    era.printButton('「是你最能闪闪发亮的地方哦」', 1);
    await era.input();
    await maya.say_and_wait('…………');
    await maya.say_and_wait(['……', callname, ' 现在还这么认为吗？']);
    await maya.say_and_wait(
      '『其实跟我想的好像不太一样』假如人家现在说出这种话……你会生气吗？',
    );
    era.printButton('「怎么突然这么说？」', 1);
    await era.input();
    await maya.say_and_wait('嗯…………');
    await maya.say_and_wait(
      '……人家啊，一直以为只要上场比赛，就一定能感受到兴奋的心情。',
    );
    await maya.say_and_wait([
      '在场上比赛的',
      maya.get_child_sex_title(),
      '，每一个都很耀眼吧？',
    ]);
    await maya.say_and_wait('所以不管是出道战还是其他比赛，我一直都非常期待。');
    await maya.say_and_wait('但是，实际上场比赛后才发现，总觉得……不太一样。');
    await maya.say_and_wait('……啊，原来就这样啊。好像有点没意思。');
    await maya.say_and_wait('我其实知道不能够讲这种话。可是……');
    await maya.say_and_wait('…………我就是会觉得好无聊。');
    era.printButton('「这样啊」', 1);
    await era.input();
    await maya.say_and_wait('…………嗯。');
    await maya.say_and_wait('………………');
    era.printButton('「还真是听到一件好事了！」', 1);
    await era.input();
    await maya.say_and_wait('咦……？');
    await era.printAndWait([
      '因为在闪耀系列赛上，',
      maya.sex,
      '体验到的只是出道战等级的水准。',
    ]);
    await era.printAndWait([
      '单纯只是这点程度无法满足 ',
      maya.get_colored_name(),
      ' 而已。既然这样，只要朝更高的目标迈进就好了。',
    ]);
    await era.printAndWait([
      '将来会有更多和强者们竞争的机会，也还有',
      maya.sex,
      '所不知的比赛。',
    ]);
    await era.printAndWait([
      '所以如果现阶段造成',
      maya.sex,
      '烦恼的来源，是「感到无聊」这件事的话──',
    ]);
    era.printButton('「就让之后变得更有趣吧！」', 1);
    await era.input();
    await maya.say_and_wait('……有趣？');
    await maya.say_and_wait('真的……办得到吗？因为我已经──');
    era.printButton('「为了让你能闪闪发亮，我会加油哦」', 1);
    await era.input();
    await maya.say_and_wait(['……', callname, '。']);
    await era.printAndWait([
      maya.get_colored_name(),
      ' 一定有属于',
      maya.sex,
      '自己，独一无二的闪耀方式。',
    ]);
    await era.printAndWait([
      '既然好不容易担任了像 ',
      maya.get_colored_name(),
      ' 这样如此有才能的赛',
      maya.get_uma_sex_title(),
      '的签约训练员──',
    ]);
    await era.printAndWait([
      '──为',
      maya.sex,
      '准备能发挥才能的舞台，找出专属于',
      maya.sex,
      '的成长方法，这些正是训练员的职责吧。',
    ]);
  };

  handlers[47 + 1] = async (maya, me, callname, flags) => {
    era.set('cflag:24:节日事件标记', 0);
    await print_event_name('新年的抱负', maya);
    await era.printAndWait([
      '从今年起就要开始挑战经典赛了。',
      me.get_couple_title(),
      ' 为了决定新年的抱负，相约碰面──',
    ]);
    await maya.say_and_wait('…………');
    await maya.say_and_wait([callname, '，一定要决定抱负才行吗？']);
    era.printButton('「你不想吗？」', 1);
    await era.input();
    await maya.say_and_wait('……嗯。');
    await maya.say_and_wait(
      '通常不是在认为『我要加油！』或是『一定要做到！』的时候，才会立下抱负吗？',
    );
    await maya.say_and_wait(
      '所以Maya在来这里的路上就一直在思考。思考升上经典级之后的事情。',
    );
    era.printButton('「Maya」', 1);
    await era.input();
    await maya.say_and_wait([
      '可是跟我同场比赛的，都是跟人家同年出道的赛',
      maya.get_uma_sex_title(),
      '吧？',
    ]);
    await maya.say_and_wait('……那不就跟之前没两样吗。');
    await maya.say_and_wait('我会不会又觉得无聊呢……');
    era.printButton('「那比赛以外的抱负呢？」', 1);
    await era.input();
    await maya.say_and_wait('……咦？');
    await maya.say_and_wait('比赛以外的事情……也可以吗？');
    era.printButton('「可以啊，因为是『新年』抱负」', 1);
    await era.input();
    await maya.say_and_wait('！');
    await maya.say_and_wait('那、那么！人家想要经常约会！');
    await maya.say_and_wait(['希望请 ', callname, ' 教我很多成熟的事情！']);
    era.printButton('「就知道你会这样说」', 1);
    await era.input();
    await maya.say_and_wait(['嗯，嘿嘿！是 ', callname, ' 说什么都可以的☆']);
    await maya.say_and_wait('好，决定了！我的抱负就决定是『要经常约会』！');
    await maya.say_and_wait(['哈哈，我最喜欢 ', callname, ' 了♪']);
    await era.printAndWait([
      '……',
      maya.get_colored_name(),
      ' 跟刚才判若两人，脸上露出了笑容。',
    ]);
    await era.printAndWait([
      '像这样用不同的视点看待事物的经验，一定会对',
      maya.sex,
      '带来帮助。这也是为了有天能邂逅那怦然心动的瞬间。',
    ]);
    await era.printAndWait('所以现在──');
    era.printButton('「我们立刻去约会吧！」', 1);
    await era.input();
    await maya.say_and_wait('哇……！真的吗！？');
    era.printButton('「去实现你的心愿！」', 1);
    await era.input();
    await maya.say_and_wait('太棒了──！走吧走吧！');
    await maya.say_and_wait([
      '嘿嘿！是新年约会，约会☆',
      callname,
      '，我们要去哪♪',
    ]);
    era.printButton('「新年首卖约会」（耐力+20）', 1);
    era.printButton('「年菜约会」（体力+400）', 2);
    era.printButton('「新年参拜约会」（技能点数+40）', 3);
    switch (await era.input()) {
      case 1:
        await maya.say_and_wait('哇，赞成！！');
        await maya.say_and_wait('那就快点～♪一起去买福袋吧☆');
        await maya.say_and_wait(['嘿嘿～♪今天要和 ', callname, ' 约会到晚上☆']);
        await era.printAndWait([maya.sex, '逛起街来，感觉真的会逛到晚上──']);
        await maya.say_and_wait([
          '呀☆跟 ',
          sys_get_colored_callname(24, 5),
          ' 说『我今晚不回去』好了☆',
        ]);
        await era.printAndWait([
          '……',
          me.get_colored_name(),
          ' 理所当然地阻止',
          maya.sex,
          '，之后送 ',
          maya.get_colored_name(),
          ' 回到了宿舍。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
        break;
      case 2:
        await maya.say_and_wait('年菜约会……？用年菜……约会……？');
        await maya.say_and_wait([
          '算了，也可以！只要跟 ',
          callname,
          ' 在一起，做什么感觉都会很开心♪',
        ]);
        await maya.say_and_wait('…………');
        await maya.say_and_wait('这里对我来说会不会太成熟了……？没问题吗？');
        await say_by_passer_by_and_wait(
          '和食料理店的老板娘',
          '哎呀哎呀，来了一位好可爱的客人呢。欢迎光临，呵呵。',
        );
        await maya.say_and_wait('呜、呜呀！？');
        await era.printAndWait([
          '于是 ',
          me.get_colored_name(),
          ' 就和紧张的 ',
          maya.get_colored_name(),
          ' 享受了一场年菜约会。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          undefined,
          0,
          JSON.parse('{"体力":400}'),
        );
        break;
      case 3:
        await maya.say_and_wait([
          '啊，',
          callname,
          ' 真有品味♪这很有过新年的感觉☆',
        ]);
        await maya.say_and_wait('我要着陆了♪');
        await maya.say_and_wait(['所以呢所以呢？', callname, ' 要许什么愿？']);
        era.printButton('「秘密」', 1);
        await era.input();
        await maya.say_and_wait('咦，狡猾好狡猾。告诉我啦！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 打从心底祈祷，希望 ',
          maya.get_colored_name(),
          ' 之后能够实现 ',
          maya.sex,
          ' 真正的梦想。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [], 40);
    }
  };

  handlers[47 + 3] = async (maya, me, callname) => {
    await print_event_name('锁定目标', maya);
    const teio = get_chara_talk(3);
    const brian = get_chara_talk(16);
    await era.printAndWait('终于到了春季经典赛的季节了。');
    await era.printAndWait([
      '……三冠路线、三宝冠路线。要如何度过这个赛',
      maya.get_uma_sex_title(),
      '和训练员一生只会面临一次的时期可说是非常重要──',
    ]);
    await maya.say_and_wait(['……', callname, '。又在看那个资料了～']);
    await maya.say_and_wait('差不多该陪陪人家了吧？');
    await era.printAndWait([
      '只是 ',
      me.get_colored_name(),
      ' 跟',
      maya.sex,
      '已经约定好了，尤其在安排参赛的比赛上，',
      me.get_colored_name(),
      ' 必须要审慎评估。',
    ]);
    await era.printAndWait([
      '得让',
      maya.sex,
      '在',
      maya.sex,
      '会有兴趣的比赛并且有对手的环境中，接触各式各样的机会才行──',
    ]);
    await era.printAndWait('（叩叩）');
    await maya.say_and_wait('嗯？会是谁啊……');
    await teio.say_and_wait(['嗨！', sys_get_colored_callname(3, 24), '！']);
    await maya.say_and_wait([
      '啊！是 ',
      sys_get_colored_callname(24, 3),
      '♪怎么了怎么了？你是来玩的吗？',
    ]);
    await era.printAndWait([
      teio.get_colored_name(),
      ' 是很崇拜学生会长鲁道夫象征的赛',
      maya.get_uma_sex_title(),
      '，也是 ',
      maya.get_colored_name(),
      ' 的室友。',
    ]);
    await teio.say_and_wait('嗯，算是吧！其实是会长给我了一部视频。');
    await get_chara_talk(17).used_to_say_and_wait([
      sys_get_colored_callname(17, 3),
      '，如果你仰慕我，那就别只顾着看我，也看一下我的四周吧。',
    ]);
    await get_chara_talk(17).used_to_say_and_wait([
      '比如说──',
      brian.get_colored_name(),
      ' 的跑法',
    ]);
    await teio.say_and_wait([maya.sex, '是这么说的。不过一个人看也很无聊吧？']);
    era.printButton('（……成田白仁）', 1);
    await era.input();
    await era.printAndWait([
      brian.get_colored_name(),
      '──',
      maya.sex,
      '是有着压倒性实力的赛',
      maya.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      maya.sex,
      '是经典级中……以三冠路线全都获胜而闻名的「三冠赛',
      maya.get_uma_sex_title(),
      '」。',
    ]);
    await era.printAndWait([
      maya.sex,
      '比 ',
      maya.get_colored_name(),
      ' 早一个世代，在正式竞赛遇到的可能性还很低，不过未来要挑战经典赛的话──',
    ]);
    era.printButton('「也许应该先看一下」', 1);
    await era.input();
    await teio.say_and_wait([
      '哦，不错耶～！',
      sys_get_callname(3, 0),
      ' 好像也有兴趣嘛？',
    ]);
    await maya.say_and_wait([
      '咦！？',
      callname,
      '！？我不是说不能外遇了吗！？',
    ]);
    await teio.say_and_wait([
      '啊哈哈，没关系啦！',
      sys_get_callname(3, 24),
      ' 也好奇的话，就大家一起看吧！',
    ]);
    await era.printAndWait([
      '于是 ',
      me.get_colored_name(),
      ' 便和',
      maya.sex,
      '们一起观看 ',
      brian.get_colored_name(),
      ' 的比赛视频……',
    ]);
    era.drawLine();
    await say_by_passer_by_and_wait('实况', [
      '领先的是 ',
      brian.get_colored_name(),
      '！完全拉开了距离！',
    ]);
    await say_by_passer_by_and_wait('实况', [
      '脚力果然强劲！宛如怪物！技压全场！！压制其他赛',
      maya.get_uma_sex_title(),
      '，抵达终点──！！',
    ]);
    await say_by_passer_by_and_wait('实况', [
      '──过了第四弯道，果然又是',
      maya.sex,
      '！一口气从外圈超越所有人！',
    ]);
    await say_by_passer_by_and_wait('实况', [
      '有其他人能追上 ',
      brian.get_colored_name(),
      ' 吗！？遥遥领先、遥遥领先，抵达终点！',
    ]);
    await say_by_passer_by_and_wait('实况', [maya.sex, '已经只剩下这条路了！']);
    await say_by_passer_by_and_wait('实况', [
      '真是一场不愧于三冠赛',
      maya.get_uma_sex_title(),
      '称号的比赛！',
      brian.get_colored_name(),
      '，表现太精彩了！',
    ]);
    await say_by_passer_by_and_wait('主播', [
      '转播席！转播席！现在要访问的是 ',
      brian.get_colored_name(),
      ' 选手！',
    ]);
    await say_by_passer_by_and_wait(
      '主播',
      '这次也拿下了漂亮的胜利！是否在开跑之前，就已经确定自己会是赢家了呢──',
    );
    await brian.say_and_wait('在你看来是那样的吗？');
    await say_by_passer_by_and_wait('主播', [
      '那、那当然！毕竟是 ',
      brian.get_colored_name(),
      ' 选手！',
    ]);
    await brian.say_and_wait('……哼。');
    await brian.say_and_wait('就算知道了，又有差吗？');
    await brian.say_and_wait('我只是为了满足自己而跑的。');
    await brian.say_and_wait([
      '上场的尽是渴望赢得比赛的赛',
      maya.get_uma_sex_title(),
      '。',
    ]);
    await brian.say_and_wait([
      '正因为这样，我才要击败',
      maya.sex,
      '们。为了要满足我的饥渴。',
    ]);
    await brian.say_and_wait('──下场比赛也是。');
    era.drawLine();
    await say_by_passer_by_and_wait('2人', '……');
    await era.printAndWait([
      '──在以三冠赛',
      maya.get_uma_sex_title(),
      '为目标的路线当中，每个G1赛事都有各自的格言。',
    ]);
    await era.printAndWait([
      '「',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '」──由最快的赛',
      maya.get_uma_sex_title(),
      '获胜。「',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '」──由运气最好的赛',
      maya.get_uma_sex_title(),
      '获胜。「',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '」──由实力最强的赛',
      maya.get_uma_sex_title(),
      '获胜。',
    ]);
    await era.printAndWait([
      '但是这次见识到的 ',
      brian.get_colored_name(),
      ' 的表现，则以「破格的实力」凌驾了那些格言。……',
      maya.sex,
      '就是如此的强。',
    ]);
    await maya.say_and_wait(['………………', callname, '。']);
    era.printButton('「怎么了吗？」', 1);
    await era.input();
    await maya.say_and_wait('没事，只是想叫你！');
    await era.printAndWait([
      maya.get_colored_name(),
      ' 讲完这句话后，又继续看向了电视。',
    ]);
    await era.printAndWait([
      '──如果在今年的挑战经典赛上，',
      brian.get_colored_name(),
      ' 能棋逢敌手的话，到时候情况应该会有所不同吧。',
    ]);
    era.drawLine({ content: '隔天' });
    await say_by_passer_by_and_wait('电视', [
      '怎么有如此强大的赛',
      maya.get_uma_sex_title(),
      '！──',
      brian.get_colored_name(),
      '，先拿下了一冠！！',
    ]);
    await maya.say_and_wait([
      '……',
      callname,
      '，你还在看 ',
      sys_get_colored_callname(24, 16),
      ' 的比赛吗？',
    ]);
    await maya.say_and_wait([
      '已经跟 ',
      sys_get_colored_callname(24, 3),
      ' 说好下周再还了，不用急着现在看吧？',
    ]);
    era.printButton('「说得也是呢」', 1);
    await era.input();
    await maya.say_and_wait('唔唔唔……！！');
    await era.printAndWait([
      '──但 ',
      me.get_colored_name(),
      ' 就是无法把目光移开。',
    ]);
    await era.printAndWait([
      '如果 ',
      maya.get_colored_name(),
      ' 现在有像',
      maya.sex,
      '一样那么强的对手的话……',
    ]);
    await era.printAndWait('（──啪哧）');
    await maya.say_and_wait([
      '讨厌──！讨厌讨厌讨厌讨厌──！！',
      callname,
      '，快看我这里！',
    ]);
    era.printButton('「咦？」', 1);
    await era.input();
    await maya.say_and_wait('人家现在很不开心！');
    await maya.say_and_wait(['因为 ', callname, ' 现在感到很兴奋吧？']);
    await maya.say_and_wait(['我讨厌你这样！因为你是人家的 ', callname, '！']);
    await maya.say_and_wait([
      '比起 ',
      sys_get_colored_callname(24, 16),
      ' 的表现，我更希望你是看到人家的表现而感到兴奋！',
    ]);
    era.printButton('「摩耶重炮……」', 1);
    await era.input();
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      ' 是真的很强！',
    ]);
    await maya.say_and_wait([
      '和',
      maya.sex,
      '同场奔跑会让人感到兴奋，也会闪闪发亮！这些我也知道！',
    ]);
    await maya.say_and_wait('我在出道前，也是同样的想法。');
    await maya.say_and_wait('……但是人家已经出道了！懂了更多更多的事情！');
    await maya.say_and_wait([
      '现在的我！能够变得更强，强到能『咻──！』地超越 ',
      sys_get_colored_callname(24, 16),
      '！',
    ]);
    era.printButton('（……『超越』。）', 1);
    await era.input();
    await era.printAndWait('……没错，就算现在无法直接对决。');
    await era.printAndWait([
      '把追上',
      maya.sex,
      '当作一个目标，对 ',
      maya.get_colored_name(),
      ' 来说也许会是很好的刺激。',
    ]);
    await maya.say_and_wait([
      '我说的是真的！我很快就会跑赢 ',
      sys_get_colored_callname(24, 16),
      ' 的！',
    ]);
    await maya.say_and_wait(
      '跑赢之后，你会只注视着我，并且称赞我说『很令人兴奋！』吗？',
    );
    await maya.say_and_wait(
      '你会跟我说『你非常耀眼』、『摩耶重炮是最棒的』吗？',
    );
    era.printButton('「当然会！」', 1);
    await era.input();
    await maya.say_and_wait('那就这么决定了！！');
    await maya.say_and_wait(
      '我可是很认真的！一定要遵守哦！要做好觉悟！你收到了吗！？',
    );
    await era.printAndWait(['……', maya.sex, '莫名地充满了干劲，于是──']);
    await era.printAndWait([
      '就在这天，',
      maya.sex,
      '心中有了一个名为「',
      brian.get_colored_name(),
      '』的目标。',
    ]);
  };

  handlers[47 + 29] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('夏季合宿（经典年）', maya);
    await era.printAndWait(
      '从今天开始是「夏季合宿」──为了提升实力的强化训练即将展开。',
    );
    await maya.say_and_wait('哇……☆好可爱的红色房子～！');
    await maya.say_and_wait([
      '我和 ',
      callname,
      ' 就是要在这里度过大人的夏天对吧！',
    ]);
    era.printButton('「是和大家一起度过『夏季合宿』」', 1);
    await era.input();
    await maya.say_and_wait('哼──！我知道啦！');
    await maya.say_and_wait('哼！你也只有现在能把我当小孩子看了！');
    await era.printAndWait([
      '于是，',
      me.get_colored_name(),
      ' 和 ',
      maya.get_colored_name(),
      ' 的夏季合宿开始了。',
    ]);
  };

  handlers[47 + 30] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('代码：燃烧！', maya);
    await era.printAndWait(
      '从今天开始是「夏季合宿」──为了提升实力的强化训练即将展开。',
    );
    await era.printAndWait('接着，迎来了夏季合宿的第一周。');
    await era.printAndWait([
      '在大海、青山、祭典等各式各样的诱惑下，',
      maya.get_colored_name(),
      ' ',
      maya.sex,
      '──',
    ]);
    await maya.say_and_wait('哈啊……哈啊……呼……☆');
    await maya.say_and_wait('嘿嘿，人家是不是真的已经变得更快了？');
    await maya.say_and_wait([
      '这样的话我就会是今年的赛',
      maya.get_uma_sex_title(),
      '中最快的！不对，应该是全赛',
      maya.get_uma_sex_title(),
      '中最快的吧？',
    ]);
    era.printButton('「会不会太夸张了？」', 1);
    await era.input();
    await maya.say_and_wait('又没关系！只是说说！');
    await maya.say_and_wait([
      '而且人家一定要让 ',
      callname,
      ' 说出『摩耶重炮是最耀眼的』才行！',
    ]);
    await maya.say_and_wait('比那天看到的──');
    await maya.say_and_wait([
      '──',
      sys_get_colored_callname(24, 16),
      ' 还要耀眼。',
    ]);
    era.printButton(`「${sys_get_callname(0, 16)} 啊」`, 1);
    await era.input();
    await maya.say_and_wait([
      '啊，讨厌讨厌！禁止 ',
      callname,
      ' 说出那个名字！',
    ]);
    await maya.say_and_wait('……真是的，完全不能大意！');
    await maya.say_and_wait([
      '啊～我怎么还在经典级。升上资深级之后我要立刻和 ',
      sys_get_colored_callname(24, 16),
      '──',
    ]);
    await maya.say_and_wait('啊！！');
    await maya.say_and_wait([callname, '。三冠路线还剩下哪些比赛？']);
    await era.printAndWait([
      '──三冠路线。那是 ',
      get_chara_talk(16).get_colored_name(),
      ' 成为「三冠赛',
      maya.get_uma_sex_title(),
      '」时所走的路线。',
    ]);
    await era.printAndWait([
      '如今春季的 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 都结束了，三冠路线最后的比赛……',
    ]);
    era.printButton('「还剩下『菊花赏』」', 1);
    await era.input();
    await maya.say_and_wait('没问题☆也就是说那是下一个目标对吧！');
    await maya.say_and_wait([
      '我会跑出比 ',
      sys_get_colored_callname(24, 16),
      ' 那时候还要更令人兴奋的表现！',
    ]);
    era.printButton('「你的斗志真旺盛」', 1);
    await era.input();
    await maya.say_and_wait('嘻嘻☆有吗？');
    await maya.say_and_wait('不过人家斗志旺盛的样子，你也不讨厌吧～？对不对♪');
    await era.printAndWait([
      '就这样，新的目标就决定是「',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '」了──！',
    ]);
  };
};
