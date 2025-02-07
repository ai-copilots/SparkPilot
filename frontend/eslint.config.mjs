// Import required Node.js path manipulation utilities
import { dirname } from "path";
import { fileURLToPath } from "url";
// Import FlatCompat to enable ESLint configuration compatibility layer
import { FlatCompat } from "@eslint/eslintrc";

// Convert import.meta.url to file path for ES modules
const __filename = fileURLToPath(import.meta.url);
// Get directory name from file path
const __dirname = dirname(__filename);

// Initialize compatibility layer for ESLint config
// This allows using traditional ESLint config format in new flat config system
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended ESLint configurations
  // - next/core-web-vitals: Includes rules for Core Web Vitals
  // - next/typescript: Includes TypeScript-specific rules for Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable TypeScript's unused variables check
      // This is useful when you have intentionally unused parameters
      '@typescript-eslint/no-unused-vars': 'off',
      
      // Disable error for empty object type declarations
      // Allows for future type extensions without immediate implementation
      '@typescript-eslint/no-empty-object-type': 'off',
      
      // Disable requirement for JSX string literals to be in separate variables
      // Allows direct use of string literals in JSX
      'react/jsx-no-literals': 'off',
    }
  }
];

// Export the configuration for ESLint to use
export default eslintConfig;