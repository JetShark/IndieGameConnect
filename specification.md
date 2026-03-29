# IndieGameConnect Specification

## Overview
IndieGameConnect is a platform tailored for indie game developers, functioning similarly to BookFunnel but for indie games. It focuses on helping developers build their audience, engage with players, and collaborate with other developers.

## User Roles
- **Game Developer:** Can create and manage multiple mailing lists (create, duplicate, merge, or delete lists). They can distribute content and collaborate.
- **Player:** Can view the lists they belong to, and subscribe or unsubscribe from lists.

## Core Features (Draft)
- **Audience Building & Mailing Lists:** Game Developers can collect emails to build and manage multiple mailing lists. Players can manage their own subscriptions.
- **Cross-Promotion (Newsletter Swaps):** 
  - **Directory:** Developers can browse a directory of other developers to send swap requests.
  - **Auto-Match:** Developers can request a 'number one match' which pairs them with another suitable developer to initiate a swap.
  - **Swap Agreement:** When both parties agree, they exchange a link to what they want to share (e.g., itch.io game listing), a description of the game, and a link to sign up for their respective mailing list.
- **Content Distribution:** 
  - **Devlogs & Updates:** Primarily rich-text emails with images. Images are hosted on the platform while in draft form and embedded directly into emails when sent.
  - **Game Builds:** Links to external sites (e.g., itch.io) are used for sharing prototype builds.
  - **Key Distribution:** Developers can upload a list of unique game keys (e.g., Steam CD keys) which are dynamically distributed so each player receives a unique key in their email.
- **Testing & Early Reviewers:** Developers can create campaigns and request participants directly from their main mailing list, moving them to a dedicated sub-list.
  - **Beta Testing:** Developers provide a download link (e.g., itch.io) and an external link (e.g., Google Form, Discord) to collect feedback.
  - **Early Reviewers:** Conducted around a game's release. Developers distribute game keys to reviewers and provide prompts/links for them to leave a review on the target platform (e.g., Steam).

## Pricing Model (Draft)
Based on a tiered subscription model (customized for the indie game niche):
- **Starter Tier (e.g., $30/year):** For first-time developers. Limited downloads/key claims (e.g., 500/month), supports a limited number of games. Features include basic email collection and group promotions.
- **Pro Tier (e.g., $20/month or $200/year):** For established indie studios. Higher limits (e.g., 5,000 downloads/claims per month), unlimited games, direct developer newsletter swaps, auto-matching, and mailing list integrations.
- **Publisher Tier (e.g., $30/month or $300/year):** For hit indies or small publishers. Unlimited downloads/claims, priority support, and advanced integrations for managing multiple studio names.

## Integrations (MVP)
- **Key Distribution:** For the initial minimum viable product (MVP), game keys (e.g., Steam keys) will be handled via simple CSV file uploads provided by the developers rather than direct API integrations.

## Analytics & Reporting (MVP)
- **Email Metrics:** Game Developers can view open and click rates for their devlog emails.
- **Cross-Promotion Tracking:** Developers can see the number of clicks generated from a newsletter swap.
- *(Note: Advanced tracking like specific game key claim analytics is planned for post-MVP updates.)*

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS

## Page: Features

- Collecting emails on a landing page
- Scheduling email blasts
- Connecting with other devs to swap mailing lists

## Page: About
"We are a group of indie game dev enthousiasts, we've seen what news letter communities have done for book publishing, and we want to do the same for gamers!"

## Page: Login
Email / Password login only for MVP.

## Page: Pricing
- $30/year - Starter: 1 mailing list, basic email collection, group promotions.
- $200/year - Pro: Unlimited games, direct developer newsletter swaps, auto-matching, mailing list integrations.
- $300/year - Publisher: Unlimited downloads/claims, advanced integrations for multiple studio names, priority support.

## Page: Contact
A form allowing users to submit comments or questions, including:
- Subject line
- Message body
(Planned to trigger an email via a backend service in the future)
