import React from 'react';
import { Cpu, Award } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const tools = [
    'Photoshop CC',
    'Blender 4.0',
    'Pixologic ZBrush',
    'Unreal Engine 5.4',
    'Clip Studio Paint EX',
    'Octane Render',
    'Adobe After Effects',
    'Adobe InDesign',
    'Procreate Dreams',
    'Maxon Cinema 4D',
  ];

  const studios = [
    'Tor & Orbit Fantasy Press',
    'Astral Wave Records',
    'Apex Titan Esports',
    'Zenith Manga Publishing',
    'Mythic Forge Gaming',
    'Phantom Creator Network',
    'Dark Horizon Comics',
    'Vanguard Soundworks',
  ];

  // Duplicate for seamless 50% loop
  const toolsLoop = [...tools, ...tools];
  const studiosLoop = [...studios, ...studios];

  return (
    <div className="relative py-8 bg-zinc-950/80 border-y border-white/5 overflow-hidden select-none">
      {/* Edge Gradient Masks for cinematic fade */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className="space-y-3">
        {/* Track 1: Production Pipeline Software (Slides Left) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-6">
            {toolsLoop.map((tool, idx) => (
              <div
                key={`tool-${idx}`}
                className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 text-xs font-mono text-zinc-300 hover:border-white/30 hover:text-white transition-all cursor-default"
              >
                <Cpu className="w-3 h-3 text-zinc-500" />
                <span className="whitespace-nowrap font-medium tracking-wide">{tool}</span>
                <span className="text-zinc-600 font-bold">&bull;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Global Client & Studio Partners (Slides Right) */}
        <div className="overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-6">
            {studiosLoop.map((studio, idx) => (
              <div
                key={`studio-${idx}`}
                className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/40 border border-white/5 text-xs font-mono text-zinc-400 hover:border-white/30 hover:text-white transition-all cursor-default"
              >
                <Award className="w-3 h-3 text-zinc-500" />
                <span className="whitespace-nowrap tracking-wide">{studio}</span>
                <span className="text-zinc-700">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
