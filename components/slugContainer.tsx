type SlugContainerProps = {
    children: React.ReactNode;
  };
  
  export default function SlugContainer({ children }: SlugContainerProps) {
    return <div className="container max-w-screen-2xl bg-gray-100 bg-opacity-65 m-auto px-4 py-10 overflow-y-scroll h-[70vh]">{children}</div>;
  }
  