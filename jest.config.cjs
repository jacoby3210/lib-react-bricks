module.exports = {
	transform: {"^.+\\.jsx?$": "babel-jest", },												// Transforms JavaScript and JSX files using Babel
	moduleDirectories: ["node_modules", "src"], 											// Allow absolute imports from "src"
	moduleNameMapper: {"\\.(css|less|scss)$": "identity-obj-proxy",},	// Mock CSS imports
	setupFilesAfterEnv: ["<rootDir>/utils/test.js"], 									// Setup file for Jest DOM
	testEnvironment: "jest-environment-jsdom",												//
	testMatch: [																											// Pattern to find test files
		"**/src/**/*.test.jsx",
		"**/src/**/test.jsx"
	], 												
};