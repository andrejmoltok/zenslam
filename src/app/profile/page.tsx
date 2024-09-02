"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Page() {
  const { user } = useUser();
  return (
    <>
      {user && (
        <>
          <p>{user.name}</p>
        </>
      )}
    </>
  );
}
