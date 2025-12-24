# HappyHomeCare Connect Mobile App - Complete Development Guide

**Version:** 1.0
**Last Updated:** December 24, 2025
**Target Platforms:** iOS and Android
**Status:** Development Ready

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [App Overview](#app-overview)
3. [Technical Architecture](#technical-architecture)
4. [Database Schema](#database-schema)
5. [Feature Specifications](#feature-specifications)
6. [API Design](#api-design)
7. [Development Phases](#development-phases)
8. [Integration with Existing Website](#integration-with-existing-website)
9. [Claude Prompts for Development](#claude-prompts-for-development)
10. [Security & Compliance](#security--compliance)
11. [Testing Strategy](#testing-strategy)
12. [Deployment Guide](#deployment-guide)

---

## Executive Summary

HappyHomeCare Connect is a comprehensive mobile application that bridges the gap between caregivers, family members, patients, and administrative staff. The app provides real-time caregiver tracking, appointment management, care documentation, and family communication tools, enhancing the quality and transparency of home healthcare services.

### Business Goals
- Increase family engagement and trust through real-time visibility
- Reduce administrative overhead with digital care documentation
- Improve caregiver accountability and service quality
- Enable faster emergency response with GPS tracking
- Provide seamless integration with existing Happy Home Care website

### Key Metrics
- Real-time location tracking with <30-second latency
- 99.9% uptime for critical notifications
- HIPAA-compliant data handling
- Support for 1000+ concurrent users
- <2-second average API response time

---

## App Overview

### Target Users

#### 1. Family Members (Primary Users)
- Track caregiver location in real-time
- View appointment schedules
- Receive care updates and notifications
- Review care notes and photos
- Communicate with caregivers and coordinators
- Access emergency contact information

#### 2. Caregivers
- Clock in/out with GPS verification
- View daily schedules and assignments
- Document care activities in real-time
- Upload photos (medication, meals, activities)
- Navigate to patient locations
- Receive task reminders and alerts

#### 3. Care Coordinators/Admins
- Manage caregiver assignments
- Monitor all active care sessions
- Review and approve timesheets
- Send broadcast notifications
- Access analytics and reports
- Manage user accounts

#### 4. Patients (Secondary Users)
- View upcoming appointments
- Request schedule changes
- Access caregiver profiles
- Emergency SOS button

### Core Features

1. **Real-Time Caregiver Tracking**
   - Live GPS location updates
   - Geofencing for arrival/departure verification
   - Route history and mileage tracking
   - ETA calculations for scheduled visits

2. **Appointment Management**
   - Daily/weekly schedule views
   - Appointment details (service type, duration, special instructions)
   - Push notifications for upcoming appointments
   - Schedule change requests
   - Recurring appointment management

3. **Care Documentation**
   - Timestamped care notes
   - Photo uploads (meals, activities, medication)
   - Vital signs logging (blood pressure, temperature, glucose)
   - Medication administration records (MAR)
   - Incident reporting

4. **Family Communication**
   - In-app messaging between family and caregivers
   - Daily care summaries
   - Photo sharing
   - Emergency alerts
   - Care coordinator chat

5. **Provider Integration**
   - Doctor appointment scheduling
   - Medical records access (with permissions)
   - Prescription reminders
   - Healthcare provider contact directory

6. **Administrative Dashboard**
   - Caregiver performance metrics
   - Timesheet management
   - Client satisfaction scores
   - Compliance tracking
   - Billing integration

---

## Technical Architecture

### Recommended Tech Stack

#### Mobile Development: **React Native with Expo**

**Rationale:**
- Single codebase for iOS and Android
- Fast development with hot reload
- Excellent community support and libraries
- Native performance for GPS and push notifications
- Expo's managed workflow simplifies deployment
- Over-the-air (OTA) updates for rapid bug fixes

**Alternative:** Flutter (if team prefers Dart and Material Design)

#### Backend: **Node.js + Express + PostgreSQL**

**Architecture:** RESTful API with WebSocket support for real-time features

**Technology Choices:**
- **Runtime:** Node.js 20 LTS
- **Framework:** Express.js 4.18+
- **Database:** PostgreSQL 15+ with PostGIS extension (for geolocation)
- **Cache:** Redis 7+ for session management and real-time data
- **Real-time:** Socket.io for live location updates
- **Storage:** AWS S3 or Cloudflare R2 for photos/documents
- **Push Notifications:** Firebase Cloud Messaging (FCM)
- **Background Tasks:** Bull Queue with Redis

#### Infrastructure

- **Hosting:** AWS (EC2/ECS) or Railway.app for simplicity
- **CDN:** Cloudflare for static assets and DDoS protection
- **Monitoring:** Sentry for error tracking, DataDog for performance
- **CI/CD:** GitHub Actions
- **Version Control:** Git with GitHub

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Mobile Clients                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   Family     │  │  Caregivers  │  │    Admins    │           │
│  │  (React      │  │  (React      │  │  (React      │           │
│  │   Native)    │  │   Native)    │  │   Native)    │           │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘           │
└─────────┼──────────────────┼──────────────────┼──────────────────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                    ┌────────▼────────┐
                    │   API Gateway   │
                    │  (Load Balancer)│
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐    ┌───────▼──────┐   ┌──────▼──────┐
    │   REST    │    │  WebSocket   │   │    Auth     │
    │    API    │    │   Server     │   │   Service   │
    │ (Express) │    │ (Socket.io)  │   │   (JWT)     │
    └─────┬─────┘    └───────┬──────┘   └──────┬──────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐    ┌───────▼──────┐   ┌──────▼──────┐
    │PostgreSQL │    │    Redis     │   │     S3      │
    │ (Primary) │    │   (Cache)    │   │  (Photos)   │
    └───────────┘    └──────────────┘   └─────────────┘
          │
    ┌─────▼─────┐
    │  PostGIS  │
    │ (Geo Data)│
    └───────────┘

External Services:
├── Firebase Cloud Messaging (Push Notifications)
├── Google Maps API (Mapping & Geocoding)
├── Twilio (SMS Notifications)
└── Stripe (Payment Processing - Future)
```

### Data Flow for Real-Time Tracking

```
Caregiver App (Foreground)
    │
    ├─> GPS Location Update (Every 30s)
    │
    ├─> WebSocket Connection
    │      │
    │      └─> Socket.io Server
    │            │
    │            ├─> Validate & Sanitize
    │            │
    │            ├─> Store in Redis (TTL: 5min)
    │            │
    │            ├─> Check Geofence Status
    │            │
    │            └─> Broadcast to Family Members
    │                  │
    │                  └─> Family App Updates Map
    │
    └─> Periodic Sync to PostgreSQL (Every 5min)
```

---

## Database Schema

### ERD Overview

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│    Users    │────▶│ Appointments │◀────│  Patients   │
└──────┬──────┘     └──────┬───────┘     └─────────────┘
       │                   │
       │                   │
┌──────▼──────┐     ┌──────▼───────┐
│  Caregivers │     │  CareNotes   │
└──────┬──────┘     └──────────────┘
       │
┌──────▼──────┐
│  Locations  │
│ (GPS Track) │
└─────────────┘
```

### Table Schemas

#### 1. Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('family', 'caregiver', 'admin', 'patient', 'coordinator')),
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  last_login TIMESTAMP WITH TIME ZONE,
  fcm_token TEXT, -- For push notifications
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_active ON users(is_active);
```

#### 2. Patients Table

```sql
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  primary_contact_id UUID REFERENCES users(id), -- Family member
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20),
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(2),
  zip_code VARCHAR(10),
  coordinates GEOGRAPHY(POINT, 4326), -- PostGIS for geofencing
  emergency_contact_name VARCHAR(200),
  emergency_contact_phone VARCHAR(20),
  medical_conditions TEXT[],
  allergies TEXT[],
  medications JSONB, -- {name, dosage, frequency}
  mobility_level VARCHAR(50),
  special_instructions TEXT,
  preferred_language VARCHAR(50) DEFAULT 'English',
  service_plan VARCHAR(50), -- 'hourly', '24-hour', 'overnight'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_patients_user_id ON patients(user_id);
CREATE INDEX idx_patients_primary_contact ON patients(primary_contact_id);
CREATE INDEX idx_patients_coordinates ON patients USING GIST(coordinates);
```

#### 3. Caregivers Table

```sql
CREATE TABLE caregivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  employee_id VARCHAR(50) UNIQUE,
  certifications TEXT[], -- ['RN', 'LVN', 'CNA', 'Alzheimer\'s Certified']
  specialties TEXT[], -- ['Dementia Care', 'Hospice', 'Skilled Nursing']
  hourly_rate DECIMAL(10, 2),
  hire_date DATE,
  background_check_date DATE,
  background_check_status VARCHAR(20),
  is_available BOOLEAN DEFAULT true,
  max_weekly_hours INT DEFAULT 40,
  preferred_locations VARCHAR(100)[], -- Zip codes or cities
  rating DECIMAL(3, 2) DEFAULT 5.00,
  total_reviews INT DEFAULT 0,
  bio TEXT,
  languages_spoken VARCHAR(50)[] DEFAULT ARRAY['English'],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_caregivers_user_id ON caregivers(user_id);
CREATE INDEX idx_caregivers_is_available ON caregivers(is_available);
```

#### 4. Appointments Table

```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  caregiver_id UUID REFERENCES caregivers(id) ON DELETE SET NULL,
  service_type VARCHAR(100) NOT NULL, -- 'Home Care', 'Skilled Nursing', etc.
  scheduled_start TIMESTAMP WITH TIME ZONE NOT NULL,
  scheduled_end TIMESTAMP WITH TIME ZONE NOT NULL,
  actual_start TIMESTAMP WITH TIME ZONE,
  actual_end TIMESTAMP WITH TIME ZONE,
  status VARCHAR(20) NOT NULL DEFAULT 'scheduled'
    CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'no_show')),
  location_verified BOOLEAN DEFAULT false, -- Geofence check
  clock_in_location GEOGRAPHY(POINT, 4326),
  clock_out_location GEOGRAPHY(POINT, 4326),
  notes TEXT,
  special_instructions TEXT,
  recurrence_rule TEXT, -- RRULE format for recurring appointments
  parent_appointment_id UUID REFERENCES appointments(id), -- For recurring series
  cancellation_reason TEXT,
  cancelled_by UUID REFERENCES users(id),
  cancelled_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_appointments_patient_id ON appointments(patient_id);
CREATE INDEX idx_appointments_caregiver_id ON appointments(caregiver_id);
CREATE INDEX idx_appointments_scheduled_start ON appointments(scheduled_start);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_location ON appointments USING GIST(clock_in_location);
```

#### 5. Care Notes Table

```sql
CREATE TABLE care_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID NOT NULL REFERENCES appointments(id) ON DELETE CASCADE,
  caregiver_id UUID NOT NULL REFERENCES caregivers(id),
  patient_id UUID NOT NULL REFERENCES patients(id),
  note_type VARCHAR(50) NOT NULL
    CHECK (note_type IN ('general', 'medication', 'vital_signs', 'meal', 'activity', 'incident')),
  content TEXT NOT NULL,
  photos TEXT[], -- URLs to S3
  vital_signs JSONB, -- {bp_systolic, bp_diastolic, heart_rate, temperature, glucose}
  medications_given JSONB[], -- [{name, dosage, time_given, notes}]
  mood_assessment VARCHAR(50), -- 'happy', 'sad', 'agitated', 'calm'
  pain_level INT CHECK (pain_level BETWEEN 0 AND 10),
  is_flagged BOOLEAN DEFAULT false, -- For urgent issues
  flagged_reason TEXT,
  acknowledged_by UUID REFERENCES users(id), -- Admin/coordinator reviewed
  acknowledged_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_care_notes_appointment_id ON care_notes(appointment_id);
CREATE INDEX idx_care_notes_patient_id ON care_notes(patient_id);
CREATE INDEX idx_care_notes_created_at ON care_notes(created_at DESC);
CREATE INDEX idx_care_notes_flagged ON care_notes(is_flagged) WHERE is_flagged = true;
```

#### 6. Location Tracking Table

```sql
CREATE TABLE location_tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  caregiver_id UUID NOT NULL REFERENCES caregivers(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  location GEOGRAPHY(POINT, 4326) NOT NULL,
  accuracy DECIMAL(10, 2), -- Meters
  speed DECIMAL(10, 2), -- MPH
  heading DECIMAL(5, 2), -- Degrees
  altitude DECIMAL(10, 2), -- Meters
  battery_level INT, -- Percentage
  is_background BOOLEAN DEFAULT false,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Partitioning by month for performance
CREATE INDEX idx_location_tracks_caregiver_time ON location_tracks(caregiver_id, recorded_at DESC);
CREATE INDEX idx_location_tracks_appointment ON location_tracks(appointment_id);
CREATE INDEX idx_location_tracks_location ON location_tracks USING GIST(location);

-- TTL: Auto-delete records older than 90 days
CREATE OR REPLACE FUNCTION delete_old_location_tracks()
RETURNS void AS $$
BEGIN
  DELETE FROM location_tracks WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;
```

#### 7. Notifications Table

```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL
    CHECK (type IN ('appointment_reminder', 'caregiver_arrived', 'caregiver_departed',
                    'care_note_added', 'schedule_change', 'emergency', 'message')),
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  data JSONB, -- Additional payload
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP WITH TIME ZONE,
  sent_via VARCHAR(20)[] DEFAULT ARRAY['push'], -- ['push', 'email', 'sms']
  priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id, created_at DESC);
CREATE INDEX idx_notifications_is_read ON notifications(user_id, is_read);
```

#### 8. Messages Table (In-App Chat)

```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL,
  sender_id UUID NOT NULL REFERENCES users(id),
  recipient_id UUID NOT NULL REFERENCES users(id),
  patient_id UUID REFERENCES patients(id), -- Context
  message_type VARCHAR(20) DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'file')),
  content TEXT,
  attachment_url TEXT,
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at DESC);
CREATE INDEX idx_messages_recipient ON messages(recipient_id, is_read);
```

#### 9. Family Members Table (Junction)

```sql
CREATE TABLE patient_family_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  family_member_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  relationship VARCHAR(50), -- 'daughter', 'son', 'spouse', 'guardian'
  is_primary_contact BOOLEAN DEFAULT false,
  can_view_medical BOOLEAN DEFAULT false,
  can_edit_schedule BOOLEAN DEFAULT false,
  notification_preferences JSONB, -- {email, sms, push}
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(patient_id, family_member_id)
);

CREATE INDEX idx_family_patient ON patient_family_members(patient_id);
CREATE INDEX idx_family_member ON patient_family_members(family_member_id);
```

#### 10. Audit Log Table (Compliance)

```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  action VARCHAR(100) NOT NULL, -- 'login', 'view_patient', 'edit_note', 'delete_appointment'
  resource_type VARCHAR(50), -- 'appointment', 'patient', 'note'
  resource_id UUID,
  ip_address INET,
  user_agent TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id, created_at DESC);
CREATE INDEX idx_audit_logs_resource ON audit_logs(resource_type, resource_id);
```

### Database Functions & Triggers

#### Auto-update `updated_at` timestamp

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_patients_updated_at BEFORE UPDATE ON patients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Repeat for other tables...
```

#### Geofence Validation Function

```sql
CREATE OR REPLACE FUNCTION check_appointment_geofence(
  p_appointment_id UUID,
  p_location GEOGRAPHY
) RETURNS BOOLEAN AS $$
DECLARE
  patient_location GEOGRAPHY;
  distance_meters DECIMAL;
BEGIN
  SELECT coordinates INTO patient_location
  FROM patients p
  JOIN appointments a ON a.patient_id = p.id
  WHERE a.id = p_appointment_id;

  distance_meters := ST_Distance(patient_location, p_location);

  -- Within 100 meters = valid
  RETURN distance_meters <= 100;
END;
$$ LANGUAGE plpgsql;
```

---

## Feature Specifications

### 1. Real-Time Caregiver Tracking

#### User Stories
- **As a family member**, I want to see my caregiver's live location so I know when they'll arrive.
- **As a coordinator**, I want to verify caregivers are at the correct location.
- **As a caregiver**, I want automatic clock-in when I arrive at the patient's home.

#### Technical Requirements

**GPS Tracking**
- Foreground tracking: Every 30 seconds (±5s tolerance)
- Background tracking: Every 2-3 minutes (to preserve battery)
- Accuracy requirement: <50 meters horizontal accuracy
- Libraries:
  - React Native: `react-native-geolocation-service`
  - Background: `react-native-background-geolocation`

**Geofencing**
- Radius: 100 meters from patient address
- Entry event: Trigger "Caregiver Arrived" notification
- Exit event: Trigger "Caregiver Departed" notification
- Use PostGIS `ST_DWithin` for efficient queries

**Data Storage Strategy**
```javascript
// High-frequency writes to Redis (in-memory)
// Key: `caregiver:location:{caregiver_id}`
// Value: {lat, lng, accuracy, timestamp}
// TTL: 5 minutes

// Periodic batch insert to PostgreSQL every 5 minutes
// For historical tracking and analytics
```

**WebSocket Implementation**
```javascript
// Server (Socket.io)
io.on('connection', (socket) => {
  socket.on('caregiver:location:update', async (data) => {
    const { caregiverId, location, appointmentId } = data;

    // Store in Redis
    await redis.setex(
      `caregiver:location:${caregiverId}`,
      300, // 5 min TTL
      JSON.stringify({ ...location, timestamp: Date.now() })
    );

    // Broadcast to family members watching this appointment
    const familyRoomId = `appointment:${appointmentId}`;
    io.to(familyRoomId).emit('location:updated', {
      caregiverId,
      location,
      timestamp: Date.now()
    });

    // Check geofence
    const isWithinGeofence = await checkGeofence(appointmentId, location);
    if (isWithinGeofence && !appointment.location_verified) {
      await markLocationVerified(appointmentId);
      io.to(familyRoomId).emit('caregiver:arrived', { caregiverId });
    }
  });
});
```

**Mobile Client (React Native)**
```javascript
import Geolocation from 'react-native-geolocation-service';
import io from 'socket.io-client';

const socket = io('https://api.happyhomecare.com', {
  auth: { token: authToken }
});

// Start tracking when caregiver begins shift
const startLocationTracking = (appointmentId) => {
  const watchId = Geolocation.watchPosition(
    (position) => {
      socket.emit('caregiver:location:update', {
        caregiverId: currentUser.id,
        appointmentId,
        location: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        }
      });
    },
    (error) => console.error(error),
    {
      enableHighAccuracy: true,
      interval: 30000, // 30 seconds
      fastestInterval: 15000,
      distanceFilter: 10 // Meters
    }
  );

  return watchId;
};
```

#### UI Components

**Family View - Live Map**
```
┌─────────────────────────────────────┐
│  📍 Tracking Sarah J. (RN)          │
│  ────────────────────────────────── │
│                                     │
│      [      Google Map View     ]  │
│                                     │
│      🏠 (Patient Home - Marker)     │
│       ↓                             │
│      🚗 (Caregiver - Moving Dot)    │
│                                     │
│  ────────────────────────────────── │
│  ETA: 8 minutes                     │
│  Last Updated: 15 seconds ago       │
│  ────────────────────────────────── │
│  [Message Caregiver]  [Call]       │
└─────────────────────────────────────┘
```

### 2. Appointment Management

#### Features

**Schedule View**
- Calendar view (day/week/month)
- Color-coded by status (scheduled, in-progress, completed)
- Filter by caregiver, patient, service type
- Quick actions: edit, cancel, reschedule

**Appointment Details**
```javascript
{
  id: "uuid",
  patient: { name, photo, conditions },
  caregiver: { name, photo, certifications },
  serviceType: "24-Hour Home Care",
  scheduledStart: "2025-12-24T09:00:00Z",
  scheduledEnd: "2025-12-24T17:00:00Z",
  status: "scheduled",
  specialInstructions: "Patient prefers morning bath at 10 AM",
  tasks: [
    "Medication reminder (9 AM, 2 PM, 6 PM)",
    "Blood pressure check",
    "Meal preparation (lunch, dinner)",
    "Light housekeeping"
  ],
  recurringPattern: "Every Monday, Wednesday, Friday"
}
```

**Push Notifications**
```javascript
// 1 hour before appointment
{
  title: "Upcoming Appointment",
  body: "Your appointment with Sarah J. starts in 1 hour",
  data: { appointmentId, type: "reminder" }
}

// Caregiver arrived
{
  title: "Caregiver Arrived",
  body: "Sarah J. has arrived at Mom's home",
  data: { appointmentId, caregiverId, type: "arrival" }
}
```

**Recurring Appointments**
- Support RRULE format (RFC 5545)
- Example: "Every weekday at 9 AM for 3 months"
- Bulk edit vs. single instance edit
- Smart scheduling: skip holidays, account for caregiver availability

#### API Endpoints

```typescript
// Get appointments for a patient
GET /api/v1/appointments?patientId={id}&startDate={date}&endDate={date}

// Create new appointment
POST /api/v1/appointments
{
  patientId: "uuid",
  caregiverId: "uuid",
  serviceType: "Home Care",
  scheduledStart: "ISO 8601",
  scheduledEnd: "ISO 8601",
  recurrence: "RRULE:FREQ=DAILY;COUNT=30",
  specialInstructions: "string"
}

// Clock in/out
POST /api/v1/appointments/{id}/clock-in
{
  location: { lat, lng },
  timestamp: "ISO 8601"
}

POST /api/v1/appointments/{id}/clock-out
{
  location: { lat, lng },
  timestamp: "ISO 8601"
}
```

### 3. Care Documentation

#### Care Notes Interface

**Note Types:**
1. General Observation
2. Medication Administration
3. Vital Signs
4. Meal Logs
5. Activity/Exercise
6. Incident Reports

**Example Note Entry**
```javascript
{
  noteType: "vital_signs",
  content: "Patient alert and responsive. Blood pressure elevated.",
  vitalSigns: {
    bloodPressure: { systolic: 145, diastolic: 92 },
    heartRate: 78,
    temperature: 98.6,
    glucose: null,
    oxygenSaturation: 97
  },
  photos: ["https://s3.../vitals-photo.jpg"],
  timestamp: "2025-12-24T14:30:00Z",
  moodAssessment: "calm",
  painLevel: 2
}
```

**Photo Upload**
- Max size: 5MB per photo
- Formats: JPEG, PNG
- Auto-resize to 1920px width
- EXIF data stripping (privacy)
- S3 storage with presigned URLs
- Watermark with timestamp + caregiver name

**Medication Administration Record (MAR)**
```javascript
{
  medicationName: "Lisinopril",
  dosage: "10mg",
  scheduledTime: "09:00",
  actualTime: "09:15",
  givenBy: "caregiver-uuid",
  patientAccepted: true,
  notes: "Taken with breakfast",
  photo: "medication-photo-url" // Proof of administration
}
```

**Incident Reporting**
- Trigger: Select "Incident Report" note type
- Automatic notification to coordinator + family (if opted-in)
- Required fields:
  - Type (fall, medication error, behavioral issue, other)
  - Description
  - Actions taken
  - Photos/documentation
  - Witnesses
- Immediate escalation for severe incidents

#### Real-Time Sync

**Offline Support**
- Queue notes locally in AsyncStorage
- Auto-sync when connection restored
- Conflict resolution: server timestamp wins
- Visual indicator: "Syncing..." vs "Saved"

### 4. Family Communication Hub

#### In-App Messaging

**Features:**
- 1-on-1 chats: Family ↔ Caregiver
- Group chats: Family ↔ Care Team
- Rich media: Photos, voice notes
- Read receipts
- Push notifications for new messages

**Technical Implementation:**
- Real-time: Socket.io rooms
- Message storage: PostgreSQL `messages` table
- File uploads: S3 with presigned URLs
- Encryption: End-to-end encryption for HIPAA compliance (optional)

**UI Flow:**
```
┌─────────────────────────────────────┐
│  Conversations                      │
│  ────────────────────────────────── │
│  👤 Sarah J. (Caregiver)            │
│     "Mom had a great day today!"    │
│     10:45 AM                        │
│  ────────────────────────────────── │
│  👥 Mom's Care Team                 │
│     "Schedule change requested"     │
│     Yesterday                       │
│  ────────────────────────────────── │
│  👤 Dr. Martinez (PCP)              │
│     "Lab results are in"            │
│     2 days ago                      │
└─────────────────────────────────────┘
```

#### Daily Care Summaries

**Auto-Generated Report**
- Time: 8 PM daily (configurable)
- Delivery: Push notification + email
- Content:
  - Total care hours
  - Medications given
  - Meals consumed
  - Activities completed
  - Mood assessment
  - Photos from the day
  - Caregiver notes

**Example Summary:**
```
Daily Care Summary for Mom
December 24, 2025

Care Hours: 8 hours (9 AM - 5 PM)
Caregiver: Sarah J., RN

✅ Medications: All administered on time
✅ Meals: Breakfast, lunch, dinner (photos attached)
✅ Activities: Morning walk, puzzle time, TV watching

Mood: Happy and engaged
Pain Level: 2/10 (mild)

Notes:
- Mom enjoyed the Christmas decorations
- Blood pressure slightly elevated (145/92)
- Requested favorite dessert for tomorrow

📸 3 photos attached
```

### 5. Emergency Features

#### SOS Button

**Functionality:**
- Prominent red button in app
- Triggers immediate alert to:
  1. Primary family contact (call + SMS)
  2. Care coordinator (push + SMS)
  3. On-duty caregiver (if available)
- Sends GPS coordinates
- Optional: Auto-dial 911 with 10-second countdown

**Technical Implementation:**
```javascript
const handleSOSPress = async () => {
  // Show confirmation dialog
  Alert.alert(
    "Emergency SOS",
    "This will alert your family and care team. Continue?",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Send SOS",
        onPress: async () => {
          const location = await getCurrentLocation();

          // Send to backend
          await api.post('/emergency/sos', {
            patientId: patient.id,
            location,
            timestamp: new Date().toISOString()
          });

          // Show confirmation
          Alert.alert("SOS Sent", "Help is on the way");
        },
        style: "destructive"
      }
    ]
  );
};
```

**Backend Alert Flow:**
```javascript
app.post('/api/v1/emergency/sos', async (req, res) => {
  const { patientId, location, timestamp } = req.body;

  // Get patient and family contacts
  const patient = await db.getPatient(patientId);
  const familyMembers = await db.getFamilyMembers(patientId);

  // Send SMS to primary contact
  await twilio.messages.create({
    to: patient.emergencyContactPhone,
    body: `EMERGENCY: ${patient.firstName} has triggered an SOS alert. Location: https://maps.google.com/?q=${location.lat},${location.lng}`
  });

  // Send push notifications
  const tokens = familyMembers.map(f => f.fcmToken);
  await fcm.sendMulticast({
    tokens,
    notification: {
      title: "⚠️ EMERGENCY SOS",
      body: `${patient.firstName} needs immediate help`,
      priority: "high",
      sound: "emergency.wav"
    },
    data: { type: 'sos', patientId, location }
  });

  // Log to audit
  await db.logAudit({
    action: 'sos_triggered',
    resourceId: patientId,
    metadata: { location, timestamp }
  });

  res.status(200).json({ success: true });
});
```

---

## API Design

### Base URL
```
Production: https://api.happyhomecare.com/v1
Staging: https://staging-api.happyhomecare.com/v1
```

### Authentication

**JWT-based authentication**

```http
POST /auth/login
Content-Type: application/json

{
  "email": "family@example.com",
  "password": "SecurePass123!"
}

Response:
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "family@example.com",
    "role": "family",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

**Token Refresh**
```http
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**All API requests require Authorization header:**
```http
Authorization: Bearer {accessToken}
```

### Core Endpoints

#### Users & Profiles

```http
# Get current user profile
GET /users/me

# Update profile
PATCH /users/me
{
  "firstName": "John",
  "phone": "+16195550100",
  "notificationPreferences": {
    "email": true,
    "sms": true,
    "push": true
  }
}

# Upload profile photo
POST /users/me/avatar
Content-Type: multipart/form-data
```

#### Patients

```http
# List patients (family members see only their patients)
GET /patients

# Get patient details
GET /patients/{id}

# Get patient care team
GET /patients/{id}/care-team

# Get patient medical info (requires permission)
GET /patients/{id}/medical-info
```

#### Appointments

```http
# List appointments
GET /appointments?patientId={id}&startDate={date}&endDate={date}&status={status}

# Create appointment
POST /appointments
{
  "patientId": "uuid",
  "caregiverId": "uuid",
  "serviceType": "Home Care",
  "scheduledStart": "2025-12-24T09:00:00Z",
  "scheduledEnd": "2025-12-24T17:00:00Z",
  "recurrence": "RRULE:FREQ=DAILY;COUNT=30",
  "specialInstructions": "Patient prefers morning care"
}

# Update appointment
PATCH /appointments/{id}
{
  "scheduledStart": "2025-12-25T09:00:00Z"
}

# Cancel appointment
DELETE /appointments/{id}
{
  "reason": "Patient hospitalized"
}

# Clock in
POST /appointments/{id}/clock-in
{
  "location": {
    "latitude": 32.7157,
    "longitude": -117.1611,
    "accuracy": 15
  },
  "timestamp": "2025-12-24T09:00:00Z"
}

# Clock out
POST /appointments/{id}/clock-out
{
  "location": { "latitude": 32.7157, "longitude": -117.1611 },
  "timestamp": "2025-12-24T17:00:00Z"
}
```

#### Care Notes

```http
# Get care notes for appointment
GET /appointments/{id}/notes

# Get care notes for patient (with pagination)
GET /patients/{id}/notes?page=1&limit=20&type={noteType}

# Create care note
POST /appointments/{id}/notes
{
  "noteType": "vital_signs",
  "content": "Patient alert and responsive",
  "vitalSigns": {
    "bloodPressure": { "systolic": 120, "diastolic": 80 },
    "heartRate": 72,
    "temperature": 98.6
  },
  "photos": ["base64-encoded-image"],
  "moodAssessment": "happy",
  "painLevel": 0
}

# Flag note as important
POST /notes/{id}/flag
{
  "reason": "Unusual vital signs - requires review"
}
```

#### Location Tracking

```http
# Get caregiver's current location
GET /caregivers/{id}/location

# Get location history
GET /caregivers/{id}/location/history?startDate={date}&endDate={date}

# WebSocket endpoint for real-time tracking
WS /track/appointment/{appointmentId}
```

#### Notifications

```http
# Get user notifications
GET /notifications?page=1&limit=20&isRead={boolean}

# Mark as read
PATCH /notifications/{id}/read

# Mark all as read
POST /notifications/mark-all-read

# Update notification preferences
PATCH /users/me/notification-preferences
{
  "email": true,
  "sms": false,
  "push": true,
  "types": {
    "appointmentReminders": true,
    "caregiverArrival": true,
    "careNotes": false
  }
}
```

#### Messages

```http
# Get conversations
GET /messages/conversations

# Get messages in conversation
GET /messages/conversations/{conversationId}?page=1&limit=50

# Send message
POST /messages
{
  "recipientId": "uuid",
  "patientId": "uuid",
  "content": "How is Mom doing today?",
  "type": "text"
}

# Upload attachment
POST /messages/attachment
Content-Type: multipart/form-data
```

### Error Handling

**Standard Error Response:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid appointment time",
    "details": [
      {
        "field": "scheduledStart",
        "message": "Start time must be in the future"
      }
    ]
  }
}
```

**Error Codes:**
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (e.g., appointment overlap)
- `429` - Too Many Requests (rate limiting)
- `500` - Internal Server Error

### Rate Limiting

```
Standard endpoints: 100 requests/minute per user
Location updates: 120 requests/minute per caregiver
Login attempts: 5 attempts/15 minutes per IP
```

---

## Development Phases

### Phase 1: MVP (8-10 weeks)

**Weeks 1-2: Foundation**
- [ ] Project setup (React Native + Expo)
- [ ] Backend API scaffolding (Express + PostgreSQL)
- [ ] Database schema implementation
- [ ] Authentication system (JWT)
- [ ] Basic UI components library

**Weeks 3-4: Core Features**
- [ ] User registration and login (family, caregiver, admin)
- [ ] Patient profile management
- [ ] Appointment creation and viewing
- [ ] Basic caregiver list and selection

**Weeks 5-6: Real-Time Tracking**
- [ ] GPS location tracking (foreground)
- [ ] WebSocket server setup (Socket.io)
- [ ] Live map view for family members
- [ ] Geofencing and arrival/departure detection
- [ ] Clock in/out functionality

**Weeks 7-8: Care Documentation**
- [ ] Care notes creation (text only)
- [ ] Photo upload to S3
- [ ] Vital signs logging
- [ ] Medication administration records
- [ ] Daily care summaries

**Weeks 9-10: Notifications & Polish**
- [ ] Push notifications setup (FCM)
- [ ] Appointment reminders
- [ ] Arrival/departure alerts
- [ ] Basic in-app messaging
- [ ] UI/UX refinements
- [ ] Testing and bug fixes

**MVP Features:**
✅ User authentication (family, caregiver, admin)
✅ Appointment scheduling and management
✅ Real-time GPS tracking
✅ Clock in/out with geofencing
✅ Care notes with photos
✅ Push notifications
✅ Basic messaging
✅ Daily care summaries

### Phase 2: Enhanced Features (6-8 weeks)

**Weeks 11-12: Advanced Scheduling**
- [ ] Recurring appointments (RRULE)
- [ ] Caregiver availability management
- [ ] Smart scheduling (AI-assisted matching)
- [ ] Bulk scheduling operations
- [ ] Calendar integrations (Google Calendar, Apple Calendar)

**Weeks 13-14: Communication Enhancements**
- [ ] Voice messages in chat
- [ ] Video calling (WebRTC or Twilio)
- [ ] Care team group chats
- [ ] Read receipts and typing indicators
- [ ] Rich notifications with actions

**Weeks 15-16: Admin Dashboard**
- [ ] Web-based admin portal (Next.js)
- [ ] Caregiver performance metrics
- [ ] Timesheet management and approval
- [ ] Billing integration
- [ ] Client satisfaction surveys
- [ ] Advanced reporting and analytics

**Weeks 17-18: Provider Integration**
- [ ] Healthcare provider directory
- [ ] Doctor appointment scheduling API
- [ ] Medical records access (with consent)
- [ ] Lab results integration
- [ ] Prescription reminders

**Phase 2 Features:**
✅ Recurring appointments
✅ Video calling
✅ Admin dashboard
✅ Advanced analytics
✅ Provider integrations

### Phase 3: Advanced Features (8-12 weeks)

**Weeks 19-21: AI & Automation**
- [ ] AI-powered caregiver recommendations
- [ ] Predictive scheduling
- [ ] Fall detection (using phone sensors)
- [ ] Anomaly detection in vital signs
- [ ] Natural language processing for care notes

**Weeks 22-24: Wearable Integration**
- [ ] Apple Health integration
- [ ] Google Fit integration
- [ ] Fitbit API integration
- [ ] Smartwatch apps (Apple Watch, Wear OS)
- [ ] Continuous health monitoring

**Weeks 25-27: Compliance & Security**
- [ ] HIPAA compliance audit
- [ ] End-to-end encryption for messages
- [ ] Secure file sharing (encrypted S3)
- [ ] Two-factor authentication
- [ ] Biometric authentication (Face ID, Touch ID)
- [ ] Comprehensive audit logging

**Weeks 28-30: Expansion Features**
- [ ] Multi-language support (Spanish, Tagalog)
- [ ] Offline mode enhancements
- [ ] Telemedicine integration
- [ ] Medication dispensing device integration
- [ ] Smart home integration (Alexa, Google Home)

**Phase 3 Features:**
✅ AI-powered features
✅ Wearable integrations
✅ Advanced security
✅ Multi-language support
✅ IoT integrations

---

## Integration with Existing Website

### Current Website Overview

**Technology Stack:**
- Framework: Next.js 15 (App Router)
- Hosting: Cloudflare Pages
- Database: None (static site currently)
- CMS: Content managed in `/lib/content-data.ts`

**Existing Data Structures:**
```javascript
// From /lib/content-data.ts
services: [
  { slug, title, shortDescription, fullDescription, icon, features }
]

locations: [
  { slug, name, region, description, zipCodes, neighborhoods, coordinates }
]

testimonials: [
  { id, quote, author, role, location, rating, avatar }
]
```

### Integration Strategy

#### 1. Shared Backend API

**Create unified API that serves both web and mobile:**

```
┌──────────────┐         ┌──────────────┐
│  Next.js Web │────────▶│              │
└──────────────┘         │   Shared     │
                         │   Node.js    │◀────┐
┌──────────────┐         │   API        │     │
│ Mobile Apps  │────────▶│              │     │
└──────────────┘         └──────────────┘     │
                               │              │
                         ┌─────▼─────┐   ┌────▼────┐
                         │PostgreSQL │   │  Redis  │
                         └───────────┘   └─────────┘
```

**API serves:**
- Website: Public content (services, locations, testimonials)
- Mobile App: Authenticated user data (appointments, care notes, tracking)

#### 2. Website Enhancements

**Add to existing Next.js website:**

**App Landing Page:** `/app/page.tsx` (already exists as "Coming Soon")

Update to full-featured landing page:
```typescript
// app/app/page.tsx
import { Metadata } from 'next';
import AppHeroSection from '@/components/app/AppHeroSection';
import FeatureShowcase from '@/components/app/FeatureShowcase';
import DownloadSection from '@/components/app/DownloadSection';
import FAQSection from '@/components/app/FAQSection';

export const metadata: Metadata = {
  title: 'HappyHomeCare Connect | Mobile App for Family & Caregivers',
  description: 'Track your caregiver in real-time, manage appointments, view care updates, and stay connected with your loved ones.',
};

export default function AppPage() {
  return (
    <>
      <AppHeroSection />
      <FeatureShowcase />
      <DownloadSection />
      <FAQSection />
    </>
  );
}
```

**App Download CTAs:**
Add to every page footer:
```jsx
<section className="bg-primary text-white py-8">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4">
      Download HappyHomeCare Connect
    </h3>
    <p className="mb-6">
      Track care, stay connected, and have peace of mind.
    </p>
    <div className="flex justify-center gap-4">
      <a href="https://apps.apple.com/app/happyhomecare-connect">
        <img src="/images/app-store-badge.svg" alt="Download on App Store" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.happyhomecare.connect">
        <img src="/images/google-play-badge.png" alt="Get it on Google Play" />
      </a>
    </div>
  </div>
</section>
```

#### 3. Contact Form Integration

**Enhance `/app/contact/page.tsx` to sync with mobile app:**

```typescript
// Existing form submits to new API
const handleSubmit = async (data: ContactFormData) => {
  const response = await fetch('https://api.happyhomecare.com/v1/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      source: 'website_contact_form',
      requestedServices: selectedServices
    })
  });

  if (response.ok) {
    // Automatically create patient record in mobile app database
    // Care coordinator gets notified to follow up
  }
};
```

#### 4. Authentication Flow

**Add "Sign In" to website navigation:**

```typescript
// app/layout.tsx - Add to navigation
<nav>
  {/* Existing navigation */}
  <a href="/login" className="btn-secondary">
    Family Portal
  </a>
</nav>
```

**Login redirects:**
- Family members → Mobile app (deep link) or web portal
- Caregivers → Mobile app only
- Admins → Web admin dashboard

**Deep linking:**
```javascript
// Mobile app setup (app.json)
{
  "expo": {
    "scheme": "happyhomecare",
    "ios": {
      "associatedDomains": ["applinks:happyhomecare.com"]
    },
    "android": {
      "intentFilters": [
        {
          "action": "VIEW",
          "data": { "scheme": "https", "host": "happyhomecare.com" }
        }
      ]
    }
  }
}
```

**Universal links:**
```
https://happyhomecare.com/app/login → Opens mobile app if installed
https://happyhomecare.com/app/appointments/{id} → Deep links to appointment
```

#### 5. SEO Schema Integration

**Add mobile app schema to website:**

```typescript
// lib/schema.ts - Add new function
export function generateMobileAppSchema(): SchemaMarkup {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "HappyHomeCare Connect",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    },
    "downloadUrl": "https://apps.apple.com/app/happyhomecare-connect",
    "installUrl": "https://play.google.com/store/apps/details?id=com.happyhomecare.connect"
  };
}
```

#### 6. API Routes in Next.js

**Add API routes for mobile app:**

```typescript
// app/api/v1/public/services/route.ts
export async function GET() {
  const { services } = await import('@/lib/content-data');
  return Response.json(services);
}

// app/api/v1/public/locations/route.ts
export async function GET() {
  const { locations } = await import('@/lib/content-data');
  return Response.json(locations);
}
```

**These routes allow mobile app to fetch:**
- Service listings for appointment booking
- Location data for geofencing setup
- Caregiver profiles (public info only)

#### 7. Shared Components

**Create shared design system:**

```
/lib/design-tokens.ts
export const colors = {
  primary: '#0066CC',
  secondary: '#00AA66',
  accent: '#FF6B35',
  // ... same colors for web and mobile
};

export const typography = {
  // Shared font sizes, weights
};
```

**Mobile app uses same tokens:**
```javascript
// mobile-app/src/theme.ts
import { colors, typography } from '@happyhomecare/shared-design';

export const theme = {
  colors,
  typography,
  // React Native specific styles
};
```

---

## Claude Prompts for Development

### Prompt 1: Project Setup

```
I'm building a React Native mobile app using Expo for a home healthcare company called Happy Home Care. The app will have real-time GPS tracking, appointment management, and care documentation.

Please help me set up the project with the following:

1. Initialize a new Expo project with TypeScript
2. Install and configure these dependencies:
   - React Navigation (stack, bottom tabs, drawer)
   - Redux Toolkit for state management
   - React Query for API calls
   - Socket.io client for real-time features
   - react-native-geolocation-service for GPS
   - react-native-maps for mapping
   - Firebase Cloud Messaging for push notifications
   - AsyncStorage for local persistence

3. Set up the following folder structure:
   /src
     /components (reusable UI components)
     /screens (app screens)
     /navigation (navigation config)
     /services (API, WebSocket, GPS services)
     /store (Redux slices)
     /hooks (custom hooks)
     /utils (helper functions)
     /types (TypeScript types)
     /theme (design tokens, colors, typography)

4. Create a theme configuration with:
   - Primary color: #0066CC
   - Secondary color: #00AA66
   - Accent color: #FF6B35
   - Typography scale (heading1, heading2, body, caption)

5. Set up environment variables for:
   - API_URL
   - SOCKET_URL
   - GOOGLE_MAPS_API_KEY
   - FCM_SERVER_KEY

Provide the complete setup commands and initial configuration files.
```

### Prompt 2: Authentication System

```
Build a complete authentication system for the Happy Home Care mobile app with the following features:

1. Login Screen
   - Email and password fields
   - "Remember me" checkbox
   - "Forgot password" link
   - Social login buttons (Apple, Google) - UI only for now
   - Form validation with error messages

2. Registration Screen
   - Multi-step form:
     Step 1: Account info (email, password, confirm password)
     Step 2: Personal info (name, phone, relationship to patient)
     Step 3: Verification (email code)
   - Progress indicator
   - Back/Next navigation

3. Authentication Flow
   - JWT token storage in secure storage
   - Automatic token refresh
   - Biometric authentication (Face ID / Touch ID) after first login
   - Session timeout after 30 minutes of inactivity

4. API Integration
   - POST /auth/login
   - POST /auth/register
   - POST /auth/refresh-token
   - POST /auth/logout

5. Protected Route Wrapper
   - Check auth state before rendering screens
   - Redirect to login if unauthenticated

Include complete code with TypeScript types, error handling, and loading states.
```

### Prompt 3: Real-Time Tracking Feature

```
Implement the real-time caregiver tracking feature for the Happy Home Care app:

CAREGIVER SIDE:
1. Start Tracking Button
   - Activates GPS tracking when shift begins
   - Requests location permissions
   - Shows "Tracking Active" indicator

2. Background Location Tracking
   - Send location updates every 30 seconds while app is in foreground
   - Every 2-3 minutes in background
   - Use react-native-background-geolocation library
   - Include battery optimization

3. WebSocket Connection
   - Connect to Socket.io server on tracking start
   - Emit location updates: { caregiverId, appointmentId, location: { lat, lng, accuracy, timestamp } }
   - Handle connection errors and reconnection

4. Clock In/Out
   - Verify geofence (within 100m of patient address) before allowing clock in
   - Show distance to patient location
   - Store clock in/out time and GPS coordinates

FAMILY MEMBER SIDE:
1. Live Map View
   - Google Maps with patient home marker
   - Caregiver's live location (moving marker)
   - ETA calculation
   - "Last updated X seconds ago" indicator

2. WebSocket Listener
   - Subscribe to appointment room
   - Update map when location updates received
   - Show notification when caregiver arrives/departs

3. UI Components
   - Map view with zoom controls
   - Caregiver info card (name, photo, status)
   - "Message Caregiver" and "Call" buttons

TECHNICAL REQUIREMENTS:
- Handle offline scenarios (queue location updates)
- Optimize battery usage
- Respect user privacy (only track during active appointments)
- TypeScript interfaces for all data structures
- Error handling and user feedback

Provide complete implementation with all necessary components, hooks, and services.
```

### Prompt 4: Appointment Management

```
Create a comprehensive appointment management system for Happy Home Care:

1. APPOINTMENT LIST SCREEN
   - Calendar view with three modes: Day, Week, Month
   - Filter by: All, Scheduled, In Progress, Completed, Cancelled
   - Color-coded appointments by status:
     * Scheduled: Blue
     * In Progress: Green
     * Completed: Gray
     * Cancelled: Red
   - Pull-to-refresh
   - Infinite scroll for older appointments

2. APPOINTMENT CARD COMPONENT
   Display:
   - Date and time
   - Service type (icon + label)
   - Caregiver name and photo
   - Patient name (for caregivers/admins)
   - Status badge
   - Quick actions: View Details, Message, Navigate

3. APPOINTMENT DETAILS SCREEN
   Sections:
   - Header: Date, time, status
   - Participants: Patient and caregiver info with photos
   - Service Details: Type, duration, special instructions
   - Tasks Checklist: Interactive list with checkboxes
   - Location: Map view with address
   - Care Notes: List of timestamped notes
   - Actions: Clock In/Out, Cancel, Reschedule (based on role)

4. CREATE/EDIT APPOINTMENT SCREEN
   Form fields:
   - Patient selector (dropdown with search)
   - Caregiver selector (shows available caregivers)
   - Service type (multi-select)
   - Date and time pickers
   - Duration (preset options: 2h, 4h, 8h, 24h, custom)
   - Recurrence pattern:
     * One-time
     * Daily
     * Weekly (select days)
     * Monthly
     * Custom (RRULE editor)
   - Special instructions (text area)
   - Tasks checklist (add/remove items)

5. PUSH NOTIFICATION HANDLERS
   - 1 hour before appointment: "Upcoming appointment with [Caregiver]"
   - When caregiver arrives: "Sarah J. has arrived"
   - When appointment ends: Prompt to rate caregiver
   - On schedule change: "Your appointment has been rescheduled"

6. API INTEGRATION
   - GET /appointments (with filters, pagination)
   - POST /appointments (create new)
   - PATCH /appointments/:id (update)
   - DELETE /appointments/:id (cancel)
   - POST /appointments/:id/clock-in
   - POST /appointments/:id/clock-out

7. STATE MANAGEMENT
   - Redux slice for appointments
   - React Query for API calls with caching
   - Optimistic UI updates

Include all components, screens, types, and API service functions with proper error handling and loading states.
```

### Prompt 5: Care Documentation

```
Build the care documentation system for caregivers to log care activities:

1. CARE NOTES CREATION SCREEN
   Note Types (tabs):
   - General Observation
   - Vital Signs
   - Medication Administration
   - Meal Log
   - Activity/Exercise
   - Incident Report

2. GENERAL OBSERVATION TAB
   - Rich text editor for notes
   - Photo upload (up to 5 photos)
   - Mood assessment (emoji selector: 😊 😐 😢 😡 😨)
   - Pain level (slider 0-10)
   - Timestamp (auto-filled, editable)

3. VITAL SIGNS TAB
   Input fields:
   - Blood Pressure (systolic/diastolic)
   - Heart Rate (BPM)
   - Temperature (°F or °C)
   - Blood Glucose (mg/dL)
   - Oxygen Saturation (%)
   - Weight (lbs or kg)

   Features:
   - Visual indicators for abnormal values (red for out of range)
   - Chart view showing historical trends
   - Photo upload for device readings

4. MEDICATION TAB
   For each medication:
   - Medication name (autocomplete from patient's med list)
   - Dosage
   - Scheduled time vs Actual time
   - Patient accepted? (Yes/No/Partial)
   - Photo of medication (verification)
   - Notes (e.g., "Taken with food")

5. MEAL LOG TAB
   - Meal type (Breakfast, Lunch, Dinner, Snack)
   - Food consumed (text description)
   - Percentage eaten (slider: 0%, 25%, 50%, 75%, 100%)
   - Fluids intake (oz)
   - Photo of meal
   - Assistance level (Independent, Minimal, Moderate, Total)

6. INCIDENT REPORT TAB
   - Incident type (dropdown: Fall, Medication Error, Behavioral Issue, Other)
   - Description (required, min 50 characters)
   - Time of incident
   - Witnesses (add names)
   - Actions taken (checklist)
   - Photos/documentation
   - Severity (Minor, Moderate, Severe)
   - Auto-notification to supervisor for Moderate/Severe

7. PHOTO UPLOAD COMPONENT
   Features:
   - Camera integration (take photo)
   - Gallery picker (select from library)
   - Image preview with crop/rotate
   - Compression before upload (max 2MB per photo)
   - Progress indicator during upload
   - Watermark with: Caregiver name + Timestamp

8. CARE NOTES LIST VIEW
   - Chronological list (newest first)
   - Filter by: Note type, Date range, Caregiver
   - Expandable cards showing:
     * Timestamp
     * Note type icon
     * Preview of content (first 100 characters)
     * Thumbnail grid of photos
     * "Flagged" indicator for important notes
   - Tap to view full details

9. OFFLINE SUPPORT
   - Queue notes locally when offline
   - Auto-sync when connection restored
   - Visual indicator: "Syncing..." / "Saved to cloud"
   - Conflict resolution (server timestamp wins)

10. API ENDPOINTS
    - POST /appointments/:id/notes (create note)
    - GET /appointments/:id/notes (list notes)
    - POST /notes/:id/flag (flag as important)
    - POST /media/upload (photo upload with presigned URL)

Provide complete implementation including:
- All screen components
- Form validation with Zod schemas
- Image upload service with S3 integration
- Offline queue management
- TypeScript types for all note structures
```

### Prompt 6: Push Notifications

```
Implement a comprehensive push notification system for Happy Home Care:

1. FIREBASE CLOUD MESSAGING SETUP
   - Configure FCM for iOS and Android
   - Request notification permissions
   - Store FCM token in user profile (on login)
   - Handle token refresh

2. NOTIFICATION TYPES & PAYLOADS
   Define data structures for:

   a) Appointment Reminder (1 hour before)
   {
     type: 'appointment_reminder',
     title: 'Upcoming Appointment',
     body: 'Your appointment with Sarah J. starts in 1 hour',
     data: { appointmentId, caregiverId }
   }

   b) Caregiver Arrived
   {
     type: 'caregiver_arrived',
     title: 'Caregiver Arrived',
     body: 'Sarah J. has arrived at Mom\'s home',
     data: { appointmentId, caregiverId, timestamp }
   }

   c) Care Note Added
   {
     type: 'care_note_added',
     title: 'New Care Update',
     body: 'Sarah J. added a care note with photos',
     data: { noteId, appointmentId, noteType }
   }

   d) Schedule Change
   {
     type: 'schedule_change',
     title: 'Appointment Rescheduled',
     body: 'Your Dec 24 appointment has been moved to 2:00 PM',
     data: { appointmentId, oldTime, newTime }
   }

   e) Emergency SOS
   {
     type: 'emergency',
     title: '⚠️ EMERGENCY SOS',
     body: 'Mom has triggered an emergency alert',
     data: { patientId, location, timestamp },
     priority: 'high',
     sound: 'emergency.wav'
   }

3. FOREGROUND NOTIFICATION HANDLER
   - Display in-app banner for foreground notifications
   - Custom notification component with:
     * Icon based on notification type
     * Swipe to dismiss
     * Tap to navigate to relevant screen
   - Auto-dismiss after 5 seconds

4. BACKGROUND/QUIT STATE HANDLER
   - Handle notification taps when app is closed
   - Deep link to correct screen based on notification type
   - Update app badge count

5. NOTIFICATION ACTIONS
   For certain notification types, add action buttons:

   Appointment Reminder:
   - "View Details"
   - "Message Caregiver"

   Care Note Added:
   - "View Note"
   - "Reply"

6. NOTIFICATION CENTER SCREEN
   - List all notifications (paginated)
   - Group by date (Today, Yesterday, This Week, Older)
   - Unread count badge
   - Mark as read on tap
   - "Mark all as read" action
   - Swipe to delete
   - Filter by type

7. NOTIFICATION PREFERENCES SCREEN
   Toggle switches for:
   - Appointment reminders
   - Caregiver arrival/departure
   - Care notes
   - Schedule changes
   - Messages
   - Emergency alerts (cannot be disabled)

   Delivery method checkboxes:
   - Push notifications
   - Email
   - SMS

8. BACKEND INTEGRATION
   - POST /users/me/fcm-token (register device)
   - GET /notifications (fetch notification history)
   - PATCH /notifications/:id/read
   - PATCH /users/me/notification-preferences

9. LOCAL NOTIFICATIONS (SCHEDULED)
   - Medication reminders (if enabled)
   - Daily care summary (8 PM every day)
   - Birthday reminders for patients

Provide complete implementation with all necessary components, services, and configurations for both iOS and Android.
```

### Prompt 7: Admin Dashboard (Web)

```
Create a web-based admin dashboard using Next.js 15 for Happy Home Care coordinators and administrators:

1. DASHBOARD OVERVIEW PAGE
   Metrics cards (live data):
   - Total Active Appointments (today)
   - Caregivers on Duty
   - Pending Timesheets
   - Unread Incident Reports

   Charts:
   - Appointments by status (pie chart)
   - Care hours per day (line chart, last 30 days)
   - Caregiver utilization (bar chart)
   - Patient satisfaction scores (trend)

2. REAL-TIME MAP VIEW
   - Google Maps showing all active caregivers
   - Each marker shows caregiver photo + name
   - Click marker to see:
     * Current appointment details
     * Time since last location update
     * Patient name and address
     * "Message Caregiver" button
   - Filter by: Service type, Location, Caregiver

3. APPOINTMENT MANAGEMENT TABLE
   Columns:
   - Date/Time
   - Patient Name
   - Caregiver Name
   - Service Type
   - Status
   - Duration
   - Actions (Edit, Cancel, View Details)

   Features:
   - Server-side sorting and filtering
   - Search by patient or caregiver name
   - Bulk actions (cancel, reschedule)
   - Export to CSV
   - Color-coded rows by status

4. CAREGIVER MANAGEMENT
   List View:
   - Name, Photo, Certifications
   - Status (Available, On Duty, Off Duty)
   - Weekly hours (current week)
   - Rating (stars)
   - Actions

   Detail View:
   - Profile info (editable)
   - Certifications and expiration dates
   - Schedule (calendar view)
   - Performance metrics:
     * On-time percentage
     * Average rating
     * Total care hours (this month)
     * Incident count
   - Assignment history

5. TIMESHEET APPROVAL WORKFLOW
   Pending Timesheets Table:
   - Caregiver Name
   - Week Ending
   - Total Hours
   - Discrepancies (if clock in/out GPS mismatch)
   - Actions (Approve, Reject, Request Clarification)

   Detail View:
   - Day-by-day breakdown
   - Clock in/out times with GPS verification
   - GPS track playback (map animation)
   - Notes from caregiver
   - Approve/Reject buttons with comments

6. INCIDENT REPORTS DASHBOARD
   List of flagged incidents:
   - Date/Time
   - Patient Name
   - Incident Type
   - Severity
   - Reported By
   - Status (New, Under Review, Resolved)

   Detail Modal:
   - Full incident description
   - Photos/documentation
   - Actions taken
   - Follow-up notes
   - Mark as Reviewed/Resolved

7. MESSAGING CENTER
   - Inbox with conversations
   - Broadcast messaging to all caregivers
   - Templates for common messages
   - Conversation threads with family members

8. REPORTS & ANALYTICS
   Pre-built reports:
   - Monthly care hours by patient
   - Caregiver performance summary
   - Service type breakdown
   - Revenue forecast

   Custom report builder:
   - Select metrics
   - Choose date range
   - Apply filters
   - Export to PDF/Excel

9. USER MANAGEMENT
   - List all users (family, caregivers, admins)
   - Add/edit/deactivate users
   - Role assignment
   - Permission management
   - Activity logs

10. SETTINGS
    - Company profile
    - Service types and pricing
    - Notification templates
    - Integration settings (Twilio, FCM)
    - Backup and export

TECHNICAL REQUIREMENTS:
- Next.js 15 with App Router
- Server Components for data fetching
- React Server Actions for mutations
- Real-time updates using WebSockets
- Chart library: Recharts or Tremor
- Table component: TanStack Table (React Table)
- Authentication: NextAuth.js
- Database: Same PostgreSQL as mobile app
- Tailwind CSS for styling

Provide complete implementation with all pages, components, API routes, and database queries.
```

### Prompt 8: Testing & Quality Assurance

```
Set up a comprehensive testing strategy for the Happy Home Care mobile app:

1. UNIT TESTING SETUP
   - Configure Jest for React Native
   - Create test utilities and mocks:
     * Mock AsyncStorage
     * Mock react-native-geolocation-service
     * Mock Firebase Cloud Messaging
     * Mock Socket.io client

2. COMPONENT TESTING
   Write tests for these critical components:

   a) LoginScreen
   - Renders email and password fields
   - Shows validation errors
   - Calls login API on submit
   - Navigates to home on success
   - Displays error message on failure

   b) AppointmentCard
   - Displays appointment details correctly
   - Shows correct status badge
   - Handles tap to view details
   - Shows caregiver photo with fallback

   c) CareNoteForm
   - Validates required fields
   - Allows photo upload
   - Submits correct payload
   - Shows offline indicator when no connection

3. INTEGRATION TESTING
   Test user flows:

   a) Complete Authentication Flow
   - Login → Save token → Navigate to home → Fetch user data

   b) Create Appointment Flow
   - Select patient → Select caregiver → Choose date/time → Add tasks → Submit

   c) Clock In/Out Flow
   - Start tracking → Verify geofence → Clock in → Complete appointment → Clock out

4. E2E TESTING WITH DETOX
   Install and configure Detox for:

   Critical paths:
   - User registration and login
   - View appointment list
   - View live caregiver location
   - Create a care note with photo
   - Send a message

5. API MOCKING
   Use MSW (Mock Service Worker) for:
   - Mocking all API endpoints
   - Simulating network errors
   - Testing offline scenarios
   - Testing rate limiting

6. ACCESSIBILITY TESTING
   - Run React Native Accessibility Inspector
   - Ensure all interactive elements have labels
   - Test with TalkBack (Android) and VoiceOver (iOS)
   - Check color contrast ratios

7. PERFORMANCE TESTING
   - Measure app startup time
   - Profile render performance with Flipper
   - Test location tracking battery usage
   - Monitor memory leaks

8. LOAD TESTING
   Backend API:
   - Use k6 or Artillery
   - Simulate 1000 concurrent users
   - Test WebSocket connection scaling
   - Stress test location update endpoints

9. SECURITY TESTING
   - Static analysis with ESLint security plugin
   - Check for hardcoded secrets
   - Validate JWT implementation
   - Test API authentication bypass attempts
   - Penetration testing checklist

10. CI/CD PIPELINE
    GitHub Actions workflow:
    ```yaml
    name: Test and Deploy

    on: [push, pull_request]

    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
          - Checkout code
          - Install dependencies
          - Run linter
          - Run unit tests
          - Run integration tests
          - Generate coverage report
          - Upload to Codecov

      build:
        runs-on: macos-latest
        steps:
          - Build iOS app
          - Run E2E tests on simulator

      deploy:
        if: github.ref == 'refs/heads/main'
        steps:
          - Submit to TestFlight (internal)
          - Deploy to Google Play (internal track)
    ```

Provide complete test files, configurations, and CI/CD setup with all necessary scripts and workflows.
```

---

## Security & Compliance

### HIPAA Compliance Requirements

#### 1. Data Encryption

**At Rest:**
- Database: PostgreSQL with Transparent Data Encryption (TDE)
- File storage: S3 with AES-256 encryption
- Mobile: iOS Keychain, Android Keystore for sensitive data

**In Transit:**
- All API calls over HTTPS/TLS 1.3
- WebSocket connections over WSS (secure WebSocket)
- Certificate pinning in mobile app

**Implementation:**
```javascript
// API client with certificate pinning
import { fetch } from 'react-native-ssl-pinning';

const apiClient = {
  post: async (endpoint, data) => {
    return fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
      sslPinning: {
        certs: ['happyhomecare-cert'] // SHA-256 hash of cert
      }
    });
  }
};
```

#### 2. Access Control

**Role-Based Access Control (RBAC):**

```typescript
enum Permission {
  VIEW_PATIENT_MEDICAL = 'view:patient:medical',
  EDIT_PATIENT = 'edit:patient',
  VIEW_LOCATION = 'view:location',
  MANAGE_APPOINTMENTS = 'manage:appointments',
  APPROVE_TIMESHEETS = 'approve:timesheets',
  VIEW_AUDIT_LOGS = 'view:audit_logs'
}

const rolePermissions = {
  family: [
    Permission.VIEW_PATIENT_MEDICAL, // If explicitly granted
    Permission.VIEW_LOCATION,
    Permission.MANAGE_APPOINTMENTS
  ],
  caregiver: [
    Permission.VIEW_PATIENT_MEDICAL, // Limited fields
    Permission.MANAGE_APPOINTMENTS
  ],
  coordinator: [
    Permission.VIEW_PATIENT_MEDICAL,
    Permission.EDIT_PATIENT,
    Permission.VIEW_LOCATION,
    Permission.MANAGE_APPOINTMENTS,
    Permission.APPROVE_TIMESHEETS
  ],
  admin: Object.values(Permission) // All permissions
};
```

**Middleware:**
```typescript
const requirePermission = (permission: Permission) => {
  return (req, res, next) => {
    const userPermissions = rolePermissions[req.user.role];

    if (!userPermissions.includes(permission)) {
      return res.status(403).json({
        error: { code: 'FORBIDDEN', message: 'Insufficient permissions' }
      });
    }

    next();
  };
};

// Usage
app.get(
  '/api/v1/patients/:id/medical-info',
  authenticate,
  requirePermission(Permission.VIEW_PATIENT_MEDICAL),
  async (req, res) => { /* ... */ }
);
```

#### 3. Audit Logging

**Log all PHI access:**
```javascript
const logAudit = async (userId, action, resource, metadata = {}) => {
  await db.audit_logs.insert({
    user_id: userId,
    action,
    resource_type: resource.type,
    resource_id: resource.id,
    ip_address: req.ip,
    user_agent: req.headers['user-agent'],
    metadata,
    created_at: new Date()
  });
};

// Example usage
app.get('/api/v1/patients/:id', authenticate, async (req, res) => {
  const patient = await db.getPatient(req.params.id);

  // Log access
  await logAudit(req.user.id, 'view_patient', {
    type: 'patient',
    id: patient.id
  }, {
    fields_accessed: ['name', 'medical_conditions', 'medications']
  });

  res.json(patient);
});
```

#### 4. Data Retention & Deletion

**Retention Policies:**
- Care notes: 7 years (regulatory requirement)
- Location tracks: 90 days (auto-purge)
- Audit logs: 6 years
- User accounts: Soft delete, 30-day recovery period

**Automated Cleanup:**
```sql
-- Cron job runs daily
CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS void AS $$
BEGIN
  -- Delete old location tracks
  DELETE FROM location_tracks WHERE created_at < NOW() - INTERVAL '90 days';

  -- Anonymize deleted user accounts after 30 days
  UPDATE users
  SET email = 'deleted_' || id || '@example.com',
      phone = NULL,
      first_name = 'Deleted',
      last_name = 'User'
  WHERE is_active = false AND updated_at < NOW() - INTERVAL '30 days';
END;
$$ LANGUAGE plpgsql;
```

#### 5. Business Associate Agreement (BAA)

**Required for third-party services:**
- AWS (S3, EC2) - Requires BAA
- Twilio (SMS) - Requires BAA
- SendGrid (Email) - Requires BAA
- Firebase/Google Cloud - Enterprise plan with BAA
- Stripe (Payments) - Requires BAA for PHI handling

### Additional Security Measures

#### API Rate Limiting
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests, please try again later'
      }
    });
  }
});

app.use('/api/', limiter);
```

#### Input Validation & Sanitization
```typescript
import { z } from 'zod';

const createAppointmentSchema = z.object({
  patientId: z.string().uuid(),
  caregiverId: z.string().uuid(),
  scheduledStart: z.string().datetime(),
  scheduledEnd: z.string().datetime(),
  specialInstructions: z.string().max(1000).optional()
}).refine(data => new Date(data.scheduledEnd) > new Date(data.scheduledStart), {
  message: "End time must be after start time"
});

app.post('/api/v1/appointments', async (req, res) => {
  try {
    const validatedData = createAppointmentSchema.parse(req.body);
    // Proceed with validated data
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          details: error.errors
        }
      });
    }
  }
});
```

#### SQL Injection Prevention
```javascript
// ALWAYS use parameterized queries
const getPatient = async (patientId) => {
  // GOOD ✅
  const result = await db.query(
    'SELECT * FROM patients WHERE id = $1',
    [patientId]
  );

  // BAD ❌ (vulnerable to SQL injection)
  // const result = await db.query(
  //   `SELECT * FROM patients WHERE id = '${patientId}'`
  // );

  return result.rows[0];
};
```

---

## Testing Strategy

### Unit Testing

**Coverage Goals:**
- Overall: 80%+
- Critical paths (auth, payments): 95%+
- Utility functions: 100%

**Jest Configuration:**
```javascript
// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-navigation)/)'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx'
  ],
  coverageThresholds: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

**Example Test:**
```typescript
// __tests__/components/AppointmentCard.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppointmentCard from '@/components/AppointmentCard';

describe('AppointmentCard', () => {
  const mockAppointment = {
    id: '123',
    patient: { name: 'John Doe', photo: 'url' },
    caregiver: { name: 'Sarah J.', photo: 'url' },
    scheduledStart: '2025-12-24T09:00:00Z',
    status: 'scheduled',
    serviceType: 'Home Care'
  };

  it('renders appointment details correctly', () => {
    const { getByText } = render(
      <AppointmentCard appointment={mockAppointment} onPress={jest.fn()} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Sarah J.')).toBeTruthy();
    expect(getByText('Home Care')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <AppointmentCard appointment={mockAppointment} onPress={onPressMock} />
    );

    fireEvent.press(getByTestId('appointment-card'));
    expect(onPressMock).toHaveBeenCalledWith(mockAppointment.id);
  });
});
```

### Integration Testing

**API Integration Tests:**
```typescript
// __tests__/integration/appointments.test.ts
import request from 'supertest';
import app from '@/server';
import { setupTestDatabase, cleanupTestDatabase } from '@/test-utils';

describe('Appointments API', () => {
  let authToken: string;

  beforeAll(async () => {
    await setupTestDatabase();
    // Login and get token
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    authToken = response.body.accessToken;
  });

  afterAll(async () => {
    await cleanupTestDatabase();
  });

  it('creates a new appointment', async () => {
    const response = await request(app)
      .post('/api/v1/appointments')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        patientId: 'uuid',
        caregiverId: 'uuid',
        scheduledStart: '2025-12-24T09:00:00Z',
        scheduledEnd: '2025-12-24T17:00:00Z',
        serviceType: 'Home Care'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.status).toBe('scheduled');
  });
});
```

### E2E Testing with Detox

```javascript
// e2e/loginFlow.test.js
describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should login successfully with valid credentials', async () => {
    await element(by.id('email-input')).typeText('family@example.com');
    await element(by.id('password-input')).typeText('password123');
    await element(by.id('login-button')).tap();

    // Should navigate to home screen
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should show error with invalid credentials', async () => {
    await element(by.id('email-input')).typeText('wrong@example.com');
    await element(by.id('password-input')).typeText('wrongpass');
    await element(by.id('login-button')).tap();

    await expect(element(by.text('Invalid email or password'))).toBeVisible();
  });
});
```

---

## Deployment Guide

### iOS Deployment

**Prerequisites:**
- Apple Developer Account ($99/year)
- Xcode 15+ on macOS
- Certificates and provisioning profiles

**Steps:**

1. **Configure app.json**
```json
{
  "expo": {
    "name": "HappyHomeCare Connect",
    "slug": "happyhomecare-connect",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.happyhomecare.connect",
      "buildNumber": "1",
      "supportsTablet": true,
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "We need your location to track caregivers",
        "NSLocationAlwaysAndWhenInUseUsageDescription": "We track your location during active appointments",
        "NSCameraUsageDescription": "Take photos for care documentation",
        "NSPhotoLibraryUsageDescription": "Select photos from your library",
        "UIBackgroundModes": ["location", "fetch", "remote-notification"]
      }
    }
  }
}
```

2. **Build with EAS**
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure project
eas build:configure

# Build for iOS
eas build --platform ios --profile production
```

3. **Submit to App Store**
```bash
eas submit --platform ios
```

**App Store Metadata:**
- Screenshots (6.5", 5.5" displays)
- App icon (1024x1024)
- Description emphasizing HIPAA compliance
- Keywords: "home care", "caregiver tracking", "healthcare"
- Privacy policy URL
- Support URL

### Android Deployment

**Prerequisites:**
- Google Play Console account ($25 one-time)
- Keystore file for signing

**Steps:**

1. **Generate keystore**
```bash
keytool -genkeypair -v -storetype PKCS12 -keystore happyhomecare.keystore -alias happyhomecare -keyalg RSA -keysize 2048 -validity 10000
```

2. **Configure app.json**
```json
{
  "expo": {
    "android": {
      "package": "com.happyhomecare.connect",
      "versionCode": 1,
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION",
        "ACCESS_BACKGROUND_LOCATION",
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ],
      "googleServicesFile": "./google-services.json"
    }
  }
}
```

3. **Build with EAS**
```bash
eas build --platform android --profile production
```

4. **Submit to Google Play**
```bash
eas submit --platform android
```

**Google Play Metadata:**
- Screenshots (phone, tablet)
- Feature graphic (1024x500)
- App icon (512x512)
- Short description (80 chars)
- Full description
- Privacy policy (required for health apps)

### Backend Deployment

**Recommended: Railway.app** (simplest)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

**Environment Variables:**
```
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_SECRET=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
FCM_SERVER_KEY=...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
```

**Alternative: AWS Deployment**

Using AWS Elastic Beanstalk:
```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init -p node.js-20 happyhomecare-api

# Create environment
eb create production-env

# Deploy
eb deploy
```

### Database Migration

**Run migrations on deploy:**
```bash
# Using node-pg-migrate
npm run migrate up

# Or using Prisma
npx prisma migrate deploy
```

### Monitoring Setup

**Sentry for error tracking:**
```javascript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://...@sentry.io/...',
  tracesSampleRate: 0.1,
  enableAutoSessionTracking: true,
  environment: __DEV__ ? 'development' : 'production'
});
```

**DataDog for performance:**
```javascript
import { DdSdkReactNative } from '@datadog/mobile-react-native';

DdSdkReactNative.initialize({
  clientToken: '...',
  env: 'production',
  applicationId: '...',
  trackInteractions: true,
  trackResources: true
});
```

### Over-the-Air Updates

**Using Expo Updates:**
```bash
# Publish update
eas update --branch production --message "Bug fixes"

# Update automatically downloads on app launch
```

---

## Appendix

### Technology Comparison

#### Mobile Framework Comparison

| Feature | React Native | Flutter | Native (Swift/Kotlin) |
|---------|-------------|---------|----------------------|
| Learning Curve | Medium | Medium | High |
| Performance | Good | Excellent | Excellent |
| Code Sharing | 95% | 100% | 0% |
| Community | Large | Growing | Massive |
| Hot Reload | Yes | Yes | Limited |
| Native Modules | Easy | Moderate | N/A |
| App Size | ~20MB | ~15MB | ~10MB |
| **Recommendation** | ✅ Best for JS teams | Good alternative | Overkill for MVP |

#### Backend Framework Comparison

| Feature | Node.js/Express | Python/Django | Ruby on Rails |
|---------|----------------|---------------|---------------|
| Real-time Support | Excellent (Socket.io) | Moderate | Moderate |
| Learning Curve | Low | Medium | Medium |
| Performance | Excellent | Good | Good |
| Ecosystem | Massive | Large | Large |
| **Recommendation** | ✅ Best for real-time | Good for data science | Good for rapid dev |

### Estimated Costs

**Development (8-10 weeks MVP):**
- 2 Mobile Developers: $80-120k
- 1 Backend Developer: $60-80k
- 1 Designer: $30-40k
- 1 QA Engineer: $30-40k
- **Total: $200-280k**

**Ongoing Monthly Costs:**
- Hosting (AWS/Railway): $200-500
- Database (PostgreSQL): $100-300
- Firebase (FCM): $0-100
- Google Maps API: $200-400
- Twilio (SMS): $100-300
- Sentry: $50
- **Total: $650-1,650/month**

**Per-User Costs (at scale):**
- Storage (photos): ~$0.02/user/month
- Push notifications: ~$0.005/user/month
- SMS notifications: ~$0.50/user/month (if enabled)

### Glossary

- **ETA:** Estimated Time of Arrival
- **FCM:** Firebase Cloud Messaging
- **GPS:** Global Positioning System
- **HIPAA:** Health Insurance Portability and Accountability Act
- **JWT:** JSON Web Token
- **MAR:** Medication Administration Record
- **MVP:** Minimum Viable Product
- **OTA:** Over-the-Air (updates)
- **PHI:** Protected Health Information
- **RBAC:** Role-Based Access Control
- **RRULE:** Recurrence Rule (RFC 5545)
- **WebSocket:** Protocol for real-time bidirectional communication

### Additional Resources

**Documentation:**
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [PostgreSQL PostGIS](https://postgis.net/documentation/)
- [Socket.io Docs](https://socket.io/docs/v4/)

**Community:**
- [React Native Community Discord](https://discord.gg/react-native)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

**HIPAA Compliance:**
- [HHS HIPAA Guidance](https://www.hhs.gov/hipaa/index.html)
- [HIPAA for Developers](https://www.hipaajournal.com/hipaa-compliance-developers/)

---

**End of Document**

*For questions or clarification, contact: development@happyhomecare.com*
