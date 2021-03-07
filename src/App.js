import React,{ useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './component/header/header';
import LandingPage from './pages/landing-page/landing-page';
import SignInPage from './pages/signin-page/signin-page';
import SignUpPage from './pages/signup-page/signup-page';
import Explore from './pages/explore/explore';
import GenreCategoriesPlaylist from './pages/genre-categories-playlist/genre-categories-playlist';
import GenreCategoriesPlaylistSongs from './pages/genre-categories-playlist-songs/genre-categories-playlist-songs';
import Discover from './pages/discover/discover';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import './App.css';

const App = () => { 
  const [currentUser, setCurrentUser ] = useState(null);
  const [token, setToken ] = useState('');
  const [ genreCategories, setGenreCategories ] = useState(null);
  const [genreCategoriesPlaylist, setGenreCategoriesPlaylist ] = useState(null);
  const [genreCategoriesPlaylistSongs, setGenreCategoriesPlaylistSongs ] = useState(null);

  const clientID = '1fd358f724e042788ce8e3cc381b552f';
  const clientSecret = 'db78ee8fc24241f7910d939e59e4feb1';


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
    console.log(playlistObject.name + 'name');
    console.log(playlistObject.images[0].url);
    console.log(playlistObject + 'object');
    

    const genrePlaylistSongs = await fetch(`https://api.spotify.com/v1/playlists/${playlistObject.id}/tracks?limit=20`,{

      method: 'GET',
      headers: {
      'Authorization': 'Bearer ' + token

      }
    })

    const genrePlaylistSongsResponse = await genrePlaylistSongs.json();
    console.log(genrePlaylistSongsResponse );
    console.log(genrePlaylistSongsResponse.items + 'songs')
   
    setGenreCategoriesPlaylistSongs({
      name: playlistObject.name,
      image: playlistObject.images[0].url
      
    });

    console.log(GenreCategoriesPlaylistSongs);

  }

  
  
    

    
  

  

  return(
    <div>
      <Route exact path = '/' component = { LandingPage} />
      <Route exact path = '/signin' render={() => currentUser ? (<Redirect to= '/explore' />) : ( <SignInPage/> )} />
      <Route exact path  = '/signup' render={() => currentUser ? (<Redirect to= '/explore' />) : ( <SignUpPage/> )} />
      <Route exact path = '/explore' component= {() => <Explore genreCategories = {genreCategories} getGenrePlaylist = {getGenrePlaylist}/> } />
      <Route exact path = '/genre-playlist' component= {() => <GenreCategoriesPlaylist genreCategoriesPlaylist = {genreCategoriesPlaylist} getGenrePlaylistSongs= {getGenrePlaylistSongs} /> } />
      <Route exact path = '/genre-playlist/songs' component= {() => <GenreCategoriesPlaylistSongs genreCategoriesPlaylistSongs = {genreCategoriesPlaylistSongs} /> } />
      <Route exact path = '/discover' component = { Discover} />

    
      
      
    </div>
  )
}

export default App;
