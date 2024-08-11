export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to fetch places.");
    throw error;
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places: places}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to update user places.");
    throw error;
  }

  return resData.message;
}


export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();
  
    if (!response.ok) {
      const error = new Error("Failed to fetch places.");
      throw error;
    }
  
    return resData.places;
  }
  