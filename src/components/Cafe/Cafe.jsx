import React, { Component } from 'react';
import {firebaseCafe} from '../../firebase'
import {firebaseLooper} from '../ui/misc';
import './Cafe.css';
import Block from './Block/Block';

class Cafe extends Component {
    state = {
        cafes: [],
        isLoading: true
    }
    componentDidMount() {
    
        // get cafes from firebase
        firebaseCafe.get().then( (snapshot)=>{
               const cafes =  firebaseLooper(snapshot);
               this.setState({cafes, isLoading:false})
        });
    }


     // cafe delete event handler
     deleteEventHandler = (id)=>{
        console.log(id);
        firebaseCafe.doc(id).delete().then( (data)=>{
            window.location.reload();
        })
        .catch( e => console.log(e) )
     };
     // render cafes 
     renderCafes = ()=>{
         const {cafes} = this.state; 
         const {isLoading} = this.state;
         console.log(cafes);
            return (
                isLoading ? null : 

                <div>
                    <h3>The cafe names and locations</h3>
                    <div>
                        {
                        cafes.map( cafe =>{
                                const {id} = cafe;
                                console.log(id);
                                return(
                                    <div key = {id}>
                                    <Block
                                        name = {cafe.cafe_name}
                                        city = {cafe.cafe_city}
                                        delete = { ()=> this.deleteEventHandler(id)}
                                    />
                             
                                </div>
                                 )
                            })   
                        }
                    </div>
                </div>                
            )
         }
  

    render() {
        console.log(this.props)
        return (
            <div className = "container container__cafe">
                {this.renderCafes()}
            </div>
        );
    }
}

export default Cafe;