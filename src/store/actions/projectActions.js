export const createProject = (project)=>{
    return (dispatch, getState, { getFirebase ,getFirestore})=>{
        // async code 
        dispatch({type:'CREATE_PROJECT', payload: project});
    }
};