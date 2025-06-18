// Footer.jsx
const Footer = () => (
    <footer className="relative bg-black/30 backdrop-blur-md text-white py-10 text-center z-10">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.19C857.09 103.93 728.52 108.36 600 100.23 471.48 92.1 342.91 71.41 214.34 64.41 142.89 60.35 71.45 64.61 0 72V0h1200v87.5c-71.45-10.66-142.89-13.67-214.34-4.31z"
            fill="#0f172a"
          />
        </svg>
      </div>
      <p className="text-sm mt-10 z-10 relative">Made with 💚 by Hariharan A</p>
      <div className="flex justify-center gap-6 mt-4 text-xl text-green-400">
        <a href="https://github.com/Hariharan09" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/hariharan-a-aa0b60141" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
  
  export default Footer;