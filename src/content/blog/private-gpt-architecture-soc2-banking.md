---
title: "The Anatomy of a Private GPT: Architecting for SOC2 in Banking"
date: "2026-02-01"
description: "Why public chatbots fail audits. A deep dive into your AWS Bedrock + VPC Endpoint + Private Subnet topology."
tags: ["PrivateGPT", "Architecture", "SOC2", "AWS", "Fintech"]
slug: "private-gpt-architecture-soc2-banking"
---

## The "ChatGPT Team" Account Will Fail Your SOC2 Audit

If you are a CTO at a Fintech or a Bank, you've likely had this conversation. Marketing wants "AI," developers want "speed," and your CISO is currently hyperventilating in the corner.

The problem isn't the model. It's the **data path**.

When your developers use the standard OpenAI API or even a "Team" account, your customer PII is traversing the public internet. It might be encrypted in transit, but it leaves your VPC. For a regulated entity, that is a finding.

## The Architecture of "No Egress"

I build "Private GPT" stacks that pass audits because they adhere to a simple rule: **Data never touches the public internet.**

Here is the topology that saves your audit:

1.  **Private Subnets Only:** Your application logic (Lambda or Fargate) lives in a private subnet with NO Route Table entry to an Internet Gateway. No NAT Gateway. Total isolation.
2.  **AWS PrivateLink:** You access AWS services (Bedrock, S3, DynamoDB) exclusively via **VPC Interface Endpoints**. This keeps traffic entirely within the AWS backbone.
3.  **Bedrock as the Sovereign Model:** Unlike calling an external API, Bedrock models are invoked within your AWS account boundary. When you turn off "Model Data Sharing," your prompts are not used for training.

## The Stack

*   **Compute:** AWS Lambda (Node.js/Python) inside a VPC.
*   **Model:** AWS Bedrock (Claude 3.5 Sonnet or Llama 3).
*   **Vector DB:** RDS PostgreSQL (pgvector) or OpenSearch Serverless (Hydrated via Private Endpoint).
*   **Auth:** Amazon Cognito (with MFA enforced).
*   **Orchestration:** LangChain (running locally in Lambda, not reaching out).

## The Bottom Line

Complexity is a liability. You don't need a Kubernetes cluster to run a chatbot. You need a secure pipe. By removing the Internet Gateway, you remove the attack surface.

**Your auditors don't care about your prompt engineering. They care about your network topology.**
