import React from 'react';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import './discover.styles.css';


class Discover extends React.Component{
    constructor(){
        super();

        this.state = {
           searchInput : '',
           songs: null
        }
    }


    handleChangeSearchInput = event => {
        const { value } = event.target;
        this.setState({ searchInput : value });

        
    }


    


    

    render(){
        return(
            <div className = 'discover'>
            <div className="discover-aside-bar-div">
                <AsideBar searchInput = { this.state.searchInput } hc = {  this.handleChangeSearchInput }  />
            </div>
            <div className="discover-side-bar-div">
                <ExploreHeader/>

                <div className="discover-side-bar">
                    
                </div>
            </div>
            </div>
        )
    }
};

export default Discover;