"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logout from "./logout";
interface User {
  name: string;
  email: string;
  picture?: string;
  _id: string;
  googleId?: string;
}

interface ProfilePopupProps { 
  openprofile: boolean;
  onClose?: () => void;
  setOpenProfile?: Dispatch<SetStateAction<boolean>>;
}

export function ProfilePopup({ openprofile, onClose, setOpenProfile }: ProfilePopupProps) {
  const { user: authUser, isLoading } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (setOpenProfile) {
      setOpenProfile(false);
    }
  };

  // Hooks must run unconditionally, on every render — no early return above this point.
  useEffect(() => {
    setUser(authUser as User | null);
    setLoaded(!isLoading);
  }, [authUser, isLoading]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!openprofile) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openprofile, handleClose]);

  if (!openprofile) return null;

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!loaded ? (
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="h-16 w-16 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-3 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        ) : !user ? (
          <div className="flex flex-col items-center gap-2 py-10 text-center">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              No profile found
            </p>
            <p className="text-xs text-zinc-400">
              Sign in again to view your profile details.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-offset-2 ring-zinc-200 dark:ring-zinc-700 dark:ring-offset-zinc-900"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-800 text-lg font-medium text-white ring-2 ring-offset-2 ring-zinc-200 dark:ring-zinc-700 dark:ring-offset-zinc-900">
                  {initials}
                </div>
              )}
            </div>

            <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {user.name}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {user.email}
            </p>

            <div className="mt-6 w-full space-y-2 border-t border-zinc-100 dark:border-zinc-800 pt-4">
              <div className="flex items-center justify-between rounded-lg bg-zinc-50 dark:bg-zinc-800/60 px-3 py-2">
                <span className="text-xs font-medium text-zinc-400">
                  User ID
                </span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                  {user._id}
                </span>
              </div>
              {user.googleId && (
                <div className="flex items-center justify-between rounded-lg bg-zinc-50 dark:bg-zinc-800/60 px-3 py-2">
                  <span className="text-xs font-medium text-zinc-400">
                    Google ID
                  </span>
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                    {user.googleId}
                  </span>
                   <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                    <Logout />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePopup;