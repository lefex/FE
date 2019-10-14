window.addEventListener('scroll', function() {
    console.log('scroll = ' + window.scrollY);
});

for(v in window) {
    console.log(v + '=' + window[v]);
}
