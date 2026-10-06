'use client';

import Calendar from 'react-calendar';
import { useState } from 'react';

const availableDates = [
  '2026-10-07',
  '2026-10-08',
  '2026-10-10',
  '2026-10-12',
  '2026-10-14',
  '2026-10-16',
  '2026-10-18',
  '2026-10-20',
  '2026-10-22',
  '2026-10-27',
  '2026-10-29',
  '2026-10-31',
  '2026-11-03',
  '2026-11-05',
  '2026-11-09',
  '2026-11-11',
];

export function AvailabilityCalendar() {
  const [date, setDate] = useState<Date | null>(new Date(2026, 9, 7));

  const tileClassName = ({ date: currentDate }: { date: Date }) => {
    const formatted = currentDate.toISOString().slice(0, 10);
    if (availableDates.includes(formatted)) {
      return 'available-day';
    }
    return null;
  };

  return (
    <div>
      <Calendar
        value={date}
        onChange={(value) => setDate(value as Date)}
        tileClassName={tileClassName}
        minDate={new Date(2026, 9, 1)}
        maxDate={new Date(2026, 11, 31)}
      />

      <div className="mt-6 rounded-2xl bg-sage-100 p-4 text-sm text-sage-800">
        <p className="font-bold uppercase tracking-[0.2em]">Selected Date</p>
        <p className="mt-2 text-lg font-black text-ink">
          {date ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date selected'}
        </p>
      </div>
    </div>
  );
}
