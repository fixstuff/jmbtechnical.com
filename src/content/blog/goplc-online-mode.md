---
title: "GOPLC Online Mode - Live Variable Monitoring"
description: "Demonstrating GOPLC's online mode for real-time variable monitoring and live value inspection during PLC execution."
date: 2026-02-10
tags: ["GOPLC", "monitoring", "IDE", "video"]
---

Online mode is one of the most-used features in any PLC environment. GOPLC's implementation streams live variable values directly to the browser via WebSocket, giving you real-time visibility into running programs.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/Sdb1rMul7Mg" title="GoPLC Online Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What Online Mode Provides

When you enter online mode in the GOPLC web IDE:

- **Live values** appear inline next to variable declarations and assignments
- **Data types** are color-coded for quick identification
- **Arrays and structures** can be expanded to inspect individual elements
- **Update rate** is configurable to balance between detail and performance
- **Multiple users** can monitor simultaneously from different browsers

## Compared to Traditional PLCs

In a traditional Rockwell or Siemens environment, online monitoring requires the vendor's engineering software (Studio 5000, TIA Portal) installed on a specific workstation. GOPLC's web-based approach means anyone with network access and a browser can monitor the running system - from a tablet on the plant floor to a laptop in the control room.
