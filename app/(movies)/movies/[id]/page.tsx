import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${ Date.now() }`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${ API_URL }/${ id }`);

//   return response.json();
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${ Date.now() }`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${ API_URL }/${ id }/videos`);

//   return response.json();
// }

interface IParams {
  params: { id: string }; 
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  // console.log('==============');
  // console.log('Start fetching');
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // const [movie, vidoes] = await P romise.all([getMovie(id), getVideos(id)]); components/movie-info.tsx, movie-videos.tsx
  // console.log('End fetching');

  // return <h1>{ movie.title }</h1>
  return (
    <div>
      <Suspense fallback={ <h1>Loading movie info</h1> }>
        <MovieInfo id={ id }/>
      </Suspense>
      <Suspense fallback={ <h1>Loading movie videos</h1> }>
        <MovieVideos id={ id }/>
      </Suspense>
    </div>
  )
}