import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Create New Post!</h3>
                    <Field name="title" component={this.renderTitleField} />
                </form>

                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/">
                        Post List
                    </Link>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);