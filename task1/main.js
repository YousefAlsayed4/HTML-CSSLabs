var video = document.getElementById("myVideo");
        var playBtn = document.getElementById("playBtn");
        var stopBtn = document.getElementById("stopBtn");
        var forward= document.getElementById("forward")
        var speed= document.getElementById('forw');
        var sloww=document.getElementById('prev');
        var slower=document.getElementById('previous');
        var mutee=document.getElementById('mute');
        var sound=document.getElementById('so')

        var rangeInput = document.getElementById("ra");

        sound.addEventListener('input', function() {
            video.volume = sound.value / 100; 
        });

        rangeInput.addEventListener('input', function() {
            video.currentTime = rangeInput.value;
        });

        mutee.addEventListener('click',muteVideo)
        slower.addEventListener('click',slowdown)
        sloww.addEventListener('click',slow)
        speed.addEventListener('click',speedup)
        playBtn.addEventListener('click', playVideo);
        stopBtn.addEventListener('click', stopVideo);
        forward.addEventListener('click',forw)

        function muteVideo() {
            video.muted = true;
            sound.value = 0; // Set the range input value to 0
        }
        function slowdown() {
            video.playbackRate = 0.25;
        }
        function slow() {
            video.playbackRate = .5;
        }

        function speedup() {
            video.playbackRate = 2;
        }
        function forw() {
            video.playbackRate = 1.5;
            
        }

        function playVideo() {
            video.play();   
        }

        function stopVideo() {
            video.pause();
            video.currentTime = 0;
        }