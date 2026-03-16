import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-screen min-h-screen flex flex-col justify-between ">
            {children}
        </div>
    );
};

export default Container;