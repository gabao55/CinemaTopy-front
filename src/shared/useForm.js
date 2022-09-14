import { useReducer } from "react";

const ACTION_TYPES = Object.freeze({
    handleForm: "handleForm",
    resetForm: "resetForm",
})

function formReducer(state, action) {
    if (action.type === ACTION_TYPES.handleForm) {
        return {
            ...state,
            [action.name]: action.value, 
        }
    }
    if (action.type === ACTION_TYPES.resetForm) {
        return {
            ...action.initState,
        }
    }
}

function useForm ({ initState = {}, reducer = formReducer }) {
    const [form, dispatch] = useReducer(reducer, initState);

    function handleForm(e) {
        const { name, value } = e.target;
        dispatch({ type: ACTION_TYPES.handleForm, name, value })
    }

    function resetForm() {
        dispatch({ type: ACTION_TYPES.resetForm, initState })
    }

    return [form, handleForm, resetForm]
}

export { useForm, formReducer, ACTION_TYPES }