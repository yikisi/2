# @file Call of Mejiro - Mist Exploration Events
# @author イーウィヤ
# @author 99
# @author Katze (translator)

# Good events
g_water:
  title: Sweet Spring
  lines:
    - if: d.first === 1
      lines:
        - %YOU% and %CHARA% find what looks like a walking plaza. Pigeons stroll about; a few perch on a small stand.
        # Cautious
        - if: d.action === 0
          content: %YOU% and %CHARA% ease out from behind a building. The pigeons flap a short distance away—and the stand they crowded turns out to be a fountain-style drinking fountain.
        # Normal
        - if: d.action === 1
          content: %YOU% and %CHARA% hurry over. The pigeons flap a short distance away—and the stand they crowded turns out to be a fountain-style drinking fountain.
        # Rushed
        - if: d.action === 2
          content: %YOU% and %CHARA% rush over. The pigeons flap a short distance away—and the stand they crowded turns out to be a fountain-style drinking fountain.
        - The birds seem fine, so after a moment's thought you cup some water and drink.
    - if: d.first === 0
      lines:
        - %YOU% and %CHARA% find a familiar drinking fountain and scoop up a few sips.
    - Cool water soothes your dry throats and clears your heads. (Stamina+)

g_lost_and_found:
  title: Lost and Found
  lines:
    - if: d.first === 1
      lines:
        - You find a lost-and-found counter.
        - Cute charms, well-thumbed paperbacks, a folding umbrella with bent ribs... ordinary junk that belongs in a lost-and-found—and is just as useless.
        - So why does a points card have %YOU%'s name signed on the back?
        - After some thought, %YOU% takes the card from the pile—after all, it might have been %YOU%'s to begin with. (「Favor」+%REWARD%)
    - if: d.first === 0
      lines:
        - %YOU% finds a points card with %YOU%'s name on it at a lost-and-found. (「Favor」+%REWARD%)

g_clothe:
  title: Freshened Up
  lines:
    - if: d.first === 1
      lines:
        - %YOU% and %CHARA% pass a public restroom that looks clean enough and decide to take a breather.
        - After taking care of business, %YOU% turns on the sink and splashes cold water over %YOU%'s face.
        - The chill cuts through, and %YOU% feels a lot more clear-headed.
        - After helping the waiting %CHARA% wipe away leftover droplets, you hit the road again. (Lust-)
    - if: d.first === 0
      lines:
        - You tidy up a little in a public restroom. (Lust-)

g_chair:
  title: Shaded Bench
  lines:
    - if: d.first === 1
      lines:
        - Stepping off the bustling main street of tall buildings, you sit on a shaded park bench.
        - The light is perfect and the air under the trees is fresh. %YOU% and %CHARA% savor the quiet.
        - Sitting there, your trainee smiles at %YOU%. %YOU% decides to...
        - acc: 1
          content: Take a breather
          lines:
            - After settling in for a bit, %CHARA% stands up and offers to go buy drinks.
            - Until %CHARA% gets back, %YOU% leans into the bench and rests with eyes closed. (%YOU% Lust--)
        - acc: 1
          content: Give %CHARA% a moment alone
          lines:
            - %YOU% stands and offers to fetch drinks. On the way back, %CHARA% is already rising to meet %YOU% from several meters away.
            - After a short break you toss the empty bottles and hit the road in high spirits. (%CHARA% Lust--)
        - acc: 2
          content: Chat a while
          lines:
            - %YOU% smiles and strikes up a chat with the %SEX% beside you, and %CHARA% answers with a smile of their own.
            - Amid the laughter, you set out again almost without noticing. (Lust-)
    - if: d.first === 0
      lines:
        - You sit on a shaded bench.
        - acc: 1
          content: Take a breather
          lines:
            - While %CHARA% steps away, %YOU% rests with eyes closed. (%YOU% Lust--)
        - acc: 2
          content: Give %CHARA% a moment alone
          lines:
            - %YOU% takes a short walk around the park and leaves %CHARA% alone for a while. (%CHARA% Lust--)
        - acc: 3
          content: Chat a while
          lines:
            - You chat for a bit. (Lust-)

g_bus:
  title: Public Transit
  lines:
    - if: d.first === 1
      lines:
        - %YOU% and %CHARA% board a train that has just pulled in.
        - Luck is with you—the car is almost empty. You claim a pair of window seats.
        - As the train glides forward, %YOU% and %CHARA% sit hand in hand, watching the scenery stream past.
        - If only this calm could last a little longer, %YOU% thinks, watching the trainee's smiling profile.
        - ...Unfortunately, the ride ends after only a short stretch. (Extra advance ×1)
    - if: d.first === 0
      lines:
        - %YOU% and %CHARA% board a train and get off again soon after at the terminal. (Extra advance ×1)

g_lucky:
  title: Lucky Prize
  lines:
    - if: d.first === 1
      lines:
        - %YOU% and %CHARA% decide to linger near a convenience store.
        - Curiosity pulls %CHARA% inside, and %CHARA% comes back with a bag of snacks neither of you has seen before.
        - acc: 1
          content: Check inside the bag
          lines:
            - %YOU% thanks the trainee and carefully tears the bag open—a prize card falls out.
            - An unexpected win. Only a minor prize, but both of you feel better for it. (「Favor」+%REWARD%)
        - acc: 2
          content: Inspect the packaging
          lines:
            - The wrapper says "trial flavor," and the sharp scent snaps %YOU% wide awake. (%YOU% Stamina+)
    - if: d.first === 0
      lines:
        - You rest briefly near a convenience store. Your trainee goes in and brings back an unfamiliar bag of snacks.
        - acc: 1
          content: Check inside the bag
          lines:
            - A prize card falls out of the bag... (「Favor」+%REWARD%)
        - acc: 2
          content: Inspect the packaging
          lines:
            - The sharp scent snaps %YOU% wide awake... (%YOU% Stamina+)

# Neutral events
n_walk_through:
  title: Uneventful Passage
  lines:
    - if: d.first === 1
      lines:
        - Before entering the narrow alley, %YOU% is a little on edge.
        - Nothing happens—no sudden downpour, no tiles that kick up weird winds. You make it through the long passage safely.
        - %YOU% just ends up holding %CHARA%'s hand without thinking, and never lets go even at the exit.
    - if: d.first === 0
      lines:
        - You walk hand in hand through a narrow alley.

n_walk:
  title: Street Stroll
  lines:
    - if: d.first === 1
      lines:
        - You stroll together along a bright, clean street as passersby and travelers drift by in ones and twos.
        - %YOU% and %CHARA% enjoy the leisure of being out, leaving the shifting mood behind.
        - Keep going this way, or try another route? Before you know it, your pace has picked up.
    - if: d.first === 0
      lines:
        - You stroll together along a bright, clean street.

n_shortcut:
  title: Woodland Shortcut
  lines:
    - Beside a stretch of woods you spot a path that seems to lead straight to the next area.
    - Still, it's pretty secluded...
    - acc: 1
      content: Jog through (Stamina-, extra advance ×1)
      lines:
        - You jog as best you can to the next area.
    - acc: 2
      content: Better stick to the main road
      lines:
        - You keep going along the main road.

n_street_food:
  title: Street Food
  lines:
    - While strolling you pass a food stall. A light aroma hangs in the air.
    - Under your trainee's curious gaze, %YOU% decides to...
    - acc: 1
      content: Grab a bite (「Favor」-, Stamina+)
      lines:
        - After sampling the warm, tasty street food, you continue on your way.
    - acc: 2
      content: Maybe next time

n_arcade:
  title: Prize Draw
  lines:
    - if: d.first === 1
      lines:
        - Passing through a side street, you find a shop running a couples' prize-draw challenge.
        - Pairs of men and women crowd around a heavy-looking draw machine.
        - Your trainee tugs lightly at your sleeve...
        - acc: 1
          content: Give it a try (「Favor」+, Stamina-)
          lines:
            - Hand in hand, you both yank the lever. A ball marked with prize info drops out.
            - Your wrists ache, but the haul is real. You leave a little lighter. (「Favor」+%REWARD%)
        - acc: 2
          content: Better not
          lines:
            - A hint of disappointment shows, but %CHARA% accepts %YOU%'s call.
            - You leave together.
    - if: d.first === 0
      lines:
        - Passing through a side street, you find a shop running a couples' prize draw...
        - acc: 1
          content: Let's do it (「Favor」+, Stamina-)
          lines:
            - Your wrists ache, but the haul is real. You leave smiling. (「Favor」+%REWARD%)
        - acc: 2
          content: Better not

n_promotion:
  title: Store Promo
  lines:
    - if: d.first === 1
      lines:
        - At a street corner, a low-key boutique catches your eye.
        - A clerk enthusiastically invites %CHARA% to try on clothes for a fee—but the outfit is downright suggestive.
        - You exchange a look...
        - acc: 1
          content: Why not try it? (「Favor」+, %YOU% Lust+, %CHARA% Lust+)
          lines:
            - In the outfit, %CHARA% shyly shows off for %YOU%, and %YOU%'s breathing grows a little uneven.
            - Afterward the shop keeps a copy of the try-on photos for the two of you as a memento... (「Favor」+%REWARD%)
        - acc: 2
          content: Better pass
          lines:
            - After thinking it over, you both back out.
            - You leave the boutique.
    - if: d.first === 0
      lines:
        - At a street corner, a boutique offering paid try-ons catches your eye...
        - acc: 1
          content: Why not try it? (「Favor」+, %YOU% Lust+, %CHARA% Lust+)
          lines:
            - The clothes are so suggestive that both of you start breathing harder... (「Favor」+%REWARD%)
        - acc: 2
          content: Better pass

# Bad events
b_pet_anal:
  title: Touched From Behind
  lines:
    # [Normal]-[Uneasy]
    - You pass an unmanned little stall.
    - While %YOU% digs for anything useful, someone suddenly touches %YOU%'s butt.
    - %YOU% turns—only to find %CHARA% calmly inspecting something beside the stall.
    - acc: 1
      content: Pay it back
      lines:
        - %YOU% decides to return the favor and touch %SEX%'s butt too.
        - Laughing, you leave the stall together. (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Let it slide
      lines:
        - %YOU% decides to pretend nothing happened.
        - %YOU% and a giggling %CHARA% leave the stall one after the other. (%CHARA% Lust++)

b_hug:
  title: Unexpected Embrace
  lines:
    # [Normal]-[Uneasy]
    - Before entering the narrow, dim alley, %YOU% worries something unexpected might go wrong.
    - Against that hope, a tile suddenly pops up and trips %CHARA%, who tumbles straight toward %YOU%.
    - By the time you come to your senses, the soft, sweet %TEEN% is in your arms, a shy face inches away...
    - acc: 1
      content: Trace %SEX%'s body
      lines:
        - %YOU%'s fingers glide of their own accord along the trainee's slender back, and the %TEEN% in your arms lets out a shy little gasp.
        - You hold each other for a long time before letting go, and %YOU% still wants more... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Help %SEX% up at once
      lines:
        - %YOU% immediately helps %CHARA% up. %CHARA% only manages a shy smile and a hesitant nod.
        - After that harmless little interlude, you leave the alley hand in hand. (%CHARA% Lust++)

b_pet_leg:
  title: Thigh Tease
  lines:
    # [Normal]-[Uneasy]
    - %YOU% and %CHARA% sit side by side on a street-side bench, firm thighs pressed close against %YOU%.
    - Those lovely legs sway lazily on the bench...
    - acc: 1
      content: Reach out
      lines:
        - %YOU% reaches for those familiar, all-the-more-tempting legs, and %CHARA% only bumps %YOU%'s shoulder shyly.
        - Only when %YOU% is satisfied does a flushed %CHARA% tug you back onto the road. (%YOU% Lust+, %CHARA% Lust++)
    - acc: 2
      content: Hold back
      lines:
        - %YOU% resists the urge to touch. %CHARA% looks at you, half puzzled, half disappointed.
        - After sitting a while, you move on again. (%CHARA% Lust++)

b_movie:
  title: Street Screening
  lines:
    # [Normal]-[Uneasy]
    - You pass a wall-mounted screen looping a classic scene from a romance film.
    - %CHARA% links arms with %YOU% and, copying the heroine, slowly leans toward your cheek...
    - acc: 1
      content: Let the %SEX% kiss you
      lines:
        - A soft kiss lands on your cheek, and %YOU%'s heart picks up speed under %CHARA%'s smile. (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Ease away for now
      lines:
        - %YOU% leans just slightly out of %CHARA%'s reach, and the two of you simply watch the film clip for a while. (%CHARA% Lust++)

b_cafe:
  title: Cafe
  lines:
    # [Uneasy]
    - You pass an open-air cafe where faceless couples kiss at their tables as if no one else exists.
    - %CHARA% gives %YOU%'s hand a light tug. %YOU% gets the hint.
    - acc: 1
      content: Kiss
      lines:
        - %YOU% and %CHARA% share a long kiss. (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Play dumb
      lines:
        - Looking disappointed, %CHARA% follows %YOU% away from the cafe. (%CHARA% Lust++)

b_lucky_sukebe:
  title: Accidental Grope?
  lines:
    # [Uneasy]
    - Maybe a tile sprang up without warning—or a wicked gust out of clear weather was to blame.
    - Either way, walking down the street, %YOU% slips and pitches toward %CHARA%...
    - acc: 1
      content: Shut your eyes
      lines:
        - With a startled cry, %YOU% falls into something soft. Opening your eyes reveals a buried faceful of chest—and %CHARA%'s shy expression.
        - Putting on a show of being put out, %CHARA% playfully shoves and tussles with %YOU% for a while before you move on. (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Warn %CHARA%
      lines:
        - %YOU% calls out just in time. Contact with a sensitive spot is inevitable, but %CHARA% still catches %YOU% cleanly.
        - Afterward a pink-cheeked %CHARA% insists on supporting %YOU% for quite a stretch. (%CHARA% Lust++)

b_rain:
  title: Sudden Rain
  lines:
    # [Uneasy]
    - A sudden downpour traps %YOU% and %CHARA% in a side alley and soaks you both through.
    - When you come to your senses, your hands feel the soft, wet press of %CHARA%'s chest, and your partner's flushed face is right there through clingy clothes...
    - acc: 1
      content: Hold the %SEX% close
      lines:
        - %YOU% teases the lover in your arms, and %CHARA% melts into a deep kiss.
        - Outside, the "rain" has long since stopped—but the two of you in the alley don't pull apart for a long time... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Put some space between you
      lines:
        - Tempting as the alluring %SEX% is, %YOU% holds back.
        - The suspicious "rain" doesn't last long, and you leave the alley in a hurry. (%CHARA% Lust++)

b_ero_item:
  title: Vibrating Toy
  lines:
    # [Uneasy]-[Chaos]
    - if: d.first === 1
      lines:
        - At a street event you receive a suspicious freebie. Now a pair of mini remote vibrators sits in %YOU%'s hands.
        - While %YOU% is still at a loss, %CHARA% pretends to look elsewhere—while fingers on a collar quietly lift the hem.
    - if: d.first === 0
      lines:
        - %YOU% glances at the phone and finds the "mini vibe" battery has topped up at some point...
    - acc: 1
      content: Follow %CHARA%'s lead
      lines:
        - With %CHARA%'s silent go-ahead, %YOU% slips the toy into the %SEX%'s bra and taps the remote on the phone.
        - What follows is a dangerous, forbidden walking game that lasts until the toy dies out under %CHARA%'s hushed gasps... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Tease a little
      lines:
        - Relenting, %YOU% and %CHARA% duck into a street corner and use the toy over clothes to take the edge off the %SEX%'s "mood."
        - The little motor dies quickly—but %CHARA% still doesn't look satisfied... (%CHARA% Lust++)

b_advance:
  title: Unprompted Tease
  lines:
    # [Uneasy]-[Chaos]
    - %YOU% and your trainee are passing a street corner.
    - While %YOU% advances carefully, a hand suddenly slips under your clothes and creeps toward the space between your legs.
    - You don't need to look to know the expression on the heat-addled %TEEN% beside you—or the one on your own fraying face...
    - acc: 1
      content: Teach the %SEX% a lesson
      lines:
        - %YOU% pulls %CHARA%'s wandering hand away and, without mercy, yanks down %CHARA%'s loose bottoms.
        - Skin brushes skin, and %CHARA% lets out a filthy plea... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Push the %SEX% away
      lines:
        - Fighting the urge to take it out on %CHARA%, %YOU% shoves the %SEX% away hard.
        - %YOU% pulls the %SEX% onward... (%CHARA% Lust++)

b_blow_job:
  title: Outdoor Service
  lines:
    # [Uneasy]-[Chaos]
    - You pass an open-air screening looping a couple's animalistic sex scene.
    - Copying the woman on screen, %CHARA% sinks down and, eyes hazy, slowly pulls open %YOU%'s clothes below...
    - acc: 1
      content: Let %CHARA% serve you
      lines:
        - You sit in the screening area. %CHARA% leans in obediently, fingers gently stroking between %YOU%'s legs.
        - Touching %CHARA%self the whole time, %CHARA% works %YOU% by hand until both of you are spent... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Ease away for now
      lines:
        - %YOU% somehow manages to pull %CHARA% up, and leaves once the %SEX% has cooled off a little. (%CHARA% Lust++)

b_anal_item:
  title: Anal Toy
  lines:
    # [Uneasy]-[Chaos]
    - if: d.first === 1
      lines:
        - At a street event you receive a suspicious freebie. Now a metal-gleaming butt plug rests in %YOU%'s hand.
        - While %YOU% is still at a loss, %CHARA% looks away with flushed cheeks—fingers fretting at the hem of the clothes.
    - if: d.first === 0
      lines:
        - %YOU% glances at %CHARA% and catches the %SEX% sneaking a hand into the bag that holds the anal toy left in the %SEX%'s care.
    - acc: 1
      content: Follow %CHARA%'s lead
      lines:
        - Reading %CHARA%'s silent consent, %YOU% peels off the %SEX%'s underwear and, amid the %TEEN%'s moans, seats the cold plug deep in the %SEX%'s rear.
        - After that, the stroll continues bare underneath and stuffed full—until %CHARA% can no longer hold back the rush and the gasps... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Tease a little
      lines:
        - Relenting, %YOU% steers %CHARA% into a side alley and uses the toy for some rear "self-help" to restore the %SEX%'s "composure."
        - A while later %YOU% leads a short-breathed %CHARA% back out—but a flat climax clearly wasn't enough for the %SEX%... (%CHARA% Lust++)

b_foot_job:
  title: Secret Game
  lines:
    # [Uneasy]-[Chaos]
    - You decide to rest a bit, and an outdoor seating area of a restaurant happens to be nearby.
    - You claim an empty table among the paired-off couples. Before long, something soft brushes and plays between %YOU%'s legs.
    - Looking down, you find %CHARA% has kicked off shoes and is using those pretty feet under the table to toy with %YOU%'s sensitive spots, eyes full of heat.
    - acc: 1
      content: Follow %CHARA%'s lead
      lines:
        - %YOU% quietly loosens the clothes below and lets %CHARA%'s toes play between your legs. While going deeper, %CHARA% also reaches for personal pleasure.
        - The couples around you are lost in their own public affection, and the two of you reach climax together in your secret game... (%YOU% Lust++, %CHARA% Lust+)
    - acc: 2
      content: Ignore it
      lines:
        - Keeping a grip, %YOU% only catches those lovely legs for a brief caress—but the desire in %CHARA%'s eyes only burns hotter... (%CHARA% Lust++)
