import React from "react";
import Main from "../components/main/Main";
import Header from "./header/Header";
import "./layout.css";
function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
