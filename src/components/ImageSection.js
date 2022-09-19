import React from "react";

export default function ImageSection({ className, name, imageUrl }) {
  return <img className={className} src={imageUrl} alt={name}></img>;
}
