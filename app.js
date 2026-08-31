const fallbackData = {
  schoolName: "Northview Academy",
  date: "2026-08-31",
  summary: {
    totalStudents: 136,
    present: 124,
    absent: 12,
    late: 18,
    attendanceRate: 91.2
  },
  classes: [
    { name: "Grade 1", totalStudents: 24, present: 22, absent: 2, late: 4, attendanceRate: 91.7 },
    { name: "Grade 2", totalStudents: 30, present: 27, absent: 3, late: 6, attendanceRate: 90.0 },
    { name: "Grade 3", totalStudents: 28, present: 26, absent: 2, late: 5, attendanceRate: 92.9 },
    { name: "Grade 4", totalStudents: 32, present: 29, absent: 3, late: 7, attendanceRate: 90.6 }
  ],
  students: [
    { name: "Ava Martin", className: "Grade 1", status: "Present", checkInTime: "08:15", note: "On time" },
    { name: "Liam Chen", className: "Grade 1", status: "Late", checkInTime: "08:32", note: "Traffic delay" },
    { name: "Mia Johnson", className: "Grade 2", status: "Present", checkInTime: "08:12", note: "On time" },
    { name: "Noah Patel", className: "Grade 2", status: "Absent", checkInTime: "—", note: "Medical leave" },
    { name: "Olivia Williams", className: "Grade 3", status: "Present", checkInTime: "08:10", note: "On time" },
    { name: "Ethan Garcia", className: "Grade 3", status: "Late", checkInTime: "08:40", note: "Late arrival" },
    { name: "Sophia Brown", className: "Grade 4", status: "Present", checkInTime: "08:07", note: "On time" },
    { name: "Lucas Davis", className: "Grade 4", status: "Absent", checkInTime: "—", note: "Family emergency" }
  ]
};

const statIds = {
  totalStudents: document.getElementById("totalStudents"),
  presentCount: document.getElementById("presentCount"),
  absentCount: document.getElementById("absentCount"),
  attendanceRate: document.getElementById("attendanceRate")
};

const classFilter = document.getElementById("classFilter");
const classCardsContainer = document.getElementById("classCards");
const attendanceTable = document.getElementById("attendanceTable");

async function loadData() {
  try {
    const response = await fetch("attendance.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No attendance data found");
    return await response.json();
  } catch (error) {
    return fallbackData;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "Today";
  }

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function statusClass(status) {
  const normalized = status.toLowerCase();
  if (normalized === "present") return "status-present";
  if (normalized === "late") return "status-late";
  return "status-absent";
}

function renderSummary(data) {
  const summary = data.summary || {};
  const totalStudents = summary.totalStudents || 0;
  const present = summary.present || 0;
  const absent = summary.absent || 0;
  const attendanceRate = summary.attendanceRate || 0;

  statIds.totalStudents.textContent = totalStudents;
  statIds.presentCount.textContent = present;
  statIds.absentCount.textContent = absent;
  statIds.attendanceRate.textContent = `${attendanceRate}%`;

  document.getElementById("schoolName").textContent = data.schoolName || "Attendance Dashboard";
  document.getElementById("dateLabel").textContent = formatDate(data.date || new Date().toISOString());
}

function renderClassFilter(data) {
  const classes = data.classes || [];
  const uniqueClasses = ["all", ...classes.map((item) => item.name)];

  classFilter.innerHTML = uniqueClasses
    .map((name) => `<option value="${name}">${name === "all" ? "All Classes" : name}</option>`)
    .join("");
}

function renderClassCards(data, selectedClass = "all") {
  const classes = data.classes || [];
  const visibleClasses = selectedClass === "all" ? classes : classes.filter((item) => item.name === selectedClass);

  classCardsContainer.innerHTML = visibleClasses.length
    ? visibleClasses
        .map(
          (item) => `
            <article class="class-card">
              <header>
                <h3>${item.name}</h3>
                <span class="pill">${item.attendanceRate}%</span>
              </header>
              <div class="progress">
                <div class="progress-bar" style="width: ${Math.min(item.attendanceRate, 100)}%"></div>
              </div>
              <div class="class-meta">
                <span>${item.present} present</span>
                <span>${item.absent} absent</span>
              </div>
            </article>
          `
        )
        .join("")
    : "<p>No class data available.</p>";
}

function renderAttendanceTable(data, selectedClass = "all") {
  const students = data.students || [];
  const visibleStudents = selectedClass === "all" ? students : students.filter((student) => student.className === selectedClass);

  attendanceTable.innerHTML = visibleStudents.length
    ? visibleStudents
        .map(
          (student) => `
            <tr>
              <td>${student.name}</td>
              <td>${student.className}</td>
              <td><span class="status-badge ${statusClass(student.status)}">${student.status}</span></td>
              <td>${student.checkInTime || "—"}</td>
              <td>${student.note || "—"}</td>
            </tr>
          `
        )
        .join("")
    : "<tr><td colspan='5'>No attendance records found.</td></tr>";
}

function applyFilter(data) {
  const selectedClass = classFilter.value;
  renderClassCards(data, selectedClass);
  renderAttendanceTable(data, selectedClass);
}

async function init() {
  const data = await loadData();
  renderSummary(data);
  renderClassFilter(data);
  renderClassCards(data);
  renderAttendanceTable(data);

  classFilter.addEventListener("change", () => applyFilter(data));
}

init();
