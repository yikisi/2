const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.kink_sho] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    const races = new RaceHistory(56).get();
    if (!check_aim_race(races, race_enum.kiku_sho, 1, 1)) {
      return true;
    }
    if (extra_flag.rank === 1) {
      // 并且菊花赏胜利
      await print_event_name('被凭依者', kitaru);
      await kitaru.say_and_wait(
        ['轻松的取得了胜利，就像是和 ', callname, ' 约定的一样。'],
        true,
      );
      await kitaru.say_and_wait('想向姐姐报告我现在的状态。', true);
      await kitaru.say_and_wait([
        '我已经是一位优秀的赛',
        kitaru.get_uma_sex_title(),
        '了哦！',
      ]);
      await kitaru.say_and_wait(
        ['在姐姐的墓前，我对着', kitaru.sex, '的墓碑这样说着。'],
        true,
      );
      await kitaru.say_and_wait([callname, ' 有没有什么想说的？']);
      await kitaru.say_and_wait(
        ['我看见 ', callname, ' 双手合十，认真的侧脸只能看到微动的嘴唇。'],
        true,
      );
      await me.say_and_wait([
        sys_get_colored_callname(0, 56),
        ' 的姐姐，谢谢你，一直以来照顾着',
        kitaru.sex,
        '！',
      ]);
      await kitaru.say_and_wait('嗯，姐姐一定会为我高兴的吧！', true);
      era.drawLine({ content: '一段时间后 特雷森的宿舍内' });
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('是吗？', true);
      await kitaru.say_and_wait(
        '青叶赏，日本德比，神户新闻赏，菊花赏，金號赏……',
        true,
      );
      await kitaru.say_and_wait('驱使我跑到现在的到底是什么呢？', true);
      await kitaru.say_and_wait('姐姐……');
      await kitaru.say_and_wait(
        '只是偶然一瞥，窗户变成了镜子，映出了独自站着的我。',
        true,
      );
      await kitaru.say_and_wait('身高比以前高了，头发也变长了。', true);
      await kitaru.say_and_wait(
        ['比起第一次遇到 ', callname, ' 时，更加成熟的模样。'],
        true,
      );
      await kitaru.say_and_wait('简直和照片中的姐姐别无二致。', true);
      await kitaru.say_and_wait('那……我呢？', true);
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('被凭依的空壳……');
      await kitaru.say_and_wait(
        '莫名的恶心感涌上心头，胃和肠子像是绞成了一团。',
        true,
      );
      era.drawLine({ content: '次日 ' + me.name + ' 的办公室' });
      era.printButton('「空壳？」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 喃喃地念着 ',
        kitaru.get_colored_name(),
        ' 告诉的这个结论，那个认为自己被姐姐的灵魂凭依上的',
        kitaru.get_teen_sex_title(),
        '，正不安的站在屋内的一角。',
      ]);
      await kitaru.say_and_wait('对啊，我好像的确变得不太像是自己。');
      await kitaru.say_and_wait('该说，我只是借出身体而已，让执念附上来吗？');
      await kitaru.say_and_wait('因为我其实什么也没有想嘛。');
      await kitaru.say_and_wait('只是随意地顺势发展而已。');
      await kitaru.say_and_wait('这样子……真的算我赢了吗？');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('要是在两年前，我说不定会很高兴呢！');
      await kitaru.say_and_wait('但是一想到……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '颤抖的声音逐渐变得如雾般朦胧不清。',
      ]);
      era.printButton('「阿福？」', 1);
      await era.input();
      await kitaru.say_and_wait('抱歉……');
      await kitaru.say_and_wait('让我静一静。');
      era.set('status:56:PTSD', 1);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '  的PTSD再度复发了。',
      ]);
    } else {
      await kitaru.say_and_wait('咦……我输了……？');
      await kitaru.say_and_wait('我的运气，居然没效……？');
      await kitaru.say_and_wait('这是骗人的吧！这不可能发生的！我的运气是……！');
      await kitaru.say_and_wait([callname, '！这是个噩梦对吧！']);
      await kitaru.say_and_wait('明明，明明在你身边的我应该是大吉才对的！');
      era.printButton('「这是现实……」', 1);
      await era.input();
      await kitaru.say_and_wait('怎么会，我还以自己已经脱胎换骨了！');
      await kitaru.say_and_wait('要是被神明抛弃……我……我……！');
      await era.printAndWait([
        me.get_colored_name(),
        ' 默默的走上前，将快要哭出来的 ',
        kitaru.get_colored_name(),
        ' 拥入怀中。',
      ]);
      await kitaru.say_and_wait(['呜呜呜……', callname, '……']);
      era.drawLine({ content: '次日 ' + me.name + ' 的办公室' });
      era.printButton('「空壳？」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 喃喃地念着 ',
        kitaru.get_colored_name(),
        ' 告诉的这个结论，那个',
        kitaru.get_teen_sex_title(),
        '，正不安的站在屋内的一角。',
      ]);
      await kitaru.say_and_wait('对啊，我好像的确变得不太像是自己。');
      await kitaru.say_and_wait('该说，我只是借出身体而已，让执念附上来吗？');
      await kitaru.say_and_wait('因为我其实什么也没有想嘛。');
      await kitaru.say_and_wait('只是随意地顺势发展而已。');
      await kitaru.say_and_wait('这样子……我真的跑出来了吗？');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '颤抖的声音逐渐变得如雾般朦胧不清。',
      ]);
      era.printButton('「阿福？」', 1);
      await era.input();
      await kitaru.say_and_wait('抱歉……');
      await kitaru.say_and_wait('让我静一静。');
      era.set('status:56:PTSD', 1);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '  的PTSD再度复发了。',
      ]);
    }

    era.set('status:56:凶', 1);
    era.set('cflag:56:干劲', -2);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
    edu_marks.begin_race_end = 6;
  };

  handlers[race_enum.takz_kin] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('复苏', kitaru);
    await era.printAndWait([
      '看台上，那犹如建御雷神才能发出的巨大欢呼声，宣告了 ',
      kitaru.get_colored_name(),
      ' 的胜利。',
    ]);
    await era.printAndWait('正所谓，事在人为，有志者，事竟成。');
    await era.printAndWait([
      '走出低谷后的大复活，',
      kitaru.get_colored_name(),
      ' 今日的表现，正是这句话的完美写照。',
    ]);
    era.println();
    era.drawLine({ content: '阪神赛马场 休息室内' });
    await kitaru.say_and_wait([callname, '！我赢了！我赢了！']);
    era.printButton('「嗯！粉丝们也很高兴呢！」', 1);
    await era.input();
    await kitaru.say_and_wait('那我们下一场比赛是什么呢？');
    await kitaru.say_and_wait('还是趁着夏季合宿这段时间好好想一下吧。');
    await kitaru.say_and_wait(['对了，', callname, '！']);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await kitaru.say_and_wait('关于自己的道路要怎么走，我似乎有一点眉目了！');
    await me.say_and_wait('能告诉我吗？');
    await kitaru.say_and_wait('唔……目前只是有点模糊不清的预感而已啦！');
    if (era.get('love:56') >= 75 && edu_marks.kink_shoKISS === 1) {
      await kitaru.say_and_wait(['不过那条路一定得有 ', callname, ' 吧！']);
      await era.printAndWait([
        '说完这番话后，因为运动完而脸颊酡红的 ',
        kitaru.get_colored_name(),
        ' 环抱住了 ',
        me.get_colored_name(),
        ' 的腰。',
      ]);
      await era.printAndWait([
        '故意扯的有些松垮的决胜服，半遮半掩的露出',
        kitaru.sex,
        '精致分明的锁骨，与随着呼吸颤动的乳肉。',
      ]);
      await era.printAndWait(
        '再向下，是正不断交叠摩擦的湿漉漉白丝和逐渐被卷进双腿间的蓝色百褶裙。',
      );
      await kitaru.say_and_wait(['那个……', callname, '……']);
      await kitaru.say_and_wait([
        '金號赏的事情，真的很抱歉，还对 ',
        callname,
        ' 说出那样的话……',
      ]);
      await kitaru.say_and_wait('如果想的话……就，把我当作是赔罪的祭品吧……');
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      if ((await era.input()) === 1) {
        begin_and_init_ero(0, 56);
        era.set('flag:当前位置', location_enum.restroom);
        await era.printAndWait([
          '把得胜回来的 ',
          kitaru.get_colored_name(),
          ' 壁咚在了墙角。',
        ]);
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait(
          '大口的呼吸起湿漉漉白丝，乳间与腋下的香甜气味。',
        );
        await era.printAndWait([
          '配合着休息室内屏幕里解说员小姐的点评，一起品鉴起今日优胜',
          kitaru.get_uma_sex_title(),
          '的久经锻炼的肉体。',
        ]);
        await era.printAndWait([
          '在喘息声中扛起了 ',
          kitaru.get_colored_name(),
          ' 的右腿，自打小就开始锻炼神乐舞的',
          kitaru.sex,
          '柔韧度出色。',
        ]);
        await era.printAndWait([
          '肉棒抵着和褪下的内裤拉出了丝线的穴口，',
          me.get_colored_name(),
          ' 的担当下意识的想要挣扎，却又想起了自己今天作为祭品的身份而作罢。',
        ]);
        await era.printAndWait(
          '插入了，腰间的悬挂着的绘马配合的如祈福般发出了声响。',
        );
        await era.printAndWait([
          '毫无怜惜的抽插，不理会 ',
          kitaru.get_colored_name(),
          ' 如何用染满了欲望的声线求饶。',
        ]);
        await era.printAndWait([
          '然后在里面直接射出来，报复般的让这个总是不让人省心的担当子宫被 ',
          me.get_colored_name(),
          ' 的精液填满。',
        ]);
        await era.printAndWait([
          '直到让',
          kitaru.sex,
          '水手服下的平坦小腹略微鼓起，才想起来这家伙一会儿还要去参加胜者舞台而停手。',
        ]);
        await era.printAndWait([
          '而后的LIVE环节，明明极少出错的 ',
          kitaru.get_colored_name(),
          ' 接连出现了几个失误。',
        ]);
        await era.printAndWait(
          'LIVE还未过半，新换上的舞台服就已经被汗水浸透，胸腹之间的衣料隐隐透出水痕，而短裙里颤抖双腿间流下的液滴，和沿着下巴滴落的汗水一起落在舞台上。',
        );
        era.set('status:56:短效避孕药', 1);
        era.add('exp:56:阴道高潮次数', 2);
        era.add('exp:0:阴茎高潮次数', 2);
        era.add('exp:0:射精量', 10);
        end_ero_and_train();
      } else {
        await era.printAndWait([
          '拒绝了，',
          me.get_colored_name(),
          ' 看着 ',
          kitaru.get_colored_name(),
          ' 莫名变得气鼓鼓的走向了LIVE的候场房间。',
        ]);
      }
    }
    edu_marks.begin_race_end = 8;
  };

  handlers[race_enum.arim_kin] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('福来今至', kitaru);
    await kitaru.print_and_wait([
      '从前，有一位赛',
      kitaru.get_uma_sex_title(),
      '，叫 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    await kitaru.print_and_wait([
      kitaru.sex,
      '一点才华都没有，是个贪心无比，只想靠幸运往上爬的',
      kitaru.get_child_sex_title(),
      '子。',
    ]);
    await kitaru.print_and_wait([
      '不过，这样的',
      kitaru.sex,
      '却在有马纪念称霸了！',
    ]);
    await kitaru.print_and_wait(['没错……', kitaru.sex, '付出了一切！']);
    await kitaru.print_and_wait([
      '那个',
      kitaru.get_child_sex_title(),
      '变成了神明，',
      kitaru.sex,
      '跳脱马的境界，进入了神域，然后变成了一道白光……',
    ]);
    era.drawLine({ content: '中山赛马场 地下通道' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 在赛后如此对 ',
      me.get_colored_name(),
      ' 布道着。',
    ]);
    await kitaru.say_and_wait([callname, '！我们成功了喔！']);
    await kitaru.say_and_wait('你觉得幸福吗？');
    await kitaru.say_and_wait('你很庆幸自己负责的担当是我的吧？');
    era.printButton('「那是当然了！」', 1);
    await era.input();
    await kitaru.say_and_wait('呜啊！我就想听这句话！');
    await me.say_and_wait('唔！？');
    await era.printAndWait([
      '激动不已的 ',
      kitaru.get_colored_name(),
      ' 径直扑进了 ',
      me.get_colored_name(),
      ' 的怀中，毫无顾忌的将身上的汗水洒在了 ',
      me.get_colored_name(),
      ' 的衬衣上。',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '比赛后湿热的甜腻体味被 ',
      me.get_colored_name(),
      ' 吸入，而胸前的那对乳肉被挤压的柔软感觉由于运动后的体温更是明显。',
    ]);
    await era.printAndWait([
      '过于的亲密的动作以至于受到了其他选手和训练员的侧目，',
      me.get_colored_name(),
      ' 只得拍了拍 ',
      kitaru.get_colored_name(),
      ' 的背，示意',
      kitaru.sex,
      '赶紧停下来。',
    ]);
    await kitaru.say_and_wait('好，就以这个气势去接受胜利者的访谈吧！');
    era.drawLine({ content: '有马纪念后的采访现场' });
    await kitaru.say_and_wait('今天！我必须在这里说这句话才行！');
    await kitaru.say_and_wait('在菊花的舞台之后！福气也来到中山了！');
    await kitaru.say_and_wait('只要衷心希望，福气就会到来！');
    await kitaru.say_and_wait('只要心怀希望，幸运就一定会到来！');
    await kitaru.say_and_wait('那么！祝各位有个好年！');
    await era.printAndWait([
      '在无数聚光灯和镜头前，说出这番话的 ',
      kitaru.get_colored_name(),
      ' 以',
      kitaru.sex,
      '标志性双手伸向天空的动作作为收尾，将幸福传递到了所有将愿望寄托在',
      kitaru.sex,
      '身上的粉丝们。',
    ]);
    await era.printAndWait([
      '而站在',
      kitaru.sex,
      '身后一同接受采访的 ',
      me.get_colored_name(),
      '，之后也与为众人祈愿的 ',
      kitaru.get_colored_name(),
      ' 一起登上了许多家媒体的报纸。',
    ]);
    edu_marks.begin_race_end = 10;
  };
};
