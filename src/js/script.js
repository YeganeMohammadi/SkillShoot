
//=============== navbar openning and closing in small sizes ===========
const openNav = document.getElementsByClassName('nav-icon')[0];
const nav = document.getElementsByClassName('nav')[0];
let isNavOpen = false;

openNav.addEventListener('click', function () {
  if (!isNavOpen) {
    nav.classList.remove("hidden")
    nav.classList.add("flex")
    isNavOpen = true
  } else {
    nav.classList.add("hidden")
    nav.classList.add("lg:flex")
    isNavOpen = false
  }

})
//=====================================================



// ================scroll bars============================

function scrollBar(scrollBox , scrollCards , scrollLeftArrow , scrollRightArrow , scrollAmount){
  
  scrollLeftArrow.addEventListener('click',function(){
    scrollBox.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  })
  scrollRightArrow.addEventListener('click',function(){
    scrollBox.scrollBy({ left: scrollAmount , behavior: "smooth" });
  })
  
  let scrollBoxRsct = scrollBox.getBoundingClientRect();
  let scrollBoxCenter = scrollBoxRsct.left + scrollBoxRsct.width / 2;
  let centralCard = null
  let minDistance = Infinity

  scrollCards.forEach((card)=>{
    let cardRect = card.getBoundingClientRect();
    let cardCenter = cardRect.left + cardRect.width / 2;
    let distance = Math.abs(cardCenter - scrollBoxCenter)
    if(distance < minDistance){
      minDistance = distance
      centralCard = card
    }
  })
  return centralCard;
}



// =======================================================



//=================popular courses scroll-box========

const scrollLeft = document.getElementById('scroll-left-arrow')
const scrollRight = document.getElementById('scroll-right-arrow')
const scrollBox = document.getElementById('courses-scroll-box')
const scrollCards = document.querySelectorAll(".course-card")



function updateCardFocus() {

  if(window.innerWidth > 600){
    scrollCards.forEach((card)=>{
      card.classList.remove("blur-card")
      card.classList.add('active-card')
    })
    return;
  }

  let centralCard = scrollBar(scrollBox,scrollCards,scrollLeft,scrollRight,320 );

  scrollCards.forEach((card) => {
    if (card === centralCard) {
      card.classList.remove('blur-card')
      card.classList.add('active-card')
    }
    else {
      card.classList.add('blur-card')
      card.classList.remove('active-card')
    }
  })

}
scrollBox.addEventListener('scroll', function () {
  if(window.innerWidth < 600){
    window.requestAnimationFrame(updateCardFocus)
  }
  
})

window.addEventListener('resize',updateCardFocus)

updateCardFocus();

// ========================================================



// ================testemoni scroll-box=====================

const testemoniRightArrow = document.getElementById('testemoni-right-arrow')
const testemoniLeftArrow = document.getElementById('testemoni-left-arrow')
const testemoniScrollBox = document.getElementById('testemoni-scroll-box')
const testemoniCards = document.querySelectorAll('.testemoni-card')


function updateCentralCard(){

  let closestCardToCenter = scrollBar(testemoniScrollBox,testemoniCards,testemoniLeftArrow,testemoniRightArrow,380)
  testemoniCards.forEach((card)=>{
    if(card === closestCardToCenter){
      card.classList.add('testemoni-active')
    }else{
      if(card.classList.contains('testemoni-active')){
        card.classList.remove('testemoni-active')
      }
    }
  })

}

testemoniScrollBox.addEventListener('scroll', function(){
  window.requestAnimationFrame(updateCentralCard)
})

updateCentralCard();



// =====================