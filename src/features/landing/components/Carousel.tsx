import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { carouselLandingMock } from "@/mocks/landing";

function getVisibleCards(width: number) {
	if (width >= 1024) {
		return 4;
	}

	if (width >= 640) {
		return 3;
	}

	return 2;
}

export default function Carousel() {
	const { title, username, usernameUrl, autoplayMs, slides } = carouselLandingMock;
	const [visibleCards, setVisibleCards] = useState(() =>
		typeof window !== "undefined" ? getVisibleCards(window.innerWidth) : 2,
	);
	const [activeIndex, setActiveIndex] = useState(0);
	const maxStartIndex = useMemo(
		() => Math.max(0, slides.length - visibleCards),
		[slides.length, visibleCards],
	);
	const currentIndex = Math.min(activeIndex, maxStartIndex);

	useEffect(() => {
		const onResize = () => {
			setVisibleCards(getVisibleCards(window.innerWidth));
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	useEffect(() => {
		if (slides.length <= 1) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setActiveIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
		}, autoplayMs);

		return () => window.clearInterval(intervalId);
	}, [autoplayMs, maxStartIndex, slides.length]);

	const goPrevious = () => {
		setActiveIndex(currentIndex <= 0 ? maxStartIndex : currentIndex - 1);
	};

	const goNext = () => {
		setActiveIndex(currentIndex >= maxStartIndex ? 0 : currentIndex + 1);
	};

	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl rounded-(--radius) bg-(--bg-muted) px-4 py-12 sm:px-6 md:px-8">
				<header className="mb-8 text-center">
					<h2 data-aos="fade-up" className="text-2xl font-bold text-(--text)">
						{title}
					</h2>
					<p data-aos="fade-up" data-aos-delay="80" className="mt-2 text-xl text-(--primary-800)">
						<a
							href={usernameUrl}
							target="_blank"
							rel="noreferrer noopener"
							className="underline-offset-4 transition hover:underline"
						>
							{username}
						</a>
					</p>
				</header>

				<div className="relative">
					<div className="overflow-hidden">
						<div
							data-aos="fade-up"
							className="flex transition-transform duration-700 ease-out"
							style={{
								transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
							}}
						>
							{slides.map((slide) => (
								<div key={slide.id} className="shrink-0 px-1 md:px-1.5" style={{ width: `${100 / visibleCards}%` }}>
									<article className="group relative aspect-square overflow-hidden rounded-sm border border-white/60">
										<img
											src={slide.image}
											alt={slide.alt}
											loading="lazy"
											className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
										/>
									</article>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 flex items-center justify-center gap-2">
					<button
						type="button"
						aria-label="Ver imagen anterior"
						onClick={goPrevious}
						className="inline-flex rounded-full border border-(--border) bg-white px-3 py-2 text-(--text)"
					>
						<ChevronLeft size={16} />
					</button>
					<button
						type="button"
						aria-label="Ver imagen siguiente"
						onClick={goNext}
						className="inline-flex rounded-full border border-(--border) bg-white px-3 py-2 text-(--text)"
					>
						<ChevronRight size={16} />
					</button>
				</div>

				<div className="mt-6 flex justify-center gap-2">
					{Array.from({ length: maxStartIndex + 1 }, (_, index) => (
						<button
							key={index}
							type="button"
							aria-label={`Ir a la imagen ${index + 1}`}
							onClick={() => setActiveIndex(index)}
							className={`h-2.5 rounded-full transition ${
								index === currentIndex ? "w-6 bg-(--primary-700)" : "w-2.5 bg-(--text-muted)/35"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
