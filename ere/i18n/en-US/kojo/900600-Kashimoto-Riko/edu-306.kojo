# @file Kashimoto Riko - Training
# @author 黑奴队长（临时）
# @author Katze (translator)

# Welcome event triggered by not visiting the trainer's office during the first month
welcome:
  title: Welcome
  lines:
    - One day, %YOU% found someone waiting outside the training room.
    - Recognizing the academy's acting chair, %CHARA%, %YOU% hurried to greet her.
    - In a courteous yet formal tone, %CHARA% acknowledged that a new trainer might be busy, but said colleagues at the academy should still get to know one another.
    - She told %YOU% that the nearby trainer's office was shared by all trainers. %YOU% was welcome to use it, though continuing to work in the training room was also fine.
    - content:
        - If %YOU% had anything else to discuss, she could be found in the trainer's office. Whenever the
        - isBlank: 1
        - color: '#ffad7e'
          content: Chair
          fontWeight: bold
        - isBlank: 1
        - was away on business and she was filling in, one could speak to
        - isBlank: 1
        - color: '#6e7ea2'
          content: Trainer Kiryuin
          fontWeight: bold
        - isBlank: 1
        - in the trainer's office, or visit her in the chair's office.
    - With that, %CHARA% left. %YOU% sensed a faint undercurrent of displeasure from the acting chair.

task_fail:
  title: Failure
  lines:
    - %B_NAME% and %L_NAME%'s training careers came to an end.
    - %CHARA% did not raise her voice at %YOU%.
    - After comforting both trainees, she walked silently through the academy with %YOU%.
    - if: era.get('cflag:202:育成次数') === 1
      lines:
        - Only as they approached the trainer's office did she quietly ask whether %YOU% had truly given it everything.
        - Without waiting for %YOU% to respond, she walked straight into the office.
        - Left standing there, %YOU% recalled the academy rumor about a %B_UMA% receiving a second chance.
    - if: era.get('cflag:202:育成次数') > 1
      lines:
        - Only as they approached the trainer's office did she quietly ask whether %YOU% had the courage to try again.
