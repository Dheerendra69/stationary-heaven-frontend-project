const emailForm = document.getElementById('emailForm');
const otpContainer = document.getElementById('otpContainer');
const verifyButton = document.getElementById('verifyButton');

emailForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate sending instructions (replace with actual email sending logic)
  alert('Instructions sent to your email!');

  // Show OTP input container
  otpContainer.style.display = 'block';
});

verifyButton.addEventListener('click', function() {
  const enteredOTP = document.getElementById('otp').value;

  // Simulate OTP verification (replace with actual verification logic)
  if (enteredOTP === '123456') { // Replace with your actual OTP validation logic
    alert('OTP verified! You can now reset your password.');
    // Redirect to password reset page (replace with actual redirection logic)
  } else {
    alert('Invalid OTP. Please try again.');
  }
});
