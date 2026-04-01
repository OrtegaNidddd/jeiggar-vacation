import type { ConnectivityLegalContent } from "@/domain/types/Connectivity";

type ConnectivityLegalNoticeProps = {
  content: ConnectivityLegalContent;
};

export const ConnectivityLegalNotice = ({
  content,
}: ConnectivityLegalNoticeProps) => {
  return (
    <section className="bg-(--bg-muted)">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
        <div className="rounded-[24px] border border-(--border) bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-(--text-muted)">
            {content.text}
          </p>
        </div>
      </div>
    </section>
  );
};