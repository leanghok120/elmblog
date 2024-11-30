import { SettingsIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { account } from "../appwrite/config";
import db from "../appwrite/databases";
import { Query } from "appwrite";
import { useAuth } from "./AuthProvider";
import LogoutBtn from "./LogoutBtn";

function ProfileSettings({ username, getProfile }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newBio, setNewBio] = useState("");
  const modalRef = useRef(null);
  const { user } = useAuth();

  useEffect(() => {
    const modal = modalRef.current;

    const handleClickOutside = (event) => {
      const rect = modal.getBoundingClientRect();
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (isOutside) {
        modal.close();
      }
    };

    modal.addEventListener("click", handleClickOutside);

    return () => modal.removeEventListener("click", handleClickOutside);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Update username
      if (newUsername !== username) {
        await account.updateName(newUsername);
      }

      // Update bio
      const response = await db.profiles.list([
        Query.equal("userId", user.$id),
      ]);
      const profile = response.documents[0];
      await db.profiles.update(profile.$id, { bio: newBio });

      getProfile();
      modalRef.current.close();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="absolute top-5 right-5 transition-all hover:scale-110 active:scale-90"
        onClick={() => document.getElementById("modal").showModal()}
      >
        <SettingsIcon />
      </button>
      <dialog
        id="modal"
        className="rounded-2xl w-96 text-gruvbox-fg bg-gruvbox-bg border-2 border-gruvbox-bg2 p-5"
        ref={modalRef}
      >
        <h1 className="font-bold text-2xl">Edit your profile</h1>
        <form className="mt-5 space-y-3" onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Username"
            className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            placeholder="Bio"
            className="p-3 w-full bg-transparent border-gruvbox-bg2 border rounded-xl outline-none"
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
          <button className="bg-gruvbox-fg text-gruvbox-bg w-full p-3 rounded-xl font-bold transition-all hover:opacity-85 active:opacity-70">
            Save Changes
          </button>
        </form>
        <LogoutBtn />
      </dialog>
    </>
  );
}

export default ProfileSettings;
