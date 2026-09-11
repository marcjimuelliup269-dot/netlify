const STORAGE_KEY = "attendance-dashboard-data-v3";
const ADMIN_SESSION_KEY = "tacligan-admin-session";
const ADMIN_NAME_KEY = "tacligan-admin-name";
const THEME_KEY = "tacligan-theme";
const ADMIN_EMAIL = "admin@tacliganhighschool.edu";
const ADMIN_PASSWORD = "admin123";
const LOCAL_ACCOUNTS_KEY = "tacligan-local-accounts";
const LOCAL_ACCOUNTS = {
  [ADMIN_EMAIL]: { password: ADMIN_PASSWORD, name: "Tacligan Administrator" },
  "marcjimuelliup269@gmail.com": { password: "marcliup1234", name: "Marc Jimuel Liup" }
};

function getLocalAccounts() {
  try {
    return { ...LOCAL_ACCOUNTS, ...JSON.parse(localStorage.getItem(LOCAL_ACCOUNTS_KEY) || "{}") };
  } catch (error) {
    return { ...LOCAL_ACCOUNTS };
  }
}

function saveLocalAccounts(accounts) {
  localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(accounts));
}

const fallbackData = {
  "schoolName": "Tacligan High School",
  "date": "2026-09-08",
  "summary": {
    "totalStudents": 120,
    "present": 84,
    "absent": 12,
    "late": 24,
    "attendanceRate": 70
  },
  "classes": [
    {
      "name": "Grade 7",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    },
    {
      "name": "Grade 8",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    },
    {
      "name": "Grade 9",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    },
    {
      "name": "Grade 10",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    },
    {
      "name": "Grade 11",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    },
    {
      "name": "Grade 12",
      "totalStudents": 20,
      "present": 14,
      "absent": 2,
      "late": 4,
      "attendanceRate": 70
    }
  ],
  "students": [
    {
      "id": "student-7-1",
      "name": "Maria Santos",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-7-2",
      "name": "Luis Dela Cruz",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-7-3",
      "name": "Andrea Villanueva",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-7-4",
      "name": "Miguel Bautista",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-7-5",
      "name": "Rina Reyes",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-7-6",
      "name": "Gabriel Lim",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-7-7",
      "name": "Sofia Ramos",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-7-8",
      "name": "Christian Navarro",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-7-9",
      "name": "Ariana Pascual",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-7-10",
      "name": "Jasper Torres",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-7-11",
      "name": "Mia Garcia",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-7-12",
      "name": "Raphael Aquino",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-7-13",
      "name": "Carlina Mendoza",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-7-14",
      "name": "Ethan Marquez",
      "className": "Grade 7",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-7-15",
      "name": "Nikka Rosales",
      "className": "Grade 7",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-7-16",
      "name": "Renzo Delgado",
      "className": "Grade 7",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-7-17",
      "name": "Claire Ortega",
      "className": "Grade 7",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-7-18",
      "name": "Jericho Bermudez",
      "className": "Grade 7",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-7-19",
      "name": "Patricia Dizon",
      "className": "Grade 7",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-7-20",
      "name": "Jackielyn Luna",
      "className": "Grade 7",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    },
    {
      "id": "student-8-1",
      "name": "Dianne Rivera",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-8-2",
      "name": "Rafael Panganiban",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-8-3",
      "name": "Angela Valdez",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-8-4",
      "name": "Mark Razon",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-8-5",
      "name": "Jessa Rico",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-8-6",
      "name": "Cyrus Cordero",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-8-7",
      "name": "Shaira Santiago",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-8-8",
      "name": "Joshua Bernabe",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-8-9",
      "name": "Alexis Catacutan",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-8-10",
      "name": "Pamela Pineda",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-8-11",
      "name": "Marlon Banaag",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-8-12",
      "name": "Yvette Peña",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-8-13",
      "name": "Frances Abad",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-8-14",
      "name": "Lance Magno",
      "className": "Grade 8",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-8-15",
      "name": "Mica Salazar",
      "className": "Grade 8",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-8-16",
      "name": "Noel De Leon",
      "className": "Grade 8",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-8-17",
      "name": "Ella Manalo",
      "className": "Grade 8",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-8-18",
      "name": "Christian Talag",
      "className": "Grade 8",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-8-19",
      "name": "Ariane Reyes",
      "className": "Grade 8",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-8-20",
      "name": "Lourdes Dela Rosa",
      "className": "Grade 8",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    },
    {
      "id": "student-9-1",
      "name": "Dana Santos",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-9-2",
      "name": "Renz Villanueva",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-9-3",
      "name": "Mae Bautista",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-9-4",
      "name": "Jerome Reyes",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-9-5",
      "name": "Celine Lim",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-9-6",
      "name": "Owen Ramos",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-9-7",
      "name": "Gwen Navarro",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-9-8",
      "name": "Aldrin Pascual",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-9-9",
      "name": "Rhea Torres",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-9-10",
      "name": "Mica Garcia",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-9-11",
      "name": "Trisha Aquino",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-9-12",
      "name": "Dante Mendoza",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-9-13",
      "name": "Freya Marquez",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-9-14",
      "name": "Calix Rosales",
      "className": "Grade 9",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-9-15",
      "name": "Princess Ortega",
      "className": "Grade 9",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-9-16",
      "name": "Miko Delgado",
      "className": "Grade 9",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-9-17",
      "name": "Lianne Dizon",
      "className": "Grade 9",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-9-18",
      "name": "Ryan Luna",
      "className": "Grade 9",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-9-19",
      "name": "Mariz Razon",
      "className": "Grade 9",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-9-20",
      "name": "Kurt Rivera",
      "className": "Grade 9",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    },
    {
      "id": "student-10-1",
      "name": "Karla Panganiban",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-10-2",
      "name": "Benedict Valdez",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-10-3",
      "name": "Jessie Rico",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-10-4",
      "name": "Mika Cordero",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-10-5",
      "name": "Jude Santiago",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-10-6",
      "name": "Lyn Bernabe",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-10-7",
      "name": "Ralph Catacutan",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-10-8",
      "name": "Neri Pineda",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-10-9",
      "name": "Mylene Banaag",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-10-10",
      "name": "Alfred Peña",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-10-11",
      "name": "Rhey Abad",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-10-12",
      "name": "Vince Magno",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-10-13",
      "name": "Ariana Salazar",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-10-14",
      "name": "Rico De Leon",
      "className": "Grade 10",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-10-15",
      "name": "Mira Manalo",
      "className": "Grade 10",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-10-16",
      "name": "Jett Santos",
      "className": "Grade 10",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-10-17",
      "name": "Angelica Cruz",
      "className": "Grade 10",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-10-18",
      "name": "Oliver Dela Cruz",
      "className": "Grade 10",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-10-19",
      "name": "Micahe Villanueva",
      "className": "Grade 10",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-10-20",
      "name": "Zia Bautista",
      "className": "Grade 10",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    },
    {
      "id": "student-11-1",
      "name": "Elaine Reyes",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-11-2",
      "name": "Rex Lim",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-11-3",
      "name": "Carmela Ramos",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-11-4",
      "name": "Briane Navarro",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-11-5",
      "name": "Aiza Pascual",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-11-6",
      "name": "Rael Torres",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-11-7",
      "name": "Janelle Garcia",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-11-8",
      "name": "Christian Aquino",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-11-9",
      "name": "Kaye Mendoza",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-11-10",
      "name": "Harvey Marquez",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-11-11",
      "name": "Veronica Rosales",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-11-12",
      "name": "Emil Ortega",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-11-13",
      "name": "Claire Delgado",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-11-14",
      "name": "Paolo Dizon",
      "className": "Grade 11",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-11-15",
      "name": "Rose Luna",
      "className": "Grade 11",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-11-16",
      "name": "Marvin Razon",
      "className": "Grade 11",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-11-17",
      "name": "Cecile Rivera",
      "className": "Grade 11",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-11-18",
      "name": "Justin Panganiban",
      "className": "Grade 11",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-11-19",
      "name": "Jhen Valdez",
      "className": "Grade 11",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-11-20",
      "name": "Nicole Rico",
      "className": "Grade 11",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    },
    {
      "id": "student-12-1",
      "name": "Aron Cordero",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:50",
      "note": "On time"
    },
    {
      "id": "student-12-2",
      "name": "Sheena Santiago",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-12-3",
      "name": "Kian Bernabe",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-12-4",
      "name": "Elaiza Catacutan",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-12-5",
      "name": "Brett Pineda",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:52",
      "note": "On time"
    },
    {
      "id": "student-12-6",
      "name": "Angela Banaag",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:57",
      "note": "On time"
    },
    {
      "id": "student-12-7",
      "name": "Kyle Peña",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:59",
      "note": "On time"
    },
    {
      "id": "student-12-8",
      "name": "Leah Abad",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-12-9",
      "name": "Jayson Magno",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:54",
      "note": "On time"
    },
    {
      "id": "student-12-10",
      "name": "Ariane Salazar",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:56",
      "note": "On time"
    },
    {
      "id": "student-12-11",
      "name": "Karl De Leon",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:58",
      "note": "On time"
    },
    {
      "id": "student-12-12",
      "name": "Samantha Manalo",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "07:00",
      "note": "On time"
    },
    {
      "id": "student-12-13",
      "name": "Daryl Santos",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:53",
      "note": "On time"
    },
    {
      "id": "student-12-14",
      "name": "Joana Cruz",
      "className": "Grade 12",
      "status": "Present",
      "checkInTime": "06:55",
      "note": "On time"
    },
    {
      "id": "student-12-15",
      "name": "Andrei Dela Cruz",
      "className": "Grade 12",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-12-16",
      "name": "Nia Villanueva",
      "className": "Grade 12",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-12-17",
      "name": "Vincent Bautista",
      "className": "Grade 12",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-12-18",
      "name": "Camille Reyes",
      "className": "Grade 12",
      "status": "Absent",
      "checkInTime": "N/A",
      "note": "Not present"
    },
    {
      "id": "student-12-19",
      "name": "Adrian Lim",
      "className": "Grade 12",
      "status": "Late",
      "checkInTime": "07:05",
      "note": "Late arrival"
    },
    {
      "id": "student-12-20",
      "name": "Lian Ramos",
      "className": "Grade 12",
      "status": "Late",
      "checkInTime": "07:08",
      "note": "Late arrival"
    }
  ]
}

const chartData = {
  daily: [
    { label: "Mon", value: 74 },
    { label: "Tue", value: 81 },
    { label: "Wed", value: 78 },
    { label: "Thu", value: 88 },
    { label: "Fri", value: 92 }
  ],
  weekly: [
    { label: "W1", value: 68 },
    { label: "W2", value: 74 },
    { label: "W3", value: 83 },
    { label: "W4", value: 90 }
  ],
  monthly: [
    { label: "Jan", value: 60 },
    { label: "Feb", value: 72 },
    { label: "Mar", value: 79 },
    { label: "Apr", value: 84 },
    { label: "May", value: 88 }
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
const studentSearch = document.getElementById("studentSearch");
const profileSearch = document.getElementById("profileSearch");
const studentClassField = document.getElementById("studentClass");
const attendanceForm = document.getElementById("attendanceForm");
const recordIdField = document.getElementById("recordId");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const formMessage = document.getElementById("formMessage");
const resetBtn = document.getElementById("resetBtn");
const studentProfiles = document.getElementById("studentProfiles");
const chartContainer = document.getElementById("chartContainer");
const loginStatus = document.getElementById("loginStatus");
const welcomeMessage = document.getElementById("welcomeMessage");
const themeToggle = document.getElementById("themeToggle");
const loginModal = document.getElementById("loginModal");
const modalLoginForm = document.getElementById("modalLoginForm");
const modalLoginMessage = document.getElementById("modalLoginMessage");
const createAccountForm = document.getElementById("createAccountForm");
const createAccountMessage = document.getElementById("createAccountMessage");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const forgotPasswordMessage = document.getElementById("forgotPasswordMessage");
const resetPasswordForm = document.getElementById("resetPasswordForm");
const resetPasswordMessage = document.getElementById("resetPasswordMessage");
const logoutBtn = document.getElementById("logoutBtn");
const authTitle = document.getElementById("authTitle");
const insightRate = document.getElementById("insightRate");
const lateCount = document.getElementById("lateCount");
const dateLabel = document.getElementById("dateLabel");

let appData = fallbackData;
let currentChart = "daily";
let isLoggedIn = localStorage.getItem(ADMIN_SESSION_KEY) === "true";
let adminName = localStorage.getItem(ADMIN_NAME_KEY) || "Admin";
let pendingResetEmail = "";
const SCHOOL_START_TIME = "07:00";

function roundToOne(value) {
  return Math.round(value * 10) / 10;
}

function timeToMinutes(timeValue) {
  if (!timeValue || timeValue === "N/A") return null;
  const match = /^\d{1,2}:\d{2}$/.exec(String(timeValue).trim());
  if (!match) return null;

  const [hours, minutes] = String(timeValue).split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  return hours * 60 + minutes;
}

function getCurrentCheckInTime() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function getEffectiveStatus(student) {
  const rawStatus = String(student?.status || "Present");
  const checkInTime = String(student?.checkInTime || "");
  if (rawStatus === "Absent") return "Absent";

  const lateThreshold = timeToMinutes(SCHOOL_START_TIME);
  const arrivalMinutes = timeToMinutes(checkInTime);
  if (arrivalMinutes !== null && lateThreshold !== null && arrivalMinutes > lateThreshold) {
    return "Late";
  }

  return "Present";
}

function deriveStatusFromForm(status) {
  if (status === "Absent") return "Absent";
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const lateThreshold = timeToMinutes(SCHOOL_START_TIME);
  if (lateThreshold !== null && currentMinutes > lateThreshold) {
    return "Late";
  }
  return "Present";
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
  const legacyClassNames = [
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "1st Year College",
    "2nd Year College",
    "3rd Year College",
    "4th Year College"
  ];
  const hasOldSchoolNames = classNames.some((name) => legacyClassNames.includes(name));
  const hasOldStudentNames = students.some((student) => (student && student.className && legacyClassNames.includes(student.className)));
  return hasOldSchoolNames || hasOldStudentNames;
}

function hasStaleSchoolBranding(data) {
  const schoolName = String(data.schoolName || "").toLowerCase();
  return schoolName.includes("northview") || schoolName.includes("academy");
}

function buildClassesFromStudents(students) {
  const map = new Map();

  students.forEach((student) => {
    const effectiveStatus = getEffectiveStatus(student);
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

    if (effectiveStatus === "Present") current.present += 1;
    if (effectiveStatus === "Absent") current.absent += 1;
    if (effectiveStatus === "Late") current.late += 1;
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
  const present = students.filter((student) => getEffectiveStatus(student) === "Present").length;
  const absent = students.filter((student) => getEffectiveStatus(student) === "Absent").length;
  const late = students.filter((student) => getEffectiveStatus(student) === "Late").length;
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

function applyTargetDistribution(data) {
  const students = (data.students || []).map(ensureStudentId);
  const groupedStudents = new Map();

  students.forEach((student) => {
    const classStudents = groupedStudents.get(student.className) || [];
    classStudents.push(student);
    groupedStudents.set(student.className, classStudents);
  });

  groupedStudents.forEach((classStudents) => {
    const presentCount = Math.round(classStudents.length * 0.7);
    const absentCount = Math.round(classStudents.length * 0.1);

    classStudents.forEach((student, index) => {
      if (index < presentCount) {
        student.status = "Present";
        student.checkInTime = student.checkInTime === "N/A" ? "06:55" : student.checkInTime;
        student.note = "On time";
      } else if (index < presentCount + absentCount) {
        student.status = "Absent";
        student.checkInTime = "N/A";
        student.note = "Not present";
      } else {
        student.status = "Late";
        student.checkInTime = "07:05";
        student.note = "Late arrival";
      }
    });
  });

  return { ...data, students };
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
      if (!isLegacyData(parsed) && !hasStaleSchoolBranding(parsed)) {
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
    const data = normalizeData(applyTargetDistribution(await response.json()));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch (error) {
    const data = normalizeData(applyTargetDistribution(fallbackData));
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

function setAdminMessage(element, message, isError = false) {
  element.textContent = message;
  element.style.color = isError ? "#d34d51" : "#2859d9";
}

function updateInsightCards(data) {
  const summary = data.summary || {};
  insightRate.textContent = `${summary.attendanceRate || 0}%`;
  lateCount.textContent = summary.late || 0;
  const now = new Date();
  dateLabel.textContent = now.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
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
}

function renderClassFilter(data) {
  const classNames = [...new Set((data.classes || []).map((item) => item.name).concat((data.students || []).map((student) => student.className)))];
  const options = ["all", ...classNames.filter(Boolean)];

  classFilter.innerHTML = options
    .map((name) => `<option value="${name}">${name === "all" ? "All Grade Levels" : name}</option>`)
    .join("");
}

function renderClassOptions(data) {
  const uniqueClasses = [...new Set((data.classes || []).map((item) => item.name).concat((data.students || []).map((student) => student.className)))].filter(Boolean);
  studentClassField.innerHTML = [
    '<option value="">Select grade level</option>',
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

function filterStudentsByQuery(students, query) {
  const searchText = String(query || "").trim().toLowerCase();
  if (!searchText) return students;
  return students.filter((student) => String(student.name || "").toLowerCase().includes(searchText));
}

function renderAttendanceTable(data, selectedClass = "all") {
  const students = data.students || [];
  const classFiltered = selectedClass === "all" ? students : students.filter((student) => student.className === selectedClass);
  const visibleStudents = filterStudentsByQuery(classFiltered, studentSearch ? studentSearch.value : "");

  attendanceTable.innerHTML = visibleStudents.length
    ? visibleStudents
        .map((student) => {
          const effectiveStatus = getEffectiveStatus(student);
          return `
            <tr>
              <td>${student.name}</td>
              <td>${student.className}</td>
              <td><span class="status-badge ${statusClass(effectiveStatus)}">${effectiveStatus}</span></td>
              <td>${student.checkInTime || "—"}</td>
              <td>${student.note || "—"}</td>
              <td>
                <button class="mini-btn edit-btn" data-action="edit" data-id="${student.id}">Edit</button>
                <button class="mini-btn delete-btn" data-action="delete" data-id="${student.id}">Delete</button>
              </td>
            </tr>
          `;
        })
        .join("")
    : "<tr><td colspan='6'>No attendance records found.</td></tr>";
}

function renderStudentProfiles(data) {
  const students = data.students || [];
  const visibleStudents = filterStudentsByQuery(students, profileSearch ? profileSearch.value : "");
  studentProfiles.innerHTML = visibleStudents.length
    ? visibleStudents
        .map((student) => {
          const effectiveStatus = getEffectiveStatus(student);
          return `
            <article class="profile-card">
              <div class="profile-header">
                <h3>${student.name}</h3>
                <span class="status-badge ${statusClass(effectiveStatus)}">${effectiveStatus}</span>
              </div>
              <p>${student.className}</p>
              <div class="profile-meta">
                <span class="profile-tag">Check-in: ${student.checkInTime || "N/A"}</span>
                <span class="profile-tag">Note: ${student.note || "—"}</span>
              </div>
            </article>
          `;
        })
        .join("")
    : "<p>No student profiles available.</p>";
}

function renderChart() {
  const chartValues = chartData[currentChart] || chartData.daily;
  const maxValue = Math.max(...chartValues.map((item) => item.value), 100);

  chartContainer.innerHTML = `
    <div class="chart-bars">
      ${chartValues
        .map(
          (item) => `
            <div class="bar-item">
              <span class="bar-value">${item.value}%</span>
              <div class="bar-column" style="height: ${(item.value / maxValue) * 100}%"></div>
              <span class="bar-label">${item.label}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
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
  const note = String(formData.get("studentNote") || "").trim();

  if (!studentName || !className) {
    setFormMessage("Please provide both a student name and a class.", true);
    return;
  }

  const currentCheckInTime = getCurrentCheckInTime();
  const finalStatus = deriveStatusFromForm(status);
  let nextStudents = [...(appData.students || [])];

  if (recordId) {
    nextStudents = nextStudents.map((student) => {
      if (student.id !== recordId) return student;
      return {
        ...student,
        name: studentName,
        className,
        status: finalStatus,
        checkInTime: currentCheckInTime,
        note
      };
    });
    setFormMessage("Attendance record updated.");
  } else {
    const newStudent = {
      id: `student-${Date.now()}`,
      name: studentName,
      className,
      status: finalStatus,
      checkInTime: currentCheckInTime,
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
  renderStudentProfiles(data);
  updateInsightCards(data);
  renderChart();
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

function setActiveTab(targetId) {
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId);
  });

  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === targetId);
  });
}

function exportExcel() {
  const rows = [
    ["Student Name", "Class", "Status", "Check-in", "Notes"],
    ...((appData.students || []).map((student) => [student.name, student.className, student.status, student.checkInTime || "N/A", student.note || ""]))
  ];

  const csvContent = rows
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tacligan-attendance-report.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function exportPdf() {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) {
    window.alert("PDF export library could not load.");
    return;
  }

  const doc = new jsPDF();
  const summary = appData.summary || {};
  const rows = [
    ["Student Name", "Class", "Status", "Check-in", "Notes"],
    ...((appData.students || []).map((student) => [student.name, student.className, student.status, student.checkInTime || "N/A", student.note || ""]))
  ];

  doc.setFontSize(18);
  doc.text("Tacligan High School Attendance Report", 14, 18);
  doc.setFontSize(11);
  doc.text(`Students: ${summary.totalStudents || 0}`, 14, 28);
  doc.text(`Present: ${summary.present || 0} | Absent: ${summary.absent || 0} | Late: ${summary.late || 0}`, 14, 34);
  doc.text(`Attendance Rate: ${summary.attendanceRate || 0}%`, 14, 40);

  let y = 52;
  rows.forEach((row, rowIndex) => {
    if (y > 270) {
      doc.addPage();
      y = 18;
    }

    row.forEach((cell, columnIndex) => {
      const x = 14 + columnIndex * 40;
      doc.setFontSize(rowIndex === 0 ? 9 : 8);
      doc.text(String(cell), x, y, { maxWidth: 34 });
    });
    y += 8;
  });

  doc.save("tacligan-attendance-report.pdf");
}

function applyTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = selectedTheme;
  localStorage.setItem(THEME_KEY, selectedTheme);
  if (themeToggle) {
    themeToggle.textContent = selectedTheme === "dark" ? "Light Mode" : "Dark Mode";
  }
}

function updateLiveClock() {
  if (!dateLabel) return;
  const now = new Date();
  dateLabel.textContent = now.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
}

function openLoginModal() {
  loginModal.classList.remove("hidden");
  loginModal.setAttribute("aria-hidden", "false");
}

function closeLoginModal() {
  loginModal.classList.add("hidden");
  loginModal.setAttribute("aria-hidden", "true");
}

function switchAuthView(view) {
  const titles = {
    login: "Admin Access",
    create: "Create Admin Account",
    forgot: "Forgot Password",
    reset: "Change Password"
  };
  authTitle.textContent = titles[view] || titles.login;
  document.querySelectorAll(".auth-view").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.authPanel !== view);
  });
  document.querySelectorAll(".auth-switch").forEach((button) => {
    button.classList.toggle("active", button.dataset.authView === view);
  });
}

async function postAuthRequest(body) {
  const endpoints = ["/.netlify/functions/admin", "auth.php"];
  let lastError = null;

  for (const endpoint of endpoints) {
    let response;
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (error) {
      lastError = error;
      continue;
    }

    const responseText = await response.text();
    let payload;
    try {
      payload = JSON.parse(responseText);
    } catch (error) {
      if (response.status === 404 && endpoint !== endpoints[endpoints.length - 1]) continue;
      throw new Error("The account service is unavailable. Start Netlify Dev or enable the XAMPP MySQL database.");
    }

    if (response.status === 404 && endpoint !== endpoints[endpoints.length - 1] && !payload.success) continue;
    if (!response.ok || !payload.success) {
      throw new Error(payload.message || payload.error || `Account service returned HTTP ${response.status}.`);
    }
    return payload;
  }

  throw lastError || new Error("The account service is unavailable.");
}

function syncLoginState() {
  if (loginStatus) loginStatus.textContent = isLoggedIn ? "Admin Logged In" : "Guest View";
  if (welcomeMessage) welcomeMessage.textContent = `Welcome, ${adminName}`;
}

async function handleLoginSubmit(event, form, messageEl) {
  event.preventDefault();
  const email = form.querySelector("input[type='email']").value.trim();
  const password = form.querySelector("input[type='password']").value.trim();

  try {
    const payload = await postAuthRequest({ action: "login", email, password });

    isLoggedIn = true;
    localStorage.setItem(ADMIN_SESSION_KEY, payload.token || "true");
    adminName = payload.name || "Admin";
    localStorage.setItem(ADMIN_NAME_KEY, adminName);
    syncLoginState();
    document.querySelector(".app-shell").classList.remove("locked");
    setActiveTab("dashboard");
    setAdminMessage(messageEl, payload.message || "Login successful. Admin access enabled.");
    closeLoginModal();
    form.reset();
    return;
  } catch (error) {
    const localAccount = getLocalAccounts()[email];
    if (localAccount && localAccount.password === password) {
      isLoggedIn = true;
      localStorage.setItem(ADMIN_SESSION_KEY, "true");
      adminName = localAccount.name;
      localStorage.setItem(ADMIN_NAME_KEY, adminName);
      syncLoginState();
      document.querySelector(".app-shell").classList.remove("locked");
      setActiveTab("dashboard");
      setAdminMessage(messageEl, "Login successful. Admin access enabled.");
      closeLoginModal();
      form.reset();
      return;
    }

    setAdminMessage(messageEl, error.message || "Unable to log in.", true);
  }
}

async function handleCreateAccount(event) {
  event.preventDefault();
  const name = document.getElementById("createName").value.trim();
  const email = document.getElementById("createEmail").value.trim().toLowerCase();
  const password = document.getElementById("createPassword").value;

  try {
    const payload = await postAuthRequest({
      action: "create-account",
      name,
      email,
      password
    });
    setAdminMessage(createAccountMessage, payload.message);
    createAccountForm.reset();
    switchAuthView("login");
  } catch (error) {
    if (!name || !email || password.length < 8) {
      setAdminMessage(createAccountMessage, "Provide a name, valid email, and password with at least 8 characters.", true);
      return;
    }

    setAdminMessage(createAccountMessage, error.message || "Unable to create the account.", true);
  }
}

async function handleForgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById("forgotEmail").value.trim();
  try {
    const payload = await postAuthRequest({ action: "check-account", email });
    pendingResetEmail = email;
    document.getElementById("resetEmail").value = email;
    setAdminMessage(forgotPasswordMessage, payload.message);
    switchAuthView("reset");
  } catch (error) {
    if (!getLocalAccounts()[email]) {
      setAdminMessage(forgotPasswordMessage, "No account was found for that email.", true);
      return;
    }

    pendingResetEmail = email;
    document.getElementById("resetEmail").value = email;
    setAdminMessage(forgotPasswordMessage, "Account found. You can now set a new password.");
    switchAuthView("reset");
  }
}

async function handleResetPassword(event) {
  event.preventDefault();
  const email = pendingResetEmail || document.getElementById("resetEmail").value;
  const password = document.getElementById("resetPassword").value;

  try {
    const payload = await postAuthRequest({
      action: "reset-password",
      email,
      password
    });
    setAdminMessage(resetPasswordMessage, payload.message);
    resetPasswordForm.reset();
    pendingResetEmail = "";
    switchAuthView("login");
  } catch (error) {
    if (password.length < 8) {
      setAdminMessage(resetPasswordMessage, "Password must be at least 8 characters.", true);
      return;
    }

    const localAccounts = getLocalAccounts();
    if (!localAccounts[email]) {
      setAdminMessage(resetPasswordMessage, "No account was found for that email.", true);
      return;
    }
    localAccounts[email].password = password;
    saveLocalAccounts(localAccounts);
    setAdminMessage(resetPasswordMessage, "Password changed successfully. You can now log in.");
    resetPasswordForm.reset();
    pendingResetEmail = "";
    switchAuthView("login");
  }
}

function handleLogout() {
  isLoggedIn = false;
  localStorage.removeItem(ADMIN_SESSION_KEY);
  localStorage.removeItem(ADMIN_NAME_KEY);
  adminName = "Admin";
  document.querySelector(".app-shell").classList.add("locked");
  switchAuthView("login");
  openLoginModal();
}

function attachEvents() {
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      setActiveTab(targetId);
    });
  });

  document.querySelectorAll(".chart-tab").forEach((button) => {
    button.addEventListener("click", () => {
      currentChart = button.dataset.chart;
      document.querySelectorAll(".chart-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.chart === currentChart));
      renderChart();
    });
  });

  classFilter.addEventListener("change", () => applyFilter(appData));
  if (studentSearch) {
    studentSearch.addEventListener("input", () => applyFilter(appData));
  }
  if (profileSearch) {
    profileSearch.addEventListener("input", () => renderStudentProfiles(appData));
  }
  attendanceForm.addEventListener("submit", handleFormSubmit);
  attendanceTable.addEventListener("click", handleTableAction);
  cancelEditBtn.addEventListener("click", resetForm);
  resetBtn.addEventListener("click", resetDemoData);
  modalLoginForm.addEventListener("submit", (event) => handleLoginSubmit(event, modalLoginForm, modalLoginMessage));
  createAccountForm.addEventListener("submit", handleCreateAccount);
  forgotPasswordForm.addEventListener("submit", handleForgotPassword);
  resetPasswordForm.addEventListener("submit", handleResetPassword);
  document.querySelectorAll(".auth-switch").forEach((button) => {
    button.addEventListener("click", () => switchAuthView(button.dataset.authView));
  });
  logoutBtn.addEventListener("click", handleLogout);
  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
  });
  loginModal.addEventListener("click", (event) => {
    if (event.target === loginModal && isLoggedIn) closeLoginModal();
  });
  document.getElementById("downloadExcelBtn").addEventListener("click", exportExcel);
  document.getElementById("downloadPdfBtn").addEventListener("click", exportPdf);
}

async function init() {
  appData = await loadData();
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);
  renderAll(appData);
  resetForm();
  syncLoginState();
  attachEvents();
  updateLiveClock();
  setInterval(updateLiveClock, 1000);
  const appShell = document.querySelector(".app-shell");
  if (isLoggedIn) {
    appShell.classList.remove("locked");
    setActiveTab("dashboard");
  } else {
    appShell.classList.add("locked");
    switchAuthView("login");
    openLoginModal();
  }
}

init();
