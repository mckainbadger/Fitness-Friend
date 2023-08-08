const baseUrl = "http://localhost:9000";

export const getAllExercises = async () => {
  const response = await fetch(`${baseUrl}/exerciseOptions/`);
  const responseData = await response.json();
  return responseData;
};

export const getMyWorkouts = async () => {
  const response = await fetch(`${baseUrl}/myWorkouts/`);
  const responseData = await response.json();
  return responseData;
};


export const createNewWorkout = async (data) => {
  const response = await fetch(`${baseUrl}/myWorkouts/new`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
