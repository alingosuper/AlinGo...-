import { auth, db } from "./firebase-config.js";
import { signOut } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, updateDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("phoneDisplay").innerText = user.phoneNumber;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  document.getElementById("walletBalance").innerText = snap.data().wallet;
});

window.addMoney = async function () {
  const user = auth.currentUser;
  const userRef = doc(db, "users", user.uid);

  const snap = await getDoc(userRef);
  let current = snap.data().wallet;

  await updateDoc(userRef, { wallet: current + 500 });

  document.getElementById("walletBalance").innerText = current + 500;
};

window.logout = function () {
  signOut(auth);
};
