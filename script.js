    document.body.addEventListener('keyup',(event)=>{
        playSound( event.code.toLocaleLowerCase() );

    }); // keyup = monitora quando uma tecla é pressionada e é solta, keydown monitora quando a tecla se mantém pressionada 

    document.querySelector('.composer button').addEventListener('click', ()=>{
        let song = document.querySelector('#input').value;
        if (song !== ''){
            let songArray = song.split(''); // separa as letras da string
            playComposition(songArray);
        }
    });



    function playSound(sound){
        let audioElement = document.querySelector(`#s_${sound}`); // seleciona o arquivo de audio baseado na tecla digitada
        let keyElement = document.querySelector(`div[data-key="${sound}"]`)
            
        if(audioElement) {
            audioElement.currentTime = 0; // toca o audio da tecla mesmo que ele não tenha acabado  
            audioElement.play(); 
        }
        
        if(keyElement){
            keyElement.classList.add('active'); // adiciona a cor amarela as teclas
            setTimeout(()=>{
            keyElement.classList.remove('active'); // remove a cor amarela após 300 ms
        }, 300);
            
        }
    }
        function playComposition(songArray){
            let wait = 0;
            for (let songItem of songArray){
                setTimeout(()=>{
                    playSound(`key${songItem}`);     
                },wait);
                wait += 250;
               
            }
        }

    