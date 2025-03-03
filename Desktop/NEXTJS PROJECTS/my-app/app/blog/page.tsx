"use client";
import { useState, useEffect } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editPostId, setEditPostId] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data: Post[] = await res.json();
    setPosts(data);
  };

  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const newPost: Post = await res.json();
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  const updatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPostId) return;
    const res = await fetch(`/api/posts/${editPostId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const updatedPost: Post = await res.json();
    setPosts(
      posts.map((post) => (post._id === editPostId ? updatedPost : post))
    );
    setTitle("");
    setContent("");
    setEditPostId(null);
  };

  const deletePost = async (postId: string) => {
    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setPosts(posts.filter((post) => post._id !== postId));
    }
  };

  const startEditPost = (post: Post) => {
    setEditPostId(post._id);
    setTitle(post.title);
    setContent(post.content);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <form onSubmit={editPostId ? updatePost : addPost} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editPostId ? "Update Post" : "Add Post"}
        </button>
      </form>
      <div>
        {posts.map((post) => (
          <div
            key={post._id}
            className="mb-4 p-4 border border-gray-200 rounded-md"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => startEditPost(post)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
