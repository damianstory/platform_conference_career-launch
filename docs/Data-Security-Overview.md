# Career Launch Platform - Data Security Overview

> **Historical — registration flow retired July 2026.** Career Launch no longer collects the viewer details described below. This document is retained as a record of the event-week data controls.

## For School Administrators & Decision Makers

### What Data Do We Collect?

When educators register to watch career sessions with their class, we collect:
- First name and email (educators only)
- School board and school name
- Class size and grade level
- Which session they're watching

**We do NOT collect:** Student names, student emails, passwords, payment information, or any sensitive personal identifiers.

---

### Is The Data Secure?

**Yes.** Here's how we protect it:

| Protection | What It Means |
|------------|---------------|
| **Encrypted in Transit** | All data sent between your browser and our servers is encrypted (HTTPS) |
| **Encrypted at Rest** | Data stored in our database is encrypted - even if someone accessed the hard drives, they couldn't read it |
| **Access Controlled** | Only authorized myBlueprint staff can view registration data |
| **No Public Access** | Random people on the internet cannot query or download the data |

---

### Where Is The Data Stored?

Our database is hosted on **Supabase**, a secure cloud platform built on Amazon Web Services (AWS).

**Data Residency:** Canada (Central) - AWS Montreal data center (`ca-central-1`). All data remains on Canadian soil.

---

### Who Can Access The Data?

| Who | Access Level |
|-----|--------------|
| Public website visitors | Can submit registrations only - cannot read any data |
| myBlueprint administrators | Full access via secure dashboard (password protected) |
| School boards | Can request their own school's data via myBlueprint |

---

### How Long Is Data Kept?

Registration data is retained for reporting purposes during and after the event (December 1-5, 2025). Data retention policies align with myBlueprint's standard practices.

---

## Technical Security Details

*For IT administrators and security reviewers*

### Database Security (Supabase/PostgreSQL)

**Row Level Security (RLS):**
- RLS is enabled on all tables
- Public API key (`anon` role) can only INSERT new registrations
- Public API key CANNOT read, update, or delete any existing data
- Only the Service Role Key (server-side, never exposed) can read data

**RLS Policy Configuration:**
```sql
-- What the public CAN do:
CREATE POLICY "allow_public_insert" ON registrations
  FOR INSERT TO anon WITH CHECK (true);

-- What the public CANNOT do:
-- No SELECT policy = cannot read any rows
-- No UPDATE policy = cannot modify any rows
-- No DELETE policy = cannot remove any rows
```

### Encryption Standards

| Layer | Standard |
|-------|----------|
| **Transport** | TLS 1.2+ (HTTPS enforced) |
| **At Rest** | AES-256 encryption |
| **Database** | PostgreSQL with encrypted storage volumes |
| **Backups** | Encrypted automated backups |

### Authentication & API Security

- **Anonymous Key:** Exposed in client code (by design) - can only INSERT
- **Service Role Key:** Server-side only, never in client code, bypasses RLS
- **Dashboard Access:** Protected by Supabase authentication (email/password + optional MFA)

### JWT Token Structure

The anonymous API key is a JWT (JSON Web Token) containing:
- `role: "anon"` - identifies as anonymous/public user
- `iss: "supabase"` - issued by Supabase
- Expiration timestamp

This token grants only the permissions defined in RLS policies.

### Infrastructure (Supabase on AWS)

- **Compute:** Dedicated PostgreSQL instances
- **Network:** VPC isolation, private subnets
- **Compliance:** SOC 2 Type II (Supabase), AWS compliance certifications
- **Monitoring:** Real-time logs and alerting available

### Content Security Policy

The application enforces Content Security Policy headers to prevent:
- Cross-site scripting (XSS)
- Clickjacking
- Data injection attacks

---

## Compliance Considerations

| Framework | Status |
|-----------|--------|
| **PIPEDA** (Canadian Privacy Law) | Personal info collected with consent, used only for stated purpose |
| **FIPPA** (Ontario) | Applicable for Ontario school boards - data minimization practiced |
| **CASL** | No marketing emails sent without explicit consent |

---

## Questions?

Contact: damian.matheson@myblueprint.ca

---

*Document last updated: November 2025*
*Platform: Career Launch 2025 (careerlaunch.myblueprint.ca)*
