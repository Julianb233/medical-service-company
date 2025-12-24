# Mobile App Mockups - Caregiver Tracking App

High-fidelity React component mockups of the Happy Home Care mobile application, designed for use on the Coming Soon page and marketing materials.

## Components

### 1. HomeDashboard
**Purpose:** Main app hub showing upcoming appointments and quick actions

**Features:**
- Personalized greeting with patient name
- Quick stats cards (Next Visit, Health Score, Weekly Visits)
- Today's appointment list with caregiver info and status
- Quick action buttons for scheduling and health records
- Bottom navigation bar

**Design Elements:**
- Teal gradient header with floating orbs
- Status badges (En Route, Scheduled)
- iPhone-style status bar and navigation

---

### 2. CaregiverTracking
**Purpose:** Real-time location tracking of caregiver en route to appointment

**Features:**
- Interactive map view with stylized roads
- Animated caregiver location pin with pulsing effect
- ETA countdown banner
- Caregiver profile card with live status
- Call and Message action buttons
- Journey timeline showing trip progress

**Design Elements:**
- Simulated map with gradient background
- Dashed route line from caregiver to destination
- Orange accent for active tracking elements
- Live status indicators with animations

---

### 3. AppointmentDetails
**Purpose:** Complete information about an upcoming or current appointment

**Features:**
- Caregiver profile with ratings
- Visit time, location, and recurrence info
- Today's care plan checklist
- Medication reminders with dosage and timing
- Special care notes
- Quick access to tracking and contact

**Design Elements:**
- Teal gradient header
- Organized info cards with icons
- Medication alerts in orange highlight
- Checkmark progress indicators

---

### 4. FamilyUpdates
**Purpose:** Social feed showing care activities shared with family members

**Features:**
- Today's health summary dashboard
- Photo sharing from visits
- Vital signs tracking (BP, heart rate, temperature, O2)
- Activity updates (walks, exercises)
- Medication completion confirmations
- Family member comments and likes
- Care notes from caregivers

**Design Elements:**
- Instagram-style feed layout
- Photo grids for visit documentation
- Color-coded update types (vitals=teal, activity=orange, notes=blue)
- Interaction buttons (likes, comments)

---

### 5. CareHistory
**Purpose:** Comprehensive timeline of past care visits and health metrics

**Features:**
- 30-day health metrics summary with trends
- Blood pressure trend chart visualization
- Chronological visit timeline (Today, Yesterday, Last Week)
- Visit statistics and caregiver information
- Doctor notes integration
- Filter and search capabilities

**Design Elements:**
- Gradient metric cards with trend indicators
- Mini chart visualization for BP trends
- Collapsible timeline sections
- Doctor notes highlighted in blue

---

## Usage

### Individual Components

```tsx
import { HomeDashboard } from '@/components/app-mockups';

export default function MyPage() {
  return <HomeDashboard />;
}
```

### Complete Showcase (Recommended for Coming Soon Page)

```tsx
import { AppMockupsShowcase } from '@/components/app-mockups';

export default function ComingSoonPage() {
  return (
    <div>
      <h1>Coming Soon</h1>
      <AppMockupsShowcase />
    </div>
  );
}
```

The `AppMockupsShowcase` component includes:
- Carousel navigation (left/right arrows)
- Dot indicators for each screen
- Screen titles and descriptions
- Feature highlights grid
- Responsive design for mobile/desktop

---

## Design System

### Brand Colors (from Happy Home Care)

**Primary Teal:**
- `--color-teal-500: #007486` (Primary brand)
- `--color-teal-600: #005c6b` (Dark variant)
- Used for: Headers, primary buttons, active states, trust elements

**Accent Orange:**
- `--color-orange-500: #eb981c` (Primary accent)
- `--color-orange-600: #d4860a` (Dark variant)
- Used for: CTAs, alerts, live tracking, energy/action elements

**Semantic Colors:**
- Success: Green (`#10b981`)
- Warning: Yellow (`#f59e0b`)
- Error: Red (`#ef4444`)
- Info: Blue (`#3b82f6`)

### Typography
- Headlines: Bold, 2xl-4xl
- Body: Regular, sm-base
- Labels: Semibold, xs-sm
- Font: System default (inherits from parent)

### Spacing
- Card padding: 4-5 (16-20px)
- Section gaps: 3-4 (12-16px)
- Icon sizes: 4-6 (16-24px)

### Effects
- Rounded corners: 2xl (16px) for cards, full for circles
- Shadows: md for elevated cards, 2xl for modals
- Gradients: from-to-br for depth
- Animations: Pulse for live indicators, smooth transitions

---

## iPhone Mockup Specifications

**Dimensions:**
- Width: 375px
- Height: 812px (iPhone X/11/12 size)
- Border radius: 3rem (48px)
- Border: 8px gray-900

**Status Bar:**
- Height: 44px (11 x 4px base)
- Clock: 9:41 (Apple standard)
- Notch: 24px x 96px rounded pill
- Icons: Signal, WiFi, Battery

**Safe Areas:**
- Top: 44px (status bar) + padding
- Bottom: 32px (navigation) + home indicator

---

## Accessibility Features

- High contrast ratios (WCAG AA compliant)
- Large touch targets (44x44px minimum)
- Clear visual hierarchy
- Readable font sizes (minimum 12px)
- Color-blind friendly palette
- Semantic HTML structure

---

## File Structure

```
components/app-mockups/
├── HomeDashboard.tsx           # Main dashboard screen
├── CaregiverTracking.tsx       # Live tracking screen
├── AppointmentDetails.tsx      # Appointment info screen
├── FamilyUpdates.tsx           # Social feed screen
├── CareHistory.tsx             # Timeline and metrics screen
├── AppMockupsShowcase.tsx      # Carousel showcase component
├── index.ts                    # Barrel exports
└── README.md                   # This file
```

---

## Technical Notes

- **Framework:** React with TypeScript
- **Icons:** Lucide React (Tree-shakeable)
- **Styling:** Tailwind CSS utility classes
- **Animations:** CSS transitions and keyframes
- **State:** Local component state (useState)
- **Performance:** Optimized with proper React patterns

---

## Future Enhancements

Potential additions for v2:
- [ ] Add swipe gestures for mobile navigation
- [ ] Implement Framer Motion for smoother transitions
- [ ] Create dark mode variants
- [ ] Add interactive elements (clickable buttons with actions)
- [ ] Include haptic feedback indicators
- [ ] Add accessibility props (ARIA labels)
- [ ] Create tablet/desktop responsive variants
- [ ] Add screenshot export functionality

---

## Credits

**Design System:** Happy Home Care Brand Guidelines
**Created:** December 2025
**Purpose:** Marketing and Coming Soon page mockups
**Platform:** Web (React/Next.js)

For questions or modifications, refer to the Happy Home Care brand guidelines and design system documentation.
