---
title: "GOPLC Boss/Minion Clustering - Scalable PLC Architecture"
description: "Demonstrating GOPLC's Boss/Minion clustering architecture with view switching across distributed PLC instances."
date: 2026-02-18
tags: ["GOPLC", "clustering", "video"]
---

GOPLC's Boss/Minion architecture enables scaling from a single PLC instance to thousands of coordinated controllers. This video demonstrates the view switching capability across a clustered deployment.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/VKavnWHM4H8" title="GoPLC Boss Minion ViewSwitching" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Boss/Minion Architecture

The clustering model works like this:

- **Boss** - The central coordinator that manages configuration, monitoring, and provides the unified web interface
- **Minions** - Individual PLC runtime instances that execute control logic independently

The Boss can monitor and manage all Minions from a single interface, with the ability to switch views between different Minion instances in real time. This has been tested at scale with **10,000+ concurrent PLC instances** and over **620,000 scans per second** across 31 Minion nodes.

## Use Cases

This architecture is particularly useful for:

- **Data center management** - One PLC per rack or zone, all coordinated centrally
- **Water treatment plants** - Distributed control across pump stations and treatment stages
- **Large manufacturing facilities** - Independent machine controllers reporting to a central system
- **Simulation environments** - Spinning up hundreds of virtual PLCs for testing
