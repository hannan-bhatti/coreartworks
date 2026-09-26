import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Drifting Organic Ambient Glow Blobs from Core Artworks Theme */}
      <div className="ambient-blob-a absolute -top-40 -left-28 w-[620px] h-[620px] rounded-full blur-[100px] opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.09),transparent_70%)]" />
      <div className="ambient-blob-b absolute top-[30%] -right-36 w-[540px] h-[540px] rounded-full blur-[110px] opacity-35 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.07),transparent_70%)]" />
      <div className="ambient-blob-c absolute -bottom-52 left-[20%] w-[700px] h-[700px] rounded-full blur-[120px] opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_72%)]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_40%,rgba(0,0,0,0.55)_100%),radial-gradient(ellipse_at_50%_100%,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
};
