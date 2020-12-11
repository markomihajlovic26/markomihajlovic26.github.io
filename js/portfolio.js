var portfolioContainer = document.getElementById('portfolioContainer');
var modalSlot = document.getElementById('modalSlot');


var portfolioData = [
    ['Rodjendanska Torta','slika6.jpg', 'Vi slavite rođendan ili želite da obradujete nekoga za taj dan! Mi pravimo rodjendanske torte po Vašoj meri i želji. Bez obzira koliko godina slavite, budite dete bar na jedan dan u godini i obradujte sebe i svoje voljene rođake, prijatelje ili kolege uz najlepše rođendanske torte pravljene od strane vrhunskih majstora i dekorisane na najoriginalniji način.', 'portfolioModal1','Rodjendanska torta'],
    ['Mančmelou Torta','slika7.jpg', 'Naziv Mančmelou u bukvalnom prevodu znači nešto što se pojede za tren oka, što i ne čudi s obzirom na savršen spoj hrskavog, laganog testa ispunjenog najfinijom kremom i preliveno glazurom od belgijske čokolade.', 'portfolioModal2','Mančmelou Torta'],
    ['Paris','slika5.jpg', 'Francuska poslastica koja munjevito osvaja sve simpatije, možda je tako najlakše opisati slatke raznobojne zalogajčiće koji svojim veselim bojama i ukusom ne ostavljaju ravnodušnim ni najzahtevnije ljubitelje slatkiša.', 'portfolioModal3','Francuska torta'],
    ['Kolač','slika1.png', 'Brzi letnji lagani kolač. Vazdušasti, prozračni biskvit od kokosa i malina uronjen u laganu kremu od grčkog jogurta sa mirisom vanile.   ', 'portfolioModal4','Kolač sa kokosom'],
    ['Voćna Torta','slika2.jpg', 'Omiljena dečija kremasta torta koju vole i odrasli,sastoji se od puno voća premazanim šlagom kojeg pokrivaju 2 krema od bele i mlečne čokolade, između kojih je Plazma keks', 'portfolioModal5','Voćna Torta'],
    ['Bombonica','slika4.jpg', 'Bombonice su svakako slatkši koji na velika vrata ulaze i osvajaju naše stomake.U ovom slučaju mi vam nudimo kombinaciju bombonica ukus belgijske čokolade sa najfinijim punjenjem čineći tako savršeni zalogajčić. ', 'portfolioModal6','Torta sa Bombonicama']



]

for (var i = 0; i < portfolioData.length; i++){
    portfolioContainer.innerHTML += `
    <div class="col-md-6 col-lg-4 mb-5">
<div class="portfolio-item mx-auto" data-toggle="modal" data-target="#`+portfolioData[i][3]+` ">
    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
    </div>
    <img class="img-fluid" src="./assets/img/portfolio/`+ portfolioData[i][1] +`" alt="`+portfolioData[i][4]+` " />
</div>
</div>
    
    `
}

for (var i = 0; i < portfolioData.length; i++){
    modalSlot.innerHTML += `

    <div class="portfolio-modal modal fade" id="`+ portfolioData[i][3]+`" tabindex="-1" role="dialog" aria-labelledby="`+ portfolioData[i][3]+`Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <!-- Portfolio Modal - Title-->
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="`+portfolioData[i][3]+`Label">`+ portfolioData[i][0]+`</h2>
                            <!-- Icon Divider-->
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            <!-- Portfolio Modal - Image-->
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/`+ portfolioData[i][1]+`" alt="" />
                            <!-- Portfolio Modal - Text-->
                            <p class="mb-5">
                                `+ portfolioData[i][2]+`
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Close Window
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    `
}
// Provera forme


document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();


    var vrednostiForme = []
    var radi = true;
    var Ime = $('#ime');
    var email = $('#email');
    var broj = $('#broj');
    var poruka = $('#poruka');
    var vrIme = Ime.val();
    var vrEmail = email.val();
    var vrBroj = broj.val();
    var vrPoruka = poruka.val();

    
    var RegExpIme = /^[A-ZČĆĐŠŽ][a-zčćđšž]{2,29}$/;
    var RegExpEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var RegExpPoruka =/^[A-ZČĆĐŠŽ][A-ZČĆĐŠŽa-zšđžčć0-9,\.!?\/\n\s]+$/; 
    var RegExpBroj=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
      
   
    if(proveriMe(vrIme, RegExpIme))
    {
    oduzmi(Ime);
    }
    else{
         dodaj(Ime); radi = false;
        }
    //provera za mejl
    if(proveriMe(vrEmail, RegExpEmail))
    {

    oduzmi(email);
    }
    else{
         dodaj(email); radi = false;
        }
    //provera za broj

    if(proveriMe(vrBroj, RegExpBroj))
    {

    oduzmi(broj);
    }
    else{ 

        dodaj(broj); radi = false;
    }
    //provera za poruku

    if(proveriMe(vrPoruka, RegExpPoruka))
    {

    oduzmi(poruka);
    }
    else{
         dodaj(poruka); radi = false;
        }

    function proveriMe(vrednost, regEx)
    {
     return regEx.test(vrednost);
    }
    function dodaj(element){ element.next().addClass('d-block')}
    function oduzmi(element){ element.next().removeClass('d-block');}

    if(radi){
        console.log('Forma predata')
        document.getElementById('contactForm').submit();
    }else{
        console.log(radi)
    }

    });



    //Dinamicko ispisivanje mreza


    var mreze = document.getElementById('mreze')

    var mrezeData =[
    [ '#','fab fa-fw fa-facebook'],
    [ '#','fab fa-fw fa-twitter'],
    [ '#','fab fa-fw fa-linkedin-in'],
    ['#','fab fa-fw fa-dribbble']
    ]

    for(var i=0;i<mrezeData.length;i++){
        mreze.innerHTML +=`<a class="btn btn-outline-light btn-social mx-1" href="`+mrezeData[i][0]+`"><i class="`+mrezeData[i][1]+`"></i></a>`

    }

