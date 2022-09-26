import Image from "next/image";
import { useEffect, useState } from "react";

function Card() {
  return (
    <div className=" text-[15px]">
      <div className="relative">
        <Image
          className="rounded-lg"
          src="/mock.webp"
          alt="mock"
          width={320}
          height={287}
        />
        {/* <Image
          className="absolute top-0 right-0"
          src="/heart.svg"
          alt="heart"
          width={24}
          height={24}
        /> */}
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Candolin, India</span>
        <span className="font-light">
          <Image src="/star.svg" alt="svg" width={12} height={12} />
          <span>4.5</span>
        </span>
      </div>
      <div className="text-zinc-500 font-light leading-5">
        <span>750 kilometers</span>
      </div>
      <div className="text-zinc-500 font-light leading-5">
        <span>4-10 Nov</span>
      </div>
      <div className="mt-1.5">
        <span className="font-medium">₹8000</span>
        <span className="font-light"> night</span>
      </div>
    </div>
  );
}

// todo: align the favorites (heart)
// todo: create a infinite skeleton
// todo: lazy load the images into skeleton
export default function Main() {
  // const [value, setValue] = useState([]);

  // async function loadData() {
  //   fetch("/api/place")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     // .then((res) => setValue(res));
  // }

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <main>
      <div className="grid grid-cols-4 gap-6 text-base px-20 py-5">
        {/* {console.log("HTML", value)} */}
        {/* {value.map((val) => (
          <div>{val.name}</div>
        ))} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
