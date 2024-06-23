import { Wallet } from "lucide-react";
import React from "react";

const Logo = ({ icon = true }: { icon?: boolean }) => {
  return (
    <a href="/" className="flex items-center gap-2">
      {icon && (
        <Wallet className="stroke h-10 w-10 stroke-amber-400 stroke-[1.5]" />
      )}
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold text-transparent">
        MoneyMap
      </p>
    </a>
  );
};

export default Logo;
