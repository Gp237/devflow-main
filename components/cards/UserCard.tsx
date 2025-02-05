import Link from "next/link";

interface UserCardProps {
  user: {
    _id: string;
    name: string;
    avatar?: string;
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
      <img
        src={user.avatar || "/default-avatar.png"}
        alt={`${user.name}'s avatar`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg text-dark100_light900">
          {user.name}
        </h3>
        <Link
          href={`/profile/${user._id}`}
          className="text-primary hover:underline"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
