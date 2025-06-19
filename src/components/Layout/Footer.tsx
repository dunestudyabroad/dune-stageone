"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/icons/footer.svg";
import logo2 from "../../../public/icons/footer2.svg";
import Link from "next/link";
import { LinkedIn, Yt, Meta, Inatagram } from "../../../public/icons/footerIcons/Icons";
import PrivacyModal from "./PrivacyModal";

const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer>
        <div className="bg-[#2B2B60]">
          <div className="flex flex-col md:flex-row justify-between mx-6 md:mx-24 py-8 md:py-14">
            <div className="flex justify-center gap-5 md:justify-start mb-6 md:mb-0">
              <Link href="/"><Image alt="footer logo" width={210} height={210} src={logo} /></Link>
              <Image alt="footer2 logo" width={240} height={240} src={logo2} className="hidden md:block" />
            </div>
            <div className="flex justify-center gap-5 md:justify-start mb-6 md:mb-0 md:hidden">
              <Image alt="footer2 logo mobile" width={240} height={240} src={logo2} />
            </div>
            <div className="text-center md:text-right">
              <p className="text-[14px] text-[#FEFEFE] md:text-[18px]">For Free Counselling Contact</p>
              <Link href="tel:+918792358999">
                <p className="text-[14px] font-semibold text-[#FEFEFE] md:text-[18px]">+91 879 235 8999</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-24 pt-6 md:pt-9 pb-8 md:pb-14">
            <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link target="_blank" href="https://www.instagram.com/studymetro_mangalore"><Inatagram /></Link>
              <Link target="_blank" href="https://www.linkedin.com"><LinkedIn /></Link>
              <Link target="_blank" href="https://www.facebook.com/studymetro.abroad"><Meta /></Link>
              <Link target="_blank" href="https://www.youtube.com/channel/UC_EjChebrWmyKsId3cMt-Rw"><Yt /></Link>
            </div>

            <div className="text-[#9583FE] text-[13px] text-center md:text-left mb-4 md:mb-0">
              <p>
                <button onClick={() => setPrivacyOpen(true)} className="underline cursor-pointer">
                  Privacy Policy
                </button>
                <span className="mx-2">.</span>
                <Link target="_blank" href="https://www.studymetro.com/TermsCondition">
                  <span>Terms of Use</span>
                </Link>
              </p>
            </div>

            <div className="text-[#9583FE] text-[13px] text-center md:text-right">
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};

export default Footer;
