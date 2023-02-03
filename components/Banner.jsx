function Banner() {
  return (
    <div className="lg:space-5 mb-10 flex flex-col justify-between px-10 py-2 font-bold lg:flex-row">
      <div>
        <h1 className="text-7xl">Sonny&apos;s Daily Blog</h1>
        <h2 className="mt-5 md:mt-3">
          Welcome to{" "}
          <span className="underline decoration-[#F7AB0A] decoration-4">
            Every Developers
          </span>{" "}
          favourite blog in Devosphere
        </h2>
      </div>
      <p className="mt-5 max-w-sm text-gray-400 md:my-2">
        New product features | The latest in technology | The weekly debugging
      </p>
    </div>
  );
}

export default Banner;
