import { setupWorker } from "msw/browser";
import { PrototypeMockHandler } from "./handlers/prototype";
// ========================================================================= //
// Setup MSW router map.
// ========================================================================= //

export const worker = setupWorker(
	PrototypeMockHandler,
);

// ========================================================================= //