---
title: "The Death of .env Files: Automated Secret Rotation with Terraform"
date: "2026-02-12"
description: "Hardcoded secrets in CI/CD variables are a compliance failure. Walk through the architecture of using AWS Secrets Manager with automatic rotation."
tags: ["SecretsManager", "Security", "Terraform", "Automation", "Compliance"]
slug: "automated-secret-rotation-aws-secrets-manager"
---

## The ".env" Trap

I audit codebases where the database password is hardcoded in `k8s-deployment.yaml`. Or slightly better, it's a "Checked Secret" in GitHub Actions.

**If your developers can read the database password, you've already failed.**
People leave companies. Laptops get stolen. Static secrets are leaked secrets.

## The Compliance Requirement: Rotation

SOC2 and PCI-DSS don't just ask for encryption; they ask for **Rotation**.
"How often do you rotate your database credentials?"
If the answer is "When we remember," you fail.

## The Architecture: AWS Secrets Manager

We use Terraform to continuously enforce a "No Humans Allowed" policy for secrets.

1.  **Creation:** Terraform creates the RDS instance and a random password. It immediately stores this in AWS Secrets Manager. *It is never output to the console.*
2.  **Injection:** The ECS Task Definition references the Secret ARN. The container runtime injects the value as an environment variable at startup.
3.  **Rotation:** We enable "Automatic Rotation" using the AWS-provided Lambda rotator. Every 30 days, AWS generates a new password, updates the DB, and updates the Secret.

## The Result

The application always has valid credentials. The developers *never* know what they are.
If a developer leaves the company, you don't need to scramble to change passwords. They never had them.

## The Bottom Line

A `.env` file is a relic of local development. In a regulated cloud, secrets are ephemeral.

**Static secrets are leaked secrets. Rotate them.**
