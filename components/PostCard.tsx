import Link from "next/link"
import { PostPreview } from "@/types/posts"

export default function PostCard({ postPreview }: { postPreview: PostPreview }) {
  return (
    <div className={"post-card"} style={{ backgroundImage: `url(${postPreview.previewImage})` }}>
      <Link href={`blog\\${postPreview.slug}`}>
        <div className={"post-card-content"}>
          <h2 className={"post-card-title"}>{postPreview.title}</h2>
          <p className={"post-card-description"}>{postPreview.description}</p>
        </div>
      </Link>
    </div>
  )
}
