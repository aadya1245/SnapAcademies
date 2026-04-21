# Rotation Index

A polished catalog website built for the Snap Engineering Academy project assessment. The site organizes a self-curated set of albums into an interactive catalog with searchable, filterable, sortable data and a save feature that updates the displayed results.

## Live Project Focus

This project is centered around a topic I genuinely care about: albums that shaped my listening habits. Instead of treating the catalog like a plain list, I designed it like a music moodboard so the data feels personal and easy to explore.

## Features

- Search by album title, artist, standout track, or tags
- Filter by genre
- Filter by mood
- Sort by rating, year, runtime, or title
- Save albums into a shortlist and view only saved items
- Spotlight panel that updates based on the current results
- Responsive card layout for desktop and mobile

## Data Structure

The data lives at the top of [scripts.js](./scripts.js) as an array of objects. Each album includes:

- `title`
- `artist`
- `year`
- `genre`
- `mood`
- `rating`
- `runtime`
- `standoutTrack`
- `note`
- `tags`
- `colors`
- `saved`

This made it straightforward to demonstrate arrays, objects, filtering, searching, sorting, and updating displayed data.

## Design Direction

I wanted the visual design to feel more editorial than template-based, so I used:

- a large serif headline for personality
- soft layered backgrounds instead of a flat page color
- gradient album panels to make each entry feel distinct
- strong spacing and card shadows to keep the page polished

## Data Source

This is a manually curated data set based on albums I personally wanted to catalog, rather than a fetched API or pre-built external app. Album cover image URLs are referenced from public Wikipedia/Wikimedia album-art thumbnails inside `scripts.js`. I also reviewed public student-friendly dataset references while planning, including the CORGIS dataset collection and the Snap starter repository.

## Helpful Links

- SEA starter repository: https://github.com/Snap-Engineering-Academy-2026/stage-2-SEA-Project
- CORGIS datasets: https://corgis-edu.github.io/corgis/
- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart

## Running Locally

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Interact with the filters, sorting controls, and save buttons on the front page.

## Submission Notes

Before submitting:

- publish the repository with GitHub Pages
- verify the live link works on another device
- add your repository URL, published site URL, and Loom recording link to the submission form
