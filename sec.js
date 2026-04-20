const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

let numLogin = 0; // متغير عام يحتفظ بعدد المحاولات

loginBtn.addEventListener('click', function() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin@gmail.com' && password === 'school ali') {
    window.location.href = 'users/main.html';
  } else {
    numLogin++; // زيادة عدد المحاولات
    if (numLogin === 5 || numLogin === 10 || numLogin === 15) {
      alert('لو معاك مشكله كلمنا علي : 01030891803');
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
  }
});
