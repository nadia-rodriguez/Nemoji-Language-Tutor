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

    var dictionary = Object(); // Creating the object

    // Adding key-value pairs to the dictionary object, where the key is "1s" and the value is "Ace of Spades"
    dictionary["1c"] = "https://drive.google.com/uc?id=1pLt4_Z7MLV2I2-9ZC5zgplb7gJxp2jpN" 
    dictionary["1d"] = "https://drive.google.com/uc?id=1RQcAdyUgSPU-uc1nMuvaLA_57_bKjqtn"
    dictionary["1h"] = "https://drive.google.com/uc?id=1Ic4LcUaRNAr4uzIE27dcPdb37hThFQLF"
    dictionary["1s"] = "https://drive.google.com/uc?id=1UIIhADFLTFODcnF2BdMo-qEDGQGX1_r3"
    dictionary["2c"] = "https://drive.google.com/uc?id=1wD_Ao_kEydPDjEGbolPrMPV49XW_zmXA"
    dictionary["2d"] = "https://drive.google.com/uc?id=1w8mfJqrQN7lxqabegjPYqjFHA0ptV8Hq"
    dictionary["2h"] = "https://drive.google.com/uc?id=1D36ZwBvmwScsGXmfsA25fwCuWPIDij_B"
    dictionary["2s"] = "https://drive.google.com/uc?id=10KLXHYB0r_eTY1xkYtmbb5ctcXd6fotM"
    dictionary["3c"] = "https://drive.google.com/uc?id=1Ol_Ctib4VNE7_Ut5ATpJ87-o8dpJlQOF "
    dictionary["3d"] = "https://drive.google.com/uc?id=1dq3_hQzdKsaRPkgrGtWB4befeVZ1nwU3"
    dictionary["3h"] = "https://drive.google.com/uc?id=1I2rViNzlfsycfD59ilzu8pxYur_WnujH"
    dictionary["3s"] = "https://drive.google.com/uc?id=1IQxxee7PaFo0-n_PYaFhgTGTAWs1tQRI"
    dictionary["4c"] = "https://drive.google.com/uc?id=1IiCXr7H28GDqoZiuhGVPG3ks6ypsycsI"
    dictionary["4d"] = "https://drive.google.com/uc?id=1C9liPedr7S-Om6mGy-G0fKU1NGzV_9nP"
    dictionary["4h"] = "https://drive.google.com/uc?id=1b17QfXb6CP2691C32L3nVfoyckFr-kqy"
    dictionary["4s"] = "https://drive.google.com/uc?id=1SEpv-ZGhkEbRx_SqLJyrZL0SZcOIf8fC"
    dictionary["5c"] = "https://drive.google.com/uc?id=1pFv6HQxLZkMmMriDw8cxB3Zs2UiLhDjL"
    dictionary["5d"] = "https://drive.google.com/uc?id=11Nt5dItxdw0NOpDglwQTfOT6g6BclBVt"
    dictionary["5h"] = "https://drive.google.com/uc?id=1RYjrGJy6hFeFWrbMiDgfb4EMcEnOSPRT"
    dictionary["5s"] = "https://drive.google.com/uc?id=1xWG0y1BIRtamCgBCGSEyvxEEZjBaW_3X"
    dictionary["6c"] = "https://drive.google.com/uc?id=1aIMPOrpFEPjfLNaEq-3g0VmFHExfZPpf"
    dictionary["6d"] = "https://drive.google.com/uc?id=1_gRsi83fyfTJ-WzG4f2qkEoLZs_5PkL1"
    dictionary["6h"] = "https://drive.google.com/uc?id=1DwEXgzO8g95RGs2RSokduAvPWukJU4YN"
    dictionary["6s"] = "https://drive.google.com/uc?id=18yXWcjjwqsiUqH0_2pU_VJ1LY1qaxA2V"
    dictionary["7c"] = "https://drive.google.com/uc?id=1dEuAdL2wqFTadvIRJ7aghCBk15oOfUEQ"
    dictionary["7d"] = "https://drive.google.com/uc?id=16_-8wJ1uszYhwEFAmzF-TEGdX0AkdIEy"
    dictionary["7h"] = "https://drive.google.com/uc?id=1EY8qHoTfAaTIxGki15IP4uVjGlEqAxXT"
    dictionary["7s"] = "https://drive.google.com/uc?id=1S6qe4t5hnxX6IqBpeivqSrIltxQieTAs"
    dictionary["8c"] = "https://drive.google.com/uc?id=1H_zGHfjQhPBcE2gnKlO0NjIeYKw9eYQH"
    dictionary["8d"] = "https://drive.google.com/uc?id=1MojrfTnQ58iCGlb24UFAmgEj0bf2ma8G"
    dictionary["8h"] = "https://drive.google.com/uc?id=1t8DJ7TTd9CEdOtk3OrMdQq8Wwg5uSvYu"
    dictionary["8s"] = "https://drive.google.com/uc?id=1nDnUSQ9GFRTrXA5uiDkd-Ai-G6ZPxE-h"
    dictionary["9c"] = "https://drive.google.com/uc?id=1OTvCaxOa_t2RMLH8ICfbv5X_G0KRLN5e"
    dictionary["9d"] = "https://drive.google.com/uc?id=10gbEnOxZy0lPcEGXVBVyOVf7ZrBoYpUi"
    dictionary["9h"] = "https://drive.google.com/uc?id=1Mq2uis0mBTvJT3JRzMl1juBB5v-QCfKX"
    dictionary["9s"] = "https://drive.google.com/uc?id=1dIpS9M31tN-KTQZgMq5l1XF02ygxyg6n"
    dictionary["10c"] = "https://drive.google.com/uc?id=17KQFaVA6WbVcWJLOHg6WGxUEfvEjnaGK"
    dictionary["10d"] = "https://drive.google.com/uc?id=1w-mGSp7GDVauCU8YbjkiAnqUZEIYy3j_"
    dictionary["10h"] = "https://drive.google.com/uc?id=1SeJadUYwGRjPGuat8FEEcwEqHma2aJl9"
    dictionary["10s"] = "https://drive.google.com/uc?id=1IStkv7f3RS-8cOZGWbWIEmrnC0vlIzie"
    dictionary["jc"] = "https://drive.google.com/uc?id=14TTAT-vJL8QDy-ZQ9lOhAY1EwuEbBbFh"
    dictionary["jd"] = "https://drive.google.com/uc?id=1fWVKvhAEJb6ga4QJlWGs666U0XqApWWl"
    dictionary["jh"] = "https://drive.google.com/uc?id=1j94j_7uX64tU-umY1mjrtswDrHpIXinV"
    dictionary["js"] = "https://drive.google.com/uc?id=1wMSOq3CNhSrGqkNqCx5aapCpbESaHYYM"
    dictionary["qc"] = "https://drive.google.com/uc?id=18ep764J-Pqf3Ll0JWNBUQ_Q9rGTlB4vH"
    dictionary["qd"] = "https://drive.google.com/uc?id=1TsPWFU7ruIJe2_fzIeua0N1jyJLbSNwu"
    dictionary["qh"] = "https://drive.google.com/uc?id=1XGaUA8RSQSpxL1LdGEcSKHWX-iyaBuXr"
    dictionary["qs"] = "https://drive.google.com/uc?id=1tD47yzTRKduLtOyBrTiH2g70jGhcRmCD"
    dictionary["kc"] = "https://drive.google.com/uc?id=1CP1kqNS6TFzLfk-3GGK0GlVLxgBg2b7F"
    dictionary["kd"] = "https://drive.google.com/uc?id=1OZwTiYCJ0eSORl_dyvlqO4aGygdtbQau"
    dictionary["kh"] = "https://drive.google.com/uc?id=1yscD5qil8Ok20MRSGCdu3KyBRhLB2gYq"
    dictionary["ks"] = "https://drive.google.com/uc?id=1MOH2NAUoSUcoKunRc5tRNds_jjPpIWtn"

  
    
    

    if (payload === '0') {
        say({
            attachment: 'image',
            url: dictionary["1c"]
        });
    }
}


module.exports = {
    filename: 'helloworld',
    title: 'War',
    introduction: [
        'Welcome to Nemoji Language Center!! 🎉  \n\nHello, I am your Nemoji Tutor.' +
        '👋🏻 🤖\nFor your information, this is an application for learning foreign ' +
         'language using cute emojis. 🔤 🌏 \n If you are interested to learn ' +
         'many languages, here is the best place to start! 🏮📚'
    ],
    start: start,
    state: state
};
    
