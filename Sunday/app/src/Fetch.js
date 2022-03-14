import React from 'react'
import React , {useState ,useEffect} from 'react';
import AppCard from './AppCard';

export default function Fetch() {
    const [GetFetch,stateGetFetch]=useState([]);

    useEffect(()=>{
      fetch("https://604f6ad8c20143001744d013.mockapi.io/posts")
      .then((response) => response.json())
      .then((res) => {
      stateGetFetch(res);
      });
    
    },[])
    console.log(GetFetch);
    let showfilter=GetFetch.filter((item)=>item.isExpired!==false)
      return (
        <div className='d-flex flex-row flex-wrap'>
          {showfilter.map((item)=>
              (<AppCard className="mt-5" key={item.id}
             img={item.image}
             title={item.title}
             description={item.description}
             isExpired={item.isExpired}           
             />)
          )}         
        </div>
      );
}
