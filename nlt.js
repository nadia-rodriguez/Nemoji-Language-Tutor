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


		//***********************************************************************************/
		// ************************* Category 3: food (a3) ******************************//
		//*********************************************************************************/
		// all food payload starts with 
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
