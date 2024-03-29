"use client";
import Link from "next/link";
import Image from "next/image";
import { ApiResults } from "./page";

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
}: ApiResults) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          width={800}
          height={800}
          src={imagePath + poster_path}
          alt={title}
        />
      </Link>
    </div>
  );
}
