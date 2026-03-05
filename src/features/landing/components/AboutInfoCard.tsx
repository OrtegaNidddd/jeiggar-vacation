type AboutInfoCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function AboutInfoCard({
  title,
  description,
  icon,
}: AboutInfoCardProps) {
  return (
    <div
      className="rounded-(--radius) border border-(--border) p-6 bg-(--bg-muted) shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:border-(--primary)"
    >
      {/* Icono + titulo */}
      <div className="text-center">

        <img
          src={icon}
          alt={title}
          className="w-12 h-12 mx-auto mb-4"
        />

        <h3 className="text-lg font-semibold text-(--text)">
          {title}
        </h3>

      </div>

      {/* Descripción */}
      <p className="mt-4 text-sm text-(--text-muted) leading-6 text-justify">
        {description}
      </p>

    </div>
  );
}