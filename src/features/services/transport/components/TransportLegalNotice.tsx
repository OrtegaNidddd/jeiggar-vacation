import type { TransportLegalContent } from "@/domain/types/Transport";

type TransportLegalNoticeProps = {
  content: TransportLegalContent;
};

export const TransportLegalNotice = ({
  content,
}: TransportLegalNoticeProps) => {
  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div data-aos="fade-up" className="rounded-[24px] border border-(--border) bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-(--text-muted)">
            {content.text}
          </p>
        </div>
      </div>
    </section>
  );
};