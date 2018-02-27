import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.post) {
            const id = this.props.match.params.id;
            console.log(id);
            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const id = this.props.match.params.id;
        this.props.deletePost(id, () => { this.props.history.push('/'); });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <br />
                <div className="text-xs-right">
                    <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                    <Link to="/" className="btn btn-primary">Post List</Link>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// ownProps == this.props
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);