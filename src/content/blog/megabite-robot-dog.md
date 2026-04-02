---
title: "Meet Megabite: A PLC-Controlled Robot Dog Built with GOPLC and Parallax P2"
description: "A desk-sized robot dog avatar with OLED eyes, servo-driven ears, head tilt, and tail — all controlled by GOPLC Structured Text code generated entirely through AI and natural language."
date: 2026-04-01
tags: ["GOPLC", "Parallax P2", "Robotics", "AI", "MCP", "video"]
---

Meet Megabite — a desk-sized robot dog avatar controlled entirely by a PLC runtime. Built from laser-cut wood (designed with Grok xAI Imagine), powered by a Parallax P2 Edge board, and brought to life with GOPLC Structured Text that was 100% generated using MCP tools and natural language.

<div style="position: relative; padding-bottom: 177.78%; height: 0; overflow: hidden; margin: 2rem auto; max-width: 360px;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/hxJ3VOZ3-m0" title="Megabite - PLC-Controlled Robot Dog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## The Hardware

- **Brain**: Parallax P2 Edge microcontroller running firmware loaded by GOPLC over USB
- **Eyes**: Two 0.96" OLED displays driven via I2C — capable of independent eye movement, looking around, and blinking
- **Servos**: Four standard servos controlling ears (2), head tilt (1), and tail (1)
- **Body**: Laser-cut wood frame designed using Grok xAI Imagine as a visual reference
- **Sound**: DFPlayer Mini for audio playback via UART

## The Software

The entire Structured Text program was generated using GOPLC's MCP (Model Context Protocol) server integration with Claude. No manual PLC code was written — the full program including hardware initialization, servo control, eye animations, and idle behaviors was produced through natural language conversation.

The MCP tools handle:

- **Serial discovery** and P2 initialization
- **I2C eye controller** setup and animation commands
- **PWM servo configuration** at 50Hz with smooth movement
- **UART sound playback** via DFPlayer Mini protocol
- **Idle behavior logic** — random eye movements, periodic blinking, and subconscious ear twitches that make Megabite feel alive

## Why a PLC Runtime for a Robot Dog?

This is a demonstration of GOPLC's flexibility. The same runtime that manages industrial water treatment plants and datacenter infrastructure can drive a desk toy — because the scan-cycle architecture, hardware abstraction, and protocol drivers work at any scale.

The P2 Edge board communicates with GOPLC over USB serial using a custom binary protocol. GOPLC treats it like any other I/O device — cyclic exchange at millisecond rates, with the PLC program controlling behavior through standard Structured Text logic.

## AI-Generated PLC Code

The most significant aspect of this project isn't the hardware — it's that every line of PLC code was generated through natural language. The workflow:

1. Describe the desired behavior in English
2. GOPLC's MCP server provides the AI with the full function registry and hardware context
3. The AI generates valid Structured Text using verified function signatures
4. Code is validated and deployed to the running PLC — hot-swapped without restart

This is what AI-assisted industrial automation looks like in practice. Not replacing the engineer — augmenting them. The engineer describes intent. The AI handles syntax.
