---
title: "Killing the Bastion Host: Zero-Trust Access Patterns for Fintech"
date: "2026-02-06"
description: "Why SSH keys are a liability. Using AWS SSM Session Manager and identity-based access for compliant operations."
tags: ["ZeroTrust", "AWSSSM", "Security", "Fintech"]
slug: "zero-trust-access-fintech-aws-ssm"
---

## SSH is Legacy Debt

For decades, the standard pattern was:
1.  Launch a "Bastion Host" (Jump Box) in a public subnet.
2.  Distribute `.pem` keys to engineers.
3.  Whitelist the engineer's home IP (which changes daily).

This is a security nightmare. Keys get lost. Keys get copied. And once you are in the Bastion, you are often one hop away from the crown jewels.

## The Zero-Trust Alternative: AWS SSM Session Manager

I strictly forbid Bastion Hosts in my architectures. Instead, we use **AWS Systems Manager (SSM) Session Manager**.

### How it Works:

1.  **The Agent:** The SSM Agent runs on your EC2 instances (it's pre-installed on Amazon Linux 2/2023).
2.  **No Inbound Ports:** You close Port 22. Entirely. The instance creates an *outbound* handshake to the AWS SSM Control Plane.
3.  **Authentication:** The developer authenticates to AWS (via IAM Role/SSO).
4.  **Connection:** `aws ssm start-session --target i-12345`.

## The Compliance Wins

*   **No Keys:** There are no SSH keys to manage or rotate. Access is granted via ephemeral IAM credentials.
*   **Full Recording:** Every command typed ("sudo rm -rf /") is logged to CloudWatch Logs and S3. You have a full replayable session history for the auditor.
*   **RBAC:** You can say "Junior Devs can session into Web Servers, but only Senior Architects can session into Database Jumpers."

## The Bottom Line

A Bastion host is just a door waiting to be kicked in. AWS SSM is a teleportation device authenticated by your corporate identity.

**Identity-based access is the new standard.**
