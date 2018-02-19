import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
    render() {
        return (
            <div>
                Create New Post!

                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/">
                        Post List
                    </Link>
                </div>
            </div>
        );
    }
}

export default PostsNew;