# @file 桐生院葵 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
intro:
  # H_NAME = ハッピーミーク
  - %CHARA% は %YOU% に、担当の%H_UMA% %H_NAME% がいること、素質はかなり良く、まもなく育成が始まることを教えてくれた。
  - よければ、しばらく%H_SEX%のトレーニングを手伝ってみないか。経験にもなるはずだ、とのことだった。

recruit:
  title: 成果
  lines:
    - %H_NAME% がG1を制したあと、%CHARA% は %YOU% を訪ね、素晴らしい成果だ、と称えた。
    - %H_NAME% だけでなく、もっと多くの%H_UMA%の勝利と願いを叶えるため、これからも一緒に力を尽くしたい、と。

recruit_hentai:
  title: 「成果」
  lines:
    - %H_NAME% の育成が終わったあと、%CHARA% は %YOU% を訪ねてきた。
    - if: d.meek_pregnant
      lines:
        - %CHARA% は、%YOU% が %H_NAME% を穢したことに激しく憤った。
        - だが、事ここに至っては、%H_NAME% のためにも事実を受け入れるしかない。
        - それでも、%YOU% を許すつもりはない。
    - if: '!d.meek_pregnant && d.meek_love'
      lines:
        - %H_TEEN%の気持ちを欺いた %YOU% を、きっぱり責めた。
        - けれど、%H_NAME% がこれからも %YOU% と一緒にいたいと言うのなら、彼女にももう何も言えない。
        - ただ、%YOU% が %H_NAME% に申し訳ないことをしないよう、これからも目を光らせる。
    - if: '!d.meek_pregnant && !d.meek_love'
      lines:
        - まともな成績は残せなかったが、この三年で %YOU% は鍛えられた——%CHARA% は真顔でそう言った。
        - だから、%YOU% が一人前のトレーナーになるその日まで、これからも力を貸す、と。
        - 言い終えると、%CHARA% は人のいない隙を見て、%YOU% の頬にそっと口づけを残した。
