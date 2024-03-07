import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface AxiosState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T>(
  url: string,
  config?: AxiosRequestConfig
): AxiosState<T> => {
  const [axiosState, setAxiosState] = useState<AxiosState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, config);

        setAxiosState({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setAxiosState({
          data: null,
          loading: false,
          error:
            error instanceof Error
              ? error
              : new Error("An error occurred during the request."),
        });
      }
    };

    fetchData();

    // Cleanup: Cancel the Axios request if the component unmounts
    return () => {
      // You can use axios cancel tokens for proper cancellation if needed
    };
  }, [url, config]);

  return axiosState;
};
