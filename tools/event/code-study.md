## 一、队列

队列是erauma中的重要概念之一，与大部分事件的触发、选取、执行相关。

队列相关的事件可以在queue.js中查看，主要有两个：

1、增加事件 和 2、选取事件

### 1.1 增加事件
```javascript
function add_event(stage_id, event_object) {
    if (!event_object) {
        era.logger.error('null EventObject!');
        return;
    }
    if (!queue) {
        this.init();
    }
    if (!queue[stage_id]) {
        queue[stage_id] = [];
    }
    (temp_queue[stage_id] || queue[stage_id]).push(event_object);
    EventMarks.get(event_object.chara_id).add(stage_id);
}
```
增加事件函数用来把一个指定时间加入指定钩子对应的事件池中。

入参有两个：stage_id和event_object

stage_id的取值为event_hooks这个key-value对中的key，代表的是把这个事件挂到哪个钩子上。

（不过不太理解的是为什么限定参数类型为number？） `stage_id本质是个枚举（event_hooks），传入的值按照number处理`

event_object即为需要触发的事件，它属于EventObject类，定义在event_object.js里。

这个类包含三个参数：chara_id（角色id），type（招募/爱慕/训练/日常），special（事件是否为特殊，例如育成事件就有普通事件和特殊事件）

例如，司机的招募事件中有一句 `add_event(event_hooks.school_rooftop, new EventObject(4, cb_enum.recruit))`;

这代表把招募事件挂到了天台上，前往天台的时候会随机触发招募。

回到queue上，queue是一个record类型的对象，其效果为将string和EventObject类对应上，例如，可以通过`queue[event_hooks.school_rooftop]`访问当前角色在天台钩子中的所有待触发事件和它们的参数

add_event函数的口头化表述是，给到一个stage_id和一个事件，把这个事件推到这个stage_id下当前可触发的所有事件中去，形成一个事件池子

（严格来说会push到池子中的最后一个，在涉及取事件逻辑的时候会跟顺序有关）


### 1.2 获取事件
`get_random_event(stage_id, random)`

get_random_event比较好理解，入参是stage_id和random，后者是一个布尔值代表本次是不是随机取事件，不随机的话默认取队列里头第一个

输入参数后，把这个幸运事件挑出来存到局部变量event_object里（同时把它从事件池子里头删掉）

接下来根据事件类型调用不同的事件处理方法

（最后部分的那段是啥意思？）
```javascript
    return stage_id === event_hooks.week_start ||
    stage_id === event_hooks.week_end
        ? undefined
        : async () => false;
```
`获取到的随机事件一般需要function类型，否则获取之后会执行出错，所以默认返回一个空的function；week_start和week_end这两个钩子在获取随机事件执行的时候采取机关枪模式，会不断从队列里获取事件然后执行，所以需要有明确的不可执行的undefined来让机关枪停下来；为了避免有些事件在条件判断不通过后将自己再加回队列导致机关枪停不下来的情况，add_event里才会优先将事件加到temp_queue里`

## 二、育成事件和check

check脚本定义以下事件：
* 育成事件
* 育成赛事目标


### 2.1 育成事件
#### 2.1.1 随机触发育成事件

部分育成事件并不是在固定条件或固定时间点触发，而是达成一定条件后每回合都有机会触发。

这些育成事件的添加会调用check_and_add_event函数，这个函数用于把一次性事件加入育成事件池中

使用自然语言描述该函数的流程大概是这样的：

* 触发条件：edu_marks中没有该事件的记录，且随机值判定通过
* 触发效果：把该事件的名字添加到edu_marks（防止多次触发），然后将对应的事件通过add_event方法添加到对应的钩子上。

使用示例：

内恰的育成事件：与辛苦的训练员

check-60.js中调用check_and_add_event函数，前置判断条件为edu_weeks < 3 * 48（换言之，如果运气好，育成一开始就通过了随机值判定，那可能一开始就会塞此事件），把hard_work_trainer挂到外出购物的钩子上；

```javascript
if (edu_weeks < 3 * 48) {
  /**育成回合限制*/
  const edu_event_marks = new EduEventMarks(60);
  const event_obj = new EventObject(60, cb_enum.edu);
  const event_obj_special = new EventObject(60, cb_enum.edu, true);
  check_and_add_event(
    edu_event_marks,
    edu_weeks,
    'hard_work_trainer',
    event_hooks.out_shopping,
    event_obj,
  );
  /**尝试将hard_work_trainer事件加入外出购物的事件池中，注意check_and_add_event函数的定义中有和周数相关的随机值判定条件，所以不是100%加上*/
  /**后面略*/
}
```

edu-60.js中，每当玩家进入外出购物阶段时，会检查hard_work_trainer的记录是否为1，为1代表已添加事件池且没有触发过。

如果为1，那么为此参数+1使其变为2（代表触发过，后续不会再触发），然后打印对应事件的文字。

```javascript
handlers[event_hooks.out_shopping] = async (hook, extra_flag, event_object) => {
    if (era.get('flag:当前互动角色') !== 60) {
      add_event(event_hooks.out_shopping, event_object);
      return;
    }
    const chara_talk = get_chara_talk(60),
      edu_event_marks = new EduEventMarks(60),
      me = get_chara_talk(0);
    if (edu_event_marks.get('hard_work_trainer') === 1) {
      edu_event_marks.add('hard_work_trainer');
      await print_event_name(
        `${era.get('callname:60:60')} 与辛苦的训练员`,
        chara_talk.color,
      );
      /**后面略*/
    }
};
```

内恰的口上中一共在外出购物的钩子中加了3个育成事件，再加上默认会有的日常事件，因此带内恰外出购物时会从这4个事件中随机抽选，当3个育成事件各触发一次后，以后就只会触发日常事件。

`内恰的购物事件，是在玩家选择外出购物街后，游戏系统先从外出购物街的队列里取出内恰的事件，然后发现是一个edu事件，再进入edu事件的执行流程；内恰一共有三个外出购物街事件，所以一共会往队列里加三次事件，执行完之后系统就不会执行到edu-60.js里内恰的外出购物逻辑，而是直接去执行内恰的daily事件`

#### 2.1.2 定时触发育成事件

部分育成事件会在固定时间点触发（圣诞节这种）

这些育成事件的添加则会直接调用add_event函数，因为过时不候，也不需要检测该事件触发次数

仍然是以内恰的育成事件为例

新年参拜事件会在48周和96周触发，事件钩子为week_start，会触发一个有4个分支的限时事件。

这些内容都会写在edu-60.js中
```javascript
    handlers[event_hooks.week_start] = async () => {
        const chara_talk = get_chara_talk(60),
            edu_weeks = era.get('cflag:60:育成回合计时');
        if (edu_weeks === 47 + 1 || edu_weeks === 95 + 1) {
            await print_event_name('新年', chara_talk.color);
            /**后面略*/
        }
    }
```

而check-60.js中会增加一条

```javascript
switch (edu_weeks) {
    case 47 + 1:
        add_event(event_hooks.week_start, event_obj_special);
        break;
    /**后面略*/
}
```

这段代码主要是为了在当周让对应的操作变红，提示玩家有特殊行为。如果check-60.js中不写这一段，事件仍然能正常触发，但不会有红色提示。

`固定时间触发的事件必须在check-60.js里处理，因为这些事件的执行方式仍然是通过事件队列进行的，不add_event就不会在事件队列里，也就不会被系统执行到；在某次更新后变红和add_event绑定了，关于变红的说法是对的`

### 2.2 育成赛事目标

`育成目标：育成目标主要是在两个部分，一个是aim_races和check_stages.aim_race，这个是进行自动报名比赛、在比赛报名界面将赛事名变红、在比赛界面的赛前赛后事件变红。最主要的是aim_races，它是个Record<string,number>，key是赛事ID（也是个枚举，可以从race-const.js的race_enum获取），或者是${比赛对应的育成周数}_${赛事ID}`

`这样写之后，系统就可以根据马娘的育成时间来判断是不是目标赛事了，就可以区分两次凯旋门、两次有马纪念之类一次育成可以跑好多次的比赛`

`这个key可以用get_aim_race_index这个函数来自动生成`

`有了aim_races，就可以支持check_stages.aim_races了，系统会将马娘的育成时间和赛事ID传给它，然后在aim_races里检查，如果有值，就说明是目标赛事，然后在比赛登记界面把赛事名变红；自动参赛用check_and_register_aim_race这个工具函数，用法看check-60.js:128行`

`然后是赛前赛后事件的自动变色，这和aim_races这个Record的value相关，value是个两位二进制数，最低位表示赛前事件，最高位表示赛后事件，按照马娘实际有没有剧情事件赋值：比如内恰的aim_races的所有value都是2（10），表示她的所有目标赛事都只有赛后事件没有赛前事件；鲁道夫和帝王有一些事件是赛前赛后都有的，所以可以看到她们的aim_races有些value是3；鲁道夫有一个目标赛事没有任何事件，所以她有一个value是4（00）`

`育成目标的第二个部分是check_stages.palace_check和check_stages.title_check，这两个是用来进行殿堂检查和称号检查的`

`palace_check里主要是check_aim_and_get_entry这个工具类，用法看check-60.js:132-146行，会进行育成目标的检查，然后将结果上色后返回一个可输出的数组，所有这些数组会被填到一个buffer数组里然后返回，在育成最后一周结束后输出；133行的common_check是基本的殿堂检查，条件是G1 6胜，并且进行了基本的粉丝袭击结局的检查（好感不高于0/G1没入着+G2前三名少于3次+G3一着少于5次）`

`title_check主要是检查称号条件并赋予称号，用法……等你写到这部分的时候再说吧，大概的提示就是cflag:60:育成成绩，它是个Record<string,{race:number,rank:number,st:number}>，key是育成周数，value中race是那一周参加的比赛，rank是比赛的名次，st是那场比赛采取的跑法（因为米浴加的），可以用这些信息来进行称号条件检查，通过之后将{color:string,name:string}塞到extra_flag.titles里面；color是称号的颜色，专属称号会用角色代表色上色，以后实装的其他称号则各有各的颜色`

## 三、爱慕事件

爱慕事件会涉及到以下函数：

`sys_love_uma_in_event`：这个函数用于事件中让马娘的爱慕度跨越到下一等级，使用时还会清除马娘身上的爱慕暂拒效果（若有）

爱慕口上的编写方式是：
* 为所有border>40的爱慕阶段写一个引子事件，实际上对应的border分别为50（暧昧升爱欲）、75（爱欲升热恋）、90（热恋升佳偶）、100（佳偶升依存并达到爱慕上限）
  这些事件完成后结算爱慕+1，进入下一个爱慕阶段
* 穿插其他想要的事件，例如表白

以内恰的事件为例：
```javascript
            module.exports = async (hook, _, event_object) => {
                const love = era.get('love:60'),
                    chara_talk = get_chara_talk(60);
                if (love >= 99) {
                    throw new Error('unsupported!');
                }
                if (hook === event_hooks.week_end) {
                    if (love === 49) {
                        await love_49(chara_talk);
                    } else if (love === 74) {
                        (await love_74_week_end(chara_talk)) &&
                        add_event(event_hooks.back_school, event_object);
                    } else if (love === 89) {
                        await love_89(chara_talk);
                    }
                } else if (hook === event_hooks.back_school) {
                    await love_74_back_school(chara_talk);
                }
            };
```
1. 定义一个love_49事件，触发条件是爱慕度达到49且事件钩子为week_end（因为有爱慕区间上限的限制，如果代码没写错的话，不会出现爱慕从48跳到50导致卡掉爱慕事件的问题）
  如果选择继续升级关系，则调用 love_49_week_start
2. love_49_week_start事件会触发一段内恰打胶的事件，事件结束后会使得爱慕度+1（即升入下一个爱慕阶段）
3. 后续的事件是love_74_week_end，触发条件是爱慕度达到74且事件钩子为week_end
  同样可以选择升级关系或暂不升级（这里选择暂不升级会爱慕暂拒，但是选择升级关系的话暂时不会进入下一个爱慕阶段，要等到表白事件触发后才会进入下一个阶段）
  同时，触发此事件时还会推一个内恰的爱慕事件到back_school池子里，后面有用。
  （这里有个问题：代码中似乎没有限制一定要选择升级关系才能把爱慕事件推到back_school池子里？换句话说，love_74_week_end选择了暂不升级关系的话，也可以表白？）

   `其实是有……这里用了js的一个语法特性，语句 a && b，js会先执行a，如果a返回了非空值，才会去执行b，所以if (a) {b}可以简写为a && b；再看内恰的爱慕事件，love_74_week_end函数里只有选择了升级关系才会返回true，也就是说只有选择了升级关系，love-60.js:357行的add_event才会被执行，才会把后续事件挂在back_school上`
4. 当爱慕值达到89且钩子为week_end时，会触发love_89事件，会自动触发爱慕升级到最高级。
5. 当钩子是back_school时（只有一种可能，就是触发了love_74_week_end，往这个池子里塞了内恰爱慕的event_object）,会触发love_74_back_school,让内恰和T表白
   表白成功则升入下一个爱慕阶段，表白失败则爱慕暂拒

`内恰爱慕事件的说法漏了两点：首先，当玩家把内恰的爱慕提升到临界点后，系统会先调用内恰的check脚本中的love_event去添加爱慕事件，内恰的check-60.js里没有定义love_event，所以会调用check_common里的love_event，所以内恰的所有阶段的爱慕事件都是从week_end开始的；其次，love-60.js中在爱慕值到99以上时抛出了一个异常，这表示要求系统执行love-common，所以内恰的佳偶升依存的事件使用的是通用事件`