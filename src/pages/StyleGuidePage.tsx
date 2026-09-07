import { Badge, Button, Card, HelperText, HRText, Label, TextInput } from "flowbite-react";
import { ArrowRightIcon } from "flowbite-react/icons";
import type { ComponentProps } from "react";

/* ==========================================================================
 * Ikony pomocnicze (ozdobne, na potrzeby prezentacji pól formularza)
 * ======================================================================== */

function EnvelopeIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function LockIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function EyeSlashIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

/* ==========================================================================
 * Definicje prezentowanych tokenów (klasy zapisane literalnie,
 * żeby Tailwind mógł je wykryć w źródłach)
 * ======================================================================== */

const primaryScale = [
  { token: "primary-50", className: "bg-primary-50" },
  { token: "primary-100", className: "bg-primary-100" },
  { token: "primary-200", className: "bg-primary-200" },
  { token: "primary-300", className: "bg-primary-300" },
  { token: "primary-400", className: "bg-primary-400" },
  { token: "primary-500", className: "bg-primary-500" },
  { token: "primary-600", className: "bg-primary-600" },
  { token: "primary-700", className: "bg-primary-700" },
  { token: "primary-800", className: "bg-primary-800" },
  { token: "primary-900", className: "bg-primary-900" },
  { token: "primary-950", className: "bg-primary-950" },
];

const grayScale = [
  { token: "gray-50", className: "bg-gray-50" },
  { token: "gray-100", className: "bg-gray-100" },
  { token: "gray-200", className: "bg-gray-200" },
  { token: "gray-300", className: "bg-gray-300" },
  { token: "gray-400", className: "bg-gray-400" },
  { token: "gray-500", className: "bg-gray-500" },
  { token: "gray-600", className: "bg-gray-600" },
  { token: "gray-700", className: "bg-gray-700" },
  { token: "gray-800", className: "bg-gray-800" },
  { token: "gray-900", className: "bg-gray-900" },
  { token: "gray-950", className: "bg-gray-950" },
];

const colorUsage = [
  { className: "bg-primary-900", label: "primary-900", usage: "przyciski, aktywne akcenty, linki wyróżnione" },
  { className: "bg-primary-800", label: "primary-800", usage: "linki w tekście pomocniczym" },
  { className: "bg-gray-50", label: "gray-50", usage: "tło ekranu" },
  { className: "bg-gray-200", label: "gray-200", usage: "obramowania kart i przycisków secondary" },
  { className: "bg-gray-300", label: "gray-300", usage: "obramowania inputów, nieaktywne kropki" },
  { className: "bg-gray-400", label: "gray-400", usage: "placeholdery" },
  { className: "bg-gray-500", label: "gray-500", usage: "tekst subtelny (caption, divider)" },
  { className: "bg-gray-600", label: "gray-600", usage: "tekst drugorzędny" },
  { className: "bg-gray-700", label: "gray-700", usage: "opisy / body secondary" },
  { className: "bg-gray-900", label: "gray-900", usage: "nagłówki, tekst główny" },
];

/* ==========================================================================
 * Elementy pomocnicze strony
 * ======================================================================== */

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl text-gray-900">{title}</h2>
        {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Swatch({ token, className }: { token: string; className: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`h-14 w-full rounded-base border border-gray-200 ${className}`} />
      <p className="text-xs font-medium text-gray-600">{token}</p>
    </div>
  );
}

function SpecimenRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6">
      <p className="w-56 shrink-0 text-xs font-medium text-gray-500">{label}</p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/* ==========================================================================
 * Strona Style Guide
 * ======================================================================== */

export function StyleGuidePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12">
      {/* Nagłówek strony */}
      <header className="flex flex-col gap-3">
        <Badge className="w-fit" color="default">
          Packfit UI Kit
        </Badge>
        <h1 className="text-4xl text-gray-900 sm:text-5xl">Style Guide</h1>
        <p className="max-w-2xl text-base text-gray-700">
          Tokeny i komponenty wyprowadzone z ekranów Figmy (page „mobile 1st”). Wszystkie wartości pochodzą z{" "}
          <code className="rounded-sm bg-gray-100 px-1.5 py-0.5 text-sm text-primary-900">@theme</code> w{" "}
          <code className="rounded-sm bg-gray-100 px-1.5 py-0.5 text-sm text-primary-900">src/index.css</code> — w
          komponentach używamy wyłącznie klas tokenowych.
        </p>
      </header>

      {/* ===== Kolory ===== */}
      <Section title="Kolory" description="Skala primary (brand) zbudowana wokół primary-900 oraz skala szarości.">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold tracking-normal text-gray-900">Primary</h3>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-11">
              {primaryScale.map((c) => (
                <Swatch key={c.token} token={c.token} className={c.className} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold tracking-normal text-gray-900">Gray</h3>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-11">
              {grayScale.map((c) => (
                <Swatch key={c.token} token={c.token} className={c.className} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-sans text-sm font-semibold tracking-normal text-gray-900">Zastosowanie</h3>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {colorUsage.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className={`h-5 w-5 shrink-0 rounded-full border border-gray-200 ${c.className}`} />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">{c.label}</span> — {c.usage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===== Typografia ===== */}
      <Section
        title="Typografia"
        description="Nagłówki: Instrument Serif (font-heading). Tekst i UI: Inter (font-sans)."
      >
        <Card>
          <div className="flex flex-col gap-4">
            <SpecimenRow label="H1 · font-heading · text-4xl">
              <h1 className="text-4xl text-gray-900">Mniej ubrań. Więcej stylizacji.</h1>
            </SpecimenRow>
            <SpecimenRow label="H2 · font-heading · text-3xl">
              <h2 className="text-3xl text-gray-900">Zapisz swój plan</h2>
            </SpecimenRow>
            <SpecimenRow label="H3 · font-heading · text-2xl">
              <h3 className="text-2xl text-gray-900">Plan stylizacji na cały wyjazd</h3>
            </SpecimenRow>
            <SpecimenRow label="H4 · font-heading · text-xl">
              <h4 className="text-xl text-gray-900">Dodaj ubrania jednym zdjęciem</h4>
            </SpecimenRow>
            <SpecimenRow label="Body · font-sans · text-base · gray-700">
              <p className="text-base text-gray-700">
                Packfit wybierze najmniejszy zestaw rzeczy, z którego ułożysz stylizacje na każdy dzień wyjazdu.
              </p>
            </SpecimenRow>
            <SpecimenRow label="Secondary · text-sm · gray-600">
              <p className="text-sm text-gray-600">Utwórz konto, aby zachować podróż, garderobę i przygotowane stylizacje.</p>
            </SpecimenRow>
            <SpecimenRow label="Caption · text-xs · gray-500">
              <p className="text-xs text-gray-500">
                Tworząc konto akceptujesz{" "}
                <a href="#" className="font-medium text-primary-800 underline">
                  Regulamin
                </a>{" "}
                oraz{" "}
                <a href="#" className="font-medium text-primary-800 underline">
                  Politykę prywatności
                </a>
                .
              </p>
            </SpecimenRow>
            <SpecimenRow label="Link · text-sm · semibold · primary-900">
              <p className="text-sm text-gray-600">
                Masz już konto?{" "}
                <a href="#" className="font-semibold text-primary-900 underline">
                  Zaloguj się
                </a>
              </p>
            </SpecimenRow>
          </div>
        </Card>
      </Section>

      {/* ===== Przyciski ===== */}
      <Section
        title="Przyciski"
        description="Warianty przycisków Flowbite z motywem Packfit (src/theme/flowbiteTheme.ts)."
      >
        <Card>
          <div className="flex flex-col gap-4">
            <SpecimenRow label='Primary · color="default" · size="lg"'>
              <Button size="lg">
                Dalej
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </SpecimenRow>
            <SpecimenRow label='Secondary / social · color="light"'>
              <div className="flex flex-wrap gap-3">
                <Button color="light" size="md">
                  <EnvelopeIcon className="mr-2 h-5 w-5" />
                  Kontynuuj z e-mailem
                </Button>
                <Button color="light" size="md">
                  Kontynuuj z Google
                </Button>
              </div>
            </SpecimenRow>
            <SpecimenRow label='Ghost · color="ghost"'>
              <Button color="ghost" size="lg">
                Pomiń
              </Button>
            </SpecimenRow>
            <SpecimenRow label="Outline · outline">
              <Button outline size="md">
                Zobacz szczegóły
              </Button>
            </SpecimenRow>
            <SpecimenRow label="Disabled">
              <Button size="lg" disabled>
                Dalej
              </Button>
            </SpecimenRow>
            <SpecimenRow label="Full width · fullSized · size='lg'">
              <div className="w-full max-w-sm">
                <Button size="lg" fullSized>
                  Utwórz konto
                </Button>
              </div>
            </SpecimenRow>
          </div>
        </Card>
      </Section>

      {/* ===== Formularze ===== */}
      <Section
        title="Formularze"
        description="Pola tekstowe: wysokość 44px, rounded-base, border gray-300, placeholder gray-400."
      >
        <Card>
          <div className="flex w-full max-w-sm flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-email">Adres e-mail</Label>
              <TextInput id="sg-email" type="email" icon={EnvelopeIcon} placeholder="np. anna@example.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-password">Hasło</Label>
              <TextInput
                id="sg-password"
                type="password"
                icon={LockIcon}
                rightIcon={EyeSlashIcon}
                placeholder="Minimum 8 znaków"
              />
              <HelperText>Hasło musi mieć co najmniej 8 znaków.</HelperText>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="sg-disabled">Pole nieaktywne</Label>
              <TextInput id="sg-disabled" placeholder="Niedostępne" disabled />
            </div>
            <HRText text="Lub" />
            <Button size="lg" fullSized>
              Utwórz konto
            </Button>
          </div>
        </Card>
      </Section>

      {/* ===== Pozostałe elementy ===== */}
      <Section title="Pozostałe elementy" description="Kropki paginacji, zaokrąglenia, cienie i karty.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-gray-900">Paginacja (onboarding)</h3>
            <div className="flex items-center gap-2">
              <span className="h-2 w-6 rounded-full bg-primary-900" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </div>
            <p className="text-xs text-gray-500">
              Aktywna kropka: <code>bg-primary-900</code>, nieaktywne: <code>bg-gray-300</code>
            </p>
          </Card>
          <Card>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-gray-900">Zaokrąglenia</h3>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-14 w-14 rounded-base border border-gray-300 bg-gray-100" />
                <p className="text-xs text-gray-500">rounded-base</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-14 w-14 rounded-card border border-gray-300 bg-gray-100" />
                <p className="text-xs text-gray-500">rounded-card</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-14 w-14 rounded-full border border-gray-300 bg-gray-100" />
                <p className="text-xs text-gray-500">rounded-full</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">base (12px): przyciski i inputy · card (16px): karty i zdjęcia</p>
          </Card>
          <Card>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-gray-900">Cienie</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-14 w-24 rounded-base bg-white shadow-xs" />
                <p className="text-xs text-gray-500">shadow-xs</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="h-14 w-24 rounded-base bg-white shadow-lg" />
                <p className="text-xs text-gray-500">shadow-lg</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">shadow-xs: przyciski i karty · shadow-lg: elementy uniesione</p>
          </Card>
          <Card>
            <h3 className="font-sans text-sm font-semibold tracking-normal text-gray-900">Badge</h3>
            <div className="flex flex-wrap gap-2">
              <Badge color="default">Nowość</Badge>
              <Badge color="gray">Neutralny</Badge>
            </div>
            <p className="text-xs text-gray-500">
              Domyślny badge: <code>bg-primary-100</code> + <code>text-primary-900</code>
            </p>
          </Card>
        </div>
      </Section>

      {/* ===== Przykład kompozycji ===== */}
      <Section
        title="Przykład kompozycji"
        description="Fragment ekranu onboardingu złożony wyłącznie z powyższych tokenów i komponentów."
      >
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col overflow-hidden rounded-card border border-gray-200 bg-white shadow-lg">
            <div className="flex h-44 items-center justify-center bg-primary-100">
              <span className="font-heading text-2xl tracking-heading text-primary-900">Packfit</span>
            </div>
            <div className="flex flex-col items-center gap-5 px-6 pb-8 pt-7 text-center">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-3xl text-gray-900">
                  Mniej ubrań.
                  <br />
                  Więcej stylizacji.
                </h2>
                <p className="text-base text-gray-700">
                  Packfit wybierze najmniejszy zestaw rzeczy, z którego ułożysz stylizacje na każdy dzień wyjazdu.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-6 rounded-full bg-primary-900" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Button size="lg" fullSized>
                  Dalej
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button color="ghost" size="lg" fullSized>
                  Pomiń
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
