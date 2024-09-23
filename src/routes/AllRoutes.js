import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieList,MovieDetail,PageNotFound,Search } from '../pages';

export const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
        <Routes>
            <Route path='' element={<MovieList title="Home" movieApi='movie/now_playing'/>} />
            <Route path='movies/popular' element={<MovieList title="Popular" movieApi='movie/popular'/>}/>
            <Route path='movies/upcoming' element={<MovieList title="Upcoming" movieApi='movie/upcoming'/>}/>
            <Route path='movie/:id' element={<MovieDetail/>}/>
            <Route path='movies/top_rated' element={<MovieList title="Top Rated" movieApi='movie/top_rated'/>}/>
            <Route path='search' element={<Search movieApi='search/movie'/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
    
  )
}
