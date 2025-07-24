# ProposalAI 🚀

> **AI-powered freelance proposal generator** - Create winning proposals in seconds with GPT technology

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Go](https://img.shields.io/badge/Go-1.24-00ADD8?logo=go)](https://golang.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)

ProposalAI, freelancerların daha hızlı ve etkili teklifler hazırlamasına yardımcı olan AI destekli bir platformdur. İş ilanı ve profil bilgilerinizi girin, yapay zeka size özel profesyonel teklifler oluştursun!

## ✨ Özellikler

### 🤖 AI Destekli Teklif Oluşturma
- **GPT-4 Teknolojisi**: İş ilanına özel, kişiselleştirilmiş teklifler
- **Farklı Tonlar**: Profesyonel, samimi, teknik, yaratıcı, resmi
- **Hızlı Sonuç**: Saniyeler içinde hazır teklif
- **Akıllı Analiz**: İş gereksinimlerini otomatik analiz

### 👤 Kullanıcı Yönetimi
- **Güvenli Authentication**: E-posta/şifre ile kayıt ve giriş
- **Social Login**: Apple, Google, Facebook ile tek tıkla giriş
- **Kullanıcı Paneli**: Geçmiş teklifler ve istatistikler
- **Profil Yönetimi**: Kişisel bilgi ve yetenek düzenleme

### 💎 Abonelik Sistemi
- **Ücretsiz Plan**: Aylık 5 teklif
- **Pro Plan**: Aylık 50 teklif + premium özellikler
- **Premium Plan**: Sınırsız teklif + API erişimi

### 🎨 Modern UI/UX
- **Responsive Design**: Mobil uyumlu tasarım
- **shadcn/ui Components**: Modern ve accessible bileşenler
- **Tailwind CSS**: Hızlı ve tutarlı styling
- **Loading States**: Smooth kullanıcı deneyimi

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework (App Router)
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[React Hook Form](https://react-hook-form.com/)** - Form validation

### Backend
- **[Go](https://golang.org/)** - High-performance API server
- **[Gin](https://gin-gonic.com/)** - HTTP web framework
- **[GORM](https://gorm.io/)** - ORM for database operations
- **[JWT](https://jwt.io/)** - Authentication tokens

### Database & Deployment
- **[PostgreSQL](https://postgresql.org/)** - Primary database
- **[Vercel](https://vercel.com/)** - Frontend deployment
- **[Railway](https://railway.app/)** - Backend deployment

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- Go 1.24+
- PostgreSQL (opsiyonel, development için)

### Kurulum

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/egedev0/propostalai.git
cd propostalai
```

2. **Frontend kurulumu**
```bash
npm install
cp env.example .env.local
# .env.local dosyasını düzenleyin
```

3. **Backend kurulumu**
```bash
cd backend
go mod tidy
cp env.example .env
# .env dosyasını düzenleyin
```

4. **Development serverları başlatın**

**Seçenek 1: Ayrı terminal'lerde**
```bash
# Terminal 1 - Backend
cd backend && go run cmd/api/main.go

# Terminal 2 - Frontend  
npm run dev
```

**Seçenek 2: Tek komutla**
```bash
npm run dev:full
```

5. **Tarayıcıda açın**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## 📝 API Endpoints

### Authentication
```
POST /api/v1/auth/register     # Kullanıcı kaydı
POST /api/v1/auth/login        # Kullanıcı girişi
POST /api/v1/auth/social       # Social login (Apple, Google, Facebook)
POST /api/v1/auth/refresh      # Token yenileme
POST /api/v1/auth/logout       # Çıkış
```

### User Management
```
GET  /api/v1/profile           # Kullanıcı profili
PUT  /api/v1/profile           # Profil güncelleme
```

### Proposals (Coming Soon)
```
GET  /api/v1/proposals         # Kullanıcı teklifleri
POST /api/v1/proposals         # Yeni teklif oluştur
GET  /api/v1/proposals/:id     # Teklif detayı
PUT  /api/v1/proposals/:id     # Teklif güncelle
```

## 🎯 Kullanım

1. **Hesap Oluşturun**: E-posta ile kayıt olun veya social login kullanın
2. **Profil Bilgilerinizi Girin**: Yeteneklerinizi ve deneyiminizi ekleyin
3. **İş İlanını Yapıştırın**: Başvurmak istediğiniz işin detaylarını girin
4. **Tonu Seçin**: Profesyonel, samimi, teknik vb.
5. **AI Teklif Oluştursun**: Saniyeler içinde kişiselleştirilmiş teklif alın
6. **Düzenleyin ve Kullanın**: Teklifinizi gerektiği gibi düzenleyin

## 📊 Proje Durumu

- ✅ **Tamamlanan Özellikler**
  - [x] Next.js frontend kurulumu
  - [x] Go backend API
  - [x] Kullanıcı authentication sistemi
  - [x] Apple, Google, Facebook social login UI
  - [x] Kullanıcı dashboard'u
  - [x] Responsive tasarım
  - [x] Modern UI components

- 🚧 **Geliştirme Aşamasında**
  - [ ] OpenAI GPT entegrasyonu
  - [ ] Gerçek social login implementasyonu
  - [ ] PostgreSQL database bağlantısı
  - [ ] JWT token yönetimi
  - [ ] E-posta doğrulama

- 📋 **Planlanan Özellikler**
  - [ ] Teklif şablonları
  - [ ] Analitik ve raporlama
  - [ ] Çoklu dil desteği
  - [ ] API rate limiting
  - [ ] Ödeme sistemi entegrasyonu

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🔗 Bağlantılar

- **Demo**: [https://propostalai.vercel.app](https://propostalai.vercel.app) (Coming Soon)
- **API Docs**: [https://api.propostalai.com/docs](https://api.propostalai.com/docs) (Coming Soon)
- **Discord**: [Community Discord](https://discord.gg/propostalai) (Coming Soon)

## 👨‍💻 Geliştirici

**Ege Dev**
- GitHub: [@egedev0](https://github.com/egedev0)
- Twitter: [@egedev0](https://twitter.com/egedev0)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Made with ❤️ in Turkey**
