const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((item) => item.image !== "null");
  const newsWithoutImage = news.data.filter((item) => item.image === "null");

  const sortedNewsResponses: NewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponses;
};

export default sortNewsByImage;
