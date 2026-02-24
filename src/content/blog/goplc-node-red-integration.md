---
title: "GOPLC + Node-RED - Building Dashboards and Data Flows"
description: "How GOPLC integrates Node-RED as a managed subprocess for building operator dashboards and connecting to external systems."
date: 2026-02-15
tags: ["GOPLC", "Node-RED", "dashboards", "video"]
---

GOPLC manages Node-RED as an integrated subprocess, providing a powerful combination of PLC control logic and visual data flow programming. These demos show the integration in action.

## Demo 1: Basic Integration

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/dVYpVslmxfc" title="GOPLC NodeRed Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Demo 2: Advanced Dashboards

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/wnhVTQ0xK6E" title="GOPLC NodeRed Demo2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## How It Works

GOPLC handles Node-RED's entire lifecycle automatically:

1. **Auto-install** - Node-RED and Dashboard 2.0 are installed on first run
2. **Managed process** - GOPLC starts, stops, and monitors Node-RED as a subprocess
3. **Reverse proxy** - Node-RED is accessible through the GOPLC web interface
4. **Custom PLC nodes** - Seven purpose-built nodes for reading/writing PLC variables
5. **AI flow generation** - Natural language descriptions can generate complete Node-RED flows

## Why Node-RED?

Node-RED provides what Structured Text doesn't - visual data flow programming, easy dashboard creation, and hundreds of community nodes for connecting to databases, APIs, MQTT, and cloud services. By managing it as a subprocess, GOPLC gives you the best of both worlds without the complexity of maintaining separate systems.
