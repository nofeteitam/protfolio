
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let AllPerArr = JSON.parse(localStorage.getItem("currentPerson"));

for (let i in AllPerArr) {
    if (AllPerArr[i].personID == currentUser.userId) {
        newPerArr = AllPerArr[i];
        break;

    }
}

/*         ABOUT ME                   */
document.getElementById('protName').textContent = newPerArr.fullName
document.getElementById('fullName').textContent = newPerArr.fullName
document.getElementById('profPic').src = newPerArr.profilePicture;
//document.getElementById('CV').href = newPerArr.CV;

document.getElementById('anotherPic').src = newPerArr.anotherPicture;
document.getElementById('Name').textContent = newPerArr.fullName;
document.getElementById('degreeInput').textContent = newPerArr.degree
document.getElementById('PhoneInput').textContent = newPerArr.phone;
document.getElementById('AddressInput').textContent = newPerArr.address;
document.getElementById('birthdayInput').textContent = newPerArr.birthDay;
document.getElementById('ExperienceInput').textContent = newPerArr.experience;
document.getElementById('EmailInput').textContent = newPerArr.email;
document.getElementById('FreelanceInput').textContent = newPerArr.freelance;

/*         My SKILLS on BAR                  */
document.getElementById('htmlDivProgressBar').textContent = newPerArr.htmlOptVal + "%";
document.getElementById('cssDivProgressBar').textContent = newPerArr.cssOptVal + "%";
document.getElementById('phpDivProgressBar').textContent = newPerArr.phpOptVal + "%";
document.getElementById('javascriptDivProgressBar').textContent = newPerArr.javascriptOptVal + "%";
document.getElementById('angularDivProgressBar').textContent = newPerArr.angularJsOptVal + "%";
document.getElementById('wordpressDivProgressBar').textContent = newPerArr.wordpressOptVal + "%";

/*         My SKILLs progrees Value                   */
document.getElementById('htmlDivProgressBar').ariaValueNow = newPerArr.htmlOptVal;
document.getElementById('cssDivProgressBar').ariaValueNow = newPerArr.cssOptVal;
document.getElementById('phpDivProgressBar').ariaValueNow = newPerArr.phpOptVal;
document.getElementById('javascriptDivProgressBar').ariaValueNow = newPerArr.javascriptOptVal;
document.getElementById('angularDivProgressBar').ariaValueNow = newPerArr.angularJsOptVal;
document.getElementById('wordpressDivProgressBar').ariaValueNow = newPerArr.wordpressOptVal;

/*             My SKILLs BAR  Header  Value            */
document.getElementById('htmlHeaderProgressBar').textContent = newPerArr.htmlOptVal + "%";
document.getElementById('cssHeaderProgressBar').textContent = newPerArr.cssOptVal + "%";
document.getElementById('phpHeaderProgressBar').textContent = newPerArr.phpOptVal + "%";
document.getElementById('javascriptHeaderProgressBar').textContent = newPerArr.javascriptOptVal + "%";
document.getElementById('angularJsHeaderProgressBar').textContent = newPerArr.angularJsOptVal + "%";
document.getElementById('wordpressHeaderProgressBar').textContent = newPerArr.wordpressOptVal + "%";


document.getElementById('myEducationP').textContent = newPerArr.myEducationText;
document.getElementById('myExpericenceP').textContent = newPerArr.myExpericenceText;

document.getElementById('maiLink').textContent = newPerArr.email;
document.getElementById('teLink').textContent = newPerArr.phone;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("projectsContainer");

    if (newPerArr.projects && Array.isArray(newPerArr.projects)) {
        newPerArr.projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "col-lg-4 col-md-6 text-center mb-5";
            card.innerHTML = `
                <div class="d-flex align-items-center justify-content-center mb-4">
                    <i class="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                    <h4 class="font-weight-bold m-0">${project.name}</h4>
                </div>
                <p>${project.description}</p>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    ${project.languages.map(lang => `
                        <span class="badge rounded-pill bg-primary text-white px-3 py-2 mx-1 my-1">${lang}</span>
                    `).join("")}
                </div>
            `;
            container.appendChild(card);
        });
    }
});

certificateDivFunc();




function certificateDivFunc() {

    let certificatesArr = [];
    let myStr = ""
    if (newPerArr.appsDesignerOpt) {
        myStr += "Apps Designer" + `, `;
    }
    if (newPerArr.appsDeveloperOpt) {
        myStr += "Apps Developer" + `, `;
    }
    if (newPerArr.frontndDeveloperOpt) {
        myStr += "Front End Developer" + `, `;
    }
    if (newPerArr.webDesignerOpt) {
        myStr += "Web Designer" + `, `;
    }
    if (newPerArr.webDeveloperOpt) {
        myStr += "Web Developer" + `, `;
    }
    document.getElementById('certificateDiv').textContent = myStr;
}


document.addEventListener("DOMContentLoaded", function () {
    const person = newPerArr;
    const openCvBtn = document.getElementById("openCvBtn");
    const cvIframe = document.getElementById("cvIframe");

    if (person && person.CV) {
        console.log(newPerArr);
        console.log(person);
        openCvBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (person.CV.startsWith("http") || person.CV.startsWith("data:application/pdf")) {
                cvIframe.src = person.CV;
                const myModal = new bootstrap.Modal(document.getElementById('cvModal'));
                myModal.show();
            } else {
                alert("CV is not in a supported format.");
            }
        });
    } else {
        openCvBtn.style.display = "none";
    }
});

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

if (newPerArr.apiWeather == 1) {
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

else {
    console.log(document.getElementById(`weatherAPIDiv`));
    document.getElementById(`weatherAPIDiv`).innerText = "";
    document.getElementById(`weatherAPIHeader`).innerText = "";
}

// --- שער חליפין USD ל-ILS ---
const apiKey = 'fca_live_HPkMf2Y6dre2RSsryEk8B6mYShc5OQpybaABj6sn'; // שימי כאן את מפתח ה-API שלך
const currencyUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=USD&currencies=ILS`;

if (newPerArr.apiFcurrency == 1) {
    fetch(currencyUrl)
        .then(res => res.json())
        .then(data => {
            const rate = data.data.ILS;
            document.getElementById('exchange').innerHTML = `
                    <h3>💱 שער דולר לשקל</h3>
                    <p>1 USD = ${rate.toFixed(2)} ILS</p> `;
        }).catch(err => console.error('שגיאה בשערי המטבע:', err));

}

else {
    console.log(document.getElementById(`weatherAPIDiv`));
    document.getElementById(`exchangeAPIDiv`).innerText = "";
    document.getElementById(`exchangeAPIHeader`).innerText = "";
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


    /* Modal Video
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
    }); */


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
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
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

