import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar';
import Amplify, { API } from 'aws-amplify';

class Main extends Component {
  state = {
    selectedTab: 0,
    apiResponse: null,
    noteId: ''
  }

  handleChangeNoteId = (event) => {
   this.setState({noteId: event});
  }

  async saveNote() {
    let newNote = {
      body: {
        "NoteTitle": "My first note!",
        "NoteContent": "This is so cool!",
        "NoteId": "1"
      }
    }
    const path = "/Notes";

    // Use the API module to save the note to the database
    try {
      const apiResponse = await API.put("NotesCRUD", path, newNote)
      console.log("response from saving note: " + apiResponse);
      this.setState({apiResponse});
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
      this.setState({selectedTab: 1})
  }

  render(){
    const navItems = ['home', 'history']
    return (
      <View>
        <NavBar items={navItems} selectedTab={this.state.selectedTab} />
        <Text>{this.state.selectedTab}</Text>
      </View>
    );
  }
}

export default Main;
