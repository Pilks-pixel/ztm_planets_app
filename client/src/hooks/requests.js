const API_URL = 'http://localhost:8000';
async function httpGetPlanets() {
  // Load planets and return as JSON.
  const res = await fetch(`${API_URL}/planets`);
  return await res.json();
}

async function httpGetLaunches() {
  // Load launches, sort by flight number, and return as JSON.
  const res = await fetch(`${API_URL}/launches`);
  const launches = await res.json();
  return launches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // Submit given launch data to launch system.
  try {
  return await fetch(`${API_URL}/launches`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(launch),
	});  
  } catch (error) {
    return {
      ok: false,
    };
    
  }
  
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    const res = await fetch(`${API_URL}/launches/${id}`, {
      method: "DELETE",
    });
    return {
      ok: res.ok,
    };
  } catch (error) {
    return {
      ok: false,
    };
    
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};