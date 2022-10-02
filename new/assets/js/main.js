(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    startImageTransition();
 
    function startImageTransition() {
        const images = document.getElementsByClassName("image-gallery");

        for (var i = 0; i < images.length; ++i) {
            images[i].style.opacity = 1;
        }

        var top = 1; 
        var cur = images.length - 1;

        setInterval(changeImage, 6000);

        async function changeImage() { 
            const nextImage = (1 + cur) % images.length;

            images[cur].style.zIndex = top + 1;
            images[nextImage].style.zIndex = top;

            await transition();

            images[cur].style.zIndex = top; 
            images[nextImage].style.zIndex = top + 1; 
            top = top + 1; 
            images[cur].style.opacity = 1;
            cur = nextImage; 
        }

        function transition() {
            return new Promise(function(resolve, reject) {
                const del = 0.01;
                const id = setInterval(changeOpacity, 10);

                function changeOpacity() {
                    images[cur].style.opacity -= del;
                    if (images[cur].style.opacity <= 0) {
                        clearInterval(id);
                        resolve();
                    }
                }
            });
        }
    }

    "use strict";

}) ();
