import { useEffect, useState } from "react";

export default function GetUrl() {
    const [url, setUrl] = useState(''); // unsplash图片地址

    useEffect(() => {
        let urlCancelled = false // 防止重放
        // fetch("https://api.unsplash.com/photos/random/?collections=317099&orientation=landscape&client_id=gtJVuXhWYnhx1JZjQnjRiGvvd0pWMdKEtcGSjvoJ3UQ")
        //     .then((response) => response.json())
        //     .then((data) => {
        if (!urlCancelled) {
            // setUrl(data.urls.regular);
            setUrl('https://images.unsplash.com/photo-1582148432011-85c462550e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Njg5Njl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODgzNTg5NTZ8&ixlib=rb-4.0.3&q=80&w=1080');
        }
        // }); // avoid setState loop
        return () => {
            urlCancelled = true;
        }
    }, [])

    return (
        <div style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', width: '100%', height: '100%' }}>
        </div>
    );
}

  //   gtJVuXhWYnhx1JZjQnjRiGvvd0pWMdKEtcGSjvoJ3UQ
  //   s0cmeGao2qfOlWP6lxS1sWG0tkQuWYaVLFSKw2xZdcM