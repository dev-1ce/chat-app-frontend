export const BASE_URL = "http://localhost:3000/api";

export const postRequest = async (url: any, body: any) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await res.json();

  if (!res.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};

export const getRequest = async (url: any) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    let message = "An error occured";

    if (data?.message) {
      message = data.message;
    }
    return { error: true, message };
  }
  return data;
};

export const formatDate = (item: string) => {
  const date = new Date(item);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return date.toLocaleTimeString(undefined, options);
};
