const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { yes } = require('#/data/event/recruit-flags');
const { get_random_entry } = require('#/utils/list-utils');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

module.exports = async () => {
  const love = era.get('love:32'),
    me = get_chara_talk(0),
    punish_level = era.get('flag:惩戒力度'),
    tachyon = get_chara_talk(32);
  let temp;
  if (punish_level === 1) {
    await print_event_name('实验记录：马娘转化', tachyon);
    if (love < 75) {
      await tachyon.say_and_wait('哦呀，豚鼠……不，豚鼠小姐来了呢');
      await tachyon.say_and_wait(
        '嗯？我怎么知道的？呵呵，也是，你那时候是处于昏迷状态的来着',
      );
      await tachyon.say_and_wait('毕竟手术是我亲自操刀的啊');
      await tachyon.say_and_wait(
        '身为训练员，无能就是最大的罪，以这点而言，你可以说是十恶不赦了',
      );
      await tachyon.say_and_wait(
        '不过庆幸吧，多亏了我的研究，你重新获得了第二次的机会',
      );
      await tachyon.say_and_wait(
        '说到底，能够进入中央特雷森，无论如何都必定有强于他人的地方在，只是被发掘与否而已',
      );
      await tachyon.say_and_wait(
        '说不定，化为马娘的你，意外的在这方面有天赋呢？',
      );
      await tachyon.say_and_wait(
        '好好加油吧，豚鼠小姐……在这再一次的机会里拼命挣扎吧',
      );
      await tachyon.say_and_wait(
        '不然……我能担保，下次在手术台上看到我后会发生的事，相信你绝对不会想体验的……不，也说不定呢？',
      );
      await tachyon.say_and_wait('等真到了那时候，我会好好疼爱你的');
    } else {
      await tachyon.say_and_wait(`豚鼠……不，${me.actual_name} 君`);
      await tachyon.say_and_wait('我很抱歉，但规定就是规定……');
      await tachyon.say_and_wait('不……是我的错…………你的手术……是我主刀的');
      await tachyon.say_and_wait('……是啊，呵呵');
      await tachyon.say_and_wait(
        '放心吧……我不在乎，哪怕变成了什么样子，只要你眼瞳中的光还在，我就一样爱着你',
      );
      await tachyon.say_and_wait(
        '…………再说，变成马娘后，能玩的玩法也变多了不是吗？',
      );
      await tachyon.say_and_wait('呵呵，我会好好疼爱你的');
    }
  } else if (punish_level === 2) {
    await print_event_name('实验记录：性奴改造', tachyon);

    await era.printAndWait('咕啾 咕啾 啾啵 啾噜');
    era.println();

    if (love < 75) {
      await tachyon.say_and_wait('啧啧啧……豚鼠小姐啊，我不是警告过你了吗？');
      await tachyon.say_and_wait('再来一次的下场……呵呵');
    } else {
      await tachyon.say_and_wait('豚鼠君……真是狼狈啊');
      await tachyon.say_and_wait('丢人，我都不想承认这样的家伙是我的恋人了');
    }
    era.println();

    await era.printAndWait('爱丽速子的实验室');
    await era.printAndWait('这个时间本该是爱丽速子调配药物及研究的时间');
    await era.printAndWait(
      `但为了欢迎以新身份回归的 ${me.name}，${tachyon.sex}特意取消了今日的安排，甚至还亲自调配了为其庆祝的药物`,
    );
    era.println();

    await era.printAndWait('嘶噜 啾噜 啾咕 咕啾');
    era.println();

    await tachyon.say_and_wait('还是说，这其实才是你所期待的？');
    await tachyon.say_and_wait('期待变成任人玩弄，不得有个人意志的性奴隶？');
    era.println();

    await era.printAndWait(
      '爱丽速子将双腿张开，慵懒的躺卧在自己平常习惯坐的旋转椅上',
    );
    await era.printAndWait(
      `而在${tachyon.sex}的双腿间，一名长着马耳朵的女性正蹲踞在地，她的身上穿着与速子同款，袖子过长的白大褂，却又有着些许不同`,
    );
    await era.printAndWait(
      '被特意剪开的后摆，使得每次有风吹过时，她那圆润的屁股便会直接从白大褂下展露在众人眼前',
    );
    await era.printAndWait(
      '胸前两个彷佛被药剂腐蚀出的一般不规则的洞口使得她的乳头完全暴露在空气中',
    );
    await era.printAndWait(
      '内衣的存在？早在看见不被允许扣上扣子的白大褂中央的肉色便能明白那种东西是不存在的了吧？',
    );
    await era.printAndWait(
      '穿着比起情趣道具都太过过激的衣服的马娘，头部前前后后不停的移动着，含吞着在爱丽速子双腿间的硕大阳具',
    );
    if (era.get('cflag:32:性别') === 0) {
      await era.printAndWait(
        '本来不应出现在马娘身上的器官，其原因自然是爱丽速子的药物所制造',
      );
      era.println();

      await tachyon.say_and_wait(
        '呵呵……多亏了我的弗隆P系列药剂，才能让你好好体验性奴该做的事，毕竟若是双方都是雌性，那可没什么玩头，不是吗？',
      );
      era.println();

      await era.printAndWait(
        `蹲踞在地上的马娘———也就是 ${me.name}——置若罔闻，只是不断的服务着眼前的巨物`,
      );
      await era.printAndWait(
        '虽然说两名雌性的说法可能客观来讲有些错误，但大体来说结论也是差不多的',
      );
      await era.printAndWait(
        `毕竟，无论是谁看见了 ${me.name} 那明明绷到了极限，却依然没有上面绑着的跳蛋长的生殖器征，大概都不会承认那是正常雄性所拥有，为了使雌性怀孕的器官应有的尺寸吧，硬要形容的话……没错，称其为阴蒂或许更加合适`,
      );
    }
    era.println();

    await era.printAndWait(
      `忽然，正专心致志为马娘主人服务的 ${me.name}，全身忽然颤抖了起来`,
    );
    await era.printAndWait(
      `在 ${me.name} 身下，那哪怕勃起到极限也没有马娘主人一边睪丸大的“阴蒂”，喷出了今天第四发，稀薄如水的液体`,
    );
    await era.printAndWait('这也惹得眼前的主人有些不悦');
    era.println();

    if (love < 75) {
      await tachyon.say_and_wait(
        '只顾着自己爽，连最基础的口交服务都做不到……没想到你连当性奴都如此失败啊',
      );
      era.println();

      await era.printAndWait(
        `${me.name} 连忙回过神来继续为自己的负责马娘兼主人服务`,
      );
      await era.printAndWait(
        `但一向没有耐心的${tachyon.sex}已经受够了 ${me.name} 那拙劣的服务`,
      );
      await era.printAndWait(
        `${tachyon.sex}站起身，将胯间的巨物更加深入到 ${me.name} 的喉咙`,
      );
      await era.printAndWait(
        `那庞大的阴囊也撞上了你的下巴，那沉甸甸的温热流动感昭示着将在 ${me.name} 口中喷发出的白浆份量`,
      );
      era.println();

      await tachyon.say_and_wait(
        '对了，豚鼠……不，性奴君啊，不知道你还记不记得',
      );
      era.println();

      await era.printAndWait(
        `故意转回性奴『君』的称呼，使 ${me.name} 忍不住因这倒错的关系而更发兴奋，下面的“阴蒂”更是从刚才开始就像坏掉的水龙头一般不断流出清澈如水的液体`,
      );
      era.println();

      await tachyon.say_and_wait(
        '你的改造手术都是我做的，因此，对于你的敏感点，我绝对，是这个世界上最了解的人',
      );
      era.println();

      await era.printAndWait(
        `比如说，${tachyon.sex}猛地在 ${me.name} 的喉咙戳刺了数次，彷佛在寻找着什么`,
      );
      await era.printAndWait(
        `被如此粗暴对待的 ${me.name} 再次产生了自己只是一件物品，一件发泄性欲用的器具的自觉`,
      );
      await era.printAndWait(
        `在戳刺的过程中，不知道是擦到了哪一块部位，${me.name} 忽然喉咙猛地收缩，下半身无论前后都不住的喷出汁液`,
      );
      era.println();

      await tachyon.say_and_wait('啊啊，找到了，就是这里啊，你喉咙的敏感点');
      await tachyon.say_and_wait(
        '只要戳中这边，就能带来不亚于男性射精一千次的快感……呵呵，不过你大概已经不需要知道身为男性的事了吧',
      );
      era.println();

      await era.printAndWait(
        `毫无分神去聆听话语的精神，${me.name} 的一切精力现在都只用在抵抗这如潮水般袭来的快感`,
      );
      await era.printAndWait(
        `倘若不全力抵抗，每一波的浪潮都能使 ${me.name} 变成瘫倒在地上不见停歇的喷泉`,
      );
      await era.printAndWait('但这样的浪潮，也不过是主人肉棒的一次抽插而已');
      await era.printAndWait(
        `不断堆积，累积的快感，使 ${me.name} 全身的肌肉紧缩，连带着喉咙也缩紧到堪称名器的级别`,
      );
      era.println();

      await tachyon.say_and_wait(
        '喔喔……！就是这个紧致度！要出来了，给我好好接好了！',
      );
      era.println();

      await era.printAndWait(
        `${tachyon.sex}用力的按住 ${me.name} 的头，前后激烈的抽插着`,
      );
      await era.printAndWait(
        '如果是普通人类的身体，经过这样的玩弄恐怕真的会有性命危险吧',
      );
      await era.printAndWait(
        `不知是幸还是不幸，现在的 ${me.name} 是一名马娘，还是经过了特殊改造的马娘`,
      );
      await era.printAndWait(
        `因此无论是多么粗暴的玩法，${me.name} 的身体都能承受并且将其完全转化为快感`,
      );
      await era.printAndWait(
        `就连窒息的痛苦感，都已经被 ${me.name} 的身体自发的转化为快感，渐渐的，${me.name} 甚至主动享受起这样的感觉`,
      );
      await era.printAndWait(
        `${me.name} 的喉咙随着主人的进出不断的调整着紧缩，不是宛如，${me.name} 的喉咙就是名穴！`,
      );
      era.println();

      await tachyon.say_and_wait('接好，敢漏出来你就完蛋了');
      era.println();

      await era.printAndWait('在冷酷的命令后，随之而来的是灼热的滚滚白浆');
      await era.printAndWait(
        `庞大的量将 ${me.name} 的口鼻喉舌全数填满，眼看就要向外流出……`,
      );
      await era.printAndWait(
        `${me.name} 慌忙将口中已经填满的腥臭浆液吞下，但 ${me.name} 的努力，终究无法将马娘大人的恩赐全数含入`,
      );
      await era.printAndWait(
        `最终……${me.name} 只能无助的用手接住了马娘大人宝贵的子种汁`,
      );
      era.println();

      await era.printAndWait('可即便如此，口中不断发射的粗壮炮管依然没有停下');
      await era.printAndWait(
        `长时间的缺氧，即便是能够享受缺氧快感的 ${me.name}，即便是坚强的马娘身体，也无法完全承受，渐渐，${me.name} 的意识陷入模糊……`,
      );
      era.println();

      await era.printAndWait('砰');
      era.println();

      await era.printAndWait(`忽然，一阵剧烈疼痛使 ${me.name} 惊醒`);
      await era.printAndWait(
        `${me.name} 不由得想喊出声，但张开的喉咙马上又被更多的白浆灌入`,
      );
      await era.printAndWait(
        `${me.name} 抬起头，看见的是自己的负责马娘兼主人的腿`,
      );
      await era.printAndWait('那自己无比呵护爱惜，比自己的腿都还要重视的美足');
      await era.printAndWait(`如今正毫不留情的踩在 ${me.name} 的肚子上`);
      era.println();

      await tachyon.say_and_wait('身为性奴的能力……完全不及格啊');
      await tachyon.say_and_wait('还得好好加以调教才行……');
      era.println();

      await era.printAndWait(
        `剩下的没能吞下的白浊落在 ${me.name} 的全身，衣物也不可避免的沾满了浓浆`,
      );
      era.println();

      await tachyon.say_and_wait(
        '好端端的实验室被你弄成这副鬼样……啧，让人受不了',
      );
      era.println();

      await era.printAndWait(
        `速子厌恶的说道，忽然，彷佛有了什么想法一般，俯身对 ${me.name} 细语`,
      );
    } else {
      await tachyon.say_and_wait(
        '只喷的出这种稀薄的汁液，这种没用的器官到底还有什么存在的意义',
      );
      await tachyon.say_and_wait(
        '我说豚鼠君，你觉得我是不是该去找其他能够满足我的雄性才对……毕竟像你现在这样，到底还能满足谁呢',
      );
      era.println();

      await era.printAndWait(
        `听见这句话后 ${me.name} 慌忙更加认真的为 ${me.name} 的恋人兼主人大人服务起来，恳求对方不要抛弃自己`,
      );
      await era.printAndWait(
        `${tachyon.sex}满意的拍了拍 ${me.name} 的头，鼓励你更加勤奋的服务`,
      );
      era.println();

      await tachyon.say_and_wait('就这么害怕被抛弃吗？乖孩子乖孩子');
      await tachyon.say_and_wait(
        '放心吧，我也不打算让别人碰我的身体……不过，身为恋人，帮对方满足性欲不也是义务吗？',
      );
      era.println();

      await era.printAndWait(
        `伴随着轻柔的话语，${tachyon.sex}拍了拍 ${me.name} 的屁股示意`,
      );
      await era.printAndWait(
        `${me.name} 马上顺从地背对着主人，主动张开了将自己化为雌性的入口`,
      );
      era.println();

      await era.printAndWait(
        `${tachyon.sex}站起身，将胯间的巨物深入填满了 ${me.name} 已经湿透的小穴`,
      );
      await era.printAndWait(
        `那庞大的阴囊撞上了 ${me.name} 圆润的屁股，那沉甸甸的温热流动感昭示着将在 ${me.name} 穴中喷发出的白浆份量`,
      );
      await era.printAndWait(
        `插入的瞬间，${me.name} 忍不住发出了一声娇吟，而背后的主人则发出了满足的叹息`,
      );
      era.println();

      await tachyon.say_and_wait(
        '呵呵，就算变成性奴了我们的身体也一样是最契合的啊',
      );
      await tachyon.say_and_wait(
        '不过这也是理所当然的，毕竟豚鼠君你的身体是我改造的，一切当然是以我的标准来调整的了',
      );
      era.println();

      await era.printAndWait('自己的身体，是被主人量身改造的');
      await era.printAndWait('自己是主人的专用性奴');
      era.println();

      await era.printAndWait(
        `这样的想法使 ${me.name} 更发兴奋，小穴也不由得一阵紧缩`,
      );
      era.println();

      await tachyon.say_and_wait(
        '唔……忽然这么紧，怎么？刚刚那些话居然让你兴奋了吗？这种情况都能如此兴奋，看来以前还是我不够体贴，没发现你的愿望啊',
      );
      era.println();

      await era.printAndWait(
        `说完后，身后的突刺变得越发大力及激烈，${me.name} 心领神会的向后迎合着准备迎接主人的赏赐`,
      );
      era.println();

      await tachyon.say_and_wait('出来了……给我接好了！');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}的手用力拍在 ${me.name} 的屁股上，荡起了阵阵肉花，${me.name} 忍不住发出的呻吟更如火添油加注了主人的兴致`,
      );
      await era.printAndWait(
        `最后，伴随着 ${me.name} 的颤抖高潮，滚烫的肉柱也在 ${me.name} 体内灌入了浓浓的白浆`,
      );
      await era.printAndWait(`${me.name} 带着体内的满足感，意识陷入黑暗……`);
      era.println();

      await tachyon.say_and_wait(
        '喂喂，这不是都溢出来了吗？好好的实验室被你搞成这样……',
      );
      era.println();

      await era.printAndWait(`听见主人不悦的声音，${me.name} 瞬间清醒了过来`);
      await era.printAndWait(
        `看着地上被自己浪费的主人的精华，${me.name} 慌忙之下只能选择了最不会浪费的方式……`,
      );
      era.println();

      await tachyon.say_and_wait('不错不错，好好清理干净才是好孩子');
      era.println();

      await era.printAndWait(
        `主人摸了摸在地上像小狗一样舔着精华的 ${me.name}，使 ${me.name} 高兴的舔的更加起劲`,
      );
    }
    era.println();

    love >= 75 && (await tachyon.say_and_wait('嗯嗯……有了'));
    await tachyon.say_and_wait(
      `${
        love >= 75 ? '乖孩子' : ''
      }我十分钟后回来，要是到时候这里还没收拾干净，我就给你『惩罚』`,
    );
    await tachyon.say_and_wait('要是已经收拾干净了，就给你『奖励』');
    await tachyon.say_and_wait(
      `到底要哪个，就由你自己决定了${love < 75 ? '，性奴『君』' : '～～'}`,
    );
    love >= 75 &&
      (await tachyon.say_and_wait(
        '不过放心，无论如何我都一定会好好疼爱你的❤️',
      ));
    era.println();

    await era.printAndWait('说完后，速子穿好裤子便离开了实验室');
    await era.printAndWait(
      `留下躺在地板上，肚子如气球一般涨起，嘴角还在不停流淌着白汁的 ${me.name} 在室内无助的喘着气`,
    );
    await era.printAndWait(
      `奖励还是惩罚……${love < 75 ? `${me.name} 望向角落的扫具柜` : ''}`,
    );
    await era.printAndWait('那么，该如何抉择呢？');

    !get_penis_size(32) && era.set('status:32:弗隆P', 1);
    begin_and_init_ero(0, 32);
    era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(32, part_enum.penis),
      false,
    );
    if (love < 75) {
      era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
      era.set('palam:0:阴道快感', era.get('tcvar:0:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
      era.set('palam:0:口腔快感', era.get('tcvar:0:口腔快感上限'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.foot),
        new EroParticipant(0, part_enum.body),
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.body),
        false,
      );
    } else {
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
      era.set('palam:0:阴道快感', era.get('tcvar:0:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
    }
    end_ero_and_train();
  } else if (punish_level === 3) {
    await print_event_name('实验记录：孕袋及多马娘体液研究', tachyon);

    begin_and_init_ero(0, 32);

    await tachyon.say_and_wait('哼哼哼～～');
    era.println();

    await era.printAndWait('爱丽速子高兴的哼着歌，走在熟悉的走廊上');
    await era.printAndWait(
      '平日里这层走廊总因会冒出奇怪药剂的实验室而被学生们敬而远之……虽然，最近似乎又恢复了几分人气',
    );
    await era.printAndWait(
      `然而，${tachyon.sex}径直走过了自己的实验室，停在了某扫具柜前`,
    );
    era.println();

    await tachyon.say_and_wait(
      '啧啧……真是，毫不留情啊，我是不是小瞧一般马娘的性欲了',
    );
    era.println();

    await era.printAndWait(
      `扫具柜里，是眼神迷离，口中戴着口球，肚子鼓鼓涨起，下面的穴内还插着两根巨根堵住洞口，全身满是爱液与精液，身上写满正字及粗俗不堪话语的 ${me.name}`,
    );
    era.println();

    await tachyon.say_and_wait('豚鼠君？醒醒');
    era.println();

    await era.printAndWait(
      `${tachyon.sex}呼喊着对 ${me.name} 的称呼，但被玩弄了三天三夜的 ${me.name} 眼神依旧迷离，虽然挣扎想要做出回应，眼神却还是只能空洞的望着虚空`,
    );
    era.println();

    await era.printAndWait('看见如此凄惨的画面，速子却没有任何怜悯或同情');
    await era.printAndWait(
      `${tachyon.sex}毫不留情的抬起脚，踩向 ${me.name} 的肚子`,
    );
    await era.printAndWait(
      `被踩住的瞬间，${me.name} 仿佛虾子一般身体猛地蜷缩起来，却还是被稳稳的踩在脚下，那本就鼓胀的肚子被踩住的瞬间，就好像被强制排气的气球般，从下面的口将两根用以堵住洞口的按摩棒喷出，随之出来的是满肚子的爱液及精液，蜷缩的 ${me.name} 全身颤抖，在这短短瞬间又高潮了一次，那短小的肉棒也排出了稀薄的因子汁`,
    );
    era.println();

    await quick_make_love(
      new EroParticipant(32, part_enum.foot),
      new EroParticipant(0, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.hit),
      new EroParticipant(0, part_enum.body),
      false,
    );

    await tachyon.say_and_wait(
      '不错，这么多量，应该又能提供好一阵子实验所需了',
    );
    era.println();

    await era.printAndWait(
      `速子高兴的看着自己及时在喷泉爆发瞬间掏出的烧杯，里面全是刚刚收集的马娘体液，然而这样一个烧杯，装的量也不足 ${me.name} 穴内排出的三分之一，更多喷洒在地上，成为了扫除人员的麻烦`,
    );
    await era.printAndWait('不过，谁造成的谁清理，这也是理所当然的吧');
    era.println();

    await tachyon.say_and_wait('豚鼠君～这次的实验可是大成功哦');
    era.println();

    await era.printAndWait('速子仿佛什么也没发生一般，兴奋的分享自己的实验');
    await era.printAndWait(
      `然而……所谓的什么也没发生，不过是 ${me.name} 天真的错觉罢了`,
    );
    era.println();

    if (era.get('cflag:25:招募状态') === yes) {
      init_ero(25);
      await quick_make_love(
        new EroParticipant(25, part_enum.hit),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(25, part_enum.mouth),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await tachyon.say_and_wait(
        '茶座君真是闷骚……原本我还以为她会拒绝这种游戏的，结果……',
      );
      era.println();
      await era.printAndWait(
        `速子顺着 ${me.name} 被猎犬留下痕迹的脖子，一路摸到肩膀，随后……手向下移动，摸到了满是齿痕的乳房，其中乳头上的齿痕尤为明显`,
      );
      await era.printAndWait(
        `被摸到的瞬间，${me.name} 又颤抖着身体，只是这样稍微摸一下，加上脑内的想象就足以使现在的 ${me.name} 陷入高潮了`,
      );
      era.println();
    }

    if (era.get('cflag:94:招募状态') === yes) {
      !get_penis_size(94) && era.set('status:94:弗隆P', 1);
      init_ero(94);
      era.set('palam:94:阴茎快感', era.get('tcvar:94:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(94, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await tachyon.say_and_wait('宝穴君也是……明明一开始还那么害羞……');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}把玩着 ${me.name} 仍被口球塞住，发不出声音的口唇，有些红肿的双唇告诉了速子这几天里它到底受尽了多少折磨`,
      );
      era.println();

      await tachyon.say_and_wait(
        '宝穴君的声音，哪怕我在实验室里也听的一清二楚啊',
      );
      era.println();
    }

    if (era.get('cflag:9:招募状态') === yes) {
      !get_penis_size(9) && era.set('status:9:弗隆P', 1);
      init_ero(9);
      era.set('palam:9:阴茎快感', era.get('tcvar:9:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(9, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      era.set('palam:9:阴茎快感', era.get('tcvar:9:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(9, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await tachyon.say_and_wait(
        '大和君……呵呵，不愧是我看好的孩子，哪怕这方面也都是第一名的',
      );
      era.println();

      await era.printAndWait(
        '虽然还没验证过，但刚刚装的那一烧杯，里面应该七成左右都是大和一个人射的吧',
      );
      await era.printAndWait(
        `哪怕在做爱上也要当第一的坚持，让${tachyon.sex}成为了这三天中骑在 ${me.name} 身上最久的一名马娘`,
      );
      era.println();
    }

    if (era.get('cflag:5:招募状态') === yes) {
      init_ero(5);
      await quick_make_love(
        new EroParticipant(5, part_enum.abuse),
        new EroParticipant(0, part_enum.masochism),
        false,
      );
      await tachyon.say_and_wait(
        '还有，富士君也接受我的提议让我实验了，啧啧，没想到我们家豚鼠君的面子这么大，连宿舍长都无法逃过魔掌啊',
      );
      era.println();

      await era.printAndWait(
        '爱丽速子摸着豚鼠的大腿内侧，满是正字的双腿，其中四行用特殊笔迹写下的痕迹，微微发出光芒，表演艺人总是浮夸的，哪怕写正字时也不例外',
      );
      era.println();
    }

    if (era.get('cflag:36:招募状态') === yes) {
      !get_penis_size(36) && era.set('status:36:弗隆P', 1);
      init_ero(36);
      era.set('palam:36:阴茎快感', era.get('tcvar:36:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(36, part_enum.penis),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      await tachyon.say_and_wait(
        '啧啧，明明每天都说什么逻辑逻辑，做起爱来不还是把理智都忘光了吗……神宫君',
      );
      era.println();

      await era.printAndWait(
        `速子摸着 ${me.name} 的菊穴，这几天把这边日到红肿的主要原因就是神宫的肉柱，倘若真的一切都要合理的话，在这种没有任何生产意义的穴里射出应该是最不符合逻辑的行为了吧，但这三天里${tachyon.sex}不停耕耘的样子却让 ${me.name} 完全不敢问出口，当然也没机会问出就是了`,
      );
      era.println();
    }

    temp = era
      .getAddedCharacters()
      .filter(
        (e) =>
          era.get(`cflag:${e}:父方角色`) + era.get(`cflag:${e}:母方角色`) ===
            32 && era.get(`cflag:${e}:成长阶段`) >= 2,
      );
    if (temp.length) {
      const child = get_random_entry(temp);
      !get_penis_size(child) && era.set(`status:${child}:弗隆P`, 1);
      init_ero(child);
      era.set(
        `palam:${child}:阴茎快感`,
        era.get(`tcvar:${child}:阴茎快感上限`),
      );
      await quick_make_love(
        new EroParticipant(child, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await tachyon.say_and_wait(
        `${era.get(`callname:${child}:-2`)}……真不愧是我的${sys_get_callname(
          32,
          child,
        )}，这么快就无师自通用上了${sys_get_callname(
          child,
          0,
        )}的穴……不过小孩子嘛，独占欲强点也是可以理解的`,
      );
      era.println();

      await era.printAndWait(
        `速子拍着 ${me.name} 的屁股，上面用稚嫩的笔迹写着『${sys_get_callname(
          child,
          0,
        )}是我专用的便器』，也不知道这孩子是不是真的理解了话中的意思……听见速子念出这句话，想到孩子若是在理解了这句话的意思的情况下写下来的…… ${
          me.name
        } 又忍不住陷入了高潮`,
      );
      era.println();
    }

    if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo) {
      await tachyon.say_and_wait(
        '真为你肚子里的孩子感到可怜啊……母亲居然是这种人尽可夫的婊子，如果是我还不如用精液把自己淹死算了',
      );
      era.println();

      await era.printAndWait('速子又重重踩了一脚，带着嘲讽及不屑的语气说');
      era.println();

      await tachyon.say_and_wait(
        '感到庆幸吧，马娘的身体足够结实，所以就算这样踩也只能对你造成伤害，对肚子里的孩子是一点事也不会有……但你大概也不会在乎这种事吧，有肉棒就好的妓女',
      );
      era.println();

      await era.printAndWait(`${me.name} 想反驳，但从下体喷出的潮水却不容反驳`);
      era.println();

      await quick_make_love(
        new EroParticipant(32, part_enum.foot),
        new EroParticipant(0, part_enum.body),
        false,
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.body),
        false,
      );
    }

    await tachyon.say_and_wait(
      '这边这些，则都是『曾经』爱慕过你的那些孩子留下的呢',
    );
    era.println();

    await era.printAndWait(
      `速子拂过 ${me.name} 身上写着的『母狗』、『便器10元一次』、『马娘大人的精便器』、『性爱德比18着』`,
    );
    await era.printAndWait(
      '每一行都是看见自己憧憬的训练员变成淫荡的母马孕袋后由爱生恨，由恨生欲的马娘们所留',
    );
    era.println();

    await tachyon.say_and_wait('但你应该很爽吧，嗯？');
    era.println();

    await era.printAndWait('速子的脸上浮现了满是嗜虐的笑容');
    era.println();

    await tachyon.say_and_wait(
      '看你爽的这德性，被写上字的时候，是不是还要求她们一字一句念出来给你听啊？嗯？骚货，贱狗，为了精液能跪在地上舔鞋子的母猪？',
    );
    era.println();

    await era.printAndWait(`每说一句，${me.name} 的下面就不由得涌出一阵潮水`);
    await era.printAndWait(`让 ${me.name} 想做出的反抗都变成虚伪的欲迎还拒`);
    era.println();

    !get_penis_size(32) && era.set('status:32:弗隆P', 1);
    if (love >= 75) {
      await tachyon.say_and_wait('开玩笑的');
      era.println();

      await era.printAndWait(
        `忽然，速子扶住 ${me.name} 的脸，轻柔的将堵住 ${me.name} 嘴巴的口球摘下`,
      );
      await era.printAndWait(
        `摘下瞬间，由于前面受到的打击，加上 ${me.name} 腹中还没排干净的那些精液，导致 ${me.name} 不由自主的朝着速子，将肚子里的精液、爱液、胃酸吐的一乾二净`,
      );
      era.println();

      await era.printAndWait(
        `看见眼前速子的白大褂被自己弄脏，${me.name} 脸色苍白，不只是因为前面遭受的玩弄，更是因为自己的不敬之举`,
      );
      era.println();

      await tachyon.say_and_wait('……没事的，豚鼠君');
      era.println();

      await era.printAndWait(
        `速子用没被呕吐物沾到的袖子，轻柔的擦了擦 ${me.name} 的嘴`,
      );
      era.println();

      await tachyon.say_and_wait(
        '我不是说过吗？我不会抛弃你的，不管你变成什么样子都一样',
      );
      era.println();

      await era.printAndWait(
        `没等 ${me.name} 反应过来，${tachyon.sex}便吻上了 ${me.name} 的唇，不顾这双唇这几天内遭受了多少折磨，被多少人玷污过，刚刚又呕出了多少东西`,
      );
      await era.printAndWait('轻柔，温暖，包容的吻');
      await era.printAndWait(
        `不知不觉，${me.name} 感觉，自己仿佛回到了从前的日子一样`,
      );
      era.println();

      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );

      await era.printAndWait('……但，也只是仿佛');
      era.println();

      await era.printAndWait(
        `${me.name} 看着速子的白大褂下，越显隆起的肿胀，想起了自己的身份`,
      );
      await era.printAndWait(`速子也注意到了，不好意思的对 ${me.name} 笑了笑`);
      era.println();

      await tachyon.say_and_wait('可以吗？豚鼠君？');
      era.println();

      await era.printAndWait(
        `${me.name} 没有回答，只是顺从的跪伏在地，进行今天的第一次服侍`,
      );

      era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
    } else {
      await tachyon.say_and_wait('都这样了还想狡辩？');
      era.println();

      await era.printAndWait(`速子动作粗暴的拆掉了 ${me.name} 的口球`);
      await era.printAndWait(
        `摘下瞬间，由于前面受到的打击，加上 ${me.name} 腹中还没排干净的那些精液，导致 ${me.name} 不由自主的朝着速子，想将肚子里的精液、爱液、胃酸吐的一干二净`,
      );
      await era.printAndWait('然而……');
      era.println();

      await tachyon.say_and_wait('想做什么呢，豚鼠君');
      era.println();

      await era.printAndWait('啊啊，早该知道的');
      await era.printAndWait(
        `${tachyon.sex}怎么会有那么好心拆掉口球让自己舒服呢`,
      );
      await era.printAndWait(
        `在 ${me.name} 张开嘴的瞬间，就被${tachyon.sex}用下体的巨根堵住了想要吐出的一切事物包括话语`,
      );
      era.println();

      await tachyon.say_and_wait('这几天忙着实验，我自己都还没用呢');
      era.println();

      await era.printAndWait(
        `满是骚臭甚至还带有尿味的巨根堵上了 ${me.name} 的喉咙`,
      );
      await era.printAndWait(
        `${tachyon.sex}动作粗暴的使用着 ${me.name} 的口舌，仿佛在使用无机物的飞机杯一般`,
      );
      await era.printAndWait('不带感情，纯粹为了性欲的处理而使用');
      era.println();

      await tachyon.say_and_wait(
        '呼，出来了出来了，接好啊，不然等会……算了，反正弄脏了地板处理的也是你',
      );
      era.println();

      era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );

      await era.printAndWait(
        `速子毫不客气的灌满了 ${me.name} 的嘴，接着没有多做停留就回到了实验室继续今天的研究`,
      );
      await era.printAndWait(
        `完成了今天第一次侍奉的 ${me.name} 双眼无神的望着虚空，思考着究竟一切是如何走到今天这一步的`,
      );
      await era.printAndWait(
        '……然而，这样的思考也毫无意义，就像在改造手术时听到的一样，一切已经回不去了',
      );
      await era.printAndWait(
        `${me.name} 努力将口中积累了三天的白浆咽下，看着被自己弄脏的走廊地板……`,
      );
      era.println();

      era.printButton('用嘴', 1);
      era.printButton('用扫具', 2);

      temp = await era.input();
      if (temp === 1) {
        await era.printAndWait(
          '反正，都已经回不去了，那不如干脆一点，放弃理智享受一切吧',
        );
        era.println();

        await era.printAndWait(
          `${me.name} 跪伏在地上，舔舐着三天以来 ${me.name} 留下的痕迹`,
        );
        await era.printAndWait('原因究竟为何呢？');
        await era.printAndWait(
          '因为要是被马娘大人们看到了自己使用工具清理，可能会变得更加悲惨？',
        );
        await era.printAndWait(
          '因为这样悲惨的处境才能更加警惕自己要努力脱离这样的生活？',
        );
        await era.printAndWait(
          '还是……真的就像速子说的一样，自己只是个为了精液和肉棒能够不顾形象跪在地上舔地板的贱货？',
        );
        era.println();

        await era.printAndWait('这些原因都无所谓了');
        await era.printAndWait(
          `趴在地上的 ${me.name} 现在，眼睛看到的，耳朵听到的，嘴巴尝到的，都只有在地上，自己身体上，自己全身上下能够插入的洞中流出的白浊精华了`,
        );
        era.println();

        await era.printAndWait('哒，哒');
        await era.printAndWait(
          `马娘灵敏的耳朵让 ${me.name} 听见了，有人在走廊上朝着这边走来的声音`,
        );
        await era.printAndWait('那么，又是哪位马娘大人需要自己的服侍了呢');
        await era.printAndWait(
          `不知不觉间， ${me.name} 主动撅起了屁股，等待下名贵客的使用`,
        );
      } else {
        await era.printAndWait(
          '虽然肉体上已经被改造了，但最起码，精神上不能放弃',
        );
        era.println();

        await era.printAndWait(
          `${me.name} 挣扎着站起身来——哪怕是马娘之身，对 ${me.name} 那刚经过三天玩弄的身体来说这依然算是个辛苦的举动——拿出扫具柜里这几天沾满了 ${me.name} 及各式各样马娘体液的扫除工具，清理着地面上自己留下的痕迹`,
        );
        era.println();

        await era.printAndWait(
          `虽然光是站起身对脚底板的刺激就足以使 ${me.name} 达到一次小高潮`,
        );
        await era.printAndWait(
          `虽然到现在 ${me.name} 的小穴和屁穴仍在不停的流出混合着白浊及爱液的黏液，增加 ${me.name} 的扫除困难`,
        );
        await era.printAndWait(
          '虽然看见钝头的扫帚柄，和闻到上面带着的气味，心中就有种冲动想要用其填满自己那不过五分钟没有插入过东西的小穴',
        );
        era.println();

        await era.printAndWait(
          `${me.name} 依然倔强的站起身，用扫帚和畚箕进行着徒劳无功的扫除`,
        );
        await era.printAndWait('自己是人类，不是马娘，不是性奴，不是孕袋');
        await era.printAndWait(`这样的坚持依然存在于 ${me.name} 的心中`);
        await era.printAndWait('然而…………');
        era.println();

        await era.printAndWait('哒，哒');
        await era.printAndWait(
          `马娘灵敏的耳朵让 ${me.name} 准确捕捉到了，有人在走廊上朝着这边走来的声音`,
        );
        await era.printAndWait(
          '是今天的使用者吗？这个问题，想必是无须回答的，不如说除开这个目的也想不到会有人靠近这个时不时有药物外泄的走廊的原因了',
        );
        await era.printAndWait(
          `但 ${me.name} 依然倔强的站着，装作没有听见，维持着自己身为人类的骄傲`,
        );
        era.println();

        await era.printAndWait(
          `——————纵使，那是在五分钟后便会被 ${me.name} 主动抛弃的东西`,
        );
      }
    }
    end_ero_and_train();
  }
};
