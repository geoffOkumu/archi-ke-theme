function navigation(i){let a,r,t,n;function e(e){if(e){for(var d=a.parentNode;a.firstChild;)d.insertBefore(a.firstChild,a);s(a)}else a=o("navigation-wrapper"),i.container.parentNode.appendChild(a),a.appendChild(i.container);e?s(r):(r=o("dots"),i.track.details.slides.forEach((e,d)=>{var a=o("dot");a.addEventListener("click",()=>i.moveToIdx(d)),r.appendChild(a)}),a.appendChild(r)),e?(s(t),s(n)):((t=o("arrow arrow--left")).addEventListener("click",()=>i.prev()),(n=o("arrow arrow--right")).addEventListener("click",()=>i.next()),a.appendChild(t),a.appendChild(n))}function s(e){e.parentNode.removeChild(e)}function o(e){var d=document.createElement("div");return e.split(" ").forEach(e=>d.classList.add(e)),d}function d(){var a=i.track.details.rel;0===a?t.classList.add("arrow--disabled"):t.classList.remove("arrow--disabled"),a===i.track.details.slides.length-1?n.classList.add("arrow--disabled"):n.classList.remove("arrow--disabled"),Array.from(r.children).forEach(function(e,d){d===a?e.classList.add("dot--active"):e.classList.remove("dot--active")})}i.on("created",()=>{e(),d()}),i.on("optionsChanged",()=>{console.log(2),e(!0),e(),d()}),i.on("slideChanged",()=>{d()}),i.on("destroyed",()=>{e(!0)})}$(document).ready(function(){$(".gh-content").fitVids(),$("#project-slider").addClass("keen-slider");document.querySelectorAll(".kg-gallery-image img").forEach(function(e,d){e.classList.add("keen-slider__slide"),e.classList.add("number-slide"+d),$("#project-slider").append(e)}),new KeenSlider("#project-slider",{},[navigation])});
//# sourceMappingURL=post-slider.js.map