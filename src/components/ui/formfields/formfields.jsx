import React from 'react';
import './formfields.css';

const FormField = ({formdata,id,change}) => {

    const showError = () => {
        let errorMessage = <div className="error_label">
                {
                    formdata.validation && !formdata.valid ?
                        formdata.validationMessage
                    :null
                }
        </div>
        return errorMessage
    }



    const renderTemplate = () => {
        let formTemplate = null;
        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className = "formTemplate">
                        {formdata.showlabel? <label className = "formFields__label">{formdata.config.label}</label> : null }
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event)=> change({event,id})}
                        />
                        { showError() }
                    </div>
                )
            break;
            case('select'):
                formTemplate = (
                    <div className = "formTemplate">
                        {formdata.showlabel? <label className = "formFields__label">{formdata.config.label}</label> : null }
                        <select        
                            value = {formdata.value}
                            onChange = { (event)=> change( {event,id} ) }
                        >
                            <option value = "" >Select Option</option>
                            {
                                formdata.config.options.map((item,i)=>{
                                    return(
                                        <option key = {item.key} value = {item.key} > {item.value} </option>
                                    )  
                                })
                            }
                        </select>
                        { showError() }
                    </div>
                )
            break;
            default:
                formTemplate = null;

        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField;