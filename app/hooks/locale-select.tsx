"use client";

// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Select, SelectItem } from "@heroui/react";

export const LocaleSelect = () => {

  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="p-2 right-0 lg:max-h-screen lg:flex-col lg:justify-between max-w-full flex items-end fixed top-0 bg-background z-50">
      <Select className="max-w-xs" aria-labelledby="language" value={locale} defaultSelectedKeys={[locale]} color="primary" size="sm" itemHeight={16} disallowEmptySelection={true} fullWidth={false} style={
        {
          width: "3.75rem",
          border: "none"
        }
      } onSelectionChange={(keys) => changeLocale(keys.currentKey as "en" | "fr")}>
        <SelectItem key="fr" textValue="Fr" className="bg-background hover:bg-secondary opacity-100 w-fit">Fr</SelectItem>
        <SelectItem key="en" textValue="En" className="bg-background hover:bg-secondary opacity-100 hover:opacity-100 w-fit">En</SelectItem>
      </Select>
    </div>
  );

}
