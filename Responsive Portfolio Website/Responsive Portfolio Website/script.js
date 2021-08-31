window .addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150;

        if(revealTop < windowHeight - revealpoint){
            reveals[i].classList.add("activate");
        } else {
            reveals[i].classList.remove("activate");
        }
    }
}