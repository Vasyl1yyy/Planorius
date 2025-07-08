import { FaAngleDown } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

const tags = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export default function QuicklyAddTasksSelectTag() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-56 justify-between text-basic rounded-none border-1 border-t-2  border-black-400 bg-black-200 hover:border-basic transition"
        >
          {value ? tags.find((tag) => tag.value === value)?.label : 'tag'}
          <FaAngleDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0 bg-black-200 border-2 border-basic rounded-2xl text-basic">
        <Command>
          <CommandInput placeholder="search tag..." />
          <CommandList>
            <CommandEmpty>
              <div className="bg-basic text-black rounded-2xl mx-2 py-2 cursor-pointer">
                add tag
              </div>
            </CommandEmpty>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag.value}
                  value={tag.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                  className="hover:bg-black-300 transition rounded-2xl border-2 border-black-200  "
                >
                  {value === tag.value ? (
                    <div className="flex">
                      <div className="mt-1">{tag.label}</div>
                      <div className="absolute rounded-2xl  w-full border-2 flex justify-end p-2 top-0 left-0 border-basic">
                        <FaCheck />
                      </div>
                    </div>
                  ) : (
                    tag.label
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
