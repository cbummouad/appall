# Appall Project

## Overview

This project is a web application that includes a demo request form. The backend uses Supabase for database and authentication services, replacing the previous Firebase setup.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Supabase project created with the necessary database and API keys

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Replace the placeholders with your actual Supabase project URL and anon key.

### Installing Dependencies

Run the following command to install project dependencies:

```bash
npm install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the port specified by Vite).

## Usage Guide

### Demo Request Form

- Navigate to the demo request form in the application.
- Fill in the required fields: name, phone number, address, email, message, and select a pack.
- Submit the form.
- The data will be stored in the Supabase table `demo-requests`.

### Supabase Setup

Ensure the following in your Supabase project:

- A table named `demo-requests` with columns:
  - id (serial primary key)
  - nom (text)
  - numero (text)
  - adresse (text)
  - email (text)
  - message (text)
  - pack (text)
  - created_at (timestamp with time zone)
  - status (text)

- Row Level Security (RLS) enabled on the `demo-requests` table.
- A policy allowing inserts, for example:

```sql
alter table "demo-requests" enable row level security;

create policy "Allow insert for all" on "demo-requests"
  for insert
  with check (true);
```

## Troubleshooting

- If you encounter errors related to missing environment variables, verify your `.env` file.
- For RLS errors, ensure the insert policy is correctly set in Supabase.
- Refresh the Supabase API schema cache if you make schema changes.

## Additional Notes

- The project uses Vite as the build tool.
- The demo form uses React Hook Form and Zod for validation.
- Supabase client is initialized in `src/lib/supabase.ts`.

---

For further assistance, please refer to the Supabase and Vite documentation.
