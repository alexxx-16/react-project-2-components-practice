import { useState } from "react";
import Time from "./Time";
import UserCard from "./UserCard";
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";
import type { ChangeEvent } from "react";

const Welcome = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    isSubmitted: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age) return;

    setUserData({
      name: formData.name,
      age: Number(formData.age),
      isSubmitted: true,
    });

    setFormData({ name: "", age: "" });
  };

  return (
    <div
      className={`h-screen  flex justify-center items-center transition-all duration-500 ${userData.isSubmitted ? "flex-row gap-20" : "flex-col gap-4"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-orange-300">
          Today is{" "}
          <span className="text-orange-400">
            {new Date().toLocaleString("en-AU", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </h2>

        <h1 className="capitalize text-4xl text-pink-600 font-semibold">
          {`Hello${userData.name ? ` ${userData.name}!` : "."}`}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <Input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type your name here."
          />
          <Input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Type your age here."
          />
          <Button>OK</Button>
        </form>

        <Card>
          <Time name={userData.name} />
        </Card>
      </div>

      {userData.isSubmitted && (
        <div className="animate-enter flex flex-col items-center justify-center gap-4">
          <UserCard
            name={userData.name}
            age={userData.age}
            verified={userData.isSubmitted}
          />
          <Button>Click Me</Button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
