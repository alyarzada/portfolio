import { useState } from "react";

export const useAsync = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mutate = () => {
    setIsLoading(true);

    return new Promise(() => {
      setTimeout((resolve) => {
        setIsLoading(false);
        setIsSuccess(true);
        resolve();
      }, 1000);
    });
  };

  return {
    isLoading,
    isSuccess,
    mutate,
  };
};
