window.onload = function(){
    //alert("Parabéns White!!!");
    //var mensagem = "Olá White";
    //console.log(mensagem);
    //var titulo = document.querySelector("h1");
    //titulo.textContent = "Isaac é muito lindo";
    //console.log(document.querrySelectorAll(".white")[0]);
    //console.log(snake[0])
    var isaacs = ["img/goku.jpg", "img/cao.jpg", "img/bigs.jpg"];
    var dirso = 0;

    function whitezao(){
        dirso++;
        if(dirso == isaacs.length){
            dirso = 0;
        }
        document.querySelector("#bisgod img").src = isaacs[dirso]
    }

    setInterval(whitezao, 2000)
}

