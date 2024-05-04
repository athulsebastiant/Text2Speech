let speech = new SpeechSynthesisUtterance(); //This object represents a speech request and contains properties for the content of the speech and various speech parameters.

let voices = []; // Created an empty array named voices to store the available speech synthesis voices.

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    /*
    Event Listener
    
    This part listens for the onvoiceschanged event on the window.speechSynthesis object.
     This event fires whenever the available voices for speech synthesis change on the user's system.
    
    */

    voices = window.speechSynthesis.getVoices(); //Gets the list of available voices
    speech.voice = voices[0]; //Sets the default voice for the speech object to the first voice in the voices array

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    /*
    Loops through each voice in the voices array:
    voice: Represents the current voice object in the loop.
    i: Represents the index of the current voice in the array.
    
    Inside the loop; Creates a new <option> element  for the voiceSelect element.
    voice.name: Sets the text displayed for the option to the name of the voice.
    i: Sets the value of the option to the voice's index in the voices array. This allows us to easily select the corresponding voice later.
    */
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

})

/*
The window.speechSynthesis object in JavaScript is the entry point for using the 
Web Speech API to enable text-to-speech functionality on your web pages. 
It provides methods and properties to control how text is spoken by the user's system.*/

/*You use window.speechSynthesis to manage and control the speech service, 
and you create instances of SpeechSynthesisUtterance to define what will be spoken and how.*/