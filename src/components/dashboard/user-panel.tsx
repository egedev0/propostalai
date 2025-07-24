"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

interface Proposal {
  id: string;
  jobTitle: string;
  createdAt: string;
  isUsed: boolean;
  isBookmarked: boolean;
  wordCount: number;
}

export function UserPanel() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("proposals");

  // Mock proposals data
  const [proposals] = useState<Proposal[]>([
    {
      id: "1",
      jobTitle: "React Developer for E-commerce Platform",
      createdAt: "2025-01-20",
      isUsed: true,
      isBookmarked: false,
      wordCount: 245
    },
    {
      id: "2", 
      jobTitle: "Full Stack Developer - Startup Project",
      createdAt: "2025-01-19",
      isUsed: false,
      isBookmarked: true,
      wordCount: 189
    },
    {
      id: "3",
      jobTitle: "Mobile App Developer - iOS & Android",
      createdAt: "2025-01-18",
      isUsed: false,
      isBookmarked: false,
      wordCount: 312
    }
  ]);

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "",
    skills: ""
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to update profile
    console.log("Profile update:", profileData);
  };

  const getSubscriptionBadgeColor = (tier: string) => {
    switch (tier) {
      case "free":
        return "secondary";
      case "pro":
        return "default";
      case "premium":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getSubscriptionName = (tier: string) => {
    switch (tier) {
      case "free":
        return "Ücretsiz";
      case "pro":
        return "Pro";
      case "premium":
        return "Premium";
      default:
        return "Ücretsiz";
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-indigo-600">ProposalAI</h1>
              <Badge variant="secondary">Beta</Badge>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Hoş geldin, {user.name}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Çıkış Yap
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* User Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Kullanıcı Paneli</CardTitle>
                  <CardDescription>
                    Hesabınızı yönetin ve tekliflerinizi görüntüleyin
                  </CardDescription>
                </div>
                <Badge variant={getSubscriptionBadgeColor(user.subscriptionTier)}>
                  {getSubscriptionName(user.subscriptionTier)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">
                    {user.proposalsGenerated}
                  </div>
                  <div className="text-sm text-gray-600">Oluşturulan Teklif</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {user.monthlyLimit - user.proposalsGenerated}
                  </div>
                  <div className="text-sm text-gray-600">Kalan Hak</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {proposals.filter(p => p.isUsed).length}
                  </div>
                  <div className="text-sm text-gray-600">Kullanılan Teklif</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="proposals">Tekliflerim</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="subscription">Abonelik</TabsTrigger>
            </TabsList>

            {/* Proposals Tab */}
            <TabsContent value="proposals" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Geçmiş Teklifler</h3>
                <Link href="/generator">
                  <Button>
                    ➕ Yeni Teklif Oluştur
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4">
                {proposals.map((proposal) => (
                  <Card key={proposal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {proposal.jobTitle}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>📅 {proposal.createdAt}</span>
                            <span>📝 {proposal.wordCount} kelime</span>
                            {proposal.isUsed && (
                              <Badge variant="outline" className="text-green-600">
                                ✅ Kullanıldı
                              </Badge>
                            )}
                            {proposal.isBookmarked && (
                              <Badge variant="outline" className="text-yellow-600">
                                ⭐ Favorilerde
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            👁️ Görüntüle
                          </Button>
                          <Button variant="outline" size="sm">
                            📋 Kopyala
                          </Button>
                          <Button variant="outline" size="sm">
                            ✏️ Düzenle
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {proposals.length === 0 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-lg font-semibold mb-2">
                      Henüz teklif oluşturmadınız
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AI destekli ilk teklifinizi oluşturmak için başlayın
                    </p>
                    <Link href="/generator">
                      <Button>
                        İlk Teklifimi Oluştur
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profil Bilgileri</CardTitle>
                  <CardDescription>
                    Kişisel bilgilerinizi güncelleyin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Kişisel Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Kendinizi tanıtın..."
                        className="min-h-24"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Yetenekler</Label>
                      <Input
                        id="skills"
                        placeholder="React, Node.js, Python, Design..."
                        value={profileData.skills}
                        onChange={(e) => setProfileData(prev => ({ ...prev, skills: e.target.value }))}
                      />
                    </div>

                    <Button type="submit">
                      Profili Güncelle
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscription Tab */}
            <TabsContent value="subscription" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Abonelik Durumu</CardTitle>
                  <CardDescription>
                    Mevcut planınızı görüntüleyin ve yükseltin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">
                          {getSubscriptionName(user.subscriptionTier)} Plan
                        </h4>
                        <p className="text-sm text-gray-600">
                          Aylık {user.monthlyLimit} teklif hakkınız var
                        </p>
                      </div>
                      <Badge variant={getSubscriptionBadgeColor(user.subscriptionTier)}>
                        Aktif
                      </Badge>
                    </div>

                    {user.subscriptionTier === "free" && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">Planınızı Yükseltin</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Pro Plan</CardTitle>
                              <CardDescription>
                                Daha fazla teklif ve premium özellikler
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold mb-2">₺99/ay</div>
                              <ul className="text-sm space-y-1 mb-4">
                                <li>✅ Aylık 50 teklif</li>
                                <li>✅ Premium tonlar</li>
                                <li>✅ Öncelikli destek</li>
                                <li>✅ Gelişmiş analitik</li>
                              </ul>
                              <Button className="w-full">
                                Pro'ya Geç
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Premium Plan</CardTitle>
                              <CardDescription>
                                Sınırsız kullanım ve tüm özellikler
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold mb-2">₺199/ay</div>
                              <ul className="text-sm space-y-1 mb-4">
                                <li>✅ Sınırsız teklif</li>
                                <li>✅ Tüm premium özellikler</li>
                                <li>✅ API erişimi</li>
                                <li>✅ Özel destek</li>
                              </ul>
                              <Button className="w-full">
                                Premium'a Geç
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 