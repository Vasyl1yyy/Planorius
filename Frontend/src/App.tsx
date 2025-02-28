import { useQuery } from '@tanstack/react-query';

const fetchTest = async () => {
  const res = await fetch('http://localhost:3000/api/test');
  if (!res.ok) throw new Error('Помилка запиту');
  return res.json();
};

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: fetchTest,
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  return <p>{data.message}</p>;
}

export default App;
