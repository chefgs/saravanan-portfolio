---
title: "Identity is the New Perimeter: Integrating Cognito with Private AI Workloads"
date: "2026-02-10"
description: "How to ensure that only the right employee can access the right LLM model using strict IAM and Cognito claims."
tags: ["Cognito", "IAM", "PrivateAI", "Security", "RBAC"]
slug: "cognito-iam-private-ai-access"
---

## Firewalls Are Not Enough

In the old days, if you were on the VPN, you were trusted.

In the age of AI, that is dangerous. You don't want the intern querying the "HR Policy Bot" about executive salaries. You don't want the marketing team prompting the "Engineering Codebase Bot" to fix a bug.

**Identity is the only wall left.**

## Identity-Aware AI

We need granular Role-Based Access Control (RBAC) for our LLMs.

1.  **Authentication:** Amazon Cognito handles the login (federated with your Corporate AD/Okta).
2.  **Claims:** The ID Token carries claims: `department: HR`, `level: senior`.
3.  **Authorization:** The Application Logic (Lambda/LangChain) inspects these claims *before* invoking the model.

## The Architecture

User -> Cognito (Get Token) -> API Gateway (Validate Token) -> Lambda (Read Claims) -> "If Department == HR" -> Invoke Bedrock KnowledgeBase "HR-Docs".

## Fine-Grained Audits

Because every request is tied to a verified identity, your logs tells a story:
"User `alice@bank.com` (HR) queried `salary_bands` at 10:00 AM."

This is audit gold.

## The Bottom Line

Don't just build a "Company Chatbot." Build a collection of secure, role-gated assistants.

**Your AI should know who is talking to it.**
