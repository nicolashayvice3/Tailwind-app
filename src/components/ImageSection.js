import React from "react";

export default function ImageSections({ className, name, imageUrl }) {
  return <img className={className} src={imageUrl} alt={name}></img>;
}
