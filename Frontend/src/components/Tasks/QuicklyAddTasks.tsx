import QuicklyAddTasksSelectDate from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDate';
import QuicklyAddTasksSelectDifficulty from './QuicklyAddTasksComponets/QuicklyAddTasksSelectDifficulty';
import QuicklyAddTasksSelectProirity from './QuicklyAddTasksComponets/QuicklyAddTasksSelectProirity';
import QuicklyAddTasksSelectTag from './QuicklyAddTasksComponets/QuicklyAddTasksSelectTag';

export default function QuicklyAddTasks() {
  return (
    <div className="flex p-12">
      <QuicklyAddTasksSelectDifficulty />
      <QuicklyAddTasksSelectProirity />
      <QuicklyAddTasksSelectTag />
      <QuicklyAddTasksSelectDate />
    </div>
  );
}
