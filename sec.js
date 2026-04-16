const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
loginBtn.addEventListener('click', function() {
const username = usernameInput.value;
const password = passwordInput.value;
if (username === 'school' && password === 'ali') {
  window.location.href = 'users/main.html';
  } else {
  alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
  }
});