import { useEffect, useState } from "react";

export default function GetUrl() {
    const [url, setUrl] = useState('url()'); // unsplash图片地址

    useEffect(() => {
        let urlCancelled = false // 防止重放
        fetch("https://api.unsplash.com/photos/random/?collections=317099&client_id=gtJVuXhWYnhx1JZjQnjRiGvvd0pWMdKEtcGSjvoJ3UQ")
            .then((response) => response.json())
            .then((data) => {
                if (!urlCancelled) {
                    setUrl(`url(${data.urls.raw})`);
                }
            }); // avoid setState loop
        return () => {
            urlCancelled = true;
        }
    }, [])

    return (
        <div style={{ backgroundImage: url }}>
            {url}
        </div>
    );
}

  //   gtJVuXhWYnhx1JZjQnjRiGvvd0pWMdKEtcGSjvoJ3UQ
  //   s0cmeGao2qfOlWP6lxS1sWG0tkQuWYaVLFSKw2xZdcM