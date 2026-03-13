/**
 * @file 目白麦昆 - 地下室
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await mcqueen.say_and_wait(['你的意思是……让我放你离开吗？']);
    await era.printAndWait(['明明想都不用想地会拒绝的请求……']);
    await mcqueen.say_and_wait(['可以哦，请来吧。']);
    await era.printAndWait([
      '一瞬间，',
      me.get_colored_name(),
      ' 猛地抬起了脑袋，不敢置信地看着 ',
      mcqueen.get_colored_name(),
      '，没有任何犹豫地拖着僵硬的双腿来到了门口。',
    ]);
    await mcqueen.say_and_wait(['目白家很大，让我领你出去吧。']);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      ' 那行云流水一般的操作，令 ',
      me.get_colored_name(),
      ' 感到请求如此顺利到不可置信。',
    ]);
    await era.printAndWait(['待来到了目白家大门，那边早已有车停着。']);
    await me.say_and_wait('谢谢……');
    await era.printAndWait([
      '淡漠地与 ',
      mcqueen.get_colored_name(),
      ' 道谢，想要一头不回地离开，但是手却被 ',
      mcqueen.get_colored_name(),
      ' 拉住了。',
    ]);
    await mcqueen.say_and_wait([
      '他会带你回到你的公寓里，但是不能再被那些讨厌的虫蝇给缠住了，我会很困扰的哦。',
    ]);
    await era.printAndWait([
      '予以警告的声音让 ',
      me.get_colored_name(),
      ' 颤栗了起来，同时也知道自己即使离开了，也仍然逃不出与',
      mcqueen.sex,
      '的联系。',
    ]);
  }

  async ask_release_reject() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await mcqueen.say_and_wait(['你的意思是……让我放你离开吗？']);
    await era.printAndWait(['明明想都不用想的会拒绝的请求……']);
    await mcqueen.say_and_wait(['为什么想要离开呢。']);
    await era.printAndWait([
      '当 ',
      mcqueen.get_colored_name(),
      ' 将这个问题抛向了 ',
      me.get_colored_name(),
      ' 时，就已经注定了无法离开的结局。',
    ]);
    await mcqueen.say_and_wait([
      '与其回到需要消费自理的公寓，不如待在可以让你衣食无忧的地方。',
    ]);
    await mcqueen.say_and_wait(['只需要交换你的自由以及关注而已……']);
  }

  async ask_time() {
    const mcqueen = get_chara_talk(this.id);
    await mcqueen.say_and_wait(['想要问一下时间？']);
    await era.printAndWait([
      '听到这个请求的 ',
      mcqueen.get_colored_name(),
      ' 不知所以地笑了一下。',
    ]);
    await mcqueen.say_and_wait([
      '在这不用去为日常思考的地方，不需要知道时间哦。',
    ]);
  }

  back_basement() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    era.print([
      '在一个密闭空间不知道过了多久，',
      me.get_colored_name(),
      ' 感知到了地下室入口的脚步声，而这个脚步声的主人除了 ',
      mcqueen.get_colored_name(),
      ' 之外，别无一人。',
    ]);
    mcqueen.say(['我回来啦～', callname, '。']);
    era.print([
      '身上有些淋湿的 ',
      mcqueen.get_colored_name(),
      ' 除了挂在肩膀的包之外，手上还拿着一代保冷袋。',
    ]);
    mcqueen.say(['我带来了一盒芭菲哦，让我们来品尝一下吧。']);
    era.print([
      '一打开袋子，散发出奶油的香甜气味的时候，',
      mcqueen.get_colored_name(),
      ' 却微微皱了一下眉头，手中的勺子迟迟没有挖开一勺。',
    ]);
    mcqueen.say(['自从把 ', callname, ' 关在这里，究竟有多久没有吃芭菲了呢？']);
    mcqueen.say([
      '不……我并没有趁着把你关在这里的时候去贪吃哦，只是……现在吃芭菲也没有以前那种味道了啊。',
    ]);
  }

  async battle_escape() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      '怀着满满的期待将手上钥匙插入到钥匙孔里，毫无阻碍地转动起来，只轻轻一推就看到了外面的亮光。',
    ]);
    await era.printAndWait([
      '但是 ',
      me.get_colored_name(),
      ' 回头看了仍然倒在地面上的 ',
      mcqueen.get_colored_name(),
      '，回想起来',
      mcqueen.sex,
      '口口声声说着的「一心同体」。',
    ]);
    await era.printAndWait([
      '但是已经见过了 ',
      mcqueen.get_colored_name(),
      ' 那优雅形象背后的样子之后，是否还能维持住那一心同体的关系吗？',
    ]);
    await era.printAndWait([
      '犹豫了几秒，终究还是无法让自己的爱马独自躺在那地面上，抱起 ',
      mcqueen.get_colored_name(),
      ' 的身体，离开了这座爱之囚笼。',
    ]);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      '一阵争斗之后，状态不佳的 ',
      me.get_colored_name(),
      ' 一下子被 ',
      mcqueen.get_colored_name(),
      ' 以锁技制服。',
    ]);
    await mcqueen.say_and_wait(['想要打败我还是太天真了，', callname, '。']);
    await mcqueen.say_and_wait(['好歹我也是学过一些格斗术的啊。']);
    await mcqueen.say_and_wait([
      '这样不乖的 ',
      callname,
      '，只好让你睡着来安静一点吧？',
    ]);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      ' 那轻蔑语气刚落，感受到后颈传来的冲击力，一下子失去了意识。',
    ]);
  }

  async battle_prison() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await me.say_and_wait(['钥匙……钥匙呢？！']);
    await era.printAndWait([
      '看着周围没有钥匙的踪迹，',
      me.get_colored_name(),
      ' 对逃走的执念让 ',
      me.get_colored_name(),
      ' 愈加发狂。遂放弃寻找钥匙，将自己暗自存下的任何能开锁的东西都用在了门锁上。',
    ]);
    await era.printAndWait([
      '但有一只不属于自己的手抚摸着自己的胸膛让 ',
      me.get_colored_name(),
      ' 惊出一身冷汗，解锁工具掉在了地面上。',
    ]);
    await mcqueen.say_and_wait(['没逃掉吧？']);
    await mcqueen.say_and_wait(['还好我早有防备，把钥匙藏在别的地方了呢。']);
    await era.printAndWait([
      '纤细的手指抚着 ',
      me.get_colored_name(),
      ' 的脸庞，随后是后颈的一阵冲击，一下子失去了意识。',
    ]);
  }

  async battle_success() {
    const mcqueen = get_chara_talk(this.id);
    await era.printAndWait([
      '经过一阵争斗之后，',
      mcqueen.get_colored_name(),
      ' 的身体终于倒在了地面上。',
    ]);
    await era.printAndWait([
      '看着自己紧张颤抖的手，又看看了面前的 ',
      mcqueen.get_colored_name(),
      '，经过一阵短暂的脑袋空白之后才想起来自己战胜了 ',
      mcqueen.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '握拳以冷静下来，立刻扔掉了自己手上的工具，搜索着能够打开地下室的门的钥匙。',
    ]);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    if (!out_of_prison || !is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    era.print(['依照着残留记忆中的解锁技巧，费了九牛二虎之力才将门解锁开来。']);
    era.print([
      '但在快步离开的时候，却与 ',
      mcqueen.get_colored_name(),
      ' 撞个正着。',
    ]);
    era.print([
      mcqueen.get_colored_name(),
      ' 看到 ',
      me.get_colored_name(),
      ' 的一瞬间表情变得冰冷起来，令 ',
      me.get_colored_name(),
      ' 后背发凉。',
    ]);
    mcqueen.say(['啊啦，', callname, '……你这是打算要逃走吗？']);
    era.print([
      mcqueen.get_colored_name(),
      ' 对着 ',
      me.get_colored_name(),
      ' 慢慢靠近着，而 ',
      me.get_colored_name(),
      ' 也相对后退着，一步一步地回到了地下室室内。',
    ]);
    mcqueen.say(['你知道吗，我明明都快要对你改变想法了。']);
    mcqueen.say(['但是 ', callname, ' 还是这么不听话，让我很烦恼呢。']);
    era.print([mcqueen.get_colored_name(), ' 重新将门锁上。']);
    mcqueen.say(['看来还要对 ', callname, ' 倾注更多的一心同体才对……']);
  }

  out() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13);
    mcqueen.say(['唔……想起来我今天还有日程呢。']);
    mcqueen.say(['我需要离开一会儿哦？', callname, '。']);
    if (era.get('relation:13:0') < 0) {
      mcqueen.say(['不要想着要逃走的念头哦。']);
      era.print([
        '当 ',
        mcqueen.get_colored_name(),
        ' 说出这句话的时候，语气相当冰冷。',
      ]);
    } else {
      mcqueen.say(['我很快就回来的，请你好好待在这里。']);
    }
  }

  strike_success() {
    return this.battle_success();
  }

  welcome() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    era.print([
      '距离最后见到强烈光束下失去意识的记忆不知过了多久，醒来的 ',
      me.get_colored_name(),
      ' 尚未适应天花板的亮光，便微微扭动了一下身体，恢复着沉眠身体的机能。',
    ]);
    mcqueen.say([callname, '，醒了吗？']);
    era.print([
      '听到那个熟悉的声音的 ',
      me.get_colored_name(),
      '，立刻看向了床旁边的 ',
      mcqueen.get_colored_name(),
      '，而后者正用手撑着头，略带玩味一般的笑看着 ',
      me.get_colored_name(),
      '。',
    ]);
    mcqueen.say([
      '你说这是哪里？呵……这是防止其他',
      mcqueen.uma_sex_title,
      '来诱惑 ',
      callname,
      '，专门为我们彼此之间的独处而设置的空间哦。',
    ]);
    mcqueen.say([
      '美味甜点总是会招引虫蝇，为了独占它，只好把它藏在所有人都不知道的地方细细品味起来。',
    ]);
    mcqueen.say([
      '但是，既然珍藏甜品已经完美地供我独享了，那想什么时候品尝也不迟呢。',
    ]);
    era.print([
      mcqueen.get_colored_name(),
      ' 舔了舔嘴唇，慢慢地靠近了训练员的耳边。',
    ]);
    mcqueen.say(['你永远逃不出去的。']);
    era.print([
      mcqueen.get_colored_name(),
      ' 将 ',
      me.get_colored_name(),
      ' 的耳垂咬出了鲜血，然后慢慢起身，头也不回地走向了门口，伴随着质地坚固的门的关下，',
      me.get_colored_name(),
      ' 悬着的心才落了下来。',
    ]);
  }
};
