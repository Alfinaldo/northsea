import { darkMode } from "@/context/ContextProvider";
import { useContext, useEffect } from "react";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("isDarkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, [setIsDarkMode]);

  const handleClick = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 ring-1 ring-[#f9f9f96b] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-primary": isDarkMode, // Mengatur latar belakang ke bg-primary jika mode gelap
          "bg-input": !isDarkMode, // Mengatur latar belakang ke bg-input jika mode terang
        },
        className
      )}
      {...props}
      onClick={handleClick} // Menambahkan event onClick untuk menangani klik
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
          {
            "translate-x-5": isDarkMode, // Jika dark mode, posisikan thumb ke kanan
            "translate-x-0": !isDarkMode, // Jika bukan dark mode, posisikan thumb ke kiri
          }
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
