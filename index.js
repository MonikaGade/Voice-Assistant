// // let speak=document.querySelector('.speak')
// // let text=document.querySelector('.text')
// // let listen=document.querySelector('#listen')
// // let textprint=document.querySelector('#text')
// // let listenwords=document.querySelector('#listenwords')
// // let keyboard=document.querySelector('#keyboard')
// // let texttypingkey=document.querySelector('.texttyping')
// // let selectvoice= document.querySelector('select')
// // let speech=new webkitSpeechRecognition()
// // listenwords.addEventListener('click',()=>{
// //     speech.onstart=function(){
// //         listen.innerText='I am Listening.....'
// //     }
// //     speech.onresult=function(e){
// //         let transcript=e.results[0][0].transcript
// //         let p=document.createElement('p')
// //         p.className='printtext'
// //         p.innerText=transcript
// //         text.appendChild(p)
// //         if(transcript.includes('hello')){
// //             let p=document.createElement('p')
// //             p.className='printanothertext'
// //             p.innerText='hi monika'
// //             text.appendChild(p)
// //         }
// //         if(transcript.includes('open YouTube')){
// //             let p=document.createElement('p')
// //             text.appendChild(p)
// //             window.open('https://www.youtube.com')
// //         }
       
// //     }
// //     speech.start()
// //     speech.onend=function(){
// //         speech.start()
// //     }
// // })
// // keyboard.onclick=function(){
// //     let texttyping=new SpeechSynthesisUtterance()
// //     texttypingkey.style.display='block'
// //     let volume=1
// //     let range=1
// //     let pitch=1
// //     texttyping.lang='en'
// //     texttyping.volume=volume
// //     texttyping.range=range
// //     texttyping.pitch=pitch;
// //     let voices=[]
// //     window.speechSynthesis.onvoiceschanged=()=>{
// //         voices=window.speechSynthesis.getVoices()
// //         // console.log(voices)
// //         texttyping.voice=voices[0]
// //         //voices.forEach((voice,i)=>(selectvoice.options[i]=new Option(voice.name,i)))
// //         for(let voice in voices){
// //             let option=document.createElement('option')
// //             option.value=voice
// //             option.innerText=`${voices[voice].name}`
// //             selectvoice.appendChild(option)
// //         }
// //        }
// //        selectvoice.onchange=()=>{
// //         texttyping.voice=voices[selectvoice.value]
// //        }
    
   
     
// //        let speaking=document.getElementById('speak')
// //        speaking.onclick=function(){
// //           texttyping.text=document.querySelector('#text1').value
// //           window.speechSynthesis.speak(texttyping)
// //                }
// //                document.getElementById('pause').onclick=()=>{
// //                 window.speechSynthesis.pause()
// //                }
// //                document.getElementById('resume').onclick=()=>{
// //                 window.speechSynthesis.resume()
// //                }
// //                document.getElementById('cancel').onclick=()=>{
// //                 window.speechSynthesis.cancel()
// //                }
      
// // }




// let speak = document.querySelector('.speak');
// let text = document.querySelector('.text');
// let listen = document.querySelector('#listen');
// let textprint = document.querySelector('#text');
// let listenwords = document.querySelector('#listenwords');
// let keyboard = document.querySelector('#keyboard');
// let texttypingkey = document.querySelector('.texttyping');
// let selectvoice = document.querySelector('select');
// let speech = new webkitSpeechRecognition();

// listenwords.addEventListener('click', () => {
//     speech.onstart = function () {
//         listen.innerText = 'I am Listening.....';
//     };

//     speech.onresult = function (e) {
//         let transcript = e.results[0][0].transcript.toLowerCase();
//         let p = document.createElement('p');
//         p.className = 'printtext';
//         p.innerText = transcript;
//         text.appendChild(p);

//         // Auto-scroll to bottom when new text is added
//         text.scrollTop = text.scrollHeight;

//         if (transcript.includes('hello')) {
//             let p = document.createElement('p');
//             p.className = 'printanothertext';
//             p.innerText = 'Hi Monika';
//             text.appendChild(p);
//         }

//         // Open external websites
//         const websites = {
//             "google": "https://www.google.com",
//             "facebook": "https://www.facebook.com",
//             "youtube": "https://www.youtube.com",
//             "twitter": "https://www.twitter.com",
//             "github": "https://www.github.com",
//             "instagram": "https://www.instagram.com",
//         };

//         for (let site in websites) {
//             if (transcript.includes(`open ${site}`)) {
//                 let p = document.createElement('p');
//                 p.className = 'printanothertext';
//                 p.innerText = `Opening ${site}...`;
//                 text.appendChild(p);
//                 window.open(websites[site], '_blank');
//             }
//         }

//         // Open GitHub Profile
//         if (transcript.includes("open github profile of")) {
//             let words = transcript.split(" ");
//             let username = words[words.length - 1];

//             let profileUrl = `https://github.com/${username}`;
//             let p = document.createElement('p');
//             p.className = 'printanothertext';
//             p.innerText = `Opening GitHub profile of ${username}...`;
//             text.appendChild(p);

//             window.open(profileUrl, '_blank');
//         }

//         // Scroll to the latest message
//         text.scrollTop = text.scrollHeight;
//     };

//     speech.start();
//     speech.onend = function () {
//         speech.start();
//     };
// });

// keyboard.onclick = function () {
//     let texttyping = new SpeechSynthesisUtterance();
//     texttypingkey.style.display = 'block';
//     texttyping.lang = 'en';
//     texttyping.volume = 1;
//     texttyping.pitch = 1;

//     let voices = [];
//     window.speechSynthesis.onvoiceschanged = () => {
//         voices = window.speechSynthesis.getVoices();
//         texttyping.voice = voices[0];

//         selectvoice.innerHTML = "";
//         voices.forEach((voice, i) => {
//             let option = document.createElement('option');
//             option.value = i;
//             option.innerText = voice.name;
//             selectvoice.appendChild(option);
//         });
//     };

//     selectvoice.onchange = () => {
//         texttyping.voice = voices[selectvoice.value];
//     };

//     document.getElementById('speak').onclick = function () {
//         texttyping.text = document.querySelector('#text1').value;
//         window.speechSynthesis.speak(texttyping);
//     };

//     document.getElementById('pause').onclick = () => {
//         window.speechSynthesis.pause();
//     };

//     document.getElementById('resume').onclick = () => {
//         window.speechSynthesis.resume();
//     };

//     document.getElementById('cancel').onclick = () => {
//         window.speechSynthesis.cancel();
//     };
// };


let speak = document.querySelector('.speak');
let text = document.querySelector('.text');
let listen = document.querySelector('#listen');
let textprint = document.querySelector('#text');
let listenwords = document.querySelector('#listenwords');
let keyboard = document.querySelector('#keyboard');
let texttypingkey = document.querySelector('.texttyping');
let selectvoice = document.querySelector('select');
let speech = new webkitSpeechRecognition();

const websites = {
  google: "https://www.google.com",
  facebook: "https://www.facebook.com",
  youtube: "https://www.youtube.com",
  twitter: "https://www.twitter.com",
  github: "https://www.github.com",
  instagram: "https://www.instagram.com"
};

listenwords.addEventListener('click', () => {
  speech.onstart = function () {
    listen.innerText = 'I am Listening.....';
  };

  speech.onresult = function (e) {
    let transcript = e.results[0][0].transcript.toLowerCase();

    // Display the recognized text from the user
    let userBubble = document.createElement('p');
    userBubble.className = 'printtext';
    userBubble.innerText = transcript;
    text.appendChild(userBubble);

    // Auto-scroll to the bottom when new text is added
    text.scrollTop = text.scrollHeight;

    // Prepare the assistant's response
    let responseBubble = document.createElement('p');
    responseBubble.className = 'printanothertext';

    // Default response text and link element (if applicable)
    let responseText = "";
    let linkElement = null;

    if (transcript.includes('hello')) {
      responseText = 'Hi Monika';
    } else {
      // Check if any of the defined website commands are included in the transcript.
      let foundCommand = false;
      for (let site in websites) {
        if (transcript.includes(`open ${site}`)) {
          responseText = `Opening ${site.charAt(0).toUpperCase() + site.slice(1)}... `;
          // Create an anchor element for the website URL
          linkElement = document.createElement('a');
          linkElement.href = websites[site];
          linkElement.innerText = websites[site];
          linkElement.target = '_blank';
          foundCommand = true;
          break;
        }
      }
      // Special handling for GitHub profiles
      if (!foundCommand && transcript.includes("open github profile of")) {
        let words = transcript.split(" ");
        let username = words[words.length - 1]; // Last word as username
        responseText = `Opening GitHub profile of ${username}... `;
        linkElement = document.createElement('a');
        linkElement.href = `https://github.com/${username}`;
        linkElement.innerText = `https://github.com/${username}`;
        linkElement.target = '_blank';
      }
    }
    
    // Set the text of the response bubble
    responseBubble.innerText = responseText;
    
    // Append the clickable link if available
    if (linkElement) {
      responseBubble.appendChild(document.createElement('br'));
      responseBubble.appendChild(linkElement);
      // Open the link in a new tab as well
      window.open(linkElement.href, '_blank');
    }
    
    // If no known command is found, display a default response
    if (!responseText) {
      responseBubble.innerText = "I didn't understand that.";
    }
    
    text.appendChild(responseBubble);
    
    // Scroll to the latest message
    text.scrollTop = text.scrollHeight;
  };

  speech.start();
  speech.onend = function () {
    speech.start();
  };
});

keyboard.onclick = function () {
  let texttyping = new SpeechSynthesisUtterance();
  texttypingkey.style.display = 'block';
  texttyping.lang = 'en';
  texttyping.volume = 1;
  texttyping.pitch = 1;

  let voices = [];
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    texttyping.voice = voices[0];

    selectvoice.innerHTML = "";
    voices.forEach((voice, i) => {
      let option = document.createElement('option');
      option.value = i;
      option.innerText = voice.name;
      selectvoice.appendChild(option);
    });
  };

  selectvoice.onchange = () => {
    texttyping.voice = voices[selectvoice.value];
  };

  document.getElementById('speak').onclick = function () {
    texttyping.text = document.querySelector('#text1').value;
    window.speechSynthesis.speak(texttyping);
  };

  document.getElementById('pause').onclick = () => {
    window.speechSynthesis.pause();
  };

  document.getElementById('resume').onclick = () => {
    window.speechSynthesis.resume();
  };

  document.getElementById('cancel').onclick = () => {
    window.speechSynthesis.cancel();
  };
};


