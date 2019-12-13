//sync action creators 

export const updateNewSubChannelForm = (name, value) => {
    return {
        type: 'UPDATE_NEW_SUBCHANNEL_FORM', 
        formData: {name, value}
    }
}