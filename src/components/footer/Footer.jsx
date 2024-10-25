import { useContext } from "react";
import "./Footer.css"
import { ThemeContext } from "../../theme/Context";
function Footer() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <footer className="footer-16371">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 text-center">
          <div className="footer-site-logo mb-4">
            <a className="text-5xl" href="#">Portfolio</a>
          </div>
          <ul className="list-unstyled nav-links mb-5">
            <li><a className={theme !== "light" && "text-white"} href="#">About</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">Services</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">Press</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">Careers</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">FAQ</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">Legal</a></li>
            <li><a className={theme !== "light" && "text-white"} href="#">Contact</a></li>
          </ul>

          <div className="social mb-4">
            <h3 className={theme !== "light" && "text-white"}>Stay in touch</h3>
            <ul className="list-unstyled">
              <li className="in"><a href="#"><span className="icon-instagram"></span></a></li>
              <li className="fb"><a href="#"><span className="icon-facebook"></span></a></li>
              <li className="tw"><a href="#"><span className="icon-twitter"></span></a></li>
              <li className="pin"><a href="#"><span className="icon-pinterest"></span></a></li>
              <li className="dr"><a href="#"><span className="icon-dribbble"></span></a></li>
            </ul>
          </div>

          <div className="copyright">
            <p className="mb-0"><small>&copy; Colorlib. All Rights Reserved.</small></p>
          </div>


        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer