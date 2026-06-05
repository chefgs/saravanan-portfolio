---
title: "Supply Chain Security in GitHub Actions: Stopping the Next SolarWinds"
date: "2026-02-09"
description: "Leveraging your GitHub expertise. Using SBOMs and signed commits to guarantee code provenance."
tags: ["GitHubActions", "Security", "SBOM", "SupplyChain"]
slug: "github-actions-supply-chain-security-sbom"
---

## Trust Nothing

The SolarWinds hack taught us one thing: **Your code might be secure, but your build pipeline is vulnerable.**

If an attacker injects malicious code during the build process, or if you pull a compromised `npm` package, you are shipping malware signed with your own certificate.

## The Defense Strategy

1.  **Signed Commits:** enforce GPG signing for all commits. If it's not signed, it doesn't merge. This proves *who* wrote the code.
2.  **Dependency Pinning:** Never use `latest`. Validated hashes only.
3.  **SBOM Generation:** producing a Software Bill of Materials (SBOM) using tools like **Syft**. This lists every library inside your container.
4.  **Vulnerability Scanning:** Scanning that SBOM with **Grype** or Trivy during the CI pipeline. Blocks the build if a High CVE is found.

## Artifact Integrity

Finally, sign your container images using **Cosign**. This proves that the image in your ECR registry is exactly the same bits that left your GitHub Action.

## The Bottom Line

A modern CI/CD pipeline is not just a compilation script; it is a chain of custody.

**In the era of supply chain attacks, 'it builds' is not enough. You must prove 'it is what we say it is.'**
