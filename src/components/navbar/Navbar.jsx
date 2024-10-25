import React, { useContext, useEffect, useState } from "react";
import Button from "../../designs/Button";
import Toggle from "../toogle/Toggle";
import { ThemeContext } from "../../theme/Context";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  let [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: 0 },
  };
  const { theme, handleTheme } = useContext(ThemeContext);
  function handleScroll() {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <div
      className={
        scroll
          ? "wrapper w-full fixed top-0 left-0 z-20 rounded-md bg-clip-padding backdrop-filter transition duration-1000 ease-in-out backdrop-blur-md bg-blue-900 bg-opacity-10 flex"
          : "flex"
      }
    >
      <div className="nav-left">
        <h1
          className={
            theme === "light"
              ? "text-3xl font-RussoOne"
              : "text-3xl text-white font-RussoOne"
          }
        >
          Portfolio
        </h1>
        <div className="toggle">
          <Toggle />
        </div>
      </div>
      <div className="nav-right">
        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
          {isMobileMenuOpen ? (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <title>cross-circle</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-570.000000, -1089.000000)"
                  fill="#000000"
                >
                  <path
                    d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z"
                    id="cross-circle"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#000000"
                fill-rule="evenodd"
                d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z"
              />
            </svg>
          )}
        </button>

        <div className="menu">
          <ul className="flex gap-6 desktop-menu">
            <Link activeClass="active" to="Home" spy={true} smooth={true}>
              <li
                className={
                  theme === "light"
                    ? "font-bold font-Prociono hover:text-orange"
                    : "text-white font-bold font-Prociono hover:text-orange"
                }
              >
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              offset={-120}
              smooth={true}
            >
              <li
                className={
                  theme === "light"
                    ? "font-bold font-Prociono hover:text-orange"
                    : "text-white font-bold font-Prociono hover:text-orange"
                }
              >
                Services
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Experience"
              spy={true}
              offset={-180}
              smooth={true}
            >
              <li
                className={
                  theme === "light"
                    ? "font-bold font-Prociono hover:text-orange"
                    : "text-white font-bold font-Prociono hover:text-orange"
                }
              >
                Experience
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              offset={-70}
              smooth={true}
            >
              <li
                className={
                  theme === "light"
                    ? "font-bold font-Prociono hover:text-orange"
                    : "text-white font-bold font-Prociono hover:text-orange"
                }
              >
                Portfolio
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Testimonials"
              spy={true}
              offset={-50}
              smooth={true}
            >
              <li
                className={
                  theme === "light"
                    ? "font-bold font-Prociono hover:text-orange"
                    : "text-white font-bold font-Prociono hover:text-orange"
                }
              >
                Testimonials
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              className="mobile-menu shadow-smbox bg-white flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.5 }}
            >
              {[
                "Home",
                "Services",
                "Experience",
                "Portfolio",
                "Testimonials",
              ].map((section, index) => (
                <Link
                  key={section}
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={index * -30} // adjust offset based on your need
                  onClick={() => setMobileMenuOpen(false)} // close menu on click
                >
                  <li
                    className={
                      theme === "light"
                        ? "font-bold font-Prociono hover:text-orange"
                        : "text-white font-bold font-Prociono hover:text-orange"
                    }
                  >
                    {section}
                  </li>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="button button-nav">
          <Button beforeText="Contact&nbsp;Us" afterText="yes!&nbsp;Contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
