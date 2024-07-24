"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsUserValid(true);
          console.log("This is the logged in user", user);
        } else {
          console.log("no user found");
          router.push("/");
        }
      });
    };

    checkAuth();
  }, []);

  if (isUserValid) {
    return (
      <div className={`font-sans`}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <div className="mt-20">{children}</div>
      </div>
    );
  }
}
