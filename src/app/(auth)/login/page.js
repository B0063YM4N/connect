"use client";

import { signIn, useSession } from "next-auth/react";

import styles from "./page.module.css"
import { useRouter } from "next/navigation";

export default function Login() {
    const session = useSession();
    const router = useRouter();

    session.status === "authenticated" && router.push("/edit")

    const handleRegister = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
    
        const password = e.target[1].value;
    
        signIn("credentials", { email, password });

    }

  return (
    <form onSubmit={handleRegister}>
        <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            required
          />
          <button type='submit'>Login</button>
    </form>
  )
}
