import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "../../../model/post";

export async function GET() {
  await connectDB();
  const posts = await Post.find();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  await connectDB();
  const { title, content } = await req.json();
  const newPost = new Post({ title, content });
  await newPost.save();
  return NextResponse.json(newPost, { status: 201 });
}