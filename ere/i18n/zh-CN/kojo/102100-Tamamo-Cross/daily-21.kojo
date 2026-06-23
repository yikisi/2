# @file 玉藻十字 - 日常
# @author 雞雞
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「噢，我是%CHARA%！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「状态如何呀？吃饭了没？据说要是饭后不动动的话会变成牛呀！啊哈哈！」

good_morning:
  sync: true
  lines:
    # CFLAGNAME:66 = 招募状态
    - if: era.get('cflag:45:66') === 1
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_45%的口袋到底是怎么一回事……？为什么%SEX%能无限地掏出糖果啊！？我怕……！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「宿舍真是好东西啊。因为总会有人在所以让我很安心。感觉有点像老家呀～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「对犯傻的吐槽已经压倒性地不够用了……不如说这里的人犯起傻来也太别树一帜啦……！！」
    - if: era.get('relation:21:0') >= 76
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一开始那样顶撞你真是抱歉。真是很感激你愿意在那种时候对我搭话啊！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「『白色闪电』参上！就是这样……嘿嘿，我很帅气吧？」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:21:0') < era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不好，使不出力气来。等我一下……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「虽然我知道现在是该顶硬上的时候……」
  - if: era.get('base:21:0') >= era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      # CFLAGNAME:40 = 干劲
      - if: era.get('cflag:21:40') === 2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「干劲与元气都充满啦！好耶～～！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「元气霹雳啪啦的！！因为我正是闪电！！」
      - if: era.get('cflag:21:40') === 1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「啪一声地准备，唰一声地训练然后蹦一声地搞定就好啦！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「今天感觉良好，稍微严厉点也可以呀！」
      - if: era.get('cflag:21:40') === 0
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「准备OK咯！咱们开始！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「要俐落地上了！跟咱走！」
      - if: era.get('cflag:21:40') === -1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「总觉得不愠不火的……是不是有啥不对劲。」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「感觉要是能像这样嗨起来的话就好了……」
      - if: era.get('cflag:21:40') === -2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「用毅力……坚持……坚持一下……」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「你说赛道上的草能不能吃啊……」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是礼物啊！真是Lucky！快让我打开吧！」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要是能钓到什么给小不点加餐就好了呢～🎵」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:20:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那边躺着的是猫吗？不是！怎么看都是 %CALL_20% 吧？」
  # EXPNAME:25 - 26 = 性爱次数 - 睡奸次数
  - if: era.get('love:21') >= 75 && era.get('exp:21:25') > era.get('exp:21:26')
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那个……今天要不要吃甲鱼补充精力……♥？」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哎唷，今天天气真是——中规中矩是什么意思啊？这不是大晴天吗！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「吃过东西之后散步消食也很重要呢～」

o_s_arcade:
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我要给小不点夹到那个怪兽%CALL_6%！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘎——！这玩意太难了啊！混蛋SE〇A！」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「能不能抽到！能不能抽到！能不能抽到！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯～不期不待不会失望……中了吗？」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「卡拉OK的套餐真好吃啊！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「贫穷镇守府是无法地带～🎵大和不出货啊大和不出货～🎵」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「电影吗？咱都是在电视台上重播的呢……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「爆米花好贵……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下次要不要带小不点们一起来呢…？」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么？你要请咱吃这么贵的东西?! 这怎么行啊！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱就点这个小碗芽菜白饭配腌萝卜吧……什么？%CALLNAME%不许可？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「剩下的那些就打包给小不点们吧？」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那、那个……你果然是恋童癖吗……」
  - if: era.get('love:21') >= 50 && era.get('love:21') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （难道说……哪怕是这样的咱也能被爱……？）
  - if: era.get('love:21') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%♥，再握紧咱的手一点吧♥」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像这样不去训练真的可以吗……？」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要咱收下这么贵重的礼物……？不好吧……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那件衣服，小不点会不会喜欢呢？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可恶啊！！咱个子小又怎么了！！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊啊啊啊啊！！！我是要成为《白色闪电》的%UMA%！！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱说……我们这也太显眼了吧……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呣，咱真是上错贼船了……」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这个是给小不点做饭的时候顺便做的……你试试？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不愧是你啊，好好吃！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱说%CALLNAME%你是不是给咱夹太多菜了啊。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好久没做过用到那么多好材料的菜了……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么，因为要维持竞技状态所以只能吃鸡胸肉？！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就给%CALLNAME%露一手咱最擅长的煮豆芽菜吧！」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咦，为什么咱明明是来跑步的却要学微积分？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊咱没睡着，咱没睡着……」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （%YOURSEX%的睡脸有点可爱啊……）
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯啊，咱吃不下了……」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「原来如此……咱懂了！总之就是从后面急起直追对吧？！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「知道了！谢谢你嘞！」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我家小不点都已经不玩游戏机了呢……他们都在抢着一台手机玩。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦哦，现在的游戏机画面这么精美啊！」

out_church:
  - 为了让没啥精神的 %CHARA% 能鼓起干劲，你们专程来到了神社祈福。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「老天爷啊，咱就麻烦你了！保佑我不要一直碰壁罢！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「求求你嘞——！让我状态好点——！」
  -
  - 不消一会，%SEX%的手机竟然响起来了。
  - 只见%CHARA%双目圆瞪，连尾巴都高高翘起。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「这是……之前好不容易挤进去的消费券抽选通知？！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「咱看看……噫！好！咱中了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「谢谢老天爷保佑，谢谢老天爷保佑哦——！」
  -
  - 真的有这么巧合吗？%YOU%看着不住叫嚷的 %CHARA% 不禁想道。
  - if: d.dice > 0
    content: 不知道是不是因为中奖的关系，连带着让 %CHARA% 的精气神都提升了！可喜可贺，可喜可贺……
  - if: d.dice === 0
    content: 虽然中了奖，但果然和 %CHARA% 的状态没有关系啊……