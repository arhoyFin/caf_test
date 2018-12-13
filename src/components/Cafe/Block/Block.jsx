import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <div className = "Block__container">
            <div className = "Block__container_left">
                    <div className = "Block__header"> 
                        {props.name}
                    </div>
                    <div className = "Block__secondary"> 
                        {props.city}
                    </div> 
            </div>
            
            <div className = "Block__container_right">
                 <button onClick = {props.delete} className = "Block__btn"> <span>X</span> </button> 
            </div> 
        </div>
    );
};

export default Block;