import { renderStudents } from "../markup/renderStudents";
import { studentSearch } from "./studentSearch";

export const renderPage = async () => {
  await renderStudents();
  await studentSearch();
};
