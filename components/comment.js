import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ slug, title }) => {
  return (
    <DiscussionEmbed
      shortname={"aroyanbakti"}
      config={{
        url: `https://www.aroyanbakti.com/blog/${slug}`,
        identifier: slug,
        title: title,
      }}
    />
  );
};
export default DisqusComments;
