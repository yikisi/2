# @file Oguri Cap - Recruit
# @author 雞雞
# @author 雞雞 (translator)
rec:
  - Oguri Cap, Oguri Cap.
  - To Central Tracen, that is an unfamiliar name, but %YOU% have never forgotten it over the past year. No, a more accurate way to put it would be... the results of this Race %UMA%.
  - Twelve races, ten wins. The two defeats were second-place finishes by a hair's breadth... %YOU% sat at the office desk, flipping through the compiled data %YOU% had opened countless times.
  - That Race %UMA% started making a name for herself in the Local Series last year.
  - Unlike the Central Series which is officially run by the government, the Local Series is held autonomously by local racing leagues. In the eyes of %YOU%, a Central Trainer, their competitive level is still far below that of Central.
  -
  - acc: 1
    content: 「But we can't let our guard down just because she's from the locals.」
  -
  - %YOU% will never forget the heroic figure of the legendary Race %UMA%, Haiseiko, seen on TV during childhood.
  - That Race %UMA% came from the Local Series just like Oguri Cap, yet overcame obstacle after obstacle to reach the peak of the Central stage, single-handedly reigniting the fever for Race %UMA% sports which was in a slump at the time.
  - And after Haiseiko, there were strong horses like Rocky Tiger and Valley Lily coming from the locals to challenge Central.
  - Although no Race %UMA% has reached Haiseiko's height yet, it is an indisputable fact that the level of the Local Series is quietly rising...
  - Now, Oguri Cap seems poised to chase after Haiseiko and become the new local legend.
  - %YOU%'s gaze moved to the old newspaper set aside, which printed a photo of Oguri Cap dancing a folk dance on the winning stage after her first victory.
  -
  - Unlike other trainers who only started paying attention after %SEX% made a big splash at the Chukyo Cup months later, %YOU% became interested in Oguri Cap starting from the insignificant local races.
  - And this week, %SEX% will arrive at Central Tracen. At that time, %YOU% will become %SEX%'s new trainer.
  - The day the monster marches into Central Tracen has arrived. %YOU% stood nervously at the school gate waiting for Oguri Cap.
  - The Chairwoman's secretary, %T_NAME%, accompanied %YOU%, chatting idly to kill time.
  -
  - color: %T_COLOR%
    content:
      - content: %T_NAME%
        fontWeight: bold
      - 「%SIR% %YOURNAME%, your responsibility from here on out is quite heavy... Of course, I'm not saying the responsibility for other %UMA% isn't heavy.」
  - color: %T_COLOR%
    content:
      - content: %T_NAME%
        fontWeight: bold
      - 「But an %UMA% like Oguri Cap... is truly a rare prodigy.」
  -
  - acc: 1
    content: 「I understand. That's the side effect of high fame.」(Oguri Cap Motivation +1)
    lines:
      - color: %T_COLOR%
        content:
          - content: %T_NAME%
            fontWeight: bold
          - 「However, for a Race %UMA% like Oguri Cap, %SEX% probably doesn't care at all.」
      - %T_NAME% showed a meaningful smile as she spoke. %YOU% didn't expect %SEX% to follow Oguri Cap to this extent.
      - Just as %SEX% said, Oguri Cap is a rare, stoic Race %UMA%.
      - This stoicism doesn't refer to emotions or desires, but rather that %SEX%'s pursuit of racing is extremely pure and unblemished.
      - Unlike many Race %UMA%, Oguri Cap doesn't run for fame or profit, but steps onto the track simply embracing a love for racing and a competitive spirit.
  - acc: 2
    content: 「A prodigy, huh... How does she compare to you?」(%T_NAME% Fondness -20, Infatuation +2)
    if: era.get('cflag:301:57')?.who_am_i >= 1
    lines:
      - color: %T_COLOR%
        content:
          - content: %T_NAME%
            fontWeight: bold
          - 「Please don't joke around. I am just the Chairwoman's secretary.」
      - %T_NAME% showed a meaningful smile as she spoke, but %YOU% definitely felt the killing intent hidden beneath that smile.
      - %YOU% are not afraid that %SEX% would really get serious over this joke, because %SEX%''s little secret will remain in %YOU%''s heart forever.
      - %T_NAME% knows %YOU% won''t betray %SEX%, and %YOU% know that %SEX% knows %YOU% won''t betray %SEX%. This is your tacit understanding.
  -
  - That silver-haired figure appeared outside the school gate. It's Oguri Cap.
  - You hurriedly trotted over to welcome her, while %T_NAME% took the lead to greet Oguri Cap with flawless elegance.
  - color: %T_COLOR%
    content:
      - content: %T_NAME%
        fontWeight: bold
      - 「Welcome to 'Japan Race %UMA% Training Center Academy'. I am the Chairwoman's secretary—Tazuna Hayakawa.」
  - color: %T_COLOR%
    content:
      - content: %T_NAME%
        fontWeight: bold
      - 「If there is anything you don't understand, feel free to come discuss it with me anytime.」
  -
  - Oguri Cap's face, as always, showed no intention of expressing any emotion, but %SEX%'s eyes suddenly became serious when looking at %T_NAME%.
  - You could see the doubt in %SEX%'s eyes, and her entire aura became alert, like a wild beast catching the scent of a natural predator.
  -
  - acc: 1
    content: (What's wrong?) (Oguri Cap Motivation +1)
  - acc: 2
    content: (...This girl's intuition is really sharp.) (%T_NAME% Fondness -20, Infatuation +5)
    if: era.get('cflag:301:57')?.who_am_i >= 1
    lines:
      - %YOU% whispered at a volume only %T_NAME% could hear, and was immediately kicked covertly in the calf by %SEX%.
      - color: red
        content: (Stamina -10%!)
  -
  - To Oguri Cap, %T_NAME% is a stranger, but %SEX% and %YOU% were already old acquaintances back in Kasamatsu.
  - This is also why Oguri Cap agreed to entrust %SEX%'s career to %YOU%, this %TITLE% trainer.
  - Seeing a familiar face on this trip, a faint smile appeared on Oguri Cap's poker face.
  -
  - color: %COLOR%
    content:
    - content: Oguri Cap
      fontWeight: bold
    - content: 「Trainer %YOURNAME%, we meet again.」
  -
  - acc: 1
    content: 「Long time no see, Oguri.」
  -
  - color: %COLOR%
    content:
      - content: Oguri Cap
        fontWeight: bold
      - 「Let me reintroduce myself here—I am Oguri Cap, the Race %UMA% who will seize the nation.」
  - color: %COLOR%
    content:
      - content: Oguri Cap
        fontWeight: bold
      - 「Please take care of me.」
  -
  - Witnessed by Secretary %T_NAME%, %YOU% and Oguri Cap shook hands gently and smiled at each other.
  -
  - acc: 1
    content: 「Please take care of me.」
  - acc: 2
    content: 「The nation is too shallow for you... Let's conquer the world!」
