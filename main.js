// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Init voices array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();

    //Loop through voices and create an option for each one
    voices.forEach(voice => {
        // Create option element
        const option = document.createElement("option");
        // Fill option with voice and language
        option.textContent = voice.name + "(" + voice.lang + ")";

        //Set needed option attributes
        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
    })
}

//Run code depending on the browser
if (isFirefox) {
    getVoices();
}
if (isChrome) {
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = getVoices;
    }
}