import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ slug, title }) => {
  const disqusShortname = "aroyanbakti";
  const disqusConfig = {
    url: `https://www.aroyanbakti.com/blog/${slug}`,
    identifier: slug,
    title: title,
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
