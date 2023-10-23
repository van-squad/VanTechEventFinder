import { useState, useEffect } from "react";

type FetchEventResponse<T> = {
  loading: boolean;
  error: string | null;
  result: T | null;
};

const useFetchEvent = <T>(
  id: string | null,
  date: Date | null,
  isInPersonOnly = true
): FetchEventResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const dateString = date?.toDateString();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (id) {
          const response = await fetch(`/api/events/id?id=${id}`);
          const data = (await response.json()) as T;
          setFetchedData(data);
        } else if (dateString) {
          const response = await fetch("/api/events/all", {
            method: "POST",
            body: JSON.stringify({
              date: dateString,
              isInPersonOnly: isInPersonOnly,
            }),
          });
          const data = (await response.json()) as T;
          setFetchedData(data);
        }

        setLoading(false);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setError(message);
        setLoading(false);
      }
    };

    void fetchData();
  }, [id, dateString, isInPersonOnly]);

  return { loading, error, result: fetchedData };
};

export default useFetchEvent;
