import styles from "./layout.module.css";
import Header from "../public/images/Header.svg";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Link href="/">
        <Header className={styles.header} />
      </Link>
      {children}
    </>
  );
}
