import React, { useCallback, useEffect, useRef, useState } from "react";

interface ImageCompareProps {
  src: string; // kept for backward compatibility; used if beforeSrc/afterSrc are not provided
  beforeSrc?: string;
  afterSrc?: string;
  alt?: string;
  // Optional: start position (0..100)
  start?: number;
  // Optional: CSS filter for the BEFORE layer (e.g., grayscale, blur) to simulate a before/after using one image
  beforeFilterClassName?: string;
  className?: string;
  // UI labels and hints
  showLabels?: boolean;
  beforeLabel?: string;
  afterLabel?: string;
  showHint?: boolean;
  hintText?: string;
  // Handle customization (background color etc.)
  handleBgClassName?: string;
}

/**
 * ImageCompare
 * A lightweight, dependency-free before/after comparison slider using a single image source.
 * The bottom layer shows the AFTER (original). The top layer shows the BEFORE (filtered) and is clipped by a draggable handle.
 */
const ImageCompare: React.FC<ImageCompareProps> = ({
  src,
  beforeSrc,
  afterSrc,
  alt = "",
  start = 50,
  beforeFilterClassName = "grayscale contrast-75 brightness-95",
  className = "",
  showLabels = true,
  beforeLabel = "Before",
  afterLabel = "After",
  showHint = true,
  hintText = "Drag to compare",
  handleBgClassName = "bg-primary/90",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(Math.min(100, Math.max(0, start)));
  const [isDragging, setIsDragging] = useState(false);
  const beforeImage = beforeSrc ?? src;
  const afterImage = afterSrc ?? src;

  const updatePositionFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    updatePositionFromClientX(e.clientX);
  }, [updatePositionFromClientX]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  }, [isDragging, updatePositionFromClientX]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    if (!touch) return;
    updatePositionFromClientX(touch.clientX);
  }, [updatePositionFromClientX]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    }
  }, [isDragging, onMouseMove, onMouseUp]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => el.removeEventListener("touchmove", onTouchMove as EventListener);
  }, [onTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-xl shadow-elegant ${className}`}
      onMouseDown={onMouseDown}
      role="region"
      aria-label="Image comparison slider"
    >
      {/* Labels */}
      {showLabels && (
        <>
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-foreground/10 text-foreground/90 backdrop-blur-md border border-foreground/10 shadow-sm">
              {beforeLabel}
            </span>
          </div>
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-foreground/10 text-foreground/90 backdrop-blur-md border border-foreground/10 shadow-sm">
              {afterLabel}
            </span>
          </div>
        </>
      )}
      {/* AFTER (original) */}
      <img src={afterImage} alt={alt} className="block w-full h-auto" />

      {/* BEFORE (filtered) - clipped by width */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ width: `${position}%`, clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeImage} alt={alt} className={`block w-full h-full object-cover ${beforeFilterClassName}`} />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/70 dark:bg-white/60 shadow-md"
        style={{ left: `${position}%`, transform: "translateX(-0.5px)" }}
      />

      {/* Handle */}
      <button
        type="button"
        className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full ${handleBgClassName} border border-black/5 shadow-lg flex items-center justify-center cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
        style={{ left: `${position}%` }}
        aria-label="Drag to compare"
        onMouseDown={onMouseDown}
      >
        {/* Pause-like icon in center for visual cue */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/90">
          <rect x="7" y="5" width="3" height="14" rx="1" />
          <rect x="14" y="5" width="3" height="14" rx="1" />
        </svg>
      </button>

      {/* Hint */}
      {showHint && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <span className="px-3 py-1.5 text-xs font-medium rounded-md bg-foreground/10 text-foreground/90 backdrop-blur-md border border-foreground/10 shadow-sm">
            {hintText}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageCompare;
