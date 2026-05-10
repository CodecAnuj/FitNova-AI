interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard = ({
  title,
  value,
}: StatsCardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-zinc-400 mb-2">
        {title}
      </h2>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;