const userInitial={
    users:[],
    posts:[],
    comments:[]
}

export const allDetailsReducer=(state=userInitial,action)=>{
    switch(action.type){
        case 'GET_DATA':{
            return {
                users:[...action.payload.users],
                posts:[...action.payload.posts],
                comments:[...action.payload.comments]
            }
        }
        default:{
            return {...state}
        }
    }
}