import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Robot Logo"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" fill="currentColor" />
          <rect x="7" y="7" width="3" height="3" fill="#ff0000" />
          <rect x="14" y="7" width="3" height="3" fill="#00ff00" />
          <rect x="9" y="14" width="6" height="2" fill="#0000ff" />
          <rect x="10" y="17" width="4" height="1" fill="#ffff00" />
        </svg>
        eliza 101
      </>
    ),
  },
  githubUrl: "https://github.com/706creators/eliza101",
  links: [],
};
