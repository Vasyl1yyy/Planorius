import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BlockTasksFliterDifficulty() {
  return (
    <Select>
      <SelectTrigger className="w-40 bg-black-100 border-black-400 hover:border-basic transition  text-white font-normal border-2  rounded-xl">
        <SelectValue placeholder="difficulty" />
      </SelectTrigger>
      <SelectContent className="bg-black-200 border-basic border-2 rounded-2xl">
        <SelectItem
          value="easy"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          easy
        </SelectItem>
        <SelectItem
          value="normal"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          normal
        </SelectItem>
        <SelectItem
          value="hard"
          className=" text-basic hover:bg-black-300 rounded-2xl transition"
        >
          hard
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
