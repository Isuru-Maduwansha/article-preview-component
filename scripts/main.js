
const shareArea = document.getElementById("profile-card");
const button = document.getElementById("share-button");
const shareText = document.getElementById("share-text");
const links = document.getElementById("share-link");

let isActive = false;

button.addEventListener("click" , function(){
   isActive = !isActive;

   if(isActive){
      shareArea.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareText.classList.add("hidden");
      links.classList.add("share-hidden");
      links.classList.remove("hidden");
   }else{
      shareArea.style.backgroundColor = "";
      shareText.classList.remove("hidden");
      links.classList.add("hidden");
      links.classList.remove("share-hidden");
   }
});