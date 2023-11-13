"use client"

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import useSWR from "swr";

export default function Edit() {

    const adminEmail = process.env.ADMIN_EMAIL;

    const session = useSession();
    const router = useRouter();

    if (session.status === "unauthenticated" && session.data?.user.email !== adminEmail) {
        router.push("/")
    }
    
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(`/api/addData`, fetcher);

    const handleEdit = async (e, id) => {
        e.preventDefault();

        const value = e.target[0].value;

        try {
            await fetch("/api/addData", {
                method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                value,
              }),
            })
            mutate();
        } catch (error) {
            
        }
    }

  return (
    <div>
        <button onClick={signOut}>SignOut</button>
        <br />
        <div>
            {!isLoading && data.map(item =>{
                return (
                    <div key={item._id}>
                    <h1>{item.item}</h1>
                    <form onSubmit={(e) => handleEdit(e, item._id)}>
                        <input type='text' name='value'  className='text-black'/>
                        <button type='submit'>Submit</button>
                    </form>
                    
                </div>
                )
            })}
        </div>
    </div>
  )
}
