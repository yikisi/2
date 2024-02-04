const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const FaEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-46');
const {get_chara_talk} = require('#/utils/chara-talk-factory');
const {location_enum} = require('#/data/locations');
const {add_event, cb_enum} = require('#/event/queue');
const event_hooks = require('#/data/event/event-hooks');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const EduEventMarks = require('#/data/event/edu-event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async function (hook, __, event_object) {
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        chara4_talk = get_chara_talk(4),
        event_marks = new FaEventMarks(),
        edu_weeks = era.get('flag:当前回合数') - era.get('cflag:46:育成回合计时');
    let wait_flag = false;
    if (event_marks.beginning === 1) {
        event_marks.beginning++;
        await print_event_name(`请叫我飞鹰子⭐`, chara_talk);
        await era.printAndWait(`训练室`);
        await era.printAndWait(
            `在与醒目飞鹰签约之后，（玩家名）早早的来到了训练室。`,
        );
        await me.say_and_wait(`希望成为偶像吗？`, true);
        await era.printAndWait(`醒目飞鹰希望能成为泥地的顶级偶像`);
        await era.printAndWait(`但能登上最大舞台的中央则需要无数的努力。`);
        await me.say_and_wait(`而且`, true);
        await era.printAndWait(`有马纪念——年终最大的舞台，注定与泥地马娘无缘。`);
        await chara_talk.say_and_wait(`锵锵锵~这里是泥地的马娘偶像，飞鹰子呦⭐`);
        await era.printAndWait(
            `穿着特雷森校服的担当从门口蹦跳着跑了进来。`,
        );
        await me.say_and_wait(`醒目飞鹰...是醒目飞鹰吗？`);
        await chara_talk.say_and_wait(`欸？训练员先生要叫我飞鹰子，是飞鹰子哦⭐`);
        await era.printAndWait(
            `像是为了强调作为偶像身份的醒目飞鹰，从腰间取出了麦克风不满地盯着（玩家名）嘟起了嘴。`,
        );
        era.printButton(`比想象之中还要可爱`, 1);
        await era.input();
        await era.printAndWait(
            `像早起时照在脸上的第一缕阳光，心情也不知何时变得愉悦起来了。`,
        );
        await era.printAndWait(`乐观的偶像，期待闪耀的偶像，更重要的是，她能坚持着自己的理想有多久呢？`);
        await chara_talk.say_and_wait(`飞鹰子是可爱系偶像哦♪`);
        await era.printAndWait(`重新调整好因蹦跳而略微向右侧倾斜的校服之后，作为担当的醒目飞鹰重新看向了作为训练员的（玩家名）。`);
        await era.printAndWait(`还在团队里的时候，那些活泼的马娘们就一直对世界充满了好奇心，那些不知道从哪里来的热情几乎让当时作为助理训练员的（玩家名）发疯。`);
        await era.printAndWait(`然而，`);
        await me.say_and_wait(`活泼虽然是一件好事，但也容易被其他的东西所吸引。`, true);
        await era.printAndWait(`那些无法沉下来训练的马娘们直到最后也没能在G1中登场。`);
        await era.printAndWait(`被上下打量着的醒目飞鹰露出了紧张的神情。`);
        await chara_talk.say_and_wait(`训......训练员先生？`);
        await me.say_and_wait(`接下来去训练场实际看一下吧。`);
        await chara_talk.say_and_wait(`嗯，飞鹰子一定会好好表现的！`);
        await era.printAndWait(`从害怕转换到营业用笑容用时不到半秒，这就是专业偶像的修养吗？`);
        era.drawLine({content: '训练场'});
        await me.say_and_wait(`最后一圈！`);
        await era.printAndWait(
            `呼吸开始混乱的醒目飞鹰咬紧了牙关，然后开始加速。`,
        );
        await chara_talk.say_and_wait(`哈啊啊啊啊！`);
        await era.printAndWait(
            `因为骤然剧烈的呼吸而痛苦的醒目飞鹰驱使着几乎失去知觉的身体开始加速。`,
        );
        await era.printAndWait(
            `直到冲线的一刻————`,
        );
        await chara_talk.say_and_wait(`哈啊，哈啊，哈啊......训练员先生觉得怎么样？`);
        await era.printAndWait(
            `最后冲刺时刻，骤然发力的双腿所溅起的沙土，以及毫不畏惧衣服脏乱的勇气。`,
        );
        await me.say_and_wait(`说不定醒目飞鹰真的能在泥地闪闪发光。`);
        await chara_talk.say_and_wait(`诶~真的吗？`);
        await era.printAndWait(`说者无心听着有意，飞鹰子耳朵抖动的样子非常可爱。`);
        await me.say_and_wait(
            `嗯——今天的成果，我们讨论下接下来打算参加的比赛。`,
        );
        await chara_talk.say_and_wait(
            `嗯-飞鹰子希望能让粉丝们看到自己闪耀的样子⭐`,
        );
        await era.printAndWait(
            `谈笑之中，你与${chara_talk.name}的第一次训练结束了。`,
        );
        new EduEventMarks(46).add('start');
        add_event(event_hooks.week_start, new EventObject(46, cb_enum.edu));
        wait_flag = get_attr_and_print_in_event(46, undefined, 120) || wait_flag;
    } else if (event_marks.fight_idol === 1) {
        event_marks.fight_idol++;
        await print_event_name(`偶像的奋斗！`, chara_talk);
        await era.printAndWait(
            `出道战之后，因为醒目飞鹰奋战的结果，飞鹰子作为泥地冉冉升起的新星吸引了许多粉丝。`,
        );
        await chara_talk.say_and_wait(`哼哼~飞鹰子的粉丝数已经突破了三位数了⭐`);
        await chara_talk.say_and_wait(`走在街头的话说不定也能遇到认识我的粉丝哦？`);
        era.printButton(
            `这么可爱的飞鹰子，任何人看到的话都会露出发自真心的微笑的。`,
            1,
        );
        await era.input();
        era.printButton(`我是如此相信的。`, 1);
        await era.input();
        await chara_talk.say_and_wait(`不过作为偶像的话，现在也只是青铜级吧？`);
        await chara_talk.say_and_wait(
            `要成为那种能在大屏幕上看得见的偶像，还有好长一段路要走呢。`,
        );
        era.printButton(`没关系！飞鹰子一定能做到的！`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `......训练员先生也帮助了我很多呢，把刚才飞鹰子说的话忘了吧⭐`,
        );
        await era.printAndWait(`不知想到了什么，偷偷捂着嘴笑着的飞鹰子。`);
        await me.say_and_wait(`那么，接下来的计划是？`);
        await chara_talk.say_and_wait(`嗯——飞鹰子的话希望能在全国各地进行巡演！`);
        await me.say_and_wait(`也就是说希望能在各种地方赛场奔跑吗？`);
        await me.say_and_wait(`作为泥地偶像来说是非常棒的愿望呢。`);
        await me.say_and_wait(`那么，接下来的话就以这个为目标出发吧！`);
        await chara_talk.say_and_wait(`好！`);
        await chara_talk.say_and_wait(`飞鹰子也要努力去练习舞蹈才行！`);
        await me.say_and_wait(`也不要忘了训练！`);
        await chara_talk.say_and_wait(`知道了！`);
    } else if (edu_weeks === 34) {
        await print_event_name(`飞鹰子！努力减肥中！`, chara_talk);
        await chara_talk.say_and_wait(`非常感谢支持飞鹰子！`);
        await era.printAndWait(`街头演出结束后，飞鹰子与前来支持自己的粉丝握手。`);
        await era.printAndWait(
            `虽然现在还只是底层偶像，不过通向顶级偶像的路也要一步一个台阶的走上去才行。`,
        );
        await me.say_and_wait(`辛苦了！`);
        await era.printAndWait(`最后一名粉丝离开后，你向飞鹰子递上了矿泉水。`);
        await chara_talk.say_and_wait(
            `其实也没有那么辛苦啦⭐，只是看到这么多支持着我的粉丝们，自己不知为何非常感动呢。`,
        );
        await chara_talk.say_and_wait(`而且，嗯。`);
        await chara_talk.say_and_wait(`训练员先生。`);
        await era.printAndWait(`轻轻拉着你衣袖的飞鹰子，脸色微红的看着你。`);
        await me.say_and_wait(
            `飞鹰子的表演非常精彩，作为一直关注着飞鹰子的粉丝真的很感动！`,
        );
        await chara_talk.say_and_wait(`一直以来都非常感谢！`);
        await era.printAndWait(`（玩家名）紧紧握住了飞鹰子的手`);
        await chara_talk.say_and_wait(`那么，接下来去哪里走一下吧。`);
        await me.say_and_wait(`说起来的话，最近有家拉面店很火爆，去看看吧？`);
        era.drawLine({content: '拉面店内'});
        await chara_talk.say_and_wait(`呼啊，真美味啊。`);
        await era.printAndWait(
            `（玩家名）目瞪口呆地看着醒目飞鹰风卷残云般吃完了大份拉面。`,
        );
        await me.say_and_wait(`真是厉害啊。`);
        await era.printAndWait(`作为马娘来说食量也比一般人要大得多吗？`);
        await chara_talk.say_and_wait(
            `哎呀！不小心吃这么多，这周的减肥计划又要失败了。`,
        );
        await chara_talk.say_and_wait(`明明都已经坚持6天了，结果一高兴就。`);
        await me.say_and_wait(`没关系的！多余的卡路里就通过训练消耗掉吧！`);
        await chara_talk.say_and_wait(`嗯！飞鹰子在训练上也会努力的！`);
        await era.printAndWait(`谈笑之中飞鹰子又吃完了一份拉面。`);
        await me.say_and_wait(`没关系的！多余的卡路里就通过训练消耗掉吧！`);
    } else if (event_marks.target_finish === 1) {
        event_marks.target_finish++;
        await print_event_name(`目标达成`, chara_talk);
        await chara_talk.say_and_wait(`干杯⭐`);
        era.printButton(`干杯！`, 1);
        await era.input();
        await era.printAndWait(
            `成功达成目标之后，（玩家名）和醒目飞鹰在训练室里开了小小的庆祝会。`,
        );
        await chara_talk.say_and_wait(`就这样一步一步成为马娘偶像吧♪`);
        await era.printAndWait(`飞鹰子看上去非常高兴的样子。`);
        await era.printAndWait(`趁着这股气势，`);
        await me.say_and_wait(`飞鹰子为什么打算成为偶像呢？`);
        await era.printAndWait(`向飞鹰子询问心中一直以来的疑惑。`);
        await chara_talk.say_and_wait(
            `飞鹰子的话，希望能像小时候在遇到的偶像那样，坚强的闪耀下去。`,
        );
        await era.printAndWait(`飞鹰子紧紧盯着你的双眼。`);
        await chara_talk.say_and_wait(
            `飞鹰子小时候因为经常搬家的缘故，所以朋友一直都很少。`,
        );
        await chara_talk.say_and_wait(
            `即使想要努力加深羁绊，但都会因为位置的变化而渐渐疏远。`,
        );
        await chara_talk.say_and_wait(`所以，飞鹰子的话，其实没有故乡这个概念呦。`);
        await era.printAndWait(`面带微笑的飞鹰子搅动着果汁不知道在想什么`);
        await chara_talk.say_and_wait(
            `想着不知道接下来该做些什么的时候，来到了经常路过的空地旁。`,
        );
        await era.printAndWait(`咕噜咕噜搅拌着的果汁像醒目飞鹰的内心一样旋转着。`);
        await chara_talk.say_and_wait(`然后遇到了闪闪发光的偶像和粉丝们。`);
        await era.printAndWait(`这么说着的飞鹰子露出了那种复杂的神情。`);
        await chara_talk.say_and_wait(
            `酥酥麻麻的电流感从头顶一直触及到脚尖，呼吸也不知何时变得急促起来。`,
        );
        await chara_talk.say_and_wait(
            `......就像是敲击一连串的水晶发出的叮叮当当的感觉⭐`,
        );
        await era.printAndWait(`醒目飞鹰有节奏的敲击着玻璃杯的不同位置。`);
        era.printButton(`所以飞鹰子也想成为偶像吗？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `嗯！目标是C位！这个是绝对不会让给其他人的！`,
        );
        await me.say_and_wait(`一起努力吧！`);
        await chara_talk.say_and_wait(`好！接下来的话也请多多指教了！训练员君⭐`);
        await me.say_and_wait(`我也是，请多指教了，飞鹰子。`);
    } else if (edu_weeks === 47 + 21) {
        await print_event_name(`训练室的花`, chara_talk);
        era.printButton(`终于结束了。`, 1);
        await era.input();
        await era.printAndWait(
            `整理完最后一份文件，（玩家名）如释重负般的叹了一口气。`,
        );
        await me.say_and_wait(`作为训练员真是辛苦啊`, true);
        await era.printAndWait(
            `不知何时训练室被金黄色的夕阳悄悄拜访，窗外热火朝天的训练声音让（玩家名）回忆起了作为助理训练员的生活。`,
        );
        await me.say_and_wait(`......不知道团队里的大家现在还好吗？`, true);
        await era.printAndWait(
            `作为助理训练员时期邂逅的马娘们都已经离开特雷森各奔东西了。`,
        );
        await era.printAndWait(
            `托那段忙的找不到北的日子的福，你从团队主训练员那里学到了很多东西。看着团队中的马娘们一步步向着希翼的未来前进时。`,
        );
        await me.say_and_wait(`......有空的话带瓶酒去看下他吧？`, true);
        await era.printAndWait(
            `作为团队中的掌舵者，让你在无数个日夜诅咒他早点秃头，同样在团队中的大家退役之后，拉着你在居酒屋喝个不停的也是他。`,
        );
        await era.printAndWait(
            `说着未来是年轻人的天下然后不顾学园长的挽留，留下作为训练员的铭牌后潇洒退休。`,
        );
        await me.say_and_wait(`......我有好好完成作为训练员的职责吗？`, true);
        await chara_talk.say_and_wait(`训练员先生我回来了⭐`);
        await era.printAndWait(
            `不合适宜的推门声响起，圆圆的小脑袋从推门的间隙中窜了出来。`,
        );
        await me.say_and_wait(`飞鹰子来了啊。不过手上的这是？`);
        await era.printAndWait(`收拾好自己的心态后，稍稍坐正看着眼前的醒目飞鹰。`);
        await chara_talk.say_and_wait(`飞鹰子也不知道名字，不过很好闻哦。`);
        await me.say_and_wait(`是粉丝送的吧？`);
        await era.printAndWait(
            `皋月赏后，作为泥地偶像的醒目飞鹰意外受到了不少关注草地赛的粉丝们的关注。`,
        );
        await era.printAndWait(`街头演出时偶尔会收到粉丝们的礼物。`);
        await chara_talk.say_and_wait(`嗯，是附近花店的店员姐姐送给我的。`);
        await me.say_and_wait(`......这样啊。`);
        await era.printAndWait(
            `如果是信件，则会由身为训练员的你筛选之后再给醒目飞鹰看，如果是包装的礼物也是同理。`,
        );
        await era.printAndWait(
            `醒目飞鹰意外的在这方面表现的很顺从，所以现在她的小脑袋还没被恶意所淹没。`,
        );
        await me.say_and_wait(
            `居然收到了这么珍贵的礼物，下一次一定要当面感谢才行。`,
        );
        await me.say_and_wait(`那么，先放在靠近窗户的阴影处吧。`);
        await chara_talk.say_and_wait(`唉，不应该放在阳光下吗？`);
        await me.say_and_wait(
            `刚上盆的幼苗不可以直接照射在阳光之下，所以先浇水后放在阴凉处。`,
        );
        await chara_talk.say_and_wait(`原来是这样⭐`);
        await era.printAndWait(
            `看着醒目飞鹰将花盆放下后啪嗒啪嗒地坐在了你的旁边。`,
        );
        await chara_talk.say_and_wait(`那个，训练员先生`);
        await me.say_and_wait(`嗯？飞鹰子怎么了？`);
        await chara_talk.say_and_wait(`没什么哦⭐`);
        await era.printAndWait(
            `不知为何掩着嘴偷偷笑起来的醒目飞鹰，（玩家名）显得有些不知所措。`,
        );
        await me.say_and_wait(`接下来的话，一起去吃东西吧？`);
        await chara_talk.say_and_wait(
            `飞鹰子的话，想尝尝看最近流行的牛排味道怎么样⭐`,
        );
        await me.say_and_wait(`那现在就去那家店尝尝看吧！`);
        await era.printAndWait(`二人有说有笑地离开了训练室。`);
    } else if (edu_weeks === 47 + 32) {
        await print_event_name(`夏季合宿结束·为了更大的舞台`, chara_talk);
        await chara_talk.say_and_wait(`哈啊！哈啊！哈啊！`);
        await me.say_and_wait(`飞鹰子加油！`);
        await chara_talk.say_and_wait(`哈啊啊啊啊啊！`);
        await era.printAndWait(`拼尽最后的力气冲向终点的飞鹰子终于停了下来。`);
        await me.say_and_wait(`辛苦了。`);
        await era.printAndWait(
            `将准备好的毛巾递给飞鹰子，在纸张上记下最后一行数据。`,
        );
        await chara_talk.say_and_wait(
            `为了能让更多的粉丝们注意到泥地比赛，飞鹰子要更加努力才行⭐`,
        );
        await era.printAndWait(
            `为了预定的目标不停努力着的飞鹰子也开始满满闪耀了。`,
        );
        await me.say_and_wait(`接下来的话稍微休息一下吧。`);
        await chara_talk.say_and_wait(`......啊！对了！演唱会马上就要开始了！`);
        await me.say_and_wait(`这样的话，飞鹰子赶快出发吧！`);
        await chara_talk.say_and_wait(`......不过飞鹰子就这么过去的话也不太好。`);
        await era.printAndWait(`就这么穿着泳装过去的话确实不行。`);
        await chara_talk.say_and_wait(
            `所以飞鹰子要去更衣室换衣服了！训练员先生不要偷看哦⭐`,
        );
        era.drawLine({content: '演唱会结束后'});
        await chara_talk.say_and_wait(`~~~~♪ 谢谢大家！`);
        await era.printAndWait(`粉丝们「噢噢噢！」`);
        await era.printAndWait(
            `在附近小镇里举行的演唱会意外的很有人气，甚至有因为听到飞鹰子要开演唱会而专门开了3个小时车过来赶过来的粉丝。`,
        );
        await chara_talk.say_and_wait(
            `嗯嗯！大家的声音传到了飞鹰子的耳朵里了！飞鹰子很高兴哦！`,
        );
        await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
        await chara_talk.say_and_wait(
            `谢谢大家的支持！那么，最后一起喊出我们的口号！`,
        );
        await chara_talk.say_and_wait(`如果飞鹰子逃跑的话？`);
        await era.printAndWait(`粉丝们「就这能追上去了！」`);
        await chara_talk.say_and_wait(`要一直追下去吗？`);
        await era.printAndWait(`粉丝们「一直追到地平线的大舞台！」`);
        await chara_talk.say_and_wait(`谢谢大家！`);
        await era.printAndWait(
            `等到现场的粉丝们渐渐散去，后台里只剩下了（玩家名）和飞鹰子。`,
        );
        await me.say_and_wait(`飞鹰子现在还好吗？`);
        await era.printAndWait(`搀扶着体力不支的醒目飞鹰慢慢坐下。`);
        await era.printAndWait(
            `不如说在训练结束之后连续三个小时的高强度舞台之下，是铁人也差不多到极限了。`,
        );
        await chara_talk.say_and_wait(`......哈啊，总算缓过来了。`);
        await era.printAndWait(
            `即使是醒目飞鹰也差不多到极限了，不过作为飞鹰子的她眼里却依然闪闪发光。`,
        );
        await chara_talk.say_and_wait(
            `按照这种情况下去的话，说不定飞鹰子也能突破那道障碍呢！`,
        );
        await era.printAndWait(`泥地与草地之间的人气隔了一座水泥灌注的城墙。`);
        await era.printAndWait(`飞鹰子希望能通过自己的努力提高作为泥地的人气。`);
        await me.say_and_wait(`一定会成功的！`);
        await era.printAndWait(
            `尽管如此，如果从草地转到泥地还失败的话，对于许多马娘来说，生涯就已经`,
        );
        await era.printAndWait(`（玩家名）与飞鹰子的夏季合宿结束了。`);
    } else if (edu_weeks === 95 + 20) {
        const love = era.get('love:46');
        await print_event_name('前辈与后辈（二）', chara_talk);
        await era.printAndWait(
            `短暂的春季即将过去，夏天带着若有若无的气息敲开了世界的大门。`,
        );
        await era.printAndWait(
            `相比于春天，多了一份热情与焦躁，褪去了青涩与懵懂。`,
        );
        await chara_talk.say_and_wait(`久等了♪`);
        await era.printAndWait(
            `换上了便装的醒目飞鹰踩着小碎步出现在了（玩家名）的眼前。`,
        );
        await chara_talk.say_and_wait(`接下来去哪里玩好呢？`);
        await era.printAndWait(
            `因为是节假日的缘故，站在流动的人潮中心的你们显得有些格格不入。`,
        );
        await me.say_and_wait(`既然这样的话，就先去附近的百货大楼逛逛吧？`);
        await chara_talk.say_and_wait(`......嗯。`);
        await era.printAndWait(`话说上一次到商场购物是什么时候的事情来着了？`);
        await chara_talk.say_and_wait(
            `那个甜品店看上去很有人气的样子？一起去看看吧！`,
        );
        await era.printAndWait(
            `被挂在外面的展示牌吸引的醒目飞鹰拉着你的手来到了甜品店门口。`,
        );
        await chara_talk.say_and_wait(`训练员先生喜欢什么呢？`);
        era.printButton(`水果巴菲感觉就不错！`, 1);
        era.printButton(`有点想尝尝看巧克力口味的新品！`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
            await chara_talk.say_and_wait(`飞鹰子也很喜欢那种酸甜口感的巴菲呢？`);
            await chara_talk.say_and_wait(`有点像是初恋般的感觉呢？`);
        } else if (ret1 === 2) {
            await chara_talk.say_and_wait(`巧克力吗？飞鹰子也没尝过。`);
            await chara_talk.say_and_wait(`不过尝试一下新口味也算是不错的体验呢♪`);
        }
        await chara4_talk.say_and_wait(`下午好哦！没想到能在这里遇见飞鹰子呢。`);
        await chara_talk.say_and_wait(`下午好⭐欸？难道是丸善前辈？`);
        await era.printAndWait(`不远处独自一人品尝甜品的丸善斯基向你们搭话。`);
        await chara4_talk.say_and_wait(
            `姐姐我听说了飞鹰子在泥地赛道之上大放异彩的事情呢。`,
        );
        await chara4_talk.say_and_wait(
            `没想到现在的后辈比想象之中还要厉害，姐姐很开心哦。`,
        );
        await era.printAndWait(`看着对自己的肯定，醒目飞鹰露出了笑容。`);
        await chara_talk.say_and_wait(
            `嗯！飞鹰子的话一定会让泥地赛道变得受欢迎起来的！`,
        );
        await chara4_talk.say_and_wait(
            `接下来是打算参战帝王赏吧？姐姐的话也会到现场去加油的！`,
        );
        await chara_talk.say_and_wait(`到时候一定会让丸善前辈看到后辈精彩的表现！`);
        await era.printAndWait(`露出笑容的丸善斯基将视线转向了你。`);
        if (
            era.get('cflag:4:招募状态') === recruit_flags.yes &&
            era.get('love:4') > 90
        ) {
            era.printButton(`丸善斯基！`, 1);
            await era.input();
            await chara4_talk.say_and_wait(`啊啦，训练员君？你也在这里吗？`);
            await era.printAndWait(
                `虽然在这么大的商场里碰到丸善斯基的概率几乎为零，但发生了就是发生了。`,
            );
            await chara_talk.say_and_wait(`训练员先生和丸善前辈认识吗？`);
            await era.printAndWait(
                `看着自然走到了（玩家名）身旁的丸善斯基，飞鹰子似乎有些摸不着头脑。`,
            );
            await chara4_talk.say_and_wait(`不如说可是我最喜欢的训练员君呢♪`);
            await era.printAndWait(
                `稍稍靠近（玩家名）座位的丸善斯基，对坐在对面的醒目飞鹰露出了微笑。`,
            );
            if (love > 90) {
                await chara_talk.say_and_wait(
                    `就算是丸善前辈的话？这个巧克力也不能让给你的呦♪`,
                );
                await chara4_talk.say_and_wait(`现在的后辈比想象之中还要可爱呢♪`);
                await chara4_talk.say_and_wait(
                    `如果不是擅长的赛道不同的话，真想和小飞鹰比一场呢♪`,
                );
                await chara_talk.say_and_wait(
                    `即使是丸善前辈的话，飞鹰子也不会认输的哦♪`,
                );
                await chara4_talk.say_and_wait(`不觉得稍微有些失礼了吗？`);
                await chara_talk.say_and_wait(`没有哦？飞鹰子可没有任何恶意哦？`);
                await chara_talk.say_and_wait(
                    `只是觉得丸善前辈差不多也要到了该去结婚的年纪了，为什么还在这里呢？`,
                );
                await chara4_talk.say_and_wait(
                    `说起来飞鹰子不是作为偶像的吗？就这样和训练员先生坐在一起不怕有绯闻出现吗？`,
                );
                await chara4_talk.say_and_wait(`训练员君，你怎么想的呢？`);
                await chara_talk.say_and_wait(
                    `不会的哦？如果出现了，干脆直接宣布和训练员先生结婚就好了♪对吧，训练员先生？`,
                );
                await era.printAndWait(
                    `游仞有余的丸善斯基看着露出了认真态势的醒目飞鹰，无形的气浪让周围的人纷纷开始远离。`,
                );
                era.printButton(`什么也不想看`, 1);
                await era.input();
                await era.printAndWait(
                    `在化为战场的正中央，带着呆滞的表情看着两人发力的你活像鸵鸟把头埋进了沙子里。`,
                );
            } else {
                await chara_talk.say_and_wait(`原来是这样吗？啊哈哈哈`);
                await era.printAndWait(
                    `想要说些什么却显得尴尬的醒目飞鹰只好专心品尝起了冰淇淋。`,
                );
            }
        }
        await chara4_talk.say_and_wait(`那么这位是？`);
        await chara_talk.say_and_wait(`是飞鹰子最喜欢的训练员先生哦！`);
        await chara4_talk.say_and_wait(`嗯嗯，比想象中还要能干呢！`);
        await chara4_talk.say_and_wait(`啊，差不多该回去了，下次见！`);
        await chara_talk.say_and_wait(`丸善前辈再见！`);
        await me.say_and_wait(`什么时候飞鹰子也能成为这样的偶像呢？`);
        await era.printAndWait(`看着潇洒离开的丸善斯基，（玩家名）陷入了沉思。`);
    } else if (edu_weeks === 95 + 32) {
        await print_event_name('夏季合宿结束', chara_talk);
        await era.printAndWait(`醒目飞鹰的第三年夏季合宿结束了。`);
        await chara_talk.say_and_wait(
            `和训练员先生一起在沙滩上散步的感觉比想象中还要好呢♪`,
        );
        await era.printAndWait(
            `与往年不同的是，合宿结束的时候，醒目飞鹰决定与（玩家名）一起在沙滩上散步。`,
        );
        await me.say_and_wait(`飞鹰子不打算`);
        await chara_talk.say_and_wait(`偶像和粉丝之间任何越线都是不可以的哦？`);
        await chara_talk.say_and_wait(`不过只要不被发现就不算♪`);
        await era.printAndWait(
            `学着成熟大人模样，竖起手指贴在嘴唇上一闪一闪地眨眼。`,
        );
        await chara_talk.say_and_wait(
            `而且，作为醒目飞鹰也想和最喜欢的训练员先生一起散步！`,
        );
        await me.say_and_wait(`既然是飞鹰子`);
        await chara_talk.say_and_wait(`不对！是醒目飞鹰哦♪`);
        await me.say_and_wait(
            `既然是醒目飞鹰的要求，那么我就带着感谢的心态接受了。`,
        );
        await chara_talk.say_and_wait(
            `哎呀！训练员先生这么说真是让人家不好意思呢⭐`,
        );
        await me.say_and_wait(`不要说这种奇怪的话啊。`);
        await era.printAndWait(`两人之间嬉笑打闹着在海滩边做起了游戏。`);
        await me.say_and_wait(`飞鹰子，现在做偶像还会感到快乐吗？`);
        await chara_talk.say_and_wait(`飞鹰子没问题哦⭐`);
        await me.say_and_wait(`请告诉我更多关于醒目飞鹰的事情吧！`);
        await chara_talk.say_and_wait(`......说起来还是稍微有些迷茫呢。`);
        await chara_talk.say_and_wait(
            `虽然一开始只是朝着那个目标努力，但是中途却发生了这么多的事情。`,
        );
        await chara_talk.say_and_wait(
            `虽然被丸善前辈认可，被憧憬着飞鹰子的后辈努力追赶。`,
        );
        await chara_talk.say_and_wait(
            `不过，飞鹰子从头到尾都只是一个非常普通的马娘哦。`,
        );
        await chara_talk.say_and_wait(`只是朝着梦想一步一步前进的普通马娘罢了。`);
        await me.say_and_wait(`把背在身上的担子稍微分我一点吧。`);
        await me.say_and_wait(
            `先将目光从遥远的未来收回到现在，把一件事分解成若干个步骤。`,
        );
        await me.say_and_wait(`我也会陪着飞鹰子一起努力！`);
        await me.say_and_wait(`毕竟，训练员也好，赛马娘也好，从一开始就是一体的！`);
        await me.say_and_wait(`所以，飞鹰子缺少的勇气我来补足！`);
        await chara_talk.say_and_wait(`！训练员先生！`);
        await chara_talk.say_and_wait(
            `不是作为飞鹰子，而是作为醒目飞鹰的小马娘，想要对训练员先生说。`,
        );
        await chara_talk.say_and_wait(`最喜欢你了⭐`);
        await era.printAndWait(`紧紧抱住你的醒目飞鹰露出了幸福的表情。`);
    } else if (edu_weeks === 95 + 37) {
        await print_event_name('顶级偶像之路', chara_talk);
        await era.printAndWait(`夏天的炎热尚未完全散去，转眼之间来到了秋天。`);
        await chara_talk.say_and_wait(`我决定了。`);
        await chara_talk.say_and_wait(`育马场经典赛、冠军杯，以及东京大赏典。`);
        await chara_talk.say_and_wait(`飞鹰子要站在这三场比赛的胜者舞台之上！`);
        await era.printAndWait(`距离泥地的顶级偶像只剩下这三场考验了。`);
        await chara_talk.say_and_wait(
            `飞鹰子希望能让更多的马娘们看到飞鹰子闪耀的样子！`,
        );
        await me.say_and_wait(`那么，就朝着梦想开始训练吧！`);
        await chara_talk.say_and_wait(`好！`);
    } else if (edu_weeks === 95 + 47) {
        await print_event_name(`迷茫少女`, chara_talk);
        await era.printAndWait(
            `下周就是预定好的东京大赏了，将整理好的文件放到原先的位置后。`,
        );
        await me.say_and_wait(`比想要之中还要疲惫啊。`);
        await era.printAndWait(`伴随着放学铃的响起，差不多也到下班的时候了。`);
        await me.say_and_wait(`就在这里稍微等一下醒目飞鹰吧。`);
        await era.printAndWait(
            `一反常态的是，直到倒好的咖啡热气消散为止，醒目飞鹰活泼的样子都没有出现。`,
        );
        await me.say_and_wait(`可能是被突然拉去参加什么活动一直抽不开身吧。`);
        await era.printAndWait(`虽然很稀少，但这种情况也是出现过的。`);
        await era.printAndWait(`一般来说，不久就会在手机上收到她发来的抱歉信息。`);
        await me.say_and_wait(`既然这样的话，现在就先回宿舍吧。`);
        await me.say_and_wait(`第二天早上的时候再去听她分享那些有趣的经历吧。`);
        await era.printAndWait(
            `不知不觉中，你与醒目飞鹰已经产生了相当程度的羁绊。`,
        );
        await era.printAndWait(
            `以前从未有过整理习惯的你在遇到比你还要邋遢的醒目飞鹰被迫养成了整理的习惯。`,
        );
        await era.printAndWait(
            `遇到学习就逃跑的醒目飞鹰现在也能安安静静坐在你的身边跟数学战斗了。`,
        );
        await era.printAndWait(
            `训练员与马娘之间相互之间影响，最终都深刻影响了彼此之间的命运。`,
        );
        await me.say_and_wait(`飞鹰子的话，现在怎么样了呢？`);
        await me.say_and_wait(`一定在拍摄的时候露出了可爱的笑脸吧。`);
        await me.say_and_wait(`一定是这样的。`, true);
        await era.printAndWait(`冬日的夜晚比想象中还要漫长。`);
        await era.printAndWait(`思绪在独处的时刻延伸到了世界的尽头。`);
        await era.printAndWait(`深不见底的情感也在延伸的过程中被无限的放大。`);
        await era.printAndWait(`像沉默的大海，又像深不见底的井一样。`);
        await era.printAndWait(`咚咚咚。`);
        await me.say_and_wait(`这么晚的话，会是谁呢？`);
        await era.printAndWait(`轻轻打开门锁，却看见了散着头发的栗色马娘。`);
        await chara_talk.say_and_wait(`......训练员先生。`);
        await me.say_and_wait(`为什么，飞鹰子——不，进来再说吧。`);
        await era.printAndWait(
            `比起传出奇奇怪怪的传言，（玩家名）更担心的是飞鹰子的情况。`,
        );
        await me.say_and_wait(
            `喜欢喝什么饮料？红茶？果汁？还是咖啡？不，咖啡还是算了吧。`,
        );
        await era.printAndWait(`但在此之前，招待客人是作为主人的义务。`);
        await chara_talk.say_and_wait(`......啊，飞鹰子的话都可以哦。`);
        await me.say_and_wait(`心不在焉的样子，是发生了什么吗？`, true);
        await me.say_and_wait(`这么冷的天气，还是喝杯红茶暖和一下吧。`);
        await era.printAndWait(`像这样给客人倒茶对你来说还是一种新奇的体验。`);
        await era.printAndWait(
            `尽可能的将水壶慢慢倾倒下来，不让一滴茶水逸到桌子上。`,
        );
        await me.say_and_wait(`刚烧开的水有点烫，小心一点。`);
        await chara_talk.say_and_wait(`好的！`);
        await era.printAndWait(
            `捧起杯子小心翼翼尝了一口之后，就这样抱着杯子盯着茶叶不知在想些什么的醒目飞鹰。`,
        );
        await me.say_and_wait(`那么，现在可以跟我说一下怎么了吗？`);
        await era.printAndWait(
            `现在的话，就算走到地铁站门口也来不及赶不上最后一班了。`,
        );
        await era.printAndWait(`如果开车的话，说不定还来得及？`);
        await chara_talk.say_and_wait(`训练员先生，可以让我就这样呆一会吗？`);
        await me.say_and_wait(`......个人的独处有时候也是必要的。`);
        await era.printAndWait(
            `与平静的外表相反，（玩家名）的内心开始了天人交战。`,
        );
        await era.printAndWait(
            `强行按下尚不成熟的理智越来越激烈的警告，（玩家名）走到了阳台。`,
        );
        await era.printAndWait(`如果开车的话，说不定还来得及？`);
        await me.say_and_wait(`没有一丝阴霾的天空，宁静的月神在空中的神殿端坐。`);
        await me.say_and_wait(`明天也会是一个好天气。`, true);
        await me.say_and_wait(`像这样在阳台之上来回踱步还蛮有意思的。`, true);
        await me.say_and_wait(`有空的时候也这样子做吧！`, true);
        await me.say_and_wait(`......`, true);
        await me.say_and_wait(`飞鹰子，你怎么了？`, true);
        await era.printAndWait(`刚升起的愉悦情感随即被更强烈的担忧冲击。`);
        await era.printAndWait(`天空中的大圆盘似乎也在嘲笑着愚蠢的凡人自作多情。`);
        await chara_talk.say_and_wait(`训练员先生，可以进来了哦？`);
        await era.printAndWait(
            `得到少女的许可，如蒙大赦的（玩家名）迅速推开了玻璃门。`,
        );
        await me.say_and_wait(`干脆在这里住一个晚上吧？`);
        await era.printAndWait(`说出口的一瞬间（玩家名）就后悔了。`);
        await era.printAndWait(`万千感情涌上心头，最后脱口而出的竟是这句。`);
        await chara_talk.say_and_wait(`......`);
        await me.say_and_wait(`这下要被讨厌了。`);
        await chara_talk.say_and_wait(`嗯。`);
        await me.say_and_wait(`果然......嗯？`);
        await era.printAndWait(`为什么？`);
        await me.say_and_wait(`外宿许可申请了吗？`);
        await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请`);
        await chara_talk.say_and_wait(`......`);
        await me.say_and_wait(`......我知道了，今天晚上的话现在这边休息吧。`);
        await era.printAndWait(
            `不久之后先后接到了富士奇石与作为室友的荣进闪耀担心的电话。`,
        );
        await me.say_and_wait(`抱歉耽误的时间太久了，已经的话已经找到地方住了。`);
        await me.say_and_wait(`第二天我会让醒目飞鹰重新提交申请的。`);
        await me.say_and_wait(`......嗯嗯，感谢理解。`);
        await era.printAndWait(
            `挂掉电话之后，看着醒目飞鹰的样子，忍不住还是叹了口气。`,
        );
        await me.say_and_wait(`......今天就先睡在床上吧，我去打地铺。`);
        await era.printAndWait(`所幸上次野营时使用的垫板还没有处理掉。`);
        await era.printAndWait(
            `将垫板铺在腾出来的地上，往上面铺上一层床单，简单的床铺就完成了。`,
        );
        await me.say_and_wait(`晚安`, true);
        await chara_talk.say_and_wait(`训练员先生晚安。`);
        await era.printAndWait(`从语气听起来醒目飞鹰似乎恢复了平静。`);
        await me.say_and_wait(`空调房里应该没有事情吧？`, true);
        await era.printAndWait(`将灯关上后盖上了夏季的被子。`);
        await me.say_and_wait(`为什么醒目飞鹰会突然过来呢？`, true);
        await me.say_and_wait(`明明是这么乖的孩子。`, true);
        await era.printAndWait(`盯着陌生的天花板却迟迟睡不着。`);
        await chara_talk.say_and_wait(`训练员先生。`);
        await era.printAndWait(`像是从遥远的地方一样传来的微弱声音。`);
        await chara_talk.say_and_wait(
            `如果最后失败的话，训练员先生会讨厌这样的我吗？`,
        );
        await era.printAndWait(`未曾听过的颤抖。`);
        await me.say_and_wait(`不，怎么会。`);
        await chara_talk.say_and_wait(
            `我很害怕，真的很害怕，害怕失败的自己会被抛弃。`,
        );
        await chara_talk.say_and_wait(
            `明明已经练习过无数遍了，但是，一想到失败的可能性。`,
        );
        await chara_talk.say_and_wait(`无论怎么努力，也无法消除那微弱的可能性。`);
        await chara_talk.say_and_wait(`即使想要闭上眼睛，在脑海之中浮现的确是——`);
        await chara_talk.say_and_wait(`——独自一人，在空荡荡的舞台之上。`);
        await chara_talk.say_and_wait(`想要说些什么，但什么也说不出口。`);
        await chara_talk.say_and_wait(
            `想要哭泣却流不出眼泪，最后只是变成了一种扭曲的笑容。`,
        );
        await me.say_and_wait(`如果醒目飞鹰需要勇气的话，我来给你勇气。`);
        await me.say_and_wait(
            `不论飞鹰子成功也好，失败也好，我都会陪着你一起见证最终的结局。`,
        );
        await me.say_and_wait(`那个时候，我们一定会笑着谈论今晚的对话的。`);
        await me.say_and_wait(`所以，飞鹰子不用害怕。`);
        era.printButton(`抉择之时，我会推你一把`, 1);
        await era.input();
        await chara_talk.say_and_wait(`......训练员先生。`);
        await era.printAndWait(`（玩家名）紧紧握住了醒目飞鹰伸出的手`);
        await chara_talk.say_and_wait(`训练员先生一定要记住今天说的话呦？`);
        await me.say_and_wait(`嗯，已经记住了。`);
        await era.printAndWait(
            `第二天早上，起来的时候发现睡在旁边的醒目飞鹰就是后话了。`,
        );
    }
    wait_flag && (await era.waitAnyKey());
};
