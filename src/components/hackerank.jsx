import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'; 

import { addItemToArr } from '../redux/actions';

const Hacker=({showItems,updateItems})=>{

    const[data,setData]=useState([]);

    useEffect(()=>{

        fetch('https://jsonmock.hackerrank.com/api/articles')
        .then(response => response.json())
        .then(data => updateItems(data))
        //.then(d => setData( [...data,{...d}] ));
    },[]);

    console.log(showItems);
    return(
        <div>
            <h1>Welcome</h1>
            <div>
                {/* {showItems} */}
            </div>
        </div>
    )
}

const mapStateToProps = state =>({

    showItems: state.Items
})

const mapDispatchToProps=dispatch=>({

    updateItems: (d)=> dispatch(addItemToArr(d))
})

export default connect(mapStateToProps,mapDispatchToProps)(Hacker);