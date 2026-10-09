export const getStudentsApi = async () => {
  try {
    return await fetch("http://localhost:3000/students").then((response) => {
      return response.json();
    });
  } catch (error) {
    console.log(error.message);
  }
};
