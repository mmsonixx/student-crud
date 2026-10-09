export const getStudentByIdApi = async (id) => {
try {
    const response = await fetch(`http://localhost:3000/students/${id}`);
    const student = await response.json();
    return student;
  } catch (error) {
    console.log(error.message);
  }
}



