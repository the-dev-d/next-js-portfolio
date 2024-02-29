import React from "react";

type TitleProps = {
    children: React.ReactNode;
};
export const Title: React.FC<TitleProps> = ({ children }) => {
    return (
        <div className="font-pixyboy text-4xl tracking-wide bg-gradient-to-tr from-emerald-500 to-emerald-200 w-fit bg-clip-text text-transparent">
            {children}
        </div>
    );
};
