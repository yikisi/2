const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { add_event } = require('#/event/queue');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers[95 + 10] = async () => {
    const me = get_chara_talk(0),
      falcon = get_chara_talk(46);
    await print_event_name('目眩感', falcon);
    await era.printAndWait(`训练室\n`);
    await era.printAndWait(`提不起劲。`);
    await era.printAndWait(
      `或许是因为${falcon.name}决绝的态度，不知道应该从什么方面入手。`,
    );
    await era.printAndWait(
      `是不是被${falcon.name}讨厌了？想要旁观${falcon.name}的演唱会都被${falcon.name}找了各种理由婉拒。`,
    );
    await era.printAndWait(`但是——`);
    await era.printAndWait(`因为被拒绝而更加恐慌。`);
    await me.say_and_wait(`可恶！`);
    await era.printAndWait(`借着用力捶打桌面发泄心中的情绪。`);
    await era.printAndWait(
      `想要告诉${falcon.sex}，告诉${falcon.sex}作为偶像追求自己的幸福这件事是没有任何问题的。`,
    );
    era.drawLine();
    falcon.print(`谢谢大家！`);
    falcon.print(`例行的2小时演唱会结束后，又一口气连唱了三首。`);
    falcon.print(`只要稍作休息，就能接着一口气连唱3小时。`);
    falcon.print(`但是，怎么也提不起干劲。`);
    falcon.print(`如果被粉丝们看到这副提不起干劲的状态。`);
    falcon.print(`恐怕连自己也无法原谅自己吧。`);
    falcon.print(`只要向训练员${falcon.get_uma_sex_title()}倾诉烦恼的话——`);
    falcon.print(`疲惫的身体传出了软弱的话语。`);
    await falcon.say_and_wait(
      `飞鹰子不能再让亲爱的训练员${falcon.get_uma_sex_title()}受到危险了。`,
      true,
    );
    falcon.print(
      `捂住受伤的部位，矗立在血泊之中的训练员${falcon.get_uma_sex_title()}。`,
    );
    falcon.print(`不行，不能再继续想下去了。`);
    falcon.print(
      `${falcon.name}作为${falcon.get_uma_sex_title()}偶像已经失格。`,
    );
    await era.printAndWait(`但是——`);
    falcon.print(
      `将心中的疑问强行压下，作为完美的${falcon.get_uma_sex_title()}偶像不能有任何瑕疵。`,
    );
    await falcon.say_and_wait(`飞鹰子加油！`);
    await era.printAndWait(
      `重新为自己打气，作为${falcon.get_uma_sex_title()}偶像的${falcon.name}从后台回到了舞台之上。`,
    );
  };
  handlers[95 + 17] = async () => {
    const me = get_chara_talk(0),
      falcon = get_chara_talk(46);
    const callname = sys_get_callname(46, 0);
    await print_event_name('倘若泪水能回到眼眶', falcon);
    await era.printAndWait(
      `打定主意后，${callname}便强行将${falcon.name}拉了过去。`,
    );
    await me.say_and_wait(
      `抱歉，虽然这样非常失礼，不过有什么能改变的话，恐怕也只有这么做了。`,
    );
    await era.printAndWait(
      `不容分说强行拉过${falcon.sex}的手腕，带着${falcon.sex}向着目标地点前进。`,
    );
    await era.printAndWait(
      `虽然一开始受到惊吓而猛然加大力度，但骤然之间力度突然就变小了。`,
    );
    await era.printAndWait(`${callname}的内心已经被即将实现的美好憧憬填满。`);
    await era.printAndWait(
      `想要告诉${falcon.sex}，告诉${falcon.sex}，作为偶像追求自己的幸福这件事是没有任何问题的。`,
    );
    await era.printAndWait(
      `${callname}与${falcon.name}来到了这片空旷的草坪上。`,
    );
    await era.printAndWait(
      `令人难以忍受的尴尬氛围在${callname}们之间扩散开来。`,
    );
    await era.printAndWait(
      `不用一个人背负着这么沉重的压力，之前的事情仅仅只是一个意外，只需要将注意力。`,
    );
    await era.printAndWait(
      `如果${callname}是${falcon.name}。这种话能说服自己吗？`,
    );
    await me.say_and_wait(`……请多信任我一点。`);
    await era.printAndWait(`飞鹰子已经不堪重负了。`);
    await falcon.say_and_wait(`……诶？`);
    await era.printAndWait(`${falcon.name}的语气之中夹杂着困惑与不解。`);
    await falcon.say_and_wait(
      `我一直都相信训练员${falcon.get_uma_sex_title()}呦？`,
    );
    await era.printAndWait(`不对，${callname}摇了摇头。`);
    await me.say_and_wait(
      `不只是训练员与${falcon.get_uma_sex_title()}之间，也不止粉丝与偶像之间的关系，我希望能被${falcon.name}作为最信任的人对待。`,
    );
    await falcon.say_and_wait(
      `……哪怕是飞鹰子的缘故，训练员${falcon.get_uma_sex_title()}受到了伤害？`,
    );
    era.printButton(`我对${falcon.name}的爱不会因为这种程度受到动摇。`, 1);
    era.printButton(`我对飞鹰子的爱不会因为这种程度受到动摇。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`……诶？`);
      await era.printAndWait(
        `像是听到了不可思议的话语，${falcon.name}的瞳孔也一瞬间放大了。`,
      );
      await falcon.say_and_wait(
        `……真讨厌……最喜欢了……训练员${falcon.get_uma_sex_title()}怎么可以这样……`,
      );
      await falcon.say_and_wait(`这样下去的话，飞鹰子……还怎么……抱歉。`);
      await era.printAndWait(
        `像是错觉一样，随着下颚传来的剧痛，${callname}陷入了黑暗之中。`,
      );
      await era.printAndWait(`就这样，沉沉的睡去。`);
    } else {
      await falcon.say_and_wait(`……飞鹰子吗？`);
      await era.printAndWait(`${falcon.name}的表情变得僵硬。`);
      await falcon.say_and_wait(
        `飞鹰子……果然还是飞鹰子才对呢……训练员${falcon.get_uma_sex_title()}。`,
      );
      await era.printAndWait(`像是相当怀念一样，眯起了眼睛。`);
      await falcon.say_and_wait(
        `呐……看着飞鹰子吧。如果是为了训练员${falcon.get_uma_sex_title()}的话，飞鹰子什么都……`,
      );
      await era.printAndWait(`黯淡火燃的眼神一瞬间陷入死寂之中。`);
      await falcon.say_and_wait(
        `不对！这样的飞鹰子才不是训练员${falcon.get_uma_sex_title()}喜欢的那个包容着所有粉丝们的${falcon.get_uma_sex_title()}偶像！`,
      );
      await era.printAndWait(`罪恶感像针一样刺入了胸口。`);
      await falcon.say_and_wait(
        `舞台之上的飞鹰子是所有粉丝们的，像这样……这样的行为是不可能被允许的。`,
      );
      await falcon.say_and_wait(
        `飞鹰子因为抛弃了作为${falcon.get_uma_sex_title()}偶像的原则，结果训练员${falcon.get_uma_sex_title()}像是破烂的布娃娃一样被随意丢弃在血泊之中`,
      );
      await falcon.say_and_wait(
        `可是，明明已经发誓绝对会将爱平等的分给所有的粉丝，可是……看到训练员${falcon.get_uma_sex_title()}的时候，飞鹰子还是忍不住像倾注更多的爱。`,
      );
      await falcon.say_and_wait(
        `飞鹰子不会将爱全部倾注在训练员${falcon.get_uma_sex_title()}身上，而将爱倾注在训练员${falcon.get_uma_sex_title()}身上的时候，飞鹰子也就不是飞鹰子了。`,
      );
      await era.printAndWait(
        `比起单纯的失败，在最大的努力下遇到的两难抉择，更令人感到悲哀。`,
      );
      await falcon.say_and_wait(`……如果是这样的话。`);
      await era.printAndWait(
        `像是错觉一样，随着下颚传来的剧痛，${callname}陷入了黑暗之中。`,
      );
      await era.printAndWait(`就这样，沉沉的睡去。`);
    }
    era.drawLine();
    await era.printAndWait(`${callname}又一次站在了这片草地上。`);
    await era.printAndWait(
      `废墟夹缝间的草地，从远处天空飘来的积雨云，那段令人怀念的美好时光。`,
    );
    await era.printAndWait(`以及旁边的${falcon.teen_sex_title}。`);
    await era.printAndWait(`是啊，就是这种地方，才适合好好交流。`);
    await me.say_and_wait(`飞鹰子——`);
    await era.printAndWait(`飞鹰子没有任何回应。`);
    await me.say_and_wait(`飞鹰子？`);
    await era.printAndWait(
      `${callname}试探性的触碰着身旁的${falcon.teen_sex_title}。`,
    );
    await era.printAndWait(`体温正常，从手指传来的肌肤触感也没有区别。`);
    await me.say_and_wait(
      `仔细观察的话，好像有一条细细的银线在控制着${falcon.sex}一样。`,
    );
    await era.printAndWait(`就像是人偶一样。`);
    await me.say_and_wait(`如果顺着银线寻找的话，说不定就能找到操纵者。`);
    await era.printAndWait(`拇指与食指握住这条细线，顺着这条细线的来源——`);
    await era.printAndWait(`一阵剧烈的强光晃得${callname}睁不开眼。`);
    await era.printAndWait(`眼前的草地变成了舞台现场。`);
    await era.printAndWait(
      `自己正站在舞台中央，不，确切的说是${falcon.name}站在舞台中央。`,
    );
    await era.printAndWait(
      `密密麻麻的观众跟随着${callname}所熟悉的歌曲按节拍摇摆着。`,
    );
    await me.say_and_wait(`演唱会吗？但为什么违和感这么重。`);
    await era.printAndWait(`从刚才开始，空气之中就有一缕若有若无的腥味。`);
    await era.printAndWait(`察觉到这究竟代表着什么的时候毛孔瞬间竖立。`);
    await me.say_and_wait(`飞鹰子？`);
    await era.printAndWait(`被称为飞鹰子的人偶转向了${callname}，然后——`);
    await era.printAndWait(`左眼右眼左耳右耳左鼻右鼻口腔之中暗红色的液体`);
    await era.printAndWait(`视觉触觉嗅觉味觉听觉理性感性混杂黏糊糊的一团\n\n`);
    await me.say_and_wait(`哈啊哈啊哈啊。`);
    await era.printAndWait(
      `猛地从噩梦之中惊醒，额头上的汗珠，被汗水打湿的衬衫，无不再提醒刚才的一切不过是场噩梦。`,
    );
    await me.say_and_wait(`刚才的是？`);
    await era.printAndWait(`用力将液体咳出，嘴巴传来了一阵苦涩的腥味。`);
    await era.printAndWait(
      `虽然很想回忆起之前发生了什么，但稍微思考就头疼欲裂。`,
    );
    await era.printAndWait(`只能暂且作罢，转而观察起周围的环境。`);
    await era.printAndWait(
      `承载着自己的沙发，沙发右侧的办公桌，办公桌后方的墙壁上用相框装潢的合照。`,
    );
    await me.say_and_wait(`好像回到了训练室？`);
    await era.printAndWait(
      `记忆消失的前一刻，自己在干什么，晕倒过后又是谁把自己送回来的。`,
    );
    await era.printAndWait(`下意识将手伸进裤子口袋之中确认着手机。`);
    await era.printAndWait(`却碰到了更加软绵绵的东西。`);
    await me.say_and_wait(`这是？`);
    await era.printAndWait(`像是用来固定头发的，经过精心保养的缎带。`);
    await era.printAndWait(`如果飞鹰子逃走了？`);
    await me.say_and_wait(`……原来如此。`);
    await era.printAndWait(`答案已经不言而喻。`);
    await era.printAndWait(`将小心保存的缎带系在手腕上。`);
    await era.printAndWait(`${callname}决定\n`);
    era.printButton(`追赶${falcon.name}`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(`不知已经过去了多久，商业街、百货商场、河边草地。`);
    await era.printAndWait(
      `即使是向亲近的粉丝与好友询问，得到的答案都是否定。`,
    );
    await me.say_and_wait(`哈啊……哈啊……哈啊……`);
    await era.printAndWait(
      `就这么放弃的话，从飞鹰子身边逃走的话，果然还是不甘心。`,
    );
    await era.printAndWait(`常言道，君子不立于危墙之下。`);
    await era.printAndWait(
      `即使是在东京这样的大都市，在深夜徘徊也是一种极其危险的行为。`,
    );
    await era.printAndWait(`之所以会发生这种事情，自己恐怕也脱不了干系。`);
    await era.printAndWait(
      `但是，这不是责怪自己的理由，因为自己没有自己想象中那么睿智，自己也没想象中的自己那般充满勇气。`,
    );
    await era.printAndWait(
      `自己只有这点智慧，自己只有这种程度的勇气，这已经被不理想的现实所证明。`,
    );
    await era.printAndWait(
      `如果明白这点的话，后悔恐怕是在后悔自己明明充满智慧与勇气却失败了。`,
    );
    await era.printAndWait(`有很大可能走向认知失调的风险。\n`);
    await era.printAndWait(`不知不觉回到了熟悉的草地上。`);
    await era.printAndWait(`正值春夏交替之时，深夜的草地比想象之中更加寒冷。`);
    await era.printAndWait(`${callname}不禁打了一个寒颤。`);
    await era.printAndWait(`正值春夏交替之时，深夜的草地比想象之中更加寒冷。`);
    await era.printAndWait(
      `潮湿的空气混杂着泥土的芳香，月光照耀下的废墟将这片草地团团包围。`,
    );
    await era.printAndWait(`就像是拉起了帷幕一样。`);
    await era.printAndWait(
      `而期待的${falcon.teen_sex_title}——${falcon.name}就在这片草地之上。\n`,
    );
    await era.printAndWait(
      `只要向${falcon.sex}道歉，然后好好交流，一切误会都会化解。`,
    );
    await falcon.say_and_wait(
      `诶?训练员${falcon.get_uma_sex_title()}怎么这么快……`,
    );
    await era.printAndWait(`舞台的主角带着惊讶的表情看着${callname}。`);
    await era.printAndWait(
      `是因为从昨天下午开始就没有吃饭的缘故吗?此刻摇摇欲坠的${falcon.sex}就像是苍白的人偶一样脆弱。`,
    );
    await falcon.say_and_wait(
      `……不，没关系的呦？飞鹰子只是稍微有些烦恼罢了，等到明天，飞鹰子还会回到原来的——`,
    );
    await era.printAndWait(`就这么双腿并拢跌坐在了地上，痛苦的咳嗽着。`);
    era.printButton(`飞鹰子！`, 1);
    await era.input();
    await era.printAndWait(
      `想好的话语全部抛到了脑后，${callname}奔向了${falcon.teen_sex_title}。`,
    );
    await me.say_and_wait(`忍耐一下，这一切马上就会结束。`);
    await era.printAndWait(`${falcon.name}拉住了${callname}。`);
    await era.printAndWait(
      `比起双手所感知的寒冷，那明亮的双眼却吸引了${callname}。`,
    );
    await falcon.say_and_wait(
      `飞鹰子……没有责怪训练员${falcon.get_uma_sex_title()}的意思……只是。`,
    );
    await falcon.say_and_wait(
      `比起飞鹰子的幸福……如果训练员${falcon.get_uma_sex_title()}能更加幸福的话……`,
    );
    await falcon.say_and_wait(
      `抱歉……连粉丝一号的幸福都无法保证，作为偶像真是失格了呢……`,
    );
    await falcon.say_and_wait(`……对不起。`);
    await era.printAndWait(
      `在奋力吐出积压于心头的痛苦后，${falcon.name}直挺挺的倒在了地上。`,
    );
    await era.printAndWait(
      `虽然心中已有猜测，直到${falcon.sex}亲口说出为止自己才能确认，${falcon.name}心底真正希望的是什么。`,
    );
    await era.printAndWait(`对不起，发生了这种事情。`);
    era.printButton(`轻轻背起${falcon.name}`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}将${falcon.teen_sex_title}轻轻背起，确认着与${falcon.sex}一同前行的重量。`,
    );
    await era.printAndWait(`来时的道路比想象中还要漫长。`);
    await era.printAndWait(
      `——但对${falcon.name}来说，或许是人生中最重要的成年礼。`,
    );
  };
  handlers[95 + 23] = async () => {
    const me = get_chara_talk(0),
      falcon = get_chara_talk(46);
    const callname = sys_get_callname(46, 0);
    const love = era.get('love:46');
    const chara4_talk = get_chara_talk(4);
    await print_event_name('闲暇日', falcon);
    await era.printAndWait(
      `正处于春与夏交织的季节，从天空照射下来的光线也多了一份炎热。`,
    );
    await era.printAndWait(
      `但对此刻的${callname}来说，却正好处于不冷不热的舒适区间。`,
    );
    await era.printAndWait(
      `……从事件的波浪之中奋力挣扎，才在告一段落后勉强幸存。`,
    );
    await era.printAndWait(
      `看着在商业街来来往往的行人们，总有一种不切实际的感觉。`,
    );
    await era.printAndWait(
      `他们是不是也是和${callname}一样在磨难之中挣扎后，同样勉力幸存下来的同道呢？`,
    );
    await era.printAndWait(
      `虽然从上次的磨难中存活了下来，要是下一次却失败了呢？`,
    );
    await era.printAndWait(
      `一旦失败的话，一切就全部归零了，没有一丝一毫是能留到那个地方（伊甸）的。`,
    );
    await era.printAndWait(`人们为什么不会害怕呢？`);
    await era.printAndWait(
      `不，因为在死的面前，人们才会意识到生的幸福实际是被赋予的一种特权。`,
    );
    await era.printAndWait(
      `因为我们总有一天会无牵无挂的离开世界，所以才要加倍的珍惜活下来的每一天。`,
    );
    await falcon.say_and_wait(`训练员${falcon.get_uma_sex_title()}久等了♪`);
    await era.printAndWait(
      `换上了便装的${falcon.name}踩着小碎步出现在了${me.actual_name}的眼前。`,
    );
    await era.printAndWait(
      `将头发自然的放下，若不是以其独特的发声，恐怕与人群之中来来往往的小${falcon.get_uma_sex_title()}没有区别。`,
    );
    await era.printAndWait(
      `虽说${callname}打算将保管于${callname}的缎带交还给${falcon.name}，却以「还是放在训练员${falcon.get_uma_sex_title()}这边比较好哦，妈妈也同意了」的理由拒绝了。`,
    );
    await era.printAndWait(
      `……虽说自己不是那种会对小${falcon.get_uma_sex_title()}感兴趣的类型，但看向对方的时候，内心之中却涌现了一种难以言喻的感情。`,
    );
    await falcon.say_and_wait(`⭐`);
    await era.printAndWait(
      `对方丝毫没有意识到${callname}对${falcon.sex}的复杂感情，依然带着那份灿烂的笑容看着${callname}。`,
    );
    await era.printAndWait(
      `因为是节假日的缘故，站在十字路口的${callname}们不时被奇怪的目光所打量着。`,
    );
    await me.say_and_wait(`先去附近的百货大楼逛逛吧！`);
    await era.printAndWait(
      `一直犹豫下去会把宝贵的休息时间全部浪费掉，${callname}便伸手指向了有着巨大广告牌的大厦。`,
    );
    await falcon.say_and_wait(`诶！我记得那边新开了一家很有名气的甜品店！`);
    await falcon.say_and_wait(`事不宜迟，现在就出发吧！`);
    await era.printAndWait(`${falcon.name}拉着${callname}的手走向了甜品店。`);
    era.drawLine();
    await era.printAndWait(
      `从服务员处得到了菜单，看着琳琅满页的甜品照片，${callname}有些犹豫。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}喜欢什么呢？`);
    era.printButton(`水果巴菲感觉就不错！`, 1);
    era.printButton(`有点想尝尝看巧克力口味的新品！`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`飞鹰子也很喜欢那种酸甜口感的巴菲呢。`);
      await falcon.say_and_wait(
        `在口中释放出的寒冷与甜蜜气息，就像是和训练员${falcon.get_uma_sex_title()}第一次见面时的场景呢♪`,
      );
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`飞鹰子也想尝尝看这种口味的巧克力呢♪。`);
      await falcon.say_and_wait(`……⭐`);
      await era.printAndWait(`……不知道为什么${falcon.sex}偷偷捂着嘴笑了起来。`);
      await era.printAndWait(`是思维跳跃到我不知道的维度了吗。`);
    }
    await chara4_talk.say_and_wait(`嗨！下午好！没想到能在这里遇见飞鹰子。`);
    await falcon.say_and_wait(`下午好⭐丸善前辈！`);
    await era.printAndWait(
      `不远处独自一人品尝甜品的丸善斯基向${callname}们搭话。`,
    );
    await chara4_talk.say_and_wait(
      `因为最近美眉我得知了最近泥地比赛很流行的样子。`,
    );
    await chara4_talk.say_and_wait(
      `所以为了追逐着潮流，美眉我便观看了正在泥地赛道上大放异彩的飞鹰子的比赛。`,
    );
    await chara4_talk.say_and_wait(
      `因为之前选择了泥地的后辈们向美眉我请教过跑法的缘故而专门去看过比赛。`,
    );
    await chara4_talk.say_and_wait(
      `不过像飞鹰子这样奋力闪耀的偶像，美眉我总有一种后辈不知什么时候就超过了前辈的复杂情感呢。`,
    );
    await me.say_and_wait(
      `毕竟是飞鹰子，${falcon.sex}在的话就一定会让泥地赛道变得更加受欢迎。`,
    );
    await falcon.say_and_wait(`……！`);
    await chara4_talk.say_and_wait(
      `说起来接下来是打算参战帝王赏吧？美眉我也会到现场去加油的！`,
    );
    await falcon.say_and_wait(`到时候一定会让丸善前辈看到后辈精彩的表现！`);
    await era.printAndWait(`露出笑容的丸善斯基将视线转向了${callname}。`);
    if (
      era.get('cflag:4:招募状态') === recruit_flags.yes &&
      era.get('love:4') > 90
    ) {
      await me.say_and_wait(`这么巧啊，丸善斯基。`);
      await era.printAndWait(`丸善斯基只是面带微笑的搅拌着手中的咖啡。`);
      await me.say_and_wait(`……啊。`);
      await chara4_talk.say_and_wait(
        `啊拉，训练员君？今天把训练场地改到甜品店了是打算进行智力训练吗？`,
      );
      await chara4_talk.say_and_wait(
        `呵呵～姐姐我也想一边吃着水果巴菲迅速提高智力呢。`,
      );
      await era.printAndWait(`转弯抹角的暗示这不是训练员应该做的事情吗。`);
      await era.printAndWait(
        `虽说与${falcon.name}之间的关系稍稍稍微有那么一点点接近，但自认为还是处于良好的发展态势。`,
      );
      await falcon.say_and_wait(
        `久等了⭐训练员${falcon.get_uma_sex_title()}……还有丸善斯基前辈。`,
      );
      await era.printAndWait(
        `似乎察觉到了两人之间的微妙关系，从长长的队伍中奔跑过来的${falcon.name}渐渐放慢了脚步。`,
      );
      await chara4_talk.say_and_wait(`小飞鹰中午好♪`);
      await era.printAndWait(
        `虽然打算迅速从修罗场脱离的${callname}，却被丸善斯基用气势死死的钉在了原地。`,
      );
      if (love > 90) {
        await falcon.say_and_wait(
          `就算是丸善前辈的话？这个巧克力也不能让给${callname}的呦♪`,
        );
        await chara4_talk.say_and_wait(`现在的后辈比想象之中还要可爱呢♪`);
        await chara4_talk.say_and_wait(
          `如果不是擅长的赛道不同，真想和小飞鹰比一场呢♪`,
        );
        await falcon.say_and_wait(`即使是丸善前辈的话，飞鹰子也不会认输的哦♪`);
        await chara4_talk.say_and_wait(`不觉得稍微有些失礼了吗？`);
        await falcon.say_and_wait(`没有哦？飞鹰子可没有任何恶意哦？`);
        await falcon.say_and_wait(
          `只是觉得丸善前辈差不多也要到了该去结婚的年纪了，为什么还在这里呢？`,
        );
        await chara4_talk.say_and_wait(
          `说起来飞鹰子不是作为偶像的吗？就这样和训练员${me.get_adult_sex_title()}坐在一起不怕有绯闻出现吗？`,
        );
        await chara4_talk.say_and_wait(`训练员君，${callname}怎么想的呢？`);
        await falcon.say_and_wait(
          `不会的哦？如果出现了，干脆直接宣布和训练员${me.get_adult_sex_title()}结婚就好了♪对吧，训练员${me.get_adult_sex_title()}？`,
        );
        await era.printAndWait(
          `游仞有余的丸善斯基看着露出了认真态势的${falcon.name}，无形的气浪让周围的人纷纷开始远离。`,
        );
        era.printButton(`什么也不想看`, 1);
        await era.input();
        await era.printAndWait(
          `在化为战场的正中央，带着呆滞的表情看着两人发力的${callname}活像鸵鸟把头埋进了沙子里。`,
        );
      } else {
        await falcon.say_and_wait(
          `既然丸善斯基前辈也在场，不如就在这里举行一场突击演唱会吧⭐`,
        );
        await era.printAndWait(
          `面对这种突如其来的状况，${falcon.name}依然踏入了这片场所。`,
        );
        await chara4_talk.say_and_wait(
          `最近流行的是万物都可作为舞台的潮流吗？`,
        );
        await falcon.say_and_wait(`是飞鹰子流哦⭐`);
        await falcon.say_and_wait(
          `虽然小铃鹿、小波旁还有风神不在现场稍微有些可惜……不过就当做逃马sister成员之间的一次活动吧！`,
        );
        await chara4_talk.say_and_wait(
          `不管是比赛还是演唱会，姐姐我都要马力全开了！`,
        );
        await era.printAndWait(
          `丸善斯基向${callname}眨了眨眼，便协助着${falcon.name}准备起了临时舞台的搭建。`,
        );
        await era.printAndWait(`一场风波就这么消散了。`);
      }
    }
  };

  /**
   * @param {EventObject} event_object
   */
  handlers[95 + 23] = async (event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:46:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46),
      me = get_chara_talk(0);
    await print_event_name('夏季合宿结束', falcon);
    await era.printAndWait(`${falcon.name}的第三年夏季合宿结束了。`);
    await falcon.say_and_wait(`向着顶级偶像的道路一刻不停的前进♪`);
    await era.printAndWait(
      `从庆祝夏季合宿结束的宴会上借口喝多离开的${callname}遇到了同样从宴会上离开的${falcon.teen_sex_title}。`,
    );
    await me.say_and_wait(`作为知名偶像的飞鹰子像这样离开宴会还真是少见呢。`);
    await falcon.say_and_wait(
      `毕竟一号粉丝不在的话，偶像活动也会突然黯淡许多呢。`,
    );
    await era.printAndWait(`原来如此。`);
    await me.say_and_wait(`飞鹰子已经不害怕孤独了吗？`);
    await falcon.say_and_wait(`……说实话还是很害怕，但已经没有以前那么害怕了。`);
    await falcon.say_and_wait(
      `毕竟训练员${falcon.get_uma_sex_title()}一直在我身边呢。`,
    );
    await me.say_and_wait(`……这就是飞鹰子的决定吗。`, true);
    await era.printAndWait(
      `${falcon.name}的身体向前微倾，右手食指竖在嘴唇中心，眨了眨右眼。`,
    );
    await falcon.say_and_wait(
      `而且，${falcon.name}想和最喜欢的训练员${me.get_adult_sex_title()}一起登上世界上最大的舞台！`,
    );
    await falcon.say_and_wait(
      `等到那个时候……飞鹰子……不对，${falcon.name}什么都没说哦⭐`,
    );
    await era.printAndWait(
      `从${falcon.sex}掩饰不住的笑容来看，是想到了幸福的事情吧。`,
    );
    await era.printAndWait(
      `为此努力的每一天，都是为了将这个梦想实现而度过的。`,
    );
    await falcon.say_and_wait(`踏上的道路，周围渐渐能看到一望无际的草原了。`);
    await me.say_and_wait(`为了成为顶级偶像，接下来的比赛也不能松懈！`);
    await falcon.say_and_wait(`不对！`);
    await era.printAndWait(`${falcon.name}说出了令${callname}吃惊的话。`);
    await me.say_and_wait(`飞鹰子的意思是？`);
    await falcon.say_and_wait(
      `就跟训练员${falcon.get_uma_sex_title()}之前说过的一样，每个人都要为自己的选择负起责任。`,
    );
    await falcon.say_and_wait(
      `尽管飞鹰子将心中的天平偏向了训练员${falcon.get_uma_sex_title()}，但飞鹰子作为${falcon.get_uma_sex_title()}偶像的责任一直没变。`,
    );
    await falcon.say_and_wait(
      `不论过去多久，听到过承诺的人们是否已经忘记，它依然没有改变。`,
    );
    await falcon.say_and_wait(
      `所以，直到飞鹰子因为过度劳累而倒下之前，飞鹰子都要肩负起作为${falcon.get_uma_sex_title()}偶像的责任，直到退役为止。`,
    );
    await falcon.say_and_wait(`这就是飞鹰子想出的答案。`);
    await era.printAndWait(
      `身旁的${falcon.teen_sex_title}露出了释然的表情，${falcon.sex}已经觉悟了。`,
    );
    era.printButton(`请让我作为${callname}身边最近的人见证这一切。`, 1);
    await era.input();
    await falcon.say_and_wait(`呵呵呵。`);
    await era.printAndWait(
      `${falcon.name}突然笑了起来，一直笑到眼泪都流了出来。`,
    );
    era.printButton(`飞鹰子？`, 1);
    await era.input();
    await era.printAndWait(`然后紧紧的抱住了${callname}。`);
    await falcon.say_and_wait(
      `谢谢${callname}，训练员${falcon.get_uma_sex_title()}。`,
    );
    await era.printAndWait(`${falcon.name}不再孤单了。`);
  };
  handlers[95 + 37] = async () => {
    const me = get_chara_talk(0),
      falcon = get_chara_talk(46);
    const callname = sys_get_callname(46, 0);
    await print_event_name('前辈与后辈', falcon);
    await era.printAndWait(
      `在仔细考虑过后，${callname}将育马场经典赛、冠军杯以及东京大赏典这三场比赛列入了第三年下半的计划之中。`,
    );
    await era.printAndWait(`要在下半年的三场之中全部获胜，压力可想而知。`);
    await era.printAndWait(
      `所谓的顶级偶像，就是要在这种艰难的场合给予众人希望。`,
    );
    await era.printAndWait(`咚咚咚。`);
    await me.say_and_wait(`我不记得有邀请过谁前来。`);
    await era.printAndWait(
      `${falcon.name}会直接推门进来，手纲小姐会事先在手机上发送消息，其他${falcon.get_uma_sex_title()}的话，一般都是自己主动联系。`,
    );
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `好久不见，训练员${falcon.get_uma_sex_title()}！`,
    );
    await era.printAndWait(
      `栗色的${falcon.get_uma_sex_title()}推门进来，甚至因为过于激动不小心把门把手卸了下来。`,
    );
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `啊，抱歉！我实在太激动了！`,
    );
    await era.printAndWait(`总觉得似曾相识的样子。`);
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `训练员${falcon.get_uma_sex_title()}还认识我吗？`,
    );
    await era.printAndWait(`脑海之中重复着将浮现的名字再次划去的工作，`);
    await era.printAndWait(`如果是${falcon.name}在这里的话，应该能一眼看出。`);
    await era.printAndWait(
      `毕竟${falcon.sex}记得每一名观看过演唱会的粉丝长相。`,
    );
    await me.say_and_wait(
      `演唱会？${falcon.get_uma_sex_title()}，河边的草地。`,
      true,
    );
    await me.say_and_wait(
      `说起来，确实遇到过一名${falcon.get_uma_sex_title()}。`,
      true,
    );
    await me.say_and_wait(
      `${callname}是去年立志成为偶像的那名${falcon.get_uma_sex_title()}吧。`,
    );
    await era.printAndWait(
      `虽然体格与身高的变得几乎看不出来，过往的神态却依稀可见。`,
    );
    await me.say_and_wait(`${callname}也迎来本格化了呢。`);
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `不愧是训练员${falcon.get_uma_sex_title()}！一开始还有点担心训练员${falcon.get_uma_sex_title()}认不出来呢，看来是我想多了。`,
    );
    await era.printAndWait(
      `看来自己的猜测是正确的，得到想要回答的${falcon.get_uma_sex_title()}得意的竖起了耳朵。`,
    );
    await me.say_and_wait(
      `挫折，疑惑，不解，汗水与泪水只能算是基本，有时，信念比生命还要重要。`,
    );
    await me.say_and_wait(
      `虽然我对偶像之道的了解也不多，希望能帮助到${callname}。`,
    );
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `训、训练员${falcon.get_uma_sex_title()}，${callname}到底经历了什么？`,
    );
    await era.printAndWait(
      `被${callname}的平凡的经历吓得躲在沙发角落瑟瑟发抖的${falcon.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `真是失礼，明明只是把自己的经历没有修饰的说了出来而已。`,
    );
    await falcon.say_and_wait(`训练员${falcon.get_uma_sex_title()}！`);
    await say_by_passer_by(`${falcon.get_uma_sex_title()}`, `是飞鹰子前辈！`);
    await era.printAndWait(`在解释了之前的那一幕后。`);
    await falcon.say_and_wait(`不过是偶像的日常罢了。`);
    await era.printAndWait(`面带笑容的${falcon.name}语气没有任何变化。`);
  };
  handlers[95 + 38] = async () => {
    const me = get_chara_talk(0),
      falcon = get_chara_talk(46);
    await print_event_name(`铭记的镜子`, falcon);
    era.drawLine();
    await me.say_and_wait(`${falcon.get_uma_sex_title()}偶像？`);
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()}偶像的概念似乎有些笼统啊。`,
    );
    await me.say_and_wait(
      `如果是积极参与比赛，并且闪闪发光的话，所有在赛场上奔驰的${falcon.get_uma_sex_title()}都是一样的。`,
    );
    await me.say_and_wait(
      `作为${falcon.get_uma_sex_title()}偶像的特殊之处又在哪里呢？`,
    );
    era.drawLine();
    falcon.print(
      `第一次训练的时候，训练员${falcon.get_uma_sex_title()}向我提出了这个问题。`,
    );
    falcon.print(`……当时是怎么回答的？`);
    falcon.print(`只是随口敷衍过去了吧。`);
    await falcon.say_and_wait(`……`);
    falcon.print(`即使是现在，我也给不出正确的答案。`);
    falcon.print(
      `想要，想要借着青春期特有的敏感与细腻交织而成的可爱作为卖点。`,
    );
    falcon.print(
      `就这样与粉丝一同成长，最后作为见证者与被见证者敲开顶级偶像的殿堂大门。`,
    );
    falcon.print(`不管在河岸下作为志愿者清理垃圾，还是辛苦的突击演出。`);
    falcon.print(`通过贯彻贴近生活的偶像这一概念，向粉丝们传递出自己的成长。`);
    falcon.print(`将痛苦与失意悄然藏起，带上作为万众期待的偶像这一面具。`);
    falcon.print(`……过程也没有想象中那么辛苦。`);
    falcon.print(`在草地之上的表演，同样也是一种训练。`);
    falcon.print(`回忆着电视上、舞蹈老师、访谈杂志上学到的经验。`);
    falcon.print(`节拍接着节拍，动作接着动作,一刻接着一刻。`);
    falcon.print(`直到将表演锻炼成像是与生俱来的天赋为止。`);
    falcon.print(`一舞已毕。`);
    falcon.print(`睁开双眼然后迎接无人的草地。`);
    falcon.print(`睁开双眼然后迎接一人的草地。`);
    falcon.print(`睁开双眼然后迎接数人的草地。`);
    falcon.print(`睁开双眼然后迎接盛大的舞台。\n`);
    falcon.print(`曾经作为知识的东西融化成了本能，本能又凝结出了新的知识。`);
    falcon.print(
      `不断进行着融化与凝结的这条直到生命尽头的河流，在外者看来，就像是璀璨的钻石一样。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`育马场经典赛马上就要开始了。`);
    await falcon.say_and_wait(`……训练员${falcon.get_uma_sex_title()}。`);
    await falcon.say_and_wait(
      `如果能再给飞鹰子一点时间的话，飞鹰子一定可以早点察觉到。`,
    );
    await falcon.say_and_wait(
      `不对！训练员${falcon.get_uma_sex_title()}一定不会喜欢现在的飞鹰子！`,
    );
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}期待的飞鹰子一定是那个永远充满活力，一直向前的完美偶像！`,
    );
    await falcon.say_and_wait(
      `所以无论赛场还是舞台之上，飞鹰子都要一直闪耀下去，直到夺去所有人的目光为止！`,
    );
    era.drawLine();
    falcon.print(`纵使已经被名为负罪感的高墙所隔阂。`);
    falcon.print(`粉丝袭击的源头是天平的失衡，是无视了粉丝愿望的偶像末路。`);
    falcon.print(`是会随着偶像的不断成长，不断施加压力的恶意。`);
    falcon.print(
      `再继续下去，迟早有一天会因为承受不住这份巨大的压力而像被高温加热后的岩石一样，遇到微小的契机，便会轰然炸开。`,
    );
    falcon.print(`或许不断选择错误的我明白的唯一正确的事情。`);
    falcon.print(`——啊啊，如果时间再多一点就好了。`);
    falcon.print(`如果能给我更多的时间的话，我就能处理好这一团乱麻。`);
    falcon.print(`然而这是不可能的事。`);
    falcon.print(`只要还在逃避必需完成的义务，未来就不会到来。`);
    falcon.print(
      `既然选择了偶像的道路，无论如何都要回应来自粉丝的依赖与祈祷。`,
    );
    falcon.print(`作为偶像尽忠职守到最后一刻。`);
    falcon.print(`所以，不能再逃避下去了。`);
    falcon.print(`第一次看沙地比赛时，我记得`);
    era.printButton(
      `追赶的${falcon.get_uma_sex_title()}超越了领头的${falcon.get_uma_sex_title()}`,
      1,
    ); //恋心超越责任
    era.printButton(`领头的${falcon.get_uma_sex_title()}踏出了关键的一步`, 2); //责任压倒恋心
    // te为2选项 ge为1选项
    const ret1 = await era.input();
    if (ret1 === 1) {
      falcon.print(
        `——没错，追赶的${falcon.get_uma_sex_title()}超越了领头的${falcon.get_uma_sex_title()}。`,
      );
      falcon.print(
        `沙地的${falcon.get_uma_sex_title()}们所要面对的环境更加恶劣。`,
      );
      falcon.print(`拼尽全力，放空一切，为了超越前方的目标。`);
      falcon.print(`尽管如此，这还不够。`);
      falcon.print(`若不在一开始就抢到优势位置，败者将承受沙土的考验。`);
      falcon.print(
        `决胜服被沙地弄脏，姣好的面容被沙土覆盖。不管从什么角度来看，都称不上是闪耀的姿态。`,
      );
      falcon.print(`眼睛被浸入的沙子深深刺痛，急促的呼吸被沙土打乱节奏。`);
      falcon.print(`没有思考的充裕，连自身的存在都忘记，就这么超越对方。`);
      falcon.print(`这就是竞争的意义。`);
    } else {
      falcon.print(`领头的${falcon.get_uma_sex_title()}踏出了关键的一步。`);
      falcon.print(
        `好像是去年，小铃鹿教导草地赛的时候，不会交给其他人的风景……好像是这个来着？`,
      );
      falcon.print(`领先的风景吗……有些怀念呢。`);
      falcon.print(
        `在全国巡演时，与地方${falcon.get_uma_sex_title()}之间的比赛。`,
      );
      falcon.print(`比起草地赛事，还是沙地赛的印象更加深刻。`);
      falcon.print(`……`);
      falcon.print(`除了皋月赏。`);
      falcon.print(
        `随着歌曲节奏变换的光线，台下的荧光棒随着节奏变换的光线组成的海洋，远远望去就像是层次分明的潮汐。`,
      );
    }
    falcon.print(
      `……啊啊……脑海之中又浮现出了训练员${falcon.get_uma_sex_title()}的模样。`,
    );
    falcon.print(`明明不能逃避。`);
    falcon.print(`纵使泪流满面。`);
  };
};
