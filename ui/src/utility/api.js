
export const getAllExercises = async () => {
    const response = await fetch(`${baseUrl}/crimes/`)
    const responseData = await response.json()
    return responseData
  }

  export const createNewWorkout = async (reportData) => {
    const response = await fetch(`${baseUrl}/reports/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reportData),
    });
  
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(
        `Status Code: ${response?.status} - ${responseData?.message}`
      );
    }
  };