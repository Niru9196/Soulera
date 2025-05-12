export default function Hero() {
    return (
        <section
            className="text-center py-20 px-4"
            aria-labelledby="hero-heading"
            role="region"
        >
            <h1 id="hero-heading" className="sr-only">
                Hero Section
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold">
                Start Crafting Your
                <br />
                <span className="text-blue-600 tracking-wide">
                    Next Great Idea
                </span>
            </h1>

            <p className="mt-7 max-w-[650px] mx-auto text-lg sm:text-xl md:text-2xl">
                Simplifying the creation of landing pages, blog pages,
                application pages, and so much more!
            </p>

            <div className="mt-8 flex flex-col items-center space-y-4">
                <div className="relative inline-block">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg"
                        aria-label="Purchase Now"
                    >
                        Purchase Now
                    </button>
                    <span className="absolute -top-2 -right-5 text-sm text-white bg-green-600 px-2 rounded-full">
                        only $15/mon
                    </span>
                </div>

                <button
                    className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg"
                    aria-label="Learn More"
                >
                    Learn More
                </button>
            </div>
        </section>
    );
}
