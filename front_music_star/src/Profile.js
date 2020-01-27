import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    this.setState({
      isLoaded: true,
      loggedInUser: this.props.location.state.user
    })
  }
  render() {
    return (
      <ListItem>
        <ListItemText primary={this.state.loggedInUser.first_name} />{' '}
        <ListItemText primary={this.state.loggedInUser.last_name} />{' '}
        <ListItemText primary={this.state.loggedInUser.email} />{' '}
        <ListItemText primary={this.state.loggedInUser.address} />{' '}
      </ListItem>
    )
  }
}

export default Profile