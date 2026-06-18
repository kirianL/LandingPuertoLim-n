import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  // Split by spaces to animate word by word
  const words = text.split(" ");

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVars = {
    initial: { y: "110%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom premium easeOut
      },
    },
  };

  return (
    <motion.span
      variants={containerVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => {
        // Handle line breaks within the string manually if they exist
        if (word === "\n" || word === "<br>" || word === "<br/>") {
          return <span key={i} class="w-full" />;
        }
        
        return (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.22em] py-[0.1em] -my-[0.1em]"
          >
            <motion.span variants={wordVars} className="inline-block font-inherit">
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
