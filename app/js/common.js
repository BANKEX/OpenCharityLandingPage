$('.arrow-phone').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.organization-form').toggleClass('open');
});

var $isAnimated1 = $('.section-interview .is-animated'),
    $isAnimated1Single = $('.section-interview .is-animated__single'),
    $isAnimated2 = $('.section-confidence .is-animated'),
    $isAnimated2Single = $('.section-confidence .is-animated__single'),
    $isAnimated3 = $('.section-open-charity .is-animated'),
    $isAnimated3Single = $('.section-open-charity .is-animated__single'),
    $isAnimated4 = $('.section-industry .is-animated'),
    $isAnimated4Single = $('.section-industry .is-animated__single'),
    $isAnimated5 = $('.under-control .is-animated'),
    $isAnimated5Single = $('.under-control .is-animated__single'),
    $isAnimated6 = $('.section-technologies .is-animated'),
    $isAnimated6Single = $('.section-technologies .is-animated__single'),
    $isAnimated7 = $('.organization .is-animated'),
    $isAnimated7Single = $('.organization .is-animated__single');



$(document).ready(function () {
    $('.section-baner-wrap').addClass('load');
    $('#fullpage').fullpage({
        //Navigation
        // menu: '#menu',
        lockAnchors: false,
        // anchors: ['firstPage', 'secondPage'],
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 800,
        // autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        // loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 35,
        normalScrollElementTouchThreshold: 6,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['transparent', '#fff'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '.section-baner-wrap',
        responsiveWidth: 767,
        responsiveHeight: 660,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        // navigation: true,


        lazyLoading: true,
        //events
        onLeave: function (index, nextIndex, direction) {

            if (index == 1) {
                $isAnimated1.addClass('animated bounceInUp').css('animation-delay', '1s');
                $isAnimated1.eq(1).css('animation-delay', '0.5s');
                $isAnimated1.eq(2).css('animation-delay', '0.5s');

                $isAnimated1Single.addClass('animated bounceInDown').css('animation-delay', '1.3s');
                $isAnimated1Single.eq(1).css('animation-delay', '1.5s');
                $isAnimated1Single.eq(2).css('animation-delay', '1s');
            }
            if (index == 2) {
                $isAnimated2Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated2Single.eq(1).css('animation-delay', '2s');
                $isAnimated2Single.eq(2).css('animation-delay', '2.5s');
                $isAnimated2Single.eq(3).css('animation-delay', '3s');
                $isAnimated2Single.eq(4).css('animation-delay', '3.5s');

                $isAnimated3.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated3.eq(1).css('animation-delay', '1s');
                $isAnimated3.eq(2).css('animation-delay', '1s');
                $isAnimated3.eq(3).css('animation-delay', '1.5s');
                $isAnimated3.eq(4).css('animation-delay', '2s');
            }
            if (index == 3) {
                $isAnimated3Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated3Single.eq(1).css('animation-delay', '2s');
                $isAnimated3Single.eq(2).css('animation-delay', '2.5s');
                $isAnimated3Single.eq(3).css('animation-delay', '3s');
                $isAnimated3Single.eq(4).css('animation-delay', '3.5s');
            }
            if (index == 4) {
                console.log(index);
                $isAnimated4Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated4Single.eq(1).css('animation-delay', '2s');
                $isAnimated4Single.eq(2).css('animation-delay', '3s');
                $isAnimated4Single.eq(3).css('animation-delay', '5s');
                $isAnimated4Single.eq(4).css('animation-delay', '6s');


            }
            if (index == 5) {
                // console.log(index);
                $isAnimated5Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated5Single.eq(1).css('animation-delay', '2s');
                $isAnimated5Single.eq(2).css('animation-delay', '3s');
                $isAnimated5Single.eq(3).css('animation-delay', '5s');
                $isAnimated5Single.eq(4).css('animation-delay', '6s');

            }
            if (index == 6) {
                // console.log(index);
                $isAnimated6Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated6Single.eq(1).css('animation-delay', '2s');
                $isAnimated6Single.eq(2).css('animation-delay', '2.5s');
                $isAnimated6Single.eq(3).css('animation-delay', '3s');
                $isAnimated6Single.eq(4).css('animation-delay', '3.5s');
                $isAnimated6Single.eq(5).css('animation-delay', '4s');
            }
            if (index == 7) {
                console.log(index);
                $isAnimated7Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                $isAnimated7Single.eq(1).css('animation-delay', '2s');
                $isAnimated7Single.eq(2).css('animation-delay', '3s');
                $isAnimated7Single.eq(3).css('animation-delay', '5s');
                $isAnimated7Single.eq(4).css('animation-delay', '6s');

            }

        },
        afterLoad: function (anchorLink, index) {
        },
        afterRender: function () {
        },
        afterResize: function () {
        },
        afterResponsive: function (isResponsive) {
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        }
    });
    });


// animation start
// AOS.init({
//
// });

var $animation_elements = $('.trust-item');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// animation
var SEPARATION = 100,
    AMOUNTX = 100,
    AMOUNTY = 70;
var container;
var sectionIndustry;
var camera, scene, renderer;

var particles, particle, count = 0;

var mouseX = 85,
    mouseY = -342;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight * 2;
console.log(windowHalfY);
init();
animate();

function init() {

    container = document.createElement('span');
    sectionIndustry = document.getElementsByClassName("section-industry");
    document.body.appendChild(container);
    $(container).appendTo('.section-industry .container');
    camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene = new THREE.Scene();
    particles = new Array();
    var PI2 = Math.PI * 2;
    var material = new THREE.ParticleCanvasMaterial({
        color: 0xe1e1e1,
        program: function (context) {

            context.beginPath();
            context.arc(0, 0, .6, 0, PI2, true);
            context.fill();

        }

    });
    var i = 0;
    for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

            particle = particles[i++] = new THREE.Particle(material);
            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            scene.add(particle);
        }
    }
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 2);
    container.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight * 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function onDocumentMouseMove(event) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart(event) {

    if (event.touches.length === 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;

    }

}

function onDocumentTouchMove(event) {

    if (event.touches.length === 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;

    }

}

//

function animate() {

    requestAnimationFrame(animate);

    render();


}

function render() {

    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;
    camera.lookAt(scene.position);

    var i = 0;

    for (var ix = 0; ix < AMOUNTX; ix++) {

        for (var iy = 0; iy < AMOUNTY; iy++) {

            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;

        }

    }

    renderer.render(scene, camera);

    count += 0.1;

}

// animation end