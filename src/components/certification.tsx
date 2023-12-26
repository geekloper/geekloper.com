import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  imgPath: string;
  credential_link: string;
}

function Certification({ children, imgPath, credential_link }: Props) {
  return (
    <div className="flex flex-col justify-items-center w-64 p-3">
      <img src={imgPath} className="object-none" />
      <a href={credential_link} target="_blank" className="hover:underline decoration-transparent hover:decoration-2 hover:decoration-blue-500 transition">
        <h3 className=" text-center">{children}</h3>
      </a>
    </div>
  );
}

export default Certification;
