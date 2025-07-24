package models

import (
	"time"
	"gorm.io/gorm"
)

type Proposal struct {
	ID        uint           `json:"id" gorm:"primarykey"`
	CreatedAt time.Time      `json:"created_at"`
	UpdatedAt time.Time      `json:"updated_at"`
	DeletedAt gorm.DeletedAt `json:"-" gorm:"index"`
	
	UserID uint `json:"user_id" gorm:"not null"`
	
	// Input data
	JobTitle       string `json:"job_title" gorm:"not null"`
	JobDescription string `json:"job_description" gorm:"type:text;not null"`
	ClientBio      string `json:"client_bio" gorm:"type:text"`
	UserBio        string `json:"user_bio" gorm:"type:text"`
	UserSkills     string `json:"user_skills" gorm:"type:text"`
	
	// Generation settings
	Tone           string `json:"tone" gorm:"default:'professional'"`
	Length         string `json:"length" gorm:"default:'medium'"`
	Customization  string `json:"customization" gorm:"type:text"`
	
	// Generated content
	GeneratedProposal string `json:"generated_proposal" gorm:"type:text"`
	
	// Metadata
	WordCount     int    `json:"word_count"`
	GenerationTime int   `json:"generation_time"` // in milliseconds
	Success       bool   `json:"success" gorm:"default:true"`
	ErrorMessage  string `json:"error_message,omitempty"`
	
	// Tracking
	IsBookmarked bool      `json:"is_bookmarked" gorm:"default:false"`
	IsUsed       bool      `json:"is_used" gorm:"default:false"`
	UsedAt       *time.Time `json:"used_at,omitempty"`
	
	// Relationships
	User User `json:"user,omitempty" gorm:"foreignKey:UserID"`
} 