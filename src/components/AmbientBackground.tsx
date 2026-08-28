import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Subtle Base Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/[0.02] blur-[120px]" />
      <div className="absolute top-[40%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-white/[0.015] blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-zinc-800/[0.04] blur-[160px]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Vignette mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070709] opacity-80" />
    </div>
  );
};
