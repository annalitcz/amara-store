import React from "react";
import Card from "./card";
import Footer from "./footer";

const ProdukContainer = () => {
  const dataCard = [
    {
      Title: "Romantic Delight",
      imgUrl:"https://cdn-uploads.our-wedding.link/75e2ed40-f39b-11ed-a12e-b1169f5e6240.png",
      Alt: "preview1",
      Price: "120.000",
      Tag: "Luxury",
      Links: "https://our-wedding.link/preset&design?preset_id=641d0c1205ce1ec450dc4780"
    },
    {
      Title: "Classic Models",
      imgUrl:"https://web-store-cloud.vercel.app/src/img1.png",
      Alt: "preview2",
      Price: "150.000",
      Tag: "Premium",
      Links: "https://undanganlevi.vercel.app/"
    },
    {
      Title: "Dark Boho",
      imgUrl:"https://cdn-uploads.our-wedding.link/77404ca0-59c7-11ed-9176-870ab3898177.jpg",
      Alt: "preview2",
      Price: "120.000",
      Tag: "Luxury",
      Links: "https://our-wedding.link/preset&design?preset_id=635256333f250a0c88d14b56"
    },
    {
        Title: "SnowFall Minimalist",
        imgUrl:"https://cdn-uploads.our-wedding.link/d9ec83f0-f39b-11ed-b658-c7cadb77c24a.jpeg",
        Alt: "preview3",
        Price: "120.000",
        Tag: "Luxury",
        Links: "https://our-wedding.link/preset&design?preset_id=631be52580ef7a0a25250312"
    },
    {
        Title: "Traditional Minang",
        imgUrl:"https://cdn-uploads.our-wedding.link/f3aeaff0-44e7-11ee-afff-fbb406ac45aa.jpg",
        Alt: "preview4",
        Price: "145.000",
        Tag: "Eksklusif",
        Links: "https://our-wedding.link/preset&design?preset_id=64dcd9476113675a81feaefd"
    },
    {
      Title: "Black & Gold",
      imgUrl: "https://cdn-uploads.our-wedding.link/6a693180-f39c-11ed-9bca-81274156d864.jpeg",
      Alt: "preview5",
      Price: "160.000",
      Tag: "Premium",
      Links: "https://our-wedding.link/preset&design?preset_id=5ff8031150ce4331aec06a9a"
    }
  ];

  return (
    <>
      <div className="p-4 flex flex-wrap justify-center items-center gap-10 poppins">
        {dataCard.map((card, index) => (
            <Card
              key={index}
              Title={card.Title}
              imgUrl={card.imgUrl}
              Alt={card.Alt}
              Links={card.Links}
              Price={card.Price}
              Tag={card.Tag}
            />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default ProdukContainer;
