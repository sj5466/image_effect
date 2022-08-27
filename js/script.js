let x = 0,
        y = 0,
        mouseX = 0,
        mouseY = 0,
        angleX = 0,
        angleY = 0,
        fmouseX = 0,
        fmouseY = 0;

        document.addEventListener("mousemove", function(e){
            x = e.pageX;
            y = e.pageY;

            mouseX = Math.max(-50, Math.min(50, window.innerWidth/2 - x));
            mouseY = Math.max(-50, Math.min(50, window.innerHeight/2 - y));

            angleX = (mouseX * 12) / 100;
            angleY = (mouseY * 12) / 100;

            fmouseX += (angleX - fmouseX) * 1/10;  
            fmouseY += (angleY - fmouseY) * 1/10;

   

            //커서
            gsap.to(".cursor", {duration: 0.3, left: x, top: y});

            //움지임
            const move = document.querySelector(".moveImage");
            move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ -fmouseX +"deg)";
        });


        //출력용
        document.addEventListener("mousemove", function(){
            document.querySelector(".pageX").textContent = x;
            document.querySelector(".pageY").textContent = y;
            document.querySelector(".mouseX").textContent = mouseX;
            document.querySelector(".mouseY").textContent = mouseY;
            document.querySelector(".angleX").textContent = angleX;
            document.querySelector(".angleY").textContent = angleY;
            document.querySelector(".fmouseX").textContent = Math.round(fmouseX);
            document.querySelector(".fmouseY").textContent = Math.round(fmouseY);
        });