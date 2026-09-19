# @file Oguri Cap - Daily
# @author 雞雞
# @author 雞雞 (translator)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「When I first came to the academy, I really didn't know anything... It really helped having you around.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「I have to work hard... to make everyone back home happy.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Just thinking about how there are still many Horse Girls faster than me makes my heart race...!」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Let's go eat together.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「During races, I always feel like you're running right there with me, Trainer... It really lifts my spirits.」

select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「I am Oguri Cap. I look forward to working with you.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Trainer... I'm counting on you.」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Mmh... It seems I'm a bit tired.」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Sorry, please let me rest for a bit.」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I just had a fight with Tama... But listen to me, when you talk about Ikayaki, you think of the whole grilled squid, right...?」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Hmm... Super Creek just patted my head in the hallway... Do I have bedhead...?」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:34:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I just went to lunch with Inari. She eats really fast. I feel like that's not very good for her body...」
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Hah! Hah! Whew! You mean this? I get like this when I'm in great shape. So, look forward to it!」
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「This feeling... Yeah. I'm really looking forward to training!」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I ate a lot, and I'm in good shape today too!」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Mmh... I'm in a good mood today. Let's do lots of training!」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Alright, how are we training today?」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Okay, let's do our best today too.」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「My condition is poor no matter what. Is it because I didn't get enough sleep...?」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Ugh... I can't muster any strength. Should I have eaten more...?」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Mmh... Ah, sorry. I just can't get motivated no matter what...」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「My body feels heavy lately... Maybe it's best not to do this...」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Is this really enough to eat?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Ohh! Could this be the legendary Sorrowful Rice?!」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer... add some extra topping for me, will you? ❤️ The white sauce, of course. ❤️」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer... how exactly do I use this controller?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Ugh, I lost again... If this were a real race, I definitely would have won!」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer ❤️ If I lose, you have to punish me properly, okay? ❤️」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: Oguri Cap
      - 「Is it a present? I wonder if it's food... Anyway, we can't let food go bad, so let me open it and see, Trainer.」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I'll turn everyone's wishes into my strength...!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Thank you. I can definitely feel the growth.」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「...Can I have some of your special milk energy drink, Trainer ❤️?」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「A lot has happened lately...」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Let me cut your nails for you. I may not look like it, but I'm actually quite good at it.」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Your nails are all trimmed, Trainer. Now it's time to put those fingers to use. ❤️」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「...Mmh. This exam ended before I could finish answering the questions again.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「My dream used to be to become Doteyaki... Don't change the subject? Ugh...」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer, I got a 69 on this exam... ❤️」

out_church:
  - "One day, Oguri Cap took %YOU% to a shrine near Tracen Academy... %YOU% asked curiously:"
  -
  - acc: 1
    content: 「Why did we come to the shrine?」
  -
  - %SEX% frowned and looked at the ground, her ears drooping despondently.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: Oguri Cap
      - 「Actually, I haven't been feeling very well lately...」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: Oguri Cap
      - 「No matter what I do, I'm off the mark. Basically, I'm just not in form... But I remembered Uncle Masa back home saying, 'When in trouble, pray to the gods.'」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: Oguri Cap
      - 「Plus, back in the country, I used to pray at a small shrine inside the racetrack and then win races.」
  -
  - acc: 1
    content: 「So that's why you called me here... Then let's pray together.」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: Oguri Cap
      - 「Is that okay? Thank you so much, %YOURNAME%.」

  - You both practicedly tossed the offering into the offertory box and prayed sincerely for a blessing...
  - After that, Oguri Cap seemed to sense something different...
  -
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「This is... a coupon for free extra noodles at the ramen shop! I didn't expect the blessing to come so soon!」
      -
      - Oguri Cap pulled a piece of paper out of her pocket in surprise, though %YOU% suspected %SEX% had simply forgotten leaving it there earlier.
      - Regardless, seeing %SEX%'s smiling face, there was no need for %YOU% to ruin the mood.
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「This is... a coupon for free extra noodles at the ramen shop! I didn't expect the blessing to come so soon! Ugh... it's expired...」
      -
      - Oguri Cap pulled a piece of paper out of her pocket in surprise, but the expiration date on the free noodle refill coupon had long since passed.
      - Seeing Oguri Cap even more depressed than before, %YOU% decided to pay out of pocket to treat %SEX% to some ramen... and perhaps even more.

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「How should we cook the fish we caught?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Ohh! That's a lot of fish! ...Why are you looking at me like that?」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Mmh... Nice air. I really do like the outdoors; it always feels so refreshing.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer, I want to run! Can you keep up with my speed?」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Is that thing in the crane game... a monster version of me?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Why is the claw's grip so weak...!」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I want to win that Tama doll. Super Creek would be really happy if I gave it to her.」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「A lottery...? It would be nice if I could win some food.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Even in the city, they use these rotating drums for lotteries.」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Oh we are the valiant infantry, We are the alpha team with passion and camaraderie～♪」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Singing gets my blood pumping just like racing.」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Super Creek often sings nursery rhymes to Tama...」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「The person on that poster looks like Mayano Top Gun's father... You say he's over sixty?!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Sob sob, Hachiko... Waaaaah—」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「No matter when, you must never forget to say 'Itadakimasu'.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「That was really delicious—thanks for the meal.」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Are my clothes pretty...? Thank you... ❤️」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Mmh... It's a really lively place, completely different from the countryside.」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Don't say anything, let's just enjoy this moment together.」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Trainer, please take a picture of me. I want to send it to my family... plus I don't know how to take one...」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「This is... someone is trapped inside the box?! ...Is that joke too old?」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「You want to make my old horseshoes into an ornament? Wouldn't it be better to ask Belno Light for help? 'Some things are better kept from those around us...'?」

s_a_tree_hollow:
  - %YOU% and Oguri Cap went to the hollow tree in the courtyard. Watching %SEX% roar into the hollow, %YOU% steeled your resolve to help Oguri Cap become the strongest.

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「A date inside the school...? I feel a bit shy somehow.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「I can feel the %SEX%s' gazes, they've been staring at us...」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Say... do you want to kiss?」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Meat buns really must be eaten while they're hot!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Your cooking is delicious, Trainer. You'll definitely make a good wife someday.」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: Oguri Cap
          - 「Um, I learned how to make takoyaki from Tama... Would you like to taste some?」
