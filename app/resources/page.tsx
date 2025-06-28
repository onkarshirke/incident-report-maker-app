import React from "react";
import Footer from "./Footer";

export default function SupportPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center -mt-20">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Support
        </h1>
        <p className="text-lg max-w-3xl text-center">
          Welcome to the Support page. Here you can find resources and assistance for using SnapIncident.
        </p>
      </main>
      <Footer />
    </>
  );
}
