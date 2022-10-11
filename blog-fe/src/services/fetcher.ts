export const fetcher = async ({
  method = "GET",
  path = "",
  data = {},
}: {
  method: string;
  path: string;
  data?: unknown;
}) => {
  const url = process.env.REACT_APP_API_URL + path;

  try {

    const options: RequestInit = {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      // headers: {
        // "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    }

    if (method === "POST" || method === "PUT") {
      const headers = { "Content-Type": "application/json" };
      options.headers = { ...options.headers, ...headers };
      options.body = JSON.stringify(data);
    }

    // Default options are marked with *
    const response = await fetch(url, options);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log(error);
    return [];
  }
};
