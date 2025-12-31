import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export default function TeamCard({ name, role, image, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-blue-600 font-medium">{role}</p>
      <p className="text-sm text-gray-600 mt-3">{bio}</p>
    </div>
  );
}
