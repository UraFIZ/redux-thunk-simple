import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/actions';
import UserHeader from './userHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost()
  }
  renderList() {
    return this.props.post.map(item => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <UserHeader userId={item.userId} />
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}
const mapStateToProps = (state) => {

  return { post: state.post }
}
export default connect(mapStateToProps, { fetchPost })(PostList)