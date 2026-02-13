import React from "react";

export default function Login() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col w-[400px] gap-4 shadow-lg py-8 px-12 rounded-xl bg-white/40">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-3xl">Login</h1>
          <p className="text-gray-400 text-sm">Quiz app build from Next.js </p>
        </div>
        <form action="" className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-1 rounded-lg border-gray-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-1 rounded-lg border-gray-300 px-2 py-1"
            />
          </div>
          <hr className="my-2 text-gray-300" />
          <button
            type="submit"
            className="bg-[#121212] text-white rounded-md py-1 text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
