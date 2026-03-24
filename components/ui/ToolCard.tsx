"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import type { Tool } from "@shared/schema";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/tools/${tool.slug}`} className="block h-full group">
        <div className="h-full glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,255,255,0.15)] hover:border-primary/30 relative">
          
          {/* Card subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Image Container */}
          <div className="h-48 w-full relative overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
            {tool.imageUrl ? (
              <img 
                src={tool.imageUrl} 
                alt={tool.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop";
                }}
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Zap className="w-12 h-12 text-muted-foreground/30" />
              </div>
            )}
            
            {/* Price Badge */}
            <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-sm font-semibold text-white">
              {tool.price}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-20 flex flex-col h-[calc(100%-12rem)]">
            <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
              {tool.description}
            </p>
            
            <div className="space-y-2 mb-6">
              {tool.perks.slice(0, 2).map((perk, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground/80">
                  <Zap className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate">{perk}</span>
                </div>
              ))}
              {tool.perks.length > 2 && (
                <div className="text-xs text-muted-foreground/50 pl-6">
                  +{tool.perks.length - 2} more features
                </div>
              )}
            </div>

            <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:text-white transition-colors">
              Explore Service
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

