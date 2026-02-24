---
title: "GOPLC HMI Demo - Built-In Operator Interface"
description: "A quick demo of GOPLC's built-in HMI capabilities showing three independent tasks with different scan rates, counters, and start/stop controls."
date: 2026-02-20
tags: ["GOPLC", "HMI", "video"]
---

A simple demo of the built-in HMI capabilities in GOPLC. No separate HMI software needed - the operator interface runs directly from the PLC runtime in a web browser.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/2BMwAaTl1xo" title="GOPLC simple HMI demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What's in the Demo

The video shows three PLC tasks running simultaneously in GOPLC, each configured with:

- **Different scan rates** - Each task executes at its own cycle time
- **Independent counters** - Each task maintains its own count value
- **Start/Stop controls** - Each task can be started and stopped independently
- **Reset function** - Counters can be reset individually

This demonstrates a key concept in GOPLC: **multi-task execution**. Unlike simple PLCs that run a single program loop, GOPLC supports multiple concurrent tasks at different priorities and scan rates - from 100 microseconds up to hours.

## Why Built-In HMI Matters

In a traditional setup, you'd need:
1. PLC programming software to write the logic
2. Separate HMI/SCADA software to build the operator interface
3. A communication driver to link them together

GOPLC eliminates steps 2 and 3. The HMI is built into the runtime and served over the web. Open a browser, point it at the PLC, and you have your operator interface. No additional licenses, no driver configuration, no separate engineering tool.

This is especially useful for:
- **Quick commissioning** - Get a working interface up in minutes
- **Remote monitoring** - Access from any device with a browser
- **Small systems** - Where a full SCADA package is overkill
- **Prototyping** - Build and test interfaces alongside your control logic
