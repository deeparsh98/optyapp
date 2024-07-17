export async function fetchOptSuggestions(accountId) {
  try {
    const response = await fetch(
      "/optmyzrapi/GetAccountData?apiId=9&accountId=" + accountId
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    //console.error(error.message);
  }
}

export async function applyOptSuggestion(accountId, operation, payload = {}) {
  try {
    const response = await fetch(
      "/optmyzrapi/ApplyOpt?operation=" + operation + "&accountId=" + accountId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    //console.error(error.message);
  }
}

export async function fetchUserDetails() {
  try {
    const response = await fetch("/optmyzrapi/Me");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    //console.error(error.message);
  }
}

export async function fetchAccounts() {
  try {
    const response = await fetch(
      "/optmyzrapi/GetApiData?apiId=4&selectedFields=accountId;accountName;accountType"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    //console.error(error.message);
  }
}
