const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_random_value } = require('#/utils/value-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const base_base_reward = {};
base_base_reward['体力'] = 300;

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (kitaru, me, callname, flags) => {
    await print_event_name('圣瓦伦汀的局外人', kitaru);
    await era.printAndWait(
      '圣瓦伦汀之日的特雷森学院，一如既往的被微妙的桃色氛围所笼罩。',
    );
    await era.printAndWait([
      '空气如饱含汁水般甜蜜，充斥巧克力的甜腻味道与赛',
      kitaru.get_uma_sex_title(),
      '们不自觉散发出的荷尔蒙味道。',
    ]);
    await era.printAndWait(
      '而情人节的主角自然是各位训练员了，这似乎成为了校内，乃至社会上的约定俗成。',
    );
    era.printButton('「真是奇怪。」', 1);
    await era.input();
    if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2) {
      await era.printAndWait([
        '今天一天品尝了不少担当送 ',
        me.get_colored_name(),
        ' 的巧克力，也有可能是担当本身。',
      ]);
      await era.printAndWait([
        '然而 ',
        kitaru.get_colored_name(),
        ' 还是没有出现。',
      ]);
    } else {
      await era.printAndWait([
        '不过，',
        me.get_colored_name(),
        ' 似乎是那个例外。',
      ]);
      await era.printAndWait([
        '今天一天没见到 ',
        kitaru.get_colored_name(),
        '。',
      ]);
    }
    if (era.get('love:56') >= 75) {
      await era.printAndWait([
        '一直等到了晚上，也没有收到任何来自 ',
        kitaru.get_colored_name(),
        ' 的消息。',
      ]);
      await era.printAndWait([
        '短信……没有消息，电话……也没有接通，',
        me.get_colored_name(),
        ' 甚至询问了',
        kitaru.sex,
        '的舍友，',
        kitaru.sex,
        '并没有向舍友透露自己今天的行程。',
      ]);
      await era.printAndWait('有些失落的回到了家中。');
      era.set('flag:当前位置', location_enum.home);
      era.drawLine({ content: me.name + '的自宅' });
      await era.printAndWait(
        '靠在沙发上，静看电子钟的数位屏显示的时间愈发逼近0点。',
      );
      await era.printAndWait([
        '有些失望……当 ',
        me.get_colored_name(),
        ' 无意间扫过几件 ',
        kitaru.get_colored_name(),
        ' 送给 ',
        me.get_colored_name(),
        ' 的开运物品时，',
        me.get_colored_name(),
        ' 如此想着。',
      ]);
      era.printButton('聆听检定', 1);
      await era.input();
      era.println();
      let result = get_random_value(65, 90);
      if (result > 60) {
        await era.printAndWait([
          '出目：',
          result,
          '/？？',
          { isBr: true },
          me.get_colored_name(),
          ' 的聆听检定: 失败',
        ]);
        await era.printAndWait('没听见什么，天气倒是让人昏昏欲睡。');
      }
      await era.printAndWait([
        '就当 ',
        me.get_colored_name(),
        ' 要在沙发上沉沉睡去时，窗户那边似乎有插销声响起，而后……',
      ]);
      await kitaru.say_and_wait('呼啊！');
      await era.printAndWait('眼前出现了一抹熟悉的栗色身影。');
      await era.printAndWait([
        '不知何时，',
        kitaru.get_colored_name(),
        ' 出现在了 ',
        me.get_colored_name(),
        ' 的面前，而更令 ',
        me.get_colored_name(),
        ' 感到躁动的则是',
        kitaru.sex,
        '糟糕的姿势。',
      ]);
      await era.printAndWait([
        '橘色头发的',
        kitaru.get_teen_sex_title(),
        '正骑在 ',
        me.get_colored_name(),
        ' 的腰间，',
        me.get_colored_name(),
        ' 能察觉到',
        kitaru.sex,
        '被裙子遮住的臀部摩擦 ',
        me.get_colored_name(),
        ' 裤子布料的声音。',
      ]);
      await era.printAndWait([
        '应该只是 ',
        kitaru.get_colored_name(),
        ' 一贯的无距离感行为吧？',
      ]);
      await kitaru.say_and_wait([callname, '，情人节快乐！']);
      await era.printAndWait(
        '声音带着剧烈运动之后特有的一丝疲倦，刚刚说出那番话的时也是气喘吁吁的，看来是一路跑过来的。',
      );
      await era.printAndWait([
        '而校服上，甚至于是',
        kitaru.sex,
        '橘黄色的头发上也沾了不少的棕色污渍，从',
        kitaru.sex,
        '身上那股浓郁的香气来看，应该在制作过程中不小心撒上去的巧克力。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '从背后拿出了一个带着折皱的礼盒，放在了 ',
        me.get_colored_name(),
        ' 的胸口上。',
      ]);
      await kitaru.say_and_wait('请看！');
      await kitaru.say_and_wait('这是我花了一天时间为你摘下来的星星哦！');
      await era.printAndWait(
        '打开了礼盒，里面是整整十二个象征着星座的巧克力，份量对于一个人来说无论如何都有些过多了。',
      );
      era.printButton('「要我一个人吃完吗？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
      );
      await kitaru.say_and_wait('你看，我是双子座的。');
      await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
      await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
      await kitaru.say_and_wait('好在及时赶上了，差点就错过了今天的情人节呢！');
      era.printButton('「辛苦了！」', 1);
      await era.input();
      await kitaru.say_and_wait('就是说啊……所以呢！');
      await kitaru.say_and_wait('那个～我想拜托你一件事情！');
      await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
      await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
      await era.printAndWait([
        '随着话语愈发向着不符合师生关系的情况发展，',
        kitaru.get_colored_name(),
        ' 的面色也愈发的绯红起来。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '看着那盒摊开放在 ',
        me.get_colored_name(),
        ' 胸口的巧克力，一丝欲望自心底升起。',
      ]);
      era.printButton('「想要奖励吗？」', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('只是吃下巧克力（体力+300）', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('欸！？');
        await era.printAndWait([
          '这么询问着，右手则捏住了',
          kitaru.sex,
          '腰侧的软肉。',
        ]);
        await era.printAndWait([
          '后知后觉的意识到了自己此时的姿势和所谓的骑乘位没什么两样，',
          kitaru.get_teen_sex_title(),
          '的面色更加的红润，尾巴有意无意地拍了几下 ',
          me.get_colored_name(),
          ' 的腿。',
        ]);
        await era.printAndWait('随后是细若蚊鸣的回应传来。');
        await kitaru.say_and_wait('……想');
        era.printButton('「大点声哦！？」', 1);
        await era.input();
        await kitaru.say_and_wait('唔……巧克力还没吃呢……');
        await era.printAndWait([
          '听到回答，',
          me.get_colored_name(),
          ' 松开右手。',
        ]);
        await era.printAndWait('啪！');
        await kitaru.say_and_wait('咿呀！');
        await era.printAndWait([
          me.get_colored_name(),
          '的手指拢齐，并作成手掌，以不轻不重的力道，极快地在',
          kitaru.get_teen_sex_title(),
          '挺翘的臀部上打了一下。',
        ]);
        await era.printAndWait('随着洁白臀肉的抖动，酥麻的快感传递开来。');
        await era.printAndWait([
          '接下来，趁着',
          kitaru.get_teen_sex_title(),
          '分神的瞬间，',
          me.get_colored_name(),
          ' 伸出双手，和骑在自己身上的',
          kitaru.get_teen_sex_title(),
          '的双手相扣。',
        ]);
        era.printButton('「那你喂我。」', 1);
        await era.input();
        await kitaru.say_and_wait('欸！可是……');
        await era.printAndWait([
          kitaru.get_teen_sex_title(),
          '柔若无骨的双手被 ',
          me.get_colored_name(),
          ' 握着，自然是没有办法用手喂 ',
          me.get_colored_name(),
          ' 的。',
        ]);
        await kitaru.say_and_wait('我明白了……');
        await era.printAndWait('毕竟是占卜师，悟性自然是不差的。');
        await era.printAndWait([
          kitaru.sex,
          '像一只可爱的小狗狗一样，缓缓的俯下身子。',
        ]);
        await era.printAndWait([
          '衔起了一块巧克力，抿紧嘴唇轻轻的送到了 ',
          me.get_colored_name(),
          ' 的嘴边。',
        ]);
        await era.printAndWait('咔嚓。');
        await era.printAndWait(
          '巧克力被从中间分开，如先前所说的一样二人各吃一块。',
        );
        await era.printAndWait([
          '碎屑落在了 ',
          me.get_colored_name(),
          ' 的身上，又被',
          kitaru.get_teen_sex_title(),
          '小心地用舌尖拭去。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的脸上布满了娇艳欲滴的绯红，有不少顺着纤细的脖颈蔓延，将挺拔的锁骨都涂满了颜色。',
        ]);
        await era.printAndWait([
          '本来处于半躺状态的 ',
          me.get_colored_name(),
          ' 趁着',
          kitaru.get_teen_sex_title(),
          '对付巧克力的分神，坐了起来。',
        ]);
        await kitaru.say_and_wait('咕！');
        await era.printAndWait([
          '撬开了 ',
          kitaru.get_colored_name(),
          ' 的口腔，半融化的巧克力液随着舌头一起挺入',
          kitaru.sex,
          '的口腔。',
        ]);
        await kitaru.say_and_wait('唔哈……');
        await era.printAndWait([
          '舌头在',
          kitaru.sex,
          '的口腔中游走，将巧克力的味道和',
          kitaru.get_teen_sex_title(),
          '的唾液混合在一起，在搅动间发出浓稠的淫靡声响。',
        ]);
        await kitaru.say_and_wait('咕……');
        await era.printAndWait([
          '先是北河二，再是北河三，象征着 ',
          kitaru.get_colored_name(),
          ' 的两块巧克力就这样化作混着双方唾液的液体进入二人腹中。',
        ]);
        await era.printAndWait([
          '而身前已经在方才可可味的激吻中被 ',
          me.get_colored_name(),
          ' 弄到有些失神的 ',
          kitaru.get_colored_name(),
          '，正满足地喘息着。',
        ]);
        await era.printAndWait(
          '时不时吐出来的小舌头上还粘着些许融化的巧克力，黑色与粉色互相交叠。',
        );
        await kitaru.say_and_wait([callname, '……想要！']);
        await quick_into_sex(56);
      } else {
        await era.printAndWait([
          '不能辜负 ',
          kitaru.get_colored_name(),
          ' 的好心。',
        ]);
        await era.printAndWait([me.get_colored_name(), '认真的吃起了巧克力。']);
        flags.wait_flag = get_attr_and_print_in_event(
          56,
          undefined,
          0,
          base_base_reward,
        );
        flags.wait_flag =
          get_attr_and_print_in_event(0, undefined, 0, base_base_reward) ||
          flags.wait_flag;
      }
    } else {
      await era.printAndWait([
        '直到晚上，接到了来自 ',
        kitaru.get_colored_name(),
        ' 的电话。',
      ]);
      await kitaru.say_and_wait('那个，能在学校附近的公园见一面吗？');
      era.drawLine({ content: '公园' });
      await era.printAndWait([
        '等了好一会儿，才看到从入口处匆忙跑过来的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait(['啊！', callname, '，不好了！不好了！']);
      await era.printAndWait([
        me.get_colored_name(),
        '见着橘色头发的',
        kitaru.get_teen_sex_title(),
        '焦急的向 ',
        me.get_colored_name(),
        ' 跑过来。',
      ]);
      await era.printAndWait([
        '校服上沾了不少的棕色污渍，细闻可以感受到',
        kitaru.sex,
        '身上沾染着的浓郁巧克力香气。',
      ]);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await kitaru.say_and_wait('因为星星实在太多，星座们全都掉出来了呢！');
      await kitaru.say_and_wait('你看！');
      await era.printAndWait([
        kitaru.sex,
        '把藏在背后的礼盒向 ',
        me.get_colored_name(),
        ' 递上。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '配合的露出了惊喜的表情。',
      ]);
      era.printButton('接过礼盒', 1);
      await era.input();
      await kitaru.say_and_wait('开玩笑的啦！');
      await kitaru.say_and_wait('这是我费劲心思制作的十二星座巧克力。');
      await kitaru.say_and_wait('今天可是情人节啊！');
      await kitaru.say_and_wait('身为喜欢占卜的人，自然要认真的过节才行！');
      await era.printAndWait([
        '在',
        kitaru.sex,
        '热切的目光下，',
        me.get_colored_name(),
        ' 打开了礼盒。',
      ]);
      await era.printAndWait([
        '整整十二个象征着星座的巧克力，尽管做工有些粗糙，但',
        kitaru.get_teen_sex_title(),
        '的心意确实的蕴含在其中，除了份量对于一个人来说无论如何都有些过多了。',
      ]);
      era.printButton('「要我一个人吃完吗？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
      );
      await kitaru.say_and_wait('你看，我是双子座的。');
      await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
      await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
      await kitaru.say_and_wait('好在及时赶上了，差点就错过了今天的情人节呢！');
      era.printButton('「辛苦了！」', 1);
      await era.input();
      await kitaru.say_and_wait('就是说啊……所以呢！');
      await kitaru.say_and_wait('那个～我想拜托你一件事情！');
      await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
      await era.printAndWait([
        '指了指盒中看起来有些粗糙的手工巧克力，',
        kitaru.get_teen_sex_title(),
        '的脸颊有些若有若无的绯红。',
      ]);
      await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
      await era.printAndWait([
        '似乎是无自觉的说出了似乎有些不符合师生关系的发言，',
        kitaru.get_colored_name(),
        ' 双手合十的看着 ',
        me.get_colored_name(),
        '。',
      ]);
      era.printButton('点头', 1);
      await era.input();
      await era.printAndWait([
        '之后和 ',
        kitaru.get_colored_name(),
        ' 一起食用了巧克力，',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(
        56,
        undefined,
        0,
        base_base_reward,
      );
      flags.wait_flag =
        get_attr_and_print_in_event(0, undefined, 0, base_base_reward) ||
        flags.wait_flag;
      await kitaru.say_and_wait('呼啊！比想象中还要甜呢！');
      await kitaru.say_and_wait([callname, '，祝你情人节快乐！']);
    }

    era.set('cflag:56:节日事件标记', 0);
  };

  handlers[95 + 11] = async (kitaru, me, callname, flags) => {
    await print_event_name('不稳定星等', kitaru);
    await era.printAndWait([
      '接连获得胜利的 ',
      kitaru.get_colored_name(),
      ' 在金號赏后受到了电视台采访的邀请。',
    ]);
    await era.printAndWait([
      '在赛',
      kitaru.get_uma_sex_title(),
      '中出身平平无奇的 ',
      kitaru.get_colored_name(),
      ' 在青叶赏的糟糕表现之后，还能接连取下包括菊花赏在内的几场重赏的冠军，',
      kitaru.sex,
      '也算是跑进了众人的视野中。',
    ]);
    await era.printAndWait([
      '推不掉，毕竟相较于同期早早就宣称是以挑战速度极限的栗毛赛',
      kitaru.get_uma_sex_title(),
      '，还是来自于目白家的长距离赛',
      kitaru.get_uma_sex_title(),
      '，除了赛场，胜者live以外，偶尔会在神社露面的 ',
      kitaru.get_colored_name(),
      ' 可称得上是神秘。',
    ]);
    await era.printAndWait([
      '作为',
      kitaru.sex,
      '的训练员，理所应当的需要陪',
      kitaru.sex,
      '一起接受采访，况且……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 想起了',
      kitaru.sex,
      '在金號赏后的表现，似乎在那次比赛之后，意识到什么的 ',
      kitaru.get_colored_name(),
      ' 又回到了那个不稳定的精神状态。',
    ]);
    era.drawLine({ content: '演播室内' });
    await kitaru.say_and_wait('嗯，是的');
    await kitaru.say_and_wait('也许吧');
    await kitaru.say_and_wait('……');
    await era.printAndWait([
      '在赛后的采访中，',
      kitaru.get_colored_name(),
      ' 回答的颇为勉强，多亏了 ',
      me.get_colored_name(),
      ' 打的圆场，才让话题风向往着 ',
      kitaru.get_colored_name(),
      ' 是一个冷静而沉默寡言的',
      kitaru.get_uma_sex_title(),
      '导去。',
    ]);
    await era.printAndWait([
      '冷静，沉默寡言会和 ',
      kitaru.get_colored_name(),
      ' 关联到一起？真是令 ',
      me.get_colored_name(),
      ' 难以想象。',
    ]);
    await era.printAndWait([
      '好在眼看着这场考验就要抵达尽头，',
      me.get_colored_name(),
      ' 已经开始计划着之后针对 ',
      kitaru.get_colored_name(),
      ' 的疗愈方案。',
    ]);
    await era.printAndWait('不对！');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 被汗浸润的橘发贴在额头上，马耳像是受惊了般竖起来。',
    ]);
    await era.printAndWait('必须要叫停了，然而下一个问题已近被抛了出来。');
    await era.printAndWait(['女主持人:「那么，我想问一下……」']);
    await era.printAndWait([
      '女主持人:「',
      kitaru.get_colored_name(),
      ' 选手目前是为了什么在奔跑呢？」',
    ]);
    await kitaru.say_and_wait('为什么', true);
    await kitaru.say_and_wait('胜利吗？', true);
    await kitaru.say_and_wait('奖金吗？', true);
    await kitaru.say_and_wait('还是别的什么？', true);
    await kitaru.say_and_wait('姐姐？');
    await era.printAndWait(['女主持人:「嗯？抱歉，能再说一遍吗？」']);
    await kitaru.say_and_wait('但是……', true);
    await kitaru.say_and_wait('但是我已经跑出来了啊！！！！！');
    await era.printAndWait('不不不不不！！！！！', {
      align: 'center',
      color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
      fontSize: '24px',
      fontWeight: 'bold',
    });
    await kitaru.say_and_wait('唔！');
    await era.printAndWait([
      '在昏迷的 ',
      kitaru.get_colored_name(),
      ' 向后栽倒在地上前，',
      me.get_colored_name(),
      ' 冲了上去，及时扶住了',
      kitaru.sex,
      '。',
    ]);
    await era.printAndWait(['采访中断。']);
    era.drawLine({ content: '几天后' });
    await era.printAndWait(['检查并无大碍，只是需要多休息。']);
    await kitaru.say_and_wait(['抱歉，又麻烦 ', callname, ' 了。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 听着沙发上病怏怏的 ',
      kitaru.get_colored_name(),
      ' 对 ',
      me.get_colored_name(),
      ' 说着抱歉。',
    ]);
    await era.printAndWait(
      '是啊，光是处理在演播室昏迷导致的舆论爆炸，就让你这几天焦头烂额。',
    );
    await era.printAndWait([
      '晕倒在演播室的 ',
      kitaru.get_colored_name(),
      '，无疑把 ',
      me.get_colored_name(),
      ' 推上了风口浪尖。',
    ]);
    await era.printAndWait([
      '不过，眼下更重要的，还是愈发变得不稳定的 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    era.set('status:56:凶', 1);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
    flags.wait_flag = get_skills_and_print_in_event(56, [200851]);
    flags.wait_flag =
      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0) || flags.wait_flag;
    flags.wait_flag = sys_change_motivation(56, -3) || flags.wait_flag;
  };

  handlers[95 + 12] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2),
      tannhauser = get_chara_talk(62),
      bright = get_chara_talk(74);
    await print_event_name('落入鲸鱼之腹', kitaru);
    await era.printAndWait([
      '在那次采访之后，',
      kitaru.get_colored_name(),
      ' 陷入了低沉。',
    ]);
    await era.printAndWait('今天甚至还翘掉了训练。');
    await era.printAndWait('放不下心。');
    await era.printAndWait([
      '虽然',
      kitaru.sex,
      '已经给 ',
      me.get_colored_name(),
      ' 留了不用担心',
      kitaru.sex,
      '的消息，但是那种不安感还是在 ',
      me.get_colored_name(),
      ' 心中挥之不去。',
    ]);

    //理论上来说，这里应该有差分
    await bright.say_as_unknown([
      sys_get_colored_callname(16, 56),
      ' 吗？……没见到呢。',
    ]);
    await tannhauser.say_as_unknown([
      '诶！今天',
      kitaru.sex,
      '早上出宿舍就没见过了。',
    ]);
    await suzuka.say_as_unknown([
      '抱歉……',
      sys_get_callname(2, 0),
      '，我也没见到。',
    ]);

    await era.printAndWait([
      '接连询问了几个同学也没得到担当的下落，如果是 ',
      kitaru.get_colored_name(),
      '，现在最有可能会去哪里？',
    ]);
    await era.printAndWait([
      '不，不会是',
      kitaru.sex,
      '经常参拜的神社，也不会是学校那些学生们常去的枯树洞。',
    ]);
    era.drawLine({ content: '市郊墓园' });
    await era.printAndWait([
      '橘色的赛',
      kitaru.get_uma_sex_title(),
      '正对着那方代表着',
      kitaru.sex,
      '已逝姐姐的墓碑发着呆。',
    ]);
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await kitaru.say_and_wait(['……', callname, '！']);
    await kitaru.say_and_wait('果然还是被找到了吗？');
    await kitaru.say_and_wait('欸嘿嘿……？');
    era.printButton('使用铁爪', 1);
    await era.input();
    await kitaru.say_and_wait('啊呜！');
    await era.printAndWait([
      '被 ',
      me.get_colored_name(),
      ' 拍到头的',
      kitaru.get_teen_sex_title(),
      '发出了一声悲鸣。',
    ]);
    era.printButton('「需要帮助吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('诶，不用啦！');
    await kitaru.say_and_wait('你看，我现在好多啦！');
    era.printButton('「实际呢？」', 1);
    era.printButton('「说实话。」', 2);
    await era.input();
    await kitaru.say_and_wait('很害怕……');
    era.printButton('「害怕？」', 1);
    await era.input();
    await kitaru.say_and_wait('……嗯。');
    await kitaru.say_and_wait(
      '占卜和挑选良辰吉日，真的都很好啊，它们总是在背后为我助力……',
    );
    await kitaru.say_and_wait('从那时起，就一直如此。');
    await era.printAndWait([
      '伸手抚摸着大理石墓碑的表面，',
      kitaru.get_colored_name(),
      ' 眼中的星星蒙上了一层阴霾。',
    ]);
    await kitaru.say_and_wait('我自打很小的时候，就开始相信占卜了。');
    await kitaru.say_and_wait([
      '就这样，大吉之日的我碰到了 ',
      callname,
      '，强撑着一直往答应姐姐的菊花赏走了下去。',
    ]);
    await kitaru.say_and_wait(
      '本来以为夺下菊花赏之后，只要有着命定之人和开运物品的陪伴，我就会幸福的吧？',
    );
    await kitaru.say_and_wait([
      '结果在金鯱赏之后，发现自己还是以前那个缩在姐姐影子里的小',
      kitaru.get_uma_sex_title(),
      '。',
    ]);
    await kitaru.say_and_wait([
      '完全不知道为什么要成为赛',
      kitaru.get_uma_sex_title(),
      '，只是凭着命定之人的指示踏上赛场罢了……',
    ]);
    await kitaru.say_and_wait('是不是就此退役比较好呢？');
    era.printButton('「为什么？」', 1);
    await era.input();
    await kitaru.say_and_wait('对啊！');
    await era.printAndWait([
      kitaru.sex,
      '点了点头，失去高光的星星瞳呆滞地望着墓园里的湖面。',
    ]);
    await kitaru.say_and_wait([
      '没有目标，完全辜负了粉丝，乃至 ',
      callname,
      ' 愿望的，被神灵舍弃了的我！',
    ]);
    await kitaru.say_and_wait(
      '就该去当池子里的碎藻，载浮载沉，最后被吞入鱼腹才对啊！',
    );
    await kitaru.say_and_wait([
      '说起来，',
      callname,
      ' 为什么会支持我到现在呢？',
    ]);
    await kitaru.say_and_wait('明明我总是犯错，还经常得寸进尺……');
    era.printButton('「因为喜欢福来的奔跑」', 1);
    era.printButton('「想要实现福来的愿望」', 2);
    await era.input();
    await kitaru.say_and_wait('欸！！！！！！');
    era.printButton('「我说了什么奇怪的话吗？」', 1);
    await era.input();
    await kitaru.say_and_wait(
      '没有！只是在想……要是我也能说出这样帅气的话就好了。',
    );
    await kitaru.say_and_wait('可光是决定自己下一步要怎么走就分身乏术了。');
    era.printButton('「是这样吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('欸？');
    era.printButton('「不过，我觉得阿福你也很厉害喔！」', 1);
    await era.input();
    await kitaru.say_and_wait('唔！');
    era.printButton('「你是能从别人给你的东西中找出合适的答案的人。」', 1);
    await era.input();
    await era.printAndWait([
      '面前',
      kitaru.get_uma_sex_title(),
      '的双耳摆动了起来。',
    ]);
    era.printButton('「我说的没错吧？」', 1);
    await era.input();
    await kitaru.say_and_wait([callname, '……']);
    await kitaru.say_and_wait('谢谢你，就算只是安慰人的话，我也很开心了。');
    await kitaru.say_and_wait([
      '……明明我也让 ',
      callname,
      ' 和支持自己的粉丝们失望了。',
    ]);
    era.printButton('「那么在宝冢纪念上给大家赔罪吧！」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯！');
    await kitaru.say_and_wait('嗯？啊啊啊，不行，绝对不行的啊！');
    await kitaru.say_and_wait(
      '宝冢纪念——不就是必须要粉丝投票后才能参加的比赛吗？',
    );
    await era.printAndWait([
      '安慰着声音正不断变大的 ',
      kitaru.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 开始替',
      kitaru.sex,
      '思考起粉丝感谢祭拉票的办法。',
    ]);
    era.println();
    era.set('status:56:PTSD', 0);
    await era.printAndWait([kitaru.get_colored_name(), ' 的PTSD暂时失去了。']);
    flags.wait_flag = get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
  };

  handlers[95 + 14] = async (kitaru, me, callname) => {
    await print_event_name(
      ['背负众人愿望的', kitaru.get_teen_sex_title()],
      kitaru,
    );
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 在先前采访上的糟糕表现，引来了不少媒体的抨击。',
    ]);
    await kitaru.say_and_wait(['唔啊！', callname, '。真的没有问题吗？']);
    await kitaru.say_and_wait('那个，我记得那些报纸上都说我……');
    await me.say_and_wait([
      '……',
      kitaru.get_colored_name(),
      ' 的表现实在让人看不下去……',
    ]);
    await me.say_and_wait(['……缺乏运动员的骄傲与回应粉丝的精神……']);
    await me.say_and_wait(['……并不热爱比赛……']);
    await kitaru.say_and_wait('啊！没必要说出来吧！');
    await kitaru.say_and_wait('不过……算了，毕竟我就是那样没错。');
    await kitaru.say_and_wait('真的，很刺耳……刺耳到感觉耳朵快掉下来了。');
    await kitaru.say_and_wait('怕是我一上场，就会吃到鸡蛋雨吧……');
    era.printButton('「好了，该上场了！」', 1);
    await era.input();
    era.printButton('「相信我，不会有问题的！」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '在先前的调查中发现，社交媒体上，',
      kitaru.get_colored_name(),
      ' 的粉丝们并没有因为',
      kitaru.sex,
      '在采访上的表现而放弃',
      kitaru.sex,
      '。',
    ]);
    await era.printAndWait([
      '反而是在',
      kitaru.sex,
      '的粉丝群中，有一些人在 ',
      me.get_colored_name(),
      ' 的引导下，开始为',
      kitaru.sex,
      '的参赛资格投票。',
    ]);
    await kitaru.say_and_wait(['唔！如果 ', callname, ' 你这么说的话……']);
    await kitaru.say_and_wait(
      '总之！如果我在粉丝的骂声中去往了天国，我的水晶球就交给你了！',
    );
    await era.printAndWait([
      '带着几分踏上刑场的悲壮，',
      kitaru.get_colored_name(),
      ' 向前走去。',
    ]);
    era.drawLine({ content: '一段时间后' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 正站在饰以URA徽记的采访背景墙前。',
    ]);
    await say_by_passer_by_and_wait('女主持人', [
      kitaru.get_colored_name(),
      ' ',
      kitaru.get_adult_sex_title(),
      '，你愿意告诉我们你春季的目标吗？',
    ]);
    await kitaru.say_and_wait('咕啊！上来就问这种问题吗？');
    await era.printAndWait([
      '虽然早就预料到了 ',
      kitaru.get_colored_name(),
      ' 会有这样的反应，',
      me.get_colored_name(),
      ' 还是无奈地扶了扶额。',
    ]);
    await era.printAndWait([
      '从先前自己私下调查的情况来看，',
      kitaru.get_colored_name(),
      ' 的粉丝并没有因为',
      kitaru.sex,
      '在采访上的表现而放弃',
      kitaru.sex,
      '。',
    ]);
    era.printButton('「你就说给他们听吧。」', 1);
    await era.input();
    await era.printAndWait([
      '将手放在',
      kitaru.get_teen_sex_title(),
      '的肩膀上，稍稍用力将还在不断抗拒的',
      kitaru.sex,
      '推到了主持人的话筒前。',
    ]);
    await kitaru.say_and_wait('唔！确定嘛……好吧。');
    await kitaru.say_and_wait('各位，本人在这个春季的目标！');
    await kitaru.say_and_wait('与其说是目标，不如说是梦想吧——！');
    await kitaru.say_and_wait('是参加宝冢纪念！');
    await era.printAndWait([
      '似乎是自己都没察觉到会这么顺利的说出来，',
      kitaru.get_colored_name(),
      ' 的脸上先是惊讶，而后如等待审判般的低了下头。',
    ]);
    await kitaru.say_and_wait('咦？');
    era.printButton('鼓掌', 1);
    await era.input();
    await era.printAndWait('台下响起了一阵掌声。');
    await kitaru.say_and_wait('鼓掌？为什么呢？');
    await era.printAndWait([
      '粉丝A:「加油啊！',
      kitaru.get_colored_name(),
      '！」',
    ]);
    await era.printAndWait('粉丝B:「我会去帮你投票的！一定要出赛啊！」');
    await kitaru.say_and_wait('大家是怎么了？明明那次的采访那么糟糕……');
    await era.printAndWait([
      '粉丝A「啊！实在是太惨了呢，不过这就是 ',
      kitaru.get_colored_name(),
      ' 呀。」',
    ]);
    await era.printAndWait(
      '粉丝B「人偶尔也是会迷惘的嘛，该说会有种亲切感吗？」',
    );
    await kitaru.say_and_wait('亲切感……所以大家还没有放弃我吗？');
    await era.printAndWait(
      '粉丝C:「才不会放弃你呢！在菊花赏上的表现那么拼命，真是令人难忘！」',
    );
    await era.printAndWait('粉丝D「是啊！宝冢纪念一定要加油啊！」');
    await kitaru.say_and_wait('是的……是的……！');
    await kitaru.say_and_wait('我会再挑战一次看看的！');
    await era.printAndWait([
      '就算遭到了神明的舍弃，也会被粉丝们捡回来，在投票结果公布后，',
      kitaru.get_colored_name(),
      ' 勉强获得了宝冢纪念的参赛资格。',
    ]);
    era.set('cflag:56:节日事件标记', 0);
    await era.printAndWait([kitaru.get_colored_name(), ' 不再依赖运势……']);
    era.set('status:56:运势依赖', 0);
    era.set('status:56:大吉', 0);
    era.set('status:56:中吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:凶', 0);
  };
};
