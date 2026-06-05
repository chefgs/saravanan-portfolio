---
title: "Deploy on Friday: The ECS Blue/Green Safety Net"
date: "2026-02-13"
description: "Compliance requires availability. Explain how to set up AWS CodeDeploy with ECS Fargate to perform safe, traffic-shifted deployments."
tags: ["ECS", "Fargate", "CodeDeploy", "BlueGreen", "DevOps"]
slug: "ecs-fargate-blue-green-codedeploy"
---

## The "Deployment Terror"

In many organizations, deployments are terrifying events. "Don't deploy on Friday!" is the mantra.
Why? Because they are doing "Rolling Updates" or worse, "In-Place Updates." If the new code crashes, the service goes down.

## Availability is a Compliance Metric

For a bank, downtime isn't just an annoyance; it's a regulatory report. "Five Nines" (99.999%) is the target.
You cannot hit 99.999% if every bad deployment causes 10 minutes of outage.

## The Fix: AWS CodeDeploy + ECS Blue/Green

I architect deployments using the **Blue/Green** pattern on ECS Fargate.

1.  **Green Fleet:** AWS provisions a full replacement set of containers (the Green fleet) alongside the old ones (Blue).
2.  **Test Traffic:** The Load Balancer routes test traffic (on a different port) to Green. Automated Lambda hooks run integration tests.
3.  **The Shift:** If tests pass, CodeDeploy shifts production traffic **gradually** (e.g., "Canary 10% for 5 mins").
4.  **The Safety Net:** If *any* CloudWatch Alarm fires (e.g., Error Rate > 1%), CodeDeploy **instantly rolls back** to Blue. No human intervention required.

## The Result

Deploying becomes boring. You push code. If it's broken, the system rejects it before users notice. If it works, it slides in.
You can deploy on Friday at 4:55 PM and go home.

## The Bottom Line

Heroism is a sign of a failed process. The best deployments are the ones nobody notices.

**Zero downtime is a compliance requirement, not a luxury.**
