"use client";

import { useState } from "react";
import Calendar from "./components/Calendar";
import { useStyles } from "./styles";

const CalendarPage = () => {
  const { classes } = useStyles();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  return (
    <div className={classes.container}>
      <Calendar date={date} setDate={setDate} />
    </div>
  );
};

export default CalendarPage;
