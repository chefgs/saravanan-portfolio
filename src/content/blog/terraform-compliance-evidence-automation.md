---
title: "Terraform is Your Auditor's Best Friend: Automating Evidence Collection"
date: "2026-02-05"
description: "How to use Infrastructure-as-Code to prove Immutability and Traceability for ISO audits."
tags: ["Terraform", "IaC", "Compliance", "ISO", "Audit"]
slug: "terraform-compliance-evidence-automation"
---

## The Audit Nightmare

I’ve sat in audit rooms where the auditor says, "Show me that port 22 is closed on your database."

The bad response: The Admin logs into the AWS Console, clicks around, finds a Security Group, and takes a screenshot.
This is **manual**, **mutable**, and **useless** for proving historical compliance.

## Terraform as Evidence

 Infrastructure-as-Code (IaC) isn't just about deployment speed. It is your **Compliance Ledger**.

When you use Terraform, your `git log` becomes your audit trail.

*   **Who changed the firewall?** `git blame`.
*   **When was it changed?** Commit timestamp.
*   **Who approved it?** GitHub Pull Reviewer.
*   **What was the state?** The `terraform.lock.hcl`.

## Implementing "Compliance-as-Code"

1.  **Block Manual Access:** Use SCPs (Service Control Policies) to DENY `ec2:AuthorizeSecurityGroupIngress` for everyone except the CI/CD Role.
2.  **Tagging Policies:** Enforce tags like `ComplianceScope=PCI` or `DataClassification=Confidential` using Terraform variables.
3.  **Sentinel/OPA Policies:** Run policy checks *before* the apply. "If a Security Group allows 0.0.0.0/0, fail the build."

## The "Artifact" Strategy

Don't give auditors login access. Give them a generated report from your Terraform plan.

`terraform plan -out=tfplan`
`terraform show -json tfplan > evidence.json`

This JSON file is a cryptographic proof of your infrastructure state at a point in time.

## The Bottom Line

Stop treating audits as a fire drill. If you are building correctly with declarative IaC, the audit should just be a `git export`.

**Your code is your evidence.**
