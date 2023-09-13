function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto p-4 xl:w-[1440px] md:p-4">{children}</div>;
}

export default Wrapper;
