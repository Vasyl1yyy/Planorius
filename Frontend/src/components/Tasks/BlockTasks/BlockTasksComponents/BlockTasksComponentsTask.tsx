import { useStoreTags } from '@/store/stateZustand';
import { GoKebabHorizontal } from 'react-icons/go';

export default function BlockTasksComponentsTask({
  key,
  id,
  difficulty,
  priority,
  tag,
  date,
  text,
}: {
  key: number;
  id?: number;
  difficulty: number;
  priority: number;
  tag: number;
  date: string;
  text: string;
}) {
  const tags = useStoreTags((state) => state.tags);

  function formatDate(dateStr: string): string {
    const inputDate = new Date(dateStr);
    const today = new Date();

    // Обнуляємо час для точного порівняння днів
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((+inputDate - +today) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'tomorrow';

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();
    const currentYear = today.getFullYear();

    return currentYear === year
      ? `${month} ${day}`
      : `${month} ${day}, ${year}`;
  }

  const formatTag = (tagId: number): string => {
    const tagItem = tags?.find((t) => t.id === tagId);
    return tagItem ? tagItem.title : '';
  };

  return (
    <div
      key={key}
      id={id ? id.toString() : undefined}
      className={
        'border-2 rounded-full bg-black-300 p-1.5' +
        ` ${difficulty === 0 ? 'border-basic' : ''} ` +
        `${difficulty === 1 ? 'border-yellow' : ''} ` +
        `${difficulty === 2 ? 'border-red' : ''}`
      }
    >
      <div className="grid grid-cols-24 items-center text-sm  text-basic">
        <span className="col-span-1 flex">
          <div className="border-2 border-basic rounded-full p-2 cursor-pointer"></div>
        </span>
        <span className="col-span-12 text-white pt-1">{text}</span>
        <span className="col-span-3 flex justify-center ">
          <div className="bg-basiclight px-3 rounded-full pt-1">
            {formatTag(tag)}
          </div>
        </span>
        <span className="col-span-4 text-center pt-1">{formatDate(date)}</span>
        <span className="col-span-3 text-center pt-1">{priority}</span>
        <span className="col-span-1 flex justify-end rotate-90 pr-1.5 pb-2 text-base cursor-pointer">
          <GoKebabHorizontal />
        </span>
      </div>
    </div>
  );
}
