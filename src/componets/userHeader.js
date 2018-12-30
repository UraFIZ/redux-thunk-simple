import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/actions'
class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }
  render() {

    const { users } = this.props;

    return (
      <div className="header">
        {users ? users.name : users}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)