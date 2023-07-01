import { useEffect, useState } from "react";

export default function GetHitokoto() {
  const [hitokoto, setHitokoto] = useState({
    text: "......",
    from: "",
    fromWho: "",
  }); // 一言和来源

  useEffect(() => {
    let hitokotoCancelled = false // 防止重放
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
    }
  }, [])

  return (
    <div>
      <h1>{hitokoto.text}</h1>
      <h3>{`「${hitokoto.from}」${hitokoto.fromWho}`}</h3>
    </div>
  );
}
