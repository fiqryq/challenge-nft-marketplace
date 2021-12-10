export default function Img({ border, src }) {
  return (
    <img
      className={`w-10 h-10 rounded-full object-cover border-${border} border-light-blue-500`}
      src={src}
      alt="image"
    />
  );
}
