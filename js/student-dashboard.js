const userId = localStorage.getItem("userId");
if (!userId) window.location.href = "student-login.html";

const nameEl = document.getElementById("studentName");
const studyLogEl = document.getElementById("studyLog");
const attendanceEl = document.getElementById("attendance");
const testReportsEl = document.getElementById("testReports");
const feesEl = document.getElementById("fees");
const suggestionsEl = document.getElementById("suggestions");

firebase.database().ref("students/" + userId).on("value", (snapshot) => {
  const data = snapshot.val();
  nameEl.textContent = data.name;

  const ctx = document.getElementById("progressChart").getContext("2d");
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Completed", "Remaining"],
      datasets: [{
        data: [data.progress, 100 - data.progress],
        backgroundColor: ["#4caf50", "#f44336"]
      }]
    }
  });

  studyLogEl.innerHTML = "";
  data.studyLog && data.studyLog.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.date + ": " + item.topic;
    studyLogEl.appendChild(li);
  });

  attendanceEl.innerHTML = "";
  data.attendance && data.attendance.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.date + ": " + (item.present ? "Present" : "Absent");
    attendanceEl.appendChild(li);
  });

  testReportsEl.innerHTML = "";
  data.tests && data.tests.forEach(test => {
    const li = document.createElement("li");
    li.textContent = test.date + " - " + test.name + ": " + test.marks + "/" + test.total;
    testReportsEl.appendChild(li);
  });

  feesEl.innerHTML = `Total: Rs.${data.fees.total}<br>Paid: Rs.${data.fees.paid}<br>Pending: Rs.${data.fees.total - data.fees.paid}`;
  suggestionsEl.textContent = data.suggestions || "No suggestions yet.";
});