const generateBtn = document.getElementById("generateBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");

generateBtn.onclick = () => {

loading.classList.remove("hidden");

results.classList.add("hidden");

setTimeout(()=>{

loading.classList.add("hidden");

results.classList.remove("hidden");

document.getElementById("caption").innerText =
"Money talks, but this Bugatti roars.";

document.getElementById("hook").innerText =
"Wait until you see the ending.";

document.getElementById("hashtags").innerText =
"#bugatti #luxurycars #fyp #viral #supercars #dubai";

},2000);

};

document.getElementById("copyBtn").onclick=()=>{

navigator.clipboard.writeText(

document.getElementById("caption").innerText+"\n\n"+

document.getElementById("hook").innerText+"\n\n"+

document.getElementById("hashtags").innerText

);

alert("Copied!");

};
