const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const mobile = document.getElementById("mobile").value;

  db.ref("students/" + userId).get().then(snapshot => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.mobile === mobile) {
        localStorage.setItem("userId", userId);
        window.location.href = "student-dashboard.html";
      } else {
        errorText.textContent = "Mobile number incorrect";
      }
    } else {
      errorText.textContent = "User ID not found";
    }
  });
});