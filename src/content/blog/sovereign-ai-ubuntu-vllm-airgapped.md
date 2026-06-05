---
title: "Sovereign AI on Metal: Building an Air-Gapped LLM Stack with Ubuntu & vLLM"
date: "2026-02-02"
description: "For when the cloud isn't private enough. How to run a 'Sovereign Appliance' using hardened Ubuntu and Open Source models."
tags: ["OnPremise", "Ubuntu", "vLLM", "SovereignAI", "AirGapped"]
slug: "sovereign-ai-ubuntu-vllm-airgapped"
---

## When the Cloud is Not an Option

There are edge cases—Defense, National Government, High-Frequency Trading—where even an AWS VPC is too exposed. You need total sovereignty. You need **Air-Gapped AI**.

This is "Pattern B" in my architecture playbook: The Sovereign Appliance.

## The Stack: Bare Metal & Open Source

Forget proprietary APIs. We are building on the bedrock of open source.

1.  **The OS:** Ubuntu 22.04 LTS (Hardened). We strip it down. CIS Benchmarks applied. No unnecessary daemons.
2.  **The Engine:** **vLLM**. It is the production-grade standard for serving open weights. It offers high throughput and PagedAttention.
3.  **The Model:** Llama 3 (8B or 70B) or Mistral. These weights sit on *your* NVMe drive.
4.  **The Gateway:** Nginx as a reverse proxy with mTLS.
5.  **Identity:** Keycloak running locally. No Auth0, no Cognito.

## Why Ubuntu?

It’s about supply chain trust. Ubuntu Pro offers FIPS compliance and kernel live patching. When you are building a black box for a bank, "it works on my machine" isn't enough. You need long-term support and a provenance trail for every package.

## The Architecture

User -> VPN -> Nginx (mTLS) -> Application Logic (FastAPI) -> vLLM (Localhost Port) -> GPU

Notice what's missing? **Use of an external DNS. Internet Access.**

The entire rig can run in a Faraday cage.

## The Bottom Line

Sovereign AI isn't just a buzzword; it's a requirement for the paranoid. By owning the hardware and the weights, you eliminate the platform risk of a provider deprecating a model or changing their TOS.

**True sovereignty means you can pull the ethernet cable, and the intelligence still works.**
