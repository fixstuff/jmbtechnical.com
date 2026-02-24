---
title: "AI-Powered PLC Programming with GOPLC"
description: "GOPLC integrates Claude, OpenAI, and Ollama to generate IEC 61131-3 Structured Text code from natural language descriptions."
date: 2026-02-08
tags: ["GOPLC", "AI", "Structured Text", "video"]
---

One of GOPLC's more forward-looking features is AI-assisted code generation. By integrating with Claude, OpenAI, and local Ollama models, GOPLC can generate working Structured Text code from natural language descriptions.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 2rem 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" src="https://www.youtube-nocookie.com/embed/N2t-iAHdrvc" title="GOPLC AI code writing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## How It Works

GOPLC provides the AI model with the full function registry as context - all 1,450+ built-in functions with their signatures and descriptions. This means the AI generates code that actually works with your specific runtime, not generic IEC 61131-3 that might reference functions that don't exist.

The workflow:

1. **Describe** what you want in plain English
2. **Generate** - the AI produces Structured Text code using available functions
3. **Review** the generated code in the Monaco editor
4. **Deploy** directly to a running task

## Supported AI Providers

- **Claude** (Anthropic) - Best for complex logic and understanding industrial context
- **OpenAI** (GPT-4) - Strong general-purpose code generation
- **Ollama** (Local) - Run models locally for air-gapped environments with no cloud dependency

## Beyond Code Generation

GOPLC also features an **agentic control loop** where AI can operate the PLC directly through 12 built-in tools - reading sensors, writing setpoints, deploying programs, and managing tasks in multi-turn conversations without human code review. This opens up possibilities for autonomous process optimization and adaptive control strategies.
