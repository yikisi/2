const era = require('#/era-electron');

const {add_event} = require('#/event/queue');
const CharaTalk = require('#/utils/chara-talk');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const event_hooks = require('#/data/event/event-hooks');
const print_event_name = require('#/event/snippets/print-event-name');
const {attr_names, fumble_result} = require('#/data/train-const');
const {get_chara_talk} = require('#/utils/chara-talk-factory');
const FaEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-46');
const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,function(hook:HookArg,extra_flag:*,event_object:EventObject):Promise<*>>}*/
const handlers = {};

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-46/week-end');

handlers[
    event_hooks.week_start
    ] = require('#/event/edu/edu-events-46/week-start');

handlers[
    event_hooks.race_start
    ] = require('#/event/edu/edu-events-46/race-start');

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-46/race-end');
/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
    const me = get_chara_talk(0),
        chara_talk = new CharaTalk(46);
    era.print(
        `${chara_talk.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
    );
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
        await print_event_name('额外的自主训练', chara_talk);
        await era.printAndWait(`预定的计划全部结束之后`);
        await chara_talk.say_and_wait(`训练员先生！看到闪闪发光的飞鹰子了吗？`);
        await era.printAndWait(`在泥地上挥洒着汗水，满身尘土的醒目飞鹰，眼神却是闪闪发光。`);
        await me.say_and_wait(`预定计划都顺利完成了，飞鹰子辛苦了。`);
        await chara_talk.say_and_wait(`训练员先生也觉得飞鹰子在闪耀吗！太好了⭐`);
        await era.printAndWait(`从（玩家名）的手上接过洗好的毛巾擦去了脸上的泥污，慢慢靠近了正在整理数据的（玩家名）。`);
        await chara_talk.say_and_wait(`嗯，那个，训练员先生，`);
        await era.printAndWait(`微风吹动了路边生长的小草，醒目飞鹰的神情被夕阳的光线被隐藏。`);
        await chara_talk.say_and_wait(`可以再稍微练习一会吗？飞鹰子还有想要完成的目标哦！`);
        await chara_talk.say_and_wait(
            `而且，作为马娘偶像的话，目标稍微~定高一样也没关系吧？`,
        );
        await chara_talk.say_and_wait(
            `那么，训练员先生又是怎么想呢？`,
        );
        era.printButton(`这样的话`, 1);
        await era.input();
        await era.printAndWait(
            `虽然飞鹰子现在的状态很好可以额外训练，不过训练量突然加大会不会影响第二天的训练呢？`,
        );
        await chara_talk.say_and_wait(`训练员先生？`);
        await era.printAndWait(
            `即使是路边生长的小草，也渴望着茁壮成长吗？`,
        );
        era.printButton(`「那么加油哦，未来的马娘偶像」`, 1);
        era.printButton('「......今天的话就训练到这里了」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
            await chara_talk.say_and_wait(`嗯！额外训练也请多关照了，训练员先生！`);
            era.printButton(
                `能看着飞鹰子一步步走向顶级偶像的道路，我也很高兴哦。`,
                1,
            );
            await era.input();
            await me.say_and_wait(`接下来的话`);
            await era.printAndWait(
                `一直训练到快门禁后，你抱着跑不动的飞鹰子到了宿舍门口。`,
            );
        } else {
            await chara_talk.say_and_wait(`可是......`);
            await me.say_and_wait(
                `成为马娘偶像的道路不是一蹴而就的，过度的训练只会适得其反！`,
            );
            await chara_talk.say_and_wait('诶？');
            await me.say_and_wait(
                `过度训练之后容易因为疲惫疏忽训练方法不当使得腿部受伤甚至骨折。`,
            );
            await me.say_and_wait(`所以作为你的训练员我不能犯这么高风险的事情。`);
            await chara_talk.say_and_wait(
                `飞鹰子真是个笨蛋呢，居然没想到这么简单的事情。`,
            );
            await era.printAndWait(
                `看着低着头不敢直视你的飞鹰子，你叹了口气，摸了摸她的头。`,
            );
            await me.say_and_wait(`接下来的话先回训练室吧稍微休息一会吧。`);
            await chara_talk.say_and_wait(`好！`);
            await era.printAndWait(
                `之后（玩家名）在训练室中一边帮着飞鹰子做着腿部按摩一边讨论着最近的流行趋势。`,
            );
        }
        era.println();
    }
};

handlers[event_hooks.train_fail] =
    /**
     * @param {HookArg} hook
     * @param {{train:number,stamina_ratio:number}} extra_flag
     */
    async (hook, extra_flag) => {
        const me = get_chara_talk(0),
            chara_talk = new CharaTalk(46);
        extra_flag['args'] = extra_flag.fumble
            ? fumble_result.fumble
            : fumble_result.fail;
        if (extra_flag.fumble) {
            await print_event_name('严禁逞强！', chara_talk);
            await chara_talk.say_and_wait(`训练员先生.......`);
            await era.printAndWait(`飞鹰子在训练的时候不甚扭到了脚`);
            await chara_talk.say_and_wait(`抱歉，飞鹰子太累了所以......`);
            await era.printAndWait(`可能是接连不断的突击live大量消耗了飞鹰子的体力`);
            era.printButton('「接下来的街头live需要暂时停止了。」', 1);
            era.printButton('「试试看街头演出吧？」', 2);
            hook.arg = (await era.input()) === 1;
            if (hook.arg) {
                await chara_talk.say_and_wait(
                    `呜~那些期待着飞鹰子的粉丝们该怎么办呢？`,
                );
                era.printButton(
                    '「就这样挺着受伤的腿强行表演的话，粉丝们也会担心的吧？」',
                    1,
                );
                await era.input();
                await chara_talk.say_and_wait('.....看来只能这样稍微暂停一会了');
                await chara_talk.say_and_wait(
                    '那么，为了打起精神来，一起在训练室看有马胜者舞台的表演吧！',
                );
                era.printButton('「注意受伤的部位不要用力。」', 1);
                await era.input();
                await chara_talk.say_and_wait(`知道了！训练员先生可以抱着我吗？`);
                era.printButton(`「嘿咻！」`, 1);
                await era.input();
                await chara_talk.say_and_wait(`呜哇，真的抱起来了`, true);
                await chara_talk.say_and_wait(`身上有种很好闻的气味而且靠的好近`, true);
                await era.printAndWait(`因为腿伤需要休息所以回到状态需要一点时间。`);
                era.println();
                hook.args = -1;
            } else {
                await era.printAndWait(
                    `如果能伴随着音乐的节拍，说不定能让飞鹰子好的快一点？`,
                );
                await era.printAndWait('想了一会后，决定还是试试。');
                era.printButton(
                    '「如果心情愉悦的话伤口也会好的快一点，所以去开live吧！」',
                    1,
                );
                await era.input();
                await chara_talk.say_and_wait(
                    `诶，原来还有这种方法吗？飞鹰子会加油的！`,
                );
                if (Math.random() < extra_flag['args'].ratio.fail_again) {
                    await era.printAndWait(
                        `像以往一样，趁绿色恶魔被你缠住的时候，飞鹰子的例行演出又开始了。`,
                    );
                    await chara_talk.say_and_wait(
                        `各位！看这边！飞鹰子的live现在就要开始了！`,
                    );
                    await era.printAndWait(
                        `在这边不停伴随着节奏的跳着舞蹈的飞鹰子，像是根本没有受过伤一样。`,
                    );
                    await chara_talk.say_and_wait(`太好了！总算吸引到几个粉丝了！`, true);
                    await era.printAndWait(
                        `因为大脑在思考的时候反应慢了一拍，不小心摔了一跤。`,
                    );
                    await chara_talk.say_and_wait(`呜，飞鹰子没关系的⭐`);
                    await era.printAndWait(
                        `等到你勉强摆脱手纲小姐时，飞鹰子的伤口好像恶化了。`,
                    );
                    hook.args = -1;
                } else {
                    await era.printAndWait(`演出的效果意外的好`);
                    await chara_talk.say_and_wait('大家！这边！都看过来！');
                    await era.printAndWait(
                        `以平地作为舞台，取出随身携带的麦克风，飞鹰子的小小舞台就出现了。`,
                    );
                    await chara_talk.say_and_wait(`♪`);
                    await era.printAndWait(
                        `慢慢的，从无人问津，到稀疏的人群，再到人们纷纷聚集在一起。`,
                    );
                    await era.printAndWait(`河岸边的草地上聚满了人群。`);
                    era.printButton('「看来效果很好啊」', 1);
                    await era.input();
                    await era.printAndWait(
                        `你也站在不时喝彩的人群之中，静静看着飞鹰子的演出。`,
                    );
                    await era.printAndWait(
                        `演出作战看上去大获成功，${chara_talk.name}的伤口也恢复得更快了.`,
                    );
                    hook.args = 0;
                }
            }
        } else {
            await print_event_name('保重身体！', chara_talk);
            await chara_talk.say_and_wait(`......训练员先生`);
            await era.printAndWait(`飞鹰子在训练的时候受到了很严重的伤`);
            await era.printAndWait(
                `校医「你是她的训练员吧，为什么她这么疲惫还要冒这份风险？」`,
            );
            await era.printAndWait(`无言以对，玩家名只能默默地听着她的训斥。`);
            await chara_talk.say_and_wait(`不对，是我自己要求的。`);
            await era.printAndWait(`校医「你不知道受伤的话有可能会产生后遗症吗？」`);
            await era.printAndWait(
                `训练员手册上也记载了因为平时训练受伤留下后遗症的缘故不得不退役的案例。`,
            );
            await era.printAndWait(`尽管如此。`);
            await me.say_and_wait(`抱歉，下次我会注意的。`);
            await era.printAndWait(`校医「不要打扰病人休息」`);
            await era.printAndWait(
                `校医叹了口气，顺手关上了门，医务室里沉默的二人对视着。`,
            );
            era.printButton('「没关系的，飞鹰子就这样好好休息吧」', 1);
            era.printButton('「......」', 2);
            hook.arg = (await era.input()) === 1;
            if (hook.arg) {
                await chara_talk.say_and_wait(`......嗯，飞鹰子一定很快会好起来的。`);
                await chara_talk.say_and_wait(
                    `飞鹰子有的时候也过于急躁了，所以不全是训练员先生的错哦。`,
                );
                era.printButton('「谢谢你，飞鹰子」', 1);
                await era.input();
                await chara_talk.say_and_wait(
                    `嗯，训练员先生，可以把放在训练室中的杂志帮我拿过来吗？`,
                );
                await me.say_and_wait(`好的，飞鹰子也要好好休息。`);
                await chara_talk.say_and_wait(`嗯。`);
                await era.printAndWait(`轻轻关上了医务室的门，飞鹰子似乎已经睡下了。`);
                hook.arg = 0;
            } else {
                if (Math.random() < extra_flag['args'].ratio.fail_again) {
                    await chara_talk.say_and_wait(`训练员先生。`);
                    await era.printAndWait(`飞鹰子抢在你之前打破了沉默。`);
                    await chara_talk.say_and_wait(`可以握着我的手吗？`);
                    await era.printAndWait(`飞鹰子的目光从天花板慢慢移向了窗外。`);
                    await chara_talk.say_and_wait(`与朋友们分开，也是在这个夕阳的时候。`);
                    await chara_talk.say_and_wait('好痛！');
                    await me.say_and_wait(`飞鹰子！`);
                    await chara_talk.say_and_wait(`训练员先生，可以再稍微靠近一点吗？`);
                    await chara_talk.say_and_wait(
                        `已经与那么多朋友分开了，我不想在失去训练员先生了。`,
                    );
                    await era.printAndWait(
                        `紧紧抱住了哽咽着的飞鹰子，（玩家名）看着巨大的金黄色物体慢慢被地平线吞没。`,
                    );
                    await era.printAndWait(`漫长的黑夜要到了。`);
                    hook.arg = -1;
                } else {
                    await chara_talk.say_and_wait(`训练员先生`);
                    await era.printAndWait(`飞鹰子呼唤着你的名字。`);
                    await era.printAndWait(`不知为何，你紧紧握住了她的手。`);
                    await chara_talk.say_and_wait(`我能感受到，训练员先生那温暖的大手`);
                    await chara_talk.say_and_wait(`感觉稍微好点了。`);
                    await me.say_and_wait(`我就在这里，哪里也不会去！`);
                    await chara_talk.say_and_wait(`训练员先生，真温柔呢。`);
                    await era.printAndWait(`飞鹰子将大手放到了自己的脸庞`);
                    await chara_talk.say_and_wait(`就这样，好好休息一会吧。`);
                    await era.printAndWait(`没过多久，飞鹰子就这样睡着了。`);
                    await era.printAndWait(`悄悄关上房门后，你离开了医务室。`);
                    await era.printAndWait(`飞鹰子很快就恢复了活力。`);
                    hook.arg = 0;
                }
            }
        }
    };

handlers[event_hooks.out_start] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.out_start, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.idol_ice_cream === 1) {
        event_marks.idol_ice_cream++;
    }
    await print_event_name('飞鹰子·约会大作战', chara_talk);
    await chara_talk.say_and_wait(`训练员先生！`);
    await era.printAndWait(`还没进门就听见了飞鹰子充满活力的声音。`);
    await me.say_and_wait(`这就是所谓的未闻其名先闻其声吗？`, true);
    await era.printAndWait(`当然不是。`);
    await chara_talk.say_and_wait(
        `飞鹰子打算推荐给支持自己的粉丝们性价比高的一种甜品，训练员先生知道哪里有吗？`,
    );
    await era.printAndWait(`说起来偶像也要给一直支持自己的粉丝表达感谢之情。`);
    await me.say_and_wait(`甜品的话，去附近的商场看看吧？`);
    await me.say_and_wait(`或者在马推上看下生活博主推荐的店铺？`);
    await era.printAndWait(`飞鹰子也陷入了思考之中`);
    await chara_talk.say_and_wait(`嗯......飞鹰子还是觉得去看看才能做出决定吧？`);
    await chara_talk.say_and_wait(`所以训练员先生......`);
    await era.printAndWait(`偷偷观察着你的反应的飞鹰子。`);
    await chara_talk.say_and_wait(`......还是飞鹰子一个人过去吧⭐`);
    await me.say_and_wait(`啊好。`);
    await era.printAndWait(`故意装作没听清的样子。`);
    await chara_talk.say_and_wait(`欸？！怎么可以这样！`);
    await era.printAndWait(
        `因为搬起石头砸自己的脚而气急败坏的飞鹰子终于暴露出了真实想法。`,
    );
    await me.say_and_wait(`抱歉刚才没听清，可以再说一遍吗？`);
    await chara_talk.say_and_wait(`飞鹰子想邀请训练员先生一起出发。`);
    await me.say_and_wait(`既然是可爱飞鹰子的请求当然可以了。`);
    await chara_talk.say_and_wait(`太好了⭐`);
    await era.printAndWait(`之后两人一起品尝了附近的甜品店。`);
    return true;
};

handlers[event_hooks.office_study] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.office_study, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.deadline_fight === 1) {
        event_marks.deadline_fight++;
    }
    await print_event_name('期末大作战！', chara_talk);
    await chara_talk.say_and_wait(`呜———好难`);
    await era.printAndWait(`看着手里的挂科的试卷，飞鹰子陷入了沉默中。`);
    await chara_talk.say_and_wait(
        `再这样下去的话，不止是课后留级这样子了，搞不好就要挂科了。`,
    );
    await era.printAndWait(`飞鹰子开始急得团团转，然后突然想起了（玩家名）。`);
    await era.printAndWait(`不如去问问训练员先生吧。`);
    era.drawLine({content: '训练室'});
    await era.printAndWait(`看着眼前的分数，你也和飞鹰子一样陷入了沉默之中。`);
    await me.say_and_wait(`......飞鹰子？`);
    await era.printAndWait(`看着低着头不好意思的飞鹰子，你长叹了一口气。`);
    await me.say_and_wait(`那么，一起来分析一下错误的问题吧`);
    await era.printAndWait(
        `让飞鹰子坐在了你的位置，你另外搬了一把椅子坐在了她的旁边。`,
    );
    await me.say_and_wait(
        `要想及格的话，重要的不是细枝末节的东西，而是理解作为"树干"部分的思维或者思路`,
    );
    await me.say_and_wait(
        `对于哪一项需要优先，哪一项回头再说也可以需要冷静的做出判断。`,
    );
    await me.say_and_wait(`那么，对于这一部分......`);
    await era.printAndWait(`一整个下午，你们都在与错误进行斗争。`);
    era.drawLine({content: '黄昏之后'});
    await me.say_and_wait(`差不多就是这样了......飞鹰子？`);
    await chara_talk.say_and_wait(`...啊，是。`);
    await era.printAndWait(`不知从何时开始，飞鹰子的思绪似乎飘到了其他地方。`);
    await me.say_and_wait(`......算了，今天的话就到这里了。`);
    await era.printAndWait(
        `长叹一口气后，你将飞鹰子的试卷收到了自己的文件夹中。`,
    );
    await me.say_and_wait(`接下来的话，在补考及格之前，禁止你开演唱会。`);
    await chara_talk.say_and_wait(`欸？`);
    await chara_talk.say_and_wait(`训练员先生不要啊！！！`);
    await era.printAndWait(`飞鹰子的悲鸣响彻了整个教学楼。`);
    return true;
};

handlers[event_hooks.out_river] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.out_river, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.loneliness_girl === 1) {
        event_marks.loneliness_girl++;
    }
    await print_event_name(`河岸边的偶像`, chara_talk);
    await era.printAndWait(`岸边的草地上`);
    await chara_talk.say_and_wait(`训练员先生，这里的空气真清新呢`);
    await chara_talk.say_and_wait(
        `岸边的草地上，清新的空气似乎很适合人们放松呢。`,
    );
    await chara_talk.say_and_wait(
        `！对啊，在这种地方开演唱会的话发到马推上，粉丝数也会一口气增加的吧。`,
    );
    await chara_talk.say_and_wait(`训练员先生又是怎么想的呢？`);
    await era.printAndWait(`看着飞鹰子深呼吸后对着未来憧憬的样子`);
    await me.say_and_wait(`是啊，呼吸着清新的空气，粉丝们也会很高兴吧。`);
    await chara_talk.say_and_wait(`......训练员先生也高兴吗？`);
    await me.say_and_wait(`？是啊。`);
    await chara_talk.say_and_wait(`飞鹰子也很高兴呦⭐`);
    await era.printAndWait(
        `与捂着嘴偷偷笑着的飞鹰子漫步在河岸边，感受着从水面吹向陆地的微风，生长在水陆交界之处的种种植物也跟着微风的吹拂摇摆着身体。`,
    );
    await era.printAndWait(`植物们也期待着风与水的浸润。`);
    await chara_talk.say_and_wait(`训练员先生，快看这边！`);
    await era.printAndWait(`发现了新鲜事物的飞鹰子跑向了河边，然后蹲了下来。`);
    await era.printAndWait(
        `紧跟着飞鹰子来到岸边，你也随着飞鹰子的视线向那边看去。`,
    );
    await era.printAndWait(`靠近着河边顽强生长的白色小花丛，正随风摇曳着。`);
    await chara_talk.say_and_wait(`这花真像飞鹰子呢。`);
    await era.printAndWait(
        `想要轻轻触碰，却担心自己过大的力量将花朵折下，只能静静地看着被白色花瓣保护着的黄色花芯。`,
    );
    era.printButton(`好像叫做洋甘菊`, 1);
    await era.input();
    await me.say_and_wait(`古埃及人称呼她为月亮的药草，具有清凉安神的效果。`);
    await me.say_and_wait(`花语的话是......`);
    await era.printAndWait(`悄悄打开手机输入洋甘菊`);
    await me.say_and_wait(`苦难中的力量。`);
    await chara_talk.say_and_wait(`飞鹰子希望也能像洋甘菊一样绽放。`);
    await era.printAndWait(`看着时不时被河水冲刷的湿润陆地。`);
    await chara_talk.say_and_wait(`将根深深扎进泥土之中，将绽放的花朵献给大家。`);
    await chara_talk.say_and_wait(`所以，飞鹰子也要努力才行呢。`);
    await era.printAndWait(
        `伸出手打算抚摸着飞鹰子的脑袋，却被后者巧妙的躲开了。`,
    );
    await chara_talk.say_and_wait(`如果想抓住逃走的飞鹰子的话，那就来追赶我吧！`);
    await me.say_and_wait(`飞鹰子我要抓到你！`);
    await chara_talk.say_and_wait(`训练员先生永远抓不到飞鹰子的⭐`);
    await era.printAndWait(
        `喧闹的草地逐渐归于宁静，只有轻轻摇曳着的花朵发出的声音在风的耳边缓缓流淌着。`,
    );
    return true;
};

handlers[event_hooks.out_station] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.out_station, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        chara4_talk = get_chara_talk(4),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.shine_girl === 1) {
        event_marks.shine_girl++;
    }
    await print_event_name(`车站宣传`, chara_talk);
    await era.printAndWait(`休息日的某一天`);
    await chara_talk.say_and_wait(`这里是目标为顶级偶像的醒目飞鹰！`);
    await chara_talk.say_and_wait(`希望大家多多支持作为偶像的飞鹰子♪`);
    await era.printAndWait(`休息日的时候（玩家名）被醒目飞鹰拉着来到了车站`);
    await me.say_and_wait(`瞄准了车站人流量大进行粉丝宣传吗？`);
    await me.say_and_wait(`如果把这种热情放在学习上的话就好了。`);
    await era.printAndWait(`然而大多数人都是奇怪的看了一眼之后就离开了。`);
    era.drawLine({content: '到了中午'});
    await chara_talk.say_and_wait(`呜~到了中午没有新的粉丝增加啊。`);
    await era.printAndWait(
        `不如说大家都有自己的事情要去做，能无忧无虑作为粉丝的也只有学生了。`,
    );
    await era.printAndWait(`而且`);
    await chara4_talk.say_and_wait(`这不是飞鹰子吗？`);
    await era.printAndWait(`意外的人出现了。`);
    await chara_talk.say_and_wait(`欸？丸善前辈为什么来这边了？`);
    await era.printAndWait(`穿着特雷森制服的丸善斯基带着充裕的笑容看着你们。`);
    if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('flag:当前回合数') - era.get('cflag:4:育成回合计时') >= 47
    ) {
        await chara4_talk.say_and_wait(`到处找不到训练员君，原来在这里啊？`);
        await era.printAndWait(`你当然记得这位外表亲和的姐姐大人`);
        await chara4_talk.say_and_wait(`一段时间看不到训练员君，姐姐我好伤心啊？`);
        era.printButton(`要一起来吗？`, 1);
        await era.input();
        await chara4_talk.say_and_wait(
            `帮助可爱的后辈是我的荣幸哦，那么我应该做什么呢？`,
        );
        await era.printAndWait(
            `既享受着奔跑的快乐，也为了能让更多的马娘追逐着自己的背影，`,
        );
    }
    await chara_talk.say_and_wait(`飞鹰子的话，正在车站进行粉丝劝诱呢⭐`);
    await chara_talk.say_and_wait(`所以也希望丸善学姐也能帮我做下宣传。`);
    await chara4_talk.say_and_wait(
        `这么可爱的后辈姐姐我当然要帮忙了，就让你们看下姐姐我的宣传方式吧`,
    );
    await era.printAndWait(`等到下一班列车到达时`);
    await chara4_talk.say_and_wait(
        `哈喽！各位帅锅美眉看过来，这边这么可爱的菇凉不打算抢个沙发吗？`,
    );
    await chara4_talk.say_and_wait(`亚历山大也没关系，毕竟神马都是浮云呦~`);
    await chara_talk.say_and_wait(`......好怀念的用法啊。`);
    await era.printAndWait(
        `（玩家名）想到了自己初中时上网冲浪时当时人们这么互相称呼的环境。`,
    );
    await era.printAndWait(
        `此举一出，所有人都加快了自己的脚步，不少人还双手掩面像是被雷到了一样。`,
    );
    await chara4_talk.say_and_wait(`唔~连个抢沙发的人都没有啊`);
    await era.printAndWait(`看着一脸遗憾的丸善斯基，飞鹰子向前安慰到。`);
    await chara_talk.say_and_wait(`没，没关系的，已经帮了飞鹰子大忙了。`);
    await chara_talk.say_and_wait(`总之，非常感谢。`);
    await chara4_talk.say_and_wait(
        `既然这样的话......飞鹰子我也能做你的粉丝吗？`,
    );
    await chara_talk.say_and_wait(`欸？丸善学姐是我的粉丝...非常感谢！`);
    await era.printAndWait(`看着收获了粉丝的飞鹰子，你也觉得很开心。`);
    if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('flag:当前回合数') - era.get('cflag:4:育成回合计时') >= 96
    ) {
        await chara4_talk.say_and_wait(`飞鹰子，可以拜托你一件事吗？`);
        await era.printAndWait(
            `带着充裕表情的丸善斯基看着你和醒目飞鹰之间的互动。`,
        );
        await chara_talk.say_and_wait(`飞鹰子能帮上忙的话也很高兴！`);
        await chara4_talk.say_and_wait(
            `太好了！可以去附近的商场帮我买一份最近流行的可可芭蕾吗？(巧克力与冰淇淋混合在一起的一种饮料)`,
        );
        await chara_talk.say_and_wait(`当然可以，不过飞鹰子还在劝诱粉丝呢。`);
        await chara4_talk.say_and_wait(
            `我也会帮忙的呦？所以拜托了飞鹰子，请听听看刚刚作为飞鹰子粉丝的请求吧！`,
        );
        await chara_talk.say_and_wait(
            `嗯——好！即热是丸善学姐的要求的话，飞鹰子会努力的！`,
        );
        await chara_talk.say_and_wait(`那么，飞鹰子出发了！`);
        await era.printAndWait(`看着逐渐远去的飞鹰子，车站只剩下了你和丸善斯基。`);
        await chara4_talk.say_and_wait(`既然没事的话，就让我多占据一下训练员君吧♪`);
        await era.printAndWait(
            `忍不住将你抱在怀里温柔抚摸的丸善斯基很开心的样子。`,
        );
    }
    return true;
};

handlers[event_hooks.out_shopping] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.out_shopping, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.curiosity_girl === 1) {
        event_marks.curiosity_girl++;
    }
    await print_event_name(`黄金菊！`, chara_talk);
    await era.printAndWait(`休息日的某一天`);
    await chara_talk.say_and_wait(`训练员先生,可以过来一下吗？`);
    await era.printAndWait(`飞鹰子对着放在训练室的等身镜打扮着自己。`);
    await chara_talk.say_and_wait(
        `那个，飞鹰子想试试看将头发放下来后梳马尾将蝴蝶结固定在头发上。`,
    );
    await era.printAndWait(`似乎因为自己看不到头发后面，所以想借助你的手`);
    await me.say_and_wait(`——这样吗？`);
    await chara_talk.say_and_wait(`嗯——再上去一点。`);
    await era.printAndWait(`小心翼翼的将蝴蝶夹子放到稍高一点的位置。`);
    await me.say_and_wait(`——这样的话可以吗？`);
    await chara_talk.say_and_wait(`嗯——差不多了。`);
    await era.printAndWait(`看着换了发型的飞鹰子，感觉和之前不太一样了。`);
    await chara_talk.say_and_wait(`不过总觉得哪里还差了一点。`);
    await era.printAndWait(`然后又开始有些在意了。`);
    await chara_talk.say_and_wait(
        `训练员先生！接下来的话可以和我一起去趟商店街吗？`,
    );
    await chara_talk.say_and_wait(`我想去买一点小装饰品。`);
    await era.printAndWait(`想要看看自己的魅力最终能到那种极限吗？`);
    await me.say_and_wait(`好！`);
    era.drawLine({content: '商店街'});
    await era.printAndWait(
        `因为是周末的缘故，商店街来来往往的人群也比工作日出不少`,
    );
    await chara_talk.say_and_wait(`那么去这家店看一下吧！`);
    await era.printAndWait(
        `似乎是最近冲上热搜的网红店，前来打量小饰品的情侣的比例意外很高。`,
    );
    await me.say_and_wait(`好多情侣啊。`);
    await chara_talk.say_and_wait(
        `飞鹰子和训练员先生混在里面一点违和感都没有呢。`,
    );
    await era.printAndWait(
        `拉着你手臂的飞鹰子转了一圈后，在头绳那边停下了脚步。`,
    );
    await chara_talk.say_and_wait(`都很可爱啊,不过哪种比较好呢？`);
    await era.printAndWait(`飞鹰子似乎很喜欢这些手绳。`);
    await me.say_and_wait(`既然这么纠结的话心仪的全部买走吧？`);
    await era.printAndWait(`最近刚发了工资的你说话就是有底气（大概？）。`);
    await chara_talk.say_and_wait(`真的可以吗？训练员先生真好呢！`);
    await chara_talk.say_and_wait(`不过，训练员先生喜欢哪种呢？`);
    era.printButton(`系上了绿色蝴蝶结的白色头绳`, 1);
    era.printButton(`白色小兔子装饰的绿色头绳`, 2);
    era.printButton(`白色玫瑰装饰的黑色头绳`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
        await chara_talk.say_and_wait(`嗯——飞鹰子也喜欢这种清新的感觉呢。`);
        await chara_talk.say_and_wait(`像是在绿色田野漫步的样子充满活力⭐`);
    } else if (ret1 === 2) {
        await chara_talk.say_and_wait(`可爱风吗？不如说飞鹰子也是这么想的！`);
        await chara_talk.say_and_wait(`据说小兔子也有象征渴望爱情的隐语呢。`);
        await chara_talk.say_and_wait(`飞鹰子什么都没说哦⭐。`);
    } else {
        await chara_talk.say_and_wait(`吼吼吼！飞鹰子也是小恶魔系的偶像呢！`);
        await era.printAndWait(`虽然怎么看都不太像`);
        await chara_talk.say_and_wait(`既然训练员挑选的话，那我就认真考虑下吧。`);
        await era.printAndWait(`轻轻敲了下她的小脑袋，爆发出了悲鸣。`);
        await chara_talk.say_and_wait(`对不起，下次不会这么说话了！`);
    }
    await era.printAndWait(
        `将挑选完的手绳放入了购物袋之中，你们继续享受着购物的乐趣。`,
    );
    return true;
};

handlers[event_hooks.school_rooftop] = async (
    hook,
    extra_flag,
    event_object,
) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.school_rooftop, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.rooftop_idol === 1) {
        event_marks.rooftop_idol++;
    }
    await print_event_name(`天台上的偶像`, chara_talk);
    await era.printAndWait(`放学后的某一天`);
    await era.printAndWait(
        `整理完醒目飞鹰最近的数据后，如释重负的你终于长长的呼了一口气。`,
    );
    era.printButton(`接下来的话去天台走走吧`, 1);
    await era.input();
    await era.printAndWait(`不知何时你也养成了对着镜子自言自语的习惯。`);
    await me.say_and_wait(`所谓的两个人在一起迟早会继承对方的习惯吗？`, true);
    await era.printAndWait(
        `虽然想尽力将这个念头埋入情感的最深处，但它却像是和你来劲了一样开始不断上浮。`,
    );
    await era.printAndWait(`最后的结论是——`);
    await me.say_and_wait(`其实我喜欢作为飞鹰子的醒目飞鹰。`, true);
    await era.printAndWait(
        `乐观，积极向上，一直盯着目标不断前行的她将乐观的希望带给了你与粉丝们。`,
    );
    await me.say_and_wait(`这样的马娘真的存在吗？`, true);
    await era.printAndWait(`你的内心一直在怀疑这一点。`);
    await era.printAndWait(
        `想要一直保持作为偶像这一身份所遭受的痛苦与精神上的折磨。`,
    );
    await me.say_and_wait(`她只是不愿意将消极的一面展示给我看吧`, true);
    await era.printAndWait(`不知不觉间走上了天台。`);
    await era.printAndWait(
        `夕阳缓缓地落入地平线，凉爽的气息从四周传递过来，温度又降了一个台阶。`,
    );
    await me.say_and_wait(`差不多也该回去了吧`);
    await era.printAndWait(`正准备回去的时候，意外看到了熟悉的身影。`);
    await chara_talk.say_and_wait(`举头能望见，伸手是虚空。`);
    await chara_talk.say_and_wait(`好似月中桂，高居碧海中。`);
    await era.printAndWait(
        `忧郁的歌声被风托到了身边，忧郁的眼神看着夕阳远去的方向。`,
    );
    await me.say_and_wait(`飞鹰子？`, true);
    await era.printAndWait(`凭着对声音的好奇，循着源头看去。`);
    await era.printAndWait(
        `被风吹拂的醒目飞鹰任凭长发飘逸，忧郁的目光望着虚无。`,
    );
    await era.printAndWait(`正想向其搭话的时候，但还是愣在原地。`);
    await era.printAndWait(`醒目飞鹰终于还是离开了天台。`);
    return true;
};

handlers[event_hooks.school_atrium] = async (
    hook,
    extra_flag,
    event_object,
) => {
    if (era.get('flag:当前互动角色') !== 46) {
        add_event(event_hooks.school_atrium, event_object);
        return;
    }
    const chara_talk = new CharaTalk(46),
        me = get_chara_talk(0),
        event_marks = new FaEventMarks();
    if (event_marks.petrichor_girl === 1) {
        event_marks.petrichor_girl++;
    }
    await print_event_name(`带着青草气息的马娘们`, chara_talk);
    await era.printAndWait(`今天是校园开放日。`);
    await chara_talk.say_and_wait(
        `这里是醒目飞鹰姐姐，接下来的话就让我来带领大家参观特雷森吧♪`,
    );
    await era.printAndWait(`附近小学的小马娘们来到特雷森学院进行参观。`);
    era.printButton(`说不定之后这些小马娘们其中也有人会成为我的担当马娘呢`, 1);
    await era.input();
    await era.printAndWait(`小马娘A「这里就是特雷森吗？」`);
    await era.printAndWait(`小马娘B「哇！好大的学院啊！」`);
    await era.printAndWait(
        `小马娘C「醒目飞鹰姐姐可以讲一下特雷森学院的历史吗？」`,
    );
    await chara_talk.say_and_wait(
        `作为偶像的飞鹰子当然会给粉丝们耐心的讲解的♪首先是.....`,
    );
    await era.printAndWait(`充满活力的醒目飞鹰耐心讲解着与特雷森相关的事情。`);
    await era.printAndWait(`小马娘A「那边的人影是？」`);
    await era.printAndWait(`簇拥在醒目飞鹰周围蹦蹦跳跳的小马娘发现了你。`);
    await chara_talk.say_and_wait(
        `即使是特雷森学院的马娘们，想要取得G1也是很辛苦的一件事呢...欸？等一下`,
    );
    await era.printAndWait(`小马娘A「那边的训练员看起来很帅气呢？」`);
    await era.printAndWait(
        `刚还围绕在醒目飞鹰身边的马娘们呼啦一下全部围到了你身边。`,
    );
    await chara_talk.say_and_wait(`训，训练员先生！`);
    await era.printAndWait(
        `小马娘B「等我进入特雷森的话，可以做我的钻数训练员吗？」`,
    );
    await era.printAndWait(`小马娘A「不要！明明应该是我先看到他的！」`);
    await era.printAndWait(`小马娘B「是我先提出来的，所以应该跟我一起！」`);
    await era.printAndWait(`小马娘们像是抢心爱的玩具一样拉着你的双手`);
    era.printButton(`好，好痛啊！`, 1);
    await era.input();
    await era.printAndWait(`众所周知马娘的力气是成年人类的三倍。`);
    await era.printAndWait(
        `为了避免控制不住自己力量造成危险的发生，作为马娘有一门必修课。`,
    );
    await era.printAndWait(`就是学会控制自己的力量。`);
    await era.printAndWait(
        `对于大多数马娘来说初中时就开始有意识控制自己的力量。`,
    );
    await era.printAndWait(`但对于连心智都尚处在发育阶段的小马娘们来说。`);
    await era.printAndWait(`你像是被两个肌肉壮汉当成玩具一样拽来拽去。`);
    await chara_talk.say_and_wait(`训练员先生！`);
    await era.printAndWait(`所幸，醒目飞鹰及时赶到了。`);
    await chara_talk.say_and_wait(`你们两个给我说清楚怎么回事！`);
    await era.printAndWait(
        `两名小马娘突然被一股巨大的力量提到了空中，想要查看发生了什么的时候就迎来了醒目飞鹰像修罗一样的表情。`,
    );
    await era.printAndWait(`小马娘A「唔啊啊啊！」`);
    await era.printAndWait(`小马娘B「不要吃我啊！」`);
    await era.printAndWait(
        `刚刚还在争吵的两人现在又蜷缩在了一起瑟瑟发抖地听着醒目飞鹰的训斥。`,
    );
    await chara_talk.say_and_wait(`训练员先生！你没事吧？`);
    await era.printAndWait(`说教结束之后，醒目飞鹰担心的向你询问。`);
    era.printButton(`没关系，不过是小朋友们淘气了一点。`, 1);
    await era.input();
    await era.printAndWait(`忍着剧痛来到了小朋友旁边。`);
    await era.printAndWait(`小马娘A「呜——」`);
    await era.printAndWait(`小马娘B「嗯？」`);
    era.printButton(
        `人类比起马娘来说是很脆弱的生物，所以下次一定要控制住自己的力量才行。`,
        1,
    );
    await era.input();
    era.printButton(
        `如果可以的话，希望在特雷森的时候也能看到你们活泼的样子。`,
        1,
    );
    await era.input();
    await era.printAndWait(`小马娘A「嗯嗯。」`);
    await era.printAndWait(`小马娘B「我们知道了。」`);
    await era.printAndWait(`带队老师这时才姗姗来迟，在了解经过之后向你们道歉。`);
    era.drawLine({content: '结束后'});
    await chara_talk.say_and_wait(
        `比起自己更关心其他人的感受，这样的话很容易受伤的！`,
    );
    await era.printAndWait(`乖乖听着飞鹰子说教的你活动着双手。`);
    await me.say_and_wait(`飞鹰子原来这么关心我吗？`);
    await chara_talk.say_and_wait(`作为偶像当然要关心粉丝才行呢！`);
    await chara_talk.say_and_wait(`更别说你是我的...`);
    await era.printAndWait(`像是意识到了什么一样，飞鹰子的脸渐渐红了起来。`);
    await chara_talk.say_and_wait(`呀啊！训练员先生欺负人！`);
    await era.printAndWait(`在打闹之中，今天的日常结束了。`);
    return true;
};

/**
 * 醒目飞鹰的育成事件
 *
 * @author 黑奴一号
 *
 * @param {HookArg} hook;
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
    if (!handlers[hook.hook]) {
        throw new Error('unsupported stage!');
    }
    return await handlers[hook.hook](hook, extra_flag, event_object);
};
