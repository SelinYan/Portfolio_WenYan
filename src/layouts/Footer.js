const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-end">
              <a href="https://www.instagram.com/selinyan2016/">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/wen-yan-finland/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/SelinYan">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-left">
            <p>© {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
