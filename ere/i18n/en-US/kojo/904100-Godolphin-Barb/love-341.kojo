# @file Godolphin Barb - Romance
# @author フィンランド
# @author Katze (translator)
49:
  title: Waters of Blessing
  lines:
    - The statues of the Three Goddesses stood in silence, their stone eyes fixed on the horizon as always.
    - From the vessels on their shoulders, water cascaded into the pool at their feet.
    - acc: 1
      content: 「If the water from those vessels carries the Goddesses' grace, perhaps some of it might reach me...」
    - %YOU% closed their eyes and prayed before the statues.
    - By coincidence, perhaps, a single droplet leapt from the cascade and landed on %YOU%'s shoe.

# Pray before the Three Goddesses for Godolphin Barb to appear
pray:
  - The instant the prayer began, or perhaps the instant that wish rose from the heart...
  - The world fell silent, leaving only the gentle murmur of water from the vessels.
  - %YOU% closed their eyes and let the soothing warmth envelop them, as comforting as someone's embrace.

50:
  title: Visitor in a Dream
  lines:
    - (Click.)
    - Though there was no door, a latch turned. Then a familiar face came into view.
    - A gentle smile, long aqua hair, and... beneath the draped cloth, glimpses of a body as beautiful as any sculpture.
    - The Goddess who appeared in the dream offered neither divine majesty nor miracles. Instead, she sat gently beside %YOU%, leaned down, and pressed her lips to %YOU%'s.
    - if: era.get('cflag:0:性别') === 1
      content: Her fingers slipped between %YOU%'s legs, wrapped around the rigid cock, and began to stroke it gently...
    - if: era.get('cflag:0:性别') !== 1
      content: Her fingers slipped between %YOU%'s legs and entered the warm, slick depths within...
    - acc: 1
      key: selected
      content: Follow Your Instincts (Impregnate the Goddess)
      lines:
        - if: era.get('cflag:0:性别') > 0
          lines:
            - Lips and hands alone could no longer satisfy %YOU%'s swelling desire.
            - Driven by instinct beneath the Goddess's silent gaze, %YOU% seized her wrists and roughly forced her down.
            - She neither struggled nor resisted, simply yielding to %YOU%'s touch. Cloth slipped from her pale body with a faint rustle, soon drowned beneath %YOU%'s bestial panting...
        - if: "!era.get('cflag:0:性别')"
          lines:
            - The instant that thought flashed through the mind, something changed.
            - Was it the dream, or a trick of the Goddess?
            - A foreign organ had sprouted between %YOU%'s legs. Beside the alluring Goddess ahead, however, it hardly seemed to matter.
            - %YOU% seized the Goddess's wrists and pinned her down.
            - She neither struggled nor resisted, simply yielding to %YOU%'s touch and even guiding %YOU% in the use of the unfamiliar cock...
    - if: era.get('cflag:0:性别') !== 1
      acc: 2
      content: Submit to Divine Will (%FUCKMEBUTTON%)
      lines:
        - Amid the haze and rising lust, %YOU% slowly lost all sense of self.
        - Empty the mind. Let every limb relax. That was all it took.
        - Offer body, heart, and soul to the Goddess.
        - The Goddess's garments slipped away, whispering sweetly against her skin.
        - %YOU% closed their eyes, ready to give the Goddess everything.
    - acc: 3
      content: Heaven Preserve Me
      lines:
        - Heaven preserve me! What blasphemy!
        - Even in the face of such ecstasy, %YOU%'s faith triumphed over lust.
        - Trembling, %YOU% raised one hand, too flustered to tell left from right.
        - Forehead, chest, left shoulder, then right...
        - The sign of the cross was made again and again...
