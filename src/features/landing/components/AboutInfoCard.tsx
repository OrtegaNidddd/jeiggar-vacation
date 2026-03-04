type AboutInfoCardProps = {
  title: string;
  description: string;
};

export default function AboutInfoCard({ title, description }: AboutInfoCardProps) {
  return (
    <div className="rounded-(--radius) border border-[#d4af37]/70 bg-(--bg-muted) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-semibold text-(--text) text-center mb-5 relative pb-2">
        {title}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-12 bg-[#d4af37] rounded" />
      </h3>

      <p className="text-sm text-(--text-muted) leading-7">{description}</p>
    </div>
  );
}