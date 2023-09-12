import React from "react";

interface ICertificado {
  href: string;
  src: string;
  alt: string;
}

const Certificado = ({ href, src, alt }: ICertificado) => {
  return (
    <a
      href={href}
      target="_blank"
      style={href.length === 0 || href === "#" ? { pointerEvents: "none" } : {}}
    >
      <img src={src} alt={alt} />
    </a>
  );
};

export default Certificado;
