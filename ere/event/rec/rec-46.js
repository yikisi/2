const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const { add_event, cb_enum } = require('#/event/queue');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const EventMarks = require('#/data/event/event-marks');

/**
 * 醒目飞鹰的招募事件，id=46
 *
 * @author 黑奴一号
 */
module.exports = {
  /**
   * @param {number} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    const chara37_talk = get_chara_talk(37),
      chara_talk = get_chara_talk(46),
      me = get_chara_talk(0);
    switch (stage_id) {
      case event_hooks.recruit:
        await era.printAndWait(
          `在某个令人放松的黄昏时，正打算离开校门的你突然想起自己遗漏了某件物品在训练室之中。`,
        );
        await era.printAndWait(
          `在团队实习的时候就一直丢三落四的习惯到现在作为普通训练员独立出来还是没有改掉。`,
        );
        await era.printAndWait(`在回训练室的路上被美妙的歌声吸引。`);
        await era.printAndWait(`循着声音的轨迹来到了被人遗忘的空训练室中。`);
        await era.printAndWait(`小小的马娘在训练室中练习着歌曲。`);
        await era.printAndWait(
          `似乎是全身心投入进了音乐的世界，对你的到来没有一丝注意。`,
        );
        await era.printAndWait(`一曲结束，被清澈歌曲感动的你拍手作为赞叹。`);
        await era.printAndWait(`被发现的马娘后退了一步像是害怕的样子。`);
        await era.printAndWait(`想上前安抚时却被重重推开后逃走了。`);
        await era.printAndWait(`拾起散落一地的纸张时发现了飞鹰子的名字。`);
        await era.printAndWait(`第二天回到训练室时发现了少女的身影。`);
        await era.printAndWait(`似乎是想要回之前自己写下的歌词。`);
        await era.printAndWait(`在让对方坐下喝下茶水后，送还了歌词。`);
        await era.printAndWait(`像逃跑一样的少女吸引了你的注意。`);
        await era.printAndWait(`于训练场看到了对方执着于草地的身影。`);
        await era.printAndWait(`交谈几句后感受到了她外表之下燃烧的火焰。`);
        await era.printAndWait(`第二天训练室中收到了她的亲笔信。`);
        await era.printAndWait(`在之前的空教室中两人谈论了理想与未来。`);
        await era.printAndWait(`最后签订了契约。`);

        era.printButton(`梦中的，合适的马娘在何处呢？`, 1);
        await era.input();
        await era.printAndWait(
          `看着第三个婉拒契约的马娘，（玩家名）还是忍不住叹了一口气`,
        );
        await me.say_and_wait(
          `不过想想也是，比起我这样没什么经验的普通训练员，将目标瞄准那些实力强大的团队才是最好的`,
        );
        await era.printAndWait(
          `像是自嘲摇了摇头，（玩家名）自言自语地收拾着散落了一地的纸张。`,
        );
        await me.say_and_wait(`......先回到训练室再说吧`, true);
        await era.printAndWait(`放学后的特雷森，马娘们有说有笑地从身旁经过。`);
        await me.say_and_wait(
          `虽说是以实现梦想而创立的特雷森，不过似乎我的梦想还是没看到头绪呢。`,
          true,
        );
        await era.printAndWait(
          `将文件重新放回文件夹之中，除了寂寥的夕阳洒下的光辉作为陪伴`,
        );
        await me.say_and_wait(
          `美丽又充满智慧的三女神大人啊，请赋予我勇气让我找到合适的马娘吧。`,
        );
        await era.printAndWait(`将训练室关好门后，正准备掏出耳机带上时，`);
        await chara_talk.say_and_wait(`♪♪♪♪`);
        await era.printAndWait(`美丽的歌声像是从遥远的地方传来一样。`);
        await me.say_and_wait(`这一定是三女神大人的指引！`);
        await era.printAndWait(
          `不知从何而来的热情瞬间使你振奋起来，将耳机扔回口袋后，向着音乐指引的大致方向慢慢走了过去。`,
        );
        await era.printAndWait(`啪嗒啪嗒，教学楼里回响着美妙的歌声。`);
        await me.say_and_wait(`真想见识一下声音的主人呢。`, true);
        await era.printAndWait(`跟着歌曲的节拍（玩家名）也蹦蹦跳跳地走着`);
        await era.printAndWait(
          `滴答滴答，清澈而充满希望的声音吸引着某名兴奋的游人`,
        );
        await me.say_and_wait(`唔，究竟在哪里呢？`, true);
        await era.printAndWait(
          `虽然找过了靠近歌声的每个房间，但其中都没看到诱人歌声的主人。`,
        );
        await me.say_and_wait(`也许闭上双眼跟着旋律走？`, true);
        await era.printAndWait(`找不到正确位置的你干脆闭上了双眼。`);
        await me.say_and_wait(`如果没错的话，应该就在这边！`, true);
        await era.printAndWait(
          `强行压下烦躁的欲望，（玩家名）向着笃定的位置踏出了脚步——`,
        );
        await me.say_and_wait(`......是这里吗？`, true);
        era.drawLine();
        await era.printAndWait(`在教学楼偏僻的一处空教室，你停下了脚步。`);
        await era.printAndWait(
          `也许这间教室曾经有过辉煌的时刻,但现在只不过是在夕阳的注视下等待着注定的凋零罢了。`,
        );
        await me.say_and_wait(
          `如果就这么贸然进去的话，会被里面的人察觉到吧`,
          true,
        );
        await era.printAndWait(`放在生锈的门把手上的手迟疑了。`);
        await me.say_and_wait(`悄悄地露出一丝门缝吧`, true);
        await era.printAndWait(`为了不被里面的人所察觉，悄悄的露出一丝门缝。`);
        await era.printAndWait(`顺着门缝的视线向内窥去——`);
        await era.printAndWait(
          `——梳着双马尾的女孩子握着手中的纸张蹦蹦跳跳的唱着歌`,
        );
        await me.say_and_wait(`这就是青春吗？`, true);
        await era.printAndWait(`高中时的自己也曾像她这样，对未来充满着希望。`);
        await me.say_and_wait(`————不，这样就好了`);
        await era.printAndWait(
          `为了不再回忆那段痛苦的回忆，低声对着自己安慰着。`,
        );
        await me.say_and_wait(`已经结束了`);
        await era.printAndWait(
          `无意识地推开了生锈的大门，与房间的主人四目相对时，才想起自己是在偷窥的事实。`,
        );
        await chara_talk.say_and_wait(`唔呀啊啊啊啊啊啊！`);
        await era.printAndWait(
          `尖锐的声音让你想起了防空警报的声音，也许她会很适合唱高音？`,
        );
        await me.say_and_wait(`——唔`);
        await era.printAndWait(
          `尽管尽力躲避着飞来的纸张，但还是被其中伴随着尖锐爆鸣声的纸张所击中`,
        );
        await me.say_and_wait(`那名马娘人呢？`);
        await era.printAndWait(`似乎是趁着你被击中的瞬间迅速逃跑了。`);
        await me.say_and_wait(`算了，还没问————等一下`);
        await era.printAndWait(`似乎慌不择路的马娘将自己编写的歌曲扔了过来。`);
        await me.say_and_wait(`醒目飞鹰？`);
        await era.printAndWait(
          `最显眼的正上方好好写上了自己的名字以及可爱的头像。`,
        );
        await me.say_and_wait(`先收起来找机会去问一下那名马娘的事情吧。`);
        await era.printAndWait(`将散落的纸张收起之后，你关上了教室的大门。`);
        era.drawLine({ content: '第二天' });
        await era.printAndWait(
          `当你打着哈欠准备今天的马娘劝诱时，梳着双马尾的少女在你的门前焦急得等待着。`,
        );
        await era.printAndWait(
          `似乎是听到了你的脚步声一样，那名马娘将头转向了你`,
        );
        await chara_talk.say_and_wait(`请...请问是（玩家名）先生吗？`);
        era.printButton(`是的，我就是（玩家名）`, 1);
        await era.input();
        await era.printAndWait(`被认出来的你干脆地承认了`);
        await chara_talk.say_and_wait(`呃...嗯，那个可以不可以......`);
        era.printButton(`总之先到训练室再聊吧`, 1);
        await era.input();
        await era.printAndWait(
          `拿出钥匙对准门锁，余光中的醒目飞鹰似乎在犹豫着要不要说出来。`,
        );
        await me.say_and_wait(`请坐，我来收拾一下。`);
        await era.printAndWait(
          `（玩家名）轻轻拍了拍沙发的坐垫抚去上面的灰尘，将原本作为劝诱马娘使用的果汁拿出来招待客人。`,
        );
        await me.say_and_wait(
          `抱歉，准备仓促，只有果汁了，如果还有想喝的饮料的话我去买。`,
        );
        await era.printAndWait(
          `像是被你的举动吓到了一样，醒目飞鹰战战栗栗地接过了果汁。`,
        );
        await chara_talk.say_and_wait(`不，不用......总之谢谢了`);
        await era.printAndWait(
          `坐在沙发上的醒目飞鹰接过了果汁，放在了桌子上。`,
        );
        await era.printAndWait(
          `等待着她回复的你和坐立不安的醒目飞鹰之间弥漫着沉默的氛围。`,
        );
        await chara_talk.say_and_wait(`......`);
        await chara_talk.say_and_wait(`......那个，训练员先生`);
        await era.printAndWait(
          `似乎是再也无法忍受这种尴尬的氛围，她终于向你搭话`,
        );
        await chara_talk.say_and_wait(`还记得上次见面的事情吗？`);
        await era.printAndWait(
          `为了掩盖心中的紧张，她拆开了塑料包装拿起了吸管小口小口地吮吸着饮料`,
        );
        await chara_talk.say_and_wait(
          `就是之前和训练员先生见面的时候，我不小心把偶像...不对，是我的纸张...不对，是歌词不小心撒在了空教室里，然后当我回去的时候发现纸张都被人收拾走了所以训练员先生请把我的东西还给我。`,
        );
        await era.printAndWait(
          `猛吸了一大口果汁后像是下定了决心一样强迫着自己说出了一大段话`,
        );
        await chara_talk.say_and_wait(`我说的是不是太快了？`);
        await era.printAndWait(
          `似乎没有等到预料中的反应，偷偷观察着你的醒目飞鹰被眼前的纸张弄得不知所措。`,
        );
        await chara_talk.say_and_wait(`谢谢，就是这个！啊，不好！`);
        await era.printAndWait(
          `迫不及待接过你手中纸张的醒目飞鹰因为过于急切不小心又将纸张散落了一地。`,
        );
        await chara_talk.say_and_wait(`又给训练员先生添麻烦了，实在抱歉！！`);
        await era.printAndWait(
          `被突然的意外场面吓得不知所措的醒目飞鹰匆匆道歉后打算低头捡起纸张。`,
        );
        await me.say_and_wait(`竖起的尾巴真可爱`, true);
        await chara_talk.say_and_wait(`呀啊！`);
        await era.printAndWait(
          `希望尽快离开这个训练室的醒目飞鹰，与打算帮助她捡起散落纸张的（玩家名）不小心撞在了一起。`,
        );
        await era.printAndWait(
          `明明是好事却变成了这种像是会在轻小说里发生的场面一样。`,
        );
        await era.printAndWait(
          `因为疼痛无意识向后退了一步的醒目飞鹰不小心踩中了纸张，向后倒去的醒目飞鹰像是溺水的人试图抓住救命的稻草一样抓住了你的衣袖。`,
        );
        await era.printAndWait(`就结果而言变成了你试图推倒醒目飞鹰的样子。`);
        await me.say_and_wait(`唔，好近`, true);
        await era.printAndWait(
          `盯着你的眼睛看着的醒目飞鹰的脸逐渐变红，最后像是似乎能滴出水一样.....唔，为什么一直盯着我看？`,
        );
        await era.printAndWait(`急忙将手臂移开的你慌忙向她道歉。`);
        await chara_talk.say_and_wait(`......哎？`);
        await era.printAndWait(
          `似乎还没从之前的强烈冲击之中回过神来，在你试探性的向她问话之后才回过神。`,
        );
        await chara_talk.say_and_wait(`那个，训练员先生，我先走了。`);
        await era.printAndWait(
          `无视了不停道歉的你，匆匆鞠躬之后带着手稿离开了训练室。`,
        );
        await me.say_and_wait(`隐约有种还会见面的感觉`, true);
        era.drawLine({ content: '训练场' });
        await era.printAndWait(
          `带着例行检查是否有合适的马娘，你来到了训练场。`,
        );
        await me.say_and_wait(`接下来的是草地第三组吗？`, true);
        await era.printAndWait(
          `看着身边同样的训练员盯着马娘们的身影，你也将注意力集中于马娘们的身上`,
        );
        await me.say_and_wait(`醒目飞鹰吗？`, true);
        await era.printAndWait(
          `一种高兴的感觉从心底之中传来，也许是因为熟悉带来的安全感，你开始更加关注这名马娘的身影`,
        );
        await era.printAndWait(`无名训练员A「各就位，预备！」`);
        await era.printAndWait(`随着发令枪的响起，马娘们冲了出去。`);
        era.drawLine();
        await me.say_and_wait(`只有这种水平吗？`, true);
        await era.printAndWait(
          `看着最后一名冲线的醒目飞鹰耷拉着耳朵，你开始有些怀疑自己的判断了。`,
        );
        await me.say_and_wait(`我也许应该——`, true);
        await chara37_talk.say_and_wait(`请问是（玩家名）吗？`);
        await era.printAndWait(`黑色的马娘不知何时来到了你的身边。`);
        await chara37_talk.say_and_wait(
          `抱歉，忘了自我介绍，我是荣进闪耀，是醒目飞鹰的室友。`,
        );
        await chara37_talk.say_and_wait(
          `飞鹰同学似乎很在意你的样子，所以我有点好奇，之后可否在天台聊一下？`,
        );
        add_event(
          event_hooks.school_rooftop,
          new EventObject(46, cb_enum.recruit),
        );
        new EventMarks(0).add(event_hooks.school_rooftop);
        era.set('cflag:46:随机招募', 0);
        return true;
      case event_hooks.school_rooftop:
        if (era.get('flag:当前互动角色')) {
          add_event(event_hooks.school_rooftop, event_object);
          return false;
        }
        era.drawLine({ content: '天台' });
        await chara37_talk.say_and_wait(
          `原来如此，不是那种会占小马娘便宜的屑训练员，失礼了。`,
        );
        await era.printAndWait(`听完前因后果之后，黑色的马娘向你鞠躬道歉。`);
        await chara37_talk.say_and_wait(
          `作为补偿，如果有什么问题的话，可以向我询问。`,
        );
        era.printButton(`醒目飞鹰似乎不擅长草地，为什么还要坚持去跑草地？`, 1);
        await era.input();
        await era.printAndWait(
          `你将心中的疑问告诉了眼前的马娘，后者报以果然如此的神情。`,
        );
        await chara37_talk.say_and_wait(
          `这个问题相比我自己诉说的话，不如让飞鹰同学自己来回答的话会更好一点。`,
        );
        await era.printAndWait(`荣进闪耀扭头看向了天台的入口。`);
        await chara37_talk.say_and_wait(`差不多飞鹰同学也要到了。`);
        await chara_talk.say_and_wait(
          `闪耀同学，你说到天台来是......之前见过的（玩家名）先生吗？`,
        );
        await era.printAndWait(`小小的身影出现在了天台。`);
        await chara37_talk.say_and_wait(`恕我失礼了。`);
        await era.printAndWait(
          `荣进闪耀向你深深鞠躬之后来到了疑惑的醒目飞鹰旁边耳语几句后，便离开了天台。`,
        );
        era.printButton(`醒目飞鹰同学？`, 1);
        await era.input();
        await era.printAndWait(`只剩下了你们两个人站在天台上沉默对视着。`);
        await chara_talk.say_and_wait(`训练员先生，可以成为我的专属训练员吗？`);
        era.printButton(`为什么？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `......如果是训练员先生的话，说不定可以实现我的梦想。`,
        );
        era.printButton(`飞鹰同学的梦想是什么呢？`, 1);
        await era.input();
        await chara_talk.say_and_wait(`马娘偶像，成为闪闪发光的偶像。`);
        await era.printAndWait(`醒目飞鹰的游移不定的眼神现在直视着你。`);
        await chara_talk.say_and_wait(
          `而且训练员先生现在也因为找不到合适的马娘而苦恼吧？`,
        );
        await chara_talk.say_and_wait(`所以说，我是最适合的选择了。`);
        await me.say_and_wait(
          `飞鹰同学有闪耀的梦想是一件好事，不过我还有一个问题。`,
        );
        era.printButton(`为什么执着于草地？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `我希望能在最大的舞台之上演出，这样就能成为最闪耀的马娘了。`,
        );
        await me.say_and_wait(`但你看上去并不适合去跑草地，而且相比于草地。`);
        await era.printAndWait(`你看向了她纤细的腿部。`);
        await me.say_and_wait(`你更适合需要力量的泥地。`);
        await era.printAndWait(`醒目飞鹰似乎陷入了思索之中，你叹了口气`);
        await me.say_and_wait(
          `后天有场泥地的赛事，有空的话一起去感受一下泥地的气氛吧。`,
        );
        await era.printAndWait(`说完之后你便离开了天台。`);
        era.drawLine({ content: '泥地赛·观众席上' });
        await era.printAndWait(`观众「噢噢噢噢噢噢噢噢！」`);
        await era.printAndWait(
          `相比与草地赛事，泥地赛事的粉丝们似乎更加热情。`,
        );
        await chara_talk.say_and_wait(`原来泥地赛也会有这么多关注的粉丝们吗？`);
        await era.printAndWait(
          `像是被抛进了煮沸的开水之中，两人在沸腾的气氛中显得有些格格不入。`,
        );
        await me.say_and_wait(`看着这些出场的马娘们。`);
        await era.printAndWait(
          `即使是泥地赛事，马娘们执着的眼神却不输于草地的马娘们。`,
        );
        await era.printAndWait(
          `纵使是在泥土扬起的赛道之上，马娘们依然瞪着眼睛，紧紧地盯着最佳地位置。`,
        );
        await era.printAndWait(`生命在最艰难的时候反而会爆发出强烈的生命力。`);
        await era.printAndWait(
          `身旁的醒目飞鹰紧紧地盯着马娘们地身影，直至最后冲线为止才缓过神来。`,
        );
        await chara_talk.say_and_wait(`马娘们，原来这么闪耀吗？`);
        await era.printAndWait(`身旁的醒目飞鹰似乎下定了决心一样。`);
        await chara_talk.say_and_wait(`训练员先生，我决定了。`);
        await chara_talk.say_and_wait(`我要以泥地偶像的身份登上最大的舞台。`);
        await chara_talk.say_and_wait(`接下来请一直盯着飞鹰子看哦⭐`);
        await me.say_and_wait(`飞鹰子？`, true);
        era.drawLine({ content: '泥地选拔时' });
        await era.printAndWait(`泥地第三组的醒目飞鹰漂亮的取得了一着。`);
        await era.printAndWait(
          `关注着泥地赛事的训练员们纷纷试图招揽这颗闪耀的星星。`,
        );
        await chara_talk.say_and_wait(`训练员先生⭐`);
        await era.printAndWait(`她却飞扑到了你的身边。`);
        await era.printAndWait(`接下来的话，请多指教了！`);
        await era.printAndWait(`成功招募${chara_talk.name}了！`);
        new EventMarks(0).sub(event_hooks.school_rooftop);
        new EduEventMarks(46).add('after_recruit');
        era.set('cflag:46:招募状态', recruit_flags.yes);
        new EduEventMarks(46).add('beginning');
        add_event(event_hooks.week_end, new EventObject(46, cb_enum.edu));
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  },
};
