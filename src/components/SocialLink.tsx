type Props = { link: string; icon: JSX.Element };

export default function SocialLink({ link, icon }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className="text-subh text-bg-dark dark:text-bg transition-transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
