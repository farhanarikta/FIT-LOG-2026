# FitLog

FitLog is a workout library and training planner built with Next.js. Users can explore workouts, view workout details, add workouts to today's plan, save workouts for later, and track completed workouts.

## Features

- Browse workout library
- Sort workouts by duration, calories, and rating
- View detailed workout information
- Add workouts to Today's Plan
- Save workouts for later
- Mark workouts as completed
- Remove workouts from the plan or saved list
- Data persists using localStorage
- Toast notifications for user actions
- Responsive design for desktop, tablet, and mobile
- Custom 404 page

## Technologies

- Next.js
- React
- JavaScript
- Tailwind CSS
- Context API
- REST API
- localStorage

## API

Workout data is provided by:

https://api.abcz.workers.dev/api/fitlog

## Getting Started

Install dependencies:

```bash
npm install
Run the development server:

npm run dev

Open http://localhost:3000 in your browser.

Project Structure
src/app - Pages and routes
src/components - Reusable UI components
src/context - Plan and saved workout state management
public/images - Project images
Author

Built as part of Programming Hero Assignment 6.