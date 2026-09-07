import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function AppFooter() {
  return (
    <Footer container className="mt-auto border-t border-gray-200 bg-white">
      <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <FooterCopyright by="Packfit" year={2026} />
        <FooterLinkGroup>
          <FooterLink href="#">Polityka prywatności</FooterLink>
          <FooterLink href="#">Regulamin</FooterLink>
          <FooterLink href="#">Kontakt</FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
  );
}
