export const makeStudentsList = (students) => {
  const studentsHtml = students
    .map(
      (student) =>
        ` <li class="students__item">
        <p class="student-id">${student.id}</p>
        <p class="student-name">${student.name}</p>
        <p class="student-age">${student.age}</p>
        <p class="student-email">${student.email}</p>
        <p class="student-phone">${student.phone}</p>
    </li>`,
    )
    .join("");
  return studentsHtml;
};

export const makeStudentMarkup = (student) => {
const studentHtml = 
        ` <li class="students__item">
        <p class="student-id">${student.id}</p>
        <p class="student-name">${student.name}</p>
        <p class="student-age">${student.age}</p>
        <p class="student-email">${student.email}</p>
        <p class="student-phone">${student.phone}</p>
    </li>`;
 
  return studentHtml;
}