{/* <div>
// import { useRouter } from "next/router";

// export default function Abc() {
//   const router = useRouter();

//   const handleLogin = () => {
//     router.push("/about/why");
//   };

//   return <button onClick={handleLogin}>Login</button>;
// }
</div> */}




type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}



export default function InfoCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
      {/* <p className="text-gray-600">We are a team building modern web applications.</p> */}
      <p className="text-gray-600"> Allianz SE is a German multinational financial services and insurance company headquartered in Munich, Germany. It is one of the largest insurance and asset management firms in the world. Its core operations include: • Life insurance • Health insurance • Property & casualty (P&C) insurance • Vehicle insurance • Travel insurance • Investment management & asset management • Specialized global corporate insurance solutions The company serves customers in over 70 countries and manages hundreds of billions in assets while offering tailored coverage for both individuals and corporations." </p>
    </div>
    
  );
}



 export function Page() {
  const cards = [
    {
      title: "Who We Are",
      description: "Allianz SE is a German multinational financial services and insurance company headquartered in Munich, Germany. It is one of the largest insurance and asset management firms in the world. Its core operations include: • Life insurance • Health insurance • Property & casualty (P&C) insurance • Vehicle insurance • Travel insurance • Investment management & asset management • Specialized global corporate insurance solutions The company serves customers in over 70 countries and manages hundreds of billions in assets while offering tailored coverage for both individuals and corporations."
    },
    {
      title: "Why Choose Us",
      description: "We focus on performance, design, and scalability.",
    },
    {
      title: "Our Mission",
      description: "Deliver high-quality digital experiences.",
    },
    {
      title: "Who We Are",
      description: "We are a team building modern web applications.",
    },
  ];

  return (
    <div className="max-w-3xl l-5 mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

