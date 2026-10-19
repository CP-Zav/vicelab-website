# Signal — Drug Alerts: founder review
19 October 2026. Status: first page draft committed; not merged or published.

## Decision
Recommended name: **Signal — Drug Alerts**. Put it beside Rumour Mill as a distinct, evidence-led destination. An urgent published alert should also appear as a non-flashing homepage banner and navigation badge; never bury it in a feed. These entry points are planned, not implemented in this first commit.

## First increment
Route: /drug-alerts. Europe-first; keep UK explicitly distinct and retain Australian coverage. Country selection must become more granular when actual coverage is established. The first page has functional area filters, source links and an explicit unverified-coverage state. No fabricated alerts or implied provider partnership.

## Whole-service rebuild
One canonical record, not separate copies for website/brief/SIV.
Record fields: ID, source issuer and URL, source publication and retrieval times, affected geography, reported identity/aliases, analytical finding and method if supplied, evidence and uncertainty, actionable source-approved advice, reviewer, approval time, review-due time, status, pin priority, version and corrections.
Identity states remain resolved / needs confirmation / blocked. Confidence in a warning's authenticity must not imply certainty about a visitor's sample.
Pipeline: retrieve → preserve source receipt → deduplicate → identity/evidence assessment → human review → approved public projection → daily brief → restricted SIV/Atlas references and delivery readback.
The website must remain usable when a downstream filing step fails; flag the failed integration and retry idempotently. Never silently discard an alert.
Public status: active / withdrawn / archived. Keep correction history; never quietly delete a withdrawn warning. Pin review is independent of source validity. Overdue review should visibly show age and trigger review, not automatically imply the risk ended.
Operational states: healthy / partial / failed / not commissioned, with per-source last-success times. No all-clear from empty results or failed checks.
A provider feed is an option to investigate, not an assumed API. Prefer provider-approved email notifications initially if offered. Do not scrape behind access controls.
Acceptance: prove one authorised source item through receipt, review, page and brief; prove duplicate suppression, correction/withdrawal, failed source visibility, retry and restricted filing readback before enabling a recurring job.
Legacy WAT-0002 remains suspended until replacement acceptance is demonstrated. Preserve prior audit records.

## Outreach — founder review only; NOT SENT
Target: The Loop UK, via the current official Contact Us page's **Patrons, Partnerships & Supporters** route:
https://www.wearetheloop.org/contact-us/
No current partnerships inbox was established. Do not address a guessed email or use a historic press contact as a verified current partnership recipient.
From: ViceLab Team <hello@thevicelab.com>
Subject: Linking people to The Loop’s alerts — a small ViceLab collaboration enquiry

Hello The Loop team,

We’re building ViceLab, an early-stage harm-reduction information platform, and are currently planning a Europe-first launch while retaining Australian outreach.

We’re rebuilding our Drug Watch around a dedicated, clearly sourced alerts page. The initial version would point people to original provider warnings, preserve their dates and geographic context, and make uncertainty and corrections visible.

Would you be open to a small conversation by email about the right way to link to and, with permission, display your public alerts?

In particular, we’d like to understand:
- whether you offer an approved notification route when a public alert is issued, updated or withdrawn — email, a feed or another method;
- what attribution, linking and reproduction permissions you require;
- how you would want corrections and withdrawals reflected;
- whether there is an appropriate contact or European network you recommend for this discussion.

We are asking about published public-health alerts, not access to confidential sample-level results. We would not describe an integration as live, imply a partnership, or publish your material under an agreed arrangement before one exists.

Our first step could be as simple as approved links and an email notification process. We’d welcome your guidance on what would be useful and realistic.

Thank you,
ViceLab Team
hello@thevicelab.com

## Founder decision
Review title, page and outreach wording. No outreach sent. No merge or production deployment performed. A deeper testing-service partnership is an exploratory option; operating a ViceLab laboratory is outside this build and needs separate feasibility work.

## Known limits
The first page is an implementation draft, not the complete ingestion/review/delivery service. No alert store, provider notifications, reviewer authentication, scheduler, SIV write path, homepage banner or Rumour Mill navigation link has been integrated. Build/browser verification remains outstanding.
