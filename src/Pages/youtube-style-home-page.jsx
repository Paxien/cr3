'use client';

import React, { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
  useToast
} from '@lshay/ui/components/default';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSearch,
  faBars,
  faChevronLeft,
  faPlay,
  faCheckCircle,
  faVideo,
  faBell,
  faChevronRight,
  faCompass,
  faFolder,
  faHistory,
  faClock,
  faThumbsUp,
  faFire,
  faMusic,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function MainComponentContent() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(window.innerWidth > 1024);

    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = ["All", "Live", "Gaming", "Music", "Sports"];
  const sidebarItems = [
    { icon: faHome, label: "Home", active: true },
    { icon: faCompass, label: "Explore" },
    { icon: faPlay, label: "Shorts", badge: "New" },
    { icon: faFolder, label: "Library" },
    { icon: faHistory, label: "History" },
    { icon: faClock, label: "Watch Later", count: "12" },
    { icon: faThumbsUp, label: "Liked Videos", count: "48" },
    { icon: faFire, label: "Trending" },
    { icon: faMusic, label: "Music" },
    { icon: faGamepad, label: "Gaming" },
  ];
  const videos = Array.from({ length: 12 })
    .fill()
    .map((_, i) => ({
      id: `video-${i}`,
      title: `Amazing Video Title ${i + 1} - Must Watch!`,
      channel: `Popular Channel ${i + 1}`,
      views: `${Math.floor(Math.random() * 10)}M views`,
      timestamp: `${Math.floor(Math.random() * 4) + 1} ${
        ["hour", "day", "week", "month"][Math.floor(Math.random() * 4)]
      }${Math.random() > 0.5 ? "s" : ""} ago`,
      duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(
        Math.random() * 60
      )
        .toString()
        .padStart(2, "0")}`,
      thumbnail: `/images/thumbnail-${(i % 4) + 1}.jpg`,
      verified: Math.random() > 0.5,
      live: Math.random() > 0.8,
      views_count: Math.floor(Math.random() * 1000000),
    }));
  const videoSections = [
    {
      title: "Recommended",
      videos: videos.sort((a, b) => b.views_count - a.views_count).slice(0, 8),
    },
    { title: "Trending Now", videos: videos.slice(4, 12) },
    { title: "Recently Uploaded", videos: videos.slice(2, 10) },
  ];
  const handleSearch = useCallback(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate search
      setTimeout(() => {
        setIsSearching(false);
        toast({
          title: "Search Results",
          description: `Found results for "${searchQuery}"`,
          duration: 3000,
        });
      }, 1000);
    }
  }, [searchQuery]);
  const handleVideoClick = useCallback((video) => {
    toast({
      title: "Video Selected",
      description: `Playing: ${video.title}`,
      duration: 2000,
    });
  }, []);
  const handleHeaderScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      document.querySelector("header").classList.add("bg-[#0f0f0f]");
    } else {
      document.querySelector("header").classList.remove("bg-[#0f0f0f]");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);
    return () => window.removeEventListener("scroll", handleHeaderScroll);
  }, [handleHeaderScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#2d2d2d] overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-[#ffffff05] backdrop-blur-xl border-b border-[#ffffff20] transition-colors duration-300">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#ffffff20]"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 text-red-600" />
              <span className="text-white font-medium">YouTube</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-[#ffffff08] border border-[#ffffff20] rounded-full py-2 px-4 text-white placeholder-[#ffffff80] focus:outline-none focus:border-blue-500"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff80] hover:text-white"
              >
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#ffffff20]"
            >
              <FontAwesomeIcon icon={faVideo} className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#ffffff20]"
            >
              <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full overflow-hidden hover:bg-[#ffffff20]"
                >
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#ffffff05] backdrop-blur-xl border-[#ffffff20] text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#ffffff20]" />
                <DropdownMenuItem onClick={() => toast({ title: "Profile clicked" })}>
                  <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast({ title: "Settings clicked" })}>
                  <FontAwesomeIcon icon={faCompass} className="h-5 w-5 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toast({ title: "Help clicked" })}>
                  <FontAwesomeIcon icon={faQuestionCircle} className="h-5 w-5 mr-2" />
                  Help
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#ffffff20]" />
                <DropdownMenuItem onClick={() => toast({ title: "Sign out clicked" })}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {isSidebarOpen && (
          <aside className="fixed left-0 w-48 h-screen bg-[#ffffff05] backdrop-blur-xl border-r border-[#ffffff20] overflow-y-auto">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 px-4 py-2 text-[#ffffffcc] hover:bg-[#ffffff20] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </aside>
        )}

        <div
          className={`flex-1 ${
            isSidebarOpen ? "ml-48" : "ml-0"
          } transition-all duration-300 main-content max-w-full`}
        >
          <div className="sticky top-16 z-40 backdrop-blur-xl bg-[#ffffff05] border-b border-[#ffffff20]">
            <div className="px-4 py-4">
              <div className="flex justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full backdrop-blur-md ${
                      selectedCategory === category
                        ? "bg-[#ffffff20] text-white"
                        : "bg-[#ffffff10] text-[#ffffffcc] hover:bg-[#ffffff15]"
                    } transition-all font-roboto whitespace-nowrap`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <main className="px-2 lg:px-4 py-6 w-full">
            {videoSections.map((section) => (
              <div key={section.title} className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-roboto text-white">
                    {section.title}
                  </h2>
                  <button className="text-[#ffffffcc] hover:text-white text-sm font-roboto">
                    See all <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                  </button>
                </div>
                <div className="relative w-full">
                  <div className="grid auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-cols-fr gap-3 px-1">
                    {section.videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex-none group bg-[#ffffff08] backdrop-blur-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-[#ffffff15] cursor-pointer w-full"
                        onClick={() => handleVideoClick(video)}
                      >
                        <div className="relative aspect-video bg-[#ffffff10] overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center transition-opacity duration-300">
                            <FontAwesomeIcon icon={faPlay} className="text-white text-xl" />
                          </div>
                          {video.live ? (
                            <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-red-600 text-white text-[10px] rounded-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></span>
                              LIVE
                            </span>
                          ) : (
                            <span className="absolute bottom-2 right-2 px-1 py-0.5 bg-black text-white text-[10px] rounded">
                              {video.duration}
                            </span>
                          )}
                        </div>
                        <div className="p-2">
                          <h3 className="text-white font-medium mb-0.5 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm leading-tight">
                            {video.title}
                          </h3>
                          <div className="flex items-center">
                            <p className="text-[#ffffffcc] text-xs group-hover:text-white transition-colors duration-300 truncate">
                              {video.channel}
                              {video.verified && (
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 ml-1 text-[10px]" />
                              )}
                            </p>
                          </div>
                          <div className="flex text-[#ffffff80] text-xs mt-0.5">
                            <span className="truncate">{video.views}</span>
                            <span className="mx-1">•</span>
                            <span className="truncate">{video.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

const MainComponent = dynamic(() => Promise.resolve(MainComponentContent), {
  ssr: false
});

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1f1f] to-[#2d2d2d]">
      <MainComponent />
    </div>
  );
}