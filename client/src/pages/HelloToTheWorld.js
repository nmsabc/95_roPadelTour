// thsi is an exe4rcise on components extraction in React
// https://reactjs.org/docs/components-and-props.html

import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function PostDate(props) {
    return <div className="Comment-date">{formatDate(props.date)}</div>;
  }

  function PostCurrentDate(props) {
    console.log('1...',props.cdate)
    return <div className="Current-date">{formatDate(props.cdate)}</div>;
  }
    
function PostText(props) {
  return <div className="comment-full-text">{props.text}</div>;
}

function Comment(props) {
  return (
    <div className="Comment">
      this was done on: <PostDate date={props.date} /> 
      <UserInfo user={props.author} />
      <PostText text={props.text} />
      And the just now date is: 
      <PostCurrentDate cdate={props.cdate} /> 
    </div>
  );
}

const comment = {
  date: new Date('2023-01-31'),
  cdate: new Date(),
  text: "I hope you enjoy learning React! __ THIS IS NOT PERFECT but WORKS ___",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function HelloToTheWorld() {
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  const root = ReactDOMClient.createRoot(document.getElementById("root"));

  root.render(
    <Comment date={comment.date} text={comment.text} author={comment.author} cdate={comment.cdate} />
  );
  return <div className="the-info" id="root"></div>;
}

export default HelloToTheWorld;
