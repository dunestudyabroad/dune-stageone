"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default function PrivacyModal({ isOpen, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        />

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full sm:w-[85%] md:w-[30%] my-10 max-h-[90vh] overflow-hidden z-[9999999]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="text-center h-full flex flex-col p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-bold mb-4">
              Privacy Policy
            </h2>

            <div className="text-left text-gray-800 text-base sm:text-lg md:text-2xl space-y-4 overflow-y-auto pr-2 flex-1">
              <p>
                Dune Study Metro is the sole owner of the information collected through this website and associated platforms. The privacy and trust of our students, clients, and website visitors is of utmost importance to us. We deeply value the information you share and are committed to protecting it with the highest level of care.
              </p>
              <p>
                We assure you that under no circumstances will your personal information be sold, rented, or disclosed to third parties for commercial purposes. Any data collected will be used solely for providing our educational consulting services and as described in this Privacy Policy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
