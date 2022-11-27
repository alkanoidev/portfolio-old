import "./style.scss";

type Props = {
  icon: JSX.Element;
  title: string;
  small?: boolean;
};
export default function Technology({ icon, title, small }: Props) {
  return (
    <button
      name={title}
      className={`${
        small ? "text-subh" : "text-headline"
      } technology flex justify-center relative transition text-primary bg-clip-text group opacity-0`}
    >
      <div
        id="tooltip"
        className={`capitalize max-w-[100px] font-extralight ${
          small ? "top-[-120%]" : "top-[-70%]"
        } absolute z-10  text-code bg-off-white dark:bg-off-dark
            text-bg-dark dark:text-bg px-3 py-2 rounded-sm transition
            hidden group-hover:block font-bold tracking-wide`}
      >
        {title}
      </div>
      {icon}
    </button>
  );
}
