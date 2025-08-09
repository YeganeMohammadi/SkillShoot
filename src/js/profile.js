//====================Profile page content switching =============

const courseBtn = document.getElementById('Pcourse-btn')
const reviewBtn = document.getElementById('Preview-btn')

const courseSection = document.getElementById('profile-course')
const reviewSection = document.getElementById('profile-review')

courseBtn.addEventListener('click',function(){

    if (courseSection.classList.contains('hidden')){
        courseSection.classList.remove('hidden')
        reviewSection.classList.add('hidden')
        courseBtn.classList.add('white-btn-actived')
        reviewBtn.classList.remove('white-btn-actived')
    }
      
})


reviewBtn.addEventListener('click',function(){
    
    if (reviewSection.classList.contains('hidden')){
        reviewSection.classList.remove('hidden')
        courseSection.classList.add('hidden')
        reviewBtn.classList.add('white-btn-actived')
        courseBtn.classList.remove('white-btn-actived')
    }
      
})