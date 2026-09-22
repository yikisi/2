# @file 㭴本理子 - 招募
# @author 黑奴队长（临时）
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - %CHARA% 向 %YOU% 介绍了一些训练的心得，并强调了健康管理的重要性。
      - 实操方面，%CHARA% 表示她团队里有两名天赋不错的 %B_UMA%，%YOU% 可以从辅助%B_SEX%们的训练开始。
  - if: era.get('flag:当前声望') >= 500
    lines:
      - %CHARA% 赞许了 %YOU%作为训练员的能力。
      - 如果 %YOU% 有精力的话，她希望 %YOU% 能帮忙训练两个即将开始育成的天赋不错的%B_UMA%。

task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = 苦涩糖霜
      # L_NAME = 小小蚕茧
      - 在 %CHARA% 的引荐下，%YOU% 结识了 %B_NAME% 与 %L_NAME%。
      - 背负着 %CHARA% 的期许，%YOU% 与%B_SEX%们的三年开始了……
      - （带领%B_SEX%们多多地取得重赏胜利吧……）
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - 光阴荏苒，%YOU% 与 %B_NAME%、%L_NAME% 再次站到了同一片草场。
      - 不知这次 %YOU% 是否能够让%B_SEX%们得偿所愿？

recruit:
  title: 成果
  lines:
    - %B_NAME% 和 %L_NAME% 都取得一定的成绩后，%CHARA% 找到 %YOU%，称赞 %YOU% 取得的成果。
    - %CHARA% 邀请 %YOU% 共同组成一个团队，把她的管理主义理念继续发扬下去。

recruit_hentai:
  title: 「成果」
  lines:
    - %B_NAME% 和 %L_NAME% 的育成结束后，%CHARA% 找到了 %YOU%。
    - if: era.get('love:306') >= 75
      lines:
        - %CHARA% 表示 %YOU% 虽然没有取得什么像样的成绩，但也证明了潜力，所以……
        - %CHARA% 突然卡壳了，憋红了脸，才吞吞吐吐地邀请 %YOU% 加入她的团队，把管理主义理念继续发扬光大，同时……
        - 在 %YOU% 答应以后，%CHARA% 才红着脸道别。
        - 在 %CHARA% 离开训练室时，从外面传来的说话声让 %YOU% 联想到了之前意外看到的两只熟悉的%B_UMA%向她加油打气的场景。
    - if: era.get('love:306') < 75 && (d.glasse_hentai || d.cocon_hentai)
      lines:
        - if: d.glasse_hentai && d.cocon_hentai
          content: %CHARA% 表示不会原谅 %YOU% 对她们的所作所为。
        - if: d.glasse_hentai && !d.cocon_hentai
          content: %CHARA% 表示不会原谅 %YOU% 对 %B_NAME% 的所作所为。
        - if: '!d.glasse_hentai && d.cocon_hentai'
          content: %CHARA% 表示不会原谅 %YOU% 对 %L_NAME% 的所作所为。
        - 她作为代理理事长，对 %YOU% 做出的处罚只是一个开始。
        - 为保护被 %YOU% 欺辱的担当，她不惜以身犯险。
