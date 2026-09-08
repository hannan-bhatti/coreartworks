import React, { createContext, useContext, useState, useEffect } from 'react';
import { Artwork } from '../types';

interface MoodboardContextType {
  moodboard: Artwork[];
  addToMoodboard: (artwork: Artwork) => void;
  removeFromMoodboard: (artworkId: string) => void;
  toggleMoodboard: (artwork: Artwork) => void;
  isInMoodboard: (artworkId: string) => boolean;
  clearMoodboard: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'core_artworks_moodboard_v1';

const MoodboardContext = createContext<MoodboardContextType | undefined>(undefined);

export const MoodboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [moodboard, setMoodboard] = useState<Artwork[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse moodboard from localStorage:', e);
    }
    return [];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(moodboard));
    } catch (e) {
      console.warn('Failed to save moodboard to localStorage:', e);
    }
  }, [moodboard]);

  const addToMoodboard = (artwork: Artwork) => {
    setMoodboard((prev) => {
      if (prev.some((item) => item.id === artwork.id)) return prev;
      return [...prev, artwork];
    });
  };

  const removeFromMoodboard = (artworkId: string) => {
    setMoodboard((prev) => prev.filter((item) => item.id !== artworkId));
  };

  const toggleMoodboard = (artwork: Artwork) => {
    setMoodboard((prev) => {
      const exists = prev.some((item) => item.id === artwork.id);
      if (exists) {
        return prev.filter((item) => item.id !== artwork.id);
      } else {
        return [...prev, artwork];
      }
    });
  };

  const isInMoodboard = (artworkId: string) => {
    return moodboard.some((item) => item.id === artworkId);
  };

  const clearMoodboard = () => {
    setMoodboard([]);
  };

  return (
    <MoodboardContext.Provider
      value={{
        moodboard,
        addToMoodboard,
        removeFromMoodboard,
        toggleMoodboard,
        isInMoodboard,
        clearMoodboard,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </MoodboardContext.Provider>
  );
};

export const useMoodboard = () => {
  const context = useContext(MoodboardContext);
  if (!context) {
    throw new Error('useMoodboard must be used within a MoodboardProvider');
  }
  return context;
};
