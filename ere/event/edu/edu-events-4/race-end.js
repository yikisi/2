const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const event_marks = new MaEduMarks(),
    chara_talk = get_chara_talk(4),
    chara17_talk = get_chara_talk(17),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:4:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・启程之风', chara_talk);
    await era.printAndWait(
      `虽然仅仅只是新马级的出道战,但为了观看${chara_talk.name}的首秀而前来的人们却把整个竞马场坐满了。`,
    );
    await me.say_and_wait(
      `仔细想想看的话，${chara_talk.name}的人气还真是可怕啊。`,
    );
    await era.printAndWait(
      `多亏了平日的帮助后辈们的努力，前来观看的人群之中有一大部分都是被帮助过的后辈。`,
    );
    await era.printAndWait(
      `坐在马群之中的${me.actual_name}感受到了格格不入的压力。`,
    );
    await me.say_and_wait(`在手心攥出汗之前找一个人少一点的地方观战吧。`);
    await say_by_passer_by(
      `解说`,
      `接下来是备受瞩目的新星，同时也具有压倒性的实力与人气的${chara_talk.name}，不知道接下来会让我们看到什么样精彩的画面呢！`,
    );
    await me.say_and_wait(`不妙啊。`);
    await era.printAndWait(
      `在解说铿锵有力的渲染之下，本就暗流涌动的人群像是沸腾的油锅里进了一滴水一样，轰得一下炸开了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}A`,
      `丸善${era.get('cflag:4:性别') - 1 ? '学姐' : '学长'}加油！`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}B`,
      `再让我们看一遍前辈的帅气跑法吧！`,
    );
    await era.printAndWait(`哦哦哦哦哦`, { width: 34 });
    await era.printAndWait(`观众们的欢呼声响彻了整个赛马场`);
    await me.say_and_wait(
      `大家看上去都很兴奋啊，果然是${chara_talk.name}的缘故吗？`,
    );
    await era.printAndWait(
      `跟着人群一同站起的${me.actual_name}正努力通过马耳之间的间隙寻找名为${chara_talk.name}的身影。`,
    );
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `啊，抱歉。`);
    await era.printAndWait(
      `虽说只是被不小心被碰了一下，但受到的冲击力之大还是让你险些痛的叫出了声。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `非常抱歉......不小心没控制好自己的力气，没有碰伤吧？`,
    );
    await me.say_and_wait(`不，没关系。`);
    await era.printAndWait(
      `既然是对方的无意，所以没有必要在这个问题上纠缠的${me.actual_name}就这样原谅了对方。`,
    );
    await me.say_and_wait(`你们是来看${chara_talk.name}跑步的吗？`);
    await era.printAndWait(`话说出口的一瞬间就因为自己的问题而深感懊悔。`);
    await era.printAndWait(
      `这不废话，对方不来看丸善斯基的还是过来干什么？难道是观看长了腿的胡萝卜在场地上跑吗？`,
    );
    await era.printAndWait(`不过，有点想见识一下长了腿的胡萝卜啊。`);
    await me.say_and_wait(`你们也是来看长了腿的胡萝卜在地上跑步吗？`);
    await era.printAndWait(
      `不好，不小心把脑子里想的话和要说的对话混在一起了。`,
    );
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `噗嗤。`);
    await me.say_and_wait(`果不其然被嘲笑了啊。`, true);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `这位训练员${chara_talk.get_adult_sex_title()}比想象中还有趣啊。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `稍微有点明白丸善前辈为什么会选择你了。`,
    );
    await me.say_and_wait(`诶？`);
    await me.say_and_wait(`原来我已经这么出名了吗？`);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `不如说，你与丸善前辈签约的第二天，整个特雷森都知道这件事情了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `大家都很好奇作为丸善斯基的训练员会是什么样子的人呢。`,
    );
    await era.printAndWait(`难怪一路上会有那么多好奇的视线。`);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `作为丸善前辈的训练员${chara_talk.get_adult_sex_title()}，接下来的道路要加油哦！我也会一直支持你和丸善前辈的！`,
    );
    await era.printAndWait(`这位马娘看上去非常开心的样子。`);
    await era.printAndWait(
      `趁着大家将注意力重新聚焦在${chara_talk.name}身上的时候，${me.actual_name}悄悄离开了原来的座位。`,
    );
    era.drawLine();
    await era.printAndWait(
      `相比于能正面看见丸善斯基奔跑身影的东部，只能看到背影的西部座位就显得人群稀疏。`,
    );
    await era.printAndWait(
      `更不提有不少马娘宁愿站在人群之中也不会坐在自己的座位之上。`,
    );
    await say_by_passer_by(
      `训练员`,
      `所以说${chara_talk.get_uma_sex_title}们真是单纯的生物啊。`,
    );
    await me.say_and_wait(`就是说啊。`);
    await say_by_passer_by(
      `训练员`,
      `不过正因为如此所以我才喜欢${chara_talk.sex_code - 1 ? '她' : '他'}们。`,
    );
    await era.printAndWait(
      `看上去像是训练员一样的男人趴在了栏杆之上看着做着准备活动的马娘们。`,
    );
    await era.printAndWait(
      `先不提为什么不和其他人一样去光鲜的正面，这副场景简直就是专门在等着你一样。`,
    );
    await say_by_passer_by(`训练员`, `请问你就是${chara_talk.name}的训练员吗?`);
    await me.say_and_wait(`果然是这样子吗？`, true);
    await era.printAndWait(`像是嗅到了危险的气息，你下意识向对方提起了戒备。`);
    await say_by_passer_by(
      `训练员`,
      `看来没错，你就是${chara_talk.name}的训练员。初次见面我是浄风幸`,
    );
    await era.printAndWait(`明明周围没有烟蒂，你却觉得他的身上有一股烟味。`);
    await say_by_passer_by(
      `训练员`,
      `抱歉，提问的人不先报上自己的姓名实在是过于失礼了。初次见面我是浄风幸`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `至于为什么知道你的名字。毕竟你作为丸善斯基的训练员可是一件大新闻。`,
    );
    await say_by_passer_by(`训练员`, `特雷森不知道的人反而才是少数。`);
    await say_by_passer_by(
      `训练员`,
      `如果想要和${chara_talk.name}顺利走完这三年的道路的话，你可能会面对比想象之中还要困难的事情。`,
    );
    await say_by_passer_by(
      `训练员`,
      `毕竟，那位皇帝也一直关注着${chara_talk.name}的一举一动。`,
    );
    await era.printAndWait(`似乎并无恶意的样子，男人像是陷入了回忆一样。`);
    await me.say_and_wait(`你好,我的名字是${me.actual_name}，请多指教。`);
    await era.printAndWait(`思虑再三后，你还是做出了回复。`);
    await say_by_passer_by(
      `浄风幸`,
      `请多指教，之前在新马选拔的时候我和其他训练员一样都尝试签约过${chara_talk.name},不过很明显的，全都失败了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `一次不成就放弃可不是我的风格.不过在这之后想要再尝试招募一次的时候却意外听到了你们之间的对话。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `直到此时的我才意识到,原来${chara_talk.name}喜欢的是奔跑的本身啊。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `也许这就是三女神的旨意吧，不过一想到是${chara_talk.name}也释然了。或许这也是${
        chara_talk.sex_code - 1 ? '她' : '他'
      }所独有的魅力吧`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `抱歉都是我一个人在自说自话,下周如果有兴趣的话去商业街一起喝一杯吧，`,
    );
    era.printButton(`那就多谢了`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `那就这么说定了,到时候我发消息给你。`);
    await say_by_passer_by(
      `浄风幸`,
      `你也差不多该去迎接${chara_talk.name}了吧。这次的对话就留到那时再说吧。`,
    );
    await say_by_passer_by(`浄风幸`, `到时候再见。`);
    await era.printAndWait(
      `观众席上爆发了一阵欢呼声,是为了庆祝${
        chara_talk.name
      }首战获胜的${chara_talk.get_uma_sex_title()}们发出的尖叫。`,
    );
    era.printButton(`差不多该去迎接${chara_talk.name}了`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }♪,看到了我刚才的精彩表演了吗?`,
    );
    era.printButton(`比想象之中还要精彩的演出！`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `嗯嗯,那么我去准备胜者舞台了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }可要好好看着${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我哦⭐`,
    );
    await era.printAndWait(
      `胜者舞台上的${chara_talk.name}比起平时看上去更加闪闪发光，像是被发掘的原石终于露出了原本的面目一样。`,
    );
    await era.printAndWait(`不过说起来，训练员不就是这样的职业吗？`);
    era.drawLine({ content: '胜者舞台结束后' });
    await chara_talk.say_and_wait(
      `呼~出了不少汗呢,不过之前的舞蹈训练真是派上大忙了⭐`,
    );
    era.printButton(
      `不愧是${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}大人`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `哎呀,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }比平时还要油嘴滑舌的样子,难道对其他的孩子们也是这样的态度吗？`,
    );
    era.printButton(
      `不如说只有丸善斯基一个${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}，想要对其他人说也做不到吧？`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `呵呵呵,听到${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }这么说，我的心情也愈发高涨起来了呢，嗯——今晚的话要不和小特们一起开个派对庆祝吧！`,
    );
    era.printButton(`丸善斯基比平时还要兴奋的样子呢`, 1);
    await era.input();
    await me.say_and_wait(
      `像是火焰一样席卷了整个草场的${chara_talk.name}可真帅气啊。`,
    );
    await chara_talk.say_and_wait(
      `听到作为担当的${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }这么说，可真是让人感到安心呢。`,
    );
    await chara_talk.say_and_wait(`不过在继续夸赞之前,下一个目标是？`);
    era.printButton(`朝日杯怎么样？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`朝日杯吗?`);
    await chara_talk.say_and_wait(
      `如果能与更强的马娘之间竞争的话，说不定能看到更加美丽的风景，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }这份回答我可以给满分哦。`,
    );
    await chara_talk.say_and_wait(`那么,接下来就朝着朝日杯前进吧！`);
    await era.printAndWait(`你和${chara_talk.name}确定了接下来的目标.`);
  } else if (
    extra_flag.race === race_enum.asah_sta &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(' 朝日杯后・蜚瓦拔木', chara_talk);
    await era.printAndWait(`阪神竞马场\n`);
    await era.printAndWait(
      `凌冽的空气刺激着你的肺部,寒冷刺激着大脑变得更加的清醒。`,
    );
    await me.say_and_wait(`丸善斯基，一定要赢啊。`);
    await me.say_and_wait(`......不，如果是丸善斯基的话。`);
    await me.say_and_wait(
      `比起胜利，还是为了感受和马娘们一起的奔跑才更加开心吧`,
      true,
    );
    await say_by_passer_by(`浄风幸`, `丸善斯基的训练员，感觉怎么样？`);
    await me.say_and_wait(`欸？`);
    await say_by_passer_by(`浄风幸`, `好久不见了，${chara_talk.name}的训练员`);
    await me.say_and_wait(`是啊，好久不见了。`);
    await say_by_passer_by(
      `浄风幸`,
      `被称为希望的赛事的朝日杯，观赛人数的多少意味着人们对新出道的赛马娘的关注度有多高了。`,
    );
    await say_by_passer_by(`浄风幸`, `而像这样的情况。`);
    await era.printAndWait(
      `观众席上到处都是人，甚至还有偷偷混进来的人们干脆站着观看这场赛事。`,
    );
    await say_by_passer_by(`浄风幸`, `观众们对丸善斯基的期待度可真高啊。`);
    await say_by_passer_by(`浄风幸`, `毕竟是丸善斯基嘛，这样才对啊。`);
    await me.say_and_wait(`舞台去哪里了?`);
    await say_by_passer_by(
      `浄风幸`,
      `你说舞台吗?因为丸善斯基有比赛，所以早早就和同学一起预定好票了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `真是的，早知道就提前和她说了，现在反而多了一张票不知道该怎么办了。`,
    );
    await era.printAndWait(
      `他从口袋中掏出之前预定好的两张票正准备当叠成一个小小的纸飞机扔出时。`,
    );
    await say_by_passer_by(
      `马娘`,
      `这边的先生，不好意思打扰了，请问你手上的票能卖给我吗？`,
    );
    await era.printAndWait(`焦急的马娘双手合掌眼巴巴的望着你们。`);
    await say_by_passer_by(`浄风幸`, `......`);
    await say_by_passer_by(
      `马娘`,
      `因为是偷偷混在人群中进来的缘故，那边开始查票了，如果可以的话能卖给我吗？`,
    );
    await era.printAndWait(
      `顺着她时不时回头向后望去的地方，人群之中开始出现骚动。`,
    );
    await era.printAndWait(
      `工作人员离这边越来越近了，马娘的脸色也逐渐变得苍白。`,
    );
    await say_by_passer_by(`马娘`, `......我愿意出双倍的价钱！`);
    await era.printAndWait(
      `看到你们还没有反应的样子，马娘尽了最后的努力向你们求救。`,
    );
    await say_by_passer_by(`验票员`, `不好意思打扰了。`);
    await say_by_passer_by(`马娘`, `！`);
    await era.printAndWait(
      `一直关注着远处却忽略了近在咫尺的缘故吗？不管是马娘还是你们，都没想到会有验票员干脆从在座位上站起验票。`,
    );
    await me.say_and_wait(`这就是所谓的命运吗？`);
    await era.printAndWait(`命运和她开了一个玩笑。`);
    await say_by_passer_by(`验票员`, `那边的客人们，请出示你们的马票。`);
    await say_by_passer_by(`马娘`, `......`);
    await era.printAndWait(`你和浄风幸都从口袋中掏出了购买的马票。`);
    await say_by_passer_by(`验票员`, `这位客人的呢？`);
    await say_by_passer_by(`马娘`, `这个。`);
    await say_by_passer_by(`验票员`, `这位客人？`);
    await era.printAndWait(`验票员开始怀疑起马娘了。`);
    await say_by_passer_by(`浄风幸`, `这位小姐的腿真漂亮啊。`);
    await me.say_and_wait(`诶？`);
    await era.printAndWait(`顺着男人的视线,你看到掉落在马娘脚边的小票。`);
    await say_by_passer_by(
      `马娘`,
      `就是这个！不好意思，因为不小心掉在地上一直在找，真是好险。`,
    );
    await era.printAndWait(
      `验票员接过手上的票再三确认后才打消了怀疑，交还给了你们。`,
    );
    await say_by_passer_by(`浄风幸`, `验票员可真是辛苦啊。`);
    await era.printAndWait(`身穿便装的验票员，闻言叹了口气。`);
    await say_by_passer_by(
      `验票员`,
      `是啊，我今天本来休息才想着过来看场比赛的。`,
    );
    await say_by_passer_by(`验票员`, `结果因为逃票的人太多，验票员不够用了。`);
    await say_by_passer_by(`验票员`, `正好我又恰巧在看这场比赛。`);
    await say_by_passer_by(
      `验票员`,
      `于是我连衣服都来不及换，就得考虑工作了。`,
    );
    await era.printAndWait(
      `验票员似乎心里也很不满，终于找到了宣泄口倾诉的样子。`,
    );
    await say_by_passer_by(
      `验票员`,
      `呼，说出来舒服多了。那么，祝各位客人观赛愉快。`,
    );
    await era.printAndWait(
      `换上了营业用微笑后，验票员匆匆离开了。马娘双腿一软，再也支撑不住就这样跪坐在了地板上。`,
    );
    await say_by_passer_by(`马娘`, `差点就这样去见三女神大人了。`);
    await say_by_passer_by(`马娘`, `谢谢你们，我现在就转给`);
    await say_by_passer_by(
      `浄风幸`,
      `你在说什么呢？我一直都只买了一张票啊？这张票不是恰巧掉在这里的吗？`,
    );
    await say_by_passer_by(`马娘`, `诶？`);
    await me.say_and_wait(`运气真好啊。`);
    await say_by_passer_by(
      `马娘`,
      `......这样啊，我只是幸运的捡到了掉在脚边的这张票。`,
    );
    await say_by_passer_by(`马娘`, `并且正好是本场比赛的马票。`);
    await say_by_passer_by(`浄风幸`, `这位小姐，您的运气可真好呢。`);
    await say_by_passer_by(`马娘`, `......原来如此，训练员先生。`);
    await say_by_passer_by(`浄风幸`, `鄙人净风幸。`);
    await say_by_passer_by(`马娘`, `非常高兴能认识您，净风幸先生。`);
    await say_by_passer_by(`浄风幸`, `我也是。`);
    await say_by_passer_by(`马娘`, `接下来可不可以`);
    await say_by_passer_by(
      `浄风幸`,
      `真是抱歉，我已经和旁边的训练员约好了，祝您有个愉快的周末。`,
    );
    await say_by_passer_by(`马娘`, `......抱歉打扰了。`);
    await era.printAndWait(`马娘失落的离开了。`);
    await say_by_passer_by(`浄风幸`, `刚才说到哪里来着了？`);
    await era.printAndWait(
      `刚刚的风波好像从未发生过一样，两人重新聊起了比赛相关的事情。`,
    );
    era.drawLine();
    await say_by_passer_by(
      `浄风幸`,
      `作为逃马来说无可挑剔的开始,平时训练的不错嘛。`,
    );
    await era.printAndWait(
      `一开始${chara_talk.name}就冲到了马群的最前方,引领着整场比赛的节奏。`,
    );
    await say_by_passer_by(
      `应援的${chara_talk.get_uma_sex_title()}们`,
      `丸善${era.get('cflag:4:性别') - 1 ? '学姐' : '学长'}加油!!`,
    );
    await me.say_and_wait(
      `与其全部归因于刻苦训练,不如说丸善本来就希望追逐着风的缘故。`,
    );
    await me.say_and_wait(
      `后面的${chara_talk.get_uma_sex_title()}真是热情啊`,
      true,
    );
    await say_by_passer_by(
      `浄风幸`,
      `${chara_talk.name}是不是已经掌握这场比赛的节奏了`,
    );
    await era.printAndWait(
      `${chara_talk.name}与逃马群的距离开始逐步的拉大,整场比赛似乎成了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }一人的独角戏。`,
    );
    await say_by_passer_by(`浄风幸`, `......真是怪物一样的实力。`);
    await era.printAndWait(
      `男人擦了擦头上的汗水,目不转睛地盯着${chara_talk.name}。`,
    );
    await era.printAndWait(`在经过第三个弯道后,决定胜负的时刻到了。`);
    await me.say_and_wait(`恐怕没有悬念了,${chara_talk.name}已经胜利了`);
    await me.say_and_wait(
      `${chara_talk.name}在第三个弯道开始加速之后,后排的先马与差马甚至无法缩短与${chara_talk.name}的距离`,
    );
    await era.printAndWait(`与第二名相差了十三马身,甚至还打破了该赛事的记录`);
    await say_by_passer_by(
      `浄风幸`,
      `......作为训练员来说你还真是令人嫉妒的幸运啊,能遇到这么出色的${chara_talk.get_uma_sex_title()}。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `像这样的${chara_talk.get_uma_sex_title()},即使不需要特别针对训练也能够轻松取胜吧`,
    );
    await me.say_and_wait(`也许吧`, true);
    era.drawLine({ content: '观众席的另一端' });
    await era.printAndWait(
      `紧紧握住来之不易的马票,马娘紧紧地盯着丸善斯基的身影。`,
    );
    await era.printAndWait(`然而，`);
    await say_by_passer_by(`马娘`, `所以我的存在意义是......`);
    await era.printAndWait(`不小心下意识将自己与她对比了。`);
    await say_by_passer_by(`马娘`, `啊！不小心将心底里的话说出来了。`, true);
    await say_by_passer_by(`马娘`, `可是为什么，心会这么痛呢？`, true);
    await era.printAndWait(`我与你的距离，是用尽全力也触摸不到的程度。`);
    await say_by_passer_by(`马娘`, `为什么......`);
    await era.printAndWait(
      `不甘心的咬着嘴唇，将手中紧握的马票搓成了一个圆球。`,
    );
    await say_by_passer_by(
      `马娘`,
      `为什么我无法从你的脚步之中看到希望呢`,
      true,
    );
    await say_by_passer_by(`马娘`, `不对！我在想什么。`);
    await era.printAndWait(
      `似乎有什么珍贵的东西碎裂了，再也找不回来了。马娘重新看向了丸善斯基的身影。`,
    );
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('春季S后・迷茫之始', chara_talk);
    await era.printAndWait(
      `没有任何意外发生，这场比赛是丸善斯基的碾压式胜利。`,
    );
    await era.printAndWait(`因为同时代的马娘纷纷避战的缘故。`);
    await era.printAndWait(
      `作为参赛对手的马娘们，其中最好的一位也只是在一场不知名的G3取胜的程度罢了。`,
    );
    await era.printAndWait(`这场胜利，真的能感受到快乐吗？`);
    await say_by_passer_by(`解说`, `丸善斯基！丸善斯基冲线了！`);
    await say_by_passer_by(`解说`, `大差！是丸善斯基压倒性的胜利！`);
    await chara_talk.say_and_wait(`......`);
    chara_talk.print(`这场胜利，真的能感受到快乐吗？`);
    await me.say_and_wait(`${chara_talk.name}？`);
    await say_by_passer_by(`粉丝A`, `丸善斯基！丸善斯基！`);
    await say_by_passer_by(`粉丝B`, `我就知道肯定是丸善斯基的胜利！`);
    await say_by_passer_by(
      `粉丝A`,
      `不愧是被称为超级跑车的马娘！我果然没有看错！`,
    );
    chara_talk.print(`有点疲惫啊。`);
    await say_by_passer_by(
      `粉丝A`,
      `就这样会压倒性的实力把那些弱者统统消灭吧！`,
    );
    chara_talk.print(`在准备室换决胜服时也是。`);
    await say_by_passer_by(`赛马娘A`, `反正都赢不了，还用那么大力气干什么。`);
    await say_by_passer_by(
      `赛马娘A`,
      `所谓的马娘以奔跑作为偶像的传统，早该被主播淘汰了。`,
    );
    await say_by_passer_by(
      `赛马娘A`,
      `干脆顺应潮流，转型当主播，就这么退役吧。`,
    );
    chara_talk.print(`演出结束后，路过窃窃私语的马娘们。`);
    await say_by_passer_by(
      `赛马娘B`,
      `赛马娘这个职业，反正都只是那些有天赋的人的狩猎场。`,
    );
    await say_by_passer_by(
      `赛马娘B`,
      `对于像我们这样的普通人，比赛不过只是一次又一次沦为陪衬的笑料罢了，真是恶心。`,
    );
    await say_by_passer_by(
      `赛马娘B`,
      `所以说啊，能在草场上感受到快乐的人，实在无法理解。`,
    );
    await say_by_passer_by(
      `赛马娘B`,
      `呼啊，当时的自己居然还在憧憬当赛马娘，现在想想只是羞耻。`,
    );
    era.drawLine();
    await me.say_and_wait(`${chara_talk.name}？`);
    await era.printAndWait(`${chara_talk.name}以绝对优势充裕的取得了连胜。`);
    await era.printAndWait(
      `虽然只是皋月赏的前哨战，不过接下来的皋月赏恐怕也不存在什么问题吧。`,
    );
    await era.printAndWait(`这么想着，你推开了房门。`);
    await chara_talk.say_and_wait(`啊，训练员君是来接我的吗？`);
    await era.printAndWait(`丸善斯基看上去与平时几乎没有区别。`);
    await chara_talk.say_and_wait(`姐姐我的表现怎么样？`);
    era.printButton(`嗯，非常不错。`, 1); //be1
    era.printButton(`......丸善斯基。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`嗯嗯，我也这么想的哦。`);
      await chara_talk.say_and_wait(`嗯——接下来的话，去哪里吃比较好呢？`);
      await chara_talk.say_and_wait(`训练员君有什么推荐的吗？`);
      await me.say_and_wait(`去尝一下萨利亚吧，那里的食物比较好吃。`);
      await chara_talk.say_and_wait(`嗯！那接下来一起去尝尝看吧。`);
      new EduEventMarks(4).add('Self_contempt');
      era.set('flag:强制BE', 4);
    } else {
      await chara_talk.say_and_wait(`哦呀，训练员君怎么了？`);
      await me.say_and_wait(`明天晚上，你有空吗？`);
      await me.say_and_wait(`我有些话想跟你说，就在天台上面谈吧。`);
      await chara_talk.say_and_wait(`有什么事情不能在这里聊吗？`);
      await me.say_and_wait(`抱歉，请允许我任性一次，拜托了。`);
      await chara_talk.say_and_wait(`欸？训练员君？`);
      await me.say_and_wait(`拜托了。`);
      await era.printAndWait(`你深深低下了头。`);
      await chara_talk.say_and_wait(`居然做到这种程度......`, true);
      await chara_talk.say_and_wait(`既然${me.actual_name}都这么说了。`);
      await chara_talk.say_and_wait(`我明白了。`);
      await era.printAndWait(`${chara_talk.name}带着有点忧虑的表情看着你。`);
      await me.say_and_wait(`那么，明天晚上9点，在学校天台上见。`);
      await era.printAndWait(
        `背后已经被汗水打湿，虽然已经做好了最坏的打算，但能得到丸善斯基的同意，还是让你长呼了一口气。`,
      );
      await chara_talk.say_and_wait(`我做了让训练员君受伤的事情吗？`, true);
    }
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('皐月賞后・如火焰一样美丽的奔跑', chara_talk);
    await era.printAndWait(`胜者舞台\n`);
    await era.printAndWait(`工作人员们为了确保胜者舞台装置正常而忙碌着。`);
    await say_by_passer_by(
      `工作人员A`,
      `胜者舞台马上就要开始了，最后一次调试！`,
    );
    await say_by_passer_by(
      `工作人员B`,
      `最后再检查一遍气柱机位置！果然，我就知道是丸善斯基会获胜。`,
    );
    await say_by_passer_by(`工作人员B`, `之前出道战的时候我就开始关注她了。`);
    await say_by_passer_by(
      `工作人员C`,
      `灯光向左再打一点！啊，我是在希望杯开始关注的。`,
    );
    await say_by_passer_by(
      `工作人员C`,
      `虽然之前就听说了有个跑得非常厉害的马娘，但不是实地观看还真无法了解。`,
    );
    await say_by_passer_by(
      `工作人员B`,
      `准备就绪！接下来的东京优骏胜者肯定还会是她！`,
    );
    await say_by_passer_by(`工作人员A`, `全体都有！各就位！预备！`);
    await era.printAndWait(`如预料一般，丸善斯基取得了胜利。`);
    await era.printAndWait(
      `不论是最后冲线的刹那，还是在胜者舞台中央的表演，俘获了众多粉丝的丸善斯基。`,
    );
    await era.printAndWait(`带着满足的笑容回到了休息室。`);
    era.printButton(`辛苦了，演出很精彩。`, 1);
    await era.input();
    await era.printAndWait(
      `轻轻脱下丸善斯基的长靴，从脚踝开始一直到大腿，小心翼翼控制着按摩的力度。`,
    );
    await me.say_and_wait(
      `该说不愧是王道路线的第一场吗？不管是新闻发布会，还是之后的比赛与胜者舞台，都不是之前参加的同为G1的朝日杯可比的。`,
    );
    await me.say_and_wait(`之后还会遇到比这更加盛大的赛事，丸善斯基——`);
    await era.printAndWait(
      `在按摩了大约五分钟左右，十指轻轻按压大腿内侧，一遍观察着丸善斯基的反应一遍继续着对话。`,
    );
    await chara_talk.say_and_wait(
      `嗯~谢谢训练员君这么关心了，与其说累到几乎动不了，姐姐我可是从精神到身体都满足了呢。`,
    );
    await era.printAndWait(
      `一边露出了笑容的丸善斯基不时的传出了小小的喘息声。`,
    );
    await chara_talk.say_and_wait(
      `像这样让更多的马娘们看到我的背影，她们一定也会憧憬着在赛场上奔跑的样子吧。`,
    );
    await chara_talk.say_and_wait(
      `然后，在努力训练的过程之中，慢慢发现奔跑的快乐。`,
    );
    await chara_talk.say_and_wait(
      `这样的话，我就能看着后辈们追赶着我的背影努力的样子而感到开心了。`,
    );
    await era.printAndWait(
      `丸善斯基那因为微弱的痛苦与稍稍的酥麻感而显得额外明亮的眼睛直直的盯着你看。`,
    );
    await me.say_and_wait(
      `嗯，为了一个月后的东京优骏，接下来这段时间要提高耐力才行了。`,
    );
    await chara_talk.say_and_wait(`嗯——接下来去哪里庆祝才好呢？`);
    await era.printAndWait(
      `按摩结束之后，似乎意犹未尽的丸善斯基在座位上发出了满足的感叹声。`,
    );
    await chara_talk.say_and_wait(`高档餐厅？还是亲民的赛利亚？还是说`);
    era.printButton(`干脆在训练室庆祝吧！`, 1);
    await era.input();
    await me.say_and_wait(`多点一份披萨和饮料，然后邀请后辈们一起庆祝。`);
    await chara_talk.say_and_wait(
      `就按训练员君说的那样，开始期待晚上的派对了呢♪`,
    );
    await era.printAndWait(
      `穿起靴子，重新适应着走路感觉的少女期待着之后的庆典。`,
    );
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日本德比后・抉择开始', chara_talk);
    await era.printAndWait(`没有任何意外，丸善斯基漂亮的取得了德比的优胜。`);
    await era.printAndWait(
      `当她冲线的那一刻，如雷鸣般的喝彩声从观众席上传来。`,
    );
    await era.printAndWait(`休息室\n`);
    await chara_talk.say_and_wait(`呼~不愧是经典三冠之中最受瞩目的赛事呢。`);
    await chara_talk.say_and_wait(`参加德比的赛马娘们个个都是赛马娘的精英呢。`);
    era.printButton(`虽然跑道是在德比最外侧，但是在这种不利条件下。`, 1);
    await era.input();
    era.printButton(`还能漂亮赢下德比的丸善斯基才是最厉害的。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `其实也没那么厉害啦⭐只是和往常一样，不对，也就比之前稍稍跑得更快了一点的程度呢。`,
    );
    await chara_talk.say_and_wait(`接下来的话，嗯——果然还是。`);
    era.printButton(`要不要去凯旋门？`, 1);
    era.printButton(`果然还是有马纪念吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`诶？凯旋门吗？`);
      await chara_talk.say_and_wait(
        `......果然和训练员君在一起每次都能感受到惊喜呢~`,
      );
      await chara_talk.say_and_wait(
        `如果是凯旋门的话，说不定能在那里遇到世界级的赛马娘呢。`,
      );
      await chara_talk.say_and_wait(`嗯——怎么办才好呢？`);
    } else {
      await chara_talk.say_and_wait(`对吧？果然还是有马纪念。`);
      era.printButton(`我也期待着丸善斯基能在有马纪念上玩得开心。`, 1);
      await era.input();
      await chara_talk.say_and_wait(`训练员君就好好看着吧。`);
    }
    await chara_talk.say_and_wait(`啊，差不多该去胜者舞台了。`);
    await chara_talk.say_and_wait(`跟训练员君在一起，时间总是过得很快呢。`);
    await me.say_and_wait(
      `在舞台之上也要把这份感情让一直支持着丸善斯基的粉丝们感受到哦！`,
    );
    await chara_talk.say_and_wait(`嗯。要让一直支持着的粉丝们好好看着我才行。`);
    await chara_talk.say_and_wait(`差不多该出发了。`);
    await era.printAndWait(`丸善斯基离开了休息室。`);
    await me.say_and_wait(`......`);
    await era.printAndWait(`把休息室门关上后，房间里只剩下自己一个人了。`);
    await me.say_and_wait(`差不多该下定决心了吧。`, true);
    await era.printAndWait(`正准备出发的时候。`);
    await era.printAndWait(`咚咚咚`);
    await era.printAndWait(`真是的，又想到什么新奇的潮流了吗？`);
    await era.printAndWait(`一边苦笑着一边打开了休息室的门。`);
    await me.say_and_wait(`丸善——`);
    await era.printAndWait(`门口留下了一张纸条。`);
    await say_by_passer_by(
      `马娘`,
      `丸善前辈，我有些疑问想要问你，如果可以的话，明天晚上可以到空教室里见面吗？`,
    );
    await era.printAndWait(`你决定`);
    era.printButton(`告诉丸善斯基`, 1); //NE
    era.printButton(`代替丸善斯基前去`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await me.say_and_wait(`有点头疼啊，是给丸善斯基的。`);
      await me.say_and_wait(`虽然也想自己去看看，不过还是交给她比较好吧？`);
      await era.printAndWait(
        `等到丸善斯基回来后，你将这张纸条上的事情告诉了她。`,
      );
      event_marks.happiness_day++;
      era.set('flag:强制BE', 4);
    } else {
      await era.printAndWait(
        `环顾四周无人后，你将纸条捡起，然后放进了口袋之中。`,
      );
      await me.say_and_wait(`......`);
      await era.printAndWait(`为什么要捡起这张纸条，连自己也不清楚。不过——`);
      await me.say_and_wait(`总觉得，如果就这么错过的话。`);
      await me.say_and_wait(`我可能会失去什么。`);
      await me.say_and_wait(`......抱歉，丸善斯基。`);
      await me.say_and_wait(`我背叛了和你的约定，是个罪人。`);
    }
  } else if (
    extra_flag.race === race_enum.radi_shi &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日经广播赏后・迷茫之路', chara_talk);
    await era.printAndWait(`${chara_talk.name}取得了比赛的胜利。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }我把胜利带回来了呦♪`,
    );
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
      `我先去准备胜者舞台了，虽然有点不舍不过${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }要好好地将我的身影映在心底哦。`,
    );
    await era.printAndWait(
      `在胜者舞台结束后，邀请你一起在夜晚的山道上疾驰的丸善斯基，稍微回复了以往的神情。`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马纪念后・希望的辉光', chara_talk);
    await era.printAndWait(
      `在有马纪念上披荆斩棘战胜了众多强敌后，${chara_talk.name}取得了有马纪念的胜利`,
    );
    await say_by_passer_by(
      `记者A`,
      `恭喜${chara_talk.name}小姐取得了有马纪念的胜利，战况真是激烈呢。`,
    );
    await chara_talk.say_and_wait(
      `是啊，选手们个个都是实力派呢，拜此所赐我也跑的很开心呢`,
    );
    await say_by_passer_by(`记者A`, `${chara_talk.name}有什么感想吗？`);
    await chara_talk.say_and_wait(
      `如果能让更多的${chara_talk.get_uma_sex_title()}们看到我的背影然后产生追逐的想法就好了`,
    );
    await say_by_passer_by(`记者A`, `真是非常远大的理想呢。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}这边`,
    );
    await era.printAndWait(
      `${chara_talk.name}看到你的到来后将你拉到了记者面前。」`,
    );
    await say_by_passer_by(
      `记者A`,
      `请问训练员先生对${chara_talk.name}获胜有什么感谢吗？`,
    );
    era.printButton(`比起胜利与否，${chara_talk.name}能够高兴才是最重要的`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }真会说话~不过，没有${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }的鼓励的话，恐怕我也无法取得胜利呢。`,
    );
    await say_by_passer_by(
      `记者A`,
      `真是令人感动的羁绊，感谢两位接受我的采访。`,
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
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，在这边我在这边~`,
    );
    await era.printAndWait(
      `轻轻搀扶着美丽的${
        chara_talk.get_teen_sex_title
      }，在这场战斗之中与皇帝领域之前的对决消耗了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }过多的体力。`,
    );
    await era.printAndWait(
      `但${chara_talk.name}似乎从未如此高兴过，在看台上欢呼着的后辈们，还是在最后冲刺时观众席的全体起立。`,
    );
    await chara_talk.say_and_wait(
      `差一点就被鲁铎象征追上了呢，真想看着${
        chara_talk.sex_code - 1 ? '她' : '他'
      }是如何奔跑的`,
    );
    era.printButton(
      `${chara_talk.name}的背影一定也传达到${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的心里了呢`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }......只要一会就好，能让我多依靠你一会吗？`,
    );
    await era.printAndWait(
      `轻轻抱起疲惫的${chara_talk.get_teen_sex_title}，像是守护着娇弱公主的骑士，怕打碎世界上最珍贵的珠宝，一步步回到了训练室。希望之风充斥着整片赛马场。`,
    );
    era.drawLine();
    await chara17_talk.say_and_wait(`……太好了。`);
    await era.printAndWait(
      `皇帝目不斜视地看着你们远去的背影， ${
        chara_talk.sex_code - 1 ? '她' : '他'
      }舔舐着自己的牙齿，一种狂喜油然而生。`,
    );
    await era.printAndWait(
      `皇帝未竟的事业太多，故仍需证明自己——证明${
        chara_talk.sex_code - 1 ? '她' : '他'
      }独一无二，不止无敌于同世代，还能击溃过往的荣耀、镇压未来的荣光。`,
    );
    era.println();
    await chara17_talk.say_and_wait(`丸善，你最好真能从一而终地贯彻你的理念。`);
    await chara17_talk.say_and_wait(
      `还有——不要以王道自居。开拓者应当只受苦难，你伟大，便倒下，成为后来者向上的阶梯。`,
    );
    await chara17_talk.say_and_wait(
      `为了日本赛${chara_talk.get_uma_sex_title()}的未来——为了一个更强的皇帝。`,
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
    era.drawLine({ content: '准备室内' });
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，看到我精彩的背影了吗？`,
    );
    await era.printAndWait(
      `安田纪念上，后辈的${chara_talk.get_uma_sex_title()}们似乎都受到了${
        chara_talk.name
      }背影的激励，开始以${
        chara_talk.sex_code - 1 ? '她' : '他'
      }为目标不断向前奔跑着`,
    );
    await chara_talk.say_and_wait(
      `后辈们也变得很厉害了呢，说不定哪天${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我也要被后辈们超越然后咬着手帕一脸嫉妒地瞪着领奖台上的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们看呢`,
    );
    await chara_talk.say_and_wait(
      `为了安抚${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我受伤的心灵，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }今天和我一起睡吧`,
    );
    await me.say_and_wait(`比起这个${chara_talk.name}似乎很享受跑步的快乐呢`);
    await chara_talk.say_and_wait(
      `诶，居然岔开话题，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }对我的态度也变得这么冷淡了。`,
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
      `${me.actual_name}回忆起了松软奶酪与浇灌着蜂蜜的面包发出的香甜气息，以及${chara_talk.name}在晴朗的天空之下露出的笑容。`,
    );
    era.printButton(`${chara_talk.name}的厨艺一直都是这么好呢`, 1);
    await era.input();
    await era.printAndWait(
      `像是回忆起了什么一样，微笑之中露出了狡黠表情的${chara_talk.name}轻轻摆动着尾巴。`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }接下来也一直做我的试吃员吧。`,
    );
    await me.say_and_wait(`说起来的话，我明天想尝尝看中华料理。`);
    await chara_talk.say_and_wait(
      `呵呵♪${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }就拭目以待吧。`,
    );
    era.drawLine();
    await era.printAndWait(
      `等到晚上${chara_talk.name}从厨房将做好的包菜炒肉端上来之后，尚未动筷，那鲜美的气味便急不可耐的从鼻腔之中钻入，搅的馋虫从胃中勾了出来。`,
    );
    await era.printAndWait(
      `等到动筷之时，夹起一块猪肉，那嫩滑的感觉像是夹起了一块豆腐。放入口中，含有菜汁的猪肉在口中迸开，让人恨不得将舌头都吃下去。`,
    );
    await chara_talk.say_and_wait(`味道怎么样？`);
    await era.printAndWait(
      `看着正大块朵颐的${me.actual_name}，${chara_talk.name}露出了满意的笑容。`,
    );
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
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `......叫我露娜就好了,${chara_talk.name}${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }。`,
    );
    await chara_talk.say_and_wait(`......所以天空之上太阳消失了吗？`);
    await era.printAndWait(
      `一望无际的金色草原，金黄色的银杏叶在温柔之风的吹拂下组成了黄金色的海洋纷纷落下。`,
    );
    await era.printAndWait(`月亮在这片理想乡之中升起。`);
    await era.printAndWait(`————太阳却不见踪影。`);
    await era.printAndWait(
      `然而三女神依然温柔的注视着${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们的孩子。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `这里是所有${chara_talk.get_uma_sex_title()}的理想乡。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `这是一个崭新的世界。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `恭喜你，${chara_talk.name}${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }，这场对决之中是你胜利了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `接下来的话，恐怕皇帝就会消失了吧。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `不过，请不用悲伤，${chara_talk.sex_code - 1 ? '她' : '他'}只是太累了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `背负着赛${chara_talk.get_uma_sex_title()}未来的十字架过于沉重，现在的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }需要好好休息一段时间了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `那么出发吧，三女神们在等着你。`,
    );
    await era.printAndWait(
      `自称为露娜的${chara_talk.get_teen_sex_title}消失了，${chara_talk.name}被温柔之风带到了三女神的面前。`,
    );
    await chara341_talk.say_and_wait(`亲爱的孩子，我知道你现在有很多想问的。`);
    await chara342_talk.say_and_wait(`不过在此之前，请让我对你表示祝贺。`);
    await chara342_talk.say_and_wait(
      `这里是所有领悟领域的${chara_talk.get_uma_sex_title()}最后都会到达的地方`,
    );
    await chara340_talk.say_and_wait(
      `也是${chara_talk.get_uma_sex_title()}们最后会到达的温柔乡。`,
    );
    await chara341_talk.say_and_wait(
      `那么，作为第一位到达伊甸的赛${chara_talk.get_uma_sex_title()}，你有什么希望实现的愿望吗？`,
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
      `作为同样熟练掌握领域的${chara_talk.get_uma_sex_title()}，二人之间的精彩战斗深深影响了之后的${chara_talk.get_uma_sex_title()}们。`,
    );
    await era.printAndWait(`然而在最后冲过终点之后，两人同时倒在地上昏迷。`);
    await era.printAndWait(`颁奖大赛也不得不暂时中断。`);
    era.drawLine();
    await chara_talk.say_and_wait(`————唔，这里是？`);
    await era.printAndWait(`陌生的天花板，以及守候在旁边的${me.actual_name}。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`,
    );
    era.printButton(`${chara_talk.name}？${chara_talk.name}你终于醒了！`, 1);
    await era.input();
    await era.printAndWait(
      `看着喜极而泣的${me.actual_name},${chara_talk.name}露出了疑惑的表情。`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}我睡了多久了？`,
    );
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
      `听着你们之间莫名电波的话语，${me.actual_name}陷入了疑惑之中`,
    );
    await chara_talk.say_and_wait(`那么接下来这段时间请多指教了，露娜♪`);
    await era.printAndWait(
      `温柔之风吹拂了整个世界，在赛${chara_talk.get_uma_sex_title()}们的心中留下了希望的背影。`,
    );
    await era.printAndWait(`世界，悄悄变得更加温柔一点了。`);
    era.drawLine({ content: '一个月后·特雷森学院天台' });
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
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，最喜欢你了♪`,
    );
    await era.printAndWait(`二人在天台之上接吻。`);
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', chara_talk);
    await chara_talk.say_and_wait(
      `victory!victory！胜利了哦，训练员♪第一名果然不一样呢，内心的兴奋完全停不下来啊`,
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
        `${chara_talk.name}把${
          chara_talk.sex_code - 1 ? '她' : '他'
        }最喜欢的椰果饮料一口气喝完了！`,
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
        `后来你陪${chara_talk.name}去海边兜风，直到${
          chara_talk.sex_code - 1 ? '她' : '他'
        }尽兴为止才回家。`,
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
