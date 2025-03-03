// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Post } from "../../../../model/post";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const post = await Post.findById(params.id);
  if (!post) return NextResponse.json({ message: "Post not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const { title, content } = await req.json();
  const updatedPost = await Post.findByIdAndUpdate(params.id, { title, content }, { new: true });
  return NextResponse.json(updatedPost);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Post.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Post deleted" });
}
