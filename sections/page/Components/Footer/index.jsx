import Image from "next/image";

export const Footer = ({ lang }) => {
  const getFooterContent = () => {
    const content = lang === "en" ? "Proudly" : "Orgullosamente";
    const altText = lang === "en" ? "nationality" : "nacionalidad";

    return (
      <footer className="w-full bg-gray-900 text-white flex flex-col items-center py-6">
        <p className="text-lg mb-2">{content}</p>
        <div>
          <Image
            src="/bandera.png"
            alt={altText}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </footer>
    );
  };

  return getFooterContent();
};
