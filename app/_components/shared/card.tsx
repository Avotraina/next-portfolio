type Children = Readonly<{
  children: React.ReactNode;
}>;

const Card: React.FC<Children> = ({children}) => {
  return (
    <div className="flex flex-col px-4 py-4 gap-4">
      {children}
    </div>
  );
}

export default Card;