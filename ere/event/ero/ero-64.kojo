调教开始:
  # TFLAGNAME:9 = 强奸
  - if: era.get('tflag:9') === 0
    lines:
      - if: era.get('love:64') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「唉？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「和我做那种事情？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不可以这样啊%CALLNAME%，那个……我，我先走了……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「啊！」
      - if: era.get('love:64') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不行，这样的话……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「不要过来……%CALLNAME%❤」
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:64') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「那个，做这种事情的话，就算是%CALLNAME%……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……不过我会听的啦，如果是命令的话……」
      - if: era.get('love:64') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「要做吗？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「那个，会害羞……不，没关系！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「只要是%CALLNAME%的话……」

加入房事:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「为什么，%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「明明我也是……也是想要的……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……还是说，我来的不是时候吗？」
  - acc: 1
    content: 「你来的正是时候」
  - acc: 2
    content: 「这可不行……」

加入房事接受:
  - %CHARA% 红着眼眶，扑倒在 %YOU% 的怀里陶醉的呼吸着。
  - 再次抬起脸的时候，眼神早已带着模糊的热气……

加入房事拒绝:
  - %CHARA% 的表情从期待变成了阴暗，把失落收进了下垂的刘海里。
  - 对着 %YOU% 勉强挤出笑脸，尴尬又落寞的离去了。

加入房事强上:
  - 无视了 %YOU% 想要拒绝的声音，一口气抓住了衣领。
  - 用力的拉倒自己的面前，强硬的亲吻着。
  - 松开口的时候，%CHARA% 已经脱下了衣服，在上位无情地看着……

夜袭:
  - 睡梦之中，被身下传来的猛烈刺激唤回了意识。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「哈啊，%CALLNAME%，%CALLNAME%……」
  - if: d.half_life === 1
    lines:
      - %CHARA% 伏在 %YOU% 的身上，身体随着本能在左右摆动着。
      - 手指轻轻的捏住 %YOU% 的脸，强硬的向着自己的方向拉住。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，快点……满足我吧……❤」
  - if: d.half_life === 0
    lines:
      - %CHARA% 伏在 %YOU% 的身上，随着自己的感情和本能不断的摆动着身体。

无法回头的领放:
  - 是发生什么事了呢，几分钟前还在笑着侃侃而谈的善信，此时却背对着%YOU%沉默不语
  - 或许是因为%YOU%刚刚从浴室走出，带着蒸腾的芬芳水汽，意图明显地坐在她身后
  - 又或许是在反应过来时，自己身上仅剩下内裤和一件单薄的衬衫
  - 无论原因是什么，这份珍贵的暧昧气氛已经絮绕于周围，如果在此时放弃可谓暴殄天物
  - 善信均匀地喘着气，躺在一边的尾巴饶有兴趣地四处摇摆，似乎在期待着什么
  -
  - acc: 1
    content: 靠近善信，从后面搂住她的腰
    lines:
      - 怀里少女的喘息声逐渐加粗，但仍勉强保持着冷静，与%YOU%双臂相搭
      -
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱歉呐……%CALLNAME%，我可能有些紧张」
      -
      - %YOU%贴在那只蜷缩的耳朵上念着安慰的话语，善信的身躯敏感地抽动着，又很快放松下来
      -
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「……嗯，我没事的……可以哦，%CALLNAME%……已经不会再逃走了」
      -
      - 善信把%YOU%的手按在胸前，%YOU%顺势一个个将纽扣解开，褪下衬衫，露出少女洁白诱人的脊背
      - 用手臂托住她的双乳，抚摸着她的腰肢和小腹，然后将头埋在她的脖颈里索求着气味……
      -
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
      -
      - 回应着善信的轻唤，%YOU%托住她的下巴，移到一侧与她两唇相合……
  - acc: 2
    content: 坐在原处，等待着善信自己敲破那层薄薄的糖衣
    lines:
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
      -
      - 片刻后，善信转过身与%YOU%对面而坐，只是眼神还游离在一边，轻咬着下唇
      -
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实……我已经做好觉悟了……关于接下来要做的事情」
      -
      - 她将衬衫上的纽扣一个个解下，将胸部从束缚中解脱出来，侧乳的沟壑清晰可见
      -
      - color: %COLOR%
        content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以，没关系的……在这里回头的话，未免也太可惜了一点？」
      -
      - 善信轻吐一口气看向%YOU%，释然地微微一笑，这话有多少是说给自己听的呢？
      - 她手指轻轻一动，衬衫便从肩膀上滑落下来，丰盈的双乳赫然入目，相衬下的双肩显得分外娇弱
      - 即使已经害羞到紧闭双眼，眼前的少女还是毫无保留地将自己展示给%YOU%，像是虔诚的供奉
      - 虽然还想再欣赏一番，但于心不忍的%YOU%还是将善信拥入怀中，与其相吻……
  -
  - color: %COLOR%
    content:
    - fontWeight: bold
      content: %CHARA%
    - 「嗯唔……」
  -
  - 这是性事前特有的、极具侵略性的吻
  - 肌肤相触，唾液相融，只为用激荡的欲望取代最后一点理智，但有一点你们都已经笃定
  -
  - 无论如何，都已经无法再回头了