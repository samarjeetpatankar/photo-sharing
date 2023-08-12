"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from "./../shared/firebaseConfig";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button
        className="bg-black
         text-white p-2 px-4 rounded-full
        "
      >
        Home
      </button>
      <button
        className="font-semibold p-2 px-4
         rounded-full "
      >
        Create
      </button>
      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch classname="text-[25px] text-gray-500 md:hidden" />
        <input
          type="text"
          placeholder="search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiBell className="text-[40px]  text-gray-500 cursor-pointer" />
      <HiChat className="text-[40px]  text-gray-500 cursor-pointer" />
      {session?.user ? (
        <Image
          src={session?.user?.image || ""}
          alt="man"
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold p-2 px-4
         rounded-full "
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
