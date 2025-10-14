'use client';

import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function TiltedCard({
  image = "/card.png",
  title,
  subtitle,
}: {
  image?: string;
  title?: string;
  subtitle?: string;
}) {
  const [isHover, setIsHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [10, -10]);
  const rotateY = useTransform(x, [0, 300], [-10, 10]);

  return (
    <motion.div
      className="relative inline-block rounded-2xl overflow-hidden cursor-pointer   "
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        x.set(150);
        y.set(150);
      }}
    >
      <motion.div style={{ rotateX, rotateY }}>
        <motion.img
          src={image}
          alt={title}
          className="rounded-2xl object-contain"
          style={{ display: "block", width: "100%", height: "auto" }}
          animate={{ scale: isHover ? 1.0 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {(title || subtitle) && (
        <div className="absolute inset-x-0 bottom-0 bg-black/60 text-center py-3">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-gray-300 text-sm">{subtitle}</p>}
        </div>
      )}
    </motion.div>
  );
}
