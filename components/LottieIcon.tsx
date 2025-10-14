'use client';

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieIcon() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // ✅ Adjust path to where your file lives
    fetch("/lotties/barber.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={animationData}
        loop
        className=" drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
        style={{ height: "80vh", width: "auto" }}
      />
    </div>
  );
}
