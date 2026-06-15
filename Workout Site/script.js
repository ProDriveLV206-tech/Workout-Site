const exercises = [
  {
    name: "Push-up",
    type: "push",
    level: "Beginner+",
    sets: "3-5 sets of 6-15",
    cues: ["Hands under shoulders", "Body stays in one line", "Chest lowers before hips"],
    focus: ["Hands", "Chest", "Core"],
  },
  {
    name: "Pull-up",
    type: "pull",
    level: "Intermediate",
    sets: "3-5 sets of 3-10",
    cues: ["Start from a dead hang", "Pull elbows down", "Lower with control"],
    focus: ["Hands", "Elbows", "Core"],
  },
  {
    name: "Bodyweight Squat",
    type: "legs",
    level: "Beginner",
    sets: "3-4 sets of 10-20",
    cues: ["Feet flat", "Knees track toes", "Stand tall at the top"],
    focus: ["Feet", "Knees", "Hips"],
  },
  {
    name: "Hollow Hold",
    type: "core",
    level: "Beginner+",
    sets: "3-5 holds of 15-40 sec",
    cues: ["Low back pressed down", "Ribs tucked", "Breathe slowly"],
    focus: ["Shoulders", "Ribs", "Legs"],
  },
  {
    name: "Pike Push-up",
    type: "push",
    level: "Intermediate",
    sets: "3-4 sets of 5-12",
    cues: ["Hips high", "Head moves forward", "Push the floor away"],
    focus: ["Hands", "Head", "Shoulders"],
  },
  {
    name: "Inverted Row",
    type: "pull",
    level: "Beginner+",
    sets: "3-5 sets of 6-14",
    cues: ["Squeeze shoulder blades", "Chest to bar", "Keep hips up"],
    focus: ["Hands", "Chest", "Feet"],
  },
  {
    name: "Split Squat",
    type: "legs",
    level: "Beginner+",
    sets: "3-4 sets of 8-14 each",
    cues: ["Long stance", "Front foot planted", "Back knee drops straight down"],
    focus: ["Front foot", "Back knee", "Hips"],
  },
  {
    name: "Plank Shoulder Tap",
    type: "core",
    level: "Intermediate",
    sets: "3-4 sets of 12-24",
    cues: ["Brace abs", "Keep hips quiet", "Tap slowly"],
    focus: ["Hands", "Shoulders", "Hips"],
  },
];

const levelSettings = {
  beginner: { sets: 3, reps: "6-10", rest: "75-120 sec", intensity: "easy to moderate" },
  intermediate: { sets: 4, reps: "8-12", rest: "60-100 sec", intensity: "moderate" },
  advanced: { sets: 5, reps: "8-15", rest: "90-150 sec", intensity: "hard but clean" },
};

const goalSettings = {
  strength: { focus: "slow reps, longer rest, harder progressions", finisher: "3 slow negatives" },
  muscle: { focus: "more total sets and controlled tempo", finisher: "2 pump sets" },
  "fat-loss": { focus: "short rests and full-body circuits", finisher: "8-minute conditioning circuit" },
  skills: { focus: "fresh skill practice before strength work", finisher: "10 minutes skill holds" },
};

const focusSettings = {
  calisthenics: {
    label: "Calisthenics",
    summary: "Balanced bodyweight training with push, pull, legs, core, and skill work.",
    highlights: ["Push-ups", "Pull-ups", "Squats"],
    color: "bodyweight",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Push + Core", [
          ["Push-up progression", `${ctx.setting.sets} x ${ctx.setting.reps}`],
          ["Pike push-up", `${Math.max(2, ctx.setting.sets - 1)} x 5-10`],
          [ctx.dipMove, `${Math.max(2, ctx.setting.sets - 1)} x 6-12`],
          ["Hollow hold", "3 x 20-40 sec"],
        ]),
        planDay("Day 2", "Pull + Legs", [
          [ctx.pullMove, `${ctx.setting.sets} x 3-10`],
          ["Bodyweight squat", "4 x 10-20"],
          ["Split squat", "3 x 8-14 each"],
          ["Dead hang or towel row hold", "3 x 20-45 sec"],
        ]),
        planDay("Day 3", "Skill + Full Body", [
          ["Handstand or wall hold practice", "10 min"],
          ["Push-up progression", "3 x clean reps"],
          [ctx.pullMove, "3 x clean reps"],
          ["Plank shoulder tap", "3 x 12-24"],
        ]),
        planDay("Day 4", "Legs + Conditioning", [
          ["Reverse lunge", "4 x 8-14 each"],
          ["Glute bridge", "4 x 12-20"],
          ["Calf raise", "3 x 15-25"],
          [ctx.goalInfo.finisher, "1 round"],
        ]),
        planDay("Day 5", "Upper Strength", [
          [ctx.pullMove, `${ctx.setting.sets} x 3-8`],
          [ctx.dipMove, `${ctx.setting.sets} x 5-10`],
          ["Pike push-up", "4 x 5-10"],
          ["Hollow rocks", "3 x 10-20"],
        ]),
        planDay("Day 6", "Easy Technique", [
          ["Mobility flow", "12 min"],
          ["Easy squat", "2 x 15"],
          ["Scapular push-up", "2 x 12"],
          ["Walk or light jog", "15-25 min"],
        ]),
      ];
    },
  },
  chest: {
    label: "Chest",
    summary: "Push-dominant work with chest, triceps, and shoulder support.",
    highlights: ["Push-ups", "Dips", "Pike push-ups"],
    color: "push",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Chest Strength", [
          ["Push-up progression", `${ctx.setting.sets} x 6-12`],
          [ctx.dipMove, `${ctx.setting.sets} x 5-10`],
          ["Slow negative push-up", "3 x 4-8"],
          ["Hollow hold", "3 x 20-30 sec"],
        ]),
        planDay("Day 2", "Legs + Core", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Split squat", "3 x 8-12 each"],
          ["Calf raise", "3 x 15-25"],
          ["Plank shoulder tap", "3 x 12-20"],
        ]),
        planDay("Day 3", "Chest Volume", [
          ["Incline or standard push-up", "4 x 8-15"],
          ["Diamond push-up", "3 x 5-10"],
          ["Push-up top hold", "3 x 20 sec"],
          ["Scapular push-up", "2 x 12"],
        ]),
        planDay("Day 4", "Back Balance", [
          [ctx.pullMove, `${ctx.setting.sets} x 5-10`],
          ["Reverse snow angel", "3 x 10-15"],
          ["Glute bridge", "3 x 15-20"],
          ["Dead hang", "3 x 20-40 sec"],
        ]),
        planDay("Day 5", "Chest Density", [
          ["Push-up ladder", "10-8-6-4-2"],
          [ctx.dipMove, "4 x 6-12"],
          ["Pike push-up", "3 x 6-10"],
          ["Chest squeeze hold", "3 x 20 sec"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Shoulder mobility flow", "10 min"],
          ["Easy push-up", "2 x 10"],
          ["Thoracic rotations", "2 x 8 each"],
          ["Walk", "20 min"],
        ]),
      ];
    },
  },
  back: {
    label: "Back",
    summary: "Pull-dominant work for lats, upper back, and rear shoulders.",
    highlights: ["Pull-ups", "Rows", "Dead hangs"],
    color: "pull",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Back Strength", [
          [ctx.pullMove, `${ctx.setting.sets} x 3-8`],
          ["Scapular pull-up", "3 x 6-10"],
          ["Inverted row", "4 x 6-12"],
          ["Dead hang", "3 x 20-40 sec"],
        ]),
        planDay("Day 2", "Legs + Core", [
          ["Bodyweight squat", "4 x 10-20"],
          ["Reverse lunge", "3 x 8-12 each"],
          ["Hollow hold", "3 x 20-30 sec"],
          ["Glute bridge", "3 x 15-20"],
        ]),
        planDay("Day 3", "Back Volume", [
          ["Inverted row", "4 x 8-14"],
          [ctx.pullMove, "3 x 4-8"],
          ["Rear delt raise without weights", "3 x 12-15"],
          ["Towel row hold", "3 x 20-30 sec"],
        ]),
        planDay("Day 4", "Push Balance", [
          ["Push-up progression", `${ctx.setting.sets} x 6-12`],
          ["Pike push-up", "3 x 5-10"],
          ["Plank shoulder tap", "3 x 12-20"],
          ["Scapular push-up", "2 x 12"],
        ]),
        planDay("Day 5", "Pull Density", [
          [ctx.pullMove, "5 x 3-6"],
          ["Inverted row", "4 x 8-12"],
          ["Hollow rocks", "3 x 10-20"],
          ["Dead hang", "3 x 30 sec"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Lat stretch", "10 min"],
          ["Thoracic rotations", "2 x 8 each"],
          ["Easy walk", "20 min"],
          ["Banded pull-apart or towel pull-apart", "2 x 15"],
        ]),
      ];
    },
  },
  shoulders: {
    label: "Shoulders",
    summary: "Vertical push work, handstand prep, and shoulder stability.",
    highlights: ["Pike push-ups", "Handstands", "Planks"],
    color: "push",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Shoulder Strength", [
          ["Pike push-up", `${ctx.setting.sets} x 5-10`],
          ["Wall handstand hold", "4 x 20-40 sec"],
          ["Push-up progression", "3 x 8-12"],
          ["Hollow hold", "3 x 20-30 sec"],
        ]),
        planDay("Day 2", "Legs + Core", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Split squat", "3 x 8-12 each"],
          ["Plank shoulder tap", "3 x 12-20"],
          ["Calf raise", "3 x 20"],
        ]),
        planDay("Day 3", "Handstand Skill", [
          ["Wall handstand hold", "10 min"],
          ["Shoulder tap practice", "3 x 8-16"],
          ["Pike push-up", "3 x 6-10"],
          ["Scapular push-up", "2 x 12"],
        ]),
        planDay("Day 4", "Upper Balance", [
          [ctx.pullMove, `${ctx.setting.sets} x 4-8`],
          ["Diamond push-up", "3 x 6-12"],
          ["Inverted row", "3 x 8-12"],
          ["Side plank", "3 x 20 sec each"],
        ]),
        planDay("Day 5", "Shoulder Volume", [
          ["Pike push-up", "4 x 6-12"],
          ["Wall handstand hold", "4 x 25 sec"],
          ["Hollow rocks", "3 x 10-20"],
          ["Reverse snow angel", "3 x 12"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Shoulder circles", "2 x 20"],
          ["Wall slides", "2 x 12"],
          ["Thoracic rotations", "2 x 8 each"],
          ["Walk", "15-20 min"],
        ]),
      ];
    },
  },
  arms: {
    label: "Arms",
    summary: "Triceps and biceps-focused work using push and pull patterns.",
    highlights: ["Dips", "Chin-up style pulls", "Diamond push-ups"],
    color: "mixed",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Triceps Focus", [
          [ctx.dipMove, `${ctx.setting.sets} x 5-10`],
          ["Diamond push-up", "4 x 6-12"],
          ["Close-grip push-up", "3 x 8-14"],
          ["Plank", "3 x 30-45 sec"],
        ]),
        planDay("Day 2", "Legs + Core", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Split squat", "3 x 8-12 each"],
          ["Hollow hold", "3 x 20-30 sec"],
          ["Calf raise", "3 x 20"],
        ]),
        planDay("Day 3", "Biceps Focus", [
          [ctx.pullMove, `${ctx.setting.sets} x 4-8`],
          ["Inverted row with underhand grip", "4 x 8-12"],
          ["Dead hang", "3 x 20-40 sec"],
          ["Scapular pull-up", "3 x 8"],
        ]),
        planDay("Day 4", "Upper Pump", [
          ["Diamond push-up", "3 x 8-12"],
          [ctx.pullMove, "3 x 5-8"],
          ["Pike push-up", "3 x 6-10"],
          ["Hollow rocks", "3 x 10-20"],
        ]),
        planDay("Day 5", "Arms Volume", [
          [ctx.dipMove, "4 x 6-12"],
          ["Close-grip push-up", "4 x 10-15"],
          ["Inverted row", "4 x 8-14"],
          ["Plank shoulder tap", "3 x 12-20"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Wrist mobility", "8 min"],
          ["Shoulder mobility", "8 min"],
          ["Easy walk", "20 min"],
          ["Arm circles", "2 x 20"],
        ]),
      ];
    },
  },
  legs: {
    label: "Legs",
    summary: "Lower-body focus with quads, glutes, hamstrings, and calves.",
    highlights: ["Squats", "Split squats", "Glute bridges"],
    color: "legs",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Leg Strength", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Split squat", "4 x 8-12 each"],
          ["Glute bridge", "4 x 15-20"],
          ["Calf raise", "4 x 20"],
        ]),
        planDay("Day 2", "Core + Upper", [
          [ctx.pullMove, `${ctx.setting.sets} x 3-8`],
          ["Push-up progression", "3 x 6-12"],
          ["Hollow hold", "3 x 20-30 sec"],
          ["Plank shoulder tap", "3 x 12-20"],
        ]),
        planDay("Day 3", "Single-Leg Work", [
          ["Split squat", "4 x 8-14 each"],
          ["Reverse lunge", "4 x 8-14 each"],
          ["Step-up or chair step-up", "3 x 10 each"],
          ["Wall sit", "3 x 30-45 sec"],
        ]),
        planDay("Day 4", "Posterior Chain", [
          ["Glute bridge", "4 x 15-25"],
          ["Single-leg glute bridge", "3 x 8-12 each"],
          ["Hamstring slide curl", "3 x 6-10"],
          ["Calf raise", "4 x 20"],
        ]),
        planDay("Day 5", "Leg Density", [
          ["Bodyweight squat", "5 x 15"],
          ["Walking lunge", "4 x 10 each"],
          ["Split squat", "3 x 10 each"],
          [ctx.goalInfo.finisher, "1 round"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Hip flexor stretch", "10 min"],
          ["Ankle mobility", "5 min"],
          ["Easy walk", "20 min"],
          ["Glute stretch", "5 min"],
        ]),
      ];
    },
  },
  core: {
    label: "Core",
    summary: "Abs, bracing, and body tension for stronger lines and better control.",
    highlights: ["Hollow holds", "Planks", "Shoulder taps"],
    color: "core",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Front Core", [
          ["Hollow hold", "4 x 20-40 sec"],
          ["Dead bug", "3 x 10 each"],
          ["Plank", "3 x 30-45 sec"],
          ["Reverse crunch", "3 x 10-15"],
        ]),
        planDay("Day 2", "Legs + Balance", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Split squat", "3 x 8-12 each"],
          ["Calf raise", "3 x 20"],
          ["Glute bridge", "3 x 15-20"],
        ]),
        planDay("Day 3", "Anti-Rotation", [
          ["Plank shoulder tap", "4 x 12-20"],
          ["Side plank", "3 x 20-40 sec each"],
          ["Bird dog", "3 x 8 each"],
          ["Hollow rocks", "3 x 10-20"],
        ]),
        planDay("Day 4", "Upper Support", [
          [ctx.pullMove, `${ctx.setting.sets} x 4-8`],
          ["Push-up progression", "3 x 8-12"],
          ["Scapular push-up", "3 x 12"],
          ["Dead hang", "3 x 20-40 sec"],
        ]),
        planDay("Day 5", "Core Density", [
          ["Hollow hold", "4 x 25 sec"],
          ["Plank", "4 x 35 sec"],
          ["Plank shoulder tap", "4 x 16"],
          ["Reverse crunch", "3 x 15"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Cat-cow", "2 x 10"],
          ["Thoracic rotations", "2 x 8 each"],
          ["Hip mobility", "10 min"],
          ["Walk", "15-20 min"],
        ]),
      ];
    },
  },
  "full-body": {
    label: "Full Body",
    summary: "A balanced whole-body split for steady progress across everything.",
    highlights: ["Push", "Pull", "Legs"],
    color: "mixed",
    buildWeek(ctx) {
      return [
        planDay("Day 1", "Push + Core", [
          ["Push-up progression", `${ctx.setting.sets} x ${ctx.setting.reps}`],
          ["Pike push-up", "3 x 5-10"],
          ["Hollow hold", "3 x 20-40 sec"],
          ["Plank shoulder tap", "3 x 12-20"],
        ]),
        planDay("Day 2", "Pull + Legs", [
          [ctx.pullMove, `${ctx.setting.sets} x 3-10`],
          ["Bodyweight squat", "4 x 10-20"],
          ["Split squat", "3 x 8-12 each"],
          ["Dead hang", "3 x 20-40 sec"],
        ]),
        planDay("Day 3", "Upper Volume", [
          [ctx.dipMove, `${ctx.setting.sets} x 5-10`],
          [ctx.pullMove, "3 x 4-8"],
          ["Push-up progression", "3 x 8-12"],
          ["Hollow rocks", "3 x 10-20"],
        ]),
        planDay("Day 4", "Legs + Core", [
          ["Bodyweight squat", "4 x 12-20"],
          ["Reverse lunge", "3 x 8-12 each"],
          ["Glute bridge", "3 x 15-20"],
          ["Plank", "3 x 35 sec"],
        ]),
        planDay("Day 5", "Skill Day", [
          ["Handstand or wall hold practice", "10 min"],
          ["Pike push-up", "3 x 6-10"],
          [ctx.pullMove, "3 x clean reps"],
          [ctx.goalInfo.finisher, "1 round"],
        ]),
        planDay("Day 6", "Mobility", [
          ["Full-body mobility flow", "12 min"],
          ["Easy walk", "20 min"],
          ["Scapular push-up", "2 x 12"],
          ["Bodyweight squat", "2 x 15"],
        ]),
      ];
    },
  },
};

const form = document.querySelector("#workout-form");
const daysInput = document.querySelector("#days");
const daysOutput = document.querySelector("#days-output");
const exerciseGrid = document.querySelector("#exercise-grid");
const sectionsGrid = document.querySelector("#sections-grid");
const filters = document.querySelectorAll(".filter");
const downloadButton = document.querySelector("#download-workout");
const downloadStatus = document.querySelector("#download-status");
const focusSelect = document.querySelector("#focus");

const currentPlan = {
  rendered: null,
  meta: null,
};

function normalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function goalLabel(goal) {
  return goal.split("-").map(normalizeWord).join(" ");
}

function createPoseSvg(type) {
  if (type === "push") {
    return `
      <svg viewBox="0 0 360 180" class="pose-svg" aria-hidden="true">
        <rect x="22" y="138" width="316" height="8" rx="4" fill="#cfddcf" />
        <circle cx="70" cy="94" r="18" fill="#e95845" />
        <path d="M86 100 C126 102, 150 106, 190 114 C224 120, 258 123, 300 125" fill="none" stroke="#223022" stroke-width="14" stroke-linecap="round" />
        <path d="M122 104 L96 128" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M164 110 L144 136" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M188 114 L212 132" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M252 122 L286 134" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <circle cx="96" cy="128" r="8" fill="#1f6f4a" />
        <circle cx="286" cy="134" r="8" fill="#1f6f4a" />
        <path d="M70 94 L48 110" fill="none" stroke="#e95845" stroke-width="9" stroke-linecap="round" />
        <path d="M70 94 L86 78" fill="none" stroke="#e95845" stroke-width="9" stroke-linecap="round" />
        <text x="34" y="28" class="pose-note">hands</text>
        <text x="258" y="28" class="pose-note">feet</text>
      </svg>
    `;
  }
  if (type === "pull") {
    return `
      <svg viewBox="0 0 360 180" class="pose-svg" aria-hidden="true">
        <rect x="86" y="28" width="188" height="10" rx="5" fill="#223022" />
        <circle cx="180" cy="82" r="18" fill="#e95845" />
        <path d="M180 100 L180 130" fill="none" stroke="#223022" stroke-width="14" stroke-linecap="round" />
        <path d="M180 100 L152 50" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M180 100 L208 50" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M180 130 L160 162" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M180 130 L200 162" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <circle cx="152" cy="50" r="7" fill="#1f6f4a" />
        <circle cx="208" cy="50" r="7" fill="#1f6f4a" />
        <text x="36" y="72" class="pose-note">bar</text>
        <text x="248" y="72" class="pose-note">hands</text>
      </svg>
    `;
  }
  if (type === "legs") {
    return `
      <svg viewBox="0 0 360 180" class="pose-svg" aria-hidden="true">
        <rect x="30" y="144" width="300" height="8" rx="4" fill="#cfddcf" />
        <circle cx="180" cy="44" r="18" fill="#e95845" />
        <path d="M180 62 L180 102" fill="none" stroke="#223022" stroke-width="14" stroke-linecap="round" />
        <path d="M180 102 L154 134" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M180 102 L206 134" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M154 134 L144 142" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M206 134 L216 142" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
        <path d="M180 64 L168 84" fill="none" stroke="#e95845" stroke-width="9" stroke-linecap="round" />
        <path d="M180 64 L192 84" fill="none" stroke="#e95845" stroke-width="9" stroke-linecap="round" />
        <text x="36" y="28" class="pose-note">feet flat</text>
        <text x="252" y="28" class="pose-note">knees</text>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 360 180" class="pose-svg" aria-hidden="true">
      <rect x="34" y="132" width="292" height="8" rx="4" fill="#cfddcf" />
      <circle cx="180" cy="76" r="18" fill="#e95845" />
      <path d="M180 94 L180 128" fill="none" stroke="#223022" stroke-width="14" stroke-linecap="round" />
      <path d="M180 108 L140 122" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
      <path d="M180 108 L220 122" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
      <path d="M180 128 L138 148" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
      <path d="M180 128 L222 148" fill="none" stroke="#223022" stroke-width="12" stroke-linecap="round" />
      <path d="M180 96 L180 58" fill="none" stroke="#e95845" stroke-width="9" stroke-linecap="round" />
      <text x="40" y="30" class="pose-note">low back</text>
      <text x="266" y="30" class="pose-note">legs long</text>
    </svg>
  `;
}

function createExerciseCard(exercise) {
  const pose = exercise.type;
  return `
    <article class="exercise-card">
      <div class="demo ${exercise.type}">
        ${createPoseSvg(exercise.type)}
      </div>
      <div class="exercise-content">
        <div class="exercise-head">
          <span class="tag">${exercise.type}</span>
          <span class="type-pill">${poseMapLabel(exercise.type)}</span>
        </div>
        <h3>${exercise.name}</h3>
        <p><strong>${exercise.level}</strong> · ${exercise.sets}</p>
        <div class="focus-row">
          ${exercise.focus.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <ul>
          ${exercise.cues.map((cue) => `<li>${cue}</li>`).join("")}
        </ul>
        <p class="form-note">${poseDirection(exercise.type)}</p>
      </div>
    </article>
  `;
}

function poseMapLabel(type) {
  return {
    push: "Push-up",
    pull: "Pull-up",
    legs: "Squat",
    core: "Core",
  }[type];
}

function poseDirection(type) {
  return {
    push: "Press the floor away",
    pull: "Pull chest toward the bar",
    legs: "Sit back and stand tall",
    core: "Brace ribs down and hold",
  }[type];
}

function renderExercises(filter = "all") {
  exerciseGrid.innerHTML = exercises
    .filter((exercise) => filter === "all" || exercise.type === filter)
    .map(createExerciseCard)
    .join("");
}

function renderSections() {
  sectionsGrid.innerHTML = Object.entries(focusSettings)
    .map(
      ([key, section]) => `
        <article class="section-card ${section.color}">
          <div class="section-card-top">
            <span class="tag">${section.label}</span>
            <span class="section-accent">Workout section</span>
          </div>
          <h3>${section.label}</h3>
          <p>${section.summary}</p>
          <div class="focus-row">
            ${section.highlights.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <button class="button secondary section-use" type="button" data-focus="${key}">Use section</button>
        </article>
      `
    )
    .join("");

  sectionsGrid.querySelectorAll(".section-use").forEach((button) => {
    button.addEventListener("click", () => {
      focusSelect.value = button.dataset.focus;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      renderPlan();
    });
  });
}

function inchesFromForm(height, unit) {
  return unit === "cm" ? height / 2.54 : height;
}

function poundsFromForm(weight, unit) {
  return unit === "kg" ? weight * 2.20462 : weight;
}

function getBuildNote(bmi) {
  if (bmi < 18.5) return "Prioritize strength practice, food quality, sleep, and steady progress.";
  if (bmi < 25) return "Use balanced volume and progress when your last reps stay clean.";
  if (bmi < 30) return "Keep joint-friendly progressions and add brisk walks on rest days.";
  return "Start with controlled ranges, low-impact conditioning, and extra recovery between hard days.";
}

function planDay(title, theme, moves) {
  return { title, theme, moves };
}

function buildWeek({ focus, setting, goalInfo, pullMove, dipMove }) {
  return focusSettings[focus].buildWeek({ setting, goalInfo, pullMove, dipMove });
}

function buildDownloadText(meta) {
  const lines = [];
  lines.push(`${meta.planName}`);
  lines.push(``);
  lines.push(`Profile: age ${meta.age}, ${meta.weightDisplay}, ${meta.heightDisplay}`);
  lines.push(`Focus: ${meta.focusLabel}`);
  lines.push(`Goal: ${meta.goalLabel}`);
  lines.push(`Level: ${meta.levelLabel}`);
  lines.push(`Days per week: ${meta.days}`);
  lines.push(`Equipment: ${meta.equipment || "none listed"}`);
  lines.push(``);
  lines.push(`Summary: ${meta.summary}`);
  lines.push(``);
  lines.push(`Weekly plan:`);
  meta.week.forEach((day) => {
    lines.push(`- ${day.title}: ${day.theme}`);
    day.moves.forEach(([move, dose]) => {
      lines.push(`  - ${move} — ${dose}`);
    });
  });
  lines.push(``);
  lines.push(`Exercise cues:`);
  meta.exerciseNotes.forEach((item) => {
    lines.push(`- ${item.name}: ${item.cues.join("; ")}`);
  });
  lines.push(``);
  lines.push(`Note: This is general fitness guidance. Stop if pain feels sharp or unusual.`);
  return lines.join("\n");
}

function downloadWorkout() {
  if (!currentPlan.rendered) return;
  const blob = new Blob([currentPlan.rendered], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${currentPlan.meta.planName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  downloadStatus.textContent = "Workout downloaded";
  window.setTimeout(() => {
    downloadStatus.textContent = "Ready to export";
  }, 1800);
}

function renderPlan(event) {
  if (event) event.preventDefault();

  const data = new FormData(form);
  const age = Number(data.get("age"));
  const weightRaw = Number(data.get("weight"));
  const heightRaw = Number(data.get("height"));
  const weight = poundsFromForm(weightRaw, data.get("weightUnit"));
  const height = inchesFromForm(heightRaw, data.get("heightUnit"));
  const level = data.get("level");
  const focus = data.get("focus") || "full-body";
  const goal = data.get("goal");
  const days = Number(data.get("days"));
  const weightUnit = data.get("weightUnit");
  const heightUnit = data.get("heightUnit");
  const equipment = data.getAll("equipment");
  const bmi = (weight / (height * height)) * 703;
  const setting = levelSettings[level];
  const goalInfo = goalSettings[goal];
  const focusInfo = focusSettings[focus];
  const hasBar = equipment.includes("pull-up bar");
  const hasDips = equipment.includes("dip bars") || equipment.includes("rings");
  const pullMove = hasBar ? "Pull-up or negative pull-up" : "Inverted row under table/bar";
  const dipMove = hasDips ? "Dip or assisted dip" : "Close-grip push-up";
  const week = buildWeek({ focus, setting, goalInfo, pullMove, dipMove }).slice(0, days);
  const exerciseNotes = exercises;

  const planName = `${days}-Day ${focusInfo.label} ${goalLabel(goal)} Plan`;
  const summary = `This ${focusInfo.label.toLowerCase()} split is tuned for ${focusInfo.summary.toLowerCase()} Train at a ${setting.intensity} effort with ${setting.rest} rest. Focus on ${goalInfo.focus}. ${getBuildNote(bmi)}`;
  const equipmentText = equipment.length ? equipment.join(", ") : "none";

  document.querySelector("#plan-name").textContent = planName;
  document.querySelector("#plan-summary").textContent = summary;
  document.querySelector("#stats").innerHTML = `
    <span><strong>${Math.round(bmi * 10) / 10}</strong> BMI estimate</span>
    <span><strong>${setting.sets}</strong> main sets</span>
    <span><strong>${setting.rest}</strong> rest</span>
  `;

  document.querySelector("#week-list").innerHTML = week
    .map(
      (day) => `
        <article class="day-card">
          <p class="eyebrow">${day.title}</p>
          <h3>${day.theme}</h3>
          <ul>
            ${day.moves.map(([move, dose]) => `<li><strong>${move}</strong><span>${dose}</span></li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  currentPlan.meta = {
    planName,
    age,
    weight: Math.round(weight),
    height: Math.round(height),
    weightDisplay: `${weightRaw} ${weightUnit}`,
    heightDisplay: `${heightRaw} ${heightUnit}`,
    focusLabel: focusInfo.label,
    levelLabel: normalizeWord(level),
    goalLabel: goalLabel(goal),
    days,
    equipment: equipmentText,
    summary,
    week,
    exerciseNotes,
  };
  currentPlan.rendered = buildDownloadText(currentPlan.meta);
  downloadStatus.textContent = "Ready to export";
}

daysInput.addEventListener("input", () => {
  daysOutput.value = daysInput.value;
});

form.addEventListener("submit", renderPlan);
downloadButton.addEventListener("click", downloadWorkout);

focusSelect.addEventListener("change", renderPlan);

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderExercises(button.dataset.filter);
  });
});

renderSections();
renderExercises();
renderPlan();
