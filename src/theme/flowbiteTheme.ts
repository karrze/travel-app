import { createTheme } from "flowbite-react";

/**
 * Motyw Packfit dla komponentów Flowbite React.
 * Wszystkie wartości odwołują się do tokenów zdefiniowanych w src/index.css
 * (@theme) — bez hardkodowanych kolorów, promieni ani cieni.
 */
export const packfitTheme = createTheme({
  button: {
    base: "relative flex items-center justify-center rounded-base text-center font-medium focus:outline-none focus:ring-4",
    color: {
      // Primary — główny przycisk akcji (Figma: bg rose/900, biały tekst)
      default:
        "bg-primary-900 text-white shadow-xs hover:bg-primary-950 focus:ring-primary-300",
      // Secondary / social — białe tło, delikatna ramka (Figma: social buttons)
      light:
        "border border-gray-200 bg-white text-gray-900 shadow-xs hover:bg-gray-100 focus:ring-gray-100",
      // Ghost — przycisk tekstowy (Figma: "Pomiń")
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-100",
      // Alternative — biały z ramką i akcentem brandowym na hover
      alternative:
        "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-900 focus:ring-gray-100",
    },
    outlineColor: {
      default:
        "border border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-300",
    },
    size: {
      md: "h-11 px-4 text-sm",
      lg: "h-12 px-5 text-base",
    },
  },
  textInput: {
    field: {
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5",
        svg: "h-5 w-5 text-gray-400",
      },
      rightIcon: {
        base: "absolute inset-y-0 right-0 flex items-center pr-3.5",
        svg: "h-5 w-5 text-gray-400",
      },
      input: {
        base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          md: "h-11 p-2.5 text-sm",
        },
        colors: {
          gray: "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-900 focus:ring-primary-900",
        },
        withAddon: {
          on: "rounded-r-base",
          off: "rounded-base",
        },
      },
    },
  },
  label: {
    root: {
      base: "text-sm font-medium",
      colors: {
        default: "text-gray-900",
      },
    },
  },
  card: {
    root: {
      base: "flex rounded-card border border-gray-200 bg-white shadow-xs",
      children: "flex h-full flex-col justify-center gap-4 p-6",
    },
    img: {
      horizontal: {
        off: "rounded-t-card",
      },
    },
  },
  hr: {
    root: {
      base: "my-8 h-px border-0 bg-gray-200",
    },
    text: {
      base: "relative inline-flex w-full items-center justify-center",
      hrLine: "my-4 h-px w-full border-0 bg-gray-200",
      text: "absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm font-medium text-gray-500",
    },
  },
  badge: {
    root: {
      color: {
        default: "bg-primary-100 text-primary-900",
      },
    },
  },
  helperText: {
    root: {
      colors: {
        default: "text-gray-500",
      },
    },
  },
});
