# @file メジロブライト - 調教
# @author KUN
join_3p:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あら…… %CALLNAME%と…… %CALL_LOVER%、ですの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私も、こうしてほしかったのですわ……」
  - %CHARA%はしょんぼりと %YOU% と %LOVER% の前に立ち、不安そうに指先をいじっている。
  - 服越しでも、交差した両脚が擦れ合う動きと、かすかな水音がわかる。
  - acc: 1
    key: accept
    content: 「じゃあ、一緒にしよう」
  - acc: 2
    content: 「今回は…… ちょっと無理だな」

join_3p_accept:
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「私は構わないわよ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あら、ありがとうございますわ！」
  - %YOU% の空いているほうの手をしっかり握り、上半身を肩に寄せる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「それでは…… ご一緒に、いたしましょう❤」

join_3p_force:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だめ…… ですの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おとなしく、待っていますわ……」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「ブライトなら、大丈夫よ」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「%L_CALLNAME%も、異論はないわよね？」
  - 口ではおとなしく聞いているのに、両手に妙な力が入り始めている。
  - こうなると、%YOU% にも %LOVER% の気持ちがわかる。
  - %CHARA%は深く息を吸い、歩み寄って %YOU% の掴まれた腕をほどく。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「それでは、ご一緒に参りましょう～」

join_3p_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だめ…… ですの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おとなしく、待っていますわ……」
  - 両手をそっと重ね、少し遠慮がちに一礼すると、寂しげな後ろ姿で去っていく。
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「あとで、ちゃんと埋め合わせするわよね？」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「でないと…… 怒っちゃうわよ」
