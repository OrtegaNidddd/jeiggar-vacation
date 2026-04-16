import type { MedicalCategoryItem } from "@/domain/types/MedicalAssistance";
import { MedicalCategoryCard } from "./MedicalCategoryCard";

type MedicalCategoriesGridProps = {
  categories: MedicalCategoryItem[];
};

export const MedicalCategoriesGrid = ({
  categories,
}: MedicalCategoriesGridProps) => {
  return (
    <section className="border-b border-(--border) bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <div key={category.id} data-aos="fade-up" data-aos-delay={index * 80}>
              <MedicalCategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};