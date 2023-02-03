import { useState } from "react";

const ShareButton = ({ title, text, url }) => {
  const [shared, setShared] = useState("");

  const data = {
    title,
    text,
    url,
  };

  return (
    <>
      {shared ? (
        <div colorScheme={"green"} p="2">
          Thanks for sharing
        </div>
      ) : (
        <button
          colorScheme="cyan"
          mt="4"
          onClick={async () => {
            try {
              await navigator.share(data);
              setShared("Shared");
            } catch (err) {
              setShared("");
              throw err;
            }
          }}
        >
          Share
        </button>
      )}
    </>
  );
};

export default ShareButton;
