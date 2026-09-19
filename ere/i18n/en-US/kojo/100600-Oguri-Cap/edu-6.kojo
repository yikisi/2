# @file Oguri Cap - Edu
# @author 雞雞
# @author Katze (translator)

#Oguri Cap特殊机制：
#招募时即进入经典级，前五回合提供巨额训练加成。
#状态【灰姑娘】：来自地方的芦毛灰姑娘，干劲不会下降到绝不调。
#状态【迟到者】：招募时即进入经典级，无法出赛皋月赏、日本德比、菊花赏。
#二周目要素：重复育成开放参赛皋月赏、日本德比、菊花赏。

#经典级 （招募当天） 训练员室内
beginning:
  title: Off to a Rocky Start
  lines:
    - Oguri Cap had made it to Central without a hitch. Unfortunately, the troubles had followed too.
    - Eligibility to race, for one.
    - Since Oguri Cap transferred during the Classic year, %SEX% couldn't compete in the Classic Triple Crown even with enough fans because no registration had been submitted beforehand...
    - Rules are usually written because somebody crossed the line first. Oguri Cap, however, was entering completely uncharted territory.
    - Haiseiko, the icon who ignited the first great %UMA% fever, had reached Central in time to claim the eligibility of Triple Crown.
    - Right now, %YOU% sat hunched over the desk agonizing over this very problem, too preoccupied to notice that Oguri Cap had been standing curiously behind %YOU% the whole time.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer? Is something wrong?」
    -
    - acc: 1
      content: 「Oh, Oguri...」
    -
    - %YOU% glanced back and found Oguri Cap standing there.
    - One look at Oguri's untroubled face, and every explanation %YOU% had in mind fell apart.
    - Would Oguri Cap lose motivation if %SEX% found out there had never been a chance to challenge the Triple Crown?
    - %YOU% couldn't bear to let that happen.
    -
    - acc: 1
      content: (No need to burden Oguri with it just yet...) (Training Effectiveness +100% for 5 turns)
    - %YOU% swallowed the truth and muddled through with an evasive response.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「If you say so...」
    -
    - With a small nod, Oguri Cap settled back onto the sofa.

#新年（经典、资深年1月第一周）
new_year:
  title: New Year Dawns
  lines:
    - It was New Year's Day, and Oguri Cap smiled while greeting %YOU% in the Trainer's Office.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Here's to a new year, Trainer.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「You're looking lively. I suppose having you around is why I never have to worry.」
    -
    - acc: 1
      content: 「That's awfully serious for New Year's. But right back at you.」
    -
    - New Year's had barely begun, yet %YOU% had used the break to map out the road ahead.
    - After all, reaching the fan-voted Arima Kinen meant delivering strong results in G1 races.
    -
    - acc: 1
      content: 「That's the spirit! In that case, our plan should be...」
    -
    - Now then... What's the best way to start the year?
    -
    - acc: 1
      key: choice
      content: 「Let's work out at the gym!」(Stamina +10)
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Mmm... A workout, right at the start of the year?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Then we'll need a good meal afterward. Food is what gives us strength!」
        -
        - You both worked up a serious sweat at the gym, and Oguri worked up an even more serious appetite...
    - acc: 2
      content: 「A full stomach makes for a healthy year!」(Energy +10%)
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「...! Would that truly be all right?」
        -
        - %YOU% gave an uncertain nod.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Thank you... I was sure you'd refuse. Then this New Year's feast won't end until I do!」
        -
        - What followed was best left forgotten. On the bright side, Oguri had never looked healthier...
    - acc: 3
      content: 「Let's improve your skills!」（Skill Points +20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「But such things do not come easily to me..」
        -
        - Oguri Cap looked worried, but %YOU%'s confidence quickly won Oguri over.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「...Of course! We have the whole year ahead of us, Trainer!」

#食堂
food:
  title: The Beast That Howls for Food
  lines:
    - Fire let humanity survive the bitter cold. Fire kept the beasts at bay.
    - From the moment they learned to tame flame, humans truly gained wisdom.
    -
    - But no matter how many flames the cafeteria cook wielded, none could match the Hurricane Oguri before them.
    -
    - Right now, %YOU% watched Oguri Cap demolish a mountain of dishes with terrifying speed—
    - Calorie-bomb egg-topped tonkatsu bowls, garlic-roasted chicken legs, pan-seared veal ribs... the kind of spread most people would be satisfied eating just once a day, all swept clean.
    -
    - This was just Oguri Cap's lunch.
    - Fortunately, Trésen covers meals and board. %YOU% picked at the remains of a personal plate, quietly grateful.
    -
    - In truth, eating big is a talent in itself.
    - The body is a machine that converts nutrition into fuel, and Oguri Cap's "engine performance" in that regard is top-tier.
    -
    - Oguri Cap is like a steam locomotive—keep shoveling coal into the furnace and %SEX% can sprint tirelessly after just a bit of digestion.
    - Whatever surplus nutrients aren't burned off travel to the limbs, promoting muscle and bone growth, making Oguri Cap even stronger.
    - People tend to overlook this kind of beast-like, straightforward talent, but ample nutrition is critical for a growing Umamusume like Oguri Cap.
    -
    - Whether for "right now" or "the future," that high-efficiency internal combustion engine inside Oguri Cap's body will always be the ultimate trump card.
    -
    - Of course, better remind Oguri not to choke.
    -
    - acc: 1
      content: 「Oguri, slow down. The food's not going to run away.」
    - Oguri Cap looked at %YOU% helplessly, both cheeks puffed out like a squirrel hoarding nuts.
    - Actually, exactly like a squirrel.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Mmfgh mmph ngh... (But... the food will get cold...)」
    -
    - %YOU% barely managed to piece together words from the muffled mumbling.
    -
    - acc: 1
      key: choice
      content: 「Cold food beats choking. Take your time.」（Affection +10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Understood...」
    - acc: 2
      content: 「I can't even understand what you're saying. Slow down, okay?」（Adoration +2）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Understood...」
    -
    - A slowed-down Oguri Cap looked a little dejected, but for health's sake this bad habit had to be corrected!

#经典、资深年2月第二周 校舍
valentine:
  title: Valentine's Day
  lines:
    - After training, %YOU% was called to the back of the school building by Oguri Cap.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「You came. I've been waiting a while.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I have something I want to give you... Please take it.」
    -
    - %SEX% held out a bag of chocolates, neatly wrapped in a clear bag.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Today is Valentine's Day, so I tried making handmade chocolates.」
    -
    - %YOU% accepted the chocolates gratefully—and was immediately pulled by the hand in a certain direction.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Now then, let's go... Where? you ask?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「The dorm pantry, of course. I left the rest of the chocolates there.」
    -
    - acc: 1
      content: 「The rest...?」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「The leftover chocolates from all my trial batches. Should be about 20 kilos left?」
    -
    - acc: 1
      content: 「20 kilos?!」
    -
    - Beyond the shock, %YOU% realized %SEX% was completely serious.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「It was too much to carry to school, after all. But don't worry—I kept them properly refrigerated.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I'll help eat them too, so just enjoy this chocolate feast with me!」
    -
    - And so, %YOU% and Oguri Cap's Valentine's Day drew to a close.

#经典级 4月 第1周 训练场
#随机三项属性+10，好感度+10
worry:
  title: Lingering Doubts
  lines:
    - Several months had passed since Oguri Cap transferred from the local circuit to Central.
    - %SEX% hadn't let %YOU% down, proving through sheer ability that %SEX% deserved a spot at Central Trésen.
    -
    - Right now, Oguri Cap was tearing across the grass training track at Trésen.
    - One lap measured 1800 meters—just over a mile.
    - From the training data, it was clear that Oguri Cap's adaptability for both mile and intermediate distances was excellent.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Hah— hah—」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer, what's my time?」
    -
    - Oguri Cap crossed the finish-line cutout modeled after Hishi Amazon, jogged a bit further, then circled back to %YOU%.
    - Rising steam wasn't the only thing coming off %SEX%—there was a peculiar, intoxicating scent of pheromones hitting %YOU% head-on.
    - %YOU% could only pretend to look down at the stopwatch to hide the flush of discomfort.
    -
    - acc: 1
      content: '「...1:35.6. Not bad at all.」'
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Is that fast?」
    -
    - Come to think of it, Oguri Cap's understanding of race-level performance was still fairly shallow...
    - Back in the local circuit, %SEX% had never clocked anything close to this.
    -
    - acc: 1
      content: 「Fast? Yeah. Definitely fast.」
    -
    - Hearing that, Oguri Cap broke into a confident smile.
    - Speed like this doesn't lie—on paper, %SEX% could absolutely challenge Central-level opponents.
    - But turning training results into real race performance is never that simple...
    -
    - Central's competitive level is absurdly high. Even an Umamusume considered weak by URA standards could dominate once dropped to the local scene.
    - Tenka Touitsu, Naimurabully, Fukenpoem—all examples of exactly that.
    - 'There was once a Central-to-local transfer named Marukawa Senyou who, when interviewed, told an upstart junior: "The gap between you and me is wider than the gap between me and Symbol Rudolf!"'
    -
    - In other words, Oguri Cap going the other direction—local to Central—might not maintain that same dominance once the scales tipped against %SEX%.
    -
    - acc: 1
      content: 「Two more laps, then we'll head back and review the footage.」
    -
    - But that was exactly %YOU%'s responsibility. An inescapable duty as a trainer.
    - %YOU% called out to Oguri Cap.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Got it, Trainer.」
    -
    - As usual, the reply was neither warm nor cold. Oguri Cap headed back to the starting line to await %YOU%'s signal.
    - Hard to tell from tone alone whether Oguri Cap ran hot or cold, but %YOU% knew the passion for racing was the real deal.
    - %YOU% cracked a small smile and raised the flag once more...

#经典级 4月 第2周 训练员室内
#初次育成
emperor:
  title: Far From the Emperor's Reach
  lines:
    - The sky was overcast that day. Even the fiercest sunlight could only push cold, muted rays through the thick clouds.
    - Oguri Cap had finally learned about the Derby through classroom lectures.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「So, when do we get to try the Derby ourselves?」
    -
    - Faced with Oguri Cap's innocent wish, %YOU% had to steel %YOU%'s heart.
    - Under the current rules, Oguri Cap simply couldn't enter the Classic Triple Crown.
    -
    - acc: 1
      content: 「I'm sorry. You've got the talent for it, but it's not possible.」
    -
    - %YOU% then explained the whole situation in detail.
    - Because the timing of Oguri Cap's transfer was unlucky, %SEX% had missed the deadline to register for the Classic Triple Crown.
    - Other major races were still open, but the Triple Crown—a once-in-a-lifetime opportunity—was off the table.
    - Without some miracle or act of divine intervention, the rigid URA wasn't about to make an exception.
    - Let alone for someone like Oguri Cap who had neither connections nor backing. If anything, a local-born upstart demanding special treatment would only invite backlash.
    -
    - Years ago, there was a brilliant foreign-born Umamusume who was barred from the Derby for that exact reason—not being eligible as a foreign national.
    - Thanks to that team's tireless lobbying, the rules were relaxed the following year—though too late for %SEX% personally.
    - One generation plants the trees; the next enjoys the shade. Maybe the current URA brass had softened up too.
    -
    - Thinking about it, even %YOU%—who hated pulling strings—couldn't help but consider the possibilities.
    - But who could they turn to for this kind of leverage?
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「...If it were that Emperor, maybe...」
    -
    - BOOM!
    - # CFLAGNAME:66 = 招募状态
    # CFLAGNAME:48 = 育成回合计时
    - if: era.get('cflag:17:66') !== 1 || era.get('cflag:17:48')?.emperor === 1
      lines:
        - After hearing their request, the Student Council President studied them with amusement.
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: The Emperor
            - 「A stray hound taken in, now whimpering for scraps—even learned to bare its fangs at its master... Should I be pleased?」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: The Emperor
            - 「But if you're as clever as you think, you'd know your place.」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: The Emperor
            - 「Show some respect to Central Tracen!」
    - if: era.get('cflag:17:66') === 1 && !era.get('cflag:17:48')?.emperor
      lines:
        - After hearing their request, the Student Council President stared at them in disbelief.
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Luna
            - 「You want me to play favorites?」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Luna
            - 「To kill another child's dream with a few words?」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Luna
            - 「Show some respect to Central Tracen!」
    - if: era.get('cflag:17:48')?.good_end === 2
      lines:
        - After hearing their request, the Student Council President stared at them in disbelief.
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Symboli Rudolf
            - 「A stray hound taken in, now whimpering for scraps—even learned to bare its fangs at its master... Should I be pleased?」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Symboli Rudolf
            - 「To kill another child's dream with a few words?」
        - color: %L_COLOR%
          content:
            - fontWeight: bold
              content: Symboli Rudolf
            - 「Show some respect to Central Tracen!
            - color: '#ff755e'
              content: （Show some respect to Central Tracen!）
            - !」
    -
    - %YOU% and Oguri Cap were promptly "shown out" of the Student Council office.
    - The door slammed shut so hard that ancient dust shook free from the frame and rained down on their heads.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「That didn't go well...」
    -
    - The plan had been to leverage Symbol Rudolf—the hottest name in the Umamusume world—to pressure the URA.
    - But the President had zero intention of helping, and had even gotten genuinely angry. Rare for someone like that.
    - Hopefully they keep heart medication on hand.
    -
    - acc: 1
      content: 「If we suddenly cut in line, someone who earned their spot gets pushed out.」
    -
    - Derby entries are fought for tooth and nail. Forcing one Umamusume out for Oguri Cap's sake...
    - For Symbol Rudolf—whose vision was happiness for every Umamusume—that kind of request was a line you do not cross.
    -
    - Putting it harshly, the three of them could even be accused of the self-centered entitlement of the privileged class.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「If that's how it is... then I guess the Derby just isn't in the cards.」
    -
    - %YOU% nodded. Thankfully, Oguri Cap wasn't the type to throw a tantrum.
    - The two shook their heads and left the Student Council building, heading toward the cafeteria—which was about to become a warzone thanks to someone channeling frustration into appetite.

#经典级 5月 第2周（G1）NHK一哩赛 5着以内
#赛前・选手休息室
nhk_cup:
  title: The Mile Showdown (Part 1)
  lines:
    - The Derby was out of reach—that much was settled. But life doesn't wait for anyone to catch up.
    - The NHK Mile Cup, another G1 race, became their fallback target.
    - Oguri Cap's speed was enough to leave the field in the dust, and %SEX% had astonishing adaptability—solid results on dirt and turf alike, from mile to long-distance.
    - After daily assessments and training, %YOU% was confident %SEX% could take the mile.
    -
    - What could go wrong?
    -
    - acc: 1
      content: 「The problem is how strong the competition is.」
    -
    - The opponents were the cream of the crop, while Oguri Cap was barely a year out of the local circuit—a country bumpkin by comparison.
    - These rivals had far more race experience and years of training under their belts.
    - All %YOU% could do was obsessively review footage of the competing %UMA%, noting every habit and tendency,
    - then bring those notes to Oguri Cap to work out strategy together—and pray %SEX% had enough brain cells firing on race day to execute the plan.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Mm... mm-hm... I think I get it!」
    -
    - %SEX% thumped %SEX%'s chest and declared it understood.
    - So why couldn't %YOU% stop sighing?

#经典级 5月 第2周（G1）NHK一哩赛 5着以内
#赛后・选手休息室
nhk_cup_win:
  title: The Mile Showdown (Part 2)
  lines:
    - Not bad at all—Oguri Cap finished %RANK% in this race.
    - %YOU% couldn't help pumping a fist the moment %SEX% crossed the line.
    - But quickly, %YOU% forced composure back and led Oguri Cap through the post-race interviews before returning to the locker room.
    -
    - Even so, the thrill of confirming this local-born kid was a rising star—not a meteor—still surged through %YOU%.
    - A meteor burns bright only once as it tears through the atmosphere. A star keeps burning.
    - If this level of performance could be maintained—
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer, did I do okay?」
    -
    - %YOU% snapped back to reality. The protagonist of this story was staring %YOU% down, face tight with nerves.
    - %SEX%'s flushed cheeks still radiated heat from the sprint, eyes equally burning.
    - Like a kid desperate for approval—no, %SEX% was exactly that.
    -
    - acc: 1
      content: 「You were brilliant out there. But don't let up!」
    -
    - Oguri Cap gave a firm nod, but the corners of %SEX%'s mouth crept upward—%YOU% didn't miss it.
    -
    - acc: 1
      content: 「Listen up. I've said this before, but—the race you just ran was G1. The very top of the pyramid.」
    -
    - Placing well in a G1 proves you're strong. But staying relevant means pushing even harder.
    - Stand still, and you'll be swept away.
    -
    - Oguri Cap sat quietly, taking in %YOU%'s words.

#经典级 7月 第1周 夏季合宿
sea:
  title: The Unforgiving Sea
  lines:
    - Summer training camp had finally arrived. Training couldn't slack off, but at least they could escape the city noise for a while.
    - After a full day of practice, %YOU% returned to the inn.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Oh hey, if it isn't the Trainer!」
    -
    - %YOU% bumped into Tamamo Cross in the hallway—apparently fresh from the baths, still steaming.
    - %YOU% kept a deliberate distance to avoid the electric sparks crackling in the steam.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Oguri's still running out there. Your orders?」
    -
    - %YOU%'s eyes went wide, eyebrows shooting up. Before %YOU% could get a word in, Tamamo Cross cut in again.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Judging by that face, she's probably doing it on her own, huh.」
    -
    - "Tamamo Cross explained briefly: Oguri had done a pace-running drill with Super Creek on the beach, and afterward %SEX% had stubbornly refused to leave."
    - After parting with Tamamo Cross, %YOU% rushed to the beach and spotted a flash of white fur blazing under the moonlight.
    - %YOU% called out the moment %SEX% stopped.
    -
    - acc: 1
      content: 「Oguri, what are you doing?」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer...」
    -
    - %YOU% pressed lips together, waiting for Oguri Cap to find the words.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Today, during the day, Creek and I did a pace run on the beach.」
    -
    - %YOU% nodded. Super Creek was a powerhouse, perfect as a training partner—this drill had been %YOU%'s arrangement.
    - And %YOU% remembered the result... wasn't pretty. Oguri Cap, who should've won handily, had barely managed a draw.
    - Was it %SEX%'s competitive streak that wouldn't let %SEX% move on?
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Our training distance was 2000 meters. At that distance, I shouldn't lose.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「But the result was a draw...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「If that's the case, then in the 2500-meter Arima Kinen, Creek would leave me behind.」
    -
    - If Oguri Cap couldn't beat Super Creek at 2000 meters, then at longer distances %SEX% would crumble from lack of stamina.
    - Simple, brute-force logic—and not necessarily correct.
    - "There's a mountain of variables you can extract from a single race:"
    - Weather, runner condition, pacing, inside vs. outside lane, snap decisions, even how torn up the turf was from the previous race—
    - For trainers, there's never enough data. Only ever too little.
    - So the scenario Oguri Cap imagined was just one possibility, not a certainty.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Sorry. I got ahead of myself... I should've talked to you first.」
    -
    - %YOU% blew out a breath through the nose and didn't come down too hard on %SEX%.
    -
    - acc: 1
      content: 「I get how you feel, but overtraining throws our plan off.」
    -
    - %YOU% had seen today's draw with those same eyes. Building an endurance plan was %YOU%'s job to handle.
    -
    - acc: 1
      content: 「Super Creek is a tough opponent. And because %SEX%'s tough, you need to treat %SEX% like one.」
    -
    - acc: 1
      content: 「Running off on your own like this will only wear your body down.」
    -
    - As punishment, starting tomorrow—extra cardio drills! Under %YOU%'s strict supervision, naturally.
    - Oguri Cap startled, then the corners of %SEX%'s mouth tugged upward.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Understood! I'll work hard!」
    -
    - The two were heading back when they ran straight into Tamamo Cross, Inari One, and the others who'd been spying on them.
    - The whole group headed back toward the inn in high spirits, leaving trails of footprints in the sand behind them.

#经典级 11月 第3周（G1）一哩冠军赛 3着以内
#赛前・选手休息室
#指定强敌：青竹回忆
mile_cha:
  title: Strike While the Iron's Hot (Part 1)
  lines:
    - Oguri Cap's NHK Mile Cup had been back in May. To ride that momentum, %YOU% signed %SEX% up for the Mile Championship half a year later.
    - The Mile Championship is known as the ultimate showdown for the strongest miler—every mile-specialist %UMA% worth their salt wouldn't miss this second-half G1.
    - Unlike the NHK Mile Cup, the Mile Championship allows Senior-year %UMA% to enter.
    - That meant Oguri Cap wouldn't just face peers, but veterans hardened by top-level competition.
    -
    - The difference between the Kyoto and Tokyo courses was significant, too.
    - Compared to Tokyo's two climbs that reward late-burst speed, Kyoto demands more sustained acceleration stamina.
    - Adjusting the plan for course differences was part of a trainer's core duties.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「So, to confirm one more time—I start accelerating after entering the third turn...」
    -
    - %SEX%'s eyes were shut, body trembling faintly—the warrior's shiver, not fear.
    -
    - acc: 1
      content: 「Kyoto's home stretch is long. Once you start pushing, you can't stop—or someone will catch you from behind.」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「The higher the level, the more reserves opponents can save. You've said that a lot these past weeks.」
    -
    - %YOU% noticed the eyeballs rolling beneath %SEX%'s closed lids, as if %SEX% was glancing in %YOU%'s direction.
    -
    - acc: 1
      content: 「You really did memorize it.」
    -
    - After all, everyone takes this race dead seriously—and Oguri Cap doesn't have a head full of nothing but white rice.
    - If that's the case, there's nothing left to worry about.

#经典级 11月 第3周（G1）一哩冠军赛 3着以内
#赛后・选手休息室
#指定强敌：青竹回忆
mile_cha_win:
  title: Strike While the Iron's Hot (Part 2)
  lines:
    - As expected, the competition in the Mile Championship was brutal.
    - The rival, Bamboo Memory, had already won the Yasuda Kinen and placed highly across multiple graded turf races—a real threat on the mile front.
    - if: era.get('cflag:53:66') === 1
      content: Being on the same team, they knew this better than anyone.
    -
    - if: d.RANK === '1'
      lines:
        - Fortunately, Oguri Cap held steady and unleashed a furious final burst to snatch the win.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Bamboo Memory... what a formidable opponent.」
        -
        - acc: 1
          content: 「%SEX% almost earned membership in the Oguri Cap Victims' Club.」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「The Oguri Cap Victims' Club, pfft. March would want to join too, I bet.」
        -
        - The "March" %SEX% mentioned was Fuji Kiseki March—a rival from the local-circuit days who shared a deep bond with Oguri.
        - Having beaten the debuting Oguri Cap twice, %SEX% had already earned a spot in this newly minted club.
    - if: d.RANK > 1
      lines:
        - So losing to Bamboo Memory was no surprise.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「Bamboo Memory... what a formidable opponent.」
        -
        - acc: 1
          content: 「Well, %SEX% just punched a ticket into the Oguri Cap Victims' Club.」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: Oguri Cap
            - 「The Oguri Cap Victims' Club, pfft. March would want to join too, I bet.」
        -
        - The "March" %SEX% mentioned was Fuji Kiseki March—a rival from the local-circuit days who shared a deep bond with Oguri.
        - Having beaten the debuting Oguri Cap twice, %SEX% had already earned a spot in this newly minted club.
    -
    - A hint of nostalgia floated into Oguri Cap's eyes.
    -
    - acc: 1
      content: 「Homesick?」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Ah... yeah, I do miss Kasamatsu and the people there.」
    -
    - Oguri Cap hailed from Kasamatsu in Gifu—a run-down little town whose population never really cracked twenty thousand.
    - "Kasamatsu's streets were the opposite of flashy Tokyo: quiet."
    - Back there, Oguri Cap could sprint freely down the roads. In Tokyo, %SEX% was stuck on speed-limited Umamusume-only lanes.
    - Life at Trésen was busy—glory and applause had become routine, every day bringing something new.
    - But in idle moments, Oguri Cap would sometimes stare off in one particular direction—toward Kasamatsu.
    -
    - acc: 1
      content: 「We're in Kyoto right now. Gifu's not far.」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer?」
    -
    - As luck would have it, the Mile Championship was held in Kyoto—and Gifu was just a two-hour drive away.
    - Plus there was a racecourse there, so training wouldn't fall behind just because of a visit home.
    - Sometimes %YOU%'s own cleverness was honestly a little scary.
    -
    - acc: 1
      content: 「Wanting to see your family and friends isn't something to be embarrassed about.」（Affection +15）
    -
    - —Let's go to Kasamatsu.
    - %YOU% said to the visibly stunned Oguri Cap.

#经典级 11月 第4周
#街道
back_home1:
  title: The Crimson Handkerchief (Part 1)
  lines:
    - They arrived in Kasamatsu. The scenery outside the window didn't quite match memory.
    - A few storefronts had changed, some renovations here and there—nothing drastic, but it had been less than a year, so that was only natural.
    - Oguri Cap spent the entire drive pressed against the car window, and even that ice-queen face couldn't hide the excitement.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Kasamatsu... it's been a while.」
    -
    - Oguri Cap's home was typical rural architecture. Plain, practical, steeped in everyday life, with walls bearing the mottled marks of time.
    - The moment they reached the front door, both their expressions froze.
    -
    - acc: 1
      content: '「...Did we remember to tell your mother we were coming?」'
    -
    - They stared at each other, equally blank, then simultaneously slapped their foreheads.
    - A triumphant homecoming—and they'd forgotten to give a heads-up.
    - The sudden realization left them unsure whether to just push the door open or stand outside psyching themselves up first.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「But I spotted Mom in the audience stands earlier, so it should be fine.」
    -
    - Oguri's mom had come to watch the Mile Championship, so she'd know they were in the area.
    - Still, better safe than sorry—Oguri Cap called home first. If no one was available, they'd kill time nearby.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap's Mom
        - 「You silly child. Still as reckless as when you were little.」
    -
    - A warm, gentle voice came through the phone, softly scolding Oguri Cap.
    - %YOU% averted %YOU%'s eyes guiltily—then saw Oguri's mom open the front door with a smile.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap's Mom
        - 「Hello, Trainer %YOURNAME%.」
    -
    - She ushered them in warmly. %YOU% could only sit at the dining table, smiling politely and unable to refuse the hospitality.
    - "The interior was simple and lived-in: a traditional tatami floor, elegant wooden walls, adorned with framed newspaper clippings of Oguri Cap's race victories."
    - People still make scrapbooks in this day and age?—%YOU% thought idly.
    - On closer inspection, there were even clippings from the two races Fuji Kiseki March had won—the ones where Oguri Cap took second.
    - Pushing aside stray thoughts, they chatted pleasantly. The topics seemed trivial, even mundane, but every word carried the warmth of family reunited after too long.
    - "For example:"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap's Mom
        - 「So, dear—how far along are things between you and Trainer %YOURNAME%?」
    -
    - Oguri's mom's eyes sparkled with curiosity.
    - "For a moment, %YOU% didn't even register what the question meant. Oguri Cap, however, answered without missing a beat:"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Us? We've done everything there is to do.」
    -
    - Oguri Cap—fearless, unstoppable Oguri Cap—chose to face her mother's question head-on.
    - But %YOU% was pretty sure %SEX% just didn't understand the implication.
    -
    - acc: 1
      content: 「That's not—!」（Adoration +2）
    -
    - "Face burning, %YOU% scrambled to explain: what Oguri meant was the daily management and race scheduling between trainer and %UMA%."
    - In the panic, %YOU% might have accidentally let slip some internal information that shouldn't have been shared—hopefully Oguri's mom could keep a secret.
    - Meanwhile, the instigator herself simply smiled and half-listened to the explanation.
    - Setting aside Oguri Cap's baffling answer, %YOU% was certain the mom had done that on purpose.
    - Payback for the unannounced visit, maybe? A bit mean-spirited, honestly.

back_home2:
  title: The Crimson Handkerchief (Part 2)
  lines:
    - The week-long homecoming was nearing its end. Time to leave Kasamatsu and head back to Trésen in Tokyo.
    - To make up for Oguri's homesickness, %YOU% had left a lot of things behind—not just Oguri's own academic progress, but also work deadlines %YOU% had talked %YOU%'s way out of on charm alone.
    - Hopefully that secretary wouldn't be too furious—%YOU%'s mouth went sour just thinking about it.
    -
    - As planned, they'd borrowed the local training grounds at Kasamatsu Trésen under the guise of an exchange visit.
    - The school responded with surprising speed, arranging a small but grand welcome ceremony for their distinguished alumna, even inviting %SEX% to share the secrets of success with current students.
    - The inevitable trouble of fame—and the social debt of borrowing facilities on short notice.
    - But tongue-tied Oguri Cap was hardly suited for that kind of verbal gymnastics, so %YOU% ended up carrying most of the speech.
    - After finally escaping the spotlight, Oguri Cap got to properly catch up with old classmates like Fuji Kiseki March, Noren Ace, and others.
    -
    - Watching them chat happily, %YOU% decided to quietly guard those genuine smiles from the background—
    -
    - acc: 1
      content: 「This is young people's time. I, Speedwagon, shall make a cool exit.」（Affection +15, Adoration +2）
    -
    - That too was part of a trainer's duty.
    - So %YOU% waited outside the classroom until they'd chatted to their hearts' content.
    -
    - After that, aside from the reporters and fans who kept showing up, things were just like old times.
    - Chatting with former trainer Kitahara, training alongside March and the others—nothing had changed. Until the scheduled departure day.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer! Time to go.」
    -
    - Dawn had barely broken. A thin mist hung over the streets. Besides their group, only a handful of others were out seeing off loved ones.
    -
    - Oguri's mother and a few old friends had gotten up early to help %SEX% pack.
    - Mom fussed over travel reminders while stuffing homemade snacks into %SEX%'s bag.
    - March stood off to the side, not saying much—just patting %SEX%'s shoulder now and then, eyes full of reluctance.
    - Noren, Kitahara, and the others kept things light, saying things like "Stay longer next time" and "Call more often."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Everyone, I'll come back again!」
    -
    - %SEX%'s eyes were rimmed with red, but %SEX% held the tears at bay.
    - The engine hummed to life. %YOU% eased onto the gas, and the buildings outside the window began sliding backward.
    - In the rearview mirror, %YOU% caught a flash of crimson—a handkerchief waving in someone's hand—but couldn't make out whose.
    - Was that handkerchief even meant for them?
    -
    - The sight stirred something, and %YOU% started humming an old song.
    -
    - acc: 1
      content: 「La la la~ That crimson handkerchief~ ♪」
    -
    - Who was waving it, and who was it for? It didn't matter. They'd be back.
    - That crimson handkerchief just had to be there, waving like this, on the day they returned.

arim_kin_1:
  title: Oguri Samba (Part 1)
  lines:
    - "The year's grandest event: the Arima Kinen. Fan vote result—second place. Oguri Cap in the flesh was in the paddock doing stretches."
    - The first-place finisher in the vote, Tamamo Cross, sauntered over after finishing the parade lap, wearing a mischievous grin.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「What's with you? Face stiff as a stone post. Worried about Oguri?」
    -
    - The media had hyped this Arima Kinen as the unprecedented "Grey Showdown"—Oguri Cap on one side. And the other?
    - Well, the other grey just walked right up and threw the first jab.
    -
    - acc: 1
      content: 「Not worried, exactly. But this'll be one hell of a fight.」
    -
    - The Arima Kinen commands the attention of the entire %UMA%-obsessed public. They say there are two all-star races a year—the Takarazuka Kinen in the first half, and the Arima Kinen in the second.
    - Getting into either requires not just results, but the fans' love.
    - Oguri Cap had earned that love through consistent excellence and the underdog story of a small-town girl conquering Central, locking in a second-place fan vote in the very first year.
    - It wasn't just Tamamo Cross chatting casually with %YOU%—Super Creek, Inuno Dictus, Silence Suzuka, and other superstars were all here. Not a single paper tiger among them.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Gotta say, I half-suspect you're the reason Cap always looks like that. Stone-faced 24/7.」
    -
    - As fellow grey-coated %UMA% who shattered the myth that "greys can't run fast," Tamamo Cross and Oguri Cap knew each other well—and got along.
    - if: era.get('cflag:21:66') === 1
      content: Being on the same team only made them closer—the kind of friends who roast each other without mercy. Naturally, %YOU% flatly denied the accusation.
    - if: era.get('cflag:21:66') !== 1
      content: Naturally, %YOU% flatly denied the accusation.
    -
    - acc: 1
      content: 「Don't pin that on me! She's been like that since Kasamatsu. Nothing to do with me.」
    -
    - If anything, %YOU% was the one Oguri Cap had rubbed off on.
    - Ever since recruiting Oguri Cap, %YOU% couldn't help putting on a stern, sour face whenever %SEX% was around.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「%YOURNAME%, Tama.」
    -
    - Oguri Cap finally finished the parade and joined them, silver-white racing outfit as dashing as ever.
    - Though %YOU% still didn't understand why %SEX% designed the outfit with a high-waisted undergarment peeking out at the waist.
    - Aesthetically, the exposed waistband did add a sense of layering to the silhouette—but the wearer seemed utterly unbothered that this would be immortalized in every %UMA% fan's camera roll worldwide.
    - Maybe that's what they mean by "the bold don't sweat the small stuff." Maybe that carelessness was part of why Oguri Cap succeeded.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Oguri, don't you dare hold back on me out there.」
    -
    - %YOU% felt the static electricity from Tamamo Cross crackling in the air. Thankfully, that pressure wasn't aimed this way.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Tama's strong. Why would I hold back?」
    -
    - %SEX% answered Tamamo Cross's slightly provocative words with a subtle smile—gracefully turning defense into offense, showing a presence that refused to be outdone.
    - The fighting instinct etched into Oguri Cap remained fierce, razor-sharp.
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「No, what I mean is—give me a proper send-off.」
    -
    - A send-off... %YOU% and Oguri Cap exchanged a glance.
    - Right. This Arima Kinen would be Tamamo Cross's final race.
    - Win or lose, Tamamo Cross would announce retirement afterward. The name "White Lightning" would be forever carved into history.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Tama, you really won't let me go easy?」
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「Cut it out. If you threw the race to let me win, I wouldn't be able to hold that trophy with pride.」
    -
    - color: %T_COLOR%
      content:
        - fontWeight: bold
          content: Tamamo Cross
        - 「What I want is Oguri Cap at full power. As for the trophy I take after crushing you... call it a bonus.」
    -
    - With that, Tamamo Cross waved a hand and walked off, sparks snapping in the air around %SEX%.
    - Oguri Cap pressed %SEX%'s lips together. Said nothing.
    -
    - There was nothing left to say.

#经典级 12月 第4周（G1）有马纪念 3着以内
#赛前・选手休息室
#指定强敌：Tamamo Cross、超级小海湾、生野狄杜斯、无声铃鹿
arim_kin_win:
  title: Oguri Samba (Part 2)
  lines:
    - At last, after a desperate duel between the two %UMA%, the much-anticipated Grey Showdown reached its conclusion.
    -
    - if: d.mvp === 21
      lines:
        - The pint-sized thunder god claimed the final crown.
        - A finish worthy of applause. A beautiful farewell.
    - if: d.mvp !== 6 && d.mvp !== 21
      lines:
        - Against all expectations, the winner emerged from neither of them.
    - if: d.mvp === 6
      lines:
        - Oguri Cap defeated Tamamo Cross and took first.
        - The two grey %UMA% embraced with laughter—%YOU% couldn't hear what they whispered to each other.
    -
    - Regardless of outcome, the passing of the torch was complete.
    -
    - acc: 1
      content: 「Well done, Oguri.」
    -
    - %YOU% loved it when everything fell into place.
    - %YOU% liked days that fit together like puzzle pieces, steady as a metronome—every piece in its slot, every step on the right beat.
    - That sense of order made %YOU% feel like the world belonged to %YOU%.
    -
    - Right now, of course, %YOU%'s world belonged to Oguri Cap.
    -
    - After the grueling race, %YOU% watched Oguri Cap and the others perform their victory dance on stage for the crowd, and couldn't help recalling how clueless Oguri had once been about all this.
    - Back in the local Trésen days, "dancing" to %SEX% meant swaying along to folk tunes at a village festival—so when %SEX% hit the victory stage, %SEX% broke right into a rural ondo.
    - Thankfully, the carefree Oguri Cap hadn't been too bothered about making the sports-page headlines for being "eccentric."
    - If %YOU% had done something like that? It would've been a scar on the psyche for life.
    -
    - Come to think of it—if %SEX% could dance ondo, maybe %SEX% could do samba too?
    - On stage and off, everyone was buzzing with excitement, flinging sweat into the hot wind.
    - %YOU%'s thoughts drifted into a bizarre loop, carried along by the rhythm of Oguri's dance.
    - From fantasies of Oguri beaming while dancing Brazilian samba, to a gilded kimono-clad Oguri starring in a period drama—%YOU% hadn't been paying attention to the actual performance at all.
    -
    - By the time %YOU% snapped out of it, the show was over, and the two were back at the hotel after an exhausting day.
    - # EXPNAME:25 = 性爱次数
    # EXPNAME:26 = 睡奸次数
    - if: d.sex
      lines:
        - For appearances' sake, they had separate rooms—though in truth one sat empty as a decoy.
        - Riding the crest of adrenaline and youthful hormones, they barely made it through the door before lips crashed together.
        - Oguri Cap, breath ragged and ears flushed from %YOU%'s kiss, refused to back down—pressing %SEX%'s own marks along %YOU%'s neck.
        - Both explored, tested, mapped each other's bodies, striking at what they guessed were weak points...
    - if: '!d.sex'
      lines:
        - After dinner, %YOU% and Oguri bid each other goodnight at the hotel room doors and retreated to their respective rooms.
        - Freshly showered, an exhausted %YOU% lay on the bed staring at the ceiling patterns, still unable to shake the afterglow of the race.
        - Strange—those patterns were starting to look like the ornamental crown on Oguri Cap's head.
        - The moment that thought surfaced, %YOU% could almost hear the sound of %SEX% fastening that crown into place...

#训练员室内
four_clock:
  title: 4 AM at Trésen
  lines:
    - Alexander the Great was barely thirty-two when his conquests neared completion. The thought that his remaining years would be spent governing rather than conquering left him despondent.
    - Augustus found this baffling, remarking that Alexander failed to realize ruling was far harder than conquering.
    - From the Greco-Roman historian Plutarch's Sayings of Kings and Commanders (Regum et imperatorum apophthegmata).
    -
    - %YOU% stared blankly at the computer screen. This was the eighth straight day of unpaid overtime for the sake of a certain %UMA%.
    - In the beginning, God made heaven and earth in six days, then rested on the seventh.
    - Here %YOU% was on day eight, still agonizing over how to structure Oguri Cap's next race prep.
    - Email notifications, resource requests, training ground coordination, race registration, strategy planning, monitoring training content... everything piled onto %YOU%'s plate.
    - Short on sleep, long on hours. Even when the %UMA% in question wasn't physically present, constant vigilance was required—what little free time remained meant keeping a phone on standby for emergencies.
    -
    - People say being a Trésen trainer is a cushy gig—good pay, great benefits—but nobody mentions how brutal it is behind the scenes.
    - The most leisurely person in all of Trésen was Director Akikawa... The moment that thought crossed %YOU%'s mind, a slightly unhinged smile crept onto %YOU%'s face.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Trainer, that smile is kind of creepy.」
    -
    - acc: 1
      content: 「Oguri, shouldn't you head back to the dorm?」
    -
    - %YOU% wiped the smile away and turned around. Oguri Cap was doing post-exercise stretches to ward off next-day soreness.
    - %SEX% hadn't had an easy day either—an interview ran overtime and pushed everything back, so dance practice only just finished.
    - Lately, %SEX% had been complaining about pain after runs. %YOU% still needed to discuss workload reduction and injury prevention measures with the school.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Curfew's not for a while yet. It's fine.」
    -
    - %YOU% watched Oguri Cap stretch with easy grace, and felt a flicker of unease.
    - What athletes fear most is injury. No matter how dazzling or invincible you seem when healthy, injuries leave you with nothing to do but endure and pray.
    -
    - Being a racing %UMA% is hard too.
    - After all, they're not just students—they're runners and idols at the same time.
    - Between performance training, race training, academics, and commercial obligations, every day is packed.
    - One careless twist, one collision in a heated race, the accumulated fatigue of relentless daily training—any of it could become the breaking point.
    - For a veteran like Oguri Cap who'd already achieved so much, it could be the final straw forcing an early retirement.
    -
    - In other words, the two people in this room were cut from the same exhausted cloth...
    - %YOU% and Oguri Cap both seemed to hear the sigh the other never voiced.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: The Two
        - (I really want a day off—)

#资深级 7月 第1周 夏季合宿
sea2:
  title: Even Miracle White Stars Fall
  lines:
    - Time off is a good thing—a chance to breathe, to reset the rhythm of daily life.
    - But this break wasn't a happy one for Oguri Cap or %YOU%.
    -
    - After sudden pain flared in %SEX%'s inner shin following the last race, %YOU% took Oguri Cap for a professional diagnosis—periostitis.
    - In competitive athletes, the constant contraction and pulling of muscles during running and jumping can inflame the periosteum. In severe cases, it can lead to a stress fracture.
    - They say injuries are a beast that spares no one—even the seemingly invincible Oguri Cap.
    -
    - To get %SEX%'s body back to peak condition, %YOU% had to drastically cut Oguri Cap's training volume and insist on medication and proper rest.
    - So even at the beach camp, they didn't join the training lineup—just a group warm-up to maintain basic fitness.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Periostitis... what an annoying thing.」
    -
    - acc: 1
      content: 「Agreed.」
    -
    - Right now the two of them were like students excused from PE, sitting in a corner of the beach watching everyone else have fun.
    - But it couldn't be helped. If left untreated...
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「If left untreated, it becomes a stress fracture.」
    - %YOU% nodded. Periostitis alone was already a stroke of luck in disguise.
    - Because there was something else %YOU% hadn't told %SEX%—Oguri Cap's body was starting to break down.
    -
    - As professional athletes age, physical decline is inevitable. Add the accumulated damage from years of high-intensity training, and the body starts collecting on its debts.
    - Some unscrupulous trainers keep pushing %UMA% to race long after their prime has passed.
    - Especially at the local Trésen schools where quality varies wildly—since competing in local races earns government subsidies, keeping %UMA% from retiring just to milk those payments isn't uncommon.
    -
    - No matter how the officials dress it up with talk of "dreams" and "goals," pro athletes burn through life faster than ordinary people.
    - %YOU% suddenly thought of a beloved manga epic—the protagonist there had burned %SEX%'s life to white ash right in the ring, going out in a blaze of glory.
    -
    - Racing %UMA% pour their youth and energy unreservedly onto the track, enduring endless high-intensity training for even a millisecond of improvement.
    - The periostitis now was simply the bill from all that sacrifice finally catching up to %SEX%.
    -
    - acc: 1
      content: 「Rest now so you can go further later. Don't rush the comeback.」
    -
    - Several predecessors had been too confident and paid the price with tragedy...
    - A race might only last a few minutes, but injury strikes in a single second.
    - Most professional racing %UMA% have competitive careers spanning only two to three years.
    - And %SEX% was fast approaching that "expiration date"...

#资深级 10月 第5周 （G1）天皇赏（秋） 1着 东京 芝 2000m（中距离） 左
#赛前・选手休息室
tenn_sho:
  title: A Different Kind of Reporter (Part 1)
  lines:
    - Furious!
    - %YOU% was furious! Furious at the damn paparazzi hounding Oguri Cap without end!
    - These buzzing, blood-sucking mosquitoes and flies that loved to swarm around rot!
    - %YOU% had only stepped away on business for a short while, and these parasites had the gall to insist on interviews, not even letting %SEX% rest.
    -
    - Ever since word of Oguri Cap's periostitis leaked, this globally beloved grey idol had been under a microscope.
    - Their partnership faced scrutiny from all sides, and baseless rumors spread through the industry.
    - 「SHOCKING 7 BILLION! Oguri Cap Career Over?!」「Oguri Cap Lost Everything—Emperor Confirms...」「Oguri's Early Works! 10,000-Word Breakdown of 'Kasamatsu Ondo'」
    - %YOU% was fairly certain the reporter in front of them had contributed to at least a few of those outrageous articles and videos.
    -
    - After %YOU% furiously chased those bastards out, %YOU% finally looked at Oguri Cap.
    - Even Oguri Cap—who usually kept a stone-faced composure in front of outsiders—was visibly displeased.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I've never seen you that angry before, %YOURNAME%.」
    -
    - "%YOU% had made up %YOU%'s mind: file a restraining order with Trésen against that outlet, refusing all future interview requests."
    - Even if the application got rejected, %YOU% would never respond to that outlet's questions again.
    - These reporters who'd abandoned professional ethics did nothing but sensationalize. Hard not to hold a grudge.
    - Miss Otona Fumi—polite, knowledgeable—was so much better.
    -
    - acc: 1
      content: 「Don't think of them as people. Think of them as white rice.」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Wh-white rice?」
    -
    - The saying goes "anything with a spine facing the sky is edible," but even %YOU% felt something was off the moment it left %YOU%'s mouth...
    - Oguri Cap froze too, seemingly imagining the reporters transforming into bowls of rice—and even licked %SEX%'s lips.
    - That reaction confirmed the metaphor wasn't quite appropriate.
    - To squash the troublesome train of thought, %YOU% quickly spoke up.
    -
    - acc: 1
      content: 「If you put up a good result, I'll treat you to something nice. Deal?」
    -
    - Worked like a charm, naturally.

#资深级 10月 第5周 （G1）天皇赏（秋） 1着 东京 芝 2000m（中距离） 左
#赛后・选手休息室
tenn_sho_win:
  title: A Different Kind of Reporter (Part 2)
  lines:
    - Oguri Cap blazed past the finish like a shooting star, embodying what it means to run fearlessly through injury.
    - The instant %SEX% won, the crowd seemed to hold its breath—and moments later that silence erupted into a roaring wave of cheers.
    - %YOU% applauded as Oguri Cap crossed first. %SEX% gradually slowed, looked back through the crowd.
    - Those steely eyes found %YOU%, and %SEX% raised a fist high in response.
    -
    - After the race, at the press conference, the two sat on stage facing a packed room of media.
    - %YOU% frowned, spotting the reporter who'd harassed Oguri Cap earlier among the crowd.
    - Some people have skin thicker than the walls of Constantinople. %YOU% smiled absently.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「This Autumn Tenno Sho victory is without question thanks to %YOURNAME%'s planning.」
    -
    - By now, Oguri Cap handled interviews with ease—no longer needing %YOU% to step in.
    - But against troublemakers like this, Oguri Cap might lose composure—%YOU% was ready to intervene.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Next question, please.」
    -
    - That outlet's turn. %YOU% held a breath, eyes boring into the reporter with murderous intent.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Evil Reporter
        - 「Hello, I'm Jonah Jameson from the Daily Bugle...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Evil Reporter
        - 「You won this race—do you feel the opponents underperformed and handed you the opportunity?」
    -
    - Before %YOU% could explode, Oguri Cap calmly replied.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Every competitor gave their all today. I simply ran faster. Next question.」
    -
    - The reporter tried to follow up, but Oguri Cap had already moved on. Cool. Efficient.
    - %YOU% allowed a satisfied smirk. That was growth right there.
    - The reporter was baiting Oguri Cap. If %SEX% answered honestly—
    - Say "yes," and it's admitting the win was handed over by the opponent's mistakes, not earned by skill.
    - Say "no," and it comes off as arrogant, as if %SEX% overestimates %SEX%'s own ability.
    -
    - And since the reporter would interview other runners too, if anyone got misled...
    - "%YOU% could already picture the headlines that would follow:"
    - 「UNBELIEVABLE! Cocky Oguri Actually...」「G1 %UMA% Faking Injury for Sympathy? Here's What %SEX% Said...」—the kind of garbage not fit to print.
    -
    - "This world: hold it in and it eats you alive; back off and it gets worse."
    - With pre-race resentment and post-race adrenaline piling up... %YOU%—who should've been able to stay cool—felt a wire snap inside.
    - But just as %YOU% was about to go off—
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Oh, actually I had a tonkatsu bowl for breakfast this morning. That meal was really important—gave me tons of energy.」
    -
    - Oguri Cap didn't fall for the trap, nor getting emotional. Instead, %SEX% opened with a flex of the bottomless-stomach reputation.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Also the weather today was average, which paired nicely with the flavor of curry rice. Just right.」
    -
    - %YOU% fought desperately to keep facial muscles from erupting into laughter.
    - Stay calm, stay composed, deflect with answers that have absolutely nothing to do with the question. Oguri Cap—you've grown.
    - Meanwhile it was %YOU% the trainer who'd nearly lost it. Without Oguri's performance just now, they'd both have made fools of themselves.
    -
    - acc: 1
      content: 「Next question, please.」
    -
    - %YOU% watched the sleazy reporter sit back down with a sour face, and felt distinctly cheerful.

#资深级 11月 第1周
#训练员室内
elephant:
  title: Throwing the Elephant Out the Window
  lines:
    - This era where even people's attention spans are treated as economic commodities is hard to stomach.
    - Oguri Cap's recurring injuries and upcoming retirement had become a traffic goldmine under the double assault of traditional and social media.
    - 'Even people who barely followed the %UMA% industry were posting tributes on social media—things like: "Saluting legendary basketball star Oguri Cap!"'
    - "As laughable as the complete cluelessness of such posts was, the fact remained: %SEX%'s fame had reached that level."
    -
    - content:
        - fontWeight: bold
          content: Mail
        - 「To the trainer who sins with greed」
    - content:
        - fontWeight: bold
          content: Mail
        - 「We know of your crime of forcing Oguri Cap to race while injured」
    - content:
        - fontWeight: bold
          content: Mail
        - 「Repent, or face the wrath of our bombs」
    - content:
        - fontWeight: bold
          content: Mail
        - 「Sincerely, the Phantom Thieves of Uma」
    -
    - The two sat in the Trainer's Office, staring wordlessly at the opened envelope on the desk.
    - Whether motivated by jealousy toward the trainer or concern for the %UMA%, threatening letters claiming they'd bomb the trainer along with Trésen weren't actually rare.
    - It just stopped being funny when it was your turn. Oguri Cap shook %SEX%'s head with a resigned expression.
    - Under the media and troll armies' relentless spin, %SEX% was pitied like a dying elder being squeezed for every last drop of value by evil relatives.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Why does nobody bother asking what I think...」
    -
    - acc: 1
      content: 「Because the trainer bears the heavier responsibility.」
    -
    - Becoming a shield to protect the %UMA% when necessary—that's part of a trainer's mission.
    - You can't buckle under pressure. Follow professional medical advice. Make the best call for the %UMA%.
    - Even if public opinion attacks you, swallow it as part of the job—teeth and blood and all.
    - Countless trainers before had done the same. %YOU% would too.
    -
    - acc: 1
      content: 「What matters right now is figuring out Oguri's path forward.」
    -
    - %YOU% casually folded the Phantom Thieves' threat letter into a paper airplane and flicked it out the window.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「If it were up to me, I'd want to keep running. But my body just won't allow it anymore...」
    -
    - In truth, Oguri Cap had already noticed the steep decline—constant injuries, races growing harder and harder.
    - The seconds slipping in training, the ever-longer recovery times after each race—all of it reminded Oguri Cap that %SEX%'s era was ending.
    - Even without outside pressure, %SEX% probably couldn't last the season.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「But I'm still going to shut them up with results.」
    -
    - %YOU% looked at Oguri Cap in surprise.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「The media keeps saying you're forcing me to run, right?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Then I'll prove them wrong with my record... that it was never true!」
    -
    - Oguri Cap clenched a fist with absolute conviction, flashing %YOU% a confident grin.
    - A G1 superstar %UMA% has pride. When faced with baseless slander, %SEX% wasn't about to take it lying down.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Let that race be the perfect ending to my career.」
    -
    - acc: 1
      content: 「The Arima Kinen...」
    -
    - %SEX%'s mind was made up. No point wasting words.
    - Just like before—the two of them would keep moving forward together.

#资深级 12月 第4周 （G1）有马纪念 1着 中山 芝 2500m（长距离） 右・内
#指定强敌：目白莱恩、目白阿尔丹、八重无敌
#赛前・选手休息室
arim_kin_final:
  title: "Oguri Cap: The Final Battle (Part 1)"
  lines:
    - A thin mist clung to the morning track like a veil draped over the entire racecourse.
    - Oguri Cap gazed toward the stands in the distance. The empty seats stood silent, returning %SEX%'s stare without a word.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「This is the last time.」
    -
    - After today, once %SEX% left this track, %SEX% would lose the identity %SEX% knew best.
    - Win or lose, "Miracle White Star" Oguri Cap would retire—vanishing from the public eye.
    -
    - acc: 1
      content: 「Prepare well. Don't let this final race end with regrets.」
    -
    - %YOU% drew a deep breath, trying to tamp down the emotions churning inside, and stepped to the trackside to check Oguri's condition.
    - Three years hadn't left visible marks on %SEX%'s body. Those legs were still powerful. But both of them knew how much damage the long grind had truly done.
    - "Compared to the battle-worn veteran Oguri Cap, the other standout entry in this Arima Kinen was the Classic-year supernova: Mejiro Ryan."
    -
    - Mejiro Ryan had been on fire lately—third in the Satsuki Sho, second in the Derby, third in the Kikuka Sho.
    - %SEX% hadn't claimed the Triple Crown, but placing top three in all three legs was nothing to scoff at.
    - Mejiro Ryan was just a hair's breadth unlucky—absolutely not someone to underestimate.
    -
    - if: era.get('cflag:27:66') === 1
      content: Ryan, warming up nearby, flashed a grin at the two of them.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Don't worry. This isn't the first time I've left a racecourse.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「A finish line on the track is just the start of another journey—that's what everyone taught me.」
    -
    - %YOU% blinked, then realized %SEX% was talking about leaving Kasamatsu.
    -
    - acc: 1
      content: 「Have you ever regretted leaving Kasamatsu?」
    -
    - Oguri Cap's warm-up movements paused for just a beat, then %SEX% quickly picked back up.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I've never regretted it. There's nothing to regret.」
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「Now that's heartbreaking to hear, Oguri Cap.」
    -
    - A familiar voice drifted over. The two of them looked toward the spectator seats beyond the railing.
    - Blue hair, red-and-gold heterochromatic eyes—it was old friend Fuji Kiseki March, here to watch.
    - %SEX% was leaning casually against the railing, words dripping with mock hurt, but making no effort to hide the smile.
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: Fujimasa March
        - 「And here I was so heartbroken when you left. Didn't realize becoming a big star meant forgetting your old friends.」
    -
    - color: %COLOR%
      content: Fujimasa March
        - fontWeight: bold
          content: Oguri Cap
        - 「March!」
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: Fujimasa March
        - 「Your mom and Noren and them are here too, by the way. Still snoring at the hotel though.」
    -
    - Fuji Kiseki March shrugged. %YOU% noticed the dark circles under %SEX%'s eyes.
    - Clearly, getting here in time to cheer at Oguri Cap's final race hadn't been without sacrifice.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Thank you all... But March, why are you here so early?」
    -
    - %YOU% glanced at the sun, barely risen. Way too early for a spectator.
    - Even Oguri Cap and %YOU% were only here to walk the turf and warm up before heading back to rest.
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: Fujimasa March
        - 「Just figured you'd be out here doing your morning routine like you always do. Nothing special.」
    -
    - True enough—before big races, Oguri Cap always got fired up and needed an early outlet.
    - Getting %SEX% familiar with the environment and calmed down before race time was important.
    - So the two of them would come out at the crack of dawn when almost nobody was around and borrow a patch of grass for warm-ups.
    -
    - Neither Fuji Kiseki March nor Oguri Cap was particularly eloquent. Once they'd said what there was to say, an awkward silence settled in.
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: Fujimasa March
        - 「Well then, I'm heading back to the hotel for some sleep. See you later.」
    -
    - color: %F_COLOR%
      content:
        - fontWeight: bold
          content: Fujimasa March
        - 「...Don't you dare lose.」
    -
    - In the end, it was March—the visitor—who broke the silence and said goodbye first.
    - %SEX% turned and walked deeper into the stands.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I'll win! March, I will win!」
    -
    - Oguri Cap's voice rang out, booming as a bell.
    - If before this moment there'd been any lingering reluctance about farewell, any anxiety or dread of failure—
    - Then %YOU% felt that the Oguri Cap standing here now...
    - Had thrown every last worry away.

#资深级 12月 第4周 （G1）有马纪念 1着 中山 芝 2500m（長距離） 右・内
#指定强敌：目白莱恩、目白阿尔丹、八重无敌
#赛后・选手休息室
arim_kin_final_win:
  title: "Oguri Cap: The Final Battle (Part 2)"
  lines:
    - The race hadn't gone smoothly. In an Arima Kinen where average finish times clock in at barely two minutes and change, a single mistake can be fatal.
    - And %YOU% could tell—in the final stretch, Oguri Cap was running on fumes.
    - Any other %UMA% would've cried "I can't!" and fallen off pace the moment exhaustion hit.
    -
    - But %SEX% held on through sheer willpower.
    - No—not just held on. %SEX% accelerated again.
    - As the crowd erupted, %YOU% saw %SEX%'s mouth split open—the grin of a predator locking onto prey.
    - %YOU%'s jaw dropped. Both hands white-knuckled the railing.
    -
    - The shackles fate had clamped on %SEX%—ripped apart. The iron wall God had erected—smashed through headfirst.
    - 「Impossible!」In the equally stunned eyes of %SEX%'s rivals, Oguri Cap broke past %SEX%'s own limits once more, leaving %THEY% far behind...
    -
    - acc: 1
      content: 「GO!!」
    -
    - The instant Oguri Cap crossed the finish line, %SEX% claimed the final crown of %SEX%'s career—bringing everything to a perfect close.
    - %SEX% eased off, bathed in the roar of tens of thousands.
    - No wild celebration. No ecstatic triumph. On %SEX%'s face, only an ethereal sense of release.
    - As Oguri Cap crossed that line, %YOU% simply exhaled long and slow, letting the heat in %YOU%'s chest finally cool.
    -
    - After the grand curtain call, Oguri Cap's era would end.
    -
    - 'Some time later, %YOU% heard someone say: "In that Arima Kinen, it was a god running inside Oguri Cap."'
    - %YOU% neither agreed nor disagreed.
    -
    - In that moment, %YOU% hadn't seen a god in %SEX%.
    - What %YOU% saw was %SEX% shattering divine arrangement, barging into %SEX%'s own "domain."
    - The grey Cinderella needs no god. No spell that breaks at midnight.
    - Because this blazing soul possesses its own—"God's Forbidden Zone."

#资深级 ？月 第？周 （G？） 拟・日本德比 出走 东京 芝 2400m（中距离）左·内
#指定强敌：Symboli Rudolf、千明代表、天狼象征、樱花千代王、Tamamo Cross、八重无敌
#赛前・操场
palace_start:
  title: To the Champions (Part 1)
  lines:
    - The sun hung low. %YOU% sat casually beside Trésen's famous oval track, watching the training %UMA% push themselves.
    - With a renowned trainer like %YOU%—who'd produced the legendary Oguri Cap—watching from the sideline, every %UMA% instinctively tensed up and trained harder.
    - And Oguri Cap, already changed into sportswear, was itching to go.
    - The retired living legend probably wouldn't go all-out here, but sharing a track with %SEX% was an honor in itself!
    -
    - acc: 1
      content: 「Warm-up done? Get out there.」
    -
    - %YOU% smiled faintly and sent Oguri off onto the track to burn off energy once the warm-up was finished.
    - Technically, the three-year contract had expired. %YOU% and Oguri Cap's agreement was fulfilled. But they kept up daily training as usual, never letting it slip.
    - Endorsements and appearance bookings still poured in nonstop. Every day brought a flood of calls.
    - As if... "Miracle White Star" Oguri Cap had never retired at all.
    -
    - %SEX% stepped onto the turf, tested the give with a light toe-tap, then—became a shooting star. As if merging with the wind, strides light yet powerful.
    - %YOU% watched Oguri Cap's silhouette backlit by the slanting sun, running free in the breeze. Mind calm, at peace.
    - Until another shadow slipped in behind Oguri Cap without a sound—and %YOU%'s eyes went wide.
    - Who?
    -
    - Then another. And another.
    - %YOU% scrambled up from the ground for a clearer view.
    - Oguri Cap glanced back. The figures %SEX% saw made %SEX%'s pupils dilate.
    - It was—
    -
    - Two generations of Triple Crown champions—Symbol Rudolf and Mr. C.B.—running side by side, chasing Oguri Cap.
    - Mr. C.B. grinned and tipped the cap on %SEX%'s ear in greeting.
    -
    - color: %CB_COLOR%
      content:
        - fontWeight: bold
          content: Mr.C.B
        - 「Hey there~ Oguri Cap.」
    -
    - Beside %SEX%, Symbol Rudolf wore a faint smile—casual as chatting with an old friend.
    -
    - color: %L_COLOR%
      content:
        - fontWeight: bold
          content: Symboli Rudolf
        - 「Sorry—are we interrupting your training?」
    -
    - Symbol Rudolf and Mr. C.B. running alongside Oguri Cap!
    - The other %UMA% on the grounds had already started exclaiming, calling friends over.
    - %YOU%'s jaw clenched, eyes darting to the shadows following close behind.
    -
    - color: %SI_COLOR%
      content:
        - fontWeight: bold
          content: Sirius Symboli
        - 「How's retirement treating you? Let me help you get used to it!」
    -
    - An elegant earring on the right ear, a rebellious wolf howling those words—wild crimson eyes practically glowing.
    - Opposite that energy, flustered and shy but with not a hint of chaos in stride, was another powerhouse.
    - Derby %UMA% Sirius Symboli and Sakura Chiyono O?
    -
    - color: %CH_COLOR%
      content:
        - fontWeight: bold
          content: Sakura Sendai O
        - 「I-I was dragged here by the President—!」
    -
    - Oguri Cap couldn't help slowing down, turning to stare at the four legendary %UMA% standing before %SEX%.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「What are you all...」
    -
    - acc: 1
      content: 「What in the world is going on?」
    -
    - Two generations of Triple Crown winners and two generations of Derby %UMA% had appeared on the oval track without warning. The moment %THEY% showed up, all peace on the grass vanished.
    - The crowd surged toward the track—students and staff rushing over, excitement palpable, packing the area tight.
    - A roar of chatter rose and fell like waves, the air thick with tension and thrill.
    -
    - content:
        - fontWeight: bold
          content: Student A
        - 「What are %THEY% doing... are they going to race?!」
    - content:
        - fontWeight: bold
          content: Student B
        - 「A practice race? Now? Here?!」
    - content:
        - fontWeight: bold
          content: Student C
        - 「With a lineup this stacked, are we really allowed to watch?!」
    -
    - A streak of golden hair emerged from the crowd, pushing a wheelchair to the front row.
    -
    - content:
        - fontWeight: bold
          content: Student A
        - 「Gold City-senpai, Stardom-senpai! Are you here to race too?!」
    -
    - The newcomer was Gold City. Seated in the wheelchair before %SEX% was old rival Sakura Stardom.
    - The student froze mid-sentence, seemingly realizing the blunder—expression shifting from excitement to panic, hands flying to cover the mouth.
    - Gold City raised an eyebrow at the careless student. Sakura Stardom simply lowered %SEX%'s gaze and said nothing.
    -
    - color: %ST_COLOR%
      content:
        - fontWeight: bold
          content: Sakura Star O
        - 「Count me out. It'll be a while before I can run again. What about you, City?」
    -
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: Gold City
        - 「I have a shoot later. I'll have to pass.」
    -
    - Even without them, the track was crowded enough.
    - Because moments later, with electric arcs snapping in the air, a certain short-statured figure with white hair parted the sea of people in two.
    - That figure walked with composure, gaze sharp, locked onto the only person who mattered right now.
    - Behind %SEX% followed another %UMA% renowned for toughness—Kongou Yaegaki-style, Yaeno Muteki.
    - The two joined the lineup, surrounding Oguri Cap completely.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Tama...」
    -
    - Tamamo Cross just grinned fiercely, thumb jabbing toward the white starting line on the track.
    -
    - acc: 1
      content: 「Rudolf, what exactly are you all planning?」
    -
    - %YOU% could barely keep up with what was happening.
    - Then Symbol Rudolf's voice carried across the field.
    -
    - color: %L_COLOR%
      content:
        - fontWeight: bold
          content: Symboli Rudolf
        - 「Everyone here has been thinking the same thing for a while now.」
    - color: %L_COLOR%
      content:
        - fontWeight: bold
          content: Symboli Rudolf
        - 「Oguri Cap—we'd like to hold a race with you. A simulated Japan Derby, right here at Trésen.」
    -
    - The Japan Derby—the race Oguri Cap had been locked out of due to missed timing. The greatest regret for both of them. An unfinished dream.
    - The watching crowd stirred.
    -
    - content:
        - fontWeight: bold
          content: Student B
        - 「A Derby? Did I hear that right—they want to hold a Derby!」
    -
    - Now gathered here were the Emperor, the Hero, Sirius, the Wrestler, Lightning, and the Unbeatable.
    - These legends who'd written history on the track wanted to stage a mock Derby for Oguri Cap at Trésen.
    - %YOU% and Oguri Cap locked eyes—at this point, there was nothing to do but accept the kindness.
    -
    - acc: 1
      content: 「Oguri. Crush them.」
    -
    - Oguri Cap nodded firmly. %YOU% knew that even without a word of encouragement, %SEX% would never refuse a clash of titans.
    - Go, Oguri.
    - "Show the world: it wasn't you who missed the Derby—it was the Derby that missed you!"

#资深级 ？月 第？周 （G？） 拟・日本德比 出走 东京 芝 2400m（中距离）左·内
#指定强敌：Symboli Rudolf、千明代表、天狼象征、樱花千代王、Tamamo Cross、八重无敌
#赛后・操场
palace_end:
  title: To the Champions (Part 2)
  lines:
    - The mock Derby wasn't perfect.
    - The turf hadn't been groomed like the real thing. The Trésen crowd was nothing compared to an official race.
    - With only seven runners, it couldn't replicate the controlled chaos of a real field.
    -
    - But Oguri Cap wore a contented smile.
    - Because %SEX% had survived the hunt—six elite predators bearing down on %SEX%—and come out alive.
    - %SEX% panted hard, pace gradually slowing, drifting toward %YOU% out of habit.
    -
    - acc: 1
      content: '「...Well done, Oguri.」'
    -
    - %YOU% handed over a towel and an energy drink, nodding to the other runners in acknowledgment.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Ah... this is... my Derby.」
    -
    - Imperfect turf. A modest crowd. Only seven on the track.
    - But people saw it.
    - Seven living legends giving everything—clashing, pushing, sprinting—all fighting for the win.
    - Not a single one half-hearted. Every one of them desperate for the top. That's what made this fake crown worth everything.
    -
    - acc: 1
      content: 「And with that—you're officially a Derby runner!」
    -
    - Oguri Cap smiled, wide and genuine.
    - %SEX% turned and embraced each opponent one by one.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Thank you, everyone.」
    -
    - color: %L_COLOR%
      content:
        - fontWeight: bold
          content: Symboli Rudolf
        - 「Back then, I refused to petition on your behalf...」
    - color: %L_COLOR%
      content:
        - fontWeight: bold
          content: Symboli Rudolf
        - 「I'm truly sorry.」
    -
    - %YOU% remembered—they'd once asked this Student Council President to advocate for Oguri's entry.
    - Instead, the enraged President had thrown them out. Hard to believe it had weighed on Symbol Rudolf's mind all this time.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「No, I think...」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Even the real Derby wouldn't have given me what today's race did.」
    -
    - Oguri Cap shook %SEX%'s head, looked up, and took in all six runners.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「This feeling... heart pounding, lungs stretched to the limit, like if I slowed down even a fraction you'd all devour me.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「It can't be summed up as just excitement or fear.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Thank you—for giving me a 'Derby' with no regrets.」
    -
    - %YOU% watched with a grin as Oguri Cap reached out to shake hands with everyone—then got flustered trying to decide who to shake first. A charmingly awkward sight.
    - Here on this dusk-soaked track, if you took a deep breath, the air would feel cleaner than it ever had before.

#（隐藏）4月 第3周 皐月赏
#赛前 休息室内
#触发条件：重复育成时解除【迟到者】状态，选择出战皋月赏
sats_sho:
  title: Before the Satsuki Sho
  lines:
    - 「Satsuki」is an elegant name for April, and the race named after it signals the opening of spring's competitive season.
    - It's both the prologue to the Classic Triple Crown and the starting line for countless %UMA% on the road to the summit.
    -
    - Right now, contestant Oguri Cap sat in the locker room chair, buzzing with excitement.
    -
    - acc: 1
      content: 「Listen up, Oguri.」
    -
    - %YOU% cleared %YOU%'s throat, gestured coolly at the tablet screen.
    - It didn't show any elaborate strategy or analysis chart—just the words "SATSUKI" in gold-framed, oversized text.
    -
    - acc: 1
      content: 「The Satsuki Sho is just the first gate. Clear it, and the Triple Crown is only two more away!」
    -
    - %YOU%'s words were, frankly, hollow—empty of substance, as if someone were just filling air with text.
    - Like "every sixty seconds, a minute passes." Like trying to sound wise by saying "water is wet" or "the sky is blue."
    - But Oguri Cap responded with fired-up enthusiasm to %YOU%'s absurdly simple conclusion. %SEX% would prove everything through action—silence every doubter.
    -
    - Locked out of the Classic Triple Crown just for being a latecomer?
    - How could some outdated rule cage someone destined for the big stage?
    - No more doubts. Oguri Cap from the local circuit would shatter the rules starting here—the Satsuki Sho.
    - "%SEX% would show the world: a local %UMA% can shine just as bright on the grandest stage!"
    -
    - Wearing a confident smile, Oguri Cap took the first step toward conquest.

#（隐藏）4月 第3周 皐月赏
#赛后 休息室内
#触发条件：重复育成时解除【迟到者】状态，选择出战皋月赏胜利
sats_sho_win:
  title: After the Satsuki Sho
  lines:
    - color: %COLOR%
      content: Without question, Oguri Cap won.
    - color: %COLOR%
      content: The two high-fived on the track, greeted by a tidal wave of cheers.
    - color: %COLOR%
      content: The crowd surged like a frenzied sea—roaring, trembling.
    -
    - color: %COLOR%
      content: Then heaven and earth inverted. The invisible order collapsed.
    - color: %COLOR%
      content: Something absurd and indescribable seeped from the depths of time and space.
    -
    - color: %COLOR%
      content: What was black became white; what was white became black.
    - color: %COLOR%
      content: What was ground became sky; what was sky became ground.
    - color: %COLOR%
      content: What was victory became defeat; what was defeat became victory.
    -
    - color: %COLOR%
      content: Worse still—Oguri Cap looked up and saw a figure eerily similar to %SEX%self standing on the podium.
    - color: %COLOR%
      content: That being smiled with an uncanny, half-real quality, hoisting the Satsuki Sho trophy toward the stands.
    - color: %COLOR%
      content: The crowd's cheers warped into piercing shrieks, layered with low groans crashing against %SEX%'s eardrums in chaotic waves.
    - color: %COLOR%
      content: %SEX% fought off dizziness and looked down at %SEX%'s chest—gone. As if it had never existed.
    - color: %COLOR%
      content: The trophy that belonged to %SEX% had vanished!
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「What's happening?!」
    -
    - color: %COLOR%
      content: %SEX%'s crimson pupils trembled uncontrollably.
    - color: %COLOR%
      content: Looking up again, %SEX% was no longer in that inverted Nakayama Racecourse. A nauseating void wrapped around %SEX% like a cocoon.
    -
    - color: %COLOR%
      content: So cold. So powerless. Heart racing, hands trembling.
    -
    - color: %COLOR%
      content: %YOU%—where are you?!
    - color: %COLOR%
      content: Mom, March, Tama—someone save me!
    -
    - color: %COLOR%
      content: Oguri Cap screamed in a place that was both bright and dark at once.
    - color: %COLOR%
      content: What was this place? How could something both bright and dark even exist—defying every law of physics?
    - color: %COLOR%
      content: %SEX% held out %SEX%'s hand, staring at the sharp, defined lines of those fingers—no light source anywhere, yet perfectly visible.
    - color: %COLOR%
      content: As if the darkness itself glowed, or %SEX%'s eyes had adapted to some alien mode of perception.
    - color: %COLOR%
      content: No sound surrounded %SEX% either. Even %SEX%'s screams produced not the faintest echo.
    - color: %COLOR%
      content: "In the final moment, %SEX% seemed to hear %SEX%'s own voice—low, blurred, rising from a distant abyss:"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「You don't belong here...」
    -
    - color: %COLOR%
      content: Oguri Cap jolted awake at 4 AM, undershirt soaked through with cold sweat.
    - color: %COLOR%
      content: %SEX% glanced at roommate Tamamo Cross, still sleeping soundly, and let out a quiet sigh.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「A dream...」
    -
    - color: %COLOR%
      content: Oguri Cap thought so, then shifted %SEX%'s gaze to the window.
    - color: %COLOR%
      content: Outside—total darkness. No moon.

#（隐藏）4月 第4周
#训练员室
#触发条件：重复育成时解除【迟到者】状态，选择出战皋月赏
nightmare:
  title: Nightmare
  lines:
    - Something was off about Oguri Cap. %YOU% could tell %SEX% was more distracted than usual, but didn't call it out directly.
    - "For example, right now: whenever %YOU% browsed Classic Triple Crown news on the computer, %SEX% would drift behind %YOU%'s shoulder to read along—thinking %YOU% hadn't noticed."
    - Clearly still hung up on the Classic races.
    -
    - acc: 1
      content: 「Oguri, do you have thoughts about the Classic Triple Crown?」
    -
    - The office chair swiveled with a creak as %YOU% turned around.
    - %SEX%'s eyes went wide, fingers lacing together nervously in front of %SEX%.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Actually... I had a dream about the Satsuki Sho.」
    -
    - %YOU% tilted %YOU%'s head with curiosity, then patiently listened to the full account of the terrifying dream.
    - The Satsuki Sho trophy snatched away by another version of %SEX%—possibly a manifestation of impostor syndrome.
    - The inability to honestly attribute success to one's own effort, believing it was luck or external factors instead.
    -
    - As a trainer, %YOU% needed to correct that thinking. But just as %YOU% was about to speak—
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Is it because I can't actually race that I keep dreaming about it...」
    -
    - %YOU% did a double-take. Why would %SEX% say that?
    -
    - acc: 1
      content: 「What do you mean, 'can't race'?」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Huh? You know, the thing about my transfer timing making registration impossible...」
    -
    - That issue was resolved ages ago thanks to Symbol Rudolf's efforts.
    - %YOU% said as much, puzzled. Oguri Cap remained thoroughly confused.
    - So %YOU% leaned over and pointed toward the trophy cabinet in the office.
    -
    - acc: 1
      content: 「That—isn't that the trophy you won back then?」
    -
    - Oguri Cap's world spun. Impossible... %SEX% clearly remembered that back then—!
    - On the third shelf, dead center of the elegant cabinet, a jaw-dropping trophy stood quietly. Beside it, a championship pennant folded crisp as a block of tofu.
    - "And engraved on that trophy's heavy base, in exquisite lettering: Satsuki Sho—Champion."

#（隐藏）4月 第4周
#训练员室
#触发条件：重复育成时解除【迟到者】状态，选择出战皋月赏，触发噩梦事件
awake:
  title: Awakening
  lines:
    - color: %COLOR%
      content: %SEX% was certain that "Oguri Cap entered the Satsuki Sho and won" existed only as a fleeting glimpse within a dream.
    - color: %COLOR%
      content: Nor had there ever been a Student Council President Symbol Rudolf petitioning for %SEX%'s Triple Crown eligibility.
    - color: %COLOR%
      content: But every time %SEX% tried to recall the details, the memories receded like a tide—leaving only blankness and a dull ache in %SEX%'s skull.
    -
    - color: %COLOR%
      content: %SEX% looked around the room. Every object carried a subtle wrongness %SEX% couldn't name.
    - color: %COLOR%
      content: The familiar furniture, familiar curtains, even the familiar smell—all coated now in something cold and alien.
    - color: %COLOR%
      content: As if this wasn't the Trainer's Office at all, but a perfect replica. A reality forged by someone else.
    -
    - color: %COLOR%
      content: But the genuine confusion on %YOU%'s face made %SEX% doubt %SEX%'s own judgment.
    - color: %COLOR%
      content: Maybe the problem wasn't with %YOU%—maybe it was just %SEX%'s head that was broken.
    - color: %COLOR%
      content: But—what if there was another possibility?
    - color: %COLOR%
      content: What if this entire world, %YOU% included, was the fabrication?
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I... I can't remember...」
    -
    - color: %COLOR%
      content: %YOU% drew in a small, sharp breath.
    -
    - acc: 1
      content: 「A bit worse than I expected...」
    -
    - color: %COLOR%
      content: Then %YOU% rose from the swivel chair on ninety-nine tentacle-like legs, gliding smoothly forward—lidless, pupil-less eyes snapping into Oguri Cap's face at point-blank range.
    - color: %COLOR%
      content: Before Oguri Cap could scream at %YOU%'s features dissolving into featurelessness, everything in sight began to tear apart like ripped canvas.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Another... dream?」
    -
    - color: %COLOR%
      content: %SEX% woke again—this time in the comfortable bed of the Trésen dormitory.
    - color: %COLOR%
      content: This time %SEX% didn't dare look around. %SEX% just pulled the blanket over %SEX%'s head and surrendered to precious sleep once more.
    - color: %COLOR%
      content: A full moon slid out from behind the clouds, casting a gentle glow through the window.

#（隐藏）经典级 5月 第4周  日本德比
#赛前 休息室内
#触发条件：重复育成时解除【迟到者】状态，选择出战日本德比
toky_yus:
  title: Before the Derby
  lines:
    - color: %COLOR%
      content: Oguri Cap stood at the locker room door in racing gear, face blank with confusion.
    - color: %COLOR%
      content: %SEX% couldn't understand why %SEX% kept dreaming of running in the Classic Triple Crown, over and over.
    - color: %COLOR%
      content: %YOU% gave %SEX%'s shoulder a light pat, encouraging the visibly anxious Oguri Cap.
    -
    - acc: 1
      content: 「With this, the promise with that person can be kept too.」
    -
    - color: %COLOR%
      content: "%YOU% said with a smile. Hearing that, %SEX% remembered: %SEX% had indeed promised everyone in Kasamatsu to become a Derby runner."
    - color: %COLOR%
      content: But according to Oguri Cap's own memory... the rules should've made registration impossible.
    - color: %COLOR%
      content: And yet—why was %SEX% standing on the Derby stage now? Why, after the Satsuki Sho ended, was %SEX% here again?
    - color: %COLOR%
      content: This clearly couldn't be explained by a simple "it all worked out."
    -
    - color: %COLOR%
      content: Oguri Cap took a deep breath, forcing down the confusion churning inside.
    - color: %COLOR%
      content: Whatever was happening—the track was real, the opponents were real, and %SEX%'s legs were ready to run.
    - color: %COLOR%
      content: That was enough.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「...I'm going.」
    -
    - color: %COLOR%
      content: %SEX% pushed open the locker room door and stepped into the light.

#（隐藏）经典级 5月 第4周  日本德比
#赛後 休息室内
#触发条件：重复育成时解除【迟到者】状态，选择出战日本德比胜利
toky_yus_win:
  title: After the Derby
  lines:
    - color: %COLOR%
      content: The instant the finish line flashed past Oguri Cap's vision, the surrounding noise seemed to shatter into countless fragmented echoes.
    - color: %COLOR%
      content: Oguri Cap was swallowed by an eerie silence. %SEX%'s limbs still trembled faintly with the aftershock of sprinting.
    -
    - acc: 1
      content: 「Congratulations.」
    -
    - color: %COLOR%
      content: %YOU%'s face—which should have been beaming with joy—was gradually blurring, as if some invisible force were erasing the details, leaving only a hollow outline.
    - color: %COLOR%
      content: The sunlight that should have been brilliant now dimmed to a sickly yellow, as though a film of rot had settled over the entire racecourse.
    -
    - color: %COLOR%
      content: Oguri Cap ignored everything except %YOU%, quietly standing before the thing that no longer resembled a person.
    - color: %COLOR%
      content: The %YOU% before %SEX% had no features, no vitality—joints twitching in random, irregular spasms.
    - color: %COLOR%
      content: %SEX% had realized that this place was no simple illusion, but some deeper layer of alien reality.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「%YOURNAME%... No. Who are you, really?」
    -
    - color: %COLOR%
      content: %SEX%'s body leaned slightly forward, legs coiled like bowstrings ready to snap, feet shifting to find a more solid stance.
    - color: %COLOR%
      content: The shape of %YOU% before Oguri Cap's eyes kept shifting.
    - color: %COLOR%
      content: Arms were no longer arms—nine upon nine flesh-colored tentacles twisted together in chaotic knots, forming some grotesque tool-like structure.
    - color: %COLOR%
      content: Beneath the trousers, the legs seemed to house nine alien things squirming under the skin. If you called it a pulse three times normal speed, the writhing was far too chaotic for that.
    - color: %COLOR%
      content: Through the fabric, %SEX% could faintly make out nine clusters of intertwined tube-like appendages, each cluster composed of nine slender tendrils—tangled, grinding against each other with a teeth-clenching sound.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Answer me!」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: ？？？
        - 「The answer lies in Trésen, within the courtyard fountain... my precious child...」
    -
    - color: %COLOR%
      content: %SEX%'s breathing came quick and shallow, chest heaving.
    - color: %COLOR%
      content: Oguri Cap was so tense that %SEX% didn't even notice the voice of "%YOURNAME%" wasn't coming from outside—but welling up from deep within %SEX%'s own mind.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「The fountain... isn't that where the Three Goddesses statue is?」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: ？？？
        - 「Bring %YOURNAME% to the fountain and seek the truth... Oguri Cap...」

truth:
  title: The Truth
  lines:
    - Oguri Cap was certain %SEX% was fully awake. The dream-version of %YOU%—or whatever that thing was—apparently couldn't affect reality.
    - Or perhaps it didn't need to, since it had asked Oguri Cap to bring %YOU% to the Three Goddesses statue.
    -
    - %YOU% walked shoulder to shoulder with Oguri Cap, listening as %SEX% explained everything.
    -
    - acc: 1
      content: 「So you raced the first two legs of the Triple Crown... in your dreams.」
    -
    - Oguri Cap was having serial dreams—the kind where the "plot" picks up right where it left off each time.
    - Something this strange happening to the %UMA% %YOU% cared about most naturally piqued %YOU%'s curiosity.
    - But %SEX% immediately shot down %YOU%'s hypothesis of "subconsciously obsessing over races," insisting that the dream-%YOU% had told them both to visit the Three Goddesses statue.
    - Even with work to do, %YOU% agreed without fuss—call it a change of pace and looking after Oguri.
    -
    - After all, it was just paying respects at a shrine. What could go wrong?
    -
    - And then %YOU% watched as both %YOU% and Oguri Cap were swallowed by a pitch-black tide surging from every direction.
    - They plunged into an indescribable space—no up, no down, no direction, not even solid ground.
    - Standing impossibly firm in such a void, both turned toward the only sliver of light.
    - The moment they focused on the light source, a searing glare hit—not a physical reflex from bright light.
    - But because what they beheld was beyond what any human mind could process...
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: ？？？
        - 「Forgive us, little lamb... Our existence is not something thy eyes may witness directly.」
    -
    - Within that abstract, indescribable mass of light—three colors flowing like liquid streams—%YOU% glimpsed something that could only be called divine.
    - Its ancient, blurred voice vibrated from within the chaos of their minds.
    - Oguri Cap gripped %YOU%'s right hand tight, as if expecting this—steadying %SEX%'s own nerves and anchoring them both.
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: ？？？
        - 「Oguri Cap... %YOURNAME%... Welcome to 'My' 'Domain'...」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: ？？？
        - 「I have watched thee—across time and space, through worlds and universes... Truly fascinating.」
    -
    - The red light pulsed with each syllable. The blue and gold lights bore down with unmistakable pressure, as if coldly observing %YOU%'s every move.
    - %YOU%'s prefrontal cortex felt like it had been struck by an invisible chisel. What flooded in wasn't text or images—it was a torrent of pure concept.
    - Without order, without cause—truth forced itself through the walls of %YOU%'s mind like a tsunami.
    -
    - The red light tore %YOU%'s senses into countless fragments.
    - %YOU% hung like a blazing sun at the apex of the sky, looking down simultaneously at countless figures sprinting at breakneck speed.
    -
    - Then came the gentle call of the blue light. It pierced %YOU%'s chest, replacing air with something viscous and suffocating—emotion given substance.
    - Countless souls tangled and merged within %YOU%'s nonexistent lungs, coalescing into an endless sea.
    -
    - Finally, the searing heat of the gold light. A blinding golden chain coiled around %YOU%'s legs, turning every bone into gravity's prisoner.
    - %YOU%'s body lost all support, slowly sinking into burning earth...
    -
    - "Under tension that nearly exceeded the limits of a heartbeat, %YOU% finally understood: this was the true form of the Three Goddesses worshipped in %UMA% faith."
    -
    - if: era.get('cflag:340:66') === 1 || era.get('cflag:341:66') === 1 || era.get('cflag:342:66') === 1
      lines:
        - Completely unlike the approachable goddesses %YOU% knew—yet beneath the unfamiliarity, something familiar lingered.
        - "%YOU% suddenly realized: no matter what form these three took, their essence never changed."
        - The thought that this overwhelming sphere of light could technically be considered an old acquaintance eased the pressure just a tiny bit.
    -
    - content:
        - That crimson orb represents
        - color: '#e94b4e'
          content: Darley Arabian
        - ;
        - that azure radiance symbolizes
        - color: '#8d9ad9'
          content: Godolphin Barb
        - ;
        - and that golden light is the manifestation of
        - color: '#d6c230'
          content: Byerly Turk
        - .
    -
    - No—perhaps more accurately, these sacred forms were merely a fraction of Them made visible. A pale interpretation by limited human cognition of Their vast existence.
    - Before this orb, %YOU% saw %YOU%'s own insignificance—and the enormity of the cosmos.
    - Their essence far exceeded what any mortal could comprehend. Even this radiance itself was but a faint afterimage projected onto reality's surface.
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「Thy doubts—We already understand.」
    -
    - color: '#8d9ad9'
      content:
        - fontWeight: bold
          content: Godolphin Barb
        - 「Long, long ago—before time had form, before space had borders—the universe was nothing but endless darkness and silence. No light, no sound, not even hope.」
    -
    - color: '#d6c230'
      content:
        - fontWeight: bold
          content: Byerley Turk
        - 「And so, We began to weave a world—transforming it into a grand arena. Every inch of soil, every lane of track, is a thread of fate woven by Our own hands.」
    -
    - The three-colored lights began alternating, revealing a story no mortal was meant to know.
    - The content wasn't so different from "And God said, let there be a firmament amidst the waters..."—and yet—
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「The world thou inhabits is, in truth, a copy of a parallel universe—a simulation framework re-woven from the core extracted from 'reality.'」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「At the same time, We chose to create a special form of life. Beings possessing both human wisdom and the speed and power of horses.」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「These beings' souls originate from another universe. Merged with human flesh, what is born is—the racing %UMA%.」
    -
    - ...So this is the truth of the world?
    - To inherit that soul and run—that is their destiny.
    - And Oguri Cap's bizarre dreams were also part of Their experiment.
    - %SEX%'s dreams were Their testing ground—a bridge spanning reality and illusion.
    -
    - Oguri Cap had always believed those dreams were just subconscious phantoms born of anxiety over not being able to race.
    - Now %SEX% learned the dreams were trials and gifts imposed by three incomprehensible "deities."
    - They cared about Oguri Cap. %SEX%'s effort, %SEX%'s running—none of it was meaningless to Them.
    -
    - And yet, all of this was too vast—%YOU% looked at %SEX%'s forced composure facing the orb, and squeezed Oguri Cap's hand again.
    -
    - "No matter what this world truly was, no matter what the Three Goddesses had planned—for %YOU%, only one thing mattered:"
    -
    - acc: 1
      content: 「HAAH—!」
    -
    - %YOU% let out a thunderous shout—a blade of sound cleaving through the darkness and whispers pressing down on them both.
    -
    - %YOU% shouted—not because %YOU% didn't fear these unknowable beings.
    - %YOU% shouted to fulfill %YOU%'s duty as a trainer, as Oguri Cap's protector.
    - %YOU% shouted to reclaim %YOU%'s own strength—to shield the %UMA% who'd entrusted %SEX%'s future to %YOU%.
    -
    - acc: 1
      content: '「...So why did you make Oguri dream those dreams?」'
    -
    - %YOU%'s breathing was ragged—a caged beast, chest heaving from the shock of facing divinity head-on.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「%YOURNAME%!」
    -
    - The orb's pressure on Oguri Cap began to fade.
    - Every echo They'd left in %SEX%'s mind was scattered clean by %YOU%'s roar. A spark of courage to face the divine flickered to life inside %SEX%.
    - %SEX% bit down on %SEX%'s lower lip and stared at the now-silent orb.
    -
    - color: '#8d9ad9'
      content:
        - fontWeight: bold
          content: Godolphin Barb
        - 「The pain thou suffered in dreams, the fear, even that small happiness—all were Our tests of thy heart.」
    -
    - color: '#d6c230'
      content:
        - fontWeight: bold
          content: Byerley Turk
        - 「We shattered the boundaries of reality for thee, placing thee upon true racecourses to face %UMA% thou should never have met—」
    -
    - color: '#e94b4e'
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「—And now, for the final trial, We shall serve as thy opponents Ourselves.」
    -

prepare:
  title: Racing Against the Clock
  lines:
    - Morning light filtered faintly through the mist on the track.
    - Oguri Cap's ears twitched, betraying inner unease. %SEX%'s tail swayed restlessly.
    - %YOU% stood nearby, tablet in hand, unable to find the right words.
    - Because the real pressure wasn't in today's training—it was in the unknowable dream ahead.
    -
    - The Kikuka Sho arranged by the Three Goddesses in the dream was only one week away.
    - This was no ordinary Kikuka Sho. It was a "trial."
    - %YOU% couldn't fully understand how the dream racecourse worked, nor participate in it.
    -
    - The entire burden fell on Oguri Cap alone.
    - All %YOU% could do was prepare Oguri Cap in the real world as best as possible.

#（隐藏）经典级 10月 第4周 （G1） 菊花赏
#？？？
#指定强敌：Darley Arabian、Godolphin Barb、Byerley Turk
#触发条件：重复育成时解除【迟到者】状态，选择出战菊花赏
kiku_sho:
  title: Chrysanthemum
  lines:
    - Oguri Cap stood at the starting point of the dream. The surrounding world looked like an incomprehensible abstract painting.
    - In the distant sky—burning like flame—hung a deep red sun. A benevolent warmth drifted through the air. Hairline cracks in the ground leaked golden light.
    - %SEX% looked around. Kyoto Racecourse stood in form only—no audience, just row after row of empty seats.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Not even pretending anymore.」
    -
    - %SEX% murmured.
    -
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「Because there's no need to hide it any longer, little lamb.」
    -
    - Darley Arabian's voice came suddenly from behind, startling Oguri Cap.
    - %SEX% turned. On the grass that had been empty moments ago stood another %UMA%.
    - The Darley Arabian before %SEX% was no longer the orb of light they'd seen before—but a humanoid figure with brilliant red hair.
    -
    - Oguri Cap's pupils contracted. %SEX% understood immediately why the goddess had taken human form.
    -
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: Darley Arabian
        - 「For today's Kikuka Sho, having us as your opponents shouldn't be... beneath you, right?」
    -
    - Darley Arabian swept an arm lightly. With that motion, blue and gold radiance bloomed in the air.
    - Two figures stepped from the light and stood at her side.
    -
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: Godolphin Barb
        - 「Good morning, Oguri.」
    -
    - "The first: Godolphin Barb in blue, nodding with a smile—warmth and severity both in that gaze."
    -
    - color: %B_COLOR%
      content:
        - fontWeight: bold
          content: Byerley Turk
        - 「A 3000-meter Kikuka Sho is no joke. Have you and your Trainer prepared properly?」
    -
    - "The second: Byerly Turk, standing tall, not a trace of a smile on that stern face."
    - %SEX% simply snorted, arms crossed over %SEX%'s chest. Oguri Cap couldn't shake the feeling that Byerly Turk reminded %SEX% of the Student Council President.
    -
    - acc: 1
      content: 「I'm... going to race against gods?」
    -
    - Three goddesses in the flesh, challenging %SEX% directly. Oguri Cap's heart hammered, body trembling, nerves wound tight to the breaking point.
    - ...This was—
    -
    - The best race %SEX% could ever ask for!
    -
    - The warrior's tremble before battle had never been this intense.
    - Three Goddesses—let me show you what a colossal mistake it is to challenge Oguri Cap!

#（隐藏）经典级 10月 第4周 （G1） 菊花赏
#？？？
#触发条件：重复育成时解除【迟到者】状态，选择出战菊花赏胜利
kiku_sho_win:
  title: A Fleeting Dream
  lines:
    - The instant %SEX% crossed the finish, the barrier between dream and reality shattered too.
    - The space around %SEX% splintered like a broken mirror, scattering countless shards of light—and %YOU% stood just ahead.
    - Oguri Cap's body was still hurtling forward, momentum impossible to kill in an instant. %SEX% crashed straight into %YOU%.
    - %SEX%'s body slammed into %YOU%'s chest with unstoppable force, dragging them both to the ground in a tangled heap.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「%YOURNAME%...」
    -
    - Freshly torn from the dream, Oguri Cap panted in %YOU%'s arms. Fine beads of sweat still clung to %SEX%'s forehead, shoulders trembling.
    - Whether from excitement or exhaustion, %SEX% had unconsciously grabbed %YOU%'s collar and wouldn't let go.
    -
    - acc: 1
      content: 「Oguri—you did it.」
    -
    - They looked up at the Three Goddesses statue under the moonlight. The pale glow draped over the statues like a sacred veil crowning their victory.
    - The stone figures hadn't moved, of course. But somehow... %YOU% could swear They wore satisfied expressions.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「They're smiling.」
    -
    - %YOU% murmured in reply. The two gazed at the stars and the goddesses in silence for a long while.
    -
    - acc: 1
      content: 「So... the Kikuka Sho. Did you enjoy the run?」
    -
    - Oguri Cap nodded, still gripping %YOU%'s collar, though %SEX%'s body seemed to have relaxed.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「I raced alongside those three. It was wonderful.」
    -
    - After a long moment, the two finally pulled themselves off the ground, brushing away the dust.
    - Oguri Cap's movements were still sluggish—not fully awake from the crossover of dream and reality.
    -
    - acc: 1
      content: 「Alright! To celebrate Oguri Cap's Classic Triple Crown, dinner's on me tonight!」
    -
    - Oguri Cap blinked, then broke into a shy smile and nodded gently.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: Oguri Cap
        - 「Thank you, Trainer.」
    -
    - The two walked slowly along the moonlit path. Behind them, the Three Goddesses statue stood watch in the night, silently gazing after them.
    - This strange journey began in a false dream—and ended in a truth crafted by the divine.
    -
    - The Satsuki Sho, the Japan Derby, the Kikuka Sho...
    - Races Oguri Cap should never have been able to touch—made possible through divine intervention.
    - The gods had even challenged Oguri Cap personally.
    -
    - But what truly shook %SEX% to the core wasn't those gilded victories themselves. It was—
    - When Darley Arabian issued the challenge, %SEX% hadn't felt even a shred of hesitation.
    -
    - Nothing could make %SEX% prouder than that.
    - Later, while draining %YOU%'s wallet dry at dinner, %SEX% would absolutely make %YOU% praise %SEX% properly too.
    - So %SEX% thought.
