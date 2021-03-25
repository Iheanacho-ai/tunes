import ReactDOM from 'react-dom';
import React,{ useState, useEffect } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'


import Header from './component/header/header';
import LandingPage from './pages/landing-page/landing-page';
import SignInPage from './pages/signin-page/signin-page';
import SignUpPage from './pages/signup-page/signup-page';
import Explore from './pages/explore/explore';
import GenreCategoriesPlaylist from './pages/genre-categories-playlist/genre-categories-playlist';
import GenreCategoriesPlaylistSongs from './pages/genre-categories-playlist-songs/genre-categories-playlist-songs';
import SongDisplay from './pages/songs-display/songs-display';
import Discover from './pages/discover/discover';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import './App.css';

library.add(fab, faPlayCircle);


const App = () => { 
  const [currentUser, setCurrentUser ] = useState(null);
  const [token, setToken ] = useState('');
  const [ genreCategories, setGenreCategories ] = useState(null);
  const [genreCategoriesPlaylist, setGenreCategoriesPlaylist ] = useState(null);
  const [genreCategoriesPlaylistSongs, setGenreCategoriesPlaylistSongs ] = useState(null);
  const [ playASong, setPlayASong ] = useState(null);
  const [songs, setSongs ] = useState(null);

  const clientID = '1fd358f724e042788ce8e3cc381b552f';
  const clientSecret = 'db78ee8fc24241f7910d939e59e4feb1';
  const location = window.location;


    let unsubscribeFromAuth = null

    useEffect(()=> {
      unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        
        if( userAuth ){
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
              
            })
          });
        }else{
          setCurrentUser( userAuth );
        }
      })

      return() => {
       unsubscribeFromAuth();

      }
    },[]
  )


  useEffect(() => {
    const getToken =  async () => {
        const result = await fetch('https://accounts.spotify.com/api/token',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientID + ':' + clientSecret)
            },
            body: `grant_type=client_credentials`
        });

        const data = await result.json();
        setToken(data.access_token);   
        
        const getGenres = await fetch('https://api.spotify.com/v1/browse/categories',{
            method: 'GET',
            headers: {
            'Authorization': 'Bearer ' + data.access_token

            }
        });

        const genreResponse = await getGenres.json();
        setGenreCategories(genreResponse.categories.items);



                
        
    };

    getToken();
      
  }, [])







  const getGenrePlaylist = async (e) => {
    const id = e.target.id;

    const itemObject = genreCategories.find(item => item.id === id );
      const genreSongs = await fetch(`https://api.spotify.com/v1/browse/categories/${itemObject.id}/playlists`,{

        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + token
        }
    });

    const genreSongsResponse = await genreSongs.json();
    setGenreCategoriesPlaylist(genreSongsResponse.playlists.items);
   
          
  }



  const getGenrePlaylistSongs= async(e)=> {

    const trackId = e.target.id;
    const playlistObject = genreCategoriesPlaylist.find(item => item.id === trackId);


    

    const genrePlaylistSongs = await fetch(`https://api.spotify.com/v1/playlists/${playlistObject.id}/tracks?limit=20`,{

      method: 'GET',
      headers: {
      'Authorization': 'Bearer ' + token
      }
    })




    const genrePlaylistSongsResponse = await genrePlaylistSongs.json();


    setGenreCategoriesPlaylistSongs({
      name: playlistObject.name,
      image: playlistObject.images[0].url,
      items: genrePlaylistSongsResponse.items
      
    }); 

   

  }

  const searchMusic = async (e, value) => {
    if(e.charCode === 13){
      console.log('enter');
      const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${value}&type=track%2Cartist&market=US&limit=10&offset=5`, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + token
        }
      })

      const searchResponseData = await searchResponse.json();
      setSongs({
        artists: searchResponseData.artists.items,
        tracks: searchResponseData.tracks.items
      })
      console.log(searchResponseData);


      window.location.href = `${location}/songs`;


    }
   




  }

  useEffect(() => console.log(songs), [songs]);

  
  const PlayMusic = (e) => {
    
    const musicId = e.target.id;
    const musicObject = genreCategoriesPlaylistSongs.items.find(item => item.track.id === musicId);
    setPlayASong(musicObject,'musicObject' );


  }


  
  
    

    
  

  

  return(
    <div>
      <Route exact path = '/' component = { LandingPage} />
      <Route exact path = '/signin' render={() => currentUser ? (<Redirect to= '/explore' />) : ( <SignInPage/> )} />
      <Route exact path  = '/signup' render={() => currentUser ? (<Redirect to= '/explore' />) : ( <SignUpPage/> )} />
      <Route exact path = '/explore' component= {() => <Explore genreCategories = {genreCategories} getGenrePlaylist = {getGenrePlaylist} searchMusic ={searchMusic} /> } />
      <Route exact path = '/genre-playlist' component= {() => <GenreCategoriesPlaylist genreCategoriesPlaylist = {genreCategoriesPlaylist} getGenrePlaylistSongs= {getGenrePlaylistSongs} searchMusic ={searchMusic} /> } />
      <Route exact path = '/:location/songs' component= {() => <SongDisplay songs={songs} PlayMusic= {PlayMusic}/> } />
      <Route exact path = '/genre-playlist/playlist' component= {() => <GenreCategoriesPlaylistSongs genreCategoriesPlaylistSongs = {genreCategoriesPlaylistSongs} PlayMusic= {PlayMusic} playASong = {playASong} searchMusic ={searchMusic} /> } />
      <Route exact path = '/discover' component = { Discover} />

    
      
      
    </div>
  )
}

export default App;
