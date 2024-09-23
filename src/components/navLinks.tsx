import { links } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`capitalize text-sm transition-all px-3 py-2 rounded-sm ${
            pathname.startsWith(path)
              ? 'bg-[#DAE6F2]'
              : ''
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
