"use client";

import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
import Modal from '@/components/Modal';
import { ProductWithPrice } from "@/types";
import UploadModal from "@/components/UploadModal";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {

    return null;

  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}


export default ModalProvider;