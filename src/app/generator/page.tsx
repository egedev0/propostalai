"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Generator() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    clientBio: "",
    userBio: "",
    userSkills: "",
    tone: "professional",
    length: "medium",
    customization: ""
  });

  const [generatedProposal, setGeneratedProposal] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    if (!formData.jobTitle || !formData.jobDescription) {
      setError("Lütfen en az iş başlığı ve açıklaması girin.");
      return;
    }

    setIsGenerating(true);
    setError("");
    
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockProposal = `Merhaba,

${formData.jobTitle} projeniz için size yardımcı olmaktan mutluluk duyacağım. 

${formData.jobDescription.substring(0, 100)}... projenizde belirttiğiniz gereksinimleri inceledim ve bu konuda size değerli katkılar sağlayabileceğimi düşünüyorum.

Özellikle ${formData.userSkills.split(',')[0] || 'web geliştirme'} alanındaki deneyimim sayesinde projenizi başarıyla tamamlayabilirim.

${formData.userBio ? `Kısaca kendimden bahsetmek gerekirse: ${formData.userBio.substring(0, 150)}...` : ''}

Proje hakkında daha detaylı konuşmak ve sorularınızı yanıtlamak için sizinle görüşmeyi çok isterim.

Saygılarımla,
[İsminiz]`;

      setGeneratedProposal(mockProposal);
    } catch (err) {
      setError("Teklif oluştururken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedProposal);
    // You could add a toast notification here
  };

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
              <span className="text-sm text-gray-600">5 ücretsiz teklif kaldı</span>
              <Button variant="outline" size="sm">Upgrade</Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              AI Teklif Oluşturucu
            </h2>
            <p className="text-gray-600">
              Bilgilerinizi girin, AI size özel teklif hazırlasın
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle>Proje Bilgileri</CardTitle>
                <CardDescription>
                  İş ilanı ve kişisel bilgilerinizi girin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">İş Başlığı *</Label>
                  <Input
                    id="jobTitle"
                    placeholder="Örn: React Developer Needed for E-commerce Site"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobDescription">İş Açıklaması *</Label>
                  <Textarea
                    id="jobDescription"
                    placeholder="İş ilanının tam açıklamasını buraya yapıştırın..."
                    className="min-h-32"
                    value={formData.jobDescription}
                    onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientBio">Müşteri/Şirket Bilgisi</Label>
                  <Textarea
                    id="clientBio"
                    placeholder="Müşteri hakkında bildiğiniz detaylar (opsiyonel)"
                    className="min-h-20"
                    value={formData.clientBio}
                    onChange={(e) => handleInputChange("clientBio", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userBio">Kişisel Bio</Label>
                  <Textarea
                    id="userBio"
                    placeholder="Kendiniz hakkında kısa bilgi..."
                    className="min-h-20"
                    value={formData.userBio}
                    onChange={(e) => handleInputChange("userBio", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userSkills">Yetenekleriniz</Label>
                  <Input
                    id="userSkills"
                    placeholder="React, Node.js, Python, Design..."
                    value={formData.userSkills}
                    onChange={(e) => handleInputChange("userSkills", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Ton</Label>
                    <Select value={formData.tone} onValueChange={(value) => handleInputChange("tone", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Profesyonel</SelectItem>
                        <SelectItem value="friendly">Samimi</SelectItem>
                        <SelectItem value="technical">Teknik</SelectItem>
                        <SelectItem value="creative">Yaratıcı</SelectItem>
                        <SelectItem value="formal">Resmi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Uzunluk</Label>
                    <Select value={formData.length} onValueChange={(value) => handleInputChange("length", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Kısa</SelectItem>
                        <SelectItem value="medium">Orta</SelectItem>
                        <SelectItem value="long">Uzun</SelectItem>
                        <SelectItem value="detailed">Detaylı</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customization">Özel Notlar</Label>
                  <Textarea
                    id="customization"
                    placeholder="Teklifte özellikle vurgulanmasını istediğiniz noktalar..."
                    className="min-h-16"
                    value={formData.customization}
                    onChange={(e) => handleInputChange("customization", e.target.value)}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? "Oluşturuluyor..." : "🚀 Teklif Oluştur"}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Proposal */}
            <Card>
              <CardHeader>
                <CardTitle>Oluşturulan Teklif</CardTitle>
                <CardDescription>
                  AI tarafından kişiselleştirilmiş teklifiniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedProposal ? (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {generatedProposal}
                      </pre>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={copyToClipboard} variant="outline">
                        📋 Kopyala
                      </Button>
                      <Button variant="outline">
                        ✏️ Düzenle
                      </Button>
                      <Button variant="outline">
                        💾 Kaydet
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-lg mb-2">Teklifiniz burada görünecek</p>
                    <p className="text-sm">
                      Formu doldurun ve "Teklif Oluştur" butonuna tıklayın
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>💡 İpuçları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Detaylı Bilgi Verin</h4>
                  <p className="text-gray-600">
                    Ne kadar çok bilgi verirseniz, AI o kadar kişiselleştirilmiş teklif oluşturur.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Yeteneklerinizi Belirtin</h4>
                  <p className="text-gray-600">
                    İş ilanındaki gereksinimlere uygun yeteneklerinizi vurgulayın.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Doğru Tonu Seçin</h4>
                  <p className="text-gray-600">
                    Müşterinin tarzına uygun ton seçimi yapmak başarı oranını artırır.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 