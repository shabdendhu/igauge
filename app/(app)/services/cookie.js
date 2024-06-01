"use server";

import { cookies } from "next/headers";

// Function to check if the user is logged in by checking for a specific cookie
async function isLogedIn(cookieName) {
  const cookieStore = cookies();
  return cookieStore.has(cookieName);
}

// Function to fetch user details from the API

export { isLogedIn };
