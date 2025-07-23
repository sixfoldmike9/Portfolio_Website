/**
 * A reusable CTA button component.
 * When clicked, it smoothly scrolls to the section with ID "counter",
 * with an offset for better visibility.
 */

const Button = ({ text, className = "", id }) => {
  const handleClick = (e) => {
    e.preventDefault();

    // Only scroll if a valid section ID is provided
    if (!id) return;

    const target = document.getElementById(id);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a onClick={handleClick} className={`cta-wrapper ${className}`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
