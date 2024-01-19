import Link from "next/link";

import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Todo</Link>
      <Link href="/?query=active">Active</Link>
      <Link href="/?query=completed">Completed</Link>
    </nav>
  );
};

export default Navbar;
