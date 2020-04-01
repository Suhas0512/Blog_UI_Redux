import axios from 'axios'

export const startGetAll=()=>{
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const users=response.data
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                const posts=response.data
                axios.get("https://jsonplaceholder.typicode.com/comments")
                .then(response=>{
                    const comments=response.data
                    dispatch(getAll({users,posts,comments}))
                })
            })
        })
    }
}

export const getAll=(obj)=>{
    return{
        type:'GET_DATA',
        payload:obj
    }
}