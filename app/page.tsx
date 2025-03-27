import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src={"/assets/coming-soon.png"}
        alt="Coming Soon"
        width={300}
        height={300}
      />
    </div>
  );
};

export default Home;
