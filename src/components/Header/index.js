"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/workouts", label: "Workouts" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-teal-100/50 mb-8 sm:mb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* CTA Button */}
            <Link
              href="/workout-generator"
              className="inline-flex items-center px-6 py-2.5 bg-teal-600 hover:bg-teal-700
                       text-white font-medium rounded-lg transition-all duration-200"
            >
              AI Workout Generator
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-teal-600 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm ${
                            click
                              ? "rotate-45 translate-y-1"
                              : "-translate-y-0.5"
                          }`}
              />
              <span
                className={`bg-teal-600 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm my-0.5 ${
                            click ? "opacity-0" : "opacity-100"
                          }`}
              />
              <span
                className={`bg-teal-600 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm ${
                            click
                              ? "-rotate-45 -translate-y-1"
                              : "translate-y-0.5"
                          }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          click ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-white border-t border-teal-100/50">
          {/* Mobile CTA Button */}
          <Link
            href="/workout-generator"
            className="flex items-center justify-center w-full px-4 py-3 mb-4 
                     bg-teal-600 hover:bg-teal-700 text-white font-medium 
                     rounded-lg transition-all duration-200"
            onClick={() => setClick(false)}
          >
            AI Workout Generator
          </Link>

          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-gray-600 hover:text-teal-600 
                       hover:bg-teal-50 rounded-lg font-medium transition-colors duration-200"
              onClick={() => setClick(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
