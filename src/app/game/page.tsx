"use client"
export default function Page() {
  const token = async () => {
    const res = await fetch("/services/jwt/get", {
      method: "GET",
    });
    console.log(res);
    const datas = await res.json();
    console.log(datas.id);
  }
  return (
    <div>
      <h1>Game</h1>
      <button onClick={token}>Token</button>
    </div>
  );
}