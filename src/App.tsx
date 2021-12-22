import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Navbar from './Navbar';
import Post from './Post/Post';
type Posts = {
  imageUrl: string;
  userName: string;
  caption: string;
  id: string;
}[];
type PostType = {
  imageUrl: string;
  userName: string;
  caption: string;
  id: string;
};
function App() {
  const [posts, setPosts] = useState<Posts>([]);
  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as PostType;
        })
      );
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      {posts.map(({ id, imageUrl, userName, caption }) => (
        <Post
          key={id}
          imageUrl={imageUrl}
          userName={userName}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default App;
