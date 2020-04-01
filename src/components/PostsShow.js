import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PostsShow(props){
    console.log(props.comments,props.posts,props.user)
    return(
        <div>
            {props.posts?(
                <div>
                    <h2>User Name:{props.user.name}</h2>
                    <h2>Title:{props.posts.title}</h2>
                    <b>Body:</b><p>{props.posts.body}</p><hr/>
                    <h3>Comments:</h3>
                    <ol>
                        {props.comments.map(ele=>{
                            return <li key={ele.id}>{ele.body}</li>
                        })}
                    </ol>
                    <Link to={`/users/${props.user.id}`}>Back to {props.user.name}</Link>
                </div>
            ):(<div><h3>Loading</h3></div>)}
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        posts:state.allDetails.posts.find(ele=>ele.id==props.match.params.id),
        comments:state.allDetails.comments.filter(ele=>ele.postId==props.match.params.id),
        user:state.allDetails.users.find(ele=>ele.id==state.allDetails.posts.find(ele=>ele.id==props.match.params.id).userId)
    }
}
export default connect(mapStateToProps)(PostsShow)