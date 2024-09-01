import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`h-[calc(100vh-80px)] flex flex-col items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-5 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <h1 className="text-5xl">About Tools Hub</h1>
      <p className="text-base">
        This website offers you to access wide variety of tools that you need in your daily life at one place. Imagine a world
        where all the tools you need for your daily life are at your fingertips. No more searching for the right app, struggling
        with complicated interfaces, or wasting time trying to find what you need. Introducing ToolsHub, your one-stop shop
        for everything you need to get things done. <br /><br />
        ToolsHub is a revolutionary platform that brings together all the essential tools you use every day, seamlessly integrated into
        a single, intuitive interface. Whether you need to manage your finances, stay organized, communicate with friends and family,
        or simply get creative, ToolsHub has you covered. <br /><br />
        With ToolsHub, you'll have more time, less stress, and more freedom to focus on what matters most. So why wait?
        Sign up today and start experiencing the power of having all your essential tools in one place! <br /><br />
        <strong>Note - </strong> While this project is an exciting endeavor aiming to improve daily life, it's important to remember that its
        purpose is solely for individual use and not for commercial gain. Any content included will strictly adhere to copyright
        regulations and respect the intellectual property of others. If any copyrighted material appears, it will be handled
        sensitively and removed promptly to ensure ethical and legal compliance. This project ultimately strives to empower
        individuals with useful tools within the boundaries of responsible content usage.

      </p>
    </div>
  )
}

export default About