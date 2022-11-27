export default function TextBehind({
  children,
}: {
  children: React.ReactElement | String;
}) {
  return <span className="absolute text-center leading-none z-[-1] bottom-0 sm:left-[-50%] left-[-20%] font-extrabold sm:text-[8rem] text-[5rem] select-none text-off-white dark:text-off-dark">{children}</span>;
}
