// pages/index.tsx
"use client";
import { useEffect } from "react";

// interface MeetupData {
//   // Define the structure of your Meetup data here
//   // Example: name: string;
// }

export default function FetchDataPage() {
  // const [data, setData] = useState<MeetupData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/events/mockData", {
          method: "POST",
        });

        if (response.ok) {
          // const result = await response.json();
          // setData(result);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

     void fetchData();
  }, []);

  return (
    <div>
      <h1>Meetup Data</h1>
    </div>
  );
}
