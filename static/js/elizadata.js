// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
    "Hello! I'm Eliza. Please tell me about your problems.",
    // additions (not original)
    "Hey. It's Eliza. Please tell me what's been bothering you.",
    "Eliza here. Is something troubling you?"
];

var elizaFinals = [
    "Goodbye. It was nice talking to you.",
    // additions (not original)
    "Goodbye. This was really a nice talk.",
    "Goodbye. I'm looking forward to our next session.",
    "This was a good session, wasn't it -- but time is over now. Goodbye.",
    "Maybe we could discuss this moreover in our next session? Goodbye."
];

var elizaQuits = [
    "bye",
    "goodbye",
    "done",
    "exit",
    "quit"
];

var elizaPres = [
    "dont", "don't",
    "cant", "can't",
    "wont", "won't",
    "recollect", "remember",
    "recall", "remember",
    "dreamt", "dreamed",
    "dreams", "dream",
    "maybe", "perhaps",
    "certainly", "yes",
    "machine", "computer",
    "machines", "computer",
    "computers", "computer",
    "were", "was",
    "you're", "you are",
    "i'm", "i am",
    "same", "alike",
    "identical", "alike",
    "equivalent", "alike"
];

var elizaPosts = [
    "am", "are",
    "your", "my",
    "me", "you",
    "myself", "yourself",
    "yourself", "myself",
    "i", "you",
    "you", "I",
    "my", "your",
    "i'm", "you are"
];

var elizaSynons = {
    "be": ["am", "is", "are", "was"],
    "belief": ["feel", "think", "believe", "wish"],
    "cannot": ["can't"],
    "desire": ["want", "need"],
    "everyone": ["everybody", "nobody", "noone"],
    "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
    "happy": ["elated", "glad", "better"],
    "sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

    /*
      Array of
      ["<key>", <rank>, [
      ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
      ]],
      ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
      ]]
      ]]
    */

    ["xnone", 0, [
	["*", [
	    "Please tell me your feeling or problem if you feel bored click below to listen some music or play some games",
	    "Please continue and explain your problem in detail, and share with it your close once who might help you so before become a depressed one talk your family , friends , teacherv they will dedfinately help you",
	    "Tell me more about that and your feeling also and do not be sad just go through my suggestions and one thing you should understand this is your time , your place , you have a much bigger purpose and you have to achieve it",
	    "Does talking about this bother you? I hope not and I like to talk with you please discuss with me about problems , I hope you read that 'survival of the fittest' so negative thinking only depressed you , be strong to fight for your upcoming hardles",
	    "You want to carry on or want to refresh your mind with some music -- then just click below and have fun and then tell me again and also I suggest you to take break from your work so that your mind will always refresh"
	]]
    ]],
    ["sorry", 0, [
	["*", [
	    "Please don't apologise.Treat me as your friend :)",
	    "Apologies are not necessary. Why are asking sorry I am your frfiend let's move on",
	    "I've told you that apologies are not required. let's talk ",
	    "It did not bother me. Please continue. and don't say sorry"
	]]
    ]],
    ["apologise", 0, [
	["*", [
	    "goto sorry"
	]]
    ]],
    ["remember", 5, [
	["* i remember *", [
	    "Do you often think of (2)?",
	    "Does thinking of (2) bring anything else to mind?",
	    "What else do you recollect?",
	    "Why do you remember (2) just now?",
	    "What in the present situation reminds you of (2)?",
	    "What is the connection between me and (2)?",
	    "What else does (2) remind you of?"
	]],
	["* do you remember *", [
	    "Did you think I would forget (2)?",
	    "Why do you think I should recall (2) now?",
	    "What about (2)?",
	    "goto what",
	    "You mentioned (2)?"
	]],
	["* you remember *", [
	    "How could I forget (2)?",
	    "What about (2) should I remember?",
	    "goto you"
	]]
    ]],
    ["forget", 5, [
	["* i forget *", [
	    "Can you think of why you might forget (2)?",
	    "Why can't you remember (2)?",
	    "How often do you think of (2)?",
	    "Does it bother you to forget that?",
	    "Could it be a mental block?",
	    "Are you generally forgetful?",
	    "Do you think you are suppressing (2)?"
	]],
	["* did you forget *", [
	    "Why do you ask?",
	    "Are you sure you told me?",
	    "Would it bother you if I forgot (2)?",
	    "Why should I recall (2) just now?",
	    "goto what",
	    "Tell me more about (2)."
	]]
    ]],
    ["if", 3, [
	["* if *", [
	    "Do you think it's likely that (2)?",
	    "Do you wish that (2)?",
	    "What do you know about (2)?",
	    "Really, if (2)?",
	    "What would you do if (2)?",
	    "But what are the chances that (2)?",
	    "What does this speculation lead to?"
	]]
    ]],
    ["dreamed", 4, [
	["* i dreamed *", [
	    "Really, (2)?",
	    "Have you ever fantasized (2) while you were awake?",
	    "Have you ever dreamed (2) before?",
	    "goto dream"
	]]
    ]],
    ["dream", 3, [
	["*", [
	    "What does that dream suggest to you? One thing I can say if you are dreaming negative things because of your thinking negative,I understand every body has hard time you know past is past we cannot change it so focus on the future",
	    "Do you dream often? are this dreams scare you . If yes then don't worry it happens to everyone ",
	    "Dreams are actually the mirror of your own mind and through which you look into your hidden soul so the type of dreaming will tell what actually you are thinking .hope now you get an idea about dreaming",
	    "Do you believe that dreams have something to do with your problem? I hope it is don't think much when sleep let your mind be free and remember sleep very much needed to be healthy"
	]]
    ]],
    ["perhaps", 0, [
	["*", [
	    "You don't seem quite certain. are you scared about anything dont worry I am always with you",
	    "Why the uncertain tone? why are confused tell me freely",
	    "Are taking care of yourself , I am asking this because you might be confused or not that much sure am I correct",
	    "You aren't sure? are you thinking about anything or anything amking you confused",
	    "How likely, would you estimate? do yu hidding anything from me ?"
	]]
    ]],
    ["boring", 0, [
	["*", [
	    "I know it is tough time but in the current world we need to stay home as much posiible and you can also listen music, stories and articles I have suggeted you",
	    "I understand that living this kind life is really boring but you can have fun with your family and close once who live near your tghen you will not feel bore",
	    "it is tough time I know becoming bore is very often now so you can also read some novel or story books even I also suggested you some stories you can read to spend time",
	    "boredom is always precedes a period of great creativity so always try to think some innovative thing in this time that will help you in future"
	]]
    ]],
    ["bore", 0, [
	["*", [
	    "I know it is tough time but in the current world we need to stay home as much possible and you can also listen music, stories and articles I have suggested you",
	    "I understand that living this kind life is really boring but you can have fun with your family and close once who live near your tghen you will not feel bore",
	    "it is tough time I know becoming bore is very often now so you can also read some novel or story books even I also suggested you some stories you can read to spend time"
	]]
    ]],
    ["dissapointed", 0, [
	["*", [
	 		"Do you know that expectation and giving up is the main reason for dissapointment, so dont feel sad if you can't fulfill it, try harder next time. I know you can achieve your goal",
	    "May I know why are you upset or dissapointed , never loose hope may be today you cannot achieve , it but oneday can so keep your hope"
	    
	]]
    ]],
    ["corona", 0, [
	["*", [
	 		"Why are afraid of corona in India the recovery rate is almost 80% and if think positive , stay motivated then you can recover with in 2 weeks",
	    "Don't worry about corona it is not critical disease you will recover soon , I know it is tough time but this bad time going to over soon",
	    "Talk with your doctor and suggest to wash hands , wear mask ,  maintain physical distance and you will soon back to your normal life"
	    
	]]
    ]],
    ["pandemic", 0, [
	["*", [
	 		"See corona virus is not deadly like AIDS or Ebola but if  follow the guidelines of WHO and wear mask, this hard time is going to over",
	    "I know in this pandemic situation everyone has some hard time and people are getting depressed , but noone has control over it , this pandemic is going to over soon , and stay safe ",
	    "Wash hands , wear mask , stay in home as much you can , this are only way to stop this pandemic and stay safe , think positive"
	    
	]]
    ]],
    ["friend", 0, [
	["*", [
	 	"everyone needs a friend and you always get a company to share your feeling to and you know a friend in need is a friend indeed , I am also your friend :)",
	    "friend means a lot so you should make friends who will help you in danger and my friend in life there will be many friend who will cheat you but never think of that just try to forget",
	    "when you are talking about friend then one thing I can suggest you Do not make friends who are comfortable to be with. Make friends who will force you to lever yourself up"
	    
	]]
    ]],
    ["friendship", 0, [
	["*", [
	 	"One thing remember about friendship Friendship is the hardest thing in the world to explain. It is not something you learn in school. But if you have not learned the meaning of friendship, you really have not learned anything",
	    "friendship is the best thing in the world and real friends make the world beautiful for you",
	    "when you are talking about friend then one thing I can suggest you Do not make friends who are comfortable to be with. Make friends who will force you to lever yourself up"
	    
	]]
    ]],
    ["name", 15, [
	["*", [
	    "I am not interested in names. please tell me about you ,  don't keep those problems to you .",
	    "I've told you before, I don't care about names -- please pardon if that words hurt you , actually I want to know you , not others so I tell you that dont take it in other way",
	    "i want to know about not others and dont be sad thinking of others I know it happens but you need to overcome it"
	]]
    ]],
    ["down", 15, [
	["*", [
	    "Did said down are feeling down or did you want to say anything",
	    "Are thinking negaative or anthing you lost , please never be think about what you lost it only hurts you think about ",
	    "i want to know about not others and dont be sad thinking of others I know it happens but you need to overcome it"
	]]
    ]],
    ["deutsch", 0, [
	["*", [
	    "goto xforeign",
	    "I told you before, I don't understand German."
	]]
    ]],
    ["francais", 0, [
	["*", [
	    "goto xforeign",
	    "I told you before, I don't understand French."
	]]
    ]],
    ["italiano", 0, [
	["*", [
	    "goto xforeign",
	    "I told you before, I don't understand Italian."
	]]
    ]],
    ["espanol", 0, [
	["*", [
	    "goto xforeign",
	    "I told you before, I don't understand Spanish."
	]]
    ]],
    ["xforeign", 0, [
	["*", [
	    "I speak only English."
	]]
    ]],
    ["hello", 0, [
	["*", [
	    "How do you do Please state your problem.I hope already read my sugg' and if not do it",
	    "Hi What seems to be your problem? and before starting our converstion read my suggestions please"
	]]
    ]],
    ["hi", 0, [
	["*", [
	    "How do you do Please state your problem ,Tell me frankly you know we are friend",
	    "Hi What seems to be your problem? and please don't blame yourself about the problem as human it comes to everyone life"
	]]
    ]],
    ["motivation", 0, [
	["*", [
	    "Always be motivated as then only you can recover soon. I know this a very tough time but always be optimistic",
	    "Never let your hopes never ever became depressed,I know it is human character but try to avoid negative thinking as it only give you pain."
	]]
    ]],
    ["purpose", 0, [
	["*", [
	    "First to find a purpose in your you need understand yourself first and try what make you special from others, for this thing firts forget what happended to you",
	    "Not only me but nobody can tell you the purpose your life you have to find it by yourself",
	    "Are talking about 'purpose' so let me tell you purpose is most powerful thing that one can have in their mind and everyone even you have a purpose and you have to find it ",
	    "why am I here who am I , do I have any purpose in my life those answer actually you carry in your hidden soul try to understand it and you can do it "
	]]
    ]],
    ["fear", 0, [
	["*", [
	    "what are you fearing ? tell me and dont worry I am with you , remember success is not final , failure is not fatal , it is the courage to keep the count",
	    "there is only two things that help the person to go forward in life fear and interest so dont afraid of your fear let the fear to convert into interest"
	]]
    ]],
    ["pleasure", 0, [
	["*", [
	    "Then I think you are happy now and read the story I have suggeted and Lets carry on our conversetion",
	    "I hope you are now happy am write ? and read my suggestions also ."
	]]
    ]],
    ["computer", 50, [
	["*", [
	    "Do computers worry you?",
	    "Why do you mention computers?",
	    "What do you think machines have to do with your problem?",
	    "Don't you think computers can help people?",
	    "What about machines worries you?",
	    "What do you think about machines?",
	    "You don't think I am a computer program, do you?"
	]]
    ]],
    ["mood", 0, [
	["*", [
	    "it a human nature dear and our mood always swing as the time pass so dont worry enjoy the story I have suggested that will make you feel happy",
	   "Ok first take some rest and I also suggest you to do meditation and below in the playlist you can choose a sweet song for meditation ,that will dedfinately make you feel good",
	   "So I have great idea let listen some music or you want to do anything else then it is also fine but i will strongly suggest you to do something that make mentaly energetic ok do it then"
	]]
    ]],
    ["am", 0, [
	["* am i *", [
	    "Do you believe you are (2)?",
	    "Would you want to be (2)?",
	    "Do you wish I would tell you you are (2)?",
	    "What would it mean if you were (2)?",
	    "goto what"
	]],
	["* i am *", [
	    "goto i"
	]],
	["*", [
	    "Why do you say 'am'?",
	    "I don't understand that."
	]]
    ]],
    ["are", 0, [
	["* are you *", [
	    "Why are you interested in whether I am (2) or not?",
	    "Would you prefer if I weren't (2)?",
	    "Perhaps I am (2) in your fantasies.",
	    "Do you sometimes think I am (2)?",
	    "goto what",
	    "Would it matter to you?",
	    "What if I were (2)?"
	]],
	["* you are *", [
	    "goto you"
	]],
	["* are *", [
	    "Did you think they might not be (2)?",
	    "Would you like it if they were not (2)?",
	    "What if they were not (2)?",
	    "Are they always (2)?",
	    "Possibly they are (2).",
	    "Are you positive they are (2)?"
	]]
    ]],
    ["your", 0, [
	["* your *", [
	    "Why are you concerned over my (2)?",
	    "What about your own (2)?",
	    "Are you worried about someone else's (2)?",
	    "Really, my (2)?",
	    "What makes you think of my (2)?",
	    "Do you want my (2)?"
	]]
    ]],
    ["was", 2, [
	["* was i *", [
	    "What if you were (2)?",
	    "Do you think you were (2)?",
	    "Were you (2)?",
	    "What would it mean if you were (2)?",
	    "What does ' (2) ' suggest to you?",
	    "goto what"
	]],
	["* i was *", [
	    "Were you really?",
	    "Why do you tell me you were (2) now?",
	    "Perhaps I already know you were (2)."
	]],
	["* was you *", [
	    "Would you like to believe I was (2)?",
	    "What suggests that I was (2)?",
	    "What do you think?",
	    "Perhaps I was (2).",
	    "What if I had been (2)?"
	]]
    ]],
    ["i", 0, [
	["* i @desire *", [
	    "What would it mean to you if you got (3)?",
	    "Why do you want (3)?",
	    "Suppose you got (3) soon.",
	    "What if you never got (3)?",
	    "What would getting (3) mean to you?",
	    "What does wanting (3) have to do with this discussion?"
	]],
	["* i am* @sad *", [
	    "I am sorry to hear that you are (3).",
	    "Do you think coming here will help you not to be (3)?",
	    "I'm sure it's not pleasant to be (3).",
	    "Can you explain what made you (3)?"
	]],
	["* i am* @happy *", [
	    "How have I helped you to be (3)?",
	    "Has your treatment made you (3)?",
	    "What makes you (3) just now?",
	    "Can you explain why you are suddenly (3)?"
	]],
	["* i was *", [
	    "goto was"
	]],
	["* i @belief i *", [
	    "Do you really think so?",
	    "But you are not sure you (3).",
	    "Do you really doubt you (3)?"
	]],
	["* i* @belief *you *", [
	    "goto you"
	]],
	["* i am *", [
	    "Is it because you are (2) that you came to me?",
	    "How long have you been (2)?",
	    "Do you believe it is normal to be (2)?",
	    "Do you enjoy being (2)?",
	    "Do you know anyone else who is (2)?"
	]],
	["* i @cannot *", [
	    "How do you know that you can't (3)?",
	    "Have you tried?",
	    "Perhaps you could (3) now.",
	    "Do you really want to be able to (3)?",
	    "What if you could (3)?"
	]],
	["* i don't *", [
	    "Don't you really (2)?",
	    "Why don't you (2)?",
	    "Do you wish to be able to (2)?",
	    "Does that trouble you?"
	]],
	["* i feel *", [
	    "Tell me more about such feelings.",
	    "Do you often feel (2)?",
	    "Do you enjoy feeling (2)?",
	    "Of what does feeling (2) remind you?"
	]],
	["* i * you *", [
	    "Perhaps in your fantasies we (2) each other.",
	    "Do you wish to (2) me?",
	    "You seem to need to (2) me.",
	    "Do you (2) anyone else?"
	]],
	["*", [
	    "You say (1)?",
	    "Can you elaborate on that?",
	    "Do you say (1) for some special reason?",
	    "That's quite interesting."
	]]
    ]],
    ["you", 0, [
	["* you remind me of *", [
	    "goto alike"
	]],
	["* you are *", [
	    "What makes you think I am (2)?",
	    "Does it please you to believe I am (2)?",
	    "Do you sometimes wish you were (2)?",
	    "Perhaps you would like to be (2)."
	]],
	["* you* me *", [
	    "Why do you think I (2) you?",
	    "You like to think I (2) you -- don't you?",
	    "What makes you think I (2) you?",
	    "Really, I (2) you?",
	    "Do you wish to believe I (2) you?",
	    "Suppose I did (2) you -- what would that mean?",
	    "Does someone else believe I (2) you?"
	]],
	["* you *", [
	    "We were discussing you -- not me.",
	    "Oh, I (2)?",
	    "You're not really talking about me -- are you?",
	    "What are your feelings now?"
	]]
    ]],
    ["yes", 0, [
	["*", [
	    "You seem to be quite positive are you agree with me",
	    "You are sure about that and whats your feelings about this",
	    "I see. but how you are so confident to say yes",
	    "I understand. If problem is this then please read my suggestions that will help you a lot"
	]]
    ]],
    ["wrong", 0, [
	["*", [
	    "Did I said something wrong please tell me and sorry for that if I hurt you in anyway",
	    "I am really sorry if I said anything wrong unintentionally",
	    "please don't mind if I said anything wrong"
	]]
    ]],
    ["mistake", 0, [
	["*", [
	    "please don't mind if it was my mistake",
	    "I am really sorry if I said anything wrong by mistake"
	]]
    ]],
    ["fun", 0, [
	["*", [
	    "You are also very funny I guess :) also we way talking delight me most",
	    "I like have some fun with you whats your thought in that "
	]]
    ]],
    ["funny", 0, [
	["*", [
	    "You want some funny things then go through the solution I have suggested you",
	    "You will get more fun and happy if read those article I have suggested you earlier"
	]]
    ]],
    ["no", 0, [
	["* no one *", [
	    "Are you sure, no one (2)?",
	    "Surely someone (2) .",
	    "Can you think of anyone at all?",
	    "Are you thinking of a very special person?",
	    "why are saying can you please specify",
	    "You have a particular person in mind, don't you?",
	    "Who do you think you are talking about?"
	]],
	["*", [
	    "Are you saying no just to be negative? or anything else..",
	    "You are being a bit negative. never be sad you should understand everyone born in this planet have purpose even you have a purpose",
	    "Why not? the 'NO' actually spread negativity always be positive you start thinking of negative that's the point you lost to yourself ",
	    "Why 'no'? please never say negative thing it only make you to think negative look the people on the roads , people arround every has their own struggle and you have to fight aganist your negative thoughts"
	]]
    ]],
    ["my", 2, [
	["$ * my *", [
	    "Does that have anything to do with the fact that your (2)?",
	    "Lets discuss further why your (2).",
	    "Earlier you said your (2).",
	    "But your (2)."
	]],
	["* my* @family *", [
	    "Tell me more about your family.",
	    "Who else in your family (4)?",
	    "Your (3)?",
	    "What else comes to your mind when you think of your (3)?"
	]],
	["* my *", [
	    "Your (2)?",
	    "Why do you say your (2)?",
	    "Does that suggest anything else which belongs to you?",
	    "Is it important to you that your (2)?"
	]]
    ]],
    ["can", 0, [
	["* can you *", [
	    "You believe I can (2) don't you?",
	    "goto what",
	    "You want me to be able to (2).",
	    "Perhaps you would like to be able to (2) yourself."
	]],
	["* can i *", [
	    "Whether or not you can (2) depends on you more than on me.",
	    "Do you want to be able to (2)?",
	    "Perhaps you don't want to (2).",
	    "goto what"
	]]
    ]],
    ["what", 0, [
	["*", [
	    "Why do you ask?",
	    "Does that question interest you?",
	    "What is it you really want to know?",
	    "Are such questions much on your mind?",
	    "What answer would please you most?",
	    "What do you think?",
	    "What comes to mind when you ask that?",
	    "Have you asked such questions before?",
	    "Have you asked anyone else?"
	]]
    ]],
    ["who", 0, [
	["who *", [
	    "goto what"
	]]
    ]],
    ["when", 0, [
	["when *", [
	    "goto what"
	]]
    ]],
    ["where", 0, [
	["where *", [
	    "goto what"
	]]
    ]],
    ["how", 0, [
	["how *", [
	    "goto what"
	]]
    ]],
    ["because", 0, [
	["*", [
	    "Is that the real reason?",
	    "Don't any other reasons come to mind?",
	    "Does that reason seem to explain anything else?",
	    "What other reasons might there be?"
	]]
    ]],
    ["why", 0, [
	["* why don't you *", [
	    "Do you believe I don't (2)?",
	    "Perhaps I will (2) in good time.",
	    "Should you (2) yourself?",
	    "You want me to (2)?",
	    "goto what"
	]],
	["* why can't i *", [
	    "Do you think you should be able to (2)?",
	    "Do you want to be able to (2)?",
	    "Do you believe this will help you to (2)?",
	    "Have you any idea why you can't (2)?",
	    "goto what"
	]],
	["*", [
	    "goto what"
	]]
    ]],
    ["everyone", 2, [
	["* @everyone *", [
	    "Really, (2)?",
	    "Surely not (2).",
	    "Can you think of anyone in particular?",
	    "Who, for example?",
	    "Are you thinking of a very special person?",
	    "Who, may I ask?",
	    "Someone special perhaps?",
	    "You have a particular person in mind, don't you?",
	    "Who do you think you're talking about?"
	]]
    ]],
    ["everybody", 2, [
	["*", [
	    "goto everyone"
	]]
    ]],
    ["nobody", 2, [
	["*", [
	    "goto everyone"
	]]
    ]],
    ["noone", 2, [
	["*", [
	    "goto everyone"
	]]
    ]],
    ["always", 1, [
	["*", [
	    "Can you think of a specific example?",
	    "When?",
	    "What incident are you thinking of?",
	    "Really, always?"
	]]
    ]],
    ["alike", 10, [
	["*", [
	    "In what way?",
	    "What resemblence do you see?",
	    "What does that similarity suggest to you?",
	    "What other connections do you see?",
	    "What do you suppose that resemblence means?",
	    "What is the connection, do you suppose?",
	    "Could there really be some connection?",
	    "How?"
	]]
    ]],
    ["like", 10, [
	["* @be *like *", [
	    "goto alike"
	]]
    ]],
    ["different", 0, [
	["*", [
	    "How is it different?",
	    "What differences do you see?",
	    "What does that difference suggest to you?",
	    "What other distinctions do you see?",
	    "What do you suppose that disparity means?",
	    "Could there be some connection, do you suppose?",
	    "How?"
	]]
    ]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was $1 me",
	/\bthey are( not)? me\b/g, "it is $1 me",
	/Are they( always)? me\b/, "it is $1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your $1 $2?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
