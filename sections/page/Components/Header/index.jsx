import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter(); // Obtenemos la ruta actual

  return (
    <div className="flex justify-center">
      {/* Español */}
      <Link href="/es" passHref legacyBehavior>
        <a
          className={`${
            router.pathname === "/es"
              ? "bg-[#004172] text-white font-semibold border-[#005187]"
              : "bg-[#005187] text-gray-300 border-[#004172]"
          } py-2 px-4 border transition-all duration-300 hover:bg-[#003358]`}
        >
          Español
        </a>
      </Link>

      {/* English */}
      <Link href="/en" passHref legacyBehavior>
        <a
          className={`${
            router.pathname === "/en"
              ? "bg-[#004172] text-white font-semibold border-[#005187]"
              : "bg-[#005187] text-gray-300 border-[#004172]"
          } py-2 px-4 border transition-all duration-300 hover:bg-[#003358]`}
        >
          English
        </a>
      </Link>
    </div>
  );
};
