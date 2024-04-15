type PostsContainerProps = {
    children: React.ReactNode;
  };
  
  export default function PostsContainer({ children }: PostsContainerProps) {
    return <div className="container max-w-2xl  m-auto px-4 overflow-y-scroll h-[70vh]">{children}</div>;
  }
  