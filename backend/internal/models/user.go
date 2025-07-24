package models

import (
	"time"
	"gorm.io/gorm"
)

type User struct {
	ID        uint           `json:"id" gorm:"primarykey"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"-" gorm:"index"`
	
	Email     string `json:"email" gorm:"uniqueIndex;not null"`
	Name      string `json:"name" gorm:"not null"`
	Bio       string `json:"bio" gorm:"type:text"`
	Skills    string `json:"skills" gorm:"type:text"`
	
	// Subscription info
	SubscriptionTier string    `json:"subscription_tier" gorm:"default:'free'"`
	SubscriptionEnd  *time.Time `json:"subscription_end"`
	
	// Usage tracking
	ProposalsGenerated int `json:"proposals_generated" gorm:"default:0"`
	MonthlyLimit       int `json:"monthly_limit" gorm:"default:5"`
	
	// Relationships
	Proposals []Proposal `json:"proposals,omitempty" gorm:"foreignKey:UserID"`
} 