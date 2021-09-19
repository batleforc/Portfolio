import React from "react";
import MediaItem from "./MediaItem";
export interface MediaContent {
  label: string;
  icon: string;
  link: string;
}

const Media = ({ medias }: { medias: Array<MediaContent> }) => {
  return (
    <div className="justify-center place-items-center">
      {medias.map((media) => (
        <MediaItem
          key={media.label}
          label={media.label}
          icon={media.icon}
          link={media.link}
        />
      ))}
    </div>
  );
};

export default Media;
