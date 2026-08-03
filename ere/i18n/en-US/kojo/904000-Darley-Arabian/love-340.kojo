# @file Darley Arabian - Romance
# @author O口口口口口
# @author Katze (translator)
49:
  title: Seeking the Goddess's Gaze
  lines:
    - Despite a fruitless search, %YOU% could still feel someone watching from the shadows.
    - It was not a hostile gaze, exactly...
    - More like the rough caress of a cat's tongue.
    - Soft and warm, yet lined with supple barbs that tickled the skin. It carried the same uncanny sense of something coiling around you and slipping behind before you even noticed.
    - Perhaps it was time to pray to the Goddess...

# Pray before the Three Goddesses for Darley Arabian to appear
pray:
  - Unable to resist, a prayer rose beneath the statues of the Three Goddesses just as it might from a %UMA%, though the plea was little more than a petulant wish that could easily go unanswered.
  - ...Was it an illusion? The Goddess's gaze, carved to stare straight into the distance, seemed to curve into a graceful arc and settle on %YOU%.
  - And ${chara.sex.toLowerCase()} laughed at the prayer.

50:
  title: The Gaze and the Hunt
  lines:
    - With lithe grace, someone climbed onto the bed.
    - Two hands came down, pinning %YOU% beneath them.
    - Emerald eyes studied their prey, deciding where to begin.
    - Was this part of the dream too...? With strange detachment, %YOU% watched a red-haired, tawny-skinned ${chara.uma_sex_title} appear in the room. Like a hunting panther, ${chara.sex.toLowerCase()} pounced on %YOU% in bed, and then came a kiss...
    - Everything after that dissolved into mist... a sweaty tangle of %YOURPHY% and ${chara.uma_sex_title} flesh...
    - acc: 1
      key: selected
      content: Defile the Goddess (Impregnate ${chara.sex === "She" ? "Her":"Him"})
      lines:
        - Dream or not, even before this mysteriously regal ${chara.uma_sex_title}, there was no reason to submit!
        - Under the ${chara.uma_sex_title}'s startled gaze, a burning heat overwhelmed %YOU%'s senses. The detached observer merged with the body being toyed with like a lamb on the bed. Clouded eyes snapped open as %YOU% seized those hands in return.
        - if: era.get('cflag:0:肤色深度') === era.get('cflag:340:肤色深度')
          content: Bodies struggled fiercely until the brown-skinned Goddess yielded beneath someone whose complexion matched ${chara.sex === "She" ? "Her":"His"} own.
        - if: era.get('cflag:0:肤色深度') !== era.get('cflag:340:肤色深度')
          content: Bodies struggled fiercely until tawny skin was overpowered by %YOURSKIN%.
    - if: era.get('cflag:0:性别') !== 1
      acc: 2
      content: Submit (%FUCKMEBUTTON%)
      lines:
        - There was no strength to resist.
        - Every part of the body knew without question that the ${chara.uma_sex_title} before it was the one in command.
        - The humiliation of a trainer being pinned by a ${chara.uma_sex_title} normally seen as a student, the way ${chara.sex.toLowerCase()} mounted the bed and stole the trainer's lips with practiced skill, the hunter's refusal to stop even now...
        - All %YOU% could do was surrender... completely...
    - acc: 3
      content: Heaven Help Me
      lines:
        - This had to be a dream.
        - Realizing that while still dreaming was strange, but what else could this vision of %YOU% watching %YOU% and ${chara.sex === "She" ? "Her":"Him"} possibly be?
        - Even if these lips could feel that softness, even if %YOURSEX% and the Goddess had stripped bare, even if your sleek bodies were entwined like snakes...
        - All that remained... was to keep praying...

after_sex_50:
  - ……
  - Ngh... Was that... another dream...?
