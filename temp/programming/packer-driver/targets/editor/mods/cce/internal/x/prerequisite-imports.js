System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: async function () {
      // Auto generated represents the prerequisite imports of project modules.
      await (async () => {
        const requests = [() => _context.import("file:///Users/backup/Desktop/SnowyDay/assets/Script/Joystick.ts"), () => _context.import("file:///Users/backup/Desktop/SnowyDay/assets/Script/Player.ts"), () => _context.import("file:///Users/backup/Desktop/SnowyDay/assets/Script/Score.ts")];

        for (const request of requests) {
          try {
            await request();
          } catch (_err) {// The error should have been caught by executor.
          }
        }
      })();
    }
  };
});
//# sourceMappingURL=prerequisite-imports.js.map