"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export function Scheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSchedule = () => {
    if (date && selectedTime) {
      alert(`Meeting scheduled for ${format(date, "PPP")} at ${selectedTime}`);
    } else {
      alert("Please select a date and time.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Select a time</h3>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>
        <Button onClick={handleSchedule} disabled={!date || !selectedTime}>
          Schedule Meeting
        </Button>
      </div>
    </div>
  );
} 