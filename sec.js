const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
loginBtn.addEventListener('click', function() {
const username = usernameInput.value;
const password = passwordInput.value;
let numLogin = 0;
if (username === 'admin@gmail.com' && password === 'school ali') {
  window.location.href = 'users/main.html';
  } else if (numLogin == 5 || numLogin == 10 || numLogin == 15){
  alert('لو معاك مشكله كلمنا علي : 01030891803');
  } else {
  alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
  }
});
