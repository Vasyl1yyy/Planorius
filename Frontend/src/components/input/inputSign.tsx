export default function InputSign({
  type,
  value,
  onChange,
}: {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="bg-black-200 border-black-400 border-2 rounded-full p-2 w-full pl-5 text-white focus:outline-none focus:border-basic hover:border-basic transition ease-in-out delay-100"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
