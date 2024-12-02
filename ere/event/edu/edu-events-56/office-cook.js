const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 'miso_fortune') {
    return;
  }
  await print_event_name('味噌占卜', kitaru);
  await kitaru.say_and_wait(['那么！', callname, '！今天来做味噌汤占卜吧！']);
  await era.printAndWait([
    '兴高采烈的 ',
    kitaru.get_colored_name(),
    ' 将一碗味噌汤放在了 ',
    me.get_colored_name(),
    ' 的面前。',
  ]);
  era.printButton('饮用', 1);
  era.printButton('不饮用', 2);
  if ((await era.input()) === 2) {
    await kitaru.say_and_wait('欸！？');
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '双手合十的',
      kitaru.get_teen_sex_title(),
      '在 ',
      me.get_colored_name(),
      ' 面前摆出了楚楚可怜的表情，橙色的尾巴也低声下气的垂了下来。',
    ]);
    await era.printAndWait('这下没有办法拒绝吧？');
    era.printButton('饮用', 1);
    await era.input();
  }
  await me.say_and_wait('咕嘟');
  await era.printAndWait([
    '或许是由于',
    kitaru.get_uma_sex_title(),
    '本身的味觉过于敏感，这碗汤的调味有些过于淡了！',
  ]);
  await era.printAndWait([
    '不过抛开这点不谈，其余的部分鲜中又带着一丝甘甜，看来 ',
    kitaru.get_colored_name(),
    ' 确实下了不少心思。',
  ]);
  await kitaru.say_and_wait([callname, '！味道如何？']);
  await era.printAndWait([
    kitaru.get_teen_sex_title(),
    '黄水晶般的双眼闪闪发光的看着 ',
    me.get_colored_name(),
    '。',
  ]);
  era.printButton('「有点淡了。」', 1);
  await era.input();
  await kitaru.say_and_wait('欸！');
  await era.printAndWait(
    '用指尖直接在刚刚喝完的碗底蘸了一点点汤汁，伸出粉嫩的舌尖舔了舔。',
  );
  await kitaru.say_and_wait(['唔！', callname, ' 的口味是偏重的呢……']);
  era.printButton('「占卜的部分呢？」', 1);
  await era.input();
  await kitaru.say_and_wait('哦！你说这个呀！');
  await era.printAndWait([
    kitaru.sex,
    '漫不经心地端起 ',
    me.get_colored_name(),
    ' 放下的瓷碗，扫视起碗底。',
  ]);
  await kitaru.say_and_wait('从味噌渣的形状来看……这个占卜结果是——');
  await kitaru.say_and_wait('凶！');
  await era.printAndWait('该说是毫不意外吗？');
  await kitaru.say_and_wait([
    '所以！为了避免厄运，',
    callname,
    '，要试试小福做的其他菜式吗？',
  ]);
  if (kitaru.sex_code !== 1) {
    await kitaru.say_and_wait('巫女做的佳肴可是会含有神力的呢！');
  }
  await era.printAndWait(
    '于是之后接连品尝了过咸的玉子烧，还有稍微带点焦糊的煎鱼。',
  );
  await era.printAndWait([
    '看来 ',
    kitaru.get_colored_name(),
    ' 的厨艺还有很大的提高空间。',
  ]);
  era.println();
  get_skills_and_print_in_event(56, [201442]) && (await era.waitAnyKey());
  return true;
};
