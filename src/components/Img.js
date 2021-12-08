export default function Img({ border }) {
  return (
    <img
      className={`w-10 h-10 rounded-full object-cover border-${border} border-light-blue-500`}
      src={
        "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
      }
      alt="image"
    />
  );
}
