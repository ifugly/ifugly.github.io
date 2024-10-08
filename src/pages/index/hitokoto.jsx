import { useEffect, useState } from "react";

export default function GetHitokoto() {
  const [hitokoto, setHitokoto] = useState({
    text: "......",
    from: "",
    fromWho: "",
  }); // 一言和来源

  useEffect(() => {
    let hitokotoCancelled = false; // 防止重放
    fetch("https://v1.hitokoto.cn/")
      .then((response) => response.json())
      .then((data) => {
        if (!hitokotoCancelled) {
          setHitokoto({
            ...hitokoto,
            text: data.hitokoto,
            from: data.from ? data.from : "",
            fromWho: data.from_who ? data.from_who : "",
          });
        }
      }); // avoid setState loop
    return () => {
      hitokotoCancelled = true;
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "var(--text-hitokoto)",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {hitokoto.text}
      </div>
      <div style={{ fontSize: "var(--text-author)" }}>
        {`「${hitokoto.from}」${hitokoto.fromWho}`}
      </div>
    </div>
  );
}
