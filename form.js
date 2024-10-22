const registration = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function isValidEmail(email) {
  if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
    return false;
  }
  const domain = email.substring(email.lastIndexOf('.') + 1);
  return domain.length > 1 && domain.length <= 6; // Check for valid domain length (e.g., .com, .net)
}

function isValidPassword(password) {
  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;
  let noSpaces = true;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (char >= 'a' && char <= 'z') hasLowercase = true;
    else if (char >= 'A' &&char <= 'Z') hasUppercase = true;
    else if (char >= '0'&& char <= '9') hasNumber = true;
    else if (char === ' ')noSpaces = false;
    else hasSpecialChar= true;
  }

  return password.length>= 8 &&password.length<=24 &&hasLowercase &&hasUppercase &&hasNumber&& hasSpecialChar && noSpaces;
}

function isValidUsername(username) {
  let isValid = true;
  if (username.length < 5 || username.length >12) {
    isValid = false;
  }
  for (let i = 0; i < username.length; i++) {
    const char = username[i];
    if (!(char >= 'a' &&char <= 'z')&&!(char>='0'&&char <='9')) {
      isValid= false;
      break;
    }
  }
  return isValid;
}

function isFormValid() {
  let isValid =true;

  if (username.value.trim() === '') {
    usernameError.innerHTML= 'Username is required';
    usernameError.style.display = 'block';
    isValid = false;
  } else if (!isValidUsername(username.value)) {
    usernameError.innerHTML = 'Username must be 5-12 characters, lowercase, and alphanumeric only';
    usernameError.style.display = 'block';
    isValid = false;
  } else {
    usernameError.style.display = 'none';
  }

  if (email.value.trim() === '') {
    emailError.innerHTML = 'Email is required';
    emailError.style.display = 'block';
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    emailError.innerHTML = 'Enter a valid email address';
    emailError.style.display= 'block';
    isValid = false;
  } else {
    emailError.style.display= 'none';
  }

  if (password.value.trim() === '') {
    passwordError.innerHTML= 'Password is required';
    passwordError.style.display = 'block';
    isValid = false;
  } else if (!isValidPassword(password.value)) {
    passwordError.innerHTML='Password must be 8-24 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character, and no spaces';
    passwordError.style.display='block';
    isValid = false;
  } else {
    passwordError.style.display='none';
  }

  if (confirmPassword.value.trim() === '') {
    confirmPasswordError.innerHTML='Confirm Password is required';
    confirmPasswordError.style.display='block';
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.innerHTML='Passwords do not match';
    confirmPasswordError.style.display= 'block';
    isValid = false;
  } else {
    confirmPasswordError.style.display= 'none';
  }

  return isValid;
}

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (isFormValid()) {
    alert('Signup successful!');
  }
});

togglePassword.addEventListener('click', function () {
  const type = password.type === 'password' ? 'text' : 'password';
  password.type = type;
  togglePassword.classList.toggle('fa-eye-slash');
});

toggleConfirmPassword.addEventListener('click', function () {
  const type = confirmPassword.type === 'password' ? 'text' : 'password';
  confirmPassword.type = type;
  toggleConfirmPassword.classList.toggle('fa-eye-slash');
});
