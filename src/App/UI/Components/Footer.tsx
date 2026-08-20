import React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500">
      <div className="mb-3 flex justify-center gap-6">
        <a 
          href="/privacy-and-policy" 
          className="transition-colors hover:text-slate-300"
        >
          Privacy Policy
        </a>
        <a 
          href="/terms-and-conditions" 
          className="transition-colors hover:text-slate-300"
        >
          Terms & Conditions
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Tech with Ekenedilichukwu. All rights reserved. Version 5.1.8.</p>
    </footer>
  );
};

export default Footer;