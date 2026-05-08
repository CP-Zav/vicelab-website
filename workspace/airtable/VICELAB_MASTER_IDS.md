# VICELAB_MASTER — Live Airtable IDs

**Base:** VICELAB CONTROL TOWER — MASTER BASE  
**Base ID:** `appiJ2t5ilhLJ5mUT`  
**Built:** 2026-05-08  

Use these IDs in Make.com modules and any Airtable API calls.

---

## Table IDs

| Table | ID |
|---|---|
| LEADS | `tblH5kpfpG9Ziez1O` |
| TASKS | `tbl2JTsScM3ad5Xbl` |
| OUTREACH_LOG | `tblBPcxB1QvBeg7iA` |
| CONTENT_QUEUE | `tbleAldb7YkA01P90` |

---

## LEADS Fields

| Field | ID | Type |
|---|---|---|
| Lead Name | `flddbFBFYPLsHAWUW` | singleLineText (primary) |
| Type | `fld3rD8q2rg4VU1oc` | singleSelect |
| Status | `fldJr4Xm1yfdpGEB0` | singleSelect |
| Email | `fld0IiBQEdaGK9cvF` | email |
| Phone | `fldeHgGtLQkaI1CIV` | phoneNumber |
| Instagram Handle | `fldsI5E8ZInjNMU4M` | singleLineText |
| Platform | `fldyrOfucs5ynJj3U` | singleSelect |
| Source | `fldAyBsRd9D3ZlZ2R` | singleSelect |
| Priority | `fldZAPAoXZzzGFBCF` | singleSelect |
| Tags | `fld1O73M8tip9LDT3` | multipleSelects |
| Last Contacted At | `fldKHjBzuKo8kFBvY` | date |
| Notes | `fldyNQAZzdCO3ph4P` | multilineText |
| → Tasks (auto-reciprocal) | `fldksCeT1pnFJtYcl` | multipleRecordLinks |
| → Outreach Log (auto-reciprocal) | `fldgLqIduLfgr7F2r` | multipleRecordLinks |

---

## TASKS Fields

| Field | ID | Type |
|---|---|---|
| Task ID | `fldviwnAeqrt8N1h0` | singleLineText (primary) |
| Action Type | `fldvBnfliwyG39xHD` | singleSelect |
| Status | `fldpISaQ8lp2Doz59` | singleSelect |
| Payload (raw) | `fldtRTYXDlT8TN4We` | multilineText |
| Output (AI) | `fldnTCERHreoZzc6V` | multilineText |
| Error Message | `fldbVCNCvGmsXu2hG` | multilineText |
| Source | `fldVWXK1wIVDWaIBT` | singleSelect |
| Triggered By | `fldTB0jupfJu9ZWNr` | singleLineText |
| Response Time (ms) | `fldArbiU5HfFJKhaN` | number |
| Retry Count | `fldP7KyVMHwy65m9P` | number |
| Completed At | `fld2HJpqaOwZgzEub` | dateTime |
| → Lead | `fldnaGXONxx0jHtpd` | multipleRecordLinks → LEADS |
| → Outreach Log | `fldLP0P8bNgqKCLiI` | multipleRecordLinks → OUTREACH_LOG |
| → Content Queue | `fld3DWAg0cYogbvgx` | multipleRecordLinks → CONTENT_QUEUE |
| ← OUTREACH_LOG tasks (auto) | `fld2hInlKlrL7Vd40` | multipleRecordLinks |
| ← CONTENT_QUEUE tasks (auto) | `fldWxHU0kxKHydClf` | multipleRecordLinks |

---

## OUTREACH_LOG Fields

| Field | ID | Type |
|---|---|---|
| Log Ref | `fldtUVaXZEimFra4I` | singleLineText (primary) |
| Channel | `fldGVND9eWvyYrI1F` | singleSelect |
| Recipient Email | `fldnLlZG4hXeuggd2` | email |
| Recipient Handle | `fldmsNKPm0Gm1okSY` | singleLineText |
| Subject | `fld3QIOAf3GT9ii3K` | singleLineText |
| Message (sent) | `fldxcRKkvLIaLX2as` | multilineText |
| Message (AI) | `fldcE9Sm1ARhFPrMf` | multilineText |
| Send Status | `fldUWq3SPXrHxOZSK` | singleSelect |
| Reply Status | `fldrktxoDBd81jNg7` | singleSelect |
| Follow-up Required | `fldbi4Fvn0qDlRLTS` | checkbox |
| Follow-up Due | `fldQhezEkeMb1biGy` | date |
| Sent At | `fldbkxMWucmK1DJpV` | dateTime |
| Reply Received At | `fldfYediTA017mLEC` | date |
| Notes | `fld8AyERXDMFYNIif` | multilineText |
| → Lead | `fldV6r48rrboIVrxd` | multipleRecordLinks → LEADS |
| → Task | `fldobNvVvAYERuxGU` | multipleRecordLinks → TASKS |
| ← TASKS outreach (auto) | `fldnqdU1WDPKe19k0` | multipleRecordLinks |

---

## CONTENT_QUEUE Fields

| Field | ID | Type |
|---|---|---|
| Content Title | `fldnO71ED1YxKMkqV` | singleLineText (primary) |
| Content Type | `fldd5FfmJvs3jYVBM` | singleSelect |
| Status | `fld4U7Gvh2qtScvEC` | singleSelect |
| Body (AI) | `fldLTcKqrR7Rrkpvg` | multilineText |
| Body (edited) | `fldaAjDDc0rVfJaA1` | multilineText |
| Brand Pillar | `fldGSeXDDIxPHJkjm` | singleSelect |
| Platform | `fldpnstxkHoIEcUdT` | singleSelect |
| Prompt Used | `flddmhUET5amuQLJ9` | multilineText |
| Scheduled For | `fld5JBYxZjrLLIfot` | date |
| Published At | `fldZxXSeYFMEwEs70` | date |
| Hashtags | `fldrWvS7TJ5UkYFuK` | multilineText |
| Notes | `fldh449h6yfUft7yU` | multilineText |
| → Task | `fldouMduzFzN57r55` | multipleRecordLinks → TASKS |
| ← TASKS content (auto) | `fldV2fXjgSn427tV9` | multipleRecordLinks |

---

## Make.com Quick Reference

When configuring Airtable modules in Make, use:

```
Base ID:           appiJ2t5ilhLJ5mUT
Table: LEADS       tblH5kpfpG9Ziez1O
Table: TASKS       tbl2JTsScM3ad5Xbl
Table: OUTREACH    tblBPcxB1QvBeg7iA
Table: CONTENT     tbleAldb7YkA01P90
```

### TASKS record creation field map (Make → Airtable)

```
Task ID           → fldviwnAeqrt8N1h0  (set to {{request_id}})
Action Type       → fldvBnfliwyG39xHD  (set to {{action_type}})
Status            → fldpISaQ8lp2Doz59  (set to "Pending")
Payload (raw)     → fldtRTYXDlT8TN4We  (set to JSON.stringify({{payload}}))
Source            → fldVWXK1wIVDWaIBT  (set to "Control Tower")
Triggered By      → fldTB0jupfJu9ZWNr  (set to {{triggered_by}})
```

### OUTREACH_LOG record creation field map (Make → Airtable)

```
Log Ref           → fldtUVaXZEimFra4I  (set to "LOG-{{timestamp}}")
Channel           → fldGVND9eWvyYrI1F  (set to {{payload.channel}})
Recipient Email   → fldnLlZG4hXeuggd2  (set to {{payload.lead_email}})
Recipient Handle  → fldmsNKPm0Gm1okSY  (set to {{payload.lead_handle}})
Subject           → fld3QIOAf3GT9ii3K  (set to {{payload.subject}})
Message (sent)    → fldxcRKkvLIaLX2as  (set to {{final_message}})
Message (AI)      → fldcE9Sm1ARhFPrMf  (set to {{claude_draft}})
Send Status       → fldUWq3SPXrHxOZSK  (set to "Queued", then "Sent")
Reply Status      → fldrktxoDBd81jNg7  (set to "No Reply")
Sent At           → fldbkxMWucmK1DJpV  (set to {{now}})
→ Lead            → fldV6r48rrboIVrxd  (set to [{{lead_record_id}}])
→ Task            → fldobNvVvAYERuxGU  (set to [{{task_record_id}}])
```

---

## Environment Variables

```env
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxx
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appiJ2t5ilhLJ5mUT
```

Note: `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are used by Make.com directly.
The Next.js app only needs `MAKE_WEBHOOK_URL` for the `/api/execute` route.
