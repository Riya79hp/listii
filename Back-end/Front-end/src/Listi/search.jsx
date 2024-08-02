import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import musicnames from './music_storage.json';

function SearchResult() {
  const { query } = useParams();

  const [Play,setplay]=useState(['','','','','']);
  function Handleclick(Name,Src,Artist){
    setplay([Name,Src,Artist])

    if(query==''){
      return <div>nothing provided</div>
    }

    
    
  }
  return (
    <>
      <div className='Music_Storage'>
   { 
   musicnames.map((ele)=>{
    if (
        ele.Name.toUpperCase().includes(query.toUpperCase()) ||
        ele.Artist.toUpperCase().includes(query.toUpperCase())
      ){
        return (
            <div className='Music_element'>
              <button onClick={()=>{Handleclick(ele.Name,ele.src,ele.Artist)}}><i class="fa-solid fa-circle-play"></i></button>
              <div className='image-div-song'><img src={ele.src} style={{width:'100%',height:'100%',backgroundSize:'cover'}}></img></div>
              <div>
              <h3>{ele.Name}</h3>
              <h5>{ele.Artist}</h5>
             </div>
             <p>{ele.Duration}</p>
            </div>

        )
    }

    

        })
       
        
        
        }
        </div>
      <div className='now-playing'>
      <div className='now-playing-img-div'><img src={Play[1]} style={{width:'100%',height:'100%',backgroundSize:'cover'}}></img></div>
      <div>{Play[0]}</div>
      <div  className='playingdivwrap'>
      <div className='playdiv'>
      <i class="fas fa-step-backward"></i> <i class="fa-solid fa-pause"></i><i class="fas fa-step-forward"></i></div>
      <p style={{alignSelf:'center'}}>Now playing</p>
      </div>
      <div>{Play[2]}</div>
     
    </div>
    
    
      
    </>
  );
}

export default SearchResult;
