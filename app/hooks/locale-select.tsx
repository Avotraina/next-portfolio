"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LocaleSelect = () => {

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="p-2 lg:sticky lg:top-0 top-0 fixed right-0 z-30 lg:flex lg:max-h-screen lg:flex-col lg:justify-between w-fit ">
      <Select onValueChange={(value) => changeLocale(value as "en" | "fr")}>
        <SelectTrigger className="w-fit z-30">
          <SelectValue placeholder={locale.charAt(0).toUpperCase() + locale.slice(1)} defaultValue={locale} className="z-30" />
        </SelectTrigger>
        <SelectContent className="z-30 opacity-100">
          <SelectItem value="fr" className="z-30">Fr</SelectItem>
          <SelectItem value="en" className="z-30">En</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

}