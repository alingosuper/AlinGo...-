import { auth, db } from "./firebase-config.js";
import { RecaptchaVerifier, signInWithPhoneNumber } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.recaptchaVerifier = new RecaptchaVerifier(auth, 
  'recaptcha-container', { size: 'normal' });

let confirmationResult;

window.sendOTP = async function () {
  const phone = document.getElementById("phone").value;
  confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
  alert("OTP Sent!");
};

window.verifyOTP = async function () {
  const code = document.getElementById("otp").value;
  const result = await confirmationResult.confirm(code);

  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      phone: user.phoneNumber,
      wallet: 0,
      createdAt: new Date()
    });
  }

  window.location.href = "index.html";
};
