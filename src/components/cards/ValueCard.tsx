type ValueCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <article
      className="rounded-(--radius) bg-(--bg) p-8 shadow-sm transition-all duration-300 border border-transparent hover:border-(--border) hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-(--bg-muted) flex items-center justify-center">
          <img src={icon} alt={title} className="w-7 h-7" />
        </div>

        <h3 className="mt-5 text-lg font-semibold text-(--text)">{title}</h3>

        <p className="mt-3 text-sm text-(--text-muted) leading-6 max-w-xs">
          {description}
        </p>
      </div>
    </article>
  );
}