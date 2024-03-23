const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  set_palam_to_max,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,number,number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[2] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    random_range,
  ) => {
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '需要练习唱歌的时候我经常和大家一起来这里的！',
          callname,
          ' 想听什么我都能唱哦！',
        ]);
        await era.printAndWait([
          '率先拿起话筒，',
          urara.get_colored_name(),
          ' 想要向 ',
          me.get_colored_name(),
          ' 展示练习成果般笑着向 ',
          me.get_colored_name(),
          ' 问道。',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          '把灯光打开后就像要上Live了一样呢！',
          callname,
          ' 也一起来唱吧！',
        ]);
        await era.printAndWait([
          '带着玩心打开了天花板的灯球，',
          urara.get_colored_name(),
          ' 开心地拉着 ',
          me.get_colored_name(),
          ' 一起拿起了话筒。',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          '今天要唱什么呢？嘿嘿～其实我在 ',
          sys_get_colored_callname(52, 15),
          ' 那里学到了新歌哦！',
        ]);
        await era.printAndWait([
          '尽管从 ',
          get_chara_talk(15).get_colored_name(),
          ' 的那学来的新歌听上去有些不妙，',
          me.get_colored_name(),
          ' 还是期待着 ',
          urara.get_colored_name(),
          ' 开始唱的那一刻。',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '……诶、诶？',
          callname,
          '，隔壁究竟是在……？',
        ]);
        await era.printAndWait([
          '听着隔壁包间不断传出的水声与呻吟声，',
          me.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 一时间不知道该做什么比较好……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '怎么样呢 ',
          callname,
          '？有被乌拉拉击、击中了心的感觉吗？',
        ]);
        await era.printAndWait([
          '以稚嫩的声音生疏地唱完一首情歌类偶像曲，',
          urara.get_colored_name(),
          ' 害羞地向 ',
          me.get_colored_name(),
          ' 摆了一个爱心pose。',
        ]);
        await era.printAndWait([
          '总觉得',
          urara.sex,
          '有点勉强自己了，但果然好可爱……',
        ]);
        break;
      case 5:
        await urara.say_and_wait([
          callname,
          '，是香草芭菲哦！把嘴张开！啊——！',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 本能地咽下了 ',
          urara.get_colored_name(),
          ' 舀起的冰激凌，并疑惑地思考起为什么要在卡拉OK里这样做。',
        ]);
        await era.printAndWait([
          '但背过身的 ',
          me.get_colored_name(),
          '，也错过了担当悄悄红着脸伸出舌头，细细地舔着 ',
          me.get_colored_name(),
          ' 含过的勺子的眼神迷离的样子……',
        ]);
    }
  };

  handlers[3] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    random_range,
  ) => {
    if (!edu_marks.cor_game && urara.sex_code === 0 && Math.random() < 0.3) {
      edu_marks.cor_game = 1;
      await print_event_name('角落中的游戏？', urara);
      await era.printAndWait('果然这部电影，对人类来说还是为时尚早了。');
      await era.printAndWait([
        '抱着在怀中安然熟睡的 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 对危急时刻竟还讲着车轱辘话的演员们叹了口气。',
      ]);
      await era.printAndWait([
        '说是刺激的恐怖电影，但在放映开始时就躲进 ',
        me.get_colored_name(),
        ' 怀中的 ',
        urara.get_colored_name(),
        '，很快便因不知所谓的剧情睡了过去。',
      ]);
      await era.printAndWait([
        '现在屏幕上那个戴着面具的类',
        urara.get_uma_sex_title(),
        '搞怪生物，又怎么看怎么像 ',
        get_chara_talk(7).get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 似乎又被咿咿呀呀的怪叫声扰到了睡眠，折起耳朵，蹭着 ',
        me.get_colored_name(),
        ' 的身体换了个更方便安眠的姿势。',
      ]);
      await era.printAndWait([
        '似乎又梦到了好吃的东西，睡不安稳的小',
        urara.get_uma_sex_title(),
        '又像亲吻般在 ',
        me.get_colored_name(),
        ' 的脖子内侧又吮又咬个不停。',
      ]);
      await era.printAndWait([
        '在别人看来这或许是被幼女渴求的禁断场景，但 ',
        me.get_colored_name(),
        ' 知道，',
        urara.get_colored_name(),
        ' 恐怕是梦到了与萝卜有关的事情。',
      ]);
      await era.printAndWait([
        '但话又说回来，',
        me.get_colored_name(),
        ' 的意志力也的确正经受着莫大的考验。',
      ]);
      await era.printAndWait([
        '将尾巴慢慢缠上 ',
        me.get_colored_name(),
        ' 的大腿，',
        urara.get_teen_sex_title(),
        '健康肉感的身体依旧来回地蹭着 ',
        me.get_colored_name(),
        ' 敏感的角落。',
      ]);
      await era.printAndWait([
        '吻痕般的印记随着',
        urara.get_teen_sex_title(),
        '粘稠的吮吸声还在不断增多，但那团魅惑的樱粉色似乎没有要停下的意思。',
      ]);
      await era.printAndWait([
        '如果相遇时的同床共枕，还算精神失常的 ',
        me.get_colored_name(),
        ' 有错在先，',
        urara.get_colored_name(),
        ' 只是无辜的小',
        urara.get_uma_sex_title(),
        '……',
      ]);
      await era.printAndWait(
        '这次就是无辜魅魔般的担当，在睡梦中对抱有好感的训练员进行着无意识的勾引了。',
      );
      await era.printAndWait([
        '至少现在的 ',
        me.get_colored_name(),
        ' 是这样为自己缓缓抬起的手找合适的借口的。',
      ]);

      await in_urara.say_as_unknown_and_wait('我、我说，现在收手还来得及——');
      era.printButton('报复一下这只色情小马……', 1);
      era.printButton('算了，忍住！', 2);
      const ret = await era.input();
      era.set('status:52:沉睡', 1);
      begin_and_init_ero(0, 52);
      if (ret === 1) {
        await era.printAndWait([
          '趁着 ',
          urara.get_colored_name(),
          ' 在睡梦中翻身，',
          me.get_colored_name(),
          ' 在昏暗的影院中将手伸进了担当的衣下。',
        ]);
        await era.printAndWait(
          '先不说这场电影根本没什么人看，空无一人的最后一排本来就是最好的掩护。',
        );
        await era.printAndWait([
          '一只手试探地隔着衣服，挑弄起',
          urara.get_teen_sex_title(),
          '青涩的山峰，另一只手伸入',
          urara.get_teen_sex_title(),
          '的裙下，抚摸着',
          urara.get_uma_sex_title(),
          '敏感的大腿内侧。',
        ]);
        await era.printAndWait([
          '变得有些急促的喘息让 ',
          me.get_colored_name(),
          ' 的手指略微停滞，但即使察觉了什么，小',
          urara.get_uma_sex_title(),
          '依旧没有醒来。',
        ]);
        await era.printAndWait([
          '指尖继续深入着，',
          me.get_colored_name(),
          ' 翻开了 ',
          urara.get_colored_name(),
          ' 的安全裤，隔着最后一层布料抚摸着',
          urara.get_teen_sex_title(),
          '的秘密。',
        ]);
        await era.printAndWait([
          '荧幕上的吵闹盖过了',
          urara.get_teen_sex_title(),
          '梦中的娇吟，',
          me.get_colored_name(),
          ' 在天然的掩护中继续恰到好处的欺负着',
          urara.sex,
          '娇嫩敏感的三点。',
        ]);
        await era.printAndWait([
          '于此同时，想着贪嘴的担当在 ',
          me.get_colored_name(),
          ' 身上留下的痕迹，报复心高涨的 ',
          me.get_colored_name(),
          ' 也瞄准小',
          urara.get_uma_sex_title(),
          '脖子上细嫩的皮肤用力吻了下去。',
        ]);
        await era.printAndWait([
          '随着',
          urara.get_teen_sex_title(),
          '身体突然的抖动，',
          me.get_colored_name(),
          ' 伸入安全裤的手逐渐有了一丝潮湿的触感。难道',
          urara.sex,
          '……？',
        ]);
        await era.printAndWait([
          '被下了一跳的 ',
          me.get_colored_name(),
          ' 猛地收回了手，而 ',
          urara.get_colored_name(),
          ' 也终于在身体的催促中朦胧地睁开了眼睛。',
        ]);
        await urara.say_and_wait([callname, '～电影……呜嗯嗯嗯嗯——？！']);
        await era.printAndWait([
          '在刚睡醒的迷茫中，',
          urara.get_colored_name(),
          ' 幼小的身体在因 ',
          me.get_colored_name(),
          ' 所积压的刺激中颤抖着决堤了——',
        ]);
        await era.printAndWait([
          '在 ',
          urara.get_colored_name(),
          ' 股间传来的淅淅沥沥的水声中，',
          me.get_colored_name(),
          ' 这才想起，因为电影实在无聊，',
          urara.sex,
          '在睡前就迅速喝完了一大杯饮料……',
        ]);
        await era.printAndWait([
          '带着歉意，',
          me.get_colored_name(),
          ' 一边安慰因「不小心」失禁而哭哭啼啼的 ',
          urara.get_colored_name(),
          '，一边将',
          urara.sex,
          '送去了厕所。',
        ]);
        await era.printAndWait([
          '而在提前带小',
          urara.get_uma_sex_title(),
          '回去的路上，',
          me.get_colored_name(),
          ' 又总觉得碰过 ',
          urara.get_colored_name(),
          ' 私处的手，还是有着湿润又粘稠的触感……',
        ]);
        set_palam_to_max(52, part_enum.clitoris);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.clitoris),
          false,
        );
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.breast),
          false,
        );
      } else {
        await era.printAndWait([
          '但在 ',
          me.get_colored_name(),
          ' 打算叫醒 ',
          urara.get_colored_name(),
          ' 时，小',
          urara.get_uma_sex_title(),
          '却在再次翻身后，正好咬住了 ',
          me.get_colored_name(),
          ' 停在身前的手指。',
        ]);
        await era.printAndWait([
          '温热细嫩的舌头勾住 ',
          me.get_colored_name(),
          ' 的指尖，将 ',
          me.get_colored_name(),
          ' 的手指一点点地卷入口中。',
        ]);
        await era.printAndWait([
          urara.get_teen_sex_title(),
          '努力的张开小嘴，手指随着舌尖的环绕爱抚开始脱离 ',
          me.get_colored_name(),
          ' 的控制，主动探入了温热绵软的深处。',
        ]);
        await era.printAndWait([
          '看着不断发出着迷幻的吮吸声的小小担当，',
          me.get_colored_name(),
          ' 感到有些窒息，却又不敢移开视线。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' 是个纯洁又很淫乱的孩子」。',
        ]);
        await era.printAndWait([
          '从第一次见到',
          urara.sex,
          '时 ',
          me.get_colored_name(),
          ' 就产生了这样下流的预感，但等 ',
          urara.get_colored_name(),
          ' 真的将本性暴露出来时，',
          me.get_colored_name(),
          ' 却慌了。',
        ]);
        await era.printAndWait([
          '在品尝的最后，伴随着液体的滴落与手指的解放，小',
          urara.get_uma_sex_title(),
          '在 ',
          me.get_colored_name(),
          ' 的指节上轻轻印下了一个小小的牙印。',
        ]);
        await era.printAndWait([
          '像是在回味般咂了咂嘴，',
          urara.get_colored_name(),
          ' 带着还在梦中的笑容换了个姿势，又继续咬起了 ',
          me.get_colored_name(),
          ' 的衣领。',
        ]);
        await era.printAndWait([
          '受到冲击的 ',
          me.get_colored_name(),
          ' 就这样呆呆地坐在座位上，任由 ',
          urara.get_colored_name(),
          ' 将',
          urara.sex,
          '的味道继续在梦中涂抹着。',
        ]);
        await era.printAndWait([
          '直到电影快放完的时候，',
          me.get_colored_name(),
          ' 才因为怀中传来的一句微弱呼唤回过神来。',
        ]);
        await urara.say_and_wait([callname, '……我想上厕所……']);
        await era.printAndWait([
          '回过神来，',
          me.get_colored_name(),
          ' 也想起了 ',
          urara.get_colored_name(),
          ' 在睡着前好像喝过一大杯饮料的事。',
        ]);
        await era.printAndWait([
          '于是就像逃跑似的，你带着还揉着眼睛的 ',
          urara.get_colored_name(),
          ' 匆匆忙忙地逃向了厕所……',
        ]);
        set_palam_to_max(52, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.mouth),
          false,
        );
      }
      era.println();
      era.set('status:52:沉睡', 0);
      end_ero_and_train();
      await era.printAndWait([
        '理所当然的，因为忘记遮掩 ',
        urara.get_colored_name(),
        ' 留下的咬痕而被人发现的 ',
        me.get_colored_name(),
        '，被骏川小姐狠狠地谈话了一番。',
      ]);
      await era.printAndWait('当然这些跟观影时的经过相比，也没那么重要了。');
      era.drawLine();
      await in_urara.say_as_unknown_and_wait('……');
      await in_urara.say_as_unknown_and_wait(
        '果然有些作品，对人类来说还是为时尚早了。',
      );
    } else {
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait(
            '爆米花很好吃、饮料也很好喝！但是果然还是电影更重要！',
          );
          await urara.say_and_wait('这次的话，我想要集中精力看电影！');
          await era.printAndWait([
            '不过虽然 ',
            urara.get_colored_name(),
            ' 这么说，察觉到',
            urara.sex,
            '还是想吃的 ',
            me.get_colored_name(),
            ' 依旧买了爆米花和饮料。',
          ]);
          break;
        case 1:
          await urara.say_and_wait([
            '没关系的 ',
            callname,
            '！只要够有趣的话乌拉拉就不会睡着……大概吧！',
          ]);
          await era.printAndWait([
            '在选择了意外的严肃题材的电影后，',
            urara.get_colored_name(),
            ' 对 ',
            me.get_colored_name(),
            ' 自信地宣言道。',
          ]);
          await era.printAndWait([
            '不过，真的没关系吗？看着 ',
            urara.get_colored_name(),
            ' 的笑脸，',
            me.get_colored_name(),
            ' 还是有些担忧。',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            '《幻之',
            urara.get_uma_sex_title(),
            '》又复映了！每次看都感觉主角的样子很亲切！但是，为什么呢？',
          ]);
          await era.printAndWait([
            '在路过其中一个放映厅时，看着墙上的信息，',
            urara.get_colored_name(),
            ' 对 ',
            me.get_colored_name(),
            ' 这样说道。',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' 一直是很敏锐的，或许',
            urara.sex,
            '真的在这部经典电影里发现了重要的事也说不定。',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            '听说这个电影里有吓人的桥段，但是乌拉拉很勇敢哦！',
          );
          await urara.say_and_wait([
            '所以如果 ',
            callname,
            ' 被吓到的话，乌拉拉可以安慰 ',
            callname,
            ' 哟？',
          ]);
          await era.printAndWait([
            '在黑暗中悄悄拉起扶手，',
            urara.get_colored_name(),
            ' 透过肌肤接触，将加速心跳与上升的体温传递给 ',
            me.get_colored_name(),
            '。',
          ]);
          break;
        case 4:
          await urara.say_and_wait(
            '嘿嘿～虽然还是有些不懂的地方，但男主和女主的关系真好啊！',
          );
          await urara.say_and_wait([
            '不过 ',
            callname,
            ' 和乌拉拉也是这么好的对吧？这点乌拉拉很清楚哟！',
          ]);
          await era.printAndWait([
            '在影院座椅的扶手上，',
            urara.get_colored_name(),
            ' 带着稍显成熟的微笑紧紧握住了 ',
            me.get_colored_name(),
            ' 的手。',
          ]);
          break;
        case 5:
          await urara.say_and_wait([
            '如果有一天乌拉拉的故事也能变成电影的话……乌拉拉希望主角一定要以 ',
            callname,
            ' 为原型！',
          ]);
          await urara.say_and_wait(
            '因为，我希望『乌拉拉』，永远都是只属于『训练员』的担当！',
          );
          await era.printAndWait([
            '安心地靠在 ',
            me.get_colored_name(),
            ' 的肩头，',
            urara.get_teen_sex_title(),
            '樱瞳里的光随着荧屏的变化柔和地闪烁着。',
          ]);
      }
    }
  };
};
