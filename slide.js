let slider = document.querySelector('.slider .listslide');
let items = document.querySelectorAll('.slider .listslide .itemslide');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};

let refreshInterval = setInterval(() => { next.click(); }, 3000);

function reloadSlider() {
    slider.style.transform = `translateX(-${items[active].offsetLeft}px)`; // Sử dụng transform để di chuyển slider
    // Cập nhật dots
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // Reset lại khoảng thời gian
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click(); }, 3000);
}

// Xử lý khi click vào các dots
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

// Tự động reload slider khi thay đổi kích thước cửa sổ
window.onresize = function (event) {
    reloadSlider();
};
