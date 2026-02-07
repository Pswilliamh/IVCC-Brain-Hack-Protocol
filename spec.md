# Specification

## Summary
**Goal:** Provide a reliable in-app way to download the full landing page project source as a ZIP when the platform Export/Download button is unavailable.

**Planned changes:**
- Add a static ZIP file containing the full project source (including both `frontend/` and `backend/`) under a public static assets path (e.g., `frontend/public/assets/downloads/`) so it’s served by the deployed site.
- Add a clearly labeled “Download source code (ZIP)” link/button in the landing page footer that downloads the ZIP, with a one-line instruction clarifying it contains the full source code.

**User-visible outcome:** Visitors can click a footer download control to download and unzip the complete project source code (frontend + backend) directly from the live site.
