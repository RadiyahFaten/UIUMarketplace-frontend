import { useState } from "react";

function Header({ title, description }) {
  if (title && description) {
    return (
      <div>
        <h2> {`Here we have ${title}`}</h2>
        <p>Hello there, {description}</p>
        <Title />
      </div>
    );
  } else {
    return <h2>No title or description provided</h2>;
  }
}

function Article() {
  return (
    <div>
      <h2>Article</h2>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h3>My Title</h3>

      <Link />
    </div>
  );
}

function Link() {
  return (
    <div>
      <h4>My Link</h4>
    </div>
  );
}

export default function Homepage() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 2);
  }

  const array = ["Radiyah", "Shahidul", "Oishi"];
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Header title="Hello" description="This is a sample description" />
      <ul>
        {array.map((name, i) => (
          <li key={i}> {name} </li>
        ))}
      </ul>
      <button onClick={handleClick}> Likes({likes}) </button>
      <Article />
      <Footer />
    </div>
  );
}