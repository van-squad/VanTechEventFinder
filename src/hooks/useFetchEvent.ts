import { useState, useEffect } from "react";
import { type ModifiedResult } from "~/pages/api/events/all";

const useFetchEvent = (id: string | null, date: Date | null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchedData, setFetchedData] = useState<
    ModifiedResult[] | ModifiedResult | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (id) {
          const response = await fetch(`/api/events/${id}`);
          const data = (await response.json()) as ModifiedResult | null;
          setFetchedData(data);
        } else if (date) {
          const response = await fetch("/api/events/all", {
            method: "POST",
            body: JSON.stringify({ date }),
          });
          const data = (await response.json()) as ModifiedResult[];
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
  }, [id, date]);

  return { loading, error, result: fetchedData };
};

export default useFetchEvent;
