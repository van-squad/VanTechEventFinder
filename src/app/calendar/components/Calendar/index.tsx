"use client";

import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { type Dispatch, type SetStateAction } from "react";

type CalendarProps = {
  date: Date | null;
  setDate: Dispatch<SetStateAction<Date | null>>;
};

const Calendar = ({ date = new Date(Date.now()), setDate }: CalendarProps) => {
  return (
    <Group position="center">
      <DatePicker value={date} onChange={setDate} />
    </Group>
  );
};

export default Calendar;
