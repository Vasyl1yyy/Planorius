import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function QuicklyAddTasksSelectProirity({
  setValue,
}: {
  setValue: (value: string) => void;
}) {
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className="w-36 bg-black-200 border-black-400 hover:border-basic transition  text-basic font-normal border-2 border-r-1 border-l-1 border-b-1 rounded-none">
        <SelectValue placeholder="proirity" />
      </SelectTrigger>
      <SelectContent className="bg-black-200 border-basic border-2 rounded-2xl">
        <SelectItem
          value="0"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          easy
        </SelectItem>
        <SelectItem
          value="1"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          normal
        </SelectItem>
        <SelectItem
          value="2"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          hard
        </SelectItem>
        <SelectItem
          value="3"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          urgent
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
