package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type AuthHandler struct {
	// TODO: Add database and JWT service dependencies
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type RegisterRequest struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type SocialLoginRequest struct {
	Provider    string `json:"provider" binding:"required,oneof=google facebook apple"`
	AccessToken string `json:"access_token" binding:"required"`
	Email       string `json:"email"`
	Name        string `json:"name"`
}

type AuthResponse struct {
	Token string `json:"token"`
	User  User   `json:"user"`
}

type User struct {
	ID                 uint   `json:"id"`
	Name               string `json:"name"`
	Email              string `json:"email"`
	SubscriptionTier   string `json:"subscription_tier"`
	ProposalsGenerated int    `json:"proposals_generated"`
	MonthlyLimit       int    `json:"monthly_limit"`
}

func NewAuthHandler() *AuthHandler {
	return &AuthHandler{}
}

func (h *AuthHandler) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Validate credentials against database
	// For now, simulate successful login
	user := User{
		ID:                 1,
		Name:               "Demo User",
		Email:              req.Email,
		SubscriptionTier:   "free",
		ProposalsGenerated: 2,
		MonthlyLimit:       5,
	}

	// TODO: Generate actual JWT token
	token := "demo-jwt-token"

	c.JSON(http.StatusOK, AuthResponse{
		Token: token,
		User:  user,
	})
}

func (h *AuthHandler) Register(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Check if user already exists
	// TODO: Hash password and save to database
	// For now, simulate successful registration
	user := User{
		ID:                 1,
		Name:               req.Name,
		Email:              req.Email,
		SubscriptionTier:   "free",
		ProposalsGenerated: 0,
		MonthlyLimit:       5,
	}

	// TODO: Generate actual JWT token
	token := "demo-jwt-token"

	c.JSON(http.StatusCreated, AuthResponse{
		Token: token,
		User:  user,
	})
}

func (h *AuthHandler) SocialLogin(c *gin.Context) {
	var req SocialLoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Validate social login token with respective provider
	var user User
	var userName string

	switch req.Provider {
	case "google":
		// TODO: Validate Google token
		userName = "Google User"
	case "facebook":
		// TODO: Validate Facebook token
		userName = "Facebook User"
	case "apple":
		// TODO: Validate Apple token
		userName = "Apple User"
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "Unsupported provider"})
		return
	}

	// Use provided name if available, otherwise use default
	if req.Name != "" {
		userName = req.Name
	}

	// TODO: Check if user exists, create if not
	user = User{
		ID:                 1,
		Name:               userName,
		Email:              req.Email,
		SubscriptionTier:   "free",
		ProposalsGenerated: 0,
		MonthlyLimit:       5,
	}

	// TODO: Generate actual JWT token
	token := req.Provider + "-demo-jwt-token"

	c.JSON(http.StatusOK, AuthResponse{
		Token: token,
		User:  user,
	})
}

func (h *AuthHandler) RefreshToken(c *gin.Context) {
	// TODO: Implement token refresh logic
	c.JSON(http.StatusOK, gin.H{
		"token": "new-demo-jwt-token",
		"expires_at": time.Now().Add(24 * time.Hour),
	})
}

func (h *AuthHandler) Logout(c *gin.Context) {
	// TODO: Invalidate token (add to blacklist)
	c.JSON(http.StatusOK, gin.H{
		"message": "Successfully logged out",
	})
}

func (h *AuthHandler) GetProfile(c *gin.Context) {
	// TODO: Get user from JWT token
	user := User{
		ID:                 1,
		Name:               "Demo User",
		Email:              "demo@example.com",
		SubscriptionTier:   "free",
		ProposalsGenerated: 2,
		MonthlyLimit:       5,
	}

	c.JSON(http.StatusOK, user)
} 