import React from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  title,
  icon,
  position,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10, 
        }}
        className="flex space-x-2  backdrop-blur-xl px-5   border-blue-400/20 py-3 animate-shimmer items-center justify-center rounded-full border border-neutral-600  bg-[length:200%_100%] font-medium text-gray-900 transition-colors"
      >
        {position === "left" && <span className="mr-2">{icon}</span>}
        {title}
        {position === "right" && <span className="ml-2">{icon}</span>}
      </motion.button>
    </motion.div>
  );
};

export default ShimmerButton;
