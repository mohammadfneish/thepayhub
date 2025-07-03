// "use client"; // Ensure this runs as a Client Component

// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import { useRouter } from "next/navigation"; // Use next/navigation in app directory

// interface ButtonProps {
//   text: string;
//   onClick?: () => void;
//   link?: string;
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick, link, ...props  }) => {
//   const router = useRouter(); // Now works because we're in a Client Component

//   const handleClick = () => {
//     if (onClick) onClick(); // Call onClick function if provided
//     if (link) router.push(link); // Redirect if link is provided
//   };

//   return (
//     <button
//     {...props}
//       className="relative inline-flex items-center gap-2  py-3 text-white text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 border border-transparent"
//       onClick={handleClick}
//     >
//       {/* Gradient Border Overlay */}
//       {/* <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-white/45 to-transparent p-[2px]"></span> */}

//       {/* Button Content */}
//       <span className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-[radial-gradient(105.53%_364.49%_at_31.67%_66.56%,rgba(220,39,38,0.9)_0%,rgba(220,39,38,0.405)_100%)] border-2 border-white/45"
//      style={{
//         border: '2px solid',
//         borderImageSource: `linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), 
//                             linear-gradient(147.77deg, #FFFFFF 1.78%, rgba(255, 255, 255, 0) 53.59%)`
//       }}
//       >
//         {text}
//         <ArrowUpRightIcon className="w-6 h-6 text-white" />
//       </span>
//     </button>
//   );
// };

// export default Button;
"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, onClick, className, ...props }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
    if (link) router.push(link);
  };

  return (
    <button
      {...props} // Spread props to allow standard button attributes
      onClick={handleClick}
      className={`relative inline-flex items-center gap-2 py-3 text-white text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 border border-transparent ${className}`}
    >
      <span
        className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-[radial-gradient(105.53%_364.49%_at_31.67%_66.56%,rgba(220,39,38,0.9)_0%,rgba(220,39,38,0.405)_100%)] border-2 border-white/45"
        style={{
          border: "2px solid",
          borderImageSource: `linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), 
                            linear-gradient(147.77deg, #FFFFFF 1.78%, rgba(255, 255, 255, 0) 53.59%)`,
        }}
      >
        {text}
        <ArrowUpRightIcon className="w-6 h-6 text-white" />
      </span>
    </button>
  );
};

export default Button;

