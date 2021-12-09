$(document).ready(function(){

    menu()
    footer()



    let url=location.href;
    if(url.indexOf("index.html")!=-1){
        slider()
        $("#nextChevron").click(nextSlide)
        $("#prevChevron").click(previousSlide)
        services()
        gallery()
        questions()
    }
    if(url.indexOf("rooms.html")!=-1){
        rooms()
    }
    if(url.indexOf("contact.html")!=-1){
        $("#buttonMessage").click(message)
    }
    if(url.indexOf("about.html")!=-1 || url.indexOf("index.html")!=-1){
        document.getElementById("foodImages").addEventListener("mouseover",function(){
            document.getElementById("foodImages").classList.add("reverse")
        })
        document.getElementById("foodImages").addEventListener("mouseout",function(){
            document.getElementById("foodImages").classList.remove("reverse")
        })
    }
    

    $("#logo").hover(
        function(){
            $("#logo").css({
                transform: "rotate(+360deg)"
            },1500)
    },
    function(){
        $("#logo").css({
            transform: "rotate(-360deg)"
        },1500)

    })

})


$(window).scroll(function(){
    var pixels=$(document).scrollTop();
    var windowHeight=$(document).height()-$(window).height();
    var progress=pixels/windowHeight*100;

    if(window.pageYOffset>20){
        $("header").addClass("scroll")
        $("header #hamburger ul").addClass("scroll")
        $("#logo").addClass("logoSize")
    }
    else{
        $("header").removeClass("scroll")
        $("header #hamburger ul").removeClass("scroll")
        $("#logo").removeClass("logoSize")
    }

    
  $("#line").css("width", progress + "%");

})

var sliderImages=['slider1.webp','slider2.webp'];
var sliderAlt=['Hotel image 1','Hotel image 2'];
function slider(){

    var print=""

    for(let s in sliderImages){
        print+=`<img class="sliderImages img-fluid" src="assets/images/${sliderImages[s]}" alt="${sliderAlt[s]}"/>`
    }

    $("#sliderImages").html(print)
    $(".sliderImages").addClass("d-none")
    $(".sliderImages").first().removeClass("d-none")
}

function nextSlide(e){
    e.preventDefault()
    var current=this.dataset.id
    next=parseInt(current)+1
    prev=parseInt(current)-1
    if(current==sliderImages.length-1){
        $(".sliderImages").addClass("d-none")
        $(".sliderImages")[0].classList.remove("d-none")
        $("#nextChevron").attr("data-id",0)
        $("#prevChevron").attr("data-id",prev)
    }
    else{
        $(".sliderImages").addClass("d-none")
        $(".sliderImages").get(next).classList.remove("d-none")
        $("#nextChevron").attr("data-id",next)
        $("#prevChevron").attr("data-id",next)
    }


}


function previousSlide(e){
    e.preventDefault()
    var current=this.dataset.id
    next=parseInt(current)+1
    prev=parseInt(current)-1
    if(current==0){
        $(".sliderImages").addClass("d-none")
        $(".sliderImages")[sliderImages.length-1].classList.remove("d-none")
        $("#nextChevron").attr("data-id",next)
        $("#prevChevron").attr("data-id",sliderImages.length-1)
    }
    else{
        $(".sliderImages").addClass("d-none")
        $(".sliderImages")[prev].classList.remove("d-none")
        $("#nextChevron").attr("data-id",prev)
        $("#prevChevron").attr("data-id",prev)
    }
    
}

var linkText=['Home','Rooms','About','Contact','Author']
var linkHref=['index.html','rooms.html','about.html','contact.html','author.html']
function menu(){
    

    let print=''
    print+=`<div id="networks">
        <ul class="d-flex">
            <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        </ul>
    </div>
    <div id="logo">
    <a class="text-decoration-none" href="index.html"><img class="img-fluid" src="assets/images/logo.webp"/></a>
    </div>
    <div id="hamburger">
        <a href="#" id="hamburger" class="hamburger text-light"><i class="fas fa-bars fs-4 mx-2"></i></a>
        <ul class="hide nav">`
        for(let i=0;i<linkText.length;i++){
            print+=`<li><a href="${linkHref[i]}">${linkText[i]}</a></li>`
        }
    print+=`</ul>
    </div>`


        
    $('#top').html(print)

    var bar=$("#hamburger> a")
    bar.click(function(e){
        e.preventDefault()
        var sideNav=$("#hamburger ul")
        sideNav.toggle(
            function(){
            $(this).find("ul").slideDown()
            
        },
            function(){
            $(this).find("ul").slideUp()
            })
        })

}

function services(){
    var icons=['fas fa-hiking','fas fa-suitcase-rolling','fas fa-globe-europe','fas fa-plane'];
    var text=['Accommodations in Montana resort are specialised on hikers and offer guided tours, equipment rental, a snack and detailed proposals for tours as a standard feature.','Montana resort allow you to store luggage at the hotel  before check-in and after check-out free of charge.','Your choices for your next trip are endless with our different properties throughout the world and, even better, you get to collect double the mileage reward with our Frequent Flyer partners.','We offer you the possibility of free transportation from the airport to the hotel and back.']
    var heading=['Hiking ','Suitcase','World Round','Travel with Plane']
    let print=''
    for(let i=0;i<icons.length;i++){
        print+=`<div class="px-3 my-3 py-5 service">
            <i class="${icons[i]} fs-1"></i>
            <h3 class="mt-4">${heading[i]}</h3>
            <p class="mt-4">${text[i]}</p>
        </div>`
    }

    $("#services").html(print)
}


function gallery(){
    var images=['gallery1.jpg','gallery2.jpg','gallery3.jpg','gallery4.jpg','gallery5.jpg','gallery6.jpg','gallery7.jpg','gallery8.jpg']

    let print=''

    images.forEach(el=>{
        print+=`<li data-title="Gallery image" data-desc="Gallery image" data-responsive-src="assets/images/${el}" data-src="assets/images/${el}"> <a href="#"> <img class="img-fluid" alt="Gallery image" src="assets/images/${el}" /> </a> </li>`
    })

    $("#lightGallery").html(print)


    $("#lightGallery").lightGallery();
}

function questions(){
    var questions=['How many rooms can I book at once?','How do I pay for our accommodation?','Is it possible to check in earlier?','Do the rates include breakfast?']
    var answers=['You can book as many rooms as are available for selected period.','It depends on the room payment conditions. In most cases you will pay directly at the hotel after your arrival. ','It is sometimes possible to check in early however this is subject to availability. To ensure your room is ready upon arrival, we recommend you reserve the room one night in advance.','All rates include breakfast.']

    let print=''
    for(let i=0;i<questions.length;i++){
        print+=`<div class="oneQuestion">
        <a href="#" data-id="${i}" class="text-light showMore asnwerEvent text-decoration-none">
            <h3>${questions[i]}</h3>
            <p class="answer d-none">${answers[i]}</p>
            <i class="fas fa-chevron-down fs-3"></i>
            <i class="fas fa-chevron-up fs-3 d-none"></i>
            </a>
           
        </div>`
    }
    

    document.getElementById("listQuestions").innerHTML+=print

    $(".asnwerEvent").click(function(e){
        e.preventDefault()
        var id=this.dataset.id
        if($(this).hasClass("showMore")){
            document.getElementsByClassName("answer")[id].classList.remove("d-none")
            document.getElementsByClassName("fa-chevron-down")[id].classList.add("d-none")
            this.classList.remove("showMore")
            document.getElementsByClassName("fa-chevron-up")[id].classList.remove("d-none")
           
        }
        else{
            document.getElementsByClassName("answer")[id].classList.add("d-none")
            document.getElementsByClassName("fa-chevron-down")[id].classList.remove("d-none")
            document.getElementsByClassName("fa-chevron-up")[id].classList.add("d-none")
            this.classList.add("showMore")
        }
    })

}

function footer(){
    var footer=document.createElement("footer")
    footer.setAttribute("class","d-flex flex-wrap justify-content-between flex-wrap");
    $("body").append(footer)

    var footerAdress=document.createElement("div")
    var footerReservation=document.createElement("div")
    var footerNavigation=document.createElement("div")

    
    var footerDoc=document.createElement("div")

    footerAdress.setAttribute("class","footerDiv")
    footerReservation.setAttribute("class","footerDiv")
    footerNavigation.setAttribute("class","footerDiv")
    footerDoc.setAttribute("class","footerDoc")

    var headingAddress=document.createElement("h4")
    var headingReservation=document.createElement("h4")
    var headingNavigation=document.createElement("h4")
    var textAddress=document.createElement("p")
    var textReservation=document.createElement("p")
    var footerDocText=document.createElement("a")

    headingAddress.innerText="Address"
    headingReservation.innerText="Reservation"
    headingNavigation.innerText="Navigation"
    footerDocText.innerText="Documentation"

    footerDocText.setAttribute("href","documentation.pdf")

    textAddress.innerText="200, Green road, Crete, Greece"
    textReservation.innerText="+10 367 267 2678 \n reservation@montana.com"


    var ul=document.createElement("ul")
    for(let i=0;i<linkText.length;i++){
        var li=document.createElement("li");
        ul.append(li)
        var aElement=document.createElement("a")
        li.append(aElement)
        aElement.text=linkText[i]
        aElement.setAttribute("href",linkHref[i])
    }



    $("body").append(footer)

    footer.append(footerAdress)
    footer.append(footerReservation)
    footer.append(footerNavigation)
    footer.append(footerDoc)


    footerAdress.append(headingAddress)
    footerReservation.append(headingReservation)
    footerNavigation.append(headingNavigation)
    footerNavigation.append(ul)
    footerDoc.append(footerDocText)

    footerAdress.append(textAddress)
    footerReservation.append(textReservation)
    
}

function rooms(){
    var roomsImages=['room1.webp','room2.webp','room3.webp','room4.webp']
    var roomsTitle=['Superior Room','Deluxe Room','Signature Room','Couple Room']
    var roomPrice=[250,300,240,230]

    var print=''
    for(let i=0;i<roomsTitle.length;i++){
        print+=`<div class="room">
            <div class="image">
                <img class="img-fluid" src="assets/images/${roomsImages[i]}"/>
            </div>
            <div class="roomDesc">
                <p>From $${roomPrice[i]}/night</p>
                <h2>${roomsTitle[i]}</h2>
            </div>
        </div>`
    }

    $("#rooms").html(print)
}

function validator(inputValue,regExpr){
    var br=0
    if(!regExpr.test(inputValue.value)){
        br++
        inputValue.parentElement.nextElementSibling.classList.remove('d-none')
    }
    else{
        inputValue.parentElement.nextElementSibling.classList.add('d-none')
    }

    return br
}

function message(){
    var email=document.getElementById("email")
    var name=document.getElementById("name")
    var subject=document.getElementById("subject")
    var message=document.getElementById("message")
    var radio=$("input[name='answer']:checked")
    var chb=$("input[name='chb']:checked")


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var regSubject=/^[A-ZŽĐŠĆČ][a-zžđšćč]{2,}(\s[a-zžđšćč]{2,}){0,2}$/;
    var regName=/^[A-ZŽĐŠĆČ][a-zžđšćč]{2,}(\s[A-ZŽĐŠĆČ][a-zžđšćč]{2,}){1,2}$/;

    var err=0
    err+=validator(email,regEmail)
    err+=validator(subject,regSubject)
    err+=validator(name,regName)

    
    if(message.value.split(" ").length<5){
        message.parentElement.nextElementSibling.classList.remove('d-none')
        err++
    }
    else{
        message.parentElement.nextElementSibling.classList.add('d-none')
    }
    if(radio.val()==undefined){
        $("#radio").next().removeClass('d-none')
    }
    else{
        $("#radio").next().addClass('d-none')
    }
    if(chb.length==0){
        $("#checkbox").next().removeClass('d-none')
    }
    else{
        $("#checkbox").next().addClass('d-none')
    }

    var br=1
    if(err==0){
        var print=`Your message: ' ${message.value} ' was sent successfully!`
        this.parentElement.nextElementSibling.classList.remove('d-none')
        $("#messageText").html(`${name.value}, thank you for contacting us!`)
        print+=`<p>Hope to see you in `
        for(let c of chb){
            if(br==chb.length){
                print+=`${c.value}!`
            }
            else{
                print+=`${c.value}, `
            }
            br++
        }
        print+=`</p>`
        $("#messageInfo").removeClass("d-none")
        $("#messageInfo").html(print)

        
        $("input[type='text']").val("")
        $("textarea").val("")
        $("input[type=radio]").prop('checked', false);
        $("input[type=checkbox]").prop('checked', false);

    }
    else{
        $("#messageInfo").addClass("d-none")
        $("#messageText").addClass("d-none")
    }

}