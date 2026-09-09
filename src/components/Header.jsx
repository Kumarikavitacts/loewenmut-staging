import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
}, [isMenuOpen]);

const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial position
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, []);

return (
    <header>
        <nav className={`navbar navbar-expand-lg ${isSticky ? "sticky" : ""}`}>
            <div className="container">
                {/* Logo */}
                <NavLink className="navbar-brand" to="/">
                    <svg width="366" height="70" viewBox="0 0 366 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M356.597 50.1735C358.481 50.197 360.315 50.7789 361.868 51.8456C363.421 52.9123 364.622 54.4157 365.32 56.1656C366.018 57.9155 366.18 59.8331 365.788 61.6755C365.395 63.518 364.464 65.2024 363.113 66.5155C361.762 67.8286 360.052 68.7113 358.2 69.0519C356.347 69.3924 354.434 69.1755 352.705 68.4285C350.976 67.6816 349.507 66.4382 348.484 64.8559C347.462 63.2736 346.932 61.4235 346.962 59.5399C346.974 58.2905 347.234 57.056 347.725 55.9075C348.217 54.759 348.932 53.7193 349.828 52.8485C350.723 51.9776 351.783 51.2929 352.945 50.8338C354.107 50.3746 355.348 50.1502 356.597 50.1735Z" fill="var(--bs-themecolor)"/>
                        <path d="M27.5956 67.3711H0V0.765625H10.4681V56.9029H27.5956V67.3711Z" fill="black"/>
                        <path d="M47.5843 68.1267C43.016 68.1267 39.3369 66.8268 36.547 64.227C33.3744 61.181 31.7884 57.0262 31.7891 51.7624V16.3663C31.7891 11.1019 33.3751 6.94674 36.547 3.90078C39.3383 1.30093 43.0173 0.000674147 47.5843 2.61806e-07C52.1512 -0.000673623 55.8303 1.29958 58.6215 3.90078C61.7928 6.94674 63.3788 11.1019 63.3795 16.3663V51.7624C63.3795 57.0288 61.7935 61.1837 58.6215 64.227C55.8262 66.8282 52.1472 68.1281 47.5843 68.1267ZM47.5843 10.4671C46.1871 10.3471 44.7956 10.7542 43.6835 11.6083C42.7313 12.4979 42.2552 14.0839 42.2552 16.3663V51.7624C42.2552 54.0462 42.7313 55.6315 43.6835 56.5184C44.7953 57.3733 46.1869 57.7808 47.5843 57.6606C48.9839 57.8016 50.3834 57.3919 51.4861 56.5184C52.4362 55.6962 52.912 54.1109 52.9134 51.7624V16.3663C52.9134 14.0205 52.4376 12.4345 51.4861 11.6083C50.3831 10.7354 48.9837 10.3261 47.5843 10.4671Z" fill="black"/>
                        <path d="M80.5952 11.2327V27.9781H92.3936V38.4493H80.5952V56.908H97.7206V67.3751H70.125V0.765625H97.7206V11.2317H80.5952V11.2327Z" fill="black"/>
                        <path d="M148.335 0.765625L140.148 67.3711H134.344L125.019 34.2584L115.79 67.3711H109.985L101.797 0.765625H112.372L115.988 33.9733L122.077 11.3308H128.072L134.162 33.9733L137.778 0.765625H148.339H148.335Z" fill="black"/>
                        <path d="M164.04 11.2327V27.9781H175.839V38.4493H164.04V56.908H181.166V67.3751H153.57V0.765625H181.166V11.2317H164.04V11.2327Z" fill="black"/>
                        <path d="M219.801 67.3711H213.71L197.726 33.5963V67.3751H187.258V0.765625H193.346L209.33 34.4484V0.765625H219.798L219.801 67.3711Z" fill="black"/>
                        <path d="M270.988 0.765625V67.3711H260.522V34.1634L252.055 56.907H245.966L237.497 34.1634V67.3711H227.031V0.765625H233.024L249.01 37.6831L264.995 0.765625H270.988Z" fill="black"/>
                        <path d="M293.913 68.1302C289.344 68.1302 285.664 66.8303 282.875 64.2304C279.701 61.1845 278.115 57.0296 278.117 51.7659V0.765625H288.583V51.7659C288.583 54.113 289.027 55.6984 289.914 56.5219C291.059 57.3852 292.484 57.7923 293.912 57.6641C295.309 57.7837 296.7 57.3762 297.811 56.5219C298.763 55.6357 299.239 54.0504 299.238 51.7659V0.765625H309.705V51.7659C309.705 56.9029 308.119 61.0578 304.947 64.2304C301.895 66.8806 297.952 68.2743 293.913 68.1302Z" fill="black"/>
                        <path d="M345.777 11.2317H335.115V67.3711H324.65V11.2317H313.992V0.765625H345.777V11.2317Z" fill="black"/>
                    </svg>
                </NavLink>
                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="mainNavbar">
                    <div className="menu_container">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/leistungen">Leistungen</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/insights">Insights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/agentur">Agentur</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
                            </li>
                        </ul>
                        <div className="ms-lg-3 mt-3 mt-lg-0">
                            <NavLink to="/projekt-starten" className="button theme_btn">Projekt starten <img src="/images/btn-arrow.svg" alt="" /></NavLink>
                        </div>
                    </div>
                </div>
                <div className="theme_switch_btn">
                    <ThemeSwitcher />
                </div>
                {/* Mobile Toggle */}
                <button className={`navbar-toggler ${isMenuOpen ? "active" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                </button>
            </div>
        </nav>
    </header>
);
}

export default Header;