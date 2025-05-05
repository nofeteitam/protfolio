
document.getElementById('fullName').textContent = localStorage.getItem('fullName');
document.getElementById('degreeInput').textContent = localStorage.getItem('degree');
document.getElementById('PhoneInput').textContent = localStorage.getItem('phone');
document.getElementById('AddressInput').textContent = localStorage.getItem('address');
document.getElementById('birthdayInput').textContent = localStorage.getItem('birthDay');
document.getElementById('ExperienceInput').textContent = localStorage.getItem('experience');
document.getElementById('EmailInput').textContent = localStorage.getItem('email');
document.getElementById('FreelanceInput').textContent = localStorage.getItem('freelance');

/*
const bio = document.getElementById('bio').value;
const degree = document.getElementById('DegreeInput').value;
const phone = document.getElementById('PhoneInput').value;
const address = document.getElementById('AddressInput').value;
const birthDay = document.getElementById('BirthdayInput').value;
const experience = document.getElementById('ExperienceInput').value;
const email = document.getElementById('EmailInput').value;
const freelance = document.getElementById('FreelanceInput').value;
*/

const lat = 32.0853;
const lon = 34.7818;
const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;

fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
        const temp = data.current.temperature_2m;
        const wind = data.current.wind_speed_10m;
        document.getElementById('weather').innerHTML = `
  <h3>מזג האוויר בתל אביב</h3>
  <p>🌡️ טמפרטורה: ${temp}°C</p>
  <p>💨 רוח: ${wind} קמ"ש</p>
`;
    })
    .catch(err => console.error('שגיאה במזג האוויר:', err));

// --- שער חליפין USD ל-ILS ---
const apiKey = 'fca_live_HPkMf2Y6dre2RSsryEk8B6mYShc5OQpybaABj6sn'; // שימי כאן את מפתח ה-API שלך
const currencyUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD&currencies=ILS`;

fetch(currencyUrl)
    .then(res => res.json())
    .then(data => {
        const rate = data.data.ILS;
        document.getElementById('exchange').innerHTML = `
  <h3>💱 שער דולר לשקל</h3>
  <p>1 USD = ${rate.toFixed(2)} ILS</p>
`;
    })
    .catch(err => console.error('שגיאה בשערי המטבע:', err));

(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

