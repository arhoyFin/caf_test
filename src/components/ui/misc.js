
export const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.docs.forEach(doc => {
        const {cafe_name,cafe_city} = doc.data().dataToSubmit;

        data.push({
            id:doc.id,
            cafe_name,
            cafe_city
        })
    });
    
    return data;
}

export const validate = (element) => {
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message]: error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message]: error;
    }

    return error;
}
