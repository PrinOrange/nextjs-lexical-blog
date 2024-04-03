import { Config } from "@/data/config";

export const SponsorDescription = () => {
  return (
    <div className="h-full">
      {!Config.Sponsor ? (
        <p className={`font-source-serif-screen break-words text-lg`}>
          {"Thank you, for data and personal private security, every sponsor method was paused."}
        </p>
      ) : (
        <p className={`font-source-serif-screen break-words text-lg`}>
          {
            "If you like my works, I would deeply appreciate your support as a patron. Your contribution not only fuels my creative journey but also allows me to delve deeper into my passion. Your support plays a vital role in making this vision a reality. Thank you for considering becoming a patron and being an integral part of this work endeavor."
          }
          <br />
          {
            "If you have donated me please note your name and contact information, or contact me with the transfer record, and I will add you to the sponsor list."
          }
          <br />
          {"Here are the ways you can become a patron. Thank you for your support!"}
          <br />
          <br />
          {`Yours, ${Config.AuthorName}`}
        </p>
      )}
    </div>
  );
};
