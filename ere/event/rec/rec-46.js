const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { say_by_passer_by } = require('#/utils/chara-talk-factory');
/**
 * 醒目飞鹰 - -招募
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
        await era.printAndWait(`是否跳过招募剧情？`);
        era.printButton(`是`, 1);
        era.printButton(`否`, 2);
        // eslint-disable-next-line no-case-declarations
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(
            `黄昏时刻正打算下班的${me.name}突然想起自己遗漏了某件物品在训练室之中。`,
          );
          await era.printAndWait(`但在回训练室的路上被歌声所吸引。`);
          await era.printAndWait(
            `${me.name}循着声音的轨迹来到了一间空置的训练室。`,
          );
          await era.printAndWait(
            `${chara_talk.get_uma_sex_title()}在训练室中练习着准备在出道战时歌唱的歌曲。`,
          );
          await era.printAndWait(
            `似乎是全身心投入进了音乐的世界，对${me.name}的到来没有一丝注意。`,
          );
          await era.printAndWait(`被歌曲所感动的${me.name}拍手作为鼓励。`);
          await era.printAndWait(
            `被发现的${chara_talk.get_uma_sex_title()}因为过于羞耻而逃跑。`,
          );
          await era.printAndWait(
            `拾起散落一地的纸张时发现了${chara_talk.get_uma_sex_title()}的属名。`,
          );
          await era.printAndWait(
            `第二天发现徘徊于训练室门口的${chara_talk.get_uma_sex_title()}。`,
          );
          await era.printAndWait(
            `在让对方坐下喝下茶水后，${me.name}送还了歌词。`,
          );
          await era.printAndWait(`像逃跑一样的少女吸引了${me.name}的注意。`);
          await era.printAndWait(`于训练场见到了最后一名的少女。`);
          await era.printAndWait(
            `对于更适合泥地而并非草地的${chara_talk.sex}却展示了出乎意料的强硬。`,
          );
          await era.printAndWait(
            `在同为室友且为好友的${chara_talk.get_uma_sex_title()}的关心下。`,
          );
          await era.printAndWait(`两人签订了契约。`);
          await era.printAndWait(`成功招募${chara_talk.name}了！`);
          new EventMarks(0).sub(event_hooks.school_rooftop);
          new FalconEduMarks().after_recruit++;
          era.set('cflag:46:招募状态', recruit_flags.yes);
          new FalconEduMarks().beginning++;
          add_event(event_hooks.week_end, new EventObject(46, cb_enum.edu));
          era.set('flag:物色对象', 0);
          return true;
        }
        await say_by_passer_by(
          `马娘`,
          `能得到训练员的邀请非常感谢，不过呢，我觉得自己的实力恐怕还是差了一点。`,
        );
        await era.printAndWait(
          `看着婉拒契约的${chara_talk.get_uma_sex_title()}，${
            me.actual_name
          }还是忍不住叹了一口气`,
        );
        await me.say_and_wait(
          `不过想想也是，比起我这样没什么经验的普通训练员，将目标瞄准那些实力强大的团队才是最好的`,
        );
        await era.printAndWait(
          `像是自嘲摇了摇头，${me.actual_name}自言自语地收拾着散落了一地的纸张。`,
        );
        await me.say_and_wait(`......先回到训练室再说吧`, true);
        await era.printAndWait(
          `放学后的特雷森，${chara_talk.get_uma_sex_title()}们有说有笑地从身旁经过。`,
        );
        await me.say_and_wait(
          `虽说是以实现梦想而创立的特雷森，不过似乎我的梦想还是没看到头绪呢。`,
          true,
        );
        await era.printAndWait(
          `将文件重新放回文件夹之中，除了寂寥的夕阳洒下的光辉作为陪伴`,
        );
        await me.say_and_wait(
          `美丽又充满智慧的三女神大人啊，请赋予我勇气让我找到合适的${chara_talk.get_uma_sex_title()}吧。`,
        );
        await era.printAndWait(`将训练室关好门后，正准备掏出耳机带上时，`);
        await chara_talk.say_and_wait(`♪♪♪♪`);
        await era.printAndWait(`美丽的歌声像是从遥远的地方传来一样。`);
        await me.say_and_wait(`这一定是三女神大人的指引！`);
        await era.printAndWait(
          `不知从何而来的热情瞬间使${me.name}振奋起来，将耳机扔回口袋后，向着音乐指引的大致方向慢慢走了过去。`,
        );
        await era.printAndWait(`啪嗒啪嗒，教学楼里回响着美妙的歌声。`);
        await me.say_and_wait(`真想见识一下声音的主人呢。`, true);
        await era.printAndWait(
          `跟着歌曲的节拍${me.actual_name}也蹦蹦跳跳地走着`,
        );
        await era.printAndWait(
          `滴答滴答，清澈而充满希望的声音吸引着某名兴奋的游人`,
        );
        await me.say_and_wait(`唔，究竟在哪里呢？`, true);
        await era.printAndWait(
          `虽然找过了靠近歌声的每个房间，但其中都没看到诱人歌声的主人。`,
        );
        await me.say_and_wait(`也许闭上双眼跟着旋律走？`, true);
        await era.printAndWait(`找不到正确位置的${me.name}干脆闭上了双眼。`);
        await me.say_and_wait(`如果没错的话，应该就在这边！`, true);
        await era.printAndWait(
          `强行压下烦躁的欲望，${me.actual_name}向着笃定的位置踏出了脚步——`,
        );
        await me.say_and_wait(`......是这里吗？`, true);
        era.drawLine();
        await era.printAndWait(
          `在教学楼偏僻的一处空教室，${me.name}停下了脚步。`,
        );
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
        await era.printAndWait(
          `高中时的自己也曾像${chara_talk.sex}这样，对未来充满着希望。`,
        );
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
          `尖锐的声音让${me.name}想起了防空警报的声音，也许${chara_talk.sex}会很适合唱高音？`,
        );
        await me.say_and_wait(`——唔`);
        await era.printAndWait(
          `尽管尽力躲避着飞来的纸张，但还是被其中伴随着尖锐爆鸣声的纸张所击中`,
        );
        await me.say_and_wait(`那名${chara_talk.get_uma_sex_title()}人呢？`);
        await era.printAndWait(`似乎是趁着${me.name}被击中的瞬间迅速逃跑了。`);
        await me.say_and_wait(`算了，还没问————等一下`);
        await era.printAndWait(
          `似乎慌不择路的${chara_talk.get_uma_sex_title()}将自己编写的歌曲扔了过来。`,
        );
        await me.say_and_wait(`${chara_talk.name}？`);
        await era.printAndWait(
          `最显眼的正上方好好写上了自己的名字以及可爱的头像。`,
        );
        await me.say_and_wait(
          `先收起来找机会去问一下那名${chara_talk.get_uma_sex_title()}的事情吧。`,
        );
        await era.printAndWait(
          `将散落的纸张收起之后，${me.name}关上了教室的大门。`,
        );
        era.drawLine({ content: '第二天' });
        await era.printAndWait(
          `当${
            me.name
          }打着哈欠准备今天的${chara_talk.get_uma_sex_title()}劝诱时，梳着双马尾的少女在${
            me.name
          }的门前焦急得等待着。`,
        );
        await era.printAndWait(
          `似乎是听到了${
            me.name
          }的脚步声一样，那名${chara_talk.get_uma_sex_title()}将头转向了${
            me.name
          }`,
        );
        await chara_talk.say_and_wait(
          `请...请问是${me.actual_name}${me.get_adult_sex_title()}吗？`,
        );
        era.printButton(`是的，我就是${me.actual_name}`, 1);
        await era.input();
        await era.printAndWait(`被认出来的${me.name}干脆地承认了`);
        await chara_talk.say_and_wait(`呃...嗯，那个可以不可以......`);
        era.printButton(`总之先到训练室再聊吧`, 1);
        await era.input();
        await era.printAndWait(
          `拿出钥匙对准门锁，余光中的${chara_talk.name}似乎在犹豫着要不要说出来。`,
        );
        await me.say_and_wait(`请坐，我来收拾一下。`);
        await era.printAndWait(
          `${
            me.actual_name
          }轻轻拍了拍沙发的坐垫抚去上面的灰尘，将原本作为劝诱${chara_talk.get_uma_sex_title()}使用的果汁拿出来招待客人。`,
        );
        await me.say_and_wait(
          `抱歉，准备仓促，只有果汁了，如果还有想喝的饮料的话我去买。`,
        );
        await era.printAndWait(
          `像是被${me.name}的举动吓到了一样，${chara_talk.name}战战栗栗地接过了果汁。`,
        );
        await chara_talk.say_and_wait(`不，不用......总之谢谢了`);
        await era.printAndWait(
          `坐在沙发上的${chara_talk.name}接过了果汁，放在了桌子上。`,
        );
        await era.printAndWait(
          `等待着${chara_talk.sex}回复的${me.name}和坐立不安的${chara_talk.name}之间弥漫着沉默的氛围。`,
        );
        await chara_talk.say_and_wait(`......`);
        await chara_talk.say_and_wait(
          `......那个，训练员${me.get_adult_sex_title()}`,
        );
        await era.printAndWait(
          `似乎是再也无法忍受这种尴尬的氛围，${chara_talk.sex}终于向${me.name}搭话`,
        );
        await chara_talk.say_and_wait(`还记得上次见面的事情吗？`);
        await era.printAndWait(
          `为了掩盖心中的紧张，${chara_talk.sex}拆开了塑料包装拿起了吸管小口小口地吮吸着饮料`,
        );
        await chara_talk.say_and_wait(
          `就是之前和训练员${me.get_adult_sex_title()}见面的时候，我不小心把偶像...不对，是我的纸张...不对，是歌词不小心撒在了空教室里，然后当我回去的时候发现纸张都被人收拾走了所以训练员${me.get_adult_sex_title()}请把我的东西还给我。`,
        );
        await era.printAndWait(
          `猛吸了一大口果汁后像是下定了决心一样强迫着自己说出了一大段话`,
        );
        await chara_talk.say_and_wait(`我说的是不是太快了？`);
        await era.printAndWait(
          `似乎没有等到预料中的反应，偷偷观察着${me.name}的${chara_talk.name}被眼前的纸张弄得不知所措。`,
        );
        await chara_talk.say_and_wait(`谢谢，就是这个！啊，不好！`);
        await era.printAndWait(
          `迫不及待接过${me.name}手中纸张的${chara_talk.name}因为过于急切不小心又将纸张散落了一地。`,
        );
        await chara_talk.say_and_wait(
          `又给训练员${me.get_adult_sex_title()}添麻烦了，实在抱歉！！`,
        );
        await era.printAndWait(
          `被突然的意外场面吓得不知所措的${chara_talk.name}匆匆道歉后打算低头捡起纸张。`,
        );
        await me.say_and_wait(`竖起的尾巴真可爱`, true);
        await chara_talk.say_and_wait(`呀啊！`);
        await era.printAndWait(
          `希望尽快离开这个训练室的${chara_talk.name}，与打算帮助${chara_talk.sex}捡起散落纸张的${me.actual_name}不小心撞在了一起。`,
        );
        await era.printAndWait(
          `明明是好事却变成了这种像是会在轻小说里发生的场面一样。`,
        );
        await era.printAndWait(
          `因为疼痛无意识向后退了一步的${chara_talk.name}不小心踩中了纸张，向后倒去的${chara_talk.name}像是溺水的人试图抓住救命的稻草一样抓住了${me.name}的衣袖。`,
        );
        await era.printAndWait(
          `就结果而言变成了${me.name}试图推倒${chara_talk.name}的样子。`,
        );
        await me.say_and_wait(`唔，好近`, true);
        await era.printAndWait(
          `盯着${me.name}的眼睛看着的${chara_talk.name}的脸逐渐变红，最后像是似乎能滴出水一样.....唔，为什么一直盯着我看？`,
        );
        await era.printAndWait(
          `急忙将手臂移开的${me.name}慌忙向${chara_talk.sex}道歉。`,
        );
        await chara_talk.say_and_wait(`......哎？`);
        await era.printAndWait(
          `似乎还没从之前的强烈冲击之中回过神来，在${me.name}试探性的向${chara_talk.sex}问话之后才回过神。`,
        );
        await chara_talk.say_and_wait(
          `那个，训练员${me.get_adult_sex_title()}，我先走了。`,
        );
        await era.printAndWait(
          `无视了不停道歉的${me.name}，匆匆鞠躬之后带着手稿离开了训练室。`,
        );
        await me.say_and_wait(`隐约有种还会见面的感觉`, true);
        era.drawLine({ content: '训练场' });
        await era.printAndWait(
          `带着例行检查是否有合适的${chara_talk.get_uma_sex_title()}，${
            me.name
          }来到了训练场。`,
        );
        await me.say_and_wait(`接下来的是草地第三组吗？`, true);
        await era.printAndWait(
          `看着身边同样的训练员盯着${chara_talk.get_uma_sex_title()}们的身影，${
            me.name
          }也将注意力集中于${chara_talk.get_uma_sex_title()}们的身上`,
        );
        await me.say_and_wait(`${chara_talk.name}吗？`, true);
        await era.printAndWait(
          `一种高兴的感觉从心底之中传来，也许是因为熟悉带来的安全感，${
            me.name
          }开始更加关注这名${chara_talk.get_uma_sex_title()}的身影`,
        );
        await era.printAndWait(`无名训练员A「各就位，预备！」`);
        await era.printAndWait(
          `随着发令枪的响起，${chara_talk.get_uma_sex_title()}们冲了出去。`,
        );
        era.drawLine();
        await me.say_and_wait(`只有这种水平吗？`, true);
        await era.printAndWait(
          `看着最后一名冲线的${chara_talk.name}耷拉着耳朵，${me.name}开始有些怀疑自己的判断了。`,
        );
        await me.say_and_wait(`我也许应该——`, true);
        await chara37_talk.say_and_wait(`请问是${me.actual_name}吗？`);
        await era.printAndWait(
          `黑色的${chara_talk.get_uma_sex_title()}不知何时来到了${
            me.name
          }的身边。`,
        );
        await chara37_talk.say_and_wait(
          `抱歉，忘了自我介绍，我是荣进闪耀，是${chara_talk.name}的室友。`,
        );
        await chara37_talk.say_and_wait(
          `飞鹰同学似乎很在意${me.name}的样子，所以我有点好奇，之后可否在天台聊一下？`,
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
          `原来如此，不是那种会占小${chara_talk.get_uma_sex_title()}便宜的屑训练员，失礼了。`,
        );
        await era.printAndWait(
          `听完前因后果之后，黑色的${chara_talk.get_uma_sex_title()}向${
            me.name
          }鞠躬道歉。`,
        );
        await chara37_talk.say_and_wait(
          `作为补偿，如果有什么问题的话，可以向我询问。`,
        );
        era.printButton(
          `${chara_talk.name}似乎不擅长草地，为什么还要坚持去跑草地？`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `${
            me.name
          }将心中的疑问告诉了眼前的${chara_talk.get_uma_sex_title()}，后者报以果然如此的神情。`,
        );
        await chara37_talk.say_and_wait(
          `这个问题相比我自己诉说的话，不如让飞鹰同学自己来回答的话会更好一点。`,
        );
        await era.printAndWait(`荣进闪耀扭头看向了天台的入口。`);
        await chara37_talk.say_and_wait(`差不多飞鹰同学也要到了。`);
        await chara_talk.say_and_wait(
          `闪耀同学，${me.name}说到天台来是......之前见过的${
            me.actual_name
          }${me.get_adult_sex_title()}吗？`,
        );
        await era.printAndWait(`小小的身影出现在了天台。`);
        await chara37_talk.say_and_wait(`恕我失礼了。`);
        await era.printAndWait(
          `荣进闪耀向${me.name}深深鞠躬之后来到了疑惑的${chara_talk.name}旁边耳语几句后，便离开了天台。`,
        );
        era.printButton(`${chara_talk.name}同学？`, 1);
        await era.input();
        await era.printAndWait(
          `只剩下了${me.get_couple_title()}两个人站在天台上沉默对视着。`,
        );
        await chara_talk.say_and_wait(
          `训练员${me.get_adult_sex_title()}，可以成为我的专属训练员吗？`,
        );
        era.printButton(`为什么？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `......如果是训练员${me.get_adult_sex_title()}的话，说不定可以实现我的梦想。`,
        );
        era.printButton(`飞鹰同学的梦想是什么呢？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `${chara_talk.get_uma_sex_title()}偶像，成为闪闪发光的偶像。`,
        );
        await era.printAndWait(
          `${chara_talk.name}的游移不定的眼神现在直视着${me.name}。`,
        );
        await chara_talk.say_and_wait(
          `而且训练员${me.get_adult_sex_title()}现在也因为找不到合适的${chara_talk.get_uma_sex_title()}而苦恼吧？`,
        );
        await chara_talk.say_and_wait(`所以说，我是最适合的选择了。`);
        await me.say_and_wait(
          `飞鹰同学有闪耀的梦想是一件好事，不过我还有一个问题。`,
        );
        era.printButton(`为什么执着于草地？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `我希望能在最大的舞台之上演出，这样就能成为最闪耀的${chara_talk.get_uma_sex_title()}了。`,
        );
        await me.say_and_wait(
          `但${me.name}看上去并不适合去跑草地，而且相比于草地。`,
        );
        await era.printAndWait(`${me.name}看向了${chara_talk.sex}纤细的腿部。`);
        await me.say_and_wait(`${me.name}更适合需要力量的泥地。`);
        await era.printAndWait(
          `${chara_talk.name}似乎陷入了思索之中，${me.name}叹了口气`,
        );
        await me.say_and_wait(
          `后天有场泥地的赛事，有空的话一起去感受一下泥地的气氛吧。`,
        );
        await era.printAndWait(`说完之后${me.name}便离开了天台。`);
        era.drawLine({ content: '泥地赛·观众席上' });
        await era.printAndWait(`观众「噢噢噢噢噢噢噢噢！」`);
        await era.printAndWait(
          `相比与草地赛事，泥地赛事的粉丝们似乎更加热情。`,
        );
        await chara_talk.say_and_wait(`原来泥地赛也会有这么多关注的粉丝们吗？`);
        await era.printAndWait(
          `像是被抛进了煮沸的开水之中，两人在沸腾的气氛中显得有些格格不入。`,
        );
        await me.say_and_wait(
          `看着这些出场的${chara_talk.get_uma_sex_title()}们。`,
        );
        await era.printAndWait(
          `即使是泥地赛事，${chara_talk.get_uma_sex_title()}们执着的眼神却不输于草地的${chara_talk.get_uma_sex_title()}们。`,
        );
        await era.printAndWait(
          `纵使是在泥土扬起的赛道之上，${chara_talk.get_uma_sex_title()}们依然瞪着眼睛，紧紧地盯着最佳地位置。`,
        );
        await era.printAndWait(`生命在最艰难的时候反而会爆发出强烈的生命力。`);
        await era.printAndWait(
          `身旁的${
            chara_talk.name
          }紧紧地盯着${chara_talk.get_uma_sex_title()}们地身影，直至最后冲线为止才缓过神来。`,
        );
        await chara_talk.say_and_wait(
          `${chara_talk.get_uma_sex_title()}们，原来这么闪耀吗？`,
        );
        await era.printAndWait(`身旁的${chara_talk.name}似乎下定了决心一样。`);
        await chara_talk.say_and_wait(
          `训练员${me.get_adult_sex_title()}，我决定了。`,
        );
        await chara_talk.say_and_wait(`我要以泥地偶像的身份登上最大的舞台。`);
        await chara_talk.say_and_wait(`接下来请一直盯着飞鹰子看哦⭐`);
        await me.say_and_wait(`飞鹰子？`, true);
        era.drawLine({ content: '泥地选拔时' });
        await era.printAndWait(
          `泥地第三组的${chara_talk.name}漂亮的取得了一着。`,
        );
        await era.printAndWait(
          `关注着泥地赛事的训练员们纷纷试图招揽这颗闪耀的星星。`,
        );
        await chara_talk.say_and_wait(`训练员${me.get_adult_sex_title()}⭐`);
        await era.printAndWait(`${chara_talk.sex}却飞扑到了${me.name}的身边。`);
        await era.printAndWait(`接下来的话，请多指教了！`);
        await era.printAndWait(`成功招募${chara_talk.name}了！`);
        new EventMarks(0).sub(event_hooks.school_rooftop);
        new FalconEduMarks().after_recruit++;
        era.set('cflag:46:招募状态', recruit_flags.yes);
        new FalconEduMarks().beginning++;
        add_event(event_hooks.week_end, new EventObject(46, cb_enum.edu));
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  },
};
