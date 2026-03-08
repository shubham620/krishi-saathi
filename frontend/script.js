document.getElementById("askBtn").onclick = function(){

let question = document.getElementById("question").value.toLowerCase();

let response = "";

// SCHEME ELIGIBILITY
if(question.includes("pm kisan")){

response =
"✅ You may be eligible for PM Kisan.<br><br>" +

"<b>Confidence Score: 85%</b>" +

"<div class='confidence-bar'>" +
"<div class='confidence-fill' style='width:85%'></div>" +
"</div><br>" +

"<b>Reason:</b><br>" +
"• Land holding below 2 hectares<br>" +
"• Farmer category valid<br><br>" +

"<b>Nearby Help Centers:</b><br>" +
"• CSC Center – 2 km<br>" +
"• Agriculture Office – 5 km<br><br>" +

"<b>Community Insights:</b><br>" +
"• 40% farmers successfully applied<br>" +
"• 35% faced document issues<br>" +
"• 25% required land record updates";

}

// MARKET ADVISOR
else if(question.includes("wheat") || question.includes("gehu")){

response =
"📊 Market Advisory\n\n" +
"Current wheat price in nearby mandis is ₹2200–₹2400 per quintal.\n\n" +
"Suggested Mandis:\n" +
"• Jaipur Mandi\n" +
"• Kota Market\n" +
"• Ajmer Market\n\n" +
"Tip: Prices may increase after 2 weeks.";

}

// SCAM ALERT
else if(question.includes("agent") || question.includes("fee") || question.includes("paisa")){

response =
"⚠ Scam Alert\n\n" +
"Government schemes are FREE.\n" +
"No agent should ask for money.\n\n" +
"If someone demands money, it may be a fraud.\n\n" +
"Report it to the nearest agriculture office.";

}

// GENERAL RESPONSE
else{

response =
"🤖 I can help with:\n\n" +
"• Government scheme eligibility\n" +
"• Market price advice\n" +
"• Farming guidance\n\n" +
"Try asking:\n" +
"'Kya mujhe PM Kisan milega?'";

}

let chatBox = document.getElementById("chatBox");

// User message
let userMsg = document.createElement("div");
userMsg.className = "user-message";
userMsg.innerText = question;
chatBox.appendChild(userMsg);

// Bot message
let botMsg = document.createElement("div");
botMsg.className = "bot-message";
botMsg.innerHTML = response;
chatBox.appendChild(botMsg);

// scroll down automatically
chatBox.scrollTop = chatBox.scrollHeight;

}
document.getElementById("question").value = "";
// Voice recognition
const voiceBtn = document.getElementById("voiceBtn");

voiceBtn.onclick = function(){

if(!('webkitSpeechRecognition' in window)){
alert("Speech recognition not supported in this browser.");
return;
}

const recognition = new webkitSpeechRecognition();

recognition.lang = "hi-IN"; // Hindi support
recognition.start();

recognition.onresult = function(event){

let transcript = event.results[0][0].transcript;

document.getElementById("question").value = transcript;

}

}
// Toggle accessibility panel
const accessBtn = document.getElementById("accessBtn");
const accessPanel = document.getElementById("accessPanel");

accessBtn.onclick = function(){

if(accessPanel.style.display === "flex"){
accessPanel.style.display = "none";
}
else{
accessPanel.style.display = "flex";
}

}


// Font size control
function changeFont(step){

let currentSize = parseFloat(getComputedStyle(document.body).fontSize);

document.body.style.fontSize = (currentSize + step) + "px";

}


// High contrast mode
function toggleContrast(){

document.body.classList.toggle("high-contrast");

}


// Voice mode placeholder
function toggleVoice(){

alert("Voice assistant enabled");

}
document.getElementById("yesBtn").onclick = function(){

alert("Thank you! Your feedback helps improve the assistant.");

}

document.getElementById("noBtn").onclick = function(){

alert("Thanks for your feedback. We will improve the guidance.");

}
function quickAsk(text){

document.getElementById("question").value = text;

document.getElementById("askBtn").click();

}
const languageSelect = document.getElementById("languageSelect");

languageSelect.onchange = function(){

let lang = languageSelect.value;

if(lang === "hi"){
alert("Hindi interface coming soon in full version.");
}

if(lang === "bn"){
alert("Bengali interface coming soon.");
}

if(lang === "ta"){
alert("Tamil interface coming soon.");
}

}
function updateOnlineStatus(){

if(!navigator.onLine){

document.getElementById("offlineBanner").style.display = "block";

}
else{

document.getElementById("offlineBanner").style.display = "none";

}

}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

updateOnlineStatus();
function scrollToAssistant(){
document.querySelector(".assistant").scrollIntoView({
behavior:"smooth"
});
}
document.getElementById("question").focus();
document.querySelectorAll(".tool-btn").forEach(button => {

button.onclick = function(){

alert("This feature will connect to government resources in the full version.");

}

});