"use client";
import React from "react";

function MainComponent() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [activeCategory, setActiveCategory] = useState("Helper");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const categoryScrollRef = React.useRef(null);
  const slideImages = [
    {
      src: "/gothic-character.jpg",
      title: "Gothic Character",
      messages: "2.1K",
      subtitle: "Dark mystery awaits",
    },
    {
      src: "/asian-temple.jpg",
      title: "Asian Temple",
      messages: "1.4K",
      subtitle: "Spiritual journey",
    },
    {
      src: "/barber-shop.jpg",
      title: "Barber Shop Sim.",
      messages: "703",
      subtitle: "Classic grooming",
      highlighted: true,
    },
    {
      src: "/anime-char.jpg",
      title: "Anime Character",
      messages: "4.2K",
      subtitle: "Japanese animation",
    },
    {
      src: "/dark-knight.jpg",
      title: "Batman",
      messages: "9.1K",
      subtitle: "Gotham's hero",
    },
    {
      src: "/sci-fi-world.jpg",
      title: "Sci-Fi World",
      messages: "5.6K",
      subtitle: "Future exploration",
    },
    {
      src: "/medieval-knight.jpg",
      title: "Medieval Knight",
      messages: "3.2K",
      subtitle: "Epic adventures",
    },
    {
      src: "/cyberpunk-city.jpg",
      title: "Cyberpunk City",
      messages: "7.8K",
      subtitle: "Neon dreams",
    },
  ];
  const categories = [
    { label: "⭐ Recommend", value: "Recommend" },
    { label: "Play & Fun", value: "PlayFun" },
    { label: "Helper", value: "Helper", active: true },
    { label: "Original", value: "Original" },
    { label: "Anime & Game", value: "AnimeGame" },
    { label: "Fiction & Media", value: "FictionMedia" },
    { label: "Icon", value: "Icon" },
    { label: "Education", value: "Education" },
    { label: "Technology", value: "Technology" },
    { label: "Arts & Creativity", value: "Arts" },
    { label: "Business", value: "Business" },
    { label: "Writing", value: "Writing" },
    { label: "Lifestyle", value: "Lifestyle" },
  ];
  const featuredContent = [
    {
      section: "Featured Characters",
      items: [
        {
          title: "Blog Post Writer",
          img: "/robot-writer.jpg",
          views: "623",
          desc: "An AI-powered writing assistant that helps you create engaging blog posts",
          time: "12s",
          rating: 4.8,
          new: true,
        },
        {
          title: "Psychic Ana",
          img: "/psychic-reader.jpg",
          views: "1.3K",
          desc: "Your spiritual guide for tarot readings and metaphysical insights",
          time: "1.3K",
          rating: 4.9,
          featured: true,
        },
        {
          title: "Team Magician",
          img: "/team-coach.jpg",
          views: "468",
          desc: "Transform your team dynamics with collaborative magic",
          time: "468",
          rating: 4.7,
        },
        {
          title: "French Teacher",
          img: "/language-tutor.jpg",
          views: "4.5K",
          desc: "Master French with a native speaker AI tutor",
          time: "4.5K",
          rating: 4.9,
          trending: true,
        },
      ],
    },
    {
      section: "Trending Characters",
      items: [
        {
          title: "ADHD Coach",
          img: "/adhd-helper.jpg",
          views: "11.4K",
          desc: "Your personal ADHD management companion",
          time: "11.4K",
          rating: 4.8,
          hot: true,
        },
        {
          title: "Math Tutor Sharon",
          img: "/math-tutor.jpg",
          views: "2.1K",
          desc: "Making mathematics fun and easy to understand",
          time: "2.1K",
          rating: 4.6,
        },
      ],
    },
  ];
  const exploreCategories = [
    {
      name: "AI Assistants",
      count: "5.2K",
      icon: "fas fa-robot",
      trending: true,
    },
    {
      name: "Language Learning",
      count: "3.8K",
      icon: "fas fa-language",
      hot: true,
    },
    {
      name: "Creative Writing",
      count: "2.9K",
      icon: "fas fa-pen-fancy",
      new: true,
    },
    {
      name: "Personal Growth",
      count: "4.1K",
      icon: "fas fa-brain",
      featured: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans">
      <aside
        className={`fixed top-0 left-0 h-full z-40 flex flex-none flex-col ${
          isSidebarOpen ? "w-[200px]" : "w-[60px]"
        } bg-[#121212] text-[#999] px-2 py-6 border-r border-[#222] transition-all duration-300`}
      >
        <div
          className={`flex items-center gap-2 mb-8 ${
            !isSidebarOpen && "justify-center"
          }`}
        >
          {isSidebarOpen && (
            <span className="text-2xl font-bold text-white">talkie</span>
          )}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <i className="fas fa-layer-group text-white"></i>
          </div>
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-[#121212] border border-[#222] flex items-center justify-center hover:bg-[#1a1a1a] transition-colors group z-50"
        >
          <i
            className={`fas ${
              isSidebarOpen ? "fa-chevron-left" : "fa-chevron-right"
            } text-xs group-hover:text-indigo-400 transition-colors`}
          ></i>
        </button>

        <button
          className={`flex items-center ${
            !isSidebarOpen ? "justify-center" : "gap-2"
          } text-sm font-medium mb-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg p-2.5 w-full transition-all duration-300 shadow-lg shadow-purple-500/20`}
        >
          <i className="fas fa-plus"></i>
          {isSidebarOpen && "Create a Talkie"}
        </button>

        <nav className="flex-grow space-y-1.5">
          <div
            className={`flex items-center ${
              !isSidebarOpen ? "justify-center" : "gap-2"
            } p-2.5 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-white border border-indigo-500/20`}
          >
            <i className="fas fa-compass"></i>
            {isSidebarOpen && <span className="font-medium">Discover</span>}
          </div>
          <div
            className={`flex items-center ${
              !isSidebarOpen ? "justify-center" : "gap-2"
            } p-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer group`}
          >
            <i className="fas fa-search group-hover:text-indigo-400 transition-colors"></i>
            {isSidebarOpen && (
              <span className="group-hover:text-white transition-colors">
                Search
              </span>
            )}
          </div>
          <div
            className={`flex items-center ${
              !isSidebarOpen ? "justify-center" : "gap-2"
            } p-2.5 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer group`}
          >
            <i className="fas fa-brain group-hover:text-indigo-400 transition-colors"></i>
            {isSidebarOpen && (
              <span className="group-hover:text-white transition-colors">
                Memory
              </span>
            )}
          </div>
        </nav>

        {isSidebarOpen && (
          <div className="mt-6 px-2.5 pb-2 text-xs uppercase font-medium tracking-wider text-[#666]">
            Chats
          </div>
        )}
      </aside>
      <div className={`flex-1 ${isSidebarOpen ? "pl-[200px]" : "pl-[60px]"}`}>
        <div className="max-w-[1600px] mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
            <div className="relative w-full lg:w-[300px] lg:sticky lg:top-6">
              <h1 className="text-2xl md:text-3xl mb-2 flex items-center gap-2">
                Are you ... <span className="animate-pulse">✨</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Down for adventures?
              </h2>
              <div className="flex gap-4">
                {["😊", "🤓", "😈", "🤪"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] hover:bg-[#222] flex items-center justify-center text-xl md:text-2xl cursor-pointer transition-all hover:scale-110"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-[1400px] h-[400px] md:h-[500px] rounded-2xl bg-[#121212] overflow-hidden">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              <button
                onClick={() =>
                  setCurrentSlide(
                    Math.min(slideImages.length - 1, currentSlide + 1)
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
              <div className="flex h-full items-center justify-center">
                <div
                  className="flex gap-8 transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${
                      -(currentSlide * 256) + window.innerWidth / 2 - 120
                    }px)`,
                  }}
                >
                  {slideImages.map((slide, i) => (
                    <div
                      key={i}
                      className="relative min-w-[240px] h-[400px] transition-all duration-700 ease-in-out cursor-pointer"
                      onClick={() => setCurrentSlide(i)}
                    >
                      <div
                        className={`relative h-full rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
                          i === currentSlide
                            ? "scale-110 shadow-xl shadow-purple-500/30 border-2 border-purple-500/50"
                            : Math.abs(i - currentSlide) === 1
                            ? "scale-100"
                            : "scale-95 opacity-50"
                        }`}
                      >
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm">
                          <div className="transition-all duration-700 ease-in-out">
                            <div className="font-bold text-lg md:text-xl mb-1">
                              {slide.title}
                            </div>
                            <div className="text-sm text-gray-200 mb-2">
                              {slide.subtitle}
                            </div>
                            <div className="text-sm flex items-center gap-2">
                              <i className="fas fa-comment text-purple-400"></i>
                              <span className="text-purple-300">
                                {slide.messages}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {slideImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-700 ${
                      i === currentSlide
                        ? "bg-purple-500 w-4"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold">For You</h3>
              <span className="animate-pulse">✨</span>
            </div>

            <div
              className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar"
              ref={categoryScrollRef}
            >
              {categories.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveCategory(value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === value
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      : "bg-[#1a1a1a] hover:bg-[#222] text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {featuredContent.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-200">
                    {section.section}
                  </h4>
                  <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    View All <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="group bg-[#121212] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#222] hover:border-[#333]"
                    >
                      <div className="relative aspect-[3/2]">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="text-sm flex items-center gap-1">
                              <i className="fas fa-clock"></i> {item.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <i className="fas fa-eye"></i> {item.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="fas fa-star text-yellow-500"></i>{" "}
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Popular Categories</h3>
              <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                View All <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {exploreCategories.map((category, i) => (
                <div
                  key={i}
                  className="bg-[#121212] p-4 rounded-xl hover:bg-[#1a1a1a] cursor-pointer transition-all border border-[#222] hover:border-[#333] group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i
                      className={`${category.icon} text-gray-400 group-hover:text-indigo-400 transition-colors`}
                    ></i>
                    <h4 className="font-medium text-sm">{category.name}</h4>
                  </div>
                  <span className="text-xs text-gray-500">
                    {category.count} Talkies
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;