"use client";

import { useState } from "react";
interface ProfilePopupProps {
  openprofile: boolean;
  onClose: () => void;
}


 export function ProfilePopup({ openprofile, setOpenProfile }: { openprofile: boolean; setOpenProfile: (open: boolean) => void }) {
 
 if (!openprofile) return null;

  return (
    <div className="relative  fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
      <h2>Profile</h2>
            <div className="w-[1200px] h-[600px] bg-[red] profile-content">
        <p>Welcome to your profile!</p>
        <p>Here you can view and edit your personal information.</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
      <button onClick={() => setOpenProfile(false)}>
        Close
      </button>
    </div>
  );
}

export default ProfilePopup;