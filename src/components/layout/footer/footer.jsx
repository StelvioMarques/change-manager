"use client"

import { useState } from "react";
import { FooterLink } from "./footer-link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-background text-zinc-400 w-full font-sans">
      <div className="border-b border-zinc-900 px-10 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-[200px_1fr] gap-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <h1>Logo</h1>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed max-w-43.75">
              Mudanças residenciais e comerciais com segurança e pontualidade.
            </p>
          </div>

          {/* Links + Newsletter + Social grid */}
          <div className="grid grid-cols-3 gap-8">

            {/* Serviços */}
            <div>
              <h4 className="text-[11px] font-medium text-zinc-100 uppercase tracking-widest mb-4">
                Serviços
              </h4>
              <ul className="flex flex-col gap-2.5">
                <FooterLink>Mudança residencial</FooterLink>
                <FooterLink>Mudança comercial</FooterLink>
                <FooterLink>Mudança interestadual</FooterLink>
                <FooterLink>Transporte de móveis</FooterLink>
                <FooterLink>Guarda-móveis</FooterLink>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-[11px] font-medium text-zinc-100 uppercase tracking-widest mb-4">
                Suporte
              </h4>
              <ul className="flex flex-col gap-2.5">
                <FooterLink>Solicitar orçamento</FooterLink>
                <FooterLink>Rastrear mudança</FooterLink>
                <FooterLink>Dúvidas frequentes</FooterLink>
                <FooterLink>Como funciona</FooterLink>
                <FooterLink>Contato</FooterLink>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}