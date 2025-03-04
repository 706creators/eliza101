type Props = {
  src: string;
};

export function Youtube({ src }: Props) {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
