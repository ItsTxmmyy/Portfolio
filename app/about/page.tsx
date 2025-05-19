import Image from "next/image";
import imageToAdd from "@public/tommy.png";

export default function About() {
  return (
    <div className="p-8 text-white font-mono mt-20">
      <h1 className="font-extrabold text-center text-5xl">WELCOME TO MY WEBSITE</h1>

      <div className="flex flex-row items-center justify-center mt-10 px-4 space-x-6">
        <Image
          src={imageToAdd}
          alt="Tommy"
          className="border-2 border-white rounded-md"
          width={300}
          height={300}
        />
        <div className="max-w-md w-full p-6 bg-transparent shadow-none space-y-4 text-left">
          <p className="text-xl font-semibold">
            MAJOR: <span className="text-red-500">Informatics and Computer Science</span>
          </p>

          <p className="text-lg">
            I have developed a strong foundation in frontend web development, specializing in creating dynamic and user-friendly interfaces.
          </p>

          <p className="text-lg">
            As of this May, I will be joining a project called <span className="font-semibold text-red-500">Dear Diary</span> as a <span className="font-semibold">Frontend Developer</span> for the <span className="font-semibold">University of Iowa</span>.
          </p>
        </div>
      </div>



      <h1 className="font-extrabold text-center text-5xl mt-[500px]">EXPERIENCE</h1>

      {/* Card: Dear Diary */}
      <div className="max-w-2xl w-full mx-auto mt-8 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
          <div>
            <h3 className="font-medium text-zinc-50 text-center md:text-left">
              Frontend Developer Intern
            </h3>
            <p className="text-zinc-500 text-center md:text-left">
              University of Iowa - Dear Diary Project
            </p>
          </div>
        </div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="px-4 py-2 text-sm rounded-full font-bold bg-zinc-50 hover:bg-zinc-300 text-black mt-4 md:mt-0">
          Open
        </button>
        </a>
      </div>

      {/* Card: Alli Center */}
      <div className="max-w-2xl w-full mx-auto mt-4 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
          <div>
            <h3 className="font-medium text-zinc-50 text-center md:text-left">
              Software Developer Intern
            </h3>
            <p className="text-zinc-500 text-center md:text-left">
              Alli Center
            </p>
          </div>
        </div>
        <a
          href="https://www.alli-center.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="px-4 py-2 text-sm rounded-full font-bold bg-zinc-50 hover:bg-zinc-300 text-black mt-4 md:mt-0">
          Open
        </button>
        </a>
      </div>

      
      <h1 className="font-extrabold text-center text-5xl mt-[500px]">FROM THE PROJECTS</h1>

      {/* Card: Portfolio */}
      <div className="max-w-2xl w-full mx-auto mt-8 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
          <div>
            <h3 className="font-medium text-zinc-50 text-center md:text-left">
              This Website
            </h3>
            <p className="text-zinc-500 text-center md:text-left">
              My Personal Website
            </p>
          </div>
        </div>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="px-4 py-2 text-sm rounded-full font-bold bg-zinc-50 hover:bg-zinc-300 text-black mt-4 md:mt-0">
          Open
        </button>
        </a>
      </div>

      {/* Card: Capstone Project */}
      <div className="max-w-2xl w-full mx-auto mt-8 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
          <div>
            <h3 className="font-medium text-zinc-50 text-center md:text-left">
              CareerQuest
            </h3>
            <p className="text-zinc-500 text-center md:text-left">
              University of Iowa - Informatics Capstone Project
            </p>
          </div>
        </div>
        <a
          href="https://github.com/longmagnolia/CS3910_capstone_project"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="px-4 py-2 text-sm rounded-full font-bold bg-zinc-50 hover:bg-zinc-300 text-black mt-4 md:mt-0">
          Open
        </button>
        </a>
      </div>

      {/* Card: HCI Project */}
      <div className="max-w-2xl w-full mx-auto mt-8 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-zinc-800 rounded-xl cursor-pointer transition-colors">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start">
          <div>
            <h3 className="font-medium text-zinc-50 text-center md:text-left">
              One Stop Cinema
            </h3>
            <p className="text-zinc-500 text-center md:text-left">
              University of Iowa - Human Computer Interaction Project
            </p>
          </div>
        </div>
        <a
          href="https://github.com/ItsTxmmyy/One-Stop-Cinema"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="px-4 py-2 text-sm rounded-full font-bold bg-zinc-50 hover:bg-zinc-300 text-black mt-4 md:mt-0">
          Open
        </button>
        </a>
      </div>

    </div>
  );
}
