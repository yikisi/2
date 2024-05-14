const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const { say_by_passer_by } = require('#/utils/chara-talk');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async function (hook, _, event_object) {
  const chara_talk = get_chara_talk(4),
    chara17_talk = get_chara_talk(17),
    chara19_talk = get_chara_talk(19),
    chara301_talk = get_chara_talk(301),
    me = get_chara_talk(0),
    event_marks = new MaEduMarks(),
    edu_weeks = era.get('cflag:4:育成回合计时');
  let wait_flag = false;
  if (event_marks.beginning === 1) {
    event_marks.beginning++;
    await print_event_name(`序章·${chara_talk.name}登场`, chara_talk);
    await era.printAndWait(`草场上`);
    await chara_talk.say_and_wait(`训练员君，接下来一起去哪里逛逛吧？`);
    await era.printAndWait(`挨着你坐下的马娘向你搭话。`);
    era.printButton(`抱歉，接下来我还要回到训练室整理数据。`, 1);
    await era.input();
    await era.printAndWait(`天空被落日染成了金黄色的模样。`);
    await chara_talk.say_and_wait(
      `看到训练员君这么努力，姐姐我也想再跑一圈了呢♪`,
    );
    await era.printAndWait(
      `紧挨着（玩家名）坐下的马娘补充完了最后一点水分后站了起来，被残阳照射下的波浪长发像燃烧着的火焰一样。`,
    );
    await me.say_and_wait(`不要跑过头了。`);
    await chara_talk.say_and_wait(`知道了♪`);
    await era.printAndWait(`得到了你的许可的她再次回到了起跑线。`);
    await era.printAndWait(`随着发令枪的响起，火焰在草场上再次燃起。`);
    await era.printAndWait(
      `火焰的主人也因为奔跑时吹拂的强风露出了由衷的笑容。`,
    );
    era.drawLine();
    await era.printAndWait(
      `重新回到了训练室的（玩家名），趁着最后一缕阳光尚未熄灭之时，将携带的文件夹放回了原本的位置。`,
    );
    await era.printAndWait(
      `原本打算整理丸善斯基奔跑时数据的（玩家名），此刻却被一封信所吸引。`,
    );
    await me.say_and_wait(`这是什么？`, true);
    await era.printAndWait(`是与周围格格不入的，充满青春气息的信封。`);
    await era.printAndWait(
      `没有填写邮编，地址则是自己的办公室，收信人也好好的填上了（玩家名），只是最后的寄信者。`,
    );
    await me.say_and_wait(`丸善斯基？`, true);
    await era.printAndWait(`带着满腹的疑惑，拆开了信封。`);
    await chara_talk.say_and_wait(
      `锵锵！正阅读着这封信的${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，有没有觉得这样子很酷呢？`,
    );
    await chara_talk.say_and_wait(
      `虽然一开始计划着在你差不多回到训练室的时候突然发短信来着，不过一直搞不定按键真是急死人了><`,
    );
    await chara_talk.say_and_wait(
      `最后只能妥协写信了......但是！姐姐我意外发现，通过信件传达感情好像也开始渐渐流行起来了！果然，姐姐我一直都是潮流的领跑者呢♪`,
    );
    await chara_talk.say_and_wait(
      `虽然像这样凭着气势写了下来，不过究竟应该做什么比较好呢？`,
    );
    await chara_talk.say_and_wait(
      `——嗯，如果按照漫画里的情节考虑的话，好像天台似乎不错的样子？`,
    );
    await chara_talk.say_and_wait(
      `所以今天晚上7点半在天台见面吧！那么，训练员君，待会见！`,
    );
    await era.printAndWait(
      `将信纸从信封中取出，展开，（玩家名）就这样站着读了起来。`,
    );
    await me.say_and_wait(`丸善斯基意外的很可爱呢。`, true);
    await me.say_and_wait(
      `毕竟是接下来三年朝夕相处的同伴,见面的时候得多了解一点对方才行。`,
      true,
    );
    era.printButton(`而且`, 1);
    await era.input();
    await say_by_passer_by(
      `路人马娘`,
      `欸？丸善学姐竟然会同意那样的人作为三年的担当？`,
    );
    await say_by_passer_by(
      `路人训练员`,
      `说到底，（玩家名）只是被怪物一样的丸善斯基心血来潮看上的幸运儿罢了，真是个运气好的家伙`,
    );
    await me.say_and_wait(`被怪物心血来潮看上的幸运儿吗？`);
    await era.printAndWait(
      `正如所言，试图招募丸善斯基的训练员中不乏在生涯之中取得优秀成绩的精英训练员。`,
    );
    await era.printAndWait(
      `自己与他们相比，乐观来说也是存在着阅历上的差距，被丸善斯基看中，也只是恰巧扣中心弦罢了。`,
    );
    await era.printAndWait(`下一次的话，自己还会有这么幸运吗？`);
    await era.printAndWait(`强迫自己重新将注意力移至工作中。`);
    await era.printAndWait(`瞄了眼手机，锁屏界面上显示的时间为6:05`);
    await me.say_and_wait(`接下来要更加努力才行了。`);
    await era.printAndWait(`将信封收进抽屉后，（玩家名）再次逃进了工作之中。`);
    era.drawLine();
    await era.printAndWait(`差不多到该出发的时间了。`);
    await era.printAndWait(
      `从训练室到位于教学楼的天台大概需要10分钟，考虑到礼貌方面的要素，提前10分钟左右差不多吧。`,
    );
    await era.printAndWait(`而此时锁屏界面上显示的时间为7点整。`);
    era.printButton(`出发！`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `夜晚的吹拂比起白天显得更加温柔，仔细感受的话，一丝丝香甜的气味钻进了鼻腔之中。`,
    );
    await me.say_and_wait(`看来明天也会是一个好天气呢。`);
    await chara_talk.say_and_wait(`是啊，希望每天都会向今天这样是个好天气。`);
    await me.say_and_wait(`是啊。欸？`);
    await era.printAndWait(`正打算附和之时才意识到从后方传来的熟悉声音。`);
    await era.printAndWait(`为了和她对话而急忙回头，却发现背后空无一人。`);
    await chara_talk.say_and_wait(`训练员君。`);
    await era.printAndWait(`突然之间被人抱住了。`);
    await me.say_and_wait(`！！！`);
    await era.printAndWait(`夜晚在微风的嬉闹下更加宁静。`);
    await era.printAndWait(
      `虽说从背后被人抱住，但也并没有更近一步，而是停留在了原地。`,
    );
    await chara_talk.say_and_wait(
      `抱歉，不是有意这样捉弄人的，只是一直以来都想这么试着做一次。`,
    );
    await era.printAndWait(`从背后轻轻抱住你的手臂离开了腰部。`);
    await era.printAndWait(`得以脱身的你重新转身看向了这位少女。`);
    await era.printAndWait(
      `比起在草场之上火红色的身影,在月光照耀下默默伫立着的丸善斯基向你露出了笑容。`,
    );
    era.printButton(`......丸善斯基`, 1);
    await era.input();
    await era.printAndWait(`虽然想要开口，却不知道该说些什么。`);
    await era.printAndWait(`只能这样默默的对视。`);
    await era.printAndWait(`......不知为何感到了害怕。`);
    await era.printAndWait(`该怎么才能与火焰共舞呢？`);
    await era.printAndWait(`该怎么才能让${chara_talk.name}注视着我呢?`);
    era.printButton(`......`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `呵呵，其实没必要这么紧张的。像正常对话一样就好了。`,
    );
    await era.printAndWait(`似乎是过于紧张的样子把她逗笑了。`);
    await chara_talk.say_and_wait(
      `虽然顾虑到他人感受也是好事，但如果不把自己的感受老老实实表达出来的话。`,
    );
    await chara_talk.say_and_wait(
      `即使想要交流，也显得很困难吧，所以tough！tough一点！。`,
    );
    await era.printAndWait(`似乎被察觉到了心底的想法。`);
    await me.say_and_wait(
      `说的也是，站在那里的是作为今后三年搭档的丸善斯基小姐吧。`,
    );
    await era.printAndWait(
      `——被那双翠蓝色的清澈双眼所鼓励，不假思索就说出来了。`,
    );
    await chara_talk.say_and_wait(
      `是的，站在这里的不是别人，正是丸善斯基姐姐我哦。`,
    );
    await me.say_and_wait(`丸善斯基小姐的眼睛真漂亮啊。`);
    await me.say_and_wait(`被这双眼睛所迷住的人一定不少吧。`);
    await me.say_and_wait(
      `而且，像这样说着鼓励着其他人的丸善斯基，迷上的人也不在少数吧。`,
    );
    await chara_talk.say_and_wait(
      `哎呀~这不是比想象之中还会说话吗？像这样作为前辈指导迷茫中的马娘和人不是很正常的事情吗♪`,
    );
    await chara_talk.say_and_wait(`更何况是接下来的作为同伴的训练员君呢。`);
    await chara_talk.say_and_wait(`嗯——接下来也要像这样的节奏好好享受才行哦。`);
    await chara_talk.say_and_wait(
      `那么，再一次，丸善斯基，作为接下来三年的同伴与担当马娘，请多多指教了♪`,
    );
    era.printButton(`请多多指教了，丸善斯基`, 1);
    await era.input();
    await era.printAndWait(
      `在充分感受到了娇嫩的肌肤与蕴藏在其中的力量后，（玩家名）紧紧地握住了这双手。`,
    );
    await era.input();
    await era.printAndWait(
      `作为你与${chara_talk.name}签约后的第一次正式见面，就这样结束了。`,
    );
    wait_flag = get_attr_and_print_in_event(4, undefined, 120) || wait_flag;
  } else if (edu_weeks === 39) {
    await print_event_name('万圣夜', chara_talk);
    await era.printAndWait(
      `将最后一份数据归档后，${me.actual_name}吐出了长长的一口气。`,
    );
    era.printButton(`终于结束了。`, 1);
    await era.input();
    await era.printAndWait(`活动着几乎麻木的双腿，冬天的夜晚比夏季更加漫长。`);
    await me.say_and_wait(`出去走走吧`, true);
    await era.printAndWait(
      `因为工作全部完成带来的成就感让${me.actual_name}的脚步变得轻快起来。`,
    );
    await era.printAndWait(
      `走出训练室，学院大厅被南瓜灯、紫色的缎带等装饰成了带着神秘气息的古堡。`,
    );
    await me.say_and_wait(`说起来今天是什么日子来着？`, true);
    await say_by_passer_by(
      `活泼的${chara_talk.get_uma_sex_title()}们`,
      `不给糖就捣蛋！`,
    );
    await era.printAndWait(
      `被打扮成幽灵狼人还有吸血鬼的${chara_talk.get_uma_sex_title()}们缠上了！`,
    );
    await me.say_and_wait(`呜哇！`);
    await era.printAndWait(
      `被躲在拐角处的${chara_talk.get_uma_sex_title()}们措不及防的吓到的${
        me.actual_name
      }摔倒在了地上。`,
    );
    await say_by_passer_by(
      `活泼的${chara_talk.get_uma_sex_title()}们`,
      `恶作剧大成功！`,
    );
    await era.printAndWait(
      `因为成功吓到路人的${chara_talk.get_uma_sex_title()}们欢笑着跑开了，现场只留下了作为受害者的${
        me.actual_name
      }。`,
    );
    await me.say_and_wait(`打扮成这样，好像是什么节日来着？`);
    await era.printAndWait(
      `努力整理着思绪的${me.actual_name}拍了拍屁股上的灰尘，站了起来。`,
    );
    await me.say_and_wait(`去学院外面看看吧`);
    await era.printAndWait(`打定了主意之后，${me.actual_name}离开了大厅。`);
    era.drawLine();
    await say_by_passer_by(
      `打扮成木乃伊的${chara_talk.get_uma_sex_title()}们`,
      `不给糖就捣蛋!`,
    );
    await era.printAndWait(
      `似乎是模仿着西洋的万圣夜，特雷森学院的${chara_talk.get_uma_sex_title()}们也在商业街附近挨家挨户敲起了门。`,
    );
    await era.printAndWait(`店主们也会拿出准备好的糖果作为招待。`);
    await me.say_and_wait(`原来今天是圣诞节吗？`);
    await era.printAndWait(
      `看着巨大的蝙蝠与南瓜灯招牌的入口，${me.actual_name}陷入了沉思之中。`,
    );
    await chara_talk.say_and_wait(`HAPPY HALLOWEEN!`);
    await era.printAndWait(`不知何时被人轻拍了肩膀。`);
    await me.say_and_wait(`谁？！`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}万圣夜快乐♪。`,
    );
    await era.printAndWait(
      `身穿深紫色女巫服cosplay的${chara_talk.name}带着充裕的笑容看着${me.actual_name}。`,
    );
    await me.say_and_wait(`没想到会在这里碰到${chara_talk.name}，玩得高兴吗？`);
    await era.printAndWait(
      `不断抖动着的耳朵，像是顽皮的妖精一样活泼的尾巴，似乎已经不言而喻了。`,
    );
    await chara_talk.say_and_wait(
      `很高兴哦，下次的话，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }也一起来吧♪。`,
    );
    await me.say_and_wait(`嗯......`);
    await era.printAndWait(
      `打扮成各种鬼怪的${chara_talk.get_uma_sex_title()}们都是未成年的${
        chara_talk.get_teen_sex_title
      }，对于一个成年人来说做这种事的话还是。`,
    );
    await me.say_and_wait(`不如说非常荣幸。`);
    await era.printAndWait(
      `像这样将积攒下来的压力放松下来，全身心融入这份欢乐的海洋之中。`,
    );
    await chara_talk.say_and_wait(`呵呵♪那就说好了哦？`);
    await me.say_and_wait(`一言为定。`);
    await me.say_and_wait(`就当是放松吧。`, true);
    await say_by_passer_by(
      `打扮成巫妖的${chara_talk.get_uma_sex_title()}`,
      `前辈！这边快忙不过来了！`,
    );
    await era.printAndWait(
      `发放糖果的小摊似乎被${chara_talk.get_uma_sex_title()}们围得水泄不通的样子。`,
    );
    await chara_talk.say_and_wait(`哎呀，那我先过去了。`);
    era.printButton(`我也来帮忙`, 1);
    await era.input();
    await era.printAndWait(
      `在分发了三麻袋的糖果之后，筋疲力竭的两人度过了快乐的时光。`,
    );
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 41) {
    await print_event_name(
      `训练员与担当${chara_talk.get_uma_sex_title()}`,
      chara_talk,
    );
    await era.printAndWait(`这是十一月的某一天。`);
    await era.printAndWait(
      `${me.name}看着去年朝日杯的录像带，思考着如何利用其中的技巧帮助丸善斯基提高自己的能力。`,
    );
    await me.say_and_wait(`该说不愧是超级跑车吗。`);
    await era.printAndWait(`为奔跑而生的双腿，隐藏在优美肢体下的巨大力量。`);
    await me.say_and_wait(`看来就算不需要我也能轻松取胜啊`);
    await era.printAndWait(
      `按下暂停键，轻抿一口咖啡，冰凉的苦涩味在口中慢慢化开。\n`,
    );
    await era.printAndWait(`吱嘎。`);
    await chara_talk.say_and_wait(`训练员君我进来了。`);
    await me.say_and_wait(`看上去闪闪发光的样子，今天是遇到什么好事了吗？\n`);
    await chara_talk.say_and_wait(`呵呵~训练员君也看出来了吗？。`);
    await chara_talk.say_and_wait(
      `今天的选拨赛上，一直关注着的后辈终于克服了障碍，同样领略到了奔跑的快乐哦？\n`,
    );
    await me.say_and_wait(
      `既然丸善斯基都这么说了，我也有点想见识一下丸善斯基看好的后辈了。\n`,
    );
    await chara_talk.say_and_wait(
      `对吧对吧？后辈们成长起来的速度比想象中还要快的多呢。`,
    );
    await chara_talk.say_and_wait(
      `说不定哪天，我也会被后辈们轻松超过，就这样被远远的甩到后面去呢。\n`,
    );
    era.printButton(`之后的训练也要加油才行！`, 1);
    await era.input();
    await chara_talk.say_and_wait(`没错！之后的训练也要把油门踩到底才行！\n`);
    await chara_talk.say_and_wait(`说起来的话。`);
    await era.printAndWait(`丸善斯基像是联想到了什么，两手轻轻合拍。\n`);
    await chara_talk.say_and_wait(
      `对了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },训练结束后一起出去兜风吧?`,
    );
    await chara_talk.say_and_wait(
      `不同于其他季节，秋天的风总会带给人心情畅快的感觉呢。`,
    );
    await chara_talk.say_and_wait(
      `不过，干巴巴的讲述训练员君恐怕也感受不到吧。所以我想，训练员君就这样用身体来感受或许更好。`,
    );
    era.printButton(
      `既然丸善斯基都这么说了，我也想用感受一下秋风的感觉了。`,
      1,
    );
    await era.input();
    await me.say_and_wait(`真期待丸善斯基所说的秋风是什么感受呢？`);
    era.drawLine();
    await chara_talk.say_and_wait(`呼啊,果然像这样聆听风的声音最令人高兴呢`);
    era.printButton(`${chara_talk.name}可以开的稍微慢一点吗?`, 1);
    await era.input();
    await era.printAndWait(
      `比起第一次坐在副驾驶上被吓得几乎晕过去，现在的${me.actual_name}也慢慢适应了这种速度。`,
    );
    await me.say_and_wait(`人类比想象之中还要顽强啊。`, true);
    await me.say_and_wait(
      `在高速移动的气流之中，除了风的呼啸声以及向后飞速后退的景色。`,
      true,
    );
    await era.printAndWait(
      `既不像夏季一样，空气之中混杂着热浪的余韵，也不像冬季，空气之中混杂着寒流的碎片。`,
    );
    await era.printAndWait(`秋天的风，有一种强烈的解脱感。`);
    await era.printAndWait(
      `像是学生时代完成了最后一项作业后，放下笔松了口气。`,
    );
    await era.printAndWait(
      `或者说，被某种东西长期折磨，终于有一天终于结束的感觉。`,
    );
    await era.printAndWait(
      `从被风吹拂的脸颊开始，接着是一根根的头发，以及连接着头发的大脑，最后传递到了心中。`,
    );
    await era.printAndWait(`额外的畅快感，想要就这么无所顾忌的释放出来。`);
    await me.say_and_wait(`丸善斯基，说不定，我。`);
    await chara_talk.say_and_wait(
      `差不多快到海边了......哎呀，似乎有人比我们先来一步。`,
    );
    await era.printAndWait(`嘴巴边即将蹦出的话语，最终还是化为了沉默。`);
    await me.say_and_wait(`......是啊。`);
    era.drawLine();
    await era.printAndWait(
      `从${chara_talk.name}的副驾驶位上下来后,${me.actual_name}向远处竭力眺望，在视野之中也只有像芝麻大小的人影。`,
    );
    await era.printAndWait(
      `或许是马娘这一种族天生所具有的优势，亦或者是从尚未被海水冲散的脚印之中推断出的情况。`,
    );
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `在这片深蓝色的空间之中，丸善斯基凝视着起伏的波浪。`,
    );
    await era.printAndWait(`然后露出了寂寞的表情。`);
    await me.say_and_wait(`丸善斯基？`);
    await chara_talk.say_and_wait(`诶。`);
    await chara_talk.say_and_wait(
      `像这样和训练员君在休息日一起看海还是第一次呢。`,
    );
    await era.printAndWait(
      `带着潮湿气息的海风迎面吹拂而来，几乎让人睁不开眼睛。`,
    );
    await chara_talk.say_and_wait(`哎呀，没想到今天的风这么猛烈。`);
    await me.say_and_wait(`这样吗。`);
    await me.say_and_wait(`原来海风就是这样略带苦涩的咸味的气息吗。`);
    await chara_talk.say_and_wait(
      `嗯，略带腥味的风，同时也是依靠着海洋生存的生物的路标。`,
    );
    await chara_talk.say_and_wait(`它们就是依赖着这份特别的气息寻找着食物。`);
    await chara_talk.say_and_wait(
      `所以，从这种角度来说，这种气息成为了维系它们生存的生命线也说不定呢。`,
    );
    await me.say_and_wait(`丸善斯基一直都是温柔的大姐姐呢。`);
    await chara_talk.say_and_wait(`......哎呀，唯独不想让训练员君这么说呢♪`);
    await chara_talk.say_and_wait(`被训练员君这么说姐姐我都有点不好意思。`);
    await era.printAndWait(
      `被${me.actual_name}称赞的丸善斯基出现了稀有的可爱表情。`,
    );
    await me.say_and_wait(`感谢三女神大人的馈赠，已经吃不下了。`, true);
    await era.printAndWait(`就这样尽情的将丸善斯基可爱的模样吃得一干二净。`);
    await say_by_passer_by(`佩斯舞台`, `那边的，不会是......丸善前辈吗！`);
    await say_by_passer_by_and_wait(`佩斯舞台`, `是丸善前辈!`);
    await era.printAndWait(
      `佩斯舞台略微迟疑之后，向着${me.actual_name}们的方向跑了过来。`,
    );
    await say_by_passer_by(`佩斯舞台`, `前辈，能够见到你们真的很高兴。`);
    await era.printAndWait(`记得上次来训练室的时候，那份暖洋洋的礼物。`);
    await era.printAndWait(
      `${chara_talk.sex_code - 1 ? '她' : '他'}们亲手制作的水晶手绳现在正系在${
        chara_talk.name
      }的右手上`,
    );
    await era.printAndWait(
      `舞台似乎也注意到了这点，心情也变得愈发灿烂了起来。`,
    );
    await say_by_passer_by(
      `佩斯舞台`,
      `真是太好了！丸善前辈看起来也很喜欢我们制作的礼物呢！`,
    );
    await say_by_passer_by(
      `佩斯舞台`,
      `我也做好了成为一名赛${chara_talk.get_uma_sex_title()}参加比赛的准备,希望之后也能在赛场上碰到丸善前辈!`,
    );
    await me.say_and_wait(`真是可爱的孩子`, true);
    await chara_talk.say_and_wait(
      `哎呀,没想到后辈们已经决定超越我的背影了呢?看来与${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }签订契约还真是正确的选择。`,
    );
    await chara_talk.say_and_wait(
      `那么${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我就拭目以待了呦？`,
    );
    await say_by_passer_by(`佩斯舞台`, `嗯！我一定不会辜负丸善前辈的期待的！`);
    await chara_talk.say_and_wait(
      `那么接下来就是${chara_talk.get_uma_sex_title()}之间的悄悄话时间呦?`,
    );
    era.printButton(`算我一个！`, 1);
    era.printButton(`既然都说到这里了`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`不可以♪`);
      await chara_talk.say_and_wait(`训练员君还是稍微忍耐一下吧。`);
      await me.say_and_wait(`既然丸善都这么说了，那还是算了吧。`);
      await era.printAndWait(`丸善斯基似乎会在某些地方意外坚持的样子。`);
    } else {
      await me.say_and_wait(`说起来的话，像这样看着大海，似乎也不错。`);
    }
    await era.printAndWait(`这种时候还是自觉一点吧。`);
    await era.printAndWait(
      `波浪伴随着潮湿的海风吹向岸上的沙滩，沙滩包容了海水的冲击却跟不上海风的步伐`,
    );
    await era.printAndWait(`只能看着海风孤独的向未知的旅途前进。`);
    await say_by_passer_by(`浄风幸`, `好久不见了,${me.actual_name}`);
    await era.printAndWait(
      `突然出现在了视野之中的友人，着实吓了${me.name}一跳。`,
    );
    await me.say_and_wait(`呜哇，真是吓了我一跳。`);
    era.printButton(`是啊，已经快三个月没见了。`, 1);
    await era.input();
    await era.printAndWait(
      `上次见面的时候还带着盛夏气息的短袖，如今再次见面时却是好好考虑要不要穿毛衣衬衫的时候了。`,
    );
    await me.say_and_wait(`祝贺你，找到了接下来一起同担共苦三年的担当了。`);
    await say_by_passer_by(
      `浄风幸`,
      `那可真是多谢了,不过出道战可能要往后推一段时间了`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然我的担当平时也一直跟着团队训练员一起训练,不过两人之间还是需要一段时间来磨合。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `而且以这种半吊子的水平仓促出道的话,不管是对${chara_talk.get_uma_sex_title()}还是我来说都不是什么好主意。`,
    );
    await say_by_passer_by(`浄风幸`, `不过我们会在观众席上加油的。`);
    await era.printAndWait(`他顿了一下,然后看向了空中的月亮`);
    await say_by_passer_by(
      `浄风幸`,
      `虽然只是即兴顺着心情的变换来到了沙滩，却没想到成功的这么快,说不定我也是被三女神眷顾的人啊。`,
    );
    await say_by_passer_by(`浄风幸`, `三女神大人，谢谢你！`);
    await era.printAndWait(`他说完便向着月亮的方向拜了拜。`);
    await me.say_and_wait(
      `要献上感谢的话还是去神社参拜比较好吧？拜月亮的话，只会受到月兔青睐吧？`,
    );
    await me.say_and_wait(
      `不过说起来的话，我与${chara_talk.name}的邂逅也是三女神的指引吧`,
      true,
    );
    await say_by_passer_by(
      `浄风幸`,
      `这可不一定啊，东边的国家不是一直都有传闻说有不老不死的仙人住在了月亮上吗？`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `而且说起来，虽然人类和马娘把整个世界都踏遍了，不过还是没有找到三女神的样子。`,
    );
    await say_by_passer_by(`浄风幸`, `这么的话，三女神其实不在地球上吧！`);
    await me.say_and_wait(`诶？`);
    await say_by_passer_by(
      `浄风幸`,
      `既然不在地球的话，其他星球又离地球太远了，怎么想都只有月亮了吧！`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `所以我向着月亮参拜其实也就是向住在月球宫殿里的三女神大人献上感激之情！`,
    );
    await say_by_passer_by(`浄风幸`, `三女神大人！非常感谢！`);
    await era.printAndWait(`他就这样以沙滩作为拜垫，空着手向月亮献上了祝福。`);
    await era.printAndWait(`你决定:\n`);
    era.printButton(`听起来似乎很有道理的样子`, 1);
    era.printButton(`不，怎么想都有点奇怪吧`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await era.printAndWait(`是啊，我怎么没想到。难道他真的是天才？`);
      await era.printAndWait(`既然这样的话。`);
      await me.say_and_wait(`三女神大人！感谢你一直以来的指点，真的非常感谢！`);
      await say_by_passer_by(`浄风幸`, `请赐给我一年份的胡萝卜！`);
      await me.say_and_wait(`我想要每个月都涨工资！`);
      await era.printAndWait(`你也顺势跪在了拜垫（沙滩）上，向着月亮祈祷。`);
      await era.printAndWait(
        `如果这个时候有人站在旁边的话，就会发现两人跪在沙滩上神态狂热的望着月亮，嘴里喃喃说着什么。`,
      );
      await era.printAndWait(
        `一定会认为是某种不可告人的神秘仪式吧？一定是吧！`,
      );
    } else {
      await me.say_and_wait(`不，再怎么说这也有点奇怪吧？`);
      await era.printAndWait(`好险，差一点就被他绕进去了。`);
      await say_by_passer_by(`浄风幸`, `三女神大人是不会计较这种事情的！`);
      await say_by_passer_by(
        `浄风幸`,
        `而且，比起死气沉沉的样子，果然还是这样比较有意思吧！`,
      );
      await say_by_passer_by(`浄风幸`, `世界其实也很有趣，不是吗？`);
    }
    await era.printAndWait(
      `波浪拍打着沙滩,然后被沉默的沙砾分解成了无数洁白的泡沫`,
    );
    await era.printAndWait(
      `浪花虽然注定逝去,但在从波浪分解成泡沫的一瞬间,它也曾闪耀过。`,
    );
    await era.printAndWait(
      `对于选择出道的${chara_talk.get_uma_sex_title()}们来说也是这样,${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们将人生最宝贵的三年寄托在了训练员身上。`,
    );
    await era.printAndWait(
      `相比于训练员的长达数十年的职业生涯,短短的三年不过像泡沫一样短暂。`,
    );
    await era.printAndWait(
      `所以这就意味着可以将生涯中初次遇到的${chara_talk.get_uma_sex_title()}作为练手的对象吗?`,
    );
    await era.printAndWait(
      `不,作为训练员来说,我们的能力注定不足,很可能会让将赌注压在我们身上的${chara_talk.get_uma_sex_title()}们失望。`,
    );
    await era.printAndWait(`即使如此,我们还是要选择签订契约。`);
    await era.printAndWait(`因为${chara_talk.get_uma_sex_title()}们需要它。`);
    await era.printAndWait(`正因为如此,对训练员来说最重要的就是一颗虔诚的心`);
    await era.printAndWait(
      `"纵使有身败名裂的可能,作为训练员也要和担当一起闪耀。"用这颗虔诚的心,来救赎自己训练过程中的一切丑陋与不足之处。`,
    );
    await chara_talk.say_and_wait(`那边的训练员们,差不多是回寝的时间了`);
    await era.printAndWait(`${chara_talk.name}向${me.get_couple_title()}招手`);
    await say_by_passer_by(`浄风幸`, `非常感谢!`);
    await me.say_and_wait(`不知道他们做好面对疾风的准备了吗，真可怜。`, true);
    await era.printAndWait(
      `等到那对搭档系好安全带后，带着幸灾乐祸的想法的${me.actual_name}面带微笑看着他们。`,
    );
    await chara_talk.say_and_wait(`那么出发咯`);
    await say_by_passer_by(`浄风幸`, `非常感谢!`);
    await say_by_passer_by(`浄风幸`, `呜啊啊啊!`);
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `呀啊啊啊啊！`);
    await era.printAndWait(`后排已经变成了阿鼻地狱般的惨状`);
    await chara_talk.say_and_wait(`大家看到了风吗?`);
    await me.say_and_wait(`呜啊啊啊啊啊`);
    await era.printAndWait(
      `忘了自己也在车上的${me.actual_name}得到了应有的惩罚。`,
    );
    await era.printAndWait(
      `因为过于享受的${chara_talk.name}不小心突破了自己的极限,下车后三个人互相搀扶着走进了学院`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 10, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 12 && event_marks.sister_annoyance === 1) {
    // 训练员鼓励丸善斯基，丸善斯基在训练员相信自己的时候重整旗鼓
    event_marks.sister_annoyance++;
    await print_event_name(
      `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}的烦恼`,
      chara_talk,
    );
    await era.printAndWait(`天台\n`);
    await era.printAndWait(`在整理完今天需要处理的资料后，你来到了天台上。`);
    await era.printAndWait(
      `比赛后的丸善斯基看起来有点奇怪，说话的时候也有些心不在焉的样子。`,
    );
    await era.printAndWait(
      `虽然也有错觉的可能，不过你想要以友人的身份更加深入了解她的问题。`,
    );
    await me.say_and_wait(`如果能一口气全部解决的话就再好不过了。`);
    await era.printAndWait(
      `相信以丸善斯基的能力，不论多大的挫折都能轻松度过吧。`,
    );
    await chara_talk.say_and_wait(`训练员君已经在这里等很久了吗？`);
    await era.printAndWait(
      `思绪被丸善斯基的话语所打断，而此时离约定的时间还有十分钟左右的充裕。`,
    );
    await me.say_and_wait(`诶？啊，正巧我也是刚到不久。`);
    await era.printAndWait(`身着白色连衣裙的马娘出现在了天台之上。`);
    await chara_talk.say_and_wait(`训练员君比想象之中还要急切的样子呢。`);
    await me.say_and_wait(
      `是啊，因为知道今天是个好天气所以才想和丸善斯基一起度过。`,
    );
    await me.say_and_wait(
      `而且仔细看的话，丸善斯基打扮得比平常还要美丽呢。而且，好像有一股茉莉花香的味道。`,
    );
    await chara_talk.say_and_wait(
      `毕竟是训练员君难得亲自邀请嘛，不仔细打扮一下就出门可不行。`,
    );
    await me.say_and_wait(`这么说起来，反而是我这边有些失礼了。`);
    await era.printAndWait(
      `不知该从何开口，你陷入了沉默之中，最后反而是丸善斯基先提出了话题。`,
    );
    await chara_talk.say_and_wait(
      `训练员君平时一直努力的身影，姐姐我很感动哦。`,
    );
    await chara_talk.say_and_wait(
      `原本一直在思考应该怎么让训练员君放松的样子，没想到训练员君主动提出了这个要求。`,
    );
    await chara_talk.say_and_wait(
      `其实的话，没必要一直紧绷着神经不放哦，多依赖一下姐姐我吧。`,
    );
    await era.printAndWait(`被丸善斯基鼓舞的神经也慢慢放松了下来。`);
    await me.say_and_wait(`我知道了，接下来的话也请丸善斯基姐姐多关照了。`);
    await me.say_and_wait(`那么，该说正事了。`);
    await era.printAndWait(
      `原本因紧张过头而一片空白的大脑也慢慢整理好了思路。`,
    );
    await me.say_and_wait(`请让我多了解一点你。`);
    await chara_talk.say_and_wait(
      `我不是和训练员君一直都呆在一起吗？这又从何说起呢？`,
    );
    await me.say_and_wait(`不，不是这样的。`);
    await era.printAndWait(`你坚决的摇了摇头，正视着她的双眼。`);
    await me.say_and_wait(`虽然我也知道，打听别人的隐私不是什么好事。`);
    await me.say_and_wait(
      `不过，在训练室休息的时候，在偶然间看到的丸善斯基消沉的样子。`,
    );
    await me.say_and_wait(
      `我很难过，像是一块重石压在了心头之上，这个时候我才发现，其实我对丸善斯基的了解还不够多。`,
    );
    await me.say_and_wait(`所以，这不是请求，而是一种宣告。`);
    era.printButton(`我想多了解一点有关丸善斯基的事情`, 1);
    await era.input();
    await era.printAndWait(
      `你看到丸善斯基的瞳孔突然放大，快速的眨了眨眼睛，想要逃离的你目光但又迅速恢复。`,
    );
    await chara_talk.say_and_wait(`不以同样的态度回复的话可不行呢。`);
    await chara_talk.say_and_wait(`训练员君想知道什么？`);
    await me.say_and_wait(`我想知道的是，丸善斯基最近为什么这么失落。`);
    await me.say_and_wait(
      `是感受不到快乐了吗？还是因为感受到了奔跑的赛马娘们心中的自暴自弃？`,
    );
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `${chara_talk.name}陷入了迟疑之中，她在思考究竟要不要把自己的真实想法告诉我。`,
    );
    await chara_talk.say_and_wait(`......抱歉。`);
    await era.printAndWait(`${chara_talk.name}的声音似乎显得很失落。`);
    era.printButton(`不，我这边才是。`, 1);
    await era.input();
    await me.say_and_wait(`实际上我才是应该道歉的一方，是我太急于求成了。`);
    await me.say_and_wait(`我会一直等你，等你主动向我倾诉的那一天的到来。`);
    await me.say_and_wait(`所以，请挺起胸膛来，你是我见过的最美丽的马娘了。`);
    await chara_talk.say_and_wait(`谢谢你，训练员君。`);
    await era.printAndWait(`丸善斯基恢复了之间的状态。`);
    await chara_talk.say_and_wait(`不愧是可靠的成年人呢。`);
    await chara_talk.say_and_wait(
      `现在的感觉就像，一直以来照顾的弟弟突然提出要照顾自己了。`,
    );
    await chara_talk.say_and_wait(`作为姐姐我心情可真是复杂呢——`);
    await era.printAndWait(
      `${chara_talk.name}像是看着一起长大的弟弟一样的慈爱眼神。`,
    );
    await chara_talk.say_and_wait(`那么，我们约好了——`);
    await chara_talk.say_and_wait(`无论发生了什么，都要和姐姐我商量哦？`);
    era.printButton(`无论发生了什么，我都会和丸善斯基说清楚的。`, 1);
    await era.input();
    await me.say_and_wait(
      `毕竟作为可靠的大姐姐，不管遇到了什么问题，都会轻松解决掉吧。`,
    );
    await chara_talk.say_and_wait(`那就这么说定了。`);
    await me.say_and_wait(`我这边也是`);
    await chara_talk.say_and_wait(`说起来今天天气不错，与小塔一起去兜风吧——`);
    await me.say_and_wait(`好啊。`);
    await me.say_and_wait(`是不是忘了什么。`, true);
    await era.printAndWait(
      `谈笑之间你们走向了小塔。随后，惨叫声响彻了特雷森。`,
    );
  } else if (edu_weeks === 47 + 16) {
    await print_event_name(`晚上好，是丸善斯基哦`, chara_talk);
    await era.printAndWait(`公寓。`);
    await me.say_and_wait(`接下来的训练计划就暂时写到这里吧`, true);
    await era.printAndWait(
      `在柔和的灯光照耀下，${me.actual_name}坐在电脑前处理着假日堆积下来的事务，不同于白天特雷森处处朝气蓬勃的热情呐喊，夜晚的训练员宿舍显得格外静谧。`,
    );
    await me.say_and_wait(`已经快到12点了吗`, true);
    await era.printAndWait(
      `将最后一份文件处理完毕发给理事长后，${me.actual_name}揉了揉疲惫的双眼，全身趴在了沙发之上。`,
    );
    await me.say_and_wait(`洗个澡然后好好睡一觉吧`, true);
    await era.printAndWait(
      `紧紧地闭上双眼，似乎要将一天的疲惫都这么消化掉。然后深深吸进一大口气，将一天的烦躁从身体之中排除。`,
    );
    await era.printAndWait(`嗡嗡嗡`);
    await me.say_and_wait(`这种时候骚扰电话也不会打过来吧`, true);
    await era.printAndWait(
      `虽然身体一百个不想动，但作为社畜的本能还是使你打开了手机。`,
    );
    await me.say_and_wait(`${chara_talk.name}？`);
    await era.printAndWait(
      `虽然疑惑为什么负责的马娘会在深夜打过来电话，但你还是毫不犹豫地接通了。`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，今晚的天气可真不错呢~`,
    );
    await me.say_and_wait(`我这边的话除了看惯了的风景以外也没有什么特别的地方`);
    await me.say_and_wait(`以及，`);
    await era.printAndWait(
      `你深深地吸了一大口气，避免尚未排除的烦躁不小心释放出来。`,
    );
    era.printButton(`熬夜的话皮肤会变皱的，赶快回去睡觉！`, 1);
    await era.input();
    await chara_talk.say_and_wait(`真是的！训练员君尽说些扫兴的话><。`);
    await era.printAndWait(
      `看着手机上的文字表情，你花了整整十秒才从回忆中想起它的用法。`,
    );
    await me.say_and_wait(`说起来，丸善斯基怎么突然打电话过来了？`);
    await chara_talk.say_and_wait(
      `睡了一觉醒来后发现再也睡不着了，所以干脆来找训练员君。`,
    );
    await me.say_and_wait(`这样吗？`);
    await era.printAndWait(
      `好像提到了什么不得了的词语，不过你还是继续听了下去。`,
    );
    await chara_talk.say_and_wait(
      `虽然一开始睡不着时很烦躁，不过看着外面的月亮，心情也慢慢好转起来了，特别是从特雷森经过时夜晚的微风所带来的丝丝凉意，更是让人心情雀跃呢⭐`,
    );
    era.printButton(`该不会——`, 1);
    await era.input();
    await era.printAndWait(
      `还没等你换好训练员制服时，暂时居住的房门被打开了。`,
    );
    await chara_talk.say_and_wait(`晚上好，训练员君`);
    await me.say_and_wait(`诶？`);
    await era.printAndWait(`却从她的笑意之中看到了惊愕的自己`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`,
    );
    era.drawLine();
    await era.printAndWait(
      `在经过了一顿说教之后，丸善斯基在沙发上乖乖地正坐着。`,
    );
    await chara_talk.say_and_wait(`非常感谢♪`);
    await era.printAndWait(
      `随后，你和心血来潮的客人一同收拾着堆放在桌子上的杂物。将速溶红茶递给了她。`,
    );
    await era.printAndWait(
      `看着小口小口吮吸着红茶的丸善斯基。你忍不住叹了口气。`,
    );
    await era.printAndWait(
      `这么晚让${chara_talk.sex}一个人回去也有些危险，但也不能随便收留学生留宿。`,
    );
    await me.say_and_wait(`怎么办才好？`, true);
    await chara_talk.say_and_wait(`那个，训练员君？`);
    await era.printAndWait(`丸善斯基在等待着答复，这里的话还是\n`);
    era.printButton(`让她今晚留下来过夜`, 1);
    era.printButton(`坚持送她回去`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(
        `${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }脸色看起来不太好哦。`,
      );
      await me.say_and_wait(
        `刚刚在苦恼下一周的训练方案有什么需要改进的地方，所以脸色不太好。`,
        true,
      );
      await chara_talk.say_and_wait(`训练员君辛苦了。`);
      //${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}平时不会说这么多话，所以一定是在隐瞒什么
      await era.printAndWait(
        `被丸善斯基习惯性的抚摸着脑袋，虽然你一开始非常抗拒，但时间长了剩下的只有哼哼两声作为训练员身份最后的矜持了。`,
      );
      await chara_talk.say_and_wait(`抱歉了，以后不会再这么做了。`);
      await era.printAndWait(
        `相比于之前更像是礼节性的敷衍，这次的道歉里更多的还是对让你担忧的愧疚。`,
      );
      await era.printAndWait(
        `你看着${chara_talk.sex}可怜的样子，心还是狠不下来，所以又叹了口气。`,
      );
      await me.say_and_wait(
        `这么晚回去的话我也不放心，今天晚上就在这里过夜吧。`,
      );
      await era.printAndWait(
        `什么狗仔队啊，第二天的头条绯闻啊，手纲小姐冷漠的眼神和训斥还有一个月的工资啊，都无所谓了。`,
      );
      await me.say_and_wait(`你睡我的床吧，我在沙发上睡一晚。`);
      await chara_talk.say_and_wait(`唔——这样有点可惜啊。`);
      await me.say_and_wait(`深夜的主犯要求真是多啊！`);
      await chara_talk.say_and_wait(`非-常-抱-歉！`);
      await me.say_and_wait(`不要用这种迷惑的说法。`);
      await era.printAndWait(
        `像是会出现在galgame里才会出现的恋爱喜剧发生在了现实，明明是应该高兴的事情。`,
      );
      await era.printAndWait(
        `但你一想到说不定已经有全副武装的狗仔队拍到了深夜你接待丸善斯基进门，第二天头条发布，之后被手纲小姐用冷漠的眼神看着的样子还有最重要的工资飞了。`,
      );
      await me.say_and_wait(`......`);
      await era.printAndWait(`你度过了相当煎熬的一个晚上。`);
    } else {
      await me.say_and_wait(`......丸善斯基，我还是送你回去了吧。`);
      await chara_talk.say_and_wait(`诶？真的吗？`);
      await era.printAndWait(
        `经过一番激烈的拉扯后，你最终说服了丸善斯基回到所呆的公寓之中。`,
      );
      await era.printAndWait(`殊不知这种行为却在她的意料之中。`);
      await chara_talk.say_and_wait(
        `这么晚了，训练员君还是在我这边留宿吧，毕竟，这边的狗仔队意外的很多呢。`,
      );
      await chara_talk.say_and_wait(`刚才的争执声应该把他们都吵醒了吧？`);
      await era.printAndWait(
        `这边的训练员君，你也不想第二天上娱乐杂志的头条吧？`,
      );
      await era.printAndWait(`你突然意识到了这才是真正的陷阱。`);
      await chara_talk.say_and_wait(`那么，训练员君。晚安！`);
      await era.printAndWait(
        `你盖着丸善斯基备用的毛毯，在沙发上度过了一个晚上。`,
      );
      await era.printAndWait(
        `第二天，关于你和嗅到了大新闻气息的狗仔队斗智斗勇那就是另一场冒险了。`,
      );
    }
  } else if (edu_weeks === 47 + 25 && event_marks.girls_blue === 1) {
    event_marks.girls_blue++;
    await print_event_name(
      `${chara_talk.get_teen_sex_title()}的忧郁`,
      chara_talk,
    );
    await era.printAndWait(`空教室`);
    await era.printAndWait(`瞒着丸善斯基，你前往了那张小纸条上约定的地方。`);
    await era.printAndWait(`比约定的时间稍稍晚了5分钟，你推开了教室的大门。`);
    await era.printAndWait(`虽说是多年未用的空教室。`);
    await era.printAndWait(`空气中却没有想象中的沉闷感。`);
    await era.printAndWait(`也许是刚下完雨的关系。`);
    await era.printAndWait(`薄薄的霭气依然流连于远处的训练场。`);
    await say_by_passer_by(`马娘`, `终于来了吗？丸善前——`);
    await era.printAndWait(`映入你眼帘的是，曾经在观众席向你道谢的身影。`);
    await me.say_and_wait(`抱歉，丸善斯基有事来不了了。`);
    await say_by_passer_by(`马娘`, `......怎么会，一定是`);
    await era.printAndWait(`马娘直直的瞪着你——`);
    await era.printAndWait(
      `奇怪的是，比起愤怒的样子，似乎更像是在寻求着什么一样。`,
    );
    await me.say_and_wait(`抱歉了。`, true);
    await era.printAndWait(
      `说到底从始至终都是我为了满足个人的欲望而犯下的过错。`,
    );
    await me.say_and_wait(
      `冷静一点，我也是刚刚才知道的，丸善斯基不久之前捡到了一张纸条——\n`,
    );
    await chara_talk.say_and_wait(`无论发生了什么，都要和姐姐我商量哦？`);
    await era.printAndWait(`大脑很自然地回想起了和丸善斯基约定过的誓言。`);
    await era.printAndWait(`就这样被自我厌恶所折磨。`);
    await me.say_and_wait(
      `然后有些纠结的跟我说，还有一名马娘跟她约定了要在天台之上见面。`,
    );
    await me.say_and_wait(`所以,抱歉了。`);
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `不知道对方接下来会做什么，虽然想要逃跑，但是，如果让她就这么回去告诉丸善斯基的话——`,
    );
    await era.printAndWait(`就这样被好奇心诱惑进了黑暗的深处。`);
    await me.say_and_wait(`只能硬着头皮继续下去了。`);
    await era.printAndWait(
      `虽然一开始汹涌的情感几乎将自己淹没，但真的到了最高潮时，内心反而变得一片平静。`,
    );
    await me.say_and_wait(
      `抱歉，是我自己主动要求的。作为丸善斯基的训练员，我必须要解决担当的烦恼。`,
    );
    await me.say_and_wait(`虽然不如丸善斯基，不过作为训练员——。`);
    await say_by_passer_by(`马娘`, `请问您对于丸善斯基是怎么看的？`);
    await me.say_and_wait(`诶？`);
    await say_by_passer_by(`马娘`, `请问您对丸善斯基的印象是？`);
    await era.printAndWait(`胸中悄然涌出一份感觉。`);
    await era.printAndWait(`焦躁苦闷的悔意，袭上心头。`);
    await me.say_and_wait(`我认为`);
    era.printButton(`从可靠，值得信赖的角度说`, 1);
    era.printButton(`从温柔，值得托付的角度说`, 2);
    era.printButton(`从前辈，后辈之间的关系说`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await me.say_and_wait(`我认为丸善前辈是一个可靠的——`);
      await say_by_passer_by(`马娘`, `抱歉，我想要的不是这个答案。`);
      await say_by_passer_by(
        `马娘`,
        `作为上次帮助过我的回报，我不会和丸善前辈说的，这位训练员先生。`,
      );
      await era.printAndWait(
        `马娘微微躬身之后，离开了空教室，这里又只剩下了你一个人。`,
      );
      event_marks.happiness_day++;
      era.set('flag:强制BE', 4);
    } else if (ret1 === 2) {
      await me.say_and_wait(`我认为丸善前辈是很温柔——`);
      await say_by_passer_by(`马娘`, `抱歉，我想要的不是这个答案。`);
      await say_by_passer_by(
        `马娘`,
        `作为上次帮助过我的回报，我不会和丸善前辈说的，这位训练员先生。`,
      );
      await era.printAndWait(
        `马娘微微躬身之后，离开了空教室，这里又只剩下了你一个人。`,
      );
      event_marks.happiness_day++;
      era.set('flag:强制BE', 4);
    } else if (ret1 === 3) {
      await era.printAndWait(
        `可靠也好，温柔也好，恐怕都只是丸善斯基在我面前所展现的表象。`,
      );
      await era.printAndWait(
        `如果从马娘的角度来考虑，不，是她所期望的名为丸善斯基的偶像。`,
      );
      await me.say_and_wait(
        `我认为丸善斯基是一个对于后辈很关照、会尽可能给予后辈帮助的...偶像。`,
      );
      await say_by_passer_by(`马娘`, `为什么，是偶像？`);
      await me.say_and_wait(
        `丸善斯基渴望着能够超过她的背影，她希望后辈们在看到她的奔跑之后，能够迸发出青春的活力。`,
      );
      await me.say_and_wait(
        `企及她的背影，超越她，在赛场上击溃她，还有，最后的——能够自由自在的享受着清新的空气。`,
      );
      await say_by_passer_by(`马娘`, `......是啊，丸善前辈就是这样的人。`);
      await say_by_passer_by(
        `马娘`,
        `既然是丸善前辈的训练员，而且，之前在赛马场上也帮助过我，所以，我觉得`,
      );
      await say_by_passer_by(
        `马娘`,
        `说不定，也许，跟你说会比和丸善前辈说出来更好也说不定？`,
      );
      await era.printAndWait(
        `马娘站在了靠窗的为止，右手扶着窗栏，眼神在草场与中庭之间游移，似乎是在追逐着一份答案，又像是在逃避着什么一样。`,
      );
      await say_by_passer_by(`马娘`, `我，打算放弃成为赛马娘了。`);
      await say_by_passer_by(`马娘`, `很久以前，我就知道自己不适合当赛马娘。`);
      await say_by_passer_by(
        `马娘`,
        `但是，被丸善斯基鼓励了，就因为那份鼓励，我一直坚持到了现在。`,
      );
      await say_by_passer_by(
        `马娘`,
        `但是，赛马娘不是努力就能取得成功的，童话般的地方。`,
      );
      await say_by_passer_by(
        `马娘`,
        `别说G1了，就连G2对我来说都是一道不可逾越的天堑，不管怎么努力，对手总有比你更加优越的，更加有天赋的。`,
      );
      await say_by_passer_by(
        `马娘`,
        `看着在胜者舞台中央享受着鲜花与赞美的第一，作为败者的我们，如果不是以入着的成绩，那么败者的努力就毫无意义。`,
      );
      await say_by_passer_by(
        `马娘`,
        `不管是白天还是下雨，明明起得比谁都早，明明努力到几乎失去知觉的程度，但我还是失败了。`,
      );
      await say_by_passer_by(
        `马娘`,
        `有的时候，稍微，只是稍微，会对曾经鼓励过我的丸善前辈有一种阴暗的感情，想要拽着她的领子，就这样把她按在地上，大声质问她。`,
      );
      await say_by_passer_by(
        `马娘`,
        `如果当初的话，你没有鼓励我，说不定我也不会坚持到现在，伤痕累累了。`,
      );
      await era.printAndWait(
        `似乎是要将压抑已久的郁闷彻底释放出来，马娘带着异常的亢奋情感将心中的苦闷彻底释放了出来。`,
      );
      await era.printAndWait(
        `夜色如墨，几乎看不清她的表情，但白月如镜，却将她的泪珠如珍珠滴在玉盘之上，发出了滴滴答答的声音。`,
      );
      await say_by_passer_by(
        `马娘`,
        `抱歉，我太激动了，谢谢你听我发泄，那么再见了，训练员。`,
      );
      await era.printAndWait(`说罢，再也控制不住感情的马娘离开了空教室。`);
      await me.say_and_wait(`你也是被。`);
      await era.printAndWait(`你沉思良久。`);
    }
    await chara_talk.say_and_wait(
      `如果训练员君遇到了什么烦恼的话，要和姐姐我说清楚哦？`,
    );
    await era.printAndWait(
      `像是遥远的地方传来，又像是回荡在这空虚的教室之中。`,
    );
    await era.printAndWait(`让你无法挥去胸中这股暧昧无形的不安。`);
  } else if (edu_weeks === 47 + 31) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`水与油`, chara_talk);
    await era.printAndWait(
      `所幸这段时间下来，${chara_talk.name}并没有落下原本的训练。`,
    );
    await era.printAndWait(`在这份安慰之下，心中稍微轻松了一点。`);
    await era.printAndWait(`你将视线从工作上挪开，站起身打了一个哈欠。`);
    await era.printAndWait(
      `沙滩彷佛被一层神秘的薄纱笼罩，不远处，马娘们气势高涨地绕着沙滩进行体能训练。`,
    );
    await me.say_and_wait(`已经这么晚了啊。`);
    await era.printAndWait(
      `在那次庙会之后，你与丸善斯基之间的关系似乎更近了一步。`,
    );
    await era.printAndWait(`就像是终于得到了进入她内心深处的许可一样。`);
    await me.say_and_wait(`丸善斯基。`);
    await era.printAndWait(
      `无论如何应该和她好好交流一遍，而且，也许机会只有一次。`,
    );
    await era.printAndWait(`所以，你决定`);
    era.printButton(`寻找丸善斯基`, 1);
    era.printButton(`寻找丸善斯基`, 2);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `夕阳的余晖洒在沙滩上，金色的光芒与细腻的沙粒交织，仿佛整个沙滩都被镀上了一层金辉。。`,
    );
    await era.printAndWait(`不知为何，焦躁感逐渐消失了。`);
    await era.printAndWait(
      `脚趾与沙粒之间的摩擦带来的阵阵酥麻感很快转化为了一种快感，心情也随之变得高涨起来。`,
    );
    await era.printAndWait(
      `不远处站在橙红与深蓝交界处的人影，就是马娘们告诉你的丸善斯基了吧。`,
    );
    await era.printAndWait(`你所注视的人影似乎也注意到了你的到来。然后——`);
    await era.printAndWait(`声音被海浪悄然融化。`);
    await era.printAndWait(
      `海浪轻轻拍打着岸边，一进一退的波浪声，像是在诉说一天的故事。`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(`训练员君！这边的水很凉哦！`);
    await era.printAndWait(`丸善斯基高兴的挥着手。`);
    await me.say_and_wait(`丸善斯基。`);
    await era.printAndWait(
      `你略带复杂的看向了丸善斯基，然后脱下了鞋，赤足走向了大海。`,
    );
    await era.printAndWait(
      `比起冰凉的感觉，你最先感到的是一种若有若无的阻力。`,
    );
    await era.printAndWait(
      `不过随着有意识的向前靠近，这种不适感也慢慢消退了。`,
    );
    era.printButton(`夏天的感觉怎么样？`, 1);
    era.printButton(`海水的感觉是不是very cool？`, 2);
    await era.input();
    await chara_talk.say_and_wait(
      `不止是身体变得凉爽起来了，就连这颗炽热的心也变得一下子平静许多了呢。`,
    );
    await me.say_and_wait(
      `看着丸善斯基欢快玩耍的样子，真是让人不禁期待着明天的到来呢。`,
    );
    await chara_talk.say_and_wait(`明天也会是一个晴朗的好天气吧。`);
    await era.printAndWait(
      `少女看向了海滩之上，在傍晚也在坚持着练习的马娘们。`,
    );
    await me.say_and_wait(
      `也许只有在失去某物，在痛苦之中辗转反侧，才会刻骨铭心的意识到到自己之前是多么傲慢地挥霍一切吧。`,
    );
    await chara_talk.say_and_wait(
      `......只有这样，在痛苦与迷茫过后，呕心沥血出来的某物才会散发出真正的光芒吧。`,
    );
    await chara_talk.say_and_wait(
      `从迷茫与痛苦化为觉悟的那个瞬间，我一直在期待着那一天的到来。`,
    );
    await era.printAndWait(`说完，两人陷入了沉默。随后，你率先开口道`);
    await me.say_and_wait(`丸善斯基，可以听我说吗？`);
    await chara_talk.say_and_wait(
      `我已经被训练员君从女神的宝座上拉下来了，这次训练员君难道想做什么色色的事情吗？`,
    );
    await era.printAndWait(
      `看着因为害怕而微微颤抖（？）的丸善斯基。你不免因为之前的过激发言老脸一红`,
    );
    era.printButton(`咳咳，实际上我有事打算告诉你。`, 1);
    await era.input();
    await era.printAndWait(
      `为了维持作为训练员的矜持（事到如今这种东西真的还有吗），你整理好了姿态后`,
    );
    era.printButton(`请再让我看到闪耀的背影吧！`, 1);
    era.printButton(`无论如何，请让那个背影，那股风，再次吹拂吧`, 2);
    await era.input();
    await chara_talk.say_and_wait(`！诶？就算是训练员君的要求，这样也`);
    await me.say_and_wait(
      `不，我知道的。不对，不止是我，我知道的，还有我不知道的人们，都在期待的那一刻。`,
    );
    era.drawLine();
    await say_by_passer_by(
      `浄风幸`,
      `参与选拔的孩子们都很努力的奔跑着，但我依然觉得缺了什么。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `在看了三组${chara_talk.get_uma_sex_title()}的选拔之后，正当我准备离开之时，一阵轻柔的风吹拂过我的脸庞`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `现在想想也许是三女神在指引我一样，我决定再次坐下看完最后一组。\n\n`,
    );
    await chara_talk.say_and_wait(`就算训练员君这么说\n\n`);
    era.printButton(`之后就看到了${chara_talk.name}吗？`, 1);
    await era.input();
    await say_by_passer_by(
      `浄风幸`,
      `不，一直坐到最后一组结束${
        chara_talk.sex_code - 1 ? '她' : '他'
      }也没有出现。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `当时的我怀疑自己是个傻子，又安慰自己起码多见识了一下各种${chara_talk.get_uma_sex_title()}之间的不同。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `按照之前的习惯整理完笔记之后准备离开时，却与${
        chara_talk.sex_code - 1 ? '她' : '他'
      }擦身经过了。\n\n`,
    );
    await chara_talk.say_and_wait(
      `带着努力一定会成功的幻想，不是总会被现实所打破吗？\n\n`,
    );
    await say_by_passer_by(`浄风幸`, `这名马娘说不定有我一直追寻着的目标。`);
    await say_by_passer_by(
      `浄风幸`,
      `也许是直觉还是什么神秘的东西，我觉得这名${chara_talk.get_uma_sex_title()}不同寻常。`,
    );
    await me.say_and_wait(
      `不，比起最终的结果，人们为了逃避痛苦，却在最终的时刻发现，在追逐梦想的过程中，最宝贵的是意义。\n\n`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `在向身旁路过的${chara_talk.get_uma_sex_title()}打听之后，才知道${
        chara_talk.sex_code - 1 ? '她' : '他'
      }叫${chara_talk.name}，预备在明天早上参加选拔。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `在本子上默默记下了这个信息之后，第二天我又来到了训练场。`,
    );
    await me.say_and_wait(`于是遇到了丸善斯基吗？`);
    await say_by_passer_by(
      `浄风幸`,
      `是的，之后我看到了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }奔跑时的背影。现在回想起来，记得这么清楚，说不定都是因为当时不知不觉间热泪盈眶的缘故吧。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然因为嫉妒而咬牙切齿，但我明白，这份嫉妒，是对着没能到达那份更高的领域的自己的叹息罢了。\n\n`,
    );
    await me.say_and_wait(
      `而且，就算是这样，与其厌恶着这样的自己，在迷茫与痛苦之后，疲惫不堪的人们才会关注被世人称作美的物。\n\n`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `${chara_talk.sex_code - 1 ? '她' : '他'}却因纯粹的感受而轻而易举的到达了。`,
    );
    await say_by_passer_by(`浄风幸`, `背影不知不觉与马娘重合在了一起。`);
    await me.say_and_wait(
      `\n\n就这样，期待着，期盼着，祈祷着自己的迷茫终于明了的时刻。\n\n`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `于是就这样握紧了拳头，咬牙切齿的，死死的盯着那份背影，但是。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `也许${
        chara_talk.sex_code - 1 ? '她' : '他'
      }能带我看到希望的地平线（成功的世界线）会是什么样子的。`,
    );
    await me.say_and_wait(
      `\n\n然后，意识到了美的瞬间，被那份璀璨夺目的美彻底俘获的片刻。\n\n`,
    );
    await say_by_passer_by(`浄风幸`, `怀着这份期望，视线逐渐变得模糊起来了。`);
    await say_by_passer_by(
      `浄风幸`,
      `可当我下定决心准备交流时，周围的训练员们早以准备好，将${
        chara_talk.sex_code - 1 ? '她' : '他'
      }团团围住。`,
    );
    await say_by_passer_by(`浄风幸`, `我根本无法挤进人群之中。`);
    await me.say_and_wait(`\n\n尽管人生充满了苦难。\n\n`);
    await say_by_passer_by(`浄风幸`, `之后，便遇到了现在的担当。`);
    await me.say_and_wait(`\n\n尽管因为未曾遇到的事物而手忙脚乱。\n\n`);
    await say_by_passer_by(
      `浄风幸`,
      `之前只是处于协助的立场上还没有什么切身感受，可现在自己站在他的位置上时，比起懊悔，更觉得自身的无力。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `之前作为团队训练员积累的经验在负责现在的担当时几乎派不上用场，之前在团队时不会遇到的事情也接踵而至，所以比起显著的成果，光是完成既定的目标已经是精疲力竭了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `就在某天傍晚，像往常一样，我打算趁周围无人时向枯树洞发泄压抑的情绪时，意外看到了${chara_talk.name}。`,
    );
    await me.say_and_wait(
      `\n\n尽管因为不能将这份痛苦向他人倾诉而深深的压抑着的心灵。\n\n`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `${
        chara_talk.sex_code - 1 ? '她' : '他'
      }看上去很悲伤的样子，像是遇到了什么使${
        chara_talk.sex_code - 1 ? '她' : '他'
      }理想破碎的事情一样。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然很想上去询问发生了什么，但${
        chara_talk.sex_code - 1 ? '她' : '他'
      }在我思考之时便已从教学楼里离开了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `即使相隔很远，我也能感受到那份不安定的情感。`,
    );
    await say_by_passer_by(`浄风幸`, `尽管如此，我也希望。`);
    era.printButton(`我也想看到那份美丽的背影。`, 1);
    await era.input();
    await me.say_and_wait(
      `\n\n然而反过来看，这却是让人脱胎换骨的，最有力的风（助力）了。\n\n`,
    );
    await say_by_passer_by(`浄风幸`, `......为什么？`);
    await era.printAndWait(`沉湎于回忆中的男人现在正打量着${me.name}`);
    // 在这里说服丸善斯基
    await me.say_and_wait(`一定，一定会因为追逐着那个美丽的背影而回忆起来！`);
    await me.say_and_wait(
      `\n\n一定，一定会因为追逐着那个美丽的背影而回忆起来！\n\n`,
    );
    await me.say_and_wait(`所以，请助我一臂之力。`);
    await era.printAndWait(`就这样直视着她的双眼。`);
    await chara_talk.say_and_wait(`那么，训练员君打算做什么呢？`);
    await me.say_and_wait(`10月下旬，我会让你看到最棒的比赛。`);
    await era.printAndWait(`你一字一顿的向她说道。`);
    await me.say_and_wait(`就在学院的草场上。`);
    await chara_talk.say_and_wait(`我很期待哦？`);
    await era.printAndWait(`丸善斯基露出了笑容。`); // 或许有更好的比喻
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`丸善斯基的梦`, chara_talk);
    chara_talk.print(`合宿比想象之中过得更快呢。`);
    chara_talk.print(`看着小特她们在沙滩上燃烧着青春之魂，拼命奔跑的模样。`);
    chara_talk.print(`与深夜独自前行观看潮水涨落，又是一种不同的感觉呢。`);
    await chara_talk.say_and_wait(`......训练员君。`);
    chara_talk.print(`意外的，没有对训练员君的背叛感到过于愤怒。`);
    chara_talk.print(`就好像，就像是。`);
    era.drawLine();
    chara_talk.print(
      `醒来的时候，发现自己躺在草地上，周围是一片花田，从身边的草地一路延伸到地平线的尽头。`,
    );
    chara_talk.print(`如果是平常的话，说不定会带着愉悦的心情漫步于花田之中。`);
    chara_talk.print(`但是，不知为何，想要找到出口的心情占据了上风。`);
    await chara_talk.say_and_wait(`不过，应该往哪个方向出发才好呢？`);
    era.printButton(`长满了荆棘的玫瑰丛`, 1);
    era.printButton(`高大的灌木迷宫`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      chara_talk.print(`我所做的事情，都是为了让你痛苦吗？`);
      chara_talk.print(`拨开荆棘的一瞬间，耳边似乎传来了叹息声。`);
      chara_talk.print(`越是向前，前面的荆棘丛就越密，拨开需要的力气就越大。`);
      chara_talk.print(`而且，后面的道路，不知何时已经被堵死了。`);
      await chara_talk.say_and_wait(`没有退路了。`);
      chara_talk.print(`身体也像是感受到了危机微微的颤抖着。`);
      chara_talk.print(
        `若是普通的人类，或者是稍微虚弱一点的马娘，说不定都会迷失在这连一丝阳光都看不见的囚笼之中吧。`,
      );
      chara_talk.print(
        `渐渐的，手臂快使不出力气了，汗珠顺着皮肤滚落到地面上，然后被灌木丛汲取。`,
      );
      chara_talk.print(`然而，无论从哪里看，似乎都不是出口。`);
      await say_by_passer_by(`玫瑰们`, `尽管这样也不打算放弃吗？`);
      chara_talk.print(`灌木丛中传来了窃窃私语声。`);
      await chara_talk.say_and_wait(
        `外面的世界比想象中还要丰富和美丽哦？在这种地方被钩住了衣角的话，不是太可惜了吗？`,
      );
      await say_by_passer_by(
        `玫瑰们`,
        `原来如此，我们明白了。因为陷入了绝境，所以才要乐观面对。`,
      );
      chara_talk.print(`窃窃私语声越来越大。`);
      await say_by_passer_by(`幻影声`, `已经没有力气了，你已经没有力气了。`);
      await say_by_passer_by(
        `幻影声`,
        `你的呼吸，虽然极力控制着，但我已经察觉到了哦？`,
      );
      await say_by_passer_by(
        `幻影声`,
        `那份急促，那份不安，可是与你的语气完全不一样哦？`,
      );
      await say_by_passer_by(
        `幻影声`,
        `实际上，你并没有想象中那么原谅那个训练员吧？`,
      );
      await say_by_passer_by(
        `幻影声`,
        `就算一时之间用意识强行抑制住了，但是那份怀疑的种子已经埋下去了哦？`,
      );
      await say_by_passer_by(`幻影声`, `所以，没有原谅他的必`);
      await chara_talk.say_and_wait(`啊啊......我知道的。`);
      await chara_talk.say_and_wait(`训练员君的背叛，确实让我很伤心呢。`);
      await chara_talk.say_and_wait(
        `不过，就算是这样的训练员君，我也一直爱着他哦？`,
      );
      await say_by_passer_by(
        `幻影声`,
        `为什么？为什么？爱情(love)不过只是终有一天会破灭的幻觉。`,
      );
      await chara_talk.say_and_wait(`我说的爱(caritas)可不是爱情(love)哦？`);
      await chara_talk.say_and_wait(
        `恋人之间如果只有泡沫般易逝的激情，会因为终有一天的分别消失而感到深深恐惧，这是不会幸福的。`,
      );
      await chara_talk.say_and_wait(`这份恐惧，终有一天会压倒幸福时的甜蜜。`);
      await chara_talk.say_and_wait(
        `我很害怕，有一天会失去训练员君的痛苦，就这样把我压垮。`,
      );
      await chara_talk.say_and_wait(`不过，我相信训练员君。`);
      await say_by_passer_by(`幻影声`, `明明已经背叛过你了哦？`);
      await chara_talk.say_and_wait(`我可不能凭借自己的智慧就绝望哦？`);
      await chara_talk.say_and_wait(
        `就算全世界的人类异口同声的说这是不可能的事情，我也不会绝望。`,
      );
      await chara_talk.say_and_wait(
        `正因为人类无法预测自己的未来，所以发生什么都是可能的事情哦？`,
      );
      await say_by_passer_by(`幻影声`, `明明这份乐观连自己都保护不了？`);
      await chara_talk.say_and_wait(`过去十几年，不是都这么平安度过了吗？`);
      await say_by_passer_by(`幻影声`, `诶？`);
      chara_talk.print(
        `看似密不透风的荆棘壁露出了一丝裂缝，抓住了机会的丸善斯基就这么冲出了囚笼。`,
      );
      chara_talk.print(`离开了那片荆棘地后，浑身的力气也慢慢恢复过来了。`);
      await say_by_passer_by(`幻影声`, `......因为生命是可能性的总和吗？`);
      chara_talk.print(`思索着话语的幻影，在了然的一刹那消散了。`);
    } else {
      era.drawLine();
      chara_talk.print(`不知过了多久，依然没有离开的迹象。`);
      chara_talk.print(
        `不管是按照左手法则，还是干脆把墙壁推倒，最终的结果都一样。`,
      );
      chara_talk.print(
        `更糟糕的是，按照之前的轨迹回到出发点，那边也变成了墙壁的延伸。`,
      );
      await chara_talk.say_and_wait(`唔——有点伤脑筋呢。`);
      chara_talk.print(`只能先行退回姑且称之为中心的一小片空地了。`);
      chara_talk.print(
        `之所以称之为空地，是因为那里的强风非常剧烈，没有草地能在那股狂风之下存活。`,
      );
      chara_talk.print(`不过奇怪的是，那股强风会将人推到墙壁之上。`);
      chara_talk.print(
        `虽然之前都迅速从侧面滑开，才避免沦落到粉身碎骨的下场。`,
      );
      chara_talk.print(`但是，所有能尝试的方法都已经全部试过了。`);
      await chara_talk.say_and_wait(`如果排除所有可能的话，那么。`);
      await era.printAndWait(`丸善斯基走进了那片空地之中。`);
      await era.printAndWait(
        `尽管狂风咆哮着几乎将她掀翻，但她最终仍然站稳了脚跟。`,
      );
      await era.printAndWait(`然后。`);
      await era.printAndWait(`借着风的力量冲向了那些墙壁。`);
      await era.printAndWait(`随后，墙壁在这股强大的力量面前寸寸龟裂。`);
      await era.printAndWait(`新的道路在眼前展开。`);
    }
    await chara_talk.say_and_wait(
      `虽然中途遇到了不少困难，不过都平安的度过了。`,
    );
    await chara_talk.say_and_wait(`接下来又会有什么在前方等待着呢？`);
    await chara_talk.say_and_wait(
      `将过去的灰影远远抛在后面，就这么走在鲜花铺就的地毯之上。`,
    );
    await chara_talk.say_and_wait(`......我的直觉告诉我。`);
    era.printButton(`向着苏醒时的朝向，不断奔跑`, 1);
    await era.input();
    await chara_talk.say_and_wait(`预备！`);
    chara_talk.print(`随着发令枪的响起，丸善斯基冲向了自己设定的终点。`);
    chara_talk.print(`美丽的花朵向后飞速倒退，渐渐地，维持不住自己的身形。`);
    chara_talk.print(`像一条五彩斑斓的丝带一样，逐渐融合在了一起。`);
    chara_talk.print(
      `没有呼吸的掣肘，就这样越来越快，越来越快，快到好像要融化成花田的一部分了。`,
    );
    await chara_talk.say_and_wait(`......这样的话。`);
    era.printButton(`就这样一路加速！`, 1);
    await era.input();
    await chara_talk.say_and_wait(`就让你看看丸善斯基真正的实力吧！`);
    await era.printAndWait(
      `耳边传来了引擎的轰鸣声，不会错，那就是小塔的声音。`,
    );
    chara_talk.print(`就像是小塔把自己的力量借给了我一样。`);
    chara_talk.print(`就这样，这样就好了吗？`);
    chara_talk.print(`不，这样就好。`);
    chara_talk.print(`带着幼时第一次看到康塔什时的憧憬。`);
    chara_talk.print(`在地平线的彼方，那道闪耀的光芒。`);
    chara_talk.print(`就是终点了吧。已经能看到终点了。`);
    await chara_talk.say_and_wait(`不知为何，稍微有些伤感呢。`);
    chara_talk.print(`等到太阳升起的时候，这份朦胧的触感就会消散了。`);
    chara_talk.print(`或许这就是梦的终结了吧。`);
    await chara_talk.say_and_wait(`哎呀，这样可真不像我呢。`);
    chara_talk.print(
      `世界上没有不散的宴席，这份甜蜜的回忆，恐怕就会永远沉睡下去了。`,
    );
    chara_talk.print(`在现实之中也要快乐的活下去哦？我们约好了。`);
    chara_talk.print(`早安，丸善斯基。`);
    await era.printAndWait(`丸善斯基睁开了眼睛。`);
    await era.printAndWait(`温暖的阳光轻抚着她的长发。`);
    await era.printAndWait(`回味着那份余韵，丸善斯基坐了起来。`);
    await era.printAndWait(`新的一天开始了。`);
  } else if (edu_weeks === 47 + 34) {
    await print_event_name(`皇帝召见`, chara_talk);
    // 玩家虽然有想法，但是不知道该从何下手，引出皇帝
    // 那么，皇帝为什么会帮助主角呢？
    // 对拉扯的游戏看腻，与玩家之间的对话中察觉到了新的可能性
    await era.printAndWait(`你看着手中的草稿纸发呆。`);
    await me.say_and_wait(`不对，这样无法解开她的心结。`, true);
    await era.printAndWait(`将眼前的草稿纸揉成一团，然后随意丢弃到一边。`);
    await era.printAndWait(`飞出的纸团沿着抛物线，碰撞到了其他的纸团。`);
    await era.printAndWait(`想要逃避的心情、做不到的沮丧感就这样弥漫开`);
    await era.printAndWait(`咚咚咚。`);
    await say_by_passer_by(`马娘A`, `请问是（玩家名）先生吗？`);
    era.printButton(`是，有什么事吗？`, 1);
    await era.input();
    await say_by_passer_by(
      `马娘A`,
      `啊，训练员先生，嗯。会长让我给训练员先生带一句话。`,
    );
    await say_by_passer_by(`马娘A`, `‘我这里有你想要的答案。’`);
    await me.say_and_wait(`......我知道了。现在就出发吧。`);
    await me.say_and_wait(`什么时候，不，难道从一开始就在一旁观看吗？`, true);
    era.drawLine();
    await era.printAndWait(`你跟在马娘的后面。`);
    await me.say_and_wait(``);
    await era.printAndWait(`莫名的烦躁感占据了你的内心。`);
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `打扰了 `);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `丸善前辈的训练员${me.get_adult_sex_title()} `,
    );
    await era.printAndWait(
      `净风幸的担当${chara_talk.get_uma_sex_title()}走进了训练室。`,
    );
    await me.say_and_wait(`请坐，想喝点什么饮料，果汁还是红茶？`);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `不用了，我来这边只是为了把这个还给${chara_talk.name}。 `,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}从校服的口袋中将手链递给了你`,
    );
    await era.printAndWait(
      `似乎是${chara_talk.get_uma_sex_title()}们送给${
        chara_talk.name
      }的礼物，为什么会`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }不小心遗留在了中庭的手链，希望训练员${me.get_adult_sex_title()}能在合适的时机交付与${
        chara_talk.sex
      }。 `,
    );
    await era.printAndWait(
      `破旧的手链上有明显的弥补痕迹，原本的红水晶也被换成了绿水晶。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `训练员${me.get_adult_sex_title()}，请转告给丸善学姐，我们一直期待着你活跃在草场上的样子，拜托了。 `,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}说完深深的低下了头，似乎得不到肯定的答复就不会起来。`,
    );
    await me.say_and_wait(
      `......我知道了，手链和话语会在合适的时机一同交给${chara_talk.sex}。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `那么，非常感谢。 `,
    );
    await era.printAndWait(
      `离开之前她轻轻带上了训练室的门，只留你一人在思索着对策。`,
    );
  } else if (edu_weeks === 47 + 37) {
    await print_event_name(`思绪`, chara_talk);
    // 想起了训练员君暖洋洋的笑容
    await era.printAndWait(
      `因为${chara_talk.name}内心受到重创，再继续参加比赛只会让${chara_talk.sex}更加痛苦。`,
    );
    await era.printAndWait(
      `在发布会上你向众多记者宣布${chara_talk.name}将不会参加菊花赏。`,
    );
    await era.printAndWait(`一片哗然。`);
    await era.printAndWait(
      `众人的指责与疑问你都默默承受，做出判断时的犹豫与痛苦不足与外人道也。`,
    );
    await era.printAndWait(
      `做出弃赛决定之后，为了预防过激粉丝对你的生命造成威胁，你在${chara_talk.name}的建议下到${chara_talk.sex}现在所住的公寓里暂住一段时间。`,
    );
    await chara_talk.say_and_wait(`哼哼~这不是已经是恋人之间的关系了吗?`);
    await era.printAndWait(`因为同吃同住的缘故，两人之间的羁绊也愈发加深。`);
    await me.say_and_wait(
      `差不多是时候了，现在必须让${chara_talk.name}踏出那一步。`,
      true,
    );
    await era.printAndWait(
      `手中紧紧握着${chara_talk.get_uma_sex_title()}托付给你的手链，你下定了决心。`,
    );
    era.drawLine({ content: '晚饭后' });
    era.printButton(`明天我们出去一起赏秋吧？`, 1);
    await era.input();
    await era.printAndWait(`你打算在约会高潮时将手链交给${chara_talk.sex}。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }今天有些奇怪呢？`,
    );
    await chara_talk.say_and_wait(
      `难道有什么事情瞒着${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}吗？`,
    );
    await era.printAndWait(
      `${chara_talk.name}放下了手中的筷子，双手托腮盯着你看。`,
    );
    await era.printAndWait(
      `本就犹豫不定的你被${chara_talk.sex}这么盯着看更是开始冒起冷汗。`,
    );
    await me.say_and_wait(`人们不是常说艺术之秋，读书之秋吗？`);
    await me.say_and_wait(
      `比起夏天的炎热，冬天的寒冷，秋天这种清爽的季节是最适合抒发艺术情感的时候了。`,
    );
    await me.say_and_wait(
      `而且啊，我也想在秋天留下和${chara_talk.name}之间的美好回忆。`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }原来这么在意我吗？`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我也想和${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }留下美好的回忆呢......`,
    );
    await chara_talk.say_and_wait(`呵呵~已经开始期待起明天的行程了呢。`);
    await era.printAndWait(`${chara_talk.name}看起来心情变好了。`);
    era.drawLine({ content: '第二天早上' });
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？起来了吗？`,
    );
    await era.printAndWait(`你揉着还未进入状态的双眼挣扎着起床了。`);
    era.printButton(`比约定的起床时间还要早一点啊`, 1);
    await era.input();
    await era.printAndWait(
      `一大早感受到了${chara_talk.name}久违的充满活力的声音让你对之后的事情充满了希望。`,
    );
    await chara_talk.say_and_wait(
      `说起来最近好像有美术展览会,以此作为我们第一站的目标吧。`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `快到中午了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }尝尝我做的便当怎么样？`,
    );
    era.drawLine();
    await me.say_and_wait(`抓娃娃可真是困难啊。`);
    await era.printAndWait(
      `抱着${
        chara_talk.name
      }玩偶的${chara_talk.get_teen_sex_title()}一脸幸福的微笑着。`,
    );
    await me.say_and_wait(`足够了。`);
    era.drawLine();
    await era.printAndWait(`最后一站回到了学院的天台。`);
    await chara_talk.say_and_wait(`风也是会成长的吧。`);
    await era.printAndWait(
      `顺着${chara_talk.name}的视线望向整个学院，金黄色的银杏叶随着风而漫天飞舞。`,
    );
    await chara_talk.say_and_wait(`新诞生的风总是无忧无虑地向着天空飞去。`);
    await chara_talk.say_and_wait(
      `然而，当${chara_talk.sex}接触到了枯叶的悲伤之后，${chara_talk.sex}的脚步就变得沉重了。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}也希望能让那些枯叶感受到天空的自由，所以温柔的怀抱着它们，想带着它们一起飞往无忧无虑的天空。`,
    );
    await chara_talk.say_and_wait(
      `但束缚住枯叶的土地最终还是战胜了风的怀抱，所以枯叶在飞向天空的过程中折翼。`,
    );
    await chara_talk.say_and_wait(`最后枯叶还是回归了大地。`);
    await era.printAndWait(
      `你开始走进${chara_talk.get_teen_sex_title()}的圣域。`,
    );
    await me.say_and_wait(`即使如此，枯叶在风的指引下依然做出了自己的决定。`);
    await me.say_and_wait(`没有什么比这一过程更能体现枯叶的生命力了。`);
    await chara_talk.say_and_wait(
      `......${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }是打算把手链交给我吗？`,
    );
    await era.printAndWait(
      `以${chara_talk.sex}的心思细腻与精准的直觉，这是必然发生的事情。`,
    );
    await me.say_and_wait(`但是，不能在这里放弃。`, true);
    await me.say_and_wait(
      `我已经做好了和${chara_talk.sex}同生共死的觉悟了。`,
      true,
    );
    await chara_talk.say_and_wait(`......看来我说中了呢。`);
    await chara_talk.say_and_wait(
      `不过${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}放弃吧。`,
    );
    await chara_talk.say_and_wait(
      `努力奔跑的背影无法让所有看到我的${chara_talk.get_uma_sex_title()}们都对此产生希望。`,
    );
    await era.printAndWait('「才不会！」', {
      align: 'center',
      fontSize: '1.5rem',
    });
    await me.say_and_wait(
      `${chara_talk.name}是比谁都温柔的注视大家的大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }。`,
    );
    await me.say_and_wait(
      `如果像这样的大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }因为自责而放弃了比赛的话。`,
    );
    await me.say_and_wait(`这条手链也会哭泣的啊`);
    await era.printAndWait(`你从口袋之中将修复后的手链交给了${chara_talk.sex}`);
    await me.say_and_wait(`大家的希望，大家的期盼都寄托在了这条手链之中啊。`);
    await me.say_and_wait(
      `虽然它已经不再完美了，但正因为它的不完美，所以才更接近完美了。`,
    );
    era.printButton(`你听到它的低语了吗？`, 1);
    await era.input();
    await era.printAndWait(
      `${chara_talk.name}颤抖着接过了手链之后，心理防线终于崩溃，大滴大滴的泪珠从脸庞滑落。`,
    );
    await me.say_and_wait(
      `这条孤独探索的道路只能你自己一个人去摸索，但我永远会在你身边守护你。`,
    );
    await era.printAndWait(
      `你抚摸着${chara_talk.name}的长发，感受到了${chara_talk.sex}的心跳。`,
    );
  } else if (edu_weeks === 47 + 38) {
    await print_event_name(`无风`, chara_talk);
    chara_talk.print(`一切都应该结束了。`);
    chara_talk.print(`明明已经没有必要继续撑下去了。`);
    chara_talk.print(`为什么，满手污秽的自己还存活在这世界之上？`);
    chara_talk.print(
      `明明就连成为受马娘欢迎的知心大姐姐这一点都已经无法触及的风了？`,
    );
    chara_talk.print(`振作起来？为什么，梦想已经破灭的瞬间甚至都快笑出来了。`);
    chara_talk.print(`看着像是行尸走肉一样连挣扎的意愿都依然消逝。`);
    await era.printAndWait(`站在镜子面前的丸善斯基疑惑着看着披头散发的自己。`);
    await chara_talk.say_and_wait(`已经不用这么辛苦了。`);
    chara_talk.print(
      `接下来该怎么办？就算装作若无其事的样子继续扮演着知心大姐姐的形象也迟早会有第二个、第三个后辈站在自己的面前。`,
    );
    chara_talk.print(`这颗伤痕累累的心，到底还能再撑几次呢？`);
    await chara_talk.say_and_wait(`......`);
    chara_talk.print(
      `已经结束了，丸善斯基，就这样离开这块伤心的地方，哪里都好，不如去巴黎吧，至少可以去看看`,
    );
    await chara_talk.say_and_wait(`不`);
    chara_talk.print(`明明过家家已经结束了，为什么还要这么`);
    await chara_talk.say_and_wait(`不对，我还有不愿意背叛的人。`);
    chara_talk.print(`那个训练员吗？怎么样都好了，离开之前跟他打个招呼`);
    await chara_talk.say_and_wait(
      `除了这个，幼稚一样的天真，那份希翼的目光，不想背叛，不想就这么结束。`,
    );
    chara_talk.print(`丸善斯基，已经结束了，这片土地还有什么值得留恋的`);
    await chara_talk.say_and_wait(
      `就算是这样，我还有想要继续前进的方向，还有很多很多没有搞懂的东西。`,
    );
    chara_talk.print(`紧紧抱住了自己的丸善斯基向着镜子中的自己倾诉着这一切。`);
    await chara_talk.say_and_wait(
      `正是那份幼稚到反而觉得可笑的样子，才是在我心中不断鼓动着的温暖的东西阿。`,
    );
    await chara_talk.say_and_wait(
      `所以，才想要伸出手，才想要紧紧地抱住这团温暖的火焰。`,
    );
    await chara_talk.say_and_wait(`是啊，原来如此，说不定我就是为了这个才`);
    await chara_talk.say_and_wait(
      `如果这就是我的美学的话，为了追逐着这份美的感受，所以才要在草场之上不断的奔跑才对。`,
    );
    chara_talk.print(`真是的，走了这么远的弯路呢。`);
    chara_talk.print(`得赶快回到训练员的身边才行呢。`);
    await chara_talk.say_and_wait(`必须让训练员看到脱胎换骨的自己才可以呢♪`);
    chara_talk.print(`这样真的好吗？`);
    await chara_talk.say_and_wait(`我不想背叛自己的内心，所以说，已经足够了。`);
    chara_talk.print(`即使已经污秽不堪？`);
    await chara_talk.say_and_wait(
      `也要挣扎着，用尽最后的力气再试一次，这一次，只为了心中吹拂的风。`,
    );
    chara_talk.print(`这就是你的美学吗？`);
    await era.printAndWait(
      `叹息的丸善斯基就此消逝，新生的自我重新搅动了周围的空气。`,
    );
    await era.printAndWait(
      `像轻柔的风一样，想要快点赶到那个人的身边的急不可耐的心在砰砰跳动着。`,
    );
    await era.printAndWait(`那一天，温柔的风就此诞生了。`);
  } else if (edu_weeks === 47 + 39) {
    await print_event_name(`祈祷`, chara_talk);
    era.drawLine({ content: '`特雷森学院·夜间草地' });
    await era.printAndWait(`${chara_talk.name}为追逐自己的背影即将再次启程。`);
    await say_by_passer_by(`浄风幸`, `终于来了啊。`);
    await era.printAndWait(
      `在将手链还给${chara_talk.name}后，你便联系了那个男人。`,
    );
    await era.printAndWait(`约定在10月第四周再次进行赛跑。`);
    await me.say_and_wait(
      `再怎么说${chara_talk.name}也已经很久没有认真训练过了，请给我们半个月的时间。`,
    );
    await era.printAndWait(
      `在经历半个月的训练之后，${chara_talk.name}才算恢复到了皋月赏时的状态。`,
    );
    await me.say_and_wait(
      `训练这种事情，一天落下的话需要花三天时间才能恢复`,
      true,
    );
    await me.say_and_wait(
      `能在半个月后恢复大半，实际上也是${chara_talk.name}自己意志做出的决定。`,
      true,
    );
    await say_by_passer_by(`浄风幸`, `......你有没有听我在说什么？`);
    await me.say_and_wait(`啊，抱歉，现在就开始吧`, true);
    await say_by_passer_by(
      `浄风幸`,
      `......算了。就以菊花赏3000米为假想开始练习吧。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `......告诉我！你能让我再看到当时希望的背影吗？${chara_talk.name}！`,
    );
    await era.printAndWait(
      `包括两名训练员两名${chara_talk.get_uma_sex_title()}在内，练习开始了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `非常感谢你能让丸善学姐重新振作起来。`,
    );
    await era.printAndWait(
      `身穿决胜服的${chara_talk.get_uma_sex_title()}向你鞠躬，然后`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `${chara_talk.get_uma_sex_title()}「就让我来见证超级跑车的速度然后超越那道背影！`,
    );
    await era.printAndWait(`你看到了有如实质的滂薄战意。`);
    era.drawLine();
    await era.printAndWait(
      `狂妄到自认为可以救人者，会亲手伤害自己打算拯救的对象。`,
      { align: 'center', fontSize: '1.375rem' },
    );
    chara_talk.print(`我的世界曾经充满了色彩。`);
    chara_talk.print(
      `幼时所目睹的大红色超级跑车，帅气的外型深深吸引了当时的我。。`,
    );
    chara_talk.print(`我听到了它的呢喃，似乎和我一样，渴望着自由的奔跑。。`);
    chara_talk.print(`于是幼时的我暗暗发誓，将来买车时，一定要选择这辆车。。`);
    chara_talk.print(
      `为了迎接与它共鸣的那天到来，一边看着目录上的照片，一边努力练习着驾驶技术。。`,
    );
    chara_talk.print(`拿到驾照的那一天，亲手接过自己的驾照。`);
    chara_talk.print(`恍惚梦境般的不真实感，一遍遍地确认着现实的存在。`);
    chara_talk.print(
      `训练时经历过的酸甜苦辣，除了获得的喜悦之外，犹豫与迷茫也悄然而至。`,
    );
    chara_talk.print(
      `也许这样的我，一定是最幸福的状态吧？不，虽说现在的每一天也过得非常快乐就是了。。`,
    );
    chara_talk.print(
      `比起胜利之后的荣誉，赛前自然地与赛${chara_talk.get_uma_sex_title()}们聊天。倾听${
        chara_talk.sex
      }们的对话，在草地上挥洒汗水的奔跑，急促的呼吸刺激着双腿爆发出更强的力量。。`,
    );
    chara_talk.print(`直到达到那个————只有三女神才知道的世界。。`);
    chara_talk.print(
      `如果所有人都能感受到奔跑的快乐的话，我的理想世界也不远了吧。。`,
    );
    chara_talk.print(`我的世界曾经充满了色彩。`);
    chara_talk.print(`然而，理想与现实可能永远存在矛盾。。`);
    chara_talk.print(
      `很多${chara_talk.get_uma_sex_title()}们也许终其一生都无法体会到这层境界，${
        chara_talk.sex
      }们被层层围绕的荆棘扯住了衣服，拖住了步伐。。`,
    );
    chara_talk.print(`呼喊着，祈祷着有人能帮助${chara_talk.sex}们。。`);
    chara_talk.print(
      `然而，唯一的解决方法却只有${chara_talk.sex}们自己领悟到才能挣脱。。`,
    );
    chara_talk.print(
      `祈祷着，祈祷着${chara_talk.sex}们能原谅着缺乏才能的自己，卸下那份沉重的负担（日夜诅咒着无能的自己）。。`,
    );
    chara_talk.print(`于是，难以言及的悲伤变成了悲伤的黑白二色。`);
    chara_talk.print(
      `在我的世界里默默矗立着，像一座缄默的城墙，灰色的幽灵。。`,
    );
    chara_talk.print(`像幽灵一样回荡着，徘徊着，呐喊着。`);
    chara_talk.print(
      `既是为了迷茫的${chara_talk.get_uma_sex_title()}们，也是为了我自己。`,
    );
    chara_talk.print(`来自后辈的崇拜，在草地上所感受到的风，令人怀念的过往。`);
    chara_talk.print(
      `然而，一味沉湎在过去的回忆之中，榨取名为悔恨的快感，这是不对的。`,
    );
    chara_talk.print(`所以，我决定试着向未来前进。`);
    chara_talk.print(`我所选择的道路是否是正确的，自己也不知道。`);
    chara_talk.print(
      `.....也许，也许的话，在过去的摇篮曲中等待着机会的到来才是正确的。`,
    );
    chara_talk.print(`像这样的自己，准备不足，觉悟也只是激情的产物。`);
    chara_talk.print(`或许，会死在某个不为人知的角落也说不定。`);
    chara_talk.print(`什么才能救赎这一切呢？\n`);
    chara_talk.print(`意义，这就是我找到的答案`);
    chara_talk.print(
      `‘在未来的某个时刻，我做了什么’,这个意义足以救赎我之后可能会受到的可怕的事情。`,
    );
    chara_talk.print(
      `不是以自己的角度来看待，因为人类从来都是承载着时间流向某个地方的运输工具。`,
    );
    chara_talk.print(`世界啊，你是如此的美丽。`);
    chara_talk.print(
      `既不是为了自己的欲望，也并非为了他人而前进，我以风的视角来看着眼前的马娘。`,
    );
    chara_talk.print(`我愿化作微风，不，我（微风）在时间上凝刻了自己的意义。`);
    chara_talk.print(`不论结局如何，风都永远与我相伴。`);
    chara_talk.print(`这个马娘，真是可爱。`);
    era.drawLine();
    await me.say_and_wait(`${chara_talk.name}`, true);
    await era.printAndWait(
      `${chara_talk.name}的神情从怀念、恐惧、悲伤最后变为了决心，似乎已经做好了准备`,
    );
    era.printButton(`预备`, 1);
    await era.input();
    era.printButton(`跑！`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(`风压如刀片割的脸生疼。`);
    await era.printAndWait(
      `${
        chara_talk.name
      }追逐着只有自己才能看见的某物,紧随其后的是作为后辈的${chara_talk.get_uma_sex_title()}`,
    );
    await era.printAndWait(`难以言及的凝重笼罩在赛场上。`);
    era.drawLine();
    chara_talk.print(`令人怀念的感觉从奔跑的一刻开始了。`);
    chara_talk.print(`紧张而颤抖的身体习惯性的做出了最优解。`);
    chara_talk.print(`第一个弯道通过。`);
    chara_talk.print(`听着身后传来的稳健脚步声简单估算了下距离。`);
    chara_talk.print(`先行吗?`);
    await chara_talk.say_and_wait(
      `已经针对长距离下足了功夫吗？比想象中还要努力呢。`,
      true,
    );
    await era.printAndWait(
      `${
        chara_talk.name
      }之前尚未就长距离着重锻炼过，与身后以中长距离为目标的${chara_talk.get_uma_sex_title()}相比稍显劣势。`,
    );
    await chara_talk.say_and_wait(`就在中盘一口气将你甩掉。`);
    chara_talk.print(`成功与否就看对方是否适应${chara_talk.sex}的节奏了。`);
    await chara_talk.say_and_wait(`比想象之中还要难缠。`);
    await era.printAndWait(
      `身后的${chara_talk.get_uma_sex_title()}认真的，虎视眈眈的狙击着${
        chara_talk.name
      }的背影。`,
    );
    await chara_talk.say_and_wait(`好像稍微感受到了${chara_talk.sex}的想法`);
    await chara_talk.say_and_wait(
      `瞄准着我的背影，希望超越${chara_talk.sex}。`,
    );
    await chara_talk.say_and_wait(`我的想法传达到${chara_talk.sex}身上了吗？`);
    await era.printAndWait(`比赛进入了第四个弯,已经是最后的冲刺阶段了`);
    await chara_talk.say_and_wait(`那么，在这边一口气......`);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `世界上原来真的是有不可跨越的鸿沟吗，学姐果然是怪物啊。`,
      true,
    );
    await era.printAndWait(`${chara_talk.name}的眼前再次出现了那道黑影。`);
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `在最后冲刺阶段呼吸混乱了一瞬间，后面的${chara_talk.get_uma_sex_title()}没有放过这个机会同样以更快的加速度拼尽全力`,
    );
    await chara_talk.say_and_wait(`......不，不对。`);
    await me.say_and_wait(`你听到它的低语了吗？`, true);
    await chara_talk.say_and_wait(`原来是这样。`);
    chara_talk.print(`突然就明白了。`);
    chara_talk.print(
      `每有一位因我的背影黯然失色而离场的${chara_talk.get_uma_sex_title()}，会有更多的${chara_talk.get_uma_sex_title()}会因我的奔跑而受到鼓舞`,
    );
    chara_talk.print(
      `虽然作为赛${chara_talk.get_uma_sex_title()}个人的职业生涯如同流星一样短暂,但我的存在能够让更多的${chara_talk.get_uma_sex_title()}们闪耀。`,
    );
    chara_talk.print(
      `许许多多的流星汇集在一起，最后一定会组成非常壮观的流星雨。`,
    );
    await chara_talk.say_and_wait(`......所以我`, true);
    chara_talk.print(
      `虽然我之前一直以让所有赛${chara_talk.get_uma_sex_title()}都追逐着我的背影，但是面临了失败。`,
    );
    chara_talk.print(
      `但失败的不是理想，是我，我对自己的能力评估过高了，所以造成了失败。`,
    );
    chara_talk.print(
      `那些因为我的背影而放弃的${chara_talk.get_uma_sex_title()}们，我永远会将${
        chara_talk.sex
      }们的失败报以歉意`,
    );
    chara_talk.print(
      `所以，我的现在的目标是让更多支持着我憧憬着我的后辈们能看着我的背影追逐着自己的理想。`,
    );
    chara_talk.print(
      `所以，不论是憧憬我的后辈还是训练员，都请看着我的背影追逐着风吧。`,
    );
    chara_talk.print(`黑白二色终于融进了我的世界中。`);
    chara_talk.print(`不知何时，风也出现在了我的世界。`);
    await chara_talk.say_and_wait(`那么，要加速了`, true);
    era.drawLine();
    await era.printAndWait(
      `突然加速的${
        chara_talk.name
      }像是红色的闪电一样与后方的${chara_talk.get_uma_sex_title()}的距离越拉越大，像是有台风一样席卷草场。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `怎么可能.....`,
      true,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}
`,
      `......这个才是我想看到的背影啊。`,
    );
    await era.printAndWait(`站在观众席上的男人陷入了深深的回忆之中。`);
    era.printButton(`${chara_talk.name}，祝贺你。`, 1);
    await era.input();
    await era.printAndWait(
      `${chara_talk.name}终于从自己构建的理想世界之中走出，开始面对真实的世界了。`,
    );
    await era.printAndWait(`带着希望之光的风终于再次于此处吹起。`);
    event_marks.mygo--;
    //todo 领域
  } else if (edu_weeks === 47 + 42) {
    chara19_talk.name = '皇帝';
    await print_event_name(`皇帝`, chara_talk);
    // 核心对话
    await chara19_talk.say_and_wait(
      `丸善斯基，你说的很有趣，连我也不禁在心里为止赞同`,
    );
    await chara19_talk.say_and_wait(`但是，`);
    await era.printAndWait(`鲁铎象征停顿了一下。`);
    await chara19_talk.say_and_wait(
      `直到当班的死神数着表等待着你的死亡，你在奄奄一息之时回忆起自己所经历的一切所得出的结论。`,
    );
    await chara19_talk.say_and_wait(
      `此刻才是你真正追求的东西，在此之前的树立的一切价值观不过是你的幻觉罢了。`,
    );
    await chara19_talk.say_and_wait(
      `你的人生才刚刚开始，居然在跟我说什么自己的幻想。`,
    );
    await chara19_talk.say_and_wait(
      `还是说，你已经沦落到了蒙着眼、捂住耳、堵住心，靠着幻觉维生的地步了吗？真可怜。`,
    );
    await era.printAndWait(`皇帝带着嗜虐的笑容看着丸善斯基。`);
    await chara_talk.say_and_wait(`我承认你说的没错。`);
    await chara19_talk.say_and_wait(`哦？这就放弃了吗？`);
    await chara_talk.say_and_wait(
      `的确，我只是在三女神大人的仁慈之下才幸存下来的失败者。`,
    );
    await chara_talk.say_and_wait(
      `曾经的我，自以为自己是优秀的，自认自己是正确的，我战胜了自己的命运。`,
    );
    await chara_talk.say_and_wait(
      `然而，我不过是把路途中的障碍误判成了命运本身，如果这么简单就能跨越的话，那根本就是搞错了。`,
    );
    await chara_talk.say_and_wait(
      `能够被认为是绝对正确的存在，恐怕只有三女神大人了吧。`,
    );
    await chara19_talk.say_and_wait(`所以？`);
    await era.printAndWait(`皇帝开始不耐烦了。`);
    await chara_talk.say_and_wait(`我本人就是答案。`);
    await chara19_talk.say_and_wait(`......`);
    await era.printAndWait(
      `现场陷入了沉默之中，想要嘲笑丸善斯基的皇帝皱紧了眉头。`,
    );
    await chara_talk.say_and_wait(
      `我就是在一路错误之中到达了现在，我本身就是‘答错得一塌糊涂也可以健康的活着的见证’！`,
    );
    await chara_talk.say_and_wait(
      `我活着，而且没有沮丧，就这样大大方方的出现在了你的面前。`,
    );
    await chara_talk.say_and_wait(
      `在一路都选择了错误的前提下，来到了你的面前。\n`,
    );
    await chara19_talk.say_and_wait(
      `......有意思，丸善斯基，我越来越期待与你一战了。`,
    );
  } else if (edu_weeks === 47 + 44) {
    await print_event_name(`万圣节`, chara_talk);
    await era.printAndWait(`在深海之中苏醒的我，眼前除了黑暗什么也看不见。`);
    await era.printAndWait(
      `意外的是，依然能够自由的呼吸，依然能感受到自己的心跳。`,
    );
    await era.printAndWait(`出口在哪里？我该怎么办？我是不是要死了？`);
    await era.printAndWait(
      `诸如此类的问题徘徊在脑海里，几乎把自己的意识吞没。`,
    );
    await era.printAndWait(`然而，袖口传来了冰凉的摩擦感。`);
    await era.printAndWait(
      `像是强迫我前进一样，我被风带离了深海之中，飞向了天空。`,
    );
    era.drawLine();
    era.printButton(`是梦吗？`, 1);
    await era.input();
    await era.printAndWait(`突然就从床上坐起来了。`);
    await me.say_and_wait(`为什么？`, true);
    await era.printAndWait(
      `清晨的阳光透过窗帘洒在了枕头上，在光线的作用下，就连平时忽略不见的灰尘都变得闪耀起来。`,
    );
    await me.say_and_wait(`黑色的海洋，不知何时吹拂的风，某个人的存在。`, true);
    await era.printAndWait(
      `努力回忆着之前支离破碎的片段，心里不知何时觉得这件事很重要，莫名的不安从心底升起。`,
    );
    await me.say_and_wait(`下次还是不看那种B级片了。`, true);
    await era.printAndWait(
      `突然觉得对这种奇怪的事情莫名认真的自己很好笑，摇了摇头后准备穿起衣服。`,
    );
    await chara_talk.say_and_wait(`咚咚咚。`);
    await era.printAndWait(`门口传来了敲门声。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，起来了吗？`,
    );
    await me.say_and_wait(`马上过来。`);
    await me.say_and_wait(`已经习惯在${chara_talk.name}家住下了吗。`, true);
    await era.printAndWait(`叠好被子，穿起衣服就开始准备工作。`);
    await era.printAndWait(`新的一天开始了。`);
    era.drawLine();
    await era.printAndWait(
      `将最后一份文件收进了文件夹之中，今天的日程算是告一段落了。`,
    );
    await chara_talk.say_and_wait(`辛苦了。`);
    await era.printAndWait(`坐在旁边的${chara_talk.name}将咖啡递到了桌上。`);
    await me.say_and_wait(`非常感谢。`);
    await era.printAndWait(
      `不是什么名贵的品牌，只是店铺里常卖的那种速溶咖啡。`,
    );
    await era.printAndWait(`量大实惠，不过效果只能说差强人意。`);
    await era.printAndWait(
      `但对于像${me.actual_name}这样的训练员来说却刚刚好。`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }今晚有什么计划吗？`,
    );
    await era.printAndWait(`伸着懒腰的${chara_talk.name}从沙发上站了起来。`);
    await me.say_and_wait(`计划？`);
    await era.printAndWait(`脑海中快速回忆了一遍，似乎没有疏漏的事情。`);
    await me.say_and_wait(`接下来的话，准备提高耐力的训练吧？`);
    await era.printAndWait(`参加长距离比赛耐力也是很重要的事情。`);
    await chara_talk.say_and_wait(
      `......耐力训练确实也很重要，不过${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }是不是忘记了什么呢？`,
    );
    await me.say_and_wait(`......？`);
    await chara_talk.say_and_wait(
      `去年约定好了一起去参加万圣游行的事情，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }应该还记得吧？`,
    );
    await era.printAndWait(
      `看着一脸疑惑的${me.actual_name}，${chara_talk.name}最终还是说了回来。`,
    );
    await me.say_and_wait(`好像确实说过这件事。`, true);
    await era.printAndWait(
      `翻开手机备忘录，向下滑动了一会才发现，在去年万圣节当晚记录下来了这件事。`,
    );
    await me.say_and_wait(`我还真是健忘啊。`);
    await era.printAndWait(
      `因为遇到了更加重要的事情，所以优先度不高的事情暂时放到了一边吗。`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`,
    );
    await me.say_and_wait(`一起走吧。`);
    await era.printAndWait(
      `轻轻牵起了${chara_talk.name}的右手，带头离开了训练室。`,
    );
    await chara_talk.say_and_wait(`接下来要玩个尽兴才行呢♪`);
    await era.printAndWait(
      `${chara_talk.name}清脆的笑声顺着被风吹拂着的发丝，将愉悦的情绪传达到了训练室中。`,
    );
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 9) {
    await print_event_name(`焱炎`, chara_talk);
    await era.printAndWait(`漫长的寒冬终于过去，春风再次吹拂着特雷森。`);
    await era.printAndWait(
      `你们为了实现能让更多${chara_talk.get_uma_sex_title()}追逐着背影的理想，在草地上进行着训练。`,
    );
    await say_by_passer_by(`浄风幸`, `呦，训练辛苦了。`);
    await era.printAndWait(
      `作为友人的他受到${chara_talk.name}的鼓舞，现在也在背后支持着自己的担当活跃在赛场上。`,
    );
    await say_by_passer_by(`浄风幸`, `接下来的训练就让......`);
    await chara17_talk.say_and_wait(
      `${chara_talk.name}，你还在坚持你那脆弱的理想吗？`,
    );
    await era.printAndWait(`威严的声音响彻响彻整个训练场。`);
    await era.printAndWait(
      `欢呼吧，吾等之皇帝——鲁铎象征将领导整个赛${chara_talk.get_uma_sex_title()}的未来。`,
    );
    await era.printAndWait(`不必相信，只需追随皇帝的脚步。`);
    await chara_talk.say_and_wait(`啊啦，皇帝也是为了超越我的背影而过来的吗？`);
    await era.printAndWait(`除了${chara_talk.name}——`);
    await chara17_talk.say_and_wait(
      `比起同世代的弱小${chara_talk.get_uma_sex_title()}，作为前辈的${
        chara_talk.name
      }似乎更加美味呢`,
    );
    await chara_talk.say_and_wait(`我可以当作是夸奖我吗？`);
    await chara17_talk.say_and_wait(`但是，你还是过于懦弱了。`);
    await chara17_talk.say_and_wait(
      `明明有着天赋的能力，却安于现状，还在做着脆弱而可笑的梦。`,
    );
    await chara17_talk.say_and_wait(
      `弱小的${chara_talk.get_uma_sex_title()}们只有在皇帝的领导一下才会有勇气超越过去的自己。`,
    );
    await chara17_talk.say_and_wait(
      `因此赛${chara_talk.get_uma_sex_title()}的未来必须在皇帝的领导之下`,
    );
    await chara17_talk.say_and_wait(
      `为此，身为皇帝，不仅要无敌于同时代，还要击溃过往的荣耀，镇压未来的荣光。`,
    );
    await chara17_talk.say_and_wait(`于大阪杯见证皇帝的神威吧。`);
    await era.printAndWait(`留下旨意之后，皇帝地从容离开了训练场。`);
    era.printButton(`终于要与皇帝对决了吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `......不，${chara_talk.get_uma_sex_title()}们的未来应该由${
        chara_talk.sex
      }们自己决定。`,
    );
    await chara_talk.say_and_wait(
      `我相信着${
        chara_talk.sex
      }们一定能超越我，超越皇帝成为更优秀的赛${chara_talk.get_uma_sex_title()}。`,
    );
    await chara_talk.say_and_wait(`为此，我必须要让鲁铎象征看着我的背影。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，请祝我一臂之力哦。`,
    );
    await era.printAndWait(`为此，下一个目标已经决定了。`);
    //todo 强敌：“皇帝” 速力智1200 耐根1150 领域
  } else if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('夏季合宿结束·难忘的盛宴', chara_talk);
    await era.printAndWait(`今年夏季合宿过得的非常充实。`);
    await era.printAndWait(
      `除了在沙滩上打排球敲西瓜之类的日常运动，听着后辈${chara_talk.get_uma_sex_title()}们的烦恼然后准确给出建议也是享受的一环。`,
    );
    await era.printAndWait(`在夏季合宿的最后一天,你们参加了宿舍里的派对。`);
    await era.printAndWait(
      `特别周、千代王一脸崇拜的听着${chara_talk.name}讲述自己这二年来的经验，草上飞也向${chara_talk.name}发起了挑战。`,
    );
    await era.printAndWait(`直至深夜临近，大家才心满意足的解散。`);
    await me.say_and_wait(`夏季合宿也快结束了，接下来就是天秋了吧。`, true);
    await me.say_and_wait(
      `比起比赛的话，果然还是${chara_talk.name}的笑脸最棒了。`,
      true,
    );
    era.printButton(`好！回到特雷森后也要全力以赴。`, 1);
    await era.input();
    await era.printAndWait(`自言自语打开房门后，`);
    await me.say_and_wait(`奇怪门没锁吗？`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}♪`,
    );
    await era.printAndWait(`门后出现的${chara_talk.name}向你飞扑了过来。`);
    await chara_talk.say_and_wait(`今天的话一起睡吧？`);
    await me.say_and_wait(`合宿的时候一起睡的话再怎么说也......`);
    await chara_talk.say_and_wait(`已经和理事长小姐说过了哦`);
    await era.printAndWait(
      `${chara_talk.name}似乎在你不知道的时候和理事长达成了什么协议。`,
    );
    await chara_talk.say_and_wait(
      `理事长也希望我们能好好享受青春的时光呢，所以${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }`,
    );
    await era.printAndWait(`${chara_talk.name}满脸通红的看着你。`);
    era.printButton(`要上了`, 1);
    era.printButton(`还是算了吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`接下来请多多关照了♪`);
      await quick_into_sex(4);
    } else {
      await chara_talk.say_and_wait(
        `诶，${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }面对这样的美${chara_talk.get_teen_sex_title()}都提不起兴趣吗？${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我真的要怀疑自己的魅力了呢。`,
      );
      await era.printAndWait(
        `耷拉着耳朵的${chara_talk.name}与平时看上去强烈的反差反而让你激起了施虐心。`,
      );
      await era.printAndWait(`强行压下去的性欲又被提了起来。`);
      await chara_talk.say_and_wait(
        `那么接下来请多关照了，${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }♪`,
      );
      await quick_into_sex(4);
    }
  } else if (edu_weeks === 95 + 40) {
    await print_event_name('不给糖就捣蛋！', chara_talk);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，起床了！`,
    );
    await era.printAndWait(`耳边似乎传来了熟悉的声音.`);
    era.printButton(`唔，再睡一会`, 1);
    await era.input();
    await chara_talk.say_and_wait(`马上就要九点了呢！`);
    era.printButton(`什么九？嗯！`, 1);
    await era.input();
    await era.printAndWait(
      `突然意识到即将发生什么的${me.actual_name}从床上瞬间弹起，紧紧忙忙的穿起衣服。`,
    );
    await me.say_and_wait(`这下要被手纲小姐说教了。`);
    await chara_talk.say_and_wait(`呵呵~`);
    await era.printAndWait(
      `看着${me.name}慌慌张张起床的样子，${chara_talk.name}轻轻的笑了。`,
    );
    await me.say_and_wait(`闹钟怎么没响？欸？`);
    await era.printAndWait(`手机上显示的时间为7点，距离上班还有1个小时。`);
    await me.say_and_wait(`${chara_talk.name}！`);
    await chara_talk.say_and_wait(`不给糖就捣蛋！`);
    await me.say_and_wait(`唔——万圣节不是愚人节啊！`);
    await chara_talk.say_and_wait(
      `不要嘛！我就想要${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }给我糖！`,
    );
    await me.say_and_wait(`好吧好吧，工作结束之后一起去糖果店看一下吧。`);
    await era.printAndWait(`不知何时两人的嘴唇再次贴在了一起。`);
    await chara_talk.say_and_wait(`嗯——那就用这个稍微忍耐一下吧♪`);
    await era.printAndWait(
      `将两人的早餐端上餐桌的${chara_talk.name}露出了可爱的笑容。`,
    );
    era.drawLine({ content: '训练室' });
    await me.say_and_wait(`这就是最后一份了。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}辛苦了♪`,
    );
    await era.printAndWait(
      `坐在身边的${chara_talk.name}熟练的将文件收回文件夹之中。`,
    );
    await me.say_and_wait(`接下来的话。`);
    await chara_talk.say_and_wait(`接下来的话？`);
    await me.say_and_wait(`好像...有什么重要的事情要做？`);
    await chara_talk.say_and_wait(`训·练·员·君？`);
    await era.printAndWait(
      `注意到耳朵向后背过去的${chara_talk.name}，${me.actual_name}不由得心里发毛。`,
    );
    await me.say_and_wait(`快想想，忘了什么？啊，对了！`, true);
    await chara_talk.say_and_wait(`训·练·员·君?`);
    await era.printAndWait(
      `${chara_talk.name}的语气逐渐加重，脸上的表情却没有丝毫的变化。`,
    );
    await me.say_and_wait(`一起去糖果店吧？`);
    await era.printAndWait(`平静的语气连自己都感到了害怕。`);
    await chara_talk.say_and_wait(
      `是呢。哎呀~姐姐都差点忘了呢，真实多亏${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }了♪`,
    );
    await era.printAndWait(
      `刚才的压迫感就像什么也没发生一样消失了，话说${
        chara_talk.sex_code - 1 ? '她' : '他'
      }什么时候可以将领域收发自如了？`,
    );
    await chara_talk.say_and_wait(`一起出发吧？`);
    await me.say_and_wait(`不过出发之前还有一件事。`);
    await chara_talk.say_and_wait(`嗯？`);
    await era.printAndWait(`嘴唇重合在了一起。`);
    await chara_talk.say_and_wait(`唔——哈，哎哎哎？`);
    await era.printAndWait(`长达十五秒的深吻。`);
    await me.say_and_wait(`万圣节快乐！不给糖就捣蛋！`);
    await chara_talk.say_and_wait(
      `欸？${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，我·改·变·想·法·了！`,
    );
    await era.printAndWait(
      `比起柔软的感触${me.actual_name}更加在意${chara_talk.name}即将说出口的话语。`,
    );
    await chara_talk.say_and_wait(`今天晚上不会让${me.name}睡哦❤`);
    await era.printAndWait(
      `全身的力气似乎一瞬间全部消失了一样，浑身瘫软在了${chara_talk.name}的怀抱中。`,
    );
    await chara_talk.say_and_wait(
      `呵呵呵——现在还不是腿软的时候哦，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }。`,
    );
    await era.printAndWait(
      `不知何时润湿的眼角，被${chara_talk.name}轻轻擦去了。`,
    );
    await chara_talk.say_and_wait(
      `晚上也请多指教了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }♪`,
    );
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 43) {
    await print_event_name('温柔的风', chara_talk);
    chara_talk.print(`意外的早起。`);
    chara_talk.print(`揉了揉困倦的眼前却翻来覆去怎么也睡不着。`);
    chara_talk.print(`因为倍感烦闷所幸就这样起床了。`);
    chara_talk.print(`揉了揉发困的眼睛后，打开了窗户。`);
    chara_talk.print(`清爽的空气拜访了这间公寓`);
    chara_talk.print(
      `屋外的金黄色的树叶也脱离了母树的怀抱，随着金风的引导拜访了这里。`,
    );
    await chara_talk.say_and_wait(`欢迎光临`);
    chara_talk.print(`对着小小的客人露出笑脸迎接到来`);
    chara_talk.print(
      `在接受了主人的邀请后，小小的客人便稳稳当当地落在了书桌上`,
    );
    await chara_talk.say_and_wait(`......说起来现在流行用落叶制成的书签呢`);
    chara_talk.print(`小心地将树叶清洗干净后，用字典将树叶进行压平`);
    chara_talk.print(`清爽的空气拜访了这间公寓`);
    await chara_talk.say_and_wait(
      `接下来只要耐心等待太阳的出现了就可以了`,
      true,
    );
    chara_talk.print(`清晨的薄雾尚未散去，月亮依然悬挂在天空之中，繁星点点。`);
    await chara_talk.say_and_wait(`不久之后就是冬天了呢`, true);
    chara_talk.print(
      `春天萌发的树叶，在夏天生长茂盛，在秋天迎来凋零，最后回归冬天的怀抱`,
    );
    await chara_talk.say_and_wait(`我也努力的绽放过了吗？`, true);
    chara_talk.print(
      `突来的一阵强风吹得人几乎睁不开眼睛，金黄色的落叶依依不舍地离开树枝的怀抱，跟随着热情的风前往最后的旅程。`,
    );
    chara_talk.print(
      `像小溪一样奔涌着的，无数的落叶在风的指引下欢快的汇入大地的海洋之中。`,
    );
    await chara_talk.say_and_wait(
      `......真是期待可爱的后辈们最终能达到什么地步呢`,
      true,
    );
    await chara_talk.say_and_wait(`等待着后辈们超越我的那一天`, true);
    chara_talk.print(`温柔的风注视着后辈们的成长`);
  }
  wait_flag && (await era.waitAnyKey());
};
