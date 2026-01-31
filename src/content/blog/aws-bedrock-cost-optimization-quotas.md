---
title: "The Hidden Costs of AI: How to Prevent 'Token Shock' in AWS Bedrock"
date: "2026-02-04"
description: "GenAI is cheap on Day 1 and expensive on Day 30. How to implement quotas and cost governance using APIGW throttling."
tags: ["CostOptimization", "AWSBedrock", "Governance", "FinOps"]
slug: "aws-bedrock-cost-optimization-quotas"
---

## The "Day 30" Surprise

GenAI pilots are deceptively cheap. You run a few hundred prompts, check the bill, and it’s $0.50. "Scale it!" you say.

Then a developer writes a loop, or a user uploads a 50-page PDF for summarization 100 times a day.

Day 30 arrives. The bill is $5,000. This is **Token Shock**.

## Architecture for Cost Governance

You cannot rely on "trusting" users to be efficient. You need enforcement.

### 1. API Gateway Usage Plans

Never expose the Lambda/Bedrock endpoint directly. Front it with Amazon API Gateway.
Use **Usage Plans** and **API Keys** (internal identifiers, not auth secrets) to assign quotas.
*   "Free Tier" Users: 1,000 requests/month.
*   "Power" Users: 10,000 requests/month.

When the quota hits, they get a `429 Too Many Requests`. The wallet is safe.

### 2. Throttling at the Source

Implement rate limiting (Burst/Steady) to prevent a runaway loop from draining your budget in an hour.

### 3. AWS Budgets & Anomaly Detection

Set up an AWS Budget specifically for the `Bedrock` service label. Configure an alert to email the Engineering Manager if forecasted spend exceeds 110% of the budget.

## Bedrock vs. Provisioned Throughput

For most Fintech use cases, **On-Demand** (pay per token) is cheaper than **Provisioned Throughput** (renting GPUs) until you hit massive scale. Don't let an AWS sales rep talk you into Provisioned Throughput unless you have the math to prove utilization.

## The Bottom Line

Innovation requires runway. If you burn your entire year's AI budget in Q1 because of a recursive loop, you aren't innovating; you're failing.

**Govern your tokens like you govern your cash.**
