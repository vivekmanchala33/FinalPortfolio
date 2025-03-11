"Carleton " by Vivek

The Bald Spot is a room. "Bald Spot is blanketed in ice, with pathways leading to the rink. A Carleton College student is standing near the center, wearing ice skates and throwing a frisbee. Duerr fields is to the east and Sayles is to the west. A teleporter leads to Duerr Fields .The gateway to The Lib stands nearby, almost inviting you in."

The Carleton student is a person in the Bald Spot. The description of the Carleton student is "A friendly-looking student dressed for the cold weather, with a bright scarf and a steaming mug in hand. They seem approachable and ready for a chat."

The student can be greeted or ungreeted. The student is ungreeted.

The student has a number called insult count. The insult count of the student is 0.

Greeting is an action applying to one thing. 
Understand "greet [thing]" or "say hello to [thing]" or "say hi to [thing]" or "wave to [thing]" or "hello [thing]" as greeting. 

Check greeting:
	if the noun is not the student, say "There's no point in greeting that." instead.

Carry out greeting the student:
	if the student is ungreeted:
		now the student is greeted;
		say "The student smiles warmly. 'Hi there! Feel free to ask me about Carleton, college life, or how we handle the cold weather.'";
	otherwise:
		say "The student is already ready to answer your questions."

Instead of asking the student about something when the student is ungreeted:
	say "The student looks confused. Maybe start with a greeting?"

Understand "ask [someone] about [text]" as asking it about.

After asking the student about something:
	repeat through the Table of Student Topics:
		if the topic understood matches the topic entry:
			say "[response entry][paragraph break]";
			rule succeeds;
	say "'I'm not sure about that,' the student says. 'Try asking me about college, frisbee, or the weather!'"

After asking Phillip Bowen about something:
	repeat through the Table of Duerr Topics:
		if the topic understood matches the topic entry:
			say "[response entry][paragraph break]";
			rule succeeds;
	say "'I’m not sure about that,' Phillip Bowen says. 'Try asking me about CUT, Syzygy, or ultimate frisbee history!'"

Table of Student Topics
topic	response
"college"	"'College life at Carleton is rewarding but busy,' the student says. 'It’s such a supportive environment—you’ll never feel like just a number here.'"
"weather"	"'Winters here are pretty intense,' the student admits. 'But honestly, layers make all the difference. We’ve learned to embrace it!'"
"classes"	"'Classes are definitely challenging, but in a good way. The professors are amazing and super approachable!'"
"activities"	"'There’s always something happening on campus,' the student explains. 'From ultimate frisbee to choir concerts, you’ll find your niche.'"
"frisbee"	"'Ultimate frisbee is huge here! Our teams, CUT and Syzygy, are incredible—you should check them out!'"
"food"	"'The dining hall food is actually pretty good,' the student says. 'There’s lots of variety, and they’re great about dietary needs.'"
"friends"	"'You’ll meet so many great people here,' the student says. 'The community is one of the best parts of Carleton.'"
"study spots"	"'There are so many cozy study spots! The library, Sayles, or even the Arboretum if you like the outdoors,' the student suggests."
"traditions"	"'Carleton has some wild traditions,' the student laughs. 'You’ll love Friday Flowers and Silent Dance Party.'"
"minnesota"	"'Minnesota is beautiful, especially in the winter. Just be ready for snow—lots of it!'"
"library"	"The Lib is the center of academic life on campus. It has four floors, and it gets quieter the lower you go."

Duerr Fields is a room. "The wide expanse of Duerr Fields stretches out before you. This is where Carleton's ultimate frisbee teams, CUT and Syzygy, practice and play. The air is filled with the energy of competition and camaraderie."

Phillip Bowen is a person in Duerr Fields. "Phillip Bowen, and the coach of CUT, stands nearby." The description of Phillip Bowen is "Phillip Bowen exudes a mix of wisdom and energy, with a clipboard in one hand and a frisbee in the other. He seems eager to talk about ultimate frisbee history."

The teleporter is a door. The teleporter is east of the Bald Spot and west of Duerr Fields. The teleporter is open and unopenable.

The gateway is a door. The gateway is north of the Bald Spot and south of The Lib. The gateway is open and unopenable.

The Lib is a room. "The Lib is a four-floor library that serves as the heart of the academic campus. It gets quieter on each descending level and is filled with an abundance of research materials. Many students spend countless hours here studying, writing, and exploring knowledge."

Table of Duerr Topics
topic	response
"CUT"	"CUT has won three national championships and is considered one of the best teams in the country. They might even win one this year..."
"Syzygy"	"Syzygy is our D1 women's ultimate team, they are probably the best sports team on campus, and have the coolest name too! "
"roster"	"Many players on CUT are using Inform 7 for their Coding with AI class!"
"sauna"	"Duerr has a sauna in his basement that CUT and Syzygy players can use whenever they want. A true luxury!"
"Florida Warmup"	"This weekend is Florida Warmup, one of the biggest tournaments of the season. It’s going to be an exciting one!"
"PBO"	"used to play for CUT back in the day and grew up in a small Minnesotan town. Those were the glory days!"
"Duerr Fields"	"Duerr Fields are named after Al Duerr, one of the founders of CUT. A fitting tribute to a legend in the sport!"
"traditions"	"There are so many CUT and Syzygy traditions, but Duerr says you’ll have to join to learn all the secrets!"
"windy days"	"On windy days, Duerr says the teams head to the indoor field house. No excuses, practice goes on!"
" alumni"	" alumni always come back for alumni weekend and are proud to see how the team continues to dominate"

After going to the Lib for the first time:
	end the story finally saying "Going to the Lib is a dumb idea, don’t study here, it always results in dropping out of school like you are right now, good luck."



