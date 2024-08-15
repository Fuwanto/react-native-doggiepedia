const apiUrlBase = "http://api.doggiepedia.org";

export async function getAllBreeds(page = 1) {
  const apiUrl = `${apiUrlBase}/all?page=${page}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.breeds;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export async function getBreedDetails(breedSlug) {
  const apiUrl = `${apiUrlBase}/breeds/${breedSlug}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export async function getBreedGroupData(groupId) {
  const apiUrl = `${apiUrlBase}/group?group=${groupId}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export async function getBreedOfTheDay() {
  const apiUrl = `${apiUrlBase}/today`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
