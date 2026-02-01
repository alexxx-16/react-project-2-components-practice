import type { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card shadow-md bg-linear-to-br from-yellow-300 to-orange-400 px-8 py-4 rounded-full font-bold text-white text-xl">
      {children}
    </div>
  );
};

export default Card;
