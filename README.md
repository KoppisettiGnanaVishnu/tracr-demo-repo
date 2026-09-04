# Tracr Demo Repository

This repository is used to demonstrate Tracr, a GitHub App that reviews Pull Requests for common security issues.

## What this demonstrates

A developer creates a Pull Request containing code with security issues.

Tracr automatically:

- Scans the changed files
- Detects common security problems
- Points to the exact line where an issue was found
- Assigns severity and confidence
- Provides CWE references
- Explains why the issue is risky
- Suggests how to fix it
- Calculates an overall Trust Score

## Demo Flow

```text
Developer creates Pull Request
            ↓
       Tracr reviews it
            ↓
     Security findings
            ↓
     Inline PR comments
            ↓
       Trust Score
            ↓
       Developer fixes
            ↓
      Tracr reviews again
