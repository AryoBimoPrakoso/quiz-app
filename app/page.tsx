"use client";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ClockLoader } from "react-spinners";

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading) {
        if (user) {
          router.replace("/quiz");
        } else {
          router.replace("/login");
        }
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [user, isLoading, router]);

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex gap-2 items-center">
        <ClockLoader />
        <h1 className="text-2xl">Mengecek akses...</h1>
      </div>
    </div>
  );
}
