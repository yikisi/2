# @file Silence Suzuka - Career
# @author 牛蛙煲
# @author Katze (translator)
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Right. %CALLNAME%, let's get started as soon as possible.」
  - %CHARA% nods toward %YOU%, indicating that everything is in order and training can begin anytime.

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Today's form is feeling wonderful as well.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, did my times improve?」
        - %YOU% flashes %CHARA% an appreciative thumbs-up.
        - %CHARA% breaks into a bright, happy smile.

train_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Ouch!」
  - Spotting Suzuka suddenly stumble and fall in the distance, %YOU% dashes over in a panic to help her back up.
  - acc: 1
    content: 「Suzuka, how does it feel? Are you hurting anywhere in particular?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Nothing hurts terribly... My body just feels stiff, and my legs are heavy...」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「But I'm definitely not injured! I can keep going with the drills... ngh!」
  - Looking at her stubborn determination even as her knees buckle beneath her, %YOU% lets out a heavy sigh.
  - acc: 1
    content: 「I'm sorry, Suzuka. I shouldn't have pushed you so hard today. Let's head to the infirmary right now.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「It's fine, %CALLNAME%, really! I can keep running, just let me—」
  - acc: 1
    content: 「If something permanently happened to you, I'd never forgive myself for the rest of my life.」
  - Seeing the unyielding concern in %YOU%'s eyes, Suzuka drops her arguments, keeping her head low as %YOU% gently supports her all the way to the infirmary.

train_additional:
  - acc: 1
    content: 「All right, Suzuka, that's enough for today. Time to call it.」
  - %YOU% twirls the stopwatch in hand, calling out to Suzuka as she coasts in from her latest repetition.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Wait... is it that late already?」
  - Watching her look of surprised disappointment, %YOU% smiles with fond helplessness.
  - acc: 1
    content: 「Yes, it's that late. Please head back and get a good night's rest.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Um... %CALLNAME%?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「I haven't quite run my fill yet. Could you let me do just one more lap? Just one!」
  - Looking at %CHARA%'s pleading, puppy-dog gaze, %YOU% decides to—
  - acc: 1
    key: train
    content: 「All right, just one more lap.」
    lines:
      - Receiving %YOU%'s blessing, Suzuka lets out a quiet cheer of delight.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Thank you, %CALLNAME%! Here I go~!」
      - %YOU% gazes out into the dusk, watching her streak across the turf like a blazing shooting star.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Aww, that flew by before I even had time to feel it... Just one more, please?」
      - ......
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「The sun hasn't completely dipped below the horizon yet... There's still time for another lap...」
      - ......
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「This one is really, truly the last one, %CALLNAME%...」
      - ......
      - After repeating the cycle again and again, when Suzuka attempts to pitch another lap, %YOU% simply points up at the bright moon shining in the night sky.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Eeeh?! I... I didn't notice the time at all...」
      - %YOU% stares at her with a knowing, silent smirk.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「U-Um, please stop staring at me like that! I'll head back and rest right now, so please don't look at me that way...」
      - Flustered by %YOU%'s teasing gaze, Suzuka blushes softly, finally surrendering her craving for another lap.
  - acc: 2
    content: 「Your dorm leader is going to be furious with you.」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Ngh... but I haven't run enough yet...」
      - %YOU% watches her ears droop flat in sorrow only to perk back up with hope, looking utterly adorable.
      - acc: 1
        content: 「Resting today is what gives you the stamina to run even harder tomorrow.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Okay, %CALLNAME%... I'll go get some proper rest.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Still, I want to run... Maybe I can jog all the way back to the dorms, even if it's a short run...」

race_start:
  - random: true
    lines:
      - Before the race gets underway, %YOU% drops by Suzuka's waiting room to cheer her on.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「I'm feeling in peak condition. I almost wish the bell would ring right now, hehe.」
  - random: true
    lines:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Keep your eyes on me, %CALLNAME%. I'll reach that wire before anyone else can even come close.」

race_end:
  - if: d.rank === 1
    lines:
      - Having secured victory, Suzuka opens her arms wide to the breeze, drinking in the euphoria of triumph.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Once again... I got to see that singular, untouchable view...」
  - if: d.rank > 1 && d.rank <= 5
    lines:
      - %YOU% notices Suzuka standing off to the side, lost in quiet, wistful contemplation.
      - 「She must be brooding over the result... Still, finishing on the board against a field of this caliber is no small feat.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Still, %CALLNAME%... I want the open horizon in front all to myself...」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Next time, I won't let anyone get ahead of me...」
      - Clasping her hands tight, Suzuka whispers the promise under her breath.
      - 「I believe in you, Suzuka. Next time, you'll be miles ahead.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Yes, absolutely!」
      - Suzuka pumps a small fist toward %YOU%, her resolve burning bright.
  - if: d.rank > 5
    lines:
      - Suzuka stares blankly at the results board, where her name is nowhere near the top.
      - A crushing, undeniable defeat.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Why...」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Was I still not determined enough...?」
      - acc: 1
        content: 「Suzuka, remember this feeling.」
      - Hearing %YOU%'s steady voice, Suzuka gives a small shudder.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%...」
      - acc: 1
        content: 「Next time, you'll run better than ever.」
      - At those comforting words, the storm in Suzuka's heart begins to settle.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Right... Next time... I will definitely win.」

begin_race_win:
  title: Breaking Away
  lines:
    - Under %YOU%'s attentive guidance, %CHARA% storms to an uncontested victory in her Debut race.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Did you see, %CALLNAME%? I held that open view in front right in my hands the entire way.」
    - acc: 1
      content: 「You were magnificent, Suzuka. You streaked across that turf like a comet.」
    - Welcoming the victorious %CHARA% back from the paddock, %YOU% praises her from the bottom of %YOU%'s heart.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Still, while I was running, I couldn't shake the feeling that even more breathtaking vistas are waiting for me further down the road...」
    - %CHARA% gazes out over the empty track after the crowds begin to thin, yearning in her eyes.
    - acc: 1
      content: 「Then let's take this debut as our starting line and push all the way to the horizon together!」
    - %CHARA% blinks in brief surprise before turning to %YOU% with a radiant smile.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Yes! Let's reach it together, %CALLNAME%!」

begin_race_lose:
  title: Chasing the Pack
  lines:
    - content:
        - fontWeight: bold
          content: Announcer
        - 「What a heartbreaking finish for %CHARA%, narrowly missing out on the debut prize right at the wire!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「......」
    - %CHARA% looks thoroughly dejected.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm so sorry, %CALLNAME%... I let your faith down...」
    - With mixed feelings of sympathy, %YOU% gently claps a hand on %CHARA%'s shoulder.
    - acc: 1
      content: 「One stumble doesn't define you, Suzuka. There are countless open horizons waiting for you ahead.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「You're right... I can't let my feet stop here...」
    - Seeing the fighting spirit rekindle in %CHARA%'s eyes, %YOU% smiles with genuine relief.

begin_race_miss:
  title: Absent
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Um, %CALLNAME%... I still can't quite understand why we scratched. We had planned everything so carefully...」
    - Weighing unseen risks and conditioning variables, %YOU% held %CHARA% back from last week's Debut race.
    - 「Well, Suzuka, I just felt something wasn't quite aligned yet. To make sure your starting line is as perfect as possible, we had to...」
    - Wiping away a bead of nervous sweat, %YOU% explains the reasoning to %CHARA% with utmost care.
    - %CHARA% furrows her brow and nods slowly, seemingly accepting the explanation for the time being.

new_year_classical:
  - %YOU% sits idly in the office, occasionally glancing up at the wall clock.
  - acc: 1
    content: 「She's quite late... Did something unexpected happen?」
  - Today marks the very first New Year %YOU% and %CHARA% are spending together, and you had agreed to meet in the office to celebrate.
  - Yet the appointed time has long since passed, and %CHARA% is nowhere to be seen...
  - %YOU% grabs a coat, preparing to search the campus for %CHARA%.
  - Suddenly, the office door slides open, letting in a gust of crisp winter air.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「I'm... so sorry, %CALLNAME%... I was... running, and I completely lost track of time...」
  - %YOU% helps the gasping %CHARA% slip out of her heavy jacket, both touched and amused by her confession.
  - acc: 1
    content: 「Suzuka, your dedication is admirable, but this is New Year's Day. You're supposed to be resting.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Ugh... I promise I will, %CALLNAME%.」
  - %YOU% breathes a quiet sigh of relief.
  - acc: 1
    content: 「All right, Suzuka, let's celebrate our very first New Year together.」
  - divider: true
  - As the small celebration winds down, a thought crosses %YOU%'s mind.
  - acc: 1
    content: 「Suzuka, today is the dawn of the Classic Year. Hard to believe a whole year has already flown by.」
  - The Classic Year represents the most prestigious proving ground in an %UMA%'s career. Legendary milestones like the Classic Triple Crown and celebrated Grade 1 showdowns finally open their doors.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「It truly has. Thank you for everything you've done for me over this past year, %CALLNAME%.」
  - 「The Classic Year is upon us... Let's conquer it together, Suzuka! We'll sweep through the Twinkle Series and claim every open horizon ahead!」
  - Full of fiery ambition, %YOU% declares the grand vision for the year ahead.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Yes! I'll give it my all right beside you, %CALLNAME%!」
  - acc: 1
    content: 「And as for our first Classic milestone...」
  - Unable to contain %YOU%'s eagerness, %YOU% bounds over to the desk and begins rummaging through race calendars.
  - acc: 1
    content: 「Found it! Suzuka, our opening skirmish for the Classic Year will be the Yayoi Sho. How does that sound?」
  - As a premier G2 middle-distance clash, the Yayoi Sho has always served as the definitive trial for the Satsuki Sho, the first leg of the Classic Triple Crown.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Whatever you think best, %CALLNAME%! The Yayoi Sho... is right at my ideal distance.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Well then, see you later, %CALLNAME%! To get ready for the Yayoi Sho, I'm going to run a few laps right now...」
  - acc: 1
    content: 「Wait, Suzuka! Didn't we just agree you'd rest today...?!」
  - Watching %CHARA% practically vibrate with uncontainable excitement, %YOU% blinks, nursing an affectionate headache.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Hehe... sorry! I just got a little too excited...」
  - "And just like that, %YOU% and %CHARA% locked in your first official Classic objective: the Yayoi Sho."

# 第一次G1前
race_clothe:
  title: Racewear
  lines:
    - if: era.get('cflag:2:48') === 47 + 4
      content: Toward the close of January in the Classic Year, %CHARA% receives her custom-tailored racewear.
    - if: era.get('cflag:2:48') !== 47 + 4
      content: Ahead of her inaugural G1 appearance, %CHARA% receives her custom-tailored racewear.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, my racewear just arrived! Could you take a look and see how it fits?」
    - acc: 1
      content: 「It's a lovely outfit. The design suits you wonderfully, Suzuka.」
    - %YOU% smiles warmly as %CHARA% twirls around in her white-and-green silk silks.
    - It's obvious she adores the new outfit.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Putting on these silks makes me feel like a brand-new runner! %CALLNAME%, I'm going to run a couple of laps to test them out!」
    - With that, %CHARA% turns to dart straight out of the office.
    - acc: 1
      content: 「Hold on, Suzuka—it's already pitch-black outside.」
    - %YOU% points helplessly toward the wall clock.
    - %CHARA% sheepishly steps back into the room with an embarrassed chuckle.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I guess I got a little carried away trying on new clothes...」
    - divider: true
    - The next morning, %YOU% rises exceptionally early and waits along the academy's main promenade.
    - Sure enough, before long, a brilliant streak of green and white glides into view from down the avenue.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Haa... haa... Wait, %CALLNAME%? You weren't waiting here just for me, were you...?」
    - 「I certainly was. I knew you wouldn't be able to resist taking those silks out for an early dawn spin.」
    - Proud of successfully catching %CHARA% in her morning drill, %YOU% grins playfully.
    - acc: 1
      content: 「So, Suzuka, how does it feel running in your official racewear?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「It feels incredible! Especially the colors—they match my favorite shades perfectly.」
    - %CHARA% gently fingers the fabric, thoroughly enchanted by the texture.
    - %YOU% takes another appreciative look at the white and emerald ensemble.
    - acc: 1
      key: attr
      content: 「So you're fond of white?」 (Power +20)
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yes... White brings fresh snow to mind. A world blanketed in snow is always so quiet and pristine.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「When I run out in front, that serene tranquility is what I love the most.」
    - acc: 2
      content: 「So you're fond of green?」 (Guts +20)
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Green carries the feeling of spring rebirth. When I run, it feels like the wind is gently urging me forward.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Before I know it, hours on the track have flown by like a dream.」
    - %YOU% nods in thoughtful understanding.
    - acc: 1
      content: 「I see now. It suits you down to the ground.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「So, %CALLNAME%... would you let me run just a little longer...?」
    - %CHARA% looks ready to bolt onto the grass.
    - acc: 1
      content: 「Morning classes are about to begin, Suzuka. Shouldn't you get ready for lectures?」
    - Only then does %CHARA% realize the hour, offering a hasty goodbye before dashing off to the school building.

# 弥生赏参赛后
# 干劲+1
secret_base:
  title: Secret Base
  lines:
    - A few days after the Yayoi Sho, %CHARA% knocks gently on the Trainer's office door.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, are you in?」
    - acc: 1
      content: 「Come in, Suzuka. What's up?」
    - %CHARA% carefully eases the door open wider and slips inside.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, do you have some free time? I was hoping to invite you to go mountain hiking with me.」
    - acc: 1
      content: 「Hiking? That's quite an unusual request. Is it far?」
    - Pushing aside the endless stacks of paperwork, %YOU% finds %YOU%'s curiosity piqued by her sudden invitation.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Not too far, no.」
    - acc: 1
      content: 「Give me five minutes to pack some water and gear...」
    - divider: true
    - Soon after, %YOU% follows %CHARA% to the foot of a scenic hill situated near the academy perimeter.
    - acc: 1
      content: 「Suzuka, what made you think of climbing a mountain all of a sudden?」
    - %CHARA% offers a mysterious, gentle smile.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Once we reach the peak, you'll understand.」
    - And so, %YOU% hikes along behind %CHARA%, scrambling up the winding trails of this surprisingly steep hillside.
    - acc: 1
      content: 「Haah... haah... This is a lot tougher than I thought... I really need to work on my cardio...」
    - Though it is mild spring weather, %YOU% is already drenched in sweat after scrambling up the rocky path.
    - In contrast, %CHARA% bounds lightly ahead, sporting barely a trace of perspiration.
    - Plainly, an ordinary human's physical conditioning couldn't hold a candle to an %UMA%'s natural athleticism...
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, should we stop for a breather?」
    - %CHARA% steps back down to %YOU%'s side, asking with gentle concern.
    - acc: 1
      content: 「You don't need to hold back for me, Suzuka. Go ahead to the top; I'll catch up at my own pace...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I can't do that, %CALLNAME%. At least this once, please let me reach the finish line together with you...」
    - %CHARA% firmly insists that %YOU% sit and rest until %YOU%'s breath steadies.
    - Once rejuvenated, the two of you push through the final incline side by side, breaking through onto the summit.
    - acc: 1
      content: 「It's breathtaking...」
    - From the peak, the panoramic glory of the spring countryside spreads out before your eyes in endless rolling greens, making every ounce of exhaustion evaporate instantly.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, how does the view look from here?」
    - acc: 1
      content: 「It's spectacular, Suzuka. How did you ever discover such a wondrous spot?」
    - %CHARA% settles down softly right against %YOU%'s side.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「During one of my dawn runs, my intuition told me the peak of this hill would hold something magical, so I ran up.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Since then, whenever the pressure gets heavy, I come here alone. Looking out over the world below fills me with peace and joy.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「This is my 'secret base.' Aside from myself, %CALLNAME% is the very first person to ever know about it.」
    - acc: 1
      content: 「I'm honored. But tell me, why did you decide to bring me here first?」
    - %CHARA% scoots just a fraction closer against %YOU%'s shoulder.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「You're always pouring your heart into helping me reach the open horizon, yet you never get to share that view yourself. That's why I wanted to bring you up here—so you could see with your own eyes the vast, quiet world that I hold so dear.」
    - %YOU% turns to look at %CHARA%, met by her gentle, deeply fulfilled smile.
    - Warmth surges in %YOU%'s chest, sensing that some invisible boundary between trainer and runner had silently melted away.

# 经典年庙会
turn_overcast:
  title: Sunny Turning Overcast
  lines:
    - The demanding Summer Training Camp is now half over, reaching that grueling stretch where both runner and trainer are thoroughly worn thin.
    - Seeking to relieve the tension that had gripped them since camp began, %YOU% plans to invite Suzuka to the local summer festival.
    - %YOU% waits in the lounge area, but Suzuka is nowhere to be found.
    - Having a pretty good hunch where she might be, %YOU% stands up with an affectionate sigh.
    - acc: 1
      content: 「Hey, Suzuka! Practice ended hours ago. Give yourself a rest.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Huh? %CALLNAME%, what are you doing out here?」
    - Sure enough, Suzuka is already geared up in her workout clothes, poised to go run extra laps.
    - acc: 1
      content: 「Suzuka, the summer festival is tonight! It only happens once a year—wouldn't it be a shame to miss it?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「The festival... but I really wanted to get some miles in. How about %CALLNAME% goes ahead, and I'll find you after I finish?」
    - acc: 1
      content: 「If I wait until you've run your fill, next year's festival will be over.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「It's not that extreme! %CALLNAME%, you're exaggerating...」
    - In the end, %YOU% successfully convinces Suzuka to accompany %YOU%.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「The festival is so bustling! Everyone looks so happy. Look, %CALLNAME%—they're shaving ice over there!」
    - %YOU% had worried Suzuka might feel out of place amidst the noisy festival crowd, but those concerns dissolve instantly.
    - Seeing her eyes brighten at the shaved ice stall, %YOU% leads her over and orders two cups.
    - acc: 1
      content: 「Here you go, Suzuka—your reward for working so hard throughout camp!」
    - %YOU% hands one of the frosty cups to Suzuka.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Really? Thank you, %CALLNAME%! Mmm, it's so sweet and cold!」
    - acc: 1
      content: 「Come on, let's sit on the bench and take our time.」
    - Suzuka happily curls up next to you on the wooden bench.
    - if: d.hoch_sho === 1
      lines:
        - content:
            - fontWeight: bold
              content: Announcer
            - 「%CHARA% all alone at the wire! An overwhelming, historic romp!」
        - Startled by the sudden broadcast voice, %YOU% and Suzuka turn together toward the source.
        - A small television set perched beside a food stall is airing replay highlights of Suzuka's dominant Yayoi Sho triumph.
        - acc: 1
          content: 「You were breathtaking back then, Suzuka. Absolutely untouchable.」
        - %YOU% praises her with heartfelt sincerity.
        - But Suzuka doesn't reply, her eyes transfixed on the glowing screen.
        - Following her gaze, %YOU% notices the camera cutting to the second-place runner far behind her.
        - Drenched in sweat, the runner had fought desperately with every fiber of her being, only to watch Suzuka vanish into the distance.
        - acc: 1
          content: 「She's a fierce competitor too, but your stride was simply on another level. Um, Suzuka...?」
        - %YOU% notices a sudden shadow fall across Suzuka's expression.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I-I'm fine, %CALLNAME%... Let's finish this quickly and head back. I'm feeling a little tired...」
        - Suzuka forces a frail, strained smile.
        - Unsure of what had suddenly troubled her, %YOU% quietly escorts her back to the lodge to rest. # +Disheartened
    - if: d.hoch_sho > 1
      lines:
        - content:
            - fontWeight: bold
              content: Announcer
            - 「Crowd favorite %CHARA% chasing the lead... Oh, what an unfortunate stumble! A critical mistake costs her dearly!」
        - Startled by the broadcast commentary, %YOU% turns toward the stall's television, which is replaying the Yayoi Sho.
        - acc: 1
          content: 「Suzuka...?」
        - %YOU% looks at Suzuka with immediate concern.
        - Suzuka doesn't respond, her eyes locked tight onto the agonizing replay of her mistake.
        - Only after the race footage cuts to commercial does she finally blink back to reality.
        - %YOU% notices her spirits have sunk into deep gloom.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%... can we... can we head back now?」
        - Suzuka forces a tight, fragile smile.
        - Struggling to find the right words of comfort, %YOU% gently guides her back to the camp lodge. # Motivation -1
    - if: "!d.hoch_sho"
      lines:
        - content:
            - fontWeight: bold
              content: Announcer
            - 「The field breaks together from the barriers! A brilliant start across the board!」
        - Hearing the race commentary, %YOU% and %CHARA% turn simultaneously toward the TV set at the stall.
        - It is replaying the Yayoi Sho—the very trial she had ended up skipping.
        - acc: 1
          content: 「Suzuka...?」
        - %YOU% glances at %CHARA% with a pang of worry, knowing she missed the race she was supposed to run.
        - %CHARA% doesn't answer. Her eyes seem somewhat distant, yet remain locked on the runners giving their all on the turf.
        - Right until the replay ends, %CHARA% remains lost in a daze.
        - acc: 1
          content: 「Suzuka, let's head back and get an early night, okay?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yeah...」
        - Murmuring like someone in a dream, she follows %YOU% silently back to the lodge. # Motivation -2

turn_cloudy:
  title: Overcast Turning Cloudy
  lines:
    - The annual summer training camp has officially drawn to a close. Everyone is packing their gear in high spirits, buzzing with excitement about returning to Tracen.
    - "Yet %YOU% is puzzled: your trainee %CHARA% is nowhere among the chattering %UMA%, and her bags remain completely unpacked."
    - Asking around, several girls mention that Suzuka headed out for a dawn run and hasn't returned since. Unable to sit still, %YOU% sets out to find her.
    - acc: 1
      content: 「Suzuka! Suzuka, where are you—Suzuka—!」
    - To %YOU%'s relief, it doesn't take long to spot her sitting by the ocean all by herself.
    - Perched quietly on the sandy beach, she gazes absently across the rolling waves, oblivious to %YOU%'s calls.
    - Instead of calling out again, %YOU% quietly walks over and sits down beside her in the sand.
    - acc: 1
      content: 「Is something bothering you, Suzuka? You can always talk to me.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... something feels off inside me...」
    - Her voice drifts faintly on the sea breeze.
    - Hearing her words, %YOU% pauses.
    - Indeed, throughout the second half of camp, Suzuka had seemed distant, almost hollow—like an automaton mechanically executing %YOU%'s training directives without her usual spark.
    - acc: 1
      content: 「Could you explain what you mean, Suzuka?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「These past few days, I've been searching for the real purpose behind my running...」
    - if: d.hoch_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「In my races, I can keep the open view in front all to myself, just like during my morning runs.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yet because of me, everyone else in the race is completely robbed of that horizon...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I run purely for the sheer joy of running. But everyone else might be running with dreams they can't afford to lose. Isn't that deeply unfair to them?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Or maybe... I'm crushing their dreams with my own hands...」
        - Listening to her painful confession, %YOU% finally understands. Her despair had taken root right from that festival broadcast, when the camera lingered on the runner who came second.
        - acc: 1
          content: 「In any real race, winners and losers are completely natural. You never need to shoulder guilt over that.」
        - Suzuka turns her head, her conflicted eyes meeting %YOU%'s unwavering gaze.
        - acc: 1
          content: "「Think of it this way, Suzuka: if you faced a fierce rival who stole your open horizon in every race, what would you do?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I... I would make them my ultimate goal. I'd chase them down until the day I passed them head-on to take back my open sky...」
        - Seeing the rekindling fire in her eyes, %YOU% nods with quiet pride.
        - acc: 1
          content: 「Exactly. By chasing your open horizon, Suzuka, you become the benchmark and the dream that pushes everyone else to greater heights.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Do they... really see it that way, %CALLNAME%?」
        - Rather than answering with words, %YOU% simply holds her gaze with gentle certainty.
        - After a long silence, Suzuka stands up, brushing the white sand from her running shorts.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Thank you, %CALLNAME%. I'm not sure if I have it all figured out yet, but my heart feels so much lighter than before.」
        - %YOU% stands beside her, looking toward the distant camp lodge.
        - acc: 1
          content: 「Let's head home, Suzuka. Out on the track in our next race, you'll find your true answer.」 # Disheartened -> Downcast
    - if: d.hoch_sho > 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「During morning runs, thoughts like this never cross my mind...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yet during races, everyone pushes with such desperate fury, shining so brightly...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「They seem to carry reasons why they must win at all costs... and without realizing it, I felt completely overwhelmed...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, I worry my hunger for victory can never match the fire burning in everyone else... even though I truly want to win...」
        - Hearing her pour her heart out, %YOU% realizes her distress stemmed from that replay of her race error.
        - acc: 1
          content: 「Suzuka, occasional mistakes happen to everyone. Refusing to yield an empty track ahead is the purest form of dedication to victory there is.」
        - Suzuka looks up, her troubled gaze meeting %YOU%'s steady eyes.
        - acc: 1
          content: 「If you couldn't claim the horizon this time, then take it back in the next race!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I... I understand, %CALLNAME%. Thank you for opening my eyes...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「In our next race, I'll bring home the victory—not just for myself, but for you as well...」
        - Seeing the hunger for triumph flare once more in her eyes, %YOU% nods approvingly.
        - Suzuka stands up, brushing the clinging sand from her legs.
        - %YOU% stands as well, casting a glance toward the lodge.
        - acc: 1
          content: 「Come on, let's head back to the academy.」 # Motivation +1
    - if: "!d.hoch_sho"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「The empty road ahead... I've seen it countless times during dawn workouts...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yet seeing everyone running their hearts out in that race made me feel like something was hollowed out inside me... Like I belonged out there too...」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Running with absolute freedom, having that pristine view all to myself...」
        - Listening to her soft murmur, %YOU% realizes that skipping the Yayoi Sho had left a deep wound in her racer's heart.
        - acc: 1
          content: 「Next time, Suzuka, you'll be the brightest star among them.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Next time... right... I hope so.」
        - %CHARA% gets to her feet, dusting off the sand.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Thank you for the encouragement, %CALLNAME%. I'll do my best next time.」
        - %YOU% stands beside her, looking toward the distant cabins.
        - acc: 1
          content: 「Let's go pack our bags.」
        - Walking quietly behind %CHARA%, %YOU% feels an inexplicable tightening in %YOU%'s chest.

# 神户新闻杯入着
kobe_hai_end:
  title: Cloudy Clearing to Sunshine
  lines:
    - if: d.rank === 1
      lines:
        - content:
            - fontWeight: bold
              content: Announcer
            - 「%CHARA% crosses the wire with an untouchable, dominant lead!」
        - Standing right at the rail in the stands, %YOU% breathes a huge sigh of relief seeing Suzuka's beaming smile.
        - acc: 1
          content: 「Entering this race was definitely the right call.」
        - To %YOU%'s delight, Suzuka jogs straight toward where %YOU% is standing.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, I... I finally understand! Thank you so much!」
        - Seeing her radiant excitement, %YOU% smiles warmly, urging her to catch her breath.
        - acc: 1
          content: 「I hope this victory helped you find the answer you were searching for.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Yes, I found it! Still, I want to prove it even further in our next race.」
        - Seeing the pure joy back in Suzuka's eyes, %YOU% nods happily.
        - acc: 1
          content: 「Go ahead, Suzuka—soak in the victory that belongs entirely to you!」 # -Disheartened/Downcast, Motivation +1
    - if: d.rank > 1
      lines:
        - content:
            - fontWeight: bold
              content: Announcer
            - 「%CHARA% digging deep in pursuit, but she's just a stride short...! That's the wire, and %CHARA% misses the top spot!」
        - %YOU% stares fixedly at the tote board; while Suzuka's number is posted on the board, it isn't at the very top.
        - Hands thrust deep into coat pockets, you keep your head down in silence, calm on the surface while your fists clench tight inside.
        - After camp, she seemed to have found the nerve to try again, yet this outcome...
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, I'm back.」
        - Snapped out of %YOU%'s reverie by that familiar voice, %YOU% looks up to see Suzuka standing before %YOU%.
        - acc: 1
          content: 「Suzuka, you...」
        - %YOU% tries to summon words of comfort, only to find %YOU%'s throat momentarily dry.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「It's all right, %CALLNAME%.」
        - %CHARA% meets %YOU%'s eyes with surprising composure.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Even though I couldn't hold on until the end today, I was thinking deeply through every furlong.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I might not have solved everything just yet, but I know... in our next race, or the one after, I will find the answer that belongs to me.」
        - Caught off guard by her resilience, %YOU% manages an encouraging smile.
        - acc: 1
          content: 「That's the spirit, Suzuka. As long as there's hope, we'll reach it together...」 # -Disheartened/Downcast

# 输或者未出走
kobe_hai_lose:
  title: Cloudy Turning Back to Overcast
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, I...」
    - Reviewing race recordings in the office after the Kobe Shimbun Hai, Suzuka hesitates with sorrow in her eyes.
    - %YOU% feels equally downcast; running this trial seemed to do nothing to alleviate her inner conflict—if anything...
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm sorry, %CALLNAME%... I feel like my doubts have only gotten deeper.」
    - At a loss for words, %YOU% clicks the monitor off, trying to steer attention away from the painful screen.

# 经典年10月1周
first_step:
  title: The Fated First Step
  lines:
    - On a crisp day in October, %YOU% calls Suzuka into the Trainer's office to discuss the next roadmap.
    - acc: 1
      content: 「Suzuka, more than half of the Classic Year is behind us, and in my eyes, you've grown into a formidable competitor.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Thank you for the high praise, %CALLNAME%!」
    - 「Which is why I believe we're ready to aim for prestigious, higher-stakes graded battles.」
    - %YOU% lays out the vision, while Suzuka listens attentively, considering the possibilities.
    - acc: 1
      content: 「Do you have any specific goals in mind, Suzuka?」
    - %YOU% slides the racing calendar across the desk toward her.
    - Suzuka accepts it and flips through the fixtures with keen interest.
    - Before long, she slides the calendar back to %YOU%.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, I've decided: I want to enter the Tenno Sho Autumn!」"
    - acc: 1
      content: 「A wonderful target, Suzuka. Having set our sights on it, we'll need to work tirelessly to get there.」
    - Her choice comes as no real surprise to %YOU%.
    - As a centerpiece of the Autumn Senior Triple Crown, the Tenno Sho Autumn is among the most prestigious 2,000-meter G1 showdowns on the racing calendar.
    - "Crucially, it imposes no seniority barriers: Classic Year contenders can duel seasoned Senior Year titans on an equal stage."
    - %YOU% doesn't ask which year's edition she has in mind; the Classic edition is less than a month away, making entry virtually impossible.
    - However, the Senior Year edition sits over twelve months down the road, and that intervening window cannot be wasted.
    - Flipping back through the calendar, %YOU%'s finger lands on an ideal interim target.
    - acc: 1
      content: 「Before that grand stage... let's target the Kinko Sho, Suzuka.」
    - As an established G2 middle-distance clash, the Kinko Sho holds even greater prestige than the Yayoi Sho, making it a perfect stepping stone on her road to the Tenno Sho Autumn.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Understood—the Kinko Sho it is! Please place your faith in me, %CALLNAME%! I will bring home victory and take another giant stride toward the open horizon...」
    - "And so, %YOU% and Suzuka solidified your primary dream—the Tenno Sho Autumn—and the trial milestone preceding it: the Kinko Sho."

# -失意/难过
new_year_senior:
  - Today marks the first day of the Senior Year, inaugurating the third year %YOU% and %CHARA% have spent together.
  - Over the past season, guided by %YOU%'s coaching, Suzuka campaigned across middle-distance fixtures, cementing her reputation as a formidable runaway front-runner.
  - Sitting at the desk absently spinning a pen, %YOU% reflects on how far you've come, glancing periodically at the clock.
  - Despite being indoors, %YOU% is already bundled up in a thick winter coat.
  - A few minutes later, a soft, polite knock taps against the door.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, are you there?」
  - %YOU% springs up and pulls the door wide open.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Happy New Year, %CALLNAME%~」
  - Outside stands Suzuka bundled in a fluffy down jacket, delivering her warm holiday greeting with a gentle smile.
  - Wrapped in a long woolen scarf, her cheeks are flushed pink from the brisk morning air, looking utterly adorable.
  - Under her earnest gaze, %YOU% feels an unexpected blush warming %YOU%'s own face.
  - acc: 1
    content: 「Happy New Year to you too, Suzuka!」
  - %YOU% feels almost too shy to hold her gaze directly.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Hehe. Since %CALLNAME% is all dressed and ready, shall we get going?」
  - Sensing %YOU%'s bashfulness, Suzuka smoothly transitions the subject with a warm laugh.
  - Having locked in the Tenno Sho Autumn as the crowning goal of the Senior Year, you had agreed to visit a local shrine to pray for fortune together.
  - divider: true
  - %YOU% and Suzuka stroll side by side through the quiet chill of New Year's Day.
  - Thanks to the holiday, the streets are sparsely populated; the few pedestrians abroad hurry along with scarves pulled high.
  - In the serene quiet, it feels as though the two of you are the only souls in the entire world.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Hehe...」
  - Soaking in the peaceful magic of the moment, %YOU% hears Suzuka let out a soft giggle.
  - acc: 1
    content: 「What made you laugh, Suzuka?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Nothing at all! I was just thinking how special it is to share this empty, quiet view with %CALLNAME%. It's a brand new experience for both of us, isn't it?」
  - %YOU% instinctively slows your pace, wishing the path to the shrine could stretch on just a little longer.
  - Unfortunately, the shrine isn't far from the academy grounds, and the torii gate soon looms overhead.
  - Letting out a quiet sigh, %YOU% leads Suzuka forward to offer your prayers.
  - acc: 1
    content: 「...May Suzuka and I surge forward without obstacle this year, and bring home the shield of the Tenno Sho...」
  - Having no other wishes, %YOU% quickly finishes offering a heartfelt prayer for Suzuka's campaign.
  - Peeking to the side, %YOU% notices Suzuka still standing with hands clasped tight in devout concentration.
  - After another quiet moment, she opens her eyes, catches %YOU%'s gaze, and beams warmly.
  - Curiosity gets the better of %YOU%.
  - acc: 1
    content: 「Um, Suzuka... may I ask what you wished for?」
  - Asking the question, %YOU% feels an inexplicable wave of bashfulness.
  - Why feel embarrassed asking a simple question to your own trainee...?
  - if: (t=era.get('love:2')) < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「I wished to win the Tenno Sho!」
      - Unaware of %YOU%'s inner fluster, Suzuka cheerfully shares her wish with an open smile.
      - A completely natural answer, yet %YOU% feels silly for having grown so nervous.
      - acc: 1
        content: 「I see... Well, now that our prayers are offered, shall we walk back?」
      - Stepping past her answer without further prying, %YOU% pivots to the journey home.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Yes! Let's give it everything we have this year, %CALLNAME%!」
      - Suzuka asks no further questions, walking happily by %YOU%'s side all the way back to Tracen.
  - if: t >= 50 && t < 90
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「I wished 'to win the Tenno Sho together with %CALLNAME%!'」
      - Suzuka announces her prayer with a radiant smile, mirroring %YOU%'s exact thoughts down to the letter.
      - acc: 1
        content: 「Incredible... Our prayers matched word for word!」
      - %YOU% exclaims with genuine delight.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「That proves our bond is stronger than ever! See, we even share the very same thoughts!」
      - Suzuka looks even more overjoyed than %YOU%.
      - acc: 1
        content: 「There couldn't be a better omen. Let's head back—we've got plenty of preparation to tackle today!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Right, let's go! I can't wait to see what this new year brings with %CALLNAME%, hehe~」
  - if: t >= 90
    lines:
      - To %YOU%'s surprise, Suzuka whips her head away the moment the question is asked.
      - acc: 1
        content: 「Suzuka? Is everything all right?」
      - Concern overtaking %YOU%'s own embarrassment, %YOU% steps closer.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「I-It's nothing... I'm totally fine, %CALLNAME%...」
      - Her voice is barely a squeak, utterly unconvincing.
      - acc: 1
        content: 「Suzuka?」
      - %YOU% gently cups her chin, turning her face back toward %YOU%.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Ah, %CALLNAME%... what are you doing?! Someone might be watching...」
      - Startled by %YOU%'s forward touch, her voice drops to a tiny whisper.
      - Taking in her expression, %YOU% sees her cheeks glowing as red as a ripe summer peach.
      - %YOU% blinks in fond surprise.
      - Her emerald eyes dart to the side, desperately avoiding direct eye contact with %YOU%.
      - acc: 1
        content: 「Are you really all right? You don't look all right in the slightest.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「I'm really fine, %CALLNAME%!」
      - Pulling free from %YOU%'s grasp, Suzuka covers her burning face with both mittens and bolts down the shrine steps.
      - acc: 1
        content: 「Hey, Suzuka! Watch your footing on the stairs!」
      - Bewildered by her sudden flight, %YOU% has no time to ponder, dashing down the stone steps in hot pursuit.

# 金鯱赏前三
kink_sho_3:
  title: Resurgence
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, I did it!」
    - Crossing the finish line on the board, Suzuka bounds up to %YOU% with sparkling eyes.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I finally proved that the open horizon in front belongs to me!」
    - Seeing her radiant joy, %YOU% smiles with immense pride, giving her an enthusiastic thumbs-up.
    - acc: 1
      content: 「You ran brilliantly, Suzuka! Keep this momentum going all the way to the Tenno Sho Autumn!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Yes, sir! I won't let anyone get ahead of me!」
    - Watching her bounce with confidence, %YOU% knows the shadows of doubt have fully lifted from her heart.

# 金鯱赏未入着
kink_sho_4:
  title: Stumble
  lines:
    - content:
        - fontWeight: bold
          content: Announcer
        - 「A shocking upset at the wire! Crowd favorite %CHARA% falls short of the top placings!」
    - To be frank, %YOU% feels a pang of disappointment.
    - Suzuka had commanded a solid lead early on, until a tactical lapse spiraled out of control down the homestretch.
    - Still, %YOU% realizes that even if %YOU% had been out on that track in her shoes, making a better call under that pressure would have been nearly impossible.
    - If things stay like this, the Tenno Sho...
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm so sorry, %CALLNAME%... I never imagined I would make such a careless blunder...」
    - Looking at her drooping ears and crestfallen posture, %YOU% can't muster even a shred of criticism.
    - Letting out a gentle breath, %YOU% places a comforting hand on her shoulder.
    - acc: 1
      content: 「It's all right, Suzuka. Let's study the tape carefully and make sure we don't repeat that mistake next time.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I will, %CALLNAME%. It might sound inappropriate right now, but... I truly enjoyed running out there today.」
    - %YOU% nods in relief. At least her spirit remains unbroken. With steady preparation, finding the wings to soar again is well within reach.

kink_sho_miss:
  title: Absent
  lines:
    - The weather is crisp and clear—ideal conditions for training drills—yet...
    - Suzuka hasn't arrived.
    - %YOU% glances up at the brilliant midday sun; there is simply no way Suzuka would miss practice on a morning like this...
    - Left with no choice, %YOU% sets out across campus to look for her.
    - divider: true
    - acc: 1
      content: 「Suzuka...? What are you doing in here?」
    - Having combed through half the academy in vain, %YOU% had returned to the office intending to call %T_NAME%, only to find Suzuka sitting inside.
    - She sits in total silence before the office television, watching replays of the Kinko Sho—the race she had missed.
    - The somber sight renders %YOU% momentarily speechless.
    - Hearing the door click, Suzuka stands up quietly and powers off the screen.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Let's go, %CALLNAME%.」
    - Brushing past %YOU%, she steps out into the hallway. In that fleeting second, %YOU% catches her profile.
    - Her expression is unnervingly tranquil, devoid of any discernible emotion.
    - The sight sends an eerie chill through %YOU%'s spine.
    - Shaking off the hesitation, %YOU% follows her back toward the training grounds.
    - Thankfully, she acts completely normal once on the turf, executing her daily drills with textbook precision.
    - But is everything truly normal...?
    - %YOU% shake your head vigorously, banishing the unsettling thought from your mind.

# 资深年3月3周
second_step:
  title: The Fated Second Step
  lines:
    - acc: 1
      content: 「Here's the plan, Suzuka...」
    - %YOU% looks across the desk at the primly seated Suzuka, tapping the racing calendar thoughtfully.
    - acc: 1
      content: 「The Tenno Sho Autumn is still over half a year away. To keep your sharpness during this gap, I'd like to schedule another major outing...」
    - %CHARA% nods obediently.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm at your command, %CALLNAME%.」
    - acc: 1
      content: 「Given how dominantly you've performed across G2 events, I think you're ready to contest a premier G1...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Understood, %CALLNAME%.」
    - acc: 1
      content: 「So, what do you think of the Osaka Hai? The Victoria Mile looks tempting too, or would the Yasuda Kinen suit you better?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Whatever you think best, %CALLNAME%.」
    - %YOU% chokes on %YOU%'s words for a second before laughing helplessly.
    - acc: 1
      content: 「Suzuka, I'm asking for your personal opinion here! You're allowed to take the lead, you know.」
    - %YOU% slides the calendar across to her.
    - To %YOU%'s pleasant surprise, she points to a fixture without hesitation.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, let's run the Takarazuka Kinen.」
    - As the fan-voted grand prix and the crowning jewel of the Spring Senior Triple Crown, the prestige of the Takarazuka Kinen rivaled even your ultimate goal, the Tenno Sho Autumn.
    - Yet Suzuka didn't seem worried about ballot counts in the slightest.
    - Such was the quiet confidence of a generational front-runner.
    - Reeling in wandering thoughts, %YOU% gives her a firm thumbs-up.
    - acc: 1
      content: 「An inspired choice, Suzuka. I have complete faith that you'll deliver a masterclass.」

takz_kin:
  title: Declaration of War
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Right. Time to take the stage.」
    - color: %A_COLOR%
      content: Looking toward the familiar starting gate, %CHARA% silently rallies her inner resolve.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「Hold on a second, Suzuka.」
    - color: %A_COLOR%
      content: Hearing another %UMA% calling her name, %CHARA% turns in mild surprise.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Oh, it's %CALL_18%! Please go easy on me today.」
    - color: %A_COLOR%
      content: Stepping up is %CHARA%'s classmate %A_NAME%, a veteran middle-distance contender whose big-race experience easily rivals %CHARA%'s own.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「Haha, asking for mercy? That's my line to you, Suzuka.」
    - color: %A_COLOR%
      content: %A_NAME% offers a competitive grin, her eyes burning with identical hunger for victory and worthy rivals.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「My, my, what a lively gathering we have here.」
    - color: %A_COLOR%
      content: "%CHARA% and %A_NAME% turn together to see another formidable presence: their rival %G_NAME%."
    - color: %A_COLOR%
      content: Though %G_NAME% is %CHARA% and %A_NAME%'s junior, her credentials brook no condescension, having seized major honors throughout her Classic campaign.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「Well now, look who entered the Takarazuka Kinen! In that case, I'll have to pull out all the stops. I certainly won't hand the crown over cheaply.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「And I fully intend to cross the finish line before either of you.」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「Since both seniors are bursting with fighting spirit, I'd better rise to the challenge. I'll take this crown just like all the rest!」
    - color: %A_COLOR%
      content: The three %UMA% exchange fierce, knowing smiles, mutual respect flashing in every gaze.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「The bell is coming, everyone. Let's make it a race to remember!」

takz_kin_win:
  title: Leading the Charge
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Haah... haah...」
    - color: %A_COLOR%
      content: Panting beneath the towering electronic tote board, %CHARA% glances up periodically at her name sitting in the number one slot.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「We really won...」
    - color: %COLOR%
      content: In the fiercely contested Takarazuka Kinen, %CHARA% had met two titans head-on, prevailing wire to wire to claim the Grand Prix crown.
    - color: %COLOR%
      content: The thought brings a rare, blossoming smile of pure pride to the usually quiet %CHARA%'s face.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「The rumors weren't exaggerated in the slightest, Suzuka. You're an absolute force out there.」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「That runaway style of %11_CALL%'s is utterly impossible to handle... If you don't shut her down in the opening strides, the race is over before it begins.」
    - color: %COLOR%
      content: Her two valiant rivals walk over to stand beside %CHARA%, voicing their sighs of genuine awe.
    - color: %COLOR%
      content: %CHARA% sees no bitter resentment in their eyes—only admiration and the hunger to chase a supreme benchmark.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Both of you were formidable rivals, truly. You had me feeling immense pressure down the final furlongs, hehe.」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - "「Consider this an early declaration of war, Suzuka: the next time we meet on the turf, I'll bring tenfold the pressure!」"
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「Or perhaps we'll blow right past %11_CALL% and see how she handles chasing from behind...」
    - color: %COLOR%
      content: The two challengers lay down their playful gauntlets with effortless poise.
    - color: %COLOR%
      content: Looking between her two fierce rivals, %CHARA% lets out an amused, confident chuckle.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'll be eagerly waiting. Whenever you're ready, try and catch me!」

takz_kin_3:
  title: Side by Side
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Defeated...」
    - color: %COLOR%
      content: Atop the giant display board, the number one finish belongs decisively to %G_NAME%.
    - color: %COLOR%
      content: The race had begun cleanly according to plan, with %CHARA% seizing the lead from the break.
    - color: %COLOR%
      content: Yet down the homestretch, %G_NAME% uncorked an astonishing reserve of sheer grit, clawing closer and closer before surging past.
    - color: %COLOR%
      content: The ferocious runaway pace had taken a brutal toll on %CHARA%'s reserves, leaving her powerless to answer the final burst.
    - color: %COLOR%
      content: In the end, %CHARA% suffered a heartbreaking defeat to %G_NAME%.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「My peers call you a racing monster on the track, and seeing that late drive today, that title fits you perfectly.」
    - color: %COLOR%
      content: Having also fallen behind %G_NAME%, %A_NAME% walks over, wearing an expression of lingering awe.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「Thank you for the wonderful contest, seniors!」
    - color: %COLOR%
      content: %G_NAME% approaches with a respectful bow, remarkably fresh given the furious tempo.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「What an extraordinary closing kick... You steadily erased my front-running cushion. Catching your surge out of the corner of my eye gave me quite a fright!」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「Haha, I saw it too! When you blew past her, Suzuka looked completely dumbfounded!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Did I really look like that? No way...」
    - color: %COLOR%
      content: Seeing that both senior runners harbor no bitter grudges about being bested, %G_NAME%'s posture relaxes into a sunny grin.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「Both of you ran with terrifying strength. I want to thank you both from the bottom of my heart for giving me such a magnificent race.」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「In that case, maybe next time it'll be me thanking you two for the contest from the winner's podium!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Honestly... We haven't even scheduled the next match, and you're already writing your victory speech?」
    - color: %COLOR%
      content: The three %UMA% share a hearty burst of laughter together.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「I look forward to learning from both seniors again in our next race!」
    - color: %COLOR%
      content: %CHARA% and %A_NAME% nod in unison, each seeing their own unrelenting hunger for victory mirrored in their rivals' eyes.

takz_kin_lose:
  title: Left Behind
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm... so exhausted...」
    - color: %COLOR%
      content: Although a middle-distance race should rarely drain %CHARA% this thoroughly, she feels as though every drop of strength has evaporated from her body.
    - color: %COLOR%
      content: She had paced her stamina with utmost discipline, until...
    - color: %COLOR%
      content: Until %A_NAME%, %G_NAME%, and wave after wave of rivals swept past her down the stretch.
    - color: %COLOR%
      content: %CHARA% doesn't even have the heart to check whether she finished on the board.
    - color: %COLOR%
      content: Forcing her heavy head up toward %A_NAME% and %G_NAME%, she sees the two locked in spirited, triumphant celebration.
    - color: %COLOR%
      content: Yes... that is the carefree joy belonging only to the victor...
    - color: %COLOR%
      content: %CHARA% lets out a bitter, self-deprecating smile.

summer_end:
  - Time flies, and before long, the Senior Year summer training camp draws to its final day.
  - Mindful of what happened during the previous camp, %YOU% kept close tabs on Suzuka's mental wellbeing throughout every workout.
  - Fortunately, nothing went awry; Suzuka executed every single training directive with flying colors.
  - Now on the final afternoon, %YOU% and Suzuka are packing up your belongings in the cabin.
  - Watching Suzuka carefully fold a small banner reading "Win the Tenno Sho!" into her duffel bag, a thought strikes %YOU%.
  - acc: 1
    content: 「Suzuka, something just occurred to me...」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Yes?」
  - 「The Tenno Sho Autumn takes place at Tokyo Racecourse, doesn't it? You haven't raced on Tokyo turf yet, have you?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Which race do you have your eye on, %CALLNAME%? You're thinking of the Mainichi Okan at Tokyo Racecourse, aren't you?」
  - Suzuka continues folding her gear without missing a beat, as though having anticipated %YOU%'s question all along.
  - %YOU% scratch your head, completely disarmed by her sharp intuition.
  - acc: 1
    content: 「Spot on, Suzuka! As expected of my star trainee, you read my mind in an instant!」
  - %YOU% flashes her a proud thumbs-up.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「How can you say that out loud with a straight face, %CALLNAME%? It's so embarrassing...」
  - Pausing her packing, she hoists a beach volleyball used for drills and playfully mimes throwing it at %YOU%.
  - %YOU% acts thoroughly terrified, dodging theatrically to the side.
  - Soon, all bags are packed and everyone boards the bus back to Tracen.
  - acc: 1
    content: 「So, Suzuka, our next staging ground is the Mainichi Okan. First priority is getting familiar with Tokyo's track layout; win or lose comes second...」
  - Before the sentence finishes, Suzuka gives a firm shake of her head.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「No, %CALLNAME%. I will follow your guidance to study every inch of the turf, but victory is something I refuse to concede.」
  - %YOU% blinks in mild surprise before breaking into a warm, confident chuckle.
  - acc: 1
    content: 「Fair enough! I know you'll accomplish both with flying colors, Suzuka.」

# 资深年10月2周结束
curse:
  title: The Jinx
  lines:
    - A brisk autumn gust sweeps past, prompting %YOU% to pull %YOU%'s overcoat tighter and quicken %YOU%'s stride back toward the academy.
    - Right now, %YOU% is walking along an avenue some distance from campus, holding a fresh bakery box of "Royal Honey Carrot Biscuits" in hand.
    - With the premier Tenno Sho Autumn right around the corner, %CHARA%'s training intensity has climbed to an all-time peak.
    - No matter what ungodly hour %YOU% arrives at the training grounds, Suzuka is always there ahead of you, running solo dawn laps.
    - To give her a much-deserved motivational boost, %YOU% arose early once more to queue for these legendary biscuits beloved by all %UMA%.
    - Despite getting in line at dawn, the queue stretched on for hours. By the time %YOU% secured the box, broad daylight had settled over the city.
    - Fortunately, %YOU% had briefed Suzuka on the morning drills in advance. Glancing up absently, %YOU%'s gaze catches the giant electronic jumbotron mounted on a nearby skyscraper.
    - Right then, the morning news concludes, and portraits of several prominent %UMA% flash across the giant screen.
    - "%YOU% stops dead in %YOU%'s tracks: front and center of the broadcast is a brilliant, high-resolution portrait of Suzuka."
    - content:
        - fontWeight: bold
          content: News Anchor
        - "「The undisputed overwhelming fan favorite for the upcoming clash: Silence Suzuka! With her peerless, blistering runaway pace, she has dominated wire to wire without letting a single rival draw near!」"
    - A swelling wave of pride warms %YOU%'s chest. Having your own trainee lauded on a citywide billboard is an honor few trainers ever experience.
    - She stands as the uncontested number-one favorite for the Tenno Sho Autumn—a status completely consistent with her dominance.
    - Picking up the pace, %YOU% feels eager to bring the fresh carrot biscuits straight to Suzuka.
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Ah, Silence Suzuka... I watched her last race. Absolutely overwhelming.」
    - content:
        - fontWeight: bold
          content: Pedestrian B
        - 「No kidding. She broke out of the gate and seized the lead in seconds; no one could get within three lengths of her the entire race!」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Being voted the overwhelming top favorite is only natural.」
    - Overhearing the bystanders' praise, %YOU% slows %YOU%'s pace, basking in the flattering words about Suzuka.
    - content:
        - fontWeight: bold
          content: Pedestrian B
        - 「Yeah, I hope she uncorks another legendary runaway romp this time, blowing away the field to seize the Tenno Sho shield.」
    - Pedestrian B speaks with eager anticipation, only for Pedestrian A's expression to darken noticeably.
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Everything looks great on paper... but when it comes to winning the Tenno Sho Autumn, I wouldn't bet on Suzuka...」
    - The blunt pessimism jolts both %YOU% and Pedestrian B.
    - content:
        - fontWeight: bold
          content: Pedestrian B
        - 「Why would you say that? We've both seen her overwhelming strength with our own eyes!」
    - Pedestrian A shakes his head with a grim sigh.
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Speed is one thing, but crossing the wire first in a G1 takes luck as well as talent.」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - "「You might not know this, but the Tenno Sho Autumn carries a notorious, persistent curse: the top favorite never wins.」"
    - Unable to stomach the superstition, %YOU% steps forward.
    - acc: 1
      content: 「Excuse me... where did that rumor come from?」
    - The two bystanders turn in surprise.
    - content:
        - fontWeight: bold
          content: Pedestrian B
        - 「Judging by that bakery bag in your hands, sir... are you a trainer from Tracen Academy?」
    - %YOU% offers a brief nod; indeed, those specialty biscuits are almost exclusively bought for trainee %UMA%.
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Well, Trainer... that jinx has circulated among Tokyo Racecourse regulars for years, and it has an eerie track record.」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「I've watched the Tenno Sho Autumn for decades, and the curse's accuracy is uncanny.」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「I've seen so many dominant top favorites step into the paddock looking completely unbeatable.」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - "「Yet the moment the gates open, it's as if a dark shadow descends: missed breaks, swerving wide, panic in the pack...」"
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「Forget winning—hardly any top favorite has managed to finish in the top five.」
    - content:
        - fontWeight: bold
          content: Pedestrian A
        - 「And worse... some have even suffered career-ending breakdowns on that treacherous turn...」
    - Listening to his ominous words, %YOU% feels a sudden chill settle deep in %YOU%'s gut.
    - Shaking your head to dispel the dread, %YOU% bid them farewell and hurries back toward Tracen.
    - Superstitions are just talk... Suzuka's preparation is flawless. Nothing will go wrong.
    - Yet deep down, an unsettling whisper refuses to be silenced.

# 资深年10月3周开始
bad_omen:
  title: Bad Omen
  lines:
    - That night, %YOU% tosses and turns, unable to shake the pedestrian's ominous warning from %YOU%'s thoughts.
    - "Finally drifting off in the early morning hours, %YOU% plunges into a vivid, suffocating nightmare:"
    - divider: true
    - Tokyo Racecourse, packed to the rafters with roaring spectators.
    - Standing in the owner's box, %YOU% watches "Suzuka" burst from the starting gate with her customary explosive speed.
    - Setting a blistering 1,000-meter pace of 57.4 seconds, she tears across the turf, commanding an enormous lead.
    - Down the backstretch, "Suzuka" accelerates once more, gliding across the turf like a phantom.
    - Just past the famous giant zelkova tree, the track begins to sweep into the third bend...
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Silence Suzuka leads by seven lengths as she rounds the giant zelkova tree!」
    - Watching her streak past the foliage, %YOU% leans back, expecting another effortless triumph.
    - Suddenly, a piercing agony stabs through %YOU%'s chest like a clenched fist squeezing %YOU%'s heart.
    - %YOU% gasps, clutching %YOU%'s left side in sheer agony, collapsing against the railing in cold sweat.
    - And then, over the loudspeakers—
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Wait! Silence Suzuka has pulled up!」
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Silence Suzuka is slowing down! She is out of the race!」
    - The world spins into complete darkness.
    - divider: true
    - Waking in the hallucination, %YOU% find yourself standing directly on the Tokyo turf course.
    - Sirens wail as medical carts and veterinary staff rush toward the far bend.
    - "Terror propelling your feet, %YOU% sprints alongside them, only to witness the cruelest sight imaginable:"
    - Suzuka lies collapsed on the grass, her left foreleg bent at an unnatural, shattered angle.
    - Her face is deathly pale, a pool of crimson spreading across the turf.
    - Her chest barely rises, her emerald eyes staring blankly at the sky in cold, lifeless tranquility.
    - Paralyzed with horror, %YOU% collapses to %YOU%'s knees, the phantom heart pain tearing %YOU% apart once more.
    - "The last word drifting from the medics before darkness swallows everything:"
    - "Comminuted fracture."
    - divider: true
    - acc: 1
      content: 「Suzuka! Suzuka—!」
    - %YOU% bolts upright in bed, gasping desperately for air, completely drenched in cold sweat.
    - acc: 1
      content: 「It was... a nightmare...?」
    - Clutching your chest, the phantom pain is gone, yet the raw terror remains etched into %YOU%'s soul.
    - It felt terrifyingly real—too real to simply dismiss as a dream.
    - "Glancing at the clock: 2:00 AM."
    - %YOU% changes the sweat-soaked sheets and tries to sleep again, but closing %YOU%'s eyes only summons that bloody turf...
    - And so %YOU% lies awake until dawn.

choice:
  title: The Decision
  lines:
    - Haunted by that horrifying nightmare, %YOU% couldn't fall back asleep.
    - %YOU%'s mind drifted back two and a half years ago to that first predawn encounter with Suzuka—yet back then, you weren't hollowed out by fear like this.
    - Looking up at the banner hanging on the office wall reading "Win the Tenno Sho!", a dull ache flared in %YOU%'s chest once more.
    - That bloody turf course replayed across %YOU%'s thoughts, but this time, an unconventional resolution took root in %YOU%'s soul.
    - Two and a half years together had made her every smile and gesture an inseparable part of %YOU%'s life; if one race truly risked destroying her...
    - Then that race wasn't worth running. Even if it cost %YOU%'s reputation as a professional trainer, %YOU% would never let that nightmare become reality.
    - Steeling your nerves, %YOU% head out to meet Suzuka at the training grounds.
    - divider: true
    - Arriving at the track before dawn, %YOU% finds Suzuka running laps just as expected.
    - Watching that fluid, graceful stride slicing through the morning air, hesitation seizes %YOU%'s heart.
    - Every ounce of sweat and sacrifice she poured into this dream over the past year unfolded before %YOU%'s eyes.
    - If %YOU% were to extinguish her dream all because of a senseless dream...
    - How would %YOU% be any different from an enemy bent on ruining her?
    - A fierce war wages within %YOU%'s mind.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Ah, %CALLNAME%! You're here!」
    - Catching sight of the dazed %YOU%, %CHARA% jogs over with a bright greeting, rescuing %YOU% from the downward spiral.
    - "Instead of greeting her, %YOU% gazes intently at her, tracing every detail:"
    - From the green ear covers to the silky orange hair, emerald eyes, and slender, powerful legs...
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, what are you doing? You're making me blush...」
    - Her cheeks warm under %YOU%'s unusually piercing gaze.
    - But taking a closer look, Suzuka realizes something is gravely wrong.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... you look like you need the infirmary right now...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%?」
    - Alarmed by %YOU%'s deathly pale complexion, she vaults over the track rail in a heartbeat.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm walking you to the doctor right now. You look terrifyingly sick!」
    - Taking %YOU%'s hand firmly, she tries to lead %YOU% away from the track.
    - Suzuka's warm, soft fingers closing around %YOU%'s ice-cold hand feel like a lifeline pulling %YOU% from drowning.
    - That warmth snaps %YOU% back to reality, crystallizing %YOU%'s resolve.
    - Refusing to budge, %YOU% turns %YOU%'s wrist and catches her hands instead.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%...?」
    - Bewildered, she blinks as %YOU% takes both of her hands in yours.
    - acc: 1
      content: 「Suzuka...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm here, %CALLNAME%...」
    - Though uneasy, she squeezes %YOU%'s hands reassuringly.
    - acc: 1
      content: 「Suzuka, please... please withdraw from the Tenno Sho Autumn...」
    - Squeezing out the words like a faint plea, %YOU% feels all strength drain from %YOU%'s body.
    - Suzuka's lips part in stunned disbelief, her gaze losing focus.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... please don't joke like that. Come on... let's get you to the infirmary...」
    - Assuming %YOU% is speaking in feverish delirium, she tries once more to pull %YOU% away.
    - Seeing her usually serene demeanor fracturing into frantic worry, %YOU% offers a sorrowful smile.
    - acc: 1
      content: 「No, Suzuka. I'm completely serious.」
    - Realizing %YOU% isn't joking in the slightest, Suzuka freezes solid.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, tell me what happened... You never make reckless jokes like this...」
    - Taking a deep breath, %YOU% recounts the ominous warnings, the jinx, and the horrifyingly vivid nightmare of the breakdown at the zelkova tree.
    - Suzuka listens quietly, her head lowering as the story unfolds.
    - When %YOU% finishes, a heavy silence hangs between you.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... do you truly believe in curses like that?」
    - acc: 1
      content: 「I didn't before. But when two eerie omens converge like this, I can't afford to treat it as a coincidence.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Then what about my dreams, %CALLNAME%? Everything we worked toward for over a year... are we just throwing it away over a bad dream?」
    - Her emerald eyes shimmer with tears of anguish.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Trust me... please, just this once! Win or lose, shield or no shield—none of that matters! I promise you, I will come back to your side safe and sound!」
    - A choked sob escapes her lips.
    - Caught between gut-wrenching terror and her desperate plea, %YOU%'s mind reels with dizzying turmoil.
    - Looking at her tear-filled eyes, then recalling that horrific vision on the grass...
    - Finally, %YOU% clenches %YOU%'s jaw and makes the fateful choice.
    - acc: 1
      key: choice
      content: 「Then run, Suzuka.」
      comment:
        - color: red
          content: '(Warning: This choice is irreversible. Ensure your bond with Suzuka is strong enough before proceeding)'
      lines:
        - %YOU% exhales a shuddering breath.
        - acc: 1
          content: "「Just promise me: the moment you cross the wire, you come straight back to me...」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%... Thank you! I swear, I will return to you safe and whole!」
        - Surrendering to her unyielding resolve, %YOU% releases her hands and leans weakly against the rail.
        - acc: 1
          content: 「Go... go warm up, Suzuka. Let me be alone for a moment...」
        - %YOU% waves a weary hand toward the track.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%...」
        - Lingering by your side for a long time, she finally steps back onto the turf with heavy footsteps.
        - acc: 1
          content: 「Suzuka, please... come back safe...」
        - Watching her silhouette fade into the morning mist, %YOU% mutters a silent prayer.
    - acc: 2
      content: 「No, Suzuka. We're withdrawing.」 (Appeal to Reason) # Affection -100
      lines:
        - After agonizing deliberation, %YOU% firmly denies her request.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%...」
        - Suzuka stares in shattered disbelief.
        - %YOU% tightens your grip on her hands, meeting her gaze with immovable resolve.
        - She tries weakly to pull away, but %YOU% holds fast.
        - acc: 1
          content: 「Suzuka, the jinx is real enough, and the nightmare was a warning. I will not gamble your future on luck.」
        - Coincidence or not, %YOU% refuses to let fate touch her.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I... I understand. If that is your final decision...」
        - Tearing her hands away, Suzuka turns and flees in tears.
        - acc: 1
          content: 「Suzuka...」
        - Watching her run, hearing her heartbroken sobs, %YOU% knows you wounded her deeply.
        - But at least she will stay whole and safe...
    - if: era.get('love:2') >= 90
      acc: 3
      content: Pull her into a tight embrace. (Appeal to Emotion) # Affection -50
      lines:
        - Saying nothing, %YOU% steps forward and pulls Suzuka fiercely into %YOU%'s arms.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%?」
        - Her eyes widen in shock.
        - acc: 1
          content: 「Suzuka, you are the person I love most in this world. I... I can't...」
        - Memories of moonlight strolls, whispered confessions, and stolen kisses flood %YOU%'s mind.
        - She isn't just your trainee; she is your partner, your world.
        - You cannot risk losing her—not for any glory on earth.
        - Choked with tears, %YOU% can say no more, burying your face into her hair as warm tears blur your vision.
        - Suzuka stands utterly frozen. It is the first time she has ever seen her pillar of strength weep so openly.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%...」
        - Watching the dream she bled for dissolve into mist breaks her heart, yet feeling the depth of %YOU%'s love, she gently brings her arms around %YOU%'s neck.
        - Leaning into %YOU%'s chest, she weeps softly.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I won't go... If seeing me run brings you this much pain, then I won't run... You matter more to me than any race in the world...」
        - Holding each other tight amidst the falling tears, the bitter choice finally reaches peace.

wing_clipped:
  title: Clipped Wings
  lines:
    - Race day arrives, and %YOU% accompanies Suzuka deep into Tokyo Racecourse paddock until track officials politely stop %YOU%.
    - content:
        - fontWeight: bold
          content: Track Official
        - 「Trainers must proceed to the viewing boxes from here...」
    - %YOU% ignores the instructions, watching Suzuka's retreating figure.
    - She walks without looking back, disappearing into the tunnel.
    - Heading to the stands, %YOU% finds your seat—horrifyingly identical to the vantage point from your nightmare.
    - The trumpets sound, and eighteen runners file into the gates.
    - The gates snap open!
    - %CHARA% surges to the lead in an instant, commanding the front.
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Silence Suzuka bursts to the lead! Setting an extraordinary pace!」
    - %YOU%'s hands shake violently; the commentary, the stride, the split times—it is all replaying exactly as in the nightmare.
    - Rounding the bend, she glides past the crowd as the stands erupt in cheers.
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Approaching the giant zelkova tree!」
    - A familiar stab of chest pain strikes!
    - Unable to wait another second, %YOU% shoves past screaming spectators, vaults the railing, and hits the turf.
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Wait! Silence Suzuka has slowed down behind the zelkova tree!」
    - "Ears deaf to the world, %YOU% sprints full tilt along the turf course:"
    - acc: 1
      content: 「Suzuka! Suzuka!」
    - Dodging past startled runners, %YOU% rounds the zelkova tree.
    - What had to happen... happened.
    - Yet because %YOU% sprinted early, you arrive just in time.
    - Suzuka is wavering on the turf, her left foreleg shattered, but her lingering willpower keeps her from crashing down completely.
    - acc: 1
      content: 「Suzuka!」
    - Diving forward, %YOU% catches her by the waist, gently cradling her broken leg off the ground before she hits the turf.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... I'm... so sorry...」
    - Seeing %YOU%, her exhausted eyes close, and she slumps safely into %YOU%'s arms.
    - Medical crews rush over with sirens wailing. %YOU% mechanically helps load her onto the ambulance, watching it speed away toward the emergency clinic.
    - Standing alone on the empty turf, %YOU% stares into the distance, numbness enveloping your soul.

tenn_sho:
  title: The Promise of Safe Return
  lines:
    - After countless trials and tribulations, the Tenno Sho Autumn finally arrives.
    - Accompanying Suzuka deep into the paddock tunnel, %YOU% is stopped by officials.
    - Watching her walk away, %YOU% holds %YOU%'s breath.
    - Suddenly, she halts, turns around, and jogs back toward %YOU%.
    - if: era.get('love:2') < 75
      lines:
        - Stopping before %YOU%, she takes %YOU%'s hands.
        - acc: 1
          content: 「Suzuka, please... promise me you will come back safe.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I will, %CALLNAME%! Not only will I return safe and sound, I'll bring the Tenno Sho shield home with me! Watch me!」
        - Pressing %YOU%'s hand softly against her cheek, she smiles warmly before turning back toward the gates.
    - if: era.get('love:2') >= 75
      lines:
        - Diving into %YOU%'s arms, she embraces %YOU% tightly.
        - acc: 1
          content: 「Suzuka, promise me you'll come back safe.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「I swear it, %CALLNAME%! I will return to your side, shield in hand!」
        - Rising on tiptoes, she presses a sweet kiss to %YOU%'s cheek.
        - Separating blushingly from the embrace, she waves before stepping out onto the track.

tenn_sho_win:
  title: Taking Flight
  lines:
    - The atmosphere in the stands is electric.
    - Taking your seat, the setting mirrors the nightmare, yet %YOU% chooses to trust her.
    - The trumpets flare, gates open, and eighteen %UMA% explode onto the course.
    - %CHARA% seizes the front, setting a blistering runaway tempo.
    - Approaching the giant zelkova tree, %YOU%'s heart pounds furiously.
    - The pain in %YOU%'s chest strikes, but %YOU% holds fast.
    - And then—
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Silence Suzuka emerges past the zelkova tree! She is accelerating again!」
    - She conquered destiny!
    - Shattering the jinx into dust, %CHARA% streaks across the wire in a dazzling solo romp!
    - Pandemonium engulfs the stands.
    - if: era.get('love:2') >= 75
      lines:
        - %YOU% vaults over the barrier, sprinting onto the turf to meet your champion.
        - In front of tens of thousands of cheering fans, %YOU% sweeps Suzuka up into a jubilant bridal carry!
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, everyone is watching...!」
        - acc: 1
          content: 「Let them watch! Let the whole world envy me—because the girl in my arms just conquered destiny, and she's coming home with me!」
        - The stadium roars with whistle and thunderous applause. Blushing furiously, Suzuka wraps her arms around %YOU%'s neck, raining sweet kisses across %YOU%'s face.
    - if: era.get('love:2') < 75
      lines:
        - Tears of overwhelming relief stream down %YOU%'s face.
        - Suzuka jogs up with a bright, teasing smile.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, are you crying? I brought home the victory safe and sound just like I promised!」
        - %YOU% gives her a beaming thumbs-up, feeling an immense mountain lift from your shoulders.
        - The Tenno Sho Autumn was won.

tenn_sho_lose:
  title: Unbroken
  lines:
    - The atmosphere in Tokyo Racecourse is electric as the crowd packs the stands.
    - An endless hum of chatter fills the air, leaving %YOU% with a thumping headache.
    - Looking around, %YOU% realizes with a shiver that your seat matches the exact location from the nightmare.
    - The trumpets blare, and the eighteen runners file into their gates.
    - The barriers open, and %CHARA% bursts forward, seizing the lead in an instant.
    - Stride by stride, the race unfolds precisely like the nightmare, hands trembling as %YOU% watches her round the bend.
    - Rounding past the crowd, the pack bears down on the giant zelkova tree!
    - content:
        - fontWeight: bold
          content: Announcer
        - 「Approaching Tokyo's famous zelkova tree! The true test begins here!」
    - "Driven by instinct, %YOU% jumps to %YOU%'s feet, roaring toward the tree with everything in your lungs:"
    - acc: 1
      content: 「Suzuka! Suzuka—!」
    - Though swallowed by the crowd, that desperate cry reaches her ears!
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「The giant zelkova tree... where %CALLNAME% warned me...」
    - Plunging into its shadow, her left leg suddenly goes completely numb!
    - At top speed, losing footing means a fatal wipeout.
    - Despair grips %CHARA%—until she hears %CALLNAME%'s distant, desperate voice echoing over the roar of the crowd.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... I promised you I would bring back the victory!」
    - Willpower igniting like wildfire, she stomps her foot hard into the turf, forcing feeling back into the leg through sheer agonizing pain!
    - Stride by agonizing stride, she fights through the numbness until control returns completely as she bursts from the shadow of the tree.
    - But in that critical struggle, she surrendered the front; a rival sweeps past to claim first!
    - Despite losing the top spot, Suzuka stays on her feet, crossing the wire in second place, safe and whole!
    - Trembling with relief, %YOU% rushes to meet her.
    - Holding her safe in %YOU%'s arms, no trophy on earth compares to her living breath.

tenn_sho_miss:
  title: What Might Have Been
  lines:
    - Having scratched from the Tenno Sho Autumn, %YOU% and Suzuka watch the race from the trainer's office monitor.
    - As the field rounds the giant zelkova tree, a runner from another stable missteps and suffers a tragic breakdown.
    - A horrified hush falls over the room.
    - Suzuka stares at the screen with wide, shaking eyes, realizing that if she had run that suicidal pace, that fate would have been hers.
    - Turning to %YOU% with tears welling in her eyes, she collapses into %YOU%'s arms.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... thank you for saving me...」
    - Holding her close, %YOU% strokes her hair, knowing that protecting her was the greatest victory of all.

third_step_win:
  title: The Fated Third Step - Shield of Glory
  lines:
    - Sometime after that legendary Tenno Sho Autumn, the Trainer's office door was tapped by a familiar knock.
    - %YOU% quickly rose and opened the door for Suzuka.
    - A faint blush brushed her cheeks as she caught sight of %YOU%. Smiling softly, she revealed a cherished prize.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I really think this belongs in %CALLNAME%'s office rather than mine.」
    - %YOU% stared wide-eyed as Suzuka held out none other than her Tenno Sho Shield of Honor.
    - acc: 1
      content: 「This shield is your hard-won triumph, Suzuka. It wouldn't be right sitting here—you should take it back to the dorm...」
    - %YOU% waved your hands to gently turn it away.
    - But Suzuka was already setting the heavy shield reverently upon your wall shelf, perfectly centered.
    - Seeing she had no intention whatsoever of taking it back, %YOU% swallowed the remaining protests.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I truly mean it, %CALLNAME%. You deserve to keep this far more than I do.」
    - Stepping closer, she placed both hands on %YOU%'s shoulders, her emerald gaze unblinking and sincere.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I came so close to that tragedy you dreamed of... If your voice hadn't pulled me back at that exact second, I never would have made it home.」
    - %YOU% recalled your raspy, ruined throat from that frantic cry from the stands.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「So please, %CALLNAME%, let this shield carry my deepest gratitude—for every moment you believed in me, encouraged me, and protected me.」
    - Faced with such pure, earnest devotion, %YOU% had no choice but to accept her shield with a full and grateful heart.

third_step_lose:
  title: The Fated Third Step - Defeated But Unbowed
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, are you in?」
    - A few days after that historic Tenno Sho Autumn, Suzuka knocked on the office door.
    - %YOU% rose quickly to welcome her inside.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「You don't look too swamped right now. Would you sit and chat with me for a bit?」
    - Sensing what was weighing on her mind, %YOU% pulled up a chair beside hers.
    - Sure enough, the conversation soon turned toward her defeat in the final furlongs.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「No matter how much I reflect on it, it still stings so much, %CALLNAME%...」
    - Looking at her subdued, drooping ears, %YOU% felt a wave of bittersweet affection.
    - Every ounce of sweat and sacrifice she poured into that race had unfolded before your eyes. Were it not for that terrifying jinx under the tree, the shield would unquestionably have been hers.
    - Yet to %YOU%, seeing her overcome that perilous crisis and step off the turf whole and healthy was worth infinitely more than any first-place ribbon.
    - acc: 1
      content: 「It's all right, Suzuka. To me, your safety matters more than any trophy in the world...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%...」
    - Looking up into %YOU%'s steady, warm eyes, the lingering sorrow in her chest began to dissolve.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Thank you... Hearing you say that makes everything feel so much lighter. Next time, I promise I'll bring back a victory we can celebrate together!」

third_step_miss:
  title: The Fated Third Step - All Roads Converge
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, are you there?」
    - Several days after the Tenno Sho Autumn passed, Suzuka came knocking at the office.
    - %YOU% opened the door, only to be taken aback by her pale face and dark under-eye circles, as if she had endured a harrowing trial.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... I came to apologize to you.」
    - Her sudden apology caught %YOU% completely off guard.
    - acc: 1
      content: 「Whatever it is, let's step inside first. Sit down and catch your breath.」
    - %YOU% poured a cup of warm water and had her sit down comfortably.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, last night, I...」
    - As Suzuka quietly recounted her night, %YOU%'s jaw dropped in sheer astonishment.
    - Last night, she had dreamt the exact same horrific nightmare that had tormented %YOU%.
    - The only difference was that she lived it from her own perspective—feeling the bone give way, the agony, and the despair of a shattered leg on the grass.
    - At a loss for words, %YOU% listened in stunned silence.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「That's why I had to apologize... I was so stubborn, completely blind to how desperately you were trying to protect me...」
    - Trembling slightly, she stood up and bowed deeply to %YOU%.
    - acc: 1
      content: 「Suzuka, you never need to apologize for wanting to run. If our positions were reversed, I wouldn't have given up either just because of a bad dream.」
    - A frail smile broke through her tearful expression, though she insisted on making her apology heartfelt.
    - In the end, %YOU% gently accepted, and the bond between you emerged stronger and deeper than ever before.

ending:
  title: The Fated Finish Line
  lines:
    - Ever since the ambulance rushed the critically injured Suzuka away, she had remained unconscious in the hospital.
    - %YOU% tried visiting her time and again, only to be turned away each time by her attending surgeon.
    - Until today, when a phone call arrived announcing that Suzuka had finally opened her eyes. %YOU% dropped everything and raced to the ward.
    - divider: true
    - Doctors and nurses bustled through sterile hallways thick with the sharp scent of antiseptic, making %YOU%'s head spin.
    - Catching her attending physician, %YOU% pressed for an update on her condition.
    - content:
        - fontWeight: bold
          content: Head Surgeon
        - 「Her injury was severe. The bone shattered under immense speed, tearing into the arterial vessels of her leg.」
    - content:
        - fontWeight: bold
          content: Head Surgeon
        - 「Fortunately, you caught and stabilized her immediately, preventing catastrophic secondary trauma from hitting the turf. Otherwise, amputation would have been the best-case scenario.」
    - A cold shudder ran straight down %YOU%'s spine.
    - content:
        - fontWeight: bold
          content: Head Surgeon
        - 「Had you been even seconds slower, she very well might have bled out right on the course.」
    - %YOU% recalled that terrifying dream where she lay motionless across a pool of red.
    - Thank heaven that warning had been granted, allowing you to reach her before tragedy claimed her life.
    - content:
        - fontWeight: bold
          content: Head Surgeon
        - 「Her postoperative recovery is proceeding smoothly, but... I must be blunt. She will never be able to run competitively again.」
    - Though expected, the words hit like a physical blow.
    - For an %UMA%, being stripped of the ability to run felt like mourning a part of her very soul...
    - The doctor said no more, quietly leading %YOU% to her room.
    - Through the small window in the door, %YOU% saw Suzuka sitting lifelessly on the white bed, her pale hand gently tracing her bandaged left leg. Your heart shattered into pieces.
    - %YOU% knocked softly and slipped inside.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Ah... %CALLNAME%!」
    - The moment she realized it was %YOU%, a fleeting spark of life returned to her eyes.
    - But just as quickly, her head dropped, fingers tenderly brushing against her splinted leg.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%... I'm so sorry... I was so reckless, so selfish... and now I've broken everything we built...」
    - Her voice cracked, tears spilling over until quiet sobs shook her shoulders.
    - %YOU% took her trembling, ice-cold hand into yours, your throat tight with remorse.
    - acc: 1
      content: 「If only I had held your hands tighter and refused to let you go... you wouldn't be trapped in this quiet bed... I'm so sorry, Suzuka...」
    - Deep regret washed through %YOU%—if only you had fought harder against her resolve, she wouldn't be confined to this quiet bed...
    - Neither spoke for a long time, hands intertwined in shared grief, until the doctor gently asked %YOU% to let her rest.

christmas:
  lines:
    - Sitting at the desk, %YOU% looked up toward the window.
    - Without realizing it, heavy snow had begun drifting across Tracen Academy, the silent white flakes deepening the tranquil winter stillness.
    - Watching the quiet world outside, %YOU% let out a gentle sigh.
    - Today was Christmas Eve of Suzuka's Senior Year. It meant nearly three full years had flown by since the two of you first met.
    - Across all those seasons, win or lose, her silhouette was permanently engraved into %YOU%'s heart.
    - %YOU% stood up, struck by a sudden longing to take her out for a walk in the snow.
    - At that very instant, a soft knock tapped at the door.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, are you in?」
    - %YOU% pulled the door open in a flash, catching her completely by surprise.
    - Bundled in a warm winter coat and a soft knit scarf, she looked fully prepared for the cold.
    - acc: 1
      content: 「Suzuka, would you like to take a walk together?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, would you like to take a walk together?」
    - Speaking in unison, both of you paused in disbelief before bursting into laughter.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「What a wonderful coincidence! In that case, let's go!」
    - divider: true
    - Stepping outside, the snowfall had gradually tapered off.
    - While %YOU% felt a touch of regret that the flakes had stopped falling, Suzuka seemed delighted by the untouched snow underfoot.
    - Stepping across the powdery blanket, she took a few light jogging strides, reveling in the quiet crunch beneath her boots.
    - acc: 1
      content: 「You really love snowy days, don't you, Suzuka?」
    - Turning back with a radiant smile, her cheeks were tinged with a delicate pink.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I don't think I've ever told you about my childhood, have I? It was actually the silence after a heavy snow that made me fall in love with running.」
    - Seeing her eager to share memories of her youth, %YOU% listened with rapt attention.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I was very little then, seeing snow that deep for the first time. The entire world was so quiet, blanketed in pure, spotless white...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I took a few steps, and aside from the soft crunch beneath my boots, there wasn't a single sound in the world.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「So I began to jog, then sprinted faster and faster. The white world swirled around me, as if heaven and earth belonged to me alone.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I fell hopelessly in love with having that pristine world all to myself. Later in races, I realized the view in front of the leader is just like that...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Once you've experienced that untouched horizon, you never want to give it up to anyone.」
    - Looking at the quiet peace in her smile, %YOU% felt an overwhelming fondness.
    - acc: 1
      content: 「And from now on, you'll never have to walk through that snow alone.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Yes. Sharing that view with %CALLNAME% is the greatest happiness I could ever ask for.」

hope:
  title: Glimmer of Hope
  lines:
    - Sitting at the desk, %YOU% looked up toward the window.
    - Snow fell gently across the courtyard, cloaking the world in pure, quiet white.
    - Gazing at the winter scene, %YOU% couldn't help letting out a heavy sigh.
    - Christmas Eve of the Senior Year had arrived. Three years together had brought so much joy, yet on the very eve of fulfillment, an accident had severed her racing path...
    - Feeling a knot in your chest, %YOU% headed to the hospital once more.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「It's snowing, %CALLNAME%.」
    - Propped up against the pillows, she gazed out the window, mesmerized by the falling snow. Even as %YOU% reached her bedside, she didn't turn around right away.
    - Then, in a soft, dreamy voice, she began reminiscing about her past.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I don't think I ever told %CALLNAME% about my childhood, did I? It was the quiet after a deep snowfall that made me love running in the first place.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I was very little, seeing snow like that for the first time... Everything was white and untouched...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I ran and ran, and the world seemed to belong only to me. That's why I always wanted to stay out in front...」
    - Her wistful nostalgia made %YOU%'s heart ache all the more.
    - Turning her face, %YOU% saw her eyes were rimmed in red, as though she had been weeping in secret.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I can't run like that anymore, can I, %CALLNAME%?」
    - Her trembling voice pierced straight through %YOU%.
    - Stepping forward, %YOU% held her shoulders and looked straight into her glistening eyes.
    - acc: 1
      content: 「Suzuka, your time on the turf may be over, but our journey is only just beginning. No matter where we walk from here, I promise we will find new, beautiful horizons together.」
    - Suzuka looked at %YOU%'s unwavering expression, tears finally spilling down her cheeks.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Will you... really stay with me? Even like this?」
    - acc: 1
      content: 「Always. That is a promise I will never break.」
    - Wrapping her arms around %YOU%'s neck, she buried her face into %YOU%'s shoulder, the first glimmer of hope blooming softly in her weary heart.

invincible:
  title: The Peerless Legend
  lines:
    - Having swept through every G1 contest undefeated, Silence Suzuka carved her name into racing lore as an untouchable miracle of the turf.
    - Standing on the Grand Prix stage beneath a roar of standing applause, she held the championship trophy high before running straight into %YOU%'s waiting arms.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「We did it, %CALLNAME%! Every horizon ahead was ours from start to finish!」

better_ending:
  title: Shared Horizon
  lines:
    - Having conquered her trials, Suzuka stands beside %YOU% on the grassy hill overlooking the academy.
    - Intertwining her fingers with yours, she rests her head upon your shoulder, her future glowing with limitless promise.

good_ending:
  title: Toward Tomorrow
  lines:
    - Concluding her Senior campaign with pride, Suzuka smiles warmly as you review the journey traveled together, ready to welcome whatever tomorrow holds.

normal_ending:
  title: Quiet Departure
  lines:
    - Hanging up her racing silks with quiet grace, Suzuka bows respectfully to %YOU%, grateful for every mile shared upon the track.

crazy_fan:
  title: The Dedicated Admirer
  lines:
    - One afternoon, an ardent fan approached the office bearing a meticulously bound album chronicling every stride of Suzuka's career.
    - Seeing her own journey preserved with such reverence, tears of humble gratitude warmed her eyes as she thanked %YOU% for making it all possible.

run_together:
  title: Running Side by Side
  lines:
    - Noticeable dark circles hung under Suzuka's eyes during morning roll call.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「No way! I... I slept plenty, really!」
    - Startled by %YOU%'s sharp questioning, she blurted out an instinctive denial.
    - Seeing her clearly exhausted state, %YOU% had no intention of buying her excuses.
    - Rolling %YOU%'s eyes in fond exasperation, a playful scheme came to mind.
    - acc: 1
      content: 「All right, then let's begin today's drills.」
    - divider: true
    - Training wrapped up smoothly. %YOU% walked Suzuka back to the dormitory gates, exchanged goodnights, and then immediately slipped into the shadows nearby to wait.
    - Sure enough, barely ten minutes passed before Suzuka emerged from the dorm in full workout gear.
    - Peering carefully left and right, she trotted with smug satisfaction toward the track.
    - Sneaking up behind her, %YOU% reached out and gently covered her eyes with both hands.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Wah!」
    - acc: 1
      content: 「Guess~ who~?」
    - Even with %YOU%'s comically high falsetto, Suzuka recognized the touch immediately, slumping in defeat.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Ugh... I'm sorry, %CALLNAME%...」
    - acc: 1
      content: 「Caught red-handed! What does the defendant have to say for herself?」
    - %YOU% thoroughly enjoyed her flustered, sheepish expression.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I won't do it again, %CALLNAME%... please don't be mad...」
    - A much more entertaining idea struck %YOU%.
    - acc: 1
      content: 「Well, since you're already suited up, go ahead and run!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Eh?!」
    - Staring in disbelief, she waited for the punchline.
    - "With a sly grin, %YOU% laid down two non-negotiable ground rules:"
    - acc: 1
      content: "「Rule one: I'm running with you. Rule two: you are strictly forbidden from passing me.」"
    - Suzuka blinked, utterly baffled. But her craving for the track won out over her suspicion.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Lead the way, then!」
    - Out on the deserted midnight track, %YOU% maintained an agonizingly leisurely jog. Suzuka trotted obediently behind, her patience fraying by the second.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME% is jogging so slowly! I'm a runaway front-runner, and I'm stuck trailing behind at a snail's pace...!）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （It feels so agonizing! I want to burst past and tear down the straightaway!）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （Ngh, stop overthinking... Worrying drains energy too! Why am I feeling tired already...?）
    - acc: 1
      content: 「Careful there, Suzuka—your pace is creeping up.」
    - Glancing over your shoulder, %YOU% called out as her steps quickened involuntarily.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「S-Sorry!」
    - Hearing her breath grow ragged with mental exhaustion, %YOU% suppressed a grin, leading her around the track lap after lap until she was thoroughly spent.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Haah... haah... How can %CALLNAME% look so relaxed... while I'm completely wiped out...?」
    - Guiding her to a bench, %YOU% let her catch her breath.
    - acc: 1
      content: 「So, will you ever sneak out behind my back to run at night again?」
    - %YOU% put on a mock-stern expression.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Never again, I swear! I'm sorry!」
    - She buried her face in her mittens, unable to meet your gaze.
    - acc: 1
      content: 「Good. Since you've learned your lesson, you may run two free laps all by yourself.」
    - Her ears shot straight up.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Really?! Yay!」
    - Leaping up, she rocketed onto the turf in the blink of an eye.
    - Watching her vanish joyfully into the cool night air like a shooting star, %YOU% smiled warmly.
    - That ought to cure her secret midnight escapades for quite some time.
