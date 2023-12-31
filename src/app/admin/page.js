"use client"

export default function AdminPage() {

    const habdleAddData = async (e) => {
        e.preventDefault();
    
        const price1 = e.target[0].value;
        const price2 = e.target[1].value;
        const price3 = e.target[2].value;
        const price4 = e.target[3].value;
    
        try {
          const res = await fetch("/api/data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              price1,
              price2,
              price3,
              price4,
            }),
          });
        } catch (error) {
          console.log(error);
        }
    
      }

  return (
    <form onSubmit={habdleAddData}>
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price1"
        name="price1"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price2"
        name="price2"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price3"
        name="price3"
        required
      />
      <input
        className="text-blue-900"
        type="number"
        step="any"
        id="price4"
        name="price4"
        required
      />
      <button type='submit'>ADD</button>
    </form>
  )
}
