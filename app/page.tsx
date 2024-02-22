import Banner from "./components/banners/Banner";
import Supporters from "./components/Supporters";
import SurveyLinkCard from "./components/SurveyLinkCard";

function Home() {
  return (
    <main className="flex flex-col gap-4 w-full">
      <Banner />

      <SurveyLinkCard title="پرسشنامه فردی" href="/survey/personal" badgeColor="green"
        text="افرادی که ایده ای را راه اندازی کرده یا قصد راه اندازی آن را دارند." />

      <SurveyLinkCard title="پرسشنامه شرکت ها" href="/survey/team" badgeColor="blue"
        text="شرکت یا استارتاپ هایی که قصد توسعه محصولات یا خدمات خود را دارند." />

      <SurveyLinkCard title="پرسشنامه ادارات" href="/" badgeColor="orange"
        text="ادارات و سازمان های دولتی که طرحی برای فرصت های سرمایه گذاری دارند." />

      <Supporters />
    </main>
  );
}

export default Home

// 'use client'
// import { useState, useEffect } from "react";
// const [data, setData] = useState([]);
// const [newItem, setNewItem] = useState({ name: '', description: '' });

// const fetchData = async () => {
//   const response = await fetch('http://localhost:3000/api/example');
//   const result = await response.json();
//   setData(result.data);

//   console.log(response);
// };

// const handleAddItem = async () => {
//   await fetch('http://localhost:3000/api/example', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newItem),
//   });

//   // Fetch data again after adding a new item
//   fetchData();
// };

// useEffect(() => {
//   fetchData();
// }, []);

// <div>
// <h2>Add New Item</h2>
// <input
//   type="text"
//   placeholder="Name"
//   value={newItem.name}
//   onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// />
// <input
//   type="text"
//   placeholder="Description"
//   value={newItem.description}
//   onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
// />
// <button onClick={handleAddItem}>Add Item</button>
// </div>
