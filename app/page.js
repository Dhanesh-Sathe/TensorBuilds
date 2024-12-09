// pages/index.js
"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import useGsapAnimations from "./hooks/landing-animation";
import './globals.css'
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  useGsapAnimations();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return;
    }

    try {
      console.log("Sending request to /api/join-waitlist with email:", email);

      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("Response status:", response.status);

      // const data = await response.json();
      // console.log('Response data:', data);

      if (response.ok) {
        setMessage("Thank you for signing up!");
      } else {
        setError("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div>
      <div className="bgcolor lg:h-[700px] md:h-[500px]">
      <div className="text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <img id="animated-logo" src="/next.svg" alt="Logo" className="invert" /> */}
            <span id="animated-name" className=" text-3xl tracking-wide font-bold font-inter" >TenserBuilds</span>
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="hidden gap-5 mr-5 lg:flex space-x-4 font-semibold">
            <Link id="animated-btn" href="#feature1" className="hover:text-purple-500 tracking-wide font-medium font-inter transition-colors duration-300">Home</Link>
            <Link id="animated-btn" href="#feature2" className="hover:text-purple-500 tracking-wide font-medium font-inter transition-colors duration-300">Features</Link>
            <Link id="animated-btn" href="#feature3" className="hover:text-purple-500 tracking-wide font-medium font-inter transition-colors duration-300">Contact</Link>
            <Link id="animated-btn" href="#feature4" className="hover:text-purple-500 tracking-wide font-medium font-inter transition-colors duration-300">About</Link>
          </div>
          {!session ? (
            <div className="hidden lg:flex space-x-4"> 
              <Link id='animated-auth-btn' href="/login" className="bg-white text-black tracking-normal font-sans font-semibold px-3 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">Login</Link>
              <Link id = 'animated-auth-btn' href="/signup" className="bg-white text-black px-3 py-2 tracking-normal font-sans font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">Sign Up</Link>
            </div>
          ) : (
            <div className="hidden md:flex space-x-4 items-center">
              <span>{session.user?.email}</span>
              <button onClick={() => signOut()} className="bg-white text-black font-inter font-bold px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-colors duration-300">Logout</button>
            </div>
          )}
          <button onClick={toggleMenu} className="block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4">
          <Link id="animated-btn" href="#feature1" className="hover:text-purple-500 transition-colors duration-300">Home</Link>
          <Link id="animated-btn" href="#feature2" className="hover:text-purple-500 transition-colors duration-300">Features</Link>
          <Link id="animated-btn" href="#feature3" className="hover:text-purple-500 transition-colors duration-300">Contact</Link>
          <Link id="animated-btn" href="#feature4" className="hover:text-purple-500 transition-colors duration-300">About</Link>
          {!session ? (
            <>
              <Link id = 'animated-auth-btn' href="/login" className="bg-white text-black px-3 py-2 font-sans font-semibold rounded-lg  hover:bg-purple-500 hover:text-white transition-colors duration-300">Login</Link>
              <Link id = 'animated-auth-btn' href="/signup" className="bg-white text-black px-3 py-2 font-sans font-semibold rounded-lg  hover:bg-purple-500 hover:text-white transition-colors duration-300">Sign Up</Link>
            </>
          ) : (
            <>
              <span>{session.user?.email}</span>
              <button onClick={() => signOut()} className="bg-white text-black font-semibold font-sans px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition-colors duration-300">Logout</button>
            </>
          )}
        </div>
      )}
    </div>



    <div className="flex flex-col overflow-x-hidden">
      <Head>
        <title>Landing</title>
        <meta name="description" content="Your landing description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center  relative">
        <h1
          id="animated-h1"
          className="text-4xl font-dm tracking-tight md:text-7xl lg:text-8xl font-bold text-center mt-5"
        >
          Launch a Product
        </h1>
        <h1
          id="animated-h1"
          className="text-4xl font-dm tracking-tight md:text-7xl lg:text-8xl mb-12 font-bold text-center"
        >
          With Ease
        </h1>
        {/* Responsive paragraph */}
        <p
          id="hero-description"
          className="text-center font-light font-inter text-lg md:text-xl lg:text-2xl mb-5 leading-relaxed md:leading-relaxed lg:leading-relaxed"
        >
          AI-driven insights, real-time advice,
          <br className="hidden font-inter md:block" /> and comprehensive tools
          tailored to <br className="hidden font-inter md:block" /> your unique
          journey.
        </p>

        {/* Responsive input and button */}
        <div
          id="flip-in-element"
          className="flex items-center justify-center flex-col md:flex-row gap-2 w-full md:w-auto mb-16"
        >
          <input
            className="bg-gray-900 text-white opacity-80 rounded-full h-12 p-2 md:p-3 lg:p-4 pl-5 md:pl-6 lg:pl-8 text-sm md:text-base lg:text-lg w-1/2 md:w-auto placeholder:text-blackwhite"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-white flex justify-center items-center font-inter font-normal h-12 hover:bg-purple-500 hover:drop-shadow-lg hover:text-white text-black p-2 md:p-3 lg:p-4 rounded-xl text-sm md:text-base lg:text-lg md:w-auto"
          >
            Join Waitlist
          </button>
        </div>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        {/* Ellipse SVG positioned below the button */}
      </main>
      
    </div>
    </div>

    <div className="bg-[#111827] p-10 lg:p-[100px]">
      {/* <h1 id="scale-in-element" className="p-[100px]">Hello World!!!</h1> */}
      <p  id="scale-in-element" className="text-center font-dm text-5xl lg:text-6xl font-semibold text-[#A855F7] mt-12 mb-20">
        The Challenges
      </p>

      <div className="space-y-8">
        <p id="scale-in-element" className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold text-[#B26EF2]">
          Lack of Financial Knowledge
        </p>
        <p id="scale-in-element" className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold text-[#B87EF0]">
          Overwhelming Information
        </p>
        <p id="scale-in-element" className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold text-[#C495F1]">
          Difficult to Apply Concepts
        </p>
        <p id="scale-in-element" className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold text-[#CEA8F4]">
          A Fun & Engaging Approach
        </p>
        <p id="scale-in-element" className="text-center text-2xl md:text-4xl lg:text-4xl font-semibold text-[#D6B7F4]">
          Master Your Finances Through Play
        </p>
      </div>

      <div className="flex justify-center items-center min-h-screen m-5">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[50px]">
          <div id="#wave-element-left" className="wave-element-left lg:h-[250px] lg:w-[400px] h-[150px] w-[300px] bg-white"></div>
          <div id="#wave-element-right" className="wave-element-right lg:h-[250px] lg:w-[400px] h-[150px] w-[300px] bg-white"></div>
          <div id="#wave-element-left" className="wave-element-left lg:h-[250px] lg:w-[400px] h-[150px] w-[300px] bg-white"></div>
          <div id="#wave-element-right" className="wave-element-right lg:h-[250px] lg:w-[400px] h-[150px] w-[300px] bg-white"></div>
        </div>
      </div>


    </div>

    <div className="w-full h-full bg-black">
        <footer className="bg-black ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 md:h-[50px] w-[100px]">
                <a href="/" className="flex items-center justify-around">
                  {/* <img src="/next.svg" className="invert mx-3" alt="product Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    TenserBuilds
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="/" className="hover:underline">
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://existence.technology/"
                        className="hover:underline"
                      >
                        Existence Website
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/existence-master"
                        className="hover:underline"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/existence-3/"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        White Paper Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024{" "}
                <a href="/" className="hover:underline">
                  Product
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex gap-8 mt-4 sm:justify-center sm:mt-0">
                <Image
                  src="/x.svg"
                  alt="X Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
                <Image
                  src="/youtube.svg"
                  alt="YouTube Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
