const TitleHeader = ({ title, sub }) => {
  return (
    <header
      className="flex flex-col items-center gap-5 text-center"
      role="banner"
    >
      <div className="hero-badge" role="note">
        <p className="text-sm text-primary">{sub}</p>
      </div>

      <h1 className="font-semibold md:text-5xl text-3xl">{title}</h1>
    </header>
  );
};

export default TitleHeader;
