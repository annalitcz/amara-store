import React from "react";
import Card from "./card";

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
    </>
  );
};

export default ProdukContainer;
