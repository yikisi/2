赛前:
  - if: "!d.item"
    lines:
      # @author 雞雞
      - if: "!d.do_sex"
        lines:
          - random: true
            lines:
              - 「尽全力就好！」
          - random: true
            lines:
              - 「跑出自己的气势来！」
      # @author 幽白書
      # FLAGNAME:35 = 惩戒力度
      - if: d.do_sex
        lines:
          - 当其他训练员都在为自己的负责%UMA%做最后叮嘱时，%YOU% 却在吞吐着 %CHARA% 的肉棒，
          - if: era.get('flag:35') === 2
            content: 沉醉于赛前热血气氛中的 %CHARA% 那硬朗的下体自然需要解决，这也是身为性奴的 %YOU% 不可缺少的职责。
          - if: era.get('flag:35') === 3
            content: 沉醉于赛前热血气氛中的 %CHARA% 那硬朗的下体自然需要解决，这也是身为孕袋的 %YOU% 不可缺少的职责。
          - 在将所有精液吞入口中后，%YOU% 为 %CHARA% 的肉棒献上祈祷比赛顺利的吻作为祝福。
  # @author 黑奴队长
  - if: d.item > 0
    lines:
      - %YOU% 亲手给 %CHARA% 装上了一些「特殊装备」。
      - if: d.item === 4
        content: %CHARA% 娇俏地白了 %YOU% 一眼，将你们的小秘密隐藏在衣服之下，转身向起跑线走去……
      - if: d.item === 3
        content: %CHARA% 顺服地穿好衣服，小腹处透衣的粉光与媚眼交相辉映……
      - if: d.item === 2
        content: %CHARA% 慢慢穿好衣服，以更好地将玩具固定在自己的身上……
      - if: d.item === 1
        content: %CHARA% 偷偷抬眼看了一下 %YOU% 的表情，随后低下头去，默默忍受着刺激……