# @file Silence Suzuka - Daily
# @author 牛蛙煲
# @author Katze (translator)
select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, I've finished all my warm-ups. I'm ready whenever you are.」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, should I go run a couple of laps first?」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, you seem to be in high spirits today. I hope that good mood stays with you all day long.」
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - 「Um, Suzuka...?」
        - %YOU% tries gently to wake Suzuka, but she appears to be fast asleep.

good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「If %CALLNAME% believes in the way I run, I'll follow it through with absolute conviction.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「Things I'm not good at... as long as %CALLNAME% is with me, I know I can overcome them.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「The view from the very front... I won't surrender it to anyone.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「The morning breeze feels wonderful as always... %CALLNAME%, shall we get started right away?」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「I've already eaten breakfast. You can't train properly without fueling up first, after all.」
    # STATUSNAME:1 = 熬夜
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「I'm so sorry, %CALLNAME%... After practice yesterday, the night breeze felt so soothing that I ended up running just a little longer...」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALL_1% gave me a jigsaw puzzle of a snowy landscape. It was so captivating that I lost track of time and stayed up until morning... I'm really sorry...」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「Even though I got into bed on time last night, I kept thinking about today's training drills. I got a little too excited and couldn't fall asleep...」

good_night:
  sync: true
  lines:
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - if: era.get('status:2:39') === 0
          content: 「Um, Suzuka...?」
        - %YOU% tries gently to wake Suzuka, but she appears to be fast asleep.
        - Left with no choice, %YOU% personally carries Suzuka back to the dormitory.
        - acc: 1
          content: 「Sorry to trouble you again...」
        - %YOU% entrusts Suzuka to her dorm leader and watches her being escorted inside.
        - %YOU% lets out a small sigh, resolving to manage the training intensity more carefully next time.
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「Thank you for walking me all the way here, %CALLNAME%! See you tomorrow!」
        - %YOU% walks Suzuka to the dormitory entrance, and %CHARA% offers %YOU% a warm, smiling thank-you.
        - %YOU% waves back to Suzuka.
        - Only after watching Suzuka disappear inside the dorm building does %YOU% turn to head home.

good_night_sex:
  - After training wraps up, %YOU% prepares to walk Suzuka back to the dormitory as usual.
  - To %YOU%'s surprise, Suzuka doesn't simply walk along; instead, she opens her arms and wraps them tightly around %YOU%.
  - color: %COLOR%
    content:
      - fontSize: bold
        content: Silence Suzuka
      - 「%CALLNAME%, there's still so much I want to talk to you about. I don't want to say goodbye just yet...」
  - Suzuka buries her cheek entirely into %YOU%'s chest, and her usually quiet tail gently twines around %YOU%'s calf.
  - %YOU% gently caresses Suzuka's back and pauses in thought.
  - acc: 1
    key: sex
    content: 「All right, then I'll stay with you a while longer.」
    lines:
      - %YOU% tenderly tilts Suzuka's chin upward, meeting her passionate gaze before pressing a kiss to her lips.
      - Neither of you knows how much time slips past before your lips part with lingering reluctance.
      - 「Suzuka, let's find somewhere else. It's not appropriate here.」
      - Suzuka continues clinging tightly to %YOU%, giving a soft, compliant nod.
  - acc: 2
    content: 「It's getting late. For the sake of tomorrow's training, you need your rest, Suzuka.」
    lines:
      - if: d.check !== 2
        lines:
          - Hearing %YOU%'s gentle refusal, Suzuka immediately releases %YOU% and gives %YOU%'s chest a playful little tap with her fist.
          - color: %COLOR%
            content:
              - fontSize: bold
                content: Silence Suzuka
              - 「%CALLNAME%, you really have no sense of romance...」
          - With a soft huff, Suzuka turns on her heel and walks inside.
          - %YOU% scratches the back of your head and quickly jogs after her to say a proper goodnight.
      - if: d.check === 2
        lines:
          - Hearing %YOU%'s gentle refusal, Suzuka only tightens her embrace further.
          - color: %COLOR%
            content:
              - fontSize: bold
                content: Silence Suzuka
              - 「I'm not letting %CALLNAME% get away that easily today...」

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Um, I can hardly hold back the urge to go run a few laps. Can we start now?」
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, training right now is going to yield twice the results with half the effort!」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, I'm feeling great today! What kind of drills are we tackling?」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「What kind of track will I get to run on today? I'm so excited...」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Um, what's on the agenda for today?」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Let's give it our all today, just like always.」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Ngh... I just can't seem to muster any energy. Did I run too long yesterday...?」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I feel a bit off... but I can't give up just yet!」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I can't bring myself to focus at all...」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「My body feels so heavy... It'll be fine, won't it? Probably?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Yesterday %CALL_56% gave me such a huge golden sea bream charm as a lucky talisman... but where on earth am I supposed to put it...? Ugh...」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I asked %CALL_10% for tips on sprinting races, and %SEX% said something about 'Enjoy spirit desu⭐'... I didn't understand a single word.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Actually, %CALL_18% is quite a fun person, especially when I imitated %CALL_1% yesterday by calling her 'senpai'... Hehe...」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「The city is crowded with towering buildings everywhere. Every now and then, I want to run freely across wide open plains just like when I was little.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「As memories pile up, the vistas before my eyes grow richer and fuller... And now, %CALLNAME% is right there among them.」
  # FLAGNAME:2 = 当前月
  - if: era.get('flag:2') >= 3 && era.get('flag:2') <= 5
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「During my morning run today, I spotted wildflowers and fresh green sprouts by the roadside. It brightened my whole day.」
  - if: era.get('flag:2') >= 6 && era.get('flag:2') <= 8
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Summer mornings aren't too hot, but every time I finish a dawn run there are little gnats caught in my hair... It's so bothersome...」
  - if: era.get('flag:2') >= 9 && era.get('flag:2') <= 11
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「The autumn breeze is wonderfully crisp. Running in this kind of weather feels absolutely amazing.」
  - if: era.get('flag:2') >= 12 || era.get('flag:2') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「On the way here, I saw a frozen pond and felt this sudden urge to run across the ice... I know it's dangerous, so I was only daydreaming!」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「A gift for me? Thank you so much, %CALLNAME%!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Thank you for the present. I'll treasure it dearly.」

out_church:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「It's surprisingly lively here. Everyone must have dreams they're desperate to see come true.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「As long as you pray with genuine sincerity, your wishes will surely come true!」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Fishing requires quiet patience. It feels completely opposite to running, yet both demand so much discipline.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, look, look! What a huge fish!」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「This feeling... is truly wonderful. I hope %CALLNAME% will come on another walk with me next time.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Um, %CALLNAME%, I'd love to go for a quick jog. Would you mind waiting here for me just a moment?」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Strolling side by side with %CALLNAME% is such pure happiness.」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「This is surprisingly fun.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I heard many senior runners use this to practice their Winner's Stage coordination.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, I really want that plushie... Could you win it for me? Please?」

o_s_drawing:
  - The shopping district is hosting a lottery raffle. Noticing Suzuka's curious gaze, %YOU% hands her a raffle ticket obtained earlier.
  - Suzuka whispers her thanks to %YOU%, stepping eagerly toward the booth with quiet excitement.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Silence Suzuka
          - 「Hehe, the prize is a whole crate of carrots!」
      - Beaming, Suzuka unfolds the ticket to show %YOU%.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Silence Suzuka
          - 「Some for %CALLNAME%, some for Spe-chan...」
      - Suzuka seems in wonderful spirits.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Silence Suzuka
          - 「...Oh. A consolation prize—just a pocket pack of tissues...」
      - Suzuka tucks the prize away with a slightly crestfallen pout.

o_s_ktv:
  - %YOU% brings %CHARA% to a karaoke room.
  - After singing a few tracks, %YOU% shyly passes the microphone over to Suzuka, who has been waiting with an encouraging smile.
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「Hitori miageta yozora, tada shizukana sekai~」
  - Hearing her clear, pure voice, %YOU% is completely enchanted.

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「The ending was so moving... but sitting in one place for two hours made my legs feel a little stiff.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「The race scene in that film was exhilarating! If that were me on that track, I definitely would have opened up an even wider lead!」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「The carrot soup here is wonderfully flavorful. %CALLNAME%, you should definitely try a spoonful.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Eating quietly like this with %CALLNAME% makes even simple food taste so special.」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Being out together like this... it really feels like a proper date, doesn't it?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Every place looks completely different when I'm walking through it with %CALLNAME%.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I don't need to go anywhere fancy... As long as I'm holding %CALLNAME%'s hand, every moment is precious to me.」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Running shoes wear out so quickly. Thank you for helping me pick out a new pair today, %CALLNAME%!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Look at this green ribbon. %CALLNAME%, do you think it would look good on my ears?」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Standing inside this ancient tree hollow, everything feels so quiet and serene... just like running out in front.」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Sharing this quiet scenery with %CALLNAME% fills my heart with peace.」

s_r_lunch:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「I made a carrot bento for lunch today. Let's eat together under the shade, %CALLNAME%!」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「I baked some carrot cookies for you, %CALLNAME%. Please enjoy them while they're still warm!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Cooking in the trainer's kitchen feels so cozy... It almost feels like being at home.」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Analyzing race footage with %CALLNAME% helps me understand my pacing habits so much better.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Reviewing the track layout together gives me complete confidence for the upcoming race.」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Everything is set for tomorrow's training. We'll be ready the moment the sun comes up!」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Resting quietly beside %CALLNAME% is the best way to recharge after a hard workout.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「Listening to the gentle scratching of %CALLNAME%'s pen on paper makes me feel so wonderfully peaceful.」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「A board game? I haven't played many before, but if it's with %CALLNAME%, I'd love to try!」

valentine:
  - One day, as %YOU% is writing at the office desk, a soft knock sounds at the door.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, are you in?」
  - It's Suzuka's voice.
  - %YOU% stands up and opens the door.
  - acc: 1
    content: 「Suzuka, what is it?」
  - With both hands tucked behind her back, Suzuka watches %YOU%'s puzzled look, a tender smile curling her lips.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Happy Valentine's Day, %CALLNAME%~」
  - Bringing her hands forward, she presents an elegantly wrapped bento box.
  - As she gently undoes the ribbon, two beautifully crafted strawberry daifuku appear before %YOU%'s eyes.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「I wasn't sure what sweets you liked best, so I made my personal favorite—strawberry daifuku! I really hope you like them!」
  - It takes %YOU% a long moment to realize that today is indeed Valentine's Day.
  - Seeing %YOU% stand there in a daze, her smile widens playfully, pressing the box right into %YOU%'s hands.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Please enjoy them right here, %CALLNAME%. I'd love to hear your honest review of my cooking.」
  - With that, Suzuka pulls up a chair, tilts her head with resting chin, and watches %YOU% with sparkling eyes.
  - acc: 1
    content: 「Well, thank you very much, Suzuka.」
  - Under her intent, expectant gaze, %YOU% obediently takes a bite.
  - Before %YOU% even realizes it, the first strawberry daifuku has completely vanished.
  - Reaching instinctively for the second, %YOU% pauses in pleasant surprise.
  - Who knew your speedster trainee had such an exceptional talent for confectionery?
  - Looking at Suzuka daydreaming with chin in hand, then down at the remaining treat, %YOU% decides to—
  - acc: 1
    content: 「Why don't you try your own handiwork too, Suzuka?」
    lines:
      - Sweets really are best enjoyed together.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Eh? Don't worry about me! I made both of them specially for %CALLNAME%!」
      - Suzuka waves her hands in hasty protest.
      - acc: 1
        content: 「Come on, Suzuka—open wide~」
      - Saying nothing more, %YOU% lifts the strawberry daifuku and brings it gently to her lips.
      - Unable to dodge, Suzuka parts her lips shyly and takes a dainty bite.
      - acc: 1
        content: 「How is it, Suzuka? Your own cooking is wonderful, isn't it?」
      - Suzuka turns her blushing face away, deliberately playing coy.
      - Grinning, %YOU% guides the treat around to stay right in front of her.
      - After playful teasing back and forth, %YOU% coaxingly feeds her the entire daifuku.
  - acc: 2
    content: It's too delicious—have the second one too.
    lines:
      - The confectionery is irresistible, so %YOU% decides to polish off the second daifuku as well.
      - Sure enough, that first bite is pure heaven.
      - Before long, the second daifuku cleanly disappears into %YOU%'s stomach.
      - Even after finishing both, %YOU% still craves another taste, turning an eager gaze toward Suzuka.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Hehe, the way %CALLNAME% eats is so adorable.」
      - Catching %YOU%'s longing look, Suzuka chuckles warmly.
      - %YOU% scratches %YOU%'s cheek sheepishly, usually never eating with such unbridled gusto.
  - %YOU% tidies the bento box and returns it to Suzuka.
  - acc: 1
    content: 「Your cooking is truly incredible, Suzuka. I had no idea until today.」
  - %YOU% looks at her with lingering relish.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Please don't stare at me with hungry eyes like that, %CALLNAME%! I am not a strawberry daifuku!」
  - Pouting her cheeks, Suzuka feigns indignation.
  - 「What I mean is, with cooking skills like this, whoever gets to spend their life with you will be blessed with pure happiness.」
  - Teasing her softly, %YOU% watches a deep crimson bloom across her face.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「You're not allowed to make jokes like that, %CALLNAME%! I'm really going to get mad!」
  - Caught once again by her flustered charm, it takes %YOU% quite some gentle coaxing to bring her sweet smile back.

halloween:
  - Today is Halloween, the night of ghosts and tricksters.
  - On the way to the office, %YOU% passed various wonderfully costumed characters, a few almost giving %YOU% a proper fright.
  - Reaching the office safely, %YOU% sits down to work on upcoming training schedules.
  - Though staring at the planner, %YOU%'s mind is completely elsewhere.
  - In %YOU%'s drawer sits a specially wrapped gift box of premium candies, reserved for a certain someone. Now all that's left is waiting for the special delivery...
  - A sudden knock rattles the door, nearly making %YOU% drop the pen.
  - Catching %YOU%'s breath with eager anticipation, %YOU% swings the door open—
  - acc: 1
    content: 「Come in, Suzu—」
  - But it isn't Suzuka outside.
  - content:
      - fontWeight: bold
        content: %UMA% A
      - 「Trick or treat!」
  - A charming %UMA% dressed up as a cute little monster greets %YOU%.
  - Blinking back to reality, %YOU% smiles warmly and grabs a handful of assorted bulk treats from the drawer.
  - Dropping a generous helping into her pumpkin basket, %YOU% watches her bow with delighted thanks before scampering off to knock on the next office.
  - Exhaling a long breath, %YOU% sinks back into the chair.
  - Before long, another knock sounds.
  - content:
      - fontWeight: bold
        content: %UMA% B
      - 「Trick or treat!」
  - Still not Suzuka; handing out candy, a tinge of disappointment touches %YOU%'s smile.
  - Hour by hour, Halloween night slips by. Multiple groups of students visit the office, yet the one %YOU% waits for never appears.
  - Watching the hour hand creep toward midnight, %YOU% sighs, preparing to pack up and call it a night.
  - Right then, a soft, familiar knock taps against the wood.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, are you... oh, I shouldn't have spoken out loud...」
  - Heart leaping with joy, %YOU% pulls the door open.
  - Standing on the threshold is Suzuka, adorably dressed as a little witch.
  - Noticing her flushed cheeks and slightly ragged breath, %YOU% shakes your head with affectionate amusement.
  - acc: 1
    content: "「Let me guess: you went running again, didn't you?」"
  - Suzuka freezes, her blush deepening in an instant.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「I'm so sorry, %CALLNAME%! I meant to jog straight here, but I lost track of time and ran way too far...」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「Ah, right! Um... trick or treat...?」
  - Remembering her official mission, she looks up with an endearing pout.
  - Smiling warmly, %YOU% pulls the velvet gift box from the drawer and places it gently into her hands.
  - And so, this year's Halloween concludes in a wonderfully sweet and tender warmth.

forbid_running:
  title: Running Forbidden!
  lines:
    - acc: 1
      content: 「It's way too late! This has crossed the line!」
    - %YOU% scolds the head-bowed Suzuka in frustration.
    - It is already late at night, and a sheen of fresh sweat clings to Suzuka's brow—she clearly just finished a run.
    - acc: 1
      content: 「Who said they were just making a quick run to the convenience store and stayed out for hours?!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I'm so sorry... The moon was just so breathtaking tonight, I couldn't resist...」
    - acc: 1
      content: 「No excuses! This is completely unacceptable! Your punishment is three full days of no running. Stay home and reflect!」
    - Suzuka slumps to the floor as if struck by lightning, all strength leaving her limbs.
    - Then, %SEX% suddenly lunges forward, wrapping her arms around %YOU%'s leg.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Nooo! Anything but that! I can't survive without running!」
    - Paying no heed to her tragic wails, %YOU% drags her step by agonizing step toward the bedroom, her arms still locked around %YOU%'s leg.
    - Suzuka obediently releases %YOU%, quickly washes up, changes into her sleepwear, and curls up closely at %YOU%'s side once %YOU% lies down.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Um...」
    - acc: 1
      content: 「No.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I haven't even said anything yet!」
    - acc: 1
      content: 「No means no. Suzuka, I was genuinely worried sick about you.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「All right... I'll be good. Please don't stay mad at me, %CALLNAME%...」
    - Knowing she was in the wrong, Suzuka turns and wraps her arms around %YOU%, drifting off to sleep by %YOU%'s side.
    - divider: true
      content: Next Day
      position: left
    - %YOU% steps through the front door and freezes in disbelief.
    - Rising before %YOU% is a miniature mountain of carrot hamburger steaks.
    - acc: 1
      content: 「Suzuka? Did you make all of this?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Yes! I was so terribly bored that I ended up making a whole batch without realizing it...」
    - divider: true
      content: Two Days Later
      position: left
    - %YOU% spots Suzuka holding her smartphone, spinning in endless counter-clockwise circles.
    - Looking closely, the screen shows a photograph of the racecourse.
    - acc: 1
      content: 「What are you doing, Suzuka?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「If I walk while staring at pictures of the turf, I can pretend I'm running laps!」
    - %YOU% scratches your head, unsure whether to praise her vivid imagination.
    - divider: true
      content: Three Days Later
      position: left
    - Returning home, %YOU% finds no sign of Suzuka in the living room.
    - Panic strikes—did she sneak out to run after all? But opening the bedroom door, %YOU% finds her sound asleep in bed.
    - acc: 1
      content: 「...So you spent the entire day sleeping?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Sleeping makes the day go by so much faster...」
    - %YOU% is left utterly speechless.
    - divider: true
    - Finally, the three days are about to expire. %YOU% stands near the bedroom doorway watching Suzuka, who is stationed right in front of the wall clock.
    - acc: 1
      content: 「Hey, Suzuka, shouldn't you be getting to bed at this hour?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「One minute fifty-eight... one minute fifty-seven...」
    - The second the hands tick past the appointed time, Suzuka whips around, eyes shining with boundless energy as she edges toward the front door.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「That makes three full days! Can I go out for a run now?!」
    - acc: 1
      content: 「...Do you want me to extend it by another three days?」
    - Before the words finish leaving %YOU%'s mouth, Suzuka bolts away from the doorway in an instant.
    - Then, %SEX% turns and gently wraps her arms around %YOU%.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「I endured three whole days for %CALLNAME%, you know? Doesn't %CALLNAME% owe me some kind of reward?」
    - Snuggling into %YOU%'s chest, Suzuka looks up at %YOU% with a delicate blush.
    - acc: 1
      key: sex
      content: 「All right, then let's reward your patience.」
      lines:
        - Smiling, %YOU% scoops Suzuka up into your arms and carries her into the bedroom.
    - acc: 2
      content: 「No way. This was a punishment—how does that earn you a reward?」
      lines:
        - Hearing that, Suzuka immediately slips out of %YOU%'s arms.
        - Before %YOU% can react, Suzuka hoists the flailing %YOU% right onto her shoulder and marches straight into the bedroom.

