function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}

export default Footer;
