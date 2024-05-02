const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('情人节', tachyon);
    era.set('cflag:32:节日事件标记', 0);
    if (love >= 75) {
      await tachyon.say_and_wait(['来，', callname, '，情人节巧克力']);
      era.println();
      await era.printAndWait([
        '听见忽然闯入训练员室的 ',
        tachyon.get_colored_name(),
        '，淡淡说出的话，',
        me.get_colored_name(),
        ' 才意识到，今天原来是情人节啊',
      ]);
      await era.printAndWait([
        '为了 ',
        tachyon.get_colored_name(),
        ' 的训练整天忙前忙后，连时间都忘了',
      ]);
      era.println();
      await me.say_and_wait('不过……速子给的巧克力吗', true);
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着 ',
        tachyon.get_colored_name(),
        ' 从身后捧出的心型盒子，里面用小格子一格格分开的小巧巧克力',
      ]);
      await era.printAndWait('里面该不会……');
      era.println();
      await tachyon.say_and_wait(
        '嗯？什么嘛，这种表情，难道是觉得我会在里面加甚么药？',
      );
      era.printButton('点头', 1);
      era.printButton('「难道没有吗？」', 2);
      await era.input();
      await tachyon.say_and_wait('……真是过分的说法，虽然无法反驳');
      await tachyon.say_and_wait(
        '不过今天……毕竟是特别的日子，我还是不会做出那种事的啦',
      );
      await tachyon.say_and_wait('不信的话，我先吃一块？');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着 ',
        tachyon.get_colored_name(),
        ' 将巧克力缓缓推入口中',
      ]);
      await era.printAndWait('被前牙抵住的巧克力，随着樱唇的微启');
      await era.printAndWait('一口，两口');
      await era.printAndWait([
        '顺着手指的推入，巧克力渐渐消失在 ',
        tachyon.get_colored_name(),
        ' 的口中',
      ]);
      era.println();
      await era.printAndWait('这样的话……或许就能放心吃下去了吧');
      await era.printAndWait([
        me.get_colored_name(),
        ' 伸手，朝向桌上的巧克力',
      ]);
      await era.printAndWait('然而');
      era.printButton('「……？」', 1);
      await era.input();
      await era.printAndWait('巧克力盒，在手伸过去的瞬间被抽走了');
      await era.printAndWait(['正当 ', me.get_colored_name(), ' 感到奇怪时']);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('没有防备的唇被偷袭');
      await era.printAndWait('灵巧的舌头撬开牙关后，灌入的是甜腻的黏浆');
      await era.printAndWait(
        '被紧紧压住，抵住的舌头，和压住自己的不速之客化作桥梁，让浓稠的，浓稠的液体顺流而下',
      );
      await era.printAndWait('好甜，好甜');
      await era.printAndWait([
        '完全符合 ',
        tachyon.get_colored_name(),
        ' 口味的巧克力沁入口腔',
      ]);
      await era.printAndWait([
        '明明对 ',
        me.get_colored_name(),
        ' 而言应该会太甜的口味，在 ',
        tachyon.get_colored_name(),
        ' 的舌头搅拌下，竟然渐渐的习惯了起来',
      ]);
      await era.printAndWait([
        '仿佛自己从身体在被改造，被调整成 ',
        tachyon.get_colored_name(),
        ' 喜欢的模样',
      ]);
      await era.printAndWait('……不，调整这个词，或许用的不是那么好');
      era.println();
      await tachyon.say_and_wait(['……', callname, '，巧克力，还有很多哦❤']);
      era.println();
      await era.printAndWait('看着眼前爱人充满情欲及兽欲的眼神');
      await era.printAndWait('啊啊……被「料理」好的食材，就要准备被食用了');
      begin_and_init_ero(0, 32);
      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await print_ero_page(32);
      await end_ero_and_show_result();
    } else if (love >= 50) {
      await tachyon.say_and_wait(['哦呀，', callname, '，情人节快乐！']);
      era.println();
      await era.printAndWait([
        '晴朗的一天，忽然打破这宁静早晨撞开大门，是身后拿着一个大袋子的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('……奇怪，今天应该不是圣诞节啊');
      era.println();
      await tachyon.say_and_wait([
        '嗯？这些？是别的',
        tachyon.get_uma_sex_title(),
        '们送的礼物哦？',
      ]);
      await tachyon.say_and_wait(
        '真是……明明都说不需要了，比起这种东西，倒不如说自愿提供给我实验我还会比较高兴……',
      );
      era.println();
      await era.printAndWait([
        '原来 ',
        tachyon.get_colored_name(),
        '……这么受欢迎吗',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的心中忽然涌起一丝丝的嫉妒',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '不提这个了，总之 ',
        callname,
        ' 快收下我的巧克力吧！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 从包里挑挑拣拣，翻找着袋子里那些大小略有不同但大同小异的巧克力',
      ]);
      await era.printAndWait('难道说……只是随便把其他人给的巧克力转送而已吗？');
      await era.printAndWait([
        '明明和 ',
        tachyon.get_colored_name(),
        ' 的关系并没有到那种程度，却还是忍不住觉得，自己应该有所不同，应该会被特殊对待',
      ]);
      era.printButton('「那是……义理的巧克力吗？」', 1);
      await era.input();
      await era.printAndWait('身为指导者明明不该问这种问题的');
      await era.printAndWait('但是……果然');
      await era.printAndWait([
        '还是想要知道，',
        tachyon.get_colored_name(),
        ' 的真实想法',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '听见 ',
        me.get_colored_name(),
        ' 的话，',
        tachyon.get_colored_name(),
        ' 停下了翻找袋子的手',
      ]);
      await era.printAndWait([
        '抬起头来，直直盯着 ',
        me.get_colored_name(),
        ' 的眼睛',
      ]);
      await era.printAndWait([
        '那双美丽的红瞳，仿佛看透了 ',
        me.get_colored_name(),
        ' 的内心一般',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哦呀，这句话是什么意思呢，',
        callname,
        '？',
      ]);
      await tachyon.say_and_wait('如果说是义理的，该怎么办？');
      await tachyon.say_and_wait(['还是你希望……是什么类型的巧克力呢？']);
      era.printButton('「希望是速子特别送的」', 1);
      era.printButton('「希望是速子只送给我一人的巧克力」', 2);
      await era.input();
      await era.printAndWait('最后，还是不敢说出那两个字');
      await era.printAndWait([
        '怎么可以呢，身为训练员的自己，居然要问负责',
        tachyon.get_uma_sex_title(),
        '对自己是不是「真爱」',
      ]);
      era.println();
      await tachyon.say_and_wait('那么，就给你吧');
      era.println();
      await era.printAndWait(
        '终于，从布袋最底下翻出一个七彩颜色，绝不会被人认错的小包装后',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 将巧克力塞进胸口的小口袋',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '来吧，给亲爱的实验动物，作为一年的感激……以及，感激之外的❤',
      );
      await tachyon.say_and_wait('就请你，亲自来将其拿出吧');
      era.println();
      if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
        await era.printAndWait([
          '看见 ',
          tachyon.get_colored_name(),
          ' 明显将胸前突出的动作',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 颤颤巍巍的伸出手来']);
        await era.printAndWait('小心翼翼，不碰到胸的取出了巧克力');
      } else {
        await era.printAndWait([
          '看见 ',
          tachyon.get_colored_name(),
          ' 明显将胸前突出的动作',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 大方的伸出手，不客气的直接拿走了巧克力',
        ]);
        await era.printAndWait([
          '途中捏到的，使得身前',
          tachyon.get_uma_sex_title(),
          '发出娇声的肉块？',
        ]);
        await era.printAndWait(
          '大概是错觉吧，毕竟放巧克力的架子怎么会发出声音来呢',
        );
        begin_and_init_ero(0, 32);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.breast),
          false,
        );
        end_ero_and_train();
      }
      era.println();
      await era.printAndWait([
        '拨开巧克力的包装，',
        me.get_colored_name(),
        ' 将巧克力含在口中',
      ]);
      await era.printAndWait('在放进口中的瞬间，巧克力便直接融化了');
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('猪肉、洋葱、酱汁……');
      await era.printAndWait([
        '完全不像巧克力该出现的味道弥漫在 ',
        me.get_colored_name(),
        ' 口中',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？表情怎么这么奇怪？']);
      await tachyon.say_and_wait(
        '快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……',
      );
      await era.printAndWait([
        '忽然一改前面的暧昧气氛，',
        tachyon.get_colored_name(),
        ' 兴奋的问起 ',
        me.get_colored_name(),
        ' 吃下巧克力的反应',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？难道说，你不想对我辛苦在实验室调配了半天做出的巧克力做出评价吗？',
      ]);
      era.println();
      await era.printAndWait('…………这个家伙');
    } else if (relation > 225) {
      await tachyon.say_and_wait(['哈哈哈！', callname, '！']);
      era.println();
      await era.printAndWait([
        '随着一阵开朗的笑声，撞开训练员室大门的，是身后拿着一个大袋子的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Merry Christmas？Happy New Year？反正就是某种节日快乐，快快快，收下我的礼物吧！',
      );
      era.printButton('「……是说，情人节吗？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '唔……不重要，总之这是个可以合法塞食物给别人的节日对吧？',
      );
      era.println();
      await era.printAndWait('……这样解释似乎也没错？');
      await era.printAndWait([
        '但是一想到对方是 ',
        tachyon.get_colored_name(),
        '……',
      ]);
      era.printButton('「……你加了什么药」', 1);
      era.printButton('「……你给多少人了」', 2);
      await era.input();
      await tachyon.say_and_wait('那种事不重要！快收下吧，我的情人节礼物！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 从包里挑挑拣拣，拿出了一块尤其大块的巧克力，没有问过 ',
        me.get_colored_name(),
        ' 的允许就塞进 ',
        me.get_colored_name(),
        ' 的手里',
      ]);
      await era.printAndWait([
        '看',
        tachyon.sex,
        '熟练的动作，一路上应该已经给过不少人了吧',
      ]);
      await era.printAndWait('……明天得去各方道歉才行，但首先要先活过这关');
      await era.printAndWait([
        me.get_colored_name(),
        ' 战战兢兢的咬了口巧克力',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('发光、变形、长出两颗头、背上生出翅膀、液化……');
      await era.printAndWait('种种变化都………没有发生');
      await era.printAndWait('要说的话，大概，可能，说不定只是普通的巧克力');
      await era.printAndWait([
        '但是，这是 ',
        tachyon.get_colored_name(),
        ' 标准的「正常」',
      ]);
      await era.printAndWait('要说是不是正常人来说的巧克力……');
      era.printButton('为什么……是猪排盖饭味的！？', 1);
      await era.input();
      await era.printAndWait('猪肉、洋葱、酱汁……');
      await era.printAndWait([
        '完全不像巧克力该出现的味道弥漫在 ',
        me.get_colored_name(),
        ' 口中',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？表情怎么这么奇怪？']);
      await tachyon.say_and_wait(
        '快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……',
      );
      era.println();
      await era.printAndWait('这家伙……连自己都不知道药效是什么就随便给人塞吗');
      await era.printAndWait([
        '其他日子也就算了，想起这个情侣们到处放闪喂狗粮的日子被 ',
        tachyon.get_colored_name(),
        ' 这样毁掉…………',
      ]);
      await era.printAndWait([
        '奇怪，怎么忽然觉得 ',
        tachyon.get_colored_name(),
        ' 做的对呢',
      ]);
      await era.printAndWait([
        '…………总之，还是该给 ',
        tachyon.get_colored_name(),
        ' 些教训才对',
      ]);
      era.printButton('「好像没有出现效果啊」', 1);
      era.printButton('「速子也吃吃看吧」', 2);
      await era.input();
      await era.printAndWait([
        '没等 ',
        tachyon.get_colored_name(),
        ' 回应，',
        me.get_colored_name(),
        ' 就将吃了一口的巧克力塞进 ',
        tachyon.get_colored_name(),
        ' 口中',
      ]);
      era.println();
      await tachyon.say_and_wait('唔！？咕呜！？');
      era.println();
      await era.printAndWait([
        '猝不及防的 ',
        tachyon.get_colored_name(),
        ' 被塞了满嘴的巧克力',
      ]);
      await era.printAndWait([
        '想要开口的',
        tachyon.sex,
        '不由得将嘴里的巧克力吞下',
      ]);
      era.println();
      await tachyon.say_and_wait(['等，你在做什么！', callname, '！？']);
      await tachyon.say_and_wait('呜呃……这是什么味道！？');
      await tachyon.say_and_wait([
        '好奇怪的味道！！为什么巧克力会有猪排的味道啊！',
      ]);
      era.println();
      await era.printAndWait([
        '虽然明天大概会被狠狠报复，但此刻看见 ',
        tachyon.get_colored_name(),
        ' 满脸惊愕和恶心的模样',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 还是感到心中一阵畅快']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 吵吵闹闹的情人节结束了',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '！哈哈哈，情人节快乐！']);
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait([
        '看见如此亢奋的 ',
        tachyon.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 不由得有些警惕',
      ]);
      await era.printAndWait([
        '原因无他，平常态度总是冷淡的 ',
        tachyon.get_colored_name(),
        '，今天的态度却意外的亢奋',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '嗯？',
        callname,
        '？怎么了，不祝我情人节快乐吗？是不是……不喜欢我……咕呜……',
      ]);
      await tachyon.say_and_wait('呜呜……唔……头……好晕……');
      era.println();
      await era.printAndWait([
        '奇怪，怎么总觉得今天的 ',
        tachyon.get_colored_name(),
        '……有些奇怪',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 仔细观察着 ',
        tachyon.get_colored_name(),
        ' 的脸，原本以为是因为寒冷的天气或者兴奋的情绪而微红的脸颊和迷离的双眼顿时被 ',
        me.get_colored_name(),
        ' 捕捉',
      ]);
      era.printButton('「……速子，你喝酒了？」', 1);
      await era.input();
      await tachyon.say_and_wait('唔……才没有……');
      await tachyon.say_and_wait('只是……只是……不小心喝了点……乙醇的混合物……');
      era.println();
      await era.printAndWait('乙醇混合物……那不就是酒吗！？');
      await era.printAndWait([
        '难怪 ',
        tachyon.get_colored_name(),
        ' 的情绪看起来如此不对劲……',
      ]);
      await era.printAndWait('总之，这样今天大概是没法训练了');
      await era.printAndWait(['还是先让', tachyon.sex, '好好休息吧']);
      era.println();
      await era.printAndWait([
        '然而看上去并不想休息的 ',
        tachyon.get_colored_name(),
        ' 躲过了 ',
        me.get_colored_name(),
        ' 的手后',
      ]);
      await era.printAndWait(
        '在怀中翻了几下，才从那总是藏在白大褂内侧口袋的药瓶中，勉强找出了某个用实验滤纸包裹的东西',
      );
      await era.printAndWait('拨开一看，里面是一块七彩颜色的巧克力');
      era.println();
      await tachyon.say_and_wait(['唔……对……对了……', callname, '……？']);
      await tachyon.say_and_wait('情……情人节的，巧克力……');
      era.drawLine();
      await era.printAndWait('如此不妙的情人节礼物，真是第一次看到啊');
      await era.printAndWait('真的要把这么可疑的巧克力吃下去吗');
      era.printButton('「这是……用什么做的？」', 1);
      await era.input();
      await tachyon.say_and_wait('用……什么？唔……忘记了……');
      await tachyon.say_and_wait(
        '好像……好像……可可粉……牛奶……糖……酱油……洋葱……生猪肉？',
      );
      era.println();
      await era.printAndWait(
        '最后那几个完全不是应该出现在巧克力里的东西吧！？',
      );
      await era.printAndWait('不过……值得庆幸的是起码没放什么有毒的东西吗？');
      await era.printAndWait('虽然味道一定会很怪');
      era.println();
      await tachyon.say_and_wait('为……为什么不吃……');
      await tachyon.say_and_wait([
        '吃啊……',
        callname,
        '……是不是……不给我面子……',
      ]);
      era.println();
      await era.printAndWait('怎么忽然变成劝酒的大叔口气了！？');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 看 ',
        me.get_colored_name(),
        ' 一直迟迟不肯动手，干脆自己拿起了巧克力',
      ]);
      await era.printAndWait('然后……叼在口中');
      era.println();
      await tachyon.say_and_wait('唔……滋样继嫩吃了吧（这样就能吃了吧）');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 将巧克力轻轻咬在口中',
      ]);
      await era.printAndWait([
        '樱唇微启，朝着 ',
        me.get_colored_name(),
        ' 示意从另外一边咬上来',
      ]);
      await era.printAndWait('……欸？');
      era.println();
      await tachyon.say_and_wait(
        '嘻嘻……滋样苏不定u机会亲得呃（这样说不定有机会亲到哦）',
      );
      era.println();
      await era.printAndWait('……这就是酒的魔力吗');
      await era.printAndWait([
        '原本总是不给自己好脸色看的 ',
        tachyon.get_colored_name(),
        '，表情居然变得如此柔和，妩媚',
      ]);
      await era.printAndWait([
        '不由自主的，',
        me.get_colored_name(),
        ' 上前咬住了巧克力',
      ]);
      era.println();
      await era.printAndWait('好近，好近');
      await era.printAndWait([
        '近的能够直接感受到 ',
        tachyon.get_colored_name(),
        ' 的鼻息',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 望着 ',
        tachyon.get_colored_name(),
        ' 的眼睛',
      ]);
      await era.printAndWait('那令人着迷，现在却有些醉朦的眼眸');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 小口小口咬着，生怕万一巧克力吃完了，这样的时光就会消失',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 也慢慢的，向前靠近，近的两对蝶唇几乎就要碰在一起……不，也或许，已经碰到了呢？',
      ]);
      await era.printAndWait('然而……巧克力的大小也就那样');
      await era.printAndWait(
        '或许是温度影响，也或许是谁率先断了这维持不易的连结',
      );
      await era.printAndWait([
        '巧克力在 ',
        me.get_couple_title(),
        ' 两人的口中融化，断裂，进入了两人的口中',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('……没毒');
      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 的淫威下试过许多次药的 ',
        me.get_colored_name(),
        ' 可以大胆做出判断，不是有毒的东西',
      ]);
      await era.printAndWait('但是这个味道……这个味道……');
      era.printButton('「为什么……是猪肉盖饭……？」', 1);
      await era.input();
      await era.printAndWait('虽然在听见最后那些莫名其妙的食材之后就有所预感');
      await era.printAndWait('但这味道还是令人难以理解');
      await era.printAndWait('不如说，到底是怎么做出这种巧克力来的……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 看向 ',
        tachyon.get_colored_name(),
        '，',
        tachyon.get_colored_name(),
        ' 却一直没有说话',
      ]);
      await era.printAndWait('该不会……有什么问题……');
      era.println();
      await tachyon.say_and_wait('……………噗');
      await tachyon.say_and_wait('哈哈哈哈！这什么味道啊！也太奇怪了！');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 忽然开始大笑']);
      await era.printAndWait('难道是有什么自己并不知道的笑点吗？');
      await era.printAndWait([me.get_colored_name(), ' 思考了一下']);
      await era.printAndWait('猪排盖饭味道的巧克力');
      await era.printAndWait('…………仔细想想，好像确实挺好玩的');
      era.println();
      await era.printAndWait([
        '不知不觉，',
        me.get_colored_name(),
        ' 也跟着笑了起来',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('zzz……唔嗯……咻……');
      era.println();
      await era.printAndWait('真是……胡闹完之后就自顾自的睡着了');
      await era.printAndWait([
        '难道说，',
        tachyon.get_colored_name(),
        ' 有变成那种酒品不好的醉汉的潜力吗……？',
      ]);
      era.println();
      await tachyon.say_and_wait('嗯……豚鼠……谢……咻……');
      era.println();
      await era.printAndWait('………难道说');
      await era.printAndWait('是因为害羞，不敢说出口所以……');
      await era.printAndWait([
        '不，在想什么呢，',
        tachyon.get_colored_name(),
        ' 的话……八成真的是意外……吗？',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 擦了擦 ',
        tachyon.get_colored_name(),
        ' 嘴边的口水',
      ]);
      await era.printAndWait([
        '姑且……等',
        tachyon.sex,
        '醒来之后跟',
        tachyon.sex,
        '确认一下吧，希望……',
        tachyon.sex,
        '最起码知道巧克力里该加和不该加的东西',
      ]);
    }
    new TachyonLifeMarks().choco = 1;
  };

  handlers[95 + 14] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    await print_event_name('粉丝感谢祭', tachyon);
    era.set('cflag:32:节日事件标记', 0);
    if (edu_marks.plan_b) {
      await era.printAndWait([
        '对身体的准备还没完全完善，因此 ',
        tachyon.get_colored_name(),
        ' 拒绝了关于粉丝感谢祭的活动与采访',
      ]);
      await era.printAndWait([
        '这也使得周围对于「',
        tachyon.get_colored_name(),
        ' 复出」一事产生了不稳定的心态以及怀疑',
      ]);
      await era.printAndWait([
        '但这些都与 ',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 无关，质疑……',
      ]);
      await era.printAndWait(
        '不，如果按照两人的预定计划走，那么质疑越多可能反而越利于两人的计划推行才对',
      );
      await era.printAndWait([
        '……因此，听见那些人对 ',
        tachyon.get_colored_name(),
        ' 的批评，',
        me.get_colored_name(),
        ' 只能默默咬着牙关，离开现场',
      ]);
    } else {
      await tachyon.say_and_wait(['因此，根据我的实验结果……大阪杯时粉丝……']);
      await tachyon.say_and_wait(
        '以及某人，具有的热情制造出了力量，使我超越了原来的速度，果然，感情是带有一定程度力量的吧',
      );
      era.printButton('「没想到速子居然会相信这种唯心的概念啊」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '我只相信真理及可能性，只要有这个可能性我就能赌上一切……',
        callname,
        ' 你不也是吗？',
      ]);
      await tachyon.say_and_wait([
        '唯物唯心都好，只要能够为我所用，让我超越极限，抵达可能性的尽头……哪怕是 ',
        sys_get_colored_callname(32, 25),
        ' 的朋友，我也不会吝啬借其一用的',
      ]);
      await tachyon.say_and_wait(
        '……不过要合理解释的话，大概是与大脑皮层及中枢神经的活跃程度有关吧，简单来讲就是……呵呵，合法的兴奋剂？',
      );
      era.printButton('「！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '呵呵，开玩笑的……但本质上这种兴奋对体能的加成，如果是无意识之下，那么提升的兴奋阀值也有限',
      );
      await tachyon.say_and_wait([
        '起码绝对不会有大阪杯那时测量出来的那么高……难道说是我自己精神上……',
      ]);
      era.printButton('「速子？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……不，没什么，还需要再进行验证罢了，比起这个，我想更加深入研究看看……『粉丝』的概念',
      );
      era.printButton('「粉丝……」', 1);
      era.printButton('「那也就是说……」', 2);
      await era.input();
      await tachyon.say_and_wait('错……我打算参加看看，粉丝感谢祭');
      await tachyon.say_and_wait(
        '近距离的接触……这次的目的有二，如果顺利的话……希望能一次解决',
      );
      era.drawLine();
      await say_by_passer_by_and_wait('粉丝A', [
        '速子',
        tachyon.get_adult_sex_title(),
        '！请问可以和您拍张照吗！',
      ]);
      await tachyon.say_and_wait('呵呵，当然可以了，需要摆什么特殊的姿势吗？');
      await say_by_passer_by_and_wait(
        '粉丝A',
        '不，不用，只需要像这样双手抱胸就可以了！',
      );
      await tachyon.say_and_wait('像这样吗？');
      await say_by_passer_by_and_wait('粉丝A', '非，非常感谢！');
      era.println();
      await say_by_passer_by_and_wait(
        '粉丝B',
        '速子同学！我支持你很久了！宝冢纪念也要加油啊',
      );
      await tachyon.say_and_wait('是吗是吗？谢谢你的鼓励');
      await say_by_passer_by_and_wait(
        '粉丝B',
        '是的，希望速子同学之后也能继续跑出更加令人着迷的跑法来！',
      );
      await tachyon.say_and_wait('一定会的，哈哈哈哈！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 有条不紊的与来访的粉丝们进行着应答',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 营业模式与一般情况的差距……',
      ]);
      await era.printAndWait([
        '有时差距真的大到会让人开始怀疑到底哪边才是',
        tachyon.sex,
        '的本性',
      ]);
      await era.printAndWait('很快的，活动便结束了');
      era.println();
      await tachyon.say_and_wait('唔……收集到了很有趣的数据呢');
      await tachyon.say_and_wait(
        '我整理了今天来无论是握手签名还是拍照的比赛观众——',
      );
      await tachyon.say_and_wait(
        '以下简称为『粉丝』，观看比赛的目的，以及见到我之后的心跳呼吸脉搏反应速率……',
      );
      await tachyon.say_and_wait('根据粉丝不同的说法做出了结论');
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        '，对这些粉丝而言，类似于实验中的奖赏',
      ]);
      await tachyon.say_and_wait(
        '付出名为应援的努力，希望能够获得回应作为奖赏……',
      );
      era.printButton('「……我不觉得是这样」', 1);
      era.printButton('「对速子的应援没有那么复杂」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……嗯，这个论述的话，最大的破绽就在于，',
        callname,
        '，你的支援又是为了什么',
      ]);
      await tachyon.say_and_wait([
        '皋月赏、日本德比、菊花赏，还有大阪杯……你都为我应援了吧',
      ]);
      await tachyon.say_and_wait(
        '但是与他们不同……跟在我身边的你是知道的，知道当时的我还没有将粉丝的支持当成需要特别看待的实验变量',
      );
      await tachyon.say_and_wait(
        '所以你的应援及支持，无法获得任何的回报，和你对我的研究的支持不同……',
      );
      await tachyon.say_and_wait(
        '相比你对我研究上的支持，能够获得你想要看见的跑法和比赛……',
      );
      await tachyon.say_and_wait('但应援和支持这方面，完全不明白啊');
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 的询问，',
        me.get_colored_name(),
        ' 不由得一时语塞',
      ]);
      await era.printAndWait([
        '要对 ',
        tachyon.get_colored_name(),
        ' 的问题做出回答其实并不难',
      ]);
      await era.printAndWait(
        '但……这种感情上的东西，真的是能够透过言语来使人理解的吗',
      );
      await era.printAndWait([
        '看 ',
        me.get_colored_name(),
        ' 没回话，',
        tachyon.get_colored_name(),
        ' 又继续说道',
      ]);
      era.println();
      await tachyon.say_and_wait('这样的话，今天的实验只能算成功一半吧……');
      await tachyon.say_and_wait([
        '之后就是宝冢纪念了，这次要整体测量粉丝的支持对数据的影响才行',
      ]);
      await era.printAndWait([
        '在迷惑中，',
        tachyon.get_colored_name(),
        ' 的粉丝感谢祭结束了',
      ]);
      flags.wait_flag = sys_change_motivation(32, 1);
    }
  };
};
