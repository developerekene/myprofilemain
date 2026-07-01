import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
      <p>&copy; {new Date().getFullYear()} Tech with Ekenedilichukwu. All rights reserved. Version 5.1.4.</p>
    </footer>
  );
};

export default Footer;
