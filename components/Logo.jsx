import Image from "next/image";

export default function Logo(props) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://links.papareact.com/1m8 "
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
