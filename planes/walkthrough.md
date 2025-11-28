# Walkthrough - Add Exercises Button

I have added an "Ejercicios" button to the topic detail view, which allows users to navigate to the solved exercises for specific topics.

## Changes

### Views

#### [TopicDetail.vue](file:///c:/Users/pedro/Downloads/proyecto-fisica/Fisica/src/views/TopicDetail.vue)

- Added an "Ejercicios" button next to the "Regresar" button.
- The button is conditionally rendered using `v-if="topic.title === 'Velocidad Instantánea'"`.
- Added `goToExercises` method to navigate to the `SolvedExercises` route.

## Verification Results

### Manual Verification

- Verified the button code is present and correctly positioned.
- Verified the condition restricts the button to the correct topic.
- Verified the navigation logic pushes the correct route with parameters.
