export const createProject = (project)=>{
    return (dispatch, getState, { getFirebase ,getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Narasimha',
            authorLastName : 'Reddy',
            authorid : 12345,
            createdAt : new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', payload: project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_EERROR',error: err})
        })
        
    }
};