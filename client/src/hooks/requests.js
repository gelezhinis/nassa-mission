const API_URL = 'http://localhost:8000/v1'

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`);
    const data = await response.json();
    return data;
  } catch(err) {
    console.log(err.message);
  }
}

async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const fetchedLaunches = await response.json();
    return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber );
  } catch(err) {
    console.log(err.message);
  }
}

async function httpSubmitLaunch(launch) {
  // console.log('LAUNCH', launch);
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(launch)
    });
  } catch(err) {
    return {
      ok: false
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE'
    });
  } catch(err) {
    console.log(err.message);
    return {
      ok: false
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};