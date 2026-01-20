<div align="center">

# Data PURIFIER  
### Result-as-a-Service for Clean, Verified Business Data

Upload raw data. Receive verified results.  
No tools. No dashboards. Only outcomes.

</div>

---

## Overview

Most organizations struggle with messy data:
- Duplicate records
- Invalid emails and phone numbers
- Inconsistent formats
- Broken schemas

They do not want software to manage.  
They want **clean, usable data**.

This project delivers **data cleanup as a Result-as-a-Service (RaaS)**.

---

## What is RaaS?

Result-as-a-Service means:

- Clients submit raw input data
- All processing happens internally
- Clients receive final, production-ready output
- Billing is based on results, not features

---

## Core Capabilities

- Data normalization (names, emails, phone numbers)
- Exact and fuzzy deduplication
- Schema and rule validation
- Date, number, and country format correction
- Proof and audit reporting
- API-ready architecture

---

## Supported Input Formats

- CSV
- Excel (XLSX)
- JSON

---

## Technology Stack

| Layer | Technology |
|-----|-----------|
| Language | JavaScript (Node.js) |
| Validation | AJV (JSON Schema) |
| Parsing | fast-csv, xlsx |
| Utilities | lodash, validator |
| Database | SQLite / PostgreSQL |
| Runtime | Node.js 18+ |

---

## Project Structure


---

## Installation

### Requirements
- Node.js 18 or later
- Git

### Setup

```bash
git clone https://github.com/Coder-Delta/data-purifier.git
cd data-purifier
pnpm install
