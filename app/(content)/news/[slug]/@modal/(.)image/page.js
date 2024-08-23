"use client";

import { notFound, useRouter } from "next/navigation";

import { getNewsItem } from "@/lib/news";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsSlug = params.slug;
  const newsItem = getNewsItem(newsSlug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
