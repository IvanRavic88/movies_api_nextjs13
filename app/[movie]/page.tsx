import Image from "next/image";
import { ApiResults } from "../page";

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.result.map((movie) => ({ movie: toString(movie.id) }));
// }

interface MovieDetailsApi {
  title: string;
  relese_date: string;
  runtime: string;
  status: string;
  backdrop_path: string;
  overview: string;
}

export default async function MovieDetail({ params }: any) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const { title, relese_date, runtime, status, overview, backdrop_path } =
    (await data.json()) as MovieDetailsApi;

  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <h2 className="text-lg">{relese_date}</h2>
      <h2>Runtime: {runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 rounded-md px-4 text-white">
        {status}
      </h2>
      <p className="text-xl text-gray-700">{overview}</p>
      <Image
        className="my-12 w-full"
        alt={title}
        src={imagePath + backdrop_path}
        width={1000}
        height={1000}
        priority
      ></Image>
    </div>
  );
}
