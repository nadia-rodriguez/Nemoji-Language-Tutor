'use strict';

const start = (say, sendButton) => {
	// use list to store conversation, easier to tell the difference
	say(['Hello, welcome to Nemoji Language Center ! 😊 ',
	'For your information as starting, our learning sections will be seperated ' +
	'into the vocabulary section and a short quiz to test what you learned. 🈶 📝  ',
	'Nemoji will teach you the most common words in six of the world\'s' +
	' most popular languages using emojis!']).then(() => {
		 sendButton('Are you ready for Nemoji? ▶️❓ ', [{title: 'Yes', payload: '0'}, 'No']);
		});
};

const state = (payload, say, sendButton) => {
	
	// help user navigate back
	function backtrack(category, language) {
		sendButton('What\'s next?', [{title: 'Pick Another Category', payload: 'a'},
		{title: 'Back to the Same Category', payload: category},
		{title: 'Learn it in Another 🗣️', payload: language},
		{title: 'Return to Menu', payload: '0'}, {title: 'Exit', payload: 'no'}]);
	}

	// help user choose a language to learn the chosen word in
	function chooseLanguage(wordID) {
		sendButton('What language would you like to learn the expression in?',
			[{title: 'A. 🇦🇪', payload: 'AR' + wordID}, {title: 'B. 🇨🇳', payload: 'CN' + wordID},
			{title: 'C. 🇫🇷', payload: 'FR' + wordID}, {title: 'D. 🇮🇹', payload: 'IT' + wordID},
			{title: 'E. 🇯🇵', payload: 'JP' + wordID}, {title: 'F. 🇪🇸', payload: 'ES' + wordID}]
			);
	}


    // choose activity: vocabulary or quiz?
	if (payload === '0') {
		say('First, please choose the learning section that you most preferred.').then( () => {
			// message
			sendButton('Learn Vocabulary or Take a Quiz?',
			// buttons
			[{title: 'Vocabulary 📖', payload: 'a'}, {title: 'Quiz 🖊️', payload: 'qz'}]);
		 });
		}

		// choose vocabulary category here
		if (payload === 'a') {
			sendButton('Here is the Vocabulary section. What category would you like to learn?',
			[{title: 'Expression 😀', payload: 'a1'}, {title: 'Animal 🐵', payload: 'a2'},
			{title: 'Food 🍑', payload: 'a3'}, {title: 'Transportation 🚘', payload: 'a4'},
			{title: 'Location ⛰️', payload: 'a5'}]
			);
		}
		
		
		//***********************************************************************************/
		// ************************* Category 1: Expression (a1) ******************************//
		//*********************************************************************************/
		// all expressions payload starts with b
		if (payload === 'a1') {
			sendButton('What expression would you like to learn?',
			[{title: 'A. 🙄', payload: 'b1'}, {title: 'B. 😀', payload: 'b2'},
			{title: 'C. 😢', payload: 'b3'}, {title: 'D. 😡', payload: 'b4'},
			{title: 'E. 😳', payload: 'b5'}, {title: 'F. 😱', payload: 'b6'}, 
			{title: 'G. 😰', payload: 'b7'}, {title: 'H. 😞', payload: 'b8'}, 
			{title: 'I. 😪', payload: 'b9'}, {title: 'J. 😌', payload: 'b10'}, 
			{title: 'K. 😲', payload: 'b11'}, {title: 'L. 😍', payload: 'b12'}]
			);
		}

		// ************************ Different Languages for Annoyed (b1)*********************//
		if (payload === 'b1') {
			chooseLanguage('b1')
		}
		// Arabic for annoyed
		if(payload === 'ARb1') {
			say(["🙄", "Annoyed", "منزعج", {attachment: 'audio',url: "https://bit.ly/2VLaYgn"}]).then(()=>{backtrack('a1')});
		}
		// Chinese for annoyed
		if(payload === 'CNb1') {
			say(["🙄", "Annoyed", "烦人", {attachment: 'audio',url: "https://bit.ly/2ZwbLDc"}]).then(()=>{backtrack('a1', 'b1')});
		}
		// French for annoyed
		if(payload === 'FRb1') {
			say(["🙄", "Annoyed", "agacé", {attachment: 'audio',url: "https://bit.ly/2O6F1uJ"}]).then(()=>{backtrack('a1', 'b1')});
		}
		// Italian for annoyed
		if(payload === 'ITb1') {
			say(["🙄", "Annoyed", 'infastidito/a', {attachment: 'audio',url: "https://bit.ly/3f2LBOL"}]).then(()=> {backtrack('a1', 'b1')});
		}
		// Japanese for annoyed
		if(payload === 'JPb1') {
			say(["🙄", "Annoyed", 'イライラする', {attachment: 'audio',url: "https://bit.ly/38tk3jn"}]).then(()=> {backtrack('a1', 'b1')});
		}
		// Spanish for annoyed
		if(payload === 'ESb1') {
			say(["🙄", "Annoyed", 'molesto/a', {attachment: 'audio',url: "https://bit.ly/3iBwm1t"}]).then(()=> {backtrack('a1', 'b1')});
		}

		// ************************ Different Languages for happy (b2)**************************************//
		if (payload === 'b2') {chooseLanguage('b2')}
		// Arabic for happy
		if(payload === 'ARb2') {
			say(["😀", "Happy", "سعيدة", {attachment: 'audio',url: "https://bit.ly/2Z2hfGU"}]).then(()=> {backtrack('a1', 'b2')});
		}
		// Chinese for happy
		if(payload === 'CNb2') {
			say(["😀", "Happy", "高兴", {attachment: 'audio',url: "https://bit.ly/2AqulnD"}]).then(()=> {backtrack('a1', 'b2')});
		}
		// French for happy
		if(payload === 'FRb2') {
			say(["😀", "Happy", "content", {attachment: 'audio',url: "https://bit.ly/2Z8G2sV"}]).then(()=> {backtrack('a1', 'b2')});
		}
		// Italian for happy
		if(payload === 'ITb2') {
			say(["😀", "Happy", 'felice', {attachment: 'audio',url: "https://bit.ly/38vH44U"}]).then(()=> {backtrack('a1', 'b2')});
		}
		// Japanese for happy
		if(payload === 'JPb2') {
			say(["😀", "Happy", 'ハッピー', {attachment: 'audio',url: "https://bit.ly/2AAE7Uo"}]).then(()=> {backtrack('a1', 'b2')});
		}
		// Spanish for happy
		if(payload === 'ESb2') {
			say(["😀", "Happy", 'contento', {attachment: 'audio',url: "https://bit.ly/31Inz86"}]).then(()=> {backtrack('a1', 'b2')});
		}

		// ************************ Different Languages for sad (b3)**************************************//
		if (payload === 'b3') {chooseLanguage('b3')}
		// Arabic for sad
		if(payload === 'ARb3') {
			say(["😢", "Sad", "حزين", {attachment: 'audio',url: "https://bit.ly/2Z0pcMp"}]).then(()=> {backtrack('a1', 'b3')});
		}
		// Chinese for sad
		if(payload === 'CNb3') {
			say(["😢", "Sad", "伤心", {attachment: 'audio',url: "https://bit.ly/3giQfIW "}]).then(()=>{backtrack('a1', 'b3')});
		}
		// French for sad
		if(payload === 'FRb3') {
			say(["😢", "Sad", "triste", {attachment: 'audio',url: "https://bit.ly/2AzmQuG"}]).then(()=> {backtrack('a1', 'b3')});
		}
		// Italian for sad
		if(payload === 'ITb3') {
			say(["😢", "Sad", 'triste', {attachment: 'audio',url: "https://bit.ly/3e15KDR"}]).then(()=>{backtrack('a1', 'b3')});
		}
		// Japanese for sad
		if(payload === 'JPb3') {
			say(["😢", "Sad", '悲しい', {attachment: 'audio',url: "https://bit.ly/31LtkBN"}]).then(()=>{backtrack('a1', 'b3')});
		}
		// Spanish for sad
		if(payload === 'ESb3') {
			say(["😢", "Sad", 'triste', {attachment: 'audio',url: "https://bit.ly/31R88KL"}]).then(()=>{backtrack('a1', 'b3')});
		}

		// ************************ Different Languages for angry (b4)**************************************//
		if (payload === 'b4') {chooseLanguage('b4')}
		// Arabic for angry
		if(payload === 'ARb4') {
			say(["😡", 'Angry', "غاضب", {attachment: 'audio',url: "https://bit.ly/2C7TbZY"}]).then(()=> {backtrack('a1', 'b4')});
		}
		// Chinese for angry
		if(payload === 'CNb4') {
			say(["😡", "Angry", "生气", {attachment: 'audio',url: "https://bit.ly/3gmEv8d"}]).then(()=> {backtrack('a1', 'b4')
			});
		}
		// French for angry
		if(payload === 'FRb4') {
			say(["😡", "Angry", "en colère", {attachment: 'audio',url: "https://bit.ly/2C8YtEz"}]).then(()=> {backtrack('a1', 'b4')});
		}
		// Italian for angry
		if(payload === 'ITb4') {
			say(["😡", "Angry", 'Arrabbiato/a', {attachment: 'audio',url: "https://bit.ly/2ZCrocd"}]).then(()=>{backtrack('a1', 'b3')});
		}
		// Japanese for angry
		if(payload === 'JPb4') {
			say(["😡", "Angry", '怒り', {attachment: 'audio',url: "https://bit.ly/2YYGh9I"}]).then(()=> {backtrack('a1', 'b4')});
		}
		// Spanish for angry
		if(payload === 'ESb4') {
			say(["😡", "Angry", 'enojado/a', {attachment: 'audio',url: "https://bit.ly/3iuel5r"}]).then(()=> {backtrack('a1', 'b4')});
		}

		// ************************ Different Languages fo embarrassed (b5)**************************************//
		if (payload === 'b5') {chooseLanguage('b5')}
		// Arabic for embarrassed
		if(payload === 'ARb5') {
			say(["😳", 'Embarrassed', "أحرجت", {attachment: 'audio',url: "https://bit.ly/3f5z9hw "}]).then(()=> {backtrack('a1', 'b5')});
		}
		// Chinese for embarrassed
		if(payload === 'CNb5') {
			say(["😳", "Embarrassed", "尴尬", {attachment: 'audio',url: "https://bit.ly/2YYNHKh"}]).then(()=> {backtrack('a1', 'b5')});
		}
		// French for embarrassed
		if(payload === 'FRb5') {
			say(["😳", "Embarrassed", "embarrassé", {attachment: 'audio',url: "https://bit.ly/3f6Kn54"}]).then(()=> {backtrack('a1', 'b5')});
		}
		// Italian for embarrassed
		if(payload === 'ITb5') {
			say(["😳", "Embarrassed", 'Imbarazzato/a', {attachment: 'audio',url: "https://bit.ly/2AvCfw9"}]).then(()=> {backtrack('a1', 'b5')});
		}
		// Japanese for embarrassed
		if(payload === 'JPb5') {
			say(["😳", "Embarrassed", '恥ずかしい', {attachment: 'audio',url: "https://bit.ly/38sOdTE"}]).then(()=> {backtrack('a1', 'b5')});
		}
		// Spanish for embarrassed
		if(payload === 'ESb5') {
			say(["😳", "Embarrassed", 'avergonzado/a', {attachment: 'audio',url: "https://bit.ly/2ZIkhyO"}]).then(()=> {backtrack('a1', 'b5')});
		}

		// ************************ Different Languages for Scared(b6)**************************************//
		if (payload === 'b6') { chooseLanguage('b6')}
		// Arabic for scared
		if(payload === 'ARb6') {
			say(["😱", 'Scared', "مفزوع", {attachment: 'audio',url: "https://bit.ly/3iHUi3w "}]).then(()=>{backtrack('a1', 'b6')});
		}
		// Chinese for scared
		if(payload === 'CNb6') {
			say(["😱", "Scared", "害怕", {attachment: 'audio',url: "https://bit.ly/3gpv1ZZ"}]).then(()=>{backtrack('a1', 'b6')});
		}
		// French for scared
		if(payload === 'FRb6') {
			say(["😱", "Scared", "effrayé", {attachment: 'audio',url: "https://bit.ly/3f5HRMp"}]).then(()=>{backtrack('a1', 'b6')});
		}
		// Italian for scared
		if(payload === 'ITb6') {
			say(["😱", "Scared", 'Spaventato/a', {attachment: 'audio',url: "https://bit.ly/2ZEbZIn"}]).then(()=>{backtrack('a1', 'b6')});
		}
		// Japanese for scared
		if(payload === 'JPb6') {
			say(["😱", "Scared", '怖い', {attachment: 'audio',url: "https://bit.ly/2ZE4W2y"}]).then(()=>{backtrack('a1', 'b6')});
		}
		// Spanish for scared
		if(payload === 'ESb6') {
			say(["😱", "Scared", 'asustado/a', {attachment: 'audio',url: "https://bit.ly/2VQKdax"}]).then(()=>{backtrack('a1', 'b6')});
		}

		// ************************ Different Languages for Anxious (b7)**************************************//
		if (payload === 'b7') { chooseLanguage('b7')}
		// Arabic for anxious
		if(payload === 'ARb7') {
			say(["😰", 'Anxious', "قلقة", {attachment: 'audio',url: "https://bit.ly/2ZDopAl "}]).then(()=>{backtrack('a1', 'b7')});
		}
		// Chinese for anxious
		if(payload === 'CNb7') {
			say(["😰", "Anxious", "焦虑", {attachment: 'audio',url: "https://bit.ly/31EGgJN"}]).then(()=>{backtrack('a1', 'b7')});
		}
		// French for anxious
		if(payload === 'FRb7') {
			say(["😰", "Anxious", "anxieux", {attachment: 'audio',url: "https://bit.ly/3e6yACw"}]).then(()=>{backtrack('a1', 'b7')});
		}
		// Italian for anxious
		if(payload === 'ITb7') {
			say(["😰", "Anxious", 'Ansioso/a', {attachment: 'audio',url: "https://bit.ly/3dVMwiF"}]).then(()=>{backtrack('a1', 'b7')});
		}
		// Japanese for anxious
		if(payload === 'JPb7') {
			say(["😰", "Anxious", '気になる', {attachment: 'audio',url: "https://bit.ly/2Axq6H3"}]).then(()=>{backtrack('a1', 'b7')});
		}
		// Spanish for anxious
		if(payload === 'ESb7') {
			say(["😰", "Anxious", 'ansioso/a', {attachment: 'audio',url: "https://bit.ly/2BwPmhe"}]).then(()=>{backtrack('a1', 'b7')});
		}

		// ************************ Different Languages for Disappointed (b8)**************************************//
		if (payload === 'b8') { chooseLanguage('b8')}
		// Arabic for Disappointed
		if(payload === 'ARb8') {
			say(["😞", 'Disappointed', "خائب الامل", {attachment: 'audio',url: "https://bit.ly/2NUx5wI"}]).then(()=>{backtrack('a1', 'b8')});
		}
		// Chinese for Disappointed
		if(payload === 'CNb8') {
			say(["😞", "Disappointed", '失望', {attachment: 'audio',url: "https://bit.ly/3gl5fWz "}]).then(()=>{backtrack('a1', 'b8')});
		}
		// French for Disappointed
		if(payload === 'FRb8') {
			say(["😞", "Disappointed", "déçu", {attachment: 'audio',url: "https://bit.ly/2O02ii3"}]).then(()=>{backtrack('a1', 'b8')});
		}
		// Italian for Disappointed
		if(payload === 'ITb8') {
			say(["😞", "Disappointed", 'Deluso/a', {attachment: 'audio',url: "https://bit.ly/2AzJIdE"}]).then(()=>{backtrack('a1', 'b8')});
		}
		// Japanese for Disappointed
		if(payload === 'JPb8') {
			say(["😞", "Disappointed", 'がっかりした', {attachment: 'audio',url: "https://bit.ly/2C6osfR"}]).then(()=>{backtrack('a1', 'b8')});
		}
		// Spanish for Disappointed
		if(payload === 'ESb8') {
			say(["😞", "Disappointed", 'desilusionado/a', {attachment: 'audio',url: "https://bit.ly/3gv7AOW"}]).then(()=>{backtrack('a1', 'b8')});
		}

		// ************************ Different Languages for Tired (b9)**************************************//
		if (payload === 'b9') { chooseLanguage('b9')}
		// Arabic for tired
		if(payload === 'ARb9') {
			say(["😪", 'Tired', "متعبه", {attachment: 'audio',url: "https://bit.ly/3guSMjb"}]).then(()=>{backtrack('a1', 'b9')});
		}
		// Chinese for tired
		if(payload === 'CNb9') {
			say(["😪", "Tired", '累', {attachment: 'audio',url: "https://bit.ly/3gl5fWz "}]).then(()=>{backtrack('a1', 'b9')});
		}
		// French for tired
		if(payload === 'FRb9') {
			say(["😪", "Tired", "fatigué", {attachment: 'audio',url: "https://bit.ly/2Z2BGTS"}]).then(()=>{backtrack('a1', 'b9')});
		}
		// Italian for tired
		if(payload === 'ITb9') {
			say(["😪", "Tired", 'Stanco/a', {attachment: 'audio',url: "https://bit.ly/2VLsNMD"}]).then(()=>{backtrack('a1', 'b9')});
		}
		// Japanese for tired
		if(payload === 'JPb9') {
			say(["😪", "Tired", '疲れた', {attachment: 'audio',url: "https://bit.ly/3f41JzA"}]).then(()=>{backtrack('a1', 'b9')});
		}
		// Spanish for tired
		if(payload === 'ESb9') {
			say(["😪", "Tired", 'cansado/a', {attachment: 'audio',url: "https://bit.ly/3gv4Xwk"}]).then(()=>{backtrack('a1', 'b9')});
		}

		// ************************ Different Languages for Relieved (b10)**************************************//
		if (payload === 'b10') { chooseLanguage('b10')}
		// Arabic for relieved
		if(payload === 'ARb10') {
			say(["😌", 'Relieved', "مرتاح", {attachment: 'audio',url: "https://bit.ly/38wbHr9 "}]).then(()=>{backtrack('a1', 'b10')});
		}
		// Chinese for relieved
		if(payload === 'CNb10') {
			say(["😌", "Relieved", '安心', {attachment: 'audio',url: "https://bit.ly/2C2VJsc"}]).then(()=>{backtrack('a1', 'b10')});
		}
		// French for relieved
		if(payload === 'FRb10') {
			say(["😌", "Relieved", "soulagé", {attachment: 'audio',url: "https://bit.ly/2CfKgph"}]).then(()=>{backtrack('a1', 'b10')});
		}
		// Italian for relieved
		if(payload === 'ITb10') {
			say(["😌", "Relieved", 'Sollevato/a', {attachment: 'audio',url: "https://bit.ly/31LspBl"}]).then(()=>{backtrack('a1', 'b10')});
		}
		// Japanese for relieved
		if(payload === 'JPb10') {
			say(["😌", "Relieved", 'ほっとした', {attachment: 'audio',url: "https://bit.ly/2BwJm8c"}]).then(()=>{backtrack('a1', 'b10')});
		}
		// Spanish for relieved
		if(payload === 'ESb10') {
			say(["😌", "Relieved", 'aliviado/a', {attachment: 'audio',url: "https://bit.ly/3iAZNkc"}]).then(()=>{backtrack('a1', 'b10')});
		}

		// ************************ Different Languages for Astonished(b11)**************************************//
		if (payload === 'b11') { chooseLanguage('b11')}
		// Arabic for astonished
		if(payload === 'ARb11') {
			say(["😲", 'Astonished', "مندهش", {attachment: 'audio',url: "https://bit.ly/3e4dmoZ"}]).then(()=>{backtrack('a1', 'b11')});
		}
		// Chinese for astonished
		if(payload === 'CNb11') {
			say(["😲", "Astonished", '惊讶', {attachment: 'audio',url: "https://bit.ly/3irCBoI "}]).then(()=>{backtrack('a1', 'b11')});
		}
		// French for astonished
		if(payload === 'FRb11') {
			say(["😲", "Astonished", "étonné", {attachment: 'audio',url: "https://bit.ly/2Z8H34d"}]).then(()=>{backtrack('a1', 'b11')});
		}
		// Italian for astonished
		if(payload === 'ITb11') {
			say(["😲", "Astonished", 'sorpreso/a', {attachment: 'audio',url: "https://bit.ly/3fcCYRK"}]).then(()=>{backtrack('a1', 'b11')});
		}
		// Japanese for astonished
		if(payload === 'JPb11') {
			say(["😲", "Astonished", 'びっくりした', {attachment: 'audio',url: "https://bit.ly/2VOeqqN"}]).then(()=>{backtrack('a1', 'b11')});
		}
		// Spanish for astonished
		if(payload === 'ESb11') {
			say(["😲", "Astonished", 'asombrado/a', {attachment: 'audio',url: "https://bit.ly/2ZFcUID"}]).then(()=>{backtrack('a1', 'b11')});
		}

		// ************************ Different Languages for Love(b12)**************************************//
		if (payload === 'b12') { chooseLanguage('b12')}
		// Arabic for love
		if(payload === 'ARb12') {
			say(["😍", 'Love', "حب", {attachment: 'audio',url: "https://bit.ly/3ix7yI6 "}]).then(()=>{backtrack('a1', 'b12')});
		}
		// Chinese for love
		if(payload === 'CNb12') {
			say(["😍", "Love", '爱', {attachment: 'audio',url: "https://bit.ly/3dUb7EO"}]).then(()=>{backtrack('a1', 'b12')});
		}
		// French for love
		if(payload === 'FRb12') {
			say(["😍", "Love", "amoureux", {attachment: 'audio',url: "https://bit.ly/3f5ktyP"}]).then(()=>{backtrack('a1', 'b12')});
		}
		// Italian for love
		if(payload === 'ITb12') {
			say(["😍", "Love", 'Amore', {attachment: 'audio',url: "https://bit.ly/2Dccxh9"}]).then(()=>{backtrack('a1', 'b12')});
		}
		// Japanese for love
		if(payload === 'JPb12') {
			say(["😍", "Love", '愛', {attachment: 'audio',url: "https://bit.ly/3gtiepd"}]).then(()=>{backtrack('a1', 'b12')});
		}
		// Spanish for love
		if(payload === 'ESb12') {
			say(["😍", "Love", 'enamorado/a', {attachment: 'audio',url: "https://bit.ly/31O2tVG"}]).then(()=>{backtrack('a1', 'b12')});
		}




		//***********************************************************************************/
		// ************************* Category 2: Animals (a2) ******************************//
		//*********************************************************************************/
		// all animals payload starts with c
		if (payload === 'a2') {
			sendButton('What animal would you like to learn?',
			[{title: 'A. 🐶', payload: 'c1'}, {title: 'B. 😺', payload: 'c2'},
			{title: 'C. 🐴', payload: 'c3'}, {title: 'D. 🐟', payload: 'c4'},
			{title: 'E. 🐵', payload: 'c5'}, {title: 'F. 🐯', payload: 'c6'}, 
			{title: 'G. 🐷', payload: 'c7'}, {title: 'H. 🐇', payload: 'c8'}, 
			{title: 'I. 🐔', payload: 'c9'}, {title: 'J. 🐍', payload: 'c10'}, 
			{title: 'K. 🐬', payload: 'c11'}, {title: 'L. 🐝', payload: 'c12'}]
			);
		}
	
		// ************************ Different Languages for Dog (c1)*********************//
		if (payload === 'c1') {
			chooseLanguage('c1')
		}
		// Arabic for Dog
		if(payload === 'ARc1') {
			say(["🐶", "Dog", "الكلب", {attachment: 'audio',url: "https://bit.ly/2VKqoBG"}]).then(()=>{backtrack('a2', 'c1')});
		}
		// Chinese for Dog
		if(payload === 'CNc1') {
			say(["🐶", "Dog", "狗", {attachment: 'audio',url: "https://bit.ly/2C5VkFp "}]).then(()=>{backtrack('a2', 'c1')});
		}
		// French for Dog
		if(payload === 'FRc1') {
			say(["🐶", "Dog", "chien", {attachment: 'audio',url: "https://bit.ly/30qgSoW"}]).then(()=> {backtrack('a2', 'c1')});
		}
		// Italian for Dog
		if(payload === 'ITc1') {
			say(["🐶", "Dog", 'cane', {attachment: 'audio',url: "https://bit.ly/3f0Hcw0"}]).then(()=>{backtrack('a2', 'c1')});
		}
		// Japanese for Dog
		if(payload === 'JPc1') {
			say(["🐶", "Dog", '犬', {attachment: 'audio',url: "https://bit.ly/31O7Zrq"}]).then(()=>{backtrack('a2', 'c1')});
		}
		// Spanish for Dog
		if(payload === 'ESc1') {
			say(["🐶", "Dog", 'perro', {attachment: 'audio',url: "https://bit.ly/3iBvpWX"}]).then(()=>{backtrack('a2', 'c1')});
		}

		// ************************ Different Languages for Cat (c2)*********************//
		if (payload === 'c2') {
			chooseLanguage('c2')
		}
		// Arabic for Cat
		if(payload === 'ARc2') {
			say(["😺", "Cat", "قط", {attachment: 'audio',url: "https://bit.ly/3f4mE5D"}]).then(()=>{backtrack('a2', 'c2')});
		}
		// Chinese for Cat
		if(payload === 'CNc2') {
			say(["😺", "Cat", "猫", {attachment: 'audio',url: "https://bit.ly/2NSv980"}]).then(()=>{backtrack('a2', 'c2')});
		}
		// French for Cat
		if(payload === 'FRc2') {
			say(["😺", "Cat", "chat", {attachment: 'audio',url: "https://bit.ly/32xRPCV"}]).then(()=> {backtrack('a2', 'c2')});
		}
		// Italian for Cat
		if(payload === 'ITc2') {
			say(["😺", "Cat", 'gatto', {attachment: 'audio',url: "https://bit.ly/3ixudUG"}]).then(()=>{backtrack('a2', 'c2')});
		}
		// Japanese for Cat
		if(payload === 'JPc2') {
			say(["😺", "Cat", 'ネコ', {attachment: 'audio',url: "https://bit.ly/3iA5PSc"}]).then(()=>{backtrack('a2', 'c2')});
		}
		// Spanish for Cat
		if(payload === 'ESc2') {
			say(["😺", "Cat", 'gato', {attachment: 'audio',url: "https://bit.ly/3iyruu9"}]).then(()=>{backtrack('a2', 'c2')});
		}
	
		// ************************ Different Languages for Horse (c3)*********************//
		if (payload === 'c3') {
			chooseLanguage('c3')
		}
		// Arabic for Horse
		if(payload === 'ARc3') {
			say(["🐴", "Horse", "حصان", {attachment: 'audio',url: "https://bit.ly/3iysSNm"}]).then(()=>{backtrack('a2', 'c3')});
		}
		// Chinese for Horse
		if(payload === 'CNc3') {
			say(["🐴", "Horse", "马", {attachment: 'audio',url: "https://bit.ly/3gkDiOx"}]).then(()=>{backtrack('a2', 'c3')});
		}
		// French for Horse
		if(payload === 'FRc3') {
			say(["🐴", "Horse", "cheval", {attachment: 'audio',url: "https://bit.ly/39d8zAO"}]).then(()=> {backtrack('a2', 'c3')});
		}
		// Italian for Horse
		if(payload === 'ITc3') {
			say(["🐴", "Horse", 'cavallo', {attachment: 'audio',url: "https://bit.ly/2Z1CDfp"}]).then(()=>{backtrack('a2', 'c3')});
		}
		// Japanese for Horse
		if(payload === 'JPc3') {
			say(["🐴", "Horse", 'うま', {attachment: 'audio',url: "https://bit.ly/38ttL5j"}]).then(()=>{backtrack('a2', 'c3')});
		}
		// Spanish for Horse
		if(payload === 'ESc3') {
			say(["🐴", "Horse", 'caballo', {attachment: 'audio',url: "https://bit.ly/3iB5DC6"}]).then(()=>{backtrack('a2', 'c3')});
		}
	
		// ************************ Different Languages for Fish (c4)*********************//
		if (payload === 'c4') {
			chooseLanguage('c4')
		}
		// Arabic for Fish
		if(payload === 'ARc4') {
			say(["🐟", "Fish", "سمك", {attachment: 'audio',url: "https://bit.ly/31Kef3y"}]).then(()=>{backtrack('a2', 'c4')});
		}
		// Chinese for Fish
		if(payload === 'CNc4') {
			say(["🐟", "Fish", "鱼", {attachment: 'audio',url: "https://bit.ly/3dSCFKI"}]).then(()=>{backtrack('a2', 'c4')});
		}
		// French for Fish
		if(payload === 'FRc4') {
			say(["🐟", "Fish", "poisson", {attachment: 'audio',url: "https://bit.ly/32yBdLn"}]).then(()=> {backtrack('a2', 'c4')});
		}
		// Italian for Fish
		if(payload === 'ITc4') {
			say(["🐟", "Fish", 'pesce', {attachment: 'audio',url: "https://bit.ly/2Z08OeT"}]).then(()=>{backtrack('a2', 'c4')});
		}
		// Japanese for Fish
		if(payload === 'JPc4') {
			say(["🐟", "Fish", '魚', {attachment: 'audio',url: "https://bit.ly/38GlJWV"}]).then(()=>{backtrack('a2', 'c4')});
		}
		// Spanish for Fish
		if(payload === 'ESc4') {
			say(["🐟", "Fish", 'pez', {attachment: 'audio',url: "https://bit.ly/2VQ3WHp"}]).then(()=>{backtrack('a2', 'c4')});
		}
	
		// ************************ Different Languages for Monkey (c5)*********************//
		if (payload === 'c5') {
			chooseLanguage('c5')
		}
		// Arabic for Monkey
		if(payload === 'ARc5') {
			say(["🐵", "Monkey", "قرد", {attachment: 'audio',url: "https://bit.ly/3iENoft"}]).then(()=>{backtrack('a2', 'c5')});
		}
		// Chinese for Monkey
		if(payload === 'CNc5') {
			say(["🐵", "Monkey", "猴子", {attachment: 'audio',url: "https://bit.ly/2C5uLA8"}]).then(()=>{backtrack('a2', 'c5')});
		}
		// French for Monkey
		if(payload === 'FRc5') {
			say(["🐵", "Monkey", "singe", {attachment: 'audio',url: "https://bit.ly/30ovmWs"}]).then(()=> {backtrack('a2', 'c5')});
		}
		// Italian for Monkey
		if(payload === 'ITc5') {
			say(["🐵", "Monkey", 'scimmia', {attachment: 'audio',url: "https://bit.ly/31M195L"}]).then(()=>{backtrack('a2', 'c5')});
		}
		// Japanese for Monkey
		if(payload === 'JPc5') {
			say(["🐵", "Monkey", '猿', {attachment: 'audio',url: "https://bit.ly/3ffC1bL"}]).then(()=>{backtrack('a2', 'c5')});
		}
		// Spanish for Monkey
		if(payload === 'ESc5') {
			say(["🐵", "Monkey", 'mono', {attachment: 'audio',url: "https://bit.ly/2VOJxCJ"}]).then(()=>{backtrack('a2', 'c5')});
		}
	

		//***********************************************************************************/
		// ************************* Category 3: food (a3) ******************************//
		//*********************************************************************************/
		// all food payload starts with d
		if (payload === 'a3') {
			sendButton('Which food would you like to learn?',
			[{title: 'A. 🍺', payload: 'd1'}, {title: 'B. 🍎', payload: 'd2'},
			{title: 'C. 🍊', payload: 'd3'}, {title: 'D. 🍔', payload: 'd4'},
			{title: 'E. 🍿', payload: 'd5'}, {title: 'F. 🍪', payload: 'd6'}, 
			{title: 'G. 🍣', payload: 'd7'}, {title: 'H. 🍰', payload: 'd8'}, 
			{title: 'I. 🥔', payload: 'd9'}, {title: 'J. 🍅', payload: 'd10'}, 
			{title: 'K. 🍖', payload: 'd11'}, {title: 'L. 🥛', payload: 'd12'}]
			);
		}
	
		// ************************ Different Languages for Beer (d1)*********************//
	
		if (payload === 'd1'){
			chooseLanguage('d1');
		}
		// Arabic for Beer
		if (payload === 'ARd1'){
			say(["🍺", "Beer", 'بيرة', {attachment: 'audio', url: "https://bit.ly/2O1Eudu"}]).then(()=>{backtrack('a3', 'd1')})
		}
		// Chinese for Beer
		if (payload === 'CNd1'){
			say(["🍺", "Beer", '啤酒', {attachment: 'audio', url: "https://bit.ly/2NQPxq3"}]).then(()=>{backtrack('a3', 'd1')})
		}
		// French for Beer
		if (payload === 'FRd1'){
			say(["🍺", "Beer", 'bière', {attachment: 'audio', url: "https://www.google.com/"}]).then(()=>{backtrack('a3', 'd1')}) //
		}
		// Italian for Beer
		if (payload === 'ITd1'){
			say(["🍺", "Beer", 'bira', {attachment: 'audio', url: "https://bit.ly/2NXaCzh"}]).then(()=>{backtrack('a3', 'd1')})
		}
		// Japanese for Beer
		if (payload === 'JPd1'){
			say(["🍺", "Beer", 'ビール', {attachment: 'audio', url: "https://bit.ly/2Z1fObn"}]).then(()=>{backtrack('a3', 'd1')})
		}
		// Spanish for Beer
		if (payload === 'ESd1'){
			say(["🍺", "Beer", 'cerveza', {attachment: 'audio', url: "https://bit.ly/2ZFcguH"}]).then(()=>{backtrack('a3', 'd1')})
		}
		
		// ************************ Different Languages for Apple (d2)*********************//
		if (payload === 'd2'){
			chooseLanguage('d2');
		}
		// Arabic for Apple
		if (payload === 'ARd2'){
			say(["🍎", "Apple", 'تفاحة', {attachment: 'audio', url: "https://bit.ly/3iAjyID"}]).then(()=>{backtrack('a3', 'd2')})
		}
		// Chinese for Apple
		if (payload === 'CNd2'){
			say(["🍎", "Apple", '苹果', {attachment: 'audio', url: "https://bit.ly/3eQPPZQ"}]).then(()=>{backtrack('a3', 'd2')})
		}
		// French for Apple
		if (payload === 'FRd1'){
			say(["🍎", "Apple", 'pomme', {attachment: 'audio', url: "https://www.google.com/"}]).then(()=>{backtrack('a3', 'd2')}) //
		}
		// Italian for Apple
		if (payload === 'ITd1'){
			say(["🍎", "Apple", 'mela', {attachment: 'audio', url: "https://bit.ly/2O0lbl3"}]).then(()=>{backtrack('a3', 'd2')})
		}
		// Japanese for Apple
		if (payload === 'JPd1'){
			say(["🍎", "Apple", '林檎', {attachment: 'audio', url: "https://bit.ly/3e9o8uk"}]).then(()=>{backtrack('a3', 'd2')})
		}
		// Spanish for Beer
		if (payload === 'ESd1'){
			say(["🍎", "Apple", 'manzana', {attachment: 'audio', url: "https://bit.ly/3iIudkS"}]).then(()=>{backtrack('a3', 'd2')})
		}
	
		// ************************ Different Languages for Orange (d3)*********************//
		if (payload === 'd3'){
			chooseLanguage('d3')
		}
		// Arabic for Orange
		if (payload === 'ARd3'){
			say(["🍊", "Orange", 'البرتقالي', {attachment: 'audio', url: "https://bit.ly/3irDQnII"}]).then(()=>{backtrack('a3', 'd3')})
		}
		// Chinese for Orange
		if (payload === 'CNd3'){
			say(["🍊", "Orange", '橙子', {attachment: 'audio', url: "https://bit.ly/3eTDILK"}]).then(()=>{backtrack('a3', 'd3')})
		}
		// French for Orange
		if (payload === 'FRd3'){
			say(["🍊", "Orange", 'orange', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd3')})
		}
		// Italian for Orange
		if (payload === 'ITd3'){
			say(["🍊", "Orange", 'Arancia', {attachment: 'audio', url: "https://bit.ly/3f7wEes"}]).then(()=>{backtrack('a3', 'd3')})
		}
		// Japanese for Orange
		if (payload === 'JPd3'){
			say(["🍊", "Orange", 'オレンジ', {attachment: 'audio', url: "https://bit.ly/2NWJfFc"}]).then(()=>{backtrack('a3', 'd3')})
		}
		// Spanish for Orange
		if (payload === 'ESd3'){
			say(["🍊", "Orange", 'naranja', {attachment: 'audio', url: "https://bit.ly/2Deff5R"}]).then(()=>{backtrack('a3', 'd3')})
		}
	
		// ************************ Different Languages for Hamburger (d4)*********************//
		if (payload === 'd4'){
			chooseLanguage('d4')
		}
		// Arabic for Hamburger
		if (payload === 'ARd4'){
			say(["🍔", "Hamburger", 'همبرغر', {attachment: 'audio', url: "https://bit.ly/38sp3Vp"}]).then(()=>{backtrack('a3', 'd4')})
		}
		// Chinese for Hamburger
		if (payload === 'CNd4'){
			say(["🍔", "Hamburger", '汉堡包', {attachment: 'audio', url: "https://bit.ly/2C0qdva"}]).then(()=>{backtrack('a3', 'd4')})
		}
		// French for Hamburger
		if (payload === 'FRd4'){
			say(["🍔", "Hamburger", 'hamburger', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd4')})
		}
		// Italian for Hamburger
		if (payload === 'ITd4'){
			say(["🍔", "Hamburger", 'hamburger', {attachment: 'audio', url: "https://bit.ly/31ZwK4j"}]).then(()=>{backtrack('a3', 'd4')})
		}
		// Japanese for Hamburger
		if (payload === 'JPd4'){
			say(["🍔", "Hamburger", 'ハンバーガー', {attachment: 'audio', url: "https://bit.ly/2VOXJLQ"}]).then(()=>{backtrack('a3', 'd4')})
		}
		// Spanish for Hamburger
		if (payload === 'ESd4'){
			say(["🍔", "Hamburger", 'hamburguesa', {attachment: 'audio', url: "https://bit.ly/31Mgnru"}]).then(()=>{backtrack('a3', 'd4')})
		}
	
		// ************************ Different Languages for Popcorn (d5)*********************//
		if (payload === 'd5'){
			chooseLanguage('d5')
		}
		// Arabic for Popcorn
		if (payload === 'ARd5'){
			say(["🍿", "Popcorn", 'الفشار', {attachment: 'audio', url: "https://bit.ly/2O4cpCl"}]).then(()=>{backtrack('a3', 'd5')})
		}
		// Chinese for Popcorn
		if (payload === 'CNd5'){
			say(["🍿", "Popcorn", '爆米花', {attachment: 'audio', url: "https://bit.ly/3dSNyMA"}]).then(()=>{backtrack('a3', 'd5')})
		}
		// French for Popcorn
		if (payload === 'FRd5'){
			say(["🍿", "Popcorn", 'pop corn', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd5')})
		}
		// Italian for Popcorn
		if (payload === 'ITd5'){
			say(["🍿", "Popcorn", 'popcorn', {attachment: 'audio', url: "https://bit.ly/2VNfTOb"}]).then(()=>{backtrack('a3', 'd5')})
		}
		// Japanese for Popcorn
		if (payload === 'JPd5'){
			say(["🍿", "Popcorn", 'ポップコーン', {attachment: 'audio', url: "https://bit.ly/3iyMdy4"}]).then(()=>{backtrack('a3', 'd5')})
		}
		// Spanish for Popcorn
		if (payload === 'ESd5'){
			say(["🍿", "Popcorn", 'palomitas de maiz', {attachment: 'audio', url: "https://bit.ly/3ixuS8z"}]).then(()=>{backtrack('a3', 'd5')})
		}
	
		// ************************ Different Languages for Cookie (d6)*********************//
		if (payload === 'd6'){
			chooseLanguage('d6')
		}
		// Arabic for Cookie
		if (payload === 'ARd6'){
			say(["🍪", "Cookie", 'بسكويت', {attachment: 'audio', url: "https://bit.ly/3f9d0Pq"}]).then(()=>{backtrack('a3', 'd6')})
		}
		// Chinese for Cookie
		if (payload === 'CNd6'){
			say(["🍪", "Cookie", '曲奇', {attachment: 'audio', url: "https://bit.ly/2YUs0L9"}]).then(()=>{backtrack('a3', 'd6')})
		}
		// French for Cookie
		if (payload === 'FRd6'){
			say(["🍪", "Cookie", 'biscuit', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd6')})
		}
		// Italian for Cookie
		if (payload === 'ITd6'){
			say(["🍪", "Cookie", 'biscotto', {attachment: 'audio', url: "https://bit.ly/2ZI83pU"}]).then(()=>{backtrack('a3', 'd6')})
		}
		// Japanese for Cookie
		if (payload === 'JPd6'){
			say(["🍪", "Cookie", 'クッキー', {attachment: 'audio', url: "https://bit.ly/3iyYyCb"}]).then(()=>{backtrack('a3', 'd6')})
		}
		// Spanish for Cookie
		if (payload === 'ESd6'){
			say(["🍪", "Cookie", 'galleta', {attachment: 'audio', url: "https://bit.ly/2ZCHYss"}]).then(()=>{backtrack('a3', 'd6')})
		}
	
		// ************************ Different Languages for Sushi (d7)*********************//
		if (payload === 'd7'){
			chooseLanguage('d7')
		}
		// Arabic for Sushi
		if (payload === 'ARd7'){
			say(["🍣", "Sushi", 'سوشي', {attachment: 'audio', url: "https://bit.ly/2VMt0ik"}]).then(()=>{backtrack('a3', 'd7')})
		}
		// Chinese for Sushi
		if (payload === 'CNd7'){
			say(["🍣", "Sushi", '寿司', {attachment: 'audio', url: "https://bit.ly/2C1BviN"}]).then(()=>{backtrack('a3', 'd7')})
		}
		// French for Sushi
		if (payload === 'FRd7'){
			say(["🍣", "Sushi", 'sushi', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd7')})
		}
		// Italian for Sushi
		if (payload === 'ITd7'){
			say(["🍣", "Sushi", 'sushi', {attachment: 'audio', url: "https://bit.ly/3ixkjlV"}]).then(()=>{backtrack('a3', 'd7')})
		}
		// Japanese for Sushi
		if (payload === 'JPd7'){
			say(["🍣", "Sushi", '寿司', {attachment: 'audio', url: "https://bit.ly/31PpfNc"}]).then(()=>{backtrack('a3', 'd7')})
		}
		// Spanish for Sushi
		if (payload === 'ESd7'){
			say(["🍣", "Sushi", 'sushi', {attachment: 'audio', url: "https://bit.ly/31OwtkA"}]).then(()=>{backtrack('a3', 'd7')})
		}
	
		// ************************ Different Languages for Cake (d8)*********************//
		if (payload === 'd8'){
			chooseLanguage('d8')
		}
		// Arabic for Sushi
		if (payload === 'ARd8'){
			say(["🍰", "Cake", 'كيك', {attachment: 'audio', url: "https://bit.ly/3iAltNF"}]).then(()=>{backtrack('a3', 'd8')})
		}
		// Chinese for Sushi
		if (payload === 'CNd8'){
			say(["🍰", "Cake", '蛋糕', {attachment: 'audio', url: "https://bit.ly/3glLe23"}]).then(()=>{backtrack('a3', 'd8')})
		}
		// French for Sushi
		if (payload === 'FRd8'){
			say(["🍰", "Cake", 'gâteau', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd8')})
		}
		// Italian for Sushi
		if (payload === 'ITd8'){
			say(["🍰", "Cake", 'torta', {attachment: 'audio', url: "https://bit.ly/38uHJnd"}]).then(()=>{backtrack('a3', 'd8')})
		}
		// Japanese for Sushi
		if (payload === 'JPd8'){
			say(["🍰", "Cake", 'ケーキ', {attachment: 'audio', url: "https://bit.ly/3f1fcs8"}]).then(()=>{backtrack('a3', 'd8')})
		}
		// Spanish for Sushi
		if (payload === 'ESd8'){
			say(["🍰", "Cake", 'pastel', {attachment: 'audio', url: "https://bit.ly/31OQ7wS"}]).then(()=>{backtrack('a3', 'd8')})
		}
	
		// ************************ Different Languages for Potato (d9)*********************//
		if (payload === 'd9'){
			chooseLanguage('d9')
		}
		// Arabic for Potato
		if (payload === 'ARd9'){
			say(["🥔", "Potato", 'البطاطس', {attachment: 'audio', url: "https://bit.ly/38CnxA8"}]).then(()=>{backtrack('a3', 'd9')})
		}
		// Chinese for Potato
		if (payload === 'CNd9'){
			say(["🥔", "Potato", '土豆', {attachment: 'audio', url: "https://bit.ly/3gyxCkr"}]).then(()=>{backtrack('a3', 'd9')})
		}
		// French for Potato
		if (payload === 'FRd9'){
			say(["🥔", "Potato", 'patate', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd9')})
		}
		// Italian for Potato
		if (payload === 'ITd9'){
			say(["🥔", "Potato", 'patate', {attachment: 'audio', url: "https://bit.ly/2Cd5tjF"}]).then(()=>{backtrack('a3', 'd9')})
		}
		// Japanese for Potato
		if (payload === 'JPd9'){
			say(["🥔", "Potato", 'じゃがいも', {attachment: 'audio', url: "https://bit.ly/3is0qfY"}]).then(()=>{backtrack('a3', 'd9')})
		}
		// Spanish for Potato
		if (payload === 'ESd9'){
			say(["🥔", "Potato", 'papa', {attachment: 'audio', url: "https://bit.ly/2VOh9AA"}]).then(()=>{backtrack('a3', 'd9')})
		}
	
		// ************************ Different Languages for Tomato (d10)*********************//
		if (payload === 'd10'){
			chooseLanguage('d10')
		}
		// Arabic for Tomato
		if (payload === 'ARd10'){
			say(["🍅", "Tomato", 'طماطم', {attachment: 'audio', url: "https://bit.ly/31M9ZAD"}]).then(()=>{backtrack('a3', 'd10')})
		}
		// Chinese for Tomato
		if (payload === 'CNd10'){
			say(["🍅", "Tomato", '番茄', {attachment: 'audio', url: "https://bit.ly/2YXljIp"}]).then(()=>{backtrack('a3', 'd10')})
		}
		// French for Tomato
		if (payload === 'FRd10'){
			say(["🍅", "Tomato", 'tomate', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd10')})
		}
		// Italian for Tomato
		if (payload === 'ITd10'){
			say(["🍅", "Tomato", 'pomodoro', {attachment: 'audio', url: "https://bit.ly/3e1mmeB"}]).then(()=>{backtrack('a3', 'd10')})
		}
		// Japanese for Tomato
		if (payload === 'JPd10'){
			say(["🍅", "Tomato", 'トマト', {attachment: 'audio', url: "https://bit.ly/3f3VnjJ"}]).then(()=>{backtrack('a3', 'd10')})
		}
		// Spanish for Tomato
		if (payload === 'ESd10'){
			say(["🍅", "Tomato", 'tomate', {attachment: 'audio', url: "https://bit.ly/2VMtCo8"}]).then(()=>{backtrack('a3', 'd10')})
		}
	
		// ************************ Different Languages for Meat (d11)*********************//
		if (payload === 'd11'){
			chooseLanguage('d11')
		}
		// Arabic for Meat
		if (payload === 'ARd11'){
			say(["🍖", "Meat", 'لحم', {attachment: 'audio', url: "https://bit.ly/2BzlQaC"}]).then(()=>{backtrack('a3', 'd11')})
		}
		// Chinese for Meat
		if (payload === 'CNd11'){
			say(["🍖", "Meat", '肉', {attachment: 'audio', url: "https://bit.ly/38mkI69"}]).then(()=>{backtrack('a3', 'd11')})
		}
		// French for Meat
		if (payload === 'FRd11'){
			say(["🍖", "Meat", 'viande', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd11')})
		}
		// Italian for Meat
		if (payload === 'ITd11'){
			say(["🍖", "Meat", 'carne', {attachment: 'audio', url: "https://bit.ly/2YZnV8z"}]).then(()=>{backtrack('a3', 'd11')})
		}
		// Japanese for Meat
		if (payload === 'JPd11'){
			say(["🍖", "Meat", '肉', {attachment: 'audio', url: "https://bit.ly/2BGozyT"}]).then(()=>{backtrack('a3', 'd11')})
		}
		// Spanish for Meat
		if (payload === 'ESd11'){
			say(["🍖", "Meat", 'carne', {attachment: 'audio', url: "https://bit.ly/3ixKo4a"}]).then(()=>{backtrack('a3', 'd11')})
		}
	
		// ************************ Different Languages for Milk (d12)*********************//
		if (payload === 'd12'){
			chooseLanguage('d12')
		}
		// Arabic for Milk
		if (payload === 'ARd12'){
			say(["🍖", "Milk", 'حليب', {attachment: 'audio', url: "https://bit.ly/38BBxtN"}]).then(()=>{backtrack('a3', 'd12')})
		}
		// Chinese for Milk
		if (payload === 'CNd12'){
			say(["🍖", "Milk", '牛奶', {attachment: 'audio', url: "https://bit.ly/2CXgw0O"}]).then(()=>{backtrack('a3', 'd12')})
		}
		// French for Milk
		if (payload === 'FRd12'){
			say(["🍖", "Milk", 'lait', {attachment: 'audio', url: "google.com"}]).then(()=>{backtrack('a3', 'd12')})
		}
		// Italian for Milk
		if (payload === 'ITd12'){
			say(["🍖", "Milk", 'latte', {attachment: 'audio', url: "https://bit.ly/3e2CTPo"}]).then(()=>{backtrack('a3', 'd12')})
		}
		// Japanese for Milk
		if (payload === 'JPd12'){
			say(["🍖", "Milk", '牛乳', {attachment: 'audio', url: "https://bit.ly/2Z0oKhi"}]).then(()=>{backtrack('a3', 'd12')})
		}
		// Spanish for Milk
		if (payload === 'ESd12'){
			say(["🍖", "Milk", 'leche', {attachment: 'audio', url: "https://bit.ly/2ZGcf9N"}]).then(()=>{backtrack('a3', 'd12')})
		}

		//***********************************************************************************/
		// ************************* Category 3: Transportation (a4) ******************************//
		//*********************************************************************************/
		// all transportations payload starts with e
		if (payload === 'a4') {
			sendButton('Which transportation would you like to learn?',
			[{title: 'A. 🚗', payload: 'e1'}, {title: 'B. 🚕', payload: 'e2'},
			{title: 'C. 🚝', payload: 'e3'}, {title: 'D. 🚲', payload: 'e4'},
			{title: 'E. 🏍️', payload: 'e5'}, {title: 'F. 🚢', payload: 'e6'}, 
			{title: 'G. 🚁', payload: 'e7'}, {title: 'H. ✈️', payload: 'e8'}, 
			{title: 'I. 🚌', payload: 'e9'} ]
			);
		}


		//***********************************************************************************/
		// ************************* Category 4: Location (a5) ******************************//
		//*********************************************************************************/
		// all location payload starts with f
		if (payload === 'a5') {
			sendButton('What expression would you like to learn?',
			[{title: 'A. 🐶', payload: 'c1'}, {title: 'B. 😺', payload: 'c2'},
			{title: 'C. 🐴', payload: 'c3'}, {title: 'D. 🐟', payload: 'c4'},
			{title: 'E. 🐵', payload: 'c5'}, {title: 'F. 🐯', payload: 'c6'}, 
			{title: 'G. 🐷', payload: 'c7'}, {title: 'H. 🐇', payload: 'c8'}, 
			{title: 'I. 🐔', payload: 'c9'}, {title: 'J. 🐍', payload: 'c10'}, 
			{title: 'K. 🐬', payload: 'c11'}, {title: 'L. 🐝', payload: 'c12'}]
			);
		}



		//***********************************************************************************/
		// ************************* Quiz Section: payload = qz ****************************//
		//*********************************************************************************/
		  // Insert other quiz generators here
		  if(payload === 'qz') {
			sendButton('Please choose a language you want to take the quiz in', [{title: 'A. 🇨🇳', payload: 'CHqz'},
			{title: 'B. 🇪🇸', payload: 'ESqz' }, {title: 'C. 🇮🇹', payload: 'ITqz'}])
		}

		if(payload === 'CHqz') {
		  sendButton('Please choose a question🤗',
		  [{title: '1️', payload: 'qz1'}, {title: '2', payload: 'qz2'},
		  {title: '3', payload: 'qz3'}, {title: '4', payload: 'qz4'},
		  {title: '4', payload: 'qz5'}, {title: '5', payload: 'qz6'}]);
	  }

		// ***************************************CHINESE QUIZ GENERATORS*************************************//
		if(payload === 'qz1') {
			say(['我现在觉得很😡', 'I feel very 😡',  {attachment: 'audio',url: "https://bit.ly/3eH19qs"}]).then(()=>{
				sendButton('Which choice could replace the emoji?',
				[{title: 'A. 高兴', payload: 'qz1a'}, {title: 'B. 伤心', payload: 'qz1b'},
				{title: 'C. 生气', payload: 'qz1c'}])
			  });
		  }
		  if(payload === 'qz2') {
			  say(['我现在觉得很😱', 'I feel very 😱',  {attachment: 'audio',url: "https://bit.ly/3eH19qs"}]).then(()=>{
				  sendButton('Which choice could replace the emoji?',
				  [{title: 'A. 失望', payload: 'qz2a'}, 
				  {title: 'B. 尴尬', payload: 'qz2b'}, {title: 'C. 害怕', payload: 'qz2c'}])
			  });
		  }
		  if(payload === 'qz3') {
			  say(['我想吃一个🍎', 'I want to eat an 🍎',  {attachment: 'audio',url: "https://bit.ly/2ZFYgBW"}]).then(()=>{
				  sendButton('Which choice could replace the emoji?',
				  [{title: 'A. 苹果', payload: 'qz3a'}, {title: 'B. 爆米花', payload: 'qz3b'},
				  {title: 'C. 橘子', payload: 'qz3c'}])
			  });
		  }
		  if(payload === 'qz4') {
			  say(['我想喝一杯🥛', 'I want to drink a cup of 🥛',  {attachment: 'audio',url: "https://bit.ly/397NcRc"}]).then(()=>{
				  sendButton('Which choice could replace the emoji?',
				  [{title: 'A. 啤酒', payload: 'qz4a'}, {title: 'B. 牛奶', payload: 'qz4b'},
				  {title: 'C. 土豆', payload: 'qz4c'}])
			  });
		  }
		  if(payload === 'qz5') {
			  say(['我坐🚌去🏫', 'I go to 🏫 by 🚌',  {attachment: 'audio',url: "https://bit.ly/397NcRc"}]).then(()=>{
				  sendButton('Which choice could replace the emoji?',
				  [{title: 'A. 摩托车； 银行', payload: 'qz6a'}, {title: 'B. 公交车； 学校', payload: 'qz6b'},
				  {title: 'C. 火车； 沙滩', payload: 'qz6c'}])
			  });
		  }
		  if(payload === 'qz6') {
			  say(['我坐🚗去🏖️', 'I go to the 🏖️ by 🚗',  {attachment: 'audio',url: "https://bit.ly/397NcRc"}]).then(()=>{
				  sendButton('Which choice could replace the emoji?',
				  [{title: 'A. 轮船； 学校', payload: 'qz7a'}, {title: 'B. 小车； 沙滩', payload: 'qz7b'},
				  {title: 'C. 直升机；医院', payload: 'qz7c'}])
			  });
		  }
		  
		  // Check answer for Chinese quiz
		  if(payload=='qz1c'||payload=='qz2c'||payload=='qz3a'||payload=='qz4b'||payload=='qz5b'||payload=='qz6b'||payload=='qz7b') {
			  say('You are Correct!').then( () => {
				  sendButton('What\'s next?', [{title: 'Continue Learning...', payload: 'a'},
				  {title: 'Try another ❓', payload: 'qz'}, {title: 'Exit', payload: 'no'}]);
			  });
		  }
		  if(payload=='qz1a'||payload=='qz1b'||payload=='qz2b'||payload=='qz2a'||payload=='qz3b'||payload=='qz3c'||payload=='qz4a'
			 ||payload=='qz4c'||payload=='qz5a'||payload=='qz5c'||payload=='qz6a'||payload=='qz6c') {
			  say('Sorry, that is not correct!').then( () => {
				  sendButton('What\'s next?', [{title: 'Continue Learning...', payload: 'a'},
				  {title: 'Try another ❓', payload: 'qz'}, {title: 'Exit', payload: 'no'}]);
			  });
		  }


		

} // final bracket for state




module.exports = {
	filename: 'helloworld',
	title: 'Nemoji Language Tutor',
	introduction: [
		'Welcome to Nemoji Language Center!! 🎉  \n\nHello, I am your Nemoji Tutor.' +
		'👋🏻 🤖\nFor your information, this is an application for learning foreign ' +
		 'language using cute emojis. 🔤 🌏 \n If you are interested to learn ' +
		 'many languages, here is the best place to start! 🏮📚'
	],
	start: start,
	state: state
};
