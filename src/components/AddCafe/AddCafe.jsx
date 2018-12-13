import React, { Component } from 'react';
import FormField from '../ui/formfields/formfields';
import {firebaseCafe} from '../../firebase';
import './AddCafe.css';
import {validate} from '../ui/misc';


class AddCafe extends Component {
    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            cafe_name:{
                element:'input',
                value:'',
                config:{
                    name:'cafe_name_input',
                    type: 'text',
                    placeholder: 'Cafe name',
                    label: 'Cafe Name: '
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            },
            cafe_city:{
                element:'input',
                value:'',
                config:{
                    name:'city_input',
                    type: 'text',
                    placeholder: 'Where is the cafe?',
                    label: 'Cafe Location: '
                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showlabel:true
            }
        }
    }
    updateForm(element){
        const formdata = {...this.state.formdata}
        const newElement = { ...formdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1]

        formdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata
        })
    }

    successForm(message){
        const formdata = {...this.state.formdata};
        formdata.cafe_name.value = '';
        formdata.cafe_city.value = '';

        this.setState({
            formSuccess: message
        });

        setTimeout(()=>{
            this.setState({
                formSuccess: '',
                formdata
            });
            window.location.reload();
        }, 500)
    }

    submitFormHandler(event){
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if(formIsValid){
           
            console.log(dataToSubmit);

            // save the data in firebase
            firebaseCafe.add({dataToSubmit});

            // display success message and clear form fields
            this.successForm('Cafe Added!');



        }
        else {
            this.setState({formError: true}) 
            console.log('something went wrong') 
        }
    }
    hideEventHandler = ()=>{
        this.props.history.push('/cafes')
    }
    render() {
        const {cafe_name,cafe_city} = this.state.formdata;
     
        return (

                <div className = "AddCafe">
                    <form onSubmit = {(event)=> this.submitFormHandler(event) } > 
                 
                        <FormField
                                id={'cafe_name'}
                                formdata={cafe_name}
                                change={(element)=> this.updateForm(element)}
                        />
                          <FormField
                                id={'cafe_city'}
                                formdata={cafe_city}
                                change={(element)=> this.updateForm(element)}
                        />

                    <button className = "AddCafe__button">Add Me</button>
                    <p onClick = {this.hideEventHandler} className = "AddCafe__notification">Hide Me</p>

                    <div className="AddCafe__successLabel">{this.state.formSuccess}</div>
                            {this.state.formError ? 
                                <div className="AddCafe__errorLabel">
                                    Something is wrong
                                </div>
                                : ''
                            }

                    </form>
                </div>
        
        );
    }
}

export default AddCafe;