import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

export const dynamic = "force-dynamic";
const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const { image, title, author, description, source, published_at } =
    searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {image && (
          <img
            src={image !== "null" ? image : "/No-Image-Placeholder.svg"}
            alt={image !== "null" ? title : "Image Not Provided"}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">{title}</h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {author !== "null" ? author : "Unknown"}
            </h2>
            <h2 className="font-bold pl-4">Source: {source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={published_at} />
            </p>
          </div>
          <p className="pt-4">{description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
