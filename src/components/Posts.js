import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Posts(props){
    return(
        <div>
            <h2>Listing posts - {props.posts.length}</h2>
            <ol>
                {
                    props.posts.map(post=>{
                        return (
                            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        posts:state.allDetails.posts
    }
}
export default connect(mapStateToProps) (Posts)