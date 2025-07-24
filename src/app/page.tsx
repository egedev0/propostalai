"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuthModal } from "@/components/auth/auth-modal";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export default function Home() {
  const { user, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login");

  const handleLoginClick = () => {
    setAuthModalTab("login");
    setShowAuthModal(true);
  };

  const handleRegisterClick = () => {
    setAuthModalTab("register");
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-indigo-600">ProposalAI</h1>
            <Badge variant="secondary">Beta</Badge>
          </div>
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 rounded px-4 py-2 w-20 h-9"></div>
            ) : user ? (
              <>
                <span className="text-sm text-gray-600">
                  Hoş geldin, {user.name}
                </span>
                <Link href="/dashboard">
                  <Button variant="outline">Panel</Button>
                </Link>
                <Link href="/generator">
                  <Button>Teklif Oluştur</Button>
                </Link>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={handleLoginClick}>
                  Giriş Yap
                </Button>
                <Button onClick={handleRegisterClick}>
                  Kayıt Ol
                </Button>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            AI ile Mükemmel{" "}
            <span className="text-indigo-600">Freelance Teklifleri</span>{" "}
            Oluşturun
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            İş ilanı ve profil bilgilerinizi girin, yapay zekâ size özel, 
            profesyonel ve etkileyici teklifler oluştursun. Daha fazla iş kazanın!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {user ? (
              <Link href="/generator">
                <Button size="lg" className="text-lg px-8 py-3">
                  🚀 Hemen Başla
                </Button>
              </Link>
            ) : (
              <Button size="lg" className="text-lg px-8 py-3" onClick={handleRegisterClick}>
                🚀 Ücretsiz Başla
              </Button>
            )}
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              📹 Demo İzle
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Neden ProposalAI?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🤖</div>
                <CardTitle>AI Destekli Oluşturma</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  GPT-4 teknolojisi ile iş ilanına özel, kişiselleştirilmiş 
                  teklifler saniyeler içinde hazır.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Farklı Tonlar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Profesyonel, samimi, teknik, yaratıcı veya resmi - 
                  işe uygun tonu seçin.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle>Hızlı ve Kolay</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Manuel yazım yerine 5 dakikada profesyonel teklif. 
                  Zamanınızı değerli işlere ayırın.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">📊</div>
                <CardTitle>Başarı Takibi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Hangi teklifleriniz daha başarılı? Analitik ile 
                  performansınızı artırın.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">💾</div>
                <CardTitle>Geçmiş Saklama</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tüm teklifleriniz güvenle saklanır. İstediğiniz zaman 
                  erişin ve yeniden kullanın.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🔒</div>
                <CardTitle>Güvenli ve Özel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Verileriniz şifreli saklanır. Gizliliğiniz bizim 
                  önceliğimizdir.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg mx-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Basit ve Şeffaf Fiyatlandırma
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Ücretsiz</CardTitle>
                <div className="text-3xl font-bold">₺0</div>
                <CardDescription>Başlamak için</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2 text-sm">
                  <li>✅ Aylık 5 teklif</li>
                  <li>✅ Temel tonlar</li>
                  <li>✅ E-posta desteği</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-indigo-200 shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-indigo-600">Popüler</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <div className="text-3xl font-bold">₺99<span className="text-sm font-normal">/ay</span></div>
                <CardDescription>Profesyoneller için</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2 text-sm">
                  <li>✅ Aylık 50 teklif</li>
                  <li>✅ Tüm tonlar</li>
                  <li>✅ Öncelikli destek</li>
                  <li>✅ Analitik raporlar</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Premium</CardTitle>
                <div className="text-3xl font-bold">₺199<span className="text-sm font-normal">/ay</span></div>
                <CardDescription>Ajanslar için</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="space-y-2 text-sm">
                  <li>✅ Sınırsız teklif</li>
                  <li>✅ API erişimi</li>
                  <li>✅ Özel destek</li>
                  <li>✅ Beyaz etiket</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Bugün Başlayın, Yarın Daha Fazla İş Kazanın
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Binlerce freelancer zaten ProposalAI kullanarak daha fazla iş kazanıyor. 
            Siz de aramıza katılın!
          </p>
          {user ? (
            <Link href="/generator">
              <Button size="lg" className="text-lg px-8 py-3">
                İlk Teklifinizi Oluşturun
              </Button>
            </Link>
          ) : (
            <Button size="lg" className="text-lg px-8 py-3" onClick={handleRegisterClick}>
              Ücretsiz Hesap Oluşturun
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">ProposalAI</h4>
              <p className="text-gray-400 text-sm">
                AI destekli freelance teklif oluşturma platformu
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Özellikler</a></li>
                <li><a href="#" className="hover:text-white">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-white">İletişim</a></li>
                <li><a href="#" className="hover:text-white">Durum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Gizlilik</a></li>
                <li><a href="#" className="hover:text-white">Şartlar</a></li>
                <li><a href="#" className="hover:text-white">Çerezler</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 ProposalAI. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultTab={authModalTab}
      />
    </div>
  );
}
