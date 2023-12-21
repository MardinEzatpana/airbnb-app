"use client";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className=" max-w-[2520px] mx-auto px-2 sm:px-4 md:px-10 xl:px-20">
        {children}
    </div>
  )
}

export default Container