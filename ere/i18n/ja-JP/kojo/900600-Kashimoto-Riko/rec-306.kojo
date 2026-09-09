# @file 樫本理子 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - %CHARA% は %YOU% に、トレーニングの心構えをいくつか伝え、健康管理の大切さを強調した。
      - 実践については、自分のチームに素質の良い %B_UMA% が二頭いるので、%B_SEX%たちのトレーニングの手伝いから入ればいい、とのことだった。
  - if: era.get('flag:当前声望') >= 500
    lines:
      - %CHARA% は、トレーナーとしての %YOU% の腕を認めた。
      - 気力に余裕があるなら、これから育成が始まる、素質の良い%B_UMA%二頭のトレーニングを手伝ってほしい、と。

task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = ビターグラッセ
      # L_NAME = リトルココーン
      - %CHARA% の紹介で、%YOU% は %B_NAME% と %L_NAME% に会った。
      - %CHARA% の期待を背負い、%YOU% と%B_SEX%たちの三年が始まった……
      - （%B_SEX%たちを率いて、重賞をたくさん勝とう……）
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - 月日が流れ、%YOU% は %B_NAME%、%L_NAME% と、再び同じ芝の上に立った。
      - 今度こそ、%B_SEX%たちの願いを叶えられるだろうか。

recruit:
  title: 成果
  lines:
    - %B_NAME% と %L_NAME% がそれぞれ一定の成績を残したあと、%CHARA% は %YOU% を訪ね、その成果を称えた。
    - %CHARA% は %YOU% に、チームを組んで、彼女の管理主義をこれからも広げていきたい、と誘った。

recruit_hentai:
  title: 「成果」
  lines:
    - %B_NAME% と %L_NAME% の育成が終わったあと、%CHARA% は %YOU% を訪ねてきた。
    - if: era.get('love:306') >= 75
      lines:
        - 目立った成績は残せなかったが、素質は示せた。だから……と %CHARA% は言った。
        - %CHARA% は急に言葉が詰まり、顔を赤くして、しどろもどろに %YOU% をチームへ招いた。管理主義をさらに広げるために、それに……
        - %YOU% が引き受けてから、%CHARA% は顔を赤らめたまま別れを告げた。
        - トレ室を出ていく %CHARA% の後ろから聞こえた声に、%YOU% は以前、図らずも目にした光景を思い出した。見知った%B_UMA%二人が、彼女に声援を送っていたあの場面だ。
    - if: era.get('love:306') < 75 && (d.glasse_hentai || d.cocon_hentai)
      lines:
        - if: d.glasse_hentai && d.cocon_hentai
          content: %CHARA% は、%YOU% が彼女たちにしたことを許さない、と言った。
        - if: d.glasse_hentai && !d.cocon_hentai
          content: %CHARA% は、%YOU% が %B_NAME% にしたことを許さない、と言った。
        - if: '!d.glasse_hentai && d.cocon_hentai'
          content: %CHARA% は、%YOU% が %L_NAME% にしたことを許さない、と言った。
        - 代理理事長として %YOU% に下す処分は、まだ始まりにすぎない。
        - %YOU% に辱められた担当を守るためなら、自ら危うきに身を投じてでも、と。
