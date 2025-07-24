# ProposalAI 🚀

AI destekli freelance teklif oluşturma platformu. Freelancerların daha hızlı ve etkili teklifler hazırlamasına yardımcı olur.

## 🎯 Özellikler

- **AI Destekli Teklif Oluşturma**: GPT tabanlı akıllı teklif üretimi
- **Kişiselleştirme**: İş ilanı ve profil bilgilerinize özel içerik
- **Farklı Tonlar**: Profesyonel, samimi, teknik, yaratıcı, resmi
- **Hızlı Sonuç**: Saniyeler içinde hazır teklif
- **Modern UI**: shadcn/ui ile oluşturulmuş responsive tasarım
- **Güvenli Backend**: Go ile yüksek performanslı API

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework (App Router)
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Hook Form** - Form management

### Backend
- **Go** - High-performance API server
- **Gin** - Web framework
- **GORM** - ORM for database operations
- **PostgreSQL** - Database
- **OpenAI API** - AI text generation

## 🚀 Hızlı Başlangıç

### Gereksinimler
- Node.js 18+
- Go 1.21+
- PostgreSQL 14+
- OpenAI API key

### Kurulum

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/yourusername/propostalai.git
cd propostalai
```

2. **Frontend kurulumu**
```bash
# Dependencies yükle
npm install

# Environment dosyasını oluştur
cp env.example .env.local
# .env.local dosyasını düzenleyip API key'lerinizi ekleyin
```

3. **Backend kurulumu**
```bash
cd backend

# Go dependencies yükle
go mod tidy

# Environment dosyasını oluştur
cp env.example .env
# .env dosyasını düzenleyip database ve API bilgilerinizi ekleyin
```

4. **Database kurulumu**
```bash
# PostgreSQL database oluştur
createdb propostalai

# Migration'ları çalıştır (gelecekte eklenecek)
# go run cmd/migrate/main.go
```

### Geliştirme Sunucularını Başlatma

1. **Backend sunucusu** (Terminal 1)
```bash
cd backend
go run cmd/api/main.go
```

2. **Frontend sunucusu** (Terminal 2)
```bash
npm run dev
```

Uygulama şu adreslerde çalışacak:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## 📁 Proje Yapısı

```
propostalai/
├── src/                    # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utilities
├── backend/               # Go backend
│   ├── cmd/              # Main applications
│   ├── internal/         # Private code
│   │   ├── handlers/     # HTTP handlers
│   │   ├── models/       # Database models
│   │   └── services/     # Business logic
│   └── pkg/              # Public packages
└── docs/                 # Documentation
```

## 🔗 API Endpoints

### Proposal Generation
- `POST /api/v1/proposals/generate` - Yeni teklif oluştur
- `GET /api/v1/proposals` - Kullanıcının tekliflerini listele
- `GET /api/v1/proposals/:id` - Belirli teklifi getir
- `PUT /api/v1/proposals/:id` - Teklifi güncelle
- `DELETE /api/v1/proposals/:id` - Teklifi sil

### User Management
- `POST /api/v1/users/register` - Kullanıcı kaydı
- `POST /api/v1/users/login` - Kullanıcı girişi
- `GET /api/v1/users/profile` - Profil bilgileri
- `PUT /api/v1/users/profile` - Profil güncelle

### Health Check
- `GET /health` - Sunucu durumu
- `GET /api/v1/ping` - API durumu

## 🎨 UI Components

Proje shadcn/ui kullanarak modern ve accessible UI componentleri içerir:

- `Button` - Çeşitli stillerde butonlar
- `Card` - İçerik kartları
- `Input` & `Textarea` - Form elemanları
- `Select` - Dropdown seçiciler
- `Alert` - Bilgilendirme mesajları
- `Badge` - Etiketler
- `Dialog` - Modal pencereler

## 🔧 Geliştirme

### Yeni Özellik Ekleme

1. Backend'e yeni endpoint eklemek:
```bash
# Handler oluştur
touch backend/internal/handlers/new_feature.go

# Route'u main.go'ya ekle
# Service logic'i internal/services/'e ekle
```

2. Frontend'e yeni sayfa eklemek:
```bash
# Yeni sayfa oluştur
mkdir src/app/new-page
touch src/app/new-page/page.tsx
```

### Code Style

- **Frontend**: Prettier + ESLint
- **Backend**: gofmt + golint
- **Commit**: Conventional commits

```bash
# Frontend linting
npm run lint

# Backend formatting
go fmt ./...
```

## 📦 Production Build

### Frontend
```bash
npm run build
npm start
```

### Backend
```bash
cd backend
go build -o bin/api cmd/api/main.go
./bin/api
```

### Docker (Gelecekte eklenecek)
```bash
docker-compose up --build
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'feat: add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙋‍♂️ Destek

Sorularınız için:
- Issue açın
- Email: support@proposalai.com
- Discord: [ProposalAI Community](https://discord.gg/proposalai)

## 🗺️ Roadmap

- [ ] OpenAI API entegrasyonu
- [ ] Kullanıcı authentication
- [ ] Database migration'ları
- [ ] Email notifications
- [ ] Template sistemi
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support

---

Made with ❤️ by ProposalAI Team
