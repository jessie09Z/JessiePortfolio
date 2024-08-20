"use client"
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/magicButton";

const Footer = () => {
    return (
      <footer className="w-full mb-[100px] pb-10 relative" id="contact">
     
  
        <div className="flex flex-col items-center relative">
          <h1 className="heading lg:max-w-[45vw]">
          Looking for a skilled and dedicated developer to join your team?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m ready to bring my expertise in full-stack development to your next project. Let&apos;s connect and explore how I can contribute to your company's success.
  
          
          </p>
          <a target="_blank" href="https://www.linkedin.com/in/jessie-zhang-a724392aa/">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        
        {/* Use flex for both horizontal and vertical centering */}
        <div className="flex flex-col  justify-between items-center mt-16">
          <p className="py-5 md:text-base text-sm md:font-normal font-light text-center md:text-left">
            Copyright © 2024 Jessie Zhang
          </p>
  
          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >   <a target="_blank" href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
             </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;