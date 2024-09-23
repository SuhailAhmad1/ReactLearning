import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong.");
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  function clearData() {
    setData(initialData);
  }
  
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);
      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          body: data,
        });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && config.method == "GET") || !config.method || !config) {
      sendRequest();
    }
  }, [sendRequest]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
