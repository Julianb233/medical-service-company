# HappyHomeCare Connect - Caregiver Tracking App Implementation Guide

## Overview

This guide provides step-by-step instructions for building the HappyHomeCare Connect mobile app and backend infrastructure. The app enables families to track their caregivers in real-time, receive automated notifications, and stay connected with healthcare providers.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│  React Native App     │  Family Web Portal    │  Caregiver App  │
│  (iOS/Android)        │  (Next.js)            │  (React Native) │
└──────────┬────────────┴──────────┬────────────┴────────┬────────┘
           │                       │                     │
           ▼                       ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API GATEWAY                               │
│                    (Next.js API Routes / Express)                │
└──────────┬──────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND SERVICES                            │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  Auth Service   │  Location       │  Notification Service       │
│  (NextAuth/     │  Tracking       │  (Push Notifications)       │
│   Clerk)        │  Service        │                             │
├─────────────────┼─────────────────┼─────────────────────────────┤
│  Appointment    │  Family         │  Healthcare Provider        │
│  Service        │  Sharing        │  Integration                │
│                 │  Service        │                             │
└─────────────────┴─────────────────┴─────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  PostgreSQL     │  Redis          │  S3/Cloudflare R2           │
│  (Primary DB)   │  (Cache/        │  (File Storage)             │
│                 │   Real-time)    │                             │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

---

## Tech Stack Recommendations

### Mobile App (React Native / Expo)
- **Framework**: Expo SDK 50+
- **Navigation**: React Navigation 6
- **State Management**: Zustand or TanStack Query
- **Maps**: React Native Maps
- **Push Notifications**: Expo Notifications
- **Real-time**: Socket.io or Pusher

### Backend (Next.js)
- **Framework**: Next.js 14 App Router
- **API**: Next.js API Routes or tRPC
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js or Clerk
- **Real-time**: Socket.io or Pusher
- **Hosting**: Vercel or Railway

### Infrastructure
- **Database**: Supabase, PlanetScale, or Neon
- **Cache**: Upstash Redis
- **Storage**: Cloudflare R2 or AWS S3
- **Push**: Firebase Cloud Messaging / OneSignal
- **Maps**: Google Maps Platform or Mapbox

---

## Phase 1: Database Schema & Backend Setup

### Prompt for Claude:

```
Create a PostgreSQL database schema using Prisma for a caregiver tracking app with these entities:

1. Users table:
   - id, email, password_hash, role (FAMILY, CAREGIVER, ADMIN)
   - name, phone, avatar_url, created_at, updated_at

2. Patients table:
   - id, name, address, phone, emergency_contact
   - medical_notes, created_at, updated_at
   - linked to a primary family member (user)

3. Caregivers table (extends Users):
   - user_id, license_number, certifications
   - rating, total_visits, active status
   - current_location_lat, current_location_lng
   - location_updated_at

4. Appointments table:
   - id, patient_id, caregiver_id
   - scheduled_start, scheduled_end
   - actual_start, actual_end
   - status (SCHEDULED, EN_ROUTE, IN_PROGRESS, COMPLETED, CANCELED)
   - notes, created_at

5. FamilyMembers table:
   - id, patient_id, user_id
   - relationship, notification_preferences (JSON)
   - can_view_medical_notes boolean

6. VisitNotes table:
   - id, appointment_id, caregiver_id
   - vitals_recorded (JSON), medications_given (JSON)
   - activities, notes, created_at

7. Notifications table:
   - id, user_id, type, title, message
   - data (JSON), read boolean, created_at

Create the Prisma schema with proper relations, indexes, and enums.
```

### Prompt for API Routes:

```
Create Next.js 14 API routes for a caregiver tracking app with the following endpoints:

Authentication:
- POST /api/auth/register - Register new user (family or caregiver)
- POST /api/auth/login - Login with email/password
- GET /api/auth/me - Get current user

Appointments:
- GET /api/appointments - List appointments (filter by date, status)
- GET /api/appointments/:id - Get appointment details
- POST /api/appointments - Create new appointment
- PATCH /api/appointments/:id/status - Update appointment status
- POST /api/appointments/:id/checkin - Caregiver check-in (starts visit)
- POST /api/appointments/:id/checkout - Caregiver check-out (ends visit)

Location Tracking:
- POST /api/location/update - Update caregiver location (lat, lng)
- GET /api/location/caregiver/:id - Get caregiver's current location
- GET /api/location/eta/:appointmentId - Calculate ETA to patient

Family:
- GET /api/family/updates - Get activity feed for family
- POST /api/family/members - Add family member to patient
- PATCH /api/family/members/:id/preferences - Update notification prefs

Visit Notes:
- POST /api/visits/:appointmentId/notes - Add visit notes
- GET /api/visits/:appointmentId/notes - Get visit notes

Use Prisma for database access, add proper authentication middleware,
and include input validation with Zod.
```

---

## Phase 2: Real-Time Location Tracking

### Prompt for Real-Time Service:

```
Create a real-time location tracking service for a caregiver app using Socket.io and Redis:

Requirements:
1. Socket.io server that:
   - Authenticates connections via JWT
   - Creates rooms for each active appointment
   - Broadcasts caregiver location updates to family members
   - Sends ETA updates every 30 seconds when caregiver is en route

2. Location update handler that:
   - Receives lat/lng from caregiver app every 10 seconds
   - Stores in Redis for quick access
   - Calculates ETA using Google Maps Distance Matrix API
   - Broadcasts to appointment room
   - Triggers notifications at key moments (5 min away, arrived)

3. Redis cache structure:
   - caregiver:{id}:location - Current location
   - appointment:{id}:eta - Current ETA
   - appointment:{id}:subscribers - Family member socket IDs

4. Event types:
   - caregiver:location - Location update
   - caregiver:eta - ETA update
   - appointment:status - Status change
   - notification:new - New notification

Include reconnection handling, error logging, and rate limiting.
```

---

## Phase 3: Push Notifications

### Prompt for Notification System:

```
Create a push notification system for a caregiver tracking app:

Requirements:
1. Notification service that:
   - Integrates with Firebase Cloud Messaging (FCM)
   - Supports both iOS and Android
   - Handles notification preferences per family member
   - Queues notifications with retry logic

2. Notification types and triggers:
   - CAREGIVER_EN_ROUTE: When caregiver starts traveling
   - CAREGIVER_NEARBY: When caregiver is 5 minutes away
   - CAREGIVER_ARRIVED: When caregiver checks in
   - VISIT_STARTED: When visit begins
   - VISIT_COMPLETED: When visit ends with summary
   - MEDICATION_REMINDER: Scheduled medication alerts
   - VISIT_NOTES_ADDED: When caregiver adds notes
   - APPOINTMENT_REMINDER: 1 hour before appointment
   - APPOINTMENT_CANCELED: If appointment is canceled

3. Notification templates with personalization:
   - Include caregiver name, patient name, times
   - Deep links to relevant app screens
   - Rich notifications with images when appropriate

4. Preference handling:
   - Allow users to toggle each notification type
   - Support quiet hours
   - Handle "summary only" preference (batch notifications)

Use a job queue (Bull/BullMQ with Redis) for reliable delivery.
```

---

## Phase 4: React Native Mobile App

### Prompt for App Structure:

```
Create a React Native (Expo) caregiver tracking app with these screens:

Navigation Structure:
- Auth Stack: Login, Register, ForgotPassword
- Main Tabs:
  - Home: Dashboard with current/upcoming appointments
  - Track: Real-time caregiver tracking map
  - History: Past visit history with notes
  - Profile: Settings and preferences

1. Home Screen:
   - Header with greeting and notification bell
   - Current appointment card with:
     - Caregiver photo, name, specialty
     - Status badge (En Route, In Progress, etc.)
     - ETA countdown when en route
     - Quick actions: Call, Message, Report Issue
   - Upcoming appointments list
   - Recent activity feed

2. Track Screen:
   - Full-screen map with:
     - Patient's home marker
     - Caregiver's live location marker
     - Route line with animation
   - Bottom sheet with:
     - Caregiver info card
     - ETA and distance
     - Call/Message buttons
   - Status updates overlay

3. History Screen:
   - Calendar month picker
   - Visit cards showing:
     - Date, time, caregiver
     - Status (completed/canceled)
     - "View Notes" button
   - Statistics summary at top
   - Filter by caregiver option

4. Profile Screen:
   - User info and avatar
   - Family members list with roles
   - Notification preferences toggles
   - App settings
   - Logout button

Use React Navigation, styled-components or NativeWind,
TanStack Query for data fetching, and Zustand for global state.
```

### Prompt for Map Component:

```
Create a React Native map component for real-time caregiver tracking:

Requirements:
1. MapView component using react-native-maps with:
   - Custom markers for caregiver and patient home
   - Animated caregiver marker that smoothly moves
   - Route polyline from caregiver to patient
   - Auto-fit to show both markers

2. Real-time updates via Socket.io:
   - Connect to location tracking websocket
   - Update caregiver marker on location events
   - Update ETA display on eta events
   - Handle connection/disconnection gracefully

3. Custom caregiver marker:
   - Circular avatar with caregiver photo
   - Pulsing animation when moving
   - Direction indicator arrow
   - Speed/status indicator

4. Bottom info sheet:
   - Caregiver photo, name, rating
   - ETA in large text with countdown
   - Distance remaining
   - "Call" and "Message" action buttons
   - Appointment status badge

5. Status notifications:
   - Toast when caregiver starts traveling
   - Toast when 5 minutes away
   - Full-screen celebration when arrived

Include error states, loading states, and offline handling.
```

---

## Phase 5: Healthcare Provider Integration

### Prompt for Provider Portal:

```
Create a healthcare provider integration for the caregiver app:

Requirements:
1. Provider portal (web) with:
   - Dashboard showing active patients
   - View patient care summaries
   - Review visit notes and vitals
   - Send care plan updates

2. Care plan synchronization:
   - FHIR-compatible data format option
   - Scheduled care tasks integration
   - Medication schedule sync
   - Vital signs expected ranges

3. Notification integration:
   - Alert providers on concerning vitals
   - Send daily/weekly summaries
   - Flag missed medications
   - Emergency escalation path

4. Privacy and compliance:
   - HIPAA-compliant data handling
   - Audit logs for data access
   - Consent management
   - Data encryption at rest and transit

Design API endpoints for:
- GET /api/provider/patients - List assigned patients
- GET /api/provider/patients/:id/visits - Patient visit history
- POST /api/provider/care-plans - Create/update care plan
- GET /api/provider/alerts - View clinical alerts
```

---

## Phase 6: Deployment & DevOps

### Prompt for Infrastructure:

```
Create infrastructure configuration for the caregiver tracking app:

1. Docker Compose for local development:
   - Next.js app container
   - PostgreSQL database
   - Redis cache
   - Nginx reverse proxy

2. Vercel deployment config:
   - Production environment variables
   - Edge function for location updates
   - Cron jobs for notifications
   - Preview deployments for PRs

3. Database migrations strategy:
   - Prisma migration scripts
   - Seed data for development
   - Production migration workflow

4. Monitoring setup:
   - Error tracking with Sentry
   - Performance monitoring
   - Custom metrics for:
     - Location update latency
     - Notification delivery rate
     - API response times
   - Uptime monitoring

5. CI/CD pipeline (GitHub Actions):
   - Lint and type check
   - Run tests
   - Build mobile apps
   - Deploy to staging/production
   - Notify on failures

Include security best practices, backup strategy, and scaling considerations.
```

---

## Database Seed Data

```typescript
// prisma/seed.ts example structure
const seedData = {
  caregivers: [
    {
      name: "Sarah Martinez",
      specialty: "Registered Nurse",
      rating: 4.9,
      totalVisits: 127,
      avatar: "/images/caregivers/sarah.jpg"
    },
    {
      name: "Michael Chen",
      specialty: "Physical Therapist",
      rating: 4.8,
      totalVisits: 89,
      avatar: "/images/caregivers/michael.jpg"
    }
  ],
  appointmentStatuses: [
    "SCHEDULED",
    "EN_ROUTE",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELED"
  ],
  notificationTypes: [
    "CAREGIVER_EN_ROUTE",
    "CAREGIVER_NEARBY",
    "CAREGIVER_ARRIVED",
    "VISIT_COMPLETED",
    "MEDICATION_REMINDER"
  ]
};
```

---

## Security Considerations

1. **Authentication**
   - JWT tokens with short expiry
   - Refresh token rotation
   - Biometric auth on mobile

2. **Data Protection**
   - Encrypt sensitive fields (medical notes)
   - TLS everywhere
   - Regular security audits

3. **Location Privacy**
   - Only share location during active appointments
   - Auto-stop tracking after checkout
   - Family-only access control

4. **HIPAA Compliance**
   - Access logging
   - Data retention policies
   - Business Associate Agreements

---

## Estimated Timeline

| Phase | Description | Duration |
|-------|-------------|----------|
| 1 | Database & API Setup | 2 weeks |
| 2 | Real-time Location | 1 week |
| 3 | Push Notifications | 1 week |
| 4 | Mobile App (MVP) | 3 weeks |
| 5 | Healthcare Integration | 2 weeks |
| 6 | Testing & Polish | 2 weeks |
| 7 | Deployment & Launch | 1 week |

**Total: ~12 weeks for MVP**

---

## Quick Start Commands

```bash
# Clone and setup
git clone <repo>
cd happyhomecare-connect
npm install

# Setup database
npx prisma migrate dev
npx prisma db seed

# Run development
npm run dev

# Run mobile app
cd mobile
npx expo start
```

---

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Socket.io Docs](https://socket.io/docs/v4/)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [Google Maps Platform](https://developers.google.com/maps)
- [HIPAA Compliance Guide](https://www.hhs.gov/hipaa/index.html)

---

*This implementation guide was generated for HappyHomeCare Connect. For questions or customization, contact the development team.*
