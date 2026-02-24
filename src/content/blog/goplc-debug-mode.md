---
title: "GOPLC Debug Mode - Statement-Level PLC Debugging"
description: "A deep look at GOPLC's statement-level debugger with breakpoints, call stacks, and variable inspection - all from the browser."
date: 2026-02-12
tags: ["GOPLC", "debugging", "IDE", "video"]
---

Traditional PLCs offer limited debugging - maybe online monitoring of variable values. GOPLC brings modern software debugging to industrial control with a full statement-level debugger running in the browser.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/vO16D4oMQJY" title="GoPLC Debug Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Debug Features

GOPLC's debugger includes capabilities you'd normally only find in software IDEs:

- **Breakpoints** - Set breakpoints on any line of Structured Text code
- **Step execution** - Step through code one statement at a time
- **Variable inspection** - View and modify variable values in real time
- **Call stack** - See the full execution path through function calls
- **Multi-task awareness** - Debug across multiple concurrent PLC tasks
- **WebSocket updates** - Live variable values streamed to the browser

## The Monaco Editor

The web IDE is built on Microsoft's Monaco editor (the same engine behind VS Code), with custom IEC 61131-3 syntax highlighting. This means you get familiar editing features like:

- Autocomplete for PLC functions and variables
- Syntax error highlighting
- Find and replace with regex
- Code folding
- Multi-cursor editing

All running in a standard web browser - no software installation required.
