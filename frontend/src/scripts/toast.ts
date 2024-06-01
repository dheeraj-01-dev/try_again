"use client"

const toast = ( message: string|number|undefined|null )=>{
  
  const globalToast = document.getElementById("globalToast");
  const toastText = document.getElementById("toastText");

  if(!globalToast||!toastText)return;

  // toastText.innerHTML = `${message}`;
  toastText.innerHTML = `${message===undefined?"something went wrong!":message}`;
  globalToast.style.display = "flex"

  setTimeout(() => {
    globalToast.style.display = "none"
  }, 2300);
  
};

export default toast;