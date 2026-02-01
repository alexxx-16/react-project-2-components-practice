interface UserCardProps {
  name: string;
  age: number;
  verified: boolean;
}

const UserCard = ({ name, age, verified }: UserCardProps) => {
  return (
    <div className="bg-linear-to-br shadow-md from-pink-100 to-pink-300 py-8 px-16 text-pink-700 text-lg gap-2 rounded-full capitalize flex flex-col">
      <p>
        User Name: <span className="text-2xl font-semibold">{name}</span>
      </p>
      <p>
        User Age: <span className="text-2xl font-semibold">{age}</span>
      </p>
      {verified && <span className="self-center">✔️</span>}
    </div>
  );
};

export default UserCard;
