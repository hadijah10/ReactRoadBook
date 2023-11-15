import React, { useState } from "react";
const stories = [
  {
    title: "React",
    url: "https://react.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov,Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "flux",
    url: "https://redux.js.org",
    author: "Dan Abramov,Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: "Firebase",
    url: "https://redux.js.org",
    author: "Dan Abramov,Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("React");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchStories = stories.filter((story) =>
    story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Hacker Stories</h1>
      <label htmlFor="search">Searh: </label>
      <input type="text" id="search" />
      <Search search={searchTerm} handleChange={handleChange} />
      <hr />
      <List list={searchStories} />
    </div>
  );
}
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} {...item} />
    ))}
  </ul>
);

function Search(props) {
  const { search, onSearch } = props;
  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input type="text" value={search} id="search" onChange={onSearch} />
    </div>
  );
}

const Item = ({ title, url, author, num_comments, points }) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

export default App;
