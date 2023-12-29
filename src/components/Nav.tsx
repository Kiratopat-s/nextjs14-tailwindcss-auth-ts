"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { DefaultSession } from "next-auth";

function Nav({ session }: { session?: DefaultSession | null }) {
  return (
    <nav className="fixed top-0 w-full p-4 bg-black text-white flex justify-between  rounded-b-lg ring-1 ring-white shadow shadow-white">
      <div className="flex justify-start item-center align-middle ml-10">
        <h1 className="flex flex-col justify-center hover:text-rose-500 hover:drop-shadow-xl text-2xl font-bold drop-shadow drop-shadow-white cursor-pointer transition-all duration-300 ease-in-out">
          Main App
        </h1>
      </div>
      <div className="flex gap-8 justify-end mr-10">
        {session && (
          <>
            <div className="flex gap-4">
              <p className="btn">Welcome {session.user?.name} !</p>
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img
                    src={
                      session.user?.image ||
                      `https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg`
                    }
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="btn bg-red-500 text-white"
            >
              Logout
            </button>
          </>
        )}
        {!session && (
          <>
            <button className="btn hover:text-rose-500 hover:shadow-rose-500 cursor-pointer transition-all duration-300 ease-in-out">
              About me
            </button>
            <button
              onClick={() => signIn()}
              className="btn hover:text-rose-500 hover:shadow-rose-500 cursor-pointer transition-all duration-300 ease-in-out"
            >
              <i className="mr-0 fa-solid fa-right-to-bracket"></i>Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
