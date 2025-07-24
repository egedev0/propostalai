"use client";

import { useAuth } from "@/contexts/auth-context";
import { UserPanel } from "@/components/dashboard/user-panel";
import { AuthModal } from "@/components/auth/auth-modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      setShowAuthModal(true);
    }
  }, [user, isLoading]);

  const handleAuthModalClose = () => {
    setShowAuthModal(false);
    if (!user) {
      router.push("/");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Kullanıcı Paneli
            </h1>
            <p className="text-gray-600 mb-8">
              Devam etmek için giriş yapmanız gerekiyor
            </p>
          </div>
        </div>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={handleAuthModalClose}
          defaultTab="login"
        />
      </>
    );
  }

  return <UserPanel />;
} 