# IndieGameConnect Specification

## Overview
IndieGameConnect is a platform tailored for indie game developers, functioning similarly to BookFunnel but for indie games. It focuses on helping developers build their audience, engage with players, and collaborate with other developers.

## User Roles
- **Admin:** Manages the platform and users.
- **Developer:** Can create and manage games, mailing lists, devlog emails, landing pages, campaigns, and key distributions. Can create, duplicate, merge, or delete mailing lists to allow for specialized audiences (e.g., beta testers, early reviewers, etc.). Can distribute content and collaborate.
- **Player:** Can view their subscriptions, claim game keys, and receive devlog updates. Can subscribe or unsubscribe from mailing lists.

## Core Features (Draft)
- **Audience Building & Mailing Lists:** Game Developers can collect emails to build and manage multiple mailing lists via customizable landing pages (e.g., Space War landing page). These landing pages automatically trigger subscription confirmation emails. Players can manage their own subscriptions.
- **Cross-Promotion (Newsletter Swaps):** 
  - **Directory:** Developers can browse a directory of other developers to send swap requests.
  - **Auto-Match:** Developers can request a 'number one match' which pairs them with another suitable developer to initiate a swap.
  - **Swap Agreement:** When both parties agree, they exchange a link to what they want to share (e.g., itch.io game listing), a description of the game, and a link to sign up for their respective mailing list.
- **Content Distribution:** 
  - **Devlogs & Updates:** Primarily rich-text HTML emails with images. Includes templates for Welcome Emails and parameterized Subscription Confirmations. Mails are sent via the Resend API. Images are hosted on the platform while in draft form and embedded directly into emails when sent.
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
- **Email Delivery:** Resend API is integrated to handle transactional and marketing emails (Welcome, Subscription Confirmations).

## Analytics & Reporting (MVP)
- **Application Analytics:** Google Analytics (GA4) is integrated across the application, securely passing the measurement ID through Docker build arguments.
- **Email Metrics:** Game Developers can view open and click rates for their devlog emails.
- **Cross-Promotion Tracking:** Developers can see the number of clicks generated from a newsletter swap.
- *(Note: Advanced tracking like specific game key claim analytics is planned for post-MVP updates.)*

## Tech Stack & Architecture
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (with a schema mapped to core business models: Games, Mailing Lists, Subscriptions, Devlog Emails, Campaigns, and Game Keys)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **Deployment:** Docker & docker-compose

## Page: Features

- Collecting emails on a landing page
- Scheduling email blasts
- Connecting with other devs to swap mailing lists

## Page: About
"We are a group of indie game dev enthousiasts, we've seen what news letter communities have done for book publishing, and we want to do the same for gamers!"

## Page: Login
Email / Password login only for MVP.

## Page: Signup
Users can create an account using an email address and password. Upon successful signup, a welcome email is sent to the user via the Resend API.

## Page: Pricing
- $30/year - Starter: 1 mailing list, basic email collection, group promotions.
- $200/year - Pro: Unlimited games, direct developer newsletter swaps, auto-matching, mailing list integrations.
- $300/year - Publisher: Unlimited downloads/claims, advanced integrations for multiple studio names, priority support.

## Page: Contact
A form allowing users to submit comments or questions, including:
- Subject line
- Message body
(Planned to trigger an email via a backend service in the future)

## Page: Terms of Service
A legal document outlining platform policies, acceptable use (anti-spam, key ownership), intellectual property rights, indemnification, and termination conditions.

## Page: Privacy Policy
A document detailing data collection (GA4, User Accounts, Database), usage, storage, security measures, user rights, and compliance with privacy frameworks like PIPEDA and GDPR.
