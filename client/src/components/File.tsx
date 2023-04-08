import { RxCross2 } from "react-icons/rx";

type Props = {
  filename: string;
  index: number;
  setImageFiles?: (index: number) => void;
};

const File = (props: Props) => {
  const { filename, index, setImageFiles } = props;

  return (
    <div className="w-ful rounded-xl bg-gray-200 hover:bg-gray-300 transition-all h-[46px] flex justify-between py-2 px-4 items-center text-xl">
      <p className="underline ">hello</p>
      <RxCross2 className="text-2xl font-extrabold hover:text-red-600" />
    </div>
  );
};

export default File;
