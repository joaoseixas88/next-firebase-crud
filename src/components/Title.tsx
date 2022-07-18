interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <div className={`flex flex-col justify-center`}>
      <h1 className={`p-5`}>{title}</h1>
			<hr className={`border-2 border-purple-500`}/>
    </div>
  );
}
