Reveal.initialize({
controls: true,
progress: true,
history: true,
center: true,
autoSlide: 2000,
theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
dependencies: [
{ src: '/js/guide/lib/classList.js', condition: function () {
return !document.body.classList;
} },
{ src: 'js/guide/lib/zoom.js', async: false, condition: function () {
return !!document.body.classList;
} }
]
});
Reveal.addEventListener('slidechanged', function(event) {

});