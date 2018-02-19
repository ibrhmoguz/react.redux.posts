import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';


class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        //console.log(field.meta);
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, ()=> {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create New Post!</h3>
                    <Field name="title" label="Title for Post" component={this.renderField} />
                    <Field name="category" label="Categories" component={this.renderField} />
                    <Field name="content" label="Post Content" component={this.renderField} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/">Post List</Link>
                </form>
            </div>
        );
    }
}

function validateForm(values) {
    //console.log(values) -> {title: 'asdf', category: 'asdfasd', content: 'asdfasd'}
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (!values.category) {
        errors.category = "Enter a category!";
    }

    if (!values.content) {
        errors.content = "Enter a content!";
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate: validateForm
})(
    connect(null, { createPost })(PostsNew)
);