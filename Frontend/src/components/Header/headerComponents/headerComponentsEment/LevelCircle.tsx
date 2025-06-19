export default function LevelCircle({
  percent,
  level,
}: {
  percent: number;
  level: number;
}) {
  const radius = 20;
  const stroke = 3;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-9 h-9">
      <svg height="100%" width="100%" viewBox="0 0 40 40">
        <circle
          stroke="#383838"
          fill="none"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="20"
          cy="20"
        />
        <circle
          stroke="#3DDC97"
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="20"
          cy="20"
          transform="rotate(-90 20 20)"
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-base font-normal mb-[-3px]">{level}</p>
      </div>
    </div>
  );
}
