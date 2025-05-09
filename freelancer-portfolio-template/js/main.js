let newPerArr=JSON.parse(localStorage.getItem("currentPerson"));

/*         ABOUT ME                   */
document.getElementById('fullName').textContent = newPerArr[0].fullName
document.getElementById('degreeInput').textContent = newPerArr[0].degree
document.getElementById('PhoneInput').textContent = newPerArr[0].phone;
document.getElementById('AddressInput').textContent = newPerArr[0].address;
document.getElementById('birthdayInput').textContent = newPerArr[0].birthDay;
document.getElementById('ExperienceInput').textContent = newPerArr[0].experience;
document.getElementById('EmailInput').textContent = newPerArr[0].email;
document.getElementById('FreelanceInput').textContent = newPerArr[0].freelance;

/*         My SKILLS on BAR                  */
document.getElementById('htmlDivProgressBar').textContent = newPerArr[0].htmlOptVal+"%";
document.getElementById('cssDivProgressBar').textContent = newPerArr[0].cssOptVal+"%";
document.getElementById('phpDivProgressBar').textContent = newPerArr[0].phpOptVal+"%";
document.getElementById('javascriptDivProgressBar').textContent = newPerArr[0].javascriptOptVal+"%";
document.getElementById('angularDivProgressBar').textContent = newPerArr[0].angularJsOptVal+"%";
document.getElementById('wordpressDivProgressBar').textContent = newPerArr[0].wordpressOptVal+"%";

/*         My SKILLs progrees Value                   */
document.getElementById('htmlDivProgressBar').ariaValueNow =newPerArr[0].htmlOptVal;
document.getElementById('cssDivProgressBar').ariaValueNow = newPerArr[0].cssOptVal;
document.getElementById('phpDivProgressBar').ariaValueNow = newPerArr[0].phpOptVal;
document.getElementById('javascriptDivProgressBar').ariaValueNow = newPerArr[0].javascriptOptVal;
document.getElementById('angularDivProgressBar').ariaValueNow = newPerArr[0].angularJsOptVal;
document.getElementById('wordpressDivProgressBar').ariaValueNow = newPerArr[0].wordpressOptVal;

/*             My SKILLs BAR  Header  Value            */
document.getElementById('htmlHeaderProgressBar').textContent =newPerArr[0].htmlOptVal+"%";
document.getElementById('cssHeaderProgressBar').textContent = newPerArr[0].cssOptVal+"%";
document.getElementById('phpHeaderProgressBar').textContent = newPerArr[0].phpOptVal+"%";
document.getElementById('javascriptHeaderProgressBar').textContent = newPerArr[0].javascriptOptVal+"%";
document.getElementById('angularJsHeaderProgressBar').textContent = newPerArr[0].angularJsOptVal+"%";
document.getElementById('wordpressHeaderProgressBar').textContent = newPerArr[0].wordpressOptVal+"%";


document.getElementById('myEducationP').textContent =newPerArr[0].myEducationText;
document.getElementById('myExpericenceP').textContent = newPerArr[0].myExpericenceText;

certificateDivFunc();

function certificateDivFunc(){

    let certificatesArr=[];
    let myStr=""
    if (newPerArr[0].appsDesignerOpt){
        myStr+="Apps Designer"+`, `;
    }
    if (newPerArr[0].appsDeveloperOpt){
        myStr+="Apps Developer"+`, `;
    }
    if (newPerArr[0].frontndDeveloperOpt){
        myStr+="Front End Developer"+`, `;
    }
    if (newPerArr[0].webDesignerOpt){
        myStr+="Web Designer"+`, `;
    }
    if (newPerArr[0].webDeveloperOpt){
        myStr+="Web Developer"+`, `;
    }
    document.getElementById('certificateDiv').textContent =myStr;
}




/*



document.getElementById('FreelanceInput').textContent = localStorage.getItem('freelance');

const degree = document.getElementById('degreeInput').value;
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

if (newPerArr[0].apiWeather==1){
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

}

else{
    console.log( document.getElementById(`weatherAPIDiv`));
    document.getElementById(`weatherAPIDiv`).innerText="";
    document.getElementById(`weatherAPIHeader`).innerText="";
 }

// --- שער חליפין USD ל-ILS ---
const apiKey = 'fca_live_HPkMf2Y6dre2RSsryEk8B6mYShc5OQpybaABj6sn'; // שימי כאן את מפתח ה-API שלך
const currencyUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD&currencies=ILS`;

if (newPerArr[0].apiFcurrency==1){
fetch(currencyUrl)
    .then(res => res.json())
    .then(data => {
        const rate = data.data.ILS;
        document.getElementById('exchange').innerHTML = `
                    <h3>💱 שער דולר לשקל</h3>
                    <p>1 USD = ${rate.toFixed(2)} ILS</p> `;
    }).catch(err => console.error('שגיאה בשערי המטבע:', err));

} 

else{
    console.log( document.getElementById(`weatherAPIDiv`));
    document.getElementById(`exchangeAPIDiv`).innerText="";
    document.getElementById(`exchangeAPIHeader`).innerText="";
 }





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

//  =============================


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

