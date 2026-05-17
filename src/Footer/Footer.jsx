import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        © 2026 Enhanced by Luz. All rights reserved.
      </p>
      <h2 className="footer__contact-header">
        Website Created By{" "}
        <a
          href="https://elijahswilliams.github.io/PortfolioSite/"
          target="_blank"
          className="footer__portfolio-link"
        >
          <span className="footer__portfolio-text">Elijah Williams</span>
        </a>
        <a
          href="https://www.linkedin.com/in/elijah-williams16/"
          target="_blank"
          rel="noreferrer"
          className="footer__contact-link"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
            alt="LinkedIn"
            className="footer__link"
          />
        </a>
        <a
          href="https://github.com/ElijahSWilliams"
          target="_blank"
          className="footer__contact-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
            className="footer__link"
          />
        </a>
      </h2>
    </div>
  );
}

export default Footer;
