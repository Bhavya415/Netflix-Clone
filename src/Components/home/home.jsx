import { useEffect,React,useState } from 'react';
import Row from './Row/row.jsx'
import '../home/Home.scss'
import axios from "axios";
import{Link} from 'react-router-dom'
import{BiPlay}from "react-icons/bi"
import{AiOutlinePlus} from "react-icons/ai"



const api_key="7c6bebd7759c530cc08042c6712d6d90";
const url="https://api.themoviedb.org/3"
const upcoming="upcoming"
const Popular="popular"
const top_rated="top_rated"
const now_playing="now_playing"
const img_url="https://image.tmdb.org/t/p/w500"



const Home=()=>{

    const [upcomingMovies,setUpcomingMovies]=useState([])
    const [popularMovies,setPopularMovies]=useState([])
    const [topRatedMovies,setTopRatedMovies]=useState([])
    const [nowPlaying,setNowPlaying]=useState([])
    const [genre,setgenre]=useState([])


    useEffect(()=>{

        const fetchUpcoming=async()=>{
           const {data:{results} }= await axios.get(`${url}/movie/${upcoming}?api_key=${api_key}`);
           setUpcomingMovies(results)
        //    console.log(upcomingMovies);
        };
 
       

    const fetchPopularMovies=async()=>{
        const {data:{results}, }= await axios.get(`${url}/movie/${Popular}?api_key=${api_key}`);
        setPopularMovies(results)
   
     };


    const fetchTopRated=async()=>{
        const {data:{results} }= await axios.get(`${url}/movie/${top_rated}?api_key=${api_key}`);
        setTopRatedMovies(results)
     //    console.log(upcomingMovies);
     };

     const fetchNow_playing=async()=>{
        const {data:{results} }= await axios.get(`${url}/movie/${now_playing}?api_key=${api_key}`);
        setNowPlaying(results)
     //    console.log(upcomingMovies);
     };
     const fetchGenre=async()=>{
        const {data:{genres} }= await axios.get(`${url}/genre/movie/list?api_key=${api_key}`);
        setgenre(genres)
    
     };
     //https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

     fetchUpcoming();  
     fetchPopularMovies();
     fetchTopRated();
     fetchNow_playing();
     fetchGenre();

 },[])


    return(
         <selection className='home'>
            <div className='banner' style={{
                backgroundImage:popularMovies[0]?`url(${`${img_url}/${popularMovies[1].poster_path}`})`:"none"
            }}>
                {
                    popularMovies[0]&&
                    (
                        <h1>{popularMovies[0].original_title}</h1>
                    )
                }
                {
                    popularMovies[0]&&(
                        <p>{popularMovies[0].overview}</p>
                    )
                }
                <div>
                <button><BiPlay/>play</button>
                <button>My List<AiOutlinePlus/></button>
                </div>
               
                    

            </div>
        
            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Popular on Netflix"} arr={popularMovies}/>
            <Row title={"Top Rated"} arr={topRatedMovies} />
            <Row title={"Latest"} arr={nowPlaying} />

            <div className="genreBox">
                {
                    genre.map((item)=>(
                        <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
                    ))}
            </div>
       
        </selection>
    )
}
export default Home;