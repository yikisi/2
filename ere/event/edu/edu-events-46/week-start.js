const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const {get_chara_talk} = require('#/utils/chara-talk-factory');
const {location_enum} = require('#/data/locations');
const {
    sys_like_chara,
    sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const {add_event} = require('#/event/queue');
const event_hooks = require('#/data/event/event-hooks');
const FaEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-46');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async function (event_object) {
    const love = era.get('love:46'),
        me = get_chara_talk(0),
        chara_talk = get_chara_talk(46),
        event_marks = new FaEventMarks(),
        edu_weeks = era.get('flag:当前回合数') - era.get('cflag:46:育成回合计时');
    let wait_flag = false;
    if (event_marks.start === 1) {
        event_marks.start++;
        await print_event_name(`First！偶像的第一步`, chara_talk);
        era.printButton(`最后一圈！`, 1);
        await era.input();
        await chara_talk.say_and_wait(`哈啊啊啊啊啊啊！`);
        await era.printAndWait(`比起第一次奔跑时用时缩短了半秒，这也多亏了训练的成果吧。`);
        await me.say_and_wait(`辛苦了！`);
        await era.printAndWait(`将准备好的毛巾递给醒目飞鹰，草地赛道上略显嘈杂的加油声传到了泥地赛道这边来。`);
        await chara_talk.say_and_wait(`......训练员先生，飞鹰子现在怎么样！`);
        await era.printAndWait(`身体稍微冷却下来后，你将矿泉水递给了她。`);
        await me.say_and_wait(`而且，与草地赛道不同，泥地赛道中被前方马娘扬起的尘土刺激道眼睛的话，身体也有可能受到影响。`, true);
        await era.printAndWait(`相比之下，飞鹰子更喜欢引领着马群的整体步伐。`);
        await me.say_and_wait(`所有跑法之中，最适合的恐怕还是逃马。`, true);
        await me.say_and_wait(`不过这样确实有飞鹰子的风格呢。`);
        await era.printAndWait(`寄托着粉丝们希望的偶像，从开始一直闪耀到冲线。`);
        await chara_talk.say_and_wait(`毕竟飞鹰子是闪闪发光的偶像⭐`);
        await chara_talk.say_and_wait(
            `如果不能让粉丝们看到飞鹰子一直闪耀着的话，作为偶像也失格了呢。`,
        );
        await era.printAndWait(`如果没足够熟练的园丁给充满杂草的花园修建的话，即使是充满潜力的种子也不能期待它成长的时刻。`);
        await me.say_and_wait(`那么，这次针对速度进行训练吧！`);
        await chara_talk.say_and_wait(
            `训练员先生！飞鹰子已经准备好了！`,
        );
        await era.printAndWait(`无视越来越巨大的噪声，（玩家名）将注意力集中到了醒目飞鹰的身上。`);
        await me.say_and_wait(`预备！`);
        await era.printAndWait(`醒目飞鹰的身体绷紧，眼神紧紧盯着前方的赛道。`);
        await era.printAndWait(
            `随着发令枪的响起，充满尘土与沙砾的偶像之路开始了。`,
        );
        wait_flag =
            get_attr_and_print_in_event(46, [0, 0, 0, 0, 0], 30) || wait_flag;
    } else if (event_marks.lucky_girl === 1) {
        event_marks.lucky_girl++;
        await print_event_name(`四叶幸运草`, chara_talk);
        await me.say_and_wait(`辛苦了，醒目飞鹰。`);
        await era.printAndWait(
            `从居住的房间醒来时，（玩家名）看到的是作为妻子的醒目飞鹰的笑脸。`
        );
        await era.printAndWait(
            `洗漱完毕之后，迎接的是热气腾腾的饭菜以及整理好的资料。`
        );
        await era.printAndWait(
            `吃饭时，话题常从作为偶像必须要知道的技能讨论到闪闪发光的可爱饰品。`
        );
        await era.printAndWait(
            `从前一直喜欢坐在旁边盯着你傻笑的醒目飞鹰，现在常常因为忙的不可开交的日程表靠着你的肩膀小憩。`
        );
        await me.say_and_wait(`接下来的话我来开车吧。`);
        await era.printAndWait(
            `从演唱会的场地回到特雷森之中，差不多有3到4个小时的路程。`
        );
        await chara_talk.say_and_wait(
            `（玩家名），飞鹰子的表演怎么样！`,
        );
        await me.say_and_wait(`不得不说已经有顶级偶像的水平了！`);
        await chara_talk.say_and_wait(
            `飞鹰子还要再努力才行呢！`,
        );
        await era.printAndWait(`一起回到居住的公寓，在浴缸中慢慢放松之后。`);
        await era.printAndWait(
            `为了不将多余的疲劳带到第二天，两人就早早的上床睡觉了。`,
        );
        await chara_talk.say_and_wait(`晚安，（玩家名）。`);
        await me.say_and_wait(`晚安，醒目飞鹰。`);
        await era.printAndWait(
            `照例的睡前接吻后，闭上了眼睛等待着舒缓的音乐响起。`,
        );
        era.drawLine();
        await chara_talk.say_and_wait(`唔，这里是哪里？`, true);
        await era.printAndWait(`似乎来到了一处陌生的土地。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`庞大的建筑群像是沉默的石像缄默地等待着。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`不管怎么样先联系（玩家名）先生吧。`);
        await era.printAndWait(`醒目飞鹰从裙子口袋中伸出手寻找电话时`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`空荡荡的口袋里一无所有。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`是不小心掉到哪里去了吗？`);
        await era.printAndWait(`从额头上开始滴落冷汗的醒目飞鹰最终得出了一个结论`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`先找周围的人去问问看吧？`);
        await era.printAndWait(`虽然在昏黄的光线照耀下看不清路人的脸，但直到现在为止都属于现实的范围内。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`走到手牵着手的恋人身边。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`打扰一下，请问？`);
        await era.printAndWait(`有说有笑的穿过了醒目飞鹰的恋人们无视了带着笑脸的醒目飞鹰。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`好像没什么用呢。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`该怎么办？`);
        await chara_talk.say_and_wait(`如果（玩家名）在我身边就好了。`);
        await era.printAndWait(`突然消沉下去的醒目飞鹰似乎找到了灵感。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(
            `！我记得听训练员先生说过，关键线索说不定就在最显眼的地方。`,
        );
        await era.printAndWait(`醒目飞鹰将视线望向了那座巨大的建筑物中。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`先进去看看吧。`);
        await era.printAndWait(
            `走进建筑物之中，令人安心的柔和光线照在了醒目飞鹰的身上。`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(`越往建筑物中间走去，里面的人越多，`, {
            color: chara_talk.color,
        });
        await era.printAndWait(
            `像是男粉丝的影子A「听说了吗？有个可爱的偶像将在这里开演唱会！」`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(
            `像是女游客的影子B「好像是一个参与泥地比赛胜利的小马娘第一次登场！」`,
            {
                color: chara_talk.color,
            },
        );
        await chara_talk.say_and_wait(`泥地马娘吗？听起来是个很可爱的后辈呢`, true);
        await era.printAndWait(
            `向着高大建筑的二楼走去，从自动扶梯上往下看人头攒动的样子。`,
            {
                color: chara_talk.color,
            },
        );
        await chara_talk.say_and_wait(`黑压压的一片似乎都是人呢。`, true);
        await era.printAndWait(
            `二楼似乎比一楼更加宽敞的样子，粉丝们的身影似乎也变得更多了起来。`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(
            `像是学生马娘的影子A「听说了吗！引导着人们关注泥地的可爱偶像XXXX似乎就要开始表演了！」`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(
            `像是小马娘的影子B「欸？XXXX是谁啊？今天是我第一次看到赛马娘的身影呢！」`,
            {
                color: chara_talk.color,
            },
        );
        await chara_talk.say_and_wait(`......`);
        await era.printAndWait(`继续向深处前进，似乎来到了一片完全黑暗的地方。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(
            `稍微有点害怕呢......不！（玩家名）一定在某处保护我的！`,
        );
        await chara_talk.say_and_wait(`飞鹰子！加油！`);
        await era.printAndWait(`鼓足干劲之后向前奔跑着。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`周围似乎也出现了马娘幻影一样的存在。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`眼前的场景再次变换，似乎变成了一处赛场。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`是比赛吗？飞鹰子可不会害怕的！`);
        await era.printAndWait(
            `来到了自己熟悉的地方之后，飞鹰子恢复了平时的状态。`,
            {
                color: chara_talk.color,
            },
        );
        await chara_talk.say_and_wait(
            `就让飞鹰子给这里的粉丝们也带来闪耀的一面吧⭐`,
        );
        await era.printAndWait(
            `似乎完全没有体力消耗的样子，比平时的速度更快，就像飞起来了一样，将后面的幻影远远的甩在了后面。`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(`直到冲线为止，赛场的幻影再次发生了变换。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`好像是出道战时的舞台，不过大得多的多。`);
        await era.printAndWait(`突然之间，所有的灯光都照到了醒目飞鹰的身上。`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`周围的舞台似乎坐满了前来围观的粉丝们。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`大家！这里是飞鹰子哦！`);
        await era.printAndWait(`排练过无数次的本能反应，下意识说出口了。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`只能继续下去了！`, true);
        await chara_talk.say_and_wait(`感谢大家一直支持着飞鹰子！`);
        await chara_talk.say_and_wait(`那么，大家一起来！`);
        await chara_talk.say_and_wait(`如果飞鹰子逃跑了~？`);
        await era.printAndWait(`粉丝们「就只能追上去了！」`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`要追到地平线的尽头吗~？`);
        await era.printAndWait(`粉丝们「那里就是飞鹰子的大舞台！」`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(
            `没有路就让飞鹰子来找! 发现目标就快快去抓到!`,
        );
        await era.printAndWait(`粉丝们「——去抓住大大的爱吧！」`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`最强的马娘偶像，醒目飞鹰♪今天也送到了呢⭐`);
        await era.printAndWait(`粉丝们「——哦哦哦哦哦！」`, {
            color: chara_talk.color,
        });
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！飞鹰子！」`, {
            color: chara_talk.color,
        });
        await era.printAndWait(
            `让身体随着肌肉记忆自己动了起来，台下的粉丝们挥舞着荧光棒在向醒目飞鹰喝彩。`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(
            `一切的悲伤都被醒目飞鹰的笑容所感染，一切的痛苦都得到了治愈。`,
            {
                color: chara_talk.color,
            },
        );
        await era.printAndWait(`然后————。`, {
            color: chara_talk.color,
        });
        era.drawLine();
        era.printButton(`飞鹰子！飞鹰子！马上就要上课了！`, 1);
        await era.input();
        await era.printAndWait(`似乎一觉睡到早上了。`, {
            color: chara_talk.color,
        });
        await chara_talk.say_and_wait(`......`);
        await chara_talk.say_and_wait(`......唔，这里是？`);
        await chara_talk.say_and_wait(`训练员先生？`);
        await era.printAndWait(`从床上苏醒的醒目飞鹰似乎觉得非常的轻松。`);
        era.printButton(`怎么了吗？`, 1);
        await era.input();
        await chara_talk.say_and_wait(`......飞鹰子做了很幸福的梦哦⭐`);
        await era.printAndWait(`飞鹰子露出了最灿烂的笑容。`);
        wait_flag =
            get_attr_and_print_in_event(46, [20, 20, 20, 20, 20], 60) || wait_flag;
    } else if (edu_weeks === 24) {
        await print_event_name(`油桐花`, chara_talk);
        await era.printAndWait(`7月初的某一天。`);
        await era.printAndWait(
            `按照计划踏踏实实进行训练的醒目飞鹰，现在已经能在出道战很大概率获胜了。`,
        );
        await chara_talk.say_and_wait(`训练员先生！`);
        await era.printAndWait(`穿着夏季校服的醒目飞鹰走进了训练室中。`);
        await chara_talk.say_and_wait(`目标是顶级偶像——醒目飞鹰！`);
        await chara_talk.say_and_wait(`训练员先生觉得这样的台词怎么样？`);
        await me.say_and_wait(`我觉得不太行。`);
        await chara_talk.say_and_wait(
            `嗯——向着顶级偶像不断努力着的闪耀偶像——飞鹰子！`,
        );
        await me.say_and_wait(`差了些什么。`);
        await chara_talk.say_and_wait(
            `没有路就让飞鹰子去找，向着地平线一口气逃跑的马娘偶像——醒目飞鹰♪`,
        );
        await me.say_and_wait(`感觉还行吧。`);
        await chara_talk.say_and_wait(
            `唔——没有合适台词出现的话，飞鹰子可能会被无视掉吧！`,
        );
        await me.say_and_wait(
            `相比于苦思冥想的话，去努力训练取得第一更能吸引粉丝！`,
        );
        await chara_talk.say_and_wait(`无法反驳的正论呢`);
        await era.printAndWait(
            `安静下来的飞鹰子，坐在旁边拿起了笔开始在空白的A4纸上琢磨着自己的台词。`,
        );
        await me.say_and_wait(`还在思考台词的事情吗？`);
        await chara_talk.say_and_wait(`嗯。`);
        await me.say_and_wait(`飞鹰子作为偶像很努力呢。`);
        await era.printAndWait(`轻轻抚摸着飞鹰子的脑袋。`);
        await chara_talk.say_and_wait(`啊！`);
        await era.printAndWait(`似乎是露出了暧昧的笑容吗？`);
        await chara_talk.say_and_wait(
            `训练员先生对其他马娘这么做的话会被马娘踹的！`,
        );
        await me.say_and_wait(`知道了，只会对飞鹰子这么做。`);
        await chara_talk.say_and_wait(`飞鹰子的话.....的话`);
        await chara_talk.say_and_wait(
            `之后还有出道战的比赛呢，所以飞鹰子先去训练场了！`,
        );
        await era.printAndWait(`像是逃跑一般的离开了训练室。`);
        await me.say_and_wait(`接下来也要认真准备比赛的事情了。`);
        await era.printAndWait(`将飞鹰子的草稿收进文件夹后，你也离开了训练室。`);
        wait_flag =
            get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 0) || wait_flag;
    } else if (edu_weeks === 47 + 1) {
        await print_event_name('新年的感觉！', chara_talk);
        await era.printAndWait(`时间流逝，（玩家名）与醒目飞鹰进入了新的一年。`);
        await chara_talk.say_and_wait(`训练员新年快乐！`);
        await era.printAndWait(`轻轻推开训练室的大门，遇到了醒目飞鹰的笑脸。`);
        era.printButton(`飞鹰子新年快乐！`, 1);
        await era.input();
        await era.printAndWait(`虽然有些意外，不过还是以笑容回应了她。`);
        await chara_talk.say_and_wait(`这个！是送给训练员先生的哦！`);
        await era.printAndWait(`飞鹰子将亲手制作的贺卡递给了（玩家名）`);
        await me.say_and_wait(`非常感谢。`);
        await me.say_and_wait(`飞鹰子的话希望有什么奖励呢？`);
        await chara_talk.say_and_wait(
            `啊哈哈......这个的话，可以等飞鹰子想好再说吗？`,
        );
        await era.printAndWait(`意外露出了害羞表情的醒目飞鹰意外的可爱。`);
        await chara_talk.say_and_wait(
            `好！说到新年的话，就是在暖和的围炉里看艺人们之间的表演了。`,
        );

        await me.say_and_wait(`平时这么辛苦的飞鹰子现在的话多休息一会也好哦。`);
        await era.printAndWait(
            `不知不觉抚摸着醒目飞鹰圆圆的脑袋，她似乎也没有反对的样子？`,
        );
        await chara_talk.say_and_wait(`嗯......训练员先生接下来有什么计划吗？`);
        await era.printAndWait(
            `转移话题的技术稍微有些生硬呢。不过对此并不计较的（玩家名）认真思考着给醒目飞鹰的回复。`,
        );
        await me.say_and_wait(`既然这样的话。`);
        era.printButton(`还是想看到飞鹰子在舞台上闪闪发光的样子`, 1);
        era.printButton(`今天就好好休息吧`, 2);
        era.printButton(`考虑一下新的舞蹈吧`, 3);
        const ret1 = await era.input();
        if (ret1 === 1) {
            await chara_talk.say_and_wait(`既然这样的话，一起去训练场好好训练吧！`);
            await chara_talk.say_and_wait(
                `任何闪耀的时刻都是由平时一点一滴的汗水积累起来的呦♪`,
            );
            await me.say_and_wait(
                `既然飞鹰子都这么说了，那么今天就在训练场将青春燃烧吧！`,
            );
            await chara_talk.say_and_wait(`飞鹰子一定会努力的！`);
            await era.printAndWait(`之后你们在训练场训练到了门禁时刻。`);
        } else if (ret1 === 2) {
            await chara_talk.say_and_wait(
                `嗯，训练员先生都这么说的话，飞鹰子今天就稍微休息一会吧！`,
            );
            await era.printAndWait(`坐在电视前一起吃着堆成小山的零食讨论着。`);
            await era.printAndWait(
                `与平时努力闪耀的飞鹰子相比，安静下来的飞鹰子似乎也有一种独特的魅力。`,
            );
            await me.say_and_wait(`不自觉露出笑容的飞鹰子比平时更加可爱哦。`);
            await chara_talk.say_and_wait(`哎！飞鹰子居然忘了表情管理了！`);
            await chara_talk.say_and_wait(`果然飞鹰子还是太懒散了吗？`);
            await era.printAndWait(
                `慌慌张张的控制住自己表情的飞鹰子显得更加可爱了。`,
            );
            await chara_talk.say_and_wait(
                `作为偶像给粉丝一号的特殊福利，不要告诉其他人哦？`,
            );
            await me.say_and_wait(`是，飞鹰子大人最棒了！`);
        } else {
            await chara_talk.say_and_wait(`嗯！飞鹰子一直都想尝试新的舞蹈呢！`);
            await me.say_and_wait(`那就认真看着电视上艺人们的舞台进行改进吧。`);
            await chara_talk.say_and_wait(`好！即使是看着表演也要全力以赴！`);
            await chara_talk.say_and_wait(`飞鹰子，加油！`);
            await era.printAndWait(
                `（玩家名）与飞鹰子一边看着电视上的表演，一边讨论着合适的方案。`,
            );
        }
    } else if (edu_weeks === 47 + 6) {
        await print_event_name('恋心！飞鹰子的礼物！', chara_talk);
        await chara_talk.say_and_wait(`大家！感谢大家一直支持着飞鹰子！`);
        await era.printAndWait(`醒目飞鹰在情人节当天向支持她的粉丝们送巧克力。`);
        await chara_talk.say_and_wait(
            `这个是飞鹰子亲手制作的义理巧克力！希望大家之后也能一直支持飞鹰子！`,
        );
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(`谢谢大家！`);
        await era.printAndWait(
            `在粉丝们的欢呼声中醒目飞鹰的街头演出盛大的结束了。`,
        );
        await chara_talk.say_and_wait(`给！这是最后一个！`);
        await era.printAndWait(
            `在最后一位粉丝离开之后，现场只剩下了（玩家名）和醒目飞鹰。`,
        );
        era.printButton(`飞鹰子辛苦了。`, 1);
        await era.input();
        await chara_talk.say_and_wait(`嗯......那个......训练员先生。`);
        await era.printAndWait(
            `醒目飞鹰扭扭捏捏的从不起眼的角落放置的纸箱里取出了一个包装精美的礼物盒。`,
        );
        await chara_talk.say_and_wait(
            `虽然作为飞鹰子给予粉丝们的心意必须是公平的，不过作为醒目飞鹰来说，这个是醒目飞鹰亲手制作的巧克力哦。`,
        );
        await era.printAndWait(
            `打开礼物盒后，看见了爱心形状的巧克力以及旁边的贺卡。`,
        );
        await chara_talk.say_and_wait(`情人节快乐！`);
        await era.printAndWait(`醒目飞鹰露出了甜美的笑容。`);
        era.printButton(`接下来的话一起回去吧。`, 1);
        await era.input();
        await era.printAndWait(`（玩家名）牵起了她的手。`);
        await chara_talk.say_and_wait(`接下来的话，也请多指教了！`);
    } else if (edu_weeks === 47 + 9) {
        await print_event_name('目标是皋月赏！', chara_talk);
        await era.printAndWait(`漫长的冬天过去之后，终于迎来了春天。`);
        await era.printAndWait(`正当（玩家名）思考着接下来的赛事准备时。`);
        await chara_talk.say_and_wait(`训练员先生！`);
        await era.printAndWait(`醒目飞鹰来到了训练室中。`);
        await me.say_and_wait(`飞鹰子今天也充满活力呢。`);
        await chara_talk.say_and_wait(`嗯！毕竟活力才是飞鹰子的特点呢。`);
        await era.printAndWait(`在训练室里转了一圈之后一头扎进了沙发里。`);
        await chara_talk.say_and_wait(`在沙发上躺着真是舒服啊。`);
        await me.say_and_wait(`今天没有偶像活动吗？`);
        await era.printAndWait(`一般这个时候飞鹰子会缠着你允许她进行街头演出。`);
        await chara_talk.say_and_wait(`嗯......飞鹰子希望能参加皋月赏`);
        await me.say_and_wait(`什么？`);
        await era.printAndWait(`（玩家名）有点怀疑自己是不是出现了幻听。`);
        await chara_talk.say_and_wait(`飞鹰子希望能去参加皋月赏！`);
        await era.printAndWait(`以相当具有气势的声音说出来了。`);
        await me.say_and_wait(`......?`);
        await me.say_and_wait(`可以让我听一听你的想法吗？`);
        await era.printAndWait(`飞鹰子露出了紧张的神色。`);
        await chara_talk.say_and_wait(`因为飞鹰子也想尝试一下草地的感觉嘛⭐`);
        await chara_talk.say_and_wait(
            `因为被粉丝问道为什么不去尝试草地赛时不小心夸下了海口这种事怎么好意思说出来`,
            true,
        );
        await chara_talk.say_and_wait(`......果然训练员君也认为这个不太可能吗？`);
        await era.printAndWait(
            `露出了尴尬表情的飞鹰子打了一个哈哈后想要说些什么。`,
        );
        await me.say_and_wait(`不，已经足够了。`);
        await chara_talk.say_and_wait(`诶？`);
        await me.say_and_wait(
            `既然是飞鹰子的愿望，作为训练员的话一定要竭尽全力去完成的。`,
        );
        await me.say_and_wait(`事不宜迟，飞鹰子，现在就去看皋月赏时的录像带吧。`);
        await chara_talk.say_and_wait(`......啊！好的！`);
        await chara_talk.say_and_wait(`谢谢你，训练员先生`, true);
    } else if (edu_weeks === 47 + 12) {
        await print_event_name(`目标！皋月赏！`, chara_talk);
        await era.printAndWait(`（玩家名）和醒目飞鹰以皋月赏为目标进行努力。`);
        await chara_talk.say_and_wait(`哈啊，哈啊......`);
        await me.say_and_wait(`差不多了，今天就训练到这里吧。`);
        await chara_talk.say_and_wait(`训练员先生，我现在有进步吗？`);
        await me.say_and_wait(`......距离获胜还有一段距离。`);
        await era.printAndWait(`看着计时器，（玩家名）陷入了沉思之中。`);
        await chara_talk.say_and_wait(`......训练员先生？`);
        await era.printAndWait(
            `不知何时凑过来的圆圆小脑袋想要弄清楚到底发生了什么。`,
        );
        await me.say_and_wait(`啊不，没什么。`);
        await chara_talk.say_and_wait(`训练员先生这样子看起来很可疑呢?`);
        await chara_talk.say_and_wait(`难道是已经有喜欢的对象了吗?`);
        await era.printAndWait(
            `虽然不知道飞鹰子为什么得出了这个结论，不过这反而让（玩家名）松了一口气。`,
        );
        await me.say_and_wait(`现在的话还没有哦。`);
        await chara_talk.say_and_wait(`那为什么还是露出了一副忧伤的神情呢？`);
        await me.say_and_wait(
            `比起这个的话，飞鹰子不是还要将制作新曲的决定告诉一直支持着自己的大家吗？`,
        );
        await me.say_and_wait(`再不快点的话，大家都要等急了。`);
        await chara_talk.say_and_wait(`欸?这样的话得抓紧时间了！`);
        await era.printAndWait(
            `看着慌慌张张向着更衣室跑去的飞鹰子，（玩家名）刚舒展的眉头再次锁紧。`,
        );
        await me.say_and_wait(
            `虽然是飞鹰子的希望，不过世界上还是有无法逾越的壕沟吗？`,
            true,
        );
        await me.say_and_wait(`不，比起这个，现在更重要的还是接下来的演出。`);
        await era.printAndWait(
            `将记录在纸张上的数据收紧文件夹后，你向着训练室快步走去。`,
        );
        era.drawLine({content: '演出结束后'});
        await chara_talk.say_and_wait(
            `今天的演出也顺利结束了，多亏大家的支持，飞鹰子最近新想出的歌曲也大受欢迎⭐`,
        );
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(`谢谢大家！接下来也要一直支持着飞鹰子呦♪`);
        await era.printAndWait(`今天的演出也是大获成功。`);
        await era.printAndWait(
            `等到站在原地围观的人们散开之后，从远处观看着的你走向了醒目飞鹰。`,
        );
        await me.say_and_wait(`辛苦了，今天的演出也非常受欢迎。`);
        await chara_talk.say_and_wait(
            `没有训练员先生的话，飞鹰子现在也在为演出而烦恼呢。`,
        );
        await me.say_and_wait(`接下来的话，就为皋月赏好好准备吧！`);
        await chara_talk.say_and_wait(`......啊，嗯！飞鹰子一定会胜利的！`);
        await era.printAndWait(
            `接过醒目飞鹰手中的纸袋后，你们在回特雷森的路上沉默的前行。`,
        );
        await era.printAndWait(`手中的纸袋为何如此沉重呢？`);
        await era.printAndWait(`不断旋转的黑色物体咕噜咕噜在纸杯中旋转着。`);
        await chara_talk.say_and_wait(`......训练员先生？`);
        await era.printAndWait(`醒目飞鹰似乎叫住了你？`);
        await chara_talk.say_and_wait(`飞鹰子的话，没关系的哦？`);
        await chara_talk.say_and_wait(
            `不如说，训练员先生陪着我这样任性下去，飞鹰子真的非常感谢！`,
        );
        await era.printAndWait(
            `似乎鼓足勇气才说出口的话语，脸庞微微泛红的醒目飞鹰注意到（玩家名）的目光后便将头转了过去。`,
        );
        await era.printAndWait(`你们就这样沉默的回到了特雷森。`);
    } else if (edu_weeks === 47 + 29) {
        if (era.get('flag:当前位置') === location_enum.beach) {
            if (era.get('cflag:46:位置') === era.get('cflag:0:位置')) {
                add_event(event_hooks.week_start, event_object);
            }
            return;
        }
        await print_event_name(`合宿开始！`, chara_talk);
        await era.printAndWait(
            `夏季合宿开始后，（玩家名）和飞鹰子为了进行夏季特训来到了理事长的私人沙滩。`,
        );
        era.printButton(`终于到目的地了啊。`, 1);
        await era.input();
        await era.printAndWait(`乘坐着学院的大巴来到了这里。`);
        await chara_talk.say_and_wait(`沙滩的话比想象中还要漂亮呢！`);
        await chara_talk.say_and_wait(`而且，这种气氛的话，很适合开演唱会！`);
        era.printButton(`训练的话也不要忘记了！`, 1);
        await era.input();
        await chara_talk.say_and_wait(`嗯！训练员先生就看着飞鹰子活跃的表现吧！`);
        await chara_talk.say_and_wait(
            `不管是作为偶像的飞鹰子还是作为马娘的醒目飞鹰都要全部完成！`,
        );
        era.printButton(`就是这种气势！`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `说起来，附近的小镇里说不定也会有飞鹰子的潜在粉丝呢！`,
        );
        await chara_talk.say_and_wait(`接下来飞鹰子也要加油了！`);
        await era.printAndWait(`（玩家名）与醒目飞鹰之间的夏季合宿开始了。`);
    } else if (edu_weeks === 47 + 38) {
        await print_event_name(`飞鹰子`, chara_talk);
        await chara_talk.say_and_wait(`大家！非常感谢！`);
        await era.printAndWait(`演唱会结束后，飞鹰子向粉丝们表达心中的感谢。`);
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(
            `不过，今天呢！飞鹰子还有一个好消息要告诉大家！`,
        );
        await chara_talk.say_and_wait(
            `飞鹰子决定参加接下来的JBC经典赛还有东京大赏赛！`,
        );
        await era.printAndWait(`粉丝们「噢噢噢噢！」`);
        await chara_talk.say_and_wait(
            `接下来的比赛上！也希望看到作为粉丝的大家的身影！`,
        );
        await era.printAndWait(`粉丝们「一定会参加的！飞鹰子！」`);
        await chara_talk.say_and_wait(`那么！非常感谢！`);
        await era.printAndWait(`演唱会结束之后，飞鹰子回到了后台。`);
        era.printButton(`飞鹰子辛苦了。`, 1);
        await era.input();
        await era.printAndWait(
            `虽然已经召开发布会宣布了接下来参加的决定，不过飞鹰子却依然在这里强调了一遍。`,
        );
        await chara_talk.say_and_wait(
            `比起这个的话，想成为顶级偶像还需要付出更多汗水才行呢！`,
        );
        await me.say_and_wait(`飞鹰子这样会不会太拼了？`);
        await era.printAndWait(
            `除了训练之外，还在录制歌曲参加各种综艺访谈，回来还要补习落下的功课。`,
        );
        await era.printAndWait(`从荣进闪耀那里得知，她的睡眠时间恐怕不到6个小时。`);
        await me.say_and_wait(`再这样下去的话，你的身体会`);
        await chara_talk.say_and_wait(
            `......无论如何，飞鹰子也想挑战那道不可逾越的城墙。`,
        );
        await chara_talk.say_and_wait(
            `不如说从参加泥地赛开始，飞鹰子就已经没有退路了哦？`,
        );
        await me.say_and_wait(`飞鹰子，可是`);
        await chara_talk.say_and_wait(
            `（玩家名）先生，继续说下去的话就太失礼了哦？`,
        );
        await era.printAndWait(`卸妆后的醒目飞鹰显得更加憔悴了。`);
        await era.printAndWait(`与其说是像点燃的飞蛾一样，不如说更像`);
        await era.printAndWait(
            `慢慢靠近（玩家名）的飞鹰子在你的肩膀上留下了吻痕。`,
        );
        await me.say_and_wait(`像夜光蝶一样`, true);
        await era.printAndWait(`飞鹰子「那么，训练员先生，接下来也请多指教了⭐」`, {
            color: chara_talk,
        });
        await me.say_and_wait(`......请多指教。`);
    } else if (edu_weeks === 47 + 42) {
        await print_event_name(`蒲公英`, chara_talk);
        await me.say_and_wait(`飞鹰子？`);
        await era.printAndWait(
            `在醒目飞鹰被紧急送往医院同时（玩家名）向理事长做出了报告。`,
        );
        await era.printAndWait(
            `在被手纲小姐用锐利的眼神凝视之后，被理事长做出了罚款的惩罚。`,
        );
        await era.printAndWait(
            `比起罚款的处罚，（玩家名）感受到的更多是自己的愧疚。`,
        );
        await me.say_and_wait(`如果当时能更加关心一点醒目飞鹰的话`, true);
        await me.say_and_wait(`说不定结局就会有所不同了。`, true);
        await era.printAndWait(`得到医生许可之后，与醒目飞鹰一起走出了医院。`);
        await era.printAndWait(`一望无垠的天空看不见一丝乌云，意外的是个好天气。`);
        await chara_talk.say_and_wait(`训练员先生？`);
        await era.printAndWait(`飞鹰子紧紧握住了你的手。`);
        await chara_talk.say_and_wait(`泥地偶像是不是永远无法到不了顶级偶像呢？`);
        await era.printAndWait(`是或不是？都无所谓了，我已经失去看向她的勇气了。`);
        await era.printAndWait(`如果转头的话，看着她悲伤的样子，我。`);
        await me.say_and_wait(`泥地偶像的话说不定就像蒲公英一样`);
        await me.say_and_wait(`永远做好了远行的准备。`);
        await me.say_and_wait(`就像飞鹰子在全国各地参加比赛一样`);
        await me.say_and_wait(
            `蒲公英也是一样，种子接着风降落到合适的土壤生根发芽。`,
        );
        await me.say_and_wait(`在地方比赛取得胜利后，让更多的人认识自己。`);
        await me.say_and_wait(
            `等到再次破土而出，作为蒲公英的一部分，它又将会再次踏上旅行的道路。`,
        );
        await me.say_and_wait(
            `许许多多的蒲公英进行着永无止尽的循环，然而它们明白。`,
        );
        await me.say_and_wait(`太阳依然照耀着它们。`);
        await me.say_and_wait(`风依然温柔地引导着它们。`);
        await me.say_and_wait(`全世界的生物，都陪伴着它们。`);
        await me.say_and_wait(`只要它们还存在于这个世界上，这些都属于它们。`);
        await me.say_and_wait(`作为蒲公英尚且是这样，更何况人与马娘们呢？`);
        await chara_talk.say_and_wait(`训练员先生。`);
        await era.printAndWait(`小声抽泣着的飞鹰子终于抑制不住自己的情绪。`);
        await me.say_and_wait(`一起回去吧。`);
        await era.printAndWait(`回到特雷森。`);
        await chara_talk.say_and_wait(`嗯。`);
        await era.printAndWait(`不管是作为飞鹰子，还是作为醒目飞鹰。`);
    } else if (edu_weeks === 47 + 48) {
        await print_event_name(`圣诞祈愿`, chara_talk);
        await era.printAndWait(`中山竞马场·有马纪念`);
        await era.printAndWait(
            `今年的有马纪念依然是盛况空前，观众席上坐满了来自不同地方的游客。`,
        );
        await era.printAndWait(`空气中隐隐有层白色的面纱聚集在观众席上。`);
        await chara_talk.say_and_wait(`训练员先生，原来你在这里啊。`);
        await era.printAndWait(`之前进来的时候不小心被拥挤的人群从中间分开了。`);
        await chara_talk.say_and_wait(`真是的，差点就找不到训练员先生了。`);
        await era.printAndWait(
            `在嘈杂的声音下，马娘引以为傲的听力反而成为了一种枷锁。`,
        );
        await me.say_and_wait(`有好好保护好耳朵吗？`);
        await chara_talk.say_and_wait(`飞鹰子好好戴上耳套了！`);
        await era.printAndWait(
            `打上了蝴蝶结的可爱耳套避免了飞鹰子因为过于激烈的呼喊声暂时性失聪的可能性。`,
        );
        await me.say_and_wait(`那么，现在一起去找座位吧。`);
        await chara_talk.say_and_wait(`好！那个......训练员先生`);
        await chara_talk.say_and_wait(`就今天的话，可以直接叫我的名字吗？`);
        await era.printAndWait(`意外的醒目飞鹰不再执着于偶像的包袱了。`);
        await me.say_and_wait(`醒目飞鹰，我们一起走吧。`);
        await chara_talk.say_and_wait(`嗯！`);
        await era.printAndWait(`观众们差不多都坐定了之后，你们才找到自己的座位。`);
        await me.say_and_wait(`今年的有马纪念也依然盛况空前。`);
        await chara_talk.say_and_wait(`听说赤骥同学也出场了呢！`);
        await era.printAndWait(`身穿蓝白色决胜服的赛马娘走进了赛场。`);
        await era.printAndWait(`最引人注目的还是她那长长的棕色双马尾。`);
        await chara_talk.say_and_wait(`赤骥同学的决胜服比在电视上看到的还要漂亮！`);
        await me.say_and_wait(`不知道这次她会采取什么跑法呢？`);
        era.drawLine({content: '胜利舞台后'});
        await era.printAndWait(`大和赤骥漂亮的取得了第一的成绩。`);
        await era.printAndWait(`舞台上的表演也让人感到振奋。`);
        await era.printAndWait(`直到结束之后，`);
        await chara_talk.say_and_wait(`有马纪念的舞台真大呢。`);
        await chara_talk.say_and_wait(`要是飞鹰子也能登上这样的舞台就好了。`);
        await era.printAndWait(
            `从手机上看到的消息是今年的观看人数超过了十一万人。`,
        );
        await era.printAndWait(`相比之下，东京大赏人数仅有两三万。`);
        await chara_talk.say_and_wait(
            `不过就算是这样，飞鹰子也要作为顶级偶像让泥地赛道也变得受欢迎才行！`,
        );
        await era.printAndWait(`所谓的正统偶像吗？`);
        await me.say_and_wait(`那么先从东京大赏开始，朝着这个目标一点一点前进吧！`);
        await chara_talk.say_and_wait(`好！`);
        await era.printAndWait(`掏出手机扫了一眼，已经快到宵禁时间了。`);
        await me.say_and_wait(
            `现在的话回去也有些来不及了，干脆就在附近休息一个晚上吧。`,
        );
        await chara_talk.say_and_wait(`嗯——训练员先生一定已经订好房间了吧？`);
        await me.say_and_wait(`订房间？`);
        await era.printAndWait(`慌忙拿出手机开始查看，才发现附近的酒店早已爆满。`);
        await era.printAndWait(
            `而且在耽搁的这段时间，就算从现在跑到车站都已经赶不上最后一班回特雷森的列车了。`,
        );
        await chara_talk.say_and_wait(`不，不会吧？`);
        await era.printAndWait(
            `看着你绝望的脸色，醒目飞鹰的脸色也变得难看起来了。`,
        );
        await chara_talk.say_and_wait(`接下来的话怎么办？`);
        await me.say_and_wait(`先在附近找找看吧？`);
        await era.printAndWait(`所幸在附近酒店打听时正巧碰到了一个退房的客人`);
        await chara_talk.say_and_wait(`要，要一起睡吗？`);
        await era.printAndWait(
            `只剩下这一套房间了，如果不预定的话就只能在公园里搭帐篷了。`,
        );
        await me.say_and_wait(`如果醒目飞鹰不愿意的话，我睡在长椅上也可以。`);
        await me.say_and_wait(`在长椅上度过一个晚上也不是不行。`, true);
        await chara_talk.say_and_wait(`怎么可以这样！还是两个人一起。`);
        await era.printAndWait(`犹豫着的飞鹰子最终还是下定决心了。`);
        await me.say_and_wait(`......谢谢你，醒目飞鹰。`);
        await era.printAndWait(`你们挤在一张床上睡着了。`);
    } else if (edu_weeks === 95 + 1) {
        await print_event_name('日出', chara_talk);
        era.printButton(`就在这里扎营吧。`, 1);
        await era.input();
        await chara_talk.say_and_wait(`好！`);
        await era.printAndWait(
            `在醒目飞鹰的建议下，（玩家名）与醒目飞鹰来到了附近的山上准备迎接新年第一天的日出。`,
        );
        await era.printAndWait(
            `为了应对夜间山上寒冷的天气，除了野营必须的帐篷和睡袋，准备了足够三天所需的食物与水。`,
        );
        await era.printAndWait(
            `慎重选择的同时还带上了手电筒、驱蛇粉以及常用药品防备意外情况。`,
        );
        await chara_talk.say_and_wait(`训练员先生，让我也来搭把手吧！`);
        await era.printAndWait(
            `打开充气垫的阀门使其逐渐膨胀，直至其中充满空气为止。`,
        );
        await era.printAndWait(
            `为了防止夜间温度过低导致热量流失，防潮垫是必须考虑到的部分。`,
        );
        await chara_talk.say_and_wait(
            `接下来的话，只要把露营灯挂在帐篷中间就结束了！`,
        );
        await era.printAndWait(`在醒目飞鹰的协助之下，帐篷很快就搭起来了。`);
        era.printButton(`辛苦了，飞鹰子。`, 1);
        await era.input();
        await chara_talk.say_and_wait(`训练员先生，你的手！`);
        await era.printAndWait(`相比于马娘，人类的身体更加脆弱。`);
        await era.printAndWait(
            `尽管准备了厚厚的羽绒服，但露出在外的手指还是被冻得颤抖不止。`,
        );
        await me.say_and_wait(`唔，有的时候真是羡慕马娘的身体构造啊。`);
        await chara_talk.say_and_wait(`啊，好冷。`);
        await era.printAndWait(`然后她却坚定的握住了（玩家名）的手。`);
        await chara_talk.say_and_wait(`这样的话，两个人都会暖和起来的。`);
        await era.printAndWait(`看着错愕的你，醒目飞鹰露出了微笑。`);
        await chara_talk.say_and_wait(`那么，一起进去吧♪`);
        await era.printAndWait(`虽然外面的温度降到了零下5度，但睡袋之中却很暖和。`);
        await chara_talk.say_and_wait(`zzz......训练员先生，我也最喜欢你了♪`);
        await era.printAndWait(`一夜无话`);
        era.drawLine();
        await era.printAndWait(`闹钟「叮铃铃铃！」`);
        await me.say_and_wait(`唔，哪里来的闹钟？`);
        await era.printAndWait(`突然喧嚣起来的闹钟将你从睡梦之中拖了出来。`);
        await me.say_and_wait(`好冷！`);
        await era.printAndWait(`从睡袋之中伸出的手一瞬间被寒冷刺激着清醒了。`);
        await me.say_and_wait(`好像有什么事情？对了！`);
        await era.printAndWait(`突然惊醒的（玩家名）从睡袋之中爬了起来。`);
        await me.say_and_wait(`飞鹰子！该起来了！`);
        await chara_talk.say_and_wait(`唔，训练员先生，诶！`);
        await era.printAndWait(`被惊醒的醒目飞鹰似乎也意识到了什么。`);
        await chara_talk.say_and_wait(`那个，训练员先生！可以转过去吗？`);
        await era.printAndWait(`悉悉索索的声音从后背那边传了过来。`);
        await chara_talk.say_and_wait(`已经可以了哦？`);
        await era.printAndWait(
            `重新穿上羽绒服的醒目飞鹰身体稍稍前倾，对着你露出了笑脸。`,
        );
        await me.say_and_wait(`那么，一起出发吧！`);
        await chara_talk.say_and_wait(`好！`);
        await era.printAndWait(`暂时将帐篷留在原地，你和醒目飞鹰来到了山顶之上。`);
        await chara_talk.say_and_wait(`看来还是有点早呢。`);
        await me.say_and_wait(`是啊。`);
        await chara_talk.say_and_wait(
            `不过就这样和训练员先生一起迎来新年的第一缕阳光。`,
        );
        await chara_talk.say_and_wait(`飞鹰子其实很开心哦♪`);
        await era.printAndWait(
            `天上的繁星尚未从星空舞台上退下，台下的观众则期待着之后的主角上场。`,
        );
        await chara_talk.say_and_wait(`而且`);
        await chara_talk.say_and_wait(`接下来的话，只要耐心等待太阳的升起就好了♪`);
        await era.printAndWait(
            `站在（玩家名）身旁的醒目飞鹰虽然看不见此刻的表情，但一定是笑着说出来的吧。`,
        );
        await me.say_and_wait(`能够和醒目飞鹰一起看日出，我也很幸福。`);
        await chara_talk.say_and_wait(`能够听到训练员先生坦率的声音，`);
        await chara_talk.say_and_wait(`飞鹰子内心的世界里又多了一颗闪亮的宝石呢♪`);
        await era.printAndWait(`不知不觉间，似乎能看到醒目飞鹰露出的笑容。`);
        await chara_talk.say_and_wait(`啊，终于等到了呢♪`);
        await chara_talk.say_and_wait(
            `和训练员先生，训练员先生一起见过的朝阳，欸嘿嘿♪`,
        );
        await era.printAndWait(
            `从这里俯瞰着山下的特雷森学院，从黑蒙蒙的一片中一点一点变得出现了色彩。`,
        );
        await era.printAndWait(`带着不容质疑的意志一点，一点的前进着。`);
        await chara_talk.say_and_wait(
            `醒目飞鹰也好，泥地的大家也好，总有一天不会输给草地比赛的马娘们♪`,
        );
        await me.say_and_wait(`醒目飞鹰的愿望，一定会传达到的！`);
        await era.printAndWait(`轻轻擦去她眼角的泪水，然后摸了摸她的头。`);
        await chara_talk.say_and_wait(`嗯！`);
        await era.printAndWait(`在寒风之中传来了湿润的感觉。`);
        await chara_talk.say_and_wait(`新年快乐，训练员先生♪`);
        await era.printAndWait(`踮起脚的醒目飞鹰额外可爱。`);
    } else if (edu_weeks === 95 + 6) {
        await print_event_name('飞鹰子与情人节♪', chara_talk);
        await chara_talk.say_and_wait(`大家！欢迎参加飞鹰子的感谢庆典♪`);
        await chara_talk.say_and_wait(
            `为了感谢大家平时一直默默支持作为偶像的飞鹰子，嗯~飞鹰子也要回报作为粉丝的大家！`,
        );
        await era.printAndWait(`飞鹰子拿出了一个包装好的巧克力盒。`);
        await chara_talk.say_and_wait(
            `感谢各位一直以来支持着飞鹰子，这里面装的可是飞鹰子的爱哦！`,
        );
        await era.printAndWait(`粉丝们「噢噢噢噢！」`);
        await chara_talk.say_and_wait(`那么大家过来这边！`);
        era.drawLine();
        await chara_talk.say_and_wait(`谢谢你一直以来支持着飞鹰子！`);
        await era.printAndWait(
            `直到最后一位粉丝离开后，现在只剩下（玩家名）和醒目飞鹰了。`,
        );
        await chara_talk.say_and_wait(`给，训练员先生！`);
        await era.printAndWait(`将最后一份巧克力递给了你。`);
        await chara_talk.say_and_wait(`啊，等等，还有一份！`);
        await era.printAndWait(
            `醒目飞鹰从自己随身的口袋之中再次拿出了一个包装精美的巧克力。`,
        );
        await chara_talk.say_and_wait(
            `虽然作为飞鹰子的偶像必须要把平等的爱给每一位粉丝，不过这是作为醒目飞鹰的爱送给训练员先生！`,
        );
        await era.printAndWait(`看着手中的两份巧克力，（玩家名）陷入了沉思。`);
        await chara_talk.say_and_wait(`接下来的时间里一起去约会吧♪`);
        era.printButton(`要是被发现的话怎么办？`, 1);
        await era.input();
        await era.printAndWait(`将双马尾放下之后，戴上了特制的平面眼镜。`);
        await era.printAndWait(`与平常完全不同的醒目飞鹰就此诞生了。`);
        await chara_talk.say_and_wait(`锵锵♪崭新的醒目飞鹰诞生了！`);
        await era.printAndWait(
            `小心地取下了象征着飞鹰子的头饰之后，醒目飞鹰变成了特雷森随处可见的马娘。`,
        );
        await chara_talk.say_and_wait(`醒目飞鹰的训练员先生⭐`);
        await era.printAndWait(
            `接下来你们到了附近的游乐园体验了各种没玩过的娱乐项目。`,
        );
    } else if (edu_weeks === 95 + 14) {
        await print_event_name('偶像感谢祭♪', chara_talk);
        await era.printAndWait(
            `作为特雷森一年一度的粉丝感谢祭，为了感谢粉丝们平时对赛马娘的支持。`,
        );
        await era.printAndWait(`特雷森将开放校门欢迎各位粉丝前来支持各自的粉丝。`);
        await era.printAndWait(`马娘A「那边的这位是飞鹰子！」`);
        await era.printAndWait(`马娘B「我听说她甚至提高了泥地比赛的知名度！」`);
        await chara_talk.say_and_wait(`各位，欢迎来到特雷森⭐`);
        await chara_talk.say_and_wait(`感谢各位平时一直以来都支持飞鹰子⭐`);
        await chara_talk.say_and_wait(
            `接下来的话，飞鹰子也会把最好的舞蹈献给大家⭐`,
        );
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        era.drawLine();
        await chara_talk.say_and_wait(`~~~♪谢谢大家！`);
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(
            `大家之后也要一直支持着飞鹰子哦！那么，最后，一二`,
        );
        await chara_talk.say_and_wait(`如果飞鹰子逃跑了？`);
        await era.printAndWait(`粉丝们「那就只能追上去了！」`);
        await chara_talk.say_and_wait(`要追到地平线的尽头吗~？`);
        await era.printAndWait(`粉丝们「那里就是飞鹰子的大舞台！」`);
        await chara_talk.say_and_wait(
            `没有路就让飞鹰子来找! 发现目标就快快去抓到!`,
        );
        await era.printAndWait(`粉丝们「——去抓住大大的爱吧！」`);
        await chara_talk.say_and_wait(`最强的马娘偶像，醒目飞鹰♪今天也送到了呢⭐`);
        await era.printAndWait(`粉丝们「噢噢噢噢噢噢噢噢！飞鹰子！飞鹰子！」`);
        await era.printAndWait(
            `带着几乎将特雷森掀开的气势，飞鹰子的演出大获成功。`,
        );
        await chara_talk.say_and_wait(`明明还想再来一首的说。`);
        await era.printAndWait(`从感谢祭舞台上下来的醒目飞鹰看上去有些遗憾。`);
        await me.say_and_wait(`毕竟按照节目表最多也就一个半小时了。`);
        await era.printAndWait(`平时的演唱会一般要持续三个小时。`);
        await me.say_and_wait(`既然暂时已经结束了，接下来就到处去逛逛吧。`);
        await chara_talk.say_and_wait(
            `这样的话，飞鹰子先去更衣室了，训练员先生不要偷看哦！`,
        );
        await me.say_and_wait(`快去吧。`);
        await me.say_and_wait(`稍微在附近转转吧`, true);
        await era.printAndWait(
            `看着平时的校园突然涌入了大量的人与马娘，作为训练员的（玩家名）有种莫名想要远离的感觉。`,
        );
        await me.say_and_wait(`去人流少一点的地方吧`, true);
        await era.printAndWait(`记者「请问你是醒目飞鹰的训练员吗？」`);
        await era.printAndWait(`正打算离开的时候却被记者缠住了。`);
        await era.printAndWait(`听到醒目飞鹰的名字，附近的人群朝着这边看了过来。`);
        await me.say_and_wait(`不好，这么下去的话和飞鹰子之间的约会`, true);
        await me.say_and_wait(`是的，请问有什么想问的吗？`);
        await era.printAndWait(
            `记者「我也观看了飞鹰子的表演呢！真的是非常精彩！」`,
        );
        await me.say_and_wait(`我想飞鹰子听到的话一定也会很高兴的。`);
        await era.printAndWait(
            `记者「话说回来，作为泥地偶像的飞鹰子和训练员先生的关系真的很好呢~」`,
        );
        await era.printAndWait(`记者「请问你们之间的关系进展如何了？」`);
        await me.say_and_wait(`......其实我也觉得飞鹰子很好，就合适的搭档而言。`);
        await me.say_and_wait(
            `作为训练员来说，能遇到这样脚踏实地又有天赋的马娘实在是非常荣幸。`,
        );
        await me.say_and_wait(
            `与其说是我成就了醒目飞鹰，不如说我本人也受到了她很大的影响。`,
        );
        await era.printAndWait(`记者「嗯嗯，受到了很宝贵的材料呢，非常感谢！」`);
        era.drawLine();
        await chara_talk.say_and_wait(`久等了，一起出发吧？`);
        await era.printAndWait(
            `所幸之后没有预见其他记者，围观的人群也被主舞台声势浩大的演出很快吸引了过去。`,
        );
        await era.printAndWait(
            `稍微绕了几个弯确定了没有狗仔队在后头跟着后，才与飞鹰子会合了。`,
        );
        await me.say_and_wait(`不如说，这边也是。`);
        await era.printAndWait(`今天也要玩个尽兴才行。`);
    } else if (edu_weeks === 95 + 29) {
        if (era.get('flag:当前位置') === location_enum.beach) {
            if (era.get('cflag:46:位置') !== era.get('cflag:0:位置')) {
                add_event(event_hooks.week_start, event_object);
            }
            return;
        }
        await print_event_name(`合宿开始！`, chara_talk);
        await chara_talk.say_and_wait(`好久没有来到这里了，真是怀念啊。`);
        await era.printAndWait(
            `朝着以顶级偶像为目标的醒目飞鹰，现在正朝着育马场经典赛努力。`,
        );
        await chara_talk.say_and_wait(`现在的话就全力准备夏季合宿吧。`);
        await chara_talk.say_and_wait(
            `对于一直支持着自己的大家，飞鹰子一定要在之后的比赛之中取胜！`,
        );
        await me.say_and_wait(`不如说，这边也是。`);
        await me.say_and_wait(`我在背后一直支持着飞鹰子的。`);
        await chara_talk.say_and_wait(
            `听到训练员先生这么说的话，安全感一下子就上来了呢。`,
        );
        await era.printAndWait(`飞鹰子的笑容比起她背后的沙滩还要美丽。`);
        await me.say_and_wait(`那么，现在开始准备训练吧！`);
        await chara_talk.say_and_wait(`嗯！飞鹰子会将最努力的一面展示给大家看的！`);
        await era.printAndWait(`你与飞鹰子之间第三年的夏季合宿开始了。`);
    } else if (edu_weeks === 95 + 48) {
        await print_event_name(`圣诞节♪`, chara_talk);
        await era.printAndWait(`（玩家名）与醒目飞鹰度过的第三个圣诞。`);
        await chara_talk.say_and_wait(`谢谢大家！`);
        await era.printAndWait(`在圣诞当天依然举办着演唱会感谢着作为粉丝的大家。`);
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(
            `为了感谢大家一直以来支持着飞鹰子，飞鹰子将自己的心意装在里面了哦！`,
        );
        await era.printAndWait(`粉丝A「非常感谢！」`);
        await era.printAndWait(`粉丝B「今后也会一直支持着你的！」`);
        await era.printAndWait(`粉丝C「每场比赛我都会去看的！」`);
        await era.printAndWait(
            `等到礼物分光之后，还有一些粉丝们因为拿不到礼物而灰心丧气。`,
        );
        await chara_talk.say_and_wait(
            `参加飞鹰子感谢祭的粉丝们，接下来就用飞鹰子的笑容来温暖大家吧！`,
        );
        await era.printAndWait(`剩余的粉丝们收到了握手与一份笑容的礼物。`);
        await era.printAndWait(
            `粉丝D「虽然来晚了，没得到礼物，不过之后我也会一直支持飞鹰子的！」`,
        );
        await era.printAndWait(
            `等到粉丝们纷纷散去之后，现场只剩下了（玩家名）和飞鹰子两人。`,
        );
        await chara_talk.say_and_wait(`终于结束了！`);
        era.printButton(`收到礼物的粉丝们一定会很开心的`, 1);
        await era.input();
        await chara_talk.say_and_wait(`嗯！`);
        await chara_talk.say_and_wait(
            `从一开始一个粉丝也没有一直到成为闪耀的偶像，没有训练员先生的帮助，飞鹰子是不可能做到这一步的！`,
        );
        await era.printAndWait(`低头向你鞠躬的飞鹰子让你有点意外。`);
        era.printButton(
            `不，再怎么说也是飞鹰子的功劳，我只是做了分内的事情罢了`,
            1,
        );
        await era.input();
        await chara_talk.say_and_wait(
            `怎么会！如果没有训练员先生的话，飞鹰子连出场的机会都不存在！`,
        );
        await chara_talk.say_and_wait(`而且，我对训练员先生......啊，抱歉。`);
        await chara_talk.say_and_wait(`接下来一起去哪里逛逛吧？`);
        await chara_talk.say_and_wait(`外宿许可也已经申请了哦！`);
        await era.printAndWait(`轻轻牵起你的手的醒目飞鹰拉着你前进。`);
        await me.say_and_wait(`这边的摆放的道具呢？`);
        await chara_talk.say_and_wait(`没关系的！`);
        await era.printAndWait(
            `从充满暖气的房间里走出来后，立刻感受到了寒冷的气息。`,
        );
        await chara_talk.say_and_wait(`外面比想象中还要冷呢。`);
        await era.printAndWait(
            `尽管戴上了保暖的手套，还是有冷气从摩擦的细缝之中溜了进来。`,
        );
        await me.say_and_wait(`一起去萨莉亚吃一顿大餐吧？`);
        await era.printAndWait(
            `经济实惠的萨莉亚对饥肠辘辘的两人来说具有非常大的吸引力。`,
        );
        await chara_talk.say_and_wait(
            `醒目飞鹰也这么想的呢，而且和训练员先生一起吃饭的话，兴致突然就高涨起来了⭐`,
        );
        await me.say_and_wait(`那么我们加快脚步吧！`);
        era.drawLine();
        await era.printAndWait([
            chara_talk.get_colored_name(),
            '/',
            me.get_colored_name(),
            '「',
            {content: '干', color: chara_talk.color},
            '杯！」',
        ]);
        await era.printAndWait(
            `在暖色调的灯光下，餐厅嘈杂的人声伴随着叮叮铛铛的道具碰撞声形成了独特的声音。`,
        );
        await chara_talk.say_and_wait(`萨莉亚的食物比想象中还要美味呢`);
        await me.say_and_wait(`是因为节日的缘故吧？这里的人都洋溢着快乐的气息。`);
        await chara_talk.say_and_wait(
            `也有这一部分的缘故，不过更多的还是像普通马娘一样享受着节日的气息。`,
        );
        await me.say_and_wait(`飞鹰子对偶像感到疲惫了吗？`);
        await chara_talk.say_and_wait(`不会哦？不如说飞鹰子很享受呢！`);
        await era.printAndWait(`睁大了眼睛的飞鹰子露出了疑惑的神情。`);
        await me.say_and_wait(`接下来的路飞鹰子也要努力才行。`);
        await chara_talk.say_and_wait(`梦之杯吗？`);
        await me.say_and_wait(
            `除了比赛之外，还要注意自己的日程表不要过度劳累才行！`,
        );
        await era.printAndWait(`不知不觉恢复了平时说教的状态。`);
        await chara_talk.say_and_wait(`咕~这种气氛下训练员先生真是木头呢。`);
        await era.printAndWait(
            `咕噜咕噜搅拌着还剩下一半果汁发出了不满声音的飞鹰子看着你。`,
        );
        await chara_talk.say_and_wait(
            `不过，也许就是这样的训练员先生，醒目飞鹰才最喜欢了呢！`,
        );
        await era.printAndWait(`突然之间笑出来的飞鹰子看起来额外可爱。`);
        await chara_talk.say_and_wait(`嗯——可以靠过来一点吗？`);
        await era.printAndWait(`说着将自己的身体靠近了（玩家名）坐着的位子。`);
        await me.say_and_wait(`......`);
        await chara_talk.say_and_wait(`那么！一、二、三！`);
        await era.printAndWait(`在手机上拍下了接吻瞬间的醒目飞鹰。`);
        await era.printAndWait(`作为偶像来说绝对NG的吧？`);
        await chara_talk.say_and_wait(
            `作为偶像的飞鹰子必须把平等的爱给每一位粉丝，不过现在的我是醒目飞鹰！是随处可见的普通马娘哦！`,
        );
    } else if (edu_weeks === 143 + 1 && new FaEventMarks().sweet_dream === 1) {
        event_marks.sweet_dream++;
        await print_event_name(`飞鹰子大冒险`, chara_talk);
        await chara_talk.say_and_wait(`唔，这里是哪里？`);
        await era.printAndWait(
            `粉色的世界，童话风格的城堡，脚下的土地竟然是用饼干做成的？！`,
        );
        await chara_talk.say_and_wait(`为，为什么还穿着决胜服啊？`);
        await era.printAndWait(
            `可爱风格的决胜服，以及挂在腰间的麦克风......似乎准备齐全的样子？！`,
        );
        await chara_talk.say_and_wait(`说起来的话之前也遇到过这种情况。`);
        await chara_talk.say_and_wait(`这样的话想办法让自己醒来就可以了！`);
        await chara_talk.say_and_wait(`飞鹰子头槌！`);
        await era.printAndWait(`bang！！！`);
        await chara_talk.say_and_wait(`呜——头好痛啊！`);
        await era.printAndWait(`抱着头一屁股坐在了地上，努力克制着眩晕感。`);
        await chara_talk.say_and_wait(`这个梦也太真实了吧？`);
        await era.printAndWait(
            `收拾好情绪之后，醒目飞鹰将目光看向了远处高耸的城堡。`,
        );
        await chara_talk.say_and_wait(`接下来的话，朝着这个方向努力就可以了吧？`);
        await chara_talk.say_and_wait(`那么，飞鹰子全速前进！！`);
        await era.printAndWait(
            `朝着目标的方向全速前进的醒目飞鹰圈起了一大片的饼干碎屑。`,
        );
        era.drawLine();
        era.printButton(`这是哪里？`, 1);
        await era.input();
        await era.printAndWait(`（玩家名）醒来的时候发现自己处在一处城堡之中。`);
        await me.say_and_wait(`卧槽这是哪里？`);
        await era.printAndWait(`看向了周围，似乎倒在一条走廊之中。`);
        await me.say_and_wait(`......我一定在做梦。`);
        await era.printAndWait(`轻轻拍了自己一下，似乎没有醒过来的迹象。`);
        await me.say_and_wait(`......总之先找个窗户看一下吧。`);
        await era.printAndWait(
            `一边欣赏着由糖果和亮闪闪的宝石组成的走廊一边打开了走廊尽头的大门。`,
        );
        await era.printAndWait(`拧开门把手之后，来到了一间巧克力组成的房间。`);
        await era.printAndWait(
            `将巧克力棒制成的窗户打开之后，窗外的景色是你从未见过的童话风格。`,
        );
        await era.printAndWait(`由糖果与饼干组成的房子、街道以及脚下所处的城堡。`);
        await era.printAndWait(`更远处似乎有什么骚动的样子。`);
        await me.say_and_wait(`啊，我知道了，只要从楼上跳下去梦就醒了。`);
        await era.printAndWait(
            `半只脚踩在了虚空之中的（玩家名），感受到了狂风的吹拂。`,
        );
        await me.say_and_wait(`......真的不会死吗？`);
        await era.printAndWait(`心虚的收回了脚。`);
        await me.say_and_wait(`还是找找其他办法吧？`);
        await era.printAndWait(`暂且从房间退出，回到了走廊之中。`);
        era.printButton(`找找其他的出路会比较好吧？`, 1);
        await era.input();
        era.printButton(`也许飞鹰子会很喜欢这里的样子？`, 1);
        await era.input();
        await era.printAndWait(`不知为何的确信这一点？`);
        await me.say_and_wait(`不过为什么是我做了这个梦呢。`);
        await me.say_and_wait(`如果是飞鹰子的话，应该......好痛！`);
        await era.printAndWait(
            `一边思考着离开的方法没有注意前方的（玩家名）狠狠撞到了什么东西上面。`,
        );
        await era.printAndWait(`巧克力士兵「什么人！」`);
        await era.printAndWait(
            `穿着亮闪闪宝石盔甲的巧克力士兵将手中的长矛对准了你。`,
        );
        await me.say_and_wait(`抱歉，我也不知道。`);
        await era.printAndWait(
            `巧克力士兵「既然说不出自己的身份，那就是敌人！敌袭！」`,
        );
        await era.printAndWait(
            `只有（玩家名）一半大小的巧克力一边说着一边将手中的巧克力长矛对准了（玩家名）。`,
        );
        era.printButton(`区区一个巧克力能干什么，看我把你给吃了！`, 1);
        await era.input();
        await era.printAndWait(
            `怀着轻敌想法的（玩家名）傲慢的做好了战斗准备（？），然后被摔了一个四脚朝天。`,
        );
        await me.say_and_wait(`区区巧克力还敢嚣张！`);
        await era.printAndWait(
            `收起轻敌想法的（玩家名）认真对待着比自己小了一半的巧克力士兵。`,
        );
        await me.say_and_wait(`看招！`);
        await era.printAndWait(`趁其不备一把抓住了巧克力士兵的长矛。`);
        await me.say_and_wait(`怎么样，你还有什么办法！`);
        await era.printAndWait(`用力将长矛掰做两半然后从开着的窗户扔了出去。`);
        await era.printAndWait(`巧克力士兵「敌袭！敌袭！」`);
        await era.printAndWait(`远处似乎有更多巧克力士兵组成的小队正在赶来。`);
        await me.say_and_wait(`趁它们还没发现我的位置还是赶快逃跑吧！`);
        await era.printAndWait(
            `发现危机迫近的（玩家名）用蛮力撞飞了眼前的巧克力士兵。`,
        );
        await era.printAndWait(`巧克力士兵们「敌人就在那里！！！」`);
        await era.printAndWait(`然后开始了漫无目的的逃亡。`);
        era.drawLine();
        await chara_talk.say_and_wait(`终于到了。`);
        await era.printAndWait(
            `望着高耸的内墙以及由巧克力士兵把守的城门，醒目飞鹰的决定是`,
        );
        await chara_talk.say_and_wait(
            `不管是什么阻拦在飞鹰子前方，飞鹰子都会就这样一口气冲过去⭐`,
        );
        await era.printAndWait(
            `巧克力士兵「没有女王的许可，谁也不可以，呜啊啊啊啊啊。」`,
        );
        await era.printAndWait(
            `轻松冲烂巧克力组成的防线，向着城堡一路前进的醒目飞鹰的兴致更加高涨。`,
        );
        await chara_talk.say_and_wait(`城堡里会有什么在等着我呢？`, true);
        era.drawLine();
        await me.say_and_wait(`城堡里还会有什么在等着我呢？`, true);
        await era.printAndWait(
            `光是听着后面越来越嘈杂的声音，（玩家名）就失去了回头看的勇气。`,
        );
        await era.printAndWait(`直到来到了一间装饰得十分华丽的大门之前。`);
        await era.printAndWait(`巧克力士兵「有刺客！有刺客！」`);
        await era.printAndWait(`巧克力士兵「保护女王殿下！」`);
        await me.say_and_wait(`没办法了。`, true);
        await era.printAndWait(`用力推开沉重的大门，映在眼前的是。`);
        era.printButton(`醒目飞鹰？`, 1);
        await era.input();
        await era.printAndWait(`穿着复杂考究的礼服，少女的眼睛看向了你。`);
        await era.printAndWait(`醒目飞鹰（?）「你是谁？」`, {
            color: chara_talk,
        });
        await me.say_and_wait(`不，她绝不可能是我认识的醒目飞鹰。`, true);
        await era.printAndWait(
            `那双飘忽不定的眼睛好奇的打量者（玩家名），之后便收回了目光。`,
        );
        era.printButton(`尊敬的女王殿下，我是作为训练员的（玩家名）。`, 1);
        await era.input();
        await era.printAndWait(
            `索性破罐子破摔，就这样低下头向着熟悉的陌生人鞠躬。`,
        );
        await era.printAndWait(`巧克力士兵「女王大人没事吧！」`);
        await era.printAndWait(`后面追来的士兵将你团团包围。`);
        await era.printAndWait(`醒目飞鹰（?）「不，放开他。」`, {
            color: chara_talk,
        });
        await era.printAndWait(`巧克力士兵「可是......」`);
        await era.printAndWait(`醒目飞鹰（?）「你想反抗我的命令吗！退下！」`, {
            color: chara_talk,
        });
        await era.printAndWait(`士兵们不情愿的将（玩家名）的包围圈撤开了。`);
        await era.printAndWait(
            `醒目飞鹰（?）「那么，这位训练员先生，请抬起你的头，我赋予你与我对话的权力。」`,
            {
                color: chara_talk,
            },
        );
        await me.say_and_wait(`至少没有一见面就打起来。`, true);
        await era.printAndWait(`得到女王许可的（玩家名）总算抬起了头。`);
        await era.printAndWait(`看着与醒目飞鹰几乎相同的容貌，不禁有点错愕。`);
        await me.say_and_wait(`与飞鹰子看起来真的很像`, true);
        await era.printAndWait(
            `醒目飞鹰（?）「我的名字是黑之女王。是这片黑巧克力王国的主人。」`,
            {
                color: chara_talk,
            },
        );
        await era.printAndWait(`拿着黑之锡杖的女王向误入王国的访客点了点头。`);
        await era.printAndWait(`黑女王「请问您为什么侵入我的宫殿？」`, {
            color: chara_talk,
        });
        await me.say_and_wait(`不，没有这个意思`);
        await me.say_and_wait(`我只是`);
        await chara_talk.say_and_wait(`飞鹰子冲撞！`);
        await era.printAndWait(`破墙而入的醒目飞鹰打断了你们之间的对话。`);
        await chara_talk.say_and_wait(`（玩家名）没事吧！`);
        await era.printAndWait(`紧紧抱着你的醒目飞鹰一脸担心的样子。`);
        await era.printAndWait(`巧克力士兵「两个女王？怎么办？」`);
        await era.printAndWait(`骚动起来的士兵们开始窃窃私语。`);
        await era.printAndWait(`黑女王「肃静！」`, {
            color: chara_talk,
        });
        await era.printAndWait(
            `在女王威严的喝止声中，巧克力们窃窃私语的声音慢慢停下来了。`,
        );
        await era.printAndWait(
            `黑女王「与妾身长相相似的少女啊，该如何称呼是好？」`,
            {
                color: chara_talk,
            },
        );
        await chara_talk.say_and_wait(`醒目飞鹰！请叫我飞鹰子⭐`);
        await era.printAndWait(`露出了幸福笑容的醒目飞鹰回复着女王。`);
        await era.printAndWait(`黑女王「......原来是这样吗。」`, {
            color: chara_talk,
        });
        await era.printAndWait(
            `黑女王「那么，就让我来送你们回去吧。可爱的孩子们。」`,
            {
                color: chara_talk,
            },
        );
        await era.printAndWait(
            `随着锡杖顶端发出光芒，两位游客的身影慢慢开始消散。`,
        );
        await era.printAndWait(
            `黑女王「如果我也能遇到（玩家名）的话，说不定也会很幸福。」`,
            {
                color: chara_talk,
            },
        );
        await era.printAndWait(`黑女王「......失礼了，那么再见。」`, {
            color: chara_talk,
        });
        era.drawLine();
        await chara_talk.say_and_wait(`唔，这里是哪？`);
        await era.printAndWait(`醒目飞鹰在熟悉的大床上醒了过来。`);
        await era.printAndWait(
            `面对着同样苏醒过来的（玩家名），醒目飞鹰露出了幸福的笑容。`,
        );
        await chara_talk.say_and_wait(`飞鹰子，现在也是训练员先生的女王殿下哦♪`);
        await era.printAndWait(
            `趁着（玩家名）意识尚未清醒之前，紧紧抱着（玩家名）的醒目飞鹰露出了安心的笑容。`,
        );
        await chara_talk.say_and_wait(`接下来的日子，也请多指教了♪`);
        await era.printAndWait(`good end·kiss on my deity`);
        era.drawLine({content: 'THE END'});
    } else if (edu_weeks === 143 + 1 && new FaEventMarks().idol_road === 1) {
        event_marks.idol_road++;
        await print_event_name(`依然闪耀的偶像`, chara_talk);
        await era.printAndWait(
            `在结束了三年的比赛之后，醒目飞鹰将目光瞄准了接下来的梦之杯。`,
        );
        await chara_talk.say_and_wait(`感谢大家一直支持着飞鹰子！`);
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(`接下来的梦之杯也要多多支持飞鹰子哦！`);
        await era.printAndWait(
            `因为飞鹰子的活跃表现，泥地赛道也慢慢进入了普通观众的关注列表。`,
        );
        await era.printAndWait(
            `想必之后的话也会有更多的泥地马娘活跃在泥地赛道之中吧。`,
        );
        await chara_talk.say_and_wait(`训练员先生！`);
        await chara_talk.say_and_wait(`接下来的话也请多多支持飞鹰子哦！`);
        await era.printAndWait(`带着笑容的醒目飞鹰看上去一如既往的闪耀。`);
        await era.printAndWait(
            `接下来的日子里，你们也会像这三年一样，经历许多的挫折与闪耀的时刻吧。`,
        );
        await me.say_and_wait(`不过......`);
        await era.printAndWait(
            `可能的话，如果是可能的话，如果最后的偶像之路全部胜利，如果能与飞鹰子的关系更加亲密一点的话。`,
        );
        await me.say_and_wait(`现在这样就好了。`);
        await me.say_and_wait(`我很幸福。`);
        await era.printAndWait(
            `看着在舞台之上闪耀着的飞鹰子，（玩家名）也开始挥舞起手中的应援棒了。`,
        );
        await era.printAndWait(`normal end·shine idol `);
        era.drawLine({content: 'THE END'});
    }
    wait_flag && (await era.waitAnyKey());
};
