import Card from "./components/Card";
import img from "./assets/man.jpg"

function App() {
  const person = {
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sapiente, officia ad velit labore consectetur modi obcaecati delectus quae voluptatem dignissimos itaque officiis vel aut! Voluptatum magni id est ex!accusamus dicta eum.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "mailto@gmail.com",
    github: "",
    image: img,
  };

  return (
    <div className="w-full bg-gray-200 min-h-screen p-16">
      <h1 className="text-black text-4xl text-bold text-center">
        Digital Business Card
      </h1>
      <div className="flex flex-col items-center justify-center mt-4">
        <Card person={person} /> <br />
        <Card person={person} /> <br />
        <Card person={person} /> <br />
      </div>
    </div>
  );
}

export default App;
