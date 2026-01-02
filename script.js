
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}

// Function to sanitize user input
function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}

// Example usage
const userInput = document.querySelector('#user-input');
const sanitizedInput = sanitizeInput(userInput.value);
console.log(sanitizedInput);









// افترض أن MainImg هو العنصر الذي يمثل الصورة الرئيسية
const MainImg = document.querySelector('.section-p1__img');
// افترض أن smallimg هي مجموعة العناصر التي تمثل الصور الصغيرة
const smallimg = document.querySelectorAll('.section-p1__small-img');

// استخدم حلقة لتعيين المستمعات للأحداث لجميع الصور الصغيرة
smallimg.forEach((img) => {
    img.onclick = function() {
        // تغيير مصدر الصورة الرئيسية إلى مصدر الصورة التي تم النقر عليها
        MainImg.src = img.src;
    };
});