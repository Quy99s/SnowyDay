System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: async function () {
      // Auto generated represents the prerequisite imports of project modules.
      await (async () => {
        const requests = [() => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Bullet.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Enemy.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Gift.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/MainGameControler.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/MusicBar.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Player.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Score.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Skill.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/Wall.ts"), () => _context.import("file:///Users/backup/SnowyDay/SnowyDay/assets/Script/soundPlayer.ts")];

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