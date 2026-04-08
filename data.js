// =============================================
// FORGEFIT — Exercise & Program Data
// =============================================

const MOVEMENT_GUIDES = {
  squat: {
    icon: "🦵",
    name: "Barbell Back Squat",
    muscle: "Quads, Glutes, Hamstrings",
    steps: [
      "Stand with feet shoulder-width apart, bar resting on upper traps.",
      "Brace your core and take a deep breath into your belly.",
      "Push knees out as you descend, keeping chest tall.",
      "Lower until thighs are parallel (or lower) to the floor.",
      "Drive through your heels to return to starting position.",
      "Exhale at the top. Re-brace for the next rep."
    ],
    tip: "💡 Keep your weight on your mid-foot throughout the lift. Never let your heels rise."
  },
  deadlift: {
    icon: "🏋️",
    name: "Conventional Deadlift",
    muscle: "Full Posterior Chain",
    steps: [
      "Stand with the bar over your mid-foot, hip-width stance.",
      "Hinge at the hips and grab the bar just outside your shins.",
      "Flatten your back — imagine \"chest up, hips down\".",
      "Pull the slack out of the bar before you lift.",
      "Drive your feet into the floor as the bar passes your knees.",
      "Lock out at the top by squeezing your glutes hard."
    ],
    tip: "💡 Think of it as a LEG PUSH, not a back pull. Keep the bar in contact with your legs the whole way."
  },
  bench: {
    icon: "💪",
    name: "Barbell Bench Press",
    muscle: "Chest, Shoulders, Triceps",
    steps: [
      "Lie with eyes under the bar, feet flat on the floor.",
      "Grip slightly wider than shoulder-width, thumbs wrapped.",
      "Retract and depress your shoulder blades into the bench.",
      "Unrack and lower the bar to your lower chest with control.",
      "Press in a slight arc back toward the rack.",
      "Lock out at the top without losing your shoulder position."
    ],
    tip: "💡 Leg drive matters! Press your feet into the floor to create full-body tension."
  },
  pullup: {
    icon: "🤸",
    name: "Pull-Up / Assisted Pull-Up",
    muscle: "Lats, Biceps, Upper Back",
    steps: [
      "Hang from the bar with an overhand grip, arms fully extended.",
      "Depress your shoulder blades — don't shrug toward your ears.",
      "Pull your elbows down and back toward your hips.",
      "Continue until your chin clears the bar.",
      "Hold briefly at the top, feeling the lats contract.",
      "Lower slowly over 2–3 seconds for maximum benefit."
    ],
    tip: "💡 Can't do a full pull-up yet? Use a resistance band looped around the bar for assistance."
  },
  row: {
    icon: "🔄",
    name: "Dumbbell / Barbell Row",
    muscle: "Mid Back, Lats, Rear Delts",
    steps: [
      "Hinge forward at the hips until torso is ~45° to the floor.",
      "Let the weight hang at arm's length below your chest.",
      "Initiate by pulling your elbow back, not just your arm.",
      "Row the weight to your lower ribcage / hip crease.",
      "Squeeze your shoulder blade toward your spine at the top.",
      "Lower with control — take 2 seconds on the way down."
    ],
    tip: "💡 Avoid rounding your lower back. Think: show your chest to the floor, not your back."
  },
  ohp: {
    icon: "⬆️",
    name: "Overhead Press",
    muscle: "Shoulders, Triceps, Core",
    steps: [
      "Stand with the bar at shoulder height, narrow grip (just outside shoulders).",
      "Brace your abs and glutes like you're bracing for a punch.",
      "Press straight up, moving your head slightly back to let it pass.",
      "Once past your forehead, shift forward under the bar.",
      "Lock out with ears between arms, not in front.",
      "Lower under control back to the starting position."
    ],
    tip: "💡 Don't lean back excessively. If you are, the weight is too heavy."
  },
  lunge: {
    icon: "🦿",
    name: "Walking Lunge",
    muscle: "Quads, Glutes, Balance",
    steps: [
      "Stand tall, feet together, weights by your sides (optional).",
      "Step forward with one foot, landing heel-to-toe.",
      "Lower your back knee toward the floor — stop before it touches.",
      "Keep your front shin vertical, torso upright.",
      "Drive through the front heel to step forward with the back leg.",
      "Alternate legs with each step across the floor."
    ],
    tip: "💡 Take longer strides to bias glutes; shorter strides focus more on quads."
  },
  plank: {
    icon: "⬛",
    name: "Plank & Variations",
    muscle: "Core, Shoulders, Glutes",
    steps: [
      "Start face-down, forearms on the floor, elbows under shoulders.",
      "Rise onto your toes, forming a straight line head-to-heel.",
      "Squeeze your abs, glutes, and thighs simultaneously.",
      "Tuck your chin slightly — don't crane your neck up.",
      "Breathe steadily — don't hold your breath.",
      "Hold for the prescribed time; lower with control."
    ],
    tip: "💡 Squeeze a coin between your glutes. Seriously — this one cue transforms plank quality."
  },
  hiit: {
    icon: "🔥",
    name: "HIIT Cardio Circuit",
    muscle: "Full Body, Cardiovascular",
    steps: [
      "Choose 4 exercises: e.g. burpees, jump squats, mountain climbers, high knees.",
      "Work at maximum effort for 40 seconds on each exercise.",
      "Rest 20 seconds between exercises.",
      "Complete 4 rounds of the circuit.",
      "Cool down with 5 minutes of light walking and stretching."
    ],
    tip: "💡 The key to HIIT is INTENSITY during work periods. If you can hold a full conversation, you're not working hard enough."
  },
  rdl: {
    icon: "🔻",
    name: "Romanian Deadlift (RDL)",
    muscle: "Hamstrings, Glutes, Lower Back",
    steps: [
      "Stand holding a barbell or dumbbells at hip height.",
      "Softly bend your knees and push your hips BACK (not down).",
      "Let the weights slide down your thighs as you hinge.",
      "Lower until you feel a strong stretch in your hamstrings.",
      "Drive your hips forward to stand back up.",
      "Squeeze your glutes hard at the top of every rep."
    ],
    tip: "💡 Think about pushing a door closed with your butt. The hip hinge is the movement, not a squat."
  },
  dips: {
    icon: "💈",
    name: "Tricep Dips",
    muscle: "Triceps, Chest, Shoulders",
    steps: [
      "Grip parallel bars, arms fully extended, body straight.",
      "Lean slightly forward to target chest; stay upright for triceps.",
      "Lower your body by bending your elbows behind you.",
      "Descend until upper arms are parallel to the floor.",
      "Press through your palms to extend back to the top.",
      "Avoid swinging or using momentum."
    ],
    tip: "💡 Add weight with a dipping belt once bodyweight feels easy — one of the best upper body mass builders."
  },
  incline: {
    icon: "📐",
    name: "Incline Dumbbell Press",
    muscle: "Upper Chest, Front Delts",
    steps: [
      "Set bench to 30–45 degrees. Sit with dumbbells on thighs.",
      "Kick the weights up as you lie back on the bench.",
      "Grip the dumbbells with a neutral or pronated grip.",
      "Lower the weights to your upper chest with control.",
      "Press straight up, touching the dumbbells lightly at the top.",
      "Control the negative — 2 seconds down, 1 second up."
    ],
    tip: "💡 45° is not always better. Try 30° to maximize upper chest stimulus without over-involving the front delts."
  }
};

const PROGRAMS = {
  // ——— LOSE FAT ———
  lose_fat: {
    ectomorph: {
      beginner: {
        name: "Lean Muscle Shred",
        description: "Build lean muscle while burning fat — perfect combo for your slim frame.",
        split: ["Full Body + Cardio", "Rest", "Full Body + Cardio", "Rest", "Full Body + Cardio", "HIIT", "Rest"],
        workouts: {
          "Full Body + Cardio": [
            { name: "Goblet Squat", sets: "3", reps: "12-15", muscles: "Legs", tip: "Hold dumbbell at chest." },
            { name: "Dumbbell Bench Press", sets: "3", reps: "12", muscles: "Chest", tip: "Control the descent." },
            { name: "Dumbbell Row", sets: "3", reps: "12", muscles: "Back", tip: "One arm at a time." },
            { name: "Shoulder Press", sets: "3", reps: "12", muscles: "Shoulders", tip: "Core tight throughout." },
            { name: "Plank", sets: "3", reps: "30s hold", muscles: "Core", tip: "Squeeze everything." },
            { name: "20 min Treadmill Walk (incline)", sets: "1", reps: "20 min", muscles: "Cardio", tip: "Incline 8-12, moderate pace." }
          ],
          "HIIT": [
            { name: "Burpees", sets: "4", reps: "40s on / 20s off", muscles: "Full Body", tip: "Max effort!" },
            { name: "Jump Squats", sets: "4", reps: "40s on / 20s off", muscles: "Legs", tip: "Land softly." },
            { name: "Mountain Climbers", sets: "4", reps: "40s on / 20s off", muscles: "Core/Cardio", tip: "Keep hips level." },
            { name: "High Knees", sets: "4", reps: "40s on / 20s off", muscles: "Cardio", tip: "Drive knees high." }
          ]
        },
        movements: ["squat", "bench", "row", "plank", "hiit"]
      },
      intermediate: {
        name: "Metabolic Conditioning",
        description: "Supersets and circuits to maximize calorie burn while preserving muscle.",
        split: ["Upper + Cardio", "Lower + Cardio", "Rest", "Push + HIIT", "Pull + Cardio", "Legs + Core", "Rest"],
        workouts: {
          "Upper + Cardio": [
            { name: "Incline Bench Press", sets: "4", reps: "10", muscles: "Upper Chest", tip: "Superset with rows." },
            { name: "Cable Row", sets: "4", reps: "12", muscles: "Back", tip: "Squeeze shoulder blades." },
            { name: "Lateral Raises", sets: "3", reps: "15", muscles: "Shoulders", tip: "Slow and controlled." },
            { name: "Tricep Pushdown", sets: "3", reps: "15", muscles: "Triceps", tip: "Elbows pinned at sides." },
            { name: "Hammer Curl", sets: "3", reps: "12", muscles: "Biceps", tip: "Neutral grip." },
            { name: "30 min Incline Walk or Bike", sets: "1", reps: "30 min", muscles: "Cardio", tip: "Zone 2 heart rate." }
          ],
          "Lower + Cardio": [
            { name: "Barbell Squat", sets: "4", reps: "8-10", muscles: "Quads/Glutes", tip: "Full depth." },
            { name: "RDL", sets: "4", reps: "10", muscles: "Hamstrings", tip: "Feel the stretch." },
            { name: "Walking Lunges", sets: "3", reps: "12 each leg", muscles: "Legs", tip: "Step long." },
            { name: "Leg Press", sets: "3", reps: "15", muscles: "Quads", tip: "Feet shoulder-width." },
            { name: "Calf Raises", sets: "4", reps: "20", muscles: "Calves", tip: "Full range of motion." },
            { name: "20 min HIIT Bike", sets: "1", reps: "20 min", muscles: "Cardio", tip: "10s sprint / 50s easy." }
          ],
          "Push + HIIT": [
            { name: "Overhead Press", sets: "4", reps: "8", muscles: "Shoulders", tip: "Full lockout." },
            { name: "Dips", sets: "3", reps: "12", muscles: "Triceps/Chest", tip: "Forward lean for chest." },
            { name: "Pushups", sets: "3", reps: "Max", muscles: "Chest", tip: "Chest to floor." },
            { name: "HIIT Circuit", sets: "4", reps: "4 rounds", muscles: "Full Body", tip: "Max effort." }
          ],
          "Pull + Cardio": [
            { name: "Pull-Ups / Assisted Pull-Ups", sets: "4", reps: "8-10", muscles: "Back/Biceps", tip: "Full dead hang." },
            { name: "Barbell Row", sets: "4", reps: "8", muscles: "Back", tip: "45° torso angle." },
            { name: "Face Pulls", sets: "3", reps: "15", muscles: "Rear Delts", tip: "Pull to eye level." },
            { name: "Bicep Curl", sets: "3", reps: "12", muscles: "Biceps", tip: "No swinging." },
            { name: "30 min Cardio", sets: "1", reps: "30 min", muscles: "Cardio", tip: "Steady state." }
          ],
          "Legs + Core": [
            { name: "Front Squat", sets: "4", reps: "8", muscles: "Quads", tip: "Elbows high." },
            { name: "Romanian Deadlift", sets: "4", reps: "10", muscles: "Hamstrings", tip: "Hip hinge focus." },
            { name: "Bulgarian Split Squat", sets: "3", reps: "10 each", muscles: "Glutes/Quads", tip: "Back foot elevated." },
            { name: "Hanging Leg Raise", sets: "4", reps: "15", muscles: "Core", tip: "No swinging." },
            { name: "Cable Crunch", sets: "3", reps: "20", muscles: "Abs", tip: "Round over the cable." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "row", "ohp", "rdl", "plank", "hiit"]
      }
    },
    mesomorph: {
      beginner: {
        name: "Athletic Fat Burn",
        description: "Leverage your natural athleticism to burn fat and sculpt your physique.",
        split: ["Push", "Pull", "Legs + Cardio", "Rest", "Full Body HIIT", "Cardio", "Rest"],
        workouts: {
          "Push": [
            { name: "Bench Press", sets: "4", reps: "10", muscles: "Chest", tip: "Shoulder blades retracted." },
            { name: "Overhead Press", sets: "3", reps: "10", muscles: "Shoulders", tip: "Core braced." },
            { name: "Incline Dumbbell Press", sets: "3", reps: "12", muscles: "Upper Chest", tip: "30-45 degree angle." },
            { name: "Lateral Raises", sets: "3", reps: "15", muscles: "Shoulders", tip: "Slight bend in elbow." },
            { name: "Tricep Dips", sets: "3", reps: "12", muscles: "Triceps", tip: "Body upright for tris." }
          ],
          "Pull": [
            { name: "Pull-Ups", sets: "4", reps: "8", muscles: "Back", tip: "Full range of motion." },
            { name: "Barbell Row", sets: "4", reps: "10", muscles: "Back", tip: "Row to lower chest." },
            { name: "Face Pulls", sets: "3", reps: "15", muscles: "Rear Delts", tip: "Rope to eye level." },
            { name: "Hammer Curl", sets: "3", reps: "12", muscles: "Biceps", tip: "Neutral grip." }
          ],
          "Legs + Cardio": [
            { name: "Squat", sets: "4", reps: "8", muscles: "Quads", tip: "Break parallel." },
            { name: "RDL", sets: "4", reps: "10", muscles: "Hamstrings", tip: "Hamstring stretch is key." },
            { name: "Leg Press", sets: "3", reps: "15", muscles: "Legs", tip: "Wide stance." },
            { name: "Calf Raises", sets: "4", reps: "20", muscles: "Calves", tip: "Full stretch at bottom." },
            { name: "25 min Incline Walk", sets: "1", reps: "25 min", muscles: "Cardio", tip: "Consistent pace." }
          ],
          "Full Body HIIT": [
            { name: "Burpee to Pull-Up", sets: "4", reps: "8", muscles: "Full Body", tip: "Explosive!" },
            { name: "Box Jumps", sets: "4", reps: "10", muscles: "Legs/Power", tip: "Land with soft knees." },
            { name: "Kettlebell Swings", sets: "4", reps: "20", muscles: "Posterior Chain", tip: "Hip drive, not arms." },
            { name: "Battle Ropes", sets: "3", reps: "30s", muscles: "Cardio/Arms", tip: "Constant waves." }
          ],
          "Cardio": [
            { name: "Steady State Cardio", sets: "1", reps: "45 min", muscles: "Cardio", tip: "Zone 2: can hold a broken conversation." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "pullup", "row", "ohp", "rdl", "hiit"]
      }
    },
    endomorph: {
      beginner: {
        name: "High-Intensity Fat Burner",
        description: "Maximize calorie burn with circuit training and strategic cardio.",
        split: ["Circuit A", "Cardio", "Circuit B", "Cardio", "Full Body", "Long Cardio", "Rest"],
        workouts: {
          "Circuit A": [
            { name: "Goblet Squat", sets: "3", reps: "15", muscles: "Legs", tip: "Tempo: 3 sec down." },
            { name: "Pushup", sets: "3", reps: "15", muscles: "Chest/Triceps", tip: "Modify on knees if needed." },
            { name: "Dumbbell Row", sets: "3", reps: "15", muscles: "Back", tip: "Squeeze at top." },
            { name: "Reverse Lunge", sets: "3", reps: "12 each", muscles: "Legs/Glutes", tip: "Control the step back." },
            { name: "Plank", sets: "3", reps: "40s", muscles: "Core", tip: "Squeeze everything." },
            { name: "10 min Brisk Walk", sets: "1", reps: "10 min", muscles: "Active Recovery", tip: "Keep moving between sets." }
          ],
          "Cardio": [
            { name: "Treadmill Intervals", sets: "1", reps: "30 min", muscles: "Cardio", tip: "2 min fast walk / 1 min jog alternating." },
            { name: "Elliptical", sets: "1", reps: "20 min", muscles: "Low Impact Cardio", tip: "High resistance, low speed." }
          ],
          "Circuit B": [
            { name: "Leg Press", sets: "3", reps: "15", muscles: "Legs", tip: "Full range of motion." },
            { name: "Lat Pulldown", sets: "3", reps: "15", muscles: "Back", tip: "Pull to upper chest." },
            { name: "Dumbbell Shoulder Press", sets: "3", reps: "15", muscles: "Shoulders", tip: "Control overhead." },
            { name: "Tricep Pushdown", sets: "3", reps: "20", muscles: "Triceps", tip: "Elbows fixed at sides." },
            { name: "Bicycle Crunches", sets: "3", reps: "20", muscles: "Core", tip: "Slow and controlled." }
          ],
          "Full Body": [
            { name: "Deadlift", sets: "3", reps: "8", muscles: "Full Body", tip: "Hinge at hips." },
            { name: "Bench Press", sets: "3", reps: "10", muscles: "Chest", tip: "Feet flat." },
            { name: "Assisted Pull-Up", sets: "3", reps: "8", muscles: "Back", tip: "Full dead hang start." },
            { name: "Walking Lunges", sets: "3", reps: "12 each", muscles: "Legs", tip: "Step long." },
            { name: "Mountain Climbers", sets: "3", reps: "30s", muscles: "Core/Cardio", tip: "Quick feet." }
          ],
          "Long Cardio": [
            { name: "Low-Intensity Steady State", sets: "1", reps: "50-60 min", muscles: "Cardio", tip: "Walk, bike, swim — easy pace for fat burning." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "row", "lunge", "plank", "hiit"]
      }
    }
  },

  // ——— BUILD MUSCLE ———
  build_muscle: {
    ectomorph: {
      beginner: {
        name: "Hardgainer Mass Builder",
        description: "Compound-heavy program to force muscle growth on your slim frame. Eat BIG.",
        split: ["Full Body A", "Rest", "Full Body B", "Rest", "Full Body C", "Rest", "Rest"],
        workouts: {
          "Full Body A": [
            { name: "Barbell Squat", sets: "4", reps: "6-8", muscles: "Legs", tip: "Heavy weight, full depth." },
            { name: "Bench Press", sets: "4", reps: "6-8", muscles: "Chest", tip: "Control descent, explosive press." },
            { name: "Barbell Row", sets: "4", reps: "6-8", muscles: "Back", tip: "Row to lower chest." },
            { name: "Overhead Press", sets: "3", reps: "8", muscles: "Shoulders", tip: "Press through the ceiling." },
            { name: "Barbell Curl", sets: "3", reps: "10", muscles: "Biceps", tip: "No swinging." },
            { name: "Tricep Dips", sets: "3", reps: "10", muscles: "Triceps", tip: "Full range." }
          ],
          "Full Body B": [
            { name: "Deadlift", sets: "4", reps: "5", muscles: "Full Posterior Chain", tip: "5x5 — add weight each week." },
            { name: "Incline Dumbbell Press", sets: "4", reps: "8-10", muscles: "Upper Chest", tip: "Slow negative." },
            { name: "Pull-Ups", sets: "4", reps: "Max", muscles: "Back", tip: "Add weight when >10 reps." },
            { name: "Dumbbell Shoulder Press", sets: "3", reps: "10", muscles: "Shoulders", tip: "Elbows slightly forward." },
            { name: "Hammer Curl", sets: "3", reps: "12", muscles: "Biceps", tip: "Neutral grip." }
          ],
          "Full Body C": [
            { name: "Front Squat", sets: "4", reps: "6-8", muscles: "Quads", tip: "Elbows high." },
            { name: "Dumbbell Bench Press", sets: "4", reps: "10", muscles: "Chest", tip: "Greater stretch." },
            { name: "Cable Row", sets: "4", reps: "10", muscles: "Back", tip: "Pause at contraction." },
            { name: "Lateral Raises", sets: "4", reps: "15", muscles: "Side Delts", tip: "Slow and controlled." },
            { name: "Skull Crushers", sets: "3", reps: "10", muscles: "Triceps", tip: "Elbows locked in place." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "pullup", "row", "ohp", "rdl", "incline", "dips"]
      }
    },
    mesomorph: {
      beginner: {
        name: "Classic PPL Hypertrophy",
        description: "Push/Pull/Legs — the gold standard for muscle building with your genetics.",
        split: ["Push", "Pull", "Legs", "Rest", "Push", "Pull", "Legs"],
        workouts: {
          "Push": [
            { name: "Barbell Bench Press", sets: "4", reps: "6-10", muscles: "Chest", tip: "Progressive overload every week." },
            { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", muscles: "Upper Chest", tip: "Touch at top." },
            { name: "Overhead Press", sets: "3", reps: "8-10", muscles: "Shoulders", tip: "Stand for max recruitment." },
            { name: "Lateral Raises", sets: "4", reps: "15-20", muscles: "Side Delts", tip: "Control the negative." },
            { name: "Tricep Pushdown", sets: "3", reps: "12-15", muscles: "Triceps", tip: "Elbows pinned." },
            { name: "Overhead Tricep Extension", sets: "3", reps: "12", muscles: "Triceps Long Head", tip: "Stretch fully." }
          ],
          "Pull": [
            { name: "Weighted Pull-Ups", sets: "4", reps: "6-10", muscles: "Lats/Biceps", tip: "Add weight with belt." },
            { name: "Barbell Row", sets: "4", reps: "8-10", muscles: "Mid Back", tip: "45° torso angle." },
            { name: "Cable Row", sets: "3", reps: "12", muscles: "Back", tip: "Chest tall, pause at contraction." },
            { name: "Face Pulls", sets: "3", reps: "20", muscles: "Rear Delts/External Rotators", tip: "High pulley, pull to forehead." },
            { name: "Barbell Curl", sets: "3", reps: "10", muscles: "Biceps", tip: "Full supination at top." },
            { name: "Hammer Curl", sets: "3", reps: "12", muscles: "Brachialis", tip: "Neutral grip." }
          ],
          "Legs": [
            { name: "Barbell Squat", sets: "4", reps: "6-10", muscles: "Quads/Glutes", tip: "ATG for mobility." },
            { name: "Romanian Deadlift", sets: "4", reps: "10", muscles: "Hamstrings", tip: "Maximum hip hinge." },
            { name: "Leg Press", sets: "3", reps: "12-15", muscles: "Quads", tip: "Don't lockout knees." },
            { name: "Bulgarian Split Squat", sets: "3", reps: "10 each", muscles: "Glutes/Quads", tip: "Drop the knee low." },
            { name: "Leg Curl", sets: "3", reps: "12", muscles: "Hamstrings", tip: "Full ROM." },
            { name: "Standing Calf Raise", sets: "4", reps: "20", muscles: "Calves", tip: "Full stretch each rep." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "pullup", "row", "ohp", "rdl", "lunge", "incline", "dips"]
      }
    },
    endomorph: {
      beginner: {
        name: "Strength & Recomp",
        description: "Build muscle while managing body fat — get stronger and leaner simultaneously.",
        split: ["Upper A", "Lower A", "Rest", "Upper B", "Lower B", "HIIT", "Rest"],
        workouts: {
          "Upper A": [
            { name: "Bench Press", sets: "4", reps: "8", muscles: "Chest", tip: "5-min rest between sets." },
            { name: "Pull-Ups / Lat Pulldown", sets: "4", reps: "8", muscles: "Back", tip: "Full ROM." },
            { name: "Dumbbell Shoulder Press", sets: "3", reps: "10", muscles: "Shoulders", tip: "Seated for stability." },
            { name: "Tricep Dips", sets: "3", reps: "10", muscles: "Triceps", tip: "Controlled eccentric." },
            { name: "Barbell Curl", sets: "3", reps: "12", muscles: "Biceps", tip: "Full supination." }
          ],
          "Lower A": [
            { name: "Barbell Squat", sets: "4", reps: "8", muscles: "Quads/Glutes", tip: "Break parallel." },
            { name: "Deadlift", sets: "4", reps: "5", muscles: "Full Body", tip: "Max effort." },
            { name: "Leg Press", sets: "3", reps: "15", muscles: "Legs", tip: "Wide stance." },
            { name: "Calf Raises", sets: "4", reps: "20", muscles: "Calves", tip: "Loaded stretch." },
            { name: "Hanging Leg Raise", sets: "3", reps: "15", muscles: "Core", tip: "Slow down phase." }
          ],
          "Upper B": [
            { name: "Incline Bench Press", sets: "4", reps: "8-10", muscles: "Upper Chest", tip: "30° angle." },
            { name: "Barbell Row", sets: "4", reps: "10", muscles: "Back", tip: "Hips back, chest up." },
            { name: "Overhead Press", sets: "3", reps: "8", muscles: "Shoulders", tip: "Standing version." },
            { name: "Cable Row", sets: "3", reps: "12", muscles: "Back", tip: "Squeeze shoulder blades." },
            { name: "Lateral Raises", sets: "3", reps: "15", muscles: "Side Delts", tip: "Pinky up at top." }
          ],
          "Lower B": [
            { name: "Romanian Deadlift", sets: "4", reps: "10", muscles: "Hamstrings", tip: "Feel the hamstring stretch." },
            { name: "Walking Lunges", sets: "4", reps: "12 each", muscles: "Legs", tip: "Long stride." },
            { name: "Leg Curl", sets: "3", reps: "12", muscles: "Hamstrings", tip: "Full range." },
            { name: "Glute Bridge", sets: "4", reps: "20", muscles: "Glutes", tip: "Squeeze at the top." },
            { name: "Plank", sets: "3", reps: "45s", muscles: "Core", tip: "Full body tension." }
          ],
          "HIIT": [
            { name: "Kettlebell Swing", sets: "4", reps: "20", muscles: "Posterior Chain", tip: "Hip snap." },
            { name: "Box Jump", sets: "4", reps: "10", muscles: "Explosive Power", tip: "Land soft." },
            { name: "Rowing Machine", sets: "4", reps: "500m sprint", muscles: "Cardio/Full Body", tip: "Pull with legs, not arms." },
            { name: "Jump Rope", sets: "3", reps: "2 min", muscles: "Cardio/Coordination", tip: "Land on balls of feet." }
          ]
        },
        movements: ["squat", "deadlift", "bench", "pullup", "row", "ohp", "rdl", "lunge", "plank", "hiit"]
      }
    }
  }
};

// Default fallback program
const DEFAULT_PROGRAM = {
  name: "General Fitness Foundation",
  description: "A well-rounded program to build fitness, strength, and healthy habits.",
  split: ["Full Body", "Cardio", "Full Body", "Rest", "Full Body", "Cardio", "Rest"],
  workouts: {
    "Full Body": [
      { name: "Squat (Goblet or Barbell)", sets: "3", reps: "12", muscles: "Legs", tip: "Focus on form first." },
      { name: "Pushup or Bench Press", sets: "3", reps: "10-12", muscles: "Chest", tip: "Keep elbows 45°." },
      { name: "Dumbbell Row", sets: "3", reps: "12", muscles: "Back", tip: "Squeeze at top." },
      { name: "Overhead Press", sets: "3", reps: "10", muscles: "Shoulders", tip: "Core braced." },
      { name: "Plank", sets: "3", reps: "30-45s", muscles: "Core", tip: "Squeeze everything." },
      { name: "Hip Hinge / RDL", sets: "3", reps: "12", muscles: "Posterior Chain", tip: "Push hips back." }
    ],
    "Cardio": [
      { name: "Brisk Walk or Light Jog", sets: "1", reps: "30-40 min", muscles: "Cardio", tip: "Conversational pace." }
    ]
  },
  movements: ["squat", "bench", "row", "ohp", "plank", "rdl"]
};

const TIPS_DATA = {
  general: [
    { icon: "💧", title: "Hydration First", text: "Drink 2–3 liters of water daily. Performance drops by up to 20% with just 2% dehydration." },
    { icon: "😴", title: "Sleep = Results", text: "Muscle is built during rest, not during the workout. Aim for 7–9 hours of quality sleep every night." },
    { icon: "📈", title: "Progressive Overload", text: "Add a small amount of weight or reps each week. This is the #1 driver of muscle growth and strength gains." },
    { icon: "🥩", title: "Protein Priority", text: "Eat 1.6–2.2g of protein per kg of bodyweight daily to support muscle repair and growth." }
  ],
  lose_fat: [
    { icon: "🔥", title: "Caloric Deficit", text: "Create a 300–500 calorie daily deficit. More than that risks muscle loss. Sustainable > aggressive." },
    { icon: "🏃", title: "Cardio Timing", text: "Fasted morning cardio can help burn fat, but total daily calories matter most. Pick what you'll actually do." },
    { icon: "📊", title: "Track Your Food", text: "Use an app like MyFitnessPal for 4 weeks. Most people are shocked by how much they actually eat." }
  ],
  build_muscle: [
    { icon: "🍚", title: "Caloric Surplus", text: "Eat 250–500 calories above maintenance. Clean bulk = slower but less fat gain than a dirty bulk." },
    { icon: "⏱️", title: "Rest Between Sets", text: "Rest 2–3 minutes between heavy compound sets. Rushing reduces strength and therefore reduces gains." },
    { icon: "📷", title: "Take Progress Photos", text: "Scale weight fluctuates wildly. Monthly photos are the honest truth about what's changing." }
  ],
  tone: [
    { icon: "⚖️", title: "Slight Deficit + Training", text: "Slight caloric deficit combined with strength training is the formula for the toned look." },
    { icon: "🎯", title: "Moderate Rep Ranges", text: "8–15 reps per set hits the hypertrophy sweet spot for toning without bulk." }
  ],
  endurance: [
    { icon: "❤️", title: "Zone 2 Cardio", text: "60–70% max heart rate for 30+ minutes builds your aerobic base and fat-burning engine." },
    { icon: "📅", title: "Periodization", text: "Build base for 4 weeks, then add a harder week, then recover. Rinse and repeat." }
  ],
  strength: [
    { icon: "🏋️", title: "The Big 3", text: "Squat, Bench, Deadlift — master these and everything else follows. They're the foundation of strength." },
    { icon: "⬆️", title: "Low Reps, High Weight", text: "3–6 reps at 85–95% of your max builds raw strength most effectively. Quality over quantity." }
  ],
  general: [
    { icon: "🎮", title: "Make It Fun", text: "Pick activities you enjoy. The best workout is the one you'll actually do consistently for years." }
  ],
  teen: [
    { icon: "🦴", title: "Prioritize Form", text: "At your age, learning proper movement patterns is more valuable than chasing heavy weights. Form first, always." },
    { icon: "🌱", title: "Consistency Over Intensity", text: "Show up consistently for years. That's the real secret that no one sells." }
  ],
  senior: [
    { icon: "🤸", title: "Mobility Matters", text: "Spend 10 minutes on mobility before every session. This becomes more important with every passing decade." },
    { icon: "🩺", title: "Listen to Your Body", text: "Distinguish between productive discomfort (muscle burn) and pain (stop immediately). Recovery takes longer — honor it." }
  ]
};
