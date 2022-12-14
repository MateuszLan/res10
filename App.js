import React, { Component } from 'react';
import {db} from './Firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
constructor(props) {
super(props);
this.ref = db(collection('kolekcja'));
this.unsubscribe = null;
this.state = {
boards: []
};
}
onCollectionUpdate = (querySnapshot) => {
const boards = [];
querySnapshot.forEach((doc) => {
const { title, description, author } = doc.data();
boards.push({
key: doc.id,
doc, // DocumentSnapshot
title,
description,
author,
});
});
this.setState({
boards
});
}
componentDidMount() {
this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
}
render() {
return (
<div class="container">
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">
BOOKS
</h3>
</div>
<div class="panel-body">
<h4><Link to="/create">Add Board</Link></h4>
<table class="table table-stripe">
<thead>
<tr>
<th>Title</th>
<th>Description</th>
<th>Author</th>
</tr>
</thead>
<tbody>
{this.state.boards.map(board =>
<tr>
<td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
<td>{board.description}</td>
<td>{board.author}</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
</div>
);
}

}

export default App;
