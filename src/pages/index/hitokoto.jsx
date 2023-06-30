import { useState } from "react";

export default function GetHitokoto() {
  const hitokotoFetch = fetch("https://v1.hitokoto.cn/"); // 一言api
  const [hitokoto, setHitokoto] = useState({
    text: "......",
    from: "",
    fromWho: "",
  }); // 获取一言和来源
  hitokoto.text == "......" &&
    hitokotoFetch
      .then((response) => response.json())
      .then((data) => {
        setHitokoto({
          ...hitokoto,
          text: data.hitokoto,
          from: data.from ? data.from : "",
          fromWho: data.from_who ? data.from_who : "",
        });
      }); // avoid setState loop
	//   gtJVuXhWYnhx1JZjQnjRiGvvd0pWMdKEtcGSjvoJ3UQ
	//   s0cmeGao2qfOlWP6lxS1sWG0tkQuWYaVLFSKw2xZdcM
  return (
    <div>
      <h1>{hitokoto.text}</h1>
      <h3>{`「${hitokoto.from}」${hitokoto.fromWho}`}</h3>
    </div>
  );
}
