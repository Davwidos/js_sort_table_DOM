document.addEventListener("click",// write code here
function(e){if("TH"===e.target.tagName){for(var r,t=0,a=e.target.previousElementSibling;a;a=a.previousElementSibling)t++;switch(e.target.innerText.toUpperCase()){case"AGE":case"SALARY":r=!0;break;default:r=!1}for(var n=e.target;"TABLE"!==n.tagName;)if(null===(n=n.parentNode))throw Error("th not isnsie table");var i=Array.from(n.querySelectorAll("tbody tr"));i.sort(function(e,a){var n=e.children.item(t).innerText,i=a.children.item(t).innerText;return r?+n.replace(/\D/g,"")-+i.replace(/\D/g,""):n.localeCompare(i)});var o=n.querySelector("tbody");i.forEach(function(e){return o.append(e)})}});//# sourceMappingURL=index.81fea019.js.map

//# sourceMappingURL=index.81fea019.js.map
