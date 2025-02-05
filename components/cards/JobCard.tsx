import Link from "next/link";

interface JobCardProps {
    job: {
      _id: string;
      title: string;
      company: string;
      location: string;
    };
  }
  
  const JobCard = ({ job }: JobCardProps) => {
    return (
      <div className="p-4 border rounded-md shadow-sm">
        <h3 className="font-semibold text-lg text-dark100_light900">
          {job.title}
        </h3>
        <p className="text-sm text-gray-600">{job.company}</p>
        <p className="text-sm text-gray-500">{job.location}</p>
        <Link
          href={`/jobs/${job._id}`}
          className="mt-2 inline-block text-primary hover:underline"
        >
          View Details
        </Link>
      </div>
    );
  };
  
  export default JobCard;