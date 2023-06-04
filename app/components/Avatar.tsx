"use client";

import Image from "next/image";

interface AvatarProps {
  image?: string | null;
  src: any;
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return <Image className="rounded-full" height="30" width="30" alt="Avatar" src={image ? image : "/images/placeholder.jpg"} />;
};

export default Avatar;
