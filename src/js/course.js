//====================course page content switching=============

const aboutCourse = document.getElementById('about-course')
const learnedCourse = document.getElementById('learned-course')
const testemoniCourse = document.getElementById('course-testemoni')
const toolsCourse = document.getElementById('course-tools')
const aboutBtn = document.getElementById('course-menu-about')
const learnedBtn = document.getElementById('course-menu-learned')
const toolsBtn = document.getElementById('course-menu-tools')
const testemoniBtn = document.getElementById('course-menu-testemoni')


aboutBtn.addEventListener('click', function () {

    aboutCourse.classList.remove('hidden')
    learnedCourse.classList.add('hidden')
    toolsCourse.classList.add('hidden')
    testemoniCourse.classList.add('hidden')

    aboutBtn.classList.add('white-btn-actived')
    learnedBtn.classList.remove('white-btn-actived')
    toolsBtn.classList.remove('white-btn-actived')
    testemoniBtn.classList.remove('white-btn-actived')
})

learnedBtn.addEventListener('click', function () {

    learnedCourse.classList.remove('hidden')
    aboutCourse.classList.add('hidden')
    toolsCourse.classList.add('hidden')
    testemoniCourse.classList.add('hidden')

    learnedBtn.classList.add('white-btn-actived')
    aboutBtn.classList.remove('white-btn-actived')
    toolsBtn.classList.remove('white-btn-actived')
    testemoniBtn.classList.remove('white-btn-actived')
})

toolsBtn.addEventListener('click', function () {

    toolsCourse.classList.remove('hidden')
    aboutCourse.classList.add('hidden')
    learnedCourse.classList.add('hidden')
    testemoniCourse.classList.add('hidden')

    toolsBtn.classList.add('white-btn-actived')
    aboutBtn.classList.remove('white-btn-actived')
    learnedBtn.classList.remove('white-btn-actived')
    testemoniBtn.classList.remove('white-btn-actived')
})

testemoniBtn.addEventListener('click', function () {

    testemoniCourse.classList.remove('hidden')
    aboutCourse.classList.add('hidden')
    learnedCourse.classList.add('hidden')
    toolsCourse.classList.add('hidden')

    testemoniBtn.classList.add('white-btn-actived')
    aboutBtn.classList.remove('white-btn-actived')
    learnedBtn.classList.remove('white-btn-actived')
    toolsBtn.classList.remove('white-btn-actived')
})

// =========================================================

