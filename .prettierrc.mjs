/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.mjs"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: "*.vue",
      options: {
        parser: "vue",
      },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
  bracketSameLine: true,
};
