/**
 * @file 醒目飞鹰 - 招募
 * @author 黑奴一号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} falcon 醒目飞鹰
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {string} callname 醒目飞鹰对玩家的称呼
   */
  async rec_start(falcon, you, minoru, callname) {
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `能得到训练员的邀请非常感谢，不过呢，我觉得自己的实力恐怕还是差了一点。`,
    );
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `——啊，其实训练员真的很厉害，接下来一定能遇到更好的${falcon.uma_sex_title}。`,
    );
    era.printButton(`祝${callname}接下来遇到更好的训练员。`, 1);
    await era.input();
    await era.printAndWait(
      `与接触的${falcon.uma_sex_title}擦肩而过，因为付出的努力未达到想要的目标而懊恼。`,
    );
    await era.printAndWait(`${you.actual_name}忍不住叹了一口气`);
    await era.printAndWait(
      `今天就到此为止吧，${you.actual_name}努力克制着失落的情绪，${callname}将拿出的契约书草草塞回文件夹，${you.actual_name}从结伴而行的${falcon.uma_sex_title}们身边快步经过，然后回到了训练室。`,
    );
    era.drawLine();
    await era.printAndWait(
      `将训练室的大门锁好后，正准备离开的${callname}被闪烁的光芒所吸引。`,
    );
    await era.printAndWait(
      `为探求那道光芒的根源，无所事事的${callname}走向窗台，引入眼帘的是中庭的三女神雕像。`,
    );
    await era.printAndWait(`雕像将夕阳的光芒截取，然后赠与了${callname}。`);
    await you.say_and_wait(
      `美丽又充满智慧的三女神大人啊，请赋予我勇气让我找到合适的${falcon.uma_sex_title}吧。`,
    );
    await era.printAndWait(
      `究竟是自暴自弃的埋怨还是自嘲式的苦中作乐，亦或二者兼有。就算问${you.actual_name}自己，恐怕也没有准确回复。`,
    );
    era.println();
    await you.say_as_passer_by_and_wait(
      `怒气冲冲的人类教师`,
      `${falcon.name}！这已经是${callname}这个星期第三次未经许可擅自举办演唱会了！`,
    );
    await era.printAndWait(`愤怒的喊叫声打破了${callname}的思绪。`);
    await you.say_and_wait(`发生了什么？`);
    await era.printAndWait(`正当${callname}努力理解现状的时候。`);
    await falcon.say_and_wait(`不好意思让一下——`);
    era.printButton(`等——`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}只感到一阵劲风从身边掠过，险些因此站立不稳。`,
    );
    await falcon.say_and_wait(`怎、怎么办？`);
    await era.printAndWait(`想要逃避所做的反抗，却伤害到了陌生人。`);
    await era.printAndWait(
      `对${falcon.teen_sex_title}来说，这也是所谓的顾此失彼吧。`,
    );
    await you.say_as_passer_by_and_wait(
      '怒气冲冲的人类教师',
      `${falcon.name}！`,
    );
    await falcon.say_and_wait(`噫——`);
    await era.printAndWait(`一边是无辜的受害者，一边则是紧追不舍的敌人。`);
    await era.printAndWait(`就连片刻的迟疑也不允许，追赶的教师已经近在咫尺。`);
    await falcon.say_and_wait(`……飞鹰子可不能在这种地方认输！`);
    await era.printAndWait(
      `如果是${falcon.uma_sex_title}的话，想要从人类的手中逃跑——甚至反过来将他打倒也不是什么难事。`,
    );
    await era.printAndWait(`毕竟人类无法战胜${falcon.uma_sex_title}。`);
    await falcon.say_and_wait(`为了飞鹰子的偶像之梦，只能这么做了！`);
    await era.printAndWait(
      `扶着墙站起的${callname}努力地理解混乱的状况，而后看到了正准备打开窗户的${falcon.teen_sex_title}。`,
    );
    await you.say_as_passer_by_and_wait(`人类教师`, `！${falcon.name}！。`);
    await era.printAndWait(
      `苗条的身影就像真正的鹰一样，从窗户飞向了天空,将站在地上的凡人远远抛开。`,
    );
    await era.printAndWait(`但是\n`);
    await era.printAndWait(
      `——毕竟不是真正的鹰，重力毫不留情的将${falcon.sex}捕获，然后重重地将${falcon.sex}向下摁去。`,
    );
    await era.printAndWait(
      `然后${falcon.sex}撞断两根树枝，灰头土脸的从地上爬起，随后溜的一干二净。`,
    );
    await you.say_as_passer_by_and_wait(`人类教师`, `居然干出这种事？`);
    await era.printAndWait(`${callname}也深感认同。`);
    await era.printAndWait(
      `不知为何，那道跃动的身影牢牢记在了${callname}的心底。`,
    );
    era.printButton(`打扰了，刚刚的${falcon.uma_sex_title}是？`, 1);
    await era.input();
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `诶？${callname}说的是${falcon.name}吗？`,
    );
    await you.say_and_wait(
      `是的，我正在寻找合适的担当${falcon.uma_sex_title}。`,
    );
    await era.printAndWait(
      `虽然从刚才的决断来看稍显鲁莽，但这么独特的个性，应该早早就有训练员抛出橄榄枝才是。`,
    );
    await era.printAndWait(`似乎看出了${callname}的疑惑，教师苦笑着摇了摇头。`);
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `${falcon.name}似乎认定了草地赛道的样子，比想象中还要倔强。`,
    );
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `此外，比起在赛场上取得优胜，${falcon.name}似乎更享受视线聚焦在自己身上的感觉。`,
    );
    await you.say_and_wait(`视线聚焦在自己身上，简直就像是偶像一样。`);
    await era.printAndWait(
      `作为粉丝们期翼的理想存在，在万众瞩目的舞台上展现着自己最美好一面的，偶像。`,
    );
    await you.say_and_wait(
      `……但是以赛${falcon.uma_sex_title}为起点比其他方向成功的概率更大，耗时也更短。`,
    );
    await you.say_and_wait(`是个切实可行的方案。`);
    await era.printAndWait(
      `或许是教师对自己学生的期许，亦或者是想要${falcon.name}就这么平静下来，教师摇了摇头。`,
    );
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `但是${falcon.sex}不管怎么努力，似乎都像被沉重的铁球系住了脚。`,
    );
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `在连续三场选拔赛以倒数几名结束后，恐怕${falcon.sex}也知道自己在草地方面并不理想。`,
    );
    await you.say_and_wait(
      `对于追求理想的${falcon.teen_sex_title}来说，没有比这个更痛苦的了。……为什么不试试看沙地？`,
    );
    await era.printAndWait(
      `沉溺在思考中的${callname}自觉失言，随后自嘲的摇了摇头，想将尴尬的回忆抛到脑后。`,
    );
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `恐怕只有当面问${falcon.sex}才知道。`,
    );
    await era.printAndWait(`教师搓了搓手，哈出的气体凝聚成水雾被寒风带走。`);
    await you.say_and_wait(`${falcon.name}接下来会在哪里？`);
    await era.printAndWait(
      `正当${callname}打算询问更多关于${falcon.name}消息时，急促的铃声打断了${callname}们之间的对话。`,
    );
    await you.say_as_passer_by_and_wait(
      `人类教师`,
      `接下来还是会追逐自己的梦想吧。`,
    );
    await era.printAndWait(
      `教师向${callname}摆了摆手，随后走向了办公室。${callname}梳理着对话中的有用信息，却被吹进走廊的寒风冷的缩了缩脖子。`,
    );
    era.drawLine({ content: '第二天' });
    await era.printAndWait(
      `${callname}像平时一样来到训练室门口，却发现训练室大门上贴着什么。`,
    );
    await falcon.say_and_wait(
      `新人偶像${falcon.name}！预定16:00在河边举行突击演唱会！一定要来看哦♪`,
    );
    await era.printAndWait(`犹豫片刻后，将海报轻轻撕下。`);
    await era.printAndWait(`不远处传来了不小的骚动声。`);
    era.printButton(`去看看吧。`, 1);
    await era.input();
    await era.printAndWait(`于是${callname}便向着骚动传来的方向迈出了脚步。`);
    era.println();
    await falcon.say_and_wait(`非常抱歉。`);
    await minoru.say_and_wait(
      `${falcon.actual_name_with_title}，如果想要合规的进行偶像活动，请在选拔赛上努力与合适的训练员进行签约。`,
    );
    await minoru.say_and_wait(
      `特雷森学院是以培育优秀赛${falcon.uma_sex_title}为目标而创立的，我想以此为目标希望一同前进的训练员应该不会少。`,
    );
    await minoru.say_and_wait(
      `请把努力的方向修正后，与合适的训练员一同前进吧。`,
    );
    await era.printAndWait(
      `手纲缰绳一边将${falcon.name}手中尚未分发出去的海报没收，一边郑重的告诫对方。`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `从低垂的马耳来看，${falcon.name}似乎陷入了两难之地。`,
    );
    await minoru.say_and_wait(
      `……${you.actual_name_with_title}，请问有什么事情吗？`,
    );
    await era.printAndWait(`手纲迅速切换到了工作模式。`);
    era.printButton(`抱歉，我之后会好好和${falcon.name}谈谈的。`, 1);
    await era.input();
    await era.printAndWait(
      `不知为何，${you.name} 想起了在窗边闪闪发光的${falcon.teen_sex_title}。`,
    );
    await minoru.say_and_wait(
      `……这样的话，之后请把契约书复印一份放在理事长办公室，不过在此之前。`,
    );
    await minoru.say_and_wait(
      `和 ${falcon.actual_name_with_title} 正式契约更好。`,
    );
    await era.printAndWait(
      `${callname}顺着手纲小姐的目光看向了贴了一路的海报。`,
    );
    await minoru.say_and_wait(
      `请在${falcon.uma_sex_title}们上课之前把走廊恢复成原来的样子。`,
    );
    await era.printAndWait(`虽然手纲缰绳一直在笑容传来了极强的压迫感。\n\n\n`);
    await era.printAndWait(
      `在拼命的努力后，总算在上课铃响起之前将海报全部撕了下来。`,
    );
    await falcon.say_and_wait(
      `……谢谢${callname}！飞鹰子的粉丝一号${you.adult_sex_title}！`,
    );
    await era.printAndWait(`粉丝一号？`);
    await falcon.say_and_wait(`飞鹰子在河边举行的演唱会，一定要来看哦？`);
    await era.printAndWait(`作为衬托偶像的存在，就是粉丝了吧。`);
    await era.printAndWait(`${callname}突然想起了放在背包之中的海报。`);
    era.printButton(`我会参加的。`, 1);
    await era.input();
    await era.printAndWait(
      `眼前的${falcon.teen_sex_title}带着花朵一样徐徐展开的笑容向${callname}鞠了一躬。`,
    );
    await era.printAndWait(`${callname}开始期待接下来的演出了。`);
  },
  /**
   * @param {CharaTalk} falcon
   * @param {CharaTalk} you
   * @param {string} callname
   */
  async rec_final(falcon, you, callname) {
    // 定义：1代表积极 2代表消极
    // 节拍 1
    await era.printAndWait(`${callname}跟着海报的指引来到了河岸边。`);
    // 场景应为积极
    await era.printAndWait(
      `随着太阳逐渐西沉，天空的颜色也从明亮的蔚蓝慢慢荡漾到橙黄，云朵也被夕阳染成了金红色。`,
    );
    await falcon.say_and_wait(`～～～♪`);
    // 通过行走暗示时间从下午到黄昏
    await era.printAndWait(
      `高架桥投下的阴影覆盖了桥下的区域，形成了大片的暗区，只有在黄昏之时，才会有一丝丝的光线洒在桥下的草地上。`,
    );
    await era.printAndWait(
      `而被橙黄色的天空所渲染的${falcon.teen_sex_title}，就在河边的草地，${falcon.sex}的舞台上举行着演出。`,
    );
    // 节拍 1
    await falcon.say_and_wait(`～～～♪谢谢大家！`);
    // 对比 空无一人的草地
    await era.printAndWait(`${falcon.teen_sex_title}娴熟的面对着空地鞠躬。`);
    await era.printAndWait(
      `——尽管如此，${falcon.teen_sex_title}的脸上依然带着笑容。`,
    );
    // 节拍 2
    await era.printAndWait(`啪啪啪啪。`);
    await era.printAndWait(`${falcon.teen_sex_title}似乎无动于衷。`);
    await era.printAndWait(`——不过，${callname}总感觉有股若有若无的视线感。`);
    await era.printAndWait(
      `但即使如此，除了耳朵微微颤动以外，${falcon.teen_sex_title}继续着自己的表演。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`——呼⭐今天的飞鹰子状态绝佳！`);
    await era.printAndWait(
      `${falcon.teen_sex_title}站在左右路灯发出光线的交界处，就像是在模仿着被探照灯照射的舞台一样。`,
    );
    await era.printAndWait(`或许，这就是${falcon.sex}的舞台吧。`);
    await era.printAndWait(`孤独的偶像吗。`);
    await falcon.say_and_wait(`飞鹰子的粉丝一号${you.adult_sex_title}⭐`);
    await era.printAndWait(`正准备转身离开的${callname}被叫住了。`);
    era.printButton(`……粉丝一号？`, 1);
    await era.input();
    await era.printAndWait(
      `沐浴在光线之下的${falcon.teen_sex_title}以一种活跃到几乎是亢奋的声音向${callname}宣布到。`,
    );
    await falcon.say_and_wait(
      `因为粉丝一号${you.adult_sex_title}是第一个听完飞鹰子整场演唱会的人⭐`,
    );
    era.println();
    await era.printAndWait(
      `……${callname}稍稍回忆了一下，虽然从中途也有两三人围观，但都在最后一幕前离开了。`,
    );
    await era.printAndWait(
      `换句话说，自己是唯一一个从开头一直看到结束的观众。`,
    );
    await era.printAndWait(
      `能在1月的寒风中坚持2小时，被称为粉丝也是确切的说法吧。`,
    );
    await falcon.say_and_wait(
      `粉丝一号${you.adult_sex_title}有什么愿望吗？只要是飞鹰子的能力范围内，飞鹰子都会实现的⭐`,
    );
    await era.printAndWait(`${callname}稍稍想了一下。`);
    era.printButton(`可以在沙地选拔赛上见到飞鹰子吗？`, 1);
    await era.input();
    await era.printAndWait(
      `似乎是始料未及的回复，${falcon.name}露出了尴尬的神情。`,
    );
    await falcon.say_and_wait(`……飞鹰子正在寻找合适的训练员哦？`);
    era.printButton(`既然这样，不如和我签订契约吧。`, 1);
    await era.input();
    await falcon.say_and_wait(`诶？`);
    await falcon.say_and_wait(`太好了！`);
    await era.printAndWait(`${falcon.name}似乎在用自己的方式庆祝。`);
    await falcon.say_and_wait(`飞鹰子的粉丝一号同时还是一名训练员！`);
    await falcon.say_and_wait(
      `既然这样就让训练员${you.adult_sex_title}看到飞鹰子在草地上的潜力吧！`,
    );
    await era.printAndWait(
      `越说越激动的${falcon.name}情不自禁的握住了${callname}的手。`,
    );
    era.printButton(`我希望能在泥地上看到${callname}的身影。`, 1);
    await era.input();
    await falcon.say_and_wait(`诶……`);
    await era.printAndWait(`${falcon.name}僵在原地。`);
    era.printButton(`我希望能在泥地看到${falcon.name}的身影。`, 1);
    await era.input();
    await era.printAndWait(
      `时间像是凝固了一样，${callname}紧紧的盯着${falcon.name}试图逃跑的双眼。`,
    );
    era.println();
    await falcon.say_and_wait(`……毕竟是飞鹰子第一个粉丝的请求呢。`);
    await era.printAndWait(
      `像是过去了一个世纪一般的漫长时间，${falcon.name}最终做出了答复。`,
    );
    await era.printAndWait(
      `不再回避${callname}的视线，堂堂正正注视着${callname}的${falcon.name}。`,
    );
    await falcon.say_and_wait(
      `飞鹰子觉得只有在草地上奔跑才能登上最大最闪亮的舞台！`,
    );
    await falcon.say_and_wait(`而且泥地和草地之间的人气，相差了三四倍不止！`);
    await falcon.say_and_wait(`虽然飞鹰子不擅长草地，但是努力一定会产生结果`);
    era.printButton(
      `飞鹰子没有想过作为泥地偶像开创属于自己的${falcon.teen_sex_title}偶像时代吗?`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`咦咦咦——`);
    await you.say_and_wait(
      `泥地的粉丝们也期待着能指引着他们的${falcon.teen_sex_title}诞生，不如说这是泥地的大家所期盼的事情。`,
    );
    await you.say_and_wait(
      `——泥地的大家们可是憋着一口气，想要看到明星${falcon.teen_sex_title}的诞生！`,
    );
    await era.printAndWait(
      `深吸一口气，看来距离说服${falcon.name}就差一步了。`,
    );
    era.printButton(`${falcon.name}不想站在最闪耀的舞台之上吗。`, 1);
    await era.input();
    await falcon.say_and_wait(`……飞鹰子的……最闪耀的舞台吗？`);
    await you.say_and_wait(
      `偶像不就是为了回应粉丝们的期待而将不可能化作可能的明日之星，对吧？`,
    );
    await era.printAndWait(
      `掌控着节奏像弹起的米粒沿着太刀的轨迹被精准的一分为二一样，${callname}向${falcon.name}伸出了手。`,
    );
    await you.say_and_wait(`为了共同的理想出发吧。`);
    await falcon.say_and_wait(
      `接下来请多指教了，训练员……不！飞鹰子的粉丝一号${you.adult_sex_title}⭐`,
    );
    await era.printAndWait(`两人的手紧紧的握在了一起。\n`);
    await era.printAndWait(`成功招募${falcon.name}了！`);
  },
};
