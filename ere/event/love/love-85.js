/**
 * @file 第一红宝石 - 爱慕
 *
 * @author 梦露
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const Love85UntilHalfLife = require('#/event/love/love-events-85/until-half-life');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

module.exports = class extends Love85UntilHalfLife {
  async shame(ruby, me) {
    await print_event_name('羞涩少女', ruby);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 颤抖着双手解开衣服上的纽扣。',
    ]);
    await era.printAndWait('她脱下的不仅是衣服，更是最后的尊严。');
    await era.printAndWait('那件华美的洋装，在她小手的巧解下滑落到地上。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 下半身的曲线展露无疑，漂亮的小腿修长而纤细，似脱非脱的模样更是引人遐想。',
    ]);
    era.printButton('出声催促', 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 游移不定的小手开始解除身上剩下的武装。',
    ]);
    await era.printAndWait(
      '最后，除了脑袋上别的红色蝴蝶结和脚上的白色丝袜外，再也没有其他遮蔽物了。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的手因为防御本能，仍死心地护着三点。',
    ]);
    era.printButton('命令她拿开', 1);
    await era.input();
    await era.printAndWait('迟疑了一下，她无奈地摊开双手。');
    await era.printAndWait([
      '小脸因为感到羞耻而涨的通红，便扭过头去不再与 ',
      me.get_colored_name(),
      ' 有目光接触。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 开始欣赏爱马近乎绝妙的美丽身体。',
    ]);
    await era.printAndWait('皮肤白皙，光滑如高档丝绸。');
    await era.printAndWait(
      '胸前一对白兔已经跃跃欲出，不大、却也不扁平，宛如半开的青涩花瓣。',
    );
    await era.printAndWait('下腹光润洁白，尚未有野草侵染。');
    await era.printAndWait(
      '微微隆起的耻丘展现出完美的形状，被淡粉色的细缝一分为二。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 坐到 ',
      me.get_colored_name(),
      ' 怀里，缩的像个球。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 轻触面前娇小的躯体，可以感觉到爱马因为紧张而发抖，身上寒毛直竖泛起鸡皮疙瘩。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 深知 ',
      ruby.get_colored_name(),
      ' 此刻就是只刚被捉住尚在驯服的野猫，操之过急可是会吓坏的。',
    ]);
    era.printButton('搂着她', 1);
    era.printButton('带她回卧室睡觉', 2);
    await era.input();
  }

  async foot_job(ruby, me, r_call_m) {
    await print_event_name('足交', ruby);
    await ruby.say_and_wait([r_call_m, '，你的那个……变大了吗？']);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 低头看了一下 ',
      me.get_colored_name(),
      ' 的裤裆，然后抬头睁者那红亮的双眼问道。',
    ]);
    await ruby.say_and_wait('为什么会变大呢？');
    await ruby.say_and_wait([r_call_m, '，喜欢我穿白裤袜的腿是吗？']);
    era.printButton('「嗯。」', 1);
    era.printButton('「因为很好看……又很好摸，所以……」', 2);
    await era.input();
    await era.printAndWait([
      '突然间，',
      ruby.get_colored_name(),
      ' 伸出那柔柔的小手，牵着 ',
      me.get_colored_name(),
      ' 的手往她大腿上搁。',
    ]);
    await ruby.say_and_wait([
      r_call_m,
      ' 喜欢，就自己摸好了，我……我不讨厌 ',
      r_call_m,
      ' 这样……',
    ]);
    await era.printAndWait([
      '怎么回事？',
      me.get_colored_name(),
      ' 的脑筋一片空白，但手上传来的丝滑触感是不可能骗人的。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的手不由自主地轻轻抚摸起爱马的丝袜大腿，裤子里面的凶器也更加肿胀了起来。',
    ]);
    await ruby.say_and_wait('憋着，很不舒服吧。');
    await era.printAndWait([
      '说罢，',
      ruby.get_colored_name(),
      ' 伸手拉下了 ',
      me.get_colored_name(),
      ' 裤裆的拉链，那条狰狞的阳具充满力量的弹跳而出，然后被她用那小手温柔地套弄了起来。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 干脆踢掉长裤，两手并用抚弄起爱马的白丝美腿，享受掌心之下的温润。',
    ]);
    await ruby.say_and_wait([r_call_m, '，舒服吗？']);
    await era.printAndWait([
      '没几下功夫，',
      me.get_colored_name(),
      ' 就感觉下体酥麻难耐，几乎就要将琼浆喷射而出。',
    ]);
    era.printButton('拿开她的手。', 1);
    era.printButton('缴械投降。', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 赶忙拿开 ',
      ruby.get_colored_name(),
      ' 的手，中断那致命的快感。',
    ]);
    await era.printAndWait([
      '在 ',
      ruby.get_colored_name(),
      ' 疑惑的视线下，',
      me.get_colored_name(),
      ' 离开椅子坐到了地上。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 心领神会，用那双裹着丝袜的小脚，一左一右地夹住了 ',
      me.get_colored_name(),
      ' 愤怒朝天的男根，一上一下套动起来。',
    ]);
    await era.printAndWait([
      '在感觉到 ',
      me.get_colored_name(),
      ' 已经习惯了这样的动作后，',
      ruby.get_colored_name(),
      ' 会稍微用力踩踏下去。',
      me.get_colored_name(),
      ' 只能把手向后撑去，免得整个人支撑不住被踩倒在地。',
    ]);
    await ruby.say_and_wait('这样舒服吗？');
    await ruby.say_and_wait('讨厌的色鬼。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 害羞地骂道，但是两只丝袜小脚的动作却是越来越快。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的马眼马上涌出了一股股润滑的前列腺液，将那白色的裤袜小脚给弄湿了。',
    ]);
    await ruby.say_and_wait('如果你喜欢的话，以后每天这样帮你弄。');
    await era.printAndWait([
      '脑中已经灌满欲望的 ',
      me.get_colored_name(),
      ' 只能带着浓浊的喘息声答应。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 无法抗拒那致命的快感，仰起头放声呻吟。',
    ]);
    await era.printAndWait(
      '被夹在小脚之中的那根和少女对比鲜明的粗壮男茎一抖一抖地从马眼中向上如喷泉般爆发出一道道白色的浓精，然后往下落在那双可爱的白丝脚之上。',
    );
    await era.printAndWait([
      '喷发持续了十几秒的时间，让 ',
      me.get_colored_name(),
      ' 感觉眼前一片空白，强烈的快感似要将脑髓抽干一般。',
    ]);
    await era.printAndWait([
      '然而，',
      ruby.get_colored_name(),
      ' 的双足仍然不停地上下套弄，榨取 ',
      me.get_colored_name(),
      ' 的因子汁。',
    ]);
    await era.printAndWait([
      '直到射精结束好一会儿，才将双足搁在 ',
      me.get_colored_name(),
      ' 的大腿之上。',
    ]);
    await era.printAndWait([
      '用被精液浇透的白丝小脚，微微拨弄 ',
      me.get_colored_name(),
      ' 的大腿。让 ',
      me.get_colored_name(),
      ' 充分享受爆发后的余韵。',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.foot),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
  }

  async sex_mark(ruby, me, r_call_m) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('淫纹', ruby);
    await ruby.say_and_wait([
      '肚子已经涨满了，我却还在渴望 ',
      r_call_m,
      ' 他把精液灌进我的子宫里……',
    ]);
    await ruby.say_and_wait([ruby.get_colored_name(), '，你真是……不知羞耻。']);
    era.println();
    await ruby.say_and_wait('——这是，什么感觉？');
    await ruby.print_and_wait([
      '心脏扑通扑通地狂跳，',
      ruby.get_colored_name(),
      ' 不知道自己的脸蛋已经变得通红。',
    ]);
    await ruby.print_and_wait(
      '一双充满震惊和不解的双眼死死看着自己的小腹，双手重叠轻轻捂住了微张的嘴唇。',
    );
    await ruby.print_and_wait('身体变得格外火热，意识会间歇性地模糊。');
    await ruby.print_and_wait([
      '彷佛有一团火在体内灼烧，简直要让 ',
      ruby.get_colored_name(),
      ' 昏迷过去。',
    ]);
    await ruby.print_and_wait(
      '锻炼有素的四肢逐渐变得无礼，像高潮了一样微微颤抖着。',
    );
    await ruby.print_and_wait(
      '从外人来开，颤抖的马耳，绷直的马尾，和绝顶并无区别。',
    );
    await ruby.say_and_wait('呜呜呜……不要');
    await ruby.print_and_wait([
      '体内的炽热感就与被 ',
      r_call_m,
      ' 抱在怀中舌吻时别无二致。',
    ]);
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      ' 朝镜子看去，双眼中积蓄着水汽，银牙轻咬一脸挣扎的表情格外不像样。',
    ]);
    await ruby.print_and_wait([
      '她几乎是反射性地想到了与 ',
      r_call_m,
      ' 的日日夜夜。',
    ]);
    await ruby.print_and_wait([
      '甚至，她开始想象此刻被 ',
      r_call_m,
      ' 抱住亲吻，自己的表情会变成什么样呢？',
    ]);
    await ruby.say_and_wait('这种渴望，为什么？');
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      ' 感觉自己的耳朵微微一抖，便伸手触碰。',
    ]);
    await ruby.print_and_wait([
      '奇怪的是，本应感受到的被 ',
      r_call_m,
      ' 爱抚时的快乐，完全没有。这种感觉让 ',
      ruby.get_colored_name(),
      ' 感到一丝烦闷。',
    ]);
    await ruby.print_and_wait([
      '一种无处释放的压力在 ',
      ruby.get_colored_name(),
      ' 娇小的身躯内挤压着，幼嫩的嘴唇突出一口口火热的气息。',
    ]);
    await ruby.say_and_wait(['哈啊、哈啊……', r_call_m, '……为什么……']);
    await ruby.say_and_wait([r_call_m, '，帮帮我，我，我只能想着你……']);
    await ruby.say_and_wait('那种感觉，越来越强烈……为什么……为什么？');
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      ' 小换了一口气，眼神清澈了不少。',
    ]);
    await ruby.print_and_wait([
      '但是残留在她身体里的热度与和 ',
      r_call_m,
      ' 的回忆还在让她胡思乱想。',
    ]);
    era.drawLine();
    await era.printAndWait('（叩叩叩）');
    await ruby.say_and_wait([r_call_m, '，我……是我……']);
    await era.printAndWait('——声音有一点虚弱和喘息。');
    await era.printAndWait([
      '听到爱马的声音不对劲，',
      me.get_colored_name(),
      ' 毫不犹豫地打开房门。',
    ]);
    await era.printAndWait([
      '还没等看清眼前的丽人，',
      ruby.get_colored_name(),
      ' 的身体就直接扑到了 ',
      me.get_colored_name(),
      ' 的怀里。',
    ]);
    await me.say_and_wait('好热？', true);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的双手环抱在红宝石的身后，她的双腿发软，半跪着全身都依靠在 ',
      me.get_colored_name(),
      ' 的怀里。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的视线穿过了高档连衣裙上的某些半透明部位，落在了 ',
      ruby.get_colored_name(),
      ' 的内衣上。',
    ]);
    await era.printAndWait([
      '手掌感受到的热度，让 ',
      me.get_colored_name(),
      ' 一时愕然。',
    ]);
    await ruby.say_and_wait(['哈啊～哈啊～', r_call_m, '……哈啊……']);
    await era.printAndWait([
      '伏在 ',
      me.get_colored_name(),
      ' 怀里的 ',
      ruby.get_colored_name(),
      ' 缓缓抬起了头，小脸微红。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 急忙关上门，把 ',
      ruby.get_colored_name(),
      ' 抱上沙发让她平躺下去。',
    ]);
    await ruby.say_and_wait([r_call_m, '，我、我感觉好热……']);
    await ruby.say_and_wait(['我想见您，', r_call_m, '……我，我不知道为什么……']);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的声音不似平时般凛然，变得微弱娇软。',
    ]);
    await era.printAndWait([
      '充满水波的双眸死死看着 ',
      me.get_colored_name(),
      '，尾巴也悄悄缠住了 ',
      me.get_colored_name(),
      ' 的大腿。',
    ]);
    await era.printAndWait('她的双腿夹紧左右摩擦着，在沙发上轻轻扭动身体。');
    await era.printAndWait(
      '这幅欲言又止的羞涩模样，若是烟花女子肯定会觉得是欲拒还迎的诱惑手段。',
    );
    await era.printAndWait([
      '但她是 ',
      ruby.get_colored_name(),
      '，这活脱脱的发情母狗的样子让 ',
      me.get_colored_name(),
      ' 有点茫然。',
    ]);
    await ruby.say_and_wait([r_call_m, '……脑子，脑子迷迷糊糊的。']);
    era.printButton(`深呼吸，${m_call_r}。`, 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 的手机上已经出现了老管家的号码，却还是被 ',
      me.get_colored_name(),
      ' 搁置在了茶几上。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 蹲在 ',
      ruby.get_colored_name(),
      ' 身旁，轻轻埋进 ',
      ruby.get_colored_name(),
      ' 棕黑色的发丝之间嗅闻。',
    ]);
    await era.printAndWait('——雌性发情的气息。');
    await era.printAndWait([
      '马娘发情时，那股独有的浓郁、恬淡的清香，让 ',
      me.get_colored_name(),
      ' 一时有些沉醉。',
    ]);
    await era.printAndWait(
      '据说这种明明纯洁似水，久闻了又会感觉浓郁如墨的味道，会令情场老饕都为之着迷。',
    );
    await era.printAndWait([
      '保险起见，',
      me.get_colored_name(),
      ' 先将手按在 ',
      ruby.get_colored_name(),
      ' 的额头上，测量她的体温。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 眯起的双眼突然睁大，发出了轻微的色气吐息声。',
    ]);
    await ruby.say_and_wait('哈啊～唔～哈啊～');
    await era.printAndWait('——果然，是淫纹吗。');
    await ruby.say_and_wait([r_call_m, '，我是怎么了？我好热……']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 手掌轻抚、捋顺 ',
      ruby.get_colored_name(),
      ' 额头上的散发。手指也温柔地揉捏 ',
      ruby.get_colored_name(),
      ' 可爱的耳朵。',
    ]);
    await era.printAndWait([
      '舒适的感受和被 ',
      me.get_colored_name(),
      ' 触碰这一事实让 ',
      ruby.get_colored_name(),
      ' 多少放松了身心。',
    ]);
    await era.printAndWait([
      '对 ',
      me.get_colored_name(),
      ' 来说，',
      ruby.get_colored_name(),
      ' 就像纯洁无垢到舍不得品尝的水，而淫纹正式那一滴浓稠的墨。',
    ]);
    await era.printAndWait(
      '看似微小的欲望，能轻易将整杯水变为污浊，弄至沸腾。',
    );
    await ruby.say_and_wait(['哈啊～哈啊～好舒服，', r_call_m, ' 的手……']);
    await era.printAndWait(['苦笑一声，', me.get_colored_name(), '……']);
    era.printButton('轻轻将她迷离的双眼合拢。', 1);
    era.printButton(`「没事的，不要害怕，${m_call_r}。」`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '似乎只有失去这双纯真又充满色气的视线，',
        me.get_colored_name(),
        ' 的心才能安稳下来。',
      ]);
      await era.printAndWait([
        '尽管那张柔软的小嘴还在轻微喘着粗气诱惑 ',
        me.get_colored_name(),
        '，但 ',
        me.get_colored_name(),
        ' 姑且能忍住——至少现在。',
      ]);
      await era.printAndWait([
        '第二天一早，',
        me.get_colored_name(),
        ' 就联系管家把 ',
        ruby.get_colored_name(),
        ' 送回了宅邸。',
      ]);
    } else {
      await ruby.say_and_wait([
        r_call_m,
        ' 的表情，很痛苦？我是不是给您添麻烦了……',
      ]);
      await era.printAndWait([
        '扯住裙角的小手抬起，伸到了 ',
        me.get_colored_name(),
        ' 的脸上，扶住 ',
        me.get_colored_name(),
        ' 紧绷的侧脸摸扶着。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 的表情愈发沉重……']);
      era.printButton('「忍耐。」', 1);
      era.printButton('「必须忍住。」', 2);
      era.printButton('「肉体是诚实的。」', 3);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 柔软的小手在 ',
        me.get_colored_name(),
        ' 脸上抚摸着，而 ',
        me.get_colored_name(),
        ' 的小兄弟已经把裤子顶了起来。',
      ]);
      await era.printAndWait([
        '她现在只是关心 ',
        me.get_colored_name(),
        ' 的表情与感受，所以尚未注意到。',
      ]);
      await era.printAndWait([
        '咬紧牙关的 ',
        me.get_colored_name(),
        ' 准备把淫纹的事和 ',
        ruby.get_colored_name(),
        ' 说清楚时，呼吸一滞。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 同时瞪大了双眼看向彼此。',
      ]);
      await ruby.say_and_wait(['啊～！哼～啊！', r_call_m, '……！']);
      await ruby.say_and_wait(['意识好奇怪，', r_call_m, '，呜啊啊！——']);
      await era.printAndWait([
        '因为小腹上强烈的刺激，',
        ruby.get_colored_name(),
        ' 挺起身子几乎坐了起来，双手也下意识撑在身体两侧托住身体。',
      ]);
      await era.printAndWait(
        '瞳孔晃动着，柔嫩可爱的嘴唇大张着，吐出了那粉嫩的香舌。',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 的思维疯狂地敲响警钟，即使丢人 ',
        me.get_colored_name(),
        ' 也决定把医生叫来。',
      ]);
      await era.printAndWait([
        '手刚抓住手机，',
        ruby.get_colored_name(),
        ' 挺起的身体突然一歪从沙发上滚落。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 下意识地用身体接住，手机却被身体撞到一旁摔坏了。',
      ]);
      await era.printAndWait([
        '浑身无力的 ',
        ruby.get_colored_name(),
        ' 跪伏在 ',
        me.get_colored_name(),
        ' 胸前，身体中间正好被 ',
        me.get_colored_name(),
        ' 顶起的帐篷托住。',
      ]);
      await era.printAndWait([
        '因为身高的关系，她的脸勉强能埋在 ',
        me.get_colored_name(),
        ' 的胸口位置。',
      ]);
      await era.printAndWait([
        '棕黑色的长发从背后披散滑落，绵软的手臂撑在 ',
        me.get_colored_name(),
        ' 的胸膛上。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 晃晃悠悠地望着 ',
        me.get_colored_name(),
        '，这小马驹蜷缩起来还没 ',
        me.get_colored_name(),
        ' 半个身体长。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 挺直身体，脸色微红。嗪着泪的双目有些可怜。',
      ]);
      await era.printAndWait([
        '因为淫纹的影响，她此刻几乎是只遵从身体的本能靠在 ',
        me.get_colored_name(),
        ' 身上的。',
      ]);
      await ruby.say_and_wait('可以请您，为我治疗吗？');
      await era.printAndWait([
        '小舌微吐，',
        ruby.get_colored_name(),
        ' 根本不知道自己现在的表情有多火辣诱人。',
      ]);
      era.println();
      await era.printAndWait('嘴唇死死地贴合在一起。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 把 ',
        ruby.get_colored_name(),
        ' 的双手一手抓住举国头顶，让她无法抵抗。',
      ]);
      await era.printAndWait([
        '另一只手甚至能腾出来轻抚 ',
        ruby.get_colored_name(),
        ' 的后背，',
        ruby.get_colored_name(),
        ' 的双腿只能无力地蹬地来缓解快感。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的身躯随着娇吟声微微挺动，无意识地上供，似乎想与 ',
        me.get_colored_name(),
        ' 更紧密地贴合。',
      ]);
      await ruby.say_and_wait(
        [r_call_m, ' 的味道……好奇怪，怎么更热了……'],
        true,
      );
      await ruby.say_and_wait('好粗暴……', true);
      await ruby.say_and_wait('但为什么，小腹的烦闷感舒缓了？', true);
      await era.printAndWait([
        me.get_colored_name(),
        ' 偶尔松开 ',
        ruby.get_colored_name(),
        ' 的小嘴，每每这时她都会不检点地猛吸几大口气。',
      ]);
      await era.printAndWait(
        '紧密地双目也会慢慢睁开，露出那因缺氧和快感而稍稍翻白的亮紫色双眸。',
      );
      await era.printAndWait([
        '身体摇摇欲坠地抖动时，口水顺着 ',
        ruby.get_colored_name(),
        ' 的嘴角滑落。',
      ]);
      await era.printAndWait([
        '抓住 ',
        ruby.get_colored_name(),
        ' 双手的那只手也环到了少女背后，一手抱住她的后背一手揽起她的臀部。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的身体彻底与 ',
        me.get_colored_name(),
        ' 贴合，这次是 ',
        ruby.get_colored_name(),
        ' 主动吻上了 ',
        me.get_colored_name(),
        ' 的嘴唇。',
      ]);
      era.println();
      await era.printAndWait([
        '在 ',
        ruby.get_colored_name(),
        ' 无数次无力的呻吟中，交合的声音随着一阵急促的肉体撞击声戛然而止。',
      ]);
      await era.printAndWait([
        '当然，',
        ruby.get_colored_name(),
        ' 的子宫还在被 ',
        me.get_colored_name(),
        ' 注精。',
      ]);
      await era.printAndWait([
        '拔出肉棒的 ',
        me.get_colored_name(),
        ' 躺在床头，一手撑着脑袋。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 俯瞰着身下爱马的眼神带着以往没有的傲视。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 是如此沉迷于眼前的肉棒，望着这令人欣慰的一幕，',
        me.get_colored_name(),
        ' 伸出手摸了摸 ',
        ruby.get_colored_name(),
        ' 的头。',
      ]);
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      end_ero_and_train();
    }
  }

  async run(stage, extra_flag, event_object) {
    const pregnant_cache = era.get(`cflag:${this.id}:妊娠阶段`),
      ret = super.run(stage, extra_flag, event_object);
    if (pregnant_cache === 1 << pregnant_stage_enum.no) {
      era.set(`cflag:${this.id}:妊娠阶段`, 1 << pregnant_stage_enum.no);
    }
    return ret;
  }
};
