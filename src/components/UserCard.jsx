import { AiOutlineHeart } from "react-icons/ai";

const UserCard = ({ user }) => {
  //   console.log(Object.keys(user).join(","));
  const { _id, name, email, body } = user;
  return (
    <div className="border p-5 overflow-hidden flex flex-col justify-between gap-5 relative">
      <AiOutlineHeart className="text-3xl  absolute right-2 top-2"></AiOutlineHeart>
      <div className="pt-5">
        <h1 className="text-lg font-bold my-2">{name}</h1>
        <p className="text-xs">{email}</p>
        <p className="text-sm mt-3">{body}</p>
      </div>
      <div className="">
        <button className="border px-4 py-1 mr-5 font-bold rounded-full border-red-600 text-red-500">
          Add
        </button>
        <button className="border px-4 py-1 font-bold rounded-full">
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserCard;
