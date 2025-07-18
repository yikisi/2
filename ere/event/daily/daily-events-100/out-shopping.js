const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    edu_marks = new AcuteEduMarks(),
    me = get_chara_talk(0);
  const temp = await select_action_in_shopping_street();
  hook.arg = temp <= 2;
  switch (temp) {
    case 0:
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同去了街机厅……',
      ]);
      await acute.say_and_wait([
        '哎呀哎呀～',
        callname,
        '，可以的话，能陪我试试看拳击机吗？',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' 活动着右臂，轻轻的躬起上身，将所有的注意力集中在了拳击机，一向温和的',
        acute.sex,
        '此刻眼神中燃烧起了熊熊斗志。',
      ]);
      if (
        !edu_marks.boxing &&
        era.get('relation:100:0') >= 200 &&
        era.get('love:100') >= 50
      ) {
        edu_marks.boxing = 1;
        await era.printAndWait([
          '……从身后望着 ',
          acute.get_colored_name(),
          ' 因躬身而翘起的丰满臀部，心中突然涌现出了邪恶的想法。',
        ]);
        await era.printAndWait([
          '悄悄地靠近着将注意力完全集中在拳击机上的 ',
          acute.get_colored_name(),
          '，趁',
          acute.sex,
          '专心预备挥拳而翘起丰臀之际，伸出罪恶的右手悄悄蓄力——',
        ]);
        era.printButton('「啪！」', 1);
        await era.input();
        await acute.say_and_wait('咿呀～！？');
        await era.printAndWait('那是夹杂着羞涩与某种兴奋感的颤音。');
        await era.printAndWait([
          '如果是往常，根本无法想象老气横秋的 ',
          acute.get_colored_name(),
          ' 能发出这样小',
          acute.get_child_sex_title(),
          '的声音呢。',
        ]);
        await era.printAndWait(
          '丰臀那饱满与一颤一颤的触感仍然新鲜且是如此的让人难以忘怀。满足与罪恶夹杂的施虐心让心中似乎开始了难以平息的悸动。',
        );
        await era.printAndWait([
          '然而，正当感动之情仍存于心中之时，',
          acute.get_colored_name(),
          ' 那蓄势待发的拳头却悄无声息的击发了。',
        ]);
        await era.printAndWait('砰！！！！！！！');
        await era.printAndWait('那是远比背股一击还要剧烈的声响。');
        await era.printAndWait(
          '机械臂已然扭曲、液晶屏更是碎裂，拳击机上冒出了散发着焦味的浓浓白烟。',
        );
        await era.printAndWait('……阿勒？');
        await era.printAndWait([
          acute.get_colored_name(),
          ' 的拳力……原来有这么强的吗？',
        ]);
        await era.printAndWait(
          '之前来街机厅的时候，明明排名也仅仅是在特雷森学园里中等偏上的，即便是特别有功的人类体育生也能够达到的水平啊？',
        );
        await era.printAndWait([
          '一击就击坏拳击机？哎？难不成 ',
          acute.get_colored_name(),
          ' 之前一直在隐藏自己的实力……',
        ]);
        await acute.say_and_wait('唔～唔——！');
        await era.printAndWait([
          '一只手抚着自己丰臀的 ',
          acute.get_colored_name(),
          '，慢慢地回国了头。夹杂着泪珠却又没有哭意的眼神之中，夹杂着某种不知是娇羞还是厌恶的，某种一言难尽的神色。',
        ]);
        await era.printAndWait([
          acute.sex,
          '嘟起了嘴，小小的气体撑起了',
          acute.sex,
          '的脸颊，这是',
          acute.sex,
          '看起来最有活力，也最像同龄人一般可爱的时刻。',
        ]);
        await era.printAndWait('——如果没有那只正缓缓举起作拳击状的右手的话。');
        era.drawLine();
        await era.printAndWait([
          '总之，事后以说教的形式，总算取得了 ',
          acute.get_colored_name(),
          ' 的原谅。',
        ]);
        await era.printAndWait([
          '不过从那一天开始，在训练时，总感觉 ',
          acute.get_colored_name(),
          ' 有时会向 ',
          me.get_colored_name(),
          ' 投来某种异常的视线。',
        ]);
        await era.printAndWait([
          '……应该是 ',
          me.get_colored_name(),
          ' 的错觉吧？',
        ]);
        begin_and_init_ero(0, 100);
        await quick_make_love(
          new EroParticipant(0, part_enum.hit),
          new EroParticipant(100, part_enum.anal, 0.5),
          false,
        );
        end_ero_and_train();
        hook.override = true;
        era.println();
        get_attr_and_print_in_event(100, [0, 0, 0, 10], 0, undefined, true);
        sys_like_chara(100, 0, 20);
        add_jewel_reward(100, '受虐快感', 100);
        await era.waitAnyKey();
      } else {
        await era.printAndWait([
          '……感觉看到了 ',
          acute.get_colored_name(),
          ' 的另一面。',
        ]);
      }
      break;
    case 1:
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同参加了商店街组织的抽奖活动……',
      ]);
      await acute.say_and_wait('要是能抽到新鲜的嘎吱嘎吱卜就好了呢～');
      await era.printAndWait('咕噜咕噜咕噜咕噜……');
      await era.printAndWait('biu～');
      switch (get_random_value(0, 3 + !era.get('item:斗魂注入鞭（S用）'))) {
        case 0:
          await era.printAndWait('获得了商店街的奖品【抽拉式纸巾】！');
          await acute.say_and_wait([
            '哎呀哎呀～感觉 ',
            callname,
            ' 晚上的时候用得上呢～',
          ]);
          await me.say_and_wait('………………');
          await era.printAndWait('不不不！不会用的好吗！？');
          break;
        case 1:
          await era.printAndWait('获得了商店街的奖品【普通的纸巾】！');
          await acute.say_and_wait('普通的纸巾吗……可以拿来做食物的垫子呢～');
          await era.printAndWait([
            '虽然只是最低级的奖品，但 ',
            acute.get_colored_name(),
            ' 依旧开心的从服务员的手中接过了纸巾——',
          ]);
          break;
        case 2:
          await era.printAndWait('获得了商店街的奖品【胡萝卜】！');
          await acute.say_and_wait('哦阿？原来抽奖真的能抽出嘎吱嘎吱卜啊～');
          await era.printAndWait([
            acute.get_colored_name(),
            ' 的脸上露出了喜悦的神情——',
          ]);
          break;
        case 3:
          await era.printAndWait('获得了商店街的奖品【一筐胡萝卜】！');
          await acute.say_and_wait(
            '一个、两个、三个……哎呀呀，这个份量，能做一个礼拜份的嘎吱嘎吱干了呢。',
          );
          await acute.say_and_wait([
            '等嘎吱嘎吱干做好了之后啊，',
            callname,
            '，我们就拿去分给特雷森里的大家吧？',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            ' 回过了头，温和的笑容中闪烁出了佛光——',
          ]);
          break;
        case 4:
          await era.printAndWait('获得了商店街的奖品【斗魂注入鞭（S用）】！');
          await era.printAndWait(
            '喂喂喂喂喂！是谁把少儿不宜的东西当做奖品放在全年龄的商店街的抽奖活动里的啊！？',
          );
          await era.printAndWait('这种东西怎么说也得放在成人街的抽奖机里——');
          await acute.say_and_wait('哎呀呀,好帅气的九节鞭啊～');
          await era.printAndWait([
            '似乎是误解了用途？接过斗魂注入鞭（S用）的 ',
            acute.get_colored_name(),
            ' 眼中闪烁起了光芒……',
          ]);
          await acute.say_and_wait([
            '嗯……感觉 ',
            callname,
            ' 给人的感觉就对这种道具非常的熟练啊——',
          ]);
          era.printButton(
            '「请不要说这种会被骏川' +
              acute.get_adult_sex_title() +
              '盯上的话。」',
            1,
          );
          await era.input();
          await acute.say_and_wait([
            '嗯姆？为什么会被 ',
            {
              color: get_chara_color(301),
              content: `骏川${acute.get_adult_sex_title()}`,
              fontWeight: 'bold',
            },
            ' 盯上呢？',
          ]);
          era.printButton('「啊，这个吗……」', 1);
          await era.input();
          await era.printAndWait('………………');
          await era.printAndWait([
            '姑且在没有解释「为什么会被 ',
            {
              color: get_chara_color(301),
              content: `骏川${acute.get_adult_sex_title()}`,
              fontWeight: 'bold',
            },
            ' 盯上」的情况下将这个糊弄了过去。',
          ]);
          await era.printAndWait([
            '从 ',
            acute.get_colored_name(),
            ' 的手中收下的斗魂注入鞭（S用）姑且放在了训练室的仓库拐角生蜘蛛网的角落之中。',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait([
            '至于 ',
            acute.get_colored_name(),
            ' 其实知道斗魂注入鞭（S用）的正确用法后从而「大放异彩」的即辛辣又热血还夹杂着桃色肥臀的故事，则是后来的事了——',
          ]);
          era.set('item:斗魂注入鞭（S用）', 1);
      }
      break;
    case 2:
      if (Math.random() > 0.5) {
        await acute.say_and_wait('步步紧逼的～帝王～是巴比伦的军团～');
        await era.printAndWait(
          '一首有着年代感的歌曲，似乎是某部特摄的主题曲？',
        );
        await era.printAndWait([
          '闭上眼睛，能感觉到骑着摩托的 ',
          acute.get_colored_name(),
          ' 正在追逐着什么——',
        ]);
      } else {
        await acute.say_and_wait('瞄准着的～黑暗的影子～守护三女神的和平～');
        await era.printAndWait(
          '能感觉到少年心的歌曲，非常适合就着萝卜干来品鉴。',
        );
        await era.printAndWait([
          '闭上眼睛，似乎能看到 ',
          acute.get_colored_name(),
          ' 叉着腰站在栏杆上的样子——',
        ]);
        await era.printAndWait('……等等！别真上去啊！');
      }
      break;
    case 3:
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同去看电影……',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '故事讲述了一个天生残障的',
          acute.get_uma_sex_title(),
          '，是如何在自强不息、屡败屡战的奋斗之中得到了三女神的眷顾，在多场赛事中创造了众多奇迹的故事——',
        ]);
        await acute.say_and_wait([
          '嗯……真是热血的故事呢，',
          callname,
          '——等回去之后，可以增加额外的训练吗？',
        ]);
        await era.printAndWait([
          '似乎点燃了 ',
          acute.get_colored_name(),
          ' 的热血……',
        ]);
      } else {
        await era.printAndWait([
          '故事讲述了一位而立之年的',
          acute.get_uma_sex_title(),
          '，为了实现在年轻时与已故的训练员老伴一同环游世界的梦想，而与在路上结伴相识的关西小',
          acute.get_uma_sex_title(),
          '一同进行环球奔跑旅行的传奇故事——',
        ]);
        await acute.say_and_wait(
          '嗯……这是浪漫的故事呢～哎呀哎呀，如果可以的话，我也想要进行这样一场旅行呢——',
        );
        await era.printAndWait([
          '发出了如此感慨过后，在放映结束之前，总能感受到来自 ',
          acute.get_colored_name(),
          ' 的视线……',
        ]);
      }
  }
};
