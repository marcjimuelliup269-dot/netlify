const STORAGE_KEY = "attendance-dashboard-data-v2";

const fallbackData = {
  schoolName: "Northview Academy",
  date: "2026-08-31",
  summary: {
    totalStudents: 8,
    present: 4,
    absent: 2,
    late: 2,
    attendanceRate: 50
  },
  classes: [
    { name: "1st Year College", totalStudents: 2, present: 1, absent: 1, late: 1, attendanceRate: 50 },
    { name: "2nd Year College", totalStudents: 2, present: 1, absent: 1, late: 1, attendanceRate: 50 },
    { name: "3rd Year College", totalStudents: 2, present: 1, absent: 0, late: 1, attendanceRate: 50 },
    { name: "4th Year College", totalStudents: 2, present: 1, absent: 0, late: 1, attendanceRate: 50 }
  ],
  students: [
    { id: "student-1", name: "Maria Santos", className: "1st Year College", status: "Present", checkInTime: "08:15", note: "On time" },
    { id: "student-2", name: "Luis Dela Cruz", className: "1st Year College", status: "Late", checkInTime: "08:32", note: "Heavy traffic" },
    { id: "student-3", name: "Andrea Villanueva", className: "2nd Year College", status: "Present", checkInTime: "08:12", note: "On time" },
    { id: "student-4", name: "Miguel Bautista", className: "2nd Year College", status: "Absent", checkInTime: "—", note: "Family emergency" },
    { id: "student-5", name: "Rina Reyes", className: "3rd Year College", status: "Present", checkInTime: "08:10", note: "On time" },
    { id: "student-6", name: "Gabriel Lim", className: "3rd Year College", status: "Late", checkInTime: "08:40", note: "Late arrival" },
    { id: "student-7", name: "Sofia Ramos", className: "4th Year College", status: "Present", checkInTime: "08:07", note: "On time" },
    { id: "student-8", name: "Christian Navarro", className: "4th Year College", status: "Absent", checkInTime: "—", note: "Medical leave" }
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
const studentClassField = document.getElementById("studentClass");
const attendanceForm = document.getElementById("attendanceForm");
const recordIdField = document.getElementById("recordId");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const formMessage = document.getElementById("formMessage");
const resetBtn = document.getElementById("resetBtn");

let appData = fallbackData;

function roundToOne(value) {
  return Math.round(value * 10) / 10;
}

function ensureStudentId(student, index) {
  return {
    ...student,
    id: student.id || `student-${Date.now()}-${index + 1}`,
    name: student.name || "Unnamed student",
    className: student.className || "Unassigned",
    status: student.status || "Present",
    checkInTime: student.checkInTime || "N/A",
    note: student.note || ""
  };
}

function isLegacyData(data) {
  const classNames = (data.classes || []).map((item) => item.name || "");
  const students = data.students || [];
  const hasOldSchoolNames = classNames.some((name) => ["Grade 1", "Grade 2", "Grade 3", "Grade 4"].includes(name));
  const hasOldStudentNames = students.some((student) => (student && student.className && ["Grade 1", "Grade 2", "Grade 3", "Grade 4"].includes(student.className)));
  return hasOldSchoolNames || hasOldStudentNames;
}

function buildClassesFromStudents(students) {
  const map = new Map();

  students.forEach((student) => {
    const className = student.className || "Unassigned";
    if (!map.has(className)) {
      map.set(className, {
        name: className,
        totalStudents: 0,
        present: 0,
        absent: 0,
        late: 0
      });
    }

    const current = map.get(className);
    current.totalStudents += 1;

    if (student.status === "Present") current.present += 1;
    if (student.status === "Absent") current.absent += 1;
    if (student.status === "Late") current.late += 1;
  });

  return [...map.values()].map((entry) => {
    const rate = entry.totalStudents ? roundToOne((entry.present / entry.totalStudents) * 100) : 0;
    return {
      ...entry,
      attendanceRate: rate
    };
  });
}

function buildSummary(students) {
  const totalStudents = students.length;
  const present = students.filter((student) => student.status === "Present").length;
  const absent = students.filter((student) => student.status === "Absent").length;
  const late = students.filter((student) => student.status === "Late").length;
  const attendanceRate = totalStudents ? roundToOne((present / totalStudents) * 100) : 0;

  return {
    totalStudents,
    present,
    absent,
    late,
    attendanceRate
  };
}

function normalizeData(data) {
  const students = (data.students || []).map(ensureStudentId);
  return {
    ...data,
    students,
    classes: buildClassesFromStudents(students),
    summary: buildSummary(students)
  };
}

function saveToLocalStorage(data) {
  const normalized = normalizeData(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  appData = normalized;
  return normalized;
}

async function loadData() {
  const legacyKey = "attendance-dashboard-data-v1";
  if (localStorage.getItem(legacyKey)) {
    localStorage.removeItem(legacyKey);
  }

  const cachedData = localStorage.getItem(STORAGE_KEY);
  if (cachedData) {
    try {
      const parsed = JSON.parse(cachedData);
      if (!isLegacyData(parsed)) {
        return normalizeData(parsed);
      }
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("Cached data invalid, falling back to source data.", error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  try {
    const response = await fetch("attendance.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No attendance data found");
    const data = normalizeData(await response.json());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch (error) {
    const data = normalizeData(fallbackData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
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
  const normalized = (status || "Absent").toLowerCase();
  if (normalized === "present") return "status-present";
  if (normalized === "late") return "status-late";
  return "status-absent";
}

function setFormMessage(message, isError = false) {
  formMessage.textContent = message;
  formMessage.style.color = isError ? "#d34d51" : "#2859d9";
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
  const classNames = [...new Set((data.classes || []).map((item) => item.name).concat((data.students || []).map((student) => student.className)))];
  const options = ["all", ...classNames.filter(Boolean)];

  classFilter.innerHTML = options
    .map((name) => `<option value="${name}">${name === "all" ? "All Classes" : name}</option>`)
    .join("");
}

function renderClassOptions(data) {
  const uniqueClasses = [...new Set((data.classes || []).map((item) => item.name).concat((data.students || []).map((student) => student.className)))].filter(Boolean);
  studentClassField.innerHTML = [
    '<option value="">Select class</option>',
    ...uniqueClasses.map((name) => `<option value="${name}">${name}</option>`)
  ].join("");
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
              <td>
                <button class="mini-btn edit-btn" data-action="edit" data-id="${student.id}">Edit</button>
                <button class="mini-btn delete-btn" data-action="delete" data-id="${student.id}">Delete</button>
              </td>
            </tr>
          `
        )
        .join("")
    : "<tr><td colspan='6'>No attendance records found.</td></tr>";
}

function applyFilter(data) {
  const selectedClass = classFilter.value;
  renderClassCards(data, selectedClass);
  renderAttendanceTable(data, selectedClass);
}

function resetForm() {
  attendanceForm.reset();
  recordIdField.value = "";
  formTitle.textContent = "Add Attendance Record";
  submitBtn.textContent = "Save Record";
  cancelEditBtn.hidden = true;
  setFormMessage("");
}

function setFormForEdit(student) {
  recordIdField.value = student.id;
  document.getElementById("studentName").value = student.name;
  studentClassField.value = student.className;
  document.getElementById("studentStatus").value = student.status;
  document.getElementById("checkInTime").value = student.checkInTime === "N/A" ? "" : student.checkInTime;
  document.getElementById("studentNote").value = student.note || "";
  formTitle.textContent = "Edit Attendance Record";
  submitBtn.textContent = "Update Record";
  cancelEditBtn.hidden = false;
  setFormMessage("Editing selected student record.");
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(attendanceForm);
  const recordId = formData.get("recordId");
  const studentName = String(formData.get("studentName") || "").trim();
  const className = String(formData.get("studentClass") || "").trim();
  const status = String(formData.get("studentStatus") || "Present");
  const checkInTime = String(formData.get("checkInTime") || "");
  const note = String(formData.get("studentNote") || "").trim();

  if (!studentName || !className) {
    setFormMessage("Please provide both a student name and a class.", true);
    return;
  }

  let nextStudents = [...(appData.students || [])];

  if (recordId) {
    nextStudents = nextStudents.map((student) => {
      if (student.id !== recordId) return student;
      return {
        ...student,
        name: studentName,
        className,
        status,
        checkInTime: checkInTime || "N/A",
        note
      };
    });
    setFormMessage("Attendance record updated.");
  } else {
    const newStudent = {
      id: `student-${Date.now()}`,
      name: studentName,
      className,
      status,
      checkInTime: checkInTime || "N/A",
      note
    };
    nextStudents = [...nextStudents, newStudent];
    setFormMessage("New attendance record added.");
  }

  const updatedData = saveToLocalStorage({
    ...appData,
    students: nextStudents,
    date: new Date().toISOString().slice(0, 10),
    summary: buildSummary(nextStudents)
  });

  renderAll(updatedData);
  resetForm();
}

function handleTableAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const { action, id } = button.dataset;
  if (!id) return;

  if (action === "edit") {
    const student = (appData.students || []).find((item) => item.id === id);
    if (student) setFormForEdit(student);
    return;
  }

  if (action === "delete") {
    const student = (appData.students || []).find((item) => item.id === id);
    if (!student) return;

    const confirmed = window.confirm(`Delete attendance record for ${student.name}?`);
    if (!confirmed) return;

    const nextStudents = (appData.students || []).filter((item) => item.id !== id);
    const updatedData = saveToLocalStorage({
      ...appData,
      students: nextStudents,
      summary: buildSummary(nextStudents)
    });

    renderAll(updatedData);
    resetForm();
    setFormMessage("Record deleted.");
  }
}

function renderAll(data) {
  renderSummary(data);
  renderClassFilter(data);
  renderClassOptions(data);
  renderClassCards(data, classFilter.value || "all");
  renderAttendanceTable(data, classFilter.value || "all");
}

function resetDemoData() {
  const confirmed = window.confirm("Reset the dashboard to the original demo data?");
  if (!confirmed) return;

  const resetData = normalizeData(fallbackData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resetData));
  appData = resetData;
  renderAll(resetData);
  resetForm();
  setFormMessage("Demo data restored.");
}

async function init() {
  appData = await loadData();
  renderAll(appData);
  resetForm();

  classFilter.addEventListener("change", () => applyFilter(appData));
  attendanceForm.addEventListener("submit", handleFormSubmit);
  attendanceTable.addEventListener("click", handleTableAction);
  cancelEditBtn.addEventListener("click", resetForm);
  resetBtn.addEventListener("click", resetDemoData);
}

init();
