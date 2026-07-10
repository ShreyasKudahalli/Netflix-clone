const reasons = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "📺",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: "⬇️",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "🎤",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "😊",
  },
];

const Reasons = () => {
  return (
    <section className="px-4 py-12 sm:px-8 lg:px-16">
      <h2 className="mb-8 text-3xl font-bold text-white">
        More reasons to join
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex min-h-[320px] flex-col justify-between rounded-3xl bg-gradient-to-b from-[#1d2145] via-[#24162f] to-[#23121b] p-6"
          >
            <div>
              <h3 className="text-3xl font-bold leading-tight text-white">
                {reason.title}
              </h3>

              <p className="mt-6 text-xl leading-relaxed text-gray-400">
                {reason.description}
              </p>
            </div>

            <div className="flex justify-end text-6xl">
              {reason.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;