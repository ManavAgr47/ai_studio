"use client";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Global abstract background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[150px] opacity-50 mix-blend-screen" />
      </div>
      
      <Navbar />
      
      <motion.main 
        className="flex-grow pt-20 flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}

