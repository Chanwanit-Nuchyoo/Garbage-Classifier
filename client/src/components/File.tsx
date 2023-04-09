import { RxCross2 } from "react-icons/rx";

type Props = {
  filename: string;
  index: number;
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  isLoading: boolean;
};

const File = (props: Props) => {
  const { filename, index, setImageFiles, isLoading } = props;

  const handleDeleteFile = (i: number) => {
    setImageFiles((prevState) => {
      const newState = [...prevState];
      return newState.filter((_, ix) => ix !== i);
    });
  };

  return (
    <div className="w-ful rounded-xl bg-gray-200 hover:bg-gray-300 transition-all h-[46px] flex justify-between py-2 px-4 items-center text-xl">
      <p className="underline truncate w-full">{filename}</p>
      <RxCross2
        className="text-2xl font-extrabold hover:text-red-600"
        onClick={isLoading ? ()=>{}:() => {
          handleDeleteFile(index);
        }}
      />
    </div>
  );
};

export default File;
