import { getStudentByIdApi } from "../api/getStudentByIdApi";
import { makeStudentMarkup } from "../markup/makeStudentsList";

const form = document.querySelector(".form-id");
const input = document.querySelector("[data-student-id]");
const studentFound = document.querySelector(".student__result");

export const studentSearch = () => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = input.value;
    const data = await getStudentByIdApi(id);
    studentFound.innerHTML = makeStudentMarkup(data);
     form.reset();
  });
 
};
