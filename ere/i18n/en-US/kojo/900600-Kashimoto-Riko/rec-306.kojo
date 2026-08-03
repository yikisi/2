# @file Kashimoto Riko - Recruitment
# @author 黑奴队长（临时）
# @author Katze (translator)
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - %CHARA% shared some training advice with %YOU% and emphasized the importance of health management.
      - For practical experience, %CHARA% explained that ${chara.sex === "She" ? "Her":"His"} team had two gifted %B_UMA%, and %YOU% could begin by helping train %B_SEX%.
  - if: era.get('flag:当前声望') >= 500
    lines:
      - %CHARA% praised %YOU%'s skill as a trainer.
      - If %YOU% had the energy to spare, ${chara.sex.toLowerCase()} hoped %YOU% would help train two gifted %B_UMA% about to begin their careers.

task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = Bitter Glasse
      # L_NAME = Little Cocon
      - Through %CHARA%'s introduction, %YOU% met %B_NAME% and %L_NAME%.
      - With %CHARA%'s hopes resting on them, %YOU% and the two %B_SEX% began their three-year journey...
      - (Lead %B_SEX% to as many graded race victories as possible...)
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - Time passed, and %YOU%, %B_NAME%, and %L_NAME% once again stood together on the same turf.
      - Could %YOU% fulfill %B_SEX% dreams this time?

recruit:
  title: Results
  lines:
    - After %B_NAME% and %L_NAME% both achieved respectable results, %CHARA% found %YOU% and praised %YOU%'s achievements.
    - %CHRA% invited %YOU% to form a team and carry ${chara.sex === "She" ? "Her":"His"} management-first philosophy forward.

recruit_hentai:
  title: 「Results」
  lines:
    - After %B_NAME% and %L_NAME%'s training careers ended, %CHARA% came to see %YOU%.
    - if: era.get('love:306') >= 75
      lines:
        - %CHARA% said that although %YOU% had achieved little of note, there was still clear promise. Therefore...
        - %CHARA% suddenly faltered. Face bright red, ${chara.sex.toLowerCase()} haltingly invited %YOU% to join ${chara.sex === "She" ? "Her":"His"} team, advance the management-first philosophy, and also...
        - Only after %YOU% agreed did %CHARA% say goodbye, still blushing.
        - As %CHARA% left the training room, voices outside reminded %YOU% of two familiar %B_UMA% once cheering ${chara.sex === "She" ? "Her":"Him"} on.
    - if: era.get('love:306') < 75 && (d.glasse_hentai || d.cocon_hentai)
      lines:
        - if: d.glasse_hentai && d.cocon_hentai
          content: %CHARA% said ${chara.sex.toLowerCase()} would never forgive what %YOU% had done to them.
        - if: d.glasse_hentai && !d.cocon_hentai
          content: %CHARA% said ${chara.sex.toLowerCase()} would never forgive what %YOU% had done to %B_NAME%.
        - if: '!d.glasse_hentai && d.cocon_hentai'
          content: %CHARA% said ${chara.sex.toLowerCase()} would never forgive what %YOU% had done to %L_NAME%.
        - As acting chair, ${chara.sex === "She" ? "Her":"His"} punishment of %YOU% was only the beginning.
        - To protect the trainees %YOU% had abused, the acting chair was willing to take the risk personally.
