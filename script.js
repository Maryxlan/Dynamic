let stars = document.getElementById('stars');

    
        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars.style.left = value * 0.3 +"px";
        })
        

        let stars1 = document.getElementById('stars1');

    
        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            stars1.style.right = value * 0.3 +"px";
        })
        

    