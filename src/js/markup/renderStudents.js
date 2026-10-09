import { getStudentsApi } from "../api/getStudentsApi";
import { makeStudentsList } from "./makeStudentsList";

const list = document.querySelector(".students__list");

export const renderStudents = async () => {
   const data = await getStudentsApi();
  list.innerHTML = makeStudentsList(data);
};