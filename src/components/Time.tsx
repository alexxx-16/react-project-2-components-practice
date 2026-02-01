interface TimeProps {
  name?: string;
}

const Time = ({ name }: TimeProps) => {
  return (
    <div>
      {/* <h1 className="text-xl text-orange-500 font-semibold bg-yellow-100 py-4 px-8 rounded-full"> */}
      <h1>
        The time now is {new Date().toLocaleTimeString()}
        {name && <span className="capitalize">, {name}</span>}.
      </h1>
    </div>
  );
};

export default Time;
