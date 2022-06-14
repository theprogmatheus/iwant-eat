const useForm = (form, filter) => {

    // parse form element to JS object
    const formObject = (filter) => {
        let formObject = {};

        const formElement = form.current;
        for (let i = 0; i < formElement.length; i++) {
            const input = formElement[i];
            if ((input.name !== '') && (!filter || filter.includes(input.name))) {
                formObject[input.name] = input.value;
            }
        }

        return formObject;
    }

    // handles form submit
    const handleSubmit = (event, handler = () => { }) => {
        event.preventDefault();
        handler(formObject(filter));
    }

    return {
        handleSubmit,
        formObject
    }
}

export default useForm