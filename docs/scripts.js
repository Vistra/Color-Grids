function init(){loadHues();var e=document.getElementById("hue-input-value");e.innerHTML=hueNumber.value,hueNumber.addEventListener("input",function(){e.innerHTML=hueNumber.value,loadHues()})}function loadHues(){if(parseInt(hueNumber.value)<=parseInt(hueNumber.max)){removeElements("hue-container");for(var e=0;e<parseInt(hueNumber.value);e++){var t=360/parseInt(hueNumber.value);addHues(t,e)}}else hueNumber.value=32,loadHues()}function removeElements(e){for(var t=document.getElementsByClassName(e);t.length>0;)t[0].parentNode.removeChild(t[0])}function addHues(e,t){var a=document.createElement("div");a.classList.add("hue-container");var n=document.createElement("div");n.setAttribute("id",Math.round(e*t)),n.classList.add("hue"),n.onclick=hueSelection,n.style.backgroundColor="hsl("+e*t+", 100%, 50%)",n.setAttribute("data",Math.round(e*t));var d=document.createElement("h6");d.classList.add("hue-name"),d.innerHTML=Math.round(e*t);var r=document.getElementById("hue-card-bottom");r.appendChild(a,r),a.appendChild(n,a),a.appendChild(d,a)}function hueSelection(){var e=this;this.classList.contains("selected")?(this.classList.remove("selected"),removeSlCard(e)):(this.classList.add("selected"),createSLCards(e))}function removeSlCard(e){var t=document.getElementById("sl-card-"+e.id);t.parentNode.removeChild(t)}function createSLCards(e){var t=e.getAttribute("id"),a=document.getElementById("sl-section"),n=document.createElement("section");n.setAttribute("id","sl-card-"+e.id),n.classList.add("card","sl-card");var d=document.createElement("div"),r=d;d.classList.add("card-top");var l=document.createElement("h2");l.classList.add("header-item"),l.style.color="hsl("+t+", 100%, 50%)";var i=document.createElement("div");i.classList.add("sl-input-table");var s=document.createElement("div");s.classList.add("s-input-row");var c=document.createElement("div");c.classList.add("l-input-row");var u=document.createElement("div");u.classList.add("s-title-data");var o=document.createElement("div");o.classList.add("s-input-data");var m=document.createElement("div");m.classList.add("l-title-data");var v=document.createElement("div");v.classList.add("l-input-data");var p=document.createElement("h6");p.innerHTML="SATURATION";var h=document.createElement("h6");h.innerHTML="LIGHTNESS";var L=document.createElement("h5");L.classList.add("s-input-value");var C=document.createElement("h5");C.classList.add("l-input-value");var b=document.createElement("input");b.setAttribute("type","range"),b.setAttribute("value","4"),b.setAttribute("min","1"),b.setAttribute("max","12"),b.setAttribute("size","2"),b.setAttribute("id","saturation-input"),b.classList.add("header-item","divider"),L.innerHTML=b.value,b.addEventListener("input",function(){L.innerHTML=b.value});var E=document.createElement("input");E.setAttribute("type","range"),E.setAttribute("value","4"),E.setAttribute("min","1"),E.setAttribute("max","12"),E.setAttribute("size","2"),E.setAttribute("id","lightness-input"),E.classList.add("header-item","divider"),C.innerHTML=E.value,E.addEventListener("input",function(){C.innerHTML=E.value});var f=document.createElement("div");f.classList.add("card-bottom");var g=document.createElement("table");g.classList.add("sl-table"),g.setAttribute("id","slTable"),a.appendChild(n,a),n.appendChild(d,n),d.appendChild(l,d),d.appendChild(i,d),i.appendChild(s,i),s.appendChild(u,s),u.appendChild(p,u),s.appendChild(o,s),o.appendChild(b,o),s.appendChild(L,s),i.appendChild(c,i),c.appendChild(m,c),m.appendChild(h,m),c.appendChild(v,c),v.appendChild(E,v),c.appendChild(C,c),n.appendChild(f,n),addCloseButton(r),f.appendChild(g,f),l.innerHTML=t,fillSLTable(g,b,E,t)}function fillSLTable(e,t,a,n){function d(){function d(){for(var e=0;e<parseInt(t.value);e++){var a=document.createElement("td");a.classList.add("sl"),a.setAttribute("id",n+"-"+d+"-"+i);var d=(e+1)*(100/parseInt(t.value));l.appendChild(a,l),a.style.backgroundColor="hsl("+n+","+d+"%,"+i+"%)"}}e.innerHTML="";for(var r=0;r<parseInt(a.value);r++){var l=document.createElement("tr");e.appendChild(l,e);var i=100-(r+1)*(100/(parseInt(a.value)+1));d(),slSelect()}}d(),t.addEventListener("input",function(){parseInt(t.value)<=parseInt(t.max)?d():(t.value=parseInt(t.max),d())}),a.addEventListener("input",function(){parseInt(a.value)<=parseInt(a.max)?d():(a.value=parseInt(a.max),d())})}function slSelect(){for(var e=document.querySelectorAll(".sl"),t=0;t<e.length;t++)e[t].addEventListener("click",toggleClass,!1)}function toggleClass(){var e=this;this.classList.contains("selected")?(this.classList.remove("selected"),removePalette(e)):(this.classList.add("selected"),createFinalPalette(e))}function createFinalPalette(e){var t=document.getElementById("secondary"),a=document.createElement("div");a.classList.add("swatch-container"),a.setAttribute("id",e.id+"-p");var n=document.createElement("div");n.classList.add("final-color-wrap"),n.style.backgroundColor=e.style.backgroundColor;var d=document.createElement("div");d.classList.add("final-color-meta");var r=document.createElement("h6");r.classList.add("final-color-hsl"),r.innerHTML=e.style.backgroundColor;var l=document.createElement("h6");l.classList.add("final-color-rgb"),l.innerHTML=rgb2hsl(e.style.backgroundColor);var i=document.createElement("h6");i.classList.add("final-color-hex"),i.innerHTML=rgb2hex(e.style.backgroundColor),t.appendChild(a,t),addCloseButton(n),a.appendChild(n,a),a.appendChild(d,a),d.appendChild(l,d),d.appendChild(r,d),d.appendChild(i,d)}function removePalette(e){var t=document.getElementById(e.id+"-p");t.parentNode.removeChild(t)}function addCloseButton(e){var t=document.createElement("div");t.addEventListener("click",deleteCard,!1),t.classList.add("header-item","close-card"),t.innerHTML="×",e.appendChild(t,e)}function deleteCard(){var e=this.parentElement.parentElement,t=e.id;e.parentNode.removeChild(e),e.style.display="none",deselectById(t)}function deselectById(e){if(e.includes("sl-card"))var t=e.replace("sl-card-","");else{if(!e.includes("-p"))return;t=e.replace("-p","")}var a=document.getElementById(t);a==document.getElementById(t)&&a.classList.remove("selected")}function rgb2hex(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return/^#[0-9A-F]{6}$/i.test(e)?e:(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),"#"+t(e[1])+t(e[2])+t(e[3]))}function rgb2hsl(e){e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);var t=e[1],a=e[2],n=e[3];t/=255,a/=255,n/=255;var d=Math.max(t,a,n),r=Math.min(t,a,n),l,i,s=(d+r)/2;if(d==r)l=i=0;else{var c=d-r;switch(i=s>.5?c/(2-d-r):c/(d+r),d){case t:l=(a-n)/c+(a<n?6:0);break;case a:l=(n-t)/c+2;break;case n:l=(t-a)/c+4}l/=6}return"hsl("+Math.round(360*l)+", "+Math.round(100*i)+"%, "+Math.round(100*s)+"%)"}var hueNumber=document.getElementById("hue-divider");init();