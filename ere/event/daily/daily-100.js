/**
 * @file 奇锐骏 - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/daily/daily-100.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const acute_out_shopping = require('#/event/daily/daily-events-100/out-shopping');
const acute_school_atrium = require('#/event/daily/daily-events-100/school-atrium');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const { check_slavery } = require('#/event/snippets/check-slavery');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const ret = {};
    const acute = get_chara_talk(this.id);
    ret['代表色'] = acute.color;
    ret['她'] = acute.sex;
    ret['你'] = get_chara_talk(0).name;
    ret['称呼'] = sys_get_callname(this.id, 0);
    ret.rape = check_slavery(this.id);
    return ret;
  }

  select() {
    if (!sys_check_awake(100)) {
      return super.select();
    }
    kojo['选中互动角色'](this.#dict);
  }

  good_morning() {
    const dict = this.#dict;
    dict['女孩'] = get_chara_talk(this.id).child_sex_title;
    kojo['回合开始'](dict);
  }

  async talk() {
    if (!sys_check_awake(100)) {
      return await super.talk();
    }
    const dict = this.#dict;
    dict['奇锐骏称呼骏川'] = sys_get_callname(this.id, 301);
    await kojo['聊天'](dict);
  }

  async office_gift() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦～',
      );
      await acute.say_and_wait(['对了，', callname, '，之前说的计生工……']);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' 的声音忽地暗了下来。',
      ]);
      await acute.say_and_wait('那个……带了吗？');
      await acute.say_and_wait('……哪个『带』？');
      await acute.say_and_wait('唔…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' 似乎有些生气的嘟起了嘴。',
      ]);
      await era.printAndWait([
        '一向沉稳、处变不惊的 ',
        acute.get_colored_name(),
        '，只有在这个时候，才会变得像是同龄人的羞涩',
        acute.teen_sex_title,
        '。',
      ]);
      await era.printAndWait(['总感觉，有些想要捉弄', acute.sex, '的恶趣味——']);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        '青空之下，与羞涩的 ',
        acute.get_colored_name(),
        ' 度过了一段快乐的时光。',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦～',
      );
      await acute.say_and_wait(['对了，', callname, '，计生工具用上了吗？']);
      await acute.say_and_wait([
        '年轻气盛是很好的啦，但是嘛，训练员和担当',
        acute.uma_sex_title,
        '之间还是要注意分寸的哦～',
      ]);
      await acute.say_and_wait('等毕业了之后，在真刀实枪的去做吧～');
      await acute.say_and_wait([
        '到那时候，别忘了让我来抱抱 ',
        callname,
        ' 的孩子啦～',
      ]);
      await era.printAndWait([
        '……与平静温和的 ',
        acute.get_colored_name(),
        '，谈论了关于生育的话题。',
      ]);
      await era.printAndWait('…………感觉自己脸红的不行。');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢～',
      );
      await acute.say_and_wait(['来坐在这里吧，', callname, '。']);
      await acute.say_and_wait(
        '不要走动哦，我去取刚腌好的嘎吱嘎吱干，等下要一起吃哦。',
      );
      await era.printAndWait([
        '……跟 ',
        acute.get_colored_name(),
        ' 一起吃了苦涩却又清脆的嘎吱嘎吱干。',
      ]);
    } else {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢～',
      );
      await acute.say_and_wait([
        '说起来，骏川',
        acute.sex,
        '说啊，今天可能要下雨了呢。',
      ]);
      await acute.say_and_wait([callname, ' 没有带伞对吧？']);
      await acute.say_and_wait('我这里有备用的伞呢～直接拿去用吧。');
      await era.printAndWait([
        '……被 ',
        acute.get_colored_name(),
        ' 强硬的塞进手里了一把天堂伞。',
      ]);
    }
  }

  async office_cook() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0);
    if (Math.random() > 0.5) {
      await era.printAndWait([
        '傍晚，向 ',
        acute.get_colored_name(),
        ' 请教了制作好吃的「嘎吱嘎吱干」的秘诀——',
      ]);
      await get_chara_talk(100).say_and_wait(
        '腌嘎吱嘎吱干的秘诀吗？嗯……如果说秘诀的话，那果然是要用好的石坛……',
      );
      await era.printAndWait('………………');
      await era.printAndWait('学到了不少关于「腌制」的知识。');
    } else {
      await era.printAndWait(['与 ', acute.get_colored_name(), ' 一同做饭……']);
      await era.printAndWait('但被「不用麻烦你了」之类的话给搪塞出厨房了。');
      await acute.say_and_wait([
        '不用忙了啦，',
        callname,
        '。你只要坐在客厅里就可以了，饭很快就好了哦～？稍微等一下哦～',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('突然在一瞬间，自己的眼前浮现了母亲的身影。');
    }
  }

  async office_study() {
    const acute = get_chara_talk(100),
      me = get_chara_talk(0);
    if (Math.random() > 0.5) {
      await get_chara_talk(100).say_and_wait('要学习吗～？嗯……得好好努力～');
      await era.printAndWait([
        '坐在客厅里，捧着一本「五年赛马，三年模拟」的 ',
        me.get_colored_name(),
        '，正向 ',
        acute.get_colored_name(),
        ' 讲解着习题——',
      ]);
    } else {
      await get_chara_talk(100).say_and_wait(
        '哇啊啊啊～学习原来是这么困难的事情啊……',
      );
      await era.printAndWait([
        '面对着摊开在面前的「五年赛马，三年模拟」一向温和的 ',
        acute.get_colored_name(),
        ' 难得的露出了困扰的神色。',
      ]);
      await era.printAndWait([
        '或是新奇，或是恶趣，',
        me.get_colored_name(),
        ' 不禁苦笑出了声——',
      ]);
    }
  }

  office_prepare = () => {
    return get_chara_talk(100).say_and_wait(
      Math.random() > 0.5
        ? '下一场比赛吗？……嗯～该采取什么战术呢？'
        : '哦呀？要去下一次比赛的赛场转转吗？',
    );
  };

  async office_game() {
    const acute = get_chara_talk(100);
    if (Math.random() > 0.5) {
      await acute.say_and_wait('游戏吗……其实我不太明白该怎么操控机器呢——');
      await era.printAndWait([
        '不断将视线从显示器与遥控器上来回切换的 ',
        acute.get_colored_name(),
        '，用两根竖着的食指触碰着放在地上的手柄。',
      ]);
      await era.printAndWait('……说实话，实在是怪可爱的。');
    } else {
      await acute.say_and_wait(
        '游戏机——啊，我以前听故乡里邻居的小孩说过呢。是可以玩坦克大战的那种对吧？',
      );
      await era.printAndWait('噗——差点笑出了声。');
      await era.printAndWait('坦克大战……那得是多少年前的小孩了啊？');
    }
  }

  school_atrium = acute_school_atrium;

  async school_rooftop() {
    const acute = get_chara_talk(100),
      me = get_chara_talk(0);
    await era.printAndWait([
      '午休时分，与 ',
      acute.get_colored_name(),
      ' 在天台吃着便当。',
    ]);
    await era.printAndWait('嘎吱嘎吱嘎吱——');
    if (Math.random() < 0.5) {
      await era.printAndWait('一如既往温和而清脆的口感——');
      await acute.say_and_wait('呵呵～不要紧，这儿还有很多哦～');
      await era.printAndWait([
        '望着 ',
        acute.get_colored_name(),
        ' 的笑容，心中充斥着幸福感。',
      ]);
    } else {
      await era.printAndWait('似乎比日常更多了些许咸味的口感——');
      await acute.say_and_wait([
        '最近天气有些热呢，出很多汗的话身体的盐分就会不足哦？所以多加了一些盐呢——',
        me.get_colored_name(),
        '，喜欢吗？',
      ]);
      await era.printAndWait('那还用说吗？当然是喜欢的。');
    }
  }

  async out_river(hook, extra_flag) {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      me = get_chara_talk(0);
    hook.arg = !!(await select_action_around_river());
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await acute.say_and_wait('唏唷唷～风来了，雨来了，雷公敲着鼓来了。');
        await era.printAndWait([
          '似乎是心情很不错的样子，',
          acute.get_colored_name(),
          ' 沿着河道哼起了歌。',
        ]);
        await era.printAndWait([
          '……不知为何，听着 ',
          acute.get_colored_name(),
          ' 哼着小曲，总感觉有些困了。',
        ]);
      } else {
        await acute.say_and_wait([
          callname,
          '，虽然来河边散步很风雅啦，但还是要小心不能太靠近河边，要是掉进河沟里就不好了呢。',
        ]);
        await era.printAndWait([
          '在河边漫步着的 ',
          acute.get_colored_name(),
          ' 少有得一脸严肃的说教着。',
        ]);
        await era.printAndWait([
          '……不过，总感觉 ',
          acute.get_colored_name(),
          ' 很开心啊。',
        ]);
      }
    } else {
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 相约去河边钓鱼……',
      ]);
      if (Math.random() < 0.5) {
        await acute.say_and_wait('哎呀哎呀，天气真好呢～');
        await era.printAndWait([
          '手持着鱼竿的 ',
          acute.get_colored_name(),
          '，向着浮云与太阳露出了和蔼的微笑。',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          ' 的身边似乎洋溢起了让人可以放下一切的慵懒氛围。',
        ]);
        await era.printAndWait([
          '……总感觉 ',
          me.get_colored_name(),
          ' 和 ',
          acute.get_colored_name(),
          ' 不是来钓鱼的，而是来晒太阳的啊。',
        ]);
      } else {
        await era.printAndWait([
          '——可话虽如此，',
          acute.get_colored_name(),
          ' 却并没有拿着竿。而是拿着连着鱼标鱼勾的鱼线，装上鱼饵后握直接抛入了水中。',
        ]);
        await acute.say_and_wait(
          '嘿咻……呼鲁～这样就好了呢～接下来，只要等小鱼儿上钩，然后就可以一网打尽了呢～',
        );
        await era.printAndWait('……这样真的能钓到鱼吗？');
        if ((extra_flag.jpy = get_random_value(0, 5)) > 0) {
          await era.printAndWait('——刚这样想着，鱼标就开始咕噜噜的下沉。');
        }
      }
    }
  }

  async out_church() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0);
    await acute.say_and_wait('阿拉拉……要去神社祈福吗？');
    await era.printAndWait([
      '休息日的前一天，跟 ',
      acute.get_colored_name(),
      ' 提出了一同去神社祈福的计划。',
    ]);
    await acute.say_and_wait(
      '这样吗……那如果要去神社的话～不做好准备可不行呢……',
    );
    await era.printAndWait([
      '就跟预想的一样，有些老气的 ',
      acute.get_colored_name(),
      ' 对这「祈福」这类的活动果然很上心。。',
    ]);
    await acute.say_and_wait('不过哟……要去神社的话，得起早去才行呢……');
    await acute.say_and_wait('还要提前备上岁钱和供香……');
    await acute.say_and_wait(
      '还有供品……哎呀哎呀，今天晚上得腌一点嘎吱嘎吱干了呢……',
    );
    await acute.say_and_wait('……是不是有点太过上心了？');
    await acute.say_and_wait(
      '去神社参拜啊，越早越好呢，因为越早心越诚啊。所以明天要早起两个小时去做准备呢——',
    );
    await acute.say_and_wait([
      '啊，',
      callname,
      ' 不用起的那么早哦？因为要做准备的事我这边的啦。年轻人得多睡一会儿～。等到要出发的时候，我再去叫你起床吧～',
    ]);
    await era.printAndWait([
      '总有一种被当做',
      era.get('cflag:0:性别') === 1 ? '孙子' : '孙女',
      '对待的感觉啊……',
    ]);
    await era.printAndWait([
      '还有，',
      acute.get_colored_name(),
      ' 不也是年轻人吗？',
    ]);
    if (Math.random() > 0.5) {
      await acute.say_and_wait('哎呀哎呀，大吉吗？感觉会有好事情发生呢～');
      await era.printAndWait([
        '手中握着大吉签的 ',
        acute.get_colored_name(),
        ' 露出了和蔼的微笑。',
      ]);
      await era.printAndWait(
        '这也是理所当然的吧？毕竟特地早了两个小时起床来准备去神社祈福。',
      );
      await acute.say_and_wait('所谓天道酬勤——就是这么一回事吧。');
      await acute.say_and_wait(['怎么啦，', callname, '？你看起来很开心呢。']);
      await era.printAndWait('……脸上的笑意被发现了吗？');
    } else {
      await acute.say_and_wait(
        '大凶啊……看起来最近得多做点好事积攒功德才行了呢～',
      );
      await era.printAndWait([
        '手中握着大凶签的 ',
        acute.get_colored_name(),
        ' 一如既往平和的说着。大凶签似乎并没有给予',
        acute.sex,
        '情绪上的波动。',
      ]);
      await era.printAndWait('……可话虽如此，总感觉很不爽。');
      await era.printAndWait('明明提早了两个小时来准备去神社祈福的啊……');
      await acute.say_and_wait([
        '怎么啦，',
        callname,
        '？你看起来不太高兴呢？。',
      ]);
      await era.printAndWait('……脸上的恼意被发现了吗？');
    }
    await era.printAndWait('总之找个理由糊弄过去好了。');
    await era.printAndWait([
      '不管怎样，不能让 ',
      acute.get_colored_name(),
      ' 发现自己孩子气的一面啊……',
    ]);
  }

  out_shopping = acute_out_shopping;

  async out_station(hook) {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      me = get_chara_talk(0);
    hook.arg = await select_action_in_station(100);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            '与 ',
            acute.get_colored_name(),
            ' 一同在车站前品尝了热气腾腾的油豆腐……',
          ]);
          await acute.say_and_wait('呼、呼……啊呜～嗯呜～嗯呜呜❤️～');
          await era.printAndWait('一面吹着油豆腐的热气，一面小口小口的咀嚼。');
          await era.printAndWait([
            '蒸腾的热气从 ',
            acute.get_colored_name(),
            ' 的口中缓缓散出，舌头与咽喉随之发起了细微的共振。',
          ]);
          await acute.say_and_wait('咕～嗯……哈——');
          await era.printAndWait([
            '坐在 ',
            acute.get_colored_name(),
            ' 的对面，能够听到那出于礼仪而刻意而又小心掩盖着得细微吞咽声……',
          ]);
          await acute.say_and_wait('……？');
          await era.printAndWait([
            '啊，不好，自己过于专心于 ',
            acute.get_colored_name(),
            ' 嘴角那舌尖与热气的视线，似乎被 ',
            acute.get_colored_name(),
            ' 发现了……',
          ]);
          await acute.say_and_wait('…………');
          await era.printAndWait([
            acute.sex,
            '看向了 ',
            me.get_colored_name(),
            ' 碗中尚未动过的油豆腐，眉头微皱，好似有些许不满。',
          ]);
          await era.printAndWait(
            '但毕竟正在进食，又不好发出声。所以只好嘟起了脸蛋，表达着小小的抗议。',
          );
          await era.printAndWait([
            '随后，伸出并未捧着碗的左手，像是在回避着 ',
            me.get_colored_name(),
            ' 那有些许下流般的视线，遮挡在了自己散发着热气的嘴唇之前。',
          ]);
          await era.printAndWait([
            '于是，微微皱着眉头的 ',
            acute.get_colored_name(),
            '，用手遮住了自己正散发着自己热气的半面——',
          ]);
          await era.printAndWait('…………');
          await era.printAndWait([
            acute.get_colored_name(),
            '，搞不好其实是个那方面的天才吧？',
          ]);
        } else {
          await era.printAndWait([
            acute.get_colored_name(),
            ' 一同在车站前品尝了车站便利店前的特价萝卜干……',
          ]);
          era.printButton('「嘎吱——」', 1);
          await era.input();
          await era.printAndWait(
            '嗯，出入口的口感还是挺脆的，作为便利店出售的萝卜干来说，已经算是很不错了……',
          );
          era.printButton('「嘎吱嘎吱——」', 1);
          await era.input();
          await era.printAndWait([
            '但仔细品尝的话，果然跟 ',
            acute.get_colored_name(),
            ' 做的嘎吱嘎吱干还是差的很远啊……',
          ]);
          await era.printAndWait(
            '无论是因为放置的太久后导致缺乏水分而多多少少的有些磕牙，',
          );
          await era.printAndWait(
            '还是这不知是刻意的为了延长保质期还是为了吸引偏向大众重口味而进行的咸味腌制……',
          );
          await era.printAndWait('嘎吱嘎吱嘎吱——');
          await era.printAndWait('越是咀嚼就越是感觉到咸味在口腔中扩散，');
          await era.printAndWait(
            '本就缺乏水分的萝卜干在这咸气十足的环境中反而在争抢着分泌出的为数不多的唾液……',
          );
          await acute.say_and_wait([callname, '，水在这里哦～']);
          await era.printAndWait([
            '接过 ',
            acute.get_colored_name(),
            ' 递过来的用保温杯的瓶盖所盛好的温水，便是一场酣畅淋漓的豪饮。',
          ]);
          era.printButton('「咕噜、咕噜——」', 1);
          await era.input();
          await era.printAndWait([
            '哈……多亏了 ',
            acute.get_colored_name(),
            '，得救了。',
          ]);
          await era.printAndWait(
            '可恶，差点就中了便利店利用特价萝卜干兜售瓶装快乐水的阴谋！',
          );
          await era.printAndWait('嘎吱嘎吱干明明应该是那种。');
          await era.printAndWait('虽然有点咸，但品尝起来也不会太过干瘪。');
          await era.printAndWait('刺激唾液的同时，不会跟人体抢夺水分。');
          await era.printAndWait(
            '又脆又咸却又容易入口，在运动训练结束后不适宜大量喝水的那段时间里，可以通过嘎吱嘎吱干适量的刺激唾液分泌而缓解口渴感的，好吃又营养还能辅助训练的美味食物才对！',
          );
          await era.printAndWait(
            '竟然把美味好吃又营养的嘎吱嘎吱干做成这种充满了阴谋的工业商品……便利店，你真可恶——',
          );
          await acute.say_and_wait([
            '呐，',
            callname,
            '。等回去之后，能来我的房间里吃点嘎吱嘎吱干吗？',
          ]);
          await era.printAndWait([
            '如同看穿了 ',
            me.get_colored_name(),
            ' 的心事一般，站在 ',
            me.get_colored_name(),
            ' 旁边的 ',
            acute.get_colored_name(),
            '，用不紧不慢的语气适时的插入进了 ',
            me.get_colored_name(),
            ' 内心的独白。',
          ]);
          era.printButton('「哈！那还用说？!」', 1);
          await era.input();
          await era.printAndWait([
            '豪爽的同意了 ',
            acute.get_colored_name(),
            ' 邀约，当天夜里在 ',
            acute.get_colored_name(),
            ' 的房间里吃了个爽。',
          ]);
        }
        break;
      case 1:
        await era.printAndWait([
          '休息日与 ',
          acute.get_colored_name(),
          ' 约好了去车站约会——',
        ]);
        await acute.say_and_wait('嗯……最近总感觉腰有些酸呢～');
        await era.printAndWait([
          '毫无预兆的，',
          acute.get_colored_name(),
          ' 突然说道。',
        ]);
        if (Math.random() > 0.5 && era.get('love:100') >= 75) {
          await acute.say_and_wait([
            callname,
            '，今天晚上，可以帮我放松一下吗？',
          ]);
          await era.printAndWait([
            '正说着，',
            acute.get_colored_name(),
            ' 在街上毫不客气的拍了拍 ',
            me.get_colored_name(),
            ' 的腰，脸上浮现出了颇有深意的笑容。',
          ]);
          await era.printAndWait('………………');
          if (era.get('item:斗魂注入鞭（S用）')) {
            await acute.say_and_wait([
              '呐。',
              callname,
              '，今天可以……用上【那个】了吗？',
            ]);
            await era.printAndWait([
              '粉红的嘴唇泛起了透明的汁液，身为',
              acute.teen_sex_title,
              '的猛兽露出了',
              acute.sex,
              '的獠牙。',
            ]);
            await era.printAndWait([
              '心领神会，带着 ',
              acute.get_colored_name(),
              ' 偷偷的来到了车站无人的角落……',
            ]);
            await era.printAndWait('拿出了训练猛兽的斗魂注入鞭——');
            await acute.say_and_wait('…………');
            await acute.say_and_wait('！');
            await acute.say_and_wait('————');
            await acute.say_and_wait('❤️～');
            era.println();
            begin_and_init_ero(0, 100);
            await quick_make_love(
              new EroParticipant(0, part_enum.hit),
              new EroParticipant(100, part_enum.anal, 0.5),
              false,
            );
            end_ero_and_train();
            get_attr_and_print_in_event(
              100,
              [0, 0, 0, 10, 0],
              0,
              [-100, 100],
              true,
            );
            sys_change_motivation(100, 1);
            add_jewel_reward(100, 8, 100);
            era.println();
            get_attr_and_print_in_event(0, [0, 0, 10], 0, undefined, true);
            add_jewel_reward(0, 7, 100);
            await era.waitAnyKey();
          } else {
            await era.printAndWait('还没说完，自己便已被抱住。');
            await era.printAndWait([
              '被身为',
              acute.teen_sex_title,
              '的猛兽紧紧得抱住，自身绝没有逃脱的可能。',
            ]);
            await era.printAndWait(
              '自古以来驯「兽」的工作中，喂食都是一种极其危险的工作。',
            );
            await era.printAndWait(
              '一旦未能让对方感到满足，那么喂食者便可能成为猛兽的饵食——',
            );
            await acute.say_and_wait('❤️——————');
            await era.printAndWait('深邃的眼眸中，散射出了桃红的色泽。');
            await era.printAndWait([
              '这是名为 ',
              acute.get_colored_actual_name(),
              ' 的猛兽所发出的「进食」信号。',
            ]);
            await era.printAndWait('………………');
            await era.printAndWait('看来今天夜里，注定了是一场殊死的决斗了。');
            era.println();
            get_attr_and_print_in_event(100, [0, 0, 10], 0, undefined, true);
            add_jewel_reward(100, 7, 100);
            era.println();
            get_attr_and_print_in_event(0, [0, 10], 0, [-100]);
            await era.waitAnyKey();
          }
        } else {
          await era.printAndWait([
            '提出了要不要按摩一下，但是被 ',
            acute.get_colored_name(),
            ' 拒绝了……',
          ]);
          await acute.say_and_wait(
            '嗯……比起轻飘飘的按摩，还是希望能有更刺激的治疗法呢——',
          );
          await era.printAndWait([
            acute.get_colored_name(),
            ' 一如既往轻飘飘地说着，视线似乎像车站角落里的某家SM用具店利飘去。',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait('应该是错觉吧？');
        }
        break;
      case 2:
        await era.printAndWait([
          '与 ',
          acute.get_colored_name(),
          ' 一同逛了车站前的商场……',
        ]);
        await acute.say_and_wait('嘎吱嘎吱干～嘎吱嘎吱干～');
        await era.printAndWait([
          '哼着轻快的小调，',
          acute.get_colored_name(),
          ' 迅猛得穿行于低价区中、用难以置信得速度，将刚标上降价标签的商品放入了购物篮。',
        ]);
        await era.printAndWait(
          '在发出：「这似乎能用在训练之上」的感慨之前，购物篮里转瞬间已满满当当。',
        );
        era.drawLine();
        switch (get_random_value(0, 1 + (era.get('love:100') >= 75))) {
          case 0:
            await era.printAndWait('购物篮中堆满了各种减价的食材。');
            await era.printAndWait(
              '随便拿起其中一份，上面赫然标着「-60％」的绿色标签。',
            );
            await acute.say_and_wait([
              '啊哈哈，竟然有-99％的胡萝卜呢～看来今天晚上，',
              callname,
              ' 是有口福了哦～',
            ]);
            await era.printAndWait(
              '说罢，又是一份绿标的食材被推入了购物篮中……',
            );
            break;
          case 1:
            await era.printAndWait('购物篮中堆满了各种训练食品。');
            await era.printAndWait(
              '随便拿起其中一份，上面赫然印着「一日两次燃烧脂肪！一个月变身八块腹肌！」这类夸大其词的广告。',
            );
            await era.printAndWait([
              '……脑海中渐渐浮现起了有着八块腹肌的 ',
              acute.get_colored_name(),
            ]);
            await acute.say_and_wait([
              '嗯……果然 ',
              callname,
              '，还是要增加多一点肌肉量呢～',
            ]);
            await era.printAndWait([
              '——什么嘛，原来是给 ',
              me.get_colored_name(),
              ' 买的啊。',
            ]);
            await era.printAndWait(
              '连忙拭去脑海中那不堪入目的画面，安心地缓了口气。',
            );
            await era.printAndWait('………………');
            await era.printAndWait([
              '结账时，抢在了 ',
              acute.get_colored_name(),
              ' 之前。',
            ]);
            await era.printAndWait([
              '毕竟购物篮里的东西大多是给自己用的，说什么也不好意思让 ',
              acute.get_colored_name(),
              ' 买单。',
            ]);
            await era.printAndWait(
              '掏出了家人送给自己的黑色钱包，用左手捂着此前不慎划破的破洞。一面紧张得望着收银机上的数字，一面略带遗憾着清点钱包中为数不多的大钞——',
            );
            await acute.say_and_wait(['八块腹肌的 ', callname, '……哎嘿嘿～']);
            await era.printAndWait('………………');
            await era.printAndWait('总感觉刚刚听到了某种很不可思议的对白。');
            await era.printAndWait([
              '回过头——',
              acute.get_colored_name(),
              ' 依旧温柔得注视着自己。和蔼地笑容一如往常，就是嘴角不知为何留有液体的印记。',
            ]);
            await era.printAndWait('………………');
            await era.printAndWait('应该是错觉吧？');
            break;
          case 2:
            await era.printAndWait('韭菜、猪肝、鸡蛋……');
            await era.printAndWait('猪肝、鸡蛋、韭菜……');
            await era.printAndWait('鸡蛋、韭菜、猪肝……');
            await era.printAndWait('半价的韭菜、新鲜的猪肝、清澈的鸡蛋液……');
            await era.printAndWait('……怎么全是养「肾」食品？');
            await era.printAndWait([
              '一刻也没有停歇，惊恐地望向了 ',
              acute.get_colored_name(),
              '。在此刻回应着的，是 ',
              acute.get_colored_name(),
              ' 略带深意的微笑——',
            ]);
            await era.printAndWait('…………');
            await era.printAndWait('看来今晚注定了是一个漫长的深夜——');
        }
    }
  }

  async slave_end() {
    const name = '金钱奴隶';
    await kojo[name](this.#dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }

  async basement_end() {
    const name = '情爱囹圄';
    await kojo[name](this.#dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }
};
