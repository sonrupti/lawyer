import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GoogleTranslate from "../GoogleTranslate";
import { 
  Scale, 
  Search, 
  Bell, 
  UserCircle,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { navbarData } from "../../data/navbarData";
import MegaDropdown from "./MegaDropdown";

export default function Navbar() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSections, setMobileOpenSections] = useState({});

  const navRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveIdx(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on focus outside
  useEffect(() => {
    const handleFocusOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveIdx(null);
      }
    };
    document.addEventListener("focusin", handleFocusOutside);
    return () => document.removeEventListener("focusin", handleFocusOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIdx(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileSection = (idx) => {
    setMobileOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-slate-950/70
      backdrop-blur-xl
      border-b border-cyan-500/20
    ">
      <div 
        ref={navRef}
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex items-center justify-between
          relative
        "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1">
          <div className="
            w-12 h-12
            rounded-xl
            bg-cyan-400/10
            border border-cyan-400/40
            flex items-center justify-center
            shadow-[0_0_20px_#06b6d4]
            group-hover:border-cyan-400
            transition
          ">
            <Scale 
              className="text-cyan-400 group-hover:scale-110 transition-transform"
              size={28}
            />
          </div>

          <div>
            <h1 className="
              text-2xl 
              font-bold
              text-cyan-400
              tracking-wider
            ">
              LEXARENA
            </h1>
            <p className="
              text-xs
              text-gray-400
              tracking-widest
            ">
              LEGAL GAMING HUB
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="
          hidden md:flex
          items-center
          gap-8
          text-gray-300
        ">
          {navbarData.map((item, idx) => {
            const isWide = item.columns.length > 1;
            
            const navLinkElement = (
              <button
                aria-expanded={activeIdx === idx}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="
                  flex items-center gap-1
                  font-medium
                  hover:text-cyan-400
                  transition
                  cursor-pointer
                  bg-transparent border-none outline-none py-2
                  focus-visible:text-cyan-400 focus-visible:outline-none
                  focus-visible:ring-1 focus-visible:ring-cyan-500/50 rounded px-1
                "
              >
                {item.title}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeIdx === idx ? "rotate-180 text-cyan-400" : "text-gray-400"
                  }`}
                />
              </button>
            );

            if (isWide) {
              // Wide mega menus align relative to the header inner container (which has class 'relative')
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  {navLinkElement}
                  <AnimatePresence>
                    {activeIdx === idx && (
                      <MegaDropdown
                        columns={item.columns}
                        align="full"
                        onItemClick={() => setActiveIdx(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            } else {
              // Narrow mega menus are positioned relative to their specific button container
              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  {navLinkElement}
                  <AnimatePresence>
                    {activeIdx === idx && (
                      <MegaDropdown
                        columns={item.columns}
                        align="center"
                        onItemClick={() => setActiveIdx(null)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            }
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="
          flex
          items-center
          gap-3 md:gap-5
        ">
            <GoogleTranslate />
          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-cyan-400
          ">
            <Search 
              size={20}
              className="text-cyan-400"
            />
          </button>

          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-cyan-400
          ">
            <Bell 
              size={20}
              className="text-cyan-400"
            />
          </button>

          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-cyan-400
          ">
            <UserCircle 
              size={22}
              className="text-cyan-400"
            />
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="
              md:hidden
              w-10 h-10
              rounded-lg
              border
              border-cyan-500/30
              flex
              items-center
              justify-center
              hover:bg-cyan-500/10
              transition
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400
            "
            aria-label="Open main menu"
          >
            <Menu 
              size={22}
              className="text-cyan-400"
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="
              fixed inset-0 z-50
              bg-slate-950/98
              backdrop-blur-2xl
              flex flex-col
              p-6
              overflow-y-auto
            "
          >
            {/* MOBILE DRAWER HEADER */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan-500/25">
              <div className="flex items-center gap-3">
                <div className="
                  w-10 h-10
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/40
                  flex items-center justify-center
                  shadow-[0_0_15px_#06b6d4]
                ">
                  <Scale 
                    className="text-cyan-400"
                    size={22}
                  />
                </div>
                <div>
                  <h2 className="
                    text-xl 
                    font-bold
                    text-cyan-400
                    tracking-wider
                  ">
                    LEXARENA
                  </h2>
                  <p className="
                    text-[10px]
                    text-gray-400
                    tracking-widest
                  ">
                    LEGAL GAMING HUB
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="
                  w-10 h-10
                  rounded-lg
                  border
                  border-cyan-500/30
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-500/10
                  transition
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-400
                "
                aria-label="Close menu"
              >
                <X 
                  size={22}
                  className="text-cyan-400"
                />
              </button>
            </div>

            {/* MOBILE ACCORDION LINKS */}
            <nav className="flex flex-col gap-2">
              {navbarData.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => toggleMobileSection(idx)}
                    className="
                      w-full
                      flex items-center justify-between
                      py-4
                      text-left
                      font-bold
                      text-gray-200
                      border-b border-cyan-500/10
                      hover:text-cyan-400
                      transition
                      focus-visible:outline-none
                      focus-visible:text-cyan-400
                    "
                    aria-expanded={!!mobileOpenSections[idx]}
                  >
                    <span className="text-base">{item.title}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileOpenSections[idx] ? "rotate-180 text-cyan-400" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileOpenSections[idx] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-slate-900/30 px-4 rounded-xl border border-cyan-500/5 my-2"
                      >
                        <div className="py-3 flex flex-col gap-5">
                          {item.columns.map((column, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-2">
                              <h3 className="
                                text-xs
                                font-bold
                                text-cyan-400
                                tracking-wider
                                uppercase
                                border-b border-cyan-500/10
                                pb-1
                                mt-2
                              ">
                                {column.heading}
                              </h3>
                              <div className="flex flex-col gap-1 pl-2">
                                {column.items.map((subItem, itemIdx) => (
                                  <Link
                                    key={itemIdx}
                                    to={subItem.path}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                    }}
                                    className="
                                      block
                                      py-2
                                      text-sm
                                      text-gray-400
                                      hover:text-cyan-400
                                      transition
                                      focus-visible:outline-none
                                      focus-visible:text-cyan-400
                                    "
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}