"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
const ReadMoreButton = ({ article }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 rounded-b-lg h-10 dark:text-gray-900 hover:bg-orange-500 hover:text-white"
    >
      Read More
    </button>
  );
};

export default ReadMoreButton;
