import { FaAngleDown } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

export default function QuicklyAddTasksSelectDate() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-36 justify-between border-1 border-t-2 border-r-2 border-black-400 bg-black-200 text-basic rounded-none rounded-tr-xl hover:border-basic transition"
          >
            {date ? date.toLocaleDateString() : 'date'}
            <FaAngleDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0 bg-black-200 border-basic text-basic border-2 rounded-2xl"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            disabled={(date) => date <= currentDate}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
