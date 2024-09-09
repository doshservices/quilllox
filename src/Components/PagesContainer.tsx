import React from "react";

type PagesContainerProps = {
    children: React.ReactNode;
}
export const PagesContainer = ({ children }: PagesContainerProps) => {
    return (
        <main className="pt-[60px] md:pt-0">
            {children}
        </main>
    )
}