document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".no-js").forEach(e=>{e.classList.remove("no-js"),e.classList.add("js")});let i=document.querySelector(".main-header__toggle"),n=document.querySelector(".main-nav");i.addEventListener("click",()=>{n.style.display==="none"||n.style.display===""?(n.style.display="block",i.classList.add("main-header__toggle--open")):(n.style.display="",i.classList.remove("main-header__toggle--open"))});let u=document.querySelector(".slider__container"),d=document.querySelector(".slider__thumb"),m=document.querySelector(".slider__img-before"),v=document.querySelector(".slider__img-after"),r=e=>{let s=u.getBoundingClientRect(),t=e-s.left;t<0?t=0:t>s.width&&(t=s.width);let c=t/s.width*100;d.style.left=`${c}%`,m.style.clipPath=`inset(0 ${100-c}% 0 0)`,v.style.clipPath=`inset(0 0 0 ${c}%)`},l=e=>r(e.clientX),a=e=>r(e.touches[0].clientX),o=()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",o)};d.addEventListener("mousedown",e=>{e.preventDefault(),window.addEventListener("mousemove",l),window.addEventListener("mouseup",o)}),d.addEventListener("touchstart",e=>{e.preventDefault(),window.addEventListener("touchmove",a),window.addEventListener("touchend",o)})});