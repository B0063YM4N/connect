"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css"
import useSWR from "swr";

export default function AddData() {
    const [id, setId] = useState("");

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, mutate, error, isLoading } = useSWR(`/api/addData`, fetcher);

    // useEffect(() => {
    //     !isLoading && data.map(d => {
    //         setId(d._id)
    //     })
    // }, [data])

    !isLoading && data.map(d => {
        console.log(d);
    })

    const habdleAddData = async (e) => {
        e.preventDefault();

        const item = e.target[0].value;
        const value = e.target[1].value;

        try {
            const res = await fetch("/api/addData", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                item,
                value
              }),
            });
          } catch (error) {
            console.log(error);
          }

    }

  return (
    <div>
        <form onSubmit={habdleAddData}>
        <input
            type="text"
            id="item"
            name="item"
            className={styles.input}
            required
          />
          <input
            type="text"
            id="value"
            name="value"
            className={styles.input}
            required
          />
          <button type='submit'>ADD</button>
        </form>
    </div>
  )
}
