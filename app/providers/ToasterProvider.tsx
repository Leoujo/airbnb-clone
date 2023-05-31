"use client";

import { Toaster } from "react-hot-toast";

// Wrapping around a provider to make sure that a react lib works properly with next app folder.
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
