document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".main-header__toggle"),e=document.querySelector(".main-nav");t.addEventListener("click",()=>{e.style.display==="none"||e.style.display===""?(e.style.display="block",t.classList.add("main-header__toggle--open")):(e.style.display="none",t.classList.remove("main-header__toggle--open"))})});
