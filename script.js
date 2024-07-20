// Функция для проверки видимости элемента на экране
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для анимации элементов при доскроллинге
function animateElementsOnScroll() {
    var elements = document.querySelectorAll('.animate-from-bottom, .animate-from-top');

    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Функция для анимации команды
function animateTeamMembers() {
    var teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(function(member) {
        if (isElementInViewport(member)) {
            member.classList.add('visible');
        }
    });
}

// Вызываем функции анимации при загрузке страницы и при скролле
window.addEventListener('load', function() {
    animateElementsOnScroll();
    animateTeamMembers();
});

window.addEventListener('scroll', function() {
    animateElementsOnScroll();
    animateTeamMembers();
});
