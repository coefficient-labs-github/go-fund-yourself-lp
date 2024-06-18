function hubspotCookie() {
  if (document.cookie.match(/hubspotutk/) === null) return undefined;
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getGaClientIdCookie() {
  // if (document.cookie.match(/_ga/) === null) {
  //   console.log("No GA cookie found");
  //   return undefined;
  // }
  // return document.cookie.replace(
  //   /(?:(?:^|.*;\s*)_ga\s*\=\s*([^;]*).*$)|^.*$/,
  //   "$1"
  // );
  var match = document.cookie.match("(?:^|;)\\s*_ga=([^;]*)"),
    raw = match ? decodeURIComponent(match[1]) : null;
  if (raw) {
    match = raw.match(/(\d+\.\d+)$/);
  }
  if (!match) {
    console.log("No GA cookie found");
  }
  return match ? match[1] : null;
}

export const submitHubspotForm = async (form: any) => {
  try {
    const res = await fetch("/api/submit-hubspot-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: {
          ...form,
          // ga: getGaClientIdCookie() || "",
        },
        context: {
          hutk: hubspotCookie(),
        },
      }),
    });
    if (res.status !== 200) throw new Error("Error submitting form");
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
