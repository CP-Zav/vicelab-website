# VICELAB_MASTER — Airtable Schema Specification

**Base name:** `VICELAB_MASTER`  
**Version:** 1.0.0 — MVP  
**Architecture:** Control Tower UI → /api/execute → Make.com → Claude → Airtable  
**Branch:** claude/airtable-master-schema-j4rG5  

---

## Naming Convention

| Element | Convention | Example |
|---|---|---|
| Base | SCREAMING_SNAKE | `VICELAB_MASTER` |
| Table | SCREAMING_SNAKE | `LEADS`, `TASKS` |
| Field | Title Case | `Lead Name`, `Task Status` |
| Single Select options | Title Case | `Active`, `Pending`, `Done` |
| Linked field label | `→ TableName` prefix | `→ Lead`, `→ Task` |
| Auto-timestamp fields | `Created At`, `Updated At` | autonumber-style |
| Payload / AI fields | suffix ` (raw)` or ` (AI)` | `Payload (raw)`, `Output (AI)` |
| IDs passed from Make | prefix `ext_` | `ext_request_id` |

Rules:
- No abbreviations in field names unless universally known (ID, URL, AI)
- No spaces in table names
- Status fields always use Single Select — never free text
- Date/time fields always store UTC

---

## Table 1 — LEADS

**Purpose:** Source of truth for every person, brand, business, or opportunity the system touches. OUTREACH_LOG and TASKS link back here.

### Minimum Viable Fields

| Field | Type | Notes |
|---|---|---|
| Lead Name | Single line text | Primary field. Full name or company name |
| Type | Single Select | `Person`, `Brand`, `Business`, `Opportunity` |
| Status | Single Select | `New`, `Active`, `Contacted`, `Replied`, `Converted`, `Dead` |
| Email | Email | Primary contact email |
| Created At | Created time | Auto |

### Expanded Fields

| Field | Type | Notes |
|---|---|---|
| Lead Name | Single line text | Primary field |
| Type | Single Select | `Person`, `Brand`, `Business`, `Opportunity` |
| Status | Single Select | `New`, `Active`, `Contacted`, `Replied`, `Converted`, `Dead` |
| Email | Email | Primary contact |
| Phone | Phone number | Optional |
| Instagram Handle | Single line text | Without @ |
| Platform | Single Select | `Instagram`, `LinkedIn`, `Email`, `TikTok`, `Twitter/X`, `Other` |
| Source | Single Select | `Manual`, `Control Tower`, `Imported`, `Referral` |
| Notes | Long text | Human notes |
| → Tasks | Link to TASKS | All tasks involving this lead |
| → Outreach Log | Link to OUTREACH_LOG | All outreach sent to this lead |
| Last Contacted At | Date | Manual or auto from OUTREACH_LOG |
| Priority | Single Select | `High`, `Medium`, `Low` |
| Tags | Multiple select | `Partnership`, `Collab`, `Press`, `Sponsor`, `Supplier` |
| Created At | Created time | Auto |
| Updated At | Last modified time | Auto |

### Status Field Logic

```
New           → Lead entered, no contact attempted
Active        → Being actively worked / in conversation
Contacted     → At least one outreach sent, no reply yet
Replied       → Reply received (any channel)
Converted     → Deal closed / objective achieved
Dead          → No further action
```

### Example Records

```
| Lead Name       | Type     | Status    | Email                  | Platform  |
|-----------------|----------|-----------|------------------------|-----------|
| Jordan Flux     | Person   | Contacted | jordan@fluxcreative.co | Instagram |
| Pulse Records   | Brand    | Active    | bookings@pulse.com     | Email     |
| Nova Festival   | Business | New       | —                      | Instagram |
```

### Validation Notes
- Email is not required (some leads are Instagram-only)
- Lead Name is required — Make.com must always provide this
- Status defaults to `New` on creation
- Do not duplicate leads — Make.com should check email or handle before creating

---

## Table 2 — TASKS

**Purpose:** Central execution ledger. Every command sent from Control Tower creates one TASKS record. This is the source of truth for job state, AI output, and audit trail.

### Minimum Viable Fields

| Field | Type | Notes |
|---|---|---|
| Task ID | Single line text | Primary field — `ext_request_id` from Make |
| Action Type | Single Select | `OUTREACH_SEND`, `CONTENT_GENERATE`, `TASK_CREATE`, `LEAD_UPDATE`, `STATUS_CHECK` |
| Status | Single Select | `Pending`, `Running`, `Complete`, `Failed`, `Skipped` |
| Payload (raw) | Long text | Full JSON payload from /api/execute |
| Output (AI) | Long text | Claude response or processed output |
| Created At | Created time | Auto |

### Expanded Fields

| Field | Type | Notes |
|---|---|---|
| Task ID | Single line text | Primary field. Set by Make from `ext_request_id` |
| Action Type | Single Select | `OUTREACH_SEND`, `CONTENT_GENERATE`, `TASK_CREATE`, `LEAD_UPDATE`, `STATUS_CHECK` |
| Status | Single Select | `Pending`, `Running`, `Complete`, `Failed`, `Skipped` |
| Payload (raw) | Long text | Raw JSON from Control Tower — never mutate |
| Output (AI) | Long text | Claude-generated content or structured response |
| Error Message | Long text | Populated only on `Failed` status |
| → Lead | Link to LEADS | Related lead if action_type is OUTREACH_SEND or LEAD_UPDATE |
| → Outreach Log | Link to OUTREACH_LOG | Created outreach record if applicable |
| → Content Queue | Link to CONTENT_QUEUE | Created content record if applicable |
| Source | Single Select | `Control Tower`, `Make Automation`, `Manual` |
| Triggered By | Single line text | User or system identifier |
| Response Time (ms) | Number | End-to-end duration |
| Retry Count | Number | 0 default; increments on retry |
| Created At | Created time | Auto |
| Completed At | Date | Populated by Make when status → Complete or Failed |

### Status Field Logic

```
Pending       → Task received by Make, not yet processed
Running       → Claude is processing / Make module executing
Complete      → Output produced, stored in Output (AI)
Failed        → Error occurred — see Error Message
Skipped       → Intentionally bypassed (duplicate, gated, etc.)
```

### Action Type to Airtable Table Mapping

| Action Type | Primary Table | Secondary Write |
|---|---|---|
| OUTREACH_SEND | TASKS | OUTREACH_LOG (create) |
| CONTENT_GENERATE | TASKS | CONTENT_QUEUE (create) |
| TASK_CREATE | TASKS | — |
| LEAD_UPDATE | TASKS | LEADS (update record) |
| STATUS_CHECK | TASKS (read-only) | — |

### Example Records

```
| Task ID           | Action Type      | Status   | Payload (raw)              |
|-------------------|------------------|----------|----------------------------|
| req_abc123        | OUTREACH_SEND    | Complete | {"lead_id":"recXXX",...}   |
| req_def456        | CONTENT_GENERATE | Running  | {"topic":"festival kit",...}|
| req_ghi789        | LEAD_UPDATE      | Complete | {"email":"new@email.com"}  |
```

### Validation Notes
- Task ID must be unique — Make must check before creating
- Payload (raw) must be written first, then status updated
- Output (AI) must only be written when Status = Complete
- Error Message must be written when Status = Failed
- Control Tower reads Status + Output (AI) for display

---

## Table 3 — OUTREACH_LOG

**Purpose:** Immutable append-only log of every outreach attempt. One record per message sent. Never update — only create new records for follow-ups.

### Minimum Viable Fields

| Field | Type | Notes |
|---|---|---|
| Log ID | Auto number | Primary field |
| → Lead | Link to LEADS | Required — who was contacted |
| → Task | Link to TASKS | The task that triggered this outreach |
| Channel | Single Select | `Email`, `Instagram DM`, `LinkedIn`, `SMS`, `Other` |
| Message (sent) | Long text | Exact message body sent |
| Send Status | Single Select | `Queued`, `Sent`, `Failed`, `Bounced` |
| Sent At | Date | UTC timestamp |

### Expanded Fields

| Field | Type | Notes |
|---|---|---|
| Log ID | Auto number | Primary field |
| → Lead | Link to LEADS | Required |
| → Task | Link to TASKS | The triggering task |
| Channel | Single Select | `Email`, `Instagram DM`, `LinkedIn`, `SMS`, `Other` |
| Recipient Email | Email | Snapshot at send time — do not rely on LEADS |
| Recipient Handle | Single line text | Platform handle at send time |
| Subject | Single line text | Email subject or DM opener |
| Message (sent) | Long text | Full message body |
| Message (AI) | Long text | Claude-generated draft before send |
| Send Status | Single Select | `Queued`, `Sent`, `Failed`, `Bounced` |
| Reply Status | Single Select | `No Reply`, `Replied`, `Positive`, `Negative`, `Unsubscribed` |
| Follow-up Required | Checkbox | True = needs a follow-up |
| Follow-up Due | Date | When to follow up |
| Sent At | Date | UTC — populated by Make |
| Reply Received At | Date | UTC — populated manually or by Make |
| Notes | Long text | Human notes on the thread |

### Status Field Logic — Send Status

```
Queued        → In Make queue, not yet sent
Sent          → Delivery confirmed by sending platform
Failed        → Send attempt failed — check error
Bounced       → Delivered to server, rejected by recipient inbox
```

### Status Field Logic — Reply Status

```
No Reply      → Default on creation
Replied       → Any reply received (neutral)
Positive      → Positive / interested reply
Negative      → Declined or negative reply
Unsubscribed  → Opt-out received
```

### Example Records

```
| Log ID | Lead          | Channel      | Send Status | Reply Status | Follow-up Required |
|--------|---------------|--------------|-------------|--------------|-------------------|
| 1      | Jordan Flux   | Instagram DM | Sent        | No Reply     | ✓                 |
| 2      | Pulse Records | Email        | Sent        | Positive     | —                 |
| 3      | Nova Festival | Email        | Failed      | No Reply     | ✓                 |
```

### Validation Notes (OUTREACH_SEND checklist)

- [ ] `→ Lead` must be linked before record is created
- [ ] `→ Task` must be linked before record is created
- [ ] `Channel` must be set — no null values
- [ ] `Recipient Email` or `Recipient Handle` must be populated (at least one)
- [ ] `Message (sent)` must be non-empty
- [ ] `Send Status` must default to `Queued` on creation
- [ ] `Reply Status` must default to `No Reply` on creation
- [ ] `Sent At` must be set when `Send Status` → `Sent`
- [ ] `Follow-up Required` defaults to `false`
- [ ] Never update an existing record — create a new one for follow-ups

---

## Table 4 — CONTENT_QUEUE

**Purpose:** Tracks every piece of generated content from ideation through publishing. Written to by CONTENT_GENERATE tasks. Read by Control Tower and manual review.

### Minimum Viable Fields

| Field | Type | Notes |
|---|---|---|
| Content Title | Single line text | Primary field — brief descriptor |
| Content Type | Single Select | `Caption`, `Script`, `Idea`, `Blog`, `Email`, `Thread`, `Other` |
| Status | Single Select | `Draft`, `Review`, `Approved`, `Scheduled`, `Published`, `Rejected` |
| Body (AI) | Long text | Claude-generated content |
| → Task | Link to TASKS | The task that generated this |
| Created At | Created time | Auto |

### Expanded Fields

| Field | Type | Notes |
|---|---|---|
| Content Title | Single line text | Primary field |
| Content Type | Single Select | `Caption`, `Script`, `Idea`, `Blog`, `Email`, `Thread`, `Other` |
| Status | Single Select | `Draft`, `Review`, `Approved`, `Scheduled`, `Published`, `Rejected` |
| Body (AI) | Long text | Raw Claude output — never auto-overwrite |
| Body (edited) | Long text | Human-edited version — separate from AI output |
| Brand Pillar | Single Select | `Safety`, `Community`, `Education`, `Culture`, `Product`, `Internal` |
| Platform | Single Select | `Instagram`, `TikTok`, `LinkedIn`, `Email`, `Blog`, `Other` |
| Prompt Used | Long text | The prompt sent to Claude — audit trail |
| → Task | Link to TASKS | Triggering task |
| → Lead | Link to LEADS | If content is brand/collab-specific |
| Scheduled For | Date | Publish date/time |
| Published At | Date | Actual publish timestamp |
| Hashtags | Long text | Generated hashtags block |
| Notes | Long text | Human review notes |
| Created At | Created time | Auto |
| Updated At | Last modified time | Auto |

### Status Field Logic

```
Draft         → AI output generated, not reviewed
Review        → Flagged for human review
Approved      → Cleared for scheduling
Scheduled     → Queued in publishing tool
Published     → Live
Rejected      → Not used — may be regenerated
```

### Brand Pillar Logic

```
Safety        → Harm reduction, alerts, warnings
Community     → Events, connection, audience
Education     → How-tos, explainers, awareness
Culture       → Lifestyle, aesthetic, vibe
Product       → Tool announcements, features
Internal      → Not for public publish
```

### Example Records

```
| Content Title           | Type    | Status   | Platform  | Brand Pillar |
|-------------------------|---------|----------|-----------|--------------|
| Festival kit safety tips| Caption | Approved | Instagram | Safety       |
| ASA intro explainer     | Script  | Draft    | TikTok    | Education    |
| Pulse Records collab    | Email   | Review   | Email     | Community    |
```

### Validation Notes
- Body (AI) is set by Make — never manually overwrite
- Body (edited) is the human version — used for publishing
- Status defaults to `Draft` on creation
- Brand Pillar should always be set — Make should default to `Culture` if unknown
- Prompt Used should always be stored — critical for audit and regeneration

---

## Recommended Airtable Views

### LEADS Table Views

| View Name | Type | Filter / Sort |
|---|---|---|
| All Leads | Grid | No filter |
| Active Pipeline | Grid | Status = Active or Contacted |
| Need Follow-up | Grid | Filter from OUTREACH_LOG Follow-up Required |
| By Platform | Gallery | Grouped by Platform |
| Recently Added | Grid | Sort Created At DESC, limit 50 |

### TASKS Table Views

| View Name | Type | Filter / Sort |
|---|---|---|
| All Tasks | Grid | No filter |
| Live Queue | Grid | Status = Pending or Running |
| Failed Tasks | Grid | Status = Failed |
| By Action Type | Grid | Grouped by Action Type |
| Today | Grid | Created At = today |
| Control Tower Feed | Grid | Sort Created At DESC — this is the read view |

### OUTREACH_LOG Table Views

| View Name | Type | Filter / Sort |
|---|---|---|
| All Outreach | Grid | No filter |
| Pending Follow-ups | Grid | Follow-up Required = true AND Reply Status = No Reply |
| Sent This Week | Grid | Sent At = this week |
| Failed Sends | Grid | Send Status = Failed |
| Positive Replies | Grid | Reply Status = Positive |

### CONTENT_QUEUE Table Views

| View Name | Type | Filter / Sort |
|---|---|---|
| All Content | Grid | No filter |
| Needs Review | Grid | Status = Draft or Review |
| Approved & Ready | Grid | Status = Approved |
| Scheduled | Calendar | Grouped by Scheduled For |
| Published | Grid | Status = Published, sort Published At DESC |
| By Brand Pillar | Grid | Grouped by Brand Pillar |

---

## Make.com Module Mapping

### Webhook Trigger (all flows)
```
Module: Webhooks → Custom Webhook
Name:   VICELAB_CONTROL_TOWER_INBOUND
Input:  { action_type, payload, request_id, triggered_by }
```

### Router — Action Type Branch
```
Module: Router
Branch 1: action_type = OUTREACH_SEND
Branch 2: action_type = CONTENT_GENERATE
Branch 3: action_type = TASK_CREATE
Branch 4: action_type = LEAD_UPDATE
Branch 5: action_type = STATUS_CHECK
```

### Branch 1 — OUTREACH_SEND
```
Step 1: Airtable → Create Record (TASKS)
        Fields: Task ID=request_id, Action Type=OUTREACH_SEND, Status=Pending,
                Payload (raw)=JSON payload
Step 2: Airtable → Search Record (LEADS) by email or handle
Step 3: Claude AI → Generate outreach message (if not pre-written in payload)
Step 4: Send via channel module (Gmail / Phantombuster / Manychat etc.)
Step 5: Airtable → Create Record (OUTREACH_LOG)
        Fields: Lead=matched lead ID, Task=task ID, Channel, Recipient Email/Handle,
                Message (sent), Message (AI), Send Status=Sent, Sent At=now
Step 6: Airtable → Update Record (TASKS)
        Fields: Status=Complete, Output (AI)=Claude draft, → Outreach Log=log ID
```

### Branch 2 — CONTENT_GENERATE
```
Step 1: Airtable → Create Record (TASKS)
        Fields: Task ID=request_id, Action Type=CONTENT_GENERATE, Status=Pending,
                Payload (raw)=JSON payload
Step 2: Claude AI → Generate content
Step 3: Airtable → Create Record (CONTENT_QUEUE)
        Fields: Content Title=topic, Content Type=type from payload,
                Body (AI)=Claude output, Status=Draft, Brand Pillar=from payload,
                Prompt Used=prompt sent to Claude, → Task=task ID
Step 4: Airtable → Update Record (TASKS)
        Fields: Status=Complete, Output (AI)=Claude output, → Content Queue=content ID
```

### Branch 3 — TASK_CREATE
```
Step 1: Airtable → Create Record (TASKS)
        Fields: Task ID=request_id, Action Type=TASK_CREATE, Status=Pending,
                Payload (raw)=JSON payload
Step 2: [custom processing based on payload.task_spec]
Step 3: Airtable → Update Record (TASKS)
        Fields: Status=Complete, Output (AI)=confirmation
```

### Branch 4 — LEAD_UPDATE
```
Step 1: Airtable → Create Record (TASKS)
        Fields: Task ID=request_id, Action Type=LEAD_UPDATE, Status=Pending,
                Payload (raw)=JSON payload
Step 2: Airtable → Search Record (LEADS) by payload.lead_id or email
Step 3: Airtable → Update Record (LEADS) with payload fields
Step 4: Airtable → Update Record (TASKS)
        Fields: Status=Complete, → Lead=lead ID, Output (AI)=confirmation
```

### Branch 5 — STATUS_CHECK
```
Step 1: Airtable → Search Record (TASKS) by payload.task_id
Step 2: Airtable → Create Record (TASKS) [status check log]
        Fields: Task ID=request_id, Action Type=STATUS_CHECK, Status=Complete,
                Output (AI)=JSON.stringify(found task record)
Step 3: Webhook → Respond (return task status + output to Control Tower)
```

### Error Handler (all branches)
```
Step: Airtable → Update Record (TASKS)
      Fields: Status=Failed, Error Message=error.message
```

---

## TASKS Writeback Validation Checklist

Make.com must verify these before marking a TASKS record Complete:

- [ ] Task ID (`ext_request_id`) is set and unique in TASKS
- [ ] Action Type is one of the five allowed values
- [ ] Payload (raw) was written at record creation (not after)
- [ ] Status was set to `Pending` at creation, `Running` before Claude call
- [ ] Output (AI) is non-empty string before setting Status = `Complete`
- [ ] If Output (AI) is empty, set Status = `Failed` with Error Message
- [ ] Completed At timestamp is written when Status → `Complete` or `Failed`
- [ ] Linked record (→ Lead, → Outreach Log, → Content Queue) is set where applicable
- [ ] Response Time (ms) is calculated and stored
- [ ] Retry Count is incremented if the Claude module was retried
- [ ] No TASKS record should remain in `Running` > 5 minutes — add a Make.com error handler

---

## OUTREACH_SEND Validation Checklist

Before creating an OUTREACH_LOG record:

- [ ] Lead exists in LEADS — do not create OUTREACH_LOG for unknown leads
- [ ] Lead `→ Outreach Log` linked field will be updated post-creation
- [ ] Channel is set explicitly — never null
- [ ] At least one of: Recipient Email OR Recipient Handle is populated
- [ ] Subject is populated for Email channel
- [ ] Message (sent) contains the final message body (not the draft)
- [ ] Message (AI) is populated if Claude generated the draft
- [ ] Send Status = `Queued` at record creation
- [ ] Send Status → `Sent` only after platform confirms delivery
- [ ] Send Status → `Failed` + Error Message if send fails
- [ ] Sent At is populated in UTC when Status → `Sent`
- [ ] Reply Status defaults to `No Reply`
- [ ] Follow-up Required defaults to `false` — only set `true` by explicit rule
- [ ] Follow-up Due is only populated when Follow-up Required = `true`
- [ ] Task ID is always linked — orphan OUTREACH_LOG records are not allowed

---

## Risks and Weak Points

| Risk | Severity | Mitigation |
|---|---|---|
| Duplicate TASKS records if Make retries | High | Check Task ID before create; use Airtable upsert pattern |
| Duplicate LEADS if Make creates instead of updating | High | Always search by email/handle before create |
| OUTREACH_LOG orphaned (no Lead link) | High | Make must enforce Lead link as required step |
| Claude timeout leaving TASKS in `Running` state | Medium | Add Make error handler; set 5-min watchdog |
| Output (AI) overwritten on retry | Medium | Only write Output (AI) once — check field is empty before writing |
| `Payload (raw)` not written before Status updates | Medium | Always write Payload first in Make flow order |
| CONTENT_QUEUE Body (AI) vs Body (edited) confusion | Low | Never auto-populate Body (edited); it's human-only |
| No deduplication on OUTREACH_LOG | Low | Acceptable — log is append-only by design |
| STATUS_CHECK creating noise in TASKS | Low | Consider a separate AUDIT_LOG table if STATUS_CHECK volume is high |
| Airtable API rate limits (5 req/sec) | Low | Add Make delay modules for bulk operations |

---

## Next 5 Implementation Steps

### Step 1 — Create VICELAB_MASTER base in Airtable
- Create the base manually or via API
- Create all four tables: LEADS, TASKS, OUTREACH_LOG, CONTENT_QUEUE
- Add all expanded fields per this spec
- Set all Single Select options exactly as defined
- Enable `Created time` and `Last modified time` auto-fields

### Step 2 — Create /api/execute route in Next.js
- File: `app/api/execute/route.ts`
- Accepts POST: `{ action_type, payload, request_id?, triggered_by? }`
- Validates action_type against allowlist
- Generates `request_id` if not provided (UUID)
- Forwards to Make.com webhook URL (from env: `MAKE_WEBHOOK_URL`)
- Returns `{ request_id, status: "queued" }` immediately
- Does not wait for Make to complete

### Step 3 — Configure Make.com scenario
- Create scenario: `VICELAB_CONTROL_TOWER_MAIN`
- Add custom webhook as trigger
- Add router with 5 branches (one per action_type)
- Build OUTREACH_SEND branch first (highest value)
- Add error handler on every branch → update TASKS to Failed

### Step 4 — Wire Control Tower UI to /api/execute
- Add fetch call from Control Tower page to `/api/execute`
- Pass action_type and payload from UI form/buttons
- Poll TASKS table (via separate `/api/status/:request_id` route) for result display
- Display Output (AI) when Status = Complete

### Step 5 — Add Airtable env vars and test end-to-end
- Add to Vercel env: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `MAKE_WEBHOOK_URL`
- Test OUTREACH_SEND flow end-to-end with a real lead record
- Verify TASKS record is created → Running → Complete
- Verify OUTREACH_LOG record is created and linked
- Verify Control Tower can read the completed task status

---

## Environment Variables Required

```env
# Make.com
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxx

# Airtable
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX

# Existing
ANTHROPIC_API_KEY=sk-ant-xxxx
```

---

## /api/execute — Proposed Contract

```typescript
// POST /api/execute
// Request
{
  action_type: "OUTREACH_SEND" | "CONTENT_GENERATE" | "TASK_CREATE" | "LEAD_UPDATE" | "STATUS_CHECK";
  payload: Record<string, unknown>;  // action-specific data
  request_id?: string;               // optional — generated if absent
  triggered_by?: string;             // user or system identifier
}

// Response (immediate — does not wait for Make)
{
  request_id: string;
  status: "queued";
  message: string;
}

// Error Response
{
  error: string;
  code: "INVALID_ACTION_TYPE" | "MISSING_PAYLOAD" | "WEBHOOK_UNREACHABLE";
}
```

### Payload shapes by action_type

```typescript
// OUTREACH_SEND
{
  lead_id?: string;          // Airtable record ID if known
  lead_email?: string;       // used to look up lead in Make
  lead_handle?: string;      // platform handle
  channel: string;           // Email | Instagram DM | LinkedIn | SMS
  message?: string;          // pre-written message (skip Claude if present)
  generate_message: boolean; // true = ask Claude to write it
  topic?: string;            // context for Claude if generate_message=true
}

// CONTENT_GENERATE
{
  content_type: string;      // Caption | Script | Idea | Blog | Email | Thread
  topic: string;             // What to write about
  brand_pillar?: string;     // Safety | Community | Education | Culture | Product
  platform?: string;         // Target platform
  tone?: string;             // Optional tone guidance
  word_count?: number;       // Optional length target
}

// TASK_CREATE
{
  task_spec: Record<string, unknown>;  // Free-form task spec
}

// LEAD_UPDATE
{
  lead_id: string;           // Airtable record ID — required
  fields: {
    status?: string;
    email?: string;
    notes?: string;
    priority?: string;
    [key: string]: unknown;
  };
}

// STATUS_CHECK
{
  task_id: string;           // request_id of task to check
}
```
