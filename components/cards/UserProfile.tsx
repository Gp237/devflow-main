import Link from "next/link";

interface UserProfileProps {
    user: {
      name: string;
      avatar?: string;
      bio?: string;
      questions: { title: string; _id: string }[];
    };
  }
  
  const UserProfile = ({ user }: UserProfileProps) => {
    return (
      <div className="flex flex-col items-center gap-6">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={`${user.name}'s avatar`}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold text-dark100_light900">{user.name}</h1>
        {user.bio && <p className="text-center text-gray-700">{user.bio}</p>}
  
        <section className="w-full mt-6">
          <h2 className="text-xl font-semibold text-dark100_light900 mb-4">
            Questions by {user.name}
          </h2>
          <ul className="flex flex-col gap-4">
            {user.questions.map((question) => (
              <li key={question._id}>
                <Link
                  href={`/questions/${question._id}`}
                  className="text-primary hover:underline"
                >
                  {question.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default UserProfile;
  