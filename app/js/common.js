//togle form on mobile
$('.arrow-phone').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.organization-form').toggleClass('open');
});

var $animation_elements = $('.trust-item');
var $window = $(window);
var windowWidth = $(window).width();
// animation animate.css on pages
var $isAnimated1 = $('.section-interview .is-animated'),
    $isAnimated1Single = $('.section-interview .is-animated__single'),
    $isAnimated2 = $('.section-confidence .is-animated'),
    $isAnimated2Single = $('.section-confidence .is-animated__single'),
    $isAnimated3 = $('.section-open-charity .is-animated'),
    $isAnimated3Single = $('.section-open-charity .is-animated__single'),
    $isAnimated4 = $('.section-industry .is-animated'),
    $isAnimated4Single = $('.section-industry .is-animated__single'),
    $isAnimated5 = $('.under-control .is-animated'),
    $isAnimatedBg5 = $('.under-control .is-animated-bg'),
    $isAnimated5Single = $('.under-control .is-animated__single'),
    $isAnimated6 = $('.section-technologies .is-animated'),
    $isAnimated6Single = $('.section-technologies .is-animated__single');

// disabled animation windowWidth < 767px
$(window).resize(function () {
    windowWidth = $(window).width();
    if (windowWidth < 767) {
        $(window).on('scroll', function () {
            var interview = $('.section-interview').offset().top;
            var windowTop = $(window).scrollTop();
            if (windowTop + 100 > interview) {
                $('body').addClass('show-interview');
            } else {
                $('body').removeClass('show-interview');
            }
        });
    }
});

// full page init
$(document).ready(function () {
    $('.section-baner-wrap').addClass('load');
    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 1000,
        navigation: false,
        slidesNavigation: false,
        dragAndMove: true,
        controlArrows: false,
        fixedElements: '.section-baner-wrap',
        responsiveWidth: 767,
        responsiveHeight: 660,
        sectionSelector: '.section',
        verticalCentered: true,
        onLeave: function (index, nextIndex, direction) {
            if (windowWidth > 768) {
                if (index == 1) {
                    $isAnimated1.addClass('animated bounceInUp').css('animation-delay', '0.5s');
                    $isAnimated1.eq(1).css('animation-delay', '0.5s');
                    $isAnimated1.eq(2).css('animation-delay', '1.5s');

                    $isAnimated1Single.addClass('animated bounceInDown').css('animation-delay', '1.3s');
                    $isAnimated1Single.eq(1).css('animation-delay', '1.5s');
                    $isAnimated1Single.eq(2).css('animation-delay', '1s');
                }
                if (index == 2 && nextIndex == 3) {
                    $isAnimated2Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated2Single.eq(1).css("animation-delay" , "1.5s" ).addClass('fadeInLeft ');
                    $isAnimated2Single.eq(2).css('animation-delay', '2s').addClass('fadeInRight ');
                    $isAnimated2Single.eq(3).css('animation-delay', '2.5s').addClass('fadeInLeft ');
                    $isAnimated2Single.eq(4).css('animation-delay', '3s').addClass('fadeInRight ');

                    $isAnimated3.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated3.eq(1).css('animation-delay', '1s');
                    $isAnimated3.eq(2).css('animation-delay', '1s');
                    $isAnimated3.eq(3).css('animation-delay', '1.5s');
                    $isAnimated3.eq(4).css('animation-delay', '2s');
                }
                if (index == 3 && nextIndex == 4) {
                    $isAnimated3Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated3Single.eq(1).css('animation-delay', '1.5s').addClass('fadeInLeft ');
                    $isAnimated3Single.eq(2).css('animation-delay', '2s').addClass('fadeInRight ');
                    $isAnimated3Single.eq(3).css('animation-delay', '2.5s').addClass('fadeInLeft ');
                    $isAnimated3Single.eq(4).css('animation-delay', '3s').addClass('fadeInRight ');
                }
                if (index == 4 && nextIndex == 5) {
                    $isAnimated4Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated4Single.eq(1).css('animation-delay', '2s');
                    $isAnimated4Single.eq(2).css('animation-delay', '2.5s');
                    setTimeout(function () {
                        $('.section-industry .img-wrap img').addClass('animated');
                    }, 1600)
                }
                if (index == 5 && nextIndex == 6) {
                    $isAnimatedBg5.addClass('animated bounceInUp').css('animation-delay', '1s');
                    // animate checkbox
                    setTimeout(function () {
                        $isAnimated5.each(function(i){
                            var elem = $(this);
                            setTimeout(function() {
                                elem.toggleClass('flip');
                            }, 700*i);
                        });
                    }, 2000);

                    $isAnimated5Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated5Single.eq(1).css('animation-delay', '1.5s');
                    $isAnimated5Single.eq(2).css('animation-delay', '2s');
                    $isAnimated5Single.eq(3).css('animation-delay', '2.5s');
                    $isAnimated5Single.eq(4).css('animation-delay', '3s');
                    $isAnimated5Single.eq(5).css('animation-delay', '3.5s');
                    $isAnimated5Single.eq(6).css('animation-delay', '4s');
                }
                if (index == 6 && nextIndex == 7) {
                    $isAnimated6Single.addClass('animated bounceInDown').css('animation-delay', '1s');
                    $isAnimated6Single.eq(1).css('animation-delay', '1.5s').addClass('fadeInLeft ');
                    $isAnimated6Single.eq(2).css('animation-delay', '2.1s').addClass('fadeInDownBig ');
                    $isAnimated6Single.eq(3).css('animation-delay', '3s').addClass('fadeInRight ');
                    $isAnimated6Single.eq(4).css('animation-delay', '3.5s').addClass('fadeInLeft ');
                    $isAnimated6Single.eq(5).css('animation-delay', '4s').addClass('fadeInRight ');
                }
            }
        }
    });
});

// random inimation start
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
var SEPARATION = 120,
    AMOUNTX = 100,
    AMOUNTY = 70,
    sectionIndustry;
var container;
var camera, scene, renderer;
var particles, particle, count = 0;
var mouseX = 85,
    mouseY = -342;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();
function init() {
    container = document.createElement('span');
    sectionIndustry = document.getElementsByClassName("section-industry");
    document.body.appendChild(container);
    $(container).appendTo('.section-industry');
    camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 500;
    scene = new THREE.Scene();
    particles = new Array();
    var PI2 = Math.PI * 2;
    var material = new THREE.ParticleCanvasMaterial({
        color: 0xffffff,
        program: function (context) {
            context.beginPath();
            context.arc(0, 0, 1, 0, PI2, true);
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
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}
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
// random inimation end