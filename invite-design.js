document.addEventListener("DOMContentLoaded", (e) => {
  
  const spring = document.getElementById("spring");
  spring.addEventListener("click", (e) => {
    const invite = document.getElementById("invite")
    invite.style.backgroundColor = "#C6FFBB";
    invite.style.border = "thick solid #FF74D9";
    invite.style.fontFamily = "Parisienne, cursive";
    document.getElementById("invite-text").style.color = "#FF74D9";
  })
  
  const summer = document.getElementById("summer");
  summer.addEventListener("click", (e) => {
    const invite = document.getElementById("invite")
    invite.style.backgroundColor = "#FFEAAA";
    invite.style.border = "thick solid #2A92CE";
    invite.style.fontFamily = "Parisienne, cursive";
    document.getElementById("invite-text").style.color = "#2A92CE";
  })
  
  const fall = document.getElementById("fall");
  fall.addEventListener("click", (e) => {
    const invite = document.getElementById("invite")
    invite.style.backgroundColor = "#FFB14A";
    invite.style.border = "thick solid #760304";
    invite.style.fontFamily = "Parisienne, cursive";
    document.getElementById("invite-text").style.color = "#760304";
  })
  
  const winter = document.getElementById("winter");
  winter.addEventListener("click", (e) => {
    const invite = document.getElementById("invite")
    invite.style.backgroundColor = "#BDE1F0";
    invite.style.border = "thick solid #002140";
    invite.style.fontFamily = "Parisienne, cursive";
    document.getElementById("invite-text").style.color = "#002140";
  })
  
  const partner1 = document.getElementById("partner1");
  partner1.addEventListener("keypress", (e) => {
    console.log(e.which);
    console.log(String.fromCharCode(e.which));
    keychar = String.fromCharCode(e.which);
    let partner1Invite = document.getElementById("partner1-invite");
    partner1Invite.innerHTML += keychar;
  })
  
  partner1.addEventListener("keydown", (e) => {
    console.log(e.which);
    if (e.which == 8) {
      let partner1Invite = document.getElementById("partner1-invite");
      let partner1InviteStr = partner1Invite.innerHTML;
      let partner1InviteStrNew = partner1InviteStr.slice (0, -1); 
      partner1Invite.innerHTML = partner1InviteStrNew;
    }
  })
  
  const partner2 = document.getElementById("partner2");
  partner2.addEventListener("keypress", (e) => {
    console.log(e.which);
    console.log(String.fromCharCode(e.which));
    keychar = String.fromCharCode(e.which);
    let partner2Invite = document.getElementById("partner2-invite");
    partner2Invite.innerHTML += keychar;
  })
  
  partner2.addEventListener("keydown", (e) => {
    console.log(e.which);
    if (e.which == 8) {
      let partner2Invite = document.getElementById("partner2-invite");
      let partner2InviteStr = partner2Invite.innerHTML;
      let partner2InviteStrNew = partner2InviteStr.slice (0, -1); 
      partner2Invite.innerHTML = partner2InviteStrNew;
    }
  })
  
})