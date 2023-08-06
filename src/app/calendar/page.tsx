"use client";

import { useState } from "react";
import Calendar from "../map/components/Calendar";
import { useStyles } from "../map/components/GoogleMaps/styles";

const CalendarPage = () => {
  const { classes } = useStyles();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  return <Calendar date={date} setDate={setDate} />;
};

export default CalendarPage;
