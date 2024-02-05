const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const {race_enum} = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const {get_chara_talk} = require('#/utils/chara-talk-factory');
const chara_talk = new CharaTalk(4);

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
    const chara17_talk = get_chara_talk(17),
        me = get_chara_talk(0),
        edu_weeks = era.get('flag:当前回合数') - era.get('cflag:4:育成回合计时');
    if (
        extra_flag.race === race_enum.begin_race &&
        edu_weeks < 48 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('出道战后・启程之风', chara_talk);
        await era.printAndWait(
            `虽然只是作为新马级的出道战,但前来的观众却非常的多，恐怕一大部分都是为了观看${chara_talk.name}的首秀吧`,
        );
        await era.printAndWait(`马娘A「丸善学姐加油！」`);
        await era.printAndWait(`马娘B「再让我们看一遍前辈的帅气跑法吧！」`);
        await era.printAndWait(`哦哦哦哦哦`, {width: 34});
        await era.printAndWait(`观众们的欢呼声响彻了整个赛马场`);
        await me.say_and_wait(`大家似乎都在为${chara_talk.name}而欢呼啊`);
        await era.printAndWait(`马娘「抱歉请让我过去一下」`, {
            color: chara_talk.color,
        });
        await me.say_and_wait(`啊,好`);
        await era.printAndWait(`你连忙给${chara_talk.sex_code - 1 ? '她' : '他'}让了一条路过去`);
        await era.printAndWait(
            `那位马娘轻声说了句谢谢就连忙站在了同伴们的旁边一起加油`,
        );
        era.println();
        era.println();
        await era.printAndWait(`训练员「请问你就是${chara_talk.name}的训练员吗?」`);
        await era.printAndWait(`训练员「初次见面我是浄风幸」`);
        await me.say_and_wait(`你好,我的名字是（玩家名）`);
        await era.printAndWait(`看起来他似乎也是特雷森的训练员.`);
        await era.printAndWait(
            `浄风幸「之前在新马选拔的时候我也尝试招揽过${chara_talk.name},不过被${chara_talk.sex_code - 1 ? '她' : '他'}拒绝了」`,
        );
        await era.printAndWait(
            `浄风幸「虽然很遗憾.不过之后想要再尝试招募一次的时候意外听到了你们的对话。」`,
        );
        await era.printAndWait(
            `浄风幸「这个时候我才意识到,原来${chara_talk.name}喜欢的是奔跑本身啊。」`,
        );
        await era.printAndWait(
            `浄风幸「虽然有些意外，不过可能这就是${chara_talk.sex_code - 1 ? '她' : '他'}独有的魅力吧」`,
        );
        await era.printAndWait(
            `浄风幸「啊抱歉都是我一个人在自说自话,下周有空的话不如一起去喝一杯吧？」`,
        );
        await me.say_and_wait(`下周没有额外计划的话去喝一杯也不错`, true);
        await me.say_and_wait(`那就多谢了`);
        await era.printAndWait(
            `浄风幸「不不,我这边才是荣幸。那就这么说定了,到时候我发消息给你。」`,
        );
        await era.printAndWait(
            `因为一直坐着和他聊天的话很失礼,所以你们干脆靠着栏杆聊起了训练方针`,
        );
        await era.printAndWait(
            `在聊天的过程中你得知了他也是今年新招聘的训练员,作为同为新人的你来说倍感亲切`,
        );
        await era.printAndWait(`不出意外,${chara_talk.name}轻松取得了出道战的胜利`);
        await era.printAndWait(
            `浄风幸「.....没错,训练的时候还是要以速度为主，力量为辅,差不多了，那么待会见。」`,
        );
        await era.printAndWait(
            `观众席上爆发了一阵欢呼声,是为了庆祝${chara_talk.name}首战获胜的马娘们发出的尖叫。`,
        );
        era.printButton(`差不多该去迎接${chara_talk.name}了`, 1);
        await era.input();
        await chara_talk.say_and_wait(`hello,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},看到了我刚才的精彩表演了吗?`);
        era.printButton(`非常精彩,${chara_talk.name}是最棒的！`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `嗯嗯,那么我去准备胜者舞台了，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可要好好看着${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我哦⭐`,
        );
        era.drawLine({content: '胜者舞台结束后'});
        await chara_talk.say_and_wait(
            `出了不少汗呢,不过之前的舞蹈训练真是派上大忙了⭐`,
        );
        era.printButton(
            `不愧是${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}大人`,
            1,
        );
        await era.input();
        await chara_talk.say_and_wait(
            `嗯嗯,听到${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}这么说的话心情更加高涨了,干脆今晚和特别周${chara_talk.sex_code - 1 ? '她' : '他'}们开派对吧`,
        );
        await chara_talk.say_and_wait(`不过在这之前的话,接下来参加什么比赛好呢？`);
        era.printButton(`不如接下来参加朝日杯吧`, 1);
        await era.input();
        await chara_talk.say_and_wait(`朝日杯吗?`);
        await chara_talk.say_and_wait(
            `能够和更强的马娘们一起奔跑说不定会更加快乐呢。不愧是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}真是懂我呢。`,
        );
        await chara_talk.say_and_wait(`那么,接下来就朝着朝日杯前进吧！`);
        await era.printAndWait(`你和${chara_talk.name}确定了接下来的目标.`);
    } else if (
        extra_flag.race === race_enum.asah_sta &&
        edu_weeks < 48 &&
        extra_flag.rank === 1
    ) {
        await print_event_name(' 朝日杯后・蜚瓦拔木', chara_talk);
        era.drawLine({content: '阪神竞马场观众席上'});
        await era.printAndWait(
            `清冽的空气刺激着吸入冷气的肺部,刺激着人的意识兴奋。`,
        );
        await era.printAndWait(`虽然不至于担心${chara_talk.name}会出现什么问题,`);
        await me.say_and_wait(`希望${chara_talk.name}能尽情的享受这场比赛`, true);
        await era.printAndWait(
            `肩膀不知何时被人拍了一下,愕然的回过头,迎接的是一张笑脸。`,
        );
        await era.printAndWait(
            `浄风幸「原来你在这里啊，${chara_talk.name}的训练员」`,
        );
        await era.printAndWait(`男人不知何时站到了你的旁边`);
        await era.printAndWait(
            `浄风幸「听说${chara_talk.name}决定参加这场比赛后，入场券可是供不应求啊」`,
        );
        await era.printAndWait(`浄风幸「我也是花了好大的力才买到两张票」`);
        await era.printAndWait(
            `浄风幸「真是的,我家的孩子什么时候也能有这种待遇呢」`,
        );
        await era.printAndWait(`男人一如既往没心没肺的样子`);
        await me.say_and_wait(`马娘去哪里了?`);
        await era.printAndWait(`浄风幸「你说${chara_talk.sex_code - 1 ? '她' : '他'}吗?和同学们呆在一起了」`);
        await era.printAndWait(
            `顺着男人的手指方向,你看到马娘们兴奋的摇晃着应援棒。`,
        );
        await me.say_and_wait(`简直像是预定了比赛一定会胜利一样`, true);
        await era.printAndWait(`浄风幸「比赛马上开始了,不去关注你家的孩子吗？」`);
        await era.printAndWait(`慌忙收回的目光恰巧与那双翠色的双眸对视`);
        await era.printAndWait(`然后比赛开始`);
        await era.printAndWait(
            `浄风幸「作为逃马来说无可挑剔的开始,平时训练的不错嘛」`,
        );
        await era.printAndWait(
            `一开始${chara_talk.name}就冲到了马群的最前方,引领着整场比赛的节奏。`,
        );
        await era.printAndWait(`应援的马娘们「丸善学姐加油!!」`);
        await me.say_and_wait(
            `与其全部归因于刻苦训练,不如说丸善本来就希望追逐着风的缘故。`,
        );
        await me.say_and_wait(`后面的马娘真是热情啊`, true);
        await era.printAndWait(
            `浄风幸「${chara_talk.name}是不是已经掌握这场比赛的节奏了」`,
        );
        await era.printAndWait(
            `${chara_talk.name}与逃马群的距离开始逐步的拉大,整场比赛似乎成了${chara_talk.sex_code - 1 ? '她' : '他'}一人的独角戏。`,
        );
        await era.printAndWait(`浄风幸「......真是怪物一样的实力。」`);
        await era.printAndWait(
            `男人擦了擦头上的汗水,目不转睛地盯着${chara_talk.name}。`,
        );
        await era.printAndWait(`在经过第三个弯道后,决定胜负的时刻到了。`);
        await me.say_and_wait(`恐怕没有悬念了,${chara_talk.name}已经胜利了`);
        await me.say_and_wait(
            `${chara_talk.name}在第三个弯道开始加速之后,后排的先马与差马甚至无法缩短与${chara_talk.name}的距离`,
        );
        await era.printAndWait(`与第二名相差了十三马身,甚至还打破了该赛事的记录`);
        await era.printAndWait(
            `浄风幸「......作为训练员来说你还真是令人嫉妒的幸运啊,能遇到这么出色的马娘。」`,
        );
        await era.printAndWait(
            `浄风幸「像这样的马娘,即使不需要特别针对训练也能够轻松取胜吧」`,
        );
        await me.say_and_wait(`也许吧`, true);
        era.drawLine({content: '观众席的另一端'});
        await era.printAndWait(`马娘A「所以我的存在意义是......」`);
        await era.printAndWait(`不小心将心底里的话说出来了。`);
        await era.printAndWait(`马娘A「为什么......」`);
        await me.say_and_wait(`公告牌上的大差像是嘲笑${chara_talk.sex_code - 1 ? '她' : '他'}一样，不知为何显得额外刺眼`);
        await era.printAndWait(`马娘A「为什么我无法从你的脚步之中看到希望呢？」`);
        await era.printAndWait(`少女向内心询问，得到的只有沉默。`);
    } else if (
        extra_flag.race === race_enum.sprg_sta &&
        edu_weeks < 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('春季S后・迷茫之始', chara_talk);
        await era.printAndWait(
            `意料之外的是,参加比赛的马娘加上${chara_talk.name}一共只有5名。`,
        );
        await era.printAndWait(
            `因为${chara_talk.name}的强大结果马娘们纷纷决定避战`,
        );
        await chara_talk.say_and_wait(`......`);
        await me.say_and_wait(`${chara_talk.name}还好吗？`);
        await era.printAndWait(
            `比赛结果不出意料,又是${chara_talk.name}以绝对优势充裕的取得了连胜。`,
        );
        await era.printAndWait(`虽然${chara_talk.name}在获胜时依然带着笑容`);
        await me.say_and_wait(`更像是面具一样`, true);
        await me.say_and_wait(`去准备室看一下${chara_talk.sex_code - 1 ? '她' : '他'}吧`, true);
        era.drawLine({content: '准备室'});
        await chara_talk.say_and_wait(`是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}吗？请进。`);
        await era.printAndWait(`${chara_talk.name}看上去与往日似乎没有任何变化。`);
        await chara_talk.say_and_wait(
            `马上就要去胜者舞台上表演了,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可不要错过今天的表演哦`,
        );
        era.printButton(`......`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}怎么了？我没事哦，比起这个的话可不能让后辈们看到我失望的样子呢。`,
        );
        await chara_talk.say_and_wait(`那么待会见`);
        await era.printAndWait(
            `${chara_talk.name}正打开准备室的门，准备迎接万人的欢呼。`,
        );
        await me.say_and_wait(`${chara_talk.name},演出结束后我在学院的天台等你。`);
        await chara_talk.say_and_wait(`......我知道了。`);
    } else if (
        extra_flag.race === race_enum.sats_sho &&
        edu_weeks < 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('皐月賞后・梦想之风开始吹拂', chara_talk);
        await era.printAndWait(`${chara_talk.name}再一次主导了整个赛事。`);
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}看到我的身影了吗？`);
        era.printButton(`${chara_talk.name}的努力奔跑的身影真是令人陶醉啊`, 1);
        await era.input();
        await chara_talk.say_and_wait(`呵呵~不知道后辈们会怎么看我的表现。`);
        await chara_talk.say_and_wait(`一定是相当憧憬然后也会爱上跑步的快乐吧`);
        await chara_talk.say_and_wait(`嗯嗯，这么想的话心情也变好了`);
        await me.say_and_wait(`接下来的话就为德比做好准备吧`);
        await chara_talk.say_and_wait(
            `既然${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}都这么说了，${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我的话也不会推辞哦。`,
        );
        await era.printAndWait(
            `鼓起干劲的${chara_talk.name}看起来彻底恢复了往日的充裕。`,
        );
        await era.printAndWait(
            `抖动的耳朵，按一定频率摆动的尾巴，灵动的双眼，无不触动着你。`,
        );
        await me.say_and_wait(
            `三女神啊，请让这份耀眼的希望在我的眼中多停留一会吧`,
            true,
        );
        await me.say_and_wait(`我愿守护${chara_talk.sex_code - 1 ? '她' : '他'}直到最后一刻`, true);
    } else if (
        extra_flag.race === race_enum.toky_yus &&
        edu_weeks < 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('日本德比后・凝滞之风 ', chara_talk);
        era.drawLine({content: '胜者舞台结束后'});
        await era.printAndWait(`比赛以${chara_talk.name}的压倒性优势取得胜利。`);
        await me.say_and_wait(`${chara_talk.name}有好好享受这场比赛吗？`);
        await chara_talk.say_and_wait(`嗯，不愧是德比呢，气氛比之前比赛还要热烈。`);
        await era.printAndWait(`如同飞驰的。`);
        await chara_talk.say_and_wait(`快冲刺的时候观众席上的欢呼声也十分响亮呢。`);
        await chara_talk.say_and_wait(`我的身影也传递到了${chara_talk.sex_code - 1 ? '她' : '他'}们的心里了吧。`);
        await era.printAndWait(`${chara_talk.name}看上去比之前还要兴奋的样子。`);
        await chara_talk.say_and_wait(`接下来的话应该就是挑战菊花赏了吧？`);
        await me.say_and_wait(`那么接下来就好好准备菊花赏吧`);
        await chara_talk.say_and_wait(`在此之前，我们去哪里庆祝一下吧`);
        await chara_talk.say_and_wait(
            `不管是在赛场还是生活中，我都要好好展现身为大${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }的充裕哦。`,
        );
        await era.printAndWait(
            `诉说完理想的${chara_talk.name}正准备出门时，却听见了不合适宜的敲门声。`,
        );
        await era.printAndWait(`马娘A「请问是${chara_talk.name}学姐吗？」`);
        await era.printAndWait(
            `打开门后发现了一位身穿特雷森制服的马娘，通红的双眼说明刚刚才哭完，空洞的双眼失去了灵动。`,
        );
        await era.printAndWait(`马娘A「${chara_talk.name}学姐，祝贺你。」`);
        await chara_talk.say_and_wait(`......`);
        await era.printAndWait(
            `马娘A「我马上就要离开特雷森学院了，但想在此之前亲眼见证被称为超级跑车的马娘。」`,
        );
        await chara_talk.say_and_wait(`......为什么`); //为什么专门过来跟我说
        await era.printAndWait(
            `马娘A「虽然很不甘心，但世界上确实有天才吧，无论多努力都无法超越的存在。」`,
        );
        await era.printAndWait(`${chara_talk.name}抓着袖子的四指泛白。`);
        await era.printAndWait(
            `马娘A「不停的奔跑，拼命努力想要追逐那道背影，但结局却是越来越远，直到疲惫不堪为止不得不停下脚步。」`,
        );
        await era.printAndWait(`马娘的情绪开始失控，滔滔不绝的开始倾诉。`);
        await era.printAndWait(
            `马娘A「为什么为什么为什么啊......我永远也无法达到你的程度，即使是睡梦之中也会被你的身影所笼罩」`,
        );
        await era.printAndWait(
            `马娘A「噩梦，无休止的噩梦，每每在深夜频频睁眼，留在心底的却只有绝望。」`,
        );
        await me.say_and_wait(`${chara_talk.name}......`, true);
        await era.printAndWait(
            `马娘A「为了克服恐惧所以专门来观看你的比赛，当看到你最后冲刺时的模样，我终于释然了。」`,
        );
        await era.printAndWait(
            `因为泪已经流干了，所以哭泣的表情反而成了一种奇怪的笑容。`,
        );
        await era.printAndWait(
            `马娘A「世界上原来真的是有不可跨越的鸿沟的，学姐果然是怪物啊。」`,
        );
        await chara_talk.say_and_wait(`......不,不要再说下去了。`); //为什么专门过来跟我说
        await era.printAndWait(`马娘A「我不配作为赛马娘，再见。」`);
        await era.printAndWait(`像是燃烧殆尽的白灰一样，马娘扶着墙慢慢离开了。`);
        await era.printAndWait(`难以诉说的氛围在等候室弥漫开来了`);
        await chara_talk.say_and_wait(
            `为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么`,
        );
        await era.printAndWait(
            `你紧紧地抱住了${chara_talk.name}，${chara_talk.name}木然地看着天花板。`,
        );
        await chara_talk.say_and_wait(`......风停了`); //烦恼
        await era.printAndWait(`${chara_talk.name}已经感受不到风了。`);
    } else if (
        extra_flag.race === race_enum.radi_shi &&
        edu_weeks < 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('日经广播赏后・迷茫之路', chara_talk);
        await era.printAndWait(`${chara_talk.name}取得了比赛的胜利。`);
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}我把胜利带回来了呦♪`);
        await chara_talk.say_and_wait(`可以多夸夸我吗？`);
        era.printButton(
            `辛苦了，作为美丽又强大的${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }大人，这次表现得非常精彩！`,
            1,
        );
        await era.input();
        await chara_talk.say_and_wait(
            `哼哼~那是当然的事情呦，不如说失败的话才更奇怪吧？`,
        );
        era.printButton(`那么接下来的话，${chara_talk.name}打算怎么办呢？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `......说到接下来的话，就应该是准备胜者舞台然后好好享受青春才对吧。`,
        );
        await chara_talk.say_and_wait(
            `我先去准备胜者舞台了，虽然有点不舍不过${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}要好好地将我的身影映在心底哦。`,
        );
        await era.printAndWait(`在安抚深夜惊醒的${chara_talk.name}，你也熬夜了。`);
    } else if (
        extra_flag.race === race_enum.arim_kin &&
        edu_weeks < 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('有马纪念后・希望的辉光', chara_talk);
        await era.printAndWait(
            `在有马纪念上披荆斩棘战胜了众多强敌后，${chara_talk.name}取得了有马纪念的胜利`,
        );
        await era.printAndWait(
            `记者A「恭喜${chara_talk.name}小姐取得了有马纪念的胜利，战况真是激烈呢。」`,
        );
        await chara_talk.say_and_wait(
            `是啊，选手们个个都是实力派呢，拜此所赐我也跑的很开心呢`,
        );
        await era.printAndWait(`记者A「${chara_talk.name}小姐有什么感想吗？」`);
        await chara_talk.say_and_wait(
            `如果能让更多的马娘们看到我的背影然后产生追逐的想法就好了`,
        );
        await era.printAndWait(`记者A「真是非常远大的理想呢」`);
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}这边`);
        await era.printAndWait(
            `${chara_talk.name}看到你的到来后将你拉到了记者面前。」`,
        );
        await era.printAndWait(
            `记者A「请问训练员先生对${chara_talk.name}获胜有什么感谢吗？」`,
        );
        era.printButton(`比起胜利与否，${chara_talk.name}能够高兴才是最重要的`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}真会说话~不过，没有${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的鼓励的话，恐怕我也无法取得胜利呢。`,
        );
        await era.printAndWait(
            `记者A「真是令人感动的羁绊，感谢两位接受我的采访。」`,
        );
        await chara_talk.say_and_wait(`今天去哪里大吃一顿庆祝一下吧`);
        await me.say_and_wait(`果然还是露出笑脸的${chara_talk.name}最棒了`, true);
    } else if (
        extra_flag.race === race_enum.sank_hai &&
        edu_weeks > 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('大阪杯结束后・郁郁苍苍', chara_talk);
        await era.printAndWait(
            `与皇帝之间的对决，最终以${chara_talk.name}获胜告一段落。`,
        );
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，在这边我在这边~`);
        await era.printAndWait(
            `轻轻搀扶着美丽的少女，在这场战斗之中与皇帝领域之前的对决消耗了${chara_talk.sex_code - 1 ? '她' : '他'}过多的体力。`,
        );
        await era.printAndWait(
            `但${chara_talk.name}似乎从未如此高兴过，在看台上欢呼着的后辈们，还是在最后冲刺时观众席的全体起立。`,
        );
        await chara_talk.say_and_wait(
            `差一点就被鲁铎象征追上了呢，真想看着${chara_talk.sex_code - 1 ? '她' : '他'}是如何奔跑的`,
        );
        era.printButton(`${chara_talk.name}的背影一定也传达到${chara_talk.sex_code - 1 ? '她' : '他'}的心里了呢`, 1);
        await era.input();
        await chara_talk.say_and_wait(
            `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}......只要一会就好，能让我多依靠你一会吗？`,
        );
        await era.printAndWait(
            `轻轻抱起疲惫的少女，像是守护着娇弱公主的骑士，怕打碎世界上最珍贵的珠宝，一步步回到了训练室。希望之风充斥着整片赛马场。`,
        );
        era.drawLine();
        await chara17_talk.say_and_wait(`……太好了。`);
        await era.printAndWait(
            `皇帝目不斜视地看着你们远去的背影， ${chara_talk.sex_code - 1 ? '她' : '他'}舔舐着自己的牙齿，一种狂喜油然而生。`,
        );
        await era.printAndWait(
            `皇帝未竟的事业太多，故仍需证明自己——证明${chara_talk.sex_code - 1 ? '她' : '他'}独一无二，不止无敌于同世代，还能击溃过往的荣耀、镇压未来的荣光。`,
        );
        era.println();
        await chara17_talk.say_and_wait(`丸善，你最好真能从一而终地贯彻你的理念。`);
        await chara17_talk.say_and_wait(
            `还有——不要以王道自居。开拓者应当只受苦难，你伟大，便倒下，成为后来者向上的阶梯。`,
        );
        await chara17_talk.say_and_wait(
            `为了日本赛马娘的未来——为了一个更强的皇帝。`,
        );
        await era.printAndWait(
            `为此……皇帝昂起头，居高临下地看着${chara_talk.name}。`,
        );
        era.println();
        await chara17_talk.say_and_wait(
            `褪下你的教养、撕开你文明的包装！用尽一切方法，卑贱也罢、粗鲁也好，最好无所不用其极！！！`,
        );
        await chara17_talk.say_and_wait(
            `再怎么难看也是被允许的。做好所有准备……在天皇赏秋，迎接吾（皇帝）的复仇。`,
        );
        era.println();
        await era.printAndWait(`说罢，和颜悦色的皇帝脚步轻盈，离开了赛场。`);
    } else if (
        extra_flag.race === race_enum.yasu_kin &&
        edu_weeks > 95 &&
        extra_flag.rank === 1
    ) {
        await print_event_name('安田記念结束后・让人想奔跑的竞赛', chara_talk);
        era.drawLine({content: '准备室内'});
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，看到我精彩的背影了吗？`);
        await era.printAndWait(
            `安田纪念上，后辈的马娘们似乎都受到了${chara_talk.name}背影的激励，开始以${chara_talk.sex_code - 1 ? '她' : '他'}为目标不断向前奔跑着`,
        );
        await chara_talk.say_and_wait(
            `后辈们也变得很厉害了呢，说不定哪天${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我也要被后辈们超越然后咬着手帕一脸嫉妒地瞪着领奖台上的${chara_talk.sex_code - 1 ? '她' : '他'}们看呢`,
        );
        await chara_talk.say_and_wait(
            `为了安抚${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我受伤的心灵，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}今天和我一起睡吧`,
        );
        await me.say_and_wait(`比起这个${chara_talk.name}似乎很享受跑步的快乐呢`);
        await chara_talk.say_and_wait(
            `诶，居然岔开话题，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}对我的态度也变得这么冷淡了。`,
        );
        await chara_talk.say_and_wait(
            `是不是我已经失去魅力了，这样下去的话要${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我要被负心人抛弃了。`,
        );
        await chara_talk.say_and_wait(
            `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我好可怜啊`,
        );
        await era.printAndWait(`${chara_talk.name}现在也学会向你撒娇了`);
        await me.say_and_wait(`这个时候就应该`, true);
        await era.printAndWait(
            `右手轻轻搂住${chara_talk.name}的腰肢，再向其中注入深深一吻，左手不是抚摸着耳朵边的敏感地带`,
        );
        await era.printAndWait(
            `像是吸了猫薄荷的小猫一样，${chara_talk.name}现在彻底放松下来了。`,
        );
        await chara_talk.say_and_wait(
            `回去的时候让你尝尝${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }的爱情便当吧♪`,
        );
        await era.printAndWait(
            `（玩家名）回忆起了松软奶酪与浇灌着蜂蜜的面包发出的香甜气息，以及丸善斯基在晴朗的天空之下露出的笑容。`,
        );
        era.printButton(`丸善斯基的厨艺一直都是这么好呢`, 1);
        await era.input();
        await era.printAndWait(
            `像是回忆起了什么一样，微笑之中露出了狡黠表情的（丸善斯基）轻轻摆动着尾巴。`,
        );
        await chara_talk.say_and_wait(`训练员君接下来也一直做我的试吃员吧。`);
        await me.say_and_wait(`说起来的话，我明天想尝尝看中华料理。`,);
        await chara_talk.say_and_wait(`呵呵♪训练员君就拭目以待吧。`);
        era.drawLine();
        await era.printAndWait(
            `等到晚上丸善斯基从厨房将做好的包菜炒肉端上来之后，尚未动筷，那鲜美的气味便急不可耐的从鼻腔之中钻入，搅的馋虫从胃中勾了出来。`);
        await era.printAndWait(
            `等到动筷之时，夹起一块猪肉，那嫩滑的感觉像是夹起了一块豆腐。放入口中，含有菜汁的猪肉在口中迸开，让人恨不得将舌头都吃下去。`);
        await chara_talk.say_and_wait(`味道怎么样？`);
        await era.printAndWait(
            `看着正大块朵颐的（玩家名），丸善斯基露出了满意的笑容。`);

    } else if (
        extra_flag.race === race_enum.tenn_sho &&
        edu_weeks > 95 &&
        extra_flag.rank === 1
    ) {
        const chara340_talk = get_chara_talk(340),
            chara341_talk = get_chara_talk(341),
            chara342_talk = get_chara_talk(342);
        chara340_talk.name = '温柔的女神';
        chara341_talk.name = '睿智的女神';
        chara342_talk.name = '严肃的女神';
        await print_event_name('天皇赏秋结束后・金色之秋，黄金之梦', chara_talk);
        era.drawLine();
        await chara_talk.say_and_wait(`这里是？`);
        await chara17_talk.say_and_wait(
            `这里是伊甸,${chara_talk.name}${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }。`,
        );
        await chara_talk.say_and_wait(`你是鲁铎象征吗？`);
        await chara17_talk.say_and_wait(
            `赛马娘「......叫我露娜就好了,${chara_talk.name}${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }。」`,
        );
        await chara_talk.say_and_wait(`......所以天空之上太阳消失了吗？`);
        await era.printAndWait(
            `一望无际的金色草原，金黄色的银杏叶在温柔之风的吹拂下组成了黄金色的海洋纷纷落下。`,
        );
        await era.printAndWait(`月亮在这片理想乡之中升起。`);
        await era.printAndWait(`————太阳却不见踪影。`);
        await era.printAndWait(`然而三女神依然温柔的注视着${chara_talk.sex_code - 1 ? '她' : '他'}们的孩子。`);
        await chara17_talk.say_and_wait(`赛马娘「这里是所有马娘的理想乡」`);
        await chara17_talk.print_and_wait('赛马娘「这是一个崭新的世界。」');
        await chara17_talk.say_and_wait(
            `赛马娘「恭喜你，${chara_talk.name}${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }，这场对决之中是你胜利了。」`,
        );
        await chara17_talk.say_and_wait(
            `赛马娘「接下来的话，恐怕皇帝就会消失了吧。」`,
        );
        await chara17_talk.say_and_wait(
            `赛马娘「不过，请不用悲伤，${chara_talk.sex_code - 1 ? '她' : '他'}只是太累了。」`,
        );
        await chara17_talk.say_and_wait(
            `赛马娘「背负着赛马娘未来的十字架过于沉重，现在的${chara_talk.sex_code - 1 ? '她' : '他'}需要好好休息一段时间了。」`,
        );
        await chara17_talk.say_and_wait(`赛马娘「那么出发吧，三女神们在等着你。」`);
        await era.printAndWait(
            `自称为露娜的少女消失了，${chara_talk.name}被温柔之风带到了三女神的面前。`,
        );
        await chara341_talk.say_and_wait(`亲爱的孩子，我知道你现在有很多想问的。`);
        await chara342_talk.say_and_wait(`不过在此之前，请让我对你表示祝贺。`);
        await chara342_talk.say_and_wait(
            `这里是所有领悟领域的马娘最后都会到达的地方`,
        );
        await chara340_talk.say_and_wait(`也是马娘们最后会到达的温柔乡。`);
        await chara341_talk.say_and_wait(
            `那么，作为第一位到达伊甸的赛马娘，你有什么希望实现的愿望吗？`,
        );
        await chara_talk.say_and_wait(`我的愿望是......`);
        await chara340_talk.say_and_wait(
            `......温柔的孩子，你的愿望一定会实现的。`,
        );
        await chara342_talk.say_and_wait(`不过现在，是时候回到物质界了。`);
        await chara341_talk.say_and_wait(`在漫长的几十年后，我们会再次见面的.`);
        era.drawLine();
        await era.printAndWait(`史无前例的激烈战斗在东京赛马场上爆发了。`);
        await era.printAndWait(
            `这场激烈战斗吸引了全世界对赛马感兴趣的爱好者的关注。`,
        );
        await era.printAndWait(
            `————最终，以${chara_talk.name}超出半个头身的细微差距画下了句号`,
        );
        await era.printAndWait(
            `作为同样熟练掌握领域的马娘，二人之间的精彩战斗深深影响了之后的马娘们。`,
        );
        await era.printAndWait(`然而在最后冲过终点之后，两人同时倒在地上昏迷。`);
        await era.printAndWait(`颁奖大赛也不得不暂时中断。`);
        era.drawLine();
        await chara_talk.say_and_wait(`————唔，这里是？`);
        await era.printAndWait(`陌生的天花板，以及守候在旁边的（玩家名）。`);
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`);
        era.printButton(`${chara_talk.name}？${chara_talk.name}你终于醒了！`, 1);
        await era.input();
        await era.printAndWait(
            `看着喜极而泣的（玩家名）,${chara_talk.name}露出了疑惑的表情。`,
        );
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}我睡了多久了？`);
        era.printButton(`自天皇赏秋结束以后已经过去一个星期了`, 1);
        await era.input();
        await chara_talk.say_and_wait(`鲁铎象征呢？`);
        await chara17_talk.say_and_wait(`${chara_talk.name}小姐，我在这里。`);
        await era.printAndWait(`坐着电动轮椅的鲁铎象征来到了病床之前。`);
        await chara_talk.say_and_wait(
            `皇帝需要沉睡一段时间，所以这段时间就由露娜来代替皇帝了`,
        );
        await chara_talk.say_and_wait(`......三女神们，谢谢你。`);
        await era.printAndWait(
            `听着你们之间莫名电波的话语，（玩家名）陷入了疑惑之中`,
        );
        await chara_talk.say_and_wait(`那么接下来这段时间请多指教了，露娜♪`);
        await era.printAndWait(
            `温柔之风吹拂了整个世界，在赛马娘们的心中留下了希望的背影。`,
        );
        await era.printAndWait(`世界，悄悄变得更加温柔一点了。`);
        era.drawLine({content: '一个月后·特雷森学院天台'});
        await era.printAndWait(`在得到主治医生的许可后，你们离开了医院。`);
        await era.printAndWait(
            `所幸只是过度使用领域而陷入了深度睡眠之中，身体并无大碍。`,
        );
        await chara_talk.say_and_wait(`接下来的话干什么好呢？`);
        await era.printAndWait(
            `你和${chara_talk.name}回到了最初达成契约的地方，从这里俯视的话，可以将后辈们的活跃尽收眼底。`,
        );
        era.printButton(`去指导温柔的后辈们吧`, 1);
        await era.input();
        await chara_talk.say_and_wait(`嗯嗯，这也是预定要做的事情，不过在此之前——`);
        await era.printAndWait(`${chara_talk.name}紧紧抱住了你`);
        await chara_talk.say_and_wait(`${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，最喜欢你了♪`);
        await era.printAndWait(`二人在天台之上接吻。`);
    } else if (extra_flag.rank === 1) {
        await print_event_name('竞赛获胜', chara_talk);
        await chara_talk.say_and_wait(
            `victoryvictory！胜利了哦，训练员♪第一名果然不一样呢，内心的兴奋完全停不下来啊`,
        );
        await chara_talk.say_and_wait(`训练员看到了我跑步的模样吗？`);
        era.printButton(`你是最棒的！`, 1);
        era.printButton(`还可以做的更好哦！`, 2);
        const ret = await era.input();
        if (ret === 1) {
            await chara_talk.say_and_wait(
                `对吧对吧♪今天就去喫茶店喝柠檬茶、吃提拉米苏吧。`,
            );
            await chara_talk.say_and_wait(`训练员当然也会一起来的吧？呵呵♪`);
        } else {
            await chara_talk.say_and_wait(`哎呀，训练员真是直接啊！`);
            await chara_talk.say_and_wait(`不过我也不能就这样沾沾自喜！`);
            await era.printAndWait(
                `${chara_talk.name}把${chara_talk.sex_code - 1 ? '她' : '他'}最喜欢的椰果饮料一口气喝完了！`,
            );
            await chara_talk.say_and_wait(
                `——噗哈！真是凉快！好，接下来也会充满干劲的努力哦！`,
            );
        }
    } else if (extra_flag.rank <= 5) {
        //通用比赛入着
        await print_event_name('竞赛上榜', chara_talk);
        await chara_talk.say_and_wait(
            `虽然想为了来看比赛的后辈们拿下第一的，不过我的实力还不够呢......`,
        );
        era.printButton(`你跑的并不差！`, 1);
        era.printButton(`下次要拿第一名！`, 2);
        const ret = await era.input();
        if (ret === 1) {
            await chara_talk.say_and_wait(`呵呵，训练员在安慰我吧。谢谢你。`);
            await chara_talk.say_and_wait(
                `不过.......哎呀，居然还让训练员来担心我，${
                    era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
                }我真是没用呢。`,
            );
            await chara_talk.say_and_wait(
                '好，下次一定要让大家看到超级跑车的风采，干脆利落的赢得第一！',
            );
        } else {
            await chara_talk.say_and_wait('是啊，老是唉声叹气就不像我了。');
            await chara_talk.say_and_wait(
                `下次一定要让后辈们看到${
                    era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
                }我拿出真本事的样子！`,
            );
            await chara_talk.say_and_wait('和塔酱一起去海边兜风吧♪');
            await era.printAndWait(
                `后来你陪${chara_talk.name}去海边兜风，直到${chara_talk.sex_code - 1 ? '她' : '他'}尽兴为止才回家。`,
            );
        }
    } else if (extra_flag.rank <= 10) {
        await print_event_name('竞赛败北', chara_talk);
        await chara_talk.say_and_wait('伤心......');
        await chara_talk.say_and_wait(
            `抱歉呢....训练员。没能让你看到我帅气的模样.......`,
        );
        era.printButton(`期待下一次的表现！`, 1);
        era.printButton(`垂头丧气也没有用！`, 2);
        const ret = await era.input();
        if (ret === 1) {
            await chara_talk.say_and_wait(`......你真温柔呢，训练员。`);
            await chara_talk.say_and_wait(
                `......好，那我们得快点回去训练才行！下一次一定要让你看到我帅气的一面！`,
            );
        } else {
            await chara_talk.say_and_wait(
                '......说的也是呢。垂头丧气也不能让我跑的更快。',
            );
            await chara_talk.say_and_wait(
                '所以我不能在沮丧下去了。要向就算撞凹了也能马上修好的塔酱一样！',
            );
            await chara_talk.say_and_wait(
                '好！我的修理到此结束。得快点加满油好好冲刺！',
            );
        }
    } else {
        throw new Error();
    }
};
