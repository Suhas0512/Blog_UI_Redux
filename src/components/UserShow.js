import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow(props){
    return (
        <div>
            {
                props.user && props.posts?(<div>
                    <h3>Posts written by {props.user.name}</h3>
                    <ol>
                        {props.posts.map(post=>{
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })}
                    </ol>
                </div>):(<h3>Loading...</h3>)
            }
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        posts:state.allDetails.posts.filter(post=>post.userId==props.match.params.id),
        user:state.allDetails.users.find(ele=>ele.id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(UserShow)