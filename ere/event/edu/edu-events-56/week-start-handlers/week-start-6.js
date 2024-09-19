const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const palace = require('#/event/snippets/palace');
const palace_relation = require('#/event/snippets/palace-relation');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[143] = async (kitaru, me, callname, flags, edu_marks) => {
    // 圣诞节 差分，分为有马纪念胜利与未胜利。
    if (edu_marks.begin_race_end < 10) {
      await print_event_name('摘下胜利之星', kitaru);
      era.drawLine({ content: me.name + ' 的办公室' });
      await era.printAndWait(
        '距离有马纪念只剩下几天，不过在那之前，率先到来的是同样是一年一度的圣诞节。',
      );
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在研究着有马纪念战术的 ',
        me.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);
      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去。',
        me.get_colored_name(),
        ' 那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西突然被狭窄的窗户卡住，直到在',
        kitaru.get_uma_sex_title(),
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        me.get_colored_name(),
        ' 有些发抖，不过',
        kitaru.sex,
        '却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      era.printButton('「比较想要实体的星星。」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！天上的星星也不行吗？');
      await era.printAndWait([
        '在听到这句话的同时，橘发的',
        kitaru.get_teen_sex_title(),
        '顿时低下了头。',
      ]);
      era.printButton('「用有马纪念的胜利之星来装饰吧！」', 1);
      await era.input();
      await kitaru.say_and_wait('喔！有马纪念！');
      await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
      era.printButton('「那就这么说定了？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！……是，是的……我什么都答应。！');
      await kitaru.say_and_wait([
        '那个，今天的 ',
        callname,
        ' 真的好有魄力啊！',
      ]);
      await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
      ]);
      await era.printAndWait([
        '不过眼看着有马纪念就要到了，',
        me.get_colored_name(),
        ' 还是压下了自己逐渐膨胀的欲望。',
      ]);
      await era.printAndWait([
        '还没有星星可以装在圣诞树的顶端，和 ',
        kitaru.get_colored_name(),
        ' 一起去拿下最后的星星吧。',
      ]);
      await era.printAndWait('要是有马纪念之后再来庆祝圣诞节或许会比较好吧。');
      // era.set('cflag:56:节日事件标记', 0);
      //
    } else if (
      edu_marks.begin_race_end === 10 &&
      check_aim_race(new RaceHistory(56).get(), race_enum.arim_kin, 2, 1)
    ) {
      // 差分，分为有马纪念未进行
      await print_event_name('名叫待兼福来的星星', kitaru);
      era.drawLine({ content: me.name + ' 的办公室' });
      await era.printAndWait([
        '有马纪念结束了，不过在和 ',
        kitaru.get_colored_name(),
        ' 的契约结束之前，率先到来的是同样是一年一度的圣诞节。',
      ]);
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在办公室忙碌着年终报告的 ',
        me.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);
      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去，',
        kitaru.get_colored_name(),
        ' 正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西被狭窄的窗户卡住，直到在',
        kitaru.get_uma_sex_title(),
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        me.get_colored_name(),
        ' 有些发抖，不过 ',
        kitaru.get_colored_name(),
        ' 却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      if (era.get('love:56') < 75) {
        await era.printAndWait([
          '庆祝一阵后，和 ',
          kitaru.get_colored_name(),
          ' 回去了。',
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return;
      }

      era.printButton('「比较想要实体的星星。」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！天上的星星也不行吗？');
      await era.printAndWait([
        '在听到这句话的同时，橘发的',
        kitaru.get_teen_sex_title(),
        '顿时低下了头。',
      ]);
      era.printButton('「比如……名叫待兼福来的星星就不错呢！」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！我吗？');
      await era.printAndWait([
        '被叫到名字',
        kitaru.get_teen_sex_title(),
        '转过头来看着 ',
        me.get_colored_name(),
        '，十字星状的瞳孔中闪烁着北极星般的明亮光芒。',
      ]);
      await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
      await kitaru.say_and_wait([
        '那个，今天的 ',
        callname,
        ' 真的好有魄力啊！',
      ]);
      await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
      ]);
      await era.printAndWait([
        '下意识的伸出手，只是搭在 ',
        kitaru.get_colored_name(),
        ' 的身上，对',
        kitaru.sex,
        '的身体早就知根知底的 ',
        me.get_colored_name(),
        ' 便发现了',
        kitaru.sex,
        '即使是对',
        kitaru.get_uma_sex_title(),
        '而言也有些略高的体温。',
      ]);
      await era.printAndWait('先是隔着校服抚摸着肩膀。');
      await kitaru.say_and_wait('……欸。');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '顺势滑下后轻捏两下乳房，',
        kitaru.get_colored_name(),
        ' 便配合的发出了一声轻微的呻吟。',
      ]);
      await kitaru.say_and_wait('呜……');
      await kitaru.say_and_wait('那里很敏感的……', true);
      await era.printAndWait([
        '继续往下，指腹划过腰间，明明隔着冬季的厚重校服，',
        kitaru.get_colored_name(),
        ' 却像是被电到了般颤抖起来。',
      ]);
      await kitaru.say_and_wait('……哈。');
      await kitaru.say_and_wait('好久没有被命定之人这样触摸了啊……', true);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的吐息变得更加湿润而荡漾。',
      ]);
      await era.printAndWait([
        '眼前，清秀的面颊完全被赤色红潮浸染，双眼眸光流转、泪水盈盈的 ',
        kitaru.get_colored_name(),
        ' 对 ',
        me.get_colored_name(),
        ' 投来了期待的目光。',
      ]);
      await kitaru.say_and_wait('好想要……', true);
      era.printButton('一言不发的回去', 1);
      era.printButton('抱起待兼福来', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          '没有理会不知道在期待着什么的 ',
          kitaru.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 转身离开了天台。',
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return;
      }

      begin_and_init_ero(0, 56);
      era.set('status:56:短效避孕药', 1);
      await era.printAndWait([
        '为了应对有马纪念，',
        kitaru.get_colored_name(),
        ' 与 ',
        me.get_colored_name(),
        ' 早就禁欲了许久。',
      ]);
      await era.printAndWait(
        '而如果用一场酣畅淋漓的性爱来作为奖励的话，或许是个不错的选择。',
      );
      await kitaru.say_and_wait('欸啊！');
      await era.printAndWait([
        '用公主抱的姿势把双腿发软的 ',
        kitaru.get_colored_name(),
        ' 抱在怀中，',
        kitaru.get_colored_name(),
        ' 纤细的藕臂搂住了 ',
        me.get_colored_name(),
        ' 的脖子。',
      ]);
      await kitaru.say_and_wait([callname, ' 的气味……'], true);
      await kitaru.say_and_wait('好热……', true);
      await era.printAndWait([
        '不过只是走到天台入口的路程，',
        kitaru.get_colored_name(),
        ' 便按捺不住的把脸埋在 ',
        me.get_colored_name(),
        ' 的胸口，交叠在一起的双腿越来越过分的摩擦着，直到裙下的糟糕气味传入 ',
        me.get_colored_name(),
        ' 的鼻腔。',
      ]);
      era.printButton('抱起待兼福来', 1);
      await era.input();
      await kitaru.say_and_wait('嗯……', true);
      await era.printAndWait([
        '明明没有开口，不过 ',
        me.get_colored_name(),
        ' 还是看出了怀中担当的意愿。',
      ]);
      await era.printAndWait('关上了通向天台的大门，将寒风阻拦在外。');
      await era.printAndWait('楼梯口的空间并不算大。');
      await era.printAndWait([
        '让怀中的 ',
        kitaru.get_colored_name(),
        ' 背对着 ',
        me.get_colored_name(),
        ' 扶着内侧的水泥墙壁，把',
        kitaru.sex,
        '的校服裙子拉起，露出内裤。',
      ]);
      await kitaru.say_and_wait(
        ['唔，这个姿势，完全看不见 ', callname, '……'],
        true,
      );
      await era.printAndWait(
        '那片布料湿的仿佛能滴下水来，已经快在在双腿不断的交替摩擦间拧成了一股线。',
      );
      era.printButton('分开双腿', 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 听话的执行了的命令，双腿大大的分开，在伸手拉下内裤的时候，小穴与分离的布料拉起粘稠的丝线。',
      ]);
      await era.printAndWait(
        '而后手指伸入，柔软的嫩肉无法对其形成一分一毫的抵抗。',
      );
      await kitaru.say_and_wait('哈……哈啊');
      await era.printAndWait([
        '开始还小心翼翼的，直到在 ',
        kitaru.get_colored_name(),
        ' 愈发过分的呻吟声下，让剩下的半根手指毫不怜惜的一起进入。',
      ]);
      await kitaru.say_and_wait('唔呜？！');
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '剥开包皮，玩弄起肿胀的阴蒂，莫大的快感从 ',
        kitaru.get_colored_name(),
        ' 的尾椎末侧升起，电流沿着脊背流向全身',
      ]);
      await kitaru.say_and_wait('咦呀呀呀呀呀呀！');
      await era.printAndWait(
        '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
      );
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait([
        '被掀起的冬季校服短裙半掩着的雪臀，在 ',
        kitaru.get_colored_name(),
        ' 的痉挛下不断的颤动着。',
      ]);
      era.printButton('伸手', 1);
      await era.input();
      await kitaru.say_and_wait('咿呀！');
      await era.printAndWait([
        '首先是揉搓，而后，在 ',
        kitaru.get_colored_name(),
        ' 愈发可爱的呻吟声下，变成了对待无机物般下手不知轻重的揉捏，肆意地变幻出淫荡的形状。',
      ]);
      await era.printAndWait(
        '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
      );
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 的催促下，是时候进入正戏了。',
      ]);
      await era.printAndWait('脱下裤子，露出了已经勃起的阴茎。');
      await kitaru.say_and_wait('嗯……');
      await era.printAndWait([
        '似乎是察觉到了逐渐逼近的火热，饥渴的小穴一开一合的对 ',
        me.get_colored_name(),
        ' 的阴茎发出了邀请。',
      ]);
      await era.printAndWait('然后，粗大的肉棒长驱直入。');
      await era.printAndWait('小穴内的爱液和穴内的空气一起被无情的挤出。');
      await era.printAndWait([
        '属于成年男性级别的肉棒霸占了穴内所有的空间，在',
        kitaru.get_teen_sex_title(),
        '的私密地带横行霸道。',
      ]);
      await kitaru.say_and_wait(
        ['小穴一缩一缩的，包裹着 ', callname, ' 的肉棒。'],
        true,
      );
      await era.printAndWait('砰！');
      await era.printAndWait([
        '沉闷的撞击声从 ',
        kitaru.get_colored_name(),
        ' 的小穴深部传来',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 本想大声的叫出来，却又在 ',
        me.get_colored_name(),
        ' 的示意下，把声音压了下去。',
      ]);
      await kitaru.say_and_wait(
        '连自己小穴『啧啧』的淫靡吮吸声都能听见。',
        true,
      );
      await era.printAndWait([
        '尽管这么想着，',
        kitaru.get_colored_name(),
        ' 双腿还是愈发的分开，让站立后入的体位更加的标准。',
      ]);
      await era.printAndWait(
        '环状的粉红穴肉在肉棒的冲击下，如同被采蜜的花朵般随风抽搐荡漾着。',
      );
      await kitaru.say_and_wait('这么激烈的话，要，要去了啊～～～', true);
      await kitaru.say_and_wait('去了去了啊！！！');
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '将脱力的爱人翻了一个面，水泥墙壁的冰凉刺激让 ',
        kitaru.get_colored_name(),
        ' 失神的星星瞳重新对焦。',
      ]);
      await era.printAndWait([
        '这次是对面立位，',
        me.get_colored_name(),
        ' 得以欣赏着平日里元气的',
        kitaru.get_uma_sex_title(),
        '在性爱中的表情。',
      ]);
      await kitaru.say_and_wait('砰～砰～');
      await era.printAndWait('淫靡的交合声回响在天台楼梯口的狭小空间内。');
      await kitaru.say_and_wait('太激烈！太激烈了！', true);
      await kitaru.say_and_wait('要，要去了啊～');
      await era.printAndWait('压抑着的娇媚声音终于泄了出来。');
      await era.printAndWait([
        '话是这么说，可橙色的尾巴却如同有自我意识般缠在了 ',
        me.get_colored_name(),
        ' 的腿，配合着纠缠地越发紧密的小穴，背叛般的告诉了主人此刻接近高潮的状态。',
      ]);
      await kitaru.say_and_wait('要去了啊！！！)');
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait('稍稍前倾，龟头径直抵着子宫口倾吐起精液。');
      await era.printAndWait('从小穴和肉棒交合处漏出了点点白浊。');
      era.add('exp:56:阴道高潮次数', 3);
      era.add('exp:0:阴茎高潮次数', 3);
      era.add('exp:0:射精量', 60);
      await kitaru.print_and_wait('之后又持续了多久呢？');
      await kitaru.print_and_wait([
        '不过我第二天醒来的时候，发现自己睡在了 ',
        callname,
        ' 家里的床上。',
      ]);
      end_ero_and_train();
      era.set('cflag:56:节日事件标记', 0);
    }
  };

  handlers[143 + 1] = async (kitaru, me, callname) => {
    await print_event_name('Farewell Matikane……', kitaru);
    await era.printAndWait([
      '也许是最后一次，以 ',
      kitaru.get_colored_name(),
      ' 的训练员这一身份陪',
      kitaru.sex,
      '完成这一次的初诣了。',
    ]);
    await era.printAndWait([
      '怀着这样的心情，',
      me.get_colored_name(),
      ' 再次来到这座偏远神社的鸟居前。',
    ]);
    era.printButton('迈入鸟居', 1);

    await era.input();
    await era.printAndWait(
      '奇怪，并没有以前那种宛如跌落进另一个世界中的错位感。',
    );
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '不过，没等 ',
      me.get_colored_name(),
      ' 细想多久，早早等在参拜道上的 ',
      kitaru.get_colored_name(),
      ' 便把 ',
      me.get_colored_name(),
      ' 拉进了正在准备迎接新年参拜客的神社内。',
    ]);
    era.drawLine();
    await kitaru.say_and_wait('对！对！再往左边挂一点。');
    await kitaru.say_and_wait('啊，哦，欸欸欸！！！');
    await kitaru.say_and_wait([
      '啊！小心啊，',
      sys_get_colored_callname(56, 58),
      ' 同学！',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 正有条不紊的指挥着包括 ',
      kitaru.get_colored_name(),
      ' 在内几位邀请来帮忙的同学装点着新年的神社。',
    ]);
    await era.printAndWait(
      '一旁而事先折好的工艺品和等待挂起的灯笼如小山般强调着接下来的工作量会有多大。',
    );
    era.printButton('「能独当一面了呢！」', 1);
    await era.input();
    await era.printAndWait([
      '出言夸赞了一下自己的担当，让站在一旁调度众人的',
      kitaru.get_teen_sex_title(),
      '双耳微不可察的摆动了一下。',
    ]);
    await kitaru.say_and_wait('……嗯。');
    await era.printAndWait([
      '比划了一下高度，',
      kitaru.get_colored_name(),
      ' 示意负责纸灯笼的茶色',
      kitaru.get_uma_sex_title(),
      '继续把挂绳拉高一些。',
    ]);
    await kitaru.say_and_wait(
      '记得小时候和姐姐的初诣的时候，那才是人山人海呢！',
    );
    await kitaru.say_and_wait('为此也一直有在准备就是了，这回应该能够用上吧？');
    await era.printAndWait([
      '在看着茶色头发的',
      kitaru.get_uma_sex_title(),
      '成功把悬于道路上的纸灯笼串起之后，有着温暖发色的',
      kitaru.get_uma_sex_title(),
      '转头等待起 ',
      me.get_colored_name(),
      ' 的答复。',
    ]);
    era.printButton('点头', 1);
    era.printButton('「我相信会的。」', 2);
    await era.input();
    await era.printAndWait([
      '的确如此，在有马纪念上 ',
      kitaru.get_colored_name(),
      ' 的漂亮表现与发言惊艳了全国的观众。',
    ]);
    await era.printAndWait([
      '社交媒体上早就有不少人的发言想要借着新年的参拜来让这位才在有马纪念中取得优胜的',
      kitaru.get_teen_sex_title(),
      '为自己带来好运。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 背后的故事也被一些好事的媒体挖了出来，除了对如此乐天的',
      kitaru.get_teen_sex_title(),
      '居然有着如此沉重过往而感到的反差，更多则是因此而生的感动。',
    ]);
    await me.say_and_wait(['背负命运奔跑的赛', kitaru.get_uma_sex_title()]);
    await era.printAndWait([
      '想到这里，下意识的念出了最近几张赛',
      kitaru.get_uma_sex_title(),
      '期刊上为 ',
      kitaru.get_colored_name(),
      ' 冠上的名号。',
    ]);
    await kitaru.say_and_wait('欸！！！');
    await kitaru.say_and_wait('有些夸张了！');
    await kitaru.say_and_wait([
      '还有什么',
      kitaru.get_teen_sex_title(),
      '和',
      kitaru.sex,
      '的命定之人之类的花边新闻……',
    ]);
    await era.printAndWait([
      '不知是因为 ',
      me.get_colored_name(),
      ' 提及的那个过于浮夸的称号，还是后面随之想到的一些半真半假的绯闻，原本气定神闲指挥着众人的 ',
      kitaru.get_colored_name(),
      ' 脸上多了几分绯红。',
    ]);
    await kitaru.say_and_wait('不过，命运啊……我真是被困扰了好久呢！');
    await kitaru.say_and_wait('而且我想……我也已经准备好了……');
    era.printButton('「准备好什么了？」', 1);

    await era.input();
    await kitaru.say_and_wait([
      '那个，',
      callname,
      '，明天陪我再去一躺市郊的墓地吧。',
    ]);
    await era.printAndWait([
      '暂时按下了自己好奇的心情，',
      me.get_colored_name(),
      ' 开始在 ',
      kitaru.get_colored_name(),
      ' 的指挥下加入了为新年的神社做起准备的队伍中。',
    ]);
    era.drawLine({ content: '次日 市郊墓园' });
    await era.printAndWait([
      '同样的柏树下，墓碑旁，名叫',
      me.get_colored_actual_name(),
      '的训练员身旁站着一位橙色',
      kitaru.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '前一天晚上的祓禊仪式，果然如 ',
      me.get_colored_name(),
      ' 预料般的那样，前来的参拜客举袖为云。',
    ]);
    await era.printAndWait([
      '光是焚烧那些客人们带来的御守，熊手等开运道具，便让 ',
      kitaru.get_colored_name(),
      '，还有',
      kitaru.sex,
      '请来的临时巫女忙到了半夜。',
    ]);
    await era.printAndWait([
      '记得自己的承诺，',
      kitaru.get_colored_name(),
      ' 还是起了一个大早，稀疏纤细的尘埃在冬日的阳光中漂浮游动，大理石制的墓碑如玻璃般闪耀。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '注意到',
      kitaru.get_teen_sex_title(),
      '只是呆立在墓碑前，一言不发。',
    ]);
    await me.say_and_wait('需要留你一个人静静吗？');
    await era.printAndWait([
      me.get_colored_name(),
      '再次问出了这个问题，一如第一次被 ',
      kitaru.get_colored_name(),
      ' 带到此处一样。',
    ]);
    await kitaru.say_and_wait([
      '不，不用了，',
      me.actual_name[0],
      '……',
      me.get_colored_full_name(),
      '，陪我一会儿吧……',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 发出了哽咽，并非平常那种若无其事的淡然。',
    ]);
    await kitaru.say_and_wait('……还记得我昨天说的准备好了吗。');
    await kitaru.say_and_wait(
      '笑容，奔跑的执念，最开始的跑步技巧，运营神社的知识，姐姐教给我了许多。',
    );
    await kitaru.say_and_wait(
      '倘若灵魂存在的话，把我自己的躯壳献给姐姐也不是什么不可以的事情！',
    );
    await era.printAndWait([
      '几乎是低吼着说出这番话的 ',
      kitaru.get_colored_name(),
      '，望着姐姐的黑白照片，三年来变得成熟了许多的侧脸几乎和照片中的',
      kitaru.get_uma_sex_title(),
      '无异。',
    ]);
    await kitaru.say_and_wait([
      '但是，姐姐肯定不会愿意，以及……',
      callname,
      ' 也不会愿意的吧。',
    ]);
    await kitaru.say_and_wait('……准备好，让姐姐离开了！');
    await kitaru.say_and_wait(
      '但这并不是遗忘，而是告别……我，我准备好跑出属于自己的命运了！',
    );
    await kitaru.say_and_wait([
      '我站在这里，',
      callname,
      ' 站在身旁看着我，就像是阳光洒在我的脸上……',
    ]);
    await kitaru.say_and_wait('姐姐，我现在很幸福呢……');
    await era.printAndWait([
      '阵风拂来，树叶的沙沙响声悠扬空灵，如同 ',
      kitaru.get_colored_name(),
      ' 昨晚奏响的神乐……',
    ]);
  };

  handlers.palace = async (kitaru, me, callname, flags, edu_marks) => {
    await palace(kitaru, me);
    if (
      edu_marks.good_end === 1 &&
      era.get('love:56') >= 75 &&
      era.get('cflag:56:殿堂') === 2
    ) {
      // 并且进殿堂
      era.drawLine();
      await print_event_name('两个世界的主人', kitaru);
      await era.printAndWait(
        '有马纪念上的表演为神社带来的人气来的快，去的也快。',
      );
      await era.printAndWait([
        '神社再次变回了如 ',
        me.get_colored_name(),
        ' 最初遇见 ',
        kitaru.get_colored_name(),
        ' 时寂寥无人的样子。',
      ]);
      await era.printAndWait([
        '若要说有什么不同的话，也许就是参拜客多了许多以菊花赏为目标的赛',
        kitaru.get_uma_sex_title(),
        '吧。',
      ]);
      await era.printAndWait('以及……');
      await kitaru.say_and_wait(['辛苦了，', callname, '！']);
      await era.printAndWait([
        '穿着巫女的装束的 ',
        kitaru.get_colored_name(),
        ' 抓住了 ',
        me.get_colored_name(),
        ' 的胳膊。',
      ]);
      await kitaru.say_and_wait('让你做这些杂务真是不好意思……');
      await era.printAndWait([
        '本来只是应对因为有马纪念突然增加的参拜客，但来神社帮忙的这一习惯还是被 ',
        me.get_colored_name(),
        ' 保留了下来。',
      ]);
      await era.printAndWait([
        '毕竟 ',
        kitaru.get_colored_name(),
        ' 的闪光系列赛才刚刚结束，不知下一位合拍的担当会在什么时候遇见。',
      ]);
      await kitaru.say_and_wait('去休息一下吧！');
      await era.printAndWait(
        '并肩走在夕阳照耀下的神社，巫女的木屐在石板路上哒哒响着。',
      );
      await era.printAndWait([
        '直到眼前的 ',
        kitaru.get_colored_name(),
        ' 停下了脚步。',
      ]);
      await era.printAndWait([
        '面前是熟悉的塞钱箱，最早，',
        me.get_colored_name(),
        ' 便是和 ',
        kitaru.get_colored_name(),
        ' 在这里遇见的。',
      ]);
      await kitaru.say_and_wait([
        '说起来，',
        callname,
        ' 再过几个月就要迎来新担当了吧。',
      ]);
      await kitaru.say_and_wait('需要我帮你祈福一下吗？');
      era.printButton('点头', 1);
      era.printButton('摇头', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          '尝试挥动了一下御币，却又迅速的停了下来，眉头紧皱。',
        ]);
        await kitaru.say_and_wait(
          '……果然，如果是为了这个的话，完全没法全心全意啊。',
        );
      } else {
        await kitaru.say_and_wait('猜到了！');
        await kitaru.say_and_wait([
          '不过，要是 ',
          callname,
          ' 同意我大概也不会做吧。',
        ]);
      }
      await era.printAndWait([
        '又陷入了沉默，直到不断落下的残阳为 ',
        kitaru.get_colored_name(),
        ' 披上了金色的头纱。',
      ]);
      await era.printAndWait([
        '将御币放在一旁的塞钱箱上，',
        kitaru.get_colored_name(),
        ' 打破了沉默。',
      ]);
      await kitaru.say_and_wait([callname, ' 听说过逢魔时刻吗？']);
      era.printButton('点头', 1);
      era.printButton('摇头', 2);
      await era.input();
      await kitaru.say_and_wait(
        '嗯！也就是黄昏时分，据说这是两世交汇的时刻，也是神魔最容易干涉人间的时刻。',
      );
      await kitaru.say_and_wait('这样的话……');
      await kitaru.say_and_wait(
        '跨越了有马纪念的考验，进入了殿堂，勉勉强强算是成为了神明的我。',
      );
      await kitaru.say_and_wait('不知道能不能借此实现自己的愿望呢？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 紧握的右手伸到了 ',
        me.get_colored_name(),
        ' 的面前，而后，伸出了',
        kitaru.sex,
        '的小拇指。',
      ]);
      await era.printAndWait([
        '是 ',
        me.get_colored_name(),
        ' 熟悉的，拉钩仪式的邀请。',
      ]);
      await kitaru.say_and_wait('今后，会陪我一直走下去吧？');
      await kitaru.say_and_wait(['我的 ', callname, '……']);
      await kitaru.say_and_wait('我的命定之人……');
      await kitaru.say_and_wait('以及……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '的声音逐渐变得细若蚊鸣，绯红随着温暖的夕阳染上了',
        kitaru.sex,
        '的脸颊。',
      ]);
      await era.printAndWait([kitaru.sex, '抬起头来，瞳中星光闪烁。']);
      await kitaru.say_and_wait('我的爱人。');
      era.println();

      await era.waitAnyKey();
    } else {
      await palace_relation(kitaru, me);
    }
  };
};
