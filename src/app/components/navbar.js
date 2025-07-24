'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const pathname = usePathname();

    const isActive = (path) => pathname === path ? 'nav-link active' : 'nav-link';
  
      // Optional: handle shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav');
      if (!navbar) return;
      if (window.scrollY === 0) {
        navbar.classList.remove('navbar-shrink');
      } else {
        navbar.classList.add('navbar-shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // Toggle collapse
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
      };

      return (
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', padding: '1rem 0' }}
        >
          <div className="container">
            <h1 className="navbar-brand">
              PT. MITRA JAYA RAYA
            </h1>
    
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-expanded={!collapsed}
              aria-label="Toggle navigation"
            >
              Menu <i className="fas fa-bars ms-1"></i>
            </button>
    
            <div
              className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                <Link href="/" className={isActive('/')}>Beranda</Link>
                </li>
                <li className="nav-item">
                <Link href="/produk" className={isActive('/produk')}>Produk</Link>
                </li>
                <li className="nav-item">
                <Link href="/lokasi" className={isActive('/lokasi')}>Lokasi</Link>
                </li>
                <li className="nav-item">
                <Link href="/kontak" className={isActive('/kontak')}>Kontak</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };

export default Navbar;



