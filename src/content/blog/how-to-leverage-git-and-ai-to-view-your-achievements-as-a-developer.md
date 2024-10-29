---
title: How to Leverage Git and AI to View Your Achievements as a Developer
excerpt: Periodically assessing what you’ve accomplished can be a great motivator and help you communicate your value to teams, managers, or potential employers.
publishDate: 'Oct 29 2024'
isFeatured: true
tags:
  - Git
  - AI
  - Career Development
  - Software Development
seo:
  image:
    src: '/commit-messages.jpg'
    alt: Beautiful image of commit messages
---

![Beautiful image of commit messages](/commit-messages.jpg)

## Introduction

As developers, we often move from one task to the next without much time to reflect. But periodically assessing what you’ve accomplished can be a great motivator and help you communicate your value to teams, managers, or potential employers.
Here’s a simple approach to using your Git commit history to track your achievements over time, with the help of AI to make sense of it all.

## Step 1: Filter Your Git Logs

The first step is to look back at your commits over the past year (or a specific timeframe). Git makes it easy to search through your history by date and author. This command will give you a list of commits from the past year, authored by you:

```bash
git log --since="1 year ago" --author="your_email@example.com" --pretty=format:"%h - %an, %ar : %s"
```

Here’s a breakdown of this command:

- `--since="1 year ago"` limits results to commits from the past year.
- `--author="your_email@example.com"` filters commits to only those you made.
- `--pretty=format:"%h - %an, %ar : %s"` displays commit hash, author, relative date, and message.

Here's an example of what my logs looked like:

```
8abe2e3 - Antony Nyagah, 5 days ago : feat(dashboard/*): add link for downloading packaging list
0409dac - Antony Nyagah, 5 days ago : feat(dashboard/*): add a link for downloading delivery notes from the frontend
0c199f9 - Antony Nyagah, 5 days ago : test(api/*): update tests for document_exporter app
```

## Step 2: Export Your Commit Log

For easier analysis, you can export your commit history to a text file:

```bash
git log --since="1 year ago" --author="your_email@example.com" --pretty=format:"%h - %an, %ar : %s" > commit_log.txt
```

## Step 3: Leverage AI for a Detailed Analysis

After exporting the commit log, I pasted the commits into ChatGPT to get a detailed summary and insights into the types of tasks I’ve accomplished. This helped me uncover trends and group my work into categories like:

- Infrastructure & CI/CD Enhancements
- Frontend Development & Refactoring
- Backend API Development & Maintenance
- Database and Data Handling Improvements
- Testing and Code Quality
- Documentation & Project Management

ChatGPT’s analysis made it easy to see where I added value and what skills I honed over the past year, even bringing out details I might have overlooked. By using AI this way, you can turn your commit log into a meaningful narrative about your contributions.

## Step 4: Keeping Commit Messages Meaningful

To make sure my commit messages are succinct and relevant, I personally use [Commitizen](https://commitizen-tools.github.io/commitizen/). This tool helps maintain consistency by following a commit message convention that describes the "why" and "what" of each change.

Meaningful commit messages make logs easier to review, and there are other specifications and tools like [Conventional Commits](https://www.conventionalcommits.org/) and [Husky](https://typicode.github.io/husky/) that can also keep your commit history clean and purposeful.

## Step 5: Summarize and Reflect

Reviewing your contributions with AI insights can be both motivating and insightful. Write a brief summary for each category. This can serve as a reference for future performance reviews, portfolio updates, or simply as a reminder of your growth as a developer.

## Final Thoughts

Using Git as a reflection tool is quick but effective. And with the added support of AI, you can see the big picture more clearly, connecting technical achievements with your overall development. Keep this record for yourself or share it in your performance reviews or job applications.
