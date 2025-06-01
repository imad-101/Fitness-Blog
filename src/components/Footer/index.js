"use client";
import React from "react";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  return (
    <footer className="relative mt-32 bg-teal-50 backdrop-blur-sm ">
      {/* Elegant wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 transform rotate-180"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50/80 text-teal-600 text-sm font-medium mb-8">
            <span className="mr-2">🎯</span>
            Transform Your Fitness Journey
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Get
            <span className="block text-transparent bg-clip-text bg-teal-600">
              AI-Powered Results?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join thousands who've transformed their fitness with personalized AI
            workout plans. Your perfect workout is just one click away.
          </p>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-teal-600/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link
              href="/workout-generator"
              className="relative inline-flex items-center px-12 py-5 bg-teal-600 hover:bg-teal-700
                       text-white font-bold text-lg rounded-2xl transition-all duration-300
                       focus:outline-none focus:ring-4 focus:ring-teal-500/50"
            >
              <span className="mr-3 text-2xl">✨</span>
              Generate My Workout Plan
              <svg
                className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-500">
            <div className="flex items-center text-sm">
              <span className="mr-2">🏆</span>
              <span>10,000+ Success Stories</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-2">⚡</span>
              <span>AI-Powered Results</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-2">🎯</span>
              <span>Personalized Plans</span>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-teal-100/50">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 FitnessBlog. All rights reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-teal-600 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-teal-600 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-teal-600 transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
