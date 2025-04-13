---
title: "What Really Matter in AI Code Assistants"
date: "2025-04-13"
tags: ["ai", "llm", "code"]
image: "/blog/Dive.png"
---

Currently, GPT (Generative Pre-trained Transformers) dominates the news with all sorts of unrealistic promises, much like we've seen with other recent technologies. Whether it's quantum computing or DLTs (commonly known as blockchains), solutions often emerge that don’t hold up under peer scrutiny. This post aims to clarify some pros and cons of the most widespread artificial intelligence technology today.

![deep diving into code{.float-left}](/blog/Dive.png)

I’ll focus on the current state of affairs. If any points change in the future due to a genuinely functional solution, I may revisit them in another text. What I describe below are the limiting factors of the technology that prevent major evolutionary leaps in current LLMs (Large Language Models). This text also takes a programming perspective, so it doesn’t apply to image generation, audio processing, or general text writing.

### **Problematic Grounds**

Here, I’ll list some limitations of current models and try to explain in a didactic way why some obstacles are hard to overcome.

#### **Size of the Context Issues**

The context size an LLM can use is limited. Even a massive context, like ChatGPT’s current 32k tokens, struggles to process the codebase of a medium-sized system, which can easily exceed the current context limit. When this happens, the AI may assume that a missing code block doesn’t exist or even mistakenly remove connections to functions not present in the context.

There are currently some techniques to expand context size, such as using external memory or models with reasoning capabilities. However, in practice, they don’t solve 100% of the problems caused by context limitations, which I’ll discuss next.

#### **Ghost Function Hallucinations**

I’d like to mention something obvious but easily overlooked: LLMs don’t truly reason—at least not the way humans do. Although these models are non-deterministic (i.e., the same input doesn’t always produce the same output), that doesn’t mean they possess real reasoning.

Given this, feeding vast amounts of information into these models doesn’t guarantee genuine understanding of code nuances. The AI’s decisions are based on the input context plus its training data. Even if you instruct the assistant to use a specific approach, there’s no guarantee it will fully comply.

A common issue here is **ghost functions**—functions that never existed in the context but might have appeared in the model’s training data. These aren’t the most severe cases, as IDEs and compilers will flag them. However, in interpreted languages, this check might not happen immediately, and the error may only surface when the function call is executed.

#### **Code Duplication**

Another frequent problem—one that doesn’t always cause errors but complicates maintenance—is the duplication of lines and functions. When trimming the context, if a called function isn’t included, the AI, unable to find its declaration, may reimplement it. This leads to redundant code, creating a nightmare when one of these duplicates fails. A programmer might fix the wrong instance, leaving the error unresolved.

This is why, when using reasoning models for programming, the initial codebase may seem intact. But as the code grows, such issues multiply. Even for simple feature requests, developers must review every AI-generated line to spot and remove these duplications.

#### **Bug Obfuscation**

This might be the biggest issue with AI-generated code. It’s less about context limitations and more about the non-deterministic nature of LLMs and their training data. Since these models generate new characters and tokens with slight variations due to their vast training datasets, small code snippets may be based on different implementations with the same goal. This can introduce not just bugs, but ones that *appear* correct—escaping human review, compilation checks, and even unit tests.

Such code may fail only under very specific conditions, running flawlessly for months before triggering an error. Worse, when the issue arises, human developers may struggle to diagnose it.

### **Where AI Excels**

All the problems above are major hurdles for current LLMs in system programming. Expanding context increases training time, maintenance difficulty, and costs. That said, here are some areas where current AI already significantly aids developers.

#### **Code Prediction**

Code prediction assists developers by suggesting small snippets—whether a single line or a block—based on what’s being typed. Since programming involves repetitive patterns and shared problem-solving techniques, LLMs don’t always need the full context. For example, if you call a function returning an array, the AI might predict and auto-complete a `for` loop to iterate over it. This boosts productivity without requiring heavy resources.

#### **Repetitive Tasks**

A prime example here is unit tests, which often require repetitive routines with minor variations to cover all code branches. LLMs excel here because they don’t need deep code understanding—just function signatures. This works even better with typed languages, where the AI can infer necessary validations from return types. While human review is still needed to confirm test coverage, the success rate tends to be high since it relies on common sense rather than complex problem-solving.

#### **Syntax Memorization**

Experienced developers know how to query AIs for solutions or simple snippets. While their output isn’t foolproof for complex tasks, LLMs eliminate syntax barriers when switching languages. Instead of reading entire documentation, developers can ask the AI to generate code in natural language. This lets them dive into coding faster, reserving deeper study for later.

#### **Language Best Practices**

Continuing from language migration: LLMs handle common-sense elements well, and best practices are widely documented in blogs, posts, and official docs. Developers can ask for better approaches to improve performance, readability, or maintenance. This is invaluable for optimizing applications or refactoring legacy code.

### **Conclusion**

Current AI assistants and agents are incredible tools for both new and senior programmers. They can be configured to be non-intrusive and used at different project stages to maximize efficiency in maintenance and refactoring. New solutions emerge constantly, but it’s still unclear whether these systems’ weaknesses will ever be fully resolved. Researchers and enthusiasts will keep seeking better approaches, but for now, developers should rely on tools and techniques proven functional by their peers.

### **References**

[AI Blindspots](https://ezyang.github.io/ai-blindspots/) - Edward Z. Yang's research on limitations and blind spots in current AI systems.

[Hallucinations in code are the least dangerous form of LLM mistakes](https://simonwillison.net/2025/Mar/2/hallucinations-in-code/) - Simon Willison's analysis of why code hallucinations may be less problematic than other AI errors.

[Is AI the new research scientist? Not so, according to a human-led study](https://news.warrington.ufl.edu/faculty-and-research/ai-research-scientist/) - University of Florida study examining AI's limitations in scientific research contexts.

[The impending disruption of creative industries by generative AI: Opportunities, challenges, and research agenda](https://www.sciencedirect.com/science/article/abs/pii/S0268401224000070) - Academic research on how generative AI is transforming creative industries with analysis of both opportunities and challenges.
