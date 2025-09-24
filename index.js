import{a as d,S as m,i as a}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="52380284-963e8352b908bdb319614297a",y="https://pixabay.com/api/";function g(i){const r={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(y,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
  <li>
   <a href="${n}">
            <img src="${o}" alt="${e}" width="300"/>
          </a>
 <div class="info">
            <p>👍 ${t}</p>
            <p>👀 ${s}</p>
            <p>💬 ${u}</p>
            <p>⬇️ ${f}</p>
          </div>
  </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.error({title:"error",message:"Please enter a search query!"});return}L(),v(),g(r).then(o=>{if(o.hits.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
